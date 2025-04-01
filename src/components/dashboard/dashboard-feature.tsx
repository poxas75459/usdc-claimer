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
    "2b2JRzNRbchnyFQ4Lx4yGhR5jxMSRxR4oJnjorFqnKiU9fYp99Q1BJaenoSCoanCRPGb9DGdr9oYu4Pta16ok7a4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q3HgwvRxcsuVfTkbcqy3Bhm7UxqiK8Z1bTVSrEXUV61Pw65QVafvhXXRfoYenEiNXqpeYj9dCnjVjK26HEWfijr",
  "key1": "SxCtnFmpnqQvtrXBbkwz1ifteXBoMhsnXPBwDmm2FuETPLVJ4ddBmB1QMM16ZdWnX5vqwMCw4MWM6YQCud62e87",
  "key2": "2A1iEerufG6vEKjCXWjqQwrnV6r7kusHBu1yHonhsMfrPgsnYdUNLsn2Nd7RE6kft6TGhWc7uiaSWNSLC5a197FV",
  "key3": "4TTv1C4sCLKxB32WWq61zewh58qdRzkTjC7PrUaFNakNZPmLTHTjJ8gBJjUH2nPwxvMbTTgc7Au3Q2rFYrpYVke",
  "key4": "4qDndNboKxc23nJpsMKwhewEFeDZ7iNF2jgZSdmC8nA88yDgHWCrHxKxCxx1L1FH9e7ryX6NFdrrWs65gzUPz5of",
  "key5": "5KBZE6QWNTgzvXsaTKwwWYe2MDn51oYuxcAYE9eaVECJdL93ZpfzsqRsFhEfQRPhQwULVCku1cphGXZM8N39JEFx",
  "key6": "4kn65tFdxcTFiXmXTbmbDDVLZWTiM5kfMjTZZ2eK6zHNQmD43a9F7S7fLuRu9av41P5RXrvsnCQN7hzqfDq5Zt5c",
  "key7": "432XVBmF84xmm2DRvBdDc7PX9xHnxwW8sFEz2TDjuTccm2BaUJEQsb6skLuScNpTUU3EdvSXLE3oBFeSeqVER4iB",
  "key8": "2XN9Mrg425umuWQVS1udF8f8pi8N3qH5pRGB7E3fKRcNAB65jB87wSAoEqN6M2HpqSUyTdyBGNVvjYmTqr8qD22C",
  "key9": "2C6jQfTjZyxpr3sLspsMcCBpysSfZ9PEEn9R65JE85mwaBB4BJWSdxQ7YHL33qnAeT6nnuhABz7oTwEGtJw3EXH7",
  "key10": "5ZACsSZYb6Cjr7VJkMZ4xHBJbhCwAthFE9ypEUY3aa1B6rFrHQkopcky2SxSbayxmKUCvGBjTGQKyUo66mTHq8Xi",
  "key11": "4y1jK4FJJwpVB1xi8eZECQdZW2TGYjNkJoumxxQCCjNc8cTtSvtU3HN3Y1zjrBn1Dubc7w2eWnS8z6Q6qdMfMrzZ",
  "key12": "9wLdh7AzLEHewBNGsexTchJPVimh83R5rKNnDHMG7cSx793mypvxh5Xw5hi5rFeokoMPNv66qbKPRjfZ2FDZTAQ",
  "key13": "3xmRSN1uT9Ka8yGy7qghs2v6YaWUN7XW1r5pXpJYLDpLk3sqv5BFcyUbtKn27PXGacn5QuX1CaRSNrRLZ7xJc9SV",
  "key14": "4h2q5S1q8aHbkpMFkrbJnua3LKqakfZJ5EcU8D4STjGnnwJiAK9kDFuvuhNHahwYS3TvQZcTZ2mQE7LR8ndP4115",
  "key15": "4mF4tV7DfnWZSHvBaX4uKoiviu4tRMwVkrBbodeyy6sxGr5pTCg2bnvZ1Y6n7op4VqzsvqctJHUoGnXPtdfzKjuG",
  "key16": "4rD3VJZ5kNE8hN1e2JUjPoqGcTXdfS6vDqJgAqmJySUS5AprsWeoKA248rogCwLtvyVZnTxWjqAyvaedRgKrmjRP",
  "key17": "3WQiH5QPgP33K4hYMivv8vwkhXpTBuoybBADqPe6K4Gtbkgvxxu3Y5z5m1XzJtUJKpCXsXiGdJ5rh4b97HwzUqPV",
  "key18": "3RQnGB1dtzpKPpjmxWBh7oA6UzDnYNeJK3M1eetKBhkFQDZoVLPE6nmQUyvaPQEnrv3oFx5DaZ3DLiXwdcGnZk4b",
  "key19": "2BDMYG86AgE36Sy8GVZumTLFQFPV4mJfcVHTauuCQNTqvt4GPzPQgj2Zvew9hoc5kjbWHPsfXLK5qRHorntEoNx5",
  "key20": "RoiYaYeEYGcqE998CPnomkmps7CkhAkafVqQR2nB6eGvqY4Muo9QFznYkMu1hik1bS4FRkkeXWN61Y8Hyw8toRW",
  "key21": "3SKTLZ7edBLFbASVoMpaCijXuirfm23R4PHNSCsZ9kD1LMA8dkBdgPjSQwDahpX3CVoemHxP7XvTi3JBeiwrEtWS",
  "key22": "34mvcmz6wuRyxoFBmZtyG7tnKRXiN4Ztv39oieVpaEDxeZBasHfD8qjmFAGBN17BoiQmWdupt32oZUWZ85k9zkf",
  "key23": "45fY3FDaSkitTKBJ9q4JWwGojSzse5ADaDdpG71hPVjw6BEo7jgY1KC8PYbkryNU7nTtZM6g9pocVVtMS9h6d2CT",
  "key24": "2GFPqj3TqMestrMaxnYH7A9mJxYFtxpsorXjzC7cB58t3WoXrYgpV2b1chpokgfMLNkeQKsuUKaDs8YPvLjkFZJy",
  "key25": "4jLrwt3uGvr68DHYvK9tsjCuGmWiPwaFtLuP3KdSgps1Eh9LjZrNJ89kEPg8j9ZdiYGELUMQegK5ed4sMvPDL4iA",
  "key26": "5e6cmYc3Gg3Qu6nY5wjWd2zzvxVFMd3Ht7DWucbjrzdCCZEydbHqh9ZCud1KHCLZ6L3zdqasGwvfMQ1WPWm6rBrs",
  "key27": "5P2sUmpdSCRqXQinnNxCr5xDji751RCgbBsiuiCiTpPhkTsGy7XkKjnS53fvKX4nPKvNSN8JUcranwKCvcMGUH61",
  "key28": "2hVHskvzu8NTrar35VHf7tgoQ2STV1rqWCcS9bNzLSSXkczyLbUpAE3PvpZbLD65vDtfCmQgNzreF98dyEEoidhm",
  "key29": "2KRZzFpZhGE2Vw6u2JTUE4h2r8jLPR3DmdYyNujJGKAv9pa3pmhQA7YzoJSHKKTmWHqqATjbL1uyXuPt3vtLyQQu",
  "key30": "4H27mdJigZFH9bujWnn7PjxQQALtKbw3MYEbTk6CHhjsTCtsPQsSVkwEpzc2BnrfVFk9anhtYjJmkKrnT7sG9TCX",
  "key31": "373VoTkaZy4DHpkfC59nsVgAbMPG2J2KgEAL2HAdHuL6d7hJ7t69iAzJH6LNgXcz6AivbMpPvz7EVHVuCYYBpJ9v",
  "key32": "3k8Mz2THjAkvhzrWKnY8m2UgDuijrtFwfEaP5TGcG3KYzKKQM1zZXaYmom1sfjGHVLP72a8r7ZBzzzh1LRipZTFd",
  "key33": "5583WWiBFpVLxXufKAGPxQ2Hkt15sUjNvVqV5DGFaF5s1UdMJueFzhV2gm3CtnqehfmbPZ2piUKqG8c9oGq8JK6A",
  "key34": "5H5J93gbAP6Ht7rjHruZT5X2CMrpJdr4vMKnhCCs9H8mnrg8RnhjTXPQBNZKWzvbGuSrUFc221ExjEKwi3PjxmKr",
  "key35": "2ZdqsjtjLCWfQAj1S8pStb9Py56Fd6xAtSySQ4ZL6hQrmPbgvbTjJ8qs7QdDQBTeqb2q4TiBjGLJrLh71VsQtZRM",
  "key36": "21AZdigdy1dT7cDepD8qZTVc1emBYxjWscA1NdYUxoHrfi8sxNwTqXKwayJKwmsQG2dpa7psvzKRtSr7hAkyUoYQ",
  "key37": "4d3uXc45XsrfZSo4PkksMqGjYYHhbevw7jQ2GPcQCuWzNu6YLr47MCRmhnHN6672YuBNPW4GCNPNh5dhA6rJjR6n",
  "key38": "5UjeaVmG2Wo7RsERfZtjVKiTpFKQbZWDjz744mB7gpFFAt8r9YgF9imMR28BeKPmcvCk9cPZJ4pZQSSRRttuFcGC",
  "key39": "3m7SThD4WfhG5jnXQCk1jpVHnqYEQxSLfHAWpe8pP3F5ubCsX3mhphfZPdCpBnDM2fPHKp2DfmsWsgCZkqZk2es5",
  "key40": "3qtAt7oYiR6Z37mXS1X68SezTKHZofzFknZUXYNzFFKx8ssBEg9ikbcxU7e86zChAz23avTRWpW35Hg8w8Hzr9hk",
  "key41": "5gesojuPxKMvxPyrdSnPKsVXwABjX4ih1WtQUNqQq9yRkBf9f9C3RGvtGSNtinbSpaLYpzF7e4uoze6L25HTSDuM",
  "key42": "YM8RxbFpDYC1C1UXU9qv8BAtt2Ea91duEdCmY6pv2WZPBsPM2PjYa2gJp7tyw3RVcQUgijnHttDEyvxYUVyswXo",
  "key43": "3RqY2ZB7N8KAwVwvMPAqtqgEzJMsxGgcctadngtyJn5S6cxr2EeWiWAjnfHTx2YSr1rGUJqTYqv9n1Bqj5WA4ThV",
  "key44": "23qAtSmpP66HbLbdzS8EJwBMknpvNDQEMvLFNBTmEgnwj95jd5DdV3f7tFrkaht4wg48aAfiy5muYt5fM3P9hpd6",
  "key45": "grucg93grxECEwWoWzo2G8dCPLqrbZJ4XPmQZ716QfgH4kPAk9L78eQ7FBaRpKetkbr9jMa5eQed9fz6rLGLd4K",
  "key46": "5vPkJMdrKroK8gkg8waZQ5W37piPdezAypCMuCbY9G34yYwkBCvYZSqwHi41VYQvHYrHn3433Ej1Fvk8fZTBUG3e",
  "key47": "5yqvng8DvwMjJ5rrvWEWHV87j5URhRz9uGqvAYq7Vu3wRcZ1h7bKMueFbAbzfETm9nJzgGigCpnPxaBYPTbTVRL5",
  "key48": "27gEuo2MXjNH8fvXnxAwPYjjTwvpziQUeWoRbTM9yGH5k1DQLb5Cgy6Q91yaB9GoEt3m79USupbpUnYqdvidKLFN"
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
