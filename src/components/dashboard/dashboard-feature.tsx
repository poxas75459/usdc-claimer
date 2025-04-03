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
    "4JJ2SghWX7ubQBW39ECBYqyzRMfRHwMFLojkmr2NUWZ6ykHivsMQPxQXJ9nEpL3nBTAhbPQaPFWt3TwWzLUwdMi8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28Hp5dwdD4uvrEdTHCQ1XG9BMsFM1oRwUWf8F9EfDWK9YhVmixkBZArYDtyrnvNDarGPtQa2w2xcpKU4UcvQ7Yz2",
  "key1": "5iCHnPWXwXWK5vhiTou7JNFUjgmcWtomVzrdMdABkFJUaZiu2rWDaqViBATpMbHwYQ4Ax5sLxEPuiX8wfQ52mDeE",
  "key2": "2DKcXitw4J6NiiKFKUeXLcRKk2S9V6haNrNvNCVd3cwFMouer5e4B7KLRqX9UK793weGiiD6BCKS1FpfUHq7tvr3",
  "key3": "4jphLEss4rvG31BzEJo4vKYeuwSWK8YRg4dVLve953UL1GS5B1z8pB42aFAHHfktMEKKCiRwEyMrFcrgbRm4gmYG",
  "key4": "2d8zWtpg4vk9DwFHTY8DpxaAkpAU3w1QNA7WKBiYTMEs5YoBZ3eycKr2Zu4nrjv5ZgosWSBBXYMriFQHwEEchJdT",
  "key5": "3b65PwowKiwkEpKZVYAkVJdqGL6XHWZmirA5eeJvgYfpjRKNh27uH1Fpt1G7HRDwEpPGHqgdGHYXduBLq5xxpMQJ",
  "key6": "47T4FhJkYrBBdzHHMBT3YuYK1gVRwbCjbEw1rxuhbsXWSmJHxD76tsB5h4eRVYpVit5G5KHeZX4krETDMxWeEZpT",
  "key7": "3W8w3cLQgvDfvh8EiQYQcXQu3qaA56azaKWhqQdTQ2hAAM3VomSGtvB6ScCCaaNVsiadyCQtHY4rzfc3fwaf6GVp",
  "key8": "42MadQ24bP8Yt78sLgeFEc6nea27wuojmzQqtRHAGm61xQBwxK6zxCgvRhwTUF4zazwQi7HB8FeaYHpQ4TK5Qdvv",
  "key9": "3ctt65U3rDZo13eNTTNoKKG1BvUWCxrv9H7bk5fmc7crpSZSEBdvBB7EYwwVcHGuu7HPpw5n6Z6BKxTekVBjeno5",
  "key10": "349wwT3XNyL9XhwHKV4M5NicSDjkxrowjYA2NoYiU6eKfxecVVLBUoUJNahQarfVnXwECj4UZMwn9VSzxtyg8UuT",
  "key11": "Znt2vmZDEghJ4NdkddPmRmgtLss3rqFvsfSm3T62aMBnaJdfBszdDXKw9Mc41LQwCUQ9YuiakGvEWncwVmpocqt",
  "key12": "5WFVyPWJyUWumCsZW33YGygMRDBzrkte9jcwPnYE6BZxChqi97zu5MUHQ3KknKQCHfvWsyHMJmwQ1922KTeaVar1",
  "key13": "Q1a87HDgGBYUFV6aCJoj2XrzPgr6srkdieycmzQPGU85eV1Yzn1eLs8mvaro2PiebA32qEgBuif6nRMx9gKeVKC",
  "key14": "3QUsYVA7GGRGVefprbM9MBoUeabJpAxzfZixCj9U9AATRH5hgeuPHx4C4BsfARsJeCa3QBmkCdiZG33Z1wkrRWqz",
  "key15": "4FvMR3Ma37adWDgVgXa4iqxcsKodsdEiUTMaJG6sTEFWN7WmrNkDUrBaVES1pzLbPJ5gtSEVUEdZSsC6tcM8SGpU",
  "key16": "639B5qdF6XH5jUctqFQwQAqNsCXMsXcWPA5oWeDC1hmMB1f1T2T6JAiPfkXc9uex2jJvojUyBmhPrHySc7LYFFVU",
  "key17": "3bL9K8fExPugYUFa2QfGkuqeVjrchM8mQ7ERaVPnq6BDsE1YnU5rtjb2Fh5txmqedcYNzoxDei4faS7UG7L5Pzds",
  "key18": "LKhoqCDm9yDQ3JqXHxdVWuoPzgSVwrYKSsv7xkcpuniJfHb2Diiym7RyKZCMysXN3aque9JkSEehTagBvYnkuJd",
  "key19": "66hXVfSWZGJX63uCw6qcmQ6FnQ7jkoj7fsXrkuU68z9efMznEnzanwhHgHAUDbCQetUgKfFLrKHToamJy2JUYd2e",
  "key20": "29NCitMaN7sQnXw5ZRJ8STdF7BGFb4bG9GNe7ZoZCTF6YZC1MwKssg1FrrwvreTuFNykKmSGJgk3RNQCybq33mnk",
  "key21": "5SQwCFYzi6aeYLtpAm7DsEmUB35nkhFXwsZyjU2C4juJ37wmQH1sUXHgYcRdDf1BRA7915R1UMLCGnBU958e2Ljv",
  "key22": "3XMMwgxUEy2ozEePqRFCfvuGd6ZDij5yNvyQLK8rh7KiJMvcif1sShsNWSWvG2DyaiaDdiSRsLAiRbCedDsfxKx7",
  "key23": "24xtyiqRYbM7NQbaWbeAENHLQAKxigMgPdjGjELjLiav4XG9DeDeod7Nuv9xucaHkyWJc44b43rww2T3vHtLNhiB",
  "key24": "2ZAFMnMLq2ZKd7WHJ8cbaiSrDbvjMhRFkaG2k5rVnuiyYDPHA2qRJdPgJcUj4gx5VM3Q8BM1bYDq48Vd4Ybeeiid",
  "key25": "3EDVhEauFwMK3u9uSqDwAjyStUcVAakXifLw7zS2PdSqqKhAY6H9uZSN8fz24cboJVyUCksaQvAtQMPrVXGx6huo",
  "key26": "5DhrudSe95KpXNSuQ8RBPhRoETc3CCU3m4tuBmxQXmhbz6qnMvcQGJSrwriwYB9qdwumVoo8BbVWP9aMS5TrZ6v9",
  "key27": "4VNvpBZyp9PY1qdhqz6fiP97N1Ksw7K8bTJfHG5b56fu6pYD1pZ63RZuSGuykT1im83BsKKNLqyXaAQAhr1nmnDv",
  "key28": "56gzWJrEdqLMHVydhhn6jKh71o8xNiksdcaaodEu5MQQ4HzaJtiYf8jiquNRsUKSycyCakRsjmz93mNeoAndubz3",
  "key29": "4uz2ba6kJASH6jA1odbByBvkJ95QTh8zyhM4xCsVk1X7opMeie6mW1D6ujpRwDC19cvhHbWiGzt8xsn2uHdvvUFE",
  "key30": "5i37Un6XznxXWpGW3aA1NBr8HnAMjKzxGHW6rvaM5NkWKq9os6i2wsB7CMwAdA59vLTKmtHX6pF4EoZKC6dezgkb",
  "key31": "5JwLdiAPRLqFAzHewbMJ9JbRbE7Vn3Hwqkb5tbR22PD5JSkPd6GRg7aa6yWpLFnJbbpRfG5nLcUa21K4XvEkh8ed",
  "key32": "5vCRLZax5ZWKRQG4fPdsg72G65keH9Lke1YP9vwzDcWZQVswkJKjYizasrN8ANqNaKgZnHXzzXcmsEfqC937RooE",
  "key33": "2SHVKLh5D8sEBptkrgnyA8erVPQRoorURSzvfn3e9iUeWwLQ1zXkt8n1QRUWT5bT1vYjAFvKwKNvaz5231jdEUh1",
  "key34": "5r3oUxGL8r5nLJcj9rnMSngDb5q3Apa3wtU1WykP6WhcmSoAkgBcxdSRMD1ooSKXYKqHdMbqc17BVLgTMzxk3fMS",
  "key35": "4e1m8m1uSqFxidtc3cKGL6oyRXPB4ruASE1KkWLQ2yK8cTsbMTpVTugiusN8L82uf5aLiEaZDaLo4cpYDEaS91yv",
  "key36": "zojmsA7PcJApabMsYz6ECHY9A3GMyFuAyCXcJyH4iKYNApbq37p8BqvccgwoERaydpix3KhZn5utGXqR6SupZ3a",
  "key37": "57xMX25xoMT3UCXFxnAasAuYoUZZdD9cE9YHdN5Wo1a3eKcETFoCnUToVEMPptPdinqh7e31gqGZN3RpN2vYwQEp",
  "key38": "61LnH32xUAUALFwkaqXC1V8XpiDkJ56HigmTyQhSXcunV1L2HnAWi9mzWfQ7PJavDfcA7q5pkfoo98L5MU25zATx",
  "key39": "5TYPDfpzLQLoQkpHzKwccRh49f99CWEpGCyXyvXrzagGnY8eD6dsgVGGbDgT4zuhSSwz6cP8JpRqkPgEeKxGWVXF",
  "key40": "3cTAtiNfdVV6xhjYeaSeLFryXNxcHbhTWqSoqm7KRZPxWCzbYLrFQiBrGNWqk81xqem4s4QaRarnfYZoZEqjXTKm",
  "key41": "dg7SQ5Jnnt58fJw3aRAeSoiV2prS1baCG89MHSutArxbcYDBy6niUhwDpdAeKYN2bek4Vf4HUhUUuSmhmAaV1Sd",
  "key42": "5yxeu19gLiu6DgZ1skJHmbweuzXX1rvAeA3QsjkPMV7tgLinLDPnynYsmhBZ4joTfGFx5zrzq7xBWqqTYXJ8sYXT",
  "key43": "5RqDJXjRwLysAMX9Kh3dCegTudGHguDTAZdcNE4kdNraCdfFCrygo6QfTLiEEUfMGhasD6ksDmseMNzPnzA1wnrb",
  "key44": "1BVfew6qnTEAMDhcQp4EnqE8ZB8bi8SpaDb8Nqy2xaUgZfd9SHu42xBEYcNHrmXLyHWWh2K9B8ezxChAostGycw",
  "key45": "3euAWi1gaDSABgkHEjMso97AbR77rEHvYzwFRRDj8XD93QtrqTeywEEXxYsyrpA45Y3YW9XqJ4b8z3cSALexVrfT",
  "key46": "2u2WHkWkpckV99HoLuUoweCJUyCunfS26sXQbEy8fAaHp4P8BhGbZMxC6jpEb1kjMuJqtmHk6XXCVqVDtq5n3Poj",
  "key47": "2cHB8jZowweHANMLyUFPkWVBhnWeHfJfRzCKC2zMddwTJjTCmQUj1JbZG7Mg2T2NnXT26U7huni235bSfLWqS3zp"
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
