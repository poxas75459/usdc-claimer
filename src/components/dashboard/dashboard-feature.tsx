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
    "3MeL3oxzaFxtd2We6UKBNzS3enmuUpgGxLadbG2WNiHNyvQC1PBz48HWDW4WhxZF6BD9A8qr9YDt3iWtjKs9rodb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PyeoHDozRDPi8oyATs4LZKzUtWzcqa1xKJv96mrmNiThRfLJFgQKDKh9XZwPXhFn1zeNs9oEfi8km5R9BSy4AqW",
  "key1": "3WkpbeZmogo1TAK8GRLPoXFwFxTA9XNbtYZz5FPgw2WZVjw9MfuLfJG56zb5hFEJsZkK5phH7qHtyCdKnCr8S8aL",
  "key2": "5XfWkZdyzayJSszZYdBu7sgCNs7pw77wqZ5ujGRGMozfbvSf7bUuqZMPeRWrrnnw5kfgseXwpnem4Wt6wuPfYFGm",
  "key3": "4H51gLDc13Y9fDnBwFdvD5PteGjHdkexo8kQHM3eZqNQEFjCxFwsN3ZK2hPzq8QiS1QuHvjhj58U6jQLQkUdRXrP",
  "key4": "yQeuBBujSPb9WFVGXxtQVKkv2NWGqXxGj5MraWPUKgSmtozfbXQoG2475TD9BaJdS2AiZFe2eZy6Uzd8NLEHzJz",
  "key5": "581nNdtcDt5L22AQ6XDkGuBeSU6a5xder3qnWL6PgTYp1YwCuvczjJwLEqYFxNTq6zzfZ44ECxtwYRgBiF7EwA9C",
  "key6": "KCD78RdioGCmJkNBTEcCoz26oRdNpiatimdyPomYwXPWHk7xPXuhJ9TcUrjSDqmM7KqWs5KZDgWZ1aL5tPhpNYH",
  "key7": "QVGbGYMA3tSkuY6RP7og3mPu8XfRJjb4wHS28ryu5R2ewh5yFiWBdjmjYMb5b5ZUfnJqqb6najVViWrdNZ5SG9Y",
  "key8": "48gaoznSvDLCvcdqwrbumKKU3zREd74zSSUSMNmXoqryAbKiwku2YuL8oXeKnopXxq5vHoZcrEe3dHmucdKLiSyU",
  "key9": "3TgzWZDXsE3RBdcygyyaeQmzaqS8WLqbuZ46VV4Zztu5mKKoztKSMByUqAYPoj4dzCsCJwpCNLJrQzFwkvKR6vUm",
  "key10": "3gTHLC5YHufgv2tCw6ArkbP5fpu61AJboCVPEvRqnPLQokDDirq6u4KoxkvgutoB2XrF6CZ6cHZZndGXihtW8CS2",
  "key11": "33KJc48xuq4nc2Nn1ktdUUcttpQQrBFxU4QaEhT9kYGuLoRB6HsCPsidohc18CL3MkDfcuUv3FVYLJwFMQWmQGkh",
  "key12": "3V25rT9XckyAN7kE5KbdDmqMfDzt18b6MXrv4TTQepSP2Z1WzhACqnLyGPRx9FCn6v6aybS52dWhBcDx7boRuYDA",
  "key13": "2ZvtSPxaxngLQNMeMiWi6eYsMLL6aPHHHKokYwcnMj5yM2PoCkVfPwzfUt6HFJ84EUzQaDqFsFZZSEc8pn4JxeMu",
  "key14": "m9dWP8NGVuPtTFkYbRSPRLY2J835BqFMgTCGzi22b45c1wQCAUYEvnrcAmkfSQZ2Pw89qWLBDttNCfakUJMPKTW",
  "key15": "ZDBRtb2hDUvsB5v2aW5LVamKLN5naPCFvNfUq7b9EVjAfpKkBaKxhewSgrM3hpYF9Wd2wgsHfWDAmoMRHmwTobz",
  "key16": "AbwxyVSYJvYkHdNpJfK8HiRy8s42w4YqtdLMaitfJF4sDrENELNPn39J8tNQFwHDULWLuugsYsfwP95eiYWvKtb",
  "key17": "5u7Q1mPgweMZNMrRVXocmJ8n668pSHbr3uyEof3mGc6cvWBfXCsJxQEeBNL7NAUZA8PSxGmGNTa1rZ7yTLEeerhL",
  "key18": "5QAPoVn68BEYX9UwWrn9gNyt6nnvzwxghFdFzeAvRaE6qzAJnxuEgn3YuxCkB5i12rwYXU9SqDXYzQzNYVucFrer",
  "key19": "262a1kBdvVY2iX5R88m14wJsKXq2Y18rV2JDy7AMmwEUFaF2g8HuEfQGrhdfgxbhcBD8eFvahzVVY73N5GYRqL6R",
  "key20": "5d1tXES15CbargLuUAGpJzciaudvoEvrwUmB1QePm38AoFR2nyjbn8ye8FRV9uDNVGMyMknw5vJKXEdtLd4cDp9H",
  "key21": "NutTWkUpS1BYHb9V9Ryet1fD9yHzLxNsr3jH4T2MgL4riJR3AZDgHef4M5fxRytEYqJzST3U4gR7AQbdmPhiciu",
  "key22": "4urSSzzeJCjwtbcKSUg4eQdfzBo3HuHNJMqEXQAKRCo92zbFq4hZv7gWvP3AVEzKd2GU3RcxHmmdKJCpf8PjWSWq",
  "key23": "4TZ33BAdqGTAeZ2fsGSnhmHG5GDpNrGrKxfhVLASd7vrFq7rBbEHkgFA5vB3x7BjB9ToQ9cm22m6JN6ebrCfo1Yq",
  "key24": "r6HBRhRSqqie9VQMHVfQdNUPXqeYjwKBywp38ajXdUqWurye65X6MgN1UZ3nweTuw6daSE5n1LPoUHFUPiwbP4v",
  "key25": "2cPFmVivwya5ZxEP38FcBLMbM25PGnUGAM4631SVC7VPyrc85HGjphBnNPFSBPrRNjc3ViaaijL2ZMvgvMjenkG3",
  "key26": "tsLZbduYDrrh6HuqARkUqF5JBPjjfYaUyVEcg3zj94vu7kW9aLRcxhUmYzhQrmpUe5oPM63ioYHRQcpHeirdpo6",
  "key27": "643QSdSGRCUKUN3vKKhzRGY354Zfgc924bmDxeBiJyEvhViv681oy2PWwcNVYsi3uxonRUQLgT9RWUc73wFjGX3Q",
  "key28": "2GccFQFvoykQvFQ2Rbijc53VA3NsEELuP47ZRKi8AnxxMFCEb5y1JpfwTTG3SYGoUrmNo2t9bE4UnF7cPxAkvNK3",
  "key29": "4Yf88h5qnX7a74noxG7oauwyXCjBRZKZCHGUibcHVoBaqVysSLRPBJeVQV4t1YuiVDk75ojU6y6fmmV83gonxL4y",
  "key30": "5387aWTvbE6KGfGaWDbZbj6aQ6GxfECGKpAjo6GQP5WLtvqdxq8TG6YmHMmaDr3g6QF5PSH259pRz9HdZ6p7vBsw",
  "key31": "5oaZjS979Aeh8aDaCeQsN47sHhcMhCKUrn16EpGCJACRc4x6juqdFzC9KdXLDbtWSLRqGUmXy5Uh2XMxkNqrLSpS",
  "key32": "5uB4k6tKEeWdz5yi1ZqSv35JDuf8tghenwXyKc3uetWkSTvZNeBFFdnR52v669FZw2XK8grDK3JTBvWtxibsf8na",
  "key33": "2ohLNNuV3wGmuKGocEpRxvMfTdKRTFWFA53kUMCmb91jo1x9HbCRG1rDPyCNKg8zbT4UnMxFb6uxra4V6e1bpP1Z",
  "key34": "4upLkLBQWHixyPrXbibPqGxEXGE13BqLWcD76nizZMS6C9DyYgFHs2VU69rf8dUjPKAMphbAeXZHeDdjdrw6Fg72",
  "key35": "4K79VE8UjbXFqrW3XqmVbSxWbL2x1vX7f4XuDqVfv5E6Pp3EiP1fTQExWjJvx51ybayeCc8n38BHpRYTp5abdfF3",
  "key36": "5tLpzNh4pPLhr54dzXgUn4VGU4LG8ZdwWeisp3wgcTzQwX5C9kvdEWPHdpdvyiv5RBPRuJLJpMg9DFWUbEzVi1wi",
  "key37": "N5oyJvTYkF6Jgk8o1HL9xK3cLf41BxmiPz5TG4Wmj3htm58XNkNZMj75Fm2za5HyJhmZ2B52kX96hLGLrP1YX9n",
  "key38": "33cJ1bU67UVKjjzwsN1nDSoaMjFbHe6ucPkWnhJGfv4GHubFAXcEb7Y7Hs5tiCx3Us462QekUQRyD4bx7EFwPp64",
  "key39": "35kLXa2PvhgQyr7PHPtQdkf7jykVxyU4XTF8sVBB5aXemz79eLpNXer2Rm57NxUD58t9LXDLDaiFTvM4u44zQ6UR",
  "key40": "5W4yk4ntkknj5Fp98viYrkPuBCttMT6oBcXRPmdYneNrytRcXPFXMpthTxLJHdQeskewg3Rd72vf84iJHyUbDtTU",
  "key41": "4Cz6FQNnGCyxXwEPeEdkStrcwh2jvqGWEA1PYXzBytPdBc5LSUD6habkuLiVnvpzHvk3DoxL18rr4dxottrSkrY",
  "key42": "3msKWJkuUix8EYik1BeepCFDa472LRN1bCt6Die4YEzmFeJKoz55aWWvsy9TcTmp8ckgvDypALqKwJLYprx8gZW8",
  "key43": "32eN3k9H3YMkpBneeoZz45QR1vaJ9AJ2kwx42r4GdBaEKbjbf7fjxf7WiF8J6zbCGVos8RYmfdMbBJXWNxUdbtUj",
  "key44": "4FPjJgidzN3hMc59GTkVimyU4i7xZCwNH8YmSmWPMETo1TuCjxyyadXD7Tz36GLSYHfLPNj6rkSfhj7KJPjRpdBn",
  "key45": "2or1pDQeVhNLqktXmQGj6UKPk8DvLYzmJREW86gC5RFyD3nxboKuhkt5hvbLbX4dyCwMfmR8owsAxdCcefSiVEw6"
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
