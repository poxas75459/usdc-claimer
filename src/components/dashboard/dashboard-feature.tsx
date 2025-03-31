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
    "4u3uAA57pj4RpwHYBwCCh6H8unmKrVL48nrVXYqNtxjTahShjjFWaSpmupFEQ2DoqcTBqmFJK2yNhEB7oJyRUc6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4REnp58LYLR2oJQYrKCuqSbSxvaUXZXRYrbV7JnYD5RLksGXznjZSVxiiyGizLWoFHnxDmK7c5y5NwDbtR51ikhG",
  "key1": "4MpZjYPFxKT2uPc4NzpYq2XA1J8iR2RcCENLyfH2Rneoaa1cYkHT6YTfqkW2PhcARSd3D8Sj4w4NwjkdsM9HSMtV",
  "key2": "5XP7RHDKPeufvkg852wtS2d8EpGbakNuqi7yFkASSXVv2cX6JwN5p9HT8SsMirtcfoBxasCbduwhQ3ksN3MQ7QYi",
  "key3": "4dXDkiVtzxu2KiuzpguTaTGMHYFBBS9DvHE3XRtLWQAqXsQH9Mq3CHqvLDjxbz2p1T3CXwXognogvgWctKpFMVYJ",
  "key4": "4aqJJm3d3NJKpMjChTq9MW6zmDitoDbdsSjsijy2MpRHSkPHehExNnVD7caReY6KifETA1Q7nvYyJSELUkJpTWfm",
  "key5": "2zTeEg4JAS5XnoyHaQML1pvorR31JHVSCfej9HNU6X9F9Ao9wMFPdjD6oyVNQ9eSqrndVDHLn9aLxE5P5CDVobK6",
  "key6": "3sRBzXuzooQaHz4DKboyzGzZW1npE4PpyvaBjcKLMcApL8VyAyz9TnPEdbJkzjcdjYjDaQsWpDSgSaZCg5Vg5kE6",
  "key7": "3RFi7brFdebaGWayJKWprGon5eTt1gwVZWhRT963cW9VfDE3Co6ZdUdozio2EVQoWvSEhQ3cgRbm7E6uiLcVS6tM",
  "key8": "9uk7QZPtyRjd57HLeihrPh6XZrp7bk4cGd5VutUJPmsQHVpbH9h4Fg3h7zb3fHmd5mKm2Q4xbBTqCGFKaRXDoTd",
  "key9": "3YKFx7FyD5T4QowgaqZ7mfw88kuidhecpiDUYxrgoZshttdTwTPHkmXW2DAqELt5iYe3hjzuZzddHmsPPiftbcYT",
  "key10": "5bbg8Lzh9bT7RrR7p88ShT3R4yUAzG9ayp8qLvhQGu9yFDXtRaVzqBo1HPWU7P4ru3TxwL4zQ19uLxGQmiKdco7p",
  "key11": "3muQNf9VojyWNpEFEmdMpwg5k8UgP8wWTH46UHzxvdEL1bbasgWxbXtSmAZPFxhzf9ks93cR83u1hXrciRMz9uab",
  "key12": "NFbrjuqqLpMa8ZrNnqMntzaYjY5Ytv9yAuvZiSimMdSJzV8srtyCySgu1XriQh2uXTpm9EJfuGwXf9vjneipzdH",
  "key13": "5VMyN3aDh4BATdobRS3Cmu32uswiRH3N7hRtCMHwKiJXp31PkTetnLD9oPPYgk41JacL12G32J5AHKiNmn7bV1zQ",
  "key14": "Uoaf5CP1bp3CBHXBH61WXLPR1xewT42juTGFX8VP2vV7QxRoLzSaALfwSRwB5nYUkWP4Wy4PrZPip44yL4hMWLY",
  "key15": "31QFJQuvKyrJhoYqB5KeLoSRcfqieHdQxTWBwg31PRhjW2Yz4RrrPKyaXNnmaeJXom2EEZ9RjwfPL8bdwKjN2wYR",
  "key16": "4ZryfVsBykbjvj2AJzdUL9nPo5FaCxJVFFL2VMzoCVpqyJ32KkZf72MQ7Q9n8VZoSopi2F7BzLBediP8ASqCXWgw",
  "key17": "2gVMLVrHwozkn9z5hPnMtwAqibCQTVAqRS3D65iXmZL7pdwDnkiCnZ1hnSxxAf9XXtd6VebrU91EixHQe2vGwzJi",
  "key18": "4XWv4ybUhJBwikeLDH8v5RJxRRPwWfyzSPo9FjdZgbRzkujGDkWLnqpEueiKkbpZ1MboFGUiGJe5G4xZWrP5L25a",
  "key19": "2ThbZMLSTB1Pg9mHDC1tvui8vgPNg2LjCCiiyQHuuWCyvaxSrW1QJacHDBLtPitbnixpiqMwWp9pX3dX4m59yxsH",
  "key20": "5mfFbeVnSuM5wLXgY6eeahpWmUi11R4TDPK8eCDHpMJ2xvpSn4cbx39AWhY2hBh6DatEL2e3S7Zsx4GPZz7k2dCT",
  "key21": "B9KuJtoviMfpa4LjQ57quPtEf2bz2uaArhfjmrw1xFKXU8hVGnHi5MXnBPXdSJHUP6fiYNXUafHF9S9GPPu3T4g",
  "key22": "jXc4fZpd3YWGXz6FcQHSo1bHTr1P3CQ2C6ebmreTDB5YpHkwwV67TnBuaNdiZB26Cbf69d1YmeTJWpaVJyxhTiH",
  "key23": "4MSPcczt4LFodvJoDMpJM2xXHmkqLyNJi6aCPiG3MYJDgsQHv3tK6kkW8VB4BjiVkCau1pUMF61e5AqxugTHXEYv",
  "key24": "5Dswxm3PjSky4SP2PKGk7XP5MxWxWDYRMSaVbH9izsjfgbp5u1kjbwX5X7narTASr4d5mZsLtFUtDH5GqsYxCmvA",
  "key25": "3U1N9HxTdDArXboTAzeiiep8NjziRJtwNwmjy16XLK2EdSnVhLDc8gEKamKCwRpcYLkriwwZXsMj5pjmuAGjAW69",
  "key26": "WBq8XVv9qLq1iqMEuVNmho3ZGkrfvJuikDs8U75hQMRfbqDfuq3QigBv7PQfiqmhBiCbqDu2C3bsDULUG5epmRZ",
  "key27": "2kge21PaW9oArNEZrhV8aLK8xLau8mfusmL656Ur43cDstnfqn35LdgDYzutSt1unbxooXEeBtUtZ3ZXmXazQpKQ",
  "key28": "2G86Bd2yQdidp1SmysVRdtx55MzD2dKUUzPuJ9G29oKzJaPJtqZudQzqvDq3n1dprVe9QGZwWb7mwJ8QnXrgs5bK",
  "key29": "5S8B82A4oVgsNSku441kyLpmptX5ehwVSKFh8LrnmT87cttYAGXhPHVHkSB8LW9bjvAtoxQRFMNDfvogu5GrHCQC",
  "key30": "64faba857QBhF8SFMXvR4wnL1oW1cSQp5crEThda1HSfM4EtepXQFGVMHj2BpVfttoMswR1cAGRRXAHVq3zC4xoa",
  "key31": "55LSptTLAUUrWsFaMfnRpAPfstvz6gStsXzi2RUet55tJZG5yUK9mz1exXDpjQNCTFg1yZhnP1niNgwFp2DPiq1A",
  "key32": "2i7QJgL6ixsv3pqYLQmLBJu11BPdbuStCrB2QEc9V4DzviSwMjr3tpB3ZkLnZnguhVUFJfKzQN3ueKR9aRjqf4Ui",
  "key33": "5BEjrokVazu2ikTdRaUpwgJRdeQwp7HBCj1NvZyZxAkSLpmLcNDeNFtgWV56ipzqu6rbi3Kn9x87ZH65qkVZHmU2",
  "key34": "5yxqGByNRPXVRELdecmhx33kvvUhGE7SCTjdPfKAtDTANwbF5fdduHoFaWuYARMtz4as9gJ8SJSvzR5TSr638eXk",
  "key35": "wAEy1tZSsigPzLnvZ11ugCpjLr2EDB9rZt4mLETEzAScUxT6yqKbuQJ1HdHjUEJrGksKBppQ4DERngbfDHHY2dF",
  "key36": "62xoV8XMSqpzwmY7hTRn3NUoZ1cwqjvjgxrXXuZcp1XW36MUb6RyNrSCe4TUpPkiHvaVDGYbRDfS9P6pAjLfep4s",
  "key37": "3qBt5LUbJoKeLm81mJ9qTRSzsxDeJtN81SS9eymG5ypQFkB5Xh88aJK41zLC1Yyedjmi9upSN6RqMH8nthAiTC25",
  "key38": "58JGPmRhL4NznsHAjWSyCGKzAuG75ZtVfQ6Qo1orUBjrDQTvYGPMPKEC2ZC1AzSXuGPE8CLnXoBSFt1F8R4oirvL",
  "key39": "2bCgH38QCjvzd3Ur7Nrtj67ntaN5Eg7gPCqqdDFU6TboftWr2XaSdj9rYt663ekSugF4v2FTdwUQemSRvdWX72oS",
  "key40": "5xaJ58bmPfDwdyyn5mz4Gg4VbExmhzqbC4moG5a8eQyvVUt7N1K1UtyFLdapXZTgvt4ZJoy3z1BVDgx525nCzy3a",
  "key41": "2Xrs4DKgmE9TJSGYXLJ88NECFWpbxSjgh2Z6p8SuA2Y7sK3qUrmbLn6ZL9EKERkcwDbTCmTNTKCG9X5R6XhuF8bX",
  "key42": "4LfGmfCCaQDa1vx4wZX7iUWM9t16WFEopA97s9Vh2TL3Wq9peqZwCXUxEpNeonDvKLTSPrHUnb4QgwRZuyjssHmE",
  "key43": "4XwC4cp6khvXYaziZQskCUpuQKcC7NwtmDb2dEz66T8CELZRbBnaSM4dQKJRWnSoxwovs4C5TqwJjyaYxSGy75Vu",
  "key44": "44dJMhQXRhTC9uoUg81EuHc98cd7uJ3bZxUJpXgCN1VrEaSXDHAt5a95PRw4Pyvvf2T7k5tZ2VgwjyPTEjHNby17",
  "key45": "wSgNb2Hkc9Ue5PnhpGmDQLnFURauPR4YmHdVGNBEDJqEyZHdrJjP3c5FxxsBUEbaFpNbMDZ8oCio5MMinG7CPjN"
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
