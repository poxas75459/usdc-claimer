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
    "6HVuuh48JaMiKvdJwK5ZVsV4D4DdLYWfkV2xxQ1Xg9ZBDLPYeSFFAaBy45wgeY9b1pjvTAUdn3yH7QAT5yh8sSL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49PvRMEz39jDovENkYr4oKZx1JX6pMrDjbH7dWB5CKxJKQv1ji1H2eiQBFe4tmPLknTzndnAHTNkjWjn3HG35SeP",
  "key1": "4ixKhfxwsKCmsT8QmeH6scao5pHrcJAZJk9wBnNvpeAGA1aHuVLs1tsjVWgiRJYfuTRqdm7SY9k8umcyXTbsLeYQ",
  "key2": "2NwgRFLRTzDpnUNGymA4YUKbP9BpqdpHuEsH8rRhq7Gu9H2fyMkgE1z73uE58gLj1ueghukoKk29j5YJwfEzDH89",
  "key3": "4DvnMNPvuNKj9Jv7A533pn6HMyVUQHHHrJAJ22kF8itSsyp8CRU66N8mBUa7XwPkaPWQasczJS5n63ySAVEt2kc8",
  "key4": "2xQgBUkfdPN9jGiYKhmkU6UQLcVzGrqyAuw7FKmzaDhhG9e5rLS6hBnSYwvM554aPnH41p2bphqkQCK8nG9YT9fh",
  "key5": "4tcmaWvX2SMNuQ5aWxDXJjW5KvKZidDdMtJMQWFkH3HJEipCqLYMysHZDJZmmcLKUGxK6DEG5qi4Jg2tJmF2sfzn",
  "key6": "2BDKFvmNKjCeVEni79XPiShqDkkSud62uHV28jpjP53RH7XzAoxgKrtqvvqiz9Tq8EAR25cLJXYzaX5V5vnrPETp",
  "key7": "2Q1gvtcictEqu1VEgVmChxvYDqxyYkXE5SuHnnGKm5StR362H5goeE7u14qQWfoF6drTKszqL5hCzrdFEq3rxVDQ",
  "key8": "2CUX3WCfdwnncbDR6nbN7fXpLGcWFwZywJE9Ah64mZEGVW6s5bjar6VkvQxsV6v7mqfzu6xzafn9gvViNEQveyUR",
  "key9": "3S7RLSg7p7kTnSoBFC3Rb88PxrW8rY1tQnrUGtK8bXZpevoAEJSPKwHTb1xe2uyp59kM5Uo8nzz2SWCmUSCn67Z8",
  "key10": "62V787wUjRJb6wAdiXUiz5ETCQUPaiKb6qvJC1vmTHnnF4pf6KDbsL8s1d5Z1Yt3ZsxHQD7ByWpNkJMBa2vmGLNy",
  "key11": "4B8EU69kwNbRbaoScvhkHgnEaGSX2QUCxb1JQyH5uosmu3tLaMmpkbb1G5D3st297baZDJGvs1n13S1owcDN83JX",
  "key12": "2nqNzVttjFaMy9zPTSbdd8MoiWMKYiosFzbGP3CKh1hgekMmQjLNCS3hc9SuQtZdN71e4tJnkdkpUhcNqUspGJZH",
  "key13": "A3HjbbTXNYjB3iHQJmPn3UMrBPSrPySL47vHnwWUUJnzUPWZK7Pdb14UyKkZ3ZEUaXKkgZi5hHb7EkHRgETJp5x",
  "key14": "3fG2PWRfRA999BRj3H9cEdCkLvD8SUWyjTEgckcroWrgsaU279B9eJDcDaBuWMatc97ptKctDimBacW6mVZ4yJeP",
  "key15": "5pwygCVYZPtPbFk9gGhoNVRLKTH6qFPDpGQEVq1jzAxx5Y5hs4rAtaNabrdxkLHwx8GMGkikZWBduTn7yLhRTkK7",
  "key16": "ifTMSm86XzDeLnv8osDmDfGxSk176AexgfCyqmDNcsmFzG8agWfvg89e4bLUcRtxxUSttBZgGyqN8THSHhwpi1e",
  "key17": "2Kz6gDCc2Wae3F8YQB5ebkD35rKdfgVHoLTCeXPFb7DDCSSKmDvrhdUjZqhGSdjiQR52ak8F3cktgav7tg2Hk5wN",
  "key18": "5zpmcCpYbegA2KZLKWeHmZwGtBZzarjACa58zEecDdasDbPPSjPaifL4p9CrAobYTDp1XzQxbhFcDuPvbiwaZDAS",
  "key19": "5PqwdVBHLtc3oqtjw8j2H5qK5V7uZXPrPwJihxoLyYXD2AmVy2KSrNXS9wGCkvpKjqRKYxYSTtBWnApxzpZ9E1wx",
  "key20": "4piFYAQVT5uvjHTXz7pxFH9machUrGCKF7yxeg6WovkspeHAazbmKGB7z3y2wkA93v6xKNPHXwmJLajg9PMhhHRR",
  "key21": "2kA1PC6h4kf65ZvVyi95CnqNWX9aB6V5zJd2wPCJrb9ACsqgChHd1Nij4StbTKErhmsuDiS3T8ziYtPUWAfPHH1a",
  "key22": "4V1g5UQq7EYyCmVa87HeyL1LvNQ2ovA3wFuPV5JNxzL5WFqfzmozNuCvi2GQxDJZeMJbwEPkwMrdb7wBcVzV15U9",
  "key23": "3ynZKYVdDxsFbLoFS6mFbjMTKSW5W3dQJHMNz6Ss34TGqyz5conGXAUuRUfYxjBMe64Y3ncnFLD7d7fMamWaLeZo",
  "key24": "2cZXBsLDR25fuDrtKPnjw4dvdMXzmih5vPCv4fU7ifDP9Qr7txKoJZ9BcTPJFQmcVivDRjpd4ynof6X156PreWAQ",
  "key25": "4ukDoJ82dv5HKVAaQFPfDFomdyJshWYVsWJ2EXmd5MrJHuhT2ZhKvMc7X3VDuWPQdAe1nFDpnifJQrmRBsktq35G",
  "key26": "ddvTQnBLnKNZSuRvLd7HdKyppcdSMQRV4NpFEQRAi9Qht5zqnuoX8JDfxFzzC2AFsrxWG3fbJYGrRpAQ36fXHDo",
  "key27": "5R8BjwBYEmSwMpebt1V3Gbf5sCCwTqCBCabnGwiAWRxQxNvDRUCHnFcAaUQXeUdbjMaAsd229MwfbqM13uznbKyG",
  "key28": "3tkX1ZW71YZDHfJqmMTBxTpfPuKG6qEKWnsaDZeznsE1UB8KZqWQiE49eMx4WTfRRseu3uYpW6rAbBXfSYbmjfB9",
  "key29": "3gZ7iLDYdkbcNjv2SE21nxG4TyHGjQi4p2Ca5okT6pWCDMR6EfpDKNTj4bd9LiC6QoymW6jC57BhNtwC5YuPiKjC",
  "key30": "4d1vddkwxFHffmebFsnqkQa7gqYxfiVp9yFfEBFm41GfmfGyBp15KaJWkNpxpC58sDXekjo5nXQq5DLatcrya8JR",
  "key31": "3bLcZ8Z6DVj2izREFnY1nhNTBVNjCek274gBpbYneqoDAEPsCnSh1srQtVdiS6admX1hxZg4AQKQCViyCTawGgXE",
  "key32": "5FkT6DedAoSbbrK8HjbRM7KSN83u4gqQqtqbeRieY8wCkWbKNANZ3PbHgUPE3LwUtbr4i6UnrDZ75xCaDEnowao6",
  "key33": "2rnjDvp2pHTE7WiJwUG6QFtesJLsbZfXTrS9nvw8QFmaVkDD3a4uqaTk3UdLoEvtFt4BCALZimJiV8FKGh3iiXCK",
  "key34": "4HkiZ1Q71YsjQAemhQ6334zQFpzjs7rG2gn6nYSYewQFqn6Zsrt752oL7JMFsmHFkg2Qg4DW2Rx53cn3NiNDRYF1",
  "key35": "4d7X4CxXuZJHnETD6oGtovGFsbU1fVQDncNLYKh5Bp5BTktSRvRRU7DqB96aSC4m6zPwngvhHB933W5xTCPMg9cu",
  "key36": "4WweqWDmsPRjjP3bxSjpHQqX3DLGYJTsnHZdFDbsoLKiwf5TvCntz7y5CKq5s2QGfAv4AqxUSGB91Bh1phMXvJUg",
  "key37": "2SaCvGFXeHgWi964CNyVjAa4FKyQACw7TEwKFZv3xk9RiEFTQ7baxuj57eGTAH5RjEGrbZ9daKyT4r665u223XPh",
  "key38": "5yTmVAG7Q8oJU2VnoqX7wCAfeZTxEaUjARdnJTeuyNd2wMhzJFxTe7MtQpojFFxGsC3xCgxkXD9BVg6J4h1SGwR7",
  "key39": "3QGNq2DcGdou8cYi1k2jwSAdkbRSHPFcpAozs1xgnNtVZiGXjvnzicR33PnLmRZ6nyuZd2TfsLtyo6raLkgMx6dw",
  "key40": "3JB3ADTWxgN3YfTpdeJhRGT8kaXjdADLQYx4mgq2hM1TrqUZPiYf7h64HCDN3jRjjY6XppEfh457zAJtZJ7dn4hM",
  "key41": "5Yr841yAjr4FVhEbJbQQxxMn8TkYxUvyEoav3cxTjcwjZGbJD3WospGnK4NkMCakTr7QXr7wWSHcsc2SbEqADL5e"
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
