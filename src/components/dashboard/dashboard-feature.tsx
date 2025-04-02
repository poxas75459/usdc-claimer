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
    "4Fk2xBzcHTwG48HmGB9qy6Tno6xjQ9cpNpbXTphVDrSPeMKmzaauNQzuguHt1C4gTyStCraTjPAQrwftdv4uUxy7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BXeHQPh82WvUCgAkoYGZ7YZHPp6G497DCwWJdrhJs6TTmkRyLg5apgC3qJr11VbRYr7SzUZszy1tjjKLordYZoW",
  "key1": "2Gjmbkvvm4xemi8kX9XQebFLx642jaShks4VLkTsE7G2cJJUxBjWLS1JTAF1vBNLGdiwC72nuMWQdfEgMWPWXe5t",
  "key2": "EdEMq8TtaQovpRQwKVeUTQYcCud9ja3LtteKXkuqT8cwEPezLJskBetbH3mTgYjsuk8LqtMYyx8yx652Tt9QkEW",
  "key3": "4qTjN9ZJDt1PzxxZussddy2xjT68EMk3wRxBy6mcDHUxpoDjqe9h1DXeXy6qLFuXaxJ7qenAwnKnegPRo5uXjzmS",
  "key4": "2ovgzVioSKchefk2tDEccG3E8J2jYDnSPdVcf5C3XK5RzjpSgxkB2sNXamBnpTESvvvVQJkAfHjZwbMei9z2Vu1X",
  "key5": "4tmoyj9msHVpsF8LXLUQ4S4Uh5VGVF7iaSyhkX2dUrid7dX1SdiwrBQQq4aBFfxvdibUaMwYzAmGt8EMy1zSeTmg",
  "key6": "5E4qZs5xxkSmB7GdHX8mrUMqcrEUyWgEH2b5PQ9SrY7nPEXKUshFu8TbZZgWM1rtUZxjL3NFUAfcyYHUS1oGFWjY",
  "key7": "2qtMLsTBnpjwtrHfaneBwso6PnR1TadAD7xsosW9ofGCyNU2ftLfL1vy4K5tfWAAZjdCJveXfXGQEmRFcN86yMJH",
  "key8": "3qPpeyxq997gqYTNyzF7t1m8HxrjomjYxSijSNuD1gdhENpivfJBN5p4xuGGbtgUczTtgyaau25bqoZiHDwTUeXR",
  "key9": "5kcz3cMTSC169NouiDkrvpvSkKKXhSUUH32UMVd81Fy4A3ZZykRrg7QdzPSmy1QSPdr2ew7uYQX6JF9xKur4qcMz",
  "key10": "uys3BoUqTeVvCYiJjTfmQycvT4avKBECVjkqsKa4q4HcZo1hwCxdW59C31xA4VJd2XgKBVYmzrAsgee5MD5e1M6",
  "key11": "2fDmNnuQxUr2RZsYHnVY5snYzUSCJf2G9kLVfqfUo4ywyVLFA5ULFYNY4Cb8hXLyHd59PRAaJcGV7goAqrQFAt2",
  "key12": "2FHWzCja3AGtcqebj9Z7qHTqLpsPoHgZxCnjzFBFQeXMVXkAyT3u8ybT2aG8KyqoDytsg7ZKktez3kibLEQnLRY7",
  "key13": "41n2nJQjWoPhcC7XP7nC8vr127G1mu9RiG2R8qE2MBo8f3ojD5GinRMWmMTWBEjT95FnM8jzkPC2kJ9ZPViuaiJR",
  "key14": "SUPtkf1oibG1wUGeKJm3EEdBhaD5fWyrifo6LcVHKUpRA4zk63D9SyWZGSD7gHmpUn4tteFhAtADpC7dPgRkZf7",
  "key15": "2odX4eazKdT3sV1sL6s3ajGEb4qA4grMh3kdvMrW2UfgSgF3QtpC51S1pYYfZWEwoovLrTJoUPz818zyve5wPdLQ",
  "key16": "3uF5RdAD5esKpVA3j7Uue9qTajSiFRRaXuay3LBRufJRPzR8zNMMpw5Nm1m4RPDdPybXtNXHBoqyBYF9Vpw85UHc",
  "key17": "m3sbKEzGiBgG8QSWgqLf4hgnUDTjFewyGdorsxLkVZUBbJj13GG69Uv1zbZMxfpqoqhJNmhE8JseYSzeSr8JLF9",
  "key18": "ZFzG32ZWtdNyVuVC7o8oeY8Fzvaf15Dn51DGjFRxv4mWHkqN9P8NUdvREcuVKNPdDZubmXo4AuwyQxYxgoPQKxb",
  "key19": "5druFpN8u2Zui9kXJub3eg4Tp1SdgmMMVUokwmht7QesG4art5sdJ1oyG2oKZ3g4VgJN8WPpC4xLkgxrG3FtzXKt",
  "key20": "2DaXDiVeoiUyg9GYR1rw3Qo9t94rix5SUHvrfqgbGiAue7fEXe81s7yoBUjovQsQ3UsEzwFdJPRrwa3Vt9KYMf8y",
  "key21": "3huCgBPjCExpjBAjBw2CpCLEop7tcMYJMoKAHL5JwedGBRfpCAzArTDZCry8W3QjV4JbbvS3mou1XG2H35arKeKv",
  "key22": "3qJLVEs4aYJUPRWFXdGtk7Mm4JWEhZBtguqruWSxfm3XBkh5ypXhM3j8K1PGthgWr3UpPvtc8gHHetEPhccxRSZi",
  "key23": "EZDu8L1KLgCye3aH5p7aGQSyXcFJ1pkY3AAGKeMCfppGZfGnixFEEhNC8VyQjvNyg2xoANK7Dqf2N18gdjZYj9C",
  "key24": "XrwPsR3dgoTMzVqdN2UmemqEuLEBodLeCTRBrF4dFUsGwJWqaaD3QDVQVxzje7TNsPUUgKPgYq3QKafjSMEsFGJ",
  "key25": "5fuzRovx7ikDqFyPn1UXGZnx41gyVaNh7PrStWY21fVnLijdhCSWbCJwuESEDDz4facuSzYZaxeQfSFatEGo2Usq",
  "key26": "5oV9Zx2sFKSiCnuGAaWV3iwAoJcD1Z3XLJfgKiH2jCzvxk7mAEXWt1HfCnBhBgr5vGT1Edck4sk8RaXUXXSfkZwU",
  "key27": "2YAZhiJZGBvhBBLX79vaRZ2zPRGXiTReYdXDZ6ZGKKd3Xg8KTyYSqvnsvdzf3sWL51yT5WJEcKbpWRtYXrc9m7rM",
  "key28": "4adqJV2TZ7mmQwRXKBw2ZvhQp4mUe5ALZkW3zGA3v61xttT1ydj7ot459AcPWkcmvnSUku1SSfpiqa63mjstHJ4S",
  "key29": "2ADSXdn5G5cJfYKht3JWNSeMXrVGX3Z3y3Sb36Ap1dWyYS5KJuVoorGxChjxTepcAuNMZGFRXs9hLxCZbvQtj3nU",
  "key30": "5px4MirCfYyejMZjdvZWNFED5R3GQygBZg4dNt66Y7gzQWNgKGKeuwq7QU7EQy6azXAK9JWPDqLAgc275KqJ5xaV",
  "key31": "2BEk5uiPxVTkvTbVdhc568gMcS3KPXAyPRzUqWrYRMJVhW8XBJfjEwDpCwfWqhD2f5f8pMW9kHB5MTa9rmwKdQfw",
  "key32": "2kcshvnyt9mF8xMNH2YoTpDXqk5xvxBBPStCLTun8paKaQqLwuGWZSthFxR44EuGXq9E1a6B5LFNzJAuejCuDZtS",
  "key33": "2cGV5hagsxErUm473xXQ6oNKssZTRLoH6STDf2Y1sToFPEfp8JrTpqkAwNwuKcz8m3MyPVvxQu56MTKVKCnD2Bk9",
  "key34": "3Dne6AfwAuLy7RGXf6UNNP2ED1to9fHePxTBtwKd7sf57fE8EA4GdYwpsvyK5ficx5zVJhPo6mJ9bGCFZ7EtBZVT",
  "key35": "2UjG2hkzurTDBFWwpB6QAZwg9wuAnCzsgrVSDjkDqx4MVEGqBPBpKf6zjVzc7uSktY2neGadX5shAjJVDZEt7w4k",
  "key36": "2ezdzoNfK1c2GvMtExjyH4MkLAGB9pusQaQjUc6jc7YHubbWNThycKQbjgd2fHg7uNxNUWLRF53SQLGfqWLVqdQU",
  "key37": "5y2uEHBUpwXJGfqdFwEDUpQJ1rxvggFg9ctpQ2iLFCnD2qfnKEKdaZU7eJrmhQU2vJHHbuPHH5YrU14oMVcJXyXA",
  "key38": "4va56D67xfBSbRR5MuZjjmTRFepU9NjxBtA4YhFd6itnhbWhX145d9VaTchkSrbsFqu31MZ8EVZFdY2cSwDNwgrQ",
  "key39": "2AkKzLy6JMnwHT6KN8RGiZBBNPpf36ZckioCe54oVYyQgLuRGtJ228EghJHreqCtgJa6e3ECQ7maheMyDtScpEQA",
  "key40": "yM37LjVixSqm4qYHyPrmPtoW2ETCro1GYC2q5HFVcH3gdq34kiizbMjDs9QmYYxcMZHmdmrUQ2fWtovwygt5HbK",
  "key41": "3ykPtQDSZdpbRbBM9QZv9oZSbCDAxEKcfzzM7o5z3bH8jnZ46R3ZjpkR5Cggr5g7xqGRNGdRbUnCQai4dsnLUguH",
  "key42": "4ZzohiMB1yiN67XynzLnppuc67Zrwp2EU18CQrw2pywzSm5z14qB3Jm12MJRWiyroXEqx6EvABe47GUX9p8eAxSG",
  "key43": "3mNE5ERTMLfQycSTwW96GerodK4X6vNZe4DgciY414FBTpvZt4f6FCV1pjDn1umXhL6JePFinxdJaFcr7KM2nppo"
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
