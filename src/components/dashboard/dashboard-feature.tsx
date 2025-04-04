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
    "2TxNG3Wrx2qAhmnxn2SYVrRULqzyADg6xGnCSx58oMw9Mp1SEQmkfZbXx5USg45hbLB9Ru8RQQtAZK1WepmLZBtV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N9WT9a6CDF7ZgQsENbxaKA9tzjehHpXHW1JZ5cnigG1gGdsXMqoy2Z6ZKUKentyWJcVMYrjhJJCKdTcYRceksmc",
  "key1": "2kMoUuyBb9faW2WhRWifjf5xRZq3s534WngrckQdw7AAr3H7DHwbdnJG1aMMF8dhV3BeCA2z7XP8r5NxegeCMMZZ",
  "key2": "ofQRqJV5pBufACTKsQvbKWkbmQ3r3rTqPDo1m7BT8giXW3GBS94DfLzM28b2tYeNyhrxVsiKmLjUdbeV85R2Ztb",
  "key3": "2WXyFbbSdg3YVauLc1GUyVc9Xa3LLgMMRXTrxy5zPgcTxbER3V2MGskt7Xv47284odFzEujCaXU9byEZ6BLaGH66",
  "key4": "qCX8Nkay2JeeLKf3e8zMUdC98ao5Lskpt8s4FtEceQcGZ6hNGjB5cyD7CuEAZ17hqfNEoRsDwmYwMuEs2y8XC4n",
  "key5": "2V4t4vWjki1dYJ6ii3foKYmvAsMvYrUv6S5CR1iY69khq76QThzg7haBNga7DSa9wNvz1CiAUiRYqXQeamdZCMLb",
  "key6": "3yenEF4UQVG27dRa8pK47kn1TTNPvM12vynzxfSZdjcSUMSPCQBPnRkyHwaXb5XxF65np3ggzo5YSTPsyoYcf9Wd",
  "key7": "D3UkQ4SwY2J3o8QT1pM78fE8zNRR3Go8v58ygNmverdoWmYd1jzDyRxjbkfwdsm3h8er4xAJZ1BpqnoGPor7EEe",
  "key8": "5rV2iN8AUcKAoKXQNp8h5U58XJXF2amoou3w9DNKfhFi9wc98YEgMPYitATR2uH6VbNs8bnrU7tmfGshjPqjdMU6",
  "key9": "4f9SwfhadVfXzRJvn4vfikvDXmrFcBqQrZpwEoJMkqzWiUSQ2taUXFb64tfnpDCUKBncK5Bu2ZsRVPhNXFYhSkih",
  "key10": "2BkGWA8V71FHzcEzceGYhadvQmt3A1n7aKHGCgF1ZtbpYmTqxR87pAcC6LqDCtVc2S3HUExrjV64VdLZPE839yaP",
  "key11": "4BofFKUmtQrSv5sSagT9TAZXGQHxev2H3S7xfUNPQkEt7NfnXJSBhkbGZBzSozMpPsf1w1Cf6QaBJtDgw9GKYAVQ",
  "key12": "3uQSBEZfm3Ax7b7ZDjD3zksLj4dBA3w64ZgCM3uLMQM2vNpxJkUG7JNxFXFhG6NhpVLqPeC1Rh6sZacxiyttDPDi",
  "key13": "dMjNM3epjqkv4BPrqq9Kud2hftkGpEyZprTcjkZ1rmdwWPwrNdG9WKt9HuSoLfvk9uPABMjWfEFb47cz3Bf3aW2",
  "key14": "23fGSjNTQJQpFFXh3rXScJ6sJoa17McqmdvoguUZDaRoaGoUjM8BJQjhBZWzaM1ne1Vu6FBAyZ7ZubCNd2RxJDNZ",
  "key15": "2WJzDvVkVqRQEUTr7R4a1t5P8JwVdPpBaQHiqYNhUuEiwMMjQbfic5WRD2BJi3pQ6HXN9SPA5HKrygG2pDfYxWB4",
  "key16": "3hTgzJdUFu2qr3e6k6Jv9ZeUGSZBg4J2VbFEeyxR5CWmtHYq1HfaXPPiGNars9HDMThUqJkQ5DBV71ADH9C8HRa7",
  "key17": "RDdRedR4Sfhns3bEPTPYxiQVzkc6fDCtatB118qkpjD5yX2wkUiPH8cWscWHmsEePWyhtacf1FZdjKmAdx6HHv9",
  "key18": "26gsPPFLSxDLwRzmvnMnNcfLvq6TBXBorrrvuh5UrFjgFGpKtzbgeyQErzDpUb6FZggkJppTfWnKj9X2jbjixieq",
  "key19": "3gYgbahd7ErFCmGZPZ3KF4Q9gkV3Jzxup9gzPj7kthjmKfqNj119KYVy8qQzJ3YMTwqjfeZ8jznG95AbVMpjwPvW",
  "key20": "58XX9HyjLqSYxn4kS7ArBwa8en97wFA9rcHwMMXNXSdzqyFS5xsk3XxK5MhZJ5HWtwHeprHBCvYibcfJEJ3sGJM9",
  "key21": "5rGRkaGYGfV2ivCk7VgTxy6iREFVgZjNN4Z1LXtaUSGThyDhuWuAABihnBb6t1M4539e4JoSZZQFHrsGNjaUWXwF",
  "key22": "587u8HQcKWarHezqR9hW9oFiZdGFz43jYvKXPBURAdrtN2uV3Sdxd4gyDscZFgcs8neYuBMrF5zsJiTmnt6iAGXz",
  "key23": "4TVQbxSriPnJUnzrhZhLAmmEz17wESbVJ6V3ULbUVnzFGN3rmAz7c1pTqr8UNRGjzgW5CD2EForWZrNkNresheB5",
  "key24": "svrE8Ea7tocU2GKzcTxtNHGNQ8wLd69Twyu47HX2CTwgu2FSZcrK22gEwr66CRwdwWAhQ7qgE48eyF9QN5LyLrX",
  "key25": "3Wonavn1dHVkoLuc1qCdZRQocrvruZhkJK2FAg5jCjxyyAqMW5gjrFib3KHS6zo7kGfUD7Ef7SnRH9ajs4S8QqKm",
  "key26": "5ucbzcc6HM3jxmdoxRYkjQAmKJYAS31CzrfHUvrM6ZsztZbD11zD82X3shCYRMCVSzKEqbbj9Sv3YvhhUjodChJ2",
  "key27": "fV9GHuK7MSJ7JPPHZjJE31fCryWaTTSbp1AqzULJgv4vyaF3VfNLV6mpMhCHEcSQkAmCjdZsnKyLZdVSEGYPooA",
  "key28": "4F6LuvDZXrxFFqHD2xpWYeKCvghsUuVUj3w1Tz1Qh7etog1W51D8UHxdMgh79ywNNaFACsDzzgFwmNUWUo4nNopa",
  "key29": "23wKLPoYuatosK7kdpajw4HaMjFDnGyp8YGHMPC9uUB9pKKAsPNbLA2xXZtR4xsRoyEXrWJVBNEgQhR3s2oxmuHr",
  "key30": "5yqujFpSe6ewQTcrpJ1Sgmx7GVBZmcM9LqA2gzowd8sCcCZr9QFLTgUj8Y2LZyppaQyVS1o8CSGJRy4qZ1Q7RwQw",
  "key31": "47QYdvWxoSiLn7Spnh8NNbx9PUJLnJJTd9fkrCfNJCQKLPMxjLCzxsnZo1ibwWuTja8JPAE2d2ZY5sy7w5fZX3gW",
  "key32": "2W6ZCSGMZNFk9fDAMBveFQtW3VDe6Vo4nDJj2URBhzHf7SnMoHHqQUbHMLLiejECCDuue5PNoUUjK2KT1dZmumdB",
  "key33": "2SPGz2PQeXo9HmqLQK53tntsrYGNX42FfBm5ASbspcCXrtXt2QqeFmRroT2NQMkkfJDpubD5ku5u8deN3sDWsYFs",
  "key34": "3TZmcAVoZT2cGZsL8WwkoG5pnhvEVux5xSsHbTNyM5PPmMTxZ8vWks4wcg9WT7ok134A7k8eLGF9MaY1uLRCmq9A",
  "key35": "49Qmpfom8t8sjtnVdVyvu4ZzoeSTrz9cp7Cx5g7GPhdvjkqi1fASUqzqBYTHV8r7YV5nabYcnwpB8YPwKMSvxCtH",
  "key36": "3ynUT3qLNuxzGr3a85aUkUCjWgHFdVYJVrVb2J9aRsi6Zp2S9FBNEmvCq3AddqzVLeGYq4r59XRRj4LDLpQnbae6",
  "key37": "4FSQbTryd3XoMTTNAgeEkB2smFrzDwhvyYSJTtEryXHwfnU3TSn9tUgdnqA2BgKcypBoStLx6mqTNxzciDBjoqSd",
  "key38": "5AxGnMKjbiGeNqZi5qTT5xptGgSyRkE4ZdmgVZbyfC5pZU46jct1NoCRoaQhxYPRSZKPedGUZ4KHcy6V36oL56ze",
  "key39": "ARWGvmUUcZQrfNvpKfBnAr6p7vWLZvhXCYoMif7rAtfyGYZ87ArEq1nKq5drCu8mdz1mNoaZrbYnU3eMLXQtrkr"
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
