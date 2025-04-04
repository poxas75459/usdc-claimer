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
    "zDrNAA2W3veKheVWArhqU7KiGRXoPo93bLjBkGQekzYkpSoQzMxMQsUN1ik6EQ8QeL4S2zDUJ66ToW2R7DnTbks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47cpyrBdQ96hDxD8Qg6wVsCATxZJSmkkcHqif4GUJuPPppyXdynQP52z8ZCsmdBJtG3YfSPynBthQV39LHoEDjA8",
  "key1": "2MVcov7UMD2gqtvpE5twzgKwgbB7MvV2G4RxHuW3syBV6QRUhF8dkG5Hu3ADBa8LvFaejdaT4xs4ybfwrMq8VAY9",
  "key2": "33Dm5NLuzNjobHKKkCo28hMeLn4XJbJGt6tW1yUiHfmcEXB6bweS1j4YK1nZa8YhbeuejYoRakEUYF2uKCJAd8VH",
  "key3": "3HuLwr1Wbj3zLma9AfUsQzYMbdrhJqWuoxVea4hZ2YW1W8qsGDXbB8ZACBUAyf8UiQ9P1jB6fC9jscmcJSQ1TeKC",
  "key4": "3Qe1m8C5sBF3bB9Yctnw9mAkx38Nu3PYGnCnKsb3ZvsbniNZBAQDAszNUGFYWxUhVzKiweS6qCYLsSCavsXbQHZe",
  "key5": "23k7pranYpaCQcCCfLSiBqHV6Z9kJFAQw65jANCMhTaywMcCicBuG6GeVHfrT6rRjxZV4WanGFrbtwgBhsbJ17uP",
  "key6": "5xrS6MP2MPYFyLShwwskHqb4KwJhcKG2kf96UzzA1nsHHo2FYAgy7F6zs1KMwamfM6hb1HTRQ7JoBdeMJPhRebxR",
  "key7": "5k5EBHu9KBNWdar8UTcvacMVPmLbBCZwobYMySVLqWTkxAWLndccAURvNZEFJJjo6TZuijc8LNoJ3qeozPiDFS4t",
  "key8": "zJuE8zFKJQ1Jgx4ZvGALeEjJhU4beWhDipo3qrbMf8ZuVYsj9CEvBemABGfN1zD6oxCZ23gZmtkkLZ6HEjUbnDa",
  "key9": "LaDeP5okEoXBED2vp6CNYH16Ut7UyiD9fkzBoeV2ujHYauvACPkjHqktFskE8osaFDzyt8YVYiw8nCXdJ99JU5Y",
  "key10": "2BppvrFFwpU7V5iifUgiAmdj7j9vKPRbTy4uwthyZDiiBT5gH9DKnCEVqDxPnGzPAXbFiQkAsSYq3ehWKkVsrNM4",
  "key11": "599weQiccqyh43G329LMwXDcZui4xwoveEgkFDxfQR7xUVpQbg1kmxKKcyf7Qj9Hja7LsnCAKdgWmQ28bUsViJyJ",
  "key12": "5evfeGYY29MD9smXtk3aAb5e8re4tAjPcp2odm5bNwsDzNJfgBS8qbrFPbBgwMzKnhCuudKYDfDGLdkpvjFRq9L2",
  "key13": "35diexazESbWB8CRPvbr8xLzcDJnbTf29sx1RvzKgDNa7pHwSFpf7cLc6agtMTDsjhVi4s1DBWe4jxNSjMNmioyk",
  "key14": "3sKzxH8FkUz88U8Z6Ed3pwdyUdM65TkJEvJbKpGM7TjSYwZoWHL9dhMjH74CQxtCkALL3ACW739LZNeqyBHFqKeH",
  "key15": "2APr4m3KRXB6LfouwTZB5Ac6zR4GvSZegmVxg4sCyJQc1z6NQLRnDCuRCpxuAh9qjvxqS7jzhxJR8ZCXLtbSGgFL",
  "key16": "hvv3mXApXVZ2gF9A9Wfpa5HYJgFV7vZ6bbLNPn1rrkGwZbyunL4e5ohTPpqQ5GdujJj77gMDgsS6GpFKnBcf3it",
  "key17": "5YHNY62Fh9Bug73LN7aM9SQeHD5jBRxWnpEcjoAWxQWLVKfxUAYy8pfgzDG1vbuSrgcxq2ALT74GUBQW5JhrAZzW",
  "key18": "3Q9eMqnY4sqyZLve1HrfGeyC7wMBeLX3EkphQA4VM5DN2tVKasuW6GHemCn4dqXwdsoapCtdAkTD5vYrY5BVVLPU",
  "key19": "5P7txT71jNHW1AmX9e4k2oBaJ3xgd8m5gd91KQWBeJh2VLJQTeeXiF5rr2CyxERLZQZ2Ck7EVpcUCcThEJaQJnzT",
  "key20": "5cVLD954S1t6GN9aiFh7iJ3PERickYbhEvUFcBM9xoNoRncxC8myn5zw6wc7L5kWZ3TL5Lrs8tRRZgBWs8B43qMY",
  "key21": "3o6sLQQYnT5SnTk6b9VJRPWdUbJq9vxtLHu1zBXKEntQ5ca84yS3xnL5rUYogeV98MUYG7powRx2HAnGHr9c3rBA",
  "key22": "4trEdi88qiUKFKNqEH8oeCRJpGU6KxcbW6DzaG8zxURznD1REiQ6qbiAB4EJozbdmnAw8t8CMLMYWqRPm3fq9yt5",
  "key23": "3HZYnKdgHaPoHrwdgnjyqJxcsQ6AZKhJkHuEEcUjFsRigwGeGr6SK3vFTR8V9c698ZqDA7kK7Nq2df5bEixWWqT4",
  "key24": "5ZPERdM3kG19yfiAycvmeiMr54n22M45WFRbtZ7ETXLKaX2SRbaSDCzhGxxHCZwHpNJZv3sKiYn2dvtWNMHnCKPM",
  "key25": "4PCztNFN8A6hjjCa7mXwRy2cbWG43eUgMWYj99sXRnMznBKGgESh5Jywe8bYXfVBEo3AGzZqTDFdN1XQ1HSe9gVk",
  "key26": "43rsWhmKSBsggUXWubj3RHMHP2g29U9dUuQLMGVXnug85uauxR4vvW594mWrEYG1n7JkrWh4AC5CYLHFbAsnN1Vk",
  "key27": "2uwtuCgonPBsX6UQumWrxyaRVYjxL2i1mT1pQNvAwxXi9wKehDCEAEwaifB4VidXeeeJ6PfB9MUrBwLYQ7iiGgBY",
  "key28": "47HmZqJTxtDYRv8dEXzmj5PYu7p4oqQYxBAsHPXzwboffhCQJ9hkLNiFPMbee3M4WeqDQ4WjBrYodPwxgQBKeLJ",
  "key29": "Rr6pX9FoWZHPMfmS1mDLCw4MySRNs62YQoPCxgjgNvGW5nPWKuHXJfbxNu9krLvo2btFD5gtZ4sfLF7P1XmXS9X",
  "key30": "4RXcU2Ttm3L696kWTB39aENSMKEPhwbUC5BYN9ZQvy7ZehG1geJcffgnUSkELqBHwR2dTYEDtBMX2USfSmSNgNkQ",
  "key31": "ag7Jc475i6vb7jwCN7admB5aqPzeiajLC3YR2p5J7aMKmQy9KJVUL35TUmMAWPRV47MBxgXDyFfGTRp2AgYQxAv",
  "key32": "5sGQSAj2p5iDxE6feWBu63ZoBvPMtY4jzt12RgxoovUCww7jKCDhWezJ32bDxfm5yhqhv43UNTPGdTHkYpzG7zTV",
  "key33": "5zu2NMf4E8ZQFL4CfBNWeeN3XK7TY2pKspv8bG8JwKfX9SRdpaW4KBk6GrEyenaRtHed8DLxh6MFYnMMAcxfRWQf",
  "key34": "BbzRGRJurrC13C31dgZu7ATktqb4yxRrkdkzi3Tu2jbzcBGmQ3kqALU9zg8wDsunBi4mTNBWeVqn7obo3bcPjBC",
  "key35": "59eFgvzPJqyvCzS6dECmTXKStTXTZuDbmi1uZuufDjLRBTsZpuo9EL3ecrJbrjPUtaNP4PdzCZRkWMqSNNaSK3yM",
  "key36": "4KiPF4QpYsJ1JP65Mrjfnv84org76r5QG59A19iCo3XQyq8rEcgR1CPXSAHHfRsEumqq4iNryz6f6WjRhNK39pjJ",
  "key37": "55wZtDyrCr6wjDMgTS17dMXQc36xFEkf6GaNQzLbU3Sy6SZ8fK7RaWjHWSGsJ3GD5NSSRNbdusSpAAG4TcFdcZKJ",
  "key38": "3d9mCnN48nv28wbiVbjsXJuXTS4NkG97QGRc5f8hJNeKHwxSkqSkcYAVk8zu68hvTC2C6dzKPHvFgSFZDjvdHuiy",
  "key39": "EzmzjcGHB9sGTzswkwCKkCGya7rS4n5ripuj641E2rqjksMwB5hVvAZb5TXPb9RABn9GTx5gChiS3rtfr6HparT",
  "key40": "5Po1zBAHWYbvUCrU2sLo77L2BqJwbvCDk35ruLrLLqW8R6rXdCSSw18NpM3n48eHN68dwdrTLtGWZjWAnbb6j1kG",
  "key41": "5GCnASQJXt18ici7pURsfg2HGwYGZDmTMpwu3NpvizSWuPwUxpjv6arNpHuK1uNWPfXcxk18GwLXJdSBPkPrH4RB",
  "key42": "3ChBJqk8LetoWY9CQt1p4HCKVHdQEn7tZUJYADske8mk7bPiFbPipPG8oh4mTdH7KbgKUc2zAQiJLEk8CFAcf2MC",
  "key43": "28XV8Ecpcu7jPopSwjULapYb6mFpu4Vts68NbNjKaCYzfdrHfacE1fZ64Nw5MsvDxdegkiorRFnf6RMDDAXbL2fb",
  "key44": "rW5xH7G9VaUHGLwo3SpgGG6Sm5VpbmzvGRe4JbZrEXoMfw3Ku4gt24ijjtGFffWdtDtE3rDqM2zYVhw2WPmoB1W",
  "key45": "5HGsyA9Gp32piq3vDnYxY7gszgrKAGqUZgdNv7c5MAcTGNn8M3VnA3sMKkgjeVd6DaSUrpAf4hQH2fH5UN9cXmVF",
  "key46": "2tBx8gft8RN1YXJuG9o8pdkwBqcFo9m2uGJ5m5L431VpazYCyCjv9ujnezHiB8iug9TyEDTcmmzBuMZ1wCS8RCFE",
  "key47": "B9onucQZyNQ41NukHymW7RCirdgVgqFyXiYAyeRLqpEjDgJVHsuHLovuoWqsNNRax7uiPPsVAXewhbV7PGe5Tcy",
  "key48": "J2sDXE1x7uke4yCGRFxSN9DF24iQYJmGs1sswicYSfrM34GaFm7fA6kHtT6poLfi2YHHPj3XieBhmN1msBFAB9z"
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
