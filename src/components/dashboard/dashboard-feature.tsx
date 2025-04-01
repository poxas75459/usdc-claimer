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
    "4eyx9jYHHVgKkmjU8meiuJPXKGz8orrJo9nRK5cyEpPnEupejn7y79gCWfwQt9sXSA12tRfpY4CGyTXFYVoDLMWj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b6cbNMUqqq9K7umwd4orbbwh19Dvr1Lwkz2XQxiWjDwAFvxwk5dwt2bWKnoxGTU6PJxmpqTQRoDimZe7BXA3TfE",
  "key1": "3ozZqJ7jPcUu57gxSWqvbXh9oNhhvfugshSL5dbgZQ9cbq13DkEQKJRAhVsyft7MsKgmjiR2Jpq8kyh8TcStsWp7",
  "key2": "Bch5DT97uuetTunFX9YKLQHCkpT5UKKcnGhyM6y7rYY4fWrcWUBxpHTi3qLUDzcgnNcSKUv4LxcBgDjYqngna3r",
  "key3": "4PYs9X3B9rbdVq2LYxhMPbiJgxZQt8hPopoy4xsLTH5Vmrj6FSNGTSyj3BCyjf1AQApP5S5US4Wx3KRBzfnbucpe",
  "key4": "4WvU65nF3KWodNtYSycAsfnxx1wwxCZC8JubaykwxLhhpGNWTuu2XaCDZJCEK5xMa63AQm4kq5KdAMPHD82aFMuF",
  "key5": "4YSQMB36Kr6NDVCGTLzHFWjncYSztYZAWdwTiB5q5WW3RXKEgVJrVRmVjqjHiQCFrhYZYDwyg92v6kauq8skytVe",
  "key6": "4xLqb5f4jArVfEfiSAJLcuvGSdo2duQcPFNzC7GFnbbcKCMLUgUnDgPCy9wvAvtVpLaPgnA39U7rBGq3xNdPSnSf",
  "key7": "578mHdzCxAJM9wJHHqj4vqAgvwvwADmGjg72A2ENxedZHF1tdjkGpWMFPsCSKtuXwjcfJqp7RmhjM2fHebbSeV5s",
  "key8": "5aQMTXXqTWtcMeE3b4i5P8vjHsvaSBJLRkLSgkAjcxyd9j9JZn3oWGksDPkhfgoKWrV7kuRtmFz32LX5E2tSQPz2",
  "key9": "4whiFn38u1LD6fRceugX1YR6LnrSJxFQdwwxNTSRJ6tUzAYscrV63FKcpmmoFvTQeVCuLuShDRXtqs4VWXcFvEFR",
  "key10": "5ye783Pc8QgtMGC5ML51RU8YFZZhc1N7WHmv497VhmV7dhFdfoPebcf2vdiWE42pQMzPwsqKQ65CMZnjpjTp8emk",
  "key11": "4fngHYFQxrSDKGZ5m2mjMjghFNSbgwXkbzg7UxuMjnEEEp9Yyi5dSyDB3WgxeaBhRS8zaxNuPLP4XGVErpyTSgZ8",
  "key12": "4PQETtBqDVJoXUvUKYgGzMcXAyAUXpgcnrksAU2kebc2VuaWJ4SQnUYis1TZpJFUJTaGVT7sE4nQ97gKdiHchWTD",
  "key13": "2BcUEgX27p71qFcejx1qGXkcLdqD9ZG6ifChxf6yXhDMs6fj9aq3U1HaTxJdYk8uXG15aygHbqnhmMmJRTQN7vKV",
  "key14": "o96mQniCEEThJ1beBnhJ1KXPco3SkjRJyCh4FRL37UnHTQBDdxc839y6D7ZRkmzTHgZBsVwpYN3hEpTDFGZRmrY",
  "key15": "58yQsi6LiLF7y5K6pPWGU7ykbqyzGvDLwvgR4Xart1eJ2x3ugQJdM3uK5oRt3p9G4YwafGHCf34kRTwseCsZCxeq",
  "key16": "2A4vZxKJgLZrJBzEmqtVksDc9RjDcXtzjZKm19aUCHdnt29ipJHYf8iJ1z99zw2WcyXfP3Fsvk8EsimuW2AKJXou",
  "key17": "42U2xcDEMJqUHzkY9SDW6yiLLgYdgA6H1T1C8JiFXpvnUGYgh3ZccJBot1rJTos84z1vKBpmnLfk8bK4jvfjM2E2",
  "key18": "2y6vGW3zdPukbCquA1JK4cjb9Sw7FSmnZs4K4iNzPxdWFQwFrdDsvRtApR6axwQ5pT8bxozDPRqKfRKMgKDGJoMb",
  "key19": "3nK6kqzCpNgJT2yiTvn1FGY1hRFYudxTx7ZGpf1pEaMb78tc63nLy3X5ZqX7kv43k1GLdjNmzsq9CrMpfoXP35av",
  "key20": "4366S1mMoWpHT1wRe3pYE71CptzHCAUk3HHzsLo5CkEHA7M5LAvwMdA4zwRSeGnDrXRAjwKWpUFkdkwJADAkSsrg",
  "key21": "5syiQHzk5r1tXCySVLZUs11U4ADZFBVbNRxqCStn8VVMej9WEkw1hJ5JZxAHhz3Xb39AFCHkyxQFqoFL6CA7Yy8p",
  "key22": "35ssStd5s2U4oiaqidFELfSQUTNXgoktxNSE7pEmm6pXgz2YTmBRT8zYYBG3oZB46x6ZcgAAohMfir3cfrvZG7M1",
  "key23": "423bvnU69vuxzYyJ6ALhPFFrFcND6K7YMhWUkxiodv3wyfsxWr236drtpZmaJ7PjsVV9pEXZjiwb9GFvRxr4kJVj",
  "key24": "2aVdtXnonYJLjVT6fZxGQRsXzuKZRsyHjRkBoxohvqYxgCeQneLA5fM5sVSqHVEJz7NoKcCftPC1e7LkFVZntMbH",
  "key25": "6PYGjrNJhEqmfstr8ApzjRgzSpMdHtvn7FbV5Qg6fxRPPaV5HvqihK61UWjcvpePW344xMwsXYsy6hEQMMk5Mwr",
  "key26": "2n6aTahnh8XF9KB9kKpWjNPrtozoBNJibETGdL1MrCU2Fm229oq3aUYDW7ujSALFqyur32TzdG1oPbahtpKno7bW",
  "key27": "KqoW2kFHdgdvnrt58E126NzJAg1r1ACWPB5Qqivz53D24TYgS8HFMCpbWiyPk1bPwumR4v7GK77GiHt6osfwDvj",
  "key28": "xuZHneXjmr68G49e9KyPK2g1G6d33aNhKvckoGuYNwYTfteLe1FgCx1jpyDUy1dTMg5gjsihv5HDhdtP9DgL2tt",
  "key29": "4KUMNrUWf4CLEmxWNk1XcaRG5qtuvQn8mheRNmwieUMJLjZbufPEFL91H8vE7SHRPLwAFZXTvgwZuhYB9GsudRaA",
  "key30": "59Cu9mShp6npwHzPvyad6SRpYAMYdBsQUwzkxwKqPkmPVe3DsvWjuWshUm82AQE54XJd7TiAsgiPtPYEEKGPV1kh",
  "key31": "66rsCKqjx89o7xvuiwoYT5qzSm7zF8iQm8QzPX5SsMzMdxgeXPS9n88UNxYkKPxeA5227YrRePx6JRuX5dUT7N8u",
  "key32": "3fV7vJHT9rZLk7cWxWJqSvdRjKXG64YvxjTZwQsdubS8vhxZaEdTztMpfxA8D56asCG3TM5HxbtsEJTEbsKbhdad",
  "key33": "2eNJAKRNyxw8THZ89xctFQWVTnzeC6Bsx3ka4MjKbb6LZE2Ux8af2UoQhyGroZkYAmEJJhnKpw6SHko8JH1YPune",
  "key34": "4XDQnoQ1HPMeAxdDNUfvEym3maoqPVoKFuV5hea1UXmV3fwad6BDQ6exZdiQ5anzTiotEbPdSXFYvemwGYZ6iBNw",
  "key35": "3D2RgeU1MeWEBLVXxaS91MgRG8rY5tq4fuXmR9y3jevUNMLXqf8DDACU1F4PxgZirKJVL6y6QTjZvssmFqUNhrMt",
  "key36": "4Zg8FxYgmtjgdL6MfRVv8MjFe2eSdphiD1U2Z7tKnGU2qr4cLChw8aAyYVwvqWhJnT7BdhbrbHaNymzVonECzFB3",
  "key37": "3kXKn8mvNF57P1euwt7myCrYu4kHdWujXLfEb4pmqw72KUkE1FCr5RC84WDAvNPRrM1LMbExw9J6vdszrMxc2B35",
  "key38": "5N1d2Cd1zN4wpoVZYqiaymaK6BAaANVxcSG7i1UKnmSgqNgS5xxnUGytpYekGrAPCtGNQiMkRm9wa2ixS5eUtyKC"
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
