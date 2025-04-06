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
    "3SM4gJSe1QUBbUdkm4AfgRo2s6czP61KDhrY5UysvarNmm8oR3XmitQwNkWJKnUV346W7T6Zc1dJW5po9qfgCXNa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wgiBKCXG5us2ouwyvnRvnpruyQbSPCXN6KmZAvRBHYHwDsMEfETuLTB8kEELwzFmJZKsxAGncLSbSGpy43NBeSB",
  "key1": "43KJ8Rn19PdxdHSybVDVBvDTNEtbibW5gr8UWMLu3BHyg5nRqRQemHSr94uQcZ9Ak549GvKMYdtu8tAUe4TZ4csx",
  "key2": "4v4u5ZFdcFfcrF39k9qB5hbbhgWQgRraJegyebkeihdgA3MpaHXBQZF9s1avTGbmmTPaXZvC73YFbBso6TXXydHM",
  "key3": "2LEWUZtK89KvgZbDwPJn2pxu6UaFRyX5dmcKxhf1k5gz3JUSXcxRzWELH4EaJToZ3gQWsig55s8aLtvW5i1sXFtk",
  "key4": "P3w5rcgeD4wAF3MJuMEYwBmUJ2WExVybLLUzDCtkMeEwtXdmZivQUhPVCaxLFEBZRBtwLaUbAtaMwHfvh1Xpu4V",
  "key5": "31ua2WBccvnynLAaqMwzVFY2CoH4T98W9d3bw7Totc83rWuGYALjSMC8NgiyFUdxQM5twKXmAzAWj3cBzEzbqpdB",
  "key6": "4gHHEKWPvrnxCFdMkcGKGyvmVZCpiVt69S2GvQgn5WoXwugQXN8o8HfRkhipWNv6iBBxnP2b81YiegMZkJ9xXh2y",
  "key7": "cBrqjDWRZZ29NmgXD2ixKvrkeYmtm7LkSND847zM7g6G81vPdPFLyAK6NHqLgy9tMwawSorubWJKqREFVpXWNEg",
  "key8": "5tnkqzdgRNgDJdKwBKy8RZoHVy4GsMQ7ZVmfmiUWp6WWrKBFC5QH9KJ8j1PvgrAU1CLs8SqhVQRuAXGZnnwdTmut",
  "key9": "2t5yF27hW4JXhSKRRtJoVXJr1PiwMjY2sbXQQb6fdCVeTfsuTPsAREGquP3hsvUcvLnxAPgCdYYunexhi7KgBbZS",
  "key10": "4QiEk51PXqoenN1st22mGhA8gzEgdhFWDWKgvBfuhQe3iYqFT6fbQMeoi7ZwJjY7EvRXyP1Sjbz7cdhRtb9GNTbD",
  "key11": "5x4UQ5yXSVttgR1neLRmviLnDkanQx4fiXmdbyDzApfyLHddrSkFkwrBGKwucaATQQrAnSpT1NP25P1Zz4DRHtZJ",
  "key12": "2ZhJ1petjt7LwsXCS5kAmsd3vSpTNemWBmYURWENQya2yRCX1za3dzzna4WePfFgZiSE9LRhYonxHdmur9afQHUx",
  "key13": "2vfzGWVicLzHLC5XAbSXrDotcCkAAWt9rcFtdLeDKHKaV9zDchQfmNRYRmd5F5FJiZJN41FrrhLvsbpWzNyXu7Q",
  "key14": "2XdDfudSZFtgFDB5AzJYBMjqGkKLZVuf9quMJvZZeZSVFx8iTeW8aHwMNj2dmPN4xPBjFsmyqGzA4trvVp11E7pf",
  "key15": "57aEHNPHZ2Z6oHcRFfM3gVvLSDMfAJNhr8zqqHf2uF58642CCVCUqUo5zE83qbn7NTPjSWeXM17MmgoYVVXoXjhy",
  "key16": "3aVnW9SnvNpHy8FcwYYRi1eSgGxgayDHC1Ju562SYAK4aSU8F8HZpb53cjjwEBb9f7DcvYFq1XUA3H9z6LMVoqb1",
  "key17": "C2bpL93FeepeuCwNySAbTweFimcyi9pNJwNfqdk7qrnXntuL1szMZVyaHQrepQUAGQVPwsiLmN1YjXXLpCa8uzn",
  "key18": "8kttWZjPbXVN3Pum2TVAskDiCoLE9xtSt8SAEddRHR73HUdYVs7FamYdmSJ9ZFWiKv7hHh3S5QekzgggctUjmXP",
  "key19": "3H2vy33hMKHcyrf1SeKqWC2wqYpy6UTnKUH5NFpp4dTFLRkk2XEenyN6pCiGvpiqojk5JpKZaXsrNhxSw26t2A7K",
  "key20": "68ATPzykd1WrsLDMyihdm6jZyw5vSmHYCq9B8rc1RoV7TvXWME5sCD2Qc1QrDbcasRTCuqTxVHYhmm8WRvbmopo",
  "key21": "2spBFAiiMoBg78NVy4cb9NTgnmtRDBcy7yVQwEho74xJmiwPLj2jD6wvxeph9nLmu5YhV9egg4hGPZbtMCgteC1C",
  "key22": "ewtX7WffZ2GAUqCcJK1MbR6RtDhfMqwvPCA1aw39HJ8C1uxuuzydoRRKZJkvjhiyE3rDVRSpyPytGU1JZybAg1E",
  "key23": "4gCZA4nzm7NGd53uwPZp6jk3JLwxqfyyzP6cMxk9yBwmE4Q73JrAkfoV6HeLmiN7a3GCGR9GdpTjM2A2rSSw89Nh",
  "key24": "47DiYkCrBXyg1RTHgekzKmDGnsrpDS2AZLc9RiZ5qmKqy1D8P1kUNvHWSroQ28hKGkgKNdZzXfNAFCAAJ37ceFjf",
  "key25": "4R1LfcTF29CZeWSWajEm8bcM1cwoW2FrnqyLN8TVHpFgaZNZya2HxAQvsFurJvN42zbktopG9WChVnodpq3Yb9kX",
  "key26": "CuxHX4SR8fL9mznRV3p9huCvLyPdxtdXTbGZwUbrQgH9nWTsBwVVCMy2zaXbWriH5ZJVtNFNVMFqM1EDEnaJ9f4",
  "key27": "51whzADqaeGQ7Qm9N5s2wtzbGtFxRQ9cDPwbKFR6kAy7FkoKqWz8zNCNnzYhPj379JYRafK12qogcnpmwrwgrLAo",
  "key28": "56Dk9zLgT2vKWJfV9doiEsLk96Qhyt5mHM3so6njaf94o5pfjJA5Xr8HfVrJ2Vk624skw234cVB2hj7LQYXTcYv",
  "key29": "3yEDxYTyocgJBaQr7pN6TV1VQYG54VFW9wHcKPqTTZUPMeMFWoqbG4SoQgDYycNgu1puBw5YXEyx2ANNEF8NbbqC",
  "key30": "SUjPBXRWeSAQJmMnBb8TvJWC6BC6wEFY1QrhLUuBkdm4t52szxCH2TkVTcQDdNvwPvR9iawHbjSrTYeFofSfD3T",
  "key31": "3sELUxjyPs419bidQaqYtidiP1DieWZcMwzhrM7bPwACkS4Ex2bc5dyMsdhUfhmd2cbF2D4o9LsxSaNg2o8tozU1",
  "key32": "k8wv49GNssmYYek5ETNugJa1PLniyh6NobyKtR9TxACJwAC7syjkqiMNBfudmeUUZR9ZhSMSXn1cdpH8eiQ9DQK",
  "key33": "2opJYVjMmmcjnkSz2fZPDAeLyFsmEMXZGjF7aT3typdvFdLnqNDtC9tP51GeyWcjq3JdFaShRS87577kjEAxquh7",
  "key34": "3VHd9Gmj6McPfpUGmNsWQAKDTsuFV9zVzWoDzkgDeMnPvUhC2wiekdjVHNzbVk4FDJrUmstTFfXSMCMg355L3sRE",
  "key35": "4bPntaHtijiW9N3L666k5CFatqX773hZVLsJJ2uGpNEkKf6wMS28p3ZKKPYf2Y96JSjoiSPRaB6DRLVLx21fSNMi",
  "key36": "4z64VKVE6tm1Eqmd6FMNkzAnzUd48pZarWQnqtbGAMXSiLoGL5SjnwuCSX5nZb7REizF6jYK3gd5uEqpaEsbM5en",
  "key37": "4eekFhja3sghdAUsRzuC3wtq8LHhjVfqZ2fK1f9nHDR2NrUqQQJ7Rj4yHMe3qZryruwYxJ61R47oUCoMH45kyaeu",
  "key38": "57UUdEbG1Xm1pxzzgWsmwHZnaQQ5uYjvFxj1Nkqv1z3Mc3gEX4TN1ocRKgtcDWFVqxxZycVquJNf1rBYzJUyrBji",
  "key39": "5tWdG6c3aYgi8VKieEB2FbqD7UUjYgbCnzbGuEmxQwPXKDTTHqABsE83k2tTbuP1Hs9372YHKuy5C7agm5BMYYn6"
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
