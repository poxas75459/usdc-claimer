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
    "4Ghbqae5NCgXwcvNEAZ3Er62nDbyCscCxtmEtYwJWCj7Yxew78utw5eMrHXabHfeQGJprGkygQYcQkiFzRqXjRxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qhG6gBZ3Sc1q7vtHp1kd8CbzmNMr97WPyjZBNxDJ5eFfxr2iuZgZBzuzEZM3LZZYw1tSwnJHTRsKns9it1x9Hvt",
  "key1": "srRgw14Nx2xHA7CoeFWpcTJkbabe8wdrVfnvWVtUbHxvWq4SeciDKirzFLWHkJirPTFLYehwPta2cdXizDunn2w",
  "key2": "4Q6ePEr5LMqLvi7eRWnfpncJ4Uer77qPdHavEv3YKdQcozdXbjBq6fABERjHZodxpphLWPQ2tjsTBRFbM2uJDZHT",
  "key3": "4Vf5Psgpy1caYXKtCRSR2yH8iASP7BBDvnzSrVEUbaS8LbVST46632tjUxEWyYXLRFLd59JSp28XYGj8R3W8fF1V",
  "key4": "4gY7zVhcfNhzJd9noy71qj4XFah7Xs1UWdGjVUx46UvyLVK1AmkNvEwg33CGq74WdvbDK6PLNTbQp8jZLcpu4Kd6",
  "key5": "4co21NtanzztmDwxzHisG7nsjTMCx2RzrgnVMTAiBTsenxtecCGU57Ho8rVHLLzyrK85uxnozW8ujgNTDTYGFDdj",
  "key6": "5QN9WoPgxa6gbtX6zcNdCd2Ya57Sb7qvAyZzLQ7Yy5f5EM8cebWtMk11stodA8WwsVVnxri97isQBxtNn8f9AsSb",
  "key7": "2325SzBnDNoCs1cX6WFEDPD2Qx8Lsk6s5eQQfEpAvumC3dkPTzWr46zoxgrW9Np9AVkVY87Fk915uXem27BzSRG4",
  "key8": "qyYP7f5erZVHTgJfbPNaJDFGwRPDYSmKBaN1S9RnxzGPEu1yv7TWeK7LuWsf8omdYfbjNREMZVrMxn3wzeGSZYq",
  "key9": "3gH7qRWsHnFi47zY3A8FZn8tZYdKjcjZtZS16yyWpCwtp65y615oLM88J2bVV96PUzyS1tz6TGNk9sDPgbrfTd9n",
  "key10": "4Wmxy9vGr77fKbKN27WGzT2r7azL9eDJdVwoBmwBQJZWSXL3u1B4V5yrvGQHyYhqyF1sat3t8Aoz33axxkKSymy8",
  "key11": "5jGqvgKFe5zU4FEdQ1r7LNYYKuvj4JZ4EvvM6GdsKhNsPHcfiD7C7z9kVw1ahpbPCEbphL1wE1F2ss3eeycMWsKP",
  "key12": "2bAUVUUvdEm2kYAikFhCQkYL7FtaRG3JuWSfd1V1yjCBYfHSYYgkNFXoKTxxvb7HC26cJkWizPHAzP97gyP4W9hu",
  "key13": "5ifHsoMYQgYxbJskM5pPu8D4QXDAA5DJtRphLr7vcYkDLhxTrojCugfNqwQRvKJmR7ystDAk3KWvTqadUQa2SM8",
  "key14": "3G3o6smfuo4tVoNbdLzRVB6EXjgMmGvzxthfYZTBWQnfgATXsSzYUsE1ft9Y8pVxTTZtknTwqw5M38boEFzcFNBX",
  "key15": "37boN9XgPhqTWDW9Uu7umyp7CyFPcx4eo3hEBumiufu2zDAwDvZzMB8M5Mncd8sQ977vS2Az2mtWwsRpNBBRnmxX",
  "key16": "LLQUdZapFN4cpfXSiVeh6PRwrFveVSqXUtEgS9ybBquVwovWm57uz6BKs6E5ZVDbn4R67J7d4msaoJNUQJtDvUS",
  "key17": "3Sg5DzsegJUDu96g5fPLDzudqt1vD6Bb2DMmJ38d8N2ARrSU2EycFtNGKy5BFEMaw2FasztaaA2mA9MTU8Cjhf7",
  "key18": "22fBYEjQR8v9EQTAMLf6mP774jqE5ieejtMpuS9h9Rciy8WGZZiCoc8XxYEEVcMn2x5gPSCLTFnC7xPEpHMJoNUz",
  "key19": "414QV9PDtoSU69rcUpWcRBD7eVfoXtB59tEE6KAvZK73RvtE6BGNajTRNhuHojmMcwjCNQ6Hi1ZeMRPT9kMEt5Qh",
  "key20": "5wCUsCJ93NF5DLknvYU8DX1QxtcLemfGAse2baGJhgrGfTH6GWnU6hXcioFvP6FgDQdU9tv7wKGWpMwQZCTQZMhd",
  "key21": "3kD7WX1uMpaGD6APn5pUPZfMQec4KGfU25cxRGh5XqMeqsvoAMs9M58PzFLqd4PdkCiZ4XBaZAdCVWBYh57r2Y1f",
  "key22": "3HfQEedoPP9KueGA31Eb4MnzccBFxrhcdLX45Z4n6JuDu48JdKKZaDnPTysNksfJr43zPysmqcXYW2MioSh9YRuy",
  "key23": "25M1fgZBs455CY2eCHUe1XZbV6E9yFso6sUa45ZKDRXq5GM5q2qpNjL2QXdvcbcnB8HcymUiuoDzmajcC8KBADeR",
  "key24": "2DgzvfXnkCntKSi51KLZQuHa3pL55mrR1b59UpsfekTriMftY6HYVroMXTPUEHe5rravZ7zVHsT8d7xrSyEDTXyc",
  "key25": "55dtv1USh8UZuCbqEWoQGbQ7tdNQoeXopzRE2BLs3go2AYGv6NCU5JZyHC43r8TvUBq1iX94DFQ5Ae88BXDTp8dJ",
  "key26": "2w3v4Qk6hGbhkx3DbS31ye8nznCbE8TYkDWm7qvZh9XLs7kLqeMCXtknNWpckZBF3kmUNkHZgpQXpHRYck4AQoED",
  "key27": "ZqKyisBnzs3K3xupc6zzaodGZBu6iV2S4ccxS7wpWWovttrgBKT27EkXLgcyeeKQaiFuVqtq77Dx2oJUJce4jZd",
  "key28": "5U3bn4sSqsvd4E5mxbK14gxu4Z3ybe8kT42sNBwSfN5RSLpgEhAkmktPxKCr7uksS8PKXZFuQcCj4oNupxyWPoxp",
  "key29": "2QugfYciKQcMyfoUH7UeSmRWj3jx8niqEMZc34B1gXXtzwYS4Qsjb5x2afXc2ScM1iK35iYojBgGyTQsdeRFX5zi",
  "key30": "3yCB7KUPTmza5a6cpnHRyeRHeCH2bN6MyDfTwvcNQaDfK6qiQaeG9tpo7omQ1DFSdsrreDEaRBayP7xR3eR87XF2",
  "key31": "62XErc8pZPQK9gKpW9EP3n91VtozWMXaaKpNft7SuNjWmHzsc3vp4fQig42s8AiHfS4PFy4Pj5F52WfsfefeGxBY",
  "key32": "NKwJqRsNjBNm6CDD7eVbhX9iWtFJCMcuovo87imXaPEGL7FCUfVSR1DxEcP5xwBuDqzCE36ihgFqQqCTpBHUdzD",
  "key33": "4ssHWxZqWfq1PGQq9a6pep4ZtW67iRKd5miiWfAXg14xSZhTEyL498Zy2Qejtaq3hMLvJYPykuvghzaN5NSdmVnB",
  "key34": "2wJbaNCNHUEPjJGgiwhZUuAkbbEEV6WMZXjob6vuDKpGYDtzrr5QwgPRVWpLd9eqZcN9c9qzKnQTW125y2Sp1hsr",
  "key35": "2FNEVC8fHGTkzczfSsweKZ2PVapJtLm3Nwd56m9PRpmqcoSuypSUKvf17TKyvMykzgVyK7n8SBqtLg56iHVoJchY",
  "key36": "4iB4mDmHbBXhTXhUeB9vQ8kVh5JcbEiZDYYSKYRprXfKjZ7Rh6zG3aE38238LuyUfntoH5qJUmK8FeEyxT8oKWfp",
  "key37": "4k2MrW9FeT12sdGDKKqFDQQSByKT34Per2KhhXBbecohVuBY7iRej8CzdBdeVpKKggqWUrqymgqQMRkvrfTtYXUs"
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
