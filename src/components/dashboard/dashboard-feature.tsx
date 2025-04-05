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
    "2GHtrzTiogREX51Je9eJSQrT74QYx2j4dFVuNQSWovneggjDduf212TBL5b1cCJnfk31APVxxdgvbVBxviCQn1Fx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jdSHwSbXDNkCwtG2iXMMNxRF7UoLj5Mp5bQ2hNyCVfAGAyHtN8S152Eq1stEgbmDbjzKizt92StuboKs7EYERLm",
  "key1": "5oxup9LWRfe3jkRds5d3WBEMopR8hpks9yRZ3SesNtK27vohgVh4cwenxECXQEb3q3Jk8MQwnd5wVW9ZhHeEd8zT",
  "key2": "i6uT7cyzYDmW3z8uvJN9JD1co3ENXcrZyEgnJiCSUJjDLpi8QyivgML3ofDN6rk4djTRCSe2b2Y75jhjXUuu6p2",
  "key3": "3ELkdMoVyTYCqDcvpPwvKe7HxXem8pBPe7fatcEyiX8mqSbda6oCRbHPhmR2UbD6GxNm9UJsFAcvoYW7AnhBNQzr",
  "key4": "4gw4EKecqxHLuu5JimiYeBPC5UjwPf1cXqnbNYTvg2H7geB5muiwShvHmWoCfSq5u3XYKxHgiDLrNszkKaz5BVnc",
  "key5": "2iEAbfetcvdeKK8n2jMh6yESAVurVkZ6mCCTT5SeCBZcfspoZjH9iBMjXavWmK4q7VYABwsJf3k5MTNr5812EYK",
  "key6": "5SnrZ4DCk5trZx67FC9KtMX2f9ctCCSduLfsZVyG6M6FwL2JpHJgzdNMqruHmHNKyvJf969rD5wB4wVfiAKQwAcK",
  "key7": "MwW1e94B5w1CPYc7XTGRM2TSEmK3GT99FkCn3LJyqe1cUZT6KFVbYgT6zvF7hf1ecpfn4N3oqzGwUvN5jZARvBa",
  "key8": "2cMpgucYx7sWwRK8WwZErwFsmaft2to4h7UxHY33kKpYT2GUHRQTnkhmzZXdJ6L6PP4KG3by7AhHKhYyhLnFe4Jd",
  "key9": "35evbinmdvJTMy6HEcsBfwsyW6uPvLYF4CdbXT7MWZEF9gvWCnm3E2rcpfvXaSmFi92Re7fx86fjmYZUfbwrK9M2",
  "key10": "2AqqinsH1WQn2V4sC5qwRGGzDccLEAAzrpkboAr74E23dh8oyVGkaAVaXkzX7BrAPm7FZYTLUsVLYGKdDxRoHDxF",
  "key11": "1vyof5AsbV6QxbcC3pxMaVxZ1QSDjeNNtgUYCfBUfkhTULsXQaV2hqwDcMLAEaVysndWimQo1rD8wMi4BL2yJGU",
  "key12": "5KeNBf3S1qAoEXTEtGDeBV8sxuTsUixbzAzSjuuMaK2otNQaBbf9ahQMvS3tPUfw3KmiQaPtjRzj13pbjJP18doN",
  "key13": "2ZtK2tDjEBVYphpAJqvfdf2QDfopQuD7wtjJagLoPqKSy1SGte4kN4i55a3Ey4zU5m8mrMjF7ohfu9kSYYj1R3yZ",
  "key14": "2bEcNnqVWdJFpuuf7AcmBAfA1FEmDkY8jbW6YTUeyDV92RqS63ehRXvQ5k9VyMzb4hw3k64sYy1zvMN7TjP9nprf",
  "key15": "5SMhSdUKkyKfUmUd9vork5y2PBqB9pZ2pgrBsojTNxB2yzXFwgEV78Gi2ZN5EZoNfEGMcBsay5njGfKzLBDtttxe",
  "key16": "4RfL1fXJVZpX9Pf6WWRpnAd6rugqY55jWan199Jkj2fiMYYiyJMzUsm2SKFuy2fBkkuWe6fYQvpu9yJBtRUSefJ6",
  "key17": "44TyNkqp4ywPikvpUKMvu4ZWR8Jwnuyiv5KFNCoVkrW3PzU9RggyHuESE6EkokVd2Peaab9A6EJ4hxEAPqT5DrQ",
  "key18": "6635EFrx39VSg1Mk4SQ6GLggjG67iuCHxzYJib9JrPucB6Zb7LtFHRQBGxGZ9so2dHaUWKeGWrMZqXVTkdfrL56y",
  "key19": "48zz7C2Grx1paKUog7jPUc2ELPK4HG4FWtuWtai4v4wztotca4xENRZmaj4Uk7AyQMuTB5Y2zwqCJZfHrm1vtKYs",
  "key20": "4N4vXAap9S4bkgFemEp2BKx6CcMzfBDjxs1w9FnuxYhHwZRGmG3ZPzi9AsVLmyAqAQWzZVrwhdTxgNBkLKHt4Csv",
  "key21": "49yQFuzDpJAr1PADGRc2UsNqPr1v9LFWqbkXKkWDKFA2zrfeZUWYc6dL9sGWGVamdtEzpE5eoCFP2vxU3qhksRHa",
  "key22": "5h5THp3gZA8Dxay9Emy4XvSMmgVZkpAW9EcCx5siBwGHvKAvPHsuDTVf9wE6HSgVTthWwZPacxxXfRjjaM77Aq5q",
  "key23": "48HP5SnvVZUwuSetTEAUg1n8Eq6LZf5Zky6z26H7ArRMPZxvjTWUSzrZshmGpSQj7xXCGMCyM1KxDoHn5jtvgTrb",
  "key24": "eEdzyXCagjXRDnJ6pLA5PskCY62TmZ98LUNq1qQK4W8AvJjU5JtYQYiVLbLjVnd8TV2cr56VcvdjbQ14zNAJjKT",
  "key25": "fAE5NJaaCF9zpy9iNgAtgx4q3ac9gU9XJqRbEeE82oAjQWFufkyFdcw7PTrjinnxwBmBz4QKqWZ72Z7DVBM6xEo",
  "key26": "uGd8sqMVQsgnrGmiEnDaZgXgaPWktuR2UzgRZ9TRwbP6D2WJrAzN4mP6XixJ2HzNTQ9bA7dniGj7eWmd7XWiZst",
  "key27": "4vreL3UoPMoz1X93ekn4YaEdH77XFU1eDWDiuRMzEWRBtzk1K9Mcogag9F2Cn6XdVximDv6DV4PSxvL7Pu66xnEu",
  "key28": "2njCsE8nQTHaLqngFLae5tDThH8PLCGhUqJzVy66uJzzBy8PkPStAokp9ZyUYPKvL3LQPiNvLD15vuNqVp3LjLZ6",
  "key29": "554Un6TTy8sENdFDgF2QrBx6eYJB3yDu8i3sAxp9XGpMrWpsbasYcT5tQNNaTkojc7im9RrRnmWRXFqQHFwFqNxB",
  "key30": "7dbZ1Wj6ARLAs9ppSDGsZTQpbbVG2Pv7iumEcRoH43gSYXZHnwXMzbPzxJiJhE5pAqKxE4j1C9c1p3UVSduUFNF",
  "key31": "67BBCQcT371ZUfwZZHDru83g8M7ax2d22sF1YnjiZb3Dds1ybNSFxGzx7gphfUen8g4JtbeHUkBMqxhAMvz2HaN3",
  "key32": "2HtQvawmbGj2MiARzbpA8Bc7KX3znMVLU6P7jj39i7MxWjt3u43QT1EbtYK7n5fMRPq3fJe3CnhPfNDUTjTk4F4w",
  "key33": "2ZS8ToREoChTSBnPQjshwB66HYfLgHyVR9Yqcn1P6E4MaqkQmN6mckxY3t1yQGQULaUPQQzHLdnA58toRQ8Kmz6H",
  "key34": "57piEYUHmN7fd5ptj9RHo5USuGeHaDQRaHeasi6RNuhk1Xded4QqFkSyYVsKdDf1EBuA7soXBpzG7aPteqGsvCJu",
  "key35": "5YgkPuMyW123fCmGEYGeiuSCk14CzTKZrWRbqmQq2aiNPTjWUGu7onLN5BFNWTkvSBaUJNEc5PCgLvH3gH7AjLYV",
  "key36": "2QzX9Ka3x8EZMGL74FAmsycmK2dau6CgaefEde5zTvNSJvjx1SkiZ54qoS4N1En9HsPsujPt8XfN9RLyztv6Mx8M",
  "key37": "2yXkFfu324oiiAQ7WvXmqF2RrRzGUTmZfGXdbEEGjwR4g8y9sogmepZ2umhT1QARZTFHTBEcAf8864tqKfSY8RXo"
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
