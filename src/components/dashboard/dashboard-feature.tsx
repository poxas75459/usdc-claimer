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
    "51AqMGVNMdhz8BYoNTpUzdbxT6w45ha5t4wN3PQPrYfapN4F4WtrCBoEALx5xjCq6RQf4YSgfHfwckAHXRQNAat5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AiXU1tiHLdHxqvSJXwuHdf9GB9xcqfBhzu8n4bLKah5vNnUwnByDmvZfWAfGcNWvWMsK7R2hvMWu8k7q6eycypo",
  "key1": "4mGpvb8ys6r1bXYqpdLUDCNSN851uzAHagRw6zuctCa5VGE7RAiZptwf52MGmxuyNVfhPTSBex6ugvEX1niNUeAb",
  "key2": "3FXGTCngbCehfpUP3Uwh9KESNjNe3TnU9Azo2VyqpobGzPeA2bmHAhMQYzSz6gZSSm2L7PhEmAMA4PpN9SMTnGqy",
  "key3": "Wij6g1uEeqP5VUqjJKtT8LZrciPaAEpojZzZts98gJSJTAh352yQW9XBg8TfiHEyiDe6bCpkGQC2Ltmx69pFDYn",
  "key4": "2DLgaeFioFB54TYWo4X2ZB6qVEZLUHeSp6Cw9NxBGu7ub2QLUcGjZ9Kv9hxkuT18ghmA9384BSkckaDJLe8Fjsho",
  "key5": "53Q75StxzqJbprQDWKgN31QNRWR4MX1F6VAnv6JYb25DvFt2DDa42rovukfG8YVpfBMFhxaAHrwwN7zkvmFiDg84",
  "key6": "2yoVwxpjtjiBRLp8ePwmMig1YUZ4FNjfBcNcjpkVe2rQEJEzzp21gJyBv5nyBSFLLe6auerRGosUowx2Kk2W4Z9r",
  "key7": "K1J7rTFuWSpRsrEE4mAkyosQZQqTPGDLaDqwi5zmtTxhW63j8AfguqrucGcEFBLksCSAZUUUwLakDhengnkxeHP",
  "key8": "3HUWLLtgfaMSV5a71KV72CAkdKob3ejEVK2DkZNNp8HdQ4kdqRNoaPqPx59ezaZdKVzsHKr4crqQABthuUHUWzkk",
  "key9": "3qVxJJXysYhZx5ZDN2nA59pdXJibhFMQPVuStr4wDYjumdtLkwv7PE9XYtAoQ6nYrwBZzrLk8veAQqbApJsaYUx5",
  "key10": "3FzEchA7mmX9rQQe5HMkLdC8tnXvvT4FXQBj4a3k4khHyCvsTuBv28fNjYratiXzM99ju5pxHznmBYJZ2zh99Eco",
  "key11": "3Se8VSuJsa3zLEj4wqzXBbdf65CCfyEeDd6N9nHtcijyTzFLvqBY1yaddtiSzwBP7HX9Ww6imnSw6auXpHmaKcHk",
  "key12": "emAUYZaLhvdmxALRVMhe216x7iKPRY5R4wipZVbttSR4q4baoMXUjHU2qKc2TbZSfouhCqzidJWzmgbvBpRCU2x",
  "key13": "5heWepmFvD2XtANExye62uG5tXzeXjJZoq5pwxUgE2U63PX4CreTUKZn994JUnQiMGmmmjpjb9ontjLoijcd6FHZ",
  "key14": "4CDwsAtZUEdUqZkuFeD2cZyA3JrWExLbYQ8rybKXMpB33G5onh1MrSF7rDFAF7YhhRJC7kBt9FCBHEkyWAXybJpy",
  "key15": "3KnF6GwZWhLUCZGxN8Quk8xpqno9wpXHhXhExLabARi39kj1bwSFC5UxWmrzc6meLi32yrBCsnQh2TmRhRstKSD",
  "key16": "42pJefoBYPYfWm1mcoNqPZ37w8tiwKJ4j2hMA4Wpq2akPww2QXxW1SkxdHnQ8QW3xTi3J23h4Ddyhmf6NocnJwgX",
  "key17": "5kgHvggcgVVYwti8W1SuWVcemj8arDKuDecvs5vankikHpNSbXctSr3dytB61378DxfpwWRLQQviqyFkgQAPQDFY",
  "key18": "5uvJSfvR1TbkNumwjBSCAnzpsc7RF5Jki7YGJZ2ZqkpUha67CVNpbjaaNk2ozAKd9AkFYyRBEWuLyvm3pSZprzZC",
  "key19": "5xYhvrS6NsKHsS26rg2wMVCCUJaFqyBDu2jmRqjtUDUCy7eB3ygrSRbt8nSQxQmWj9fZ9LJ7DZLJqsFYWAbbwnDn",
  "key20": "5qFA5M6iwqwYhkjP59ghncQ689pWbAkekMGa6YwVqsD9XpLHhq2zTPCJjADTkeFU38LJtDNJPU6XtYjLqGWf9UGu",
  "key21": "594HDH9GYumScRZvQbYQpbLDZjsPaHP3Y1HBF6bGLveXzF7zS3bZ58mHK9HNpxvDcsfsNY1gPwwZ1WHcHNGesymb",
  "key22": "614PLdbakcAiLvf4tBex8ZrvLWf56D2h3URn1mREdNCMEiZpBMqDuUbmUuDQWm9jYp2kNVRzTEN4AKs8Ysxsnx1i",
  "key23": "4gn6Jht8D4cbW6rhabKZBCcNMC8cFbtZYJSJxeCufUQcXvEHtLWdqVPDvYPuYDJmM2AnbXbaswQo46QKq1GKnxCC",
  "key24": "3RMqx87AHYYCef4ifG8VprgnNzy4jugM9PupZ7V5D5EfFxxtRsoK1469rTU8JF4ZDxyR3xFA6dZwvWiCyn5CoywR",
  "key25": "XySU3TPczEokvwa9wCwjF3Ptt5T37FfrWyXiK1A5VU2rUyej7KcgpMDczukbCFiDSWfxBQwkUywxiwbgnpjgs86",
  "key26": "3HYEYRnkZLjXDnyuef5mMfF4FGrkrMWwKLFtZToR4o7P2uU4Ne1ASLHWKSC3t2pLKuuFsbSvkygiDsxPVFh8Tg6N",
  "key27": "4xdDjqzUxSGgAN9qVdmbyLjtDc3nZ11xbLCeMbyRgc8vaE6KzxrW6TWsB8jrMjW96EUNUXZET4sw8UrpTvZe257F",
  "key28": "33ztA3hYwkuKpfdAXKhtxq6vjUzCwDkZRgwGicvNuSz82VPPyN8zbWdxdnUZ9XH1Wji1cGg8XSztpuZUovaULsxe",
  "key29": "5msQ5TqtDwxVzEVmuiacMV7hUAySftZUeeQe33z9N6o3MfT3TQxkqMBHALHKkDvFfNKyiy9Dbz33YBhVrptUwgn5",
  "key30": "4sA2FgaCu8miKK2v1zXm9U9FXDzBtPKgHEW6ocJwMHvYo1rGiX1iX1ZJ7f9eq78RnX9RtA23vWiMgJVnqjpx4o1w",
  "key31": "tGiA9XGFfdobPpoQEuJmRYVxd2aqvRKvihfKiSi7gxwNYD9PeZVchah7g7CnqBbSPiN31Nwde49irmJzPyhVCcN"
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
