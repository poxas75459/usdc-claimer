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
    "5L1ypSNtkQMb6WVeGUfYSyDHtMMkCQDXQ8Q8PUHB4UjPqaBCbzGF3RtuBB9G3Lo6KgiJXrbPYbVYtxPqY3PXonvj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3imcT2Cr6yPdAz4iBG4Ah3GFDusADmFRRuZhsrqMop1i8AuokGnt9oiK9g4fb1hXf7fBbT8iQ7uP9Nz1BvuQdWgp",
  "key1": "5yfUwcs7PNof9kAMF3xrT88gU8X8JAmUqbaX4CHCMxNFZkhBL5UvxJhxRS92EiqV9KuSuDpQ76qyhp3WYNQXMP5r",
  "key2": "2RC1Wm6AbYgd1DcqqqGgrGmKB5sHKe7VyhGuSbBiRY4tQLegvpVASBB3Dg1Uhboh84WR4DzgbRpAv189FSZJwQiZ",
  "key3": "5aG5VyXBwPjftEFzU8rSn2pWsAyGkuzcyfBUvPynrJBFVJ2tAsvaBBPbF2LJqMsqqTiwoR8dM9tg8V9ZsNQ3qP8K",
  "key4": "54dw4HPLazdnPgmDJTrJpo6qkXmtQSCUMPpmJYAaBQcLuYXcqJrWZ5Yn6GzNZVSMFth66WBGcjorVwkwx88UUnUe",
  "key5": "5SSHFK3g6z7EgHc2WgQDjtecuJEw1uqsAJ6t4hZFq1dLHAxp3snoj653jEUiqesg65dDjjWykV7mPWyRTh2yzW5C",
  "key6": "4JmwTvigUqYWUjdwgKXTNEtCXFxHMyc6WgFcD98NyaeknmYfBVvocBgyGXhKxhJsgAwPspdJfwPcdAkrx78EvWJH",
  "key7": "4gbrCPXvAYzDihEhnvFrLdZWDbrs9Lk4myBq4yXqMCaDyjm6A31v4YpCE1xePvYj6qXVQWWL5swNJUkSkfH3ykJ8",
  "key8": "61fr6CaFeCHoBLGQcYrrUHduw4RLwroyaMSkXtYW84jdU4hb9cRGuHP7ex2wvNDqVc5DLzcrcsRj42BvisfwQurL",
  "key9": "3YJiYv3yJp2gteMqmzgeWZTMQd6J3KSwWUoJDxbsxp1h2qg6msxm1mAWjjuvSp5krZfAXNb3cBKMM14rCjAZNaR9",
  "key10": "eX88becQcqsHm6T851m1ujYbFRwaGPAKZFtxZWX3DxMFRxJLVCdjCc2xxGuWbNQzVji3WojAeRwXRiMdkysWiiL",
  "key11": "3vTk9QTPvCxUTZNuNLk2XP6fbUMMTUBucew8YLzKvZKKmh1YADobkrwnBJpCiVxqHvRHmG8dWuXUTZskCq75ghkw",
  "key12": "5LKCuJY9YKTmXGR7LVyMpbmRdNr8ALnQwhKZEy1McF27WT1FATrC5YLaTwc4g4tzUbMwcwEsEVzux92Rt2GTqmNt",
  "key13": "4ft92dMuCL2nQVVX2iWqP5njrRrCbD7vcAUMjRcY7xpxDrPirauWmc9Et22f8KTnriQUJWL98Zg228R652CDnUr1",
  "key14": "5CEJ8SRc4ec5tksmqc578kcY8WdhoBdTGTK1oXhaiBzANRoHN14kmUxpw13F5kXHCiVA4UR3xLNafncZNTWy8me6",
  "key15": "2XD63VHgtqVrwr4Ea84cTojERLPBfEDFaVVk7PywnfRNHS5D716VXWbBGZNe3mPP261UY2LFoYrYgs1BATtnbCKv",
  "key16": "3FZ6verfVZybzoQtch4HSoXjJGbcnJ8KbqPd6btyHB4WcLb6jpU2VLTvCfcKmTDt42KtEmmpp6eatz7wF1nry75C",
  "key17": "22jHWJvbYTAfUm3dXb6VevRww9XYc2PAUhGTic9SH59XGViuXD4gLWvBv2kWrZKkyConujZpALQ3wbsLfanGuM7C",
  "key18": "3A6o8ksuQ67KUct4DM6zBgRscBC76QJouUZuSNhN1Gm5Lgv17Soa2YwxRv79NNdLF7wUH6RhkyqAnwmpeo7jchFq",
  "key19": "2xwBXE2HX5JNiL8DbD3RRPkAPCEdBP39Cw16fM7UMgrEKzSxzNuvod1X1C4JJeLMRXvAgPHYT3B1b8eeLLHorz7b",
  "key20": "5tw1etxmQaMxa3jj5di99scjghWNMpTk8ee8bLRdVBTEzVhgzzoSpB1sttfEqtdeWxesbwoDKMfohqDAax9d7x4e",
  "key21": "5jSYg5G2wEMLgGj5J5gevaBxgF3bs3Rz6LiyfBiSUx6Dxw2ZEv8E6VbLmKPSEwyHy6nA3txbZbYj1cC27s8d5rD7",
  "key22": "32eqaRrbvMyy75QoTwgN3ZcmJp6MjCLJd8fzvepF6gou8mozy1t2rizDPH9ReCgEqGNN91o5my1zEZXF3UkTtLqy",
  "key23": "2m6UYokTmpaShhH6QztiiTNkxV1dvomNf7MXApRZtmumauvK5KPP2cDPGGsTNbrHSyDw3DoPDgMdG15uD94QGLU9",
  "key24": "355pMZKxyogdrmNcB1wAQcpc28NtmgHT6b8vfPpXNpJj81jJhdeggiU7AnMHEXNkKG6uonGQZ1DdLhBWuPWy92ka",
  "key25": "38rQjnJoyBWbdknxNPbM799ks52Zeg5yZAy6qjCGM7wX2EqjPW36Kr5KeqTgRrDx5H1kdtcrNyh7yRUSNmSsWiUc",
  "key26": "3Ei8M95y5JRQRgrxyLvFD4vGf2PH2fddtR8VwGFD66FpiSCjgGTdVwZLbBPr9FpFwAMig54u5RfdEuWFyQ2tJCYw",
  "key27": "2fpNQ69JC6o1T58sjkwEQegq6sj8f318UARKzB9zJ8ZrEAftNy5McKq9LRSbeF6r22gJTZEdxHUVnvd4P2gSdjbZ",
  "key28": "5YjhfJBY9FnvEDEYr12j1QLeAdbESu7SQ9EkhgQ8cDocNnsGk8NbMGxRMwjUabkYgQbcLXwEfeuMD9hpmQqPBU3v",
  "key29": "2BAvNBXGwz5ohJ953xjfDFyQnY6CpxUqY6QFvZ6jkKHCbPpNFrJR9Gz5NXNBkfu7Matyx1s8avKkA8Q4hhFbyWXJ",
  "key30": "4dmQ5fTpWmcczpaxq2C51ssEWneQjPJmC29YzxTS41ieeCnCeg6uqo4aejvQjMLRFf6gsWwuefLMPVjUcUvTG2wP",
  "key31": "5yu9ma7Zgyb4yYCcw56uJLpErVXmDFFNtJ6sh4KYsWAWd2MzXeZ24EKuk5DeT7X5GWxQbgv5ef1Nduh9VibBL11K",
  "key32": "58qcQjbCJaPwHJUCZqUqxW687HvVr7neRCgwpbksRuZxZphUpigj7KGvSx959xf8nHboQMxjXwXchvFM1D6V99SN",
  "key33": "4Q1WJm9DVY6FKwBJDW5rr64uVo2B33S1bJh2sTQKY1XgoB2pXEELu4uhmVFWhb9VSuQ8ijMZW9d44TzLcR4ydjep",
  "key34": "5Rh3ssARHtAkHPJhJ3ih9fgrjdfw1QPQNsET9BzCjUUw6j9jTWVBagQ2k6CZTLLsC1j5aC3u4Euc9nDj2cyM4Gp5",
  "key35": "41TfQgBVwizYhYDBLAcXunj5j7mpLWEF9qsAqEqQY8bLZ8EFTv4qKj8HyBrMLArHfntNuUSnwb44uPbaNLYQtekX",
  "key36": "xzon911KjNGAVvcoUEY2MeE91dzXg79TJiy146GhivfKgGvLYEpNP5hJh12KYcBuydL7qvWzaDkdTdTaxxXp6Wt",
  "key37": "54CdzHKqkcu1UrJTriW2s9MRTtdBhDoEYveQfaQvBW7YX37VWUUs3s6HphvwfRT13hxbtoN9y3FrZewUQEp6jNWo",
  "key38": "2c7h8WQubQQCNXthxdmb2CHtwgzhMybCggvags1NQLohjdcvKKFASsi9cYKYEH4sg5BsjSqyxEJqSeHi6Bet9Gde",
  "key39": "2Ed6rHvwNgdiAAxoMJAgJZ9KFJr3PTyn93nKwKMVUp4ufgtw8HZw5n8wGHGQKUBTJxjYawQ6ePQitBMJ7LFKj7XP",
  "key40": "2ejoaawf297BTCN2FswiEnkMv7irxu4AHXwMZ2uDMD16FYwea2cJ3TJHiShqUK5cYP7TkiNuXPVVJGT34HrqjTbi",
  "key41": "Dx4EhDgPj4smdP95yaQ3NFhGJPGNVNeD32Pf6XdwYZDPNGTQvrkD29XfJUUanNeV2SoB7RZZTPEQPgMJVCrgA9v"
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
