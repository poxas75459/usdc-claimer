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
    "4uZc9Xwmj9grV3XiFpbAkiyneNEJDjQnGxMo3WJN4XQuMJHKrpF36H8ppCbbUuqKmmwYB7j5wMu5JhAhFia2LsLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55iYAEpFNTAhGLiWyZPxMsfY5fEa6g8hukMpGWPpsSn47bGfbEn2JR3da9qYy26ekuUb3x15oMf5xQYW93VVkrJq",
  "key1": "5w1YVcgp61svjDj6JFoH7s75A4Qt7inSku7iCkxQQnxbuD1WB89ywKyJHGkBeUkPVQogYGtWrExjjfhtrxL15q6g",
  "key2": "24DSd8AeuT8XKtTzssaJn5Dszv7tTFkYw9vCKMT1n6x5Ugn4asCC5fXy52JV54yEYFFq2a4rBNMED17KfcTuzCBx",
  "key3": "9ZCGdY8GcuhgRJM4QJxDFmdo7T7tFPCwef32ScvUocEogVopejcbrwS6NU6kk9znD1ZrgWaanT23ecrYve2jXh4",
  "key4": "2U7nr52QQbKs1HoydFFuLWzfxqDyQibdYHiiEP8t7x6CWWXna7s5G13bzjX5d6dx2ju8Srojf1suDeQEoXAxVact",
  "key5": "4FjY98t7YYcXHNGZ3Rt5wnM7e2FSsJNZsbykEZoDJzXvzBaWsm8bvR4p6tgVK1YbDMncBAzBc6NPTQ2Bvikj7Q2X",
  "key6": "MT9QVNGq1SyzHGTsBuPrGLccGucTYQ3T2TLDNRovYtuxSk8sosArrvz8HR4rKtHncWmKW7vBUmigG581XYFdPVG",
  "key7": "2LH8Ph1Amg6ikskzqy4AQLLEW4wjgEKcY4T8yKFrfatCsFuNZsK5G4idwJsikAUQjjJsPXtLwJofffE9oWSQj24V",
  "key8": "5tzXyhsVwYbisLJu5jkVDDdPD4HaFRiT5L1YQ3DTiWXWZLmgkTUu8ZoVnFhBr8Z45K4R5TzX3eCEcLYxVfdNkvv4",
  "key9": "51oWYdRyVCZPPPjJJgPk9ccGnyGKXHaGe9ATzPrxMnBGzSC4jVB2s3W5e7U3qqY6BLmTAXAY1oXnL5ELqcMHK3wQ",
  "key10": "ST18xC9fH55Hi5dKPr7vncxg8fsKcomusXbStB8jVMWaxWKG9oTsxbVzQqWbqBeXuYCtbThsmT6RySfAN7Edyqy",
  "key11": "462yGzdRWyBFzR9UQzMLQhqrY8kuVmhM9dJrsTLp8YGMPirRbgB35wmS2NDkwhUZrswHKtJg2NMiCxGC1XYJ8jN1",
  "key12": "5GQjGRhtphwEBYd97HMseVti5skpXrf8T7WhVgC7fABqNzkjx4Sh7kNMQJfemeVfEKpTxdMJvXAe39VX9CT9Gvup",
  "key13": "5M56UeZS2FtwpeZkeUmvRghXvEi6r1jhyFwmHy3Fz3zGvCPvkpEYPyngXKDuDLHUSi3z4bBqWbJNc1vrLMgL9jK6",
  "key14": "2A63d27tsddakZiHJmbXD45a8gnGxunYHSi3QMEi5sc3VoMU4i26qx2ERkqJGg3PVYCFjNHknnoRvXaGEnDsHH39",
  "key15": "5cgZGSAeaF5MMY9EkwPjgXkVgxgPz7XVcdzWZvPMcEWa6KXbMAajRCH7pFWrSqGLK19V4RJG9FvUYHMgjYY6zdAK",
  "key16": "3TohX5kALRFh2v1mA4ZzDg6oitAWPWDqb4b9k4jcHQPMR2nucmKxXgt48VfZWNFTTiPG673ssVCtjWDpQpriEqTS",
  "key17": "7FbajEcmXUBekVWTx3tCA4URAqTXpmpvaCqfv1yWAvCJxRhAUS1Kap8hzUKmKtXmhBfN5JkCErWzAJLZco74qMH",
  "key18": "2qid6UYBnW1tTm9hforLVEgC3iNhAQsD6Ft1fP3ZBvjuTYk73gebvnVDSAUbYphY5AbbQxs7a8nwfSUjhwvNF1sW",
  "key19": "4qxcDAfxCHh5MmDfCunTf5CH3vymuHVbjoJJwxRBRA5wuH7BbER8uK4E5iqWJdxMgwbvKwSWLJHj2h3ZKtj6Mhut",
  "key20": "2KBrdW61bKfSFBHAvf3HKXNTnkTR6WRGdXe5ongDE5cxGm8wg1MucsZgiEtQU1rUx2TpDj9wpH5rx1z79kySYGeU",
  "key21": "pwi2YeSWv2WXx9Dmo8EykAjN4gkTbXkGkKEEhrMUAy5gjXxK5YeehyYKvkSHNxwRHBWSJpxzBC5C79gAwSSbFU5",
  "key22": "caHJpn2SV5CV2CZeW5pZKVTftFyK3WjGtnM5T7bKE9dXSGwLq1qTFp8WCiWaZzuAFC8BfDadnXv2hzpGwt2vbmH",
  "key23": "2fagjEQVLKrX3aahhzen1HogyDhtpgYGMNHCr3qf45JeCqqvhbFeZHggibpSKdZKmWKzPsfYXJ3FThsdqLuQVkfi",
  "key24": "PaGfPgVbJbQiXHCsmRSDfs6zShQy4wHdQYGHrLkhGcErCQQVLjhr9bNdUvtC4WT25eKBPPopvKzhAfNqxrxpMoS",
  "key25": "4J5kKAo2rWZxi5DxVGkgAnjLHLf6hDgyctMbFY8L6nH51YkteZpjoga4Gdu1sxJcVC3c9PRxqWWBWW29nYDajmpk",
  "key26": "2xtfpWVBSPBmqCDyGD3KX1SKSNzM9tTr4v5KRi4Q4Zt9DqaXn7c5i7TCvdC4cxTmsuX9xSq9P3ao9zDMXrRqKUpP",
  "key27": "34MTpzJQ4anAWnQ3Za6VRcvb4GyMSJweCxrVbrSbqJcP8p1eSM3UNDJ7XUPRcba4nLTFW8mvGyShC4Yt7oeK7erc",
  "key28": "65CJoVzmgkZuSFf6cTRzBMfSiDn8dNVezgnVFmrgmJKwEVMbxL8APYzF1KTFUYhtH8JjQXT73ajNLvk8wm3Xdt6y",
  "key29": "Ftq74Uea5oHa1R252N6gYCuopr9JiVXSERDNaL5hYpcte8zYYbRdidqHHGTB4h4JwpCRFPCKzSwe4o2tSTUGTqT",
  "key30": "2wNNcJ2fmRZDH26k5oqxsGwrn1vkwsozEd1Lvs9pJUDBTwubpSrjoBAK4JnmfTUAaWhJLn5CnvboDkbVU1fSjcG6"
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
