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
    "25Rky9ADwAztCsR77D6odBZgPqxEeyLG3ofmD4XfjK7XP1Fq6htbHY1dZbdBaRQ11E6TdWJ42jS1SfSGpKie4K6F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2karxBrxfUr1FSGZ7Kz3vEuZN7DF9Ns6cirEFxP4F4LpV9QLWy14spj26cXD5CZigNpC6SfMfBWuutrNjtDE2Gip",
  "key1": "tQ5RupEY7CECBABJGiefV4HGSqfSsgZpr2RpmbTfgLCDRyPjkLz6WjvokW7RbGkqXfFevfgm2rcxGNrXikbgyr9",
  "key2": "4q3hLQuFegmeUdJTGwXTW5Dz4M2fAodUKP1ziqJ8RyhKnHjMHzFPseJu5zW4MW6M22ronfK2Q62iggZzFryepwW4",
  "key3": "3JAj7egZsHvinaNvnJZc6gWwzejne2LBn3LcKFgj4DqdbzTvFub8mruhQ9TYyrLo5oqYdd2Yuv7ftTc9nzTychKC",
  "key4": "5xXZuyN4UxnSTcHGUB9Hdh51mDjaXN6wqHHCjjjtWGd8dNEKZaH6z8A13TGYUfmcBqWcV5yZode4ABdb8Wwspve5",
  "key5": "3gHp1UwjCfc3HbHWHpqZ21P9DzRBnca7WJcqW4uqpzA8sbr4Grh9ZDy2fPj6K6i5Rf34HnkiRXvSi5xYRErCT7zc",
  "key6": "2G5uBopz4XRDqeDUvWwWHc5iw44HGNpef7racn4ddWU4YZGYDHz7gPv7YZiWVqVfj9zjr9iZW9kjmDkFStdA7M1H",
  "key7": "3p8xEEkX813orbvAgp2vWLkjTGxZgDvsBcUsTTSrnN8xpexzkBi1wJv9xcr3rx8rt2XcNpzABNKp7jrK6xx6wWwv",
  "key8": "3mLemFbGSG98w59HLDKM4ENwfit917YYTrSaz4qq3YhvredbF8ZwEznZN8WRRZpn8uCxtisMVJM3gUi5vz1iC8Kp",
  "key9": "3qqrZVFFUgMsBbD6G85ibgjYXPuao4ij1k6zA5MSAjqtJQzz4UnShmAkYCwdMhfpneX5a3ivYagyG1ghXA4A5xM9",
  "key10": "wEcTdont9aBLgbdK577vDf9Lh5aq2cxouVVe8JY362JNkVBSzneZzbCPVTtuHueyLCKfbrFFxmvQbZqkX3HPckd",
  "key11": "5hNCh4t1DT3DQXKJdqhTXpmywZzcssan8ZYQuT16b9qbWomqLRcRuoK6FZMmJwX2Vm9oowfATTUBwWduLHZqe6Sh",
  "key12": "3iik7UCgD9TCTNhodXCayriU7j5i64QaUGCjkWMe9tRWs2yStmKz2JCpTgRN2stPxjR2GiqbZufNQGvXzmAmvkji",
  "key13": "KitbWzS1C7FmKJaMoXFEtPov71rcJ6XNiL5PH8ZPhTPJZJvpghVNcu57L61famTXHatJ3DfAMZE5B198ndciVje",
  "key14": "2DaGWTCvEQjoikmAdgtHtJQhDXg6zQGqFT1r6rhC1aA9DpjmZ9NxoboXkcMp2ZnkrC5odUQSJFPDXtAZbSk9nzEV",
  "key15": "419Pzgh5sTCfrieTF1tUGCionGxpymJvX1pNgJ7pjvgVNPR58UEioS4SPbiitKLAjAHWvhqc6rcj2UMXPmWZTVVH",
  "key16": "3gyGiWe9rJGMFX4UpT3umpKepWA86wTbiQZ8Zygu7QH6zC2kVrVHTkkb1ftWJwU9HfxWKmDpZt5y3VDpDP8JH5DE",
  "key17": "2vURBezXAwzpovFRa8Ky7kJ3pH86ik6Q2bnaKWjNyFu6Bw1euYT28BRwrvW8XBRZoVGz3hzGKncVWwEj7ap2YDXL",
  "key18": "3wejniQ8sQin81D1FNnqMRM89tSXhgP4xbrY3NJuEboVcZvF2pzu5ooYgfpiEY3xM5fd76hDwP78VYo54bzD8Zyc",
  "key19": "3wVS2zc4D7S1S6rSRFmhPAYFRoS6TUSFmMhLUbv3uaqdCSuf6Jgc6AEqqS8VgzD3Po85Y5k9zrpm9zt8g9a8p1DS",
  "key20": "ThjxPuoqkSXoG8Z3hnr2ecyHw8mkisidJ5uod6eNV9AMvmYWQ7yUMxCvYaUDXh6379U7fmssD9jjxrLymYthg1N",
  "key21": "oAGFQbR4ggh377UmE1QmZCuwxynBcUsde9sAy6FfkXDre6snCgUhwJGBJarZbDEqSm9989tff6dFa53NhVeqY83",
  "key22": "2rHr57kPRNyU53qUfxeSpCK1tckw4A8L3JjwJXxFxnncTagWaegicnL8FH5BkbVBu2GY5cFgNKGwv79iDJD8HJnS",
  "key23": "4FzJE9Kgfi5uAfuAmq9X8b8pX6xkZmUATVsmcAbwS8eq713XbW8azLpHgA6oamT3g1k24Yko7GLE3z6WhCwK1awX",
  "key24": "4nvKokyTuSoXQ4Jn3xRAcMyo3yQzQ7yUxFSqTQCxXuoJVEVjgMiPW4TyE6aqfQWRbtLaYX7orZDJWm9AwpeQDh9w",
  "key25": "3TWBnEQ4TJrhCZSN9zZNjdqAcSpT2n6gRzzapKinpAtosuegAc5Mr1HgxrNCXTJLte8VjtUApSkcUZCAodZjDJz7",
  "key26": "2zbmj9VaPeovZoEfytw4Pc58PUTMbFsYgEBBUu5qWdWsZrHxpnh9EBEWn7gnKZc9q6E43P4YjCM47ue8zGeBrMcz",
  "key27": "4YjJeSJgKxcDNB87BJTqpbF1sKLJjHGkWbkTZ9pa9ZwhTxHcchpq8byiKtKvVuHNekMPK6zUkVT42mxLbLDmL4AH",
  "key28": "5UUtcaL9QPaGVxidanapy9BhL7842zud2RzJJg72GSsMScKcKvp3Wh6XRUBb3yeTfqfxk4q9xNBN98L5f27zFPLt",
  "key29": "6G3Y298asq1wvHvDmu4MeU18uYcXg8XbLxPNk2Z1qkqXdRGPLRWseGvKWrw5vok8MSatpxapGP4JMn9bMVrS3Wz",
  "key30": "3q89myJCZB6nWkLc3aGBJk2gCNV9M517aRw3T7mx97tqGThA2eXnNw9Q3oc5a17JHrkpUWstsFXegLaLAxYrWd16",
  "key31": "5NWvHbvFvjXdidKg3hKhEN6Hsf4HfuzuaexpMsgXu8o4mGhzTsDNobq41K9MsxKgkJxr1M1qgHHwgyTYCtpA39Wq",
  "key32": "2QCyWwPqDAnoVthvYkKELtyaGwNNWrhE3Fh2XJXGsemDqj9RMBbsvZBSHmvEZZWqikwnwX85UerD8qH8H4wVuUfk",
  "key33": "2JNLbokcZpdLr37YqUQAm6gxTAtL6scTMARVkcxsc3gbqCmGrKDXWLMoYaguDzXt3YSEFnYUJnF6hqvLs33swXYr",
  "key34": "3SyLNzzXJAkG2RjFSW3YzA4cgxttCuHQ3jWkBSVfs181g8Tji1mFQhFibKTsBaao5zSoVMorMTTaePAsBJTEoyoa"
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
