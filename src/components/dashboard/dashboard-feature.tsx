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
    "5oEUGB8APE2k35x3bxMxqbYCSjxJ6A3b5J9XLq7Nf4N9BDvdsRL9yQgsc4G3MFR7jDnZXbizNSn4QH1LCWfHgan4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jtuoQ7RYiwzBjkrsjdTnUMp78mTC8fJLi4fN9HTk9ibPnDT7za4L1ri8asnWR6kDfkxgcfp4X7hdwNxdY681VTo",
  "key1": "bugqQM1cyrqR1Pxyuz1UHnZmBs9yLwa7jPuCuNgAdRx5oGH2FnjpJk5vY68YAgquJDvtvpdk4fj2ySMLvzJNLcU",
  "key2": "3fp3M9UXz1vFeNJ8oxr9FE3EH9RsKTGCHve9rjvg29ZqorgTwRaDB5GDPiEt8wML5xKcyofb8RxYGgKhQLujSzD4",
  "key3": "3zzBjwRoMvVX8DFEGuRAunBJ14mLvcPtM6mDsF3LSktRayKAK7it2drUmvcbMa8AhAcoEsXHnDmgNmmA5WFg4rW1",
  "key4": "2WJFFteB8Ntkjhx8zf7AGqWvq3qUJBKNE42svqEQqt1B1yejzCQXQLicZEiY6P4NTFqka4D8gxoehvRSWhc8RjVZ",
  "key5": "2d65xPerp2YndspC5ScGPDN7FCZ46646viCiQvNBkKWUgUHTXMaVzVeCRQSktYJFnyT6E7Djz6k7XNz1eoEjZiLK",
  "key6": "493LfmdjoTZEdZ2nM2HXP2T6bNW8Wp6dckZr22JjEZSAdD2HDUWDoU67r5AHm8j7i8cCqHV5BFZV7os21zYQnLhC",
  "key7": "5fzFiUtWfK1BvDnKnBS8i73Kg9A8ZaYB71r1Hf1TuzvXBk6nTrmdKCYYVWzqh1ugyUNEvvjVLYUraLigQgbL3zit",
  "key8": "3Btwr8DzkuqrXvvCQDSbpPhK5L3gvqcjoYW8TvaMfzLbPrbEKMwGpV1rvKPiMKmabFQ6RHyW8vxqDG5w1JTPhgA7",
  "key9": "41mJjBBrPTar4govayE58WDcXNYPGW93ZSE3gxsnHmfSWjZgfWDrXYhcpAJcb5cyNRZpk1SVJL7ZHrWZnPVmseT5",
  "key10": "56Prs7MQHgMzcFdPL1fXCrqaYhZ7RDuHvYJ5KaTFvQuJzbGDJPF9nfZRwP7yvqYZS6YmAKUEcGDFUe1CR5qPJ9xn",
  "key11": "24T3biSb7rC5afkNxunJgEZvcTCoAKxojcVjQiX2XaRS6GszxfCFWb56Ef7GG4X93ptFooy4fFUAEqYLGrQrooRQ",
  "key12": "2idJoTdYvnEcc4rtkq1qpeHoHRkrNrdDUrCCYtDxRgHwH3duhHzqmoSgrpadMLTccef4zcEy2yGbJVassD3Xn1Uk",
  "key13": "CQFh7GSnsSwVFuEDfntNZoNxuQSVxiMfxbTpT2GBz8sPKxMUmMWcrTEuABcXmzZL2V6STvjv4gEkDV2JktzVpnR",
  "key14": "2ekADf1E6ifWf2FgnfuLE3kg7nbP4upt2cToGUeD4vLwv2cs9tifXZ5DgYBTGpc2TvQQonj8JuySdKSCQUqkQAqy",
  "key15": "g6oAEYKy3PcfKA9SKTiwuifzcsNaXsARjGTVxqeZQ6grCAEqm3Yk1M9nN4TqWGX8B4Drz4t5Lc517KuG763DAtt",
  "key16": "NK1cf5xWx9SBn2VBRpA3aWdZZ63bzEy2hx9zPGhsfXochacjfkAp9p7uNHJNwDmPzro8cupFrufNdRJmJZCc7tU",
  "key17": "53FB3R6sYgH8D61L8EXH62qHoPcowWLFcJnv3ZysrAKXf8gYmdeq35nFqzL1UvySFPRc33MbMJp6eRuxTEt2hXKH",
  "key18": "3TBctscpP59awDtoYC1VqYGqesqHisqNSzFyg5WANHyqdSPiNpqybDMf1tKC4y97ArcyAeLv4z7NdUPe5FU7maqU",
  "key19": "3iTLZoSViPqV98xTQ7cyyYX75GteKsYqQskkih2UWoVxrvfuFZY2JaftbbByPvDjEjpe59RAEXPBYJEeEZYoTeDD",
  "key20": "2uydBKTiR5bZkVeZC1Ln9RGWMurw9rRFmj41HFbJdaxwjShdzzWhTRtt718oErk3hHu4k61Zfyw5skLexCPsPfHz",
  "key21": "4tqiP8WSBZDmftXKmUStZ66gGhscMnga2ivrSNcrLo98sm7adZGaUhMT313iFNvebZz7NRuC68No3hihijgtv6k5",
  "key22": "5bNPMtD1uMCsQbvAc4m3naSKqGprmnPzT4SmyhfH7pEMsuUMXRqH1b7X2wzWmjHaGPfSTbJ96efNEPTGmDG44cLd",
  "key23": "8pwXnA6iUyUVfuHHSfiMsgzSG62xSsAiiepsW2BaWjNCsnLtJ2FWtSyuhHnMs7xRL6z8cvky9RmveABYA5xqf59",
  "key24": "rpx8smNJdwvzWio2TJ3SgVeLea6d6ZbAz5nZgKg5n92k8km3H2UnbmapWXeYnXWN1NQFCvhniSvYAzaE8vs8xtm",
  "key25": "fzwcKVBU4NSd59uoGnwgBV3kBAze7UqbQS8BsxkgtZwKshbLAA7BoFgKj1TAZcQ2iKseFFL45ShCsfJ4KGTfXGA",
  "key26": "9kzSQQbThU6eJixTVeARC767ZTtDABkxqs1wfagmV4LyRzNoH8bjrPt3WwU9oU3qaprnyBdLdydPrs8UprGEVen",
  "key27": "dweLjzg8r6DyUcx4nsLK8w4icvVyHFpMj5aRxq8nwYKxWFzkiREPGFCLNEUFEJGMiiCtCzxsbac1gfFqNoUFQMe",
  "key28": "5EwKqWBAB2tCJ5oCYKsgLXaaZdQfm3nK8posUTxjTSmGKjCrH2v6xtaSB96GiY3hP75Cr9pDSzg6fq14UKwhnuyw"
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
