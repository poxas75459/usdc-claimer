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
    "34nKCwyNcxg9fjvYWSR4Vfcm6aKb1TZ9P1qvrFnFxJfdYrvwm5DkRXeMcfTMQks8ET4uLVMYHadDvmH8sbnP73bb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1hf2gdJWvw3Xt7Hp7nXeSpmnqtsWoP3m9qXqHEskYSD9rmYu3d5rgVnvvc6WTPziToEMxShvQRHvwWnevGss82r",
  "key1": "4CG5T6Z2udpZ7RQa6MoDeTjbxvTMyFRDCJ3ts9WZdFeqHvnVYaUZwVqcMdko5KmRe3h4hLr7fS8ouUoeLUo5mSWR",
  "key2": "3GftwxYefoBrrso8fQoxH16GuuCM9osDAvTAwLNQMQoShXorG4G1UHeoeyjBuXCU42qmBu1wGJ5XxfCBaqB9WoGE",
  "key3": "2v6NmAakQoxz8aeaUYkA6htVvYZ282macR3pRsWpkhkorM1JJiBf1QXdySweHFhin9LrEoS4CASWtUKFWW1CT8rW",
  "key4": "566ZCyqh7EHZCPeZeGPQcGPfD1YCUiyzdwhvcskSgvJtZapKpzZnHqqwjBRUNS1eETbzShG7efw4ZaorqEZ52ZzA",
  "key5": "2f2oh9dytZUzy4ZbuHkqg4uLpucJW22Tr6cvGzT2cpr23uUw4TJgz4y7t4LZuFfyWAgYYrseYVb1YmCMk5PJrqrV",
  "key6": "hpj1RtAZo3EmBhThGczE8xCYV4J3vuxdCJFeCdQc14npkCfBiBtdjnDCtLZPkph9z7TxQNaJZv8o1qFp6QAUXHJ",
  "key7": "2YfSJZjiS6j6Lbhdpwxbv2SH5rPSnCNnv6m7b3qSQGPJmMcffDNTXqNcpfYVanVenq3BVwbTSYgDLWj9KpHTeDUP",
  "key8": "Ya8A27adCBDqG5fyHjSpjfHfN6ZypYYew7KWcYra6jTAypTBTbaJuuyopLmopoEvVmMiqcyfvJYFhmdJ3QaLKKC",
  "key9": "4RjxGbV42C5LLd1DzLriiQppoYzjuNxSWuGn1ATSxXhVtHfZ7E9epcmQ4TtWkohkRL8e5GpN6YhGNzcKEcbAZvsR",
  "key10": "5nsp785nVehZUsJndw9BhygKuyFTo6Z3gcauFaeFfnqVhT9sju6vjbc9tDffcFPeE16P7QKMLnzWWkg4tm8jw1LN",
  "key11": "4DwonWA8D6bnrkhVweN8ndrKMKZnpKdjZK34w8x5dS3hQfqyZ483XHqdQzo43rGLBMApZKsVHLKxVnKAFh5T4m82",
  "key12": "27s2L6Q5djZwbiQK6atXeXAeV5RUjshRagPsdhMhximu57Ej1CENoEdLQTGDo5yh4AdALcXrnSHXUDdZuDSQYsCk",
  "key13": "5DiGmuSdEGYg64ESPbrNRwPWCLHMCD49xSCxXenKRjVEvRb9PUJwNZH6rGdHo2K6JnjKnXFMoEkTgwZmotoG2itH",
  "key14": "36oufn71DMbaezR77sdRa65RtDQHxansFEcZzULAs8z9s3dVJSCqeS2eQWXwgK5Vn4ZupiAcx15a1XxmFaAxuYWs",
  "key15": "2KHZvctaizQxuCgknAKyjrX8miP7MenjDmJwEJC6nXJz22mZCL9eHmRTd81oLjp51wPHnqaRhs58ux8Q495UHEyg",
  "key16": "2Xryo9YJhkSxDsnck93QwpbC8FTKCFykApiyPSYxpL5aLdcUUiv363NPVNqfS4bx4DEtmUECGSUwfPAyRfSj9E3z",
  "key17": "vFsNwYz5VVCmpzaqdh5tDY3XicUjTrbSQhjitjDVupzBwJMoDqA7VJtkkbKu5FvVQ97w8TQ7YWX8Xx1TLzxxMMS",
  "key18": "5CTKQkKNxGZdCiA6e7AL3vGruTf9BJsh43PsoDEv4HX83G2yxG99TFu6pLpr485jjFFHj1hL29g6X4GQSaGxJKm5",
  "key19": "5rrD1u8BL5V7ajUir5HrRvSrDiqpdmhA3pQZSUdReREWe7C1e1Xcv9B3XJbkgaaNRyKLhvMfETUQL5VpZ5KofTz5",
  "key20": "2uyd9FKnGtYVfcWVYdPfebhPjdPGBPFzk29tDEEUj9SZuqjhgzak4h7QRuobkvP29qb7JPTnATvhEtkRRXo8svpD",
  "key21": "4cmJ14aZstmNf3QyqopKxbgrD8TqrqSriomNHHqNN574hQGFNzKJiQA6V5YyQ1LfKsSUaLDKdcBLQM5t8HrzBFwL",
  "key22": "2UXSHzWbbhPogt6AVhDymHMSEqAZk3rfyyoNvjcsr5ATvB7H3XKQ9nAdrndREGQ71kuAgVeDZGPpSHpmA29eksKS",
  "key23": "2Q1vozVUvoznqe8qWp83HRrQvvNgxyygMd93qGgNqTGaVgdKVcYvASryi9oMsEn5MJhfxAhHr94CE5KC4p2xJFQi",
  "key24": "4CELsdrzUtYhunFr2SrPVuUUWsHYFAHj4auDqkq8NhBkFHbEUdnEXcUi23r2EUL7EEq7h5yHmtixxBGoxqVTLc1M",
  "key25": "2jrgkBbnjdcxFBomP9jxfXYSQoDVjunvuZzDka5XvovXCfm5Xdj6DBGcatiQzMrFfiUDMZWGt4tmvFEMivTXgCV8",
  "key26": "2b4C4yjbFWqT7gVjGsB4fTu1xdcJRuqGqPFM4fyPhrtLxsCFMAQTUkK4E9FrGGrSSmCw6F6Br3ZtvnfSW4vwfDQJ",
  "key27": "Sd6hsPGueDXvSgzEb6CnJdxbHrkw9673qREDZA3wxA2oBQms6zDxKYAYkq1HJ8uqacy3XXBs8zt9hdkPGQijnyY",
  "key28": "3zcy6Rg5eaBfMsDqzfL2zDd8jRTV2b66AqBAtSTo3ARraG9Gnk9gGgcXxg6HXGC5NajxyAHAYjjFs83StyxYbaG9",
  "key29": "38L85vp7GQ226b5nEJGMCnUy51Xs51BL7XAzetn4qmoFsfUJER7JZGiLaFUc5DL4EJg56j7w6n9NP2E4aNDnSzoJ"
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
