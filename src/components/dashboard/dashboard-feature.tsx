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
    "5R3twDJ8fdEm7ktNtLGHAX4YdJaLGqGxaD7smFvDabWwaYUEN1YLkyuy3M5iucCYFAvbfxSQrsighFpgTe7u8puE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kU3VKXqzhiMB6J9Mny5sBkiLdpa22mxEVRJsJ8z2QyjWGvuEtMeGMmEAquBKQM1Xx6mrriDDjukEgWDfY1ZAje",
  "key1": "4utZqECfUQnx1kUdZ7zVoACtPuYfotFbRoBC5ai6UVs8NHDr3SqYtGh8Pgi6KjhBB8dg9DXRnck1rvssuxVygDqu",
  "key2": "3nj5vocpaRtvDeiNEBXEdgTCxUA1rQxdszMZxtHFbwpBpjSveSaZ41478pUUxbbTKzkyhAWeHARA83H8wyWaQAKt",
  "key3": "5ChcEnaoiFiKjgX1UCeo4se64JvVpwmdv3GPS6qzyzaSrKGca8RKZnxhjD1da7LihrjRFdUA6Qgk4Vej1R1TnWeL",
  "key4": "sVZqueAvk3SpyMagWk8yxawXUZ4ngczPRZHzL4NW32kWakKFe8WwhQyPdTo6jj6BjknpTFZrTAGp4ZfeG8V5t7U",
  "key5": "2PvysSkzn6aDpD1m3gNDNAa86ikxG5bT3fxNTo4HfntGznjnWmXxbFUbkVtq9c9rQLpM4aV16PGvw4Hbk6uedbu6",
  "key6": "5BKLbZdqJe72vpQAykrbmfbZGjcF7881R2rEwm3YTJmGSVZ6Z42FN8Kes9fnXWwYZiMyF1EC6Y7aV55zAGCbAuPY",
  "key7": "3zkiPpqcN8nNJUuZJEVDht5sZ2BwVB8fh4uAdXXe7ve7daiWZfYdSnXfwuJoMQmsyJhGtuvva8HXuMzVT1Cm6878",
  "key8": "5J5KRGymnpgu33YabvczMP2TM2QNzRavXHPKf2nh3nfFdNoCVvR4e6S8RKNfQL9BczzJE6nKP3pU3Z1DdWxZQkQK",
  "key9": "xfjQUUNSdekBLd6vrwUD1AN1PSx4ph7YQorFheoF6yyviCkfiqEuFDgqqvTHVVqSm41oBjo6CE8cBcmSAHDtTCm",
  "key10": "3Mqqj5BETqnp3McMLsy2kz3a8UzMYoe46ffXm5gtBUpcjWaH3rVzgMCayUrbc4U5669YytLsyRjRve9BGq2JJ81s",
  "key11": "55d72vTNEpyKcoV2sL4rnix54sxzVJj3aqgZisxgZQvzLJJDf387GxF9B9SZ9eVJBUkFariA9BueTdUBpQLD77an",
  "key12": "4weyY6jd716Zz8WvTm8Wjm3ThDg348QifKT5Av5bzJXZUBobBEBgiHsgPv7HUzQtB9pe9DAaavxwocpukeCXY7QD",
  "key13": "4QpQxDZCkXhSaNwFeft7oAhG6VQQdcodJKLAjyu4Y9c7YNsWPZ26FfSVz3AG5rYB4UjYF4DZLGRbjcaCGsHU3C4G",
  "key14": "5jNcn36SfdKDesTfnf6f5xYPdtN2hsvgBYrnTvKsi4hiZxJpjSVAyKsEErxoRofm6o9Qm7Dk5Qtrf5iWAqCWhjzW",
  "key15": "5QaTh2p9y3TTpNyG8cCWrHUz4t3cox2DDRYAFT8bne358yeTQSzUGxPK7eUGc1BUa6bSgNkdpNRKJChA6VZ6Hi8r",
  "key16": "SWwjYJ7yaEWdDX6EEMzRdfjiw7u9x34vqyHkEqwvy75ifb2gAWU5HNUb9SsY6CmS64S6QcpJHNAYNSms6jNeWDC",
  "key17": "44AGChiQJbFGDPEmtD4DWJYp2JpGLqGdn7J6d7rRReXPTTDKt6pxfEcgcVTJBMg9pqFTsxe6TGfo5bA82s2eZAtE",
  "key18": "jLAvA5ixfztArMVgcSD4MTKVpU1oYsdRrzVhZGWVvCVVcTktwvLabGncSC6rfWXfaqVHHzRnXEn8mtyYP8xt2Vk",
  "key19": "UM6NjJYJJ6Em6LHPzLDRjG1sGbmsfn2XaqHTGLN84AmXd6hay9RfHSd7XbcdPBR8rofw6aEvxMUs8yk6xNdDTYC",
  "key20": "qbopYLEEhQ1Q7uMudTdoi8Moo8dmsCucUSibszTzv8FGXysRfB3Xsbr9tFAXkVUAs2w3Z1yGdw2zoedCUY6JDfv",
  "key21": "33SmnG5YtFPrue1zY9QCCgdmNAt4V1Ck7Z8VMoii8DuQfeMJEAuVqq4xu5HWEuEV7yzyD2F9Q46DpYmhzyZXCjRK",
  "key22": "EktQQw4uGnyBnm6TxFwYy39T4pS3cmfVdNBA9Hi4SzJZweoST7pRh8Ri9YiHn4FJfChZyKrQnVLuFET3zdzWnNs",
  "key23": "5VfBisBiwfEZTyv6pLoMrxQCvJifcKK3wJvhnu8VrzufwE4UAkVmTX3iSJTSc66h43ouKBXMhZdVfGNpHQUvYDF5",
  "key24": "2hn1dvempAnz1JXGHcx26WGB2kHorW8oQrz6uAoRydYmMrjbMZwwU3uznm8uQeNwn1Z9PbNkWqufwL7E7gnLCuFe",
  "key25": "4LswSzZqYTqrRs4kRpaUaWjxsak7mVKFyJDAUeviz2hYG4NKhGENihCumBKA5mGZcEEiAM8LWAmMV2ddaKKzhEi9",
  "key26": "5kyp7EDRXfWWTrErG96vkQy8YPAypDPrTir1zVYvKTAKHjuu8JAaCPmKv2sWaUQi9ZkodfD285qDX4xK54Wqz6Ba"
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
