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
    "2moHk6BGjUVE7ZNtTQdhHvRzMmXa8sYrA362dw2rXTBUb7F2E7FCwkgJLsnVfy6GuTs9g4qyo5QstBRmyBJy5KEt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51UWJo2gsKDiR9pepmAV1CjgauuXzN2qwn1agWVdfZ2KSqNc3Ss88JTpV2L9Psvn6gZAhk9BfuUCoZdy4meriPFM",
  "key1": "59hqkwbZi1gJbyWmqiTpVeGxaksShSAvVc7w8S8J5XW9BSrnsWzBiMzWQ9wthTJajDXHb8v6i4u9hvcLHabywZA",
  "key2": "5kuwd8CR9SU2mNRuNKVfEvLrRRyKjYRq37uvU3czTHUYT7njBrvHc8YzVmiWhX7AbgPB4j9DLpwr4waWPtEJoSPw",
  "key3": "2tBbJumYEKmMKacmiWp4Td4hrRjyak64j1xX75iivfGBhzSANCjhJT1W1ukZhjZF6Hw5nm8ohUqs3nKxDJJ2nKVA",
  "key4": "HbYsxifAR99VUH3XWt6pWnxE8MP1vDbtMVzgYwq3TPvxsnCTJJGqCndaHW22NLSo2KBxDxBZ3zRja1PHv6M1ZfF",
  "key5": "FfXjpm8sjyznjDid1wjPxJxZJcEthVfhFDbZCbqo1NXnxEwdkL5TWzo8M56u4rvwQGoRYA6j9ugLifufvSj32Hf",
  "key6": "5ycDVnVUppDwKGhwwNoWiMNbVVsZJngYyoyUKv8ZAqjWbEqFzZyixCS8vhN5bk4uetFfmfkeEjzqmdd2zXbEATAc",
  "key7": "5ZVSSwKodKPoborz89ejBvbn3vLSAWrfShq5NCbJr486WdNkR9U2bXHKHTWNMUaTDvxJNm2ZGtXJA6ypJGx3MaF8",
  "key8": "3HRXwq74Dh75c8WLauGy6zTgRhmVGZCdEy5YK7Er22SZQ3FLtaiMeDZ8nvtHwCdMyvKhaGRJKibSp1ouzUHZq1zj",
  "key9": "3Vx1kZbxc61KDLDFZ5yXnKau5N8n55HieHBZtr56tRXSKuqpkePFAHwLfSVhRVSF8poHnHfCXUrKjwf7RsoPkBcK",
  "key10": "4vuL7aAX1c4EWjyCmUW8nk6hou48R4mmE8nM4XbVrD9Xna1GwTkJ1Y25uGmaWBVBLRmEmfVWJ8vchWRRn4vsouWW",
  "key11": "4gzzVwKTnzJCPBhp8b1UQ7zA5X8XZfZStJxbVDzKd2uCex6pMmbXyrHLZsFn43h1U7ufPsMcLqeD652QxomGoEa3",
  "key12": "peDRdL6hDfs1pffHHGX6P9inH4AgjkKT2MtWmpseKWqDuFdb7uFbMdJf3ZeWAM8WMSY1DkJToHi54TSrmSx4DfM",
  "key13": "5cDRniyhL2PAoGQftDqSBiSkrHQjmNzB9SjGPqPh6KR28Myj9HTEaBLWi7mRQQrfBXwgxWATeaZonoYsNiNvCJqg",
  "key14": "3Ekyj6xpFGweFVZ43ZkZQhvsZVA9ZDQSh9PpNr2bYFajGerFPYQvCkugrDeBDE2DttVXdSbNwnH8ZHSzREhL4Hfg",
  "key15": "55HyCe9vQS6kSxmLyAQXFPxkneZzNbrFGZabkCUCugBpciW1pSTKZAyW53QhnS5b1msJ8XzB1AAuTS6Y2NFn3TNt",
  "key16": "5aqW2YqE8vXHNh9ek2BbqHk2XRHbLytkMb8SNV6ymWPhzysHmJFe1vGQFfDhVRuHnzgBhZbpYKtRPAeFkK2f96iT",
  "key17": "3MtGFZyJ5V7j3RWSn4DEfhSTNxsHM9NXVADrHmS59pS4pfhRSJGTBjk6ysQBNTzHkrDRK49SmnfvNgy4YXvKCDWV",
  "key18": "4TnS7KBPtCsFhmAnTNaNhpKx3NTSYy7i8iwFVcjWZECfG1mR3tfZn2oK1o6xaFnGUsuRrU9porKGj3nhsETFdewV",
  "key19": "5qt3hsXQiMybKzQjP9QQyPsVdNXranf1S31T11JQQD3Pq5eXdtEF6yeioKUSkhNLL2EuCthF69aFHS55qdDaGzCr",
  "key20": "5bv1BTU5ec34Aa2e7GVA2cgFXpMi6yUvhH4uEMSLDfDAGojtnSLW86r2HN6UHv6yi6oWsdAAYkYj6nP5c1gSfctZ",
  "key21": "3AERoSaf6DyvkiLG9oMgnQntjtLTqpRyua78Dc1U6KnrPqVWXHu2SyMYXEtMMb9vZwKYhuQ1hvp141m7DwfUJ9i",
  "key22": "3eXr93fzJtorJ732jBVBHi1XxrUiqzRrekamAv7uqqyHvLohUY9UYGRth8wb4uLekLrkj42ExP3jyxL5WMu3it1g",
  "key23": "5P5K4DJHitW3EG3xGrJpXB91vHUHcwzaV1xufisxEeNBGvLC5XWbNBBV6MkAsbDRWTX4DcDec5YdX8PtH5eyF1PE",
  "key24": "3XaS4hpVNa6aNeVY3s1zPk5FuaYPFEUkDuXCqFajRrn5rMZqBm512m9nFDqQnGTuHaECRYWTi3wi5p4jXbEkH3PF",
  "key25": "2fBMKUDF1EARdeW8rZeFj9DyPVWAK8o4Hc2HjUgvKFANTbB8RRmnKxnMdb6wY46FhGNT6ywoA1td5rUh2HjVdhqF",
  "key26": "3DRiA5juSQ9vquTohgfgzeXdtpaynJqaxCQbE2qBUvvE58qMT1dLqasLarymvTggZdY7yn5mzGFf1CEyk8nXX8Jj",
  "key27": "46M2v9F1yLRdLcywapdTQvDzemWweY13wJJKnmUR3zKvhYVyDpssCVxQN1xcbNcgYhwucTDPJowgRGaPWUsJf5w5",
  "key28": "QrxJ76hikjEnB7oQ44nvW3VQwp4p7VmowZ81bMXGxdw9qLZ8x7LeSjkdFkxybPqv1TF2CiQdp8WuCu4BGjEbCne",
  "key29": "52LA6nAJyuPdfUDWrkDMBGNhCGgXFBySBoEvKBrRhEcc2LPhUyYNFDuJB2pRtMcfPPbtq6xkgufyvJTpJSgHmYbg",
  "key30": "3v8wR4KFos5uYEZK6wHNa6XPWUP5RfTB23uwFNPcBVSBTmE3iLsMzCvgwekyA5WoycZG1zWk1V3kU4fgfw9UgQce",
  "key31": "3EdLsDFiA5j7dtMV3ML9FetQAW56QtLbf2tvNXN6dEd5CMc7xNPVjSRACHbZf2Wy6mUHguadLwcSEHo6C6SjiCG8",
  "key32": "B64ZDTcXXCANxb1D9fBzxMPDDYrs9BwXhZGGv7YVpaakUCwkXY5JN8oSn5iGGADri3a2TNpGA6wautj6hWDqZxg",
  "key33": "4w89rycRdddQHFHeFKuAQjFb8Dp5GH3mD2VkxgMJSYFhJMQ5SWL6a8VfehViRvTqy2bZwCP1g3KojGohndAx5dWN",
  "key34": "5QiJS4FnL1P8kBbbMu51c6gv8DYK5nVCWuRMAX5a1c1pvXVB1Lu6iYW3Fjp7Be1pMHKXpEj5sj4YN37gpPsJsuqe",
  "key35": "4B5LnsS98roa8F4grp4BpRg6MBN3Ckm3kJZPwuRnVh88LNDi62Z4nUFvd9DNYFVazh5tSPNaZCvDxc4Cv6yEJVZp",
  "key36": "2x1zvjCTEYybTy2AED4eBmseLSgDG8dfBemhxwi5ruVix8sje2iKL9DNMjj7VDQwPzj1ax4o7BV3HHyHx17rm1RV",
  "key37": "4WYoMTEnDjfUQak2dqV8Mw2pPD9yGmHFgrotq9s7g8HQVAGTPdJRKoGZxM6Zc7duCKiZzVhFwxt31xbohNUvwLYB",
  "key38": "2JxPgaeobgPjeZkStcRoJGxmhQsamjtB3KRxD8bbvNkJ5dj8EtPxSSNa65KUkxma1JhFZdcjQsq3XcmNkWstuxUK",
  "key39": "3me7H7fdYzCz3w7Na1dyd6j3HhE21cSubMQs5XPQ13vCQiFkkGifhM2UGqbmGAJNdUDoySDR3RZLuSrJ87udkxBp",
  "key40": "sN8Fz9Ub4ESj4tD7g49EXFaz4gpynXZcFQMP8D88fvJZjEfxn931cXB5Z4EnHnp1y63YZMsszNr7JtFKxxrBvYr",
  "key41": "2FSnJxnWj4PViwc2vYz6cepvqn8T98UfpKm79w8iadNm854gzued4SQ5xbx9JZ8rAdadN4M45HiwfKkosX9zxHXQ",
  "key42": "5B1h3y6XfEd3enR6P6XcfjRfjHtTZ189V6XjiZcxWyMg56vZDTD8bGKZoNYyCgs5cbEXVKcvqbQtxRp1xtjNiha5"
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
