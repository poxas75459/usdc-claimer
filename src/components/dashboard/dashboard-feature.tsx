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
    "4oxhsBjwev4usV68ah6nWuMHpTy7XGj1tRw3Sy9DmV8MwmjNGFiALC1UvybaYMQCdz5sVBLN229ekC3T6VnZoUVT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65vegY9h9ETTEPgLriigs4YcdbwNoqUqCi8CuEQ6gxAdh98dG6ZppDRWRH9tWEjUdzzir2Dqdh8X4FC7zGP7aUtG",
  "key1": "2fUEyBpdr1oPoXKcWJ8aGrpWxXgJd4srU2cVux5KWxvpMcxubVCZUPFvQopXeLm6qJo8cdMLwUM2wkXvsDNSdu7U",
  "key2": "4jpQmfsvkB9AAEYhhfZW2jSfp7dYk4zV6HpPvvz5W3gaY9Z2wqK2cPRWfPRwNR6q6HgBR2jcAJgzRAnXwfxsUyss",
  "key3": "3VpDdVonYUJb7beGWwYawJDPrZS8TnFpBMY5Kex95AuWPS5TRcASPAa48ZUy5fCwL9Eo3obcFuj99ZQtiFJq2sCi",
  "key4": "3YYXomrfSKtd3P6oLuvE18f3BxwUUDDurMPeXhep2reePGziaiT1vTv5uQQRMzGbHfboD93e2aGkLsKMcxAN6uMD",
  "key5": "5ywncAAU5Fr899jeTXTFeUk4Q25FVS3z9mHwzkRmiZ5vX5MrP8xBQ2EZgjvyqbxVwqPfvi7oqjz2s5GJKwzKzyBZ",
  "key6": "5LZAVsmtiexFXpSDNhaEsJ7xBsX3spxgSRkcWuH4wrZUwE7P75Z1rLi6YKWUaUXRtPAgibP8Mkdx9PoAbqgAyvnD",
  "key7": "5YryhM9Y3PxcBP1Q3XsEfgDvZvHYB95Kb7Ab4yR9j11QDUMmZJsh2Vq816QJ1wBujKuLo7GvQDnh3EvVdDBSyC8W",
  "key8": "4JYcKqtgQiJas8JRqiQ9ns3Yw2cXux22HHdho4YGEPE4PPfYtFJNcAa1U7wkFXPFmFkFZPVtWbMQeC7sN9pvjL9S",
  "key9": "2xxZG6g2zgY7rh1cGbe3BiF5iDcHCnwsmeVQX256AULb2qptHRHv78FACuz5wWHPiCsfKipQsrEFS837izTJ963h",
  "key10": "4jo7tGiBtWevtpXYyn3xZryx97PFzUa9G9FChPZoqmXxFEnE74uZ3LDWwnAqmmezTARXee78X2Q73wqJHZeFpGgL",
  "key11": "2zQ81uXavZD85omHXSmXu4mypWS5aUGjmkdJVxy6TPmTe7F5gS7H2dpkk53tMZMdDDm53LXLmwRWw2h9v7tf14Ho",
  "key12": "XkcUk9X9Ta9SFcXRNxkDCqs2GTxh3qQ6eugcKQxjC5j6MBsbGJayYHMDQSPDiuAeEXkP3X297yrJ7HGrkEBZ2mS",
  "key13": "5Y8mvGfUtb5mtG88hMsa3pNK17i2rrH5kC2QhT7uNagzSCXKv3BUuHarr983BwFogWCTcB55QYqjbNB5Voyg6VuQ",
  "key14": "3ujc4xJsLLVfFkUjK6P3mkvjvocBKUUw7kBi4AKKjoWEuECavUq6fw6s8R7ffDy9sHqDZGi7hXYN9dQncXTddwic",
  "key15": "5Kcgvfaai7bRofJV4pGWoLGvHQC2Wq7cNAAx2PwRhzcrpAn7QW5Xo3udQTKBv8czmk75wdpRjDvxpT2Pu3QESeCV",
  "key16": "2csMmL34PNRmjVWzueREUe18F5GKvDwpcsosnxiCAH2Dg1GoGZffMFRE3RTDbVvSuRFbHePSsTK91BRYxQDwfe3x",
  "key17": "3A2kMn4fxSj5E3rV519VyBReaURmzB8jvHjsCELjsEotttKWv8ScPHjvD7CPPXVcA4nMS2PC5wEycE4x57P2mGcQ",
  "key18": "5AQYNwcC57FRwGaUAD1TGahXaiC5hteW4LQK36AhrcthPN5Cwf4fBhgCmiQN5JszuToVXtchUtA7wJPrceepvqnF",
  "key19": "5ibCcDXb8kiLj57zsKdFhnssYGvwhVKPLQN9o7bzg7R25BhpSK3whndYgdRRYMNJsNUcD11Pr7w8U5tDpwzUJaRC",
  "key20": "5Ep2oS48S5NshWewx9MJ9qBZK5j1P7yYh7rZY4X1yX8rnSayTerqzVuaij9TxPajTaihEsC9LRALL6LqJ1caXsN",
  "key21": "4cQzbXaTL7oPwteVq8KnAkWCCCteFCCfKAo4KrDUhWj6wKazYfNA19NSHfVLPaykeB1hAfC84SZK9yTKkm3Gj9bh",
  "key22": "3B6A5JwYQTLQ6itJJYNsTnu1mirEuXroqatajqWkCE5ULAQAUUH6du72h5MmQMck62nh6YLhu7xq1mJhX1eeK78T",
  "key23": "EGrojkdJtnJw69hg4XsQ7ZxbLpHoErtxhzRaEvNiib89my9XfYxnTW2368S8V5JJMeQPgfvgLsVKGAq5b3dx33J",
  "key24": "5X7qGjxYBSYZik9YrQ5BugHqNNMW72JbaTDKLDzk2zhqeXPEhthFpqKU64eGCEuuh8RgrovLmMrhuUAAMwUyW3mj",
  "key25": "45pkWGphB5bLQnfzGxWVtW2ao9PfoXF5v6ALmxhK8avTtC9T92zGSjNg1i9MAyK5KPjKu41iAyjNyBb1KSuCGdRx",
  "key26": "32oC1WbjQ5MkfQ2Kwr8HiWVNLcwp17mjdAd9swXmuT9BbD3ZPE6KDKAf4jpuUjjGHud6W3zFRMxghD2HSp7aaiZZ",
  "key27": "4Y53t6qEJzB4Y7r3AZ4RvsDKcXmcnB8Ly4aZ9t3JgmR1AgYXy2fd4bndamqPzvMYk4B4EmnFSihdcSk8Eqv9G4uN",
  "key28": "4tYrpMWWQst16MdMdjn8SQ2jLCYgzxTxGZS4C85P1YmtgbUVc9TTb28L8iiwwRHZsSJqbxKWigPhceQYghqs8B9j",
  "key29": "47fVardprm9GoEAMz4PoPBUCv7oUUimU2HuUguAcSkXuGkVGDeAuysCi5z9tYsrVVBarfSBKbzXbUvAdTk4xj7Ep",
  "key30": "4dgiwUWE6f2ZXSSrWUemp5z4aTjNRMRJKoZFRYb79N8CxYmXsCtfycYbmaJDRDjN6bEp1sG8qD3umP6gi3PSK1KQ",
  "key31": "4onoW3fr6RSeYGCq2D3L4GhGxQv1S9GccV2nHUZdwmQzgbiif9meJ5QkDTRvGFk949fu1HAc5bdwmFr9maTxjuNq",
  "key32": "3rqqaxquUdmo7h41xBKaSXq6i5RuKN6DWFJiP2eyc9hkUJ8JVDKCR1p4mNCTjEqkbPKCRGDftz6vdfnDMV3nwpYs",
  "key33": "5hejA273MuzG92L4vkoRXB7YJiHaqepsjg8Ts4LQjYxDMTe9SNTbKoBrwcU4gdAQuc8qzUhRyKY5tNYzCUZJVui",
  "key34": "3DNfcY8QhYWsfsMLrrTYBo6FpeCfVJ6JvMTwkNtVsCeec2myrrZiNorQfLDtDriztXzQSgZSt9pKA45gqMhmHnjG",
  "key35": "3dLwo9MUM2jct5uB5TW8NasnpV7DWdUKFb8WMYy956ZANzxrEku6SxLccRzGRHeZ1qw4sbY2q14arHSA6KAtZRFp"
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
