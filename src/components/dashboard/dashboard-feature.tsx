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
    "3pNyqKje8dmFByvLxsRNx5jwweaBZfEmCfQ9r8wx57zDBCi3S4Ck1gmGfmMzdUz6fUv2YHkXfFUZWcATu3XuDdDG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i1Q22D6VGGiCoSW19CbxKMJfQ5YSHYuUub7DjHuGwV5PVoveAUMbLCj3ZvGvtRg9kDYMzJ7ixExywkhwfFBnkCP",
  "key1": "5xRFW4zZgqUbiGQ7XbpUvmurrwK9bDCv7ywojgC3TKgoksntLnpCZzm2qyZKZf7sDiaPmpG1kpEajwMWv9iEGNib",
  "key2": "5LRx5kqNv8rkJatjWic1bD12fLrQvm9LYV7ow2dktcT3xbaR3WsrodXCVobaj2xPaxQNZA1qE2wMcg7GDxCmZjEU",
  "key3": "2WAaGHeuB1ixLkzP6pJ43yNiuAM4uHdLW4Xgv1Fn6vvX1GaQU4ATYCzttpDnttyaB4JQ2E45W7Hu8hwFSZk5B362",
  "key4": "5dPNhM3yAf3YZR7o58zffRh4eExxkPsNQSDKzDLKN7BHirHQpTXm75fFVD19oV7WjMkTZZhziy3EJPH8vbsGU7F",
  "key5": "3eqMbvDhzJh8E9q89hEu4Ln5CygCjrUYpUNUVUAoo695yk1388KkPB478dDqAyTGUvddAf4CKXyXN5841S613Xe3",
  "key6": "4ssyp4Lxo4qW7Rhxp9d3Mmm2X3VHemJDL7GtQU5y5yxE78GhqmaG8qgae1goxmyuBaVKYts48nmKJgbgRLhHYrmL",
  "key7": "W8zLmm6q1Cx2aT2ehvDmSfvrg38kmeVwD7kCxbmHe7jpRNq4RUZT4SHQuE3EsS2G2bQsMTM5HRJZF5hDQ1F7EYS",
  "key8": "CRMX1ddCHz58kTG3Njknp2EfPDUaKEKk1xA3eYjkY2zWumA5wp9RrN6wusKrgEZUHKdPkP73XtmfbwGAV4MH1wX",
  "key9": "4vck6oeiC9pBwtiAHjEnakXfECybDWTR4AWUTRySAU995CAhRwSz8UhCP9JVpoCVPBUaPEWYPhhvXNgoMqNu1dHw",
  "key10": "3LxaZTKAgrRFcJ35uEMH8s35GxiprheBsy2u3LSF42MCyGcZ25ur8hXjH2S8HNpwxKGLny5DbU4EzeaBBJXT9ajg",
  "key11": "5EANdzqFxqjRdvDy18q1MWMwuL338TqrVxqKLAk5LvkJMZjabRSavw5xCuBX4Km7mdYSNmzUYvb8yxNTSKUJadYP",
  "key12": "3275C88L7jHEm149HF3HMUYz8XfWVJzoBDbXXwQHWdAuByQTXr8ieFvYoQTZT6Gd7uw9XG7ReqcZVJqcioSdZ2AM",
  "key13": "61GrPsvVJpmW51eqD7kPd5qEqXUcaqapJ9qxsiFq14okLfm88WEV6EjLC9anssRundcUQpjRd8B9tLWWK3Vrazf3",
  "key14": "5MARxtiAMQPMRQ4hYD1QSMQ4f71DEdt36T5989XaDQHUgWDAvLYhuJnjG6TU3q3FcEH4MBnKCuYaMAQ6kAGdLSZM",
  "key15": "3woBHWLkvoSRWV4fXxvWqUSWNwRuKEPqNEMp1TH9aAuxaWapdvteWnkfnJngq2k5JzKyzCS8xG4PTrTZC1jjpbCV",
  "key16": "2rgL1euF443oLtAymLJfGvQoowBnbdrCcT3DmEbB3PFSrikZ4XxSpWpw5ut4YMBohxQUAf9hg91TUm2EDb5pM5KT",
  "key17": "5dyybaZK9imLCGDH1uz2nja5SwkCytTVN4eGeTK7n3jTNtp5k3jQAbA7gd9XppBzDn2bzJ35BrPtVNa1y2b8qcgS",
  "key18": "4Qsb5xKGD1hvtPEYirgBDQNdPbsji7LyCEaEvwq4zoYypUSEXjcBHY2xy5c8V5DUwmAMFF7W23CGTt9xReUMpTpx",
  "key19": "27aG5cbGL1cuBDuqNhrJZtKJUA7dxd2BwMZbEnpFmUQHbRiPfu3bdBqSicwSVJRoQcCxp2Ubud7DsB2k7BS5xM9p",
  "key20": "4zeiM7wpxzHGFQ6zYN6FKiBiNwqHFTngxyFWz99M9sfdQ5GXbmxXYvZdKEYJqzUPQhPrCYKpEbqU3NF26ZyEFnsF",
  "key21": "2voCNWqb2Uo5aoiZFE66AuzTRTxYvjjE2tWxrrG897k7bqZcCwEeocMe4w4ceT82WjUBE2WuF9ZntHxHX1B2vCrN",
  "key22": "8wr9TAcHo7Xuf7nGaB4xMpZAuVzVP83aB6c9oZtaDb3UinjUXb8TsaYro7ZqCHPGBbZTQMQqzdhARi6WvBMWWzH",
  "key23": "2dCsserEeBT2CNdXDE4GnrbmKsMfDEvKoebX5ehn4k6q7yG5B6HAEt85JQFCpRcsb7Sg5Kh1Z8kkzpaHQNbDyTN5",
  "key24": "25WSnu2rvbyk8ptXtsS8riv9hQWKnjSjubrVWNXX28sd73ri9NyexKAAhTZZVekjAc5bbaqgmKCaVS11P8Q8SjJd",
  "key25": "3zd8LTwpk3QNp4Q35CgS1Pxp5akZQfsmdLqmc1QpmNReiTQJHx37cdVQuji1EpEE6SL9QRWUY8yTCH4GdHDvDoa8",
  "key26": "64XY7KGDLxEQYqL9ozePHFryti6WCzP3xFX5bNNbZZJGYosVz1n1anzkGmanhRTvJFsp29EzLohtqSTFP7yeQJr9",
  "key27": "3jQZoRT1jRZHcjfvqRZqzyAdhWpZHV2JDM5pQp37wvbWf8qmVMjasHGaxZtFAZ6ffwXNfrtmr3h4aPKteR9kL75L",
  "key28": "45DUp5z3jpdtkfzbtz43DTAadk79ssxhkhF4pLQPdfhio2DsVHvYKU9xks8K4tbBDgeMaWk3ZJ8wWNBzVRQrk8rH",
  "key29": "28aNyu4KUoQRxyPGsajfEyzJdZhHRrygMEnhCy8hTsyH47usM7wV6CJQFqg6PBsU5bE2ZpP1Aw1qvcLkHbYopqnp",
  "key30": "4pfCvinu5D1a3AYkbeJGJXM8ffd7DbMER8vAS6SdhqayL6yAz5zSf8UCBW2E8PXnNEcwNKbCbQPwMJV5pYiifzX7",
  "key31": "491pVJSoSkviEi5gXKsj2NxvBcheaHPTFXhpGXN9x3C41kQyGU8vQiQVexkyQCjabozaKBL39RoGTYvSEGNejR3E",
  "key32": "2upkKVFt5oYSUKzBqnQfbVnSKDMyUWhjquShp9nL7v4SMpeVDCcx3aZPbLkMkgiTCXLgg7CLgN32C6LPieVG2VVA",
  "key33": "4JkK6WsdLsbHy5yPsNDkicmP57PbDtM5mjxEPBWYQBgfnrXBEjcjbaWgnDoYyMTZUKxvNy6dbu4E722mtn86gzdp",
  "key34": "59Dakx2rTB66GTpvkATRouxe6qC59gJDkUoRRs5FsPfRpRnHfdVZ9aPJRbMwArV2PZzbj2i1Z7wrgtmDyd4SfoCg",
  "key35": "zGGwuGg5DjtBZLd6ikY96BFyhAh39pG3HzBrFj8xYgJA4susB3RWnJcqmGn33PJipPER9oEvGkR1xfQiCubEKq4",
  "key36": "2TPdxAwiYp9rreeQZDsokFyqirfRFSU2UciNrhqSLLJL1JfG5otmcnEFJcX8yFNsQjcLFLZC7MB2A8us55BhFP2S",
  "key37": "591zW6ciYRV7sbzFLdgGDEubwK4SJKpU5nNcb9fcG8nhwgd9hmW9hH3AKsyZ38hqTNxyeBuBw4Fs2ULsC75ELP5J",
  "key38": "gBeipEjB1QGVwi1hhT32ccenuU5Tas8QPCHwNpS8Yxo6p7GPCZ8ryZA4D7FdcDmwbZCA1pnf4sAbdMMNLcLfA6E",
  "key39": "3dv6bHkMEhF8P8VFKiDarT8ZLHXuCUcZutkQQuigegh5yjaeXtcTDYcVLpMxQNgbJeMH9jwgrTvbUXCVizoEW6Dm",
  "key40": "5a5tXarGJJFcjDyAXbCYoyZXChGGeWyNQCQ6GxoNhGL5xEe21RPHfgtofhEVkAH1U3x7YXQ2XHWHfcLEdTQZbj8j",
  "key41": "32ky6mUz7cvBsWaKJngrvPVacvti8NPWH9FiugwPcmvwvSPTzJScVMonDN4TmJX592WtBJME7X4qFuPJ2vdiCm2P",
  "key42": "KHhrM8GN4S4A8GVfaBHbduEeZF7Cg9KPrZcJPUH9CcYeHkMAYBKKnXY6mMzrDMS8ZKC2qF6qMZNfvDF2bdzwdES",
  "key43": "2cACby8oNHxgCeaf1YYVCdTASNUfLADPFy9ffpjKESDDV4fBeyY9SFA6TBMWM1tXr1LzDn68rCPEYSeoTQQwJbSF",
  "key44": "67TAqaho5UVc1G7VX68YKaHm1sgoKXoefn1QWsCXpojCFHAiFGyAT7yx9womX2yupEQd498JkQgnNJCBoB2DdBqK",
  "key45": "4RbbdLXKxt6VqTdc6MiSFajJntnf4gpMgh87Ngs3pXUqXZStidFmmwxdUAFnScxgxeF78JRrts5yk9H1hAkErHS8",
  "key46": "DM4wvjLX6o3RHDzFFjTLUs1GGFzR9JX7fkZt1b6c3sFJ2LSjfd5DcUJhswGQXC5ZS88HL2x8f6qi7awb3Gh72wk"
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
