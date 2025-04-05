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
    "22AfMurtWMozgLb4ob3sHYSmFH4XK62RRm8vrxPffAyUwvidgkTGGkiS7wKRmARBNfgWnqS87z4zAr81ABh1NPkv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TfTgBks7NRgfyxkzR7GX8nCtb3TsqBnSsNMViXFJEwBvR9Db9tu7Yjqm1w83c6fXsi4Gw8omXRc89ghQdCotqLA",
  "key1": "2LGRPfGkPB4NnFZnuPRrr66vDqZRXimgK96PnYjhN65QfZvrrba7x1E1PwfTVmNyiLCA5LArwc8Qyb7Wk7ADH69o",
  "key2": "XwSnDd9W67tARfTpWbLHNMzYVoyzLbqJkVXEQqNVnXVjHie6285iGwkCebAE1aGHKujRaoGFhwoaf3TBopX6Su1",
  "key3": "4t2AXZiJXxzWjAW2WRmPbVs6Fgvad87rG68DmUomGPTJg51XJwksKuxG3kbR6DHxz6FiJV7fQoQDCD9oTDLatgRU",
  "key4": "2P6ZXkwNU4mGWNTEQp81bRWp6HgMqiDD4xB5zXsucNKBeiNBmDNKvR9kUU5bjLp1tdawaGQ82oX5UuteSqoqxQmU",
  "key5": "5YvLiL1dy7RG9WUNV5gJ8jduMiZeszAZJYyBbvzF4ANwt1RV6hfCyid75CKvm8FxNK9oTuMuvajeCRqNXoDpFFgk",
  "key6": "4EvE3R3Q3XBAhxaQsaRbw6AHhJS5yQaNkKa62P97oiPZUw9T3Qcj3qSe3ABtAcf3evCZ8pVpj1inYBiPdWfYWmv6",
  "key7": "5cnCv19oe3Kc8qoL2XF5ZDmJ4smk5tJDuJym5qvvU1KRPSmscKyX1jbEj5aexmBisfdnhvAVZCn9YszcM2T4njd8",
  "key8": "rwoeAMrGmWdqASqM9LWqXmzefMq2wYMJuxtGh7fLRJZS6TesagCV4JTW4eM7b8ziXoztFwEN3PeXh5UFZuNc515",
  "key9": "62GAJDGwng2dqpDvJLUPzjQnmMtRhx4w6zCHWhGzL8omhdLGWRo3qfpjTL1PRsvhTwuQ2EEDyutcjPaECVMMjmYZ",
  "key10": "X8U5HZ4N8bq9GRfKtGm9Q72zjquwwbGisyxdL6RPv6n4tmqfqzMYg8Ft4HYrFLm78mzCQx7dQbeGGhq1mqmEMC8",
  "key11": "3RAkHFqKLQbMKHTJR6oP3KS6xeg9nS61ka1VRtkfMKqzGT4P4J6ZAYarsAus7irjFTJJWR31E12AhcXGANB9d11K",
  "key12": "4FbmqLTsGFyPzuLBBda5BUSJDJgP2MTe1XAKYx7JSJNRSeQ2RDRLmSyy1GS5MSmbh3bZLsaPnMjB6n58cn3Ms4mD",
  "key13": "B5DKWddJZv3HDZyLhxGzBqCyf4n3fFU7MJRMbgVK8oL2PvXZqUkcAuXvAGEkgdLatZVVSY6d8T4itiaCoFXppMP",
  "key14": "4pnTZ82A28yVHzNUFcdY5ymF3A8CGdKvVhB3MKkvhWAdgvhch6BFcBZi1H82F5ASYg4qeLGNR8ypLfDarqgSY2yQ",
  "key15": "4MJsLoWHNNAykMxDYQU6mq9HtYrLGquQgRvkNVFVAC2SfxM7YaNwo32i1rj5rPhPorMrHkbczjQm6ChAzfyhqhpy",
  "key16": "26zygmZHYz7txZcHwkCuLDChE9R3tGZTy2jD3bSq4oT1zDU15Fj9nqaLUnGUh8srrKxB9Mta9Ai9X3zk7aGnRFey",
  "key17": "4wghrenqRBQdfVGALNL2Vi8nkb7dhgswwaTsUYRwYyQiwHtbDNp5G8emWDRvZadEciiMjjUxfdTttVtar1bCx2sw",
  "key18": "23QSzgg4TsTgbktc9DzpmmZYjqc8TrPbNgVRtvyiXNBBnYvgxAkms1hwhCNsjKDeMYwuNmYTbrBS6RU3UogrUXxk",
  "key19": "49RA8fCPo5yNPH1gFyaPteQf9hFVy4rGGx49qcyXn8vek9ChzGvqoyzCp4ykziyt9isLR3rKh1dMxSNoBXHqtz4r",
  "key20": "svcHCQC3Xjn9xqtPLdwbh182TGxT9CRJ8R1Cb5U58ThaxznmBWBAbWyUREyvJe1DoN7UpBrogbKyuJhz8BCTrLu",
  "key21": "55JSHEmrJGkB9yyhsCwdJ7KaTftgAoHY2VVbB4rEt7cEk3tgJzfr7jb71ohwipfSb1oVX8CJwVmdcQqjrLkLV56c",
  "key22": "5kyFHAwcDjbh4RcUcEVX913CmtPXMYxuv1wiZWqnJMWhVkwWJKDrYtDVXgcnBr56Eih51gU6LxB4wopvfm1F3MHb",
  "key23": "JtDjFdH3D9utry3793y1inxGPavCRfGYKR6S8XKHWkkr8kbhGCd3PV1BQx2DCykFsqQBo8PBKeKmrEwLBowpgQJ",
  "key24": "3p95J2BVwc1ZUXzdi4NNje8zuYqog2En4fkxwgM5eHxdYjQVzajdokHVCwpKXeBEAZUtENqo7Rfj5gWjf7iByQ1R",
  "key25": "5X5xG1rUkxjxNwx89Z5WX8S9YYge51SXZZqQEohXxeNu3KWTrmCP7AVjERqMCJABAJrxcx6bKB2tQZ6ZnXXvG6Lz",
  "key26": "3mDDgZWAZezHFcynqAGXjD19Q5a4SQSwMeyjzkcrFr5o4R2XnigESYijgVJSC1jBpK3BT3Lha5bRdKZmSJTtgqQx",
  "key27": "JRgjbT2BhHHJCAMUur7iPBWD1WG7xczn2D4Qk88sNrj831X9ZwPnRWHmEDQYAM97T2u4cYx2KxHbRNsYXDpUqFR",
  "key28": "5NhJFEPfFWC2FS91bTX8jfYqLVSMojPvxjZiWFZiwAECpMXdGen8vMGT8Gn6QZ15oLJi2GVCDjUgggN6TGTjdFiz",
  "key29": "5okya7EULMdnKBPwSNdrCB64Ay94KMDBuibPt3nGRnDJJjhk1Dr5SNmwPWGHtTaPBhSfCPYcAVzZWjttUZfkz5Ve",
  "key30": "2Uyp1JF6Fjs6seon5P4N9U4N31HP1rLA3x6fFb3k4H7XVCkuhoMMqk8ipKQ6oJ5PW4EvqmCcEqM8E3jBme39HegG",
  "key31": "3wHydgh94sRmqrGRCk46rkLm1oSjigD3i7gy5qhGLnMcaXWQJ5ZDSRUGX4WUuALBMgZhgagk2NtsexYjMU1rA271",
  "key32": "4C5NxPTb5FYe5iEsrmLXbYaxY8zRBmsCMpGXAdCdEkFEREafbjd4mQUJVqeWYBCuQWscKv5fmzKWB6nyWiiTTBdw"
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
