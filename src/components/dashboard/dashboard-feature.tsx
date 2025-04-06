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
    "2TYkJTWcPm8zzDRgQ2kFsyayxvXSSFaQwPP2oDV6WuTrZqTBvQE6VqUYf2KgNZmcT86Sq8CWxnCb64tKnD2kBdem"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ca26ayGy8mGRbweP7cVoNrdFZekMQD7awCEeFWDsVb5KNsdEEzThPLG6sFVXZB64eHZdifkG1ZmRQDYcQqpcf2w",
  "key1": "5yvxckXnPbhut7u3DbDjvTnMRof16CG97b8zcg3RXT3kX49e3xcrZLNtAk73y9goYmRQeVfgdNucFP6VvSZmaqYh",
  "key2": "2Q1nUFLd5bQn4F2og47YJFDXSbLoMsxU8fwRovqfcK88Zea4hWgs2dncJZCZ9eaEgb5FvL45y9muvWhCpx7NaShV",
  "key3": "3j3wtyabR1rD9HbF8TmM3dceNMhP4229NejePzjhmUkf9PKoWXC5DAvhYgLKbU7R7D2vgmJEYUoq42PE4MgMsMvk",
  "key4": "jVc9azStnNhM8cwECeWqfeg53QigZ1aNX3gAq9QjRgxjnicEFihoE4UG1JxhkPRKAfQnoTMyv7vh1hCbFxzbdU1",
  "key5": "3iXaN9TBKRyR6cBVYdHv4jRBru9teRBPG9h2CT9hegLDw3Lpr1SC7uAmrAZ5a9zf5dVR7Az6LAV1s1sZSdgrHpqh",
  "key6": "5E9fwwjJM8saz2hqVgpMwu6FkV5dKfjijuEnfByhiU9bF69z6fFUudbx4hDMHPN3Bw3Cr1QKeuzfkbMRBBb9wz42",
  "key7": "3Q8y9vACiaP5CYsnvT4dBZ52jrZueiFwChUa5CWwKwvyQRU32Bsi34gdqUp8JEd2cFS7wSvkMW6dVstWepGEAcAk",
  "key8": "45AjKzcS1pgye8LjtFYoJkKXZEHvJAgkVeKeyKaruiC65dUnwbUZYo37bMsZkYXBwRfGVJ6tdq1nyo6HdKw33p4D",
  "key9": "3USyaa8nrBUMHPZnfnvHmcTByW659BFsYz1KwvJZCm9tpZQs2wPW3TEnZ1joW8XqFwUKb5ug79LoB5XJxArrPKRA",
  "key10": "3TLmbuDdPtoqkYYgccCqGHS9PzkUwikyXPWt5ohP3wTsqRCcpYnXL9e4erKwxGVHuiqUZWNY2ErFXEgWtm6dbHdy",
  "key11": "4PvBEVTtRguQFuPo4MwzFu5K1FS88uKukm1pvsZXdkxxsicVbqGYpB5SdfqnSnbW6t5ii5USEoj9syxDNq3b6uMC",
  "key12": "2zD4SZmkRsZfnxXXy34PQEBhuz8GiP57dsh5K94kMLBS7ePwJszAvZoTpLUM7SV5twpL2TgrnhuzyW9iP6bJssyp",
  "key13": "31HdtdesE7yg2DLgViTmYRHFp3YD84D8meGj4de2QRcJuAqhc8ZX3UUxuUJvnNCrEAdYiEDdk2di6n8Sffieezww",
  "key14": "53TksuZ2512EDxHihYRCQJqmEsHenML4UW9mCksr7mGqt5bSXwGwbJUPYNEqPcBVfgRdexjbLs3Qosi5sWXLjgF4",
  "key15": "5NuDtSmofnBKxcZHKE7LKoFhA9dDJvntoF78zvfoCP9HALGXTcSF5ato5rdzTypkdPWYFqhoe9qwjudaUACUskTp",
  "key16": "349tN4GoM5VtYvpKJt9Bh37o8cLSVygg31Htn4S3WvVXQnnWLycqfziJRP5vhn9JhtCMHnRBGQYsNoegRzxNCDuZ",
  "key17": "HjRFuhzpUQNKbQDrN8auXRm7T4fBx8y3gw6mvmvosznMm19YBnNf3Kj9czbAgSKHLsdrYjcMDWWUGJ4WSKKCkS3",
  "key18": "mEvrKz4S15y5qKYAmbkZMwxyuK24ptFGq72AWfbVWrQjjZcB9ddgtBMVVmpnR9W6ptL8DAva47S7NvnUfrh4KKC",
  "key19": "3sCf4ULqeHAnU7ZzUwpXKQi8BW7uTbCn3Ek8Q2NQzY18i4xGfX2eAWxcsBxDtGDjfdCWDVexPm22wghNvZM9Xw5E",
  "key20": "4qBNx1E4Y94Hpmjfsf8Zp9ovFj6WC8cJ5SAzqaT2QEva91sGxC31gUGe1Azd5WLs7SqMP4gYdH5Bkzth8zN1pRt",
  "key21": "5JEWYxxugP7igPXj1AVeqA2BKwU48MNJxcNnT8fXswSxSqKMoJRErfBuZaResj7rd9CUR2m2UN8L79Hju6qTUTqn",
  "key22": "2aPGgUFQLyTGrjoLiMkZRTRSLU8XeB2RtqCW4UEwLs5Ph3YNrNnkpz5XiTVUa9JiQGZwXD4212rvENdEYZwp2FcQ",
  "key23": "4ss35KySqH1kXeHaMLuFVnbc3xTqqDgy8V5HspMcxnbVkR5pAhAsZyAPDnZU4fPzDVXhPLbAv7pWS5n2WdY6dPia",
  "key24": "2bbjX1yPL6epmZ1cjx8tm8KczTLL7DXK8GQcRWkiriNsGybQzygijz3QidqkRLd1D1EdqHQyMw45oya3oNVUw8qm",
  "key25": "5ki5kzwaUQE5jm8EGsvBopW2ts4T2HyP9Wp1iBVXdoCDACMLgTCzfpYtZV4Dm6UGWHrD7CMgU6izVPbvLe5tuhT5",
  "key26": "3ypWij69qXjsuMose3YpAiJUtzHwAqMUgajtg4Gpe2R7WRfMD2bapt5wfH94ziVKSb18yKNakbUgmiH1XZ3VcXy1",
  "key27": "FLsCBQkyv7g3Rx51aoD7ksip9dx3FVkY4RtrArZ66v61v5A5AFkTJ1jZUY34Lb861K3L48r2LwRKZsvxQenG5JY",
  "key28": "2j6r9p59aHsJyJPVD7aE7rbzQc5cFKLgBKpQjebhxrYdJwekqvuTG7HEFejcZFnT3v8DhJQvXCnL7cbRApGmJMvG",
  "key29": "4mw4XuZqJcUvu4aCUt983eXqCjFAt6cFUiQFrJsBANcbJmV3H96nLRLsbgQpsf3u14aJH4Q9QBXw7BV4dZ6xeuKM",
  "key30": "4FXmJXEvh1Dnp4yenkBsgwEHcBxFJjER1WjYT5ZJkb1vYiAaVQpdUnjpat8Qzx8dEBxmSbvtETzfhWfLsPZDXhW8",
  "key31": "2dceqVYJw2mtdKX5QgfHFpD1AbnrRraZ1QYwL97PrHdEneYv1XRc7RCXAEwGrKAsYgAkb3s4U41wdP1JML7nq4Xs",
  "key32": "DsKsfHsYgRfzuVSjZFZvtNBYLJRXZsPCjRdcWucLutFJLpmahKcSeqMmcrbi5eHhBarWEa8K2cxKqRSpM92pzwr",
  "key33": "53KWvF4BFBH6W3F1PidMuuMQ5jwazWZzfC8dF5cxHWCdzegGPEXCR7q2ZxwKQTkTw4YFpUQPLpe67VS6N5nzKk5C",
  "key34": "iZx3MVKYmQD95esmQiasXf8E4BsPVEZrDq3C6YvEeSjQoLkPZE1WQJJaoWTxp5wehJPDmDiEE34XD8Mu2KF9V2s",
  "key35": "49MFqyxnnwDwLMMLUjmG6uyHiqyT46S5ZPy3twQNa8KRKL7XSfa39ejjr4pAGLRFUC1j6Vcixm4CJbotzQTUS15C",
  "key36": "2cZ1maVUVSKUgbqk2FhTWaRX7mxL9k9grfCPFyKsE6o7LirmM85PCFYswkSUZ1ESXw6VoyA1kquQNnpuKVuYddgL",
  "key37": "2g9Vj1wnQLNbWw2u5SAmu4LtMzYFVH8Fkgt9gcgTco4Ndc4c1CMrNtFFLSxAK3AXMKPiQKorgSarCJB41WwBsoyg",
  "key38": "2hvLuv1MpG5u2a2kCNttmhFouXB9Ay9fU6TBfXDnEy2c1JPNr5BHow1oRRNmrmhqf6HDaXCbvAH64DfMJMUx3x2e",
  "key39": "5jbC2r1QKaCWpHcgRCndK2ggxabxQsrPHJMVBvYFsHWB5LP61WtdCPfQcbytHVztWThSjXEciYsCBDb6UQGvP47W",
  "key40": "7BUs3FpKsuyeq2WmyUGhTSbcQSWQKaXRTeaBaCNyQnnrBY27Vv2j8DrRU42u5E6KGLmqkzW12U8KkPsHqPKPbJU",
  "key41": "23L82njRopuWUycLwR6H9iaKRJj4ztvenEG1BtVVTBpmapic9i5NgDtDT6dA5R7EpJKd4qg7AHhPBLmmWuLRkTXB",
  "key42": "2HRwULGYRXPWPdaMbLYm3au7q4LCiisEYSvUcose9huKU6vyLZZHkiayZWHXJR9jbayAxVMRJpP9jH7XknkP27y6",
  "key43": "TCd2RhVCzJvxUnHK7Vo4qgawqrNEuu2QC86okgLGDANpqo6K2JYvfmPySwNBxWUqB1TK9fc6ZQTF5NMY4P5acxr",
  "key44": "5YrFW3NcaCHb5NtbhcRT1cSpevHkkfvg88xWprHHsjeQyPe22ZVw6ZUBgVyG92iVMKezCfeYWeqJopkkFraecp39"
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
