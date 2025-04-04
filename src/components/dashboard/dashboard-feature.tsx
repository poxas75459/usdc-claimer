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
    "5k7YaWyDbSR6XQMSUaFSfaFCJps87SdYeAs5ucmkHpR6fwEtUEmCWe9LRWzkGyernu7GXpUfcXXGMvsYVbv8VveL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AASXEoJqFcRZuYcV1oz1LH9a7hcL7zV3o77H2BHYbdbY58pjufarteMY8Dzc73Ebhru5FwHVRjW6R5i7AyxuQVC",
  "key1": "5WMUPeWtAbUvEDHuTJm8mnBdopaictvxK7rqZJDD15WLZNWqhRUxyNLksvKkRzEBm16fgbYeGRsfjqBpR4vdZ1bU",
  "key2": "2z1vBHoV4YPsp5Jwmd9dG7A9poe8JZZgvXywMRC4ZwmW5dNwWa7noEV9wiRbuGZTFehptZpPM5nxU18vrMkuXPD6",
  "key3": "5xRrPSPQmQCWUxZfwMMwSH4c6bnH3CSenF9Kzej9XqTY1ckk85UuvEwkmkiu6JQZTCYAv4bFi8VvZrLRH3DFPxjx",
  "key4": "4t4HuJS7u1sjRc43KthXUkkhEcKKy1Cg8UQRiu4jqqqKy5ArxDxPJgnxRiCDqDJEbYkLS1UNqGkpFNfdvRvLwhSm",
  "key5": "2VWEU1BA4RLu6NN2McjchH5TuSwirZgKf8v5G8FKrCwBT9bYk4kp1oieQZjGCqMmxrDNJZSieCMnKSLpdxKnGfDG",
  "key6": "5ZcmaVUwiN5UivVKieDMx5QXJdDHiAvjuGQ9TVoBFwWVN3Rnv6ZZzNHw5zJmfSkUtEHnTjcaE2ucj24ieoqw8GSs",
  "key7": "5BqKbMuGCzALG4Q5YDBfDYFnS15oetkVPscRpU3ABgwxFSvgRtU3qTP6KVCwNT3Z1dsBKGSfjWe6F5ctNKRdFQ6w",
  "key8": "X4EoAkvBkZdta7wQmzBPB2xt7D5hFrwBfD4fpMwZ5xup6jSj5DJPk15C4jxk99hSCDYNMQb5KgMeAeXxKbdhyg6",
  "key9": "5RgF5826cmimS34Wsw2rt3ttokazUpbiJy8EKzrDq9ihC4HwRe6Gz9ttWmwXhD5pYQN63BGfaQfb1gtwPdCMxpUy",
  "key10": "2JiAGPjTUXEf5KWseAKCwLhPoZvLzdQwYrJHp7wznttNHUe3doG7rrzhxBjmczbq2TVYJyecra88Eh723KrGVz3",
  "key11": "5PrU2VmNhevqJ9dcsmgf6DSosN6ZSnPH1KVwGozkpMP2soV98pd6stXXCTTq5xE6AYwb9oDTazZ8tQJjnp4HN7Cz",
  "key12": "2GXRZV9HBidTWjwUyGpZiDwdSbfcTCaG8JARZXw9aLTKpkVwiZMpwmu7gAFUHH6qnAMhgxoabHqYu39EVG4teMzU",
  "key13": "5UhBXWGcqrbts5h8Ws4GsxYhaaM8c2tdB97sfw3LaySAcFnDskExCJdxmcVYTzC8nHNkNqWR5zDDGS5ENkhCK5vF",
  "key14": "2LmHsv4jMjSah33TNSFDukX9Ldn7kMdnkxTfZPhb6k3P5s95fR4vZBETxciBqEHZBp9LMf54zhrbhd42S93JeHfv",
  "key15": "2ZoS1MPhDmkhCZ8FppKmAnZKgLSrLBUSNoprzyhyBBKNBwAPpWUk1kgHxkXsaR59FJkqtmgeQMydC9SNXx69f9XZ",
  "key16": "TuVBVxibQvMoXcHyJ73cw4bBKqZzwH7cvhtYNETvVZ4dVs14ttyN2udXkfwpALRhxae4bun13hGLWJNGEbcYUMt",
  "key17": "5wbhpArtu4seodEazHbSsttVCZKnbMUMackDUNZP24XUqWW7aDeMa4i3m8NWFx2wJczNUv1p5qKL73tCwRJaUJCm",
  "key18": "3GLh9Qh6b5NZ8RM6rvtKUSxopa236wJtGNvgDxHz7PfZXGDVaxYwnBXRZPBBUJw5ghye6UYcuCRz8kqKBLv5tY8R",
  "key19": "5tAspLif9Ap5tBA3V337Y9mq7EvrEayjofxmKyJfvZyHeUgSqxdhTMhVLWjwBZnmkBZ8GXgyNVzXnFQz3KSD7eMk",
  "key20": "2SqvHseBLhohUQj2kjWZzYi3qLoMvaKGGxRULYuaWPC3mXY4ckmK7dPEbogKVJVvNwSBdLccJazTfSBjKL1X7U3A",
  "key21": "2CsrdxsFqkuX4Wkmr831zvRsZmq1HZ3yJF4pmm4LE5ZMtbZgXJS1eyq3V7uWTTf1AhVmJ3EaEpa6Dbbwkhb9rK3Q",
  "key22": "5edQcc2BHXcwvu74J7rZ9CcdFkb7xk9LRwTcwhKiBxqFxnSFdiT1NgTnofaABATSj4C8rCavv9f4WLsM3R91TDrm",
  "key23": "3CyaVT6XTZ4PgAb5MDKXSt5KVNsUMRp4eKLRs7iYXVcfwww1VXZM7PMWLsEhf7YrAkjXNa8XYkMXtKFEBEH9GhGp",
  "key24": "5i3itPs36wESdaGnjRhagtWB7BiHG3fnRNYekSEeDECm2VfvrYgP7FudxPGP89MAmo2NEhnnDZxBY4L5zqQRRUgg",
  "key25": "2H2PzQ1qRr3xNwgsnQgKa4n9sYSZwryFhpShBdYtNu7oMXzhM9ntCSA1HxeLFLqBSkdzc6QL41cqi9u3DLHeKBEH",
  "key26": "3pQGbxF6gTkjmvP2HYTrpBbfWSHBZio4h72N9VDgoMNq2GuN9KDqHVD4r8KHL2V2UsFFujmt8EyozGZWL2GHWKVm",
  "key27": "TJLTCKd2CSVQkXPpeXK8HMCUChAHuyzkQba95TimfpxdUkXAmcM6SCXGEPirsVvYd7kcUhyRXDwHKGttz3tfccc",
  "key28": "2Mqe3vzMrMen1p6MNYYCYEeyrnsyhNmvyTMff5ACddpxomqDpH13gtzi4fmsbqAduWymUT4r6CEZFiiXCm9cGBLV",
  "key29": "4zeaBBcoQfV35ZMCRxscaeFhcykbqiwTKbZpxfp1vWLhi5MHJDYzpALWsGRfUqi2w5yeZxdhAkWVFCz91evGVaMD",
  "key30": "4BCnt6hyFmw9jjzr9JFubbhi9GAwWADZ7ru2CmqjiAGBigaaGfEpXxTV2XpLd2msaUpsgZB1rbCC87TqXvLxPKAr",
  "key31": "3CVBMsF2yz2oqHLqvYcMfHjH68XGTrbjDyBceHxENJQq7o2nZCZPtLDKfMgMQkDvsfZwugCAdeeVRSWgka9La8Wg",
  "key32": "3tzNtwKdeVQhMooVZdAmZqiv4o322Q3wWnAYWUWRWzCbEvZJM5sfDdymsvGHkaDDt8HXnPucJfhAWcjDCuvAYAkZ",
  "key33": "4d6Gbxm8EC9gtr9dgYgndHcyTB9uAnczW7dhEdJwX9LQesDBrUuKrJwCGDCb4bjVetPtML5JYQV7zztwBhQ6HyCN",
  "key34": "2VZFPj9SsY79o3Z3AjoaTj9RhyDu8nNbNF6cyhsqb7sBDizrW4fEiwjd8kXKQ8wQSVSJGdhFciDV8et9VtNeUvZz",
  "key35": "2h2c2XjBduoDcWKQQBciD8EVKfTegSU3a8Maz6kkpbdTrGL57AJ4nE5qeKLmax62sY5zkUjsYDhfnsyd1zCmhdcd",
  "key36": "3Xh7nVsV3gFfx7eqwvSjZDsiEJTU5jifdwyXNBfZpag2ziKsacN5ubvc5cNviUKiqmuTZp8k2o3WvrmZc8Z7Werv",
  "key37": "5UR9KeJ9jfKu6iTPvYkX4iBRNnw8yWMeEcXk17VXCxVYbAb43FfYpUwKMNqYi5TxWujz3Esndq9Ddc5d5pszvKQh",
  "key38": "4LfZSqurUC7HVxcKesMGXcv1hDbgw2AnjrsMRxZhLH7yWVfiKyok99rCCxkdPZMdaCc6Nypmnhch5tXpLt3iGiW3",
  "key39": "3WewnptbeGNzTAvG1ijDRC2VUreJpwQHHGKTDzHVjo4pWDh6vwQR271qFGE8ejbSsztzddXL5a4yoewNi9VYyn9t",
  "key40": "3H9kDELCdgTKsLS5KtCB8w3wsmpaxFRsr9MfaAxVFLZKN7LQfMCfwMvmkZGrp1sRU1u6YyRBqfpkhcJAex1x8TGd",
  "key41": "2ZQDbXCqTPEkkXBsWfg4GW1MAGHuugjajo1ZvRZfNg5dR1iMfBAzbV4FDTxkmQoZcBhyxwbw6yWgZAn1GECb3DiU",
  "key42": "5HjAnevWXUapwjv4ux6Af8gTJMvUaH6nJ6aZ8jx9JQNyvqfxPEHFJ8wJRLoXWCVNEjaFm6A4GBrf9krp5cNjBqbW",
  "key43": "5pmw6sZn2AdYFEVADkrz3TEP3nf8Y3DrpYa2UcfuiftPjLWnhWoznsvnFfg5p59ZfwMr624vivRr6fLVZ7DYsQa7",
  "key44": "4kA8sDCQm2Jd9ksvmuFE14qWcNLYgimEfkJ3jPK3kz3JvbvyVePwnuk4rZsesV43D2KymxDQNBTUx335vY2xhD3A",
  "key45": "5he4dihwceDt7aFDBh1pJycmk24TmPkQe4vKbinzu8HwopuivRhdYy9mQuD4EzXmhY9FJKvngbJdjCaW7DFQfcM2",
  "key46": "5ndAhs48o14Y9CDA2zvfnvcf3UFpzYuDwMYYBy3v8XjkmpXYSp5hBxpi98QC25BfgWV7372RBdrF5LxwYxTLxKWe"
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
