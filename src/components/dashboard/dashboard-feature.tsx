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
    "31w8e4pRi27fgmXdMjCb2U5g9EPYJCP3N9dYYSmif2yC6LcKQAYuYTsAyaY22aEZfYAuHbkmjNvGMgiXNUotPmXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BfVJy7XcdsxcxJwkHh4Zd1jvGAP8ED6TVkokg9BBNMc7weepNWRmFcAK4WUof29yZZBxbuU5LqPyU39Aoe5iCHt",
  "key1": "2zbmeaMEydnGSoJjuRczXStNbqZeuGMQKqS2h1r7o5cB4KAzWbt2hytYbTrWfzQrsXUFvnptvLU8Zb1AqqF9DMw2",
  "key2": "1v6wmio4XgHNoTFAUZAFbwngxBP866HEKhg97NaeSRtasuggxL58v47csGT5xAmWfznxeNNvpes79deNB7uVMCp",
  "key3": "59nvE7hWtkt9wCr4bjncFWSniSqonCxRBibvYc82oW6qLHPErEo76cKSMMQTPGtXR6fya4QvrejynHZNyfPpKrMn",
  "key4": "3CEeti5beMEKD3dkfhkuoEUD9HaDDPxfC8Hy9DR6SEtVvp7KTEtrCEmdcLYLKmTF7fx2cUCdrnHFf5W3pMcoLkHU",
  "key5": "itCQWM3P2YrBEeFtaiSaeFQzQZDxFRKdLsjbrJWnLp6eMpjpga7CfQz7J6mZB1PMi9cFYnrdSh3Xy8R1jWKcysP",
  "key6": "4HAzA4AKL3vjHjDJSqcNyQoTUKojYBJXdQ1qTNbXY5feMcSbB6Zsr6eeKZZFRtYghCidA8wCukEXDunSRdrnaQKE",
  "key7": "9AqGB3g8tGAhc5r1khmore3G7bxhy7rTHJBq5XZVfin6nv2qoPiVao9ufQR1sbMdb24d2eGb3U6LYh7s4FZNDxH",
  "key8": "3LjPperTPAknnwrfpAvGFwgJx3Kn3kMUi47e4fHzksKLdrc75Psr146Z8ySJBR13W15hM3aUgMpsxgWR2qHsdYVg",
  "key9": "2quhV8PCY9T8oZzeLBattHXHdNL9fy8Qvcw8FKQWoDyYLnimSuQah9kSF8Mt7f9FwZ2cvJGjj8NoDxeMRkuSMbix",
  "key10": "x7ZS6Yt8cjMXZMSXoeZ3uGnVu96FeHbn4EHnqTeNSbLiWv8iQzeRUcKxKhD5Q4u4fiDMY5wmu73UX5J9fzy4vFb",
  "key11": "4T4jrm6jDkFk7wgXoq2MyQL7QV3gYS3avnFZyHRLpoi715WdX4LHRXzb32MCWWVtVumoY1EZEkjfBQKg8Evb9GFs",
  "key12": "3N41h17p5vriddtMKvkTS23nQSSV39evJrJ6kn2MsBPPSN7Pm4tTiNiYx9FbFizRRbjxydT522ag8hW1fhbGo93c",
  "key13": "5X6uuh93Pyff1YFFatQofDxpnf4us1wF66bc4YNHq8U1RLTsRuwNgKyifPwMxgFBGqdQoztMqPxCtvoTWt4wtwnN",
  "key14": "4uygWC5zp9Zz87rs1LZ5mRB5urLYS75rX9su6vcQazJCTfRRRmNWb5vzdvtzsLMfJ3n4aeuCCugMYP1HoVBVGNSC",
  "key15": "E3SYVaiz3HbHcpV17fwVnCqkYtomcGAhA5ajB276qUfmmU3o6e3aZkm1YKPNbEsbNgMWpXbLmaKF4GrcZTJDj2C",
  "key16": "4ZTD3Lo5A5nB1GPfFHSkpYSjtNqoghYdQMKP6fAcStsiBN6zQT7cRz7HMC2jvHVdvYmYsfZpBSdVzJswtjFmTXVG",
  "key17": "2D4M6S6EkFdURLuWQ49aBi3qNhTaDGqK5YU9GoyduEPJhrwWwVfqYT2d8i4xL279bv7NGCLjoQA8RXTvsc1PfZPB",
  "key18": "3TW7DtpVY735G8cNZGREzwVC25DVf85kznT32Tz8cHBr19oL47XEun9TaRVRNir8JLk5nNjBTymEvcpGGs5So7jL",
  "key19": "2k1CmzJKi4T5eJ8nAJrEXNNpVdJQ4R4vxofUa9nSJjYgYa7s5pM3Lsb5s1g9xyqPzzL7Gd4dBLtV4Z2u71pf2Vf5",
  "key20": "5XHaee1nrsnjxPiXQyPj6HvjnBSWDp8kXDfa7QwssfKVDBJ55PNcyi1b8ULfTSXXQACAuY3vkQrT4ViVYskbsy6s",
  "key21": "2VGWFL2YMKdvSjDYVvMGRz2232NQon6FvbZBGFcNKYk6ok7sgPWZAM6SQqjwhKSrRHeXSC6WBbe1BBtiHNpLdjrV",
  "key22": "e7J1sv6TDTeP9VwrF5DmcVNbqYbpGRqFbFWPFiQCjXShQmDmQxCnK2AzLMdhmVd3pbF2d386yxDjzxzfaQjorpM",
  "key23": "5vnC1WSg2Uj7NJkZNRwtVDZ9b9FfAFJozYhkqpvWwGo56dSB8y9BURPYJiDNA9wbPY2RhgdwcLb5wLAFiB6jPq1m",
  "key24": "HUdYEaUzaZYWcLBoFaFhTBdTRzxsu3w88EXGYhHnppPLJ9wt491jeV6KNppHh6WJJo61jR2wqFZpiYcJnWUnhEg",
  "key25": "n8AfPnHZmVKtreUvBFyQkqmyT5RDTkxJBmEwu1BZfoacZQzPoLfyr5bFxtL9ZcfyKH5nVSYqrMjNPyrLsAita84",
  "key26": "4HKK7Ysj5WcQhidhTtoCeEhZqU6XUh9Qn3pEWQzXseht4hZ396vxicyozAHw2jPdaXfTv6WxZpwgdjHXWLG3K1Yz",
  "key27": "uvjiZUSwxnurKs5VVN6VPuwwk49jAdtqqaMy81aRG4N2yMNWjhpf7qqihPCFnF8FbEjV6E1p97nE7Bm8WWMQKT5",
  "key28": "59iV39sh16vFMqg7Efsrq5zEfj9DgXy5BptLV9S1pAsrHErseWBVSiC32oe4PbtjY7RnDU64RyLVWKt38QBZADT3",
  "key29": "PfjqEAqSwCFbc4HpVmWYt9kPYo3aV5mDrQHSz81HeeNHrUkfSgLxG988Bmfbi7HZApg516HLRn6Z2bBP4Hit8jD",
  "key30": "3KauEGzSAZTupsUipCUkMLGJ73X9J4gFUHNxF2tjgf3UjVSVVnSLCE9TnTSSD7Cc4vfAzb4xgM98wDen5fy13kMw",
  "key31": "2jnHAX5K7hrhNdZxddbnDMA5eBovayf3nPnZ16qnBcJbpNReu7esE1ppEqvVBxX9WZnaytLAK67UCShV2LfgBVjY",
  "key32": "44R12a5uo28Pv21PCojb4ygwnN8z5dPpynKhfFPAS9zkVR9A6JCPGrAYJC67WUpfVzAyWrVRKz8FruRQbBn8QVRL",
  "key33": "6TdqJ87zHGBdranUnka3k5iN7w178pxVryykY823k8bmwUCA4oG9YCgyUNbCHdS8MYKYHyGJNVKF6LKDxZg1Rzt",
  "key34": "3MMiCcVdFLVEMheRNsjR15meVkYGs9NcThnSxMxUw4tWv9D8zvXaGZ6rN52ATMfxBeU96Pftx1TSjDiMJ7vC6GHd",
  "key35": "eg7q3Na73DCpG1XpQeB75RzJUjnFT9GerhqqVZrtzu4xRbZKzoAAq1DtakCaYscYQ1L5XVmPW736G6chWnamrC9",
  "key36": "5LtX3A3jaQU6MJAPPKwJzPwPH3xpawD9XkaZ8NMfqA4EYu9oyrvw9Nq3nHwUBaU4thwYyfhLZR44KSdYRwq2z2yq",
  "key37": "3ywDYtNtd3YbAU5MSL5MSi8nY5RQm7ZwPvWMwop3FWbrYsVPwNmfzDPgWPT2eeCAGCqugDDv83o19XYDGESXy7gL",
  "key38": "2fAfWL9BGKx3WTDaZz6Rr3w9o5mdsttaPZx1njv2QTD2x1EC6kogLtAobZ2NQBbhVv61Ss2in4VcaWfobovVVjfu",
  "key39": "2Xerpiw6Q4JHhPo8XGrfD9o53Crf6zGBRVmVyASxxt4TTrKiZdHJfJo6HqNNPteQHNQyRjAikTStFkSaWWEskv9v",
  "key40": "1wHGmB9EVH2LHy63HLrfbEsw5Peykp31RsWG1DmSnxBu1ZptbP5S1NpU1TWj4STPEAiUMqghHrvCyWkBdgvBgTQ",
  "key41": "4QqHq748Ab4PPV67JtLc279jGVKa5kS2aBz73M1PiJ3PiEr5GQXMNeWiZFHBBnAsfg2kAqKCRHUdbr5ju3BkWAJm",
  "key42": "2VJcNtzbFK6Dwz59vqfHxTZ4k1vLvTo43XHHZSfVDYbfxofS13yDqAo8isDo4R2kaTQuGXygASq1FPip1hDrRobd",
  "key43": "2aaTacFp1B48Ne6gKgJ1jPsjKFJbRYQGRE9YkTcCqLgQbpRxJt2MBirFBwQ6xrEcqrPReEhNMPwRFi5f5HVv2G71",
  "key44": "q4Ary7TobSFnYXAidPxcuNbGbAYsrwn2JVVrWm7Kofb5AbcwfTF9rVJxNP4WDgcTDDnFNGFjAcWDwf3uLGbG7WT",
  "key45": "d2hS4KmqUFecNfZmnteGdBhkV32wt2dkFa1Zx3RjAFD3k4v7iK7DKUrrX6rPtHi5hPQVshaCaiUXqAP6itEahsn"
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
