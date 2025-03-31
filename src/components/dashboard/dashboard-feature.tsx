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
    "xnEazX8PBUKCjAafjEJ6uVf9SSDgDKCTVsMh2nGC1dPkvbD2wmbBoxJvQcrXYdfU5bT8kkwRNTK1fq3f2Px6f7N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2toyTTqL3ZrdMtGyyNSVi7iBiwKFHG1RbbstfgpMBo3eCpyTJs1PeRzrChii1CdPYQ9mM55mcYKczfMyD1UqvFxF",
  "key1": "4YVBqazG4usftAN9vdABgGUscXoWrVVZ7j1Zc3TmFUn8JtHeg32sufTADztNoHQuG3tkZ82uBd2YKBrNb1HPeCQn",
  "key2": "4fKRKrR8gsfZSXvqSi8x2fXJo8P7nYe9MW5YCgk4q2VzPUdwFBH7mV3BBYuDGr2KwQfBQexmCqUm3fWCNmiYhDBF",
  "key3": "289kvRMLmB1Cp8fpvzoXQpcRZzGaDUJVaEZkZGDs6GeLPs94N8iQXep7T3Cg1sC8E9UDrJc6cZeiHVohetJ926KZ",
  "key4": "4HBDK51tmvL1qYWqSReVz9FVQb1a68f3Tbh721w2ri8ZM4JRZCvRcxZuKYx92CGFKgVUF8s6bZGnwgJ52gkVCh74",
  "key5": "45N3PC7DJnZ7wjRN6QpcNZ2JEhMYN6r2b7nz1kScjetk4F5n1E3nKxBcraJZYbbW72yqw6nwxLavCo99MvbzHczc",
  "key6": "4GeqzmJyat2kU7eZgcthSpmRDcr79hSxxx25NWeUaFTEKj3yWkqweBvaYdL7G6HrtSEK8e1c3E9fFLqKUmuUf8VY",
  "key7": "46XmRNE7iuCtZFAGa3DnSCoraaewM9a4dY1J2sGjCYjNBBKGcG9ZiPffrms3oUmAKoRghi7LuvvEXgVXQ6F6Sqgn",
  "key8": "2ZCmPfBYJjiYDzmMhbUtStwM27psmoAZ454gHtGWfY1jVmdk4SFEvFdE3TDuJcnHs13kqtxJWrNjLshbZQh1hUYP",
  "key9": "2bfxStiiraNi5mvuyJgU6PdazrL4UoMdLUYEMzac6DsAMieEy7J12JChDyhYPRZLR4yJ1fRjgAuVcLmpwtKerGTV",
  "key10": "3TaxD5s448dcBoeJR7bGcGBMy9F4kzcE1yN8nEfESb2irzcXbqZugrAEcpSmbBZTP4Aaua9G6GbmrM8uiQ3VPoPs",
  "key11": "5MQdKCTLPioyWJ14LkNKcQo9XWVZCZLiBjJqgEiriYXxkioMqyabdoexd9TxtvQLpnfm2Ht8A7bhh96cy265DcaW",
  "key12": "4vbZrFGSBCQEEap2TEuyDZj5MJqjs7A9WAF7KRiCGV3BXpuqxCFgDR4LUfpRJwpUSRwG539yULUKjWs9vrutVfYw",
  "key13": "bwj3ibMRZqWqUuQZEuoU8GWygsc5j1MFyMTXjcSoxiWNg287ED4SwzqUkL4odvdvV9ZK5N9UAbRxsyGQd8E3Dxs",
  "key14": "2RnFtbM14XTqcBsecY5R1op8zZz2BfpwMWbqsD8yzTCDvofrqp3ZNATfG5SzGuTHDqs5NF8asU7tjEStHwENGCkV",
  "key15": "4CMztkJ79dt9ESS1KQfnw51ACs9BJpGPwNog3WAj3TjYRjwPaJDTk9FS6xq4U8XoWiEFtJhFF1L3Y9vDt9R1cpE6",
  "key16": "5KnBFQn2KbaeJ9rLEXMfuT6SATEM7qhLivrPiKJjGdghtMv4ZjiA8HwCpdg5DdH8XtEQed78eB2CNtyPyz1zYSZg",
  "key17": "4B7CRuL9rNP8vNFzC3Knd9q226BNHdTPT3uSB9DRMi4zQypC8F8beBndVEXdHsTBv2Bq3dudDhFo5UzqkKEMMHTe",
  "key18": "1yS6ffGDqbXJwDJAySTd9f49mc5mccSkfQgcp4FvZYt2uFMssfFgfyZ1r7XnE8cgfEt6s4HDCFgFLh46csguek6",
  "key19": "JGHEy3xYxjsUR9E1p2tGXUy1nPN5EMnMaTw9s7Q4DWerZSMtNJWQrF9zesBfw6a5jyb9FXgu5u7MQH6pGmqwmsr",
  "key20": "21gGSuXm5aqPNm7LJ8gdAxjGCCDsWDbopwtLkxxKYCZLSxjjV7hsxbC6u22qK6XDMw5wr7gqv6GSAie1wfwtmaK4",
  "key21": "3zPYZgP8ZRvK81RdLoq5iSucoNd8ywyorLXiUkJxb6iNhAtnJG7t6w1kWbddkKqnHhggkmZnB3kehZdtL7yYta19",
  "key22": "4Xe1qXDYQtQKAYLnfvVm2Pex9HCEnxtjAg3fMWFUbDFT5k8nPoExN9UNZEvbH34x2FbnkFXuxj6at59tN88MGTmo",
  "key23": "2jYiAR4wu6cNnjC16k3B1mB8g9Yd8uLpeAStPBVHoSok1kZx5wRBEKYDM9kXtDrckEJY59HToc2zTVGQ9AvDFR2o",
  "key24": "4gf7w3eM62JrUPMLfie5asyMi2QgQLx8DpQ2EbmzPzwVjLyXzu44TXoR5ACytbPyM3zzSyjJ6PN3YyiRUDkqmUYq",
  "key25": "3i2aeFuKWYbU3AR5P8MD9eD1RR9C4TVWcViqMCEL1EmywcKbK2mrE1sPYYck48p9m2BNqSeVF9FST89Qm1EXd2bN",
  "key26": "5332u6SxZMSJTh5q7FtnCRffhrYp2M2DTUd6mHdaEpnKyzwcbqcxNVU9Arvkr5FGSVULrgQtBqU6VtQcibGGLnyB",
  "key27": "2dQQuLf8M7SGNLYEKqMKXfStrX7cd7kZJQaMWTWvhzBsz9qY4Gr6YoT1FZmGTBuYNMwdhQMUiXB4YiVPyTapgAUK",
  "key28": "2uJc8eApxEWtqo6L73CDcuc7Y7EFor4SUVAzVgUp4n5HB9szGGve5tsEgpzSCUSMLwyv7zWVbPpJw9NYf7PMGZeV",
  "key29": "2tDCG6TZTr392cL21LvPwKfu5pNW7GpnaWwTQaUnneRLLHX3hFgWKgWqfx8qfBy9mJaihuCAUusWVYHsZd6Qxyzb",
  "key30": "4Kb5s4pQADWXFWw2Ymt6BdKLR1yeycuVF5eEFxmuhDDFMArsNTApXwjZeZAQKNJ18R1LVAGWCkrDCsrt7gfy2rvG",
  "key31": "3L359yEBTsvDHXhhCgLVibLv4XUbqvam3pq7V8PLsoZBnm8pdhbm1XeJapgqGcaZESdCmH6VVWBrEKrEtibn1pJA",
  "key32": "5dF4MZDnW4RdcL5XmeuaP2ejp5MingS2YKVYMQ3R42sxe2TJoVDWMxjfoyPKXqiGqriyeBxZrdpQQoQAjisfCZ8Y",
  "key33": "2p4VtB74HGp3hsccpb418D3ggiNXrEZenTqPTn4cB6qURzm7CiHgLo61vCc1szn4zGthApKhrTycrHu5PFYLyVvz"
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
