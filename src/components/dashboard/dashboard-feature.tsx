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
    "3jSPwcwckeH4WjziDpsr2U4dXrhCLGZdwT4QsGNtnuRMwM53TvSGroCnk2QN9xKkF3buE1zWRxYgHeGfz59G7u33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Byts6fjXevmS9HMoNJd1MbFnVJ9xSZDPkkJaBWKAJzzdzbyGdeiiAVYS6mB3RZTY4bRvBxDqHJn6oW4PcoxsozM",
  "key1": "5KYG36NRTiKbBdBFZ22PxNvhFmQPsovavaWAYUYD7dXjXSoe4RrpkgwcQhj2csc8c9qLkmzh3DRd2A8v7uRJZVeg",
  "key2": "4GegjHxYeyudf3xdywJbo1d13qLjJ2CtMKj3cjSppRe9sKvwPyBJNGyaMBnyPxjaUgk5gG2ZcY1RZdWXyBNf1ykn",
  "key3": "2H5h8dr8NpEmjzivfbzxkjLQhf91zUZxioX7veGcof8v4mG6zE8cyEPVnHzbo3Uq5ncs7Wymu9M4UrHoRdnr25cs",
  "key4": "32DTnKrJz9FnVY6NcU21rq4zpgqFqWDEKeYTExXoxFKSGo4dgs1GbuKkjA4XMix9CTLdScdsm2BAFQojt4KvVZD2",
  "key5": "3qmx1s932khJSpikHFD2pZf44Uttu6A3qdtrvXd3vMHpuE2euoocZoXPnXqjn19A4ofDNabJNpMzR7WhZ6HMHDq1",
  "key6": "2mLi9FCZX3g9w3TK3bLFVVFU1j3SyTze2FsWUR1LRASLuZBHhBA4AYCNoivyFfAM6pT7VQHDRCKZpQD8wpUw2w2R",
  "key7": "36FHfaT4CpVNdWjLgkQYnRhRYMWiXFaGXXnuHKDHokHawAudF1ujniXQHaFumYpotL5NXfWoFeZYsVvznJwhN4gM",
  "key8": "4JmnLzyVGmPLgSgSmBH4ov7Fxfn35ivPAfHvBmCUHcubMC73B2SteY5Y7F9FriG5FVFoLm7aovdQiD2FzEeTyVym",
  "key9": "3zF4BMoUe4K8ReAdxfdvJPJ2Z4qh9yyEjje4NTMRtk98NBFfBkiDaPaxLGyDVNSju2yip6rCqHqh1mQ52vKBVGLW",
  "key10": "5bMZADFWbLDfAWbhFHnyCZLbBBq3mCDWi4L4u5pKZHPyhYTX3YvxpPFFFLTkuqHk7QF4dBQZtXUACm4nj7ipzEQU",
  "key11": "352AWthyoUHAWvQBCsmxT6R8dYdqyBDoxL2rMb4HTYEYG1JoRhMq9PLbPW3avbkAV7pudohkGQX6FnxCco8Dd1td",
  "key12": "3zeG7y55U7GP5bkhxBLpbbmmpUYh3nC6yGW5QnQbrzJRiQXqd2njjERRqEznm1YzrHZS8igGD4S53N7tWidJtqJm",
  "key13": "3c3B8JsoruvKtAqMaubW4JRcH6rUrVFEMggKZQ8Sn2ugAdpivQvuDeBjdZce2tZNNoBpXTSMuWnrBFMuiCpD7DSJ",
  "key14": "2mxStpauuv3HgjyM57kfaUeb1yeSbqPmUK6SkXBgiXg7xdGsHsGs5uQJTHN5cfzbiJ4NU6P4287tLyWi4zQKPccy",
  "key15": "5vA9y6fo41EHAUmhEE8gctNyUGjgFJWBtJCiQKkLvGMLK5dq8WKwonjSuqJmsPofqKSMiX6rxjdi3UNPGPmEvrWt",
  "key16": "tJhYNqnkYwBPAVXZ9YKjpeVWJDFrBGp763BnMHzDS4KchxS5yK8Cgtq8yXMSnsgYdckxQMZoHsbFGuduKKJPsY9",
  "key17": "2fbbRS1c9N3pKD2ngbXLjdFbNXotVUoEoqR4nAbjebZEyd1L87S6Li82A7nnGCpcvuHVVeFfdw2epb5x1tjrHYHg",
  "key18": "bhjH62J6kFhPHHRBDf1MqsZXFHMr5jyk4bUas8YbDTjhySUT9VAVPnG13x7c1NW3pZRmVXWf8mZdZMXbiMKAH48",
  "key19": "5T8qNgpRHiX1QtvpdxEDV6avhoGQMVg5sSTuRaGo9YtSUh1artn2mA6bzqZRmaTBLeHm5q1qc9kbvS8ahbNkoMJc",
  "key20": "2YEWJuZiXsWU2WE9ygwqraapV9nAA2RCd6KkKLYaEd6vTkMcR5KNSESqb7cPsKR2sGDvu73Tbsc2jp5J7diJ3grm",
  "key21": "4p8S2nvQqA4BVm4k8R5THMFVgpGj7gvWk7RWEuSafFHtVm5CNJeKaomejtdbQ3ijtEAFpxuas9jw97tcV8tmt2tw",
  "key22": "43gMWHQnkSN77upe5t2zBK3rJchrNVtkHgsnposckHjqDVnR8qUAMh6bD7PopFiv3riuDpS4RsoVnenFPtSaJMPv",
  "key23": "25Ew29mruCZChVxamRYxsa9ipmbabNRJtYrBSLZsQiT1DQVf75jAWSPLdT6s1KBetWWQnJVcgXV9uERpvrY84NEe",
  "key24": "5wA9TrPsnuHpYDxtKvcG7qSZT2ACj9Mv31ZKEAiz13FLc3yJvP4EMJ7s4YxQo97YWc12TDUBnUrWnYgeMKfAFMWX",
  "key25": "5eeZhVCjUypTzzmfm2ae3EGCBqKQVZLjcYK952sWEXrXtV9H9x9KNWBsd4yvx6zJJSyMjoFSQPn8teXvmqAr75vP",
  "key26": "27WzCfE6fymyyusdpf6qd3chHJZvpyN4rAi2nMKfVuwbMdFG6pCs7Q1UF5iCsJogniE3QBqgjJM68iMNdXBZmnSp",
  "key27": "3pE5zfxhsYqaMaHdQGhKmqCwgXsYfQ8ZhPZsLJhaogZQFHpZo6zdDpiiHc2tWcUZzL86LAaYz1fwhfv654GmusPd",
  "key28": "554GDxa6zHHHXrrjBAUNkBMHAdDuvgVxpazP4XorWvbA1GM2eKZqnynDRkgzoU2vFw5iz2bBcdpTqvCGYDEy42fE",
  "key29": "2YjPE6UvKgk66iaZsCs94UeyYBTiaQZU8RrBjg84Nxmf1hL1C9ekzNd23epa8hdvv18JCy5jBvaZTqHBMSjFw8NG",
  "key30": "yU9E6kWE4QyKFYLAEiu7CWYtKmRi7EyFap9miqacVpY7viZvW7SQZMDAhzugBmzagmGujdafoYd1DmKWXqLJBtn",
  "key31": "4XazGmQQkWysJAXp34L1wbQ6kbPv2LBe9uFY2vtuyUbpXKY6aY2oMDkWYXYaEdCFzao9bC7DVpjGmJadZxQ7W4o7",
  "key32": "4QTEkgXMsN3C1kstAhGKKTGaHdFZTUksHFyCBwvinT8GU2uK3abpM1jt5s7K69HKPo8ep5zcpvsWCouZPH2AbtDn",
  "key33": "4Tn2ai9qGn1yMRQah3EM8LM2fMLZ5pBKnFWmWvBTyxdjZ9ZcwGfjtzGENQ8KWAhPFEsS5dYW5tFm7TKBMV2obghx",
  "key34": "NEtTEvovQdNAf8uTZc9FwpgMF1QgHykw1S7MGcaDRH37veAiVRwGmuh877VYrK8z1b2TLHktvm6Eo1sQfTrho5m",
  "key35": "5hYbxu52Zpz8cHARgzUDkoA9bFp1mCQP4tCph35eQRdTCFDTQzrauKyynVYQkKDsWkBdMB5ieYRQa7xg9BBCPm36"
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
