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
    "29UX8V6gMaXmvezotM3YHZeUN28br1bj6eHcx2TmgUk3q2Rh11yLM4dJwjREmLoVUAk3cgtAUXNhMPhYuTu2CxGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zmSBKEWvoZg2mWuaup2tRpNUGyEgQKtKqkgMqaT3EfwtMc8fhjRURV33HjwN1ciyufGWRfJ95vGCRPkTzS5DKfK",
  "key1": "GnwcCpz8ktZtBXFBCc5JwAbWBqQxzWm3ahYW46fBEP7BJSBCRJGEVGr3LPwRNAUMyfZcu8G2VhbrnBNQfiUPpXP",
  "key2": "3Z4R9k2EAEJhcC4nmfbnMXM5msAkRNvJcdPPiyuayfngTdLSWZPorPbTVihEXQZErsnALTWHCmVjLncPTwqHedTk",
  "key3": "2NgKCrxPByiWFoHLXDBK6AA9h6WnejEVBc54LwHRmE9dvNYEUKeuKryUyRfm94twYbHaaz5P3tbntt9Dr3SrRPfT",
  "key4": "2DnmpgGySWnZX1d71xoYcY2H7GLV5pVdJB7GCrDz55pXW155anax6kxRQQABn3T2FFcXBk4p6LXpTxSU3GfZq991",
  "key5": "3M3fFo3SAwb94hjPL2rx8ijdpSZYjPh1TXUp4KpMR48A2TL7FMCxtE5LB5QKhG1JwomR278fZjw3RxM2JRHTBMZe",
  "key6": "5jJEDUsJi7xuYT2NXDvWTexmGhT6tRxTL7shFX4oqdNY4ppqQVtXWLqpm1pKepR5affG5zca59xHBZ6gjsbUzeLK",
  "key7": "4HcFXu65iqzikgfaysEihwV54Kgrer5eGACsr45FTrzigK1HArPvfCxWz5LT6RqDjPyLW5dJRi4RFYrqP9FXnye",
  "key8": "3tQFZyV3yJfKKzewjqaUQiZYB83Z75zoEfCY6cTHJTzqEgPZNkB6isX4e7RpumsCUDLfkEpGhuM6b17RxnpNkUtk",
  "key9": "3h4jfH6DmA1DPvmv5s5jR8cyk2Bn412TdqapmkVfm9BxuZHwkPaPq7sHevizdgiuocc2YFGUWyiN47WZPt6hJ5pu",
  "key10": "K8E9BGz4Q9A4VArZgDsALgy7ra4WUic8L5zyZQSPZNiCU3ZDwNpFK6ZrwQrWwaKoPLQwapamYeu58McHF1JGPQt",
  "key11": "3Que7JZyTaK3gMCUaAsexsHCrDbmWuVaCcSs7FudbRsZT2Lj9ngxFA8qkbzXboL25CUDxSqb2kDNDh5Ysan6izfR",
  "key12": "53Re5FKjKpP4BCoxkJCPC8RH9dap7ZpdsyKTfsF1h6tt7S7KVFQUeGjDhcxHLXmfX7JQ5DExPR2SzWa9Zyataakt",
  "key13": "x6NZvkoYgDPKPkY291wHJ7dtqRKFBeGU4baS4wYyA4BB1hCoFCb1WYkB1dAthfiMWpCHeTGudcrsorvJvdthNcw",
  "key14": "gX7bz8LhVpLXk8W8ve1AxucQk1PHGWjiuk37Z4HSSEaD8pcWevWBiL5rFw8z8XacAeKsfgP54Q172z2kjeTQscL",
  "key15": "3fYbL5sdVN66pf88KeLKz5vNHQ5pQwE1WmxD3XK2KzNPsdfxQisB1dBTcfDrEWqZ4o2BX9pohHJq49Y3ftRzzXk3",
  "key16": "5wakjyjxTDq2tyFjJzgXZJ6gP3PsW8MfX3AnqejUWTqRacNj3tj4P1HFWUSHNdSZJ8wcnCoZktGSC2WE3hAZKuKD",
  "key17": "3HaJqBBBSsgs4fDcQdBNDTyeV1YZfvhVxvL2MV1xeoVZCTEuaRcpsWmUkdRD6sDooNKik4LgsuJxTnJJssdAf8VM",
  "key18": "5m68G7Fc6BDq35Q3HxZJvjiZS4zetSD7bBi5ftXTM9FQyjS6MYW7Kojhq8qAfCCDshVgfdvnWGKhnmb8CPpGL9RL",
  "key19": "4CacV9BtPmAaWHTewyFYN88sUbRyo33itZ1VsGnyH3pWTfzuDRtmJwYF376tKtN3cgGFzQTEZaRJZEp3f2k8EsVD",
  "key20": "5WkrNdPhJSioBGRF3TYd5vHnvAjtA45DExaWC5VsSYBcYZw6gR32XhHQUYnwAh9Quj14fddpioDk1PSXvzgz3cxr",
  "key21": "356BWKgWKQcHa1ZCWNTTDgxo9QHpt5FBAhqMg5C2gBTYzkzyKqFETsNngWjeJt7xRHe8GPbEJqFQfogRCp2UXgjd",
  "key22": "bsRtYNP4QoAVJa7ZdTxDon33t2eRYg3BXJL2Hk1ZCfLSzysmYVqiaqyDvysLgp8eCJuzQUhzLf7cxZRxt9sbbgN",
  "key23": "4sTY5z6zuFcTVPfKsJdsncruqFB8Kb9EX43JNGc7oATBAdwSgihQy6WnxZyBT5jhuvw3hYHEFjVFnnY8wjmNjXCr",
  "key24": "FPHKLiK4d9MkZfRnHRSkDahqfKXFJK6TgL4LghBKNPWMFSDLVk6JFX1sGE4pnh9YQgeeSoBbbzh7J7x6HXBtjER",
  "key25": "5soHt3Xs9aQXV2V4yqB5q7YJQMSyrFeSHejijCk3J6odrdvBFhxG3vWdFjw6gJ3QxYXnNstP9yduEer9rjYDNqqR",
  "key26": "2sBFvzk5viLZVZMtkyGegEAXQ1YGtSz5qU2HEjr4S9VNbKegJpoDmSgpCEPSFc9uuBoB3XmTfZqsoPiuStxVW7dC",
  "key27": "3Fv8K2No25U5sjrtwgf4hgEVFZ25eXSjHgdHyUphJ2M3hRpmUh9xfq1RcAzvEKv2DXHtFiDkxTRRtpnrr7JsF94A",
  "key28": "5BjKvstaiKJVL5EMDPcCRkkY9zjLygM5B3gViUUntULCZgRCVfWF7YArVPxTDm21N297agoJGi4ZAxx5pyuHznV5",
  "key29": "2AVJ2dfcSFgHeRuitg5YsKSUfnAizT7KWKMaWS44YuNR3EzfGUW12DWudEfKkv3i9ce4CPkAwRqTbx9gnRGBunt2",
  "key30": "JJbxamHzQL1kp6xt8byKHsdNL8bRh13K7z7RfWgsZr7Pp5GrPdzusKh68YwGaFFW1PwZiDuS9rWsFUtcWhMjaF8",
  "key31": "5iSForThcagU7bt3XDSYUCuf6ro1k5zCUULmoEheYcJNRK4M575EH5VQfjmZ4U2o1fJhqgzSUavaFUG3sqwHP6VF",
  "key32": "3xCVQb3yWvd5U9Eh3WYhbs5Z3tXSwRsqfRQe5jxNkwQ4wrbPJHV2aNrQ2azb7eoe9iE62KFT1aYWroTFQKz2JEZv",
  "key33": "5XAaWGKfafmzkdxjimBNA45aT1aeJc2z53w75GggbgAqYqbrQnuNAG9dtUR2nNnP3QET7LdtN2Ri1wrMTjAApTk7",
  "key34": "26MNxHyECNGxa45xEysyfmYPLzWqRT2kmthhmYwfznDA9t4qZbU1TkTyCEJkX4xWPkwnattcBpvAqNKNJJy9qYyJ",
  "key35": "3BL9hdWN9HJndZidZKi5B29d2WNw7D9dXkXN2Zd7k5EZoj8B7yY6ThrCfQ8rr7YCmEYTAHWLD63FLocZMCdzawQa",
  "key36": "57poXkjvDEuxX2Ckfb2zSjFLG2b2mzHav7BqyURiWdfBAmYYv3vaV8hqaEY56M6qdh9o3T2EU4bZ5AEmMLG5PV2F",
  "key37": "2CvSAU6iKKMLBoTN7vCezWR4HbfHun7Xw2Y4KHbcriggQXQMEVVF6k7TJGuuKmK2Tx7AKFJNNHLs4cyT9FiiCyPE",
  "key38": "48HL82W7EKroy83v4NquE1re3AZzsfiS3MCWnwKgWvwE57WeAkwsu4bcK81CaSJCVcQPnNGfr2mq4vXBKNGoJhrU",
  "key39": "3d9DeBzdtRg9PouWEpx98yqm5VN3P7qPxDtbBMz22AdfWCoXz9M2tt4t4yZGZZRuhzXK9Kn7DJRb8uKXx4YkpQ2q",
  "key40": "3kYDHRTudVb75XP6P5FTeMVu8LsB3Rn3rZspFVHhBm1kqNpnYySSzQ3EUWBv7hVNxu2beV7nAy9DeABC6UMDfwd3",
  "key41": "2X3zsKsoUhrz1ud1Bxj4mJHnwronmLnCu1BCf3jTcxsRKfmGvD4Q2ZpHjsKLEN5JAxhCJfVXycJbVirAeY5P958N",
  "key42": "U6BHQFpnYaXDTqr9opdcECAaYdGrXPghPPLnDXPAsncxZbBsghQSF9AbjBYYqVwpot57HEwf5KpVBZU5D9KiFz8",
  "key43": "2pDTKUa95opPdrf7zerNtu4D1o7yYDKznZxQCsviaX5oVkBetf9FBQpToYvqzb8i2nBx4PUcxMyu2sPn9TmXGzrS",
  "key44": "4XK61zofD6PRs2PjWg3HL3X4hpz1u7hPYHEoALaEnDe5sdfmrpJHD1mqyt34Bpe42tHrsQ8Ct2TUkYABuBKwpvH8"
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
