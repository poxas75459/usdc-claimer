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
    "YimEThUrYFs1PpvTop1Dbmetn7h8xRakUfUKnt2r8oz2vq2o7NszrZsRkXbENcEcWMdi6wXFCVenBFwBcibV5Gs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k2sHc1HkepabiuZdmN5jzjhAL3zTPsg5Lpht3B57AZ2hkCbVMEfQZLeVeo2bmRRsvEGTUg3a3ea9UC6kKNsiuWa",
  "key1": "5THMLmHwgVXmdRRhYXs3RsTDYuzBXWKt4reLLw7358YASzNLYiyFuRcxfSwSnHBCA61NocneecVZ8cUc9APBbvuw",
  "key2": "4Bd5DUwZrr3RJ2Vt3JJ15YJhwggGRfrsVoj3EmxgXzjYBFVZCPRkSTufH4JPzZL8ovf71CrQL7eT9F6FAEfXxVEq",
  "key3": "32Faf5fN8FCFfus4Zww9fnTh2JdqtYUMhG4pcDA2w694jhJoT4QCLTv1g6rVvNrV6eheLQWspsrscfJdcduvKgNh",
  "key4": "2y5fFztRLQxAwfoGkjN5WgVxkyXVp3BSAzMievU5CLxZcFXkv1eEwSejPfUNb37puG9GUaHvs4EWz822LqkoP4YB",
  "key5": "3o2gMqVgCUMe9gWYu8j2pHiD2wXL16Dt9t1BdXxpmGvSLVxnxmAsY4jJw9DJb2hiF8PNEAcDaWD9RtN87zxFUDMw",
  "key6": "2V4CdBEFZLaf4tpmrXh3orPbG3a4ALswtbkpKHFSFCMda6j3C4UA2cxa2QeGqDaPGVFicUQ1tjA4CYyo2MnYW1RL",
  "key7": "3msaN6qswPZMuvMbpKuMN6R5J3uiJtBDb9hrHDLURinToVb5f6MQvixpAJzzbPHvTygiojm4WndG6TRB4p2GEWUA",
  "key8": "8EnCLRsWUEzbRnmPvpN9V2j9qH6cDs4XQ698r4vnQQ2n8R2NVui19SbeFcPf8ChFWEnFw6V2JBR6BPVkgfMm8mH",
  "key9": "5P16Dw8TtYVhnyknQnRGEjfxJk5WXySU2U8cp8JMjG8a7uBA7QGdoFuj3F7pGigkRSU8VgVznjp4JZF9jdutCfCs",
  "key10": "2qz8Jy2qB8siMac86fB8EVaykzxGVoAdTPvKzy78yerbh6onWaFHnS46UnCw9TBmYNgWG2Mmoz36kX5wzCQ8sY4g",
  "key11": "2wfTMdcfEvCDcwLSX7h4X5Am7aE85B3fymDgYoitMD99S2HBuDEc2ccUNSGin5tBaiNfuPM53BDbwA9fd9HQ6suC",
  "key12": "tv3tgHHJvwdfPUYHze2ZcPYGbB7dktk3jtZVnDTuPHiTSebLYPn2he8YA26dNFKZVeDuhU8CWJUsQJcnwYAY8TJ",
  "key13": "3v9GT4YmuGs3cTFt5aT6UpSAySH3TkaWA57Uti6RF4G3YGaE4G8xtpP241bn822WA7Ak6H35L9sHNqgqkh4YhCEw",
  "key14": "2ta48vWH97fYxN6M1JgfTvsesCPcBuM9nuSeDjHVDrdVm2AiPPPz4irnbfkFfBg5wcYJv9r99FnABa9KBfL3RUZc",
  "key15": "24L3bFx5J7KqGxLJGXvCDkwnjNkmqHrgMKBAMJZPELFY8jeSbtMwe3KnDCZxKVchyybDBSE2pEmUn3mZDPVogzyS",
  "key16": "2z19Ed2DUQf6TTkaYfDTSquz96ne7q4BsUxVRD5e3i7FjM9YoFnVFGSYgZFQ6SiXKtqNE4cCCKg92viMq7X7yfWY",
  "key17": "2S3D4yVVeHMbnECiJz1n6wVxtdbJdtUWWgJ1CsjMB3X21Zwz5eW5Du63xKdQSSEnehjZpBgUAZLgxtYkuVrEK73G",
  "key18": "zSC72R2sf6HvkYvi93tCgNgB1hc78uzkad16fVrWwa3Nmyw1Ha2p7tzTh4WAKsGKxcHo29VH13PBA9avqiCwGUT",
  "key19": "4KLnAFen8qtBoRcBCHqwcY9WANKBUcLqD1rxfb794C5gnGy3fK1c56MTTyt3fkmb4tHAT9V5LMJKf6zFig2EkzFz",
  "key20": "4ZjMCVuMCcraB5w2WKa4xTeEvbEdocMXzunKqFQXpsmBCtEEk5C6F3xFuKhSzdcjSotPNjEs8aG9EKYE3irrav2c",
  "key21": "hv6aPuDTiNVcFSGuMp5gB8Tr3B7EavmCVrfKGEMonutKZbTYYanvG18VWH2inqJZMsLrzE6EmBMopMxRp3zurrT",
  "key22": "35pTS7oofLLVpZFazoqR4YB4Fv5TGE6ewg7ae9BmMSb5ceeTi43TU4jRvHwaSdukc8dJ4FEoJ5axu9XQkgyfSuQP",
  "key23": "zS3q8zn4nSy6bCiZEfMC8aNUVkg4yVJ1Npys6eKc8wqtfoxCoQ8QcXp2piprSzyjUeS6TapWYz7n3NkrhJ6HK8f",
  "key24": "2vAQxdoXnJhCiZhkazjMcpTNsyhNMfEKbfEQ7URV2M9aM1vmhgvMYXd3herBtpdX4QY84SW4YD771T8ccpKQrAze",
  "key25": "4bgNjwmgtpmqXaJmCQuH771RrMHCBcQNddoRhbEJnN5nGcvTQaNR1YH8zJ4fHP9momQEZMQsynNAX1ShMEC9wqfN",
  "key26": "33RULs7guLYYRqC4ugUPyJftreJxgoVVfJ3qehvqUUCt5mbYoTrAyjURQM2QGbV9oTBCD85voUxQ49DBqLPyfzDN",
  "key27": "3S74uEZbeccfrornYHbbHdYkWyaN5JbjdVWTg937qCHCuqijA7EkQAD4htYm9nRwBWwyiQBcnbwu12KjbqtjFq8K",
  "key28": "61GS69KCLYZWK97J7gD1bnxJPeBpRCwwFqQBD45rCDiZbJZzeEofz6AVTaAhzKsXN2mNZwZkYE5XUUK8LhLcP9hV",
  "key29": "2rkc8fEooiLBn8J1yNif5DrzfK8oZkMWmypvAUqxw9ffQ2QWF1WvSfJrh1DeF9XHgeu3YmDEx18wVUwXMo3oJ3v3",
  "key30": "5dLr9y5qVhcyATQCWa6EhxvDXA1sQWaMgByhR4FYcqVzcRs6cAzbsnH8FZ1WssDDUexCFFLaDu2mCY6uoAsHvWNp",
  "key31": "3ns6zyTRFhvZqkjuPutETyngVQuYk2LETYsu72PX4qeKHXrtme9418BcpBjwTbEFhCAJbGi61W538nUV7s4pSV6z",
  "key32": "4jZrZD6XtuVFModpNeubca6pZxpFQdA6vw6cA5d8jbSxq5v2myeAh5kYxXdGNymZMBdxKNkBDRnqzrPfPtv7M58y",
  "key33": "2bjfM64fVCvhAEsZu1Xc9ivX5XJ8mBwyvdVKsqQLZy8FvWhW1VRjyVJkiDdPEswiTB2JWvYEEBQHQxiUiXZTbopu",
  "key34": "41PBydz6jozxpKFSqwGMaVfkW8TAzkRmmRsGrXZ3mYV2xRCV1qbugvj9cv55MoA5Rb5YTiPLpJcr9x5gKcY4MeUo",
  "key35": "5NQVur9nbqtDbKWDKmcv8rZU1sfg3p8Nap7G8iUWn1VdxD7xHXviRFKpk5a2GMpgRHGuzUYnae1Ttf4PKoGfgTWG",
  "key36": "2s1iVTFwijtRRDi18EqkW6ktNvy1G8KsiPmgLMzTZYRE19XzVHFoVzsnyZbz6UgHmbxN2mePKZWuVbKcu8zNugQo",
  "key37": "AZmoCTcMXVzSvcyoKbfKK9C8mKHxbrGrKJX4KyChH3kmtAZF1rgbWUEY9NTERcfxGPtUU2359iUvSY5zeLddEoJ",
  "key38": "39xu4jBBv45w2LhJ8wpc2Agh3cwPtrMc5Ce9txK6NhcW9ou482zgsFQtGRhoxQqCGdxQhCQoiaFbbttpC29PMEWR",
  "key39": "59KYwMT423ZUrebYU2NBVDW8x8fWhFmAtjZ7Py9BU3Q4V9Ym1DWUNBmQ3CX5uJMtt7S5YALk6zLhCrVs3Fg1P7DM",
  "key40": "2qae9wxQhG619DqpGuubAUUy6hCgBEqpbHhNvL9ghSxofV6tLkVMquBu2NsQTPGCiPoar6ZwvtaoY2u2M6GJ1Liw",
  "key41": "VQSzDQFKwju64maBP6g5uXQrAh92KcVSqjKGb3tkJ52Th8ggk55miewRoc3ypNEXDGW6CJjqH4hZQ5rNfr61jxh",
  "key42": "ucMTNSyCD1oWBY3rixubSemgep2FkWnyjEgv3Lde4c8jDQaGDTfWzv7vzMv3joA6MWXxW1fjTCE24FdyeZxS96r",
  "key43": "2eabQb45b43rKTSGDRepViWr7FrRi6VnJ7qampkSEhxK3qiqnTiZMPk4p9L4xLceFv5i6mi1VYFUYEoed33gro7t",
  "key44": "2H2X1sKkir7T1SRb8ew88T8DU1yL5pUkHYknXukDtdVc6x7FA5airZri622gQ6vtNLukvBwmFbaKv4rohZ7F85kE"
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
