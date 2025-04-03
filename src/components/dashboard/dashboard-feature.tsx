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
    "2RgfnYD3BGRRzVXVrGc8qWWWnUJVQZupgG7vER8AVP6NWJab6eJUAejnNnzUDWEpU9tx6oxCFbVuF2zKPvisge9v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vdFz8gAu1mf2159S6tqUUVD3B5KuY1KGoZi9msoWVkxQ1NewTAfiUrq4VDzdP8Xerb1gZ9ttNWDKpUSHPNiw1sw",
  "key1": "3pBzS7U9qTHsya18KFQ9mk6YpZHjZFCuDVWG9Nx2tSEpHug4jfcCiKbAPo5nGDLorztdeatHttmAtmvjtmG7fdsK",
  "key2": "2pAuxdZMTKNi86agRNW6jdkh98BSmztpqoM7SmJAmHraX1ATsXVEsAq9aVMapS1U9xhEW3zTpEP9HcDMbzcPpLuX",
  "key3": "5VC2A1oqqgbSs2GDdiC791VJtn32dCk26ExFDUndDbmc9HXg7MUsBT1jqVz8NFAQFiqKuyXTuYGKFHavxZuqSB6T",
  "key4": "3BPyRySMVdwPKMzHbnuXqFPmuhzowm7NSECv5iYj1PQ2f6kmUmWjkiV6W8eKYSSG1qN3nJmdmwrMqzuDrkvrN1Ms",
  "key5": "2wPiUevBHMntecwWro2kegMEmgXyguNxYFwnjDBNCEV39cDkPrF3WzxyjCHzMFkLiv7mQziUmYVikGvs2gLj7eDm",
  "key6": "29zZdkFJMSAU8r2NPqE3sGvTANvTKH8GbrCfiucSKDJkYRtMeViNmKp8ARdy3gGEuoLguNCoghAHkc59eoq4qW8m",
  "key7": "23XKL5ywdUyL1PLKkiYxFwDHUEQ2XsXpCKuuEkaWN3Y3AHv2tKATbcUQ6aQ9ahfBsRN3AKpsDoNdPufRvs3KzxKV",
  "key8": "469tXfDJHwpe7adZgtn7MrsjHfV8oPsdtAh6PSpvzLv8jJNW1ms1Ubf6ZXXPHahfpQYrzfySxpwSr6oG6ZXGftq9",
  "key9": "5rJtvyehKtHicM7E777n7pMP2hAAqy3aPqDyFMnkF468DNmBhSzq3t5Mo57wvdUPXR9zct54mCdaV87zZWhP2bFF",
  "key10": "4HtCYUJAXRR1gvdPLzQS4AbhUyZXvQmgEUUEDNuv4JYVYTDBFrAwqUXft4FjPzNKwoqHtxLRNaWsWpAhfRCzBHvZ",
  "key11": "5YHr8VZaKmueDgmga8ot68p7rUkf9KqPF5HRzyeBNC2M57VaYnh6qFG4TwDbb5wuaktA1W9qrryDDPF8cGB7xhbc",
  "key12": "9xbdVEukkezesypGQkcmqR6WAH2XeLmMpr3HTijgFSfBEQaFzHW1DJcqa48AW1wUtLPs6KpgWczo6JYc4mHnSgW",
  "key13": "5r3FkL5a73MDD7Zgf9PYzqcnt53TugF6K2D6q5v4C1rzqkHk9WFYU3oQ3MZ9WLBoQC68gLaNaEz59ZfCm6tMfSPC",
  "key14": "4hXRRnzUV8CbkF3ZoKXkCPbKd76zLKrYMcftcVAkGSjCaksY4xeSFCz7zv9WpPXvgtrNv4rVcehBvquTmKpjUx2z",
  "key15": "3XrC6D3yYL37LDddyLffSAjWhn5Jbkks1x1krBh352hneMmUmNbk2RqZoBeU6XNpFuVTwvAK2H6EEDEKGB9G4mbo",
  "key16": "2uVAGt6LmegrtqrzkhxdFDTQ4ZfW8Ys5EuKKk6g9JGt8bR991bSEL8qxkPymSqtPLQ165uqEd3P5cS2G3NWzf7Hc",
  "key17": "2XbVaQDan7uWWrijZHRExdsanRnsB8WuCKr3RpUVrzu9ntPZ83eRzR2pJxVasnK2HmoReVahjx4VeRxMEuwnMmN",
  "key18": "2NTo9MMN6pPbYNHJkRXEeuUjBw3JerLvxCcsUWsPfSdCzXxLk2rSinMV9rF8iBDttBZAC9KWRmAWFZP18Gu9c78Y",
  "key19": "TB6kFAnrVM5iKTxxjk5qLCRf39S2WWcCEQyDPbFUVPKQHPeMKFSxG1WhA4JeqKasV465BPgwAvfzb6AwtnHAUQT",
  "key20": "43THcFAoFuiKiixGRPMbsPNbGxKyQkYowRARCAh7DKqiBBpoCGaRHkPPu2Kh9usSNNJCwaKPwdxrmAWoN1KXUPpz",
  "key21": "5G6pZEh8G1w9pxbg8w2VrAkm7mPg5GGcHxcNHa8CcbQGDh1WAR4AmqUW43x8avC66PGbfrgVr6t2zrunsUbH8bay",
  "key22": "A9p9BGpHY5QAFa8kikMqGKtj8R8FwbjAdMR52pEjwp1JWzB2mxzKm6RMTLDBy9tWMwsHJyijYdX1C8fMmtqYhL4",
  "key23": "3A3QgYJRwbnULM1PEBTJQR9Txr5WdR4PoGNzfNPqp9RyuRx3X9MyxPuRsza5ximpYaxiMfEjw2sTBdXZHBbTs2Xd",
  "key24": "67c4GTizmQ5zw8eaFiLCE45tem3jnCrFuPtGyDshg8Fx6BmSM7Nb5x1KikXWDAKcU5bZJA9HqyHYZ6vm55yf94Rb"
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
