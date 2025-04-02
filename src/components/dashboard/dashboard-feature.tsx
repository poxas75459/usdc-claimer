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
    "3Ki6mejU2FsphSjCFR8eQSnm4MgpgeankM32KXtxWuLQ5wJheg5p3qBA24uk8Da2ksqrioGYbfWGKL5K2DvttyjD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "444sfBZUWbZhGsRqyeu9x4TRQXAUyL6WjxpsYr6B5LudGNWTAePeNUvuosvtMArkPnz9JuAgcmiKvJbn5bEm1Rdw",
  "key1": "5RiupXPDzkPh76mxLUyqbSmj8Y6LQoRsr4JKjpKoM4956b2Cm9qJfqKKvHh5oRf4BjF14zFVJhv4qGHGR4Z7qnuc",
  "key2": "3dmHsK2Wt3w76WD6785s11KbxUByZntv4LG936Yh3sFAnpibo9MgK6AcHkeeaisA7N2pnB2xUKcchyNLp6oqjh1e",
  "key3": "AxKDbrCsxFZwjjngbDW7dkz2dxoBv8sfF7F2E6dEv8Hy9mVeCcU3urbzzDG19v3SRMEg6GCpgo1PjwCL6vECukB",
  "key4": "2khnFs52X9QdyXNoJ8DCGdPHazpwNuzGGo5d4w42NQZrrSyRuCZDKJYNFVprfg3NC6GbkX2KQiMHKw9N8yRwFvHj",
  "key5": "4LnnwFsXRMkBtBa2G9NngXV1SribKVBdJ4bgT4m5RmadCVYQQhkdZ2uC9GGaj9sCo43q9qZpHssNN4rjYCczcFPm",
  "key6": "P8pV3GwfjvaBT6JCEEsCm8ZnbW6Y2VHSndvFMaWbtFM4YSLJZZTnVvYWJPtSpF4J7PR5ro8MBazNzW1QcJaGGKC",
  "key7": "4Z23sCN8gtwa1roD7ELPqA1qyaXWe9q9MbPoPWsoBrRZHzunPBqzYGxDBeTUMPLpajayHRceHcCVxdjBY6EFRuB5",
  "key8": "9S61PV6K99d5BFDJcw6HTn22M5G3t6155ncEY5vuMDqVtpkMQ1aDFSSVZVv1qBDeYVvprPaApc7jKfuDsTyjpBH",
  "key9": "2qf1DonbVw2iHDio54ZTrx161ZFNQdAfSuL6B6zzhCEJ7xGQhQQFxSEhtRz3yy5KYeJpenYX85gNxuc79B7Kiv4R",
  "key10": "omEzB89nYtDMzRpGE3XRa57ZiRehgGXyvAN7Yoai6VwbZeLQqEM73SAi2Z1XrNYifhxnDDz3WVZTg81TVF4wfhe",
  "key11": "2EXjApqF44WCnkNWVoAPGhHS1KikfQE8qwM16RB1ot3ZxtwJLr9t4ZgWR7Bqaqj2ND3xgxg2ifmgDhVx4mySFRLy",
  "key12": "LhC2cF2efL623abk1Db3aGTaQqkpNwSUoEVMnaDE7RwaG8hByCUQyMxnUayzLyV7qQSU2z7d1AoqynmcuHQQuuT",
  "key13": "5nCDurc7TQVw9TU1Sux2HV8xRHuvVmhkxbLjpj4ui7zdjf22Rqtme5uW6fhkW9CZsW6m2r9uYipLpWhphzSbGi5W",
  "key14": "4yEa8nf7cCxMnJNaYYsq9pJWJxP5MAgxkdwQfX22kAQdfDWQdV98HaFxxhyJt4ioVHheL3VTww78725sum5v7tW6",
  "key15": "3Hi9hv5Ds8LqW27TmViAWYCZrMwdgqtYuQe5ToJTqhB4sTTx4U4YzjJZ5SA3AYuYbGQdw7WZcsiLzwUXNHxMjdqh",
  "key16": "37xpCTAbZ3ZWDa19WoCc9mxJNrPWSe3MNHSnut9TWx58zUW5KoWRiHfYRJAQ3EMXqsT6Bqo1hwF7LDhP5wy9bMLi",
  "key17": "4Ux84vgJ44DgHoCfjtYwueoMfVMpAznms3GWjGE5AJbiCHnpRZUStv4A8VX1NMc3iQxSfPDyWobNbZnrvXxtbEZ",
  "key18": "t5MEcTzWLgzgu6uXS6CDUcuzMyrxJnam8GLEmT4WqTkFuTqLmNsE2JPjmtzo2kE82tLJUe5js2iPqZYnioWq5ja",
  "key19": "4gUen6dHi15NvdA2hTfQsgLCUUDuGaGPMBcY6KQDmg76K7BrBwRCTVXpUTBLNJRytYRd8BN1SDN9XMerjfaLPn6L",
  "key20": "4LzpeLW93EdJs69oVsxMFbQ31CRVs7HXBPpopwJVDzyMzGnoZk8sWsaxcWh8rw7WHYcYzUyAuKRvrD67vQNjf3Qc",
  "key21": "2vegoAAgjXfhf8NH5oiaMvBTdYNDYRntfSn7Zn6jUZ7oVSsBhjjJ7cdJUH4crBhiSgvuGMzCfdmeYPssU8yWXWwe",
  "key22": "SW6JS316KasL8U5fEYVmvj5SEKSjQeAxbExgzQjiB5dH7fJpW6Xu8u8sdLFAThbxz4pusWKADB8j5itWo4U7t8r",
  "key23": "4stjDMin1DnB5Cmi3hiSB4dvHDnAqaNdSBtWb7jQXpqioDuHtwge1qtWhJHR2RV21c1wEG6EwXvFQEoyTCcNP35s",
  "key24": "3KTju8QhmQLuq8ZeJisBN7iPbksJDFpTrKebtc4tEzwiqcPPtMm5X2XdQR5LTDud4oCqGL5vdLFAif1yr8Uj5Waz",
  "key25": "5bKCGsQiEpW3VwK1ZvZiwa1F9uVEjVxQ2vHxw1rowf4bH1tTDMUtEzQBRGW6Z83qJnGbtjYqjPEZf19jYU1ECkj9",
  "key26": "WVgC8ojjgXiuenM94nsvx5Y6cxU8i4mtViS9wUofGKjt5Z6n3YgZZt4Am8AUhhXPUq7huCzrDoR4JVRxL6z88y6",
  "key27": "3EixvwneJWdyc69bLeLJVMT9DNUYDBc23bYpQKXkHezhjo3tAE1SVGKXxbGxT4jfGKVwYunX3ZFfi3qafRwGMrjC",
  "key28": "4hyPVXr6rW1hfVrCgNrQ5Zo5bZceSn2qjQxjdJdsf6JPLvncy9u8NjEvJf4ZHp1dDLoDPy4h7JDrE6Rcmq6joH1u",
  "key29": "4cJtP3hP2DCDmwqemje26txwCP1gt3Zmr3S2BbyyaSAfUxQpSrXgZ4yxHRE2sLd4ecitKvYqkNqnv7mLZw74tomN",
  "key30": "4vNvKHW6h8ughr4NFxccnJRtgr4pVxzcnuYWiZZ4vdhUGBtfAb4jSfKAXoA6wbZ7AyyWyDSxVadqQWkU82MLeQ7X",
  "key31": "65knDLjuKbpZvJWx5YXQjRmpTxu8cY1HeX5oVKwBhrb9t16MFKY6BTohWFsrsEorUNj159GsuBUTMDsBjgZc7645",
  "key32": "51gFtWKKwF37RAD18GUdBM88Hk74ENNpdX5XNkDM1QSxVqsVNk6NUAtan2iY1uLBg87JUF3JEZJrScZYLayhUbo8",
  "key33": "nWqhEb2GUhLZU5Gx68NZGVfwRLRrdHfhryNoEwnM2n32Gfkg2PEvwKyKbUrcjUyQSfwceYrC4SCuxZiMBfv7v48",
  "key34": "27THJkK5DSYbt3p43NrxFFZgERNK2uWZ83PjhhBSqt7nDFNsSZrv2U4zAztVTNcSuD9j1qPYrnsGpE8nE3xjGsS6",
  "key35": "62xNA5Sw9XnGKYoaS7mS5FHd5AVxtvxsCwntmgHr3ubuWVAsfof11jc5ncBSmYyJkF2M9vvZKmo1UFw5DMX9vixp",
  "key36": "2sYP4hqsyEpFUxYjMeEBLxpNbjjoaZzq8V4by5igd7FSXEK41BfXEPYsorLKhVieWYPsPpPrCh8eKu4MUozzqA5Z",
  "key37": "75S2b7usurfHbQCtZNWitSfetvd6xhkb2DZqCgQtu7fmYpB7VRca2rhrJvsNm95RQvqHg7GrsHN9NW438rNGrSD",
  "key38": "4HDfa2sZVenFkqTzaNyAYpAQPRKatgwsu1KzgmWmUvkYH3rnEoE2TYeaofyUtgLVSFkm4GSnGLKmXbajMBJDvNsA",
  "key39": "qKxy3FwkcMQUJ6VK74QSpwcb5zX7Ak66gFYD37EFaVULxBEKit77P4xx2ax1qXmLFn89pHkTrbKQAnRGGgaRtuB",
  "key40": "3rGNDtSPKNjKUb9smkJAp4aDb1okwVwWjV5bYrbmAK8DSwB5HLzZCUekX3waoSzCHYTt2sUyfgUooskdfPjC962X",
  "key41": "3m72Nayauyh1p9djaq6DrUXf6LmnDS2aVG55tKwmL2qgzULJidiUfWfLyVM1na7feaEGmf5uJKcH9TQPBRGpVJmS",
  "key42": "27nVuD2b78sJUSKuCXTMgNqQ8LLF3bPfdFMsNayig67vQWtzYhSb7hVcrsJ5BR5Fc86ygdXWnYaJMZ7Qd2x1icM3",
  "key43": "3gMKtANb49cbySW4Q7rVky2x1g9qHi61h6KnpE8tqQbhodW5ZQg9gtgQJvnprNstRL7J9HpZPkB1qEkKEkeNBKoB",
  "key44": "hqNQcyP2VjjpJ3ZNdwSNX7kK9EsmJRvMTdEpd6grr8bv6ZVinwdvP1Xutd4rb8D1tGsnLMCb2drdMRXjWLWVt3d"
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
