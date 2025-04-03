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
    "2KcEaRRR4WaCFEkajRrLkEB32h7rrNbFk3vvrxeWMizvDcnG4pA2egYUz7v5r61xwuJVWvDZv1udKFxjHpiaWsMt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DLTQazShCxAMagakmob4qEnZWf4yCxaKXA4NrWkoRUpYR8Da1vUSuVh8XJ9FKRX45wUKWkuTsUUVq1BtWbHCUDP",
  "key1": "3K4BdPwTfvScZ9pdNTu7Yz2z2qj3iW8shCpS7N9mud8tGix6Lbw454GT8ezrkVhhWLGVBu3F31miiAS4kJk7qXRV",
  "key2": "3oBmZJepFb3361sJBiZyvjWTgpYNkBqya5bxKscg2gaqdiBs2H7exWYNu7kG1PiHtgvDKwswPfF9cPX1XXT8Cnjs",
  "key3": "2seyXY8eKnHSM9Eu3LPXYnuJd58EuYFhw8RZosdfip5pootFhxMLNuYnLYMfk2xZkPdpT6mhwSmu5g2bW8NFnREn",
  "key4": "5kdEqUZLjbHEF6FdXCX77tzFscNjuiTjfonLVGkQpEEfCfzqv2i7V87xA9UWhLL9XWRw4GnFy1KJtWW8TR2iYYKB",
  "key5": "3E7pMhHpWKGh2BRdZJ4MA73unZFUNUvcaAaswansMGfmMz3yMkQU5aRAZzCx5qjyGYgmSzeBc1sED3gDJ57bZAGD",
  "key6": "3gqgLAhbf94comhSuduAWzXUhir1p7nLeo9YRKN76sA6ZU6oGdCFfEZvVWVG3bfCHv2wu7N8h4UrUrJaZbQFHsiM",
  "key7": "4Cf1dq4ycsxUBvqDRESeGQzDCMBGaTczenXmcvKZWZSkPyGcshsb4jxvqgEcSR6Vp7idkUsZKb9EYhctKkk7YEfy",
  "key8": "KxBku7ppimQ8d1mZ5t8tgAbm8fY9Lf3N2eBtGovvBAe6iCR51r9C8p4APpUCudBfEALH6czZK5fZpuDzAJMzpK9",
  "key9": "3Fs5yA7U75ZeuPU7h27APgnYB3FoMatH2t3HJhKfRMY41HcL5iUkhJ6SdDoufnSwAV47cHR2Yp1nrKarWreoQ6L7",
  "key10": "MQVSTKbBVhSEjRHusAyweVQj2AokZNzF7ePk2HQZgjpEL47qV3xSpfZi7EpUSEhBJoVvQAhTkz4jZct528cLJUP",
  "key11": "4VzvsxjvivxKzPjuaPTMfvNNkGArSN9fhAJzu2UZFKSa3i94tFyEA3FWQzaLadgJPe954xHRfC3PMJAVjpU8ieK8",
  "key12": "2FkdAZ5Y22xapK59EYLyTXrqk26UQcb7oGZc1BPo7j9unpwtGhvmtSjr5u9AkFRuy4qGXTmVJLyR93SUjuXS37jT",
  "key13": "nddDgaDkSq3fffcVfLYrNsGrLZH7vMLUPwYFZRqazFeCoXnnwBRmsgNzAhJ4HwLSv5QoDUQrxjWYFjorLZXfqNf",
  "key14": "2yFpiGToAjLvxspV8mUB5qbVsBCaC5E7WJSJaBUEYbKdRYrZe4FFahUqH17MwvtSKCtA85WMQe5L1Hbi7i8fx7WS",
  "key15": "555L4L4DpknvJT1ug4zDboZcywRcXPzs7iCqxocDsqKE5d4CoVoLJBoXVJ16Rr7PSC2gKwYqvD789fGiBjJ3CQbz",
  "key16": "4PXyqk5y1Y1HTNNMx9WCWqgEugMc1H4gX4jSTkYX8Vsd1JPrqnnmsGEgcV11ypUhidiGGySnzZfWrRnLbnu5CvWm",
  "key17": "3L3x8N2VDeA9ZQbN4bBFh7887VRyqBdvU1FPoJfYszTLApogYdohGcLarWDFyj3PcPUCtyuzryMPHBsNbQofTXUK",
  "key18": "4L4kxVyE2cLY3FmBkdnvdLbjG4ps75XMmG4eQ37GrWoSL3RkhNATeB7n4Qg2FpXA6b2jkmTHixTJH1ixAZsNSwEP",
  "key19": "593rBU3PCof3VZe56ioYhFGf1Ghqky9fimwMVu64jdBbJ1bB5SQLQ9vXNjsyHQ8qRtWQ2JLRnNWQFuNE7iP2k6cw",
  "key20": "WG3D1orS5iE8iDZjg7WPG8LPwnpWuQMXmVjfy8tc6SJ7yovZNzsgXv5D2dBovYmRvVMvud8qcAakvPfijETLgGF",
  "key21": "3rYsJwhv1hoUebqfDipMmjGHP24J61cyb39T4GxhDRGiURb9jLHxguFY8jdnaPqVKDPWLiU8BjQom1BYK7Fux9PS",
  "key22": "347nSenigPEuWtrCkZsgG3KKzmTTit6T1n33A2gA12cNnWt27SMKus9Ww63yhfEXyfN5KatCkhZE4qgyjsMnZnas",
  "key23": "2JcunJStr4k8uXGgMKjAsBzNtJeGBwYzAxKtnujfxPgWVTn7SeesnH1cXbk2TPjQuGbYP5xmEoQegKDpH7YD32Gm",
  "key24": "4393pFtik6DXZ8T9GkaWWC4LzL8Pq7KaJREZrUpfNiACP4FSA6jdS8gE8XjaEcWE8XmHconm5NnhLrGHXHQc6CKK",
  "key25": "51SecMrWiYN9M1VsBWDyP4pyvSbi6zBLLScky8DHWwQZxe9ugPZeYDcd1yn87EcuE9jd58iHmvf5raBp5zQ2nCQd",
  "key26": "27mjRcNLa3p1dBJ3ZzM1H9NDJGDFgMwP2hpPFqHaFmuqzoEM7oytHEmR6mZw8beDh6GWkGaJ2Q5gFkbj7nXVGqrS",
  "key27": "3QzJEGdikdY2FvrKj2nyDUh2AFEpNE5PFKVPcbWsFYyttpHapDKLMmqFYnaR5z1Nw9FG3eNtCR1Pfy7qvqvg1ZAt",
  "key28": "C1S6u9wB7XgGyfpiKuzbCbjJtSrWi3G34od4HhgKi8rp7UygabsCTBBBuuCswe86t6Ts2JGsMX9V1FBSDPKnwSU",
  "key29": "5CntnQJXnjbn9ca3HXAFZkFCJkEoHjkP8p7MSZxgmZLyDSY9SvwwkNFYuhpSZdDJgYKCYKbgEL6USJsvqtRMeLRa",
  "key30": "5w2ZPW2g6tH5HWWxPB4Z5n7vRVocNrMRXDS5mXiHdwCcKqHFkaszeUVHNW3kMc9WVwGX4VSSfB2wAGq8jS7eRe3Y",
  "key31": "5ixCSvceBW5pebwm4Dhju2wCsUSyKabv334o4SmP7J51oev5xEWuNdVBshNEoZcJYisCSPAXMg9dKoLBxGeTLYCr",
  "key32": "3sx8QEqTTzRjenK8eAtPtFwqcCNJMbGnWn3DQmY1EgtZTerUB32zz5qsVNpZv2ran7jwk3r8cxuY5yQ3hMa86ta6",
  "key33": "3QpNifGgAtMTrQ1MooDzBYLUqGnQ4unQLAXa5annCVstRpFrKcDiZvmoVD27pCZk5RGTmxraoZfu9WpGhZRoeFvT",
  "key34": "63gwMqvnNDZfpLKm7NaziPvUrV7qb9vtR9sh5vbiDgKnFqCc6KgNni4DgpmtTPbfRuhcxS5tTxrZoThQ54ZGCGkU",
  "key35": "3jJkH9ZF1orBj3yhFAr5gwFNFsdWWbHjCpFpHcdTTtesrjgn5WT2d2DR8hgv9EvWJuaWQZDGACWtuo3XNnLqeofC",
  "key36": "2gsUBMoWHE1iJyZ4xhSAxd8srm8LS1cpPvyRxkwwxpoPNxGpQdUxs3YjmoZAtc1pXLEdwY5VcMwoVygzTKWv9QgB",
  "key37": "2HDgDSBGvVdyVcaK5LMu21NHvM1hERJDKJUzXfX5vgsgCqFWmCvqoDk9zsu1N9QdHERQSmSbpa4MiJiA4Www1E3v",
  "key38": "WLAkE8eczQxNcSKHoi3kAi63H1yusUCefDnZE5YbkT6sgLqNcVSXU6NpKZxXzRk8j32RuLwqn8A7Y9xY6LLuWuE",
  "key39": "2KQnWrEz1fu7aoszftgVLM2KhF3MtWVaor2kNA2zZg497R11kuXwnFQ2iZ4PFoBksqQ2CFjcHV6ebEpv6pkZV2Vv",
  "key40": "4nGjbRCTnahX1SFTMFxSX3tttEn3XLRUwTuDStRrA4ghXfx5SyWELB2zs8G4Y5KW3DwBxGMA16CvX5svUKDMzcAA",
  "key41": "3P1cw45ExV1FTWM1fzmZKj1sQ9MJ53hja8byW52KCotSzgm7CJ5CLqJUKs94LASny7ncgNXyZSYAjyZsJBa5YdsC",
  "key42": "4HKcdadrsGAdYooAJQS6E5CtLm2hSVaoLK3gdUtVAwtvGUsaxPoidRwbsuRW7rGfkQ7hBcJEDuVEB7z76VkabXJF"
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
