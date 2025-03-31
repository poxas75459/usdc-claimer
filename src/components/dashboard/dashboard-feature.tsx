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
    "C19fgRjbUFATwDZHV41ZVmKxPp2sJXn4Rvky6gcqCu4Zj3RLNojJnmfkTpxFLmEz74SHqLudhxspmp7sjaMjVZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ijFaqhbcbKSKdkaoyfGUZD1vkJSASDLrGGreDKQ3MG5iFob9X1jAFUr8LYYSkkNKfMp2CJofv9jKqmd5hKjktcF",
  "key1": "64EPfJudsSNtftFcSo1b62VQCxhWQTjXystYoMK17DDzdqeibR9qB4xL8g77dxBjnmMUyKQfJAuDcvdFG1hQbxzp",
  "key2": "25qDnCa16gPUFwn3KfAptsFcaYdjJz1H1Jj4wC8pgCvqPwh3rM1DhM37m83vc69skS75WrW1eR14LKCEjfaSQvi2",
  "key3": "3jEKKdXUokCvNVi2cTZVaUYeosTgrzh7KzL133CkDSJ5tRTUsN7wJzdP1MxYQDnJ1RFu9CfTE9YnqdSaTzyTopCf",
  "key4": "3DYCUSaNgyB2AXNT4cwfFderV1bVNEqS3Zq881S9X4YzZAFZq9Gvsi5TGjsvQWndRbTck5ahLXBP1z9L46d8PrQF",
  "key5": "3kYDfQUfsU4rnywt6UCussMb3BFhQJGzMoc1s9c2Pg7EvS9owVHYUcZXSkZS7GgbNrZ4Baj6fNmkw4LsXG3UD6TE",
  "key6": "dNhhoFBRRkYp7RhA8mqW112bVuUShpVKhTdjuhHfxXU1THdjaHF4ewCaqDBpASYiehcsDrvEkaYcoTzGbgFdK8W",
  "key7": "3R6FLcMKurVmNaKXJ71y52qTgUMp6cRw22tM7M67WCFYAJpxVa72fgonAo8Y7CmZFXM6qkR8SqB5jzh9UmD5BpGJ",
  "key8": "5QDAvFHq1ZhEntao55KPL99sY5YY5MBSxR1ZgZhqQE3suhYvsnzbmuiKmRZe9orHa644E7SkhZvvAmr6xUng6xWM",
  "key9": "426ePbYVcMgw2dmAic9gvT2GfTnFR28DtpQLyBPqStFB1N1X9ifTcoERZzkrCdKprBEHhVigqJhwvLq2WEw4byBf",
  "key10": "5FQULN7wDhapJdBryyeFpBpn6DYEKZd9Y5HpFqJ1bxDfQ7JAJ1ZZKX7emFPqCKLA4vXeqGUsQdG9mjjm1FbuZ2GS",
  "key11": "W33SfphfpqbQenr8BRExP5RMoQu4wd53zRmoWXab9y6MUTMmuK4XBQ3UZGUeWGJiFBCwCp69kP8nJSAWn66Gqz2",
  "key12": "4G4GbwStRBMd9GufpKcJRUtTLLdeRh4ZHQBHzUBVzs4njxzzEiy7UYUMKvaMUwqDJByf8SskQY573RxyV3866Euz",
  "key13": "3MgytkDAsaDjUbZ2pWe5gGmddmLgchYd1PSUzsQwmfHd5wnPjm9wFz2VpJUY3LMPTvwDUB2ABQouqS2eNEiUJ5xF",
  "key14": "nJBh7kucYNkQWarocJUBQ8aEn69LATS2We8dcDMxUNSWS69mdd1iNxarfJH2R9v4vj411ZBf51mVGGttFo6ePUt",
  "key15": "5Pffzr9Vb38k9kbqrGhp84eTokTsRoGQT7EDXWT5VPfAaHEwWUiKvMdqSPR4kPbUqk1Vk2oiaqvLPydu1Ft8EVWv",
  "key16": "2H5dw6HxKuZyehKD1E1vCgMxsS99hhgo79QbJFwD6hHCt3Sz21uLxXnucxL1NSXH6eXwKFxQiRNFzY7nqRAaW2Y6",
  "key17": "3bUiqwZB27SCbpU8BDQvjn1q6stCzU3gBkG1nhtKeXSn1TDJhiUxANcp9Nt2hBdUfJJqZDM4W9dwwiABGEYbiBq7",
  "key18": "5D9oZz1geUpko6VzPXMq9njijD8N7KyL5yW8MKc98QDDmWyFNmwMmR8awMy9rPiexmQh85dx7atY9nPoxfYot4oy",
  "key19": "2rPKfxb7Hkf4kaB9nL1s7xczfeM8oBd8iEpycGFVDgi5T2j58BCVxWzAvNRpZDBPUzhaSiTSheXWbcuzXGmyt2sk",
  "key20": "3ucZpDCLKWbrxUgbCq8z6dM33Xq7SQaDQyiwre8bSM4qaoSj73QCoAAoyzA9GPLZ9WBXATn1rbaYJwWRbTvzZydg",
  "key21": "4CAKqtd9LLWcVEEMYWSLkychNEYPAdLD6sbzuDXzRAPS2M4aQxbAmA9M3oC8vio6bta12dDrUZEZLLR5JEmRJrZN",
  "key22": "3qpTnJYBFmduoNRpBVeTSziU2JvbE8osdaT4K9A9htk4VPHGnaCDdEuQ2ND8nCdXkCZctdbn1QgcKgicHYu55198",
  "key23": "yB2jQbJVyd9Zoi9SVG5rsWdo1SVUJ3dwL7fAtQBSKFrKxaHyGisaUecPmqAidEd2EbL4wPvvE5RDJeapxp29oRN",
  "key24": "ERZk3SuXpBGv93zuAQcenHduwP6DXcYfTHNS5tAL5giECzux6df9Y21ZSFVgLWEoQp8ehXXb5EDNdH3LKrNks8y",
  "key25": "5EuxAnUitXrMghGGzuJCJ2sXki9PvQEqMZqf79bMpFj7byC4XCiMuKQR4nzLwy6T6ZdBFVzAbADjVfUArErj96mi",
  "key26": "2n13i44joWeT4nXpbjJvyfpMqTVyeHni8sjewfvx1NG7mSqX2RYyAphdUtQQVvLv6PN5DHFWLviuZWmtWeXt4WAi",
  "key27": "3HEL3otiYck2RFHATeYdn2DEAcrF2WK8RBsmwigAW1U57vYLfB3BbC4CCcz1egftpqNWsN319LTM9pDNWQUqTAM5",
  "key28": "5h46mBxe7F1va8ptLG5uPiSrDyi9cDDKmY6zc7zhkTwzPjE4PNbr79ZWCJuJr5BFWhxqo1ZykLjDejeck2rmQmMC",
  "key29": "5J2yDRjXGnf62UTmnFcF2RCX8i77mwqGsumzm8BG9Dqm6JB9ikxDPiJYiT6N89fFwBb2pkn1qNRNFcZuYyopgRxG",
  "key30": "5KRAL1B3uxPC3ivha4tsXD4oozDztEGK7g2UZRGTxMgXwiV8tuVwcjHpErcvSdiSAVS5Lwvj2bMbTzQkwnu9pLpx",
  "key31": "4RF6ZBaW5fJPVkD9Qu4F7Zo7MhJwbn6k9UJLpazAvttMHcdN9SaKuSnQFVBtVUEX8DzS1XWikRMQPnnZGknz3ymK",
  "key32": "33sFoYuUk6o8VdfrWEek5VhETpQEeeFtpE8sMu6JLLtxZBYbf73NWSvwyPafTRcrdrWrVk48yfwWZbKNj3fVufmL",
  "key33": "2231F482BCEpNGX4BhWQVtCKGGBUUqsfs6ct96JrtJpcUBrfSBpTvXnzNbXEXQNvRKFTNfZz4Eh1GeSznxKorGFA",
  "key34": "2Pm6yZeEqF1HnqYRs8W6ePh5xzr8529Km7ESaah8EYWVK97a1sRuNBLNC6xscjVksxxBro8EMYCEiLdgC7N4Y7vb",
  "key35": "4Ykgptd13n4yzyw1h8tFrCStfuVUp6G8zBznxu4sbmeX2wdV8LfCd7iZywJqUef6mZr9NkF6g86zrGWeHqoDX6Sa",
  "key36": "5rYFm1u4dUrSgdk4k3wE4RNfCowQcZq1c8Sc9CLhHQH3nkXMSs82izJmdSmtf3fMi65PeCX6qMXgfDQvxiUjQSAE",
  "key37": "5CxQdNrETWBKfJfvVfBd7WYmG7uUYtCxHaTtsbfdbi1UL5ZDqdMybFPzNKy4xpXaz8TTVjXiR82xvgjuA9JmbRUu",
  "key38": "56Kvgnsb5fUyFgT3KL7MiijAi9WHTrN5ra4TNLSgTHK6oHqVeWsmd7vn9pHjoY1t62z4YAeNnywYBNuYCTZ7TH2c",
  "key39": "38HeMJVx8u3UShDhEyxTKUZPpRVgjctS29M84yuzj4EH4rtnLwXob8ggaCEZLgNaEKjASJSnFC7EG4SLqqEoEeb1",
  "key40": "4eTFpig3ccRccN2oFRBL9KnDCtxXqmTKjGGBoU9sdGymdEH54D3nUmmejshRHKHfHP3K76HbNyFRcmuP4upj3dNd",
  "key41": "29FcwopsukoBFmnXD84Z2hzrpiZoaTUGaTvVo4EXPMwoh8nBim7r4vaeLecmwxpcoMJifoLVLFCrS9BiGpPv6LR5",
  "key42": "hYzLPXP7jMZFnmBbJWjBuZwZXChodE5aqcS2aXm2hREZiCdS14MssVV6JR1XSpwm2WPZjSY7PFsEbEbpqCbZ5jn",
  "key43": "2cSYmuh4vioZ1PmDbukDHNEHbg74jSbv55NRvJVFTeSgZiuryDADmeSEVBnatHorraurM6rU6KaLPfEeYVmRbaW4",
  "key44": "2yftWnukZo4XG5uPohaUfbVJc27Shn7t5VmBPKMEMcNUEUVFKmvzna9yfokp7iHcKatLjQd2Yv4MAE7yqsAeGiyi",
  "key45": "VAudhE4NEkSZabsDUefrbGkFkBQGZWciK7jhxasJt39SezDr1fPQU66bVi5YM5obyKntLWT1FHi1Y6kcyGK6UyE",
  "key46": "66fkSVj3pAET9NRYyuUcWhL7sikHuLjA6QicLqecufQDGRbEmX1g9FmT7YW9YjDsdasCD6WUok5sQ8jVuY1nnVkb"
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
