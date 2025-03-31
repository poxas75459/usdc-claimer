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
    "ejW1hwXpUNKf1kygvQWnH27jqzQsVo491UBuXLyEuNFmRT2UhPcDheusGLUHwnKXsz1G7BiR8vJjDQZHH6zyRgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dj5JYvzYFedQuh2pFG2TLBpD4xaapqpa7Z4M7Y6LRoqaqBDqXPu9kT7wfZ8ZRatbz3drbWTeZ4C43K8MjZeyCRd",
  "key1": "5jKdU2qNHdypDsgXKwmV2FEQDRioQC29zKgFi3LRjVTW7JQpJCpozAqhiMeLvVRGWD3PEy1fGxnMLPHrxJJXoD83",
  "key2": "3F5xQYEcYYT2ipjKVkjjQh8DYEjSXwPYF2jqprBmQLck7DX3Ld4EjyLjRMvsKvRKGEmiMRb3nXk3Un7GaNQpRkSP",
  "key3": "2GmMwdhLJPwFP7BkDUpNahP1ku8E8DdBqZ1DLy2sY1kUpKWZFZDDa4rytwbq8bf34zt93SMfEW3K5fcN6rGksD49",
  "key4": "KgWqusT6R2zD7mUyk6yDgrWQLTU3t5bAvciBTgnMgbmD27447vtGdJp5K22AeSuJ56sz64qdohK5KMeMECMBvhj",
  "key5": "33uSBuDTbpmMhn4RBPVNQFJAyNQ4y9LGwoQ7QWDjLT49NfyBbwsMJ4nM9bnrdsENsNsmvbg5vW6c8hzN3CfbcPKU",
  "key6": "2F8qBZj2ozwSRzB3MCENWHS63p5EHQtnCCwYu42ky28EDeNDw2poDLFVnaAsd9b6XsMuv48MrpKKEJKdav3J4Ttu",
  "key7": "4yEQGCCQgo4hK6t8VpgHSVkFikWALMDS7cVnSGJf5VevfvvZ9BsDtBiumFh1ph6u44BX7xPKSkAtsvxw3hNixVU6",
  "key8": "5cBwZngynY9HD3mykJmQReQSN1hFQVFbfUYQZ5dhcL64oqkDst1UjBKADv9gGBAHPNP6Dx27STLW67W6wnXXApeg",
  "key9": "2zs1WitJ7ph9VoDLa4fvq9EecFS3qo7WM5Bo1YPQiVJpNNyKxwqcJwFyEGEUrDcrNrzeLNo4rJy6dvCnXnhbXLfn",
  "key10": "2axK3dNDqARNLrbtwEzdZGXJ8Tdah8F35RR3AW8aoygDCpe5k4rUUDMhVMVDwyvhFFDMEgnMLddzenufZVHHqezF",
  "key11": "35LqoKJeivyiXvsEjozEgWhEV3288hrkjbbivDqa1qe1k74Yzqsz48JmW4Dh3776Xudm9PFuja7yKQ3StQmjAFkQ",
  "key12": "3PahjqAEGWqSNUWr6tttwA4TndxMZoex7FWrzhRwNcQTvKWVRNMG3gMRzphVYThcjf3o7eJ1Q7HE1RiEjc7gbb4B",
  "key13": "R6uMVdDkz4eLFLr4MwZYLsrS6rAVH6aPZDdFzKmYJyCxPo7JMsRvxMPs2V6pbUmNtVzrsQvX6FZ8umiSXmzFNdg",
  "key14": "5bhqv2ywjEr1WMGA5G2sqKUXz6x5Arm16BEMnq4cfpocU3FUtDK9Tu8bZhzXUd5K47pz5phGPgYW91cbyBcdMv2a",
  "key15": "4PAjhRjVPw5mP73oz3DLw5rPQtmsKNbzWRPQpH2XMcw3CppCuyNQR3iyiNWKNLgfWyLR689aU5aS1Sxm89Sbbno2",
  "key16": "5QLDpBC6UZzsBduN2YXtVJqLiKfeWEdaz6ESAXdqXNCkmMp8To93D2iL9UVCttmVCAEe6d4fB8zSg74C77io7jAG",
  "key17": "3fcn1Shok7EDqFce3EsL5bttK71rUcwX2BwUL1oErhr4qUkyt3hK1F7UPjLN9UXNrqTjuY8A7UxdkW9UupkwamuE",
  "key18": "446SZZpjVFnH2HaGraSDYnxXFQRuq8nDswxAArsqjBtCPT7vbt3pumhB7taLDob1egbzQDALMAiiYmPBdtqYMRG6",
  "key19": "4JhS6fcKWVC2BiJDPJmre9nSvVcpbNYAUf8ZFyvKEQkaFWyxyMc6S8sPCz7KxoqCSKvZ5k5vf11Qxymqz5DTPKcW",
  "key20": "NGnLjzeWjjKmnwPmd33sGzofjF4tycV57RSTbUy5oh88Vgt1542KKGGKhSndyGqTAVigA33Cs9q8fxQqGhdYPvN",
  "key21": "5GvKQ4TPBs82GqTrAZDhCPZJTNwksjx9x4oFNV8HuNwS2E3ghbSLvduUhwDyJrK6qmvSTztjrHq4mS9kaW8Jer9z",
  "key22": "5oXqphcySzFBh5LvTJLLVHsMSMwbgc751EXHPQAasVeVSkGNuZPtEQR9XwQrcTSbgFtYKnCcozuRwGmAKxW51jmu",
  "key23": "5ztdWKNgKCdx8DzjQF7B8WuHGbRP7i7XYXF6Wf3F7HUjB6qxdpY8rvRRnhwWDZtJ46JPxFpFtJai1Cb1THdywjzd",
  "key24": "2ERbKYYbbWEDHqJZugBUTi2MZQXX41FUz5Mvki5GVMinVn8x48BvdzUXnyFZ4kT59BNeEdoPEcchkqG3NFLZqBtL",
  "key25": "4LhZ4Ufa5DwmD8vLAZLPecAnfWKj1bs3MoU3zir6xDqDCBGRCmVn9ivxYXPqT8BAEnsstLghMiyPMceDooU1pYBZ",
  "key26": "2k2p8cw1z5TrHugDVwHB35Gu6Xdw8MKjoEdytHxkxQoNS868fBvB4vhnWGbCFaRnHUBcHxkg5Cz9WrrymTwBFc83",
  "key27": "3SKnWUsLgP7gA6xZkvmN9QVQDbm5DKhxm4HXjfTByJPohsFYkbwyshEiHS4rdHoVRjjLGK7rwtYawJoj29XNTLZT",
  "key28": "4L4hk8wGwjFDFkJH7hrAaUprh53HwiX7LHQX5Y1yzgxSFw97o3GeFuqwJkywYbqFJe9tz48vXwrq9ENgXF7hAYVK",
  "key29": "vDpMcjCuuQ3ZBt5fm634pvcGcvKiuZeq4p73yVzf9CMDj7dPD5rMHpDhprAY3RbQPzYiZpMCaNY1HubHQR3hULZ",
  "key30": "37yZZvTdrVpTSv82jgzp21MhN8Soo8yZVRU4oRWedsMxodDjkmwRDBNME5L6J8eXnVjzmSvACnJF5BvwuFexJfB2",
  "key31": "3ewJdQYYJLkfyi1QwVe8JLHjTXUFomSiw8MJatPUYd5AVCazCh8DqKUPwSeGBAk1DFNaG7aTqYUW6QpwjKdc6a1Q",
  "key32": "4bJwisZNbrgygrjuzwVFnUSkGPBNdTQjaV7LYmk1CekCpsAV9xn3GgfTf557W1oDhU5wRDv3Zcare6gVSD1csZbE",
  "key33": "AYWabBz9gLLoPgfMaAbSTqtisjoiXDmqydsfg4vXUmJc2FVYSTKhiLZF2qinWy8EvDerv3tdcfZwxH2QTmsnri6",
  "key34": "5fWaP9QAdRYnMaoyUTAx9gf1CeQ8uphSTq6e5PjMWBxsmhzyXt4K9s8MtNkFyMRCR7VjHeCwj66qmyBAuMEhQicR",
  "key35": "3jp91Zhva1mGGghdGV8JMK1ME4YYhjeAn8wSBXE6H6ZvpLhThv5aHymgpUBVRwP1dmT2QSYFAynAKVVqNzFeCkjo",
  "key36": "3bZrG8jZinbYzEBhnYf1c3qn3s3N9EJ5UMmvvd69dEZhoPhxA3AcetGP7b4HcySWWqvkt69kCreCBH8Z8j6oBiCf",
  "key37": "5WVGBdmJPZmFkBo62mutdJbF6dt3Sh5UVFWCuYK72kfcQEj3DFuXBJMoiJ3ZtBAea9kxvzjpc5sSvKA5zyD6AHbn",
  "key38": "2gmkcMVyioMd9G3QQT9vHt2qcPEnfSLsUY4KdpSr5YoM8BJctS7nP4EPu79zy1Ew1YJwgvt7SbvZgjHmDDQP6UP5",
  "key39": "b65BkZkBgYbg4pzYTsTzRpMrYkH44XCLtTpV1WQRVBmAHre94vSPWYBF9wLXaBFWu28u8Kvn5NQHyGn2tG8ZqoV",
  "key40": "3gkXnPNh2c7TqbnvjMCLoZW649HKiLps83kYY4o8k627XSpAubF73vGKLiEr11TWDbkB1pEf2uZuZxG65xuqWwfm",
  "key41": "5zfG1UqKPKtgFFKkxwSMjX17uBc7QaqSZemSLMzS91RR57J26LDxxC4SQLcqqiyXDhrT5Ejrf6KjJG5VpkvertzR",
  "key42": "48EXuS3M6TF8HXJ2Tzewn2epcZxPYq6oL8FDEoXKP941LBJnSZeAi6zvrwwhgKCTcZXDd2qYWeJerWErnXQBXPkX",
  "key43": "2dVbNyovf1x245dLq22c2hrrz46QXYjVYRZphxQNnBDHZGxWFAGrvuqv72KoVuMei77hZzNEn4LzN4Q8AkrBhNom",
  "key44": "2f8iAX84y4115NJHNqZxwTL3xrF44N2gQZj967VnnGgg11eipDS4CuA66BPy355zfm11BDyPnqrnZPfjuWCfkbF7",
  "key45": "4TzH1YSCw14io96EMgeExV9NzY7JxhcDXe3uYCpaGaT7vRnjrX6JjUGSGZ6iP5YJXNDTNuzmsH1AzyXmM7ZqZ2Wb",
  "key46": "5aJQQhbo7vC8TrH9USmxHeg6PJesHBkK9ziKxtzBKWE9JSfU7a8PZgDJ1KpHDVjftyzakp4VYzv5keFHV4UiUxjx",
  "key47": "2wPrVgYShLkXBUCMRNE9TvqZd7rCPSiAexY7DXeE17N4Mt4vYHQFT3Rv5XVYR9EttbD7KS68KR3X2bg8Vpht8E6E",
  "key48": "BREv5XwoP7a87Gky9umsVSBwpEGYVtjMvfWyxDRQCbk8dgoMu96qDt3c3opSMjSSaDk9VHMd1czDrjzw21WnSiA"
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
