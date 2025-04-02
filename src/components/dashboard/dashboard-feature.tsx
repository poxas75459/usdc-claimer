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
    "hZj1TEPhtiKvTCaHUCHveAvENnMXm6Vwown9GsHjJWvEsUJGnMWxEfN7AUyADHWEYkcbo31Dn5jJWR8XKQoJ9HG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1jypCnwiHqzMDK7WWHGa1MsKXxKYatecKEwTUKqmoZ6HwBpyw8VuVPy8pgRki8R9H9r5T5ft4rgYpJz2r18r1TZ",
  "key1": "2YRtLFoMvnWjWaHeBjnKtP4vWJhf61kq8bfdjLiMi5zUg1EcXufie334tuDVcJJjExcP3A5UgcbatdndJn8oKFZc",
  "key2": "5s7nCLwEJJMqd6eBbLCqHg1qb1xSAhz1hKhETXJHva2LrMnfJhBcZhhG3D6tNu51XuLVY17hLzBwEjiV7otUnvQB",
  "key3": "jtszik7Tv9p327dVhC67HdXGqvLpWG6gWHE32K3saKb8FZAvcMSJky8J5nS9NS2sXh9mcuJqS4CvibSVRqsBpTy",
  "key4": "3CjfA8cSXMoUCAwJYFR8eMphJevB1hUWTLRcj3xjVVbJBWFo2hEGM3N3grjjEUmaym5xg43td9etdrx1mHJQmdFn",
  "key5": "49AyvFy5H8xBY8CiTYyPjopw712hXo2Qg8WDhEyykuzmq271tNk4HMF3DND9XxqUT4XSDbEMPT7S4pdjYyvGXxTz",
  "key6": "SYUjwmCR52uU1zzq8VVCDNQFqhQh5yHtoVgcbiTw9LqF42LGSstwmVhDCxZEYhbAuV6G1KFphgxyVVdhnjJa9q1",
  "key7": "XP1M2f6W3vSnSueHbmRx5gzme2T5hTGC4qChHifm379vfsmPxFLVDK1ERCKUJf148rteUnm3ScDvXDtbpByEHRc",
  "key8": "4pXajj1kAXTpYXN76rMFukDbCnf4zSvEY6zmtrx1mF9CBwAuu44tQfHvf3gVxUHZbvNwf6Kz4K32oskBdmyf1nrA",
  "key9": "3Hmykf6Wbo93QwQUPRD5dVHMGDypvzuNnfHa9AcwrF5FnoD7pZRVpvJdqZiSKEbYR8uvVUXDmhMgFuAWd4L446Rr",
  "key10": "2SwYnqSnkuURMFnu1MVkfomqdERANVmpCRvrf5tJP8r7y1E7cZUSCXAH6WFpseRLN5b7Z1ie3zCyKrKzWvk6odC3",
  "key11": "4kJvRufGKtnxmkxgGjS4xfEMojioNHYJqFxRoMWZiFjqCKxagqBEPrb2AKptLhRFBFVpmXNW3r4r58TAdpqnTm7C",
  "key12": "4SJjNrRZgZisWS9vZHdJzDKws2i6y14kU3ToM3g6ws8xNR6iNBUEJ2RSwVsmtVPK1reqfSJNxFL7fT1AJkMMarzK",
  "key13": "5gpN5d4G8R7PvhAmSpCMVaVMWFzEKcy53V5vvEDP2VWX4Dtgc6wipzTJV1TK7LLJwDU8vFgzozkhzNWsZhqjwpuJ",
  "key14": "nUGvEqSd5AsvDGtAhgwfpEdtcoFBQ7npWoF14WqvREvtzUeGQ2KyyvD9Ltq6ZhRsvQwHvxBiT6q6BQQZMSREqtE",
  "key15": "cCHFvKs6ocvRBZPKbc3dV5ZHuyeD1DBERXYMSqdZWoGR975C8wSK7kVazgWLHaLvfuJhtJXvRHVg4vv1R7u2Fad",
  "key16": "co8rRK9uZCsaJqi1iPhU2ttJem4njxEto4NeeHgegn2eMX8nvPhEuT1D9Ge1ZXz143b2ptwxze3J176quYTF7Ef",
  "key17": "2dp9vV6xdp4aiLbSSBoxnxEoiTmJX9J4RVVSAAUguNuxX9ma7JocPdbWdxtSDHbmNJJA6ykd7FaTRui6A6c2zpte",
  "key18": "2haawVKRnvB8JXCarqC1GGmCYakAarN6dGxpGtezcPioRoo6tpPpwh6DD2iTKFWEpotfmPG3Pxnc4hQWST3SS2Bx",
  "key19": "tRuNUFLZYA8Hrw1knn2k584EN1tw8MooeEGPCNYv7vGu9cpXtd7zTtrK7xN5ZoGuf4eSVaZUpGwo22PLyPiX2A9",
  "key20": "drZYefMNGpWgvS7YMCpWPaq18CRpxc2bzf1jeTFiQ1ewBcrtAmfQHGmXUCUw1F6BbKC5FuYXrNZKRfFFaBMhaps",
  "key21": "2wVromwePUhHYnjfpfCNcfLSx5dE7dz5xmJKERYfxckxMdFg55Tg323R8KAH7997JmsMQhDFS2SMqCaXZDqZyB1j",
  "key22": "5AQ9AoWrUczFjjKMMTuzr9bXMaXFhZLmvmmqREr95yaVPp13yCs17fq6q2MFLq8suu6fDikyqtFsVgpFYShZFpU9",
  "key23": "2UPJEPDSe63F3H8udGJpAN6jJ3NH2CjvqEzKr222oPfjJyfJydJWA9sNgVs2yVdx7DUXqZYtDpc2vKwXkn6am12A",
  "key24": "5AnU3G1WUE8DeK2tuMg4dXXzEduZykASo7gSuLK9UBGXbi6cTEbDc3ejAmUXa36mRqFyJXUHHPb4aeHxpP4JbFvD",
  "key25": "45VTcJo3uitUupxt7FMLefDguC1qKevGgFbxLQUQQNm4pmLyw3AGGuwbdAvddsGhWVrkoPKqTtSnztBqeKdapmSh",
  "key26": "4n1QzkB8YRHGEdfvcBVVM9ebLnfXi2Ybj5xhTdgZvAsPin3yqt8L841JP58mhPZ9gt3ZsFZaRgYyiLundo9wpZJX",
  "key27": "AsAYfkko3P1BmfwQJcz5etwya55XQ4AJqEdww33nN4F3tjwmcdqoAvLTF2KqcRMuH4xzaDmDs9aDzwEhPAAJWU2",
  "key28": "33mWxtsFSyxXemTv5vkzzyhhoYoQJ7f8KqQGNTrWyAh8s7mbRutfPCJb2FsCEociDmuxXXwbim4Ekch7saYskA99",
  "key29": "61N4U5wmivFAuFUhuZYyn1aJ5GcfMdn6J2ZofuKPxLEUt8rCrPdUkEC6MCoe7if3FHz8TnmAACWPYcgY3zqC2HiV",
  "key30": "3auDKtYJBrLZbhgG5CboSCGJtStc4neZWttpsPNBC3VHbU2tAjevVvvaauEMWw5UEoS2d5QQQg5pGbrwGPx3C1ht",
  "key31": "2ZgBCxYwr5ScagXZmasFPxELC6rGWRTEy4X3xa6DTTsXDUEKp77nsoNsamLD5tSMX7Q13ebVrdfyLVQeskEdT5mk",
  "key32": "VBx4qe1Hp48AzHACMV635TZhNB5a9vPcwRxxkFGSQyk5ojVaXM2nnWWguB5LtcRPj8Rydw7GxBZN6aeiCSm6hUH",
  "key33": "3PV4i9e7zTCb3pEGJsECkqDrghhoytWB4nU79r25LQ6Z7gbCeocVT91zgwbGzXBT2gV5LsoRzyAaefpCS5Bov5yS",
  "key34": "2woijrtfNXNSo53jd7Zk8WG9pVPdQd36rAUBMmGheFMWErxPLujGpSx6YSgGkDX8G5deoohkRFsBmwfnbAreHy5c",
  "key35": "2c8ZKeDiFXZSrnWkqbmExymDxpi2zbr3BbiGNEWfZow7wUHBrfQQSFvia192peqKT8uGwTzRNULpXoFyRv6fzsGM",
  "key36": "Df247tfxAPrRKnGoarjN9hXZncCJfa1c7hNyKH7scwVD17SvAMJQD6GReEgwfaQqsw1QuTKr68HEvUdmJSdTVYm",
  "key37": "61Jw8NFNPQDCttXLGgaYDaLW6bWuUyj1BrrtQYRFpHBw6CH4BdBfKGDHgevWtu3P3KndiwA9n8WqfvhyFFwGJzXA",
  "key38": "4LZPPq2Tt5MVAfphWaKyZ5UzvGjtpGNoGP1DTMpcdbGGu4JhZBqpnfLN8swDsVUAchqqCfCuGMQf9rrRi47UBRVw"
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
