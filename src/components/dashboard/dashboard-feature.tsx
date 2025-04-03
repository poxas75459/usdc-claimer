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
    "5wntSLXtDub8gkHyzKfcYcM7tJw11mHUyeE73X282W8UojrfZrCiYZqCs3V9zyyHspxC2x2zXiggR6xQK2RoEvCt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NECZQS4wJdSYMJqpkXVyiJJwSUnrkVYfnGwLRoGVxcujpTZEx9sv2j8L5vsqpzjuf3nsBTeZVEqMQu4U6eyZfJB",
  "key1": "272xiHh1WEUWJfFrBFXk9pubEfTe83Pg6jWHrWaHyAKUgUknZSBYddJ1bAb6rngMWVk7ceiXgfwzoUDzE2akLifQ",
  "key2": "4gAby5WzcdQu9NAn5yfga8KNTpvVdTPJw3eTFFvrBRsmNvVFE7GpyLEV5tvQWUVTPWLYGW8LZWMXpdyVSomTb2n7",
  "key3": "47Lozq1KhP4JZcxdx1vDF8UgVxpxWL78fqw8bc5kyrq7N48fS5GAjG6Hfpqo674mDz4JXkd7d4wD6Mk3a3Y5Coj3",
  "key4": "mrABqTeCnASPoL3SDTHaNq3YV3o9ZVNRUH6pYdzyrAMLvQD5xH8MDPBeXbXJSeYSpDxNsf3qLBYnkr9Yh6GoYeg",
  "key5": "nMsTHLvu8YWnQThcws7di3GHcNfd2xSFrP92PMM6wdH8Pm4uX6vro734SnCsHXtoCDM242xxRBRF59FwEti38qn",
  "key6": "61D5hxoEFhwJ8Rm5PeZEuVVfuyrZEQWnz6McPv8suJgQQ9WKbmTf5k4xP3n7afwuKAu5hFjMNXjPPShR7R3r7S4c",
  "key7": "5nePUj81jBaww2Q4synxBR1Y193CgqD3pAPdzZeXwWWAVuno8fA31MDmoff8rQLHd7mv7JtqrzSLZp6BgEpeLMW2",
  "key8": "3NSFwJn4TjAeV7Ejh4wwYnxjDtsTHmm3U7ofoaFggniiMhNb8JBro3e4sMVX1EPgjLPBZQhMWieYYPzFr6r8PHqB",
  "key9": "2xybbmPqug82cDN3uXaM4YkU7pwmKzgwexRqsw9NXFc3nHYNbVg4WpRn3kYepABZ5bLBwJv3z8tbkZjreSAcoF8V",
  "key10": "2e3qZgwRmp9Nq3jDcLQtzXRCnkTcnJ7ckFp34mPS5xRncDVF4eS3LL32QGNVggf1rCK6HtbovNCNXkZRa9vuHmTt",
  "key11": "5yCLDFgk9UGftjPQzDw3mq5zEg2UEkcBmB14FhiwApD9SyduYXLSL9pySYHthCsTTA3QkRjEAx7i76bmZ6J98ank",
  "key12": "2uLa9PNdgKVn2JnKtFuNiVHHdZEDZjCc7HD7EyUv3fRA8NV7hKio31JhHKvDY2W8DqD3ApwJ2xAjejEC6tEkeMdy",
  "key13": "44zE2TFNQdrypQM15yKXLsL48MqsQ6XuQ7xbD1JsjvhHroPSxtgdk1XHx2QMc8Nj4UgzajGBLVb2LJg7CkWQg3Lw",
  "key14": "2gRXzK852hvXKzoBwkzjnsaeSx3WET9XM2wDx8CTvQVrXadSpP82tDCc8X92F7neHwFsj4Y2it12L7bv2QocmF4Q",
  "key15": "2F9ocsuhyrrVkpQeX9B1z1ut3bohdDnZutmWbrsitVc9jXHLCJVvCLZqM3zZHcWNGmEriPWQDwfS7WeLxsfRGsbo",
  "key16": "5iH4V1V17pbE7kB6h34yKqLbSwsoYjqLiDBMWnVkh2DCBZRWAC7oej826n7TZ5kfbDorUJqaxViVjf7hMsLPrnvT",
  "key17": "j5rUZjNYGwHW4dLHjJQjfWgKFmXLDtbBUB8V52XznVmw29K9BkLezL3q99tTcaqzjdBufcAGQAT9WeSFqPfqWJX",
  "key18": "tAwnm6XudbW74YSbZ6MUzsbuJbxH6ZyVYQhuM6PVc5LoHWYsC7oP1fHQoTpq3A6k9sX67Ke8DLKFVGavkLZr2nS",
  "key19": "5NdvvTWLdDSB6Pk1Uu2FgS2NeYN5AufM2EHfRhkUrfVoaCqqLTRYDgfrYUY1pcjvUe9nPnoZXpF87ajATTnLDLTz",
  "key20": "27n5EtCVk54rCVvfm4dDBmkBRURJwCAHG3ESMGTtz8KE8t42JkMeMdTzcFwhaRASG5eeipoXnkM21WVLuBPwXsyJ",
  "key21": "3eeEskjtt6PLyLdcuazUy2ByvDcT1K6Ap1k4qDzbRdBuJagRnJMsyGPJAP3ksLwrGJTQL2ZLKmBhaK6snVpeWtB",
  "key22": "3D1LshUTBTsPoP1phGESSDULa8ZCkDddCFrgs9vAtKjZq6312ZxEtw6X3bHoH6jud7UkuY4RrfAtQSdu9abeS3Un",
  "key23": "5RraAJZ3hR6h2VF6K6otTKS1T6mpRmz2AoCRCBGviGQEZi9t8Tv5DvzG43k2U8rFQnxUz1nec9xCGpCuAVdmksqt",
  "key24": "53af2CMGCSK8LiAp1SMKtbCWUZGGfmbR3nKFSFs4FqVgEvZRKMQjDT6MdHmJyzQ2FMGrtcJiETYhvYcBusj2qCof",
  "key25": "2Q6eoHsSok2RKDx8oAk2TZmCeFWpijsGnH4raSGNAjVbcYvdKcVCvuknxtjg4SDukZSmTTg3C9HSdsRTcHzUQJga",
  "key26": "57gbm4yR6w7KP3PxoLrKpA8PMRxEKTGJVyNPr23ypYo7sQGUfACQbxaH4TdC5cDXCPUpCr8RS74Tpm3HdRFhgGCJ",
  "key27": "2mp99nCFdH5S1DXYyN2aFEAxw4aiojohUn2x4epjhLfJeRgt29YyfcLmX2xrY215GPr8iuHB3NDaJUoTnH5MNRxJ",
  "key28": "4X6t924keXJ4FvTESoMLVUYWyxtaWWDMSRdn9zWxrr2ALe4cdcGiNYG6x2J75kbpKegb6sJhTsF5hEqM7ob2kg4b",
  "key29": "21XduWS2CqdhtXDqnSoFArEaN5d7LYpQW8tW5AVcBvsNmt7hXC2WgUCb8CiPUydy3qUrJDy6YYm1d6Hpu15MfDq7",
  "key30": "LBgNvDJTQauZzQeGegMLveRueN6P4JWQaEF7oPDWvuRaheLHStqrrKGaWLbKLvVuEGXgJ6EWwgSJeESYhckYX9N",
  "key31": "47wbp51UEG9YTsuxuJobWDa1AZsUcSoiuPRRj7eww2sUmhFm5wVYW1AByyfJkc31wjhrNvrk7UPhhYoka3c6hB2w",
  "key32": "4GF436SexDrmYBf9VmLMVByGMVZgivhJc6uxERsMBR3A5itHiBcP4GHDuSyftnFQdS5Nmpvjf6Fo9SZo55HLvZWU",
  "key33": "4rF9zUR1pxva8MSHHTBHrdLeUVkE9HBdzgp6jR5uGAeGfVG5VrLKmQ8tcciCY8F7CpMq1G3BTRMipCU6JfqE93Ja",
  "key34": "TXQs75Y2hGa9Jz623bXZh66ADv8FcweX5nrDxroeNZGTfQECC4QYxCjz6cYzXmwXMvFKC7nG8q7K4Wha62N6B3A",
  "key35": "iMZeBWBFqqvuNaPxxDxvFcds9y5LcBbkUebFE4q9aaW4s6o5S9vXnT3cgZS7LHprMkBXzEerMyspLGhhwyenGxF",
  "key36": "5yryRiU5uDTzoyFK2ZM82xWNDCJquc4Ni1XE5DGyEhB2sqCACXYGrTQEtqFnhX44PV5TKkB4LxX221pEW1CdtPos",
  "key37": "2ULoQzYtrtsbqQgdWaNqLhSxGnvxWVhqm7cSwe9BYYk8GyxVkJBhLBzAxEYCPc3wpotCvE5VK2JjNwNmzNAGVLTX",
  "key38": "5wSd9yUwfG1xxN8kcGTbxKBAx1tWk6czujpg7XQJ8VSfgijS52f8XU7SQKpryN6LWtHZZBmnMtrnZTdYPAn7CtTX",
  "key39": "35eh5c1GdPUBAXme4hMXjpUJu9FwPEHx9vvERntaH9t7NuXtLTFnr6hSeZr9DYv7tCSkYFp4sXmsravk9FjtoUbP",
  "key40": "2cydm57HsS1Na1oBW7zxy7YSLcJt64e2uVT6a7hHVFZEnt47Yba5xWUUqE5qHq34h6LGCz3rsZvsedeUwpMgX1qA",
  "key41": "394sE6JPgykBXLNfUfYZw5g1Wp7xjsdQkWGcosRTkXHj2NYVMFWhABfAM9xZa8KU1MqaSGo9m4huJgWzZ3mNSz91",
  "key42": "5V4EQMEiqLdX2XFJfdmJ6VqCeR7cXj13gSP3cjx4rqkozNiRcHJxBdgh4yqLrwSqWcA8ADZiwZrZnQzVmNCBDW2U",
  "key43": "2MQ4CqE6m8uYj1ZroEPHxpgRQSAy25u7P1ib4Ua6phtAprm6seP3xn1iL3NSNu9gNzkoitcSY2ZCjTszjqNjtkC9",
  "key44": "2s4fQ1NevJcoHFZjetvusxW81LuUvR9hdcM2RYDJh1S67PBfZeFhVmzmEnygLA4kHnR1nZChbCgroDENbeGR5Xx9",
  "key45": "5poq9G6TTXy7KeGw9tyeHMxDRxynEPHo9SFRZF8wZ2W69A2hrmntr4kRaspGvdq6SBddVmRYdZKxnSWyFLX6XFDj"
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
