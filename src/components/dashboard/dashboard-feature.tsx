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
    "cuEfwWVnoqzoYFJ3zie2b9XK9hBSAHKqUtSCqx1CNZmWb1uZMKPcYp4F7GXoJSLy7NnWrMcHRcmnBmKtZomR5Gv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GgyLH2xcd2V3YYsYq8EWMCjVKHikQNGuagcygpCgFakH8MzzpGp8t1sQdgoE7DpnfFjQRoDx4rbKSd7r9d9DZf5",
  "key1": "EJ2B3kBRdXb6qc6gGpzYEVswmcx6TWC8TQJAMyP4iUhLLoE7Qr5bB3fYy2mh79VPWHGFXp4eHK3cuwSaZakt4jk",
  "key2": "5jD1AFsBSPyxSAUN63Bzd4scRgA3P22RZs1T23hATerffx4eWn7Jw5cDzo99aBgD6FYC6tVDDeuNfoAVDyta9ucV",
  "key3": "gDfdGD3P1DUWJK3fz6tXLSB5nizcaMp2EeUD4brNasbhtfWHKqcuLnf6WU6FcZgg23rspa6RKqZxLdYLPWdGZc6",
  "key4": "VVAWJnM81yxpSqo1VjBuoKtUxcT6vnT5qQoiHi1ppQgnjM5KX9Tyucg2hePA9sNPjzdnqkC733i9FnJZ1RZVQ1o",
  "key5": "5vrW6ASi8JgzeSYWtKHdZhMJqjAot9Qx9vvLzKyHik6Ap46pPq7BApPTDNZNaW3jJ9EuqyPLBv2WSJLJ5er9fQQy",
  "key6": "2N6f7ASz2o96ci5JioJWfsH89VTdvQ4AafKQ32RbbrCQCTwErTaXhXKavHM3FERMLzCsBStUuD54YX8QEJjtmEeB",
  "key7": "2ugXJKrfyzBYN6iFbhhSz9HLTSuWyawqDBLAK4nRDYZcUEJQsxgBPBEVDVsAS7GMzX1YPh9doZG6TQN8q3CCQM89",
  "key8": "46uXHjo2hxNi63pb5oDyYfzVmPs4mgnVv7WW4PSuvJTf4rrGHMVMD6qTjoxsYnC4D7JJBRGrEeezRXqH6JjAmBnD",
  "key9": "33cJdp8okxStatfMY4F6ks5ayRyDNKJvYe5MxzoRurUHdAVRLR1zLgjmEDtpT6Bzay8P17SatZBfeWKoGAMvuZZY",
  "key10": "4BDCaYxmkKzYwAsuzVFApJSixEhpdZiDSEfcpYSruWHXf6cjVA13syGJ9B77hHHstfhJhJvw5BGGGZct7Zu9UBvP",
  "key11": "RJts2m6u3dvdH13ocRxtHqMnBtVr9XuNHfmDgNkdjc2Bu15hGgBnH1PtXFCWTzALSHzjCVVN2uR9TuVbYyMEhKZ",
  "key12": "6335odEjtaP51MMGVdH7L1tVdcbREr2hCxa8ygmGeCMaayw2FCAeNDMHET3jtUeqEm3b8sdrAYRDzN3mQbKriWEU",
  "key13": "81Bd5gQ9SFo1cRDRXWHzGFDPaVvQuPjDmbazbLhF5YiTTzvrVY5DU2zkg2JSf9W3pL9JL3zSuhpcVbCFRmnRhm6",
  "key14": "amw8gcsFQxppnYTesMSY6ncabi8oXXXY5iQAtMcfhiwLVGQAFyTExhhEH28oxAFs8vWxYofJ7wdL2JQiwLYv28W",
  "key15": "4Vi7SrQrKps13JwgCHpvGocXTC8UMcK4qrfeah4JVtzMa29V7utJyVtBUaHPAVLdk2Q4KmSQiN4KYAJGmbSpe61Y",
  "key16": "5NwVMwLvuaPVjtRQ4ismna9eyHpRtEzCSXNreu39CMbtufsm2krqW13QKCZn5gNjghyRBCK3Xtm7UpFihhwShiFC",
  "key17": "5jSfedTeAUXQV5gf6JPMcLdz4WZ6HBR7wqPhbEkm6E6gerwgdEQqWkm4rbteTASoM1wNyxdcT4JskTBHYFg6FDwn",
  "key18": "3eRNvj5VMVkuoDEAaEhxHCFK8rXnXXFZmE2UXzPeqDL9jBY8Jj11XZk5iC8hLSCsnXNVdg8GJQQQ7MCYnzMq6SK",
  "key19": "4JHaDJFpzxjyxQb5dquHk1zDXvHMtaMVERkfWDFPZ2oBNoJuhU2x7VeZeWtmvEHG6B6pa6Wh9UjqzmEws3CZzPzF",
  "key20": "E6CJJXDMQYXrPVyJdfrxgP6iZXqXerrNxnRmyTMPU9G5Stxz79YVABf5Kzzxo6FftEkznVHyn5XwJrcYbJ3pjV4",
  "key21": "5eAYQXumjVSBdXkEdGoWhQDV1Bt4FvdW8xErVguad89hqCSaoBqPV76thUBF4bqn6KqCbc6YRsWH7gvjyUXstf3y",
  "key22": "2yLHHw9tEmBNfALsyagPjvy5xqsuhdmseYNKRTZ2YbZPWa69eqMM5CsD2xsiGfZSVUx4aYQWsVEsfg7XmEdQUKCE",
  "key23": "5Qxk4qaExu4oG7ZtSfHZUCfKvzSaWxWdBNiK59nmPgdV7nt9mBCUowox2YTcEMavUDHbKTWhJ61fPHQwTqpM9u8W",
  "key24": "2jdw9VAbxyvGdVXY7Ue5Bvrcg2FbSywFxCAJ5DScA6s4JDGPDk4WJHfTQVMeQwJ5NRqLUGjxPy4RBwYjPh4epDv1",
  "key25": "4VZ6abUKcTD7T17d45VsHP45WtKKqrqRD74NSp2TT4nesNyAAyZzEruXC497HSEg5V2vtJkCSwZwYXcgd7s2rcKj",
  "key26": "hKuutv6wjXS2ZjbLSTKFBoeqFb7mYTUFosCkXwD56S191BrSP3AeoTwwhBR2tYWUJZTZSbK6DYBDzjCfeNNpdud",
  "key27": "3VWjFB4xgvRyNZnEJSJm226SauBswdZYCpKnxyqtRanfMzBPFK352bQXDW8hvmnXehWdAatJ1kfRnpPYbHAXxVWJ",
  "key28": "5jr4Tv8822CogSpYxYMhtvLxoPXigteirKnNgktUgvQ7C6RDbC7dXfno2AfHFTozMQPFkMghTnUHwP3qZBNwyb3P",
  "key29": "5B9d21HhDUCwRLSVjmDGkM4iKAzVLYFAW8EcxgWySUvvP9cddgAUkSE3nkKXTY8fM7JrNXMeLk57FdCzUCRFnLc",
  "key30": "4n9S7r511H2YqxAc6nZJAH8WhPLyiHyqrDGq2V3SWb2bUYHtma18YuSmBc3BftNnJbS8uqY1j42uDcdkVwBhbjVt",
  "key31": "4mTwDHL62fLSCE6UeeamSjHa8TZh7ySN4jyeLXRmjRkTgkiP3zbtmGMiFXSaUQbkpaqWkWYJF1aGWmywA4uTW6ng",
  "key32": "45HG3qKew1Lm9WGBJjbGW6zzzg941Kc5GtJmL2TteCSmTpo193u7YDz25yN9R5FERayHGBJEmXRPGaXmkMy9LuAs",
  "key33": "5GBzW5kihWafp4voxCKyDmaYZb6gU6i9YZdQLjuQpWCZrU5knBr9yeKTSUu7BRayMuJ8UffuBoXHXbZpf6YBkoWP",
  "key34": "2Z6wnbTd4prKLQ3f7vS42WYTQBw5ZA756ryJyQuQtXnFvqWMzQc5ArJQLgt5jjGmStgtNgiJpjH4HRbM42YLXfSP",
  "key35": "de6i3ADcc7s3nm691mo9afeyDEyUFLZ1zMTAG2fxEFe4yrwBuZnHcUCdbkcxwgf9p31TAurDW9ZM638vGZNsPrK",
  "key36": "2crgJ274wyZLgjGgGj4FpVP1TgrkwfmEgyusLpKSJe65BTEwmPPUBwaGrrVK26BPTNhYK7WXa6ugkaDcBqwcuL55",
  "key37": "3MFjyFPmCrA1G4QQa68LMrbG8BWft2txbYPTwBZN2Dx9EYyqDmAqCcQ6wGhvrGtRzNypDuGknnZRE1vehaxZs3xA",
  "key38": "p6nLVXbqH5r98VotuRr1gM4cKksuMz8NSxiNuzdKfg1xUKYtta32B8nskYYVkprvKb2qVBiYjVEyFp8PVQyurYx",
  "key39": "62dJzgEgnCJXi7jAFgoXCcAbgYuhCr93kY8u2huEQ58UusxjBLzKKuMnpwTZm72zC51ScCz1ECynJ6G57rMTTuRm",
  "key40": "3spgz6T8MMBK4325H3dn2DpCsmMCXsSTsXjaFzpPojCoGRBuW6qrqDVCh52C6pt2dpHXe2JH1STwT4gJBa2aAcfo",
  "key41": "5kfcWcTiMKYBTU7FEhK1RbZ8vjmSznz11GTvTq64uBRya1nxZzJJAbFUJtCQfUnz1zK9PLZCSkTKDXUQkfq9iimV",
  "key42": "3YUjdZygwXubv9qTiPLmSH4vvhSaDxvv6XprfefUBYMVYKn8jcDsG7MwugTrKEgvK92F6k9YhtXAGDZWw3vNefKA",
  "key43": "5yNEj2mqYWJZVAw1kExctE2tD69ZZZ6Gn7kJzjwCpZGJFWPGXufmT87YVSyVZskn3JnrBi2a9qP18L789fchZeTF",
  "key44": "3qoPFpumy3bBBQEZi3kFgiCKs69eADRurbUHLXuynMuaRZJTgB17yYsaeywiZ7MqzLqEoxkszdFaykN1tYhx9XRT",
  "key45": "BuwHJwyiqGeo76Nf5r9iFLvXXHFsFBx2RCD7puukz4MUEYKz6w6KrPPQDy33kHQUUfLPBcjSsrbivwDN8wK4VGh",
  "key46": "2HH8z9nHXtFvyooCoZqdJZ3EWWsEDTXyM4YC8ET1Ti5qaKuw2TCUc4vhmShGtByw66yfjjZ3B2tZ6y2HhiMFk6Zt",
  "key47": "47W6KsBuptsXbHoUTfbDXR3oUCJ3nzpRzPjkSR5V92uhcmvjHdGHkPZXCpeXT8kDGgDHCZyAFYQGNjfqdbHK4GcC",
  "key48": "3ivmz16hyFT1bDsVmTbBTGL7QKomQuMpZkZRy8GD8pnQFAzznxRvfdR1cqRU1Sz2F2oJWR9yM6HHkc3KF5uHGHtA"
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
