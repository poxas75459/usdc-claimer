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
    "2UUsSsJsZBgrFMp43rvwcDXfZdFxsrBDzUELAtiQZVCqY9kpWQLGaey17KyeGeAHXxtsW9wTNZYgjU65cxiGvn3m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45kQeBjAuJ5NNrm1EwYKHcGGLyj2SKQPQJX6YXwbLXoNJURwnrTXjU4a1jUmCKuid4QD2ZYEC3Zjbpmiyget4X91",
  "key1": "56scXwGMuwSLzJm7yPTZSF9mH5wsvbYyLtUyCZnSvYu5LxmVRaoFCbHJvPVyeHLnuLfVFweSwXk5H7nPayKK9Hk1",
  "key2": "3RCERfgMQdA44cTK2a1L9NrNGCyCQeEQbAL98PvtGBduA4u6JryQK94eSSVbZWDXAYnuHYERQvYRTMdWxuK4VEqR",
  "key3": "3ehvggXmi4dmN6fJWcEDwuQWbJLLG1r9XWhNc2pvPaMW2y7RrCqXdyDzKtsUryzRbesvKrmmzgbLxZZLdL6YJW6F",
  "key4": "28DMcdbxiJxBNDEhWauLHhHwR9pEmd7p4tsKhcp2bJTZ5kPfd1snBAoLdnLMNjGuFiCkk8Ay53pHuWWR7ZYqAWwh",
  "key5": "4eLAocSYCsdetWebbpTUPUSggyDeTjJMoiwScTvwc6FqJyPZakbdfc6ummxhGpsciQ1NAy3MFxyZecH8XfBQZst7",
  "key6": "3UdZ7V7F4E1cjqaukbAJXFsQHU9Bsa6NFEcmaDt1pTt5mZ5JCgcjTzMow2Bsz49uqpvr69EQEAY3bxBdBvos7wme",
  "key7": "zmmdULNF6TGCRKbys2pKt7guspsgFrfswZ6dVxb3soXHe9CeDTWc2PVkNu5tBQFj7FgPJNtqUcVg81hgF9BNYkN",
  "key8": "4pco5FDxUQ6Y9de5Ub195WtPZ5FcX45DvA4gRbRKanQFGhRjrfnP243ApBsiVZ7mkyp481maQb3yrnu5LKfqmLox",
  "key9": "5XnyC3nkd7eD99VfWZmXm865HwNv82E8zyJWHKCT4hqtDhAfEqJcknuEVxe1dmKMdyJrihhQxZBJAF7zbDLmU4up",
  "key10": "3YiojsPf6Ad71oL3MA2fDN5a8q1gGagPXQd9hkEhbhzjBTR4ZmmAqyNRRovanZYrAavUMrq6N4iE4LLxTzgSWzC4",
  "key11": "3cxivz2YSYcQcaWLydA5awsuSFsLnZVXtH87VUkcwwJymcbrc1PDY6m5ZoTWqy89HdtyrmQUSMgPGczJjrAWjk7r",
  "key12": "45kZQjP9d6ZqWWxLX8sRvFcdodu5QHhVsvM8EUZ1z2gKpvsUuDqHUdciyHDHQfuAmV7wk1abexNRSKbpHNzRfwPh",
  "key13": "DEwyhCkBz8AnUz6wyuN6RFWabk2eQzn1urQzJoVdKSppnQGsJWF7GSx8JcfQB3vW4VjE7ocxFA8ZFfXXcLrzXmi",
  "key14": "J2YKs1M9dd8PgatgKV3pWUNvUxpAWNbGHwoiJxksKJNsCtZNQJckc4GbJpoQbe4xPesZ4Swhf9jf9gHUcrXo7tS",
  "key15": "48f9HDzm8suvNkGtJsZDfg2Ce5J9A2GGsFZtcSsZe94CkCp42nZcd3vfZjgdjmEeCrf9hEkH3DHgK52BrKBiW4Zd",
  "key16": "2XM3cdSUwWj8ru66QvmAnJAMNseFi3pp7iv1Vzk4bsN8Khf4zopX7ZtMtiQC3NiG4mzYY6MVjZmv54vbXAfDeoGs",
  "key17": "m5RmeGds4pTca4n3GyRvotTSktaTqwt699iCY9TgfJaFH4sqfSLRxnro5mbsKSW3wRQiUKPAwwcEu9p9W88fg8W",
  "key18": "2LBB9vakLZptRzdJF8TJSGZsTc1Rni6RQ8KF2TafcUC6ih1HVAp38s2vd9wC2CPSUh4y92t5BEGgKvGSz1czNRa4",
  "key19": "52mGTEduWa6SAzbW26qw8gENoxs8QTsjxMjycEH394ynJJKjJm19fBvadnG5CFb3nNZJJzCpjSawUVNcYpaRYUBm",
  "key20": "5qEL6i2H3bdQtWfPrG43Jcpz8ANxQBvpBibLGyL3khok418pWmV8zqevnftsDHQnVLyZ3nLdCwBjzP9mw9hST9tM",
  "key21": "va8U4icUBEJkS4JdterWHJRdEEsERaibzw6UC49AHr6fUa6LmUHjLeuAjCEtEdJXX5kwCGtQVk6EiBwjyxjmYQg",
  "key22": "3wjAbp7PTbyQiwYFXQ4KVapNYHxf3nqDZyGqFtcLS5mJ1a4TtQTtY8LQMTgs7YcJZr3L9xhzGKGanLAj8ZgWY9x5",
  "key23": "5jZY3WFgEx9yLeYyaQY97qrwXM2cgD1nKMJ7KYReqPBXUCxJgh38J1Jg2SzZjD4MxiEWCkhPJgjw7EF5c6rJJG5s",
  "key24": "5sZd2cKkueejgSVXFsDPEtPfRLCJgcbdJJq6kYWURLX5cPCFyLwJv5HYsu1j8GK5zYB4LZC6JPT6ZjVeJzeP5ZQr",
  "key25": "3E98yzMgH7MAv2YfHYMG3MqAfCtoZwNbCriq3hrKZYw5dTkesvoSHUCHjiPftQfYqXwiZUz6Um5WSPuKy7qCBStn",
  "key26": "5W5GE9h1A8mhL5jRZVTYfgejiawsmidS2C3PZ5iEqpiYLJVQjE8oqdM7PNNbePJ6oc6UpDgDjpm5dfHf7Eb9qXAU",
  "key27": "3tP7wEi78mrm3p6VJorV6RiwfmrnMafk2ifQttXHDkCYm7LVWDeotUprpSHR3cexvcV3i2BTykqTiBefTqKqjfM9",
  "key28": "2Jw4k9Y7ZJmXPATq3oF5kNeYhsnR4pkbLJkDLLQYyEfqGbwwBtitFF58cvgVCgxxnCMywSdMxK1rsBVFFuUmu5Ai",
  "key29": "3HBp7mufDea2bTCKwAPZGxfQtomhbznyPNiVm6hoex1sLXCa5fXjrjGe7LNPRPUmhsV5hRF7JmpumoFHfMF5HCYP",
  "key30": "3S15BjbRvzPWPPvJTsAsS5wdWL6jhQYh7Vq91S1bQBV1n6Hq1Nu1aM7hxj2Xvm79UF2vxQvPcaaoqd68E29YhDqA",
  "key31": "3kvyo4X5ZT6nbgMYmg69VQHzJUEHmyBcYVdW3yyjpUjCbERbnpPNDdiM87SPjt9ucpjH4KmcgRrGh54XJKuG3Yp5",
  "key32": "3oahKbYjajsGjTPdCWYtb51FopHNsHwoRkXLanwkMmpFRsBSxkmYmWHFkJxEQ92ooLvoDUJyRe72erPSr2AWLory",
  "key33": "2T6iiB9bfsxkoHc8A9qd4HFqucLL5YjNqph7eTvxafQaLzqUwZXay2UpXazjsEZftuKYToodEw1vrv3FGXdFtaZz",
  "key34": "pKs38rQzcdRxjKB4SS2epmco94QQESDE2EvE2VKQHVLvFn3F8ahLoBsw5GM7FduvsAg8qP88JvYZpX9KqbWKqbA",
  "key35": "22MdJa9j3qTLWkcDUEDYQaiiXs54cBm3ng7wMGqXvB6deTKeCMHvVVSYqcDunc717RshfosUL7XrzEkfVbRnnqm3",
  "key36": "4qFQQCYsLMMpKMebwHEPPpRT6sspGJJDnsNGYCRQyRr4guVxivVLpg6K6oqoMr3VVRKEEBYsoVy3QNH7ugyhauXq",
  "key37": "5KrPjaXQqTDtSmYHGQvdEm26DP4UJTMxYZdVGKrfXen1WNoMhhXftaJbuWqsN2J39FyMCqadNZGxfFcijm7q1zqE",
  "key38": "2grgcZbkMLgus51ZDemcq3atxMwsiEabpGYKvtYLABU5JADLsv1F3nnss73g1SwytTif7mUiaWCutG8u4BJewtiv",
  "key39": "2fqkdJL3Q9TwRDbMn2M2W76zUPECdKNJGiAGt92WWqE7EWJ1beduXTiGYaUVK7WDWeb3K9srKeDQkjTrJC9n5A1S",
  "key40": "qzr2RmfstJPLJTdB9TgZpD3CYDc7GRbTfQ8JH5ygxurESFS12DKUSPNNV3jaZYFGbs8NWLt6megC7hEMCXW27Wf",
  "key41": "5omn1FJSk3fnZMNe6pXAipvUrM8haPh7ivtyCfA3qZMp628ScD4VMx9epX7FNqfoqn9Eyj5TwTVh5iffxLkmRScc",
  "key42": "2yd2yTMaYWVEL6epFr9oR9xRcp59bhtwaJYWFXQx3xE2qR6UmCL3BWZQ9VeamJRpi13CwDgYkS9QC1zD5pxaC4nX",
  "key43": "4CjZYK7HRAFxxHWTDQKEHJ2n62UWhvkUGXxYC9KA52CCYE1DXzQfpKDo2vM9grC7djjmSmxsUeGrdyPx4MTXcbXX",
  "key44": "33TtZjfmSq5mQnfRp5oBorv1GDxWSPEGUhJVbmXqWYn7qZxMQcJg5Ls7ySwnrctZtGpKkdxXQebw2kRdqe4ajkBQ",
  "key45": "3Jyz147f5u5tbs83wfyYfnG6vYcP5vT6VNmGNvb8beF2m2WC2h6ZkmtuWdBas3sV1oHMcL7K2mPPXiifXDPfKfP3",
  "key46": "4snrHaWgTLtn2YhPgGBPx6r2vWgJ7smVvCVh228sgbmWzcyeC5Jy4GC1KHZpAqHofWfTYTKUHsTThPewoxpMRoYE"
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
