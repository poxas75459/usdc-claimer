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
    "5VHU74civ1BF9cUJUzWta3hWdoz6XT9LGgUmpToasXW6jrEG7YfatXuiWEGEopGMozMS2ZpucsBwExLRCSCsxRxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n1Y4khjAvuX5McPNeJJvfFBH3i6Mr9ZaVquvwXGHXTMk2yx8nexBY1n8yHd84xLodkuCV4aLyv5Yqtc4dxAYjFq",
  "key1": "4K9pZrnJKKyxqLHtxvF4zybSToAysXZv4VQQyc46JXW23RHsj1WBmLfnfZH7nD6hRkAa6zQw2yQWibdwAdp8oDkj",
  "key2": "5bo4MF9Lf48Kptx8XHkAzHSyXxELi4QyTG8EtoCJ1Z3azPsjnSdAf6aUyjQxiJ67SNEbe1aSRN1J247pRyRoGJyR",
  "key3": "2j4aKe9GAAa6M7AqR5krmwpNNkG8atxMnvGNXAxprnALXa2SHJziT3x55y6hVGahHy6qtyJtkMDBg78QYg3pFLui",
  "key4": "66BDg5hzS6L6G8yaXuDUc4yWCRKPQKmDmbTdH1UgEoaneKJtqKsRtJurfUhFhWTrxmRHvRHWzndrGEwgLRabrMQd",
  "key5": "4MFMSZ42rMYjEqGPLt8mbyVAkRyWgUHJq7Had1WKbMq1CSH4YoQ4MP9QGg6KVym6SWztQ2L9CuLpg9HEQ5VjbHER",
  "key6": "4jRU5QgRKaUrBWEnJsWvx7nvLLZrxL6Fio3JKBv9TrTXmRzhLKP6M1n3WaQjQEiTy5CXhUJ1xRje2JgCxs1chhst",
  "key7": "niMnm6HhKZmvBx1dD3Dmm4w5NDETfdSgkp4o86ZfxrVrXgdGtVASzZV9GeJLL9QyxZLaJHSrzAa3WmW9Xr51HCG",
  "key8": "WyqrQoaKJmwrmhjRZxdJfJzeRFSozGhkaDUa4PidHmQaDpkECrXMCeu6fKWoCnft58eUb7rRrNd1zzQ1mb2R2Fk",
  "key9": "26PnSxCpqZLSTRfaXA2QSir1gxHsxd6p7wsDjecWfzHCSZEe9hzqSafizL8KReTadLGhnbQm3ZNrChH63c827LGC",
  "key10": "ka7xVatHzfRrkRhEM6P6tcxniSw5nWoA8kouHmUPo4dc6cuebceoYdSvTp2Ru9Bn5VywuhYEkfAWDYQrrukbk5N",
  "key11": "22cnGKe9PJc9kDUqgjZ31dWqR9q66gFTA7xi1V742BDXaYsnLBn6ss6uN9H2R8dD8jM73U6MvWKVf6CtZc1zA921",
  "key12": "3LWFGpZjmbrhVFP83wF99fU67XAJVcR81vMNNW4RvNj7Nj41AUKWALKfFJQeK8WjF2VR5MTYaXhZ7gN9jLiX1Bwq",
  "key13": "5jRT4kU4yBBh2bwRP7PZwaWYg3x1Hq4h2jxN7mLVpTMeYRVCpwssYvM5WcD5u2jHu2En91QHLZt1qmAjmMYd9fV7",
  "key14": "4DqdABetJ2i22TGGqR7DyY74Ewpp3LabfE31F4KSF5XG9YGMPyZMEoXwZ8cBQuYYdfdGwuWHGvjmLxyGdi3R1qo2",
  "key15": "23sieQNbt9HCXzW9Rn7d6EgZ3bzmsut1NnmgXhLo9bvDmPSKVkFv9rDvpKywcox1WjsgqtnKGFkigPoet6AHPMjc",
  "key16": "2TcnhbcvbUm3gvWao3juVFhr7XJvr7fATYo4jU9G5VoP9PhzGvERVCPLxHHNQSwSrJfGRNwFq6aTbV3MvZVaRQ95",
  "key17": "48S7qaHmRWDdAzDgFwzT6PVZ1aY2Uov3iKQHLAw2Gb71sCxJdirFdMPTB6kGkqbEB1FYL7A1kYiDXAMJA1N76vhG",
  "key18": "3W46MbbgsrCwHaGCHwduCLgM52fXVjKZ996jvcTDKD1SZvaQzKQLXqjCcfNoHM1itcTRDdx7iFbVa2RvThFRPAAv",
  "key19": "CXZahDoVVhwgpL67JSCGRG289czPyLokPDNPnomTsAjnxJXV9jwunjVpFKMvSRc8imFE3xMhBswGyPab4bC3rpo",
  "key20": "2WSgUTGi5iHRxewomYear4KhTXQMLxTYxP6hmEkgkWpo8CaFFUR3XCHSKtTYdrUwtJajhGH6Xoad4Mi37HMvMSeY",
  "key21": "4F4mTLxt5VLeQSFXKXye55EPrb1x6LpmdRK2GC3kcEWSbkkKHqG3rjyZUjgAjz8Y4YFHpqVWxQiikTJa1sx22WHs",
  "key22": "2TQH9LmQGoPyDroCYgSVig55wjRnmhjdiQB1bLiwXP6A6quZK1c4r5DPkRwDas7KZVFQWTLKP6Kc6wVi51Yaa1DX",
  "key23": "2a9FGNTPMkex6PWKdKoQS7baFyXkSqfETtDR5a6eN8HYYk7XfRGU9J3H8GYaSJBm9tohTLtz8yQbN9yzECDbnzo",
  "key24": "ZFrpUgEJ45VYHmawUXjGXZrNeMLE5h4xxqXyeZMP35KwGUMoxtJVrAq5mcbnYXyv1ZNFdqf6x4px313XrEq3dMr",
  "key25": "2UAwuEuzJ6erGnx81iN7zZRQyr2EirGfE39Soxh737DvrNWcnipKnex4TPdupQQAkjEkSLFTLvTTj7ZKnthwLD4P",
  "key26": "4BWsc3CQ33hdf7JLgQdcbXe9nJXBe9JFPjNN3cKMKiS3obVcGVQeTRz3pQhEWPqoARpbcV1575JsGXXdSHP9aVMZ",
  "key27": "yw4rrWn6mhgcDKTNsGSeNgB1PFosYTn4H3DEm7vvogvZPgppNdrEsWzy2EFcGGtpzjbeDkuUyM255EcetBRDbBp",
  "key28": "38mAkqiicR1i7pLnTvgy1tsTfhg7aLnmVn8UxJuxwE7J1tSxUTZtCNK2M5CDvi8rDdd5amtHg7KEUxARTVbLoBCD",
  "key29": "5aQoaPouVrqWKExHy3Uh3RPTwXm8mhM7gczQZgYb7kSKEkY6BA74o2qMBcMCkPLRt5bRTd1dqWfLAjCr3eceeJRH",
  "key30": "5DJ9x96hhLpsjVuZ9hn9KhF5FyTEizJbteLDHcr9BDpwUiXXPqyJFqqK22BJFodTj22SXoJgKmdnjssqoZj3nmoK",
  "key31": "4jqjoRoUXrr2X6Z52J5QCw8Fn5krMMd8V5LG45qc9gE9VybRJuDsh2iKoC9yzzSMeEMzKN4ziM9pY4yZs3gDFPoD",
  "key32": "2pu297HuumvA3P2XFLu6rXWVn64SVTG8AMP6f45EUnVZ5STtRzqv5W5wLCUUkYk145zeKrHdQ4QX2pyaB3ttfZZj",
  "key33": "3uE4B5eCayX6nuUwX5Ya2qJa255Lopr9vna772Yny1w6McTL59pmJAQ2CsVLbwUo33Hai9KhApShdqCdiVTwW7Ln",
  "key34": "XN4d3U6prL8MFMmzrRWvn7pCtDjpgcZ4yNXWyZE4cWvKiGv4JNT1U1AK2bwoRrv2VpstcVUQu7z4tN17J5f557q",
  "key35": "4xMMrNjgoPRoQiuv7SJyTfYpwN15G33CwucTSLByXb6Hku4iiFaKNHe8qGeQQTeYbQX741erVEmkMSAr6iyTk2in",
  "key36": "5Y8pdbhZxRqx7zNfADsW2DLJon77NTRcNkKHd8PtSEQSdrhLXjyP1R4ZLFBm1cMmpX8k13HJGgnxtB83UkcitK5",
  "key37": "4Z1gLV2QvCoNCncuep7rFQbUHeuPvKhvbPfYKRLQQFQfbfPHx79ee3uKkzGTaCQC9wTdwzLMkK2i5B8WdE3RyyWe",
  "key38": "5fx8ApYMwqQagnL9kMoa5zawgpvhJy7nQavRYSzLAnSgQCZEXSPPDVtjMWo4ueLQUtpmPM8SwbRcYeCfLXDB1qrN"
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
