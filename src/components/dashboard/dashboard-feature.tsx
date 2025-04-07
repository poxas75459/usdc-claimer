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
    "zK8Cug1QcbaZYxKWWv2oVGpmZtn9mXVwdr2uqef6xXQjxW35N9dtcE6CvnkgqdpGfHbcZPUCP5AehMXi7KYaxCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33pqRQLTaz5CrDi7AGPznxJX6R84S6hVSRUBcvTAckj6qnKP5FhwBhMXfuDxqmmSXjzuewQ8jJA16gwY147UqqS4",
  "key1": "4i3kYrrbzToDNWb9iQu58eahr2TPB38HKTavqQJf85rVk2wrqfGXiEekRsyYr1j6tpHCTWLAaCsz3MJC9wiR8SYB",
  "key2": "5PYU89CQ62jDP7N5ERySE32LwNxKhVVh4Z2iPZVRtSTGkvwQwdcpdyntzMa7GDUYhKMp8X9sH5eVYvaYHzi54Tjt",
  "key3": "5DpjNYCxamMJQAm4mStrcsHTUShtkCjBbR4rvAxaEB2ro6yw43nBJumD972qPAfDdnrjwzeJ2iS1GT8exj2gZ2BJ",
  "key4": "31DSpRQwkap1P8ptWzNnzG3S1eWWM3iUwvsT87mHG2MoNMa6tBN2fDAST2TMkvSbXQfjVyAi15oUWzw3Qxod76DD",
  "key5": "3QszXk8yhV13tjQUJynVVDoc5pX73Buzr7jpL8nojs4ST1ZLh1HzSZzr18RmfccGFYwYNm1d6ndeu7GnAnokXkFf",
  "key6": "Qa9xc4YzdkJVtcTQ6DtWGSAFxsimHQEBdKA9NoGGWMCYDwe7TKnZTN2Am8EfsNj8Lbm6PeWcig99qo5F1K3q8FG",
  "key7": "2pfDZc7s2E3k2pcCwtk2hJipD2HUoT4F1kJkFGQK23p66aBy1HVZ2bdpf3j8uDMGyztBACrJ2NowfMhv88AgU3s2",
  "key8": "5rNB5hx8fdS2drTy52YFghU84YgtxwtgRygaLw2wHm18ydLXYnG32FCSgLJoXnikz6H4CQMvnNX4M5DoKascPuJU",
  "key9": "3VVcMZ5ufNTxYvTbqKkgdaKdDcYbJUasdVtHLGnXunTTDpj1kTgZ7Eq8S8chUpVE1uxFWthnhpU1nLvLssgivXJb",
  "key10": "DioKmnTtqoxvS5jXmAqkDG8z9PeVGTL1qCmKMAhXzE9djwSg7eRGyGHWuUkoJVrF9WjFiqCPtAyfkSNDrQkTW7S",
  "key11": "TiW8uKy9RjgbSbD6AuATJyRxPYXC3aY4gZ3fpBSiNvFqbyVpCyFKwbkv8mbASTXToUzwGxXfGN7EzKQYq7RVGBw",
  "key12": "2LHK2a4xZyJgaHrc6DJHfTmUwm7SwP3i5D6ZPGW2zQyZBAeYD38V1YVJsgh3GPpbs622u28m9e9rVATrVMTeePeP",
  "key13": "52xK5kPJcYJ3GUFfuB3zUTWzSyrYjv74rFLJsYM8AZAHyMNuN4gUc2Kn9Bd8vKK5TTTZqpceHBAB7bi2nWvyR8rf",
  "key14": "2iELFYHkwMNVN5tkkYQLW6Ks7GPQSPnYpczGaEJ466FBjeccN5xBoFYdcYrpbBm1bCL9PXxYUJJJaac1uaTRcHf8",
  "key15": "4toe5LCveM2p8Je2BHFoHZkx3exf98sbU8NEWqcyQoSSSTfKE6oWsz9uSeBjtvMKwPWHe5xMWqPtrcNmr9sibjqR",
  "key16": "4S6VoywnPFZeK64GGUcjBzvsP1Pi3FTGkkr5G4Cn4GNq6MaRzC1ho6YkEXb1NMtTp9baNYLDVA2LjVkVSgm12SAx",
  "key17": "u7jUsHo1TD5RGvQhtWHxVnh9mb2wMdqaTmLfgvPdBnoNw8BkzofnPv5SRWPw3UVuejF3PoAs4ZUKsR4iYPWMtWj",
  "key18": "4rR4m7ynhMcbvpjHMJj8RNMDzGa6sfHJykLoV2AtqnqrTPqW2it2xB4LDrqN6LrutBSQz2WGyLgx3FMD9czdmFoD",
  "key19": "8TQXyUYDu2XuF5M9QXNCv4MdwbzgC3mWak9B4bjyG93CdgYFQYnnruM7FrBCfXJBHwC7zRqf7NSBbhmzdYreUQG",
  "key20": "eazNg6SideBkEgkXPaE9VUF6wZ54dNhDLQVRUrPVHY39YbyYXDyVrF3epueL95ran7rA5mqYEJkfychxpW96Wf9",
  "key21": "5gj7xFBgHZmjgXw3Xg3ZamMuPbwAzMHRHfczVr7aibPobhomimqZktGSAWjtnUs9KCVUt4WLP4p2yJ5mDu5aHWLv",
  "key22": "3w7hoAWa6YxZM8vHEpY43uRQi8Wq9MfJjEFSnQvUoANfHgpR6T2xh8CRD1LvPwRjuoDXqRvddrMapvDjjEgFdMyx",
  "key23": "3RP8YnWrApau1eSAR35zYAEyv6gMQiN97ENDiBEXLbYp9bVYV5aatTXpZbVikM845vmL5EXgwMKE6rbZSMJDcVLe",
  "key24": "4gHjvxr7sSxKPDb4fpdwwPazXHTthxJzBQYPCU5NX6XcqMwjUg7aFXeXoRnBsTFScHmR3ECZtWdSxkwYm4JChWhm",
  "key25": "4fp9H3MX8s42rhutg5dCRWHiYxBM9j8TKSG6Dv6AQe4krf5CpBm99T8GWRwZBjMbXeBnWh78QDXQbkU9kK8YJZHU",
  "key26": "5nQVyu3X8WJ1YaDyBsTCHzvJixoWQzrypbmEpPL3ddxYCfZbBWxEC7wHbXss8QGvZJ5cYcjibwgLz7WFo1Yq7hzG",
  "key27": "2YVkREXjxwJ2HZhzLeEXzwLRAn3dCHPH3gt4SMQXjnrcVsuyrKZMwtJ5FL2aGBJAMEcH2aZVrquHNeWzHtQGSDCq",
  "key28": "5BBBkBBZYFXotSKQZ76uTMS6ffxNQPCZWenGNYv2LzmbV5iyQa9SsMPoawtvw1J7KPCibHdrzXK18N96c2pguN6C",
  "key29": "2mbWxe46wMgfFvFqN5pS5Vc2Ec1VjKC4uD4Y1VSPwhb1y6PiP71hdErDPMBM7maUPQyUWCiB1K4j2fFWbHrknFUR",
  "key30": "41UzksQ6gPZKhmW9WR7NNTHGgsXTnXpDq55bvevMjb73FKsnN8ZJdnhs9R15ajq1hgF3UXpCk4dmCvSikjSK3rdf",
  "key31": "5Z7fD2eauSP4KN7gCnpqsdje5W21t23hYcbLrmiUDQR33vAZX4f7KQDkboNwsBwcMDzmM2977RTjNVwMwoFvUMno",
  "key32": "5XM2PqtCmKLwYGfdWKqfD36HrwowKCr7divz5x8eSzGwRVm9SQ73x7h6Kao5GKc48vXBzmXxiHG5GpcM47sD4PtW",
  "key33": "4NnRHTe5BJyazRHGSvzTDDo1QMCXcavfw4yB571DDL5fL8GPUEb3mvFBmbSf8xc6sxBWc7sr3ey5KUSw3krmxaMK",
  "key34": "5jFjCNAHG1iYhivsuquL13cmURvjsYtNpRHakGvCWduQ5N3aMEs5RXc33C3rszd3pVx3GS3brRTJCk83G4iimyj1",
  "key35": "3B6gDsPiEKVMnXeJKifA9UNi4jFzW8S1hPervyx7pqwJ2KQ3VBj3hU3Jy7rgjg2PY67eqMvn1e932oRBF1vumvig"
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
