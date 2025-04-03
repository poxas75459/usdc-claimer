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
    "3pkYjL5uGWB6fQpgeBobGtbn1TW13Ga1tL6ZJ8KXAbjUqWz91DNqvydqHo7XuWmtfxVzbMusG9rvvdD4LBwmbmVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NbsXs8ZzGRGkR9QzHPBMXCgwy4rhoXwifwu7CNnP5u179KzYvFgr97jJyNwo5ooJjypZz9uCkJ8mMydKDPyntQa",
  "key1": "631khHKv9ea3vG6SVppQdrkkMriEX6vv9iRkKQaxJGnzsehdDdJFYey4GxNQ7qx4hShXtDZULo6LW33nMgRQKibt",
  "key2": "3SoWTshqVkQBsNFzxnjduvsyyCvKLhz2X6skGhk2BeWFCxXLTQ7MRcCjQB8on5tCeRs96CVaeUtnEUH98NXyQW9K",
  "key3": "2N1TnnGGz8XUUXiNeMYotfW96TvrQr6rM1jB7zezXoHHx3xXzAb8PCvAiTzq5EcJ31XDWt9MqgkZnHCCKDR2Vr3j",
  "key4": "5dseMcSBqFuYiPkWBAg99ot3EWuoX3iWjpje5re59pgeii8JTc7ZZAcpitZv5BBfvg25WuHxrB5hd2Y74jxEoR9w",
  "key5": "kYTaBbbD36r99B7cpjDNZ1Aqwide1gjbbKaqsgUoWmKMYK5maura84Y4HvjmZDXhd16gdfnpNjnW5xQWqZUFCwh",
  "key6": "4Kusr7RLGMZsBKWZd1jvdZFBmxPnTwCEpAnLjU86ibBwgej6JAqhGwuwuYEq2oEUnmvRf9cCmUqDZiRnUUzCnaF5",
  "key7": "4QwmoRviH4SeGXtSspRiiW7X3hbWAukdf3YnkuC6sTgb8nM2bXNSvnJU5CK79VcEiw8sQuEopKzwrEVEp9CKinu5",
  "key8": "Z6HKLiDBwwrYQ14pRrPkJntU6u8PJjDwaKgq4AwNyZioP9VS8jCnqHMx4gAv3p4gKBNNvNVA2v6ZypVy9mmP91d",
  "key9": "3xLYhB8nkC1AXGFqVKLvq4BGKNunfHWBGn6Y6dUy6T5crnuFKa1xrd7feJ9bwpP5moGhe3o2MUuKXPEwaWvL1Nk7",
  "key10": "4gmjzYA7EdYKydLY83PRct6qyVr5HuLivkjstegzh4bCajJYCYewKf4Es8yKCCXQZ6fonUuak7YoP8HrJFa76e5z",
  "key11": "5Y4SvtoBdLoSWb3yM7c3AvNkTeWa76MQvAfFD1PvFC7uEZixhACT24ogL8kuaaMJrF7PKHkQmM5JXs6J4SKE6EgP",
  "key12": "4kfm8vsavWQFXc9wEJX1YnhhMNQLuzuk8aC2m6AEMUjt5a3dPz9k7H6sEX7E2eDwrDqdqdrKkZC6vTcN7gQdNubc",
  "key13": "nTftnuciX4pCJsGfdpvgqP4eec4FyrtftegnwsrE4x7AKmD7Gq2JsWXiDCjJBHeRTrsgHwWpdcMr3ktyQd3Tm2Q",
  "key14": "Rk2fmdEMmDY5AMhxvVX7PrPKVE5wewpL2T7G9iY29L35E2Wd4A13MoZ61SHoBoCJA5qizUjzYYbQA6HjtTTxXB4",
  "key15": "4N2L2G5fes9gXKL8DYUsfV1DVp6bgNjULNcGmBaKZVy95nHpcX15a8enA4x2cbXCHvuRuREb1jYhAByj49EJZmWF",
  "key16": "3mW6p1xSrCd54FLZ4ndPcXJMPn5LNcD7gYqq3L7xxF26QALe3CEjKKZPimzSPyzehmq98ZeveZk18ysrPksGAk1H",
  "key17": "XJfnXHZXPyzo5xVifVWHbTt5qGynoKg98RomfoF9soDgw4YY65nBFxTFwm8rJhpjynEKWor6SBaGjcZYw65UP8v",
  "key18": "5bgHHYeNmzKbjSw58N4Hg5S79a6EBVD4GxtByaK8U3KH5Zcwv49MP22bHPxcatqxjY9TD1wQcjFXY7SmgSNwACDK",
  "key19": "3YX5svydtKV3rCjUQskPGNJVyTtDuuuV6yMoTyifRpzPMCCRgcJ2TPwPDay63D3SXxEudn14Ev16tsEVgoJpWnL8",
  "key20": "3o1SxF92UwR337sBhq49wChh4em2FZqrF2jEYcGHMfMEbqUJoKpt3w8HZ6tv5GLVurTZJYvynwEnE2QTP2RGrR1m",
  "key21": "4xUPqoErKGFVNmPwGDi6q2Sh5ocmXTKBGKaknD7j49qisBTs8iqh5pmYjYCcLTqJSdjqHjfjyuhRa7tQSFsbu2Hq",
  "key22": "3aGo3HCqH2CgNbhT69uwjdif8AMEtCEw983Vrf85mKPrZvBroQykafv24RcTd6WMPgao9Xgicga31KMdtTG36Xxe",
  "key23": "236KZ1ANf5wMixn4U9ogft4k7HerCcQK6iJXkzKNyG4TcSTNCb1KUFugatscG28Pw1yWTRQ7nJvEmBebz4vmCjpo",
  "key24": "5uCrvqrQbZoUS8kbtbptCe2AaYQi4SvD5aqeoFYfLbYxFqJs7DmpeaXV1mEfDMYq1Uf7n46RbaecKpi6GWm9c893",
  "key25": "8fGLAs9F2svPQWyTHUkno5nVyUkUdQTothhzaLooZTKGrjKP4KqCGiBCiDWxXCeEv7yQh1194tDq1oJddnkbmZ3",
  "key26": "3w9Gr9gn67UPNP9owSfYqPHzJWUZrzM5E5APiXsUFJE2YRyVaf5oz6DgCpWmL6EjfSg5LeAzpz2ewDytia61T8NE",
  "key27": "4yRPvYpt8NJWBqoCFsbWGedaPcv3LyvDYhcuxQgLsQEv7JbS4wcbCmnxipRgYgGPhj9CAQjGvHrt2UVDUK9oHWNr",
  "key28": "2nuHiNiELMHqVVDihMx6Yf1zeKv7BGtkm7xmDpiHQDT2nzcJQnqAjTTnw6xWyRAfSw8sRKhS1bf1iYYnL1LT4qBE",
  "key29": "55czb6QC8wBJF2vRw1GNaTEb2PTu1XmtxZNjyTGQf1stB4JKdxwghRL9ZeXXCV2AHA7bkfM3w9mCqx4R6roGwbsx",
  "key30": "v2mZvCKWJY4QeJy1xrfKhbCrTzLNEwyVCEEre8rPRddE7h4sYZbWX9B5y6aoA1tfy7wGaWi81iHzZoTwqqJ3uYT",
  "key31": "4meHrVtF57qRwBS3mLGXttMxbojNa31GL4KtrEVXW7mY3Tbqd2HXWYD1D3pcKQ8ma3QucemmPtWVfhS8gtNywQrJ",
  "key32": "TbqrjfiRBSfSMiaAze8UcczWSquzUy1chDUYTgP4XpDTMT8H44JtKU3zASM3BPPcEK1ZdkCYDSh32jg4YREuq2W",
  "key33": "RA7JjcEXLCPUr8hWapxANKivRxJR8xZrB9Yxe2A8nDEqCBYY2J4vF6H6Nn3ax13sp3CSYvYJVztUepQ756XBE86",
  "key34": "3m7JiyF7SiPy8BzgjDxiw5vXQBE66TFxFwVz2ktJZK8a3G1uzAdUNd3HKcg5S8HdRDcaR7wxbRfRNwGBDgjBaNUw",
  "key35": "3oWX6UJ6VfMv1QEMoDdY1yEpAKovY8b7dVSrXSHhCvhW1muBV9TsWW2dGrmiDm7rEFVyU2qAtW8HaijL2nzi889C",
  "key36": "2HAyNaVM8MPBXjd37eHbcu5EVLL6CTW14Xm1VUyqrHMJFLyg4GxQDDtRXEt5BHjoTNeaZrmU2CCsRyVJB1DjT4Za",
  "key37": "5obMSWtaKkCFJAG8542DiWEjwjKYsxXnZYJvs4GFS1XAYYrpqttGzGBMkMEi9nz1Y5f7BrxaaJnK2WMPMk5hEPUq",
  "key38": "XHnrQYdLT8uvA9eivsBKPcqUuyH5vzRoguTP5NfqiJLXCcdGGdeMG9ohoKTqGVHoV16GgqRcLgFH87onj5Uv8MP",
  "key39": "R3YgeEVUgm7Rc4kGSkGFse7U1Dx1eCQ6SrfWeN4dQSHuZXjLXnvvV2WhbvaRz6q1W1JfNG9Cbz48VPWvTddMNZp",
  "key40": "2FqS8ozQtUSLFTwGsM6qHG5NXNgJX8disdVr8sQN9MkrP7vRJ8NinrTqV1ATcC9Ksf3sFCTRceciRz7EkHvN2zwY",
  "key41": "34KB2YEzHtpxAM7bmtJksg8gjx5mLGrNvJ8dWxD4UfmGtW7YZbAG5iArkzsuHpD7fUN87PYeUKV2hnHExhbGiGri",
  "key42": "5gzmbobu2YeQNEcR76oyqQrNonhkJANTFesfssejrzNHy9q6GE4vHGcs7eKu7cBRidhy7TgpJFUUW19WNJpwkCg3"
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
