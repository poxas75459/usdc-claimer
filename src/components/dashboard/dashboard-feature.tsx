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
    "2UrpW7yVB9aaGwPWN8NFnXjnVUc4wTCBWRjBXxEqAJ16mqt6ARSsEwKNbfLNLJTTB2KCtoJKKbDPYdQdargVWFud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yML1NJfDyai21twTGRXQK4PL7m46GQpjBCekh6Hbbmhed5BTeQg1TbotpEoED1NyK9wQNYLsrjYveK6bnUwRvcC",
  "key1": "4BsdVkxpZbCuufwiF26g7JkazaxLXmGY7n7vT12TtuXq7baY2KjQgteqpT1FD16CqDdrL2k8uDewiiPUBu56eLTF",
  "key2": "fXXS74QRuwbC7LSxrobLBDoLJCqSFL8iBSwCFpj6QhchHv6vM1amQDrcdarGPsF1hH5v9VzSgPcb54b7WP9niMR",
  "key3": "2YZ31i9Q2DzSSLTRJMo5pfqz8fRHDiSdgmKbyqpmWtgALRdDGWcsUufjJ3aETKH9ijruhxNT3MzYcS4xm2V4Qsai",
  "key4": "eQAN1VCxm4BACRhhHrmcc8ixmZJLiSJFL1xNBTCpYnoGYRTTa8FZtKcFDrqJJGSekBEMfoppgCnFfM6VrX5XH8C",
  "key5": "4qcUzW2ECDTQ3RgwU5UTdbrGxUohEa2dQHHGns9HbViDGSCFv8QrFzEXVXY6UXXPaafW7fgGdaCp1fu1LNVP2Cmk",
  "key6": "3X4Dhosc3bfnPGMKJ4EvZmZSE7VN6PHmTqiUZKRQFEvpN7EQjoRon9zB7Bh7cjjHAnfsy77GPUtBDGgtystjGXws",
  "key7": "26Jemfgnk9x8f2SiLSW4ck5FevoerhRww4HAMgjjozfU1PUEUcnFXsjYH1C7oSiYo84LKUr7pPGX1o4JQPzUtZSR",
  "key8": "5EiykrxWQkvNjympUfTmE6SdWRW2C6G2FfekrAnTAWcB94a66r7VimiG8aCwNNwvyZthG7C2pU4YPdkXdoyVUeEH",
  "key9": "3KixHE1Nad8MY7sHtjBqwmwNUAaufT6pzmCaveVdKYTjawwH2uKQS9x6BkA6JvpfCmBSjwDy4YYXF3YynfKTqV7E",
  "key10": "2u7KHY9pC9m8XUbqCAqPhUa2tjegom8K6tkiVZJ9tCiyeqYLwECWjvMC1qLtky9h4JsZDP4JzTDYjRXDea7Psgha",
  "key11": "5pGGatD6os9agcMWZYcVFADUTdQKcMNXyzPeRwJ6NaNtt7jDHi9jRxYnDw52oZiEzLUzsqQmARk6u3g8FtWj95Cp",
  "key12": "4YJ1wPkg9xhuUg15YPB5LHvqcEhdEPgvxQ38iyoALErrNM81gsvBKHXYuYv1azothr9ACo481dqnJXqXZpAVm8ki",
  "key13": "3giYvEe8AW6uMkeJTg6m2Na5usxiJybLwMabnyUeXiEEtD3UiWoFyAnMEnGkSoWsa5iEoJNvzuQLU5HupWfH9mMu",
  "key14": "2JrFDdc7vKV1GUCwMcqoHWcxnqxQZCCQMRWN8H5iYcpWTok3To7Vzpjr6orNMWty9AL367PxBa1zYbMChXPHz2Uo",
  "key15": "AsjX82oJaHJLdcEG3oC2ffeHrjiZ85qZFNzvTUyqCXDSFxrcBx181zFL4LghfiA6k4CZvRXt9FFmadihxzG2ugP",
  "key16": "2yePWn7ZywzR4UQw3oJKDupzJSGacJncLDqkJZSAcTduoeGBRtEdeyt4YFGHrHWMNdTFkvFNHKwZS5UfMV7fd6XQ",
  "key17": "5aYGM3bVrwDTP44ZGkS1CUDxY27VhHct7QdUdAKRhtP312eqmTqMRV2SXaueaiFaGH8hoHLXCkbMr6wyAt762zZK",
  "key18": "Y6rXvv5BJzvH6wCTU7HSxdHF9KbdeGnhRbPWNAijQpMMbALpTfxiRNPamQ6waKndUPhDvBEZ43YUzykkd2L8wjC",
  "key19": "4XN2DZ8UtS1KWwiVX2pCmYtovNyNfD4DwDUhszTV4npxToisCAYiTKBKaXr9ERUU3raCRBgxp64D9Qkdu3MmXZ21",
  "key20": "3o2P6XUtsB9adMZpTByKNaDrFBzgPTvj1qPa2Z9ZMX2AGSPHU6Ccbs7u4y6vdC5aGgLFzgnVda6sJ4rnMZipdhmC",
  "key21": "57StTP1xKohpg2vXAMtZ85NdsgJaJxXJAwBzHxiFbKvz3aVQmRxsUowvAfYNHHHExdKSLNmunD3HdF2zvmAXmraz",
  "key22": "3wVtw9RsvLBC98bJQPZthSEckjcVi3zCJLi3MMMBSjHkLBKQ3hz16ZBajSf4Wd6SMyF9kqJS5yxUEy9R9rzEgAZs",
  "key23": "5wQB1uSAUdV24Egq9Zv7kUkNHxcWMeXaDwsdVjxkhNiVDquyLuzL3LMe3kxUsYdpBZXRa8vdecGwzYvLMV3vErUD",
  "key24": "3o3frQ597MTZnrdaAy69VRsUq3kLBMkHBtKmiGdR6oyH6UxHhFryK1gqh2uZVU7W6atr7AqstTKb6UKa8ekQLAsb",
  "key25": "55SimgWpz22GRyGMHSm4GdUvsDbSdc4N8TqqNfgtBike6E633FJpPGwUyMNP1T5F4qGswaza3gGyuHX7TAAQmwWr",
  "key26": "RN5sM4MZXtWvXe5mG7d6FS8hGkZ6qPHXFpbbGdNZtpCubas5zpqW2YuD2BYquns7KDzhtEuJbzkjybJ9wks3pmj",
  "key27": "5B2VWRirftFXFC8P6B6tkHtHF8DeXkgVqJ55bcJPhMAykLj3t4WTqGQYA6N6WadTqtYPVJAKtYvU7htxe1D9gCai",
  "key28": "3kRuFK6o3tcUzB3eLL2j8iaccXkuXjj6tfMNupX3ThJgXc1PdfsQt27QdJpjW4Jkk2f8pwZ5L6pSJkzKUzZYqhDR"
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
