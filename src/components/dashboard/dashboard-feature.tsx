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
    "2Wa6SBXcqMu41wnBQXTzGcsuC5CHXFVSpqnhTN5QJGtxvEUxN9PLtNA5iTJ4HfBa9Vcx37GSnHB6YC19Qx7PAteS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kin84Ho5GeK3vxvDLKH4kwLepuymo7GjB1WhoJFt3Jof99WPvgQHRF86ATtAzCC1a7ZkeK69ogVj4Nm48gogpoo",
  "key1": "4AyfoZMHxJrjb1N3B7QRU6tzR6EPUQnDQg7P5yWq4eE872EJHQXG98p3hJ9xgUKaJMRpC1HMh8GLRnYnMeQwmMos",
  "key2": "3pQkk2CUNdDyCtRqzJkKuEtaTLBBFZgzRV9oxGBUvTe43hSS2LZrrcHy2eHT7L5nE4X6mEU8fVJA7EYbfQkCzE2C",
  "key3": "4L7uXaWsASJyhWbmumJCsuDT3jCmewrEVJaMzqpeTGuK99vLrYmMBZQLc1npK5kzpLfncwdrPvAhTWmRuaDE6vFu",
  "key4": "392DYRv4p7zjnEzYAcBJeBSWLr4cnvhWC4BgwUKBv18hweExGQesg1mkknx6KoKxe6arT3ShN76DVuMnBZGD2GfM",
  "key5": "2UfgSqvVyot1w3yrTjtj9C1G836ReEfJ3fv9Kzg44rxWbJ5AjKS5Mv7P9EyZ5QzRrZrRHKjuX6hEnJDvqYi2n6LC",
  "key6": "3mH2URB4zRpGFZBPETcZCugCAXdfUbV98Wrq8GEnCxgX3QU6NspJXXJEf2QdTEMESWCg4hNoBsCcYQFS4joozZtm",
  "key7": "WBTgNb1QcUzbfKNWv1DUniZxUjKwKXTqMbkSnatoZa8o1GEcQmYW9JeXew8WqqAzGHByFNgKG5V2HU8zkBXbppF",
  "key8": "rnv1iRMUUYsrt1ViVTXA5TnBR7ai1Zh7LGJjf1U1dzsSk9KFjcaFuLen3f7FYcSUxxs5zGKWmcAfQec1AjDyKGX",
  "key9": "64dPaV52AKH2RtUw7GA1yeBDa6F3x49qiVFNFUAuRLpH1j54stdHgUvGA8XoK4mYnAyZwezVPwC98sQaDhdGkRPn",
  "key10": "41PZgnYWE2Qg8waMC5AVmi3cYTY9nPa7MQ85dkBzUW2jNDST9g7gj5woxzXofNHwhA1Kpet3f9YZ7Dr9efRwA3aG",
  "key11": "2L5NZx4kqWHQzSs88DDQRESsiV198y8s2uuhakP7yH8GkefgF3sage4ML7gAJrbs91GwAdCwqeztiV67yMFTbZj",
  "key12": "2Ao2rBKa3vVD1rttHNMuegDsq4psgTFFmdESjArUnSt66y1Yc3VDSTvwniXmHUcDicLDJcLjTJzVDmHd62dGy1sP",
  "key13": "2bhkpqvTqz63rdrydU2WXFxh6CkcTahFg8216NomN4UCbM6sjfH6Fe7ckgShx6Qvfzc383ZzXiuwUzSGqakhRGyc",
  "key14": "5yg9X57ppuaBGtTeb9aFe3ENxKtRndbdSn81hxwLXc4QbGcuKcJxkmNvAQJ2f4xdurxLduHMSRs5pf3C2mRxPaF8",
  "key15": "2kvFF3AFfyd9qtzEXqXxmLZMn5MoFHNbiefbtF8xsC2aKyvhuFMtxXhzn2oPC11CEfarK3au2HAxKssPVtKmfGDg",
  "key16": "4eGUUbFquj5jHvLn9jST35R4XfcdPkXTw1qZFp3MdgTpwYjVM1LgQ8FF7zruEu7AXzYHEVLvGEhLy72DH9LwiqoJ",
  "key17": "67d6tmpuy5PpGv3XeuTgSv8bevF2phK1n2fd9cXiHapzYsDhumTPg65UPShiDYG7Lmravyv1bYc5PeqBUefggq3R",
  "key18": "3FJpQSRVCtohcuoHbpwGGyzXWghKeWcphXRmJMdhFD1WALoWs1Vq2CgPLMwuqivP5pdNc3Sbd52bAKiwHwrmFX5i",
  "key19": "448GxNoEsfD39B8x239Ebn14eoHy9zE15yFqLytja222ATjyWX15FL8urXsEVAJc6t7SNiosuV7JQdqAgibU4A9S",
  "key20": "5sGQKmEVeukiE5hBYvuKMpJFPUGf3DMVzMGRxDHgBm1droWMVtsPJC1hJLJKuvquRRULjTVjEkFFdG63Z3o625kw",
  "key21": "5MFWveJy9B8qegmLS5hRX5ZxsREZoiB5YJVbQp9cBc4bksmCBtf9UTSDr8PGBvUQL6wdnkKt6r3tan4yUH1TvrzV",
  "key22": "4aZXqUPyWiBEPtkq16onviBCxpcC3Wj7pUQdpM1vU4L3M2H8rUi1Y8X3qCejiiWbQxBWzaLW87MkZnxozCM6DwbD",
  "key23": "42gQ29REN1MwfUU3Tkb2H8xvUBvkLeocgpDFo78hSLmuCmBrsmmDwnjEgihKTcn9zRogQVCMEKvLzHsSfwhPF4sn",
  "key24": "3JjK2UqAxH7ZpmKbNUYsiyjqiECmePdu1Y9p1vQFTYV3Vx3pHSPfEbg5iSXn19aeuzTMizcPYpq9tp5ioKy4NQDt",
  "key25": "4Eu2FUpJzaENbuNEnP2y4wBEjAW7LTDkF89yntSVdeJQQerCp6eMkN4hZLnfyqakMj6XMZ95N7RGm6S8aJY61gTb",
  "key26": "2SgpMiVVJ4Qzn1KpAp8APxQveeSgw7tWJE9mori8creQLhAnSAtz1x7NGnfrKAHzuyAfbw5Cj31rcRUcahB5vBcd",
  "key27": "4CJf9UcTqw67PttD1T914oFkW6qvyUejPRSf4NfQt6vBofRGdupHEQRtewbbpzS1MmvEWvjaA4b2kucCTqRJjvZf",
  "key28": "MAHWtrNH3peFLxnJqxyM8PG7z3fapXWxYibEvJL1ummYQze5CVheduiUKDwUKRmg2G7cNJ74EPohUgCza7gJhZu",
  "key29": "3ttqZkQMxSf2T4BtVwDyXbJQ1eb3k5udGFXpQ2TcajnJ3xrRYqyhEw451rQHYBYwSL1VWU3PgwH7oQHchy9Giy7j",
  "key30": "5QpVs4dwL82VeK8SoLuefjeqZ2m7NQ5bem3pY9AHmZxEFB5DWs2wbrUJrPHpgTRLXKd54RiDeHgXQKVupRXzhpMi",
  "key31": "2HQhZeQx72RiMZhyc82pJXCKdrhTJLXanMLzU8xByFbJpGygKczQRjMUvrmWo2J2m86CiX8gPXmkasc7xETeHs5M",
  "key32": "4Azt9m1aWAZ7cAtLrTTbCeW3USuQWwFCBFnc5YaukxpG1unj5n5ijWDqDszSsKbEVgArgMJTf3NcJPT9six5Wfz8",
  "key33": "3DNvp7NFGY99fQqMhjVoQuEH9iDj1z4n4fp6r1VeK4XGJyJ2kLRx2b1VXBr5KpBWxEkCMYJgHyg62NxhDfSEvnMJ",
  "key34": "2YMQh3NbC6u1Lyu1z5K6fF8xeTosfdUoZU27b28YW2STzDYYf7SYXrqDF3DzQ8vY3QLXgY9qceBv9pQ56FbH4yE",
  "key35": "2RrFaPM8tMiENR4Hg1AcRYKuTYZmQehXBoKRtQQigYJj5dBvy9i9B6vQwsJHhQ74bvw2aDrfEyNs5qiBEpuWePUW",
  "key36": "tbKtYam6RwSH2rRCNZo3pTHBnpaAWYhbaKUCYxeXxVJU7tiHtiR9awjKL3m1iSiSFDfEJpkDgzvLehAnTkDzwFJ",
  "key37": "4ZCF6HL4L8pyL9VifXewgJ4Nid5JAEC5AJ85spCM6K7TxfrimwbXCb1ZvYKmkcLwjVpbGACQi6Lwwn3AkaWNNK1Y",
  "key38": "3xKZHEKfeRGWLKmjDUEn2rzVJVcoqnVmZNccxLUgXdi2YoSEXdW3wRZ4k8yuHcFcxgi5Gp3utPUvqiTUxzLbLUEA",
  "key39": "b4j9iCveWhb8LnaFiJ7dyEX7dNQA4Qa9bt7MEzkrzJ5jwvM74zQwGCi4Ff367GCRpPrrRopmcSrasLJ9jxC5cD5",
  "key40": "4ZV4vMLUHjJRUkjrVvQ6ZMUAwX7PZN8cAK6WrGNPL3qpcKb4HcS7hP427f6D7atpFpjedK2HbmTRL86QXeZ6XWSs",
  "key41": "nNkfCSd7eEzyEoyx21abM1bNfNqtauDPVnmh4TvL4vEPxgqvQBRj7eJUoiy4rQMqDQr5EatyqRtDdnJiBeVTApj",
  "key42": "5QqJCgifZLkSCGd3MtEW1HEabjdwytB3uufeitL9EXjCdwDoDJwJAGGfUY7EA7n4cPJDdRdfXgiQhLifspQokwKM",
  "key43": "4Lvny5u7WambzL3p4gQGGwGc33xArRKwP9GcXmL9sEeNVDd7AqYdeFhHe94gt5L66MqkFHtsbEbbkdtftrYK5QP4",
  "key44": "5QgsnV8cMPXYzjA9SFDCWBgh2soBz3PJLgN5gerfKsL8BbPY8yHr5dBXhmKHLvRqmJegW7zwea23uq1LCbc3DaLM",
  "key45": "3xvCMAZM91xMqTAzpP2xALRcwGqmXv4LJBfCtL1FoW3pmGYhrekQTe2XgjXEzZmB7o5oXHG3wMFdip5wbJZ8Zbiu",
  "key46": "4krBEJMLAE2jhJk1LcsTNgC511pBZPuYdDEFC66jCSs7nPdsJBn5HT8pnqucmPXx3GKSEAPDNZVbmAs5hWKPg6Tf",
  "key47": "4kKUKmt2s9M3BCLYV7vyZUHsarKBqztcbk5bs4yukWcvc7V7DziK9GKqNWpaNUrHvYgYN3XTxn5gDXUn3om8BKLu"
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
