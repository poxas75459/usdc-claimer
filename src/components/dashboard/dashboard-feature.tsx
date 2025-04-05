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
    "2X8KipNdatrN5gTs1Dr3kzpK69rgoboMwfsaGGhFS7kk9Wxz8zfkzAZHTE5987kC9ZYhu9ran7o99VMP8V93jxre"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cYKeFgnG2yC815qwrs5PmMvqBgZXNDtETNDnbtqsD5mZs8MRYFqWRtDrmWUzaWThc5sdSf7vyzbfgWfcz7Vn5EA",
  "key1": "6YAmnVFBKGwGiocSw6k2vZafPQz2sJHzPGougHPgrTusVrmigxq52SqG3wjEfHUBcqq6P45eB74iUBUEUFuY9Cd",
  "key2": "4JpxEnRciP4LQngYBMmQUkHZAG3febYy9mi1UmF6Wb1Uubt9bpaiVpL281MvcrQKKf8wio8tfkxccmxnnK7UJNeV",
  "key3": "4ovCcisdSZt7BFbQMbvL23iMXVoVF5Gm9A1ZQFnHwU331mzf8TXxrwJD3skNVKrQ3KYSngkFnH4qEbCPgG6XA4QL",
  "key4": "3eKANpN2Aarq4ti5CDNinwEoaZpekygi6sqeyNVztQLUoCbhZ8dWtaspXYNGjcuznUfhMUzBfkaPxGZbTfMUCbCK",
  "key5": "Cm5A4qvqKH3YMAdSVs1A64k9sCVLGXBJ9R6APcicPeDPAPkbwmJ9CHrPiLaL2krUC4kmhfqNyAwFP2hamP89RZK",
  "key6": "Uw9gUjx4MBR4Lw3ER8mqUaj2JpmszWqQRunvCQ7Di1aG8D8pG5fwsNdNdX9THSzG4NSbiDj7NBstDiaYHFPujxo",
  "key7": "dfaT6KBrbfxXZKy8w8KnD1QAMQzUwDzcWR4oo6XeAw5rt7omTm4wyiDp8xJruVqkWC9LtF33XSkMUmWCv1iZbsa",
  "key8": "Yv5VNcG8xf9g4CtSzMXzKRnjv76k9uXpnrzuputi2PgNZHcT1UpCtEz7h3PAyLZ82PVPJQGw8M5RaUw2SJ5zg8f",
  "key9": "41vSAKPQWt5iCEc2idtq1ZbLNL8e1yby118xgWwFTVGHvWkBp5CJ63q66H9nfJXe291YhyvJycuVaPa2cxyy8Je9",
  "key10": "5T8W5iP3CnQ4o1ytx8h8vtDjJEMkdJd3N8f6s5GXc7guedFDCeoC26Ab7aHLq41xAmYK42DMRbVUapmJr3mmwjjH",
  "key11": "5AFy1t1ujc7cBCLcNjY7W19GWEFGtiTPZ54eWcWhcKodKAwRu61JGwm9htTSdFndTiMdSMYjehoTvz4iLDshZtvJ",
  "key12": "61k9yxqUAXRQFgmfAST7HJMZTv9yNyL4gJZSJgoFVeXm9AbYvkRrQPycC5pXtMvJqtHCSC9zz5PPtdGVanzifzc",
  "key13": "4oHmBfr2MdU9qVQGQ8zSSYs26M8ziC1246r4k8n22iXE2YL7hXEnoH6QnTtMjEYGtN68X1BbgTW3WMtATVuU1qYd",
  "key14": "4akb1ipCykvRd2RV9BUWWUXcxs9ap79gNzB3XE2NZqv3xuGVfVoGr4NQeVcN2xQwaBNXYwAnSYduBLQMNr7fbotp",
  "key15": "2DwMDbVedA2KqXAcuZJuXg6UU67vni31MZ3Py8sjN2ywYqavnHkUxFEioQ6ZYDoFs67BSCU7eCxyC2b3GxpkaXDT",
  "key16": "7yT2p6ZbqBCp6gXLbhQdGTNNmt2ZoNbRLm61YEzRumm1BP2755pDz1B5oWjXiqhq15MxwDkUubCxxxNUdSXNWsn",
  "key17": "61tcGUVzYip3v3vpnjV3HMpMJnsMAM9cJpvc6s69Gun8XoSubcCnFLMrMA9D1Bx6TReCcMKrcvfL2PxL7xtdXik",
  "key18": "652Hsm1A2q6MAZFkMgaX5vbxvjs312tnHtcTcQDWzrGFpuTWLsv3A4abCA1u8Ln86dgjVbcBy2bx2BB66yMkZmCK",
  "key19": "2h5f2yG6u7CBVyzD2k1DqNuy2Z4jitox2E2hXdQEXSdkuLfzBdNgyL4H3Xr8N76HCA1DJ7VEC688RGqaH9otuEBj",
  "key20": "3BkQ5VFPpK2qc6w8ifis8WyBr3bDsNUpTRoLdcwodjFu6bis2FqDff7Fg7s54A2sxzTAWioK23g4Gbs8ZeQVtKar",
  "key21": "2MnWZxbHtxJTp47aPgFUUvxPEa8YsGMNtUTXL6FnycgqjErFfLiUZE9UUAAwHFny4Cbv4CKMPqpCeQPDLrdUQbtV",
  "key22": "3UJhMTzBVefkPdYetePnKr38mwNCt8KWp9fEiBB2VQHTMZq5tfPWAf6sqPwFVDxJavuisbxqFjbentpGnGBHv99",
  "key23": "65uf1uGBqcMid1arwWEj5BdjpWBHAyg1seARTT7jL7BU3Se38DRtmqoM38RgkoscJQbp84gBGX8Th9KjF5GnaKWM",
  "key24": "3AtfsCvvAAFTvXiZZNYbxPwisE8L5ZbgdmP6Pyghno1VmLGw2Zq19i7CkeXeZenTDUq5VrGXswSQ3de7NdjvqXqf",
  "key25": "4e2rt8zwGuHfKgeRVPLwU5ymmdHJNdTJcrWG8GDGDHHaSP7nKEG327HamEtjMJrxedtySLU9XooLxXMcoQkgB1My",
  "key26": "Wh7AwCzhMzpPdSzwNEuLvP3HYPbJJ4rMMLS3Ys8eLS9ntGB2MDo2XBuKZTeLPXFRoA3E8Si92qgXpdzfjSFSr1t",
  "key27": "2YJc95AQbx5Mn4MjwHgvW7FNRY5PWvE8qdrxiUtPX4Lm2HaQzeeX8ynppfdovrTYvtYSkaoktNQtBV2or65DVDKn",
  "key28": "4H7kZRKEPFmegZAtc35i7JMEqH4xsHSvnjq9ekybS3Sq9m8LwTcvxFp2mHQW2TLS7pBiqB2zoKjfwd1PtaCzMhds",
  "key29": "3ptjyACXdtfpU981bmvYXxQneFygM3UsqYeZkZuSNSyTGQHwRfTqzRsk8jBoRoxroJC7DZD1GGKdWjoJDHVx7KbD",
  "key30": "2skjmro5x8XttUuRa5piTznUZkNcpHMxpMqQwaK418EYnZGqSFbZzrvy6Nq5UfdJ7inDgAy1xrsrETqzqQyase3G",
  "key31": "52Zwu3cZpu8pSev3VUTn4NvHFbRKyk4uuWeq2gocmg1ukmiQDjCVSd3htnJYKCwGZk2AD1vZHZYB9THUX4LiDD9b",
  "key32": "2bq2fZF182cZZzaFW1hzqGSWxv7kbBZWtC7wyfKa5BsavyUZKQUJ5fqMMbkRDD4TMqV1cXkkmgipMK9ZPEEyxaN2"
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
