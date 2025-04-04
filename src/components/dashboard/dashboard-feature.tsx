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
    "3dTQiD5d8cLQX45FSDkvTm943fLUuqEhWrv8fgqmz8Tzn879XcoSe8sxMqD6ujxjgttL3Rtd3BphkyUEP2rqb2NT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BWHP2cyrWRJpkyMy5XMwTAofBc9tMiYtcWAn2wM9CpkHUPhVgyXKqGdfqCG1EWK4A8TXoQtuk4HzqVZusRz2p4Z",
  "key1": "5ekrqmyJ9sfZcZdxVKudCETtg44X6DDD2Ktc97TdPGBAU4n7JsYpm9YgFYPmhGaPJNqZTcuABg2YW9fnWxfKLCpS",
  "key2": "3fwHCTdvyMpgVXj6XAmP6qTvoEMwWR1xtntwmtVL1HKdqESa1TnTT87waeAp41WgsvtD5JsN4ydDMwVKthTpcGyw",
  "key3": "4ReVfwtzr2QtRPskyimYtpqZctt3RL3nPssqj9ombptzJ5spTYAMsD6uvq26zPGngj5ayyi8YdGPbjCD422ygkbJ",
  "key4": "21HWr6Vdm22WazQfk7NMe8QFzLX5z8zdwde2YxynDhAayMSJS5zRJ7dJdXeRr9J35MdXVJGHo7fuonmgvVd5hMZA",
  "key5": "291JaTqSEV7EyfFnXAuaD6ypbWgiBccc5MUpNif543NEnoh5VNNSzEiduJyGmUXBte6nSKZhnBvyB28a57wCkpRW",
  "key6": "4TD8oC6abojcNnfaonkLU3dzRb38juJtWPanuXGLUMTGR9trRyJmViteBnwLQC525jUkXBFwD2MjSK6JAYhxpXSr",
  "key7": "3k5L4rH91qBFxySsBFYuWrvTDFZEMr1h5cyfXg4nugztqo4a2ugymVW2kyJsUnVQwA4zutDrNKqUywS6jov4YhkM",
  "key8": "4MftHaNyYGwTpw9Us8fnUZ2vuuSZvNJFdUEyLRpG26es6RQnGwvb7qFEyvwNLeN8VPCgRWTn95UeNt8Bk8hnBHe8",
  "key9": "4pvaPqJQyTt9enD8yYAGRCavWnrPp8gKAu2c25ytrQMvnGeGYai8AH2yf3uaNA8WnuvShPMn2GRLLGzTHpBw59VB",
  "key10": "26e58wTa9kSnZDBkKK4t1D1kgLjkLrsTDpYkTmpU6nGMsABhdjvnMQhUFqS7ozBspzk9Z7m4t9HxqiCAXw3qfBWR",
  "key11": "3bGgRPJrFoQtL5JTuFqW6TxNEzRpCR9C4Jy4JPvSZwa8PcNfY85HYDJjqeckmWGUPHcsp46QqSK7uw7Leg3sbxkR",
  "key12": "4VZDQiphjjCjfngiJHyPNt1kfud1Qamz1xunmtHSATYXgETM8csYTW3nE1HtfNFTd9kaf5ZptFMhdbN41atY2Wp5",
  "key13": "46dBqgF4YkvrZiGJMhmA8RTWYXXBEKg4N7JWyoNdU5rG2yBGxM8rrGeqZQ7py8nYBQ9CEnsg8CrZwAKj6CEX4F4F",
  "key14": "nfkqK3hv7Y3aXbMWReWjzir31RwGk42PLiQY9pXZN6Zewcg1ftAGQSYYfsT8HwdfpmgGM8xWi9P2haYGZoRAxc3",
  "key15": "4WVvCr37AL4ssdj2R6pRfViWUmLZpiJT7rJs29rmkh1tyLySbjfiKvMpipKNFHA5Q9nLh5J884jygLdssJo2vXwP",
  "key16": "2SWM8RB3eDJSwXtAxUuxSFTr2xnX7RLZqmdNwFs9WcYVkuQfWesho3woRjHSErdiTCfux9aKiBS8XnQGFaER6GgL",
  "key17": "38oiB8ByrYw9VeU3hqmc7Acpw4NSHmML8d1vCPgqXDeBYs65v7mCBpi2epH71WtgV7FE9hSZfdCYqTdJRjxz64Y8",
  "key18": "muxMTTYanbtc5BFDFr8Dqzadadxx2FPW4tBXezruqWCwqnL5X6UKggth2AJDFybTvCCCtJNgsy8hcyGS49dcm97",
  "key19": "2HRXQhuiTBxvw2uNwu7iPJGvxkKKL7UocsmfWQAA84uguE7ES1LaXAaraczszpsgPWBXMbgqZPjAwieW6WBLcvRx",
  "key20": "2tN82kgLN82nHASPCyf7WVdvwXf2ivTSQwSWUHuBAuQiv5UwXFBsojPKxJmFfiCmt7czYCGiJjj2sEZXw2dz7jEh",
  "key21": "2yjpNJGEpG9ZBuB5X63Qw16Ru1v88Vx4QxADGMy4o777bZTa97PZh6mqxduT95mDxAbks1PUdS216m4AEXexHFsA",
  "key22": "e57AUUWjnS8sUemE7HquJFFW25MT5uZkwoQ2VEQQZzPdLLPK6BRG748ZPcoBedsDpCdPF8TU9if5TCA3ucEnJz8",
  "key23": "4rq3YnBeoupqqEsYiU6mwsDiPFCAeYpmD3fyc49a8UeXcGCPLJ2qPRrSCuR9Jt7FwDXzD44f85HHBd5rpaHZBaio",
  "key24": "2ncgGmL1cw3sbi7Rzh9poN5piPSNF24adPCTDwnaMshw9VLwp2DgCSejafGvM9faSDgD8c5a58JbgQiEED6ndRoE",
  "key25": "4saBqxXSec8nN3zt7izq1LmMpN7487BMc9AqC114j1xWRF24ELhoLwNHmi2TwBh51LCYtz3BieK2W9RpCsTgCf8B",
  "key26": "CdyjzVpSv5gR6F87iemiBZVQxQPgSwaqK5gSU7KnHqEZmTT5JbpUfhsrjZafuiLagpPCzbq5dRSFbzwX8ifpE93",
  "key27": "2iyF6raXzQG8oD3Bg4j7ETWhN3h8Jn5yGksNXguVE1S9VKueFNJiiNQpBWfKoUg7a3a8goetoUpPAVC2xWVjjoZu",
  "key28": "5NAL3bS6u4xrezbWr6XgFrpFTBJCcdM1Jw8REQaYmNrAedAKSHtXpsCnx1uVdErLnoa44rYUFJeoQYVaBtrtQdCg",
  "key29": "3k13UqoJU8swYijhHKxyjGeBipkMnZpCfbTeRhwbpQ5feoXBUMmthjE13S2WXbCs3PWAf322KsMcFSCHC2ndqLgf",
  "key30": "66oD2MzTkrbXoWbEP6WZHS81BuGpv38XX28E1V3UeqvmTywaZJXoXNED5fdhoM6dGLT1FwRLCn3B9YLptoat7tkw",
  "key31": "2DXjxwQZzPFM4aQsBefv9x5YaCdUoym8BiL3YDQofHxQdtECZkrwN6JKk2az7N6cHLhkEjCJR5G1Va2P6CrJmyGv",
  "key32": "53Y7cjYAUu9x1Kzr2sMBnLAJhzUuNbrymBRSzsAfFhYVuNnEnLz464xBhjUvAY61bb8SBcc8m52rZGBeBjoiN56E"
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
