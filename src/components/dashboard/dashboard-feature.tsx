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
    "34bbMDkDRHUsPC6B44mC6g7FbvKxFxaakp8rR6JX249rX1Jsmcdpn4jrthTu3An3YCuacVFFxjmibztAm8K4z5pA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T7qeohdDREmoNTA59Y6aBggja1hi6rYzBENogXmauLozmu9wMcHXEcY3aQ9v4p6JjcD91VEb5f5NsEtmNJSHpCp",
  "key1": "3CLXFN1AYpDd5kDWwqH1AfduGPwnAmXeo9eh5HduEP8xj5RCFDDDgg8eFSe2bZ6EqAW7KFuEtK2YKLorviJ8Br6w",
  "key2": "34HHSWtCPK1dVLwtuHArKwvqmuMdZU4cajBnCP4PMDbJMfbsd9nW3kL9D57at7p9AvhvFpY4eahiKoJma71RsBmY",
  "key3": "4McGQdAYeLQwzxZq8ArVY8fAUAkTRKBnSG4xfjc3RAxzQAZ4xAi9WCbRkhW8GQES5kzMZH4s2bdkv6w7NGuU2jx3",
  "key4": "2qdp3dqJ9oMRW1PapwRs19odgw8NNy3eg1AWv9XevBtc1ETrpxjrN5tWpW3vSsQ5aQSxZ6fYoTNxRjfBrbf5Wdv",
  "key5": "DERQXE6FJx9v3E28kqMfWCiWVCBFUwkKti17X9yBhDWTbABxKcHCePrYSjrLJCQTk8KzEVUAcHzEhaiUx5RHxic",
  "key6": "5StmrJFX2tyDu6ZDd7ix83ve2cSrrsdSiii1ck5Je4AgojvHVCsdyeDMGzvs8wQ88G3fEj9FhoRGYhigXuNJGQJ1",
  "key7": "3iHskjX9xvzTs13equoN3hpQDPwyZupj5WoVj3DKPoJQySnawB2ahbcjMcwHr4CDsReiX1xgu97zFyM1VaHVVAQQ",
  "key8": "53C6vU81R9pXzpWJcG2Tb9wFeZ4y7XorCNqPWEidmLY4uCN6QXNHbnpPTNEJKLuDLuSijD5LgcNVBeS5WXttjcsj",
  "key9": "44EmTeYv1hXZewL3XTLpHUULs5auykXBZQAcoBbkfGXsPE2KdiX5jJNpQpTFWoXbwfVXosEZ5WF2JmYwBpYZJGi2",
  "key10": "32DDBh5tJm2Cu6a72dQmwpDfBGChtYnqJG7A5sVhA5HquTBUhxasd7qFMNxCEmftykSpAzCkvrFmxShFk3evfECu",
  "key11": "4dfDFyctsPkPmR82uCjyXKmQ9d98GEASieNA6AwVT7jkLGmSQNQvZYWgenfWAk4NCQYeqQCTWaz9n1uCY8CyN9k1",
  "key12": "4RzuqsqgypQM1UXzCdgUscksx7uMLyTSBWm3jufsaX5KqCYj7EgMt8DMm4Fq9zQgSx1RU5VhiLHpKdhH1iHh8AJB",
  "key13": "33gidESR25uRBRhuVA6rrhpu1LyShTQZfmwT8QPAvZZN6SQCr6kuo6qFKA3do24NZ3HtLCmyXWJ5MWD6vR5PoGGG",
  "key14": "39mxsDRDSv2ScmYj2uz1c8fsvSPYjLwu4YDgfwyXdQ6xCRrA2zUxLN8GKumR7bFhNTsGUg1U9mzxKBQkSKw4XoWV",
  "key15": "4Yym7GXbxbFr9uim54p7hb3PpPG7TAfVGJ1mxhJ9Nzh3Z6PxgPwhVUsKeeQJTWR9j2pi3TaJVsCf7THmRcHGzth4",
  "key16": "2qjykDH8LT5audusrAihPhqF16pA9cT9kz8YETD9QoY8rrMEP1SP5sanaiybyDQg2nF4z1zdFaY5ygDqQek2E8Wt",
  "key17": "Cboug5Dj772LSuwHjZwWaxgUmcicnLU9kLDetiLpeceLJmexTJ241f6vR82babg8gntBNsD1hv3Lb4BT4tsES4Q",
  "key18": "5DKuRDSSnhLwvdeHXLGnuSHHBP9NXFkmrjtFrxqJeMFfvgc2B7s1JtHixhXUF1v2rrYGDx39W5cCAWmu8kBPvQ9U",
  "key19": "2dvFdE8msZ9uJxm72o1mLwPDcbW2fautqZ8QpeqMsLxrapUBKsLUdFwWCcN4qajWEDW7wUvH7VKBRruUXYaPftJG",
  "key20": "4XLLcCD3pCHjLGzH3yodErKgPRMEUMHMfhfLiNfGm8UM22AkzzJaedZrvJyxXFThw8B8a58RG68ftH7B2ukUtpg4",
  "key21": "u8KawWyLNMBC17GWrMSpFEnwGM6FFRkop45EVd2RBuz37yPodXNgeCq2qPnJzZidUjZcWq3d42Pt7CoguuR8YZZ",
  "key22": "7vA2jxjC6PRoMXNNsKEMcp9LkVrjRQGa1nivUzAzdNwWmtXKwpZg9bDbMFqJfymv9LH5w9BU1mBmXX1c7TA7aWS",
  "key23": "4q4XQ8wLK7JU6SEEw1mzbu2rHiNnPKHJQ5vWvTo9JXDYs4TnbwiCJm6iperyiA9hgKh5NcoBotNAeN3EBQ7zP9Px",
  "key24": "5q2ewejrUtFeMK2TszJP1rhhcMWHRZwmT3vTJh678nVdhiHv89LRiCKmDBBcgCyy621hv4wVq1pRst3x5zRXTvWR",
  "key25": "3QUxmxL5harkGA3MWjMYNY9bXsoo8VzJ6SvLmNhAcNqYWzbM97kybwfhpFzwb3pJ4Q2xeRxJ7oc5i9GEkagf8fk5",
  "key26": "pJ2ZVxER8dytCLQ6dooPU5ukEkfBkfggdPMuVkyw67XT5DuQJ5kGDmSFbGdp6m5oCdmBxNyRjWhjf8EgJZYuGbD",
  "key27": "BsrDeR9ZgnjkiWf1AxSVacVEu3jWQ6ZiCzHByyVXNev8vMJYv5yKrpJNExxb7NjBPiQ8Lk8j4WFTfXhYja3nhy8",
  "key28": "G3kRV66kbzCvm21CnTjFL63V7THBT1BzpyvXmMXeSBeSdEg6xCrGdL7eU3wtNZLso8mMLRjSi7ZVcR1dNpPS9Ey",
  "key29": "36511afUfJ4mMiCH4uNZfQ4E5Y8T4ZFsWbCjhxsgv7rqG7QAvz9Yx4L3XTtY2tRRqPWkSTK4tRupapTdRY7whrbv",
  "key30": "62PD9d15v1uX9CvW6iGc66T7mPyE59kRQ6YNWGei7S4ZCDwJjga58vgQWmxDPzh7pphjvFb5s5o6kXD4bv2K9ajb",
  "key31": "4hs3yrAoXzRfwX5txWLkV9hj2xGhvh3QGPsetJACrxCapf8c3weQBvT6Nga9RTaG7eUoPon2MqBNUrQcaESWucYa",
  "key32": "3RTYkxCWu12eVv8uAPUF6KNixDafgM6Y98fZniKRqrajRLVsymBgihb6fCnCAXRfmbgAFMj7Y71qC96NrUyjXAwU",
  "key33": "47GrBq42u3J1hNUhGXA8YgwdCXuBSjtXFDK6kKcxgtZRpeHAFJbtwxEniwAFNyFqEsWMYE5FWKHBLp95g2cdBVt4",
  "key34": "61EFBSghNwxwypHbVrC72SDGpD55QFZTmz5wMuCFVonQSsDJqZs52YJHbWEFEN1Ck5a3xReS8U8Bhq5ENmEfHFz9",
  "key35": "4FxaneVy2doGN2fXv5Fz2xwEszTmmuEoj8oQSmwhBMykHZ2vpBuMaCtGskzaUij6cKccHFFyybiQUssZSWTf4uVX",
  "key36": "5yqHhdorLbu3gaV3tSn7y2fFBaEqyKPrziVURzwLJy97qTAkAqHpiUbsG3vmUZaGwiecV7x9i8vxHrF8894Q3Z2X",
  "key37": "2YcYsjfg92puSsaGxh6vE1L5z253trCSBQYAFjezmTujGuQePF4sHYjsQGT6oRBj8C9xfcJVa3unAZzuV8ZQVaiU"
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
