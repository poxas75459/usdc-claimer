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
    "2YM3br2BxYq74SmUSkJNN5KGgsukqP3sBtzdichcPv1hgxGdDWhmAgDbPfzDJE3iCLqKGvnnNdKwh8kc2xhcG97P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UkBTaRnSXvMu5LKHGNR3LrHgGpR3sHQrv468re859xZ5B95nRofhGMMsYByYDNA3TagzvcQiQe5XWJKAxbQyF3E",
  "key1": "3WQBPaGwyofeSXNrPM37bPzherofExNF4YK6AMkUptcDBH2EpJkN9T9pP9uM8uxG3Y2JrwpPHwG7GiBYzz1T8HWt",
  "key2": "5MBFXjGFMEbGAo8A9heWaEt4gAPHwyuTeUrjaoHtPtU2XDFRpm4Kdp24VKPCbnsdG7eqpS5Acdkoxv867RXdVht1",
  "key3": "4EpGyMTsrn2itwyABnHzuRqFzQWVEo2r4dERbxmRMC5bttP4u9Jn2otVmUvWmWRTXAnT39KzRekaKS5399GU2EiL",
  "key4": "2uKzngv9KmGPa2mEWczTV11mgYrycYjtgtKz4uupAp9Nw1d8KRi8RRczPaSSTNTF11kUHxPVYrvC6tjSSepm4bm3",
  "key5": "5wdk9urQPxmCpSwW1AFMcZdefCmCSY1GaG6QeozvcHgMAUs8SSMP6b1UFUoskCzbHqNRf932JM2djoUjtjhqmQyY",
  "key6": "4o5E6jvfTWuDs2RV3nuaZuAaxCa2SqzcQVZUEuGRG6U7cryxd3nyvuFP4z6ZtVEy56NuDDTGNV7rCnJ6JtncZ9CU",
  "key7": "3Z8K3Naca4YW77TNWWc2HCFGPXdcKmBjo871z1AmDB8QeJHD547fbBkd4idyQbV5ihnZrWhWEeVShW8JP1dZwYwJ",
  "key8": "4zDDCpYzeXmYq7p2ycEVNqdfsBRvxwnVDUYUPqkBtMwuWjUMMnQnYe7t8yEVJ5bAhSEbdfLyWUFQCu1UEWCuz8us",
  "key9": "52ffLAmQd32yLk56AsxLGDuP8M1cjTqetScTybqrBAoGunRca8uEZAeLXRYNM6yRAftEZhs6vQoM1jEUVXodJTkn",
  "key10": "38fkEfmuousXYjizB4B3aGkwEEZym8wdxQjEXpJEUrJ4YowjrruxwPU2rW5Qe8mgHi4ALVNymze2AR8nmZyWcTm",
  "key11": "5FX6bgVi63Gc88upfyGJcaKGjieMkF1PrggY2K5pQFtgDxJCfhCxUTQBmY6tseVMnxBSZcUY6JwFu361WPjDHGLu",
  "key12": "4q6fSrzV67FXHLW7dvvh4rxWr518epfFkSvGZ9d9nehCu4zJopL2zBvfV1Z6UZtgAfvyCL9RxPoak62oaXXcfQ2P",
  "key13": "2m2PQBjUUK55cg7dw9MU4839jWuGNqwuEQb96ptV6M3B3oEFNtFyvwYNSsKE1VG8WpAYEeuK8n4q6NU5vdVp6zzb",
  "key14": "znVBWmVcGPSWjYpwq1DXaPpUqjMkhHGUKQvme8Eh8FMWo4QojEcTg9QC49Csbp5nEWyMixcawv8ffU2LmWgxSig",
  "key15": "tKK25PJhDAPyADxZM87eiUZgJrHZ2BaX5hwGdMF7KdD7HM2uZ2364cCAvzRTvEkqyAAp58Jj9zbYTV8Lf3AxZmA",
  "key16": "3Vcs1fpkfmaVhEtbXWfUWqD5tQ18WdRR4bVAXUthUme9GfX2Qz6QndCi7WoqA6AYeq6FJKAvSqr2acLF8bG4sXhi",
  "key17": "3v2xEygAUx8vxE5NSVTBYdZQAHAk6usXp1zrVQAXkNwoEkU6EufGQr6g1eHvWX226A4P179r6MLNjhbe3kiPpyE4",
  "key18": "2G4Rr399sUHjbgidzY9RV68mtYEtp2PUZw73f8f74mXwedGfmCtYfVzvTN4ogmz9g2z46usPE1jVE7K6KCqHSxSM",
  "key19": "4GXPJsnSM1gQDMxNZXn6obAPvPgvBVZTDvgAuddZEjvv3kDhZTBw2nJCFn9Q6kaDRgUZjGx6wjBh5g7CCx3qSq8T",
  "key20": "GnzHAH49BfXP9cbAoB3juLjbR3hXyES8Tk9JF1RRSS5L9hxxQGh7HxWtG9FdU2gN6NqhqJPi8pMSm1pJBqhprRL",
  "key21": "4AYKV9S5jzzMzMtBDgkM66HhSqJooijSR1hssG9yTpFDVC7miwRNxF2pJKjAnv9vPrrcmuyYw7HrCwoBnkcZrdhh",
  "key22": "hQPKzMHNdSMEKsNzH3PDze8B3cu7gbVzV5BtHn6tNXViWWUMbxadESwPCVRjP7kjSKjvEiaSsJZPQjZCJ15cUcQ",
  "key23": "44twtgbfa91ro3vmntSMCrSkpRoQAgSuHLX31sYMzpcZUeFJXtQdgcFeAQcrnw3JUBTWGBAyXrFkVm2szRiRRdTZ",
  "key24": "5r9U9qFYRofLMiGkHJX4PXpaQLQpKoUzQZsGYccia6jfkDt1Fc3SBJSQV5bUMqHFc4vcX94UzY3jmUmwiB4VeqY1",
  "key25": "4jApruyLijxUi6yPyQKTjpsi7kaUpRvbqXgcqnuuSXp7dq1HTVdSR6vwae5cvomxxFseXNa9iPdcu9R3fz5yxDZM",
  "key26": "4uUmXhBdoX7ZMwgcFRCNKVLbBvHGedHD7fByzpTi4LzgSYWPTn7pjNprNjYmN4MUJYr5i5rcP41Nz5xf3EXKFCSv",
  "key27": "2tZb83CvqAm6UHgJEiCKEeGCKBdX1vjGNtZ72iGXM8b8EWbanw4djNVMFv3qvBboqCJ5uBkzR9MbW3nMFMxcSPuy",
  "key28": "3g6fj15EWgkbArPFo1bKGzcrUUCdaAiqHvzWNvL7PLcuhVKdbbUZAmAdfraPuUSJ7SXwzBf1YeZ9ESfvWgHxazbM",
  "key29": "3by4MemLV3sA58oZifH5Myg1p3Z3Uhx8qTezibqRDtP2t3cCTcAcoxXNngxx4EQQfxVvhDQ91a5JuQhGYooaKQFm",
  "key30": "BqvMA73c7HZG1rterrS38ZV7RXkbpLbAVrfsbkY4uryFfzbXSJQmrJFjTx43L8EqtZDV4mYweQPB1Zy5whrNUAD",
  "key31": "UL6tRNGuu4etYL9k9dL2EdJGqXAcXA2xq3QVixqMqX64Bxp9CSWG4NV418ceRUaynXyHCt3cVEhoXkEwmVzEhTD",
  "key32": "2tJCXhwvjZc79eAdz9XSv3dofEardwajH9wP1cv8upSufB3nAvJqtBrUQMw5xH2rx94eWt4JeQg2sDpa4G5SndRe",
  "key33": "21pS4pePpReAKLUQM1bxxCDF6LKsFa9sqBG9G1aGe1oB9DSPhmWjzMnTMMwUkF3U9jU5j6P1wJ2TTxPaXhtaNBCt",
  "key34": "38EFVpA23koJyvjPsX7zAE2LF3CcZpJD1Ksy5xQPx193DjtyhNPqdvcYs6Yi8M5roFYUzNFNjBtGUdBKTYHZzsSW",
  "key35": "63uMC2VFcUihqPWZFvEcuXhEENyPHU1qmx1kSsCJZZCncRxqE9ASKzfudD3jjMue2sbMykd4bGukWDRWJyJCxnmW",
  "key36": "5dnKMnThmyuV6QMHK6oJESXprHPcQ4sHwZP2fx5YjvhkdXwL3o7JinD6Uxpa5heLRroRh4Fo7U7KNTu8pCxZXDxb",
  "key37": "SnPQm4bmRjBiSKv87o16Qj6XGY48Nim9AqJqRg4rLhbHQXJqreyesjj5VUrA8Beqr4YB7DSr72PqSiZFgT4oRMm",
  "key38": "4MeVB1k4cTemmim8W5nZn47TFfZQNS3mXuU15n1fr2Lot1VaDvR58K26iN17zDCPuW12utvCsSuqHSWeojU1sMkR",
  "key39": "4BdtKzzLYTivf9kuBjnNAnAwrkbbxaPQmuiZh1qTuEb6S8Zfy9Wx4jo354QMdZqE2Y7UfjDSbca6Sg7YpYSebRud",
  "key40": "2BuabbsG1vDQQbdndSPJdX1pWx8MYH7dy1HNGRec6fBmXYUgt3cRVSvEdRN7MAFhnMApcE71ghLVoSqVrFpaqK7M"
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
