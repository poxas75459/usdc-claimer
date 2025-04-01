/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3Bx4Kqp2TEswh2QeHGzT7D5nfra9JFsDxT9LMUxYTMvR4tA2eZXwHYPdMEuUHpM8qzAx9BXnGYTzTRboyM7AR2Bd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45PXGeLxZhnmyYzf2fBLVpyHmhL791kn7zrAcGHXVTsG99RBznXEWJPsCxNiGeoSJdj8A3nPiEiuLt7PXtRRnmDY",
  "key1": "M2fpEFCTfQYiWxos4McbJasShwwdE4mTcwyYUqGSYpJRv2GuySxENqPHgHqbr3XtDqZ2WEr9SLPcnixNzp1kkBn",
  "key2": "gbCPQGQtdQckBxeTiQ4fesm7EdVB2i6pPSNBkf4zdtTS6iohnt1KFjgTvqBRkgsk6Sdfe1yncdqJ7K5suJGJ67C",
  "key3": "5EFKghoAsvVnWr5SGyQsR9QJX5WmfoEzcHsY9upwi8B5VZdVXKuXmpxqrifLRP3tFDcreVTQNoP4AE4LwkMy1edt",
  "key4": "2kwwoZLrJ6taLPtqbwhB8FMUKHVTWNiZbK78E3u8LBwsWwxhBaf6nPdrWhCeFgwXm33VKaDPiDhK2jPjsSk1CTUF",
  "key5": "3Nzucr8AoH6mjqxpx1nsG4rvmEX5bbB6HC8zTf8FRfkUE5BTGjvvZfzvzGKjGXZUccb4nmevVVp87XfreaxFdjqR",
  "key6": "249ajrowdHRfyDsdqRZVokHyScFShHATM6bBCV3g9Rt9B5mag4dFEsKLuRsuNq5amQimYfwiSU52Xy9ECpmonqiU",
  "key7": "CexdCYcqsRfNmGaQG7fTJ69DcxyQnrhW7RE38UKbq4MPKSwVQyCYG7YQysqxVNoucn95MSZ7MT63KL43y327DP9",
  "key8": "6jUVKF5w3Qv14YSRXFA3mhpaQpzMFsgEnH9q9QK5vBfMe1kHy551RmhpxUvfnruQ4MCPpFu7iMTSKuJ2ZgfA8T7",
  "key9": "2HMFsu3BkQu6B7xYsMU11LijJxNfQTWjyiBi78oApGTSCrGtsmduCDVQdBLLcdiJ5zhghReApE2VU7pWq3xdkWUp",
  "key10": "ZnkmS38J1Vh2wDgiSiJJyxqCzqu3ktciztafVi4rQ4qx8fUVNqBjQ8LmZwH32sEd4VAH1QQNXtkKGaT5FjucGMX",
  "key11": "B6aaqNRy3mrDojtZ3QkTJa1rhZstnTstWMmoAjM4Jt5qFAQCmDciUqPrYZKYtsdhG5a62rtGSYFTaMKvespYw1c",
  "key12": "45m57EZFYVvkmWHhyGzGfTuFAQFuBEWKNqPSrXX9doiCsPFqx4jqKfJ18mCMTNupgFcqpq3HB2gqZvbikjPnF54y",
  "key13": "37s5KMqGeCCj5ftUKjvDvtUMS1pkc5sCbyYHSVEApSdzxj6xvbVwiJBWv2Xh1AmHQHsauk9xUwMCVrx1DHJKrpQY",
  "key14": "21pQVkT8Z7vG26iP4jpum7F2gVNQYsjXUXUYE8J3XCxZSA4FWFNiB8GfN5eSoCC2tETcp5axDcevYf4A61Ubt8Lw",
  "key15": "3u4wtmbNkRyCb5wAZD91ux6AfCdiQYA2U68QuPLdszTwnbc81jJaLtqeAQBPauh4j8D7U2u4RreBpbgdjERmoBkN",
  "key16": "pyXY2E1GLBoHZbTdFWy67rMvyeqKP8nhj7jvYRDy5rRS8gR5bNBpXVhq568H2XQ2FCnf12Ucu1F5h1LfGDbF2WR",
  "key17": "5p76kKgC2Z6hKEmM5utEbM162jthEqeXCuhac3sXdAL4C7goxwzFPjrztv5GthN51dZMsdrqewYYs24yyNVHPya7",
  "key18": "ymyaM189uFSoWUMupqn1HUvMNz5s66UFQ28bw64vv5Hu5B7d5zmZ8MPEz5eNxDKnS5UauBJ17tLsr8ByDtnPyx6",
  "key19": "5AN9rp31DDqgXGTG56PyPZ9oLhWagnYaKNGWaGyWjCV5Zd8h9rcu5MeJU5BCgMHWyaufV5EJ1MpgnAqjgbmGk3AX",
  "key20": "3VqHk7A6sxhHXmbdnSEeF9R8P1gvW7kJYmPr7zBdQMiv8vM6EshFYNwcJyfpUwQz7ymeiMYHgKaBcFGWJBCXHZuM",
  "key21": "4U2NXpbrtMy6fgAGDuyfdKQxNnHLS2nWNtYXsfdkke6TqDnoGRZeZbWFTaX1Yj43QQhdUEezfYH4Vxvdka7kVKws",
  "key22": "31CSA1WQacpGyvMTrXbewSUUFkMe9VXiXNjwjhP9U23XeZqJBNFYZB4VetN926To9Fv76a3U9jZ8ayksa3Ecd7cG",
  "key23": "3PvE7eA3gbB71ogDNDKFTWtN2wyVCUU88eoDELGjQp84fdbrxxp3VHCqUQKtbxYp6Nd1b8hdewCUyLQFyDkpuK94",
  "key24": "2mz5LkBRJTQXWGCMEkkZk431c3vR2GAJhPnmRvwYXSuKqajv2rnQpTGosyRtVgSHMAGrT5LArVCvFzCaewHexeF3",
  "key25": "4cKuB1WhjCFmcgJ27xTeUejfzJgZVL49DCzqg1tKTdUMBs3owkRfAdZJtZsWJpHztEHbcrXgvvfSuDUQzVi8kmRV",
  "key26": "iZ7urm3QshKjqKHu8or3iXd4Y9ecqpu6XG2mgh7Eas2YtqpPprYq23wXVp5wVxiApQG18jvmNmENizcVHy5XQdy",
  "key27": "5cmwocgxFpKKWD7t27EEq8u3Pch8nucdbySdMqaADXwBx6TaSdyZw8oYpm7ryqZV8TecWvfjbQ6GH6WuLbR1vcfG",
  "key28": "4knzqto2pLREzD4z9BV4pDGxUE3u1nHbmuXra8yGc6c9CV6yqn6pKR3UgJbhffJwPhU6PMYbP3f1zXKEmCju2MmY",
  "key29": "24pRpGnJwS8PbDDFkjsG7NJ6taA1PjCcNyNXXQVcxH21H496qUv4oTacBkQ61kDJYiavkw9PZJGu34soPw5iKrzN",
  "key30": "2yxFBCuJFr6yBEJ5s2eQhwQQSvki2fW6Lae1AeCA92ZGoX73eh73RqAGcNU42w8qUVMoCe5GbNgKya2PuGQafsfQ"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
