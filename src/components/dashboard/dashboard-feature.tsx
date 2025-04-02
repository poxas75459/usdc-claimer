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
    "CvzVAT7Vr2MxCbDAkjnnd9BVhe2QWQFW7bARe16irLgoViom182YFs9sUEgxmmzv4xz2dgRz2AXKvfaJ9EPkaWZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nn68WYGDpt3EvRktnrBqXUCdsi5puWNHP9AagHaooVQ5zDdTPeYTKa8xFtQtFnuPc7Rwm5cf8x9GpMHg6YisWQk",
  "key1": "4HBaDTD95eBy62XPzPLu52BJ93trdbZqjYkQjnkfYH6VXwh7LWMDQsnARvXUjNH1WUPvV4fmm3TSvckMXvF7fJ8s",
  "key2": "NRtanDfuLifvALg3zZAsGQz6UoDAszznqLrxtPhVmb1XxG2iykxN2wrMSjefg86qGWu6Gi5oiUqkRTGMzPgfDvD",
  "key3": "44jD11optDUwSmr7vLB7CmzYT9YYuHdmNRuKxaoU7aLBkTFdJAZ254vS9ZdXGueUpdwSDNvykNGCH8sitBx25dhV",
  "key4": "5tQWemULJoWUPzy9tvTsiwp7Bj315eLkKmd1jwHzNDLKSDo1Lmm2oCoosQpDEAuzfJCrWaL1stqLc6zQWYnEPgHZ",
  "key5": "67AmqTL8sQveS5n3Tk8hVhGMLiDLhxUQzkXAUGHyJfLiLZvAoxgBYwTd8N1kt2dkvX5z6dtYBPpS6s7oUYEFm8wD",
  "key6": "3i7zx9fZqw6W1YiBLrd33DAkFLM6m3w4u6fcEg1RJCidt3CgUXaQU6v32owYu7ZcTQw5FJhwtDVDW8f1DSwxPtKm",
  "key7": "CkWe8AEEWWKV8QT469LodW84njqGrxKBGLQL8BqqcwUXgeEBrVkMdpoc1ckRnRSNdphZ3FGBoNkHV9H3Y7ii6HN",
  "key8": "5jBjH93pyNLHVA9LcxJ2KxaK1NyEAg1QW25EeBDwdjmETu3BhvcuPAREiYU5qHrjH2K5pHSQwcbxs1CzqG9edshT",
  "key9": "5CMUSJqzW2ozF1KMTc9crr9UMVqkCLe1X5Y3jGam8hys6rbV5BVC32cDM7R98bxLT4R5R4vdeHkVfCVTdvAR24Lw",
  "key10": "4NdqPZj6SCww3pEGA2YzPZSNQ692nmPYKn7pwFXa33kacJmr26eEifdEEYD1ppgyLo1nsqDXtkCdgVr25TAojRp9",
  "key11": "37EifVjzTXiRQw7ozaNWgME4K3jzJPGK4urb2uKEbTqtZTEx8JK3StMKQGz4AkmTkS31jZ4Xt6vqd9TimQQUdfY9",
  "key12": "24QYFvKDvCA596JC93srHZh9WUFPg3X4WVANNGF1tea2puhCNWgjaSna3rr14BZPpSUhNeu7HtdWhQY8NUQ4QUGW",
  "key13": "5xaUuCbfUtPQiwCDCYbdhfhXzH52pUrx6DbcYY25ahe8kFZLNa6NURseuSfxK46WsAzrcp8ZgNB7zGAj38znDZ1d",
  "key14": "4asDpGJYVndT6TvFztG61LBb4MKuoS8wchQHk9U4twfXkrzGkStiVbmFQo4baCRC6bzpYHTg8TgnUs755woSty1",
  "key15": "2w7iPjrqFuZXmn1GGEekieqqsJ3yy677HU51yzA6CnLEnvZnvJ1Q98Ngpqtu77FCsCsDHYAK1Y94ggiM4ibpx9xH",
  "key16": "5PkJCmozm3zznrtCTEuhHShALJP4ouf9QCn2D3otVb4iWNVJ3g4MThwjgPCCapzgh9RzzaMJRPnVoDSnMgCLQx4W",
  "key17": "U54BSV8uXM7CcdLjVv12Xdsc3aCt5TeBwu5vCQpoaK3JJeh22mVYYBgNL1YoJZk49gtBtgRA6wxr3amfsXhb5oR",
  "key18": "2WXTGKF4o9csp6f3DteuwsDhzzBXQmMbvgrSSUy7rRs6b4iwnPyePphjWfQkDQZktwQ3sUQqwtPRqBHtmvtRSrQr",
  "key19": "4voevSEwruNMsvSs1CXcRBvSoq3kiMNnsYKJ5jcWfnRb1YC4yvYB5QxFbz9q4SVGZEumjiVsoPw8cYMZv9BCag13",
  "key20": "4pgAMbJmhyYnCX6S7S6QRRjEBbMXM92fVSZG7517NbJfcwovR4CSNV1vfNs9ioVjJPMrKEPqmJuYnGotsH7Mk98w",
  "key21": "3YiYMaSsYfex4bzyXnz47FfJ9eaVSCai9xxpoCGMtnWA1rnGUgZmgqa89CAweZLJ7h4qUvBjY9TNk5rjJT5tsUk4",
  "key22": "4c8E13QusaXQ6wY1aLhY6hqiCQAN6uHPN3h7X9NkvUeWpJA2KmbtATQnJPoXb5THqw8kwEHdJbyuz1j3rehDopKF",
  "key23": "5QNP3GJ3CfsKz1rJFzGWF7yfECfJwzqjL5Cdz5PbMEWWdrKP5vrgw75LtTVComFvwuU4jCv6NUWz9eMsG9hdmCKu",
  "key24": "2cihHtSzRzK71N8uhgGRSqoXxhAgtEp3eQXNfD2uynLwn2Bv2YEvJHHijc9Z4phrezmYdGr5fXBtKt3aGA3Afzs8",
  "key25": "aXVzk2A9c8fBc5sDXJS5KHFqk8QHjiw8xRgbKXsoRFzwoahoL7AFJCVR5dB2gfgbkSPVTsBPZNkmXEAni1TbQLE",
  "key26": "5iiYzEYEZ4NmJHcaENAk5jTFf89EbxMN9VatTmksDSFnqYrN47f2LbRVoTRnJfykDXbyS1aqgJSSHwn1B2F3Dszt",
  "key27": "4GQAcWuUwVuE6TDXDynWPQp7gTS7ouCF1ncVx6LydJPF9K7ExKqKS61E4QPkZf4t6gHkLkqTBAAfVhzyNTKeGoWu",
  "key28": "2btKhS581gsaeZMND7h4w2XsDXppimpz7nWZn9MUwVuWSQDch3hUQ2LP93G4LsEKmbykP7ymNKHvqcmDFc1X3JMG",
  "key29": "28gkbUax7qNXejAqNqyx7LRvjyGDs5V7kGzdBa4KrQDFe3kRYbyEc9rrDzTaGytAVgoEF3NYgJHWYexMe1iyoRHD",
  "key30": "56SVEbg9FDjxNiDDS5ZPP5FcRY32tC94WpWgnPPNqj6smGtFbojAX87Mh1nKnFaR47QRy1vLwtrnugry1huBJVau",
  "key31": "66aezVh5yv4nTnrSrFAnYsnwVEbFBUYJERNVHV1qDZLsmc9En3Bg5MRnhgEZJFdqQ4rGNaf8mCUgRoW6ZZYHpAiM",
  "key32": "5yNptESUzHME1RH4tkXK9qV5KYQwiunbFWcfyQcntjUGyNrm6ZJtSvRZBNdSf5CBHppYPpryKj2frakhepxuo6o"
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
