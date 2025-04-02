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
    "3X48TUrTzaMKBMHxcvLa4q2mCNtF5sxeyZjHE84NJw75ghwDZenRcTndEJVMsWE6vLv4W4Npue2dEGdFjw2uQJXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qbYKfe3vp8FvmQ4M6PMXfcunU38r1y3Q7hR5rdvMuHgR8cK3VA629pKcZQLCyLz5qLxx52Zdb8FxUXXSWL4rpTK",
  "key1": "2azhpdU3eihWRuK7sdom6kCJXwQbAqoBHSfpQeJsYSLJ84qZqMFHgGzWFFBxvpeKE2eRwiNSxUagSKjijBmAqfgT",
  "key2": "5ytvctZmwdPkBv78pj1LgbbmiKxz8BdL1NANo6YC1k8smjYS33Tkj9rip8YN6wWJgHUjg1XFvQZ8GA1fyzfAeev6",
  "key3": "4S2xi1g59Bn1d5NBYHHBjwQiP79vA7d8kwBcTGDfvZHmHvZUXkxVRMC7xgx8GJr9dfwe76DnPmDvgRGjTZ6mt42h",
  "key4": "42psZnZXf7mvG1FnoDAv9HPfcjMWULWnZrhBgHfH3nsKRgxn4PXxLufXcZLxZr5mss4cRMzo4Uw5TwZfz4S5AETe",
  "key5": "5mTVSorhfKyu3Jue33JehagXE3HQMt55h7NpVKoRHtPHtN1izAfENtttPBUsYpBmHRVofdWbLzPDcDQcYU3ZD16n",
  "key6": "5TTHa1rJCvvuT81j3Rg1ht2oVkVC2rjvXf3yxw4xgthCiMR1oKqhDoQT1ZoNbRLrtdfVRpRoCoyK6NPjwaJTEvi",
  "key7": "JQf3gK8JCgTWr3XrTVdVusHbpAni41mH94SUtsZLCd3Bi4vPxwSkfeWbLuuFYkNtSw7LFcsgwjGdNid3bm15ehE",
  "key8": "3HHAMuypVN5yQqxz1fPS3FvkHnFapESSrjKCmq1jkYst5fShF3soZc9s8mhmGC2aBrJyya5PHHBoyZdmSV3BAsDj",
  "key9": "5vJ88yLW4vc4WcoK2i1xzWNwUnM9YvJucPBakweedaLmuXD2URGdXihNoaYyzS2HcdYzYzYMEFu6EMbhNFXHP1ak",
  "key10": "36E6uL9dWfhNH7BegFCXpMjuQP3QWt4B1GnC4AxCviAqVmobEC73xXryhS1FWt9JGcPv9bvQCQnexG8drcTfDZVR",
  "key11": "5GR4qTYqNWu6C7UAfrmm9qs2gCzxRUyt6fYLBZP3r3qCLcvEdP7iVs97J1funyEzJeaUE4AtJXNgiy3hPxuuBa4q",
  "key12": "2DvUpXZRV2451hFqHrXqovME9GWr9YCZUHKdzrN786W7hExx1xwB8idtR2UhxS6Veo3Yx7o1bCv3vcp4HKDvSqVv",
  "key13": "2gjjXBfLuJ4e8au8RHQ8SZoZiDecHw4bUr44wVgUcLMWbJUddRrPjLCfAz1F37gw6gnQMm41HW8eJEHEba3XRybP",
  "key14": "5G1X1heCEzEzXK82LxcaZyod31pQcRy8RWLdoD3QFyH142xwjaeNzxrQThTxxAsSt5232xAJ8qdkMJ8kvyAHa1Ni",
  "key15": "2kurQyNFLj6efrwtMEAX16mAhgG9THTYJRpxixiYCLMB48bsdKdKA9VdmMMqb7tmzSfiLMfKnGZKw6GrWXyNP3kW",
  "key16": "5CJZ4R1AZu7u8WP1LiuAA2cyZqmpuakRJFoxaeJtedLE4Ru3p5GjU2GH4sg2RKLDTjbU7UaPp4caffNa67oAARy1",
  "key17": "3gURzuYxvc9DmTnrZ9JNG8xibD3YEzPDVKXYtooCcUWDYbhfkHsp7f8R3pddovKw8bm6s2wK1vJFBGWzcaDNiCJy",
  "key18": "3P2wYwDEe3GuN1Uk5PsCh2fDJqQaRPUkq8xhe4xcJByPbuQ3RaWuUYYLvdYwZEX4U73VZjr6yTwJSHc8ZkWBuZei",
  "key19": "uk2jBYwh7aG3PzoMvioaNtTKrK2vNaADPYjEmqqPFJDjQjSzds7ePdoXL3AD9uq5CrPcMYt7gqYqVbWHyPzEs1P",
  "key20": "eREHFMjbeiKFCSNHZ5yb96rQBW8nM4ajKSPSkobSH6zr85AKgDVFEW4UWoXWLJzj1GV2oddFUQjS2KinbwefY3q",
  "key21": "3THAqnPWC9qLK3U6q99GxErEbPtLbmG6LugmYstX8oD6ztVRWkRdbAwrrnai3LdASeVoTKt17N1YpegxsWxpGcDd",
  "key22": "3bD3wNBQyGXtbTyqUnFwwTuQuikMwrAia61bbs5Y5sG3YRceNoR9D4Cqoibs24afMAib1yAmUR6QnsU5MPWjzfoR",
  "key23": "5Z9gLgtjgULZ1aFH2rXtoQh6T4fgoBg5TuiwcbfQ7zS1zK5FgRZ2Bwgz3dp1ZMr5VTRodPwBpo5TpLsqQooZqM2i",
  "key24": "63pLgo9ik1t99bhczdEnMHgjTtjno1diZLDD5XFZJq44Wc5SRwonaymGu7JV1BP95yKiuTt9XUDPpevfJAhTpKhc",
  "key25": "5hDk5HmUQmaysorPa3QVsW7bGDxJcE5Cg5LafPf7UvnBUdAP5LC43g25xCnpRGE63uXffRdZQaSN3h4WUy1qCyrm",
  "key26": "55CTGoQxKX2faP6YuR4q9cPmLq3cVDTpXNEMVZdg2q8QTKez4nygkXirH2PWPpYJfBF1Mp6GQbKk8jX2V3evZGSE",
  "key27": "2YbbWU9MUQt1z7xxF4ene9sDJjn7vfqkX5XGb3CygQnKo7KeQLkjGj7HbLNcXHsCS5bA5FSVh2RBe8YGMZLdbAGE",
  "key28": "4VoeWUzg6Cgyiz7cdmiNw7WXjT9drsV4dy6EviRBKMtvhTpSVoWUjBpgkA8xmMVPV85iq7qSRrycBDMEhqcBpnGJ",
  "key29": "5XySgCPfsUHHaVi2mFkrh1VzmNVsPK17Djo7JeBr5irbfGpecD65J2qHF14jCctZJ1euTLVvfLHPSuLNdM3gdZv",
  "key30": "4o4vkSAgsBLKCa4bmCuTFKA2H4xmFEuP5RPcfxLrzLdagHhRPc1VpGg6VBkXAgvX65VHwisV6xdSJSXhkXkd1b2p",
  "key31": "yCyh8QypbqLwDUfGAdj99LYiqfHDXBakBZ7UqUDRhan7dPqpLq1fRNh1kWsZJZ2VD5dFBUJvQtbDdwP81veCARZ",
  "key32": "5oyRiMi2ZihNUrrZHy1x4baccBbrzvxVwsGEGuWHroqVVkq7596d6skts6PYU1Ztb31BzPz8vYquRehJs6gCXZ9A"
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
