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
    "65zaiG8yus7Tn9U5Zd7m8sxJVNPHQXCrMrP137wZQo2AGUvasbBG8sZjqp4nToXehgVU3X3EMPxvkDbR5T3u6rBb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xhpy9dojsxFTYBqmznbWck43t4xVxdWdeQp6y1xKG3JndykQiH9zbBNRJS6dkNZrbn1rbrBKdN5TWzLey2PQtHk",
  "key1": "2iuxryoy8ZQ5Htr13Df9mYa2bPySTtCU2qVUiLzneSRtnWAkT5igzNvw19BmVgj53bRFJ5EggzZBaxRxrHt9aB9e",
  "key2": "2LbqCmyNaLPkBSHb1BDdnzv9C2qwmrqgUGA7uJAEi4PjjR1Q8Kb4z2NxfqmFbewQsNq7fa9WyXCSmthKEASikGfu",
  "key3": "2gPJ6ijKVchC8vd64XfhFrGvR1D3K5eDwXyr5VgiP4t1KtNSE7q8CRWvYMZUVoo4kdQrudVJqPnbJayoxSKamCfJ",
  "key4": "4bjMbpxQ1uSkMJNt9BNTyBuJVPLg1AzpzLTaR4AFx7tEQDzyFEcqa4aYJT9UVcSeWN5PtvQ7bNTbeKcxK9VPFcED",
  "key5": "4aNzT7HArW4FCHobbz3MShgCq8icWQSTRPyzkJhvyW5wGpsLL7HHdvZwZacCAegPNqdMBhFUjqbPW2WbutskvE91",
  "key6": "q7Sy94xULLU5Dsvm1pfSPeaENNVjdyaqyoHJyK6XrinFxANiaC9AyWVnLDRgwZ7mx8LyUrxgxTsXNaKWC1PpPsJ",
  "key7": "5n5qXmcqXFTuzgFnmYqzgxaLo5ZNTNUNW8mERyeZ3PS7ZMWLLaqsKTavssmwA2ubQz1qXRRFxqJS8G6kERk31fvX",
  "key8": "5XM4SMwSH4ycjVcB4HET44yyR9m8HFGApZnVijie2kuCW1eezU1BsWdcGbaFTUrEmwBhMbJ6bezpwuphZ2xs528z",
  "key9": "jz9m3TbHayhR6E55d4VBuFYsozYWLFrYrGFqUKWYJp71FHHu9eojp3DQNdEPk4SRQbxJTtrJ7bsBQF3DbMRAuex",
  "key10": "3myFXCNKM8mxpkGChQ5AM5r2mtNDqgHQLNe79aVp6h7RTeEz8nyASZuQMyJPtWQZ8sHAteRoo9fvtyn1E1BrNYBU",
  "key11": "2VKojpKFqVzgH8xbYhMaRtgUZTjr9bkwis4e3JQTHauBJLtoTyrsAmoucT4xsehbB2PULK6nmukWnAEUK9Fiup8P",
  "key12": "3q1BiUr7JcGq9DmWTLC2b2izYUMwBpBhtUa1rtUGk4FV6gf7FAbYDxDwmveHD9vtoCs2UpqpUK8VmoDnD5TaKi9n",
  "key13": "5j2PaeevrKjFPbMkEFZoPMp3FtFe24s8U9iwnbWzp6wQbiWMiVkmmagWqP5tMAVRx6NdKpywAAPMjUM1sfA5AyWA",
  "key14": "4y86AYNKVPDPqwx4mHRY5fsL4VASMSftHb63ybPHSEX3GC1LFzqDGcJALRyJVCt8LHFuAPJBhVhRQrm3svU2nfxq",
  "key15": "m1UQeFR1m2erZdL7xsbCD32HuQuTRpFsSDADhHnkekevSUnNCwUkqpXmmHeij31PnayYxmG4z4agUYXqBXhB35N",
  "key16": "4wFwoyfc7EgS7hg2AbSbowr9DdErumBceCJXEVzJ8u8cjmVeFKzDJWPmSEaLFyPHni67M1S8dKVSW7QgLdJkftB7",
  "key17": "4qtLcbhWyhH8LwyspMjqwqTYRuCAuXYgWDKHqWz6foLacn8ZbWEcaFieEsBLSnxA3GgbvXbxdMjZGYaTaTZ2haWu",
  "key18": "32yH5iznrk5QMF7pD8nhWUCPP6jr853Wtqk1FwJCJwPoG2BjfcCch7tbva7GGP7btEMqYbjUYRRFyTe2qPxdV2fj",
  "key19": "676z1A9W4DK29Vjevbh13gtXdF44BaNmWKCXiBhzHD9udASx4UVcRXedFnRRxLkfBgiKp5FZ6uxq9TT57qjMrKRU",
  "key20": "2t9w7BoFf1fzBFoBs2tyXhvU91UtfoTtPWCkQyk4p1p6r3Z8pG4c33tgAiiZwdGwKVy2PyjVZoxt5BQ8oiXZHYgL",
  "key21": "4WeFDcL2V8HmGMjWQvKcW2y6Qf565F5Z8Me6JmXhdpH3jq1dxpdbZsyVe8GEK9bGK2cUgzPYWRHeYUWHediyKL1o",
  "key22": "4HCNy2E1eNLXsW6CJHS8NGfwmhQA7tdEecrYvjnK2AXXZCkQg3xTwLFTzjQJ8LgTxCrzD6a7R9pT4QVUiQieXWuF",
  "key23": "37L38rjKcdTcvxSM5SrRLbA25GtqWFBWFvA2hHBESdKqSeeYpRBDGxrLcewPhqm8L3V59cqjGXkLKaoGEH757jm9",
  "key24": "5UvSY94q1AYTKXbsEqp3pUUtoYkSqDjCBQPdu4mWiZ9X7PDx3JdtEn11hnmRvs3PBEAxNP8ekyDH77UDupDw9avp",
  "key25": "2uAFtLaaC4Ytgkh4vFzyLRcdoUkFYN6vY6fJfsc4Eko9ZRTiCvooxyt7wT66n8NZTQHrN8493VVmv76k64mpfjtJ",
  "key26": "3E6gs18hBACpH2dgVJ5KiYPMePV8UydcGfRAzdPobMrn584QuzBpg6uGxnqMQZPJk7VwAZ83nPhjedd5S31JXpkc",
  "key27": "kaZaBBN9eLLpPeiLcZwotphk15JBGrAoDgdW7D6HmLZ1twC6dTgx1RRmn19ksHpBSbPyBLWZwkufgG2i7wvq2L2",
  "key28": "4ePJTp7k7M2MSP3qP2KEiwxfrJ3pPwuR5UQ4cBxMbYAu4M7ceHWLuU3pwNjQYDj1Tkm2sy4ESwShPPwAH6euQgqD",
  "key29": "edJd2afppoNLY9bbTRFNZ9gNt6rJwfsQRUNvue93eRRehiUgRG45B7w1BQzW2cemH6xx9TXWLW3CTDuWAXc2qTQ",
  "key30": "3uoj8KyWkNRPdB7tUwjeL6x2r8wjtD58SEvRAaGXREJwS3WqqzHu5dct4a8bjQyFumTMqNfESieonYn6dhLZpHFz",
  "key31": "2aQqzcTX43x8g1vVXzYXZ7KTR5kfSBADvmGgMbpLv2Ah16NW62rDZMJ4rHP6jTSwubWtQk96AyfhY7ZwHQrAtDQb",
  "key32": "58Y55SM9GbMX2DtpMyiPGChThUCrebJpkFEy24AYkaE237DuGiTBqfYNXLG8TRL6WZgafqRh8AvQsJCV3r3CeAHs",
  "key33": "4PujFzpwbEd18gu6jXPseMU6ie3F8cXqk55ftasYFpjinDbsWF53DbiR12Xs7mNBKCaHGJ2MennxcZnGhG9HjsPU",
  "key34": "5bVp8BnExy4rtD7boaqrP2MH52QCG7emgbjR8mg92fQsyYPpKFMhQW5KN3j8nW52aoTS9r6gNvS1VZxhAz85Ge3e",
  "key35": "2uNZnwzTrAdkXez27QgjihqBknuBNdi7VTLwjTeYnDUwXvQdQuFU9vyeAZVHpBn8DcrQm5ZsLvLKvcdwVSLxBguZ",
  "key36": "3vNQJiyCowYyKF5s4zYVMFREykRkp9gRQPQAj5ZmuupNSAVk4XsHxG9WJ6PjkWkY4kwg961ske2k8TkAc6mmNPPY",
  "key37": "4SSQvy3q7Fj99y5wmFiU1aqgvd6iviFAnnDtK3Zw1tzjLgRr8NRjTx2RqZX7FYeeT19ivxhcDufiYf9jD7hpXXkC",
  "key38": "45TQG5Vpce1P9PbDXKKyCD6KNBnjifUoFZB48FnKNag9stCfGG5sWTXZrrp8tD2xgNoFDhFM1wm3DEKZTucKE8fT",
  "key39": "5xa4WjTYpTEdVTj9b9vUXY3z2KkgiwQGQgi1TLYzcd3j2Z7FfwJeEcWCCcjSTMAPMtAgDUremJDJNRM6txAaHdg7"
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
