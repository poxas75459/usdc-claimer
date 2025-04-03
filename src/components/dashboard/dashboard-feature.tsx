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
    "3ZiKb4yeFBv97sTNLsPDPomhuQckBAADLp7wmGgiU4e42w9iFAgou2kXRo2E21YkQpmNCVy5Bisi3CMXz9P1RPJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sCvs4ZubxbCvsDe6gvhUUprUPcxwzTtbmr7wGHyCRKcnVafeu1vUAb7TXGLWuLEoZer3qtfDwD8sewQwtggVNKo",
  "key1": "2cpKJ3r8enFvFSXJiDFKpuiRscKr38bAH37AJ3C91aC5ZoD4GKrHMeo9ZRzVJY3THV4wnDurwjWrrMDA6FSHDjvA",
  "key2": "5KuGG6QWjbMfPs7sqCJBpNsBEWc5fEG5xmk7LQtg91ZiutvTa3ApQTynFXbDoqjycRf53pdtDo9jzWLVtt1RoFVw",
  "key3": "4KDnzmERogUskhXcuFMyijiy3VvhVKk57xuQ3oTXFL8NZwTNKyc18j3NPanSoDyYEZixgybtCWYRcnCVXJEV2QtS",
  "key4": "aG3zV4GCKkGkJDokTs5Gjmyvp9pg97SrV4Xkgu3WS1sVeUZe8Wn6mcgZYrRhQpuRwieLPtXQQgMALe7SBzLRVTu",
  "key5": "62BTvmbTsRGjcdSigJUknFXRWJvvpKpr164Fdvkq6SA1c6dkT7Eav278mNu8coG82bxCoEoUhvxwemjKSATn2SjP",
  "key6": "4hsf2nEiVkpcU3DbgYvNuQCG2MhyCLLLVVjGWY2aNZhfmo17BjRbp7BKy5Uxiy8UdzNqXHh1CgXd5KZawT4R5Uei",
  "key7": "43EbTJSce3S8E3HsqFsz7nGnCG36RVwTBy6HPrBJxPJF6DEfBiL9yBuF6fU1CGYJiu8PGnhMo8Ge6zRPpw2z73QA",
  "key8": "44C1FpE3Y5Ya1gwCBJXAAveS2CDAQk1dCdKofMpCa2tdJR5g7sova4TWBf2D5x5iHpBs8wCCnVTBVKM7BSvt3pvN",
  "key9": "57aB6o5zRi61Ds6BDDkPZbc6kurxGCJ8YY8TFu359yqs5KPfDFhUYZiKzgY3P6sHGoxNbUtf1duFFMnDayqzk8sL",
  "key10": "kFL8sWHtpBnBwDf4XucbqvTDeTvubwBJmzENkT2BfXJNAnyyhWFd8RQwrWjGu6u3rPMxWJgDQk1J1sS5u4Qmfdu",
  "key11": "3nTUwCDvP5zmHUG6UnV6etdeCbLRN5JLaukcjyvLPDMkkc5twEV5T79T69pqd5JUthQXSMnDm16nMFRuC67SVZxy",
  "key12": "2KesedekB3dSQ7V5zeivzJ4tDA61ZRSs6NATW8EjUU8aEqBAK4Ei1kPL7xqD7E54RHkESW2N9jyZvdBr4aX7ouRY",
  "key13": "2u5rZX8LzTTHBfpU5JBTr3THrCpPUaKNtXYvjdcBRyXTw68bmYQSGBdTBKaD7iSDdyGaXsiknfwZfT8KEgViyZde",
  "key14": "AqwDttZN7PrXu28Xb66xDnikcc1ZfT9RnyhDhZLfWtzmhEshjf9JMJQee1G9zZ72FP19HDMADqDPtGNHRQWnfCM",
  "key15": "2j9NFw9Buu6gnHMKqywMeq98YjXCsQvaEwnSft5ksrf4fvU2PDhdRJhrdiBHaEfAxRboenz6LaZ8oUmqtWggCdTo",
  "key16": "2KNj17SjaaCpDxyizkoCpNdwdDdZbYdXtEu4AGNCYRFm7iQkDYdsTVLdfjo8Ap1kxtxs4hAbRZn7NHM2cZEDshyL",
  "key17": "2sCyijdBCSZnJ5uGBpGDzpbamVGxESdsiF5m1bC1ks8KWcJ1Se12NQKTGrcshvx2dCXHPuvjYzA1fxGyfsov6Zyy",
  "key18": "3Qu6yQP13qXjESz35LhBTkPCtzijXCj665bbhTJSTzpVQVQvovfwJnCKnYam34uMUzsmYPKsVM86K9fzouW4h22w",
  "key19": "47g6JCevgTDt9f6TG4m4oKSmSUD1RE4q1653kdvJzkT6SyLxW3cpxrajNE4UpxgkzNg1SmJHXGG1H5pvkvLpH883",
  "key20": "381okVAwjiyzX6pgkorvpywcus5RkCHUtrFhZifCmGBdx5PXqcAhKUQNKKRXH5iJXnwvdTAogPEezktMjaNuMYV2",
  "key21": "4BaMMx5x8jBQAxzq6sF8nHz1CNZacW2PEz2XocRbN7kmJMtXduRiovFKdT1CpFJUf55gcxUKqoAZWXxaEbtdeQeR",
  "key22": "sQdjTK5J68qUcKPzUEH4aqcu5nfri4M3m83sgLfHtUq4ZYsDaGJryqit44gbE2iwwHxnYAsRnEMNihXUnnqCNbs",
  "key23": "3FPJvXsfSsku4zyEyx8Z7Mo3YWbEo6K49gYdnvMq8v3HFCwwMc7BqkCjzCVL2M9Ps7tECBy2rCQyQFRKQPB6HA62",
  "key24": "cN8K7iNPU6WBzdcHN1wexbzf1Azk6Qqvy9g982aAoG1suY68oLVUYvqMgHqTHFcke3vrUrw67b7bU6k1suC171R",
  "key25": "4wq6v9UiMjLM8WCHFRxt6bU1iGXWco51aberbBU8JNqWR3F2yxeM8Mahbw8GyshzFXT3D67FVFwhjRPKLBPa6aJJ"
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
