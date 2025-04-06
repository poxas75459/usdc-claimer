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
    "3cDXH9fXxExQrReVoWxFktDwXgocxMPNB4rfuLHiFGVcAwVrZRzHuxs4DvhenaotT3rRqGDPjQwxTXDhAsa8MKLd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DyCV1MykFYMwYHDnjMsdhFr1MTXQGR2M5qJuE5qRqggiqZc4hwsdCuVesDFxsL9VfQh5euLbUAfbdmtjBbh8nxG",
  "key1": "2shtXkqDWMLYDhEzzGsUCfeyRaAhG8s46ZKaL95RhjPDrQWaKcikWyG8wXgsvFxLCb2Mw4NutDt6idt5Z7F8x49e",
  "key2": "675qyJCXGkfWSKqwnKnJwBHbbp8FoDWQEtsbNp1ZMx4xWKSTPGyHtqWsmzcrCcqUQChKEDnme5EZsDcfzB32zUri",
  "key3": "3bqzGentV7XyixYXVULwwqvjrJfQ25DNoCF5aXpPbSZyaEwG2Ld8Db69LLWiBi9ZMUff9dQTxXQRqpJu6SttPGJH",
  "key4": "2TTVTHpYg9K3xpQJRuSqWbREK7dwy6nNUCM9DgbYVKfqZcqa6SuyNi6LPrTpe9NqNHoQAC39Xs2npKkpAyUL7zwT",
  "key5": "3Wz1XECYfJiQtyhEiEq2sZVsRDizRNtcQNE4pBHKEYBVhhcBUMn5cAUciikykeo7WEdtSAuPtmkxPZDvLiax3s6i",
  "key6": "3FPrxBR5jyKsGih2ErLSfpAipXsvABZ6TXAh26xLTRQa2Dbyx394ioiiw6ARHHAbW32ntzAWB3TTKKF7jsD6RNB8",
  "key7": "4mSu2rUMPEJG3hknDn3TMtGmEPQx4E4RCSmtfYgMwhtVpN1UHKhiZS3GiKYC3no5AhF2torWM8sHxthUUcm79uD5",
  "key8": "3TF41aJGfMyAADK6N7kJfHozwJMPidU9zLFS7JPuPjJhwy3AWM4SnYLdHnibTcvyA3wZFiqzLb2e61xPiqY7fYXg",
  "key9": "52HWsq4CVQiLqhtdL2cvukx4D6QkjS4F1qyRhZsD3bhNWg2z7yJRP4sEpLeeFzCmZH32fg13mnz2QPmnxKRGhAVv",
  "key10": "4U1EVSwqt8hUSaDjWv5VDi8P5eaJXQuLTNaUddXcmdXYfdShT2PQfFepZfMu8BHG8t1itFSMCGRM9sXYgFy5fQTX",
  "key11": "5tBYGZFoxtRc6mdrXYq5AtY3xVzn7BnEgnZR7y4YYbtG2nP1CuFsDvi1eB3xHP5t53h5KxY9uawF8DuVTyUFP6Kk",
  "key12": "5wV5m5FE7DNYKTD7cReaa9puG3WrfnJ19mSsi5AqNR5BDTMBEV8vdrdsJg3FR8BAYxSXbVy6F6WYZkN83jkXrq37",
  "key13": "5xxYyDpAezdnvFPiZ1q74GYS7FgHehfHEPEyCG7oGWEKZ7oGZgCkxrfuFCu8Z3X7F7jSKwriRVZhScBUBJRigYED",
  "key14": "5ycFL5e1Fgidr5oRJGEybJWy4ELe536K1S8j5HWzmSaYx44v4Gg2rYSx4xWQDo4ymB41iReepxm5GKZxXcr2Grkf",
  "key15": "4H5c1pWGmdj81BNyewjgws5kDYLhFPLf32NczfLfbCKhLPwyVsLHg6raRHbyVbJXhQ7ePdkHfxb1KPSTsM6vi1PG",
  "key16": "ypLWbAcHKtPnnehbDNkgT8JiBFGHAMyhVXtHW72hNg6iQcGzu8GxjQZPkVfYHZk1eDZYVNqFE8JhuCzrVR9Jz4i",
  "key17": "4e4qx5zHGJQSE7q62H4cUoxMZXeTiJnF8usqymTEB8RmZXc2HTXzEKvXNezAPRni8DLBnuStR63954Tm2CRSdkti",
  "key18": "QE1Pm2VdEa3ZKetp7TtfcAszN9Y4ewnD7QoDSFP1tYWi5hyqgXCbDGMaSoPhfGn1hhGFBPD7pr9NjfhYo7FpZ8d",
  "key19": "2Y6EdkCtSUwpjsSUPaQHTnU4ueBW72BbaKDncLdUjLxhXXu1cuj9xNYfnR1Kttp3MWP14VM9uNUFk5yB1EVgmWNF",
  "key20": "5Hn9voZ97mPT7pvEey8Z3JdEPQad4TUwtcbDan2ZCn4LuXbgQHFRokcgVc66ZexuAYMQ6xwhL33wsBYqynZxHhuW",
  "key21": "5vZhBwHKJ3J1iKSixT2vxdRFKtgnXppJ2bYRrH8ax4Tet7H3D7D1KzU8wQaq9WUpG5eW64Aggt8z1hZvYRZvd1mx",
  "key22": "5KP6hEHS1bWFFRtLE8GoPbxgzcapM3rj2CMxUM8Ljt7iGt3FuJ3WaysFj8C5cPw7D6qgKMj9TCcuzU8STdJ4rqEi",
  "key23": "pkiBpLortbq2KKWpNDxcStjkRRjbWWSyQfaYHj4Hhs4BEPvLn8LRYM8vaMfbKbWRe1y1j5tBMHeSjHk366nXZJq",
  "key24": "Lw28PVbhBeHbf8HYgPeDMntTCZKygiByctiqnnZumFRiwQHJ7nY4mUh6isJwgxq1ix1G26gHBLh7rHLqc1t13Hy"
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
