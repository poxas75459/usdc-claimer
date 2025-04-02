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
    "5DgtiQdZRbNTdeuiMcr7Sizx7YxCNcHhBSSphb8GFdUbGTax6GawViuf1sZgbK4PWxQii5RJFff3XpgkifXoQz3J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NsMEJAWw9vgqyJPi6CVHhMuP7NsJbxw7AwZQpgNBqaNVhW39CCTDzGctevJBCxwpaLKzAWG6C1xDQaZgA9B96Te",
  "key1": "3nSX6G4QJz52yFH9yyZw6XUNAWciW1272wHRos2gcr2FMEZ1wH1ENiRhQ9B7zS9ome7EmJaT6noaLmudxSyVMneH",
  "key2": "64E4Jz1Y6uyx794kMqW3J7uAZnjZaJesV9Y3VRggmBg4KvjATxwKufSGBChgSRF6kDYjNX8LLdKMEDXP2rYfCwJM",
  "key3": "55CMJsUAhZQHP7BPgBFmZfqgynBLs8qENjhTZdXoQgH6kWvxeUaT147VgTk2vhXmZgjavDMsHtXgrWMUtV6qBgR5",
  "key4": "nN4aHPBaBF3MEnSUxxHUATEUVuAGF2k1qX5CJmnwizeDPyTrM4ofkCLkSQ8cWRyBWJ6bGoTYChq3uoSwk26Y3nd",
  "key5": "VveJ8TAx1uYERec1WAhXZskEAiMcbKAGZeczmUXxhvj7icFRPeFsFkyjdSJxhTA3gwzVDN5AJcN6VBYBum2TiKq",
  "key6": "5LBN69L1og6gRTCU2Q5TJzSdcF2CDv19WrsPPAHCUqGB9YqyCYodrjEGJyZ4PzHqhE7ByGw7rsVnXUD49hgWHmDJ",
  "key7": "31P3UZSMokNuzRUmV75mbh53hB3BiWVJ9RkMxrYqoshejMUiVWq7frRf5bwsG2hJUda7G122TmH9PWjmxwUbjg9Y",
  "key8": "28tvHPnnLgE27ETnsPdWebvp9SSpJw4rE8qnWkKnZw7mL3AKoVH78dG8V3HXhmM3fTtgaTwSecWeyiGo3CwD2P9C",
  "key9": "2qWYvFS5EgizSFFucExbfArWYKtSfBXDssmY6rP54rUZaUfjsSTvBzVBY3c5SiaMyALEJPtyAugC6F8CRS6AAd9q",
  "key10": "2V7b1Y36uuP1BQisekNF47tMJvkAHmhvMD9j993fmNd2n43dnQhVTY145qpLvWCjuKJXTVFe6zczn51qkmaCsJpy",
  "key11": "2ZdYszx2iUvNPQY39BAysFVLfuwTb9NK2iaEXy1jN2nnrVUwovps6osjwgBf7Ps7qNuAHfRjKfzwC73NQerMFTad",
  "key12": "64CBWUhkjJ28HSrVyjzvysDjfHWK84AHxtKAPpd66JVZTYHNrr3acRfXsvvDyRxgP9hPEUmN2vm1wjrr9FbKzobL",
  "key13": "63etxN7JzUviV7YqQTvoseMdUpw4JmshEh7Kup2Zq9fovKAzCmwrEyPrDrbzDhYGchzZ562tFdjnsR4KyefWZ9Fr",
  "key14": "5GZb94Ajt8GtNz9susYaKFscDYaGE9TSmqNLUEkeNvFCkaaZYpZqG9jhehUbxqzzvmTqVg4jU5zLjoFnWWdfCMZz",
  "key15": "2wFty2e6WcK6BbvBPKDtV8mT8kPKYUwkQ5zacFdh6uxcmVXZ8fmqxbAzAUsGkh7EvzXEoviAtHpAhimK9apaBJvy",
  "key16": "4a4dhLnCcPxQVMVHRKir3HnfQv1EsVyPCyszzJ7yQPCzFYZtyiHePynspFK2Du2Hrj6qZRQHUrfYD9sWVv28XPry",
  "key17": "2JKS5fNt8ggw2AZHrJcjcis4QJc9zeU36gtKwCrwmZAe7LXZH6wJ7eyQ8YJCKYJx3SUeYrkg1JRFVHAdDKUKQaKC",
  "key18": "5Eq6ocBRq3ssNRHggNnpXSUCSaqwV5Y8czMBMeB8QMrHUmujWLTo2gXDGYbGmqewin1QuoGSb6nWLxni5TfKYWit",
  "key19": "33SEJcMUCML45hFzsSvNZW4eECCK8HqHFgqLfSHivh8pvjf5vrtTbKZ7cCC5S22i8RpWKs7EcDptjdDsrvciSuTi",
  "key20": "3JX7HMENhyw6qprz95vjXmhqQREucMKhq55YAzTG7YZBjwmZHLTfuJAhDZ7R2s2hpFovFvXJA4ECXkwVqGLTft39",
  "key21": "5wtipGqvYDTUnzPef4rouS41Mwprn5cYzNk81mzirR2LGnM69rHjWcDfitY7ZeSUbCnaY58msdpVGAp9Mcf35Aag",
  "key22": "26r1RRxGt8heW1ukwbn5sk761rXji7Zy76HsnmuVwphM2nwLTHrG8jovj9s78RjFugtGQUzLJrkTBB6CAjrBNueb",
  "key23": "27NV3oQwV61sR9rBFQXmqXTLYGd2Dr3P5wr1QfhS3rV345bZMG8H5CEo6e6gxBJfu4HeMkmzvvZKPrmg7VsvNjw4",
  "key24": "2LYT1uw3bvK52KSduhq9KV8mysRsFfcy6TjKpNYGxSwf3KcYbrUnwN95rUGj2FA9ku1rZeJJVmSRx269Zm9ZA8wL",
  "key25": "5z94rJsJFEXhbVtq8pNNgTBBED2jSHHauDdZnjSUMvumDjyfj7Gjs9ZSAiNuaRuz6Lt8TKMcDoCSfFz7bPPQrLdA",
  "key26": "4DJdHAuxNZs6XBGuC2ktTft2hQdTSkKHc1iwFkKfCLiS25mkUk3kkkqMpHPn8jZDweQuEckVMU4Y4t8EFNfVT5Uf",
  "key27": "46Bkm6A1NtzJ32M9pAHhtGGR1BFwJnkrSV3kUEKz92NTodhbZ1AbEjmfzrSSsmxFpNRbTrEsbjqHUQ5PoncFnUxL",
  "key28": "5z6XKXkdvNMdLpnfE5jUmxUk8oVHrxRoVMBsugLCjeGBkMTKHMfgSRMaMxz1jPpJcXbbGfECn4mo7riKkh7WmS9i",
  "key29": "42x2tMWCYDHtftrgvUJoXma52VE9WJn5hV96krpPUQByMvKwXe59XCWV23VaPhianhW6zwvazUrynEymPge2RMLT",
  "key30": "4JcnSjsDQPfFcPTZNraJjH33CTH7xN8MUFUhaPySTvqHQ5Pyogzq2FUKN7egMYnySaS4byoJqvxQjGkqfD3w5rHZ",
  "key31": "2eKLh6w7SE6fCs6c66Hr1uu2anDpiMAZEu9i6V9wokWbkUjxCDUYUj2XcgFyvHUdx8XUEchxjYhDrWhVrEzjJdEe",
  "key32": "3o7C9VcSVXpHa2D2ofsbYdp3ZbzhSpsuEAiGFkLBmq9f81jJtDmkmcJtKwcXGRWtHErQMfXEMKkRCAGJoLQpG9XQ",
  "key33": "5mKkhPBAwVxGrNFP6mgeTPD1KyywonoYkDDz5en7EJaK3vPDNM9VaS6WQ3zCDYA5CY2PbhS6tMV7STALem1YhG1w",
  "key34": "3s1MWXY4d3mDpv7eHYqV9tiHAzXppotc2zF3LyzkQaeVmQkafDfZMuA2aydQTM3KoMMy2sEcvBVb1KD1Fg6xUBfc",
  "key35": "5zC7eSvmEwcBJaCjHgybgjyeyvc7BU7W1LjVGmgSx9tRMgqCa9SyTcnZW7LPnBgVrJHUBZkMKjDhx9jJNCzEc3a4",
  "key36": "oHNHqFZYpohJgV9QVbVF2kS2fktxLcEBd6n5Wc2rjpVMgXxBEHcMq1cXD4NtVat8MfrGjtSJiHaXkc18A2BUiRn",
  "key37": "4TnDTa6pUsB7nvQaS5xCVC8is2GeNH4nJfMcEoT2VcGiZuf8UT7e9Xowm2Wc7anTNPzPZs7CEZbXhR4prPnJsNss",
  "key38": "4bZVQPmtKAryPeqPZXaz6c2RK2EEHBumcTtaFcwnHHaafbv2qmwANcJ3sKecsG7MJ3HfmST7KxXnwRi2s4iTMWko",
  "key39": "315cNLBLCcoGtZdGEFZXytaJqX2VGJ9mtXdhdg9ZhqnhsBWD2542vLHqZrRVJznUwcesXUfiMZNJCVLNzFyi7d7D",
  "key40": "45vWc666pq8cV1pFhe9ndVLF3Ro7GsaaeFE5tKf2bqLeFbwpuXcps7VPHbwYPDGsQQZD4MxSLjHsgBykFWc73HPM",
  "key41": "3DmTvBH9RUbe72mLFXscsiavPMfEw3Hu4jFEPfyL87WZabZXvJmy6bLAtvTLqgg9dYZiVM1EcS72kMpPCNgCdyzz",
  "key42": "4DyT9Wei8aVNht14AKhudhFfUCihTb1KDU1LYqV88Go3EZxLiMNvoR9iok6ggiqeQkSnDD6vHqp4r2gvk21K3tUR",
  "key43": "vdaMx3Ge1zkCkaX23HqoTJSPfzFoyzPX3pnsAyCYBPLxvFvfKvseG8giNbJKz2qaLsF4nVj8HVxcaH9vXC7QEfw"
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
