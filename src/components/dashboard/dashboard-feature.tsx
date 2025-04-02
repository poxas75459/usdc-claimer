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
    "66wFQL49BsvpMg3Un5dtyrFM3EqYKDh4Ltu8V2fifPf9mKAxJDKTC5jF6rVBnQBhfb1JykCqNU6r6EY56hwCGmn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xeECZR14yiQjS6neygJiWQu7qX9QGNpAp4aYL4TMYk88dHtUKcWAVWuYXopVxn9rCWYu3g7Y6GMKiv8GcjSvbKv",
  "key1": "3nrsY7GCKfRZ4KEEZCE64VDS2XPekbu4AvvKtEUkW4BaeYEt4ctUyFZTcSWTPwYZHTbbnqZ3eLCJJwNxCiXrD9p8",
  "key2": "5yC3qK1R3YHSBwXwsNwqWbycLwEVKH8hSC5nUYAZzeqfXTxbqxxDTL4gFsVinTeFhjUXkL8sW5gQmbN4hhkvT9eE",
  "key3": "58LHwzx3eigu8ExpxagRSmREXAHZ6keCLrwn8mHHTGXBCLxJXnHf9qr6NDUEsUtFRWocHcbtB3Ps1DyMkgsYXwf5",
  "key4": "3szLKcZWHJ2ASKBnx2vNLS5j9wW7qUk5saDbWJ4F1kRCRwJnnxAMgZg41FDb9qWoUfKYY66hVbPqckK4cdWzvYTh",
  "key5": "27zf1F3tDzn4j6SWk1624vEcCYqf9amkgThPW9W1c2KGqEoiGrz3W1v9LRVsUMh6yGceLtsr1vnQPEXP4RnPc7nG",
  "key6": "59SWspCs4mLhF4gw58CpXYk89GCCWgdKnNJB1vTmKzYQQBtqmNiEuh5BwQ4ZWBv3dFDJWsKwtWnnB9jVruzQr3or",
  "key7": "4xSgtANkLuhPefHqSTkbWGCbYAfthJEMyHJHCFo7fQ4vH3WNaFGpeMVtKfEuqFnZg6eeqtEqsPqTwXtRXM3BQcFK",
  "key8": "3A296tN1VAEodJENhkLBinB2nKar5g4TpJQQmHimZaB7HsMEVtDf7QYV3xbp8sXaG59MDADFPPCE8QKG2XfVMkUt",
  "key9": "2gG2cVyAExJxSAAmLuddwpdb1zGnei22TjhmHSZgJ5D98epbMoro75QmzAP25yA7Ds71F16uDANyooMFYLQXNDTm",
  "key10": "3Zx36Rwv1SKuj6TUDJchJe3yHxGK2YrJ5pZYk5pJK25BZsXK2DD9rDKcw94q8MFSdaPpD1bNC7UeT4yQS1xAvFbQ",
  "key11": "3jMEWRc5Vz4XCsJiAdHJb8wKaPS8xws5hWKE27zDwhiZAnzJnUuDMJ48dJZJC9W3wj9gTPLADc4cUHitz2sJ4mYa",
  "key12": "5AhJ46Raq457wQCCQuS55Sj7VK4vxNBscwRCcY67FwtpwAhhX1CQdEDYawNnZZhHSBMa34Ky41P8SzvfAhndHKRE",
  "key13": "3a4WTVusqrHvZPXgAd1mUh4xQwT3VKwuXzqyoeU4UCQLAATN4nzEFSyhMNW2EN3Miw3Tr2NANN1JFaNcC4qTgx5j",
  "key14": "2p5xBP2gK14xLHUepmJybG6Qqt3HxCXGZYuyjTx1AWcVm2gVtdMTQhkuv2gMgX5CXHuLSGhX5bFtMN8dcgU57kL8",
  "key15": "2gLHiN7iXHGs68udFQqtJQN7rFewLJxLCWJyHtVXtBUHc7kuDHYxt2jyQEffAY8t5G76sf1HfU4DTEwyFKzpVig2",
  "key16": "4NfnVHQCsW2Y1bXYP6QDtwDDMQfm1pGNyjbFCfcyARkHbp7w5f9Sfc62vVw1EnJ58cDnKoE8DZHRBXBRn4AyGpAS",
  "key17": "3Y6fgGT98Nef8uMu5AXVPGQoxKkqHLaVAXgUWZsWtDkVScjaoCS7558RZk1ZBxvCgE5evU81JdG3yom1zE3WcxC4",
  "key18": "J81jJJMxbYgEsnPo7N9UStB9QYupz667njcfSUXY9R7uS7ip2EKNB6g52qfveNnDNqsPMJ8Fbh2TYbDoUNBKR93",
  "key19": "42WcAWanHPnKgQ3YTgasRDRZrECKxojs4nLnnaWwePZYhAaSMc6QKNEjscDAMGUNVnn1WUiawxygsbXpqEaHyPYs",
  "key20": "7MF2iC6bjFXh1c5JfBamkjNssbnTPEpaxxdTG69TdGehpyjYFRMFCiJnv9q79XjFjUyRzR1ffhchEZnfxpknr3n",
  "key21": "5YeNrQ3bwaAeDnHbpnjTJ9jTxyunsjhEUMuXsXazS3Nqw2eK2aAqtd5umRkC2XSxpyWM6xZccvLun8Phko2KfcWh",
  "key22": "3j81HXbdfU1NL1ieBXUkKRfoy39dVRFfV4wnvvSP2GZqgWszzBzwkJSv3vomkL5xHQ6P7xHvnfqUBDXqMwCkgHgt",
  "key23": "67hpVUA8zSoHMZkVPVnRckcv8QpMTQ1cFaorvNR5p5ntiZvnihTyQBBJQrxKnGtTEMBABubH1hMqTJxj9sKZMRfp",
  "key24": "TLdaLupqhHHYfd7A1cQXpmsDk2dMzvcyScuxj2QD5mc2QEVzz1QWLUqdcCuN2shx3xSAdUuc5u6UwGyb95jgx7z",
  "key25": "2fTBM2jx3LPRJjit5hQt1ixGunegtTtSg2mVH1XFRyE6Aj82wpXfqqQcL31JaWun5zeDj4Ea1qZWNxoc4BBwtPCC",
  "key26": "2mFFYSauhf91fQTSkrdZTAHAm73iH3PE2Lp8v8GaBHvzReit5r6eMkFYS9tSTqWpFabMfriArxk8AM5Sp1jfhKE8",
  "key27": "4BGqCGBRBYQ4nHdkGf7GW9Z3aZXEy3MqYBJTQWPFVyn2TFVxyNUorVZT4fPffgyQZ6HLxsjexm35KrLpkm8kqUtt",
  "key28": "5FHdK7H5q6raCf5qAGR22hXKVgxvKQDU7NwxxHbPWchqN94YXQqG4QSVWr8Uk1gz2XfJ6BY8VhFR48EE28nvUZYK",
  "key29": "C1eYjSeifUCGvxKWh3XA1iViR3PdMLUe3HjgUWBjxxm196uvG6kgQW9fMLRpkdz1qbun5oCLCcTYaXju4Tv2nyA",
  "key30": "2Ewbd7uxvRjjxhpB2a2Rk82ZxMW2Ae6gsEJ1Dc7R2TVq7Rd3FHvJdYhArinwHz3i7QQu7iCzZ5z243pHZHaJidmY",
  "key31": "M5e3ZZMrRXViKgva9eZigEGKfEQPsNLGNxprnBFpmrraXUMcRVky7xaauGHjkjxBuDYFaTanwa7xbbz6bZoX991",
  "key32": "4rWM1D7XnTBZdURX4HRjSRsUpaGDTnZrYJpxVis9zQu3qjPhFKy3bE78bRiGgB6FiB1rgXvSBUo1JcwSnTrQ3Lqr",
  "key33": "24Dt5A9iWEHS9T3H3Ys4WuFK1TD3V1auP2F4chCujXLVU5QLqRx3qeHiB34S7RoFpKqqZB9eB7CB3axXWiVV4D59",
  "key34": "2ZvfGu8RgULmbt9fDkqkqVVnfUnWJjWXPeDCkaiMy4LRjuPKP4Le2RLcDgQoiFsAGgMFVjwpfuPrAR3FrNZfF7qE",
  "key35": "5AiFVHDATNJ6hZFX2myoszkDbEo2SyhhnBeMUfcxWZ6gR1CjqZ7b1M66DRC7NXPgiSpfmjAfJhfn3PyW6oV1D9nm",
  "key36": "hg5ujo8VXbZsLc9DfhvUW5Q3x8FVqfzeaZY9F5xNYrifKoM4BTrGgz5JhWh6a5h7Vw7zRvadhTo4r5xfXz9eVb5",
  "key37": "5xmwgMcNuHTQFQ1USesdMX7MzjhfJf1hnuEoC7Attsp2d77MRffFwWe7eUpv3n749C2DUwevjCxXWwThwScjWZ7d",
  "key38": "4fc8cZoDDDUBHCwUQ178TMLTgsx5BxtycLLsuDcKHMtGBvkj7D5DuAewbf517cYyhLMCS2oQHCK8cLxgCDA9aoku",
  "key39": "5nf738aEpFFsvKiHaLjZVMA4miq854gMzn4cC6wJjdNNaxsZByc4GuXQfzRtf5EBW5D29gnUm6ktgd5DV7qR3bHv",
  "key40": "awBh7X4F8NDT3LCPFmq3RnKyLje424XVBAwAWcjTfhtv3uvvLYLscT3ZWv2T5UKT5bnLvDKobJK1gZ79c3j2UU2",
  "key41": "3M2N5mHs4YxpWRUEFe7JZoWshkM6UmRLpkL18AsfBhuFV7doXmrdtajaGdHcuQvHoXYUWMskhsYscNHKuxJwgZxf",
  "key42": "2X4JnnNwBXMW9f3BWJYDadYsBVAr8HsYPXTQnfDeMNn2L2HJqunhEKTVwnUiHYNJeEdrjLLYDPYdq1Y5eX3Lgi5t",
  "key43": "2xJUq5iSktpRCYbYFfnjUyMHwdLn2kHFjmfLeJrq5tKtew4AEhTTRErzJrGe2sGaPK2ChjxpBehQ2dQ2rdFpA98g",
  "key44": "5ZBVbRoXpyar1Lfs7LgpabcsB97qL22EQ3kCQaqyd54uUZ8icKmg14TsZYfAFqHhbYhBzrqjWJeBpqgYwLsPwcG5",
  "key45": "Qn4PDdGxd4a3NaYRcnwQCUkanYQkfBwqw2dSJKAybS7hvtzZP6S7UAMnmLjXVXQ7oGWcdtcqyYoddHdN3b6BHYM",
  "key46": "Y2AZn5eyX7eKeDzqiuTNyAhJdQ541h2m1ALorKg6qpHEbf2bimgHbsEujxceKRePywCJYoAiRyzQTYxmosTD4E9",
  "key47": "4uH8f4HRNf4iQ8yiGYHRBjW7WBngUuBgX5Z1XZbWFRvTQ8NmQ1uTxU49RA8dCEb6Xp1sxJpHKs4fYHk94gnJuWzu",
  "key48": "3oMtMphXhyuQMWrZQ6jF1tnqMANULvEZz7JtebpdamPgXt25LMCCWQynNrMJfyMHCoru3x8TpfMdoqSf3pYVe38A"
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
