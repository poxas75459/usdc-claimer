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
    "4T3yQ7zvnXXYrFcruRydmaBU755SEf1i8TcShAcB2XPmJ2w8StqsnKgwrt7ASm6mqKaTZddEtaWVrRWhtoKPsXQK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J6tpMc9zfyW6qbvyDF5tEyvLZ9DuBwZS2an7psoV8rRxQ3ebnhcmB4K9QS3BaBNyZ2ioC3jdJnZVLR3EVkz8WHD",
  "key1": "72cUXoehvQj3eSKSR1wsMsD53UieAnEE9no493Ho3AzwUN57aJdgTcUZPpW8wsCpWuwpikX2L43skQjbV8mxt6N",
  "key2": "3G2HF64Znyai2MbNNKLgeUVHQVsZLZR3DVsAGy5QSwQtBH9dX87aQk9mdjkoycJ3CVX59iGrf3esyc5iLN8KbPV1",
  "key3": "5u7ruf5zJ5ZANFMrH5AKk6WwmuXzjicRAsF6rg3MFrw8zHad7MRixzwCNKhS9D3v319jLf4sKyjknmxx8tRmoH9x",
  "key4": "4UaGRZF13GpbL2SsERPvJq7ypn4NFwpvxu2peYh2SyKakVti62m6G73MqYL54PhvUQ8UMBmnnMyEfkSQFJ4FsgCx",
  "key5": "3TRmgc1fGiggY7jENgdhTNzEmd5WE47NwkYDoLMZuNcmKu8PzF9vidFJzUvVm53ospdokmkvdRmowVrZZWCUnUJK",
  "key6": "5UxFT5xS34nFMZJTP3dyc4KU3h9aTigxmW4nzZeLTjwxoR1rNkp7HqT9Z1bRyVqLgqBZWQn5QnkZmAm1ShR342GS",
  "key7": "2sfQLvSCV3JcCqGjmzYRBKoAfedDHPny1GMWW8B5Afs9Cuxvo8aRi7RX9XXEb3ptMGE1bPLE8TDD52eoUweS4XHU",
  "key8": "4pdC382EQ7BCGzxmMAaUN6h396dBUFDXtPGVdgQxDnm7bpZrBPGfWii7cV1quSh2TeoeSqQZZNQompSaPUGgGn6b",
  "key9": "21u9WFrUexbur1RjxJViKUpRrdWZh3K6HU55PdFijNoozYBNq4RbxUMvycaJc4TL7U35DqQakvKEFESyp9eQK1Uz",
  "key10": "4Fo5EANSnLtKtVYQjN2VgD5T4YT1pvy6MeY6VXdYS4a9GG2CbnAKpGC5L3jJvnLNAWd4Ru72hZQFPr1UJUTkYuYJ",
  "key11": "3phw8qshKV9dhu1d8oZeofmmvbzDy3XsfyChqbM81KR6zce2aCaQP4MgULvBoiJJGxrb8cpYERk61ZbEHS1JANRP",
  "key12": "5hcHQhAx5hWEmR38v8t895RhnXYw4yfrVeqiti5nnA6ME7aPzp1bbGh4ZQQYt5JFWayj52KtNeAfA3oXd8fbqUDa",
  "key13": "5F3VgP7rH6yzc7YgxgCvrV8XT3nsfXkDxpnLMB6E4764rgDtzCsYz6YqAMXPfoWoQPnfwKdaSmH49bcGFnYEDEcs",
  "key14": "jNqQqPVXR7DfKjpu3E8evzZ4hV5B3LFnbyt5Se48zfEiiDZFVW9w6qNCQ54NYJncxWV6TG4heqxim5vofPAkcET",
  "key15": "3JLTDF6fC34coDwr3gAytjFFmsNagK7F6LcTujipNT9jJPLwmjh8eEUL6cgnfLnijuWw2fKzDbwkvPFydnYfiKcw",
  "key16": "3o5ycoC7vVGQTxbSscQJtCVbf8bnq9QSQzC7RmSkHZ2C9z8GSMTq1VY9PSdNR9p2Xnm7xm2h37wPFTgN7GT9EHzS",
  "key17": "f5wTrTwHkVPPrynxUtVhqyihDpFiDfEyM2ddmsAn5e4pssHoo4tdvh2DZayyhxWw7W7dKch8zWZ95fJH3BRjEKM",
  "key18": "2uNyj1ZG8tS3CrHLjFkPGLuXETgGsg7YQtWQzo6ZUjGLBrRQaYnwVkGZ2ZzCAHfqd7PCy6YzyTBe78evsurqR3Rk",
  "key19": "28rujTvsyvPsXXFN2BDx2rCYRai4e7XThrb45UiBNHchy44KbX1MuSe7h9Umq38SuZ4YgSjiUiBHa4vDAK6DXwSX",
  "key20": "4tgb3u6cjTS4QRcCjZA4Qj796HiJ8ZU7PvErwwi5pmjRUvTJmnoL9VJhueNHbUo7EFdNPrDiEZfJUq9KeqzAgcae",
  "key21": "wZdcWhdwsLL3Mw56yYhXfNWVyjiqypFTW6BaaoDfQnfCYxLguujy5hhobzDKdZZDRanMwkYxhQ4gXsegJ7Tpa7c",
  "key22": "opaTBedPTXnh3V44xPZYomQtxagWtEvvHvBXGJSq2YGC7SbNpdAtwndnkHQL9Lj4HvgEpxKNmJgP3suC4PFTLRX",
  "key23": "3sqSveME3tcvX8SVjmukv2VvAV491wkNrmoo4c133MYVkmFggWLyJ3wg4L8fK6RdAQsNq7PjW2kyaj9wBMQEeFes",
  "key24": "5GAK3owcaMTdsZR8YG3HSPWUKCRNnxGus8CSM14BcLWk4GJi7MzW1VExyEYTokZw2WFk7GDqrNVcS4PhLnT1m5kB",
  "key25": "5eUizPb4v67yJoHGU5z3NYjTNqExcd8C5iYn5GoZ7PYoDALy9y2jrfvnbVLQUB5XuSoGsUo3JQTcCTqHJKhhFEFf",
  "key26": "4FMtT1sDU4zQn9WQvMq2ki1ML4gWEhFKLaZckYdVNAGg59d5VXnx8Prw4MQpSZaArtcUwxsw9nejRkTVR7Lz2TCN",
  "key27": "jJ1oJqTx6Av9d7XoQbDHNT3ux8MW7Eoh5iWHMdwqAPe6U1Qp4fvtpV22M2RMrCAx3BLq5PffyvwnuJdGxvN1zRt",
  "key28": "3cQnBG34ihcwrodmkU5DvuGGRwN4YL4JKHbmF9LPJtUt3gCmBmRyZKg5ocXW2UzieJJJsZxZm8rZ81XNBQCJhj6v",
  "key29": "51Nyo6NJesy6mNY7xbbgeaFKeQzaQd9YqBFHSUbkbj6So1eCirQPsqNhEHC19RssuxmQUJfeAUPoZ1aZnnVDtp9b",
  "key30": "3Qo2jpQBpdVC2h5cdCW1jght1Jqbj1Dz1UEaWDKk9bhFkpH3ppg9iNFQ24xySf6hbWTZwCiZu41CtvswN9SRBZfZ",
  "key31": "2gAnkimcpnRYoLvPe3jgcku49UUg4TXXv7vXP4VxFHFu9CPiKkoxytdBS4KXNbBP7BqmwErzqvxnzbNy4guvuzhT",
  "key32": "3dTGXGiYbTcksk413eDy8mscXUJ8Buy9A8B5xhCPgUuqb2xj1SyaE5hegvV5Poc4gTEWHkY8sZ8LVnSpt5GxPPX2",
  "key33": "3u4xJhKQ8MRoJ2Xr18j3VZUupeyaEfmJgYNgrxapLJ9Cthf2cTFyLRvoE7XS673Yd8QKuBwFKC8B9MSuwo9Y8fGM",
  "key34": "36xuvGJjvsRHCBrs4gZfrLkJfDKDyvWXZVABo7k7Q7TC4WtRixWnQcpwUSFVXWSfeUHNykUMqTE6tPthef3dbhrx",
  "key35": "4CrQycwW1TjkEwUVRbBCfWJ5rLSMF1g1ss2QT9CF8xkiDKVvvMmZLzqnA9JUgPTDKQzYptb5Rn8ekxnRWB5uoazS",
  "key36": "3kp8i5nwZzRup5QQkfRLnFiwtiTyZRPmmoweXsXdnwDRc9TbQ4C3p7iNhoUtZSRD2qJMMGo632cRZqcjnobkWBUC"
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
