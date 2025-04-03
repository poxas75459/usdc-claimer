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
    "24DcCBZQkBSmQZfZbkpkrpbzUxZCm1pX6z4XUHtk5dYobCYjQd6GubUhs19MToLUJvUNhjnKrC1Ex3xz6XFPgWmt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YVsV8AHJRPHDfsARSUwFbCDNj2RHwKBcG9kfBXw6tMp4XbrcccHa7tZ2JhJwnzLn9oKYsAY3gsLWKPkbmormDiQ",
  "key1": "PGT81DVeJkHfxi4oFzzb5NHKRHGHmDGEoDaDRaBAoHR8qFLzd8M89viA6Ya9K8pohNr3Sow6GjzvZiRrYx17CiH",
  "key2": "2M6FaFeUAfrsmGC8JnJ4wdVbw4WKkbqkQvraJLMBmfPmzQpjABebXm4Vsdn6qkpGLZBJubNkAGfUAMdEYBXg3jHg",
  "key3": "4QqgJBsad7xD3frRRy7rLmr78CQVGuKYDd3MBLPYuvMy1z2kHFyvvWorKcsTayuhTBkX5U549QvU6EW6o8uzrZoE",
  "key4": "CX2K9TbgqM1TBbr98sfEZbgDXrnF5vojwb3jvtvaBWLryzTtsx8JKtrhDqCAbs6W1i37FuFRLnJXd5ygRDiduSY",
  "key5": "pNwGg4MA9gH1tZh3dkFrBBE9hnMEF7n4BxvpnpFR8VdamXseriVdgbKonqStR5qkrqLdFWqvk4ocrCQhQv2q6eS",
  "key6": "22wtyr6KvpwUmhRwjGU6smrJn5JdDm5Z6HXwB51dcWfZL4pxWhWNn7oKwxo96cVqtGtRzUpqR4AXHg3SfANhoN2C",
  "key7": "4r9VjM6HquTuAgSASDgNpCisLZceB3Lc1j1KBRrFMRq9YDWAyAAZStUS4oiXaLL6NCn2GzvBhHxtEMXzknR82KYK",
  "key8": "2HsB1Ba9AY5mycGbwe7TaZrDL1JpqHjrKFj14nNv4EVSMt8YrhdJEZprkZtJ97WY6auvNkmdkxtzyKQ71ncSTBZL",
  "key9": "53yDDoNVAoQquePGkPpyDh2N82YrmCVYMRKNawaHc92AF1hZ8VxQEmwTycUGTWbj46iyPuco7D3y9YXbZkjRm8yq",
  "key10": "4537qAAHU6Mi3kdCDekEGVNotAVh9LPARDdqJC5XfFVR9focdcreApkG2hHeBcyTJXfk2YygXy8NsZzD4s48MsVu",
  "key11": "28zvZfsp6oCx33tAphEB75NsCVPYqw7w4ndFf5oMTSk9Uy9GePXVLUdRfaeamTLaCAVirMrnhNNAbgH9mH5DhLnh",
  "key12": "5jcXyYNxvvbV2jTxfyDPoWGMhwaT7ECVYpkmkDRGxtmB26DwzDDPs6NxfJTmJLtX44JdQGge84Y23Wqc12cAS4DC",
  "key13": "5UV8TZSfX959CUvvvLbh5u2fDRUW7bPhK3cgHqQM6XiJGsJPjceDaBTsi8N1E2LG6t72RXheDur6cT4TssWg73h8",
  "key14": "2S8HuDHDd2dK54TbNXtjBKAsqptGAVqH36BKBbvTsbzEWiZjocJDhnC2Nc71skZhnadvHmZ4H48cDVYMeLMYVn8s",
  "key15": "5qzsiKY4FLtRZvSSDtFa9S4mMpJqQ9JyeYHX2cARp6kCQ5hg7qBioTEpQbqFZgSh48kNJTyXWtpgdm8RmLeEWojY",
  "key16": "3bYgUL5swRKFFom1qh4pYnL2AGNToaoSjZS7g6z9widNqffgBeUg3R5wcDTtNxMH8ci38ud4oprQ26xQDXHjhokP",
  "key17": "331KTKLjd8MAmxLbZJMs1Ms7nF1qqMncC3QAHd5TZQSsmmVUXLc2eVyYtH4u1cTQzszZc2QbxGtuiTCZL4z4YxtC",
  "key18": "3MPBD3YJVLyosLHWaLyvbi6Pd7adgHKRjYtFjJaxpNBeo3YsxwawTW5wZcMPs3bwdS8bMFzsu9qGhCeyXLFS8epU",
  "key19": "4F7EqZofsqKtEpPpKNC3WhcKxxHN8NRtL1g1et8jdN1V1wmB8vBx3J34Z28c8mVM5M6ewwo8w3fvEiCC7VjqY3zS",
  "key20": "3bdA2WxYwQZk6AeT6CuSnhcJwtsuEpoLe1zAEPBuA4SLN9bx8YuCDngxh92LawPk6jbsXN8oPZivXGRxpuPeVKLF",
  "key21": "22et3KhTpeStWY98MatPJKCckbb9Qx5UEV4r6Mywcd8kqAKpwxnpT7tH5FQn6WnHpSqpv3yv79t8jTWGhsxcEmsR",
  "key22": "45PByYvoHNbMBsu4o8Bp8SWQQBWbDgNJaS5CGpidyyu2YCg1651GDbooUsoG1sxHfwdjPkrHFkhWGArZum37zMe5",
  "key23": "65dTQHLiMnbCA6dRhWatXMCkr5ux7niWYHKCGZ5mvCqab6mvZX1ZYv5UzxmCfeksifgJNprin6oaQjXfSgntj2r2",
  "key24": "4tiRMskJFAQawL78jKHBZyCPUtUhP9Ziv9NjtEATf5BeaVef9v1auSrWfNYeBcWnrvj6rgxmUjJG2NLShkRbNAhy",
  "key25": "2kLzWWk9v6LjAZKexZRJqEJCGyYe4qN7n2D5EKAd6ADhyNtfgD2KEhwN2c76exC7yEfZMPz5ZBLZGXVfKdmsXd2H",
  "key26": "3kbyZX7xCFEo9Grq3HanaSwu8qeBAEVNxr1oA9Xn9AZXcTTTDXonzikEQ2HhqLUZLKHtjLhGdQ2RM84VwyXtYjVv",
  "key27": "3LC2iZ2UdtA9SMireBZ1UGrntvkMi8V3Gw4ygpRzKeUhNKoG6frGj8EZvFjBgyc3KZHFGaRkaJtFuBCLtMXs734w",
  "key28": "3df1ELJWvFjbne474fGuPxByNuWhtsLbBvhiBHniojhzYEprB7eXAtYgkG2suu2W5eKkiDhHjtRi5hyLNxcmN2Cw",
  "key29": "3rMDjf89qiMfE4HwRot2yVsLg7Ji5QzqwRYDRYRCpcvfgymjFMQnUkjdvvKgM31GZbiL1dP7tPJiuWenFgj4hixR",
  "key30": "2Rm1n7LrgZzFpiT5aYcnYvudwsDoskkb5Rc37p8TzmfFVzHvaWbPWxvpR4g2RNvNytESGgc96tJpEHb6fwVGHMt9",
  "key31": "3HdKnwBEX6VPxUe6JY9Fay6poHHofbbVUn8BVVsthdWKoLfV1vBNCytpug9LhhzBfJw3EwNZ1hhMgUrpgWDxgZDZ",
  "key32": "2fdYdKujFxkAajM2VrYg433d7rXvcMCoRFtArpobZrrz5L5yuAsZMaAoZscEob64o9CXcVTPhi8xp38fYdXNQkuL",
  "key33": "BC7S2Yw9V25NE6JDNuDCCrjGBQquAyLNsxpUEe1UgDmHqaHvEFx99W6hksPNbYFKaQ4zDkZr1V19iVzPPx6dQEi",
  "key34": "2UKGa26aoiDsHAUSrrkz6nY6rESZJLJNoQ8bToNb1eitNuVZ3ttucFjfseuh74kj6H1rgycCPiaUyDRjZ4SZf4uz",
  "key35": "4XwxAPdakSVJ4ejoxM3vmTpssNhfNYk4vPRv4kpZBnGYvP94NTyN3vLpjRjQ9CNcQKAezJpyUseWAVUMbNdBPmCe",
  "key36": "seYkEiDVy9tbQCfD3BfDGZA38Fa9zzTiw4V1ZZBEcc8hCfPpoihULw5Xgj24aMjAA1yY1qLLF4LCFeZBba8Q4vb",
  "key37": "644VU9VaHCYY1GANfZignJ7SwsaTXt5gSUwHQqCcnQfGjpiC6PXyVHorXMy76bTSch91Qksa7zTtnzc2VLt3fAUs",
  "key38": "4ATguGeYfcGigfsx5uHfSvdprBgVJhdektCCXCmTPRH12fikerqDmZZaDGiDGB1CHknEs7X5823JjvnuqThpE1CF",
  "key39": "VUZqgTurS8jYXWHi1gXsrCojKuQxNS2v2oUx85ecX9goRLjRxTgApXihp5EfVaLpe3tmuSSj4cnWEvXzQShPtud",
  "key40": "41wogqkgdWNs8yvKKoAErNVdLWxXNvGmzqKpqdx4PM7ErR87MtD1pN14n9rq646CPFJPiEviPPR9GcxptQwGV2XE",
  "key41": "4cndA6V93x8aTELgC9yryVLNmbBRVXZoEEnounLjiWkU9ZhTpje6NgwBs2DRzAsrGHmDtpR1uo2u8MQ2rG36VQfK",
  "key42": "AVgUqPRFwMxAip5DwWtva9RBKLf8wd6kAwi1KkcHufL1kn8FpZZcAPuZVPJiTGfRea6NBkQN48SZdyNTRxXRPdr",
  "key43": "24XScXngYkq4KiCXEfH8qWkLnwdy1kDYc8tuUG3UndQEEoodvFYAQx5S8pQc3DYESc9o5piuoXDyNDXL9n9Yy9iM",
  "key44": "Leyu6cRrMUpYKQaUR481nmK28CsaeCUqX81cnfG6AapNwVk51WpNe6MZFpwS7SNR9aHRxeSvDekwyyuu2zgsViA",
  "key45": "4GGPkKghZPM3SSigFMRtSSBgj7x72Jihgdx2qjkQTpQXbyBm6hsZ83a4kEC6qpjpQDRMGXZUhbujjVD443siCK1Q",
  "key46": "5d9QttTCpaH1LWKUoeYzREnTK3ascAgj2KUt775c5hmBfAtZvrGYQbfktFVg3mgF1mEjS4bbAieQaZCbx8DyPq5d",
  "key47": "4wm25MMiNxu3FEEg2hs5oT4YToaEEEMmV1NEQ2ntPpKWodLmBmyQb1e1cS5gQnndLKK4JnEjLTJcRGoQbC438afE"
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
