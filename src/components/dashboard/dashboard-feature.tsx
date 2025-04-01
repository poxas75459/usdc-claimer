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
    "5inv3PKtCPybmxrtgZnFvvHsTMyQcEqnF6cyrguHoFrqpamJU8NqtHAe4L34YdHZz8bA2izKyzwCP8YH65wfRRgc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x5zUGq3pPqxDpa5ahQ9FpiCh4Mzcxz2skxncHmvx2fnd7SJdC3Pp1wunnysrt2ZBxKi4v87GH5bVLyKDX9opbvG",
  "key1": "4ZKZjkrg2CwMHccVYGy34JqAzg8MyBcd2u6KNpQv3GRtPrGJMQosCu5c3tPKLy7S2x9CV9WFsxdamqofhefpoWVv",
  "key2": "pZMbFPvURRHuMuqpYjPV8Zq942ZqAxs8cy3ivUt7ioZ7ChukpPju8zkp3LQ1BkZcQdy1Ru7dAR5ePRh3ZZcpk2W",
  "key3": "5w3B8ua4piCCjTnUthCyXCoinfLZfi1pbkf6uFcR6KcoowCsTcdUsG14a5DzHptCXe7oyabLjC3pxUVtWqBjz1je",
  "key4": "GzU4rwEsdFvx8CeFZCotv2FQVdYghti7oqU8YnvJuDMexSJZ1RGRawSBFMzywNmibyf7BMEchQC8tVWBGchrEu5",
  "key5": "4ZWsHnS8Evbvy9wLihBuKWcXJijoxoJ5FoESMDbBQETfHaD8vPNZxPCbRY5p4WL3hZt7i3G87Hcdud2FtXp1d3DQ",
  "key6": "5sb9vaZfC6nS7PyTE5qYjJojNXm9Aazq8JkBJgKBzzu5qtuRRW7NXSGMa5ETTzUyi7KkNeAxa6PWy1zPtsjabUw2",
  "key7": "3VWjGcgM7TmderJoGzDnFsPKYABjUqABJTkwsDT94qwWLZh5w3LNABtkt2jc9mwEfMqp4UoUDQFpPLSswxJ2aoD3",
  "key8": "6ZN4Kt4Spors7bw69jRoYGTrFh8RsqiNUaeQEmf3Dn6n77GKNrgGtcSJSLk3no95NtekE8W96wGAzHLUKFn521k",
  "key9": "4h2h81LEeHkJiLKQAWzu9GZNspYwFu8WWvzkDDxrdx5phNnr4yoCsJmk2aQfffEM4YGpgZKnTpcfFvNXkuBveEk5",
  "key10": "4XoXP4TYCKkFfPwzTAaXQJ38ouB1mxyaUz2FpF5DKN6ax7PCmQm3b32yrpd1msf2agYTpYEapRHEysSgg5SKpJMJ",
  "key11": "4ax4s4EXWj2C4JKhQT5niQcyvod5ZqUYgVCXVti8x9U4kdoBz9iRALQBgCWDjGK6zK6W9gYXQU3nxnNDm5ExnXuX",
  "key12": "51LgWCHYPcPzHRwQDe1bjCuea4jCbakr1eNJvGJuQDcLbkK3PnScBoJmAWFpYivBU6Hr6yshGkRqfxhRcxuWX7t7",
  "key13": "2Z1YhQwThQEzHmaT5EMcMJvVxRYWPZwX4ZN9wymKn2K8WVQ59tJmaB2LhJ5rey5MpHmYdYuM6QpEmmUsKqof6HvL",
  "key14": "aG24kfSUidWYtitYUJH1QF8N71QJLRVNJgShhgQ1LWYkia6JzUBvQpKMXbRBtdtFMdSQijDZKsGwW5B9eArDtiA",
  "key15": "3xbkGzRKLqpeBtwdH6yeQ7uTPfiiVxuAkuaM7xYn2pQ4M6FSVKBHqZhtDmmcMtn7uTZWrbgFYhYX8qyEQZD2uTmb",
  "key16": "2zaXsqcYrQGvtbLAvoWsrnmZfTpy3MvwB8FuFzSEb5tscXPX5NujDh78FABfs32m6RE4Zk45eSk9b9sA8dL2GWJB",
  "key17": "35dnHpr7YPLjcUSr9MoHY9jdbtQDEK4QYN4jBaV9MWL5Qhnik9HbD2Q2zLYPLv1MZSdu9RYZ5nUbN5MK6PBwUuCR",
  "key18": "3NgRt2jbmkYgtL2z5i5NNA6Vx9dQY68knZocdSCP1bALJCSui8D3QrjHhmB9EndboGKgMyfKLVcJzQj13cJghGXb",
  "key19": "3sFjMuk16mDaqNi2twbihKD9kGrCVxVPdrBs83KyXrHqwNXspWX92RPdk7vnvHeNFVmDUraqRcP9dnvZwYbK2NaJ",
  "key20": "37MNz3ciTV2FuL82Q1v3GQDyPaccGQv1XjpFAJZVycYLxFJCM72kUrUPX6Vm3Po16CenGYYfujfMAiC2eQHiaaJY",
  "key21": "2g9B8UyY2HTvYSxzVUJhKtahvpqTMuSqx7T92TxX5Z9Jic5P1hCEqke16MgHEN5hsdShNRVQgc3asA1igaw1dhEt",
  "key22": "5YEyTDUMYCAQiMKE2S71kxc6BCkEA785QdYFB4fDiaFxkJPj1cTUHyFviA3PxWS3eGR1GP5kFQk3HoajvDL5wa1m",
  "key23": "2A8UrjEbaa5Hudg4c6NsG1U8uHYrt7tSHBW5AucRhe6xmEMoch73CS3HgnJCcGhfxxGDPSPy3pPJGkEKdLmLt9we",
  "key24": "5yzDPLrEniUtDKGtfM3qsBtoNEixnpJHnVA2drMwXhHb77uLyW6SUxSjFVADXdifL4nZUSu4Y99h6MhBc84W49Vw",
  "key25": "4BBEwZF2C9RwTzvmyzj5VFjLWaG3ezCYwjfRp9GM4USavnGZi8HHituXZzW4kD5T7ebEyD8FXdGp16RULfn6LV1o",
  "key26": "5JrPgMuPDpTUZhMYDhUxQXTvvLp1ZdgRrfVUB48K3FYTgWTu4rEjzh5Acq9URmVgtb3USehPMY7dkBvt1j41LhTq",
  "key27": "irqCzpXvU9pbqJRtTe4KFNiPF6NkSXzgANbdoBmH6rMGLGkxT4woeZMsVLSMz5W3tvpREQ8Gh788txGmVuCzAM3",
  "key28": "5WrgUnFQJ2KUY8iwMEGr18Ne97m1Y1bFKoKSH3RN8cjbCmvLFrbVP7um5sc9CeijwQf1iiLbW1ZoVwLwuuiPLLxX",
  "key29": "3cM5u5zsELUu1QRix4b4ZV6qzTxioiVQX2gnf8i8KVu479yZqwn6DWftvNmQaWzBGzkAuBSCnWcDqsDUt5we7X2P",
  "key30": "QrmXHhrwekuMLXVzDckdMHkhByRhpPCu9NqX2UXAiFgCqs2xQ3HwLVkM6Dao5oTgA1qR94zRCr8CMyAeGMTdm5y",
  "key31": "451dhzjkjSSPvRu7QUQsK8D8ZFVYyMrqSqctxFeQoyDYTX8fn7HxZ2za1PRCHVsZduykWKyTbLP1M2smGzXptMLX",
  "key32": "63HCNB8FgdU5DM9Jy4ChsmBT1xcezv49f1kYEXHmDSjeefphsiJqSy2ybf4W6yjuf5ik7DiEt29YT7Pt7GZy5MT9",
  "key33": "5qNmeisfj3UznLuUuLM7uRsVM7tHHnSr3z8vVUz7Zsom2kNGwDEcWaHH941ujWN49pvBsYsK7juS2iCZ89UXDiEr",
  "key34": "5JsCL9V5Di8advnFgiBf6Frn9xHWraKYNbHCvtxPYioWFvAo6cPnekW2a5h9tJqB2qogYYpfnSHjEzTDnjThyh4u",
  "key35": "3aSz5hpj8HcFgV6ZJZ2ejS7zjQVGTFZh4ehWPk2pFKsPFELFVDBKK2RJHDjwnNegybwhxJPtg8RkkfVzaF1i6AF4",
  "key36": "3KmQj9eNbeLQP3woyioETAkqPd5XZNFD3q9AuzmWiRFAeUTFD5NkUZ95YgT9erEu6yS4KkPRaNXHknYYLWUK2BPQ",
  "key37": "28rJfb5mWtP1AfbawZfqPHay2L722CzKAgsmdVzFarvA6mbArU1bUB5A9udi1MqcJ7EjYZY5hzvs2PZy8ezK3oL8",
  "key38": "3yAejWexGvAfNJjEbhmJTAS46KW9CWPFFMqDWqHCZ2CG7AFZttcYj6unAwusbhzwmNNuJfP4ondSSr5S5rErqbm2",
  "key39": "4D7LzP6zDuR4UAmMTVKst8x9va6JHf6nUsCVuHrBEv1k1LMtHj8HWCjrHfc2mfogrt1rGQmQi8XikUZCXVQ16bJV",
  "key40": "2DmpPAHFEZo5PXgJiwkBDKqzuW6Wz765BtzVM5D4CVoLWCACxDZG5iSGyhzPmhPLkET3deevqHqFbGCJKymXmSFJ",
  "key41": "SqHtAYUSVYDFXqNo8ifNrh5EKQ9dP1y9Ky6nuRukJwTuMfwPMzeV5vPjWrSLA5grxBcAeo1XsYw9Ru52w9zRX7o",
  "key42": "2XvGeTr4YhkTRvoyQptSfQ24NGZd1J9irBcTDrmSnWDJpHgd4cDvCi7Bu727ryhWkQn5FhtnPzAYFd8MyDr2HL2M",
  "key43": "44HZxWS3nTgnfdBL3a9VJNJAuMCEJE7C9hX3EgQqsaWqMCqKGQXEwZwV3TpAV2Z8kGrtA7eMhJkrKG2BQw2rJSPV",
  "key44": "3vJkzqEzrFMSFudSmabCdrieLfDae53PTVGHWHRTCThn8reNhbqSEmpEr1hC5hFbLGv1bFsHvC9hVWGvez2YovGr",
  "key45": "uMHp3qWKhS1QF9f3RcGS4FauCMv9qcBujmXBYHP7yttoosbNM9bVws9gQDzku3ppDxP2JmZpT6zuE1FDbwekjtS",
  "key46": "nSao6eEY6wbuevnf3xrUjZNJMJ24V87d6k4iMibspsrw9u8kTcYLEKWN2GTX1bbsj5oHB4p6SHMJzSkvCmWCTaP",
  "key47": "5kTCwrA189MDcLsXAa8sehPtnyTv1ZnWugW97HjRgHWitmV2AiVtd2ue31EfqhKFagwHuRy4HtA5w2uBuJfMKgLV"
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
