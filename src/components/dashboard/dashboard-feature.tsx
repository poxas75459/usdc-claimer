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
    "hs7UrAvEWC1N9y4LXDbeEeAHcu6ape2z9HFpDR5dxv1BCPdWUJHncCteJiWwNfzzXanF23pbsXheJyokXXidpKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UrzASXm7YuwQqFo1A7FuCEx3JpADKJsuc3AxvMg4Z44qLAGkpq8hAtMy11RqH8wCoGamfUCfoCjGcfRZ8QEU475",
  "key1": "3D6tkdHFjaPoZN6oa815tqKZMkjMm94EFjMPzJ5FGgaYMwXSPrTfqK3mMobGgZGcPiXxBUTHu76pEswm7H6es9fN",
  "key2": "2uvr1ybUbGCqXfgQKxWndEciGrYTWfq1R2UTiuJ89sn9thKbxu6QbJSLN6uQemkadvXP4VLwKp3Wj2Qq6YF7asTH",
  "key3": "5CyanW8nvct8TVsCLMLReRsRtvkUk85XNCyhiLvTk4MDMsgZCPiSBog8YvjNgYVsgxzLKvrUZZHfEd5gURsYt5AU",
  "key4": "5zfzcMPuqGYapo4thYorw59iWTfpXZnoaGGi7itc8vB7YTGSBZMim8fdUBbdRgg9pEs2k23JtobnC9ebsHjEuLvi",
  "key5": "3eDv12HgcXhYYgFF7RfD6zSB5e71ymcPgQj1sF78ydGApxsYzMxZP8tmZgsNfuA23Kvk46NfrmWoDscYpQKTBFGM",
  "key6": "2EaHzGc8VQHcjEe3qTxkuT2tMw2xy86p7SgEAkuJXGMd4UjxCP9vHnDgy86Fp79FegPMJ2XYFw2hu1kMuihPnsSQ",
  "key7": "3hkMNR7UY2NVMCZ92VMoW6eA7BDzSw7KcV8dxgdZ2TtN1mkvhejZecmzaphmb2XXz1vvPiAT6dH7WMgmW5q9Qpd3",
  "key8": "5BdQvHUPwsftf7BoNAN9euUoLYSzts515ouHUFmDpFepX3qbMB4Df2KKVR3n4wCbCzyupyNbJsvowLo53qw7LrJm",
  "key9": "3EnN3WWBagB4qjnUAa2iEwtfqi4Udd4tZi7wESMeDhhuiS7aBJKM4CvVhhsavCSji5KRaQzkWgGx6MrF62r3SSij",
  "key10": "2hovGdzpVSnt2iD7QLWncMJQE38MRt1m73DDf4p1iZktRHtAM4UcXPikyAeVJ5DJCU1BNzvuGzjqCH19RhNJVu7f",
  "key11": "3MhK6cdvXHKwFxUSHw5ucbWpBBhvD4uT7YjYqJ9JjBxGNj1oLTnSUMamX9eXqPAnMjiBwGg2oerFVR3xYvAvR7BB",
  "key12": "52KVwHB45b6cESk5aNAAxtC5JeHfEwEj8A9rgaRz5zozKTbf3u6GVoMKwJu5jwtihE8qarmyXFTHBD31ZfA3n5Xt",
  "key13": "2H3hEydJpx95WfH84AsPjbRVx3afYTdGdc4jKYpQKkeUwCDKreHEYmQPipqTobrCaEMYkFNKUjLGrkXVjEakdMnk",
  "key14": "2xvJymC97CE557tK5uVuE1tCrQvPVfCdU2D3UUd9cADeiznFmg4r8y4n7QKoNEYpQoZAgBXMwe68R8P9UmDFRRTj",
  "key15": "2C2aQZMSu4BpRUxeDtMJiFDa7mRzK6CbgeDsp9ypLHGXSjGjYUQSjCcx8VSe3osMUSXa3xSqUgug3PnqpBPhq5ds",
  "key16": "37WgsCcsqasSwMqBqAdpboTMPAgvbs8x6Yi74oXMFXdJYBxtZWLKzY3WPAbV1knvVViA4uaKY6Y8rHRPQGdsJUHo",
  "key17": "2x7HQeQm8DYLwfSGB9AjtygNENjL3fjN4TT5c5Dp4ufVaio13T4gNath8C78huguerM6pK39GAM1mzau71VJGja2",
  "key18": "hMRZpJj1M8YnJbt45q78Y9KJgHaNuFDRTQmae3UH6K3B9SZzH9b5WFV5hRXJYiHXWP61uwYwh9JXtov9dSPRS9H",
  "key19": "2Bk7XQwSrwZCt1nCM3KjL2t2AKNCFvcN9K5gsndokwsgRF4NNYziEC33VFrSqxP5jycTscNBt1N4SF3eAAPcPHw1",
  "key20": "KyrkzvapRFhhZH9FASAWLANVpWUouNyVAPjDKzE82nqJutgeqemMz19R9JW5yBJAj7HNAT4oXF74YJgnjiFrH6E",
  "key21": "2zQgN8YGZftTbjSE5h5ddzTydLgroMXi1HR9TgBwkc9bTnXYCPJYLxt4VXZrg2gGHDHc7VCWz29DyQrWSAWeX869",
  "key22": "3mBhbh5pX4NWVboFX5w3xqYrBn7RTVMcdGB9zYZj4yifbFZbiHzoNfrsTYWiGzfJJUiL6F5fNkCXZUs1Lg4C27jV",
  "key23": "2xVVyvPmjpNzbWLMRZEXfczDo1fvobuP12pJJbNXFg1XtQeoUKu9kPNs56cLDd2wnWSzdgbMKGe66EpSD1292hTT",
  "key24": "3Zr2e3BYUJNc9inySK1hDr7xB3MVrdJDKjnsnzzHdHcy19HnDB5PkkDakHZbErsQeZcSsPUPveC8GEVufx34zDB8",
  "key25": "f78DDVNgmbTGAGotyP84kxR5qv4An8asWhunoyd91qYdGaVVatirhWrq8SRKQUPAvzRncXDYyz9DpvQem6WiFPK",
  "key26": "3iQjWH8weqSBuRFNj545uBCXYme23R8sas9bU9xC9BLqrye82BV8KN7xfztqpX2hCcHmxahs7aUWP3fspr7HHAEh",
  "key27": "4xLHsREAmv715tRzqGEoMVJFTo24CUPtopNTNa8KxoCqcDbS5L9AmWbUcKdDhBT95zrdQSh8Dz42tpzhnjPgPpNG",
  "key28": "3pkLpM4xzTit7N9NvdCx8xsa1751wq7Mi9xu5SDRHFjyv3zE3ypNBoHaSU1Uo7Sazr2sDnHTYVcxixBfaCtZzUMM",
  "key29": "5huDekSSAufd6FFTxWY2fB2mwcaqtSUkC8JAKeCMyUMoNAKbNvRHwdecyEKNTqMZCdbLyn8Km1D9PSRbmwgxibqT"
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
