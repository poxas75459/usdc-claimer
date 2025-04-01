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
    "8iX27RFb86aL2uR8e8Y6c8JdZrkXHg1f4jrv4Ms3N6T7ZwDSPa2pFootFULQ7Xw6KeNnXftmLaz7FiAZiwY6WvL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eEm1co4eereA5wKgL5wJAzSZ9c2BKs1zFm7NcVtiTjyfqUVeWtaQ3RJFfMZo8bnWwqGj2BQWo7uTmJoRuhuc79s",
  "key1": "4yGQd8cJ1f7LoMgp7zoNrYhSFpgm1Wzk9FyC38BkMjkZECAjjBGCdws17FRwb55wx5vC7hsRk4FsESzfkrSf7CAw",
  "key2": "4qPxVPEth3FNt8tSEGMzwhmw95gWUirjYNuE8tEn65YCiTqJNWUGyKVQuxvHmHdkQr6C7eeALydesU2srKME5jTB",
  "key3": "3mL29SAGCiVZfce7y9b9EF26oFidK3SApA4dPet82BHDCibruru7d6kohn3EuTxgemAYAeAvfuz3KcmfvHfbVfwz",
  "key4": "3p2BGXrK2QedT89WQ2CceHrBS3NebNMKR4hcM1R5bbHuYCE69HaDT7SxdvbbsHyArMsLeLJGTJtSuskd5cpWBA48",
  "key5": "4V16cBWB5s3rnkkPjtX4aeT7yC5zLExwzVJRtFqUvDwNvsygv9htghVHrLdJ7Z1gcw8TebAkMmnkoEiRzcaSJ131",
  "key6": "5W2p9FTtrpjR7ysUSGAWNweuWQF6tMw3AEvNp5yodsAaL8vq9HcxjfSrw5ERoHagjynwRbaHUzSiXRiaw2GY7gTs",
  "key7": "5tZ1Cj3HjhzKMVs8JUPGdbovxEkrerRBney3tueisrZR5KWCUQkwSrU3nHvoQAM1T5SQY8ZorpJku7FZUNwnpRE9",
  "key8": "ZsjfN2DFrZ2fUWEiMopCswu5VBrXcNXFGvQSATQ1Z7LkVRLfrBY8URJCeCK6reRgmN6fwVDoxLzVjhRrzND3o1e",
  "key9": "TR3h6UzVHwHXKQ1kosvP7SbCHKzPGYBntQg4iE3c8FbaRZWzS8QkMKBzhys754v8oygLXJmNe7Dxy4oHHTPRTuB",
  "key10": "4fGrs5nBtw11WBYEgXcg2hnetfytquQskFpu7bWKdg4w1KYi3yXyYJVdzZWk5pijF5rTMidVkp2mUbZFSj6XJcVP",
  "key11": "t5jfU7YYmZ5VqMxESZ3XVg5GDj6DvNYtZMQRgMbudQbMScCxUBTTffNun1K1jpvuPq2quwWzzP89CP7AjkUb3KT",
  "key12": "3XWnE8u6Bnm8tLh3rut78KTsHr3zpYAFoGToSEWHowM7mgiHnubbsUtJA9aSotCjQZQHwbem7hSwadSnykM9padN",
  "key13": "vpYenhgvFNHgsAor9R4bYmZjcPRiGrzPGmZvQtAjsGZVayaeUKPdkRk4nyCEE3a4g641UdCHHUu5GbPAHQiXfCt",
  "key14": "2cCQ3XmSNY2MGGnctVeFdaJJWQA5LPGdmmZsCsccJet9YmwxMUJykesqUiGhMoXxu6ZAaHEh63BD6SxV5G5aJQCT",
  "key15": "4E6thNZ5R7Vx9MaudXxZR1dzNUESKSPq6hXFDqjwtvLU2aCDWxy3TysbwyYc16F73ZfkJ9mQxmjxK2k7ZX355Zz3",
  "key16": "4TYWHPsreTcn6S5HdDSa77roc9Av1ciFBJf5ZjAdUvxGVdKUziW1HRpwcmuah952PmiJbKiTgqoXLbfwGKjeFUfm",
  "key17": "5k9EwXrqg6nVq9H2PYwP98D3Zk841J2dYbWW5oBXxXb48cLAY3ubVZmoro2dhCWG5PkmyFhx37kGpXytm4YXTRqa",
  "key18": "5M1h8VsSYRccxpyavzz8LYNcU7k17kWpqUWaH8FynCk2KrWrXeoH5cokN9Y4T8qCwBp2etqyj2SnjRidgTP3X13F",
  "key19": "HDtYEhuv6Ckr4yAcMWKPm7Eu66FSYBvLCyPTxnLH6qcwSnZjqrV5gtDLfcBtUvRFLtf7Q3Hm3ZUmV5nQHUKU4rG",
  "key20": "2oZ4AJ6G83KoKd7ZZFtbAt6s1si6mrpdmXCVN5tHgwZpNmjr7uARqkM39TaDCWeh5W61ENpxsaDccD16UGJyfuKd",
  "key21": "5Heehzxv2SZXMKyPgzwnT8KqzZ1ektCPNtpzCwjKxRWSyjxKUuX3Q6HXnCfribPk6N3eeDZFPepCXCJjwYcUyRw",
  "key22": "3dXqdTbb3K8JagrByukAAy5ECZmqvDP4CSuJiZwL6bkrF9yF5beH1Xw7tVn25sQ8aht4EwGed5R84tVbNKWUiGWX",
  "key23": "5x28gkRSqpujMUqCGNjAUei8RovDz355tWXtnz6PCpkHHTTnubekeYprQU9Us1benr6LhqZAfA6YZHz8DfwJpejG",
  "key24": "2134XkojW6zmaTHALexjj7JiVauPvVRFnpTvWwzkSgqXbqRrNA499NpzcSyoaA2hvQqKovquR5NCw24VxbMmLgCW",
  "key25": "448TBaZwUFFwGZ9mQ8b97anauaoFRXEXFwHz4QTRYxpRv43d2vpNNnmrmZ6iPw7a1CySJ2yX7HQwPXTEcpGBcRew",
  "key26": "4aGQ8ifGB7mQr5cSUzfZDe98766dpXahsY8LChKTiCKzNs77Wt1FoGHXSFq5hQJwpydKtfphubQN3jce3CXzHyrE",
  "key27": "BmaHxwP8SaBAYKMT7Fo5FNnoLgwQ4UiXXqKnwMgwdUqA77vMaP6i6eUndUTNRYSfEbL6uqcBDm612gXPTVfbAkr",
  "key28": "4QdqBpcTL8foqpbMvZKVfU2aiPZoDCJS1muvVmqqVdinHZhe34DUyZXtYiv8XVxMcbYtMiq1gTrcb1WCKR2LB4jA",
  "key29": "2ni5rvHwU4ZJo7csu836CUFLQ7KD9CqcDrnRd35FGmSCPX4TZodmJwR33xgSzuFUDHx78WEdRYQzgTUtG1NiwFdz",
  "key30": "3tU158UqdcLwYfc6qMkZMXeFR8u8p9BH5DNZgm5T14p666WNnEwW8LSYuG3yhrBjvuic5JTURvkh2kJK2qdtNobr",
  "key31": "3cwWrcMdGd3ofZAz1PkV78UZQdUMvKL7iwrtktDYEgJ8xRrrbmPEuRhCJvTQXky5ge4VE5xcvxD2JyNiZ5GyTD7t",
  "key32": "TfyygoEdsrStrTuEN6YRkA3gfFrHiudgAcDUd2kTDh2K5sp5L3TN33cMsPsfeU1ZDTA6Xnvigot8j9w5XTYf8fo",
  "key33": "3kAgWxzjzGSREsNKTmGxSdAd56UkQVwLJJCN7aENsaCic8wWQRcwJ2B5TwJSCni6yiw1rtbJk7fXHCjZLKJcYUqo",
  "key34": "Y25tr2aVxnVEBAELHFYJ7c2Jm3R9CqiHQ4tQZc9ji3YzNcbMFQ9XnroV4qffbXccUaaHS34FMGitYgUWDfBDGHF",
  "key35": "3vgoGs9rhtUBMBTEvNLy2YasLeRxPMSPepUDHanREMFSNJaybFQwwjUG8zLAkwptNSuxJzWuAuQWcJkp1xvCGgGm",
  "key36": "4ZWZWKzXJvq4u3MBmFBEXWeSiBUS3xwUVQLnojkmuJMayWgMoDpw5TgtYb8am5ty7b5Kxka1eN5jFhQSy9y5uBNm",
  "key37": "5XKj62F8VUEnSdC5MCu53td1w8mH9zvdVFCELeYwkNLn24P9j9vqtqxJ1WjURWTMZVyFJoZDMD8GF3eNnweGKZo5",
  "key38": "2wJeuBjYXJWz4eGnMSJ7Xwv6CJNgWoynVgtwqB1gAQ6tJ2T2AomBC5fk9hcvLWvj7imfeF2wgmP5tTeUCbek7kQE",
  "key39": "5Ko37BdPRd3B6gweJgjFGBpXRAPfnDAQKajeBDQ1m7bPdotDrBvAMCFzCnkQuCY36vGv3dCxtkWpfsoHj6FXKLti",
  "key40": "4nubzTGx94M9yWiqXqsJZMG37Gy4mMJM3f84hBaaaVBgmjc95ZcWZEB8rJxaUHGYL6zhE55k7dTHUGg8k7EVb9pY"
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
