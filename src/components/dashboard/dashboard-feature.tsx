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
    "5k4fDocpMYRiJdj3hkctZKpd1cGQepXWq5pVBmq9dRZLMn8HdCNyKCEjdh2womuB2BjFScJKS42P6TpewXrPMCfw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RjyFzUr5scoGiNdtdzNeEYyFTwc7GAUixXbugfPfTKtXAS833SiuVieyxRMW3Fv5mJxS4Ah8KXkaSvYdsoa2iKX",
  "key1": "3q3rWBuB4Lf5p1Q6E6B9RLwXfx5R9MyAkPMT12pZg8iHnCuV2hYjGUNPnrEHwoAyVw4jrQ9Nz3eB7BA5rEg9Sqsn",
  "key2": "5xubm9dwUNo4LPwND4Sw72VQPjA4LbHDH4sRaFu7Q4hHSebtGhurpgGRXPTd3cNk45wDxaUQBVFoxUBcK7PfK9Dv",
  "key3": "65daSuAYGo2iEVBLGchKCzj4XPDG7DDxDQ6EeJigpHNF3CHgxpQUJEaF2QMBcWKdyEvvncQCqSS6xdxuCg8LH4WY",
  "key4": "5cwLNbd5eGrvozYc5ueERhzZZQH98r9BpFsbNxQsmKhV2ACE8JJtY1JwwixtBhB32oVkrNx7Y2Gn3TMbmvLEbfdL",
  "key5": "iQ4vJjr9AE5ZXTaht2GVRQCUF1dkWsjNAjziQ6Rzo4xM4USgkjou7BUdztAzZ2VbzyJNJc7xYBcd1vLMvouu2p5",
  "key6": "PimWy2hzHbtY6zuMBpVJbR4vExyHakxBSXBVH7RhenPH4gP8jE985giiVSyP8hBGxLFMeav2SzbsE32KvnqumDj",
  "key7": "575gaua6LRz1f3k4DaJvGRUSL41nZbJBK6fSBzoSVoNfsXpEi2fev46oNGx5YWb7ULv7yxbYBbRGnmqUjvMs4obc",
  "key8": "2abousRSDQ6hbrXvgUjCjWSAHZrnhCgkJnxQ2xzZUJrT2mfWz1jnTr1tbwcBgdhHRx53hqqWE5k7SVgtKAas5635",
  "key9": "4s5kr1HSSGfmjQJsR8PbyEfSJcYkWAG7c6gPNCioK4J4jpRpW43qcVvVhg1rBJCnMfPFhJbQwJqxUs6HBMcFCzhs",
  "key10": "2UJ3ZuqxMWbUaq7Xdr7Rx7jT3hKwvS7SubXZQWb9W1Nju7Dq1QkhR2Rcx3hFgpduS6ik1ZoP4LdNz6U9pqZFzh8q",
  "key11": "2La1ukwYZqouEecRUa7WJ7chzMABYrRj5fnv1GgtBePdtMCxyv5wG9HHbDmim2ZE4ikH6gL7guyFuxLAaomA1hx7",
  "key12": "wFqJvuCRExdSd4cm4rTTn2mMhAXTedrtCiQJ9uSpBso3JiQZ8KoovaRUd1arekqXnWMBN6VfXRdWuu6yf8UFzxA",
  "key13": "2K4yDrWbyjNjHCTxacksQqwjmAcvBsr1KGWeyCnDUui4XWJXKFQvrwoneC3DPAA23KWGCozKTyt61NAag3gRyc57",
  "key14": "5mT2ViyZx5AHnmhDMzNMYH8E27qGx65XtZNJs7ZoUnCp1vQ5r8UjYsGwCWRNATAS7dfrJv9cyMErcoaHYCbmz9np",
  "key15": "PnAZiPVSmcY3SGy4hzH26cYJN1evDzqzff1VAVDzwPcwrFCCa8vaNMw6yH7tUpgF3HKc8peHz9NYbcsTcxV6Rk9",
  "key16": "4AywZ3ttL6CpTvzVQQLtuJwL8Qa8fwEDjzN2ct1h6aV13Tf8aq3yifCdQse7Afo62dcSF4qRG5MTTErQgUc4Ax2Y",
  "key17": "4Ud5w3FCLM6LmsszjAXGsvUJ4G6WmnSFoq3TXoaQ92C8o3mNt7iAUQXDhkx5QdLTS1J3uh8enizgCpgC8HXRFBx2",
  "key18": "3otzimqbHQyZQnLkE3Gmeg2ao6oQxgTEgADwAaH1VGQCUzz25vuiYWp2B5m5avyHjaygDcQys8ZMVauSoEb96T7R",
  "key19": "3wHBrJu2d3SG7dSro5CwTuW8MDwysTw855nVkFnLT7mSerfn5y6VTXx8GrKf1rY4qE6VBujXvgauCwZ6dHaRJrZm",
  "key20": "5cwsQtKBELuq3E7PY6RiSPW6DWiGRVeHm5ASGx452j72TeZvPaES7HwrBTHU3vhFewmQGzMCFenDUe7W1uunTY44",
  "key21": "4y2B2fXtsvz6HyUsBaRFFigqPz4aco5WR7yG2WHModk41F526uw7GhMphU5fQBAgzEQUCReqVApBHVTSdwUcXnjq",
  "key22": "3jeEjPHUfjRHG2TWNW2JgEdsJYosJa8p18SLNbSaLGnZzznGkrjUSeaMuvZUwnJbzc9nJYAYH96gNBTpe1u7CyeB",
  "key23": "28EC1B97ybhMdfKARzc6vJikLaDQAkTbXKRZz99F5JofnmeQ5zYCkb1WfEZtYJHVFfvjzhQrCP7MTHM8gV2kHJAk",
  "key24": "2GaSYuH8ivGQpXt9TN9setxm2GM8Xzinu4vmfKAuormWb5VQ18pNxwA2TZvSEhbzUJWpEeDzJVsnACnHGv2vdPHP",
  "key25": "4qHqsjwkPwPwY3pzm2V2ZE7MaCwhttXXQeRKfYdtTBxzMX2Z3EkDAw7KbSun7Eq1zYbsbYTknChnsoAHJEPX623c",
  "key26": "5FjCJFwtTcb9E6t631RyW9LbV1wxcxJJUbYmWbJBmyd9u3AHsxPRgmeKDzAa9Foxf9GQUNJoWznb41GwPtfAKHtC",
  "key27": "QFwMaAxtcv4y1KCodZcjLLTDa1r3pvZsVb9J2aF17jb4P3Z423pLrJZbmZhN9F4umSWfdzheAAQkouvjMKw818p",
  "key28": "G3PSfZcDs66jB2fvYtvLMLVj7da6voJroVdvFW5e6Zcv6aqSDCeSrHTqRyWQXsmvTLn66kK67HPdPWjMRZpfEHC",
  "key29": "efLwar4uECmZpaxLhbjtpLK6W91moiAa6P9YqmDXNPUQMFFA65y3S84xTmcqpuHbP24zPBaiQLUwZf1LyX5RcyT",
  "key30": "5fQXgAuyGm3ztSbJmDsn6vr3vMCNdYWuX4jq3EmD11Wm1GFkN99t7BoQSdRnNfpw91oB22fcXXiqsrkPKY1QCJkf",
  "key31": "5ocojkxvKL6WK5USQCt12vftHdVmp6WgYKWfpmezsBjU5qkQ2YqKrowayLFDW1R8Pb1nigd5WUk2LnP5aEcX8J1v",
  "key32": "43nUUkeJKmuZ8oGvhYvq8Xx784mptFtJyBcUaerWjFcXccNd2JkL4BCmhG9Pc2N7vQffyRL8yeeM8BYxiQZ5pPCc",
  "key33": "3Xswh8z8BriXRrW3DZf2z9h9Gio36mituwAX1W94kzp5MevXiH3AWaRooK33VMWDJe1t3r8eoLCFz3gLmBRzzRGQ",
  "key34": "46VdkmskYphFCGEfL9Bf3GeykTcyGmRUahbXZ2uXmabuL99gpdT5kag9RsPMghcKAcUyBY99Gr8BGiwr57sECTmF",
  "key35": "2vg1xz1k8XLSvUPiEMGChU2P63gQa9uC4xs4EVdiQugVNGRNTqyLJS2TJ77zbB6Kf45JGYfL7345mNr7DVhaQkRs",
  "key36": "3rAuTqXeR8nMJYQHbEgQuMS71tXJ8Y2iBzXo6jZVVbqugmnsZ4m6DFVKY9st4YTnmsf6VodnbMJPdTBAjaHzwWTf",
  "key37": "opPU3dxjhFE88fRAVcYrd5EHeaqa54Cr4u46VuE21QL1DygW4GRKcbHWmZaM7vximnHpiE6kMzNtaLVbU77rZ3y",
  "key38": "Vs4PR2ojd4QoQzaTXwkzrNFuKRJidrvQFPMnL93VpMRqAcFZvRxt8cdrZtsekhi2kVdLbqSqcno1tH49oCEypkb",
  "key39": "5FEpLLNBtZaupYYgD6ntFRh6SW98yCREvuPAEpu5acctrW7Lws6aKiLhJMqiKW9pFJzbSABr2sRbCAkQnXKW5Htr",
  "key40": "5Vxgg6JsE6nyLtxyvssayE5q3Jxf3e6qnuxiWW1hwoE2cLbpX8cj6dik4oNgsjrmrhvpYPvg6ARaVodu1CMuW129",
  "key41": "deeqaP1k8b4SKyKFLyvYeQZMXHUhwH6FrmPAkgbtKbwabsDWL38Ny9vhXVV7tptv87Rg5uwNgpbbGyJox4EHvJW",
  "key42": "p5bx3C2kKRByjZZK9DqGoPvuSKNVNLf6pXicrsFm9B4iRa1Ecnv6PX8S7ViLUBu9Rfog4457PBtBep4XSsk1naD",
  "key43": "2SVVRsXfFNg1wCHTsQiv8A8bDDr5Xsi4hV9jhHFeqMxBHJK7KnfhVtBnpJRSnQUbZ45YxC3QXCGZaXNSRnoaQfD4",
  "key44": "mhMHmTfjjMPYzA4EeBhkaRhukTWjGZK7xw41HG2WMhB68R35krPsmnpimVVKdm2iezn5idCz2XUPv8v2ekcV9sR",
  "key45": "4E9D9hH6Hnuj6mcmwsM3ExuRN6Rj9DcKqNLowgWVzyAwof6xCYNpkrWfJnD6cjzyjCrYuNALnYnef6VNDp5mjDHp",
  "key46": "2nBxuouEfHGFRWC8rsJ73rfWTyidpqrf4aDFxHXKs56tfCishM5BqXP5eWkJXR6f5Wcij3pgdqNEShfyRbJx9MQ4",
  "key47": "4sQ1xBN1uQY2pVu1Zzk3wg6M9rddepL5FX1UfdSC84YSsyAhfCS48s6U45GMpEAnwaXPtreGLAT75HF5PQA3uJFi",
  "key48": "51HZQWseQCpd16b7KQXj8HaBDiVf7cwW8DbcDNJVL4UfXtMCc2bEB9KnFSqLVeyCiURrtoiMpSj3MQkF6dHmg84z"
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
