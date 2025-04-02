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
    "4MGruxsMJb4vhuhMaEj6geJ4eGjf892i3XjeZoUa7qL7fx94TCjhmdRLswoLK1u5bfUgurzFYatm18nFQPp5j8Ra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u6KBKrwJPg5PxRRhVhSYXog8wwuPTFUyb4zN41UcHZp7K1EVhDUoDzpJorQyVmegZoWFTGFeY2BKxjkL8rMRdjy",
  "key1": "3dXPTR3eVWJ2kmY1k4d7u16gf8MsK3k6bnN6ofPv1WjeXYoCTNGAY3nRAUniXdzHYAyvaXKfWo4c5ojHjCnXuNbb",
  "key2": "XQUkByKusLTAEuTpWRVkhzJ3KucFHX18vFMxnmGHKVwtA8dRKCgC5315sNerpkjxHXbAhm6TJYNKgs7dssyoy4d",
  "key3": "58T6zT7BMg8Ym1PFTBnAiHcUTqAw1uUhXNQtaWoZTf5Pj7NWQDo9NcQe6vFynxSkodP5DYZAG81e2mse7jVTMmpi",
  "key4": "3sP6DuTFgBQ3naWYFcyRWscUFSKrkn2yVfAmUSUTtHkkL95JdTxr8qm5J8ks1VhRmyevFNyZgsbY5Pkofx5SwaEJ",
  "key5": "2YPkRjGGhK5vbeU7iM9zpWZaJh9mWpWJ1eMa6tLU6wrSxTESe6FAUSrnHLyhguPHttckxbNk9nZRayQJCRT76715",
  "key6": "2io8aBRqe3XepqcUmqgVnPYgi4MynZxkfDqxKBvzyYnsL854e9M2KxJ9LoUpQ8gmfEk26yAm66efUA9yHa5P4uz6",
  "key7": "4hiHEpohrqRhnvmtGGNrXTAq2NxgQv7vwN47nZnG2WseTLqTyQa2VPabvaMDmGXHQ9uF1C4Sc9PvquA3ug6Cyxxz",
  "key8": "3xpeRgYPsv6pXQC871D6hqKaFapBXHHfm9LVmgpsTpfjkn2USBQT7RycVw9eKhv6khe5djGJ3gUuXiSTJKcM2c6L",
  "key9": "42notBod1DWXnT6FPYj8J9E6WHS67KxELCHtoMisJPA3yiHRdBkcgPHSR6HF6grG511Q5jbowoairxn2bWJ6CHDk",
  "key10": "3VwqZZLtf7jEpbNTCJofAKWo5gktqcYkf2JN2jcoXsdHrHQbm4bjnFpDFziyRUaEZKWSfMmtZifarCyftYwJ96aa",
  "key11": "3YyqrZZp9WRzGwoUDBxNoo7KFCWykQPmAN2iFmNzeydXP3guxZcMM4XvGsFSaDHykwuesq9bMDUjD8SLE4f8Eu81",
  "key12": "4cndV8mzFdqoQrjYrUhZFdL4WEzf5ayiBJkqCydu4SqDUQQhak2ckkRnDWnnpPcK33TDtwTeJKUbr6CaJVMohXtN",
  "key13": "4YxTcBGFFqnSo69ennuCTRPE8ZnKCDGfKD8mUn7Gy5LTzsUUMnNhPNGRthE64WsspnPkvudLeSaPRPg5us7QUM5w",
  "key14": "5jbuB63Dq5fSCcCaWyQ4vDXtep4wTLNi7Y6Suod51L5ojncCzxDMw8F9ogZxgmNKwkHXLehiAbagWFwB77XVbeis",
  "key15": "4ywUQyj3pFP33n4dfHBtHyXd7S4GTJvb6dfs371TaZL9R3mx8TQJDMaJKp8yPzNXBamqDJmTETf2qva3hjxn2Sgc",
  "key16": "2jSHYKhoY5fTiSKeQCyCgpcT78kJQ6emdhTCu12d2bVT6JBS1c2gGsjbyMEiiXQjJRT1FjyJg6UgfZfHc67H1iUj",
  "key17": "3fhkXZRXEftNC9RqeLgXwxL4EqcKjYeR2duWkvxmrL6pm6uPTH8zwJp4JwP6urGvaiqguZsPxzgHJvBuUSWHkfMQ",
  "key18": "5m72jXY2ZJkEVFTYqz1ZLHY6HPHz4UqddXQg5KTqe3xU3KiTzSgfvZiC7wzvjmuwBUgXieMn4e76TaUUnm9pykrS",
  "key19": "3uGVVPaUJuUx3sCTe7Y54wFVDC3R4HdVVgE18x4HfemagnY7ik53Z9cDbHuARpeH5QNzcPLn5ZUkaLY1dGXZfWwR",
  "key20": "565BjntzKptthDn6T9pyEtayeGNZjTt1WcQAVbcRxPGaWDk1DcSCp83FTwUoDyGmaH37ZGcRcNWjXSR4u548AXwd",
  "key21": "62LXacU4LCAhK1RMcpwr62yMttHdJJt4HC8SFXR6CYiqGdcLGuxFBpGsoX7irAaQtWSj68vCQL9cVg7FBs12zDQu",
  "key22": "2J7PqvzJTcvn8Dtzk3nhEmnPQu9cQ7NLaNZMCjpE7GdDo5TtwKyEpm85QPqJx2JsSjKXtiCtW81WzzqPzabpfC2F",
  "key23": "38sT6G69y8AmkfXJ9MbkNQLDsrXvdNRq1VsZc1rdsx9zd8JToi6adhdGTPEjEGdpc1HnEP76KbtubF6N3JfshQda",
  "key24": "3fRVSjKokRFGRbCxWq8fuD72iwwPMTNrzhmrNVK4eek4jxS3cYEN6APpmifMXSNKeCfKabSeqGoySZGZV99GoaF8",
  "key25": "56RYcYZRBTndgiHivDnQneS7e26pb9J7Txbkfh8sCVQprVZ3naMhBjWNPyVBJgcrcEhpj3NsQ1S9WehJ8fSUAapd",
  "key26": "4x6P4azawNkaskZPAiTZmMR1RYmrKApfL3zRPbQ52RzrzQQ572qb62vQmMR5wzwLoRr4eN4Uf527cvWycR5wTrE7",
  "key27": "4MPLaxGYhzBQGsyHUab1HQvLpZsQCiDLCQjiSJXLPQRUWkrunwoK3re9XBUnb63ZybWZwqwF6VZX5dPEBF58m9Yh",
  "key28": "QExhwoofEsvr4TEn5eEhWj3iRqJwZVzTUCRVqh8rEY7uyjf2ireBmANCpKvvCdRdnfhMiPj4KbuZ1cRuQaeVGqW",
  "key29": "3aPMeYL5LeJdXGqhPsCf6bRpFRtyUw9y2DUTJJ3bFuJ5SXZQfojAd6edPjDmoJmyMDp8eiynge3X95ioveeZ7cPY",
  "key30": "2McUVwFJ81QgskTohQNUwmvy3iCMa4x6RgwKQuERrYEGn1MXsCMehBYfAv8R2fJ8mjedVjS1XVWvCMj4nQSZBV2G",
  "key31": "4mGLbqNU4NgVyAA5SYhviuqMcoZT2NZNbzPjCKCgZ3dSsnZ9PGzaMriBQV12wK6x9twQe8R2jUxMM4Fqy5iyJAkr",
  "key32": "3r7kVM6Yf3ZsNz3bANrg9V5nSBT7hS41LX32CWRigyomYK68w1zBBLqoTs9KBHZhoP9JANnX3hWSmRvacfCVA7ri"
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
