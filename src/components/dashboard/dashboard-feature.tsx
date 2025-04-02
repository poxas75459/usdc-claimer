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
    "5kQAz3i153CA47nNkRokjKT2SFiyXGSn1CYAPwXwDdac599AJCHYeMjPQfYUxeLfnNubtTmhqdvbAKFXamwGESe7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RJzTr2y33Bpd2Rud9ysrrjEjsHpBFTWfJe7DHZkLXZQrDaokeWd3NszeMTZfC2XXMAfUmXF3DkFrAaP1CNqCzx1",
  "key1": "5BCprakahPWqoXRScFR699CkctG9thU7rFNJV9qGSjN7Vn8E8QV58u7DUJb5hJPB6a8qvTZ6PqyF9AK5K3cmfWsy",
  "key2": "4ncj5ahAezBkHq4udUYuz6WRoUmMxdk6r55u91KJPyp8BA6sdAbdM21cBEm4LNscCJPfxUW47MYCyvQLYCL7TGg7",
  "key3": "AZSahSCmFDGF8Qii1cjYfaePGbBSk8DeXw4x2VrUdgjMQHzcAzvCWJAGAGwJ2KH8zjqCjLv51hMR2PVSFALY3vq",
  "key4": "21Lfmi1NiTmS1ULRon9miGyqrNzStEKBg9JpjnSHQeAmLXmau8vpFiNqGqsnqpomJF8wtPpEYEWuYnX9vt513sLp",
  "key5": "4V2Hee6cnkcfzMi1tGq1MGR55TssEqFdTssfbrkri1iws7H2Jsb1eZFr8MzTA63PfDN2ctLWQSyypXWqqsuf5LfZ",
  "key6": "2b1rEYM37j9ftPcA9LmYns7s7HckNovYQ3VQxo95zMXSBzwSLxunX9hwcAmdSc9dgQHSZtr36MGjfJasjN5mrWhR",
  "key7": "b5xeQLcab4oBwcooKMzaQo1N5CZJVT72DTGdRCHSQcnnHGZtiNHZFupbbto4LN1ZDimQ1gUPaX4scd6DPuz4Zkg",
  "key8": "LWewPQe1aoqFm55qqsMAuXVHfe8Jpti1rLfMxxyr6fMww9kmu44kTP9jKY1obigrdakjXjeao18WeGCGpnKMBC5",
  "key9": "Tb88yMWyNwwAvfQAK1RzLg7bzkhZAB4hSKzRRinrVk5y8yJfEwuiZ3Qav4tSuhCse4FMHzjxgrePjos29Vb2y9G",
  "key10": "43oKbaj1mtYpuop7hPjuXCVBBEpRLynfzt7677zjWiAVjX3eNrZvUGmpdQqvdNbyd9edcUFBgMAJYmVbhqL9iFx5",
  "key11": "3x5LRC4VsLc5Vb7EjSkscy6jp2z972Tch4bsFvCypNuBXidmLY4ZbxTKw5sTBQPXLjcdPMMXKL2axTEUVKNWfP9k",
  "key12": "22fmwViitrN5Gnkpg55JoTw1NeSxRqZJe4p4fW3Pn9vxNZ66rUnRWKiyTXYgddokraEixwuKrHXnwHwks21nC7yG",
  "key13": "2FnjbJCutdGC8UucJHHnoJ5hQmKotJcnzwDxB8m5eHLbe6Mvs4Tee9MrsRBwZsBCzcQqYzHF1g7RHSz2prbfyrF1",
  "key14": "3fTBm12zTT8XyQxQw7cAzYX2fRB3cP7nZCAorThmgFTu1mfwUmzJdAn6DK6kZX4AtPtswySmJQEBZyYMwLPsVJf5",
  "key15": "Gd837ypHnwDrENppSewwGStpHbweZvFRGWoMP6aTwGHyG6pLgBGvFpjUWNn2MavXGzrUHpSA9U82ykGtKEEdNRi",
  "key16": "35T2pNaQperirjPTWcfRdZ2e95E43tB5Ho8kFsKxkaQ1CJbECQfAZ8Ld7vv4GKE34Jivmn4rFrCa4dYmLVAutPg9",
  "key17": "57N47jG8jt8qjoqSVP4wCdYK5XoKF9uzsTZsbG5K3YyL5NMKec1b7WFUiWLr1q1QqaCqr8oR8PMHhmfydZULYzec",
  "key18": "3eSmtEaAgXgTVP4AJCYLhvano917vzsxseL1nBWvdpDDsPqEUk67MSNU6TXyac6QUezQTFYBQqcZbx6LaDXmBVaQ",
  "key19": "4r4XRUZyvm9pASqa5bw37KEnErFomwtbspC2NMZ5R8jcuG4XiEzmrFbyt78Vs6dk76EscEZPs4oDoHPHRTbo73Yo",
  "key20": "5a7WBRa1v8AwgNqb92mD7qgy2Dz9gEkkwphotBD2NNPDwyWRxrR8rwhdrySPvqxSG99Ff6k138guZCGyp5BLjbtd",
  "key21": "2gonfF2FTJFLs8CUMco9AT88TAJS59aEB8bnPCXVy4mafZSjgERkSRuXb3GciP5v9NKkoquAfV8gfZFCYPyATzn8",
  "key22": "5ZV12FMbA9LYJkLKE9YVxeqeeQDn9Khvz8TeP2vfj8PS8opYWGbygZTbw2vGzQ2jktJRZn8xSXKFu5ogqrnQc8cK",
  "key23": "2FbwzHdGos73AXg3QWHHhezNrQg9HuFNydtt4bhyRTbFC8mDBkN3YphLZdid4z8SC5tenqpHnTPTgn3Xwk4ZqeHX",
  "key24": "9NNnwMx9sfGJzgTj4cVTMjcytFWH4vKqfg6JFZ19ipcdohzFNb331DZxmXbWJnCiNQhWeFCiQRjxMe2B3MnViam",
  "key25": "3XeXzV22qbHrPSLjMUHe8zZcX1iidQhmPjmtQxCoewajRqCKUajeg7p12Q7SeWTRHQyu293SZg22FYDP4GPaKMTY",
  "key26": "5fhSrbtohwH2rbGzjxSdeZfhSaf6hCidCQ123JxfthPPcFwhA6kV38a27W7aWdBPGkjkLN8zm7Dyne5UTBVbacoT",
  "key27": "3Yx4mjcSQDpNrwBdpey58MWnJdsivQsAQANqtELc9or9MDuNNQMwWXyuQz7aRGSK6wX6KZZZLzdKtD42FsFaGeyw",
  "key28": "66wFewg9ptfZTnpz6CXycJtD3AoT9UgDitiRY79LU8pTtbsZpubtrPnACPiD5wjDDbYiieH5hYGCAtwouLW2RXPX",
  "key29": "3QmcCsXPU9HN22wBD5JNRJCws8eJN6ni34ghpfMZ3Y12kDFBZDEv3nYPMnzC36MzUeg9KmcgLTyBWQoSC5g7U2mZ",
  "key30": "4UcHf7S8A4EHLqxZqx65e8cdmcZzmZD74VSs7F7USYeoUo1rTc6zt8rxzxqMApSakGC6FUWayRsUp2wkfAqgUC53",
  "key31": "2uASuDDuHrKFd5xLDrLjirjGfT4GDuTcDyyRChrEBrB9PUs2ptKH5VN5W5FP3qP6knYtoS8kWBGvvazkKASwovE9",
  "key32": "W6BVVuYShqRKrbGR7b5FKerg1rxi4xXgwP3pDtkpzjAmu8wMEAXQ4u8HtebD3YMJgWxuEEcdFScXxWoQnd8yudG",
  "key33": "2ajd9UmKYNTu19K4RK3DgTJixLA6WjEJK8iRFT2JeGeN9sYHuaijUMvKcEqNp9jV55SoE8cAQdBQb5Rk5ALVzmoj",
  "key34": "2QTorewxH7HZpSdMZSHfpQzqJ5tBHZhjvVQFT1yDFuHCEPzMRbhUyJM3qpNwFHUG6d3AxP6hmUFZcePdRM6K4oy5",
  "key35": "Nnm8RA2fz3t72D1htQPtLtnEFRLyNwV44g9YczXjsiDr2G5UbtSuBE55zJekPfFmbx6XNsToUo6RvazZBcFdTTC",
  "key36": "5CLS1LUnzjMCWcEGxZZoDA73iiRy6YtQ9cuupwdRXq4stazrha9anCfafKXV17qjiHwTnTLr79Ea5Yjz1Cjnzz2q",
  "key37": "5D89BYKeUtjZomjMzq89HqNiv2sj6aX12udxoPVaQzu5Pe5gKfUewksBzt7ngz9zmWfLUQ4KqaHZC5w6ba11DGEJ",
  "key38": "3fWkD6Zhfx3kkHVvxJsiTWcgXppeyMEr6e9xtNMrE9bX1AB9zCEWYKkJZTEQKi63nwXTK1M4aWB73YvShqeur71p",
  "key39": "7xnDv3AvjdccAd5PxL8jY9vF1Eu9sFt1z7eVRi1y3PFFsYJGaUYeVG3TZu5eTDrvw9pz7R2DzL1fR2x1UrpUCvg",
  "key40": "4ZexubDL5b1i98LW5pPC5Z3UL283FD6oUBgEb3YPfcEqDkHwQk1LPH5FGhFSTo4XmpazTtF56kVVnwRJsj8wvoV6",
  "key41": "3UwSLhhKM43q31gi435AyH5icALAbKR657WGdpzvKWMoiypZF7FaHUaCXZK4karnAwu8WN9WYLXSqKdLo5BNFML3",
  "key42": "2m2rrUKjYzzYRTDxjpbX1YdQ3LLLHT1rQrrFRo1w7unqkeFxnhepK3AwZwHB1MBYmxyCXfu9z2q8VkMQipV6q2og",
  "key43": "TeHnS46f77CDgfesgDBiR17cmum9SuPRYk4vTwUDt35wNbyfK6uwFCB1TgfByk1mqj73Yp8pz5xZ5Z6Ea1ZMq8P",
  "key44": "fSUg6wF6AUgp2hBnJ25Zia2WtkEzDgATGZk2LtyWDUoUe1R5oNzPbG4CwGK4RuxXeT3Wp34toVUBSGoKUhkB1fp",
  "key45": "Q5EXUhyAJ2JoMu4owY9iR5UsGQ9ckfKFkeBz7Ji1smStpft6mQC9c8Rzq3MN1s6mPPKAnBh8zUaioqpN9kDN7Ch",
  "key46": "2wbt9K4i24QH44o7tgrFWoy7HwLMCC3hG8cjshQdYZqSRLjZfQBB1MM1b8pb8x3gwt8EDGUnnuzKfPYpqamc52ge"
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
