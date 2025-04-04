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
    "54pZ3vb81smmwhMfPep7kB8E2Z5wpRUok3PqxJXdraXsg3SnNqWZYyWvcEHm72cYQihrsU94JPoBpwJ7tyRhbz7b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "512LyLWTzqyBgGTPd4Kc7T4RzJpVhL6U2GgkCaAc876bcjbFf17nj3wL2iZn47uY9Rr2SiCBdZt4hLGuJmApwH5u",
  "key1": "5gDQtwWBxKWkD3o73GRqNWyScUpZDbLpB4UeHxHCWgJzJWrfM2G5wFtJTn4SFyc6zS7ocB7TZXd5UTHBhHNEp8MG",
  "key2": "5w64mKRRpQHkjzMSCvUK4J6S8CUa5GcAVvpDK5J9DiFH1cyDc3fFPda6sHdQbLCmyFpogMo7f4j2av64LBXc7WoP",
  "key3": "56kAPGzogGHqVDxn7L8vudfisQMkrDUv7h4UE18xpgJ5T4ZXenoqcNzZyS2S4aK84dNF3tJqYpoaRS8bruwRfGf",
  "key4": "5FeMRsshjuhARo955BGqWjtBomwki3HW7c9CjYqBkw3vozVpRui6dtNJX9nGHkN8qX21ghdNGtVR5cae6ZW35R7C",
  "key5": "4pLTFTF6aY1xMHTaZCPWYkejRzJmh5KsqGvHYtFiCNdfsxSdyfGkHLPE3qAYFZZ1MiAyHHdjg24YyTyGPW5FhKic",
  "key6": "qK25DmAjatNHiuegZZdw2DcTNgsZMzksw7shT7iVTu18VucR4hfX2RxNd9LeARA8oGZrfRxnmKSKoUW9uoCGwSW",
  "key7": "3iNKMSgAcVoPykokfSBvPzjZ6fJW4Yfdt5Yg4WdcvpW1MtXchritDAAXG69UcmPrzWb17WHwRMBmjQeh6jw5JnBr",
  "key8": "2eqtrosXqFb92za1LgT15EGF3UTTWDu4vJWoqqAwT2WgxTaCMCDMqwd4prnHSzb8tN1A48MPKc7YYuQqgJcXLKJf",
  "key9": "3NUbWuGKMSLYWB17K2a8eDvzcyTc5djkzHKyjEhfZEhVrs22msT5uPexARXkoHoq2uGeLkwVaEGPQkKhjU2peUBs",
  "key10": "4XVBSrk1nSeGATWXtrxDMe3BdWZ8dBbdrDp3qwcTRZqJTwQDPeoQ6RPDPqDrGN32N762FLYgx2HCcjEMf63t1Sz1",
  "key11": "4WUHhnK9q2tUunFDJdSuA6V1pyPfoZbGuvJvbDGoDXfsqtPTHUhpEVpxjgJnEd7w59mpBn19FBQyze7hfnyEyw4x",
  "key12": "TDUUAL43dNzXiQZokLFfPNqGnejCN4dNi6K3VSUPgQ9WxuD8nK1meDxRZXkA5iBMhSTCeitTu62VPsw6bYCNrSc",
  "key13": "KrahRzhvZyZdBx8UCLbmL4hgHDeLbV47Gqs5WauvYAyE6XmRK1D1nQHD1M9QUb3p9hcSmeD5xNSa23wFvLikv84",
  "key14": "5eDyGFezADqT71iZeMoBm6JcKeeurkgCrf4E6Hrxo6qrArbw76unRSAqRekR6m6crwaTYVTHLB9qY9F5LPdZAGHn",
  "key15": "3NiYmmTVcdLffrBvompCtG9XQxJDdSaYAkNKo2odPKcxP4UyXDcBE9BoPx5qHUysoCnm1WYme7HR2TYeJXzAcCSt",
  "key16": "3hfe6P9vknBFG35PXk7EttStdSX82fSCViEdyLzjL1NWhyGhAZDvFUmygLFMrfXG9qNgBMf8J3UmWStXzJwWhKn6",
  "key17": "RG4t29VEECnQqT178h9jo8WGpVEsp27QLarsHYY49aSwyLwvQ4Cjvko1bSkP67KfeT442NVYjLGtYnT5RQCmyJ8",
  "key18": "qu24GikxBr9uZQ9ts3FKN5GS3Z3y4orqcs2YbEi5FzvEAjFBR2MsXFSrjyT1y4SLGx92EQzeC8v6PUW1xm7ThRU",
  "key19": "2Vms3ZxL5u7KLHwAEU6s1kjrTMPk1vbaKJsEaEqtbeX9yFwYABLiK7ukiPsDBmRiStduAtSZ1Z6HjbnhhMFMpzA3",
  "key20": "6QQtuEonm3MRbVcUYjKtNSh1N1hszh2PgNK84z2BEi6FyBL2PJyc6GKm883DmaBQA2Yi9T9LaVzMPV9PcSEnkmY",
  "key21": "5XYjTHFMAE2KaA3AfREALofqbUxT5mtN6xGDZ5MsAUq2njjJwdyH38xMBixXsbHcfocM9qbUXcGsZo4vdhLXK7gX",
  "key22": "5rmGBTMzqpXnCKuisoKbqDEFJMZFoeZi8TZX5ptud8DSuExAePierA37A4QG33VkXdXX4VaEk4oEqaagf92Cmd1q",
  "key23": "2jvcMPk3DpYQ5vN2WShH89ma4jzBAYJENww9yWD5anm4ADzaVt1Zcho64c1qoPw2iJjW5EeWw93T5fS511qBpnRD",
  "key24": "bUjynz75Rh67snRd4mMvzD5kWAqWtAp2fxbb1YXXF4UwgBmcr2obMTyjccE2zKV8s8SmEjkUJ2iUXhbMCfEs1Gq",
  "key25": "5S5CgqncVcGEFeTTwj7Sx26Q3Rs9ZkzwMoqDWqTSrbjimJX3XAx35vVNeBeaX7BP4EuB6WpMuJpyCfxmVGg9CxTH",
  "key26": "41e56Fu3sLWAhko3eRyY2vK65nEARdiqc6zn3rokfUFNTRm2wvzA5upvC7AqUVjoAUdY7xobjdxcfb436jLFUFVo",
  "key27": "3wBg412ERodhs288goemJxuH7mzDUwiTDuxwk9hsWiQnH5MbFUcLtfb9FnmCyyJu6r8H7cXfUnwDPCVMwDkccZ5n",
  "key28": "5VXqkJ23u1Nv4aiFNPMqnm7o6dffx6cy5fgGDgAC6A4dAoYQb2K7bHsxe8JjtbkYJojafdK5ZLy8TbqphniEdaXW",
  "key29": "vUYbbFpPzAQp59KGsKzuKrVsiyuaYCd2P695qjibZegzxwkguVJKHnmPRb2YvMMBD2TQZiCgjxoZB6je95gfmAC",
  "key30": "NGLRJd1SUwDyybz2EVQPGTsfwU1gVgDZiPeXMaSTjA4sK7UUqj56o7N9hBkVST4MT5B2ZJeYq41d7wZCM1WfGRD",
  "key31": "5obsysWgG17RvmtRJ89F4MqdXrCC22egBsP7cAwYLJXZmh7mREVS3v42mmv528fLdXiBT1BdJpYMj2hbvi2jtidT",
  "key32": "5Dm6PJqZtYmSPdnYjUBcYdZaNyrz5DGkWYWVoiRGi29QuGtyvzc8CcCD4SjqM7NUBa24PxZkiQqf7PqCasX5WdpT",
  "key33": "5tEumpsqh6DCqhkJnYYfrzQRzLEfKVHHAYQ2oRLt413L23SAK1QbuxHKEjajMaLwnyaudKY3iKgcQq7PVLrKNDfx",
  "key34": "4KBGxLNTWnrfDEBDbakrZYThyRPvj6KHBdT3xPQ4QYJxdMr9BWiXcWY82mhwi11NaJ9AwGCjHCFY3uCzHW3ooPhs",
  "key35": "HykqP7Db6nNnz49WchHeDACH4uevtCmgdaFTqWpWjHJbHQtZt4uanXYuUeaJjsbV8NSx8yFcsea6FSGmj7zyzkd",
  "key36": "ro19fohtFHZBfTtqVsDKJQDem7FH5FKkQBjmis5XmZe9cpfCV3wh9ynMRh9VnoFVLM5khwxkhAaUkQ2TFy1P3PY",
  "key37": "5aL9ByFeV46HE2pToPBs3gSdTqtSjazUsEKeWh3cG3gaJPKxZnpw8cdCbCQZRGF1rdF9BFTjs4D6kFw8RjvBs9Zk"
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
