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
    "fkHJJmG9Az61UNSbA75jfK28C7NMwnzCRrPRoDTpVsHNQbGtrMZeZd2mAesiBqQY4m36C8K2qVLLorSMU62DyBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NTjhLiCbNvcB5M5vHvcgW1bCtgQxSFtwUWsFgvCFx5FsTCqmrxBPhx5zHBkdhKetNVnjhj3RMgi4xFCegBuRAyA",
  "key1": "5w6KrDjcbpj1nvKaFMiThV9NxQtLPfSJ4HGvebDrk7NmwBJfwMzbz6LPZLU6hfwm3886r3mabgZNF35BKYdQSVFF",
  "key2": "kMYUHPYdngjtAzFQKAMD2gXcY6emmZ8Jz34oKVmu6Ure4H5PAmkaKCXu2uQjY7Br6D6hXAsLTRmtTBYVYWqpiLe",
  "key3": "4vnKwJgvZE7gNqQEeVzB9a6kvCktNMWS5UinQJd7gmTkJjQgGBeKsNMd3oJYYXhxQeuhPx2gpnZ3Z6ooAFzWWq8U",
  "key4": "2kyztL1UhdoKTRAdYyerL45zDWrJ5NQV2HVtK1HxJgkWN3JzpPtUh2e3iMwgcsbso8PkLJwF95ZicdsCEWVF8mhT",
  "key5": "4UoKD34fSZrsJTTEowXj5pwXnf119ypF4fcCYXzTX9M7TBj4YD9MhJcnpCdGycJz42nuQS5mruUcqwo95a7dTTbt",
  "key6": "2gnx6WnRjyrqT5aCvW1EBTaHF13zukp3SJx6CYaoBxyvjXGodgewx47CK67gowpWkdkn6NkrYpWKifgDDECrZLxY",
  "key7": "fUYn5a2mvaPKvsfHG7RRDYwyCntDp7ef9YVAmNskTRacJT9mkA8Y4DNyYPj5C2jStALMuAwSNi7BGqqFK2Mk6Ar",
  "key8": "2LCmFenHqRH5gzbFNWk1XdnM5RYMRKuqNZkVEUmJ3S9mwyUqFEYPB43tTqc4Ehp9V6hXGJ3j9hfdGKwusBhShpDN",
  "key9": "4nR5oBYg2ME7zp9MW9yFtc6rs6Wt5yceihXbqpxpJupBk2QpccuFsq1zXuM7Tsh3UF2qGk8WeJdBKNsHWz9x8Tf1",
  "key10": "5EAvXpoBVXhdsCgN8SmVdwbMVaZwkDqLpRLc6aNTW5wgLMiV2umAA4QHv49HRq1ioKYjjUZQgLfnsJPjWd3P1RuL",
  "key11": "5Wh3W9iVYQVZZehD3vEGYme6xaqbUXSFfLKr5pzBeosoY5jH2btDmN3BKxKiY1AHQQMqiaW88RCGWD6kpWBbo3io",
  "key12": "qWG6oHGjfNDJCsQGKMYoQDo9W5S4WDdSKk95vvzAbEjbQbnkU8KKZD68RSrzbrWgoa2EeHbwrKQkQtFvGaUaw3N",
  "key13": "dcqy3JTQ24dzQijc2jLnKieM4SivdF2ZedseGp8A2sLJh6TTWW3YerWnPtbbV2chAVB7Erx4Neh1z6e4mcF9Mfi",
  "key14": "7XvZDXrYYN3RoPxqhetJqUMm9Z8vfZ2wSffTVJ5pjfSZZKTZZGqjg2fFTseKnHViGcUBwwicJgopyPaeda2tHo7",
  "key15": "2bmupuaVLWwkrfevkPA1PgsCL1ECxHZkvcuE55n38t1JBvJEySPYMTb1CUmjHrnHSwo7foFBQg49AWbGX5d297Mx",
  "key16": "2frP3YVLnFCeV6hNaRwFsN4QVJi6TqvkoKE23Tibo4j9He1NdkbvkjMqdXbA2CG6z6uR8XLHMYUAZ3qAH63M52xQ",
  "key17": "KaBQYwXgh3YTBPXMr6cdqUVpTkcDEAfmUKSuoCqE5YkzYC7VAWAawbUE4muAZM6f8v571R2SnWtC8oWmRePGE7s",
  "key18": "5D6joXuCRC8FVjTekByvWPPdx1XsLLpb7rLWsF4JhhkjJmRmZWxXgosg2P1tgoPxT4viajprkLkHtuTTPs6Kc1Z6",
  "key19": "2chRFLeWkJsKuMgkZaeknW4ghLE4dLXLJEmycurgowD5rTyXv3uZ9Yo3y6T7xTyr6aMeBbJoSCkgxXbV4oteqFXe",
  "key20": "3VigydTSWuUZznviPt9w6sD7WJwmWyqa22uAw9tLzAPwE2WqeANNmtJY7hN8Rn4GW3tZVUqpJ8Xi2piC5SuQKB36",
  "key21": "5MCbPRGHBJkVqTWrofcUZU7Cf1eKqcTWge6Jd669Vuh6rNMQd8aEcKPq7SBpsYbRstGhcH4VxCvQhMi12kEawCSr",
  "key22": "2HFCy9bQUds5j5rg6g14pVtcHvYS3fvSdJwNm8kEumurd47J3ZbFUH6PURdtYdDgschoQqjJsRdxNBR8B2WtTd9B",
  "key23": "34ZopRri8qsFnVN8vjJ3p4aU7oD7C7qMTbB5n6Tym4D2MseWrLx5Q7qzYphpZ2H52E7TM6HqjUwEyL8Ej87GvH4B",
  "key24": "VUzdER4XqWJgwpXJEC2L2Kvu4ZKmhWCLBBqqcxVjBqLyZrxHZ18uAbgvEfPRmjs9m6Zi2DtQsHWVPX2YBsuA5Nb",
  "key25": "4T4hi3UWM2vMmZXyH1rY1p96VHtDQLbMK8Dc1gUpBqbeXhJTVUAXxYo6dcgUjQibgqKQFdsrhBZb75btZRyKPRd7",
  "key26": "5n9KzUn47vKJyxtgXPjczgR7r8Pz1WpVRdfZpFG1PQr95FcA2scX7iaHqBMFPKMQVmB42Pa55n46EH31iRcEKsuP",
  "key27": "4hKonVZyDbDvPSnLzsF4JbUgyr5X5p9gktddxhwG7cnuaa3ZAvzw73RaS3iXkgitPme9tT85zG9fpdvf67ASVk6G"
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
