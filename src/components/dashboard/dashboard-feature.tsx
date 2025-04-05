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
    "SXnNYAvjcYu7UG9bTr6rr4rHUhkebiFLrdd1BUSWUNmYxJc75UhzLMjRT5j4wFtdHPXhCgqQkNhWF3vroTcykig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nZZU4Jb1scDU8WBkJm2bsofpvpEmAumFDwrwfetMdFU4iChpTdJDxGjnTwDsRCcc4AGY5Z6kRXbHKVLL2h3Bv5y",
  "key1": "519ZDHW9eLcVxCzhvRxRKz39zGJs3337uzz9XpwQqFdrTd3xV5qGFEay8P9WAQTxq6KeRE27DfigGRDw68LNzJQT",
  "key2": "33KiLfUYKX6VNZ7ZJQd6oJcHDdVEJkQ7ykJyvJ4FTXFh46yS9yoihFSXrAYNdXdxb2a6CoHVBAmgWwoiA87wB33T",
  "key3": "5j4UefCcXaXPbCeGp22nm1dCEAbzsLPCoTJBfDTtSPxujUzUFQcBREjfNWRaBKyohavAfRAqrMTKrkJKGs1sYjX6",
  "key4": "5cZVDsN21S6zbRKLgHbHMZ9ypQVnLq3eoJjpoNZnyFcfBW1VgRGHVH7vPXAiNZJH4DXzLKCVpspPZTMz6AWjowf9",
  "key5": "2sT7rM1h4VxVPiRtkVb35dNgXxn5gB2gbQ7jW4bxsgimCifnyJjqZdCpuhoBcZtYLZ3ZuN7cxAD8FqizBFkb2qeP",
  "key6": "63eV1cZVWsufv7yxYJb5bBi5tnmC1UWcXaKxuaoYJNdfGe3EEgHCnGJvkpHnzvz66R9yhxs1dvEqJVrid5mPJ5te",
  "key7": "5qzZcGLZ1Srwcy6t6vYm2J7mFTzTiHLjqv6DwiDFhe5cxFZGFzoyt3ijbioWwSa8icCJ6h5KCHFediqKrMCtwt3X",
  "key8": "5mMzS9mRgFNXt7rYDqceAwx2kvdKz5MbtBBAxP5mdvNv4c7i2Cm4pima4iBRbjndfXiXVqMKZj1QwtC7WYic54cg",
  "key9": "2T9xeFMSuxP6TAzCvL5HPHpSs2vow5K5UdnpToFp26cHy5TgndXpqJ3bdE5JTb49pJo2A3nb3vE6P4EN7c3mbEkx",
  "key10": "3dJ32otFZG1uSzvWn9bhyr9dt1PZ1qvXVuWDukJw644fKTeHj1DtRQ13VvfZ5gcrur2mFpjbGZNdPoo5yPw4uYuB",
  "key11": "2841siNdzSV53871CNRwFJ46vzfeExZz3vt52BtxXidXaEBHqFjQZDSqRtXnEoH4zbTfpDEbT1wTjWXVWG5F8ewE",
  "key12": "3VbKEKLDXRxaVGwyt3QnsMffhPDBvmcxFRCFM4YmWfpZnJysGZKYJUr1A8bvh5c41ss3V5CRAD8HN2fMDtCqhGJC",
  "key13": "TE1qQNiTSY6CQw6LjKJFMmoqHN9wrF9tkaz66MLqAwJVBr8UM9kXuwjT5byooXuKwob2vh9MmTwU3UR127Zb4UC",
  "key14": "5FzpJHR6Y58SspVPDaUsAgFgRQD1JfWESbaTao8G8Pj4z59zGeM16ZVmURQTf3rBKaedGGS9wQQqK7kU6XeDUaMe",
  "key15": "YZ4a7FxB7MCUPRmRTqibBJmp9w85u1Aw2gfeUT5ZVHjVPUZajVnPXRxCJx2CNDFk5wBchCTsHo1Z6AgPdVwfucC",
  "key16": "4hH82kzqBVxrH1Tn71Vjmkc2PD2qcEjRRKdigQ6GcbRJR5Q2bGZ1QmQCnxL3rMMMv7LDT7uaRquhHXB2rLyHZhX4",
  "key17": "5RSr8uU9CRaKoSYoRgP2sNJGyqhostvGqK9E2RBJtujt2piEZEiYXx9zPTADoCZTq6u1zs6F81SLbQBKCtWnfhkM",
  "key18": "SuKBZijsTV6waKLvF7yrqtdrZExDdnMNsC9KCjd6oFgC8o36XKNd66C3NVEQraaNB4ZmAuAhHkCBobHT9KMNzmi",
  "key19": "5W6VzNzrXpLTeoKiFpo1pMiEvzHMdNw4UZ3YUcrNyzhtuVntsAm41Ty9nyr2uNsBaD4V9jejYtdUqEjC4AG2yrnK",
  "key20": "2cTKqYSQpo5xzoVFu42ez4mVa7M1CCeEbk6JVoGzRZuu9GintFoDmX8cYJfnDxL1biJuRzVLiTMbYwkxwnDiE1p4",
  "key21": "5MrJUJKTfoES66etuQi4eDqrXx6b17UaZJMG8NktusCpWHBw53ybUT76WKnhE3GbPJFpdaTyRACueC5GHkzUC4h",
  "key22": "4BfCZxVrNMazzHmBJ7LEwT6gqrx3eJe6xNgTArnAuCxF4c83H6pUVRcisBYJwStJk7entjyHhUxHH4pGg5C845Z5",
  "key23": "2eqdYdzhMqQEpAdRk9hZdKjFEgTgQiVvAdRgR3fAiiYm9pKwaBTk85M3WRGxTZZ98UK1TeXkDGptwemVsTVCDppo",
  "key24": "y8cJUZfomtW1ySJRnP87vVUKDNbKq5LDcy39bTQQRyPrhmiLsNRAf1jKJ9LWC7ZQgEbfHjvTLWLB4sy74XQeS42",
  "key25": "Gwu75jGYrpeQScKmSCFsiuFNmve57BfUBhLq9xZ7qiVLCy1TL9vMJqUgE2SD4fR7P59L5QCVJyQhyWHH1fugpUt",
  "key26": "313AjEUTuvUarTJYTUzm9qFL3kjCAUudBzSjfA6SSPdm359FmqnMkqYrXRmtVJsHSxQmJ5YPYuDFZ9KEyiCmk2kP",
  "key27": "4xiDAQYLneWmRgejCCbqqZwGU6VVnXJXPUoQe4vysMyRwhgzxHPPqL6WZ7uv61D3AasGiMStfhuWDfRNqWNXWQd6",
  "key28": "5BQJUBePr7DXEC6mMPNNdqrHfReJDeE9cPg1Y9tGUjeoXyHccTKCmLaNATy7o84bYGFa58AFte7t4LcXt3QKQ3ua",
  "key29": "oge4BowLuheH5vKozxGnzacHVeSLpjepNpNwbLB8m51iU2Dw4be7RhxM5nWXaV1frwRbWQ9wceDUoaMpdf8FM8r",
  "key30": "3eAjF6KZJYeX4hhkV5ujVGxoM1sYAHwur5SaZ9UXWSi2JYMWo2PgVhq3rDVLtofu1UEDnjVKwjaF1skP15hs6Who",
  "key31": "5stPwBofMujarC9MDCLyNxHGjWiLWTz3zbBZGTvsbNhirsejuQrSRpd6PnC6bBJ68tgxuMA4fxqvSiEnsvEFE6Ew",
  "key32": "3Zx9mL4fC34MAYL7727iPEWFt1Etb3UE6zBc3SNkUuUjVrzkZAQyY55YD2swYFXoYvP9HygGhFrRn5ySPnXo1f9w",
  "key33": "4yxSwh71MrbjDAFcVahuoSHnXXtUtax2xGfPfruqyyeBfuHPhfp5b5u7YPwBVXNMwoZttDASQwwMqTzhsSZRmb3V",
  "key34": "2zfFu38bFi1VooQkmPtsimXoqhQdPwwVkCbpgZsgwbcTK1zFSL7k5LEScr7WGVB81wUFwQvJNPPiTzELoxj2sQ2X",
  "key35": "pcyvv3B1UAZsCjFNWyDzCGoWdvoRxDCacjhq5CFGb8uH7j3MLqnXC17SsrpcZbt9LjLa6r4cJoJcwBWuoBUwBFP",
  "key36": "32sCJaA1oPdf8q6eeGo8RexRdsDttpWttHr82ZqdfcBZ21TFbpMa8TsRJ4aDomLjZgFfu6a1BXxCmmQ8ssKdgL9q",
  "key37": "2NE14hG9iKH5sdXRR98aLJA9EctvRAV9gdjw4GFH7cTpGZbxKfq5DVv6MmvvGWuyLv7kMzVo6pdpdPsYei2CTJbs",
  "key38": "4SmtcfnL1kU42XsfdFR1jXNGwXqRLuHkjyXTnFLKsEt2Gy4oX7p6cqoysPCKxQk4sTMXuJmgXuSPVpYjxQ2GZ4j3"
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
