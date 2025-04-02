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
    "f3uo941wFo5xYV9W2mFPePCtRkczjvtVvaVMjntdBsVJSM5PbVwCpAgvjPZ5At2Jo9xaDMdNMCyUqCHd9J6G7iM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z4UHoFDqgGQziPN1F3j5tEYfGvoWpY1wh8YygD6CipBTx6Y1Dt9KmaKrNHU1nL4Y5qishThhpLNH97ivoM8n2LG",
  "key1": "4DaGT2BMTZ1fpL5EXCKm8TJZKRV93n7iD5BCBRHdMwk5FPhvQCAHARTRfqxt6sHGbPDnqyknxBNmsJvEB8Gk8ZcW",
  "key2": "27ygGWxdpAcgacmWSHrDPUpjdxD6S9xj3ifsPsNvqhfvPhw7AgovA3SFwKiwq5WWwAQwZnMMbqT4UsYLsUqQjrPU",
  "key3": "54zXqMambdu1cge6qAiTf4jGoBMAzUVJfGKexwt5YnKZfT3xNKJSvCTFzvL7t7U157wso2A8VuCs8Z6c27W4riLw",
  "key4": "3s9uCQ5Uh27JQBjqGGHZedqmqvnrgHQhP9nHnX8TnmD6PqXj9KCxz8ZemqA229M2sHGH23Wq2T79kzBxc4mbr9pv",
  "key5": "3egWYYL25t6pwuNjHVniNrRMQXEpMpNMuTPinVGzKf6civ6DUaUCsMsscbLctwU9Qtq3VghnifFuwboaQJYx9gJG",
  "key6": "M8fNvbq74UNNJcR13HEWPvewByyVonrDTyBM8tT6Hh9ZFRT4H353a5rS7JwrwVoyBqF8mcUraiEbe5LmXSESqew",
  "key7": "5Q4NCsg2GCF3HTkGTspZSmrsSoXt5iDT3MsZur9fTzHT1iPVMDxPWuoUhFD9SsaufxKS63igVjZ8FNPszp9HR8gq",
  "key8": "3ia1gEcQtc6XUTZmNdkVaTXzKYqbTHNCwJUe5MQVZqQBj2idaHBCzTgQCDSZw82wGzefJZrQTaDZQAzZfeVphV2i",
  "key9": "2e84MaAuytLk1qjW1eybXCy239yBqTfEwgVE8wnGFy71pFtrybebKH3JeEhcvhq9pKLMnYzNKMRaPdi2Bf2ML6tG",
  "key10": "4AovZhNHAdL8QT2LmYh1Ev9w2QkjTYAK1NzGcydL2AEgaFbmQPusPa51VezLds7rJf5RHtX9NvyXYuDP5ddK4d8K",
  "key11": "qLcmNiWpiTPAZZGGRzFNBDbiewsdN5E47Beoo4f1SE1oZ9Yhc2Atnc5vvJ1vZ8xXNaSm4CF8tsurMbkWgacxM1G",
  "key12": "mMHctDqnTStxajJoYuhK9zuM21xYP3F6YGpXV1THvDfmC9aUBYoxmEEzvsmbMQFtvP2SeWS2qWgCXPqVyAjvyPt",
  "key13": "4ACu2kReTz6otPb5oKgPL9Fb1LT9KKsGhBvtewKCp8jWnCoyhNT7fhwttQgXbq4LNYYQQPxhSn6BjwnAcyh3LzHq",
  "key14": "5fzDC9kb3zS9sgDk94yEnnFAqW5TCGbNAEq6qqm8mWZw8djnHU4EzPX1xGGU9nrXDssDhRJZiH9z55QYRQK8B2Uv",
  "key15": "5USbk6KKYrmgemXwZy2RAxr6XAqURSZbe2xH8pvUWHUxjF7vKtbb1sd2i4onRKUY12W5mGuVY2Mk2Ki4uRupTzYn",
  "key16": "3AikxskV3tfyhUjqeeCyFggoQuueDSQntdTCWRTyTRFxVbDXYpbF8t2f6DPgrHwRxadMfnrbRpuN6vx9eCwt6gLV",
  "key17": "3iT8W6qyUWYwHjtUGQqG6L6sBErMsyxWnf9bKJoLCxkV25kDakdqwsv7RfXj9tGegeRh53rJXtJoMkFvYPL6dyVj",
  "key18": "4CKPjKhzeMToyTHwTWHGy6LHiLkNnTtgjJPLdiLoQQSH1EpFWS7YrEwL1unaD9fkEXUYbkm7RkqGE4gahUUKwtRi",
  "key19": "5XN5H25gY14xXocUbgfyv53UZhwWXX6fTEdBa7Hdt6ZdACPVvkqiAu6vJHu9NZTfMDfenzg3M36KbYdW5A1U4tiV",
  "key20": "f7uPmYJeEXMdJnXnE9XwSniHvxumgh8p3tXdHDrrodv757yqmvdX6wWY1BNACVnytBoHFZuPoPZQiC3vXy4o49v",
  "key21": "hiy2gJv28EopyEostfDkMqyefqvMScRnShAUGt6jNUCsAABcAsY7CHqxQTiPibKGAGtrnviy41HMc7EhmvnpVEu",
  "key22": "4c3sr2FXtUyjbGyGEYHJSHjMHjpTz4cYf1k9eXnnTR8Yg5C6WwGEz8gADCbHXTKAbGFqAKiV4b6t6cYL25JAKrkG",
  "key23": "2tdgdmdG17NfmnX5R3P9m3f7NhfyLWFwTKXShvjrGqeunxbHg3SvqC97nAb6AkPkdgAtZQmKUPuDm92wus9vqvVm",
  "key24": "2MQnSURAptzpUor4Ccwy19hJvvgDginRqzxW7SsAwr9Stq519BWmGbNLxuQ5aLj6QbV5FioWGXhsruyTqhjRt7MJ",
  "key25": "4hEjT2TyWoCACnAZ3xfMj3CttaTAUyuwxAGJU3Md4dPWb4XFPjGVsvQpR25AJfeNaFVQjtEMsb16A5oM5gHPS7rf",
  "key26": "5LDudsjfECAert6Jcm4hZmN9LUt1qJeyfJjoQwqze1q4swVUyyjEKhd6WE3gewgxWrKhWCvxSnceEzF6CZCsJ7Ef",
  "key27": "5Y7grthMj392kPiDfUygBhG7PneK1RAJS4fnCFfFC4pZyq4LWizkxBrFdgK22Yewvcawfn96aU6PKpvYmrvexB8y",
  "key28": "3mAJ2ERyv17h7MzVXMfyHWGznGM5j9ZEyTQYqRKffKEkz7yM6qYueP7NnTVep6ywcMxAJLThsYfS4UeK13ExbUf6",
  "key29": "21bwv85Ybf9rdYPpZCvaSSQKgYtzMVRCPR1nBZGnEBybDMKiLAcwS6YrHTV1PPN7pJFeLmD8NwHMsmbVmdWj4epP",
  "key30": "Hd9eWahgWNRPx91t9eVLqrj8zhXNzeatN7FpgkE4GLCEiV2k52pgkhSJcXpdDpbJhxKyuReyxiD5KHuSb2gzrWj",
  "key31": "3brY9cUMw2xA2StZQyESrcjGdL3zN27oVCSGdpezLtmVDnYSm3UQu4PmseJLiqMkzzsTgvz7DRvtSTguJeJpvTwf",
  "key32": "5HVof9HgqejhomAPQFA1TByvAGkka81BcofnW6MdEeRD2KC8kh74k9rM38hWX7nH6kYk1jsC6mZgDu9Y6Nqn1LGA"
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
