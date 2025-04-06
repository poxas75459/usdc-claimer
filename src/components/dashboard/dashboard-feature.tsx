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
    "3nCa7xGerGSt1mxxaxsmEZKfmS1WxXxJTbXL5RxfWiBGXRd3JkaC3HiKg5Gy7gc5rqPssqug64DmQH4StUM2zxS7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vMi6svbyfv4hhdXzLzb9Lt3iULJ4faBKuCAk5ZeMNY1TnqjSVNuk6W7UXzXCSCic9xYjzDAM3g8XrdDXSSnagmZ",
  "key1": "5GADxuUgSaFS6GZaT5h1SDPAo53DUsZbZ9YeXue4ymkhbo2bDeq2hpgNuniYR53KxH6gmY5MyvaTQxMinCchvwem",
  "key2": "5rJPHujsYw7CwxcrriHHhoMAukXuEmsVnUF3BrXUu4J3w57N15gDNQVYTu49d2WBKUPKXQQCVQXTjR9PstercsxH",
  "key3": "qfP3GXyjPEwhXJekbAjBXZ8bLiudTgkYVuVicxQQkbXmUrrM83WQ6Tbq6xWudS56rXPyS3YPpTRVXgEmk8WYQDf",
  "key4": "64ZJUPyTtHbAHruVeq7dEQye3SSx7MBhdEgEmhyt5AKGaPsedszbQsAGy7GtQUfTRxdg2zDS6iXvTLfYKB6Q7Xu7",
  "key5": "3v4DWivw52TYMbLCHSvabMDH1VUcpDTAVMPiVadLN8i3W9MWj2JyTLcpT9ghQGvyNKzLsBK7NEReRjA73koZR9Gx",
  "key6": "3aasZdcAsu4Xr3s1LiXue4TMVg6moXW6rLhdANq3bCbfpveR2ncKDbiZwDpAFGnA6RJu6aeWoMwPvq1Gt1BZLo6E",
  "key7": "5TYnKoFPhiSA56yujrszDqt2zkSRTQJwQYakYaDiUjgkpebLh7JvX5QZBBc2yHE6eNFoHHsjHu4HBehgYX4VYWZH",
  "key8": "3xt8D9XCkjQfyQHKFnmJs8zz2XwDeayw6dmqhSR3cdX51qWvqGYWt1r1Qb6vrXcL44QyoDHuTSJ4YcPDddLGkpwz",
  "key9": "3yDSxn62c9w7PD1ZwzKnJyapYFjNZcXiywrLHUtn23zGJYU4Roq2LfGnFysSYYzeqmKWJuwUizoL7L99T6X8TcF1",
  "key10": "4jL4Xn7VsyyyxDbqaFSjhrghuzwbJgK73K65aFnejzAnALm43LUh5HEuyB4WkCD2s2v9ZBiByyCsoPw5tKBe91LE",
  "key11": "2EFfL7oTQaWtrFcqCbeChNKGrDQc7t1wE9Z1DEWeQWdmtuLzVYgwBFbj3SFUNjgTx49U3MFLsDWm4S1DzEvpKWA4",
  "key12": "2WkGGtfaYr11AbM4kktacwYUMo8QpUnkfXmNhLjJ3wcrVFK5aiZPktBfgxu5YpyoByrfNDesSrmXeK61vV55QXms",
  "key13": "3aaRgxGjZX4HASFNpCLuGPcQU8JpnMw6mRB4xvsBuf6JmftCtM6WhXcU5yNz4c8qLkndXBNZwTwGFXr9LP5Ew7eu",
  "key14": "2BHZpNLV8GhKRGCeko1a4LADCUCWvsf2M1V2NShNbMrdFEP2QxA7Jm6n6wAUHGdb9WNqiGGPrhhj75ApTDid5FM8",
  "key15": "3aL6HYKZXhbo9sLaxgoLuaNUre7FXDCtxCD2wj8J2c4LxJMfSoHssimahLnbDSrRBsm2hjHxWZSA5CDjCGQBjuaZ",
  "key16": "8Aq42f7qwyfV777Cp7AUW3et2qmXkvmJ4BW8zkF8eDCJhKfUzDwxbCxUr7whp8GXRaBDf82woE4AZX8KLKSHu71",
  "key17": "2CHeXQAdS3gwBted2EKUZMSK3HCS5n1qXJBj27r9cRruPSL9gLTRwh11SnYkezU4DQHbAp4dUxHfvNg2f3CiBUvy",
  "key18": "4yjqqWHWgVcw2DVe7dNaRa4HhfrMwNnrPKvrHPt7rdh5rH8ho44WT5ny4jQkL7Fhjxnvp5HGpPNKgYYiNGYbDLaK",
  "key19": "4QT3AGP51wwr8gPNPtqHivjsDzpLfiiBLDEjT89WJzJzsW3tHSkwnVnNLUGtH5ENtcyywAoHG6EVXmht7uukNuRb",
  "key20": "4cmABgiE1psFbbgGRz5iwU2H2RdDYo8i74bTRvQszfAYK3i3qgKHginsCPgtNEHUNDT3FtnFfTLqYBr9KB27P8ya",
  "key21": "2AWPzrmpBCVeVZELAr3s6DtuYjPXBipvdr5oXnCTWqMVV3V2SmD78st36cWh2bfhAJSZBezTqPs9hid7yzY4tQDw",
  "key22": "ytj5Sd48MWFL8PAtmVTPFBbt4koCWH636kEvPz2yQwfdgKQQfB5nF2FqWWYti3GDQmJcFEu83W5R8nqAf5Y7XgH",
  "key23": "LfrPR1W8hzBtAkkL7W1CmTPCjt14Rj2rPmASXjW7RmoC7eDbSvQvJ1EKXj6PKK5gq8mYEvJbNZefFdtTE1QyUoo",
  "key24": "5ohTBH4CmzcgagNAu9ZaXPcozcfS7fprCkqKVfpxeyEJXPAahMjPsFgrndefzsZDaknt4LPheWK4wXK1KUJGjkEp",
  "key25": "3pFK53ngfG8yjwamvobr1yX6X8mcQyiTC68nMwcEXz9NsYoSnGFne7LJHt2rAqWnYPh3g6QesQ1NLG8LavLZjahn",
  "key26": "4WDNkPeLAm1CPiNaRDJDkkihWsFyfiY3RPBB769Z6CjjF3p8WVV3uZMY6vzw9QsJtRmgvkushDGeRkgZYsw8VLdt"
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
