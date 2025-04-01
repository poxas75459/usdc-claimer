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
    "4fkrHPxpDhGbKJQh8R44YakSxTz5WLGzYG2FQvLyurdjtTEnWZRhMUM3tCWSuqJuwgyUPkx1Y5XVd541p6KMd6QM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WRtbKPWSDhkbkSSZecqufVwGrvNZASgAoazxezdHMguP6X5QhA7LoJBekafXDSzHqvpQCRZYYMZR5d63iuieQJC",
  "key1": "43wB1UiNAQfwgFX8XtLVJruQmeeqLGwTe2WXGWkzCedw85wGqM8zSYtq5JV5egiGFXj49bH1oYK3Niw1TUb5bTae",
  "key2": "2NQ4fpYJAZfuUThebBW92rdjrfwiQag4MJVjEzy9wKWMV6KTarC5T5iCJ72eQveBkTVjRGSja6HaF9oCpNUteHJF",
  "key3": "2XhGhatkLvP4ciPdha5i7UvP6QuFFds9NJBSSYVzSs6ZPG5TqSw1Y6DbfLUqL2LtVuCyTL9yp6aYuB2udsrfdeep",
  "key4": "gwZQYkCLiY4TRDuEhea4nfbPmszgrEPoVvAJbjJi44bknUGs8Bssy6wC7DMsptxZAnjLgVhCwXNteq7cHDtXpUr",
  "key5": "ero9QmLDvJSJq4qhj6t5eSPKWRnn3uZik3mGJybajeZ5m8RvVF4rs5CqYDy63SXiWrxCHJ2NDso6rUsmEVj5RJP",
  "key6": "whcEH7A8hcoNxRJ7DqTmNWFNcRyQWTW87WJ9iBvvtgR1o8o69rHHJysmk4esbvNsWHqcjAxfouZHNVfvY47SSRK",
  "key7": "5vxjqVbhJobgTW2o1ydNXjx4CH6p7Be2cFPkHYnpK3tuWDvNrijstnZQEPk56ddmA2P8khJYRtanngRQ65eoSPKM",
  "key8": "5kMMsrAkz9p8x1hY2fpqGANqwadUAvsPS17yXeh5wJ846hCVFU1n8nVW5GnPuBc9MQk7mRwRYg6g6dJHPab6KuXy",
  "key9": "47Gnb1fnapQfnTnaifZgCEYgww3EvFPWaXBQirKvSQTMmpLy8JMLCSbLERHkBQvBGdn4UPegm2iMGazbYvCajWbY",
  "key10": "3YfSu1WS3W5HL8iMSrDDe1DQggMe2X1hzMLVNLogRnmbFeBNrAEKEwRZxPGe8pqVVBhZU9EdyvgYDMvpRthMwLEB",
  "key11": "44spJsKRk3ZcGotqoFrHHxrskRyCeqQ4RFAq7oA6t6UTDqN5R2QK8VvbTakKE1YyjLxogAp8aPevDUpTxSahvqoZ",
  "key12": "qetuD9zsAFnqG5fThG1TdwktxYRsJ5DJq4X28bXV5CtSxUdsRz8wcpyUp3gTHJhELMVzeywTi9NiXUPYx81dVUf",
  "key13": "3NRnCFntkQRmv3TBiUUGdnftoBzFWcGFfG8fcWfdDiSvtaNi2A3JYtz8mqQuxHbmeZA1H87zuhe34Ebj7xS98e8w",
  "key14": "5DHhFpR9e8Ee2bVR4TrSYyVM4ZdtdP79W99JC8s49bV2LnqwwSoT7Pt9X9gZYHywE8viEnEw5r93SSM2PsB7wkze",
  "key15": "2tvucMvG58JWJ8SNqrnUL44VcmEp9MYPqESf6L1UmrCz52darAYAnAV95kcAAdAebKmM61x8A63BFeKTqExbqXr8",
  "key16": "3VnqfZUrzUeu2yy8724sWBXAG7BRa1JZdrXb81USJd4EBqBTWTpmNmvHrr1JNYpSJc2Mj7YrsgtXej5nTp7xhQHf",
  "key17": "hNQMk5NSDgAkpdcwwtntKbH35uESQgtvvT5DPZUwA81a2jzqhfkx2VHjWVVGEtg2z5z7LQyzcPnrrKBh9WE5sHx",
  "key18": "376MNCVj6HLS2evAkYpGkvGm9bW6hei79iDQ8TDZ3PwwEJd3D32E52S9QDpLP2R9SfwE354kpemggFW7NYTbAcuk",
  "key19": "29VStdnq1QVEyYfaKwKQLMGVrgcqnfTXxu9naKLGrWmWvdkm38VPMoGMY71SUF8yi3ZCmHy5P1xyRVcvbxz1D3u1",
  "key20": "HH58yzwmGUGLGMnUSsja1EKyBTnW4HHr9a3gHFZY2Aqsz6uS1W3CefdJPbi3Lz16XKGooJLifLorRML8GTcDp4p",
  "key21": "rttE7PgGnL8Y5NTwHqSPj7jYcBxygiAUookShGPQZqELqZ1bjes7ByQHMkKfATMKiYX1nmcMxnJLWEsxDbVHE5a",
  "key22": "3Uc5ZKzZzEi9JD1fJtF7V9muUZYVXSvF4kc9JTwHxoNiDVCcXSRfn23DE9kiC2FE3N4MtMxnk6W4EAH1KF8P9F9",
  "key23": "2oLjZGmapLaY9nANc3wbGGgg8vwXypWgf4d85KWZ2bGhxsJfcU1DJTarW3EEY6TL5QWT9e8FGHkdneHumpeMZeKS",
  "key24": "2dkGBN9MPKKXmk2e5vomoj6xnvPDimaLVtfee8ndMSWqEFVRXNDuEi1yGmLibbPpPfmsqq2yjhyBosbjwQDQyioP",
  "key25": "2GQ8wJRrZJQh1tNQu4boUxK5WcuNWTp71dZ7Gy9n4BgxP5FFqzAGQgdVRCbSnPu2DeV79iz3Gq1eBaMrawcZeTq4",
  "key26": "5DDHBwaHqT91NP1k4zfuwYsjAAWWBCiCpLmweWqdVscfv5UakWyxKRo5BANN3YmNXHE4u6V7mWFhRKVHuDuYFeVM",
  "key27": "4nHMsq64dEpa8QJ89ee7CJYdVwRM39Fxpk7nLDZnK3fLuGK13oRJ1FfaDtvimSrpJik2u2M6FstJRDRQZpUJbXT7",
  "key28": "5AczfQpeNoo9dTotb5BN5K3z4UnvtcHwnY5d837Eit7zkEj8jUPGpzB1RoB8qzdoxvKkdj8FP7X5JqFyYuAs3erj",
  "key29": "2dR6gvWuDAvmizTRsFZSKLcv8tmxBPYoEyX5EUk36TBcMUAGQWAduDSxRU5qmV9MaLWwLSX2GKL2Bwn9HC5yop6p"
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
