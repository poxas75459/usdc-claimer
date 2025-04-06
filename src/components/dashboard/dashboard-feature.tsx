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
    "3kAthktLeqoDp99cYkZ8YMnMxPa8TXkFzpAFLxa8T462eewv4rudxW3uKKpiYh6CejKVWdLPVWfNBrQuRTKeaR5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FBvYbrWCp1AEsPMuhvndpAHHhqfWAHVMjWkBT1jdKL1ZnncStSxmnpCVygjzJAf4GwZLNxEVRad3Nbv9rk23WLH",
  "key1": "2bniFQzSpMUXJ3TyesbUad71BDtL58ADVhtbLZW7GXFf64SahU2XpERhwK426AZDPXJtKozpuQYoUNcnvLbkD4tz",
  "key2": "4y8bc3tHzV8vVrKLVHin4imitRzRBuxJUzRnTnGrYRh8f3X3iBKjeFpBPz6TJrJhbC7XQc6Nn1Vhn3w3oijQAerp",
  "key3": "2n34noEGhtg6s6pJ7T5g63DLm6o36Bkx2nYMTYXkPSt1CybC4BdBr734ij8EUUfsknq4wNRxiCWbhqzDwjcx6ocT",
  "key4": "vs76GeFLcUZL4h5r4HZ1FEAQAumwAZWijQyzbXkFhfSZKvUrerXuc7j2U7TZu9RrLKTGnsv8qiefDMUNXQuccHY",
  "key5": "2QYzYeZo7nnhHgMVaPYnzzuNveEyJVThdr9EZi9NnKA5hFG4sYQEPSiTkNq9Te2WjjRZmT7wjx9PYNGxcCGogi6G",
  "key6": "5KknMGYFtB7hZMtxycNBvgMnsrhpCzrTZfDSFZwgYFHNmLPZKmknUKgySA6HK5h44WrPnSXU4tkHKdPQJHz72ZBT",
  "key7": "2wZLt9hvfj8uuPcXRZSJJj2ZzRzzaedqVJp5vJpcM8V5CWj8YkyipgFmDA8Eo5e2boXsXzd8TEedTXVujdcTdj4B",
  "key8": "3ZU7BqzMCj6hoi4ofyDnQp7C12hfmd539tj4PkvxpmjegkadqoJRAc2HUx328bJo5Rs2f7WznExktpQNPvoxywqC",
  "key9": "3tyJe217r8J9VTNdVkeeKvZGozo8vk3EjP9Q5MLWgZAY2uu4MwXqtbw2zqNRgE32nYqrzdzki2aE3eXcfTPtYKaL",
  "key10": "29YpFuWcDFzwEhmzsiHAiMChLLQw9u6PVr1fLNaiXMgDRfZJtbyJzuoCLyRzzwEzc55aJUFeCs5E3MVrSvpujkz7",
  "key11": "4R2FSv6JteKpAqV6tzEPkFo3KAuCh5N6c3ijf22DGRJcWsH3KHB95612Fmyx5Ur9Kdz21FqW1v5U6WoJ646xetgq",
  "key12": "2Tck2McfoxJSkv6TDXB5PmrAdADS66T6JFu7PbZNK9nBUAiZpWZJie7HTLo13CXfoy2G3RCAuP7szVwzpbASwdWc",
  "key13": "41ZVuHFsavLoq9WcaA8T5msn2LQh9rqmw5QAdBzqujMf8kfdr5uzuHChFnQhzzvQoLbjGJohABcR7st6QpA3b9ZU",
  "key14": "5SVjDYbQ27KoyCgGJb9oJfQAxbuG5HZBhyTCzqfjomN3NnKuJzhD7PvTYyLSUfH1ML1mbfaoBDoKuwntcSXN7kug",
  "key15": "2wQrvhGNdyPAnWMMk8vBBuuCyZ65Fr72E9gTxCEATxaYKuivUYQ1t51hNwtFQWt6nbf71fuWeVP334vyFxMSDfnD",
  "key16": "233RYE25VAMFMACYkoPCpUURmLadBPoDPN9FTQHVQch9r68qxxLSpk3qgyq57AKzAwi2xfrgGeQfX1h3fzrz43uP",
  "key17": "sMPTNfqfykpckA4qQ1n5ECZFvVan2NmhrGkBLYiitDRmnmjqfuKoSXQZq4yrL3gWT8CTn6wXPjUVLhQ9SJnq7cU",
  "key18": "4SGvVfbXa84PBi4YkDSgNDtqzJDcL3gTSKeTW87quECreXR6yxgXgBb9XZf3fTstc2xsxdibXuTKH3zDjZWgWaNL",
  "key19": "5jnM64vzGUkNio63WBFv3grfZ6TBuWfys9etThA3JX7R94vfHjXHzRCwVzr8HpbWwaEvdVtXDW2LJ3mDrSuCpKi3",
  "key20": "4AJkCoUcyoS2HZk5P6BwoWLdNSKNqiKw4tTfsGTJuw3b9oWZyLxMMWhSCovVtW8RA4mx189zvn5X1yZY1iWtTqw2",
  "key21": "2C2njNAtF4rNriXvVWfEu3yiUauLyMX7rmLoWLXme3sA5mPEpmn3dQhCCEcTnoytmG7ZgqoA5v5MNUM5XYKK2kzM",
  "key22": "5Mx8Q7CijkrMhbv6QHwZfTJ8FGTMuE6QpZLRkubW2jURxtdFcX35FQqj3ds8QjCNHaETSpMUDjojXKSP6vMvUvnb",
  "key23": "m37uiJnEmhsLLg7o1AArEUpaBGiVmuKNqEWpyAJkwgxVnNTCQTtPF9BA3pMdpkmLLhiQETUFWh1xicjKKEfp1cn",
  "key24": "kQJAjPbsAwvbACpHhu1BS4H6R1itdF7yoRvTpkzcjDVwDjex6JvVxeP3kS51tohj5trqG3NrzVrjzZ23Sta3fGJ",
  "key25": "4THEYHCMweb2eXctRaucAJCZWbnGKou2zFYQd9Qu2tBCoFK9t75zExbiUHD2ve2fLWqwG3fkQLiPF8x2HU1jos56",
  "key26": "2eCNvtXwkABDSrZrUYbG9YNpnap9TWMSiwcsJ3fzHumYyGcMmC2XueJsT5HHNkbbconPhLa9vsxMQtzjzA96TG7e",
  "key27": "3PSjQXnL7SGDVk3q2bKEFp6v4dMZ6DBp2f1g6fC4NWCxxA1SyWnnkn7X9U6RUdZcmbsYDziiDupvX8WfZPvbhHvJ",
  "key28": "5GGQkV7UXHhxvs2yH5e8sGNxCuac1ReHn3HrJibmJdsdMYbZxjFF6LWkXiBJvuVAEgFwxHdFaghKyvAh6AVFpkHg",
  "key29": "4gHEyCDLe6TdWLzHqikrwMZ6tYJZ5EkDbJ4ivuD6pCjUJx5XTPNY7HRcxNu17q8rhz3LFcP3yDE75bGzgyqn3rYV",
  "key30": "3UAMhQexTUEL8JMZ2QSXVu6tmbCMnd4KzSULPZsPhJxU81Kmd11aJp416VCqTSohn6T9FxkN7anqPafPm4TeTm44",
  "key31": "2LCAsHbhv678q9YPP87HCg6U9QLSEAzZqkUKYMZW5T3Qis2cUGyZVzDNdWYwzWhn1HhNUuo8VhSV6j42n11HN22q",
  "key32": "2WKF1HP4oQ9EuxqVbcBGpxgKnEcNxWjYG1n94ZjXsuHbZKDj93HzS1wLyfb5Jx4EVHfQjexrUyrkKqbreUnk9mn9",
  "key33": "3hs4EAj1PEqAFnhmf9CynbVQDzVPDRdPhrFNDUNXvC7bNHcqJNYiijNuR49bUjNKjSnZo1RgF7mhih3zMneFoEMv"
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
