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
    "EoPt7y8LCTemzTQgVfDxGvvu4WhSCev7F3DVt3qCXaRvmQVVzaKoeUUFV9qqP4x5cLvPq9So78zyEFcC9Jx1riW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zta7w8mtJKLrpiQ9dWPWBb51XFhzyyrBjuAHeya5S2LNPaNF9fQGa3xgGmTGWQqvcw6nwSSY5Z6yThQA1XgJA4C",
  "key1": "4h6scaqxnJdiYoaRbTBJjFN6zDutipRwYfhauGFYhWvy7sTn7zBBLTEXGXoDrNYs3xNRjkogbEjGJq4QiArVkqaL",
  "key2": "5SEpm1BKRdVFr7FEVvLWrU5RQaRd46mKkNRtdad2YwTXRDbwh3rcmyUQNv3tgEWyaxbH4EtP69HndL6K1P8d6hii",
  "key3": "3xTzPMkMzo7JiRfSw7BvPuDHL9GCQkxz2sWexzVFN1jZdzQYPinECMq15iuUauoEVEyDaxJQUzkpyJ7Xb11eCKhn",
  "key4": "APLnntxf69AQs3TcG3UGRRGrm5DGfYRvhQ5sW7JRNkuM8yAZtodR16GY88dxK7W56DJp4Q8Zmbmw5jYqY5A39Mr",
  "key5": "2jfo4KaPd4Mjcy4PFpT4wNraWqjB2GF9Ah3VCqGpDMzmjnDNkJtZrpujYfNX3xbPPZV5dhEgbYhCUxZxE9VrsJyX",
  "key6": "2sNmTzymMXcTMz6dwvBq9XQ2rfLqJDeBysVmKHMod58a7xo2KNsGtaegwrcT19ZUuusZ5JYL1C9A3UY6Cd6EWPaT",
  "key7": "3WFgYnamWrdUFDvZ2bb4oZ8pWJc6mrSZMmdmmotXnDwsrqWwxfaK71dBECbk1Tf5cQxMD33XxxEQfPBQAebc6Kvw",
  "key8": "5xQhp47WGcCc5TgyHzzqbo68pY1jfPXoJpe8vqnv3juGtfSJMjQFnSPp6tgjRRh1NfBnQdNmti2VroWFh34kJaPt",
  "key9": "exsVET2wehpbDnpGiPqoLYzeZ9Vz81DHb11sYgz62DKM32TiW866yuPLt9JVxTgoxt5jFKjpYyohwKiMgkLhPnq",
  "key10": "54b5VXKjwjFysafaFUH6ae34tcx2znyc6ZzAgCGhNrzg5MvPkMZzMg6ZdQ5umjucGPhvkG8Y2JXcQ4FnhW26dc1P",
  "key11": "46PM5adJ4a6K6WXirXZLcYXGqhXH18kjRcXS2aimPAuem7zVFd6CYYrqVML9npx54HryK3WYZ4e3z68kquiJuD2R",
  "key12": "1sxGwUjWUhM9QzXrZ8X1869LyZFv1QZyaQ7vbdeLqSDcDmQrtAxy2NcfUZRbjWMr6NjzkgaAoNy2BuC8Upym1qr",
  "key13": "3Bf9RGrd326NJRCbyMszK9Lmzekq15GqUBZ2M8ik6NM45QFVV2aYemGceLtSNDgn8xviXmmt5CEFGgEJzccBhHai",
  "key14": "xe2mQxxgHWL77B8vHUMcCd1agDrBSiYR2iayxXsNmog8QL4w29KUvvsoJBXgQkEtb4m92sRmKmroFepSCKJinvM",
  "key15": "3mBSFH7CsDkkpzFrvjjdjf7J7H3MJ9gxBbhNrStF6BQ72Be8qvYCvqFZgvGWcMoeTusXL1kPdC9De4x1bmQA2dcy",
  "key16": "5w57xELkhsM3vWeSaZu7DFVRmV3jL2SNjCHZwnLdXcemmdm8vQdTSwiPUtRRydU9mcBD9dUeGk88Fvktpg4Zi24G",
  "key17": "31uFe8ys5vrvYHY5GPwWfEi4MLKpmkPF3Mxi7dPnTU2aS8kKpNcjrBRQ3jksEGMby2ZaxJrpbey8V4QWmQfY66Ny",
  "key18": "2ttdoXNdXhCza91AoUDqY1c1Duu1xK2KiZitYXbUgZbEPxH28mbchEhVhYRCopPqQKXW6ALeXosSGsTrsRo2JysP",
  "key19": "HA5MvuAVdZwBYq5NyDsnhsVKUsj9hBwupXvZGUNRghsBixHA1VsejxAcHw9RtXgxiAge1j8HWs9h3wB657UnkGk",
  "key20": "28UKAiQd37HXVrnFqLgaS3dCSMGaH5Kgb4VsYRLcjogzEizhxXk4VCseGNLywixYu7rMwvnpvHRmwxhgHHsdaBXn",
  "key21": "UrP3mL7iamc87ps4ksCEBzoa4YJcnWVYYSTRHQzFoec9tS4GiXn1YN3DRdNysKArCVQnmwQKfgtBwVSgHSKbcT2",
  "key22": "3KxJxtNkFv92H5nNuTwdw57TGbtmWSfQcZcXviU4EuwJoRANYQytGE6tZxwVpb8SLJ6BPK4uFhbDktS5P1dbXceM",
  "key23": "4NzC2Yj5Xk9PvaDPdBvTXvZGbECRVumUiyoF5ubE7oTNUuDAqiUCGYMynhWYNGqC6CNPYuV5xXQyDB8nVSJPhMEe",
  "key24": "2yJvFQXyBVJXdnBN3xAFh1zhmy7xz1GAqnptYw3zieXN65hve1ewsEMc3AJ9HVR2kA7UKqK2qHCjQS2beUrAkSP5",
  "key25": "22s1djrNDxpM7QA3NdsbnwBjTa7cUoNAFh34jjtotCsqFLbncfvbnL7Lvo9H1DTrcCuvuKh7VWqvjQWFH6wM1MLU",
  "key26": "2YkbbWuyX29GYEU8x9yVr7MN4cEWimYJgEQg1uh9rhsjdeaJchdBx9nQoEu7Sz3R2zHDjNTZKRQTUQBGiupYfqAg",
  "key27": "3RxpKaFGvX8bfg4pFWtoNKu78DDSpSKxV5aqw2kVV6QSofeceuZc9DYkSUFWyKgvb3fKpdmXfE5HuMMaxxk8sVpW",
  "key28": "zRgzG7xDY9DWQwCtRm9h4DaZdcYCuunvfLg4auqLLUNJn5CafbPLKYn16RLtCCBRsmR6Yr1qBau1fhUVUMbLwqN",
  "key29": "4RiaAiHkpxdzxqqe8k151JskihRuGZSdk9cgYsDEMtQ56CdzBp3RH74mS83jXYtAB7GyzDk6AuoKSLSZZM1wSp9S",
  "key30": "YE3GjDxNqZjYmmw3vE4tgeBVnngLFCvsHfTXrKaBcrtnxAhbe8xaqFjyfnEFARraAQVGDdez5xkvVzrwCGoafQ8",
  "key31": "3QcVnSYvM1qZjEYDaZE5BUSkomiLbo6FnbwPZr2fCyzKv79Wi79nTkh25qBdvC6UovpZ7hMX4DMUgsLsBNLay3Do",
  "key32": "3c2koD453btyKT9ci7Zj7iKgLH616237FtoEAEZhpCZkgh9P8L2eCUUcjF6RTxEVWbhdMJF9cGJPtW82BbRkZScT",
  "key33": "39g9WRqCcaySPmr8jMELpBaUwEGUjN76jnie8UKE2VNj1hbM1Cmfoh6yYv9uAM1H5MQjhH4H1CdpTVD4dcTPca5p",
  "key34": "2ygTiyoo6wFU1KC8qJL6cFY2EyT9uSTyi7rqrYEWL1iPZtzLJ8D7aJiZJt5h5XcrjPaijkUVxFfaFZbvgcekSkhT",
  "key35": "2SCsnkTty7GEPakAXiN26qhcYNeUpkoPdYb95Afwpzh9M8wmEWKGx58jvVocUyrf8kvTotEDYD7ojTJNbTGx3usi",
  "key36": "cpYMPRgBFaM1VLKuGb5gdr62dTRHzeWzcDC9wiDFcjgnZ9PDGrd5PiaWDjz1msyYKk2ngSj5QVbAwUz7wu37Hv6",
  "key37": "5Vwngw8rTE5hNrrkhfQ7GSoZjhowiwu9EbfZuNNucLpBM6L9nFxciL9MD7Rd7xcEtdRFg5rjVVtq35moi2cRHT45",
  "key38": "5oKGBW2uHjeoFgtH254DahxQxDp1KV2Ps6J8Kcu4f1GWNEKgCmLRdHAKuhg7MXMtUNbS6W3fu1Sxcp1eurpye4mn",
  "key39": "5bCcLGvUD8ocCrH4gBCcm6k2Gx9cZiynLiGtuoNipGHg5FLAHdWFmZbLQDwzEVABTxnuGh5g3A8dN2z9WiF2dVJm",
  "key40": "3nJbdmLE29mzaqMWxTwy8K3boRsLHqyjWrWX3yWETrXy56tc3ncMQp2CyHD6WrWmrwvukc2FKDUdGFeRvS1F8g8b",
  "key41": "24CfDnET7NoS92FGa3nrERAbHYaBP8kypJR5EfHP4CGzxZBJRJS1tCwdXEVRPZN8iBJvz95BnNPFPXw3tL6BGybb",
  "key42": "651pnQPjJ7b1ro3xcuzzot84bcv2gp8VxL76bWYKWdfXXJH3MvDBJqN69UEAV9rVHsxGWdMcKNTBu2b8jmJ5fiFg",
  "key43": "5yz3FAsv7SpdxW7w1EvfDXNDYsSWsGpGs9MEqxuv16WhV89DJSd8JkKdBFXUVFsKK3hVUgqVQoYKY2TzmWVAizC9",
  "key44": "2xfox9HZ3LPZCCnEuY7tBmXbFpwjTdX4jrVwphrvizRqhmfVss3RwUYwCD27Wzcr5LcoUfi7damSSVjFbGoid1ty",
  "key45": "37wVabMYLvfTPF6gjMyZqp6iG5YRPdQpwdCXdihYK3gSfSwCMvgLd57vqDAXq8CgC2txPzX6F7qZa4cg4R5F7yRV",
  "key46": "3SMHxrzpdxj5vAce5jgTVoFjK3HPm2TR6xtvezRk23FXXm5xJNG73HoALtVrNXHkPbQUxVrvTNqvRmaahLXL5yCC"
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
