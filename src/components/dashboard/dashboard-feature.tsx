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
    "3SS6gRZaBWmLFtXhMx9hh3RmxVnoVqr5q6jixMW9K8EpvXU6hgygrXeG5jKbPxnMtRNpGcXfWmQt4EVpZ7dUpEAb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2barNAWHv4eVSz2SNExhciN4cWiKbQns8MFchhLTpVLC8aE4wP1TH3zm79ii4VrWwqjCEYNkXiCNHTt5XKDrhwA2",
  "key1": "57Wwv5aiY3NRKiKioRSTHREk7QXfZ37Qc8JYbxABHRDGzpB3uTY5bNsip8TxMA7MRu1EYGazjr1Em51FtnYM9TZE",
  "key2": "4o8XLAGeJ4xQKQ1q3JyXVdKLuGYJZKhMkurSXouSah1Hqw8DZZiS8kHH2QCeLbaZFfXkAYTnHcktaLtcvtrRcp71",
  "key3": "5Bp9j3MLHtKBFQGvT33ts8gUG1uLaBEPgeRyT5RWA7iNnBY26sNGfSienyzd49xki1cfEGtu6Q48NKshvcvbGfPQ",
  "key4": "3VMGL3sRVDP5k4wbsiNLRexkjsN1BjGKZkzgGvpiCWwxGmBsKwBM3LKmkYfnYcPLmBRpUUPyQpe78iHCcYcdYPHk",
  "key5": "5d2xe2ZsaLqSbkBRdV848sbdCfwRiQtN6aAryrTUHe5N6Dci5rVfRQ4FvpfKzvKb5W47uy4X4w4Eewirj6gv4CQB",
  "key6": "2GkABfPWhaxDqAHu5bcQqghJ5xf1C8WZ9NjwzYJNzuVxBc3ZMU65gWuRH5rccTA95WCLjFhLGo7XvugeVCjWScra",
  "key7": "2P4br65qk9U4yfBv175uW8MPM9sN6J5FNXeHUXRoPwJ2zpNLdrJcy8w5MJ6yiMBzgw7fRs5Hab7Vt17ZsDNRnbad",
  "key8": "4GJSzyGvNarX3jPcrM3ojv6pCJrXKJScg9DqMTG6mnh7dTp3LEhHac3EStiHfq1jHJ5HgMCMJnTJDYGA5Fvjd6N6",
  "key9": "2KABv7NezPPe1JgPqQ3kQSPJi4YLcQ2o4UjPAGM3ToRhVvrUAGVBK8qb2kakQmPbapqQQkzh6YmFxqNDgMMnSteZ",
  "key10": "5hAyqMAKfQPSzUncD1eivcUanyaYx1Bj2NNxwgdrecCat7XCzjh7n3Hw9HTeLHqm4U6tUE2SMxmnzw9Jcr3mFzGY",
  "key11": "ZrTx97TSEGGTvEZKgpxcjenuJ3jW2dy6UiQVJ9Fg7aXWrkaKHb88o8UrBTeBDGsMMbkguV5RYZdZankzH2NEbqs",
  "key12": "AHRsBbtreHefWjW8yWrhjx82AHX63rGUYHSm2SXpd824bQNmVdHhZdJh6LirfqfqUnMa112NPtY5dVebQU2gefD",
  "key13": "5NXsBvyL2SDQEfUrKtjDyjvErRJBmwHyjPSbjjfCLZ6AKPtzfjyLvFf5P9eyk5fxqpaEe6WR5CtRfSZyqSQE6YeQ",
  "key14": "5GDLDDC2ghuR1Twp57RBFNyQwDiFJm571PKx2vuqPDwqszjgYLzVyysNDhp5itzZd9wZmXtaNfjAUsiyvVVYGnyp",
  "key15": "D8uaXWp2fRFijTjJdHtcY5WT5h85JVbvqY8tGYjrkwEHqb5rBtibCHAgUaoVrsrnoqszLxwJaQRF3P1UEQVeZSu",
  "key16": "5G3SNpma4kBrpoQXpQsDUtyhpr7dccL1rRfLpPWJmrGVjpoS1jQs825X3GyGFeytLvsyLaQujUKBDQq8Ne52UBxn",
  "key17": "MMhozTLbyH8BeTCYCofnbGbD4tKaGxNhVYPJvLhuUNTCpFfVHGH4eCweZGbsc5hvb1yYyvpWdouxsKJaYuJ5FsN",
  "key18": "2mFNuoFeAmmAPU7nZQbSdTr8n3LjuZwLKMAtLSaB2Jomg8bBMXzYatqYikzB8KMAhmvjKutJjDRs5av9v1DzF17s",
  "key19": "3xE47yaAuEaZ2Phh5qrKVXnp2b9TH1UNvLBgy1ADEWFqDa8cThofhHq9Npyfs772skBNGzEyanv9b7XEYDR6GKv6",
  "key20": "Fp7n3jqWXxRvz19UG1TDqu92Z8PBKbe62pNMZ8aZ5BhpHt6CaphbiU4g6bmc9cJLZZpVMYj9ztduh9Jsu5gNfa7",
  "key21": "29sznJCjo6gJqEH9uw5rEom89YpW95x8XWGvr5J1H7NBacb93pNRWQirxa1TtHhnU7nq6ApA9oTXEbuzwrApnhs8",
  "key22": "qqBkGMVnXJAMsJqxbsmG9Cc7138HU2wrWyQKodv4ukfocc4hMKhbAW4jJD8X9eTvsdw6kUEETGVD51FXP7MZoFC",
  "key23": "5P2f6sQzSV3VeN3ADMmKaedcCBjFPTCL4hP3qGsgmAqgkCqxkCpW1TTzYEpEsHtG2KT83iLBHFmFUZ16DNSsCRzX",
  "key24": "4BSTpfYKtj86xJNhPyVHyh9zZF1s9RvwuHhwFZ7Y5hTrfFTNLtDY6LKu2ScUqtjGGimZ2Ljxc7kuJbPn8NWwYHuy",
  "key25": "54umvniJs5AREgVLwwXeMYZSryLt1JsSVjDK1BLDxanwS7NmwiZY2QuF4mDEEn4Xf6cypUfXRwvH13KJLys7Ctxf",
  "key26": "4ATSG9P6Wfhoygyboq1756zDeW3X1PXZRXFNJz4f3ohcxnkr3vZNoKxn1bur7PcuciseQjsbJR5ipcLcBa8JXEzc",
  "key27": "4KZMvQMR52no3VxvHXvMA92b1VsfHE18svvWSpKEdpRnsYihE8MAGf73YnyGcdey36NqFfTX3SsXUPTP4ZQZ9BwS",
  "key28": "3KJqh7NN9fpr1Yn2wL49JFY4FquuDUYxn57qTmVEYBGhSSRDmkiNpT8zHYjUFKSyyBPBsm3qqFpnZHSJ8H9eeNzG",
  "key29": "5hF9VaBcchFFWnmmqbToocppZjJUxfx6MQpLjBNjy5YAhbzf2kBwRiRiFAGrSZ2C2cRtf1wytSPs3nHFXMya9jTw",
  "key30": "4SJceucbR9TKHyxZsQiK38gEZhkNKk3Yfab9ZRNZ2noSGP71RCYkAte751bTeTNPyzY4Jnv1WjXKpS1dgnPgkq53",
  "key31": "3pQUWudcgFPdfukgZVsDKNjGMEQS3bspbropHnqjAvwYfnPB2jtAiHdH55udvMXuM6siKeKJcLhWs2n6Bs6eDV6",
  "key32": "4TcsieUG7Lz4tm2HGarCLKzWNjPAmVF5qxQeJ9LXUpxEvgzfa4G8QJqjHofgYF7ydtPH7gVeVFaizEFaRLq7ZP1b",
  "key33": "3htwGck3RYJG4pLU7zffShZWaggfC9Z8cShb2CwsiwGqAmZuc3R1hKTmFcJT3osFdxFznDeg4YrRxpg8fHMGVHC3",
  "key34": "Z8uquWESqh2vc4TCP5k7jbwocVPyArBCwJokjQApcZi5xH1dNQBhHRNmbXSDnoKoAMVTacTpcbWM4FotCepW5fF",
  "key35": "TpdADRgC9b86Ug5xx2ppBQp9hS1fZBBR1Vu1FvUfjLbotDy1ByuNeaHmFzhxzr5L7jPTzCMqRa63q67jkY9tP3i",
  "key36": "DmT1fpLpTFuYDGA21PhChQGX6njCKcFFYP7rpkqqScsMmsYPUNu2QUTiMAZdPfJHL8PNiX6dR3rvUt2jRqoXPW4",
  "key37": "5BCe8en66FuxkwghMf4RQ6jWyLoqdoxFHn1X6p21xRdqvRnRieECfaUPftiS6XdN2LBARhCzBtqD1U2SjJcSwcNV",
  "key38": "3VSPdKjuUMHy4CkiKrDnjfnWeiENHyrSojMncX94QGezXS2Ed9Uww2hXkaiMHLKvgkphFUuXoPV5QWhy8Gi3cjcS",
  "key39": "5fYQF7ddaqbqXBcMKBEG2WD8vnsULMC2aA1ni8gQj2mfaCB4xdw2aopKBjfXjTqkThi6NckhPjhxBqV51ta9zr2u",
  "key40": "25qpWPYnmqttHxLvvCBdhHXZ4o9FBCEHwHVwCQgnvSdmP511vRL7kz5rK1w8ibAHMqMHyun1LGo1z8YqG7SNa3eo",
  "key41": "zr8izPej8bpyQRWouQeyYYShu8uYkSKPBMVEpUMvVRhxxKqtpvTXPHP8jLY4RydYcgUtHMM2LVw67Ss8ehYgK9p",
  "key42": "2pKh89rH9Zfi7B9jMWSc1qsGRP2tg5m5MgoZJzhUS6y5J6ZoRaVbSUzQBSCz9SzeBUmnVohf1YEDYeu5KVhUCpqx",
  "key43": "3gP3RPjFNLUSerbRVKsGcHMGGBN8AgzAYDS3vmDW8xYJBdVERm1PyCkkjjYF6Msn1MB9YudND8rETpZQtYtBNnLm",
  "key44": "EupLhf39bup55zPtYR45KARys5rJ8JLpkhp4oYP8nMgKfh8trGLSxS1es5voUZ4Hm5nQaKmV1xTpcgFA5ubU6Jf",
  "key45": "2EhWx6qRBtxBUcN3EgaUhw1r7WSpoBX9diDQ2VmpkrxpNoX22ypyjWBPy5u8WuvYAau7FgAtXVf9UgRThN8j2WEb"
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
