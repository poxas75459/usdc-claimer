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
    "48FS4WkjNJteCaBcCAuRxttbpqRzWaLparZwRxr9LTTdyAE4ME8Dik9XY4RkeTYzrQqjpn2Sz2ZVqzuqG4dptYAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MuU58x8QMp2HrBPFTSBHPDMG7hu8Cdx9LSz9aaSbNwnqtAR5WEbc43KV77uXrW8zaZFhYuf1jNtvooNS5n9Gafk",
  "key1": "cuxY7fxQbkWXzgcEtPLRuFm4A1RsQmig3d6EZF6xupmF8szRGVWFJoqCgnq6FcBU8W6eC7mesNr1P1N2mSkqv5W",
  "key2": "XBp1b8dm9fGMxMAWrSZQKXyDibPEpmS3v3kqwGZ4nCXkk3keSgNp3FWvFMgXmHLriC6QjVairjphSe5VJb1GhoQ",
  "key3": "siaNa6DVktJSALDRoUkMpu97PNGdWz9qn2knmV79FWSaH3hfHJkWxGCn5ks1AbMCbwkTUVyHyLBqKfXDV9VDKPb",
  "key4": "3ichYqewuzGGifEbBcqVaJWtxL4CcNG5hbruRw8PEuRGF3ebW5cWKgbMWJJER35mKNhkDfH2Rf6F9NeU3JJwFCUc",
  "key5": "2vUKEGi2jRxopm5zrMrka1ynNryQNq75B8E7WVTghUumBxqyiocnWyFHMENyMZrQSjgyDV2trGreRZShsxHNQem1",
  "key6": "5DDro8c7mkk5wjAghukL6nPb1r2bKyVxHemVSZ9ruPTBEkoqTMyWPiQZrixDEod7yQ1jPx2K2NfWw642S3cEnT6F",
  "key7": "TjURov1bE54THeMY6WgsKEun35k9NvHE1NoNQHYJk75nWdnCDmLTWS8qiVevBLjbW1xeWF2C6Z6F9AsyRjezyEu",
  "key8": "52ZmSFgmVtZ3cKTNPFL9LgEwWeRLGZbsbhWp1ZbXMr6gzxYF36XGcT6fF3XadniPBi7UQcAoa5arVXsNuiDbkaxG",
  "key9": "4kh9fn7JStCCYHDWkcCAQVn6dhNLdt8sKBodBJE4PZPLfyVsXqoZHk7hD5SkzWBLPRkZWEyyPUDCMmhGVsfzWyox",
  "key10": "4rxcn28exWzDkdAkiTcunjPGVjpcjerJTBv7G292WMK1JDo56u8RBSjtqLt7Z9XSD9wuYDDaEKYzs4ArDByyWGzY",
  "key11": "4Nwdfzy5qg5zURvju2HEJEyZHzRywzrDxTDgMGvx4r1YVkWo5SJqrSa18r1Xq1rGQfrMLpQbmh4zKBZmCxR4ZoMv",
  "key12": "5RqQWMHAsEFbupE4SuEKTASUnp3qZ1Z12WRGLHGC4eTa9Ejv7yF2YBmrJ2qMBG6ijUPi5no1ypaL8JyozhbcYno5",
  "key13": "2qZrzhu8Nb7LwwYf3rc1CVVr4DRPykpDuWqp9T2Wk6YwYTQMq1we2edbs6u6xTfTdL6UvNt5w2DqzGTtQFLwdNg6",
  "key14": "3i7Zrw5w3c8souR2iNTcDWxswGaMPbsDEVoMNg34oPppXMmNALwWFoSeQhcTfxNyR9HBwrNDwwifMvAFdQx6MgHy",
  "key15": "2ygTY6cQVwaGfVpEXXStEHbvQRhg1YQQB7K293bq7uK93MCuhXjrsVUD16xFdKZJdgFmh5v5nEsj4b9FiU5pX19S",
  "key16": "47EdFhEUFHBhsCA8MNvnoCZHqCxtsgkfem1W4QwmYGM2Xmpmn2E9fDZx1PJ2nQwUUaV5Rc4XGTGdQ8ehSMYhBcQV",
  "key17": "2bhv8mJpWkp3rjci4PuAAaA6ybDguXg9RmVmdMRmtkPct9G3hEA7YvxSPyGxL57y7YYxjzryaXvsjbB6NMUDksNy",
  "key18": "5T38R1NqG3cVrxKAXrDgJEErtUuNNsW6eF9BpZyJLXX3N4ucK1uq6Czw1pKpGzz9jBYo1zcP85CN2JEMjX9mSY7B",
  "key19": "5GBysy9sCuFC5EeFWJmSFwvyLpK9JpLBgJaa6LP7K7QaZYqkAuqxe4an9aVXCZNJ2U5n2Xkki3Xp4vEAoHxwg4QR",
  "key20": "2y4XVcnSvSmnXq8fpGRDBHF6eUDH8BN4uCHmgWND9YcB9kzFxUanomR8Bfvgj7NJwmiVm9Ksha3gpsPmqwxoe6Re",
  "key21": "4npUL1g3MSmEjdXQiq5y79APUwmkk67yUJg8R1hd6x7bpQqSEmTtz4UQ6XJM9NGwKdrL6Zd4CdmAz7fSxLwYEnMv",
  "key22": "2qonJu5PfKKsewv7yewAmZVJVaCHSVJQZzEQmytBzB9BwoYKCveTxC1bBFrvGBVfEXaqR2MWNZZQtv6Pf3jcrHgy",
  "key23": "1SgYVLz1yLVUGKxQs1SoUBuNb2Rqeqc7cYA7rSkyEGkysE9R46KroXwhZF8z4HRMyqw3RNBumXFEbQAQpmoFSSg",
  "key24": "5ehdV3p41FLXHVyaNJKrUcz3dRqf7jNThPj331hmJYD1Q9XLwZU5HNGaPx6LeBpSsjPGRsvQMTFitDotp3z7BhjD",
  "key25": "4Q2bPtKTpXik8AviJy1mUXRTsSg2sQ3D5iLBzwb4yMiwM7X5azEfey9JoNo6mQYbe7iefeFhmcEunYYGTcwQduT7",
  "key26": "37SakCvPZUvHfcgSNt16fpC952bMYjeCAmWEPzaT98inPc6FXufUa1tzJzddPW49t32vz7CydJ45m8wwspYftXnU",
  "key27": "3hNBXPoKWYvM5tZbeWcwZbgwCrcCRJWoUJP2fABU589WCGyNAuRTJBnESV2sJsH6VTqDj1QmNvJiGcoMNzW4upgZ",
  "key28": "5cfMrD3UvURUuV21xpZuntLKhswchbVtqrbhD4qxtdRYXh3ECoVrmmZ256cU2V2UxjTwxdeKNzvdvF97wje1D78X",
  "key29": "5BVp94vmkDD1kQjRyHb25W91VJCybQiuaskCsdbGAGxB6DD4WDn7pk1TKDsn4K6K6KGVqK5NTSFwghFG6BpYeg7f",
  "key30": "546rpQKJJXwiEGREwfNN8uH98f7YGMWRkeVn3FZ1pqjLR2GANa5dxbX8uQxeHxZQdmPyf7ybW7Cj25DSsTnKBgda",
  "key31": "4CsnxEyNwBQ6wZcZCBVfKv7gjgnNQJv1NCm1NQVUgBdPZ3hn5jbeUS78Ehj82fM1BdEGdQ79LSfHZ4sRDKS5h34J",
  "key32": "37Rt8iFzeyFrCDQQjjoKUQC8i48dfR2dQ67BK4viCmAvTr3Rupm2LazqhQV32Mc1euC8JNi4yUuQcD3wNhQRJdWX",
  "key33": "352TCqco6R2XaZzRy8LZBfbaQBukYoPaCjYHNE7X4TnLQvYMKVFqiUANqCUiiz2BTBWMUaqQinkUwQ4yhnKaqpWC",
  "key34": "bv8Crx4NsoRTNzLP8eLrJBnpn6ZWzGkBmv3K5ZGLuegCBCTwe7HkwHcfEBLC47ookPk6S99Lyna6PmYJJ3GpggA",
  "key35": "674VuRi8dVaKK7Rm2T1Q1PAGz45xZih2ibMZhSwnBzVY7Z7gHi6fxAki6xMcws1mWo18URba7Nnv8ZbCABfK7GU9",
  "key36": "r6DVMP2QPaf5QR1j6b6a7mZAKj2EzceYgaKj5T2jN3Cw4w2YNqFbEcGZ1ETXrwYUmQNo5uqaDG7Bgi33bmdymKm",
  "key37": "2NfvU1puUoLc6vbFqE5LUavUmnZuDUL1GALxvvWQ17uwPUBjDXx4bvAy6pUWHUevX499jHNdtYHTqVC8SyFUUMCe",
  "key38": "66P9VaLSnKjodPFBFsZra2HW3ScW7JwXMkVfBB7RTodvufMHquAR9WG6jwHChbDMzGVjmBVrjXkXyqfQA4Yt9ybD",
  "key39": "26agNYEhMW6Bam5m2UTKGiKKNqiauG2EbUxc2WBX3xaCfk7r7ZLtAnD3j9d9kZo8ZNzFjax882mfgd35UEnwmtVw",
  "key40": "4Tyx2pnkgNjyfVk5g3N1mug8Djazv69gJgCRvnzjDJRcgfappxgq7GKWXsu2wAa6CaNWUYwhXqUTmBHNnpFk3Sof",
  "key41": "E1Cz7QLtNQcYQTMGJdNNvxcYaxjFrMXQuW1QYg7QFMFzHq5vCbeL5bubiHqK924rje9RNfYLKgK358wfHWjb4tM",
  "key42": "3AastyR2eVn2DhYj1zPwXg9SN4JeZW9p6oRJfntJZm9qN3DefeSA9KKY3WFbWZRwLNV23YmYJaZQbhiJUCyG5nEr",
  "key43": "4SLAzF3mh2UNdhvWepWVHMGCQRFuxj3mvJnLYZbqE6qZyJELXaJUDgXR3rGmCNBxExTtNJj2pQ3DnAvLu1XvsXdU",
  "key44": "3RY9eP5JArhcxHLF5PdoSyPx16xaHaJzTEyKfbdwu9FkJf36LJFsja1eHJ6WCtUpo3VugEHYM5GQnZzQZqjTUTPz",
  "key45": "3JhU1jv3uFVXsdGELk2P9vt631KbWVp79Acwx9Goj2CWuL8NY2JXGJSh86UGaKesrVJWkQbaMoEyeNaFZDEjM1VB"
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
