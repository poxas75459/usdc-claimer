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
    "6EqDDzBjHHyrCQwLL82wyCpDAWpktV1o2t225ee85H7CUQ6oycBEqa3wquHQAVEGdqvoRMLt24k7eYnBiSurn1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dUrGSSAwHAJnWJwyhpqhRcSz8NQLYpc12ftCpmSZR9LNh4PmFXnG8h2kGyHCqqYnEWnLsUX3cDbQ11wk8m9hM47",
  "key1": "47qSKxcGwLG28XcSkT4sMHNMgmph85UN36URxXGEbv9GEPgUDJxKzo1tUPvsNm7ith7otF2zRbFqBEtbdvJVGVag",
  "key2": "cVExDYxHosz6E8PRzgXX9E73c2tbLZgBcrQZT8uLyYzBpMZ6pHaiDJ6BjikJddZDNzHiBBrWTF2euQQffhSazKU",
  "key3": "449K2aAJRA6vJL5qYMbgGZSMkCwc4siUjPGyVbiMV7LTUkPZvWQkFdH6kLjWzbyPSiRwqR1Vd5oc78o4z3mszy3L",
  "key4": "3o9nFLiVd3ZJZAXPXKTKw3Mp1yJBivMkURWG7JLcLy2aFPvN8MBRAWPRPbvdL6yfnkxUM7rJL9z5RWBKHRj8eeJn",
  "key5": "5AZNgjhAvag6NombUgiMGZRcymoiEULYXbWPKqfzA5qbDSoC5CrAgE1dZs2koH9WPF4wiJ1U27Mmv1pWQiHf5LZs",
  "key6": "33QfdbUMJywweytrDBqnqMSt5k89LSpVB2FyY5ZTtMByRTW64nu8t97CWg6zWW6FqdqYD295sAJMCvbcpZH9t7ZN",
  "key7": "2e78Baw2q5FLfn3WXS22VZHnWt3L2FiEn6CKaK2G3Wgiy134ZiMsBiyXFZTGBbMSCsdoDJ2uKAasKtmgtgdDfdLc",
  "key8": "4ShwB5eL56UrMj8pQeV2sPS7VwRppXXwAZVWyFnBJHuZxKxsSSHvbxVgMrDMFQ2YzuUZ3pJ1RUwbHfGcU2PZn5R5",
  "key9": "4nx7CNKHmGrheuKTbYYa74s9XyojDFqM25xYVfRrj2nwmoVwPBtVyT8nSo3jCQmZGufXV6zndFx3H1KyTdF5Qz9t",
  "key10": "24LXGqq5mDXePHyaVSo6V86vUaF9EyATzgpDugQ76zVrhroRgLXxxBQpiCWY7iHHx5PxCfKjtj7d8drgqWVRkJA1",
  "key11": "5gh32yfiN6M6qKUyQm4wJLGst8pehbYMZJkNfYhsNaRzDx5rcSZGW6xMvocvMy2fUALmpptZG5KRfa9wTqqfCQ3m",
  "key12": "3CtmFKjLEm3FkDjz3Dspp8SsVti4umDqFdui7PLH7nRxP5NaS4qjW27WRoctRaCBd1tifbrUcsBxHqUwW5B5MEaR",
  "key13": "5x5X7zuxZPQqJUa42aWcL7aFdA1eWbyYbkf4nAzwCetJVbMWR5rgpzJ6hg3aiksJREhoPkZLYRU97eBpS3XCxfLD",
  "key14": "24zvCXweekkfop6pCqSWAu1jC9e5omSs1FJ6Kt36eFpYGQodGM4UpU6MSyB18JNqjN5o6G7i2nuHjac4cmSLCDAX",
  "key15": "51XTURK1XnCRXBuY1Hv1To7NaEEKFt1VmripAESzu2hi1dogypmgcrR84cBQFtDQvR9BafswCYyeahfiHNwAMhnQ",
  "key16": "ZDTF46ua7ppvxfDxvqjHy3wmqaNbDhVbqoirGubeKp6MwK5eBRrqBMyHTzo2gYHaQw2YnVU3KHCqy17Dc4cZ55G",
  "key17": "3gvUUdXPh9ESrcYFiPw7j9ojNThYoEynsA5pAS8zkQ7buDuamSs9rJbLtfvZfrfkpsPFBwFruyAAwtdhjUoy1QDE",
  "key18": "5STuJ7ggb3hnBDMpXdLz8vHxGvwEkKRUYpWJm6PPG4Rb36nB7MUbvE95SYN1jbkEiiuYw4CqnMNhss6nQNJXLYh1",
  "key19": "5G9cPcVqJ4vN53D1atQLorvzC6DRwEx37fJpLmBsaUJ2VvGRFf96qFhVK91HbnMcAaNhd5PAJgEephCfy8b4VQbB",
  "key20": "5KfedPpPxZwVZf8Nq6pp8XGsq4em4p4Srfdnjz6Ru7LAY8pJm2oJo6G4AMfHBz6z2co5PNNiaPwXcRN6zqwXpc2L",
  "key21": "3poYFaGQenB9JYJ7HBfL9jNVZSWwdkJafJvwz679m1ACkXjt9bfhwHe16kGbKyDXUenpoRQvf432N8yLbhV5VjNc",
  "key22": "36noATcSBQyisziXuVmeBnjyaXsp4tVTNXsbSuHWccLuJpbhgtu3acAGWXDKzhxSuYbKCWV5ifWBs4mAWjfLD9Cv",
  "key23": "5ct72VitdhiRQepMULS1m1CDSELad1JetmZhBZoyyvS4ht1mJieukiiRdtubpJ2fjVnLePqcnqgtNpGWz26X5mhz",
  "key24": "3jzeeGJzuz6RQxaMdUXYvXpUiJxA86yYUquT48CmLoyP7TFYADs1jaFYCDZm4HQ4QoFB4YqTb7wDTtrpGsSJhvRi",
  "key25": "4ZP4JTcn5U2CPWZhtqav7cq2yv3uDsw5mk6Z23XNBCBvUxrCkH8D5b7zYQZuH4PBTERHYSujCgVB4j9ydWQJsmWZ"
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
