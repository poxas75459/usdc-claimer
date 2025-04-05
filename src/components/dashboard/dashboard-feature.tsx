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
    "3Nvz9kgukaH9NPKtgXBKnhwugqRBTQyawSoSSaPznF3jm8Tq6kD7aXU8Zp9wCe26GGaRdoaD8EKU3JoqfaWLXkoL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2osq25Njndgr7cY48Srvnyzx5XRhjeTuzahiW5JJHEHvy2tQGU4AobxLbLbajYqhpizQtcq1EQsywxPP2PbVQYQX",
  "key1": "52vZybwcf6j9Xa827hJYqJch8pDeD1d5jQ18s8XcL9LUmz2kLMDL13qvyMnGN9gwh8xqzobu6dKE3PQwGrbEmc9a",
  "key2": "rj3LHtZ43YiidjPThX3FtNbGqK6Aih4EcLRanFb2mD2r5RFPsMesFZkDTcds8MfxwK1b4Bffjq3LA8yEN5QboH3",
  "key3": "3zyjFVdXkjn7afjYnXQmAwTECj6vrVek3Q6By5tYychZKfeHeCaxn6ArHS11mbyr2amSgaW2HkvuKBWpN1gDPXZj",
  "key4": "5WrP8mr9sBHQ5nobCWrFFcYZ2EdzhsJnfDGUj2hAzWPSctTDCbNDCbdz7uMbcKc8uFT5fg2GdyveJHmnTREppJMH",
  "key5": "4NaBtRbLGv9DJQwFDAUWCBU6XhpLWHrZ2Bdz6V9zJLxWRDcW3ekktEdG7JyDc8w8sgDUacor19ZSsgMvzTBwmtL9",
  "key6": "2TYRrm1raz6N2hwj3Mi7N3n8BjQEEzVMvpMipCLeKe88YdghaZAonu6KPnZV8N7TXCtRVaJq7VJA35L5JvWpNagp",
  "key7": "2EgetTfxag3yNhadrCVLkKRtUq6xPYqdNAtaS3WQMH7LgAcgqFJPYf1sPKXNsMaHLyAKhX5uePUnYMuNvdG1waEY",
  "key8": "39o7XxtLGEZYLeegxDQbqW2ZpLqgPfRFsUVmTf34EV8W3ccZfi6Hb24Z1TjgeF57XMe85qZXpwbtv6y8iAN2WiDc",
  "key9": "3XjKZfVs8GLvSjee6RhjKR3hKqDcwZq2fsrK4rfy75LsUj6amJW2ahyJ63jGo6abHDm8PgZ1zZ1yYw6LRzVNTypk",
  "key10": "3iyNKhMcqWaWg9d2xkAFkYv73NAprkD1gDSQvjtoMhveBNziQUorkdtSS5mjFwJ6n9W6Xpys75uaLokkzHAsFoXZ",
  "key11": "5VkNqHcreAQffDPQ3bdDHnRgFmuwPL6RuqwySa9r6av6kpDP3kkzycDWaurtXoNZbocdLotFQHycwGU4589nmwfe",
  "key12": "2iUy7TiqQkfqf3SjWeL82hF7XZVLs2pJoW26MyYSQ2sexoLHvTdQ8mdRcujMuuNXdDTFNx3LitKKXL6o6itohQm8",
  "key13": "3jN6nn5hCyoyoUU8Eu25YT5n9YP3xA28q5GKjGt9V7ZBkuVFkR5LUwa313NwM3sV4vbK94Y1DTDmY5D5VvhNfUq5",
  "key14": "K6p3QtuC5WLRsKFDyAKhmNWUGjSGPQ3nMjuKArTXqv3ZAzC6LiCdBV4AKj46vEZ6LTcmeJPt3eeYDYk2oLqfDhf",
  "key15": "5mpgi9FrEqkXSYos9wJdYZu9VCxDg4FDstHz75PuxvqJstr5MAuezPyCrk2rTsUxjN4wDQPNZnXgRBECRmGuDnaQ",
  "key16": "395rv4G2xbLMB8ccK22o8BUDfL7rNZsZz24wS9pZFyDVJoBYQyY7quGGe6nExaxYuUfBoJ1PNJLCvpXWguK9nMq5",
  "key17": "rTZZvvrgZc3yj6enxSyPi9FyujpuixZoMPR5nrHv7ZbtVeJHjc2fJH2p3mrGZ1vUzDhz4P68tZsyEJQchoZGSPL",
  "key18": "43ck3utKotdytpjbJRRtiuTkkVZk5sT6cboNrARyBbj5vPAZqr99yiBkwJPYt9gi3CzFUkd4EupxKzQwWrEjaMUo",
  "key19": "22pSXS2WuJVbVm7Y73GbsfGeaCahn4DJKNbLiuCKKcSpkizJvYkdUjRkxfA741aA9vAzbjg4fM8iGAd9Xawa1tuv",
  "key20": "2MWHwkQ8SgKxdFFgGRAJcUZ9sdKM1CmEiapLRaiTmm46xa6kdYWyGpNN91nFPFSS1xN1pRAebhJydgfuTaDSZo9Y",
  "key21": "fBpkfGCjFVQYucB9uWxxze7Bq37A8iAdjAUCJZUXwkL8sXBov1t5qkNTAVTVP2SiwZ7AJ1yGCfLEcuYNNGWZb9T",
  "key22": "2sGx6VjWcTWVA9ZyGoVB26Vd3aof21yrDvTUsaR13dcu26KTic6WjUwCubgXEVPjFepDb8bvQ8uCoR2uogANfeqM",
  "key23": "wDPaMAUGJap1Ahb5hGvLGZbsxvMTszoqHTiLZVdaNDvD9fo9fhgfUG2EoxSNvuxDwwnfzyZAokWHB8YQbTK9omM",
  "key24": "57YX1eQijRfPgSMwMBwaxN1zXX7D6wva84gRcrfRzpfFYxTQ7jtXpmPd7PYdm3HpEvNF47C7Q7c1nLke9oQKkFxk"
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
