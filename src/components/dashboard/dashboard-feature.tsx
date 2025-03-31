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
    "Ac4jxqvzLzMAsjUWScUZNfZHBekE2HNTgEo3DXwCF7fMquf33ruGFjvDh2ps6gFbK9QGUqSeX8dEMUWKJAgQ331"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xdqjoUN5sDcba7usfpVah9Zzsnup3tGj7S1emm3eYfRQhsRc7BmdyP3wsUPXJjNs6sArC4nT8PjUrn4EvKaQWBt",
  "key1": "41iF5Cc5891Xv6YxUX2saFcGFgrjuamEV8PX1WpykWnShc1JJ2YPRV5z6YhuqCWfDbwbEiUdW2upZ7eohoQzjKgV",
  "key2": "2zb6pWn2niYZYg3e96NVx8JnQDJa63LjRiuipVtTD91xGA7erhANdRbuHyptVVW6gkxvFcKGgyZGTp6YuD7QLdjW",
  "key3": "5ZCvEPT6amhhuwwSFiUc2Xx51TDBrU7uEJY3wVF3JNW9f8e2i6stb892sktBsrSfhDAqkZg1MLVeS5xcRDHmzKf7",
  "key4": "3hHY2M4r8kgEsiB5Rm7Fe4ujuijgjJ1oAxrPqrZLPJMZCGzxSkn3SN1NgypydjoKzVZpVyMM4SZvMSQZjid5WH8v",
  "key5": "2nzWv74b9ztGyhvUGavaZ6Ed2W5uf6S1SFyZz6N7zpKHyRyi6uVBEQWUUDfFT4YHAzLCgKCkwfsUqVVg5jVToezA",
  "key6": "52TeoL19resnD7pNzJH14dtMJHPiPi446i9AbiUxVsrbMGbDeqeni8SppzNPqeV56C4PAJXz24nkTRHhqKju9Drm",
  "key7": "214nau5GqfFFPPBfCPGF88MZqxxqoiKcouyqUjAd2QHkCgXwcvxNcsNufh5CcfCY9FdyFcpENswGdmLJDpUU6vmf",
  "key8": "QZhLR4kGhda8SCX2P4ZfbjN2ZcPyEJXEDNQoSujaE4bUMABjNAYejobYzr7N43aLMFDPMbPhFETWGeTARyKGxse",
  "key9": "yBvqDRjMrsK3wGWWtBP7tX9MNbHEsbn65U7XVFmn2A7fxayRWdyuaHArbQuFcpU2CmQMtxUmwF6eek7hVVkSsVG",
  "key10": "2UqVbAMvNzoMH2q7n55wXgdqjKLn93dSk2k4Dp7QLXYPyDXgcniqAUMexYPRNx6CD1D6RFX7AArWJcAqsqnzhojv",
  "key11": "eGyPkdSPxHy5KsQAxEbnBb2XvJm3xJj2aN4noLtZSBSPXaQRixyUThGXo5Zc8PbKvcX9q1v5xyFA9vnwHq3EwPY",
  "key12": "4b6ADqY8Gi4MKgwnwtnjyBFgG8rykn75TVxgTEqEcWrLFwy9rvZehEvZSwhb6yHFvxps8ureDESbJRnZTJKkydJP",
  "key13": "5AdxNx4M8Qr3HwsJ86BBywZXKA3SVohqfuMbaKhgFZnfK4Z76UgBqZsE5cdAcg5zxWWCWfnwWpahwGQzBRPb6pYX",
  "key14": "bixCmemqxTeWiEU7Nx4mxXh38kuBfrsFXfXTPaom56VBkx7oFJ9QJgpDYuRekEUS1UnX7nsykux8ArezspLc7ac",
  "key15": "53keZ6RJkHS2TkGHoCR1xPx1K48rxu8ua9EfwGfgRvYz7xsm4HiehmJE1TcqGbvTJdt84c9Lvj8uyup48bCrTMNs",
  "key16": "kwvXTKrYWHmGbMWUcAfccSMnahfRxV7T4Na37VUNogxPfrsUdFnrNbUjRkrvuJzDVkYCCrcXZuRV5aQ6vYHDFLs",
  "key17": "2SfNznfKvZzAMykyNmaxQZeo8rL9yLn2jWf5Sihaj8PLeLecAoVuEzGFPpgHBdsJrER6owWtjyAwDpBGXkSAFT6o",
  "key18": "2uyhQXxUUGifP7Bivfv8YHP1xW9RPiVrBPJ5AysuGepfMY94w3GK62F89zoLo7GQ36XQTT2EaRonVmd6r6BNe5fk",
  "key19": "48FmDa6DTs6XQoWEPV8ZUVTzmqzytYG1B2mzq4oZv5Kt14cztBqHBwvBguxBo1Jw3w9QDh7uBbX1AwjDKhtapaZM",
  "key20": "3Q4bZHtQKGh8nEkMo31hyiw33gZ5D8XFmNjMb6YnQigzHmiYrs46W6muZrNfx1VmxApMiCyiyPTvck4MB2yg3fm",
  "key21": "4a2W3t33RJPo9PLpaqr3hNEzkyxhrC73zWehkbgonj3QRyfCV78vrCE8QD4528ZKyXwkXazSZ7tw1GdE7yA467am",
  "key22": "3AG6XbrpDUJ8rBtRhUs1A2cHUHo2dMnz8vHUJXviLh1NiUTph5368eG1NhZvVWXyGb1wCwJfnpUhoic151V9qCvT",
  "key23": "3vpi7YEqbqdVJrwcJjUA3QSq32y2WiGZMDQn4sLNoAzd53BQVFzrjpNc2QvPLT4ds73b9czKyqc1vRUBxNMb8UF",
  "key24": "5FjQnzY79hJWgaiWPKs6jpvkXqZvTgVodHrN1VoM9mC8xTAqGvs4BRo9X5UzXk9pNeSRQ5hLrgFBMcaexnY8EZDy",
  "key25": "4JTEAfZaMQuUS4UxnzCzWRGp7CajTJaFG353wP1AU4FFRgjMxHUGRAUUfHsbN9QjVn4bq5cNZNLi3ZHFgEw8cHrS",
  "key26": "V1D5umA5KT7VBwV7JfuzJb5DvVyNz4R3hGL1FbMyiowFmqdFNdrdTbDRMLayGvAMovaHKnhfZPZRWBE87SPST4N",
  "key27": "2tjuE7XYYRbVUwG6Ri2SFYdEqELS6ZRvp6YDgXRyQFEbTK2gqxZu9C52fNz7kRXLyawnMt2ovUaFMF9fUSVLMYnp",
  "key28": "QBecUxonERXhrHnFNZCmjTcwQd18EoHZPTtfmoAuEtG7eZpeHr5adehzv2AEn54U8fxzYXc2GL7dwyYkPysGMda",
  "key29": "27sab6AQaYfvaxSM5Q77sMsxJrEbtRjCehgRCibpVuKy5Y4QdJVbeayo4Vk1AvkgKMhc42WsbVX6Fdp3rHbxTvdz",
  "key30": "4GMBYTTgBWV3AvotjzgnuHr9D8UUYLZvT9Nzv1WN4AQSRx2UJ6hsHWPPDzzjpj87zRWU1boN9ci6EussFhPVYWA5",
  "key31": "5cfK5k5h9XUkAFbFgabfhjvrNhLwEya7skWqxpxK4uhDBnspAkfMHYP1Xj9T3GckBVm2uJz7yXc7zMf22NZ4JWmX",
  "key32": "puYBkng9d5M3dgsFvpuV7X6spANZh9Bq22BHY3RQjksFCFYs5CZvkBqJsrfchjdKrMwpeeXcPatZHJu5T5GxQ2G",
  "key33": "39FNkHb6KEf1QKKvHL9CrqvA5MdKw8XSboUgAzjuQ4sb5PjQfkyPdgHTqzEqcRwD1kwx4NGeKFjeq9XRD7sFNZdz",
  "key34": "4Sps47PSTn3NF3Kt6yT688hALw2PuUrLwNDSkGWWQnm9wQNtnxj8P1UkorjvsAUgUT3TknhdydiA8TZmRTTkFNij",
  "key35": "4dqsTSPeudsUKCMRLpkZrP6hxutzM4c4XMjn95neTgLsJFyFsy5T3czFr6G8R599GWEvD3QReE36uibBUUvHV3Tp",
  "key36": "5BTMhZV6ttzUCt1QzKSPea4vbU3XHHP3dSYDWBdaEwjoweCGx3JngWdwCCMidRrZqNweAQV9AGV5vAtbFaeR9dja"
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
