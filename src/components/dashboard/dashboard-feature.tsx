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
    "2LLnhGW57qkFbNfRhfMbHiJF2EjsebtovA3YtX6ZVsLGq8ZBbLhkhhKmCTaDMSJ5toJzzUwH6Y9z3Q4DtVrGJZie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vqJEYUDwZ5HLEFqodykboqLTnE3YCMoqnyF7VXpcmkmNto6RgRh2qbXw1Ee4Mtcn2RTZHmSSwLZbHZ6rXPGy1rd",
  "key1": "5pHVRcQ5cX8nT1p1r9wksiNbqqbBpj8k9k3rZpmVNPYJ7uowhxfLzjDKee9A5WjXqcGR9vZeLYAy9B9j3KYeBNaz",
  "key2": "59LuoYqxHkD3GVPMDcoEfaSNTduNRtTPtYYLZYxsd8phZreNaT2Dj8HNWi6uu5q6pnLHc9srnmCsuXN7WDjmSJJ1",
  "key3": "3KaZj2VipXdGLPdgFqW9qo86KPYWkJkJfgFXPTqRrVeA6EmRt4mYdarjsDHpQgSxsfwBEXTfyfyhUsmnXE32RZxD",
  "key4": "6AGcU2N2njgiaWRKf2qvRpo6WSnqGNgMwcH3j4jNEijN4TgQDkXUrVTfM9Bd9JCJxNLmiX8UWhJcQf2g1DHEWNx",
  "key5": "Uk4AnRb8jY4Wm3FtArPTPXx2v2he2i1QouP2WTZcpeP3jyPu2ckvbNuLviP9f8pu8XhhM1KngcbsAzvpFiktrB4",
  "key6": "nwEXAek5kmhH358m3vP29DWk3keRbKuDVLJDnwPVuP7Y7JXADZisQMdCUxd8xgo1nRdUJMVcHrg9Bgm3HnZQE7J",
  "key7": "2cjKDBVxrkEHkaZaVMy6uYAHa15DZ6XidJp28R2Crp2aJF1GBqEeaNxEbxp8iJxki57iZZTuznPE7BvptaDDZu5R",
  "key8": "4zWYrZvs42P5hXjSUTST4mW8zbgrjzEYjNsxGAkRenDfRckknn5PG9XTonJP2PzXSTecXCDn7vQWRx8GZF6Ys8uF",
  "key9": "3WSwYkZYR8LMqCSTwbcRE1EszbbSw4NazPWgohnNf2mSXyjoVZMEZjva9qSx9iaysLxquYgNXdXYHRgGB58a8SHX",
  "key10": "7kHAqYw9VcuL342TiJ8yYvLBGP6FBSSWdbn9oZ6e78QdkwJ5jvRS2nwHJYsnazFZsPzRKY1j3G7rEsg6zZ1664A",
  "key11": "25JhsLxHUgGAM8aJa3wbdVTNuwjU8YZaf5RtNJfv4tbqLQyyhXUF7yEsX5XfALFs4DM4VQ5TFiJtDTBMmamHD8qJ",
  "key12": "2CiR1QEuerMkEghsoWZVJnMwMFj4AHpz9QGAYP5gXFWihAbvXuTScZNaQt7SkH4Wcjo1kFpUinnnyY2Awt4FMmXU",
  "key13": "nKCVXVrX6LDB8SCJGTxt4TydmktGfSMmUBFqkrjJSiyZnJyJRScij99gAjK2wo6qHdUpjRHXhUnY4aFegFh5Wf9",
  "key14": "4PTSs5D9ebnACyC6EFPu1wHtL4mXQes2L323CKq3vgGFcSm6bR7Ax8UZDLujSxAeCxruZrvCL4hNsA784hfjN7k3",
  "key15": "3BFCErFMUiSLyBPdXsufru3TfFNeeUxLmqCXUP2PW7JCe6WcAogpue5xTyJaU4H25jcettcchuvy5NYYsSTLjdYp",
  "key16": "2HRQmmh7Ks67u5qgvM9SgaJFbp3KaexNAxub3edmNhwY12qDdL9Y2y4nxnj4eb1MWmgKfCT68EG2qqJ1aHZ3QaoV",
  "key17": "9eNye5PiUQgV6UuxqTkQyUjJ5K7HZkQ4N3e9jN1RcKZQ2uHeXqT8NMvqPdSW4NHfCtwhF3GqhXBpn5ZhjfC7fRj",
  "key18": "2VoNdFV5X9rLBkigdscDm5L8KbQdP1B4H8qpLZ6FjQunenNAzg61U51PfhvXW9kUUsWQFA2KakfNqgFCiDueaMGX",
  "key19": "UY9unmxaHzC8wVUJEZTwArT2HdYZx7P3EFeMi3enbjesneUUNDqPKKyj9YBrXJDcGZEYBL7NB2mzmoha3WCFuB8",
  "key20": "8ZV35dsL8Zyea6Rr57NixXeVCs5eke1x57TDaM6Da2bfuMD9g5rx5DhN7nzag4A9diN5jbwHY4dYjNjy6yPD4dj",
  "key21": "4jWwJnfNvQWQsGNKd9qucByor75FuARCueoRo6aTYeLdfjeD9j1zJRL6b8g9Crh35S5WBufaCx19aLVJgjmAfrRi",
  "key22": "vtudPqy12T55hTvbt6jZpygkKr83XiqPHwJQj6h99pxSnrgpfTVqQrznt5HUgP9V5jbuqibWeeqvCHrjwfaRYH6",
  "key23": "4bLwy2NZsDssFYTEE99FueCJHnsBAE6JGoNeK2S4C66b1nGbRyw9VYs2xrtwqvJaK2JxFgbU1fRTm8RcAb81o38L",
  "key24": "3VvchEydUgPh8yhiGgfcZhWKS6tWFzXLoyKeeZWVmQMKMdNNDzvsWsU62jDmd6YzHYxmdqawPCuDjDt5m1GL9RqQ",
  "key25": "5jK7oq2VmpX2LNY8nHMzgZCJJckdhvVmM12yz2EM9GtkPuaYKcKwjVxTmaoqcA5NBtsHdTohAA4fGizDnxewMxZt",
  "key26": "5T5Y22pSWo5KbV6vRqS3JCZ6wWaNrF8WPmfjpugZewww2Efu8kVBy2cLY58Fr82Jnh2ZYJQ7NvFqPFNVRGmuAPkG",
  "key27": "23ufLswJGFSzUEE9Pe6M2FnE2U1KpKSkeWcLthXZwdX8R1cpnzgUcRcxRDxTKzaArcDXoPtSS2tkuU6vmRUrA4Ps",
  "key28": "5cURDdeLQ1AyFNx2fiAqTwtk9wEV8pfqkn7uynaEwM9r63vH7b59Sfgtc54SyNPYHcUw1UCz9dq3Y6oxb6Eo9nr1",
  "key29": "5zbqZek5ACvep367mDLs8HfDpwCqFLhouPUYzYpZFTJJiHMWSXR2dJpKeJYNqMgrrfWc3xfuqaaHJ7tNf8w4GydG",
  "key30": "64EzyuFpGNQwt5au3NtcNU97EhkGGhYohyjdegnLNfLAuDyG7cFuVJbGRsYv9gwD7VmFcjmybkJx7j2UckVdmp4j",
  "key31": "37KRM3a2EUwXyJddwjuTfEDmArLu2AVyFRgVuaBKVFxtpCrwGuoTruUWTJq982NBw5UbcMPKv4gYcN364VBkrv89",
  "key32": "2VTUyRuXHtZkQ9dr9SCb7mEEzA6XLRZZJTK4Tjbr135abnqHZa8own6ycSeuDnEvLmhmXhoP4nHEPZg7GtQTWsbx",
  "key33": "4WKUZHW6uGhaorpxY2bRJ31pGSiVgnQfZ2XY2k2hDaHX6SpPyUSUvLP4TMQY87vnRNVg5ym5FtKcD6FnWXhyCJhx",
  "key34": "3nf1UivwUJn9x6oLukyhhPN3s6s9WESNJEJvfxLZFUVF76iZvkn7f17YqmVWTxZg5cuza9iqViCyYcA1uYVMcu5s",
  "key35": "q3TPjT6f23Qw9zDk9t7krbemWRc7viEE3UYjm7F1GJtWifTrQ7966eJCKfQitXM7ZjR3nbbPaKNcWuRyhadSGWq",
  "key36": "3iNWAcPdgijvQtJcNnAArof1T5NXWcGDS3WZADgyVre5pW5XgErFNTShxysXVbsCAK4DyttsAZEA9krVRLbwx5uv",
  "key37": "2XKRNAm3xidgHFXJmxaY2v39KySfjpWDUc3txGsT5E6EovcixhnNScxnMi6uDGvQEWHYMDRakC2sVpeMZNRvoC77",
  "key38": "2ZwGvKrJEaUsrRQVRwUwKYzCdg1c52UHZah6m1hd77UQ6rdxFBrWJq3rgGAGDYpN4gXUDi8ugfGi1mbxP9bqtvSb",
  "key39": "2F6s7CKksC1RXqJbDcuzKs27BxXzTxgvrKqDMoZj3MAHhHG88Cn81hwY5D6Socurh4THLVfmDMEhktJxpKBrbcKw"
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
