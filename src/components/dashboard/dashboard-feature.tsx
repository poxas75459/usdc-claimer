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
    "3BqUqwzg3RdHhaea8ep3y2GBcFuEZk23io3kLZ1AED3sRnZvfajMEPQW1nV4zQHbPuXisRA64k6GDHtB5hKzsmxz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mPNsNR2M4C7yf8R8zjxCCgxZCfAauXrEWosdAPkdp3udfFVciZ8wdCibLsyPoDudMBXbEusFTY8rqNUnYnKu4z9",
  "key1": "49wWTY5oCf3bhhEF4Phv7rj21bQoTqvBhYjQiV2bZuywPrADLgD4PjvBmz9WwmcCP6JpexepPTMFSk3A1DATqX72",
  "key2": "591Rp5a3KBYU9tLZQ97tfbE1VRFBYBRV8znbXRG5eVNmZpUms1Gz9aiNe2osChoRdMheNEfjzmnPC73aXj7ULp6v",
  "key3": "2WX995bBXNzardJ9dajd5U29hhyk7rEXCgAUosWTKmk7wRBW69SqU5RGpnPUzaaRoFDcawbCQBaVLsodmFvhxsUa",
  "key4": "28zRmhfyRU4orDsNQUjATd4RRUEnPJSrjD5yxFeAYedunkf3eqDD2ZxthTEAsANWcqziSd2P2v2NZStQe1HSuqQH",
  "key5": "5jEjjJ9DGiL3qG3dXD4gGKra67CyXBCbbgeSQAdBxDLhtKqq2JQWyu6RBh5BEynjYmsgxCKjQoPDRPhgon5s5d9S",
  "key6": "22d2DtYK8JdCKTpyw9NpREf3fxt2TTw1SfG8EzERNLzUdXAqiLPK2swKr3xxBXsdidnwYKHowvsiFwx2Z7BFTbpo",
  "key7": "4sErtpZTnohwQA29Q4mvr2Psamnn7F4w9pgGYXHejyC2cC21JapN4A8HYVxQPH9PEqeyM6mGGe5o3yvHbmBFcKDk",
  "key8": "2k6NzkXYNYJiRedbrNwpmNZH5amw6sYfV1uxLzfZHyzNPhwApAfJuUEMYgSoHyDsPjospqwfwNUHddq5j9rizYSm",
  "key9": "QRzk2vn9wvaKrka7n94DW1ZYJoguJRew8d92gLXhXwtBUT1fCJ1K8NGqAJ4veo5quLVcPGSbW2d1cBiUoBNXGou",
  "key10": "47A14XmCyBr3ifQcQkLDEo27wFdufyjomsVGjTaJTvwzsybQWXbWgEwDY3b8QW7KgQ2P7263fKiiSgVq7UCkjyYd",
  "key11": "3UZNRLL8WTpknaiajJXt5ikp62gGvE3RztY34RrXa3J6eEhBLt1tSowgWWoqCH99Wdd1scHNVebhiJuNWqEktyCV",
  "key12": "Zi9RFHokpkZXyh4M6asKQXYNwrmAshNnTfmVRaL6T9g3oLqQ81DmXGfARDkZLnEprSMFq4ZwBinE6fdYBCbNNq9",
  "key13": "5JSLJEdansspiuosmkZq2a7MRLw8sHvwvXCPZpL4FTCn1fhgiwjGUKrLXgJitpSb9YtECbwKEh8wB7SaGDk3W28u",
  "key14": "4ZTcHDaKCdMvKxfQ27VjC1RchF5MHtjhTdr1DiA17BcSsdCLuts5WFMuLjcSzgqPXoLjiN72zYTrDXBu2bcpn3us",
  "key15": "H2LWv66Yh3zmC6LYsfEVgut8pB1wA4RQAhwj9pdmaVTPWTD7JP7ofxjhaTWSYxbdbcMhL19JUZ1XfbNx4tv96Xu",
  "key16": "52HyTZxWbZ4cYvNTsQ7gMnUAP9oWHbm1VqWg8yiDAxhMFZh2scRELqtL1niNqdLFu5U3V8sjFB8f7ZEquDGEq8nF",
  "key17": "3QQjwWsyAYsi6t3vFFtRTunRWjjuxtLnm1DaYDUnoSD6d8fHRVkQseXKHsHc3XcrSGWCFqvVu8s8A1BUyibYbJi7",
  "key18": "3AdtF3Vf6uV9vR2UZBvoFyjARdod4hiDzcS8DsqfB6JmtBPDijjPJCzwEGCxjkrV6boCFqCAF8uXi1ZnZV4unQqm",
  "key19": "2iPHua1HSC6Yp7a8WvpJKNm6opAcCn4q2d4ExaiCG6raLbYyjhYEpUYi7tJXJxC1wJiB87rBrvHr6ugvhgfZFgxf",
  "key20": "3FPJUsh93EbLVMKQuhKwEkG5Aw1HU6RT6UGRBcxturtmJatxGyWNGwdJFgtpxJzupzUMKg8muusAqLKMhvLv1j9m",
  "key21": "3Ds5bXj4nu8AdUyfPWuqoawY1kKg1CiJPQkgPETGLM2kYhrUKTE6jZfzvmRBFg6mLcHyHAPEyzBtnQBd2zkBrY3b",
  "key22": "4hNGpFk87rGK9wA1rMX5CD9iz1FxTPv3MfEyE7CEw6diSxR7EhbcZfq9Ru8rBBYwgK2Lh8vWsCNz4mFu6sxUqS4x",
  "key23": "2W82ov1BnCi5H4r8sfSkVqtMLHQMa4dQjQwFTxiHYAacTvKhYJBnTvhpF3vuRQp4BN4jMC8BzEgwhUwwPj9wMTL9",
  "key24": "2D2tZ1yLpzpcceo4B4ADVXREScVrFdG8dva1yyDEXQNbKcfkGna2ChNs7mESEfMNUSx1BgFgryAgETAh4cZSQy1q",
  "key25": "47jmxo3X7udWcMttH3jae61uYFaHzXykMYRRFWPNzsewLxTKtxZnqBWqQJAAtz6iizF1LbsPbVNWFH4u8M4HhbX8",
  "key26": "3LrEbBCyt9fyCHCrFR3iwn6dBPP51eEGzQSnrK3cS4CkUFRaTjDEFUrf9BewxnS9hyHyz8tC5Z9nPYuQGQVpV98k",
  "key27": "4tSCSzxyWq6mvLqwermL1kh1ubWnLqvLh7uXzrcWKzY93oFQ9NkcWkbDaBEdkx1PvouFxDuBHWWTL5N4HE1a9utg",
  "key28": "T4LsmHsxvsaMG1Fuanwb54bp5vUmZj4jKkHYacTfnwtX7JXtwJzCHHVa8EmNuCX8WzcxohvMUnpgVwHMYdvm2Za",
  "key29": "5viayC9dxj9kBPN4ExhcCuMiFwrznVmuqqSwbFJqhZTv2qYSooWor1sECvngBbdzGVBNvcbCFMihJs2H74MYz4f",
  "key30": "5FyQPKRGpHg4vEUWbkwFQcGNxTvaA1hrNwg2sFMZhLF1L1F6rjsKYv4As1A39bTLgkkXWH4YJhKVP7ERW66pvwW1",
  "key31": "49vbZ9vkkxaQYakDcQEiYPQRNjKtJE3TpAX2DYtXYibN4yQU4grcZvP9ynUP23v5Ur8mVWoHPvXY6TuUzA4M9vhn",
  "key32": "4nyVC489R7MFKWfAHkepPziJRLnupMX22yVqC914Xq1r3vJga2Qh1vawLrME5sVxXK8tWmsPzANvw8Parb1gHxLZ",
  "key33": "5SRa3kpr7vvZjWwT2b9zJqyBMCXaiZuKKpS9nztGsBFZV12cLVRo9PUaJ8yqCZaEC3iyXWnvPV2UhmpYvFjwS3LK",
  "key34": "2ZjrkGvsPkofyFSDS5upwUGh6t6vtFE2LXwNwo7epTX5cru7YA1XBuV3zQYhyS4HigCxLRzW7m1HKgQCNzK97mKv",
  "key35": "4fWL37C8GQUnETcxjMaTx3EAn4JztKWoWtUo1pBRk6Dwai6zTVoLK7hZHZHaRAbSGJ2FM5au8iZVfxPsfpBJqJx7",
  "key36": "4VFPvXwwz72LS6xrqPGf2t5kv1CPqKa8xBAMYTzdMe2uU9jRgn2UwmtwAQGGNWbushiWW1ZjxxmQXBoJ4HVQhdeK",
  "key37": "2ESvrijdQRZNREB8s1PCdqx8ZMTLrhBvUkP876We9GaPhNVAEmNUS4aZpz8P6E8mXHc45BG6c4utwWsCdkshXCAH",
  "key38": "5MXusCT3xpYZHzmoUM76pUERpyUo9Q24jnCQS7WMi5KqX5t7vtF5dUZg56pC7d7SJtWNPH8VwZaFtfhtv5vPZdsU",
  "key39": "2uXZ6XoBRjKAiaPdDpPLeG5byr8tk64WDPsYYtRVv97bJj4GBWBrpeJK9gMypxJZyqFW4BzBJ9K3ypiDu6VRUx7T",
  "key40": "5RmnBqcupYyx5eqgEfAVvdgUjkcRTdgBthGRdBvGN7GBeYBu5bACcAydzGusNWHpyWeSspQ2ytpScK6oRKg7tjgF",
  "key41": "4WThjN8Gyp9qs8bohjrMqXNL7ynjww7pBtZwqfPDQRDmno1Dy35KeV7DV47bQqGYsf7MdcGoumZQk9XgxbhS6Ugy",
  "key42": "emKvtHEpaP9UJnVrEiu63yPhhdhxvtv7AiLsziHFyZtSt7HLpAfsM9evLx4ZrzQLiHfD5xZFJQCtx2Vwddaratr",
  "key43": "5JtYrNa4iGCPaEu2J6B5dGZv8J5jpZfFGWVQJo6GE91v2XwNiyPU6EfkK5c8cx3hwHmz46nGxcrzef7nuu13kVWt",
  "key44": "2yveTG29fyxumXsW2VRsKg4sbjVErzh7P8BR7CtMBFktyeCrm3kgfcWMrK4iNcahEodeHFiBMGpsxhbe2tVgMm6c",
  "key45": "4JCZ94GAPnHB7JMZLF6FH7h7LnEDTbXCQ4qRUwJGPkaK9nnJCUqesX62yYaMKuWsWwpB5qHRNEKw7R3914sJ6rXB",
  "key46": "4HmUq7gN68qwQutUvLpgnK86Mjj811XukmPjsVtHZsptHnXuw5TDdk15bBVJdeaZwxUTphgPBS9dynbNF4Tcy9WC",
  "key47": "55GCFumWx26kvGjqq4ZPQ1zyYUjaf5GjNrxaGD8V7Hh7JWBXB9o3RFrJsrurUSdRvanTdjSxUNpLi9eD7jqKZZUp",
  "key48": "keDBBaNAMPML73mizQCnxoEGiBZUBk5FoadUuWiioRyMUxDqGaqSmoc2sMg42iN6NBd78nBXmDjvrYq5FVe2vef"
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
