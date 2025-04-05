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
    "2Lw4UBGH4dMtczbXRGX9H5vfTUcR2Bnc4bPmT3tvvdcbd2xJTLTdFxTk2Asqgf2yiSoRnC7Pc2C6UqTJTHCeMFHE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KJC8Wnm7dxsbxbLmXnHmufnDHDGGazzPU2RZNwPeaKmvM4YGPth6t5z1DuXv1XsYg1UxaQEq4DmTvgAPxcDMG1A",
  "key1": "S9XMgEVTw6nnztc2WRN3TqPximakTo3LD1TfyEhoxkacs9F5TpnRKJfQmhTUns1c41Ad1hXpG2WjG67u6ErLTzb",
  "key2": "3EVjLZHeUT1jeZvtdXsdhKkpueP7FXU9bhmjQhqW777GmJJutZC3UE8hxsLz5pM58ed5vvnL8BvAwyq2DyzrJ7ZA",
  "key3": "3aTjEJkDnBgpqU9RrHQ4abtyuh4NxmP9yjfP7EChtFu23EE47uX2UH3CR9U2oGdbaidDDwHJms9QGx2KAZ6nzdkE",
  "key4": "3uK7VSkxp9B622vUTwkW8XZxsKgkj33qzpBuxtPRDcfmHCkiJGnqtoF82GktMmwpQpNdxg7zEdeyEspuTGNKnVHJ",
  "key5": "2NNTa2C3G6qtw3qEqTqjnRiVPbskQYo5F99BxoAiVUVnEQnEDLL8LtW3f81XbiM3uRR2chHg9mcwCVZa8zzbFDTe",
  "key6": "2gGyj1adhCnaNxqTgu5rCyX89BKVXXJi7usKSyzncUHb58MS7dUabawvEGJAfkRNPieJZGqVpp97Dd5EqrPjjKcz",
  "key7": "5uSQwNr16JFL2jYVvST34P5LMpJA9HPrEXDsRQqXuumy95gRS7fwf64UVxW7gVbjAgek6abvUnpbVqJmJmTKrFmB",
  "key8": "4sBr5KswPQYnfbBmbR6x8JUx5LrjjFestbt9SM5yC21wiCcttfAmdyEcZKGdzCLPuk7h5AB6FAhoZebPeEaMSxwN",
  "key9": "3n9acoTb3KH4sDHD92U9C69WhLsTZfZA2hvMcmXby1rCyQEDUW38BWj85f9TDVY9xcvwrWfoHdfCjHafBbGWqgsp",
  "key10": "4dJLj5NnAA3n7vyh8beQqLowJp6wGXYm2hHYMay66fq472T92e7BBvc1Hr8pLocysEqsaSNTSyaAFTTKQJsSNqcT",
  "key11": "5LeLLD2yoFnphPGtnkJjwfASTmniBwj8tp6zLpBnYJci5oBWAUwfKLfuzmuuM8MUhdSsDQ79qdj4vTDXthSpv7NS",
  "key12": "49FeEaqudNKK98ViQ8MxdvJBVurx6hCFxV4o6qz8fFBNXXH4ZBhDx3hhcc4ApiGHcXDtCQLrPK2vtM7QV9J7weWY",
  "key13": "3TeTpnuivz8LBW2sLaaPSfLDWZcLisgtMqA33RXeNCpY5hW2umh35v5EtgrxPfu8zYt2XcGB4QaPMtt4uqA4jxDG",
  "key14": "4Ldq5d5tSSVfuH9iYVoAFwhYmntWSYzFgzr6BU6ZmJ1KGFwtm2qnKNFyHg42hnNcX9crjZ8HLn1cdzDxkrSNNdSG",
  "key15": "55w6Yiit38kynMVGAEFbAXAYzuVvyvueox5k2A6qTArCGxQhxJaEdSB53gCQoPEUaHHDCiDusDJXaAUZ53dPsPAg",
  "key16": "52FJRPXXfia8jRAp9tPyvY5yx3WKZLM3QVrJjdz5ETdGiCKpYwNKeQGUMMY8XZfC6rCi1P1sM1RrAkeELTTtJGqi",
  "key17": "41Q3sCKh47Ls9q7rzLH45fKpchDhYSebTwEtjpG9nQbcfmBaPGwQcWWGG8DMCMsajugP4RN55sKC1x8qrUTw4zpL",
  "key18": "2sWiE1Rk5wwUV1Br54TKhDSH8eKKia1J38jAtvSa92zqHtwZAFrD4Wd8MeBqrN5VafZzTmsWrWjjfkyjfpe67es9",
  "key19": "3NrZwiyLQEmT2Gtq8wadQrrngEg2YZrkRP4JfozmBQdY6mxZx43fXSkPPvUzGHoL3YNaPfjJR1VHCcvG6j5BcSjG",
  "key20": "28Pi9HwPrkjSbaavXJUMxtvoHJh2ngbDp6TaxUMbPP7rA78ZceeULFymBt9VpySsHdjKEhFt9YKwU5EzMTatQySr",
  "key21": "5grJH4auCDqvTM4eSFM2mCkddiiLoNDnsU19J26vbzSdpHasb35KnBBXSMFbP4Cdg4kwbG8i9w9RAeEwSXEjnFiZ",
  "key22": "5rFWGrGnDbAoa5WtBSwxLxfz5p9ftL3N3Hgf7xbYwA8iKscZLAyjiYrYDKvLY8PrPjGA8rzhika74mvXQj7emvPP",
  "key23": "4tZZRNABEHbpMpYCMerAKNec3bdM3jkn685xfSsBeghrneVQZ84JCxkzkLQgZoVZfjffZXbQQhxJxrSBRDcujN9T",
  "key24": "2tAjwNjR48NeyDLS8q29zDmj2vWDcjRa4ePn5qXXSF5t6AsPa8D2WauoLqt4GVjbHS9X9Cna4Zbfxza5LjGvUwsa",
  "key25": "4uUB17Hjrz1CY6zcAiYJCM32zdKD4D5GJ4ATig3vqvrHrNUU2W2maj91X9GDWJB2mUW1M9FPbBQPMfFHVU5NRhu8",
  "key26": "5ATYU3rcVKK4pk4Ra9S3LMUzyG54FmTBrFnZVtwNYPa5NvwXZkSoNnnRt2y32cHHMEPFt4AqofrBNzWReM4k7nb",
  "key27": "mvRhHpXoBz1SPrJvKL4EFrhLwm3STXp8B5JecnVMBLMUotsoxDQRrMCt91t3Vjz7UABoUKZ2i4C7qUNgNNG2Qcp",
  "key28": "rTB89WzurzJVBUcxMRT6rW8VB3vqvF6SueRKfGDc5VKrqR1ewhv4QJq1PbfCVDgc48tjDSv2Wbpd6yjDcHLNK94",
  "key29": "3STStpfAxf2juwr31iFh5rDFk2npJp7hzuNdr4cMurThmw75BBdKrEMBU5XEVqcqV1VrRCpHpr5q5BWierwUhA63",
  "key30": "5TzsU1tqqDzpvWaWpJPPuYXorSQaygvMcH8a2DL2eeU14gnKKKCvSZSYAyt64Mzj57CfZpzAHamM9nPbMNNfJzeb",
  "key31": "KwmdnLvpUWYhXpanT5BM2bkZ4jNiWXu9Scwt4uUvCRSxcUUwLWgtwQkon8GPuqqG6EsDNpmCqHLF3MefxVgzWnC",
  "key32": "2LbLbC7PKwZKFsY9WHc5U2r7KXY4hkWtKdFHXdbC2U58CBNtUyXL9inwBiBJUkpjjLk8U8GphiiWahuPkfqaZ782",
  "key33": "3G1ZQG3Y3M1mp4HdBavZJrPDgPRNq9sWfffogJqVm1Wy6zAyRTTSsivJdKYJEg4HWmFZVrJMrUFVExyeJLGxkLua",
  "key34": "4LvQR2SsJeepYTVn2NXirDKVpafjDUtDAqv6rNGPy7uYkfV7pX3JnXLFLV6Ebuocu9R2vcPv1fYyJGGEwwbF5e5r",
  "key35": "3gUjC5huWHhyDjMQ5kh3SqKWwRPjs2FGB3jroPtGTtpvSHqhdwNoUZgn1WGeRZupYc7gXReGdxeZSFL8rDj6wDSz",
  "key36": "5RNqoSJGmBpMoumwdpRv3rsvi61MbCHw8Pj6wzhTLk5kKKcJpyq54aUxpewxFJvH3Edy637C1e6Sakskh2opNB1h",
  "key37": "5eJTVjB5BdqnUgmP3d9ZUHZYZZKNzM6ysWPfbagjb1aTkkG1tWrHoQZ4k9WTqqxvpEAYqqoLWhpcftChknmiJQas",
  "key38": "42e42r5WLxar1fT2PKkufHLiYJTfYLT8rGvERHspzzchHreEY5o6ihLhgKYXgjYDBDfY5eEC87GEuKEtvJDsCEFj",
  "key39": "4ocZuZHkmxfFsC7kFxH9YT2uYUXAoNFwWRccg3MVW4BpJ7KAcYER6vHtvATjSVDVimn5mhE6z6s4UX569JqHHQm5",
  "key40": "3R343LZt2qPNURwQibqc7XsdFDyrn88CXS6sQBJPCQNqAAGteHLiKjxJXj8Fo5cdSxdz5EakxT79re7FwwpHph6C",
  "key41": "4vKV9FnRgaAQz2gPVfvyN7CA2Cz65ickGQtzshVpWxmDw284K5KmSWauHL1J2oXdREXzSDDqZFtSijK5hAcbdTCs",
  "key42": "5WmJ5NKUvMvszsLZqCdoo7TtsDMDd5NmeSXHMWpDJ1yswU9D9MByw4eED1qj9CLS1DmHsUtha12TdvKo6XsBViZM",
  "key43": "4MwALi2bHtpkLYBNEYjbhjC3nAuSqmwuGyML8o9bDD9XdF6UmbttYXfcqxM5KyK5ZtzwpqjVkPwPS6MeevSUq8w2",
  "key44": "4Fgo1eEUVKmCKcgKkuj9rDfWmrSjcjc5V5GXT1xHyt2iFkhTysqiXz6B2qaCeNaghKq1F5HWmNVYFGZ89mauTFGP",
  "key45": "4ipvGDRQvzHuUZYQu9M6tvNzwHsH93KevxXD6BJvG4r7hBM8pXnLMsfZjiM6bdk3kuR8cFVwW1yLKd1igJsKmEMJ",
  "key46": "FCRcZnpiYowwU2KmTK9ZowAc2TgAUHuBRDXVWZngRShZDKWUWWpcafLN2vzQKHYxsVczbybHi48iyXv5TDMULJf"
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
