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
    "4yztvknoEAXa87L85saLenSAy9hfwRWYLw9DEFgq1TkNaMdhq3co3EAxnEv1LcU1MUAnRjtbbsmkSvNoqwZ6Pjip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ixSrCeNyHiX7kmD18boK4rJTZUPGDqY1N2xT9FSLAZv92ZyFFfm4n7tjRm4vJM4ZS7oVRRR21GDpkV8LuTLi8Zc",
  "key1": "2cCmXkAXZak7eAMWrhWLB6qYkCaWJEJgW3wEw3B3Vg25rBs3rVg8gNu7pxmh4tBdmjHkUnGgnrFRuUPjPXPAgcpH",
  "key2": "qCda7Wofps4kuqUTu8n5fUxtkmUi6eLqv3kwARw7Wkgs9pCiGH6J21ykvizv1ukdsMF2RVssnenrFfNy2TkaFq9",
  "key3": "2kCeRJJmAgjczFZTdxLcRafJpV1bKRZWEJPNQuGyVZq55kfJMEdTpAQSYcXWwsWgUxs1Au345muAWdupv37Ajsw8",
  "key4": "4825J1RcojrJbMtC2cZQVQAzm5eqZLSjYzJmCZdaGNYaX1EzyMyQgheSEeAJNwZQFMRPocdkDFXH6c5CBFjGJ5sz",
  "key5": "3da84HKDtTRo6RjNF3zJfbYmpof4DzH1WQwh5LYtP1GsRq2DVYYgtBKr5M42uaKSU9MSiHmqA2HWUeeMEPxrBbKR",
  "key6": "3XWJ32WqD7yGmBzUwhLKHmSUkgKQq5NqfCFtyFX32JqfKTTsKXkFPSEkFNhhNzow3rLvVE85n1USu2FcXgjzjYYw",
  "key7": "3xyrYS43dti9r8mH21qQuexsSV1aPFF31UN38oE4ef95Y3fYRrKhVz4WhVo5Z3zqJRorAkBfY7jda5T7HphjLXJc",
  "key8": "4cxQ3SKobShC19XhtsZCfWz1H4HFdgxUGjZHvhsmi8VYPKBo7ehWADXheTvrkawUj9AbLSvxKQhDtygdSXhBF6Tv",
  "key9": "2wS2RK5iJYH1KKQM19UPSAjGnh53uZPeMoaHCpnf9KA9MzyC9Dzr1d15qyxc5JC47yL4yDL8WtFNTx9uy1oWHAdw",
  "key10": "57i8cyM4iw8Uqrk3hoHVjXmWemQ6Ccq9HFwCwoH6dxcTsC6mLhqjQKUVrYqRYeSiM8TNNFguvfwhbQq72aktDgv6",
  "key11": "3FoF8QfCpj2UL66g7xJzc3z9e1d7QFetn81WYLaoJCfq39FpTAVr6uai41LXZAgQkqiXhyJujo9Zvxbwg1wz1X7E",
  "key12": "4fFVqi1rnTxcWoAjwGP4RwwxeCn7CZJjASbRqEm3zyzUCKqFRhJtoLmakeehETx8NShmJk9DQYHqMVd5vyg7nTFD",
  "key13": "4Zfn89GpPn5LAyo15ZCLKz543fm2yjNCzBbwP2uMnKFbSU6utTkXXYouo4bhmDP472ofqaqcUNF1A3wKAAxowK5Q",
  "key14": "5snbEsthGcCzrgQ3fv3WNYM1dTM96VBHLeCKdyBFGYtgz7gzM8FvtHTNxzKKj7hoJUcGjVaMfyPtphp2PWbaAJcN",
  "key15": "926SsUS3yq9oGNHMFsdeUvyFS7dc2CADj1ip4PLsuV5bDa9tmB8pVsMXcAkXyaX8T8957AgRDayWMFmjJPz8h3f",
  "key16": "1sJLNz4WePt86mBpGmvJ8EgY768r4dAGbeENWQB4vLzWr3WzCULDczmTametcTU8ubTuCkNQ2Z8dkFRSai483Xi",
  "key17": "32Qq8Pt3sss2JH2bcZonCzzBaK17CiaUhBysCaLLrBC7SYBVqEBdKvjkzJGyovrARutBVU5C1eixkjNTxgVBohh9",
  "key18": "5HnauJhmBToELnCvbpJFSRdKmfptL955xwRS6KHci22oDFMPvYAEN3yVUFyKxMUc1o4Stg7outbhF9uft2HaMTZK",
  "key19": "5FPvhUjcMNTFzKq1c68GZr9EzdMBwwa9Df2d49uwHdCF5PkSZ7ra5ZcvazeNftVwZejMcyV6ng4Wb2UNLd3W7yJ9",
  "key20": "5BDApfSe83VKEqLvUc8Dt15zBHLBCx17Jf27gyfESpREzFGRacw12raNHYZByZXJz7KhPf1Wa6sAyDY1US8D1cn6",
  "key21": "3Dvm34S28m36kDcDNuD5Lb1HP33cHiJggh2hDmXbf9VKNjuQydoGPX91phQALaraTKLgtwMCQukdukUY5Nqtm53p",
  "key22": "4MJXDHcBU9PGzatyb8TLnoYhTUnnnRTAZBeHG8RknaCQk3yNoG8wSq4rpj5mg4jmY5huAfVAud5b7bKcGFxcr2AS",
  "key23": "3H9zGaM8CUPDQxrGzTXQ3jMmWLUnrX83oYW5SzWNiwx4bvSr3QvhfS8So2Dzm9kpPcymTL1qYwPjiWerd4TBvgRZ",
  "key24": "3KTVPcTXxyhBFe9vdDRSTM6yYgN2VAVvHPkiwywtRvVfgA8EWvG9nFZmz5y3y8pJmnT7vFKv6Eq2eWXG26xZhRY3",
  "key25": "P9CeXdEtgwvNVJKLRVs4gdt89ChRd52aRAbsompBLNBnbPmM8jvrZiDz5U3SXZGHNecCcZykqZejkFxCxGeCZWo",
  "key26": "14TpuHvfkXzRTyLGooYv2eBKvWzrHwSwExuGwjBL5JVuSKeuUCWRqPErFHCiYfEBSrFiXhc1oW3gEq1viUuZvBw",
  "key27": "3JCKJmzba3b5r4owXQ5pcYF7E4h9wy4WX7PigPTJ7PCTEARBKfNW98qHDfgTziMSjgAYD7DKr4StfgjKhjZFfc1K",
  "key28": "3j2icXECmS5SN5YCbXSWN9cL3ncmXJuBGSfcY5hHormJ25H6rpvsmhQpvScRT8CrcKCsx1vNW4BtzoAy9ZtSNqt6",
  "key29": "3yXKBcC7LWvrWHTpg7wjeNjXCyCm9JjgHkqaEfF8gVsdDZrWF9c21PGDFhAbC3UW9VxixCEp5QRgFKFGXKhCk7wX",
  "key30": "3RFnKnfuWZutYShveC6RE9URtUKiwbhhQ1MzWwkXyuwM4BazDYHqHy6NJ4FPjWnb9jFL7NRSCpQ4KTGTJRpDRtxD",
  "key31": "4uxgB4xeQx9cKjunRNe8UphPn7nWro7kQwaBMnS8ztUMtAPHGW6zcn3VYDQnZGHFpGkSJYqwTJfBhTFF8PvVH6tm",
  "key32": "2zfnEUh64xpBRUVbrauYpAfcfmKyrWz1H5Q7axZLayJv35Jjzi1h2fGorh4fGCPs8XhKk5xShcUgxodfi8h1wkPK",
  "key33": "4Gyagva8fuzEo7TRp6hovPJejsUZhb6AhECUkSHbLcZ6Brgn9jesYcHhSTCMWuR1iDQ9Mfp1LgxT4vKr7aTDpx5f",
  "key34": "3VAm5LtMMqL6oPD44QMfwpSNKeB7vvu4d178ttPNBaVQnC1iBWBPG9L5Hph4RVjiwYqkFiGaivQL4DZfLNmmMQfE",
  "key35": "3qtKctnHWotCVJfpqpx3UHnbCAFysAuvB847hDxs4EZoE5McH8s2kCM1MPpom2mkZ6gbYGqcQpsjC6qfEGUqUJzp",
  "key36": "2A9D5y3gwiNb7UbFcT9vFhbK6kYaMFQuWg14fpSZPLYo3koPMrJYZqVHSgWgQgX4CdL7vX3JZVPgiuM8gY1yUu5N",
  "key37": "4Dk917352TEEmrb2ZEmxva59FME9L3CuW2fH36R5u3pA8c9ZqHHrgqwxxBt5xdBnZUsWy6SV1w1pjyb8L4zhLAgF",
  "key38": "s8XV6Wx5xEaYjpm9bWPkK82FpTmyZSn8zA9AhbXUPgPuC9vnypeVM344ngLeeK8DZC6oBGYBKuRqNx4LcdxSUpD",
  "key39": "4gY7YuuQWo3ArWnjfM9uKin84NiADXzwKrWRYBL3uhmUuEewWiuHrs66pRY6nAoxtZe2WLMgZMjR7EKLyFcMywHF"
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
