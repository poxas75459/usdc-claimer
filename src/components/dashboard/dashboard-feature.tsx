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
    "2aL3zDWHQfeat8rzFu944FT1SmxRcT9wt4V6nbBgYxPmvDN3RSQJe9AXLDt7cr8QJ2nvJDCbSapwUMEaJEka2yG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xm3hwrEtJdQzEH6fAtjagV4W4ZNHQuXrwHeMQaUN3HijT3UzRrtF94XVvVDhwdgQLHUEgWSpFCKemxR7S3KiW71",
  "key1": "2JHP32zCnE8uPi2GZLm6t8XwezFuvyJYhVpZkZDY9CsrzEoWuGmFKwJUKoCtDosWveN2WPWnSr7XF3oroSvu69Fa",
  "key2": "4UoFvEdU3hfwHFqn3QQiv5fHGj83LKGpEC1Ksbace1zFHyfSZZfqd3c6FntpQGLn9qQrT9RQs2arCiSzxubSp3UY",
  "key3": "a6F4gFDstPwS2iDjZigybBWFiuNNaSKNiJp2Z85vPQj8ADmSfzPAkmU8PezMbC6xr2BjnKH87pr9ABZ5n9RpEEW",
  "key4": "2eyvmru7KRAZGaCCRHK53akCDPkVpNZ3FNmtgVCRmPEsGraFxcbHrvAy4fjFA4PFmzsYxRMdZcrxvawawqm5CAug",
  "key5": "2NEeimsf2mxYCixNmghiZfi7pcjSg6QiaK6mUfKKx6SeF2nBf37uFv4gQ8GwtFYRXTUcy8Dr6AJnKLoj9s3myWjT",
  "key6": "4JD6rFx1rDVgY77TVWpyrYrq55ybMLUhSn5Uv5FNdFnw3Ak6YoqUpo82qWcmJGDUHJB1T6XP4FCqD74wMpvAbsst",
  "key7": "nD6UuMssT4xA6m7z7vf12b2j8E8gM27utdwF9suyR6kFTpd2BJyfBLrSDhNhYMrieXauZfFfMjXZ4DVaQ7qS8RA",
  "key8": "3JetYyG8wbnJLkEy2Yf8emCLza7xdpKLSG1TxaMJ8BiC51yTyXiQvbHrBkPFuG4D28yA7qyVSmAnjGEgVmgaNtmQ",
  "key9": "3Mqt9bqZtvWJj2Ynm1WyjczQK1qRvCQNqiPxFpVWN4xCDGtJH2JNqVL6QbfCZoCZE6MZJmreBa6vFh14o2tS7V38",
  "key10": "5oANUAPAqxgDAkaEzXqnKbcFuDihqV4mvcfxVoJp5vMpvytsRBwn5DhXi5CGriPf57QRN7iWo65Y8aAMgWPEDQqR",
  "key11": "yWsphsbPECaU4yf3Q3m4w5wPcUm4irThf66LCJReyVmWuxNitKjBi7LTnkm5DVvpYhHgd6wLKvsw9Ee1LeWLSox",
  "key12": "5uJG8jce3iM6BNTpiSDa3Cz6CSZGEKPCeFR17WvhE2boSuSoF9ZDk6tyGsQMAybF2T5gSTF29tax3vcBEdMAoJY3",
  "key13": "3R5szmRJzu8i2xXRfK6a2J1yHSYapxoFvCyUtFafE43h1yu8aANXn5xZY3KqEyTGagQb5RB9Lr446zRYhKcoYApK",
  "key14": "FDYxb2j3Mb6WaVw9yj5mEty3kHq21y3sKYB5j335YGMfPz3gytiFKMsafm6jpC88swq9Wpb6FHni6nBF8FnSciM",
  "key15": "4MSHzbHaH8QuZMvqm4PnUuYmbL27PfdxCMTMhjGA2P9J8ZrAwCBgVXyw7ErXtv8otSMUEnev6FT2L2N9h3pnTFCk",
  "key16": "m3uypVRzXLgifRL2piwqMmXEerhfKgwH8wgwmAr85fYJ8K3ZTzRnmZqAA4MQW2zNGe2iGBRDtAWobrYEZYDXaLY",
  "key17": "38paBSEYNQTxkVAZE5Wq5TKYtcvH8TzX56VKmwCWUqNMNEvvHR5VGAULkC7RYy2ZnNMcRztq4ASs9nhR3jtEdcNS",
  "key18": "2RobeRSvwLuTudCtAuxajP6HqXEGKRdgVs5JsCmQs7WX2JaW4P5xGiJUPix3iRpLKRSv15oT8FkqYHwHT5r8dY27",
  "key19": "4VepzrphxaVyPDarJaWPDKP584nxrCsi8AvGesLkBrZz5AEkxFr6ddeMkMauHrs6Kz9i6BbF8ipwhzzSjrmSPv81",
  "key20": "43X1kxPPZVAUT43McW71KxsFwsGMTDwwixw4PnWJk7QZSRg4JJsFDefkNNhP2RdThBtKZHhTtEMG8qj3tbCkKC54",
  "key21": "3fZS5YyhisREJCvMGaouueauJpWAUzXFkJUbvda1hYKPsBkiiTKiTgQN3Nd6o7YLVgyx4NgVU1hFP45tZKLkiPRG",
  "key22": "m7zFtLSfXEDbfxRtZUwNFP7u9uHDMCgkdjNXDmBTkf2XXjNojQ1FP4oHdGk1HTWbYca28SwKYKAnYF7g1LAwWCB",
  "key23": "4dE4bZ61tFYRrzUSEAJaVzr1ALnUfJ4CpkJuGvLAaEJ5rnLZUAFAHDvKFpzTQZzervAbNRgXLhC9DYEzCw7Fx85A",
  "key24": "2xscpQrFQjoTRBXAUCohsmGF9s9F8AC1TqTwtPwK8jznSTAkBwBugL2ehpnNmTC6Dsr7DB83Nb3UP7NmSimWrhN7",
  "key25": "5k4rN2SaKYZRkuFzKanknYENr3nakRtk7zBrzRqLYkafcfvsau4D1oxe2hmpZCjgywXAvxiGtnKarXAkSCVyu1FE",
  "key26": "39ewHU8Hz5VN67z37wTms2sWncsHQD6haEXhjDbT9xk85JGEFQfJXM3JFKWkHC5B3icoyYcfFTR8pqPDc1wk3pFk",
  "key27": "5Y17T7RfPadxfiyFb2cauvi2NRdJJRBSymhaTWDxrcvVwpapfgHonZ2kebva3pjB47NGSMEhQiU61Kra8wXCWY1a",
  "key28": "27R37UyH6CNDejcmM4m825DKE5ybfyhNwUDCVuFh8iND8iznQWj4rsLwUrFyNvscucDwCrWCf6xC9ZkFrGQT8KUx",
  "key29": "3MSR9SgdZAE1cXmMuNEyAQMNShweFaee3JtrtyYuuWNAgnBCJJrY2iiaEw6eH8eDDxcaAateECxz1ZHPJxdkFdQe",
  "key30": "5QT2Mz5zcefE6NFN1Ncobr9zmH52tfXPUNSNDvfWdrSnGLMooZDBCahsZ5YA17dBkVjgpfqvv7zyJhYpLAomRnSA",
  "key31": "4eeg5Peb2G7EZ4wmP6YwhxXu8jmnhaquKYPnYtdSGUPmBJ6aH9XeiiDHKHfZCaHtBcQcieErrZfnScTWP77x71pG",
  "key32": "kV5XGgNKZJk3KzdnxM1aDpkrvXhiMECNZysuTd28w9YQwWKcQxF3H2EzPpxkJrNUnBPEwd3EqnQsQ2iubitZup7",
  "key33": "KSPtMcrMuBmGBHxjdVhXqw39KVEezsz1d4r4UC7kYZ7vU9znyUE9hzqY8ut9ZbmpJhCborqq4CQ6A9t44mQA1jZ",
  "key34": "3cypJt19yQTgQufeSvFVtSY3jT9NNY78kox5Mv8m2uGCuNyyvDaMTSaNeU5QYhG337Jy9FU65JB4pMreUAmBmq2",
  "key35": "2MZ6kbbRtAuBukjrZX5WCEYyxdS4itfpa91WYyGj7aXVpijH7h8rALCyacqDhBWghfeBvfRqmwvB7LP6P8atW8sy",
  "key36": "4vH71RBVDRMMFQnCmZkzmYsP9LmupYTeKPUTp437rNgeMStvTvCSMv5Feth3kAFN13Cm4VgoLF2v9WjzrWJ8yuw4",
  "key37": "unUiWDdrBeXm2nXuvNVZRUBGX3v5717srHrbuErmJ1Ziao3DKPPChUxgKzTNAWXuRK9sk7FvwoNxq5JNGGyUqYn",
  "key38": "5HKYVQuzoDs3RHmxXdpxY4WDLn2RXKNHpoLem6eMbnpsiLNhwSrEKk9EmPwcHXfqU8f771xcZQf1EbYiBavJLQGE",
  "key39": "LhjhELfkW9tHs987g4SmwasU22ibSjg5bY5fKyQLkxaL4XyizBLtgf2w6EkATLELveayr5p62YH4J3U4pXtZ1Nn"
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
