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
    "3BwGCMYpLcvaXvhgBqL3cSnrcyJfLqsdoYbYXE1P11PWvB1pom3oMQEbdQK4xNgUTt3RAcgzLrVbPjYeL6Pgb2fo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o6bBJj3DqsWFKfZYysmzHFy7VcMBt1g8yCx6byf1ZnZaJPSm154GyCncTMRz9X487eWeyMh5Pw7PBoEHKQbncD",
  "key1": "4nvboDzYQuoCGqhSmihFnBiycd168NhWgGmsVjYiSJJso3x3bnzPm5wFptTVC2zxdZPVpdnar8USVmn7pSeet8E2",
  "key2": "2L8HsDFJwE1fTF4yifHYVxw6ga7GTdLui6LHXi1EJ8pC3on95dqYdoJatZ3zvkp9Utr3VfCQyWz1diwhxiCFQKye",
  "key3": "2G9mLJBsyC7jWVxxZynaD5QqNcbvBaRHVuz1BaKQNPg4Umw9fqBfq8CeuMsnyMX7f75zdjnF4is7LitD2cYmer8F",
  "key4": "4HFxet2h2tcvQz4XWe6zpxbwzXweN91Z8zk7TskeKwruizg4pTMwCmYc4RcWEZVxpxZvL27QDwu31tthRBTGLwUf",
  "key5": "4moq2gaQmBsijMYdY3YD8zh94RYx3ewFY7V7TidRiqGJ7C1NYV9p7Kd3mUnviorKx2gEc8BQW6bToH9t6km7frft",
  "key6": "5oYLh2Rr5h8EA263S4BPccHRScnKwuHKvVkwSmwGufYrLM8Q1RbjEsbJb7EgsMvuMDfYutxQ3NwatfXgTbbgVfwt",
  "key7": "oFtaGt5FBU3cSMs3SLxMp8uz69JatEPamecR6qBpTEsB2L3MpvFMNXL5ccCWqBN3f7UvcFYLy1fuP2duvFdeWJM",
  "key8": "rTQLkw5dahKb8RqeUpgHdkqoypMDYyWthxDxTDjLstcZ2TxYkkcTMY6CXn5CuZXmvdFpasxqXhSYGtwKmRqQhg3",
  "key9": "2KM27FtyH4RpG2dnXZJFnWaMNGCbfekotUhrwCENtQc5f9emGu3tCUCvLZgf1BWPbo1Lbsf67uVu47bwjvRd6WKC",
  "key10": "58B4n3adfwyJZPHHmqzDjiLoRze2fnCYxbGUSPB5cB97u5ZctAjv9cxsA8VfS1VyMVWSCvSgxCotLScDSn93GfEH",
  "key11": "3xXvZdYFQ8BpsFURFoT7VLueFMAfAzejxbx4UU2ksymTf9uLukfvquZxaTf6xCbbhJWY5ZAhdEUa78oZwSnGXFWC",
  "key12": "4vsBS6nU9cBco3PDsVNLZbXV6HUDFfUD7qcHdaZWpXupBEYVdRuxg6CSW7vGMvALEX7Sm3tKvUUYmct5vS1msCDT",
  "key13": "3H9uy3MKwNMZkjUghqEJmhRu4doLsdmodc52scQVrk7gMxGXXGH53nT9nLKJr7bjQbQyQTKpZ2emsXFXkfGk68uC",
  "key14": "2kTjQsw5Hfp94kt8SAeswcUFdfy5oxpCp6cvS5z9QTwFmEvNHX5MR43yw6sgw7grWjdMkqyAnT1XGgTn9rfWdwNB",
  "key15": "3M8piDCiNbNYVZ7XJtmtzxGfrA2V6K7W9KKWUNbM9JXo7WnwxQFKhuoiXpWFBgYpFYoJGZBWX5vw7ctvHHfMM13J",
  "key16": "qkdMMqcgtsn8tV4sgWo85bbBQpj9sKuRc89Mo2NKpnkd4JBHhKCB5togMj1tPUwvwcdLpNCA8Bo9xp8cAt7kc8L",
  "key17": "2XpML1Chi7qGCZ13xMDgpcZDYsxo8XbfgZaEGEtRQ1XK5H7AnWeWdbxswr977vA8jNCt3QNAm4U6zHqp512XiNUe",
  "key18": "4u3TqHfEeLPiuk9qA79GNBeghmaLkZMBpCxvDAMiLNPxee5bBzoomwb7NqkPTqKk9D2XpzDixQ3Ftkz3UQk2KHk8",
  "key19": "4V8oKGfNSNgD7ZAdzhaDpr1neF3ixuZo7iDZbGjSpKVx2c9aUMauWtNwhQWD7AK4aP15E8YF76qkSyX1QHTcs1GH",
  "key20": "3eCAPW33L8TD9ig3ndY6gJ42ovQGYg2j8Qt8hBiBaffXnJNRwRUqAUcx5AfQLmAi6dwoRwVg3CGjNu3R9C4T8VLs",
  "key21": "FZsn8gbm6gM9JcRsZv282Y5UwfU8aCpoFf8m3MCWjXRGcSFnAsrmrVPwwFPXPZ68cAEy7MCo6vnTcGXLGY2B6iE",
  "key22": "2UPXZ98tfYdDXhx3QCxq3uEkf3q9ZpVh6bb4fFwSyFMCWASjhu4Evb1GJcprSp4rr9t6ozKsbXmjFiM9UqTPQTY1",
  "key23": "5CAmDuQmCdxtFhxRjS2WfzCKFJXjunBYzzu9R7fzagci1JBcW7F18579oLgz1dSmaJcsFWVAn8Y84jLTB5Ynsyea",
  "key24": "1Zye21o1k5EMUnzbHifsUced5fmVKzFJUtyxtM9U8qUDKJaokE9mJfya49NgE817vCbyTdHZKCjuHaYh7edfZis",
  "key25": "59qNjcxVorrhbJCvHpi2NkXPVeMheqmvKKaQ6jNsCqy9svG9T1PsxzErSjsKVm1Femtw9x83qzvo81DAAPT3Stof",
  "key26": "93hnRA6hSnAy1x9MgQv78WjR3bjfw1DDaJNoz8YxBbXqBvzNnRkUA6B4iaECcxrGX45ugXaQc3n4h3jDK2gPpuR",
  "key27": "2CDMwRj8W2497HPDmDoY9N45dwe8SFKu6J1oJjc9iUEX4JD6N36sa1BpMeP4LViqogxJV2NnZNcASThKRJ2KSexk",
  "key28": "5iRNSkE6ettnJRHsjnimgDCWRmMdxxJyBx5a7HMhZdBT3WXbZZ1TvT3iQBkuVc1rT7rYCS2akD2rHwvLLy5SaFUW",
  "key29": "2cG1PjpXD3G6tpHR43ai9a5GnDKGKNDqt31YfHdy5MersPfWcUec4cdavrQsS2e58y9TN5mkjMrHtj4EUWpj95oP",
  "key30": "2MRVw3J6sByFo8CGsmtQxHhGRiDsmfYJNebsXwoKTARAEkKue1uAietvEpeJGVTZA3pwnwRx5pes9pjybzZ9f4DZ",
  "key31": "5fMrbQqeK7T9wkCQe4gVATS27iKPKASwYbEYmxvkjUsSa97ET9wd67yEDkBJNB4ut33qum2q2Rw95BfYFrit8Qm8",
  "key32": "4qkqC5UTBStWk1Vj6RNfjZk1L4GoT2s9RYtBhSiEr8UkhHCNf3qYEnJzvyLsH4wf7jBPRW3rdEb61G8u51d1fiwW",
  "key33": "53ucyTtkeNN5DyUPWwtM5YADYEALEBnYosQjrY8f8FZohT678atSnseAcdDVgdveabR1QYAnVoB3QZt6tKmn7FMU",
  "key34": "2Pd4UUedyq8V9HkzvJvfzRGddWy9JHWQYjw531RMgEECihgjKVpamWH7uMa9Qcd7cn79bKMvNaLRJD4owt4vHcjY",
  "key35": "4xyvFUvQXBPdCEP1gWKwChzZAkKVdbxJfGoFshkHaRwDiXaP2tNbcBqDQAoVNDW6fJ3Spfsvqpr8yEBTGsFoFvzj",
  "key36": "1LwDaSUUcDmsoZTuGQ4pQSCS6EPMfhtVfr85CzwPK88UHX4E7U85qftpb2B4LrsPhuRSBQG8cQgW5YChAEcdECN",
  "key37": "3FsKjyD2sNrZDmhhtJDoYTGzLr5mE9WiRAs47Gi9vc9C9Vjg3pGskB1BMyx2RgKu8S21vsRQqVn6YyN59fEpD8Em",
  "key38": "naWY7B1bKT6tgKBdkGYg6ZieTXWdfNke6HQfnvExvgYaanpKBn3KFtTKRpPrNUHdviDpeEQHenDKdbGpb1zcpvB",
  "key39": "3B6CgfdAhbTD6acnESy7MvipSxaVYCzY1jXfgf4sWQrNpMckdorwtTNExQLTx1SphGPsbXgvC4QJbtMuzFLFjR6W",
  "key40": "3LSNXzeXdAgnA9PYpALdDYpLQsbWEVqJGgbAbadh6GLHtESgvgwRjeGC5ct32js8VGaewFFg57WRJ128qraLe3rQ",
  "key41": "i4GZ4VZPyUvwVyDfUZD3oR7Xt9htbVfthVD8jM9wka536A6niWrnpEFoezzQdnhVL1wakRNTaP4n3dzgM1fwWXC",
  "key42": "4CtKhGKmoUKcbepJWv8X5QPFs2vPUFNrgwcrLrFy3JN1Z7U9b3PECfYBeWabwWyQThxWJMzzP9a6jkYrPEs2Ho3i"
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
