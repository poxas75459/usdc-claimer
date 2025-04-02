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
    "2ir6fUnPwZqNXRadvRTpLcQGaRnqC7ZSdJmtaE61zkhuaEYgnkbornym9PascqVhwbFnaqWPocEPSk5XieNzQNJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qh7x6tSujpMX4vKoZVZv1PqS6UpZ6Z1ZrZwfYLDHMW2ytCjBNdnfxi2z88mLPbNU2cUyqBXhegKPHpVLTkXFic1",
  "key1": "hiiBRRsRgD2r96LNr5mEFq57iF8csbRB2t8SxKv2E3DzAU8dZztBYC89fdZfLh35Hfq4nAFwtTd9wrcUUarYMwP",
  "key2": "2euKvL1yYs3oEtF8ZPUCyAohUAvun88tG1Mv4P7FnEZXrWuacBm7rmqWWwhUCaLRLWvUmwTz4gYAqYUR4BRM5tzy",
  "key3": "5HYwfPD16ZbHNzcWmiz5ecwftBrqj48gv6ZQFkUFmFjFn2CvKar7uZJLFMSuF5K8wyYgYkNQJAzb7nRsT3fDUGaM",
  "key4": "5pq3iR5eF1wLTHXtpJorvoTQfwQfSN1VuEw5SJfGhnbtrRWm9tKUT6iXpDNm3rFydSWHpTsPLFQFzzqMAdi1Pqog",
  "key5": "39CvtN9MMBmZDaF4V4fzZXjYhnZNoMDrDKiBH9kbbNZirBBoVkTCop8ocsDMYMVaDWWWJzz7SWrKMTwHrJZb631x",
  "key6": "3wNCdyeeaMyonzGG1QAFfJ4ooByxmYMJj5HfFFr16WMnuhfLPTE6e3mEw8Gmbe31tLhdqzph1QwvCBaW2BBwLuTf",
  "key7": "21zkLd93LRXzsEW2skJyvdRx4vUC22jLSJoRWXifQB8qBF9m8bKkLLRmcrMS3mkau9GZks98DC7aNAEihoUMjASL",
  "key8": "5M6Z3QMGsmucy1kYEPpcfLS976t9FKPsR1vYUWowriWH3fobUFTqA8vjJB5jeSJmpnvRXnUwYAzYbDwUTFc2Mf7Z",
  "key9": "23GvTyoDQ9grfRiCJvhkR6sHkquVMGU4wJpiWz7RPn9cjqGMdj2ftggBoJ7Vdx58NMu94QSD6pm5zqyCzLK1u7bb",
  "key10": "KivsNiXqjSTXRzoGPdsaJ74LKPvyGnBMRYj3GjWvjXJUAa4gMoWbSUBd7UyFNAx4Tx3grnQp7CoRfi3FPfRJgqs",
  "key11": "5JHvhWPGX6Pvj6fij3c4Do338nXA8BudNbbHFv6VS1NhemNKf7Zv1RJQ7shtac7UohG1d9QA8zLbCU4FPUEqTTdi",
  "key12": "fric9TsoeuY4hNgiy2hAFnfkz8jy3XhujFdQJTF8tMrKvr5fPfsHN8JcdUw4WFdngo8s69GJzteYrVi4ZcAEsz8",
  "key13": "5sPtERauAYMR7Lct6arng6Xn1ABiBSwSo5idqBd9Ey2wRMXSqb4PxMPhPGyXArAwKPn5m7F3baZVhknarwyLeY4U",
  "key14": "2XVAGputwPzfWsGJhDMyXyR3BsPYGA8rmVy84MXduDZviFB6qbXjnDy5RL23EcY5zaqXzpmb7wN7R8fyTFYUZXRr",
  "key15": "641ocakdFEwgGjPx8SJ1qfdENzMDRxaocXV9rQ1KsuQGZ5eCe8Xt4Dd5Q48fGx8orZrSfSifoPr3mAxBC6wnk8mC",
  "key16": "3igAaBqXzrTTsVEjD9CgiWjxZyGVDaA6G37NVzJ4SydvGVuhHABtCHGiyrrLFDUrmFkCxWfBy46GdJnpogBiRKvw",
  "key17": "442GfaYT5yQUzpFPeVHyZSYrAbNvUC81yTtGPeg1NLDoqgbqtzA8Diw3c6GnRL6JZFfnncmH3opDRFV1fn3Jn2QP",
  "key18": "3x8ciM5cYMoPR2WGGmZ6BzdQ5TVhi6jr3HMFYwYepmXbQapz6T1chmZD3k9xLunzYcknXWSGY3pj2vYjLf3V3dvM",
  "key19": "2ZUv2r1mHnyupsCQ5oRgGWjwtfWrA2SWo72gjiRatTACMmvYMB2WSeyc3PmAufauZKmCjys2ETNLKUsJfLijJhqp",
  "key20": "332ZbNsQBgL3WJzhADcrhmjFMrxkwV19aQcPhHvw1FoGw6gXMQ9Hjy4EsDeNLpbex2PFsk1Xdxg22Qde5aTWXxFn",
  "key21": "2FBF6jhVRgusitTJn48ri62FWwyscpQeHT1BMHeTPJ5LDpesPCsUbJEtFsLFpH9UCTyAEZy7Y1fv7GVuyda19Axm",
  "key22": "3uQEj4MjkMjjWG24B1mA7wfAE5YpYzqKVQidpsfmfaWsVfyw5qpeQRrsy1Y7mWQoK1fZkPdrWAU6da9ybbJeHymd",
  "key23": "2V91X1tr52Be8q97KPpnxThM6oASzaejJTCGKVkEEoxup9Q6Ce7rKBuXLbhBrQiXzuB7WYqSEdmAmP4ooi9f1D9j",
  "key24": "2dF9VxAVxuvzZf2TdRWmBXYCuih7bntEt9UU6uVGvTjco9soxf8iVbJ469XoLx7v9Zp8oyUpQqEXMAv72428YocE",
  "key25": "4Tcy31NKZSYUwu4B9fhXzFY6wKryEvf7DUobnyxXnEBJQRHHWc3pC9vC6RH6QVUyYgBdYadv883v6Sh5FUka77qY",
  "key26": "UTUXuy4n19UBQWGLb9EzhB1SQdAMqFavJFXwcoyXefjT43iGK4fjifv7yVedwuxAugFqxqgpewahQmrXUQgvuew",
  "key27": "2A1tLKcNjrFKYGnq6hFhbzPZUHwSrNu8TDRz8ZjgxVTiyj3UARz1cDvSkqsz4v8iY9our9XUe2xopykpy6TganRR",
  "key28": "3BWmQzkrxvCWPuzkxB7E4cwV7iuuCB5SuvDL2qR4AqvZ9XsZaa2xC3DJPXi9DnJi2krjii3cPz6fFM8WLAeSDJ8H",
  "key29": "24p6mAvn97ZV9CcJ9LdiDfj5B4AW87v1NELioaRh4pfYZHbrHpcoqNBzait6AAZRmrdbeSVkYNXmirhyAx98hASi",
  "key30": "34pxboJFqKMipYf5iBm5iJnMUY9B915SJnx9CDWVzft6xZ9zcsYVzBxkayopDhe2RMJCw7imEwUS77CbYAwkRFuf",
  "key31": "55buweKP74c8CVnXRau1KeoF8Mnd7kyYvsw7rsgGh9u8dLTQ7oRENpe3qjq4wVjkMrAjJAYvJwSGPWryxc4PbiNN",
  "key32": "3zXoE2cW8akCzvjQY2qBh883DC1EHbjVQUPjM1fXGwwKf8J4bwnn7NUygQGHtRy9oGneUp8TnjveemtYsn6Wy9rF",
  "key33": "4EmWvyJxQHrk2V1pFZFuWvMoLfHw2AMBxfLiAKXgBHynpGqY5NTFhWtgptpeNeq1gtV1wFquK69gVSK7PEDMDWGJ",
  "key34": "HAVdWUgQzx169F5pM7fJUSXwinh1E8MA3ySdWMccaLidNtDzDSFQL4uuAXpWsvG7MUV7HGhg8BK9k691oZq4U5j",
  "key35": "5PgmvEfxefr58GYg53QrQaRPJv6sBPbUZekjfVDcTNtWq93fZJWyAjsjtB248oLPHmS6uEghmypYXfzdiHkzPbYn",
  "key36": "5wZ1rXJDV1CJwCPCwhmANNrFvQgtVdu6n3mEuxbBqDydTKcx9G35cqxs3uoXZwBaJG8mjiXiKPU83tzsmrD8aou6",
  "key37": "4bJqxF1EBFN73SpLtayQUoL8eNCaHafcMrGd6R5nMLTPGxvMM9FvjaysZJySwCvmSCk85RMyinMPCcaDNboFWgEY",
  "key38": "3tS7wkLzxQQnVaMHq5aMWzpTensMR7NKWsQ9pnqhrNRAxvoh49Kne3zUpYbo6ZGBGnJT7DniBMWGcdYLUjykpz2o"
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
