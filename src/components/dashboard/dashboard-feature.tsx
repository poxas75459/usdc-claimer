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
    "5kEk89YKdDpmXrCAfFdGyUprJzpqeNcezNZ4PT8DuJBpACFjN6zkvMhmHvB6HWLJsMyUKMRatcgLmfF3NoLtFuMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47waKkfmdHYVeqSSAhuAfxG9fgFV8ScnaNTmbi8vtXWf9bwKhzHLrBJFxgKPD3WAHv9L4FPa5mByZvwE2jCbwgAX",
  "key1": "5BPoAeX4XG676tvPqNVnHnySCaePYpNfQozzwY86JwjTZmDmJByXdi1YLY6f2qRL2iw3NDKtAVKYFYEE1Jqe7bmj",
  "key2": "5kDWiECp1Nht8c8Wk9Zb1eVPhBqVzzvmynfHnDEWcDjSsKKKPuBDsDjgzKzHHdQSigsdcbURPodNWKNTSWkYScU3",
  "key3": "2GogmDsS1PGKBr5Hod9DNmvAK5JCqL7oTKmA2bMMRdXMfyubMpsnPuJRhmHpzdLN52R562XBvNRfNS45bT6eyzrQ",
  "key4": "2PU2Yf5oqvxa5uoYjaQQh3dXgYt1K9Jfi5agegaG2PNR3KdvG42AEbtyLWpTCAN5yBuhkZPz1bkGWGGSobYcAV6",
  "key5": "z8HUveHHeBvSrDvoKgeeFW6Ea6MaNHCCVpCLLDBNWaqkKNtyXnp7YhkDXcan1hgFUjt8a8N82gSBPRdA3BgxUJT",
  "key6": "pyK5de5Bq39mN51KuShui1YhCz7y5dHpAhnYifCv81m93i92wx9ZtguUjuPjyvumbhFeCviuMBx8GXe9gAqyTrL",
  "key7": "2TFLsspByq1NV9ZSa9YmS2r89C7enryoiGhP71fmCKRw7cNX3uV9FV958cDjVSV3zMM9UxaTDLCBHuHnAHe3ofbG",
  "key8": "5Km5aLFuUvfAb8ZCZAgCUrefUywdRW2XsdpL18cWidSZgEJx3ERauTVuy3dADHHFE2FZ8hVrR3y7aJFuejPv3e6m",
  "key9": "rgBTFGrA8efVPzqnaVichkSRnudg6dBPMTh3hsHoWwGURDdYUzr1UhS1f1UByYQ54anxvZ5FG7XxtwLtDErbMTY",
  "key10": "66H2SNuceGGYkfNQVJosjumEb9YaqyEhamTAHR7Kty1wJPQLgpoFie3MZiTYaQD6neXoe3r47G1G3UokSh2fBZbs",
  "key11": "4fmhH4PtSqg3YYa5DMMLVyw4U4YFGYPdupHSEYgiAfSoX2QTsMaDKGCJ9WYdQ4BBGSeovWepsK6Qmmg5C5D8g65p",
  "key12": "5Kv2LVN8WqaVNNxJwMbLt2GZbLmtfogw1WTHH8Xk8SJhmvvFq72VhNxGmikiunL4rf38risr2DBL2z2Ej2eHQhsb",
  "key13": "2AnGrZDvMLeHNHRF6CsU7N81aUgEeNNVnUMbutyBR1R2bzrkWBwAAkG99MKquj7tf1rDLBY7cQXk9wRfyrtU77CH",
  "key14": "4sT5NE5ouVyZ3G52qiSzj2S32v7EWzYssU5TgCivjM8shHvCHHgAUydoBSj3tXxPtgxsugkgHHn5wnJXgaLmskZB",
  "key15": "YSYq4sUSoBXCF8DXNR5RTmTKxVWyp57AuuBJ33szoETcjZmXWpbB2Lm55wZLf9DPbBarHqU9yPja3zCVbAnndfp",
  "key16": "36XvUNKXL3DjJ9WqwkKE6xMQc6x5xGRnyP6kPGshL1KArmfgFQtnCG53Ho83NLgAdBfLVHjiTYpZdZoPxThk7tdS",
  "key17": "3dt3eGKNbQcRrEgMeD4cdqbwCk6cKvfJjrVP1KYnP4hv2vm9D9uiB1rCcHLX5zBzzMpSU4PqG43gYkoeNCifsRjj",
  "key18": "3TzPxPACmFcM6H48xf6u8Jzuq1Ebqh2MAwazpoXn26zoMEUsXwQu9TxFXYTBN9YzZHu7BhSBtj6QvGLLmsrNpp6w",
  "key19": "5QZVR7aYo5CKe2wu446Jq3vxDAKVRQNFA7D921VMZ2mgBK6WCfmBxPuXZBNQGqK2fNqYokCKfHuMBk5hMKUmBcd2",
  "key20": "63fZ4Ag4nfBbqYGH5vJ56CFm382K1Lav3NMahK2YgoETnnsh2Rz8GfT53JULaNEhj5ZmWedaVWa6aA9SXXR8Sjk2",
  "key21": "44yP1giqxPWBjmvZCLLCR8dVYqpQLTtcQtnHohGRmiczfQ7SLj8iPTRJQbL6Eyw4p3BPSpb7LUh938HNmDnAGccV",
  "key22": "3HBYyd5cohBFi7GwYURDvCtmp8mVswJNrxViFmd89aMs7zjfom1V8PuQRchTQSNUxcHDkiCNfSMkiUUDueTGgxuB",
  "key23": "3Nvfqm5jvTdUX2RwbtkpZxNEPukt9LesK5EWVUMiyas1Amzz9LeuarAa2MA3zfx842JPs4HYdxLjRnGTQRrtEE4A",
  "key24": "5d2kjFpj7753Vo9kxJ2QvWNmnVwP1g29mzgsiCEdXL5tfFNBhtEcY1qA3fBNJCJNFGyqGxTiRyFYGCJ4yrU7aqoy",
  "key25": "2YB5JxX4SJLkNEHmo8iAn25ckNVey3545U3rT1aJyctCC6MZyThFrruGGxh5rsLrsx74oaiXZJqQTpsGU3Dp5K47",
  "key26": "5BVpFLgRwV8yjR4JxaNJK6o1Bh3tvD7Nhdw2rfBy2ShJpdezwydBH7FTMMpSVTsBZFqmXPgHMZBhsjUamxR4HufP",
  "key27": "5s8bHsXDiSiTm6ci6Gv9HwdkQjHgU981Ywxk7G2sCm3VgRQxZeZsNH5J77cCrj6DtZnJMFcemDpQXKS5M3sp6YsH",
  "key28": "35j9CG3zW78MKF3GKdrzVNbS3iVp4PuFSvFaG2fWKo8qrmrZtGDTkXxR8p92752Qsaos2XVW5kqbAWGvkACPbZk2",
  "key29": "5jnYJAhun6TpyaqwerdhoftkDumo3B986SSJxAowR8NMsQ3iCLoEM1CBwgERGWhqyK2keSzQ9cQ2HRQBMfPwBi3b",
  "key30": "4376BYndKRes1CvY18KHrNyRyxQb1fkTPoAejFnTQiYae2ivTXV2YqQ9HnL8xAzvEmRWL5Bmsbxi7UWyzbajsD5Q",
  "key31": "5jfHMxWumxZQ6a2i4D5EVyK9vGJosn3E6S52ScdYQqrQmp8YuNXbn7vokhb6ukG8zvNbf7BVQzEVkjx1ceGLnKrs",
  "key32": "583XYY4UMwfbb9a9LVCo1F9i1MRVhVSmECzqthQC4mzu8wWaBD36R75M11X371YecauovXffLaLDbwfZkorvjE6X",
  "key33": "3ZFXEPGafvPZ98sxpo6RMYZ2pyVqvhDhjmHCDhJ7VqNEzm1diXFio4UcD9nBhVz7CjpHEbjC3Z9CL1EoEoLFNoXD",
  "key34": "55DrdWKLKPRdSBLSdm46LNAmqBZH2dh7LyKJjNj2c7E4iRyHMqoHVXnY6exGY2ZzbYnU9iy8LkFgXfUb9Lf23u1b",
  "key35": "3LryLvHnVDo2qmobfjqdEiCJc8KWsLH6iUZmpsLN5fpZLYdUuRsecg8kHPxg8wkP8PgbCYrG9Z8Byp8WrqyrJfZb",
  "key36": "3hDaoB1dGhQpcskDz3eW1XtCvmsZQGiU8egukaicooiYhYXfjh9r6zav43tR23Cmbxrm8U93ZhLSGHCJcFYaJe7U",
  "key37": "3au1zqXKT3iepm9pCEd2CXN74gGe3sdojUgqgunRUcimSDtoxFCqqfqePDyCN5A6XPShaeAVpdw1qXpNwYPVXkfe",
  "key38": "XysefSqjmw28sVYpfSg6a6GkNHqcimZ9tWCaFfFoZJkGiLT9er3goV7sDASJpQJjcgd31sskuVSvt4ZEqmNb7Aa",
  "key39": "VfoJGLeRdv4gzLC6GPQVvm3CwJQKwFfhDrNyxLCPhhiiCAnHRZQrnRBNfaCLNFCK55sitQd6Di178bJp8ijiFf9",
  "key40": "5B67ZCSMUwWG5GMEFcHe2NXkXjLU3Dxf1Lv9yajxiU6pQ5Trkxr8t8Ke4zStYX1RVsndRikBvMSnKWxXnh6jKgNY",
  "key41": "d4HzPmLp8Ms375L3zfSdeg8YNcYJnEjWpzjuomNShEDPTPXZpFE4gJoKgtFSVKyyXhgvJcqPiCzSkE7u2eN8jZo"
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
