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
    "3mofeyVUcVFTTGSa6F3aH15CNwphf1VZk2SRiBvJkDXoz5UArdthMfpZQ9ZuKFeSv5MEwMKqQrECKmfhGY9nrKJ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vNUbUQzHaKVjFfHufSPubjmF9eJmJ94uoutqDq6zDDcRKixFiBvK7hzKa4iJnbnGy45JRo8m3ZvP3z8mTCJm3ar",
  "key1": "3VCAVfTDdEqQks5zjri2kZgtzMvmWTLaJWVZsMEoJg2uF1b2V1L1sR2NotrApy7UQatHwVjvHEWMKV4ui3Mxryaq",
  "key2": "3ZmZoZ3mzoKuLLRbBYW8829U6rv4edfRcWpwrJviB2QTn9KayNfH2VUVjv73hmPreLJ4R9oj97PcJQwfoo7VQVcd",
  "key3": "2r7ePM9iSfpBAQnoKNSS6oNp5TQE6FEjwCtsFUg48wjCHiLM1EtrT71mJK43X5W5qhiFYt8ycPQoXE74P5n6x4mb",
  "key4": "3SLGFXcqchmm3fTRiACWWfGNk7Z1p9Q83WRh6tAsWqQzar9MRiYpTQ3gcWwXaN2HbmGAZfd8q6oNvYz1cm9WXGxg",
  "key5": "4AJzEg2ySVVpNqjnXd7crQ3zwnjhwc7vaCnrYumVjs7S7c3Eh1RCLV5X8KXCHRQX7DwRrjc3h2ZvPnYzYLwp3As8",
  "key6": "1Da5oTaFSbf9idXPSNBuGiN5jcx3XR2npCZaC553QCxSuHDZSeSfvFh58VRe8qvX2Q7mJ65yoX3X4awLz4fwXYv",
  "key7": "4jKZ8Ab8VZg9HkwKoYGPgcQWNye8axYCVeyaWRTM6AEBVu6ygox9zaLLgZZXnx6um3d34NZ5sjdX3ZZVnYbHXriy",
  "key8": "23dh1bfSmtwCnenWXzLyRjmTjbo9D1YLJjiwexuGdkJacvx5aTweTfJhzg4KeTdgQ6vGKWV6Bk9xhb6oiyDdsJn2",
  "key9": "5jCA54nzcaRk1pzMU3QQ8c2fWtA8DeexmUiQ6fnGMKVhRYRdRgHKtYY7se2RuNWFSrQ51EbtL1faC379Smm6AP1",
  "key10": "3UMXL2y3P1egzafjFMf5q1ZTBvzYMbHjCMQzpWnhpYDPLhu5GWuv9h6uK4JH88D83JRkKyd45MgvUcLmkLZPHTty",
  "key11": "2UW7rAyqGgYTLNvCtsR2wSxYhadzF9iCm7qMrjgTGpGFtLzZCJEj9xAcz2t9irFieycez75AG5XNzSRVBXFJ4s8j",
  "key12": "5TTi6BPrVhLNp1irkngysAJ1FtwpXdSWGBhvTes2cearmw5sXo2FpBEBQuQ1yAYDrHoPzQjA7Fp38ojzNHpohq6P",
  "key13": "4pLZ4xoyYMxrop1U8FYu8rZVAy1mvxUA9DDeyb2NaXRXEXLCRPAKBwPPLYc7uENXoCyaEEhJ8zVJNxNMzmC9gWBR",
  "key14": "3WaaN8GCeCve5eiGExtU5Z4CPTmr6kug5qMCt4fEnWHua1My6G5QDa2LwE4A1QeYTi3tDEVceE5JUcFJrLACJ4wb",
  "key15": "381xPvYAn9hcFTCP2uh9j61qwTi1ipMV31Bi78DnU4Yy3dLzryihD3qJDFsDacnQwLtHhgU7MiUGkcgi6hsTsv3o",
  "key16": "5JPZG9ftEH4iR4NyuJJSBD5df6hJek2EmQR9d1hwLkTyCtq9qKtdwu91rmupUSUVwq63oZaWLJ6poztjhKDdCqBn",
  "key17": "kNmAWcCkQuiQ5iMccbCQCoAovCFkDVzBAvhuh2qcCHLDvmGmhed4vuxokA6AHwQcvbW4pssccfYyL4eZ7S74a8M",
  "key18": "49T9T87QgKPRPxDCosycNzpNFJYAC8qtv8NTy9m1e2uqttiBXqH13ZaitqxD2PFYLeWjVFfxurzkSEMMMTfpgNWA",
  "key19": "nozXpURtP3i9W91r5X3TL4jaLm7Unjb3qPFwpRUDcrkUX1FCvgjRi2aBB4cHDRz2ioLB7TU1FjSAi8TurrSHrj8",
  "key20": "39UVKnKmTwQUqhH1eFUWsfisLWNkdLqEfEdFKfJqva6GaM1TbrHjwGVFduWZjZWhYbZ4RbKtroweik1irUp1c11v",
  "key21": "5TU1uJoLyUd5dTzmh23AShKiEdisdk4dtY3hFEHa4LoijsEyNhjZPhftyAJnkR74NwLs9AW45BzY1KBaHmHEbTow",
  "key22": "uzaWcRAQWjY1gHogN2Qs1TfVgoyqrcZEd1iwjUn2LepSwYpztANP9n54o7s7fqsRqqmhkUCaWLy6qQwBJaSpjE6",
  "key23": "46Rj12reyWhVYYJVeBdrZC6xmZUF8VQL4AUAVPr7Ek46dEsrdB6AWQdLepsuvrQBKTEPkugAvRYDAaZNwM2iDcKU",
  "key24": "53NA99RrLd1gVvCcbBg9LprpeeTC6CfEE1iaykrPjKFYPXWmWH8Ydt5rMj35vQJxvstkke7o6GjuDsyUbg2TAVVn",
  "key25": "4QKo6N4YoeduYVP9t7T8bjK5TS4zrkZJEQimKf4WKDisadY9MVqMaPfSjM8aLNfruAWRPw5gxSdtQC6rfCx6KFMT",
  "key26": "388jPAmJmCxNMpAw8mxfZ1kSMgQziTL7NajUpWMppARZGLvqhh9AjC9eR1iSBZkG6r5uoXCxbyviRmCjTgvJdtJu",
  "key27": "4QCycd3cUL1n8nMR27cZkC4UD1NbrVrtqcLKWSP2u7DkqrXpqMg3pNnRazX1ozKB3HGWQUG1Vif8rC7yvaW66Qtv",
  "key28": "35ZtPXtZWfGcwsqGGz5Tz4FZyaniEsjT8xQjaDzKCcBXX2PuyavZDmjryK2BymaK5xrTBQ3yTkdjB6uYEbgsnAj9",
  "key29": "FwpHXmx1kXv96EAg6dYPeAMzMB2ud5BHUCtozZpBnKHx8iUtXvp5KJkYfbxjFX4T89bGhfR3p66GyL4e9EHZBYU",
  "key30": "7tvfTA8S9wpuXc7eiSexA64g5WDBnts6stnRMGhdQJQf1PjejkmbGSjhqVL1ibP8wMNkF3oHSDy4EGswaQ4jUjo",
  "key31": "wnpe8uNQGF6znaRaH1jUP1kx7ftQqwrz1nEviyLRP6mANLrBtwdgPBYfaW7BmTfhgN8oUQiqYovuaE3V6xwX5tx",
  "key32": "5XwQRqnh2YGoHX5nAmh1TBYUj3pWyWLzTmqxN8WyVwLTvzRcTibDLEszgEZ2Fyi4Mj6qkZJbFL9JTSm1YF366GYC",
  "key33": "5dxacwdMkMw3KnrBETn9272ao296xUCHSeUM8bB8q2JjtZSPiRohjLgQdGQ7RoSqMJMwLzPLscpvioTZ41nawUhL",
  "key34": "7i7KYv3aPobMckpQ6nezPWajozVFddH6sveebYU28cDsoDNS7w8hkCEf6XnHnG9tWTU4sXqMH13Frj1nSQrdP3Y",
  "key35": "5Rz2mkYyj9YCkgvWwxhfH8PRbkpQRzrNUPE1QCtodC6Hn8yBxwkcsxNgyDwGftoSEd9d4U1cQE4T9smMtiwQC6K4",
  "key36": "3qmRQsncNrKJYbH42eFD6z2vTz1YYEGtR4CVtn2zBXNguXKLBKVMPXNNMLrtqyhj2ig2jMwBGEsp5D4ZVV89exXW",
  "key37": "5QFoMemEdNTfZtvKsRtjwuCem75zFtphyS65QxktotuKGiRTJUUSzP8ntZjBVyyRdau8gSDxGQXVaCtFEkmY3vnp",
  "key38": "27yNibmHHRJ1gJtxZtvih4GoM3g3n4JjTVf9yahE2QnrVdUyBVN3fbXtNmM4dqTVGhg9LYWLxKgw8fUEZn8zg36j",
  "key39": "3s25AZ4xAquk45dP2EU5oqR5NQK8Nf4bijXoeF5BDdkAZSyt3zVKXrXSwExb1VU2BXC3TebDYJQFACe7oRjGdcCs",
  "key40": "2Kniaw4UkjBn7CJqdkPziUxiMGbPsPyh2FDXNxxVxnDaS86FRCzzZ2U64Wjoj4MfTcBig8UprR8yyXZgh36AYyzn",
  "key41": "4ppKfQArBi11buUs4BAXnB2xtxaSGJ3ahugpAvf9u8C765VtkP5cANgFguokumffsqZ2xeZCmGUHY3N2zbQc33oW",
  "key42": "3Cxi1oeyY98YdqhgyF5G6jUwmSPtPPKNYtPWLr99xu2f2KWoXvzpi1cB9HwXaZGS4dVStpJw6J7Fa9y8UMj4Kpeo",
  "key43": "5weJ4mUSAPP6z9Kz1Xu2RYSLePqC9ysunHPe96yvBMZNM1efUXFFvZJKNShcjD5SjLop7ecnNRYPiksxSnqGaagJ"
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
