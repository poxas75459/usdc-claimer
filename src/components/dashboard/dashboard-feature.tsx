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
    "4C68p9MUjuEY8yrTFxjnfGcAhLpJGbftrtyn9nJHN5XYBkpyyToQhwQExevBHYtif2J6867D66CCKkdK9vPWHWgR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yuAJF3bgQBSnK3E2qEghkDHYvNDfpjA87R16cZTJPXANZcyBpzQJSkRKf8mFWuBzx4Zg9Da94oFQZxEj81zk5cw",
  "key1": "2ApQZub8nJprayWvP8ziKpPNVspkfKGGfZ4G1Dkryn2sA4PPBo5qTYaKjvVcgpmZhv2ribBzmkn6TwxVoWZoXyi2",
  "key2": "34CECdqugzV7sXXqmXdhV2ZdB9gLUUw1neyTmKGrmskEwVMF1dwmAzcWcHmZKJ7Mi72nHxXi5arDhJaQXnKMDwTh",
  "key3": "4WfF4F2mN4XgCrwqiA2JUU5oBrCDehKEYfNDdfSzMZD6jfAGbRydoHKmyv2qzmaqEHtDTQpbcqn9BBRmj5VBqttG",
  "key4": "4JjPFwL7dQ2d1gRgq7u7VMbzBeJzVa83qt5ZWvjWUUVjr4knTcV4AdsLmEEQpGxhtXgCc8jS3GMhvby9zURkW66f",
  "key5": "4ox6p7LNvrb2DasR6BVzXwdJfCbpQYRwy9EnG8aXWt69wN72JHTXXEE3MKY6LSE113coyeWdUADUoaWMhMc3LGi8",
  "key6": "2EhK7NPuMhkFy8TiNm1na7uzkyvF1fb2xpTJcEuEtcQa1pGYeC5vjh3aJJBN6jrCSxDbmfQvZGBPY2mxATPzWMHD",
  "key7": "GavLXHbq54Ds1PTnb5crKysawFByA1V6H7sHnN6DZEEXWKMC2uDfj976GAnGv2UhiQ2WEGgxrJE78KGkhn3HQ1Z",
  "key8": "4PKnvmdmTKD7AUcK8FtPrQH4myvpyuN5dm8dWPxSixpf31FgyiZw1gdySnTCUkwGhyML48Dvo4L6seszbwcLuYfa",
  "key9": "ZsH1Vu3EzgiYHMR6RMttWYwY9XC6udqJpFXjivc5YBN2j37owV5HejxzedmiD4oem9VHQV3LtpaKraUFY19zd62",
  "key10": "kVKyqMkpFvc8WrUix5TZP4mVSadZKsyY6SfXyU6EbKn8uFo5q4KxYgoiS8RxgzYrYxMrbGuZzqPzvqvaFGA3gHd",
  "key11": "3Sj6XFxreBUMMdG4aQkPf34X9M5gg39vw9vuaZHdjmRnChAUbgRuLjmLUfwrwPZ4jyHWkstu6zndMkkFAzf3vyxZ",
  "key12": "5FWfbxoDMoJSN5qz8P9Qgn7GEv3sV25DmsEgGHe95vPcQmkNkgkCU2iV8PvhU5E7APKU2M4nDsPbfjiCqMrkPtQW",
  "key13": "33UyyyFkzbvcTqdq9ak5vNT7C954caYFVnZPp8HRykoCjq2LCe8buquWPmju3E5TYL9dLhg2qggTx8QZBRuxXKJe",
  "key14": "59dH47i8sjEGWbxKjyH7BNGWu9NZmqguz4Ufmis8UdNTgAfptgHViGb51RUxs6SxkKmZT1h5Ynaqha6hx2bNyNFK",
  "key15": "2osqDKuJEjWCzH4ga6vLX4CaGNyivotf7dwndC8n7z3AUKvexj4vw2L5j63aNcYGTqtUVybgbRLHywPRedLEU4vX",
  "key16": "yqYxe8tvr4QXtY5i6Fz8TuKNnD5qMX7S1aZmZgwHGXNQhhsqXX4yBa6j4G2h7rU4sLa3qNsAXejHDvE4vzDTm3h",
  "key17": "5hPQLjNNHnBMt2wy8TupFx6GL8Lg1SsjGBKXJMzcUGJZP2iUjwMWLCd2eN44kLwnpRov8cchs9mYe29dA6KR2NiL",
  "key18": "3XMRsB8yrBKS6s9SDFEwp5RpKy3gNEYpc4DxVq2WqYSH63xeha6t8ktPiXbmkzTKiiovYK4HTLgZqaN8TBGaTTT7",
  "key19": "5d4smxpTrwFcMZVtTrBU2CsAGEvg5ReRAV2nKW6GiH37261AFAnKB5HsFxwEFQULTqW5Cs2YKBWjGPTHwyMeHUfu",
  "key20": "5Kgdnesevyr1d9WvKvE9RewtgjzawREBgK11Jp3wkVo1cyzat3UWZmthjQhTcxBZjVtoN4wYDAM9kW4eJdN6upPG",
  "key21": "2SAShX6cQzAM8jRAtv28EXTMikjvFD3aZxEoWkLeHXPYKezibGy4b6mG7gbWSAX2msKfZ6GBbX6wg67K9BSdiNeP",
  "key22": "4NcjhVd5oFE8UhiCZK66a39roRHLTdwKJp9JDpvpnnh4LVghYu7MfSK3vFCCWKQgb4PFtv2iTcSv6r7QDUpauC5F",
  "key23": "2nQgnUWv9pF1f1rieNFyfAvUCHdkshNbQ76Piuvbe4Rd2i2TKX1t5YhpEG6BBtofV2vZCWQa3qfGuDQ7o5wUE3Rg",
  "key24": "5H4XajYWSsUNsDpz7NZAh5uNbJ4DjznoxKmVJpaneMXAwjmkU3dPPb4SQxoccPJtgDmGdrM5STPQravc6FYjF9vv",
  "key25": "5VrR6PEUzuVYJmqJnCDPDNSS2ogR2eQrFW5bmrXaNYWxoXP6m7fLqTiFAxpUEEH3puDSgEbE4SrhhvgpK9nrmwHL",
  "key26": "32jJwFGuvDjTEGyC9GftqurJBNMdZNQhHws31gGB1AYw1qRHitrD8wWzMY9xfduWEKJr8LNWDsvNpENNqkJgFRKL",
  "key27": "4Bd4CC1atQMuiNgDRenTqdvUrfuTZvwzBNooHR8zh1yvyQDFUcWHKriH3LtbrjwEcmgK1F4soT5c6Xnq5SKroqiE",
  "key28": "4gPy5NecVTbikLLjnSG2FhLHk3GNjNeLKGuLjX6yFHeNyi1KVks8cGfM4o3SBDzzyJEDARnGRRzQQh2UZrcv9Wue",
  "key29": "5Xt6WfCt7gx49SPhRhnQmUCC9i7TgTeN4c81PnbbvGERhvfcUFZGXbTQ82iDpjn61nJgbjQ1mF8V17nPk2AFKZqQ",
  "key30": "3QRxbykqXNgTjCEQDtaU8EjWzXU7nKbYRvMULibFzJGNQStF6Se9C8xhWSWdzWLio9xdKzZGs7i5KM2DXorVNjKv",
  "key31": "3DcX5yifFLnKo3hKwF2A9hW3AyrSFjBPKKeX8ojLyqehoz1mz6MJpcHHq5u77BxPcziu6DoPEdsQKqE3QXQy2BKF",
  "key32": "4pVVTVFZMoZb41ZG7UnVwvQ7Mer5Ti9DmH7S4JUMDcEJstC8PwDXefTscBpFrr5zqi7ir9btoZFAcQGepSmeMx9g",
  "key33": "2kLH5etxbrzh9dXRzYcwwxkQjNeNUyaoFUErub7jxpHCEFzr1P34LqMfJEoAbyekpBoAnRf4u5Q8ozjq5XLXvCHf",
  "key34": "sycpZ3hbARgfR1TJcBtC5dpTrwaMhtBQACAkDRp5ThPwceuNsPedDdHZbB2QzXzVNdpUcf78pYwQeE5YRi3FX73",
  "key35": "2Gd6DgCjjQfziGFSVsrqwHr1F6bnQPEn8xhZkMaVfYvEdLygpewNSkHyjAisGey9JdTFpbXfnDyVmWrEVSM5ZZt9",
  "key36": "2R91tPE7AW3TzUVF4rxcAvGpnPC69SRhc3at4qHdKSopfJZ7mwyaRuwXJM1cFVTVavK4WuVRu8JeisEUMNV3i4V9",
  "key37": "39YN5RWHjETbCv4uzB2qvKw6WtpmuxeangiADp8kBDgF9EbDzvCQehzuAz6ZcJpH6f3nDPPxjHqYQ3NavRwTWVwp",
  "key38": "p2znTG1rbmhHMvRT5YvvdKxRWSwdoN9R8TxRkTE2i7NyQHZsG2skAnGm1PTCpSUVZKFjoPcVA7NMS2zZLf7Rtdj",
  "key39": "65zWiN917vGcDA7mcksy663zLTTzLTMDnw5v4wRH9iSbnV3ravkdLDGQMcuoje48s17nmz7An8C4hZGWNXWRV4Lp",
  "key40": "39uhPz259fSAVtAqfu92UJhAgpiHYqwLKZqVNVFQvG2SauDyoDpjTpxWAdcBBU4VSVKiLjnVrzKhsf8Rw3SNG99K",
  "key41": "5WjG32HhWqXeu7zCV43eLSxkWw3VMLvwHPDue1C5T6RbbRoxMK5giNMnTHn5PcgVWSQN9eiNkPnx5Jrsu2r65tho",
  "key42": "2UjtoHcaHhZNgL998AhcKF4dbghU4DJDpt19QjpypPZzUn384Huso3N8QtC6X2qMqQba3n82jtqM4ZHaKzz7DMDh",
  "key43": "5RQ4xhMQtfP7yafvChVeg2yusAjwhpymGtM9TyckEw14n7yU1v5oAXMqi2T6WMYogeZrQ4ju6XW6ZSG4UUJPQsuQ",
  "key44": "46JcYo7oCs3ALkahNCEJozPCcWk7HD5ipjrtFiUSuiAuw7n36jyYjompJAAvAv84xsQLmWeXQWtWzjGDyPexV4mn",
  "key45": "2BPWPJqFPuwcXQL2gNqoquU5JERNaTcdVuXwWZgzLyQSvAXQKDsNrjMsLZU1nuLKUTFE4HkcCEjV3Qqtz3rfRjTy",
  "key46": "uShR1oDYftaLN8YPg5xhHzeR6853vEMoXB5rSPcbwCoB43Remcz3ohomgkcN9iWLtLvP3Q7LR86SEXrTgkohbzp",
  "key47": "5h4zEAV2vqUc8NQGPet9ncrmex5gMcRpdXEyv9BtqXPoFayEEbD5yhmEZCvwCVdgT5h6zbfDsxctcvayM6XZ6C8S"
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
