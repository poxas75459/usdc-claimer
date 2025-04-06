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
    "4nmaPUSRAx9fo4Wd7c6KT7QjpQaMQD7STtGZWfZupYpmgjsZQaD9YXj2H6krmu422fPEMet7DFmJoSue76cs3XZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hv1QoDWWx6Zjq16zUU1EqKjvoFwJ5G8pnW4PuqZq5P2QEjHX2AWvS5Zxi52kMpR36Q5SqnNMj3YaoQQnSP4VJSE",
  "key1": "3ka9BMrzrBPVgcbHP39yTkffWeE7q7VNHopFgHnA73iSJ9JKanb1m6BSo8Sc92oYSeFhBaUAgUVaz7oZmuD2ABfh",
  "key2": "4QV8T7tNCdh5s67Jn2fxmyF69GTx1UcgTS8B37Zg6vpfSp5bsxsahJ1okQB9phx7zL4WXCq4B4Rm8bqDNmAf9viw",
  "key3": "53LeUn8JAuDGbYzw9B9gHxQ98CTuE1LzGNMXkPYahXRZ29UD6gd8uR5731L2gAsrvSt8YMmzuxp7vHwZqbD8yMji",
  "key4": "4QDeZEPj5uVrry8riSx62meAWXjH4LJQjd24vqdBDaK1y9XFr6Rfm8aT2M6iks9rGheQnzWeWVtZmh9euzHr1ktZ",
  "key5": "5aoc7MoKpQvqp4dC5nhNSn6yY2CArge8umTU7TMHWB6WytgLeig2YoZauGwHyXzmYzDdd4M5c3dS9G4nkLXgeYbm",
  "key6": "YarxVENThN46Nx52yREuF8zgFBFVxCcxx18qxsrxhHZyyH4sG65KvLWLqYLY996fBtE2trdLM2CEHsWRz21Q4D3",
  "key7": "3vnSgVQZRW1Et7kBPcShik5xmrpq8qRCtqqmzLKDkwk71nn8dbQaaiZQ49ddu9ckxWNAya2M3LPYoTnfNfUYMMAy",
  "key8": "5oTfsXRMorv3V15uthmHN2614BzyVoYCYBqAfifNavMejzEEjueKavCEvr1KsMBFf7Cdh96UXxduL4fg1H527TTo",
  "key9": "4nCiE7ZifQpJcxbs6KeXzuk1X3fDjaQLi5Z4WMPodziKt6KP5B4fWVdJZsv6FkYJ8MJahqKetCj3WvnT4uNsT1oh",
  "key10": "4E1pJ1LjeL3ofRCHQ6Mn4M1H3o8gvQT85zr4JKSFZyNruCVtGPxQpHejRNKfyq1JyvsbTvyUXfrr9LSKBhU17mJb",
  "key11": "21fDXZVrnpSrF6SNv3AtFsPBEeJGpJLtomizYMTNhDo3BFoumjYQ92SH8W5KphGjJeWoA5EN9nND65t6GHTVouYE",
  "key12": "yV4UHWQHMAvMKPtPLhYBqUwAzLtDefeRq7ZLPC3UCpPSLneqUvPG22ddffPJYTBDiAtJEbwpLKr1MTc6QgsAfjs",
  "key13": "eqHJsL1n2xZMJ76iNVUFnUzWMYSvpCNzXsvmHGZnDCNVkxL61nyGgoz5f4Nb5eatRGKZRH8yRUfbjZADqpuo452",
  "key14": "4rgNfVMqXpuh2JiumkodjGBVYAt35PWCgcTq9Yt3H3e7XKeZkM8aXuSuSVGta84n6Tw74mrE7d4V7Xsm8VBcB9N8",
  "key15": "2w8fW6apix4Rvv6e8bBNbcbnDybQcn8dCs7tSzbiZUUYQrKuBNqCFJeN9hw4ujRgWY5MprbXPJRpE6w4kFntwNrx",
  "key16": "5KmiGBLrA1JwPuFrcXuuChji5tjbtdB3idKwVdGemUfuaXmmKetLoJPSK8rxmYAvcegC1qhRfQAQc2sRFHQieb4s",
  "key17": "5ZpzS2gRvjSDPxKEvKfXzX4YsNPv9zE9EdBfsm7xeqCRC3WBPXr1Ww5DTtFcW6ZXS4fLLELazrxgmKq8kK5xvDoD",
  "key18": "f4e63iRLSedj9TkUk9ufKmhnnQS86i27SWa3FNQT8dd3PK5JANfnCTBfVYnAg2wLgQHtysePqR7SNGSp17dPdWN",
  "key19": "2cypzToZnX3vXHm9hQFV7616svTtdBpjYWfSpY3DGRAiS7bvbGYdEbz1ogL9yrQ8wTVryaLaw2CN1qVwPKsDiarD",
  "key20": "5C7wAdJLjDf8LMUPjQ11yLWdAq6sXed7J3LrAcYtEAWvEBEb5NPbkRG9GQjjkFTvz1PoJ9pQFvmvuhCfACRHUwZd",
  "key21": "4sjafQE4pd8S5kH5Gs6zh2X87o8hPpVPS5xvGpW9amzuhn9EaYQn7ycQPspucpKD5jkqsJzGwmvJsCZ37jb6xjGJ",
  "key22": "2py9CGDkhqghHb1XTrLdYrUmEJGuy4uyVN7wF3zf8MGoW4J81gL9K2AvScyNo9eVj2aFvJELdMrK3CeyYV2J3oB9",
  "key23": "3gho5AzfHpmTAEVnMJvKLonD2tqEPt8iLYdNYCoN86bdpJML42FH5z3WmCg4UQ5QuNG8tMc9EErQ3YwWrwD3c2jg",
  "key24": "5TFT1ELGTTaMGkqMFLotEeFPVZtd17qqGohMWdBvapBTYe3f12SvmWYEPnPcvNziCUqjLWmMdC69Eh5f8LBf5kef",
  "key25": "5xg7Pmj6VTXFWTgsfyUMWR3cnHYJoNgAKYC7GX3KGfPnJ3kBW6ZDaHiUx7xV1yKt13txaUkeGJsMgzwKH21YTsAu",
  "key26": "3YTf2vgauq5Qppw1EY3T7yodc6wBjqHf2HFvLHfgjbgsrrcGKt3kaHRUZ9KJzEeXTDnUs4qE74iyqaNkUXUtFmzF",
  "key27": "65aFA9X7o5E3sxHmBNaSQbqnn4nmoancidEgCSkEvuLVJT28st4RcT1EaKkqSVyYNnqt1zeBR31drW475D2jH3Kv",
  "key28": "4YvkPeBHoc6BZioxzcrqrjdSaABMnJNwp6rNEPHVBLFWUDNXYNbDydg7waDaf7CVvfAsmzccycN6FQkFCKRYCG91",
  "key29": "22ig5V4fFnMC8bYb6QjovVFzXTEc3gdFrN9T7YDaXpFJFFg2Lz6A6WZKkEuJQ116mDnGdJnD6xFkTkKUGQrf2mF9",
  "key30": "4WZdsuju1PDo1hrV5LXMP254dmQcRVaV7kjh6aevvVQQvaZ7f5QWbNSH7SP8QLRdteW89gpVaTst6QaN6X1AbhPH",
  "key31": "4DuGe3bbLmSRNAjkHDBShAiGSthuFVXGpZhn11ofuQM7jdEtoQB67jhsyocMq5ZEqCqz1kasGN3JiCqnNCGT4PCL",
  "key32": "2BViG2Xp8hZyeoi7gjM2mBER8vW4R8aqYmDmbp4QQkvDZhNPxXPbBSt1oT4k34SM9YAcjXCvnPYMtzNLgi2Hxv7x",
  "key33": "5C5YvKCpaEauRogCizVAx5E8dQge12ADeJ14YcWYp3nzi5ntX1NK9iAEVAPpZtamG3i2sEedNANG74kEVdK9JA14",
  "key34": "2wWDt4ZXLfgkxy7wMepMQ335DZQUVYNpZNbPptokKyFnRxKMABV2m95KayXG47NwVoNYUx7TrseJaZa6qYs679iK",
  "key35": "4BAnbunRbHvUTyUpMAbPV1hvp2A63W5vxfA1mRRKXniSDqKekBdGpXwzk4JCFkF9xMgrgZKrMFbD71D2hWdgAUyf",
  "key36": "ax6xwdX1G2GdNCfbQBzNEHMdXEP4edcx2v79soWKWQc4mFtDh7ocgVpgyxSoXofz1TztX6RpXVb3JkEoDNx7VjX",
  "key37": "3HtRzmQaEzwswnTKDNYZMNzdHg4WQJYqQ3LarTujFao8B6Q62BR5Dkk5NqXxovNsRrpgiA6T5MavuMFdQNn7w5dB",
  "key38": "67MBkDaaZ1joQsNG74K6vFf2iTMobf8VMuiJmLW2vxJAWYphVNaGWuKAtgaDo9JVMMrqh5L2KLge16RWZeMvrNqy",
  "key39": "4kgiz6KuPMCubkG1YU9RjSGamhMZSUYvHEzVwq35aofK3NuH79iL39cojWuA4GAXPRtmYj6QYFwUBebFy1GDUwo2",
  "key40": "5R6uwXFKoF2HPV3pqWwZvakYrHnY6WiVSh6chyzQ6i8D7y4EHg9rG1JM68CGHRXFHfJDxshH29328E1of3rVf2BR"
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
