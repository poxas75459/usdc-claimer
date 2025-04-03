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
    "59QKhYW61VeetUjoqCFGGZZyvmk4VJKHdq4XK1aMyJtP8pVrzqt6SgzzFGim8VPg1LCmJDtfBmX39V7PxDpcNPrD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DPSB4K4GyRnkxSS8ih2HtQ1c4M1cVVqFQsZn29vZNXYWt3D6X1TGCK9Re8KYr5A2ru6utzkk8kBEDJ5oVTqF61R",
  "key1": "iCkLncwg767fvrNxRDvWs7kNpzQyfyzyNRyPA3nVbF1dVH3VJCBuD46UvFXanYwuuY4L4t5ibF159zd2t3Zb5Q5",
  "key2": "2h2h7KKd2nFeVuSreXChEFGtprVgGGZGqjQj5QhLEHjoBZWwYF9SrDzdzuC3UQbSEz7A8doyCrNZhgvd5gGEifHR",
  "key3": "5UN3hrYJhtNZUFvCwx12o3dYb57uq9yYUgDvvVPLPbDjgmcD1DWMB6Sr4khKGtY1LY7eeCQ4XgPLrzdWX9DjUXvg",
  "key4": "JBpCb5J53k8yNWJjUbFqCrxf3aknzRm1XL7xLr68Niyc3fWBeRVd59tbyXaeHuK6pbCYEfPkq3wMfpaTvNxMbDF",
  "key5": "9PZjVidB6znH2CK27RhZcNoRfqJRKCxbQiuBS4HvyFJs5XPcCk2gkYaLgpWWUxuADVBH3THQapgsY1JpCtL1r8i",
  "key6": "5CMSYNpyaw2F8b8nzrcHMxCZtnD7TbW1KZyNKGNqgV5M72RnoAW4fYiGncB6Qjt8Vp3efJPZbm3Vjy4nhWwDjEVc",
  "key7": "QdK6DJeuMvY2iH57qdco4HKEgozBLbtD2jvLV52ii2QoR3yfiFYutwS2oQRvoi1HonPzf6QseZhttZNzpyH29CR",
  "key8": "2BjHpUjMQFtwrmqTPH1otTT7NeycNW75opoNi5YQg4Zk7pGUnP1VgrNuxeJ8rYpD1DfDNYdj9HYViMnTWXohCcsM",
  "key9": "3yyPgXePMoCYzQ5axKaMLVaMivpPeo6jNP1ahwWB9oixADNbJDjYUVqVP25MZkakZ29jyTVmB6d7C9PB88GtrWdv",
  "key10": "5VtW7uDowwuWDhwvPuPxgMnK1xGpfCXEALCEwr4zjoMYQfbcKMaH1C4U8fXur1dvpwLKCTviC94FA7aVHaSG81nJ",
  "key11": "2Uu1PRmcu5BG6ppFHnh9YJzA2egLA6oiThwd1KQ4coRStBbx7kftpkZTsU36PkM8xoiBhuVD6jnVQxWQYp8euivV",
  "key12": "VH2SVPt3GUArG1oxBSLpDC2cuiN1PXT2ndJJu5EQw1uhDs1CwXba7gFrvBXevtvTr2KiT8iv2vmDFxJAKWM95gN",
  "key13": "5jMk6nSGkxKQsN4e266rL5CVNMr4QC8wbSCQ7RriwERsN7Sbbp31FwxBVXfDDe6PUEWcSzf2n44TbkGCjxmRaE67",
  "key14": "q3jL52JaSBfVphAqoEtbDazAW2wzveQridDW8qBWXtWNyGM7hGpXvd12WonxjPNRKQnWdetez48KgYPHnKsbJeb",
  "key15": "TcTCSo9HRwJTNo7Bg4sWPU2Qb2LgWXswJxXBHumKWwvBqULKCLo6QPLyBbmpFVABeGUxLycX2m2AtmzZoacc9tn",
  "key16": "5dwfRzKid7KaxNmXn3vWCWCforsdccTFGEinpWSXqXkiEYhJNnoARtLg4ueMDf13PXycymNorY1gjJnmky2qhjMn",
  "key17": "3MLTkBsekrzZFmTvcYjhLMAPc2iLV7zL6ff9tJwGYuramxezbES2b2PgM32eHjKhcmfR4MGbQiKrpi5rPYZPnZAd",
  "key18": "2dThBNt4f5zRZMthivDprpCaNzJWHCVMvdvPYJVGhb6Yh5aDYUS3BpgD2XxfmVrpVLyGp1cQA7LVexKDwb3Rxvhu",
  "key19": "4ewQQ7avNcVTMFn66o9UKB9NaSYJytbGbRFhxM5THqa7rT7x8R2q5FasjfrZ8hBU72Su9ydLfwKcxatMDr9nYw4k",
  "key20": "x58DaPq2nCRcNJ83F3bmZnKAfPPvrNmLpgj8GZ4dAd574DNtPnkXyvh2am9tht1Zqaxm8MEapSCpXqsCQiXwHBK",
  "key21": "3XRJUX1kEq3q1qiG3yndYvCgLKjxqJAegkQ6pyqbCqMpKeoDRcJRTUFCRAUWaH6hTfmEZYriweekYkiVbWWeSd5Q",
  "key22": "4RGvqVLDJ7UDWbboGETNsbR5H2yHZ4RAf5L6fKW3k6z41p2biDyajU1CobAuw5LjP8tMZvz5gQ5cGM9k7j1esGXf",
  "key23": "4V49WSnjawYDugC6QTRXLTukwNj6j9bhyd8SkL65XcUWaNFqKuR8p7bag3h3bjSozPJdSLRndq53Bds8GrvUL1q8",
  "key24": "2EfRrWzHMuYsrm3AHWCQkLZn1w6KTXoveLXBKWkwvixvRYEDu4iuwGXHhgZ8VPHw1PvK1mLU4inFKLtPP6iJrZ1M",
  "key25": "486SdyurTxggnUsektxGAKgEUudsNiVasdmyzd4qQyCxRZsAzCZEGTK4WRZK2fsXUsbncUYeeU3HyTfnPmbFw85Y",
  "key26": "4bbRjVGCnLQRwNX8tV1Jh7t1VEASfGSb6WJTDaXhQ5we9sJRaY8uwbjS1pTrq134Sg5LacHnz88PfXwAXYDJom2L",
  "key27": "zgVdiNSYiooZis8PaxcSkaeA9s1AZ4NuAciMPuiZXf3bSpxYGPyg7rvPzPgvFuwDwV1EViBADJaGgFFaY9fXNsD",
  "key28": "2CDcRmfAPuFHrEB1V7beuJw7yufUEwL9JicvKyDL1hr4rqbhQLYjgF9P3HwE29epLMYyEKvfC7JJ8dAPU6aNHx5c",
  "key29": "5S71v2uwqhDtn9pm2hPLif2D9dv4Q2AwKZDZ8R56oCxc6FgCQzMuV6dhJpsjt9v21WcEhwPyr2vRRbn9a9d5ju4X",
  "key30": "35sFMECGx76frw83VwBCuw6qitwRmspQfCTYMAAyZTWnHtsWErU6cqkYvtqDvXzKriAzhLzVPjAo75iXRYwjQUFL",
  "key31": "5gw2J2S1MRXQt6GRvjpxUD5MsH4pT6ZbzNKrdbadMsCmt8yMJJAVrtryjXT5EDsLyNHgE2MZrArbJ72xamYifhhc",
  "key32": "2sJjBjTJ1amMw5PzQp2tev1oJTCEjvfr9xq1ohgucFinFfqQzjuWDyZrZg8N8kz5ni9NTfX5viyGg15gQp1YUY4A",
  "key33": "42ktMUTYLZLTieRMGWznuvdEgZecJiCHq4Zn2WsEP5F79NfS6xRnaJ13NHetnMvHjXhjqwYRmy4K7b7JQtgT7W44",
  "key34": "5kUcGMFaPARe2ecabXDsiBXZqAZSRFTJzCZRiBdebvA9XiL5YNX9YmEF4dzx9wQPyEtS9PkKAaFRzVcffjRTF9Uf"
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
