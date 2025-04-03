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
    "4Z7amwiQU9WCLQCjDq6WuhhoHrdS2bD8f2wwDTKh8gNN9FgGf3PNg8QyfN5nze6VrNKrwWr2KcH3qtVkieFoTkhu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2swpwNCdyJdD6PGmCtDFu8RZwysVvp4hxMj7geHakzRFWNvkDRxi9vFGPnR6duoNxifULDaRkCYPxVPWLVFoRL9r",
  "key1": "2yxAM9xBzv1myhsLZsDwnfTqDpMMRX4VUhkybJHuy8g2AUje6J1oCLoni3WaLvqtJAZVDrd78g2RqTwSprhyZzDz",
  "key2": "4Xniv3njbGC5NhfvLAGBPaMQT6SLbWyGTXcRmwXuPDNNCJR4gro1VWSbNLvBwzctY1FDV6ygmvwWcm4VYWBARvzY",
  "key3": "tFfRP3Wn2GYWmxEjtNTb55X3LXEngicoaUdC7iMbZyUpgTQ7XvBQzx197hSZc1o5w2hHMKPY3SMc4pKjGvUQUMU",
  "key4": "j23bM4PDiZStRekBtdWsm8y7qh8mTJkCw2UXRLkAbiy3zFkmzNyHEWMAsQJbkdoPqRVULXxt2oB4PR14Z6yWkMR",
  "key5": "5oAuARdpZ2yo3kQ5qbmgpJqrSXrYE2m2oNRVVsVNXgdWnYndK2D2XhBxJaqNmNphqYWyx8G92XRPidxMXJ68NnXu",
  "key6": "3DNTtNLiyDhm5SCUdH1JWnHeDqximRmACty6VxxA5zCnGEB9GQdyEFDbRfnWnbtDsLWE8ZoowWn5zAhQ787k1Uga",
  "key7": "4ZNE5a354NyYHvp37kMZ5xYrK1EJbodW7nbfUhFXo1pGwr7Ri6tWhybUixc71dBopBQEnB3NDtbqFhHYFb6qqMCe",
  "key8": "5L7c5Z9rQcDahd6fL1Do8HqhaasBvxsRXe3q9fooksTZqCGyMm78dv6ZaJ4Kqs3mgKvMbziSv4fLLjMx52J6RaVD",
  "key9": "CNSKtQRA8K7bAb3zzJSEry5StEUefP71WLBPp96sJofaRaUh2MDzPz53yrkPWZoHLjvvStLcs7VYtKpqTWnZta4",
  "key10": "22dVr7viByFiKrPnCfzVHPdkmVcaoSHJmGuHNpw3z2j2H97orvganvaXJEMTYtsitXS2qJdzJauo1LkcV8Ag45hB",
  "key11": "kDr4FY6sw2fxYkZ3Jk8GjPCAB74qVPhkYfypRQ9SJ8HJmnXAoskP6ioQR5ZFFHQiwGP8gBZ2ArDw9eZ2ud45q5Y",
  "key12": "pdRosYBy5BbxJiuebpXfd7biPWjEJPQ9oMgbBPbs1XmGLqFgz5JZvLxYe8ChecNvprgf4UjeZRBAL8ZKVJK7hrm",
  "key13": "259kP8M42ecAs1AEV6XFULtMLEnEQZVYjYJqzy9nMkqH3Ud7vQFuMdhuE6k5wofPNzDYaWny2iVRgsjwcTDPwwsG",
  "key14": "2DiAaMiP1N9VkmUFmU5vyXcp2qsSAjLAiDa7w6x2crofZff35BHrVrSLiMZEUDzKCCu8qDRUCMEdeTX4BpM6s2kb",
  "key15": "3wu7sfzU9umSuHYk376VezY8V99ZbqnVrLo8rqFnKeq8SaPiK2FSYCeFeoe6hB8CK9mACPsFBBrbRzCMCSWi3F7x",
  "key16": "4iG13zeQgtbZimECxRfW7xxrNcstR4yGcTXr6ooFsLMynVqbfMe816CfTmsnYnCJtmpaA1bXnBKWRkysf42Wj7DL",
  "key17": "WQGv5mxGtXkXTTJUak6UNmYQSePhLsyjrZM9KoDQZdsYDzJV9CprNK7dw5dHox3fUipcYSDyofhahZmBXKFbjHk",
  "key18": "5HrYQFCKLExicCieCqgTkR7G23vGWrDo3dLGiZ9cAAkZk4kW2SG4VoGkTS3hei1QXEPEzC8DyeKgZKBi1h78vmg3",
  "key19": "3U2SqrpcAi2q3hkqngwm2ufzRS2ejyrbeR4GM9f7MLikfb3KqjT6WU8QwJ8a6f7zHFizbM41Ca3SkprPWp1byoav",
  "key20": "4j134Ke5gEnXxCxMjrceNXsSkPkaScz8J1EVZ6aMFwEXqYiftDT9EubcjNpfsHpBja6oZtD94nSRLrFsMFi5DfbX",
  "key21": "3jvCCdunnzNhFY1ZdzcREDCAAVcZRc4VmiBdgMSLEffvAJEgcGdhoU1wNib6j6f2kAPsieV6nyfxWzSJen1Q83H8",
  "key22": "3aHhX9XNPyyTry1eupxDDHkky4jHBkJw7xjJB4vUbcP28qxm5UiJL71qg5spvV6o2TRUzb9DHATdDsNpn2srbs7v",
  "key23": "4tTjkqfrEaVoU6Vsjto6VNGkjD61QiLmmq1EDSttz8HADhgKzsAZVRBgxxj5fmjkZH4te9mtfC2jSE9KyfYCchjc",
  "key24": "3pA6oJySNDZEEhhnFf3LTM8661hd9yT1NoMzeVLjH9Fph7kf7zRuxCHLFL7byyve2Lcug2tW7b1cupzsbQUxhDQj"
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
