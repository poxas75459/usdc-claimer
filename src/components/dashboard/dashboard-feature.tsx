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
    "nWK5p7edt54y48XLNgEXnPD3z4q7LD1z9pDU9XrB5Yq5h2fqsxhMGXspw9xxECajBmmgjX9rPcNpZjbbhLKDh1n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PZzk69PsuVAAaaSJLUKNaDuSU1NgYUqejPvKnNCUut3YFAuGzULzGxmAcypU5HzzfDPRgvuRCd75NV3NyywVfKY",
  "key1": "5QeFd2G67zjfVTG2vFspPrLfwgkJz9mNmudMTZrQum1bxKXvqoBxBUgc9uZ4ekHViNPqjNFu2JpePxqCaCCxq8wN",
  "key2": "2g2i7d4V4dAmpFkeW84cKKrnAxcQV2jaQCjDy8q8kUNyRqk7B865t8AKvaj2RCcjc71SUiNXHDEfoiWtQhoJ3FEA",
  "key3": "57eJM2jgWCLwSEC2mZkH55TusfBZSHvoNTR7fUbZTpGyPM3EVFfRxfM1nUqxusTRnQA9vKutBQBvdf2W3L8CFwjv",
  "key4": "2kFHJB1V16Swuc97oVsHjV47dgXvqLXEeukJYajZkVumwTETdRfHk8b7VXbgHww3CbNyUJ3CoRLJA5oK9fsT3BKQ",
  "key5": "2ewTihjsrt7ppommSXeuU3T9QxWVm2zG9fhLDpyAMMJZG9MXoXFg75BXWCJWKHebiV5e2AnTrbqeoCu59V7P2aap",
  "key6": "2JfRT1tQ5CyrKMCotFrvyWNACyFmcW2BjBLvN1ZiH6RbsaGN2AjPfPjEc2Rbgn9PrHnYnhanEV4Z6L6aLdayCZuW",
  "key7": "3tZi1kF9sEDxLQYJCKQFpxi7oPd2Fet9Vr4dwCakeveijx6nmrbE2oqGrYL5cijxaSCcZupLEM5YVJ2Da2f7zpcw",
  "key8": "o31TqLt93RwVAatMw4kcmrramLsER182SSqWxHCTLyXVf2fSMEqSucgbQkBUWedhErEqnxRpkfwn9nFCRsPdxuu",
  "key9": "Lg18sig4PYj6duyjxDcgiPZxiBwJC6UxmzpudvA6tZYMfnZPKDX17jsK4Yk8PyhpmsWVpGuNcu3HPoQxHDaYb7d",
  "key10": "GnBJ16ETY1rQqmRDn2QxomV6779ccbLzLCbaxuHVUJVxCUNLUCrtKNubJgaopHBsgQWc2EbZG1rWrnQRQPrdSAc",
  "key11": "4NPU1ffQYnmC77XotS9E27uaUj4ifS7xGpjEJgwWRu1BvAJKu8TqU3MyLKX9CaMFGwcgnCBv3kvseQyKZY7RTugv",
  "key12": "49rRASsGGkVi9wCXguZK6BmsfTn363rkhPFhQCpVbrxsmcJPPdKWdA1qpQJmFW863V8RJWaAFMkkSC8jNDhR8e6u",
  "key13": "g6Cb6qUrZKjJxLMbsEDfjFGUooTXcMPpSaQhwafywtceGt7ZgciXj1yeY5ywDthKDnLSeU3EYPjkVBLkTBKfqE3",
  "key14": "2App9BStfrpvuw2GqRc1JW5GFHqcD3zZHdNKxP2E8buS8iVWWzLesnDwG6561PrsLqmzEsYygHr787RXK6RTzmY",
  "key15": "3tADNNaejxs93AKD53WiZUrn8unDrdGAJu3NMaBBqpbYEYw5jztsp7ivnjQBoCQchogeLZ2zmssiNF6ingHSv1rm",
  "key16": "4dBH8i57dkSP2AsyFGHappMhsFQTEEXpE13mNcKF3K6A1f2xYJq7PvxZfrUmwrAR6aWqn7kQd928yVBLPo4W37F7",
  "key17": "2c7x9zuDWkzNZzfYkzELqdCumrcCDmj7WZRK13M1VBnHfA98M48hyHyoCtSzr7erqQpdnxkndp7pDN8S617D3CTr",
  "key18": "2eKxcYStQddNNs4xovkyzMkNWMKg34NZnbJCp2bvi8pRW1dbnpqi7yrJSQJkLUXP45rWGxnWZxLsgqWjBH6BCJyJ",
  "key19": "3rg8NU2aTnVveVD25BapkngARgjc85gdnXupuTPLY3W57ua7ex4NqDw4eHnbVenpmgkpTcMmX9vTLKaHDAoBYf8E",
  "key20": "63Q69siXgs4kEtKPmzP4czxuhoBWGThkjWeWmcWDMJ7erGMepRMu7VBLcCD7RYC4yCuSGfggKRvw4E5s8Y497Gkf",
  "key21": "nyhEuPsePixjrooS1YYjVkL6qvQKzVhhE1Ec3mqaHFeLgUHTtdE9QB7byCrugFGiW6iV88jXpCbEXLHz3ihWysL",
  "key22": "5KLfjCehemnGKDRFdi4Z5gqqag6qha1gbX5URzFgqtm7QBTQCXLJoWgwT7T7tni65nVLZ7Qqu8u5bo5nzL8jGQDa",
  "key23": "5iWo7hu4mennKVJmhaY1BrHXgzcj4BHArwFxGB1mTacWirNUXTBhftp9HMo89CxJsDyAxLDgRUgtnDe88VMePWLt",
  "key24": "3bedr92koidxezLNpqs5zrbrRTUYeo3ChZ6rv91Wn52KhVTPXYUL9YvyNdNspoXf4gz8k5i3z6KahaoPxBUx7DB7",
  "key25": "48AZuWq2JymkcvxXUEmjVzgB9DSHvUgtYtN1mj9mSQxCgKinVXutniPEAYaYrs6cfVdcDd7fv57U57LbPmC2CjS5",
  "key26": "4ZCk7iPYRD4nDFtHtkgAuEtcroi3yAPrMtkHD23QrdHe2AJLRCAHWKiYCLrE3zjAYFqjUaw5GbHscxKznZE8F2XN",
  "key27": "3FQh2sQqFbhxByKiS7nRarNqEtCjWiTdaq5syKCqyD2nMJgUS4Nnxz3tdGY3vTWzKDbRfoX2aocVSFgMeCiisgeS",
  "key28": "2ooEGe64JefAHobYGSDzE8y757QJQj8v25vAqGu5Hkh85ZEbPTcWKrJPKpipCFLuij4MSejsuJ1ebqVxsDpU26yM",
  "key29": "3k7nXGozn8YEaqYzmzammYkWNNA2tj2mw4yGGcsMTAMV1mSzgDiwr7B2bnAS2VQRzzpTenaRuJgnaHuxnjm3Kd5i",
  "key30": "33Ry7wRGC2fHC6MAQPei5qVRzPLGwSwd3gNYXzZyni5E5Wccw62C9Yo4Zc93TQ1XsqQ1SVZxkUc4EEfHfCdYNLsW",
  "key31": "4PvjV3FBcCiLQG4dcipRSngMus4pSVqF1joP7byw2eQgCkvKGE8Rt8qCRobXUk35oNopBqd7Zm2C9HcYsG1HrWk7",
  "key32": "4pGcLmxTqfdKaJSsJQAY17uLo9ZvqmiU7uE25rkjru4c6JTQb7cbWt17Pt3iEpdzH6RiZjXxP5ayNzBBynE732pJ",
  "key33": "2Lh1dEj1BGcL8g8an4uzMU2JmqVMHV4HcarXYfQEEP6qVNSgjr41Ec47EBtk5asY44S5MxUpVqmL1TcLU9iuWBCn",
  "key34": "A53ioSswzWsjPe2BPAk8BPBFv8H2mPA8meMMhHMNksHyjKkQD6CQrXYKNAnG3C3KYqegBgnQLhq3gTj4fjGCZAr",
  "key35": "hiUnzxD8h8Ja31dNmxMB218kA4hqLGJiie9NAdSwBMka9S4CZMURACMmn7TSupmVKjngAiGyUx8aj8CPfZdbbqD",
  "key36": "2uB8FN1U7ifLrqUa6C8wTnYLVPjZrGzccVWRJvgzxqJWMXkc2Q65wpMbyup1TvQycLEqx9Qd3syoiyw1jsCa2Ftz",
  "key37": "5GbQT8CZKGjX3K7NyeicZ5h55kLsYD3X9179ZfpHnRdaaYwRzLyr3vAoNK5crK3L9jfofYLTx7tXuZSHhg3qut8n",
  "key38": "5ki2Hqa2WcHW3Bg4eKC1MzP1ivjVJosCVL6895hEW3umAoncju759epKC8DqzQpZ6puRmtzfpSJPXRxUp7GF9L58",
  "key39": "UbaCmPrJKgAdxVX1TShZBYZAT6Th5ccQJ1qX9FFt88rfpn3Ayvm5xR3zmW3bqh2ZcA2yRpf26Npbz71LD5bQAQH",
  "key40": "3bNyoBUHddkZzrEGLU1wYRN83hZUWbMmzNpNSNvXHk4WgCTBGwsg7SJXV64MqhPXwkhu4T8rw7ZwprwJ2J3jRx7M",
  "key41": "4rrJqxXSdV9hGPn2VcLaLy8SLpHrZvgis9PJgnZp8S3XS7sXHVwheKYoTXcve9wCmbSfHjaDm7jF8J4WEg31X1XU",
  "key42": "3T8rdw7oBqdVGdV784SJsweuvgLYtx2pSkuAouiHBDJaU8TvuNQd8XJ86j8n6ypJMd8uNPBbvgDvwuMSnysyYZVe"
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
