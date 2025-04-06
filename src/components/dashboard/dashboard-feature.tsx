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
    "3QBEAduaNu7j4b2MjBMGQFU6DoMycYxNThN8FSVa7eDE7imfNnh8UWPSWkVUVD5he46vMtq4Ww2AAJKGr2amBPmJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mLh3gmvSC3qMYEvYTux7Db5GxDZURTZd481LXk8XShTn4pLqxUeZWk29FsM9k1DWCzYh7fcc17KqFQ2DyjmHi5K",
  "key1": "5ugoUubWX1eqwBgUEim7JrZA4aAgg5Pn2iWQPcMWMNyuJ5fDU5g7a9vQrdhLvuih7BiMyrWbPXa1QyLQbtSAS9Ad",
  "key2": "4QpfzQBhkPsVvxmoaNgxAv8g59gMQz1mGnDEP2nuiu75o1uXpsJ7iy2qzNhoiXejo1VToYzDaaVm85oWZ2bBKe5R",
  "key3": "4mKg99oVqQCN7HV7vyXjPYzTVD6o8cnpMgcjmUkLCnoyPYdQEZU7Nt2huXAi95GDFBjtpJAEP3AU9BRe2HvAq6Tv",
  "key4": "23oybp7XvEewDiJ1tdeyLSQXEMPmXKN8Nbb3fq2Ub6vCKZZrTUPTLv2HwXnYhz3Dy9FaLHXorzzp94Ts84HQnweP",
  "key5": "2xKEx3Wz38AndaPg6BM1kHTxU95uvG9BZbMkU63a4f5FkhQcicws2BoW69aeTd9iabs41xFB4x5NVxthT2twCvvE",
  "key6": "43Biqrf7gVMjR5ec8vCR1pWa5QRtTH29Cy3FB1HtnrzkGNu4hHtvQMwMPNHhKLCrcceR3cqa9c1hvp7SmZeyrbC1",
  "key7": "5Q1VB3NT9Rp16RdfvMJeHyZ6TZ4d7LcJ1i771VTatp8oTxbZcvXRWXqwhzoDe6Unw9m2tBbfERMXb2TYcrR2StqY",
  "key8": "3nu5xeLDVr4nDDWjxzrFYxqzwvDoGzCWpWqB52kkHNmd3rrayovzjxiLJvQxLmeG2r6M5tEKTakpNzjPvMSCZkdS",
  "key9": "49yDkU83SEufxNeM11V91W1sRbCt7Vx1HEHYioEfWPu25JaJm5YEqzUr5MNFoicrGRtYdccemdDVa4FeBqrxKVhf",
  "key10": "4o2ebXz9Thjv6vmSHGwf6KENgyh99e2CSdXpZck94on776NEguamqEdh1FxiweUCMT468yUzSMAKsbA6LybNGaH1",
  "key11": "5gaS5GP1iqvtFnKGxGYoY1nDRQvqmcAYbtegxbActWbSTCaimGoeuiD4ZkNbRAxjeiwokQYM8AXKKKWQibdN4Yi",
  "key12": "31BEBJzA7iihP6ha9cpbrxTq53J1h2hu6L3jCfuoZYs8B4egYvbn4GN845inK1HXVWuE3mte5kpT7XrjfoY81ffC",
  "key13": "2ksddrvyysDWeuWnokcSwMyGaEsxAqNxuT3UMpJCucidsGvhSXFrcdmdQHh2nsLbTBkdFkcpboZxnVCZvLf8eWFm",
  "key14": "4tUxzUVxtyrcnqKg7Kjpe6u5Dj3xcBNvxmnaYAENSTdWur4dUFEtuzuLn8uZAaFagjawunoSyi4t1SMxPwu79Bkt",
  "key15": "3X1tmtTCyTgHjzunRZQReGhDTy94CTBX6J6xUWCe7hpmeHmwsgRzgVTh62iZMRFa266JXJNFEaZUZDquAnHVZNu5",
  "key16": "pSU25VCpxEuvo2bgukun6DDqyZvXt2x1zC3zXqTz5eoGeAnKRKB5Gfc5syYdMceYbtiYHphC3JazuYcM8jXPRfY",
  "key17": "5xakhK9bW7Ah51XxDodK5sanNcmooTjxFLY2wJsbbXk6ejjyzeBbVmKzgmsuAyJ5v9Y8b6izbmp6EW63tRXoQAm2",
  "key18": "rCAn1jM1FustBEeAZGsqBhUTENNCg7STFXgRAYkKBfvpW5wbF1X21q3wJroht7WNPjZtf61LDQqz4GjzNKJckxT",
  "key19": "2vwEsvpFzuZj2SA6xN1GX3YfwXndAYcbFRQqg2AJjymngKfkfJmVvxeedhRHWZjuf6aA5KhG1hqCC64PcezLZvzD",
  "key20": "51aYDCw8yzGwqqULvSFEq8tpbByF2DnbX7eySdchZgpLTMJCFJ9DUxe3Uo7Agqp3jZdfXdqeS183te8msfJt3QR7",
  "key21": "4Auc4JZ6JvFmpHYZzfDyU6nmxHZDm1x2CkzfWgne7AgRJk5ZxKrtGQagnMUXi9do8VNG7f7c5D195VnpiTjgDF7x",
  "key22": "siqiTqnLaJ6Yn2p6PuXmGEgBo8GcUDLHc2FYzQHvtgw28nipjdi56KazrZfGqfXzM84PLJRS9PmHC6xyvpUm3E8",
  "key23": "3DhUzvfoEzE4ZoBt8cn1M6oBqezSvpiAyQdr4TYCr8BfKLeg9WezJo1zdaydvfGHC8UmRr79bAH2apaGcVymWTvd",
  "key24": "3vUpmLUjDbevoEw5YVskbznqKTHKaK3m3XP5b9XU7G3yz7y5tUKsceNZEgWkkVfmaGtcbH4aJxe1UWvrgy39ZQMH",
  "key25": "2VkNMgkEvme3QLiaw5Yj82GyVDwQpKPmHPFkKxu3aTMLomB35PE6Kxjfi95ejNQcQRPfxZUGMHZC5UAuoLPM3YuQ",
  "key26": "3u28aR7YYAZTqgdJZVQomTGq8Ub7oikGwBL9jXhfEiJ1Dsmm7ZiTZorgFDratqbGQgDds7JYmTUrJ3MYTrGmAEEa",
  "key27": "3kSx2z44WLjReKRL5LLgVkj3vuxh1kzNstmTJzV9DThPmh36GVKRyGVozj9c8pXsH3ZKAapuTiNwpWG4bsQfmHZw",
  "key28": "5mY7v1P4EwjpBLvWTEkVgekZWMQgwXvCu8QYzFWsRvqcb36J2nZUrC6WpYgk8doV81EjCrsMAYCgQQeuj7TdENs",
  "key29": "z67t9mRQuKpnhLA1NJhzcjtjohM1WsVPvy5FkkoBHqfztffx8hfWLWgfnu5thjcbnP2BMhcP3tCMYgrY6XnznYf",
  "key30": "5ceq5czuNEVPKACn86DTwr12XQXhEnrNMaDUELQFdYYNjpFmhEguw6JFrvo5P4SZCtw2sp9nTuSedi8TykWdukV3",
  "key31": "4gghfJQes7ETsBevGTg1TTabDTpN6kkUQqtrqYruvvhojBmxwDsH57YbM3YZrrsQMemEdmwkq4EeMhTaYBc5EHJL",
  "key32": "2kXobHSTTyRmx6ZghgsWL8Pcz2s2hkAMp9jSaJ8P6si9N5qz33MrZ7UFq9H1sKqxSAcwByictZr4jM5wyhJRLiV3",
  "key33": "2tRfRj86wZL7DnFspkHXwP1kdDXwpZZWrYDjFEQL8ref2uB7shjNwmFTssJmMGayFbW9459jh9NhT32ERn8s2ABs",
  "key34": "4MFBCHa5HPN2b5RPs4ZKdTiEig225iXVtaNNtdQUf3kmk4JGqh1YXtT9yQ7uYDEBW6LrsBF5EFBkVTjrm2RJXDqh",
  "key35": "4cYJor4HNQENK2GRpX18MPj4ytSToeCWwGVo2ZiCXsfJTBooQeU2oN6DQq95r4feMCAsV3gWRVL8F7vy1g9XTxcn",
  "key36": "3iAgJ9neCcSRNsy3g1vNm7KiJHHVEEma681ofydVewoMXJ45GjWC3knPBvQKCwaWsPBaVto95RsSGNfJX5j65CBA",
  "key37": "5JESLQoQtxgpR7c8nKNuWajjpkthEM1kAAbpSnHA6U6ES8wraYduUb393YnLn4gZYnrBgzHNSK8fKmKQFeWQVzwa",
  "key38": "29QcxibXdqG2UwdHhvhS9qD7jy5aM9VvmoVS3Tr6yPPU5LPynvzJCv9Fv7CnufPxsn7FEn9gtsMw36E6TFtJYkaB",
  "key39": "1XYhAS7k3JS5kUATWhkwnGo7c1beqx5qnibwohsTP37znj8e62WU6BmaumEqZVe2vDmMmUQd3dFaAXSPHAcLYmo",
  "key40": "3vB3ZdkFu1AhwMpuBCPyjouv4ATBESuWpcRaTnrYdRscpd6SqjVGeX4HiFLwkqJ7o1p5BAet8kRyPaPEUaRYWoA5",
  "key41": "2Vx35geKPag8pHzfeWwPwGEN1JvyuSJzCZPBPddCWhLcNnwqPmuDnZN3GaFBoRJ1EuxmWa1m7vDCssesxiTY2xtX",
  "key42": "2qzEtMR7Ns45WPvCpvH5YxPrnn5v67Bm1HGnUKB1yrSsNUsZfU3tRaPCeU2Jhtr5LSd1gNqgiZPcnqc7hoSSzCRa",
  "key43": "5oVuakYvjRUhx3Z1VD3voy6mv6d73ezJzCZXURwV3R1mehdnzznr3jUxrjtucNQvQEU5z1UCgjD4JVVHjU84mAmw",
  "key44": "4iPf7d471TVFmEzrYfRZN2MLXrs5BQ3EtGKsagoFyEqM53rr2KAYzvX2Edo1W83GTpe4mfvSVJj2Q7hrk7Ff6GGN",
  "key45": "ifcC66dvytJEMYu9iR9d3vVitJz1x5AkvDFdcspVrhkFga6CfDwBJCBD9rTPLk7VNGoAcYm9RCyBsnnxRmgwZox",
  "key46": "4ThrhZBG4oab6WvffhLsSYxX9f6ZMejuhvcWR4CYgRAXkzktYm2YSvfMxrW4nigLyQUWAWxzh1m25mEBhjTQ1THt",
  "key47": "3gDZaetx95Y8sQ4xd8rwvCPvJ1xyj4Adn52yXkQMiGhpSYR5eab5RK4Hb8CECnQcsv1RpNCq2saiUkZy5Xrir29z",
  "key48": "2EKpQzxvfTGkqPNy49kAy8iXdTzgRfCWBPx1D1mpzyyXwX7yQspsf11PvBK5Md6jgBT5Tki7WNtgpyoWuJZzseBo",
  "key49": "e2iodwNUnoQ4zDdw4RRvkpRWdqf6QjPz1E6ehBXiEHVwAAA86QrgxXoBRD6hQ7aMQrf66XAjP168p9TpCFxyu3Q"
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
