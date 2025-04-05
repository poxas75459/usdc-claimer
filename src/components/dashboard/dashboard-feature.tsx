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
    "28sv21R8DdthJLUAkrZNdPfdEqLhR8gdEey8Gq9KsBcC13iMzyQQsidayCtKW34zKotKs1wXj1dbQLDz2KCzwFsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gojzmP9qs7aeF3Pm6toDyUiqJEJfmzL6gtYzJjzGBHBPwP5q2pKt8cXjBMtQ5M2LGtGqZuBszZQypKneTnQYNyP",
  "key1": "5sLEzPbvXMyrZQN5w8oW3SB1Qwgz1ZLmid5AM2gZs2M3J5SALAThUAcxfMq3A1oJkwsq2dg7nhSqf6NMLpQnAaZV",
  "key2": "66TTzcL3hM5ZotYGTqJN4wJTZJMUePnKWqtcbQ3eiRVMJ4FsDV81AUVwvbsuseV77GoTDgBZDdFMyqxyx5isqBJu",
  "key3": "5RCWCwGw5La6jNuiborUJqZysekTKeVtKaHxHde7cDfMvXZxF5MwPFAjk2JgaubqA1mfC59FtmdtUR41kcKS9Lef",
  "key4": "vhrLt8ZXNdHmqRtuRufYkPzQ5Eb3vt6MTht5ct1ktgtaGxDrE4AY56JBQxbHGxEHEGCWfBWX12oFmivNfY7aYyB",
  "key5": "4qyCBESbomirrU1d1ZGSSCohkYFE5DzeXKDqQ7whmf4wQZ66EZ53rf9cqsbuppmBf5X4GRm83DgxGqugLzWRCFSQ",
  "key6": "5zRk8zmQFGtsugngzY2XtUrtz3Ai8HiHrRFmE8gjZiFKyq8UxTJ5EzAYFtjw8zbipYdRvSBoBuTTgVwC5ta3hX79",
  "key7": "2TgH2YvejDj7FsBT1R5DEU4x8qzhiuGCTEVuBVTbGiUaZf5ns7kc9ANbm5DcdorkUykHpVP1LxY1VCMSHMT78L29",
  "key8": "9LdKYTriXjtHqtkHwPH3pvumd2VcqKu9smfkxUcpJH88rnsRvyFqi6UaLU9XqiyccEXkusjcQm5rNbMjCokRR6D",
  "key9": "2kxbVHsYhs134VAHzZpAW5aaaq4eyQ4uB8tATHrUdBKuvx38H1cqmnNyd3qsyEpw3Ghj3GPpgbqjZmjDLMuTrwj2",
  "key10": "M3VZSuJdugZ9adhhhbtyYuu64CwcoZz9ew8ccPjBCgxX1PW8DFyLoXzcr5djeRTRwXkg6XeuNsqjQKTc43sNfm9",
  "key11": "4foaZwenJtk4tu8YzC34A6MRPLXf5LwPeg3BsLouoBqBAeni4BcBK8RWdLGvpQN1aXj8c1wwrwq7V7LKG2arb5ZE",
  "key12": "2Gb5V9MvmpJu8P8P1MAtBV34b4gQitnbxUbYpDiLzLaDf4mReCRsSZBBqPxYYMptTyam2jTErdv4wjBoeTNScpAr",
  "key13": "32inXggzmHsxnLjMgUyxri1rd5ekcSPyNJmG6K7Lj8sT7HK4hvEk2p1X32MxMpgD7eWhTBiKYTXiKxcMTMbjtLhP",
  "key14": "5QQ2BbDfuYPuimnVHBsMx6dsCrUBygD89JSGswTbvSM5MGJWUE3jXZWzKR2FMVTv4G86jNcPeVNCwhEy88oGC1cr",
  "key15": "2vavBps1ecqSGPybaTSP3Q5Kz9R1MPRd7XcB8tkP2piWdYtbai1Fj2MnnApXBoPrJ6CG4MP3pHWnVbkmbvGnk6As",
  "key16": "219zqf7PKPTXw5BscQESxUi1ACt1L7YvWR7B2RPi53rJWgGd921Ywq9SPghBV2jLwk7Fd1aN9jMgs1hYY2o4qMyr",
  "key17": "4DMtDAY7RTcDqULmyjhP58WdyqBWE2ienEUhRpf8LgXD1s7UtoQhYNeBQN5UDzJQ52TGbUMDgMoxarPLVcfjUxBr",
  "key18": "4WcGd2MC9rBpTewembEPLBKQRPAxa27fUCkiWeM6qcLCfHmTF36fSc6EL4Bgcnm8jr9h6iAmSrEjSeg415uZichW",
  "key19": "3av8EULfkTrP1SGGGP43bVfoU43uZSkwaLe6UA5gPAeah9VNuzCo7JgsQoKWpCoZGZXgji3FU99V3wtxFk2N23Tr",
  "key20": "aMqoFWGsLaTUdxWAMKjgkuqYCKvk5kYsebwqBdTJ7yb2zevXuX3jsFHfBMCEzHywLGau9ikmQSqbtyPA3jv5THi",
  "key21": "3kxkN8Dst26wrFk1fcghpym3Bu8GPqEt7aCRNatbCg7qfhGvWtazfTsC3paCEraqtdoGBzs6hQR7UoHze64d7Wkq",
  "key22": "Z4A9h74Bejme7B3VhkUzp3mJF3tYKmm1N2nJpkWHgGgyaUpvLn3LU7JSSR316Bz3n5S7Au79xwP1yWgvw34XgUL",
  "key23": "3cgXRvUKMNapsUzSbKYDA42q1iijCQBGRzhaSqG2in5Hk6s7aeMnEj7yQAvKxsrVYW7eekwDdXiSFCqERcvC7Qii",
  "key24": "5aUN59KFvurDvb94A5KBY58w6aKtYSAKeNdKBDsP6odyVBm4Fy8gsxWR9Db5ATFgchyrRSb9ksLMjdGRvpyw8DNs",
  "key25": "CYHYz6R69DvnzecWX5qjK9B1tPdCUW1hbWx7MJk3dhsKtCsF2TFNJ2EfBPdq4yoGUWeJTx5SnYi5msje1u2SQa6",
  "key26": "fTr6FSo6fS5QiWf9ozjtFgbHMZNNBXAxfxMQEQrJXk9dXFds2iQEhDA7QEq3aNcEMWxH3MNaWpjShx4cpatzNaM",
  "key27": "5gMaQ3qZb1Jkpj4T5QwPTDxmATt1hMyPQSiPNat3yQurTdWvp9chH7wKkPriTE7W8g2LjoVwTyemQSM1hxWm25Cz",
  "key28": "uVFT7SjYPn1FExPBNHBugFUULzC88UqXFfr2J3jBuykTUyedZic6YeaGxD7YgG9xkxsfNeeuQYGLv9X1kjHF6J4",
  "key29": "5TUJtGoq1sDa7WjfmJmeLuUAv1B7xc1FYNFTHyeScHwmh7Y1xNZXSGSXiWazysxXxuB6eUVHVE8rRJJn2eb3Bsgv",
  "key30": "4bwzem8sFoAq4YGmn6BiWcPrHTxMxigLNkkv4jAgdayPu3sKgvGAcwAsTWx1prDmZ33MXhregxCiKjc3sDtC8NDm",
  "key31": "3zhg4pYTFrUV8z5aYzUJd2HrCYLLtk33YAjh3Ctr8GUK6Xkvm57pzctSQD1BNp7wp2NtGFqskrnGGqHCGxqUjmfe",
  "key32": "39baLfp7rgZSND6sWCaJLaRjXsRQadS3PyPxNunSChzGV16gFjKV9JMRypxa2P5Jj6R1B5ZfXwuGUR95MaLb9N4a",
  "key33": "3A8JdnS8aRLrp9WntAkdU4PzTjk7HSbw3Qc8xGkDEUjzmfbMbnVXg6LR9arPNhcWgiYFWvbWD64mE1mfNNoCDLuQ",
  "key34": "66avuj5txzpSb6bSw9A2PKPni9PDa3MMbL1uusmBWtd2XLU3Esg7mV6CszPu8y7wcMwjKuJZc2u5GDojR3Dn1q8A",
  "key35": "5cm1CtBTG7FcjMU8fQRdv15EMZvByeKo4pzMejtzzoaLYpzK63XxmWy7ViMNyhUdKrnGF8eRky2jeW1K6A7639uv",
  "key36": "gvxhVNZNUrZC1XtiL89MKdX8ayuFxMk4HpWTXc7HG8vi7dYoScLGFVADnUgQNjiWwXGBMeHgjtDdwYEs8AHKt9J",
  "key37": "3Qexqj5gJyBPi9YbkQBcrLUjBSs7Rswaf6vDokMXMCoXLvLMLqNRJJTufpCQq1mj6kTAhbegaCHXF7PCs7otcFXE",
  "key38": "1bhL6SoyiLSsBJfU4jFUZ3Ks7hae4gd64hyEADVMAz4fR5TfvNXomrF4sYK323LLNsAy4wi2K4MWEiQ5z84JT9J",
  "key39": "2Xsh6yjHxgFDrSxkPa228PJ2KZwGVducY5DQf1pne1r7S98wCAeC1VWL3GVKPvQ6zhZRkkKHvS5atAthLQmGsqen"
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
