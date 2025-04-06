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
    "5BUPbQZLrogAFcDQ49mgpTtQyYgVDuttt4C9u7FmmbymVppvDQBRxyGvajnTxPzDZmKXrUUkUGemTVGbMBz8FRNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vzfHjS1ca8dF1KeC1WFjQPikXybpZb1cxMcZqNyYX1W8xZTWG9xcA3Vc2jXMhN6q37xJvTwzbWP4Hf8YKhm6PVo",
  "key1": "5E2zVDabR3tgpWw2Q1fonfz5dR8qiA28AcNHCyNHP938KgKFkotE7nBnnMk5hHfUfEgzuqTDozCiUMQYBb5NZvaM",
  "key2": "4vjirv3A28uerw3Jyz6gXEzfyKaecfP4gWqTPqHb8zNTfd1SLFnScCSfaBBfDMmvT4LbWy2G6eMpnFkGLZyEhmkb",
  "key3": "41HzdVJ2TeGqUjjBUxTG8XLW1gxby5TCKuKL9KAGUX15AvYsuNX823X5sG8EVeHtxZn8LgcU7swpoCSF67KDXP5F",
  "key4": "5T2V6eqmT5r2dDeMMcoGEhtKVn3vrxpSuNJn8HLoBPjKTFQC1REqvXW5ZdZV4FUXss9Yina1N3bCP8YWRZAyLT2S",
  "key5": "2TXBUAiuyJzVHMPNPoUKPzHrDdHyvhH8DovtKoQPS2SdUPuwCykecg6gixxMs6ZYe4ATxkzJcK3jtjRN9T4UrGQw",
  "key6": "HxRCNwj3TMR6tELoRhQNhn9iE1mJks3rBfQzifPYquj4bKDSwpaFm2G29G2o6CPBWnTBHLuk69PNK8L3RR5ybJR",
  "key7": "2zKhgKzF5nDf14aaXAMWKsc6vcRnSf3Nk2cfnWKJZWPxRjmCu7XHnVR9h9QXUVYgJEBQCAQ8Yq2NCUmWBgJ9255P",
  "key8": "3zyX16W5SrDz6KS8M6XSS3kHVqLkbQtJWEMoQpX3T6vPE9hWujZfmaS9pVLgeukpDZKZevx2WG4eVC8EUTZnmCkc",
  "key9": "56DSY4ogKuaiQq83F6uaAxuMDuB9ALGDuyhhvxk9PZimcjamwu9hFmPCQ8PbF6ML72nJgyzujuEbq2Wica5i6w6v",
  "key10": "4VDQ2RuZVMj3FrWNAnz4uokcKawCnyvLdo9KDhJz9Eea22ZCmhgimuADwmerf2vxUzZsgAJRyQFSFU9rfo1xB3WH",
  "key11": "23uQRP4vhGL5PZM1di71Nf2mAGDnzqR4Xqj1Cw9Sm7F1GQdwyhyRhG9JuLHZiCRmCaVr2H8J3cfHqnSUTDeakh52",
  "key12": "5FbH5CQ7zkckP3JeHQ3gremPSo4p1W9iar1TBo9xHA7aNVF1NtytPUXGX5dXauz6LTHo6qunrYvTXsfAKaLNEtTX",
  "key13": "3XH6hH1RLUqvFuYgPFZWmeaLHGkYF5x9UBmvBwCGHQsRNTgr7v2EtH9kw1YDXVah7SUvp92ZugwBdFcSSvfz9BXo",
  "key14": "5tJWDmGZUMc9hpfFKEwTJsiGvAzhoc2ZQy98BBimy8QQYZRXLdQWdri2Gc5BLyv69NNrgo2GYgwvtic2MMqjRNHB",
  "key15": "2gb1uwt8Vgy16jRk2wXwMsvd1h21UMf1LHbBkA9DKs4bYEPx6MJ4t1mzybYM2FmnewZ6foE3rgWyM8hATYyCzHt2",
  "key16": "3zkUQoQSj8Bpq1tZ14Wj9hPmhPjKLMdeZjtyXSYFqCjZyqiRKcFFqyYBdWdsQM4jB8ed61yf3s59jeuhnDjgHk8b",
  "key17": "5fXm8QGF1mkxzgJaSCeTDcRWSYb6ShDv3Tyo33QuF58ccpg5ToLP3JSNx6LY7TMPHpFK68dKFio31orboqK8deyK",
  "key18": "5gN18BqswA6x8dBi7pw18BZwDGMkT9sf1MTuwKHMn5oSmPKqCYwCrCbsNd6Y1EXSeruKQXPBsa54ZHvBpyeMogcb",
  "key19": "39pw1Y3ytGat71oXzbYJJ3cSW2toLRH9dSqboD8vCoZmueCy2kooFck2ptAmYzC9VRKnzbgGPhQRrEtTrJFqaYZv",
  "key20": "3WMNbwgxZUemhW3bo8ZnonoYRNeGKorkDi3JSgX4gw2vkpzyXcBaBNUDaQzDzeTqTUYz5fbrJBWE7147xB5kuYHY",
  "key21": "3Eakb1zMJZAx6BCurk6cvooJh21zNP89NM5QB6wVY44W5ehxPkKi2paDbg1zDwQRzMimuVqVg6Chgf1xpYpyr3sa",
  "key22": "2GgpLPfdTG8QQ7rdGGckUHYhdYxUdbha2Vq9CcmNiUp9pLHGqYqYPSh9oqvgyxDfD6inJej3JyMZPXHhgDbPaMSe",
  "key23": "4ySjypraVYFX8ViqoEik7fr8XuVddmaxVjiwjpctZbHmyh8mXLqWczsQ2e3nTt7Eeuf4wzvp1mijzmTLpCSMk9x",
  "key24": "8BNdxfDKHzTKtkd1EwttoZGYujpZeeF4vrgNxsYxvq1A8szHcPUu9ne5DZ2EXkD63gJku3oAosTVBFk5Z8R4re7",
  "key25": "4sRMwZRPn1LwXXzZVgkRgE948Y2A1AygyMtHAEgKkfheTrP2PiVbmy4em9fGmmFU4BASaJTefDrYqjyy34EaQExE",
  "key26": "38nnMDKkb4H152GWXg2v4rrwkVqTKTasssqVmMaKHxYutSLc7NCEmvrhm11BWqm3q7NQsBUfRkz7JTToVNhatfbi",
  "key27": "3CXvfYawvkobrSodSvjXuSxJbvdBPDgwf6T6mBBrZLfsVKF4Mw88ydQZYbHnN53cxNsmb8KJ5zTafnZHmNfY6q4i",
  "key28": "65cS3bSY8siFxzPpLURsrvb4kn2BRyqBVCUuMhHuzxjHzUhiFakACN3ThLRYeKE4F4mgLrK5mgHk1tMDkSmV4Nvq",
  "key29": "3G4czHhxWYYWHKL7P7Qp8Xgvg9CqNmJ1dJWfTkNW2jkxTdPjVkCv13ibVGtBQyE2ZHr8fLum6xmDV5ZGAKcrgmMo",
  "key30": "45x9mviPWNkaB2pery7sVzE9bHkaat3M9GyrUmqM2C1YHiZet6nLZd3yCftKv9uD2bTNYVp8UFXULDkFW72aFxjM",
  "key31": "4aVvmXxxavHGepvWaEiHqPMy9CeG27v2GcTHvqpJvpEm8wm2nFpZibWpiHAX7AYcif5S1KDmvzZcBDJ7hMF68FH3",
  "key32": "3CiLbciiqRt23XaAmCDZMvebGgATBbXEKwia156Zfpku7vTGbL7ttfNssqPJij6FjyQHEEsJJEuFiuCXayfMDPuW",
  "key33": "4sQnP7z36TXSX1neFFhsfqeCg2SPgneWoEkDAYPy3wR76k2yaTFuCqTXQc6PnfpLTRrXcymdaANNjTunD2FqbWjn",
  "key34": "LbETArH6Wt9dMTztYNVZHo1fsPehi7dZoKPuvQiRPTpfcaXiBjYeFb8UhjXUCYf1tqDubb1cBtqp6KUNVy4B8VK",
  "key35": "3mUZyHHWuCVtsFNQM74fwjjG32qr2cWNdjb71WMkbBNiN3r2rsBUQCFwXZS4mZLAwuJjV8aBMv9p1fLWVNGzRH2d",
  "key36": "51Up6mKqtRNdi7v57FXgQyDfdbgWBsp6mzaNo2j46v73mHeSb1eGY6kkRGzJR2Abv5dhwYfnHLrATGYRJajpYRiP",
  "key37": "kNoDFsG1H4jryFoAaoVPdkgBTGzpuXEUZuGinHEctHkzDW8mBwT4PmQU6jD5LRCcuickLGKZotVrqiRyJHdwVcU"
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
