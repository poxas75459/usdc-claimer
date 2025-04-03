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
    "4n5ppD5EiZyHX1uMcrFJgQFLtwadPMeNTz1BiwQFbky6DGejYM1EW1qpCZGPZcU1gPmVjrtNq379jVc12GjTALPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "riUbTkH28eMZ8Y9eajh7DhBgFqW8NHb2tQPDyHXpP5jrSZCD2ytwDkvbuAuY4T7mNWGgyJdYUSaRKm4DsJo3kbh",
  "key1": "2bmqR5uQD1yzKbuShsyqcxG4HkB2ZUaGQtF7xmD1a9fDcoiGfChpwD5PB3Ws5Ga7b6RKwDpe2qDVQBKNJjZpSAQ9",
  "key2": "Lm95Vt5uYabLD7ng6HyqYG1kqrvkG6c3GEe8s7As8tZC9AAU92ETnsBQPQ6hg6Lm1ucY6J3kG2oDjomNAuKqsHv",
  "key3": "2aVycTQpFEfZfPDekdctXbb9fekHR17zG3JC9fKmgyu3GdnHRszKRzMKCabQjxDs1TDwaYeNBfe3AZtZiX729BeP",
  "key4": "15YnT9cYiHLs5KjtbcFWuLohb7MBxYx5GSi2TtPpiRmQf13hh6tSdNJwurX8vsbBo4kRe8G3JxyTv2rKYFQCwFV",
  "key5": "oWRd5wtnRJ6aWp96oNPUwBSPEHB8G18aahu2d9jhDFKU9QHrWPNhbxCJSNqoBh1qxmMEvYKsDzkDpxhvU9S2pfL",
  "key6": "25zLX9KaLLstyy9DVHequW412WpgshA215gwgmShpYDXaSvJ1Ya5yNuzCHSHmR74EKFWF4UHRMcfJiQj1EPPsMM2",
  "key7": "2AeSGenCGQkj99K45D5q3Spi9SpXLU3GLGrTpgwVXCGgGMifiHV7VG426racRPZEFuP8k6PmzgMXpAyDtBVBtRHS",
  "key8": "3iKkQnfujnwRRS3C7qjmQ5qEg9y3xPS4fLW5MqoAUNpREQeHf4fDBUtWRhRMRUnFoqbpgC1AspAwXgdDbNv2UCHC",
  "key9": "4g6dfWxSGu327bJhMxSnTg64ahXiKmtqL5Hq2B6tHVtiaMtV8GTWrLAyPeH7wxHa9bC6jRT9sviYZeKiTptbgUBS",
  "key10": "58V2Ac772g5FjcchVQL9i9jvR1vyLDSauEMKuREoJBNtM8oa7JyCrqxsRAkAfBkH487VcW2nPDABr26JkWiU4nZp",
  "key11": "Qec7KBtHEzcdrzw7xhJWpvdVL3Xjc55Ed9QvPUgm6EAS4crJ3WQferXxH1JCYTwe8NUwfMeC9AC1MJt6eYacV4E",
  "key12": "gWX1uf7bBszmHmmWhC9ZYtZnhgEhn2RjykuDCe9HhS2QpjdNwBWs2fx34QaEybUhHn5N1QKF9E8ECeVFCDkdCTV",
  "key13": "4tvHa62GBFuuWYzPdp5HPfHnYLB19dhuttbp3Qp78pgGPL4nD4oYsF3x4pY2N74pfZq2EtHYZPiaMDwDgTRRhMDi",
  "key14": "28iA7tpD5a6SfoT5jM2mN5E7zB8a1ESRSRszuLYvdRAJdXquLW2WbPiyShATeWUCGNkqyTUXWtcBZETion2kikQ2",
  "key15": "63pXzPnLZMceFYMekfQZX5e7orbHjwWHqFLLUDJjRJ7n1drFo7rK6m88XguKzxW2NjMK21webYbw2Zqs375h5UdZ",
  "key16": "4ipH6S9VsfAhaQ8tQysiyhwCNV1YVrYacDvDxdz6mZRHrZoi8k4RkwBfcZpXHhWBzhR1ri1LZaJvAe7YSz95fLyz",
  "key17": "4XwjN9QxhwNo5ZdEvAY1P1c63TmJcBSAgUWgT3uE3ngYkqfaLVg8YQaeBqAiP6Fb9c81yZxAgU95mPaNfRh7ekcf",
  "key18": "4zzafNoiTjwCMorwXmfjYiuk3P4fF88i8WnHzTDuREFEyjp4E4itasSU4Po7YWzZKAA4YT9RPifCNZeWFnPdFmMa",
  "key19": "66H13y13K2HQXaUm3QZnjkfX3PWqHtW7r9MfwLwGCrMDqFsvoZq31N2UMfgqDeV2PbJqPh8uSJ5LhtCvmgrw2eJ2",
  "key20": "2o6t7o9DiVY55zdSaXfza9bCMHXTGC4zCxAM5qrxbNhZqzuHkryUVkgjgpq5V9dQiXVYgL2LxdCMvsHPZcgPTveM",
  "key21": "4CCJjis8RT1zUHUEd73iSiJ5uLGKejBZCDYLWo8PQYAVaQKGfT6hp3UQW9UmrBDUYX7ER4aDzS1UL6JcmAv3FTkm",
  "key22": "aoAghARsFoFLdj32is5capSUb1j8bkrZYPGJvCfSHoubqiJHhqdhGxEkkJ13FNjroWTkXYhPgrtnojgAYe7hY8U",
  "key23": "5HkvQpcVxw44iGeZNnMTSFzPYBnFhfHnf9evkJCzfBgY1P6oW4QgTsDdL8o4iGZsu5pAx8z1h2nPzaqRFKVTabUc",
  "key24": "5aNosHCv5YEpcFkv8ZFsZJbfVUDdZRRPGaL55FznqMr64VKjxXaiyuA2RgpAqA6sz2ktV4FQbhpCFL3gJBktZQZ9",
  "key25": "3npSEAs38ZkYZCrsg1rRDrxdsonTCF5h235ACbyskbbzrEb5isXspdeE6hQASKdy8wJT1ysd2BYhHPaPxtmCFbHP",
  "key26": "28yGwK1ySUffyexkJ3PZymEPCpdtmELmkmaMWbBDnq7wUcMS32Yk1E9PBq8HCDBiY8p27U6KpkL2DUG5y5JcS6Rt",
  "key27": "uwJhqNrLMDieQJd3zxDnQPSndWwRhbxXPZXUS4PcSUGqN6BWQQ1UVDBBVXGHdKBtrQGAMVA7YgCCuekmsdnq2Gi",
  "key28": "yAXUT1ZpCGL5AKCXGd5huSS9g8ExvTQLubwRnSSDKTfJRzrvZ3v5tKNqJ5aDvfF4C1nMkFRFaFdnD1n7dzjbJSp"
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
