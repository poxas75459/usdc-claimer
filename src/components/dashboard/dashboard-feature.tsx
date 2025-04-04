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
    "3GRMeZ2Nn29NXVoDrBck1jSBbABP73uTtekjNGBgA81anS7L2HQPxrWBQYLCe6vF9EYNBNjv5TwULkeLec7aei67"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oMUN2sXdMxbgDBHgnAYSDPC7MUMrUQcE9vtdzPSFXmgAjRLSM2JfeQMgp9gGMZ5jVEEgVadrtw3kXESUWYf45JZ",
  "key1": "4BycCE84JoaeSbd4dJKnFekMRQqXm1GDKi7jk2onihKQXXSX5WNX7twEG4pHr8Shih2FJxzcoRpjDdVvuuzvoeLm",
  "key2": "5hUjJMPwAigwYKtqrUute34TbEMHW2F6NHioGnN5GvLqyfzCF3hmb8sDvZ9kDNVgLeXM9YiRz45kVzkTbm8MAdXz",
  "key3": "3UN3YjTkrEByTeh9Bx2HU1S1ukQjw4gWqg9wpJuQeXMZQsiPyP6Z2aZEFrmpjxWzvAQ4t5BsVtX3ACwzqbkWPhsq",
  "key4": "3HDDDbogSyk33MvMizp4dUCxSnskKP3fNTyQw7j2jgui1p7GcvHFd33XwBxnxgamPjdaz8Ppm2tNpDUqvZAPAEY7",
  "key5": "8T1kxbGsD3Razw7xy3qm1JJmab4jL6oFBZRUwEksXqXdne2XS8MiHrQtY6EqFGnCokG8aBo9gSKZXTEJowapH7j",
  "key6": "8hB4eUmPnmDyQ1h7DVc3PAjGvJtHUaii51sQnYsrH1ndnfdbaGHVMv7zS9npzuyYqB2XYope4Zth2aT3Xtu3qnJ",
  "key7": "2DjyheNFPrbsqS2foTLB8VpUFkEvh61CW4AJrzseBYnbZXs6GQAfdk32QUnEBdZ5hsoPftY6kt9eqxgxwBZiLRh2",
  "key8": "34JpbsatmYQuNXUUZNC7PNGHAZXSmLdvNZwudjdpdH7xjz9U6JjYL9aNUob41H72q6UAcidffSqgmgHcd2bUzcVk",
  "key9": "5oZStVNVwo75te4YHK8qQENbFKKyfjW6jYSfaBHpfnTV8DxRnAtgP43Piyme2WgCA28cm8d5jopkaWbVHuT2Qy9s",
  "key10": "5mMg9UwLCKegPz9jHjz423GJrk1vPP3ExRE3mec8ncAscB1wMvEuw6ARwbXs9wkZ5NCN5jd4Yb8RPS585T2yHVQa",
  "key11": "5gUFxdrgjKVgWo86pH1cDnMwvozFVGYUMqQoVisHKxYxEu8gGcBGg1SbFbNfpA6DkVNhXEwdYspVh1E2QXgUyvr3",
  "key12": "5gG4jrQX4byHKUwSb4MvCehAkyprFYa9mAuzJeAcjALWAX5qaCWnJ9EfFa21vQ8NheK16gAQi8f8Uhq2TuNhsDFn",
  "key13": "49Bz42kUzCaHdB8DARxGRsiJtQdkApPnJaW8gy98aojdtKbUnBcueZD7kKGpE4f8dPFEwH6VNhzsfz67p6xQgFbJ",
  "key14": "2ecV7MsaZWUQTDeaE1XM4yeq6AJu3evkmxF5SRENfZfjDCmCWjPeJ41NDKaPcMTuzNYwRoWQPwscamnAy1hDozQi",
  "key15": "5cu7VrEoBVhTizpRrnYaPU6XQh2xWB2RSkZTdXa3FQZCLtMEEVfaZd19SzrXFQjMTVA7byrDUwkckwh6K6Ex85W7",
  "key16": "vd6pcH9jCoGpiYVFnJnumEPAFQoCh7S6RauiRnwaKf6mUmbdB9PgjpHw3zjJ2gccLMSN7ecsZwpcBQqYke533NG",
  "key17": "4NdTpRiZVDgzc2e25SJMPWdWYkKxCTtvFsCRPLRmgtjwethGb1oowB2ou6ghYdDuGwZ385oUwBXNdQU5dDYaKHoW",
  "key18": "2E81UeSgsZazn1ikDk5PGoHErRrQuKZZaWQnCHTLZYuHXoo6CFXBZSpnr2j9V48TCdHkYrM93o6r4fU2ddhwuhLE",
  "key19": "3y8z7xH6ovYy7Meux1HfjGTPoG7HjmhuJ17enPWwJPP48s4sSzLKzdWEZC5Ad3ze7e6ySb1MH1nBHEsut3SG1hFi",
  "key20": "3uaxGTWtGL6KL9TFPdJDdjJzzCreSQr4oZEN5kEc3Vkdi8sfDy8dArcfi2Nnu3HmtF6ucND6qozcsw57XyDDMfkY",
  "key21": "5y7bKGQRmiKkiKyMnPSNgQsprnezb9iufnHkpj8NT1a4oj6ivzS83r2NPx91gziwUS61h8eP2DdcD6gHEzTbqyQL",
  "key22": "5UbDfxnBXfq2DFcVctXt7s4nSdR672yU2dn3M7Ao3EZqHt8qm6nwmFmkkcxKssts2PadSmoiVxxS2WRkpY9hvi3B",
  "key23": "35t2U6Wf63utAMokoJ7Z9ua1eV14pvQSudEsPB6J8Jb13fByMzQDt438tZa91587FnDmVLsdvpZqQFJLDJMLnB1u",
  "key24": "VWP2U5X7wnwmhxwmUXTUXdz3S5xbLd9DbJ6Sdw6uSD9ePGbmL8kVKnmxaL316m7tPTnhGdRNNuNN3U4TP5hheHV",
  "key25": "5u63aMpkamjayi4htuV3TPab2htyUZeiAmaNuAqAVVrh2mfmZwFbHCyEWSJkb52wQ7xz44apSVUs4sq5cDLvGaX6",
  "key26": "gyMR9MB5bnNbm8yDbc4oHZwPrVwTD6SfXhwRwKQdHxMtXxAJ4ZqNi1XuGX435ZDFaXDjMadWmeB8adyCPHqoWkG",
  "key27": "tF8bseqcjLSqc4JYf6Kgneic4mGT6pYpLbjQYFCr5hXkXGaAma46Do7j1Gw8PoWgWAhFWukmAUKq8xwD1Bx7ZEr",
  "key28": "3thDyTFSk4YNQyLfUkqenYJJiFGyQo4n1nBTStMHKA1xX3UQYAULCnqSdgttrT1XFKjVYVZWAn5AKZa4CxX4VGEQ",
  "key29": "S2MEWsnETJQCFiV1FKQyYJoY9YX1kpDz4SoJs4kDV7K7LiUwuq5KP6kcxtoY1DV4etZjuMEpTjre1L41Pt23ASk",
  "key30": "3Gvmnu2UCF9jBZMwVaHVdkzgsQKUgRutiHifaknYfocCRCrHAyTBMw9S1vTjsP5kYDPPrJf9XpZpQFhbPj2eAHMK",
  "key31": "3tjtb3B88c6QBJnrGeST1Djx1KWhzLD3MvLhs1UGssdUFxzp5gkkicAs8tqDEiFJiDfhg9b5j2pwFF4XaU3zWRBS",
  "key32": "4fxv71N95QwYL8ViznbpDYqC5G18KjvDA7EGqja4aQ24Vkj8drtHytaq2HtuZLvN2C3reRiS5feC7QV81tw2BF1V",
  "key33": "D4jL2vPZh48MXEiLNeu3fke1pKvj84Emhm8RFWc2vQnfhAeMm7MJ9WJ9ohyqNFD2ASrgoGwmPgbn6wNA7hmrTjV",
  "key34": "5JZ69tBgPWYpPxdrk1K2uPum25prAHNxkdyXeXisSRQzoz2GaMmGv2jegeKK1VrUCP3gfNarRkB1DNo8mDeHoMe6",
  "key35": "5dUkrRZjzn4nkYPVfu7ph5uq6hu42RHni9SfAcT8GKCP7vEpxHYXe5HXMngy2TgYAeXrnGUtkuYKX3x73f5sktZ2",
  "key36": "2ccWq3B1mP6jQMWZjvVoPZC63a9tERGCFZkBCH8qa7KicpqWxmgEtUR5orVJ7YaW8L3ptYTRY4AWShnuaz6G7XhM",
  "key37": "4kLMzCECUJwGbAx1AzgwhqEr4Hb3cSJGYygpYqwFMGuBJAhJ1CAvGYyU3c7XqrSE9V33i5Wm6j8uXamBzRgA5hqS",
  "key38": "p3vhJyk5TVze6egdAuufSzXtCtxwy9UVjb3NfnGWDkPkELUVQEbhqtP81GApGRdCp6EXzELsNPZzUPLH4qgHwX2",
  "key39": "5SqEJmrRySeCBTJn27azXB7Ki2ZAEfmRAJDLNJ8BWuhoU9ThSBbJ3XPg2sUzpB5b73G4eYAdH2Yq5MHYaT8cadvM",
  "key40": "5dAqqNBBELcFHznURSKzfMCxtE74pCYLiYYaJV9oRyxmZvxkriJPvVUUTgL4UVucD7Z2ZzGXXvrmohwibQoEzBJ9",
  "key41": "4yUGFbZxbowGwzWwvc2ecdiQnyFPsfQDmDDDtaXUvDKXJvBLXRyh6StxLWGgLFWQd9EZsd3n7xrX8U3Ld1aw4X6S",
  "key42": "4MiTzzpxdP9xSCWitqJQ86dWUafNaqrsVssdn7dVPhhjTxocSgUKJXEvzLqXFCQBTc17Z3Agpq4rYhNouTmDskbk",
  "key43": "4S4BhEP47NQA8xLcqDamMTVUohbLNu6xdy73rS9WsuN6fbkMGhWszRtEd8AbKuF9rDjQU5nsRmMbsx2PmyANR8rC",
  "key44": "33pZkyf7E4TzFPNURSQbYw2gg6cCawjbL17fd8tLWZmT7xAYDoc3oFYYgN1Dan6kdXx7gAyPt4Y5EJJtM6BXfmfC",
  "key45": "5PahW1va6zUm1msqnwe6shFdZM5scTd1bqRvpx7acB2TVAJT3CdAw5fokRcVQ6wwpSgw7xaLeCUCfyAyt13hgUe3"
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
