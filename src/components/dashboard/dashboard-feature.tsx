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
    "BQ7CaqXZDGLK4MJREK9U6nGCUe24n9R2yMsTCsFTTZppkf1CunyFT9uPfeMPBNPAE6BFmey7b9rYmxbBpQcmFRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1wswkPvuvxj6J95P1WDiUuvXVDkyB3SzfkLR4RrFZf9HLJR28wRCdpjmoyFxVXZ8jzorC4bF2M2CT9kyp2JZG9",
  "key1": "44kTShEcucWSWXLXk9mv34JeGRr8FxRPmWDFnHBckpUjjoyJEdjJ2i3D1UhRqvbVU1a4yFt7kEM8A7vdmCsXCCBc",
  "key2": "2LKKWXwdwymwWCJ7EvTzsChv6Uy5TPLLUqkoRf5w8qYzkUCBpDu6BWC9sLmyjimg9KwhZmhB8mSFvFCndiPQCsvh",
  "key3": "63HvGKPxTrVUo343qBwN7m4QFbDf7BuMuHD2vWb26kCH8cu8VcwfquE3FFzjBYmRgHMpTxsMt8dXjpueqdYQ5BQM",
  "key4": "4SffmQweDpqMRDoYJNqzA84mbRhiGZ4r7ek1x6o5gBXKSmXEFt9RCjyGn8dVeAWeoBihRkSonrdEwSuL1kHWn3u9",
  "key5": "2J9DfAR8U5zYedCZLtBxreW4D3eYxAhKeUWxuAKs1KksqA6vNWgYxTU3YZpr2HePfE9gfXAZsPXMj7CtJae1eNJm",
  "key6": "4kz4owShJ1mLPwdJZMEXDG5LM7Ro3SjDNyctYQMrbJumhEfhYL61rASCJHgSLeoXrUCn3U1xHm1CWJbs9vZ9FS82",
  "key7": "45i7Fab6DodoNJFaBSouQ5XX9phDvnzsMAfznewD4neaaTRLuaR3f3B9hTMDq5FFnZKHidQPrxL43BNpCoozy2k2",
  "key8": "4udcUsLVWwghGzTUKKFA1JzXnrfG6Vbvm23SUZqQcgCvzxL7UzBrgbUcxgnFiCaM8Tz71GU9zjwocjYpm42Wcdc1",
  "key9": "3Sj7ubVcGTJQGAyXoQF6JfnLTV6teDWntguDJBAHNnnmwUcD8QCqUS6P9YdsSQ8KsiNEccJGH4Yby9RZ4KNftHwA",
  "key10": "2CgyyQKeSJFF9SzkrhxLdsubDhBjb8CMkMyMXshpmcAnsYm4bTr9HgYN5Hn3NnuyMcpDZyuPE1jC92t33CrMZxDj",
  "key11": "2GzKp77ZsYyyGH14Ki56Y2nTGjdQx35r3LC2RT5v4x579BXDXdmX45wgQs5GsTXstJHLGT9redGFsTA3Syzq72JH",
  "key12": "2bCgeZ6KQXBnufnJ6bGZ6BkYLZ1Xo1gNtbDhyjDXe6TB59Hht4WmMWH7EBV49fky8FnWFvpTVpFKgGu3PrQwQ6j1",
  "key13": "iEao1tkxWatFhwDZGXqkS1gupgjCwFJfCoLDX1LiVuPoxKRT2i2r4niz15RZmTfMsXR3CW2j2P3LxQFCnqFM6X8",
  "key14": "5vnVSCyr5SVqeFVBptTdap2HpWJsqkqGZz2EDxzvPhBWVMq6GWDSXtskF85Jdgka9GcLncKPTAB3wM8KD4psNkaF",
  "key15": "21rng1AxZBrv8GHFy5A1KmQJ8Y9VoPLkRoPsdckKJ4jJ5kLPrh3Jr8kydF1DadCrWeEqLEjwo8ZtZ4wXxTu7C7EA",
  "key16": "2Ncq7ozzpR76V6q1bv34VVtDXpGYnkGfasM6ChXCPm5uP35EygYqwVhMEHiG8XBNvnBghfJ2SzasU9WhSm6SvHEo",
  "key17": "4ZnQG3wq6kG7KyHoh3sou4KSgXEDbjUAb5HDE6gEehwACMftELAuooDo3DBsHyJz8xe7AVwXFhArNQAMEYeUVj35",
  "key18": "27HXkqVPXTTEZQJ73YSGS7rNAKYuUTDaNwasUi69bNui3cQHFd1ytA8Ugat29Dvk3p8cb2Qwkdddu4H3Nhwk5QG7",
  "key19": "TPgreoh8RvGBVePaAmiRdRgLmSXQZqCigg6CU11JXwb1XGTd17YhGTTFsK8AC81gUDWAakZxwYXjoQ3DS6bEGtr",
  "key20": "5DY4Ege8xCPeU43jvgziiMJ6uSbi66HMuFdfzPqnf5v8kDQXtjC9eyxQzqPvgx1sVuPsFAxApvPidsZdKpmJpuem",
  "key21": "2NWfiNfVwEMfwh4k9UnXRmhpLM1QTrZzXZnENzhVeyRZX3E4T6AxpvHfpnaooYBagaL7eySAd6zP8jFmJRJsSPy1",
  "key22": "2PwYk5aBg6gDovjz2zjUZp8gnuhVH7qxtDg62QtqV7QqqoKYwg9CzsUd58tToQsdiWVG7s7DJGjFiDJutLtJNwPS",
  "key23": "2ZJ4MVj9ih87b6nkSboH3RkuRRrUWHTE9uu7YjXczdvvmKEUNjV26PqB8Z9fC1y6YrMJpJntWxUyqygAQNjBMsiv",
  "key24": "32wqh1S4QLQWGZcpHEFNETasivZxc5swQ5PKLueWRXm6bSfCRtXD4pkp1X3iinyZRg6oSHLmVLdLuJgwvUyXdojU",
  "key25": "kvWWUWejrFUcutkMCz6UWmMt3awqyTWb5QAAgk5G5e32zCjET4kFWUgJcTTzW9jGji5KJvYogJdrEsNdMqUTmQx",
  "key26": "5pn1VPmQLLnxnfCxQZfr6ydR4vnPGqLAJrPFK2dbTAoTuzkEvvmeBR5bL84N3ZAXiCK6eCtxE9BXi1bqrW5DLurt",
  "key27": "51pLW1XjH8x9toUrxJSfQy5SEJzCteFN3M4FiYDfYGMN6C4r8mQfngbyXVPb2UPPe7KVZvawRbnuLUiZkYVt93A9",
  "key28": "5PUjChDXxgkC1Lq3yAWGc3JNArEECUxyCPHzVExxT6ue9NzMjdWoeeaCiqgk8qX2kEHdwVrGc6CkL9QJjGsspSZD",
  "key29": "3ouExWBckmMX847vkvEQwQTEDchYa93Tgo6oEUN377ZM8fCZmCwjAjYojJ7PZvTwVUDQmKrmhRoApJyhSEammf9X",
  "key30": "5NYQ1Q9bTioCe8CQQSB5FkYCuuRx1zmUVR78o3ZoqoP73fkhE7zvt5fCtKtApqcmrkZstmHDwCc33q5QaFb4BqmB",
  "key31": "2xg6c5hT1U2XGJ9i196m3rn2hyDv7KXhczsb3KCEe9wkpnVvr2ZYXYawsyjiJDAgX9jfyb5Wr4GRLVFpWvWb5ieL",
  "key32": "4YKCbAjsZTvxtSBfUTmrcZPvrBgyc3m6q2DH5xZ4drpEbrWSryvFXDpNdq3sWAB2tcMgNNHC28JFHkUuFhWBSSdC",
  "key33": "2aTVoWnoFKYwV7uyCw8KZAbPiE3aNkCd7sAELeoPMv9oX6hoFFpFHUt97c1Zsr1KvjEtrSuLtXTsERauyYc1eSPU",
  "key34": "3nfomgP2VYaoAFvYf5CffEQAsgMF6TZ5bbeE519gVsHCpE5sTPvaxY45MrzhkrwCDw75cHWMYvZ9x9ahgtieQ9x7",
  "key35": "3QfePeUdNE5KuAeUCfQPAWEoAqtUy7rX6PqSiV8WKFrNCtpDJjJCnSm4tJvhr7KF2R9WQrYie3nqJ8UyRQEuzcnQ",
  "key36": "46t7b1tWjdTQYes87LfGzyvS5VXx9r6A43gi2eDVTYjM2hAo5ppDazXo9i8JT8w7vxWQFuhVfWuGjdpJkFeHaEzV",
  "key37": "xN6jL2ekVXxnHvj7htYxosaUQgFgXnPpZPax1VjtfCdAUxUX1Htmf5oAzvYHp7A4MZuxQ5aGC6kU8pekJ9LVnSp",
  "key38": "5tnkPw3jwCYW5c4hS3hP4yDpjNoV4RuS8YjR9pZpLBvzrupHS9JG2KhonTM8gEXr1esu5aeG2VP1AkQ3wr1X67nJ",
  "key39": "JnERwqCmze7itrD8gZqRSv7RH6nGyC57at86XSeTPsApuwEqrF9gUa2X2HwnS9hGX6RW3DFQU8JQaiTuaRjeTZs",
  "key40": "5gatpLxLqS9gJP77QYhZP8nqhAjfXfQa6ejAChArhpiMWsawg3cY5z7LXuJ6x9pVCLKndUhiEefkUDawf9gxWBDK",
  "key41": "4RSaiPjgX7WJS2zPfxZSdcyCeg14wjLPNRMiRHzdu6t2mBEqCJp3YrHjzgjpydcpXjrWshwr9pQGnox1LBRmraSV",
  "key42": "5s5gwS58Mw42vfpzxrQ3m2qhYVALUpAEY7jU4yHsETGtX7fz96igCyrELSTz4fascoW7bwG5THAg1w1B6RUQXDgo",
  "key43": "62ii7Ckd5cFDTLPaQqgTuhVgoqHerVtdtkA5m2oRNmGLViV7h4xMqY6WbwQwEwE6uUsnMsQFYGeLWxwZTdShiZXF",
  "key44": "4U4xSLaXCeUyAdyCrEsZM4NX4XyqA2Td9csJQHrNXZg6CVLCwSMGAgVmdo2DXP5gNM9BWWveHEBzQnMyWQ1gJW4T",
  "key45": "29FeMGJ8kNj5fxdZKxgtpAPstmtgM1S3wRihfLdJwWkTKUgjPWtWpoKNoDwRMMToQC4gh42JE5AVGSwU38x9Dpiz",
  "key46": "fCGbdX8uU5QHXChnFGhg2nfepXwbfsuAMejwjU4ycuCi2q1GmXwCBGzSmsjKNnqkBE1oUPXwLkzyfKoghu8jvwP",
  "key47": "59KTrRFpJb5WJADy589Zm97tW324XjbkihVBATPnYWqaKXTxjWckHhs6fPsPS8zw4ng4DZMxuSv9WAKpLzxFfMYA",
  "key48": "4qE2zPHqFrqrNxnaU23KDEKTzAPcuSJfGDCjMSjaKQKPuKUGNg5MjE3FfpZZrbS8Zg4Weto8ttYgwbv1r69VP76U"
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
