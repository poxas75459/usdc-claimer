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
    "2AuPwsBr9jFe91WuLsmtG9mjDH9nkp5AMkMwKDfVQ75LhA99wMPjEWy5zRCpRZsj8oVZbYKucR7eedUUPTuFZNgM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oJjty5HcpgBEwcVmVMFWJGX4VtnMFgRDNsSHaQB6BKAENTMrVZeTPci3QW471H6xyv3GRg55nbVuAyjTxRoZw7t",
  "key1": "48sZDiVGcqriAqiCNViu2ALwNYcrFRJot9aNevFaFSwjTgEp7XeV13binc2STxTGnuV4FHhUUPXHhLaN235qaktQ",
  "key2": "GUBFPo9tZ8CdT7YRx2YMkyAADH1tVU7VPFpuAN2jmpM4RpaE7ZfY3RrdQDyvQctPvPYCzDJyb4QXtvaxDfJpbWn",
  "key3": "511uHgXr1iwYToH2pVJSxaNnT2vvCi4PCie3Rvm14eRv9ZqX4UwQryqWvRLp8fuzQSf7vgMDPrUc4gRmmimwVHUj",
  "key4": "5r2XBWAiJjUB5DtRo5eVqd3U6sBv8XZ74omyn6oRXuTgEL6qWeq81GFhdW7x5rczbpSyiKCUBaaU8Zh66zRKUvUo",
  "key5": "2v6PR4CCvw6EyYXFVyUArkAVAXjUozUAXzRCgL7BetS2fZshaVLGXJzNVjBUnue4TDwM6VGj6wV1daGeGcpGAsvi",
  "key6": "2HVYE9UtoHAULQ5V8wZKvz92aRgXXYeDb9piSnvC4t7gLdHKR1tFjc6ATBzyiKK7G2UiT6frv3xprYis6Lz8LfXh",
  "key7": "xtnXVx8TNxtDyt7UZnMnySLCBSZpQb7yinAVPXCqccy3Tgdjm2qLNqfuz7ywczc2umKWVPCajr3buAWr4Z2T4fg",
  "key8": "2Gc5xuMiz5V3Rn6AUPD8NrwrUPjvZudV3hUrQ2kXDt6TjR7es5FBbz4M4EmdtHzhCMudg8cDWQ6qaTBMcWAjXVgD",
  "key9": "d8igzvhGMuoyoJZoiWxGLmtXeKzuvHs9wmdigayU9aF2AwNZdLx5a22wM2n4m8qXY44U7VHdo8jkyR81uVMkrdn",
  "key10": "44dmvVQSCfLSVhCNXZZthqoehpNMyi81fUdHt5nLdARm6EKmSAyA9ZxnbZ29nJPAZ8YQCQCjwPzuyJGxXnx6mVt4",
  "key11": "V7QSYzMftLGjA4H4ifUExY5Tox1pfyFgcBsu12iumkCUtRkXAHQdT8aDpQwi6PWRzaq5EXt8WZ3BiAH663MhBk9",
  "key12": "qerMKYeyj1jgpaCxNhbV8zERCk4BzS9VuqYH5J8w3p91QgMWCZKP8JKehaFWf6V2YPCFUpku6uC69isogJzSzDw",
  "key13": "332HikhX9Vhcn2bjsgRGZX1sp8J3asHBPoCj1E5vmBY4bo1Yet3dCY11tpo62ukV6tZTcKMgLigzxQtvHazn9dYT",
  "key14": "5Eb8oWLhzXxZmJ5Z2SQv7RvA3jXYAbrDLDGJrqmCww9mCEfXvCYVaUxT9ci6trs94xhNTY4sPwBph1xLHsDre8Ne",
  "key15": "AxAj7WsC9MtjVb3ktE9Xe64wU4ENsp4poU2miNp328PjZ1cgPT4hxjtMhQPcqFG6poiHCtwTEbhPqLcrUUa67kv",
  "key16": "6U4fNo8dGUgFCg21SFxsjugqajHH7EB6JFzuU3HGK7tq1gvk1iYweKyBa31zQeTjvwkBRZ6QXBKy82cRnf96WKr",
  "key17": "4QD7HZUKVskfBq5Pe5VudCAgTL3F1TJBdZP7fX3ewkbKxR1N1GjKgD3Mt7Np7zmpSFBswXKy1ZLAiu7s59m3A7yX",
  "key18": "4abvJiAJvThC5VQ6sMUHEpBmY4wAqdjC5Jz5hpTNCzkk1Qafa3PRLAXqUXar11gCkDCwUrNzTT2141gnVphatHy5",
  "key19": "3iV1EfwiUd32PoRRjLWEjvf2BFk6iY5vHAYWEmzYQFKWbwpa4rGKmM1XXc2LDNZ1X5qishiNQD6KLdMwmvVLPqq5",
  "key20": "5Ks86gGdyHcXFLT8nwhxuBZMwqHZC8r494c63L9gMzJPphBDV6LLRNi2JLJVvHhP2g4TFJhC5zrkESo7vzrn34gE",
  "key21": "QR9NXpEhHfMVRE67eM1t7UH7S8ucQfKwxAwZMvTfnawniLEUNxqpsFtje8exPNUgyVqJLTM7No7Rek8SpDeH18E",
  "key22": "4UhpaKrXU1RNWefoA4n8Zo4PJDArSh7SoYHE66MV7Tz8P72ug4iABGsy9b8gG6sRwrerSiEfKgL14nvWTiYR35CL",
  "key23": "3GPh2w4ZjcMsE4e7BXp4TxMS65Jrvoiz3geVoNdFVhNkcE774K6TmEpwtC1jqLBeD37XWB5KvDZfN1x5wCfzEpHb",
  "key24": "4GFkSGGAdcbX99QDnXwcPyBZkDqYGaKoQCVh5LRbBhyiLrX6Je7Dg6nuSTxawi25ZkAs419HT9aoKpeT88U9aj1e",
  "key25": "4DULUX2K4ZcdQXnDhqMqf3qSM5dddWyoznbHcgpYZ442dLLfuG4L87iJxMSkcAFk7n57HMS2vW1FSBP4AXcq3fT6",
  "key26": "5dgBjBSykJyLPDaMFBRZQfEJEu5X1EDp9rrh1Y5ccdsTaSNbLHA7aVM2qg92JneX2KXqEAV8AVRGT3gXkiShva3p",
  "key27": "4df3Acegv9HDpS24TtbBuntDuAm148G17yCVUa7ohujMwy2MDiwgMsdE36RfWLLkt1ky4UM9Ecpn4eoFn3i7jSV9",
  "key28": "3hDXxk8aW1ofiXzMaHk6bQucC7TiNqmpkQoCy9iwt8ZBBLPdUqoCtRVedRdrN5GSW7CyktC4BRsGvb3R7coNfpPG",
  "key29": "4sfEBqCudfDRa3GHMehyMLz6PcyQF4DnhfJWx1EUSxVhSAzra1hngvKWGL51XxvdaMCeveQNYX4DC3qAMpey8SMR",
  "key30": "2LA4Zb6JUonq3g6R6VhpMxNxTLzNpGpZpRchXCNfG1vzLRLvBHAMhEt8PCJA4teTHzcKZe7a7R8RTJJvmKwwpCjq",
  "key31": "5zzStJCFQaFnXwzZ3Fpg9tqKSTLv95Vsu9ivKoXmUeu1fRxKFBYjm1CW4z5zXyg2nMLVFQS7mSi2dTwHg1Wkpb59",
  "key32": "3xe4YKnvH9vs53GoCgN5xxiD5kBE65pc8sMmXXZsrRzu7e9nQ6ZpEMvqMgz3BoetPbdVi9KiCbVRE5WrUMYjDjm2",
  "key33": "5GQSLK1PYjo2FDCC2Ha6kCc9iUxgFdpzPjeQEzMJAu7uPLaXLxwveK9bc9HP5Lf8eJ5G6WJXdQUWxJSt5WDYy65r",
  "key34": "2qUNqqArx26L6rduE22j3hzXXHPBd6kbtRW1bFczk1bWru7xR22GmE7j4qVhfDYLRKaH9YsyvNLpL5AV8Atkc59Z",
  "key35": "3iFoZyjeVVTjC8wrLNihMfSRVbzzJMQrVHdprTxYzJj573dJpbQL1dNqfFSawrUm9CGEMKaECZ1bydMAAXEogVZ5",
  "key36": "4Uak35e9JY4vwG4eB2BPemBJCsdxJf4e5crUQZfK6SKCbngYH4y3gxYtAFyKpYDkBmnEHcDVBBSnj7mkeWpbanDP"
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
