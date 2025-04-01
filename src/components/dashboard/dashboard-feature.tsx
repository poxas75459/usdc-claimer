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
    "RK8twrpcrUPgEVkL3zi1ShjvevCBeLZECgFKh7RAVs2ecSYt4NUx7eTJyk45cvqGW3DSZG97fTZCvej7kveQirQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "319n6Mtw5cPFdL4GubS1RiryK7C9nL8sNGTTxJWDVnLed72Z23WEsCWWz7UVX8NynRu66CeUo2XNg1tzkX7inbie",
  "key1": "4YbBfyrSZ9uDCXyjtK5h9oFaoNn5XWBk97Dc4doLUWnXDt1ZN1uYjMwPnFUyeE6D19fBeyy8gVZtsWL9kMG4LNnY",
  "key2": "gFPSPk3YWtkeTkvoBQB6zQ4gjUkefkRfp2wRnvwRSySX7aBiXo682w9RtQjDHFS2f8Tsm2Gbv4c3V83RAXAttG4",
  "key3": "22Gbix4Gid4n53n9D3eCp1cMcnw7cJwPqB8TR4NhuG9rDyekmrUaoXJvftCX3tQrA7s6kCqFYshbQLnKoS55GRbg",
  "key4": "3W3tWtSka52ASRKJ53UHjaTvwmvBUs1HcWiZ6BjGAWsqZ3TzKDjZGFJH55aL9KVgkLn9u1dgQyw3xYuiKTauduyp",
  "key5": "4mHiTDg1QqrpDfw8hW2dDba4EGnEiNJ7LUxSELuZdZBrAoswGzpT1a5ShuyyNzyfvBm2hXTwg8uXstEdqkSbtfSR",
  "key6": "5nLi4ivzaYa5ctjCvZmuaVmRTtqf91ztRwAjcg3i14e5goFoYdLnefhyZRkMzb9y5fbpGJQrULtnjCSAXASauN15",
  "key7": "4k1LxViU7u7WnDDoBTThZ3k3YrVo4bXpf9sHcqTUXut3v4LKiWG1RXgktAYmijEXX5ZhwqV6KQdGzGJjGiJjQnct",
  "key8": "2cu6iy5e3c2zp6tgRfvSj22igDaJbCuAUVtdJBdkx8pkEauvdTyLf8UG4a1mqFdx5U3faDa1zTUzuPUFAxZbyXU6",
  "key9": "3cJewchDrkRfBWKcPZ2zFLvKXjYK6u1xnJdQZnSmWNK6961r4sAQjtWGXQny4zZWMbVsf7upqHj8mE21nuQRGLzf",
  "key10": "4qKBQFE68QzFbWpKzXPJiVCZTgAZb7w7iUJgMffRooxFBGeqbCBq4mVRZbh37RhpMpCoiyQSx6rnf1mrkwNgKx78",
  "key11": "5jxudyc8xY3sSWsne1ar1ZnLzYfLgzkAHEnRHZKTnmERm8ZbjbE2Q3Ee8GJnZ4JTCjU4XLBAJCnjuhJYeGG7Zaga",
  "key12": "55qC5YohFowzeXZqpt1D7EVt25BfLYRdbbo7rPwnf1hhfsD1GsUvhahHhdVEEGh9eUNmFwzyoRNimNpYLK7BEUAf",
  "key13": "4nJxs43yuTXsPZHr2GQqwSXYuwoZ5r4nTmds744QCBUsfyDzPrRej3mWHAsXVmD8H9fsibLRny6pY7ywyw9Ep4gJ",
  "key14": "2DZeu37UZUksjnPx2bVRevzhzyc8VetJrLAQ1gaxRnNNpegBP9Xb1hzD2bswEC2owRDzNHfwqt7qgtaPHTXvqBbX",
  "key15": "5aR59UpUAH97EWuNWDows1TbzutaUxdn4RJDxs1p6GMpYAAA275fhC3xVY5f6bm5s5ZhHBASpMi3DornxovsyvjD",
  "key16": "5AoCoC8jhja2k4FXQEGG8thJpxKg8zueh1onQcnCFmz7jg8TAwrPCmatkZqyWoi11PXwrjfMFhcNh4E5o3oHH85v",
  "key17": "3VFZpaiT7Wgpxe4Ra49m6aNDmN8FBNfD1oGixjPz26XJ3rvZm8r9WHXtaDqWhu1c8QBHnp8zTiajCmGNruz8AMkF",
  "key18": "5oBXeW7idmkiP2NeDiZkFQhfbe7fGuepQc9Ey4o2vVt5qDgH6YpfhNZB8QeLFAJj1N4cmb92a2bXCyCLbte1jyYQ",
  "key19": "3XCgh427cLGiskzx8SEHYWBoij1Tu3u5nSrsJHas4ZQVpdPJvPJh4UHdgHt8tcfmD6WFqMA6f4ehahYfXQvDXcMZ",
  "key20": "245WfjqQvSq21fcKZkVtsjKfoQNtArf3kV1kdhbuAF4aW6iKKk14KjEqYtiRbgGGy5YCgWggSvFox7UMr8kDhYoj",
  "key21": "4zFNZfJcLv6seZdUTdcEp9tjfbr83WWQn8WopkEvZ1ogcVjWgUK1X7f7NNMEkg3SQk4sMhrz5ScwVLkEGyzj1rFj",
  "key22": "5kN155sqttWv1r1vmLUVmU4uMkZwwyv6h7ayuiB67BnaS3vEGHf3J1oTBbiRZjR6Y1Ko2S3Gk1p8rrh2ivP4fws7",
  "key23": "5yzSMgEj8658mjTivybRis1H72v3ooiGz9r5WHKtyH6RdcRHjgu8q7PsaHLKDWuTpKX3793dduVDGtfiN6tJPpz2",
  "key24": "3keEeFjNru4rNMxrWkicDY4F49irRCpB6qcgMjkVF6TpmNQuuCp1XT3DcsLNd6LTJnMHHreBapZnsYdHAnvnQ8Mo",
  "key25": "4ZBSeTzsFhQg2j4jn6jg2sVZyyNBfh672ngs59uTLR8NFdwFBPECBQX73Jzk1NVEuNvRiBzGrWsyTQ56LY75fqhs",
  "key26": "58vgUfh9uwCV7QNwy3pH4aJNqB4hQ2ktdfnva5ukyixdE93aSaWjU65MXuse3xVueY199xjZ2KzAcFKEtS65dvC2",
  "key27": "41TjntNDKA42xWAnB7EzfoucSxEw5hCQwZy16sr2HPts2XAWK4Ru28oVwDeK2Td76j1URPwG8Gt8nNNzSP98Fttt",
  "key28": "5iaetP2wXSnW12aBdztd21EcBLwbS6QsQUPBQVWdUfotmiTn1cBkjdPcsnZDoLL84c8sKrGMeXMWZYvu8jGjyFDq",
  "key29": "4t4GStvdRGxfmsx5qmjs5R1imtEVE5NAUBMjijzpmc7U6qYXhbBjXK9K9fTCZ5yJf27rhjdZpRRsGYHm2EKnkiTj",
  "key30": "2E4cX154Zh7Jp8CyjNf7TAEVxAURzbVC6PSzauiTSZ2367Pcbr1ekFiowCXWMG2A9d1fZeoUnS4ypr8sCvNMVbZA",
  "key31": "4uv9hdf9J1NEgSgDrEDcDmCEMm7mLrDHg2DBP9hipTEokN9EhjJiqFzNA1yAjCPgFKnj4fe1B562AgR4nsuJBGwr",
  "key32": "3ycppuFrQr7Fb3GZ3NJvafFxVhqxCgrtSJPCCHauEN2tmprqZHcpMPPF7a8mmnEVNZwQTm3P5Us6ToAZck4jXsHr",
  "key33": "34G7N1YkxYMiT9ujNKcTVxF83Ni5UTzsUnNQr7hGSz4uTf1ZfaLFcEViKN7H7tqRj2Cy3TM2YC6EHTbeUY8qNTEV",
  "key34": "MidP7ywnx6oQMVFs6tVkxhuTJpnsbpV5DMKC4H7EKab2iFCCSXzGi9YHVEKRtuwqycrVrZu9794eibka32Q3tjU",
  "key35": "5CRzDHeZWYw5eefr37eD6x5ebBHw3KuCqfLH65tchDu1ZkfY2eCFcqYsqDsNFtD1aNVS2YiuRK3UpywmG5GqMu4r",
  "key36": "5zgDGcM6uwaAtC18JixLBEMUcZiY7Go1eyxwY6P611mQoCw1bYfgctuYJUJ3CpgcZNAHrXzfxNjehfkKKNTsmH4c",
  "key37": "61nKf52HJSfLYheFVFRo2YjVpvorf77eHGYFTJzqrjNqujbrhJeJegPyq97AjBWJm3uWotSUqQJXxhxifKuWpwfr",
  "key38": "2ou8t4J8BM87CwmGzDVypraqAswuX9edvF4cbmQMfjdVDpnMD6U3e4KwYd8Nybgn9X4yh6LGrCM3ZGJcHt1kdJDq",
  "key39": "2hPYUqsPe3zNN5DG6a5fh3cmRT6dmpxavjBddAtWWYvTCfeidMyX9rBrRF5KamFGykiixEENe4dqjS8qmQ81Yj7R",
  "key40": "3HZgRxyAJA7HD19vC1rX3XzbCVtH6BwEA7wVngw6b52CgDnECZLP3CPmgMga5v2V8nFnrSfMUraXkf19aRVMEPhz",
  "key41": "5XRTAXdx9EUTULQk2wXRQS6BCGUDDUWQrrbN6T9DtVnpkJd4nB6aGDAoqqNuA6srruDemkSXvc6org2LQsn65ccy",
  "key42": "5dTmMWVumr4ghAtffcMxsdCPf1NBgZ7eQ5BaPxKJadWNHMSenciNnMovyj5gkPf6aJB3ZwQbb6VihYyHHZA3hFZr",
  "key43": "Z5BHKtKGrBZmqYGoV3uGXoHR7bY7v7uXu5V8DHxXKHN6V8aDqBA2DJy7u2zxMifPYJuAsf3NqZCqF783vxjJtQH",
  "key44": "4DvLnoBxMVPXt7hadn6xwE1BrgNRFx8d2CjczzWsS5YtUvFVWyYKcSM1HbwxnHBsz9WbyiCn3hVkhb3mXm7u1W1T",
  "key45": "4dKdxKxMzqJyrDpixKVuNUidFgJeN4Vxx2TW73ow2bZcEU2os7oTtf3rHE5W5uRnPvFEiZeVxtyQb9ZDsjY4eqog",
  "key46": "4yqn3UM24yha9FuU7T71hm7eib6ZWEFW4NFR7pm96QeUsxFJtW9K1PK45V3h56AhUMevhNhXYtuY53ckSJRyPWoN",
  "key47": "5XCTy29RrExr7TABK5uxryjNPVZRzuo86Fs6H8xyMn4qEFwLAurTwfzR4fanSjEawZogidxxtihBoZ8dSqvBNWqk",
  "key48": "KP7PShqQDx9tJGoBLt52J72qhqTD3sXqUdAnHYprUBnoKiGYuvXV2AwoBHtDEQsvLBtryzAkHDg7hEtLiQKkbuU"
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
