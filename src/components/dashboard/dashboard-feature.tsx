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
    "cLMRAobPrraLdvXbpGtVF9KznuoLDW7teo6HqwSHBjWxhHzArXFvo2LahJN7NcXBTZw8N1gsxsf3Lb9PGfAp8bY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VN5LeBJWqkSoT4ua1Fng9JNDU2EvN6PXda3MPwu3GXTze7ZcdpCoC6jTuYy27T7oPnTZkeZMHPrDT9d7UAitgqn",
  "key1": "M9zoxLq81ppDXMgJ88zyz4iGFk4fPCj8yFAWq5ATpvJAhCcofeCVhJKF95eCXyUAiZWMBKdQ4F48ob5fWu5gdr7",
  "key2": "4PqggZysMrk1gn64CjK6rds3iAaA17gthoSaHMaaE6nySb4RbuhNznYq97am27oQ2jaKtXn7ErzEbuqTUithSMz9",
  "key3": "Dn6Ekwy7YmdhxWgpKHsWHboEaBri6HxnhJxHB1g8xVxRKq15KUiDVDZy5S4qdSBSGT4CB62Mpi8TXrQ8YdDx6Xu",
  "key4": "i7qRT7gVHMmHcHgzH5b1Mmqj7jVWECAkEzean8qwFV1ZTQWkbaJet58qUTUNLeDXx2USZk2KHAisDnwR4rWhJ4K",
  "key5": "5e1C4wQV6R9RwW9YN3PdU7anAD73ZRpEpE4K9SfbS67QswhAkQXKsmesmiE5psbKfoevMLsJ6bBjGLBPy14uXpKo",
  "key6": "4PcZegcbdbXQnNPv4uBtDpz6WsWpYRESzhRLzUW6Lc8J9d2L49riSqyxh1FkdxV5fsFEuZ5jr6bYNYiu2xofTnCy",
  "key7": "2imAx5nTPf2WkZRs1JpXKKJfCv7MEdhwdWQLq5oYCPDF6jdCFsuzik6w5csNvucu86bvpMEjvrKbw2JScgp2CbPb",
  "key8": "39eMzhEtq3MmjUWddvJzSRFguqtyFvao5Cq6oZdDGi2ZzXVE7HaMVACQkJsrZtxSsYwJnSP7Do3oFU4JmpKyVkye",
  "key9": "2cEKfJRYsEtVXsAwZvg6g1qqtzGbUThf9raRh9NTuPq6y8ZWjFh8CcnuvzJy5PcK536DH1QXrYprqpmBatxzBs9K",
  "key10": "4ArCkFzy6duP5LNQabQg4Xj36nJiV9Cc2FW3FyCbwZarrfTos3XpFBwvTq1kVeNh9uV1R6LP69AjYkR5z6kVTGdF",
  "key11": "3LEvVnYEkrEzqFXttigYSBgnkTDvgJX6yYweFsHLPqYx7B8DEt4JFcsGyaobghPvDnH8za1LcVE5cgf2ijfUoCC2",
  "key12": "3MXbZL6js6JDFmT4HiLSxNecWELDHDPrQZNzFimNDwjzT8rUB3Sr14zjgSZPzoxKq8bh6nRCCESskBiDgVmNhHGJ",
  "key13": "2Qgkk2HS9qcHHBmf4JscB9FuSfUttc3H9V4wm1fWQScrpuWEXakGUfwLez4Uf8c2yAUm9KxPpu1Afx9Aj4AXLrSX",
  "key14": "5noYeTvvP4kqqcns4t3WMBsCST4YEFVFynxUt7MQUJNtabWBhVRkMEMJTXg7CDWyCWxxpAU2dEcViYvdfbPbM91S",
  "key15": "Rhq68yGXh1AWHfM9R7hMYYxWguAAN4pxpAecYePHdkLvcBSh4HjbBqpxDBPfPZktut4sH4YqRw4EMSuyB7fq1rB",
  "key16": "KhVFHmeR4R53SqwNTjZjAggTmA94hu81PLEyp7d8TaVgMUjdsmc9yx1tYJJRtGcMuKc53g9W4AZG3C4vF9KSpwp",
  "key17": "65CYckAniErouA52baYnzTb2hQwghh4UmvHMUu2GzzRevZVj1MMvB8pMEXif4U1hE6yZXeqkqGN6gEgY7aNUtHi8",
  "key18": "2p5XanskYCmxdFvjnwsbREjRTVR8ug68CGmPPt5BEgpF7PDxKrcJb487tS9Tqw5t3XBmqJYuzi3paXgP5dGWFr6V",
  "key19": "3NNV5swTCkvXCZZRjMMapCbB9RwjXzD2nvxQmvVfUzYzT9Swn7EQEJctvKny7FqpSuW2edgLHJwa48zEc2q772fg",
  "key20": "3mpLPfadfNm8EVBcnp7aDdnw9ggvjmMGQujWs8c344qGRRUjCCeezV7Qbr9VBDXfK87WMMfB5Qyc6ft4JSfMyE2J",
  "key21": "G2GHNoEXwN8yQ15PhrfThotJkBWf2PpZ6n3zCKeWGTrAk7qaUM1ZemWB18xoMKKuLeVF8P5gF2KQzWzzazziKzv",
  "key22": "b71yRVXgCyhMLPG3v7d7dzefG92Q8dtWaQ89jzVBL4aC9WRJktYt3BweJkKXyygfh4BKKvTaXFDwPvBMMZXqqa1",
  "key23": "5eQXW5RXukWAtqhhJh9B7wdG2rJ2KcdbQz2Ga3GdtUtyxZbAxVFJXomLLhN5B2Yn1Q1v8xmnTtyrSwRmi5gwe9WY",
  "key24": "2nSdxvHj12S3CQQmntcvQt2ZSKdN8PHG8VsSE8BUH5N1zxgwZJDKPV1ekSMG8qNXPZLXNwf3M7vCowp51Vw5ZjSK",
  "key25": "4sG5y2f6kbfpRBgyNEtyjaSeUSxnRKEqmE8V1gAoMGHh2dMXbLMHWJgKcgkdhSd9RMVkyBDeVKFijSbENeXS1w8q",
  "key26": "4kT7Ph4oTbBymX9TV98ZTn75oeG5T8pjCujLG5Qba46h1jjusBfryyW1EAoXStzH3Wc7M7B9P3QXMGvX7zMp2vCh",
  "key27": "5UiEU7iUkYA6dqA2NgU4wPNmhzyMCBsxk4MajVkuLNMWBFMdtNWCp6Zhrh1yY6CiNYMfdqHgDSqvc1qYqKQ9F8yu",
  "key28": "2NBRwatk9EAw2SHtfpKB3sS6HL48E3Ve4dBvoQ7Pgar8J9jpKipmwixyThvh9t4xiKNh2MAQHXAmr1bRvHPuSuYF",
  "key29": "23HnDMHSFLWRHiGcmWX3Bas5YpnmMw6QEYL4KRhQ34qhbAWJqqtjuNKWgyjRpHrD59MEdrYUrC5HjdkJRHKQoJN8",
  "key30": "bUGEw5gAHGHyqw7qLrjSdLtVCFSDGA75H3vjp2i7Ggg59dzKRADaJ5ckag84UfkSiAjVtcPzWWT5tJuvgUCbqYP",
  "key31": "2XWHaXgHMCmCML14BbnASmNuf3dSQiYPPLq5RH2Z5MLKsErTy1nAypxUu943RDe3QXP8y7rTVh17AZuJTpff25bB",
  "key32": "2FxLVvQJoaki2PV6HCkXAy9esH7PSZNgRyTfnWSmZvamRCxd6FjNJiNGnoNA9VR5ukfPp4dLSo9gpmK5JAfu7gs",
  "key33": "D6KfskH7VwDebX6A7P1WxiEfK2jamuA4MDw1NCmfigumDY78BqPcUYQAnuhWi9XQkC61vWb9pj2Arr9sCa5Eufo",
  "key34": "3Y6QyXZKcWA9MMrFbmMFwbgF3YQTcvvpMCG6w9ic5Lj4iPRjg1cfAWM5ZgeCTEExRxQ5gE22ohHBuGQXoWbpymNY",
  "key35": "3zuQ5KLF7ykyybj9MbHr8y6zEG3YAHLMktfiJYbtoTVf1atu4rgPvqmbwbCxcz3i1EZj7kf1TE78xULomxEcVYfb",
  "key36": "4PZSPVNyd4tTAyLwrCRPSYQN7AoYn9SHxn88XFeZadv5M5Yxr5TapLGDEDvURDJM7aRKd1pVsjxQCJEXJJ7CsZqR"
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
