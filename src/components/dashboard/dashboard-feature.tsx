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
    "4G8FHqtVvp8sTMr1MpUZo6F8ohXB6xfwmtEAEGZitJwGm3eiBCWP1PVqiy2PGGDQjfm6zkYQkQgGuu14venxasaV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uq6swp8UZMio28ZtFjDRv8yvFE6S5cJ1zb5fSLwt3sZbvoqoYsGkGtDYgXH99FeiJSr9R5RCr1usT5BJqVevtN4",
  "key1": "2upb6SLz2fA1VsSX6DTfXyt74Q1NoxMEpmruaNWV2TNMSzZgHNmXZDTbxrQ2Sc2436QfEKj855LsDmkfc5qc84Pu",
  "key2": "5Rwn8Z7nprFQkhcu3cA5dz92D4upBq1mchRoYB1zmLrYm5NpRQApYTL12iH1qMEMQRCgRYzgf5AR6q2FidhJRRkM",
  "key3": "47sth3AaGh5b3V2qF5VHE96YVqJaLnpq4pFB1uVF2VMonbzXEEz17Ktq3DA9z2NSFD42Di2cNmNoyGRdRUYKPwSw",
  "key4": "5PdhKgSWJyHNztdeiyobGQQBy8FRqxE1BwkiCai73s7vP1eCTfA3BEUnk9QqRvnu6x4mWUphsSnh26jFzd5z2pSK",
  "key5": "5gh21MdDnXqWpSyf1CpnxQr14NnAUG3EjeQYE79aHH7cyho5DjNc5gEDYVA39qt5EiN93UekzdnqBTHnRvRx7acp",
  "key6": "5q7zV5geQFZXd8iGq2sXe6guzDVbuTM65M5aYwRH3rCZmwPSyDk4mwehR32svoVCgmpd62ApUbhSGSReqSPB4iDo",
  "key7": "4ieVYF3rswxjg46w3dKNXJBDAu5cGB4CWQ45ofoDfYBEAmqapdYJY8ogL16Z6q4mkUBf32bEU7kog71GiwZ7ijRz",
  "key8": "4ddCuKsaexxuLzqoJRDdCzTB4HVF2R1Eb2G7MezBbztiRYzBMdh4Qbh2Lo2TnY3ify7Cy3tuxQBbBfh7NTyewYLU",
  "key9": "2DUZDi1E9PHvHHWK2wWcvdyWSdUdZpjkMaNjwjQqjgAqiuCh5XcAC6WKqE64yTX4R1KStFVKZ87skTFyUGXf6BCN",
  "key10": "547z2h3hrgZPdpospwYwY2k36F8SqYL3T6WFCp4ZDNJVPhnqXUohGpFAKTifS7GCMMWf4jsjKrtJKtyUhs85CJy",
  "key11": "4X1HkyEnqexytVMBiiia79KSJ7hXz1KHroZ8hB1Td9z5Ja5eDW2BCMUDckdPBgD2hNHFLNyiXKtgwMADjy92wyBJ",
  "key12": "3cS1puH8PFH9Td3eYpmKt9HJEcVYnpMzzkfZSahd8baRs8HPWHnRWQHk5zgE4uoUykRStTuheku5gstUC9sVFAsQ",
  "key13": "2m51Ab3U8UnZJjqL6i1hosjiaYbvPNBBSVWEVBCN2MSPJnBJ3r7t7QCCRfaNbWk3eVTcksLe2tMbEE7rEDphSd18",
  "key14": "4q2M5M34up8sNvbKzvGdsZvvLwKMRCS6L54oUsDZYFeABuaCP6CK8VBu3UWmS9UM8Tk3WQrmkC1tM3PEBw1Ehaaw",
  "key15": "2DquQXvAE7dR1c2obDJA6VhgPwts2hqVu5aZadCgTUdrprFG4k6mZPTJVs1MyMyjdP6QpuLCxLvGTne7ykhPYF4N",
  "key16": "gTiUSHaxcTArXq4Z2cuL7oo3vPwy9c9RWXRfSpS6FGg4a34A7Gz2QWuWvQWSvpwAcKUp6PmjrR6aMZmaKwtMtSk",
  "key17": "3HSvxAAVccJ3Afgn4UELX3Z3QLRs7c4U5VRAFx4iNHEC5m9U71oBbQe91MsJ625zBFNRakCVF9T85HSWcPoDonKX",
  "key18": "2ijBmYexGedpLaxPYhs5urhreDLbSahUHAq3Au1wAQY1GSDkw74eAuTtBjnwTq9GmmnYkzMKRPD17yS3FtxCX9qx",
  "key19": "GZBsm19HYw2BKn4jM4oUY5amUbgAAataTjzpc24BP4Vet4wE1ocTbd8GAQMHpKqDhPVt9TcsXH4fk6PVJTaDLpR",
  "key20": "67pByYApD6kNcQgh9s43LMGp3wgkXvE5Z1Mu2qxQMujaBdtcKiFJA6EYri5J2Jq7gspRJmvfk9qZ69Uo7kPs2Cmo",
  "key21": "46yYM3X7vJk8aXLZznJPXhw2GmYaJgCEPxFjqGuiTEZhz2xbDZHdumfhxgwSRwXVCQeBMibMcVrSdnujzkiUyU7q",
  "key22": "5gcHmgika9VuM9rqqD6AyyDFwpDFQ2s2AoBZ91WVCPcRBYs61f992FeJvNcgL75U4a52TdM2Lqxfmmtz2Y9iz7hW",
  "key23": "39JJs68XCp81HXq2xUbXm7vTxoDxF3SpvVG3W2m38dGZysGUXb62cpZyTk4qdS3McEt5en4kKRVyibb4WWNRTNZ9",
  "key24": "3mz91WDXEmGrf8no8jqpHLdJfhgpfqCzAudjZpCrvfW4S7CQtUaXmA7LRKSHwbzhCbH7LwwTum5sjYv5gGYgdoKt",
  "key25": "4gcftdfEHTh93Y5BJWELfQVAJgArSSmvbvnBLsUhQowbJYYTXrNKw4jV45KaniHQH4Rr4YKcqH9q9qfe2EtYasLd",
  "key26": "53pHF2Fe7ruBoJqrrw2qkxdswipJzVkJ9Dp4sMMB3WXB6AYGuwqL48FA8m4Zd81pKBpCBvDowCYMWThQdPNimEuk",
  "key27": "3DNVopP5wErm2g4jBNM2NamCh4PVxevZbCmyqipS1AS4dkAuWw5ts9QHo45GGdS8ZKnH4HtacKhSwAmsjpXTwMSL",
  "key28": "4BtxX3EV7ZuWcs1gZsDcjsmGbwXy5gTq4AGaW9wvw6uiioAZuwXE8fW1A9MWHutVfFZG7W15SE99H4g1Szqn3ckG",
  "key29": "tEryc1aqFuUUaRSCJj334wnwwkFJ9FAfqJZM71nBHD33SFLnRYNt9RVfyXTDpBTeQrFZa7jPi5beE8MVVDNVkJB",
  "key30": "2onMDZyWvA4Kzuv7XQP3Srw58Ygm536sQXkVTShYbnXFJpYDkmRbhinK4riGDnrSzjByUV419df7LyzRECoTLz8v",
  "key31": "3ZyJmrve3KSmDtHLKeeFLjhA2JAWCiFrCNN79SAPMvi19DRtRbirGG7BBGaT4fcbL3LF9BicFqGpckzYF6jd2zXJ",
  "key32": "53H1iePuMDB3Bcaj2KrXQVFWhQPdfoXD9ombhqmBuQaVtmSnZvZFbKCUxrSiMkzg9AtMrbziT76Zw14M86S5eMuN",
  "key33": "4trHmoNRhGyVPqKzVvNyCb5eGDXvphLuebEQfnLtSjPZ6Xnpwc2ddAdQd84V1fXpcBY7cNnxGAsmcxm3GpLzabRk",
  "key34": "2Zfwx1AxqDY4GDtENN2eg9cQGMbutTt8H3Tv4pLSkXTfUtwCsHUQ5sVy2GwRwCQJiXaptihygWvsXqGsoS7gkZ4t",
  "key35": "4BqY2hQNNyVzhSou8Awry8snxQ9fUn9oH4wnBg2mnt8wPtDo19xcCyZUUBm5BLTfPyej56nnKxHNVfpMNwkRgjf7",
  "key36": "S9GGJXvkB24yvPuF1tkp1boc4iZJigeguHYHoJqaj4vuCvJqEUL8RVWaDy1SdQ6Wpa3CywvzNbiNvHX1NFBAij6",
  "key37": "2gJdMFz7r5PFzW3oscU3jceBY2Z5R7LCc9Wa1wDoUopHoX2unmfWZDAYwfvb3ybaaqDJbmLvTLntmyAc4JofwdS3",
  "key38": "2W3pEJA1DBMcrosgk1JeAkWqVoAskjDLdaMMeuBNLzB96dMG8ngZtjtuJnt7eocHwv1DGZWEXpAUc28pLY4voHK8",
  "key39": "61mPSbQBbMtciLbLFQgdAjyjaytWh6kGRFSzLcH2idrQAY4Jd9nkB3KTR9DgApNqMHLhydmLKu5Pa5XyCb5jBA6k",
  "key40": "5mAAE6D6joSB9RCaYPfBtm2vy5XoTT5DdphSVRMQpcgNyS4KA2kkoCFVmyKi2TioH2tYybHNbW62AaBcbjrgMKCr",
  "key41": "4Re2pjc9B5XKaoxXLCr2jvP9RRXwEa2XLdVxbw9hP5gGSXBHSXHw9DaHNnAFrs3ZoKBYopjzyCFAVnHxe7Jd2EQG",
  "key42": "3Tgx5LPLRPP9ep9EqhQLboxxJThzDviDF4CSHsuzQP7Av5784D8CuYdfAMZtfBjpAC65mxMvVzUdUsmo2Xyq72a4"
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
