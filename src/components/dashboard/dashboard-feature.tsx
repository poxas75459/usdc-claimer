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
    "4rp74sH7SsULezt5z1Ka4rZYv3mDUXqAKir18sdXzPNgLAGQ4Rjr5YbjkgmJG3NjeLA9Cs4XttoUPeAGanudWnVS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oHVX7ina6kSnG6DHZS4BcUPf872uPxirCE6oC6TkzpRicNL4V2WLkCcV4AGTy752Po4PG5B7fFe8NJev4G2fxTL",
  "key1": "YrRQBXGaUBZF1agm1mLSuYrYWCdeXuSvyFh8FcWPwiKBxoG2iKENyWZcmfPiTTJtkY1ftpgqq2HFBVesNfewLDi",
  "key2": "4H8qAuLLwPNM9FHRQSR2cALxbfb5D9je9pbTZiSa8yNWkvWXwGmFv5yeBGFro191eZAQpCXEGpF83K8mFciqatr4",
  "key3": "2xxuwMt1U8Mrgva73VhtEqdjHDcKbXPfiTxieF2wBinJR7VnBPumNtXMzL4h1tbuNC1kLBxSchw1xu2BP8pBGFq",
  "key4": "Ld7kSW12kE9H4SbyFpjiap65bF1jLirrEqsQZSjudMaa1rJ4SAzAFRL3LQ7rZjy8mAvRChtMRitW1k5EAReSn5n",
  "key5": "5MhN4AisSyMyR7y9aFzUiYQyPq7GZDb86iRWH3geaQ222QLB267um2nnEjVWivwKYdUrR9HULk6WxReM61EMxCwU",
  "key6": "4XPfYtmxs658eW6fjrmHe4X4n4zqm6RBWXVsXthKF9rKGs3HkfGWJrbmhQ1jTusmkm4CZXRxoLNwGpoDGCR4ccxK",
  "key7": "32BDafwKG7dCffaXiGYFPUpVdHHunYfuc7EgmyWCaLrbnTnJwkFPYx4pf3rwGBjVSwvF5XVVAAovRtm9yQzGABaC",
  "key8": "4E459XRtGCwnbziMFGjg7S9xxRCzEw8zS44nUw2D78qV63bFiFZkJMZPpB9Q2FJqFmegunYC2YVVuZxY2jfWgPyk",
  "key9": "8uJjVfBnK91xj9DC9WRWJYCSMxdhisf9C8PSRFTbSe2mU7zLo2yjcErAXKr4r3rv4VGVL3D7J7tu62rApY2VeTk",
  "key10": "4mYiJgjJHyk1Sp5jrrQnMdkjJojeAEe75zx6FKzyPGLAoATeNUA2giWyeBSbJWShRBFxUbfMGo98SXj6d9vmjffg",
  "key11": "2WYopqFiD8dfMKwQ3hfwT8bkA4sKgKcA9oR4EZ5f19NCd1QK8t5ewrZjJZSsLcLVFUsWvNzJEshvStPL2mjLesm1",
  "key12": "5SZayS3v3rkQAVX6wdoZxdEmZya96SH1kf6oQiCnfVhemZgJDAwvaTCstsVwCctoqX52SnAMXgksLk72pfzXD2rB",
  "key13": "zCQpreGexDjNrsoxVKDfYeiZQtiKqirNRdaMX1z6gKFhwBagxX8ebyrQivhpL4R5UPViFyqX4WCDB88CivvBCuq",
  "key14": "2GLFchcRDaAKyjJrLL4A16p539LJy5xUoU77dHFtwTCfEVuCtambEURSDxSVdhnj7tTKiYNyBFxJY5oeZCVTu7oM",
  "key15": "R7UoEJBqZwkE36bVZZcdRm46MoUiB7FjySiDwk2YxQYDdDA5U9dxTkoni3EbqVSCTuh6MWJ3LHPqfFHA2a3wEwu",
  "key16": "4NmHoJsC5B2wgV4a2MCqcq1fTUbxn7ZogDU8MtChn8eGVRRF6fYeuGU8xMMBhtWT3UCy71W8sovwa3wpRve7WaXB",
  "key17": "4y64KGFwmotCHw6JyvmEQsRGwkntm29EPi9CXVk88a7bhrAJxNmDMCmdiuaLM8EqHe9BR5MmvprRvNYPkF3vRXnT",
  "key18": "4mxaFUPzTAUSoDXSTpWWFioDe8ZdZBhuEzVRXSs1TAfowKtg6EMYpenqRgf7weJMhDrHpHsDYSM2BkVCJ33X8QqU",
  "key19": "2BBoJs5hVjxHiysCyCnB4grhzoB4gNSrcXyUrJGM6au9Xkbk7MDnnEXhuaEmxkbzAbn3F9PXibNEbd3EE6vXV7CD",
  "key20": "4oQm4VgtYfYoTCK8NQubxRwcuU5nshXJk8p5F3fCoDdaCdiRwrtQJguib6GuspjiLwkBVhjS3pyB3phAPrPGcZ5G",
  "key21": "2DDrdVxm9mQNczMGYs7KnDzdsuc8RNixSWf7gTC22dNo4T1gy2qeYhceAoE8V9ooEoxXuvuus6WoceGeTCVdoZUw",
  "key22": "5g5mMSwRUJg2zraFmKN2pypfUQZRZsZZdegUSiCnHN3cdcJ6CDYVKKcwcoc4kKJDWBCueGt4LGyWiRHHStUL12ki",
  "key23": "4eR3pgEGKgUWUcifDbry2PX8prejc2YG2P1Kw6TEJz4YdVATkfoz6JcHBkyyFKQ7cZS76QPP3BN877DbGH8uRFhj",
  "key24": "223cGgHXMUYE7gn8hUurvKvaz316w2SaPQP22yTknGNn1tmzXPbgjSyW7e5sYaWE2FJu2SpVDQRXzj7x3BiraXTa",
  "key25": "2gp4cBL3kF7xeFxQxwBs4ubm1MzNvbmKsYPGL5NgkpmzVeRPo2kjVx6MX1XRKPTo3RcddE31ZaTiX3KMdsr5V16x",
  "key26": "5iMoK5AeLtWd5vv1KQmgsS97MYLJcicBnMQqJt1zpDAd8PmsKmdc6oxnJJYkm7Mf57z3sKqn4Az2J8ZCZfPiXBfa",
  "key27": "C1bMpY4TErKfr1dWEJTfXqmJc3yZ2oQoaaMgvdZFfgB5ufZpaSCfB2QGvod7MgQ9hmyHURNWovqm88b4UJHSSgA",
  "key28": "4HAzrtVd3MKhdPHLxewd5XT5bqj6SjDzhKAVV1Kv4nX7wokdEZ9xcJFtFkkXx4tdJRtbQnk9HHb7f41XLNBAAQM3",
  "key29": "4NKjLozpx7nTJtNhCMX9PfFYB5wqa5hM3Js7zg4V2XehfNboBR8B887o2nbFHb5PGVN7B55Zwv22s3Zr8TXNcNM8",
  "key30": "3euDb77vDhcvu9qiQ1hcSYp2qRw7qWk5k4j9iaciamSeH6a2Bfrf5NF9CzrJSrnfB4tbhG3KzBAnL1J1R1V6T42t",
  "key31": "5t73FS2L4nQSDqqpVQ3LSfDbceqU3nUbaBiXZXr6PA7kqQeR7XCnenegYfaP9fmXWSeYbZCaZqL6U8rmF9Sh5TWp",
  "key32": "41wgNhAMoFEqCgvDtp2Nu1r44Hxg3jbdAtqGftAaZbPLdMM8MQsZm5J4kAuRvpMMKNZrNeZUQJrjufma4Lz6cMU7",
  "key33": "nhrjzCt1L9ZkK8RQzpEWcrT1CiHfr2xagMGVYh3jfjQLk7Kt1wrWhAE9WvPAP4s6LwZhgWtxvTBU1S2HX7uFC3V",
  "key34": "4iwZuHNpx9U9Hpamm2K39n7FYBuZFUhcw3cYrTvPSetce1Xx6QRY1FBLFo7BjekubUJbw9hdciFW1pQKRbLTx2BL",
  "key35": "FoJsedFhqZfneTi8FekNbEn3x6uU2oSvWi7GvVbLZDSMuE88UnVs5J8B3XBA4j9EhZ6GHaoDpU2t471keTkzCTd",
  "key36": "63GmV69pjx9xgqBk8MXTj3X9X41DPeYvmtbEAdasfPrjLppyMoGw8mbnhKU3jgUtP4C11SUwe9xrCaBNdB4hbdLg",
  "key37": "p2zwWVfCHfxDhvXt8C69TUdgN2nVYNDiE6c5ZmA5ja9jMyw9xNFG41x3Td1Gu9fQ93KiNTismJ1mrt3JYive39o",
  "key38": "AG7aoriP25gYA6JfYkSYdfSUJjT8ANqUoZyNEQfWY7rWp6dGChdLuFwGmdm6RCmUzehtB3iiYX6pHPpmmwcfVT3",
  "key39": "4Q9BCw3WbJJdM6JHUEq8SsZoBL6V3EDiju3GJeuyCDFzjAfxjSnpeZLBYKybgC1idf52KVXtFaREsBSS8FjkKnTf",
  "key40": "vK1LaNgbY55ZDzTpdmBbNegtLBQRpQXYK5QREmDbUb7LZ3PBZd1sCVK4hyZKfyWmnAVwGm6MaWKwuve91ATLDbP",
  "key41": "5aG7EZFubmdEN25K2kzijztVs7qxuN6fR3Y5MNXdrF9X9pforKe5KrcnmYCokoVW5KBKraDUUbS9gom1k194wAAV",
  "key42": "5ZADsbJi7pr2RMNu3F2HSjiLaq6KrGzE7UFsgRu9qKHEufSLx4eL6Ui4MNFFxLNf7RKog9VK3rm7BN5k4EQyYUPN"
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
