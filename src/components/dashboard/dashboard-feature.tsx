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
    "JFAg2cgo1CdYp3Ud7JGBbNPr8TSqnMAxfEWMueU1ABp7qeEs3ejQwWLgzhdRkL7HBGVu6oeJhV9BwaeZusYhjx2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N54sYomSg76EJHano3s6gitQF7KYDx84YTUhLKePE8ASXHveTVBvzHup2RZpHnzV2fmLZ843QGEUt5f9y764N5e",
  "key1": "kE5Fnt3BmkJNwyU8N2m4Cf1z1vFboPPBuvhWstBTBJDLZ7j5fCQnwc6BbdWNYWPrsiaE7ZP6Qc6jSkpd7F1dkbL",
  "key2": "5zFchwzM74aaxvY1jVaUxNfUPtoHvrgpY453ywaeYBEmtf4Pud2qouovhrXKZ8KamjZH4xPteNSGcXKAnQbd9Qkp",
  "key3": "518Q4Jgfe8eNcPH6o8dYT792VgBe5qqbMz3dYb8PM3wfwfwDR9sjxuoqbPM5kzLiCZy19raB43CX1vZjNjCv59Fd",
  "key4": "bY6xdM4xrhjoTTG1gD9H4VvQVZJFp9HKJftFGY8zLmGmNc4RkmsnLpFY9J6SL6GpUCFQkp7C2z4FHEMUCb72qUR",
  "key5": "JxYrWgshwQPGDhDqt44vaJJ32jUA6u11vhTJLNFqxttUj365Nm7FkSfR5ZQpUWj8W71Std65uGXQ5TgopuPQwY3",
  "key6": "W4KVYvvfCSrCzmKCVrSMM3rPeUnYCHPbkDeZC66CLbCWqKJgEZpEpmYVbPfZkDSUbp8LH4bKNgZiAoBbHQMcSin",
  "key7": "4QXuWhX3XAe1EfJbRWUwS6D5vVsXFE1nLNE72rw6Uxg1acLtufQ9KCCd9cZFstaDfbhoHZZKwCwBBiJnaP5WxGrx",
  "key8": "qs5pg7dBtwbba2SJ9aJ7myoA7syRg1qLG8fgxRweudcCVNmtzG5i9G9QB4LZ6ymzsaWLo4ZLHTHhFhfLY4U7sVm",
  "key9": "2nE9ootGpM1zDW4kXcjtbcR7KW35iQtRavdGc9c8nAP5XjktHj8MCLx5ZJMQgY2aQuNaALaDdAW7YU2QTfcR6tVa",
  "key10": "5AgnYKdQc8R6QZ9wmawsExgTCPaq76JjDuNRHu9hCERTN7gtGX5Pb9YViW2QvZxC85ni3rzfFxdnnQ5QQvJqjRKF",
  "key11": "639CCh6DBv6TEz4frvkF2DCmdXpPU4BqrQtd7yZ2yBKGBnVdwmhxojcj8aJBXRKtTxWWjW2GNcFpRqzeP83cs3Ao",
  "key12": "4k3sMMNBVSTn4bUHhXeBkTqrEGnXos3fakNKiCab8YzW1v7qpd8ViBgd9oEMeYMg6j3cbAAhE9BXP1bGxafbiJG2",
  "key13": "39EX8iLcAWKU8LvkeG4MqPe12qitav2eVAxcnykGdpASZdmUNgTpuEBAwNSTmsCrVJQ5gZw6ctukxXCXfdfmLRhj",
  "key14": "2osjrqQdwd3uGaAckRVYM8goQ2Rbnabysuv2nKHXddpUnGjysG4pT3h3hX8bTwJHu2LgdoFap9B6x9e53YAckBNJ",
  "key15": "BUef39afkhWARv77uDtTYBbhig9VjbEjNSTKZvpJtcjN2HRahVjaq1KnJbeL8rg5HKkufc686M8Zati5RdDSWt1",
  "key16": "5D8teAue71DsjugW9E6QsUhQhtxa7EnjdvKScA7YHDJbzjco6XQYbwAnA4UvoQN3AGJjTKeViXL2KkRWGaaHK5Ts",
  "key17": "b8PYgQj3gysfvSCKZ3HCbBsUzGCpaS2xxGpDH5jwuK6c7ja5ojtZsEU1zdvLjPSdyTYh7MB3FirZC3sFKiF2UUz",
  "key18": "vDpMB8odZMCvpzkKNBnqzT1s3ENy2CiqyjQTAdbnvrekPTP6UdvirSr4ayaSUajhW4dwJQj57Rd19bncdz6wuW1",
  "key19": "A6pxEv3mXzpWh7bZTTQNsfifWnnZ6icbehewAMVspGCnQ8BxfQePtJeSM7vYFQ9tGDjNT7xFhk7Th54hc3MfC1p",
  "key20": "2CeHQGgvHjuXs3AoVAytPYQoJPe86SWzzyxfQf5zyUzayQUS7eqVu8ut6nktDYyWvFqEQfiufvKWoC3ivGtZe8Ro",
  "key21": "4f7Kf5AorX6TSiUMnLfZqKCYo7nPLPHWjKbyN1DucVCMcpe65YxPNcYiwJfcApDie5xJJCwkv7kxauac23A1KaS1",
  "key22": "3wNYj2GmHeWE7CjVCrKShnGGPixugr4sxoRo6frHbPmGHVFaSuX1zpL8NUDDzVCThoRJd2C3LgXm1f4JMVo4UsK8",
  "key23": "33WDFWBbXpbK4F24aGLL48hFrJG8TwMrXK2xcTV5eFwZpRznkH2GVp8MiFVkrjsb79gUeoabTVx5mDmNj2Bws2Fp",
  "key24": "3hms5K7h7ezR7oPQGe7MPmZEBv2W1dE7Xh7wqD1PCXHHj43CnQ4oybcN3QHzLPkPmgy7G5EDkBeVNKCUWwKZ25MN",
  "key25": "2NdT5RAqz8Sjh1DgywW1kwxCvi7gNuYVkzRf8Rkhj93zpEJ1oLSqVmSGLtJPBW3ym2uhccLRZ3Gv2fzZuBcpBMzT",
  "key26": "4c5brMNuKVnoQhWNEqvqRsucxohMs8gFEdR5SaLM5LbLjyZez3frfeQ9oReCLCpjmyT75t2ZXG3mud3p56Fcs5bb",
  "key27": "5qVakJEfQUKQBSALqVfFeHCn3SQC9LtKWaUdvQbwEKVbTCo3D11A3CiGKKAKtX3i79ummckSSEdCxaGfBBdzjo5N",
  "key28": "2mTxCtgHUKbYhanWqCi7fTFseZUfNoieo4vUbC82tKkv6FqXZvL4yC2hMUBM7ndhrA5xmJs7nj1WFxnC5t17aw7G",
  "key29": "TWD38XK3bFQFcqURicmWso54x8eYhwxJQMV5YGy9vsuEAFwiVYsdYjaw1ZMZP5xpkyZQQQKwYLbLDYY1naRhGVM",
  "key30": "4q6NAZs3Ur7ZjtzEgm5abh8c4ok7HujF1FuyGeHErYZ6fT5d22A8NxFQ7fLrcZUtsR9tciGdWGgZHUTAGuTdGVp9",
  "key31": "3VdWS8sNPeEbWpaUfuzEnxoQ4r47HoX5Ceb5yrbDASZ367xj7vdYjbArZh2Di84nbhtERgYvQyQLBeEMmM2n8eg1",
  "key32": "3pNPgSMyprSxg5Y3qZpWn38nG5KEdw32KpLPCVPWQBECVUTW9SHo1pZ9zgDw6p4KpsmuPnGLHZXuAd4uz6ohvBe",
  "key33": "2rZRdkq7pombpnHDKi5eeWXiD1yH17tjsRcRcxA6C2GdRyvCmeQdFHTCXvP5xTHsAb214kxDDyaERLYpNsrJjdkH",
  "key34": "3LFDVirz1o7qD4XCgQEEqshEDC6nugTbNKxPsv6Xe8q1CfCFmUr6vgfWbJu8xU8M53hEJdj4BdmtG64Fi2gjDSnY",
  "key35": "5htjf58MMvdZsFVpgbdRJgDJi74yPzPmTGZFipE2gatfpWk9xjFCNEpqYnVfnEJTq25eHtjsoV2UVoVrVZmFXf6a",
  "key36": "5tKxT1ixmgDj2yfdwH8hdbdxNA6Fh85RLAMAwPU8DpKf5SkDTwCYoEXe9qF6Wd4Mo6kL5y2pjnQ82hpBZYjZsaVR",
  "key37": "5K1AsiQtB3eBp1L6Lpdf9vCcJZddA5P7ZHCtyFaovfJiuNBwUosomCxXzKUDe8ZWztNf7rLYUvDewqYAjrgQBt9m",
  "key38": "5mKUby8ezaAfpevh1GqrUm4eSRdSGavRtTWqgxWGYs7hYZNu3KeeiB9qE9MJyG1VcpDtxBRYRL7yqoT1NrDW8m1o",
  "key39": "2a2uV8TkP1iEytEGNSc1KU3LXK4Uf9rRsb5bFVYjnuC7n7LfM4xFnbrds68mALR4vd7tQAqSJsxLDEVZcERC96AM",
  "key40": "ZVe894GGGu9JSEFu5mVDoQSWYmsV3eZr1Vi5XypN6tKdLgyxKQ2cZdpSSksnRFZU143twLTXqthUvYwoxY7gc91",
  "key41": "64fvnEiao5HhzUcik9tT9FetkJXxkCpnYgpK8BYeaKst3cwXXodGGfDqnYGT4tjHVrbj1bwRCQYDVojTdteEdkJj",
  "key42": "2V1GJ7atTtienLAKrWgbL8Dypx88C9AivqfXZ11WmcGTCAHqmcpZks4xYXtpP2Gs58yVUX2LCAU3EcRPLdW1ime3"
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
