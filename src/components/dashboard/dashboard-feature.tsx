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
    "25YNLhfJRUXTVGrrUzxpeyk6ErSbtxuJeRyKvopWNFdWSPyR8dshRgMJhz8A5UqyyEB7wnyAdJP4R3HrPNjY1GUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43SrscnmF8wCGgtWoh4zvNzLJQwKDoH3ejmAuxEESLRFUvKtLkZbu3Ro17oepKfhDZQ66ZoYHPB9UiGLG633rJr9",
  "key1": "4LBtZexj1xp4U6vUtyvqAvR8pKeLBuVsBwVhbtpCFubtSBK2RGwAcRGHMLLtrXN5YUgySRSsZpvA8k1q1j3KrMt3",
  "key2": "5R25iZitqis2TR12UCoGa6rrHBPXNwDoHE75Cy5Vx4dyqWHj5QVVaaFiB4JazeEUkNME68otNfcGhhff2k67Japg",
  "key3": "4W5ATTX55CCJgEW3riJysXAEg7vd9kK277jAjTe3yoNFeQMP8iYTVThnnfaaAtHpzsqKwzmEy2LURjV54xszFSFh",
  "key4": "34vDtzgLMMBuqPd82UjNLDp7do8RwtVzLx5Rt5juvufMuB78nwUreUQgZwHJ8HXKcM8PVE2UZ4XrdTCuNz6zbiBx",
  "key5": "2MMaQq5VtEGXBjKuDyjL2Ux1roVCkNgP1THp5EHriHhDqwoyVcNoLxno91JwqUanEixh2RYswC381yCsNRPdzsBE",
  "key6": "21XrDGSH9zQVcHrTdio5G1y8W1g1RoDjpAuZ9ZQzeCNfb5cRJZ6qrVBTbyz4xQ8MrfQtMesaPYYSQyx7LC4bGxCb",
  "key7": "MAEJFZo4XxmPKqt2RQKjpGAjndhQYgYjUByGQS4R5iuWXJLRT3zzMa4Crik3FoVQoyvEYb79zWN36WAkjZTMYfa",
  "key8": "4FsShfnN4XKfB5dmXweUxKSNELXGfAQK9ERAehXATq3nx8q8T3PqEzA5g4mzNnQ9wiTKR7ZXewCizMp2JYHZsJY",
  "key9": "4cjEDiFyY46spn1t6SErTbD1ri16yJ697bqRdE1mW5goWisEJzrYpP2XWwkMzczXhHzBrsokbEkMzcabrgCSqXru",
  "key10": "4BpAD7hb27HbBwMpz6mZy3TNLbdNdkepJV7ZTGQyJ1ZFQbKXaQn1ssJ1QYu8TM7fXrAaqe5w3pUwXqWcfkcCUXrm",
  "key11": "2LjRneuywGDd45RENx6R7XmxNDjwwP9VMJauypM2SKxsU1mwEQVSxiKwYHC1zp1h7xgdSCd5hsB97ncFih2X2g6m",
  "key12": "61n6ATeZn6ZjCFJ8NHVtggsbnUaNScw3cipQ1SQfEtvKwWUH6NYAzLzoDMGWPtnbB1947hreRSuegpivUCgpe25h",
  "key13": "35vWmRCpStjPSYGwMUjZWry674uNcdRV4Ts256qkU7ssvsoPPufG5Q1Bgzec9dCJmXwz6rpoPCraVtU2AQg1ZqoD",
  "key14": "4c2ymDekYvV3k6jtYeHmmW2JympmdQAfSEKubsnucrPPrMzCGv7FiuHWnUNCfd6e1aHp7Bih2ovJUffPPw3rJfDU",
  "key15": "yWzWSp9rvhmib8NWy2wvFmpzBuFHxhhCVAemi2oXE8LmD9FVWXJc5eP9m9fRzk3EuQkVoEUB1tDcSjPVFhN15Vo",
  "key16": "3owkx9phLzazGXoUjTvs96TaSTJyU56VoguUbWBmafCK2iRm3CeuaAHcaZGZbzCakmxEG7eJFzHHoiF19cCHH2Cq",
  "key17": "R9sXEoMXnRCxr5zzbj4BjoDXxB4agm4vHgnVrY9ZRygXTmmKpizpeT86UexLDKuy7Q6a9ZusBTA5tJv92FDZNAc",
  "key18": "5e9L3sfTxcWj3HQx4Q34NJg4RadGCBELVCtk2ciaQcEk28vrWNnp3aVXwbbTheuLDV4nEYWpsHr6YqTKrN7kRfL2",
  "key19": "24Q17aZV4PVhBCJNRbZ7HuhkZrUDdFxfhnA2jeTboebf2SYhXzg4TyuFbe6egEhUQK2GQfQim6GT4BUdk9ZN8ZWB",
  "key20": "4633kXHd8QmGqZirnXx7magstRHrYPbXtEWPPShTMoHoPAhUKpjKkgWp67VQrxg24pMojwiGbwnNFFDfYKRmd6nN",
  "key21": "5D6csQUAmr5ECt9jui7wMNF2DAr4Dk5EAU9VPXiNqt43TF7LyXFeJNPywZrXy3RrLungLqsimiBX5q1wTq9YSdhX",
  "key22": "2rg86VU5Cjd6a2uWE292PghHSzRHusT1HWkHjqJLbNABJonMicJvqo9AYUNbaVRLbRW92bFdhPQs8MoJGbXE97K2",
  "key23": "4W6FWGzbNwqejBGNPpGspzDfGRmH17FWhVQAjTr1skFTGfjUXtmMsHVYVvWgiGvS4aG5pT35gG9G3kH5cPvxQd8Y",
  "key24": "5gavdAF2kmcxbjsxvcgWnJMnHCoyf5P3wh2Ge9h9HC6fNZeGHu2bw79QX3UKhRem2G1Rma44gre9MRc71HDBjZZ7",
  "key25": "4Hmy9UawXnijxsVyGhm6SuAhU7jYDABYu6vEuLbzNk46g7R4cJCV2NN74735oSsXu1zJCosSePdVcqhry11FMhmH",
  "key26": "4EZHvkUSemLpx3r7LqKTPgsHTSVG8PsinEKHXR5EKXvPpAiELaYrUWWKUwTa3gTtAiRSb6w1Gh1L75cqpsSLiZPo",
  "key27": "67GgfdwJGLppxzKanQzWoWYsfAgjxCa2VYzzTFw2qsXWyRJvpRudQA7WZP2fbaGnxVywCMRGWzzaZXfi18c1rgK",
  "key28": "3WjWDYwBSrMjuBrZGui4UyvmnGEieucpbVNpU1MMhADJhituUUhJtd6w8tymU2voD5WHAbdTAHK1oNi42A7x5SQG",
  "key29": "32zy2eK82ytCzfopkUrtm3xtukBv7LDwLcRufRVL9FdFNEHET3AJQmfb2CMjnQUbNNfPXDcKcsj79Jvpv6Fmpqix",
  "key30": "4PPxhowm7wQmMoJd5TNc9AQpVMbPftdKr2HqDWsggEmZhpNk3rFcApWEQD8Vq2WZzdqspRHaxd6YnwbDGZ5c9C1r",
  "key31": "4QiE9B2tPs2BgdSLQK1FXSQn6paTNTjTnLkrtCQiZBww1XtUG8LSw1BK4HHL6apdKbgixEzcndgZSCbrAhFqrHhC",
  "key32": "5yM3kTmk1DsL4y8BTWeLXo9FNaEPTpuVQuN7uMcEAJ78PDVtamrFy5rfA31kv1K6NfQ1XYKtjKdEyTQ9SJd7fxCc",
  "key33": "AANpcHmEZMEGc2XFMZeMqZoPZCgMxnWNa8LMbhxbK8Y56EJ1f6WYynrodKdyq6PcT9hu1m7xAd2wVgMmGvtfDoa",
  "key34": "2hn2rnWupsedAiutfWT4gxvFFXJwRhDdBgvwjh5odacWaQS8H77sQnVxYnMsYYgM1QHT4jnyv5jWtVGJqTEzjnpJ",
  "key35": "CAuujRjJsqGaJqym1LUfAwn3D8Sdkt2JhrNwmcfxKd7bdHkxSnvBdU8Q7jH1TviVLAFV7a3XiGpb8QiDF1hMmQ3",
  "key36": "JepQiiN1wCHa2bC4LvZzs4c8Na5z4GLY4pPc6fQH7dHqVUhVH68uJw1YdWdanQjG139y4KdGooFztJgtky49Y7D",
  "key37": "dCYYxDqike2SJwNzMWKz2erWHPyAe4tWXFyZYRgtX9ywKwGJdycreGbPqpMa7DHC4Kn1t64R8FPEeCebzCCkR4E",
  "key38": "5JRNzY3hYjMBKibUx98f1uJcxAofEiPSS6EjdxyxHFHjTWUSuoQjkqZEfyhPEyVamLHpZcMP2NuQhSpapDGdAb6y",
  "key39": "2KQWzhorrhTAHioLz4ucPiN7kehMa7vtY5RCtwQZKfNEQJ8CN76k4fM8nq2MmwiKU2BrsJMoc8Wr6Uknsi15SStB",
  "key40": "4RKEzVMWvb8Lsjd4FcsKbLoHK3S6Yx8ZzPaAVwdpktQ5QAm1Uv1w4TLpu83emcEueGK8bbBa5HMfAx26RbKmCfsi",
  "key41": "vvHgdALbZbfErPxcpomrtb4pYvcTV32wGyZRrMVRoh7GMoBor7DwdLri6RTHuvPBRXtmeTT3VczXaWEQzGa9F2X"
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
