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
    "22zV55yJzsRLrV1QhynxZFdphdGoNPMVUbSUsbhLd8NLRBrct4GRC9nV2bE5s1xwTDattHCVytyxpkDFbwa4LpFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37VRmXSWyDgKnhzXTGLS9Di6YkxvEpnEZ4dtZXTa4v7SunFkiyc7eKubXN2wTuXhvt9eWGy53N6VRv3FuUymoWvt",
  "key1": "4tXTaV3xmyamTvjShnksMZ9yLCc78ghoNNhAx5mwFTDurFE1MUCVHHQrf5TjZf8WayXBcox8LRzSFrqX7SmAgrSx",
  "key2": "4XFXejKwnWk4roaxcBBAPvDYHxitFDZGvh4tkiZgvZRP1RMXYBqDESSPPhCXApR16XJqsZU5HxL7Jj4sGcgPSerK",
  "key3": "2XMYNKujLM6ANoM9HxFLTFY9Tp3bboTauxg3PFwDPCCeUFfjFGWK7xeTw47gaVd1oLZJTXNhyboNvbbpnUo29ouc",
  "key4": "4RhigFnnugS4RnRNb5v53kybB29Z9BmtcMoQN4yp6KHVLpgRoAcY2urKviJWfJ7iBaUwK6K1SGBZQ5omaykrmiA7",
  "key5": "2NurhcMD1xmqkPnnket5quZtCc4qtzWrxMPJio8AKBfG5QQprTa1szWr8KcrWudStLdH4CN7RTBi5uRTeNakapXf",
  "key6": "579ykreijmTVa8X1UyKkcUeWcr55oWVbajq5SWsC1wES82KYoDgmFxu37t6JLAVMDseKqRNEK5cUeF2M4vfo8gb4",
  "key7": "2B9rFdMYzooFaWFoMDoXx4h6bYZuMeV3tmLN6zzydSMSUDgUe2FGq2NA3VgEsgmoUG9EGcDXAFiyUMjEn6nZm8pM",
  "key8": "3K3UVxhiXNL64VDxkryaJzg6LCXHNEaRMzLBLASXBHp7XhQqkjqMhyavJ7EijwXeMmWRf5LWcERuhZoDszzXMxZ8",
  "key9": "2Ph6hkVsJvAqaHZWvAn4moz7b9obpTug1Q1woiSSRrQ8LZmrvr7FFyniSXtfVqgcjbAaxMvqbws3SVVF5FdXmF4z",
  "key10": "3kcQid5VnJsit8yAozFowuPcEvMhBCsLW1FPsF1EMazUaPhHJkR1eLzz8QkxRjpYpGkNnWcmJ6c8Fp2avQiPZRKD",
  "key11": "5U8VAMzeLCy1xuT6NEHb7fjKKrciR1xHYXEM1ihCkN8quhk41iN1UaHvwtPWEbBjrwQdoQwZ2a8RWHYKArkqYuyu",
  "key12": "3yicWZ5eEcKXqiEAY7fdvxSgNhVrpARzEMYpr1PcaZvw54Co52vGa16HP9EDQFNTUGzkEa73eCFam47uM6qwEBzr",
  "key13": "3b3UuFnQp9hTvQsBVWtHbn7oZ67ChuvEiPquZZ4jYMhHu8dKJN35JNArQoPAMuRjktZMjnJSkKXGSoYP2Pc89y16",
  "key14": "61nBxazSXgUURLd4V68gLV1g1CwWF1VYP1abHzX2S1MAZAMwzSy1PaQ5rVmPpiZN8ST82L2Qz2UMYSqJYJReoqWa",
  "key15": "2vB5659aVP1qjTvfYfiwr7zpRsrwG1WhPHCCodexBhwjjQLMHychvpr2JUBc2Mf7T66GMmfQfcfHzjnubGbqXqQC",
  "key16": "3unUTHTT9aWBjGfFJWGju8Znfrxx5bVoXiuWbRCrLU26c7QgpgPi42unDq792dByX6yp2H4Ur3Meip7xSkH4uThB",
  "key17": "2JAKjvMmcz68kEKX7wUXqsxyM3E8YhxW7e8JQzAAb3XEzVceDzBqq1FSoyukWSErZu6WzzBVYhkcMAhNWbMYz8Zi",
  "key18": "2JSaVzTKMPGvxtKSJrhCLHDGtbXDWPWQ8dbanpCBD7fgHnZ47gGUNBwwJoAzJKcw7Yhyw8gnx5yh7LosdTCdREzS",
  "key19": "2h4hngVkBCqi1KPUwf8aMSbqaVwjGKwWPGAPaRF1623fGCVwbfEKeJgTjsf7V9v5LEmNHXJKavr8rHNsXaq2L1h4",
  "key20": "3yxUMYu3DafNn4tkRWUs7btaWMPiCNLBfo65XdgZVemypFkcFZoLZ4jZtZqT6QzqKg87GaCC9dtZrKUaV1rxtVpN",
  "key21": "2caGspEwyKgJ1sRo2SNFmKpib37522fDC5ckXk662pov5sQTSLqj934XGTKZdwVPe6SLKdQyMqiDJmZPdknaoTdt",
  "key22": "2mzNBrTWZbw5LpPHUyCc74Kdn4G74jjvxv4kxuGMQaiKeVKDFKdmT68VVzUn5xE1GzzpMvT4hQAi29DMrm1HnuxA",
  "key23": "2HDyAWd6J3sdrwybHhL2QReNGYtxNBMvuEJk5No5LJiihcTQEH3do9G5xaN481V7srg3rap8gw9sYmTjEmHfQZrm",
  "key24": "43gJyGwLLpUoxutmYmt9MPbuPf6pwChaNSq5RrTZPNkbaBQSBSEyo5CsYVGSDNJL2V8ivo3FjvWSVBZN5r86KPgM",
  "key25": "2zuLq72B8hGrFGGDeWtgY6r3jzz3iadmvtzXM8biiuZYLv7mJXGCbY1APco4mBwgm8AS5yZRByJx2zyyoJ2ApFpQ",
  "key26": "4htVs4pnz6FafeA6nNmV2GeicNcc3dAcEoTo54puZ8ArX47hTAp5QE896FcvhgaCy5gqpXhYRW6mC1m2dCA8aKi9",
  "key27": "3VseEE1q94JTnDvRU3UQE8eCBPwQoZVKzYA257mG4AKxsAcR2qPSCqYCty63kx72D2LJDoLtW6Qne68y2dWaVaNN",
  "key28": "8be9UjVBMmUWGMLEnmNji6HuAK4ve6PYeij5G1T4LQh9an3MCa9VfRo9yCXJr3ojoRnUiUoYjas95ZNzEBSN43A",
  "key29": "4m6RCz9di8TvV5EsyB6F7xfxcCsFXBpJ9CLuN6JPi1pFRZrwo1qNtpkXETTANprhEmcUFqXG6DBMkp6sxyN85YYU",
  "key30": "5YTWmKmjs9T2L6VEuKSmaGJej6rygW41BC5i57cfdqSKJMu361AkqwwEXXfEzZbrzYs2awczmfTX7kkR8DmhYj6y",
  "key31": "5ERpd1oJiJquZUgAB4U4FPPVLPNG2kNyySCbUkX9Tp436RwmVuxrZVibDNTEGiwShKPE5anmuw1ZMk7ueyXTMkz5",
  "key32": "49pqCu3dV6D4631PJ3F11kosHP3EmGQt9fd7eCD2myQnVcBHSo72PV6fzNisWsP1s98wutmn6Ye6Qf1PBwvUxEV7",
  "key33": "4QUFmwCHC4t8Wy2WUP5khoxc1PKbBKTx857UK6M46SMM5eqC6PVG7wxZEA8kDQvoWBH7MQAGZyid4Qp9PiPRu2Tt",
  "key34": "22K7QrPYiKdLvnQhM5dBpzGpgPzagfVpoEAoC12FP4611pFqqvrAACvH5mEoiDzgWPPPd2P2c2kBHhc1h63Shrn5",
  "key35": "4rvUbU3nP2hRoSSgJF2LsUi7FrFY3cnw1Lm2fy74BT1ehUGvVjM58GBq8VGv6L3ULC75KVRhdxgb4vo8RKZSQigL",
  "key36": "4B47P5tzzrkrGhppicQN4RigujqYm3Y6dGdDD8AeV7ySB1upc4YHcaDFbUrANZx3yX8c3CbHf9DnAduKjdip1mZH",
  "key37": "3b4EpRdjxUFV4qPxeyeKeMjd6gmqGoBSvY2aFKepYb2c4K1UVxFXH4YkdsKgqzbwKMs1sVBzrfgNnbi2pHCRGU6D",
  "key38": "5sDB8bbtxcagHxzxuXqsxrqva2MEquqDkjA1Hqe8ZKX8z8cFdb5EaoU8pkaY1qVjBB8nJ2nhfAGUWDQivGLmvx4t",
  "key39": "42PNfUbDfCD3aEuSopcCpKKoWVugJfgmWRuMvE4cd7Vi2ZPNEG1jmnZcfGuvWMRiMn398yvVCgBSBZLLfwRu41dV",
  "key40": "5bYTynAsxf72ETvnT8SWrUBP4oFJtKb3kcWexj1TRi9YBkxhq6P3PCN4QPkedW6iVo6zJXjkShbuXBd3S1V53SCe",
  "key41": "5yvWqepaRLh3zTvYJ2F2Z8t988uMrMoMwNfRfXACiWy3xVCM9SVAzpCvp5Y5s1P9GdPhdCq1kYtWYGnrryWWsBKM",
  "key42": "5zEjTk6WsQWjnidYN5McLScayeTPX8cRBnKqK6bMJEbtTUqVW6hdEz234RX7WJVMJ8y2PGm786RHYLUGwiaRaV29",
  "key43": "3whM2UxvG5PNLVtrg9w8PqHQcsUPqhRhzjHGeixFma5SYnMHG87L5uZuk8qjqbyR69H2cMkUnJfcxPLwM6Eq9hDs",
  "key44": "28bRWZQkXDXuymFZ92XGZcbiHdzaTvv16BamJzPEDTYr244U2ZDsCMx5o5MjLtoMfogsrt6WTjFGAMngWY1qNj2q",
  "key45": "3Ei37EE29ueQNZfAVoTvCcckbym82TTtHLyv7WmKJEWAeSu7urVbjX6SHDTVymhaT4rFHi86fuW3PPjdGuqCNgCr",
  "key46": "3viyFgwzBzU5EXGbEJn9B2Xs4ReuLPT4MgbUpcPUeK4roZz3AFa77CMdaeF886djhHQtk84buKXfPUEB6cCci5nE"
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
