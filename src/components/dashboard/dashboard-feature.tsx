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
    "3DFpEjwFB8mUyoCyaP65zJE4RaZ4WJ31C9NxV3KgBwr7FJR5GwNssDi69tZREPhJRaB4BQVvhgCwE6ZkcPsvgWCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u6yJdaBS6aK5yaXfyo1Q2dHLKoTBXN5hLswDpiLo3SykEm7TzQzDJDGbMw7Eeo1H86mWJYeRgjFpjwwNFzDqpyr",
  "key1": "4dqbniRiHcDyk9NZ3n68x8Gyjgmw9Eerurh2i8EYT7Z4faDfDV2hV5qBq9eEr2WBPRb8pM6BsStrmmvNXTJHX7VV",
  "key2": "DWwu7XQpUK8B7Am82mV3rQ1KZnGhcbnR98J8Yv5m6q4xXqTVLcWRWf8iasj1HHmBbfAqVeURYDU7hb9W694G4Lh",
  "key3": "31Q5h58pP5uivFGjGhbtazsMQTH55hsKKZzrPmuedTQ6snYGQ9mUZ9c4hDmdQaJZQCvNyNjiKr4o4bfK9vREwJa1",
  "key4": "5U2DjF2N8KqdZrxakkesHcee4F6hUUwfrmWaydgz4Nhj5QdYH1f3zkjTW8DPADeEi9VQAdhamgR1JhYbV6KVqKoR",
  "key5": "3uSxEzVC6AHebx34oAPpm8zMrt8jrFvbd5yTMWeLXdwWJXeUYqwZ6TmDcdN4EhaJiA6zuPuBqXBrBt5qRAr6jbFF",
  "key6": "58YNc6hgdvof5BMJf93h3PTMyVvc4uUkUaVBz1tE9N1fiRmnT4NJHsBEkBQy9KPGZ5AoxaVoaWgfmmq6s5FM6Uqf",
  "key7": "2zW3Ufc4XjmNcmmnSG47vgN9Yu76ThfYwvtjEA2TZnMhKVJCfDdUTdE4FjESbDWpb5D9CACaGPDFYcSMMkJABfUo",
  "key8": "2SRKagA64bbc2FLeHrFYRMjYdQ2baweHyRYw1xx8DT5qfQvXZVwnjTDzodf5t57aq57SsWLgwqGX7n25HXbxxDKE",
  "key9": "4KYphsTnyQ3Hzs25tRk488n3yCmXDTVy9nhcdyEmwtZxdroCFkZaiY77NSo2bmR2s5SBpqcxFXi73LgBTWfgDUAP",
  "key10": "qFaoUPRYyKv4BWriiAtzncXzqsrZ6DzQ7KVcKPgNnTmnigEyNe2WJd1TjRZGqmu8VxPD83A8qndeLkQQ8ecwcSD",
  "key11": "5iVatTV2hrKr1kQXox4eMAh1FUghZczaVeawdvhAgHaiagCJ8h58b2VaLyyXx4pyZxjQqFkcmpuDnd6sYK5UY3bh",
  "key12": "32yP5cFpnoTwU1rq7inQLbEE2tHv5EuVz5LLtdtoRqN6wvhszZH5QpGxvqva9rYY6kVwHK9mPABYbgYB3mwFv7cD",
  "key13": "4hB5Ntz3ACUEohR4UjowCuzePtxMFxLq8E5PnZop7DMn6qqyNtgsuhwdXEs4mEAt6QeS3xmLQdJj2a9E99u6Cu3R",
  "key14": "5AbztprRKKE7biXY6ov3RLrsGJP9PXiS9uP5eSBVpGrj5CPR4vdKJseDcMMPfr6KRCeXeCXywF8fPnrQq6tCtNzJ",
  "key15": "3c4Qb58xDjWp1VQrdBj3ZKp5cacazmBZCtqw33qFoHSQWzxTTe3tSQec3QiLyUe41rdigRsyFGNZBbD5qVFF8d6j",
  "key16": "rh4VBfB92MZg2B7eVBZh6pVShBxJm5kuky2Th5qEfDvCzmwZcvXrrUMfCUwA24ZyENAwSQMogmgSPGjVcmGdYRi",
  "key17": "3yqJv5pjW57ujeoAavLmHLDFEgt7bVo97EhqPCnBD2z5SmvhKZm4oGZiVTN3KnFsHvokuTiX8Lb9J4QhGNHiVseL",
  "key18": "QWhmJqRLMioUGDNJkUKtpmYPMkbPFG1f3n9TajfEauJWJkdMjKHbd8LC9WEMZwTfBrxmgeKaFT14xFF7Vbbwgq4",
  "key19": "35Z2syk5ZEoDZP3F28JzatuuVv8VyDRfPubjZCvU3icxiuvq7N8iekVQo9U972J2uqKS2bsniTb2vVEb7pxuaxGD",
  "key20": "56yUL2mBQoJvJsQKah9CcqWz6n4d9N6Kj8ZrHo3VGAALr7RtmEkFSzo87CqyoUXKbHUs1skBxL3LcXF4W8KSyK4y",
  "key21": "3Rw3oayNCUinarvQNgaSd4gg2CuGs6gYiKXU7hpx12nLSzLjiKrijSPjyJBCiEVVXiDSafAAr35VbLFR84kQXiD",
  "key22": "277NBZ9Jo6WgUePE6iR35d56bZraQKVyNXEbEUjbeULpwTphUMV5egktRSpLsU1fyS4qY1mL387eKn3zHtEg2Tvt",
  "key23": "4zYg6CpQeDngMkbx1Pe6hPqSSo2A2XtwgsCQMTLgx9wdsnUMiAmqENMRo21eVtfpSeDB6yoRDQFvpWANUyW5K8Sn",
  "key24": "3x9YaX1dbEPQmSUX2CpoWAFcBz57rhD7J8SPNETSDC5LE5bA8DFc7byKmqjdrM692AuJg68AdBCnucLaEaZzmBsy",
  "key25": "22J1rpjtek9ikvGqe9EpAb6najgFuFBRp61a8aTg1Rs49gS6pcPeYfynjgYMqjVxENPYJzegoXC1nhER66wkbCtu",
  "key26": "HjdZq5ci6pNeCiaRSVfXKVu2XtgL7SxN58zNqf3Kwb8s7ppTnAnS5absRdnqKEq6sGKJjjEuC6L1A6AeRFwsc19",
  "key27": "3zp7s5sKmSFyRaotCet1DNrvubKmj6Lug2HWmeydJy1kEqgLEWMHFXRShrnjgUWVSvLBVSC9c3tFKKGPLUAyhHh6",
  "key28": "2TZmEWFtq5qvWh8ETf6fGZkcs4Vnp32GKTM9eJ7cLWVJYmx2bYBFmJDYHnzZe4ruh49BhAzohRyUXqzLTCmPJja4",
  "key29": "4v8xYb49uPEKYTrVA7riu9h9tuafafnpECopcKVLw5oqXcziCmj6DniN1qVVczcpFTQJbQjeRNJNY42sFBfBTQ7V",
  "key30": "5mCyah9EZoxHbzhUawE1VLfLiRnU3zhQ7JvP8DA9p9D5xRDKazpdMbB3Cnyzp47PJ6Q6EoRTdumGYRx7nhSo9pbW",
  "key31": "3KWRi2UxYKisa3mk1tCDSfUWDS3ay756Ku5GRWMgXgiVCi1sUp8tjPeYjkq1ALRf7KoW3UFywacCcaGc1LvEqUxv",
  "key32": "5VWKnq9KHPpbQ7wtHun1hasr6Z55SUN2NRsqo33GkMwfcUR9J3cx1HrDYtkhn93NcKtBSph9dpYcZdfmjXSQopds",
  "key33": "4L1BBnRpMkdwXcE68DxjWS5BrRsguiE3GQKyjQyqEQXBXkhc34U2ZpxVHLZDQPqwjwxszfzVbeDnFJfTRsfE6odW",
  "key34": "3YCAF9VUZRmWe4hTw5fpEPyBwAwAjBJZvNtLgVQvijaQcqUUYkabKVoaAy6M91qNLwc7tH9WafxMbzAy2jpcsPvr",
  "key35": "35q3MtcK4fptMRPgbfoRKvGdJpqKNoE5zJpXjxa93Xb1dYPCaMB1SFP9gJVnrjX8pPVHcGztCVYZbGGf46cSuSGw",
  "key36": "s6mkSvGsPFw9UWo2HomKC1R2MR827GbM6NQSYfGFn8snwgeKzRejGR8g1YYL9z6ruvpMZ5MdJYCjQF4q7sGMwg6",
  "key37": "3iLmgW6M8QDbsg9XyrvvkW8xPbPTPNyipcR3wy5ZhZnJ65F7oCcYCACEYA537AJgkihE7HEKi2KVkiM7N2rfT89L",
  "key38": "WaYupQ1EaNtdAB2zWEZF67X58MGEScTq9xFvM3BbdHRC4H8kywdzQR1h5y62XoWmAR73vFsbqe26whkGFvsjbxw",
  "key39": "5uyqqdUUhRLzbvWPwMswsXmScnVjFYF51avGHMLmYbCkBvmqXQmB1cC1HRbYhSA1cj5ZCCDQL4dqJanXEDNgYnqD"
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
