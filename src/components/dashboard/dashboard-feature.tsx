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
    "2KvZssynrTTpBeAJduMNyYVgg6gFQ2QqbL3jwJxcNLTdirhedSP1VPzmjCDpJxqZbfSUy4aV7W57E33hCgQwDqV3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yHBt3MDfJZchg4Z2kVF5RgjJu4JZEY2pYSrjD8Ebo8d8Ba5p3PPZuxJ9RQA6vMuUDuuaDbcfw8vJeJw4QMf3DbH",
  "key1": "3orrybS24iBeMuQn56GCrqWMrAnDDstBcp9AUtiX8UB7bFWBt35PZrt1W6vdJzb8mbxfHGpkFw5Wf99zF2HsZHPz",
  "key2": "5mXydSu9fQakZQNkYxh7LHoMaFbfnX6J6cejXqdJ1EhvrEdcvaxEwrRXBdH8hQhR2GfN7UcBCtRG4PSMQCZqpmL2",
  "key3": "48sTjvhZrDZE743fzxgPdtTZxLYYLZFLWW2XjVBQk7FtEh2hd8VoTiaDjc6ffaApe8BvmjHr2yaiNe9RW9M9KuVK",
  "key4": "KXLiF5yDSzRW9kmmsrqb3LHz9JEaZHRKyiPVtnVDsaSGegephSsb64e2oWRbcG9PMULwfcUy4E2GMjDTjoxHDMR",
  "key5": "sMATeCnXuJC9KDVqS3D8k4j3Wg4KtxyN3cTxXojYKFUTrtohKV8m6NXBGcbE58srxttW58z1zEYczBvASckWCwe",
  "key6": "4W6BbJRu4YbnD7wmBdxYQwHjNrNHm4xVUegjr2J1vsJCEnPLkTv84uNYAZ6EFXJ96pNiBDqFZzWdVvbKKra8MN15",
  "key7": "2YFb4UjhhGVC1vx4rzHbrWWTRvu72Jh2ikG8oc5FyZ8h6P49SCFgntPRiR6yqYsd1n4xt6F1LKwQMe7kiFRTLSh2",
  "key8": "23s8ML1QSKLvB2Y7i3c9Tv7oiM58og1hsX1HBB5svnG39b6oBXP8iN3BvWyt8Xp8Cpo4evYXrMs8DY59J9eWfwdj",
  "key9": "2ySEq3xkaSx5q5i6LfDRrdqGBcMJMk8zW5ybbzuVbM47TTodwe7hM2vWuhzbY5TDpCbEaEMMgTxUvLwY1N7bG9Si",
  "key10": "5CkRvS6U6g9oNM1eTN2jxM6Rgp76vRmnMC2kBk6NwQwXaHhLAs9mJaddhKFLQUGTaTbbfshGiXDdbpkfVppY7osQ",
  "key11": "3vdRucWd2K7BpmBJASEkHMoyz52o85kFQsoNVvYSEtGBinrxQaJsftaYqiDVrKf9EA6pt18FJdK8ECxpnYsGARwu",
  "key12": "wHahkNNHPx42cYaBGCv5BjM7ErJj27t1BfNc7dtjLgkVhr5ZnunW2vCKvd73p4Ar14TjwTxCzcthu6ez9voMy7S",
  "key13": "2bQYtXURNXrMpSHpZ6C7Wb5JXnUNUUn9ZoTyKCneYPaLuUbiTyqY25zWnsyZFQ4wCnwMjtVYFpa5Ye15J3JjyHdg",
  "key14": "2X657CT8dDYLCpxZXzBSgVHSErF2YadckdnpxgZHvDyjPfiMa9b5WpA8oTuF71nSg4P2ikeintpUz4KGtqWkkD5N",
  "key15": "2EPMAoZmttiUfGPSh2hSjNeUPTpt8nGHbW177iR7YKwi1Ni8sh74F5B2U767faWqWNiRzAnXwRpeUJxoKb48PnuZ",
  "key16": "5efqDgc7VcAAeEyrFQEf9YDZkSs7H1jVJVuqQSAb4G6uGXRRDHiqYRxnmJzXcMsWA5TbYVZyQYgvJbWD9CVss9pU",
  "key17": "5mR3eYhD1un3VFt6HN6f3i4Fx5EP1JrBQDLqKaWGss2mA2YLNhE4JN168H6sUqbXrSidfGNT58WE3t95XZJ6i8EH",
  "key18": "u6z4oRGE8GZq14uZYjjMit8xPqPwRq6Rx41KX8NCSJfnPoxnSevSU7afdvuyqgJ9RDd8VZbpKAAamHx3jEabJME",
  "key19": "3MsMaSJkMkq6qB6pJvRh1kmLXqiVaspVQFWsZr986zuBMGq8upfK18QyK8eZ6sWWfpt2c3tePSejfB1QMsGzobiX",
  "key20": "2m2GJCPMggJB2N1mxxVUvSdkC4oYoad7va9EFvjuBfvhqM1oz9i3srLvUoQcAXmvMqTJKa72V3rYvtLEq8mtSsqD",
  "key21": "2GwDXryoST9r6fYdLGb4XUAwL58GVJbukWBWWgGFCFfiKseji1eqCMFXD1phLLZUQuX63ZzUSzTu6PrFLZfn2gUj",
  "key22": "2PqX8Rear8pf3Q1TK9QgdJY4o5TtCBZTHyqY5aoxSRKstJKkBDo1R7Fk8T6NAgmcnEF3EiDQT6oxgbEAiLohd3i3",
  "key23": "3W1KYnxPWg5BWUb5RY5XsQdm6TR1nrihqDrvcgf5DjTrAM9yoVNMrEZe8Y16W6kGZTFuzNHsbchnXXbgy52CN4k6",
  "key24": "a9T2jUGWJMfSDxZZUfoUk4rPd5t7GoAMWL8QSyMGJL6GC48PNVm2uaoM6UvzSxKfdVzuSJAduAaAXsXLKBJKayh",
  "key25": "4kwBYX9tHYtswisxm318XwbXovuckHWSMmnhNRApos6Q8eFnYeNb8AmziAZ2S9NBUu1vkYNiED4s8uqKsa75ggme"
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
