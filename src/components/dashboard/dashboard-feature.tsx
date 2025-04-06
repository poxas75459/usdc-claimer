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
    "4qwQmwZ8oVj8k5Pmq9T7f6yHBv4NT12hePgoXBcRs3tBadusWQzbe7hHrToHpAjraiAhXMEbihTnqJyEAHokQNv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hzjm5bN9qZhKW5ShJQBtUJBeLzEGSGe3bUjZ7QuP6npM9hrPeSj7mHRjki2HCwhd8WoNDJmX5iuvUhux7iZ6dHV",
  "key1": "4kXwTjf6NpRw5LDVjE7z397kDEvyKccEkL45XUR4q8Pn2G5df8pm56Lq3xwaTMRcxk4uTBrJ8ySYkVwY5LYWqz1N",
  "key2": "ojYBu1G65mucAbRAtiwqWNCz5DgPnDzQjjqdgAV2KrbJKuPDAk8xf3EqApAz79W5wFbUeDYatqYRjebJmDB2Xtz",
  "key3": "5PwfrKo1abWURZRQuNrnzqNbS7h3Tnt794KHT5jVLEPw761pZ3onn4r4wuNNEknWUcM2z7DQghhYzQnNKeweCgmn",
  "key4": "2ot2M9YJWDJA1rb93ZvB7Hb2yKFU1quUQNgGuY5FWqrbdKCNRGnubbU67uNJCBRpEVbW49L583e1wiNjpyJnWYMa",
  "key5": "4yeNzH41Q7MpoqvjVCD37rsLm1PotawYmoKoB1PHYjySWiGr5dk8hsBz2oMNAGyLLSq2Fswy8qe297rw49bsQf61",
  "key6": "z48pQp4XLutDb7em2M94zeFNaRpH2BqXcHVAEPuZ3P9YuZoHuv1nZueN4Qy5FsTM9XAigM3UB8eVddkjJHyDuCh",
  "key7": "1b4ftW4CN2Yd9mXCmzgV3mWZN8BzP3kHQ1RQiD2GpoiWXuq9izajxj5hKfk6Yhx3nnJxZ9QM3iotUKxbzkoyXdK",
  "key8": "2kefm5fUmq7DWhJRCyhQqRi18BCobM5CD8m6WSv75LbMoTHqzy4dzkXNdsdwPZtv3uYStuz3oZqZeKWHgBCRJZgC",
  "key9": "4qDurNh6rndnqxC2wghaGVVSsRpLguHaFBJDdwAmKqiKxvaSi4Q3eWNjLuRRiYcs6qtkc47C1SVwBHRy1AtqczGC",
  "key10": "2GgBPHsi4PRuBL82ugPumoj6vhv7B9yL7RDNCRhraJsHu3tUx6x8YD3cUR71KpuWGwCNt4uVys5sptByrKpCtN5c",
  "key11": "bjBMuKoPnopUk8AkUp1XV6ZbHr5LSxbbzfUwXEhfE8A3usBJitAwSGxwLkUPgu7EE46YXks3dsJHjQ72QdCu2Cj",
  "key12": "5FfiGfbmKwAeBxSaHEp6SihL9icXjQm8jjPbH4jQLppJAAKvEM16JYNVgu5dNen2kpTQsxYEmcQyWV83i6ygqUJi",
  "key13": "2jyvVLosXcCyNmwf2QBJJvTMpD8ipuou7aRjoFg3wFSFNU5RE3qKfEEGZAfCdG9iNtddzEDvMZPHazdjdvCuN8ov",
  "key14": "2fHKz1kVDUkPqtqtmUkHBLZHJ9bM7r1gtovAby4vJwjZW5J3jHHA19cpR35dtQjA8JjTq46BqT7G4XTBSQcQNAXX",
  "key15": "4zbVRJHBYQxnURMgQKFDV5MwVsCbrnuaEeP6CiF4kdTwPJb3YjuhK58pAUv8fsoDZovtWBAdpGGC2b6WWBL7CqZR",
  "key16": "3i5uSPrATg7kPg5y65CFhRqrz8L7y14fyJKJoBuc6XT8aa9U1pB4Ja2392UGghRf6eypSp69cUPx4pDwUB2QYP45",
  "key17": "5wur1Ksa4kMraQYwApsTBEEneV5K6D3k78MNK4d29r6s359hk6HyTeVa2oxNHWq4aUZ3toCpxZ2KP3s9bPdw1Q3w",
  "key18": "4E2i4vrNGFY262EFJ2bkqCNvjRpBDUpJSadwmmtyr8zLcja2sp6eEyE3VE8E9FppoPghP7d6C1Gu9MKwfoiYwieB",
  "key19": "4yzhLa874AHHYPQ9MvYrkX6iCsxZhR3iDRrFMXhXszMHt8bLpVXzAQ8Lqw4yyyS2m5VQnsknSggt86aXcwU19Krt",
  "key20": "5GWLLwjvLBnqU6HWNsJPQf4pehvL6RVn1kHvZZ4LELagmiiytArTPUQjN2GjpuAw9Xk1WDiUu2mCpEaYELquVVFC",
  "key21": "2mpC5suyYAzaSJJQjsJRJhnxwYCDdMSkM36tuMNdVwrcf6isa5dSTuS9EJLuDitjHMKDNssqTFpH4DjqA6TSfAQe",
  "key22": "4A3TLnEdn8yrJWyZap6yfi9WF3sZAEWsPt2N4mkpCxBSxNTbiCRuoPg8XJVGTzFzRzn2exNoiXnQcxXb1tYoGWKz",
  "key23": "4addb89QSyGJCPCbzwCXyN494bqzyQAXGeUcwFtdAi6kToAiF7Tonuh9koDKcWW3S2rW8uaeL8a72vX8zj91wToM",
  "key24": "3SV5MDUYN5QrCLDUsjscW9BfbHVJhLfkNTBV5UFKEotk4KsMr2y1sdwTKK3wqrSAQsDXjJvTFDDRRqyzFZqm28pw",
  "key25": "5bpsmA3FKpEz7pdTMG8LhtxqJ16w33rEZouam55Fi9GQTQ7L76FUsNfbsZy3qwWuc1ty2RyjAMRqjME3tx5NTkHG",
  "key26": "2Smym1CKbyGVpSdP4vp58p734uraBSpkiUYJU3JoE66fv1rDiJtznZLee6CuW5nQeV68oiPXumyZ91xNNvJUBGd5",
  "key27": "RuprimVW6KXM6AMMzxw6u87FeasbNe6CsU8xNodMsDgvxvGfAE1HVocXcR4wkX7exdw2mCyBrPgk8sFdGtpvWBU",
  "key28": "5DMPorwqoysYzWmD4sX7N5U7x7fNjQdKRLkUfow58Ju2oeepUSFV74i8HYa8k7qxhPmkvTfSRsk9NzGf3ZFByCJQ"
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
