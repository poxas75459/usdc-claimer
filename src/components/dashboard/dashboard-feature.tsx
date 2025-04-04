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
    "65yveazYefzManaagQhuxu66jBdfMqaXA7Eub4AUrHAY8j6zZ8yFsHcvAwVna7mzWag35L9CgrjGLjSY4P8Gnang"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QSXKDhXWsZ42Vu9nZkn5AwRz22DWhFCgh5xC3wPcct6Wtj1TasMrHC9w7D5gCdtEHeCTwbdRqq6qTgnTye7t6uF",
  "key1": "2vYmnQUCzxaZTkuic4SfsWWLgoFMx4QLFSsm2SyAZrFuZ2UGfvP4gmEgK38txAonUsupVHMuRJqQu6X2mA54836B",
  "key2": "52jF1hubcERcZhtZA3eUSWkmpjbVXUXjRW5Px54PNLabkgmUt69XrAHWW5axH3kemcyxge2GYC1ykmoHXi6go28q",
  "key3": "4r5V7NFjVvah7bjJQCskm3ceiNkvEDVtNAcDFHao3mxcyZPYrMjh3FF3J2eYi2ujQh5QuP8K8G9K8mMjr8A4goDg",
  "key4": "XP719aK8Fhcd15pE44Y26zh7Z5i7a2vvFGFN2qUCWPpa8gDMmrkj3P74X8MyP1QtRJSzWDY3tL3mBSwRMAHADtB",
  "key5": "5SAR4KPiAVe9mARFoYuG5UhDVGuqrViuScBnZTCXxAhEer33pnjQNqDDDTuarXDxUzTsY7Nc3Lg4wA3CmMLdDj67",
  "key6": "2AkTD4RkRtMqPADWCgbyfdrg7NJKb4XNNEo4cKS6aip7UzWb6aPKiGyK5NFgYvB8xenW7rwK1R6snpxAfsqv59Qq",
  "key7": "3YNXeoqpEXc7jrTAPYsGovJUHnVfztS8W8LRM1RLPpPMRbEJfZG75nVgVwQHoaBKFtpENvx3kxwaWdQ4JGCXq1pv",
  "key8": "2SMJD6jpFPjkQeAdhg5dARZBTD4JPL6PiVPtfzWgLdwLm7eAv3caoRqgs2W2sVBFcLwnp9KJC4CU7Th2Bk3EfVkf",
  "key9": "kSQ3U1WvPFu5t3xDqaixGQChkKw3iZBZwvtN3Q7zkabJeDMvw5R7E4skSA5m7Q3F4YEAWNHEtfQvQacgqunDnGg",
  "key10": "4bYkJZ1BFAVxGAJERHnAFvokUbhgNeXnCVuvzWitK91kSnRJVzantNPZyA5fcbUYb6hhvTDTkH1P1skVRLTjB8x",
  "key11": "3GvrHoL5RYeZWYD46VgsZsiRZqq6mzjEKUp4hJ8L3U5SuYKFAAv942PmFoLM1FCo14KZcGumCkewjXUkikFN4NvM",
  "key12": "49erRJmXBgVUd1tpgPHSFGEyw3bujTcLPUnLXxzKp269aCx8Exn8cjQtC5jaPzSmxkD1XLz6k6HAcYxPsSBcEnHZ",
  "key13": "3YpC1x5jgJ1ssXWHTjb5oUCLnBje9t7P3WfxerGuZfbRAYYJygFhquBndQAWoMMxxKAaZk7k4AQXgkwK3euZVDWP",
  "key14": "27LJAmbSAJkQ2U5D6kUhSTYLyThTUarZb91fypBmvo5hw5TdQz4Ao7pARavqvDg9nws665R3dTxSFVSrmkmPC6XB",
  "key15": "4vKYrzByjFD44Ewge4fqHRQ4RM6baeS2jqmt3RkLK81n7k8nWp7A8qiLYf9HVyF9wFrq6958SHLj9ePt8DXsneu4",
  "key16": "5tkTNu59yeRFEkNqnSTJdCVdUewmzHbHTYixxmagWkBvma3kfzqKU2CbvQWZ2qJB9AAxtMJ9od5yJxgMBegwGG6S",
  "key17": "2HFr8GbuW8egT7A3DCf3ugBuWaP7FA8DqhuZUHkaMNCeDczfebP93B2qwAnpNDafWXmANjrDLAAL7iAcdYcpsuyR",
  "key18": "4SZBs7ZeQHniKfawB4JTHyYbKcAYTMHu7Kw9AmoDR4awfn5VQbzYzEimyoX8PBcr5Zcu1rey3JGL7HD8m3oEiwwU",
  "key19": "55ixE2F8VeLvd4nsVTTdXw1ejCmfJ5npMZM92cXP76U2xVUC916R7wYLCGNmo5un4fPNL3yFqY1JtJGscWtG2v1e",
  "key20": "tTXiRMTNCq7R4UcV549XTYEVfsYeUr2uRBZgVn77xZedxPNM65fvym8fSaJeitEFoPCvGBCZWC6uMazAXBg8r25",
  "key21": "3u4qPwcDULM9nF4znBcMoKrGJwHyFizuTCodjnz9BWUEtHaGr3y79AnzgwEXB2aG1EgySLQikQQjmJ2v5NiYEaF8",
  "key22": "4bE6M8ULYGVjFZuFKg91hj71q5KbHBKfYikzS5BwaegdUvbX5kfQnFosTFDtfyuTZ6feGawghLyjvfG6TAtbw7kH",
  "key23": "4yNN8A9UNFqePzJSbhAonMUcXYNhZfREshY4Di6TKKySUugZcxjMD3jkjzN2yNjPs8gRoivhp9TwkUssf6861WbF",
  "key24": "5w7QyJ6MkTQpR2T5GywXrHSfC15i7newFhWDZdDWEUtbWtf3BocvTAsSYQkCYrTHHvp5xcYh44DEb27HXAvpmHnG",
  "key25": "3d9YFkjj5poz2fH6vWCCJZZNUvTWZxxsd1ZXKRQfxgPUffQqBwUPkKN4UHhMchAP7ajmKNJCPk87US2Zf6Jeewi2",
  "key26": "21MjeohFoNqZr1bZopq5h7Ctm7wEVcvdPpEjbVEdAn7T5EvzWGESTR5ixpxiZ3SV33A5c77eWTinwnLAURxcrazo",
  "key27": "44nRo6fmq2ccGRbxjEMEb4EMjhpYAwN9ZHMYQfnctqaGFw1v8AzP2GckzZWCntGqWwFjPtcDxYS9twXG8Y9pA613",
  "key28": "36A5sJhDYsmYwFUKrxbeUzVWF4V4xtW4cmF3XenGdDg2hv7ig7yiDAU9F9eo4PT9PnLafQHo6V1HSxTL3iJbkALU",
  "key29": "4WW8TN1BfKdNkZXVqJNzSxYwbn53e7piMGpAnKhMtaJEq59ibWHtWFbVC9DWQ21yfyomA8wDYfjsCaeE2MqvX7pA",
  "key30": "2TrwsCG58gC4SnvadD5HWaiARb6RUvwdT4gRargi6Bb4eDkQzkQWwr2esNaE2JBKq79KVzLr9FjYTQ9y7Lr1iNvM",
  "key31": "2aAeMyU4NaGQK3dKcSGfLdAF6wboEc6LJCbsRmso1N6QWcuAico8MRGD7wRHGsp2Wzir1rTGQBye5PSPuJ4rPy4X",
  "key32": "55jEqpgM4A7iuTtKkGYaBhHQPKuNr5dxBvH9EUaxsTcmMrjWE7dmwTQDdAPAd4w22JPtwiCskB2Enc9W2eAQqC6w",
  "key33": "5zDdSPtmbc1TWKw5KtSfSMYrW2mCnQKfqNyZ2kYD8TjQozoiSVLUR4rBokydZKpns8Fw5Rzf6yBiBJ8QMdxiaGJu",
  "key34": "4r6vWKuEpi955RQkgpZDHNbUe31ztgDDUqb21cWQJQgGR2rLyjUdDHmdZuFT8SJLSiU2rqbtoNxyUZ8eCTbL2TFP",
  "key35": "5F7vsSbMjCDk7GtTEYtGpYu1qnkqs4aGWZs2kDjfoWTPHpL8gfXuabHprUVYfgCzWNqtb2McZWXrL8SjkRADcYk7",
  "key36": "64buhndieZiJ4aVQyqaWtBkuJTo4eJszE9UcbyVVsCz3iRJxHBw7RcyYCeWK4VB6yfSrV7kfU8RZES7fdbZSEnuM",
  "key37": "5uMuCmJq7SJcpGHt29fysaDu3NbepsXikTc2zCqcxsGV3mnMB6YMADw9wwco8DaPkqpPDAnfmLgdoEhPGEuLBQsg",
  "key38": "37E1wGBruhj9UgrghrS6dhW8nF25ykpJpWuAkcJ5C8C5rtsgYaADyZUUSTVHYjPu4BPdv49xVHabDrZZnTpDhHKH",
  "key39": "39mVByarGqrvQxDwdf1z1ZBss6cywvL4752XbCHFBgBE4TtRus7EMew83jfo5XRZbDaXwmiWA8bpQkCpWhyJbohe",
  "key40": "4RB7euishCRa3m7tHKBxXwMyhZiHkzN7Ty4hGNA3ERbaAYaEVEt1wa5LUXH4HABRRrRVi5mk7QCJ98dgpkRxKndf",
  "key41": "2s7i1cXkedUcnFm3tM1m9dnnWVcidL3NbF8MsF9oRe3LSGRFUtC5hy72huD19wXYLEAVXUDeauRvLQ3zVfJqx3Pt",
  "key42": "62uYiacZvnukcKL8LC5esHaYZnWcyuQUTX4JVsKQyr3gKqcbg1H2wdnCXK31VMzFZaoRXXEovt4HKn9DRyA1Pocy",
  "key43": "4gzmpDx6CjYQiYWFMfy2j4RzL4n8xzMuxgtNd6CDCdvhYiUY9XQVRkpPnVPnkMbaixfRGBJJDNCCubEkQjz4opbe",
  "key44": "48JuexVzjaFDsFGt7YLFcAiwQamrXE2tB7Xd8dUAWYDcfSqPVyv65xxSN59VKeM5N5dpQ1wHfG4TrytnTYMEhZiY"
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
