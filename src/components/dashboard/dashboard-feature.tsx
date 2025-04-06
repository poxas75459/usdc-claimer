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
    "pADVtWPXHkDFdmCT7cNjGWcC1h6TGY76SgggqWexD5kujAE4mdZ9WRGBGnDRuGFYpRuR1Vq4pwjnEpFsXFVhZdM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NNmV7xK6oWNTrWLzLfSxSGcbbANWX1J8T5wGmugZnGQzJjuRz2VuSPQ7PCQtsK9bGdrnJ6RnXPzCmHK5mC72ich",
  "key1": "51pFRYuFideQP5K4VhKzckGzB7LHPUkkTnM7TMfKbwanzfvxVrtUCe1CWn4p5eW8TNbhrKmkSCBvmtDiBsfaJfAe",
  "key2": "3zxL7JKvFBQvQVaauCnqMuh35tuDPsV6FyjTwF2L1EXG1QvhTPMyfidtiAYPZhSTKr4xrFrsL1vHcjKMqMpQAMMS",
  "key3": "4ZYjJ9UhDAwLRC6VzEqip5v8o47kBLprWxkpoy551uhqbCcL7uC26oZMMQsWPEF7QLz3GmuKpT6RfUwCEWiAYoX3",
  "key4": "F7f1t6bEYbhNbQPKkVTpgKw4yCZbPqikJnemr3s7xKdpoEdGnfQib6jzoHp6RoUwSZeFvg7SDJDS1KaZkoHgHCi",
  "key5": "3HV9o2KDsq7AFPR7QNbnDtAVrG9Fq6WECndMLzDXo24xQVJKznB1xwnFwPMvWrk5Dy4bn5JtadqtxBVPcSVzUyxp",
  "key6": "4DePopxSSn7ACsmkdKKBzCVe12N9YvRUD5g5twaHQFBBmQzKzRN9XCFiL7FaBRpVgJ5EYRuoERVwsjpCQSFVr52M",
  "key7": "Eumwu3MGZoMMhLwpVJHSEdBJby6stkMmAMhFPT1BRvFwTMR82BQdJLzn6dt1EYNy3C7RAUd47RfprMb5xZb8iym",
  "key8": "4MBQT2sxBFS2BEJ8wpKe1Fz1MyWXHstmroDKZa5WTwAbYvfMqe6mwbNGA3jQDLuSKArBbvK4j8wax7zDitbQwDDE",
  "key9": "4sDuiE3agwh75sMwpoLLMEkjDe5ULuLK76s6Nowpqg434enUdCfqTzXANknsyaz2zWyBJprux8FcfvH62oSkFTWu",
  "key10": "4FARkaUccXy32tJAtVDHA6xGoLbKXndkG7RUFDWJeic1e8bBSMVPDTFdSnmktAhGLfhVvhsguZZpCNiQTyZkvCMA",
  "key11": "sK27X5tQY6G4Ymnj6b1by4Bi6rvjWuXUFfCaiZni5scBs773TMdR1SqSy25LBLqJKkTSCbLJZNvkQYTS48c5g8d",
  "key12": "rWiirj4VfSvJs9KyAK2Nc67k6r6ahtdrBtULRXTv555S3msborU78AmNTqHbZqgNGDCGSMuvY26HCYXKsTvRHr6",
  "key13": "PtH7NYoT9qAqeoUfn3HUbjuukRj2wTWqKPu1oiQkt1Jm3Jq8U9mAP57EftY85jfGuAdtHemvD2WtsoVHrMhCU1t",
  "key14": "5sjuw8fVsWAaECQCiQDyJCUJZMDmjeHSRvQVBEzPGW7rWWJJwpxJJA3FVotJfoBDMzrVZszVnXCUCNeNRYDzvzws",
  "key15": "5aUtsv2jtpkdEfCc2xHam5DhDVF5RoajR25X7b6Aqf2ZPqpBvMcCad2hqczd4U9H4jWw78K5ngueZASpnCJ5L8x8",
  "key16": "3thFwxDkfKiWxbYMvrLEqkJWdJ8rMAEW16YUKNUYUT6Njt57nTNyjJLnL1GB3JUimmQpjNq49HFTH7VTu28G5v6L",
  "key17": "4XMemugYEwqHu85AUxj8A5wJ95Vv9N4hZKHRa31qi5dRrfvgrtMBDD8mpAXHSvQ2pU4r4SY2MvMq7bQAgCsziACS",
  "key18": "oBMBgurjsEwDHBZHHbxe9eqmVezmaY5WvStzLZcJYjeaaeCJdy8sDS5j6yYc8NpdFxGENmsD7Cau78vyrF4wnBz",
  "key19": "5dxDoD6KVamnkKbqBmCkqPUw5r9V51D3S8KgNJW8bKBwP3ff5Q54XE4LvgoYM3csa1MfBERFRSgXNMp52WRVe5MS",
  "key20": "3JFxupMWoBEgPqLDoCz7XSSVyALpE1Jh4bySrFbz4pKztkNnwBcsDmFHP6GG1a8kWqMyEoWi9mtWujReRtNqwmRC",
  "key21": "25Y8uxLPi4ZyhRWtJHubsDGRNKFYWn2vCMy6C8zgj3TQ7Xr7b7zTEHDw49s5EcTcWWoKVYXajRdyyp5GCAg8xiP4",
  "key22": "wGntzFqfY3ENaGek826DfMepKMpzyH6bSms1z92Fj3Q7ifPsQMohYcTbAGSQdt4GjEyo32x9zymNPdopD4Pq5kB",
  "key23": "615RGDdEKNTZamgTF9YpH7LVFDWiUnK3oBhJ2g56k4t1tVq3SDSGfdQ98L3mJEkpyULAdVLtWhcVHDMCPMZgj5Mc",
  "key24": "EvJuwwfRz7PtPfu1qUAXXakerQXWuM1ZaKLrPxKbrPFi7oUkJC58terXxW7z5yx1Lc2UMWY52eBSZGWjSV7zjJ1",
  "key25": "32SLjwDXfjNeJJqj9yJwuLRUpEToTYiAhCp4rTf5J5WoEomYRFWfYymEhKuycoCxnC8uCbSeoDWBPYnmWRSXnDZd",
  "key26": "67dfG5trk4cqg349yBHCRDtFFziSYdQ2CQpMAHVwMmsnbTryYRkJmibRVhFinfTZCjohKpexWbXFugyduuwMbm9M",
  "key27": "5wmAHy4E6dzKqyPWz5GgLdZXPiP21j4YQ33J9c54CUC8pDsLXGemwDH7JS48NdpHUfcbEvZvxwtfmu7wS6r65hi7",
  "key28": "VrWEUTDYxtbehQCaPUBbhDyLc1KXiENNArkKj5jMRUZ5My3ACd4RqWVNdrdQx8w2eCXvpvjgsWoZtKW5yS1bCsz",
  "key29": "2agaKz3nUDqVGRPPzqLuxnnV6mMUAyVH8ca3n6Egkynzv5uQtfCvxf8H7Px2dkjjeDppHMeexBnkazomccrRFo6x",
  "key30": "3m8Mnsnm9cUnNVS8UaMLf3p91TNUrCM4UEEjvmTGECm34rAeawVAkcZ25mzGpJc6S3EXs5hhghZ42NEm2mnfNzhQ",
  "key31": "4jkVf62FkKZfC9qgX2E7qEkf2FnBtLwxp8GyNWfYG1uYXzYs78vLQSfjtHM14Zg4yrQduFwxfadpjmv2VsqvQNCS",
  "key32": "52dMDjDCezbSjawZSsFFME5u7ZyzrTdGNtRKgoLT9a674rSake4KuYExKEVYyEX13BPKNVxfrCMgntspFycH6sBu",
  "key33": "25etaTsmrKRhMRzyfrUijtQwZ7seFYEfagvTNj5HVopTqcwXPGjZXiAcvcL8LfgF25oNn1Q8HTsQCw68mNUfUzQG",
  "key34": "2k4eg16hpKt7cXAi9LCG9P9EgBrtWeWmxPq1LXzm52dbrD88DvPzX7EPABzZFE3ho8FjNwxVzzAcPNt7w6yi6tbZ",
  "key35": "4u3krHkw5XA4fHE9z8BtKk6EkELjgMUCpHQCk515iptyKEaGVWQSbULBFQB3vgBwpGVDXhwmjnRmaXPPhRe7JYBS",
  "key36": "Vt54mt5G5wiEhAziBopKze2f8pXwdEYfGWZo4wrsuwtDWShbEkft7KD42qQMvg7XSzfwNhQ375WbLdBFrCLKu1k",
  "key37": "5DZYLGbnkkZUanAghiydjnckLrzE4TmTKp5JjcZoje6uFAqrDFo42D6kkEY476QsPuDybevpZ7q5nhjhpTg1uN1R",
  "key38": "wGgm2EoYbht2LgCfqDtw1Cj3vzERymGX3oJBaMPYDXddT9e8v8JaV7FcKJADhiYCYBoHBYvvEgeQo31cV9gcS4a",
  "key39": "2nVZpDF3nZn8gRSKivAsbEZ98R3qUx2hD4jJntgAG2tt45JT9jAW69xaz19zsLbw1dUnWYEmC3ATrbQk6uMcUAAf",
  "key40": "59jE3QHWpgKGXPsQQAXfLJMrGeVmHQZiABw2dHQuTfeFxmygRxMJbhAj7Vke4vKuxGvXZPtcDypeQMC8QRd561ER",
  "key41": "26NFVjMii12dg3sQcacSV64TxkYEr7dGCmnyzVFnsdhzaScRBkfX5HxHwsMSA863GUdveKamypyok3Azo9xEKge5",
  "key42": "4CXF3qtNpJc8NK3PuwntFvEoTzoabKNSqtLD4XkjgdHnW3jycV2KLqTJfymudcTHWoEuyiCvzTsbpG33pcB5hqYk",
  "key43": "35n18zjJZ4LS3gbwAHrFTAxjyLqWkjCg11xEt7P4s6HAa4Weh4pk1DfiN8u12WrJ7cb8VjApMqENP9GUgSnvQfU4"
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
