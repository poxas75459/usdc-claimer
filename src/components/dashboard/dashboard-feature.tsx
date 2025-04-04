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
    "5TiZPppJ5bMVVhVr7baFSW5uyQxjbLdFbxFexYiiLeNhX25rtDVw9cksRi9YEzRnfUc8fh3W8z5dNarCs1VWP6bA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xW7SUvioXwPdqfGR9vzewXiNz8Bv5bANNahTtTe2pUF8iTkaJAxZcnsSZfc5jmRBcnJjc8YUzG2fkXuQa1QyZeM",
  "key1": "3EaTtHbyf8rUQEdWA8fML95QyKGHQhhVt9cvCuAKMZpX4hivrvbYDDJnwoYv8FYQRW82yR3Kc2GwXTZFAYdWgBEb",
  "key2": "5MqG8UBzPWTuktRY9mwZb4xXi7SJNq7zGns2umNLoGNQ4d1HSese5HzXLe4du9XS9ytFRT5jZCCWqjKWcbAAEoUD",
  "key3": "59yLd48dxz9qPENSaui5zwBrrXtB5T4vNW74BQiA624pWheg4yQNH8Afeq97tMJqvj4jSbQgXK1tv2dzCJPcUfcD",
  "key4": "2jXtfiZUhQVyi6qUfg3TCavZR2ZouszAJ9rps9kZxAMwfTznYtgrZyjXePEg5KcdircPa6597e3quTj4LiQo5w92",
  "key5": "2bPLc8csfDoD5XGD5RyoL5kyttQtBEFex1Hn7zFMGMgey7ZWG3xs68tacBAsbrZHYPobzqtD8buXLYLBrBo38vmQ",
  "key6": "3vFZHMpopfDmDWNJ6JWsWaEgk13Gc6KKQrNE37ZDT7hz14Hm2obu1aqJ5ZMEByg9cmkapcACAoSGwdTJgkzWonc3",
  "key7": "2sR1yx9a8YjH3xDUQb6sD4JvTD9AFEXGKmdJDmjQSSQQhyuSmx2HYQFrwjqELPp7h9mCGziyqXc7GpYAJwJPbXXU",
  "key8": "28Ch4VXhMLbAjyThkeXkvKgqTKnUE64csZ1WoytJJn5H49BtdvUXYDzUSB4EfFYcLiHntewmCAs7YPLZsnR8X4L5",
  "key9": "VapunBZamdhKt76VbXov8m6Ls37KsmWWKDMDqJGfQAEKCM2aYovT8Lw8MZAYp92UomAFNbyQuHhM7psZdho9Cku",
  "key10": "28rdPH6npZbhGHHNcK9i7MnrMxtHC7BNjumWG7zJpZULetq6kxG1KjkmTquhXUzfjdRzos9P18EyJ1A7TdAFSF14",
  "key11": "5pPWPQQycUSY4u188TJ8ykPKsrPc6ChochFRPkUJBxBbUnEKxcZtJTU14gwRKN86pDbhXX4EkAn6JTKbUfxrKeWz",
  "key12": "67iHTX3qn3MtR4HtRepFia3XLpq57sC94GXzteiMfb4xQHixLZjpv7LHm6htWfgFjxUxpDweBjRwVHSDjJzpoNjC",
  "key13": "2cTjPiBQAckrj3xgQBcpSfcB1e8TdmQjGUZHfz4srvZUAUoULhWbwVuf5adeYBJHTEuvTCFicWVfU2gZkoC5YAgV",
  "key14": "3iuQXeqAwmoUk3SK5jiJU9uarrTnZfgC7z3QnxY3N7h6CKstUXGcQvw3pp2AqmWZ4UeN5NdnUb7dGwdCYap3CaTH",
  "key15": "4VTKUhiK2jMR1GisGNZJgRwu6dPsJBo82MDegZoAPMr7b2UQnE1UstJGGgHYeAHobV7Acxn2oAXCNgVGG546169q",
  "key16": "4hytLVq6XtmR3uXGorSUg7XxvydMgEHZV8NnHZBAV2rtmo2pSC3bNtYckZVHW5cdPTP8UHp4kZB9FZnZSjBanyWj",
  "key17": "3SdbYBaQdo8pbyB2TW4vymMVe16NUKQE6qd46jqs8yJ8PH3xrAvCSCachNzQsTvGxuLBHkXpAyyCqJWS8xwqjpUL",
  "key18": "5t4632zg81w6Uwto7CNJLrKR3AR7cjgz6uKwnv6apY84AaH3frwbjfs1QoyHkdrZ4mGwWQppHCKfGd1xVs4HHiz2",
  "key19": "qHGzCUWUr4koZgdLqennRUMeTVaDaVLoGk7bjWn41va1J45eGzRZuRR3ZJztNxfKnoj5kFgo3ZcTugHq57EmyUS",
  "key20": "2LSBhpEStG4PUbNJK44YX16kVD3GT6MFwcAP14U7anqtmiuENzmZLu2m1wakQyb5Yz38z1LuNx7Dr7ZVKovS376j",
  "key21": "47ascYPdZsGBTdYzazkX22TPWY3VXuAmNsB12VcX1oP8PvhrM2z4g5SefZYUu6vF9s9uMivJSdVirzPGxvYUAjj1",
  "key22": "w5D25dSZQgasJchUyrtJ44ixX9pEDbVZERZCL2usacpVcnWSo7WJPQYErXwgr4wPZ77Hfe4U6FeStrcb3HHLweY",
  "key23": "psN43jyBsCUW8vNHjnwMjdTRNNczUn4WvA4pQUkxnE9CkLwvB7xpJfWnTBDTpzQCJ8PffHNo42DfxgLcw1LRADM",
  "key24": "jiqCF6W1j3UvnoH2XDDmzB7hhDH2AVx39cWqvZ799o9bwZmB4gHv4oXU65U8yPw4rroH28autFkoDEWYzbxcjLg",
  "key25": "2VeJLK5XjMpPUwepKh6FWJEdZ67FfcWR8xCbKnymTzio42MXQYqR9ppwnBwRa49xcpA8523n14BTxgc3hEngPMb6",
  "key26": "YneiqDK4pcZxGR3U4ngAe2mBnTHhjx4suyLE2z2ezCk46rGQpuma5oJLT2rjYM2pERJQbNVKA5DU5wAfe9doaWm",
  "key27": "4UZeQFgdcP7y6J4NcSQsAx4Je8SjdA5wkCePDAtt9ujr83w4EER15TKe1nGYrJ1sntdxLejGX8DzSg3k58wfyF5b",
  "key28": "5LEHutrTdpzYBy3WisRd2LrBRFwnWDHk8MsMcUbWegwenU89FJnkMdoTzFtefXSbxPQiHgspSHg9T5d45gJwoJgT",
  "key29": "gGwMEoUV345JyeJJwrway5mD3hpZZwagMWCgj2qJbv7KXEZdNejVP46incazXxLQkrkkfxbGcekjgS5X7EA8ctf",
  "key30": "5492n78WyS1S3coJroYJEnbKeFgf71nCKu16rzCs3NMDJz9HDu7QM1FyzqggGrP9rjsFmyfq4L6auyPJ8uoU6vK1",
  "key31": "21p3DpQ6376os2JUZQssSA4Kcj8UvBSEA9ckM5C7yexNTRgAECZVTENFWuACUHjWqz6tKLktkF4cAnoiZZD3VvUG"
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
