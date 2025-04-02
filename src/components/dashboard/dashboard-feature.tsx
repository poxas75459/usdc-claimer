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
    "2ZbuKfgw25AcJLGDQbjnQwUE5P7jfVRA57RnHK7qgamtawH44RTYaBJdm3Ye4BnDxKDtuf5dLfsvQp73hiKZGPjb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a85gX1Uba3TZLK4aFoVvfRz8yUu7dvSL9kEA3KwHStw47ETUyrUBbdJm4sFwDAbEzrtReb3DQ1FCWYVrYBFtoYa",
  "key1": "FhQrJNVdzjFTHGnHLEweMt4QTbZXv1UaTpXgvHdp1BSdeAwvdMG32GbuYYajYDPmeedtLaR4hz7NrQ5PziYru6c",
  "key2": "MF9m5g6Sn2dydp3cPnZCQEj2t8pi3Dc3ZrdV52wtLB7ACRVA5SfWFrMELLbU6rqRykZfUSf2psTGVVBUkgxhApo",
  "key3": "38CAXLEdLuwRejSjucSnMYjWqBaTVHjRQHpd6QkF11WXnjsRN7pZdfX11ZoA7Ab7rxPAtDNjXHXF5JsAa2a61uMg",
  "key4": "4ApkvJYDfXXHpDSzF6YuXp1V5f513Khj5BwpsE6z9JfsL56UNmJSiCrKLphCMcxuhSsR7JpVKQM2DqEfoTiSj992",
  "key5": "5syJE4dY2EXjoZt6136MbXY9YqmjcfE6HrHEccaRigfXm4VnjdsBFDCqpphouqxFAjokKFuBC4aoxgdcHJGjYWjh",
  "key6": "4XLGvoH2hESNwmfnUCpLWAQqh3g3qfYNRcPEjGf7zUzUkqAzn433qJKza58jgyLtt4MDQw9vbVb623kKxuj88xUZ",
  "key7": "mq8QVtQJo4rdn1P2YjXkqFGYJq7B9TkeanvvS4gZTf2MoTTkUpPjimabFfLEcvBUu9ffpkP6eF7V2Gx7XXuqkTn",
  "key8": "utbrcWfGErapjdWciGS6FXoBsJ8KAKK2R7rVCaQyYZ9KNz8Kc2BxeMHNQYd3Y8rThrBMQ5y5LSmuhsHG8FaKbTV",
  "key9": "2MfxTiKedRLZVbV1YZSnTSDJ11QUhN17TPkQjeAibWhQKYr2pMq21HygAhnad7CPbXiEhwSyZawGKPLao4huDQuR",
  "key10": "2xZPpvwxTuh55HUbYoxLDpLstHj4fdPS66eH84YarZL124HTZCEEZiyRqKf9AeRmahfxpmGdNZmvZfw3b1V2frXu",
  "key11": "2LEsDmhTSnZm8vshKoFos81BxXZyZKJXvHN7CVCigVjJ3ver2Ev5kFYooG7MA98v7y9ULtZvtaPQaRByi71baURc",
  "key12": "3tghgY6F5E9L7FwsCgbgDWd3HGyTgTiD88XF8gEz24c4E2k7aLUQPWZ4TBCPP2kzFN7aTGyPhrzRLXyQLb8LXQPk",
  "key13": "svZjQkQtLagSLFEcyYBzGT9HGBushM8nXjg8Wimn6BpyeDJgMAT4pa9xWmfPv2kSkhq7XCaejyjsR1L2Zk99xhg",
  "key14": "2ZA8jMqVbXyomeqCEdF7nPJt6jX5UPyv2UF4vxT2kSseMceNC5t1WYeJNxNZRVFJy5aQqGjgPDysGiUgDrKiEkAn",
  "key15": "najLubcvfBbQXeJ1Q8xjdrhfgMoXHCSZHfPvwSDn2rKRwQcNViraW4ZSoXGWMPmnzqpU4rjxeij5AoWeP7JYFrR",
  "key16": "CM2QS65wHGcrhTqPwcmBz76YoSa5dHG1MtXxBGbrcB5k9tRZFmYqfBWXwrkQEe31ipx2f57msMD7t7eqV9MsYQw",
  "key17": "ni578uEtw8hcjexsdrx53QT7SPa6HxdxtUxDySTa23RcZF2JfdkSY7AMEcRdAkUAUe1DLaWSMZTsGLubBs7p5Tw",
  "key18": "4CJrhCKjSsemdYBHJQvBBmSY8G3oTykvq77edG1RAJZCVs29RBhwowAdQEQuehA6mM4kgnqe7M5bfgMfb9FyX7Fw",
  "key19": "Jbw1mTZTLpRiRkT8bRFpCetc41R3aG5QrEZP2vx4rLnWnZACru16CphYmGn9ueHMELyBzeZWQ7EUnzrS8ZXRL6M",
  "key20": "4D9xseFPn3mpQtWjwNkNtfURbua99C9UpjNZ7wjstGd6PhM6TJFVodLABhtSbpM3FDBQQ9Y8RnC9oSSYLT1ahzAG",
  "key21": "5tVLVtnCquua7uPW3KNkYua3kMH7eCVugmxkPd7PDMUpbHZzLBwUmPL9Rr3EKJGAohRD3KRhZs9xxYdYJ6mfqeyz",
  "key22": "4dHccksAPTUSvf1YnozQxLp8csqrKvz26eD1B5uDJHNKKzYFpWpZY6WupSzGuyDBvpMFMiuwXDFwX6XNvz327bmH",
  "key23": "53rp8Vz5ru39Fgi9eEvobWbrPabE3P6hnpxHqV1RXRDtofgD8vCfC2naHD5iESFHQoGs3ugAuPhM3mMsrxCDVGaK",
  "key24": "b1DsatsizBTefhjmEZD4Q8cm1wqRYQKeZPzJoPr4PVFmawoFbYk81wkorFWXzFcVGZpkPkcJFAnKHyHM56nR7FW",
  "key25": "3RXBe8Sng6a4FGwe9QPJDDUAr7keKQadfVthUkQnJThvxFmhrnBeGWziK1UtuysntcLuchJHxdMZL94yrMRaURkL",
  "key26": "5F6UMa5GgFSHf9oavEGCddLU3C2dZhhD66zts7GjwzXcBn5QPhVZEixAr36d6sse5wYxd5xf8LGtRwmKGrEwdGmC",
  "key27": "4h9XwZZQ9mDity1p79vFBjjjv3YbL2Mva3KNTuga9qT218QcRSmyMJFTkpYznXaz2JVwdSm4bY4wsfzhNPF9Ri2D",
  "key28": "4HwMVwnmiz4VHsEd6PVJGBshvRvn9yhFxRF8soG5EvPC62wxQ6NwXv7pXbosVvdXxUJDVraKfHtd2uyLNo8SgmfA",
  "key29": "y7EXC6rQEoavVnFxtMH8qPaF8GqrEB67BV6k858hVy2VNLnr9tg6Dj9yDGG6UXFPqAayFy7Vtc2s1C3vepWCYAR",
  "key30": "46CHXGnxRtTUQz1xjGi166PhViKKpgB2kWyepDCUkZc7CE3VpfCnwagXYGUZhVLgnz6LDQLahrmKHWHbTfgbjT9y",
  "key31": "598zJYEcAdYecby2yx9G2DfPPVnPJUjHAm64zC4trQjgJ4gCnwdLX2QxJspXrGnuvGKqnHJngKWv3DQiQ7938heF",
  "key32": "nQdeuxbm3qHK4388k72iE128RpYjgdQ7CpM4NpKJj3RGiCJX5P9Kg3aCxCnpDmFUp1knRuLZNf1aYF9JxnAKbfL",
  "key33": "2hcGKJLSBEGgmbNwgDia2jZF3TM4rctaY8GpaauVbXffQ3HGzbH9KBkGyFLjeT9LJtzNkK9YjWMaybMNxZ1X8m6t",
  "key34": "56WhZq5VvVcLbYybrvvYhudjstLsMiYhyb3HqV83mehxw41ezuYxj1QfgbzxtrXGGPEbxy2PPrUaJHik2oxipj2a"
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
