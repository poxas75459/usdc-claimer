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
    "yjTYmcryNPseFi7DAYxN27iAeZxEnJWD4eM68t3qQMJDL9jrVirKe42FAw6KAGDofQjrbEEPdwrFttEUMjEUyZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QLtHHvFA3HByPdR7RzcemHKzCnuccPZGHbuo77QSX7LF1embNqsE8rPmJXFrezRGDnNmWLaGrR898TduaLEyurG",
  "key1": "28kWsE3UFQBcEH6PcMQsihmm7hjpWf1wiu37MsxAXLEVbNiFohaQypuwU9GnyWX1wsUCaoKNLiD9Z7uMsXcobwiw",
  "key2": "3EZxAVWJg3KhdoBKGfVr8Az5MB8RYoBsWXJyaBCXfh5cMpSQchEBBiNxDQ5Z2DBkx1UBwsCbZesLFwEr6HZKRnTp",
  "key3": "3uJGbiNJojGar4EAHtQap7bws5sxz35tef8KkXS8mmaGgzZXzrkThLYcY8hq9ZHM7CEMgg5pwh3UF555auScWhcQ",
  "key4": "ZfQEZ9iV48fZC2nv3wn1EHAwTCH2VFbYaPTP8YVwMcvhwybR9hWyr78Y6wJTpsSFztqFcELsnCrrw8nwcVUX5xH",
  "key5": "2QWVAuHvyZRqLBC57V6XLxAW2RYPKi94cnbWz8PVZP2fNhQE1ruNpnE61K5t13NLs2NazT9duY1gPnBefAwyNX3e",
  "key6": "5155iRUjj3Qm9FmFEam2vtVG8dkKvp49mgFG1j8c3zz2CBEHrnFXDwx2kXFJZhm5zs6eJ3du8teitvVJ8osyhVLE",
  "key7": "2mxnTrtgzMPeGHoyisL8nZXThLBZt3R8k24DJ76rGEVvwZMpa2Wp66aaAjACg4SFtW4ACMP3F411jUfMvnP1MbTf",
  "key8": "3tpQ3QAGnD3n41yYVrqtWUYZJHN5RpTvKceDYWimwXJ3EgX9t5jBbDvQxpzhq227MeYBcSt4R8tQXhk6KzUxzrLT",
  "key9": "2BZMQajpHqY7UEM2SH6nSBu3PvBaYteFnryuATzP4DNddidx2yemDzDFzV2oJe2kcmMqfUnRY5EBGxrCWn6F1rVU",
  "key10": "61FScqkuyRz3vvZMC4KMZR4ZUZ4tAbwNQGsusgWkrC9MNo3KmPAvPwdLPvLCo1eHhbsWK4wBHWCUA18cGgzhJvFA",
  "key11": "3TATxsyhC95pt89MuJizv6FebAwvcx7NzVWXP8rgQ9PDLBZuTY5z4U2UCpggaWJDPMXcJsEuLLnx3UojV62hRocg",
  "key12": "3fJtU7HBR27oxhse9BjwfEvnpKrFoGpt5CLKuxTLt2iv4knwCkwobNW2jKRhJNawuPrgVy7WLMaggd8DF3iHFcuA",
  "key13": "4h4iPxw1EWozmz8mfavKbeteRoaFicShqULJVuwfQjtY9gMeAEW6BFEHhhMcuGWyizLLJGcZnrV1cCA6KjYQqNP3",
  "key14": "2aKE464WrNovBzdjQ4VxGDUZqmKPVXou7s5L7N1yLZ1GzjJ9XzK4YXe9pYoSzhRA3VCj9ga6haDrYQy5ndKByT6C",
  "key15": "46VBRWYXusLx6o62bPDDk6UzbPpNN25YGCeaNE5mKZfSM54PJMJ5w6jZV6N6P23ZD7RRQRxaAJvNxizAssJAqM3Q",
  "key16": "5XfTp6tBpZ58GizQYbDch9XEJy6qTUF2rHj448HKPwLLnwRi9WnvVC5CL3DKKUgrhAPzvVb8rN1iG9QMTCQuWE55",
  "key17": "5PpQjyDgs9ZpXr3USBd2eQfQv43Eut2XWWEYqjRfW1wuwGNd1ZWwnFPNhqqeL1YfZr9FzKpLqtJqZKs9gHLZbqVv",
  "key18": "3x9EGc7MaDLZFcv9zQk8xT8LmuqsjPajnB8aNzWnNs5tutjhiqVZj9aQ1U3VpBkiVPutMms8gGCNE55BrSAkASEg",
  "key19": "H2GbRpAAQzrwr5z4UCZTD4WqbHSFp8LxWRCoKQ74hxzyve23jVggXYf4riDc5jtkniiMNhYXj1cuM7BfQhw4Lki",
  "key20": "5aakHJjxYUbN9k37s8AAi5XG1zDgKp4xZNs3PZBYqYJoDWWEDufC1sRXuBWvdFevAe5LDmNUZiRxGNK3AxjyngFu",
  "key21": "55i5CTYDzA7Rg9246xGgGLNFPJGXwUYSRrJCrFsqBBeLYwFvAyBtNYpEBtsXwFFNzpE3XM7T15jJZ6TWZyhC9qLm",
  "key22": "2C37qPdM6X7yxa86MNsZKLShT4ZAH6t8Mra9r6RRkQebbxgZYDGkCAZgEqK81FErgmJwvVcpsNVhpcnaggSeUrzt",
  "key23": "4w2Fg86Gd1r93v4AwNRV7AZ3yTzf8P6hRNBjumkrSaVyq6ooSndSHRNhqiEAmwdsJT5WFRjL6ktzhwibpKicw5H8",
  "key24": "unaXKzk7n6M2NBDKr7dd7eBEkryeLrsQa5aCtEJb1SsFqZigUhLkgRF8aaMPy8nWFFUiYujmrBfgJzLwH5nd6DP",
  "key25": "3ggLuihAeyD8UPXp343afM1QbrowKJCNBy2eE3RCrSgDGtvm1413sWhQ262Tn1h2h2wB2uF96Qn8aXr334udYAu9",
  "key26": "vMcdLUTTnww23cxmKKRLryvcu9cSdBZMqgiDDpwxoWp9jKfm5n52oRzW5y1nAAT12zJqj9hX46QUwsUyGNcJw2L",
  "key27": "53hdCnpKiHGpGvDtcwVyszSdjWWSUi91H2UL5sCWzjqrKsnCwnacjkqSUNegTg6BaG4muv4zxjdVQU4r3jqcT83i",
  "key28": "4QnYd4WyoHLxLVoGdjefGAAGCYXTPgyfxWXvZ7HEDRfzzxDWU9pGLohJ7GtuoYvJMDU3LNyevxfZkBy7dEBXzVq2",
  "key29": "5gtporZrTSqeHtNrebe6aX9zsy2tzGKHBwk8oETujRdP1K8DAfvozjvW59sPfJ381TwBsyHqQFZBF9LdUvnJHnkr",
  "key30": "r1cwj4a5HT9JTerP194RCXc3qv4yarfQKJ1v84b7SmwjcwT9x1fLPghRgXhcZ7VuLRA6N1FwEbVNqrsH3xMibPU",
  "key31": "iYh54GPbt8t8vuNqnnPAGD3GeSgDkuS8ZYaeSj3Fmsp3ruRmoRYwezvh5jw17V39BYFpaWtuXPK3aw73ChNA3WK",
  "key32": "5HP9N1xcwqhHFTY1osxwefTkPAFugNtD9PrdpyNGUPyPxWPVzerYtEb3RTpKbNPZQLoBapxDQsSCx1h15FBU4k4g",
  "key33": "671MUqhe215xGZkQ9LRVoHT5cJJeg1WXJZxzWQ9hHsaAUKBkao4qAwEPS9TAXPBS5cFfmAmYhNw5LCybLKyfsGwR",
  "key34": "uTmUBz4Whmn8sUsNg67Q5PeDqMEdxBMR8cWjmVTcPB66Rq1QqEzFGC6KEfikjCiUszce2ro2QWCs14Dd3oZezUt",
  "key35": "4Ka2VURjb1sZ6GpA68RckdvV9x7roCLk8GRWy51rz6GstXJPJVV5A5cDvFsPawZykX3zLsPQcP35tFN6ctH8fCbh",
  "key36": "52RYccwS7CmHLnQRxxjX1ZZUyBfSUvWodFqR1j377VQQmkkdBcn4ueD3CfKgxzqkqXZBuRC6P7VfWLepAfseAY7t",
  "key37": "E6PXnSBrBDqJPgd8SKSAacFZGAK32ZypGt8uDppjs5KhHuUGPVn8oJ5c8ZtBkBBwbEiNVe5vrfW1Pt7JLFabv7k",
  "key38": "2ypCJUAz94hmwpQrN55dFdw3UDJrZxn64kVV7X7ZmFrwXjeBH87FfzJnwDSHzcoGJjwouuxBLDj8JL6unhpiXSe"
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
