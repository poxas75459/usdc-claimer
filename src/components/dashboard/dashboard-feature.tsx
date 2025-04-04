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
    "53buuTczXRBuLWXf9FoQipNdAYzYG55t5d8jhZVs1fnZty1rjbheQTCv9UipTGRwsnPThXff6Z263vhQWi4EWp77"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gQUxruSpJECcZah4Uk1i9PjF4xfoW12JpRsMPdNxqbabvgn4e1MFSm5Zqsu5dGjwSgad4j8MuSSjNyenZNdt88b",
  "key1": "4345ta5dh8b6nrjcZi7WMKKbBGac7iLPPHqHDQGbdetUipPgGRMiexrW1CHDWbaWVRcK7n1217gFsFg4Pep7bMpk",
  "key2": "3qKCsWKXGFZALrZa9Vy6oLKNhKGp1MZUsytvZnL9u1hRJCe2f7sacuHA5TVUWzsStowVWFtgmBct9fGPxwt6pYqK",
  "key3": "5xFtZcz7aQtykrHQyeXSnv114Ei7hEdTcmiQtGucvgPK6446xTGSXRkNcbUz7Y2z7oMQmBgb1bNxNxg66uSnxX92",
  "key4": "2Kwq43fcABuQRML8bx3E4oppkpQty3rqdbhvFsVU8zeyaF4VPTF2VuGhs6J2ZHPqQiWwYLy22RWW4xfY2ki6L1cj",
  "key5": "5MMGopDQt8WVSgvGMm1Uo3SNJPzkAAigkQd7FoTY5ASiR4bS8PVKjVbvq1zEYnwr2QzWG5XD3S1vBgDcYx8JKPB1",
  "key6": "4NmbHHKecaYjv4tsVy7T3Lit72KJSyr98L9CqHN4mpHVGFhVdhqGhsx7x2yj8Ac73FR8a1A77ijLdnnNdeVZyQn2",
  "key7": "4JM4U25idcPVoVu85LZBhNMAKfLgACaPVUPiWEYr3fYYfjNcwrvSMXMYoBAMCGLz9Zwz5PrSzCDQHjZ6rNwgdaEf",
  "key8": "4a11ozG3PQDYU1SdNwFMUPQsXWrf437e6Hd367xaaCU3cVxUV4yAogvAgvHkPu864HKnFq9NRhTXweN9tQtt7o9Q",
  "key9": "3dzgy9tdjRqfpkixj7ps6cdkFPRBaRmKXFGXC87A9KnhDqsthftFZtjphbkiCkZHVwE3onDc36wBonLqcf23gP28",
  "key10": "ticSQASk2Fnm1K63BWdpSQEoh7ZGrGjZVcgAGkRGb8kPkyyQTAy1BpzzweaD72k5Z5wXKuE6DLyLVTutvxrnGdE",
  "key11": "55yvcx2Cm2b6v3FqCHFnykTNtJhsFDGcq5g4KXAxsf8D6w711M6pXm923jAcARLhuZqfS6EZR75SDB5VwXmuZKjh",
  "key12": "675rZLzY3MkLnQgzSuYQRVA3PrGswzZqhpt536F3q3ZZcMgHPhEUWTUbjgdT1tQ1eRL69kDE1PaAq1E4zabLd1JH",
  "key13": "GEsPXAgmzP38aVeGKu9KBPJGj11MApnSw54LEsBtiAfDegmb23hPPXadKfvVxVr4s8LMPZpmS8L27Xnhucf5ytu",
  "key14": "4qjRc14EKnn4JaEaWq6aN6kCMDQNuLg2SLG6K3TEH6Uh7igDyVpryYdy4pXrDe168AFH549dVxwwtc5eeM56ZmmE",
  "key15": "2Lpgjoi7ntokkM4JFLgZ3k2sz9jhsM7s3MDRiUccWtzN4VLSr3Vk8oUhJnmEWbckPAvvxQKYEQNsFKzyhqLdpw6Q",
  "key16": "5tj1HUfWiUF7ncFfafdUABmNoXAdLpzRgMLHXGk5rk1h1hg7bfLyhaWWPsQDaSAajJCt2sSkiXQQK8SBk4HHdDM8",
  "key17": "LicnjEPgPxAQcXs6nD4eN1hU4NFKNP3LNRKbo8f84LWyYbgdzRYtvxLaUw8xofYuLi6RWx4BWpBQAvoz6wrgyJh",
  "key18": "5K6BCVKNqrVZbnpnsZ1uVSoBnfN6cp7baXCo19RXbHK9iEKXsWmZpvVk1NVodNxrKSdpttznyyG3ncBLA17WpSQ9",
  "key19": "ArgGmbvUKHhCVvM84xs9zaDgyhEUZJdRYFzrK2ZMDkA3JzkjbErKH18Aa1jAeVCKL1es6PgvD6CRb2jYucaFWxE",
  "key20": "39eDVwV9hEKesTWnAgP7vtufVg9QUVm9AyKQbXExNFjsP9tg59HZXJ5qx6VV3GX9UZGLHVDztYez6RAF7zmtKSHq",
  "key21": "3XUPNFvo8PuxHyRz1nogcewM25ZqqdYE3CgUMHeq324WrgDnsKadLTmizocyoGkYBFCXQhCjAwEoy3KeUPoVeYkC",
  "key22": "2tVtB2VhuAuKBofKi3MKdRaKrbiMfx4toTrjEWxnxAMJg3XD2ue1uRCoJftN3PnmFWn4MSShEvpBKmnwe7WCSkFp",
  "key23": "zxjDChhgwRHwrdPDn82usZrhNwmuqAVzvrypDBh7fdpsXtu58hDVGtHgnVgKR55ny2NDtyd6avN1hj2ykRa9J7Q",
  "key24": "2XShLEQbRRFxRM5DRHwf6teiPL8FYRRDLmppAanNDNErAxt7uv5QYGQubGXHheKD3uSj4NC1XBddgEraCGcY7Kfj",
  "key25": "4SYdVwVF55wf2fuu25vVCNVGo1QdqdEVxMVXBuKw8sLfnWg5ARHszbupszxL1SZMcD8M6yieDtjUhBxCf8QhqQMZ",
  "key26": "2HGgPgoLypY7xvArFqBTZRgeheihDY1UUCUTv88qrBxW5zoELyj8U9iYRrEjyUJPU3p5YfxZqaDxJ8rYDum1ptJz",
  "key27": "4mB4E7aG8VvVisfaVpwDmRr84gyYBDxfzcYYUumqvSvyQeLBif9RYpZZZd41pXvx3Li1qmfRSWL7qYkN19v1nj2S",
  "key28": "5b2HULBNRzp2AeQA9jTtZiFscPvCrGGV5oy2oVHCMYCbjXSSj8uJRPgkZ9G7UiVPfRwRnoWVUdg62PHa4aPsfLn5",
  "key29": "4epxco8zBh31rhMgb9ExiF9szMsMnytS6egaN1dUPGQxFcNpdn5V257GpaTh1up81ePHoXBHfoRS3sAUU6jiQAZb",
  "key30": "4uVrjA7suujmB9fwVEWFjcKFabD4mGrWiMA9aooaBn5AmNgKUutUE4EkwwnNWFo943PtXYzLwhsZgpzFyD2AMr6x",
  "key31": "47WnSeWiTQ8YzzueiJBeHopyfeWrzhfYooC481PknAQQCS21uAesQvScQEciAD8MbBZve5mbgUAZ7htR6kmiy34G",
  "key32": "2SjuRzc7GmshrGVEJLuoSHSzmUWjSnkrQHV96jRi63zMKrpFmHR6rC5sxCaW7BgG5EtqUqiqke61dzrsTu1Ur1Fj",
  "key33": "2kRgpWgffsTJTENFyRbgJFWrBiZZ8WbxgpLvv7tENnksdP2hwg5Ast4ZfXoZGzp7adjvKwzJ3DKF9yjE9j4E7ny1",
  "key34": "244xtnbyBZr9hYzsAfNr2rhwq45TdhFneVE8zeBxt7ZxCk2ZwLxX8qshr3v71rNqakHnY6yBz1DKAB1qtrU8LNRT",
  "key35": "3sr6EgDqqJMvH463fWQ965P4LmsxEDZmjRNVtsgowG7ix3s2Cg9QvxbELD2fsXBiqr4KVkf1WEEkTfdctMUvjLgs",
  "key36": "3JuqafFaqmR7X5n3cK5q1wjsnhqmJnkWmVXuDppaUM8erE1VvMwWMmcdKsiq9ERxjG63R9nmZGxXZZXZBCMt1X7Q",
  "key37": "3PMuYYgQ328Tiqs6ncn2HADVZkz6z3WqXx5Evn5VmnBbQ6bEmTgZFfbYpoiFE1wHD5kpvzmP4TgBGkwhg5v5UG5o",
  "key38": "kTEwMxgR9KzrzLYjmzNmAX2k7jUeZiQhFXZaLHNTtPe2RZyF1gVdyJ9CJ7giEt3Chj17t9CNqUWEX8X8u9riQY3",
  "key39": "M2PvPFJtarxR3Wcc6RPdxVCVfKeXnBD67zdhLp9F4sEzEFzSMX7Ew3c288qDGvgjKNedhP6XHxCt5N6GWC5QDjj",
  "key40": "Jnc91b37nbyQdA51ga3WpWkEVroGAy9E7fu9NGqgbgGqb5xrKHLxWsaJk4FTbmesv8tTdhPJRzRqgngeeHmcyyF",
  "key41": "4ofoKWPBHiM2c4DUycr3D8EAjtez9hQT2o44LJG4wcha7hiyb9KMohxE9KC81KgzyZ3vEGrYNUsfoB75drMoQe2N",
  "key42": "cwE91VPiRcvQU9XRG8W3V3nBMYYrS3uY2urfcs8xs89GF2jogkNvAyRfxheQZUqUtv1w7JhVmN4yfNCVFYXqN2e",
  "key43": "5fSZqhxm6YWYQSjQzhmZV8xNVxQjcWhav2KGbXpcaD62yoo1Cv1snAhCFgfA4HTmcQUuHsMiZj8TNQd31HwzDFK",
  "key44": "xYTBHb2DxR1o8LzdR4EYkHEUhZctMt1ej6XfqLDT98wKRF7vYrVrZX4c1kCQYyXQf4YV25xrMnwbKJhvUsL27eJ",
  "key45": "2Qum8TH8RnB98va1JzDNvPhVzpf2a6LuPXvgzugjcvaNckPVcCBuz2Jj92BM1FZeQmHvVYXX5oswpMXnWZWE4E5z",
  "key46": "5jC8TrhuMgipitrvuVpM9s4kQbXHCKuanT23evcSY7oRmLgz2nVJ4bEjyyNNJfLvpFfhfHwu3Qxx2XNF8PMWaTQZ",
  "key47": "DnMr46BxqNkToD2DuZ4inzLB6hpLn1CfbMqHzbYgHuWoJbAGJbJr4FZUW8BDAAfJo6KrzzNWhsQ2w6tT6av7BHB"
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
