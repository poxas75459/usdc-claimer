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
    "391NUVJG1ajxXqMi42MqVNbC9LSMXa8QTCd1bLS6BPWnG3oH9GQ4yyCwDTWK7s38RqHGDNQrCwUbuP1Abnv7fkmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j6f1YBJUTBkV5tuK53BrewtamYRGMPuyL2oJ7SoCWpWup4toRCr15fg3NEgX3UqxB28yz3MLpH1ZDEqpT28yo5g",
  "key1": "5ogQu3BBbbJGBhc2qEtgZ5Qp5Nn9QDndDpGPkH58FcAUexxfyqeG6PtkyjGU2uKcAYTfASt8PZyXe9iFRLL1EqQz",
  "key2": "2x6gNUhVX3kHJFdKxfGAHjHPHdNNqiKFqLThWcy6ZRonHCm8orUJoMYVNScNdJz4DoPvaaqQm7uLyAfAzE81SUtt",
  "key3": "5YRHwq8w8J5HDBviu4SjshjuVggRNtBnSv1Kz5euyZi4SQdqbPoeneev8ceXVpkBWs6qGHkw3AkFrUdhk6RsBSA4",
  "key4": "2bEXYGsDUFBpqTd5VFLqWxeiWFnEtdP5tb7UveLPePyodGssvEpDu7fWuKnPGGgExS885JR3yXMPXCbqtAqsLGUP",
  "key5": "7apZbvY7b1WUyUTe8ZCe4WZmMxQSmrswaoKtW81rjtAW3c4H34bxuhzFgxFu91aFRYYbCKAKDEiLcjcWy5tPadA",
  "key6": "36mvTZPUsxfELNsCjYTbR263ZTPuzamWTifGT2tjn6LYsJrQgXVtWL7aeYo7ZmrKAENgwW9F8onx1A72YA9QCyaX",
  "key7": "3AvvXovALWAeXanvh8XFB1n5CB34k1kH5k51CBwyFSbkebFf7J2m5UqLnryp9wajF8xpc1zDE5jpoH2haSFGUkhF",
  "key8": "5ktG1f8WRHeo3cXnAhSwhC1Jnn6ApdyrL9wx8JpvpPC6gzvhd4ZHteFWGsdaAefrTTsbetS4Gr6yXz5VyfsoVqA9",
  "key9": "5q2eNta2yFZESbWQaCUrAjvGFaLUVFKAESNB3mUUsSHiFWQhaVvbp8nsooaa8njBupLTeJamT1JkTH1vG7h1cEHb",
  "key10": "2SrbTXMeRa7PE9PftZiAzgGUXsQtcnmtLSS17xnjhoKMPF7givfJ8vq19yU89BhHV42nSdt4D7aMZLj5KCPfgPEi",
  "key11": "4MxMbiGpLeDEi3wmbTS63CjsM5pwkT8U6cQZyJsNZUG2Qh5QqZNCuawBXfLmkrtQmX2fjwLZABzfNZTxi1PrwJ7B",
  "key12": "3CDQ8gtpChFQ5U5mRLzAdCBj74juXiiWhL5TMUXf4LoxBiKCeieaHdd91zC3Kk9to9mEmuASjGWQHEGK5WsDwg4R",
  "key13": "3gR7ynDQc4WxH1HbMzFucvoRxghTD2Q9nc33g2mcQsTyHh3EoqjNpJv5JXb7NbMdRYQsJ7rAyzo3mE1xRu9zBrN9",
  "key14": "uG3Abd7mFgShATZfiReFnufVs5N2zLQbLBvAB2mXKvzaed3fPzgE4H9r52EibZtg9xSJVseMiRYvXhNkCDju98Z",
  "key15": "3g29QYgqFm7qjTyhKztauvzLXKPnv2GJmJujoguSbrmCB92YaGDFhpF2TZD9Q9qubiVDoU4NVxX3MhzU8NV33pMd",
  "key16": "4drZ7oMTpt6twXfC5u3q6gVDtzKHP86wUqFMMXpfoamCwBPRFBxeZ9Db8wgjBnCtJmAy8aP4TZY9wseXjakBCdWa",
  "key17": "3hquPYkAwZFCi4Yf9CmXbtT5e3thjRr9ZQs3bg7UwA2x7iK7VcxnBsL1BJDspix4y7pGzJA8ZwE7AEgTFvRexfVY",
  "key18": "4taUS5LTv1iYSQF5UkVwXduDrKwkhTDVHEVopdVnt1BZyfg47mXPh6fVgXa5GNRUtU1NTr2M36mq5eA7x9KJamGw",
  "key19": "5qKXB2KoUvxFuc21GnzTUKV5LZtseSgNQ3EoU67VZb2Avgxj3U8n9uxn85WzH3EfFGMEUb7NvGLqWqGGX6fDN7gc",
  "key20": "2L9jdkyxNpx7aRNqZL8c7V41qMb6MQxuZdBRvPUoBekXzs58MBGYCcyqRG8s3vp1KcpxnAir53NvRJtyJ81T54fD",
  "key21": "3EEiDRY8gR3WpjKp3xjhVe9qMwUdKEBisBn7o8JCMdt8uLJXFNcToajWBNSdqhpBTDeFv4VsvZSKLY3YX9AFTk1D",
  "key22": "4KyiCv1US3ft3euCvxTKuHC8TUETeuMASL6L35eicZUprjnFzbzqsj6m41oZr5zDTXns15Qo6w82igAg7sNpZsGg",
  "key23": "5mR5fscHCjhcDD1G4oXf5coVggbMw9tujEZnvcSUTRWNeX3XFNruDpr198oMHnHKSioFFYAWr5HvPdWYWdJqQVKt",
  "key24": "53v8knhRHRuDcjse8ikQ6p1Ldt2F7MrmPZGsXmSVotHyLtoAbzsc1xyizAEy6YiknT4pwQ3jvBh3DGZG2d74dJhk",
  "key25": "2ysMBNJBXiSbEymiEAVFbYnti65wtWgN1dN8Wu3PRx2WpnCfUuudGQYd9AdU3skTD82wAMcpu6VjG6vtfsBC1CMK",
  "key26": "5kEHLti8tuNczhGxD2ZYEaVmZA4SWXJB8RVMCeV5riDDDPN1ReNpQCpEJxic5pL6qZS2sYvDJDzeRXiP5fQCFFGu",
  "key27": "4to2FkLrrP6ibe4B4PiPWwjhBgTeKXDTniEJmPtFXeGU73xo4QB392Q5kWgr4SyaN9fDMrC13ivyYpM5nWtfnqLk",
  "key28": "2r1JaNozJJpCDvV696Tas1jo7fNW1TkXe1HPduHS3S7T7wkG2whv63vt3vawivfd22qRSGKN1AWCck7zoy5opZ3J",
  "key29": "5yuptFkU5Uy4paX6XKrWJMFyRQJfTjDXLM2XKbgyMHARg6HJYY2erG8eC8KBd33vznRkWN7xNh8qBQd2HxNvsU43",
  "key30": "3SXeRy18ChTG1HaeuCt48L7ZG1L59WCenyjyjbMcqRkG51szDhmp5w8a2yFvtfbZiEcWNzqiagiwE1LkLQ8bKmPQ",
  "key31": "61azMHK2au2xCUyDAJpfzL1poUk1n4KhQxdeE9x6rf5SDpiEfP5cE2oi5M51h4FP2aHabtwdGpx3HvvbLnw5Wzyv",
  "key32": "3zMoQGXDpZ2i5ut5iFe1sMFmLEmkbQ6NiwaqpSauJoBw5MGRcqVPbWzkF5Hkv8K3gnEueKEwFadoQQ8YAaD1R21C",
  "key33": "bKpD62GUUFbbCVazeer6T5FFqXDVuEZnhgYvHhC9KvjZduUZVJTK5L4LmJ9khe1E68nWAbvJHEsDzLVP8u2R7Nf",
  "key34": "4CJ8d77uZTzQ2LwcuZeNSs8a4WzfmErdmPtNWMJwkZU6g6wf8mtm7kwzW6VNQKiPCHA3f7ZH39HyrhwLefEjN6no",
  "key35": "4aiQuarwbv439takB6vgzuW1irgKZGj5wAMg1vxV4Vkz22hw8L3uyeAZxscwWNKBB7mHSSoysGvJqYZvQm8xMs82",
  "key36": "3LHZS1pxWk8L5KsV76d4Gz8La6SqEZLTDy22HruH1C7HdYoVLKogLSBv5kcR1egV4Hy685yiW2ygVBvhTUkviK2G",
  "key37": "4LxQR1g6meEediHpdHcHhNh8mmC2VamrnP5Nxe4t8Hpz8QsnRYr4QsM3B8PorvGwfkCmoheU24FtYwR4RB4VUdT2"
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
