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
    "fZZNybhRnYGyi8hXE5khJsUsmNHEyEykBu62hx1zCRGxDUy9TKQn3N4oLzzop6rrfQ8KrBuzgbYEfxYeUwDov3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ouwxPgoW3WyoCFA8da3hq7NLg1DuHVW7qQNzPdCKpc2BZmE11Hyg2q8WHiYW64JmRCW4CTki2Vc5NcYDM2pHjRG",
  "key1": "4KZVkwwBarseUjQrZG8P2y7r5H4uioXrKdDxyH8vJrSimSL9MAj8nd9nUa1NJkcpfcbK5PaLCUm6pzE2AdaVuDkn",
  "key2": "25pg9ditKLEdQScdXErR9UR5ynAybT4TZbREECwTjDDRKX5aiRPHG1Wv1AhQbfhsxjc6hWGXZMVYBjiH5pbyP4ES",
  "key3": "3vooaQmeqtEVDAHcCawLiKgK4ENq9Gm62ELgZqT4riYDScyLGJc99zxSSbvQqjw56mMobrJ2rkZAtoop1P2CSEW6",
  "key4": "4DFRbNokbJ3NY6DvqgCMBkf9SAer6EbSb5crxEiBJ1N9KZt3UCsKQx49SHmLRdcy3QdJdKdqh5VHqffMevMdALPN",
  "key5": "4M8v3kKNeZf2skNzw88QsEY3evshQUW79GCVqUgsjNnyyQLewL5CiUXs2trMRJsVKZ12UgRqveSWkPkG9GF4fvbB",
  "key6": "3tfYnPe2L6m7tTu7cf1EXdgv9ncJsdqfe2TyN3auyQ3qPHPNyHrXnz5V1tucJcML6AfgrCrwmRs4W3TDSdGfkqzT",
  "key7": "4v37of8Wef9Smzjcy3YeMF9Q4LT2coPc3pbF3yyhLimCNfpGz2jzZfnGYQmmN63aPj7DzpJQeqHeLv5FcKLfGf9g",
  "key8": "5bZLe2AJCh7AGJdn5aFazHZKZx7P62Xw2UxUdr7KcAspjFekKDHEAmFzXiuTBXwSm1seC5MKS91bgaNhhHuzK9rH",
  "key9": "3CQLFqNtcimUZNowzGFmwNhinXYEA5wotivCzFehbcXyNBCPCT8MisxXRPcUdvGLKqFXZvQkUFXMj8zKZGE4AwtT",
  "key10": "51TRUWCvfpkVsSCnFySChbsXeBepsYohJc4guFQb3YHuSDJfs62YZDbVnvmtrAEyGFySnCzq8ExnYyBudu5wzc1w",
  "key11": "3x1kU5yehcgmSdKDo6vX6qmPJnuPf1QVzo8oyNJEYfqWNP2cDoHafAEb9C5zscCE7BVrmo4f9hRwvRH3oBP4vzug",
  "key12": "3CSU639tDCm21pMRuLtgjy5HgsVkLQnNquYceXk9Zu55k1xb9z6o6WN6uMyzkTnEkNSkE5g1zFeghBkQduXDu4Q1",
  "key13": "W6duA59ERKqAdq5YVgcT3arpD714NWdJFG3ZUkfVTmeWS6bSHEoUmPdnUVshUxU2pv8e5YWnZUWzhLCGNay7Pwf",
  "key14": "4UG2naWj2aWuuZdVgM3cU6NrMA35JSkub9MesiXdHGeBruT4WXvoufm4GC7QtHt8Hc2KHtuH5ghoY3kHbkVG4XSs",
  "key15": "3qZbNKAy54EzKGBTiuuyisxgpdus3V5v4efwJFGqRXiMMok85VZokB39FyW9emGsLiQhKYxsENLcwDjDZ7aBo2dh",
  "key16": "446tadqCQ1kTLmCJjFU476oS7GqiW5TkKbQVbouDDs95njNL8ZMpENuLGUstWsCKjHP6wFahm5FixXgNU5zm9eSA",
  "key17": "2Y3ajRc7xq5Nj9sm1rYpxirBW3cKMNzT5gVKnhSayF3gCrUAZLxVnMNsrYgoZuZmvnbdYS4eBwFYaBG1DDbtrQR1",
  "key18": "4j9A4NfRnQzpyvu4zZ5AD7v3nS1WVnLAqNm5byz2xbX2B8VEpfiv1Y3fX6iUdjeQQc14y62NRRL1Bis3ZkTf442c",
  "key19": "4KzU6gcprfRBH8f4E8mqaQXoBimH7L4tf6ZkACTMQGo8Jn8VtXwKA7px47K4UxCtEopU8v6Tzq22VkeXUqYrt8LW",
  "key20": "4z7VV4trkn67BqbJy4wAfT3XAajc9UVNMs3YMFvuHpCBkz1jtsSRhiN7WVh4UCzxngQNU9GCXmYXVfUMVg9fWanE",
  "key21": "KQLLcTYFEzCAxDCZGeGHi4DLDamzwTZJmKL673kw2JLgZxTXLgJ7bL5UCQBqBvetw2UybebWeipFRBK7QM6Npfj",
  "key22": "5MEhznTxA969MiR2rWYdKhZ6msCMbwiYYCN4Se5gVdQBnSCMgwJiu3nHXX7Ltz2ae59qjUQPbA7gJK6iL5RobQZz",
  "key23": "4LMFShT82vrEfdmntaRMc7AqHgMdHram13Kv5XjTQC12zkJp7kJMN9UgUbj6zbQTJhPSVEUdM4HaoSQFvXHNCGin",
  "key24": "3UuV7oAbg5D3NbeANALvWpGTYTfqFtEwTEhU9H9DAxVR1NZG1Q9La9cikDK4KWfFgBaiGdw4qS2Mvmgmdi6GJcCW",
  "key25": "5ErNC8Mc5bXLAaZuJzpmwTbiMbjPeBqGmL8Gw6qjhVdz7Aiw9wUB6E5DCa9KXKTNCJHFYKxAW5B5xqGxGUJhNwYx",
  "key26": "5j8s2EUWGfAsNw4vcfbQfwon5Z6tBTjGK6oTkuien4N7FvhuWzCDVcBoo8SchweKMbLJ1fjrymHvqK1rhiUFdUTx"
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
