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
    "zbrTVRcnVCrNLfUL8f7n5dCoCnxBkGwhUhH2eh5d8KoB3eshAFYRQ9297WmT4gcCZ1k4fFsEKJFPKuZWc1Ubs54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y5GbCDaA4R7fkddaE6JxwPU5RKe2mXqe6fDy2YEZeQundh1617acXGwgAhjZ8CVaxv8cAmx5HrHyKNvWZc2Tqtz",
  "key1": "WSzMRP4UptfJUvZfipSjfaVF2Fcm67paco9H2QjcweF3b5bzuEHEnL4Ta3gNFrQE2ig6rro2YLasFNSJyBrEdRz",
  "key2": "57zp5NLRxGnkyzP5JtdJFdzLgie1ii3TPuSATKKZnm3H4vKUwGVJMypYK5adfNLCDUK9C7UBcenCtD3NhQVUwZY7",
  "key3": "2nQy9qtXNmkySxrEKKeb33casKNqtxujQRTUBBYTBvSUdCjKHe698ps9fw3YeVmACXxhqSXULgZr4UYbVZa5Z8ds",
  "key4": "2eQZUd6jaZv1VcWCo1UeGoGzdpehH8uTPpxhVbdrerWvDbS4pezgBe5Hgp51CHRMRQGqwAypiemDdQqP1o8UkSTX",
  "key5": "3FXxTBDGMq1tkDbiEKeFbMTesxE5tBejCJKDmSAtkhnqjfBHeu8b8x1aZiy1dF8vWTuvx5ib4j5REtr8YFC9hNwP",
  "key6": "4gKWZQwA6NsqoXFMKwgrULpGwedQYKPTPH8PdjWDjJVQSqCh89ti4qrBMmNQGui281THQopzuc3mDsGE6e4iRNQ3",
  "key7": "4NVUDwcTnE8ax4MZjjdDEKGY53wqtzNcfghpbAjsjWuRCcaBbfGhGYJkJtQJUMegfxNRPr9BQ9HRjPmcT4wDxNmi",
  "key8": "5Goe9W7dfVoTiSFKP1PVzszJYxygYe9Wg5RphrqymxzTXv5DUU9Fyf4K23i7kWyo6wcrXGJAwcEZD7szMTgSnUXU",
  "key9": "2LvAJG1e4xJVVGRM37aK9MCYnnoGmo5s9G2cLi24p3SY3j2BK7W11FZEcVTLyYmCuk6sM4L1UW4ah9Ut496W5yZq",
  "key10": "EtjuQnvfYdpdXxqZZrWnmYUqDfncFWXh99px3EKQt55oHuSuCytCyUmDhkYBdyGcqeJfNpdUd5jfGFgPviAHTLQ",
  "key11": "2SSLNrUwn1fmX3cPp7RNEAfW74PruEdksPBGxeiFhPa9oMAcvHW2h5iPWS9Afy9ZqmAAKQakVZddMDZUfk785Kyj",
  "key12": "3VoGRjgm69JGrPvHwed411bTS9YkCGVEwLucygskL4gSvSNj28zhsw6LuCfuHrJSz8dZe6HZvVfih4Av4WjDYwh7",
  "key13": "3M2BiaNf3UdQoXjPKn6Pym4he6oyLAvZJzTeVNazstaf85svD37Sv7JCWaCTwHehRGdxybjr9SK5ZSk6Y5DxgqpX",
  "key14": "3474GwYo7FJtsniZMahsSytoMdoWoHeRsMUGGdvkrkQp4ECiqfkcDnaXwXtqs9CFqaeMrJwjQ62HZWQAzqupqUEk",
  "key15": "3s4XJ7hvSGokbjAW8LDKECFUMRUnzswKQ3XuhVsYkFXFbr2DDCdxX9qDW3G5EhmyyjBK4xWHLpPzDxTN1UDfKo3z",
  "key16": "4P5d1jHnuJrz4DhfRk7wtTEtzNvMMBus3njn8fwQ7E3gYuNZo9ADaYVtz15nqhc7X37oqFbd8GPLJKEokc67AJQE",
  "key17": "5Ef3kojcp2RTwFGJzgcpyV2UgXMuNzA8gdmFwGQA9eKG5M3tcAtYxMiDC7fkPrVaqxETquRcS3rcmgbduGMqeEZC",
  "key18": "5igQsXxja3MHPM3B1LSVTGGHP7ZvyCs1RyiNzQu51uWuEoEZ9hW56bexFMNX3G9c8xgp2htCVjWSoSZVR4TWd5C7",
  "key19": "2zCH2FT2KpfTuYSBxkSY3du9Ai5WmEUuA8uyQfETNjW5bVaMyy8Cb3PfUn8ZtQQcZNNB6MhXt8ypeE9pjXNVHMew",
  "key20": "4YV3pGBcbJvXhVZiCVZJJir9T5yMawJQUehwAFzCyWbzqWJBfPdixkyi3KR6z5QPjLx2gBXhXGLKvUs7YehKoDQn",
  "key21": "4hJ6dnbk2UAENUaFfu6vp1wvz4adkQxHtju5otRDzrxWYW1L3b3C8aPrxPWXV46XKYEc4H9v3XqDmKLAaRNXnBag",
  "key22": "4kDgQWxq2HoMip7sf6dwUbBASfp2nMsupUK9itNTZu8UnH2dScYBG8JG3msKueuSknGdBQWuWQquygR3QfER3BiM",
  "key23": "62PHVuw29XtwCVZw49eCUyL649gMUa3g5oKzJrNQzHp7RMUHTrtgc8wkQSnVk1SqNuME87UY2Dn7BPa8a3N7Nf1w",
  "key24": "5PZ97r33Mps2KthFDaTC2e4VVP9Y7zT8C8x4EsiM4XivauLYUMmzA4bXpfhitdDKxZSBSqTS47MYXsFkadh46c69",
  "key25": "5r3x7dBrHTdKyd1weXGCAiXBWqfwQMAre3444BSGDvdSD8bUSWJWUUTtc3swXhbt4M4npBrZRNZCZe7sjwdPrw6J",
  "key26": "2fKL29BuThJZW7ufEZA3LccQWEucxgWJYZewoWemA3kPdXgySy8vSJABKTTEn49A5ErXMGF3vcdCmwggsuJxAhHv",
  "key27": "38JHDSD1mQAuMwRCTM1vZfTRNuKR6H6qARncgHcYDLSx6tzzrEmRKA64xiHsRcPnPGf8yKxP9obJRALFsAkLx1dN",
  "key28": "3YeDKJ1P2U5qWz2evkxx7AoquE9gcR1jKRJLAtrmMW6nK5fuepNHBMoSdJ4NhmAPXJ661pMfbfXCYaSJLJc2525u",
  "key29": "53qmWaMPx2LoBiwx6ZsUV2DyJZsudwkVwPjUgu4G57UPgjChWNjwNg8xdkVT27FgQ3Y17sWcfrPAmtf4KjSkhcNK",
  "key30": "2ZKLipFTAL4MSRWrQyeU2q7iEsH4HjuimYmts3r8CxXMut5PnTYZALSKyMPEjSy5bfCb4Vk79p8jnSs9gdJRCVgB",
  "key31": "aBcfm2wWukLwCUQyBMPuU9wLTgQEQt6pHqvBVzZDsjpphKybpYEwotytELRtMczNhUzvXv9z86bhZJ1ZKLqyR3h",
  "key32": "QaFc7bCfgnB3pa8akjfhfKWtLsnYABwPax3Sn78Z83R3LjfEYN78zWrCNDFzjhBwNAfUdML1oKie1swyCEEE78N",
  "key33": "3pkjkcdZShGKSyb1M11oGAGii2cr9PMiFEhi1V3ACsymc4NJv6HS71XThYxCWXzxbwSCdDiXJwTbLzNMmrbcv9yD",
  "key34": "3ish33J8Eso7dh2CC6mU9cvAYtrJgE1itFJQSfUzAUj1wxWXfnagFikfsYd1aCYtZ8qGpzUZ11gfXnDRyoXN3d7U",
  "key35": "43aEfhip36LYBqY2rHpu8WdVjBTNbDMuzMJXW6PW72u3XUWKAXCkrAM1Q3WmuHvkrJAmhfoK78R3m15SVSgo6BN8",
  "key36": "5Lhg3MCBaiNVn5TnRLCx13wEeeC1PgHnRVYCqFEpDx86qpXmK6StJX8FGoTDt6RPSrMTFu3NzToYjHWp1ydxVGr4",
  "key37": "iqUHV6UabKLuNear6DW5TuKW779XcVwJPEa5RR7d1RTm38wtiJhdyHtsWHtpPiMmzXoBLszb38REtDUcsQLjX2j",
  "key38": "2thG7g6BcK9sqH3eXdkjzWvw7VsSiwxCpKtVqJFncJqNvfuZi7A6YP6gETxeAP5vB8RSBQgHvkhycNMdnk3Zk3UF",
  "key39": "2mr2UyhzJg27BR4nLxXXgdMSaXCZxEZZBR2jej6H7rNCKCo8Vgv9QQGuo1DxvCaowA9a2cft3htAofahCBn8QwKh",
  "key40": "4zMasgx9KyJdGETA9ejGesNMkYkALSF4uM96dF4bLy2HfXFk8YWe5isXo1RGy2Av7w558mGLhzM5b9vk4gnKd2os",
  "key41": "5r1r8Uc9zdU6SEn6RNFGppnXgCjCdrTUY9F4RDKYQRRL4tNbg7adrnWfzMWQRXC4BSNPWjqvc98RSsxQiwKUKzrG",
  "key42": "5EAupmXm1hKVbScQ2rCq6oTWoTJUBJdWobhm2mAHq4wg9zX6hk9BycVBNCSv4HSVVXnRQgGcxut7Jdr4tbhatgDd",
  "key43": "65KqL49yehcesWrvm84Rj1uHa8rpFuSn3of91WTuyJAfTMwxAhVpJXeo2bmo5oLR9tv9fKLnCYddkDo5BTzP4bab",
  "key44": "3FeVDh3w2UNzGffWrHWz3RuShaKWhRDHhyaUZRCNiYgYU9Z4YJCUoaZgSwdrZutyTzF27aMMrYHRKsWoMvhEk3Vv",
  "key45": "65NCLFg2RL1HbB2KLC4udZuf8fqZWUyPocmr2s8WJGp5p2xe8NFdFYyA2zmvBVrWjcYoiz53863N1F5Xw733BSqL",
  "key46": "bnA1uu4GBzkEJCLpn6M6pHDAwuTj7Ffknj6MPp3yoeaANMJp512eghXSYj32C7eQwjg9cQsx3PQWBvYfNmeDxbk",
  "key47": "4PuUkcoMzWDUEbwMNDaWRDgw2FgvMBZK2fJGtB6Xdj6xvf4nkhhJcY9wYZ6qPjyXnUjVxH88hrPEZPnCpgXnGYoD",
  "key48": "2ow4pvRFfMZGj3vNhZq9TLGJeuFSGQeatZEc1wyoV4b2CafrnCDYNdpZJRJZKwokmnJGPqUMvBTVpmxDwMfWT7Tt"
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
