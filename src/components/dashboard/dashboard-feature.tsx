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
    "4XfZFq2AT2fSe8cs8rgKczpn1ufngHPq5HpAE6jrbMiXfSEmiaUqqVHWnTcTK6a3zKJhMTKKHCV9XmNK4TeZpXhb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NXGd2J6CSF39APSsaJqB2WgqCAkP6FWX5dA5VHVBZ6VcE8tRLEwNLvdKwGkg3Z7w7BFFGzfVo5qiJtfgFJgjvkJ",
  "key1": "3kbpfWTgovLjpvSvqJ2XrwbKvJ5uh2peJpMGGgW11ebxzzjQNTj4naipq4B498VdnVqJHGfjT1Y7pwyhDJxqXcki",
  "key2": "5FuYSAWK7PMv16tc2qmYv2kYsnUtYkK3jEjgvx3ThonQUAxKc9AYT67AQ7rFFr2wE9safUWcJqNxvfehxeGXzV6i",
  "key3": "B46zSkaCaFC26TuirR3rB5NM9J8LSm84ZFwH2JHgxdKmESA6A422f8tMTVycn265tSqiTQnYGqJaaRT77AdKRYa",
  "key4": "4z1TpiystkmhyQTcsd2Ss1KNggAP6TrXrYRYySN2WrLgGgLFYZiqDdKrVqLyjDFJgCmcEPmkfvG4VddzmtXKVBS8",
  "key5": "3uDFA378NKE29AriLATrG5FvQP1bDn4N2FJRJCyYfhxgeGMUuXcuhsK9SkWsqzHB3zYJ4v84crxNtVU7VLQewp62",
  "key6": "YHvMRZVKa1bXiJkNNd4rnGbmM8KKcQsJZkN314LX6dczMspptaLieuJev6m2zDg1bNFuBeKYoi2AzbsDMwrpNWE",
  "key7": "2dJyMkCZGB2YpUQkjbrQfJ6bEQs5v99xtXCdYPfdZRNctKDgbjJ3i9NcNDnum6uTG3apqqq9xw2iatAxsVJBsUPL",
  "key8": "3m7J45dd3xBGa9F74TXzFcAws8s9z7FmhC8wKt7oz5xKY3DHoGbDVVzUBLfXeTb6fCPbfEMPsyAPKB1AdK8xeTcJ",
  "key9": "kM6frt37zf1g6DGce2ZBcUmwkwhZFyzw14mTXrUPBWFef1LRJBqrYZXxF34gHDYv8X5XMqRWERK3eBDXcV8RNYP",
  "key10": "SXVeBFzv5wRZqNrqLz1viq6gt6dWQis9zp9EmWEkrajjxejUR8cqxVkGBhy97H69KnzM44JqJPcPX95znMfVsV9",
  "key11": "62swxWyu5H8VRmoMh19VsvQTj29xupB8MiRd1yYZKniwgc5f9iyGL8hGMxs28LGpuQvJu6ovTP2ckigwRxWS3EDS",
  "key12": "53Ykc7W4P5Gbb61E168yMo2TiTD6CkxmkaHF6dSycpR35KVY3r136ZhiEovmD86FLs7D7YPb8ZtsonPcJ2bH9gku",
  "key13": "5Rn32zkUxt7EjPFV8ccXjWovJbaDwthPt198TDtx8tPFBcfsWNxRzQtbyG6bMyb9cpxuZibg5rLxsZefjJsAmJrg",
  "key14": "5NDZGDAGSkqWAgHtpq6uPt6BAtBPQn5GEBG1pf9FxKbAM7o8Ngi9JhL1cuE3UQmthEsXYhFRNWZJJHcAAoX41oAz",
  "key15": "2dQAPmV9nZyj4iD5ouN5pwgALG2ZxPynNkygBggDQSWQNNC2pdRai7DhyrvBMuH29HYArJg2XjucJBDJN1sZJBip",
  "key16": "5xQdms8LcT3gUUzvLvDTdmSoP8GYskko1sSHgp63xF19769R4r8r1o1w3isYpmU7uACD3YdhLf4C1KBWXSJeJo7a",
  "key17": "4SzVxqQTXFHpZcNAv8JqCFAXCaDeKiU1T58HxnFtaKWwz6JpEhTREiv7cjoEFd7UQSvX6YH3MY1QCr7ZTTfhcr1B",
  "key18": "2jHT5mKimkYHWMeGfxQuWChh8V34R9Zx5LWFVP2X2KRcDvGksEDxjTJ3g1nWGZgm3uFGD3sFZQmRfdbbFHPTcyfu",
  "key19": "2hKwtFo4o2zwSMMXftW8VcVWk2XgUZcaSB3gtJMu6tvMudmCzaNPEjSf5bPNzTBR9HmLzUv2jn7CCaX8R2BggruQ",
  "key20": "3ggHds6hP7DjxSUofBwwXkJEbNZNLVH7r7b4XeZd6wcQKcRgrnS66vodzo7UDnNANbb4opXTydiSu4Vm4SkUeJtS",
  "key21": "61EzmiUadAcHrpXcpJCGtmZj6wo2a8d79E5cmMRajpmLfRnhig1E18EEwYLLvANN5LsJvfUkfsGDHNpL3qUahYE3",
  "key22": "3ztdfdWqcxU3oGkTxaKwQXn6qy1crBKHsfMdqcRkgNF5pBFSg5Ng9PYFsdTG6HCwKUxcaEVbAhKdco4sB4WYsHnc",
  "key23": "5uNk4xgM6rmnk1ZTeD9NDowkmYdzFD6StZRhxr6bzvokHNdUwsjCTeyEPRbLAcQpdcXDVzRDRrdviRckf224MB8F",
  "key24": "2y8dqs32z5sjoYjpJRTtSwhefbUMnJw8vhWMrnMc6FLDFNoDfoYMvLxez9WtL1DGz5F4SGcg486MGxEtJDzK82Xh",
  "key25": "ivw9PBcdaMTZNA7ij6LHqjfSeyorHKqy4NLY2jTHFeLiQeddgoCGVjsBwJzmACvcSPdPo8iRnAcLuUJPHtTT3Zp",
  "key26": "2cQKyR9CnRGinxB4AVtsBHZLm56XUHZbtwNtZY5vjgnukVzhLTsudgCtoAUCb1tMmpL1gR6v8k6MbRNFGw1KgZa",
  "key27": "2mH8JouB1YsLAMxmZpakCAV2w3fymyEsJSgNzqMUAB6W1trCdH5GNz97hobvz4rpRA8SwU6L35Wx5rTbVvgYYrCu",
  "key28": "39dhVxFbzEvH8eYy2dcvhcQrCCnhR54ytZxCcUCjtMZHXsYxxzDffg8RsfNRjE4K7DNwaiXKambkLpBLKqv5tCFo",
  "key29": "3NpNMDRfLK4ajRp1hP7DVv5yYjbAXDQSymyBbcY5kYTZcWDzj3UxrzynxKak4NjTaB5ByteMxijQdSb8wHBCm4T2",
  "key30": "5j7Asc8GPDtycVLGtymvimQP48LJ3j2QoRf79MygLWfXbWPxc3tk7mqisNd6Fo3E8cE4eFxzC4zMSpAt9sydrQqR",
  "key31": "36W45sDwUAS92zQjTdkrveaVczTzhqs45RcGMCACQqhs3EWjZR5CUD9SqCZ2k83GMwVH3k4pS2QVEMPvAhMB8Jqo",
  "key32": "2vJUJHF9mHTBN49FbCDGxFfnwYoxezzoeiRcf883xizHAxTtnPwuwXj1o3QVFHjjgN6JjxSVtN4VzW7cbBHSCn7P",
  "key33": "5J7nLWCvuVyoqS6KghbrnNaPCst2eadFRr6M1UcWAtpe2Pxpr9pkqAWEnxCkzQuGagmPRXVHEvWAMANHsPsSpuVz",
  "key34": "5HaQ4husdtZ2Cs7Wip756KCGQ3VXgFWEaUJksWpEiBDHnv6iaGJ1UGjBDxfiEzRzXtg3B1gH3ojoV29gNNugDKop",
  "key35": "5fLCtTQyGCu7njEkyUgk7Ps1QVSwScbCpw677fGw8GeB21a65LphMqH7syXiEX2Q4YU7dV17MQcCNsqrvdVgUuvn",
  "key36": "rtVec5dEKg3LUdkG49DqqELQeBEqxezDk33snqVNJYx3oL69kE2pcttQjgXRmJEXCr4kdJgJK3QTryp7a3dnRcZ",
  "key37": "5DbEYku5hLPAHNwKFSqqUUa69vTWMpEpcsYVgosfBFtjnFvewQt2gpe7Lh2iLb4y3iijaQ4jV2cKsbPUhTsZpZ69",
  "key38": "39ueAGeoPkQs5Tv5CQa79CE7utm4BLXZ9PM7q27a5fQCT3poSxzreL93KzcsvqGKAxK7XBp5HRaNxfpux8fXT5V2",
  "key39": "3DKRjtvpUSbVsayMjaJz83HhQtrAYVwWgtwHgtWc6rM6SuZErb9y54kimdBJC3PNMAjvByZX5Y2riTiuac2bNxD5",
  "key40": "5ZBqfn6NgU5gk49iepqy9ZBkTfQiZSAHsLq1pT46SFSvBjzmdRnG748TQJDQ7r5XgvHneNWwMkq4etoz7XuKn62"
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
