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
    "33zU8jmpVuXxtJ9p46YoLRqDSaJHhHz1kAttFL6zD9eHTN2GNDUti1seSQVsdu5m3BQhfspA6P96EdRHTxWXFbgW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cqetTSCvwfBkyf7wosfMrHy9BsN9yBDb3iPNNjUEoS6yoxMthX7w7EzzZJ3Lc377WFBsX4oAvujKmLSWybcuJB7",
  "key1": "2JGS5WS6yg8wzPaFAp9Ym4xb1GABWrZML9oQedQ7sHHQywLwqgJT8UTVCX2SeNf1oSwivUVNWFRVyDbQAK1Py8qq",
  "key2": "2GN8xkW5pPfyzUuN6M4iWSatwZBzj5XP6TEVHuNwtfitLM95bP2pcGS17V8Vp96C4A4H7oKuNF3TWZN2iqHVv4dC",
  "key3": "5CdmP5TojpDXuijtCmePVDSxwEuzSb5hhXUKXvqJv5HSsL7JyShLzkEHddAKDx29BMbKaLfyVXrvPPr8UQxSwWQq",
  "key4": "2UVPgwPfZpy19zNd5yZ6ZsAPRjbggn8gY64zPNeJCWRCJPEfM4wfeF5kmSnf2GSEa3HEaN9xxZYYAuSHLmZoiiAP",
  "key5": "4BTg1gLQiwPLNwpCECbTi4STPiJ355CLRUGdKBya5SS6ivHm2UkZYFPEBj2BEavuzU6Uqnj4hrvAhFZ6Enu64MZF",
  "key6": "3vjuvQPKFKQSpwLAH8NKF2BaAMgJru7et8dA6MHZDAjs7rZDpMmCLdSAWV1FrNuTAfuNiWQZoEquyXf6ffCVf8H",
  "key7": "5FKwbGUgspj6jMTisxsztBV2FpkczJYgti8omAfmWga8kxBFd7WuFK5K3mnk5fybSDYuSyTuKndF5XVsTwuPBtiC",
  "key8": "GvfX44bxjg47afMu2DuKfvGt3JFcZLzgucwR4eL3HtjZXMXwwLTVgrFaogLKeMuYgaQuAVhkarb2wGGpMMxcgBo",
  "key9": "4NdWDdasuYbgMDDKx5sAFVsDtwex1hf2aKZaCzGb2XqTSsB1PHpUtfFAFxpctWzKZz1q8gEznPHgQdioS29XMebj",
  "key10": "4pyQCcj2785vraVKXD1vLSTbf3oFP67hM3V5hQACULMoxDigjH1Btzr5JPTA2B4D67Jy3jsvrMURHqa7B1tr2A6D",
  "key11": "4z6SFxd85V9sQB6KWSjiQzXrgBTC2Vv5nDGUuopbU3oNdBegy4Jbvk1BJUduBEevaCgbAvtpuyGimfXjfRqrTGzj",
  "key12": "3HGre63g62fPMW4s9Ud5QHHNHNAFY2Dr5qbSZiqD2Qk1dUgrzwvFhXWFiuoGzngdeoXU6bJ7YxvTLp6ffXn71fpP",
  "key13": "5G2faeRSZaoYTh6ybXBaysk2Ln6CVDpcMgtSCHb5w22zenJ9TCwxfZjrHwpUpM9HKrkb7r21t6Jzry5fFm4r8mz4",
  "key14": "5uDnt53q2YtqUkyNnyoktRcGFLxCev28jccEb7NhS3shBV7T8F78jH1pVD4fcNyfBNH4bEqePbbthc6Eu58YTT9j",
  "key15": "8eZ31kqAmEyNFsARNw8YAFXb8fCaos5jNGh35XY5qNPtpS2NMPP7bEwRvajnEzjC2t4DF72YmtP7BFS9KcYiGyF",
  "key16": "2uFYkfSUdRQSx8wUUQKB9X1PMs4ocLbCLRus4oQqfJprMkZzc9y26veE4KYxju7aWbF7ww6RDxh2S3pz1PDuwXwC",
  "key17": "3h7wjjP2C3dPefJ9yjo2nX2EeLJmJVpuPakKWMGgWdBM4rKGSBn1ifMEUoWa4k1nXZXtrtsBY6mD7dPQYMNtM6RP",
  "key18": "PajwsRrPx9ujdxRVHUvVf4dx7grnhzRU4c1eDLHnHqKa8ELkWZooH9351ty15htzqMLJGN3yArPUrzAfL91LbEp",
  "key19": "ckw1LvHbK3vm7f1QuTTtEVhm9qcbA8Hm3CncvEzKnQ1oPU8XDn73TH6mH1P8GPEbkP4tUoBSf2eUUdFgYSthfbF",
  "key20": "5dGN1MkPp5rZqtmJM47URtBaynSi2YehXMb6PM19zhwFFSSy71LMkoScfggnVd5s32WWaUYfMM9WdFaFQ59aYMNS",
  "key21": "3U5jcqPBW9Yev1xkKuf1jBxkZdcErPUCSBiDCzBC4AG2ea6Dj3Fpyy8oUcrR4tQ3NiycanksvBLZRicVgVAjDX6m",
  "key22": "4LojxHnvc1vdfcFwQgAGxinbj6oxEKAv1SVdZN1Gd4zaXDEzNgZAVGaAVMbSBguEGcUGbR9smXGoEni4jE3krUT2",
  "key23": "27U4rakqQsUpy2nN19LLJ6zcnjkv1WjjriERcc6qtG6Zm35sNC8ckm1GJ8U1h23GWGjU3tSweVs3qNcbDyxgH2ek",
  "key24": "3nDuJgtvHd6hq2F1T7UfVJAqeT5EYNAfXbmz2EAUs2EcbeXuan1YWfpsjST3YVJfZJqeX3DCGABqqERaPhQH3GSh",
  "key25": "5cfnvxRJJSkFpDi6rXXDJZp2nCPQ9N2urvH9t7DssD7fUDUPg7HB6gP5T7K71qX7wUrLQDqJcjFFJAK8UpQu4wXQ",
  "key26": "5LtsC6mYzPL5igL5onQDXtchB8zxF6wf3HJuPfrcwPXDFr9F8m8u1yvXCPjomdRHeHxRQ5F8zn6Nbc1b1kH3wKq4",
  "key27": "3ce35jiqBSrYXUoMt76SRp65LYzXiGFJVnLYD4sAgvAq3AW7UeQXdbUY5ShZ78ouSMc78VJX4rPyWkt3fQbWtUue",
  "key28": "4e3k3zy7tZ8XWHMs6nqgY81ERYpcWD7vbF5zg3p5HEyEFPeZLZGLFMFtuUWeL7YmPzxHKZwT4aTY2cuUK2SCr6HY",
  "key29": "4zMqiqGMfdBJj2Vvr1ZZ7ANUJXEbm3fS6Zi4BbQdWS5hvzcBhFyeTNYWi7j2wfmi76szLo3Y1naD9JYGqYzjKH8z",
  "key30": "5Bo2tRZeuXsHB3jtfMXJAcjBfdFU23X3XxyztdjSitgVytsBNbFx3zCZ6Pou5we11ui2yCaDMY7AJu5vvz1vFrY7",
  "key31": "36oYHwVy8K6keziAAjZcP1h3w4b18jJ2LY8dRua48qy2vY4AxNSQyFrcSCRWvH7C8Pe8fDUBumNzVRXSRa8PWK3S",
  "key32": "3S4eBnpN2wkUHiUvxcTWu4oXaYAfpwLevtvjsmKuANAp6zB9wEaqLVHhuH2RE7AVrH5spf2qL9TX9p484UFDzyeb",
  "key33": "dFJgLwnbob7VGy8Ps4L1SEidFcGKccdmtQBhx4utC1yrbAjYS88hQihidjchScf4GanMsLFzkuov1gq3kgH7eap",
  "key34": "fqBYmtzFtFVDt2PxpuS2Q6q5YnvShnBdRkEb56BNnq9yrqUZRsQPeGAKtYs6dnDeVNzTFmuMvfkG9Mme8fzJDAm",
  "key35": "485KP97QBHdTg6oSCCp7tWDWaFxtvN5VwEQqzNuDWtZJQR43m6nKRqfqDV6TKxWA5D9SSKwerXFxJtjRWkoZGK3a",
  "key36": "5bNXPfwXXRJViHr69k2d1s8dnDnnwDzUzwb6ozjcCp31JVfqWC1TS3MnDRzk71awudt4Vmg3yRGNiWfir9bCWo3t",
  "key37": "2U4wd5E6sFz3moXpAQx7gY9BiZmQ9KQGNdgrJMU5wRUA9a1hB9PdzTgWHbcM5sWx2TtEXhQu3ES6MonUj4aLDVo",
  "key38": "3MaVrTSSpqximAeUwZ55BWaAFZLf4tduk5x3FGU9dHWmHx6eGdShHGur1ZvycJDxJvP4e6RbaKPSznZfLEkphRoT",
  "key39": "4emc1xVua4MLJ8BZDbXsHGd3n6r9SWaahbQgX2j3TaqaumX6SkrbnccvXS4mgh8z55jJXManC9isF5wbGGYUxYdc"
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
