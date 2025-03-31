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
    "5mUDphBZ72QFin3iXupKgdeCZyiQQE4QvtKTxjYRLQ3cF26pv7cEjsPEhC2CNG2vh2TFtPjQYNjFzrfnQ96Vhprd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BeBhPSs1x2V2q4REc7pYFsfB9Pji5ZTkp3Z5EqjD9YVnVJx59GfTdNsjKwBshqeQe7KF4T9ddLVphJRmQyb2nLF",
  "key1": "5imYcy3xJn9UdCHmVYXm6qWoYEaEiMKGrnGCjq7JY7oUageCrfFTYyi7up8asDmdoFXJNaBaDxJqsQ5rcdPP6XTv",
  "key2": "3Mbw9zhfdgVyP2kv6p2URpaX43EDYg1v9QTQ6mNHfFc9yrVADJNWZHVceiXPT6QxCu29UMV866q6cSqmH9HnqmiX",
  "key3": "2fgce7tWFZGbEHdw8zpfuqVrGU6ayRVMJ4vKqtQLo8nHqKEea4i2jLbs97RnSGeWDAfWJtj4gEMj8s5u99vyPeBt",
  "key4": "xyxY1zNUW34RvFpG9yXBzjbyv3sUBzHdydQw3dn5XV9p1HFvc3k7QNgtJVL1tfPxMqib3Y1caVJYSprK4WLV8E1",
  "key5": "4L7iqxzGVMzamwhkDAvSk1qZbvWRqpvC7SeGRVrDRo53D5jyknk4S6CxFCnC1xJo7ueDjLXYpDSSNkD1RxjME3xx",
  "key6": "2PH36yL33iZnE4QNeuzuYahgkYdvHQipc8mfqgU8ywSSMY9YEcZDpEYs78nWisr4Qwo6xdoKhQcXttp9rGtjku7C",
  "key7": "3d8G8iecr8sASdqMisEePZuQUWYSuHj18Ph9T5tR7RoKbeiPgfcCmx8WhF2Xk1mD1bHeJYQJ7k27GsYkxFTrmFob",
  "key8": "63xWbLeN4ANsxYWQkxVDpggoTGEPbgHGC16niKM2hBMRxF3HSZgFtdBr8rS35dSfX6LTFYuqJWNn8KL2da2rJsR1",
  "key9": "5HKk4aT4ND1gXt3rZN6cucyPpSsZBUnxNuXgtBqyhbPnKY6ExaWNdLpPrYVWtfWn2hsLAg4n3nfcz8B6anbksLcT",
  "key10": "2CaXo8cqeyg5gWKJZ7tuMCmKE2rLjZeupCQWuiiqRyDEAm2uku3vsazgnQj3er6PkyvaN4sZegRcYApUSbaZ4azt",
  "key11": "5WsVd2vYpB79XTG35NFfXiRbP1GoeLyhzTwRBnT1NN4oFH52qtRMbWVCtrfsy5JcEapH946sNk7a7M2X1nS7FwHL",
  "key12": "5kRp3GxK9XHy72oAzq5grx2p2UVwx4u7Gs79fEasXUEv7QQQV84oQHjKEQvt6MqALMzssmf7s4VA4ggp6g4cyRQw",
  "key13": "26bDkpWxvGYAwQZwENxfV67xDYY6yDb6MhZjP49g7aZ3PUpcCimC7R4rXAYix97ueve62LVoyLm4mEiWcayshNgR",
  "key14": "4hRdmA5C9Wdz3C36u43kTV6TDZYK4rWzKAQw1uJxq2Pd5cAdeWgcbpi1i183Zxu5weSxkZa97fimzLhf767pmuPh",
  "key15": "2wMRCcbdcGjqTDRncVgCXFJS43jWBWn7gYA2DKabMC5Dqsoh9QGqjAvD24Hd6WRHCufbAorJeHubTJvx9YrFrdg4",
  "key16": "HNTwj2no4DnguswdkeoRng2doiUZVMdw2fxy5jWiDxKhyaGLHnqGX4F89Su6QxqqUMdv5DK8cKkToCPKYyvZGxk",
  "key17": "2dgXqPQBsmGco5cg7upBHGCQrbhQZwNWfktBo6sS1Qsz4NZHBHaug7KZ2mEuLXFB2YDbEbDvBKR281gfmFb7AmH3",
  "key18": "5vRCw5Q9QZdFtxzsYRVjnZs8d5wVkPLiwhiLWUqU3nzyY5BD9gQZ4pzW7bQg5HRH2owtUAmF3moBYAp7674JYDuh",
  "key19": "39kNRurhEr9Ga6z1Q5bZkXDv4gVJEzNgNN3sK8Lz5rMYZPV4p2iQaTNvwqBikfRxWBNFsgFqH4bYfLTGZbMksKzu",
  "key20": "31cbLcjRAcMCCAgc4kDfBXh9E8PB7cubqDKv9sku15FAZrkN7sUTgvQjJPKSG47iXn2vi59KMrwhpGsvaYG5B6xQ",
  "key21": "5YEN5D99kemsY4PC8HCfoSAJXghnNqMc8gM6ea5YnZdpTMKXmxySpEYKXfBsDURRu1sckRr3F6kvEWuP4PxqJYrJ",
  "key22": "RJVHPKCLYQmca87bia9ReZG4PhtLjRcP4aYrT9PAEoTS2XfydKByouq2BV3nvcaTcAwhFLv8cYEUs9TbDSKECwn",
  "key23": "663rX6Hv9DyfgdeyVVWeHK4yvBJtpMfBrMRPvQyJqzsVxeELpUX1t4kHFBGK13LV9fJX8xGUjjoUTnEndfbN9dmo",
  "key24": "3rQwcn7YjR9x9u8bpkaQx63cTm6NBCBveCKUZcpEV9B9qUqm1fbwm4oTGk3QjzNoPzCs8HzgUvS5kkeixfPxmoAA",
  "key25": "2xL8VpSTEm4Eadh6vGo9zfmHZ3p5YDZCRENXUvHwsrqyurBrZLZMdTmPp3RhJTizM7sAQN5qwQYmbChsp5qZxGtQ",
  "key26": "1K7HorejJijbZoRNfStbd5H1VVryBZtU5M4k6GSPQ5YmWPquaUqdisfZd8EpVTzXGyHMjjoe1NWh4EPSjbnSGfb",
  "key27": "4QJoRHSZGxaAYHu2vTtYbp57HsemXPUrUgwQkH8oS2H46WqHbRka25EXJmFcdxCSaLksqi5J4q16kCZhAFQd3uEQ",
  "key28": "3vLbPBmezbjrE9Bc38VYZKQ1EzXPpVwCzr6zx3tCkHLtrG3iUFYG7ABcJXPe6MuMY74iq2tZdvPpVDEMfVrsi1b4",
  "key29": "3tVzNFMgfK2UG3GS456rpikchb7RtPPxPNPfnu3CKxH8TXumBqgwwvDc7FcEaBCss6YrUAiRUdKu9NXi7x2fx8Bn",
  "key30": "5AhEstFoWNPpoUYuteYyf1MNS24hHMSqkVSB8dqmhupZ1Ad5CnLEdobfa3a4uqWoXQCwFeQeycp3aXLp8KSfvidF",
  "key31": "34WniakNE6wzG6UQ2SXpHKCi63GJ9Z4K4bMZDMx1sALiXj4hTCtJzV14UesXTUCYz6XtKFSPaobfnwk4ekJMsAkV",
  "key32": "41KwStv71V17XoD1sPxe8KU2Fn9aisgETqGoDTCrnvrrqM8A1scFj5xvpfWvx4ay5vdkE8UbpqTK2o6UT6DrVWwo",
  "key33": "4xUqeXN1ELaUiNZLgcoTFPzauoyXovDYArQW44q1cnj2fpKtrScePx3JzPQZ5rZeF6KcbPwKF9SXuE7Bc4odEqtk",
  "key34": "vCe71ickzGZbeXQuH82h9aepU2pz354B4CY8h2AfBy2GdLgVzGUMZDGR8aNoSv6mUdNMg2812JaBzp3n1e2gTMp",
  "key35": "21QkWSHiAboaXDeTaMvp4Yw7MH65EMhZPrEkEiV56TEvxBmu1k1Rww2xE5dpWaxp43SLia7Xc5MF1zx8zwyorTFk",
  "key36": "2FwGndBdgq9oEzDburRWM7SA7mgEsVgjVZMsL9FvR5wzb4SccVFQN8TShQkMjNqzSj6E3uPdhekXXW1Z3t67Zfex",
  "key37": "gA4PjuYzDYSw6DQyyNVtHzTVFVZwXZEXXRLjEc2CDMeeG2YQteRtMizD5vPtPPMqps88DTVwN78iwdgJB4fkbNt",
  "key38": "5gtUVbMjkSoQcAx1oPGrjGrpHtGz1AoPBERBbGtr3RPgKrJSorsEBaBHz6Q2wCvPuZBiFhxy8TYg6nMQYYNjVfzy",
  "key39": "4iGkKedC56qBvy43W2G7Xq3Gch29PBVCc43PA66RzCjXEKvzLT9REtDqTpyJiMNfKosNP57Y1FZpGZHjkerpb5iL",
  "key40": "3cC4Vg4H365DayBVP1rvqk3cwouCWJMnhgfMVo4aSo1xqAdohMBh8yeyHDhfHLCXJgFgpWRjC16CmTBXophznTE1",
  "key41": "25cuo7hQhVYMEjpo9UXNa2vFRz2NG4oZAaAiadVZQzwFB6Z9MsdLxEk5HhkFPt8CJbE9cHx2aeqvkiirShXcARkq"
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
