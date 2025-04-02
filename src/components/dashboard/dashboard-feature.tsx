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
    "2VLKDqxXf12gGTRRwj26aYgM25r9LxDBA8XArEygVFFuYWBDydCMYX7Jrm28Rur1TqTThy4Ye1NTGBTYM7pfMn99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3An9aUovF5uP8piagcmR3XTh6b9mcoGushHyuBQ4uxWPGJoZ3BmMpVyzefUzywfAF2QgTGGh9m5r7dY7XphRUze9",
  "key1": "2g31XnhGGh5SKZen9ry8U85qufGcxmXrmoppNrW1TdrG3jcG8UjxNajBLvMeK2LEZsLk2v2KSz4YBNF54j7htx5W",
  "key2": "3ymXitmtDbWM9Hnc3GvYeNSv3wBHRAZ9NHyqoSJBAPDB8sRboUsQ68fR7NJTRPsfjcWyHNFmXAfFjpAYswCgQPuC",
  "key3": "365qBcKRSqmcDgN9NXW4qrvVGhnWgsPKuRJk7dSmS7G1jAj5Muw72rfRdLuC2TFbGLFocpZhBrj4ngpczndimdNa",
  "key4": "2ZtVSFYCtksW35rV6fDbEqDZFNC8eMrq2qoELPUUw7bivSXgeGjECnQWQ49vN9DyCQGvoFFUUmMGFLV2m2YSMBNf",
  "key5": "49HM2hHybZkGhYae1Jwsw9UFdsXHRQ3pvCzdueuZbj4PzM7qddzCnnXQHjdj5K4rcTy7jXGG3ZVk3DA3P1LTkQyz",
  "key6": "4qPG28s5x64ss36nxuDfFuS2MPjjuEx27U4E4UHrFpbyR7h2bYaS39Uxun6Xfdydskvojq2Qz2HW3rB9wYXnJvHq",
  "key7": "dZKR5ficP96RzRbwW7ziMinfmdPYe4CaDELebca3Tn3MfW12Su5JS5xaNvATkSxQt8C7TovHV1U1p2CDc8QFzjF",
  "key8": "vyUDByix4PsR6U7WvWGkBk6WvRXXce5YnAeHDX6SuY9dR75tEtKyuPdWzVxf9T7RLc9KNozt3tkZv5eogUZhPxA",
  "key9": "5fArK2Pt7hkJmZsaiqAgt9PupRBrqetvnD4hbcjHrqyZm4beiBkdJfvpDQ3qAWTHC38eDozyNRv1EtimyBs1sFN8",
  "key10": "HBWHbacg7DCMv9Rb3YxvLijCQwcSUbUiscQViuYgHfno51ZybdN9czKoGu14KgowReWFTgca7TpWSSiw7afzshM",
  "key11": "AxEjFs4SbusgpeHgEavqAymPnZifFaPRDy5erzA5EARWE33eHEVhbfXFUQpkouthCPpiNgVBBBvex3HvXB8Zeij",
  "key12": "qR7f2hKyrnKAyHZQazJsnssaNhY4YGwb22DBPzbqgqqjC3ERF9KxWsq9A6QUirF2sLN4TYeU1gQW4pP5KoMzSCm",
  "key13": "36P5VZxqEbquA66kU9pfHaeYdShqM6tE69W6nWeof6CP3rEk2meuQdHi4y9pvVMkkA5eN4F6QH4fRdzgvFmfeAJS",
  "key14": "r7H3x5jnHpcbTQa5Dh7LCjjypHDzp4Z2zNMSgGktTSkL5bNXRMFo9hYStPubehN8ZD4VU27Py4XJYDpYG9QNggt",
  "key15": "5BtDyJfe1yzDWFFJ43L9qMQbzHXoACK3kHVtnJj7jLbYu3G3wDekq255MjX6ZYLGUezKedaRR3FEkwwrgfUriXVn",
  "key16": "CMu6eVrHj65DnFjGwRV314gceCjVMw5a5rjRCRmxfgjKdzHU87gKBLz7QfciGVen8qTn6xC69HpNFVRRmQvCHzr",
  "key17": "373YdTtW84q5TMvBbyKYFbQm5cv9xN2Nb6tRE6XiEEVjf2amJopbE1ZgjLzSZXeZW2NgUzpVRtGzrBoKQfFcEy1p",
  "key18": "58E2nCWawU2NYZJVckfgRDw29EjUsAccahiCH5aH3UJBTd9WJmvP7uGLsTzFVSdBxSxcKgNZdvoAfp8q7RQgBsq4",
  "key19": "34HqGJvqHpWCeBED28w617cL7hAoT2sYa7zhAfrgvJzEj6ehvRHvZFf9rd2a3EbUfG8wbstVUPaAii3xYkt5KTgt",
  "key20": "PjsukWHNovV9ks1kg6PfbjjLJGtu8cQ2sa8CKjyv3af38NC7RLM2ovqYsfkoNMxXRWzrdKdJXMqt6T1RFx4o82w",
  "key21": "5AnbTeHaUgtmMagABuFwMk8xQ6omYv63BBDuLyL6y68pTY4Zu2Q4NEpnPU1DBEouarAwn6Mc4ubcjLDqGgFe684o",
  "key22": "27QDY13U9uk8vaB8EP7kQmUX6mqCtKiQb6yCVNyMgbNdq8z3RaSvncRfvQpcc5KcxgurPsC9ocB3SXAtZQRYPb2K",
  "key23": "4eaPXBKRHGheiSvhcmFAWNrvqAPMr3ZbDMu8WreWWALxwPBJqeU9VZSp46ZAYbWHemE22iMv1kwbzEprJnEVtZF4",
  "key24": "5pbqmwEnz3MbkbGH55mASwP6fUbEow7REuXdJKYESfVfMq8GZnn3QBLyPaakMTDkMFwrXxpLPwAHdfVTXoZpuTqX",
  "key25": "5rJrijWdS8veqhnGJKxc3V3uvvYnoFY2YApv4ikuZX5qud6dgjQ6PJCaSkAzuwhcF3xXvzoBDAg4HVZWJeYtnZqQ",
  "key26": "3rXigHhms5Ud84aXTH2xGvHFGcLeiRtAiK5JwDqG2VCrf2QXyF2HNr9S9gPGE6GDeskNq9TjZk6PQGH3t6uMi4p1",
  "key27": "3xZUYsUvTdu5zuiLktrsUmixEUyaSRqPCy1fgHxBhbAai8omCVyZqjbAVeCJqJEAmVTiaQhpQFzTs72RG23tePmv",
  "key28": "4Fq56JDgmmCihrWWf9EdSC83H1N7uAqgd29BxaW1oPPm3iuHCjZ59WhS9yxtUFTamiXTfNAdTikhpz6vs6HvcJ17",
  "key29": "82DjxXbHXzp72dJQh8yYLs9zCNYJhgscshKiVDR2fWV2SF4LL2K1zi6RGxnmR5cqxkPb2fMaXnLiKdbnkoErUA7",
  "key30": "iqVTyn9h6fAFv2DFyHbEP7yn4pGowoySrNkxT8augb7XNpdrzX11SQd8jzz9j1LTsbs3J8pKhV1hr3htschEnXB",
  "key31": "5vcFcEnXzdQWHLvDJbWfBf7bfSR6T9agGcXdTdVbab4SUE4vyv5pxwLePvV2J1cavw8tadVPBK6B81FRx7jGqtE4",
  "key32": "2UiYvKfmr5DzybqzMYy1uGGT7XmggEejfbnwzgWC4jdnBeTLtjF2rg5pENDEUD9MDmeYpUG7uX6YCrbcdjwLDyo3",
  "key33": "Vc42AeVqj6nnvrXvfWedQfsu5wHwQ9AjgWAZpgDuc7hdKjzEZetbm4yRwrhKkfDoacoVChN3E3VoVoFRTX6TXXM",
  "key34": "2YQ29uXzioySVikh281NFRHuyAJfzn2hierecjvjJLwKXcggHFaGWVuuQfikoY4xU9HWQevaeQePgg1cyVw6g325"
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
