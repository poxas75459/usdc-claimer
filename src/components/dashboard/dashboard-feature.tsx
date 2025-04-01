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
    "QbLaXpGEBbRFTFfjVnHEGfKp2k5exJT4wT8ax3e5zBZ7uKDw4VY6RKXypNXbrnDKq8EAbgF24cigoxzwm17iDSH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BJvgJ6Xd3ZU7mAk9Zgrb2dZniX7RjZunghLp67pJatBFtHUEi2z1B92cPLiNM8ALHQobhwndXoFswj3imbJAc5x",
  "key1": "5t2WdnVPSs8oHCB5uVg3T6zumuEquzsy6gVhhy1cDuxoKXn6EzfaiSBwaQyM15TbGW6isBzKcnsvW21tZkzu161s",
  "key2": "5JSEx2XJHvCuy9RP9KnEFNoP45FNXe6Nwhu2YqcBPWCj6F3wuXf3d2767gX38ukPDpB9CNMaEXetKPmbzSMwK4m4",
  "key3": "4dkEiKAsEZ8Mo1ynaxForEnt6vEUVaHhNQ5oWHNze2PDYS7JjEUWG8HsbsM8gsiiFyAo3DU68T6Jb8W1CTWTUZbh",
  "key4": "5jYsgLXN7Ca4SfbrHKYrW8YBFeKHjkBL6t2ARsiBEyHJMXbBokKkhA2bCDGdjLkEdoUQLphPUhfEqcYVqdqkejaL",
  "key5": "Qg8uiqmTzwLetuAr1eVs6pAbDVNVHtXJACjwQ3uieHNMdSog68UeLwy1Z3BM8PJgjBYa9nbeKS3WTxE1waXnYbL",
  "key6": "2QFdqctfsJxijha7jwXfHVtnP5v39dwLGmmw7evxtMEycBpc3auLa85zW8YxXHANQ5Gh2142nd37QnLXqscc66o5",
  "key7": "3ET8Xj6PXY2STLHLW945brnkyGAK95kbF1nJPTCaJcVHmWB4kkQaaKgdT15d9dsmaMvqKdHfsm2G8PbQ8M3uDwuW",
  "key8": "3R5JnpN9FJ4GadNHJgQNJnFRrX7Cmc2FZhPkGEovJBwGQrkKAc75LUEJx9R4aGyV8dpPYFXM9YtPZmVRVwp7b85G",
  "key9": "3xJ85PZVKYFBZKhcxoqR2qT7RLKJnzvhkqm9VawjrfdxvuG7K6fVNbtckdoV2KE6ybS9Wa3FFLhmwYNcbS1TtVmN",
  "key10": "4zXaD11MdLWgB8pq1SwJEforwdmTb2QwYpxgR8z5hUSpFSih3J42qSgcEzYxwmRW8QKwhBmgPoE8fyPBcWuP3bpA",
  "key11": "48WYdLtaE1Pbnj8zmrxxWZYzniThY42MRSWjdhQi4KJnchKsCoL9PJQShdZenoMz1uZMSLx4gA33xzhWBPYczmHC",
  "key12": "5kxU6g1dPY8Mt9x2hKmbuK4xghDmaALYNUZqmxiwhBUjRdgfLc7hHBcwDKrHia2Pu9eZpGpmzhM3zxcxTUon8VSC",
  "key13": "2iqUvz2cooX2rbvuWPKiP4dBPMyTkbFg2vo7gFHynrbARi3oYZcNUdBmbUvxPyd7WsF1Go2rjwcykdFFosvEfSt2",
  "key14": "2q51DcZASopb9jHTNqZ3GfjkrmD6dsMWQTXmbE8E5p7C8cJ4APLP5Ri4cqDS1aEUaL753eUt2suBQJxGHXui7bCS",
  "key15": "5C31k3UGyg8rXfKLFsQMeGH3GVcEKeveyXH5FhRqVFVzdF8i2zRCsgCz6Kzo58q7qykuoo8by469vDhPVP5pRDHU",
  "key16": "2Nxm2yBTKQ8TsyUURDoZJVkAza8SMS8r8eU7wbz8fS6BqpvJrYi6RDdmte7oVKbPF241rQK8j8TEPZCXHJgqYiiv",
  "key17": "MLUanPMyugSDu9u3zLCEpZJjEUGdYH5p5H7g9SpbaAgK8dMSYsrFrpDUwuKTsfc7rYphM4ZbFoKwW1GUQkmFZ8W",
  "key18": "dZzdBNTqwXRSeLx4vxNxV1AS7475yPsqvuF8kKM3H9unbTLzFQs1i3zA1CbyjKeCbTQUWDTj8Ej1XTzbQF368qt",
  "key19": "4XTgM9ipvaPhFcMUbH2ampShLooMHivUMEZsE4s1FeZdLJXhsrAXK7dPvKrGJBkKUj1Hq25UXWA8QC29wmNEBLss",
  "key20": "4KJBZu6QfBkRBz1VE4dYK7KyLimhP5tei2zwnXy4MBdxTwersretdAnBMvSmPTnTVeSvy9cGZUGTMLapcNBG8YXC",
  "key21": "63pGL7zE1MFw27zVhXoKW4dX2riWf6kx4A9TpdCGaWt16zf12KEtjcnRi29JpAf4iu4Wd77V88RJa3kWGFjy9nQS",
  "key22": "5JZ1pSWmZC6tgbVvpuXq9WcwZByRTfZY5U8q4Wn7HHrA667wQyf9iP2DeNfnsn4vbKTKh4QvurVFhhieHrmAgY7x",
  "key23": "5amg16LrvMZ6U8oPmCH6eF9s7aHLvwoHq8FBEoaQgu8L4RiDCzToyiRF6AWG1cJJF77xaJZRofNM5SF9F8SqhbSu",
  "key24": "45L4Mjf6AfntVDirrbqc5bPUSrpVSM89j8XCN5Q4CowvCvfq4F4GSPNd774b8GzvXiBpqkHg9fhd6b2tabP5Wu8r",
  "key25": "4picnE1nFzoy71BhHmnjRU7ia1eroyhrJtw1Cgf4jVP1wNFkCxsep7YNpA82qJ38gUhp2R8QvZFcP5kfioAeYx6G"
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
