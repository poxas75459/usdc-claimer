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
    "5JrEibKaPHS8GcvkKBTmyRjLSnR2CU5XtsGocFGrgK46o6pizArgKWJaEroCJt7MRNA4qDfhwvDgUmJzkRNevUS6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aeU4DWDmPwGuKEAB26KN9TbHLBpZL6HsUwZbKMn9Pfhe2kPQRh11tJfok6BHT27QyKnoTYGuC5pBtvY8r9ZzkB8",
  "key1": "4meq5XTYw8vxmV1cy8jJ9x5RpurDCQr8KegwSeQiN93peQNd4YkwWPnfbTVFmqDwHfhiEPreZAQCBuPJn8z1heiN",
  "key2": "3uZU8RKETRn3vhhbGA3neAWBwMeQWawSJZ3krBvE3PzGzjZhyjGUoaFMVsfxJTvGyk4VsvzebHhZKsKDFw86U6Zf",
  "key3": "2F5ZGWK2t37LUhyDdfKTf6NbS8W1aimd7oTDuvSAZ6UqF5PfDkYEENwLU4Mh8V5tEr5P7kB3nVUvkirnAEAe32ae",
  "key4": "5WBk8CQ9wnAPSB9uqmubqfQmzqdBg2sS6EG5Dj8PuUB72moD7LG2JTRxTvHZWcwNjHn888hqrUjGjwdXp8BqhZoS",
  "key5": "2rmfYvVnRsdNWxbgiGWGoupyMGhEGtApsTZRff9yB6TGx2xkTpyfj5QYpPf7XFE8yApRfZZABFqyfQGtuK6bfGZG",
  "key6": "48hoZp3RnPQ4EHinPvg5gNjT1Ui69gmrkb5rcC2VMdACviTyLTwfB1hsAzLJu4d6Y6KcoGAgZdGbQ3kbDZQBMeN4",
  "key7": "4TJYYKvn2Two4P1pMKoGqQDmw7SXvWt8PtTK48o2WYDj2rGkwxMkX378Y2TAzWWS7Wd3pBRrJ28R7PQY8uPtt7id",
  "key8": "2BCgb6LL3cXmYpgeBmJri4WCxc8N96yVG7yFhGo8ZTVoJEq6cuUQjkg3AxK54b3p1WvNan3oiToVmFHLhnZPcN18",
  "key9": "Ep4hoHeFms3YcXheKXGaB9kv99sryVhQExhmqgFK28vHP8EyBDfy65tnvJDziEY1sjcPgY3Dj9eD7KQxVo1maSi",
  "key10": "4e75fp9QvWT4fHisGpC2tKzwexXmGTfKMHi5tiC1VzDuiEkPNxQusT69HMDiEtRz4mSYxBAcvWHZweQ8VofynvGL",
  "key11": "BcQtdE6b9CwLvv5gHGruPvcQNYbVB3JLtAJrEULJWFYTQohzYKCrAWbLujhy3U5UrEK6w63hswK6EPikEbqcbH2",
  "key12": "57E2h8gZbFAZLKPWkv1NrCTot3kmvM2z3CzyuiqzVWpiW9NTiC6CcKqCnZXeZvxHQnZQiR2CTw91VMdGTLi9JZJV",
  "key13": "eMbE5tJ414vYLVJxkkr5QK97BnnecY7fvwKrkgbRpyjYo5Lk2YrozsCQMt22H47fL4vaMpqMf4DgrHZmFqGaun2",
  "key14": "5PnYeJ47CZEidfTwTBA8qYFyG5je3PxQbhTWnmgbZ4F1dcN3P43ZAZi2q1dbUttCEqFrd9FJAaA3vEtLXpdf6Kef",
  "key15": "3zDN9eZdhgoDYVbsMxKxBxjdzQRKQapSW1r5ZiKQ1Roh9LG3bnkYRAaJrZdezF5HUv3gUCB6MW2QyuJPovp6L9Kr",
  "key16": "5CUt33osRbSMvhKFJWKaKuqPcUWWiz3VwCoX59r1wdJBuaioq9TKctQ3AGu6sTAFaHt2dCer6WgoY4ehMcjT8rJd",
  "key17": "2BVe7Wm8JtFVQ9uR2Etuaz89oXWb7pRXKTeVzdev2GBJcghE1okxMHyHCp75XYDWnCJRSEXiUVFKT25WqwUntmuP",
  "key18": "2gfKg79kqMmWyk8vMQSn9Mbc3Md3EC8GmcSnCxZ3dR5ZkqCrv3yvjFnDZ9sMEhRMSui3mua9yCgyLcUrJYyPZ4NA",
  "key19": "4oKo2ZrCNtkGhZPsPv2Jd4mAxftU1fBHLtwV9nqH1dwusUKwR75iUgddk5RwxVkxuJfudCsh4EwAaLsczYv6owjR",
  "key20": "3e5DownMZ3kZtR7Cyjw8mhphjwMrVQPpD7PBRCXG19CHgstivcPYFLYBgRQW6HiGWzabXoKVU2FJrEVSCPLPxNhz",
  "key21": "4Z5qXfRBD6pY3UwzyzKA14pSW4CYbXHok7w4yQRDt6sGcQVGYTaZseaYLSwtXHA9zxn3uU1gH16GPTzvN9hmW76y",
  "key22": "4DcGPJ4qDDeimt2z8MrhGzgbMR6qs66tFLXKfZ19aJtkaJzH6grWQrTt7cyj5986zzGugtmc6S3V6PNYPMWVYieX",
  "key23": "4Z7mnxHmJA4RLhERYaVCP6xUGZ6ce9NxjPGWVxg1qMFBpm9nMsLjWYW5Kq1wG9YBgNJD3AewKR3JYG5nCSPgW9vL",
  "key24": "65njaFVyn8JLXvJxyJbhBaLWyqbnEXrLVtBt8eREJT9ehJgpyeNnBVqiyFXQm88moV25nA49B1oJ3Xj1Ti3XigiK",
  "key25": "2vQ4BKLX7wY1PjZMpZAXuSyXYCoNoejbcjZdHT9fBiA1UmyUb8iedbE3tL1f52riCh1y6KK7nprQS9Q8LNe83aN3",
  "key26": "3JRC9uME5M54gxP1xXdmYkifhZEnpkZ5wwyFthNapEJWKWSPLxRFGygYxgFm9fPyE5V66uMGZAwRSYJXajnHEC1g",
  "key27": "2NQUwDrLAZ8QiAyPG2MSic112LGunmkaDgZbYtM7jpkruP7sheouvATvYEnQbHmJ8NCzAUn6hh3niBD1wv4X1Z3E",
  "key28": "234RDrGJ4Mcd9dQ4UdfwPGVv4F7oMo67AdUud9HSw1rfANgYm9ttkKak6KunnRhDo12mYpGYJaswXYYbfgAY6zng",
  "key29": "3aNiM6ddKAiMYuVSAcFkkSv7b4g6mpaDYNFmN2EpddEqcitCNpbv25RaHLZ7ZCfJt8bLDyjji3AVQmYrsBjM9Mhw",
  "key30": "65pxeH83LLQL6va8LfGSCwMnh62g2s8uMfnRdTPTrv2rBGoDWcGABEem5kEFtstSsEVk91tdqZPH76rXTai28tpK",
  "key31": "4vcixjWH8PF2yM4GjqW9C59qT2ft2qoWrF8jCXC5GFYWWB43GaVeszQmospC5a2eUk864sSjcbGXXDuqqzHcMmNE",
  "key32": "4jNMoLD6EtKrZSiXK38ebMyBETAj9tH7WRuAsHdgpvfEVztbfJ2uxEEsWjC6qZmpRHbzjYQND849N12adGa2bNKH",
  "key33": "4Pj2VxxQQA61DeQ2WbNQTCrQwe4A9WzapbMLoV14iCQHMr9btVtLdS6CG8VzePXaLpuY79jvqJjKcqfUueHp36Lg",
  "key34": "5P4EzMVZ8uBJjbpBq3B66wMargRHeKBtGhpEda7ofV9MkFPbbZiL6LebMW2VCH4eE2evW5zVRycNJ74oZrUBuvWf",
  "key35": "3jwq7VMkseigtwi9J9sMf7PLuZv3DJKGR5aAq5e6NEfFbRUZkSQzjDkQke9WKAoxVwHGnR3WYBeBXYcGoPK575MH",
  "key36": "KJrnvmZTyp9RfEXHFpypSsYLmwZf5CeEBU1tCePskUFKbdrZPNtxWeKpo6BJqEEmmjADBXhW99oVSutF8Ddu3AF",
  "key37": "MjDVnjBN5g7YAaVP5jzRHJ6hUGx5Qh1wff3waXCuPMGnrAWAuzdQ7hvLxGqP6qdEQ3hU3FC8oF6VvwkvgKDvww8",
  "key38": "g7skTQ97xXkaCf1hqPo39ScFicFKXNMKdd441b3TRMtmMXyDNPh7fHRc2tvtrxxzyEn8tQUGZEC9B3eSGfX6zdy",
  "key39": "3qa6jeQQD6S8tEHGYyPs1TYiMwbYzqdwnLgDXY3F7txE1R9krvUyzjRp7eoBmaVwrGh6xJcJTJ3VbDFfGj3vTENw",
  "key40": "p3iMv9PzsrHmgrKJhhMEZhgX4wVvU41Xk91vHXfSttXiWETdx7JFrKc8kKgtaSWaRCEuASA3AqVYmxgdk4rFavD"
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
