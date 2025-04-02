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
    "42KQqJ7Qg4fzGGNtVDur88npoF1AhZ2aToeby41RUG76P6NRZmjbEnjTetQbh7EC8jnoLL26imkhtkCN2u5s5rHL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h1LzzyUb7GhHfnZpttt1UhkK35rQEHp3i2YaKF7RsyNGEzaqw5oytrjLhX7GuPFeuDLV5Us5hqZu9vCd4tB4DvE",
  "key1": "2Acxc6QuVady1Rc7Tm7rEkF1dpRnax49BW3DtGZ5dioEzdBuQpSKK1i6suERDFEvL37mxdrzb4sgP5A3V7xWNX2d",
  "key2": "4YE8BC58YMMH9akMqzrnxSE1rJS4v9P3gR7KtsnMtoFyqPMB3i8ibbYoR5zzqQ8zgR4L4eVigkckvFrkfWb95QoG",
  "key3": "2VyAUN4EHetETjcUwfd5p7ZfDxdF2W9FsDHFNbBxFPrFpksFpjPDpfRThvPh3DeZBAgZZ9Yie4fkE8faYmAsWNAR",
  "key4": "QJXSWmbwiDsLHQK7iN1LufZTvJPnkUvKPfj6LFJQWquXrhgbFQ7Ek9v2asE58ADcmfpAccRrzMpLYYizoMkyDLD",
  "key5": "2KagorcB4vYLJ1aYyqPmqRjk72TN7qYEoGj2K37RuLxe9GpyKnh9kopQcoHvMZmAEBk6ZbSp21CEwHAqo2zKS2rU",
  "key6": "645mVQxwcT6tpZNDb8ewtxHYzd1sVpk2imr1w5iP48Rk6MxSSjc8MgEZ4xF4NhvuRYdKtGmQjVpnVhx3dmWWgeap",
  "key7": "57zeSU7nkWTGperb9jVeUZjqByBv2zNvVwyyAWWYUD4jkST47GADuAqLnzJEZqJHSGbPGNEdbP6pHu9WbnTyJK8y",
  "key8": "512xKEJESZvRaLMq5fjRDuQvUmHDqeNXfEjufjuzp3HZe6Szs8MsA5mveHMFTLaG9cMXQSYP6Y8yR2ZUZKjp79nK",
  "key9": "2zrDzV8AH7p193Zt5AupQS6EEJHFTiTwGZgsk3c7b53UQGKokLvG7vFF4J7sKW8DSBzGxmUEg5DhpT6yxX9QvuE6",
  "key10": "3KMECKPs4TfRQcDjEGd4uvLPpUshqKEiYpLpeF5jpYxuLHkQ2ErD7rKUBEUoF3UpcMHtzMVod4KCmVjD7RypcKsz",
  "key11": "2iwnCY5znGZh5YHNZF1GLPbnLdK1DwW5aFvZrhPTrQFbJeaAj1oWpSrAGxVLzN7gUjVK6FQkyZgcxtKYfHoodxMX",
  "key12": "2sk5ZFnqXSeH3pnJe9vWutV1EF4V5QNChxpH3A8v9q3vE8xNFs4C9CuDXaHf6EpWMrcXjfmqu7Q6n7VFqR6RnyFq",
  "key13": "3cFxZyXZAmAydN3AYSd1tUoRWUwNdHGPgWfdW8DXiuhQKdphKLnpupfkAhkMu4q5Z1VNce8erb9NEs3L8Yo8usFq",
  "key14": "3j9XpYq4JCgY11bHVJjZQgRXvsiXxRxRGiJ1hXzQiCgypszvc9GAE5vjdpFq9tXBN8GdwqUsY7gF7nXaZfMk8um1",
  "key15": "5sz1bzZ34kN5QnPjFJNijW4Ciryhs6NK8d2C6odWJq4AkS8KAd9NgTZzQy3hm9hRSFfKoe8af3xQcXeaQ2gMba7g",
  "key16": "3iyR4FQp6bLN3cL3xRFMc2UtA1FiaVo8Vp6yHXYSDGwTT2BHruHsNmQqrJCqBahT7gijGAt9GwH9Yi2qnccRrNfK",
  "key17": "2vNS2hjN8tzonARhkq1Txob54cwxFLymB2g676oZ5a3VABnWArzViaLQcDuJJF4Hd5vSmSgPGsHZ9XcysBTY2pHV",
  "key18": "5uGghFinKVVameuu2KVZ3K6AFcxsJbFFarvDfrKXYbxDg31YAWQyd2CbVazJ31kvSSwqp5Zig24MNxU3gFpQwg3f",
  "key19": "3crZtYubFCBJzriH3tikHxsbnSZeLDxry6DhSJGqZaKEMkoQJTg2JLwvMZgpky4vbZ5XMMXQLYSKQnxgd1xpnRbi",
  "key20": "2TtnYR2yyC8BFkewXjo7DKaJ6LXfq8ct6HK94tqbJNQdiu4CcPWxzbUMLgWSQEsVZJGdxpCzd8QSBuhz4iuErGoD",
  "key21": "3h3nSxWnHFm9bWhWfeaGHnnB82vEML9FEqAaeamPEBd5scWDgQd1wN31PMti4izwWLtSknd99TqCPmYxcjkAjHz1",
  "key22": "29xBubDVjuozoodWuNG26AomJHWkRXqSEzFcw4UeVPhbnKANh336cJwxU8fnbe18du9UjZoAQ9vRD6gKFveR5cRf",
  "key23": "569zmQSD1LHm42TTzyN7GTxXuGeN5jL5UxQjciGZfzJ6ya8jJnt6aNmyNsWG94w7dBsF4vAYgFzPqHgr7FZRqmHL",
  "key24": "5ynpKv7PyvcBqrnwPHZ83wTHpuvMABAidKEdVPkL9TQZcEd5hhbzikaEibJYnVS5UhYzEs51rJMNp2GwiS3K9o6u",
  "key25": "5865gj8iK6phKuU9VEQk5jezDr3B3cBEGMJbjp4KsoVijJ5XycVWEyHsJQQbMbeAGqD2J6J1EofGx1P5hWdyticM",
  "key26": "4CoYet22ZdKVq8D8zGfcKz896BQKssN5BbgaDS3DUA8MPfsrUZdhNceoFuB64BRhcPvCQmomJgSb9UKfTsS8Nf8f"
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
