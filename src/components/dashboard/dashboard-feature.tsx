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
    "4nhVqiLaHSr3fspVvnQSQ9PLZR6X5QSHiaVPpDTsm6BfBBnSZGrJV6QLPpTfGKC5eM5RfL7qkm14Z94nuifPuUYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u3WTteTQi4u56dMDtVXbeyUJNmehoACPCSxjAtUAu6tpNPE4dcEQLVUMdiHouZQLAjPZTn3J6gn5GGJPD5Et96A",
  "key1": "2zbC6GTnqysKxsubpkeGe1Ycmv8QgosX3n39cnRRPfsY26rF3XG8Vnuk6PSyc9VyVNuxphL2rzF43SruNXtdyvUW",
  "key2": "4EJjvTGPAC2AE3sCEBFxFVMh4AvW8PSXHF1rWn3rzzxWtdaThrHPyHAZ1PrSKkn4PbXUX8ouLu6kuQPKA67Wdzqk",
  "key3": "3nmscd5hUhweThz9LQ8M9i2jGxavt8AbBojnLuAXeAEBLZ3pFxjfDjoeFReQG4MK4gL2NJRXSFff4Dg8VqNyJtZq",
  "key4": "4WwaXySn99myrTryi9sWGQfdLtgk1AYm2WPY7XcFXQLJyAYk2cinEN4K783qziVNRY5U9LHh2ULz5o1PEKxUE7QN",
  "key5": "sMv139eAohsWtwEWo1dg4PaSomnu1pTs3NM6EasDQjA6obEojj7ieR6ioizJ8VLzniErvraggDBx6Zva7dZXnHr",
  "key6": "CnzvXRTdmATn3e5bLwGWxzwDQvh8p33Mc54k2J6Rc4bJ7r8yXpMmTHA9vFt4S8kBoVon31iipB6B5R5DLzuQvCM",
  "key7": "2NiCunQFyHB5MrkiomQ9X5hmSTY7hyKYpFiEJocYvb3FEeyAbTVQoufyLzVxEL2FZVnUrqCQ77XAmQzW8jYxnqQ1",
  "key8": "55BuDWYAKvbQBd5EduQz1LaczE4R9WQ2HBFsmoC8NwhanCa7kqkA8q7z89CaZVTDFjc64VixBPBdmhV2cqMEwupr",
  "key9": "2UJUYSaAsBaGMeN9eTER2Z4mUVeD8M9jafsvAQKmrAVEdD1YAiVkFLpqgy7mJUKcLoMcxjYcCPcf37FSWRyWpgGV",
  "key10": "24pDjYQAHjaGHxKn29k2bpToZGzCYAvs4YomEejpyH3BA6g6cmvA7KiGwfKhbdpihbD2mPFtHAZLK2CNKirvJK6x",
  "key11": "2uZVdSW6UTWgpitrsif3zPKUNioBB7QDPdS8Whx4wux3QP2ZJeG86EuH58pwA7o6GPFQBxgLe1mDqXQqYvPZzxr2",
  "key12": "5edrVkWvGVRhF2ehysr6hgWYGbshWJvbpEmLtuJwCJdPdyTd6WH3euc9czMU1qMEqKTWnHdqnEU83sBJi3t69dor",
  "key13": "2CqQXT8D2oZs3JaBRWJYNha3PQcnLrXojRs6XMDe2QLtoPhnf6Ajt8AbCiyrnTh7kphSt4B7AuPUVcTsehqtwYK7",
  "key14": "22HF5wYQAaFUC8ffsm6b8ghqo2dhTDVZJbG1hGAcQmEwp8PqRaMPVeyqbEBdMyKVYxs5AMk3HpQtHeuETh8faB8A",
  "key15": "4dpE49BhnkgZty57M9JbHVmH8N4c2u83YRw3FkZVvfBhHGy7xTwGnk4zQfv8Y6tcEVMx7vsnWbxr1wDGnN7tMnXW",
  "key16": "5AbnpyuuC4voyMsXVbtuuULDgKn3HoKVxiPrwPsnrFn4JaeR871QvZgBhtmFtTy3uaSNXztZRJhURufkZR8cGhTc",
  "key17": "3xDFWWZcx95UGxKEc2YJmRFdz3KyEv5DmFP3miYoLC4ybYGxzYHNdQwBpZf8ZQRCLkATgyxYBWSMpgADCHSuvrPm",
  "key18": "2idPd3KWYDFPvktUxzLsj44gW6WbKHZJABaAWxHZkhMot6AbG63dMHeNjgkfnwj6Ft1s4CugXBereHBjaYsgkcZj",
  "key19": "3wkGNbcvNQjHFJZ1sHQMbPioMHZZqnDmmLqfjwxPviUFqyGaoyD2qGCBxMyGAvmDCgC1dYamLAyCuf7PLLH68t7m",
  "key20": "235bxJpJrtK2VKgGoaN2hzy8VKJEC4jAdMCpM8jRRLX4iLP2xzFEGohXVm8Cg2LhWhHM8iPC1g6qbgt1vVjUAxcV",
  "key21": "2ybqmXrBGdiDTSZ6jw3emKkWRvwPPxV8KnxhAcExZgw3mMhC5EA8cHLsDn7B8uL3govuvjkBHrPmkNQnLhRxp6qw",
  "key22": "54An1zna2TuxzSQhEKR2xSJ5nH6Fmw9p43B35XUjrYTRyShzB2s6FmyPxfLRrJ1uYMXi6LGVHYmCNSTby63W7thz",
  "key23": "38k8uZ2tNb2nKH7RapUq9fva6wKtWmeufKkThhNzgPVsB46fzyzpJgFSun7FPYRA9T2LrHso66YdMMQ2y2kHjiCT",
  "key24": "5RH1epwodoPvDGoxJXAQsNC6V93aoaGPZZiy8r4PWUtU5uHqm2biPumeBczkhKwfCgdFVKnq9X2Lcr7XbMFBhqeQ",
  "key25": "sUw4cMK2dzhmpsbo6Yhk8NRbX6gGhWgk5Afi8MGqUtT6By812Zw53WTrTA4HH1zzdSZ9KMg52ogvfNgrQsTAwQE",
  "key26": "3iiNWojQiurvTtXowGpGMHTuKoBJ99fq3ipxTyAsw3Y1jt682wXsPSBGDJvpJQjkVCHivmYEv2fwAjTCRdcSADFw"
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
