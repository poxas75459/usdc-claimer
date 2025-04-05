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
    "5Qfpqqfw2HUMCLE6Mo64nLC66oVuBRUgnsgtnzJbiGhM9qwSKF88hXmJyUD2QzHhPG9Sgfy4xinB251mSneqnQc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UF6yFtrfxvTL7n5a4yds7HKzeqB39mArBpF8rSkVpws8YRT6tWWxQ4EFZ16h2uLtpDjWH3kVmg1MTDWoZb4fcTL",
  "key1": "CRxDg5zULNm9SmAn5A5Kb83hgFYYGNLS1bMQsj1V5n5DNixaidUFCJvMEkXpjhe4DQoUGgtKs3sVe1qAqWBvYnL",
  "key2": "65GEmv97LSXVBKqx3ihxpnnHHbmJbC685mpY95aFmtBjaFuko6rnS8ct5gGWf8VZ9fET3HnCL3fTCcfreEty4CXR",
  "key3": "v19SGPuBR2TN71nddPBVPVqB2QW1UdCrs1f5BaHqZfPTUrcfeyxPfsJnV8vd6McEiQhJV7rWcQKBMk5yvwr5XFR",
  "key4": "3aDdfzdVnqx926dezWmg8ioA3NPzn8eoUYRqTkKt4dhFL1iVizMtMULTtA772iscNcjdk2ZspPsUEv9zR88B79qh",
  "key5": "3jeimsxGvSH7kFFk3E8w26yf55B2Q1dErMb9siABArVncKRXAY6pyDzN8CjFS76DzSfPGRhuHtFZCVHyZscm3AZ4",
  "key6": "4S8pPYGqoeCvcyx9ZqH6mMfenhiz1S4tEbfQqUyJETjsAqMcBKgpos1fz8VcKbTnY8SWVGbwxxJ4oCfadtsj9gxu",
  "key7": "3P48ZucFCtVaUgFFzVtmpL9jViT7E9NdbwREMZQF361k4kYQB97pu3cRxnsLzNwRPgKiupQUtFCbReyF9pTF1KRH",
  "key8": "4HWTcyS1ySCzMZrS5pnk5Cuo3G8nLvBx24pZkRPcrXs9KzQog7ogUwp31gUkaN23NHHe3B7r3uDQP47GTQMr9UFS",
  "key9": "2XM5pYQq7QPThq3r3a4DL4kAQi6wRMYfWFjy1EA3ghS9xhk8JbpYHXKYTe7GTfxPWhEhKD3MMT3whNfXY6pHA3WQ",
  "key10": "3dPzqDSFCJJFPyxJQWVsD8v9HZbz9J68CjCVYc9KovDCVUiCnX8pfme8TeDwrobNuvNfqXV2PgJKXfD5Cd8EaiBX",
  "key11": "67WBkiGM6uXDsjEZUztqzudR5AMsAeqvK6gobHSi7a8dExnY1Rve2aN9ZbkeahQpmUtaE836UwEh277W9xtjNRja",
  "key12": "67UssdwQpUoqzqgjDv5V8JsCCzpj1vmMeu4sf5Wgvi2oTyoh6bdKY1R6fb47xxSRV75E8yfuQERXRZJE6FJiCbbp",
  "key13": "4mFfrNbgEdTkVj9JrG2WpxbSQpQTFBahkFftvR71zsBq1xFt3MNpH6CAoUqPVeXCDQQsyQMzdwQZ8rUvgZzcW6pL",
  "key14": "2TkyQ9Bgp99zY5oo3ZcaU8SCaJXnvPBEoNMCWdSFip3MHY4S2wJN3AhbcXDmmGPxLAN7XGeAbCUwb3ZyMrna4mSM",
  "key15": "NteX3FCUHPsGZnAKWSEUiTDX3WVsPc2fsMVLq8m28RoyG7nUCLzkjBY2wXXDft4mRPbQbhPeqAzp67EokFtRypH",
  "key16": "213dEUipFAJcNxxSwhLp39CiNeCnmzCkfGm3jCm85obfftfRSoWeJxTZU9QMwEe2FLmzFRkGKogPV1owM3kK4JCQ",
  "key17": "28RUFwKpvt1F2w9fAEkkuN3xQe4iSSvnrrapdcjPW77PoAni7HzRG6vfhkVmvD6WVSSrTKUJj4Dyb6M2BxiWsXwj",
  "key18": "2cRBR4NzPQr2P7VMpjS1JTBcqauUT4FDpL4P3zzoWg14rXbBRjHUTuCrvYpXr2R9BWUHrC8T2cA3xBx2q1dDW1u8",
  "key19": "4PGkk317Huh2BWUf7gbmYNs35B7xVpUosE9kwsPDMP4yy4tf5RbWXxe1Ux72k8FMgxf4swy5APi3RDvnpwrpznBH",
  "key20": "3bJwhph6KebYqeuDrBYQJWkXpyvUz7D3Hrf3w5zgPDsxzmih2bxkaVQSgwDFZFzipB2UiJR8C5ys8c1KyVqUFTan",
  "key21": "5LXrnpDR6JL458Yjhc4QEZCMcZLCN1PbzR6iFMJgMdUPy8UMMRXoeUGhiKULReGEWSt7ersVMaWgudnUSr3i7dqj",
  "key22": "5d9rDjY25A45aTpun48SuchDeZjfneyiFCd6JonKaLwsCCUsGY3enaU8RNksCbUocchfXETpbGfzvTYfxxDYLdBo",
  "key23": "5kRT7aCq5KSuifAZnPWkqKyNGPX6FyCoahQFBeLBESCEsnhr1A3qEHtQfqWp7qjQHZpzvxtxvbNeKug2ifFZqean",
  "key24": "3F8pDJmz3Naa6GpFTSXKQpQwiM35E1c9SZ5YHKZDKrLsDyMx2eB8NE1coJ85BqnNxuTBEpk6os4muy5r7cTZmLfu",
  "key25": "4TLqCu7Z9MQkThfK3nLXLh3tu1meEVcn5poHvCXrUNgbvozU1oa27SzfZYMukKF2eaLG7ZxgB4riGypE4t2MQyf8",
  "key26": "3dLnzC8xnYHxWMu3h7WvRev2v6AKNZqxGKwc6dQ9kEEJ3qrNF5dELbMCRmNbdEw3Y3yuDa92m6zLztZ9rX3kAt3d",
  "key27": "4vRDqbQcihH72wWy2XnxhnjnsAxJLvEyjbPr7txA9wxMecWuG6qaTyZdAXC42RScGk41mcpBibkiErqHFFRbz6Vy",
  "key28": "q4eKoZZUR76mKEH4pxXqJf3zTyQnSUSnHFtHRMvUiHiLcJ2G41bmCcT5xwkwk2R9GKKFUAXg2hhdTLBcznBhnsZ",
  "key29": "5WqJvupwveW3rAbhurFx1Wqzhat32eXN9tnYG1BoQsVWjkgcJBneWbc4agnfVGuJ13SZGkP9f5ai3SvCuKUzti5a",
  "key30": "5eaqqWGy5Bs4xMVVnb7EkRvA3wFedF88NRtSZmXX21qtbwx9EQ4W4DAAUcM3FpRed8J5snTJhNbMMGcL5j1c5d1T",
  "key31": "4JujRYipP6u7DK3aHnwKbri3iuzyYNdPymesYS9jNkeQTgxYd9yPBLsFwj6r7QnGgD5sVDoskfhorhXeYRNQD6Eh",
  "key32": "YaLzbmfB6pqTyUWNpPtNFGDBY5XdiuE1JKUsZKCYcMdgYZzQVVMcGgbjhXHzEp4R4PLSrfp3ewbsG68jWu7DUUy",
  "key33": "3EZWbi64gifMtnZfWaX7Rykpqq9dWaKWhhMqpCQDuD3pYtvBkRV9S3QKHqe8UdWv683saeGXnSjfBXyuaXNTCAaq",
  "key34": "5YtjWR77NjUsxQckz2qxWZMp7B8UbY6LH4aDUJYFfa2pB4ykAi6KaGw2XDyjTbc2f22W25B4iXYMyVU5jsDbAaAU",
  "key35": "378GkeJLbpdp3BGnwzF8y4xHEmtxyGyuxNmoFnbvCKgPGeqp87vyAGPaEy1niKRmPdZhYcumoKwUxzD8XSWfnAND",
  "key36": "4Emksvse7qBeLi1VvL1t6hLepSuoaUdNALrhXbZ2nf4zE78FG7DKQhxEiHFvndFZdWhYzBKTCZAXjPrMNJeFoWE",
  "key37": "4KT3jYWdBYvVcfHMXadE2RgLqR4BBncfp7ajSbGeKCjhFfpwoq9saGEqkcU5LdF331YrwSqx6G4VbiDVUfsVxy2m",
  "key38": "2ZyJNhnTbjstoJjDjWkZwGHhVUkkEJN7ont6fah7dFbiQtndbMj4EikuswDp9SbVRpnhYWfa4ZAQ2W9yx9Xey6EH",
  "key39": "26mebE3K7Q3pcmDrzghTFeH5f97m155E5n5ZKqAmomcqubvLP4f8MF2iG7oE4HRN7BSeRFeZRcbhi8F9fNJPnkuL",
  "key40": "3zxpK5T9buTZgqDSeyPLzQ7pKPDeRKqtkGk7K2kZNCeEaCQJhKx5bc9VaCTCG62j789o7aNyrkujb1QT4nnSPmoC",
  "key41": "CtAYS4g9F1h9ti5B37j41Nfxsjiv7SuzLEQD9ShW92uuWGdMVaw37foStqU5coze9qtfjEtYuLi59rQtCZQEkbN",
  "key42": "3cuv1PdDTc7UQtASRGto98M92bwuGU45fpKPF8ZQPK4fiJczMdyvXN2NDwC9pBBm6HyeRqxvkYEqYVivZmw9WYGh",
  "key43": "5HADGazVDaykGVQYUEpvCzzmHAC8TDU7QKXauCBTvXzpE76576HQNS1jb9T47KByEw2E3GCP8ekFfpXdeBoXZYFR"
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
