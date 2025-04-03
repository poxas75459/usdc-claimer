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
    "2nsarKPC1kvkPHpopQ4R41C9KBbx2tKeAovaEoQWcMKG2JmbzFPZ7FyyNzGomq334CrCrY2wJmViRczqL33qg5nD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ue1pNneW9UR2eNinsFnjScBZawJNKNJAfCvQkPLE4b1qtcD8ddMCkjowcq3TzKLa7mWNhijoLEyognrigvSSPLV",
  "key1": "2vBcUKfxgGKuSjYE2s2UDxN5Awjkk2SXEVQLjQgFswhUAZQc2ChpC8HhW9e5A5L9Sq2eWZ7QeuQ5Qd3gb9z957f7",
  "key2": "aN7PPYCzFWMUdNm6ZZj54cnyWp9Kqd3udeVYvwG2MfFU4e41nyJeDMgVy5g6GZAk3fAy7CWL3QnEEJCyburFco1",
  "key3": "4312b4jBaomYE9aFGwPRTSi2aDmumVa61yWP8eukV4Uudk1pXBzx2AK7wFdS82BToXzg6Bw7LQuRyGt7Xiqd8nJU",
  "key4": "317dUYt8Zqd7tr8xkVGVvCk4HRBu3G1Qx1hwfBsYFi9MftAhzzxR4o6KL6uYJyv8K311fH9ke8mVRAYqKbh2ryYr",
  "key5": "42tzeUeXGr7UidkH2EGBdbtJTVNBXsj2ZVz5hixAi1ua4uKMVgeffLAkRBrRPrjfdvLvy6tFrXriDJX3RGTCnQq3",
  "key6": "WSkV3Ru7kZ7TfDrij5fwZo315LcrCDLcBaSHE3zMAMDMkPAgAjEv8GuhCF1nbTvgdKKQPvskhYBcabDsZ5YMz9C",
  "key7": "4GyizXMXFwpJ2tJPmgB6pX6SQKzJN3pekJePiZLkEKTZmA4Uz2qEp2iURKjzFuP9fsaCrHY7ecrq4Z5ppbcuTUzx",
  "key8": "2JzSPTC4dHKPRtPTnL2KzKF4oHqNFgTvuh71UVjYvUKc3oqU25SG9xpcbdWChTwfuojqHjXfh3aSGEGXZCp35jLH",
  "key9": "2fuktLN8GTUmAg9kEq7REXN9zAE143iYZhuaPqSP89SnDFPSPUfugfLMvAG4vXhu5UaTpb2Uat3Zi4AvoUfpJKCk",
  "key10": "4wd1qFPEZ7T3xzp7BpS3fVqBEBsUXVhCZS7wpthWFNebQFn1Fvc71ieXoWPDEzicUQKuWnhNyXos774kJRjAusuW",
  "key11": "4gncZ4eEunkeBvt4yyhsnBTMD8MtWxBDS8K2Yy2qatAEsFkWgRgjk7LudAodCxW1mctqX5Hf4vxKZdRqMGE95CFz",
  "key12": "4NNJBFYbQZ8y9R8JKoVYtQXGh9qd2HKnpB8vJWg5iRkJeJcakCucRi3aFDRRU3Bqu3j7KiChtap9yUkJDYLP4H4W",
  "key13": "5NU7U3azFpgkopzNjm4g6qS7gMHGUD6r1mQ9Ariv8tQmgswNZGfpwCyxAXyrYvc8qoFSSCbNq4Y3oCiMAEGYqdjc",
  "key14": "2ESfAR6rYwQgRM6Z7htE1eTPmhsu3o1VUuGjw5gMKRmWj32Kvswp1JY1yBp1cV4QgLLrF5Ze2zjwkY6u9tSB7zdf",
  "key15": "22376ezXAfZaGZ7A9t9PeJQ79cg9mj9qJ7RfTKbyEDXgwBSFeQZcweMo5y3qxSUaVgxb3HaKQ8nGuE9W6ZV6dbzg",
  "key16": "4fpGCsAWh1SeSvjWMoBtyj6Vnb9KtF4BwEMK5qSqXXMjFyTCoxpQoeRKsb3kueT3gtVPewMfs3X2Z5gYkwYP9VZT",
  "key17": "3mD3TP8m8L1gTVvKNj3TwLjmg1sKZFqZo8waYyiMwpJKsaMWWUHphZ3ZzHYx2448eMExhHw6WACnCWttryZY7aie",
  "key18": "3q7ae5Dyn6EzCABA6wi2G1cZ6vZbviZhfxrCoeEAuVqRCM7XEjH7wDKB3Jj8xJRdBP817iWkQyWpM3JyeqSNAK3R",
  "key19": "4EWqTuGvZRfCJX9e9fpaHYKsiudb5VPngXHBmgAJd9krTb9T1bTz4k89XYWEsYQN7419dV8D6EZ8XwH41sXzYDnM",
  "key20": "35ExeyhikdpBiMzL1QoZPg4gAZ4dpV2LTAT9VpkhJtVSn9QzQ4CRkNdB3wwEFNDVG5rvXP2c5NowqLEARPbM1DCQ",
  "key21": "1m6oN4LVS7f1eYTuy62d58Nfmm5Vosa2YNoVDiqQU1p38XvS8yrjCBGnQbKrMn4wnJru8JjK7k752FezNHq1c6U",
  "key22": "CrC6pmiZudezJRG9zmURBQy9gpS6MvUiq6zEx4oKg9PyicFSRFCebGpsybVodAjHcTbK46GbntNw5psjJq7mgRx",
  "key23": "58YtLceKvMVR3wEjkHMbWXAkbsKM8Gs4NMxKuHZJtWiYBNp9eMiyNkWYn8hqq5zER38dRxd6ujUaYgoUnrv9rbtT",
  "key24": "28hhRb1wJffFeASrP5QBXTeDhCnG9QuQcbUad3QxvgE1seAXhZbWjWjgAExHoJyXw92a6EbQNVKGSYeJCtL8Dwmf",
  "key25": "WPqFsCNvgNaBb6AbSnVVwDywJT4KJt3ahhj21h6ZNyuneX8XNyq1ykh8trDCCiVBzc7Zp4BxbnEggHdivbyStC7",
  "key26": "3Zrm4JwyEeSUppA2BaZFnyW4EJE3ZuMA6LFhLG6o8M1TBmk6MW8RRd7b5F1VCGRczKCtLSGJw9Fm5QSSi27zv9AV",
  "key27": "8sriN1o5pifzeacssvv3Xpc14d1Ev59M1rR94NEpzURQsbGYtmy2hXNgzvJw3a9Mhoc7ouBSWSADdn5deFB3rDX",
  "key28": "61fHjnn9SRsy6vm3HEwxFxFVK9GB6vR8LWtRbvrJdTyjAuDgWZSXmgeWqKTzyofWDANfZFxmLxPCBe6pT4ScJG5u",
  "key29": "2JCWU8gu8AVdn8RZyk4bhirrALKDzGJDCr2AyL2mAMw9WPfjGWuM1b6wQpxxWuRBsaPevRsZ2pSsJ6euFEGuL2oZ",
  "key30": "JicFjDj2qbvTx2dXvWV5MtCRvxSNRMrqWABYQHQhzUdfWCyWVMDnX2EqSXPpLHXamJvoAAVB7dk3dRPpouMGkdE",
  "key31": "3dJtH6FhyeX5arA79GtmwMVrhngokyi69rMDCCJ9Uspch3fURahGWRfm5EgK2pPZh7wfCNzr7M5FxJ8TEy4U87eA",
  "key32": "3Pd1HAUda1rdscuGc7mgtFh1844XCTuYj3dJzWw4gjNQDFxsBkxGZFbX3MarV593mdscZYk9QsqUcJ3ZFmSq4eEA",
  "key33": "5jfPNo4QoxBVA3Ub8JEMttW9hxNaqE7zBUcK4A6d3CijkiaAJZLu3MbRLM6WvqZ7EiqP1CZSsfkyJW23ycEeDtZM",
  "key34": "2DkR5va1X7gw9ZtUVb5fB6iFyW1u73c79FBfnfD7c8FfU1yCc5P1x7EFnDvsFqJCaFWcQEVK9xPozQHjd6tqyGiw",
  "key35": "2G9Nm96dnUYed88qQC6Ncjkq2C3dGxapFzqFU9NbucG1kKeLhucBbhPc8edTXHkHepVuNPr8jPgfws1YS6jSuoG4",
  "key36": "4AMdYGkYzH3CNVt9RLUMs5WKU3MuEirafaKhzYhKRfSjcD6MLVU8sZiGynC7Thjp5MhMeZ7ZrmKWtG9bBALPHXSr",
  "key37": "yNWLisp6k7LwmeNtddFNxyokMkwsJnt6i5tC1ZFrJinKV2GqwLr4w2KdsqJcfvnMLYuQusRtxcFXKGGoP2c6cDT",
  "key38": "JSoXBBt4DL8BXvWrUL3KF6dhAfdMXhKhzy3x2YcQjeAZsoniJri22TQLp8thfmzTTHUmAgcGdvjccCATnRVdkxG",
  "key39": "3UAUaHqExwXiKrMJgvUiWbx2LamTiMqy1rZ6R3w9ckvhCFPcF9LX5C8MhMVQdrm2gW3A4xyHUS4vQzT4vfgkkCTU"
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
