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
    "4B2DnAFkNogewUaSsEjhFzar5hQKdF3pDV9BPsJkHX9vndtnTSeLXcr5vfpRQeSUzMt9UbvZFQaaVnsbvbbbWaNA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pjyt2Cw2JFx15w5mfuqDPs5W7aFjwjckdvbwKQLwgqZ4KyiGtcGsShWhioxAKUWP9y7PK5ym1aetQWPg3GrEeR3",
  "key1": "5dXZmFYpUbdHMtrDF16qSzNnx8w8ndnyccaRBHjJ3g7Ey1GJEdmSo9TMBWHHRh52LLjAbri9pT88AhmhpRQ2EoST",
  "key2": "2LTG88QMpXupBvMGLSE6eMsBT9kRTNfQXVxfLpJJjWUTWnfqNEsq6bevrh1j875kbDwZPMtmKvC76cioRLnMRCZq",
  "key3": "2mJiytMsouj2z9wy6RsMq4dVaoA8mW4iA3J6Ni25qVBzRRtkTG6SKWamXKTxJmPe3DwGfWi5DY5JZk1KL6CniLyo",
  "key4": "2BZNJVuEUTrCBEm99x8KtHhAZahog2MbXFNSba68KScpXaSec584Cgr9CPyCRHrifeePnykG61V3W2U3TiNXLtTc",
  "key5": "5NLcaxbKWXeqazECc8aqkqqomRJNu8gyMpbWmwDjXZDFkFnXXPxmcvNscx2Zf25qhFpUS6oUG76Yj1o241nyqZWL",
  "key6": "4raN26JF5TR6wA1H2VZSiVYoMKXprsSa3YT2yXr5xw1kM8BaBdL2V6vMWGvdTe1jFwe3enyWd6FdRMxqoWzXTxN",
  "key7": "2enBKjzSUxBC3EdhzZB4Qqj3mWRSBjEXWrYdx7MCbcafWqqQuCJ9FUFjFK6u9XRXNweWki8MnxzQpP4WRMoZRjmw",
  "key8": "498eQUniNMbYGhCUbmuGbsqJsrHL8xvMboFCpbw5w6eUzXJx2qYtS3wapAPwaLYvfLRoEhahReWYNZgxRzw42vPx",
  "key9": "4mufbmHFwzAejoQub5EWKYaUQquptXcVtVZu5MS5B5e3vvuceGHVewqywi6rdSTztDcvhT9LYWg8ev1iLe6zNePy",
  "key10": "385bZASQAiegWdpMscpWNbZfr4txpiUqmuUgj6Xn76BE3NmJ2BzFKkfrAHcYCbo85US8MpeaqgioZF5KCpvEJJYy",
  "key11": "2sCwdQSA7oVUrGYJG8mdXeeY6wBdtDrCKPFz7rm9VQhjguaUzDk9FvAMQgp8XREyAuGrM4c7J6Vs1uQXfWdv2baq",
  "key12": "49fmEPmcoBXfyfDhFb4URGULoUm8xHmUfLeyNkWJv695wZa2SJ3NzrCTqLpC6fU4LBSNiYhysPxwB8PhRrWKvBxo",
  "key13": "3vfmSCiZt8UuyemNc1K14sDBFyMGH35181cG8Typ7Kc8BiwHbRS7kdaHFoepNZFTWGSnaw93TN96z1h2sbYDF38n",
  "key14": "3dHraNewURsSV9wwb5m8vbUbLxYSR9bQYedpZfbfaLRcEmn3MPcQgXX9Y54FmSu1G9cm8KiCmuxEYGV71eSkR1qh",
  "key15": "5pMmvhkSqqrduh5PDcCghByRsaVCW9D8RnV497j3jXRhzQanSDDafDx5UbFb9CeGhRAs7uNp6FML67jnrfyZMd1v",
  "key16": "5FDTLWLSqyrNyddrCfc7t5tvVpTg9BZJZA4i4bS6oaoX6kyxkqztx2c4mR7DbogqBpWtS7rdMAMpLohV7h9Rf7UF",
  "key17": "53Si1UDenqbhmz5G1BvQtFp7UMW9o9pG6vghVBaj984pLwUpHTTnPPRKuMc1K73TrEhkymncMGB72Zdf1js3Rv7C",
  "key18": "3gvaFiogimKA6z5iEwpUa2b8yXLdr6j2hChdAMy468WJLwLdTZHBcBX9qoFFfFSrLw8WFDad5d7yc5S1tzt6qmLG",
  "key19": "48wnrGMBBBa9J7btcSRvg4QAQBGqBgLeraRW4Kkiu797wjgac5jZXoC6cKTcoMe2bh9SEEEQw4XAQRWEosYtdzdX",
  "key20": "4iUKm5wk5V5sWTJRsVEV3993PMDEuSzcdJJGmB7xJjDoVEQ4tR8TP6967d7LdZtzDVQmr2Y5VJnirp3nrr29dHz2",
  "key21": "4eQyA2hb4crewxaBH9ojsNSAfzEoNmtbhVXVyQx1PHEbXsjrD2Cxrs3yLPaYMHHFrYSpG5kC5ED2bEJxEF81MRX6",
  "key22": "4eeNjZYR6nygbZkcvHRLvNRJ7K6HA8zSqnSZE3Zvs9o2AeF5vK1L6kduh76vBGDt7r9jpnZevqip2aWx4XEFxTkX",
  "key23": "Xs2fT4kVH8kSNriwKoRJrpAGH2daZwzaSD5Sv7ggSsHXKs3vuWESiXqye4yVQdj3n35WvXsRApjM8ng1LVkMoJR",
  "key24": "5uhR4f6Ry3qtraWbnrH6nJztqELCGZ5SP8NbXqTZYzWc2E4E8zPfe9nZ1qcELtHewbdW5C8HsbGLG7MJxik6g7RQ",
  "key25": "RUo3LPZ4LzxKXxg4keR25uxGn3pZGK71DbmaSDf1dbnSPHmXh1k3LKC1NMskLZXZw6oRp8o7ZgAJCzi2kWAWBL8",
  "key26": "2EQtx3QJDWYXKsEF9jER6owzo7GDoV2z6Can3CyAYLnFbuAdYQW395pJBn1XpRTybiwXKZ77xSSLbcrb3DFKuypK",
  "key27": "579WFK96e4KjFMhui6KZMvjzbqxxHCq86ca868jqW6foDryBT1Etg8gEo3RPPTeMFiQrbzeYj25f2UyJiUKcPMsq",
  "key28": "4YfwagQ659xbvYv2NtyiCnr3KQPXnUr3y23KwnJc1EURyRajEWK6iMgMSfpmd81r82XF1Tc6j7ph3Rjf2RFTcXAK",
  "key29": "3Tck4KPdYZZ67R5GTm3Rtwr2Sy7iLvjGVUm2ve8FZQQq45tBgBDizD5vAbdQ3L5EApbRRYQ8xf9x926a1A4Qpn4H",
  "key30": "2Yey2VWyjaiWhBUJTzfDgvkHVsdMmEstVHVXe9ubrJ95u1tQpK8g63W63qGfAg3eV63HdQaYBkE6TjstgawRhY9J",
  "key31": "4cUMXbX3EkPWbtjDkz4i7CfX7hjfmv3J7DPpAnyz5LHhQ4EnerUnVx3qPat53okG8E5qmRySZkwB1VKH6YtjVZWm",
  "key32": "GggigGfcoraVPthoMyZumDjpKXRHbHBcxXkyWgzNXDf1uNgGt3D6DXcCYhMdVwCGrkExKdHW79fxAM9wjjjyj7m",
  "key33": "4MfS5u9hycjY2w4iYDDriNtx4jr8yFBDGc8PEVf8Yz9m9iQs8t7rSQPNJnWbifZ4Bwh3RcYWXGKFXXE7jK6Cw1pm",
  "key34": "5YDtYJedSFj4QeGMXVRaJoLDUdkw9qAe87Q1n5VphUfvXeX9LeieqRLyWqUJ84AAYDAyE4vYKQJRi1fDwpBH8cX9",
  "key35": "3RPbpWvJRtfA64ZediaA5mcF8bxzM15J7q4HiL3LBRFDqW6g8UGjyDQMpi9d8tZx7adjtKdMeQsu1HXC9oYbX5ja"
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
