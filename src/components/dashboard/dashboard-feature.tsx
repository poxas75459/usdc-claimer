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
    "389HUFMakfidunSbKfzS96qfqsKhM7aejn3F9TUyTEGYaY2Uw3UwmKxaxg5SDh4W333cPyb4boCNXzDWqpJSXoA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mCtQk2jPrgY4gabKpJ8kaNwCmQ36D45XBThxnGbEvStp6hJTEhrdFPYwYdJAX3GTktfoMKec9ivqaDbXdWGnvsK",
  "key1": "3aeSpXoMSKbRgH7s9kxpfCEkDhyYwNYQ5zC7rCViDEpj2qYh5DDNTZYwLQgzfwnST8beSLpnAja6vuYHwjpcPGdg",
  "key2": "7x6M9RFdvNzK2JpL1Vz9yCNoZdL6ewQTqsqLqZm1q5Ay7nJQR7E6SHmx1a9MiRzjZV6PazLkkWg7N9T4H2rCocj",
  "key3": "3nEUX2en74sdnaBuqEvKVgo2gJLhne1qcJirfaoSLFk7MaehA1HugMWFYtfNb6y1V9bDWeuzarVskuVhAw8VoeeK",
  "key4": "5D2yTscvX99MmbCeLc6hYCbR1Yq2TsGt15xQzq38NBcvQHta8JAQTRRKDxgPNbVsaNVjey3mgS3f9uN99Sc4QpxL",
  "key5": "26wuNGti7qoGRwffdhL87TzKvtTCZvnW7X7GGoMszF9eUMrSETcBgE2ytcwthmE5P1L5zxRQQLTThJBJZtJdhun5",
  "key6": "5yvvuyL4xMia3pxPMiXa7tREBSnRtu1UpFiXKwQsw5NNSxCCPHf62qCvx9TnN1irkCHtfkHkb5T7chLVhQcLLjVn",
  "key7": "3CtZwjkvGRMiPP8anNijXpKMjPgYoN93RdL3f2oj6h2YjuXi5hYCfQxjwRnartmKWhSDSkfUib3kBZdhCTFAGALM",
  "key8": "4z1vMPSaZcTKSKCHwvMtUxvAECNTpJXvv9J2jEMXUBxvY35kTFHHfG1Q5WqoEaYb7zAJiYddN8YPBkDN4Jw9LrzY",
  "key9": "3t87ghuPpXsqLQobjUUd7jKRSUBbAUKH6G3YprG6QZouefeEAQJA1Qktcnofhf4Wwpk87SSDcQDesSzPAiZwtqWx",
  "key10": "2AR5Vw9nzLXcRCi5DAQKwgX78deroShaxVp9m4rQahskBxY4dGnSMUJPopC5xDM5kbEs3eoS4gYwB2m2uRKQ47P5",
  "key11": "5pmQh1GLpWTk2kPyWsUUv8PDkFz57tUFfC8QktrxxSXk2xrmGsU2ad1jWxBd5QajGdRn9rfxpeatwD1pQ55BVkFh",
  "key12": "3RLCAuB8frcdBrLNiMVQqzVbQ8pfXRqEzBP2dweLQ6CiT7xaaK7S8GYBS4s1CFSZsoq9UuDybCrTtzQg4g82iwtp",
  "key13": "5fuwHig18oTQQwc8PGMZCGgPwKh5t4StLkeL9Qm8eCsafdq1TDesPqx6WPtLmnEpo6r2AK9eFZnJpu3d1Qk5A334",
  "key14": "4DayS7t6X33yWNnnBYYmTLT7YFHi4Q79YtKioLz1QZ93DXL6JBZabspM3iNMPt5A7Y9keZSEeRUugc7vxgY64mpp",
  "key15": "a11U5mwte1JogCVs6a9nLg48r33GHd3wdxnXwp7fyQzuvR3DsUCyNtnccRQN5RAQH4dz6YCow7DCwaeQYVTqD37",
  "key16": "62uAVsfT2xMBVFiHGVkpzDxKikvkzXcERMahBzGvFJkNXAbPdXr9HKug11x65F56KMKt9Z24PgFj1p1pedTpgyDN",
  "key17": "3j5U4thK68DpLdkd6QaESfEwmqbCKu9UcK9REcoFBu8sEdZjvCaW46VjGk2qSgd2m7hAS91YpkXhX9dzpyzQTmS8",
  "key18": "3Dqifdx6F5hu35m1sYAessDsDxh6uqoBmo3FtyYgTRuwoxCrNJZ7rb1a8dDdvC5FUtbFHeamoATkrP8xABNwKENA",
  "key19": "4dfWdFWAwwaKLrAVzh1E94fwzKRjr4W7rDQJiLrtBTVYGcz4m6Cb2iqYr2NBCJn6RnKiwSku1mikACTNqL7Yrhc5",
  "key20": "2q34k3ADB5LQdjnFc41NNMgMdwNT5RpeN4nad1wUBUTz9Qoazr18WbshxRx5JXAeB4dDYZNvFz8PK6udzrnbDwKm",
  "key21": "5j71Xn5JSpmJTVociwu8CzFCJ55ujjfm8mBncr2joNoYYMXGjGgWrwTysRhByPUQjtd57Jhi2ELW49uvrf3qKK4a",
  "key22": "2Y6xkmaeX1GiRo28Hgys2n6CzkJEZVF54fKkkLCJPWrUd2PX6pPAK7kBjP8ui3dbT5SBR4Nb1qyCuHSUw2mzcazf",
  "key23": "4y6VGDpNHdXQ1kyqQYr7VzYCdqpsQmYkcxKAPVA3KjFcpVEa3iifUmF4njP2T3M54jyKTwP6Uoz7nLgnCzm7paM2",
  "key24": "KHfVrbhuR6UWqHN1GozFvASvPCm8sEFWrVbocQahEEuKn5ykFfLNd4KwrHFPzPUzSyNyuYiKoPvfUrWEBWTDWQ1",
  "key25": "5feQFLaVmdmQoBwX7Rr7PDgAjoAEdtC7YzEo1ETtpmjQdDyTenaboPwE7ALHH3vP1kDyiXJikaXPE3SfzYEUWTWN",
  "key26": "AGZteik3k9UhHJodJfmatbJdhkrkDWgfCQ8h8F9v4zfkUG2DbbRRLJeWR3EsQ6ZACRmuxiBeFi3LXzVayXWfvNN",
  "key27": "4JuYWm2n8oWmzJyABAY5oDudyZP8RQHspq7zkjtp2aepcnAZiHiUAN5DpHSAPTb9Ld2gHFPKPza1CaTbfHEnR7k3",
  "key28": "4m7eaNxRGXASeumyLtDrk4z4Q8r28B38FfZeZKdNsLET6w3SLYDbZBEexeadNTgJ8MMFmtNwBGbCxSZyMDYUYe4J",
  "key29": "V2tjDqeB3iwkhTxMwKjiK65RYik5wzvFtJ5pBU1JHWXTp4QzPagTPRJjh3Lanc16F4nxtDehTyFdu2BDDGHUGWT",
  "key30": "4fkDcH9GWAa1S8z7BNTaS5ja5TD83VTqXYHwbk4SHHWMDDX1PVUyDfkSe5NhWnMTq5tmmU1qKrkCs3gAeH21A9hP",
  "key31": "4xKXYLWF2hA2qGYcqS49oXrCaeYk11DCZx4NZ5anXbPvTAZB8LEWJemtcbSwqPSLSUcDGM3kK5LrgB8V5ZRunCax",
  "key32": "5mUgixmZByyD9LnE9fCjRLJncfkzAKnNrsqHvWRemLL2PvG9TAkj27dWCw5RCUYqtktRf4ezTLd2PRnp5fqEKctm",
  "key33": "NTepHXt8KDnmVyaurNJXwFpTnyAtkxLQeXK3JP1KEjSXgDr1X7FXNoAS38VqEEDgKqiX7TGiVLK12dvQS7Txqx2",
  "key34": "3zbWknKKSgTeMgdZuBJqxnTDk743RFvDZbFke56ReJ5johJd2TmuNQPcYJTAjdV8kMdrhT6AveufBJE35wfwepmD",
  "key35": "35uvLu3HtQ5e1yezo1xBfV69rmt5jmT7fb6PxVu8KqVjqfPrfotWgZ6JEhhLSc2nTKCBQrcPALGjqSRYS2NNpgqe"
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
