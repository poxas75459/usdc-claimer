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
    "4NUZwUfa2gTvEAb4SqSyeCWL2J6NrGcsDrjJSJ4BMy8NrkUjjTqoJqGf96tQ2aAESfDQ3zvpAPRP3TGQDs3irpHF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wbhoQNBcK5K689r4vjNsbbyQ9eBp1BAfr7Z5inCAgdRTzGEZMfqFpjrPSNEKdaEyPNrDJp79zy7aBtxM7V4g5kp",
  "key1": "2YTE241Vk7yGQQRNPE7uyNpiN9boHd8aYbnUs2A3mNxVV9G4z81owbFoj8X5euEtw4A3h6iFKbFza47V81effVoz",
  "key2": "3ScG1C5DqBhUJ4K5U48E7XpvfRnXTcUD31W9s3dz8K1R1aQfVC7eYwd2nZQkjdmdKffEfLKtZ2cwDunupjdqc4V6",
  "key3": "5V43W4MexF2BDhL4Vy6xDTs2FhmerDay3MGcPiuHdcrpyxFaR9dadRsGM8ZrCXAUmFLNAPLZPWFVW96d1yNgtixY",
  "key4": "3vwEFcudXKDUCCDNP2SQbLLaTUYduDQEPS6a8yhikVwtrwhvieJ84aVaX4j23adWQYAP9HEFtmBNdXmKzE5EZu3Y",
  "key5": "j9viTb6vpN5m1wT6cxFDTQNd3wKfjDdh7K7EVHnpvs7pDTDA8PmWWhLhiYjp17Q4yWEAuJW5KsnL12i6CPv1TeJ",
  "key6": "2ombpgjG8krRBasRj4N9XjcYWZefhZimgZVnaGDRPkCThDyvtaE95U8bXecQAWbw69wrVgiiHaMyhMgoTKmw2W8k",
  "key7": "5BCyVvjwEoAZx9nETzyvimmCf1kG78HfpQYreydrmDzShE2eVyf98nMyji6pm6rfCjBmmygd7cwqta4UiDfqNb5b",
  "key8": "3rpx9Zvpsj4WZronPqQtcrRz4Dcrs2g1gbdmTuamHAqbAs2uupgfgsxA2h5rnQgMquF25CdrurhfX7ZkUjNBAe3i",
  "key9": "PvYwxq8x9Q2b9bzvZvrCQ1dZadXZHCL9EjyUHdkwGF4uopfjTmdx6p1vsMXXq4YfVvY1aeTvQskD8VtUFsZifPA",
  "key10": "2BTqzopUPnp5Zf72r3MT6QMJdFnsps3BsRLnEg2edbgFvUJvPTejnPeeCtFrT8uZx8a5cSd8AgfJ96vZi4zFtPN3",
  "key11": "3f9m6QSbSr5fS69NWcndc95FMWYiCSvMhNHnwEBmQuUsY8nqu4NYhMP1L9sb5QLrpbXmWjoKKqrdnKc93CjmVBSP",
  "key12": "4JkPTBJpAuMjjBPmp9P9teZ8edrr68fXmYJm6DNo2WPGdo2Bzt9n2ySrDHTBQAD4mBytChiJfj5cdtY9ew4Cmhk4",
  "key13": "3Th2aJLvKyy64YAxnbVozMoRwY7cbQ7GrwcmJugZDjR35UHLL8c8JfNRFgTimXAvyfNFaWzZa3jruMd3yvAPnZ9h",
  "key14": "2Y4Nfx7KMsySYTzuVuMvcVRWsrSsFojoiZy7M7Vh2eAhXMULPKcKfP6EiigNk1bo1Qqvq4AfnYu8ujZc4KTywKT5",
  "key15": "62JtmgNCs9GLMYXCrrLvKZvDuc3mDfJNwrNmaj65sDvQrLbFPPUYe37uXdmbVrN7mqnssenbcNg3ZR62AKra3BNU",
  "key16": "3QWrGC6SXhHCPZGRkESL5zRnY8CjnR3GfW84jeYhYXgaY9mEn6VW4GkY15kck9dRKiaRixH926Ujfx3eU6vmPknH",
  "key17": "56kXitC4yTZUDiE8SH4APLbAvNztBrScHTgzfou6cgrittdjkjsXr9e9QSrt9L671mDFFP5oRgqLzLTaajjnq4sV",
  "key18": "4DMgLgQvc4qH5PHRnM3Q4uG1gyUc7NeNMKTcS1UhdDsTj77Ljxyc2G3MU9PzJMgjBzNZ2PvUTpgXrgQNGKA7JdPv",
  "key19": "2NxxdJXXMdgGreQR5FMznpXDpMBy7xLSrcxT1k7YhUWuWmVwQ7oAtYyVZ7QfxLFukw4aaMrstZdbqgwqJ5EJHG3F",
  "key20": "4XEiq1DUUAy5zNb12nR8AHU3SDUiUwwsUueYmyfySWRT6AJjwstoNrn94BsNGKYxrAkDTMgi9YhkQ3LnJxEhdxTQ",
  "key21": "2KV7TP4AwEeHzFcaRWmGXY89H9wHbX1LARMVY9rA5qyBDa6WGyermceXR7CyHUMBjnGvXT3K1ncAm4DR9C4Rfxnn",
  "key22": "5DRPreDbMSmXakPEWziwNQBbCToEQJ25Fuck23SnagEwtqJzxWzndg3uwqXw83pJBXYnJZhofTbnyvBVds5hFS76",
  "key23": "2sFyxBRmQ42GsQVzqgUjagwdZ2QS1c7dhWSWh7vjJBZqhddz19AiBtvfKNbFsmu337PgEL7p1WFNbqKDpHDomqwC",
  "key24": "5yf4yFDDzZLak4pFscKbgamNFeSkp8mygWq4WMnosiSALy2ea1aARUobhf4xc3giwcLSVx3JMYgGVHRxxhB9LSPf",
  "key25": "3v7wwbqH1gzA7xWcsfTqCggc5bbij6rMFiHEBtgBXmr63XPWvV7VxGT5XQc7s5e3jUbbgGLZxp4XPkki9C45pyjP",
  "key26": "guu1EjM3Fxjvy7MGChJDk7MhFA7pc5xYqdsd1AjYw8RvVMucgcnZTz1wkQ75MuEJjPUq4muudTrXY664u8KQtdm",
  "key27": "21B8jB3FwpP7ioYiQhauZs4akrW36SvrjwrkyKadvdNLiHCjiaCgbWESCJY7tZQKaPkE5MD97hMtzpqbrRxCD7NW",
  "key28": "5kPq4aHbGkxSDsm43PV2unhKRf83W1in6JZVT2FjSUqHeMBtodFT7CW91pTCkCdngBpsGaHZnFav82dYbGD17F3C",
  "key29": "3FBZRgWyfJw7Eb2kPVhDgpmk4heW3LuGvKZMub951X9empcE4FzCBrL53E4yMJQT4SfC2fzr3MbynWU8gdnP4CUW",
  "key30": "55GVMx4NfYUxmzBUYJwAGPsdQ1rhEZk7PUJ13yMUzCWZBvJxzwMSpXSqtBKHiEoTJLC34ARH6C3bbbMyZUw2XxLT",
  "key31": "tyutxGhk9k8RxupL6hhvKcVS3LUZMfddShU9PrD6MF7EAMr7XRkkq2GUnVZ5bfScMvKUy64DW3pCw8Np58vZYYg",
  "key32": "3fMQ1uDpnEKQpzTvce4eFrbRiJ7NVn2DYKmpiehWpuUt9vJWSYkWy27iCNtLKartvAgEcuA1uynMMxzcK3asyBuN",
  "key33": "3NGBVE7j2YP6Jy1Nih7sTGXAmGEM7umxNmLQMsKT6L5J71NAiNfC34NUA6mcsgAbabucAAK74gdzitajwfanoZEU",
  "key34": "7sAwcqaHysnXZMGdVCyJ7PWAzh2kCjAQnDWQfhB389tgs17rQoa23vL6qxkbB9xpc8fkUpqiyskzACQJbdyBNFn",
  "key35": "5YkJFGtQHKPG58ia2ScsscwHVRGjk3b8XzC3p2StEjQMtRQNBSPR6h2ppiavREt1KW3Fwsv4kRC1XZX7fji11YRx",
  "key36": "2sqGXqnFTFdB8Zd5ea3Vx1phpBGEqo6G9QpMzzFULZhNHF4cZYBcXT1MHk29X9tQcgac4B6sxP5TrSr7aJ9XWNFm",
  "key37": "4MnyKCwsp6GtPRxQsAJteYGcayL1sXZ46SohuZhz9ukeSv8LiWVtTuStCc4XQuwqWJ2vtMK6daxoiE159a5RQZQb",
  "key38": "4UdKFrUJbKkvYrSVbim747CfgpAmx8uPvahhHE4KGKYiG6YG2QWXGVUKHhxL6BxNaCbNzHKRVLZ81HMGEBmfHmXt",
  "key39": "giF5zTq6q7JysstxNfWB1kB1fzTV6isWMC9zPi1QCgPaL41g9v3EyjeJ6VRp4RdYWvG38BPTV8c15PNxcKaQ14j"
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
