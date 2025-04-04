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
    "5pDRb5MH1uGgW4FqZmgRV8c9uAgoL6t8aCj947b5n6YDgSEV7cgQqsn1cmSmfACw3EHJH6uQGytHTNn9nxANqNgN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8e8ZjbM6vBSEJ9iPEUtzdXW4DAjEwtP1qd2zgtv5Zep6oS2JtBqyv5QXCbqUwvcJNobFy8E8GU72Z1b8derjqfH",
  "key1": "41XP9GEvEL459AGuAvUj3W5JzjrHKzjExpk4HMo4hjw63TgrkfXod2xTFRjjKagaC5wqNGZGumvPPFbPCPdKPpQh",
  "key2": "3Cqpt5u1rrYtiTfLn1zp7UsT4BbTjM9EGqXZXc8MAqFKZ6uKDLcpbKSLSVTeLukNo2bWm1s9HQY7ZuNzDc1BHdXU",
  "key3": "5xuDdXGueFZY7eRhr1E9dGU2TidBHiw4twZb4wnyoxPfwhwLnXt5wpWfYs4DVvXspVXsef9hfhCLpKCsKbEWE1gw",
  "key4": "3pgV8SSb9ssJhwH1CXobEXJsuhrgmyG8apo2sQGtBvzcFs6y6DAqQhqBgafQ2Pnf4SwDyhDXtJ7qznPpktaLjnYB",
  "key5": "48XmiPZztAFDqmB9oi7m863QYhxggwX2iqH2jmDrqgT2GbaHKebvymsq5ne3ifX9v4WhfH342QFNkGvd6xb8fpJi",
  "key6": "5zcWKaDUqFqKwAiMbVE2oWKietXpK9CfBPkMfCg7xXtaW9VXN8s3RDvGjDxPsKQKq7Zb8d8XKV1eR18dB4FnLALi",
  "key7": "gSnwMwHYnYTWHPqqTaM3VcaemScmDaPufqYinuvRNUfg2WUKtcAUSUfNZSUEs3R7Scd9TJnw5Tv79ECfKwoLiik",
  "key8": "poQqJv8sxX2egBKotPeSosmTeRsqU4iUACejMKKh2DxDu415wcnFpxT1brPZhpapCTJWmVxHUBZDLG671taUrfT",
  "key9": "4JZvQBKKA8p9nScwLG2i1MAD2X3ukJWEdtqdaquva1N4Ep9yzPGC8LvKtKeb3dUPUnb8NDyRCHuxcF84uaN3y5wt",
  "key10": "3dKVJ1qhaGUfUB3AppRaL4zZngV8oTxoKHHNuSBrXb4Zs42CJKAmRNrCNciFf8knuifoGrg3uURw7SsxYPi3VEng",
  "key11": "3GjWXXiqZJ3gyj1WNnVHSZXKoJac8wo5yKFBZfAJAhcZJFTreDpSRP7dDNjqQnh2VtAbdSAwk8PZ4SbDyKDKdtT2",
  "key12": "4AwEcJ3ShFDpVRvY7gS3XCeNtujt7LEZRC4Q3Syw9d4sToSmepBXa9pSeAqGHckSoNZVWanbSzAWpRtGoaaPsFnR",
  "key13": "2T27EpwRsWkXPHFUD5jZR73q5qQjHWQEyEc2jFksk5EyDt43EZEErdb9vKjPWZ2eTvQzTkedUPTag4JS6fWYBwpA",
  "key14": "DLVsADaqXK25Uffib1yR6B2Laba2eHPnKHS32Y7HKXgqge3x9Pez2zFXES2RpagiaisSMFd1sD6rmKxiVh8dvGk",
  "key15": "57mHMhknUE7mVzfVbYzACiFPbxoC44xWqitEvN5rxou5HVog7HvdRcDb3q2uMTcgD2svVkCM2Mg3r8RB42cHiMVS",
  "key16": "6LnnyXAKWvcryAa7ZcHifwLm4sCcNtVdCZYMu1E6aSajoohHpotKRSuYqy3QWae2qaTKqGfGyssqY2crNH1aGQ4",
  "key17": "KueMzbLDuHwGPjMP3NE32trvLxiPh6baN24PNnP1EotvLvWG6fGcMQxjmyWd8ueoTkdeBY9z8mMqWjAPtxGd4jw",
  "key18": "3FmansAvDXP5F7914D2m3osoaK1tJEkVQpvyG2Gi1buzvQe4SVk62oaUzP2odzFR3J6ier6wnKnj74GKxVevBS8B",
  "key19": "5qm72N9FgHCQWS5MfRYw71NjFVE2kLDdFbmUTnWR9beVLSd5sf2SdQrFztnuVCnA2cTTWev7NfLNQMm8fsGcLL4e",
  "key20": "21wbKKTuVgPHnWeTdKoKSNno7GNHChetuimMZXqAAdbarCei1X1yzVLjcyXYHsEs7w2wd9AYnNYjYZwrWTiLuMGz",
  "key21": "5CcDMSpYtHuqKh9G2K16nacjMZE5g5WtkdNvcsW9DseVkti7PcdHhUnWXBqHg6io2F5o2XsmFjHpj9D1MWS3vCyA",
  "key22": "4nsFVffEc917rFcSqx7zPm4wUM2Q4Kdqa4f6ErMGL1n5qxyvTDNj1YoKwevWf7K79EtfwpXwcaVME3RQXJYzmBBv",
  "key23": "3D8ehjdpFpRAGnX91cyaEuzubQMHSP2zXUTatKW4KXF6gVf1q875h2qpfRhuKXZqPoM1VNbvW3BhbutEov41FzPq",
  "key24": "23Wk998kFift81fvVwSE9yYCzAbVtHDN3JemPdRYAE4FV8vCqhAnejBrTaUuVfbmsnqx6nX7ZFzvvnPmsDR74urS",
  "key25": "o41DP9tJWZAJGpnwK8Ha2QsPQPx5QJty5wwivzjc4fZeXoQMZP5nqfvDiqHMz8dd7XFWNDg8YNeQs1CKBGSf268",
  "key26": "tFLABPMWjhFdbf2qvX2mBVuzXWiQrDFmSWDzbgPvdme1e4jwjPhx3yqD8pXPw4SyaCCJZp21Uqk1mSN5AypwEns",
  "key27": "5VAyi8y1deKRdRCgedewm3KP8z34HjL7NyGjSc4HUgPhtg18D5e8bpr7HNxLNWPRkhWq6eoLZQqjEw2mzComEWVL",
  "key28": "2pAPsjdakBtBRZrsMMWZQKJeWQ16LYjPciszNbZRD9z38TiQGuvtyRtzTLKUy7zEZSW93T6Ytfznapem2VUoY2cp",
  "key29": "3oN3JrEhUd79duvBJWJfGaoURr7jvDysfLG1a32HxnuQtZShUxmrGdx4t3PiWpAWqDtDQEax79FGcL73V4eti1TM",
  "key30": "4JeJoGMj3vNbJ3hDqtcX2W5FYPjaMNotjHUouSxSBQyudohTTjG5FGRaBjn6FzVmYkM7CWSdps62TGN6dj3hj4by",
  "key31": "s5FsQaLXWa1KC27BP4FB3CR9p8QASMdzV3x4VzesA8oZKc6HWYuZRK3vCwbZYps9xcGbmuE9Bd5RuDST2gwmcdC",
  "key32": "51UF4YXjPMdEuEYXhNAL2UG2GtqS8QAiFhGMZ8GhDssjgosSNdEkWMaccRXPGxt9J7JfsVnohN7S8NvAVQWgGhz",
  "key33": "55zGi9RCJZQJqArTi3YYAHFVrNEUrW971Jddt3Yd7zqtuh3EN46PMYSxmZnZL5Enjp51SUHJqcXPv1oPuaoLca3b",
  "key34": "5KKTdnq22n7Dzj7grkPdnaGtYuKpdrV2BWGm4ViFL784ov2Tk99BcHTFKYYgpsaaEvheMSs3ZWbpf6yrfn4sX39Y",
  "key35": "5dFMMTEqkbty6BRFpNmJSBHFk8sNh8vko9VpLxi45q7mDTPAXttwG9WZNTfgdnrzTJnurUC2rV4wXRJgtJ25NhoP",
  "key36": "TufgRfqjJ1qwmy85L8tk5ExPgfvcEmSMbTqL3L2RQiNDBPqELfYsVyZZsaEaFU6K79izYYvmxDSwMYaUB9NAtyK",
  "key37": "3oTeAd1JTUWVBobN8Z6Jr6douULYYPFJk28zqBurjp2XdwRTUbJa9XqVNPUFgqAw2GQVZRjxScg4PRahiM6qTjuZ",
  "key38": "4oLvmEWiRpsFvb5NQ6UbQSvFMFGs9GLiCFgRCa32KcVUFwmiEiwQuuJtgBYJRcBExo3RYAWa1AiBo6tCExjjVaod",
  "key39": "2aBjHRgA9SEzy493xkvJda9kcMLFBeeHzuKX5JYJxyNoJ32aiQTrrYiLj5tHRASf6fFxGvnTK1g4sn1pTZuUVTk",
  "key40": "rEn8DVCT2niMxdkinvLAybGV9Zxt9aVaohMbM6KnhMAjbpjDEo7euaXxcaYxjKX1Ckqhe3dCZVdrkcyGdDtBYK2",
  "key41": "66HKttD4umt1CbzmxgiwmidiiF5e3Q2NxYmFKYu2s9Af27yDR77R9SgZDswvjjji8hX8mKh1okpo8NvBCmbQ5T5T",
  "key42": "2y2Pt1L3Q2oMmVcqvfQX9QQZMjrfAJAJPnZwRZJAt2F5qAwgnXkz4kGGMC9rVxTiX3dJpHUnNADLgE3ua6zd9EDv",
  "key43": "3apyrDEkeZkpwqodvvieTChCBLfftgeVTMYRppwmhoKz4T2mryrsXHRtn9PNtYQA4qFRQj7JXTswsLvPj2STwXGP",
  "key44": "2rSjRsyNLJ3ExAfNfGd7yJojn1b7FzYKsoCvVnWK9EEPZCb3L6Rd7SgWNsYH8NB9rGipWwMywQnCCvsjSRLKLmze",
  "key45": "3tKpqBnDq8AuTwKhX7ZVAUtfjk3aFZaWSLqRLb9YsJwKaYzzJHxNUWgzkjK88pjVfEfSgBs4UDCYZhpQeR7mba4c",
  "key46": "BzZgAubv8ufdNd9VUb1zRCxtDpT9ZwxiVu95Tf5rgj5NurPLwtpx71dY2P7HzzzdM6JRwkGQicrQGaktgY5DtgR"
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
