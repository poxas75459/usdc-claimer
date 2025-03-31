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
    "57Zy1gYGBndiz2d8jCXsk5Gtj4C3VBQntut379p8tVjfJQw6vLLtpRCCnqWFGydzLfGWPNbEkijFcPkbiCyNEa3F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eVGHbjZNxrGU29PzMgX8tYFb3wNVw8TSqp4vw1J32Mhjv2q18Pm2CQfKm1qN7QrpxP4vAkxKu8j4wVpt27TVHmu",
  "key1": "59EioCKmDD6q8ReQpvzfHnk9E69raPSkQmsqM3gFjKE5nCR45WQPdontDcYqJeFdneTYc4nCj12dfYS3g63QfrYf",
  "key2": "5Sc8Z4qNJi3ukH8GBzsyRnRgp4UHxG8zH3bnNifnGuPoszeK53PSm23xn5hoabaRJvUu8dAJtkh9jiW6dLHo7Ewr",
  "key3": "4EKxHCPA8SGDsGJbd8AWYzd1o18eQJPmeuAVDMHw1jttb5hk6DzcDrdYJmqruSE61JqaAs5iw4Qfg7AYuwi88chA",
  "key4": "3cKZ6dN4NsDPTe6GXaUYZriP6kXBqf5mPRxrDvQaKFKywGz9TDjG8ABxa9AYzA3T8KPS6MMQKt88Yp9bcmfCh9DR",
  "key5": "5QEdJRM2YyPhwLHuzyKKuRHfDr2FawMc6BDcw6r8mnCo3wcgnEVrZboGhHBDgSrAB426Z2R1M7EVEUfpeVKG4egr",
  "key6": "2hZxN72LyuPtRN24UoYygiWtzAunjJTvM6S8fgX8Tq8BRUsGHoP63Tgx1gsDFX2J9xDuvZXip1K5iRXzCGRFanET",
  "key7": "5x8PEyEcZ51WpTUtZyXQGUpXuaM2NoiXxFfQqEriwaqVnbDKMrn7GLjjB8uuX6qvYUJtWAXZ2i9xqHHfD9LvmtoE",
  "key8": "4YucZJ1UvVUV5RDUHFERVsoknsKgK7zXeKjXLkNiuiwfExDS6G21DKfjZsCVKCQ5b74RdtTkTtvjLnrNei2sEBFj",
  "key9": "2uFDUjxCEJ2VJcLTMkFVEFEUp71CE2No3jaLFKNpjtK89QdkvnwD9H65qCWWPnpRFmjLBYN31DMHErmpzUYqydpa",
  "key10": "3p6RtNbRCvQ4oTSdk8APWESmBvw53VzoLEQj8mCB1avEnAgkh24DFjCj8wCynvn2cBE8SXJNTAkZkJp6FLc3GnAQ",
  "key11": "2R7TXCVbcXMC9vBWXFA8YDUJ2Gr75RyVFiN46JHvWUvogQEGzicnimxCG9rrpimd7x8W8FEsAc3KxcR5Do5W6ccH",
  "key12": "57q3UWXH9FNXsdzDj1kHxL8EKxwxUBrmjfcrSCudpeD7aBasRnCGuT6YKhfzs8zJsTgFkgNkVt2xtzqcdrJq464B",
  "key13": "5TY1uEr1fdPjvMTUDuy2X2Zb2SRYMG2bPskWVnZW1Xchtg2gwTstWNYdGKKmsbpWou7hEGrMgjUY3zeiuGTd6H1h",
  "key14": "fvGmxE187CcQ16D1Yt6RbaUYCQKUAGF8mQTconmE8fpoKxkeKQTh2g6VhynTEeS9cgb7E3qoPthE262bxr2LofH",
  "key15": "29sxGuUm4iepLCDi946jkBQpDUTxRbf1NGLTu1UuoWzH7fYfHp8XS8tnvLcxynNyzBQWvbSmcNUm7TePk5pSUMQV",
  "key16": "5YgGJyXvKkRdkFeE82ZUzqgkktgNRbRjZTfyr5S7R5AdAwx6QYpvomVmsYGD2EG5ebfHmkdhWD5w4k8rifPLjwAe",
  "key17": "5Nav6NHZYk82FtrYCvFHc2txQFvbBaDzzABoH32CCoBepqAZ7nYMMcSgAspQz5BizUKW8Jt4bBZrGYYt9wUsvNKr",
  "key18": "4MwL9UsHFQ4hRBsQ95Vnt9fD7SurLRx62UWUaPrtbeFBeHsdhWE57n8q4ZQnH76j9vtQNX7Uwybvg3PKG3CHnwLY",
  "key19": "58aBu6rtrDkbK46cX5FtCpmPX296CjJT5i67nspb6gMCXhgpjbgcP8axocx3fhUgFyFKU7YwZw47CoUNNvTAMxxz",
  "key20": "5SJs1RWcyPiqCELHeE1CYn4KrPEkjfAZZkPNEeptCZZV89fD88FWpkSjBymwzskSEsFGCnNZX3wdDLhGgggXFvCB",
  "key21": "iBy8MNzjLv5takbHjfA6xuL5nx2EsZBGDvFfP6UeHgwccQzsy38tLd9mWVDRU4U7FCuiKrfsGh6bs14gP6t5AP3",
  "key22": "4PqiAxZKXE8FchhkxT9MT5sGwXzmts7DJTSdqFV9yYF9DHyrt3Xn8w7QDiRKuNGRc5HganZ2nEpgQ8sMt9YnJ4h2",
  "key23": "4yR1R7SGowbvc5NFBst4zxk7WUuSab9gXunYau6gFy49UaMghf1bqDRFHiyKQTE4o8oK8cpFE1H5rQ2YGKBy4oSF",
  "key24": "2MBb61S4MetRFykULNyqqWeSP5igHRQZmxPPUaJWA3w5dJaokL4mdQqZHVRc6wC3AHMn7RibtoUhXCT6CKCWWrcD",
  "key25": "2dzyuL1Win3MSLnwFGZJNdpnWyLcG5DvRRP8bFGuzMaZPkxkNXqYHQzCwu4QYqw31Qz9MfWndpapbCeWqDtWyAvy",
  "key26": "33noug5DkNxM5ri2vBqz8fGsZfJemzAN6qXSfvWcKDyosJ6cJ14eUSQ63YdednmCfBbsNBD3HcCXfFHQJJEz5Pk8",
  "key27": "5dvfG7Nrf2UbtFJTgwmbDzNBWW9uj3Dcs46USqWy1iKRGvGJvmqkY4Zm7b5izvL1yhMcgx8SP77md2KJv1PiEPEF",
  "key28": "2gT6TDyBs8BwEvfQkUiUz5a7EyJZEUV1T3cTXmjZW9JQkr3E11vDVtb8dfsS6gsJrc4qAmhuqJLFobxVm2uF3Qwa",
  "key29": "4iu3gZJQ6Xb6cfGmph7jhYYhEWeRMEnDXXK5jiHTM3knojQt5cjym7ojTXqd4bTVGciemEBGc217Qv8paRb1Lmz7",
  "key30": "4iBHt6QdXv1esard7JDHSxgMDnBgVFVe1x6VEmGyZuddzcPCGSYRic3Ng768xfBYcwrU18RG9Ps5gDm6sWWr4Wi8",
  "key31": "3Qsix9CeKXagE3w4zDzXga4yNq8n9oWiC9174u3eXVDN9xwDs7KxWrio7ucZqMzLahSwc3hN8SSUdXt2LrUGFeK2",
  "key32": "gmX8HCRjkeLiK2Jk6oNXTHDz3LVDJoMzbDCRagi3n2zyHWnUJ9tgyFLonkCYC1FkDfuPgJ5qswnZmXd4qhFiXX5",
  "key33": "5s1oeSEuJAdmjCPmdBHKT9H5Nmu3uYkqr14tPqP7U9iUSo5mwMicfu1NBsmAG6cZuULH2G1cov5fi44XThVjaxtm"
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
