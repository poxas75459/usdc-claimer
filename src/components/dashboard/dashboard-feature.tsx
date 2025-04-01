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
    "n9qFA3BddggeAmcSHc7WGM1J9zgT5rLThkvJPEmugcPViTf4inkKiCLcqb7UWp7TWqDbbr8fpKeLXQjNZZoyxfH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AeJKefsvQar7L8sxpf9aBXFVZBQyFcaZmg8E8gWUHBUW6AcTGK2xTakhXdQJmLMtrCsSgsnDhmPY8yWHpnXLEYz",
  "key1": "45e1ajHyHwuVvnRLibgtwQPvqFXzSf9tAKW75McztwoNXeAUXA3rpPFtNDXPTZWRxzSKUndBa1vTeqkeMY26dCg8",
  "key2": "4ZQhnrM5UXprKWra1puJoAu3CyEpHziNWp6QbK5BeM7LfeM4fm2DrZgjjSm3As3EQKCJJz15u5CY4w5vJynLAvWn",
  "key3": "Ekbj1NPqfG5bfUcovNvyC9kQ4qqXNZqF8rR1LAiLVCzPyStJYEgMkaSJmF4q9NLHfvg1S4E73vipppFGoNHRgz9",
  "key4": "5NQRWNp3wJLXKZgXtSjpeGPTKdsVmCXH83P6CijLmXuB3aiKchL8oLCfNDmjTH4fJi2HMFRFdjpr4SnG9Nnhjyn2",
  "key5": "QTuYn1Dw9v1aHcXESjmC5fu8mP8nVmjhsQD624u1Lfj9Vw2zSQo3S9fuH54cHUvRykGDywn53ptNo2D7c2GdQ4W",
  "key6": "3hXUYFASPFHStrgPsHZheE2ctPNML3no3Eo5iievGR81w5raXDeVcDufUFKUkqtwPFb1DwFYM6CQExL7cvhQWAWC",
  "key7": "4DzNx7Jxh9KKKD5nvKZfW2YmcfoJ1RwZsuUCJuZjGAJ2C5v8eK5ysSADYudDctQ819bwiwKBZp9yqZwCA27gbgWw",
  "key8": "56CDqWk37A4jaZLt42m62rJs6YREawp94ZE55rQTyhmW3awcLUo6X1XY7hTjoGPWZKfUbiJPL8iqWrsEeaugy2fx",
  "key9": "vGSprBoPvfrGQxNJbLx2GqyYC7VdgCimZDfvyvCrik1z8zovyBhM7d5yEZadhaVQqBT8Wen2w8okfCWaYrKgnmg",
  "key10": "YGViez3w4nHv3UKRktKheiDh9TY3fypPkjbfTpPBV9dUUD4hQyPDBpbjRga3PdyMvw738Tf4bLvKJkdBehZQ68y",
  "key11": "4xcJ7oRkiErewtBVq1yWE4ByyJad71grASD6z8eTEmmqNWgQUFa5qB1kmQaRxMgxtBJi2yXYYnB2XiJ53eVC7NyZ",
  "key12": "cttzPMqwmzdW7Ka2qbPVrw4xvm66Eer5aNmAQ1R7kPKUx6QV6sTwFjVDFuEZEEHfePRmjmb7JTkYDLbfAnYDvm6",
  "key13": "3Gf95k15YtFNLB3yHvgWctFKacJn5J4qsSBLhKqrgPb4942SsLQJEdzgaxpDG5t6CFgzo4dMJ7JvTcMrb236hh6g",
  "key14": "32tvQbSbASE9VsEidLCJah3cXuxT3nVKoQbtb4nCjxihvZUDiVCGytSQpPybaCsL9B372vtGw75aTDgn3kiu36TG",
  "key15": "4Lo3aWNWjsqktrTanhk6n1QtHtpMQKRCE31VMpBJ54QVg1QH9cCE9LRbcTzA74BGNDkrYndFo9QAWfyubLGCgBGc",
  "key16": "2CQD9EmbVxGWomgqiNzqB62Khoj84dnqmNNUsU8UovE748HebueJHtmRS7vKm1mkym5hMGvTtT5FePx9VgMhR8nv",
  "key17": "VRrPofyYTCA45cj5XGY55zcoLrKRzJj2UqMKguPXLBuE7ZmisZZiiUAdLbwVyWYUXqNUvHKcQaXdh1iXxvHjqJo",
  "key18": "WVEoj7dnSKp1SfoHtL9iQpGdZFp7h5jgtscCmEL2d4sD4CTKPu5HSouhBMp2eX9cn193maTrAVfqzd9e4onRdWM",
  "key19": "4mYLvKiURCQShQo6zv8NcDZsLNt8DM1UquLtaY9yfo3zCZP7tF3bJGWGqdt9GeCjpE2vWhiafqGQFoKyzeX8YKbw",
  "key20": "2LwR9S8C1Xa3fAAnWn97ZRMauRCRRekUaW29LsDPDYLdHKtnK9Uq8tpkcTPNKXA9EdZHMjJiHFjopXnXsMq2CdUg",
  "key21": "57D9y3KoXrch4JDdDfuS5YC61Yh8W1taAu1bKDPDyPfd1HSk6EiEcdKEzcz4U3sR91i1oZJfQzmzumLgiZZUAkMW",
  "key22": "f3yGzEUSnF6JBvBvnzFQmptCWzNCY12gbigqrzGxRjKA2P1EFzUcwXRJPY5uzjsBME7Jrv5tzTc3GZiYCvnD1om",
  "key23": "67Jo3pQW1Xgemh66TbKS3AstBt7ekqAHbmoJMtSXFYcF54UAf8v8Q1nUzwLUTvp62pkQKRKtffG7WUmS5UiE1Sg6",
  "key24": "3QL1dBAtEMSsYZqqD3DQMqDvqFh9gdYPFntcPMY7eCMPcv37z5osnpkYFNUMDYL5Ci7rEYBSeEFE8qD21e85849N",
  "key25": "3nErsrQMTxUE3BhMwsMKjGLsviXfHwC6f5QxtcFEvN2EJ9pnbp2UpZ5ThPdRM27XeWagi6Rxctu3tarfnLXAYqQf",
  "key26": "4H13qCgE6vCGk3vHrdssHHVKK9VHqcrR4vsTFWSJYKBovQ2o4j6wLujoq9XFeNQHP9pUV51X94VKXB45NnqHhY2y",
  "key27": "4HSyaS8aLf17Zi5PyZUaAkMRDwu3vy8gFBz91kmWCyy763N6PxzaZpmsEVgdYVfmxBQwWEqsUB9M55UVgvdnb4dw",
  "key28": "44vVzHzKTwU9rg5exuRUNuTdGhYuictn5PsbXQ3snWgdr71vg5pQTHJQd3sgiRbeC4H8RAFNGsn6uHfHiLLURBYr",
  "key29": "4GHuwNVWJR33zxcBH6w1bfz1yNVP1gnrp2n77sa44LJY1rQwBZSfFn87hHuVCXJYyGKaMMzYFspdsrvemqXKoEZY",
  "key30": "3vrb81GFEkPmnZJ8NtfjJrMAu7VsfmVJ2U9eSQ1rJ9P8QuTWEUqPdxBsTpShyEHbBWpNiqwa9UR6R5mDSVhqFfSt",
  "key31": "329RFrg5KzY5Q5xUvvVXZAw2Q4ass6T17e17jRpLeHzWg1ETo4MAd8zZzDBKD522LLQtsWiZCnGHcLxnKdFWDqPB",
  "key32": "5ccgCLVYb39dVRr5NGs676teKn6TFRrcfJEZ6dU3AppESHrP2vaPcCwAaqHSxjyBRC2C38prsY6R6M1NWusENmdG",
  "key33": "VQ1rWfajfFSkK4NsQSYCvKomAGDAtLqWtUFBA6u7vNqWewXREvP3kmHSkpik56ypdEQjBUPxC4TL8ahbCiV4UEq",
  "key34": "4DqnSvtjQXvdtBH4v6LDEpnf49PYs4hpcnA4MBQKpzFFPRtnAnPN7qXB2zt2SvdV4QY1biCfm1NgEVmfFYukycUs",
  "key35": "4UiJRQYWQG2esSDxfEBSapBvj5HZpY66HvPXYJKRRAwe2By1TwCy2gjGGcRjcB5bGg5xRGtfCg3snV7EszBVSiLn",
  "key36": "5ZPNFq1ZsHVEvgTHNqUL1SRry1e1trY85HawxnbFGBxcZsnVX48mwRBS5bwwysHrFUp2Bjiiak2qHrwGWBiHgfvH",
  "key37": "yHQt7gHrXwrQEzkznBV62A5gXoCqGmE1Ar2fu5xrT6pujRkdYSxjXrnLpNUmjGM4DPMwPyv3AMzYANTUfzyzYR6",
  "key38": "qJAv1jeNRxLrQxcNcnKLYhycc5FLDvDrNPuoCbSXQyWfSXKuTotYQp3rgvQaHVn6318dRBZcHLhwgJF6tboh1vB",
  "key39": "5768z2NbdJkcHHge47pWmF25aU8j6FmrmsCTvJqhpNX8iM5zNNA4MUoH55sPeHfitYyPpvK64zVthngQ2MTei4FW"
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
