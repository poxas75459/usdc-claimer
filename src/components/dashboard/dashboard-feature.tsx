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
    "3UUxVruB9VDvTZH216sp8jsMpYMSP2meYTkbtErzRgijK6yp6QqhqXDGDSD3HpNRAWvtqpfWfWUPbstm5sxyKaJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jMZjpucJnUaxm2xXTGExF9r6pNU5W3rvCnj9ocRjj5gmw6xxd1nuLJZeJKkVNvLPpTY9Ar3QTpPCHNfLSD82xbN",
  "key1": "bbKDPdPaRufQH3Qy8AVvMaPnfJ3CsuDkmYQR5fBuMFWWteT6wkwpF5rgAcNNZYaoVAde7aWkEtRQ7LhWSKiCrjv",
  "key2": "3UB4kLuPZJU4aqB62X9au9pqngU5RLtgqcduA9ZtwXpDTEaprDrrknPZVRsH1HUN65UvG8MwRsnxxvz5hAdCmLU4",
  "key3": "5ofgmHxej5LSjbSyBc5hZN18LQqFD7rSC4pvJcyehAt8BUq98qN1zjRc1Uf9QTm6WVwh48jDmPytDSkkafbDKfLP",
  "key4": "3L889ww45hf7w2k5XfmBEqcPTCohiQkM8mWNc4GZxqBBiUWZvNZVAfUjuEkbhAuy4R7FMJLxKZVLJ86faEUupBv9",
  "key5": "BuLpfXe3HSAvAu3VVdDptfQULpwcudtsZaoSTHJsHSXGMKWny1h2CaQtF7SM9G6Dh9xTugSVorJ7Yp4WeNUqpMc",
  "key6": "64dbY46XUZDT8CQgPugvYfDeTt2tvmtGWkyckNxVND9HC2gbf7xjHnv8LLPt2bTErJH1jZAm6ZMbfKRC2aK7KeP7",
  "key7": "4Fr3bj4hVDtzXJoyeTLBtCKDiU45oKN7ab2A5WPWv1XQVjcL65DBHrHhf7CuGfnhfU1vRKHdGuNJH22Urm5dKyop",
  "key8": "4tKPdkxDNRiret66maKjwRJWNf2uye5BaXWYK8fkBGt9N44HHgP274ZjUPTuVJFUDeYcqWTzvYW7tuR6ywmWAA4M",
  "key9": "55LAz6nstdjnSuc9vqLPfPDCGuQCg3mCn5WubXFMJ9HyBnmG5LkXwvVbUusUdGhB7sdjLj8pRn693FTjarp6SJDg",
  "key10": "4GgXrE4ReRwBmVLpRNKbC4Yt7JcEguWF4ZWGCCijHNCdjS8Mt5YLhRS9Bxd2pC6CNQJa7q4VP7dZCWhFSsXDQNRH",
  "key11": "3T3uY9gVJ8SvU6hmBwWKSgAubBM2wGBfVeQLKqUEw2CgDLhorcyVb1ifVuHb82xwtfJes5ngZ9ozka8PHkv9fA52",
  "key12": "3jJ9g3rVTh8n2LAxbGMvNCJiPKtFyhG2YrQs7yrg45LKyHLUWWoBBr3sZ2rs2vkgBCTN1NsKynU2yFyRdKwDQ6Aj",
  "key13": "g2owASDA3RLfTFGbjbiS1ZjsS46Qiq9E23A8r3gcBFx4eyMVAauR14wbEdfXGK3LkC7vie6z3kE9CEoEYz1xTga",
  "key14": "2RvUSoCub4A8eh7sa2pW1Syeuxhfm6S8q3H3z6gRhCw2RPErWptrBGLccbmjBufGSWd7uqxogusFiPRXjWZTBMYs",
  "key15": "5Xj9eTEQgzVcCv6i4qrJNBb6zQCsi6Fqo4r1yNx7akLNvxRG8oiXJeinKjzFV1rzQeUV3whxLdpTqg4jZmCeL9ny",
  "key16": "BSR5Th7RprmDHnV7bt2xmkTFVYNQUNpZdtWb6RirQVs36NQehTyhmUXhdPNtpyM7b644YqFoD7HmfC6HzAhQjb9",
  "key17": "2d714t9wDAxChnRHwGrGyaRA8QCEDWtPUMuZckXkWTGsrQLdF21VDATBwm1dcjRo26LHJjfWT2PcXmYFZNM2y6b4",
  "key18": "HTQzkRmPWFfSWwM5RkDu5KK9Lox7XpRM1tKPsuMEMJvPnteRuvZwGiY7CDrzt9cwbJLAUxcm5dWhHFvVr4vvT4k",
  "key19": "2xTMLhMGj2LdGaLMcCVeeSkT2HUHMWrqBa4fKYSSN1GwY7cVV1knHwvJCb7KCgjHTcaD8g6gNWG6VAqn98pyFuxh",
  "key20": "JipTyn6SAX56HFmrhGR7CkW7wCRyis3uSj2iMJ871eUTkUpPApKsbeDk3u1UuBLoyifApfF9M9f2CBwxmeaDA3X",
  "key21": "3WeHvLLGzKoiG1R5fEgXHCwVtf6rVrgP8ouFewtETbx1YK4ckSP7tc5Ng2aintanLwEC8juS7WcbUpCUW5wyyyMa",
  "key22": "FCo5uz35tGCvCjXJdfm3xDyZoTyZz7WYyfz2fJFpbJfyBPqZn2sBzjmhWML6rhZDfpnwaJEtrmvRvwPeW1RqMeX",
  "key23": "5NkVH2w2ntvXoBsriZUaAZ5Fnv2BHcVxG7oVXio2SxMUMBYS7ZPkjgM3YVH68Uvsj47JDVEay4koa9kmQba46XwU",
  "key24": "zW5BMeeefhz1rE1FxufKmT4iBkZdLRSvMQDKgSDXKDGLupFL4dFfbWJ6YcW8of3qyYxKuMr3fRzkPnwTECvAivz",
  "key25": "4AauQrSCm3VBHKeJudUg9kZRTDWFvK1Af8T3m1J4erpZXiJ5reBGrzAyT8s21GbR48SseWM21N18M4TFWvi45zet",
  "key26": "3iWi8dHSnbC4MmFHPDUqtYtwzVUZskGuSWV7vzoY5jYz8zMGMPxFoug5U3tUgR96dDGdBKoWDNPmJYzkwp5v3QbP",
  "key27": "4fuR9E7oLZX8JZUeS15hi3Xw2GUTDhfp1amdZBjkNVmK2uqp7ydCru458YKssTTamaqZ811AZ86jVoaqNZik4h5E",
  "key28": "3YgisbjwBX6QagDy2thBrqZqLdekvQFGKNuK7to7QJz31vUjwCPBSdPshT1UXPmPW8X2PvmbcstQNSuBsjSZFWkq",
  "key29": "5C2FSrT9YS4eE33VcoTtohjcfQhnjGRGS8bK6bA2dh8MJNKyuon596E9VSQKtR4UUPffWPFvuJ7RHf5ModrnHawX",
  "key30": "3UGrSbVpQrmYnp3yi4gggpbXVQ6VFHKiwqaDYAedddB69rLsh2xDqQ7ZU6npnfXUXBJ2N5tBz8W2coUy9UQWsdv8",
  "key31": "5CcLNj3vRinuGPkHqijcox1GNUwWc3nTHz9VbxcT76AByTPVkbhUbkZsX1E1Raj1AaziyidFWeNXFJEhf4zZ52eU",
  "key32": "3gPqmJ1FLeBt3A9yTbMFYp3Z8t1LFNcwLBd4BRzAMTvQX4yBaDAECtfptK9TseijYgbpvwL8qfwzw8azzM8BML8e",
  "key33": "4pLKukAEQiEwExtPEzsnrGfKEGPaMwD9mh5KL8oCvsscD2kUyzSAae8cP4skySU7L7fHtWyAvgRKEqecExHobYWy",
  "key34": "4S2hgq4wR11oBret8GPLMn6EpxAjow9kcEEj4ekSHVxd17psFibSyac3R9PHbNy1Z1GtxrnPAGmTfSMN348bz9yq"
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
