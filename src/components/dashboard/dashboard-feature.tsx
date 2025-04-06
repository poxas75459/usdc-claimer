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
    "3b1et56fZt6HzwVPpnXeEjLL9GfxWzQWqirR6SZQB6znmQKfyyM3AWL1qwFEMdLpyED2AmD3UZnvjEGuK7Ur8WfZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LtaKjkjBG9M4omCu9ePi5zzwwEznX64Cfq9PvgctkBCMb1ZXq9gbPktBzLesHcgs9LUPLuMYimctp4GYRkzmAZ3",
  "key1": "2C1JAeBq5WWAmuEMkeMhKq6gVK1vA7fWpmvYGhTsZd3nkfddNKDaQtkyN5Es5uFMQ1mqzjqEyutVD8GiXseVgMzh",
  "key2": "5YFxA7rbGLRsaHiiSd6B5iHkvFwx8iUs1KUwuXXuKVwPek7GZ5B7CWaqzBfdufzyx1dB2dgaEvdnQZQd4Lw7Lk1J",
  "key3": "vjrbjibsBiSyZrNXsePfQa2d5SJwdbdCmNaphEFRJy8ddH3AH39qJ83ZgbR3soMVK7aHRzQBpheLgS1crbz6jpD",
  "key4": "5noT7zmbg38vLepH3vz6PXNQTaCZEfSNDJk9udGD14xKVeg5Ek6hMTjYG7GHr71G6gau7WpmbRrni99rUwC61Nur",
  "key5": "4UbzRCMc5tVCtQzBSZJ5S3iBwnwbDarmdwqXitZqs4erM5TunshtMbLey4yRwBoY8Z2tnWG3sMuzqAVNJDJuSNkS",
  "key6": "4nkeLTM1wW4pLpmRABeQQQjPTtixmtWvxw7sMAoxYos9Npvpvrd4mUMRmA3MLdd482G2AGqrX6At4L5tJ2bFGY9C",
  "key7": "2bvBMXmNFXmzfWEDk8qFW8ERz3hRBn8Lkv5Vd4gQne3weVLP44WiwsQYzgJVCpJJxg9UCdCKRKhSfLTA486suD7m",
  "key8": "4bg5S1aDcs5nxPZ6RBvaVeX9qvZsfiDmA2R5ct9XuHAbhj2J52sX97agg2QYSbA5XqqcTvPs5haS3DHKUA7jtAaS",
  "key9": "3AsqtyPPHXR6EuMxNvdSbbkJoVE3SyNLUpRHtTFJADsaNYWTwA7qiyFTXodfUQXPwR8YAk7BXfu8Pvneo5Z7qMWs",
  "key10": "3BgcuLsLHjbJBcP9kE2p4iQxjkD7D94WL7672isSzs6otsSYeJcVkZqMeEn55xs96iNQNoCA4TDkBiJVWTDyZWrn",
  "key11": "CSwhnKbG6rzRmaatYynZonqbTHc1C1z6QvfJKFXoCptkqHfLQPwSera77YBZqwPh2CSRuCQf8dQ1qx4EHiQHmrn",
  "key12": "363xxxvLsfttrmLCQJ7k6EnCKuDZSf8Qz1TX9KzK19rqRp6e8Ks9KELqABDwdgfptDjcx5FxCNi4sWdUBNg84rm4",
  "key13": "3hwUG9WBXmEqtqxtnxTY1yhVCPRnVgeoWix5qksPmpUadsQovFVkJgroAuXCrtVw7b1eNJ5kNefKve6XMiL7jbNe",
  "key14": "4RtdJ4YL34eDDoNk2QJ9aTkvQDgzCN8cA1bLGD7sexkT4mzegYxqhkRicmMPcCb37LThMBbmBHYRyjjDNYWX2yqw",
  "key15": "3HwHTDUNVYWXbkT1vjxRiPajm7EU1NLJESproRfYmx1JmWszPYe6Bsvu9awhzkxGQNfVH315p5vcuaG5FbGc6fzv",
  "key16": "2hsqduqSjrLhHmgCjSNn4cEXKSUychqXnLCcij7nwEaJ3wq3FBamPxAyb2SUa3Di7cnnxrCJbYEy7efKoSXaW7Ty",
  "key17": "RqR2HGmGx72eEdospxgw477fLDex8rmvv9Uk9XpwSgxWhmAmitf1d7ZjFJwLLqy6q7tJ2htnGRyKnJjVPTQi9uX",
  "key18": "3LkawqHNPE5zLL2adGZqeWuaDVQF2QcVkSLfiLEubYrJFxzLWiQCEm6UMo97wRaSF6osEntwJCPnR6rwNaNgKGPH",
  "key19": "66JhGHv2889s2iQwCJ6ZWm7E1PyyUjM1VNMde1crpxm6X4bMch9fawHDJdYBfcGSFR4KaA1Q6hx8frJmhL8Fyvzm",
  "key20": "yeQinQTu8SYLbPb1KL4MbULXhSUtNdzdG49W54RWSBjbwr6bmYeF4nyuGieJoqNTXQwivtgoizjeMmcMYcdSP9f",
  "key21": "3LjybqEXH5SjmwWAwNHHN2LtAJ1yHyDVqqCoPEBEKPBHd1mFEpJefQ4t63kVLMtaujc2bWmQPhHeZtdUDdqApHKH",
  "key22": "3ee1bxmpaY6HGKDZysiwxwbkGgxVskaWVD6WNgcyw16XfiCeLU1P7LGA9ZPr2Sx1MjJc4BvhzRe57yZXcLr2fbPY",
  "key23": "qfe5LxvScpQVjN9VdUFfJ8gD793kti73FwAarLrnrgx4YkzKAdH2DGoQmDc2vUQNz3K9k5RqsPfWWEC7K43imZ4",
  "key24": "z92ZEfZZnAUaMUgVX1qniToMgoikDYqYcEHh6wpTPkA5Vj9YmRqHStcdQjUPqSaw1GaURG8cq2mL9HJy1j5TmsZ",
  "key25": "4uaCQ1DkNJyKxeTRkJWYMqC2LS1nuQy6ynK33c3Mftx251aANRpyH1rcxxoPDoD7scvGgRXFbKATwcGUnhPCaaVc",
  "key26": "5gtUSQ5Cuu5ZuWWqEQeSEShXvbwPYuqytYnbVAh8fUbvQrKGKxqBnQTfpMYcZ7PMdpnFWECK19pjSkxBBmcWbL2M",
  "key27": "5ntazSf5ej5xPxDqmT3fjj6CBpELkszb65R9iv7kpNTEENBrvnMVn66EkTCyzaScw7zPd3BqyU2HEDrQ2r5B8smn",
  "key28": "3gnWBdw1TLizbKjM2GbcQatUA7oBAdNyYkJVE3QM8i3myWrJ4RJHcja8J9rm9aFP6rcZACtGoqEJRT5SUVvUzMEj",
  "key29": "43bp55Q6wpWNK6FsyJNfNGogJt38UNFEdZM96fUN6N8Ctc32opt859EAw3u3mVjCDfhEKfpcXgPK6m8bfTq5AhsE",
  "key30": "51BHRTaCKTyJgVqA5ByKRFvEtBm3U591GbvKiVtC8yR9CUvyfRruuLhS6J6ZftUTPHLHxV36Gjtt88NKMTR5fRSS",
  "key31": "2YMyp2Jm5UA2oAQ47Nu1fFWu6M5PJjE2ce3kzwRAXZLKuY7HDBtXP6PbBxzKJh1ygAJcRGHogFbZzLGJMEhHkvuY",
  "key32": "2tsDSfNBhGrZG4miEFwxLqbUwhZgX7iPa4p5enouGLgPRCHqZkkQVwn4ggEbXoYhEGmLcdvjLQ9v5sCo6tuJV82v",
  "key33": "5KVTYi7BmzW2jQNPpqJ9U7GYgBBdV6pu89DBqPuztq5veDc2LnZGoUmFCcQ5qXQZSTMYhFXYWzEfhZNy1bLfS5hN",
  "key34": "3Soz6FAATQqeVkGqpXSZM5tYTAvugDtTSPLxhG5ZR69QeJ3BETNcjDoaGnbJDA6EQfvJxuHViRa23MyGP6t5JsVF",
  "key35": "3rMPic1RTCCkx4y1Acm22FgGyUyGUyzFWEpftYgBmyJVVNkuLezBpF6ZsAdW6mtpnHuG4MTGimY7v2n8fJaWZV1G",
  "key36": "5SHY2tCr6SXTayc98ehDKj9Kjwnr6sP5jcvSjeWb9bEkG7Avb2YxraAMB1MQyL1hxGsFMXg33vekVfU8EdHyjMQr",
  "key37": "2hFwV9gaxxzvp3AAH7oSD5aqisd7PohpybgTVFira3Z492yfhSDT1hzGCP8deW8iEhoyNL8Xn3JbMPRfYxsLbmHQ",
  "key38": "2WN1h99SaNeXRwPSvh38cGhuTzPsufVSinFXrFLnQ2L5mTZc7xXKn1BRRyc5X21EmVaaydrXAu7EgYjNhNVgbUtG",
  "key39": "5YwYoHFKSdW1WwF3AP8Lh1kCqurKp45o4qL4TPriTNY1XPABe5j4NWAeTLUQhpAYQV7fTc2CHfqzkUF52BVrRZhT",
  "key40": "4R96ALLwS6auxVeYgDfUAq8At4BxiKTicFNixpfquiuS5tD7vduTCJEeC59G34iy148LnBuJM1TNDmpCeNLk82Yn",
  "key41": "3HQFxpizFnLTPhGWjqPh1RyyiF7d4nTa3WkUctaaQPMbKtzRJXn3jGqWPaR3aa3ayXbVgE34AzeSocUtmW9UZRMq",
  "key42": "41xzkhhLWNuh9VQaHYqJrTgchGRy6g3y9spmkmmYvgoNRJ4mNGPwvMZ35ep56HQbTDe2BczEoiDQJphCV1RpDy4y",
  "key43": "2XpJCmuUH4FfiVDVBiis4dcS3gc7GoFU91hwKfvEsQMtVLGafaZKiNFwGJWbe7cHxwB8jN1yQ4mWCc1aBbaRLjmb",
  "key44": "PshfiTRQKUBzUGwu6ECTKtaBtv9ARaBAmU54NhxpzQBW7Mvstvs7H9gohSrDtnmkAdFh4ycEZgkzxoXYNJbfv7w",
  "key45": "3ANicibm87Jiz22u2fZbQaetZZCfhoV5KstSRVCLs5LKi6qrv9qo79VGUbsBjnsCqBdvNsqfsqc29fSaYwoVHBX5"
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
