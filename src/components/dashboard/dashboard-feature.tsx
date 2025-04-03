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
    "2YoNmHpFYbLHYdEAUtXkvcUxzsrxcZz5k8Z57FuqjfLq7ZwXsSZThgqhS2rki9H4ZeDhqRJWmorwzf1uPmPWz1io"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t8f8Y1WZ48Xqo6xTz1hCBmjDMKoFtRkpNTYjmTsZuWyAjw1VdLtFxCaCSApgjLjTSMZb847x9n6paRBhQDZRc1J",
  "key1": "67AzYd5hBLbPmq33sRgX32KWVoVCv1bYXL7DAGcr6xz4dBbGYgPvnzMk6MfKNrAJexnSZaBcq9EaQ77V6NG8ZJaP",
  "key2": "5jUtADdQ5hWHF8kyMf1amnSyhDWEd5EWooD6P9ohYCv5tR59KFGaq4jwA9ZBwFH6LsnEv7GsjcERuASRmHdvk6eT",
  "key3": "5uTfFq7FSbDUdXhd7txNho6FgBhgYNLMpLJXWoTHnsPNdmgwD8XV3o9bdoT3Y8zDdXkfP7Gcvoob4HH7hxKnA7nS",
  "key4": "5N4saGobPkf31d4Psf6NVxCvayaacYVPeaTuijPy3cgJBxqwqRuxT6z8Svy18X4CNjDNrqB69bcse4fzuzMmYA7e",
  "key5": "BBRKc33zbL3K2XEmySv3gXmDHoyoMBxjqrDwJjiwtPZQBS5Q6hEep2m7WVnPFqKwSHvWst9ubQXvbGEf4WPxohF",
  "key6": "M7FJhwGUpb169hqChmNMqtdwCEUZQphqZH5esNoKfgzNe1Y5ZdUKNJ19fwJxXpvGykbENhaF1nBSDP8XjyLKNFP",
  "key7": "cMo9Jw5wnVhJfSTT5FQZsxZy2LW5hALfBWchsCFNpVhEK7meKt8VcuTywkbxt4yenzRu1Gi6HQ24Gx2RK3GZxGM",
  "key8": "5XDgQxwwm8HANKhVArgszSbEJ8zNqasbRwag6njUXJSpXcAm6LaidzsXU7qnjLfVXs6sGK28p2GakxRrZq2NjUoo",
  "key9": "5qoZxgUe4eDtRpvD7FYojy91LgNGXJqVfHmLtHdZo6eXQ9QXotaeWkRGsthJxDvMbT6FDZ6n54yK5EBugDQd9NMJ",
  "key10": "9hJ3636yYAn5XYDiESJDb8sNN119CUPg7JPJeeruMEBMcfW5R2GHzX8tSGku2Qka99euxi4Vz9TyBgNTQmJGHyz",
  "key11": "447qtQuB76HgRukfwsrwBqxhh2ZXWqYMD9QbWHtizNpm9MT1BYoFGzWVnyut5Um9dd1VJNAhEZ9BpubX3B63begL",
  "key12": "41P4ERaiuJfemsNsxs8XLHJkdDJs2MzidUsRhGjsjx5d7EoUGfav2LgPkk8JCg4NBgWdr9zMzpLvXgBSizTvwYnB",
  "key13": "3JjuKULPi6kg2WdenonufGVVXZ3KojJsGPHaeeuizmK2niwH8uQiKSgNEh4rBWW5pWZWjdESEY3Kbgu9oAyQRncW",
  "key14": "2sht8c7zwjaJHwKTBfPhpDTbS22WDCroXR9D7T4fdDiWz8cRUJJBrif4mvtjoxMUffuypqWkNkaYq6v8ED78E2L7",
  "key15": "5o8Y74qvEUuu8Nym8EmZx7Lf6a2Hgy5nvPePpVbpCm6gomxLtNzHnndJxFE87xRWwwGyDMEUH1HYHTVuDW9NJKcA",
  "key16": "3hnCb9vNEBVEkE2p9sGbnGcQmSfRXbDRajJh7fjrp9AGggegzSWgGake2dkVXgLkGbgxJhKY7CL2eNC4a4wERXGq",
  "key17": "3tMAW98oiR5KLkoGEZH6ptrzpJQH18daSQWaFGCYffH5NhoGQVXmpNymS6izyKny6TCka88RZw2dDhEQD6UDxLo6",
  "key18": "3h1nPd7CE97vsqwi4jKNZbD3nLmkbJeNuK1wugKB3d5eiS4NC6WpURs5dktZYKQBgapyqvkePGNdbtAS4EHrovDH",
  "key19": "PH6wxaAQLHV83DwCQqq2MAY6VuuhYpTZvEmKGcJtmXN21cy4Zhv825t3MroT5kdF8QuYVVQZgfeZ8qERwaPweK2",
  "key20": "3BYZ8rUpqCTtQd5oC1byxnkZHkixaHxAWFxNRjQA3KWkCykAC753616cSPSBaMVdjYPQY2traqfdZHCPbJtjdM6E",
  "key21": "25iiSMK2BXKaV1JhDoyApxFtVkqafFMZjimyQKFDXB4YhBgVjF55fTc7uD5rX924MUKxvPViwJqP2xcXqf73noyv",
  "key22": "PrUrtLnf1pjPJ4CfWc6jkXb1UJjgLNyA7FNzZgWiCqAzBesbj6xKRC9jtFHF7UqfNa1oRhmc5mijqU5x4Hbwfxf",
  "key23": "5jdpF57Co8DFV7WkedJQ4D6SHeFMXwhaCTjS1MgFPDN8QvNLX9nFjNcoW83Rcn15GZs3QGraLnLD4n3j47pWevdu",
  "key24": "Kaa4o8BQrEoSQxTokLELm2SWK573a2Mn86fFqLgrRtZifwKBP3JeKdtzLDzEyraombWBaxVPKpn7GspyoPV2jHS",
  "key25": "5LEzSvzptKqboNFVWnBBzSCHRGiGx2SdayA5BUN36SGiYbQcvJkZ971EAER4uSEG4XWg3Y8Bx7cGpCuzVtfNb1Fy",
  "key26": "3VNJH6rNJnqkA4KTa28mmtoiZUEi8uvzgPBXXgsUGc9crkw1GDyuFoZ9mnHnSJsJTHz6kRxB4PLwonn1fCYWaLcm",
  "key27": "4ZqtRsy1cZNVWoxDNUxTUyxAbfeLScqFxrsJdDxB1WLkCstC2cZLRjCVoDUzokLAdy5QQDk37mffS8Xn2yVRZDJk",
  "key28": "29VvzoEWu1Hgrz441TJmqBYPStLn16TZMN2REru15QtQnS64Pe637L1qfZTvF2kAgTz3gfU6M8ieQUTxPxnMkNdh",
  "key29": "3Ynu9meKebJfuZzGWTb2Zmyt8SCggCiFwi9qgLL8MmM38tr4wZ8TRzH1ZBvmqpLFK5nsteSTSn1MStQckYELoe5j",
  "key30": "oSwApPYb2Xzm1U53cZBfz7dP3vyTCvf3bKCRtfFbwm6UFdKvFPgGrWCkufKRnesoFmnQihrH3V38yENstkzhT3X",
  "key31": "21XovHzmYFbxd49fyjuckv8sf7Gr6NppVKyGpRLtMeoMmrwzkdf7wKZctgMHBguB2pzi7pcq1tpt9r51P59oHaQD",
  "key32": "5cNtri9QfZHMcsRe9WsbkQZXGUBrzrQqQKcgxcLRCSzrpRsTRCzoEFYbCCYGMTLEqPAQyiYZt1ApNBwuNv8e5Uid",
  "key33": "4LyH8kDJGfhz3bY6sbfxJgb5dNLw7rwDyUPR8SDXiiCWVNhWs3mPocdQDqdskNj5PxjQ9eKWiLC1L1GpuibhmLhU",
  "key34": "4QqpuU4UgxgaaPQZCCRfxcmqjBXMPF1FQoWqz3JWo1VYYALGXkHWSX8J1BXoa4kyibE2EG613zskWWWoV4UKzcii",
  "key35": "3Jdz6JB3rjd9YbRgBcZ9VgovWQ98BtysFZtWbfmdXjhsea8BeiZnxUuadoeohLf6Bux7BUX4Sb29hLCggnuXdioQ",
  "key36": "ntd3djC2DhwAVehQtyUGzdciNdkfHs9Ko63qZ7HGqfDZoWH4TyV79CabwFnyaPMNBSdPiVP2dwTf1R4r52JsNX8",
  "key37": "5L9fFMF7BxXAGKmZPz8DPY3io84cNm8xLXeERm7BvBN8SHMtrfr5CbbDC1ssLbbRzpYmNUuQXxgopyhVDMv1qX3S",
  "key38": "5TxmYSUmFZx7Wwi2LUE4aD9V6ySmy6iwLLMTZrhUctX2y4ifeMTXAeWzhMJMWGT1H1rvup7VHytpQgxbRX1s2kTi",
  "key39": "2SgAADESvTtBubY7Jbbo9oQhi9BNbixBtWoZ4wh5qXPDsby1oHss6SwxwmcfpmpSv3R1L1K8St4bkCPTAbmrNoAT",
  "key40": "33fbJsX6tGDtfbZtZmCTpKEzYENSeQEU2BZ61eyAzKydMivYWp8jybzbEcL6xmdvPjhBXTnfCEibyYqdhoUsj9hz",
  "key41": "2dBD68LuwnQbW5pqfcesKTvNZxeHtCyHLPop64FqMcUuKFYCE5pDA31uBSiD7CFkP52iAzd1dXaHTMvNDKsXA3H1",
  "key42": "3RXtq7VghTSnHFZYdsBfbCpx7QFFVWUfjamssJAN4jYfYzg7TnXyQcfvUnY573DB6xNT9hFbrY7RWdMiru3H21iX",
  "key43": "2QvBjChbTPFzhTziAANaeUCdw5LXRxpthnZjE4K18cywaDVYxASGSDHUat4P6w4Naeas8JcnCt5RVtQykecgQTs4",
  "key44": "66Uq2bTRAEV5R4aGuNpsBFAtMRBcZAcvZutfFnPZUaERf87VfpVbq6x4R3yYp4RgfmdqByxkGU3t6ZscunF8sw4H",
  "key45": "2BvFEboouUHHrvSyWkZzcgdn21SCqWLcFJ2ciFY2GPUWexifQzzJgLMGNVqGPiDhxNYc9CjeV2oWPVNf6sbJcX8q"
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
