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
    "2ELm9v57aunxJarFqgaUvxR89Rmf3jSP6RngKo59S5GNEeAtM44s6ZvvDvwC5NRbpq6RpaECRppxtM6D3br2J5mW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hc8ufefCGnyTpe3PN1vNmc9vfntBVvoAmfNfNyQTdHhNjnzpPHSfjmKi23RhWJNV4qhcVPafDE2evQt7CExnPi1",
  "key1": "4j5B7Q4ykJkF1WnGtj7Z6P1QecJNEuGfdHdRXge9LrF8dksmPcVdFJcVB5weYBfRhKeNU2KoGfCXMvUwace7aEsM",
  "key2": "R3SNmAyUgNa1h41MoTq3cT8NMjuZyJJenMr1UvrPEFH6LVJ8LrNsJiPS7GyRZvnhTZqCBVVhipduRTXdoYLnfd2",
  "key3": "42B8q4cpjkFwTcSYDBg5M24pLeqDEi7dFaEvoB8rFppoQJ6mgBruTwyqrom2DothR8zqyBZD84ZYx17cji7jrxhR",
  "key4": "47XDQjqtacZhFJbZ6PXaMuz9NMCPKkmD35KiWE1J3cRokaS4qHdAkAqpgECU1JbeHamY4VwBeNM4nsHv32LF8a81",
  "key5": "3Ruh8kdQBPLquxoEqAyzPLjBwk5tAJbDyLFt1cmKvZ9Ee2oTkjE8Ed69TCCxdkFPUKmHnmHd7yiyjhmCdz5EtYk6",
  "key6": "2jQhDWM3N5bDUgFkcnbPpyJT44XLoCSt36RT34Q9TuMsTg2M5P7SpskHCPg3YsBsQT7a8fF2zCLKorfTU76JXTTo",
  "key7": "4zsr4H1dRyuXCUUCLETT4USQ2KndRDyY97696pz195vn7KFrReeFchYKAf5cY2WAhxER1AXLYSHKtFErzxEWRDyR",
  "key8": "2nmhWUAtJkBwrenQnVRBzzZwaU6zz8UHqBsexATRZi5cZPp3YRMgwAqoRD9xyZdCFvFY4M6iiJDt4VDsTUqYxsRn",
  "key9": "5N9P8j4wixT1mKsR2VJ53KfGci8D7ybrLr7KFU3pDPTVYhiBbL2paVWVkPCMfreiepKFkUKv3zNDKxxbHtwztqq7",
  "key10": "cVpjxNCLCKEqTyu52LHDoJP1gm1p2Ds2fgfTjMYyJCrohE1VGSsdJikgsxhW6bYZDh1SK3MVdczqUFjdXZ1LmGF",
  "key11": "5NU5oaDjRR55qJxaeAq4XGcuaBSZhT99PoZTVyUYjmQr1PJGkRDLAqqN6MaQfcu1xprWo6A32g47mKemdQpezonZ",
  "key12": "4aCLiqVEUwUh974TrzVVySbGZqHyPukPjy4HE7NCtJBPFVq8SuZFoJnzFdstaeEcPvbzVuH7D58ic2zHs1NMLsT9",
  "key13": "239h2ZUVsDXFTj3B8tbCVM6EwHDE8bVT29dTbUhrSW7dxDC9yHmrx7MBZkLUuNtFynTUGC4GuRHbnUnHP6oVpyMF",
  "key14": "38Y2ZEGWneKg42t4JWfy9BUYmPeCvocYtBJh6YXPsqZqFFSGm2FUgcU8S1doT1mLH3fhuTxwjPFG2UQHWGL5z2Ne",
  "key15": "3CZFUwbmcDSAznen6rxPbEzXNy1wepdGnd6eYpT8rDZxQwjXaVjrkiUjV8yez6KmXq64aAewgpVMN2QSWUZNWQKB",
  "key16": "3XnoU3ZCtTLjgF81RYEhkBi85yPJ22cZ8vER2YrrSWJBVNpmw9N5CeNkg7nfWEKsvsHn6EBGEbe6TP5TWw6m72aU",
  "key17": "2GJf5f3uR3GDzWNNLzbBXMVn8ynGzHiDnoHC1YE6ZMvc7U6ne8sfZiVAhDtV7iivodqAH3pQV6LecJk2CpZD2JH7",
  "key18": "3DqDag7FSqPriux395axsjfRn3UbvgnjedfyhGbAjpzER5CA2RPmB9k4UbY42gY2s6a9iawhR1aKsc93VP9XcPFp",
  "key19": "4UyRyJRoLa3QfsaYEAcFHfYeHTNbtLJ2mgcX8VPF6YiVvuUWJJpXZFXhxzkH4cbVQHcary3VHKdxnJfEDHJkBPwd",
  "key20": "4pWKrzWP9b6WpFomyqaKQ9giV81Ci964fakgfTcSGKHXRt4aQHNaZuLEh77yvcio57qTcE5H5Rb3URAsB21K1Pvi",
  "key21": "4jud6D9faGgCvaRK4hfhLpbXajAtwNB4kKWzY2nG64yQGFMmzWD3wc3FuKcEHLhG5KEdtAc2yen8R1VQjUWov63f",
  "key22": "4UFEqfN7Bfy9RCCXadDn44tn3dByTesUVzWfJxwwshPBqGB8KhBDQ9GHnkXs7r31mRkdqQz5dvwiSPB3rRYx7XdS",
  "key23": "4XEEbAmFAYSs6vSenGSULn6H4hSxYvED6QdDJJrYuwSQSLZhvGhPHeKeaKX2LZU8EA69xEaNVmAV2d2e2AjgvY9Z",
  "key24": "pfKEbSnWx97gURzumEcMdnaVr6AZfu8vLT6gwPSLT3STwDSbY5xD28ZU8PX549L1UJkipHpeNeRP1aL9Y6zWrJN",
  "key25": "5q24gwEPfgpGuSx26XwBhjm3XrMp4TNHDKpwKdEE8qyx8ns9L6EQBCrx5sGkpHzALsst41M9wKBvFk4EESxK3BEF",
  "key26": "5hWppgCV77CoaJaYrG9K5xodnJV1MYNqJoY3S7d4xz5gTuM2A6nHzwAZd7jhi9ZH4K9cud6A6aP4uguQiKELCabd",
  "key27": "4NkVmypnGPYL9APsaRCppsFAAJd9biF8SLCasjvSu6PjF1VXStfJwwHXSPiELw4tzfq88qFxbfYaHsZKQ11MWLNc",
  "key28": "5ytxeWkYNvSXKP8RZs16TfEWbRAXaz8ASwRuknvU8PqVTvwhA1sfAsLrwjg2tKyWVeggjs6gPtZXfKFLRDvsksUS",
  "key29": "5EwA9NEJFhoo2jzUieeoMj2joYmkBidNu2ewauBJeFxGTM4qFBHcpefhAyBdVGLppZD5BvNdvRg2Wq2ttF69maV3",
  "key30": "62JCge3YyE646z3NAt1B7gFywVsTEPeyBbM9KiB7UJT2wwqpryPtn4SqLbCNbGH5RystN4ptEpJCPJFt8oFwbDJb",
  "key31": "3YRbbXFPorRGckirPh2U2rsFMRsxjJs1ufboPfiCtmW1pn3SWpDerd3NFPL8xPoy4WZ2DpVoZP3NvFhhhhQS9mWR",
  "key32": "npkdFYa3RSsa3KWur5T6Ujok8oX3st6FfHJHNR8pzck4q4HX9HkjCeUiigyDZ7HrueYNNw7fGfx9w8JVH1SJ8aX",
  "key33": "3qe4Gc76wmZMgVYbx7LcnEm3Y1SSQ1KjxYDGQDvJaVp9YcEARQzGCPdPrSrcGMbM2auTbrWBR3yGSTxgmxQC9LiA",
  "key34": "45NzXxcMQ1wr3momXUKZ8hoYYJH8hQngvzkm4eeRYrUGMkb6yFaZ4wYDZm7pqALjiZVWxXgxwJ9Y77NJx8mkaBii",
  "key35": "2G4Y8e79RJEdYcVdNYR6fj8EA8CZwJfxQzFXN1EZ2RbSSwcFY9zeieizqQFRFknpw6pa2UpdaFFGurGAN7LgCXm4",
  "key36": "3DWoSRX86Z3HxAsGyGESM35DE42AhSAg4v6EVN2ApNa5r8cJ3KvEgcdKGo7KDo6nR1nqnK516dNorki5r2jx28rm",
  "key37": "3q9JNtU5ozDgTMfucyfdC3p8C2goka8LRFqDGXt7Pg2zGtjp1hV842rcKSqheVUVnrwUvHD4CeMjngp6niQQoWSb",
  "key38": "4ZsYmXj35Sqaf9hDFwvoK1XJXYgUBMVzTxNQMAC66SPzVQKnSrzUBHCkx5MqqjQTn8FvRjiYpQDJ9Y9hQFrcWCC",
  "key39": "5ogzmnnBYqbgNeuoNUjEiWAGS2dpav2JqSsLGe9agxhZz4WeGTBZf4r58ehpScGWTGUCqiFersrqFkKTox1yA94",
  "key40": "4ADrSKWghBP4E5Ns6xcUEEzozgU7eAcazhcvMmhLXhZV8SAYRonBVGS81VvTNpUet5uu7Dc7jxZpBVwQ1iM2quJk",
  "key41": "2AvAZjAiqfPcDXaLPr5tEhECe59G7WKXYuPRtaVGtaRXDghDQeaU5zqvbPRXNwC7mDpkgno7RNHDCb77rXTtNSjs"
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
