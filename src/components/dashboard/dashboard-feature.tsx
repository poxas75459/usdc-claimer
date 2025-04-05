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
    "dtowjvdBPp8J55r8UYmy2ZXjbcbtSWv4JRWmga2rP99ZStsVkH4N6Uabhwm2bkUWjHwZptUELpjs2snkJoF9Dqj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NY1mKVNXKtDf3XHoiSvNPK6YbuTo2xy5AfigGpQXquZcsCC5YqZp4JNKvZcLGSvtBktFYnUNYhw6XyUphDf3x6B",
  "key1": "2pwsYj1RsqXaWVqpy2faoNtEXipzhNXPn2kqnS6wNTx3smaJDzq2hEeaM2rHQSguRrESwEqdkDKzDb8WLJ5raiKZ",
  "key2": "24X8RvKBWMpeRCjZohdewgcocDhrZJ5rfhjfMXMCp5tiYTF6ofnEaccYKiV86bBBaACBwLF4mYwQpUGyMZaN15QQ",
  "key3": "4Ks9L4pjmTN1RHzLnL6qWu8R3ZdWeb3rYNScJr1ZB1hXKAVK2B43TQXBJX44hJ7YMi2xKkVczxwEA6KrwVjSrqXN",
  "key4": "22C71aoo3RduX4d8PfKHAjf7KySky7RYVGrGnBG39qeWYkoJKCN1gSJZeYT9Y2Yag5HpzcMCR2oNZ6mCDk3rWr9W",
  "key5": "5RPhoiWSFM1R1Sxvbw61EemFjiSoT79bGU7aPTEEg5ULVbqnijb8K7sSsDTYqU9mNViq8QAEtXnsu17QNZx2vqAr",
  "key6": "2dvM4QxXDnnqCVHMBnUJkHxScGrBavyUJsdcQNkFG566uqMCdu5NsyHE54BWXnzk6b52zvh4houstGuTbgijy4P8",
  "key7": "3AKFoUc8ykR6j2SbzAJVHA9rHxp8QZzodnQo4iLLJtURtZY8WuGeUArGwDKJNZFwDMhE5qb4jVPCom23drK1ibni",
  "key8": "5KwWg9P2XqThybbaUBW1MVAZxoWispFQfjiKfeBtVJJTZ9KTnGvq8eP4TRiXnd9wDTA4J9F4qj6y8nJ19KsjLwTD",
  "key9": "27bTg8bSUhVZTRRuX8Fc1EtczCK2HMfyVKouVeANCi2aEtxFZ9JZebNysRp3uoBy2Q7XXDubpv9De1uEG4p7qw5t",
  "key10": "4hm4Mv5bDkXWRQwqYbvfEi7Hy4TSY7MRCpjKtRJ5w2H5soHHG5yByo93ogGewrywCu5WWFiwasE3dfRT18EH3aGx",
  "key11": "2dohq1HW9gW5NEuQNKyYy2dBCd7WQevfzqLc8rdQm9PZ8mvXZcNMyUb6wc9yN54NsevCu6C7Kj11x3HFwhqYx3sN",
  "key12": "3QighF9V2XFeHa8JzNHpzTSNWE9WShNnNrA1e2EV5e5fedh9Sum7jvG2GKWp9SjPwjwos156WvcRNL5dmWQYAQzQ",
  "key13": "2sbh2qMBwvWiTRKU46tAYTVDMhqn2JJeJhSwofSkikMrcmwr5Zm4oedjctvr8vT3wRPjEo3gDSvySCNsQakRk3gE",
  "key14": "5DS3oDoNJtGegoWpUi92tFHwUMxaqU3KzuEiNp55GBW1P8Dm1mrFbyfebvo6T98WeTbzdjAhS4ynvJUQsgFLuMF1",
  "key15": "2MyJWf4SJQCxmd6z2cJmxs9crUWMvLjQZufHUMDhHTZS6it7HcF5AgbQZwWjxUiAbWHsuwHZDJs21fT5beUukorH",
  "key16": "3RXjZPHwBY9qTqy6sficEnDBo5c1sjYeZaeXWykTx1K6QdhEV9mTNUu92WVYs13dPKpWoRkVyhe5zNrr5LLsxGfi",
  "key17": "51Tu9i8zTHx8XVMV4Ty6gZzGbXiikzUtbtQKXNUrfp5VcztLkEB4JNKYNSzsGSmpPQb2ZhYESBBoDy8dJSooRUku",
  "key18": "973BnxS6ZRgbwvBY8UZ5kRomiN5hEpsHqzkkUsD1zbdjWp3ikTCv3bpJSQSanGaBHq8EYWK79UiSj8JZGikVNLx",
  "key19": "ybTVadKTK7Hqp2ErAjdrunyU6PFqa99i1mdPywDW8n3ufUfXeLABQvusz4pjkdM26Cd5AHyC9XfTRQNtBTiuwuL",
  "key20": "3D5nQz7dbABAZ8fypxrLsT6QEiivjBQA5CQGZkjArv9gQEDSExmGHyK1MXZg1yz2iMSbPPq77aKaenkZwLaTa7VG",
  "key21": "2oQ3zbT37MPt8AnTXJ9j4Ed9bkQ97QNeubCZuhUY8S4QacKaSyZcZM6X1qcXyeGqxFyZnAsY2twu6q4cF3Nuv1At",
  "key22": "Wz1cEznQYnwCjvu6noT6H969Kk5S1uSv2HFZGi6VnHuX1nZUT8rfHxrFEvQ2LhHNDm93Xvy2ZcFoATmrCGa7SGe",
  "key23": "MvfhixGByABCe1sYtC8hoco1UVKYsdYMQmB5uzXdYk8yZXBajNVWRT6DqnUCNPvFCosg7UNyusqDAApyTsKyg8w",
  "key24": "3fbVjEgjaE3sZfsR1Wym7mwe3b47egi5pSRHWT45XVQsBr3owb68i5V5rdLjpQFnVPxgwt7LfnneHDQw7mVe1VsZ",
  "key25": "2qmG5UevYykF55f4T73FXqJBbkaAV9udXgH2zChHhszd5ExdyERj4ESL9573J2YN8coZxt9o6vBjqiCMuhjw2m2J",
  "key26": "5CWbcofnTZSYn9AZXwamwRU451KZAns8m6reB6xzYso5G9Bqp97i9J4Y6UrETm4HcYHFuhHaQ6SWwAHQj5ZRuV9e",
  "key27": "Yi29EeseNhhhLWYQEBXeSALsGdj14d3rNK2AsxnWz2gWPFjDWBhrQgWsSBSvYRDN5fTkN3CsbFHr3VUn1Y6naUr",
  "key28": "CirBgcvupF8QdstL4wxLZYNzmpMR2mzLgDCdVNutduH44sCrptRSdTPAWQWLticQEbUcwtfe3zooPrPgUeZ7Suo",
  "key29": "5Y9MWExG7KLQjkezraDQbVvsVh5s3Rc5eCmULLfJxic3Y2ohWhz5nj4R3uZS2LhZzqcdV2VuxgLw9mY73ZVrbKLX",
  "key30": "2mXwYRmHqRLB7cC76Lk7r37XmJwDnkyeaNPcMQtS8qafAGtUQZhq2G7cmzFopkCQrTjXuxNuUNnanPHQu6jfxuLX",
  "key31": "5jRnVDpDZ7Fb54tk1Dj1WjS54HYPXadq3canb4iCK41qRiNa9dhAMyUG2QxJr8fTDDh5cBPKnkjZ6GgWpaphCnAG",
  "key32": "4ePoNwEuFmr75ZgWVByCBWyj8hMBdqpWdauuS2YTNhhcqN5fuvMYPVfuLxE1hiTKhuY2zZ1swg3cfip4Fmn5ZLAX",
  "key33": "3EdcQQpW2tCi8A5eiw6YgWXkq2GU9vESL8WWaysG4eFjpo9jXtqecf9dQJCk1e3W3jAq9BhtbsxP4Nfk99hzf6Mw",
  "key34": "2TyETyJzGcp82sKdGVynCLaQ74np27gAVaDNYpphccwbQ9cWQbaHXhaycd1got51bCZpobYRuFm1y2a6a698CgtT",
  "key35": "5iPKS5dmbe1KfvSXcK1XciWeaMTfkoaLBxGYHSpP5mbaWfZv4QUjvWmszLYUniWmveTmvvuCwB9aLUnVwVYfp8Fq",
  "key36": "35YTbAJcCFBR7xbriBq56a5bG1BfxwRtNMnWpDBHm62Sb1Dg4qBBpjZkw1eSqoZknuFrkWz4dud42wPMm8gkHfp4",
  "key37": "fxc1iq8AAHGFc78a4WLfXYLUC6iTr1Ps4ouodsbs5p99sX7pXz1V4HpLW4tB47pTXV87zPyJ7giEBaAkEcS8aJK",
  "key38": "24TKA8hPA26FbCsiUQRYNYc1Qi9gnBBu6WhS9Wwpcf14HmHL9Hvmh3f5vPGqE4evNGVwUdREDGaG3qqzF9MU5RTn",
  "key39": "4cAyYSc42Fo2mkVedYbsw2VQCnUZy5hGwGeXffemnkPddrNofw3oZmKB6Hu4sK912Lh16qwgZtxcMDdnPP6bLnbu",
  "key40": "2hMk24MQ5JwMdW3k8xcVAMEkHFZsx8grdBNpc7pAidCoMAKHnDgqBmAQseZp1KpV6kfF1sJdsvhdsfNCAHdKtHMR",
  "key41": "3wnoEd5FzicPVYuc7WnRMdgQou9M9oZuAXt3ZF7jZRGamVGeCXvV6YBd8k21Zz438hWWTqAZzhBzteEEJfg3nxvB",
  "key42": "2v8NKVNCphTs8STYh23aftG85jnmH56urMG147w4xTfbLCcCP781kz4BPTmhX4vcMXJHrVweS5WFqHWsd3UTmVv1",
  "key43": "4FxNzkCgzpqT3B5WGht6VQdnD9StrFsrQ6FzkFSaoUPfwNYP5EfggEq7GaiMkkZrMznvVhXyES9rXvGsKjjJGR3t",
  "key44": "5zU8raaxPU5xm1tmoG1xaefXDCXTZGip25VkLG5vVhXTJHn19g7FafzB8U1ndDbDym1E1R2QkFJjsSdSrKzgYE5m",
  "key45": "Z6KfXnF66N9pfvRw1m53iHBXSjjkHJK4bAQaTjGSMj9LZUMEDjgef1QJvfovcHBFL2Tgv4QQKQhW5K4qwLjakm6",
  "key46": "5qvG5xcoui8Je7yDvoMykXv9nbXhysDKmU1rLNMuuhgVSAJhKij7mvVppQB9fkLKBuBwm48aGCLen1gTwJTjNsxr",
  "key47": "3ftjptLqbx2x3V2A7gRHMCBHkcHGB7HamQWgpjBvWqsMUSjJ59wuHtufw4FtgAiCaFx8mRr6Wkg7AjhbC1na9b5x",
  "key48": "AQF1SD8biwHce5sh7oasgGoonpZVAJDPGfQDtLSfe4zUifeEsrSQLSs1QUyFnzLU6h7nxDPNKGkr72HTseYeuEq"
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
