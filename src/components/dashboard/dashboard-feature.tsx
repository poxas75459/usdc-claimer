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
    "4g7fiRvWg5MBSoi3j2bzSvCDkCKxAMYeWZKDVfycs1H3EhfmBAWvqVQqZ7wvZxY1qoQPBWJ5H8zZGTXeFihQT5xC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8XpYpYjiPk8arPJ7Png7MS2FRg7BS6wFGFR6wwpu6aCczR4K7KRifuj2JPPWt9SyK4328sAF9x4jYSUxGfpKrvX",
  "key1": "5Sj1h3NAvWK1FiwXV7N4yGHgRs9w6yRKwaS1G791gcQHMRZ9iLhqwXH97A51YAAMcnGNwGQjGFgor1fxK2Peqi9q",
  "key2": "MfvDdBgBAwvmzPCiWj6kSQPboQyaMWKiQ51A5koU1RyKENadbaHnKxZQHqzgzoAHj6UcpAB2yGAmrHpCNvNfuWv",
  "key3": "3FbnUc18xeFNjxnMKbCMEoQX6zZGZJiESEKnzizYu7B8bU9bas5gSCsn7ppv8SjJSz2equyKFwCfEkR9SzrD2Rqk",
  "key4": "2GjASGhxET6k6azh6QLP9VHLqN3BytYngy7kWV8rGpoZzNDpfzD4ryyDFMWj9THhQ3tkGrL2PpnjbZFBwe4CNeyd",
  "key5": "3awVGJHFkXUNCELMVyMVQCtdMduP3VETY8BEqvUGy1e49qzXwt6cu71w5C2KKRRSXaA88r5NM6mJKYRTTqhzzQdz",
  "key6": "3YZyYt3xAGULQtZC4cdPkVKhUCN49uLaLwtpKmZG5yxk3D6NMrV3H1A4Xs2CEhztdKr8YkwBXE3BWJJLgqMmkGxf",
  "key7": "57UeDvxMUyxQZeg8bvKesLymTcAfdudfM4ptC3mymEAPx5eHPu6gujLsknzZ5g9t4KVvyezcJg2tUbf9ZQcDKEmD",
  "key8": "2rwmSLXvGJKmoRvfmqUv8uHJWUmDz15EBF1qqdHMLP1bgsNWWs2SZPdVbvtVKSogaS93bTXqr6MuEHDQvsUG6zYz",
  "key9": "2UmKoqerEk4DAnkdELVSKVNERLCbYwBCQnDzvT1veLcUyFBNm7TLhKAw5CwphpG8qomxDeaU5Sqdnq1Ze85nuRBw",
  "key10": "wJDG1GYMiZmyC3aA9DU7JLwD3MDXhMYHZSKzz1uHKbvXxGpLrQXByT5fAwAodkFpB1rZioaN5b4NMbfy21D4hLr",
  "key11": "3yQyJdVSoMKy17uKC37cJwZV3rH8A2prPZmEUmmnWress5bK7myhn5YuZUsFfkmYGpoNMGe6s4gJUzMpMtWC44HP",
  "key12": "3r2NnNPdgbJVhK2VtEzyRDSk3j6MeRMBtebKH16NE8gCgakfCVFFRZNgTym34aygDDxF6RDFyXeP1RW7g3dUx7of",
  "key13": "5861EgXyuiMwvSFpy9ySFLZ1yKSnM8vG6Mri7hho3kZoBs7FVZLc5EfE1NAQPTpRit1FNgjWXGRfN5RCtonDx21X",
  "key14": "49whcfoDKi3QAojqkWak5a8AmGDKqdtJQxK2vubJ8XZJ4bj4p5htiVRLGw6RmiR6nQh1W3LN4nUno2VbHnu4nTpE",
  "key15": "5FsQUwvNneGoJmKTuwkckQyBaJWPNJqHCG6UNcCMnomnkU4MSUfT44chSquQav2vUGPAt1h1TfQ9XgQgb7txJG6y",
  "key16": "2VLmQpaQmK8VW4N16BWodkT1VXismYDhuck2XYE3J7ogtW98utmn5mMY7CS3n6kKPSVv3pk3h96Dbxp5nPrY6hyr",
  "key17": "27hVaCAX4HZEPZmTtkJdrRfRZhw68NgeAN7nALHKc8BTBh35itEAs3tUZQPxL8myoTU8FT7uqUbV9bg9NeXrjYww",
  "key18": "3rFnhSd84rVeD1A9cqEw5QiJncRBC1bq5cT8RPXLtmbN4UtTf56E67HBPYfkrcEKfuWxo6o4PU8hNVSgYMMjrTAo",
  "key19": "5SCKpUYhwP2bjL2zj3AeGF5u7t6onyrT7hqjG3ndxCeDGVxn2TQQggFhpUYG6p4UNzgjdeD3VwrKnSZBuZQEFS9e",
  "key20": "37HJ4XFJH4buzTdnfVQkNgBfTotFbotgENbC8946i9MnJMcvpwB32J4amV4nhfEcfMJRriRYSa7SsWJ6gwPMfJho",
  "key21": "5GgEYAh5QNwHz5J1DLkT2DaFfZcZyT13i9VBY2S14KwvpZ9fxEEWjqPkwRmSkVTRkPspfbK5d5XGSUKviDE7Bbs2",
  "key22": "8k9VxmNzYSoxihansd62y3rFzkBAjcRxLnABU3mDdk9JYT1DG3Rdz7A2VQ5VkQFYPmLyPmQtJ7HthXG1zXznPmU",
  "key23": "EbZD9ePutkrXyHgGR2AZbZDs6ZF3CV979FFHNbFxvZFsPkKsWY2PGfwVmxWj65K8rxy9ieBRpaT82Jsb65po3J6",
  "key24": "3XCG3yobrVWWbuCUi4ozurmqkq8RF3CNAGGmsMoUzQBNhsm8sEKuWeSNXJnTscHWNMLjGQoEPqNi2RQ46SCBUmKQ",
  "key25": "5mwyG1KWirL2mFUW1S5RcQnpLChyBVP7eeQp4yDpuLa6gR75zsyMc4qMUTK5Z37XBgBHSj7RBg2aRmYDphfdcFVa",
  "key26": "3E5hJfvnfZryqZdYYrLYcQduPt9hEY4YRve6RyKox9wYwKXZgZEDWwX8qocS4RYXFAfVsLBUDProeUuNFenvWBV8",
  "key27": "64Phjjvr2GsgSsmH2MMdRiWLyuGfPDdn3qFbSVLZDaeCAb8ftLqHMsJzmnv88DPoAVurY8j9SgGSynizANCpSbAq",
  "key28": "3gb4SwasDhX2kad44upq4xpxfGEzRy2SfjdBf4QTcNRiHkfgZjdsq1kwDpAuMBow6F5VgSGB19q51nyieV6tuCH9",
  "key29": "4xhvA4AGnqAk2PM85XWgNwz8WLvtcMFSYAaLr54JUPVtinT9B7vU2Ue7JizL5TXg8zkDgwHnmcVud891uU92BBiK",
  "key30": "35V2GQne9SLeMrcHDtiZuYxS6qTGtHwrSCtgHov4XMMgoNTdtxFNeAwumU27cEDkHrg5KPyJ9XVpcLzoVXiSuX4f",
  "key31": "w8UAM3TjU26AEpF6WxV5M2YfpGqjtpYqNB4vKLmgCXmbH56pqEYVcyvriPpGbRssQ794AUGvPLGi73th59R5U4h",
  "key32": "3Zxz8XuyP3dn1WhGVAiEUjBHMf5tJTBkJkVkn8kt5KxPPFTZPEuc9kqoLxjK6SApouB7asdoQLaLyrQ86iFZ9ddX",
  "key33": "2S3kbmfRVqmb4fhCCH3MVuCLx5zsyt2QFhHYJRprtMzmeoF6sc3m7pe6VJPGWcvyCGPgM3XMLdyZQeLN1QvKaXks",
  "key34": "3sjeGtMJ6Eqd5rip9Bq7SHtXq5dTWN6XKmV1enA5k2C9iavGoDiJEQ5tNSRsL6ift9qk27tsRvNb7wBQHYP2fV4Q",
  "key35": "2w8QzLTDeBgVS2GxQaefdwqPLggvnTfweoLiwKZjTL5zWeJ75Mtoa21zYAfy6cQ5ppV1i9R4keiQCqPWLSb3vefP",
  "key36": "3QQaxB7fLJP9yBS9zpdtsNydXpJSk1Pc2h4BjESatB1dXPjqJbTP8pHRDX3bkCzQAMPu8rRG2BGyFNergyvNNH8m",
  "key37": "hLRXsGQwkXs65YxtVDb7S9xRNEn5esVAAB4JMxAMhTtubQiL731WVJasd98cTfV5RqqnaUFgKK2hH7FwykmLoSK",
  "key38": "488MfXd89EwYSKDm3eavQgKfPcVCF5DRJH47pngAiHgm6GjsisVaEBoq24fVWCfggNfGCZ83aNKxRRr1svwxGVgr",
  "key39": "5WXcKLKRELZjpWi5H8w4unbyvJoW64tvNKTj6sKRZBp9MtFcU9qNLtJsrwuENno2nTrm6ab5CiGVn2BPBUeZu9M3",
  "key40": "2fExpCU3ihkW1FRGhY2Xsr6rF2fuHSUtd7xCgBGvkmgsuiXGVtgnZEkCvp6uimQA3fwkJ38raqjh3wydpyKn6ANE",
  "key41": "4uH5mmUGPzUL6TJVcoNzz2krEuShD14q5emvFK1yMoTRWA9cuDJYKgqQr8Do2ZL29h93yQee1QJuqy9XSHU5U2av",
  "key42": "2hcofovZCw4s762TWQsFRRck1wtsNN5z5wFfnMJA2jPSj3hVhf1JJFAyPJDDL1jMbv1DkL1ksq564jRbUc3HaAA"
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
