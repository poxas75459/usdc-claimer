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
    "3wFdKKmLvC8upPcKnNjC3YS3BfRwa9evwMFn21urSbfCUvT9bWN8RAdFKKnpvBrEUBypu7DCbRyhTwqHuGnJAEzG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CZnxAGrR3LmbRhqJqqrWuy5rWjeD8D1C5VEVHt6P6e2Cm9hZv5SBv1GruhwC8FCauBjR9u6EV8aTmzvt47C92z",
  "key1": "3YFDy7Lvi5fVywBBbrkQ45A9gprb6p2y69cojG98xHebL9wbzgTvokU2HTojUYEHMDVKN3XLb42KYvPiV4Waegp9",
  "key2": "Q3sBFazqe45vniKopdigbVPGfgyrB4VP7TZd5sttDLzUn5ptU7urca711rpM2jdqWdT8SLYB3sVBYn6rFZE9X52",
  "key3": "33DFcdbXNowiFvKpkH7L8VGu3Pb2S4eMK7p4T2x2HuZSJKb8pekBehZ3hHt7bK3C5gqXDsfHyeS4m4s35S59mYHo",
  "key4": "qVX9a2qDBvFwvvH3HTtQJKkUmLKiwWJScjgZVejchaL4MsWy4TNuSg3B8phFd2k4cDAWvQuMfDgJqsZ6sv5oLRZ",
  "key5": "xig8jYe6wSAfHqrddsLhiAs5beE2s9xVK2ZHXzwskVMaCD9bpLxFdte9Q2fAduvAPvBXGbhg2oonZYzj4fEbhvr",
  "key6": "4NP6KtQSytCsporYCMGyq2m9ZhGtuKx4w9x6kSGDRwxyQKBzvncSs1P6eXFQqJn6Q2EFT3ju2iroWcfZeMViJFEw",
  "key7": "4artkxPKh2N8vN6bWMYgaECMLrj8pcKhf4m9oqHBmTdJFt6KZeVoFYCP5DvtMnZbqaAmUCZSJdTKh1yq8X1vFsih",
  "key8": "2no53oui1HgfarTH8h24KyXnHCUjbPKm8QmU4MRxL65xdLrJFNmJUHS6Tvxzy7DuvJ1Zk4RxqBD32whou9ZPPR4A",
  "key9": "2L3d4Dq67gYhBJA1jnj1EXq7TpuxY9VbTCXv7TKyS4UZzemwiD1e69kFetJ3CsTTz3cxWrbGpk1Cem3h6fTDpY7c",
  "key10": "5kTfcH2muMQZLxEg43QdtzKzFJPPqt5hb5LCp8SjMvK8SbLFg2syi6iFpqtYXmv5sQNCwTCM8wSwsm2TVFK8L3Tu",
  "key11": "ackku2AoXewBNt5Pc12VV4Tz1cJo4hp4Lm2YpWJ4Bdr35zVQeY8SuRPEkhX9WLZmuwMCK2811irc11fapHDL8om",
  "key12": "sNXQVqYoNT2N7ohEYfH5upeaw3gY6eZfLS1LjiT3zytrEGeRrtcPkBZKvq1QY2LZP7UbDGDxM5rzp8CeEPkgX8x",
  "key13": "48u3dK8sA4i3qW1FvjytQcQng9bzDxPvjDeYXEJP4X3GPvHcFTgFzzw51dqnQX583rd4wvXBvxpkLLRJaXJHBr59",
  "key14": "4AKMjRDrNiAqXmfHzrjec6YmmkGv5X3uADEQMdugehv1rsnXc9SzcaeNSXgz28yRVFLijxbY6peCm4LJgnGzgpAn",
  "key15": "4411aQnNKgBCmVRxqZqKvQRKKpkidbdgFHfTqo6gJyCkjnsBCKGPEzJ9n2R8J94esZi1WPfYKDySC3pU2Nve7q4M",
  "key16": "2mw5Dcvp2c9MzNLyhTUE6eJWk5JMQun1BQezTJhMKt86iLfUTQvXLxLvVKPUK3VA1sdoVP9nrFV5LnFuFdUjuhtH",
  "key17": "2j4ATrDDGcUpDdQRxvC8p84msWbLxBskjuzTYC71ev4bemmBXur6oKTqqL63zrYDzbxE9GvyZ5muCmF7xdTpx43y",
  "key18": "5kz7YpJFCLYe7ifwoMbp9mHX4iqKJQ3qEkHQjXw3AAE9zSSRCuCFUXfiipgjCsCdAPBgLk1PY9qNiY6S8Ek4s7sA",
  "key19": "4KUtynum9Vz6oWE2TWxfAYBZbuwLzBC6N8LjuANcRRhfznscbUrjHFvqi7pRRkABE3ZfCPMGQFxCc3vEgYtiRHAe",
  "key20": "212Qm2jreEHY2Lj4YBAhoTfp96Z8VXciJeLCYAJHoMDDTiKun7NvDkXBas5xH1Xh4KW4Y4YeTzPjFkESoRcoPcMd",
  "key21": "5M68jxNFWvY2sh86p2MLZx98VawtrMqkVchnCHK9c57NuCuGgcyTZY5QAbWgTeDUNPCiw9ojtHNNcUyGd5xDjyG7",
  "key22": "2Arny8YnfWR44kWgzJmYGYpuu667fenUyLubwJEyqvWssPSojLQaVYXUM5VEn6c2EbFehtmUSUb3Ljx38hRQoNkf",
  "key23": "2bsca8dxJZFVsZ8at3YRXQTG3MgCbnywoTbcGLWp9Z4bGpXwoNrgvgnYtJKEBQk3BHy7nFhpJ2c1pRh1mR5m4NHz",
  "key24": "5TwWYyDPCyayGt5nD3SGnhBTghELuL3hV4WTv72ksVxoPWVkyJP4uLbAP6L9zj5FCwNZcq5v2ky5yG2gjFYimDnh",
  "key25": "4odbUn82zvi5hj3nzfsSS9FyDZFoNjQ5zfAgV4WALFmCtnpw5BAQzqmYXkg1tXXp1uGPQakQfkuWqhWSUuNPNfu5",
  "key26": "59wt9ByoiyV6aCMHdt6xWhtV91A8NcVr7RDjN9Q7fAjEDxtrHPXiur4A79LLWrSB3eBSCebhgMs2LfFf8zFz1iU2",
  "key27": "4wuh85hRi9Rogkr5njZ7f3T9Pd4fJtyCehjFM1USafDDXyn9HadAevPSQ6kw5mr1jNPQGBuS4nxpFy9UvSz6tP1d",
  "key28": "3wMyFzyeMGKPVKJKwWp8rbHN9K5zGso4dSEotLDbeWCrji7wAM1T6SoCK1hzsLTiRZiWkHY2dA2Tbt9JN7hjAj8t",
  "key29": "1udt36U3uRDFhiYF1efRk9URHWroLU9MpXteSRkcCjazY9ocjPUjF6vTWWcvWYxDZJB9qdADG5hddKGoVNxRaxb",
  "key30": "4Wuc5TVyKYyhFSvThtE45UgxHdT2mR9QMa5TZXohJ5mRXm8y5yEoc4ZyrXvt4whXwnDYn1AKL3iTTcBMrbmbDnvr",
  "key31": "8inuAT54URvPPN5cQJkjYZnAsCwVCANt7U5ESyD5RkaQ4L2Wtq2rK6G3bXdgwMJy3ub55kBo4p2urFRqCsXR2yg",
  "key32": "4fe8Uh7iem9GGyv7vynnCV5JgK42CpZjuqSNsBdi8m88EbEGQErW61QKuWdJke1xaSVqQBgojxSAPF1bUPZnxkmZ",
  "key33": "2H1VQxdnaMpaJtst7GsiD49GcSLyuk3mgDVYPvCGWap4o9hSm4KQyo6rW65RJ9rbuBKkvWjDfNcvjpvLdKgvQ2ZB",
  "key34": "2k65D6UwmzVCJ9vADwGy5Cj1gzcwF5yN1aWpwe3duWVWYRKkQoePeZgiroj2f7SibfwYPPs8wWnXpvUbbzWaHmZ1",
  "key35": "4j3YsWNGyXhAvLxoMwvDFVEpVh2xGJBN6QxNixpY2zRsraNhcX1MyzcdRzJQuqgx5g8qrovvYYnyt9MDBjPR5vQP",
  "key36": "2oz7XcCoh8xZCuy1fMpbM1QKobAMnPHcgS4kTvTe4ditdYgGFu1qcK5J7ZN7U2vjNxSo2jNpi5VCARtrj4ofRGbA",
  "key37": "2fENEGe9F5SETbSL7ghns4BkZVq8PmPJxLyHmBYWSzy7DqMabPFGkDjzybNuAqJGdysVMxcRk9bGzdacCJggMtX3",
  "key38": "3atamLq1Ds1m3TXmi6KhNBveq3t8qnq64G19bN9pzCB44M1bqWpvhPXrMogBFAGNCj6UZwnaj15gjecnf5StGzcX",
  "key39": "FTwasxf9PGVpuUbAz7oVksgwxWC2oFxEXSisjNkdVAvai2oLXhGXkTQ6cDRW6duWtZ75L8ZHPgVegS1cRfreVbk",
  "key40": "5p7zuCkHWALpVLqskQcnquBFj1zxHfwT3phkU8A1A2j8y8G77gPazhVwZ96uyBB5ScKtBBpKQ7GL8ewN7Z6BJAZQ",
  "key41": "3Fhesm9Duu1hj4ywXJCx3RtQLyb58f7VgXKjnDWxN4gNzsRYNhDYgCLG1KawDbPrhexxuRUqLS2xfjne4Mu85Lxs",
  "key42": "5dBrYT2fEAbh8hJ7gbmth99MGL9MpvPtoi9ELwm9Qhow7h2z79Mm34LPy7JqVftTNNa9nfADN3Uk98BZhqdUQ6Tv",
  "key43": "2LVNjiWwpDnyy9NNfP5ETA7RPtCwi463x8CP4N2b7eWUihmMpH9TCQC4k6RUfbVa7W6iwV6UQTi1MzUndtjGCFGw",
  "key44": "2iiStMWZm8hA4rq1G4n6kthdrmpzduKtAjAVQ8e5Z1L9gmDdtCA3Bid2BcdWNC3QLNc595j4eoRFDz7w2ebGgWLA",
  "key45": "eRnyLicPi56LZ3BDhVdaixCwMkpfPGHuXiZFmjDE4PrHcVt7VdoTjrv7k97GBA3DcyMH8X8oX2UqY1aud4PBoM9",
  "key46": "bKYcc3Zo35873EqfXzzy4KKSop1fj9L4Tb8KqGZzXaWkrA4iPDEoQqVPFa5F4UYdoTuMVzPiNtivUaCy2PtjiFm",
  "key47": "3PiSEsSMJHtTmqCJ4HTX5pQ5H9SYBcnH8Yt9DT5EdrPQQSdzvpVEabS2CDMm4VDpdSJ5wbJw6WXrgcqGUbrtyNGv",
  "key48": "7FbgnC1aMdsAAvUbvmDdK5xxTH86VEJ3sBb33mCLRW84GcSDjERqFM53hq2WuQcqNF6azX4s5Gi6gkDD3Tzk87N",
  "key49": "4Dy4839gJHcue9Sf2pdhij2eSRbDb42LpkA1M4CvpdiF7GExkxKbqekAqzNmgAmsVuRsV8p8CE24S1cnNwWQQBsX"
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
