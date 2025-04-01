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
    "LiXw5WWVnfsCAyQxa18Q2KLvb1Bm9Nx3iZc6RykxHUGWeF3rTwkc6VARBmCUFBkxBVFRDofXjqdNPsqQiks1XsE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g9xZewyzxhZvb74usKG714axdVFjtajwgfaYZTSZv4QozevRce8RExTuXyYGFBNiGJnVKu9Di6b5KX37nr6qV54",
  "key1": "2YMEns2f2GMZTVZttYFJMse3ez9pF5TZNR7mCRqgo4N5pxN9czptVkdpPmx1NqTQPEdc96bv5YA2M868pwQJghwe",
  "key2": "M744d5G9qKw1cDRYkAHs7zBUAdajtJWodhthfAGYSJUDJ86cPwD3swmDP2V5NSvUEGFUq4hQtdaeutTdo2fwLUr",
  "key3": "4zniUL4ASZXEya3783LJyW38AKhEEWAwux4D2NrYTWfnW9qjBxw9HhdL6GcmNNoJJaDCpbrpFMUHYjAZ5VXWRr17",
  "key4": "4b5WM2NAS1VMkZYsrPEk6LuFYNXUE3uoqk4UypEgdsmWb2wMUJ99jN4P5DkQmEhvUQNmHFMsJnWky5YWqHXDGUXD",
  "key5": "4TJ5Shd2nfQmCyi4SQZkrbLzEW3W4nwF6UYZoftrnjwArZu5Vq5uZNEobN9fHeq2iNuFCSzwVy58cqYWTWF8GGSX",
  "key6": "36SNge7b16a98LfbZSNBi4zGJJbgFAJ2H6EqvpHEkLMQkyLb1SZ6HPMh46R9WZWrfXrr5vAGoshhbiyw4fHohCJ7",
  "key7": "3xqvsiRBiLZ2b6mHNLPE9fSZ88gigc1RC7njd9VREWKyNLnu2J9M8kjcx1NC1NjPk1Vpw2THynnYQD7RK73Q6Feg",
  "key8": "39zEbdPyFU4FPziNzKVsL5FuFZc5zAwtqAGgyUppwYYxcfCwmCLkmRLBq6vfZwRzuDA1cHKcKvhLYbtqHkcfRUNA",
  "key9": "fTPwpEKbPcrYCVwxK3hAc7gCuseLUSQsxoa9W6RTX4AJVCkTCFV8y3Q1XZxTwm7HF2Xqusn7QWv4vP28j1arBTY",
  "key10": "5ugtF9RMahsHnrAbbQkQNQ9jdtnq8nQBjyopfm3WnBMBjk8xYMggmLJSPv3rBKkAwEtYJriRES1mRpCdUxxWU9nQ",
  "key11": "3dp6PwaQm3W1pGRaqeeMGKv5n2Un7vxVAkDbuuXem75JCLn1qaQFs1Eq2tC53eSkYyFZDTQWc4EgAVNNthdMzhHL",
  "key12": "2LUR9TVaWndAjwHZQpSRvFTV33ByeBDVYGdCjNvMzTvhBZibWXXXMNA4D1SzLsEc1ke7Rt6ZJrr8Em8mgvTwHdXK",
  "key13": "3aSB8Y4Re7g8rjo8xhspcvEqXjwXB13q2pauvjtHM4jfGntawcdsDm4aM2k6eMDUkX32wvsUAMGENdrCQ35csEPU",
  "key14": "4fcBaiw6C1FzGrirfwLPzvHnXJ1kLfNGK1XFtq5XdryCVWT8vbtBDNPgHHWZo62dBd86DXwsFLbSehKHn3axCRfE",
  "key15": "4kzQomx8dhwxykNsc2TNPFiqqdYdaiCgsHnaEybQNMVZzbeVAfmbgTCBeqYm5Q1PrBBhbXQoKZYHnmk8UdDDKDk1",
  "key16": "vM4v36o9zkqrjJ1KDZ1Wdwmufn2TxNpXUYMvuDuWp1fnbveE1pSRyQQnff2og6hSARfKHWV46rgrio84NBupFrp",
  "key17": "4QvKUged7s2cbbT5MYSVpAwUE5yjQik8kkuUnNDYXvxQF4iQisyhT7zAYeMQb9UEPX5NjWmeDKrE5eWA9WWQsXc9",
  "key18": "vMndt8vaQhGFrpxztwXH35vLKiF9hZudQTfMieqN6xatzUXN7rTbr1N59spemUC7EECF1QZTZXYBAAf8xzpYwsz",
  "key19": "2jGha9W8LFAt5EEQzTSmpeEEso7MAzQejGp2EzgcAxMbrvRe3XdG1ExLE24w5eJXwaFvHn9hwPPWn2NoeACpi6RD",
  "key20": "GmaRK5Piotfbd9pkGs6LyRh3Jur9dDy9LnmeKge2iiQUz746neNrJEarLNxAXA1VZNw7WvoQkdq8TMoByYibxCf",
  "key21": "3QJJs7wfoYHicN61c5qGvyiCS4DbKZpLdj4xy9y7X3cw6SR1kZNtoAPD3SCYLfz1LGnDMKAJyeX9mZu6pv1wZeK9",
  "key22": "yZjxw4ZoFtiUaXPaSjWuWMVg4rLTfsK24RfsBbpvWto6UWueh9oNY4hD8vfLMVvyGWGaeZyyfkbQepGpFjvY3a2",
  "key23": "4QQdKZfe3oT2UobXGEWZA6XQD7F67nxFqXi5xUKM3iwAu9Jhn4zr1hLPcvF5uEe22Y14GGGH4TN1RWacZ65LTZD",
  "key24": "2NJNvdLHoXjKFLmp5xP5nektkC55GRyDijUszKbG6n4uHpERYMrbdF4Cbx7ni5oe7Ra6jLtQnXgvgWpNyvqEX9E8",
  "key25": "4FaKDoH74G7C5FxJjvBCu9nP1NJMr7UT9kRhgLJF4JNvCoc4o8AUDrberpERH2Wgg56LjMp5NWejdB9SPSDNz5pt",
  "key26": "2MMqndCXKmig7GhtzT2jxKV6qUF9yRKTiZcbYfcFPRcYoFc7G434ennPd8upLuAjxy8uc2KHKmouiFA53WQvdKcn",
  "key27": "54uxFzSBcLsksRCG23gmAWvbcBLM1xnfwCux7GhPgeiQ1QTFb9EwF1NiYSh6DeNVQeaz5WgmoRAiP6vBfyBNKpza",
  "key28": "3cM9Yyasm7WyYitn1VHXfshiMy4E8AmupPAGinLKQCchTVNVgvZvZNJtF8MPq7XwFY6t1Lt5JGEsPitff1VVR54C",
  "key29": "qsfTy6htNGuFSURGNLEEKH32p6pCzy3vq8SdLw8CrqFUqE18ZzEhixU6gBCDNUtxRVs9a8sAtrVDx7mD3reMdRr",
  "key30": "4dUbLeHLWbSUwqAPrezSqRtxMb2Z5N6jYqVGx4WuXbJPg6AnvsQAz45fdnUcjzeJJXTPsgerEeNSEiq9od6UWWNU",
  "key31": "4SiQGTm58HfromUp9CipmPmdYvYBFk5VJpqhfxgdXS5H3vChYdG4oxVvmEqLq3RFkBHcRijkb4pHv88zeourLDz2",
  "key32": "2EGuRUUGwzywCrdAAye1rcLbfaz3aoZJdH4Si6PU7UCts3BcUvZeFRLsrwkX3zHD3TDjkpHzmBKsLvFrCihBVJiP",
  "key33": "4HBTy7AyZm2JhmRBDn5uNW9fp2dGRHEM99sPFowLpdcoNApjstC7nPSzhD1wFjDUb6b4SmyALQtfgAk5oi3zWQT5",
  "key34": "3NM7id4UVDFwH45HYM1TDYoMad7uut7KiJH48T6x51R9J7uFwV55jsaEhczLPDhKUKC9opWHnZ99webeuduAmeAN",
  "key35": "4iBHrBsjuW87KX7jcrUpadzbfFCPreG8M9dy7SVnmsv5CoAoMsksgcjAF5ruEbZLy4jT2uk7XxDPUjcs6fbKLj9h",
  "key36": "2Nk5B92XKVzXVxm1FXowxHiBAgyvwiedBsxV6t325EkEC8WSztXwzvp57hEyeQkQvQWc6foZBEDqMfictHDDL4CE",
  "key37": "3QToKS4wo2j2sgJccr5cT8b8QSALxgtQ5eb9nVryrxSbqQ9ZG9Fhp2HxHSasAiu4g2x9f1yoWHZz7ZHHwTWdgi93",
  "key38": "558t7v3AnXjUYVfbEe5wuf7bc7XW1y6ZXB2t4vnLMgyLaTywJBieFU4Q6c1ovWszP99YHC4JTzC9KU9KqK9vDvHs",
  "key39": "2gz8tZeBDqtGfhR6fhJ2VX6SLrbcHM2DHzwkHP7QTT1NLZwtXpQjHTEuMZueiSe8AaZ8415DM5dscgVYwA7wiBdf",
  "key40": "456Z18HnXnM32RVJyotxfgn34ZKsZovG1eDEHeZF4UAjr2R3MqBpgWDPo3drVFz5h5UUxvqsZKkj3WSqrpnKtjWH",
  "key41": "4FtkJyTH6K9sKqjn3dVM1QWTQSfLfUq74NQpyagW5CjzNjKpvXzEVCrCAY26grrAWNiDcTmy4dR1oi7jxAuo4MeQ",
  "key42": "3bLPz2q1DQ7994Eyubt4Gn2c1bjve7rDax7SDjWctuC3fPwYxNjjWrViYdjxNroJ2tHN3GU223XYTJP2j3jNJLZY",
  "key43": "5HJSoJkKHPYtFtgr4X3Lktj7yBMtUgt6H5YJGxt1TnVfgy4RUj2Cw24fzD1b94pBuM3pj7bz8birZ89r6ET59ciV",
  "key44": "299Jz3PtdkcJuLvS1RH66KYrTUoxxiwTVLKTW5sBQ6vHT7i35SLsy1ghKnvnRRqMGxBHMuPqZoR6sR5B95WTGSJP",
  "key45": "1xsnBxck4pXvy31h7Do4DbSA368fX96cqNUz1JTJtw5W2yf6ENNirXwKs8YUszvdfqS74inB3tjyAfU8s22qmns",
  "key46": "2m2Bv7Sis6zzCySTrBw7mdoa1o8wrVVjj2r9cR4XgEGz44H5bLenYp4jvCvwM97t3YNiAdUNTUeaJe2tiTGCuj1D",
  "key47": "4PfcSxgmevtuv84QcVKFhG32grAum48R1i15fAPN9yh2P2xBQv1qaQZmXGn88ETxMd9tHxH6crkLGSiWZnC59XDG"
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
