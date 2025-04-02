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
    "Reabz3nuGNsQa8jmM2bm6bpgzZKD9oofFxboPMfSPZdeDDP48E7spmEN8Kn6fj1yyj7fuxKmWeUUSmixrC3DVdw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KDfZLkpLU6w549w7EDXBwvHobQKCc5YBEv7PmNGNp9nnCKSS72XERZiAnCft3cs1Sjb5pYPgf38rWsyQm8w2WEW",
  "key1": "22nETtyMGL1d9XtUdiZyZscqDzKDc23yL1ym1mLs9ikvFpsxoDGQxXY93bQbG9xdLU9bE4AD7Jmt37chQJS6ZnGy",
  "key2": "38tj1FSmiFCHac3t7KmR47FS63ik9XvzZdix5xbyoUBFviMgBreqjTreLXvb1eGtvrxW9XY5JdYdvEG3sixKxPZ8",
  "key3": "25HUiNWJdREjNjytyU9jhyPQAbqnmiGWi2jPFkeETGYFC3paPqkcRr7ZvJe7VGDknHjTwJ2EPm3jFbv8M4DaXzro",
  "key4": "evVTapj2jUz93y8MrnY4C8UtMWtGycuGXLBKqcFTxtU4Go4xVQETtNseqxSuKBdWG4jicG4PrfGSnHVa5BKykqi",
  "key5": "2wdRYGWh9urukma7oGvcGA9efd1aWviGvY2KPFSLwjM8SKGx1MCckmFabfJv8GYBh3EJbwa2w8ssvAXFftaTy74W",
  "key6": "4CmxzW7YV7VZGnJCX5YJmiCjbFxzyp8KnNj75PEhVwDQNinHvmPjttEYtuEPk14cxfp8Kqr8xYkG6VWSqHcEf5ML",
  "key7": "nmYkmrsonJUUcbJjnZiKy7o4YvzUGrQD8dsxrYQzRdJSpMCArtnUsw3hc4uubxuHDLoXSsxNEmEmpD6Z3qb9rHi",
  "key8": "35XDEWmXN4A6unyhtgrywbDpYHjoT1ZfJPzBLkYL692irSmdgop3jxzuiKRPRc7smCGtczmMHVqUycrYnBdH7wGP",
  "key9": "2tHr1xni6ZZmmkoWjcjTKutW7ML9kaijBhhdDvGXGBYyjRWcq9A9czydoLziJmYNpBLQCNmdsm6Yn1ZCfK68Teuu",
  "key10": "2Hqi3zjcZREhVB5WpJgaZ3c39jwk5P1mcNJacf1TvjpV72uxHGfmKEUPrTnhXMJFC3wVBMNh6h9ZGz23GJcXP1Ja",
  "key11": "2gt8DdtyZ3zMEywhzyiUAUpdHezdXDWVsr86EuU4grx61t3n95HwvnEQzKMJSiTwRmBKtdUkJeSvzKGJJaugptTa",
  "key12": "WGWVqf4jXzfrR374nfuMivbtiDx7vmhtt5qJEZgJQC5GSRUiyToQ5BdAPfpHxKcUEtEew3uLKnfr5KqxX8PXFAx",
  "key13": "2AXYorU3LLuRpg8uRojeon7jhmp1ZRaePXC4UQVUozPdNSM8JLCj1KiTtwVze6rrwrgfMSn6CrP7z1k9SFq8QVvm",
  "key14": "ZobM1jCMjKiZi949d8WH8vPqnV9JioQNATHFmf4ZoHE7FvEZsFbfrAePFFMZmtCUbEpYrfhozTZkb2Xf5knZs29",
  "key15": "2KMWHrK2ioH9YGryxLeM9RxE3XbSGecJLghpqw6SPMjegdovDNmmkABDC1wuEEdTyZCLPdE2XHnDsDiXt2EayRt4",
  "key16": "21sYvyzc7s9g2VSZSmprxMhF6qVmme8xXoj8PNmF2krZcpB32zXxj5EtyH1Q9ZaFY3FebiBwXp1WdrrwthSqFcNT",
  "key17": "5LvDJyoB9QHUTUwj6418hMSCxpdWTbK34Ka3axS3mNW1Tnsx2wF1QXgqA42PA9oAcsZmQ9RBYGtYW4HWqkGMkzTF",
  "key18": "3ZAjqHqf5tyRAw5LMSSzrHKo5r8dujLXow1CLubUnTLDMW7GCAPgotcie39VPF7AHJetxqpk1WPNiE4k4LvswiLx",
  "key19": "4WonAQiUXXHfpA3pLMqnhrxocUskJexL6ofutLA1N1qaws15rn6gEQqBFfYpMoMjMNmS15KDd7tF9jSTcDDebX88",
  "key20": "3QNKEYknSzsJcAuEeAGzBVuz4T3wcoHC2xvgKchdNQJGi7DRVcks82yDEv3iPW8M3aExF2TFtNmFx3KZYsERCmwQ",
  "key21": "2YaaMvXjbX45oxyfLJFgbM3WdVZkiQMuxc1C5p3a6TD8AyDQwUa3r4sT9DjEXeNk2bH4B5u2dPRkbvTYRgBFBQC4",
  "key22": "sbSrmJaLpKbr4CtVRXsYENgH9u2Vob1x4QLFAndhMhv9V4V4o9uKvcMFuhFYNYVgLMUiXXt4zio7JsseyQjitwQ",
  "key23": "2e1Yta3i1TSwhk3uEFzZECf1o4sxh1BXYQ81bYEDMLzHqF1RfHGTxYKKBsHbrRtTFaCgZ8Qejojaxmbcez57v6ZF",
  "key24": "2LyTTLuFFTaCuD9g9yf8haTsfjzxN1KzA3WtTgVRs28CQGgsuZzaAjbqvcxUmuWBz5TYSi98ynA9g5yyaYupBQXM",
  "key25": "4Q38AiDNSNt9gfH7NMcLUC613Hr9JAyqJ1CkGax92ZWmvuB2xWU7G1xe7TXAHmHW3ZGUbfoAanByG2Sh7mwBB1Sr",
  "key26": "4JLmWSxkEZGVnfrXqqV7yYWSG6uaafaTsK8azuSuC2tAhMur9uEacnkguWPhwoX3PhsGbm75LJEkgSRhgnxxtAfc",
  "key27": "2Jt8DCthtDHf5MJLen3PUE5BvSQUS8XtXCpD2iqUhLgizuuW8c4pJti8W7DFQUxuyfjNGV57yquJFUhZSPYG3hVC",
  "key28": "2iKcdRRbTYFGERCJ83K2UKxxN61QWXNZ7nHt6m7HrPtcGmY749FU1sixC9ktr37MvzVFGB5LXVmndjqH3hcUHigG",
  "key29": "RcBArXm6EndzixhL6bc4ox8UaDFTtyXbtf5tPrkX5KAxw6aDA9nuWZHJ6WKjQBvqEnsFJ8ehSszkoKSPLcxGiGk",
  "key30": "4X3JffftPuZb7Ymi4ubEfHN3dPu3tfFUsuMiCfoHtvNZXLngNJ83waKVXqoq1g9jKzYXs9SZpKD9dEiu5HL49xax",
  "key31": "3WYjc3pkyceH8cxe27st28PKobTWGmguavagXhxj2CiXbTaaY1sfEcyFZSyZ6PyDxktitWGGZctJ5GuiFTardT2D",
  "key32": "4dNWUTJUHrn4qqXW5wHW3rhdJX2TsyCa8nWd8kRDugHd35bWxkSkJNaggF97Z91NMnh3aJQ4GZdHHeKJHJhH4yw3",
  "key33": "4SJcwgEPFLNF7HUPLiHKUBQNLbVZ4j34t56Bx9wQ9qXiAFk8ydmWq7NeLCcqAhmF2scCcs8u2spxFFxQVX8j9SU4",
  "key34": "2BWbmoAacZ56hWKb5G8JysWcrnbWNkub24hqVhvJ4MwxKjobxjAuhiamp5pChgs4ftXe2EqMivArTCmr7WnBRpMq",
  "key35": "2gzEURTS9w9zg9sWzvvFL4gqACagFS1enatPMDZYu6qK6vBZPabEcgxfKzqHSSCQU4NCyxkYFpuuyv2qVgjtcdWg",
  "key36": "4mmDq9zKaCeaxuKS2kJwUS2GhSjF65Zdq14jv2ynuzUz1emqs1UdqZwBbtLM5VPsG6jpgawHv8TWNfqtP2oSkRsh",
  "key37": "4En8EKY8BQbDg3Fz9iiM4xNsntEhnF8zuXb8zmUzr4cnLD1JQvBJDjH7veLQCfMriutDjSK8hEZs3bLXHwM3ntaW",
  "key38": "sr76KbF5oEbEyDcigsoRWwKbSXSoJEeCMAmigzB7yr4aQZHrmPVjC3B8t9MJqpJh6m1J1SsyxTs5c69Pcuhq4YV",
  "key39": "4gjFj3KiFPsiWMQsjuS2YnrkqwXzZQPXWUYwbgPLPeRdaXvvhpoDpBi6aAcL689fZFqYiWi3Ac2tdhK7VNpsQydT",
  "key40": "62fBLqxfQuRgTSbe7rU4qDZ8YyeN2jsxT8snpYp3vEqju4RYjMTgSWWkdjrm26zF4s6jmcAt3GUteqyYCA3cZJG3",
  "key41": "2UevZ6TEvqZw4yNuyAdQ8w2YeuwtpHPsH2cBxtvc2vcUs5pTPPp1c7secdJ4XqAU6GHpuZXgtpWq7BQgdxtJE9ZC",
  "key42": "3tZKNRsmx1gTQ921GDCqrakzBHCL4PWiY8zka9nKe36oCc3AmCrVZbjMx1R2MqHQTZzg2jTqew3HjEYK6ya9tixF",
  "key43": "3oRqsdTK5R98kAEdNgkVSnRoKbKRX6BMk6DiVJz4yW5YFWytHawTevxcR8Ws5vK6ikRWSLD9DrcS9hyKZ6omNACm"
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
