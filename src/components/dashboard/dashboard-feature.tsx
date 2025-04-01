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
    "5kaB3quyHHJiyuFZHBxDM2gZXSwsAVAcuFSiNGLGVqXgp2bAZMU9Uvk8t6yKiQJu2PfXDV5yrQGadGmguJd99CZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67RyYePmjQvKvUvYDAXN64oFZ9ULEqDd24XCoYP9WPPoytYePZQRqP3iTQztgRmf6phqSpbvY3c7MPFFVu67HKSa",
  "key1": "5hnpE26bWikdX5NhBUKzmhhLLPD3SfQe1D9BGuAsbdEwBt5YnyAjX98NnwKTraRTvMjddv4BoM3yzcSTSxi9i6Gz",
  "key2": "3MkTYR7w413B1pVY2tbJK1oH2g28b1sJedXcUkaevsg33sy8aLSAotTfv1RtN8ybuTpoSB82xmaRky8LzQSYMSC4",
  "key3": "5xaPPDLaKZC8uDaH3644RPZtREqnQXwiEEQjST3MvDZRCzJQdK9WJVweYBiNA9oHRqWRqckpnQaUiTjVYP4MdWhr",
  "key4": "3GVew2sm7bB8zx6LAMXK9M5ez7g37WmVYTH5jSRHwVq73u2PQMXkrhJCTWbDcWqWC9vgPfs6XqNwR3ZBCK46hcog",
  "key5": "4yT359WeYcPLdtKyFVX3JL2GZF3uF3QEjiQP1NMq2im4VfqKrJDtWC1irxY76mV39hUquwAPV49LSWStkkbutW8x",
  "key6": "41oQGkcJrVAn5ZwyycKrUQrWsaAiV4PM9VC9rf9MxJBwAneofdrVpR1adt9Dh3astwJumNquDQ4RqkE2NX1CWY8C",
  "key7": "57rqH6bfcKnrS2dpF1EN6ZFVwnmwzEKz76CyHPqJdG92g7rGQ7j5YqdqamHfC1yKir42b2uKyxLkWFD7AQaSsihj",
  "key8": "4sozJYLhVvaVNvCkcjwrLXbdqaNabnKBqv3J9f4bAKXpznfCLH8WcoNHdaFvDXgvpPUBLpTWjwkpK1XGHBSQumXZ",
  "key9": "3MzTHC6TfQrNWv5C7PXTCYwhrTrW99Xhka1ycoEawcyoX6J6JMhTb6yJZGv9PPRC3U6sGwbuqBnoFS2QR1RkJQMm",
  "key10": "3ni6EogvpHKzHF1NzR7b9bcUo1aKD7wdPE1qedu3n4ckMMgoUitgfFmCU8ZcX2RoqX8zm2cuocfrUApYH9kuQNXh",
  "key11": "3JE93rF6Dfmd9doBRYJLRCNN1ryUF3cyPvoSSNthkAMSnnDt15WrQUk9S53ec43iNs9XjRsyW8vrVRdtS2CEAuju",
  "key12": "iZNJtMfNk5vxNSDkHLiVcM2KubbRUw6D5HeLkwE1ba9F5XJXNh2kgEixTbFxWGdPviqTtcL3Ly9Q7QNm5PgdceF",
  "key13": "2Xj279B7EoZoLxZWpqcoKRwnaeQToUXY71eqq3XqUzM4FdayJzpfY14pv4dATR8BFajLbwfofdqix7WBfee28USD",
  "key14": "4WWLm6rNojaRsNWnUZgvm829NpSqFB9zYbtP16Hxu3S8HUzbeTRwZNSBp4bvh2fZkvdu2hpK6GgCJ75v7NofmR6D",
  "key15": "Xp6vD6t4jj8RuThn7tRaJoFkwchEQjegciFBPYE7aPYGhFQfDRuLnGf1uDmS6FZTkGJoyZFvKtGUhXMKEHRyHnj",
  "key16": "4h7Cxac48PhMR2JPKrPmeERCenVujNgvFT7uALb2XoRSfdevhDSbDqyZipvDdNPckiKapL4U6TvqNiLbqmhBRtK8",
  "key17": "4Uqunkw2yZM3ztYRqy5N4zG8UDfMpL5MC5JAtD9p9JurLpg6Yyo7gcSRTa6dVLHJwVg9Psw3SyeT2rmPfKzfSQcM",
  "key18": "2KmByaGwpe5Fq4erdBfQyF7ptmTPLC8AFQSa5jw9HRaaJPSDfa6s1yzijSiwtEX2VKHDrxBAR6x1bpqcuYCnBLYu",
  "key19": "3v2UDny1ohnEV1mV4Djjo12y2FACidBNEbenrd2zHojQVs4ZP6DGcVJ2MHYgL1uj9z8FRBTpnfkq2RPc3vNbBcUX",
  "key20": "5XoYifvqDHvoViMSwcF3KHSuCQCGxcVWUueonAUzC8VPJLEBr4wEd55Gx1Lab6xQjodr4ySbG9wDPm2UWK7MrSWS",
  "key21": "2XiRU7tcVGkSpQwGEBwDxnGtvgRYNJ3BrUR7hQxxCqmucJhKRMfEQ77vkmcnDr6xQhiePj1Vp5SBXi9yvNnW5cz4",
  "key22": "4AKuvGBPLCxjDhWGkWaVe9X7gxjmXi81n6xzwLMHoPwc6bU72dfN2n5UmFJQsrjZRJS5C1YuXHxSaP4iMpXmZzM9",
  "key23": "2KRudtw3YU6aXDpJxNfkh2QniaHXzePycJ7uPS5n7bUQ3SExzKUsTY7sZpRcjDE7fjvnaRJu1NYaqggC1q8rBCp7",
  "key24": "5ZGu2FJZw7pYYVaabxpoQWc3GN1aKK1vqp3S3b4B6TSjcPr7zQjPV5sWwiFMkdGofsuak1NSyMM3Khk85w3DUotE",
  "key25": "4GhrJcwZ7W51GcBeTvu7RiSY8JdXS14m6TmAzdG1LwBPg2GvNFTdKYATKF7aiaqPpssy1Ka1pYUhVV8Er3h62gat",
  "key26": "5Tiqc7zhnUNkPHWsyJdfQ2wZgQ7nNLf5uTVbTCcUTbYaKLws6MD3JxgmTonmHgbqAoMCWkNPxTEumaQnshT6BzXo",
  "key27": "VZMopWaqnRR4UKPEFGgyLvPCxN9T2uHoU2JtRxKs1xUaRXFnQYjJTaRGUwJ2oR7Q33KVzMoDHXLDm3jf2vc74wZ",
  "key28": "2jeNjkDorkWkLYzjmTAbVNUzYbUhQ1n4E9XQpjFLmb7WsaS5bA1mTMYykiYyz66MLfksEpoddHsdmodqFtsRsYrh",
  "key29": "3geurAR9TQmfsqK8gNAEePESv958rBwY1HoXeYM3rTsC7HRsBMVPkdX3BqiXN7c7v3J2dC9XxsP5HDPpixhTLL41",
  "key30": "2g18UtH52Jb8MqEnJhDYxhgZCNVSg3T7TqCxJuJw8bzaZ6hn396bMNWXxVzq39xAAcp2YyQrRzs5PDfWqTfMMpwv",
  "key31": "3ZqMv14MZKkyUoPsP2us9TusP8aSL6dsKypN5b7fY4Joo9Rveeh81V73AAwHt3wNWnWwx7zq3oz8N5jSp55GGNPK",
  "key32": "3BpHQ2nfrVyjJBuukmvC2VZGtbM6vFwp5K4m3wqbCzwh4qJhf5wYwQ63PyuRBwrqw533VkZFXPbjE2CT1pBfZtZg",
  "key33": "4hhJ9sKVXBnuVRhBXXsKHkmaWEF7s51wwvrV6uRS2yRR6QypwWrpa5gmX8fY5kyMpat5MzadJropDEMVj9GjHBUC",
  "key34": "3kpMLo41deCQB51PsoFAunFAi8c3wUyXErrRPDZA4q1UuM9eMstDrXEDVeCuom8UTkS15gZQXdyE96TcQQnNcoKK",
  "key35": "hmYmgFkbKFsPc3JPSgDX67Byuw298hFotLnyoM8egWy8Z2nPVWK2CcbbzFQpJnukhoXCq3LjYrabgbRknDSunox",
  "key36": "4fzw4KMnVzCoTbiCDLXL4VMXrksS9GTcKt5vLEG4RkztchtRHBGRRkmzusoGRQJDsYxB7zszEn5BSS3RR3jjUErr",
  "key37": "4iCRsa2edLm1JmMoaj9vi7LWrCbDn6VXrbnuzmXceXrTo3tM2utXFL7cN5pFYYDezusRj41JCwBGno17oAg3NzpV",
  "key38": "3xnPURJhFU2gBqkzy4uYAKJmEQr1mS2h3Lxycqvqq4NsYfGyKHWc1aLzD6ZeeDn8kt64pXzF1zYfc39a5fwYff6E",
  "key39": "2UzmFxG8SVz6rmm4fpwfKRX57etFhGhsuQvwXkbzeEuqL6VYybjwNvjyctyWYfSuZzASTPaTdYrtrBdfr93UNYjo",
  "key40": "45qnMWAwgfZyNZYkbj9D3aJKV1kuzsDu4TxV1pHvBkdkMRyDiCJ8LHE4W1cQ2cnbcRrVAG5F1pmdbJh2KBgZdDBA",
  "key41": "5hdsTV529HmBmAN32B1VhAi6qFNSuHQHb2f6Zmes6VTdwDJjHAc33b6oJbq61uv2aMobgAfdthd1nBn2Pnsbpc2m",
  "key42": "hihTWwnqNR3qMdV2hesGZujhgJAPZnUNsriQX4sdZPVdNmU2JsFg4LcCLFt7uwdZBTJA8dpXP2yMW7QFzqTB3dz",
  "key43": "66upqsqAVkmidipuXTeB9zt72U2PGEvMg6Qu8aaawsd3rr7s6z7parQAFLYea6AnJnYetCdjcVbLrV1cPBLGYzDz",
  "key44": "AgGVxgPfVSBW8c5vDCbM2aeEeth4onwLAJy4MRonNcnooXx1WQ5mKyh3zvVdQ6qUazKjkqHvrzUNZaKVmTcXhF6",
  "key45": "2e1TE8bBUFq3V5GwTGL2a5HmujfhcUhsYbLMJFsTMRXuzfyke14x6t6R98DDvoTbaTi61F9VmZwGSchrPgTAuwpN",
  "key46": "64RehcSN6Fbvi5s5gi3abVFzRzZV2VwiZdG3N78yguLPNnCbY5k49A1797U6snfxJiinkUNSz3yjP3qU3auyqV5V",
  "key47": "2MVRAhu5QajTQ2h1zVyXyg8VHVttuX2Fg94yPnNFgyFQxLynQwL6DKqGJzUqVGn9K5sftj3rKpzQStJn7qMQoxcp",
  "key48": "32ZGB4HiFiLvqwxU4EXwMw3Sr9e567gPAEShayAQBx5rYRSqf2NUejpofEmoKmiJi9JyRAZFhJ53RsGEuSsmcAsp"
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
