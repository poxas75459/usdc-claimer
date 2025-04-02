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
    "ZPsXarRTDtwpUVYkH7mmH98L7LhLcCcfMZTURo9APpPiF8194nWHkf1ppK1kUgURkAw8SLBZH7g3iNya8HFVU5s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4giN673fme9zVjfkKsuPse7uFSjdZ3RW8SxV6wFvHa9u1n1ivrRyS4GJ23Xc8BfcvtYFGyJ6axDhBDkpEWgpfoJC",
  "key1": "2jvcrE8LhXEpkKFvExCjNCkY7eQBdHu6DiFG2VUQHjP7c7M3sg1XFvhGbL19v3UdX4hvmeww3nf5R6SKC58tawP6",
  "key2": "4mniiXbiXWiE9j8TTL4QmorLfLEy1KGHVr94gL6im411QSkVajhHtswXVoNGJEhCqHt6YHZXfiFXheuUBcHyzTDw",
  "key3": "4sh3tkp98F5XoeYMsufPqL5eEYnW5gEASrxiExXwHHNb8rKbmA5qytcJA3jUTLSoekZRfaUiSLhPiRV6cxDWyJgi",
  "key4": "ficY4Yfy9EXw16cgvDe8gG3pXLSGJ6CDxy2jGmtboAd6c7jbkQWf267wi5Y8k5Gy7G6MXf3kVEyXp5mPfY5Kcdy",
  "key5": "67WXEjGRTCFsRtKQeobudLWzmdniF5jCkz26ssUPC5WzNgiRrjQMVuPLpPDanThLqGDRdsdcAL7H6ChULU94NJTf",
  "key6": "GfKZA47JFw4C4i21JFGqYgmW8Pi35FyTMZvSV3JGy8GWjty1vzar8Vak7RsXuNn5YcnGbpRDsLhMWswBm21jsCw",
  "key7": "4t59gH9ZyrUc8G7V545dugZKQtT2sBF9CtFvG4DJMX8z96tnaVnvxYxacizCA7XedNu4JnZ6MyLdiVtMTaFhz6F4",
  "key8": "3pn7yLxewMtbSQCpLFLuw7v7Bosajr5LmhVNjp1Ar5CvLfaZpgps6ZMJTKeb7rcuddxafbXWLGqBgsir8cb1PLob",
  "key9": "8Lv2AXDGAS4RdWv8dKjz84UfLw58UKHucyBbPoGdMcBLPW1BwtsV1nhi2rWa2ikNwjk2Vg5KcTZxZRh59Fn7ZoF",
  "key10": "4uqCZSqmCu5wCmPx5c5AotMRhLtoTtigEMCb8kfdCofwhtdUtCEYvQms5YSNXaBMMD4ZmATUDs9CoMK8gFegNtKW",
  "key11": "2bNhPby3exudehL4ZMvbYdEBeCze7VSdT8sYWR561EirR5umWREecSE2KcVu1E1UmL9rtWobW9kAidDucsyRXEMv",
  "key12": "4LPUN28TMzShvpffNaLJiSBSPii1q18LpAjeAmtUrhgHupvGjVmkYvhCcu1zVvYkjTtjAo1pvdQxYVY2qHjwxVYD",
  "key13": "83XjWNuzYUdFMAaN2bTQNRYEaC2qGxMtdRLZcmAQeX6sLiYk2SSqiMQQCpg7uMTN2QS2sf466c9bzvtA98qyQnZ",
  "key14": "2944R2LhQ6eYVDuHV7VyS2kH2azE5cbPGPjiufrRDmzQrZ5bMCshWuJYHFbtpDzDuQUtcnKeW8WCW6mAmW53HUUm",
  "key15": "35zkpoSKv6Tbipsr72MGNsmEyfDyZRQRuBTi1mxLLKEMxLkugceTMFrxmqwivdCjbxacFQWaReCZydq9Q1DLHaCf",
  "key16": "5aUHBrzhHQfxYi7hBv2Bph5mXuu82Sn5ktqjpPNu9sEgaLSUj849eB3TqNYV1dEkK9j7s6UCjFUbNmbjCsbQuez",
  "key17": "48g6fU1EJ2Nv89hCXPxpWoyfgvCJem8EPrk47uoNrZWduCXGCxGx6KDQF4Gwh7RAvEcqVmbVfe2HzV2rksEeGnMP",
  "key18": "3uNY2q955KQ5nRZMaiifSBDeH3SLmhR5E8w84jjTcAGE6Epg8EsdWd5xtCyNep3ftPTR9dTczxcQ7xn8WyU8fJaX",
  "key19": "3rsR97Pft5XMKZQqyd1eCq2aJ4WFPd6zq62HHj7wre4u3f9rqrPJVBJpkDcJ9EKmm1Lea8ZHZMqG1qqWCVyvMWYa",
  "key20": "MaXZKrSSmYsugiaKscoaV2mm1eEzR4417ojQPmSqMp5Sadt7ZtddhN8Z99s5rq7rouvpcNH88pmJsqdGJBztqyS",
  "key21": "5Vs5FwCTGnNquTFEhqV2FRNysxTEQHpCYn2gh5udWeNiZhpoFdHa4GfCwt57mgDY3MWQyXFVNSzbJ1FgFwNZkzb8",
  "key22": "5j41VkEzXxznUYVYW9Eogy7krAQFNzDwsB3thEjFAy1YFjdeRE55kyWDgAu9x7uCFf2BajQdf5AatiNXii8WvHaA",
  "key23": "U1gCKQ3NqX8djFy2GUidoznCtBpXEVzmmX6YeQv3L5gZn9rtEMrAtqjGcVnWSiq7JyC1WdS95bZCg2GYLdy9XZR",
  "key24": "4QF3CrfS3hVdqtFh9a6DYDkrkkihaPsbqUxrmiHkcripYB2T5tvBTG8QaHh1MobdQwxEgPnY9D2pMT75a7ns8dnu",
  "key25": "4y1AFjKPXXawgGRPPUYVxMJKE8B3WNy19XXzRD4nHEeBkf6oRmbAyj5q5BXZVeFd7Txao143ktb24HYvqMNfQdYz",
  "key26": "5C1Ny12qQ8xUPy5dd1iet5F2xzNpK4nSiuHSBMpG5Y4DAeiA7c4J2vhwxq1j1VAAQc3KuLzYLBZFiLjzCafCygPb",
  "key27": "M6x3nm23kxaGaozuzmvkaGMrKaHX1rTiPdoYb1n1iVPziKpc9uURnbNAPJuqYWqcjUdXDYVeYFhEPBrRE5L75vZ",
  "key28": "4qBdjmQpkxCkU556Nnxdsuivq1EwbchMH8TYUyarxQn63UyK1tSZSDSmoqCiYBUgnGcRPk7kpsDpBFqQGeB4thdJ",
  "key29": "kFQg7SRtsZPUq36TZoaBePdyZmmuPnD166ad5MoMNzzVBxp2hQ8pJQVREsGWWhK91BGgvtPzNEf1cDaL3Yu7LJo",
  "key30": "3mYLviUhCnPrULKRxnTa42Yix2Eysvm1uMYCFFC6awi9BFgFXiDF1wjfG2sb9Gqhhu5v9T5uL1DJeDwQueBJE97g",
  "key31": "3LtmMGH7sQdxtoZ8jdQP5Sp8653ijfPwTgJLVVwxZYwXUmASvWz7SiLEEb2QTpNgze7pitP8ueReX2aUAzQwPyxc",
  "key32": "5piPde41bGwwCR31iWGdMk1astyV8wiqER3Rc65Rurn9awNKQPiLQZPmQcQAu4vJDgtEA1BdajyPZBQyKscngQWD",
  "key33": "5grTeErZ7SDDfVTygae257bcMuG83EtcqawsDmjgGpKMzo8aMhjvXcncGoQJshLWhH6teJ4yWiUdK8213dKW5zNd",
  "key34": "2T7VQjv4THzMeJvk5PVb9VwBavBrvwM5ozhdJMreQPium8dgQibPUx1NtkzQPEX9Ckxtqn97iwb4nva2U8qmmE6G",
  "key35": "4xUHVDnnner9imGELPTJSupKa86Q6fER1mAqroXMahVXABm4UotdNiYjidHjoEBGrorby6KPCMS4aWagbvjwYhfN",
  "key36": "3Q6FnW1hEdKEVmPZnu37D6TC6wQQcqmcLDzX7Z5KLNBy1doNnMiLnmQ7z6rPj4eP4Px4QyJ5XMEJBVLaBAQTjMeQ",
  "key37": "22ZdrvCoJZDf4ngYGa9nG5sYLwAevrLShzw4QHkbGaqCSiiNp2XT7eKPV7bxSEo8tyFktw6ahq7T3LKFxyeu4xny",
  "key38": "31cxWiPwmhZUNAWQ6FTr3XeY2HBp3ibkTx6rjek7DULizV4M4KkP5A7PnQaCjwsYp1tFbM5Y9bvZXhxmXjtwcz3L",
  "key39": "2TtEFpqoTCTtZ3RgVWxTZG3oZQzH6X88mivJgm5kTfZYZD5CJ6S9SMoCTww4sd8mwdowhSEHBadoDu1zB9SdPG38",
  "key40": "iqvsPHE72qr5kEUZfTbG24nVqtGZVZQXXrV4Eys1g7gGf1LywZtTfFCNuFbVFFjVXHUFzRs1wBrbdGx8i95raCf",
  "key41": "3HAr9rk85RP55miLqaJXuocSExzaHCLzLx5pckzQie7WKWyevj5MHBn6fKr7N2j1hv7LbRT8o1mjwYQxU8QfiVG1",
  "key42": "2PKRyMQ2Yb13ukKqvfU5iax81AjbiK4u8dGcEJAgPtNnCZvsMn9DYKcLoMeW9eHptxHsDgscj2hQBGrvHQd2aLy5"
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
