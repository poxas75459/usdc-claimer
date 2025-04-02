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
    "4RGTn1T1FpnRieDcZp69PHsLeouxqMojwE4drmMueA2wSBWxqbbhvXR9UUS8L5tyoNwkGRL4PyBcNq91TicXjmtF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aXykkDgPwxZGLBKbxK2ZCakgN7LEstJChR8KnXsE9QpUuV8x2RJhddk6Z3QKmCZ2jeAiqnuFg7eqMGwcBDzDAfD",
  "key1": "2Y4CQeF3mMSsxttZyQSFM3ZoXDnzy3ummUKu9Ztmu61bsPmW8wJF98uCWNsvt2fvxs5r6Jca83eb2kHu9C7Jsm12",
  "key2": "5wkBUL9MpHBLmk6QH2AWBXDb4oa7mE947MFypP9w4qeZEL8rvBQSaZoZH8ZGwZFxjqUiTE1rgiAn1Cxdr9g5oVRF",
  "key3": "4A16sd7czccBwMoiMyUqPV4tYB2C8q3snL1F1kn1LiMtbbpTdE4wHSGwDN2bRDzWfTYw5sswDCxSWFptFREKUJqT",
  "key4": "g7m6fnsLVtj3FTyiLZBnttG8vfBzE7dHZy58r333E6eopd8TPaZrfYzRKDHro9DzodsuXWBdnD6fQmmbLiAkQqg",
  "key5": "pEVyuUUDahvHF1Tns7yK5gughUicR7Em6sDsv51ANNre5xsdPyb3FN2ucfGWhkBbh4MvuYVeeSqANLGAwmkvsT5",
  "key6": "5BdgbgPYneAcL3X84GMWeoyMf6XxnY3HJ1oMU2wVNEtKj4VHxUJTYpqhpinGAJEXeyBC7T3ESwWJZwLPNjYUQjem",
  "key7": "5ojiv84TFLon7paCGcwZFvy5wf5tnFDMWzeoBSYJhw1EZVGcshCbeca6JuyUVDV7Li9JLFZujyHqUdRrvH1Dcm86",
  "key8": "5vhDk9V9wGfAGjQFDoYNgfAcJtiDJJ4TVgDpHyvPwLUnvDY2vmXkX85a7fn6Wj6wD42iqmSzTBSrg9oV3GNq4AF9",
  "key9": "5Qn9EnvBxqmQ3n9xNjZT8jBvZMPtZ1GCsdzCqS7U9QCSgUmH41EUQokx5xSpNrshERxLjPhQLnX6arDJyTs4FNKa",
  "key10": "4iE6BFzBC4NRDCs2UNKyYioNhTDJSPWXuR2PreKrwmoqbCnbuqjDQcAhZDxJ2vGSJ2MtGKFYKhmJNK8gcoXLybiJ",
  "key11": "5C22bQDcw7XTiSPHyYzQn4SXFfAT6iqfmBZTj6HhFccV142QW84AypiJhAAPiE4DjkHy7bYBpL7FbFzMVe24AvkP",
  "key12": "4c1c25ofu4GSZmzb2YeajqsX5yLUpG3bqrZbx2Fduh1J9Wc8GD8r2zbEwBqbVbDFmcNmfyoQewahMgDzFVpsaVJp",
  "key13": "3DgeCB91WWnUypaJ5KwWVvBHMRbQHWf6wwJ8DNWqkc7HwHxuz2EyNLpTYus1jijUi32Q6eb1xvH6N78uxLwjC8MZ",
  "key14": "5GpwVxZLnvD9jWrkhZnXUUfHiXGDne2apo6feA7hDEQwYWpgouBGBScCZ7uF2oXkJfE2HNfvKeVDcbP4suDtUhYr",
  "key15": "xi9vNgjULv1pCPMoWYfetruz2WvsxpGkP1zyw6qSii86eXyZ5D2w8H1yYUsrfNW1FPBUYotaYJWPas5wLVYuXy6",
  "key16": "3PGYQQNPSfDJPASZ7dG2JeoMo21fJCyWGaSqfWrpxgMzquWQCj8sVgJA5vx5ZJWHFMSjPk4dt79Xq2WrGNraAUTP",
  "key17": "rvgx16hEb2m7k99g61bnjez3G9pvaFfNdbiMdP9RBJSbxanawPVGDM1V7rWktBSuMNZrsQUo7aZtu79PRpbaGnd",
  "key18": "d2n7cNfznbSKwj9sPw8SRD3AZczgMJeV4WrJ5ruAaQLcVrRdLBDYmF1wxNyiPwULqVtDSETZvHTvayLHtvGvtMA",
  "key19": "fG6iegGuLqAhs4194CXeoRQLQyz1TdWV8HLRnnminKJAhoisVjTU7zbqUiCgim6kM2GetwXJRHFtKNDxyygx4BE",
  "key20": "GeD2w8ZowL9vFznm1kszR9zwd1RWtEAnQMr8sJT2wAgDBxXGEQkYi8QCs7daZGnab3MX61Kse6qsJfebi6x2H4f",
  "key21": "61QtJNMYnHvrbWzxco7ysSTYJ6AWiZNsNuxc4suScEV6KHie3fiFGKse18fuDVmSRtGWDdxJe6rLMJhY5AJbbH1Z",
  "key22": "5K83DP8aydsm7feKzgroQwpd5jxkfLvdFxPP3mJA4o9MF2S7T2zGQpAtWKAbjLkhRVH398znsmANDkvuhMmzpfjM",
  "key23": "AX9Fqs8Grmmo8iAam3BKDLjq1q2xoC6JN5v888zTetCDy5HF6kzfRmV7noiLDhGU9zBt6BqwQJGG7bqqyeENYQJ",
  "key24": "42MoU3g5aXtox6YC5Kv56hvK9eaYGEq3evMwpGhMjRAid63Q2jsM8jDDScRCtnevD4mqmqDVNR9kKbg7PF9BVPmd",
  "key25": "2ngjec9kdzsC4K9un2P2BMWFSSNzmNbm5S3om6kgheh58ZQR1q2oBXjRT5KSAAeL2qbxkBeMhbKqoWeyn4phV9Rm",
  "key26": "5Ytxp2vsv1DeczLa1b3PhdxurprumgGbKt2gmjZhmUKQy4Dpou1xrWHqWYxtWZAqh9cVii1rWyMMgMi9yLucGXDF",
  "key27": "25PRGxnmPCYUM6QzbtYqzNUJSWYASgVdq1kJZGqAVnECNbc58o36K4XoueD3jkC8of2H6GmuTBDU5YsYb3R3b8yA",
  "key28": "3deZ2azesMy2qQ2m8dsGYwYVJmN6oBfCRHciDA7te3jD4kooW7KpyVzpGedN82bBc7sN5qBusMT8UPz8fPDoyWYG",
  "key29": "4mqQpxnopGrzASkx7QWbMmwVSwaszHVXjzSupqP5KcGBo5TBcPs8SV3M398VcWkdzhWgy1PhJGDwJ3YcqqbSRDSs",
  "key30": "2MNbiK3M6eDLa5sS7j77xToBJwpfCfjTwpoycLmidcazFC2aDPzooXjovXvszhsX8cFm8Px7631jg7Mm4mE2t2xT",
  "key31": "63dSj2HUWSDtgUSQQwDj8425Ej7WRUvPrAsfGPKf9jM3M7sSSgn7uRrVyN1mLBmvJd9x15y8rAsCGniMrB92PA3g",
  "key32": "2jdJUuEdc3SDtroWSYQQ7DiAv9pxyxZs8MvuVaqVUuhcVCFpXpDEbtrHfaGKFZZi5Q7WdYBhZypWkqZk5gX1gER3",
  "key33": "56Dhz9xumSQjdJmEJ6KGcJvHokmU5guyjxssGttmGQdH7qGEGsvqdAKSHRhnJeXDR4vKgt8gDw3MCMaLPtS5hi1n",
  "key34": "3cT9wRNxtuiVHsJkyMChK6NZaQEVq5yjQNWwa8vmKuLL77bbo1Lmb7oZcooZmBG8EQ1conSHqPKmbVG1cbTaLbMG",
  "key35": "44yr4wXUxQjcdvSWvfbkZvymz4omL8Tp8eaNbqSqynE7Hp1hSmnFMY11pDaA9oeEuBnHbtw8gEXusQ81eVCNmvLj",
  "key36": "42ct3RLgbTpEb6EmZraZmaQmsAuTCuVe8TMokQN7TDVRLSJvHGiNoS2N4uHEcM5V8TbgpFDKza7jApgtzPhoGqVy",
  "key37": "2hhizuJpfbB4w5qMguoLbd8ggxKbffRj5iA8xF3CRaiAz4vbCy8TQjYLGQqnkfy4vDZ1VNjmMq6wZ1vBXmmLwEyv",
  "key38": "2JKZraZR3E8iqRUYih2PY5MXzppFCgmx3BTFZCPRPoDNSW1fWYBbdiWaupo8TkZEQMEcwFPC6Ghh2ioh2yyBgxHi"
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
