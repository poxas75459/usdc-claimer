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
    "3ykccBowZx1nMvC56u5WXU4MbCNKQyLD5PScqcXn9JathDj9kQj3TrxXEV8oFKwrEi3hZiFL2HKJ8UJKRqvtYmin"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hfm5wtVoFLjwstkrSastYBTGiwe3hf2QLUh2EEmwrycZ1aEt43VRSG2m6vEjjJ3ittdhUWb4MLkXocBhQvPnex3",
  "key1": "4JA7GpFiAUmTcTvFcezcKQahGeKN4S2oaHJG6EgpRzfaPxETVn3UAVs8qBw3kqUYJLZyqBRjRJcEeCDkuEN9nHUc",
  "key2": "3qZf51N3vKhigg36sxukZsyzJGUQGAGuPE4hDvJCfStkoQZHmzFtgFmnWR8ydx3n8wjMq9EmvJPkYpRGMkAm7ZDG",
  "key3": "2uXFpqxcJ6RNz1gXYGuYFxyHAdN4iwpbDkZ6RrNEwsGSpX2m1PuDV5DKUYzn5cLSRK4gTkYwsHFutN448H8CDfHU",
  "key4": "4yFa6FsJ2Hy8DHmqmfY4sUq3tS16m2MNSseU49G9LBiwcXPo4o5o8xB6CEM2DfCXFukQwGVztquaz1wXByrJKzsb",
  "key5": "4xNHQ3QdD6EUC1rwWSvmowWfW8LPEHkByK4UNoTp72HMxBksN2gNV1F5fKJrh7WhjsQLFa6np2jrvkys7QPpf3gy",
  "key6": "3atGCDuzvYEXKgcoKREabBooTgPCrHqK1CuedWF7io7iZdWc1kXgGY8aedexQpoWix9XNYA4XxFQXyncT1pN3Xc7",
  "key7": "2ZH8h5EgUm4DLJjCKQa19Xbo7mtHMz8DcrjNvRFYMimXAK61FpdpDq1C3YEaTDszX9NRNUBQRqKH4N1o8t7qXPZU",
  "key8": "xUEnUQdhWfD9R4R6E8dJBWfvrBRQnWZSCAi8TTsKMZS5K37GXB1Tus4SyWKEtCDKEzQqLCWJ5qc5o51Yt8fEKnF",
  "key9": "61XeR7oN1W7t4VjNRwXAfTq82HpZ7jBT5LkkQK6jvv5bLTv9t3LRz3G2qXMFHkY2uA2Y2Fc97Q8StY9Un7Quqtkv",
  "key10": "4tSFoPQPBx8PCMzFKfgYswAq5CYAxzjXVAAZa3gFbSSXYAxW1PkQdpgzkqA4GBp8rwJaE8BEwQxCt921Amw4aRhC",
  "key11": "5pV63Z3n1pZEXusnRAASpBoD1C4tkvAvdyMWYs3ReHDZm4iSJn9yGqgxae4384oXmPURjvASU3m5cXmofQXALbKY",
  "key12": "2qg2xH7RL9EkEQyreYnAiGdu7N4CqAQSRXftuNLnCEYw4RtX6TdF7vE3eYRfou3QCT8wPTDw6hfWzxkGwsQuLGCg",
  "key13": "3ZdBKjiCn3eeCchaPNX4NkqGyXAX2A7ka5KhET6gZJMr6zCnRLjbzuurTGNUFfD8d2hkYKq4s5QUxrn3yPXUqnym",
  "key14": "4f1D6Nd1KJtmbJsmZwTJVU612oLxpgUxoquyxNUURAJ5jWxtpMY9CEn15aRM3Th3ooXeWA5mCfoVZ31385sdwLR4",
  "key15": "koSCqeaX2TDfuyBDcskpqDTSngGzK8vsP3C1dfKm11fjL9su9rSyLnKv5ymauzNWzMWHHStRBtx9aRbsuxSp6m5",
  "key16": "usE35xTprdKBxfQ1J5xzP5sk8u9s3GCC5kYtrGXXrxVvod6CrUicEaZEe1nv8Kwd449xy9ma583W8th1tQj8P7U",
  "key17": "2GMiuGCB4tkydqWz8hS97dmgdWB7bSTHeJ9d4SmxAC1rV5vLP7fpdQqLYzJyAoGHinKW9PAt27UgVXQEpMYUghoS",
  "key18": "4mC6Go2KtdQkyMAnwunZVMabYdoit38Ghk8VT8x8qXJk2v4JCZxC5d5FuCvkpKXwYuCk3JjRK6btE4RVuH2iJuC5",
  "key19": "5BSStzWCtsbCZCohpDWuQc1gfTqQEs9EiLpznJMAZjyzuW8DusrhtLU6m7qvJbGLT1F96C8fFMUy2Dou16ukrMez",
  "key20": "3ykrZZ8xa8EaBWXguT45rqLZ6919Lp2m9VYRqsGm63S35CvmCYXHZ3TVuxkdpwa1T1xdsPVNmcLADDfwcvrrJ6Y7",
  "key21": "5FRKhcBA9McVyv5Yz6KHHDybbGyzuvC9NYfoX8NfyyjkDBhhk6BL9y2pK6Dn8Swe5gvxkPPCVEZv4p2LZHar4DLi",
  "key22": "377bxoaDGdz64ahpiA3QWC2b1MaZyLoJWuAX6NDBJZpLfGi8B7auLDNzosV9LJs2D8tUc33RgjwvsUuTaaKHdhGF",
  "key23": "4hTQ1u7W3iGrZs2WuWavp577pLjPkTq2A4uxEWWeNWKDg5iaZuYLfsQoLRjShGFstvLgXny9WRk792FLTfuneYMw",
  "key24": "2KupSM9S51xoEMQcTa5Y4S6wqPjsWMC9VKptUoih2uyJ1cjywCpHLNTMt7hSn1U35K65VPtgb8HV4m4RXsMbrDXi",
  "key25": "2Gig7PgSGhCuupjtQCzBXsaUHD7GMkHp8XbmQx2xbgQsoHxxVTXtdZkUtZMSLbHenTZzs3uVfKWFbboo86uhVo5n",
  "key26": "2F1LZGukEvweLo2aShzutkDdiP35PCidLq71wHUcknHDEjG8yqYK43d1Q4ZSuLAeK3HtWKm8cegE1S51acstQzkk",
  "key27": "336qdNKMLFeC1AV9bebrKmCTbRtwj2VVYrThS7iTBuwNKhJtADxxxWZwfh4QePcBb8mcCPat3rpU81jfVVR6UvjR",
  "key28": "53cM61jkAAEoEyvyzgunPQDgnFdzqDxdZo58WSq5CqkJkYQb1E2sa3kVpRCzXC7MnQ7Js5cYN77H7zSVg3mDCeUM",
  "key29": "4tVHa5G7AzgDiepMDYnnGhqc8suLW4mLGgn7oGPYjsMsfuE3x1Sdua5GrhC13i7AE2w8LS6VhtWdm3fEtRWMr7st",
  "key30": "F2JqXbY728SJpvkXBYRyyvQZwLt4whPi88Enos7KUWKnRAKN1qPjUzVuegLvaXPkccXRPJ1Qd5Ew8vrMcGZdfPw",
  "key31": "kmBUtAhdmDFZtn34yfK6XDCoSNGgu8bymC8reNMDWm1Ra9hpaGGqR8jH457y7b6gZmw9KwrSXn2VUacwtRjMARX",
  "key32": "2D5YT3GsNxYBDCrBbStZtWGs42hWcGdN5DKAVkYd7P7FEPfA6ZwFqiPYU15EyBGftQBdQfWT6hNWh3h7rfVmS1ep",
  "key33": "5C4P9RCKzN5SeVLMEoBtKBjFchBFdb7HgrXWmGW8W7nypbvFAZ73njjBYHuRgopajgiyquCeJMoW1AfVv6DWMmJ3",
  "key34": "4mGKPNyUFR4Dtdhn2J2eByZNe5UgEcSMejL1vSBEMe2s5xXgnLVxDLs7829rGk9W4GwHgWCpK7qQ2dEdF19duC4C",
  "key35": "4NRZKwPgZbzWhwP6JYBECdodVScsFvv4XBkE99oEm4BHYxoyc1KnmPCiEBUcdT4b1FvAEQ768DTXsD5xoUacg5MG",
  "key36": "b4MKseag9WZurf4fCUZNpcch4mx9QgwHSPQkDrurzLMu7RzUA9FRBb2dTBc8R7ohxiJx6j2ADvs2y1MGxD1Rbzm",
  "key37": "23cheG9FC1bGYLm8A7GmJRAWS4sn1Nceyod9K642J2hJXiSsMp4G6L1KjSVRCnUvrMeUrYHrZH4tLhW853mSeM8N",
  "key38": "5NCHLspE1nP4ELigisWb7Nh9NJzLsFb9C8Fm6uaQm5HWhWhCysVJrBTp6cb1NCo9mgvnTHTwFESfYiEvdH293Zbj",
  "key39": "5DqGCJKtHuWkA2zLHL7DTTaBv6HQZeLNeJsvTNEavqoXyk885cCTsAphxzC1o4NxH38HaeGuaE279auucmycskEK",
  "key40": "3iCtPx73wgxiFHPC9oPd41neVhqLHzKSxtRKBzYNDU3JMH6AKcGY8X3zfTwgbKBbUXku83H5sX8x81MZt1Z2bHUG",
  "key41": "47pNW8c6dqPN9hLWofqo6aU65C7qk8AN6zpvtKFabf3i58aQ6N65nLx6w82HvtsrnF1o5kmGbHqxEc3qD8bxvxe8",
  "key42": "35Ya8449mtPUceN4Gu34PmpsbYiDPFyrqnt5quu95jpNiBN8YZt9VzT79mpYuUCE1PuskqD1yt38JbK3Gwd4bkz4",
  "key43": "557NS9mZs3DPZXY3dVfBJhhW5CEtnZ3cTZn94V3wU51CxVZ27epAYMPe1x1XhyoFzFaYNoJr69kTPzrDHNibGL6f"
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
