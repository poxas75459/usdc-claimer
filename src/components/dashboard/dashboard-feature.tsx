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
    "4Uv3K7z2XcCNaTNUrwegGhbnCgfvvMPvVrQFgidb4Pa8Uf4niwjWCqwM1PcUUyncPrjz2KeyAhFkVUyKDtAtXvDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cu5RsYFjWSrH347c45Jbmhv7g9RVHkXyDfbL2f1PirG2MLnKh3GzJ1HU8mWf7auAmkGyj1XsJaLhYDvzA6AD5nX",
  "key1": "4J2UEKatNgxBrzFTEikPCqzYhXztP47B5WXNzCEfTjzohhKV5zADZgtEs8m8dp3TzA2F63UcUNC1WrjAzezPLGno",
  "key2": "2Disgvh7wszdHFK5b4d1H7s2BPF6t6H28gdRAm6w6xtynh7NhVfT99B8FdESvG5SNYNVTkY115Y35udhxCrY9kwj",
  "key3": "3vukZ4dxf4Emzj5eYD4durUD5kZCydN39ZwVWQXzfkKmiyxrMFqvkkRzPAybmGDf4GxwgbJYv3C5g5eYuUmyphQ9",
  "key4": "NyBfBBsjg7XccKMo963TiNqS4Sjk3W2UHJrNj5dDubmpB45QLDHTBsCikJgcvLZFcEtUSLiQpzkLqvyU6LPHYca",
  "key5": "YUz1SZrZ1R8cVaAUaxFJxaB7PFa67o9L2KWfifao3c3bhP6ok2MCWr3MKybMHfYbMSW4X6EWVrYCWBmnEjKuvKY",
  "key6": "4x1reA2cdPQpPqJychfbaJq2QiqTFCo8QZ6dYK8buRbFgNjo32pG75ueqjrdJa1U6yvhzS5ocrSWQwgAB13n8Q1P",
  "key7": "4ebm69xx59NaejYEQBCe6bhqk1NgiZi3BoH88vxjfDxjLABmVhcGM4YbJAfvfwnQAPxNfFtdAsSbcG9G6zx5kFW8",
  "key8": "39KykwMbzHE91uoK3Bx51kbHzYPCXroNtqhieetVvtNQQZFNfVQQa3DYkh7ocYA6CfnT5sWLnkezAe8uEuezG7SB",
  "key9": "66GG8ypPCJSzuT5z6ks7jrz1eWN6fFPh3Ua6KjXGfcSjg2YuaWJFVz6Z2iAgnYDLifvKf8tbXGuJYcpcrxv8tTkL",
  "key10": "2qrWKJ9ELndiQWgTLfEVwHJixqSxezBSHX6BjWPEFVfKRfs3mmGSqMNJXN3RBnDkf8onZ8jR1NKEHNK9BeRZKdpX",
  "key11": "3PHTc3wkHBJrT9N2rmoUkNxASsREw4iWR56M7AkhybPWYEZqiUKnV5JSkKiv7hoYa1cAUa3ZLCEiSKowMPgiTFbD",
  "key12": "2SCoPdMxny2h4m7Ve6jBoQmCXUjUE32dgagCpiaAgmtm3Rs517gN1EJskHwLDdVhpkSkwatnwHpB7ZjYdDP7y1er",
  "key13": "5TVJEgNEXKEQ9Lw8hP4cF83gdQzjPBVjWQXNVHQFX7MNGFkfTVqGaeBTtFu7P3S7AnVxgM4ETFwwGTZJKuTrU6rs",
  "key14": "4sv3UUwxY39zkbM6qKZswd5ktv76jMFDManAuyB15KaPcE2ehM9JDPNhAK78tnGNtR648w2ktYkRYEaQTnu8KZvE",
  "key15": "5nQbUv5YQUu9j3jwyoCJPsnAKZmR3UfBZuzxCRA9fS5vZbK6TDEnKXNg9qEVDSB1J7vvRZ9mA5hLuwx7LUBRG6ET",
  "key16": "2VtJ8VAsoRMnxtK5EwUdauAWfckM63jZTVCbFVSp5uaaxMGJe5QPDGCUgKKRLTc51K1ouTPepxRq86Y6SVzhzmAL",
  "key17": "KYT9gsRJyvRoCJ54XoC9Xb7HmUJ5UDfqvnrULP4n6Q2yXj7rrGS5u6ufshSonFQPpFBqqo5BFMHmnD9KRCkKj6f",
  "key18": "66DyBFGsxeGG8Msknz2WW1GdgLhp91uQm88xDsX2ZAEt2YeZBiRMABpVK3SUHS9AVcq4a4QVozCYh74eSAYJiW9i",
  "key19": "5XTHLmb6zusvYeiQSwELhLEErbQQHJJUqPwfSKHCsU9CN43wdJbASgW8B6J6HFvD8omzvhB5hvpyoNAjEa8LnR6V",
  "key20": "3KfqhrhtK3pSMPR1YDbTr9avshKrJdTq7gVrWzH19oiqLCpWrZNyC5sDizCMu4W7kP7f44MCBHdAXNp55k8PRFwQ",
  "key21": "3D6biHkZcYySE6NerwoEBPQkhLkmZTofWr24LbTss8VVrLRQ2J2QjdSGWHwRHUNx4ghAnkExdgCpsSKBUeoPhDkg",
  "key22": "yvExsoGkex116nhA1M1jWCoSLphh5JyENRk8D7ttY5EJQzowRo3jaWUA5CiLeM7ENRmDfihYughgWDvkqWTHkb9",
  "key23": "5gBqe4RWRsQwrGzfN4tc1yt4GyDwALqbkkLdxuG3WVruhDp6FP3tGEMGnQT5pTmxDGt9pBV8cmoraCwp2hvEjLvj",
  "key24": "4MHdMx5vdtwB1DVZiSnsHJnCi4H9BMZSBay9CoVSuys9VVvpLBbLccGZiPs77fXUi4mxSZw9vykEKhKwoq8ap11f",
  "key25": "8wARNX6P3dGUcUcLegksotxJ7uRE6v17UcricknsJkfD24hom68iYZNoEMJay1XuDq355Whwq9A64mVx2rPzTqN",
  "key26": "4oyXUNBE48mNvPmXoNjXa1hrHckDBksKUQSMhkKnXN9uHXabGtW9bDwTmw8wBPrJUgcbypUmPAKxETFAD4s4tDew",
  "key27": "GgrUuQm8P5em1GGNxddbJ1WceW9JbkYPhDNLZcv619EqqPPHAwMfZhPTzirbN8ibsAH4HgipMYqqzSiP6wuyLY8",
  "key28": "4JPTNxLQ4UoKegs7kNuUbC9Ly3YWdna21KhsyRGHDwRgdvS3KBBi2ZdiRCceV6G5iJbpHFR6cXKtYoMY66eca7LU",
  "key29": "2FQ2qDme1CaGcPoapy72XUnUHdvjXkxFcQ4MwqCP1aeAYCwG4fFbbW4aghZsi35oCuc1e6y9La5Ltg2aZ3bBMMLt",
  "key30": "bi9PSfV66GoPRCZYsgfmcWUCBXwq7CS42E3C97jWNPjBFsnBBiKz4cjqUtBC1aRuwP89GgKcKcDZdc9F6GMDp57",
  "key31": "2TZsoSXB7qgf1GSRGB4RuHHNsx5WgnjVQ8nh8przXVGszRtx6hmPKA9HPCjV4SE1BBxjQetyFwGagrSGxTuz3HGZ",
  "key32": "5dZuS8x5Jrcz182CCjKEBXWC1zQEtcPP9WrMJ6A1DXAc7d3bbAWanG7KHidmsisEoxWARbgjYtCohwFerSVbmh9F",
  "key33": "2RNDA2WsTVMAHUHNUu8YZat3dHPDGYJUzoLJucSPxo9oEBKasYdG5jQyibrw51UTmzsWc9ummA5nLmFLFVCV2dN7",
  "key34": "3MDA4fxLAnVnHeZvasx5mgRDUfWe8WPk8wPnDG6QqPmpotVugrnnLkYn2ZuWe7wtbRNRqCqJn2jns2w2xN1miUH9"
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
