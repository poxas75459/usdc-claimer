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
    "3mEAbWZ8mYxXoqe1287A9Tpw3JbgTxA8TxGkjNgiA3t1bkUT38bahZmxbVjU33M4G3jpu8oxpYT8BwcikhRGKc1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ics7zxCTu5rsDDbDQqJn3YQBRVPwGDWCm47SQL1NdPy2dTFU98oGrPmDcS2RKBn5wfX44b4pDgkZ4qN13mVc78R",
  "key1": "5cah1Ai6yPnSynXequZ3arYnxeUnwKE6BuxpYAh4NigrNpWoDeWeSsbxp1CwA6KjHaQFwPJvfkXYMCwMiUJcFo18",
  "key2": "5TFGK7pWMtg1sCrgZx4HT5zbc5RLkuyjRyvQfnocUBd8nKeVd1sQgijHCEn56HBGoJCXeVmgqq3QP5VXSHDpjvHX",
  "key3": "5p2f8c5cw3sNA2NU11XpDkc9k4zQN6XHyb41xo2FHWefFDcGwHJ7VurUvQPUuyHaJZbU8hsHuex4UUREsrdhJUsc",
  "key4": "fmJFrp5nJhVawXWv4Kx5bA77NdhwC8jGEiCBVdMxCRKYGDqfvmx5crk5MxeCuzUofveQ9fr121GtcwwdfR9vSwn",
  "key5": "3MaYY1KWZv9TTwQPtSAshGB4aMvu5brRSm3fg9ziQAdtto9R98178iGWt54P1NS4fN42DMKbkKw5tKMq1N95ETgQ",
  "key6": "5S4dgRQuN1sn7LnneX76JKQk5VLk2F566ToMn1t9oUcrzQxjXPz4bEFMBkL1bdRZGH4yE51WsL1gCsokgqbykmwU",
  "key7": "LgkyFkk2trvqkRGCD6V2xDk41mcEzjsRMABx999KjPPzJoEW8Fyg5b6r67XSsAQweqwh3TkmQ5bmG9UzCeKQpS8",
  "key8": "4xHiGVhJvNJ6vypciZ7VAQ3Z8Fupc7vepmkKRWPw11L5puL8uu6msBCRPLjXVYzSXpqm8gtvTx9xWN1GyX5Hjb2x",
  "key9": "3yJDYa63vM3CFBQ9NJDPr4H1zJ9c77dfP8VTtjG8D5KUL4K6CwivRNgCZgrusF8Spmp9iwBY5QSqEDFgMiz27oEF",
  "key10": "34rSCjhan1g4XzvBSptpKAYwv3xpzGZ6XWaUJDJ1UJWzFjcZhRm4VwSdThmTRi4ebWM3R4W3MKSBQNdBQhQhPA9F",
  "key11": "67okN1Sykwe4roVvmMpSAAR8yKMaHvXastvZpKwfc6kJmH48r1UrJar3emPNBehkzainrGpPERQQeAP28BZ9D53U",
  "key12": "3ueStqEqEiYTWLud84JjWbGhA6677zycMZszRoDj1pJ2NLyEyysjyd2tJudYBFKgKB3oQvA68abaKVMPGqspySxi",
  "key13": "5F9cdodmd2ojhhVEJi1k9HXRCtjUqGPB3Pf8sNkprx3Y1UAwTWo9ujL2EcCBrLETFUGf2tc9qiMsC4esQYsKYvW5",
  "key14": "SHHsSBZcF8E3PRcXyUMSe1rEp4RF74SVg1AGXNU5igawZ6vtWoTuSsoYnbdWHPafWwcL5JeuVQHu4dgGXyhicNi",
  "key15": "MTjDEjPd3gcYuu5ePNTaTTkoHPBP1h1ANe8w4D6AuCpYdw5Jcq8hQWFPgRAZXHpaJmLyQKQ3FA1PMt93JGHzDz4",
  "key16": "4RurSo8wTGNspyYYxLvVCsuXxdXL4tdCCWjDNFHKPo2f8poLxzjz8CTU4HAbxXyULfFc8EaGHSVHgSqCkLDy6C3R",
  "key17": "3g9WzvS1bQEaiMguE9Vpsokm7JDMXGmX3Ud3vqrxYYZVYcSs6CKm5PeKQjuH9V38aU9wc17uTVU7uobaFUbJfAAG",
  "key18": "3cLL1xC3fwez7KM4eppjZaSkD5CGsm9biYbvamxtyCd5SgMdZ9mKRTQfLS9XrZ9fy5x1KaJ1cxSGQhepn1znHfmH",
  "key19": "61muuYcooZNVqBUcXXpS62eD7otzRxKmWcXBgTpkbH6ASporpB7tnpcSYHKGobTJyAoGbAurMj3e4mcgvvoWJfc9",
  "key20": "5j7PL6psCddpGn4zyF1wm2ZJihXhDY33SPcU9Qm5YtuXeST8XpvxDWiC3YrzqCwgfitmgo7Yv9yJfbaStBNQi6q4",
  "key21": "45EHDDhCEW2nWy1wTnhsvTQQZxrufr1DXuAJzWnNiUWeuYj3tKVE5X5PY2pdF6ixyPkKMHtGSeFQE6k3woK5Ahiw",
  "key22": "2MHyVti9J3KVb8Y4Pj1yy9PjtK1agnW39YGKx869wuxYiZVqHZnDxyb8XsokC7eA4ZvXi3zaf7QFDGv6ohqiupEH",
  "key23": "4kxCL792CQME1sv3dwd2qnxD71dJHvdr7C3hAf7ibJ5P3vGcZKfY5dXCcHYMg1zA1yDqgCFYnuPxi2uNPt1LLNFb",
  "key24": "4jH9hiA7RNWyfSWqntsDMNoBY4F4rWkwbtPPafYvruXPp6PmQxzPuDKAhMTaNehwESceFJ83JUNJCayidXo2wJbK",
  "key25": "dc7ARhKJB2P7kChBAFTvRg8FVcTsJ3sVBM3iBDb1RtvemDZNXxCLwuEK1X9893f7ASHEaA78Ndx3jY4hHE2pufm",
  "key26": "4BUew7oYJxpviT4FtyK9b2pyd9wXggvjZRrwVE7gBmtMdu1BXL3GT42Agf28qCKTq1M3LJGEDYXyGCnFLHH4LiVs",
  "key27": "2n7Kn3avramff6VgU44r4P7g383wKrmY4x3xyk5CqmKZ7eEjWBDCdiZiXfdiYbff1P4FdVa3WnYjtfwRD8Vdf1WJ",
  "key28": "4ZxMS7oagQnZPkunnW2vucuDcuceLYkCiZ5uaC19DkvUZrxFSz6qE55aXzGUN7Ppf52eNAktvo7jwQxiqNKq2C5Q",
  "key29": "2ff8vVQ2FNsZS2NLonxJ1vKmk1411aVEJHrkCGWvdH9H7r8JMUn5yuGMjvZHeHkFPELo8zQLJtA7uNUsGXJN4LNU",
  "key30": "3raxDx9i195u3GAQiFQQPJhAWfFvbgBp2WThH9trwBB5EyDGWKk9WYKtRcBSn3dXL4v2Nt9GpgGygZWg3bCb35aK",
  "key31": "2sh6uTsdCGH478X9ayH9sEyVHkXdwaVwhrYLSSJXwmdjwy29Q2gx3BpcbtAMvJQVSbZUegTAYm9YFByjKTtiFmYe",
  "key32": "5SNs5aGQSaLjcNHgR1YYj9UkQPs9temLbutgfiN86UxxzzJCzvsHMLeokd81CqEPTBnkrdMvpkpJrbSFBzFzCqgt",
  "key33": "5cYcuX7Kxx5f5NSKKZe6G7vkyt9tZZMw8ugXeXmmbvRD1bzmEnMgwbJ4K1MJMrz64VQj53MUzCAgP9NgCk6j82Z5",
  "key34": "sbCxi25MGoPvLr6CMQNKhpmgzjUWubrtyK7d3xHB4tCJJFmtR6jHWbGE3y9ZYzMtuXyDaXSFyNYdot5seNbf8Qw",
  "key35": "33HpFJJFE8PXKtPMFz44PpT2VRjofeVZX1gxK7ZYqir9B9tKDxG8PMkrQ5z3oPobeazxzSpxCMf4Zkq2xpQhaKWD",
  "key36": "4rSqibEMuykNAAA2pGq1LXVF3e5UsvSLu5oLaTERr4Fn6XzdV5XBz9wXsjgASfyBQuSgvEKZZ2oUFi5dkSgEberv",
  "key37": "4AHrr2UQdRZDsYaYx5rEr1cPitx5dthgPcEyRsRxCWVNQaNaCNqNvHeE2DJZx1YLFRRitvQMEgKotoKwQAHd8eLp",
  "key38": "34nfKPTcf8pjLoRAux44zRvfWdYRyDn9EV1iFkAbaJMZGTQBgTuzjUajXiqUD9LyJ5NmZhisZ7sj9qdB7YqrtKEv",
  "key39": "38jZRFBNcEyrViWNjyYrnjjQcWgMEff98ihRqnoDbN5aF6oN4NyEGoEavZ97pqYcptreLNrHgN48kBwdxzpGsVmp",
  "key40": "2ZNvm1bJ2xstkJuR4FTscVxviA4VMQcu43bMLjN4N2ZV7jNYehDXwkQVyASVhchaHcGnYJrey1aGzCzg1BG4KD5x",
  "key41": "kRP6Rnx8rqdvCe1gFJ1zy8Jz4DykC6M69j7jjLizuAQCBhSneiwccBHL6amWd1Nibmu4sRyNpdRDT1YMtHyKfY8",
  "key42": "5nUUSxZmFehXBuLzJUGNht9PdJ6ghsw5S9j3cnucWzTtp8KRhcuyVAapaey7rHJJVTSfapZxVY8GVHGcVb93MSBh",
  "key43": "63bFc2FEh439gMHkE18ThFknpTZivf5euc1D6H2p2qy1vye1yBsxPQMYN1GJ7ycdpU5MQZaGfJJ8QSJiRQP7DdJy",
  "key44": "2g4Dg37g4JUjkdLxaR7Y8k6tdkoEdoKJsqnMVrtteuDzGiJooMHBB6ZCtgv3Fd1XjzbY2iHRagPW94q8kBPCJQu",
  "key45": "2acLEELwYu73mNgt4p8TUF9Be3NBfCwfamRPMEji3SfZjaDQWZTptc21pghUJxv9P9tvq4WCwzV3amCW3kSeEWMQ",
  "key46": "3E8waFuk77Fj7KzuNEZuZVbCbNrNcc4XrW8QLyLUUJNy5pnjrNTNX4eA8dpKysbzXgBMtozAqbkXq4J3HaPZxSx8"
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
