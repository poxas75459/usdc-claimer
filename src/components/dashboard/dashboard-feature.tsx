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
    "3ZqdyDEejb4wbDrXtbUeuzKxcTkWSbNLEF8cpnL5AvnPty5zeprvzsXm5Yp3MoWqhJyphH3zXWc5fgvwQMpYDU57"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rH5JWUhoaEvtae4y95fKBGg5WjpHrZf6iPfpTuYK4FwGaXPPmvKFyLhQRKdpLYKp3uuByd2Y3UZYbUxtscG6W1e",
  "key1": "2tvLVpVzwPEbwFaDX5jFELRTCnwyAiGE4mHC5emVNBthbeJJsRq7SB7p7x2kDdE4rTr3Uhp3M9oW1a47mZXgcKLo",
  "key2": "5FDQqVVL3LPieB45MBAYT3YGmW8xy8mhbWXu4FYoqZinvcjjEq6rwFzLTAb9u4fdCRbQPgZzpLNpHzEvtvjAkenS",
  "key3": "iaq68VDvokQtDJBoXDfB21iEf3FuZPQB6u6PkY6Li4tca6KgpuBdvi77HccHT1p43SFfKwi3cenZYi326zUt8ik",
  "key4": "49DZD6J9aing7oDdFmGWTH3dCN1suZibGJ5Kfy6NRcHHUkLZ14FmBpWvdgEC1QZF3HJVcXny5SirnmjR2XDf5GPF",
  "key5": "4rHLsHGbV3uWH95HWUhcBijf8JuqQgsGFMLJrX7PwxYm2V8c6EHoqrPXWCKPrfpyT55kjpRTkJ6qt8DHHUQLbiGN",
  "key6": "4ijv1pw72oh99wZD63MJ4KpQRGDXUoKH2bMii2teomsZcSKZhPysVrrSKDrxdUUtHbaykRDhpoAtegZA3e9emyJD",
  "key7": "5NEyto9iN4N3ujPJYjrGdGw3x2D7m6gkeS9sntvwoFUtt4vWJr79ZrDsearTmA242rTq3rbEWaUKWQ4H2qkEzFv6",
  "key8": "3KGYD5ZZskcwYNvMAcZJNmymicx7n6dq2VZ5osBrr8wQisLs9P9yvvQ1oT15vwb57tdQ14smLtQ4LavoWbd5gYHL",
  "key9": "5aVJA3g8oEsvJVsG7mZbj75UfBVBpcrDXsLAhVwCyta2typQcvUGiqhfEfKiFjq5abR9X2V3o8R8QToSH6o82Y1p",
  "key10": "55DrzZUZEsynLcLUkXp5FNSkSqHx7LXRcriP1bbGAABttb68N5ygGscX2y8bzvP1qEdkwi6kfHDoYtH97u4A8UBU",
  "key11": "4nBCYtDMnsAfnahTiau6rFWeWpZdyJ4dkPAbA825MDzQMNwg3MRkCEFw1unnZvshVzkbJ95qsJi27ZYgzMQD8hxY",
  "key12": "puP45Te9od6V9GRyznfHiffgfvK3boEyCt7PoAjvJnKv8EHXazy8TFbGY1XNMxuKU7eBiKan6FS5PiaT6txKw76",
  "key13": "3FLaUXrx11btpp1cRVBw4Q4Tb2nuiywpiEoSARzqufNBvzA6VqjszNiKUiPrM3CrdpSRLShhXQ88QHQka9XfWurQ",
  "key14": "3KZMVU96yPtE5xJQZiUyxvN1Xd1eazVDbxo22bAbKFErtBoJ8Qn8dYHdsoYeS1V27jnmfDnSFQvcTDBy6JpciaCW",
  "key15": "3kVEfUY8T1c8Yh6d6YaAFpRQavDXJAJEPDDuEkeWZfBzDjEvnUAFgkgjqMbtbtMRbvjK3BFSKsM7vThdn9ZvE1bA",
  "key16": "2vQa7mwE4NRevPgsj8XKZEKWXKBTPPWnNPfeqtQuBunu4NJciFLgjKe14mqWg2yboWUKe85i7pQbGbKQXtMPA7E4",
  "key17": "4rJU8rdfK7L6HuJWUnCRfMe3Zk6azVwUwHYzPBouSgggSP2U6pxcF1auy7DszK37E2sLrc7pRbsiMwPrsDT7tmLw",
  "key18": "36yU3us6cSU3q8mWCn3m7qhJQBTG7TBYbCMkpusju2FzFtAyREosPJARi7Cug1WNNfxnCCNTGZsCHMnu8ak6cWbp",
  "key19": "3xh6FUGB73ndh9nrvMEQXu9TsHjNrMeJYjuptgSXrmJFhz4S4bFzbG4JgHjS9LDRkrWPax2Na6k71bRXfgTeVjBg",
  "key20": "4PctJcy1zrLgqeDn3y2ATfsqSsustXiQdk1yV2LUTaakKHBLdS9zaziBqGShUjjswTjXtC17T4gYbG4tdDCYXhrA",
  "key21": "JTSNsVx4FZTjE778VMc2NEzjdoHbcZKzYzzf3q1uJUDH4WyERuk8iv3MYYZHn1kt32ZJ7Qkbk55b4bA7ajjFWhK",
  "key22": "gfF3hJYdfSaRQFxBa1gMv5q6WzvaqoouNbui74ZFTaBhVLLKE2fyNs1qqZPCjY1so1L1VH3iev9aJT8mh9sqxf9",
  "key23": "3Y8Ly7AS2eEP1PteMAMZfVMbMo4Ygos5kSjUgQphqkbZwmPSNomnnyGw3sMYvTgastuUS5EJfC7NnNW7MY4xWkoj",
  "key24": "4FDYwdbL9ik4fJir5dUWRAxASVqwZxLy5mj2ZFCuhnetCHoqCYgnVN4Ct1bfDAoGxB7EwWMM8pzJB7aoFhG2Ywmm",
  "key25": "4s8h5AaAVwVP9VrNn6SZhxZQbRYjojBeAG7j5pSkEA8Vm3KaUDrbhx9vjY1fKnD8thDbmEkJobppnC2Hvv94m13c",
  "key26": "c39sSpXfEKHu12gvdTTjEPtCKSwZXT14mdkH1pseAr9k3RT8n4HwmY7b4gykAroDDJ5oaXFCT9vBVBaVxmY7mru",
  "key27": "4KLWW4x1Jq1wvjQaGRZuVTv3fYKiVWAxQEUatgAxvZTiHzVZz6b6ETjmWS11MVzdxma7F7fRLAr7hpvMA17PmJhV",
  "key28": "4TYYnYzEEWPHNnVk7FSRoRNRNS4nb8WtbicaX7e4sytzddfPQvhfGWZwxBNPPfLLU6CSeBgxTrwvC2ZCzaMmpBfL",
  "key29": "3vzBQHdv8zUXEgUMo3mR5irtwoWQqFeGmtQKfWmxn5PYCSm4UHirbnSJjKak19DTVQoVp7okoGg27Cjngg447Ms1",
  "key30": "2NzcF2YUUrbmY6M2FKFzD54kQnqKqeg4pesYBZPMtrAechBvP1Q1h4out6tfq1wWmd7f9pao5K3Pin2d4iFNdmWh",
  "key31": "2zVQriVKGyvoGnznRoaWRRcZkzZSKkGs5ijEiuxduqN16hNicfVCt61PQ2YwGqwspggQE8ShNSd2UNKo5qRUe2LG",
  "key32": "36jUocXZs4zeUQMd6qpDzJb69hzRoR3e8JK9T8mncRJP4nnNYavhWrsuGR5FgyXp86fMjKJ8NTQ93ecQGZeCc1bA",
  "key33": "5pqfDSaUMi1twNnXnd9J6XgVzP5FZbbcEEWbm9w5gGdPmZXtJR8Bu63pz1WLaETfqUP9qToHnZyV5j1U3JWuZGAW",
  "key34": "2MsyRxf58ZRvC7Xk3D8KK7Fauhmh6E5xuZ3mFX5KeyF1WrCsHqxFqy9pLXtHzJkHJRJUEW7NmGjmYX71MEVUuDw9",
  "key35": "5tHXFcvEMNQHAF8RwtKzvinioJ5BhyVMUQ3z8CkJpNMvkYEkZfBMcLaWPphKbTnxt38wryXorfmz96AiMiAxNe29",
  "key36": "T7di68DNVN4aRQgmN8ncniwZPosK7XLcuTRT6Ax6jVhnPsZs2VMUmkgoZ6ZiaWcpqKpkUC1K4Qrs5kMSqELNoeP",
  "key37": "bJfjMdiQzH9hGoHCV9dohbXJmEdm97tnq4bVeVwS2BG6yWDy7TXHvycX1QUJuUjeckFNKw84Vjfyx4yxCPseWc8"
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
