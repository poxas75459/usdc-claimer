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
    "gg211u1iHtVXXFjVRqvxu42zomgAvrEYp6hWHrpQkpbuYu26DPYhuTPtkDiGnQwz3kXPJcMVZYUrKkpEhm2jkjR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YJqwHtTo48s7WQg1GYXwuryZyRq8vS4wYawY2THWrtAbLHKRqXH8DG4G1q9MxJicVeQZjGR3FGYue26qAfnDv4B",
  "key1": "4XTze4xLTcTLWLaYerpNtCwUGWGVJDe2p7ysbnHwwUPHau8vnTxMCWBBaypED5Jk9TxZjk1TCS1UENcemFB179vR",
  "key2": "ZhsrQb6P6QZxv5rPkKmaRphNQxPQ5HTRsdtYS3zJLwaFxhymnvczPpJmZc7MwBSE521d4mc1t9kFrrPfVrtiSkW",
  "key3": "3D85vaR2gZXQGnFfnkEmCXZR2ZttaTh5i7b9i3QRpURHYNLcrFe3fjwADhrR3YnQCuBWskSHDjj2XUqdCA3ijN42",
  "key4": "4xgQChQfRuLVxRQCW6FTkecLPJsQrh1ogNoCGWKTAKW36VwZFqJyRgjDWu9nXauhqiz5GKic5EWGxyo94Fkxfyjz",
  "key5": "4sCoFNSA3tQZJfYF5yGNxHboTwRFbfLVXh4T7THvFoGDEKjbo8zukrYce6TFjz4XC8UGENzKq6BdBvaaSnQbqo1z",
  "key6": "5TDXgvHNGi6xM8cqw7nvC9zkLjRG3C4NM6fcpbDHe2Aq71zFWDjZjkqKByR8ZGxTHjyQtauQTxpuqER5cv5yVaWL",
  "key7": "2RmeBR6HCWJs2km2qHPjXWFTCyXDtxwDtJeFpHc2DN2WWVZiLzoQfbozFFFmd1R86L3Zv867E2tcdJvbJTgitX5G",
  "key8": "38TXxFVVN2KdhbswreG7MWReiQpjQQeSafi6Wo8HHdPH4XRFjqB4nvAQb4onEEkjD73CJxtdaFz3Fcvi6TjMrpc5",
  "key9": "3D4g6BEU3wjgxJL2ytY8e93KNFKrtNrY2k8SGKPvRHpSoZDmaXZRPyeFNoVqxvqcWMLc7iiFaXaXZfKTRRWXcGF9",
  "key10": "iXJFKprp3JPpTXBZsur7Bj9a74EquMkxcvdJLh7C8zQWeMdDye6jw9m9F3q1zhEEC3ZMZPgCfvkDg6ZB1BVo8ME",
  "key11": "hTtZqZnyR46pGKvLaEu9cAaGXvmucnfnCx9Q61F8FFaGB7PdDkNE7UkeC2LPEjfBnRrtYzyobXrwKSxPXjPDKKP",
  "key12": "DPHEoTeKYjGb8fa8wn4iyehLvGTDFFPMf9QgbkRnYVdcHhwnUzZuyA1CM8NP5yMTgGsvfHtKz9ZwJucDE2xoXKm",
  "key13": "mbpoiDTD7rMzzRrRwYV7cxUDx8qznFNsuLameNHQ4HBFa5XnHFcoW63zxwRiuNB3Qb2Xna4YJdaMwEGNwwkDQff",
  "key14": "3LBfHzf3pSXCxDSPGZrf69zzZgAXonbsLFAN7oozYZ7Fkwyv7rVbdUMeKKMMhTYWDSaaZ7r9mn7r4vavHkRZK9Zw",
  "key15": "4At5VJStJmGkZMKau2Z8hyKmirJghrQuFVjtxEf2CNg9AazAFfuwmxPTSRcYuPwPWyvjr6Wz8jaEsjEeyQt1aEoh",
  "key16": "5xKQRmZF8SUMHpKqUKF2iRKWPi1rhMCZcBQKShkKAy7u1HsXaVNRnBpT9oCjhShmdP9sTP9NXCMMD1K3DSvqY7Hh",
  "key17": "44QujWt1mx7wTPsKNhdd2Shcu6wRRH81r99wgcMwAzgcY6JpXHF7LTtPuhGLvd3emnWGBsA4agWbLCD1bMvEpyMS",
  "key18": "27JmMXLyDbpd1MLUEsfyfXMbpbdgXokQAMWjKzK456o9rtQeGT1csaxSYviLPsBeeDBfnpoQxGDKkGq3eLg3wi7i",
  "key19": "4X2migfmanPetCuMGCFqgTHc83JcsS1EfuFeq8tKrk7uPoVJhSadnvHNVWnyUrRZRRyRvKA99AHeUxtB4oMuHMsh",
  "key20": "4zn1zm7ug2yjFRTfPSfYgpaisa68p5HycVuQBpGVCXW8Vvce9AbD353onZytyVnRoVejuktYhrK47eo9CNVoCNUA",
  "key21": "3nCoY5C94gQHFeoncV8Y1DBFmzyWPn9KsyzJe3BMdZ6uXkfLmi7Mkk8zpoc7A5Ji1Pni27qirrHyWTb2wycYpz1W",
  "key22": "3SKwc7BogeYHdKywQHBRewinHD7RUdKEqamEmWmLmDxMiyGSZQWGpHPC8gkByrrXTYURa5dz8w2QzZVDi46pGRyZ",
  "key23": "5RzZ6j94a5HookASJUHQJrgx62FLy8ssq8CGX338VcRKKHMCqd6VomJ5iDD6uBgrpXPSDDpYYRgGGokPHaf5UzKJ",
  "key24": "3juKPKMVeJVe3SYU7KaiTFoVv4qg3eNriv6r9BQvMjThzjR9wWjST3JnZuBYHWFa6x7NNutsyBPzY9Fixf5C7Y1U",
  "key25": "2F1d7dfb8B13hiwuFxk55WEmR2HAwNAekvrz6xZADeAi39vzvV1KiwJXrmrECaCxg6dBkYAyAcnDN31ie7mAYdK4"
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
