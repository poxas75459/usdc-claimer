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
    "3wejT1zpwS2izQHCfYUDr79UJSSTvFRNbc6VgXoXaYXTBXo3bMk2WKYNphnPhp3Gk73vaxiZEUhVM2RrRoedEETo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zNtqE68vMSsEm2LYSP9ecgPgt9Aj8TsaqXVT7VL5uDNXUmaQ8osiTNB4ywvMR2UXtH18SisLy24bf3x5Nt7hLkr",
  "key1": "2EeaxU7zsV8PpfYjrVxVSGPyTKWPC4o3borSzpCaAEXLgdAYbsFSJcBpYr391euHRvKPyanfG6wJM6sNCdKfgwFu",
  "key2": "3NBAi9dTxRkDtS4meaX9qkuDY9jiudS2gewBMrgd31qtuTaeebUW5FM8yA3kDUtDY5DmYMvt46AHXuVmhCPhEhHC",
  "key3": "5XbVfoWAfn8V4L5Nt8XgWDFw6ZCchBqmB3ib7QFKL4g9wRAgoBw3GBiePxUCcUT8uMN8SejXD8FV9YQLgJPRH7JC",
  "key4": "t8KFfT1kJYscpTdRy9CJsAbns1J7Jiuh84zMoeqH9NYYznBLiF3YJK7xHGm672q3pTVqdhhvkMEBu2RLNHoiPzE",
  "key5": "47zmYQZrrZXpEKR7BTqbvu1jWzoY1aAqWDou7GRQTJARZhtEVAxBmNXX4iUkHyqoHP7FiEFUsp22BpXBGjNw1eGQ",
  "key6": "JFzZY89qw3AgaNFEuVmLyfgqqYeq52MNkfBkcTZ9MYL8a4zJ8hfwkeczhoCzX4pJWpZQwJKhpXHHiRKR8fDJqby",
  "key7": "2Egw1awidCVwfrsfVvKdZTA4owjnq4TwwLpMGq1GBgPLkfMLs7stWanpUPVq84VFsaow4j8D95Ny7r7UebaF33AN",
  "key8": "53QJq7jfBzZpDC23gNDdHfFYrQrJUQLJCC3TwA4KRq8MqNiJhMe9cqzfZF8BiECQ6mkRJtpCeQ51EaVWu98RkMQK",
  "key9": "2JByppyrnY9EYgddqkXYEzsTyJQ9bBKeSio4BzM2maCo7uhJ6ukCLheB6oreakWNfmwmc5s3YToYh3CAsKiy1C3w",
  "key10": "vbwbft65u2xPCG5KGcqVcTVZ8LgnGJTDwz6jUYa8FgpZPCy3KB2uUYx3tGBiKQDygNYGcYbv1AGaWZardT4Z6DN",
  "key11": "59p4XkArN8VrjJXeVADgsoosWSQqSN5KamJe7x97sFET1ZNW35XA4sVnjzTVKx5CdgfHzacoLNxiMYg8xv8ZKcaN",
  "key12": "28ER2CXn5NDKWVykBU8TtKuTK675CZfAa8K281kWaPfofNwaNzVFbsoFo2BjUvM9e3dGYiXA9iZ9xDHQ1PzGPdMA",
  "key13": "34myxAzWxE7SAjWff6vuGm3otKBxvzZZEWwmWCYdVRiLRqDQd4GuKuViyPSmnTnuAk2mDiekQrD9ztjcSPNdYZZT",
  "key14": "4bdWqYLpzMa8P5NZtV1BqAQJbHcMqaUE7e1FHzuSwXskWu5UuLhLeFz1y3tHgrEk9UG47qDL9M5E1StjMqxRnmFH",
  "key15": "2EJ4vhb35fvj8QK6pqzMhGka4J1RkNJB9GMjYNkcYLqQsYT1GUMWuiQfnzbNSUFNgbkF8mbnnwsQHmb2sFoijRfG",
  "key16": "TMizr6QxgzL66NySES7opywH6xy1cLQNP3Zoves3iLbtHFeg2WzYgVAUpoXjPv3dYPDGoFZtpG9KA43dwxJpqyh",
  "key17": "49Btq5KvwFs9DeWGnp7XJ867ksHgcpLYpLVFPbzgTUKm4S95Z9m1jZ7sHKXEew9CZGitG72gqrXKGzws8rS9Qyj",
  "key18": "5NKcjnDtfm5h5LdcGRmQmkYxJe1uJjUHHN4xw7KULXw2Nny7QcqL1VrjjavRxkjYG7xqDpJtn4FAiEpeJDKMDsRH",
  "key19": "4xop3VdagqCpoXZqATrcdbaFq1kqD2EwLtaVEtHfWHw263GqA2yebdmrkqXtemQPony4jCc7ZfUjbDEAFJw3hb2d",
  "key20": "3MSLZmQfkE1yY5PjTVvSDgchNLgBs8cB7VSxXyrX8EsB4kjn1GVW23T2qzGMykTu2F4oXTTWqFMwfNH3kVd65k8c",
  "key21": "5Sc3Mm11pAGKs86xqs5H4SdmkSXoRnti1T5Xk9fBTDYg5hYLPRgtytCtoKrafu4pb7T4z9ZAb9S61RpqAABCRvzC",
  "key22": "3C8f8UDScywvsEKhGFtFu1Vi7ykCSMRP5p8ACvYtfxyCpSsqg6V6EvGSmwcaaaUg4zn7bcVQxntvSVFoJeBoVnh2",
  "key23": "2sdYDqpD16m1Q5j2ZN4oQDRoVsNnG1pFNvxBk7UijU8jiHkKcuemv5xKvKaJvfncKVsyTnp1SqDWwFFSGkJJrGgj",
  "key24": "2rcuG9vJJ1rdf1NPEvG5tWGkoqnm5wjpiW7thwNm8Y5hCP7Mir1MUkPNGjXfJvB9QiJdJYTC1VnJTsWtPYuZjCQ9",
  "key25": "3UMPUqAxuDTvkuDdMqopcJza9eJrTYwjt9bpSiW4Hur5PddFoJwwzYkj6BBrF2a5T6C5e8BdHVzMaTm4W2bsaM4e",
  "key26": "5Fj5m1kdLGyVf9ZUmrXNWBoGfiyz37ppEjGoyj9cZkjdnyBBmyhfH8FitVQnsNdY9BMtZ7Eafns6xiH4CJXfaAgS",
  "key27": "4TS14hG9S642KB3KWiWnQ8qxPTRMGYTU6jeeZnkYUoHsWmqPG7wefnPWXTxRX4XcTRGd3navgCSuXMkNaXKrLBeK",
  "key28": "2pdsrGxNdk5KgEHSVE62tTWqxru6msbwAPRoLJGhN6qVkH1DakrK3TsoDjSLPzg9NegLBnoy3Fn4meDEaS2ET5r",
  "key29": "5KKdbzxTdGMKS1xBk11MtFGFwMRWMDqR7DiGue2f1mfTTnUGzQiMm2zGPyTKDPoBKDaHd778pRRJF1dUiaQ89P5U",
  "key30": "2DobNxwKYaGEdQjF4HUj8LpAR4ZQBnewWXxcgrxG395sqUDVEa4xX5wEmb1hPXYhAcJkyTyyfLT7uVHQDWzzfXjX",
  "key31": "24VNay8HLzVN2btrVrWDeEPDewtGxYGs8xcU62WMuPybB2o5mt12zQnNnJ3BnKCJ9oGzUEs8Vf6Krqvm3TkfAMZ6"
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
