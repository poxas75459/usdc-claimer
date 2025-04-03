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
    "2gos1kWDv24QbHBjnJAMR2QCpuugCuNVo5ipAcmUv5PenFgtGFKnqn8UcCmYGsXF6n1S5eMQ99CmnZVJXbTNq821"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aP7UCySyEd84Rg4TskPt4C5hdQ7b6gCnpwsPNWgZ1ys1PsFy7eDzjWdtfwGNTR7DqXc8XmBjoP8gpbS6xdV5CNN",
  "key1": "3zceEpWRQG9xLeLk1g9BESD2TJf6DPgP28tpXY3NaktJCLiYyTp2DymiJkbjZH2J3FNELnQV9vgtJ4xWWoFchstS",
  "key2": "29NnvEbbpEFYo72S6jQzhbMBnXttttU3oguJ4CmHW6vi3fFDn5qEk5S8gHwKLDuNVmBxSVtZ3QCRso7QWSGppHRw",
  "key3": "Zsht2LhQSEVwQMnZ82gKe9jvgnmBKjt5QAoyuxVsL3ghdgRZDMTcULjZ1bMYzWTeTjKC7Xi7BKgZG7MX2Nhcr3x",
  "key4": "4LX9zTWnJomovnK7H8G3QU11KXA9tAevXaA6XaPTX7eA2mxEqgwixVZxrUsWF82aoTsnvU27XBFA9bVHQ65DWX11",
  "key5": "2qkYWivuKZ8mTVTwDqaKcBAU6pexZVT9cLrYArdGN8aoU1HBLNhNt1yJ6XmNKNX4xR9wEoV99FFF94qqtKpQ1pxE",
  "key6": "3cz3AtgzqV7YXhu3TSX9V5Y3puMaUjvkJgac7Zr3ztzuLCq1UnF5iLXAV7wsubfRUERmQxbRZcz2JT2FxeMdU23N",
  "key7": "4ZX112wwDDJoLMJ8scTMRmM7siskg4rk81VD4sAobVSnHjC3Yhue8CJ9gYYdnA3iSSUpiTbW1VXPNNHSasUX5i42",
  "key8": "5yjsHjSbCAxX2AZtVcr8SskmPbxV3gMWjQ5ZdnjCvvA4LMkpBvLqzshxUGAHcC7EM9oSRrdnTDrnx3K9NChWvMdP",
  "key9": "3MA2whtsK26CZQSub2f1DtmTHwhCZRSqf78t6WHTJeyrn2z4JX3MbXpi36e5M8TrnCZ184zuLnUvgVkLiWBsZsuh",
  "key10": "4CUmmmjw8jrGW2jDtPHP2eRgf86qhaskb7yypFkVadWp3D4ZMJh9zYDW7zrZj2zCgAP8F3RkdWn2mqtVdiKYt3eB",
  "key11": "5V7QuXPhhJhcuWFWavWoYwApheSWUDwKV6JccfZtmQmFxc2BXPBFiFkKyfHHjeyv54iGNfUwskiU6yoFT4b5e3f6",
  "key12": "2G2CsCjNjBkvLKERe4v9zKAAZA8tVn1s2PaPZaPNes8LzNFy743fmJsRBdGKUhJeKDEyTWj3rWSANChw5wtPz9rc",
  "key13": "361RAoK4FMftZ7TBauTixB875nAjsYBnByi9NHD19qQ7TSU189eMTpzM4XkRUzDABWfKRTvXjo2W6TQAKZf11uFZ",
  "key14": "4Q9Hyv7whF9CxNq7abMR4NwbXyPm7PPZ94DfpQ2MA5D1fU3yyGpTL9gKpEWvLYsXd3vsr3h8hwyGAfzSRy8PJxjD",
  "key15": "4cMRnjnU6t1ymqhN9RAHpG4n2U6BPozADgQxKkr5gXVXhkmoJfjSivJgNxMCLmgqebn177uV8SkkSwb6weEJk2Rv",
  "key16": "5f17c9TnPqezGEX6aqr6TZWHZfZK4akquf25yHFSPRcGAnfBaMqeTsabs5L3G2T7pq3ZqpU3d8vDnMainoKEN562",
  "key17": "SzreYBQoRGPFedGnfuQXNJBTrLDPnGyrWwyma2qb2Dkpq9CDXmHWzUmeoQWSWwVuz8ZvccMzg4JoXnFKmyUTHTQ",
  "key18": "3WJGfX3zM5hd6fVzsCw2nMkXn7RcVVJRP4acUprp4BxL6bzaYjAYga45TV9CrUjqDB96nyQ5TnN3a7s4Yd1E2Bpk",
  "key19": "5pqvv4TuvzTrDrBRtiicNGXA6Fp27qJ77FzbhpgRzUrKyjfNTKxnp5Td1NEkk4mSQ6JvpyneU37bXZEdVz3JvHnn",
  "key20": "5fMgHEt3T8hDZSx5zn8NfYqo7c5KjB171UJKKfJhzmgrXiJPqg7Lr4NznpwYSHDuNsTvjnTMVyuisLQqWGQ8FxSK",
  "key21": "4SBTuan8eTGYTdazbTYD4SoPyzgt9h1qTqSEzxf1AkPDa1s8uvobZ6jvVjkxV1mPgPDrpwRErHqryXyofPG8YxDv",
  "key22": "545AuS7PtdBZMkR2uFyUHGkUQ8T34btwk7HhWkwB6xVSYLfYH1UxXFn2xD7iMqvU3nqmKYZaMaG3USRYiQtUsTWW",
  "key23": "5x6Zodn4n5x5Q6P6D6WRMguvyQ81oYqAhKCQtSPgE9Fq3KHNCo8ZXzUsmttPAaN6JVTuBPPEMwMj5Gv6PXMGc4r1",
  "key24": "3Krr8TJWutiwW2wmwyB5ygu7iJExWbhMSi16nxHNVstronLcY3SAeJ7gcXVhK46vz89CJNCGYXdAiVpV4xDWe5p1",
  "key25": "XRceRVMZ4cXhLYJ85GcMj8Pa5o2EU6kawCyoHELXTVuZHwKmTwmV9yyXMq5WmhAzPSMJUYkkPhp1bPuPMUfqDmj",
  "key26": "3kRXKZkQv14rgp8TGxy5WERsDMY5gpD1BiDs9Bn5H5cKgAw9Rm5ae98QtBMdigoTF8L8i28a6fYjPhGDx55no3Mr",
  "key27": "3swiyZoZjodw3DLS2R2qGyh3tguGYrUfxFy2mjTAjobx6ubh3V6bu7BJhBb1TSFraNE6ZyaDVdBzyt2yJjcamrpy",
  "key28": "5NFooqv8gd3D695cP8id8h774CAWpAQvfUHTUvzaG13v2n2NhheFVXEn4QyG5ekJGBxmgfTfF22tGiYRLugtGfRU",
  "key29": "4MWY9XC32ongHW5gLfZzTSvcWzm4i4vTrQLs297J9zVLV6zKari5xNspvbJRKJ3CpNMVgvEaPLyN49kwzBoov8Yx",
  "key30": "4b2AW8iDjDFZFniV1LVstX5u6UcbTXdseQP9vd62AdCSGGVrScyMc1nXtinvcMXwK3VaPMYV6AXEXr9XmAwUc1Pb",
  "key31": "WqAq7pxKJuetgtmLyeFiPv2x2U3UgZkrzVrkfr5iogosLLZUzRzYyLekHo5TfTCLJtzd2XJpbMjGcccussHo3EU",
  "key32": "36BRCf2u5R2sNCUEBwpascCfq7godmKuC3JEYHQsx8oBGwiCexRnUH9wVWvMySGYafpjLFLU4HAijMZcvMgbXtst",
  "key33": "5DcvRqHfaN24TrawuoF9Yv1Cwcim6PUgjttUDnKwCCLENdyHxoxjC16xTEJL85Y8Lunk8pqV2W6DRvKSs7JtqWx2",
  "key34": "4tsC4jwcKanmnLzPqLSTFNN85Tuj36QTphqAA1313yR1moaUoL5YqGiL7Svpy6h2zcv4qpe7hZ1GEczbTc9Mj1sS",
  "key35": "4bZTwLeqxdiT5QEgj1A5CKT96LFuSNTDmDyqo6TN6hXDbPHTaCX24dP6tYjcdJt5FiGuZGn85b9f8RPiiR7Xz2ug",
  "key36": "3Nz1CC8G1Yu9pv4v1HRVWqspLuvJ9vijybjwSV37Ny3HZ8itkg73ohUYu15eDBAUn1BmM4XcZZ1V8XeA7jQtr9co",
  "key37": "3VnArLe7U58RzmJNu6mqhYSso96Nnr9TNXGxUp6FZFuc71HhudSceuLZpzKKnJxQU5Poog5vVXQNkjAQXUoqc1ZL",
  "key38": "jNDGKz3vEQrR4qMTER38hnsakKmjZ5YKr3BHWdcRteAz582ys8CPC6Zp3WRh2f7QhvdihSj6eTAbQKLZVWz1BJA",
  "key39": "479k8dimvUHgMn5THbttQwdNZMthLYhv5FTHbeeYLtKgsQ5zRmLsD9SG1ab1kHEFnMrsbidaMuNYZvoGNu78x5dd",
  "key40": "5EECumLXNvWqhyEbs2Kj34hYnR5oPNSvV1W1QmCit3LNCLJEvbxMhM5ZpRiHHqXR1t12z7q4rRVj3edPUpDQTPkL",
  "key41": "294Pnf8fSwa2FJUzXfGB9DyxfLY91ZkwCpMoQmSfsgEvHNZtoC65dJ57FNTCjKMTXwRUg7fcrVcS2CM24pwLMFUp",
  "key42": "2X1dxsbP6ygVG6cfFNZ9VNBqV2o83ewK4GzCuG7oZGWsy4o5J9c34D32ZyCVyjpWfmJMJZJ8FpfUcfwupHFdrEMM",
  "key43": "QPLDVkF6wrHiK6pYieNfkL87PirGoTh6wm9hKvawZ3fww8oAGQQJHdRt6YnEGN3ynmDDskbGz3LT35Sn7ZBNfW5"
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
