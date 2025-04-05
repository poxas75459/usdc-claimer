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
    "2iVEj5sUjRxTgmp9iAFtZAZYTpovcrnKnDJvoS5QjoTtPyMuKQqhqkgoFPgoZcygvAxwdHKiN6D5jbYZdnXVCHyV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41qsibzLSUQ3KE8jcsYVeJZ4sZcef32yErR4Ls2ULRbpKNsdcjrACh68eH45S1SndDUWyufS43SeBS96xuoBZ81W",
  "key1": "4sfU3TLay15ccAScuTou5HzyDvmAzB5FNaDxKwzuYmJMXBiQPoprkpvgmR51MHqGztpuoW1Lwi52f4JRdWHK9DHD",
  "key2": "5kFSkd31x25BADkfumMCgf1owQS3QkEELncojiqTc81gkX5Tp1aqCEojpfs29Hi6HGQPNGfTqAAJMgcUjKZnGrvv",
  "key3": "46RoLm6NAF6DUzgBEdnzGFQNfj7c6n4F4HcUdDQv2Bo7Z4Xj3icMy23gojJXwTiHBZ2zxzSUV6H21WbVuprBAFDt",
  "key4": "SwTNWHzTxAKoP8hNfKyunGjNxhigLv5i4HXhvVnMpbam6u8KAoZyCxfjpsR6fqA5QPUrxNxnXgtGHC4ehLxyrkj",
  "key5": "32ExGrv9P2WzhK1LNusHa3dMJuoNazBgCAKFZj58ruLTko15wTkc6PJCLJtkUDRnXH2VTLgEEewars1GSUk9MV7U",
  "key6": "42KaSDoGhqUwgMEXLoDBSR92W6wF8VM7vzi4B3dosSvoMvig7Jea2fWmbGeAxeFoQbxuetgHdExpVJ7nywtaiVUM",
  "key7": "jXfzfzfzJmA4jteEcayajRZtgXsfEGezksesuyhLSyYGvPxddtF4QonC5U2aeTiLvTySTegPezQrCf7KsYWJVTd",
  "key8": "5vzLVceEbpC8NNgxCXEQcvJXsFBbMv466iUSVbjrLCP34C2fchGBgNfqgLLTZYKv1SACYAAwUgCnC4ecjdYNf9qA",
  "key9": "MvdX1ieA82tqA4iHz16UmGr4dBReqpQZBAUAn3Hf3SHsBN9ceDSbpHp7SC6wkoDq1ybiVgUpSjRbeoTBtjfuHmY",
  "key10": "2mx2V9rzsDtVoKSXT5oT7HwEK6zvXV7qGezhZT7JukrK14aEBVQUzyD4JaXa5326e7nJzrgk4wTD52VEhnAg621S",
  "key11": "XqYLZMChMyRYqPjx8fopv64S6SaxBbicqF5P7irzAoV5dUbuxmEfwiZGAvCFaTGiPjDPpy3dWotDQQ1CazGRWcW",
  "key12": "3Eif1eWQKkGBehUvt6CxhLv6Hoo2S2ZeCYET1cnsK5qG5t9yUPm37UdzUNvuiv6Gf4pDF4j2ju2QDzGVYK1XFxYT",
  "key13": "5vDLVF4WKdjU2iBkaoH4U7WdCPLFpAxbMqBhrKN9ejS2XRXvGBpAvAppWZHFxkAwBQLns17ZSd2k3PmFB5v1HbHB",
  "key14": "3dUXNY1Y41aVXnQkhPz336dtD78eZTsKKQd5g23Siw2Pzo6Mm6FXwgyG1BTgBW6ftcVorChDQ4Kss9fJ9JczXLU1",
  "key15": "4BNFwocXy7xja1ohuJ8NbPjDbhbWXVSPASYLUYLP8EdrDib56ymzZojNdZyB5TPUaSsWpp8CH2Psu48K3b8GtAic",
  "key16": "4KoQXd8DLZkWGFpkwSywWNNUKczRU8UVVhsmEQZdAT8nCrTt6BXn4AoHKnfFqFfvrusjrn5qPTWLhZCZmYMedjBj",
  "key17": "67UJ5Ztpi1G6nHkteiXBefrusxZB2bQZdQRh6TedzmnEoG6pm3rr1XvcvRwNfZCRYFceSLgTesmWrGAfQLq1Pap3",
  "key18": "YFBueLZjvDHCnqmcJ8iXqu8ZQXdMiNoMfL1B1m3dyxTSEueAWViB8ncM5QdHMcXR7TRwxpoTfHrrrGpsQ3Usy9W",
  "key19": "4Vd2ynQV679KNzdZWJqjjXKHREqFiPCLZQYboaLvi5pAreJEGU7e5ZPrcSu675u3ybudSgU9Z1kinCc24m4EgJP4",
  "key20": "DyCXobLdHCE9e1vSk7JTRMPjYPfmwazVHQAbxwqsbK33inScgozJYMALkaTp5PraLim2XGtnkgna4dYRbY5MMWz",
  "key21": "57k95nri9jMKoamC3FYz1d8h8M1Yisj3WuZKw5Fsy5iiTwF5p9YJy2Vk7HZSxaBfGwjVTyCUvwBAQB6bTWmPFBnq",
  "key22": "2fbnKQHg4Ny1fXepSBgY79BfsB5fGoAZQuqKReWvzzTKnXsjBTjh6Nr6hXwQeYAAvBjqRZ1z91SH5HhYHou7KzWk",
  "key23": "4fRYwT1zanyYDGBG7HY7LwEzAX8CDiwczue95gwfEkU7QkMVjrpDweqVkEv6koEKPXgBKoos52KvXS9uYHUmceri",
  "key24": "4Muj5Ak2GZ8cNNMwoUhdpqLTE1wxxQRSceJNGK6AQR4A6CtBZX95p8LZ4rMXgBndwU3ZSZWGYXz1WXCY6QMEkLGL",
  "key25": "prPHcm2wM7bYnym13ZqJQNYKv9AB6exLFJLriPBEeEBqcvdpuMTsaMMa85L1KBvmBJFXgDLiDF5uRieimbiA72b",
  "key26": "2ZrF4AK3QrgBB9HQW11FU717rpgd1JVLsxQPf1h3Sfz4Bo9pjBKTuYjyJE9ekHAkBUVc1S9JHQW41mdG3eg6E6UJ",
  "key27": "3mJGh44df9H4F4o3RTNmbHcTM1eGpY5a8os6spYJ6SDe9KsT28strnW6DXJwiGRVqF4SNWsfBLv4CuiqD6TLk83i",
  "key28": "oUL1LvQBgbRCfE2ozfQ4GyvxhSKyXU7oGU8S7vgePFf1EC9MEgFqggCN6dznHNUXftDBF7ZqCzLrJJvzuZdePPx",
  "key29": "3g7m5FHXv4oitFC6zZCz1mgRShwm1hE5Hi5dGYPugaE2LPNscvnNzZSzmdF32AHATaY3xP6f1StvGSJrzNYcJRoJ",
  "key30": "2CkeXCeEQgzx46k44X4b3wqnMp3yxhdfSt5xtCsSiSXcshoPJJQi4KszWweBN4LG4uhof1MJg8ywAEss3roSqN8Z",
  "key31": "APsStGAyZLr2PgSfRBduRrktx5VyhTJuxSAwxiJo2GFRhgoNKT8mD8RJSmUdcZdSmRah1qgeWTiemuBnQLjTKEu",
  "key32": "2iCbvCgnrJTLKbNDMg8NsvTAYeg8hjwF7KA7bUvZTgyRsCyvR8EWK3Vg19w64UkwZfPMGN4cSjRQRYrFosfZTP3Z",
  "key33": "5LQ4ked8efHAuiBujCYfi8PkQBnY7BQ2MKeprKJifNF3ykmrfC2Fqhxsi5cL6naW7Nf2eDXV8tvVpEU6mR5SFvZn",
  "key34": "5Z7cNPJYeinxynadnZHnR9nMwcgomNG7bFes9pdZuVkHJL5jfnSRoDzLYx48Sd3KoKDg4Nwe5zs5GrN5GVz9SAJQ",
  "key35": "4yAXZzTxNRhKqFALd4LtTvN46HsxCtyUNiC3wrABz8TpZ736eRhTBwDtqmpVoJGdvcvDsNYZqi5ngRdkqSEYrqjX",
  "key36": "5FsgxhtJZpBdUbxqYpiXdkVCSk5HrTfGSTNpxdpZEqoG6Pw3TPefsb3EHAAsbmVbgZxc3rRTcyGHE5Zb8wJLbRqo",
  "key37": "5BXrdh1SQzb1fPXZnToF7r4sKPekyZ7FzkiDFf4wRHyf2RD6rxLSU38EhgfPnQXcWpFtpZBKQKd1ZQraG53bBZqN",
  "key38": "2s15hxoRCmPPzi2GRLphR5c1yuH9WV93ZkHdwxbdUp7AMqWwqrWdrADxBHXiwa732StjDSPgKaYFmWprqGzqMQmn",
  "key39": "4CQ4Ctpm3WaTr1s3i26D5SzX4Z9DzPQT5jEXznmGsvToiGbV9rDrRgTBEa3w3AGkxCFpryhrwgyUvxvg1UENcHfg",
  "key40": "65huxRUwzcr7V4Ur43kFNtvqdr6DLfuugrFRiycsH5JU81txCYYKBysP8Afe1zr4ntgY4YrU7e5jip2wzAt55gsj",
  "key41": "3YRf7QJ3JujVjNDvpmBn1bVhfTRjkYpXDYShu7dny3QBVFmbwmuegAAZ7PTG4VauACTybp4TGQbkG5Uvp4jPmga4",
  "key42": "24eTpREMKQHFod28jdj8zuEEYkkMkFnrqGKuyDjhq1eG63eLWnXF8991KbzfWMqhjz9jvZHLrTgHxk4DzYLzajfg",
  "key43": "3m474p8FUuUCqDqUyk49GywtvxUSWxW3BvkMtusH92Zddzj7YoXXR3AdctdzDfzfzmwJKVD2yTAXBdUmPHaqgsK5",
  "key44": "smFf5F5rUcg89rjbBgiuMn6SWY1e3xYpZoaU18DaKQc5tSLUAi9e5NgGAE8Aec66ryk8MuuBqqYmYKsmhBhPC4v",
  "key45": "6fSyqWwKe6paY9hgtaX8JL37D4DooyziaHzcP5U5LvCtYgXZoFQ3Ke6Wv1pidedsBM3jR93GUKtUhmyi4p3hwQo",
  "key46": "62ajYgjZq8KcSCbPrLxFWPcjrPzJxsEqmeDxcZDoEvV5nF129CyyjytXQrgSMKYoSZR2VBse7FWqJaz2FkY4DHDM",
  "key47": "4qv6xYfqakAgkC6Yek23AbYvu1Z7NAC6wvn7id1vGAED67ZaprMmVAhoy8wdHoE4vt7Kzz3tGrsxHq5GJNMySKLm",
  "key48": "35T9Rg9nah1iCAeAsX2cLKNwNta5Er7eWZUDLJoH6mEuBAcaBs7c3WS3DJwafwmkbVFyc6BMYtcJhgTE2zwK4THZ",
  "key49": "5xPha9fdq7fF4cgcDJVe6xDxiCnAdGodKzLs4StwXpZtJ7hkZRJRWaq28nDvYLVL1cGfgxad6zii14qWQP47rtWH"
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
