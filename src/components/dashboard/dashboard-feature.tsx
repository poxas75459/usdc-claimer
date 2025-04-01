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
    "4mA9xCM3MQxZFKdsZaUzhKDDy5sG1uWdHLRH2sV7AyWPH4PskXnXLwKYzMRHwaEqfDjhFVzrv1dWjBtiL88bZNzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67rAYaNkZe9aC4Fd8m4tEbTtHazpSC63DpjxhvS6xE6WsYBEo7BJsG9Do7i2VTTzJX7fhnicPNMySFRc2JDKDqaX",
  "key1": "KVvy1W1t2DLGjh49qsCH7NYe8MzFTZUy2KZ8KRCozPGfqHYxzy5HqDuKaqBUjDFGRxGuEPyGEeMEEUq2SwPfc83",
  "key2": "2Tc8V2rGMvtsonLZ4yAuxJpWtZbDu59MrDCSPETjM1ok5pJLQehB72UdDE3q4dsVL3B9kjxej5yjCSXo6fCRWYCX",
  "key3": "aUYUFbUKW1r9BC4fNqHcDXhseysEneR6CnxzWFFtVT1LrTomfqF8rtNPWvaKUsC7zqerRn2DhYe91kXc46k7pW9",
  "key4": "42mjzYSVbYWT58vxPwN2MzmUGwDWXRbbMrdpFWxgDRzNBkHGdJGVJB54ZwAXaSvNUBWGKzKcGwoce2bfFWtakvs4",
  "key5": "4ZUSjzaRP2WmyB6VafnFbsnp5ieaUjx2Tq4nwW39EPqJsSXzL5MmCDrP64j4CpEnMZi3TecuJSTw6qJ94u4UZqie",
  "key6": "4aQCW2sQ69vewaTuhq81XHKG3D1MxbzCZ5N9JSw7WS5ekcMCu9sYBUfFbuMNysSyvf3i1SqJdk5vmFpESA3uUSQr",
  "key7": "4WwnaYgSaKE9MZSCHp7zxsKJzWS7vMPeizZ7Vs41A9YYcFF6YAy21tbhLyJBdZ1GPauCDVWx966E49Gpi3cGieut",
  "key8": "3y3LCnh1qSuCecj8gbDbMHmEuVJzFLxdpUhtEVmAzXgjSdgX79XNu81zDrrgigUvRTrX8Erx9S2vrnb4evfUUkLd",
  "key9": "4tYm1LkJwCyb3JwoXMzGTv9FNsJ8pKnQg1PwLAYpVYHpZGT4ZRXZzLwd7r4eVv3FkiqfBWJ2knMMeq9K14Mxg8mA",
  "key10": "iJJGbASCqhAkkRQqSDboWsfDyxGgG8RDyhYQXhj86qNvzH7CeRG8HsUFGcFdx1qXSHsqs7Ag65thaVFXNZkQvRJ",
  "key11": "3EXAmfdFuJnGxGS4RX3FQQdGA2cmiL1Ya2QMj4AcqVGCQ7feCWnDxY8MBSJEHbmas7FFWVXrsN2HyQetG48tmPPJ",
  "key12": "59fDGokRGQpnGqzTmoKFWKzEeAg9t5ksnKE7uuhMiJiiC4hNQWKFJoS33cjVGcdZWWLk2bC6btTwvNd3P8owvtNj",
  "key13": "4xfNLigZx8Y8Av6zhMd2oAwX5cmDNUmQBXZEFsHwdoCTR4QZ4mwwu7jrDsnDSFbYtxiXEtaCzAh5i9p88E7rdtqT",
  "key14": "32vwHyWYdWRYajutbP9r2gaBtczpWxJVHrVmyj1mWusGrQZupGzDNWQMaeei62DbJDavbrMrBQcxFNswDDbwbdzP",
  "key15": "2JMKW5dU5XF4ngi2HVrvZq3h1ENQBdiZLtF1KEV9xayKSCj2naE6aNH5BoZuTRAy16jQvZzQtz7rt6aqPQryP8rz",
  "key16": "4P17xWzUdPR6iG6JqnEUkCyNaszHsUKXSznV3kMXUrrwSDS1soPSgMWbiEjjWPNzPHwJjtqp82K8dECc4vqGL95C",
  "key17": "3GfPyXR82Xzw9RmcXbXMN529y1S64nQJkmtt4X8yyQrquW9vPFADaACYvQhugnhhj3Lt51MpBFWcXZmkgs1rCAxU",
  "key18": "4hCR7pJJRachzAtFMmD967jYXfDEZ4tjfviarFZVoPMhbUmASVHr7qZhEnYvHeYMQokX2CzeYjmqeNm4A1g58JhR",
  "key19": "5nA3BsE7jagNF8jkMAMnKoNc1qJMqaL49xjS9wQnAq9wqxTg5WRDnsMSiEambBpNYaqj2Dq6KD7bd2qDxnbE4DXj",
  "key20": "371bzCFKAEuEjToBPeQAKXrrRmRg2riBzQHvUjppTSF3z94qH8vvy27RLUqx7Q2tssrk3Pt5A51cEnSzxjRGSV6m",
  "key21": "62bXP9W7kYEAAJciWsCXgSHbvi4aGu3yS25Gf9uHpDyrDZw3oP3XBYVjhwveVEwEeEBXwKoYxydqYCKhQxs6gtYi",
  "key22": "4UA7pqiPYWRmsb9kyQcEqQMx8vZJXvXCLJmGLgksaEkbYaYnc93L6Jeg5aJEvgS2tje8oDkK6SA9azVwYiYmb28F",
  "key23": "3gsHGvQ2rYpxnLRuyQNRsRZPByQLkBrTUkm26LS5hfKbrFNXXXBEcUtWnpdXEYyiuYwhFdCt6nzj745KEs7S85SJ",
  "key24": "2gzvgaEr55ZhXNFeTVN9akFbGj31Lq5SBcvHN8cwthadeMTcWHpQTeBFae7hLp2CSst9CVuToRdEjEKy2DHXBswe",
  "key25": "4Zm3iRz4CJQecjB9pHqS6QqBKs5ydmdXywqDajtCGVagZ7Y9sJKbSHhaEq2gqKoFvkWvY1SSop7NDSWeHRocxaYs",
  "key26": "9hpDJEGCTxS8AV25sMfxUzFsN7RA1a2VTmLUBRCnTR8j24MnY1Wuy7ygx38eFTjfHfianisFXkeGZhigNiy8kBA",
  "key27": "552YShyGE9zMJLtcS8Dc1qXaYpCQnou5PxjBSaPAjogR2uvBbUJ8CCgYgSzmxRtp61w8BHuFAdNTmA5PkZB5zT8D",
  "key28": "3MZvTAxioMD3mDEYFmzFCHmbRtwUcbigW5JHJhdh51aQ4FL8nLoYa2HjmELf4P7tatsXwsdBSjpuxCvq3GSt5EgT",
  "key29": "38QcsxaM8ZfTY8i7DT9tajc8YVCDoDyDc9o2BmY6TEjn8J7b5yynC8Y5mrw1SXvizvS8htxwKAG2XpQBNsFVmiJQ",
  "key30": "3SBB7AaRHri7V26ocG8txKuskBU9VhsEffZHn45oghPm8ABJZ6M5HEcmcUcxKzV6JUjWJZvMRGKiwRyyr8qtcz6v",
  "key31": "2myTnjeEuji6hZ3MzS16L2CSBdPkTytRz5Mxfw8pF2yPvzSakeRu56VGVAgjA1VrSYw7s8TxvNE4MNfTqT3ZpYKp",
  "key32": "5Ecz6kA1b5CxMkhjReCHdv1KYsZQmWjZQLvfhmKNCwYGJbwoozVfKg43CoZdS3Jpm2LeEH9RWupNgCca5eYMm6tx",
  "key33": "4B7MvCX8ABHBSqQH5t3wbsHYvMsTjWVZpGAzU5dWgzi9KkVzULq85GZm8VVrD9nxBURfvDrkq3qeWMHtu4UKzAXt",
  "key34": "3wStjq5UJCBQj6FkMVQ9FZHL4oNYSWDHK4v3iWhwisYzRj1kw6LxFDoxMKoveXbCRVr9bBu5DxB6b3Hdbn8w3eh7",
  "key35": "5n3fE4UTmuiWA2exKPvwfQuLqoajBv2JDQQYQafLsuFJuWTs1wJZMarcj4YcrT7gRbnuMpztifhpC7wgCfF4nZbT",
  "key36": "4zCWWJB3Dg2uWVLkLCt6Jxoa8WCdhvpipB5Wfwkssn5DQTqNeVedEEw1mYxkD5pmM7RDwCQh6fDvCNT5qLkGno7L",
  "key37": "3Y7o9wcFWy8obtbsic5QRoS2bdoR9eLWyzMXU7Dggh3k9snZURCnZKDtxDur26heMXUkvJHqEngJiCbSDXGXKAQE",
  "key38": "2WAyLwKL8EjeEgrg4SqWHzfohLFjwuaQzkjSp1wxu3nJvXTW7HknKy1PqHkk51QjEP1oFbgY7zMVr79u8TD4MNYT",
  "key39": "fjjR5EV2yK7SWdontvYdayQ25G8bHsydZ4FoN7STQvyHaK9vBQFFt2q7ER3nJNQABh1CL77945qd3j9dVHBCGWy",
  "key40": "4vvDJ9wXJAmhjX9RXWHsgxK41DGAY4zJsW2NNU1YYdCQWZn5Tn6bPrceViuHvMwCxZieyt7osZJrywUucKdRwtJY",
  "key41": "2xA1qNMFwttReREqXcDdPV8utk7Q3nqyH5eF1tWtRKUPAp7yMT6UN4nT1YLSLvToLF2DZYCfnjnNiM6cpFcr5LtR",
  "key42": "3gCqYrjzhGBCFBCiHJG6it31cSQQPynRWHbcbnwv1QTRmqczY3UZRLgGU3dZTPt6weNiuy83fLH6y2Bq1H4jTMgx",
  "key43": "4QZh9awciUKugsWnn8nSnWzKi4uVsr2VeQEdGRTv9pd9omw44NT3LovhJKF8urpjDwH8xP2CpJP19FDTtp1cNaM3",
  "key44": "2isBcTMihjrCeSsjn4B8Xrf8L2zvbXymbAf1ZPPrMqs9zLshFLwueJpJBZqkWE855pMYdCW91BmBdWueBxNCT96b",
  "key45": "6a4bnkj5rqJECzrjUa7goRjHEJJUFBB1PgtHNqjPUipkgPTCxydrzQR7Hz7K2LvjwWrgHdYwiqddmX91bVHaxf8",
  "key46": "2waDDDVyfitTVZuwev6crorgsxVV7yYHeQEjJfkRLf1udu8W8C9qXSgEE2bBJQCkp1ZDbdM2bT9YASeeF6H3CFNL",
  "key47": "4A2KeU3aeGsMqNiYwFEdPqLTktg2vZ1pVH5PJ97JeUWfDdb3q9UB1kn8fJb9ofgb8hCqyKW2jZy1vHJJuBMeuYx2",
  "key48": "3vBDNc5f6oeeRP2U5zsE38DqCvhHYLiivAV7ScK3dD9cXs42yRuthtLpowYAR5EvbnnsdQmtbLoQMpvmusyydcRw"
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
