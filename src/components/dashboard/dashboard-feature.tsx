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
    "3qM1TJ77he6tFA5hcgZeUaWrvXfH4ogevFXRxpoa4hk33omtszUKTzNMKd2AexbTGYmexs5vK8Zs4XMj6hmw9Z3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zTa4e2HosR2TVReEKiior9BaVztX6secVj7WvD9ekC9AfmzbUbPmBLozswamUWtVPAYh2im75Kti9n1EUuGNSwL",
  "key1": "5fjHj4GSxT7RpVRbRJdqQRjyCtXnH4LGHdogkf9V8SAT6KBn4JeNfBtceaNbneeychBpcug7UHz4T8nAvFRjMVqY",
  "key2": "2XgYeCAQ5GwrkDnm5DL4TCzemMZ2Ny89oRPex4ELgPa1FZ9Ud7erQgGJDi54XrvZm2Yfzv5cQntBBH8XcM8MbpMf",
  "key3": "8aTN5noXx2UH946GssSMGCE5YbTMVcvHDs5DF35SoHhBCknhp7xhUsZC9JYXtXTijzu7BVEdFhvkRm9BtK5rf6E",
  "key4": "3X8L5DfbZXnc7aQq1kThdyfkEtMc5fWH6oBvPtmxDev7jc8NsL1mr5kkmsnFNSXapWTVTN5j8Dn6B2RBiNMHzXBf",
  "key5": "2iFCKMEWnD4yghjUTBbruZCNXgia4WwuhPJehT3hC9Dfnr1Y9nqc8L9jsqzNUnsTUQSoCs6WCS2mCxFucY7vMMhx",
  "key6": "38FoucgbhD6DVTEQi53XAayKg4hK73dv4VdDmYnbAv9J447CFzzxwoVSipNtgtVL63seyJAE27wvAT262tX3PwHk",
  "key7": "a1YKepH2LLKVJ7mfZDzmrtFJinMiGyCTsyKcs8cFUQ686xseMehoZnoD9ETcEMBPyC7fQwSVq6qrLAfu4zvN42B",
  "key8": "268hPN6Svker1ZwjppRAMqzpHpWKhagenSkiGU48HtCj4n9BtjHv5CdzC8aLzYTDyBa58G8aMQkL4EK9pzJrArDG",
  "key9": "4i9ujjWABaThZFKge8UquQMZGhkEuxU5CFSfofsKCjUN8MQZRghKVEU7YGjQRgwjT9PXbP3gyFCLFJ5n4MberHru",
  "key10": "5DcVE4AyKW243avbpFG7Y8kVSeaiGWeHNBg54Q1FbYBmzobeGemGdrRu9ji8yzWibwgGNDPswAQe38FCzFT3nSTz",
  "key11": "yvg4ckLN6cXGBtK5aYaymkVXUG8AW1FAAQNYA3N4qG9gykV6L6ndtnugjwgEuuEq1zhhfFNiRMpFr7m6mVoZPsr",
  "key12": "5gPSvqFk1V3Kw5vWyXczkbfS59awa3C7Lo8V2NoG97GRFhP6utEs8jquUX9NJMKSHGUnduz7Hsrdg8mwb88xeNGm",
  "key13": "3GwgT8knwU9h9xSmV9t5sDWdxgZ4ekw5Abxq5Q8GroPUc7KcVkcgZd1dzWe2miY83sYpmxg9wkmsqAHJqA3axWKZ",
  "key14": "vuA6RDVA1fB9wAD8wALrbf3m5nmfsNTTFRGmEczSiC6ZJ3UHVkctXrtdzCgMdzq3PGd6QL466TrVkifYN1hMSRt",
  "key15": "3KVqD8AzYDuUaUvqs7WwJry3ETi6M5mbfC2Y19xUpNywaw6JJ4BWrZQeB3CWLkJYNcUTPwGcM3ZjZzNFRciECV92",
  "key16": "57w2g9jnUJYJvyZBoPpDwhsKRmATXvxU2TbDbBqJ5VvdWvWrhG1TzSXdkyDiMwjpAjqx8mzTExLWLVKvYXC4xaJY",
  "key17": "5X6QAYqZhQWBtCKigeny1uUVNM7BAf7u4CibfTqf4aboDdDjHdprTRKeAc5HJoLpSTbBG674U1KmudvCcDD4zSpY",
  "key18": "64ntx4uPgfXWmZY9hg7ZxgKdcsVawv51iWzmErgEa4kSvcMXmTqEia8v2erWt5Zw1so8kmANxUDChJQouy9XeSv8",
  "key19": "2gE7Lr8GAwV8aQizmvQ8pEsd7qB7vUyqCdRjQ7AxApJUzZ6PuPcQbcUPE5XNRErCGJZtVyuUU1kYpkVnZ7WvASkW",
  "key20": "2YciTRSSBRyiPpgXCLki3KArWx7JqJYXYFb2xGrKVr3rr7aPbQxTAKgPjPCpEuZYw9p57w8XHZDzRK9yqzmewW7A",
  "key21": "471fzctqE1Fa6hBRD4nsyLh4NJwfMNuSPUyvN4qimsTRGWLmkHvNosztr2oyHUNS2FJeJ3Zg27vvveZSuC6VqqpE",
  "key22": "3CmdjepzqRMcwvUVu2wkfj2XQYfnDcY7Kv7QQKagfsU2JzgYorGmBfMXePMg2iV65RZ4f3zs1bGH9hXDPH69e8Up",
  "key23": "9pSUavRYa7zUWkMWYGSoWxGsc1XmcjBzfdHEKRVSuCtXi2PQL8zFUuwUJvvqdQkauPT6AjXS48hzgw31o6hAdLA",
  "key24": "5rx8PTz3xvWi14WU17dBYFCFSx9oFCYfcZDjsXZTvHqmNLiYF44R5Xpf5Lt2A8sySrWM42xeNTuDfnUcF4HXZxKA",
  "key25": "5MnoYKc8fEMYHKAaGoeLJLLLqHRMMqrBEw5KMbd6StbX1aMNnZ5S9Fh3swrKHL4ZapeyyQnffgUpEzgMvJQJ5Vgp",
  "key26": "4PsYHfhYxTBZA7sVD9poZk7HgQXWr4Fx1cYt8LLm4j3pbAixrwAc2XY1S7kgJxg6gvfipm8Gxxy9HEr9LRn1RHQw"
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
