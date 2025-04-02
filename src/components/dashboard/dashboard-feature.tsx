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
    "YgxJJoq9Lmbod8ygS4q49Xz5taUNCLYuBiNKZUHc8Pvc1tV7U5efu7KxgpV2TjeYqQhCoVzYvRj2rxB7n5dJtTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cxcZNuzpEGUXwjqrN314Ky6cQyeNyaTwY5efviZoggproGoQVtsUxMeZmisYfUdWB2cgBYnWFW1gxFJTEH7BTKi",
  "key1": "48uH7SAWvVLDxLAbCPUnQD12zjKFdU8eb37REvefSnuQtuLipLQp3GFWgsoebzZDjhRVh7hqV7s9VJcyuHgpy5eN",
  "key2": "J4FtEjHLZYMHniCQXCZKjBN873hrkqvPLYQCAyG8cvS12JZVfe96Gimfr4w9rTJADaDY5yLwqFYaGoQdt7vJm2c",
  "key3": "4EEEgtZiB41vBp3CV61vLujvqa56UEjiJQttgMedGcLmc1hiiyXGFCsdCgigPgc6JrxEtWKto2vEVChFy1VyF2WS",
  "key4": "2c871nr4ZFZx8zEmHLXkLLMgMH4yHGXheWYjoF5ooDhLXBWzkv49BHNtTUD6Xvb4ATpTP8pJZPvSTnpRqUCTveiU",
  "key5": "42LdEBbTPQatoDywqSv6JLHzF3rCng7z5aVYs4JsBWJoNMgoQAiqb64sTXibZ7oKT7rbt23i5fw8GkdEfeEbMAPf",
  "key6": "4KHEmVYzVRfcMHNLLxaUweCbiZbYrAAxeCAMEmKS4fNpTm5xvZykFDrtQYKMkTrrWHo96np3EhuFUKsgyzvYRYYe",
  "key7": "56qJofkUH4Vow63fG5YKQxHaGFhfKkJBniwgk68EPhcQV6BCQzLQfBi8QkvAYBj7uBmD16PL7gQZX6Hv9UfDpiV4",
  "key8": "3ngTwmLZRBeFjQtZmkRXdqDtK8hQShRbQneWtEt7VucjDBdKB6Bt2Bg1kcND5e3ZUyX2LpNEdcr3Cjd5jHsGoP4j",
  "key9": "5XGezoGqmCn4KDKsCAihJc7vuZuGVfLTgTSWD3D4SFVuk8ABzuZvj9YFr4QvbKgjmripLc7cE4mPVPDBjdGHzRyP",
  "key10": "3Z6j9fm1BS5H5x12Z6sZX7XGqjEknJSK5zMnfunHSj4xhqBsp7FXDKBULZvTeDSiDAM4Bsq5LHTVbWkYfWHFk4W1",
  "key11": "BQ1gf5TTQnwAXQ83YaJLUNYLegQpBTSgwRToVSzzbt1zDKXc1DDY6Y2etteu5DkSmua4WErFt7btH95nEkfwYqQ",
  "key12": "5HCQa234DH1eAwjaV1UCAEBvs1Mzz9RenfW4ptSqVv9tkB43hnvxVqjraSvYegRzRvqqpD9weFFnpq97CTBJg1Sg",
  "key13": "5uLopRUU2rruZYdMxkDpKNdkBFBJuQpQU9q7MdsTVihw7yUmL1osewgzN4EZXDwbV6mfUEBYh8uxQu5D6We8hGGv",
  "key14": "EW8rPCUEWvb1Pj7x2ymUvN1vMzktqmiRtwsw25x7nWwKsVF1knMj7vQXuBwk6w9nhv9tgXQj4CowEBSstUVM67g",
  "key15": "CPXMY4X7uh5gvqTcAaia9vDHkamWmvT4g24gGz23diMnmxWiobJDTAQHN3aqgW73Po8VykcMzR6D22JmvBRkRVn",
  "key16": "5K1no4ZngBeJ52DSBKbH81GmRhh31SE7eXccktQnXBvA9pyKHHtmqXPx1zJRkaaCccpQhG7knSh2TnfS6gLdtTvJ",
  "key17": "2ubgAPic8xe9Bn9KyCkWurZkD3emTV42emEnaQqiZbZEaStmM7VEJ4cVLxQ2jQyjcp6VY9q9FfmxhL7vZw9XC2cr",
  "key18": "3muT87AywEdsSHwpoNLuVKa3RThkgKcmu9ci8zE6H6HaosPrnDSUYhzNW6dExjwYFzr1tdVukTHZeBJV6qUAbFdZ",
  "key19": "32cey2x3tnd5sBvoxrKxJv2uA7k9zBDH2kWuQZ21PgMGsNPaTPaMKkg8hz5aCwS2szoiLueyBPsNwxmgMZ1NgRLm",
  "key20": "2h4NTMPXmm6pa9rVXPpguG3YKesXRXfo62ERDVcxiDudy1FMmg5vpbdvLzQHhXiBF1Sy3yAWJ3N3MVib5kr6nhj7",
  "key21": "2BqETeiXgLHVcBvhkEtdbQUe76kouHYr4o9bJJGFsyGpDEDdjxzpeAFb1pwMZWeruQeugTbGSMZs1xUVtKqMXLyq",
  "key22": "4Es133QtYHZSCXuRKTv4FhFFUt8pvZjCiRgotvaQstjnaSuqcDvWwa55DuHNknTNDdZZapy2H8mo9kKra6Nss6v3",
  "key23": "64TYQFFvZe34VzPFtqiuFpnQ5hNmYY1jggK18fEvmDs8zfkZfTsY3kXpB4FNXN16oRyxrW7jBBZDGcdgSBnXFt4U",
  "key24": "QhbZmXbiy19Jnupcayt87qKCuUAJeU3oVuoym7zHrhai1M24TP3Wrv4zAaQiL2iGxfvirjsFk1MaSNKcvR3uepU",
  "key25": "VS8t7soQep9CPtPygBgd3WJjeE3sNxXCf8MM6ZsuDTC2TbD1UFqhq6bsJ6qZN3UxRNJjJJ9MjFr8x1FdPnFzoXL",
  "key26": "4nieuQrw6WUmdGHZvZW8vrCUYyiggKyUZdHdyHgNTHPzkxtn6pt9QCc4yrqGPirm7XSiL2AiMBZ5Ssyfz7aegMp1",
  "key27": "51Jt2S6pRmkoAK81DxMzx3tgJWSMbY5Ngse9z8fXomqijJPa44dA8X26doFz7rxSd9uwT7t3ah8o26WLVUcVAttR",
  "key28": "f3UZYqwZzoT8KJm42R4qFzGJQJMHYdHYG6T33UCoJ4YaYpdVnNSDQoFopNj3WXShGPUPPsehw8VsSsUBaVgcJiF",
  "key29": "3h6yUY7Wd916sgA8yvhN2nKiTNSXEmzAern3ExBi4iz2PN2m2LF7Zi5K5u5fgHeHfUvKeRc2acmVCmqqZHtbafr",
  "key30": "ngKYD3ieXjVe4Txzc4Gok3fE6MF3Kyw8gZLMCoZzJy3r1LRYGdDvojgJXzkRpjsJmY6DfLC6ve4HLimGnW96jEV",
  "key31": "oyNKhfiwkDJrzDHvn58av46zvzih2jUz6GS8bLakVnQGEXaYYdkZv4NtGKmHaHzwgY34yfRioDaWWaVLPDJ5A5b",
  "key32": "3N1LLF6p673E218i9MSbEpKDETWcmRKrL8ugmm5xYieE6NGLUds5JxFsA18SHNu5xxREBENeKK7rsSs7D5cFvrVU",
  "key33": "ftBATZ2DDwBifXpawCYrebtW1qJ7nLBhjW88mABPWnBceiC6m65PM8PBh5ZGicKxfRVE24LktpRDsAb6XkiPzfc",
  "key34": "8xJdYWVgaiitdJe61ZKkxYYB6qJAucW1kxREQ6yu5uiHNacUn1TreqfjPvgsGbf6cfxxiKxgdBNyCcgaQ88toTD",
  "key35": "wXd5jdSDpxsACB2P3EReScKHxkBVP6pzgQLGhjoZmCXTb1m29HyRVARChcuBpcMfN1Rmm2ghqN7e7KNvjn29Yzo",
  "key36": "5ew6hswwU8EDnJNapKcPFNQzy3RFZGCxbyqxUd1Kp4k8zFUfnTEi25shFuKM7m5CeMY6ebY2UAkETunQPMG8Jt5w",
  "key37": "289QPxXXUcuE6YCeomy3rEkqoLoNvnYcP4TedaMUdX9MByfAG4Us62RJrDFHRi2zd56bK8FvE1UnEWbSa92FwSq7",
  "key38": "5MuBFCwEisfKs6CxjCZ1UX9PML8LymBRjiq8d4KLz9oigLaPwZJ9UxbQrbaA9LcwN2geWdYfJgDmXs8gC24Krhj7",
  "key39": "2ebL7QmsrFahdKXHZ4jTjX5E8Lyqc2Rfk6u3wKYcmTq4reDDuBV8wHme8Db3F5roTcDuVh7n3mQVSs2MXawYsqiL",
  "key40": "51BH7pZiet1iXJwYDFj6CjRY8C2YmqvAxrtjM8ktjTagTf76aKyrU6iZ5NXTBQoZM4p14Ftxj1RRKXEPxLVoeYDw",
  "key41": "63rqLW4VJ9EXKEobdMkp3earVVbCEzCX6vteyFMD9d1rdnSKHmKatghA9FD2dsGRCtV3RQzfFRJirHvK8c2gaFN6",
  "key42": "5qnASA6uYmzCbAb28baXajTeyM3gnQueS3XBuycWWUACzWVN7X1sBNuJoLVUKd1XQmZpUZWsF9yqumGrY48r4BUQ",
  "key43": "m29urg6CMSDdRfdWB3fvQrXCVp6VqmvWy7HqPpfKgUjYewT8sMwmaSYXDxbfj6aNdLzYG3Jo4bNR1EoCCmDNdR3"
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
