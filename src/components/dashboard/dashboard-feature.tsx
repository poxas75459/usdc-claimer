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
    "3Wri6TVG5PiDm2kCxj9AWUuGAPj2t6BuV9qURFGqZnGcCqGe5QDMjeZzcrs8ipmmbdptz32XVWCGU2Bfnh1m5vKt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8bBPZNR8gGEK3P6XwMnXk1wtepAgNV2yiXiJtRcjd9o6jRTJXPNiqToWopr3fSpJVFLLzxgAa48gVVDAHFTbao7",
  "key1": "5kRXCqQFd4ofwTuCTd1PGb4s8PnQKNsu9vvnWJUsdHvNfwJkBx971zsniwGewJqoQJB8Eht2A1dwvjbz3MW7whnF",
  "key2": "2MbuKtSMPkPbqjW4H3ahJPJ71X9vHeq8vbrBJqteJqiUaeMrmRFCFcG5JqvEn3JNca2AKCVNExe8NJ8kQeNJPFha",
  "key3": "4bSy8TnoCKvjy7VmpjfGtAg9koJRXXvs4RRdy2KxqppuNd9mE8JDo1yYxejZaTwEFqMh3smdRfEaS2yMz6Mmb5ud",
  "key4": "2cpJS9tyvpY4JJNaqWXC3tjuzJVutpgFwh7M7bMgBjbUQTkrS2hY3dymmnGNCC5Yq2sNGGXnATu4WgdU4XXZGN7C",
  "key5": "2YycRpVcTkCxqnAoC4tBbvMDC7XPvUjMm7R2YvsWWVK4oA4zHA5zm9axArsZLqDjZhFSCPvipLuFpXXaUZHX27fY",
  "key6": "3VNRKev51hPFtvcCWzRHvB4UGnofH3C7LrzpqThMDPgAYrtsKHhXm69SpqzSuMCve847cPgzrV13v2fW4zxtgGZ9",
  "key7": "6cFxRSUQrxbn1Bp7VTcE53vpCgHheDAnDkfXScCU7P5YN454Ud3d5XPZHxpcycmLEatxS9TSdcrX2c8JUMd5Q9J",
  "key8": "64YGeykTfATk2sQn5tWjmc4Jfzv55Np1WJVWCxMxwjgLRXYJKTC5Mr5551eFaDmKhgr2872n9KL6kHMHZDicMWDC",
  "key9": "3V3SDY7Tubgzm6ihn1qWYc9KpLohR9Fu29dHA5CapdGce7zdTzyArUHaSyzpRfeU2fLovpUqpixqkzyKoXXp3UfK",
  "key10": "4WTtZr7MZh42SLaY8T4mxAbKTLEcXtofRWLcUzy3dM9NFwxGBEtvCHkka6XnFa7ctQcoA6yKAKaHiM6LkLiBNcrE",
  "key11": "5NMfBHAZDRDYSU35gME5pmmcZgQbHDBtsAAkUZjUaLHTnHUt9EEait5HXTaHXZmwg3xMgByc8hBdXcQGamwLLUAd",
  "key12": "VczyDjWAbsuqup7mqCbEPEmeoCR1Sg99JAYBQ7Q4a9qCsi3wFGtc2MiT9pjbZpVzu6JVkx4t7c9jat4q3WRwKEJ",
  "key13": "TEzxnQg6s2D3CGrbkkf4Bh3iaWFk3FXLG2wUFv49oBZJBmj67CNQcXs2R1HrQvDiY5WAnKpf6tExgx7dcknNXp4",
  "key14": "4N2nx6azy3uVxnFxeZQyHyRXeLm98Gx4aWoa5S81ddSvqmwcBDM3p7Vc1fbh7xGaWzicfBWNsM3uPZTZLCLa393s",
  "key15": "2wbdkynsWj6JwFMbLvCDsaW3nFT6Q8qDKfbBSRLQpuhmQjfnYPJjuBGjLVhoUch1esCfq2y75k6ktkjt9g8Mwvx3",
  "key16": "52e1xxLp2ifMHyHvxS2XzC2fSVEyRxaRoVJPmxKZxN3sVDV2agUKdKdo22CgoGMVkzjyZHV9gE2UAQghGccntu82",
  "key17": "3jL9nuni9iLSn1SvgoLtou8bpJ6wPikEo2NQZ81CxcsX7Web2WGn4P5JhdkJcd7f8HCfVZbmSPHTn5mEzdCiPY2",
  "key18": "26YaopVCQR4LhLi22YJHS4i2pxErBWcuw26HmhyBioNYFAjbyUau4jcrceT981u2bchSvcgS3HJnGzsBXTGDjoDN",
  "key19": "3Hz5q57YbZnrEgdr35FxgAFCq6acEApWkhAr8gapY8C2tdUSXoBUVnNYtmajeS8JJDJbHT1r4ySKce61B5q1Ma5L",
  "key20": "4wVtmCmqAXEw5XTDQTKwGdKD6Qy6QjR7BxAcQvKNzBn8zviFmWAUsWCemBzYafPP4EnZqfvte7vxFs4NJbGjRMFS",
  "key21": "2UyeYqkAaDikG833mqYsWwdZHHGztafUk6u6ZeSchxS6LLvrT4GeTofvYFCJhHjRTSSVWU7K3pprAHh6ttnuEJer",
  "key22": "28RsKKQ6F7fx1hrCm2pQf1MKjmiWh2nYfSfPKkBTJutrPTLu32BfQX2XZxd9Y62aXG8xUojNf9i2S9jtZ5RHNsjS",
  "key23": "4PUSeVrv36hF1HPaUUJ8sdNzCXLGTpvt8HDURzU5w4quvuxLMyNBpjNmnVhv7GmS5v4EKzEetLnBbXVLvMvBjTrQ",
  "key24": "4vbcxdm1wm5dMH4MBgJVjwv9xgaijbDBnPUrcAJZSUVHMyhiRa5BVw7oyqiK4UdLsAzMUrJP6siSEmUwyZUWHxNx",
  "key25": "4ENdquiLagV2grhPm6UXEkyx1tRbzou1xCHV8D54GJGGymKDWHMcX6hkiqu3QWgRqainiq658Sk2k5xRhjfr7mYK",
  "key26": "2V2uxWXzMXPwg2jRaajN9CZWrVi2MdD3NpJpTvu3phLHaB8ZNiEvCwTYJjqaKgqq8c2ntJTHtwSCdxfB244mUp3R",
  "key27": "vHfhrpMsZrPnSi49P7M88qUYTz8WyJQchK1zaaJ9MnEL8GSxwRWAVgpyksaYaFgR7cXFHBjuW4qaWfjNXWU8sKJ",
  "key28": "4GmqT3kM5jNDi8X1gXzhJ35GbSZZANsd9XfrskoBtGS3r13A5ebu8VLUUmYSA7GyHQ1BZxguRBRwRnkHGP8v3S6e",
  "key29": "mrb67bPpDMBKcXYjyySTf9Phf4NgpvPTzQph3pXYP7S4v2XMMG1mavTtFgn6cwjkt4F8fZYSuiRfeWfDrk5EPqR",
  "key30": "3JfHnATKVV9UgSBBhAUgQKN5FQGNEZYmA5SS8PjLp5ycAEzSEXYftj24boyfADKKLqVimqjhTPVjs68stNHD3dVx",
  "key31": "5rC4rv5YdqQbZHm3tKkh2hCryRnumkrEXTNdZRDJ3FkZDzf9RGMxWmUFXe7KpvTvw55XdjbkMzaQVRc6285bMsSD",
  "key32": "p96yEbgCs4RRhQefyKBuYnydP5Cga1aNybTGjvrpc71biajUKjggFv6p5SrvRoMgLizz1g4pUZPv4D8Xs3vGvNn",
  "key33": "3SWUjdKedt8GQmNuU99DYoBrpbzRuwaan2QmVgF1kYkDMZ4xvh53zK4q6DSZkoWQDm68VkqvkiYgVAH7EafN7ufH",
  "key34": "4VqSZBfV1e1jWujQSEzTqDf1CM38gNoALpmEu5LQ2wPA58PrY9An6ysnsikv66GRr8eTFj94krpxn25EzMfBWJ56",
  "key35": "4nuJKeNyoGhjGnVRxSouhZXissYYacYyqwnayfUhanBiYgthr2HAkhpmn3kPvYm1XYWcjiUsczw9ZsFJPmrsZ95e",
  "key36": "UGRXKteiBXr3PJzeGKgyNoE3wQ6NQ8r1S11dwicbugZASQRKZA2rDXpkWSa44UsijZffKoY2X9oMn1tKAk8Qcof",
  "key37": "2AA7JjYvVe7poUXBvUs2ozoKXV7pYPo63sRVSmTwR4uVqJLx3m8BwGD6aNNd39wApNRGVDr2fR43nYYHjfLMZUbN",
  "key38": "2bxgpFsFnYYGkoV5pZkoebCfLLKc8eaXNCF7tBoQ3sAcUGrqVczgUEcqGCi7gbX2uEyumu7qXYzF7KAX9afP5LbX",
  "key39": "4XYKTbX3pc33vprFqwpxn6GXSKEzCDnb7ePqE6eSbEM6QmjKfe1xHkbrT3J2QY9PP6mLtVNReEKXCv7aHxdJTMwU",
  "key40": "2MZveR8v3kEBPh28ypYuuL2ejjUS1KqLjjz7fMs2CsniiTfCkTJc14NpLW2ndPHN7UxPfA3KaWWge9abfmzpyiT3",
  "key41": "5avkjigG1HF1jePcEvuSSG1924Y7FQejUvxD25YBmeqvbipecnLpV7qqH6uWPgaW4jYQ6b9bF7HngsVtfn5LJr1Y",
  "key42": "4smB9UGFTyzUN91gE5FYid4suvqyFuoAxrdEu7g5KCygY15Ng24b6co92oNaySqt2KEddcgnhRPmYEVdH2tiu7t5",
  "key43": "5ECDeGZkyakb18ZQVFkze4t4F3Qo9b8QM4ZhyfwbBf9DmPYq9ErksAKPHERsGvr7dbcc1VRyzUPtBfSKJ3BHGdEn",
  "key44": "5Hm8xsKmSbqSeU4wQzny6VnY3AwF4ZavHHcYpAhEKdzujkZTiF4jJ8NnHtbC6VZ4cVjXcMFE9F6qqjGy5sRorXTR",
  "key45": "48zH4xV4PeQCJw8MJeN36xrA6cSU8grsdt32VyZVGx8diiLXe61syVoNE7c5Zys5yhk3y2u4dw9NPFUqLbq5Sx2y",
  "key46": "4iczuPBmcWqW2tuUUmUzxA31WgtPgQrMaR6pSySbuCNSxTNyge53ouFnQfpiAEyemjQkjLhxTpcLjFxnHyWMerVX",
  "key47": "3qKRxMaAbb1hhtVnG5A4B3VyJb6gcwcFK7H2aZ8TZhtrYapsjnGVsEtoyzw2Y9x8FQkEitHp9CUMoxLKTZwduYgw",
  "key48": "mKpeaCBKv9ycKmHaxGWw8EsmBcY5NkbiDcGooUAgL1sM1LktEGamwqVnDD1AnqkZmJtrw7UayUNGidJPv7hSbYR"
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
