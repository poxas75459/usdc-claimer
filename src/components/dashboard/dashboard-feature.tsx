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
    "2WxoCmp9JETHficDcC9XiFCoAqnxvRVL4h3DzGuyzXSggaiMEp8kESpN2Xf2TTtE2WsRpUxxPAcR4XvNrJQ5XT43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fLrCLgBNmJ1hK8GQyrumxK49mRDaceb4Y5ZetxwkszB5zfhEhCGKsnd8rTjmQQQhSKZNocs2YJL6HSHLJGhfrbR",
  "key1": "4krTb3M3hgf4HgRhY8daTCMknDspX7UUV7U5L2Ah3CV58zsPfsVMr8bHNUzgztwhNenvbv9dM1hZTGY115Bq2sEA",
  "key2": "2rgh5rNUbU9Fmx1kembFPnPkgxCrhvxeqAkbKHvoTfaiaq1Yy3i6dC5XZhwayEujn6CRDTMBAxRDj3EnQw9h3RDZ",
  "key3": "3Qc8WZCnD2aS7X176nwYBS6HEVTpAE7BDKpQZmy85fXd6QPb8QQ6oofxih63xnSQCvarxyXajCNqd5A2UduBDS1",
  "key4": "tE8DYGx4Q6tanrp2cKCSB94bsfAHLUJd4j3zKWmQr9pQhUuCmCk7XN42rAXHXKAqJK2Xk3FT1RTYFLWA1yqqnjY",
  "key5": "4nf4FPb5rMmbuY1gSomXWgD1wwPUpFnkeBqScCYX3ab4zY3EVhKSfQSbWEQcgDzq9PrsnmW2DuJTJhYQb88mcjxE",
  "key6": "2kUMHQR7yv11j3j8yDfwprbMbWoYXNcPcDaNQZkrA8AXWZWiigdbyrkUGkYJ5FZFzanzx88oewiHZJFScbQkq6oW",
  "key7": "37gDxhSr3ZGutKoVydcEpHj8pjgeFuB3eoTdyjwEjL8DUERHEcjVxorF4kQ19bcNtUpCuUPKM59f385NQDKZLpmP",
  "key8": "3MgKQqVcJNvxSVR3QXct1BdBL8eTamyU1Udv9QqCZEHASiQoWPvVdJz4g3Tctkga7YDhZTK7avS5PsQL2X6sCiPE",
  "key9": "F6ytyPrhfn1Rvz3Gc9RRhJePick7vGE7CvC4sN9P85nNcapqjysPecTHvZQJVnyUmziMgmSDcDSc1TC2DdoVWkG",
  "key10": "55KhrM2Fd3rFjT6Qe4zy585dmHFQgaBrsSkpphin1t4UXqfd5KvyFdwSFj5M3Fh9UMrdg2K8DwTe76218JRMQCeH",
  "key11": "5h4LhftZYDkaBECW4sGFMPFpCeiwKbLnjtApyUwjo61VBN2ALsG7da3gtPY3VkMPJuyK64iQmjbdhhdytvFmPN8H",
  "key12": "45GF5Ah9S8f5f7a1Bvm3DNYBXw3Jy4QqfCRQPx1H6AgxaZ19ybJVW8PuZXw3NQBokmoYMXvmNQmGkBXsemCVM7Ar",
  "key13": "4CSDCpdyhMGYPr6JjgQXArpKygFgeemMqL2Wtf2HhAwPrKFUiFBW1KJFV2QrPXWmtbmuYAW4B7fWHhr7ojJQuRbv",
  "key14": "22BtL6AL4D5A1kCSimmq5eUZAAxkGqMGsvFmjcFgFjM9YPjUxjZspHZ3i3ZYDAmV89zs7ThZj8axpzwfShPStRWx",
  "key15": "57FVKo5hGuPkhSrfkcfWBb1ZCFjyzHexT8PDLnJsvJzm1Zh3U2fuwrWWG41NpW5DXaKDMMEzyTbFSjFECC9K9yKS",
  "key16": "42NNDJmgTvuMBPChHv4q6KEA6DJuk5zmSz8t9NH3LKg7pS1GNdQpgabc6ncPgJB6x7B673J7urT5kMT6Wnp6BaXW",
  "key17": "3spoKLnk7RR9fwGKsJBx3DW3CuixaSvunMY8VQCu2AZq6kqs1aWMuCjtSXZ44VFeE9EuXeiQZz1jTRzmsieFthYm",
  "key18": "4if846NTWLEXo4ShkFKDFsjS4XR2RvkHoK5DojLho74yi5entdGLKdsNJjgvT2wmK77Ex1MmCerEbEq3Wvu84xVY",
  "key19": "4Hzor6JXmxLJY3JL9Y3X51Pfy7U8WLX6MvsQCiH4BtnPoyTcuEv3R9WUCrb4JzXRjJiv7xTn2AoN1EV4wphqQ8MA",
  "key20": "3gYTvEAeUDFPBDUSQ3PPaTsnB8Km3NeocDQ6eg7cW8uss14kNoXQALj7SUdAXaFcno7ycjyAjtXfTeTdFoVDXZxp",
  "key21": "2Zwg8YNEG15ExHSkijU7Ez3YqYW5hZfcrUsZLr3m5GVKLFGjH3C4JPBReJsd7M72wx7PGFaefcm1YS2ARAyypfMr",
  "key22": "5kSii4amT9x4mwuXTZWFNV4tZy3qTPVnGz71smFEUd9oNp9HePHbmbncGA4L59iLd6NhjUHJZfQArEhKXN8zPWrK",
  "key23": "2aRPDey9TtvEgQuufbhr8tABMXos778ArZgjVxexisiKuLtp3afbaWQFixsjmWDbg9uCwpiLF2pxuVjy4ffxE4HZ",
  "key24": "3A6PYV1xDx5BXTefjNvAM9oe7rH3VP98mZujpZzgXQD1C5AQzkvpFo2c341c4dmgaKH2mFCiKm8Gt5Uq8hQ5Ci9c",
  "key25": "5u2fWwycrycqGzZ8uu8EXMirPSRdGmoJ9r8iiv5dwVq543GDrmLrLLopXBD36fuS1T2xgokZmdAaNJ53BW2MFivV",
  "key26": "3nCkEM1sqM4HRemhDq5Uy3SbufVNxTcpfLD58dCoivfvno4otyf2gRdXTpTzMPMKpq52Egy1E46v2LsDEzpT7Hvg",
  "key27": "3MBV36q1WCMcwLmAcZe21VsXmhxv4QSQktuTDVatNZqv7A3aCwyTNYHpQdyKnAtWgdrhGRvfT9xkfssTV3zHdbX9",
  "key28": "2ha3LPZnAYyuHj7Tp7JMbn5ZpwjZUETskv8yWVrEoFczLHacyJ1546gQFKdPcXpF9cKDVuDhAGVeK4eHDC8ntayx",
  "key29": "DmreNKtZQBeMg93MwaKWKfLcNykVWjAu7fN47cVPjet9Hq9Tc9Xm14hpmsnynXRJ9RmS9QLZLfuQQyfXs6G3BBG",
  "key30": "56ky3ghGsUxJKGQY9p3qBwveK7fns4NmYy3phGHsrcfVAwhTrn5b3B7XLcrcUqVuLduUVHmCBfvUarZT4SUrRxcU",
  "key31": "415guYVwPFAmZMfBnSJZtKpq7ShF2d5P7Zkr1qVZ6i87Y3bmk1C91tmN1xxNv9RyJZAu7wtswnGXnShvLDshtbJ2",
  "key32": "4aMPS6eZ1VToz9JewbVFS8rhjjmwpAbiLNTtHVhuzp2ee4bAgVTrWm49W59SuYsBfz7KhkdbT7etFaNfevo2ZjL3",
  "key33": "4qhV9NZ1WugMRr3K67dqZDixpzHayQPVBjxKQQuEwx2ms5qxxKU4Nn5R4DWQomcRZewdSmyupLsdNa49xd3w6WmY",
  "key34": "59SK5g6jrdh4GZGUP3VU7zvQWMc6347U3zTK5o6a76D8YswceMAp92fwUQp75GGtd6cq2nPjBVKpu7D8fYsYTzkw",
  "key35": "2BepjTdFaNFV17BsjbDwKCQZ5NueAfxrEuZghdduurL7AVCrzmA5B5PEkYmuAKKf6UYS2pxdEYs5eBsTpEt4xViT",
  "key36": "1289fYpECi3pEoAZ8xvrzSt6UpQhRADa6nuWEe1GkJGSqTrGNAKCUAqgDCvg5eFZn4cWvoF1qnEiZjTBBTq9wwQy",
  "key37": "435BH4ob8tPLQiJQHL5EMPw5o1yajnBGR4huWe3e35TcBKJUdwuvxW56d7idgAkDHPnwScXkXmiwmAPUg1QVRv8x",
  "key38": "3prmamuyAb72EjfdXw3yhQkf7B2fe6ur9mUAYb65RBEKTMKgDbfgRLmQ8NuFCA4asoJ1vyuYXSYtZkfsaceSxKs2",
  "key39": "4BokN6ZwZqsen5xETek5kScewtCwcQP9TK9gLLai3u2WDaHZLnvY19ND97f9r4gmZC5yQpba4eVhcJpmWN5qhKVb",
  "key40": "UxHwPD7Svftaa2UHK3vUbyGxCp33UH64eMpYnCD5rWgUvYfYLKWFDWJxeFtN2yuCZLYMSZF8bx1qAMAiqTeACDw",
  "key41": "5bos7fUypowUJGzYN2K2vasNBrA515qnbsUPFGzN8JYshqQF7j9S98bL6y4SCMPFFKMFLpjxmnRXR7WSBgKTvsvw",
  "key42": "3GS5gvyA9Lx8HhE25xHQv3ij7qtc69GftcCh7iYqbnoTxW9EwzKuEKATdASEdt475aud3mQDr15RE3jCVdf3Fv5p",
  "key43": "aZKP87mMngMQeqTyKLYdT3GhhzchmNvFQNK47oEVinWJVjnP9nvkSBmX6sBrEsne6xN3fcQ2HDQezbVUngc78HQ",
  "key44": "2Gg6Gghy6EjCPWEJGgASEhkNkQyxcUp3UUGqExxwFK3GfYv94BduxaGK3PLuPLBvir3WKQ82KPbetirnDWqeJxN7",
  "key45": "5jPCou93Zc4bYKmvfPrHuSX4RGfCHyaknqsoWuU8VdLByWiSHRfsLiQTKirT4f7GNU7oEipjpT2qFciP45Yy1D9V",
  "key46": "2STwhhrQpRBugKM5mNNCLbWpmHEuHVY7D3VCuzn1xempWeS3sSy1QwHrZoNxJJz5xtFVvKaJepdK6TgZNgB6ansC",
  "key47": "5rLavrUWMaorCwEvZufgnEsWe2vKNLD35uXS58maUe5mSiC9gVcZtbp4m8cnvQYVxZAdazNYNFZqQkc8b72nUYaC",
  "key48": "4HxMmJTwy65cCo4Aa6u5cnKKfoDmKM1MvUA65EeKnudyhUuY8XbevzvDJPds7XJfR84vbGLW3gnaFbdBmnGb9Zpw",
  "key49": "2dvaH6RK39qj72iEsJkVb9VgtvSVHffoVsUqJb3gn73NrHokdLCeAZMfoAvFNXa7TVNdmrzC4gCAh5W2d83y51Zp"
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
