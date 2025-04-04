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
    "Aw62kYLHi7F7phNEX5o7KuTBDiwEGSjasPkKUSjyZMWgBZRKKiEB86DWekrUUJz6givQnxj2xCB7Hg92c6ZHUNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YpkWpHZD4AHD5FrwAcjTrLke4pj9F5wLTRs7LUqCzbT9zoMRwpu1RrNbWQh4wKd6Qc3RFFusj11mHgVaQCVLWj8",
  "key1": "1fDkgQT9xZoJhbHbqQ7d1nUVJaNATHhXDL18RNAz3YGXg2vA7nuVYMdD2KQ2bbvbgXeekYwJhSHq9XP14j3MDkc",
  "key2": "4iXVkVevBU4HdHqmLVT2ofVuUBKLH9uvBUD5SzdoThQgf4xGLiKEoKD9xPzHw2MMoRY5FuhQKTxVfVukom6g2gzu",
  "key3": "4S6Rtn1beW922Ki8mEZpoK5hQi7bHBCKELtuwo6M7TFfmDjUt2XvUhexcRiiHj6yi27h2rwQ96fZ3HoMTNVAydX9",
  "key4": "3JXfE9E8nwDDLWmyUgaoq8WxXvvJkUSoDabUHudqJeL6Ujn65Y8B5C1vefLyFuVV76puNacLt7MDrt6RGK5qzrJK",
  "key5": "fmLe5EtmM8RTs9JsRnPKk1yHJZP4NFEvcZwDxH2wxBDJHhaSfN6iFyeeALCjtKDFrkhP7hYiEkyWZQRiFvftnkh",
  "key6": "36nTkafw1hWf3EujyER9zVzkjz5BBMvidKQ81nC69V24dotqZuxH9o7gfrZAoMfGRCpdj2YxgvajLJUhWRmdz6oL",
  "key7": "3gzuiTztc7kUtLsMRaCD5JR1FCvfeBA4Y9iWkTDwkTDq7q6JSArfGbMmMy7xRymLNEFXCmkQPvFKeqdPcuyMsWdx",
  "key8": "2XViZtLcSQZM3cmK6u8XCu7GSo1hbnKTvhyGWxvH1Jfogyyd4dZMMkHVAzyQBLHPmCXAQ3zAZGqGcts5kJoRbQ3Y",
  "key9": "5fHZ4B1xZoYBsNYt6ZHmycWydPs5CNatriCvQoJG6kqVhf4QBkHBvzMWBXo8LAw6D3f82RZbhog3ub1mYGaGiYZs",
  "key10": "37KdmUHLQmLBm38zMNoVzGZYq4FaHY7Afdc8NC6xNuKD67uMMXoYWHEiVrkSTXHKqLkEEcRvU2bvnyeR3LeAQ2J2",
  "key11": "3heJed3cDizr9ftFQgLU5oQadFkk9w31kPURYgxxnns3FREQqTerCwXG5yLWDAQ5YbErJXJ7TesxYD5iQxpscapS",
  "key12": "3XjQcFy8KUGDexMbDaBiDwWTTZNenWPVgm7Tg1dcEZQxR5yEHseVJHNxh2aaZqfVZJGjCenKA5nCrZCZz1LaE785",
  "key13": "5fLCbMiWDqM9phH7GGC6pFCyCL238AnPUKGJypFQE8FePWw6DKtwf5UyH93yMffPrXxnJhyUBQqvYrnuDciJJdnw",
  "key14": "3QxNx4rsLwZGRkYmN2UXYk2Mr1ySnV5pe6ueZUF1KpUPf37MSeHYLkpq9asugzFP8xR3n9Yttts2Rg5xg7TGVroc",
  "key15": "21yFvwxya5V4TWD629WmVcRPg79gZMtmYQH7Unnb5qD86hqTiZ9jDXyMEDEPABdQ7CJg6X4i2LhkTNhhqxNYzWxr",
  "key16": "4NrVoU6J7A6yABJrm6ig3xSRmfoEFaUmXG1Z4G6VtGK1orwxtqN7W327QaEgDsgKT6sECR4GvA2TqRbSAG8x4pP5",
  "key17": "5dejsN9yXD7eWAtHMrbX7GJes4RQA49NrriRDu4kkCPNpQThHD98TMPZAN25YrCvmmuKuw87648prASk2CWejNTB",
  "key18": "4p4pyp75BqxMvkjohF14vvr3UVJDpT5NrtCH2GzmFJysvYm1bFbvC2swfcwkP1Lt6Zzp6QHCN6FDMFC7CptbYbt1",
  "key19": "3s1XBHwPsgUFQLLY5XQBFYxnFzmRpi8YP4Tqi6FuvZkBrzMg86TLjb8ryesFCbYPm2zZkeqh7deBuEmwprvtSfH6",
  "key20": "2BFdkSbqVYQxNHxftmv8wfedquQB2oXoJpnJ6sXGoTFAKKnvDh18L2uVd8XDRTuyZr8wRVcNpohRa9AcdKMrutBZ",
  "key21": "2xEtgh99xVFEMkdibBXpuWCgRKPMjadwx7ApgXKFj4rBgN5HgLCtNc1XtddprDmYrrFGk7x7FU3DxBzjuskYmuS2",
  "key22": "gphwHQLgwS3g1xqeKdnZ9aL7LiSzV1yBvwhS4NeLc59oez1YEPrWDQghJQXDc1a2m1eMeQp6vqpo23Jo82MviF2",
  "key23": "3kHrxJuPQiBMgjwW5fx3ZjcBo8bEAsi4J8mpCLhz9xb8DXyiSQRZx9mJe78EdGfKk8QJ7KDd6StseZmBUE2SFNM1",
  "key24": "3cY4MvB6q4ELW3t7XPrYC79DXZhqLKxs3esrpe4rjSPrDH8apTc4kqFWD7akMLqcA6CzVeAy6SQM1BSm8af3c5L3",
  "key25": "2FdcVSs2yyEKXrNz7vDht1C7QrHRJVceCHhGZgPfiyLuBr6DsUsZKkwxo2ME5MqgaS2vpZ7xMQaLW4XKNfZacykr",
  "key26": "oAPhgbkEQDxNBW6mixwPFyj5gAAE1oucaAZ9Zith19nsoc733i4Zk8QLyFuEjzRPj59rF7WtB4c2eifyYeEoEui",
  "key27": "3aqub7aD5SgvRUBrVXMHv8PjCovFc4Xvg6LPgQuVdY4j1RnnMpJ56WPTwQw37c8AGFfutcJneuUBtyQJqVV7KmHp"
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
