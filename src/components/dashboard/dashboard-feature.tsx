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
    "47xfYvi2XZm7tRhDnP4n8cNpyfZZZr2sQixFYxMXLg2PH4DLvfFaGUtoPskXHAE9TAie9sDm2Z2cqoWW2fyt24aD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58Qv57u52HBKKySD4NfEUGZCCszqS3CfWJhTpHuXgks9XcP3eKDBtazzpFnW7RDSfDGqha8yai3X7UhCYJGVSxF7",
  "key1": "2ZGKUQg19iF6aNJqK1LatuaSKXv6WwoYStCJfo3FRG8exDQGYqZVdK1qPYZtdx6ZjacMYeZJgPGnzc7QYqxu5mid",
  "key2": "EyhvP6zUa1Q2hNSG9Pzi1gfcaGuf99ceiDn564zqDG6sB31EWDqh8YYcZX7cCdUgSXWxEmrgUMTRyKNjd8uyp57",
  "key3": "dkeY5J9dGLwax8tvRFqczsCv2wa4qE457MD3fByovbPTeEH1xAGmFAbCtEuoEfUsuqUDTF5hhRs6qVbdvrMkKzb",
  "key4": "5EvYip13NDCAes2sCVsnPH95q8SqQKJAoeh4d6Tz4TNXC4jARfwE9eAUkJ9PUdf5D2U48q9iRTeU2aLh3xxPTYbV",
  "key5": "2YTgp8cq8oX3FtSTyrJUmZStxnT8LMVevswvrNQfS1649xYbnVK5je1zS2knspPNBVKsSsUTwkyTfVrayVdstjF8",
  "key6": "FUNytKgbAQXtpRtSvAu56qDEYERt8tRkZyohZUv7tYVExUAD3HWxK58edp8yQmdFa3Z85JvZT1xVVGn8xhGaSmH",
  "key7": "3aVz9etYScg8sDrtRTxsxEPsYeLQNqSk9JW8cAfKute7d8gvVvWjCg4hvL2RdCBtpdk8zkXxb7a6pTodM2D4ioKL",
  "key8": "VN91LLPQWEoE5RyicHwvq8H9vsemzMvJYrYHuJFK2NQYWXWZGJhQ1BJAK5GtrY9E9vZLuiZEBMo9duroxAYKWoL",
  "key9": "2pwatABuBqUVG9HWT7uSEUoEsWThU8SFY9xRdnHKjstVk2p4NLCB8yQ1iUjKaX2FdWM5fMymFKwu7xsv6LFGSpyB",
  "key10": "5e4sE28H5fHj7mTZWNFZf5LSWE9eWcwKcx4efCTqXTeQqQCdNoLMarkFYZKiLafmvnUreP9eQo5hAbZ4wdfehLLi",
  "key11": "5LoaU6i4gscVqCxorU8GNQcVcDixGCy2w1pPNPP2iTmXyXVZKcsjWHuaWmvKQAsGJiHfJvuR499q8m89hRzJv4nj",
  "key12": "5HBwmgQ5E7QUfftp3JsHgDWbNpAahdDa3pu74VTKCtfbnCbzBchzWUzoH4fHh7g59XQFrGsCZEE5rVWihaoY4ohz",
  "key13": "5wMjupryQCN5JiabVNPR4QirrwHuMdonQ1ZX2mbiidJiT3u1K5QSX4SWyAbZvyVYYv5VGaPRwzP8oMxBGrhp8yfh",
  "key14": "5zfDUa8YsuxnMG15tnm65n7yaekLphrvvmkt6kRCDPdxJqW2vXXCvewdVpk94MpTMRQWCUeiQDgjHAoRmP1H5kPx",
  "key15": "4C6EQeXjDFVffHkoQEAeRd8Z72ENaJgiyNigFUJkdLWCoBdQMrMHXRyL4EaYnAC6CwTcGxoGvcRLjcWg1yeoZ7Yo",
  "key16": "3YZWWAMxC1CoaGCvLMK3nExEZ4ZkKFeDJxH8nYpoxFioW432zV2hprYpAaz6X5VrUN2yvQoWafYU8Sny1BtKwkSt",
  "key17": "23zxdcUCYjQ6nse3hUhY5AvrtoXG69bFU2hoEbCgjjFFV2Kv8HJnmQSZ83XDTeFDz6ww4EcJQj3b6zfi7RTUtj6V",
  "key18": "4mNErqu9zQwcb6gJbLVCMB1Ti9VGyJmRmLsYKJe9UPKGRCruYXvLk1QhuaqW2WUgPNUUkPXVPiD4mix9nbHecZ3e",
  "key19": "4DrMckbvRHY1pnJgTnztfNaxDjg1b8Wp7vw8hZjRPCZPmUSt9yqCaKfZgk9Etg5DW3QB4aoS1x1pCiBtSTQqqeMY",
  "key20": "4QR1qEEZqXV3ScxvyudwQW6iyBY7pihiT7yW1ui79dBmTxu1uHo3oCrQc3UVXsMaRUKH3xHij7wdaKeSJztXhcmC",
  "key21": "2ztGBHNz5iU9n8o7u3hDPvVix7NxzGr85FFDnQJiVKRMgsbYRsCMSasB4Aozv25qxtTBWyzAeFf8KNdrnCa6NmVs",
  "key22": "rqeKXJc5WpB5wPDp6XazoGKntfRw1SRLqXL2KWt59EYmPbxPMdRUyoqqCFbMjf9E6Z69wcU7FHnZa4j93PjLJfD",
  "key23": "5aAV5iJt3VCjBvD6GMgpRMaZqbRQrvHqQ7KvmzEKAHQSYQLPLezTtSsjyfmUiRNVTEYQ322BXjuHZXdTUaV6GmZ3",
  "key24": "4SqSABD2PTvuqNC3uvUEjsVJvb3EJNYQnsYJtUrgZSSpPZBbgKZ8sWeaEmdYpsFmMz9vhVL5X7PGpV6YKRdgBFtv",
  "key25": "3k7fajoKdo6qeJQuhZqrkDVTtjZMkWrYBY2UDKC1LVy62gRquTfvqpxh8bfy1adcEzRxjanqb79up3DVvJFkct3J",
  "key26": "HBhGx9TN6MSDiBXw3YzeiJUxbn2v6eYbY8dS7deWonBxxe713YpFFX4gjVW2KatZ2ycPTwTkV8frmPK7gxeooos",
  "key27": "eDNxQNsTWUYh2VMYqgRHg2tUWHYVQ1wG4xa7H1F3W4Tz1zqtciqshKSepygsohnJiYRrYchwM3sTVgF518db7g9",
  "key28": "3wPcCJRHzdDktYZQM3HReThDcbwes1BiXNcP1oRdSvjL1s6Xg6KwFQd49dKURVZFQFh3Mf6VJysF33Hp1u8EPK8z",
  "key29": "8wbAmdidnNUHyH8VvoDCL3HrUBGrarTsTQqMVwUUDZb2QuFzw4rRV8nFpF96xqBVnttn4ktqUfrHpb62Fm32eUM",
  "key30": "5c9syrkrVQwqkN3m9EuiC7e6Tx9tD3o8EejUW85fpNb7T5MY83z87piAjQpa8WYyLiSk9A3fBJ9PM4FWyPhrym3y",
  "key31": "5XNDT2KLywvw7Bzk4CSMva8ypNXhKdRuKrFxM8MYMpRGC9JpZdeYJuMhcFXTHmqC1qiDMsmger3w7TkzaYcw154r",
  "key32": "2D7rRWZ4NYzxnjiz984GqkmhV7Wm4YQ1FKoQFqY7HSDpcwhU2afKs9NJSixFKP7QM5FzwYgUAQKDL3EuSTn2kQfD",
  "key33": "3MK3tZRp5pT5c7NKKGmhfXSeX7cdrV6438HH1PfNd3RvLbPyyjKuZjb3KqbrEWRHnxuKcg3uv23rTfL8iJ8zSd9P",
  "key34": "5WUnkKQoakCmVRrm7nBtZLotxbt8JGCiS4xT1Ra2SGoNP1VvGmieBpKvDtuG1V22CfBPQ4318bVyUGF4vCUMJyP1",
  "key35": "5dBdX6doFi8eu7nDhKGNJ9kJGRkBv9Qu6offwEEFdoPXES61bnDY7Y8TzkbUJooZH8UCmfobfAq5BhPm89vR9HJx",
  "key36": "3j648ctBebjceF49mPdvsFxMQG8qRGGrVwGRRMdbfgVRp7CjZp8ksNmakRZo5i6H18AV5kUJ3sc4qvccChHvhqwk",
  "key37": "3d6AbBZfbKYpxXG9fK3qQ9r7qVzN5zHdCr1c6SDzsHhjd4KgDMQs3JVMpmeE9tPsQUiuMxe1pAFwkYacGVpUNf2R",
  "key38": "43WJLksL44QKu7BccawmGVc2HgWUJMfRCABfY3Sf4LPrLLSw14vYvhnHNnbzweM6JcXDYmSZbho7Q5Fo2bNnc5a5"
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
