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
    "3oBretQMKHSuTYj2P9bU52oMb13QYP5StWgEyZgFMvRVj3BfAUKfp7CY3VkqU6X1P9MQJaxdcuMHRnWCJYxoQ4z3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YNw7ZvM86nonFM3KA3uczcjVzeCcnW65C8egniDF3pGZAJ8TxW6Qh8ZQDCBC3XaUJHisK4NgB9QF41NxXnCK4HF",
  "key1": "2BiyrE59Kp9jt2GQHen3cAT9Rthw1g2KeC7tuSbyr9mC2K65MdmYh3koKfqTY3MrF67HRAgHu9UbUTTQzm87Q6kk",
  "key2": "4mhenXN87b3TLvak6VRxaMnHdRWvCibm7YWMFnDAvJDwJRsFgbB6g2QK6JSmG6B41M5uXz8AR4QWRFBzvwgeRUv2",
  "key3": "2LvEV7cKW7LKns81mWbCFfoNiBYXK4tX6ZjbMiXhREueeFSjwU5seVFM8rBE7cg9NkJZXL6hPyG8tKU2W7VeGNFN",
  "key4": "2uNGSAsUuAuabQTjXVgUxpy1edag7iKx3ViM43ufS2V4ydiQoJty1etumMvNgvqPJW83xvqKRADba4N3PjX9E5k1",
  "key5": "4SaaEE8b1Cro8Mfh1f5ACKGJLXGF2pY7Ax4Ru6nMunybj6CUcksbkFnBj3weJHkxXXY52FHSkG2TSWc6YfVpjBAE",
  "key6": "3QEgWbooBSkUqDfMZVQDHM7CRikoCzWyk24hQTeEsmuDfE8b3FbcRTFZRpXoor6XQe5WtX9fvGvcGCbwKQC6QBGr",
  "key7": "43EPWN77aRgqWrEGuG5kPdmDqtxuoyY9ub2Rkvy2Gr6sZ9WKpTFnyYut9ouzZgLD79iMogvJwsyk4qVnfsMv8Nnj",
  "key8": "QtYLuXS9KwiPCv6GrvTA8dC2VCmNAMsB3NH4WRoG2nE6dq2pXxn1VmPEwTjv1Q8YVW7tUNowjAEnrPMwchaKN7n",
  "key9": "3dtFfPC8y4Vave2zrQJE5qM4Rvzazw7XPbZsEZYzo6gtfeAhWESLBPEX8K9nLKFkxUqbymfBscscN5KraVHvJ8P4",
  "key10": "3bD4dxo2ag1qywwjoD1aefeaesTZ1F16fRbhmQpF9Xk6m38Bdd432KReV5GNdzQD364pcVhro8mPNDmAk5MnHm2s",
  "key11": "5X4T9rEqwD5hiFsCNssRnqsZW2RuUrLfFx6tYQELoXBXJ2FH6U5qavVUqQEMZk4yXW7xWW5VJfmndgc8EH1Z3K5u",
  "key12": "4FqdVFztQ8LwBWi1WC3PJUUxCkmD8w7sLruy6vXBU779UEzeeZUfp71uSCsN2kXJFsx8UodHNG2FGoNwjj9qLAFr",
  "key13": "47xF5Ws6dBsbH4wxx7GYZPYZcNvWhZVLZGu3Hcbe87wmURn6rpBeJuDLxY1MxhGex7ByQd3Lk5q26xRnnWXgnVUf",
  "key14": "3hReLguJ4L6d1sAfze7HrUWAayeAggVbRetbaNJxMw79ngTQ39hmtvonR8iYzS2x4TKcyLBZoCKRvLUW2X91oW1x",
  "key15": "z2FN1VwiDnJ5KagkXSpirbd9aDQ2kNP11K2yN1NUNbAwEtJyZz74Dm8T5yCLAqmbHJaBqK4ndbCQb5fsaVcrhfw",
  "key16": "ZS2BNDsfrchmHhqvRMfmLudB83g7Z8Q5fA1Yw1bt7Bk3QjYGNoUwGN2HaVutnChiEL3mDzM6gcpYoj3mkuQQCgm",
  "key17": "4wef61EufAE2qZJRWRkVFkKzNmJcroaWiymjdLWS6tmwHAoVmdPUoimwjBs92bfUhTc7MT8danNjCJ74ej3aw4Ge",
  "key18": "3pqwPJxCNv7WQc6Xs7QUaQp39CwyFjMtNZ6rff7325L2PtquNyPHK4vDbgFUA42e6aaiXx7q2MmLNEbc7S3ZBBCo",
  "key19": "2ngjPgukCrpDoZSPgH8QdUpoX8tbgcEpqEZTrpovfRxMjoJrd2HURBSEoPnfMAiwAA8q44DoWG65FbtMvd2EuWY2",
  "key20": "3zmHFxBF5jqY87D1GqiL9zCc7HqNoMJBxsuFDdAiE8dcwxwfhbFZNtvUWPQvXtdKUNmdApVJeiTM6RJryVzU51Zk",
  "key21": "QqzgWCT5USkX8Vd12VnM9Ci8kn8gH3J3YGVVB8gPuW6wCpeJaUFiS8eahMP94E7kjFxTMEuRZ67HH4NAFu1Ws2U",
  "key22": "4crR8jypxwYoCYCAbHZ7NDAAzaXvoqTJAiQWS5FTdzfuBrDdtrugfCwXgS3dtEwEEzJ9dfW264vjoZj2PGHVhFeG",
  "key23": "4XzRqXzcTDCRKrCRj35NhhT3kUs31VpuPgNfjyngeczhQsYvTgcmvhzakSbkGWUUQUuR8QLR7nGChkdryZBCDZ1H",
  "key24": "2JDdQdmmpt1GzBNySAUYSgCuNzDz6T17ZVmWStePqVgUqUkH1p6XbZp899SmM8t6V4ELBvaLmJeWDWvXfGfZguUq",
  "key25": "MsVYKHjveBQpyWQ8RkLJ7Dk9H9Ks5nvFMkcyyf1RAQCKwpKp7WDhJ76TjTnma5fLMxwoobkcp2T519iL3yvamZJ",
  "key26": "2rG8qWaCm8gdtQwqu8JYSvT3XMqKRaiipZkRFvMPS5yLJw16te5p6hGGnoeaieZ5PNMobj7GJ2CBTvjV2vHw1yUC",
  "key27": "64EyyJuLC5vZdGsvQu3W1LfsCMXQ3nwW8TC7ZxkCTsjZc9kYZBUQJnTdvHgbU3bW3P82wo4SqTzwAqYnJGxK4RfF",
  "key28": "66dYvxXJY6o3rmVE3d5cLUB3JoBGDozg8xui2y99SetkoXNaAY4PV3xuFD6uxEwqC3omAyKGwAimZ7XSGfHuTQBe",
  "key29": "54fjJ14UyPRveW56xuQy2EFXF6BVmcSj3pLZYryGcAia1FrFLTNgw6cZbUeiunM18cQt5GnJXHgyLAzdpxD1zWY7"
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
