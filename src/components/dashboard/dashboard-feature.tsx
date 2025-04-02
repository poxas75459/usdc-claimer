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
    "3GvCrR91pFpcusQ54PiFn8a2tHUeD3NnwRYdqVFevmqumepMnTy7rsuu5aqzL6zxTV1NkszWuydR7u5xB2ZeYJbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p4PMAuT5ypHcDrim73J2DewepiDrP5uu56dDsgBroLZ7EE7qLRFbtLAbyBL5eBAA2L7PGRJpdzYeynXM1kQnTZ8",
  "key1": "7STboHgy8bckADEFSdESKzZKw6Jh5wYCtofbBgQsbMfG2PAieLMdz3TvmG9z66iQ5wnxEp4FovBmn9ztfHiMhx2",
  "key2": "3kUSWgmGCQ7fErCUTf91gRZ8N4axg5D1PtA1bWfwGn6m9gx9dWZ1gRc9jmbSqfEKJYsDP4ZSD9FGCjy4tq9UdJfG",
  "key3": "24kwQ9dviNssT6HpkxFyLbNUuUjFYZh2UrWcNwEioZQ7wLUjZjGo8vUBh5rxaZCbhH1xkFLbJGePEbcLJmgntGvK",
  "key4": "2CzvFBJLcDr9HtRRU5fq9pbnQFkn8Ny5g1y8J1gYF3PdTR1TxcwUNqBc7uJCPrmrpfJzKcTquLPLVgQJrT4oCpUg",
  "key5": "4P71XMnbf7ztJb1Y4qfxgvfaqrTbM6W6pypLx5jPiiTAHBaoi4yFhdsVUaAe6pVa2TwVc5raYxudSsA2n48vkKtT",
  "key6": "xxod2znb1vT9Gjz8GMFdey7T1KNFTk46KvCU5P6WQtiyFwqYuhEmX3Lo5PvuG9d5wD5NDse7q68x1LFpkEmnbzv",
  "key7": "5hdsMMHpssfXkPWt8jpxVB7VpuGHMFLmcnFanswNmQ6hHh86zHjNY7hkYSoo8Z2s9UfCCy3ojMrVxMteTwYg4DAG",
  "key8": "5fg8L3Qmm3VzoMHxMQGgvV862EgWgd2fGPMKea5u7dLRQ8QQCGcUHELxKGfDHqiu39L45j2LqXWguxhwnLrJ28sq",
  "key9": "3gLeKtZSQpiPAHAMpeAiAfc6X7rf7SvVa1VHup5NBVeHk9S2KcgHqc579jN4h2nYeu1EyhFsgVnVkrtgJdpfXwcP",
  "key10": "4v6QdyXe6KDqZEgewTvrFJ9SDv9ZD6TEB6rqkzWw3nwC1yuSfBqew2u11wfrVPF6fRLxyc1qm4WCMqtqdAan4oiH",
  "key11": "5jqMaR6ih7dz1S2tvFjUBTRwL46HSaPa1fPh6p2TPHiZqe9B4EPMBCMJGrnedJDXvt4QTBFjrgZQRBviSQJVg2fy",
  "key12": "2M1jxfygZnxwWzRoyuHDHcbHnTiL3RmMwbkrabd9f2WAs9gth4MowsTgrsuqnuUB7ofTJS3hnPfFQY7E3e4uqkg9",
  "key13": "56kSyLQsk4Ae38u9xhwJpms1yCUrKaqZPyQ4ycJRD4RKhGhCLfvPsU18eL2pzetj7aRdgFSikbfj1xSF6YCRnMKX",
  "key14": "HgXJNMSjG9XBB1fWi6R4D246zrW6bSomkGtB3ZGkpcmG49vB1t5VdQ2iAesYJEDr3mvYGA95QpsS12hpUyhYALP",
  "key15": "5xf9JXUBSAPbd4nvHRK36tmRuiQvvaDt6yHZF1YLNBS2WPRiwVH49fqjsharmx9T9rLSQaGy3cUAHWcan2PWShmk",
  "key16": "5kmdgaCgwnQzKxrnn9Z1PUsLdoYnJPpkPEyvQYUKN13WMk664LppbXMzbk41xYreRQPgTTdVx2BFVNsdi2ok2NFY",
  "key17": "2NYJ4LA6G8fU5atneFZpMco3PHvvDiAFcWtvbmKZtbeRQVWcGwYdTmv7fZdkYPB4x5yLamGgmACXWbZDHa6VNMjy",
  "key18": "5EHMYQgnX62G6wp6jUuDMHWsxkDAotaBarBfWmuUi3Bv6pAW2PCpqRG6axopaXQj7TnXFRA44KyR5moe1F8fD6FT",
  "key19": "3bjwAq24K7cnDiLmeSbcc48aES3GmT9S7kpRrQc9JrPNQaowjVcrReMxwYqVVWNbK9WQmtyUKCwK1wLGftBt4kLF",
  "key20": "fKpeF3NFwdgpQkQZVj6u1pqPRvLwckeddeEBtpnnQ19Rw6XEgBBvAeQYZPT3eDUErXCPFogrqoUm682Vgx5Ggm6",
  "key21": "3rdD9v4zG6dJPTr7iYbqLDMJcNmS2QYLbNRAqeZsUmjFnwcVbM7HqSrvFecQcdYf3jiScYbiRruxuiDmjxUZeYdt",
  "key22": "3X1eV1Yh1wFj1GEesTYR5kTjqCE6ABTrRTwXca2nHyXj6UR7uFbRHt2agefWNyWnHfafuWHBnpSSY9nhanrxom8R",
  "key23": "4CUeg4eS7inK9Xq3NnFbB5HZn2pYk3ZN5RoP2uw64dmzWQtaB7wJzMtJMwMTy4oLzs7ZVh3RV9TZw1iaWpct1x7C",
  "key24": "3XiEqEoi96ezBrpE2bJYYdA3adzFAygYjCBkkt9kA36QBbZ4brhk2pJGfH21EjQYNUPmdBUNuwn8AyDhgT3XQvdv",
  "key25": "4FvkhonX17TmeGKzxLSL6jct3YvSBQkmABvDpz7JPoQDVyDsEBB7sScTDSaz9VBTCg4a1owT8caczLP2TyjbAvgn",
  "key26": "574xffyjesS3RJCqkyXKF1TRLoLoGYaGq16iLWU5RiSAxaHr6k8JeDCs8hRv5E7daGoAZEdhRH5KVywRQb7BgSaK",
  "key27": "5bN71VW4kB3Qc5SQG3MhNfRrMkzShwmL2AqAXUhfpZJLJ3P195Bf5eLshabvCS4NG43hqe6RwbPRPNC7Up65G7Er",
  "key28": "3nhv8coCEgMo17soNhqVu25eABq4yoNLahU1wNnjY3inbjncRj4j3XkdHukmPvuasLubWNgbRYvmGntyLhsHFCB5",
  "key29": "2pJAo8gq6VFZetrCLtg58hXPFqbir2hy2eAKqbBUp8dXPvLnTiKi7UYMVGP2JtxfpdtKcJcxf9nfLWnQXmB12uXY",
  "key30": "5Vsm3cNgT532iC92V5aAhybv9kBDHWWTHiMv3E5E3TNn3D9dPnQdb36xDD1JC85s1ozDnYhaPKLvHGqqLc3h1k6j",
  "key31": "54sNmcQWjEtCjueYF7SCUnZmM2KJnzHgBztCr2AveMdkZrDU5xwJM2RKHHJVn287jWoNKxZApggoxGiZdzyfBjbG",
  "key32": "5kxNJhRUnuzCfVa1Qs1noEsXFBhCR529MFx46FBLrKV5LoSw7pdfzi3gxuqiuxcpLCWAvSDKDnRC7Pjb41JgSxqY",
  "key33": "aHqcHs1yxNFCfZkDsWRxo4WeNjpoeHMLqXq6cf2x6Ebe4Hi43CtvRGLiidn4zp1y6gutnC88abeDDjBkqH57W5c",
  "key34": "4AQ8w3CETjyEtbuM3ktfNJNCcQWNuRRqqzfQEa7ZzsdsxwLwzZWKRXbgrHon6j3bRPU6ZF5wCUzxW7DK4ijFCBhP",
  "key35": "5GP2W5rE8UBpMDciTEMV2xmHgiyjx8tGavEmeouFfCEzz9dVpSeN8GCc6nKuQ4A1HEEVchwjZLzJrAjSjRboASJn",
  "key36": "3uWFfG1M9p4bjSYJjKxH7WHndtrnkqTTXxuAw8h1ZbPmQqatQZbVd3iSktGxZ78t2za62ujrvg8qnpK1NMzmV6QR",
  "key37": "3Y6yZkWPcmsCpSB9oKXvy2MvqT7Hh3kFCW3tWHwpYFG9vEng66mNr6WAqSTwgx32f9DMvY21Q51jKqoRrxUuLQ4j",
  "key38": "2mLnMxmhxt5D3mT4mXpb1vwvRi3CMZtqMuSPDQ2T2wy7JQU815bJZFj9g8WEWjxFpM88WTnrm6TxRC5BQ9iTyUs7",
  "key39": "4NAuFprN69uELFRqwugt11aiDVVvY3CWavkZHPGh8QUhNZMZyE4Bs3iFyKJJXGhhU9Ugt4J8ogEBUn3bS54Rg115",
  "key40": "3iWd8xaXmUBzfeos3w21F2YXxub5Ur2EArd3UtZfDdF2FvBF9mFspZkZVh6Ek3FQkV88tFLNs8ft6cd6VZj15eSG"
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
