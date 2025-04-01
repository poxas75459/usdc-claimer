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
    "5HRKKqgHQ2j2W7x3bn34fWmjp8bPeiN2ngJCNwf6dSLBP3wjQuVyyBDrARZNoTxQL41DsMe5DBReeF1Ur2GqZyJf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wdBAZ1B6tdRoaDJ6HAovTanAzBqq1Y8D1GM97AgbDub2LgReK7PEBtpYTgqcVasUjTVLmfy9s3q74nwFMn5UV54",
  "key1": "AduyFExTLWR99Nkpie5WouaSSDQXbTWjLdn8VAGkwxuFDBfkvXgxYzNU6rgarJFAysapqnuTeacD9FDGCE4wrVF",
  "key2": "2Jc2rZ5JRRJsipQk6ZQwPAkFst4gp6gR2Xw9sPTAvqZj5UtPiYyGMsZWGVCZiGDrgzvweGuP3U2Q8oVKk6jd7h2k",
  "key3": "3zjsTeLeQz95WebJhSqGKuj5Ynuzg54LBtwNRSzHEqbyGg2qeGEUJBh1EU8qLe5rjrS8D62kHULKdx6yLXgmF4n6",
  "key4": "51FKeQvbfxd9QeyLJYpyaKEzeQXiQuhxx2az5vSv5E8AmmGnbaLvLc1ypf6pHU5Yv3TXPkQghWCy1ApfeNGeZviN",
  "key5": "hGBTMJphRnbstacR2iwV9fBGqAfj37jMnm9pqM1tQ4Z1SzDo5GujBsp9VUnuc4oYchYEn4tNFVCPCHbPB3QDFic",
  "key6": "214hYKnAHRcAv9ZRPcrwJAKGihuZjfTRQMzAPQ4zieaDeANj6fqAb6bYEmHaNZMoUaWqmgGURC4NYqqnQKhdw7ba",
  "key7": "4LtvVzNYqBB1dMzdDTsvSdZx68UauJ8guyRR6CgQnV5hpFjGJNyHVSyrt6JMJvBduHoJqyj99ChgJ7JWV6xYQEXq",
  "key8": "hTEeDUihd3n64G7uXjR2L91hAo9CAEaLEQ86uX67FecZJEHSgNsJFiy7Hj9fGzpfAJTeRZjZxmjvHiTk3Yp3zKS",
  "key9": "64hag8iKCmAwn43eh75gHLchTfXDTjsDu3SsnMfevfU2SihLM8x1NXAqipRmP9aiMRUnwZAwprjH5aQMCczRuzJr",
  "key10": "4MJUGohTjogrRgGiWP3pM8jwX2LN8GstAmrmGN4XhY7D8JowgrSwgp4chXUtKHkXnXZwMrJW2R4DuVMp2dYJXtVv",
  "key11": "61YuP9H3qCeWDfCuWr9buE7DzTv7gymbAqAvxPR9VgNAL9ch42co5PumbGCdkrDMcb2y14bU4y3gwNQevqArnN7T",
  "key12": "49Nb1iqxrV2iyA4TPXgrvQ1fAYQeHnTyfFM21M7G8vk2rfYmW3cqdijS7hEKBCjwq39WqBXK8i9KKT5jWMpqVf4C",
  "key13": "4JFCTsQdNapYRinffaX9cJ3sWAun7yh3DHH2Fa1AQZHuXwNtHRKhWUsXbrrV6gS6JmDr3FEaF8J7mqb98PWhPwwN",
  "key14": "pVcENQFBLV8tVY8VGrsSZjaJpdDuKUFaExSCMyEz2VSHpdWxtdfoST3gPTaX1d2CxoVPG43VdnhLC66xSRcBN25",
  "key15": "2zbqpdhXjMoE6P6xWcB9iZY1wEA8a8jyGJuTU9MyYn2PgxxVZ3ekh1ceHMBGivkT61SCkTP4ET43W3TwK13ss5mY",
  "key16": "57yh7zjdVvMgV4wTHcGCypW2E7sJuksDzdu7JnQdPaGMnHZxRS4ZWU6KmJTdVMG88Xm8oYvvu4UF7mT8isH8V6N7",
  "key17": "3H5KVfGhwwBd9jahWttFwjvc8pXMmPeKSx9HTsY1hmT3ZsGVuh8MJMbb5UcVmtAVGV5pVnkUX8W5q4MF4D2G3CKe",
  "key18": "2Y8awwSKHzq4yHKQnbuMoGF4zxGMipawV4cfqfySoN8AN465vQSwALGEThzcCkmBdLYp8b5AnWGJ5MSdXvANKf8h",
  "key19": "hPDZUqkKUbx3pv5CpsgoFD6rTT3PW9xKxg5WBy9n5ALTXWrRzSuMBG2bvz4mBR9BWR4TFpbAbLt9tNVpbeRt5Qq",
  "key20": "3WkHN7q8iECZakhxL879qnp9pZLQDznJVF9H9kovny4mfuqpQQEsH9yhUNaNKqW6dTNgxmGwKrmS6E4EKSN3aSf4",
  "key21": "4ktUqzRi9NcQu2mLfSd4LjD52r2RLonduZq97eT2bAzGFUM2aNz4R3uBiPBwAphFHECYL2fz5XnkQBGVnC5g9gqD",
  "key22": "5dZ1j4agty6M9Lw6F8dzkBaVx97o24KDaR8GjZyEDSpk7fvNbCSinb7aT4ZmLyH7BFRvgSs6mEAJy1xGvmXiG5JY",
  "key23": "ZRefbChnWnBL273cGwWC9Y192mXLWwx15Qtoo66UgvkG3F9yLjjRpvXZMC4ZcnjZzNpDkoQwWXkNemPn7vSHw5Y",
  "key24": "9UMSuiYPN7jxie3SUAWz9YjvVXC3bhaKogKPA6nBLbVuayWyNgyoDKJ7apgkuKzQY5gqn6mcw8RvERE6cPH3J6y",
  "key25": "2crMaamMcwFXr818khzTCrCzH6S2hp42g23o7EygvNCuSwZQmLPbHQCVi4FSG6SShk5nB7hdLNqECiazZi8kNkPv",
  "key26": "3rL7ZchRMUpU4fSynpMkYTrhWXkCg6PZc952az5w6f71Fy8sB5bwRnrcpn5p7ZCUvQzbPXtqqnXLAA9pvux9fMS1",
  "key27": "5z9nxYjLVkJmx8y1Q8BWHti11rnixeZHdxuTJfvk8KMYmk8K8dit5WKXPYrbqURY2b2a6S5kWuwvW9twuJzrpoZD",
  "key28": "5e5HxmrjWCBaFXqKzbSA4BMUPEVeNiWU2R5L5JF2k76wGXKdE7AdYpemrtGJW2jLm1TnxJT8Wchx9qDCaS9e5Zh2",
  "key29": "46XiKS3LmxUbwuPG3KaJSGepEtnUmNP7vCebBMnuTvqLp4vTu9tb7rkRwbcMwPQStGkZVycsEeUzcFS4ZUXXFSaJ",
  "key30": "2oWX8t5vVzXVMLHX6nVm5xEjbB2v3iF6qoqdVhtjF7pV8j8fAmE75ZGY722j1XxStMKVBzzYdVrcrhCiQa3GZJ4h",
  "key31": "2XAguc1vvGDL51e1bFPyj9Txct8A3qbMMUyhAWnpKspwi8kHDu71BdhbtEaGsb6qMsXqgBu3tSDzf7Fy1Khbr86e",
  "key32": "egYiksWMFpGRP7Q7wXNm6on2Pz2RCw8m83sbncKqSexDjqzQjKKHLWsWBviBXTVW7HPaNJ2cXB4pRbGV3SsgFS1",
  "key33": "Q2cmYcCdnre7o5EsQhMKdf2sNTrJAGbWs37rZR5MDE5RYE6oXrwkZeQYZkaUHGur6wkvS8gJKHYTtuVQ1W1fspW",
  "key34": "4PSY2gtRzaz9gj7pUubVSdqkGamtvUBzr3H5vDVoc26zuhFwBVHkoSfz9M51QgiY4tkkFDqQ9NNqnyXLdaAkXDRX",
  "key35": "2VLcNT7YWhiBzjq4ALCUEwWcjpjgFpRpwXhHE1GBQzPCrPnKXoaKxySfMetm9q5bTbvWdz9sAQcAzZACVtVvC5F",
  "key36": "QQvpAwqd43ZPUPFzAx2hs2N1M32XCjJDKDdULBhrZGnfEUAQN4ihjFX9taEBjQKMZqqY89aWrLQkZeAYRBktGi8",
  "key37": "4dTBkpd79Wfqujsy4P9KfV7EYGnbMutYNznFXfozG7p7F8KzYJeqZr96d8A9fCiRrEqa2oE9AdyoJV8wJrA8Lznk",
  "key38": "26KwHdYXpN4wkqpryFbwXzGVcQJNwVKqYM8Jm8TvVxRqF9GS3gvLDPsMnRugzAAQ9aAe1Gbeu1fwq7f5y5ftxy1N",
  "key39": "5Aa5ZvowvD8Z3bet4MPzRr5qa1c7U2MGNgj6iLvLkPg3BNijZkUTbYRepTNhFjUoe73NBpnjeTRZxPWMTyD2BuXE",
  "key40": "3bv3Y2LBN4bP8LUY1ZgVbV9RRGpJJhE7j5nq1xoRDiRky18y56hebynmwPZqK83N6J71sbS186RymxQcNrcGYPyr",
  "key41": "3Eu2VxwGvi8D3qdWDnj8fE4G2ncxDeGtBM77yXM8sJ4zMkbZ9WEDVHLHaDRUg3sjkMhnNVBgYsaGrCnqPVsmRBWg",
  "key42": "5RN76tTbA8F27Tme9BdSh25RrNBdGZFvVKnGrRTfuPowgQK1aCw4UgDybvfdEnfgTyfqHCZ1rNt7hRz745ZQ1iDK",
  "key43": "2GodfzxP7kqVRhDEvmev1vGv1mgceZFyJRYLc3hJe5MgR3wCNXJHfcFcxP8RoMsCc4fW3Cw2PakKdRDrPK3rzaQN",
  "key44": "UUVDA2Tftd4LEab4WvdRwZkStznha3J4gAmCuuVSNiiV5bYLR47KaLsMvsbLE8NCicrRzNm6EwpTZ9Bhg9u8tFD"
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
