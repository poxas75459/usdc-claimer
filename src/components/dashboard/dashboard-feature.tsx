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
    "4LCYDUfasB794XLVKqELJbbo4y1pvHHn6SN2XA3RNx6pBjHjVYtwt7FfD8xEnr27aCBKD4p3mtBR5cnZp8nR7Qgu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sUB15JbfcemjpXouAhpirZaufCi9wkQ5kXXvQ5qD2W85myk6adhrsXqgPWR6b2Jgow9DSLwKJtSn9dHUfr6cyuL",
  "key1": "5M7X4NiNeEQgQCr5eD863FabxnxSmELiGm3M1r2Lh9wbkP5Xecjbp9i352w5RjQLuPz7cW8yF8GKcqjzrKjXzfh6",
  "key2": "4fnSLiNBLztZKjssQYBJYY5zZahcatPmnAZFfJj6XAPmk4rrevLt783W6CvpLz1r26e7d1fQUbjFfuwxCRam4vr3",
  "key3": "43WeJh8ZqMrz2HByebJvzwRt94JVgcNL1EMoR62MbvqVmJiWGGTmzUTjimBwxKiAZ6pjzfL76A3Lxj68FqwEJ3YD",
  "key4": "4Rio1XbtKE8c18cDYkJU3QiRxRzBahMeh1k6YfYEdAKtjBm9GuGZBZNToqS6xGqjg7eQYyDv7dAjMqS62gAyfYy1",
  "key5": "7SZWPT3Z7i2x1ceKc4BJcBNXvg99LsK4iScXwtGXX4gXTgwuHyQVde5s1H9KrYonu1m6EEHCgxdXiugJAR7EndB",
  "key6": "5ztfwHAqPSQxQKgop5cgMhwUELSyg44jtfCVANSP6KnQ9wf66Pu7CKD4fhFUrjsyXazhmxndk9pM3RQEJ8vUa1ud",
  "key7": "4PdyMFkkcDzoPYQeNP3WrtRUtQ5D7qVEp6qJAUrBKKwiCM9Yd5mJ45U3aFz3GtKmDXuevt9JHYxyxSMr3rwQ9LFk",
  "key8": "2TeWn6c64261CUZaa1iaxKiusabHv2p2oxVNegvLeGJX64SzuWcBRmYH1W57yCXHUSznHH7uRM8TgF9NUUu24LQL",
  "key9": "5ff3zLCSHunzKZo5VGG9QUYM4rL5ZzB3cZLFj24qxzSJsFnjJwQCRiBzxm4uSJR3EoQcSSKPveDAHYVyQPm3htJD",
  "key10": "3gCaiTY4zANzxQ9QLroVwipM4dqfaZaTaSEoXbcKEvvBsxrBmwGz8N9cQKr4LcpZhiKbnvKVnkJxwD3Gt8VTqtM1",
  "key11": "2x3A7j1f6KEudBeysGQSzNNX2fNQUrhfjmBz639gVB4W47Fs1QyXgthjsYTUKEfJ8Koca2Pe1Y9L1Zq97xa4JmRK",
  "key12": "3boxZ385qZUKXET3CnGVqec5tu3Vi5uo5tg9QeC6dwhSccy7vP7Wqg5DWhsZfnyYVfSCnZFFvfUMgTmAqf1RLa9m",
  "key13": "5E1NzPJTMzdgrR2Tv3vobAiPkFNreyiHTi1Vr8WBHnGx13UtTbY1tKiQ7HUSmFXch4czoo3tiwnZGHdq3WTmdKRM",
  "key14": "58V8ZNaPKi7M1ygvjp3mZnQnyyVZkgFmv6GpNygKecZsyRumhewQV2vET6egK1N3Xg7oZ1kyF37g4e2jhWHyvCTY",
  "key15": "3RP41h2PgXW94woFAUatcSUPAvJiZhEkVqGi2LocQHH1Ccw3bD5yhHZGveS74JH8HM1gEuLxs3UZoS6LpAV3VrVS",
  "key16": "3np3DDMgYKjEqHVnjRnWiHWgQg39Bs4jsMuPoBDS7ZWa4NLaTJnBRa3F9eJv9FbMN2php2rNBXk6kH1vBCEevKGq",
  "key17": "wyUGgWAcdWKb5nU5mxzf28vxGB1HNARNifaoqJQ77xQzXxu7hc5VEXTAWMfjyoiAm8zJwsAZMvnRXJRy41937RJ",
  "key18": "nTE5vwE63gEweuXwYdtYKZpoKsu5DVtmLrHgfbVLBCYtfzradVq2WvE3cbXA9Ffhw2nrfbBw3knmY8qJvTBSL9p",
  "key19": "4F8j5JhUttZNRGFRhsEJv8XgT3rxYaJZVLDEanvbrxxWaMG7dWbwEyYc1vx5duYEcEXpr3fkvqnLwkSuqBTy39qt",
  "key20": "3YzKysYJ6XSuFQdUCwr41cyy8QdUmBwdUoG1bhewn9Zf56TkFJKJo5e3gENVCUWyH58g8mD1F42dF4d9vPV4wZMr",
  "key21": "4jmNZj2z4Eo7invFXAZThs2DvBQTCrCYdRgQ31gtq6zb33u5rt29BJcqWbAHzESb25JScSuQEqCQXX8hHggi9SfV",
  "key22": "2LsTvwfkLUpmtVe4PBifyam71dPRuPDTKhJ2xKFGc8Kz1xonin6wPLFTbesRQChG7XhzheTZ5sR4RxzNTXxymPVM",
  "key23": "2H1gap7CMtfkKAfxUESBuRCiF8EyZyUWmoxU2Rkb7bdqgHZQax3YqTSBCMp6SGqbGUPMu4jNptd4MjCDr95AdWNL",
  "key24": "2xWPg2yLFNj8J8EZYLZHf4QGUuLyjTGNLCdfv2NzYgYTK1gJngpCUxR2ocbUNnW3ZyHhD4HMMuVCiBmcCBoag85W",
  "key25": "2w4uvH3tm5eEk8S4BmDBQ9J31ivTCPJ1ufYeWU9HwVSkGtQPqa8vgmGUeLN9mL8tebFCgWdyE48pQU9jw4rF3GEC",
  "key26": "4tEPne6ByyoGzz4jxRKF9AyYpVnDCw9gwt4TXpYwaqEPhVkFZcb4gkHzWxvSEWFz9yocXiiyVvgXo4DKpapYVzQr",
  "key27": "4rUtVwEi4iBew96KRWLUeP2pVmv67yv6sH6tqpBxd9ovPaw6j6wJJLMy4h14JckuNPiVZ6MYe82upRhgXrKaY9YA",
  "key28": "31oWtRGbM5EaB7yJ9VUdqDARbPZi2rzHqXtoJdWC3fLLGEqs3M7GgKXx9aG4WwtEYUij6uuRUTpeVnrPAxU8qucU",
  "key29": "WvnxKNVtgqRGWMiJJ7y6HyifTHqfZiHi6yvG8Nkj938Rm1rPy5Ek6z6p9iTDS1iDeeAmQiv34FahmZdX89mygca",
  "key30": "4fz8ZtfbFX7B3edaCqU7NueWd74HqrBen91YZiXYK4zY6WGiUvgn3mCuWUmjTWE1De5iyAxhAT4MCRGSuvMb6WB8",
  "key31": "5faQgceAtTTGwqqoKwmJo4ZMcUQUqZ86r1x48ejGfNgJixeZzhJjUzw6AmW4PGdHuri13dcrtdFiATwtcaR2NZPw",
  "key32": "3D3oY8ntgJTciwme5Vgh1eJazSMxxe4XEEUGpC6SoH5vcznAosmUmNVV4E5sBLfderLYUtQPtfoqLd99iv8MfRG7",
  "key33": "3TNsLLqs5rp9V79mqLReQ5unKZiGwhA62ad9ZyteoAfZzFvVJ5qDPQcjyMw5JR4MqtQDix4VmvuonYmuMRgYSgCj",
  "key34": "2i5Z5xB6cFdz8QLXjZvNtmNeXnVFM2Lvvr4Rx1DeCakFFZ2Hq1dXcqtc8rSbYtEQR4ETgPJFG1LZt7Z8jdwVTZBC",
  "key35": "q8E2rHnzWrGYn4uSGecLGf2tCrEEaqRaYMUped5UztxTHYJtqGKFRZy65fP2p663BE2A6ouuQaz4P4hqDrSnhz8",
  "key36": "pWyvaBxnKY4YQd3g9mT7hso6P2ojSdzvvh85Zbj9xXaqRjfWC7oMhkgvvevNtZZuZDPdRKENSYmgCd8TZxvJtoS",
  "key37": "mRctbbJQDs9r8eoiw76dpWbmrm29fgPMNC9vZnaAUgPt2iK2sKQZe5LCbEVHwudAVTzJLDccvAJfu7dbkz11GkF",
  "key38": "AqcX9sctbyzPPAR2JWreiaesTupdQNwUCu5don2KFHyhcMd7PpAmNWHvqw7dRQ1wELZPRzjmub6Y9ruCtZxKwp8",
  "key39": "5Lvpt13e1QhoQEkVQRnLbsvNHnf6Sxxhsmf7gtu1QPDrnWNmcEKDDEzCWJTqP73LAMDJLQxiLUwb7P4WSTZVaBQw",
  "key40": "4RdKeGqbLcWH3ZHkL2JcxHMNpsFjPDQkFkfxEU5WuPdoTftPWmEQ1BrPitLaZBVoCMjHXML93VaeKdiNzszBCdRY"
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
