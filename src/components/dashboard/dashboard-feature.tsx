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
    "3mYW27Nu44Pp6f9LgK5YE5DwxS6fghdQejVDdnj2euCpsq7a9g8yozuLBTgARHsJbc6SknK2BCTPM8HWRFpE3NHV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53LjK7ghFqK3ZLpmGzp8AfzCx2vfmUTi4N1DzeAuFHNrLyxFs5E3AmNSks2nXHiqM7MkmnhKDGQTdRGTkssKbaCC",
  "key1": "24LRVbwC3hr3CRp2EZ9CY3nm8svjXUXneZKmdSGVedENxtdjCbpPvMYW2buLBXwmiJFVQb4BSuqaftLm61JMgfWK",
  "key2": "2PrGkMUS1amSEKD2577GVcg2r2rtzze8G2RZqVXiW8NTsDsaUsdbMptZccSoaXFLzfVuNs8G1Ptkki2eJr69vE5d",
  "key3": "5eLaoXquJ3hr2ZZPdPN3538mekjT37MjffpR9XAaz2sPLoh7CbZim1fJDsMgDzNw6iRt94LFgdSwbqhzZapEU5zt",
  "key4": "62As1Xjdn9vZWvtSN5ALvTmyYXCdg98woWjy3Cig7y6LWd1YCMkJ4rygzave5fYjsJQvT71v11KgJmT4MxKhTJEX",
  "key5": "3kiZ5FRag8v4L8gKiSPAgkdsVmNBaCAcHr18brGJ18AWPK2DG4AHuHfgi5DPQfQ2XhP3n3QjQ3PDoa3jDUoi66sQ",
  "key6": "3EiSx7mJ3eKLgQrZAtZZSPrU2FdU3DyhxXwSJ2jN2fie1EuQZ3t1jwUNZVBpWcxxHFJBNJjU3E2Y5zvbjjekBLwC",
  "key7": "41ksLvqwJXgnT1GcFqT3ERLXt4RyALiUqsnsvETeF9n8QmuSnc6mQNNkzdsEV57za86oM5SwdsGffjYMJSw6vsqZ",
  "key8": "4zE4B5tU76Enh7bAyHU6iXoio19A3WsMAT6V5dLvh18BhZ5sSPFb6D2gQpmiWxhmsGhbQQGUXpU7Bw8iB4dZq7SY",
  "key9": "ESsW5S5aLw3Ef7FntKDHhtxC66tJLkPzXnHxPExKCkXL3CmB3R8vjo1ARfSLfB3gZ9eaJjx1UkPhkehnRiNokSR",
  "key10": "3zVWg8HyZbRiya5umKwUqitUiaDVbXZnCLyVR33MVAN8p1nRi4nfgSG63ByVGhNDxTkPBeQf2M46ecaAngpJ4ntx",
  "key11": "3QUjKnU3uUbHGzuYTxeqYWHCkmsvXrUPc84zuncu5cMqpEYbH9wBJ2xNXrVBzXdvi1FbptjBoPba66s2p8cxwSse",
  "key12": "3CLUuh7JiDZuk8zsAvgmMLsCUjVsoZsh6e12rDgT4t9UboRHsvKzFJwLDCb3hPRSuttNSE2Mhyv1cYWsDgcZ3KX",
  "key13": "41dnd69GZCpdcEoKkmAMjakipyj7dZZ7cdjYwcLm2m7L24Z8qkLTefvzi3TN4XqNLuVUe3L2c4mMhiM31GcT8wij",
  "key14": "52TVzWqGE1juBsfwcLYXU9hcHsyU56La3S2UwUwZPKLdeYCXqiexrrogsobNETufAvMyKQAD3oTwD71kFstvFa5d",
  "key15": "2quTfeWM4sT37uFkupBhxeqjiD7WbfKXnEE2eNdG9rd8ZuAHMbsNW2kerjVzyUgGx71sb58ykUqLDDAwH8RrrS9E",
  "key16": "3rYigepPKKWarNwDszxtLmUdczKuiZHSNDzpjEj2ktvxta2mcfGbvKHWm7as8gWHnvFvBnKn9DW2pmVEso6yCsvF",
  "key17": "2vQJWe5nE4tyy8kQVcadWbjZQReZmQpZQsRFmtFmBFSQue7isVoXU9uU326NUxQUeC2aZJHkyV9NpEdbwkvZvQH7",
  "key18": "2ykWg7HiZi2rayzSJrvnAAhU1h3q3i6WwBB6yVimW6zB1MPeu9XLPiNFcJ75zgKYuHigetBYDWFbGWpC834BjSg9",
  "key19": "5mcZuTn8EaJ7D7bxjGyKHfrFwwm3fmJPbrDuypQJwpDeBHk2Z5kLMLfsMexoNfoLbMkjZh2sDzuMeLa4Beqz2LeM",
  "key20": "4sbgHCSaFWTz8jDh6mF6SuswrSem14V1cgpn1dLiRci9wcZPiqkbZ3zmu6WYE3TkL77DggX4oX9K5bcdvcUxNwrM",
  "key21": "zbtXeaFrP1TpiYPuhpkHuKtggpeiaPYBZbBkyQAvRc7Cug2SxdVqSGgbCSwp4JoxA3GFf9XqT46Q3vESF5X7few",
  "key22": "4nGenX93z3qj9x7JNt8n6am5691APLDDDZK3m6davLwZFT8S7G4wMEbZg1pvvQhV6X5THCtgXM2p77CwmdpTiaXt",
  "key23": "2LBqYKGui57MCarKjsgdjmM4JJADAtoEy53VwFe3WcQmjRYK7bB3TPo97ettjdvt3VVRLM75vqsuYnnTzvaYnLiN",
  "key24": "4SdE6KEc3Yen24mMJrwKTnj3DSw5gzm5ihTx1JgquBKXoA4PPXqzMeujMvSPeS7R4tVkvvjRCqMUGFYWJ3CJDNWG",
  "key25": "23L7i1wvx78iHD7kWde7q3wpbDyGkWrswqRLz4N5McwcDi6NK65YXaj4kRbAYbmnyZfm3vz7SLUPj4dT7aHNtDJy",
  "key26": "qWwarFYk5GtXgAdE4EwkvZaY1oCtBA6bjsFikymjsmrxg2npg21w5UbXJDA4j3cVtdfqCiamws8XXgp8hP18j7R",
  "key27": "24NKkGtfGirKxDT7VCbS1jWTuaCTR3WotqWiTXtdZmntM8xDHFmMBjf7CN1w23qnnrC87E1JGT6r4bLDfm6vf6z9",
  "key28": "DBPkBZw6sTHSpUMoY5dsr99HKT4rf4HfGmyRCnfAnKSkso1vAVuzHF6NeRByipRsHsA4FDrgD6TNBbiEk7jVVvm",
  "key29": "C3j9QZyMLVMVi91a5CJaq7iBviop6DJXRt6upUztPvEbFw23zf2MAuLNVrguFRwXgYH348mNQGPPDJWUVUyyy57",
  "key30": "59JN2h2SbAGgVS6iZijv1oRqhP3TiZ7YNbaTMnFxfJruTe6Uw7taUCGkpGg3zdtS7qxMDw7tua6QsJPknpJXBwss",
  "key31": "5eL1kSDsh3UCt32WvxzmaPgCJiz8brArHnLgpVxLgvr2dgpmZv3NZyUgy75McX8i33CETmYduzVTvisKt6tNfdjH",
  "key32": "2VpYKP1Zjw4rzryYqV5pyDSHyka6YHAHZprKVR42qyurQuKNaQvvfASKPUutzp2wk5EvS2yC2dp3XQcY3KcgxQaQ",
  "key33": "2DzBawcAFWVmqdtNSMpPmYNGJqxfQFvrn8ZcdGpgdUHKnkswB2JHDaTVWuZ5x4c3igPqiCexaVzzYmEwcHbtFGBS",
  "key34": "2Dju3TYKQcP4r9bLRKjDCVHafsKdCLzyCo3MAhv1zseHHqNhUk9HUFCjkfpkHhVXMQ5nxvMxTmcUpsVtZzCp6Woz",
  "key35": "waLucJ47yMLGfbEWHFpsGvSnSGnmV8fEQMqcuNCpYY3nza7pYqxeovwGM28fZ8wUSnLf4AUzSDbZ5PwFYBtYMPa",
  "key36": "4LEZZUMaVmVYTEgvKAs1FiPDd8otKHxNn2PZBFh6hCo3rJBXUuAdR2Xc6Xv8hb3JCjzzSY9axurL3EbYva6Xbeky",
  "key37": "5GKvzvdw5jpEQYunybDJrMZMJEajAaYREJ7tLnWFbSUanSn66ivbzPcoGN2kTRswzoV1gs3Vix2rQNYwzac5G9SH",
  "key38": "wKqMHTyX4fTPpGKoDVyNkwMMjGFDrwiSe1hSfckLxcgjYMaQEyPijRgr2PnjnYHKNd8a4kEexupP5Xh4w4cm3B2",
  "key39": "3UY8gLbA8axedGc7CREZyRdY5XxWxQnc29khSWhNkF374UoKybYQwEYcHx9GhqhBt8cqdtSzWeAhotkCuCdzL1mB",
  "key40": "2U5uLCBvjbdKPjMi9XCEZXtnEgoMvwT87nE3PvC5RCHSvQQok1Jssm63EMvAQ6xZShnenn4LqJXT9tePDqLvenbU",
  "key41": "2oCior38nNgEtfLJyb1X3qBDucRBBUxYCqZhB46zdxsBVdeeSYi7dNX9pgmLdUs2uJR2BXVsrW6YStX7UvduJAdJ",
  "key42": "2fFcDuoKsTzAzntLXd7LhC2eqQy6akAozMKypX43BxwudGJVdByjdQ5rWyM3vud1ieTqVZ62hwiixzx8DEoiqbP2",
  "key43": "3XanmArTpLquN9q3b7Q63KqDcuWqzRNsaecXQe74L5oxk8VsRdxNzgPFFTPLAjenEYHkSgnqkPgu43TLyhGNAnk8",
  "key44": "55mQEurJUy63Yuu3LbZy2ALJUcARc32WtZTCT9NAaXHbm5P7H2GxJw9BqEh2D4aHcFZCHyFaefu7WsXmQqJCNygD",
  "key45": "3f7a9CeNmwfMrSM2Rgd7r2gsEynFpbBTMFrV1rQjRoAf1Yu1vZcX3op3LKHMVNuXmsxBGV8n6vJrdc4JzFbXG6dt"
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
