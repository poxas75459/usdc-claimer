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
    "2Cn5Q1YdRJ15g5SVsE5xy2Dwu7bstky1YdMkjF3x9qq2mKLBwbtvBk6aAyPU3t5DniAydBDEJhFytG4D6qrTowx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JSnLfs2auF8J1wPwf6KjdDFYjLZx3apgpfgcWDvuWq3KtRAqXYnGnc4YKaPTYUcL3Sto1ofGe4u2aCaRCpkX1DL",
  "key1": "59aLZJSSfZMBm7AhLoCECsvqYUY6r5L79keCdqh1UtKg5TqQ3vmmqcAbUBvTaNmgfMG3hryh8K1PvdAQWQvT2oFR",
  "key2": "2pSLR1EgY5hQ1MCSuHjTK6CiZd9fNCJafEKjBwLZSeQtpTsBeXVwoezsgob9vgSNiCezB2TT6yWs52fVBc2mTdag",
  "key3": "zG91HeB7uQRZi81o2aaVrPgbvTbN3LpTMgCJPiJGYCmoHzhez9rJ4UZXaE79bmH8z1baPeCstbDjsnp2hZbAe5w",
  "key4": "zUcgerxWcUrtWwPB3iCqjLsRJjYnYCXRgPssxJyE3Vkc2P1sQeHCoKpyofsAaBPNXxtV4Lty5BkFQJDcZ3sXQtk",
  "key5": "5qR475jVBqJoJ2K1T4qgiCg3itrn75ek4Ekah85B5yAQ9hhf3L6en5kFVEjorMsxbUmxXmq1xpiPgzvz987wFJZQ",
  "key6": "3g6qsTj1kr48ThZ25o6LyWFx9wEsw23JrJvx3mT68B7hCitUp29xtiYffcfgsfehQiB2gnVbz7Bhu2RCpzshy2e7",
  "key7": "49ypDjAgpm6hYRUjmJzHFeHa2M5ynBBVN5TowJEDvsoDuy2UiTtTcM7KoZgaFJWDMaFnTnRfx3z1cgh6YczoBNX8",
  "key8": "5eaA88nYi7Caj6pna79Yb8q3S4DSz8oLGJ2m2WQncFujQq2XyAiRJFxJU36dJuqm5kNah5jDidngq7sYcLHKneGx",
  "key9": "5Hv5VnupfBnh1PmEWyvCeUikD8R5uBoy6Aqzii1kueS6tL3Kwo39n61h23DdkNz9D4DVBXuizLx8e9qHmfRWLQDF",
  "key10": "cQudxe2GUg1foyJ2y4GGhX6jaFj5T7r1KwmuEGXTKE9q3UG7H2ZgLUuKt6PTvBDyYB9EQf5bw2x2nDDGSRBMAwf",
  "key11": "2jPwLXWUZ5UHc7BFEBi9uwGpDcSR4Lq3uLYJqy31LBDRz263nZZEUsubzs5K3VrFvTAZucBvpVjveJ78aJ3W6Hc3",
  "key12": "4JS66ofZmFaGwifuQgmPKBSn6UAzmbnuis6QutScE9vLpzTYaTZd2552KDjPNQJdhBuq3VNBpH5daA8zbB4AYhCF",
  "key13": "3DfKmUdFHw1AHJzXVgy6E2ahmEEzJ8LSeCqSHdpZTPianhhh1zP256CpT6WYQNJkyquvcdNotYxHRCs2tk6tRTL3",
  "key14": "KnVfWgK7RwuHDSQ9HUo93bDtXLnF57EUoEQrdA2qGU7sHJd3YRa6QMHSC5J4xJ4NRjgzFZxUwctFGfTXWSMDjgD",
  "key15": "5JMmWCDKjPsPiZqBMzN997h28SvLHYwYffBT2m8thqZ29mQk94rxLKuiuQYHYQtLCDjgZAi7qgNW6LUvc9UxxvwB",
  "key16": "4WPsPifTZCrBKcYe2awi2jniE5GMeXkyqM7jhLwsJAFQcTN6D8ibNsBjN3ZrXCUtLqyYy2esS2hWfevyMPPng6w5",
  "key17": "4rbkVWCsb4vCV97pqPZC7PpZVGUHr35eadDgfB53n5eYaWqdfCsGyRJeC8jnBzMvCwE7ak8pLDe56wA6xcyhnHV7",
  "key18": "2o5fT5pYi2UNigJEfRqcwDhTeQthivrimQQVo8UBxMNUT58mMqeqUjN2wqTx1kzypTiTXxhSQ9eXnDDVgGhnSEg4",
  "key19": "3oCmvgRKhMDc2SZ5V935XSBE63kviWL4Dzctb68Szch7FREKnRjP4cmgTgnaTP1nuTRWaRPsYMdNTwqrj1b8RULU",
  "key20": "2ijAgzcTuiMfJaPtWb8apBdJAKxA3oHJjRbhU7BGt4DWVkpur56eyDDzAYrujGuC1gpAhLKUtjAWdAG48cbWwKBW",
  "key21": "4BA9FoGPNgwqXDDLmHeUESDXsDQiLdQVvGM6wezDi4N4Uh8P6xTwaimFoPrRE1LA7MMhXMsQaP5TcPu6tkAE5X4u",
  "key22": "ec5z2rkH2h3BbitLV9Bu29MmSThaeyzigMgWoYHoWQbSVntnSNe84E81afSQaCoDrMegBBSMTQqtx1wXMAU75JQ",
  "key23": "49BZ7bLAHBMyZESVfz9c4TpFepZFYTj3oZ8zLKZrCmY9uqBGBZ6SYBVJU8c4CHJNnKkozYVGZum888Ht9hbNCS42",
  "key24": "4M2aivAJqG8ChgNspRM7wn5C3wyttZSBV4LhL6YNQgcW2S8TEQbJTLRGAjDeZZqfbbwK1JxYDQhmyVR2pk3XRqhH",
  "key25": "3v6WyTFuYqYAqWAt42WxjvevwP5xcfGBmaifoHhhw4LTQAezs7f9G7rK2BvcjUBDMwhs9n14mSYw4csvAkAU4vHg",
  "key26": "PyW1gdBEL5WUN5HqN47bzEDjEBYy4TzFV6Yf8UFHcr7QQMVCGp4gnPRJGgV5fkxb2BytWuX5f79fa4eFHM5dfJm",
  "key27": "323tjqqGh7zw4h7Gm2QUbnSThTbgHbHz92gbrLWHaJLQaaua83cJndpn9xfQwiH7FG7Srkto1PVPQPiBJ2N1TQRE",
  "key28": "5mPyZuufyVfPGM6SPS8LUg78tmGnsLFhcE8JFsJcm3y7b7A9QQeyrKMUzMhe5YpLeYUpCovNWUjDYtDG2sVT3mMN",
  "key29": "bQqc2coTXqAE38tKsVK7gKdNkTpUXNYxwsGhx1TkTsDvVdyNhmXV86VBeddohQJ7cx2waERtmbSVf2B95Ao2oNK"
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
