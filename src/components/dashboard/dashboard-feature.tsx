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
    "58DzXwMEjkqLxnHbXdKZtppF6bTkg8XV8ozdr9x1yTMb38f29cTxyFQfYu2DPuLb7Bg7fkbaj1rfXmkp6bWM3gZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Yoby3zJVRZFJ4Cxvfz4FuvUD3mvtBNU8CvrqsZRcHw67udKpbQAkbum1sUhcXJVLAQyH8ibKiwzQ1Jg6Cjrbypf",
  "key1": "3T9r58mQnBPAwph815cK9fZRAkiHFMFLGLWvjEWAFgcAdVok9uB3D1GwriBU9fQ4xdnhZjGyXxcCS6bMxe8LDqtZ",
  "key2": "JPtKE1U9g8yTRUm7mPNfCnencuy4zNBtChTS2ViXK5oobLkF1JtSgKcGp1GkSyQA34CubGB4B8QUQfqh18P2gN5",
  "key3": "56c9QJL9RC8o52kmqMkAutMnKqsD3J9pHPBRV9t1Cq56tnRiyEaKC7vYy7bJWUjmUhx7H5Z2we3MLyiu3YEq4g77",
  "key4": "v4yeBkAtpL3SaFQMtH6KsE3FjFDNvcBA7vZB2U2cs4mZkTSeoXg2G9tR25T4VDYnypC9DwF7WT4cdEhLaSdKF8k",
  "key5": "3ygaMLkdnk57UGY4AWvRV4xLNtLfxoHEznptZR5FT2L31CQPFqmsz9PGAyYkRYV2UtSCSbeF2bifpowNfm2dH72H",
  "key6": "4CvAxoN7py5o2Vjb6Qc6W1jgs2brpFJPfLZRZTJv5qQ7eCpZ9QvsMeq58AiLoFAKFdz6a2pGT8HSRUe7nuBBGHxi",
  "key7": "4WK6W5eRtS8oBepUDyJNasEv3BAhYHsyZ9dzNzCitM5V4PBfengupsy7whvVWVEKuyg6EwdP9ej4n6tbSb7p7oTr",
  "key8": "2gcyUKAfdgbpd3bV2VnphgFZBpudmp2DbZKyvALeAXrJD7CaaUexnbtyzVtFZxEA3bR1kSFdFaxng424AWbk8nkc",
  "key9": "2gUmw7KsoUvQhwBfsTWBczrjU4C2tFSc2CxamGf6j5ymU625mVbGhWMbc8S7ZQA88RdbzqxqjFGpr2yBRiGG2oXY",
  "key10": "3hxQsKuipa6A2zZfECu23Su66NBthosnQABfLSmJDEF13Gm7mnNptzUYmxxQ9gD33hWRdjQ5udvyRUUnkBkLiuKU",
  "key11": "56SAgBz6Dpu823y1SzkBwLBaoCr9kxdaWzZjJnarceoAqDDYqwGCHXEfKkprof6SeSvyNj7oawbVBwB7vm1o8JmX",
  "key12": "3MafDF7UWx6qnyeBrJ7RhQTXgAZyHZeYiEviVQ9fXyQwLWawWwFALa3sgJvjEiUVmfaeKnUcaChDaRN7287nE7YL",
  "key13": "AnKNdndaJt6DAFdyM9Yys4eGEY9ZcWZS7jEedR5A3tA4MUPHMgrXvqyyubXzZhxL3qfjXDipMGxJnN9ghxJuocs",
  "key14": "3RdEKdZY3LaFpAorsCpWMvxJeWNdMUZ9NgdSkSjx1zUnXDGeRQ9pbm13Teo1oxjc2YxdcUFSQuc58HxcvtY1Yrbt",
  "key15": "UhKk4bkHKa3iYXoBewxJUhZVvVZY7uAo6xS2vKnw8xE46uFJxcw8CVruH5rmzjdREyY1tLW3uPTLg8QefTMHHf4",
  "key16": "3okbSpiH49aTAHt2EVDSPSEipBgHpUeaeyQVovUWmAgYrCFq6gw7MWuVhw6XvkkfgD766RdPd9v36SArEtrQDqQB",
  "key17": "5zWJX3fDTtKkCtLxX5eFq8gmxPEWipwgVpMBSiNFjKvnhF88jbY7MsFrgAZ3shSJCKMGEDTvq6mLV7NYZ2rvs7KR",
  "key18": "5HZTPTqJz5eTFK7Xb92S4bS992SRA6gN7irBFmU7zdKqdPJPFHdXDm6v2cWtUtioHZVjS5rHsvqejvh1FPiFuxKH",
  "key19": "LsCkhKkDrqcTeGZto8DYsH6ooukjMWMjanLMue49UEFeZEwQkzFFuLXjwEwwyT3rFXQdYvM1yFAGuPfep9dLh1M",
  "key20": "5KyLg3Xqrn8N8FtEbpu1a9oBTciDjyTr8L8qLXF6PmXuTLfXXkTZTzfMMi4D8Ty3XSPN8AaHaAmuYsEepCs7PcSq",
  "key21": "3UB1AJySCULk2EX4iUwoqFogkVKGiYQYV72ubUDmMER9Lrw9Uw6WTGAGYR3S2KxJCqKuWHpENJe6yknyFDPinbZ",
  "key22": "5ajR9uKriPshgCmByKfTutamj4kUPnKNC3LdM32EWKnSG2yLxdjgaij4UdGJXrVXuquCTz7zSq9zngD6PWwUNnXf",
  "key23": "2AAY3gtrLehtx1ZkfUD1sgFuV5txkdtGNjVigP7n6pVS7oJqHgRAFoN1PFyribLVDGc3WBuxMfz8qNuZFsmQd1BS",
  "key24": "1iAWJoBt2sf2ENY6f2F8FxVnvUH5kuwQtgF3ja7LNB3P7JiNreLz46VsS4wkqCRoTRzmzEmCrxeWrKVGLEND8KS",
  "key25": "2ctqd7MT567XQJ3yx6L6BUsDR9zUMZQmDaRS4cG5zRBkY6oHwNkCkxEk8seopMYBdQVxdaMqS1z42zD6YNvu19Dg",
  "key26": "5hsA1WPiWqD93LpSgaegJHjnySP22UizJTer1TbwYLC9KCWQcJMHLjhSd633DfEiki9jz5fKDCA2h1JyMATyhwwV",
  "key27": "49jSkU8qoDxLF1WYtEmFQ4oVpdj7NTtKmgcuPGnYdJTBq642XywzjFxNj3kNTDFN95iL1PGF3vyX9pFQuFyrahaV",
  "key28": "3NkUx8kLUWn5HE8cz15YjKdgoe5So8noP1xfEVWHSmH39b2BMCdNqsaiscswJjhrJypLkJR8uT1hudHgqRBeTgfN",
  "key29": "27ZkM555EmCsFPJxbv67bS5uCL2nE2JsF9MTAEWtQfHTdEJjYhpymoKgRQY5K2GozA77hmTCaApgjtG4bbsQ1Suf",
  "key30": "2ihPxyYgHB1YvDr6LyqpbMbK32QaTQ5ddHZYx4eLbypaHAiMsDoUWk4ua2NzZ9ioXDkuj24mN1CkSyLZMxcDA1Ao",
  "key31": "PJyBy4d3adGwjZkka4db2eb4FCijZ2uDBL2EAp8dYq5z8wsnVqfAq3iUif593RT6dAb8Rus3ahrnt9b7DwBSVnF",
  "key32": "2QAfTenSJ7jJC9EEv2fDorWvKgZTQbkTjEVcU416Z21NBBv2vhWgD67S6n8CvAfx9thbjUDG1Bn3cm9P7X4ca2TF",
  "key33": "zEwMcjbDwvSKNrQo3894STJ19ok4U8MvSjZqYBvHrdTQwMDTh1rHDUsxpMormFjagsPcEPR3sRBCTco3kNwwyZF",
  "key34": "2J9MwVPJqHCUw3dRKWbJVX9xssE6ny9iFbKBJQ3MxFhT5FZ6VtF3HmRhEghFxpxww37PxL1zSPVyMMJi2pRLiYcR",
  "key35": "5xMbhnZ2QnAr1sXndhFKGnf2Df3miM4aCX6eTKKPnxyvFq9kvnK3QCb4w8Zy5KbjX8doHBVPpKWEzdhXfq6YDY7v",
  "key36": "5v5aBLggQwQsGyKM9Nt8UPjC65kXsgQdvQAAGfotbgrYxW6NCUgEpfLvoKpPdaxyav1hUGMv25zHmCaUY9N6cZr4",
  "key37": "5ZGVGzxdy64aL5fjzuKVYUGWKctdo9PXRtuG4k1kXdcWSM3f4HbEd8uPUTvfZZai7Gs21JejmK2eBSn8iEbuk2KC"
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
