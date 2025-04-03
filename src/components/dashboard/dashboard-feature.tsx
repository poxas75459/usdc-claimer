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
    "2YynvvPhS4USNe12TocxgBbT2NjZtaPEFbgfqUqksBueQtL1XhDYBxzVxte2K5fFPsQUWeNTf6YiHydVSqoRJ8qS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E3j6yWUcEwgnaLRuiJMPNjZtJkcd2HunP5R9VcHKExiXxnZV8PV3ubQs3rSHTeVv31xpMn9o8JTCoXHZukos1Tn",
  "key1": "3SftGxMb5uVsUPijtqgLLdbEzWABUjQ6SsK99rn74xM5PJiBPYzu8vrfzbGPEwSC1X5xdR7H82q9ZRhKAUnbiqVq",
  "key2": "3BCNSJHft6CcvGHbtfFsxjadonumPPyJPVBsB3RYDS2jKWcDnsXh5eYm62u2KB8JjDNsX6XB2MiGr25GjdYtPRLw",
  "key3": "5o3Y2eAsDCtLbPvwn9JnAR55axY4x2KYojiesAnxnocYSbrFQX4YvwbT2z7ZvpHTzPuVvWcfrcFq4X2FbEBWzstq",
  "key4": "2HSqTG66uHAVawTwMmBk47bBVu3c3NM1q3TgAUCSvpzUKG6U9umxrBCsGUZs2SVxtj3eQErK566VwjVPgUZ4QnCY",
  "key5": "3zuTudANPVtD1Hpbt7G3FRBBgkREwXEKRqenYPbcpVwCy1FxmGSrpSJANAifaFEu8DVSw6bwEaCimAML1L2wje5U",
  "key6": "2ZEtkanwiH5YbxfCUB8s4rmj6VA5Use6y9pJQRCcEaqWEYgyPLHbXAPPTYvkMW3ZgMTW33RxGKbie94D3WShoec3",
  "key7": "4k9aZrzVGeFeZXxPuHMPH55TXNLeKDBrErNiHfTYK3oX15GJ4m2Wv82XeMnDijNZGLdAq1bBxu6JfLpnmipcNgmj",
  "key8": "YDMsqbvY6y1kFW6aYi87AzW7koSzda8BDSVBUqAwuxoRKDAwDJxS8uBzbNUoQizLUZVbk2P9Kx3TcyKx7itrm97",
  "key9": "3M4mzFLxeHwxZ82XpGv9KhE9YSGgdwTFpD38zizdoqDMYiszRjM3dsRkzXfibrkJRP8AsJ3J8retsiHRpnkvX1uW",
  "key10": "245mhh4PKQ3LCFGmj3eKAVgPJWXaCbzGPYo6BtBEyewEcgweX61eHQdiv4jRQ2cgNYnccxejLSqsh2D5CH9Uahwt",
  "key11": "ZMQBhMbBuLGaoDVRJWyE5eXvVF6hYQvz1LC2wZx96sXxy5aP7U5dcnH7EL5WBkJmB9WSj9dU9m6qog48SUYn7SM",
  "key12": "eYqVCSmYjrgUGQbi4qdzweRwDfkvLfG7Dz54bVDbVm9nfiEdEdEox5JkPT28DccubsZYwocEvcSWRF2a9AS9awc",
  "key13": "3NuSPt55V66BMfx8Qm5ws5tJ26dhWFghpPUKW6Ry4GEx5L9xyE5zJ7QKVkB2Q8YvfEGbyBFjnDQkAApHaKAjFvjM",
  "key14": "nX8RdcXr8JzDUHHj6D88f538ruYPSLBjeSomFnzvGiHGq2kVRNdS2gXJP5vgNEd6uaBTbeGb88qrEBHj4DugZ7Z",
  "key15": "4DtVk4QGz9twMJ63skpmTu1K9EbCoc3NFrE8AzRJYERun3EDcKh8pyEVbaCQChQGCwBQ458pqjwYYnXpNhtAoXcA",
  "key16": "4tKjQteGhj56dis2mdgWWwPz4VRzzqMNfbhHGcnYA764W4PgUAbUQ3yP2369VzhMK2R6CzySuS1JZEhKG3vXWCSK",
  "key17": "5jCpfFBsPcxvAcvz8SXQwNHZB5o9YVS98v4TXpzEqhQT3rFNDk1noSn6UcquzJ1SHmeQ7CD5ygrs2wcfw4rkaZFh",
  "key18": "4Sn2h2rT91VenSm8YiWjHbRLpJtHQcdjZXUXKz6kKezVGVzGfVcd7DAcwetSH1cQqrhWsKANJJyLqE3UZQHjVZWp",
  "key19": "5WHQVr7dDL5N6yThjWgcHB7dLbH6SvHVZoSReN84yfgwRXdh7XECREee4yYRVZU5j1dq6R62j9gfk2uLkfoXaVQb",
  "key20": "5VkttXAxPzjkcuevRR1Wr8gy6WjT1xXQnLLGB3fJd9Cw3b7YJp9PnK72AtxpCKB7rLiQF2jsS7v7s6jGaU82wZ71",
  "key21": "bTqtCALoWRqHz9LQMZqK5Pbh62o9ubUXh8sFU6GasHiqvbt9BkNPsFgTvDEdqCTHV6UzMJDZte4QhZS5JU6kvt6",
  "key22": "49mcVHaQbovWGDJMnRZzPcgBqYjeb4TGRQTbaad44a3c5sRZYUzut34tfSKYTo7fPKt8nm38cTndAsE2Gqeax34s",
  "key23": "TxkFWW4qtteFzVgFkA76GqAGPwqZEftnNQchMVuVHYS2wx2Ti2tPk48hZGQDKKfyFqUtDZjQmsTEVCD6CEn3WuN",
  "key24": "E4jMS8a4snwwsVR9mAdQefHe9cjGwSLK45fVAM9Xo4JyGtYZQXTmHKZdCk4HhJ7FZXHugQXRyxmDVGC29awMTET",
  "key25": "39VPUq3UqTnKZsSJtE333EsYQsq1MwQvnWkxGRveY96JYEnGv4Dafy2yAwXAnkCyyWhMjv49HMCwUPJu5mH8FEKK",
  "key26": "5PyhnY5WRmP46AG7sUHfxKpizazJeiQH2dPby4SC3a9FUj9847x6nD4ExkAeScknjLyrEciBvJgvryYnzLhM6SpL",
  "key27": "4PLKGncuFzuAJDHohkXYNoqS892Eue3TZrnvjN8nx3m8JLybrD9dGrqBb57kh6icNDH6m2zA5LfzwsYopDY3wy7V",
  "key28": "4mnWy8CDEpTNFD7UUSxJGQYGPFVD9omFSbypdbnKXYjcm6p2vjxtaUeaiSGKdxV5LiB46TS2kJbgu4n74SVmXPCy",
  "key29": "5VDoud2nt8vt33UiwEDdxEmchUenV57dyEEuGAGsNEDq3nXQB1Z7fTmeJgb7RrLvVbeyZaeCNq4KwEoZx6zqbvNQ",
  "key30": "2CrXmwxutP8w2WpF2hua4LPeLGhoGWRR6JKndi2r2xbiktwvRWnXBVkQbuBBG7KWNB4sZ21teGgFKspNDG5Uovbz",
  "key31": "hT5V4ecTMx32yotFWPa8KPMF9iv44XceZQSgtuMQQYSo2bWXHhKibBwSfvPnFvu3GkZkib9xoP8yLn8kiUo2K3D",
  "key32": "3q69ixVcMaqXe9oPGVCZp6R68Uj3mKZWJB6bPEqwUA1s3Q5c7oZUexQrrKz4s39DcfFXd4EUeRTa3quEtETh2BsQ",
  "key33": "4cCuKJa51r7NJrhVXfazyz1RzhNeJF6bcwRsb4HMyGXjt1BnJvjPov6TRPTmcD55qCqqmUzNqiDzBffcJrHFoKS4",
  "key34": "t1A292Xn5ToKEYvNhjBtkypzEqHEsCpSiUybAq1dq2GzmbtbiwnRsn1wHzbxLBNtS5KUSht7ZWW5kpudDq2MqiY",
  "key35": "XVZNmpE3FHW73TDcrY38DTSo9h8uRxr7GY4ejTVTjDrhAViv9b9RvkXwJL7PGiajfD9t6no6PgvG2RK7i2f9MHd",
  "key36": "C3Zd86h2JrpiPezbakyDQqntf1NxBMnLNDqLXPc6EfBTiES4WBqcnLYoQ24RHsRw5MumaJFQqV9cPjj396rA7fa",
  "key37": "4pR5ZckXkbRLMytbHx4iG9pdSGz8LpywegtgJTm6CWYk5UT6iat2v8tCFzhDGWz7UFQP8mGkcn4XhUx2BjAR25pC",
  "key38": "4fg4S6ij7kQTVLvnDRXtsF4WraLcWBjNfCbHctHBKPw5H8k9j8xDzknkj6AHWxwqy8ySCRbLdDFUDcQj8CdonNTJ",
  "key39": "2JiPbygzcXYSdvJpwmpgk7nS16zqApG6GbewLGVMse44CZmacfD5TwjAPKcRCSrCjWLC9942s7XKWxyqoNBowSDR",
  "key40": "9q5kWrZQfzbgryeerSbDs28Vr2wwcypFhSnQ8ZovAsPUwZqcRN2wN9mQ5XmUvs5ixZt3oN6SpQgMuLg1zoRtZg3",
  "key41": "2nMpHhpbFPjfy5wVcdA3B6qG3qkkBy2dLY6jS5E2WQx4swPmptDD13cYhheoPp9MgKmPQPnNomjaB6eTnuP8C4d3",
  "key42": "ahr9UsWzKsJrNNfGsoy3rA6968FQN1unh4YxLpTHyG9eGt5mEvuniR5QNMfbJ9GJoqxc4AE9LcNhusp7x8mtxat",
  "key43": "xxnRVazgvzYDQ5b4K4v7dr1unD1JgkvWNKmoeDFjnbRTNoRGVAEceFpWc41PDci6i6wqiAoAt48WmYJ55HgedoV"
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
