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
    "2XrxFftF7gUBNHTxefJYpAySFb2KbKHjZ5qNkzSZLUeSiG6Mjw2oWu5K5yScTArhqwGGySLag2wnSzbBMgbHzL9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rjiFHWBdycrXfk4tejvYzYXGUbw4icyiCEAisdVc85cH1y2wmeNoMTciSJKz3BbCqUsKk7W1GQ5txagchF3F7Zz",
  "key1": "5W1tnYJmVUtaaBtAFVTTbtdnLLjjbSd8wn3Zwyb6Ru9JukiYCEA4e4JMXSuT5oUCZMJCq8S6Xaw4MpaiNKkr5KMJ",
  "key2": "KPfdf8q9mULe3DXBuhexUx8Q4CstpYHzAYakSsB57KvPFqpj4RapdJ3dvTJqYha3dHbaBnxU6wQdKiRghLnfGVz",
  "key3": "45XCTnKUnNuvjHcVTT8yDBs2dL6H8wx4DaeWrPAL97GGisdkz82FBMSCTXKtctvJSpnMwt4TUx8T1aq5pjj9NjoC",
  "key4": "5TrM7Wm8tUYXcNpTVzZV2YvaTt76UWtVptaETrjyFKM5xww4ub5kkw5CAwRKo2Ucswxeb9ZvHYEbVVx8TMiM9mjd",
  "key5": "5vnviPSLq3khgANjx7gamMzWHeyabJoq1PewP3DFFFdJiNkNsZBoPciMGPxxhyHVkwAF219dqjAjg4R6vuN9Urau",
  "key6": "46zGMMRCSoGoJyBNcjx52cEntk6qt4ZcHMzjQXN6tyn2W3Zsr1h7xVJ5x2QKM2LRQ56RioGpRKGYK1EAWDAHX3N4",
  "key7": "2HM7daGS7Vw1T9zBssGVWB8kjmmBtWnthTtFKkk6HaxMrkd24qxVoNNpFqSfX8JrG541x5NLYniqyYXhw6v5Tgxr",
  "key8": "4NH4ZCkyxP47LgEPeN8uyS7WroSg1ErxfciLRLKXmcUr31FNafe5z3NsAorhfwrt37uQdJSxJEnLWBR57T959H6n",
  "key9": "44WyNjVUC1pVGsfBj6KRPR1izjepq9hjW15g1BQLgHSDYPXUane4y3BrYnRHyGfVedLJ8gUxfyr8MhBu8UK7omdX",
  "key10": "5aqdpwpTY1ivn7xNmCnPUjZDuL3dTx9H2LEuucGFa1fKGaty7rZhytGCUekw4mbKdyYbqBtioo4uM29qohz3zTRx",
  "key11": "486hDwWUEXxujVeo9VdLBKVfnjjZQXpszQH2h49ngmuQeBqjy3LAKZm6PeqLptMU8yN6V91M6VCDmAhjAUcQ21pH",
  "key12": "jnBztFmcgQBXSURwBfvu9PjkG2UjaMn3XpZutH3eZuoMM14JanoZj75ZzWmZLUihc484oFsTZrRqut6farxNdMb",
  "key13": "3k4TKsmRrnpEs2wi41C8cUDwz6cCuYPN5SBcir5iLKEyacf4VfpHX6ThsAVhvZFffT4TWFJ1VExGLCSwJKtgGaaH",
  "key14": "5XdncTr1jReKgeUTK8jo7yqXpcD3sQVHwR2BBDFwrKTcbDaNNvWeg1nDyhWsza7bgmvqh88TNZfJNopGRqeddZiP",
  "key15": "Zm7US9cYufNmj8yRLrgkGTUhrWAkSnoXfDcfEmZeM8xWQpALaVCFzUckJXtBZ8iyLxAYN2wuCaxcaj5prdhspzq",
  "key16": "4vaHUbCcyLDFFjPJ52PN4rmBhgFwPkjUPb6pJc7j65WUjfHrZKRzPwZ6wetN4zEktArj23jpyVWAMt3hZMYz71dw",
  "key17": "3Zi5ehjZw65rqabeecgJ8GkEqCBgPuqdh9o4xTKiAPr4NXnywsipZPBBNMFHN54yLd9Vv7UBVDxA8Cyf5PNzogq5",
  "key18": "SsJcDjq7SxM7eRNs288MrpqQdFZCCU2ULUNcsqaN5QW2oXk59FudVZTk7ijwV1W7GRjhJAHGWFebdQRE8wTbcgS",
  "key19": "4UXFmyX4GvVf9D5rcr3f8Uogn7gVXMNGjUsLqdynpsMZUyCbULDxcmfhJk2RkiacwHpPjsWU5udeS11rH8DTZrCX",
  "key20": "5J54srxygH1bA3XSgMmvd9WYdEZNGH8LPyL38o9rWjTXT7GiNsyCMpKrXSk1eWQAszD3uWudB73PdJLV42SzRYCd",
  "key21": "2ajfpoCeW6UyxFz39E5rEx21aUhiVztrbsTQiXjQE6QagGahjgxGHLvSjkhDRo6gtbaDFUCBMJ6KgYDUS1oHJYyJ",
  "key22": "2TMLptoH7AFJzCDsqEpNvVaE7VS7aEmkDU5ELpnugsgLpau9LR1vzHGhBf4tkj8Y4QtKxa8ePuES8r1BwSovVuUm",
  "key23": "3uxfzvx8oUJ9KxNseFR2okztotBa8Bm2EgKG6zqs1uHqFBrBkjKJwGBCp8aVdF6cr41Y9reYY6iEvGieZSU69FXk",
  "key24": "5dUzFNzjcmgufr9StK8fGLABFkpeuVV8Dp5g4xMpXX7T6WhLaUSWwEbSFExdXxNchPdJXRYR1PFhnDZzmJZyfFX2",
  "key25": "3QFqQVwvG2SqiV4mwBYGePLgZGYxRG7DhfMeyjTLDHaFFu8wrpZ41aZEYuSjfSBhCvomjwSEHxzFKAekQae5YVyX",
  "key26": "5SqHScNFg4CR88jixzxodqmoyxvhWt2fS11DPbN7NAp4X4YUP5ZYRG1quLG3xDzZteCEecuSAtQUycE4YkgUraNu",
  "key27": "4ypspbKSAnSLXzczGJNptNKsQra8wgphC32cxcRySiqqcbMzxVLYCbtBYjnqVKrvvWtZNxouks7YrVwxAK7XsCkc",
  "key28": "2r9aTAdxFSNzHBbVrXtnWjKHAzfrx2Wk9kGW5UPYDJGtEwNWvPHAqd7MXETckyeesABokhGb6o7pvCgt8iqFinuv",
  "key29": "44BibYcPVqsep1U5mtb8AcHohePeYfPaze1A4vQ3qr49TdGqWBZHCdo4cQU4ALiKnZZ2tFs5msFMWV5ydoXnyYLv",
  "key30": "2b8DAEPJSMyKvxt75tg8M2Vj1BFsU9GYpqbwHuAVkXtgxqkQn5LMsM6PKmnL25sJvXpSo5VbTo6iprHb1QnpX3sd",
  "key31": "4aPW5SLJbyKnAk1iucSceNn2y2WezNBasbR4rPnefmz5VtWYm8etvqfTWY1RqFxbWtoDEdyw3XhZ319ugUEpmFou",
  "key32": "4xTikvC9J6XmjY4sb8ReZsXUq6s2FZsNGuk1b66MQRmJ9JQsoVBec356Y6S7Fh3eYnbZhZmewR2MMscg5H4Qe3s7"
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
