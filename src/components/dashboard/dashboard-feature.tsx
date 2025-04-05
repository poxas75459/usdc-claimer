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
    "44bVtW4YjD9D6drBsH46D7XoDwcPHu3MiQph4HjxHpCgLD6PVnJNqTGBHen8LjqC7R1M9utwYFRjcuzuU3U8FPKZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nLNVTwqWxoTd45b1rbYo4vvdb9JaW6ecFawPjMzc6fo2L7UD4kKS3t1vWPp4LM1vqP4CS8qfFfsgwWc2kCTAnqL",
  "key1": "35oqVcmQVpvcW4CRBcgr54cXyynfaNqJccU6XXaiwjvxKeCJm6Udh6xVuEZPcbmLBeRVWa9b3pwcVKt9d3P6dXTU",
  "key2": "2YGk1QEkhUe4pA6SSkChooJHGjNaLDaZiBpM2jDtxNX1akFPhNfFPSjxiL6SG1r3xGF8egJYT91hB8GFDwEHLJpG",
  "key3": "yZrF9QAsJ6ba9GuVAvZNYjBBM3JPwubVA8Ckg15GEA9x9a9RGHjf3ZrMKQgtQr8UhPWStoqfUzxPXcpPgSxjMQ2",
  "key4": "267iJzGH3dBkq6wKQDsXG3ZE7KxFnS452F8iMeG7EMnAtVKtQJaSP6oL8yxBMYh7TNDVMkH6g1FeMtvF5mBboXUP",
  "key5": "5utX6c6iRbKms2Xz71ahjdRYdBMF8XWLDRJR7zzV6DuPbbXNrJSvEEqx2G9ShU5wF2G374C2m26ZR2ekouBYht1F",
  "key6": "58NnEmGxnuVCPBewHg6HhxQXuu6bnEVrfBD9Fo9XfoAUoXAjJ9TgD5PCr1SAyBqTmcg5cXLx32a13MieCtiKAxEB",
  "key7": "31ESShvMkAiRtJZ839Bxr2uRLQoEX7XfJ9grHzTNWogoWQ39yzkPJkHjTxkzro9bCZvTZMzTysbGMi8YxMKAGKH4",
  "key8": "4VdL2VxPpye8NhJCtNnDky7WCCFh8ZMf58qhak1orApF7BGQzPfzfj8Y3XBxGU2hEjjxwBGvbGk8Cs5B5sheMsxP",
  "key9": "PVaoTh8kUUMLh4QqtAptw3bueY6B1DFtzKmPmEKbkHQVZ1t4dWksK631649fgm7e3YgkaiZfsYQ7DCyfiqjuS6p",
  "key10": "36pZ63jw6CUBqSGSoi7M48eHBeDEr4PTy5tRdsmWEajZVGmxBYC21FgwthQyfxfwEU5Vcicdz5B6uVizaesemd51",
  "key11": "7FV1Vuic7KpjRx5Zz6SefpU49sXcxzeR7v6FLp5vKDNqZuCnzPC2P6bqqJE2TPQu214bZaAGPJGbgz42gSQradK",
  "key12": "5aqwZRiTKe14xNSzMBkqw2QSCvVTMhLPvLJFBKuTjZTKScuKCPR5WyRqWNTijPcc2MaLiYVMzv1s37vxAeDkF7UG",
  "key13": "62f7BUpMMD4rinzu6pujLiksLr7nHaPJ9p6C1UZtGK7MhbmteHu23qYNPe1rMF2yvWUqGjT7EG4dGEgaf4XECr5M",
  "key14": "5iMHLzWdQJ9P3U6JTb63zyhfFSoxiJVRD7aJbBnotmp8VCtbfuq7xG5BbChutvWG9YAhpHAV7bwN8JP9ypPheV2m",
  "key15": "39bo6psxHmGHVti5SrVmnzbANHqfLBfqiCLbweJZHK1raLVsQWswtQeZpSLt599qWKBZ1GLCHz1EWKTW6Cu21c2o",
  "key16": "1W1HZwnfBV8csm9t6PkwGDgjhqLh54BbTWBYFBeS9QTutpzWTfF4eqpBjWznrBQuF4pCJ46oFeD5TGdYrRWjEPh",
  "key17": "5ECs9nf3qkS4snmAnF3bk4e2vV1dAzMjwvRcqDCQ67whC1AVez6aSaY5jVxKCMZDM1M2hmtAF2DqcGzVFcwz9BFY",
  "key18": "7cdtVXaBmnQPWu2bwfrBEVk3Hss1TuwpUgzysvNACuGfwP14jQHpsVJphKdjpMaGT4C2PUasEEf7UGoYjkfvkLD",
  "key19": "2B7hnm23BXD5KM6RY2CuJXWBi9CPBeiF1mZhUVMYqStk9VWc6W1ioBqA34KKaiM7ZZjbXDUGUXjSQzSLFE3rG8Qv",
  "key20": "3UjYBpvsd7J5wApHCdti5X7mx4okonhvmBzX4Tty8NWT1raHnX8rGh4QWgRNZz5LcR3Nnn1BCQ73fYSwLxzLmXX4",
  "key21": "3uEQBZNsyQuALtDqVjX5EtAhWaBJGbo1WcsgCVbpfZBVB3DvkaEodkK2a1VQFGt4oqi9SLCYHDmTUbCBSWdCJDqy",
  "key22": "4V2ZqUFmcTTDs2smFDhNEjCL3E7xbBSuvCK3ykpcX8RTQq6QDHphcc9UcwzUekGp2efzsbf3SGSftca1XkJAcoMS",
  "key23": "56JB5DM4F8sE4zbCv6chzwEaJb6FvY3wKnjUa1xEz2GLpcm5nJhRE239ZV677YcXj1rWGVPcrUv4SH4bYECUwkTB",
  "key24": "2w2KCtsRJX51t3vSmQEnisANUiThv9BXoSvLmKfXydLmz9QmqSNpzW4uU6pVmkXwUQPRtecJ3mXbjpiAh5qvcEgv",
  "key25": "nnix5M6jMjJpQ7h2iKRCa3fBP3UmjE5pr8wekpJe2c7wUhttdd1W7mtkTR2aCxNSGUbYkmaSyZXMtTgQu93RQUK"
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
