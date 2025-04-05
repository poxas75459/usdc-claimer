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
    "4NNUpWRtop7M3sUQjM4VfugLyDyvK9QgMDaE2f19d6Zp52PHHLeDaVdwbNFZCmLSXKma2X8G56t883eBJxymvsbn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yVkgcJgWo2i6xtQZFRDrJqLva2LgA7u2iyRFBwnQ7ChQKdqEX5JHULZLRHZAS1pbCitSXyDpjg1SnVJBLpQeRD1",
  "key1": "3g7ehW88Pqm5ZdX3MhXmiwNVgEKr4vrMxMiRh5Cf2Jz7Uj68QgPTwajkmeC3uvtskWBy72TQJ7YW98Gjkg3CAZqR",
  "key2": "51CLYhuaE7QmVigvTzvUWmFGT5snGkyhESXo6z5R963Niw1MEN15do1HqudcKgwiAP2pytgZUnYPMSFvb2s7kP58",
  "key3": "XVcjBKVmtB7cBR9u3eQNdRw1dybMTJAJyncdMvrxgWK2rSAHmZeCTbrUZrmC1qgr92N26eFwtQF3QzwiugyFmMG",
  "key4": "3Q4xfsN2F9aXHKvzKhbYixZpeSCbG7kvF227Qb21JoXP5F6xWDfFdzarWyYhmNE6nUEdPQemLr7NPLwXEMjpgcg9",
  "key5": "3gQX8cLdqsCjRaReCJbTegi6bscovvZLPHBmU3zh9kAVPazpBihNNRV7dDeyA1hvBZjrDheDKTaZFqXTAYUXKmRs",
  "key6": "22p1dFHvjH1pff2T3bU94ED8W5T6tkbVZ5Jp6kntzTeTw44mdrpsR82LrmiyEzV2H8M2RM64Pdtadgv5PqwXjQ9y",
  "key7": "4rGcDDyNzRBnfehLvfa7AD3sb88rWj3qVjXWUA9w685GdJwg5joiNdh7A72Kkdqu8GHzfCGNLFW6HzKkBSWVQwui",
  "key8": "2ZsJKKvhY7j27Nycz3NboszsDdzPssNQpGXjUtSN3NPU1uPukii5ReZMpGbDcJanL32peawvGMywPKRqLz3pgCpL",
  "key9": "2cVij5sq566kN4438FaftgFS4rTiSJiEF4HtBTJfdChwgyZftmswiDbA7mu6BR2rTVSpcxSR4SiGehHkBLtfJipk",
  "key10": "61vnJ7qQz2a3GxdBxx9uBX4BgCEVWtZyGb6Zo9XyMdKiD3R1mEYdsmMh5VMAfnGAe72LRLxEBJ5W6pqmws7XtC7D",
  "key11": "4F9EQK6AFvmpUS1HxtZjeieAX31gyEcB2n2uKsRUzGMvDJyrakRotTRu9j7ZFtgrmutgA35P6WQxKz1c63PirJEV",
  "key12": "2L5NuRcjteaqb2NGYaFXtKdWo2syGvBDuUjE2A84y6xutz5YvncFP3RwzVPxJP1LQdYeKX1ufLf3vKHjyzWcJZ4z",
  "key13": "N6RMGkk3SqgzcFPecjncmqu5XNHVpg1uGZLo4pY4wHe9rVt4RrhNyNgx8fupRyNQJZeLFFTZniokAtkJVmTvAD4",
  "key14": "mrMGdFt1FTbXNP3CUGSvA3riXcRvCds3xEcaEM3bqGHt3eEym3owDVCK3ZJXDpBGYm8vUyod6uXifvmVGvnEBK8",
  "key15": "6Bin2wnJ7nEeNXpuX161VUbCjJtrJwkpJPDeNQXU1YYGJh4qzAj3KTJ6NRG3VphRxd6yVGMhedJyxry81thnUiZ",
  "key16": "4x19rgCMhBRxUi8LavPngCRUjkzZkRKWj7QZ97BsSZ3fLruzozvr1BbB7JPorfpfS7kTvP9Pzw1y5UWhXvCYz53L",
  "key17": "93XdDhHARcg4Ht4HQGyw5wgZYfQGuuUnhRDagtZRnoeVJ7Y3mm8BaAWKSzmNgWpb8DzKjBHeCXu45gygzAfqh2a",
  "key18": "2mt5a5mtk25NgJZFZKqXCqwgMQd9Uh9wmLYiwtGJmN7ZPKWUo31Ktd7gJYk4tRf7iAdPZvnLFWLgNxf4k2czEmJT",
  "key19": "4A7E8kJdtTCb6mET47hyBte5Yvm11fin98suUjju3ewPKcTyd2WWBcUq4CtqR4jsqHX8AwnTAuct7ApUvdM8X5Ym",
  "key20": "4M7QNk7Koj1TXvuLxSSwQgBw3WwqCFn9iynQVqmBR9at6uT8nkkiS2HqxCk1WBCMpLE5yvF3FQgeSnhYiB4asbMq",
  "key21": "TAp2jHKfS1vzaUpnuvcSpA8r7CG6DPn1oKv3qvppcnxdyJTT4RNArLSCY5e4AGJApn4MY1hzArED6RmrXUqfhA5",
  "key22": "snZopdEdcT2MVMupc7Q2jAmRUZ4jGfQxmuxze1V4figoGpxj8La2dDXyEwE5tbgExxr89Ts5s7SynP1QoWqt1QP",
  "key23": "2FXfq546mWSQKEqCt7QxedK8L2BRq7iYyENbeFFqRatiKmRRzSn6iBbYoPtDC1qssLeQ2x4ULxxjDNWQ5wFBJehz",
  "key24": "KPd6FhVGXepMhebQF53TBwNbkLAGM8h9QXhM4kvX5yMUNUJGZWYZmtzw76Xq3GvMx9oa64fp5VsB3W77Vt4Xujo",
  "key25": "5LGh82ZsLZgCQQC424okdEt81GtTgQc8oCHtBpUXQFYHzjm3EAniJm4mZyPSSUm17gBVabkmhCesuKkA81YKxbSc",
  "key26": "5eaGLBVnQnADm4CsoRNu3niAxHL5vmW2hGHBtCNTGq21nc56ZGSrLv3xP7pQzSeZCMzuTGU9TtcXMrowXSgLEp2m",
  "key27": "GMo5QqBQNuYB3CDhopgBnGshoi2ro8Tc3wKPAHgvKVz6ZHpYAyQgYzAZKbaaFFroNyCcZXMMZXuwuvpku7TDjAs",
  "key28": "2h9yiwyx5FqTLPWey53eyBNcxAU72CF44MhUKexvZMh7t1SSGfGDYJ5QUADuufH1iDdxhTNoBpoAD5GyoGpsBa3c",
  "key29": "5pfGdKEYjA83reCg7ojuBdG58TYsvzutJjPu36zT1Y9PJKw8iT5GHUCy8KSxguK5pLy1ik619CmzX13vXR5X6AyB",
  "key30": "4jvjWPcZd5aJ2ESEvzuZRZxzDCu72dGfxSLa12cLgJiwBBertPPTxDVtUFVZFFV8KDW5dEQY25XitMRb9Bc2KP1j",
  "key31": "5E41LXMwRSPDL2aGcJEhLUW6K7o6AXsbpXqfe4NHTgecSh2wvWvttzCojLa2KfdK8aa1uz8p1ZMyaUBcJPm85R1f",
  "key32": "2VFrFmeufdRgtqZHaFsoEPKi1zsLxJ5V1P2wxPBYSLgobVtzefq92HwSMw7sBAGf4X1tYuo7Undc2JiYRX3NLzAo",
  "key33": "4nRhahKbw8Rn4ow72E86cBQNS3hMV3LPaPD37AKwaSEkKzmiGheY78DbdHzPoaCxx5sUTC29qNCcTeeSimLCFcQn",
  "key34": "YM2dtnP5CQYFnKFsC5Cnnz4FDpvdwEDpFEBvkmBytyZq1qSwBsHrgDNSzzjkFYhp6zXXiwS3fGGDnryoDokPWPx",
  "key35": "5binMi92jfSxFVYad3NcyKiCcb4AWWMmPC4FVD75aFtFwSFKGte6YtAaLEECKMNM9pmFD1pwt9mbc2A4iv1RiiZa",
  "key36": "2jseUcvvBRENxAJVAFmVMZgZ9YDxVmWtVmxqGDA7Ypx7UchWhnN6TJc4LWR6cqhCcsWpq6Q3i7VA2Y3FKNVx9bx7",
  "key37": "53XeTSxai66Sva5oezDEFHFyoU5q1iwxrXRPH2YnPdAWbLGsYrTskxvo5iwDiAmJgBE3gwCWqboA3m4aJnMddNFf",
  "key38": "2Ptti2mAmYZ5gUnNn6H81YnurvJV7seLTtUMhU1jERsaMtyQPndCh5rHV7n7FH3kLSMRPGn1EmwTMZC41zDkd1dW",
  "key39": "3uBHmJAHUmRQWPXFkK8ZQqbZzY2GoCMPGWnNbHHbKptKtBPS6XBqzeVyWCT7WhscU1T9yk7eSpEtCgUEqt3kfy52",
  "key40": "XzFWQ9Ywbet97pxT3Dox4YHU9CRHzSTMDVgZQodrEpZFxpkxxbhzngAyd282aEKMojvhqFQaJGRtyWVVHaQeb9c",
  "key41": "3TsSuGxCyBpvpAeDszS3aWSAjcpMVCXXApiYJCAFeD5gVpWx1CjoEVsEQQhTyGts1dc2cj3JniXaM8Dotamp6rJM",
  "key42": "EXhGaAuUYFd1aQ8Kg6E851mcDYNwWzBUPANRRAJ8apoov4391hXTsZtiehp4sCfhHVqBW6DzAfwgNNiQ2DbYNhC",
  "key43": "3ZZYb4yx3w6gw8jW3RgmsfpRogoxssie5tQmhAgfLHh5ZxRCopesDmRHw5vm6UotTtS1Gx6Am42zYcJpnSzqqraa",
  "key44": "38hoPgi6BxuUHo7mGRiGccFsnet4Zsisze7wwbKdqcLCSfWD8qDVgfQEF42NddNQwW2oyyQzhByhCyFSvF5Vc1oF",
  "key45": "2M5MqCGXpg5gPH8v81aLCm1fgGyjTKm9FTpXpSPX9gPEgeUUa2G3ArK9gL3s7TYKtfxj74TUPm4BjkAWfhnPMtCv",
  "key46": "3RFfBzmB33RsUcsTK3TJ3a4KHyeWSV8pvG9QZQTummM8M34gug2RdCmyc34VqpJ884amUZJ1M2RsLLaswey96FxG",
  "key47": "7N91HXa9x74P2TNmqPshLhMchSRVsSCRP8j8awZtT5BuyPPZaa6aTC1sTAcnXSWi3pJRCe3A4dFSvtv7b5N4TVS",
  "key48": "57uveZwSzhuPHzqCtH9ysyPk1AgN8FaCdrJ9aNTY8kctELom5bx8su5iWE2pwqxXx2SZUQjEmqwwTnYxjV5kr1w3",
  "key49": "39g5zh6jfNHQK8gyz3w4ZpbrUXaGYWRTBHzy7F7aFXzxtXM99gQ9MMthkYBpuZxpLzb3aTrsFjbVmFRGp3mqEVEs"
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
