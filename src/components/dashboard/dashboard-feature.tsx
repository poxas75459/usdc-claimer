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
    "4wQndDf9NBxcpC7zsiFR4c9iyjjpex1ds3avJWE37fU2UVDcMev1cvfe9CSEsrwcuriA7i7unJUXy11TUpLZ3TUH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Kpb9TEceqJLtQC3yyVWi5EQWihyWKe9ahD6Exvt8KxRZstEYaiweVSMNkVSVe7qQXYkyzZ2qQT33NToqHaStuKW",
  "key1": "LjpFpjhwa7QuBQJ1Em4nsgB7zqTWodqGJxrRG2o1UqMudBzY8EewWkizxieCt1SNgXaanrptpBd1yE6ptAA61ee",
  "key2": "2PipXxf1uPEiwS1sDeu26bnLCPVYsmSqp7uAYEJjAcLwXQ1yqXDFwpx4mFerFTp5X6HcKgpXgxvCHDXbDwxLcX42",
  "key3": "5fqdeXDDAXUWmf9uaaEkPXT6VTZBoLCaPgqTBMGdSY79jR5R6EAgm7YjNbdeL1eBnLaEiCqTAi2opcG47mZ2xzSC",
  "key4": "piCXtMBsHSAmCx9cPBCrwqQ119AN1wRmYygNpGEkqSKmZswTQtARNwuZ8E7xXz7SJnefwt7kF2JUcb35Wnbt9dp",
  "key5": "q3pjpBYYtoVCDsTmrVtnmfJRvQWogE5ppoAknyiRRyYXKC7mAWz5BSai95MW8yHoKJQeTWmX6sNzNqTxqJEkbu4",
  "key6": "4bZbznSXy3vY2qeD3hAsvbXcmPtoM8jP77cP7zSziNu1JYqWWaDSNQc16vDwYnFqvNQphK9dD4PUhcgMNJ7RS157",
  "key7": "4WYVmFLsDDM2iAhAzR9k4m2Pf2CGpQEH9k71dN1TQVwkAoq1Ropwst268bzqrN1oEim2zUtVaNYjSkfezA3AHq4t",
  "key8": "5LriLoJhQHma8V6AAccdAS27DwhfpUYVd8PXiZFBewgELwPt1nzTp3eZ9Fn8L99EPnuUzc57WdKvwLhhiCVLEaAy",
  "key9": "2h8ytErLLUoeJNmJshpoH3hJNMte7q58iXi5TaRAeiJxAbL2fCm3LcGGGujbMs5nSRZPvgjULTT5KbPCJRJEq4Hk",
  "key10": "5w2yusF9Y6Y21orxxkv8f6XTYJtJSLJyR7S4aArS6A1RVs9oRvjzscWdmgT9NVWNHvFEY2hmsZ9kqKZFVfaMAzXP",
  "key11": "45jojjoNxFWx2wNh5tCt4mjKWuMCg8SQmhFHEi2ULNHqqbPM6PjbWD24xKnNM51ukPT2cyDNPqT7j58EA8k7JxfX",
  "key12": "4VaCEzwDoBFQFKHc1YFxXz6x3jXCAoh9oB66GhejKie6YMgwo7x7tmVKpQCMW3awQX7Au7AtGbxDMrQqEMHwWvuh",
  "key13": "5Tz8L6N18fqwjqjwsuo8KqL6yeBGn3NCPZ8a4Tt8D7m5eji6hjnvaEJ1ZYxTjePGd4Upj2bime6dYHkqT5281a5H",
  "key14": "5z3DQQpnbrezK3SZseyPqoVcrnrSuDrv7TnwaBJBoSjqcD5AVPcrpYA8SefKQifLhgkGGnH7hmptkkehW8LqYJVC",
  "key15": "2CMssNfGRdz5hWxXFJTnpjJMhEhfHuaMd8yVuL8ngmf2nsTntAUpLAPti5dMN6FQQBA9MHn2ZNvyUDNfcRhsYEti",
  "key16": "5HrBz8o1Q5SyAWPPDFbyQT2qAbQFMwkTDfiFtSYWRuCmJrbzrLL7yEfGPm1NCM7E4dyEd2PedVKhGGELx2UNdSff",
  "key17": "x8TouQs6GSDZkAdGELpCHvPhBmx3iuMD5VCQVUqM3YozkNW4YzKNu1PJynG2syhjSpLGANpJp2SmBm24QkvtVFi",
  "key18": "5YH79veZUjPZTQKYgF1ssFGmLWvnkkNRP4F8GCPR7pk2HUgsJAsWQV22SquqCCMiNd6YZsGom4WfRxKGg8anLZih",
  "key19": "3ZLKvhVZTFwi8jC5NawfMkGECrC7DgjeTLytosjVRMcctBJJHUQeSHFiUderKnGLo6xgbRk2CMxv3TgZZmKVW1TY",
  "key20": "2xn2jMiWEsawQWqAgpdWqa5VMKz5Uh6tF6L8GM9UxMrGJG6Sm6KMsc8QgaUyrfRSsfnSPn5WSQMVtW9TGW1z5PfD",
  "key21": "5c9aZJcxHxj3he6mAymUExVVob1HZaGrxPhPKn2jbK29Fkjh79M55SvfdX9YmP1CbbJe2oEk87ckniDGpfv2DK3m",
  "key22": "Ni3ktRKyTnbtMd8aZj573vgXo7SY3U5HACta4pLC5fJ72dxbvKzwp6Jdspf147sVVJbJszp938atDcRAdt77uuZ",
  "key23": "M37e9fjeZQZwAwX8ezuPqEMAEvPaBVBzvJDrDnatXaHqudDG19m2NZae1KRuGSmjTVTuvXkamaybVkUC4HaDRkZ",
  "key24": "2sbKRNXn7DhxPRDxZUFbbNQGQcjwNh1nu73SEie3EKQfPqMtTotAh7Paf6QMWEfZPZDpHkdsCsFz2Cfv2daMMe9C",
  "key25": "pBZYddyqHjdgA5ds5vM1sTghwNEDEhT1qVFitz42h4yqMSjCEr4SQEhQVyQMwnoJ2CovuA8d7iMyc8PtqCXiHnY",
  "key26": "25nnUB6Yre88RUC1PdiABycZFXZt9jiXG3xw7aSZsFaQ1DSzaaNPTvdc7UJtMAZy555jri5UzAZdKMd4NeTGPAxm",
  "key27": "7XMDSrAB7MfMogsVNAyJi1EcBtYhrNjQVLyTAPHPaBFNF5oHuqQiTsWyVTco3k8AZ7cLVNVAau6Pq9jPxwqSkdn"
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
