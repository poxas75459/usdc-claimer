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
    "5osq1RfLMEunZoSgu5cyKRADz3YX1Zb2z2x2hpue4Ww4ZAQc1gJPZsBKwwVnfkib7t2e3Eh3xPLVo6tgAU86xYcM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rSwShNzaMzocyoLa919jKfwchdVNpT6x4hodcgKditG2QStv3Hgwnddn9zyJD4k5es6QiPWyMAoFLbwgm58YDFg",
  "key1": "5f974YCouVbVKN1up3S785fzCsN7EUD3NBY4TG1ntLFQeLCfiJSV2T4Ry7zS5HNykEEWYc912tsetpf6cLv4GCwh",
  "key2": "2qgsxsuuuYGijSm778QzifQ76bcHuBGhLSbHK1yeTDghpBuaL9oXqeh6iVQKPWiJC2hNLyMW4U3YUS7zDLHEpPmt",
  "key3": "3hdaevywSQwzJ1cpWF7yMShxB2fcU9yiqD3747jkbK6WYM6pqv5jrqXy1g6K8s6w2feGHAWSp29opr5UqB2gba51",
  "key4": "627zfAy6xtUqjf5UJcWYJFzssiS3vke18euDMiVMUFmFikGdoax1SHENAY867qNPt1MTkDtQTgQkKU6UJc9WQNZE",
  "key5": "4svAznfkTPCUPQdj96PXPf6K6XSEQuGNLdCZyKtTvzT3BeMjKWiDWbGciBhNhMtQEtQE6YAnCZ2usqtw6brfS5ah",
  "key6": "ZRbSYCUxnkk61TH5uhyg4RKKdr3JoFENPZMks6CVZcgjDC8qb5MPCRBJhBFTJh74Ym9Yv1AQDxdCxmEbaic9r43",
  "key7": "4ATHDsd1ZQkxn6mJL7AD9JWGzyDp3Lkfsb5X2sSLQoqBe6edndGVbX22dBD5Vio1znMCo8UzcNCAEGWFD14QpsLS",
  "key8": "2BvvjtkYCF2jgDtVg9DpiXSM7ovfmvCnwS3Neyb3v9bpgkGWq7B1GM4vqZJojRNZYGGWVzPsKg2pzCZahQVfuQVy",
  "key9": "3JTsieWeEVbkZu95tXfiUxzyi6JCmWX6hGVBwUvPKM9qMqixvZsM9yoDWsGDB52B3tHCBmbt9dnpqhmCaDuFQ85r",
  "key10": "3ByWETggVuLkmRNqyirNyY27N8dTeV4m13s3Vt8MLhDvXSN8RUVDDf5V3BXjEjEGGprrrErXs7oc317HhhYcbobr",
  "key11": "5h2SeMZbWQcqVAynHD6B1ysNCZBHWeMBL4xv95FZWuRWzuFJUEEkrzzsz25jqd8sg5itvtUrQqq9PP2kFovemX8n",
  "key12": "3PRVhDsVR3Vw3JH3wk7vkGae9ZBzzQ917YUKyLsDUj3LTpqqFeEhHDVR2jHMaGDrRTMFRDBjBSdx8BxUzZGLvpDL",
  "key13": "3t1m1qQudK56M8oF614Ry7QAA6RnwjhiWw71hyGuXhMkow7apo9wPyyZEBWzgkj4NwgB5u7BJNBUcsqHefcWGFtM",
  "key14": "66pDJgygeGPfGyyrdiowqp7LHzPHz6NEWpPNg2tYekimHZxvVFDNdcmKXeySLAwfSb215w95QJku2vpPXncvdar4",
  "key15": "5uZnYGGsqQVuZKUZaraRa5pRdtafi1bpnh7QtneutLFWoBizpAqhFE8kKN5hsMNc7s7yd4jqspR7k4C6VpjdcdLy",
  "key16": "4XZq6U52qUFoiUJWa43WViZyKx4oXbFwUudHhQisvknms9QzmLTsiTaSijk2HzjwmKLvun2UXSd3K3PbK28F81mp",
  "key17": "35nRUimDg9ksgmRujxxb745s9Jkr1Yx5kp86g6DrimAQyn6pddvMvqHukWQNyWThdcDgRadfYaphWHfZo7zjm8nC",
  "key18": "4ay554tMutSD4rPbS4msomW1rvd66D1PcCm29xEhcVCYFxqdnVwRJrgJGPamuhDyFDCBvRVHtwQmyzvgLMK3AiTa",
  "key19": "2FziTGNC5ehtFWPDGyz9A8XekK1J1z1MdjjAw2n5sWHCP3HWUEk38tFSt6mmckjXm8jHBvNEwF96DuhkrjLT3AMe",
  "key20": "5BwfsmquGjdTH4DyoxNnyHruN31znsATnGpGpVjq3m3br5mE1ncuhp7gxFfP834VyNAwNVXN27UUw6saDk7TP21k",
  "key21": "5kNH76NhkLW5XA7CdvZzaN8j6iSiemYAc13urNR9DjSUArshPnPVHmi3W9M9stzUxWmNe8PoL8ntMix8AhiuQNkJ",
  "key22": "x15bytv6uDcNGVLBViM31sv1KCKZxyjo9qaKp2sXrKq9iQB6hWEhNox7FyjpTY8z7KjXZQLZdp28Y89E4Vt3eL4",
  "key23": "28ezoGDf2kUkWky6tDfExrSR574ufoXFpGNkJTVBJynuSCwttpMGKkAAjPYnfR7ciR3YEjDcyf78wJZhKXWiqCQ3",
  "key24": "4dLbTYipRbeJaEANiQgK3Xr7RVo9FryJSYXRqWwkF27PKdKyRJbkMDb8uxwMtsyZAQFZTbBXSmTUBA8pHnkvENtu",
  "key25": "2D6B7gb3xNcCHbXbUSshvmZSZx8mLocasdZvhKk5XnEH1KSW61hEm9a2fYA4thryjdZUGoYz1MUfHMA9b7e3i3fN",
  "key26": "3yCEt4pwJuBbhKQVvgib2JeNXnzUmJcXJii5Gypx5vhCatWDgbNPZYAZsGvFf89VivBDr6ZbRe7PstxNQbxJRwxq",
  "key27": "3yPtjJugAQBgv5RyG82SdEo5bx6h4bHfiND5KyQDpWb3UGErV7wTGkPnib9kemEejoT6GJbpbySUqys3mP9xgCQF",
  "key28": "2C28E5wXsMjWFw8bYvp7D8nNSYjq55v9MqHA5s2tVBfaX6axJYLkRHmwTwmWMjjR1gJeU7rog9vz65JwCkvuCQCr",
  "key29": "4mwZPkVZq9rweY7tu366WnfAo48BGvWA9LqtoabZhVz722Rqf63ZDrwthxCSbwpQLhcSgPH8crrfJWnyEJEd6grJ",
  "key30": "NVYVzvykcqy6KJetXaNxqrkgSibEzVJhGBAeJmKZ3m45FZn8hYcJUTk89DqUSrv7wfnVvGrUENs34jXdA6Dh8dt",
  "key31": "AU2zA5TUPVPwkXSo3vjbbG6Rh8tTcJdLe4qQJWK7JNbTmq9iNHe2gkmszLvt9FGafyrRY8rxPRnwVS7EsEs5vo6",
  "key32": "24zw71K5E6deSV1HHP3tqrmM89kSyh1iu8SRzxs6uVD25nPB3p6DEeivKZAp6CyAq2HjVvrfbxhpo8GkoHVMmWbb",
  "key33": "5aLQrabCvrAYhB8WVSAcfrxdwGZxjVmx14AEQVVJYh6B3ZmFY39gusFFH1veWu5Z6KAJQQwDXnn7KppEg32Ksn3j",
  "key34": "3Nav7tY3TsCu4Y398SGDVJgYrhJ8XWudVnLH1Xxm1Cw46AKfJSXDaJwVRruH5Wut3Fod93HWUkqDXp6U5iCjibCe",
  "key35": "2RPzbd75pJufkNGvLWxsBJrdMUEJ6VxD8aNEeZvYk6BDV1jkE16QXPqVGFSJhttaGATo4ZURfD3K2zCsgeqZWpPi",
  "key36": "4D3XD79XJN537YWsijcdnWP7Rp4Uo5TQi1Ujg9ZfGsUfGh5uV2jdxwzL7PC9DmdPWyu7U7yu1dCondGWdgW3tA9B",
  "key37": "6625WnPT2E2gvimkShM9ajyyCE7vjFgXVqcinn5TDbMaTcA1ze5pj3td6p8YuFFwYvqXb2xnQhyGbaQWKW74RRrL",
  "key38": "5ZFqVSXkLUBcsuRayiYgcWs6yZYPJo2pptWL2iRR5kteMHJHtbcr3W64oi9wRpoH13XGMoZ4qWJZhcCutpqmd77u",
  "key39": "2tn3d4hbznBLTMQEBuRmoD5ZfLrsbpQ7VyHcq6QDqU7ZEjkcGY23snZVLWZtaM8tTbA2P5D8kJ3kpmfaBMGsHMiX"
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
