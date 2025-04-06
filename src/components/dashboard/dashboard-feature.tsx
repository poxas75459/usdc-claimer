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
    "TZ8AwMKpk6HuNFHqgStdNMtf8os889ied1fPTcDSCsta8bYVytpKZjpWhSqiXpCbv9Ti4FpTSs2e7F7ZJ36sK81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TV2sxkbuFy6HP43ZeNPdgiye96xsQuwjZanGE2ts8QsaWGr6fjedVZvUeE2Vx1PTif6nVbgN69vZ4rV5HM15sxH",
  "key1": "3YunqHHjezjVkbyvj87VKLJ4JEA22iLUMzjxfzEbXkFiDCCQh4Lhfw6gCB1KpJm8n8hJx2KtqrjTSaAEi242388N",
  "key2": "2Qsfi5GWdAvvvnyq1FBX6Fb5xMci8YvKRdfHxdkjAUHGNbxftm9NG5XF3bQiHrrnRu1H59ckwKSuLT4S1zz5Uxot",
  "key3": "3fjkM4GW3Sk4hn33M3bXByFf8aJruh9vLgouuZ74MX3drGQbvjHqymxZWEjS1MAyzCqZVbiqWHF5HJ6wh1dBVoLr",
  "key4": "5X7dd9VVvz79cmgwmMz9516VSvEVhFVQDLynReQa7qUeJ79GhBPGAUqWPhRiS7boSy1FBeoSoVBozbBVE2DCVS74",
  "key5": "25U3ehHZi9Spti8bv54o9nBS9T89goxbSyp7ErHVGXqXuoPoUqGXKs6RrtvhgCkPmk4zXLvGjyiQWdP2cyisejUC",
  "key6": "DrTwApcdYQJtxFsbahvr1XQSf9WtwdLavMFw58k4pyRumMiK2caa12MyGL6jrmDdp2r6N5jK2K3tW7pGQEq8MxQ",
  "key7": "67n9sLUELiRZ5AvmbdkVKfsSFVPmy73X3RVZF2gmak6ZW2ZhmjmU7MeB713pBwdDZD4qqNeyDSptMNzr8D4ZycmT",
  "key8": "3sHAQDQLFwkKRcC87VedSbRTGdGRtRYQkHneeNHbXLzYkVkXomabwVmRynhfvcaPU646UX3fRrGwTa8HJCsStiCJ",
  "key9": "3Y7fD4Ui4vQ69pH3H7yUsWcVVKV3pTgM6TbU3ZiMKAkXipW45LvQ4ShufqtCjTnNTim2VdaijQD5wEvHc2UZTfQh",
  "key10": "4daKF9fG7JL3rbGFBDn1ZvjrpwtHctt2ZhPBgEBQcvASM1Qr2Vq8ZAYKyf6JSR56m9QX2ro4dYfSDWbonSQXZRxK",
  "key11": "aoTrdYvkFVf6qWbBirndF5HjPCiSfSwnhiwUVUUvYCk3DpunFALdtT7VNLdRg8bbxRFjS7T1eqNQRaJ8QegKRjx",
  "key12": "2pKn7L4w4uTYSAjmHiADqgb1Fdwi9fsLjqGmyN5rEoHkXs7br4xu3FV5VG81Arfcpm6zZqFjvmNXEAeWoSNnbgg5",
  "key13": "4Y9ZC3UyFrDzcg4rPGicQrpSkgC1jyPjBztQy3NquNxjpPVCvhrHBucxGHXJZBScMEB1iZ7qobNXhJRA6STeTwkq",
  "key14": "2mfbRsPCMDoA4ijxkT9MoBkTaRGjQG7qoY7pYRMUk13Wi7bYWs4ViG4UAotnwh9vpbx3v3XHCH4UVVn4XE6k94co",
  "key15": "2ezJcugwnsSRfTM5nYXVtp7MQSy1DGPYrprteBoQ5Mhyp7dpR9CLKP5V86rRVMSfGMFCZhgAYzay55zqFsy7GPNw",
  "key16": "6zs8MKEgFYBZjA6Hvry5qKAP4mL23SmiMhW3ZZ53wSmnEeFuTxoYDrCihhS3Lv3jREnFQ66PAwTFhRNwmqWCYgF",
  "key17": "5p66vpyuW8bW1acj8wAGJmvi886EfLowmiyN3hogbRQ6qJNjgovwqtQz4fUDHs42g4oQZpwSTsCv3FemuWSYj5Q3",
  "key18": "cWfo2DmJkXHLe1ioiTxgawEvuNqbXr6o66KvUSuP4x7sQW4dHb2AkvR1aR2VuuF1HKPhhonFudJT3dcqJmkBU2F",
  "key19": "44oaD2ubgQvuKYRdx6Zv5z5m75YHun89C4qAj62AVF9ztPV8HQ8BBz6JTu831TRNasqHHgb576W3szRL8nBJZHHL",
  "key20": "3PJZXNnejax5pSEDwY8rU7QV1qcEPtKcX5g6GNvKJeZe6yhEurQ9CLFruygczVzJj2rwwsejW5VfaCtGWXVERb74",
  "key21": "2R6LmviWbHGiffoXJKCNsG8yTWHH3PBfgomN6nHTpD32w4Hi6qYRjRC166aoabUFYbLM14Ykp1wkNfyVkEDtUPdS",
  "key22": "2rGR7f8QM1MG1uQypDpYsSk2Ej1AsziF5rPPwwtUxQBL63YquX7M7cZDuK7uJBMACtcs1iiWJCBy9wxRzwnMvPNL",
  "key23": "2UMgHXdxqp9tvmTKqoX5tjv8fx8WV6NjrVgoN83ZH3yYKTRANayEM2yjtzsugyqQzYQGvqHKJp2uRriLomz9kfKK",
  "key24": "oTMf6Mkyts1vWeZaKLKpiXKouaDv8yn2q8W4mgaaL86aHzZ8pRcp3hVokfMoumQ4GuJpzpgPccvX1cNS4GrW97x",
  "key25": "5gDsDeAvtu83ZUDWvB3EwiemFR9we6urxk1JVXwETGvQYhk8grbzc5Aj3SoZ8P5tY1PPaubpu2RYttGRsnew1Rr4",
  "key26": "3Ku3Hhs2UmQndK8TZv7KCyXNXRoyhRdFjwfSCKRfx2mxjHb7JvZrcfgJWyZMf2gXhcNGttFuinZjG8onnqzjoqCA",
  "key27": "4nLGsGkNPM21SjCpoUngmxm8PRtf2PCPC3jQiozau2bwymxekmrBKXLz6GfV16xGYWZTdMvbxjnF18uzyPN7okP7",
  "key28": "3MqDuVYgroYSqeVhxY4dwf6PzrmqNPxy5KjQbQu6eRqJUN7Y7NHWeKt6u3iGtWyA33344K11YotJynrf7ra7FNKx",
  "key29": "UD57jdJ8AuBykmD5WsNvFzuy6cDj91A2JoRWP7q9fwNr2zenH3GvqX2mkCcXe6npg9A3wfej38w3Rjn4bBdFT87",
  "key30": "21MbrhtsdTBquAtC6hH5Db3vikFcXKYuRVK6vVEzmJkVvRcVTfuSKJPwLCbCUw7e2Dk4fR2ojfuCHuE8FDzpCQJW",
  "key31": "24MgcTYvH1mRbRvSVsRooMWunhKeFfzEZEmJgkrAF3VVgkpLihzpSBy9mdMBTGGoR8xED779nxRW5SNsnZM3Ycfx",
  "key32": "2Xu1kgvUJfuVnYXpZvRe6HRQfNZ3CpgmFHbF658xWM5iC3sCJXbjDAVQJvrb2JCszGhuc1h8KHkULAN5tCLhqkAq",
  "key33": "5Zskzk5GAfFETfbm16gqXRedoSe8MufRrfA95chiFPjHU4JSzHwJxYkhtfSMRNGnXrA5QEYecbFZ8CnqDZTKWmCk",
  "key34": "Pn1WPh6K36gnJhkrejWsxAvsxSz9EnWd8wfBxo7wwtDvHeVj6EP5ejdM2K5ryR326G1ZNgVgMoJTJp7aVkb42P2",
  "key35": "36NrLb8AN5FikS4bg4VMrP8ssNAsnzYzAvWD9GaipGgz1897SiWgVsXYiDybS3Fzb3JP72coNTTmBTWPhnRFGNqw",
  "key36": "4D4MuuCfEMenwoF8t9xHPciKhZMkcLtgXmLzYB6GR6z7fjrTreMTxwWjyQ6kq1mk23Hag9xHEncXdTGophSbr4wQ",
  "key37": "2e9DtFvgESXenydV2TLHCWDh2AHrJKkccBLFMWiPVQRzUbESyVgtA5CSGkX7wwCZiEs5MnWmPEgZudymR2TQBsRB",
  "key38": "4kbdtNGoFHmsQBH64ZTpB1Xwb17sQMqBBvsypM4o1UekvBynRS13ZBJEBXGjEp8rYUaUJxRHPh6aQ5FCfbnB2qaF",
  "key39": "27ASELogynUZRvUo5NAG24GwMLjPeCKBnrV7PUdPCS7F6i3XA3vnN5fKpBkVy9X41aGSV8ng9ijTuHN4UC1QjGdN",
  "key40": "65ms49sXfpiX4xnyqyXJsAzaf9jF7S5ff7JPce8CJjwyL83vHp6uBVqjsk5X4nnoxQ1dhe5xd5Z5ePSfe5FJss8f",
  "key41": "4d3MhrUjH4ANPr92HGiSBDifMuNNEtoEjbfopWCP1kAC6pTuVqcZM4vD4jdJMSb7RJzbWychGsfJKpYeaxNTNWsM",
  "key42": "2dBWdLrqwkp2rnS2NypeeWeGqvweFGM3YDNYC27TF7ZtM9FNRWFtAQoXSHqochK6be5LjfHs4Aqi77BFRzuVWrf4"
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
