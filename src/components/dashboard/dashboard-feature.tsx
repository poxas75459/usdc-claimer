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
    "5esCcKiDqzEjcJWD21XF3zKv3RZK9ba96kTVAWUjhQZqJWfatKdj7xb3vFByPwt2X37Dmnf2n9axjqEVqnN2Hgna"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TZijXUyU33jr52Kw1ySUKyzv3LwBHKdXd9p2bkiMbfw2Lz3McP3gaWZr1AX97oQT9gBejP3G7s2V4CwNnXjPFix",
  "key1": "4t553SsPT4HieE2YgbUJDN4PenzmkEsbbc9uKGLNMs9dJ5kXQmcF9bAYr2d69SZtM9YV1Pu3qux25L9JSNJRAfQk",
  "key2": "2svnsKjS1vH1KQUVRHNCN41xSYUpkoaeB6EPLYxbpBJ6z21bLpSRuR2WFRMsCzRKkHXp1vRHRZdsuHFHR6FRhuRB",
  "key3": "5fDyygK2WDKxHr1eENTsU4hVPR2V9JUnxnxm1FK5qoh4KJb5P9BqDtL2NBBxBYvBotD1SyzumcBCLrhjqyX7eUPr",
  "key4": "5aAfVoZsDancN5KGq7QyK6pHqdSZF6cV7puS234SStzYVkEfgDvnxkN8hGb4Xq7QMNJF1eG4BrUEtD3nQTSCrYpU",
  "key5": "5xfe1ipBQxa1vVV8AGjZXTHEjfx42iNot78ScMu89WnbPasWQUV8xfof4QtDdKxBkV7X2VTbXcL9z4xpV7Ar5hri",
  "key6": "36Ua2Xb7C6cGZaaa7fNyt2s2BaKsgi5JmVnZzZrYVJBagwTAU1YtRCP9g1Mf83Af2EtE7rB4TiAwsppQK2Q7ygdU",
  "key7": "QcyMLGipGR1QA788tXtjSHRXcMkhjoASpbcdePtZWT8i9K1tReVu2iX9fj6TfS51Ua8j8DAh2cURe5LEMSEntYW",
  "key8": "2pAKe8dApErtb8Adz5UiiWotNPwfTisQynBiCXgqf8KdavTjYuDbxATsEmGAKtyt9Nr8u91ozZvh51VpxqrJCRgJ",
  "key9": "cLS1hQAPG7nYHnAAZBHw1K29CDPSSFQfw6CoJut2ZNGioqQaAHvQ8yMCUHjF3ZFeNo1qtWjULhXee4cXuxnwavH",
  "key10": "49h4pRjTSByXC6JDzfXAAj2WmuSc7FRjMa9Rc1cBdPbsXKVLJGS3vBzSbuTGQZWYebAM4jiqe99xrw6FuP9b7K1s",
  "key11": "5Dhz13vmLgrebGbZeFfdNfdVNkYaz5TuvkVzHyFVKHD2SumGRLbzLmB9EsnPsKapRZL8p8diVsrSX53sdUnVj2h9",
  "key12": "57bVNQcGNzszCocvnhiZt6Uwpu6WPcHpW9m25tMyKUmdBNHCPWhS4zKHPPYjiedcpiAKzUnePFQT7HQ8sJMn68Sp",
  "key13": "5tswYidAvrgHPvXoKyThU3gvd5pP7S7Jiy88GXYkyenLMrNCLmfVxoFHoCbktDgbymuY5RgypdmHbPCnyAmhwv6n",
  "key14": "2zUrD4g4HgQtG3Lyh6WFvcJJhrHx1rUSByF4RxVLXZd3FWDZn3StMxWrxULEXZrXiptTYWJbZYMVAyFPbn9U8t4P",
  "key15": "1oMzEr6Y4VSfjTEHpWaJBhba4kAt7gPgxjMXw4R8TykcV7dGG6aAfSABnVp4nXnXZpCH7BUqgrZNbWiQrD6FYaf",
  "key16": "5Lsvcxbd2duqRRDRh3YPuGmCSzeUtuhMKAyMjCvf2zcP6FdSmhcGM6QwjFvhRGQyPHXXwZkL6oHRcP7fcVmQbSoY",
  "key17": "3JdG858SgwzaEgN7YsTEaAgYFhaETrtKpqCh88SJfeCAGfDe3kzjwkz6NEgWijx5PgMr7Dkz2BqA3AUcaGjUKbJz",
  "key18": "31icJs7Nn11WNTP5DJzFSFJHThoR38Pha4xXY8QEKgwRVEgeoyMJQRcS1w11m3wabmJ8QXoNYWq2tfQ1YdAts271",
  "key19": "tPQUByXPZGKGr383p4b5gyiNBq8LXHdsMndbYnKXbFYUKU9iRbcTNbBBsY17FCGYqJVSjkC1789PhoLtWLzxEXd",
  "key20": "2Dq7CSEdeyyrX5i2DEfPWp8cz9FdFhVETUBmHTpnRNCxFRKayg2e5yhkEXFFivn4hwj92MTVo3vsbn7oro6eNbiC",
  "key21": "gBkmDKd7CV51bjdtjGKSVVU3iEMw5z3cZNB2wksfLnZhYB6iswfzpEHeHUw4qcvFsEmRVwJSZoBLcro3kxZ4KqN",
  "key22": "65fmGh16WpkTqSJzyYWhZarQkYdxFtdMcn3gthenTwY8N1xPnMNhTtrFFTdcyNknYFpCr7Qm9GLsUvVqCVY5TAJm",
  "key23": "4nWNdnV1oMMVzBuwjZt85Jr4jykkNduxwsanGCBbEdAXcz53f3nJQwRqQTNGvahSnZ9ZtaHaMU8ofjxbF4cshrjq",
  "key24": "G3Fqi5rMkLGxdpnktYTbQRmMxGAvmepPQynZEuAw1RxedHAp6X56EYSHCGHTr8a8ERZ6icaaFiLrzDeb7QScFG9",
  "key25": "kAiA9zHJckemaqy6cWp4CzsLWd3VaTbo9yptbikeHLSi4Nnx52GFWPU8uhaBghCEaHqzjmXevmwvGWJ5oB9otVS",
  "key26": "46nXnPD2vm7bXTDkZTjnypRRP5gPophj33H2xGTKHz7DnnA8hoz5gvcSLXkpA1meq6Bwg7g3wcS7UW6E8nQXc1Pm",
  "key27": "5Sg8xR9MoFEaiTHCwKUFMKXoBt8fcdEPvVWZGhE28hSBTNNB1JdPufXN59hjsihzw39W5ni6m9VG2T4CEWmUTo4b"
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
