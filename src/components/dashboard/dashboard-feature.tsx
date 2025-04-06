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
    "3y3Kh9vmxr1RM8F2uf3tvC5nzC3LPv8HvzbUKvrt25DNpoGWNp2YEahjLjbo8L4TezRmZiGxwBmnjj3oJU36dwGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xXrXWJwfb1xhoV9yyw8yV1g8nsEhYyZzm4Bv3gWVxjXZ34ymTPzvEV2WWQfMAVGJmLAT4N7kf6oy83gUVJhFAfk",
  "key1": "2K64zEZUfQwfn6vZvXFYe6YcWUtyCjhxuLaSyjXmACKTujipiWxY7CnSEVDfSGhdnkx3hn1hs8qqPr6y8hDgX7pK",
  "key2": "3kGszpWQq68ZdVouJrykShPiVoP1FnM1hFUnhmiy2SqHxwoC1cYknRgs7GkNpATqvAr7aVu2Y5rr6qFjYueXWtHd",
  "key3": "3gH3ET9kETLmzR3DP1uzDf8Q86bn9LizD3g3gFmoi2Nb86s5e3dYFPDAKJ7nLPvbjE9pi7NyCFBvLqM3GSmEid6v",
  "key4": "3vk2KmMosQL7RSpyhoCeM327FL5nMsEX3ioRqACtRjccQP98FaLVr51xLbdGchHV1qmMWWo6BS8TDm7CAKVnDWGp",
  "key5": "4UCtMTBAtybE5Zf8zvH742LcNFwaViMgZn8Cf7PjepKn7MzgCT1yArHqXP9YkJb1SSBzNtwTKCsxwsicPEACnePh",
  "key6": "nVwQXc5SYCiHa1f9SMzsGqdbCPWiyNs916kibqzzVsqfNHLA6Rpym4S4BoES9vYwB2EwP29q9npChxmv8gWFKmz",
  "key7": "32u3At9XhxWVD9XxttSYmyP9wCRjiy7BqcXU7Dzc6hCZVRFEixBNYE8AtHFR9NsatSx2kJXNHAB4Rd8hpTncUWAG",
  "key8": "4SjWpxjM3rpexiGDN7mGbVEgzCckAkYfuVvi3mCQ8CcpN5YkpniBiFDKX2a15J8djxz1gvZyhLxmAsmCJy8SWEX9",
  "key9": "2qdqgoF7tJi58dxkGfVcvrTsrwEKD7nmu6C8wre72hMM5L6EzzZRXfDrE8LM6PUeD21eJyGHC2vbSKMLPL1vQ8L",
  "key10": "8GtHoB6DW4nPTCq1gpHLVcwb2YgsDrFZPNxX7GaqfXmMVob7cE2GpmA7DcdikMhP8MzGBM1h8AtvPCfHykqWkGN",
  "key11": "rjd7Zf8ZDhBwDN5nFJ476NqHei8KsyEYYXbW6zvAQ3Fskc49e4omtXHiwpTWCgQUQeyP5rsQomQud8CSxCLBw7w",
  "key12": "55vhgwEKmF5uGHeEEJVYsihVuYsUTukqKgi8MjP8Aup7C7qLaXphzDXEq8QqLoAV881kQrpjDViMkBduh5Jkw2V7",
  "key13": "3YztRnoU6vU31YzBrCwUpVzpbiuy6BsUpLXBGW5DAKCW6k4EEq1E2Rs5Nf3EiJLRE5gi4CcVJHtWe35CeSUZN43Z",
  "key14": "9F94vt2VQbW8iQmYnLodMBferTmKesHMctBWdoN3m5xKVepv3aKq9XiBm4RkhpUQjFUhMsbT7fe9HKxsaX3EEdc",
  "key15": "3gFQ8QyU71XEPHG6XKuPvGBkrbfbrBiXweaBKkT8BgwQNtAWuqiew8Ly71AuvdKTgSPRrD2WLnLgpNnKscNgjPFz",
  "key16": "4MFgRuTeRnTJDbbWiXbNM6uqaSs4qCHboFBhjTPxmJiFxEgFYwPqQ8rDYcDpBumiKcKLHcj3GvTXrS9v4sZqPjmV",
  "key17": "5jvDBePwB3nqA7Z65rNq2gsGNM1UuWeKXaqvTid2dRbFVUjmDD2tPT9Qf2FSZi1JLvGv54e8ZMNfuYRi3Yw3NVM7",
  "key18": "5gKxXGPgMaTeSnfAZtobKKvGCgLh2bTAMJntKDLr4kzHtXJa3jGo7a53YWAcDxpyBQeKmnTSbYLTJZ1i7NCaoTjw",
  "key19": "2VirdQsjBjq5LmnjyBnnKefSA8pkyoVuCqgHfvKro7vG6PZPBcvpJYF455E7DPSSM1GevPcZecqrQRU4Wiff318E",
  "key20": "2iCbk8gfunf2kZCxxj2Gfo3kaTXaaG9WmrsZVhtAYKz4Jwo43JZ23bYQVoHQL5yRsD45WCK9vdEY46Lyfdrj2qzr",
  "key21": "2tfXavR4bWwaxzK9JHuBwxDBe7D6YSAzCvJSgAmnSoAwm9AoiAtMSWKutnqpFa2aqypooqTuUwGwU3KjwjMH9ksT",
  "key22": "2U3SdJeu3JgL9pUAg9Cg7Ba4n3trjkpShvJ3tfhyLrW6hLZQN6qhbWa4gD5Fhz15xtFptwGPEVycQxTs491z523d",
  "key23": "66439vay1HNNZssYEMChEFbm2WF95cb4SzvkUn7zSfujo2M35YzfhRrNSbAKWyMqSJ7wpfZcnpkXPwZQThFLpr6J",
  "key24": "2xYLPsYgEDw9n1M8aMXqqQWvPWFdBAjaW11CtGbkAkf3J7bof9k2TAx6k9yCivfG22CKC47bS3yE5B1tBSA1JLUm"
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
