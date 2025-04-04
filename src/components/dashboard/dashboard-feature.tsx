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
    "4KZF1ts2zS4BXN1saeRydtSx8py8zzzjeFANd3FsKhFdvCN1NtggT5XMeFFg4k9Fvh6EobCuVMAcubMYVdcC5bxs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dcVAfBLw1JZ9gd29C5mXzSfpuswfZ3UrEYuQkwapvXjJBdtDNKqywFTJWcX9gvgtFTEeu9qyKnipUK2CpWtXjwC",
  "key1": "5H3Zmcs9k66SbniXdXjTRCiRgAa7wpoW7giVAzpePj33YMH6vxBTvp5vuHMDo26GBTw7SpFZWtJv3tbbYWzxsgxu",
  "key2": "3aoeAHXPTjbSx424oTJUa22FKhfjmiAMHFKLVqZSeYSHmWtuhsc4BE2np6SHxrZZgADCDESTreWXNKwbmpoPkEjv",
  "key3": "3YUHNeMkFUZs9Bh81GSZh7jy5EUciNqrKbJyNEP254DUEU6TPbub2Dzi22zu6UhYbbXkDLaz79LzjZ4a6CpRcGzG",
  "key4": "4ChXkCGsvf88bkCeKE2ujhuZScCwBwiEknVuzmZiDJrajh1RUjYf6uWCiASN5uGkDHhNNhYqkEcuXNSRA7Ex3Yw7",
  "key5": "oJim6yvgVoWE1Ew9926tfDX3PgNnHKbFhejg8AyaQWfKRxyST1ET3ttCn5bwXnWPN3rMjrCN1rXwq8Ao8pvX5tq",
  "key6": "56s7PVCMdbbyfZmcyiYz6nL5QKnGVAbhGa6WgaDmfxy1KywpUy2D6w3Dw3NWMjihTqxyY9XudZg2FMqkpPSYDAqc",
  "key7": "23vQ9D6ErYX8rSZAqfxsVbjND3hR4dW9eLwu9uGtRATq4tbAnnriigzQEe8mNaKCVfQLUv3SXLeRGL3M2ddvXadF",
  "key8": "21VD4Q1Kxnd3kdKPQGGK4DGdjNZA3qWidUS5Gm3QMFxYp4XYhxYBUh8C3XWmnQiJJg3zUJEYhxpt3uCqKN7eUC1R",
  "key9": "5woVPfcMHto7u5rQkYZiYa6ByVbTnSS4HXPPSZSoiMRmFeXrqkE8yAAiuSmLaMuVLW3JmFLchvpnyiar7q4VuAty",
  "key10": "3TyqeasC9NiAunn6UfGnK718tYmAc3hgGTr7K7m8QoK4DiCcVJ8pfynFz12kYeTWFpUb5HgLjzboupWQKLJwgJ8v",
  "key11": "G4GzaPmL4NC9DWKAVt6fKCohkSgTJfeByPPFAzAQTP7iy4ur2ukg4rPwW391GpK99LNYEdXMRzmd1Z8WuaHFGuJ",
  "key12": "24r2FYqVVBYLNZEDM56PF6aaCkswpJNUQUtrGkDzUYpCPzSAZsiaogZcPcEShmpDhXSQWHrq3EbxVuN9SBcAoYQz",
  "key13": "5fQU7D2GSz4zgZ3SS7KbhzRkncawMU7BovmLoj37GBBaMCqpmwHgDa2nYHKuhZTePPVJtzgTqwrbH7MLEXDCZx1n",
  "key14": "4shH9ramor2sNu7FZT4nkwfXuAJ2PXJAdjNVyCVrdVEXxkLAjffTepRFJkBScY5pAdHM6x77hMEg9LnXAucmJXJN",
  "key15": "5bK5rNmEVMzKTRijjai4XbARMwE5HfVx7qrfEax2vCBeiBYDzV8CAnxr52mFsuK2H5nqZqHFLWrYNUGHh2zMJrhs",
  "key16": "4bq9PoGqTXdMAAKLtEsh2NTogXmh6EyLaWXT7pARH1KPsuJFA1tt731DXgELYjoHLnC63FR5M15Rqdpfx6H41aL5",
  "key17": "ZShEcnU2QLxuBphLVr67RDWR7xjkVi65zP1Uiy9GyUn49nEjEunx7u76EJ9s25wvbwYuUbpXPHtgqDpYYuHBCiU",
  "key18": "4qdHJXaGGLkkda8by2Wgxg3cdETPeAGkEgMZGVscX9jZg9nVn4azFaS9MEZmfQVEuoghNTJnVVdDstE674vp1sNs",
  "key19": "5jtdv18c3pvp576s6Roj8sXDuxqhbG1JfQoBkema1jBNRci9mCfbUZcpgY1gaExFEkHo3ydnWGxesN97L5Frtbge",
  "key20": "mX5XKFTVWA8g9qL7R8ducSUQk9q8PdAkrX4zmRpCEdJyDC95V2nxeVZJzt7vKtiKnJfBwLc1yGZFG2Z3BazyKab",
  "key21": "2PcYnCHchD7DggHTdaewAnBXPDBJaRfgMvdeYb1PuHbstknLxZHv1fwUPKAqrT97NP8W95bcjcoYjmz8GVfAcMG",
  "key22": "okZBLKUnK3aTtkBPeADvfV4wShf7zrU9PdFhajEzaXQGYAkkkc1SJHoxe9eQVaNEiTWJjNgLVdZbWRYFHvnbAFB",
  "key23": "4HFxtsiUkgBFVFLcb8GGKaeLR41kdkABNwLmUjpfeZok5pCPKjMz28mCfgakW6ZSLkc6TW2xSXLGbNC8oivGhEQh",
  "key24": "4Dd1idXJR9H5CkNNZkXAkv4eSwT45coWxMX9bm1jL6jrkrxj9fDMkb2W1gcqoFBcdyb7Z14prY2AzjUjoBR4Ff42",
  "key25": "3Gc1mdEhyLFEyDJErfx3JxGPN4vDgZv15jTJb9emtRE2DC2i5CuCWewekPyqk4tLatrt6zCP27UYiJ4rvHBvkysy",
  "key26": "25vcXaDEbZiSr5mvPw72aZT32DNQfh48LCdKJKvwFx3ZMgZeqkmkSzj832sjPactpPfR8PrN6HYs9yYYLZheXVrW",
  "key27": "w6wq5h6rEvxdRUAXPGVgE2tBwbM6djuKqoy2voV5pXA3NR2WQ6DSV9WYRQntbLbksn7eStcUmp6FHzp3VwSsLba",
  "key28": "3RtVs9MVES5sa4TmAKdQkFW8A9Q7yTBhNAzAQY6jmzQnJ7CBPqBszH2UMk1MCGoYzRHmN1ohDhwrC9Tm9gLqGDdz",
  "key29": "HZCDPuRBeRo7CepBNpTKKg5YpuCv7sA9GynqBCpAftSsDVRwXR2FNDRfcS4ALZt5a6fNthWo3ifMXvBm8DygYcE",
  "key30": "AmvJN4QEQ2uaHMGU3iqsNdciefcj4bQSWwTAGvXb94DuCGp8yFnddaTyQbzgZuMkRYTsjsYMAYRxrdAVAWXkMEV",
  "key31": "3wbRTjsvGiruFMyEkACiRsjgqpByo1b8iBcyCK8rr1jfBytcxtyYsgbV9jr5scUCJ8k385ZqJ2ay1vrbSiZauimp",
  "key32": "2avT4G6otKbzCXN2xHe2UWVRryF9gTiHEWrqtPDt6vmqQecm2rtZWbzTLhWjqV4GZvrexF9C3oLLMzy48FN6K2E6",
  "key33": "2atDm7Mz1BqhpZc9eWhfr7BuXHVzeAwVY3cGH7oHKUcQJsysWUHXMD2mEf1Sz1RaivaJpTv5ycy3G693x7yR8n1Q",
  "key34": "95nKu2x4kncVp9ftXPjmPwS5snnkGX5Mzi1Mcixu1dQ8gz7uu5Mw4U9TEuisvmeRvVeqPmBQg7M6jUjJnPVAamd",
  "key35": "2CcMi1zyHx5XQBUqVYgXikm1KSVDWgtHAcJ7tjbcSxrohNqWMsu1S6q1mRNWRHXtJUabaRrhVcu8DNyoBLu9sPbk",
  "key36": "3Yf2Nd14rbJ5YK2wDAZo8osoASPqGpucmuhagBMvo5BcifVSfFM7H6QDWmJ9G9Zyp7732rZhG9HRLyPgY1RBFbj1",
  "key37": "63hEVypnoZsffBHKKfsEkTbcmYyvdA1PgXWPKEXEoq4t53ut4g6DKhM7fPvr6DaDMhX3aigdSXS5YAyuNhfKbrDX",
  "key38": "45C98X1LaRQLVtkSAGUZBvNnRheA8RcZkyCsqN7DDFNiYs1Hz9CP1c2Ji4MrJ7NEea41fnUmnTve4QvXpAj748jp",
  "key39": "5NFtHq2EL7bZFgtwqNVHUiAKrFb8DHqbsw26KCpAvzsNit3PeGYVSNkY7nD4oY4Mrf6dHyu6A5en4ZgcqwtDCXCw",
  "key40": "2GRrfdJUdkJUJYeiNo3Ekx9pNdrdzSc57Fm1L8vwBTjtUhX2dsETMt8ZDFNvTMF6gBRk1zpYiMHgr86FjtMSGDmJ",
  "key41": "5JEgbRpHLLxFCDJiVWDJgaGgx8BXKUvPhwHLvpaQrW31VS9qZC7ABoQAUieBPFJ4f3uNQ7f6m4uaApjMh6z2CkS",
  "key42": "4AVnubgzU6iBgH24jQTY1cTD8Qfr4HnX4Hq1qSJSSG5VhrcekoduvUNdZ6GkJiGFFZcMxfh5NQoZVDtj8FXtg563",
  "key43": "3cwqCVDhM7jtXoJwGtDK16ZhjrohQauty5UiGcxWzjvEwUKzgDiZ6XCKnU9AALs1uiaHGwpcb69HwUcUWXd8y9sR",
  "key44": "5KheN7t4LLJasX1WP4Qw6xWabJ25rY6z6raBJoo97M1bCjyRkaQ2dqpkH2gMnebciVECnEeTC7c1c3nMPwBZS7WJ",
  "key45": "4MURej6LZ8ufw8dQ7jzqqRrBRbXt1nCoVok1x8B8wmBpUqTUy47CzPZPqA5J1fu1siy9CA8d6oyJUoaB61yQW9xK"
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
