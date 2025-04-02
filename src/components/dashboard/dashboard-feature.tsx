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
    "5oGf8DZJ3MWm868bApamXbRsxbVK1VNBJV8UwF8JqDf4CE4oj4Hv1s9dhskBU7yHmszPPczXbHHo6qKudjAMZouS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xHWfsFZYNzqcuR5M8ymEiAu2jxMMxD2vRduc2WaoH2Fx9QAN4npEygSvFxmeAwYGRosuXGYJBmF8ja6RZ7HM8fJ",
  "key1": "3R4wZ9wDWEKLkmMJ5BkReMaDxT5KwSKMDUpr77zrHFQ7gZC7HRCY2Lpjj1DyMtzLXtQZ8W2nUQ5XeT1DhmVk6LKX",
  "key2": "64cY34NBYAw4VU2jdyDPtxha3TU7A3EAGiqeNLb8Vk1VY4ndAP8fWbr29m7GKGmybbpWBJeErGVVPRUa5Xup9kKW",
  "key3": "3YGNk2susth3qkYa7Tk3is1MxYKSajqBKtkNbs3EubcLd1g9d2bEPbuFDNQqHYk37SR8d6iuAxeNn7TfhtweQSE3",
  "key4": "59dzYtwc5JwZ21fVGrwrNND51GHhMrjk6HUgemP3LLNwczar1dRqKBNBUvrUDfW6a7QGyHkfPT74rVebaHCdC9DV",
  "key5": "2bf4pECGx7eWTvpzAqeJfpqGF2zrd1jktpDvJvJuH646sHgNtdx9yUYt9zxTHam5ERWgC5ceu1nQcFmnE74XnkVX",
  "key6": "4cURTYZ5P36LWFccn3kQJDLunhQjgxyMrcDtHho1CmNMqgUDSPEVTLCRB1WvUeZoUc2doDg2ACSfE2DVpDHFJ4ap",
  "key7": "3NaJoMhShoNVuXTpjPYpHY87p6XvTsmpug6EaaXPRuixQWhTNmLRLqHzzavBAC3SMCyNYekTgNJZjJ9FhNJ744Mm",
  "key8": "2dUvpGjwqnznAvvp7tWJdi1YB5us2zEX5CgDNJdT1DR6NefntWgyKtwi8mBMhKA4V7YLjyaznSum89N9TXi2PQ65",
  "key9": "5EBrY3xgHGChQV6ToT4hqa85sYh6W9ocQxWUgmcCWrcsifUMzTs3zZR5FTSviJgeLBa92bShBnjhANMDuBhoSSXr",
  "key10": "4amxiMbEYYkmCXkbfEjkgzL6EsaVAwaG86f7dSyrg6QvxNPFg7jCY8zrSPtztcCfQPPc7nRh2fLdGp7k6RsJrnZn",
  "key11": "5brQGhMppQovwPm91WjtQ7piyNr9sn3ko4zRbiVbCNdcxE8JdoLsZYab8GjBrpRxTDDUSsGfgvjQbE6Wb8WCJvg9",
  "key12": "4s3TenXz6SJsqkjUeXAcFXTJyqbvibuP7ovwn81Q6ZFNs2sPpy773UdUZh7Vhh37gxeeuKsbCwPPLWvU6MsVFFyW",
  "key13": "5Yv87CHWwdKU18M7LG7jp9UJjGx4vVM2dvR7WE4yVqPbsJpicMqqPngNmbiQvyLf5oofEAtyxngMGY7Fj8zsuyLC",
  "key14": "36ey97tUHJ2eUcb53QBitW89G3LnpsXL3pocwpbyHn1iHP1caLun8jGRZJ7trrytLsz7KUySFNzdtmQ97QQ8qxTK",
  "key15": "5LAf8bKgTik93Ugage7p8M8qJRxGvuS7f58abD489PnWKrcsUZ5D4Pcvy5HDzWX6eDi4yoJRBuaSbR223nLUSVct",
  "key16": "3TR7A6s5WhC8FzxV7zJABWwbw9vrAvWpsNAKgRFcMi9Gm7FDxirnifKxUdnik7wUWfXyqNbRQHwghzZ1rnoBPkr8",
  "key17": "Hs5DRgAwGPU2hwQhiLfKRRbwLC3rv7zVLpdjU7P5k3V6iiZNj7qXK6XiD5dBCHPgBxRmv5GZZGXSxSwth9gToJg",
  "key18": "2L9kHahG4kv9SBUjtoCtvQZSjTTmk9jSF7gHHjZUuZCMJ2sM4z6EwAWgL8bfTf3DD6NGVbn41u2GfaXnLrUuuUxd",
  "key19": "4tfhr9A7EFLHdx7UsAKj1eVSmmRXVnuioNzgCCJous4xardQ6x27w7HaXTa6u2dW8zXKaJGNU1uB5wo1ZieNsp41",
  "key20": "DfbJDxdw9xC8b1iZcscdXNL5jZnzniJ7NrffDXAvVAhNg7fXeoFs2nvFExcn5EUwFaaqJfxCCFbH7Hog1e58vhN",
  "key21": "3kvs63Gj64vSRmEBKTHkMe6PrXirTeDgbuDMNDCLchniMiYg9b4dy8UkP4wuAJYNxWyZuVwBm5V9KtEPHnzTp97b",
  "key22": "4b8Ab6eTAR2DbijuvNY9ESinFAtww8JUnzrD3UyDAwMtMqWRF5eqDVm72J4mBCm5s6Pju8cY8c8AzNCuny9P4gZr",
  "key23": "4QDHVWzwyTiD5pgm1vzN2zixG7EFwzpAdLmDzDZ6rsFwum9iTLqScxuxP367gMS2T622qmVt3oHKH3bhJGKNnRdF",
  "key24": "2EEx9PjMy5o7J8sSuZ2yH3jkTSCmiYZ21nXFTNoNSs59sQyVGaZ3bDjRbi7uAEjdFthUDjjPvR7cxyAx3rTXA1E2",
  "key25": "5DMus8ezVgTE9yUf7wGBfM3CbbuDmKQHWFACxdpEqfNi1MSBG6btfCaibiWte1x8ejWvUjxjanaSvWhj35Mm7KtJ",
  "key26": "6kvZtUbV2KHmW9HsZ7S3M55CoqpbaeXPRygaGaobQSJYS76tLB7vmYPZAY7JMV3Xx6iM5xRMwtkfyrBEhjYde9y"
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
