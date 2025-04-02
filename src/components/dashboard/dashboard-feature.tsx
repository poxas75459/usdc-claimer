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
    "2B4LHprh9d1Qr6Kt5sU9f1ZMJcrWdM9Avtsn8EP2iLA9H2xYoSUnPYi6HThzs5EBdmwPoN2YQ4hzzgnmzvbATd41"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7PEPx2nk1YjJGz8HP9QLaAaQNTRpJcWcE99ZJsEuhWPpvqMZUds69GSYo6DWbKJyf9mRvMGZBCiMix8Pzpcktyo",
  "key1": "4SHVdV8bSP7ukWL67G433voAsKaBqXmeL9CmVKjKGoqjirPZM5TKtUBqu8bJr4hxUwKntKMGnCnweCzFVbAFckUs",
  "key2": "29L2buPfNAB5psDAdQszPZ6aPN4vmAhj7vwmSVbjLtcC8eMzpu5ccptNvjkQ4LgJaMSRpcpUok22KPKNSPFenSyf",
  "key3": "2n9pjR14RPBJzXNgXLi8LY9ogECR7okgTsiXLcCSD6vT3o9EHAzHFoynr8SLYt6wqQwjKdRDTbtKU4zbpAkkPeaf",
  "key4": "ttqprT8iWzCgjjScjNFYyMoCsHv5gy2MAbYZVCVYwrhz9Tg9uv7mJJ4Q2QWqwc6Ra2A8k6bqoSAv4nvwtLEN96S",
  "key5": "52D3G3p3jS7nW64uhgSrRehxdXvGMXnkr4bPkasBNBVtnqvj1sMUmu1SG7krFrqTnSw2kc36nbXNEvpkwgYyu3dT",
  "key6": "2rar9SgbLU9YL9ZjqTbpDpwUyDV7DjmavkXbZtFabFS15bh69KiSTJwSqSSCWwLX2v3ST3tch1ZkBCtq47YgcYkx",
  "key7": "4DtJLvnqZe8ibS5NxqoHFVCvhTr4Ugw8qQ6TU8b8Pv9njPD8y13DtY37wB7GhtYWCyCNVF9n7Di6LqHoos4DfAuf",
  "key8": "ky9RFkYGZTZmT6VawYUsPYieykD1yiKd3oC3NkCkhVBZAztCjoP8rfQrj2UkNhHnParmH6TPQ4s7xxBYcmRxPFv",
  "key9": "5fsxyNjfcQLzazrWhYp9Dmus7XL8mciNRyT1RnX7wYRbrRYsJ1BPk5u4STkYbT59rrGk4RMvXfz7eZvLjEyCuzho",
  "key10": "5Fy7uFX16FnigQB1vW6HttC8e9QqBrqGkoXajzu5znJHSuXs6fVcdXSndJdpvejG2i4vvpq8MHeGs5EiJ3C6dcUM",
  "key11": "2JVbXUi4v9GWGBfSVk2RxVxh5oR59DpzHz7aW3CD3osSCUBGRmoZwWZPjRbTBGgngxc1mT47g13BxTdL21ZBX6SW",
  "key12": "jVzJ3x2cuTheP9hYWTeBZxe9Vebu5xRPiCWXDS8xXDY9LY2HVpzddrHDf8EjFKA61pDZPEb7E5JxSFT16rjkVyT",
  "key13": "5tw7299zXqS7L9fcqTKxWtKEUKS1i2CFoQqdDgUdvfwXDyvvYB2cW32QhKuTWBUpSLRTLEsynJXfK25wtJzAX6TF",
  "key14": "4ioue23fLsTUkzupvSP66daKcunyenfJrDG9jENpS8f39qm2g5e7SkggJnd6TqkT4C87BHxGx2Z6wLxNSXDzGKr8",
  "key15": "wM6qRtpqnJG3MTFSjLy95oLJ2yZCRo4dYAJMhoX2vcTc3CqWs8ytfZnvcfA6dpyUwNgD5yPbtBvhT8gpYWgkQJQ",
  "key16": "2S7mAEnSojFsaupaRZz71GwKay8TebE99zWj5ryXfpsMP1cgXkmin28pWTGBwit2eTdn8vboPDFsjdXfkdgDAB61",
  "key17": "5gsgRsv8yaKznWtXXsxYjDEAehzq3HjzXiEpUyokp7zXQa1Sr42TYv837XfkuesYWysBEhFKrJuWhXenv9f7epqP",
  "key18": "3Pz8RuDSpXNgGUoQV2oERgRDNQqyA89bi7iCTHVE28guCzAJdJ2LdrCEjbYnsGGRAkogZW3N5wdiAgNC6uZ6ur1w",
  "key19": "2VrRhXCD5V21qXgaxeqeaoawt5GnTwhFM5JnfTpYmVsUrjLAaQDy34ujodCvxBadKQPzNzZaDfbhnf519xgqB7iD",
  "key20": "VWPbqtyNuPxLfwq6y7ibcwSnGRCQESb9tY8qYrsQmNUB32TiZknH3pvgDmD5QFpaEkAeZvro3ao8DUmvvi7tfbe",
  "key21": "5Eo3fyCh3iCmthAYz5CYDJnVrWNxY3YddYpBK7QXmbBvVZByJehRbXUxaua2Rpue2D2J46ja9jzXybjHWEY1VJnJ",
  "key22": "2yzvzA1cWqqtFUduksDs8rSLYLsqiY6p4XS2vqaFRSdLb22AQyYWNy7g5LtcZyVwLSXxCqMUnRyFKSGxos1ZJTE2",
  "key23": "gGf9FmQEdyxSMbgzQA81NoH5WcLjQk1aTKHgupU8U4PmUvVA5YfbdafqyKMxiygEoNKhEgrbQ3RehbFgMD7PTQr",
  "key24": "3bfq8FbAT6TEsSy1dgcwKLKnGwMcmBzWnSCnv7GM2fe4DfoWThALajdgV19tCGsXREvCqB5JLprhPc4LmRTmvwUG",
  "key25": "3smXgpDh5BEdDYRuMHUuHNtmeAmR3oZPLaUJcHpEBfaUVfTeVfqRnMFhmtPCVjvbozxn5xhrVZ7zQK4jn7xftArg",
  "key26": "44g2BmV5EMLznPiEbap3cMxSUGqtSfjtwbRGQcsWjWjFFpdqqtmz9E9a7QYr3GWS8wUrt6nSoFKkSpDkBJmbMSJL",
  "key27": "3PcoCBABBSVGjeUzNx7r1gHxYCWhCEcjA7v8CznexGUqhCbwm3eV35gfYUU9GjdLwztfZ162923jNeg1AHdZAm2D",
  "key28": "3GyTQsd59Ckwei25dZGNXS7tUE1YqkwVh9TZszRSXMuVeacSEtZbtF8gTq51PgvFwQLCUTfZZUWqMga1VAEAENDs",
  "key29": "5iYJK6oobmzE3gXyG7M3ah3EiYGAnaNZbT3YEtgqJT4VjRGJcRf2AFaEscmuRBBsqr1TZdENn6AxYc7LKHsSPCZy",
  "key30": "3SpT5si596VSGc2vT35kNXdFZhGS8ykzvErWA9Dyp84d6u8hWNNQB6EQJ4Bg4gbDt7pgpXhgvG8FHPNckYFynLXp",
  "key31": "4RpAastoeFPBep27UdjNzhVjTbrvz19Jfjp5wic7ymJGZnK243jj293yjqizbiD2mtXKZeJ37MWUgmVqnrVr5aUx",
  "key32": "3fWx5dh58f9yVYewotNVsLE7K9q15HZf4MHrs5k16jBEjw8EPD29D7GNPmrEmqiQpaNFU3FrkgqvWTRxxjS3ChP4",
  "key33": "GkxCVry61QVukfhCWo3XmU6EkKDYMXVP4UtSMRatiXeoMAusJ263fW6FSYeCfSm3sZ2TdrpRg9pWffibLu9HXeK",
  "key34": "3diwsonWaGxaUXSzUutgPZaM33K2gRDokBPLoze1ceXDvmoA8wYGYeSkuMBuPdHn2NMKJMct3GH36PqiwVd63voC",
  "key35": "5VB8Jk2bqCR1JFeuKiyE6FLWC4QQxofxmGz3qMvJHZFg2ir5k1hiJiWKRusr9s6xRRgDJ6HjZfgGhQMm61ePgrTP",
  "key36": "t8zQSMvU1ZPFxW5TYs9DxZ6LrQZsNFQV6Z5xPgHzutQeFFxv8J8GLVD6upTUnnHNM35x6iupdsqX2vTE9DpDP3H",
  "key37": "57EAv7jUHV11JisNqn9u2UQBm6383s93M7nHAbiA12QyLwfgVT4w79dTQaS8VrTZkg5uKJEgUgkAKDzAuKST9LKc",
  "key38": "4oS5SfsB4VUEp52RTwBoFNhHmhuNeNkCSm3kwM6sVxBAYVTfDvfjcYSYRtWLYSR89CNkorwyy2MZKiQuVCjsiDoi",
  "key39": "3DKHrZZBMenGkLGFfUTQppfimeqC5TYhPgik3U2yocFZYFJ8dT4n4Xu4phL9mAmBybYrCNFScAo7n6mZGEMDAsDx",
  "key40": "5d42sjePtwpksBTYcD1ZDwUbCr7v4rsHrQGfCToPjLSABgTfwdDzExnr6bwoaQcozNLqgkxB6P1jDHVoyq7BaZDw",
  "key41": "57avkmahim2b1QoSNVB5yc5W6c6hZpVvrnKU97JmRn1ecLdcR33N3ACcXxMsxwzfoKoKBsUjDuhiuKgjKYfTmsoZ",
  "key42": "5PePX5wxgJkZpEXm29d3UXQWNeZp4pPYE7kifDifuudLPTWDn2zaZGZXw5n5ew99N1M4Ufs6XmZua9XFWRevGW5w",
  "key43": "39w5wT6BLyFLNXDXUYYgQypVkXkJTS3hUFTYuzjFGf1WdqjoYEFJbVVVJ2PdrSLmTB7RUnDqfQWiz5F7Dc4TXxYq",
  "key44": "5H5KXkeTbjNshuEB7gfWpVfjWxod5qPf3kjspAkoq4ANPtqUGPRV8JLRLcXRfs8i4VFuNcQVXpfcy3qVKrqCMSeb",
  "key45": "5AJWVEcvNNsqCjBC6wg18Tkz99bFw1LvpTW4Fv3akUoqYei7fB42xCepJuL5127hyXnRd8GRxExewjmHubTtzZD9",
  "key46": "61mWasU3Mroeqt8aA79kdgYr6i9oe5Lra4mjQEgfXDqdPdwDUVKP4tk2YR3f4sdZdwsmsXW226J2ZVLC5AX6T6Kc"
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
