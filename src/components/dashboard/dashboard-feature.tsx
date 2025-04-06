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
    "28stfHq4dGpZD5mPeWR3ozg25paeniy5XLyVEBtMqjfXFcz45V7rFHMadjhU9DkM4zU8QT3SMNo2qzh5wg69Kr3L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SMSd4BuWfV98RDvGSKBsUTfrkgckGJnHqg3qqNbJ7H7utQy39wQXBHRsx9HhhJU4kfp1e8FGKLfxXST4S2RPW3J",
  "key1": "YAafoCcvtaQkDMgxDR5bUMyBsDih1EBkoqnpBFAaSkjEzpKtBuJtSG19kDCyoXMiazXg6B8cTnYvhzHsVWzwb9U",
  "key2": "6Q6b5k6SUCBQ9GdyZqdeqSkv5XmqAmEmRYhCrbdGdec1W8T2rnN8CmduLKmjP9VBaJkkotZFJcFycHUEWZ4QT47",
  "key3": "61vEgmMTWenpku7EXoVL4xedaRQeUKjhGyTYAVm4aWqYjUtTxzj59A2NNAtT6zkqKN81wv98JMyV5vNCZ6UuXib1",
  "key4": "tXZzJV6172xWPZBMqBvvg3uHpCv8r71Ekz8PveyLnkWzTLefeXWdbCpfWdEi7ntXb7V4nxE3tsRsbasQfDRNvG2",
  "key5": "5anRfo3RLbWf7FSwtMeipNdXVGttUYAE8jp4dPb8ucD79XSUXjudTaBt16YMSKmuTWiiduY1ybM9yvL5NT74sKbj",
  "key6": "MB9soqQCp8FF8rfsKDqxG8K1BuVnYhiBugUSL6Tppud7JExzu9tAucoeFtg5inXkBBmcY9PU29tMt5w1nxwS5YL",
  "key7": "5jFZznrPGXa8MbmbjLz9KNzTMuZY1kcbeCvKymUsxQcQ1kws6BrocDDc2Y5F6neZJz4yLJLyc5B7bRe5B96A2kTz",
  "key8": "41vmPmuQj8FyNyW5xZT25TskNWiZFCT4yn4uJchvuXLnoLiPA7nKJafDjnMXocCH2qgtj8Kf5gvFWJXiUQPjMCu3",
  "key9": "4Zo1nL8eY5cMkCAGKnHvoot2h4WRgcgg843XDHH7JwEgWcVjLFqjgtcqaHKHWj2XJFVX1QSagk3K86jzDnQDmrYB",
  "key10": "5rQjD3niFK8skSxgEUMmKkmNVay8oEgt3ijRy51myY7Ku4No9W7yqo2xAKkzu77KqPsWDPtsXbtf9H1TBwtCqiA",
  "key11": "5CwP35Lyk5u1JQuNeUht4N2vvgWyXV5QwQi8HdsyK71MgxRFF6P6MA6YeB9g8pekPDxFrFQvhXC3c4hiwCScqT4",
  "key12": "gxWNL7mru3RaK6Xx9Ae7yuxzhYFeh9Zyo3Xw2rXDmBY467jWSKzpasRQUzrJYYNoHR8KESJfqBkddA372h8YFH1",
  "key13": "5JeLW3YJJPwFcxorhq2dsfJmVrSZuVpfGjBV9ZruRxELE5Fg2JpoTTVmzjRGyYxfXAR6ZnEzH7752vZJodNmrTS8",
  "key14": "584jk5BRGsXizpBWfex5h2vr9ry94yYct2NfMJR2Puj19BGRR47qbkcKPUSWTD8sQeu8jafJmstN5JPWDy2wpE7s",
  "key15": "569eUjRe8GabEqdbzmjGSz5ZeoJjvysiHr7zqMMCSufPSnxL7ekcp35NPHSTAndzWGRJpQEdR4kuUeYGuUh3Paa8",
  "key16": "3eNzSreUV1KJzKFZQ4jV4bNQVYXkt4xiyjbKGHr2ymoEgyn1qnqhAivd4BCXMXkD42p3LmcxQTZ6GEa7TFGGSnSm",
  "key17": "4Zv5UemEjtvEYF2DZeCMD26xZGzejtJ1CLszJRUfTd68R8A7rLnYgcqz2wBaCtjNZe3DSPdYrYzABvs9nG7fMFkv",
  "key18": "agkRS5eVQXJsdjfbSQmdLgoS4aUJgQ7UNcnMUTpv8drNg7VpPFC3QL6ELWgCh95dtQeksEQNn3DK74QQ5ZoxLr3",
  "key19": "4PdZdz6mspWuLScVdBKn92mgBbXtxzMUcWC9DqQkRfmcJb6emRMRR8KhfyPuKuSSZBHKB35KLY11N6Y7ZUTQDbA6",
  "key20": "2vk3dZMUCYEcvvUi5DfUS5XweJcjpdHxRqJ48xMgno6aHbZfeWeVmWLnK7QJWe952AJZWoFBckgGfdG2qNh9J2sc",
  "key21": "WUkouG4nECuhqsHXhDUkyQskHwMjopb7sDPe8ACW2tM5Rw8t2NrKpvGia5BuADyD3ahq1HhBoPpWEr5cxkkPUK2",
  "key22": "4R13hLCqeD6Q85Xhdy8afvgKUEqSzTM9RoqY4ThWrLevyb3anWhPftHERPNv4FcrC23capVtc3EUMov8nTCmM8Bq",
  "key23": "3oLoFCc5s57Ny4n6aygHSMo8JHtfG6YDDojmRWCz8AwNdkm5oDxwxVzJgFHafzP2KAY8CbqaqFqMfZAkekxWpvaL",
  "key24": "5cR4jzTmkSgQwy6Gn452FYaaEMtrbe4ztrpCH1FiK1fQsXuiDSZqyCxanGgibXFSk8eMttf3pzM6xtRhWgAjH6MM",
  "key25": "8Zf6aD35ixYyx5pTrHXLLsQzJjcHUmrJzP8FycYfMnAddh7uNtKGddJvqy8p1NzSazd7pWqxqZsiMbvQM6Z6DHj",
  "key26": "66ZinZ29JV8AaiYhnZ9xwAHBuHXsxzNSqg9NDcbE2TbFTvD5wyc68v5Y9Dv44aKADnoCA7L3ettYJxc1zLWMV1QT"
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
