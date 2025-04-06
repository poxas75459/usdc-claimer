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
    "1VcPJHALzK9ud2BZQj85EpYU1e7eqUaH6VwZcLMZ3jVDJMg3enc1ByNkBjrCX3MVtEQsqp2nhQLB4tEffFhcvje"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G9zY8FXURBfk3PFF3FKPDpWDrXCVKZL2uPS4ngQqdWtRBAvWeBYj67itWras6evhcj3jAvMHdx5jmpJDRTvQBrM",
  "key1": "4EqPBU5TZrTtbNgMhFchgQyxP7DeKRZ85xHd4EKT3bUAQuPQ4vzuyM5nnPjbQVcTvwNpXDHsnVmdQpyw5DJbDYr7",
  "key2": "4fiBYnRfKknrLmVTSTHs9Tg9KecHPUooeoQsqeJvWvAxAWN5DW7iGgQMos7DKAuWDJjMjnFkUYah8uKkRqPupUam",
  "key3": "2bEhWW6jfaEsYo61964TXuY5jWaNXkx4T7saJtDV6cLkaAvbNxdP1DusThnMLdojUDQN4YEsa2X2dsbhMTa22WMD",
  "key4": "uHpuVj7iEU6e5rdmqPMtxnndk9zMRgWBx2F4CWih6Rh45Sbp7D6zbAkq2K4WnshJ7sVG7ueF7m8YAGRS6yF5z6Z",
  "key5": "2wp8Vz4tRMZScYkbHhVXLLMPNNVdjfyeTysS9WA13FxXU1ydCei7KDPLZCC2HC93t7bimNM2aoKawsrdmbxNNRyS",
  "key6": "2tTG4QWCrYvCbZ3VGnyFayx8tHWGNdZAVT5BTyDaUwEVvmbgV3F2LRWQAbVD1HmziBLPGHjypuvYK48756QXjU9F",
  "key7": "4S9tUrL21NPFWm6mzoG3pctZEHu8L1TACbjHix7n5uVPMbHieMka57uPm9zLKSkbFMSAyQzVvu3Ar3SGYXYHCECD",
  "key8": "K7VY8FkQmJDsQeYUAcTmNaxzbxRBjCT3MgMf5pQMxYDa9YecBKike6tPZ91SpnLR1ShoQJxCfqTD1URpQMnLvtQ",
  "key9": "4D4krDQYiWhaMeuy85hTNp3VEoA7doGWkS2wtexHYqFqBTZd9fXQMdypKk2Xj3FfenzsbvPtLNWYU42cjKCnrkS8",
  "key10": "3TUo1vzHoNxMytHLxRUwHX6vW9spLvWUBquAWQ6HV5Qj3PzwDPfEDvfCuhLqFX7exHUVG7VpB6U5GPu7rTf5S6D1",
  "key11": "4amz96wNkZCWvq9mQdm33AQSNCTPKiKYskTt5XzGRcBBfPKF39uFDsBLSgdfAJjC1U9a7ajV4BVgyNHRwh9EnCAp",
  "key12": "4amXV92RRKpzn85hSt64yBXAycoWQpEmWcN39EaKmutXg8zyv4DRfC1PgWxcjSX2Mshezkq8aJqiTTwkAVqFaQZd",
  "key13": "MotN3qPEEtjvEUrzyG3HxhaX6fSe7myG2WpjAR4gc5csHKFxGy7B9WsgajEY3stiWmntk6Ac8qNNhaGhq8XN4QR",
  "key14": "2LTSYhh5AsAE9HgP7YaTicwY465vtaVqFgz2tXZmoS8DpvHF4gaaCybT5qd8MTap5G5zSi2jnAi2fJq8QvwukNYp",
  "key15": "3Wf6inY5ny1iK62sJc1gaVDjCH14YsTo8JiwnRKPBHuPSHhmZoGvDQh5KPMiw2nXEapWdsEaoLAmPNmfpH3zFeNF",
  "key16": "5Y5C9uBvqYLsJNDYeXqaGTpg1Jh35oM8qFsiTJswojGLgSCCLMCT8endhX1Xc65L3JXMkbxi4WMePhYTLmkyH5vZ",
  "key17": "tk6qgEq2whRyyim7Rp9aX2RXXG6Ca9PwT23zFeZTinvTZgJwDXtcoi1sqPpWUzrcvxd3autHXouLt3xxBhaUW4b",
  "key18": "44uSRXCyXhs4JHXDDD4EWtZTAYvgKr3TZaC1SRtSeSw4dR7QsNf4tTMbmBwrTSsEayKWdTuz5sMj33wkzxu6MqvB",
  "key19": "mQdJ1AReSSmqy5yfGs4SBh3JbwhcxjQcnkLSGAXA8R1nfSNhDmduRcdupw12xghU3iwCnQbNhUxbbXgysoYb77H",
  "key20": "31U5LLXRn1gH15eW3egX3qg8vbhnSERBewFtGXFCYWvGUwJn6wajDC7KWR6pB8BUhLkrRp7DcTASM7MebdiNCy5X",
  "key21": "FLs6CaWsupUAgab29FYWdY4pLCDBWcbdTMX45pFHPZ3ArBjLo9wuoUsxHXPcuyqVay13se5K3RdRnYkPZshdRvi",
  "key22": "5cu1eqpCeBWwy96SP3saGfVSgf19d6wEhpgcoexiueRLHauehRGRp5rKJgxNLS3ipmTCyqPg7HMrTUJQYC4Eb4qg",
  "key23": "4hd9QHGYHm7jfeHjzoFtmuNwoK9RU9nDDEWR6AMM2JiRxLPT8HSE9s1GVseT5zg223bvPdw65HbH8bE4BAMibBby",
  "key24": "35rhmFwc2cNcc2NptbmZ5VPKwJsQCqfpFFL4rsKoE64niDLQTsd7WQXncCGmMT6vKEWt9zwQYxRvmsjFHWbYTmsD",
  "key25": "2U157AeAov7akYNwJ1176g7dX1skuTmzBNh9fLm6Uuf4aGVUsKEFMTdH9mbnM6TAryfXhqrXX7zgPj26gpGwppNM",
  "key26": "sHp19XK78jSCk4VKJWdY4HN6n7mt5dU8L1sLoE537qDu5zdD3SiJydTUL16frnGwRaaptFPM7K7MheNG6NpCScd",
  "key27": "3zPQ15nXTNwdBFuqCpLydcsm4psVtVq7quiZWSWJYULC7pSutbu94a8YERfM4r9ALmS3sj2CuT7J2yMrqkUTzZxo",
  "key28": "3in4DPDobWjqpFq831kYSBQN6n8BHTs9pyDvgVwYUKKMcJLSpEF7tsusoFFvjSBWeYmZUwwDxFspyGP9tL2bdo8h",
  "key29": "4CCEsYYexd6g9MYcNXVyj3ppPG8Ry4rGmHoPuvKwGwSPYosgekbyWHySUACbiHWqpP2EgVW7yoDTDvA9Yon4CAfK",
  "key30": "3mwLAWJDoqttx16HRn5kTy4HvzCj6DSBhtj2Hhkx2skQgjGrupEAzi9xdgJRvMiYnw5Rcv3wdD4VHFswX5LNoj1J",
  "key31": "5jmqYQMCRwnZCtgwcMzXx55KBbFgQRGwx9qPPgQ4vx8SLwDz6ufQ3iX39jbDUbET5Huyw17MrnkjXptLUEBBBYUz",
  "key32": "31FdZfYeiFecztiVqnTJupmRMxynYSYmxR9kfj7d8KVRoWB9gVVCCzNmkGTXUtoBWBVMfGmtcPS7MUEhp3Y5JrHe",
  "key33": "12o2eQPnQ5s8GNQZta25fTLoFHG8a2K3wdZ9tRh4QT7DY4x4fenBvigJ2DyjPjnUbWe2MF6WgVRZmyFdBJDm3ZE",
  "key34": "4DGUAcNKsoPZMhQaeTXBmC1VCfG8UAQQuFV8pcnYgq5Ms3wM1KAxE1v9jcCoXpPvH7ESrYJ1yxHMa36HNXi63WVZ",
  "key35": "2zZABoxVKhoTPXcZNFGNfwc8skMUntcQbCa9vW4VP6MMZ3LqRE2cDKTRPZRZVFuBcNo9oFY6EWvK978PyEY6ukeU",
  "key36": "MiaWUGCfsWTU93urKPSnjTCLoxVGe5itu3Ww3Uho5CyQHDbacgGr5mAYEtfweeb9mRecsXG8Th6iLNobA9byUHR",
  "key37": "5dN7yXHHWH6aLi1nJXSwTTZE93LnBJSiDdTtdbhik2ectYpGmWJgJvxicfMyKZo6Tb9ny8BHCLkhzgxdYPocQ5j9",
  "key38": "3RwFyk7iVahMyURehH8UWFSbuL1fmBvd9PEhb2cH3Aq3ZU7ojenAk1w5dnXf4J8rRUhsCHTSkwCBDV9tGiiwcZZB",
  "key39": "2p1N5jugaXbVydCxCxcSzcschmBu3CCjaGYsECnRKRx93DE3Rz5ipYkxz6xe6MLs4j75u4RTWYQBP8jExfetNWoa",
  "key40": "57sPNNKt8PMR3JL3kRDpYcmxViWUdxpWbGmtWCig6nkbsH9DVtKBNYHXi4Ro8gkCU4NCqwL45oURx5k5jmxV5eVW",
  "key41": "iiWNF4SCdzt86AY6XCwBMisRw4VCifYNGQ78LdxELkUNvQvxiNoMKo5G581pQJLriz9YXhERLZDStQsgAPAUNQ7",
  "key42": "41CVWoDynYqv8kcMZtLnEYGLf2qXr4bz5Lq4LHfFZN25V6j3awbSWTfPvjN5rw6guG74Ve1gA9Uh4xQSsEDzxsHc",
  "key43": "5bhqAAgLW82Yn6niMzKaWascLJNCgZrVHzsuVw1auepUJMwcYqmfaCFMzjC4gaK5xS9NFMH3QZufVV7Q49SeD8nM",
  "key44": "3Qbg9M6CpbdZPa4qo92mdAgszYNYXmkWCzESEnYQvx4CooUWVp896cmENQd5gBuFkScevik2vdG889V497moGdox"
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
