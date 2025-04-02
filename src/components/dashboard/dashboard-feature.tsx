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
    "2smRLSTmLVJZf87pAQzruJf5EiANfJdCDcASYHsYFiGKhUhqwkESRdASiBCzycSv73XsyxHQB2wL1xgfZih5p6YS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BrBSH7sNKMD3fJfHBNCoc8DXFtmAMFWc6sEnJYUkRJoW462fEGAXfaEtA3BvHw1Z5nuybiwTKECtfoBEJkz7P5c",
  "key1": "2Gk2h2VKZdok81acdvJ7D13pcndJSRKWobBctNJ89cebPcxcNaErFFnJMEdM8ZRQYxRhctPfKfqTr5y5ZX771k94",
  "key2": "ZUJovxAZMSE9F9K9xhjQcx3Ybhxex2FvcdK6mvpRhHNQKYRGKKLcjrDZLV6DLreibpoDWtyg6G7KDjPT8AryhbB",
  "key3": "3AHKRGM23KVEtdpDfoyGKvar2G8dr9jZYQzXpQbnQ73SaYZhG46k4RTKawbg6FENK2Q8VcpHdD5m2G2SwZDW8QE9",
  "key4": "4Tppe3bjDBg2T43sYqJF47N5EzyLA6SPL8yQUWir7ZU9BiuNedTpdrCpSvW3tg4hHbpVReFqeJup24VekqPJKxcn",
  "key5": "2k7WoJ5ztTwyzUwMVpRDbXGz7xtac1MDYFwJJ1rUqJbKZ3oKfa3WprQpnHMxey7cZskaX6Bn6UTPrJtytS7N1GqT",
  "key6": "qv9GViA7AdpisEosfjvuwKEpFbKUqV2qAn2wi81bWzwvi8LbWpjbnwkXgbC59mnYJABAq4G1NdXSGSM2DbtK897",
  "key7": "2tPAzwEQvFgEbfPBguHWMvXNoC1hyVivGURUcLTRMMuGkE4bZQufwLDaZspXLvRgwsvZDQKPxRQhCHM1VwjTELS1",
  "key8": "2giCVKQVMahicMmzFtRYeuXjNzVmBKMBcY2s7gvxWeRm4fvAZuA8cVKTymfmnzL7xh42rD1M5mE6Z6wyNkx2gEcs",
  "key9": "KpTmGMzpwou4PQrznWNh2zXQubR6Mu2n54beQGXkmY9Mp59JsJqMUMyjeo85GJojF6yMCGSkWUePyNb5QoyUFdy",
  "key10": "2Gm6o7wQ7v3Kn1Y6YunNLxBCJRgoY2xhcghKnwDaYwrLL7gQnU7hfJVftE3qqxSbncBe1aiMFY6Q2jxN9U7pcRk",
  "key11": "23DP5p7U5idqxEvMQ3QocmanvMDrPdN5fQGUWdi7ecq22WSF5hu99WCm6qxTC4gLbkuuBL3bc2qhu1YCz2fR6yMY",
  "key12": "P1i9W7vbY9QjcYJczUHie1VQsF9kix3eB87U2ntBURAdhURJiRM6ebBD8ECD1m7jQSeFLymbEJU1DDpxsBTb9Cm",
  "key13": "4JzXTyq3ssZ18kCfWVQmJ2TLwmEBhLcCrpoarHCsA1gRDHDxwcm3wsMcFfTWm1MaGNQcSFWKsxqvVUaNuA96XzsU",
  "key14": "5Lmtf1dajcETww5wve55RnWT4RpYPsm7uEzegbvJ7pivS3nnYDkZ5YQ9LPBHPKHaXHiZJf3h3p9S1iAaHbjyTXJ9",
  "key15": "jzconCxzJgXNta4iRBfC3ScZXVN6rwHJJHJLfHFqzc4hQoWDGkhEmmvRyRi1sGCCv7FPFB6E47jY8g5uYcmBJaB",
  "key16": "5bjKNkf4e55bLvwuWgVmH7d5b7fhncK9noi4SuK4xu6mL7rmNsfhYjyEgdhEbuwatb1HsbEvAUVCE6YTZD9avMfM",
  "key17": "HeL4LT7BaHrMNB5dntHYAG6N6kuCFfjK8Jj38JLSD7BoCAEKsQHB8zWBxqbDWtVT9sNuGSXEayQfPq7sFMFNcD9",
  "key18": "5rhz1Wg3TXPkR4EWGyz11HWnnNuogq7hF7dNBTgrCKDtmYKhuZHF4ag6q7kGTtfJSVSV6435U2Eb8bZ7ftdKdYW6",
  "key19": "5vLKHWtWmCQcsCSZjagDVzg1pDVUvav4y5HgyMo9TStqJNDTXBtGKfdVTGMkk57Rdh8hFZP2zerzYXaYVfu6tp8N",
  "key20": "2zpp7S5jVoULKRhNPFv5Sk8beWMCcp9pmTQQL4Xur6vRV41VjBtn91ybPsGEF21MwSqXC9hEgxEi7DRXWGydMkVi",
  "key21": "3ejotHQFDfEdofdCrDrUMWM5hCvzw9PygRVm73Gx9S9pRmT8Ni2fZDAUaPR4cRyMxgrzqeknrGpcU2QxP45Gahqy",
  "key22": "5bqPcwPnwhv6if9RrCy3RMrht8DoBrPMTk4dyzSiHC7uK4mabKwditH3oJSkJnF3UGHek9u7fra4hWdDHjAqpJuH",
  "key23": "4Pnzf4VEa3qDxy7cJXD7XDQEscXM4sP4DVtVJSeNeyVpAgK9UbBMydr3uZauy4xLmEE1Q4ganmV1hhgT7DGCeHgW",
  "key24": "3vQKF1RZNgZEbt8HfsDquui6CU32bDPtTJGLYQCoBJbzweuRoZYmoVHmj3jjDWbc415Hyo2vJKW6X4H32t6oMjEh",
  "key25": "4jz9eCHoDNkWCTEgRLqjgcdddRFGzJzVrtP6X1eiEj3iDBfkgtkZ6UVcfaJJQiq532ThRTgc4ZDEt6vspt5fzDGR",
  "key26": "3NPy4MToBSZHqUsoLaEJ5cr4ifYY4KnBCBBcRAVYiXtpvCsVNDevUpq8xQgTbabcTDWPKJT3MVBrgMVc5mVkYC9F",
  "key27": "4hbFGrWV6cjB2mUW1qA2oB3qqem2C6o8MPPuniwfUqnwWrpYJEd1vhj6c57qtXvWWUYEPipUwirFVwWccSnSGbPX",
  "key28": "56zQJHn545v2mhwChpG2QjXtzUQnwHi2hHLoHvav6KFEqsen2F7tTbiF4PRnKvi8scDoy3c1hVU2i6bYBnBVKjc4",
  "key29": "5oydmrhzNor3z1ErCDm2t15Zg2PuCSBTaSW6sQdWPKzVHc9MnAUqX7boYa7MadHbBswgU17rZDZ41cReya3bnwt4",
  "key30": "pGpJGxWSgBvJKBsEKe4YiiYe7FU9UMAF8PKNaUB3fwxXQhXqNBtf7cdX8PqnYwz7pKNkg1UGMoUVtED3BFmFwdG",
  "key31": "23NTe7XoJUkF4WUYbP5ksEA8GRCD6Ea4QVMnFUsPchJaL6AaTxAHNMY88o31qF2ER8KDfHh3HegwZn5RFnRJrxN7",
  "key32": "487nyNYFVAYaZJYXM6ztfVkMFeUdfcMKb1mBSKmL2pQb4s8qMfErF8MY636NBwABDv6tdTUohhtjsWsF6s7jbihM",
  "key33": "4rcY2dx4BRSQiZru4jpR3Za9VPPGnwKqfZe3tqXU8cXbyrFyduaX65LPcGjstqERvubc1s2d9HK94Sf58RTtQvbo",
  "key34": "3nmYhgGWqFjMmNWuY3m2QhGFXadLYJJRfnsxdtJ4xv5fmx46L9be3bBGXjQFTAWeiBVF2UZk2JijeWPSMVn6ubnm",
  "key35": "2Q1U4yPk6BU5kL9GUvvMop63RNaxqyAKcGivLqrB5FY73tVCR7tS5GJcwnfTT6xKLKYUFL3aXmFnFYCsHFFswqSL",
  "key36": "121mwfju4JGVjBCsQQPW7PgJLAoTfc8SDWkAJ8x4adrwCegXbQGid4hKq6hBSFFHdCGzQSNFAnAksUm2KS6WRY6W"
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
