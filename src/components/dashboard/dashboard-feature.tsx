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
    "96KYQ2nnKz1PXGrKvJkZZcpNXnRXRTDP5pZHvkfMerdjuyeCo9wvPhHTpKFGwSeWdA1HnKaivKMsNa684ZcRxkf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aL6km5yRSZGVP2oCKrpDSsYnPrzo3JumKfG2QY3NZtj6Py4TyCY3qbseVAXU8yqyzL7FZBTi1E2omyR66PqkZDz",
  "key1": "36brcXSGWAXZyLLwYDapvZhjMnYNtz451m8cZ3mWBFZEp6pMWrLkLFw1Th7EFWhp17ULep7iRJ6QbqSzSsSJMY2p",
  "key2": "59rMqKUPKQh9j2um3tTD5U9iUjhXa8L8G2iXxKPoYVBFF5oJzyBDCWScdjXTyCzWYLDH4eXS4sV2AdXBZsZowJ8P",
  "key3": "25UfkfpXaEe4UJmSmLhGTvXab7UBv461QmWKMLeBH5ipZ9GsehZh5fXbe8CNJEvUcQJptH6KByuTtMjw4DpKpdXB",
  "key4": "3useg7Smo4C624geCfwnr7igRoqN2Qo561aiBwKfgzG9yKNHEp7nCpEec4LskMa5xLPBJvd4M4VnegDFshoxEXE5",
  "key5": "237EMAFiYGAaB5LmDzoKdmxrPKgZxRBaKF57yZudnWtD17CKSydsxZYr5g5xFt7cCBoX9EvFjohnWDEXJzvrVH65",
  "key6": "3GZqhCWCYhtQAv6Zj8TXJiBt28f9AYw9w51YiVFuFnBncvR2pnKP94yDydcM3a5cHJY2CxBHPGVf9wxx8Tt669ob",
  "key7": "5Bb2zCdGgFvVWwmnHXfmAQKxyuJXhYjpVcqg4qKGtqzgD3hGW2p1kxWWDQdgF3ycdCD6AKekXiZqXgYXvifJjeJA",
  "key8": "5c1GKMXX4kyx3q6q1Yw46LvgEgzaEMr6hMMs1SXpEyKQMgHnRFitbBEWReAt9a6hxEdF5N9RPhBR4tNt2JDZbyy5",
  "key9": "2qJAYk7ct1VCLeA5jVpT2W4Bq4vtGVABntAgiMtQzzFpQpiQvnJsDHGVhxwwyyxcK9aCC3MnrL1bDgLLUWz2LQA",
  "key10": "5cosXr87SsiTvbjQCdW8WfhEVb3kX3WC9f9EzGdZ4CVoNBd16sfimZquPt2hBrvGDt4SwG2CtcbkGk8S3XT4qfgF",
  "key11": "2wpHFTdY8tej1j2bkGdf2WEnFaBxHQcTfgzDZaMfECRJkfghqzN2AJnXt3juyMqP4EvNMnZ7gg4y1JexKhjTwHYU",
  "key12": "58REnun9tujNHQNjZNbfYYaxZ1o2kGJ1WPg7R5rPZeAuGgmX29wnBj9TFSBBhgDzU6iN4SHbAe8tXpsqHnE6dxrW",
  "key13": "3zog7ggKKveCGqji1hZdiCwD5cgnfjLEd9wcmdCCneXy7mNUhRPNFDkaY5k9r2sb1K5xfgMiYQFfYFeanJ5Fg2KK",
  "key14": "5A6SPNMRVA7HPSfXYTZaoEG8UETDWeuNNW6MuFTUah8kEnf6FabwQXdcxKeZWcSLKaUystxwkQBtP5SSavTCoxWV",
  "key15": "3zY18rs2Xnwydu9RkxwRHCwaHEga4pqnLkpBhEuUB8QnL82CeH6qbxfz3ZLLvcicoerSw65u6KGWmT8sEQrTLtis",
  "key16": "4wgFTMcwUHfWSEYB8qUm1xWf5re7gyH2ak2i6f5MpzwGeZCZdoF8C5PSkCyUtsC4ufzoWkyeCVi1PAaQFQ4EJftL",
  "key17": "o2LNjEd8c6xmLCczpwpz41Czhj65YtA7Cn5oupUhxBZ1eRYJyUsYRsUYyGHTHUSiqzNYk5hm7soa5P7NwPrrmdU",
  "key18": "5SPdRAZKekt7Yy4XCufrkdSn9T6RKk8boghBt1JMgFHv4vCEwRBUXaskHNbNcYoM8HgmcjgHMYGRayrtnS9K3u2A",
  "key19": "4CTimsSbKBNdNTzM7dJs6mYLJx9kKP1bim3op7vrC3GZcH6t2ZoRNFP1fMtChMXMtMdWaK9Xzk1qMM2r9Kip71AE",
  "key20": "5raX7fpNBKGN9rfpZSjeDD5YCZT46bsCrPagNTxNFanFSMAXBqVzW1oHbcLTyxcpWVvxfjKkbwQon6bviP3au75i",
  "key21": "2z81e1x65Tt369ZQVUhKvNzu77zxpe5WhNjMG3rZSMhGuEYf9PXJE2oLLRqzpsujkNBhbPXkCqC1WgUW9wYtvtpk",
  "key22": "6498sXoxmsJXspTKjghuf6V7BtEEZ5WYfCQjA3iUKZuuwPa7CGnuzmrPvREETqh1mCGiuvCZNhsRyNafkxGbJYWG",
  "key23": "4dgfTYVHQWxmUU7a7JTe2EA9n4tGuwR9dBoBUmsVwoBt8VarT4LWqv5zvuRsj8JDUpD9pPDJAc2N2i2FcSLm4HaP",
  "key24": "D12dBz2BHEFMi1mX4GLT32b7qeZVTam7N2MUkPYYBHeGKx2YudRzjbCPux2mE7t34bhoLc5EJ4f6Ufi4Dh4mtoU",
  "key25": "5TWEs3Eb75a9uwQuBw3VCYWLxsCv2uzmNL8rN1ccXsTkV2wCQSy1XiUVo7DjB7AWUzjYiLyiorjDAR2eTHo4Cv9c",
  "key26": "3csdqwgYPm8Uv9pfNPweNqbdRVUHLjHEgscgUDnXCx9uj51WoQR2ysAARzR1j5HfcubDEZFzLmvunhHL12tgWcu8"
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
