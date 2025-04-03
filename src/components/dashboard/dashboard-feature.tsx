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
    "5ff5hTMQhivN8pUj9V97wkzFdM1S5mjYzutishfLcH9b2XMTdmozk34UpQ3kS7kk9pMxwrymQs9JweeT5Pp172RG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MJHvfqpcJQVWDmJd6EW67uEA3K3Y3MgtyDURrNwy9kDh5oVjjU5pwZRkEmuQ2HfsjYTxW8px5aQ8n37naZzSLW7",
  "key1": "4XdGW1huzaXZmUFbGe2yDhHP7TP2L7u4mCyVtwmyQGq5VSFdm32yqF836y8ReqXpnrxpFRPTqtFwN1SMjdxX8iPu",
  "key2": "2RHK7zBM2JUD6ogtSG6YaixyHWbcJb7q7PQM4YsW5YNyDbyosD1nvdX539JKTAVm5dQkfhR4LA7gJ4bTwLQdkHUX",
  "key3": "63yDK9NkU6bSV41472H17uTrktCR1awT7be3HiziU4DfhmmXw15TeDcbFezvDXXJEJCLKCzK4VfTGdy2dxQTbFvC",
  "key4": "4pyPzEiyiHgAWSgUfSVaUyvoDHgMzUjNAvgZW6oXFC1XxXyFQLx28tv1AetU1GEQPhR1EifpEBaV4xtP5y5hVfxx",
  "key5": "2PF3ZwoxRvKtM3nrFGgDEiz3VqqDKtsK2hWeKJUfU7kUDx28Jm19BGdYB3LPH4hQbm9KnXKrehSXnXsz8Gr3RVZ",
  "key6": "5kaxYgV9iD7FhrhWw1nF5K2Wh32KiiKq38ym7sjw6ijWDM8tKXxqwFg47HRYg6UBfa1vP6KBCeWS2VipDg6fGWFQ",
  "key7": "d4YE4SN8aVd3Q2K6hyi4s9V3auBZUfmkok8ZBvmeFugLraTA1r5Zh75TmSiiPCKQMaDugdmH1TxwCCVUGMUZbKn",
  "key8": "4Y6RgW6AayUYmFyy2t1rz6Fmvvk6otyuHKknWMeiBdjY77jq8KAgV8ysmaApsJ8bEnP5AjacRisfDCrk4quwQnRM",
  "key9": "38tUMwwBBZEoLyRu4yD1sge8JPrDfWdnSxoRW2zHmtf9KNw5Yd7yi8rL4AHz4aEszut4eiZQhfJRuJGSMpGJTWTM",
  "key10": "FgKPuB1AV765qoGLQRAJqaxzKhrEpDcL5y2bqnCqxMHFNgYE3qNx9ZPWPBBGUopn9acAQSKWzg2LvJrmRbC2cEf",
  "key11": "5ZVYEwnS2UvQEieE4xuKqGe7u9ThzMSbsprwmNYsV7Ef5V3TBjbAMkp1DxLdYZkoZy2Vun9XfKRA3XH1Bh7NjAb8",
  "key12": "3ivg4JegYSW7QDDknieeKEkzD4aEZeKSH5B8CS8fEyUZSaqjPU6oKQvDLkUNiuZVaLNxK81eiLmmhZN9J3JxZVAk",
  "key13": "4ejhtmpMfjiF6jVCQMZZs5qc5TzFwsWRgm15HXSSxHCCDaZgZzj4LS8DtKHEwJQy3fxGhC5VnTyvEgGioaJjd1eL",
  "key14": "5cG4zqH6GgYtz4qQNoMFPPrPZKyzRAHf4K8ckPHZsJF73GTMyBpKkurGNVxdoMVUP4rKtkxceBEpH55SnSyYYw6m",
  "key15": "5UxdZT6DyCSrGWxbQNWVu9fYLyPrB2DCqh7TB9V69xScQFwRfHGPQZL6K2zLH7qiGraRR4iAbTZZ2mgugF7CRRrM",
  "key16": "3MPJpj3x41iC5Duv2kY982Z4eon1iZJ89psBfWRf9m9jcj5SQhensYXG74TNdHVe2pxcumPCoWniYSQmAnvubNv",
  "key17": "d2PyTueNadVph34RRS1DJtdhrDq2yHb3PbQ947WkXZJtTDh1heXgaEF9VRR4zSApjkKjSG5nhfypop6WaTezYqa",
  "key18": "4iHyNqt6sKwo96vDzCG5xZfMjn9KpYsRqaohfniPAe9WivXA2KLrFE8BoBnpNYnpouZBunKc3VVa2BGRkuP6EoUn",
  "key19": "5hpqYBSmXdts1j2eupwXu34HwHtpQNZmrwVvmXxWix4Csi7Sp52NnsRCyBWdvogVyCBP8SL6tq66pYvaiVPPWnvk",
  "key20": "5wxGBvdM1X71HhAdqoJEPoVWz2xH8FM282JVxW43ZMYvy2rPLRb2fqfPMadcYcY2qGjpdDdsmN2NzsvzuDuRbPwR",
  "key21": "2XnDPS5MU4TsYWsVrgPQBNDFzFY4btZ9mm2Wd2ffvNYtWa18co8ZHvr8yMaKUHzwj2MefECe8dRB1Qpfr8otMVvK",
  "key22": "cFXFeHGs3WCfG4mmjBGw5cwcABxaDZeqePWn6utRKriGF5GEUoFHuUApqsmqsqziroYmtBsx3CkYXFNg5fLXZaY",
  "key23": "5BXif5zcfc9Fc3eagu1JWRVs2uVoAbX4rEw2GKeaSHRqSduWZU86iNcup5m4aEHcRrGQ2LAHYHAE7YxWaB4oMFgA",
  "key24": "37Z76QdwHMdWmWqoH6nCUG2bZWz7jNrWevbv3gt7dwfwLm4EoLdwQ2aDFbWBdTHwUc6pqfm9XJtUQpA6Ryye3u4i",
  "key25": "2bbRMBpcMHGzzX59ehTnNms6Zj4oYn1PTCiZmHiNf6qgtvA3ZNkQX86gfKYGQbeAVXadpQB5FsnAZ2oyjLjhL4T5",
  "key26": "x77QCokXeKDt9HBf6XCvS2L3dZxtUfuUNyrPcydPBYBvN3usEvyTAyusDNgxPKDFRdM42EnbHW25g2XMsQLQ1QX",
  "key27": "3KL3kU55BkvwEuzogFwX79Tf3wSjcNb4stekcBv5JTkfboihBtpjh7FPi2mPVk9YUYbN3NFQge2q8mB9wqtiisaW",
  "key28": "3pVcgNrNLna9xEUAwMtcxYmMkc847Lzdz54A2ziDg7HdJQkBgYEkx4y5TgaWSsfQ4ntZz4tUj4qASz5nWdAYDCtC",
  "key29": "65RGir4bwSen6FNSzfKTgms9ugfozLoK6JKisrS7f4b17g4TxvMuFxZ4briHBVDsMKGWkNcuByztMFv2KNFQ77qy",
  "key30": "2ZBuxoSsccbqKKVV8FtAVqa3QrcY1ghyzRrYg2zCbTyTejgWrnihaz795LXH596vCvKidt4rqSjSP525mcjjXiy5",
  "key31": "4dG9LyryYfG5CVvGaRp4h5gHBmCHq3tdXpCpcYbeZH8ijJGJt8PNEb2rSoUcMW5UTye85CjuR8jKXaWP215aG4Re",
  "key32": "43cb6ow3XhmyA42WLNCfSKHEMnjbxhPgdPfxZoGuw8v9JfLZNEmYZfU2dMnfWAHCTcNyWZvpLFkQqxVXjERYRCY4",
  "key33": "59Lu7V3FN9pHy9N38h6Rg5mv5e7q4BY1n7NPssFvTUJM4rEqhtd7JekWZ1hgWafxzDxKfzaeyZgPrqByqq2qUWL8",
  "key34": "45SRrXvZgaae98iProVvGztXVK9ZD3j6stUPB3MsCL1gbDubhg9u5QLtLZNsDvx65MsHMMXtQ2j76u1CRoPNNjXv",
  "key35": "5axxUDPdUKenVbmfj6ge49GY9QXrGxf1MEhqNc5eqt5bkZtpnRpdHdTPrS98rCeqNyDZtuBD9u5czxRndpTRuYrJ",
  "key36": "3GeoYgDe9JMvVabyW7Vh5hNgcySa8X9HXZb6aoopvoLuJ6fG8CRD868ssrKv8h9a5JNT8JkGT7c1tHCgsWFiwSFb",
  "key37": "4F5EnRbFpJp6oEwH7kG8Xfoky2NorPmvwytpVxZBN3ae6hLKTcV9HtUuEiFzVzA6x34yiXhijK5nDZR26FXH658K",
  "key38": "3x2ynVv1adscL4aiQ6ibjv2XAE5bB2krzamiNqUCL3LwhtauZLEzzy6WZLwpmQXapqrCKgBi3VUP32PVRp8kW1e",
  "key39": "8DKzDeHLRzi6PKUgsHFeTXepD7NAeESiJhEAJ3UvRmR8ng618ny3of1W9WCLgLQnqN7DkwprhEsjrGYZ8Yeo8UJ",
  "key40": "5KxxUFLkcSH5i3PRtMpFddYjuZgmGRniXTL78zMbQFquQQaHGxtVXLUhur8J7UgVUr2brRzmHVRSzbAuF3akydTo",
  "key41": "2d7qRoCY9eem6h6SRvqH8RD6ipcotGY17gMH8wRgwEtFVGa2FLkh7yj9VrDx7v4ssKM1k2LniKkDKpLHJvsk8KKF",
  "key42": "4iHitZxZTPC5BSaU9pGkeAHzqaKx9t3tMcpuHxrjiFr4v2HEanAGRVuxbf2eV8YTwJgCi146jV5cZ3eHmbrjsh1n",
  "key43": "94pfNqmJ7LEoi5BJuhfErQLexUzgQHAyP9Q8m9FEg1kiRyCz4RwRqkrvAQT6RYFLpiPHxqvdQHsyCAYdvMq1p5Y",
  "key44": "2vHMR2Zku6sqY1LLUJKGxoMiNeM9onANm1GrpwP8jCwPxf5CC3bNHARXnv3fxdbdwNKQv4GxUMRLBn6FmikhvXp3",
  "key45": "3Px31eeytkX3Q41vDJQ473e3PqVeWvKuyfF6AMGq1JS8hTGFpJ3HaiYNX8pw3Uz2z4JiH3oVsxEtPUxcNCraiwys",
  "key46": "G6jkvKqcqvN4wDu68S1U5FoATzH9tLNXfcnovWWss7mNYP6VT4uwGvidETdPADFsR7xb8vwcSUZsoUhdCtc4TQz",
  "key47": "3b4Vrt8Hb7LuQYZSnmqon78yFbnHizXSLth4ArzBxGQvprQ2HSdqpJeEZGpj9DEwByxu26dfG1mVFYEUbc5LNbfi",
  "key48": "3hF4RTY6GRAtdVFMEkay2c6Mpw5P9zQMUsqnwfxPos8K88H7Yn5W8H6KDiWaXmFDuJRHfxFgdhkPvf68VmeSdvuv"
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
