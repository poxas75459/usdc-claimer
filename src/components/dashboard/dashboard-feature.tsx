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
    "YfQA7aGG5E1d1BWds3HpLc81r19EwwoLpguGLpAHBaRQjR4jtwcaM7AkuXj5ukDC9gGhdJrdrDamWJAoZoHn4B8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gwM3saKo2C5HP17iJFVZ4ptRfeNE6dz28DzxWmPD858WWH4A21QrSJAWt9mJ3S3kuLSc2gFUGv6hXGLv5j56jCU",
  "key1": "8FFJ3AB6fdf2FjVSwzRT6hL5ocgk5wYgcyGvpM7mXt9J2We62LUzyxx16h6iUvJV9yxxqAAFCBemoHbSWBZRA99",
  "key2": "3FNgCp1MQUNUfSZiNqN3ogy7d62zgQWNZS1NJosxJFDvsyy77V8eQnGBj2RNbtMeibWx4ciQgcGEEwAQNZpspYX",
  "key3": "2gRDx5dGDHtXXfLeKND5RERMpmYsCBJB2MR3dGbbAwgLCGkKHTHsiFmz5nATymL6mNpEsdLPDSdyXS2fU26M8hwV",
  "key4": "5qiyi2epeCpYXMEvhfaX8KYDnKsMY6pNJGLTD7fyKL6kvb8Dnxh4z2zHibwH2rb2mAgV8LufzekcFPa9ccZkuEwY",
  "key5": "4485nMAtSo82ovbunP4TNWXHVAF7kb73yTMhdaoFhxtxGf6uoKp1ZYYNkRoVEnpUL4HBV1dVtk5xDjktWffMrneF",
  "key6": "4yHn1ZeiJNJh1Aznh4CjCr2Z6WjFqWizS2gtxWMzvfEGGhTJ7zBxfSGAM5vwqRFaEn6zRmP4j6ce7aw8x3xro8AK",
  "key7": "67K8yyHBER4yGd31NcpdY4oWXxq3Z1cvPH9HEg9HnGFiL5MtYMdmgPgFK6JhUUjcuFUHrBQBaWrN1Dve9gm48bNn",
  "key8": "2ijctETCCnHMjGzcSG5Ax8YQUvJjdH3cayv5ihC7nWsHyBKBKatXdPdgWYxVeqKdaj7MeW6T3T3eowjbBdDcj8wc",
  "key9": "VLgni3BoF1FRR7QBJTfPW71jpXnBhcFi1xB4ENcpRCyK76anEuv8kUWBWtRgyK8BAThe1jvP2535jktCvisJm12",
  "key10": "3xSTce9S3ygzxAmMowX7D8GhWddXzLjze2WtzwRs5tZDHihfNw1giQTZfW4LYPgdL5pPZDNSHGeMn9JvBC53QUE5",
  "key11": "R6mPo6DZuEQMHZscnBPnU1PZYVJhFGByWs4E5NjVJzjTUYo86E2AvynE47PbUnjRwXD17uhaXqbuenHDSuU6dnJ",
  "key12": "JbdVN8KESuxKpn2AwwHkEwaAU4YWHV672SLBDeyoEtP8KRTQJbeFAtNCZJH4YTW9mWXK8A2mkhuW9dKykCgDaRf",
  "key13": "ajRkWKhtR7DRuwW3PQ6eqKJQm4dUyhRmYU9rCEdEzF9L4LtvNRDs16xhti74c3wBGEc3pHVeS6bwL5LntPmrZuw",
  "key14": "4mxRS4CAz7SSahqKLLfDd3zt1aT65j6NnuG6K1CviFrqL4zoVSzv2UijZSVqGkfdoDVqWLf5X68vjWi7gez3XMBQ",
  "key15": "512NtSVk8yckfPyJAn7vZc4ZBAQZxaU8ih7JRvz5KjBmD5cbPnvZNcKPFFm9vZZwrSKMiC3XveKeuPDNufgt9YfA",
  "key16": "4QCwg3oDJCbbCxCdV2zRShqYGHysroJ2wPid8VvWynJrWkH2fZ3o934AC9sQJweXhLmEBo1LogFr3NQWuXi6oJTa",
  "key17": "61kQpHmxAwc8dKEiFHQ93uxLSdFSHpyXbrSy7BZ7fxHWKsrKJNfRZT3xXnQp6QVtcz5b2zKNmjrxepk8KgyoqTX3",
  "key18": "4AWEZ5twQ7U7E3jjHHjjDhiu7qzct3pyWEW3q4cm2zi7gK7YhaAGn5WaZsEhnkg36vu5vnTLfiQPfx1xShYywEjr",
  "key19": "4gTxmfTmue6Hx2MNtgsGgp7qVZMYw433Xhj3VdL8bktzdZPbcemN8rtifvX4ZvipTYPcatTMGvgiDXkhf5cL7nWv",
  "key20": "5LaV9fSEgYNUwkGfy82r4tP13W64sk3LUXjKQkhGFWhb5Qc2Wnmr1bUhyTLY5BvRoGLLxWjwJLV8WxgH8iiy5B1Z",
  "key21": "4tjn5nFw6JYUR8LU4L6mw62qdDDX7TX489RySdcWXxgzqVTt5dVyc4n9hLAr6pj5zEVygPMrbbZvZzXgsaBCb1sX",
  "key22": "4qEirwyc5nBBpYtAqMTzkhdmzTtUjv1PvfR4QGy4xfiXs6EsfC3LzRjg3V1kdKzn3e5h4ekV5Mv39ZGgzj4MG8LT",
  "key23": "4Xny9RuqT3NgdYbVXt8mnBJLLHbrJ8sx2FxLFidHhkkaQ8F9m23jvPd1sNzcjiHRg7fYf3Yswpajqsv6HE82K7wR",
  "key24": "2xofDMjwA462x2jQGjujSPTPUHWvHTA4zc3Zj1ni4q37YeEpfEZ2d8Z27SF3zKdnZpBpY9itwJ2wXn68Awq1uYph",
  "key25": "3V2hGTCpZ3jtobexfkCQQ2uGy5JAS91domotyahjB6VQgUuVZV33mLkmQ1HWCgREpLvNar5aGCLCNwVK5LupaJSq",
  "key26": "4b37Uw2XWiF3atpTsHMSMoiXGbWUMZiy35KSC6TZ4aeWCSHs2vJGB7HL25c6anPCko9cky398GAZCErYb2SMLHui",
  "key27": "5QBdQs8yuAHUfEGiK476nJfWuTdQdpBYciDkaxUkLia6pdweMDiE7eB547aWkuo6qJhk7D3PRPrkDcK1p7rgWGQX",
  "key28": "DE7ZNzKfmXi5TXcLMLPyiDNgLeCpeVZXvLT3vBdg87XDF63GCyAbTNUF7ByEeNZVfmvpHMniJdACmf3VUcpYZbe",
  "key29": "5hgMWzXagZfZn3BFFLnJbf1GxJp1Uc5UUHFG6BxjH2XecScQHiFv7WxbXj8WEh57cPA4reEW8D3hCT8kkkT83xaF",
  "key30": "XCev3FEinmnRJ5FY1iyc1TFYd1Ftoi7cUnFt3nZSDmqVvemtJGqrqapcWm7rhYzuMv4CwwGEKjUM62pV556FzoY",
  "key31": "56EYv1QXj2Sy6YmyJ1v8hCjbLD7BMBFLGGovt5Hve3VXyxzRCwkYVGg334gxkiADMwky3HXjATHGMhcXqVGgm8ze",
  "key32": "58TSR3eWiSjcR8RUSt4xNyJE4k8sRL7DeTx2pVDgeWmMz8zq7i7eXAhauv9MpPPL3DkMwyGpGNjmW9HsXiRmtYR1",
  "key33": "2N1F7j167SBSMUhH9k7xxbb5Y8RrM2axBYg87dUCjVAxNMp96vbPcdZQxTuN3ezJsDBfyykVW7zNPBbnXtEaaerc",
  "key34": "5gvibdALkfBiztXTuVj8V9xMH4yBPTQtkg7ZZHxW5LQ1PUDfiq2Fa2JjfRnn7nMGYLvNTsWQnvcyPJVGuZRvbGkx",
  "key35": "Lv3KTN1h3EwAc6F7uUTjhoNs8LSuv7XseDpdqEVV7c1ekjfjMttZH65PsAQz1cuP1HXkHK1zXV2JVFeNHCVeEKK",
  "key36": "HEpaztdF35Mts1Ty6ejEnVzKpiRvVq6dnYALWQauxneZo134Y3fuwJQTkTZJtexEMcrqNQQ9Ukc1FYVb16b8Ct3",
  "key37": "2TSvmVB8z15iDAiowug4AtGkGcQjBTdjoU4BUHU2nWdMojfx6ydfHmkGtWWyfoYKX3dmLuCv1EEHLvrUXDnsecsF",
  "key38": "4ZCWYqn41B6fmB4V3ydB7hafcT7HTswCxCogTXSM34GzfUJMXHfK8VsvpdwnTDufo3PHudk8smjKyzTXUGoToDZN",
  "key39": "NBugZzwRejpDGoKQ4sDKwsPtYqKyF1YJLVwJ8YD9weF7e2LH7JDKL8HJvrMTK6sZ5jxRX2K9Tu3NfXarX9R3uYB",
  "key40": "5EVPxBWB5A4wAqo2ZRSTNwMFnRtJJvkXrZr1oRCJd7ogMC6xHzpuUpxurUp6vGNhH6kzkfxqAuZRsewfuweLQe8t",
  "key41": "24hbWWwH3aAojqZbmgwv2xCpZNRYwm1a8R52sgggvcrrsC9EjGTkjYGjxyczWtUJtnZ84JQRjvih8coQvzn2wehw",
  "key42": "4mWgkzjjZxQXHUsS76Wvow3T43UMVhdLY7NtjQiexQ6ZLxZ5kYjVF4f5RgYsDwFNXHEba1PDS7MjMJx6x2oTWm28"
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
