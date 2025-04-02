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
    "4zys57CrfrqU76zNgF1pg82DHRdeQWiDiLVstKrAGMH2PVGCYqMHB1DGRfn9efHGfChoRWRpPnCtrzEWg2wTtZdi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kAcYeFVDR2hxKN2BrR54fphrpj87nV1m2byWNmBMjrBN9Kfzpa7iV6vdL7aJumDhmhnyZ7g2rN4tb3a3ZwHjsD1",
  "key1": "3fuLRKjrS1gqio2HycyDJAg2bK5BJQJgEHmSgmcRkNFvotfQE4VqXCAEBAP96MyoC8m2ZzBYsC77uPuGABxfP91D",
  "key2": "2V8e1QVoXEfWugqWvL9sGscaaCBKcrdzHm5sytAesoqTi1SsFeybmC7GRmR2Qxi56CpFFJL5yJCFrtsqpAwSsfNL",
  "key3": "3ANsiLqmvt24JpHSDhCWTgFRP9oEtgpHCu3gzA2chz1e7HHf98S81Tf5zuTzhUrY8Jo3kUDTKU4xuvj8red2btPw",
  "key4": "4qLuYj5AgHQ3RPKqofj7kZFhq5HHzMoYo5bU1srptsamMEJ36Py4obq3o9tAMcG6H64HBntGYPKSK9Ue9ys3KJmE",
  "key5": "266cQSRHrp7ohCvHjA4jfj2sjcebsd6ti7wQUNhgNQbQDeysmS2Nf6Ne99K3yd4idcjLHczjVaZDbc9DLZWbQi73",
  "key6": "2eM7P8J6rhoxuCCKuRc5Y49qvuufaQrYsYMSeh9yJ4Suo8KWEtma4SJ5PvX1js1vcv2m7ACiHvayivxX9pKMLQAK",
  "key7": "HCHZvPCEWY4zARTMEy1H57UzjfvXWrGmTuUuM6Dikx3jYGruXYdABjqfK2TUPP939fNPwKGRG7FKxJffNceNvLd",
  "key8": "4eromUKrWPshqSvK8RvD5esdYuXnvU4Fa5oDrBiAxKHvcipdz49CSeXW5fuwxZ5qh9stBSPKRs44mHqg1wcaNrY7",
  "key9": "4DgU3QMmoz77NVXnUtCJ8poUNji4JidnMN4Bcfmpsmj6acGdyReGGD8Az9YUiEou8KuxMEtJGFJpnjo1qkkhjXoo",
  "key10": "2k8hBCGUWVynVgz1vBwjBrBW9rkibyTpNZSgXtbB8cLmTpU78Ev8CATmwYb8V1XBbm68chjtecGbUsW1qWBnYnFH",
  "key11": "67KVWo1PmpWZjyJ2gkTmTo6ASyMhimkw7Az1WuQpjZ19sEjLHhEUzbt1jCVJuyM8X69SkLcf8rEGqdghMJpo1hbA",
  "key12": "53SAft2x8u5CBow8o5QX8kCoDmTkCfK3gQ4E4SF4QR2GfQwPmE8EYBUnnSggCAefvg2obVuTnvauKxYudoPHEDCy",
  "key13": "34gbn2RxQSKYNNyH8nVCEj7agpTEZ2QkxQkyMKBXVSu17LxHVD4Km2Vwa3tYv11g886JyTGjcQ6aGZzX3ZJ8buy4",
  "key14": "4Zc4b7yRCNugD5A86g8QTkH7u8uiQAP24LLr4GGtwW2UUxYbjuCiR2JkyvseF8fwyKALoZFX6rLRqF9yez4XYcby",
  "key15": "3dZUfgKPsPUGMiRrHi2PG6okEqxhMyf1ynwwRQCU9TqH4F4CoM7ykBmFjsiGnTobwUnFm1Wocj5ow6BkZmDPa5Z8",
  "key16": "3aywGE59Dve6ofi6x5tpY2acjhajjb22mFiCKHLCcE9c19S8S5jxrciNt7BmkU2vqZHpryNUu5sLHbpujSzPxSpv",
  "key17": "3YGecv8doz3aWFz3mmVVXdQyZ5c5Ss1bz1vXrngCqY69sEksSDPPXjjkDMvZ7E9xHHBaa2bJnMtivhinWeSBNSDz",
  "key18": "2eWErFDd5xrbwvpeayApExtwXGkTjVKTXj3G2bFxczucd47bG9bv5YEBv46TJs2kJrtiDCAk6J1vKoX2R9WXPFqy",
  "key19": "59Biq9TULpHt1bkHNcozQc7ZSHNqFErs6RzKsUhZ2wJ5oDNEBN6e2Y4zDNeUr5XsaKGXAqG6J8Q5WyFrSikPckAn",
  "key20": "5R65u6EjH61yXr7V1rX4mrEmxP9ezchzuMDkbuTk8cff8rsGR3xfGvzSQsd2o43pD8jCnKhSWeEdgxq5fqrBdxAV",
  "key21": "35iUmL9qY43d4CTc5LRyQ1jeMqNj3aiDN2LafiDFE7e1Ysg9Us2RQ6emDCA3AFXmgbatjihToknJoG6QE3wTXbB",
  "key22": "3cGAyzGH3UYxzWfyWsfnwv8DWDaX4huhDsJcY3Advauw3oAzBoc2eQH155asizNqsXgmDynKTf3wiMRYLEvxDfFy",
  "key23": "665bvWKNUe4rdoNRdXUSHG3F8NePipGVsVhqvQ9zLw38vHyb1wwCuaiQK9PEPdknCHAcSRzbBS9RfB2nfLDuTY49",
  "key24": "2dqyomUxe1YU2ebWpN2hsYWVEsrSTTZ4XnAFFmbEP7wG9wiMQRgFpVaLKZuqKiWUnH2nTm935dpRs3Z5YDmkLtiR",
  "key25": "5io4eCvyVmCq19nYGprVQ6GAERfZ9XpkbdEJj6qAyHiwwaEh3AyuW1VqpewLpzu4RCvpUgGBj8DoKgPuYJVbhD3K",
  "key26": "5fzPQFYGAsuFzCoTfcGKBUDMX3NsJeeRvXcv5azxMRCBYUStjSsGFJvqbqJrRgYQJoTMigb2j4BNygVSZvqbfCwT",
  "key27": "2NMJjdisSsKpEndZC3PbycZB7izLZ7BkEnux9L2LkwePKYewWF28q1AEdZ57ky6e1mZduVCCAPt6CdMaZNn1WQ6t",
  "key28": "ouSHFknDynJKn4RxFSHaw2Jr1HFM51qdE28vRa3W1tzHw7Ly4nGJK9rNvT2tTthnujvnP86sTfvcfxxZQgRHJUt",
  "key29": "5xZ27hxWLJh57rUReL2cRd9L9RC4F6h143Lhc9XW92xxC7jCjbdtfjhDpd4YJEwPQvfK5mDpDDDSsjd3Vx1viZHZ",
  "key30": "3kod5cquN9i5DgjVFZCiSvudizVyriNNFtjKniNgXAgRUETtdNpW5AWALpRsWcDiXwvB4uW5X2dcsMEnXCqDDqpb",
  "key31": "4hwMWES9gKGxQhtCMFAcMjLP1yC8qpLwsYd1aaneYD178fae1r9XDm1r5BjVii5NgNXAUxyACDAUnBmgpZJ1d7vq",
  "key32": "4Z2B1YoaBGQqs2pTi22kPxyXAaCbjZJ7tUYxCpXAGdoBZQHB7RwtjAk6HMLPA5otspLqmgroCUVQkWwN6UdAf3gP",
  "key33": "41ApBXdDqjEZMra7u7ytoHrp7gB7iff4BkQvDuSwYdPTtwhXQemvJjQfN48iTa2Nx42hSgGBgffaTzSNzT8oXSAD",
  "key34": "2hRDMpLBxYLmePJPhzMWteGTqmAaTHKbeZPjoHUdDbJ4asJJPxbZ3veW8opwvYvffYSwV8kowoD3rhXMDi3HvAL4",
  "key35": "37uifBve4QUrS5GY64YiGHzuRdj6jbK1ncafNdnV1ZQhXhzpEFyX3wwtwEbgcR66iPWc2AsjpNbAfqbsguAF6Qwt",
  "key36": "57K2oWEbfufe4LBMtRA4AvSS6JDDn6p9HPTyH1z5b5TCDUzEnvmSXwtVENmYXi8YHVL9Yfh5AbbA99hLfE264Zwu",
  "key37": "5UDkHYfrDJPJmG9BrXpZAnhHRW1wb2rCZiu9zbMpygZpvXGHwuHuutsTry5TE5AJxh7esYV58Dz9AGBetfN8a8Ht",
  "key38": "56g71CV4XLkUYiLdvxNN1AQvJnjyULDzArkLSQmRvv5pHrxyNrPRsmBSjaRHJGzBVG84dHMzPncWNCp5uEcptLjs",
  "key39": "iaTQKTimrL2ZrRGs2wVCkGVUFicZfD1YrUKARcGwBkaRgJb4jAK7SJ749sMmADWVPGuZtYRTaU32HMM3J9xbHEv",
  "key40": "eUgtHW33EyiEM1si31hKkUqc6A764Vvm329YHmuPwgM3YruUrdYWHBgxMaqG2xdWLuTtz1A5aT9wZYJma1TP4ip",
  "key41": "48sVNfjveAR65Q4hpGrVogaJeDHz3TGJ9Pre1nG37FVB66JDWRGybmbbxqCyMYU7Qbs2imBxX1waBXVLCYY1s8SD",
  "key42": "odPrZV7a39ENTRPexEQLgQLC1DtckHTUKQtkisEFVBTqxoCQPDqvTULwgoQR8SCuZvGbdjykw1brmCNV9aGxEeG",
  "key43": "3G54TibQKUH3GDC2JNQe9f9jxDfn4NgsFEAnBTViLoq1pFcmD3zJk9QT6jXEgkBuXHi3yWEb5pWtZeH3iBQ8oi3A",
  "key44": "bsCjpXfXCn4w9JQsizeDuiQrJPZHwCJT698gZkeiBbVYGYxTva4S9yavDQs2wxmeQ4o4BZWKRyq8vj1PbGw9Ng1",
  "key45": "YeFrZFi2o2EP1SAT7QCDfwzEBZCGhCaEyNvXCLWaVswK5SGrWAAxKqLtwwEc9dGnHrJU96JaDQ2q6xL2du2kmfg",
  "key46": "qsgNpnEvysceDqk6XRxguhtapayB9UKruas9fYcrQXG56t7bHxwynUNpNhAW8EqbgkeAWcyD4ZZXtBowaMVcAKi"
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
