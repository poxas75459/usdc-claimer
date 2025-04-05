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
    "5Gv5vMeVz8fFWtuFga2R7pEFNbrFaFB8jtYp6FTrYyszfYsv2rbwhDCu6ooJqVeJn9tc6Rqck6hyGQBMawAGNZx2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fFChT5uib5VpHpYFY2YqiZ1CNJiLmVwPVAkrFG1Xs6ZPjWTtGU4zQ9F51TUa9MXDpkYwDZpucqFHjR8jrvFg888",
  "key1": "RjfninnXybsgVZ4o8oN2wyGD1UQZ9e3EwXM8ELFaACZGqiNzm2Sm3go33CCZYvoHsQCQRnMEnmRqueEBYLwsWCx",
  "key2": "5cEyHCJQnue4MfRLPMDaGJVhECwWuF2wTTqjYE5Qa2CvFsw5DdmqwkKJS9sFu1sMCKaLG2LSn3FpctSrzLhVYoLN",
  "key3": "3CiSD27VTB86TMKJoBLh5PZu2sRErPJr33DWpSb4segHBv3LJZoL5soaUW9YKVadYAS5KT9Upe3qnamdd9yWBobS",
  "key4": "3zypUjtXnjy929Bos7H3Mvrp8rreyAtekxbf5RvRR4uESw8zS1aQ85ah4qmwBRFoiwAC8cAwjojCWuDcxwCBPk53",
  "key5": "B5MBWVG2xQbQjyobfPFanBV92MjVU8wkJpUbQ7rvrYpJhCXGTTAjjQfhxYMif7Qko9L2W5GCss5mUJ6CXfF1Jbz",
  "key6": "5KaTS3sQsxyRMmp5RMeUgKTDDPvUtNVJudeRpCbp4g5RnghBXNYAhZJyRR3vTkwQ6bMD8avnUxJfEbJ1hRt3VJNc",
  "key7": "37jDBPTK5U6oP33dNoi9yqS3RXCUbuEuBr8Yd38z43hcKqkvocoNbsHASuNrbwuJWfpzXhrx8LBRCCoNWjsn43AQ",
  "key8": "66E8GbEGM3RpKryHh9pzL1xkF5FnH4xpKkxPtUHGypvqve9hzWmTTjg27sSksAzTKyxn1C9wEK5Axid6c4xrYMNS",
  "key9": "msfEoYYpEWkZHfD6x5dt7tqgbcn2qQrhHMtTZFoo9aEKReVEakiSmDZrtajRKCdfb7R3a2eurim8aCWTUJLbK46",
  "key10": "3YaQxh3C6QRxkPNFwXPzpJq3PFCp5giGFCRBxqHJ9eqbWNgCXKiijoaEcGgjEpQF6sYY3T39CU4Whkz3E7riVWYq",
  "key11": "5exD5ozuEEkkjBKgKwd4ZQpXwSCzi4m3VXfLBdQ12vL5MBdWQKPSoct8fTDGDWp3By8yxE2NxoenWC4GLeGzCydF",
  "key12": "4XXPgs8LamRdkceqKD1DM2hzG1Rd1ocLLRJfkoWHJdLQKYt8z8w2HDby4NvPxFZLmpYMjxNDqj7N7EXHUiSB1bG9",
  "key13": "21144cZyakfXUV9SrUms2ku8f6eEGQfuX4mf2QvmMA2pW2o8J1zGhVy1zqwtJzdVMAVPLGZ2eqjmWXJZoc4sAYmt",
  "key14": "4L4zJYVMi2DfTw686ZMmCwx9N9rQcakYcctUJfVYPKrWrKDmSaaF1w5BBtWG5THSQ9qx87whVJgmS3KoAsCYmtQK",
  "key15": "2HSPSx89b1abvHxwg4f6qkGSf31chUuZAW4tb7y9hF6pku4UbVYBEqtSv9cUXmtUbm5egvawCHtj4JTzBemfNT3F",
  "key16": "2ZeDZkKkqMVjUJkbKJ12JH7rHyZBerj8Di4Av2kiLRsqbkTtPUKTfXLxurCjwGugxhWh27ZTGpiH5KbE2EyqxNRb",
  "key17": "3xtQ6E4EEeN5CwTZ86JWh34ZukXrW98tKyhF8Z6kYn7Uuq9CFvgurAheChbus2hncoBSJ7zoQ7LUzGt9RDkxFA4g",
  "key18": "3ksrxx9zxppFetMiNz1DDK4nrMmGxgshTqbTiYzjXtVhRuofynE6oQyDMQLGkeoNPBLuXWSWHkP8DhJfMuxsK4cr",
  "key19": "xsXr6EwGVAbCq93GVt7LE121ucV9WoLtiJ4JWHoB6WUKgiU28p6m1dmLb3pYRFZFoNpi8Q75kbEVY27GekXT5nz",
  "key20": "2pcUMopxL2WaCpiYBTkshdAr8qj9oZW3cHJ21icB6zPStcUnYcHQRKFkyHqQizYjJrHBPNWUsVK4Y3cWcbK4W8Nt",
  "key21": "4gFsdY8irWwaXQo6iysbaPHFuvsE3DNKNp5X6mt1s92Qe3RiAS52XLbeRcNAcr9n698YudwryCK3UuV2mP6imn5X",
  "key22": "KRz1xeQSNUtki4P9D9SabE1RGJ3xTyxwfjL14bTJ6rxKCeBEPVwkUjNHLerxdi2s6TwPEFCmWRHSP2fHP7efepd",
  "key23": "4Hxh38pBwEtgApPWx3qHzQRzRvUvJjiDW8EWBPhx13v82iyeRM29dbDrJjghQRqeCza3bWLDazhse9evJSM62Yos",
  "key24": "3GQ5HYxqQdsFCTN8qQi5kPBfSZjZKmREZLLq7kcCDLT6vP4cUJH1BGdxspuPn6vRRXeCgDCuxa7h91Vpec2mHdS3",
  "key25": "3cjxCfT4H4NJAJG2My78ZJQb22UvaELAKhg41D43yaAh8WAFSGbgRo8LE7nj2imvB1QzF2FhBrxQAmWW2qSvbayb",
  "key26": "5ZtQihqfokL5MQeSruMTnDyJdxW2GoEXLUDWQMXYNquNJR3VVWqjEtsseHd8Q9qwz27mYdjNpwe8mK9y7fGYeU3e",
  "key27": "2TuxdmAy13tZSxVGyW3t9Pwhtm5AjKapaByfctyn83YPP41ckmsk2jCVsRz3YWxWnqjpTh9Ue1WtS1jjyoZukMQV",
  "key28": "XmUUbeviFWN2RXab2Rpk1XAeKPWJ3urvDJE8tFQnDz6Ho2kQqWJVCf8YXJG8ZP5ok8ig9TLvPBD5Dhd1RnsZMDj",
  "key29": "546xc57djZqRWjU8QcZB4APcYGR8u3rSVkbD4BshZdKm81WXk4HbqRiKRcsmaFwax6LQsVbXYBnq8ZwfVMX9fRvm",
  "key30": "5ZCpRaztWv4vKECMojHauSRFuHhXUxo3Wb3vcEapC9NQNfv4kxbQFP5LbxLUhdTrJX78dTv2Xu3MCELQc24CV2kM",
  "key31": "xfDvofJB9egvxie9chhnvqemtLzFbguSD4Xj7k8rS8BkC7k2caNdEpF5SJDiBRMAPeCpXp6iPxGYcng8XGqdnd4",
  "key32": "3U8mSV1nGhWwgkJRAtb6AwgRAyRLEfoTaonL2anYRdnSr3NqMCZujvhLVeJfwyB9DHDPVT7QQztp4iXcM7ZxsZ3z",
  "key33": "w9xmRmFigTpFU78d1hZXpDSJkfG3dvSQVjE7vMxXEax9pY4FTWk62fH19oFxB9pWqLzaG2E3tng9geta3fQGwkW",
  "key34": "3DFdjGPdZPmeHVkp8xRFJU7UQm26AAu3AcXpANcNgY9zKCy48ZsJcCEdCQjvyYEDBJFNEjQ5gyfnE59MNxtHUS8W",
  "key35": "2dUL37qgGawzdm46EzkEgFwgDVr5aPPKVksk8WWfHVhu55VUWVDv1j5nbFX6Ug69eLcERhzDtfaD3tqoEBef6BXQ",
  "key36": "2kzRdcF3ttHmpLd9ZEcWDdExonJdTSL5qTb2GfkuLdoZNZzxsXFgbNXuo1LFnqRSZfVNRrE6Tj3GujcxbHtvycPE",
  "key37": "TMvjj8WuvJn3EHQV33kiuyhA186UMF3skTQCyrKTBXgfsjJeR6C3ZDUcmXeoVBrHR975fAXwBCGtZgbu1gfBVzf",
  "key38": "3thMCD2CLNbQLKx5JceJoGth3ohasMbo78CCUS1QnumTuutS6qFYBmeEtqN8mpMpS6qToB4h4Lo4TugBfFEip76",
  "key39": "4UgbFNxXd7UuccLiq8GaYBN6ahHEPDp5G6J913SZHfsRHxCX4GLMtVVTDzPCgM7e88CeT1qbHPxtW91E6saJd1TW",
  "key40": "3pQm67rvaCxjFhmN9MmaHdyKVAbfAiQQo56K9kqN6jhcCEb5p21Lz43qFmRBUuhj2tm4mnx39VhJSANTJMepe4Vf",
  "key41": "N57eB6AnSLiGTihCQbgakQPiSHCJC2JE4djP7LEtLtUg4jN6dxD566HWgkupEnW4FLeaPttQuzUCUsqGAaDG5zD",
  "key42": "3cpsfq1JTTJVAaWkMTjREDrP2a1ZwmFtFuSdmia7ibd5JQpYza9pwtCHUTZ2gjQLdEecfaH2L962doehoNRENfRZ",
  "key43": "2nLAwJCXAnmW4ZTs9rwztaeCJkSnH4gxJF3215NUjz47yShU7JF8LmngTjDvNt3amphP1X9D5CSk6yXfMjVczpBF",
  "key44": "56EPsyZAsFYCwJR8wGH4kq73H4F8YfctZpvzCAdhRuAGTPqTeYNLrQr4z1pcceD4Fw8DYeM1ro8L5RXitqhemP1f",
  "key45": "2FbRcbeKS2AhK4rr1nMjsNJrhibWhSSm7SChKqz2YfofesHVnGzF4Z67UMENRHXPzcbxKu2g9h6Hh3sDhuSbbg9y"
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
