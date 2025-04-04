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
    "2zfE5KSaSp2cEWtbFXSNpczuueLppP8cFsSRb3ADzrpqDHyPo3HFVZwJqCVFeUd7iTqKQMKRGGhMg543Qv952oxF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v6Gtcw38MyAZbMcGugERhgkcz4Zd98mq1drHwt7EmY9k3awUcjrBhcB6jMFCTzahqQZcAipxec2qJUpvEASXELR",
  "key1": "SzmrTEVT5JDtvwnziigQSShJGScBK1vw5UioQ3DiuRaz61dk8k17VPHJX6xFvjKdKEe9yzWS6Yfb2mB4jQy3k6D",
  "key2": "4N1QihQzc6RyENfaYra4J8sh8mreur9oe8g5PGFvacRSrs5Yzvu3bkvWvN9eZ6awFo7Q4d5MaQUMbTXAJc4qasv3",
  "key3": "5dz9WDp6ZuvPBw41ef5Q2J6M5AyBLhkN4FiTavm6vj3nhCPTEmJYXpdDqvL3a5QniDQwcq3o8TrhSrdZHyhksfLB",
  "key4": "YLbEqdT5vqKCXpN558r9ufC9CinMVVRSuFP2k7RZ1BbxGKvwJax6ebMEqkqZ6WkeBeywkNJQUKDSCWNeCjebKco",
  "key5": "3mukBFf5YfBKNfFMs6KdtPToU2vxLFuARiyL7ytUk8ECvDQvDrUYwaToHMyUvLMd3w8ZL1N9Zm6BvT2Vuyrv3muq",
  "key6": "4wAqwPDeoBMB3AuvuUu8ehzeAqc3oxgw8aQVctJdg2b6kC9X814gREwBErHQvaGoF9xpGVbDgDHAEeGpRh2jA9iV",
  "key7": "4Rk3qaD9pUaW8LNbFoZjjJ6Ay76dptMNs6UQ1y2NhKU3bTqQupVoPcSwNzyizrSGhryFvdTfCZrYfSVri9thKbjG",
  "key8": "2VBkWKoR4vRam1d5KJ671tT7JEhxY6j3LYmA1PGuWzUQMNF8Yjv8mswsAmSpdydy4s3WpSDei3kHtRGiH8sMkNnC",
  "key9": "3gKL45m2xvyn2o7FFeoY2xcoNqn2Nfy2d4V12EbLPnKq63gamRN8cpxoX5n7gR9mh2o4R7zo9PLnFJiLkJWfCzA1",
  "key10": "FyDEg3xgFAUUv8wQqhKpDpP9d5L6pCPqQe4TWBrMPDX6oEokwPiZQ28HfJEuh7aLCKLkAuKmRBFqLcDVT3Pkrc6",
  "key11": "5xXxqDmWedKKWZ1qH9EvjuchjZXB4ZNBf257JCNNBrJJTz37Jui772PcY3pzvMRCsEVndWUpbXnL8rGLa63VhfuB",
  "key12": "UyR3PQcEuCZaiG35SyYvEXBUvuSZeUWDmTz4jJPHBePCLvKJygYMwrhaA3MeN9CYYAPs75z9WjeTcmfMaBCgoa7",
  "key13": "3rdL8Hb9DhczopvPFUUYTZhzi5FVi29ZDLzwzxjcvTES9rUi51xMvqiTRVoNC565jsF66MMHXQsA9WhTim7fsppR",
  "key14": "2Bk55mQPg67aBAdSJC4WXUcZS5GYBrc3QWoY9f3PaPgMM8a8C51QxbZzQnsrA1CiQfq9TueSq7NAdQbA96xs6ZS8",
  "key15": "3yPWSERMZueDVaepVv5UNFdpvc5j3W4ArHwGNK5CVaXXHatye9Cbtm9uJpqzGdwMPWTYBAMm7b3bBhCyedXr3cPe",
  "key16": "C7uU1buqQAvRQD7fXPB29VGMcu6igvBSQUtDzZkX5fSaPgy2KyEsubduHY54CRzLfC94v3uBDkeEDCXoYhauqK1",
  "key17": "rkqNjqZRoAotVMEPg9HpfLDh8UrrQFSFoQ5ztePwU5EnDh42iS2PYc2K9nvDhCBW79ty2aNRd8SKtWvctHBgeWJ",
  "key18": "4pvsDYyGqUXh8Q8rakzFTV1DxtETMCzQiKz6HFvbXhVxSpNzckP5cZhHL211Aw4qMyKUsa6SYuuzokWF1HBXnRAB",
  "key19": "TqUQPFptdUByTHbT8FgsSZuEb5aWuZ5CnQyxUSqpSDk1XMULoQDBwrERxq2FbanpP1dCLz2BCRc7eGUw6eCunoF",
  "key20": "261FLX9gBt6HYu8tc6pB619PFR9hjuUvpQRYbDXcDUrukzsNU1HitBCaD4MBDFYNvz86Adse2mKvnVJ7wEgbykSN",
  "key21": "5ZeKyXkSp1HEsbNSiVe7StC4DQMNg1Y542wJMEJaUMQKLGcgXkPBycL8FBWD3j79cKXc3RttY78kp94pEzja73kb",
  "key22": "4fwFGL1sLgZdxrqAcSSNe4nKtbtuXEW2HuNcfwAryt5RgqBtPf1fEL8gxABqL4h9xoNi5KYp3Do3x5DZ5S6w4432",
  "key23": "3gAs9Xqrrzhx37ccUoMTXo4bPQfX4QfeXQTnEaaTCfypLhgsNLSCaJQ51b1jjjoJwLjYp8DmFUkXUP78F8LAKkaN",
  "key24": "RWZLbDuFLtZFFxDBHbaQzjATjT7LgrJxKPPKNGE2Uq7ZCP3jSUMWcXJh6WA1QegWubqNQWVZtgnvjndvPZ7qU2p",
  "key25": "4GUBVVs7hv5eGxBEqJ8ywkdD2Tvr5WTeVYTKmYcqcWehPSvWFQx7ScjhtK6kGVSBZuP3QsHCq6EYjr7AvrANyFu2",
  "key26": "67YjbbkBoxNZfqTpux9nP3g9GCxRZBZSadgKTLbhWeveciW2bMrDQ6zdSfvNYQHsDGvEDUH7tcQHygRWXFuQR6Tg",
  "key27": "54M3LWEhAb3ovCn85XY7QU4rsvx5nksY3sRook9advjEyaPfXu4NkSnr97bL93LPyMqBQx5Y6hwXrmMFss6yYYng",
  "key28": "3ZBDGTHmoQhwPumTjzJCYw4LifR5e7giWDp1J3L1oBo2GgabJbjgdjpApTexLGAtHd5aWFimapbQFEsuMpR58yC9",
  "key29": "4bRFeejH7YjN3VxhzYPkxLcqfU6YSFCdSwamUtEkjMKdGh9eLm9AnsfyBXz9CdKhe2NTtpG646rE5tXU7u8vCWGL",
  "key30": "3j2sP7sQfp27rtkM5YgqGdBU5p3uS5QEhcv21w8j6ceuVLzYfHGdtFehpuPm1ZVcKV9Vhc4qy4E3L3SeG9Azh93d",
  "key31": "3JvAQ2XXfW4nmtEzQ5kBTsGu1ru9Kx76CaXcT8fDPeq4ztXD6rVSDhRR77TxoT6zxS16QdZP8SNcDUtBGnGcQTSq",
  "key32": "5p6JtbxuAXdpiG6PnVmpDkR9a8d6H9M6hg56AwWeNVfaRTnEYr4tP8AcurYMeRoNLbQaCzJmigi4gpAYZdTwKJA5",
  "key33": "4mbGEkTpSDARRchntgQEi9ZuWodM5zEHJrrtS2tpgkZhu8SS7WKiRs3xWRpUrWZwpQRXjmevxd6GwSE6mRQ6agDW",
  "key34": "2bn7aa8dw5TFE4YEPhBNMaXzN1oUPSHYkmVD9RAHQhdHgSGoWnQ5KcN93xe3PK6U1jTQdJ3mQgb2B6d5iFTFHrcV",
  "key35": "raLi7i2vMLXc3375DfhModhFqPMtxyTReBmFbQK5LHBuBkzP5sPhH4QNPu9YmLdNzTrWURjAjML7aHWwQobigKA",
  "key36": "3s1WJZSzgJieKdQaxGYH8vJmSfasWYATsVrpKiC1PR8NWtxTZYHtfPqd2PXz1tgPdE6CKSGk55zUYZhPoYKdCEcZ",
  "key37": "2n13aFoQPQJYTf3hj6B343jHg2zeXLAzPZ5TtrVD12ZBorUNKVAnGj5deHorazcPdqugqttYqeYHJWjviAPX9XUE",
  "key38": "5P7g4K2H8EypHzCxihWBtqiuj7Edb1cMrEscSJ2k1MJ2XaK7URyzTbDEVUYadiC7vtsAtDNRyQTC67PaL8HXnMwf",
  "key39": "5UMAbysWKQqw2dmERSUz47UXwqkVaiAe2zdwmTfGoXjtxW5ZpCFwfuXmTJ829Leb7g6j7ZmCzppnwYG7isF258eK"
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
