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
    "3zrodZVTjm63uzp5mVPo1T49c7P9KhTVSj4pRubVUbcPf7yXR9geBhjbQxxSPWf62z8ecRF2kTDU6PK7muZ8h1dh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25AhNNLv3pq5PAg4jFHzNNAAfg1tkPi1H5wH84kfUTxfWNLmT2UKrFZxZAMfW9SgkAX1w3BEeFF4z7FG6LFpP5hQ",
  "key1": "32bWhoPWWyi8FoxkSRwzwFpgbbU9Ps4UwhA72CKkRkJfHTdg9h7EBQN9KDtZehZNC6reFbwPWX1wmFBSTzMEMZHg",
  "key2": "5DshEq7ZoEzzFmGn5B3uzDe8HiPLnwaSZ5ooZwbdqdY3DEMoL7WZEspM2ye1YqN5H8a2FwwLua66ZuDCRxxA73mM",
  "key3": "4gRvGW4XRnALcnyUKm2Q5YWojvqiGHWcPzfDrqrvEzQujHs2dNvuFFj2Bgwne8DaWKRz5eciT2yaFQF6BCQgfTkY",
  "key4": "332whSe2Qh7fSM4zFJmEg1ikAEktwdTw7QwvE6RuqDufQsUf7PpmZBnxG9qfc5rjsTHTCbCvmoEWHeMeCheBgVnf",
  "key5": "ME5EWPDMGixxyz5pttPHt6rVFkncmLfJw3S4LLKwFAzJWE7xJJdXCrm9472tsTieTmAWToEibfKPacuKctKJdhh",
  "key6": "f4q2ki5gYooeQ1CAqiWQKpSiRmNDJUgqs7khnDK6Frvvmr83jv3hrSrpGcexMpKfjm6nDozwAtNk3aw6QhppckB",
  "key7": "3iTUnnHbUDVfBMXMco9efweWwNQHBUCThT13XAiBa9N4sMb6vVCTVjEdeEWjd5jXiBEf9HeSLn9gu8GxiBq743P5",
  "key8": "5ixWJaRG4jQ11bDAwEwgDtNJne1wkP1QQo24ridtWsbSvXq2TSbkN8NUKwxERutTqtS6m6a3YdizerLdBvp5aRvA",
  "key9": "82h3jCeC8vFxXeyQPqkEvw47sNU5KXzAVJVEkhmD2WcLiZ8VK3411iyWdyTX4t28ZXqtRfFnvi3GzTfestvEK6x",
  "key10": "buybkykJQrp1CD3vCA2WiUqsJLvwjwR5k5rXFM5utWScn6TXceA47JNCBqKXAphQwAeaipjHEdnFb3mXEBHkHc4",
  "key11": "6275jePRtrgsdZkadr6hCMPGCJteedX6y7dxLjkuapQeNhuYfxqJio1vx3izVAWVDmuGLPXKqDPYaFFgQZY5EyLc",
  "key12": "5BSSgq4xH3TtNqTttGUTdmFiQVUSrJicBVNbLG2GJt3wPBJtYUVFcrZe5q5zc8eSXZLNBcNXLdLG33gJY344UnNB",
  "key13": "5vaRcJCDVR8ZbHNAuofgAfVzHJNxDHnmXzY4xDP9HSUkpWyLxafFCASLyGpA7BRYYauSzXJpVHCVdMYDZaLDzEjt",
  "key14": "vpQjxKLbHito19LVnGDSKSNqEiyfCRdmz1y7bLWNyh4p47L9Vas88GYX8uLrg9QbZAJ8vVz6ABADfBZuJVfVk98",
  "key15": "5xTm6YyRfdhMpb8HuEdybFaH5zPSkdicTBMLCXtwsUSTF77ZYxhfSYpMeXv1VD9mvEuTyg73rFr8ayauGaK33xtx",
  "key16": "5WFn95Z6JdGiveHUpiSzKf7grtJWchLs78YcGVr24KmL18Jzut3g42M385g5znTSn15fbh8vk6qUx14mEgJoV93i",
  "key17": "jE4sBnYxwpP6HdTrRrkWNGEpzu9xhZuMYZKyEbPQFCKX6jETWu894Tyqub1WWgGmG1dchLuqNhYrBZ3NEYAFZ2B",
  "key18": "4WHPM3476V2jAihYx9czQyUQLJMHZoxHFdTLxAY9A5gLDZhB7RgbjBikV4MUkMb5VGukfmE3jU36kjTkR5GLUTDZ",
  "key19": "3jTCDA7Y7AMnNatvbbPqjhbCymPqxFmFmAtVx84NTsCDoQMJ8LCTA6xuPqhHxGQVggBB5Gy7Zw9nj3bREQL6wqmS",
  "key20": "qJNx4ZhkL8kB6r7n9UtdwUKuaZzM5VScRiK6z6NwhNs41Yms5aMFbffCShrAbAiRCJuVpaPq8BKUjvnmjJAHXAq",
  "key21": "5qRMK4hQeDPkKZ8uZaqfz69Ncw6UWhDTDVQJvLgNsGNgkwr3qHoXrKnunFSRv5c4haBWrmdin1PAfBTncqgwF474",
  "key22": "5diGLZvMtCfD2RBZ4M7bTh3BquobLWPSDgGLp7pyGQRt4kGw8AFoBYirFpN5RBT2wU7eavCSyipyMPD1E3R5ZLwQ",
  "key23": "27uH6QCJgVZwVAzS6gxMXVre4pncNiuJANaCMq5YH6is1JqvFskLXKpiZCMvMuZY7NjUa1MJyunxM8xGqiBYtr5A",
  "key24": "48LvL6vBZ3GVw8Lno6afk3C5tiXWErunhTpobzW78SwZCujXq7qGjjjs9HKxia5fDAzf7kB8CqcRCN7rJxYShHh6",
  "key25": "2EqFepuZ6BXJbnMvxv7KQnER4gGCW8zCMj7misehgxq1CiNWtCQo6Lr4b4n251kvh9283suV9zBcE3VunChihkfU",
  "key26": "3Qvn6K1kwPkM1xMp3W3UzL2fuuQeWsuEq7JHn8qr79r9JcC7pEqytj1asmURvN5bL8hMobeG6aTjcYFmC1MgHkj4",
  "key27": "222xDko8hSx74h4TXNtW5kiooDFJWDLrqYdWU8oBvQ8izDqSAmj4U84k1YFYYF4amLWSufmRVgmY1vpucaNKzhSd",
  "key28": "8dLjArkv2RDTW5HVeNCdUEygGAAyh61rtZ3J6wXxR5rbKQoHH9tt6vwE3BMzdsVz2wwx9rs9FHHmnEkY5ytC9gL",
  "key29": "2vbHJJVsEzBC8oLHp9kSzvtdD5DGv1imbLbCMynEgsjjAvZenYkN4jCHGi4JYvvkYrRVYVC1v5iJwMTgkTGaS7J3"
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
