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
    "2JEP7U5QUVRBajnnuyjPT6Vg6yee9wVJV5q7RHXzpEMtDeWNPe6bppU5mZkGcKwys3qUrSAp3usQ8LZUX3pe386d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FDRVBrVmyirzN78tkLJMu2uuXrxDnzic8jkfdparifb1epJtck3wC53om1CNUeRyoDXp8aXDZo4j4rF54ZEkuvq",
  "key1": "5c8Av1KxztY9QoDZaVDw7qMCuFjtVqgk4DZaw7ndRn7fhV8nCwBK8jeG7pkHoVK3PEurPahzXuuxTEYu8z6LjKin",
  "key2": "3rJHTb3Qmod6ac6JAMZFTLph5nAV9aUqkD9dzjRwtDwvBnviCfyaECcwXeB8oYDbVPfaC7Zrzj1amm5hLkUNbqVe",
  "key3": "48Nt1yx6oFvwF23gH7t1mrWLH2Qs89hPbWorfT2oa1sP264bzNJYBQCtKGxorVYBH5YeJPZoThqgRwN6gfFRNooN",
  "key4": "3oYvZCx3WKGGBfh5DTh8L7sFgTwNLVeu6uapyxLqikx5XU7MALodHScDup71nLDXJbMyNXDZFzf8miMERi8yCa1Y",
  "key5": "4Ym6Hvt36vcsScx9za8gqkZnKNmcKHvybNWjAQUqRnqtcn9PmiXP2UVSsehxaMUdJiBh2uRPEwstHQ5EkEkHxRiG",
  "key6": "3yjNPEhvx1SFEnuFKYUFpz2LbKU54xViwigHrKXYet8suyAJaCgrizrxgUvsT3DUQW6JEuncWTqvurN32YbyiQzQ",
  "key7": "5YTwX1kP6tz4TCivqWN3YdWjYxhEqZ79csAdF2Uu3X42hBgK9ASdYGzDVKuuMAeD8d1r9e2gXonRJgjWdHvbHi1U",
  "key8": "2BqeJfJ9uCWm8d6CJ9VBdfTsjs9pefoXPKFnQxZiYLYYiLVMG1nssQsDFmuvMkUPiNU2fay1JmnWYWxcpYyqPxom",
  "key9": "5XPJX5JWNhJhfZUnKAG8JM4UWnaQpY2E9KSyKUrpCTY2Cty8JQe3tHDhKNnTXStUyrSeitVdD2fQ9Z27z1sotgHn",
  "key10": "FkriqKq4EwTazY57YEFt6mF9HjZBy2sffArjNfKz4WFEAC4x9KTBiK8nGWfx9EWt37aytgM4ut5p58okv4HgF3o",
  "key11": "5gPDWwyHKtPVZvBNhY74oFNzCqgTeb57YcegPL9eZM29gbXsvFVSNTVS6ikLCJ5rqMuY6QKbydchRb79DnaAC2Cu",
  "key12": "zULyrPyJinigauJzPU27aiJWLqv2zZvzegp8mP1NGetRQoAyeym5pPmei8vMY1VzGJH5C7pD9N237JKYCMw4mXS",
  "key13": "5yDD7yndPfDufjNtFm3Nf8uq2KoyAUxTnLz3RCMHaKNYtjQXn1aGH7aeSCaQrN5oLiRXbGTucTybgTBvWFhgGuHn",
  "key14": "66pv6k6tHHEQCXDekGHE2VmgD3tLcavSg56mKEjY2NKJMPJKME7KqBg2frcBUaUTvTwgLas97GTgAhg4HHAubECj",
  "key15": "sSWSvfGhynGv32tD9LUGq2FT2eTdkCZDf1m1pQ2EGxfzvNeKVUZKDqmEnE4fr1MJUQEjPuXHBpbkvijdkNyuz73",
  "key16": "2odsMqn8T2YvEpqbhAmAWP5wdfp1anoLQrxYZDRq7T2JHwtxGxkqCwuFLd4ezLV9RzxHKM1zh4YpMLqv5DXMadXR",
  "key17": "3X7feNwi7GgjNyfzd14H8R2sELaMPzzZ6vy7wreX81utAmcCP75D951oNYEnb73S6hHSPQXRpds7zLAJFRw7XypT",
  "key18": "JyjazVEj8Wuyru3ukBGp6cSeJ9V3xXZaTKD9Raf3wNWsoha3nk8MgdjgqG7aX53iZ8jdtC9nGifzxar8qbfraCh",
  "key19": "3HS9EefCfwpyzPAjz93YwoA4LWT4ZLk4BnzGpvQJtn1G6E3trGTrPvsnhff53s3YfbB1uyTtvaomy3NzZR1SQDMD",
  "key20": "2TNssjFirVXnSs77sQez57AFRP8ugEcvPyWaMnYuNrUb12i6sHmuJjqfoNVDxGdgNbz31k1CJVFdgvU5Z47FvBJE",
  "key21": "3FjU3EjBk5GR7JEPXox7qYuXiPyT6QAJPS1HBT9zhAvLMSqxc8QKPkcYqxmZPJp9y6Q3NPPLyYtNM24rwcKK4PEk",
  "key22": "2qomo2R1wbvf8xcyerZmtNwyBct6obiHZFC5vo2Ykgy8XcJLkU4zsqmm3dx8SAMuPt8sHBKpMUcHD2ECr23aiFpZ",
  "key23": "5X9EXA7LkwfPbyhhnJwDkfcnaKa6FDsgk5gvS9E6YZbPJqsDmqE9RKM2c9iHJjm3Jh5j9mLo5EMdKX2k4eC8659s",
  "key24": "5PAqZJmt4JDXmMaGpZ7uNqC9sWvdatBbKvGprrCSSXT2U99nDGD7SCdZ4SNxvbYJSWDjB5CjjdQAkxygCQXUmKLm",
  "key25": "4u6ijHFdFsavcyYpu6DzLzTcu7KTJChJh9iXJ84YbffLBMs2bUZv44ti1fjoBDK7Bn5j9C43Z5HuxNHUzRCnKc42",
  "key26": "3qRE6DW1g1qrxGHyDLUtmcCDgWjktQrD9q5JB1q3mt6YXLSqVCnaYogKCv2tq4wnoM9wDRTwGLE1rTPzeHHH377q",
  "key27": "gpwgEXd2Ua8S7hhSeB51Jzek1MMMWV3UMVXv6pHUNps8kskyK2cRsGFJJw3CpGkCtfBJbVNM9DFXGahCzX99niz",
  "key28": "27i8c26StE4kjN5fRJoRzexdc2RUeccYwUPMyiBP38Y8CaN9Uhcgt5R8pYMa61BD6hma2QLiCCd7x98CyoeoYUFV",
  "key29": "64mYZpCWjcwnHcv6zj7WLe9M3HUojwmhPu35s6dtLjV9bxqaMqDrWx6XNtW2vxN8XyA28UsKCpgnAN7FfbmAjeyW",
  "key30": "3obxW89ErRahWHKuNFmZeBYHiUc5qU66FF6JiV2r8D5GsJn239HhBLfbyLLxDZbF1Y5kKg4RUNyHxJK58UU3Xnsf",
  "key31": "282xxAcaqUkX3EmWmHR86AzmwymFWob7bLnuLjNBfn4wPydmWgi7i2CFUvGcxsvcRQLLekbNxxivagubugSxGu6A",
  "key32": "n3oQGVTngRkeSaXhW4p1SaVAXktjnY2tPWP1T5nbqKvapkRXFjzxtr49KST9PXbSPgu5vb7Ec3TZyC3VoCT79Z4",
  "key33": "2tfdb7askybMDa8eeKWaFJ5m3L3FvHFsSgux7KrkrxFZPfiohtCs6aFn1ru4VUmxyM3HKdF4ZNN97okivaQyjXtg",
  "key34": "2DgixBrE2tmAnspuHNiwUeR7DgfBjAGUJsYzWcEWcPExS7uFF6nEJwuD67KzXn9Bk9nvxRCornkhz7Fuj9F5bpJP",
  "key35": "43mqn8myYxHyG6MynYimGJ7BJHzpd56fMP8xhb8ts7gGPk48eqSyd18oxbonot77eRMcHsr2pnc7zfKGX3VoxhQ6",
  "key36": "jPZokhJE9kELHHveekMJAkjcayM6HhufexzDy1eU94MQ5vqf2KrFMqxi59JMC8N7B5Z5VucZY79pbXm9tJQpV7u",
  "key37": "2p5RUnUU4bxHhcmu9sbv5K3J9G8u6sMQsjZJyc7xS1viDE4Etty4jUbJ7CCFpLwBvBZZAjEjRTY1bjAZPo8WK7Tx",
  "key38": "2CREfvLLpxZjNN4JcUJfDK6JvyteAHi7a84aeQQDrsaoh4itKqTCHXPXY4WnSCRvzL3QQX8e22mmfMDHKgNvh5YY",
  "key39": "2DsraeQrKSU79JTeVJfiKzMkReG87CvwSSFAcNuM35sg3kLz3Ewhr9fLahCgnEsiY9VsF9Np8ZL1JLdcBj8E4jBj",
  "key40": "2n3okYdu6YY4DZCgPXfp9CiU8WhL8FgbC477NvU6dkMsf5fhBjVoQaxHd1nMLvt3xJQps9QbwxeWg8LobFUJdCyb"
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
