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
    "wWwME2W4a5vNUrombf75x1uRqS9QdkSydBPFRnQSnTZmBy9NPgTd88sri1NK3dPhzMcb9YuVnfu7Yeexcowi2Gd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61t7TtRWb4Y1GW9zhTh7Wpvd2bMSGEXqPYcK2zUkpVoyeEw8492iMXLm67zwPNQYXtrbojoH2FgRdH1Y4LuK6ffT",
  "key1": "3iBbBA7KNgCxm3SBDTkYLbaLCeCtcyNrmfUUvNEu2FK7p6ao53Vv1UL1PqZDkBeEQSCF953NxirkWCg8eNR9Pcox",
  "key2": "5BLRzEE4QHHuWuw7uByvWtrGMsTFzGpTskCpanwDbnRdwyJbFkct9bXbGaXyrLL4UiBnEACcJfosq2WvwR8ThocC",
  "key3": "2tFhWjfNc4HiiKhYty2zE3yu4eKmNw6mpXJkqxV2unnsDYwBZDedzoXUvQg6KmVKCe5EtPLKdT7zihkvPjHgH2KD",
  "key4": "5E5eUbr2wJWSfzekRe2yQVKPaZQjEVjkqZt2D6GPzoeVNDdRVXYUE8diqd5ydJkds7nP3YzK1WpEPiRdaZaCea2J",
  "key5": "YH96b3mFa1oTA5HE63vNVCovhLS8N9wX3DnrB7mRhMouXyK9Xs7vKpbshBokSf2wC8hVtMck9g6pB3vxEBREJnn",
  "key6": "3jiSst5TR9v6DQGaCxDyQpYJUNTHjSYMiGnBvV6yXHVoSut2Muie6gBbirzUgHj64YmMXfmfUuVgYpN5BUmTPkUK",
  "key7": "3mFB7DRQq35zFFAbWJBMuXqcYQ9vtKGHQg3HoKFbQgAgXT3HKmMhbZWK1NSfxz1xG2QXcReeynjHXQS3edQcjKNV",
  "key8": "4rDyguvvTqgGmZG7uW2J9a6GnBWXFwn9eoA5KJt4QKKnSVHAYeGnQXCEVHUbPJGBjhmWSuj8vBgg7f9JKrRh64Ln",
  "key9": "3Nz1iTYXVPiGU7WUCLr1ccexqo3PppuevadHPRf61Q4haCfacC5AdAeeEvDpTvxm7Fw9KgWcUsWkitm8oUPS3G45",
  "key10": "Bz7sru9mgJovSHtVinotLEFnnHHDxF4TYi1gH89SZCZv8v6MSNsKZJB1GiPYvbbHb7UKrQvHKnb9MGRysAFVYHJ",
  "key11": "4SJNQ2QiQpFSArDBpBfz8qzkGHqQdLEMYP5oNWtP8DfXfYAc3PR8d8aChEcf8anB5So6ZN1hDQEAgiAxXofkRJ5S",
  "key12": "4o6fWN5te7vHjgo9YtfmnU443pFCt1P6DqdnJH2Gez9XQ1WN75hvHR48MRZcR2w7hjc1ivjDQdaJvJ3otXiFCdam",
  "key13": "2zxZtkBWjRwtTcCgKVFhsLVxhNPt6ePkQtpMmkwisMJhkXGFx3BVMqRkHYXfX1fG8XVWBYHyfvbjQiR6TnbFuCZH",
  "key14": "UUoNXTKmpLXu9Xrmb3jPfZXJDgiQL8YabuR8SMuMZYyFADLj1se7i3e5fcWb3Jq15NkAenqjhEG68yad25kkpLG",
  "key15": "5e7HMdaRhXPhaHtVJhWF69hfq6dZUCEWmfoCcoumzmMCy4dcTotHvC2bj2CbuKc12iG8aQC9nZHWf6YGuevYLDEA",
  "key16": "3Lggc8cdT5js9igYeKfhPHpLDgMWDtfs3Ue9xLT4mMGG8w67H5pjUcH27JsoSb16YT6XTavMdLdZMLZbBY9ZEYtQ",
  "key17": "3cZ26r5MNWLsm66z13jRAkV88Qx43bVPUkg6sUdS2h9h9HTjDAb3xomZo3HjNHU3CKNmJePMohrRASJE8CpJxj8e",
  "key18": "tPQKERnvHfinvkWLmyDhZe5aEPVgQkTJrnAUw17hwat8zn5Say35T5AYqFX2LakNtajU6rhFdTZgncA6UuduQiT",
  "key19": "SQUA87xxjc7ugGk32mDNQhFGr49HPDDDXwqDmDv8y77qozFMshwA8naphh64imLVHW2D1mEaoq3bbVUQvNYycXn",
  "key20": "5eXByjpmQSzBGSq4e9Z9wCsgwtEaQ6bdGBSLum22ZXmCKpVBmoseZ765hvTohhfEXNSf1xiHNryteWcWQ8E6KnLu",
  "key21": "2kPFVG5y19hyaXNJXqjoAT5NcCnz9iFjskGgTVzhJTkmZgdmWaH4KBH6dzt9Pnmbo8u8Xcjhe24T2Ap93m2G8yAT",
  "key22": "4vPAiW67yiQ62djjdQyP5TdrAAp5N6XtmxAC7b3oqQTcuwYEFW8ufewVaCBpgEy64MSi7dVndqJdmsArYCCFUJUx",
  "key23": "5WvBwhBuvmMef9rLswfZGB9oJZ3F5KuAwdLKJSuuh2T5se5Hdn6mdiGR4yFfHvYjzUiApCKHqpnE1jVMrSFgUUzv",
  "key24": "4EBEbo648WDgK1TfNCDSuTCJ2DXDDKpW5q7wkn3kvorMNrAEMFGG7rSLjvgGtVmx9Y3wFL9hWZTeHKrBknhhoxmo",
  "key25": "2z7NvnCjLBdT6Byx1y57kioBosrbV43n8uaALse22DiUX3PF1Fsh8voV6xcXQUYkx6T3tPvpZC2zKrauS7XwyngM",
  "key26": "5nJLyDoootJmtGxCnHM6s4HFPDr68goVJ2uFtrPTEBpSvxsLFjwMfqJmyYWf2XnvXcK8PwqCVVViasLU6ysF5Rry",
  "key27": "27QLtZCjhhySi2ugDeP8FeAAzCjYjrjbowzsnfWfxHionbaN7TJNxVfQzYfkitLxASNpxN23V2BnvGvxWAFzK6Qr",
  "key28": "49tpgNfgJo36dPXcbAHUxKzx8wH83opynLE6LJuF5TmVozSEBvFpcTL3z7yee4Dk45H7BRgdU1SRdvVLDRVjADJt",
  "key29": "2TwQ82P9qa8j2L3z3WiU6fMkprifjrjMRnq59eHATyypr8ur12r3bZAoe1YQwnmwa9iGTQ1FjkyLNTZgPEGeFVHY",
  "key30": "5dfBYfRi8cShmBFRiDy7thVho9rddV7dkvZuV1TGrsipxXMdF9Z6dhniyCbiHH39Fon19qX8nmWysemSHUo6MYZz",
  "key31": "oL6kezUyxsN4x8akHFmFnTtvDmyY3KPkfETm2cEpUuvt7VDZQMJKNRtbLoXiXB7h6BMxUHcmHzA179sTqpY8AWK",
  "key32": "4PAkmoESYCBVy4HxPpJ9pfBD9QoUunVw9scNcB4hTPEfsUCryGebm5fmipngQLetp7hP3F3QQb2b8bxTfP6zkteM",
  "key33": "gCwx2J37Eu91wSbn2xrodVHRdkM23nd1ZdLaAY4qkJgra18sFxDUizPngpyKpmRjaVvSmzdn8wAZSioHSFNduvV",
  "key34": "55KUrgdDpXUXN12RMEFNy2pXcAe38rWAnL5xaz31ye3mf9ppAjivLPWsNi3hMtEBr8qzceL3FA9AxegUUPyXZ6ZJ",
  "key35": "3kLdT2ZVY1HsnvsVTfznwsR6GdkgkEFxVb7teBdbvMcKDDRrUe2opJmPvDnnTQtn59nfJCAVYgikx1adb3WKGzpB",
  "key36": "5ppbxNWofL6B4cNkXjki5YbKkoj3Xb3HjMftEC3RLG9d49HhbxCgXDaiC5d248h2jG6uydo5sFDgv1ZbXPJjJQt9",
  "key37": "5fKieQubNS9En9CXNtUzyxaXZGPoptK4UkzAy1gaXp47ktqtfnMAqfWJBAEXSC7fHwGFoWvmhSsiBXtuTzrkdNY9",
  "key38": "3ypwqQsyhQeyNJVYTC4AvLmGXwtcAA5w5tzb9ebMCfeMeShF1m1owDViRuXzpr4tAc2pHNnmvtExzCg6hbumUinW",
  "key39": "67DajbsffvehUiHVNnmSym6i7M1U9JaupMnZfwi3VaPM2atQKJRJXDVs3GQ8mDfkswisyWpJDTAvrYpXvQUmiX4r",
  "key40": "57dPCXe3SpCYaG5m6BYEhDKKsD5Gw7KhsrgjQ8hJXM2jXYJh2fqwFdZk4KiHk5tJ3KHJS7FpVhQvykju9BQ4X2sh",
  "key41": "5sh5wirbWFkRedERbEkYyK3t5x9QFzKN6fvvKxoMZNGeCcvbqa5tGt2GqZZpGdvdFZC2nfbZYAM1JHtsCWytsCuL",
  "key42": "3Ek1ipZYzMMv1xv9dhH8SPkA4Jb237ig1ZFs9PRLCep8A7D7phZJdVjTYoAcvbeCd63YrzKi71hh76geJwvDoiJN",
  "key43": "5jowVQS5M2x6RZkeZBPjtYVvYswRJQB1TwM9AuVfLDchf5rDwUMSKTtZs2G1p4UVVSpnsYsA8s96dJkxpMDepgzm"
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
