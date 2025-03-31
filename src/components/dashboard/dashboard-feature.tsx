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
    "2rq2uGUxUkYHKQGgmjYQnaDc328MvTR2eTLz8Yeqio8d3Ra4AiaG7jXTydhW3ojZmAoRTmCR282XzL18eZWi1rYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FbnPtmLcX4FPkJQ2DfhSFmzaStznwD4BwWY7RKnBdZ58ABSDMmStCZxoCSvXf6ibRh6Qtx68NpYZsV5ggvHPnsE",
  "key1": "622TcNmX4B7nqkjLQAcTRqbDCZurQEJqatY2CqhEcyFUsY68wGfZX1Nt2e3pxMrz3jGSr5heTbRj2Y1bnRweYArD",
  "key2": "3HfnnCYUMc87xQ2iDuNF1ugWrNZhaXnpJaxjBTsGFGWa4H6y8715AyEKs4x3f3A5YVspfxiMYypF7cpS91fiyjq5",
  "key3": "3kJqpLPBMFy5AgxJRVAvL8gVCtC87C2EkAb2oukUCvVbkBKLCGSxQHjvhDE3Hpz5ASaV9LxBrcikHLR1U8G8zu4d",
  "key4": "kG4yhazN1wtnxpFzJhSHKgP7oc4hvTgiHw5wsNeZLP4HUvD6gy6vNRxV4LAEcitcTXPKu3r3UghkkU3qwgk2aCJ",
  "key5": "41WtfCzMDjiogesDemA9N23bABDYrqBHWQ1ofFhajbYqiLMrTEocUTk5w3daBZgPD7QBRw7NowD9MwY5VpcVGqTH",
  "key6": "tXFhDK6KAEM6QxPPwP9fxnML64Vo6R5W8DqjWSZo1xG8gt4Qz6HS2SQWRW6mZwUSkeD7NHm11PpU6RaVo1uVY7i",
  "key7": "5zyzYfHLdxY8JvGEWBp7Kc4LfzfhcYDAQNk8hzbrTyrgz942KVtZMLPQFvV8QWMgaQbXth13EV14sX1XFN3W4PiT",
  "key8": "4dCipJV1NYpA8KvPTMEw6BW3wkFJAchV2bJwsALxsZ1K2es1dT5fryxj6rUDgnSPSvfScsJGEkqMKDPYrWzrcKGo",
  "key9": "5Ka5VB7Giw9qXmtWiuKVeHrkMeqSyCZjs7ZiWG7SW6RBUf3itXMYVBA3UZmuDjcAvNkhAoedyuhhWsFugs26d5s",
  "key10": "53NLksh3KRQ5aGvWZqxJVSGndaAruXEwEWY29PqnTHiGiwUEfccfrZK7MCKRP62jY4LkTucpEYK8sJpQGq6HV16P",
  "key11": "BHnux4NwwM3o6Nq3F5bbWZkBhnGKRwLTtjM6ZJgWzbYXYvcp1Auoa9vQs7DHhWdwATi5bSrWRZQGTqo3x8CqXpY",
  "key12": "31xQmft94puf8C9GvT6VzVg8e4fFbBiEw8PvJDnaNA551B3Z9eoQTEncfAGMLuYQKohQzu7rEcxTZQP1mhbaWwrB",
  "key13": "2Yi9D1EvVZFzMZe3EZyZHyFW3eNo1QUCovS1i1nsgdUiyUjcUM4hKS5vqbK4uSU1Bb9kZ6GGQb3iQCk298rUPNNx",
  "key14": "2gbWHNdTEofmwLP6K5foH88Jwyrzmh2q7SLftQmJ9AyTbc3McZZxy2SECdEhFLS1x5o7eZx6AttVteGGfLFrZK6X",
  "key15": "5J2Ye9r59WmNYT6pgEXo1k4f8CpBo4NcHRZTYKXh11mKEjTaFKpfnU5mYX1CyBmmN38BNQESgA24qUX7YhSytZox",
  "key16": "3r8CmNEapPGbVnCP8yDNtgGgyQvvHWMch1sWTb5bipSsCm2g9qLYLNJsUrrM9xpTQhv9ygnzHHSbVygZ8tr4QqBB",
  "key17": "3ukbNJLGrYcnDFBWd4H5pLjdg1x5CpixtNnTJ2px6e8iCcksKDXZsdqC8Dmr4737tfj7ct3LntDHZY9aCaKTTYX4",
  "key18": "2gvcJx6yzTATLWe2rGkC9ZoRhsJ8kEex6QvzG2LHavNnaMp1KekuWNjfuFpFkoXxRkjvhuz7kLtEtKPSUfAiAC8B",
  "key19": "KrKTGdAjmu51kV1tCyeuBdHkn41GYVS85yd7Tyj8AEKbj5354d35Gii34h1HwmBbjNMSjw5QLTcyHbD2dQUV3SY",
  "key20": "3MuFFVHXuBq1UN9RwSSnsr1TZzqmH4dMWcgDpJ2aStw6gRcJKMFMZ5Wd8WgWbmH2VwzNCHp3GfGr9ZzozTinSrhZ",
  "key21": "5iL4Wj2TK8vXjhm1CZ785b4aoiUrytSVtUfsnTbgKQcegrwLwWPEBfS9yYgf9arJnoqdG9NQYJvPftb8hUssyCCN",
  "key22": "4xt817cnVwJkMSmQc3nyDLiy2UjJdHLPUryi17qQEMHHQRg7teGKE2gePkoaynoGFCrVTbDoVYjCCr7LdAckeLQe",
  "key23": "5Ry3wsxUsraUFmgenaKbPef1soahPpq9dFVqAVRtYdPMZVRNRVsHe4DDNui8B5LHapYmoKJBxAXe7VtXCrrAvpCZ",
  "key24": "8gEFSnYnaMZfEwagirAWAP3DNLVjSh1qrdgLfVXa8BupqgMwdVryK13eCpNAv9Gfzdb9aSA3T8iaq7wddhGqvbE",
  "key25": "38pMkr3tKx7ok8GdFRyeDkMTwuLWK9bTL8evYS7K8wuYLNtSqxKSW3iBgWquN6XmwwqqTb4nQGct8cEtZfh3fYUu"
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
