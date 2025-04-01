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
    "3BoQSmiiBcKVsv9ruTYm4r8Q2EeZF4Ts2SobicAa1QzUY9fDCTCZqrUffcg29JcwEqaG7LZ3VNP5HZgsVrpxEin5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UGGVKJ5mCBz2Wvcb15MeFezeGRXQXTNVJMi3rHWyso5aJSxuRBfHw7TyUta7AKVhbcZN1JKphRbUZ9jXdLux39h",
  "key1": "2zrjN34Xyg9NxciAHXTiR2sMtGyGKPYgsgPXL1GwBsKkgFMU4t8vCTyz8EciNc6c1m6Ehz32frdV9HCR35hRpD1h",
  "key2": "4RQbyqD4aCSvY3jzrPDDULnT7sPuUkgHJhWBHwBSsrH7BuN2vXzVdy3njQcMMxGHy8ZTXRjCHmqF2ptJ1ApLaVjR",
  "key3": "aWgEsi2BrZ6m1V3egc3NWc8L2SmqZjjQiSjrfXmVZcTBFpkPcXvc5bnxzXQBTsEEbZnuXxXG5G9AFTiRX4c1FJ8",
  "key4": "37PrFoHFwEwB97fLFzdbxPj9wXZEMPweAWEyV3Aev3RVzJNS2yyfZq6nw6LpavGYbCAuiuXTcZ9Y5p4fqCNAKGLN",
  "key5": "2ofgZWHsZsEMQmbtqgrmyftqGVuUJuHF7UAABGBXS2CC9eBNHZcWgyHwmSo4CAhpyQbj24Fi5K3KmanSG73YCUiu",
  "key6": "T5wbgFfRLJGPKeBXnDzmAq8fLXtjTZDv9mEY4P1KPj79zqMK2E5sCvpmSjpenMxL1mPLB8LP2fPZmnD4Kyc9U8L",
  "key7": "3vCeFv527aYiorjEMzyVFBUUjw26rz4WyikjbzGaiA9kz7a9H5GsEvvSJ2e85jPHSCsqWD9Cm8e5kn7eTYhpxbxB",
  "key8": "4Gdz8tHGdMWK3JEG8qC4YEYDVY5nTZ9BZmtXKo781UiS2rEPa2GxXzMYva5b8rbgGrJATEYfio4QwvZrGAnt2dZd",
  "key9": "3m8dYhh8ANQX9WsFjyYkWKEZGA6vm6oqQ9VvodnndCZ4nDL9ryB2j686njgKWe3D4HLhJDcuhhryoundfStnzpQN",
  "key10": "38y9rfjdBau4pkXqExZpyYfjVVSr77uX4wGAcY9Txymf1peyYmrqLJBFSaRfo4H1z7yPJTUnVSYqcKjVPVrsd1fm",
  "key11": "22kXWTX8swwGm6wMMVL9Yz4MBQZxuWUtFU1J1tB9979vZFnKXKSNH7qb66XWz1iYCn9v37a4JMEEpZLhxNmS9RDz",
  "key12": "5HN8jAg1EaBYxgB4sgAsAdLJoGUtqZGkdiFskfFok9GZEo5wUPSaQRJ4DmDLmSSg4TjnbdYE4QYYRCRABb3gRrCg",
  "key13": "M1nMi1JGVTDZYT1hmw7UHENeTRoZ74wbeey3ktPxtUWhPLhEhEXfSyBNkgocAJPPipo9kd2hS8oJA5Vq7PbpzwD",
  "key14": "H4piQDdoCAkNjezmM6m31rADKkNktVYuuBmm65UjYw3NbFcueNe7mRNNL7cweDiwuxYLnLmhyezhnPzSaggJmap",
  "key15": "3u8HNcJDGLCS2YajZvLxzQNBt8sYZZ2PvgUCFn6VuUShhsuYDUrzzpf86tJucNcZRWgNFobvuoUMR8EpWmM14982",
  "key16": "FPSZjGq1WcxAz84KT3wLAWNGLmNmWwLhCAitFoP6uqMBkCYy2n5ieurrXZDquSJTy6W9hNf1nVyddX93T1XgSuD",
  "key17": "622KL6GTcQbfBamwsDHzDy49JMwNFyqM2ZbbWp751nkcjQm9ycgwEPzjy6999jP4fTX2F7giZUwJ3Fdfjs3dZA4Z",
  "key18": "2pcgrQQimV2kty2gzK2VqBfpeJHFwwNvMoQG9Bf1micfZK1hCwBfz7LJnD8EgNKA6UMDubqe2hrs8KGZLqV1z7Ti",
  "key19": "5hBnNG8L1uPsPFHg4XSmXP7QKVC6Jg4tKAbDMV7QobnRBQvbCAVdfNaosMf563VJ57JMja6LyJp2JahrNHznWens",
  "key20": "4jbngoYqpxaCLgj2WFjpnWkq6XKrRhv8X4V8eVYSbai2FpsGtnc5U6itqbiMJJ4CYuMVpFVqN3nfPgjKAUvK3pbM",
  "key21": "5mgVW7pU78aXJzxHTyyx9MfeNvNbs7P74gTrpweRbghThSmVQXa1gezjAq9Hw9iPsEvNRNVUBsoq4JnR9MTypYiQ",
  "key22": "7K8sLcitPGFSRt39eZuM2fo3bjozEYgBa1K82Qa45XbySnLyrNvyAhAciKAKyCisBniS5pUNSUJ4jYFaHHo29jP",
  "key23": "2GziToNfC6Zhurt9RQHeeRzkGJXk3kJYCqinwNAaEkWjrX7LemBHToCGMYET98k5ewnQi8ZXT7cfW947RQDMtXfg",
  "key24": "4DP1fEk7eYYTuw25u29g8HLj4Sw9eXzoV5wMweNWMzVZsWzYFDwgkcLTZexNNWgPwfWkkN9WTFRG833F2WZZ1wGB",
  "key25": "3CnsgmVnFd87MqRTSNiTEAt1dCDZawkXqiphGvfevN1hJFkGAJMUnpRdFPrZ36L8GNPWrzw8RRFfSATzg5i3EaUa",
  "key26": "33kweuRASWPhyvKAUsdGAGrdF1hVmavVf9NNNzhAnzSDLwJxiUqtFmMgoiUgivvFhhQZ82n9dmJomskQWGTojhYX",
  "key27": "CccypcBr4YnfbUFpA5bXAJt32spD2JHULiPDeL39inLGQGaUpfY2fazavNo5TptSkiKZUL5BZLN6JfTjTiP2tUk",
  "key28": "ssY2ftMWLjeDU5LCWiasDt5P5rnh2jCvhcgEgkEnBimzoWBHzNBKxVHYRXAtwBxjp1AxFDc8w4rVGgXncQiPuQJ",
  "key29": "4QQGYtx8fCrGcPv9GgR7FGfExRvnSod6mzPHnpTajPMc7JoTXuVaD35rmPNTh1a9KhijPUCuXJH4HRxBr1KANKCA",
  "key30": "T7wArrCiexk6SG9Yk5gaJUofuCfPM4MbC3VJsQ4HDyPZdJvUXngkv81Jymb4s579akzTyogweL2hnBjezKPvLWd",
  "key31": "U1U8JSMpjcwDDtBJaZHqeZBbaUTEMWar7fGUFymumDoQGDqKym2XXdCVgdadaM5QRi8UXKpWQ3hfM6cRsp1842A",
  "key32": "4Xz6ipzqtv2LVisgmLEUXH3K3Bt84SoXyobK6ztfwKfKdjGQvDmHSjugFtejPMSSQjxmiJqgFLhzUVTv3ykob5Nx",
  "key33": "dPvvjwqhpuG1LevGcec6QEKKBN4t7LNcWg27h6umtDvexbXGJkf5bnQUT9zouVqiSLMDGQuno8jQpF8VVkHKA9s",
  "key34": "2GSQoUunbQbnG59ai87SRU7VkBXmMXLe1VSDZupH8T1ZMNDH5mkZzPcA6uATDpseAWCaS1MbYnRob9JBn3iH8gRn",
  "key35": "58xSxdNkKcWj81UYUKZCn75vwFhtCTHdhTQSMv7kzR8YFV5CNiYVSYDztCZtHqgrwMTFL21byc3PmS9v1DY22Thi",
  "key36": "hZnkPfKGMQeiyLnNMFn9ZAjkVoR6fHnxU2CTQBg46W72RUGJhJThZw4Yko3x9XaKrmozXX2QyBovaLX9qDrYD75",
  "key37": "2JFdifmbjpUhPZxCE5G6EnZcXsudVQttfoBQH5LLME8PS9VDFC1T25gKsDUKbVAw9ufCz3NyH2QidpkozX46sm2P",
  "key38": "tXexwFJz4vMRWEGBG3XMajHPxqnR5vJf4vD29u9btxgCzJ5zzQv4bSVzmibLzSXEzF3Cxrzf7L1am9k76n7gcvc",
  "key39": "3VENq4bLCr7Lux1DbhN6sB4v8p4sf4cg5CHRZwFWofxYeyYxDs1DfoDfbEsouZCyHNtPYYZgPWzDQgZwd83ryen6",
  "key40": "2SSetV82ExKvdG9k2NJF5JbmsfXM7C4TepDGAjn1uvovKV2NZvcywHBmGrM9cJo26rFddX6d86Ff3bG4V82q7rNs",
  "key41": "wmEZQSQ49HJiSFBvh9uWeHqRnsuaHiSR2DN8MNHFamwgdq753PAxJzMDzEMCCfMUhQp9JULrrK3M98He9jvpjvB"
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
