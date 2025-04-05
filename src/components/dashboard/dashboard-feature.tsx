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
    "3iEmTXqCNu5nRTQX6Cax7UAiDqft3G2f8zb4F3YdfPACu5dgdEwMEB9s9gagVsjnuxcS4d7uPdpukMCCQQZUeof2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BQQUueJL9UA2pgtTL79LS32kzxABMYqJnzfXFZdNQZmRjsfzsuJRQK73A73TKeBrdLgQh2czhWc2uLpcbh6fSRd",
  "key1": "32WQt6jBDZFG79Nr1Jzs8DLUmCcfp2XoeSPr1TYygSTkyJysZLXvVAxKSEqNymFVAj4agRmMcjcRG5tQunLPbwgk",
  "key2": "4JvRcE8ci42MAL25X6obpgMbsimRZMzNG79aetfq51xxeTVcQtfEkCtoytUQcBJTYf2KXVQtRQyMRnaW4W5fxLRX",
  "key3": "2ggQdPxNTXKBBpAK5XqZr7xgwh7upcM6EppqWqRLQCz4PwA9FTRzPzxcVnLRieg1GqzFZodUCbCmL5vYPkRE5ChY",
  "key4": "3X4dwniJtVVTdz7ihPf9bCr7QCricRejZuup4mG1UPmMktgJ9Xno8qpuaQEVYRnRGpt4ipMxuP5KVLuAAnxRxJ4p",
  "key5": "uC7QK7dSpmPQdgcV4t7RYZzwW9S5bfNm9VjFzGik3W8573GjeKumvnyZvoUi9dZUCPt5QDuGkeMSD4945L82vEb",
  "key6": "4LYd8KsdPN7HETm3LtZecR81wF9pu6akKNcVF4STYG2hi5WC6HDesNNJNYh3GaaYqcs1LxFL5y6MMdfRM7qE5tM5",
  "key7": "5dS8QkwS9iUU3DHfL4AMTmQBPHgrRU6Fy9b2qaTH83qF8smwZhd7mNBoGiBtLLVx2AiqtAdYZkDVSzjHinMbpAyf",
  "key8": "3catg7fJens1WPiqF619J43RckENpkmTouSW53XqEb5kcH93fmFssnWMTThtBBsHyMWzW6B71M8zVFi1XjmJmfAG",
  "key9": "2qX422hH17u9c25u2xy2RDJuhjKzQjQc6pgbb8WnHwPxospZXrA86WwANDdrewAW4y3hpnv5MKL32m4wqHpmzbSC",
  "key10": "pG6vWkq8DaTzN4McTjGqzarvf39n9NcfS581ehfpJhPYRoJw87TLpeEjFCDq5gzFF1qsbT5p6D7WVFJWPJei1vV",
  "key11": "5UuZpJo8ci1tzGaAqBiaoY8USrEPyNvLWshbqZxJMVD62q1YVceRa8juhvvCh8Xrf7qmZdu74wzH2bJ1tbxAwuqX",
  "key12": "G4hKFAq684tDG9M338fPAfarsjmVTut29ptqTxdYoUD4RUv3W1FEgxK5o32Qt3cKRZV7yyyEFsfXRqiEPHfneVt",
  "key13": "gDF1jGEgwq6G2AHKD6YyhvLBFNNwBa8Cvh1P8gHAcgD11tf3tcy4o8Nn7Eufbwy1RVZFkusHf3tsk84bQHUuxy8",
  "key14": "5n2pi6Wm2kYCUD3fRma9gN7AtG4161GGEPFPEFvtFXCnZ1S562wi14xQPxhqwYaGTKatBDkzujU4FgqR3ncjsTaB",
  "key15": "4GcRDtxDaTgMvAstjstCVTpjJeA6U9EYHNwkpFyiZJvNafrDs7iAe5NNCkRJG489E9Hh5PpRNhFKbYJ69HobitVx",
  "key16": "45Hb6puukQUPNmHHbwihPUJrdA8qFPaYiG8ebPzX5e5EB5pEGR7ZgyJHtBnUQpB8jrn5XuuyAXTK37hkQGEX8XYM",
  "key17": "4Ebebeiz2Y5CL3oNbcmCAeiZcYs16Lb9rWBTUEjytToAwL2L3QLz9UHFfHb9BVJHByNFyyMKvmsyCzZDP4qR2G18",
  "key18": "22hjXu2Ns4Sora5tfviC5JedoY1uSJ626cQv2U9XUrn8GdLHV36ztaVwWPBqbsiMpud2C8pukX1agP6wERGjwp6n",
  "key19": "s2FhCFTTarS55f49wugYAqWTFcrJmGvMFHHkTeXsxxq2jMey4LRaaSp46qkMVAMwn3rDVLWYdponUoivEKexypj",
  "key20": "4Pzx82KXCmaqtiRpbp2LGmKWPbE597xJz3sMficuoJgoDd3Ba33SXFoqQ9FDqiMyFYfg64k6zKt49QNVLmkn3k4R",
  "key21": "3EfNn51cwe9P3bqSDHPabXyR8jXvZoFZRiJUdNZ1eGcwPbnLHSuh1h1A98wRL8jkYy1soJkMBEJ5zmRJN7xUK1hi",
  "key22": "665rehnNzj6sPiEsx49EhdjUNNCFCc8PBwR6ZFXhJkGfp4crdZykvtxyKHgBSBUojaSqqvz3Cd2Nv6rTCFVHrmCE",
  "key23": "3Rtp8J7Y2GNCkSmT1yPyauVEBdkc4q8DdwKfumZCgp4mzK2D9C4EDC4VnbZoGDEu82unT6M7NyNWECFXmbJVyLLf",
  "key24": "pqwvRxhnkuRnjiJcUzCXfsKcTjoW1GE5K5dvRBBiuDw3GYfbfgFXKwPhNcXhFHM3g2xhs5BsZ73kvYrnLfse2qc",
  "key25": "4Y4JMqouZG1WFePW5tpGSEJTgoVNckQT37sBfrPYiV7tLaxteU4yUU6LPRQMvGDuyjYS9rKzt4W8agmQReXcp9iD",
  "key26": "3Ug43rw3Gmrv8StHAc7X1KTyzHe5hVtvUxRCB91w5PsFztAdKDboSpkPNvDwzUBCQiy3B2pJZRd4cUN9VUHjpMMe",
  "key27": "eCdNEFXr7Cgr5yaA1xBkzCZy1X8k98d3v3LdR7gYFz42HU9euacSNQbp5JY9gKEkxTm4BNyFyAwPPnENxNubD91",
  "key28": "QvFrknQsJMzcuTYT9E2UktWtitWHrWDPuVjJCzEjWBMCQoppxCReZypuedf7UdSrKoBLeu55WKnFdfmByZZGKa4",
  "key29": "2ZvWQAYopFzEkq3QpbrpjtYN5z9kKZd3dxWnwhtMtqXWopo3aCbUfZWkhmCCM7At9jCKK7Gj7v2J4Q3zjFBgJ6jC",
  "key30": "5BUT2zGbjYfxgunyh1zHjTDK6P6YNP7WGJVr1FTs1HedKuojLfXvgGrjyeVQCJrqbSd5ohFZ7KC6D5JEwjJLJ9jH",
  "key31": "2ZZL4tSpZirDs3QrPLAS4siniyiMqox6GonXRmy5WXQfccDjorUTGoLqGHtqZQMstM8TCsEDcrL6sSgmyzazRzYt",
  "key32": "4q7fm3av1dKgYUX2rRj4rL2V2ajRcji3xHaA9oAcZapvcWkWr9iD9CQxgF1uXrmqnckjsy8fkEe8iCva8YuZyLN6",
  "key33": "5fxK6icdmSy45iHRyDJtoGJx7fHmfVA4dEbbECED3NaBrqMNK7RmTwKMsfLufPB4Fj1L54WxkVmeeD22YmpzFv4r",
  "key34": "2QDoFPud4JFHY8tg8r87Fh7DHJAV6bF8gk4bycFLHzZ3rasQyn6iB2tEY9c7tMGiyyU92hKtbFhVXTKwRGmEf3y6",
  "key35": "2sU4agPtNWobfjmTW46DogtaCVuGgFckpqJfn4josdBgP5dGy6fPNZN3hVmzJGN1157ezd2jiEgtiRxTcDGLauz8",
  "key36": "THt82ZDGJ5T9pYNPsuPz7rgjSg9GWhZD33hwdxBto7EsGUv8p8jFETHfJYxKSXuKt4uUC4xqEXqXBJLfgmVHYFZ",
  "key37": "5KGCCJf4rNxoGHng5kGx5oq1HRPT29UNbXmonV1CWD3YddENyc7pVV4WeQPDjE7QfCrjoxm2im3FWhfAU47N9dRt",
  "key38": "Xm7uPPPjxTB9EmnwKwj1yAMRMGewcn19tovDCSXc5tcDY21dNbNekTXczSrc4QUDV86UnobEFTJmLY2d6Lr1qud",
  "key39": "5Lp4BJF6Yo2wjNAjHJvxEdo7vWN5KEFUoxvpQVZhYPX2LcQY9hV21uvxKDsdBjfEjLKg57d5nXt8jxV4K58N5JJN",
  "key40": "fxNcSzy2yRStkz9hku2aJZzdHrNW39N3KThZqn2AGhokYbR3yujo9kCoWBfzfm71E4G2bPNAAk9ZSPFumBzsawU",
  "key41": "2n4vcug4j6HuwdjK6bUBt6fie7mm55EjfMUsHWvJ7CtdkqegTk3kKdFrc9F3RUeiUjw692AonqUteNGXuqxSUPye",
  "key42": "GDmvo8XJGPGkcQrz35t4RoLyV8eAqimuhZgEACeK8UfJC4kXznkUGwNsiMZFK8qP4sBWGXVBu7oFhcJT9DreAmE",
  "key43": "4Wxea9SuYZzX1FTA8eYZa76fhW3EbhSf7jwQ3HM6KMPA2H7Hw8Hyx7GiGVCxWf9rfvxoP5s6TvahBpyf2jxgetbq",
  "key44": "1KFMiwFsVjheSzDfvS8JJWzpyQx9nVxEbZviUyKpka1r6uQXaBH5MYtetHxMyxCn9f3ofVdhwwwKPTFZcoALRe3",
  "key45": "8X9yTfWF2hip21ePcXJ7wzoy3J3gjmUoDhKv1BC1wsMpTWgwBcRcHcEsyN9JH2GkYPNgrB3wF2uhLVPZqhgfWsP",
  "key46": "4UBYepfS7ULVor26arxAGSsjg8tRtKnPEpxbMztXpyUv7DwE4Lct6PiL5sLSvoiX336p4FHNbnHLZQVPwF8LW5TX"
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
