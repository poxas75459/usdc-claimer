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
    "5Csryqw7U7C9kV246giCY5riu9VWrSJXHTzRpeaawUj6D6yMng3zhTaZHD7teCDuK3S6mi6QwmH4mLpqJvoFuo2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66D4ZYQ6wdQPrVaCdwx1egw86BXLfqZXhQQSQvRpF7v597bqXUdjKrKFnAeuKdRwvroyK3sD2VQRsmaWDzyxB9Dq",
  "key1": "3hZi5BwvaWMhLwPE6cw53X7jDrk4phNVRTXxXkyrFazbrJbiNyM9ugHrJWtnnxPwiPto9pfVngZuSwSvsJKqEyh9",
  "key2": "3NVLLS6ieFJFgMHNuoKhnKw9U4djxN1AyFnqWiJ5P4cNwSH7zedpH7CeW3nCTgwPavj8JUKdziNqqV98hvxaRd9C",
  "key3": "VEdXxm1RTVzPsYRzbChdrA891bSi8Z4Js2QhW1XV5v7HLLedTnpGqZzySM8fNXEWwVvEzdZhRwo918HgtnQaJPu",
  "key4": "2LM88177s7C4K13nnt47Hxb1FwFgQWiJkPcquW8Rd2Up5kGB6BeGUbpxG8uLGudq2uvU69xqRioN8LDEq6Fr5qDD",
  "key5": "5z5D5284Xp5uLTg3WsMi3Sb5uatWwPNbHVejzTXY3YnUau56osKQtCAXWcM3hgtwKZNLYyG8gKzJfZHXARbgYtjy",
  "key6": "3AXWHbEPQJShsCQg9jikcSNXNfP13y6bL7fkLhccs18sXTFbNSAm4FKSJSg6xtYegARN5ob9cfvFhB9cVjC7GFqo",
  "key7": "51iJs7TeGX8ZPtoZ7qeR3epZTGaLciJ2qvXXW7x2rvDNbQzu7UyvpYWGB1fAF137PYvS6GUyEPx7BBkxawC56Bx7",
  "key8": "4Ed8v5aK5oQ29qnMqJ2G36u3qWrPcF4MDvqY2gEamHAs88dvZs4ueNyQwfJP5Da3gbyEw5iN5HFsGNkftgeRwKFy",
  "key9": "8gw2AkTeejcv21PcADHkooGEvUPitKv1yQbU4d3UooCjvdfo9zrcbRSHrXXQYfwodJgoVecfnVyYgBpWeuEeDJV",
  "key10": "52KtM89vvF15EvxcwsWmdk99uacT5GSS5qPg2tXrcPVFn4LKVwm3m9HEsLg6zud4NGRdRJFBurJBBXzCFMWvrB92",
  "key11": "4ounmREiuJipQgS2NZY9iaTzHBcHBB3AS8gT381PnCB22pRmjWhSfLvWtUyc1AqU58rtvQfdVcdhvrMCzPxaFLeW",
  "key12": "2qXq4z1UwkJtGDTag9FqAvMjbpt3qsLSsKCP7x3mig9SeKfzWd1u8B3PStMnS1EubNnQucC1TDVD372RHeB3FagD",
  "key13": "3wJcAQksG18zBfhT1dW6ex3XKE739ZSRKx6mxSucsN3mZ8zNYqR5kLj1epN3Phkmj8td7gN8aG2CvXjnGT8cgLXG",
  "key14": "422aw69Uf2E6nLeo9XFPhCbSk3h3GBR458bEHhbhPYq5PzoQvqbMSJbXyaXReU7BeYTwkhdYaiSXu9ZW2dQ7fw6z",
  "key15": "4KaqXjpfPZv27B4pyk3E5QSmqKEwMkFPhGVHdLw92wUfW1am6LKW4eMDxhracwgw74y6KCqCpPggdApHQjw3VLju",
  "key16": "3ZwGGvgS7XaiKs5ZsfW2vu5JJXiyF7wPaXEMGVDuH9P2Y6cw9ZePy7k5F9U6RpXGehrHDCpPbAQUF8fpih7qqFmH",
  "key17": "3t57CCSb3PcHHD5pZXdPFLhodvFAro9jVF458Bxntj3AiU6tzPWJHEcU9qHT7Ppo12WAUH8w4kPHjZG8SkLMVucF",
  "key18": "4rGr3rjdonsSdNvRhKdR8SesYbzoQewMAoh1m1DzzRnmX1rPYfZByfnqZdtVyKpWzpWyDiimBfcRPGzU8mVYYZtN",
  "key19": "44rMUDbY7rtQibQNK2w9X93RnEws14sfTTYCpjC4RYfKVJEJhzGDRgJBnPJtWdH3gJe5hFLgP4TqLJGvUwy3rrSq",
  "key20": "48SSqrMkXiPxK8ZrH5v3qN92SakdCXnmqsuSDVmDM5wF639fx47vPUU4h98Tbs88EXG7ci7cE6N2wiUpTqPj3zcX",
  "key21": "5bL94xAYDf7SH3CPt4V8nsGisLyrjUMQcJo1iGUWPbnnDVY9T5biLynAVCSkM7wzYTYiDahA4tvd3CBWSTxb5VMo",
  "key22": "2JzbTR7xTJCnUVNoB1Uihjt9odgWK7Ww41hLGqX9pLtrjPszj5comFwKypm2meZWZDpR6vggEugVJGH4YQcBZirg",
  "key23": "39gKX4idULjd5AozBeQRLs1BGVcLdQwCCgboGz8EmRZF4Fx5BLNDanMr9AmiteYzjGLTdrgZsoTzaszAHnXH1h9L",
  "key24": "5E5pEtF6Tk3Kb9HMYtuG1XLe4tva3i9TqhyrjhJvv2XBhDKkpwz3MijGiE46QSEXWgRFXCRp7ESgcytA6cEtQxQM",
  "key25": "3fPwaQ8zVbbxKLSLDCCtw6YL4QC9zCrBejuSQVzQzMBbKCBYNjDtoRpvfYgn4oPJVZViQTFJjFJ4JRrY5p25Pti4",
  "key26": "3JK9mwmRyfHear8ahPwbn5hWvuHKPKajtjbMP5pxzzGEmPtWdfp1uwQmMCGWQp6urWj413DsvVC5qXMiqkZG8UN5",
  "key27": "5GWbmQWBZoKRBSTGMcZxGxBW64PwCT7kfVqKf1DWMNoBfEYFKjApzFicL5wZhfZe8UbxcYJ2e8ktv9tZT5G5pXLo",
  "key28": "aRxRFecuJn2TPFut1jBgmJYvDBp3nQX1gRfWUHUYz48oUTY55ji6dnvT2WuceovejexDRN7LRk9gw8uLnVpp56K",
  "key29": "3UaDEh45wLZ343JFLXkkpbzmR448mbeKftDuoF3MXB5zaFejpaTGBfiz8BLESvS4W7kji7JAUxAXj5dDw5srX2uS",
  "key30": "2DyXiiay1PrF6MgoU9GoUaC9T2Y9dnDjDQKK1YAv6qptCkHJKeJJwM9coomaTUYDG7DbJoso6pcLXrtioXyf7gyS",
  "key31": "NoKVEMPUEwR6AoZ5499jvXieTHJJVqKgzTgFiNL18rbXieHBHymtPUBMBSAczJg9ZvMoueFpPgLfLu8drWaFCnh",
  "key32": "46QwhDJ8PRKKahbHeAJnTxj2nimBvVjmi4stLBaPYz1X71TELbnhRwZjFzEGbT5sXNrHLz7cyTkTFCLN1Wxck2zd",
  "key33": "2cjSyepMvQNSDQvckWhjG9tywhPFM9EkM1HXqj7vknFNJRUzKt9DrsRA38A4jx5HhY8znrebmj7qNteWrb115bCR",
  "key34": "3KnHK3rmtDMomLdqVya7H4Aa6n4BiHPq4PKpfEWGTK7WCL5ezNnC1MV7pmvMd2wyZdoe4TRapQ2tTj89TFx1QtCF",
  "key35": "577Lbm6RU5cCnzJMZ9xFX6ut1BLQzNUuiMUSkrGaMwFkiZX5vsaq5rT5YnfyUBtK1AW8rDnVKPhbQCbq9Yvgv8BL",
  "key36": "2MhZnGTwcuddyjjp1hxejNpRg6hNDxdGGDjof1SXxro29zesNrH66yQ48WH9uEtaLkM7Y4qSCwqYJ2sygxNgfASy",
  "key37": "5PoWom9ioKsbxMmsdx3xMEXq3iuFtSugMTB5S3nEmFqrKE1Z5w1a4pepKr77mx6naXmL9Vp1Tm8hwjR3647Uikec",
  "key38": "5zh6deFKP5ynNoYCqDJQGQK22naTdJmJVZqXtyTcPB1zzrHHn3AgGaCXW3fzpuDKFBcgmpZkTLmLsQ59kK19JezT",
  "key39": "27ujKj22nQ8Le9ifSKpCuMD149JapsvYtNwXea1RZPA6YSYEsvyR4QpSg44zNBkxxZzybEdbvaEPnNRP1zQtyTjN",
  "key40": "5R3EJy6Aiu2bobtRh2mSDqq6cu9dwoH5mje6gJhnAfsyT36Z8Ed44CmC1WTtj1Us8kfoyvEv3HDuJpE6t8PEUGuj",
  "key41": "2rxrza6bSarEe9ibiJhwwAvZ9JzKJByVgH1bqWzsBSForwU5KaSxiQqzq8834SJ2TA8voXupxnL4X6BoCp9oTXjC",
  "key42": "29c6QgwHtMnJ4HKsmYKXTnhWLiUZwjKNyGkPGQEwMV24cTCEYfTyavSnH37uWru9p6EKPoKCv8tDYSUmiwSAJJSG",
  "key43": "2D2ZyMTPAyk8QUzNKZppacK7pkXmguqBT1nuJ7t3sQX8Epfd9cw78hdHNfiMXgWAPLRcf92se9c1tM34EuZ3ifJx",
  "key44": "35qz9BYmRna4NEwNVL6LtYLAMuT8oayEwfMZCrsv4RYhxEg4tMvSeuhrtcSrqQSekvU8bXiKiBa9oBWbVTRbQuDM"
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
