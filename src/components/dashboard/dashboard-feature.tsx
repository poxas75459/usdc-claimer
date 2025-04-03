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
    "taboDpNRiegCHjQvPWk4ygnDJuzAJsNrpXf28EHQZQVUWJuc3yxXF16JFcrMLzB3mir3HWiCoF8gvPGPzz4GELn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BjFu2Xs6EFhf74z7jq4f83oGbHWsqaxtoAZ4ckSawF5hvKzvAY1M4TxVFo3fYL9SD3W1xNN3vhwcCR9mMxAsgv2",
  "key1": "54PtDZ89eSxCgMiopqiWY4Z11DtawtqDT5PWcwMyEVTwoU7AMi9eH5cdnyumsbM6hXGKPjgsiTiXYv23x8WNzsFy",
  "key2": "2kXcEDNpALnF3VhYt9RbaZ3miMiRiXrXYXD34ByycSd1QTVytvRqouEJMUGtzhRUTJGK7rKpdDh8QGuiZ2Yr8kU1",
  "key3": "2fmeSM96kM35Fq9exgAJ4ahLNyo5VznVSZWrbjjUnzhp3XtZzjnErDnyhoEshfViYtxqCjMFX3qQPR1PutVyi67r",
  "key4": "5EeW5xkri9VU1LvDue8ECyCitrgtWRRTQaGo1QKGxdXdhqrTyrVCwCQG9CbV7VnwKh5fv17QANVuVob4iJ5uUbBZ",
  "key5": "4kCciB2KUxeXScVA8xG8KsM4eZXb3f7nV4T4g5XhMxantLQQfRGhMgQHQCiAcUsshVihRytiUyiZ39YbUkxSJdGB",
  "key6": "4kqtVSojbiEQmU7jvxMdre4rPcTpACxrofNhf8Dp5eHHBbh5C5FNz5iwugrMVZgQZ8YX52XQfAkd844SWg8fidNb",
  "key7": "yZfFYdYf6NFihfqTsuLyfBXtfW6978znAh5sscEnsKCKvcZN9XXrDiWgAj83hrY9HFR1qtXuFHXodMXKVkXjbj6",
  "key8": "4HQyQAVJ6g5tqrDbdn8Ez76H2P9tcMEwPVVzhqWDz6vqimgs7DCYFrm6z9w3SwNyjv4myjaxWnJ1eeET7G1qNhFd",
  "key9": "5qB2KmMcYyZpadqFBpau5mDc23AWZvC6KKpnAzkg9bEyB4RZ1MjTfXz4pv4WzMd8QTjqs6kcYNzdsTVivGhKARut",
  "key10": "5cVD5zzqcaNizoDufuFG6XKEUPbmcgFRwcZw8QYdMsiNgLPPz2m2yqrpM1DjMgBVrVAwBXcKmtmGbzGPsSWaAVqL",
  "key11": "jrwhwhQgBQdQD7NT6AxtSRMcB4ktSJi76iTg9o5gvaAmi3PiA6DCJMWung1371mTw2a4tQNJnxJBMcrC8xEQP4Y",
  "key12": "4pjNHThRb52XHnUwuqHEx4dbX3zyqTZfhfMmq2U964EoKFmRJdU44iAgFNZuFeigigaFzrmvicfvuhFgoJiqz6mg",
  "key13": "3Z8tvFwFMuprmNpC9xAbjjzmfdhKWCPL8d4qEwVqymgpD9TqExCkCn3GsfFjHMFMAE7j5cZQvFVYpsq8YaAMLN4B",
  "key14": "xXRzGQqWB637bzDdDrZ4NrTJf4ywEL5E81kWyRmERKUHkqGsdi9vCKftgvcjbbEEqhvUnbmKjSEC1gmQmMPgrsf",
  "key15": "2s2WiXixXEF63ogGx1kkyYbtoDzjEZsXYkdz49PHMHkdyRXeyDv81umcyimsdKifp3KgBUEa8SNFdzNQG1nopfEd",
  "key16": "4J7UCrEWkVNfEoGhqESFCMmnjFQMLbMJyn2HRCE7ZE9coHgfMiq1D9jcYeJQwNnCpKdRR7PrkvrcqTYk9FWnqszA",
  "key17": "2g9Qdipx9XvgKi5LNADpXvWF95j9rinnz8xLLDZFpekRpKUysHnD83dwo9E9V7mcKhjsJcvyjPgMciDS7KQvbrJE",
  "key18": "4xbWBb2vwkjEdLDndUAZ4KfUaLo68skbENbSuRMh7xyKengsJDVZHgKTsL5xLu4pPrqgVXFsTud1aDLasZvoKrYF",
  "key19": "4g5UvucFJn8i7Ev2tS37Jhuv9z7xkP5ov86VFkGAzWvivH4Wsnay9m6rufpVrZiG4oDZGkBdkmqmLEV1esibaGQQ",
  "key20": "2yPYdQDWo7AZDcx1UDTDot9Eneb3eyHAdGyTRK79eZJ4dc9PKybTUsy55JSGKq4yVjK5fBH8g3iTv8bbeMGfy6sE",
  "key21": "2bRzh1wbBFa7yJy5cQH1aEifdAbh6CGcPHAUaBVVzfk6HGDPx6gEcirB3DzBFgp7F1s8aNn3XNSfQhxgV11aEG8s",
  "key22": "5WY3poKzpuKAjtFWyZqzjTYUaW4fFrWQHkBgRQpHTiresDNDS2nZeRW1B1jAfSbCyu2fxuLTJXAq9P9biHpq2tEY",
  "key23": "4RVB9vZ6MmBtd6TPDcTayqP9Z7hvSWDkyMzQRa5jTYMtmmBGzE6CxMPmn53Ro94LL57cN4FFBRLJgpuZ8fiEUqKb",
  "key24": "D72tpNsfug9evm8xwTocMBZDfjxiRx9sHZCQDSu1Lj9JBfzf6QDHRjkEJdBK9znC5FZRCrs89KNXU6E94A46K9F",
  "key25": "3HJ913sQJVbf97auLjfweE1TUswspKXoCJJiTzfPZWoFnVtC2SfD5KycybfnX5DTqSeVm242z2U3VvCXQ4RWxbTJ",
  "key26": "VrE1BfWEq2bZBmHmyuRTb7PmBBGP5XHnVgHkt2Lrj5RFn4ALmC88XMMcV5f4GbTnykhSQRXS15UhyLQW6r9cUGh",
  "key27": "54hx6qiphQtcADY122KGXNe7GV9YdqA7aWZsRYaeYcRJQrJoJ9w72qg3skGQRgJoHRsXxE7sPqczDmPVAxbwRNyj",
  "key28": "3SVqRgxNVSKJz1gxHVKLtESjomxjhhhRzYMPcmFUuUfkqB5YKhsr5WkSeu4gdELAauQeuw4XZwc9NUMBqpD4QVC9",
  "key29": "23J96qWWAt3r8wQyVjBrYJch2RsZTgDDGypw5EgPJspYrb6rpM8cjWiq7kssyVCP3oC9oAt758rutjrTPAhXvgVf",
  "key30": "3aeHwoRSmfcD7xw1ghYD2s6JEGoJM7iRsbSWQDHWyJZQvWtyttKjNeff6fWm97HwGAFD9EGYGHSL3zYXgJ6tesZL"
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
