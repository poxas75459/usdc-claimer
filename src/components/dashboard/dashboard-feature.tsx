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
    "2mTxkVmDbrkJ5mYNRtT9ti1PUQQYmvqdAMgnApiAhzm7LCoXHiPzv7buoLjhizXo6sUCgxqBsnFDLpJJz6Gta2FN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TMfDBRCDnKDC1pcrraXycjjgkzHfGBiHsEPedJ1ZVxUCia7xXKTXJzKd9P9f7shbm3MCYdBPuKvLfojwDQCpXR1",
  "key1": "5katdKYBnmFny9SMKKh2TCUZwCCuPvPyVsj11otta7ABsWrAyZbKP9dTV4bw1YUiUGqGQnQiYawkXixbiNnPNUGK",
  "key2": "2VtjfXx3rV5qQqag8y9Nbp3hKLunu7NVt1sF7PRLYQGhNVkMxPK95GpaWS9vu5Hhitmb9aVrZDLzGPik2GB71u2d",
  "key3": "3P8Ze18gY2Jg8UndisWgDAuAFCRJ482T9AuQTjwB1M1BthftorsomfYwgn8yahn9w8VGFRXHKwpmggPKsL5oTGYj",
  "key4": "4Cv6XPkZhPWzVBoqmKaanXs5m461MuyHeKpiDc7XeZqwvUkHb9e24tTwx6RZFDidveXYbW4bSbygUrS3nHi7neiT",
  "key5": "5GntT1nLfzfzPUXhPaWSLKmdWpjbSSQCiHBC2ofTZu4GpCPiwcL2bgNnTc2Xco9zQ4wDLEdKaunAtZewiktBUSJZ",
  "key6": "2W2BRaBwU2Syb8h38mjznyNxgio7KWUgt1hTW49BLojT7uUqgZUvbebVzhPcgjHKgVsdPdoSWX1kHrqnEW1vhSbD",
  "key7": "5ubRM88pcwQMzMV6GKhpHgstKp2rv8S3msPy8y6isapoCn1FXzzEwfx543V7tTCXF8RE2xYapD8ja2HBksE1y5Gv",
  "key8": "3qXU2R25ZYvtXHCqZXsar2eRdow1h47TJkDWkzthnVeEe2SNisw4hRa5bAf96numFefRSXbNqmKvTXxQQW9qb8w2",
  "key9": "25MSU4PSf2JqhSFZtCNXEpzSP2Q4tomMuMWH3omeLfvMdmfTvnsheSv4MjqF7g7XeSVKosbXaRQmcfNJo2f5UNMm",
  "key10": "3NT8hahnTFGrZsx2gfH3A7bodNmPXREwq2q8sHyPGoQaDaoihifTVPncyGCq2Cn9uXmmj6RvANtUH2nYQSd1L6Rv",
  "key11": "5vbADWf3sWRKcZ5czr9jQ4qddpUymAxWXqiApXaFDzmGb2hZoN3VPYzULUYPmZwETFafXiE3qWuEfimYQooaARc1",
  "key12": "62c1iKd8FDnJSANHbc4Eki7sPmjUUpLPaHdccoZbTiCPNHFRhVzu3WqHwtqYgZcxPQpUke4gxJXzPWCKWKauc9Ns",
  "key13": "5KbpHJzHfUVSRswXkkrmfkDyaFwVRJnEgF7c2eeDccDCRc1TyA3AmXKe1skg5Sj3KHDFN3UQyv9GiTBmZDY535V4",
  "key14": "3bSNBgeaKQKS2FzHDoV5bdKZQn5cpBHSSeik7eWyAgja1XXPi7XvWdNKcnAPCzVbZPL8vSkVi4hqkvTYxRKk5Pjj",
  "key15": "ahuVn3ikJBv69g3LSDqHF3YHFwnEmHLcqo8gZF3f5CAqYda1eRcRyQsGzcuAbtE2ZTJ9HCJCCAvi3GBeNR8CKTh",
  "key16": "52UKqoRN31ufG4G7Dp75PrTrJQpfC2TDwyFMWwcYut3TtCbRZf86fjV4NaX7ZoayeSTgBymV3G7jfGhDwMQ3B5oE",
  "key17": "3zR2tEkbP9kB68tDJ9ojsSi2s8EXNAj1mHjv2EC2MUTvZE7ec3fx3gk4EvozAHDcTmN7ZMLVjzZ8ym9qzY92pXFL",
  "key18": "66PCQGphZWjVaWZAEV2xdJDdziD39Dt4s9M1simmjbTbDGwpBRsnaSzskKfLV9Ar3RZNU1WCQLbLVRwq31xbWQ9",
  "key19": "BgW4NsVAJpyWdrU3QobxevjGqJkv3kDmp2kGBCmVWxpZXbmyXAEiPQXbAWvNooZC9j9LAFzV33tVP3dPPhxM1V8",
  "key20": "5KPwVaPjhKP4wYGiTZK2gUk4kAgdyAU8Hk8ga7zg2oxS1eNcouKaAUwgZnoWBoZfEXJ2EoRRFHW5SgF1Ashj1smw",
  "key21": "5RFmRqvJAkENbEquHWZaN8sYS5juyibVa8ejyHDxPr1bbvcrJuGB2eVRAYV9A3NREfocGSSajj9XFZFvnc8uS2DS",
  "key22": "2aVThcB6a3i6Vcms8Vt6FCtMc5kmkAJjn1cUxiuzK5NsKnqxFtdaFtS81eGsHivWGDwH8z6FFRnMhcxrkLEo7V1V",
  "key23": "BtfmWWNHzTYVb7bhPBq3mviRzYdGeuWaFjNJpRxmoG2wYqi24n2Z7uTgmg4Gfcoa8B5NLEUsKqo4ibEsFKWZrcW",
  "key24": "tVAVJMVyqYAcVJQg9H8aTv67Hym3of7zo9drmVNPPaHXmRhQJ2e6nej91dmKLbEgnrjZgPbPKxe18WVYNMvZA2E",
  "key25": "2JFvbiokwH9KgTG7h4aYnMNiRWN3brvfxu9kCrmUNuJcbfqj4cTnxG4Bb7M9TKQLoyao6XtPsbj97LaKaC3ztoJM",
  "key26": "2eJQ87HWsvxHPNY4JifFAbwrR2bfF4bTXK7Nej8Q59QSqZFhvPMxWuxKvSHKqCPNZsLWyUq68845Z1UXS1w1fzCi",
  "key27": "62MhzGnivkXVGpSPBwA9pbkFDW7MnEmLMLEZZ7VdxwzzH8wh3wveSWcTAZ9pugkHbVSLWJmfzHcicL6Dy6bTVfXq",
  "key28": "3ySaRBonAXTLMGUN2dHXq5u7hyiicgtTjxh5skBaWorRz7T4VEn3PbHmctGpfskrHHsfxLogc3ReA15WBfewfNTj",
  "key29": "2WRwzdfptW3UisqZu67trsLPXaojd5z2oeKL1zzr5wzvGxg41LNSAVFDu8PWYJfyWL2Pqa7HQ1oV4FwXHR1ZyNXm",
  "key30": "4dAf1874tQoqTwQqoKNnCKusB5Mrs3LkM7chqfchi8tG5jdqmew3cgcLaT1j7DwmQcNxV2Vq3B71bZm1QntgMX1e",
  "key31": "34t1zKXvemB61aBxE9hSMXbujW1oPH4ufX8p7RkxTxUJey6yGFM2wateHdtx2o9fpSMPr3xCWoaSGjcJmcqmHTEd",
  "key32": "4cYLDeypQeSJRUBYNexmMgyq3CYQ7wpUtfJFbmXtVJ6uDnj6DoM8b7Dk5jRKSVCNab2muWCjpirDyztVki1MmxLp",
  "key33": "3SS16bvXQ9E771GHBTgcLoC4RuXP2y4wwUKprs7rQvC2ndp3Eirh2YCaZ3HVJYGyugv4yzLNGBqquFN5HxNnPLRM",
  "key34": "4fN8Hqs3hLroFS2Pb4HxapCBM6QPAyfwUiJcUTx8KY5KgpKYvpeJkUskwwyRm6LaipCr6zyGq1U1saLo8255YnEG",
  "key35": "3MPeLsTnWveX1GBm4oB1JuGtEjRs9fWf5c6xhTroo7ukmnUf2h9qwd9enb23z8ZRn8xMQNL78Nmqtur2q2Jy5eQG",
  "key36": "52Mna2hQqdqZgSKPJdeN9bmzSPWKyHARNWnG2PAXxKPoVSb37Ams4pE18pCrwNF7ZPoMLkGpQ3phyp5iKWAp6HXx",
  "key37": "qrCva4ZR3Zr4MdVTjsxJ774Z7SVP2dtd6b2p7rx7HE3LUtUKDsHRri6Wn8odi4o3ujpfo81CBRRvBkNkP6L7S4N",
  "key38": "4cNAaaibvJ24jYq7G3epWajQKQLNHbzpor1nyZ27dS8j4MDP4F2WRmAjpouU1oNEZjPcbDSAi9qLvjYibpP6B7jV",
  "key39": "8kfvUtR7dFUFYPcnWaQkbsYvmGzRAPE5YjStrLpAirPkYjhskVZHijzyUXgzc74dHUVArzhLBjPrffgCZm13sUX",
  "key40": "4RRM6UY8KKxazMcvm3sg51F3QzchmytCJnsBURS6tVDq2JKBT9jLw1xYK3a6ZFdaCQqEJuG9JNnuJ1LMRwW6mUQF",
  "key41": "2zj8osp9JYgW6LcG6GRPcVHHDmdYaDq5xkrChbuzggVz8hMPdBJZBjwZaC4w8sVKfEUz5eTNuaSfC8TMBnPzdfz2"
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
