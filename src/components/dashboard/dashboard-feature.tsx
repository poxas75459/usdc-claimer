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
    "2mop4E1gr8M5rGWJ22Z5aw7zuhhqvKC1GLnwv7zAiQhBKJ8iQSrFWyhR218Zjhzjy6FJfExhUMZbTx5X9ZxdRAn2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VjC8Ltc9v32wPW7HY3erV14gsKd2zm25pEhAEhqyGYfAg4nT8KegCBJxYZVhPSuyAqfff8vSrQzAmbgj9UG5CKm",
  "key1": "2Ro35WsSYYQT4qc4JGj6DP9WneQF7TpjyRLsbUnpzkHaTq1oXrRYrNRF4C3cdPXGBhA2RPTJGq34hS9dZwYVRpcU",
  "key2": "ufgidZ2AyWJQsR4gXmZfGsegKxVCdJL3JQavZzxRAUDrpGr7mkcs51pHUVdHJsRhdjSjpdywWZ34GYnCCTyisR7",
  "key3": "36JnYcJWjamRx2dbuvGywjmCQMqCww8JJHHiQ5PLKDQHzChcrg2vTrSQbat22jeAmuUhYiQuKLpGy3CSu7UDCWAX",
  "key4": "3AwMXscp5CtfrczSfZsRL3wmhYRDSVuiwKfzamQ8X3MAoZ5hJzR3q38YUnhsobpMiUMSDA8ZKFxvedLQJtSnb8cw",
  "key5": "67m4wi8Hpe9fB1CtWdtD6dP6GdG9Kr6ZUDNui8NF68NyNHZmw8uMCF2gktcmFGUK2zSJqKULqpMZiUiNcpEsy1MB",
  "key6": "5tLbXHwKYT7Jd1pnZ6MxuF8knD764G9keSbQeYKJ89qFoZP6erHKYHmatrvwb9sCyAUMRaAABrJJ2ho7P3UCpw2o",
  "key7": "5iCGnXsiTY1tQ2XvBbFQDNqVGyQADqd4g639WeLN2mtSEwEagU3uybtCx48FcDK3C1CCr6adSekQ3XTVEDMgRdxD",
  "key8": "57D5Hgj9ahcG1Go4t3Rzzb4FE2CKtQpiPsBR4qiottcMzHjGoTf4ipQHA7fLxLE5Gdd16RpB5eM1AVKGRUT17osr",
  "key9": "4NAtmg1nfayVwKjXbAA7jLhgZNk4HmzaPE3MeEJ2nHNEWFHbexTZREGSPPEBcWqAnPSYZgJwbzaXMaMbbWaykzf9",
  "key10": "5jT6jcF6rXkzoXYqPJfcN56vCSCMXU9G1f4EYQXTZwb1ve2BJpct71GVcve5rWzEnbwDRgZ6ckPMh9Vi5fjzvrWd",
  "key11": "PkBja9mt8qADghrsmVPcMxKhRRdMY6Sbe5a2kTeuUrpg39TwrS8mDLffHsi4zoeoRTJmXB7Cjd8P39LFWgfcJDf",
  "key12": "2UMqrVn71U46agWZuCpVRZDyf441ioEqoUqsdyhd4J5BRrJvmvBgzGTVYjV9ZH8z3pnzacZDC7TEnzwYVndoA4x1",
  "key13": "31LpxH91J14qwsvDDCPpjtqH1Jxy1jpCkpXFV8kknncZPHCBc8Mjow2Jbxy84jdPMqQXkPEkq7EkQZUmYve9Czah",
  "key14": "5yuoF9ZcigZdshbUTf2jXJ7BHbVunfiAZJoUVXpTRa9x6vZeuHoFmzJG2pPtJHBkAzuA6ZiYmZzq1SLtBThtNdVr",
  "key15": "3VeiiaTaAg5nju7HTkcqr5PPwt1AFk86d5pM8vqV1eH5YasGmHkXJaV46ukAc5ZKry1STVnQPL9sxQaZPf8q2Gx6",
  "key16": "2rAmExHWpGiRQ9p8iQhb9tcHLG8NcA77YDyEdRp3iXVv3D7mHv8E6gnPai59UfC53GLpe6p3kenBWcSg8C5U4JZP",
  "key17": "3aXysCyUU2q6C93cbaWuBLz5ob4QnXdBBdjkmZr4tAY9fuPGBZjKv5Fg5sN2cD2WZH6HAPMRZUTCtjnRgeQ25jUy",
  "key18": "4MjucJ6PTx44KaQJwJJegzomsn9zW8uzrofdVhh7okRjsCQSVitmYPxggsStgGzrfShHL37tB1JhRn6QhuRFeJtm",
  "key19": "2KwBVaga7sbRDXcoBt3W5D6AhH3DavpZQH1MKa3zgAgMNjpqeKB85Jy1eeugm9qt1wZc9rEbpekt85NuA5RKoieQ",
  "key20": "ePScrZkQT16GE42qSquJNPdtNr3MGfUKEseaLUSRhwVBvAdMrX5vCv69UpoSNuATUTKuKuVu3aG6Mh7TETrmthL",
  "key21": "3GMruCxdt5TZhP97irwdZEGhvUkQTJnKY6Fju3ZgZ8gPh9K8agfiCHbbXkLxzsWqTdTWYBGaNDGYEnwZ5J2XtF7L",
  "key22": "3tuYGZcobVT6eDKFaw9Ra2rm3BduNXg2rsZv6Zf9jm7QdXF9a7bJmBvU98aa2cJXVHDnDZvzyhVrDA5vY9cCRvFd",
  "key23": "3B6piiafFRAjS18qBDqyfTvtvLgUwobY2bLDHXwTvQ1vH8owXXzhTk1z5wY7L3DYHgQsK9ZoTQsFRYNDi8daF11E",
  "key24": "5Stw4vEyrGcoFK83rTnenHeozDDtE2VUTN66RQR9a7a2R9DAcT5NhEaeBTpoYZRSZ5264te5UDJKpB4yAqE8ZHux",
  "key25": "4H6AmMdFPRVsJG1rJQJG4QLRjD4MMChhVSHFnk2qQhT79GXayoMggGmk4XHvEAR8WGfhPQFrumpRDHfnNiiMw794",
  "key26": "5tnxeKqScVrmnigJj2Aj8ufUsnpE2Tft3h1ZD81MpwAeMMsenj7beg9LiLtFvksbybeoxyso86vSfHWYLevZx1SC",
  "key27": "5PXy2WfQcG1bbgmGRxpxaTMhM71xKZio8yjYJupDb1DagmQGbFisDmQs7ZYWTicBf3N2z7kWVtEyLW2EPEafAsog",
  "key28": "3s2A6VeTGux6uf4wkwcMdKZzuGwB7uY5qdH6BpJFyJYmYb3AZWcw7tRmzgAWMmEqHgDLfY3rjD9XZRyQi2bDjeGn",
  "key29": "4Le8pJDPV6BKRo2zuCYikbjUujGtZn8BVsuLMpVt2jCf6gugUTE6gRM3fNziEvsdagXnKrsoJs7P5rZBUUfiyxPv",
  "key30": "3CyPL6d5hzocRsCraJBkyL8xx86XB1F2bWHmUkRDnLE1iqR65uUXwJyBAxY8q6QkhxcvoCtTzVzJS2xSYfoUZV39",
  "key31": "5L1SbPpbAg1uCnsXHq9JeTt1gB1bf24dcfc1sWmogBzvoabKAvq5inBo2xCudTYkypWdDj7FWHsnKYGYDQbaRCbz",
  "key32": "5n7ykFM4TstaN86rqgbefKwu3KqNpEEmPKK47XAYZhXDrQ4ewnsHaRyAntqYqz77tRaQr7GqodtiLaSefJKd5HXR",
  "key33": "GpWtKUbTZTnPqmcRgSGkefx1cYL8nmGfTmpuTAYTZH3VaUSx7HarVa1zjCsQ3ip8FuM6tszobgb5fAZgRKNgRyB",
  "key34": "dwSULkkRmLb37bnn2kByJmQp6nVgJvze4oc2LBX2AsUdbtnSKxkKZugAKbMX95f6GHmc4CaPx28kKtsismpjuPc",
  "key35": "4pph8vk7j9JFCZKT6xXSXitxHaVGuCPHbKbnrn7abFtn89mJbSseNXjxzryoYUTkMfTQMCNhy9CdJC6EAiMh1wP1",
  "key36": "Dgt2kFzsncbn4DZs1r87twv8kzp7uwmJqfP61zwezNFrM3dYi2C1rUNGK5b5JedmKRVfUntKEv57bFkpLh7om9Y",
  "key37": "4CkBdZGztNUNpNYiicXYt2gFnidPWhLvvnwghNXoPn7z3qaSy7dRMdNjaB9X2wHih3eNzNTcij2iMP5ZhJGcwXeB"
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
