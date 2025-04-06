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
    "2gk17R3G5KM78w4qEnbqo7daZXJfsbDV37ygYLNBhCcFo6SA4kBQK7BhEPfNJqBcZfyCYjkx8hHxw9S2KpeP1XX1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mqpXRPpXNezDcv1y3npT4H1Hit7Q4qTNNAxgULqGwo7u1Hp7mAzdJyhBhWEgyW9VonnAb97kePzk9eHqWvwgL5c",
  "key1": "4yhsemvKsxrBVtRDgGgD2GQhS4oKgPqbqpTJrwh1JaUNfyreM7Hk5FpuMg5dRhyDjYYVmHbgd7JAU9XUYZGNKiyH",
  "key2": "581UXs8oSoWZV2XSJvhWSZrd3worSvwvVf4BkQe83RWgdxSre5NkZNRbC3FVX62rpa2MbxFBDU5M4Bromh4kKNNq",
  "key3": "63RLhUrMzxXfdkDzQQ48RDGKkaRqHoH6hycAXMpBAsfWEhQU6J7DRzqgGfucsDimdVnMqQjjxUmwsVAyqtxqL1Di",
  "key4": "55XKuVfSV1Hcqv8LKwbqbiBN4egUQfeUycNaEjokcBNJWD84NNQ5Za9dZLnj4MTnh1xWusFT4cqK65zg7uQ1Nv4U",
  "key5": "3mfaQMu8mG9PyDbGfokZHSFPjSpdYcBGBGnWevaAQmCJexK6qYW6LoZt4rzxtYAYSrZnf1gF3EtCxyBeq8SBiCgL",
  "key6": "2yxEUwkCXoBQnj6yJAbVtQBsdPcJqWAwikKvo2eLtnSUD4C3AbDngh2MdsPB8FDNrhr5sQzakXvHLbR4JdkdegGC",
  "key7": "2pUsnEt1a5VmEqV54zMcykMB9hwxEuj5yxYew8r9VRuEEisSzC5FuuFTMq75XcMDWFzYs7xV4zP6bbP7JgFgAQtP",
  "key8": "4tqWzJu4VSjxVBR3uDZW74vWvocVbAg5gLbk1QYF1HkZTCkrQeQfKXyfw42NZTXpJ41GWBbucBJY6d9SLf6Chx9Z",
  "key9": "18BcUAYYjK2cUXfnhjznY7rnBU3VG2qMNdWVHXLVgBK8UM4dDKykVTeVWX2N1gzpaokBFf6evKodY55puWQehgm",
  "key10": "5h8Rk1diciQ2recDCtqfZnQSkwUWJSrJ2PRkX4TZ9rDgcmqpLjbHW19NrqyhjXKwdMP1TskVvqT6ijKENrUAsivS",
  "key11": "5oEWyMKj81TyhzyovtVZBLQuYHok1XX4e3jPz87mBgXyQYNxaJbUsytQ5Po4o3ruQ7ojKKv63keBQHJU6atZf8Zk",
  "key12": "3BfDizuWMStbFZ6LR5jrCuAfSHY3sRtb69WvvXvGtjaznFeTttWAZZV3h9o7PaP9spi5ecgMR5HxfmBJRf6Sv6Co",
  "key13": "4BAWbprPPEkSYpE5QXoypJYi7JD8vhzuaEG3WbFAKGsQLm3o7gbSr7TbrpRC7EE3Q1j8xNhzBBXiFsrUS6Y3w6Mv",
  "key14": "4d1U4WUSXwwRoRpnkAGTSmuUXcLQoX6rZvgi6M2w1c7g7mHYQBbJALA8JJtjtLSnviwW9sE2baA4LD8N5Dv94oHQ",
  "key15": "5r6ZNLzeaSoL5Syn68jcN89VuFvF7hmDk5r2wV4zKaJEEJm8UMqsmfxNzBPL342rWbn7b3RGunesM3wF6KoBC7Vq",
  "key16": "3uPc254eQNcEGE2ZCMw3vLvmRQt3o7e5uSxr1LA6rRVzem6X2mFZHsUotTF2dwEYKjQUv4H6E5fMTWHZQiHBdj6q",
  "key17": "3xWhmo11tYsM9kjYaCc881FpncBTePWExGdHDcc3mSbPbZ4hUg9vD66xKB3EtWwhZGKAhZUbdJpaCvVbh3TKN97A",
  "key18": "5HuSmryzg3qtUxV93MZoSspDhVxztHf4iDTXr1M3KkbuFC4rHcFX49zKqB9yqvLynCDYiLDFYupDipSbyU6Lyste",
  "key19": "XbHwTXT5wj9uP9drwvPoUkT5M14MaoFCT2qHmVi5yK9HnFqHxmVDE7J1rqpttqbtedh3hkqxxYTjCgTqgCPa3iH",
  "key20": "2rdmten4hwkdpEpRzusbQveP7mejkShTG7hyqCzwr4xdSysPiFFb8d62vVGT8hYejcy87a4EV2UP2LTETXfhAF61",
  "key21": "2oFKGEe6CvxzwKw71xKjH6cYVGR7JSoUwXPa9N3EaqZhMrLy9sHnK1XkTjWZ8zSvssQMvjdtT5axG8L3MpopQVqs",
  "key22": "3thsMsVjFNrYJRTVQBCvCu9ENBycLiBjFLtUCqqQhFpPMeFVETQj4VuvioRUE8ocSNwbCxfojF7rzEoyTXxeRSPz",
  "key23": "4E8esGoo9jvTJQrxpTMErf2CXiyAcGuXXrHXHKhWZB56q4Nc6kiuv4w2ae8CbqLJ98626pNWDA2gN4GBmy1JpZTS",
  "key24": "5v87uNeetkpgYi5M1An7UAkoLpNYe2jYRxP2hiSGpK6mewicCk1Uqx7YEtWWixwTZEL9zdY87oiqGZSeiLMcXhT7",
  "key25": "5zz2Eiww3kpp2SqUBVaujphQvi9XBdxiF7Sgu9ZN2WK1oiofmFQzFbp24hGFHmyFgq3FHSmeEBjxEpFzgr4bfgEf",
  "key26": "5hig8Jxm1wtYJfvBcP7ztox6EGtTjRG5eh7G6KzGXstN4qFjkmB1NbhNXzAEbh6eukh6iXLhsATW6GaVdaw8P2YS",
  "key27": "29UqpPjxG8LbvioU11NHnaDJq2YEEHynYuEY2xhmCcbC7hu3sTpc2AQmKqobakMiTWGTZav23UvpwQPmRbWnnp2a",
  "key28": "4Nw9dVzR5ykvWMoLa9e7XVEabA7JWDWwYd5GBbym3rsQzBBTbzEeZ2ocTDUthLXMSpDGWnso3nzjavXfnf7QLSQM",
  "key29": "4oSe1amTTEPmhrpbDq6C9EFYCDS4LNx4gtxGJvZfvBJZ4yQYRQxd8Um1aC3rPB7sVn7WLr7HxS44TAWjucH3mEDd",
  "key30": "4pMxePxpcJXCkV1H6bxozRGFprsPbmSUJydh1FdCmnmMwVzUVug8zC2owp7trUbnpeo93BWc5Vga3CbFn2Sa2brp",
  "key31": "3kjBTJMKkQZWYHomAzYaERN7ZDY7exeZHu3g86tA799H5Zop7cUNw6vCoZLJxkqtu71z4dYHoTwpyZztTnUYwdZy"
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
