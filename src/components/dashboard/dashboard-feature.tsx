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
    "5SRczxLQfRswYULe6Wg5iy2P32cX9aYt67NNWkuris1pm8or4kLFbbgDEQcpXPrtFRbJPEEUT8JSQXdR8f87ofcn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oxRk6Eud1DRc2kiESWqYUBGAh79JrKri7X67SdKnVH99fXsKa6EfhxcwN94YC1gBJT4p5MuGwnKMWL1iQBHfSrQ",
  "key1": "678mH214yirMPdYLPBJ6AZFmhV4uENN9eZEC9z2WohKK8E23XBGDKswyCZfRuSimtbfuz2P2hRNnWRrz1XEv84PQ",
  "key2": "5ydjQrnGzjtur6tmQcanidoLZyKxjtHLzEJP5R6iqi14RqVHaAWWMoXYyDNoKqRa3hJHGd3UNZyJ5PUym7wypSWR",
  "key3": "5MWCvqy7YgfvHTjicfQUk2Yx8dGPzFbJGvVQiVekEFgwfZUeaMQ5x11qoSwAcqCMq3cWpC3FfUEuCG2YUwErTMtL",
  "key4": "5r6BKJ8SrXL77UM2bbcpnr7XaHcLpGYikTWYV2hrSBPGUKi5xR1skuQT2x3fJ3Cwpt6zCZG2HGQkCFzH48oWqSTz",
  "key5": "62AvN5MFF1vud8G3qgb9ZUN3iXK9v5TSAvJkP1CZy17wot2dN8tcb8hcPUb93gwhoDfweKSun2WNBACS9cmnMasd",
  "key6": "4mrWaotzMJ4P5mY6ycAWFvVqyDbugNNPYntjXneLuFXKkeF1Boxse1fzt3VK955fkxWxBRFetEbR4kF4MEytz1Xy",
  "key7": "32Pvsa6gbz69oW2b2wiJXUsVp78C5VvQDJSunAT55RBzixHtzxSAK4S6sPrzCxTvQeuUZMnQU9UmaoMPQeoW4pS3",
  "key8": "2ff54JMc1eBcF59oyMRq1XtXYGbE1bA3Z2bP8WVQGFAYVLRCJKENvVU99c5MK1fgGTYUqWTwt9wUEUmC7MYR1pjm",
  "key9": "2djQPZUpKCYcm91rfWSkFo1JAMaVXuU9mqSNZcgbeUHcBmVzCmpKr63kGo9GqdKbGhCW3zJYkVEGA9C7GmGTv1HY",
  "key10": "JEkRpw4FKECKmfh4Tw2JQZ8vNpfV13ug8rEXWp79JSMPLycsXyG55mJSjs94E36hiCcTYEZPaM9rLPkQEqArDFx",
  "key11": "xiFcQKGtTdi4zLXH7g5pFJVE6GvNFNm3bWXsLCkvzgDmjpZGi7KqaPaGRHG5eyCNVNosJexufwn5mAxPkCsvvmn",
  "key12": "3DU4zVi5p4zPGX9u9FvhV5tWXeYWjGpBvHpC4acXHjkiwVPeZFHv7UsYbitBup98gQg69aSDKj7nNBzUd87daUmE",
  "key13": "3qwpyi6gkmAi8jWr2a2yTrgh3i4DXeibdRqj7VxhGfsAaKkoBEB21stBqaLSv4zpbkr7bB1jGxD3muyvHtUZguYc",
  "key14": "aCTdn78conBuHxWdWrhQRDvbibgSEV8sasHW2ovqiBN9id4sQhpgM96csrZGnG96BrQtc1sJxwz9C4jjiXZxFjR",
  "key15": "5dKSjH9qjMHyRT2AApXHxnxSxGRtmqioznZe1Gjac2A4tKAVubGMb2RwqsDxyT1sSLeiXAmaFqxQpT13uTSsrofv",
  "key16": "5GK4V1rpuwgrf6LcL26E78Ho41RsbMhV8vW5YY6L9LzZGBGHY9JSRA2xUtZn3DLKjJ82qoKzsxNLMYPf3HuU4ecd",
  "key17": "5PB2RMDiD7rEkmZMfLTCAXQwyqXEAAJHDVgRZsvd29Rdx7zSC5Pe1au9V2z61TWDobDz3pka5Z4Zzhi6eEBWVTP5",
  "key18": "f2JSSc6Yt7KzH8p2coh7P3xXTQ8XmoYuzHXATs99hrdo5XCJqa95CGqrgeQrrA2FsiGAEeyyrtS7apmJ1WsHHKU",
  "key19": "5XMPy3HqDDqgL2xdZrYd5bNwRVmjPngtHUQxcUNCGEko4Jw4n3fPNUWc4Guffv6VwgU6cHjTQiZKamYNYVwuJBuD",
  "key20": "35uu2TyBCodUS5fDRkqJdsaznuyDa7ccHTF67Buxv5NBTiZMVo7L2bSZEEE7ZYWUdKWpr4eKvxZWPPMGhK7uwP2x",
  "key21": "27jnuBUF2NoVgArXrMVd8ex3xe8HdiXPFbZJqFq3JHrwppP2t2wf4qeLUm3WJg1JEpj79UhQA4h5QZtag3fhTNgq",
  "key22": "4x1jeWYBGNUEmWNjAqELpGkSmww21CD3WSdfLWNa4HTqEHS5oKWdUKSxUuZhdxEvxifZiu6mbit2NF7Hd1LuJdY6",
  "key23": "2H1WX1vt84jjyo9Pe8pw3ZXjDCo7rM9GssKChaooEdWFiBxTMdzeSCpfMWSkYrxYbqrwHAKPvRSGKXwSmHSSWdzy",
  "key24": "jXjfWgYJata7LTU4fTEYBU6NdasFQdhWuVD2VrYKumC1QvU9W1zUq6246PH3iVm9nvmpHmQ4FQipPZSs5uzbnnw",
  "key25": "4rY9NKsqVgjN7vXpf4PbJNy8AQDTPqigfw4CD3XjSqo4MQA5BoTXb9EpEwFTVsZ5W5raQBxL1pnzf5SjVfDyriok",
  "key26": "4XC3RzJQyVBEAgS6q8istZaDUw4gtCbYPUyyrXhPeFHQfV2GxkfeZbRMw77qqM13En9B8xBk77RBCKC8wZKJSwSU"
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
