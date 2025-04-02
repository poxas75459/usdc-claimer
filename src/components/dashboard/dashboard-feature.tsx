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
    "4pYDaVpTJexhvV4tNDibhv9Cufmnk99fkATivn55vySZXELm7HwTYaVbawYcnGCRpLjdreC1qKtrcMXkHY42yE2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61pfJ4Wj1fngRtfmBakbmXfG9kWZ9pwinohpkhvFwP2a6AsVP9gtjew7QNBL3HrnCyfTkcrpPRtJLve2YwB1oCip",
  "key1": "2EmpDbjeTiV7LUF3zbB4uS3eWhpbE7mxB7x7xwtyGXa8EcoVF16cMJGXvsSzB11kTaMvqAgBNPn4EhqUaLuXs3uk",
  "key2": "4JQ8EUpmT41EVi4HT96pfbYhinfvwhJGgQYjHCWuXDSUm9mAicQcFqREguJ5XSgtVeJjpSs6VMmG3VNnZC6rSYKM",
  "key3": "5rkEvoE8DERGSjuzBfMzPLgsfWctiEXouMcSWJ5giEXqJHSvLs5CJM8ENm4LyTaQE8G9nWKjDREDj4R4CykxBEQK",
  "key4": "2Cc7p9pbGd3r1Xpf9A67L67txYWj3rLoXWhv7A4jDyiN9t3CD1aSCsJPkHtDxj59CQHbmaZYpe1WpNupbrPdYdZs",
  "key5": "35nmvh7UoDgKoY3Tp7buPtMLWmCLMwWrWAPqeYraAMJEbhetvMUHRNmZzNXV1jzj1TJn6WTfjXihb38dx67mSSgz",
  "key6": "3CwY2L6Wz5wDb4ubtKEtGThTTK3Nb7jG8ghSsqSNyFts1XLdRMzXqzhbViC3d3VponAPw71RUuRfp1As5T4jXY1r",
  "key7": "Ch4HR2Q5HixVXd7aMwG2KVgZXHNcB7Fh18uANg556FJEHWNHM2to9o7fTPMjunSzwtHehRNBf65iThXQQXvuVfM",
  "key8": "58rACEzNA4HdyJyCSC633DasGpBNepvr31Rj3Ge3adTLKwLrUGXT9SNG7rQSQxB1UvthfDzCkgR3qEW5BYhQ1f7z",
  "key9": "qSQHLVkNp4EqoALJdMaWExizL7nYBk71TLCxq228WESepNfhZ4ocjDwT8UGmi6vUSwrDCXSBmQpfrYTBZdasT9D",
  "key10": "3JGDuJ2TGuMrvW14gPL5Ax2QLqjJZHmuwPu671ShqKofTNsh93g26b4ZWPS2ycqJjA5jxf1NNXiCps5enYK7xw54",
  "key11": "4VyQLDQT5KuZ11gu8tNdzALDEbcHbDHnocA3Nx5EyiWJ4GKMj5G1eAQ1S1n2WYqnYx3BqxU9RVbbW8BYA6XvBZD7",
  "key12": "UTvRxLFJ2VVv5fYtPn6Qg9BG46XXNYUjfQAtCKZcZVz2SRGMfn4RBEK3qjxdiPbrCjbNtR7hoDfAXL2vjnhBCWm",
  "key13": "5Sj3nUbqxvgU57xa7XG9iXZGMDqnch61rci8VWEBpP8T8AEBocjPgCnFyN1sDPJBaC7ZuR3KY9RfRAAhC7uxnp8v",
  "key14": "5gMRPPTZegGqN48h6U3eotjES66HCYw8zSB4h3KFRbLppP8kFfpAAB83fhUfQuLFmYroDASEVArJf2zSpMFQp9TG",
  "key15": "2RPJioLk8UVeFbhCdeFZQtEApfVHo3z6iFwvWd8Rvk6yjjLuyj4fXhw9ZKD822CZvXQ8Xo2UiRnEDBZpni8CZSPy",
  "key16": "2DG14gZYnQMJUb52Jv8ocxn6QKFQNgKz4HtftdUciybjNvxoVzrpcCvBNC6J8aYs5XfQ8pKvXjTwzjXwRwhEhc87",
  "key17": "4S6btcW6bsXCwNKLBv2F2BneD4KpQcEJYLyzGnyDoVhXi6UYKuGL7Bv8mDsJFm4xi4X5TW3rEaDNhGTS4WDyeQaq",
  "key18": "3FQbzrLxprnupKKw6dPSxiP2XD8fgXvVjEFinD655iyMRek7wDhjUz3GP9FHktkSPzY36JpfFnvjeu6cMWqeNQM3",
  "key19": "7KoUse2vQE5wxChmNF5uy6bCZ5KgbFR7x4E9grQ5Hge4hoY5go7dsz1haE3EqU7Pk3DxsJQQV32qKvc61wu9saQ",
  "key20": "RwU4wETtnVeucS1ZvzjZs1ME5tNpUU7N5v538nzoa6KHoBETi9WDzv6wJc1LinmnDnUFxxeZxv12XGHpvQr34dp",
  "key21": "2VPUrBWDzzddHE6Zvd6hreuRSGJe9BGdyNQa9zw9ottoVA7ekrDTgxTesVJqN8wmkch7ViKay8Mc74qY56aYcWyB",
  "key22": "2qUYwUWzj5worbV6rsEu8umSSkFkDBomWmrWT9s6FPiZiSYx5CJ9Zw6XbCn7QhvyaijZiehbV9RmHbdM23BbtWFd",
  "key23": "4gHGnXxakhYYrAshyjLDcNh8GwTPqwihkUGnqWu9Lvnd1SDCzXESspLh55WyNSujyUxMi9Bwv1ncXTe3WsU8urMF",
  "key24": "X8u5U5RTm39EvMMLHGWHcvQC2G42Adw2z9zvdv7CLW6jHFwbrT9gkpUXsBH6AW1t4LNCWt3DoyL3dEZvZh8C632",
  "key25": "2EWcV5PRRqxkVCrU7Hio4KnAE16zG7eA6PTnLxGNDK3FSugmzzLAPhGpr8gVXua6UUN5LyPK3irhuTBMR5cjhevZ",
  "key26": "vBRLjcbu7WcrXL7YWyig5WAWeZZCc4dXWd8jiLbbXpiYpQFZqpP9q6XzvdpgMv71C2V9W4TWfugw7nf5jbUEVp7",
  "key27": "32YiAt3v3XPZNaGmUgnUzfg76KsGUPGXccGq7pkAQDMPqAeg9aCKjFp9SAejJsMBBqUYgmQUPj1DnymWYG4zr6NT",
  "key28": "4mXxbVmqerN4boMre7Eog319kF337EDRsUV9d3YbzN2Zvjd6HP2uHV4TGzHhVhkt6q3FMVvkpAZGAeaEbjPxNrvv",
  "key29": "2VCAj9DnuyvH6AYxayiUhdfbvFhH4z3hL6RqA3ZrSq7ZHc3Si2HWEncgr81fyZm5GiTXFXUMpHjRiLk5GLZvpQAg",
  "key30": "3cegWdkA3BeTJTBz8h3EpxvdPPKF1FZb3GxNRDacUgpHufsbEXZAEPeKkq5G4GxH1EvrxpA8DrfHpBQbJaPNMsaw",
  "key31": "38iEbPxxURH2wygtkAyGG4vPFUELE3Pq9UfdUUuZQUesYSSK8DfF4XK3uqAQTir7rzccjztApSQsXiGuHYgGME4o",
  "key32": "3kz2vcXEZ1MRTqzMoAQXJiokvaKWz54n7njZKBLjNSsFY382ANrCcoqq62kzZiAUw2CJdBvnbqLAC1FhPJhTofxJ"
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
