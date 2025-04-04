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
    "62fx5g8dbwmz5QJbUQSSGh6SfFhw3WyBXEgWcsYsX8jsSzd12hoeU6JaHNTv4Y1Rz6GP4K7Kky9ezuqJ1eUczoxD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iMiRCf283aqnGRaQeUHkcJW2j58nH1M1BjTSnuetKZvsfYDXJhWzTBhgNjbwX8vGMhrGEJSwegyN5kJXueG1YAG",
  "key1": "4HChkAqgG7pdSAsJqSZWTLtLPJWNxPxWSdrsiBbzg7Wp8KgB1iUhrp8JcgjFcwvesiTajPoCh8J6U5X1ZdruyAhM",
  "key2": "4VLe5JGuYqbWHEZb1kw6a1FVrNTfjDgmGi5s33KLRrTwWSjfRgtZ4wqpRpv43nF3MhHDtQah9mfX6GmeNU58fyDs",
  "key3": "5sbicWJXyvj8wNaeq7KBPsfMYWzT4ixWtuhGnaPrzqJaxhma27QGL8pU3WwGuuivgTmW61d1ZiKiLZvMdscfse22",
  "key4": "5HajxwT5w171ipoJUJYWU1Wwaf9SSYMBRu5xLgpSsBXXHvhZaFYKhnBakqCaMpbLVHqENpw7aS3i3Ew1SrKzrG8o",
  "key5": "yqU6GBBbKeX3N7XwqjdwWho7rewVxgMHp9J3NfuLydfwKGPKMaSc2jrSBjtnDMW1Die4YQvCc8E6L7Mc7dZUAW9",
  "key6": "5yoWuZwZAVdoe1DZKZtqoZaDBiR4NTG6TwgSw8cmV9bHpvsc1zvgMunykWUXkbUis1rL31KVX8EvaXGQY6afLFm8",
  "key7": "3q7MiLQb2y2W7PZGAK6DNfpGqe5deg9JFSSpLSo1ZBN3x9G3erpdz5cCH6PMaj6mxwGXCX2hJpDNmKUQtziZXstj",
  "key8": "48SbPbUFB4zyf6JnLSkfgtv5Qhtx4X5vQNj2zTG9fkkKUBGvcWkHjG4cXpd4LtZfSdjfBEwnUwGpTJvVLgi5R32e",
  "key9": "4kMgaXCqcyXP2ayh8JYHcMU28E9kftUwG2NTx9HE7e1k7vHp1fASgUfp3suvPy5rGLgJpFVBBzWmoQCmiC2HiNEH",
  "key10": "4jTcZRdMZzkd6yd2Gp4ZuQD2wCUCBGjZYmofhxKgc4CYhc6C3HBCNDkZSUAn4sD8MQvvrbTN6GmQ6rFL6bkWfwah",
  "key11": "2zFtUKNYuVryFoSvZ1jF32Cvx1gnPN2owJQLuXn75nuMLv1UAnxkZUqsNV12F8fpp6VQmzTGdyDqEnpZW8bo8JqH",
  "key12": "52iHoKkmhmojqPNYQbmmKNpL4RJVkQRLJnqkf63NVrvjwDGHm8cuun1ghwFk25SgHQw3uGm6YPB4M7i8dmfG68v9",
  "key13": "3dLXmmJDqR6WQ4UqmgZcM54wctUinUrzjH9bMj7kDEmaq3wEYJ4iR8VJvLX3eVsjSMUAKLRYkesdhtR8WD4UmZVG",
  "key14": "3kJTctZ6YVSuirFRtcVThkAxRBCSnqasEqNnC66eAPGnmRwrTo4Sd7qbNnhKmTRZPXAr8TnoYT5vfMGa1bVmUoni",
  "key15": "22RQGGQ3DtAR7HWB8hzf1ctMp2Hd7jQsyanC9C6d2ftz1bwr8UkibStkWfSat6AqSR5N78r4D49pXTXKpfexjAWQ",
  "key16": "4omNNeTG3ky3SP3dXvyT658niiebNxTjFLvNWqKExS6bL6aTsdTA2eLwJ3T3NvNe5zPdHbgBTrD3JHd13CkwthTY",
  "key17": "5YbHA9Fx1mc5B1HPM2EEu2LSptyCTAdqDEM9ETPD2eqJJCbroghXQ5KPgpiV9j4CMom6ZCWx7cPwJmvBn72Vj7N",
  "key18": "56M1NNEar4pSwroe6VNov2S8B3P17DkDSH3k8hVfX1mDQ6v8dnF5UvirCLsivpbu9h9kmQQBJeV7dMCPxL6ottrf",
  "key19": "4snwMXpKW6jDf8JXgrmt7YSSghVRXz1unnxFgQGJiV3NDQvBWubLks7RnaUenBv4RBxKyhefmkKsiBpFXyHescJ7",
  "key20": "3SGExfe2qmCmLKag1W4BJPhMbLbuEPKJ9mR3edhpLH1rCqwAGASPHHmZ9Mdoij9pY373dERhZHhF6gNF3HVnK27A",
  "key21": "2ia6t2VR1A7E2fL4mHVUPmXHEjnbUbqZaPCPTyPtsCdm5dgzBofHYsoiqaAvcamEWX9HdFE1QN1VYmjfFmKCvMwh",
  "key22": "omq4jXSBXdXy2Ff3QVeuYj8bahEvvph6TXX5hMuHrAfWFnrmePmA5yfV42G3YzL2Gdav5SQTA5SxP5ZYZmzPmH8",
  "key23": "5S8VebvDWR9TG3RCw8bZWze9vTbDRPkuThh579LJmFCbV7Fg1thTttS8dU9uLuD2seX93vjzTSSLPXQd2e81ANuR",
  "key24": "5vQfnDHzR9gRaNE5EZQMotcsC1VHZ8qPsStYafWJCjyFo53d28tW2MdQ35FKmf9P2HRKyMLcXnHRUoJAy5Z8Jykj",
  "key25": "362eEc7ZaUw9nzRFi31q7kR9m9Uudjg5gfL3trDSdakpCiYap2vEouNTWTwWJaVmRrJdLtsyE1QDAGo2JGQmPpiE",
  "key26": "21uDKM5WNnyo5S5mgoyUgmvu1Twoydd57oyj5HjimJ1JGL8273cCDRA8WyLtxSXYu9UoXZjGGF2f5ZgjUztpDvdb",
  "key27": "57SrL321gKWWJKHow5Vk3D4GCoweBSQPrmvPQigyruY1LwfTqMiWc3eamiAmitUxisa787Y3gUS6KEK2TFWjcecL",
  "key28": "ET2fiofoCpqXxim1DySaBmRptf7cJXde8unr3rHALTi55ibzgySiaR5sBGwPJ3ULBXVwfdg48egEBiz3VgA64jh",
  "key29": "4vnuH8bFRxWShzb4SVgUmnftCBGQMNDjJsu8drUTXZsJcHKynXMWR568kJy9f7mU8nc8uXbZbm3wYGNoh1xqG5pc",
  "key30": "3QBhi6gKPc4L7pbKEhPFxzf8gscLGYZ4MTy9G2JVt8F36PmV45ypvdpXH1DYGmWBVTryGaZoKrgpdQkx5noguoNh",
  "key31": "5Nd7GnKxVXRjxzCiLFPCWWWer6MTtYaxg5WPbxRcQr5h4KS5rHyApGGNCf4RAmzviygUNgeqqbyC9Qimofvm8DXD",
  "key32": "4rhE8MF7iKJzjokMTsu8YHTNt7CLehXmuddRUNiTGQTQvDPXgFRZ5k9c12iXrG2RUc8Z5xxdPqVhAhvdCJajy2zG",
  "key33": "5SPKtp1JVZBaBasoaP2BfFSnptvSWBSAuhSPaJZ2Nz76MTXyFQUmLF9hkyETpfJNbYePckojoxyHRTA3xqaqYH2o",
  "key34": "2fDpebTG6FSaCtq6ivEphn9du5sBGyfBGWWEkQAWYTaYPsJeDa8GkSC7VVSJxkANu1VwPCz16vEJwMcUf6hodPgx",
  "key35": "4fXQNX8VEo8Tm7b1SVzWcWWCMvMim39dVeuqMEqmyPhU9z4eVY2VWc3FPjGEV1s8YcFVd8Fww7Vv5taCEzMhXmET",
  "key36": "3XPt9ZDyWauPE81auR25zPK1jQdL5ruGzJimHGxVViiWBEuH4Tk5mmrk85C8KHSHe8ry46B2CiJtWsAJv8G2oDQn",
  "key37": "41PFtswYw6cQymL7NV9w5mEV4VsPMq4zV5H4j3LMjbJj83Vp8iBQ2UgKEoQfKHzcUAFxBBB7jMJTmWgo3HMYeVx6",
  "key38": "5cjDr7XgwqEEUhzV8xWfChVg2Anzay3vhpBuC7x6tD9GebmrEVRjTEgJ21cTGYcMg4cys7CrgN1ZEKoJoQDyL3JM",
  "key39": "2x2tNLTaNiTGqnoge7LdBRhv8La68GesxknetiY2khnAonDs1kA65nPAsb8Qp4PuyeS4oQeL1nQg6t9NQ6Rte4ry",
  "key40": "4QBHPtTqjyKQAHnUmUUPik1djvAu96oNh9ZP8CrFtptW8HdyHrRxnDBZNBiJRE4cdSYB3isJRc9jiD1JU6LQJYko",
  "key41": "557unxiEVHcjEf6NfYQsfiG2Eh2Sg8GJyVmpoZJr8AKxcyGzA1NLFuscrZ5yqoX7LgDG1NvPvyLvAYUDZwdbE8Zu",
  "key42": "5Z3oRUjEfVacqVRha6R5mSXwZx3Y6KtMMgCjea7DryG4e2FhGy8DxFbubLT7MdfnqA2vC4QN9xNuG9fTYv1iucvP",
  "key43": "3yARFimC7wwy6a7YMrZ7DpNowRkCTPoaDqAwqbFWJ8ngwSDRXHpgX2d8SDhqUywght3KdiQbq3i5oc3JdxHZ5RGo"
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
