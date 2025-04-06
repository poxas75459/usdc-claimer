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
    "RVVsUGyigQTvH7ajghWZYy3GrtndSrrKCBgCBMGBnJ3JvVxhT1Zcmjd33499FYf7DPTbgcrXQ1mNPiEjsFEKxWP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dwdZiYiW3pr1cCeH7hB82Jn7gahnWNFHB6jmsqv5mQVz6aHB4JWTuZt4XDGZvDQAXUZgnxeDgbMt1qp2xBTp7bb",
  "key1": "4AuoUJo4ryWtgJPtL7xP8tUBXo5q8qXdqmKDMJkBhYbGWJKYJMzzhfVkJmynczGLdZgXYLebyNMH8nTJ6tVWVST",
  "key2": "WtTtgpvjdNdyG7LJeRo8gKeTCmJqncHf4kZDWD3mTczpZ1gepup7K7yXLE9TMPS8fiQTxujQYTVfFaN9W6x2Lsq",
  "key3": "5STCTZ5mbZ5vJ7mnmHg8CyQfsxWJCQWZACbU2ntsfTxG2ebzgWQhBVbZaNqHCTPo95p8iCJi21KrEaAvc7dodFgJ",
  "key4": "4NmQeVVrDGHnAMysibqfGUrXRcY2qNjPBkCbYyxsTWhMR86PBKo3DFJTXfno6vftnsa5B9JYKLMboJRLtc3Kxdz2",
  "key5": "t4oWTn97qVcKDdFjonnTPGMUYSJoZhNtAe2LBdPzbbReWTZkrV28cPpHUJdaRoAJX5xFWMEFw95MFgMpfXU59xg",
  "key6": "48XJBEqPBtpUKsJWYv4DujeBmfbaZpYi4bsXcvF8FLNSKSHr4VXpr18w4XkfBwsfuqqB6tBU6i2dfGawSEvQZNNA",
  "key7": "3gLrzvZf96CY8Ewi9EwZW1Sm7934TBXCHkLrPX3un7V7hNUjFr4YqwWy142Fekwaz49jnzocue54ZvLQ75gPG2yR",
  "key8": "4ojnqvgicc4kGMh3F5GeU3LN5YWLugDfieepkfDDN832yqFxkQH8VzKoPQD9qGgtQZVbK6AHP9yj2Ub2SSKg6dxP",
  "key9": "2G2fb2zGj4ue25NNhLiFz4JN749E3hi3Se6YfDfB1HctrLxVckBNTeYpvgMxC3ZMhsG5r7UdLU5cqtbN2Q4xoELi",
  "key10": "3UBq7x6M7L5ijeWXq8iWEsfDdP7fPAxMuEinCDauhqwmu2qGdCXXxRbdAWxjSad1sLUNcnwt3hzHBtk1itVFNrCP",
  "key11": "y7ykcWLpdhY78Ku7hvBVRCCyKshhCZwYsuaBvAeaYqd7AmCK4KzZj3fYzuWL1QwfmKnFPu4PXHeAdJQBRVQi7qF",
  "key12": "2fZGWEbEP7fpvPfHMXFzJtMyT3FBu6PSXZ6JqPRfanhhBqjddziVwTTo4yq57cxQ9pmGVbSBQDTnaw22DwpsnZ2k",
  "key13": "PXewrPTY4GmwFAwZiFqVgxi5QwjRDiEkpJvRVuWtEdiWhpUJ2qgXTfhj7GA6FeRo57zcep9kJEJzQmVPNH2KED8",
  "key14": "3D4JDEj9vUzrzm1WTVUhcE5KFTonDd8KT6RQCPveL49MANj4R4VoksHePuL3no2JroKdaXCTQzqoBvwC5eov7FxB",
  "key15": "4FgmhTxmseKPQCKZVUrD9GPekPHx2QAVoAdzhDiCgukeSQGRt8LaddGPsjonb6C96WiPejNm84npcmppaWYdLn3C",
  "key16": "5fHC8iEik8Ac4paBY1PQMaUh5ca3ag3s9QC2qfVchxzd46GHcAeFcveHpFvrSchh4PoKYbiPF3oiLXW8FUDzEjut",
  "key17": "4jwp1YTVf1bnfXHuNLk4Gh8eKte1HDr1i6GcoS6JV78YDukJsabP7PtN7yABnuMjf7q8h4uxaM7kAGM1rzV6iXZk",
  "key18": "2ExsNVqFiQjskUtkn4DV4D9quYW2ViQCiNaHBCgy1n2vQE3zBNZSx8sF2SfvAkGoA5wpJR2xQWcbncHTpQ5Z1TNW",
  "key19": "4aetQgReQk2T8CRQ9nhziyu9Nh6REScwN9sdXGSVgtTvh9zJ4azqRBj5adrMaCBKkjqphGe944CaBqXAsX2HiwCD",
  "key20": "wo1vedXqtja6crQqaF8EsGCwnS17sjNpcoTpS9EXsKnx2b8ZUj5MoUG2DZpQbDAQrEcTFzxXpWrwVoRXNxzwcFs",
  "key21": "3WQo2Ti9Q2WzUFJk4JguFqArMW4ysYV4NviCCFGqLPG39QaSrjakdpQnrT4GvmVVvevrEjivTcTZSdQwXwMW5YW9",
  "key22": "3LwHVS7qhNEXy82Yu47Zvu2hbSigiV8ASA2nKLyvPqedqnsWmpu2DAfg3LKRucZN8sGdSWEEo6xr4M1DEL439GUL",
  "key23": "koouUUdDLF9oeAnYUnKwxyApM6hATgDJ2TpmHSPj5HsQAF3aJuynm2cbkCE8MvURHhhTVAEuDyQGqELzwBXUaRX",
  "key24": "35m9XcMtG227pPHMnREB5E4X8g8jKHT7QJBhqjUq9obbVaUNRbk9FHs6otV93MdrWFjhJUwBx3qRp2yE1K4uKmDg",
  "key25": "3Kjx6sDEfULob3397MUferVFKaMScXgqdXH8a18B8zvbhqNsMXkdnJLJcZQbY1xMKhsudXf4QVt7Sa4Kn7iy11iu",
  "key26": "XwcSQMitWFFfC7Ht16hTHWSmiJmTsbNYSCbAKAc2hchjeUVF2vufV4gr2AQ6s2Wi8pBW15DaqbqGsFr1SqBoNnP",
  "key27": "4CbzFDpTsX7HhPgAGSGhKRYm6qxmf3LsmrQgPCAgcH3pvZfnjWJT2fvUBNsNr7j1Jv2Kq95Ym68tdeMDuhHvqQXf",
  "key28": "2bTc6qG3m87wJcqK4bxes2zkaXWc8BfKjMQGAkygNuvQj3r9vUcmY3Sr9drcMhmFubYiVULPmmzk8XgWWhWepWPD",
  "key29": "3epxhYYeYZJsEqHpHeaPnVhpU7kbYyMeaX9Ub72FgYxfqxdWJzGiDdbMFAF3h5zyYmeR3c7tfqjBf4fhe7mLvTNg",
  "key30": "4uZuec7ReKxDFbv6QYJQPYyuMFTUmGJ5ZYhZVWFsCpZcBcYBgHqh7C4vWJqoX9qAkB8x6TR3ZSARe6q4ig47EYMf",
  "key31": "5NUxGACuW8kazJr6W4odkQ2xHEh9U3LTevrzg9w7ZssCKxFpH4PVutdXj297eywWnG32ppG44Xrkw3GxqpguXwW2",
  "key32": "4RLrJSU4pVL88xcE1xCfQn83LqYkw24F9o2RphS62UZ4Z4HBF9s8moCABWr8aoacRkJwHy12BV8idCBFmMg3oF9j",
  "key33": "5293osB8HcS7xBRvibRNd8tPhagpcWFd1HS81Vg4JXrYRbbTUoALMF9H71GH8EwdnYFWGYnP8zqzmMkR4WUR9wdS",
  "key34": "35AnCzqBXWkTFfdrUCZfox7kHStAL6gMwPnVephd8LnEDoFJ6FRzvGPqy3cWEPDeymdza6mzhY2WTjJT3MaoKuui"
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
