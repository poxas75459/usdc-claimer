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
    "32Msc98NpJrTQn43cA7cdcsnogqEbqaSC6dMSuVchKqaN5KFjzxrr8FyNwrvXcBkGMKzSQP8S6dqZzm6fHEmfgN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VyickBNtiz7fkSh2dT5duH69Z6xjwVUJbePtUAnmUJHPnQy1nVgfDZAtjZ3NWyXkaZHHBkkctNaLMdyZNjf7orn",
  "key1": "s4HJhVhAsYGVGBu4FfXMgZAoKWjatuth39VYukJrJX8U4wtprXaW9f91Tv8uUoDVRujUW1RBUgonWSjN9yAiohY",
  "key2": "amidWq5xSyE8wwFa9FpTddiwmXVXWfF3Uzjz5dhBzUeeDp72U1TDjHY1hpE2bTvLYe5x11tsVkmK2X8joJc8CDC",
  "key3": "5UiTPGDp2Bk6e5RqNk4Pcw6thxvoHKWXpNmbN71NbMS3UiTgEcJnMAn1vxUiL5hQwUtMo8psRHvLu69muBWNbJ9",
  "key4": "4Utk8koPGfLHc1kPLZ9DTFSQuHCLCvzesf8c1o2Rfi6jH4WxJWZ2rLGc7tqQwRJdrnA8ysm9eyaBqde2kyzaBpgt",
  "key5": "5Fyr2PKQH3G3mndeEBUc9ryvnEu5AVuXgGyVRVgc6TekCSoME3ketWqe8AN65K445aqGn3fxSh5nVyF1CPFQjsHR",
  "key6": "433wcFP5aqGJMgnPvuLGcYwqv3MWHmcD2K83ERBynDaSvQX1TTb8banSbtmKJGQ6J78WADgpyZieLvcNpPvxLhgZ",
  "key7": "2P4H7A7pjthFuX66rBFUXQ9Mp5DS1MHDP9p6LMz4Vtnb25RdJvYJD3bK46A6Fr9ApAYGWmKXJjWU5jqWfkWtNukR",
  "key8": "5Ea2E2nxStfwA7CLMqKER46oRohcRPixpAfrHKiSFhztZLpHUBDodyBA2exXymCqZaSn7H59TeqdkDG9QbqDBiua",
  "key9": "3FQCBFvBdF6K9Kknh2cm8yqC7ikzrrcdgJwm3dJwSo15BsMjBcP6TXQRGLwvCmVPigJt3TSghXx23a7YCrLYQasb",
  "key10": "4rHWgxa7GSreRMeyctnBijbdQLCBwd7MBvTKjJtGLq17dRPJBEGP616ReT1EgV2fdHPdSMMfSy7uU7vx6xTvsuQ4",
  "key11": "3JSj2pVSqo6M7bQWNwWP44Ypeh2DnYqRJeVD36WaZ9TKKKkjPbJyDGp1xcxDxjro6xzEbeppmKg6dtqmdx6xkBW5",
  "key12": "4bvtdgFMvffdyvqYsBBvqKTn2NbbZ5yb4QiRwQDSkaVW6LasD5hDLMBbfeZvGYtdgyubD1mQ5qkRq2ku8KunCbuw",
  "key13": "4VQCEaUtH25P7879jqLKRWfkrbVSe4kxm2m4J81zHfjUo72pRJKWSDgAQK4NXMuCnhXM4MiqPziczX3Wk9FkuDe7",
  "key14": "3LYtQuqfjJzvLayaSuGUTbRdm7mfRLrCMEKUmdw6SRbECP4Gp4npBFh9QoPciH7Ku2BoLE3FSjkTsWjnENMgnGsH",
  "key15": "3nedDb9QM28Jutyu21WF2uTUD4vvfVWfGFcpfRWKtL2Fc381HUNYK3HU51UEnQY8WwQvKtEe155GVJ7PmHXbjxzt",
  "key16": "5QR4SDafTiG8bssTi3zrUcUtLfEsaDJi7Z5B6P5SHeUqeX3tn1PZnZtJRXaDf5U9zTWxXaCHZ72dX4QDR2k7aeQK",
  "key17": "5vyWZhr6ynNBqHBba59gdvNoU5PxQ7xcJ47C2ZLMeG7dn8JvGDmvDzQGnqM2EeNZmnqKxz2QaWkVBGMq7zKS8eQz",
  "key18": "5dz9trPkCthDkFbBgvmM42JbPKCKf3VDpkyUFecJaafqHqfW2Gw4p8ghr9auSqrb5xCVrVUHQSXoBjqV7m6CWVT7",
  "key19": "exPuDB7n6sx99ELtFTSfTe8oLUW75qirJtkUmERqeNqk81egUCB5TExFD8o3iZ9XeZUvrMdVrnq5cFcJheEoycn",
  "key20": "mXV6bemp4dpbWothycVdNRgnWii6Scj5XbiM7XrU8RsjcKjMfFx33VQbVjShVmT8eFS2Rnc9kThd3z8JfUjdSLG",
  "key21": "5E4zr5W3g4A4Rio84D2zhTxbc6eJisdyvzBCEe25Dg2Wjk9qjaBBC2iJxS6b2G1kuvPmFJXA4pq6Cxucwchhojmz",
  "key22": "4JJR7ebKorgKFT3w4gnVvJBd9K5AAV8tGQxvYyYJCrMwUws5sfLJdajyQqvFz6RDRCegEsj4a3RDneXvx4yeeLYf",
  "key23": "5P9Y2PGrA9FJGoKwsB5t6zHofWsndzVNPSkg6VLA6GyeXdimTGakgGB5c9EfwZyaD51PRAjxjNLfUNCBz6ZdwCLz",
  "key24": "2DowAKu6U4ZJLQKZpKgFn7iXSR2dF1Cbw3xMfgXNCed3Asj2Re5S5n9jTHN1qzS8XoDJ4qXPa8eKiLgZ6vibaFo7",
  "key25": "2dVvudc5WHJWgd3JRfTY6q8MnnwPiGo4TxF3cjhNuCcV2aZZhjwRZRLNib1cwhm761FtF1uihkVkZF6tspnk2CWJ",
  "key26": "4bZLGsKFTc4ixdKRzBd5AvifU9iYUb4R5QKBXxGXRwv98J66Nu68cmQh3cUn4ZkcfUC9EKtxKMMfALjdJQmhw41M",
  "key27": "5NVjAbKDjFvWQ8aKJQtqf4K2ysMW4Yvr6VFJUymgsTRAnZqivUo2mTUeQHXJRGk7TxTzmJaKCQwuVduHBrv7QDmz",
  "key28": "2mFaYNaDMMKz63grRcw6qmWoWbYZbKxzJf2pzBd4gvW1Gyfoajxi7dA2UPRDzRyCG7efMjjp5nxWHkchSWFWeTFR",
  "key29": "2LzjiZAbbHD52veiuguq6ZHR7K8RxJjXrv9zKtj8Nm18FWD9zmRtchCNBT6gGEXXXCDSRYpCdkZ1AgStXxBq2jLD",
  "key30": "KcxT5pZVgSa8upSNgB3knfAU8GVMnH1DNK4ffnoBa2aXK2nFSXcjeGeGppSwuPLX2mcyCYQdXXWfCi985BnJdiF",
  "key31": "5GWsvBhpseSXNbtmH5rjqmyb4GtMdcdZrPc1BJbMZsn6tVpmYdMzx1ttutqXKYwVbhPRx6on6TaAwHuSivP8awep",
  "key32": "2degsa2hywnLaNW4UF35nhLaDG8PvFtTu5KbrqmbjUtkHdrwkQUgfUj48gzPeSC4P4FRPmgXG68bYJELZckrt8sT",
  "key33": "4CShzy4Q7FMoVfR2CKkFSZn3Uaevu8dxt9KWn9z4vW3ShxbQsPMWJHhPUa2hQnRWtpAxBDaagPyeo3zieQWbdj8q",
  "key34": "5ZPShTjGmZt8X9LdS3CWVAJgW2Y51BtF9RP16kZK92hzW4WZiuJKPgUscyg3E8BhbdsRyiy3WV2DZB8dqCgZ6oRZ",
  "key35": "5WL8KsrbYN5EPsuktySqv4JHrzrcRVWzUrcM96D4rzRrqMxCedGkimMC1NYQKWSkV8zoYiRSbhyHU5APBU3Wmkay",
  "key36": "2mm24rtQscHUe1ng65i45AmjTTRkeifHA4ENXEwE1ZpASX68xYrsxXxMAawwgQUsEwZLbpCCrEnB1iLGfnCKHAh4"
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
