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
    "2UiR5eSFXib4AzqzMizvEqGqzxmx1ztpiYV5BcKFpMZ1jtoyTMj2a4XJStVheBHRZBZAxjDkriUdrkKyYW1DFmTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eUw4grYTX1h37AgMGN24AKmZYF8nmBnLJLozqarSwhhUrPNxheesdM5wggAU1syxpyPeeEhPjQSMPaNSL9CCcBa",
  "key1": "2K9uqixoXsmjfXYzopFfvtdLkKP7J5bC9fx7zchcLWLh25r9ACjbE2tXGYMab86cKk1LqJeodGaKwH2Ybqs1uYnk",
  "key2": "3HrTStsHkeu9kSJn5S1bAAyPEEujZSRQe6M7edVSQtkb8DXDt5LZ4Jj7Ype4Kuwvvj77btChQgYB1mZ43hSmTZ7B",
  "key3": "jmE2tKKStKYjCZRWxpj9pvZei3MvkkSdPCiVbkLFhLQYaVYvKLxgiyQCEaHG3k5Q6gru3nErCWNUcPzBFvuHCba",
  "key4": "3qRyCq1cSq8Gf7Pw4sxvYE7wQvfb9K7qXyTtz66rdF5UUs5dFYdrx5Z3Xwf4NXxXKGk5a56UTbStofgtptMXmyhe",
  "key5": "MJcA28rgRuu3jpGbf8NEEQMwaGReegbqgXU9vZEkhEuaUgUmn7NHGEg6Ejsqy9RKECMh64iGnWhseFPwLekTH2Q",
  "key6": "3wkCDq5Z7svQEGK2RqJQDmrtts7FRiRBRaLRTKaYAVjdpR97zezNMuEgxSWWn76wtHxb6W8AW5PZDyYy4KKyj56p",
  "key7": "5mTexR8JQsrR8EpXWfdRnV92qGweJnUpnzX8wDgG55R6yVeQRvoPGgaNq5cDSZdnoF3pPxP9Sc5vypZ38ETXo9ff",
  "key8": "2XMvQQpLmJCnGd9Xk1NfEW8Zi8L1ncNeSQZ7pFDLsLQmL95bq3aLTsKECbZDQY8rbnwqKSYzBKyyQDrqEh4CcDBJ",
  "key9": "MqF36dLj5GTLpj3ZPHqn3gyNNE9X9idRrfCUnvyYCj6HJ4rM8fhzBJkXM9N71CzLn8NYNitKqiNkEVPo5c6XkDQ",
  "key10": "AxYwUvgFnaneAJZkwYhmi44MGY7Mfc4Jyi3JuixK4xWiGBWRAihThUx3keQAtu4QjaQ8q26K295mm6VocXA2eDq",
  "key11": "2upgCRJoHt43wHmugzZkVNjMy4Jh4ZH2jmAvrBKbn5Ya3PMfrjedX4JR2pHQUa83oHGW8SQxXQien4Aqz56MZ3X2",
  "key12": "5EGtdymPcu3TDipEtT7NycrRL9dH6sGbNW3rbY44HyrhvSmdiZSMRjkf5d3uJYKzpD2SKst7BxawFsYVnRRa6Lqa",
  "key13": "4sx6NqEK6bhi33sftW4JXhbroiwDxLmYGa3AzsjDm3DB4tcZ6DtdDRWHhgLMakqwgYEg4hAreYcks93qEb1vUdij",
  "key14": "2aFCzTQf2zdfVjMtQ28wSZRnA2zNPVne8YPizua1WEA8WDnMEGtVtM2Lmy1k7kKU2xoBqD7GxMV1PZib8Qi4Cjoy",
  "key15": "3tWyVHJUQKKKucnw72845ftReNfqWGhHeLy2SVsJRMJAhy92RU7ngSmKdcnrYzuPy2QCsF5LSRYioZZY8VnrB3eX",
  "key16": "3mst97EeGghoiBrHU9zwyejLn8gN3zo9yWjYRqX7cjUjPvbYWybSDj3LYZ3cQn9wzrCWjWDvDrghuJqfhNwvCad7",
  "key17": "2EP6tmctXp8bBovmjKiaAf3cjA5YhdDYHWhbDq7vtTtPhvJeG7CAbc8e6QFf6W9TktArek1ZkL8PfpaUA53KoX7F",
  "key18": "2uDBMxCVuUMVok9nRKj2yrkwxeUKpMwYEgdgncKPbZH4Y8qBFFTswNn5jKVbVQ2GXJPhMxiLs8MVaCu6Sf2zo1jt",
  "key19": "61FHdbj7chhFQoKMGeo2EvFuuYGJfJEkmH88XHmhYqwTsqg3n5PiNuEG5bbJfL1Xw7WMtjnHzNwmofPbso74GDUt",
  "key20": "3LLckqomimuy6XbUistHCCYoygEUQzavRWU9Fix6PpErUUdyhp95bKwR5LRPvTZpurJV3GSHFQgyaoiMLe1T1vsD",
  "key21": "3ggkpt4su6hXmu7k2E86qaer8e9RBMxs7EwKRy4jHWgXAtMf4h7ec4QEBApS5bH797iiWmXQkcBpJFzR5nXtRyDk",
  "key22": "2pujRC62MqPubmKY5L6pyzmPiNRLkAHMBVqsSU6u4GCsdeYrUkgw7yFWKb5onsGWMuvPqAdw8YSXpTK4Go9YNzTA",
  "key23": "5mWQmazxnxq1rpycBVDutnR7f7hSgoywvzt4zarLVPcrwCCjvxiWJzThTsEsvN7igppttNX2xvTZuTdqq6yeszHH",
  "key24": "3qZobnoCecd6qchmZgAKdUmgVvMQ8DSUmhBc8H5egaZ2HoxVzDvjPCsyTdqJNxvrJ12bxbJh7YgsRiTxLsi3xmrf",
  "key25": "3rP4yznMncYFQECQ2XjP9DxX8aknkSQYRL39iCMCUq7apDEdrHK3ukUbHArHXBX183gy4wRCbSouVEnScCZjgiX2",
  "key26": "2Xv8HGRFTyfksjaMKTB3TpbqJoJKbXNVJfY9dJAamMNohEY82LNkYZo5CHAUF9AsUn89wYwcdzPvwbbQ7bUVWzbi",
  "key27": "59F5H6QnUbNDZBZs6ZqvS9nhVKyTCtgi9knpyRX7pV69eHiA72b6i3WQ6UxDN7up4eWM42JYZyo5RZ6xQZxNqpJu",
  "key28": "45BRX3xABAEj2sHCzyXXFS2HJcsXW7X2hPoxrS8ejmhJsukP4ebPTt5dJAn1PXfrSX81gTNFRcapEeXrMx8NaYuA",
  "key29": "NmHjAJJ6sXJSxKoHaAFFWqsqr7RGx36HtfDcJG3W2NP9uk7vMpoEogepcxp6Uv4m8gtweB8PpCAK1SV6mmvaGGu",
  "key30": "3ipMpdtK6THLt8jNE3QfnjzgfA2o97xcEYfspAaVHWNPM8ZFEevV5gaofi7uKxD9NKSnYqmVG6BH2rrnznhnUVcc",
  "key31": "Paw1ArjXT4sXLxCnwDL7R93KbtmQKVsS6BYt2ZUBYj7xTVLXfnTyLgJvkX7bJJSDSgFj4czBg5T9eAffEscZPXE",
  "key32": "2b3rfegyAYoE24gEEytrWEs16GQUFd3pMr9meXSepZ9efrpVEnUcnbMYs1ko8wrAXz4ifQH1ZMNpW7XGop1r2Lom",
  "key33": "5z45WUMTJPDGK8cs2oKmf4oCSjxKkGiuueHqC5PvnERbdGGZmyda9m5ETgVnozV8jsGvw8BnffLW5hp3u62ogEvj",
  "key34": "4k3wXuXsqYM56i2uBXYfT85nV5ifH5bNEZ2TdhSUFCLeskW3NrE4VdheFKexCd1qezCYMjLMGmU3VLnjgtmwmmBg",
  "key35": "2HYGnc245mpoKtnNsKdBm8thveCF3j6YHDDCgmZiH3jpGP7P665zq8LgvVPE7z37Z6YHr56hLobtYhfR7B5AqMMC",
  "key36": "3g9BQv8M2Vv35pvjGJSVJoLPmh22xKurSCMjEmnSd1LzwQRKuo8uWbaXkoZHGCTVKMtzm4jN7sD341wJx6biyxSx",
  "key37": "2B1DtvKdegiM7WaD1yv1z8Sb6tRmX7eukV5kXdqGsa2eG4AJX7wK37gf6zxgbhZ5tmUJhdRf5RbM9wKMHUPg7SMG",
  "key38": "4Pwzji9KaqfJKtTTcsE2jo8YXNq6hn48bxYbKBakmSkWMLSxzYpAA9kLZMVakQZh5FLoPmHB1Qx7syA8XQ1FY34z",
  "key39": "554VGXeGfJyvq3NBGt6JayAgqkdJQPi88VNoAExbxnGM1RTsMphk1BpaTAWnf37oHvkrJX2mYP2o7rTp8v6XnSC",
  "key40": "2JX53WqYN6HW19hpF92DhU89wU5PAV6ct7kQ4NxC5z3Ad11CMfiWS7vJ8kQBV81X9E4CvxATSZ2bYmMKatNA4n19",
  "key41": "5qvadrXshJbjxmm7PmyKacsvqKVVkECik1g8mFEUs4CQ4M1QgUfrApkpUAnemesj14YrH6rJXi4WP5xZANKTJc7B",
  "key42": "21JLK85Qa9Uhr6wQkz24oRumAaHiRDHWfq3a2Cu4dBqCt8zr9vSdr1fwJyiMkuKvRMuyUEJVQHUC7kXfW3Tm77am",
  "key43": "416Vk4uvpZkKj3So8wnVrxVvX7iXtRAzru98MUgKDZFB5kkjRtC5AeWpQ55rShRAZY4zjwyn3rjAzo6W4QkgkPdL",
  "key44": "34h1JshM7H7s2B4s3xoqQ4URDpduna96XN6E3yREYcWbgtPRWYkUS5j4iZt2i6BzJsChHiyQ2n3pNpxHuNnE5DM3",
  "key45": "38mDsCPNfsrKjJd9t6uLxTNk1AwndVGVCxVYHsSrp68MGSBceVd4v6e2dBB8VYavAvy59z21HEQVaQfoQ7yQNXmj"
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
