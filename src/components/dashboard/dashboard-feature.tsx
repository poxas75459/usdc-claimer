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
    "2c3XxgtrfdhM3Q1vrfjL6obUKjeYDCgE5UoyDtGShLrKxvNoLaDe2ytJw52DWQg1oJKcmW2Xa2TeRdafaBaQuLTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LviLAJ7wRWrp8C7ME4f4KkhXFDjmSGRtidz4pQNQyaTKNbozrNGZsxeekjzeQ7mgqVXc8UtygYAhgqdTbF4b51a",
  "key1": "2pdkTVWXSVcMc9PDEHoD4ggP2axduZptVpcHsYGU3DmdGpKBZeKRtVRwP4R4zBVNintm3JkkGh8pAvAenJLAAdDd",
  "key2": "3AvUw8m55DeZA7S6RsuAnGDbT7n5vYXEZe5Z9LJPqP4pgoQB2PWTQK5FXXkXEJ1r2CT7TqUfiZnWjUJfL67WNZ54",
  "key3": "5cSp6DkmiBHUsmsxAS8Kphnf9WZfb6mdAzAWQCBwPzdMF5v7Ebkgqhz2sJ2oH8KJ1b6jcPptQcZfsfrSdKN8DErP",
  "key4": "5qcRourUEtSBhRnM6zi2gGeibHrG8XRpMoeRcfMFzgJqHU4g3VHwBv5GyZMUrwVUQv3vrKKwdK7qhag1DHBkFbGc",
  "key5": "31dqwjdaphh2KBUShARVbyErudKq6CpkWxXp4CeHA7JjYeQtFcm4rHGHnxo3vzzLnbx69uMhBQHJfjYDzMtstpFN",
  "key6": "3RGKey7XWqi6hehG7mwj7E7rdS5SNdnYQWbQRgVbFxYKHSjgV9vk15esN9sfE6fUTUkRbyNmzVhSJ75e95emJtoA",
  "key7": "5fzBsWPWr85iNzYQ53mm3fCNv6qgXuwxh331SmwWaoGevPuGyWngsL2odb9aQ1XMFzGze4JcY5mH9fxqxpjaiWwM",
  "key8": "XUewUbFoZcaiVQ74vz3GejYLehFAordo3LRKt8hJEsZyihrRNtPjmrUJMaVFtNE9Hd6iaa4AGjQWe5wtYTAJs1o",
  "key9": "3qS42p8e16BMiBDxi3D5eikUuhhe9cYsp2qwpLBWF75VeDdv35WciCoGpUCh2B22kfp3e1av8cKRJQBa3qwsLBfY",
  "key10": "e18w2BLnh3xKPhyierusbVCwJoLUuvAE9NZ2eDkGM9RagFQ7mjw91M2AkiiKSZu42NbwSQL6e7YtwWmzsyMNcDb",
  "key11": "4EukHSwHohbBq4qXxwuhmzh6pxQCFWrMZf2PDWTa9CcE54yu1DHDKjmVst9bJNCm6yy4boHiYqXthWBCeKc4JcW9",
  "key12": "55VTUddg9xfwMCCfnsY54UHWKvkcX2xjgKs1Gqzod4eLpwQE1oAYZjDsdnSg5RfyuM6ScXoWECPbD7NiaWQdJbvL",
  "key13": "42FdDSR4qXJeRdF4MB3p5gNCU7w6YfQfm2A4qXJmsbdYcksye4TxxJ6Rxpy3DP3Yv3uVFYLqnGYfXNeshtXmQ777",
  "key14": "JqydDbKHUU8wkF14DgdAjHE8jptsNEQEFQFoCRPiBgBc48LogwQK5obvV5yT3v8Q1kNSq4YwWppMkXPtV7iSfj6",
  "key15": "4uQMY7ArZYheZQNxYAR4FhLwx5BoemmURzdzBjQj8EL8WYfmTXVCfG64xjgBBwHt8jZxM4wa77hggCzdgB4Q65q6",
  "key16": "3AUFCQptcQuaedVbvMNkzRHRV1UPzNgCQcXA9iy7nzTfqkY1d9GAZi87fxpHGH6GQ9tBrZyS13oofz7U3u3UaUh2",
  "key17": "u6JbRJamuY89QXvF4kSZDvpDCe5AVHcZrtzSwWhaGRox1x6ncm1dNtar9KjP2mL9zhmq6rNbJbTYTGaeHhi4Ddq",
  "key18": "xE1c75kNKe4Gmuhzt38xDdHxCvnYDKEByt5LxdQ72c7AEUz7JjnMr88WgWB2H7WDJKfivYGXJzU95AKYE13eYDg",
  "key19": "3hDJsgXwHccRmDQvam3DMi2b9yY7vRdskFzJg9M7uVbaBCNiwjhN8vYk7MuWr9XiRLetEicEmcAW8Xpk1cQassxh",
  "key20": "58NdAqx8ReUf8GzV6pTMPZX4GHo8TyusgHG3QRW5L1poE8Z8L8P3gY97t3rm8x4bM8cAZ5wdXXuBdTV6r7NUHGpk",
  "key21": "5CmQu7S4ddbNQDnCeLQTaHuShcFiMnGqb7LgLNWHZG2j5CCfHxhfDTpwqfyBceoUnMAFprY8Z1C5P7Raypffw9XY",
  "key22": "2DBmW5DcXE8Lq6C7F5VtCXCojmXUZz63S9drKacbkRSXBwKwawo8HwvZasmCZgQnhUEcghMCHtUiwCsgXT7e2uRy",
  "key23": "3rNQsC1YnfRTJXSZDoCkur59Qc6Jb1UJTWM7X6KwGVTpixToMghz5Jy8imTQANCJLxwND6ZxLVkUEhqZLqnWvf7f",
  "key24": "2mykmDFosw7STBW6W2ApAmZVkNR6fAafChzEEQiXQYq53K7Gpys5PP6w7dcgTfwHLFAKp6sugN1ALzswmNzLUdwR",
  "key25": "2yRRD2fcbpbZmJVan18WEkJQSGXGUjTjBeuQWYQsyvnDFu26xNhUcmiEhR6K6zF7BnqpY9nuTDtQVtJxsPUeW2FU",
  "key26": "2TL9zqDJCMGdvPC5GNn9yGD3yXAKVJaJKaDvKhKRmncmaZ8phCEM7uDK5fqdJRg55j3VpAGHwS2MFboZDZPZuN6Q",
  "key27": "5XuEvsAmzAknN669BJyQESUssn495qducKvY6mgTMsHHTKgWWtLz25kSjm4kXRLNpAPmq5nM7K3rMJyBZavEn8n5",
  "key28": "2TxG3jki4eDUdkpfqFvPdnKWPAjwdjf6biUPbp7gYVC4dTDmTxmXAoEbi6D5cyH5exuYt5Ypa61eqALDwaPRhc7N",
  "key29": "2GTVQA98dv4ipGs6rwP5qEkHBunup8HKKerhKnhiU7Csb9yBFzJRmSPxWda9daYuwu5DB7U3xYu2TWhfD5AjphYT",
  "key30": "4kYFzBgChMjhLgvJcWep4YS76THpDYUEDL4cuf6vumxAVFLyr7LM1jgW7AiXZKw28LfFvwEhfzrmQn35VNFJqyhT",
  "key31": "3R1RNLa9NoguEFoY4MTFWnXxSnmpWS8CJx7pMW17v6cBt2LFfN63kzUdtt8xgNeV2yXpXcFR4AfJUN1jAfCZxCbr"
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
