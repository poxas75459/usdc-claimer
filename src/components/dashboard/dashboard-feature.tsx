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
    "5vCXT237gyxxfos6xzu2uWGq9ebD4KMZDMCh2iLGURQpmzYR3TMN4g8BVQBsA3dzLLmbLpJWJLqECihz1uohATZz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dyJJCKZMEj4fWmPrcubD8Qq31zU1sPmLb45NmJdD2YyVEn31DWeP3xbf5GpLRdcoWgw9RaqgAcVYDu5heck3Qrj",
  "key1": "3v91UCeBcWKa4W2QdwPx1xhkjwK6q3ySx4dfNuqmrLtPHgH6czWumme6oD4bQrBpKrcxBTTp7u5t7UYposkJFDRr",
  "key2": "3fbB1h5HmKMUE2iJDTWo56brnGZEM8VP9nHtpbcR29k3ASVhjEoaXu2wsQk6SFDGw1bjrgKwe9nVbhBKfvEiANnL",
  "key3": "4tiUJNM7QNSbSvJv5tmmqgLG6PxDJ3rnMHqNKvG8izh35J3AQrpknvGMPfSe9gj9YCkYqV1W7wX6qDAdUA9JtE6",
  "key4": "5Qn4mKig9woqSWRtu38F1w6FDKXXTWBMaYEPsdcs7My6KCCfeHhEAbaF8B4TAeXJn19JAZjSrhGd9NYdr6fwtPYd",
  "key5": "41exkpytCK3i2G24tUyLwezguccTBiGLY4cthpnGKvp5FyyEK4A8eBAgn8iw7c6u2DHiK6JrqNhv87zigp9JXwqo",
  "key6": "58HYQLu1neVEGHNJXfKqbGtv2X69rXj6ZPoJM4exc2Ho7yxrELAmsb5mnnQcZMsTY7jD5F2jTxMRjER4XoE5hdBK",
  "key7": "4YvuAg5Lxw5V9RystXARVqfoWDcxHXshMsv2F7Ph5rUuk4kgEv9x4UTbyupHMzy6tD7TunVcm5cgYugS2PBQv55M",
  "key8": "3d5Aozrt84VnxRZxxt3SK82qsqEiZ95oTwP8kqWyTPXUgY6Riqw4AvzztdwXnRtuVpMAGqw3gZ67zcpJQPHSuaJP",
  "key9": "eiw16YgbNNrF9g3mWia79Z25PruyfFSS8yaoLLn6VyETjq9y5eS5hUmCG7byVjpuYdXiAwxpccXnv9Njp4RrXjq",
  "key10": "23Wm3Dgzx35FGoL68k5n4u3G1FKF7FRnk7A3h3urZzYrLRL3um24DtCKrofCeqY4j5Ki8QbjcfqVJ8LsdBKkoSuF",
  "key11": "2AW5irFbAa2HPfBci19Ps6ZooRwMtpJx2t2oBmQ26cxsGBcuamnzj3h65P1j37UEb1P7eZ2zmjMBMvgU8y2ax8iU",
  "key12": "4o7nLFDyjgaTzHNd4Doz33xMeGnkbhKHhvb2LAvojbFc944Dm4omySt53MbqprwBhcrQE4o6kcnFQ2P4tPPgfAoT",
  "key13": "jDD4FYGmV8QVNMWddeGmTN2zMu7zcrkarbXH8fr7ZVqiNcTeKj1GqcFhf6b2xgyzDrgmHPzcrZNMcJz8pzyveiU",
  "key14": "2vcfABVYXC9HCeUfjqVd3mxsTfg4BkoTE4K8xZHVAMKvrxLyJszCv6EnEHBkdB4uBS1ZoBA6UQgXwG7ku165AHES",
  "key15": "2k7hnM9TmhcKsppZhP7zDQaw85gGnDPMx7bGVJrGMJNP8SWtEZy78WSMMSijHKkN9MU6PrKB3ma1vU3f3NAm9YGe",
  "key16": "23akTiPp17DRYFeKm3QmA7MMwRxm7SU4tFF5KZmtmsWNj238TwYFHbjSbfxw85BaHEUh4yTmZ33cZWzoj78V2wEP",
  "key17": "joyYzgo5FFCBjoncWsGXMXkga14o1JwDHf81f5FDUbHcnXHzrsnxob33H1VPzj9gvPaQiMB4SLfNYC7tysW7TUN",
  "key18": "2Yqv8oToUEurvKeb56fgLwEX3K1Z28eXXjtfBSk2x8j29RHT3SL5byh2veetVx5ioVBuCLUDiCHN2eKjmhvnomiy",
  "key19": "38dHdSx3E9Qg2GohJNKCUQnCeUDKk5EW7X3ih8YHvhHwmTULVpXTaSwy6pZhdofA6qGV2FBS2cV2T1PUC5eJmapC",
  "key20": "5D9BnJ1tFoK7LuhWCteLjwszCXJET6188frdB2n4qwvfwm2azJcyqsE19gwtDuTgAoYYqMP4XaU7Xhkot8NZUYkQ",
  "key21": "5dn8mKnxFhNfb4poaWyAaLizFjTvhg2SX1hXm7pLDbnMSH4XAckSL4ztHMpPppZHuMLXo2vQcxCT2oZ1Nnbx8YAu",
  "key22": "5KsidfK1wtAVxCTtEk7SXdgPMHUutxwNR6rG6cP8v88USu564CKJqbJeiQUjeuqxRfGLXNLVG5VmN6tjYRuWfLiR",
  "key23": "2Tm4xCWJBe3yHqu7VLLdSyocXZ1LfwEzfoExWh7XRs4K3AwuzX95aGBBsU7zn1VhneqLA4XCM3wGE41J8xr6iWqG",
  "key24": "5Xt1FCer51Ym35o4CvBKxJzyBUbXfiuCBJxebMdXdSFfmfid3Eesh7cX454bbVyqwByHAFvAaosbvCo7S2RWJUSD",
  "key25": "FHvJBU7wsjY4KifJXcv14LNw7GpgqYNSZ9du4DEXr9Cf5fqhP7jXrPieWj8sCNgZHbhZrRsJhKs9tG5n9bMEfom",
  "key26": "3a81uNEqSaJu28iBNqchihxSNp4nPzU7kaod1NH8W8wh4s6RVDXTAsLoS2TBoH5VN8zwcD2QeqyDGXiWMsyPLKDW",
  "key27": "4A2TgL9Jpqmtem7BZQhcLBM4LX5KNcaa68m9eun7dbV8kWmZrYnAqnHFj9Dz7ZQsFZuZ6rks8Kpod8W4ABpksxHR",
  "key28": "4FNy1RWAfavdW1qZCGkPvfrVXoHyXMbkno1TZKax2ahvxx9ALjh6WEZnhHhcFBUncQdiS7yarJxiEtKRK8JoNWvV",
  "key29": "PvJH4aHG5SJaXqT8TpQB1usfV8g9JVjfFfabR1WL67BQ97PNcVb1XNtLB6aK9S9tBrpD41ZqcxkPb9uyqnusio4",
  "key30": "2h1v1N8AjpcfQ6PC3hhABbHentHz99Fep96xjWyZqfMDueHuHtdsJhgwq7EaMMjowiEZnngsrW2sLhw3s6D8Wt6B",
  "key31": "2tWYALVUBzuEHa36giPK6WkbChHprBGPtqaYtfuuQTHSvbDDfAaNV8yRCyxLhKKPswzMm5DbztHtDFzL1kCpTQ2m",
  "key32": "4xz9EMmNprrHU8YBHvL9TKgcD7bGgxvXkJTZx7Bb2v3f3QNGsyUUiXfhmz9DXFDrEJTNvvxxhfGhiTq5c7Ee7QjH"
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
