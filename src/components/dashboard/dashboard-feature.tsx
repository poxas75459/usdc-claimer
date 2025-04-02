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
    "4XZuUQJRFiUbmuL7YP55WGq7LutwP1xC37n8c1cuoK5tT23QKU2iQGvTBSjdwPMY5nvjCPVsyo44Un3CCqPThXRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZCHKNRqp3HyetYTf6cA6T6EjkSfg15CBzDb9Fs5134JxRVV5yYrXzMQ1U8tCmmTBKcBJcexziEgiZDioEhKLXoP",
  "key1": "MkvqEtQeN593KdLoaKgGnmjnaVw6ZzZjC864nrFHT4mpnfauEXQbS9wCKG7afYKCmMdCKwaCpL5NvhPHKeKGxUf",
  "key2": "rgsUyvpoprGnWAP2e782JTPXzGUQLGfivT8wU49oTLRBWo3m6aV9RrPPhYaSnDLnrTj4g3cq496FbD6eYJNs4P7",
  "key3": "XmQxEWPMgru6pnsCJA3Eb7bshRUJxKxQvbxRwoYSehXkEfh14zRp8JAbvSnJoR5ob5A8Cc1fycTBLXrHpASayZF",
  "key4": "58Zx5Tc6kEHUKUbfMH8MHJwunwV22EYYzvMrnUVxb4pSJjqj8vpUC8HNfgMJaycPSaBJTxLMbtFfM8tssfVU1XBQ",
  "key5": "pKNQ457L8feTPWNgCwzN1HgqU6DaNwj1LLjYoeorP5RSCwL36PEBLourAsAvjJwJG2Ex2iGy2joa5HrCn4uT3Pg",
  "key6": "3B6BHnw9MKH8awMw3e9kaGGZbW3Qga5SnPY8mqVVMAnTdyfdz8QWktJSY9bE6fKGnoxwywaG5Gw5W1cNSuhGhMqc",
  "key7": "2bWH7VQp6ADjUrSLtEKKvU1MkhkAVe1U8LZ3zUEzF34ZTBhmtKQnQcb3jziiURmEZAYEfm43bWxrn2vLsUn8ag3z",
  "key8": "2BB25SaaaeX5EJUzc62RfM2MFRHTtvqjTtq89nd9eY3rbhxnq5Hg9by3NnDyVTCTmWTAYMJ4UypP3Yvm9RYKzCDj",
  "key9": "3wFe7H8tTt8j69csquH2yoMXBj56Q3fy1DbUjQgsqwxiSYKK9gpHbnoz2Jq7X67J6rTwEjeycCAzSVPjPWCtVLi5",
  "key10": "te9tfXwq2dYyrU416mzGudhjAWe5tMJFBoRUGUEnHM3qx1agtb3uJLRaLYobfiNvaLnknb4eT2hqdWondvV9fYN",
  "key11": "4w5h35nohPbr7qpTSmCU8NiQoMNiBAh8be22u18Ptdjbgp7KeR8UhoEwSQSEiF9Ton6aLBUearHNUKwnLz8wosDg",
  "key12": "3UQKJPgfsBz6E5Fdawd19uyZQ8ZhFkZXbMvbr7TbWqKNeNg3sbn6sBETWyGRmiey5EWctADk26S9nsh2zh5pxWZi",
  "key13": "2XVmM5LWMZkVPUKPz7uTrHu5cHJzmkJpjCryVPp1ozHN8EJ8wipwkSxytmH8ZuywL4yuRkPfgNBwtkJfTRcWPtpy",
  "key14": "2XN5mbuiFY3eA2erbXbRKzoYz3VPUBhVZuPxcn1NN6yu8srP4jrZszpdQJPntDeBdbYSFWQxtq1QRuHV7dT6ENTh",
  "key15": "422ZypA3Afat1DooydLTSk5upAcgP4nDM3c8mnGyDt9zUZdPnkun71zoHC1vY1AUqSgR1LjxambowEvwacU3mBkr",
  "key16": "35o7mLTfuPNxYZYwGBP8SbPhtt6kwH4gr38yayL26BnQtBcxbYzf4RPBthUwp1iUpiAVaUUeU5o4H2C32rD9tc9U",
  "key17": "3mDqn1d34v1PTp9yTuiarAYj64JVLToCeGoVuGWfWp5NbPNc3GihTn3p8mDo4x6LUGbDTwuWJvBdA9tVBQ8c7GW8",
  "key18": "2kD4DotxPxk3wXS54g1oBySjzMBM7eApjFDtRvd5fu2mBhUE3G2qTFbuD8yQjuuuxBAAzGDWMoqSHLzXRFRTXLA2",
  "key19": "5xY1ZsCzTfTrY8JUjMcxQ4CegdciQRHdKF4yUQaxRVkMZkE9tk5hy4yg1uZByF8UMkVDWBr2rPY18bSeAXH4Quc9",
  "key20": "3Qbg9fyRRht12K9EGePbnGiDP7pYi1SotQDSRzPDRS1K64GBbfsSPtzcSiuNEf2Lm9ZrBaEvz3dveFGAB8GfvtDN",
  "key21": "4wtAenD4yvNCJg4HuPc4aXz5MrbPzZBLLZeN4uw1FDqqp4ENZ1j3Z8fnTyQBjYQr6wupoHiex62K57nYJP8iM6HC",
  "key22": "2eTNNu6N6KtbBX5giPvnT9Mv4862RQz2nSfVWWSxNzaofoPLHV5qoBap1tz4s7Z89AqhC92E3Lb3ATPQVqe8sd8S",
  "key23": "3der9gcq4rhLfqmpj6dtZjjEenbaFv3z55Q932sfT8TY5oRE78T8MeMfktHDaJmbf58cbUkR9T4BA3qPBaL8Fqzr",
  "key24": "m7fhpvyTx3tGWbYpMU1AGQ4sAzdDxnePqoMTm6TY2t23szNftmHmD9419Gt1QByVSQXYavgnxgyCJXPJVip7hFP",
  "key25": "bzCB9Nbabsn6AZf74dtVWbeYf8vXwiTZCDEPAEQCBZa7jLb3cRaWdWqoC9P22vGm6kTnm2VyKs82gioShR4bzMm",
  "key26": "67MYoMsHJW7RUtSwEJvrWumWV7vTJr1P8fnHgvX4SB3wwp81dafVmV5chxQTADpuMjjc5KZ5iphPvnrBpB3Qcbn8",
  "key27": "4FheyqeTB2a5HLV5xtqjku1nr8WzvhR3Zc3JsB9omMxaMR7cDjpM39M6rh6xnTUtrWBqfwJJFo48FhhyxS5cuUsf",
  "key28": "4LbKQbiKACmz5M9jyEmoMBiDWfCkhp6B9aDDphs2251MM1egsboJQv7hkXPEWnAPNM4QfZAtsTd9vWgc7NMjgwGo",
  "key29": "57iNHanh5RJ2CGvM9rNdz8VNTt7hoS6JkXgHduLCwcYTGaEdFzeP2cNMNtUJTyvnZLnSgC2PghMfgRmFzjui46VB",
  "key30": "2W7aa36WE8roRaNW1TTcpCNT4dpUYZZ5tgB8GukqV3G3HTWSjsKiJwwGRAvEYM1W6M7au6joQNTybWGUXEqLxzeS",
  "key31": "2vJpbxEui8VTB5qPGcVnY72ZFmr2FNDqfkh2WzS9gs858UkfBByPvSAvYK5kVAGtmbgHgwbUYQo6SQfbo8hxPAH4",
  "key32": "5fwK665mJj4diSxFdPtn1MSSTm5qRhWhywjYH54uVmkiFgeTkqo48yN6hFGzQgQ4QSZdA6RU4p93VQwifgp8UiuZ",
  "key33": "4ziZUtv4HxTfu3MjvtijijZBBypVEkWVfa5sRLhDcyjJFya7AAvGuG87uVwG845mKxX6n8akYbG4KyXW9RKq4pqe",
  "key34": "276ApN6p1qeLAvZ2BdYVMzYzuKFZMkunY4MZjVDVEX8RQCwG9AHY6rig1Z5TpuQJbeiMGwqx7PEKt72pCo4uDQ21",
  "key35": "5J88QjFiNamSXmhLmrnLNh35vZZg7ZAw89DzxU2oHHUYPE3ccnuX2Qo79tbvwFkPuv4NnYjC47ZqiS4PE1KC373A",
  "key36": "fT9SPdnaYRQ6bpnTmjsRSWWx8amVU7jk5G33Gmez9kuUWzc1zBZobrB2CaSW5EBp8VY8dLrweNBrFtJsr39DnAz",
  "key37": "38Bymz6fKdLfhtLaMMz6GgTZMm6eM9m8hBk6RVv85xuNkHuf5uQnkjA2NeMkiF4TM6DhtwhudEUjgDAZe9P8cZDb",
  "key38": "5hiLUJpNvxChNkUJt8StagmZaTzqYVRwcRCvpFrz29Kyk5vtzmshiVUFkxkTv41ipndvPe7j4P9eWc6GsRLHaSUf",
  "key39": "2X1VUV4vqCnD7USvAy2vgLQZBymUbsNiNAKHrp2M9mSk592ZgfJHrubYDSVQPLjYwHLrsLus8nTU1YZWCDGRE6QP",
  "key40": "64QTrokjfoP3SYv5AzoREXV6oEyW284GBqiUjACREWL16wa4w3Xu6gnb7NaLAzdx9wHQTeQ2ZQGD2jkykaJyzap7",
  "key41": "oEomzUU3SX92znL8ob7D6L5uTzY8dmuZKd9rinnLPVrxp2ayDRWT3CHUJ5UkeHdCuNcrhfnVwYubsGnUnmhT1Ai",
  "key42": "3iEifF73aDugwW16sf7UaEBFp82GGAwtHYWKT5AcvUVmLzSAo2ahDTgU4SEGxkkap2LSFcZk4VehwwWmCbkKnn6D",
  "key43": "5gR6xVSxnr5KC3pSBN8SFeMCnDrx9gdGRuPU6APJH5Qj8feWdcD4T8yvwTJqdvc8d2mUCuBnVjXGzLL537uKrG3Z",
  "key44": "ooCX4wsaEYwsJYpaufeCturWvKwpSHKmUWtNtZaVKmaZQB2SkTtEe9idcBv7oBNbUY6C1iiXH8Xei4o1UD3aHqg",
  "key45": "5FXmD6DGMwKti9uZSt7q7fLLG6UPWZEASuaVd3kadt8e2B84sgujNvRMLCkDF6tee8FEsJQcmjPk2q3jttUcTZ8k"
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
