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
    "4V1ZyhckhAC7bFRDatF73h1SMKKfaMGJnzxbnQ9WxUCSkUjdDRoRVTeqfUtzasfDQkKYDuBfmwTuNJcvkh3hutwZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28dVvgStTniLhsQWPUZkr8SCr1BMSZaWaXQ9Ly7rKmNWpNqxVMN2HsbYQujPDB7qYwMX5jBzWqMLxWbazVj3TqDe",
  "key1": "51BVLBNNpXGuJTq9JTdK2RNNs7GuhF77iDwmeWHXvrRaUsbQwRTkuEkNHpTxJAEEfegeFXmCgzudiBLWDihUvGf7",
  "key2": "4ANXPo1me1XwJVzVWmUab2XiovQd4SF7uVNXouCp5nA5xtRJV55nj6YRAPcBoPwW9utbUWhg18RWQDUAwcsqtbNL",
  "key3": "zezZYSjxJF8f9JJQv3jSLptJ4MYjS2QQQGEdzXCLgomjVJC8p9dy4rDGPENb4U2cQ2QfTqrYDXsujkFeL4YKfiG",
  "key4": "DQqSUmqrvBobt8dihJRKcmiCkgwxCJs115Mkb2BKpEVbUSkf44J7StrDHyMqUtEMsoPbaZKcJsvTysJS4NVKYNk",
  "key5": "3HhqfpWHsok5kVxQR4RNEvtACKSSsVviZ4hEfYj7q2vbeymPaVk2mDLcygRgiVDG8N3UutB6dpW8emhKoVKkSSC7",
  "key6": "5fjn8UWpnum5xmv6QVrzMqyL9pqXcXn9rFCZarpMjECe45gZ7huCFaQnJjnior7RQf758Cu316pid8sSG9CkwjgP",
  "key7": "2Fm8LQJnaEtjPh39bVPqQCZpWXfLtVzRtsjnh4wrzuQj2ChnZQAinioS2bTMeiiMQ65bvCibagQY6QsR2rPokBti",
  "key8": "2V2MfFMULwwtdES9ts4whPg7u5Fd6YTYTuePMT1QYdVHEVWw3b9VNyatV1Ep8wy4DzXMsyqeZUSNZVdEMkoAY137",
  "key9": "cwgVjp6mntAPkNmMeS77jaPY2uWygneyjtfJEFHNVizF6uRatsf51A1tzvBKVThqitu9b8Q3jhBTiJ7gzuC7ozv",
  "key10": "rfvAn2XJBaqLPWqtabJk9FCuTPmCFkmE56K7CVa8769cmC4qXjc4dvLNx1p8T7uFtpeeGBZ2fR8k2JuNxoKucrL",
  "key11": "5A5tzy6wQyJrfuDVDgVgfoTRP3VubS3XTVAL2iZBYR4ca7gcc95vTNuwEE914rH8b9U3F4W85hvNqcsAzZBVoQTK",
  "key12": "3mGREZq2sPHHwTNKahLMuN3zwJ6SBKWNirJFLheHVYWRpwakLJoatkHx362zq64BA6ydauggQ85GwPS4grXqHYTp",
  "key13": "3rEcFKkGrDdJnZkSfsj8NvSS2eULRrcTcnSGExzmTcLcRid56wypkdXtsV4fCHHK595LkeBkfECWMCRbqjixfsLq",
  "key14": "2eHZnK74Ne2qFxLwLc88r9x4A4SuJjMDPEncN5n8xK7V2HPeM394FcpwB2HxGFfzBjv4aP1XCkb2u2f886ar9rDD",
  "key15": "QMrkWNv5to2RgPPZf2JdXuR7ZH53UgYz1JvakdSYz7ZKgC8gGTYzLhAe7q3P21cBZc2XZtZAGZjGZ4Xn5Z2Zs1v",
  "key16": "mnV8dBs7ooph17xdfFxisXMDjrEa98vbDeCrMXj6ViVXastUzeZbgGrzZCdZeSovNpX5WXiaLU2GBHKNxnLMPeH",
  "key17": "2jTFhSoRkmDjNqVsA2Vsj7ybk5HYfUF1HpxfWwcP5CgnWCiBP8z95eXe1wbGuZG4xhcizqaayvWdyw6Ct7zuGHFs",
  "key18": "42wzaKiKiq7diGcAwuivAm1Q7TyvANUrhTC9PVqYengSCNXB7mkfKUizKZhYFhWGdZyjp8bDoupxhkBwZHF7KbKS",
  "key19": "5eCFjwNbCPPcSQAZvhxpLam392HvMFLhxegBXuGYT86E2BpofcHZNeR66aC4axrHrmU24zRPdQpzHcva6Ebnp8EJ",
  "key20": "7BE1caEimiuTLX1Wbdc62gR8VfE31RS4YhCES8YssPyL5KprqeZ5MXW8BjvZW7VzxuvhgUJ1vby3chiZhc7GFZB",
  "key21": "421DypzbVTnqGmEmsqQ9xK3d8gQQ6jPmpToWFvYcHFSGpr78qrF4S3DNojvsdWsuYSMo5nvQAbtEA9fjzjW77Mac",
  "key22": "2hKcby7T8ikkpsMoz9NSTzo7dKtXKcJwvRGjvDEEJ5T8cqmHfCane5bXcZUKcWBStvwxRkkQAqXQPwpWMN5vd6mq",
  "key23": "g8ut8bQaDgDyBKrAVXjWMV6Q9NGERyawBS8sjkESnYpPUzqYr6sDR9AGx857GuCd7Bi57iNf7NmGLC3H3CZRtem",
  "key24": "51JUBJjxJmhiVTEULJPKmkEyFnmZfki5ExoTxTKzW9dZfyJE7tqLeo2TbTgjMADfdAL8Yk8tRQRF4di8ddKF1Hye",
  "key25": "96owprZeqpX9StB5XKq79jzuUUT8zb3Pub22EsSzFk3yYYm51WJ1A3Pft5xo86vNQkD9jNXRy6aGtrte3VMxNr3",
  "key26": "2Wr5h3AuDBHaAmoj8ZTM91963NwtwD8DJTE8Kuf39vhYAsNFXYcAdbXbdbqitt4tKYcJYDvYzu78mszX51rB2K9x",
  "key27": "8sbqMpWdG1v8uArisZzN3VXV6Eb2RqEi2sAK9GtPMqhjre8gA6FyitMehuorEnUtwcBQijJEDahVzGntJXpgrnZ",
  "key28": "H8W6L5H59bkhPgKnYWgP2QUjx3B9hHGsWqYQxPakQzpT8h1Zv6KmYXGYRjHE4jodAgQWMWVyjSxiNQSXzByVLGh",
  "key29": "4dqpk9hA5RRxa6rExD1k8nLYB2kuFMWX9vE9hA3joutiZRAakkYvt1yk7XGRYZLeTn2UgvTM63noiFmvtmneL8PK",
  "key30": "2Gaux6ZWjiqX2syETsrRSgeDpLDWnGFCBuX6ExY55pairxFFJvBUeZB1r6JGNLgrEWX9Pi8cS5NLfrfoeEXBbPhG",
  "key31": "673WyGiEpYzzydwPATKwFXZRK38CD9wRmED34vzqu13NU2WBw9uVLcMwqfPKG2L7DtsogHpJyU1jBtbKTZVTrM67",
  "key32": "4bYoeJv7ageSFcK7LVkZe3ng6yDS9dQEW2YeZhGTTbmwAoxi16c1YEoG1axKrTsLoFNEHNZYWWyw3wfAeYHmz2QT",
  "key33": "33JKbCMeZRd7qNd3Dkwv3o5KuWF6VfQa58MJXv6vG7dBp1anCtviestcskn7aXbsJ19evHWbtdS3Begj3DfgiQyo",
  "key34": "X8S7h7CytCdiVcmv5o88QK4SYWWRR1gXoZZCyMT7VcHrsFKnZvwLXuTGrstR8AyJX6m9uta3SKdAMLmxThnYnJs",
  "key35": "5hgGdnHbSroBi3KejYz6VuT8i4CuKCMSbjnGBYbkfPcfzeN1qX22V5ZidQzi5v8vYvXjKwy8nbZb8DXAkm3RUNkj",
  "key36": "Ev3DG1WWayv7Xx1x2dHydhNB3C8xzrNVYrKVoLMueZWEte6EKGUgAh437heekEyDGxeFCsA5QKE2Qsd7aDv7B22",
  "key37": "dtbtrnAp2A1Edz9Q1Bn22rEp4YK2xaVTTiFK341Cjdpm9TfvDemB4QAyEiF6ynwtBAFobTYdqDAKuh13MFaVU6H",
  "key38": "41t9tkyrK8y77iJvNsvg6cYXyWaPtzfagfG7MwghcYCbpLKVBUFbt33XfRn5eTepPSj9GMCoEqsQXc1DnpXNEMpC",
  "key39": "38hqGKNK6viGxsQXXEXQJ3UW2R2rqkQ8nDeHJvVEKWU1KjdrGFsQpBMFdzUKEmzV7fGSzo6YXQfENs6dSxSGqT8d",
  "key40": "5FMDboDcS8BBdVcNfdGDgMVFSDA5x6pLUJ8S3hJURxQMYvkeEtQA3TzyufoDaVFtzYquD7ks37n9sig4w9wjvBV2",
  "key41": "2vaCEaqQvj1TkptYdzy2KJcPsvdvGavqrUCMs23WGPSMp7mAn3oq9MS7Xa1ijmJhRSMX3z6CzGakvog9UegmPRS7",
  "key42": "2WduAKtyCxUEaW7qEcq8qCTHaNxu7apCUMbXmwiJRjQpzuXQDLpn8wpR7nY1nYzF7Li3okj23por1dr5p2cogQjU",
  "key43": "5VhiZ2NqbnmVdxARpAMdZNzRiPUZGBSYcscs8e4ej8uNskeQAc6tx7bg8sGwMr5HTnY7Qihm8cpJHvuDQX7GTnVg",
  "key44": "5cZd9dxUeRTPsy3nyqsp2bgRM7nMmQxqmu4grG692ovca3cBZ83ybJK7kh26Nav1CdZ3xrxoTvDTArwCgKaKm7sR",
  "key45": "Adv4caHATovkCyZ2hEwz32x7bUz23VUCSMy3Evs48kToXBFkYpCqueUdf2T6Kd2dPHVA9TuVsfnP7bk3bEC6gst",
  "key46": "22za22Wqffit5RZrWztdz3LSH2LBSvnPshsfHNTShR3dEtFykZ5qKiQ3PbbvguGdqUWybSB2Phu3nwf1z4h7eV38",
  "key47": "475ydToiXWNaMn5GYLSUAy7QUd5bRzRn4hQovaSSbY29F4nmGKYG5d5Jq4v5G2wrfTgzH6HQsNHm8xUf8omGCYGT",
  "key48": "4SM9LQAMd4GvFV4zH6kha59Ud1Bw8U8PxqjZGLmwSBJw7qXK7ACNmNwAPuuHFFnDSLBEraW5qx2GnMd1hbMU6Y3X",
  "key49": "Yp2UzCJK9W7CZZWJmcUoU8BdnczkQSh1N9jTQcaayftVXawrKHnFsVQ1VvCV2pgS45DwywYJ6UJJ1RH5LAe8oB6"
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
