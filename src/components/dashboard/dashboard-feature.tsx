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
    "5PD8D97ScZH4wNod6n9ZpzWQeJjmq6kjreLNZkkMDcbPLDMYSi4cTvkhS5EgYAW1xRRW9dcMzZprm6X8jh14W786"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SFHE7nvtSjyxo9yupqXbXABHGGfHnVHvVvaKHhrfsM4V1PEtM1WHqBj9ZfAUorxPjBi1f9bvs79er2RBGHM4SEo",
  "key1": "3qAZdJkx1Q2LRYvVckZqd9ykH7q47L51w2saCfkkVaDcQHu8vm43GifyzBbYYhnJXkhL8sHoUffPwxgbBt86f4AP",
  "key2": "5oTGHsibQP5GYetoYNfU7c3iPiGWNA2WLGZZwKsBykbSX6NuaC2snZaAUjVkvRskeaYt6PVPkSB8vdvx6fB7kKTY",
  "key3": "3TL6xnejmwNn9265jxmZTf1ykFNio94jwiDjoccn9mKhHXcCRQtHyb5uph2zuTs3rnWexpUBGoPfb6fEc5NrZQ8s",
  "key4": "YdCrKLGdu5RYkrzQRnSYkULoZA2LAmGuy8b8FAhQGj81NPK7sZDmt5DsZ55hvPLpD9VE8sH3yWuWaQDr8A8w2pQ",
  "key5": "2JJugNpFy3BdGSUCHTGBch8oXzs7xeJbp6TJagwb37JHBCyzWbWCf19st4EMv6rbg8KaFWufuF9Eh7bLetYsStn8",
  "key6": "No28eHCkbBpXjDvYVqVWZ3mk7hkYY2kMeX1Bbr4R5KphdLEv4VSAxi4cBRci4j9yrJSGGWbQbVW2ubkvGW8HkZu",
  "key7": "3DkwY15cHeQx5yppDemTSTGxuWdx38YiarUSzqokohgToubtojQwwAxDUAhHB1nrZ3U46KkF3SwdUKnRAh7BAGYg",
  "key8": "2q281btA1No4hFVkThuMmvrcizdiNU2rTnd7JqLNZxKFtDzm9hKfEoRSaEWKaRZ5hEbg9oR6uMjQDfHKXouJXLpz",
  "key9": "5BtV7s3zT9couzqwo6gbcChVJK4Vh7wfu9qmF656rM1c87iAa7KGt9v1ELrTo8UEuVAX2RUcmRNdf4qW7AmCsF89",
  "key10": "56VR8LZxRnnpeGPmu2TU37JbjngcoqKdJvr6QoxhGpsNQL7wmCxwVppkGkb7uZA7SWvC6AS6Uq1XjJbr1py4BsaQ",
  "key11": "63UpdvF12HdkjTT56fwBtfqqzSMqGPwAtg9aPLNhksfuB7yEB98QA9WsRNDLmuBjUM14f3gMG2PPFhpWog5f9PEV",
  "key12": "5EVp9TyMKX8g8XnwSE1znsocCrc6wR3vKd6tZF6FF6CHL28Zo7icuaFRMHG4QTUuj5rW625HcUtdvkMLfo4VYwAt",
  "key13": "2uRUYYn5UeUnZ9YnrUoir6jhiTHos9f66KkrX9oc7JgtfzWYQJj8PVFG3z7Yutdx87Xg9otzgEhyWg2LSt8V2bAk",
  "key14": "3MJL4psdTvd23HLBSbrzraspvdWzuSjMp3yZWrfouzGNvD32nRVxeD5MCEsSfbJecLKYWbP5svPxfTcB8ZgDc1iZ",
  "key15": "2SyrY2iMLjSAXeSWra1ZQWfyc6rNtCRfp2EA74UCrBjydWekmHci1JEfMKgcs239momrAnGg9CjJZdRR4mmvbkT7",
  "key16": "4ixT2XfxWqr2t7ukptLrZb1ywrAhctyPfqDJuWL8HqD7GYdfMKaSoeucjTRzhXLXh4Ve3Rm5yMPJo7ZotKYyJ4HQ",
  "key17": "537xqsmJcSZaFVMrrfxE3rHXkcMLF9mfPP2TvB3KGdUmgRaX72b449tPuhN2FsQGiBCzZm9Xdr2mwvB1CuVdvdws",
  "key18": "41BjkG98NCwHV64fpxmsDMm8bTo1XKwFTJT5r9KjoPSfgZTBbAcWNNYEt2ZbwKSoWZSmrSovSZ6c1YsARPLZbUtJ",
  "key19": "WyJjSA9iX5tErX3TZ5hDmfc6zaG6pvdq5aaKWY2XDATokAR6n5NXxF2nZ73NG3B2eMMtjrvf3EFnaYX4c1wGwK3",
  "key20": "4ZTd12sL4hogbmiJgRE7AKXf4YFNo4q7bv4MQaFdec9izDBEMvr7RxWqYiw1GdEdZVnL51e7BhKNq7t9pVQybSwg",
  "key21": "3rEWTJxsXE8Ne52NaUbigCH7wkDHru1BMAYpS1dnGzokXJfscc4dt1Q7RtyocF7SNEX4r2woJcQbYVrnyZkpJiUV",
  "key22": "vczz5ctiSuT32N26gkUyVjaegt6cWvGawSZbpEZ2cFxWe1qydcKWkCEyzm7XhWXBbtGGQhT4YrzpmM5XqC2Pz57",
  "key23": "S5Ezqykuh9J3GNaZFHcAxwnnHhNPYZfAXcri7PUF6ijn6hEF2hjgqJh5exVf6WPswinXc63RjH6jxZuy9MG3eXb",
  "key24": "3UVXiWgon2rot2CGUNECDxFspTbdkn2P3YamyJkNuMqws2AhMLv8YAFiWGbh5nwMstMxMd36WbE18isSVTQPSSS9",
  "key25": "4LFJt1t8FFmg2gTMFEdfW6NyCkusHGRzqFbL4Wyf4gXDzx1BrPHhbyzsCeMWpNxCUFvsYfM5hyZSPTQgAMTSAosd",
  "key26": "2fsNhARD4uc32GbMnqgonq7cKUZQAgQiM5A8bS6g9eZGtjUqh7KQqyArv87FytW9XyTPCpjWMinHoVymyWNQ5yjG",
  "key27": "3aNmhgsQXUCvw7frHbdSD6TbfHiRera6iTBBp4ay5P2xsw1J3w3o9Du94L9i8M1VVxW5TCc3whATUzoqHTP6RKpH",
  "key28": "4QHyvwGqUmxp75cit6JjoLTCkeLr3EtpSE2cA147YFhLKEZS9P9ZsuRKoffDTqJWyJikE739UT4QA1nm5B4hrKVJ",
  "key29": "3fR4VqTf1xS9EqvrEMgDysrWNdzXA18NJBE95aJBR83sGRSBB3aRGnBGygcrwVGNxNvTssysdcHNi8xUnSokzXXh",
  "key30": "3HTnZGHC6S8ThqK48pGBEJLGSSxH2Td7LTxP5YQfzt2dH9Za5q3Cmi8CVfQcHKtD5VNgXD85RwkHtA3nJhYQpchx",
  "key31": "4uw8EUrk9h6WXc5dESKKSonoFLU1Ah5fUgNv1mkNCSXBcMMZUmzdnAZP5GTiLJyuwjJwNGNPXDJYWvUWYJewi4sC",
  "key32": "M4swvEdsjSJ3bW5KLB5B1GcaDFGy1WoCqD36pHEgSUprfJHDFRPLfCmjXEwHjsjqC1cH2GcMa2BZ3bDk7ucs2Vn",
  "key33": "3pHhspL8Mhjz1dF6FbGU4D5DhGg6PJhzxAtxTJqm3x8BFtep8vN9kX6Uu6tVBCENkgEeqhHWnPbH7gTHoTZpJMwK",
  "key34": "3L7hoWpQqxhBFfezuvbaV7jGySBHvUaXLvpCwo7tWs39ZNQs5rNCRVJ6yfCzxMYVuEiz1zvxMRwUwswvaPAzFxJU",
  "key35": "2dpM35ydSkTy4cocptbSH5DCB6SqQ9URMezx8j6DEuRuMC5dJqfD8JE6dVmcrrw9qtVdd8MPr2wRt1bKPxzYwbKm"
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
