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
    "55iB6exAqVYVqxgP2fpyHsjPgLM8m3YzBuqiFrudFNwSz3EtVaMa8PG6CPKb49QbGxdfvARQx8jhh1ekr5j2HGVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pSDH2ahmkDvXuezSmkouAt2rrrLgUCKvRBCFjYsXW4yvDwy6huXr96EXZjWAxf488QDYGUtw93r7HdFq9WmqWL4",
  "key1": "PS2ssKby7T2H9wrQBoMZbLMifxh7CrXcXpE3mmka294eDiwq6cLptmkYPqMfdEp8gSy3vvNfiAF1kB3FDiLLacg",
  "key2": "4GYyC1cHhbZ21UVq2mjd5o2FArpPFR4nmr1W1eLQas3nQhGaE4s248h13VAfaWNeLKSFW2RanzVjES3NzkzFcn4X",
  "key3": "3u9e8Whm2mHYWLf2EBuZqrKbdDjN7kgGxPiGwBL2VtENwSGvrp7huChQDgwxng27ms8ttJBaNAmtgNM6ufQThY4Q",
  "key4": "3ggZaZZbmYksr31rocFhQu5A25B64bj3FXJFjnSbPFjtgVF1Hxg6xfRNqoTXHZ4FYFogPBegE32V5gomw5YsHijb",
  "key5": "3FkdJ6rXHgojYeQdNMbRnRdcz2ucuvmwWGbuXiWDzW1kjWw1X2zMTQbwABToQn36nWK9F1sLZHnECfNmhRLHHBzm",
  "key6": "2WyWsNQwzEe8weAUrncTSvtCsoJmRWCQ5zhdBfNVsxy15m6CwfUaamBQrfbJrXMi2z3JJkJWzYeDMvznh57Z3Eg8",
  "key7": "2Q41VzDnybfT82X9du2aDbfcYmD8JgUxNBoaJ1E7yRud6Ji8GJQagHk7EFLMGg4LfQb4mtZ4Z8pkid9TivWVzaSa",
  "key8": "4yFAq3K5Eo9XQ9xUfvXvfiynKmzcTTC4F6xQ5SWfVzyqhspjLkN5EjRVcsGz3bWFFfidBPnoKgmPU45NrUG1Nacz",
  "key9": "3zFwN7nNq4GUrEqDAXfqVH7wkxH7eEkmCFjtftCXeMQ8D5ZEjGKFoHZpsPHV6rgvb1f7avnKVbCEW9hoD1RgFVUZ",
  "key10": "TJA4UyziDS7zW4hXQMRzzL7dUyKn4cHnqAkj6ksBBAQu3EVDFvE9MQ1MFLD1JRH3BKZyzBBJuQBbK6i6JEN9s2a",
  "key11": "eXD6eUKW3SRgsxM6iYxSEyAAA4PKdyTUHAiKbxMa7UGi8T5qgLwSDfijBQaemMJvgJXvG23dRWNJ8rkfTccN6Ff",
  "key12": "4UYQ8WR2hyzRRwfYuvkK1uKpuGSLuyWu35McPU22EwwD8xSCAfg3M5cvUJPW5ReTLXn6QRumGyvdhAvnrLJzz26T",
  "key13": "2DaNaiCpw5i1CuK8mx5UdaV9GL8h77nTX3oK1KiyPrSKHEq3EjU7g4gtZgCetgVxE6QstAg8QkjpDPs2zgcGovYd",
  "key14": "3tGbAnga1qvZzD8oj6c5KeF1Loo4aXPLAwUtBRUFt8CgpSZuRFMvDVjqkBepFrmmuAMpp83CvCTYhRKq1jbdSPYo",
  "key15": "5Kt59AtPyZtS3eTBHSXwNFPWJBDrSV89PJSP3aAPBfomBrU3coBcQFvCaWzJrnFXKD2pK8WFnRCAhGNcqnmU1syJ",
  "key16": "55geE5dgwnRjV2zBjxysNuejMhHfLcK7uEkYJd26p1BkWK5P9GzEpD5z38kTAqFQYKvcM34ULUQq6wpm2FL5JPV8",
  "key17": "2ZGYwKqbFG9oTDnqptECkdtidamp4RfmtzP2cf4KCDhRXFq9G7BxW21r4LPDzj2yc5nonKvG6B4kjf4odez9noqx",
  "key18": "5zYHQgyTPQF2EsQWUSnYi1FGgjuDWz6HcWkUbhSAZqPPuoFSSMrrTy2dZMb8n4duLc37sDeSNnAq8DjZEkNaBhgN",
  "key19": "3diTKp7JQAaZ3LjU2ikzhGxLD3J6dNjG3KTavsScNQxb3xUbN6xkriWRZv7Bs4EC4V8s8yqXyqCsJ2FzhLsQU3wX",
  "key20": "5RFJ1eKSH8ngrJKfjeg7i3U68tjATiYRW5JAUdKtbiohf4Ntzx8xf3jkmRnyq9jCnPhwdv8TzpSAfcgeeMoSoyVn",
  "key21": "5d7tT8vWVPRAiNBFa1EPPoxRkGanyB1BxkGm5HbVchZYvZpeJhc6j8q3AZSsHDXupjk7hMoPWDUjQjFSKPBD7vvG",
  "key22": "TEKhwSAKkUTaAAEC4NAgCrVyiKsybLKHVLbvG1Z2QbXLdFtH11B2ZLQAPyBCmGfM9ysqNnYe9LfK1BM7GZStAwq",
  "key23": "4iu3rHWaFarv9rxbLwpunr4QyNegn9hXEqmQGhLruADtYikcq1mGuUBj8CAJS9Hoxd7t54xCcVmr96QSvCGLwKTs",
  "key24": "2RguZERD7rx3epH32WutMoFGyNhmnsdfTVMA2aywvPKvCTS4yb7NZCXLjfC1jLCC7ddRAAaNA6SMaZkYfNoZg6tY",
  "key25": "3KRsVxJnQbkXWHJH3153YMbmc37RBMkYvQUuiXQaiscXFsaS13mUsDptWwB9NvhP9tcZNNYcAzxRK1GVH8wuU7dq",
  "key26": "4gUzAWqabfEbfGLWFEVXLgvrZ2zwavWP3ZaoEo9nYJF2T28oymSNv3GW72yshcZMV15kkZGbktWWevcU5N4F7ue2",
  "key27": "3tmWDpwy9GL1gQdXXEpU5mNcN9ffdnzFWoZobXfdh6WAUbUNAqFLYDaNFh2veRuu5zTrEuMErq4DFsa1TsSHNMhU",
  "key28": "qEVFVTYfrZhanBer8VJgW6ek5DeoMQj6tmLpBPoqiJn4Nxc75owUfXVAXLoo1H39cZymogqCpN4HDSr2efw76Tb",
  "key29": "3f7sKAvkXABehz848aDY6XUr9waCyA8ocdHpRKjxS2DHfX8kDzXhC2bEN64XEwNbe19hs5XpfxiYPtvU9i5S3xPm",
  "key30": "48rda2LnEonjikQsvhMzNpjGBCaqLH4tUyS29AmNT1HLqL9iWVnQ8jT4zzprX9uJDxgmpaqLCWT2Jeopv3c3YQRX",
  "key31": "4cgdAd5yJo8c47oz1313tPXjx7innSnLPigUWKWbGKx3NRYa56UTpSSMa87pDfyqQyu2zwjTJERgixM6J62PpMft",
  "key32": "RJhD2qhF59T2H78tvt25cetwgpYhj8e1WoopatjqsJzgHz3aomgfwX84ZvKaB6bWDrtH4vR4SyxdEjrgjMG1CRJ",
  "key33": "peV2NwzrfofGLEXkVmXnyRmhHVtmTntyBWrYYsNDFEKdFxCUavMMTmzcUuZ19sV1JifGhaHdkFn2oCdQ7mToPH5",
  "key34": "2LKdCdvUfBugxKLBCW5ftkEbyBb9KxbwRY4C5fkjUBgZbk3953iPUEVcm3AGoNFn3V2xcXqMxm1XjR9LodSf7P3q",
  "key35": "XT9NTomhEfAWvS3TD7gwTfS1WfLqrrphVYM3oaJprKSeUddLv66Y9r8vCPz3u6Saj9dEdYJNqGdNYYUF7tqPqAs",
  "key36": "2D3ap3EcQi9wvfoCMg9Eo7ccUfd8i6hFEtn7jVaKxWLKezLjGiLKYw3PD7xTbtWhN3faf7Jyi19RKzX167L66G1i",
  "key37": "2pLsqcbNegqRRa1EZNtdGBEfESHfwvqayox5DkYWAeZ7sWuFPGkGDDufxffRYDxf78ZZbxADJsE75b5pGHfsnWkT",
  "key38": "65jzxf4eXpKD3wwx1S6p7ygozv6GuZDwuoSYDc257PcWS8HrmUXCkZEBB2SAmerJVTwrqkJbrqn2YdRg9Hrevfoq",
  "key39": "5o7qpsPYwE88yKV9GsKaACyoCfx1ucJmrLNSXqLoNpBfV8mv8e6czhn9gvWkfySxzfSPzuuMZyQ1ufQFT2rSM8z2",
  "key40": "2yiysemJLbD1dBNY5VcbH6dH6Thi7C86wZEVLgeVYLksBaCEAQ3GwgNGirx6TdHqL2v7hXVBgrVCmQudYsiC2wQR",
  "key41": "5N4tc4BzzhGB7PKWq548M2zoo5Xt85M46sMyB8AazghFozEHQjn6n3fTur96SfzQ9JT7EMWFftEq4TQrP29x2joe",
  "key42": "3wBHHi1QJdA6UtGBPTtWhPzavMyW4Lr6FSKfJsoDCZEvTYbnrQdChSfEnH99iXx9d4vaDQoyheKXUQPu25h9wgsZ",
  "key43": "5yQCxf16dyJRRaYEw74NJgJDDYpSpSeeufyNUmjRb7iVgYebHdY13B69oRwZamasxEvCPpS4A1zQ2gDhLVtumiej",
  "key44": "4K7GQ1oFYB3N8Q2mkUUnYvbvZtkTuLgCmwJwuFzcDa6Tra7tdh3QWinAMPKTJoCA6VJpnU8B9oQhDz4ezRM9SNzS",
  "key45": "5oadhWXxG2SgeGLSPEnpsvBw3CYSymeKFh3Byoo9LzzSiSSZuxFsg1oPuUgqKXqh9qwugJJuMi9eJamPehCvYizy"
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
