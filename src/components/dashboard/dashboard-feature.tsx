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
    "vxGXD13LDHRkTtohL6KbgghmrPu16fVbUFQWHhKwoVBdj9yPp16FPSd3ioutRs6oqh42A9wmxuypJ181qGD7eX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pcpezs9mELqooDxjYGH8avbPL6C1vCy9FvTs5DW1k7obgG2evFDn6gUhqggnVm8hSKwrCQb8E8CJxMAKC47NJ38",
  "key1": "5aMNkCZdxox1cNkSDab4kngK93yF25DVSK76AyMLbeGhhEq2GMG74Rf7WZitAbiRBT7TBzMD1nNcu6hgpvKnARwX",
  "key2": "3K2yD1FCHsnUnRBeNVCRxwLYGfuqb5cqSbWHZRDxPfLwwP4vEbuBiWuDyUeP4LBZ7TtK7D8wwnxzNojzz98CmPZX",
  "key3": "5JG6HKCGLoje5uXZ6WyvD3AFdhdaodzzHzzGD6b6bpk5iw3y1a8zv21MEA1nLczwpMXVHfzq1inXXmNhfGJ5DUv5",
  "key4": "5J1fCeLhHo4ACzwnrYxw83kwrys2r9FuEHVbziPhk1i6mudXRmP1qKSABUWd4TTZTaRkveH1qUvAqYcwAMRKa2bH",
  "key5": "4uxvbKYugghGmrBtgyQqGLBxQoteLvDU4d3kKPpQLVgbnnNZPhrBfcDtXooUw9eFk8dUrcvaMoLCp6KAMi2x4V4C",
  "key6": "249z3dmgCVSdB8fN1oTjv4Kw3uVL7aSo1oeJHGihGwcUHTz55GHGvUWzXrhtwWLTDQVSPyvjVa3Dfx4N884ajG5A",
  "key7": "4Upt76ddQUY4FRZ9WmQYJt26kcsfCeuQHYWeiDgRHw1GZ7roMxpcEtW7D1WVzYeQy31NTcfKXgFALGuRiatLN9z4",
  "key8": "5Mr3fGcuxLZkV5QE5f4BG9RPNvEyRhuzftDoUD8tzDpuZnA3buLpsxRMKxFbW99qsVtCuaAfRnxoD7cttuSLi9rN",
  "key9": "5pB1zYRXDd4qAepZQEsUPUyaA3YUMjQYZ3Z6XwJSYLXf3mGk4YAZjb9FcXQUW79Rr8jZaGyyFuGktzvg31UMEXiU",
  "key10": "gb3XfjRMUuRsQoApYvjTAjyyK2o7bLAA5n8Eaa6uLGUdXXujCkEGYkKkno9jvjphu3yQVGSjQAkFzp3HpKVHnws",
  "key11": "bVURdtyNy12FCXUUq6r7JRP8E6ezbz9YYPvZzdeQ4jvq6bbUou1GwZrALyE2qgnfogcYJgGprBuFFQXYqWPV127",
  "key12": "5p8xXq76rLjPjGPgbv48xdrQz9Y8BibHFNEH479BBNjYRBoJ222kTVbvEjuNHK8yTtRMGbwTZnBHuw2t9MUaK6Ls",
  "key13": "21AYzCarLkYUHWeNb3cHYMb2MRC7tmXtVaYYA41KKjv6pX38yS87M9EWCpnZkW2BiUFer8E9SFCj7u1aNSjoHYRE",
  "key14": "u2GTDFQfzM53ckL8ZAW2wGDEW5qKSoukC8eEat3TjKwae1pXoTd4L9hAM7iTasn8r6RwTH6qKcLeTzVN8NCWW5v",
  "key15": "4W9qATE5nD6bajJQ9De8wHgdQzd5kYAS4yozrvBWTow7RGdzx7hQspBq4482uELJdncqcJVpWLF1fNUCw5QxFYXW",
  "key16": "jr2763sVSPuhrMiB5JsLXcakXhsMTYo1srGNy8ty16qWqyrKpau9Va929JVzFTFM2DMWJPG3fJQeQKeZS8Jq2C5",
  "key17": "5BQWpRTWJHwU5Bpvxjy1PPXUYSWY7N4VoHziJXmLEEU75iREbXiJSoJ4pemPG5y91tCN4nJVjb3gU7VTRKMT5DNR",
  "key18": "5rB4Rg7dVcU6D7xvYhKizUZHKAKXbwM1aJvJkBuYVoiqqRoPBRuVv5pkFd16T5HADVuGcuuhnBAZFxsptu6DgLwm",
  "key19": "xraoW3LacDirfcd3sBbqv3DoR2uSpdQQW2bnpfTb2iFiYJqrN3JWH8QC78dKTQVzDZKZ7ixu4QT9q1bFL8e63kU",
  "key20": "2Qb1tcn1KB6Fjs2Y176LznXN675XcJk9dcvczGMGzAD62V3ejFe1QcE8kht2Zn6yJL2wTa2e9cnWehxD94d1dN2i",
  "key21": "5ZTqHSY8J6QCL2vhE9XohNvjdG52XZqL58KwLmWoJzTGo8RPb2PNMuKYbsCpccR4gVLcKK4NYnoSX4Pq4fHY3Se3",
  "key22": "4xyaV1LgXAb2tiA59Qonkn9P8QF1QGucdmspy8663ryfYRLixUq3uwoggP9mWA5dYg6BuyuaJSvf1iTDFcdM5QsG",
  "key23": "2bkEMJzHG9rFZZhhPagWsZuAdWnDqR7RBz6nBaRADT7m3wQJzW6wjtytZaLgu7u2SUu54PSB182iSgs3Vwp4TdBb",
  "key24": "2haTe7ivfghoJKBhBRykdYfaN4rUCbu8PP1eaYFjSFSRVPnyE4tPSS99SDELu9kxsRFfrEYrZ8iiz4isKPrCBAtq",
  "key25": "53pS4qucuJn2H5Zm4PuoRczJ1uPvFYXbmvpdwQuWb6cBHCBsX91RrSgH3oLxy23mhuWYLjqDweWREDpwp7S1EW9d",
  "key26": "jdRuawBTDkybaLqnjUy86yJ1Ua7yZv4tAPDhFGZKyCcGCHPK3gseGSQfQNpXZLhmkxC32oTZxJxFHHR5hZGseQK",
  "key27": "5sdLWCZH5R6JRJA69Qo7DMrLze53cwr7ANQvN847kk8Jyqc5pVyTTT6pDREy6AdnXAPJ387AxFEkXpycrttZfobe",
  "key28": "3Qfd3eMDtSxugwWcABJg2fsLoGcNQc4eM3VTmvWPK49nM5LbDbdb3xYZfqv1dNu8mABqGiD6nQMjttArXVBCxv4A",
  "key29": "3baLonVbXiX3RUAyCnYcdFxUe6DQ9ZZPDDKy75WQhAS2SszQTVjT9tZo6715N5P2ZPC3hK71E9nvwcDqMQDrmn3v",
  "key30": "2Y36WqQCMqH3d1F1LrTnJMkpEaAgJGrYdD9sQgywWx6ZQN5d3DiHRyrdfDrwHxufnEFAWj8uuZaGJBjuNvByZriJ",
  "key31": "2A9Xju92RTneg6HDssycwPqZu7FmQEMXctx213j8fi4qaTYgdqyhsuid8cWJdBi6HpuFYcBCaEZCNUd7VgjRx5En",
  "key32": "3SK722SianUjqA5ywWgFuXt2cgFGBH72XbbVwx95Y27qUUvqoQz2xqvVyQmvywSmWn8oeRen1biYmmXCUkwqPWJk",
  "key33": "5qdFkkhgGYfWTWYqrSaXYwbSi2cM787Z15HjobybFKozCcbz6S2Tsg7r1usLfUoTv5bNAQzh1FWinkiaX4q4n8DY",
  "key34": "4wFdHNbmgykw11bw6qxm6nMA7TTvitvFjj2NEKAqrAeV65i3LaGrBztSVgKuWFoj9DcLyidt22gCsZzLskXFYgoW",
  "key35": "PjebZ32Hq3ojnAGMG1C3zqd8VcLmfJG4NbMoUoBZeVKCXGgEM1BeDaw9TiovffdgkR7VcSPPT3YxQp2kKVtUp43",
  "key36": "5AVQwEeopvuP2ZLmiWDiSEYGDkhJ2wfR78z2MfccqhuX7MaHKdFgEumeWEvyJfQvwx3zRbbrSZYr59Te9s9dWTZK",
  "key37": "97UXsSXsovfqsFVDxUQus1HAyDdBFRUTdVip9dRo4vH1AbvKvGu34P3AWFdWasGZTtwRzM9zUfFWpFhbUEiCAa3",
  "key38": "2brstYocvFzM5mN4dbEBHJsqr7YhUr4UCHxy8qjwSoRmGJN9EyGswk7SMFpRZt4RzFdhCKy85gupxBCqaGGghayX"
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
