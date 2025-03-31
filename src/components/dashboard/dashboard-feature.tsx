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
    "5AJz3XhuiuvQTKqEXZBV6ij6LGkSonpVAh4CeNmmbbAEM6U4NLuszWybqjrv2o7ucLHZboX3wVwXLHBDtgEXFBfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42V9pgNbtNLLAyUYYD69iX5hi8iFQWdvQ2dnmEjS4PXZ8fKamDmEFckSCrJVSGBEXDiN64GvQijXVmE3vu3RLgPu",
  "key1": "55ZyojRATJeh1d664QQEyugRLvDdK7LeqKE59VnrHadchSj88TDx6HGSYj3JBNd7h3me1Ybb25XZYmRVNa71yg29",
  "key2": "2kp99Emk9FULqeRE4eQBRNRFhQToDH4bFtmppzxBEHXm2kPM9kTJj114MGYAdcaSyeposJm7STUjkzBXQwixH77Q",
  "key3": "5pC87GzyHDzA34AErw4BqvfF7yArn9og2wzG51QdmRthfSPDDVbkFH77qMXLs7nChpxmGtCYvNrTVA8TjoGk7End",
  "key4": "46U8Apq5KksBHwbF1EZCaBAa6zrXCEy1EHAnMbHNYjvgVy5XvJxoNk3VEb5rY4JLRzCC2d1zunxRzrfDqxnuEH7y",
  "key5": "2Cbk6qx2pSHxvjgZjpSRzq9bGHaEzQi2gLG35sFxkzh4HZS4CkcjxXaGqfA3NrzuQE372XyCBxy6k22tefuK7rBx",
  "key6": "2AMeaWuURDvKfQ57qzEALoZ6fwcLRh5RMY5xeGBsLiJMNGCkWUwAnVRuz8ohPiEhz7viwwJMnbf3yFJW6ALaUbot",
  "key7": "3VHezRjPGP8UiH2bimYBbqTjazMwGKGwgdH8uWGoC3XNdvmNh6eoj9ELuiKVTi5DBvv6445qAKv2UyTET1hDmrXU",
  "key8": "49gNfB3PeFsaxpAr7ogSaFMCKUBkSiyv3GqYTRZDtwTr5wBmikFNG6UebrWQBF9VADC4bSCY8tbVS9gVSHkSzArq",
  "key9": "5paUe1NsNyt5r3SQoRumtxuv3y9vnTkEnqZum6Zyg2aNmRRpahWDvmHxmou4HALZ63RDk1RPACePstsNn6nswSuc",
  "key10": "2DjMgYvjPoqZbJ8EUqRp2rfizaPpfUGBByz78DPT5cJHpm9hZe1eSS4Y8VrNVQfko95uMdykk88mgw6jr6ZnB7ia",
  "key11": "41WTqz93Kmj2hHzXkE61vv3uMq3eUkNnChHzgcoDDW4SaZTAcJfuMppawqm9oLtML48aQmGeJPVaHeJ1NuWfEEmZ",
  "key12": "4UmdD8gTdvC9QRuthWkcQKi8qrWm128nkDYXjhR92PhMSNZ98HxVaU9crpvqz2UHHaCNH9rNPxm6YroMaJQAZVri",
  "key13": "4zPRPpJa2ZyYQgLXDYXSRaF3tcs3oy9HAKGeVFp4FuGBYik5WohUVACWXcqW9gZXrcK8mvzMRzmMxUNQF3gsY9sC",
  "key14": "5wUu8iNTYfT5pQyuAZKbkGpsrtwLEnWixi7vn2nBxhdXyAbFtatcxknbXcUdLBng5FmBpNy9dy4Hg7VE7ynSACwG",
  "key15": "3U6WxYTb9XBkT8abWBkDkXyD5UbnqPJu5ntXr5dyC8rE7kcyJHJVQCYrGXuXQokCmo2aaeoAEVmu6f6L9SViuQWo",
  "key16": "4dR43nVWohZdeApLS9WSDnbPtEXQXjJS9QEk3RVUoGnXRJKYGpx162u3m97bQhFwJQHwTT15aDSKxqsd5C1K5w62",
  "key17": "4tJbT5CEVkkDiMWoXTn4Sqf2NSsPxTEbg7xMA76sdbXyubKKMPMEW8EDteCjReUZUs37aZDBRv9ffgAFwJ7v7NZr",
  "key18": "3q2pSpZQEoHcL19V9XpwmZA6NHbUVX4m1hzzRGc32zNd7uaadTAoqhRBgJeMw9zHvFKQ1QrkTmZxuqCKEuaKPSrT",
  "key19": "3XQX92XbcQqW2R25XRegUiptGCpkteEHZzbkxGDn9w4WKZHwgfUtzfhtF53oHqXeW77KLad9JMJFgCvrrTGWGj2n",
  "key20": "7GhTAEr2ZdQadMfTdkuppUmhX2Uww6XAQzj1JTTGSRj7nJnqSArgUb48MNp9qhJFDs5iZ3TJHr4stPhwq4J7PZn",
  "key21": "oKKEdPJ4PxGQFSfVcp1NEHwML5TNMV4kVhtsUtRzKqwWUbFBUAe2kwXCHw99epjrkJNpLMvCi7knxXXURU9ZbfU",
  "key22": "9oQ8APbjERbLh8VNs8T9NZEnkxNJjTso41wEqQLyrBxmrPQmQqt8LfqnpCeoxK6s7zmKciXBnXLX4S4ru2JQAr1",
  "key23": "2PpFfYzAzr9Po7pd9gdjMZNMQMSdf2mygDB9jzTeCtdUgpdWv1GYRE6XP5kGy1CTMBZPzR9gAKNUndr7JSnAUX2S",
  "key24": "VfLvLTXShb8B4vK4oTatNhwm6mu8CwMHzo4rASj6x66g11ge2hLZaK9QbStmMerqr1gqPfjppo8KW4dHcfxPGyL",
  "key25": "2u85mZYx4HqqKRcQHRqnwX5yVCiQjPM4FE1q7FSkcxwqCAvA95PhdRsUXdWVA7saKzn7F3uSBcgNsx4bmHSvzXGT",
  "key26": "3eXTwziaax2QDauBVxpy3ehBBdk6tu84Rc3EoAdJMXyga2msPajEXWbQs4sHi4bEza5KGR3JFxNjUkwuYLh3gbV",
  "key27": "5gULcyMDaUukQqGEFjHeDUpDJKzo6Du6iqjaUiQC4gi7u9zRBTcNHgxeDYoeuY1XZJeacwnSd4UkEMFUVrNiLG5j",
  "key28": "3x6j1CpAPnY5XXFFWrHft9tes1xafK1ERp1GwCS6CAQs1riivHqZrZkVbAT1CpWMb2FumgbvKvAgHaE9TbQn3fAM",
  "key29": "4sU8LWqNW9yxod5D5zcRqKUZAAZKFjLv41Dhj1dcujGQvzcFrJVWtQb1NsEcxHxwfUowE1WSM3fuH6MAf63hQF2d",
  "key30": "4ZUFgR253Q75vbg27oX2MZYLFhK3SKqQqvwDQ2MSVmfygiybfTenfujoUXv28eYivvZtB8Dgn2R7Xve8FUBBhxz9",
  "key31": "47CdSJ5wPLNPDY86QdTwPT5s9mAyfFnpDdaQEc7c7RYFX1Qb2gJ9rtreNuBAwHhX8cLQbir9ooFBsWRW86MUkAPv",
  "key32": "SjfjqEXp6Uc91Yhmo41xDX24VfFrhuxSsgwFxPZHN8bZ7wG5u8bRZBusoDWr38WKXjNnoQKjdyyQJs93nthYJpH",
  "key33": "4QsmT1iR8ZFGUoSGtt5Geg9Mw7XGETjizmHLP4uqQjKRAsnBj48ejTJbVhj1imCqfU5pormTzUzkTdFYucEp9ekm",
  "key34": "3CFG2RS78ZaJYuNcKoKxKwUzZ3GTFsPaRMdUtttQsUGvjtjq1hXWcZQPfD7gHfWw3W3LCvKm8npsqQre5nXwYptw",
  "key35": "3CCotZ27X9fqR7caiS2YpN3CV5wguAx5zN5jw37e3sfQEcjuFVrNg9qBv3mDoEWJ2TFaTWhNGpJ5zNRQiMHc5jxE",
  "key36": "5vKAUAYYey7Sj1R3tbzyUkkf3ZsPcNBTpnyVdGSNTfUMvSQiF82zPGGaEjgaqTqsRZTwMhr8LiGB7rfsqEzUFJZD",
  "key37": "283TTpxz3w58X6wdmf4ijbySzJ37pEsZk2jE6HnqKxh2XY4UdRmc31R3ZmDHgbCmNyDuGXqCDo9i1JEQbAWpLwBU",
  "key38": "22iq1ULo3VLePXD5MsVFgTRaWN4K5ZQuoQZ1diZmc3WJqmdcakp5qrNnitbyuatn33EzyVQk5kZfr64xAnEbbxWh",
  "key39": "4mHfcWJCk39xiotc8r8A5AkVf2BF6c6q7sy9eem4Jays8oe5reEd7KFHs95s7zvX5mcGic6DxA9kDM14Sz1rbDim",
  "key40": "3aottrBC6pfVCJtpdMccthqmi8WegTeHJSzbkMAhkeNVaYXQoiUegzBgqzd2Rp1xaufrVpejYHF7tc8wEcffm7nv",
  "key41": "5rTnSsdexXwyn68WC3zSpY5Bw1CqQEs6McQuDiAzZrw5PSuDvJYMaovbSxiohPNsaQ8msXaEpK4Z13nax1WfPTeu",
  "key42": "mQf1fUHbfTTtrttXSHVrZHbciyqhYtdGeEyHDAnn3u7EfgMHoddZfGqKaBvkCQv8HDgm8pJGm4xY37S8gA4ssjY",
  "key43": "VA36yGYsBuxwmVsZDV9idDNghJ2dBaLh2aTyPvaL3C5gDT8dsjxKyqaPASX1r4cfXuz9rPo2h185h2XS9LYFcG7",
  "key44": "YXyzEDLXvnQd2v1suH1nVieQBGhwti3wNWKMH5H2ozkN1Jd33hqpkQbUzhXKgifVcNHMVrFzyo1VQmzcbVopViu",
  "key45": "4r7hmg5hT6zjGsttLn97LdM5EBHPTgCPo1hUDArCjwfmtoFmZoM56rHeLnfWd75uNiBfRD4HTtP34jqthThwWK6B"
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
