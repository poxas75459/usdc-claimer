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
    "2UJVFRHEKF783ddFduPsNiZWpvSkiWXHEBT6T4x9j5CM3RUJLj6Bn5tcTK4bgSEaMfhqN3zLTcJVP9Xf3nG7rfVW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fWMeAoDH5JMiQLixvTvePuq3QJHtihN3hqTmP363U5qE6WkepSfkPQnwCMb9Ddcwz5E8aQbm13cMZCW9C9W7qBr",
  "key1": "5CSBiWU4uoD913aHb4AKkQvP3FMf6kNnSLuo7L2sUdk4FmnxDzY9oqaGHdTz4iBEqcCStHd2ovT76b74grGqxAcE",
  "key2": "4qy9GiFFgqkjpCiYn2baxtdrBrKkPUNBrRRUuFJSeB5Mdu2s5JcT9T4Fch5M7W9bAxVBbqmWrQBpUzhBALKGKvsN",
  "key3": "4FJiPkVGzQhNxgE3Zs8UQEaZjkxURWCLeMmcGDgdBUUVkyfFEUiwG28DTqCvaxK1q6TxUbQJxVsoWBBmTv8M2SUi",
  "key4": "2nmwoHadBhZ4oayEq5EL3Fm4gAkfoocoQ2SnEZzJNvJFJCkmQsn9hndTL3Xvy1zceYXa4ZpK2M31EwjHXvHFMNFx",
  "key5": "2Purxr4rbCc16cPPdwvMmZ6tMXWU74TPVaUCVTn9RhXY87RxS5doLRvL6iQdK6ZgWt3sW2Y6ZaJp3TEn5ycfTXho",
  "key6": "4iqpABr63myBz4urEcKKztCEdHMgfStCoh6BLMdxTuXXDBjJydvBhB4CQtSXVjcy7NzCFb2MkReaei17RbbFFnZP",
  "key7": "4sgSgnFyhQwu6h2NzVGtZorUg9ZfaX1MjLVruSPbjjjF6FCnHFXxdbUrciaavKMFDZuwHUDvZzdoP3x2QsARYobB",
  "key8": "3JAZYVHcL54hJg9aePFemwH2Mo9eMApJ5mxybFbWprEoRuGr7GPzp95oVkiEy5pbq6BqNqHKkWTopxpzixDHfGuh",
  "key9": "3WP6F7H6amLEfyMB8NoYf4pUHPFC4PGnb2gtakbaQLgCFfguFhdMX88gw36PA8277JAXaV6WM2Evu1pnK24dtdAY",
  "key10": "5cQXoY2A7VTF5TTU6LskVoz8PwvUHe545Bx5EtGfJfHsbtAdWt28xMS8QYs63ebH6npjAH2E1a69uRHxNDqRAf4J",
  "key11": "2PJi378hDEkFXPkKCTeZftoVFP76WKVjvhMqxkwq1GUQQZQdxh1xJQzasZrKeTpsvFz2rBaLxURyFCbY7NRGmsfS",
  "key12": "3yv3m3K3ZnSWWqQAJuxVbrQFKQCVWxCdiMU1R1xHskqBzRCmaFxG76ckdjbHu2d2KU93YGNFRghz8qAWomt42W3P",
  "key13": "5wBEQsY8FeZJGGXStX5eaqCpvyzRv79Yms6Dvxo2minbNd3gLwBW1gTcEZdMLAB55QrsCFpZsf4EEWw7bS6N2p95",
  "key14": "XHBYGBWwWQWxeGX79VC4Cq4R1UrGp3XwybaDNypWyHBKER42LVXPgFMQMGND8Y3fFrHZoKz3V1mbJXvJ2KCqs3L",
  "key15": "5UevWD3SqvDnMEm1P26zEeixKpUvgwx6uDywdzruqtZN9uo8F5BtnCHv7Z6hC2YnkcU2tMVH3D175eSHQvR9SG5k",
  "key16": "2DFsaT8srKXtunvHLyAqNB7ec24QuRjsN8PVPoc1D16GtbAKgsw52FMuLU2hq7kwQ2pzGMt7uPkiBcCMmhRRAdQC",
  "key17": "sk79PsubDZtiP8U6rCZkJJWdbon8dCtqeumwi5kAGSfegwLKLoyRcc5WDLeLUGJozhYFUCo26TByBsbMXxi6B28",
  "key18": "6gufBXJPsb7Wmk8RLSajnrkwqay2dZUYdwM2RrzsrGbHLMBFDdoAsDKeot7gTD166LrT1xH9zUvYw6Js5N5Wr58",
  "key19": "egDfo84hsoVFtmNFvpcBDrVrwPMM1DwX6i6NutVhhu5pJSMfp38AtGp13NtuiYvM9gCwbLmaTzpda2KFgQqs312",
  "key20": "3Yo4HDnR4q7CyTpEvpquttMzD1PEYCs33NrmBy3o1YuRjnGuxXWrKf7abGp2AsWYfEeZfsBxdHCsZPrbMkKDScSS",
  "key21": "35rzzVgXqnLxi2fPvmEWf7KSBd9wxWv3nyQsnEiGW4dZuWa1zyeugXFcgxG46dRrA5YE9gGxU8BCYPtwSvLVNQZW",
  "key22": "4xCLkcVCsTqh7QAXZVt1bgZr67pXAAxASKMFgGX2tqVqNDmyZyXctLZtEuZ36tJzEmq3tXFfVEXcQRmaN6wwACTU",
  "key23": "4EWCxFVkvUTvEVj3dPgv5rTHzkirfYjxRyyRUrmeZF9WS5iTcrQLrTR7KGNC6mBfRGqhus2GEQYqMEfY3RVrKtoo",
  "key24": "j2CC6XPrT2Mg9x6GcudVhmHCKBGEJxJuJv8mMDB9h3GTnM1xkddY2RCP9VW6gA1gSeTsTwj3CcUjiWq6NHek5s4",
  "key25": "5bL3EYqmySZmcBqttkTsDLFNc8ktWgfdBHdtUcBXih89bLZbhvHgYZ5dxgyVRvGyPPSvHmuAoJtArYvjnZJdW4HB",
  "key26": "396mLWqXabw74P2DVfvGyAPX9z7bAXUYynMMZortCQtuzjML2QEtf6v3uizj5F3eEceccySmXwQuWATCQYgTNW34",
  "key27": "4Z67NDyQJ4b4NTk4G6fnJGJogmhRLTmfCPuEcRbPaYKDjmBstdp6qgRF53cGL4fYi2eezGeVBGbahJrYbM5rM5ew",
  "key28": "kAku7ncPfd5sNFx5ttYV5dAoPdmifiNds2xhMea524o6kKHaux2Skg3u9UHRbcDanMDx1utGRxNimovi3zrpf3M",
  "key29": "5S3N8FhVoMoPos3dWJ1p9AqQ97m6NDT1i7WYo7PpUm3RxVXWeHmaXWKF1gwqwpY9zxp217yST7zyb15aguo97CDd",
  "key30": "3pFYWXZUf6RYL6N1SDp6XkCCVedgy3R8THVt8gx1S57uWovC27AeEKBX7XopSKmAEe2K2AcQ4jqmxUUp6HqFovrg",
  "key31": "VQEweAty3ASDE85NfoH7fVotS7RFNv34zHStj8ac94oryTYPbA4sXSUMoef4Gf5bvUVj8bha67Byqbx6FTVPDQy",
  "key32": "pt59cJvc3tDS6K4BUfUTpJLj3jmcVVPTpBpEeFVKfZYhu32Zhi1YUZWc6aQe3dN3bDYM3awuAQDJ9H8vM55kHzx",
  "key33": "4JXZb7WRr7TDZtajWcheAapxUib9hyjwyAWNj9fWQ1H3SDZA8auGaMgLGnQ7pRr7UCvJfQzCE3Hh3sYUFdeSXxLf",
  "key34": "3brar25pjCc6vdM2XWLNs44kBH22zqvZ1YxC7xSq6ZKGLM5thojKBQ4nQpza6h6Gb4h2Ass2gk9o3g4N483R1q8X",
  "key35": "4AjvXxpEG5PG8VjWVBAEKaJUWgTUV73ud9ERu9CWzUNSHDpdLVS8Z429qxCQFcsvCLMiRNP6GTEGRULuWV3Y5Jry",
  "key36": "2bH9HBTNHohpwEhrXqX9AkCt7UfoToNjLSwWpJHTkqRCK13GrpAMsYvXQhUKqfRcjTJ8atHFuiAdRi1oSnURsZxX",
  "key37": "5oxZQbKy9B15NLoGzLLA47qNWwCS5swf3P7XMMiyrRg7orsw3SnkTQ63QsZJTjyN37cbfkubKaGkphW9Uc1eH5C7",
  "key38": "5KnqSpFxxDTSMgzdj5pBwhu6m1a5tURzTjcDF1PWQQ7BngwXXPKDYXCKxF4aqBHfo4qkTS7EnHdZ67bQKe41zP78",
  "key39": "2Wy1ZUwyBbvR5CkPkwBZ4SbtbKZax5BYgm2KZVaMfkJDedhdZMNvmvmqWGeyVm9Ev59nLHAFnZqSYGRrLryNsb2q",
  "key40": "4kUMLt7ovPh3PXkS5nGmEJzxfmAs5ysFmk9nuHEMMGLtjCBDZqhaV4yKh9ahwr45RwtjQwY78ZoE8JSX3TzFgny7",
  "key41": "3qYKvUu7X2sdJmxjJNMzcuAQ4f3LrWHYhd4VHZUjRtxvzDAghofSv4kQMXMtHxKCDspbeC7RY96PFDv7PxYamczA",
  "key42": "5vDNvqxJhKUUw2zCo2LoMSX3cW4yzxauSga7DSDrv5SmTo2db1ZvS8h8hGUjMEcbKdwquGtEPiSs1AP8isEaU1Xc",
  "key43": "cwd82AhBWCp9S59FDRzp5eTYagdcLvxSQ1qiTcrkskgNpBhKCPFcmmEw6k5838KrgmHh4EDC79yx3nhwFjoQiMw",
  "key44": "3yaqcxKwRaEPr73jmTssu7kSewVXqg8RFwjny5dev3FE7LXZnvgQYJbDE9XGGVaYPDEpg5PKfHa6WAfiQhsH4qNG",
  "key45": "2YpBejfvoXgm89v3Y3xzecg8VXqrH6Z3SJj8cJRNkEDcQCmqT2A3ZJe5oMPEMh7QLnkH5XmKESmufhWu8xQHMGLr",
  "key46": "5ViWvGMdbMsxEVHRH3rSnRpp84EbQMZxWUWj6tcuvV8dSWpLSgHsG34Y9fP9KYSppqawPmf4rf9MWMJaFReFo5h2",
  "key47": "3hueTkeaPnag72y6bUa6dvc3dmR9Pp6LgTiTwvWDg6vbPf93EeVitH6zNZiqbdVc2k2frUJ9eKYsSPQhKnn4NZge",
  "key48": "43EWf6nCpcJLhJrV9uTKdPnZGv5gVGeq1wD8SBecgfLcL93nyrJnzt3sJ4jBh3W8rsT6nCRvnj7g3CvrM3P9RUNn"
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
