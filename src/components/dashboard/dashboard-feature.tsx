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
    "3Mdiw7BMjeLXDFwDzWwLfmtc6LJWiJ2v8fBtn8CaSKs9tu4Aw9MsoMebidgCAhjNgjbG516QYkwt5G2SzPDZrUhr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oqDYyqT1iTzjADMKRP3kxrFPavafkUpewvdrhpVXWS4kHWgM9Yb7pExXozXnoDUMXmoRMXkD4c7wG5CeDd1QXhx",
  "key1": "4TJDtdCADKYg3vU2Jn4AcUzagBoqZnh7Dm5K2nEssfruhgBtsC51A9MFuMvmkgsBn1Ujp42tF1AXCjJSNZ1Kzm4K",
  "key2": "61Leaq1BZhAaABo6JnHQ9fajGpqRgaVoEqyFmjxJ3DMFTvtjVB1o1cRQo8fHtAvm2Egkk5FJM3fy1M9R2x6kF4CY",
  "key3": "2WKhw8rPpXKNZmXwzDRjgjfn1pbkbMaugjSU1muZWcjq1JRJErdwj6HwBjg85ZXNuw3LUwisa9D55ubDT2MhvFD7",
  "key4": "5e6i6SFLPVZgQX33EesPjyfew9n9EkjS7CdsNxMVroRXDkhHYxe1g31E4PRpXHuWAqobHtvizsXrejED8iwhR3r3",
  "key5": "5DZM8gLh2MCg4sN54g2ypB18LMnPL71wDJMBzFxGKkUgy8x9Fm5tHXa8yyGZcsimPf2GHksUXtZsGMoKDJMfehL8",
  "key6": "yU2Ma27bAb49qe2PnkvboJSZGq3STwK3edp7Sxb9DdfYGDRVr2amfawosJFho9rCNp7sPNWdKh1drsAyogej1tC",
  "key7": "2WkkDV13QEFX4imA7KUdx61dyjAHLFpUxfT1iyUfGFYSYCLbKSRwqnD4Yizh1HTStjjZzbgysxSxm5TxKmqKEMcR",
  "key8": "5fj2Aies6s5R83J9cxL1EJ711F4qeBEVag8dBxX6d2Fsy1CT9wnaZCGL6hdrgqTN8KQCfCnz3MWwz29oucvRVdbT",
  "key9": "DBu2wrfvwYWbw6gQRfBpzAapvwVMBD9tDUSw1uPqBYJqh8aEGdmpphQnGVmTS3svdj4HWTt1Ukpzogog5sQMVRB",
  "key10": "4eobouTRsb4srWC5kT3zYhDewzKfDqjBHtA9tFGu3ZeDfAY5WRkwhsULqVpGqrATTN6U8QJqkRy5v72PMNyphi9W",
  "key11": "62HMz7hp2S3gyJPVtJjptMvFycpeHCqTTXFRAQc7J4RiLtu8i7viSKgjQb2GoXX6JwypBoe7RPN6JhpXKtZ4ickz",
  "key12": "4PmHNYvSzqtuywTyeZy8VnwBmvbtk6BaD8yQJ2LWkQsYudZWXR2mSgEdWAtc7N6ougTaAkh6qbfnvNuJroMtLXCJ",
  "key13": "5EQ4yDW2rKqYXeaU6HjtMmzhvCGhBJGo252rtniJpoVqr3cGiTeotjGZNjtsoryzevWkodVYvuaHHGCRbA7ycTgr",
  "key14": "3oEn3vvCtLCTXm57dUK6KYvmG2o5pXBxvjD5KJC1M6veVpy7wDr9VaCSPpvwD4nDqpGYjCdBYdMEb74ZtJc1N3ZS",
  "key15": "2avBmSx4nS7jgvsy3FHNkpTt6YAsKvvb4qbJy68k4u5AFggis2DhBhsbVAAdPtQ58PBkBrRqjHXqhpKr4kdve3oE",
  "key16": "2ndmF9fW2T7VZ2n9AXTBEoX74rejMvnrQku6Ad1Mf6xJ6sU4Ljjss34szJrJSQ4vUD2nLwTmuzDGym8jo6ExK1NH",
  "key17": "3NBw6vW2JwZLE5zSA3Y7DECC8AHXTKdzQw5vZp6fe2c1pkpURRvQnQdq63c77mpMKX7EiD3EYsSUStEk7AuYKDdB",
  "key18": "s2vPjyQNHEM1Q2qJBwpCMgYjEVi8QyUVmo2hrEDj1K2RZSxHxxGyzjgLedXrAmjUQ63ngbYqBpmBMWdDpHgbs2L",
  "key19": "4pnaNKe92RKYkyhhKBsLDrDA35tc4vUvNLd8Rviy3TsS7yCsAPE2yJKMVQewBUr6iTPAGw5DJRJBR3iUhsCtbiFD",
  "key20": "3c7hocQt7Ju3Ctdefvym9qFMBVMnWxUzQNdomfh2isTBvEpiwXZmN45tMVUqc721Gzg4ywrFfqPh3BQKWKygC16S",
  "key21": "3FsryShWWhjE5eQtCdzBBTpDnj3V9sRtqHCUfUGXC9d9Pjn14N8VjtZxGJi5RxR7JPhsKZZoxzNLstpDXBBxPSk6",
  "key22": "EXUF8ph5j39t2LmM2WErEbfr9e5QCFW2QFgpyMaiDAbN7b4JfoLjrsq37k7d2pZHL77AHxP7RTja5mnLG4wFema",
  "key23": "ud1KJACRgAKTEUJVD3DQ6E1MtEcYYDcR92SmMLZdhQs6o5umCqmnmydNX3ybQvyKkDydGN1aBWVPVRnSPc7dHNf",
  "key24": "PfRXQCXLKWpbvU9GCoUKeQc8c6yzFyxBdjBsLjmdQ3QD5T2SpDwA3G3ckacL9DHrFserwx2w6ti73ueGkMKS51q",
  "key25": "59qRR2cFQ8UnReM8TFo97R2q2Br8otw4unUx4mqHjVTmMHPG7qkzk1Lq3tuB3Xau9GE36Kqesa1fEX9ytwRHLVV6",
  "key26": "3vDpBm5w6PvwLRoRCDfPymCF98DLJSjUGqj9fE1DuZQrBG9Th6vRXPJaYWkjVJVRxAZUN5AuXGDbcQeZnYSGwjcf",
  "key27": "rubLgAzF27Lhr5L3mjRWs3DnFf3D3J6kh6r3gAHofnXRXArqVF5HB1767uz7pp5seQFBfUjdJgQACUY8xeZoAaD",
  "key28": "3ismPAFuoMdoiF7o86YYkv89fXk7QAst1QCbU1LjvTrxuc88kDREFuxpdhCTJgcRwN12nYcYkcV8zm44YtRvHhBL"
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
