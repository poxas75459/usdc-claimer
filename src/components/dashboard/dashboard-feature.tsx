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
    "4wzZoqhJmNFZaiRWD2N6MiBMkMufnZcrR4w9LS1oM1tKVWVV5XJZKqihEiRFz6tJk1E7JrQU6L6CjnZtWcxZEwVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GyCZRzkQFNd1We3j4iMpUhCDsMJ6hygSC1uYzQob4cHxpdcG8yBYUByL7jf3GT2pqpF2H1uzQVkjLqVfqdbqm23",
  "key1": "RVR32aG2tzaH2oEFqxoVQq1vEzCZ7SZYrpTVJ5WwLPC3sUBvsa6wUf7mzDdfzYoXcLLT2JbU6Pyf2qKGKPuajYP",
  "key2": "2ePSnnYkUbRHF275iWPcHXRkxj5Rg4wJmt7ZiKpGjWYJXVRYgF4WeYsLx2TuDcmaRPuxr99P4pvEF1pB6CEpjrBB",
  "key3": "2HRdRGTTAG8MJ3dcNTcGrN3K6MTvmgD1woJ6FppRzmb9cWxyQTEuuVxCyPP6xK8tr4WVAriqtZe3pNozFxkPh7ti",
  "key4": "328cFFtS62DsktTqKgYmFsUzc3nn6fs64NhaDGiVxrjrMAzUr6VN2PuKdQ1wioGmQkDgpn2XsFVUsG3C1hibkWiu",
  "key5": "5GwMQqP3wQArKPcMkcdFvjdPyuMDdfFTFS1q1ZFe1puWgqENxavzLGt19JibbWimo89YWMKzWSmAhu38j2WZiDWq",
  "key6": "YdH7Xuxs6XkZPffo5N3S9sCqh7jJeAA1FbBqS3Nyk3UEmHtV4W5m8Dc7vbfaEyZcJnuMZw2b2ujDJBDYjo7jAmX",
  "key7": "63zMSe8asBT6DZ21a9GXRDQsDDNRXUCT7ssCZjAb2MBUaADg26yzZPUW79f5nGhpAFhn8WnydmnKwZ6789BerSKc",
  "key8": "5rMSciVbAGwM9FnYWm23CzpTYLq2HpiGyY8p1ZFN2u34JVobiMzYp9orAeLsMg62riDNkh8XZ86BBw1yDvYtfGs",
  "key9": "4st3s9KNsNrL2wkvuNVo91wweHiY9UCeNQrdVjWcSuHmusfUMERVzdd6r3tv8aL7Kgkrekq9uoZFuf5AyDp3pdjf",
  "key10": "49qTzxYnR1VQgB86MDzTuC7TM92q8wCD4DG93fh9AwyNH1eyfgHY6toKsrXw6F4BndxphTWznzXNGgjKthbHUXQT",
  "key11": "2bjVxV6hbtYtfuGje5PRHXMRWhM8eDpax8qntmwmwysXqnzNcg4KMB6NwdjKcr23pvEdZrrax8vAGxYJ1ZyhyiMX",
  "key12": "4XrNhzr1HYzz8dFJzdxiTqKT8FLPVqRFHyquigxbQAw1n3myxSSXqnxKr93Rnfb6gnpF7cTWv4y8ttYsBrPqUohT",
  "key13": "2nrE5vdiLtrKBDw7KS4ULSwC2oryiy9Y4yXPYS7ZzLg2Rtc9641AWK99QvPGzXq93P33op9ysb3RYwmnDXpppdnF",
  "key14": "4E7UcSehZnMe3XorZPhotrUiRxmFtXu8vxksEXXBF5pGF3CpZVSi1ZzHy4SzG4h4Gd1XMsvD741WP2ipEL28JQcq",
  "key15": "4fyNbiXXyiHzbArpPS3EqhhDnJMoDeC5iZLVwha4QCBRUvEGJJSBCsFZurgGcUn1ob2Kv8sDmU6X6gRhySXYstcL",
  "key16": "5bCtgjAv5rrCbVsPKKvzT6Y99JmJFmYxgpthKAQqdCBKWfx1AgGE1BXWmUZqTU4v4wa7FsuysQ9XgBVJFE3va181",
  "key17": "2p4rqhhfM7ANGrwh7JWTmEQVbxehmPhH7UjLX5G7EHhBTnWMG3cubcPC4iXhkbdq8U52ff2dsf1nAQYHkW3TeUff",
  "key18": "5PdQQki2x1g7fKAQ43yMDETLCS14HCtwfsNqBukAyf4HdKbqApn65GfhbH1fBRERvVCMyzKSUy4jmuehGggzMubv",
  "key19": "5xQrWTwRx2dyzSjULqK5J6dAkD2sA9CELgYEYSVq2fCc4D18bqWTG7inEwGRAymhQykgwVd5XyM7Yh4W85iDXcMT",
  "key20": "3QdUYRpR741KTNn4Qk3vYR1TkAx5BifxtTH6L9sYqmoe9CifRfLwQyks3eMDFkFCJUEgqwvBZJbDZdcrjpUyVdVY",
  "key21": "3zbxZkUz4Ge5e639aD169hyNZ3YjSZ1rhiWk3QSNbX7SLzkKY2ZwbwV9fJaVWXk7QjehwA4eRoap1herATB3koi3",
  "key22": "65jfh174WMjtcD6g5u9DikrChi3RRWpHfiWYPr5CexKK2sczD4rgR4yTshFg38J1eZWqXFopn8MSNtEaoKrP9se6",
  "key23": "32ES4oxGivi2SqwKJVJ1V77wxukQY9GS3wsdM98Wi8Gtsw4s25ote7sX3imxGHVd6URx3LJ7j5E7WB1xERdxQS8y",
  "key24": "4L2WXqaRVsf8GvGs9E1yVZSfHPYLzRf7cXM7a8PkNvpW3E1L8bfNtkfGZ9PCtFL61YT5ATitq34ZbE8i648Y88JD",
  "key25": "3urWFPz2DQxdqhNHBvtP19fswVSiL6UQnWRvGPYNt1QMAtg7p2NV98XtvGePiGa4xsADG2mLKxezMbmqT5iuk1P",
  "key26": "23hxfoR4UXYfiLAr3aJ62Vd2VSiz3ewP3AQCzeiUve5nrWqLb1c67z1mxcrj4vUnHQB52hKNqgU2TrMvPSTbaaBR",
  "key27": "5YfhrmP4ZWcZfGJuMjTMoDQdZwiWiRcfGp7xiUyP2chGSoJBgv1R94TfLJovGXYkpFD5YqNedEp5GoueThtcxx4L",
  "key28": "SHNgeHWcBKaLYfuUpr5JNgYM9dXVy9sMtu3bg2GybsGh2grkzfeBZiZcbS5P6N4fB5oncnxSFuwmPZJLWRevfFp",
  "key29": "4mEPXawwK3nfVy6kyiweDyHXudn1aBpzMt27wkNnR5XBuAEzWeer6aoNN1SAxGUNpNk2BV2p62PCoUbtBQcDaVAy",
  "key30": "5S5L2qvExXdJau2r3k2YJiJFjmnPHK3pMyUX4RVSRoeVAXUWc24fNDdbS4C3fqG84vk7dJicnkngxoWm9BmuD9rw",
  "key31": "3zA88x34pi6UWVazJHyFtK4zz668M8L6futqMcgKVf1RkTzksPb2rQjAt3DbPKrgQ284WnpcLiJSN7sDsygESthz",
  "key32": "WbZw5gw7L5aNsaGhLc5tcXdhVwwCEB29vPyxvd5Le9H8HAkgRWzyc2u6dZb3T7v4RqwPM927oDYrwR88Ts95Aq5",
  "key33": "suYkG1i5NLLr4ui2e5duqkNGKhZsVoHvmHfRHK6Rt2eTPsEohLVAw8k83cm4ycuN268E6FHEMgiDYLhjbQcFWXS",
  "key34": "3qLbH1zDhcQLGZ3VtfRX4c16NUMoQQzRqZ6qvYo1YqmpBdf85eE9AMs3UDa8nRmgYBLUqao9bjMzFtG93fd7ecq9",
  "key35": "Jf2adrwCahFZeZeuYFWUUHVM26pziK8fZ4tifoYnhYWrhQF4gzcJPvAVFqxnqrM3zXiYqrc9GAgfW2dsjGuQmTD",
  "key36": "5PXM6G9KQZ3nc4FbHtw3FSnwsBkeduLqdghJLDnCTXfctRmQK9R1v2yVpVgJLXKAdcyrr8DkweWwuAVEw161h61m",
  "key37": "VN5jPofRsw4xMH7bp8bkNVkPXcscNGmuGX9m5Gmv9k7S1KnCuKQwCxBidCQGinedZqp8zCC1Win7QZ6sN1aAfcA",
  "key38": "3v6qcGMhufJUC445U23zfmr8WxggHdcH6xadjfnLQu1QCyiGbFRBduMV6jJV45zRmtTyRQv3J4XF76hwuebZam2J",
  "key39": "tqaN93zMpBL2cV2Qxso4NPsLckmuZa6PA2bK4nEke4UqNXQHQLChRTWNLaJd9Z7Xf8TwWf6QwgaT228VT77s3LB",
  "key40": "5H4E1zi6hbRJ2gAo8Tb89Z1VxVnsUQAQoDZXjhPqNW9MVuYwrPtaotscY39AmYXaCvUhGdgA1jEUDPog5sCFoVXC",
  "key41": "5cMUsLnZGC5n8b1gdUqs5jBrhf75vmfMNJeEL7jU7taSFQqKk66gxJ3BKj2x9HEFVvvnC2cQJXmbNyVHVDGe8N9x",
  "key42": "2BnvmynKHWcm1tVwmCrvrvuhuZv4unPan1c1qjx7NwcZJZn4coLzz7ykxGrCMHdoWvDviSn7haMj51mP52jdquY2",
  "key43": "5mdK4hxDCdSwNWyB9UZDXUWdRqbougcvAYBdnMW9aWfetB7oVM2xd5a6ndbtFS93CmZfDHDMdWu6Z7qmLaN58eSL",
  "key44": "54qMxgo8LVMds9z45xZC64BNgdKyYpz5K3KVamgRKsKKYwB74KE3NW7GqULm8xM9Rs8oeAhcJaNQM8ZBsaFP14ms",
  "key45": "379iiT3imy6zkFnpqM9GTxZdv1FTNa7FT157RTQUgTFZtk2Q5irVJoPD4sjZgoBMfScXZ2AbejpxA1ZKUtswA87m",
  "key46": "4aBpaZLsZoutTxHwWNAojzUmbRVfCtSud2jGUnbBsaam8gKHS4MWSuV8W8HSD1QhM8Wntm1m1M8Fm7g2shxqYq3K",
  "key47": "53reJuYQuvAWJWfv7A2aHfvMqdUZ3LmLfiQrvicKAQ5rqX4WGtHsLJHUzanY7SnuQDgtYBQhGijYDE2oQqzD6zNe",
  "key48": "3icvMnBubrqBjprj3JYvDByyDV3a8QV6vjZEA3pz164b5AFN32MuaXVac1ig9LfES56zZYhUxjiMTqrLYR3GweKu",
  "key49": "4M8fHEacFVRbD57CH17kZMvLPE5nJxP3szZXpsoq9gCZcW6sHCnPoY49pwhcjAAqgSdK2xcf3qoTmJMBH9xioCue"
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
