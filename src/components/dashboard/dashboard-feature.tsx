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
    "3tUsbVY9XaKiKh7zrZkkjbLT9A8nK3KfuqBoStWxeKmdLt7mmxVGRVDkzWDMMac7ae1iHyxVQVxXAeN99qXLtTqo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48HUyi6TWob8KxJST29ScPH5NVLByY37uDEnx24EkAichVGXHtoDq4MyajynBueBcBiR41rAPW2r2jR1nACQF75u",
  "key1": "5NBkPStiuBU4WFbq9xCXVdZ2fCt9UAfgADCLCZGS8a272yGUumHERf8ouK6hnupHgPNi42x46D3RxaDrmHJta3Lq",
  "key2": "ikAr24Azjgw2XFRKRi3GAyQhkQCjcrK5DD6k4kfsmMMz8F3E8oADnuKc2LwKdoS3atPBQy44qhxmZbZt9rS97gJ",
  "key3": "5fQHD2FatJUpnCTV9t1SizurMyPWo3fiwHG9WRpUcn3cnJ7Bcoz9um6hbsAmyAuEkiBGr19c9DE5GYabA8qSYV9f",
  "key4": "2xLcFV9JgehWpZ3xLsZqcaWqqgKJfuJcGzTN9jndFa1xtK9K4dvy2WfHRewqyAUCeuFuMCpkE4mkrA4ghfmU5xgj",
  "key5": "6WNMjLHHKa489HrwXoe8au2kASKm2YDjdXzP4nBM4tsgTVEpHCnaChszLSd1LKjsSUQLQH9B5PMT1RAkmxT1qXC",
  "key6": "4YtXXiWF7ZxPwJ4EgNKdRG3VGa57QgxMnpVJpauaAZnYedyFLZEeWTYeCqhHzqkmmHc4hXKF19Q2SxBLhs8wtby7",
  "key7": "4hH8FBF7qp2tiYNs8i8hY9J3YJrVrDsUSxL3erWGDSwvVy9RrHFoe1bGt1mwTR2M4j9jqorLJF5J5grZooAAFnvt",
  "key8": "5BThyEfcSGVUxpGdbRcSkWovWWnqGzuaZ8v3dyJe1zYu9djbJeJ2QomvpJ4TzjSDzT3AxipFoUyZV7d7FgrQM5e",
  "key9": "amcFJpQkY9RBFHF5hzbbrcwRMckf47AnLr6JBYDTJZMdwsiPE4TjbeQwYae44v1yrYJ8YvmkHUM3dS1Kcjo1S5a",
  "key10": "MsmbZiSM78vp5Jp5kKsSHSeSokCQyiW3rhxXqtVfSfaVdSm7VfZw4fEnux3BV2jgbvfwuBmCJt5MFRt1UUmhc2m",
  "key11": "fiavqPDHeXfjAUaYLEEwKqH3PEBkMHgJE8nh5Zxkjx53A7Px7SU7TbSmjYXjwGrSE21ht1z4qCbE1bKBbBYfwWY",
  "key12": "662KvHutstC8QnXBUcFtyS7fibKfvgKc1F2HFtWSSTKH1qUvFmC5hd1S9h4Zhbp2cgfkyi7qWtcMgz5xM2Uy7tYP",
  "key13": "6bkfVEopegVdhtrCYW8Fuzdb1bURWW8tqifT13Kt4CiAoU2PuHUv1YqAGZ1VzVsAmv9nfKYXocAzqG47efUL5TX",
  "key14": "5ySaP2CdMBGMziXEWYpSC9KzGG9Fn4D4vkXBQQHDmsBgLmhD62mFebrkfpzy5BL3gRDvb9ZGcKjA43mk4qc6n4fk",
  "key15": "66VfRS1iNvYz8cbP2Gh88Hdbp26y9gX2G9XSCaC2ruYD2hrREBBpL3RnvFwnunhDUE71VrmuBAMK7Mc5vCt58KNW",
  "key16": "5UndyFNzBj95pnkLiorUaEmfcKiLd8P3UekVu8o2jFSRDto7Zw6JqAzDtPr4fvsYJUJsK5icdstT8GbMR613Uzwm",
  "key17": "4H73dXhRFG11SWTjd1Q8WwQwKbNydCYYEBYjQMc9VFkJdnCpQKdX8BaWXRUaSTwus3fpjbHcx4zz2RRgWXdPhAUV",
  "key18": "1uqjpoHePAi8RKTzGgokrUXubG5JJTpAx92fUHwGsaAA4214sYv1UKQTpvzmxpSfUTMwmkzPnomeMnTnb9ohqKk",
  "key19": "24gY5zeg1MAhyDJLbMnUthh76G3mPCZr21iXSYLi8B8oUzZVQ8BPb5ybwNdxFWAraAN3JVKHQRRS7zvaF6BRw1N7",
  "key20": "iNxgFCLaa394x6V2RHDKxfi9xHDUnkqvg6BqfBsGtgd83dDtVtWSRkuTxJyPt352oXpzEZc5estbo7sifubrsUz",
  "key21": "2L1jt3igXWT6PCsx6PF3qSNsZKiwZUccx94fCjpwB7XqEbbCXnuYynHaGect3RX8wnXdcy1UcjzSumXj5aUoQQME",
  "key22": "4kJEDBmtb2RwXkRUmGeLQZwqZ3LFVaAsQ1PCm7XNuSsZuZgcPbhK8jVosfxUr74zU6Kqjv5kuPMsf95t1kzMkJ6x",
  "key23": "2CiHDM2uU9uxVKKgaHTxxkQwghzzYgXdcRfdP7qGutNjPnEpoyHPGZabRLcMkpQdcqrYUpSjjXXdUyYCkUv6ZypS",
  "key24": "32KtbSbFqemyF3vvmqWVyLHJD4wBANRa3kRScvbSWqdiUrymtGejHqfJCVKK2LuHiMEKyyQB7tf1H1PGjirAvW9n",
  "key25": "5CCQsgLeDcjNwadbQtR1TmAc3Fy6eQQNmYEgA2PTnFqktP2Nf1PPQYeuUHYzC8xYCoHzqbadhTK8vYdcuJJd2nmy",
  "key26": "4hipsML2ajY7d5z1g32b2mzoPpa4uWRSovfD6pt869EcoZZVBHn2HVxcWwZ4aqF5S8MfsjCXkAESUkuXA21kfAMr",
  "key27": "4dekBDi3Ne9rYVB91RpSkV4Pv8GDH9PwkCVt9waR7zKmBrb4udJVBxFiG2hpiCkuTf7tdWrCNda8dYGPDp3JRbTy",
  "key28": "3fNgywdSfg1cr4j41aiZ6xJgPLuaRmDyAQTAzRiT16JyydiBibrYE7QZ6XtX7uEsdh2e32BStNrCwKNk4QUbBtmG",
  "key29": "47362Gur11qahB8vjweUGib21VRvqr9GmRpx7iExFr2frxskDDUtkAN3w2v85BU7CaQYgBtxMbwWqoLf9gQxhhh2",
  "key30": "5FzdFvx6GGNyEbkEkbSZkaKz856gtAuYRDGUhZ5qVwuGUYUPP4AoG1Cj7a3F6GUVcYXwDWg8fdDS1ixcSoDRiLd6",
  "key31": "2qY8C7Xm79rN6AsYUk6cPyGBbbRrbawzn2ppNqm2uNEneiawbGKAvYEmo7LeGkdBK13ugeLBwBBWbFnmechgzA2J",
  "key32": "3oKJpWDDmBPiHtaVD5Wij7oVLN9u7X5PgdiX5YQKewrMvpgsJDWZCgB6b2nkpG41YWaoDyjGgk5Z6uicY5hQmqg8",
  "key33": "5uZBgf3fvDHbdvgbbWY5UHr7Zi4jWGa1dQmfigfAt9eyG6u2UtCU5Pzkurw1C3tKwNKzh4627FquKAEMzrMJauKy",
  "key34": "65py4pao3ext7xEtzG5wbssQrSMVH7M54qXyKEWUaNR4tXoKZto6DSYvf2qPZ6eB2CGGdYGLVjDPWkefLp7SBHzZ",
  "key35": "4pcdCBMKE1Fov5TeNV7Gchru6dsfYwhuSsycnN8rpwJib462DN5b3sCqm6eTLgdWJjCci4FMW6nnLADdgptMP1Va",
  "key36": "4D58zM7PhK12r9uL18qXucUtDA2gX7U3JR4tDazuhujU25uANHsKLirKcNQTDhMaFCkh3K5cXtRxuXbvZDpq3Xi3",
  "key37": "5D6zUbxErsnfAyuVfpSwjR7cDs4PH7ocQSUokGnw3eqg1txhTmGDyBYnsdkaq8nJJbbpDvtbRWELm4ADH35Ww8Xd"
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
