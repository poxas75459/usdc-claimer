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
    "23U1cgerMLCGwo9zYUB4Ch5MzNYdNMb1oAsEPfJfMCpWWmZXgQE8c8MJiGrc95FUwHRuQPQgf5ZCfWQca1upPPCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5on521c3hBjZsYGwkLpw7UNWU5fAfMaw7hPZ7SgbA6tWHDZ1gKqTDa1waEsSVuakuorgK4M5naeKWNN2AwzWi5mi",
  "key1": "3e695ufurKQSSJmRkUCgMSdimRrDsRXZwo29JnRb3ztGrgdWk93jRUk4iXkmBVKdQB63JL7Coa3uZWwF22mWThqX",
  "key2": "5ucdZpNwwkbgD3dwQoGM8aFqXhL9ZqmV53FEwYhsfvzK2WhGRMMvxYfGvhtJ4ZqRkwm8eo7tw3cuGL82XyWVD5mc",
  "key3": "2RVDkzm5aZY8SVyYtGbb5bqid6mate2sE3AemPQmUYwbkugtnsAavog2pVfP79nzSasbGgzm7qpeg5sowwAQ2DKX",
  "key4": "48Qv2Le18rf93GfAP8RkTa83EUTeYxjLku34rFqfUtRd5i7JDZtL4dtZn13Zmrb4hRzcFGyQgrjaK4pbssN6QwTa",
  "key5": "XGo6CwPX95yTPiHPVt2oX7EeBx4dtkVzLbZkBU9pETLrajNHt7MU5AEm9aX5xssurttpmHUkGZnzVv7KuLUvzrS",
  "key6": "2usAcMJoVwA43VMf5HCf1U4Mjd1frkL3zuz7XXwUQo3fmQr8kLR7yZC84M2ZgVJLvmVNrxhzdPtvKzLqFXhWgCDC",
  "key7": "37sojK59udfMEWJep7dMxVs6TUKBN531NoK5K1gT8RK2okYaKYH6vwpd3yw3dJYBqkNmJKWeXQ6WxHNzszu3ozKr",
  "key8": "3KZKR9RCVDLct26EytYrrvuHYgbq1sU1hQrJVy4Q3K8BzrzmkAWdkDwzLREQaSRGx5UPspxqo9bntLo7zKtxymiJ",
  "key9": "2dhtN4fyFZBCHDaRNUMZcDkt8CctSUsPNySbBgvnyaY2VZQsc6V597U6g9A4bfuUmqDDoa92Y4v2n9WY1Lmzh1xp",
  "key10": "623skohnX4erppmRKmFQLKZKUTRXsj6wHZRQqSgt4StuXS6r25cmE15pGYciQyRy1H8RBA9N3KqyRoxCPGniRu8Y",
  "key11": "4SD9hVU9QoLrQ57uMETmP3gvp5yefZv25PLhwaKBHXbjDWU1JMqv2h8yXv9d2rGMtyw7fUtDz3XDWQnTk1wJzdMM",
  "key12": "22ad9wySRBCMyk3CusgJR3xL9HpUAxeuqhb9Buuckmf5V8JtvbEyBXbVE3G7UuV96mwjWzxcA6YMKzKQyUTbmkXm",
  "key13": "5E72pjRc1R3rBoFcGTamGnykMpEvgix8yKnKtV5CCY7YVJTk2ERHaaUNmhvh4zqMCSCKWpEqvqasg9RyAJq3s2Fq",
  "key14": "8gr8rX9zSgJCpkE7sEotyUwecpgLWmwwAx5NaZ2Z2x6DZ4YTbciUucqYfeQ2NMs1CiD5gV5zTGcEUhiaKT6qUFv",
  "key15": "4TG3R6y3omKPvcDSZ73phXDV4EEKwfUt3tFYH9494NRSqnmLhus3QLC9pe8KYqn2wnHWUN4v1augmg75Mq439q4c",
  "key16": "4NSqa6ttvyRg4LpG71SjpnyWFG7nSER4y79rruPnUoGP79e6hyXd66go7reuUvC4tBfzqM6Kqz5i47p7TLSuLxqu",
  "key17": "Af8qdfViSJW6zA4wUXtw7kbbyT58nMU8REZxkvriAbbJUTr5AFvK2dCTEoHZUTrPEf7haM3RMsmtxRtpYwUVrnB",
  "key18": "3EEtMtDbzyGEV5DVLjbNHJv7BhifPLFCebFVhZw2tGMFW1pL1PcxoUv4jLeqTaUwCnMSCGKLsFvKR1Ye4fnGUGiF",
  "key19": "tP3MR3RnBpcC6yPrFTkZZwV9z7sedBWFirwsvq5zSiBMs3m5isjy4rajTocufqvGUm2foiVJad7jpLXRhbt92d3",
  "key20": "51AmumTqgYFcfjGA55Mqmzg3LEfd3vfUgbbcvcUVEUfFfKCi5L93CFDdiRYgd9EwZdhXKSamPgCLTjzAyhSrfww9",
  "key21": "2nvyqt1HGrU9x7UaiNtjFQKHqYkLrJwieh8csjtMrLSvKRhga9nxFBANDW34r1Y7VUQddzPbsiLdTYKis5m7BdZD",
  "key22": "3EGQ4mvU1HwZ9SHZRLJWr3sWna263T8xoruKfCoZeojru9EzP7Yr4i7rJ9jA8weu3zdMhwCyQVbNfSP84y7JDrDD",
  "key23": "exagypfz2YAS1BvabHVAYYWGSBsyuwG37BQFtY9A7EVSJcDyuNJE9szFSbZTiq4yswiBJEtpic7oLSAmT4CFPcH",
  "key24": "Zaq1B5g4HaorNvrdy8tPNnW2CUbS5gmqfYYAo9MgM7S9NaoHmjqA1E3QM3qk1HE5Y5bNnj28Xz9CkTXSybG96Zv",
  "key25": "2KUpy9zxmTY1FEPQeDfVyWUVPH7Nhjniw2WPzsCCHxwv9ao762W9tqaBjmuVC5qahjfPFmxcuHujocFev8sPAXiv",
  "key26": "2ygcHqY8KYJsgGh6B1kAnxXjCp5FHPe2QrRAqWb5Xa5udFJWMvrzWb1QrumTHA4mnoevmD9tCXALU58kTVHmWMHS"
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
