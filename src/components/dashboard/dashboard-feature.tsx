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
    "3LRFQwgAR4mD6Y5kHfFy6x7k2Mvv1zLGXHxWRMBy33SSbqjN1HDybkR1Gkd2cWicwt4eApv28CWzje9gpxs6qkdY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r17evPyickXjGAbnzMvCj7JHJBNFbmjfXRpjQZZFEgpGrFL9MaFmv4eaVW2GKkFVsMddDD7V8q9E4Xh79bfkDHX",
  "key1": "2zWEGnvC6jxMw46ro6j7EHtx7M1mp5xHkWYfUYLajpZRPg9dNvSn2fTw1o9NkN1JHAoJJVEzxCzvaZV2ooD3Rk4U",
  "key2": "CWsKEVkDxBkvEZXokka2FTyMB9HftJMCuphYDAXsByDhNbf13uaGtFJhfWuQjWzFT3aKeuX1eFvr2gtBuE9E7t1",
  "key3": "5xp7pTV3fHmTReTYr56QnF1PxRYkA7w9HHfqtPJbUPuHjcK97FEQRgTmkFyK7MZMXwSMusA1Hfsy4wjZbbyp8SCc",
  "key4": "2bLh9p1JVX9uF3cqe6td22GzoNzoAoo6CJbennyGKjnPW7BysNceFpx5WDVM8LUBwUSXJvgBfLyJfAppPs84wceZ",
  "key5": "3e5KQb7g7yGxWn9uzXqkPvmUuGJdqTRAHdk3m137knJfMJZXtuptEqbKHgGxSwCiNP1wtqAcbq1oBvboZEZnzJ1D",
  "key6": "3MmU2LageQTML27MB8qozrfsDhyqeUmDqfrFQtQsX8LFdg1zEX4SoNsGDi9amTuRr7LTjCmhcHHvRQvw7Yx9t3xw",
  "key7": "4iqV8uSSE5a9xuyC27JhaPDobPuL4au4n2hq9VkDhBWPji4du1ax5bFDjNWifhZub1v3BKd4xGtySNgy8BMvLAQo",
  "key8": "5bgAJmBQGC2ZwJsCENBCiFpyYnBQgKgurtj7rsvNRCXZxz1RPYKbpNLz1mURsiLRx4sZTQRZehvE8G2o49viXenZ",
  "key9": "4DiBBeeAXZYtkQmTpkwGtXfnnR8NMwC1afdjjvQHMSPSPPqiBrQLQRstwKg5fMUxSR2qZQ9akrA7SCNz3SzNPhea",
  "key10": "Z4ZGjwd9YSipm4NEWPePUMQqaDNK7Wtagp2ERzcsDWpEhLVLKMoZfCEfUNWB41SKhEcw2ra3tmP6FzaUGVKeGk4",
  "key11": "4rbk5ejbu58DmCLitixiK7zkF5QvpqaqL6o7MeH9Q41boPU4b75VL3ThyQaSoqHX4DdjKFrZGkXEsf9jcgBSiZE5",
  "key12": "4dUXaS7CL53Gk2QqN29KWP4veFQwSpZPymSFAN9FgRy2B19S6paZvpgVQKFEqwD9SHX7AfrUecqXtk9YD7QyQ1X6",
  "key13": "5gZkKTBckS3xKuux1vLyqS8UwLZCvvwKjF8WAdv7Ax52f9H2C4NEu96Py414nsKGm6cmzaAFGAhCcZBHfaWMpu8c",
  "key14": "2jpdgNgdVc4G3sE5XdS9dgBNkjmqFZXBi4Tnschdqz713XXHNCymwjAysA6t7z9RY9PqqDcqv4ztdjuf84i2Rhnc",
  "key15": "63eX5U4id8ABmH1hWysnqbgQCTrNXr8zq6gNu2LpnnQenWwCZN2vnKf5G5ieQahN3SUPKkXgtxUQ2V6PABdK19kT",
  "key16": "53o8GukanhssqJbiFxbWJuAd787A5wnavr73dcDbbazeEFixpYss6reQtUTviV3jYphEGrGQAjACHL4rRoiNExFg",
  "key17": "vAczEmzES9MPUjF7r4dx7268pSERasarFkKANfPaheLT8iWjW5sTBozLLdMqHvBgrNYgLGqX19EeZuC4UmnnYaw",
  "key18": "5cKVXN3ZSETEkJc5MotoNrqcnMuPLvJgxxiPWGCCRKpdoYHrufWSi6HjBB87aLG37z5iGh9pqoakSCBqcMYhC7oo",
  "key19": "3LGvxkDNoyzRA1k79L2w1wn2TMuEXXAZhgNtjAWETVy1c8PGf8zWc83BVEzFsyQQY22JmqMQnLizkT1DSxNMYTr5",
  "key20": "3t9YgSBy6tT6HRZiFSGD9ERBP83bFvC3hwE8LerkdXR8GdBWcsznZTunvS6jUkgxCBUPP4sDPkYoMdSyTCZN3ZyT",
  "key21": "58f9jpPxpe6y3Jzj33SKKWrZTTqFEf21nTPErWr3dBSoVSc7N21yjaB2sZhiGqEdFqk7M4ftXVdp96iUPDQT1qD8",
  "key22": "3pjtrbJN2mqXA3kodYgr6xXBzRrgpeh36EPFB6yFdUBBuJQeRBXSxRKsanAJLgoRYmSXKGERtAnzqaxsTu53otvz",
  "key23": "5dQBSfmXmrahBunB8rjWKju7nyHkLRTwinmSmSkSEnhUk5Dz6kGeuUU94YkFmh6VmNxz5vxf3gn9kXeJymerVcgg",
  "key24": "5gRt1GU1M6dEHt6tfLzYegpQCV8gyap8KAkhgVnJy1TVGTB6A99kXibSNpLEP8HHpXYmE9qJJYTzujXzypJF7bTy",
  "key25": "4E5Z5LXZAFVNhyazqiRVL4vCSKSudue1xmgzgJJHFyE2t7wNwDCythN4b7CwzfJTd2JE2dxvx7geabFBpukfXcwJ",
  "key26": "333HkLBjUuiGZUunmThtB9Z13VYMKQTTuC4WG6JDr5XLEZXHf5S8jd8FSY2jJRJqaxhcDZuPnN71bX4AMCvcsDL5",
  "key27": "9ae37w6wZ9qZNCu4oZLqPC2tTZuoz7hr6Qxfr9r9Zd8bvqBFCePRoJx8MWANQT4V6PmoBFC532PQBjo7BziW5bJ",
  "key28": "3HYxxAAEJwc2Qo8ecddaowTtfPKUEnNTHEfLJ16cSfGzwtu2LhgGTnkqspTrSSWWx3piyMmvi72erTGkxXww9Mp9",
  "key29": "sPNMZCjRstULfmq9oZXM994jME8WCPDZfRj5ruHpyZvGm8xozPwskH2TrDAgNCzE84t4Hn5D1CofgnXZXcNm4Fd",
  "key30": "2J8xQU8v1qCXVRQ2fn5k8nAHoBc7sWg69qfVLU6SVqwmd1Tysc9DhEFrm92YD1sgBdCR3dt2UoP1qhk99AsMGZjx",
  "key31": "634uEXS4th53NyBUVipMCipY22LhoP1yZCPkS46M59Bt55EDVJc2gdsZmgo6aYvFQpn5XHVmDQXWmD9NgdoQwACQ",
  "key32": "4TfNedZ8Ve1dYckbk5MrW5A1FkFvLMe34wXuuAsApx9tDEV4NcvuLiNSYWi3JXYkqfRaYZBBNzrwpRXV1Dj62mFp",
  "key33": "4CNFW4kTA3f5fC6i3Luw1AXeu56fMx6PQjGWm92UBQ2Ddd26mpSG66DKnA3jjAiWSkDiu3eBx3ZUmKcfHNS5tSD9",
  "key34": "33ZPeyLedjuUyA9AsB9mgy79reoqarKeLUHJxVm7jb8TdYwPQuwaoQRxJN69RjFLR5pyUiZZd1t665cE5Uc3rwU4",
  "key35": "67BGcrrd9yGpHpdd9B9D13qKxdhvxFrDnqT3EABrwnjAtqe19gmSbewysk4FcE1LhBgBqpN53otPXmjHfKKAXax5",
  "key36": "129N9BEGRqaugrHjaUjwa59pZ6UhxQLBzriyj3xK29D97do1gNERxT2tkntiMfPEwssqRigodPyjFFaEDroibHNV",
  "key37": "4AJsPmzyKDcaCbZrW9DKrfNrvA3vH6ewTfmMkPWdetQfoQMw9z2GQjvJjEAkijn7w7c8WcLd5LHfY5Pmp9hxuRLp",
  "key38": "3hh5Mb3E7tFHWMLuJK8YRsDJVGajoyuiBwrMtfKkB6nywp9JErQENuChvzwAqmTJ1xTtDkVFyE9y4aot2B9jgN9N",
  "key39": "3TYhhdKnkpdJ5y6z9PgHF1LbdYJ7ct1gvJ8nWdtxeYgSF6zGiRnN3yHvSZpNS41e9X7yR22u3JfxF82FSENUimpG"
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
