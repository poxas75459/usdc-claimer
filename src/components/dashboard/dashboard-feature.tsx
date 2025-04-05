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
    "5yok6q6bDzSyT33sLFHooPd18UuWDDEWnLehaVcDoRJzFkNC7XxhrG8qRthpawELMQyf3hS9vSxi2Tb3AjNcuEzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1rJaG9PcB5sHCqHiymywpzjg2jYfUfNsaqtgwjbjdfpcT67psj63XTYYfzS21RH5FHTPSPTLEk6sTkNw3vPLLpJ",
  "key1": "q7vtgbpb7rKuytWAZv3PLdaQPQnG55ZJYF65bABe5eoHDac6L9pkjzdL8DWaRWZrJpdbwcaJY9WEfgzQ2poYoEF",
  "key2": "XJUDZQa6QrjSwhKRGowXxhGnN7LzjLfXd6VhwdKrc3stRUYqSSzvL7Cs1DSbwnny79SyHcadx8W2Utfmq4oxLNL",
  "key3": "2dCE7kdRa9bRyVhsJCfTodwW7dT3xbuz6YfqeYvHpV7zBoUWrmpZGhKPd7qeKuzy4dRremSrxjCm9HSbz1iz4Suu",
  "key4": "P6xgVEMoYzhXzZFrFjX15KpJyC299rRZx5Sw5U18nUycRtxpygUdC1GsSYNosoEnHy1hiFRTRh1prkUjxxnc4JL",
  "key5": "4oNk3ZPNXHziPjjWiWaDUMyGHQbphUgfnttLF4QSxkvvUEb4ctC9cfGM6k9E84r6r33odBwhs6FhzzdKbfnCpw1H",
  "key6": "64UitnooMVEruHHsfSD74pvK8iufvoraHX3pW5q18oHFBgvyNLg7YjekXFQ9fnHfmKqZ4dnHGedxXDFnAphKUECK",
  "key7": "55e8S2JcrwTWPxbTNkaXXqfeABxNs6GpX6LM5RNJMdBv2MK83c2JSJGFNff4XEGgK6bsvpKnUmF8iKN6QXRFzC75",
  "key8": "qQ3wqGdPYv4rsJatSRMLDSrqViZ3L1MG7CYrVoR5spEqmxrvd7RMEcRtD4wuTqSTGNgRd5NMEbP7KDx4Qc4L4tB",
  "key9": "4LYu1hk8474zy9Fss6u7omBTam11SDaTLktbfLqRAgLr6ZPVXf1SygdaUu7QFCNsC3o875MofpBzkXezS4sUCsjS",
  "key10": "3L7YPLibrGeC4xA4NPqtVN1zCFraoPTv43HpU75WyYAM71WaUHV7eRfUHwjzAeG54swueP9RMKav9Fv4oRNyup7V",
  "key11": "3Nt8XiL2gzjvLbmVjmE3WXEFR2u6FYwsVbr2C9bWiAGY5zM4KkTR7FGGCtDnjSGjqBwcF2Nui94bRJsJsi6nzPhi",
  "key12": "15TGfcKHmqzs8AvuxXzCZyopT9VprqunJ4jBGrnFE4o451tHGeLRi1HagxxgHTawqEEB1kwVsMQordnbxKvnbiq",
  "key13": "567PQGRB2ikr8zJGvfHo7VxGKbDppPKVrMz5oUYcBD1LG7HskMa542MzGqvv3i8CJxTLQ5QxMtRakFZdEKMEWLZM",
  "key14": "2yK3RjmgHSDaCvQd6ZzPH3gHPZdy2JcZJMb4y1mARzKPcCwqnjJ7WET6TvdGRYPC2yd4mbb9RLXsnBJbj9Xost3D",
  "key15": "5YZX6FC4R5NW2nEB9bZ8Hj7gLDPddNGNoEwA2myiqBRvBug7XeMJEh7bWDfYKiasqMZMQfapupe6t2uecv1iUvjP",
  "key16": "3FBz5kDasc2CZ4Uj6ycGmuh1SnopkCaBekkp5n2cXYMM3L2zQDm3tijotev1Vzc6pFfeBZRSoPvnqYaKTjUfBr3U",
  "key17": "2YCLzYxuHbj7RBARfXfXYz8BTRZvWjF1aZq4nwNgdNafbqR8donaUAPcMckQ7VWa8JwS1U4ZYFquY4j3XHUjDmZy",
  "key18": "2AeZgYTLLFpujR3mkyR1nce7WzEPqT9JFp6PcJUYWFJ4vybAoa9xB62SUPjSErPtXdm6D7H4tzVanABat1kTL2j8",
  "key19": "3YmQQKwHNjTYd9iZph7jZn4rpy9HNAfxUKnuorVdRTyMbEiasXTUnAv16zkgkt5dVRiKgWSGJc1qQawLi5i8HFX5",
  "key20": "4To8kAzEGmv7irzBWGfMsj25mt2x7SMJfCPQopkaQkvuZbA3E8CHhQEsjHxnBYEmKSNaP8wzwu6uncChmppJnfva",
  "key21": "2azT7WfN8nb7UGtfGpYb9UqBHbwFFzMtzRxFYMG1j6RGCACRssur8bccmmXjtKwmPaahv1bDyBrmrdR1zBSKfBbj",
  "key22": "4sgm5s2Z9iShVoqCJg9NiyJCSrWMBf1pGSTGDrZQNkgj11CJG5PA3ettsGVnQW64t1z4ENj1oVGk6ScTJJfkWns1",
  "key23": "3b55NbgPCMjDnJ1Hs2BYozXCUp7gxajqAmYkyh2FN9xd18niHbYa48knFyZUjqDdAivCmm8DrxfQ3nT7iCCeNFq4",
  "key24": "3xn1nPXgCyBetBuC8vN6yWevDCkcyh4HReYbeQ72AAvefoxgWpG8L1wrSaQTHLwbSfnottGtuDjWmzQWD4MBpnkQ",
  "key25": "3cp6CWDd2HBGJxgb3QXQfXBWsWZGMjrSCGMtPoDdDWDmXWWBUaQnzFTvTRvjmfXDLWWxPAHCu1aAwQTFHy4uttx6",
  "key26": "2iJ2n9BDTaRUDvwiksKyUrwiTs4DGfa8jCs4DTMBJxddMSapYfk6WKiZMgPVNPamKnPdaRngio8UHbPQaeYS75ML",
  "key27": "4FXCgP7wctESfXDBVWiiYkdrgpudUc9js9Cd1cATFBpbtwLLd4Zc1xoPEUtT8zerca3Becy1X4NSj6hpViV5CM4e",
  "key28": "3nThvizaj32wSw8LcS3QyVBTDuqDdgmqBdXn5HF463aH7923YWEbfsnWMdqk2hFrL2TDUyDLQSdCVQiBc3vedK6d",
  "key29": "4sRhiNxmWHzjsETR4N67KFoioiTTagvMkHVNncgvk8bWQ7wZJ6jFw6oxo5hPccr4WrbkLizzQM9Kwq173HNqSqNQ",
  "key30": "5WVMSC5VH7292ymPfRGVga4ceedJWoSvvPGnVyoACvd7BwbWpRHznXo87oa3s38EEsTFgmYw1GkvEHMssKNChgNs",
  "key31": "2nhL1Dx9ck3UwQxNsHaiyTWvCbixoPvNre7qrKqksLzHRLqzdV7y1kxeE8wqHs1onN8HEqnMM9TBovKMX4m99rvX",
  "key32": "2SCTswk75Dx1Qj1LXRJfHGN7JQDP7p6pZBperDQzdtiCHaUCytThrJCKWCftmeJruaamHGeXbMeSsrV98ynMCsnn",
  "key33": "UVBuXEYCjZYXt739uLMBYYc1MWJLipEWwA1JKehSGCCgSfQ4Kp4HxPvpxMFoVgokYrBZmyF59wmQp8LxbKhXCRW",
  "key34": "mhBvxnXw5K1Wbh1S89eFChuzE59hBmEEoQ28Y2m5PGRsGHggZYDvQsgrvSeK4xU4bUkCgKBWsjWnDs4T3iCK7TN",
  "key35": "9dDvzHbpjPU9tbGFhfP1ydaRqAiQKpLXagqgy6SQMWbjaTWgERqiKeDxQjzJwXXgMDfuhkms6phYda1y98paNob",
  "key36": "53h43Dcpd11v1pRkZQuz64vuAYvhZDMGevgcL41T3TfUeKUvELhi6MY97HWb4p1czvGGpUbWs2V14Vjv4n61nEmH",
  "key37": "21FLs9Vw6vej6Ya61EYG9uJcdCQLxhfVbimSgRCTM7kJ8CADzhunLn4WmioJLsPoSLcWd45CuyaXt1ED8zaz7Q12",
  "key38": "3kGfkTNyxvWUs3ygyo3Cvnmx4e6PLBBmbFHAoUgJgSoFqxkSwF1Ke44QDTNj3f2e7qU7VAB8xgLC36e3EFGvHPn9",
  "key39": "2fBnkxEevTLVyd2oawcG979eiWZxMdDZfrmwuGyYsGrQfRVArL4W7B4iVxEgt9zNbuFcv3YSkc4RQxnmw4d36WC9"
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
