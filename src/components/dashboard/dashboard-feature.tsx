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
    "4tdfTHpXHCp8fmXTKyisCFhnshVa9bzzbeE5avVunuaRXjmT9CkwhCdwWAjn5ck7CFQDdLPZfGsLGAfhEeBXi6eT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P3dDxqeUTYSkqX1T9BT57sKhP8ifEFzdnJicSfv1PUBxy6xH9C2VMVUycxPU6PJMQsz3xGs5jCcgUaKGXVuJSZB",
  "key1": "3kabbMnxvbW5DmxPNqqZB7JLfFEj55QiJeyu8FTsH9GDydnb91QNStE1sf3zCsjGBNsQKWYYDyvhSQweTc61w9qA",
  "key2": "3TBv8mBwSaEHBttCPDV5jqtEpXUpE7Kuika5mtKB9jD8eCQevYdF37p9GkhhiZYLp956gzkETfAAgh4ty5YAhoZR",
  "key3": "3RePLW2b8t4UfBMgr7SWQLrJjZApPkLMgAiuMEM9pZQEwYGrmmafP6VvzBPiQVTqHj5w7ZByhYwFAK8k1B4M1bRd",
  "key4": "2pQsdvzWakXv55tmavPgJhR1cbyWxZUDkn7QGVKZPZGdiEyzgUyPdArgBt5mbKUVGTKdmGDLGyS3ndDtoznoTXL8",
  "key5": "4VqYHLVdANdKDhmxoisDyrLhejGQSEvgp3rjk6QjuQLUQuRDqFrEFhzXkQGdCbr1u7HZvsW8us2NLowkCuMXytgm",
  "key6": "3DMLPmmjnCfxXv1zw3EMBkqMoRUyWVniApEsJgRxWVKidH9B2SEFQEng9PcFHgEXVSbpLRCi5Fy3nvxBJTkCisjW",
  "key7": "4WTSNkVR9ruxSqFweoezwJ9FJ1yZ8H11Qi5tjjytzrZoXrNHdHAJQySSBuArZG8turs5ZBsYaoSMJe2P1USvHGX2",
  "key8": "5kobBfAic8z7Xa54FLXBbBAj1TKV3Ry52uy143m74RWeL4WxASpjWm9Ub6Fh44vHhrM9Eu1xCLyej4aUczpY9qSw",
  "key9": "4LX3wBoYRsPDEvMwvcdYSSvE3cSgpswpfyeABtZVSfrx6VESoWbDiNrVqKVMiEdbVWF2exMLEEXz1YEnW5Uv7yrH",
  "key10": "4bxUVS12NdDTFEuChJH6F9fh2rpVWxQc4iPzLSKo7H2zwJjeSc7J78JqVVr1djy5SjMqpmtJnWqeedGQeBQJzds4",
  "key11": "25mDQWH3cVhxkBpYmWsAciPh6cgc1fSRgsngWrot1uuvCCB1yZDrW8KnVTcynvJjRrK5SgA7Q5DwTYEkPhuyTPVs",
  "key12": "3FG5gLAjhe8QqN48cbU8iZMc831LgmA1tZhY6RbeeV7M8x9uxH74THqdicmA5tRZzf7WXYPFfTsQV2MTKWZmQNcR",
  "key13": "5nr6LuVhyTtbmteiaR2VeAcVLFFvTaSEARKi9zocN5VawMiVByxPm8G6RxPmYmZ1KGyw2JKpPTVvFrBuVjPMxzWU",
  "key14": "3nA6auQaeifEc5KKYisnAMURa8SoCEAWb9WWif4Asmfi1ZpxZvjJmRJfbUvq4DPNRoz6ZHqFQHxV1Y5ghXgyPebg",
  "key15": "2ezjfhPfMWijHZReHaHviVmLmk3TtckxrLKnmUA4b8KgPj7ByA8kPn3oiZU8LyH6ywqsov5pVe6B2JmnxxPYSYEJ",
  "key16": "2D7bdvjnQTTFCzo3TxkcNbknzWaNjaVdjg4P9vx3DzeQdFp7qqiQFYREo9o36CR1oketPrjbeKRVrrbR7tFjjCNg",
  "key17": "V468qNpqYQuBsNTU4K6ty2aa48MRaseXZZVnYvR9agsFpuxweLwYADEug2dCL5XRZmMyxgx3BvSJNNTM6Jknguf",
  "key18": "5VxCBJDBTg8iqLftzU8v8nKcg663MgoX433y7SFVSNC3eW9vhupur4CxWanA1tx8R4rfHu3SBqLXj6z5E4QLznEi",
  "key19": "4VvqmoTyY2gPqDRhsHjdtsJm1RhWCRxdb4WprTQygAMp5iVVpT3BR3ELWCfEQJFnG6BQjK79gzVYpehZpeFBfdfB",
  "key20": "4nhGb5GPbezfBp4jPvL2qybj4gbUXXXi46BKBjsQXot8xsprk2LmXirTjk1XA1iUxn7SBZQEw4bG4Fd2KzU6Wm2Z",
  "key21": "sS3Y96kpetzfma7ZN6WWkPff3pZgEpYVutb4omPwgTDU64nKAfX28jG6kpryrcrLWmDsQDG7jLEBfNJs98gPa2z",
  "key22": "mZfYn23qqPdEgjiGYqdwqnH72JB6JFzZj7AJCKit4zpyNa8vWZvrmdXRqXbSNZU3er2ZmqhFjqoZcNmMPVhYgG9",
  "key23": "61F2HsqruS8YQtom4fMyET1KTKxwQg3CUuVgypyL6xC8wgs3ZrXvh4MvnhWxEic24h3sTtAJEVnjfRyZX6yoHL3y",
  "key24": "4ER8pJAMf9Fy9NHv16gKpjovcCMSvcuJozhxDghKhvdQfsvu9BHpfVPgqSDrtR42hGB8S3K34uRNdFqsQq6Rkhe1",
  "key25": "2yKFbVYxRHzVkiEBMuekny5jJNLy7ztXaM9MJBbaA8JUws74Jp5jpYMLZFYpf7cNfvCSqqdiv29heDXrtRpoNAfS",
  "key26": "kSsfmow38yDmGych7PaPLq1FuEQPtPDCewxDMLh2DC624Dwvb6eWVsgoV9tEJFgJatavttENQW3jjvhemmDXJBd",
  "key27": "eMxe76ZPhuDpftQrdzMxxt8hbfydibK8EVcoGMvySw8Jn2tfytTwnGP6Us3oxEjTJtbQ61QTLF7sUsftdveUvNJ",
  "key28": "4bAwvTKDAJwLaHZDiTu5stespfGB1WZvxG4Z7WjXvzj9WFZj33oD4mAR8ryCi9UZ3GS5xAnQ3MF9yzw8euLSd1W3",
  "key29": "31UH1nVD9ARymP4ncdKoaTPv2su7wwfxuKGs9Q1LdVacUdy2qEHvv586n1R4J3k55hv6ZVLNgCjFkobnFrDyYFwr",
  "key30": "3p2udeHcAwrAbWPpraq1Nj1BwDVaCEcGeqTiGhtNYrgfDmg1LYWVEqkXTJcfwJ1rwqUXN9SBCgrsdAwK3Yzs7PpR",
  "key31": "3RyK4ZGMHsQva1d1apR6kALaP2upeRqG9UYmGQWRQHxLoJPRTf778PJfQ21xkDLpANHS9SdUAYQKL4cXv3p3kbn9",
  "key32": "NS95x6Dk7ozj2DdEG7thgzprRmtHCn2tbKmpDDrBzXzaBHRdEuSYuncSsZFpKw4ofFJykXJyZVV5ya3FhmzpYss",
  "key33": "3ZWFXJKAA4mLPoBDuAbFKDeYseGdRwgSaEHPW26ZGDUuqjyUR3CANQ9JYCkWus5eD7UocVynhk56vpPtoXoctQSk",
  "key34": "5wDftVLMjtLmveZdLDaRxJG6H6HVpqdJe8VHAzDDqMDju5KwUmpuGnZkLHT2RHJvPdtbAydxWaqjD7NxXKFvKw7d",
  "key35": "NaQT8DHGPsa9HK5URBCwWGnGSfsNMwAEJ1yBD79fbfERgBr3gFy1Jwmf3YPri5Tav5Vxx2nWobGtJSSdJtp5Agt",
  "key36": "5nNUv6XyzAshwAmU8N9nUmMTAGehYFBMdoA86m3cpDtVFFTp1hMKng1RtFT1wZ1Pst6AJXH6ciDYNk6fsZKbZa33",
  "key37": "52CSWqefqEkU9Mo8pqD42RRk5FTb9UuKbdJm9fC2VS3ge3HcRbvNbK3KJakHQ9EASTKgQFsSNSXZfmnWzt3dNd8s",
  "key38": "333nxT2ieutjYxZZhVUGENKVGuopQ4F8MdAqLPigo2fHXPPnsiMFFHQBZdURY3uPQkScqZeHmwzK37DdorSvoCFK",
  "key39": "67pktSg1Ru7C5zus11n7rqcHyndkVpG7T9qsuiobDyWqr4bgWKjz3eCxPTfhV5fBBvG7VU86nBMucm662UcBUCqb",
  "key40": "4hVhAvwtSMZVYMLWB8KxCp79z73hTmNSxDAfPNeLd2JBisaHTW5TZTtLrF18mQJHjq7robmQHvEXHnR13EXvZ54D",
  "key41": "52dPqsm1fHPr4h5ojdejeoZX4kQSihZ56SQ7rMqUn3PAYv8XvW212yjfcz92LfwsDd61Dan7LNcbdLsF37Nns7tV",
  "key42": "2bZAALea3UjfrYmRgpZok6BoDxp7dL3eA9ZudNjdS83TWZia1s48C78uHo6pv8foUn374zjnEcD6QAnDTjUsV7d6",
  "key43": "4pVgMv24BCqW4tFJzWBhyFv25PKJyMwbpehrUExRsiTCFNyqA3XExCiDFM2cwQhkYJEewdur1CwSdZCfAuaQtLem",
  "key44": "5EPyikzGetD4EG32fnjPfreATF3yhLeT1ZqsWDdXX2ytESwnE77Zq7ChyJYSJuciNPj8u8hgJD3f97b7AQ9XuinJ",
  "key45": "3zNrED16WgLcY3tPTd7rwDk67FedY1w8ctpHuyj8TLQP6ezVee3EKpfZDYX4w4zjXhVNdcDfrUeqN7KG2PWRstQq",
  "key46": "4yC6Wiw9mVXEPxWLQRJTGFWDo1x3F8X9NrhCUUUgyertwFiuabi5HzYuq1AccYQ9LLkijicPQetLpim5jnr3Lv4J",
  "key47": "2RtDZy6XfjqVD82zAyhQj2eFpvjp1DzZpuETk8Cv1M3DBCHoubhAHsUHx31RamWy1Vg9vSSTFzf4XQPqsF9ZB2CL",
  "key48": "2BCWGsnhvvWKL4X26xCPzTtEvkLRZDFjfGUhQ4uvuJmPof4FDiUztHvh8P6XisiTBJCNHLVvxBqvNsS5cbwCHtLN",
  "key49": "21gPGaVzVX3jnJm2x5vsm2U9Qw5EfbzWvYBU9d8VYCav89pDksY6TsjDYeyyxtf4ZVDnKVwFLkmazMYGsiEQjjpL"
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
