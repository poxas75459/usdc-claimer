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
    "23MfT5NS3JWnFk6HDrZksR7mcVs1X6hpqCovjv6uWM8uvYUGAV8fJstEfS8DYGg67NQWFb5Aj61VZm5NRNuNx1gm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47KeBunrE8f4WD2Z5H2MsnHnchnzCZKX7guq9AzVxdfdLPbEJvcQLLsZJLHWuBeicCgEw8S3PB74gQpcuQoPEcbM",
  "key1": "646QJHwiDGvuYQ4sV4nqxWoVFVNBcX8Hvi7kHHwCFsJqCrG7Kf3SvvbCxv8xVjhyp1d4juUq7JcoKP946vTbF7SS",
  "key2": "3dFd6Qg6SqMBUKJQnyYFCFftUuQhdP6BbeqyQW4ewKVLfsNGNsTzTnLc7cWT5yWCeGfinXAwCiCmnjbP6jfRXPDz",
  "key3": "5WWXDi25YuD2CfpK8LVy8zXo3dv2zA33NF2zRjnV6keqsLwqqdEy2LdVszL4GC1MQhiwBJoE9R3qSj8jR3DXBG6g",
  "key4": "5B2tKF9aBWCJZ3RP2AGt8xEisCNXCbg48tfdV3JRut7nE78SmTDpSox6w39gsQLa1yQFo22224FhJyS3DyLXaM9q",
  "key5": "2ELUpjT77vkuQjXwDXyfEjfacntQQjPTvborSK9uz8zD9TLTRHEKm5bpvzrGE4XqF21ZAAr3WrHcnwRvFQsz62x7",
  "key6": "5emd9gGZkXCmghQVQ6A2L1UpfG71iffxqUJoAVYzXkXYHWYiifU1g6zUdadRSsZufpcGNFCbPHxRZEGMFafgq5b",
  "key7": "5tAMbvzHNBq9vuKNY3BzD2T4LbH6nzE2jGkY8zGQLTUg8wYU6AVQFXqn2gL936UpYf2it9ZUJHAmdArCk3H6QEs2",
  "key8": "5CemE6Ay753HKef9qSW8py5wxsGxNC6417KWiMTARaUKKc8ut1cTLStDcBcoXFpKFeCZHKqfWiaJUjDpPr7ucMXR",
  "key9": "2g83XGRxyLstjKAiLSgPFd4mBcoRwjkxLWTVQHvYZHHzZ8ipiTsFFzG8kTDsrMyFQvFq11jPbjyXeeQek2i8vGH1",
  "key10": "4Sm9u7qhagbPFyQiyQ22QDP3KihNm2f985VWe26LzNaDoUZ2g86HMX1bjRaZy11v9JkmHmwbzj4CXVXa17uDXJv9",
  "key11": "5x69qT9FmGSEu1DWapZEW24sEvC1DeXKcfdzJ6nhrGatLjUrWSJMsfiZ3yZhCukNFGmbq4cUsnpT7ECfvxjzXV7x",
  "key12": "CgjKYDC4nmp8gkUkbou4RKiXufcFXA1YwhUYY3hiKBKmSdyNNS7tpztre2pjPWEV4qpEGWBQA1Tq5EfDkP3qeqz",
  "key13": "2F2bBBgD3D1ouz6ckgtBNSLpyiSuvzMixBz3bFqM1yWFJVHjk3khD9JmQm1pWbmWdPXEVCtaDqWuVh3HjW6RmsyJ",
  "key14": "35g7jRoenFRRSazwULbjP9CZG1p7L322Sty1TY88QgVJvYFAiZ7wYMY1tmyn3ekst1y4rSr6RNSo7MswCULDTVHk",
  "key15": "47y6T8Rr3iwanqkAownCR3Ure7VwUu9QyZWy5QwHgXaKCXioip8qQjctTW6guqHsGuaFG7PG3myL3CayoqUD2WA7",
  "key16": "4rZapSdpRASkS8H27fZUrQX5x7RLW2nx1DbaTn2hEiCLdkn9zcQaLGMVTMMpkJAeLzSNnvt5HbAieiX1PSAHWGxz",
  "key17": "ABnN8zGikLyBLwXcChFad68RvJEjcfbwWN361guRAbz4yUPrpHurJ2PfvX6yc7et91YF3EmXE6Qo6z5tshf6e4c",
  "key18": "4m4UsJPhxH8o3XFFZTbY9hKLzwVEyPC2k13i5dwyqhKTHMXvXCvbEwqzD1KZExkY4pEGMDiLQEqFkBTpSnMaQoHz",
  "key19": "5PQU6F5wscBqfqshfiXVAVDKzhJGeb2HQVdBZm5WfiAx69dEgas6f4VeUD9RJSHbMfcvUHhP3VKqXopuxH4bxcwk",
  "key20": "56MpDjJXVcqKD13WCNBqRzMhejaaSoq3AjkUPpKkiRmiy5zMHW8iR77atMm3aGDHtwbX95QsUf4wLsZsUGadoHoT",
  "key21": "5zTRYjLJJWzipX7qpw17tXeWYM6TQtvU4WsFAvfrYY4dAaZcjERbKtbTCfbaGTRyxNPjneTUaF9ZUxMjJ4k66TCr",
  "key22": "243LAbyYTVZNuEDeQZ9cbU5UYMTTtGsKjdkSLPasX4L2m7BvFNowAH8HD4tigVGEakrpaq8uhTkyWAndbp19pJk5",
  "key23": "4pxZXqitjNVHMDHVbTGFJaQV8nwMVjnQwMEerdUxmuuViHx2qoeH79H7LwSsG8t45HhKS4DgMWAF8M4AtNbSGWxr",
  "key24": "3tJE7NTptJEuC9gdaK6u9mHVzud3VwjL3owchngJ29gnygSkhXTPZhh5Bnuusf7BLfURanqmPJXcKUSpiNE23LT7",
  "key25": "4jPTpf8g4Ho4EqMNsQLP2bnScZC7cLKmspxsV3Q1W1xx68jCiePEhECyYGCxUfqZaQ4h9VYWGKaQGGrqZrHZxHaU",
  "key26": "Z7WyifpmmCxqLMvivL48Qttt78Pqzp7hqSV1aSbj5xWQqAWmVky3mJtDrn7F4hTF3ZycYGyoZ9PzqgEupmAFUUY",
  "key27": "23EhujnWDzew8vAPd4ayTF6AFcMfTieWZAJR2CwJtBPpJfJESin4fgNfrFKoJdUHMMAJUEQ7JbMSq4DPb4EWoQgM",
  "key28": "2bHs4QhYSJzR455DYMo1BzfnLaU6jyxvek9EzwwJggz7H8TKYtGhHKKSMaebEB3utgSEXKfi3x9838Lsa3oX4zzK",
  "key29": "4haKe41vnH4DpD5vnA9beGwkz1Spiy1rsNVp3Wvcx4Y9oFUgkzKW86UpFogvS1V9gGi8SUeZXhfNWLT9PNoMKhCh",
  "key30": "38wfaFYYPnj5LnMZLEHcJUJsP5ZMXN4tB5WPvj4ucGMsUSGWM2HShSvffVQDbm2kmgrisbQ2Qvd5cwYPiRGGYxck",
  "key31": "3g3APehJ9jeDsLE9eD1XUEpoNFmYCZx9HLEn5CZobxb3zELvZAzjzfYwtLiQpRG3GfB3wWNWu6BymKjGEXVLWtoj",
  "key32": "3gfhjEEew5k5XjEyAALA2FwvGa8spe2qPpCosR9Y91xXMigS87zxka8BKtk1agAUhsstYmzQCt6eTPYEtuAz3bTs",
  "key33": "3FK5DAttGnzhYjicysPuJpv172ksVVRishq2VLqcXoKbZWpdMtmZ7k1BZtUa4AuwEoeEcttpbKnoAHvogNCM4f3W",
  "key34": "54CB8wz73ECjpmrDSFAroHqpY1ZepGvFz6mmDFkieq8g9romWF2gEgUU9vzzkJv63o2t6c2bm8FhamLaBd8hesus",
  "key35": "5fE5vLF996BkMjENTjYcXsyD1m2QkMN3AceY1aN2Gdi5fNhzQ9RmhaPW2mYAtm3TNVFWb9JQ8bLemHMZGp1AYSvV",
  "key36": "4gJhgJBd26g9XSKSEuHps5GZWNCzVp5o4LQuCXcvbC4cuE2Xf3HSm8v5f3pJC7TRL2m2ECQ43rB5wN1Gq7DL4qLq",
  "key37": "snp5GDxF7QjBYL2KjxQogcocHX48da2WaAa3Teb8z6zPMirw9nBi2ACgs2iyVB9BuAqu9zoiEcns55TvYGLxWMX",
  "key38": "5iZtj3H8jsSWGgm4WRqT5ubSeYQDs9FhMC58CmHLnEmYSRhkJPGb1kYYbegVSuHKfj4Wu6Lrf17DZ25vDutzsXVU",
  "key39": "3a8iSY7B6S1sai2SvAX8f8hJhJHcvhdhRr6eGE4hTLLuu2HjfvftH6QMUb5gdRPAz8kc8puuPJNheva4zyMzYC6o",
  "key40": "pK83FKgWzCbEdUk1dSBDAXTVejy21MEGdsRhJV4gy8VmeWC47RNVmS5hXZdujQe9raEZNSyR8uTFtE3Xx1rF5W4",
  "key41": "24H8s8BVntXvHZxx7noA4goY5dNRVdPHfCWoSRxWBkewq7sBtvvfGA1L88VbUGJccw2Htyf88UCExDYhw7PknvDy",
  "key42": "2mP1W1WWrAKdN318dLVJZAQBoPwUtZxvMsQ5NXzGvbebGhCFW8StqHJfaramrymdvg6wqkLYTgSv8SzXLr71UQh7",
  "key43": "49WQRaKWbooknguHTJZhZBukFDePvoo8ji3bCu89QvCStV5bWoz93chS1GZQaQztF42wNbGkP7ZqW8oeMt2dX3u",
  "key44": "vT2W5WhhJm5CpxCrAXSE6zRLWrf9AA22mPqdVpyAZ7hfXPjouU1PpvnLCjRi5ptBbZzPFWWoHAW3NVX7GZqmN7r",
  "key45": "5JdqtXQdb3qHED4x859UTjQFL5UkcnNv8kpXvHpSk2UAPP8mGWaqCxp2ZetamcbWJEFXV4puZX7oFuhbd8ETKp5J"
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
