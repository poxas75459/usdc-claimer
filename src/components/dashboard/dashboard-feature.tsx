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
    "64WDSfNQ1GydrQPvZeV3x27pyis7VrMzHSV3HkBMXLhx5t17xQL7ZoZdd9uAYw73Tb66Nf7PsQ78NpMsrzWv2XSN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kkC2Fk4SNgUTFkUWMEGPVLGzYUUX3P1WY78rAd2eo9JCvDTKbSFMTTxo7KumCk1f8UtZJ6DyQrBJbqWybJ9QzBE",
  "key1": "5XLo2iFjXvQkaPFiqGPmtfuUhpBMrTYpb3GjgYXxUmo1jDVmPLPywHvhKVXySbJkkVgtFRysWp4THS4F5bM34NYA",
  "key2": "37stZAQEU7h7M7Ryt7FVuebdu2QfjhfaTpzKP91ANoTpqKEuv3nzuBhg5yAsoC6QhCASYTPPWiscPd8EdrU9UVPk",
  "key3": "PuiqLp5qsAZj5TACMhtjVCCCppfqmftNP7pY23DwFZcCiKDk4ikXtqA69nXGSaxwVjS3tkpYz6kmYVVtswQzA7W",
  "key4": "KCfAk9Lz7wM6UECxTD2sr3duvCLhRMZvME5kBrJWwiGLxzgve4Thyep7MmzKcsKsK4CCqFThPKSvTAgbcL9BxLy",
  "key5": "4zmsYX8K1tScymCC7Tq712xYGoNhoZTuG4YzUaWVeHyLKtGAeqdWoLtMZtXhxFn1re3WZfWpZQ5xq2Q4is2tqnfR",
  "key6": "5movS2VT8AaA8vrQnVQ3scmLSHo6QJbpdurfA4FkyAmnmZReT5TbDVceMR1YptZnPU3Du9gpCWow8CTTYGZj7rRo",
  "key7": "3ehvLjYEVMUmph8K9U6QzxxQgE4PMMEVgUhSsPP3Yyx1ojagboMK3GDUeErmJEKenmJt2gYGHGt49H6d2hJiFkT",
  "key8": "3gN3PbikHAJuRdzLCDTo3YirHdQYmVZ56jU9M2BWTkzny7ft1GSV6weEJL1GEjaYxmdXuy6ADqT232gQtcbxcvck",
  "key9": "2nkMMob53PBAtYToitjMCkRqTj63KE5FQQma3XBha5BH5eF7wNHEQMkmWbr3CiTwxQmDvwJFYLaWx7mAVhBJRhgX",
  "key10": "2AoS55kJ6qoCJnnY8v4YQsktuoyGKzkpvEBQ9AZ6kNGgqHig7ScDbYV1aadyXLAvvz2kNJrR49yHWEEsQaBAr6Aa",
  "key11": "2VvLwEqcwm4ALhBDp5dd3ZpQZr5ifU8Na7WCKgGQuvHNwQbonNpLVFNZ3qMDS5GssJK3MRGF9tBvCw7ULZt6xCdo",
  "key12": "bdA6bQ65kviEyiUp4m6V2zpfyvfbGCAPQiUosZdnqDkLp4AzepitNouayGGfTp2Ye9rsNginAfDiyQGfTcWp49P",
  "key13": "4tKEyuXd2i9FGs26uAFnQm7TJPn7WkavLtGeiguuPtVkL1JspPUDg8bSALYTo14ySNCKizV9G6D1hBFRcPWNE3rD",
  "key14": "4NV9qmt8e6Q63Cz2XUU9ak6TWzQyXWQmkABtFVDs1icd5PY2oj5NKssyYPkUqrPSDocoSpunHtVz1y6J8FPV2H7Q",
  "key15": "3w1KHk4ozNKbUFpV9MeQfYaAqvaVsq9TYiqvTwYc8wzDuBf3r3KwWGDAt3vyjcskre4DgfSZAFoe52GssVzjiNpU",
  "key16": "3cEHmEvtNmhkvNQwUMHt6KWZE1eyL6CNHhWBnk1cjznxnJMfuNkzQY6iSM9Q7iiXE5KUo1KYD7SskBY4XZc8VqSc",
  "key17": "3qnm4UNCkLG3k5LRKNikxHbs6NP6qkJsYPPRQVDMx7LP7eaFZgrkfMpWrJyrBPkwc9HAKXDCVYo5ATD9ztrMzqhs",
  "key18": "5sL4fsZh8kgM4zqaD3HqemeDFQN3otFG559o1rF9frgcaMBd6bCwmX4pPApHdmFLK6RSXuwNS7vbcNtY9c2vohV3",
  "key19": "1q8SQFbcL7cdCKZRGUiEByMbH7P4Xyh3qhP5djQocSP8316m9o61dCWr9NqdCknoHWhZSUdHofaLZunv4Qv27i9",
  "key20": "7rha3CUuWBSL6sxMkrP46Udx55NtjNCJAnmYCEWnoYBvDjSv297XiHrmWpnwcAeVkQV4iEzbQEg3RaPosdCeKhP",
  "key21": "5mwXw3HsdnxW2Nxp5gZsjQ7iXVG5QaoRdkCnLVFLZa7qMf3mGmkCzHEr9DcKiigTFVCrQM6t5zyMRz9ehqDbtQWW",
  "key22": "5oLvNKgWMAvbYTczuxCgeQpwcBFaZu3Tvb7bVfKsyhqcmqgWby41wQZaenNRbECFYnkfsb9mGXbfceqPffBpqFff",
  "key23": "2esWS4csJreMMraNd6Xkwgaa6sSbeew8zcAexaRKhAv8jF8Sa7yZ84S3zMaHQuV91s7jtrrGpPjouhE2vtvvk5dV",
  "key24": "RMGBEdx4s9cLdmrPPMUSKWFr5ad2smY71r4qKVD4hKJET5uRR2vxhca4KHRhKkcJCn7ExiiYnsRgjwbnxhfBG7S",
  "key25": "5387Y2dbFrcQ4uDq4LZeCqkJvaLREJrqskxCkw7AvuMRgRBMrt2kZRVCeUEobczwpPTuXrQe24vSNzjJ9GGiFNN6",
  "key26": "4aSRfhRryUi9zGK1C1HmcFnDcm3dqVkPXZtqKwPkUVRsY5oKYn4QTQeLNxXY1wdeB414uASckkyukooEPorz9zDx",
  "key27": "3VMuS8pC7dHFufXsqP8GVjitAnT1ZKqYatVf8BSZxj5xgVxH3tLhjvSnzkZoYTyCZDU5A4FAWBGMTspzs9YWHHy4",
  "key28": "2rvdXK3LWPvMxMznUEjB46rSn6tWErLbUhoJBpvFALsTbxo3ybX6W93Mvir6k4rZHbE7xTGuTRQAnk1ykVcDZKCo",
  "key29": "5LtXFKCkzHp4AKPsvjmgtyDrVjKpJCHcZEBdn8BRqeqsaKF7BXWaRgrYxTE3Lip3tUvduubPiVww75criHsM4v1F",
  "key30": "5uTG8CMXoQp32nxaAaX7BxYShfUCFJQN8aFVXaUCauV23pPARFBSLxaddviHqt9UGzdhUgNDQmsVd5b8czNcdtP",
  "key31": "h2zuzhrLzE1vWHzjn5DaW1yMX1KD5Aw2RqNtV9hR2dVMLMxfX8RMcuX8KBPXj8V6m1wSosC2NtM1mDPb92ZFGry",
  "key32": "BuYwVJjQ1RJ3mKkkAEjeKrSqPw2QgKLkQH9Wvt75JG1QPk3ybwDPqGvfSzP9xRZKyUGWbkaKqWciZNrMeBNM85F",
  "key33": "5qLDBgBUngAtY7t3ZzgmhvNowdPLqrjGt4sgTvbqQfhxvv6sfd2jF1mz6SUD3rS5ZfwkfACPgoiup7nj38sKE4qC",
  "key34": "3R9e2gtnuDaDVAouhC3VMsPS3bmqVzJjfpkm8swwyPMUUZAX9xfCptZGhxBZyimKFtHT22pA2fyud71WgVZTiTZr",
  "key35": "4Ya9y8RMKTrRr2stUNFedXs7JDhVh7kb3VMwocnnRcFgfBZJkUjH1mmkYaJMAovSmQPtco9zPb59d13kpLK5m4qU",
  "key36": "3Rbwp8tb6fvy6VmPivojEjQSRCxpB51boXsc8L8ekcc2m9FkTHUoxGtwagKYmx58KoCF9FX1GH3T84bU3AocvHP2"
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
