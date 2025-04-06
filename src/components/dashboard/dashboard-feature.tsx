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
    "5DcZp9mMrfDnbDp4FQzdpTeYmDX7e2XFzzAAv3DZcgrprwUke8RUjqRNbRJ5LbGEZNT4eimom4pvVF84V8xjCqFz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EiAgrcrwaFc1eRQJtRrwVJt5i9MK6CgaP7BMKLrYL5iyYnxAUzYMvNHLKfAbfgDF3nDhRYdpjCyPMEfrhRs3NR3",
  "key1": "BDQmCAGqLL8PgvVFz5o65GtdkhdHw2LHf243L7RfhewXkoR2gMc7px1rE8mq5MNTrDCwuQoaMPCJ95Ms3WSi6rY",
  "key2": "2JBuU7tnAx8JZ4nXL93LWKL9atnNDYnSK9X2n5LV3Sy8uLviEAxsKgpedq4rD6tp4wqgcAnqgpfdMUaMGU2kPgkK",
  "key3": "512h4u9fDMTdv6LdUduu8eLp44AFwJ4gG1haKwicRwChqwEQcufpAtcyXVi5f5rjK4Tv1ivj8QrptSavQ2kd6Anp",
  "key4": "3U77DUEScz32c6DqU5ND5u4L672j9pbTf5qqBRohBWbuGTavBXHDhk7sXsMKcQVxFFkZ17SxV3PzbNyYTAaw2L3b",
  "key5": "3a4gbVy2GNfGC4S7Enmzake7rSBUvmvnvzuvzrobgxneLbdEyGHqjphwtwHbX1BXGpJTAXtjr4uRoTHNffDzzyYp",
  "key6": "428XQR6dexi8Pi8fehG3zCgSLwfHbxHgSd3rFqSSFwV69f3RLdRSw3shvCUhTnhbTwX7eJoAvxBxuD7H3Q4LQ93U",
  "key7": "juSX3yAvejTRPWRMubkK5trGbuS9oc4GMxnLMf1ZWcqSJMNoDbu8uSaUAcGEJEadU6TvtJbMFCFeKNWWS9ASUsL",
  "key8": "5QQ7AQDHr7ZZbnUoACNwmKmBrf4tDbNq6ZqvHLbgm9Gb1JTqJojPwGgqwVURk5EBLhDs92isgzCfPo66ui2QmJ8i",
  "key9": "66Vt8qiZsU7wBQtTinkqUKEZ5VAeG2GUz7dYj4KuPtpCymhg6bn5mJsqJMixArLXvjgBRfCmmbC9AdMQRdBYuAHv",
  "key10": "3vs4G8vFKW4sBFxJQbZPQjRJWpE3mbRweShbvPM4jYRWXbfsF9G5pZYS8rQHwn1xHBGkHeLCNmYVS1FZrcUyhJcc",
  "key11": "4n1U7hAnYtY7enKLeDA9C13pCDEzU2TYwoQw8EB4om2HFb4z3AEKhjbB9cD3v5ePR3m66ciAPHfMaqp96SAnNX8a",
  "key12": "HrT1tX3HvpzNv7hsMks8G8ECZQRWpGACRTdwGokU8FeZhXfJkJKKsdR7QT4z62Kz6w7TrouVhz27jp4MJ6oeEoj",
  "key13": "4FjovQRERguzkvxqJUzXYgnPjUYghRbdTKZ6WgmC9edP7CDhkekjufcYBGNpf1RTyF78ry4rS1LkBNT6dm56Agz9",
  "key14": "4dLpUEwvbXzDRt8NYvAait67AwNHfoHQqPnYKEi4HjhfUCAyWz6bUSC43QerXuQ8A8dJVK4C3MbCUjjwH3MhvLsT",
  "key15": "5ZX7FCT8EFMj3nsSjSbDDjSoZnFW2owc9fKp9hCMACkktwaEn3BkViALkSjetF7L2BtSSCzrqS9d9kY8EGJMD1qC",
  "key16": "3JkeEuoT4UCfs7HEjMjqiQBuGnESVLEcpMGudhReH5YgDqZZ21EK4hDfNgLvM5eA4EyXm8tvVuNDF3yCe5b7xQBN",
  "key17": "5ybQ7L8f3msT3u3CVyK6JKJ2HNDZAkVXuPwc4vCCKv7GKhVtJRrTPcZunSfH1anmaGd7q1sE8BHFCDcgvQCi6AwR",
  "key18": "3dz4goj7cN52t1ktfNp9UXPrPWTXSYwkhYik7FG4pqDYAroS891ts5f1WcWUWNHB2ft1uWAqCqTLjBrGPew1Eoad",
  "key19": "5qBUbWkRDjvTjcDJjY7EF6iS6eeexzpyJ1YAc3TnRhMyzyTJVMWxbfcNLB8674RnqkLXJ8Ums6uEkd2Znw6n65My",
  "key20": "2y4p4EPAm4vCrjzVkGHrUpwDGC3URwJQQn7Pjjj2ATBH34UPmkygTWVrnuHNtYC2ThwkwcTxoGqsYiBF6aR1S6AP",
  "key21": "57BoAfZ1kQUDGGxeBLz1HCNAhN3cR1V3FvUjTSCz8keKRt8rCYcYUxPMwXn54Gpjkx6NbppGZtcgwb2L3Nd5qzEn",
  "key22": "3a222tNvb4JLopx32RBs74ne95fd8xC85PrSg4oGDQDqARa8qAHy92tEVinghWZ6FiMwv8WJ99m6wB2i9rUPF7wk",
  "key23": "5M8qbd1zcg1h4QdU3FTy2vi1kd5MQqrsUC7bJEgKg3hspAkgMrriSnLsBXv1q9JFLuxX9zyCzEiLdTvXKTTb3vKE",
  "key24": "2bKTngtFQdrswHuN3CJcMWh8EgKSV3WeUaaNwmajPFTVZjQc2MQNaUx4RshEK2cEKczZAXCwVrGvBetBfg75XeqX",
  "key25": "5BqWcVjgjUte6aN9ugS6CxbGRTpzXNnXB7ETcp8Vx2NHbrHc5ohk4LZninNhzw3iXTvkK4G8jxd6kJENc5TwYQiH",
  "key26": "2gSzmPfMEWKrBcjYwH9koEChbavyhMZbvB16xc4CWd2aW5LY2M6qyVdQzuG2gViaHnS4yeqjufuAXSfkmfGfniT7",
  "key27": "5TH8gh8aHf9tBQyk6umSNgNNFNXoANUpzw2i1ZzfQNbgZKgTQtMc4MMTRbwdjimnkahwXc4SyZmuLk9dLEiBDfbN",
  "key28": "3gc338HDXnBXfquFaJJmeFLjB2V7KyQVm7qqNe68Mt6khcpc8HFQvjR6BUeNE55g11fopm2kEg2Lke2KKKpVGDm5",
  "key29": "XzbvgTfgwscGUQoDg2SancSgWAa3eDZzmmZVwd52fEwWe3veGfYHkK395BabBooHEfMeMusrkzJDbUB7d6FQHpU",
  "key30": "43mZtmsHJxujCPR865zrz5Ff1QtXQfVpmCyEEDKGaJ56TX6dan4Y8seFn2Vtkap5PZbApeY9mCmhbdF2j6ThN1qf",
  "key31": "4RBXZpJ4PE5zKvUHP18BaedEUhV6fexuziMkBkcKC1siJa9THhy9tHB6HD7uqpHz6KR8BBLZGmf1mufGh3K1UwzX",
  "key32": "2qZqJLUmdMaJKrQR1xkNekMS5NUx2Nq6pbsoqVDRrNoUs9Quq3PgKbbXekonRBnjLtDTT6iQcwDGYUZ2PNHgYPrL",
  "key33": "3wUw4mLL9Qk5crryMF73BMyB3bGZzP6hPR3vfZBo5pTyZXzhdbtvN5XLgjRzPbs4HZBpC5jSM1ybVi7ejx2A1Xku",
  "key34": "2BBBMQwnHJEybBEuo3Jtq5Pxf9LU2YgyVyJPuTKAcewwDpyUmKD7a3ZW5sHVFjZ6b6gPM2oAPbsJtA3aoAp31Du1",
  "key35": "5M96aY257cuPjTrjPxdL485nasZKJwCRuoEK6NWpEavbpcqt6qtwVXWQqQFUGXij8nQ2Nj4KXs7XQr5t3qf1jfZh",
  "key36": "4npcECm7P3fhDkC49pPSVf1LBpk6FsEV739wCPT8qXad2XZXWmqbNT9XNZmHh3FRxE4hrEztWoZ8cKzsUud3y5Mh",
  "key37": "4YkAcpfwbeq367XYuqivH6SnACDcKV98UgM6krQWnJm1ZPyQDtR518Gcfone2AEW6VmwPZmmQ4ysNWX9vwakMYyj",
  "key38": "4HmWkmR8hU5aYbryaKXJkJJvD6zoyuXjN1nCYBi3fAwwVQmqBfmfvmsBgdVMJciwdkpo6fv5WfEfAjWabzPgouCo",
  "key39": "3Uvp9rdDSSbWECgy78xASZHoQw4wF1GYCRw5DD22rx1wkQitjm2m8oj47cDc8wRyz5PdKarcw3ejvvXjnjKaCmLX",
  "key40": "BaEuBpPyUdKh5Hkmsb4Kzgg4yV6YzsmetHLidNRYBJjEDURDMzru3XFt6iBa6taJCas1nPF6WUby9R8nheTAxYS",
  "key41": "52SBYhF23UfkepSupy2ivj4Bq8oJCUVaKGqpbuXKWrQVJM2opzMhz3Zjh2YG1FX4q9sG5hJ1cozU4L5PeUFwcrdJ",
  "key42": "5ARrkS5AvrxNCHmybaD6jYfuwuDGPorqE5XafuYUuGBNaw2aaEjDfGquaz7E3PkAWsghYGAxMvyVuEJhuBWsarmF",
  "key43": "3Q2ZNMBi6Zfg6Cw8MipgSvmGzx6Mrt12BqBgWA5cbMkMpzx1a8XmyDnkYqynaHKvsSM6rwiEeHEGSit1Ex7kfx7e",
  "key44": "4CNUbE2k2igSJRYzavGEet1PF2EDqxyAiyHiu3o8PXSENddRE1EHz2Ab5AEqQNxhzoux5BWyydcQscPTUCdWdht7",
  "key45": "3VzfpopYSPpV1SFTwThhLsfuXQVX7EGfXm6A3D2KcFP3SmZmmmfWUtRbRgyxkkPKMXR3AQyGUkG4Hrtc5tuxhsVT",
  "key46": "2JsY7zX4ZuZ6BwRGtLYo9cb3An9NWrd3cpcTtuETPVqi58uAzv2g8NDZVNS9KiR1CUL9XYZo5BKT3CzNzWaPVKfd",
  "key47": "5W8WEYSg1W9t2BxfBUero9RbGWSQPoMMYHnGg633a2coZtzX8KHxzdN4kxjJmqVqjTepQPLYEhm1aAwMxMAADsfA",
  "key48": "2Ey7MNpuqh72zdEn5xTmTdzgGngVBLA6NdJeEnGw7kX7CiTWJLLpG23B3pmPnCiUM6WnRaPYNEt7SDYYb64xPivM",
  "key49": "4SZUL6GuDEom4VK1a5DEzzW1XD9erVrsqG4hkVmKe9nnvXr4eo6NvhxsSrTvAbjwmnP3w7iEyxNAHGrxu4tui38Q"
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
