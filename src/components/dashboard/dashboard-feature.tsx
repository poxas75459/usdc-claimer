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
    "B4VoBKvEj1vd711s1V5NG8XVsCVWeifpP9R2yzck9MZ4j5zzmnXKiqJhHjf5cVNPYtn7sxzVTovfXJsgiANYLwq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RHRaBbwCGzH3CnrttQzmCbQfpJ2JHM4Vqt11nACoWFLXEfYcxVsFZ3M5kiFX2DVhTL2Zrw33N5B2wR2xmvc2Vvy",
  "key1": "5CWmZrgh5d87qHdEmP8M4pysPyZYJrYiXyVusYThhZ2W2LugiY9K6JzwqFhsJ86aQbXQBNPPASnzGMRgQNXa8QJv",
  "key2": "4LEoyRFuJMc4sgByWWYTpHfMgZbajbAf2Ycgi2doh3ZzFbvqPXXVBcbzVZLQnSV7eDbSkYzYaydtPBJdyzk35TGC",
  "key3": "35atrvHGXoDURvnaeaJgkiDXvoQCtnHujVxKz7mPmMpWfyJFddEKUXgT11g5J6s2dVc2aNc5KTc6KqmtfCBep69Z",
  "key4": "5AEHkDGyi4QyinFyMboEuFxaBwMp4r1yo1ZH4rzxJYoKUdgMDFgqywUmYjiEMy8FeKCakJ4HDV3QS3WwoaPe3Vm",
  "key5": "5SGzX9UaAo4bxBGDhVsDYaV4CHohnkoKWjvCLntTBJonDL2E43qc5keWhj1wxLChjvzGgkNC8xH6Lr6B8tZZfeLL",
  "key6": "VdLyPwcCCfDpusAB8Tiu3Gpt4GmTxmmeKHeCEr1efvxEW7aLdx3y3sapGRqwkAgW1Se6TQkonTbF36X8yb2CKdB",
  "key7": "TJpM8gt35gUTqhJajGBs58LZaeo8Djuk5ojneZRwrkutrXxbvxv9cnqgCLNEEfAfF2cMQA2D2Sxt1FdkUB4ad5v",
  "key8": "QuLhDDbujmue7RuMZ66XgAkSpAFRySSie3MBrMFiJi3e4HbiD7WXQmK4v7A3o5MmVnCMxXKG5ADTT91YrWNA4v8",
  "key9": "5TPXuLdMLtezLovTTCrGK414ShDdJ6Zq1D7dzJoSs7DNzwQoZeMHkPyKRh69KJtThqamFfkGWpjxaUx85jbCPnN8",
  "key10": "3aocQ28Y5fQFMyVywTMKxy4f79HvsMKuZ4CdU53Szfb4i49LYo5agPqVbuUM4ovYFCR2hfZPW8dszTUGufc9E9Ba",
  "key11": "2y8yCy9RjDeB2KLTExYT1kPGabwkDy9VYdKWS6aRZDR191XZ1BdaySVzKMnLX98Z5icBaQF79cyNRJcaGpge6TMF",
  "key12": "2QdtTVdebGKK2EpvZNFSwjoYjrv7X3c1Q9HhdArebsu2Nd2fmJeLepG14g3BfShqJxNwJLrMFyBuY5xmP6NowfmZ",
  "key13": "3v57biVo2dhyLgqS2MiAvk8oQPX39rxKJ2QV7Hp4DYPrChoBoZxjNVKZNm4NQj5FcUBigwuEyY76owWz4sS29NL6",
  "key14": "2TtsuEvcsFnuG3QvQj5TWT8wijnjcQS4nnMy173fej4BGTYLwznD3YCzr5i7gXPemkcJFqEvb4xnhm1TK6zMznZi",
  "key15": "oZ1K4kp3DvAr8g3LanQmTSbneirXqKktuN1fikFs2yKYmt9u3uUqqWWqKgufZ1UwreNLXLecSYeQqLQqYKNWZL9",
  "key16": "2PqzJs7bMkUsdbknhi5oh4MoQrpwCES7HY5CBg9maCXEiQtGtP5diKXCSLS9mP7KnYMDxxPtziShCRQYPBr835fn",
  "key17": "4hQMnZuerD1sXXkWeaGjLhjtQwGNb2K5DhtjCftQfV18Abm9tZVG8ncdWGhRMg3rmskLVXSVPaeGCxYhyCL1m75h",
  "key18": "34mRgUJMtuX3pg4TwxdkZxHzQkgFA7XQ3Sn8dH9PsHoLGREoSqnG9Bo4wxFunTzhTKxKxe7wQoHd3SwRTF8bxo4T",
  "key19": "2qau2oRg9Z2VtLvhaYLknt1UvYJZg1FTASApzeQP85ZiZzDkFALGkrgqhiMo9YaqQnjZhXn81Rmr44x7E2RQKic",
  "key20": "5kRXGJNHL8AJxPeoRYuuovzswcjyr7EN2QCCewYg3JksZugeL2iEGfpNRSe9pXt3SyEhmGkCQutzg8TFfgV1QuPp",
  "key21": "46PUDzNSKRqgdxNF6Y2oVDTK5guB1ykaszPy5Fh3yDeNG7RWhdeYCGjRT61eqPzWjgbXHSdWYmgko3UUk1W1ZPST",
  "key22": "4P4jJJbD4LP49w5EATBB2UngFDeKZfMQqDs565EEim8fQAQqZ2gXM8nHefWSiD4Fn6xiMBFnGh9FRLd2TvMNEcyL",
  "key23": "4XUEn7JVpRp7hSbtMJRbP3oeXxpa9nbGYd4JGPUsJBqoU6ViMa5im5YJwLMu4fthzJQDDUTsfuBsGfFtBp2Gtyi9",
  "key24": "57DT61xHrEnCVQCLU4gfS9zbcKpXzmCUnU87shi89zitBW7GyPFuqzr9so8QyXpDuYviybUqF9E7xTc6dixLMbUU",
  "key25": "3ehUD2dbLsCHMCRZyGaeJUFpEztp9VBYcLoEWn7W8EE1n9HjCJayaRXNu4g5MzHCoznjGnNJ8b66epWPKrA2CQ1n",
  "key26": "NejxzXJDXK47Sa9Bhbr1fg9Y8h9JLAvh2AL2F2FHGLKnVqqDLKWwJ2GZn7xzgNd2xcu4cPfXA4kfP3akS45yNT7",
  "key27": "3PrhpJBjyoTaUR3SuikA6zC8Rya2TTmFAG7PSsRzJZAYmKk8UCCik9oS8PxdAfzMbhLqfoJy2XfExpDytWpaV15Q",
  "key28": "2rXRjw6JZCJQQmUunmeu5btSTHvs3rktvJ6TrwSqvfTBBbuWub8T2ZqbLfvFCK9tXFueVCJTqJCj5mQjZ5uvZ7Rc",
  "key29": "2uu2gBLyJQnkPbgBNqrSG4PTL9cs6Q8DeQej5Ssbt1NMgKsgc3mL7RM4pYn13oUHWQrydLc1ZmWDzUhzaaw68erL",
  "key30": "27jHM1PasWk9Xp4Yg2DuDpB35utdXMqTSVymJF32PyMjDGTQRyFbPvbZpQy4ZKMVqmZ3LXcHHMxyVXVW63hJWXMv",
  "key31": "oL1AfDHrteJsuYYKdMUvJArdyzS49BdmGX96ANPJQjmQZKSF3JR4AjAGRd7BD8FHPRNmkUHhNmnhp2DcTEvzkaJ",
  "key32": "63nKQfnaiRzkGQekTgSV7cNFisZ8iocgPhK6aysuEaThHtmhfUrNoNoBtwQxowXc7UuY2R6C86KLexVN6jtnYAvN",
  "key33": "yKaPJghCrQWAufAMjD6aeBGM7eaf5Xm9uDrnvmcPFh1r2tepCeKB6CZkGMGwPzS2LmLkm3mEYvadjccoAZjZroZ",
  "key34": "Qcc1UWmUrLEJ16AhvoQG2qiwqAuBM4eqLvgk4srTNwfcjFWXgEEWmYjUZ6uC2SJi8cEC2K8DvzUFNiJXAonQi27",
  "key35": "3t9n44LVMMg1UmAXPD13JbkAZw331CvYBRxQE3rcjjsVRCQTCP6k4ZNSgwBcKPbHWH4FDmXKkMpk6RNRberRUw2q",
  "key36": "26Htg82Kd1Yp4HWWcRF6Xqdna3wEa2koLy2HGWWeuLruNPzR5XbWQSLoXAipGX3ee9AzoAA59k2nQeCC6EqZzroo",
  "key37": "37vfqonEX1XLWt5TVtDM2Wtc2dQ9ag1xjmsqnNur4gDsUbpMotx9ekyazTnkdDfGxn3AdKGxTEBCLXaFhbV7KZtr",
  "key38": "2Dj48w5Abi5jELCPLP4pBDeEb2ToDEJv6wDyYXxxS2HCXotiPr5Q8c6sCxCwzbru6wrUoWKfDXaUj4eDS2UnmZFC",
  "key39": "3UtgAwoQhRFvBfiE4Mxydhsb2qFMkmR1ujE21mPBez1ij2CrBZzj4ji3mzag87PC1fTcxvo3rznh43AVLekfXQpD",
  "key40": "LiLiB8jHJxvdRa5aBgY7qcBwRJ5Xoew65aYdEFYFARwcdvYJLXsL3hXBsrd5xowRpmQRYveL2HqAHh1tvmVLzs6"
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
