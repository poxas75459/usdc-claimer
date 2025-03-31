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
    "286Nbf2MMGt33PkurwVPSZ1NZXHpmhG9q5M5qnf87A5xSstUwzycaJT7M8vjgnKVGkKAvmqAHowFoWER1k4NVMyf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AWcGHtZ84Bzk7c9acw5fLzpmM2sHGx67f3rZXP1Uq2oo1YrHz8N6krWZUxKk2pAQvCDurXGUxUVuzm9DZT4LTEc",
  "key1": "5cmm3zmauJLmuggnas1uS37oun342HH19Yen25WcJH461uCXYBkXajYh22GPHsNgGsXKLDpiTmYkomHX2oDb6GUJ",
  "key2": "5gm9arfSX9kHhW6R9DsSUSBgM6XNsg2BABt5uByjSG1YkjNXAQjChqekS2HR1PivWS4Ze81ordrXfLxeB3t9UMtH",
  "key3": "XrVW3JYHfajfLpVsdaqSiL1VD7HYh33yQKa5BGhu8gmKBbiyyyiqN2kb9zA5f2faUjh6EsCPzRQ2kGZxQXfwWWq",
  "key4": "r99Vbxs4trAdLPiThigABPgNn2kX4FsNDYzH36ha7YatRYxNVmi6wECFSZeNBVcEnaBgw82LxZSk1Z87XRibMwJ",
  "key5": "6SCTrMYBNsnE2YbpKXzvwfjzGukwX5LhGnaMopuZLg9EhmdZ5HkfuxpND7R4y5PckH4mKS4uowBnB9Hs3PnuZDe",
  "key6": "25NY8nmUWUXJPVMRQUZ7SbDt24syjXLEA9aStrP71robkDfDSVJGDBkhh3djSwADqvAk93bcRKT2RdiAz6HEL91V",
  "key7": "25QFgoofxBWXBeu7crL6fYg48F2C1Pzz69qkquE4qQb9ERzW9BM4hTpW4JjH2C6T3PRJ6H4j7DzQtrqQ8jnG85XW",
  "key8": "2Ldr8A4QEF4aDbrpdt6iMQJ7pyonE7dpkabozajoMwhTWfL4CD8Y3sgnN38Wo4oeDE6X7eWEpBAYrvdXwUusFJRE",
  "key9": "4YaiCNiYanx67mgtKaqnVXwtkmKWoPFvzHfJugByE2JcnauCfPJveAMQY2FCFFZfBEh9MW2oz17WbstG6DuPgb2T",
  "key10": "dYvTRBvuim5aKaYboJvzEWaYgHW6ysaWRMUPasdiEPepwhkh9TFh38K6XVbsmiyJYavQKFyMfr4CwrRCZnUKcde",
  "key11": "QNvQUThSgQWfKhSAehpLpP1h1Wo6MMdeVMUzWa2UhpxiGf5BdvwCtYW9mUaJNDqGA5Fg9bPCx9sUF914yYNiCjm",
  "key12": "5SQKvjuFE6fNxRueG1rkSkGvZptikeJ7Mch7zfNRybRtnPs18pjCfEaWUCtbo2LZcCpgrq7xM5f63GxBpSrzAsCM",
  "key13": "2QvMsxSWkjPguchgZBUhsMyqmLMwz4z5B7s3GJZcnYhZ9bB2Wgfe7jNSdhCPRSaSvyW8nPhXFwc4sdGAm5ajXhtE",
  "key14": "Mxrykspww2t92WyE5ka6HnZmM6zDkTxUbb7NsPif3B9nzrX5LdH6kQed27y7x2GFcvsqHpVpsZ14z84LLJw1t6z",
  "key15": "4Tsu8vTk242o4sXJ2qGPjWEjhcPqBZHD7adMpN7P27sWqZ91yuJoS1RkY113E5z3CkoeS9VPJsKYWmmMq4YLFC7N",
  "key16": "5Jxs4TEhrgtbWU2t8J2FaDADiHu21qRGa9GKQgR2UdeadKWwcTwJR3oZYis1wm8sZQzpgYP24AopAV5HdhaytFb9",
  "key17": "5qYdrQLbZ9wyKicBFtnfpnh16VHLQKaJrKaggCBNeJHSHZs9YzfvhSC3vZTt5DTFsoxspACkFAQb6BsB95CcaVwa",
  "key18": "25EXe2RfQbz2JVq9HAt5AVLG3AcyYD4A4U98RuYY4d2vPQnLrVpEt7LTHieutVSMLm1rUywWirENPHgMeZqZ3ydX",
  "key19": "4iSFmAn4weNWfZLZv2kvDBnhZUinjhT93GXcCNDS6LnStMGtcRjt1bH6rifBizuGHjrn8kbFMz3RCGe9HEXL2ARS",
  "key20": "43r9MJsSRmvWvnqrjeU429XPVcQ4Jfgh73Bcduo3nZnGsV9YJsRTfMP4vTdkJvdnCLtUSzEtF94Tbzz9Rce4gpQG",
  "key21": "2kcphvUhk2prn9i7StxqtYSzfme5oRUbguLsg2BNY1MvccAZdXiDxkFQQGT7KL8JC7VRhNGnjGthhDSKyixycjY7",
  "key22": "2LZjgqAKnZEoEwEAgjNersptRQosRNkAQfhk3vCYFiXyiKqN6f8cHsYWN624BGVTPYPDVKv96PLmh9wW3DV5ws3f",
  "key23": "3ooFky2eFbymCFk7RDGsV18Cq2pXE5G5PCFbKvswh14VPPmf5PzTubc4urLiyuCtHMQye2jKAKjyjCaD9EjWjkFx",
  "key24": "2JviKEAfZisxV3smZ2MPvwfDxce5kDnfDH5WvPFtB8YVtXymgnCsVGjWpk3FCBiResxwWss1vjGBNLdySmymjaqG",
  "key25": "4pMQiidRiwxatdaEbYm4u1Aed4D4fZ8rUybMFCkFK1UuAUHx4MkvE2ij8iWhHfi4tMRAFdaCZSRGXwSuPU8849n3",
  "key26": "5UksVBVg8LVvHzHCQSNfrradsPNWtpXwJgSywe8dXt6Ts11uPaCJv8dqyYqwYhXX116rT9kHCozT7SERkhYXdN4v",
  "key27": "5XJ3VJweZKTCjtBY2guqPPrExamLivUASi8nrGXd7d1gj1aJCx6LTWYJXWaPPudhj3FUy1fZ4FBQFmrCMvUxvbNa",
  "key28": "24EJEnKyn5L3qnei2dCNWEg2hC6iBgbvraxJtb7RNNzwV7jo3DUQkXCgdsJBAGLqAxSrz9eg8FizgwE1Rznvsnmr",
  "key29": "3hArBsYLGBNAEzAjCWuJ4g3tv3m7hyY9DJ8CjKrMA9oijmFXmSShSNYPz2WeYw8p2ao8cD2qU7hdLWC6YidTB2ue",
  "key30": "573f6rkyYAEcpK8Bd2yQsdZ5gXuwAXkbw8EVjmm61pUtaqnbWXJ6iRBkGZwTYYvJutGqWXcsp5bbYsvwKLWpohq3",
  "key31": "aY2wV59s9gFyYrqV6t4eeWMpqMrzQBvnEQu4U6gVEbd1hHDdPphZdaCK9apZj3sqnFZLJ36LtQAzK9C8yk6Vk6E",
  "key32": "3UGAJRtoQHc4ZAdvb1haDaaVoJEi4Z7XamJHpsnrAZjvS1zXYd2TiNwWrL9kHcbuGUzvg2TmqQhzv2vDND6i7wYa",
  "key33": "4pY9m4wvYzJteGTh89dikfQWyM3f68BaMc3iwii8QtbzqUvseaLMRiEZD9PpfUzUQCS5ktbkGCJ2uqhPGjRjVZvY",
  "key34": "43XS8yWEcj44uDjwdDfuqycwcHqbLrUR7ioSvFAXsFCJKHogT6hsA4uNq5wn654SDBjYggEq79sqBRZWZBURC4j7",
  "key35": "BRKViT3A4XZYu9hEvKFtMcnEV2NiR5VupJJwSWBtpsbFAaun7BwwxbePG3SkhVq6KCuZdDSmofQcwuzF3RyUmGD"
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
