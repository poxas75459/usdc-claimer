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
    "3uCHkAe7CeWmemtuZaBqTmpDeEAWhHF75D5SAYbYaCxpkkzoVpLedLzdheRevyhpGPBo72C63sTzrnjQNtruD52y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Cy9VXAu6MkfJmSoZaNmzG2B6YQ78ggU4TfApZfxtbFc3zsDQYYxU6uMM5smbSduf4njU2Mv2VKyvwW23aNT8zhW",
  "key1": "4SkhBeC1BMckKQZShfC3TFzPvhRqhaXtv6VzzCVvkhRqTWM6k6RUTamVnBAzXAvwu9qhmeJVaLF8taWTUTcBj7iQ",
  "key2": "281ZWjdu3XguErkameZST7RkgErRyxsZEzzjwsAhZQS2v3sqdjav4cFHcVnJtMVHWTFt1ZR5BxrEFCfevErHgvXs",
  "key3": "2JLwfzd1a5HRYJ3heNvC2EJ2aKCRcK9WY7YSgJCmMC7rT9DfTVcpEigXtndyq4zMBV11kaoTiXxRkV8QHYYyPnz3",
  "key4": "51ePo3GzzSdeuAaajNRBJmaT8Wp6AqXc8Ah328yjqbfWZq8mqM1QW25672gbKdibhtAYZSpPRwoEyDrhxm5Sm7T",
  "key5": "5fAMtSJWw1vyD2DUTAV3p6AxAafKxz1CEqmCGjiofjfFtWypw38aU6X5j4ckE6zRYGfUrbSs73UUHGfSuJRQ2du1",
  "key6": "5HJXkZZtdv8CaRjoVLjiUUwofxGqCTgM7ZhN2jzVJT8GPkkXLDkuHkDffLLW65tnsaYF5ZM8rjVTbajnZaLw1Wxs",
  "key7": "2YdN2FsYexZ4F7GevQWTTE2UeMpTjuDpsf6pNt4xycnZV9ZVTzcj9Lt8Bp4MvsCvvez9HxeM3D8Xnb1Y1JiZrUdV",
  "key8": "4wxrW8R3bAZVuEKioJwttAcYc6DvoTEuPAPV4GG6qBqGmDzsNwxakbDZEe8dyWJXJ2TyYyYJjTNkdSmQEdRWBQ4y",
  "key9": "5eXR1Zw9YGeMFisdHmZhXqjjoiv12s5ce79817mWwhtEvCGPDY2WtbciTR3pu4qCWB6JuSxDEavJQUdVjdenrLt8",
  "key10": "UKKbyqJBEqq7ohkQ1D4CU4wSD4UwnDHGUUeqSBX9JcrFLgN6iLGBSkMGomwR3wNdeMDkaMfoB69vygwUoEXvHDW",
  "key11": "2d6GV89BegoHiV7xBAFFKKD6UAkGbVySMXUpvkDZcdL4NucGMhN4EDDnDismkqKvzdzZe1eRw49SPsxNUwQY9t2N",
  "key12": "6ztyZxUTp1FMvq6JDCaGuymTYAfEgv2JoYaPezF6WKfYYknBDyfGNU836BE53aMqEqFek6tsp5rhvTuTXs6mbkU",
  "key13": "3bSBF1pFMkGGrtbtRC1EYqMyzz28CDNarHVFatGn7Vcd58ogEwcn6QSSvh3NPCMT3Hje7u4zuW8ptGTDfi9gmxSg",
  "key14": "2ZcMXaBMpv5KLQzfMKnhPLM2qvcvmseKqrcRbrec3Pq2N761tb7tEUwwhz4mbovfRmcktpaGe6Qko8efGgVxJhhd",
  "key15": "noV4Fucx8Yc7uS2Jo1baburXrR7TP77Mbu6Ytkqnpuk6Eu3B1R3KKZeLY5fz2mxjqVD2Jpe7wJNC6zbcm4RWJZ3",
  "key16": "4JoBT9wgwHhia9K7eVo64zT7LMp6UfWPiWEKjnYwB1gtsP7GhTHMDc283ARmPiMbGRYies6R3F54LD4XxH2xpinN",
  "key17": "5LsNPw2BdYUQtfKSPEz2Jo1b8qe9zs2xcMpof7ZXjdo9iXAU8KTHaZFmnfPLqwDPdRNZJtDMmZxVS5N93DG4DWgB",
  "key18": "2zyDMmMQmrNTWZrASNSKoZS16ATSzFMfhVQq7pGMsKcvDNqPfw18mXRssqMaccdGr5guzrJgrj9a5UyxJzKGbKV",
  "key19": "122u3XQXWweERqtum7Yd4TnZ4HPi2Uy9YTDErwALkzREVW7Ntu6mw7YgkPgj9HLP5cH7BY7Amd5UXPgxmpRioYbs",
  "key20": "3pViGFz3CtgAZB37bbkqUwsBDVGCmzFs8E4H18MQBfo24wj63r1fbQHmaSVhAQ23H1VckU6Xo8waP5zZT4GX7oFE",
  "key21": "61BpYNCXYhHpJbVut82xstCcjpBU8qPbFNM186HtFtJUwCuSksJL26zbGTYwsmTBmxqxDPqCh2od6DegR4Y8ibJG",
  "key22": "648dQ5WUaYgDwu9Vo6xdMEmY9KRjTS7nnaRD6nuCQrBct4YsMU3KgxpkJhEeWqSMY6b7ejKrc5atu4LvfeKZkeY2",
  "key23": "4PrMAq1C91TAvvZiw2497oEjm82r8P7D2ynC9zQ9uecoVbNStaoBqcTarM1NfiywRtENu1D3eVtmWMwBNfFew8pd",
  "key24": "5FUMb4Vcj41RB9drWS7vfRoA5A78XJ3DHdhtyMpWwUuxt1urtfJAMqEBmLPaoTjDmu2EHTQTDyyPfAY3SsrHZAFQ",
  "key25": "46E9oHA377ymSak9u8BdGk47T2DqyQcXE7KBceH9mTXCcKf2rCTUkWeQdrJaMaFApUY43Uy9xvf9hzCS9F8MjQaK",
  "key26": "ATpeajD5pj8dTphhZkE3VTf2ivktBCr9Kn96vRNzasSfK4tU2tt7f7R96sFAyTKbdg6opVfUzS99TWXwp2R5Akn",
  "key27": "2hkHfk6CKYDz1EZ91Qcbr4iMQw5gGDNtNRvxuFZtVjAAXhvntwiPpHNuEmRewjGpJjwpDVv8HD2uM4udoVcVzyPs",
  "key28": "Bp1NH7w5irexpzJwE1c1GV42Pc7qUsg5KDEpFM58vkAKGUHPcB9zRWPUHoRWyKTSbB1p924gcGPiFo9rLGyuzQW",
  "key29": "4EK8KcejvHw7sdqkQKgrdDbE8uZSMmn63vCaKRCtPBMSHoLsY7Tw5wwgKqDMeimbAQEbtx51BMyvUNk9kfAuVq2u",
  "key30": "4o2VUyKbDhWmotbTLnHTPJDq6fGvcJkWyyaRu2NFVJhHPnq2RGtJGX17kT4TNkKSapbrD2f3Cy8RJpUHKsSiXLhy",
  "key31": "4UHTe8d27LeebeG4TwbfQvBFWL2DwTDzXSVtEBCTxmZJcgs77vR2HH9t9Ncv4uwT8WNem39djVaEeAxtfKRQGebS",
  "key32": "4BKxn5DDbveHsJHWoqLrvTsFYDwWpTQG2aHdZcKGQRELFQqGV5evyGfkoF2kZAD4x8UAEXVn7FEKkHSMxhvCVN57",
  "key33": "46dUqBHA7EYvAry23Jt82637JgzsAohFJC1jvM6jQMXTuFwv9xU8NSuBtD1GjJEJuFPoG1UxRR9mRqC3oHW2dvSM",
  "key34": "57SWUhgag7jtzPqBd8Ajrimy7yf8smqrM18MVARaQx7ktgQjPjUcuCh6rgkFmV8eHoEmRZdQq3hf17ApXWMiToPU",
  "key35": "2pDspQpqoacMo17cLC2SHPcsV2h3F84qtV3SDPb8tW1PHeLtnCnJSsMZyYD66v4Rr8V45banbBBqSWwC9QbLDcC1",
  "key36": "5pQR2vaUrv3XPucwkh4mHKkoeZHhZRstcMcbeNb6dX5Bqc1yJqejekzsxG1RqniUBwJTjLysSsUbcHXnKTKk5EE1",
  "key37": "4PBL7WucMJt9ictVgtzhQnkcoXko3KJUoEk2hkz4vASCPeFZwVFvZjKnHVWmoSuYBYR5PSRv82AJxXANXS98yftf"
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
