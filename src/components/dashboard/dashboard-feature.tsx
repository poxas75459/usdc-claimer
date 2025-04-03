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
    "5B3doTvs3PZab3cCN2X3qc5jX7gMxQvMyUXUtq36f9d94DSN5QFMBUBXqUiYiyCR2Hu5wmPZopJEWsoWfX5xRSVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c1Tci7S3bt9bssdN6CGdFXtTt6A5zRuw9DzpeicGBHCjJ4895nMqbjY2W5wkCmqF9T2DN3GeWnuHNW5e588cxC7",
  "key1": "5QZtoCVyd1XBVaQPQQufqK4HkW2tsNiiyiZrVnndi5o7quScZkDcHtvxckY9yTtv79pjM7wj53Q47B6PduGeThWu",
  "key2": "k1CGBMgNTtXwzoaJGAqHoaZcK2XZK6BfP8kpqJLBami1Ty7oXEEqQ4xSV2mwPic2UnKY2FuhEk1cNP2xwMZ2i4S",
  "key3": "51Z5pzNzdbwNHUbtkVPuuJ8VTfJxJ4B1KxAGZUrueztnhFb3EmVNwUZcht6wm6TBJCi2kPxTTES2Cd1vwbPy5Qtm",
  "key4": "32mtkxJkZEuPXCdvCf6eLgVQpB7zXGHv17SJ5B8ANDBDKx7Eg6q16qT77P6WuZMYx9RpcKtqQsEf71AqiCssi9TG",
  "key5": "4B6jP22ULjNdXma5ejLPEXApWc5nztpTJhpYQDUg89xRTEqPEU2Zkr8dLUDvz8tvybNoFyw4Qgk68jMFDww95DsG",
  "key6": "41J3dB95wQf2hJ9MavAKvBW81ezANe6sEoQP4eL5z1bu6FPeovXp9V6byQ1PtyBsKXFW945iUaHsLiHyySTFf1PL",
  "key7": "5UHE3ESsjmLCaKCbySTEfA6vB5h8QgfhdfRXmpHjUvREVsoFZe1XpKRWqu5iyBcZVUUUdZFDvBGC7MpkrHDKdeKt",
  "key8": "VWMNrasNewLMY2qNwHELWZ9DJNnvLTynRHh3Eyik6Chrd3netJUwamatraoM5bnmTzDrgAE8LuY58FkGaL292sS",
  "key9": "2x7QRW71R3VxUxBeJRft3xo9ApvSNQPv9kHa6hzmymh7544oUHEvFX94Gj8etzQhWJMr2nE96mMGQDieJZYwbYYG",
  "key10": "4fyqBAEFtpdyip4EQqNR57Yuej21P3hyXuhbUmG5QSB62MmufUf9X8uNoJ8ztJ3tBnZNrcwcBSVVL5wsrepU2bnn",
  "key11": "5w8anLD8mcMZBzmVqCJdCjMiwzzcbwBTH4Bzy3H8iGeip8buD3sJbWfz8xDF1LKgoz5wvson81nLT1MEub3DXaUz",
  "key12": "2L7Mcgpy1njHZS642yrwN6LSSyNrcM15UwuFJyQf6doFYQfpHcVU8Ar8Hu7Z1oL3k3kdCLSy9W1CmseXSrZEjB8",
  "key13": "4VuzzN6QMpqhThoDSU9utUaRrfkxFUdJbKtCMZw76GGKiPEzp545UjdvPwijLh8zcNzg2XBSiqoTx7z62DkH497R",
  "key14": "23vfWmX8hYjUKm4ZuQmDFTPF9cvSdf7dhKfDjCJqu2zSCc8YN5dQSw3TGa2zX3WpSfhrE9SvErGVCinEU19xStWg",
  "key15": "SwULjsMaEofgnPx7RQCBYeCtRm6YD9Qv4SqG7FoNyAyjYuUd56Z6GWD3PzqtrzEk8qYWoCiLSe5kBoTuA1YkG9Z",
  "key16": "5YoET7NvoXJVyGYdCv9Vw77REGMYZzN9A7GBCbpAsiueBZvnNQvN6ioV8kVA3s9yVFc8wTJ5VafzUNfw8PfCFXtx",
  "key17": "dqE2ibmvSjohdFhwgVqwjsF5hJunhPsXpyQyxe8CZxjUFDf5ksKLTjPMXoYx8Bz2TACNH5TzD4VzZPn2ZP5buYP",
  "key18": "3VnAg7sVrbLwY793BiYgiSshjj5XyaRiVpc6gE1hk1r9Uvfh886nhDM2G7xCFMi7LfD8rx2ZrC9fKx4k9eY9Fdms",
  "key19": "537WvHC5nSoAgFanMTr5J56GTYxbmjsXDoxbtKZ4VqE35czTcDcdEyQqAQarNRJEzfNZLW27MhMqhkmf7gATx4Ji",
  "key20": "4AQURxypaUREXXBpVo9jpKPHfEQXMo63dSTZ7mLnrF3N9LhV1yV7XGdzBkr3FzViyhTvPgoS9G3mMpkx69dnREzE",
  "key21": "5EZTfZe7zQnm945eV9Z2PtCBLGMEMTEwMhvKir92nmxYXZnY2utCU7iBEXQdM2vwxbpeknH1b8bCkoYTVskh71WY",
  "key22": "A1a2XvQGzjZvXQMiVs8Ec9a444WwerbT3DecWt31oTynnBwCpz7WBpRj2ctnFp593K9VWAtb4vnfX8f5P1xrtDx",
  "key23": "9FKCUcwxLwdXVuGvkT26hdJzZSsgPgMTuSvgrtiZF3XzejtVnHdWrCRTu2gEockUWfWMQCt1cUiyfhhSyzWbL8A",
  "key24": "3PnWAbEJ9EHWqUcjKF9YUaMDeUyDeWpYZNcC3oZEk9enaqN3AjmduwCkAKieWhp78SvkFL8ns1vgs1xvD3yQGJGP",
  "key25": "3vftrZkbkug9cb6ZRSBcxtbXR78jaEUyATKByxWGC92zK4SpqGGhCzGZr8BvnCt9aEeEdusiBoVdL2UKZ8Ppxjoa",
  "key26": "37ahVcJbY9FUneT8iEy9pM2NmYFKTpv9oj9aKthNF1fNy6AMbU871yE49VAAqutYCtrmMPwmrrz4YwCZgLWnM34R",
  "key27": "62XyXYfbdprfpcuoDaFTKL8FL6qjn3scmar3NTTUxG5gjk5ztmxdmUXZv7n9iJ1PBwnUjEa1JnX4fvp1dTaSdqKi",
  "key28": "2nGgzmMqTZS52uQ5iuJqQdYKwT8k8C4qkAWDoNwnua7RnRi8QKGUom9cRtfbh4e73XoiKAN2hSUwavA5cjR2Wn23",
  "key29": "25GXkbGsPCjRxb6C21KwxXCRCGUhnDW8V4BMFgAqb5g2bnuewXf7wvqx2nnQariVgsd89ERY3PdWgjW2LdwXPNhr",
  "key30": "37nttdvkiaNYMHm6vRuybxa633GzPyDZTE4KuH95sjfMfBpwyZpCWjkH72sGFiquefLDy8heCoipMTBrUJPoqfio",
  "key31": "4JkvZRLS2x3KrvgRtsdXtAyxQmeUzbCDtwFixZcQLbrUxib6s517ZjK568ce1berrFMKNPp9KaEKvJMr5oJYpp3D",
  "key32": "4byiE4Ybew3JJoT8buS3kB92W4dGQ6mmG3Ak7zwg2qT8yyq941uEzY2LgJ7rMn73KKBEA674bPpWyrj4FJ3tdAXe",
  "key33": "1sScmp1hqJVqzdqTbXZzvoBZzujjwjNQyNXtZf52Go33CDgD5apBHhhTEKsZJ3ABo5kh1RLqhtVcPsXmQzZHTHU",
  "key34": "4tucMgJgaiMzBm7QqfJDsAnPFL2V18C8Qt3LCuXLA5ZVnnCmzmyMTPnU5RicqWM2fapXsJ6xcGkx8XpgMoAeSqJ6",
  "key35": "3aR9nmvjkNaWUznncbtjG6YYar5R6u2WCrdnS3j7D2iYPzx1nSTsbHohiHJPiFZX7NcDHbhA3xKfPSyNbwGzYapD",
  "key36": "4Qq2GQmaHpGdZVeE66EikY1DYyq3iYsMxwuEGQh6p6UQvVifMFUxqfi6i4a8hcYV2iZYYYzZEtFSW4Dj8e259D2J",
  "key37": "3M8f2btkURre8TcMzgUvd5zB5AfmVwZjXsq2MXPwgBRYDA2Jc8XXuMzh5Sjt5KKN3BDy92ZPP87U3i5JVe2ZH1JL",
  "key38": "BXf37jvXq7k9xfJBYMPAdRYdhoSDvmep83uZSUgCtkg6jpSBJZHJj7npxcD7Xb7aVXjZ6o5bPaTWy4z7G4B1eNa",
  "key39": "4hbY3ccdxWQNcyCzt3LUACuP7VgXD1JpP3aGgSXEv8VtutKHtejcyy2dSNHiUwxLg3mcoDKA9TPsQSocSECNVro1",
  "key40": "fmsMtpaYdPNyWKD98orTg7JeEF5eyX7ABvEtZcXf8txgiawkpukZaPWq8Hd3vrukpkiNFdxVHvzUwdnfJ2ygheg",
  "key41": "4G28ssGYSxab3iV42nq1S6atJhhpEC6U8nPV499ZNBceqvAyA4TgboWciLKYQSyEPr1DzsYtJG2j36RCPWYc2ZKE",
  "key42": "4vhMKpJvNxzyJnsTuLzKPXSeiWBAnTVtBVGJ33seN87hAaVLgXw7zwB9TrmDosyZkZ5Y7r4mE4uS6cMqKLFnwDFY",
  "key43": "zy5fnPTDsA3pq2ci3YNaUQyQg1do8Y3v5nF51htW2GRF6ehrxVoDQGm76qMqJfUupbYshQF5EWGc4sRTkpG5sEB"
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
