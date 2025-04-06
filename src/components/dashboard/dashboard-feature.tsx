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
    "URMs1qauqs1SEYf2kCobvUtwv3c1AaTFfMT5P1u3oefoSMpr86SN4Kohi1mCfyntp4SJtZ7BJZW8giReQstPSQx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MB1ExAiPbQRgy3HfuJtbQCANW3dp43xP7CypkrQTgNQxNEL6th4LbdL182bcDNub92Lg8oX3qhXSj8vQDYn6Vw8",
  "key1": "RHFdxu2xYwngDLbzH9JbAsVJCCKQ5iWQvmxAUSsuKB3hMZobv3oZa4fxh2rcJ7CKFhKRLBiH22yW2LALn4hRgko",
  "key2": "3qpbAceuadjGbsyCUXGwGWovK7uwVY1uAM6RW8RsjTQVaDTnhJCjpGmBu6c52Q29jFQZp62fJoHAWp2NYumKEiVF",
  "key3": "r7sZjLtTfzvjUE14wLcezvx11LWkHhoSuDUTXKaAazwr5SJVRfpBnxvXXdoyjyW7d4FVGdKVCB4BqakSTmjx694",
  "key4": "pNMiGMx4NToMaC2KNW2ybfGNPWA9X1WtgQB2ps1A7rk6i55bJZud3GWHWhgQNVoH7bHE19Hw73j8Ee3ThFTtfxT",
  "key5": "4yfpoLXJVoQZgEh6abyQtDydBGhNxYPmsZHukT3mPTbyAuE85c9UAcfZKPRPccjyTej1dSSdMKE5ft8jDgyWAvdM",
  "key6": "3kasJkFaDucX2SyvU8b2ZYMMT8zhQfGM1khcisewevrzDsizP8PBgrckA9kuosmnjT1UVT6zdyG81gzAdhQKRPvu",
  "key7": "4G8UoeNkRpR214P5DpUmQDL72ZoDiGZxrJM9wCmda5FhuDAqECSNqpfD4JWahG2uiMqbEEMuF2pQGeXJoSpyeoRm",
  "key8": "41gNuwqptdvcVnx63nEgXcZCM2fpsygn8NoMrBK5v4hPMYZufQmGmEVuFVU8aV7dBvci55H3xHsJiuDutpdznm7R",
  "key9": "EKud62uXbW43B57U1p5eGQjLubn88QL45FaZK3MiPAfzMmEScP2QhwWuisfxah1c862xyRLhuiJ3HhhUXaLZEDg",
  "key10": "55uzfzanBNjfouasuGrwLHtfa5pKHLCJ7Zd1vHJh6CebP22GxwdDw93Uc7Lm3rLqea29jycireDJHTDtJc2BJNU9",
  "key11": "2SKsmS7zsiABMjBAT2Qpv52zVAk5hvWfwjbAYK264DqkdoSnuNQgGJXHUbN1WQoTeAbEPoEdtXYdpX3DpiDGNvzi",
  "key12": "4od1fmyabtqeiN1Rg5gMA2KiFVEKFhCVJRRDG2GJuQarsn6rAwAyENkTYPaJHq5ifhNZhWDZ6wCNmg531qrjrE7r",
  "key13": "5iai55HNwmJFbKGTGggzn57rzMzu17DdvB43MHkozKVLTE1ceWwKr6kEVV95wKerqZRTi7YeaJrHSgBowQhTwS21",
  "key14": "2Qsi5W9GGTptz7VgeeMJfHv6nyk73ZNkTBbwLr139sqTULsQh8xwASVdDoD9jAnrACixHFtFcGWP7AozJdeVTSFQ",
  "key15": "65R7YXp7ViRHP5z4RQ9bySaarhYL54mn63S4yNVHpY6uoa84HxDc3fk8HKNux5Ltgf4mXwPNJqjf6K2DzC3JaJv4",
  "key16": "2igLDUyy4hQWU3s3BB7KWmhh22EjoFe3HDGrfrfxZLjJsyrMZwf5wVC5PmwCnXKtdzMkstyexdrRtWr4nxVPfcxU",
  "key17": "2JBAgU5NBo1YjNRfUj41eZUPtB8irD1cTDHCzQp9bDQDGwVxJNZkMcKUXm81WS8xAVYWYNo5s2GLJrS9SDxEPmYG",
  "key18": "3uJVEKPBgmTvajRNBEYy2Eqpd1UPLAo2ZsWWyNpWvfZ6UXm4yRuymyThh3mxj3uR8D89JDabRDY1UQMQGdTH37Yw",
  "key19": "3CUnnkyTCG88FZv1KVDW3Bbs9S7KgRD3wQKaPexVvG9TX4gEQ8yyTwgvmguq22Bjjomphj6Havod96sMBkx7AmPP",
  "key20": "2jk7ET63xyRQq6pFEqTt9UG9w7hFeBnrBucBiYWrTDgF7xS7j77QGMf7ySghdH6gsRQ8Yti8J2wKtKMAvMkBTapB",
  "key21": "WZq2J9fPBJ89EmH3MD9khoHFf2kPJKuvPWfKx2vPkwqsosQhTaNPtCJGDtpr4ALP8yGTUp1kT5cWRiduyGxjZKn",
  "key22": "6AfAuh6SEP2sdsE9w2XUYf7DumFF6jjuL2n6M2UcgL7nLhH4anZJ2DY7nafmpDE2Wk2duSsEVaXNq6wquNDHrBc",
  "key23": "4RxdjKPHzgkqCnyiDNWDX4YSqcEbMwBXAKJkNGfHvx23gBJJpFgP6xEepfkuMRoounZDmt47ensXk5aMWaL6BXsP",
  "key24": "3BuZbvZAWjq1yqkg9ku7c65huhXa4T1f3Ki2yZ7VWAPxer8L5N525wxKKAqAHVvoeUPnW1PRF9C1nFVD7rkKeyuJ",
  "key25": "2YLV3aYfCZRHnh8x26trCeuvZGHCNULTonn8b5Pm1bnbnW3b6jubLPT35jbqwGNjwH7XmSQ7cCRbYhimxFGXx4rk",
  "key26": "4eYrhPt2TXTtAQHwUt6BsEERE2Xx5hrFSLVqLSgQPhRcK7wwsuFEVm7KMdPC6WUrpK4CVycXDNHCNAoYLcpmFY2o",
  "key27": "3gH525JRybHLTpWMBgrbVfWzTfWLL4gwCtdoiV4FUAXqJeWEfLjCQPDHyBQJrem3WEyH1LqrRy9XA4ybRNpk218t",
  "key28": "63xuhgfdEAC6mACBYdFXhVeiKfjfxn4pWK3KRPyf5UkG8S5Rk1RfyMomQG6mymSpWjKM3NBhmfyWwZDeHHVTxFHr",
  "key29": "5sySBekvK8ARxmzuqQ6kehLM5wX72fB3KSn53MXWq9aN7J15KV3ahCBeNzKUpvZDzW63RH3F2VfU5PgSK77ZFh5T",
  "key30": "2XVjgPTLX7tji4RsFr2L528uyAgUo7PKFL1EWYsCMBPi2MbHeRbbPcNcxfZNiSWCn8nsmwgv4MV6toEPZnQ1C7Hu",
  "key31": "51MzKBouUeDn4KnP6iZBmEXZfLT6nrMyCtHUDbVzUCxGAADx2NivKL5n2s3RtGdM4r1ZuVDB8dE4cgBGhE38MmEk",
  "key32": "2GibFNkriXF6uPAdYeHHuorW4XfsHKgwCFsMmiNmHempqcEeoaXcpQ3KNwDKAsQGXg9ohXprb9JUBh9QkTsrEkhU",
  "key33": "4QzdSXkmhz9MVr1uGqtEGt3RXW1QFmhCk9ueexVcDRbJWhtNidTUfjqGuU3Z6yPrkQZQ41pN9J8oDkxByLc62k3d",
  "key34": "2LvwoxEU1FTiuFnTn5Nmdm2XGwRHqULZwxBSvZy3SEwsexAFfHFk3UCAmRNtPvbE896jVaukPkxWCsZn3A1mJQMH",
  "key35": "34A8TW8tbsiccjrUxejeYTEiVshxNsC2fxWjka7LJTEVRn7uV4Kq4PcNXUf8fBgcmEmJR8fWUP3EGhZnKdLWFBto",
  "key36": "37yad5YvhGkcJsaaPsE5xvoyiZt87PKcowrmw7ASC2eJ8WuVgQaAw1sAHd7VqM6LMu4CDjmLKj127Z1QHP45We9h",
  "key37": "2uwrmgme2k8LZt1HdB9XwZa7sCWTqSkjrw4efRaoqzWYYxZ7nCuDHm638ZJb1jabDvA385NCm8K6ZuR7bFhGXUJP",
  "key38": "2vyJF3ezcuuNFXFnBzxABttHmKJFeY3MwdqQKd1Tj1TkbtM5wCXUTZaFcYy6aZGuNfZXzrKZ988kQgkThnH6wnW8",
  "key39": "4Ksx6iqJrybC2bCA2zBdVQipgxGUXkZ2N9V9SoC1UnGDtTBXutpL1kHWJahqieEkrExQU4Ki8g6LC931hh2ptiuh",
  "key40": "8dDx9ArFiLfCrE7WcCiafUw2sLrkdh1EqJmd9ytBT2qxXk98VFpH5KyaRmWiXzFoUZKHmi96W13XsTadZVjnTAP",
  "key41": "5Xh1VSUESTtSGuXBNxwr5sKBw13vJz3SaDfLuKfurQAQdnt9EsWsot1LTZPWZd9YAMvS6HFdff2ZVwzw57skFhea",
  "key42": "2ujSMhaVaM9mseBb3zrKNGbcvGHyjsHkm4GVpZJkzWDtTciQfNPzSqBRoJ8VwaYcNk4hvNVLoG5BZ3SwNsuV4Xtf",
  "key43": "5eMUa8GZVC5JWmTtrBHwjeSQDA1ELLmuAK9eQekrMweTRZD3gjrs9TK8zJT8pNMo5RcPeh7kAMK5YipVgsEd4Btj",
  "key44": "3hLZ7M9C5ZsucECFmBpMN5U6AAijJPvKDz8gv5mALsFvUrqvTdjMAiNwGrXeUwZ3XsF6LctsLoN6woJC9f6HLYs4",
  "key45": "2VC6VyQccA2MhEeswiunDzFL2vkG5hG4aFQic5nK1eD6QUgZ3hBNYTLE3N187xj9FcM9DpfXf7JiDjvzWzr53dpf",
  "key46": "56khaACNekRkR7UiYpPj6X6DmcodNqkR3HuzGam3LwiNRKRSB8U9kv4inPRxUB5sVpUdx7AqTybqo4YXvxRtqzpk",
  "key47": "5aLLeECzj2phRuCAAZ1YX8AsCYGau9XXCk2CcPhNUVzeAEih7GVwrns9D1A5XjH6P9AWuiUXLLaCtRTgt2sz445m",
  "key48": "5GUfxywgfg47CppkJMdHXp8wxbC72B1BuPTBF2XMSnR7CaWZa4iXyyBK8t6buJ9JR2eqXccV4nLkJDhG4Q6Ckztp"
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
