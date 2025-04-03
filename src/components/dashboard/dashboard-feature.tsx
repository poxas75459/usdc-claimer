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
    "4MnrM4h3xE6TiuTFkxiX98WxgePFMJgxfABjr3tXfUyLsDieXuG9wW1RkYnihi1tG6FScS8o9qai74pGKKzem6hr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KrGjrMS1i6CRYq82X6ZFJVXv6U2wavpTMopjpgSoZJH33NzqeTTmEAaRWnjuSqN5Pxa9aUsSPqq61dhAQ9Q4diY",
  "key1": "5g7xyHvQhpf146D56ufEDSzNgosWMRYgkW6Ndf8cZ71qG7RenPsHBTVYwzDq5CzGhKG2k9C4iUgnJy9Sex9coLhx",
  "key2": "5icy7cjDH56rgxWd5udrDPiFfcmoxbVqp9P19BpPCefLRBMHVbb5YSvTbVzMJfHxEhXxsJFwbjN5HEUNv8JArSLf",
  "key3": "5z2gRmtdUP4RHw1rXXUjbtZZoHReTJhd476NBApt2ZbBiz23hZK9UUW9zJWGALXRuTwwgjiz4b6oyqQ3a1J8ijGM",
  "key4": "2vi4sETSH3kWy7ENSLf97BVj2J5qqc54PF3pZPKppQMjXA8vyfEtLdULBPJ9yVa7rLcEDKmcGBfAC8tW6D2YTNMW",
  "key5": "4PGvNH2CZ4eMGqkCLMHWVRSCsQFy8g82YJHmU2VGKWEtWPbMhXhRceF43iMmpTmgbEpEEJ1PkGcoqjPtGywWPYkG",
  "key6": "4msjVxFSB1cq3Sef4hmy7hPoFuurhSqn5NW1EcLEmjvbKUuQHEzs7ZEUZzysBCYDycHiSfJoiQAudbFxMFpczwvM",
  "key7": "dc62rnUzbD6HUgvHiieaF7bfEtBSArZ4bZuD15yUQmEAQgYPtL89GJ6t2KqzWJfZppgFSFaJK7inoTpYWPv53ih",
  "key8": "38r532Pxr1hr64eyTgtzfwVs5EGRr1yVTqxcyRi2twta3T4EqzMNJME7ZHSQsN63EqM1XL8SAegvsvPredNmejzp",
  "key9": "3fR9P5pTMdFn14ayPBHtJbo1jsCUc8ASAicDeLgSVS6oqMoa98VBtHdPeztGtjNUVLRZT8UNmYXebbN8GjHtxCv8",
  "key10": "4d17kN29hjERioWgxFgAFfNraHCHiAoDZf1H1KQNmpoZ4gmaYwgPoWBbcgH6hQZUD2EAF3pyMgiQ4WFxEXSFPnzj",
  "key11": "3tS1j3paXv1zcRsFjro5ovP7ZYgH3fpCZSm5w9JgnJr6pZt8Ky8rDE4JaVet1PsHuUswZtaMiw8HBR9ueXfr1Mng",
  "key12": "4afjdaZgkAdevwZdVrd3R8X7wNSyRh5CZgtbgc8kQhg1a7ZhHDLUMFkye4UntXwE39A6FwxHuBnF82WbZG7obkCz",
  "key13": "bUT9KQtFboRTLwdM2XW49XHM5v6i51bgNj2tXGigqKh6xZYf5C3XL8HJ8ZeeAVV7e3DWhYXdqHjPCvC26MrAEQU",
  "key14": "5341JXBGa55txrYVwH8MQG3wv4fR14SGDfgne4kF9jikGk5JHYHt8e5Sxx7pnprY271BHtLTnvN1oKG9apNM6s1n",
  "key15": "3uG2ycCVTT8HjRRh2S1Bc4XiZ5GonGFyZs4eoQyfrwujKFf2NSNh3gSKaDf9VzAYDrSKHLNSCu4votF24u9dbqyM",
  "key16": "3CJ8586TwLyRUBCPYn9MaKz65JSLJ2hv9n6jVybfux5eHLBsk6sHh8sBjMM21BBN296WU5jHYKaF5bAMwBRK9vqK",
  "key17": "5rwpF3QB9cVxGVYXShaoiUmwMmMXRo6dAn2pMfDvEME6njfHdgBaXSCC91JU3jzwC7RDxKStQgFFQENRKisKXVpT",
  "key18": "35i61Vd47tbj1SVKWyMKEAaw48YSdonPbMhVgw6yngeciy5Dt9iViCQs84hcLQXUhiExf6hLGDGt8hhmHWBRZWTr",
  "key19": "5s4rP7bWTrWL35aBZtvHkzuAPqgDcJnUYL5X66z6z2TTvNU7VAAVnFBcFPmZX3rn1ftiHsJDgjiPYLB8szu5MnYf",
  "key20": "5tsX6tAGXFeRrufPZS31ytqrBSpgxxKAMW3xgbQ6uoftEa49RzcvhMVbYXuAhQNBwshgYMcD1m5NT3eh46U11wst",
  "key21": "tHuetaYAzfSBY5dnA1nTALCj9LpcBwyxGQy8NsD45nSFc4vuVAFUjUTvxax3X7YEdvpWEkmDdUSNw81vGzyBnoP",
  "key22": "5djG7WLrXQcqaHoxTa26SZErFHJr7Jb7qTUxjaiTeXziwmfwA4HRsE5v9NmczfjDRAMW9CY9t88MyWW3CTW8Bj3r",
  "key23": "pjSs9tw9R3fju4DEvXuovnjkCQ9w5qcnjpWnSEYcvVVJBqMKymLP5FCSmRiMs2uTHYawmMneqBfBYDG4yodSHFX",
  "key24": "2wj6AqvEE7KBH2rWyPL8Dc8DufPdarbVWZYKadbzw9S54bQpGLAdatFWNHcYRFpXp2GKv1aGSgzCmruodpK1PoLG",
  "key25": "5ufPagTYyWz6mXT4MvVsMA9QnSdNUpA29TppDvUMd7Svf1rA7T2mSUt5jHWTqHjeAmLREC6UbR8EQwo2qJUcfTUw",
  "key26": "2ytLKEMff75gVXEMGgWU85b8HnknFcm6dexBUwzs8MK6Z6xycjRxptTPT7Hbd3Yh4YGc6gcPDUgvxXGynWAr92yi",
  "key27": "2N7Y5umJNmuZm7S7ikqzH288urDrZmQuABWdd9WA9VjWHeddu4L2Xk738GpXbeGH1m2vfqWCuHf11hJW3jfy6TdY"
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
