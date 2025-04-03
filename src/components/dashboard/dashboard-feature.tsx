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
    "27DnPe28oUbHr1espgoboUmLRb2ythvWE6KESivhNnpk8wGnHNKxMboCJbaT2LNbDqDai7ift1sVHxjWWyXj1DWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "235B3HZBDU7kFFNpQiRVQ1VV5n1BjKhdgpBr3FzzTzDMxvyrFbuu2CUdPmdj5R1jVCGNxPb3tRvV7sPaEPv4Qd92",
  "key1": "aqfQunzgkbYnRj9nLTG1AKP8XHz1QmdH6kPkdEgSK99jo5pF3eUK51Ki16wBKJUeLe4CP9MFHKDMyzKgSwB1M61",
  "key2": "4zbMvdDxfT9AuJK5CzrCEwRd4UMKo8PgZaLjXaEyLHFPLb7TBbn9bJFiKtg2mFddce7z5zQi2p5Ko5nqmhJxzPp7",
  "key3": "ZoL9gKtWhz5vnQYKQpgAdY7MQGNEkgZnGENQSLAz57P9UGzsJurctUFXQTiu8TM2FUby21oijsa9GxX9Bk6rMDY",
  "key4": "ofEBfbWRwnQipwn6mBwFEKvW8n5jbCGnzwFeJC8QWoqXWN7vx7hLCj26YjgCiFDUQJpEofNhSAbR7UQ8MJ9A5uo",
  "key5": "4ar6VKY1pHBcPDGoawaHpg9kUefPd2nFR3PiRZhq71g14E1Aqp2qGuZYRHtg5q66UwcVxw4Xt3yGD7kStEPi7c8S",
  "key6": "4Qft8an4DiL27vRguLVz2pJuvFGtLnKUFTovQbWgo7Q5YPjdxs9UBNb3Yadgoxbo6BmBGFeq1g75iHzEBbUJw3dS",
  "key7": "o7Z5owWa5Pnw8McJLBNRaxwFCkEpyE4W1pjv1fgyqDghmLUW8KeZrD87Tkc98ScaFuRnVb12n8QZETTLCv8uAYV",
  "key8": "42mGqhXU41xzAywMmPHo47ToN7NHwuj15Hd9hHFvsszUuP9btnW9YAVaUbhbizmF8hetjcCsLGuS44HugMja74tR",
  "key9": "3up9UE2swsNL897RrhA5GAzxabCAVwo1i5M5uiPHe3xSwxxUtcMeuJNQiQ3SeGM7BjRWFhg3pmtRZ9HKmF4VJ5ih",
  "key10": "2TGXR1KmzFQdwNNNpoHuCBGGfcn52xRbBNzxSeVpramfDpZyX8Th6S5bvqA6iSBLZntVKf2QcUGZA5QvCYww5uti",
  "key11": "U5gx8JacyALA2ZUp1U3acfNJeT7y5CNW4isdyp6WMWioTKCLBZ7qebj5ZMjZZoU6nEWCbeDV5UU14iGRe1oteBv",
  "key12": "28pFZChSR8QKWYNB8w9tyabG3bMm97yjSG5m9zr5KpRbn4FevLsgWRh989wVKuRepzRbTUmxAf2KLZ4ouKzxVu7Q",
  "key13": "3pPG2trR7Vhv5CLvAHXaHjf7Wz4ZvNyGNE9f7nBjzvPdRATZSd6YMfb3YSauemS4uvqBEWE23dGBcT9UnWqUXSyo",
  "key14": "5vQ4UwZrfNN3TLJaHyucRop27t8oL4UGfUu8a6rzzD9H3yf9danNXaju5BaRGLVdqXgkdqX39EYjZprnrjtqUvw9",
  "key15": "2itqottqDyrBkHM2hc4LuWKsWTHunZUovR4b5YV86sLCj5bedhLgYBEST5EWmjWr4LgenJzJCzBfhJ45sp5Yqomp",
  "key16": "5hQU1VEzStgGTJMHwpRJX7jjekQ4pfPT41Snm2E2Jn2Jzx8UoRqQin1cW9xNWxPAnJw9J5HUE326QU1Vr8EiLoaL",
  "key17": "AYWhruSAePHeFsRngSM6cYiexZRCnsSbDjjwGyMnWT7XW3rQNUJt73gppBWLYvdW4M6e5PXRnJ7VwYsWLMcFmq9",
  "key18": "DKNZSTnmx8xujAMVwRg1QduSr5nYyfEtmPwkCHTStUgRwZDkoLbVD52nEkTE91Pu3zrH4x7hKR9apX6FjhWbDPx",
  "key19": "5DHEx6fBSuBm5J7jCArT8oSWktw1s5bZB7DqN5yW7PJrVNkddksLLsTwWD1f7yKHWtR7e5AwCgz54RF3MRnivwcK",
  "key20": "2nD2GYp5jvLQyVPxh2SvWJFcDDBoEHVi78wG3z3gLBmm55jpyNvmRwJFgvfDyfr5AP32NtoDX36MS3f7a8ykKzXe",
  "key21": "3PndCsLzaUB4Qsa9i4rCERrBPQkxrkxoj9WMkrcG7v8LAAq1FSEo1BJecDs3fLWwHZ6YQPWRq5Mmm6hgLWNeCGc9",
  "key22": "59cVjbs4AdTEdroNukoLv43psos8ydXV6YhLnCopMqfQAYrrYfRdJevZU6whWecdtjTnhEUNvy2hVk5pxW1dNg5t",
  "key23": "2PF8hKxAYVtCEGJsFBeJixXn9s9bRjgVf6VE4UBakA1EZB3EiYbkzQZFiA7GoN2VEhgcMaiZVqZpx4xR6JJK3Bik",
  "key24": "662P3umJyFMMqg91j4iQCV4X9AYB5zZXZZQCwigdAUk43hhtW2ZH7FdchkXAhgxibmPpc9VimSP8wcwen2odGPhY",
  "key25": "Ji5L56nps6mQUc1vWmMTzqkNNAqWn6EBsKZX2eE5okrWdFMxNfbm2kbvfVQDqWTTVSZJNaeZPyzFus3wQTKe9E1",
  "key26": "3rfC6zzpk6KDJ7nERgZehDCeMCr8YUX8tsLwZ7LsX9idkPSbr9yTdae7oaxRpwnDCRcBEg3AKdsnZ1h5gRH2Uthr",
  "key27": "2bGr71gVJ3KMpUMNZPY1hgDLWbRF1H7MbdR1VgJzkAyF3pajV8pLXDPTYC9TsMeXtKrDHaAhXWWAwvGsNiudE4Qb",
  "key28": "5eMK1ZB3r6LF5pSGYdTtEwZAnt9Qnw6ivw5oGVjnBA2SLercFxsavAxWgbxVjfPj7vmmjcgXmYEWM4RsUgUJBJi2",
  "key29": "uheHrmiHLA9TPAdZyybHTXqnUQPPtDkW2N8fboMHy7rhLk39Tpdqs7My3HrtFNjrUiq4bCvA2Ygt1ykFrQRcJvs",
  "key30": "2fjvkXoLknAxXfpkCuatQuLkd4889nzq5oSWTSRhACH7DxCJH2oKypBds3cWE7zDEuSWYFSWomeEnjWzparerVjh"
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
