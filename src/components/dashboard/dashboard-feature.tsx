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
    "2r2q2vq4XrFogqv9bnVLiJ2ALB6LHqXKP1YiRa9mtLbPTDtCKmMTWqxjoZXinmAtyViWEczJ1xtH63Y4oGGGWfZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QfQ1FNxgKtjfxYz3A4EKdXeDomRknfDE4zv4kQcQRWuN9xDywBsqzxGavVSoz89Ky2DxnM1PTteydQGhu5euBHR",
  "key1": "38vd8uZftjmhA9gqcojekp9oHa32jCFk4a6ieHJJyVZM9fdxkxbsviAy9KCdrfA4cBZPUoFxC5tZzJSEGPYWBvQ1",
  "key2": "2iMHEXAqidch2odVrAEurrW2yeohrd2qKqSMeKUpjSVv3qNCmaadduKK4wTETV2TYX86Vw5JRTacHCKYXHgEAZdj",
  "key3": "3bgiMkxNZgRYsrKums8vYoH5mC4ufgbhDdugwZNikk4bV7grEGDeSnSe73FasqEChP14piGAUMek6uitJEFv1fLK",
  "key4": "4MVsSdKDNjNkdGHPg5Smp4NZ3p57S7UiutaovBpDMKNXYVRuDp3hAU5w22BhP8HsfZMnMJGsgU6G6h5SieTQ8RAX",
  "key5": "3YAs7KLw5tZfduF86UpskbyoA4WVYa9KFyo2vR5hit8PcwyKosuHgymQzCmbses8JbvZxeop8DkieendDNBbuMSK",
  "key6": "2My58Z2r23PU3kWAwMQXtmF1xKmhdKCryPAFarWdgcdB4B3fd7GV2Diuj5kKYPVLFBLgxu83gx3USBvA5TuTB4Wu",
  "key7": "4k2QWK1Dy5DYWCeATZsCeYP3rKt7iM22LxUJ3MJEAunnKAuH2FFmV2txzggmduQMBKo33WckAQsdM9QpRdrJJkdD",
  "key8": "3xYb9T56dH5ELnej3BPc8oHQ7Eqr397UQq881yK7nYQVsLS4VGzmcu3XsnQ4Tm2B3erFT4GH7FxXaYiAhRZimBDf",
  "key9": "fnjr8MsNLTFPNMeCSgYT1tMh79VGR2uGJmkav2NyYiTpwQGqxsnpY15RbjVWE5GXbzQQxmweZT577KJcszoMbCs",
  "key10": "2MxraoTXkFTMfFHZ4hQyTPfMhangMn91R11qUiP8EanUv8p3kD6kwgJ2XLDoWkD6j1GxFwzHB9ii5i566gw2kJKb",
  "key11": "5vr2ihNED6Md2958gXwHQgi3L9jpkKvaWpKvU24L86Jkhe21NTMC1iK7GETbM3aNga5UwrdXnVwof8BkiX5ZCaBr",
  "key12": "AcTJZb5AiUa1z8gVM8XESuv7nepgRJoDY2rkrNCi4MHJSEYziosSU4JycdB8BDBkgn7SBihBP5TYR21zZvphoFT",
  "key13": "THa4NLbAQpTZNATjZVDhjPoLkbViYvaHadUBuJvpayfnXcTKsu9vvJL6pPZYEjPX9LU9dwnTXFjjedaiPDVWLJP",
  "key14": "3qjURjEoCfvdvKwmf1T4HkSVYxE5JiJcYxwfkUcmkuKHnTsc5ovHqfauP7RjJWKZEviV2fgkZhGAAR5YCxqZ7FDP",
  "key15": "3R7HmJGmDCJ3gEu5GhgCw5TnLioGKYLMu8BRLGpxTSL2vGcjH8as1jXPiYXihMmwa94jb8azLx7B3uCP8fecX9Qx",
  "key16": "65BBdBeDQ7Da9raouYxcGDrxcAX6GnMCM4cdfztiwd7MwqTjMbWdWTPF6Hid8TS4CjzGybd6RdoXyJXqSiuLwPyF",
  "key17": "3qV7TuoD7L81PcLLFsyH6wkh9C68qtxADotj21NJHDXrXFsMHJWe46Abqsm5Hg5Vb8RqZyzp9boXFEi1EzDuWZ6f",
  "key18": "VhSn2FCaWM9EDgPjyWBUhKSTddMK9T1RNte8Uqkt1Kf3EbneUiPLUqsBGhdvCcj5NXVHsmTaPcPxF4cz6ogFPz3",
  "key19": "67JvFrtXyEzZZHdbg4CReQh4r9VYMS9S4xcpi1GuoVEWQhBVV6fd534NjvFxDCUWuPcePbiS8ApX8Q1e9UoVANBv",
  "key20": "3RFP7tFEQj4NEx5BXaSZfbZPr5NWHDdiNGWLxZFEcJxN8PiVgpRGGFaUnzAZvg7rSG1rYYzPqXZQ1rDFD129S9b3",
  "key21": "35AxeNauB5Vq4fSYg5E33WEvGY8mpEf9g2nVFceG8GibrVPRC8bboQ7hqnmeAe42kXy757JiF9dXB7FfRZcJf9jv",
  "key22": "dm26WAYcyPdz4KFsAYZxhk7rHZzQVsywRQZa7TWQEKLWYR8VVzcamogAyio2GdabebXCUocL5ugyVHfJuGUkkSf",
  "key23": "2cXr3rGEhXNSEULMjzA9K3t8vNPgWpnopF7unqufW58s8qdKaMKAHmAnq3LWEngFhKeMeA7XV6X6KTmwFNi7iqwn",
  "key24": "5RvZJGpHxpQHBmX4kegT1teo7tbgwYNjCYLAiUv43ddB5kLyXkRx3D3SzV5YQgKWVLoomRCAHNZkvU5KACWT6yK6",
  "key25": "3jPQ53ieqVDTjxBQCaVhYo7YU3SxyKGayrUTAgYqKCvY7n4obdxStifbbKGar5yAazXozh3exp5UV1ygN6G26UP5",
  "key26": "5yCC6PrEAd5T2Bm5pQbHFCkg2C1WY9Hi7c6a6Tvkj3HSaeQwHLUhurxeWu5pUDBRyFBYGtYudEwXSQ5jSDSubhMp",
  "key27": "3KfxL7HipX6tQYZ6ie417JBMDpU1zDYCx8w3vdh8cFxbqSnyRPPQq3nxbHxjAjCzGG1R9XS34xJwejtMit84r8dC",
  "key28": "55BQHViomZX1k5GJxcqDbiyyshh3bJkois6eMxXfFepep1fLi9Wzjj99oJspHpK26WpH8ucam1QeBHtyazTd91Uv",
  "key29": "2KzJY15aAgKnEUiWa3GMbZHRvc1yhzoXFLbB3c4D1XjGYk9Ux2nnRQuxp2y2tURoR61ZLgdqjACxEy82WrVueJCf",
  "key30": "3WufQiLkrzk6XS5NwFBwSkkSbjpqKGYHTPpGauwe2oLCuhk8pJ1zCjeae4rvbL8ct3b6r244eJKV2R3b6Dza16Th",
  "key31": "BQhB1JX9g5mgJTD4mtZyKEfraXTArTGRwbPaoAKyUs3BkxLYcayn6KFeEr1p7StUwfWiYv4ibr6zthPfAzaa366",
  "key32": "5Tcvhc8tzW3ZXMEsciSdTGA3QtWdLFkTjpY8KCypbJUnxGCvGGNh1tf2fmfSaShDVjBugU7M25fsFe9v6F67Vrap",
  "key33": "4XVzu72bV8KAfud5fdsK2yzPq5tcnJ1hELQQLNHxBrp18UeAZ6uop5TuwhsXARH37rkFBqwAUfwrxvpafjQkrvC8",
  "key34": "4yvi4joBNYNDM1ZkFiwVrDj1XLcN4gxaekJYmCKvdii2uAgsmtcF14zhtXLTwmh5zMh9HFa3C9MjDbDvLwxtCzuv",
  "key35": "5U9Bttg2zNzANrYqevfzfmjjC1bNLQCHHxZ4gtaxQo9ZWKUZVmExQ846z3Rd9s2gq1BqHpMSvC2ZzARn7rEoXYJ6",
  "key36": "2oBkMJLTe2D36iUTak6DEfjfTDJFn7PEwHi3mKun2LT1WR6GXF2yhszxxYBTr2KTHcTA8A9C88XZmZzNd3AqjZsY",
  "key37": "3ETTQsb1uYZcXiUpPq8eZAiZf1Ybhz8VXYPBTzVeRp2ydsbx7M5uA98Vt9Tb6qXWGfw7E3g6SjgK91QN7QT4oE2b",
  "key38": "3vhuLiCNiJ1EEG4brQa9j2Fpn4xgBYkZFmids3Z8Cx8r5to6AEqq1tQ4YuMNKqg3ZGeKT6TQdS4xUeMsvD9kC3rW",
  "key39": "5R2geiuDiRZzfVm5VRug1tbmRpKjKuaYGi8hKLQPUWpzAHqYtbQZEydWEbaRbXHDfrTWEwEurhAbTFMYWhELpcSD",
  "key40": "46d9uhZqzXpsRVSxqsDF2WFJMEwjh15HyRTUwDK3mt278QT9Y2z8x7wyep7H22ZPKghRZY5hG5v99chN1F9PHMLK",
  "key41": "3guum6NbYmxvwjete1P9BY7Hzqcj43PgJGMtakjE9QKCkReGgGFUAgaTD8BDhQnRNBCmpY2Xk8NvxS6nKf96vTGm",
  "key42": "46JprvD3PWMJhJxsht64WM2eM3bEN87etUMhxogAv3Lop741AWHkgzmCxbCBpcrQ9NX4kRVxgAze7QRoQ68YEZig",
  "key43": "3oEJKhX1v3NHNfeK7PEU1p3PDyJYyriQmhpqH1UHyZrjo6CGyDSHJgsov6mMceZLAUHgyyxJxN7A4Dx7sSEzRufR",
  "key44": "2MdLQtWvXjXppJnCxca9hEU917qBAn4srTCJwwdVagFyftKsqU9c2c3vczsL2SxUCLDiQH3dzA7PetX5WRYWR8gy",
  "key45": "4JsbKLwx417FCYyPLHRnCRH1ZXNmwqFcifayRWqicnejRQCCkYaUv2TceW1AGrabvQBA1P2wFrtTa9pBrVyNTsr8",
  "key46": "62msWzSWFboxJv1r18fcArZ4MKEeHp4QJw8TAq55VnvPW98qexu3kngV4h5YLi1J14WQvvyZqH6SCA68H6xuqda7"
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
