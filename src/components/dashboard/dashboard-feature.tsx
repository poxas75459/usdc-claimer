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
    "4TMqPWZDQKeyAqSMjaFLjZsAk5Cha2RW8Mk2zCsQ2FgpUuBQibHEqFBohtScWYsDPToefnH9a7Hko5jCX2VQj5PB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54E3RZQfBQ65keejnzz2aoKENo8MpfTV1TbYo7dgzLazGZXhMbxfE9fNq3c7fyGmp2QDmBejZ4W7G5YJxoVChhQW",
  "key1": "2M6NARvJhBt29ojazMLm67Rzx3fc1DBy7wTDUMqVgc8ruxTkYJo8SVcmuybtVxCvCUFWdP9qL9cCjhbVWf6kSFRi",
  "key2": "4v89U9B3c9jDjaN5fS53hkc91FqACumLsHGkqBq19mA7pK6PkvTv3RNW7qv7nCzUxpeUXcBxvLRUiPbRioJVfY5b",
  "key3": "5YcQBoSFvsvBjzQS2NktVrGYi3AdcjVWMsWyuLeDBTZTWP6YFoDbvPe1VbJqrtxjqM4RnwvYwS5ZqKDBMePApQ7V",
  "key4": "3h373NydKtLZqgWtx1hEkfwp89N5L6FGtYDCVMWNFGghiK65DVUJZtyhgvVpFFdH3HiBG56tdjcGgyjtzFf2B6Ec",
  "key5": "26mPJ2kuDqZmexpdjXDnSqgKGAcZzJagvXXEoRCXCTxRn71JniLgWrju17A562NUuqTCgd2HBkVU4oyzbLvNvqEX",
  "key6": "3jegb5dnwvvhcXSNkZ15ac5AgS6UtaaNoETVm67KCPshCdriJ3LqdMr7zWmXvmhXKCBP1bFsXwj5THHiF8Uaq34n",
  "key7": "3uwWRX76YoQpk6pDZBKDiWxEkdfodPVYtKWRY5peUnhZ3y66Qg44FfZY7oLY6VQpDfs72jtjojAn5o8yS3K4zSGo",
  "key8": "2zBzrni2r5uydxf3KuNJw1wLHTUBrq78UoApyYYFCEVs1AWzpDzU2boCb4ANMuG5kizcsVyRY7DSho5wVyb7AYj4",
  "key9": "65wLWJLfK3MCW13ykURZJfmDnmwmdFD9ZneQvr6V4F1XLmHBFVbgmxLnvSdQyA2nwPKSsa768CRF3EwQzRWtMywY",
  "key10": "HCHFuJE68jL7HmMVGc78yMY4oJ5mZjuTgdCYYgk9qeHvdomg7rPJ7dpPfJ2DisRgJhGGEvAd2VJGpMpoPJQ2YtN",
  "key11": "5c9g9dDqfVWbPgZLFxNXAc5BvC3RjVaQN21F5UEzEbSSX86vQDji8WYaHTu7cKSv4QEDBYiqJSHunKxdk2Rej8Tw",
  "key12": "2taTr5gKmFgezJ9ZgvVU1UGHqkBi7LNK2BqgY1qux53jiPHgjEUHgPBKruJUjM8SP7HSVxfo1nS9mAQ2MA4q2GeW",
  "key13": "4GyBQcLr69t2EniFyjVjYTCAQeofhJXiiq76NdFLMsLDrPu8JZNpwbDKeMKvJESawnCdikdPpMCrZS9xtBxpPbsr",
  "key14": "59k71nvdbD7MbAb9NE6AgmiYpFUnyBBV1G3PN3xY3JpdqiBPc4Zq4YWMyiCrJHoKehnhGdWKGkHvyp116Rqv7iDs",
  "key15": "47cN2mqDxXgZdRhQN84fEStnv2NBNXHvZXMPW5EK9cBjiKvkWgxwYodtbfihsVEtGcSF9zzVFsA6DzeAVyDm6UTW",
  "key16": "4LW6DCPfRFCLuinT2AiPfMwxR2Kf5ozBKNEENDR3fGXmNEyHgUuVGCv4SdXstPx3uWa2XFG5KdgYpBwYnDhokxvu",
  "key17": "5JwAZ3b5Jeu21fChKn811YVvxyfg9uFJXXYHhGE3GzUjBW8jeZj39JapZgnWCEfFQFvvZEx9wHyE7ag4qQkSHRE4",
  "key18": "67rg9vbG8CF3s4qFtEzrw7BUaSd9yzmQpMV5Z6x5Du4FWJKxesRhpE3AP1mGFGYRL7V2NRhJRqFGguDbXGQABtff",
  "key19": "35fksgUY7jgziLAQiznC7Ceoq8YqTDHdiPuXWvtXJ7niqYkWovGhX5idgtssy6G29euYdjtCUgk1xN5TU9dKdQFr",
  "key20": "qCXRZ54cxPLxZvUPpZdeu5VX74pExmUdFP2J4MgU2gvhn7YckZPAybxqxYwv1qH5UKkKNkWYFmzJSGW4crQ9zg1",
  "key21": "3e6XQ1FDuKj21tNN6iBoo8trVw69jaZypYXNGXZU6Y721cVs4YEkjG2gkg8kL42YBfQVP3SewFj56PusdJbjPYxX",
  "key22": "4sXUCrXNRJCTkn1KUhYDUejeJ65Zqo9YLUJYvmZhZPbJQJUnzh3YVLThc8jKEndm42LYwLLKd7Vsg1otCHo8stsY",
  "key23": "QifCLxWW3U993j2UrvxTbCQ2RBrsY9vGTfB6CTJeF2tWBD5fXijsdPPRfhqp3YgBBZ3wfhyuJP829UPWzScqJJu",
  "key24": "F9cYgiRBJgXsWPSo4quh1YKcUavLo5A8Ptkr2itoPa4akn68K5mxtBEAbhuBm2y2o1sE4vhVXD1Z5VNGYGXDm2r",
  "key25": "2Lx4PdtALdyxiydX5dxpKEErBuNmuZra8Cj1w9TdaVLvxj8k4mEjVKq3ESrdxUsTnHQnc9SzcNf9nmxzDuwoQKd5",
  "key26": "2DX32DbgmNHiSpwo7RjcAm7oMi5ouma7Ltg9gNffgDd7pp8WwFcneCrBz7DXGWrXLBtvAxGKjajNVqm2EZ9Fjbo9",
  "key27": "3ejrvzFiXZw11rxEUTtSHGs5NiQxM8ZvqntTCx3dGJVsFrVekVH8SefzKUQm8utL3ou2QGJksDNT86F7wLRhYaMJ",
  "key28": "4AVqK35QcDGzXxa7GVXzFnwDzaUTNMFTysTvGBMDEE82cKN3nG1nMZHpc5efmRKu8DTcNtJVFZdnvDW2hPTku8cb",
  "key29": "67SLqTMhKZrU83XeSHmnyFA4HPAkEQ2J22N2y3cXXuFAGE5RLDPEzeeubdSJkdrrbXjDLxcvowQWbAzZftWVEV2S",
  "key30": "35qEgc9iXqd9VFhNPujTJKx9EUgsycJBz48yF6ZzroufnY2RRccfnQFrCHk1USU9nxDZ6frv2SHw4g197BtBGi56",
  "key31": "5nocBdoAmkCc85v9sF21VT7BoLbdGJrwHFssXSvdV1WVE7Ns6Gbs5uaA2NTy2YaznXT3wgMvFDvbwrs7W3nxUi8t",
  "key32": "2r7ev38qWSxhQYRoRGWypRxjzCzx6V67rvTD1Qr6q4JZmHpsnPFUBaHjJv7iJ65pGcroZg59JaEpxNdKSK2dhcBs",
  "key33": "4n62SDbzDNnb9uZZThTaGmeBEfbKaxSLvr5SNyWfLpp9pJWHm3kdpP1EAdSMG9ztSGbmLj1nyin1FbR7tNVDJj9a",
  "key34": "2mgekgAyQUJn6qvHBWex7Ae2T3gQ12DHYTV8E73evjGiZDwc8i8Mk5z6ZtkABn5YJwLv3kKTX7EHKqJ7xWuDMt8m",
  "key35": "7cAp1ePRWynah88JczJxFJj2SuaSi89r3k8PtT8Eznn5bSHK6FSKtnaczwJaME4Aid5R54gMMrhioCuJ5qNsieb",
  "key36": "3nsitonGDb4TiRPsu1ce3oBfaBq4urc2WpLAgLnN7pLN71wjQVsRsJrCFEyVnrhJAJX5qv2NpamNUj4gcU9sCqAW",
  "key37": "4GhMqE1fZmKBQgqqhrjq5Big7pwx4DEXMuBrvKGqkreeUabzfJgncjLsw1EjvRmuU9TxuMSKj78uoYuvDXXnJH2C",
  "key38": "42AxYPx6ozXP7jWyZur7bMUqchDCmGJ2FgYc7WZYg7ge6Ni9hjevirFQXd4HLCBfZh579PTamGTE9xsteFECBrdA",
  "key39": "PZ7ukGNzuV2ufyB7tiuxHkpv4FFwnjermo6a59hEYUsQcgpXR7HqMi4AD9TzjE8x7wrDGkxmXHwYN1jq1YocXsU",
  "key40": "2ULBSedAbbSVYEuCLkV3jmbpByma3emP2f9jbg2wjrxpwVsQZkgRgeiSLLHCzp1SmATejcveuGthMR4Z1E7xH621",
  "key41": "aiCTBLnAEQtHyfjHWLDcy6HLr1ob4qgdrJ3VbYDrFqBeT9ZqCbDp7VFAWua5M9tbWeK9VgF7quQGdU6hW3eaaMC",
  "key42": "3rJmYQYnUUJXLn44aJWv7V3HjVZuk7wadmwTGyTwDak7zEoaqwc3XiNkcvay5V9owgmqFvCFADnuHcT2sE8ep8WT"
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
