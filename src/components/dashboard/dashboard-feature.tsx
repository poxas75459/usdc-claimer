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
    "64trDipFPdCw1k8BZSwDrWmPb8zjrUdoeF3syT7hKJJRJX5NWbmMPyAEQd8nF9Lkt1nM9s3DV2FEz3Zt2mm5HoQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38zofJ9gfjWrxBHWecf2iAuUZiCwGJfUdF6VaZiNmN7Jxz69yghbjyizdUBmnPxAqygXt9ieXGmxhNJYEgARRd3T",
  "key1": "5JJkpUK3B1zfhrVjyBbY1suaUkrTTfHXiiBZLoqysgeqQjF9yzXSe5Hc8vB1TKW8Vy2XN4AQTuWB5PvB6C37wwaE",
  "key2": "5b5AhTC3CMsXTbyiWsQE2SfsE9GiD9Pv6hMhHUSCKTjuw13x5t3ap2TVTB3xTTRYWZdy1D3TiZtfXycoJ1pEkaqy",
  "key3": "4aJaGxTD9AcBx7sCRcMuQ1MFeUbW53WrMhkbCSZsdGbC7SCcFwcZFisMw8oAXk9ZP2MR1XzqfuXvfWNyqnyvdaFw",
  "key4": "mv9JT5ebYPS8XuQRDggVgJ2dvzB2sWGdesTNj1QVxaXASM7S6EvJL4ivFrZFpjUq3S3xWDqLPsZETidebrCopBs",
  "key5": "CYeTHTpZwbkiikQ9QCePzQLbqs7AZHUXK5d1oagGMJYKFTTRCQa1J86R6r9NZti5qf8za3QQmNEwtWFaj3iAE1H",
  "key6": "42ycZHP9MGY5oEHBQXumnT2Ky8drRq4qgqzY1BCYfUy1q28W1T13YUp23jj7CNHk68rQCrCP3B7BjqpcnXRt1usj",
  "key7": "4tncNvyscxYr5bAimmDMpd8PSTLzo6PKea5jydhArauLoup6Et578i67gwM5Uk4t4auAUpmpuS6qJPihZAY6gh3s",
  "key8": "2QSJ3jfoTSTkJiBgsHQ2bvgZh9NbN5qJkHfjEQ6fdkH7zm4gbNEcPixjK9nrathqNUvFsHYPmCc6rLMCZ3J6m1ao",
  "key9": "3Gu4Z8TWH3mtYuxrDieikHnWeRhnwVTCDdb6hZTJzvsi2mEFAwrC13Wr41eqCMHdzYCHzMLt8y1Bmmo925Y2LR9m",
  "key10": "4RRwuVmF1Fz612qdn8gaQJE1GXHZwwczwBrofBNw1j1jmk7oiuFiaLnuK2utRNXRBuRxPhEnDrgADbWP7kzQjiz9",
  "key11": "yA3yetoHwnaqhTFuCywsmuhDxXXvVTmPH2KPxegUeYtwB4FAiMBKQeACZ7ptXMzrfU6xCGfQKYs8JrBEGcvvUDw",
  "key12": "2ptQCRB8myLAu7zkWDUGebNTtyEPxq2myBDFj6WSgwgiuYpJBpaGhikucTZS4rA7FKeMvvEaAGTxi2Ekmwoq4dcb",
  "key13": "51rVZDPEJotAUa22ox7TLoF1XwkRyCTRsYw7Z4AXVDXAVFTFT3sxmRhHseex4xMZE5druJy4XN3bGTWLLGZHYs4K",
  "key14": "ZEB7EhVrZtqMZW73C9LpZ5VPh1BBW6etvuxJ61uWuRB2wE6EqBfgBY79am6j6juhYBhMqG1VqzxFLu5mCaUM2ss",
  "key15": "2P3C3aZN9NNE2tQoeLbafEHR9vZMfW5tvime9Ud5GiHfRTCb8aX39VDFTetR9hqWpStgx8jXgU9Tj59Bk19a9xV8",
  "key16": "2p5xVb8yu9h4Kw3wBLN2EVU5U5sJMytC8TH7DxgoTd1x1YzSjFWGNyyE7GKPiMeer5fVJJUjHu6sYFeV8dctfPv5",
  "key17": "2pQsjMhmkR8WevRxFzoP35rTeav1cSLE7R6Ba8jcJemA9MvMt6Hhh6QynaQN9gcLjiUTsVmEeBviLrKdCAQQJM1j",
  "key18": "3mzkiioprmKU48nYuPJx1zjPfXox8stY7cxVCViAxfopEQWmi3s5YA3sup2tnBN9sJDua6gKGt3LS79kMhQQJQKE",
  "key19": "4HaDeC1EMMpEMQa2DFbFGuF9Y5wSkRHETzfogtXXL62k2JiqaK6MEDADWSSjfhNrFJo82BUSuTqJPziYe3tiZbw",
  "key20": "2qtRPrPTyL3tiXnUTabAJjzPFwXdJYMNwU19VcMhdKp69LuukgZRF83nNoMwG1SAUPWd1agpQNG8suUUdSYE862X",
  "key21": "2UWW5o77echukb2AisHqy8sDTPUXwSDWxt8x156XQ57P8ww8t5S41GsvikYwi3do5BzezHpkqLpPn5YG74xqwjKv",
  "key22": "2K1puGQ4qvb18X548C2dKFu4z3K9bNgnJFH4z2hRvYrCW6cxRcrDHaKkuYLPJkoMrWaGEj3u7D9rzdbAF41pTQoB",
  "key23": "5E1b1c2XVb9vD7NNmKxZ7Vz6AfcDfWF2RQq3t7Bb2qpyCuDxFiJTSEaAXHJuvSr8a6fsWTEGgg7iNTLX8tCRTaQE",
  "key24": "2WjLNvFg7X4jKFBXWacqft6y2ffX4g2swYJRBa6DexCjRaaRwcR1GqG6134Ldu9sFQ2oM2mAakCxNCUYgPvuhYmM"
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
