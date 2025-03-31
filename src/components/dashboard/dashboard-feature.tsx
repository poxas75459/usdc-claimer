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
    "3UZp7NF7gGfnsbJYJa6icmkSLZbm3GVijW3fugoFAoxBx5N3UsKPpm4pQYKaCCZ5hFkCmZDcKQiF5M7V4x66XhYY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38qisyvCycLQAPxz6vPVVFoAzeSptMxVbwLUjNQN8TgimAY84dNkkj3zh4MLuWnn9hK7PJ8u7Wob1Z8HjqHFjnKE",
  "key1": "43gU6NW8m3LmzNg1iFPSs21NETgnHymX7kbWjfjWRnQkTSu1uA8RBu1UFzHdxPPanQ5y3t5Pyy1Vywh2pQWPG1Xh",
  "key2": "2cM4jS4zyftx9YBrwmmQgaW5WNv6Sv7S4EsWezTbQYPUXvC4tRmcsiPcZKXc65wkvxGkQjhcxpSk8QwFwfFBnoLR",
  "key3": "3gMQ29SLRLnAj5BgfYmoorKK5wmdsgEGN8k8vVAsnqiSVsryrHR4Rvt1EKo4rdsHgkPVDRs6eKfEmDHtxPHB6u6T",
  "key4": "VtQNfYR78yLQezp2u2U4zYR98Zo8zAMTwGJjUrNXhFn79znzEhtkN8hbBsaU1nQmodXu1vcibkYNbejEJx19kfA",
  "key5": "2BmvawFaNFe8Mf6u3vKU1aH9gLaEGKVtDzmSq4UirXqwd5RFacGXLeZ9buCnEveNuQ2MxyJpBrGQRQVmLbdkFYsG",
  "key6": "Yc2pCwyCYvjyPSyDfVmvZ37Wc3sTAiXRciyeW8r9VcDmYk9DP3Qpt9yBTN92fgXpJMZJa6kL2SZva8x73xqd1GR",
  "key7": "3MMiUDgWqFMUGSQBo6DKUZX8Aaa2MkoJ5bowi3zKa8DCpheHGk1igxgVBwybiqrTgRPGuJHmjaLZBrKNbByKMh76",
  "key8": "2R7zCF12HqNXtbjyqPmQZK9bSSkYHw9iKbT1pRx6evFu7fVdypr3r3uyKaHyvAJfWd8oabbaZYN3wWQPgZqiiXzp",
  "key9": "2jT9oWQEpkB2n65qvhuHebU6pHUZ1HGFAGbbXQVLRHfR3tzZDJx6soZYHZpHFX7viiywApL1UCtaG2iJHgTXDB4t",
  "key10": "34tKkK56tp6Ub7nYq1BwXgUQu3aT1o2jR3uWgUTW6RdmuU27KoD22yGFdvZiagBt7KjsKFcmUwuGvK34ExYDn1rA",
  "key11": "5uBMPQ257n7LRpr2QDUuUAHPVg4V45SjRSguF5AattgAwYoNyfay73h8LRde3uxc3Mx1zHocLUcKYaGUZZSmfi9q",
  "key12": "4XsPXjZTeYUqtGRTAyequ4GHjaJPXFTUdiD3N7PZQhcLfkxgTxCK2eunBQ32xXwV7S2DsxGZNodGGKWctpwN5aqy",
  "key13": "3L32SGhQNzMWvJRyhb7sPMASG5ZdZmCDHQJBuY5MHZqGxoC6TcqWqyzsSSzWjCEpbZChZA1ssJxNrMTFj2Vc1uSK",
  "key14": "3v5ACbA1tnJ518Lr8XioMg1shoFLvbV2qrM6yEKBCjotWebSKF351ATcit3d5ctpJ8brY4cQJwBB4iB73naUHg7w",
  "key15": "RmnK8xnodJw1VQphATfoNaiiw8VXg2sqD2xUyVgTPf5tX8y46VEkSuKaHfYA3KvupvwaWxSy2Q4eXVdRGeKkDVw",
  "key16": "3mRxkgLyCQf1EokTr4XqJtHwzmDKQWyEwgbitsrnhKyQ5H3hMd4SaahaxnFZYPsDgSTe6bQPt36KDWkNbfBuzgTh",
  "key17": "brhCykTRv6pCcJugGjT6sEceL8i3uEP5nXbLrtjPn34S8YHfjUjveLTfazpSA8LWCtRQHQeg2Rpja8jk2b3vHJW",
  "key18": "4kuaX3tbRJo16nQtcDzM5hdedoSCwpt3UnS6Qesd4jdvBwoACrcETwSWEm3mFUF1ff38cAJB94gSKrzFegHkzgMp",
  "key19": "8Hxtzr8mNFAoCUMFU5cc535hf99LdzRbS2QiMaHZCToSp9kEMNKsE9WT181NaZpzxkLMmzTTFBofKxt6yPcTMfU",
  "key20": "dXPvqbv5KQ818VF7pwV2YNtapU8sRWRAMDqZ1bhYYmaFMciogZR1E6FxKnP1cvyBWC4MC66EASqdR9RyrmiRMUo",
  "key21": "5TRu6qvx5u4FLXSv7byXEsZD6QnrtSZtPyVwDvMBqpTjj8vSJMAwpk7RmtXriZ1yo2rPPWuzfX9boMn3maViq3iQ",
  "key22": "5uM8jKD3KRezFcakBUAR3qq4qo916j6EGGFRyiwXt2bpoxms527M4g74fKmKFp4B3FkrUjQQrUg5k1fJXmSxoFCb",
  "key23": "YepA6tkdoVGyjLD5tNXSPsAmof3JTusJrm5YCrJdmvS6NB6QzKb1hAe7cYEFiKy652HUAV7TVpHXB1qUHcm9cf2",
  "key24": "38hznEJUNmWNv8UxKfyhEi9EKMonEuR7oTj68wPCH4hjnvcJhhZRxWpMbZKpCbS55cDAT8ddaqovesoCtksS8NFY",
  "key25": "NPCrBbXm1vmogVRia3YSZko4X3oHEZ6cCVNDcixtFrQxiuDU2F2h7qSAuC3rE6vn7RFrJk1q9DJ2smdijuyTGof",
  "key26": "5S6D67ZZyBRNcXrJbnDJ775dSaBhJads1nTQpdavV9XKU1jPcCTgWGjE3S4DxomLniAat4rSWk7qiuP1BNQs2smr",
  "key27": "4Nev6oCps32L5u5tcGBUiz4TPWDvQrpCvMYbRpT9thZpedvd4oBM5WyQ1ECW2hbtaSdSNjJqkhv4hW9juv2cW5aA",
  "key28": "AyULmHwPzm94FJzfEA8M72ZtH612FSTjm62EeFZTPjzRHC4QPpwYeJMRLCbhxgrRQQHLVjHExJm8Nfreo7CyCnc",
  "key29": "43ox8DV81R4Yf7vmoNRNG6ZB4VRmqURszMApB189Q7osw9dDx6Cn3E4kkx37e6cqH2tGf4Ptbr3CvxeRQexVfEa9",
  "key30": "5oHJ5pzfeUgN9ubZSKfa9TgrqeAHVf3aUfkuyGWGBSJ3mLXEg5VNjGX1wJW9oXWLETjWBAdK4iAMCE4iedGwCD4m",
  "key31": "4HhSZB2FvWqbo2rFvbi5SsgdkyuN6NXhTGmnWNRgLLcGmMmZg5xwqL4xmQdWThr8PU6xp3DotgvbEPK63LRN5fXT",
  "key32": "2UtKB4EMyT2YxaRKyvfCHpbNavBM4a3r6PGthafGZJHC5oRXLNhKPoAZS6yjaQPLqoya1qqvzwJPcjebQdmKCgU",
  "key33": "3vjDnFa3aDLCqtdPkzgBb28rD6amLD1UYAyN8kTuFcX3nmFSsf3a8kJ5jCVe43STNMaDLkAWuCPzaJhE5W6XZucC",
  "key34": "5JAZd4jTBaf3Xn2s3obKc6NqPeo81T4TaToP8xwyqccMkPujLmesh4r5he4TfTbuaCs8imMrub4p3jEg4CKnn1nx",
  "key35": "3zaoFLn6bvYTPAYKz8MrdVV2YZypxkCbcoKwqdEH3zq2CLq5nM24Qg5w5C7VmACdM9WiRoXLjptNp2c1kJXfZZuM",
  "key36": "4JBcKUJn7Y671ipwePM637cCfkLNPJVKUGmC2jjr44RoHP2yVpnoR6DCAfKdrQ6G7LugEXTnQ5Uvei85DoMz52x2",
  "key37": "ubCoktVve6Z5vxJpjmDatn76TU9MgRoPWEUB45mqFzNHtar9CpkEpRVCmePa1SaUifuiGRxbsfudPSWDR63Abj9",
  "key38": "62KhhtKf6vqeC6rvo97rWffgESg3WDsY4giJqgrkd53M59R2HA6HQRaNpf2dfvGoDJumw6ufB21gmz1P64cmobsj",
  "key39": "3i4FEDkbpnzSan8LK3xYbXuTq9YK4277ZKwL2cALLKvZiQeEzWKfP8js3NR3RReJP3hsFqpdeN3e33RXuGSCCz1L",
  "key40": "2PaDzbsA1XKhpzfpf5XQMXtJafmNcHqx1eUQ5jqyzxNAXTfNDsmamDikF353hQd8xsGMLvrRBYkHwTESqUekdehh",
  "key41": "4z5xvvbu9jwGnFdwidLYb5G1g6AwyewZLKbi1S3h4nB2mkhPDBFen5tEqYhZ1114x1oLTyicZjBtcnG6wATK1Fkm",
  "key42": "4QdQexHn1m39GPVwKuxXVTPJL1JfCnx43unkT5LXShKYFWRLPVxBAGbFGxbjhmLNRuP5zBBCmazaiCuJK2wN64Pj"
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
