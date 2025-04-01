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
    "64NWqg36Jm6CmpBnySEvqPbsSUamaonXmtAhm1AKmQAKz3zAPwr5JneVckJeMwyqykihWVk9by1Ai54MXxigjXjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fiUiLmBteEs8Mx81CfYvqpY3aC7HRTgt9vPg6LtLb9oXGJuWVMCCvLMThmYZTpzpS16YH3344me4fNnGECsmboi",
  "key1": "4ZmXrERXrFMqHutCkjCh13BB5pY1knWWfwKDKmV9EJTdDuLEwZG8Q1447BfBPZtxheDyuCpYzerG8eUZ8ErJ9sNr",
  "key2": "44ktftmcQceXbhFUPDqXzUXXx9Kmo7wtnEwdJHN3u3QQJBQW9gR7JmmK65nQHsi1E85PTxtLb9x47jBWvTXK6bLc",
  "key3": "3ZDGhCLzBePqPVgHSSzuVwMC1NU293RR4Fp1SAwEFy2wutqpnh3SczerJYL5gkSU3y2k7V5eANqDWEBFqGiVaNZE",
  "key4": "2sgoqmSxypJmw7Kf7YoA89zwx3c4LDtC7FwCYGXJkcTsPvPkKozpSRDq6BGEmXEpsZgwLBDM4NqbG9bFCd7KCZ7K",
  "key5": "2yNVwRHiN7hB8mkZbdsMtm7DzjPzKNzmb5tmPJc8gFqMJ4MoUd6UB6ks3MFJa21gAtjUbN75E2AahnpJVvssZbEw",
  "key6": "3PpaUB9dMWYvHy8abMuKqZRBFkivx8MZW98G4oXWUVG4cZHZ2Q3UMyYFBUz4K7NSDyUrNRpUh9fp1RPU3MkLwiGJ",
  "key7": "31bQkU7mm2nTVZn6kCgpLB27evVdrU4LeGiwMTdkXrmcLjPy5w8Qzc4hVKrYzvViCms34nEtbKRtYKtgtQu1EnNH",
  "key8": "4hbL1wrkNuKCdNN8GfcUw7N7nDDCJbFZYLC9GedbLZx6Ey3HWqpFgbQqkcK9B3y8na3YaiLyvNyRWT9CoKuefmNC",
  "key9": "KgdBQ5reiWi5VLULMYK7vi9b5hSQajePAjC4bLzYh6JUYQrvVu5mLo8BUU74fBXzncg23auaStExySQ2aUNxSLU",
  "key10": "3aGmi9u7JjSfvrHfwwazpGqGNhtKBfE368A8PxLK1uSYA41QzUu9pAsvxU8nmyRxvPwAcVeWsEdrZKkQnVbbEaYf",
  "key11": "2EFFYg37Jqbw2Uha6fUorgnkCxb5LgXt9amc1Rk4xA6KSdSHvHfJ4zBjJA5t1PxKGqLLrvF8EVk6DCHnVQWw5TK3",
  "key12": "3dV2nAPk15mDDNTnaPeGHBAbqncmiLM3LbQvBRaMuB7PLLJ4HYK7Q5ucKkC1XPB3pBAFUTvos4A5jkxvrT4aRRZn",
  "key13": "3DwY97zv7g4RfrM83phA6G16VwYrK8Q3AaGDQw8Ue7JAdzpwhgtttseBwix1PfjhGmmSviq2bSgASmA1YQ7kpJ1o",
  "key14": "2wrXbwQPpRwcKNSQudxWpkJmTtBAvRW7LRbSMcA6v7DhftcUc7yJpZgvPJSfq8jo8nayv8C5922zNxM6CcNZjf3B",
  "key15": "4TV5KStraQmD4oFAL8Zjp28QLHrwRk4eUL9Kd4LgrnnfN7FGKfMaMMG8CkhgZBe45kDMbKj4ASQzBDacESTTw6W7",
  "key16": "4n4TjZ2YxSPbgaaFqXrRdDEm9ynpuEqmvJ1nRGN8CTZJHUBVSCgPiadm6rnWqea6fkVLUxfJE8pnRT9S8AP3AffF",
  "key17": "64DxNF6eADwir5ftTf9prfRqM18wE9vniWjfMSGb4xk2qhwHX27E249AtS6zg8EhPjiGVA8dBK2WXEZjP8gFZy7s",
  "key18": "3RSb7RwnRLivtkMgUWc96VvfNvs7ffcJ6LcnDgH9hJNH5iA338C4QATyqqWGcJqXcuiJxyhc7GXRbUmCf42hRRJS",
  "key19": "4mf9ffJEz6T4dfksHvK535Wq868DSRVbzgEiXJQdCJdjnnb65iHCPqm4VwUS1fThpG4QeLaLYGNaGXy8c42bTqiH",
  "key20": "4dn1NTv8rQDSxG99RgpjoD88LFJfQ9FgCbBDeuiJZpm1SpCVE4eyCGCim3pNWhXV37cFkHr6V9jWJ9HRxN6TQZXg",
  "key21": "2Gp5RL8udTnvhVD4wQvEL9GzT2jxnngb4Z4sfZdFcoyCK7mfk5cR5BDWpfXMi8kMxDJvFQDse54sz4fdh2Y5bfqW",
  "key22": "3aAA391EUdh3LFcT5BTLQnodUkdPvKLpKbN4WpDDTSXwrv1mAm6JMKwDbD4rr9apD4JZmYSW2j6AHqCnH9kNAKW5",
  "key23": "59Uu71Gt2oWNE8CTxNkupg6xSPf8yau8zNSaByxneqcHbyciShP6d6JTE7GBxf7dFFmzgtxqVtKmPhx59ZSrNwiz",
  "key24": "2qviPky6pc6poo6tW748ZVQBQKooWA4tv18eazD9MzPxwyzaEQXJJLaSbkhFz2gneco1kAi9C7UoaxZhpMsU7U75",
  "key25": "4N4A6zVGEUk5YgDsfr7qHyYD36bSBNLt3smRPDver7GrpgMKAvyZn7E1iVoaSAXkvz5PgUwEN9cHfw74fcB8Z8UC",
  "key26": "4JSCdzJVFp1v3pgWFTVAUUnYaswWomNg5L21ytW8QoCTvRN5H7HAUoeMGixGRVp7Bb5xBNEJGNCuFQdxBnExF395",
  "key27": "3AYBjZRjFtphaXo3CWWyuewBCn9y7u138rEmuN5kNrjspYApbi4w6mn3DmArrhFuX41bTC29t7JDZVQKCU3kT8vz",
  "key28": "477JxjkTXa3xGtPLiR4ctiEif8nA9KbrTpFWaMAjZsM8s5Aim6PQwj6i32Sf7hdE4zhPYvVNLNEpLe53Tym3Fo4K",
  "key29": "5W9bBtyfGDTTbwVMoSzvx1PTTJhz9CW19ML9gP1UmW4vbCwfmAXDw1uiUWecTu7E224ynA4uxmooBj3fVZ5ZTBwU",
  "key30": "47gcUd6HR2CJxNL1rUAJFhaDTcbQvS6wqdwojYDpYoeE55gVa9P136mGs8vvioLyJXSWCVqDHNgZ2dDmsPieCix2",
  "key31": "2oRvKHs8wp5aXTveQYmhuyvT6nuSwGtWH45y3RWHxriRUCJK6yJcPLgseQvh4EJPgp4P4qCSqj4VtmTqBZtumpY7",
  "key32": "2t7GNzbHgCnupcwxXdZSobAMAtpEMXHrivETfrgSKyjw8U7Jf7UtJDs1hBKv5xAbjARUB41NxAAGAEBjcBLbJRRQ",
  "key33": "2y7bzArvGgxtGhXM38H1sVH95MFwEzrJRgWpe38m8SLfdHMW24r8nwikNSxaAxrtT414wgsFZiQ8Gqr3JG7A4jfh",
  "key34": "45VjEHf7fZCBav3BGBSgXmV13k4Jcmvkp55MpTQsMvx7YC4prczGxhXn8PMsEHHbQkm4ER8wnGfctKoLa7qhkVQf",
  "key35": "55zyFB562QJFmRvbRG9fL12ubbFWDsG8y7zeuBdBjer3AbQLhPjDJ4zwPfGLS68eu8j7QeXSo1zsyz3r7FFco5pt",
  "key36": "4YhYFf8aqBH2mw33qVZg1oBY2ym4UMDg52Ztg2BZddDXiFYvx3bjK13RhWWGTT5yvQAXjnxJDnKRUm1R6b9f7ZQk",
  "key37": "4GLdVnQVuk7mCWazr2DTUTvdpVqWnneGKmFg8ixnhHJhAbu1239KwiSTzHSKycMB8ZvtnQ3Hv6KSqsZZgzUVgoCY",
  "key38": "2ZoGreTBw1pgqRdudJBbTNAzJyZ7o8zRMAhfR6rYipXXr7KYNZdK6haasD7nJThwr3YjxAc1Y7GYs76kJc1kLdAF",
  "key39": "3YqUKRgM7VBuWNEr8hFsjPfyacGYkgQuKc6Vc2o7FsuQfpQo25vF4RueESPE7csuHANHjiiFS24MNbS48RWXVACs",
  "key40": "64Lp8rh2Pi7sTR4g7BRtGVk6RUzUE3jLmyTkMJFNooRY7dPz7iXxx58VS46XEyk9r4P41deu9SZjNin8NMgsdsRX",
  "key41": "4qixqm6j8kpGA5L2XrCRt3GnXtyVu2YP3zbnkRxzeXkY9TU4ysFj9KtDtj9GPrNKbpq5KYBt7rkZmHy47HwFxS4q",
  "key42": "7JBQHAdUaiRDJai35PFntXdXB5bqyC1m3G41zgwdnzxwejL6FLEENt5fmxaWaZidwihJkLaZhsfgrCHfjXgqnCk",
  "key43": "3pon5abGKGor8QhWj2omDrzQx7qQcAZs582EBCDsBrhzka8FdN7PoYjpwXixGDHdZdKj4thmUc3d9rYyEQgtEdeL",
  "key44": "2VWqfD97MCuVZYadgG7adYbzgz75zGb24wUmCMyoiSmHuErra4Pt6payxucstcpKkKZCTrnjYrJkXWZ8k1m9pBN6",
  "key45": "5fkQeLPMrHQLfzAPzo9dtjYs45Zu8xLi5yC1xfPVGAbJhBJR4zF7Dc1Pb4Do8VUSLuTNWYrzXY2Lkexp5BdKT9ug",
  "key46": "3qLUFhSubdNVQ6N9r8acWhn4q7D7MP1oXcxwngSmoxGsiP9r1DTSyAviF6h9NZypgwWhuENrJAW7o6eJ8jsDu3V3",
  "key47": "2eUtoGMgtLDga82euLX5iQ8qmupMyNJjLj7KGXoJNCEdHyXzyBzr4vp4fFsHJxttiRYFYKZHpsv3wNRfnQP5U2gD",
  "key48": "3udPUThq4bYzYp3AAk2J6htdkeDCofD7eawXhMJvX1MrXJEbi7H8kwx939eKyZzB7tTtnQ78ufK4H2G67yMWUQJ"
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
