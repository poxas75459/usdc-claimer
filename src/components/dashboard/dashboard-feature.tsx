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
    "3CVZ4B449VyMQ3XygPvDSq8wnNr5MPiSfcmmA8ZXsYVqfZW3GtRhHHSxdcRrRxQa44aBfaB6ffuq28SaLqAArhKu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JHdpHbKXtV8t2tCS35Jr2uFLhrLvZFMv5y1XawuGRKvwpgBs5EPjH5r6MKG7BwEwKEounY62i2q6WF4ZxSL5NR5",
  "key1": "385gYojajY5BfPPGffn1JyAbR6AbATfgT9AdmFr3i1i63EKHnuEYKSdvsKUq1tZE6EJMd2GxbX9B3NqNB6vA1nKa",
  "key2": "5Y6agAFntvcWQdKVP4NoJvJToQMWQZv4uUjF58PyeYX82mC4tsgmTsXfRV2ZrhKriQWgyxuZvvdJ1HWDJBKygaji",
  "key3": "53hTMHtEykWFP4GGxw9MfaVUbxMagWT6kGvpNux2fWdJGNaeZeHBre6gRbQzyjNmQX9BqqwLt194MYvmxDHHnXZn",
  "key4": "g1VAyGs4NyZGvymDqFyctABuqsfbKHt9FxFYNyQuViMFcVxfHMh4SqbTKcggCXJS4ckauJS5o9o25y6hXPW65dw",
  "key5": "5EKvyW1PARWeaXKAyN7EoagbuGNxSjvCu3HK31DdkncSa2oFQGxxhCSnkHZMw9ucq3JrinYZzBGQHaAeWbUaNYhV",
  "key6": "2egeeotAmG13HHBZpbCBrtfmCEUVpM6jsbhm4HY5iW3yGdTLqLD9KYd7krnZoZzSg4hNgRXLk1XnFzrvcRSYgAYP",
  "key7": "4S4PqkjEERoR26dQ1egjL7g66DW27Z1LhUCFp95qG6G27jCuNf9qhjC7LRefyMTVr1UXU3dbRBjeQfJZLDn2DpF4",
  "key8": "2hmZ8nAL5JCCSXpTBeneYLLnMqTPKkmMBek37MYgqyJLV1LynE8MFocE2g8nMKmPQHZCWgqe7Dcby6hGVUQHRrEp",
  "key9": "2YwRWbHYWBnMA93Xicpjgwtc3iS3cXnjE4VL3nbGCLk6jWScmWgmiaa6MH5S3q37jUYwZj8YKfMj1rXW88QF34ZJ",
  "key10": "2Lm4BB7nU2Hjv9tH2c9eg6vUp5KX7toVUGyvoRAyAkQ4TpVfkuXNMpvYn49LBh7t2BhdNzArWGdFsVBbsQq5CoAw",
  "key11": "4XkxX9cavaTd9p4X6HdsZzTYfiYdsgRWkH6wRjVzKGAHNL6ZUPhazEgqPWN4XeWmEURzqYc5oE1dvBRevSYnwCUd",
  "key12": "4i89FTB68qtcdHcpavgKQJ9XGBkJmatw6w1bHnDqmuwaZqBXDoE32haB9cz9fLefQeQgA2m3H41dsrZvGZ9NEWZ1",
  "key13": "3TqTqS6cYo1R4wkaozfdihmBsuCBuYxkDouyHZ15Mnw8TKyBvuZkrPLe6mUyiErUm4mZTckFk2bzUHcB6T7qRjpQ",
  "key14": "3P2mDXZYu9F7HQ2pnAJcQhMvNfvHFcF1yLtktXKgHkoGkzzLdimcWCUdJfeZjBVWusDQ7oMoE9dJRjXFJWJdcgKB",
  "key15": "LNoMFdh4n7CNy6KtUgoL5dmGVTJg5W461QgUu3qSPeabidf7RXgUTAaUAphTUKiiih9D4SFvJNQcx7RvrmMevRC",
  "key16": "5eaEB2fGGXCd9pCsHUF5RomVV7B5bbhLXAMhaGaAvzHovJ6qXCksbbg4SJaMNcUSctGEVpGvHANTNccSAG3WpxUw",
  "key17": "4PsiGKKQtBQ41C1M1tDut2XMCdf2hTbK9EpEjFhtqSSWnKtaWdXeNoxYkD8bH6UaZKLNFcXXdbaNCsmAAsCVqhjP",
  "key18": "57nXgDbkb4wDhd22woyiJCD9Wu6XfzKU1M9jzrzsy5REM91RNSfbVuhFrrgPFPug9rKhQU3pL2nJBTrEy8iYsZah",
  "key19": "2mVPh3gJk1YcCvHa1Jj5jYPUukxm7ko8q7hWdeEzcpBLJKK8xkiJCyeG38irf7M1WwrRj9Xj6YxGujRbwdSPCuvf",
  "key20": "5uMge8QAdtcC5BYbBRg3EX2xND3C9fojkSWjXz5AMmbGMgg5uUTEHfXaw79qWa2or4ApqPqoia55ub3m6uqc3aTg",
  "key21": "2Gan8gVx9AAZqa2gE7BNnn6dFNFwjgF2Re8CU78Sth28AcgZJiPioAQzKxe7xtQY3KnPDSRsXhfs6j4JmjJbZ3dN",
  "key22": "4JqQP4HSJxWakemdTc2GHBtCtRxZqzhT412obu9mhffhKMDFVabyz1yeBUk2xwTGDjiMupAJ3XDoC1M6ospZ5RXr",
  "key23": "4LiqHhMhYWpFR55d6vY84XCyLw1ao2WqpQvVtjZusGu3rh1abpXU9CHsK6aDp1RmHZd4tjUrWiJwdY2aZe6PG9E1",
  "key24": "4zBFhAP81rNUH3kLvC6T1kjaGHQddam3Uz8jW7cMpTjZnZGvHyxdLe64J5AnQN24SzBDspzKDWRnv5jdTiZWpZFf",
  "key25": "54uK84Tpskzcm2Gh5KcrcdtJXkHNhTCeyeSkbR5GkM3eW7LmwUrj75gKzBbaq6aaAXyJ4eWzhuFRzJXR1vWrPXz3"
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
