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
    "47iM1MLDDE5Jq3BT4RWVSMmiaRMyhnzKdjZVdY7yHnfsKQqmDn3TcgPkGrhpW4QtZV7jDHZinSexS7pQZhrrvxjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6dBJfak1p8J3J7cqpRQt7aVmHMuq7YcYxpKXVpgMdQnX2zt2LnJSCNj7t5FMEqScEbFUeqgkx3r8fJPXeVmuQSR",
  "key1": "4fQiEmaJ3yrjXqW8W2ad67NVHXQBcULTRZ7iQjH9qdZYd9gScXvJtoA5f6moSFjuZXYxzobtnvSKSNy77Uja8ztV",
  "key2": "4cnNbLAG9MUtNR8GDVMsD9x4JUHzt8o6XNkWtneQaG64dDqeSNUL83YQ5bb5KcwFzuTQRmbi7RgNdbx5YgEHMgsU",
  "key3": "DviUnQVYL7AHsLTBipSqRPAhcQwDBXxyXshAdqx1EYN7FPHPmuQkeXgcEqY4KNwdCDdWv8GZEHvPtX83x5ZG4Uc",
  "key4": "2F398FuFpGx5HEtWAD2y4bGGjgwTYgK1AZqNXbcvvCWTmU2HfpJEqamwqe5F5veNEsDk28zwp3EVnGUM2vf5WCU6",
  "key5": "2ugqR8R81QSpr79XBbxGCtzXShKHUsro8gB33AixL7YBZhGygoZf2cjkxkYuJy5jcZPGHR4HXa9UNAe9vCdAG2jQ",
  "key6": "4bMvVXD5X6yAURNBJewHAfubvzwtDHqtwqjmXofyo5cqAD6yauNSFNyRrznEwF7ZPYg4p4RfbqkPn7giCzmL8b7",
  "key7": "P5txZGm9ymU6zdNK7gUAsjvyZWmMhoLiemy4sapUedS6xrqAopsRwycLWsiacQ9xzsu7LpLS7qNKUsXeR8pWxR1",
  "key8": "2ZAeDiXV5NYdupiThs2WQfBSSKyyVo7A4DpEVb7p3i3YKyPr5y5Gag487u5icScbEBU1rE4VQQAJZdZzKCYJbUxb",
  "key9": "3n9p6s1HrEB5Bf6W2zDPpC52zVaKbDVjHY72wbQiuFSQmCK96pFS6ALsU5iHaXg4BoDriV2MUkAnqDiz8mpxBXo8",
  "key10": "5K7kKCgizw874RzRRWPgiArQ41e62KcdrYrMeDHCAy2zmj1hDxU3X7MyugTRnLRwcsgFPmTrasuWYXaSXB2aUwgD",
  "key11": "2TT7XEBYT1JHs2ANHhDVyQbcWKuYX3rcqCGLa8dmuyccEzbgDqJdmDtvFCJ4cUF5PRVsZDPfGX9Wty7vNsGxUbsQ",
  "key12": "5d2zY7wtqCKuocG35pNXmC2YysnQbidR1Rw6jsjj6pseGNarcMhbE7yk46hBRnsXESLF3eCWuzTBhjcxiE4jPUFA",
  "key13": "zND9fWDRLaCFLSwxmR71ArkNWPshdpw6u9zvYSwyi7Mcz7LdLbCCayPyy4QV4WdwyrZUvnSEbf78z63NoRhAXY6",
  "key14": "4ppXqTJG6jwU1MxA9gKevmwBfc3BmE8duHDS4P8JAHsR7JDWKLFM64TQaAxXcd5Koir7sKbHbfyWvHn8HjkWxAG9",
  "key15": "4ZtdVh1rjXNBPFKKdUxTTY3RmkbLx1ATixZGVZ36YB3C3sxVjVxo1Gz3ThHFnqq4kmUparnB9YCm6Y22jb6CsbhH",
  "key16": "2hZR8ZZqKNqTpgTyUV6EBjhjNbwUpvWbPgZuDNt8sGiY2xBV5bjEih84SKkQZhxuRxkQ3257tjHbCkrx5zxP6y6e",
  "key17": "3Q1BQpC2bpkDQpaiU1Mg8iFLsUWUgZiuYj9BhBViWqBEddacffPsNY3nd4Jon73HScUgU5yDhyoeD9LRbkNeGNaA",
  "key18": "2AGGJZgNrSWH7vWXkamk6MTNVs1D11SQgnxKwEoSXBqTRi2bVKzFDaD7qiWVWWEWZpfFFuf3ajgAEBza9yKnMHKK",
  "key19": "VUtCJN5EmgqzTWYb792WHENJiz8SGq8P2HDDo2LSsgNMzjt2tTuVQhGekK372RR8MLKZZshzfDfDZ9dSsabKESH",
  "key20": "5VTwniVdp7r7Ag9xTe9XkAEm7t15Z1fV1LtKRDPDmyAVQ3fKsBkzrmS664wytiq8ajtW63jk7UPZaUB92bLE2mzS",
  "key21": "5ekrvSKSJJNz4FsewbkBp1uMfcqsgaq76B5dPhqGLuxroeFzd2YazhLNg4fpdS7xFi3jFdGMGjkH34aoNQcEDkTV",
  "key22": "3hL245TtGFRZoXPqUvpYagmcpLMmNtGSz2EZq69k7rH2uNw6aVVH9UDwA6JccLUuy5mn31PQTqM2fVqgmNBqLyYa",
  "key23": "21HLFJb6Ctputq71WCMfR6KbscnkaJZ5qLiirvY9nybuQKNKHy1u3e7BgYGFDf2tfPRCGiQD7o5QnACACFM9kNCD",
  "key24": "5WL9iDBH2GMyEqbTPfSNhxDyYA2NnCQ4o16cBA5fxQinmSsn1MTFTNcMsQuoMhaCH9MFhGoFDWbRJU36YLcZzwoC",
  "key25": "5YhZUxehrGud4CDfSJf2NHFANfoR7fRqqMs6BcsV4LUT2AeGQx3P5FkFgTSaeyhVScoLiEzAsjB5bASRPHn4rdA8",
  "key26": "3LL4mK9EpAfeobZseqc7H7ruKwGRGQT3y8Si57payB3GuTWt4U5dzkpgyYsCuVbnCRxJ6D1WSvSS2ivqYGa75BAH",
  "key27": "43EZ61pqPegVvGzewJB4Lj8KgQR6qRKeq8rxWGvhpf48yQhrzM5T8F2zmjhABVQWXhBpD2dJvKVpexRzWhgLZ8Qz",
  "key28": "3wijVYHWMoQvve5y3RfkQFDVbTC3RUti4BpY8rG4mRt7s5WAfAkPPSvwBgJT4e4GhSoPWQ7xY7e6gHhVSTygtiR5",
  "key29": "3KCiuxbstAkpJfxaRvzMd41PvxAxbi5W7bdtmKh1qu6VcbfFAM1BA6qsKB8z7Cs666NnuPCbZwveok6DNa4iSqVz",
  "key30": "5UL7UPsfEGxTqZ7KoLvw3XM1AnEQBucp26wbxND2mWJqMgb9TDfdpUjz9JRnmr33oycjzXekqLum1rffKDudocCQ",
  "key31": "66MB3c1KnFTQXiQ1yQKGTeduGoXCwqHNQibtVN8hn6rBbsAvWY9Z2MXMwWqfp8CPWGpq7gZGud3aHLhSLqCBqQDs",
  "key32": "4PqPFRFdHWXNTf3r7y6UnnP579Uh3SGKuY47mpmVfVHv7V6YNMNWVcBAtpLhhaCgG96vWcREgRKn4L1uV9xmZwGk",
  "key33": "5DDpLpY8cURQCbnitqviTxdUk4jGNPEQv6baPLZkT6h9DibnMea1j3SqsxT1zfpf689GScbnJQEp6qKkXuM6w4oS",
  "key34": "4F7rBdjrr9svofqjTy5jGKK3p45qKpTp1xrTrh7jNMjtf7GikVqJRunifkRmTDStULEa93JNVvGta7yTURg7PDNj",
  "key35": "3rhwrwfZ8guQf4bX1dxMofCsCyK5LsPNTZfoqJpnFy4RdEAPbTD2SrE9vLJjQ2Q19WPvaJ3ZDSX9f9xDDB1zHn4i",
  "key36": "4FVtDZZ9hTCZ5A9kQ1jVfZWCRDSNVMujQ1LbevBswraGQ7eKttUVqWpoieoS2f6Z2egGNVCMkrwas6XzmEn8L5VV",
  "key37": "3PXP9pKbnmNnC8Zz9vf8oBTzCV2pPRocGpxWKHYwthqc3T4hJ1vFyz2AhbUutLMFcRsZn9naWZVw3K3SQUBEQXL3",
  "key38": "3SY623beTBf8CSMZeGBZYhDtUnCEkJKsUt35j7DdbaSjbfkNs4LYfHDq8C3gPhhcJX2mHNrXk4qxrFUxPMTbFBV2",
  "key39": "24o3C5dRa3VUE7XLgVvFrXLhZ6wKKpURWLM5dr9G1JqSLfjFrGUTrkbLWuh57cMUS3fT6kDDv9jBZW2ZnFh4okuZ",
  "key40": "7CzFScdRfY6TY7b1gCLs3ayuMRuKW8QLjovev2qaTR63iSdfo25XZZZ2tXPYkQUSmMTxEqDYtSKQn8sFs3AzHzi",
  "key41": "3CjczCM4dSh7CqihC3pKcwZsTqYXauKQDjHvp2vDez6VrTXJjDnCAnEHc7EasXgVnrkfuGkgoQSV32VReoKFyqrj",
  "key42": "3SNHQsn4r17Maj5uwpaYHEhxeQohx86ukx7SxmXMTLDCuvFQQAixtzDRaUG3PxhxySF244BsQJKZ8YGqYjdTdEyf",
  "key43": "58ZHNcqGwWDTncG8iMrgzp43p1LZ5LR5CoaUeU4eoUHLjNEA6ioeZamudrBnWrFFAPw2m8dwgTC4yb6mU35X1EaN",
  "key44": "5TaSmRr3TYFRh4hPLboSE7G7EL5tN9sqwbr24kwhQo2bN16wUpXhCCaHgDtyQ5aDfP5LVNqTdMB4ErHjsBCEY9wL"
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
