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
    "4kYJr1DHgfs9GKnYt8ZzjTqAJM9kL153dtyf2Co9abVZ5d8DP9Z29nTqRYUK5iBfrpWDVh67qtdeBWvukkAHHrWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uPASUf6GcNg99iphsHXNoZVGFrnK8VU83DoPSN8KcNa92LF9W7NRcKK4KKJ83RRrK4QvpfbM1gf5PiTk3xJPmo6",
  "key1": "5as1fh1VD8i57tr3AAZqSTNX9sjwvh13SzG3ZZMdasGAAyhnH2foSZbanKEDUZEBbXFYP19nVZmqSEAvnfpZZsMt",
  "key2": "ZNYLgTsZshVxz2wN2MHZQK36tbWpsMJyvha1s3SVr1sq9LAwH5syVJSdcTim4VNgvn3No71Q9W7zQaZGEhXeQiq",
  "key3": "nVjdDXXwveiEvavdDuWDqjxMT8c2mhjvV8cihxQypnR8gN732FB9oKwbWGqSbzzzrtUFgbMLHokDkM8bQWqr8Yk",
  "key4": "4W5zM5YEw581XdYwAdRFpuiiGGLbsgeECvy8jRzzUq8LBriQBZ44u8mbV6FunRWzPWeM8tjSSHrff6fmEmJStcQs",
  "key5": "R67GHS3zqCYLPvWE3oHPePf9UmDoc25wtaKWK4BqPBpNiyN9ww58i8y9DaaBxCHBnPkXebyY4xdE7dovMEbNMmu",
  "key6": "536rNcDvGjhMfLxeQxz13KTuAZNk14wXESrWaRJQzGDSHTi1ymc851Tk1tw4A2Pks5nCCtgJNXtpg5f1aHPaKqwR",
  "key7": "3TuabagWi4AF7NvUEmCeJU3eCdsYNZWSPNYkW1iBYWxGCifKY3ASrppug3StBLdNdeE1SvczhhUr7D9UsGq9QpwD",
  "key8": "5B2XJuZ5MFmT7YBwqjXSFFSw8arj4DfZutM2GhTve5QgnkY23JEYFRxJr8co4okzt6KdipaLmsc3Kq91wuFjzNqT",
  "key9": "51oRryGY5EmcjGvDhVenU8hkv3CcL9PRsFvTDQcen2TyuURz98WMj6S5uWQJSkkK1uAW1sgR5DtAUvbrnJZjytmL",
  "key10": "3XjgFdvs3u1kamuwsVK3N3pECXQkA16qgbXQBcXZYbgM2m3iy4ULHu1Aa1gWwB8ZaNENGeEGucBfnhmYhgcNAshK",
  "key11": "5nmLrfQsddZeto5ux5qpzJUF9Xbmt2NP2H7nfgngpt5awHFXCJKFzGiTR2mrFnHPnMZvT96KBpZjsxx8hzeb18nK",
  "key12": "64rr5tzTjGipRBwb6HrakLhUqVhNPvoLYBqWnXJiJB7pF47sErWMQAKJgkCb42QnPaj6Tvg9Uvs1YjnRSFiHmgeb",
  "key13": "SZTn1CkWPNoUMM5dexXwsC6w8dtKf29pVHBATiGh3fFEJ3htLDjmeyogq6nT9xm8d37j9HWSEqaSCNUek786uRs",
  "key14": "3xWNSggVTEyRW9tP15mV5kF6uTMjNYCAeFwwanaQymBGLMZ4k8f7Jz7f8ypuBxVGq2CuhJyompvZRF4ATVEmMaoJ",
  "key15": "51fQSWYcLAaJyiLS1u8LCrX6TAAXPWCChKZUKVdJuRqTeT8Ldm8BMPTpeaSXeuzMbCz8Hu8roDCU9i3H1sDVfoEj",
  "key16": "2xmqtHcDbGmqAsFLuXaVunga8TwV6UdPPSFu2wsujNHb196FRRGxC1VBrHbJZG4tG4qL56c8BErXunhW6hRmDXZ3",
  "key17": "42dJk6WVY66FuFgSrTCCBnYbXCWqfExjr5yQnpBCb3dxRMiPVTJbp6mgyBkde9gdKvf4gTRv4ic1JbHDwrnT38BB",
  "key18": "Q3GPNEU8a4YY3RUSkykgJRN4HFTDwQ1Pv8ja7dBRPLPq9Fh63kNhEBiuAyk29LTM4B6BtVdUYU1NHMRhSwdpD9v",
  "key19": "5Vx8Dj5UvtyETjNrxkXaMiyqJAGM6y92gLoqc5s8YYRaW3jRpEpL5RX14amN1QvFVNCVQdqEzG47925Z2PKooFaq",
  "key20": "3TuZHSjanF9ZwvFbjdjV4cpup6yKpa6Yfedog87Uyo9YRqRXxLTc2sYsQ1fhNMkNHWTxUBWeg2MidKQ8eDJTSbza",
  "key21": "2HBfa8JqHqeEaT8Shx15YStoqtuhkqojw92yYjL8YsHiuYeKvmCHW1QRH9ZQxm1zqHGcYmFtfTQo6sHp4Ffm3fwG",
  "key22": "3PZ78PgeYfRVs4pzkbjnAXZLnLCT99QWs9LoLdAkKYdwtkE3gCbp2gAXh4AKn5HL3QzXxxWJFrQA4FekY8UTT7Ty",
  "key23": "5qnZXhxynXbqntZ4paHm4dZtX68GkC12FjhC1gK2GPE52i44FL87UpgTzpKwDcrNnEDne8UL8cVrbpG5pSSQcwFk",
  "key24": "2oJVp8j3AwUzjJXneq9DdR8hnv8W8ewjfLfeYXauwgSToxPQJUSx9gQ7njSMSmrG4CNrSuw1XNdQ9LVZrVRBENmD",
  "key25": "2VFBN3R5eNEeL8TXt2boze3SEM3TvJubU2YndeHCv1bhKUAd2QZzgzG5QkRrRJAHmYxFn888iEA7jKgWMBV9VVXi",
  "key26": "67Aq98pazHfLgjkJLuiP2sRTvKqq8juaq8M7DEXwNENrpxwmKSrGSuyugk3skHKs1sEzRkRu974LzGNm3wPzoj2w",
  "key27": "5nMUbnc4e66FZUzRnKfM7HaWkhrShpsKCudtD3WmBqm1gie1b7sYUhoyPxCtuPsyJyhe54ShLGR2JkqbNSL75FZy",
  "key28": "4fQq8DFCpNey39Y8tiZX958P4Rq74J49UAA8rZrmAaQfp3q4et1yjKHC852HJfSiLPFed5mJAno9HjK2KvhAW7JF",
  "key29": "2qReef7VzYqo7T3vwxGT6kiqijsWPvskTF8MdT8TZru8kHXyZnTHwvLNdijYG3otwKJi2vFjfSComEaqeXebGLds",
  "key30": "JaWm6qzPnKwnPRXvJuP3J5eJdfLZevDru9BTYwkdzgRydX4tNNz6TpYB5c1CnnaswKtKHVyqLMaW3Ja1TYEeWNB",
  "key31": "5g92Vg3Zoi1QYE9vZ8U9TX1nQnbf7qCRtjfWroRMqsGbGbT8CcwTbngbU9uYMF8MVPiuwwqsidn2jLH6hCmvNwMF",
  "key32": "2W62w44JRRb9tCLtifCcdTVEn5wutRKdvk82DviikT4BAEF3Kncz4GzxN7ZgF8FMmm5yTRBnFY7qRr4E4bMkb5sH",
  "key33": "2sD6jAkDhTDBiBZkKZA22LnpUMfM4pQe2iZ8WzY6GfoEuqd78HF8FzGQhfRvMpTdkpcAMYbGJpQF1cr4S6gSaAqA",
  "key34": "4rPgcp1vwhBrSM31tjn6jZCLMRZmseobPHb4NzwpCahEBeg4YP52825AxuhKBYDeEEuVaj5aJv15HBuEzPuipTAs",
  "key35": "5Vc1TQEjdky61Uz7sin4EFkbH8TnYLKmMxdwfXBeLvdUKB7qhPnF36rhRWtNmK7GjEAnmnH4MGL9jM6fLws8uszc",
  "key36": "KbjYjeqsuHWPPk7L3xhHGBPewiB77DRfvKRZZW8XVV1n54qCvtoxAYZb6hfX9JXhkUN7FXxg9GTuB9cJyHL8uQb",
  "key37": "5tm1v1PNzPASZJ4iwjXYFmtpAUARcax4WkmhbcZ1tShjHNMFsDEEH3mZ6qTpEhQkriZ6Vf4xLu61CBCGgk5y1rwt",
  "key38": "4daaaTApubRNZWR8pT3M4DNtcB3VhaKVNKCTCZ6hRfB2Y7LeXgd77ADTBLFzuQyj1Q81PEuya1bdBc3VKP6R3DuP",
  "key39": "4zW9L17Ui18T4Eh4jB7bWWR2pxfmKYUym1PHvw4vNBVea7WoWahmCKvuGbCQtGNd8nbHK9WzZ9Fdd5pwD8nFM7Rk"
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
