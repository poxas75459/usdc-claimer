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
    "4movXUtxigyebr81g822BHm7x3yJ5h9vB7SVr1oS9rD7xNkPX9HPummHYeoTZekAk5vuvRur2FDSL2WFbncEAmVU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AmvXoohKpodpuzHAmgYky9DR3wCPD4XXWhcV5YbjW7dHKLUdPm3eMPSf8WZMUqoFLm1uoptUhHwDYFXvjgMXKmq",
  "key1": "2tAtcauzi6HcYnjKsy6SP3DzA4xbBLqNC2NBP434HwjB2XxaB33ZxgYNa2jaCZLBF7QZqsdN9tbSbLQQjcYEcTSV",
  "key2": "4Ti1TFoZ7bBBsvavv3oiqapZqSJuRvKzpQNwwTHxyC3fub1rQm88mPkdGt5tRQzZJe1Xr2Q33B5iN9PthVaoFHHo",
  "key3": "57KjM4ysacDjQoyTc8mFa4KjHm5NTJmPqcKYVkum2h8Rceb5NHb6aDdvsFEw8hKUqVZLEj53y4wd47Kj9WH6J5MF",
  "key4": "2ihk1T3hpoKHEtSKthL2qQZVcJuva68rKALZ5qTD4vYwJfzdo3f4bMMQAdMnsaq5Gm6PtisBKzHB3HQmcW62WpCK",
  "key5": "3wwobFN7hy44cBzi6UyM4a2n5xSv17BZqkbntRTibLCkGNsp4kef99afd9RpWgMhykxd2STTmxQSAnFZ9oSLRdnD",
  "key6": "uGz8xwVufruuwzFbARtyjD7sY6sFQXV1phPZhKEvRbdBLjt5Xucghpa8Ee3co5GSr9x1bpaS7BJnBD3qWDcu4mS",
  "key7": "5T6tbpFn8hkmZMTuF63Rj3fkGDjjxrUXnjHsB8yr3fZEF9QtMQrWkMgT92CdHjBRepA1fhSgLkNJA7gs1jwvmUue",
  "key8": "3KHeYG8rRpmLubyMsc2J1aJseYkzBSV3Tqmhat3QCqHySEnZV9q7bfwofwLhVihSPHrWRUtG9GVBAjuJTyWovSi1",
  "key9": "2JmrYsHAgBszet4VRwFEEdNk4QPG3vQMTjvvSuApn2aikEgyyB6RnuTS8ir4VMaCjgd61DAVkoYyGdJiuJuNTk8k",
  "key10": "2YdqqdFy6e9uJhrghAfkAJR1u2YAM13Mwd4A5GZwmX3sWpABZaUvQLNoVjeJ2N6VWdeux69bMwc9THYqhgCAtxdi",
  "key11": "5Lt6Cj3e4gYNhWN84KAFc3eHkv4HqJCDSQ6Poq7B1t3znyzSJo7nyCv6ngajNX7VEBmXobLXPBG5MCq5npfYMwdE",
  "key12": "252jtjw497zPw5i55QyTV2NqE4sfKS8YLTcmq1Cyoevj4XcTSMQtwPxg4i2YR37g3PHNcGvyhwNzoZzMDK332AzY",
  "key13": "2XmaLcA3i8atHVzpKh4MUju71cWxa3yHy45xWADHVvtt9gyCFfwbJ9hRCfzMDr8HPHxmdXGXJXWh73UhTgfEHwoF",
  "key14": "4XwsevXUAExe7mtVviRsbpyDjJCHAgjVJ4Cf5anqZh1TXUjupD5pmr9SKnSzkDcoqY87UawuUAMp61AaC2jdPb1c",
  "key15": "4xpNqUYC6fDz4L6NxeJoCUEJ92vUcERfUTyuYHJZz13PLbptb7wsT5TiGH4GwnRAi3E3gdg1LrndWoLeRfu62uEQ",
  "key16": "3F9isHQYqCPfSJH5VzTmNEtJCqaZGWeDuAXnrSnWdmesu2paN5Qi7hjyiYjQkRoCHp636PVacsXKwzQ4sWwS5GN6",
  "key17": "4Xof611KsXbKd9dQnYLKLubWMnfULkWfucSAfn61EFgiTq6AKtrLs1uyR4iCYfj7eNYUe4GVoEtqjZ1zrmsKmHgx",
  "key18": "4gwcgnXMEgfDTmSNBjyKrTpm5BbET8yENM5RjQY3ns7viAuPi8HG6PaSEgWPt8V2gNAuncWs8BvDdHDLFgZECgTi",
  "key19": "2hKizwm736ZdtPju2ZNwdqtHzrc69ceuBi1XeZRvxeiQALKA7DgfqyqVYcRGNBxaYrjMiejcue91pT4rJ8xrWMCc",
  "key20": "2tXr49nVEwvDND8HTgyyqRETAe8mC7HfKaBos2gDFh4xBBXvi891MPUKPKjJxoshq21psB1weCucMv4Ew4CQnCD7",
  "key21": "5dKXyGVP7weTn68dp4T2xAtAEFKFXSvC8cY6bpD7WcA9PGDHnz6M17jgmzeXtiN7svMSJiSHrTbTKjHwsFCbozzL",
  "key22": "ySwxdcRfRzncXRZtetZW1B7bs3ooDSPt6GZ7ZMHZKCrMHYkJQ7qL3Ux25b8hwz7fhZ99ft3WFG58zsvJqxEsx8U",
  "key23": "4ak57pUf51asnyHk54XRvuxkMcMqr9s1JPnbQ9ZMZnCAcqzPz7UUi7HPRLZG14rDcD9GMZ2KVs6hoBfQCBsBuKz9",
  "key24": "4D6BdoCc6jCPYAxr9cHFk1ZdEDPkGp5z2YeUi6BEqUJrwF2teEDZmWLkKZJXvF3ryhhBNoC6HJe9W5ZdL5pCjwyp",
  "key25": "524QGbNq7LcFqExNRNznRXKZ7RywZYRRab8Uz73oywg1H2jEL5XLA6FS16U9rZyVHkzma3VKoUHigs6Fnnt6cMm4",
  "key26": "5AQNrucJnGPKxugvfS5A7bAis86nkiso5KC8Q3jsb2qbsHRj3agsRwLWEf6GDVMD76yFdMbmBcJRQAFBUDwACJGN",
  "key27": "53BM7KfWuUrzb6UKG8Rku5Z1j3uvNaijWJaniBr5jTiCr9MoQivvwXgyWnQahyopnW5TrS51V8VJiLK6EZtbTihd",
  "key28": "3mL5spFTtStBh1hwn564RmSFpsoQ1LEjAZEz541QDGB9RH5FSTKMk6FtTngEn8Ez36D1PY3Y6VVFwufGifm7dFQP",
  "key29": "2tRt45UNDYan9n6CEQ7rkMe1rKE54fBYj6KWto15br75UcsQU6kdUrNv1bHusW2kbszpee1aJK6TbGHob3DtwN1a",
  "key30": "2GpAHUNgyJCQQNHWF7opKqPVfyvvuixafZhGh5Xhkuauqunmw5hAtvRQnsYD4wHETnpxWRhTKcjZ17723JQEkSqW",
  "key31": "EDpcsJUyRZuSgzt2cjy4zb4RnWqTbJXffQsqmV24NEeHZ2YGyncjB49XWFn7g72xevgBDQ2fUDPtfRxtqnAnu1e",
  "key32": "3CKEUpfvAiucsVq14kszmyEyDTsSz8h7Zm1yNtwHd3piQXhSs57bVuFkmF9YawqxvBfUVDrjidUDy1MvHVd1bzpw",
  "key33": "GbUiQUUMzBK5TmnFnS7neaW4efVRqViwvbHeaUkMFi9t3B3YqwELzjhvegpJ93VkGFtQJs59RdF8TFzB5FJ5q4N",
  "key34": "2C1LiZnm1hTo4eCc7vPHzf95DihtnuWrZ6eUrVwz64gH2GeeYTfo56HnmpAuLR6JybCGc25ZKqKXkj9RTPbcF611",
  "key35": "49KNEBhg3tXbEhroMZZ8muScDqn6DU8QuXGfq6iFWVPVn58SyuSJd7geBNV48nt1DPS4qTB6GCqJsft7FgwjJiPX",
  "key36": "5U4RcGnZ3NiNHhTqFRQHbHN8BbXcNj3uLZXvMcfYACNTiNvEGJCctTdLtyMsQJsv3H2e2ChiyZAk7Kwbmt8uHAnc",
  "key37": "3FNzGEEcUhSHkGGbkBGoZqm3tSngz5YzWSfPr3oFZCrZsQHCtJn4Yw9pa6P5VGr7qKs8K54wBD5G7EwdXKBZjCc1",
  "key38": "4sWCyS9QkBwJgm494r7X3bLForQn5dVfAYbVu8we9YUGV9AAshneVykwmQcUMV5aZVhW7FdSmzyt4oo4YJ1RyQJp",
  "key39": "sLFKUrPmyn7vB1WreZwL3y2jrzLPt8Dcjs3SQn9vHgzAH6XXsgePCAV6dCDrdcXb3Hwp1CrqLXjrjw6dCBRJHbF",
  "key40": "3X9FFVQd7spWYstYVMjvWhPQupwva5Zz6sAH2sf2tEDSDwe6jiWK8qNnxgrkjKDY9BiCDBdWcjLKfLFnvFTaitHw",
  "key41": "5FnztSAmuiAEQB8oMqRHtPVKvzai9v3uaqUT27iMSXgFgVPMYkuCKHEGXuTFeXFk14ijPXNgLeGnSaDy7xE6HpoQ",
  "key42": "grb593hhkzF7ZttwXRv8SAURn1eSfhn4VdDQEs47tYCPmy1wy8yUCzsuJ7zkTwtjTaCrxjssQ992qss9uCbjPSN",
  "key43": "4t6snKjuqauP5QGAVFjHqnp2A3qBvfipapanQBAUrqGzoh2BFbeH55mwdgTaG4L85AVF7FwiCxC11HCj3fA7jaLF",
  "key44": "22TM1GPdg192i7QmpeSviByLpqtSGauCWQ23mTXu5JuQJpuN9Zmy3iZEwm1eVes2eXaVTZv8r9KcVP7nt4LR23g3",
  "key45": "ukNUbiPGcgHG86c5gi6tVr8W3Fnq1c9Bx45WMv16WdmpXQibX6BanQATh6CNC5kWJtmCAQYoB2psjpTH9K1Gv6f",
  "key46": "5zvMSywwbiQzRbVLyLN4SqNA8Bm19M962CwJigEsbLHjPvPHiXD3diBy9qwcCJ3sVzAn3QkLboRm6QRWJmAvztGp",
  "key47": "336Ncp9J4ZECMnEMMyauUQJdgs4Mpod9eXjYVSvNH8Kif1ooepaZ1kwGmfayaLif1SFgasJNW22bGZtvsdYNnHbE"
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
