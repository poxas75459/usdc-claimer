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
    "4YUQKcVaVgfBmQTvKBw7PJbzgoEkm777tFf4JxwQgitzt8GqeFKe6Tpa1EhQ8paYRqMBwaz7rtyvyzrNwsP5LZ8r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QPa1JXm4tq8kLxtDc5b1UbCGqvbyBVHQ5ofhSoCR77yWaUinf7xDgMPDK4jqGxYpgRx79GgwBq4TR8C5C7cbH7W",
  "key1": "5QhjyNAfNveR1ZgJNtP6TFHDRmFaqW9qZH7e2yq5u7WqCqCwcHQmvEciASyLVzLFgFPR2ybDzeRSzvgjkpqdeVc6",
  "key2": "2MJK9Kdh5L3dRvMpqLqeLmv4Zq8yv8fpbyUve5NnoFzBrb9KmZXseh13FU1oBt877LK6vvBoFfLx5tvhtGCzjthe",
  "key3": "4LmtLsZsdYMFvsn2KaipwwZqnFLgD9xDvGKstosHbK4tSyM3HcPzjy19WrcAP42QUUVTB5e9x8uAF7eSRVnoYMsb",
  "key4": "5EiemYyTUj9PBXyivwBp1pLWm6ohwJSBMTG1N6F7cEu7Nn2kqijXWkeS2wR5xqa86FYGDBVofAnRVu3m1rEweNEL",
  "key5": "3xLqprrMAzc6rUB1WA4h94tZeFJk6mYEvTJisZmZGgBphCZEonWRFk4uG8p4MjtFz9e6do7TUNA9gDK6KJPLbJzG",
  "key6": "3wHQsaAQPp3kWVwRNZEuLMa7sKyhQUNjFqi2ZPN5jcGEUNvH6PUsJMeZzPqGBugwmuCv8gQT9azE34xX8mTRnjZP",
  "key7": "5JGd4f3zT3nf3Jb8W3txUp68zHmRV4EQciHidTab3U3vQq96qL6zsUcLYQRYQtoPFMgEQb7pH42wLBpbowSieUM3",
  "key8": "2gSJPuQAnVEbXZFrvFKC4hAHo4zJDi6rd6jDBKbLNM84E5kodMfpwymu9kanqiTzzu1mXTA7k2XY28U3nZVJigTj",
  "key9": "4bEQs8iCo7sTtgC5UTbtqBZG4fEF63hQtwau8zfghshTL4LpfjTGyUsc2WY6hPmR4oANpeXeX1C7KPmMCaEWSqmE",
  "key10": "5TPTwBUJFYkDrbmNcQBcGJbCn1SncYCSwWGcuH77tidkzpwfAQfngtZiqcYLvaAvu8b3BixzWDgugGxMg2LGoTSj",
  "key11": "486qYYQE69H7WT3JqPcScESV8MK3CdMtwBc6q2VkzCbtX9ZUcEtRhjevbKXPq6hYosuyEGqASkP6WKHZSKN5M6rN",
  "key12": "5bnL21fW32FdHP2YmBBvMafFGJAvkyJ3SKUoo8dvh8tBtP8xnky7WWTeTN4JJ1S1QUiQdomtKt4SEbRAYsrU6Q5o",
  "key13": "5qUitjjp7koNujDSFV9dTk8EfFB14GcgNj5st3s8JZtMwyf9wc3K17vEuR7Q6W5H5oLP1JPBaVitSaJu4Z45AY6o",
  "key14": "DbRnmsABp2LLMmLoP45n7ErbHNkeKoUnhATovrtYvpFvUAtdqzwdz2jkBvSkBrjq9Hi5kGQkMhbLqtjyMCCcqC2",
  "key15": "8bVFGfsDQrgZLNymGp5Nv1ACwHdcdcPFrSvteYHduv293UDAj9aPNV9sa7R6qsLyY5ZQGydy8umKum3mLLsW4yu",
  "key16": "28ew74G1JDnLAq479edJdqyuxWPngc4ndueQE8ejpcBKLp5QJm8ZjD3i6cvUUWfHcikzpX7uQWDdkL3cmSwnWCF1",
  "key17": "5gZKzkXjtMh95aAbtjYDcUw3z8AfnX4E3w9i4CFWKcNzMvhuAhxHRarPxEpQGiDZpgfXkSw5nMy5ShF5Rm7rSg55",
  "key18": "3mQMv8cXFpiepKktJjdbufLNxwjpXyhG6K4DH7NE82XfiWGXgGAUcxK3fzugNkN482qFCQJVjKR64NqSqCodA39B",
  "key19": "2dLHiWiPGQbSsmcscTKaAJwRVYWkUun3PMXafjuqnXUeqvVcnB1HCqBWkpwJ4knyuQMX6XGVgZLxkFVjdEYPQtYq",
  "key20": "4Ar7khTwvsRcFpwPFakKExsiguaPsSPJMokrXWgU515wvvLfsCSpuM2WTBdBvgtR3GhpZnqYpj9RhQTfsU1ke4Er",
  "key21": "4vKA57ySkbxirR3dfU95cEX1pastoSiRBFnvg8NLykFe4ZuhypSpTzxWC6e9gTKiT8AnoLj85rcmEVKKiVv3eoUb",
  "key22": "4pJoUc5PdYHYbo6hDohN2XwspyvYgNE1qVcreU9zRdLdtQKFRSVYozeoFKdJ3mpxv611GSbF1LY9tigfNKkzcmgk",
  "key23": "9vQM2DxBHX5mw8WhMw5Be97D6qxPsYdg2xSRnZ9WAdQtgaQMuzaxJARtTFYX11tyJQhxHoypEJw5yxA1GRh5tG4",
  "key24": "5gTHQFJEbsPxH17Cz5hSDrqNWk2ky91vUhFtMArSBT8UPr7Pupnn8mydwMuwdjs62bGz8eejmLspMNNkoFcxzfkm",
  "key25": "38ZqqQwGHukHroS43VfRsLocMgyJmZcrBJFAu81HdPaWaA64YLZ9aJ2rXk5KNLaS6kkBG5R8P3fCEpRD6GH5vFvD",
  "key26": "A6vmCWxY7U5CNgsec7LJ8j5nZpSf1kVeGbzN9P2ieXGkaeMtzPPvEh5buk3t1nwA7bzARci5hHRe6Qmmbz2WaXR",
  "key27": "C4o46mg7Get6iaEdYhmbsQhu858F88cadAihHTRxBW5WGt5TEej2e7zYaFxgwa49xejbufcf8GMhrmDVNQE3huH",
  "key28": "5gVgVZKKmBmpBhiToLX5yx5qEuXs6LHdVr51Ao6p8eZCjXGnnZJpAzKGLXXx4JYYKiERNrTJC6sLwwgaQmhu348p",
  "key29": "5fta6dyJrfHnZEBbRigNied847LWhs6ajKkEhcfJaC2R4LDccfMJgEFqyjStX42Z4CjPGU9p5scFVaZCebgsvmYX",
  "key30": "2VbZjmNB4b3hz7e8rvXp51UjqXVqmri4UBMYtkogbEQzM7xBTcqz9SShdvLnQNF3YZ8tKi7Lmtcd8eJEn94Jvkos",
  "key31": "3XYxiNQgZi4VMs1QTx1KYumYdV6GvomZKcvouUmpHCzdj68eStTRhghcRPD26yYnD2YwxibX4kvPbD3u914nT4KH",
  "key32": "Ykb2scfszrkxiarZwwXk2Aoo9PYyhMHqobwfrDmSvTSStt3a3Rzf6tf1UPXhDGG1mELXtYfxJUyxDGqnSHtyrVJ",
  "key33": "4EBZfphNShwVXsmr2jcLeonWWtRKDRUNG6V6MhVcXAL5zv2DDtxrwEE8eJrHsV5MNxcpSWSuepuvXSTgugJf92vU",
  "key34": "2auaCoREtd3ryfriRS1BHbkEmkk9hzz9WYbo7EAr16stoJeaPyjsK4Pnp51y2CJHJQRdYSSXmwLzPV17RWGk6bqE",
  "key35": "4egXBir8ZN3frMCu1LuUNMWKJHK7QcmRo8Q1tTmyVcvMstj8itHmJ2PHUcV8eCm9V8UwBEEhjBiqPQAs7Uz4ApuB",
  "key36": "PFsfbw9KMfAdtWBgXEb7sNjVhrLhUp1HiuMtLKP1VbeSYCc9q75zREAGziAxM863h1xiLb2yWTSj6PVS3DBMsxc",
  "key37": "2FU717vwZXea3X2vMnTHTgKYANASuK62VdbiXRXAhBJc8Q8DphQi3dirba4t8tEA8RGa1dWzViW1F1Bb5Dq9TZPL",
  "key38": "4KJ1TbTrrjjag8T5giDzFsmDdg7GpSm4ZiHaFxEbPq4MXerQTNyfiambYwMjg74dbg8fGKaKKce1WRVq2HR3Bhbx",
  "key39": "aZsTUUqW9K1Pa5TYqx4BuXUpMZM7s7RsA9qveeDoCGPUs1hMP7v1MeBmZqSHmEfEzKHbkR1LRft8ZkrojibwYeQ",
  "key40": "4KuSw36pN2UvfUZR1MgdP6RYVE8ghFPYpmRhNzq9wb48H1fvCwnas4BaEaHaAiscuYvrPe523wrEWrxvoJ3w6Eef",
  "key41": "3QzwVW1kq5A9LTnbchfDsHe9KXAuN7PGcpKfuvNaupCoVoS8LM8nYUT14fZLbDEhpkpFrboy5EWRNZbkCHkZc3F4",
  "key42": "rqezmqc23AfTA2HbYpNXYVBwKNuriW1dwafwCWLXVMUTfx2okrutrrkemkPhnUgBEWMZeeQrwXdy5SEWddgecGN",
  "key43": "362rMTxhKW7M3yC9QHRpFBi3cEkxpqUFCXf1J8Lj7TH3rPvET7JUuw35GKPSdPv8u6eSbr6DYsapgykjryHfu8kQ"
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
