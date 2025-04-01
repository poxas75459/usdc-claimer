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
    "4uCJVR4yRfCiicbKGP4yAHdHyoZoZ31Kz4kMf6smwB54sXHveQwpWf8aJ9ZVp6pS2EC3ahXCCFisLPuZKL9kGPGm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62daLiJW7ikeJqvcfbtXJrXrCEQLoYiBxBhcvQRdGsasdoY7gEy7cm3rM5tedY4C3gRuGaDny4X1MhdcG7Cic3Ch",
  "key1": "6et6kUxkPeynvEeePcHzufYxgNkktrjdmiYXhg1fgN1a4xqQF7jEtTCRVgjcEGiRXQWviR9YKoAavULW6LE8hKB",
  "key2": "XRN5L57KUdvPdWZuLuBcPtWgR3EgbjHN9v9mPwA41y4PGdW1BpmjpR5jU1q2deE4LohmLyiRVWEW77feWR7xQSu",
  "key3": "61MfFKn6ugpozbBgPYRcKFgySgrgjLcHUqP7oFPTh6GzUfF6h53o9q6PXifJpc7YmKsg3wrztf3Fj9gHp1CD1evK",
  "key4": "2FNU1iH8mkJsNEttk8Fs3kKXEhFSguP3VqVsSjhap1wTWzNpAwUwucG65BMxi5saVh8iGSLbTY26MU5GM5Be4yXJ",
  "key5": "j8ccXVKDyaREPjTDNhURKxVQLcAdKRi5KDWopcjUaZvHTZAYa3iiH5MWEPWYYweqpL3PbzKceBFQRVeY7WtTsHw",
  "key6": "2qaAJp7egUgzeoeJfs3CrnSNJ74SEKzCXDmTgXdErSyo1rWaSKBxS8ZqKitv3yGD925EunKHSM8JjGHL5DHtBAWN",
  "key7": "3wpXsDNidJJSoUDGX8TKXkK9GEzBBTgZFNb3RGF1U7iVUhFX51B85NKorwnczepV6Q4rgciC3cEWLHpGs1byb8h",
  "key8": "3rqyvURczgSeSVjP2xk2XDYYmoXUQNgYrX1TAtyBXddYxvD7hgUqu7grjTpTkLudHAEKa9anpSHiHM6L1ruXSfqY",
  "key9": "5Byg1v9wjweBA4CgUBvWZSYNKwvz5ixuww8ots7mBfHz122mfteLynk5ktpZ8MxTEpc9pKqhT2dUVU2rbCvGV8PQ",
  "key10": "51TfUGNaDQVpztpzBBDT2VHBMZe7UTR7SFkhA1odesizjJvAMSd72hGoue9QXiDYotArUzD5331PtcAYPX4uUwHL",
  "key11": "4468vHdaXKyAPsKGo2EmxjC1QsVyTmLZtuXArz85T21nQKdtU1tx1HxyR1dfMComppuy6hpsHq9nvMCsUHExHX3n",
  "key12": "2fasMsKPoU6C3MM3aQthUVBGZMnpgRHYcusXy8GZowSa7tF7s4PapaRndpjSTbDcKkdpxisbds4DwF7Mromqym3R",
  "key13": "2m7TadrHYrF9nJ3UcRGRYfvQxoGar3GZjLhnC2873MQNZNw4SMMCsW4ERKB1MwV1JCv6rmfXU3656nHEskw99hvp",
  "key14": "47PtvyLFEHG6X6DqFmnVRkWhkaxzgdD4ooCJ211uint8ryRrhV9CJRagYtHgQTrVYwHSbQWoDUybBPR52BSAQeQb",
  "key15": "5vJk6MGVyNUFR5uqEF7wZn7UQAdjMPvwShLCjvgeY1y3sgicF46uVVNx4Ba35RHWCHwTVG19yS87x24mRX3UHDty",
  "key16": "4QVdbvSVR3D7HbWtgNKhCPuSGRjR227kYq2DFicHdtVo4aN9TuFKQdNXxYY46gzeDTLHcLeyFLc1vXbvJcZXXX5M",
  "key17": "5hYMqGiiayLJVqL7Cnmz2fmUauDUdCTUrvyfMXjVwbYYuFUvNu9mDTj4n32iFr2tV5dDoGtARt8GudSh69129Ydd",
  "key18": "6DUx6UE68d9smEyyJ1rYHRnPPx3CfTcnad6pLLx8mjnguuXSaQQGkRj7bUC97dnDo5rvx5S2HrC9ZtDG8NfX1H5",
  "key19": "21ztYkLLADwpLyghSj7VA8SouzZSJxze2UrEJFn5UbenWQebmvz47CAEB65PNd9HCbQj4actxvca39uWZjZALqiS",
  "key20": "4VG2kC185JUS7mTM4wZLmcJDEz3EJoFC4yCLn6jaK6BPJDREa4xQ7Fcs1kXAYszRbkDfjBfFtoHQzkJ5b4PLgSow",
  "key21": "3BHfh6vBXSvaoa8cCB16Q8YLmg5QD28YxFJaWMfvR6gBH7L69rgtf9FQHG4b1o29acSvERGBGgd52o2SgnPa4T6H",
  "key22": "H5ABantUgSVAZiVA2ekPqiY968ydtHLZe33tRj4Laz9DfcH5cEBbcKs6ie7LyjXTWJ7J5jjdFnxSUvfFD9YfnjV",
  "key23": "32epZEFD3PfzQd46co5MomMsNy998xwVFbwuprGHB7xPXjxmoeDAWsHedrxpQMbtaLZrcDdNRnuizMKTV4HrhQLQ",
  "key24": "2kjJmBU9ar2vdG8NaKjJ8tbDkCu5efgbELu68FBobG2SPjWB4B4MPPCrNKwwa8e5PG66yxkNE6RLKm728eqiFSNR",
  "key25": "3FuCk8zAPD3KkRcko2cnoMTCDvyZHUyGJFHBAyb8JNhMG2AsYWRJ8ssfQcQeTHpUjaoSqwAr3b25shn2LUK49toY",
  "key26": "5rCwMXgH1YTzRnFKb7dVyzzbVECmB8DfrKatY2gVgA2UX5ngioadxV8T1VPncH84giqFzzb8vybSRqauJshESMZ1",
  "key27": "ixjF3Yn8N9KoizykDxXBzy1n1YUGvvab3HQvBfGgsGjWL5Qk94sPTzNdw7FfvZ3iAFADSerKWyBjYnWs1hvtpWg",
  "key28": "5DvDEvj5XMKSHvAeNVs7jvHBvpR8j62QeYBprRzREK1L2pmuyjp1Zz9SGBhpveS9Y3mp1EGD5JaC2gWXR9gWCoD1",
  "key29": "MZ5D5FBQzvrvgdkGtCsJ8pM9uKKrS7WNCvGTTVkPkEWnkvVjhW9F94vYb4Zr5FbWjAG1sVjqmUh9k49QPKPo7ud",
  "key30": "2Z3rRqt5rWRVETeeiHVomXhXu2ZcGoQtG9C4ud8QU3dYaBkKn2EMnSt8okBsfBcq1yVVonyuKiwPs1NzC7LTUqtn",
  "key31": "4ZBhhD4cfQKNd2E27EBA3xSfGwMafEg88v7rywv151QB3CbQ5SgRe5ppstkxcNkVFpREoMFyiVBrDvKBJfygC21u"
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
