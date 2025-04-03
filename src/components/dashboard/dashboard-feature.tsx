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
    "2yjZ9ZwpXWZFNLNq1Aoeh47kh7Cse3b78Sf6AQmPqgKFEW9pXaamJnVEQzpWVDHEp3KcSvJeBoGtTsWffiq7idma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xDDXuv6M89uwbVs9taXBzX5o3rsERhd5dTcUWuHfQhdZK5RiBUEWRv7ALPth9WfbRd6e7mYiBeEC6DUdHPwvmwD",
  "key1": "3BdGYV9xbAJEX3qna1dSECCCwKjexH2ZxakJmpY8PZGXvif5ram3QGkrLtbmQ8iccxdz4eoMXnU1yAUcHXJhmXVM",
  "key2": "4UC9NmfbVWKT3EVadEPLE9B8thnboxLyTVSHwB6P26Wr4eGZbC8WfBY5jihta9UF8v7YaRmS29BRTxR1NqRPSCe1",
  "key3": "ZXemnQb39ZRmTH6hej5HCk6oUwnwqpXudbhFJJWEqrHFMzPo6Jsbz4JE9vxcyxy4mafAdxz2NRXFqSP6W2W8jAa",
  "key4": "3Vueq1df6f4JfTiS8Q2KhBx7Ft3QdjhJp2YVZgazJNSAMYfrwWYy6jCompmqaWWQuhfVXu3nsboNRdbiqdoSX65E",
  "key5": "679yq2GcRPjRbw4nQDitaXQsfYN7qwVZQJmZECh8R7uMUKK1eQAGTRUckKF9Mz8JFsEqD9dzTPv2fNCZJChW4pLU",
  "key6": "4GF9CECYA56MAQgkGWQLQ1AtUN6GTf5Rcdwqt7MGDuaCPD7PVZPwj4h79FdjntcZ4TzGv8E1TXjUyXQJJECNrE7o",
  "key7": "3uMmyY4pE9Cy86PbdysJebEivYxoafFMhesriJBcnccHqMN2PNjzkq9Rw75imsZS9s7yzvLCbYuWAcMBDz3M4E4N",
  "key8": "4p5f4CumSEuEagMQ8AfE6eUmCcbkg2QAf3De1AiB8LPgNw6vqVJ4T9qiXpffEeekK3dUEh9YDh1jJacD7thRcFZ5",
  "key9": "4UowziuRxxwK7ASkyPoXMyfxc7SDwbnfW4k6dhEoCioJfrArBzekoADG9ApVRetjfdHq9gjxgzG75jA4Ds8rBxt4",
  "key10": "3RMan5wvu7FApvx7zytNiywtRbqg5MNusjpY1VnBNhoaCE5ZYQtUXa1a1RtJYbjzwHtzgg5zXpC7ABBFyVdvYQUJ",
  "key11": "4zCwiK72krvdHLA9P6AQBJ3QiryPQgiZrERmnkFh9W8CGCYbvLXwtv1qAKfPvVZx4eUT5KbQEobMsGnM2Vod92aN",
  "key12": "41phQjp7WkCR6EfF873Tq6BWozWcJcjMZFEVT4EkGG9t7QhSZ675h6MNDSS1QU3u5RxyCwfSPfP3nnc65xRAA7Ht",
  "key13": "5sL6TM9wZmYhRVipA1ikqxj7WrUNX9yJAHZMukbm9PQC2zCBN7DD7ejJ14NrgdDm9NvWDC6woXrdtX2b9HvMjUbV",
  "key14": "2AbWm825XUTHPo1v8gz7KrAp5tf5RuUhPw3nPwArfUaJvcNvEK299RtgEmAZXo6Z1k8yTX9kyGx8cdHVuv2Yf52P",
  "key15": "4rPnZ6tKxojoL2aRJc7F9e1Lw4nB9SGzdmQVy68KU74DifehVBYdNCK17WVcj56NwfGeo9jVD3MzyJeNUjotRYEA",
  "key16": "61uQ1nztY4sDrH1GWG7UizB1sr2EBQtRKqTtQcfPzWL73Lzh8VbGwJJcDHDbeX9YaTVgJAwCvfePrGdrDK1ZmChu",
  "key17": "46q6N71WEBvHaR2uUQ9agk4ejHD2u91jaFUpgAFypKMwHiKaqenqSrqa7ocDHVYysDX6Fj8GoPSUQSrxSdC2h8Nf",
  "key18": "4JZZ1wThBSbijQmWrRpAy5dHGBDRT7CESSUnCdNJGbM5ZzzEN3dbL4htKrUTuUawBJinJH4tFy6JUxtkzYEBSYP9",
  "key19": "5vsXePKgemmpxnXJsr1S6tohYDxxkmsupZ4wyEvLMo1QVDqk5317LhECoii8uVXqDxPyfFk1tsuPSJTvKJ1wcjqg",
  "key20": "oBrUzVf7JhdYAG4a3V5KMEVcFRoC1N7Tp6hHzUTFzu5it52ES9ZajKg616Tq3RZWm2SaTkKJWeCfXHc4pNvmQzH",
  "key21": "4U6cc1vXHkoGFqKRs6VHGQTWJCu6QAiiiRxe6Hxyfoz3uCkJC3qqVXgeT2FEcN1J9kS5kaYU56mimc7Q7xWFyxXn",
  "key22": "5YV68GFFbeHk6gS9ASUtwjxSvfVcvGGjKeEvaECyXZz9xNB4x3w2PRz53rBiCro21EJpTzrX6X3n5Pg4zkqEEUCp",
  "key23": "5oEjTyvZJTuCM8ewk32gsiA2zqLyMsf5QTTkk9KvLdyJM6apvTnEdwkazgjjEjeY6UoDSeMCnhZrjKFMp6fVgqNn",
  "key24": "JqqdQDFCasoxaXsqLVQ6iq9HSWUQgW3TJN7BGWAXudSbtzBXVq8RjJK9WfNPPMyXPZgaBYGFoxCaCz2d7EnAgbh",
  "key25": "3BpFmyLorgb27Pf5WGtQh7CAtfBW2Lqh5wriVjHoUE3TCRfawPMrPXw6oU5PRnMYC3cU88HkgdPLeJ6nPusvTyz3",
  "key26": "93JqVHgijcSZtJqW4b1Df1E4rPtr36HZjXFn4DaVjwJiZoZiH9iwdoTBpZpHqi6KeSLumUBVnBsNXJpvWCknYiJ",
  "key27": "5ARk4Rj7uRL2JymP4vp3vfaw9mdjCai31zWD8b9iY5Rm9oAkYzMcBrYp6QiDU8PfLrSo3vmRU4TFr5jVJATEf2Uq",
  "key28": "2iCQAiJcrJRAgjbDEi2UkQycY3xyQJwfXftME31ZYhwfbJ1jjwL2JFanQ2p1XrEsEoc1A8zNp3AAjDVAJYz784bB",
  "key29": "tF9b5hzz8GFsJZ1Czxm2F2rj7THTbrkntAPE1MUB43dGjtRHa1GGoemAjZcP976L7Gz8Xs2MQcNhTSZ2TjXvsTD",
  "key30": "3eXtbrVBYJ3GL9ksAaYAyQKnhF9HCJXbPdWYj2n3MgJJf2t8f3XkwMk6yA9S8h7Pj8z1gn7GhcVZsnVRnUKcMgfx",
  "key31": "fyPb9ELNv7PcTZcz5mFBDKPbzDqhkt6KzcUr5dJsAdjZoaEM9fiJFZemjrMVuh6GY5o5CNHcn6dmp5ckwdpHrGY",
  "key32": "2EuKzZDyRHXqnAgNQTDvGqnzTdVA2p7zFLczwWyutKYScswY6ReMT6XrNLwdQEtg1Zm7qE6hexuG7o4KfMdAdu2Z"
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
