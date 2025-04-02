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
    "3BuNrfzTSCSUu1QmxBxNaNqa9uX1jEh8eMhv8kvZoFXWvFDmReXA4cpLeQNpQJoiQ9THm5wvpwaqC19W6VfGGtVy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24rdiCBVxw8Ud1q9jDu86zTRAPxHPma92viW4mka6Ph6vqN1pPwzUBXVUeSFEHGT9Te6jUVLWHn23winKhtwJQ3E",
  "key1": "44UBGPPGP6QjPLbNJZRnbnBwnDbA2ruH98RVJVUxi91oznVH3V5yrHCRCxdTo8Mgddk8qmq4NuyhfrFdTpa7cQEf",
  "key2": "5UnKD3mbv3KytWw2poHKSsLGtV38GvddMWx4MUmHyAoybgHGdnuzdxZKKXTBRiZKcUpgrg9kGbQCaKinPK96u5fN",
  "key3": "6adwMg9cNNroj9cSPynFBA7vvKREjnAntPbfynj1dYg3UGoMc6qm6jBXuNCiUqDw8279fAvs2Ep8mBYQpiyt7Yi",
  "key4": "vJPW3w6ZFcfSkor1KeJanKSmXaDaG3B7U4qi9btbv1LRj1BR74MTTSGMzvfKgNPUxuPTYqVwnsKfDhb3n4LfKSs",
  "key5": "2o54DXKPK2Nq1zSzhQHYKuLaWGWxkaMsptWpK1surUqvAHhHrjuif3gaYmDb7zXWPMyqfLrvqueQ3B3sspg6Z2TG",
  "key6": "4pqUz9KaZ1mj99sGqCmUgpd5ynw291ssvyYgHKiUCYqDLgcKj6RdXbM36xST8bAUdLhRhDPxTv5yrEfwwGuC3Kmd",
  "key7": "4r4moGS49gXX1cr7WFLgt2zPrmxcFFLvDWGYaR7R1n5LpR94Aq8ySRKPYP8pAvHynSRHnW4TS3PGs4T9LHVDqAJX",
  "key8": "BrgV35teDpDvejaCUwby6Gw6cpKXcVLpE1smCj6yTqFdRnzzat6QtBBK4xfwAyJjYQFqxKGDxBUeH1z4AVHv8zF",
  "key9": "25UYmZgMHQe7RsEPRGY83EXsgKZbeCSSZb1iP8ZwZGjFJpPaTiwxUy4npxPRZULshab7ktERyGUwELV9Ms25L1vh",
  "key10": "24hgrBFZoNc3e9mKtLtWtHH11Y9h28W78wtaxBr8GVTDjFbKjgfqRXjfvUYMVxusTANNgWQrpHPQjaUzhqKFUm9t",
  "key11": "3RcQWyxKPZJ1EGwrCypWhuqcfjappQ4F3V8ghofdDzfHipZTShyTkYZH6UM7JKyvV4TqDyvNeioqCUkuSHM1Agyk",
  "key12": "2jEqPd97KqHKp39fyP5AB9Rvhfo6zYU6wAEhDs9EyFPBh9vUeDANBvD94Rq7DhRzsSKTF7aGiL4kGmPdxPEDcTxh",
  "key13": "2F4y8V9KeLG3GUbM5S12Tv2VmsnieDuMCQpie5MqUF3QbuiwBfPGBNQeTDnqH2mhyyGwxPLp1tgaCm2cAMXCj8so",
  "key14": "4YZofKQFKH5C3pkABXub5kfJ5Udb2jFTZhtEb3mFaUrS76tBpZHbpZpoYACGwJgj4viXC4RRYb3J2wqfVk2shtyn",
  "key15": "62enJNziShXUiknXhu9MxtczaZtvqZgzKadqCPQ73GsmUHfLqAfPSzkp2qj9eqXsjR2o9ZutviqBNw8vXxML1A9N",
  "key16": "5TYUoAyi1Gq4FqguoZbvNG1ChKe4DVXvqxMwwqK3ogK7jcJ41A2e8uP1p3bcZ8EdXQ6nGik3AqaFc1nhZy5cA9mj",
  "key17": "4ccepGcsVNWea2dEP9YNJNX5tmXkwuXhSuQD5QK2HRJPs8k6YEuGenFaNf2Z6aQE913cvs9LCkoRBWEchjZ5Dzn9",
  "key18": "3FX4uZmfjNK7c6AzSXHYqePRpZUmzshAwtWn7pXKbfT2FNWW4pcU47AQkDFppqLQCymWDwKeVYVhGxA5WFtfbcra",
  "key19": "99k8q6nc4nGLnYVGFTWaikeMpWJgmccQBrrzov1Vc69SQKF8zKymdEPhZ39aUzbtBbLxPFdbuDCVbeeGusxcqVB",
  "key20": "3o9eVEcSbQjBu4mH2Eb4A9pEMKtJaBbB5XS2VKWdRKMmF5fi7fGefZa5Kv3wBdmCxEuq1ChMR4vXw13yngSa4KUp",
  "key21": "4PcNih7mxUA7RKigfS63EnysnSVxRjrzPZbvYKAkgLVGFfUNqiJT52NwACwWn8jFuW6uWo4jpu7muMWoutvBC4wA",
  "key22": "61dYguBP4grUopxFSyHjajjbQqgCemrfBEKup5wLg4R65S9XJV8XBvregu6qXyRwMo8LNavun9V3FRNseK4MGcos",
  "key23": "35v5sqhDyJ6tgrgnGNDRCjdQ7eNTEKb4DbR8wcsuXC5ppRrJqjHAgzAEUdWyirPzWaUvgxa7UMSeAyJraa1dkaHg",
  "key24": "c8P8ydoGHywd8DdiMFrLzPorgYshj5BovHmYkBaAbb1Vv723h9T39Pm6Cm6U77zfYGWCpuNiaaM2j5wJqTX12Kv",
  "key25": "2pSDY8S7k8ZXh1ZMacvDP6pVwa5tJ9NfDNrfbLwvYfFMxXCSqfTzeEPpRyqtqnW673ZbLXoEexhHLULSmd7g2U7N",
  "key26": "5aqRGnw9MhHff9Mi5KtrgFm8nnd41Qx9tnRD2XgWXmCN2XkFgUEqpBx2bjSzhMnYiQ1VqQxRKpCiJ5uDkvxnKixZ",
  "key27": "5gLf4cisN8R4xqRp3NBj5ADAQnYxTZtGYGKwCKXe7fB4ddicSDycLSBokRRSoE6Dk3LPKwEogps8gE4XrQ7ixM8J",
  "key28": "3BzmRHN19B79VgAfjbhvz8jftECtpRLEjjhQeTxGA7wwSKdYz5sbKExXfDhd4RMozK3Ld8USMbs9VV5QHPChQfwy",
  "key29": "466uveDzXr4w1BUA7NV6xfdn3uqomyuKWELSS1mZjv9cnqmS8KDPLqut3fvW4m4Sqt3vYS46B7FGkfx8oYY65yDD",
  "key30": "2F6LLRXDx8CdpNJzVQYvHZrTSiD3z6BhsbDicKLxRqx2pCCSncsk4Y6hsmgHurYAZyjP5iA4gxE7XrZNKHzpcXun",
  "key31": "SvTwLygLX7eiMTJ29znuAKMs7H7Gn1q8rDyxe4DS5roeYxWWwFjMEWLZPYSQrbCVEpr5Dr2wX75jQ2xQmGpdxub",
  "key32": "5sPTa4TjX3HS5A887bJBjgUbpmVoy6bm2xVXBo3qsQj1FtGPcMwNbeoWjexYMzARL8ojyLPWYSySTQSGMBtYx2Z1",
  "key33": "5zF73r2VyQQnnneV7ngXjmABe63az4pNqokUczvVGdrJA6U6hAYkUZSacuhXfBoomY3CY8bHirwLnBTfW4sDwurF",
  "key34": "3dN19U4z1T1Uq89RZgm4MaaTxanTxvf84PnrTa2YmkboqGMcZCTRkyRt1vz77C67NU4koVUdnMwkzgqx4Xb7bFwv",
  "key35": "5RSouC5kmdSsDDUM4RcDVM4gTDqmUzmRp8YZAWhwegCvwqnEVnXf1xE32zyUE9noZLZoV16gxzXHaPrF6MhTPrC9",
  "key36": "45xxjJ2JGmeM4WfFDRmJZJcf6HfMvm6q8J3JRVgspbNW8iw1BcYhG9tNC66Yje6Eir9dswdn8qDQ3fdqNrr1emKc"
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
