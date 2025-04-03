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
    "3KsMEu3THC87QxYcdY7btFVYkGh1sj8dZbrNM7dW976ao2JQCf4yjoyTqCUJoSwgfWaSFHdrLxKzNv1APaKWN4ic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oKk3JQnbbezxCwU9f2ucqa78tsUKAF3fthKAC5DYWCVjPJjsD9iKHTu8gX25BsXdLYnzzhz5U5NgQYpH1EZ92yp",
  "key1": "op83Sg9c4FaHJDz9A3vkUvZ7swvWyQFraAcswxNrsjb6CdzzbNkwAv4Ypg7k3okTeL6Z5RtMGWyxRsvN9D9QJPC",
  "key2": "5Fm5NWFpyhHjPC29DSAbPQKqVjsaWuoFa6iccH7cCZ6aTHwQseWocwVbYZ3c6e8B6cz2fULSGtCRaX6X95bYau7S",
  "key3": "3ko6TJy7AJ25GW4QCfKKsjxqSn6FDHhLq71vnTAHgvphNHuaijv3aAiXbg6TYFTYFmroq25mYwrMDvsW4ogY97BK",
  "key4": "42daNCvw3eE4ptEDQkH4FNy4WXCardSv9W5FiNarXRoR5C5RmawopjoNRs4pnG3Cxc4JzLYyc1pz1tWgWQJeedQc",
  "key5": "Xr5r6AwD1gVJrYaKFutSGXyVoKMGpDzmnKJV9GYnr3iVXd1Zeedp5xDTSa4thW9vPn2hL4nxeHFzvHGKEgCgUzu",
  "key6": "3BZHZVTCuXvSuM1D7nW8tHZU35gB5Rn85mRgSSjRec5bB6dHxH5eTpJnWTxqLALKjzmzEvnmfEDR6PMEcPbVLDSW",
  "key7": "2ZU9TiLxwE7SgF2xVwqFD8BVFTtzQcckRVTU44NaaG4js11sEBtsGoNF6Cr9UFqvaMvZFmJRfyVLK7yumfDrNXqT",
  "key8": "61Ssoy15Eij43fYG4S8Zi4w7cHrTEMPBGC53VVWjqiF4sbPbjEMvKWSRbCyvNQzeFWWHudGAnEYhtWTfh8VPsBHw",
  "key9": "5sjqYW3GaR45CowBk5CeYhdb9o9Tc3JzkNCX5HMhLtWq5pxYi5MBkiwHj1FTUe8M4gX16QGrKayYie5QEEr5iQmw",
  "key10": "5hMx1n8vPLKy9EV8DN2MbwQuQLF5EXzN7SaruqDqppKvLt1LFnTYZAX8EJckh1pFYvq89zq5FaNQG6DHoVjjUTFx",
  "key11": "5ECcu19KgsNPdithwcDaDbd4e4Nrdb5mCebpVfhA5gwXCMLv1jyg6PKD8fbon914WemHqsFfXgiGEe9RzyamEahr",
  "key12": "3RRKJa5wosaqBx67idhGFnsskRCM8CL9fC7xp4KY4ahX39ydVMtfmFMXRcHx25RmsDGEoyxHugVbTZrcZf7DaDrx",
  "key13": "2pkqC2WYRnXgKFt2zwUAWqgerBtpGFkzxDZdtQxxJP7zpr7AshGc2TWhq9PDb7mfAGRSa2F9CN6EJS8ynLnnKxh5",
  "key14": "2T8jjcBGdyicV9DNpZe82kcJ4MQospi4TkngtqbQ7METUrt4ocUoGCckYTYTYmZyhXY5YjRkyMNsWAjJkSPuWFFo",
  "key15": "53Dfrsqw7bHVwm7Dd6kpqWCfouPTdQa52JJnsqvDE3w747psURv1xMWddc7dvyq5kPFT13tpcp1BnSwBFBWxPUAb",
  "key16": "55hMRm4Rbb8GZJjAfExcaRaSwb4ftKPLauMTdjG6XvkwGgLG75S3CHZ7gaY2gXAqDCwYVBgfXFnDV2VNuxAqVAN7",
  "key17": "5WAhsNRPvEYAepWAXCec71iPJPvYtZ1CgYvd3r3WcKecrxnKWDMNwBwZmgxMsaV1Ye6xfa2D1obeXGbvZdUw3pmU",
  "key18": "5FpYbsMsEHBrLUUeB2dMQgjmfVzFFVe2F4PQ4f8g52teqhsXgsTXzeGV628Mnd2U8rS1ykwSdtbxwMeLsjLmzoAh",
  "key19": "3rEGpQ9pWKmpkPFAQsjBn89mTefS2bb7Ramzt3aYAKjLRYwWVEpdeAopZ5tJhvSyouUGSeiCjc6RmYaByLWomE1r",
  "key20": "4NdFua4cyZUH8qEYgwrTHS7TyDcHJNJ7p7hKbn8qg5XL234ZQyfMPrceNMsEzcSLjX7bZdsociK32XXXLk838RU8",
  "key21": "QjizueDLFKLXBJhozFMxZcZZK3uZEqdCSaDMJXu1epe1Fe3EEqV5fDcKK5Ma9B3Ywo6HDr7SFUWU5HAe5z7JwSf",
  "key22": "2FHdrxxWECDBZafePFErY9WBSPM4DWLEZ3pqmn9e5VgNk2NuuEmPzuE2J8rLPo17NvS6MvULrbdc7oVew36ScvYm",
  "key23": "47mPPgg8YC5RPTEqpvw3ououn2KMmLJHbTR3KzU5dVrdoi8eg1DwHJmJzuxvdgHFHFcWG4Rwu19piikxcxB36B65",
  "key24": "5pS4jd4Hok3EMrHBy2f9wA4k3oJU4tpHfPrgiYxL8cDRCikP8yomdErA5Z5JVcEqVH1cNWMZQHm8fiWtdez87yEg",
  "key25": "578u9EYaPdEudnoFRcG3Y4W5c5BqSkEx6JK6fdcQDxpZUx5WJiE6JKCDK2vkn6TjJCNXddpnJ2TTF13VHtSYsiXn",
  "key26": "4V9WX4E7vWthRWgmeyGbpFKNdAAjLvyTyYYKD5UcTRCX9dPHVqdpJQFGNQ8hTtsFNgSiLdues2abmtQEv3Q8xM6K",
  "key27": "3Pt9nZ2Fah8w7j5gtnxQQMcV4bYq9FAch2VF2uCDCVF45KkcC9HfKfHzcjrKeuNT8uuWpQtmW9fs7xY3aMSewqa7",
  "key28": "3rDEYDMUnwzyZcjcaKxhL9G17yyLB8yEqnpF3YDg6scDv9Y3BuAunRU3n79TZHS6NhGdctEQWzieo99AtZ5yiraM",
  "key29": "2tJHZCVZLPvtfa8F2sRS64sLTi3jCeQD8zpNuq2vBj6CcbKK27UF9tfx9MP7nMq8ubzmYTK9CQBY3P2TD2DBmWQz"
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
