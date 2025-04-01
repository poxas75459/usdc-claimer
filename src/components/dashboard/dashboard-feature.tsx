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
    "3FQAmNAVFi6eAnLaY5W5tiiZb1C8GoTdaQxiQtKer6TbbqAhK5dXZFhcopurM9G8KzLf2L1tQqBd7zptRraHboeJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GvnpaQzmTZBYxdSUbTv9QGPU6GsM2G4yee6mc1dipCHyb7q4LR6ZJDYSSwDANh8bHNHoQJc8A8kdxkvz4qBhN3s",
  "key1": "uqjtWBbw9tLekozmvgL2yUGWhK1oxFjzmxNEMN6ymDfB7FxtVBd2chyiRABaxCnBwr67Vyvk25T5xmULKRSMMw2",
  "key2": "4wGrWNGQPWeR4CX1jnxeUFoFqAYkhfZsdVBkCfGAJS1KS8PYYgdA1HuQRdfpKzCUBxVLUEAt8QFpBDade2ya1RWo",
  "key3": "zRw55B2QzP6TnVjuVurx3xEeMC1HcQKTptEz4KnCeq3SCnMGpJtL7GtauybphvvrQN3skxSroz3b3N8a9krTBuS",
  "key4": "42Naay94LvyShnsqwg37BNb9FtXzekTgR8rrReCMD35xV3w6KejYMfjtBcwLjW6GzEGfh4ZzSoqFC3gwd4ZNnjyp",
  "key5": "4PPFebt53koPFiVdpiQi1jqFNqcWKgCE64whG9HAQbeRexH9rgSRwkGxDLvujhDcvweqQarNLy1A1xJzrXYBi8Ap",
  "key6": "5PzkBELBNpSuGA5nf7pki9G2ZwgM9czqrj6Q7LeyomAvjMryoW5e64zsL62Wrnyv8wenD7vQSHKmqydunVKv1YXe",
  "key7": "2kr9muKfM4DusXJ3KGDmphC6bG2qaR5gYCXcFhdwhruc2evDcXEsnLj4o7y6SHVEVbwspouXv8YeYGWjMksWYdJa",
  "key8": "5i5QstTUW6J5GCxpvgc7NrX5nZ6aV5aNwDfp3Mzg9x4iduJkzcR1ZgYgHtNrBM7YTEFtcDGxENBBfMe7ts4MiobU",
  "key9": "5UNFFAERXqtBfiYMe748rKq84sBo7vrf8smZyEt8hmxVfqdE6WjVCkknj4HbhdxhRDYwbh7Ywsbxh6rhhfS3K7m8",
  "key10": "3XAWgQd6CgRHLqKtPK1zv86QZNXuWrLCXyVbuia5cDrANpnEio81PimzmGW1pviG3JaEZQmFr9rDVg1Eppww87kj",
  "key11": "3t8i6dKVCHjLC8JgzPqo92F9RRvSAwbPVKXFV7P4hMko4MmbarkKuQ2xEnTs4ASi6Pk1zswWCkjhZzypJHn6ZbJQ",
  "key12": "2tx1guBQCVwZZpsgDZ8TXVTxfb9qExf9b8HzYtksiiCnPcJHUMidpFrew41vFX4P6h74P9BVHXhKfNeYTPwArtyJ",
  "key13": "5nvDenMUkey6tspjRqFGvejHjPZ7buAT6QtsdsRNxQHX4tcUzBT3HHqv4g8QcSE8RY8ypQ4jBncTa4nETVUFnmRQ",
  "key14": "2s2cMymi3SbP5uY4K3Up47Nduwm5ETzd8roW9iknfjXwioxjoxat9Cs4HQjdpD3xSsY7G5sgGmD2Bfoyuupx4dK8",
  "key15": "25poVfzibbC2anMoB1x4q9Ppz2S4swYh3ufTKsUcPMHk41vZ1vKJhZbSFJAsSSDUgDbYVkgjaCnx6fsgifTK9aLA",
  "key16": "4kv1azWwqf2c7ceZQokd2KNbeWGdGRSTDHqh5UteagtyGgA14oKzrST5BGybZnYryKWZpK39sXkeWw5NRA5ud3H8",
  "key17": "59oKpmWmm1pUvaThyCb8phw1SgZk4gjEXg1DAxwWR48TYaVbMTEUCNu4inoxrocFMMpjPpFmCc5zfAFzYQSGMBfx",
  "key18": "zYQ84ZNVzbzufPKz7zp3cS1Rzg3UNAYWcMtuJuhFgdwNYdCpJn3NHWjqwNjCWhJQfX9m4ZcWVF3GrDMUJ9kjXR3",
  "key19": "Zx2aAGn2kRoPqpRg9om8pwKk68Qn4cjbzxHxyJufEXPcJ19tFxMBHDo891VSosKY3nkvBRnXz8fDNEA6jbt6pSm",
  "key20": "4KL717bHwiZSWA1N8cdVYV5UxKw56qUTGk4y3FEhTTmp9nructmsF9ThAPo75MN94hSHQ49FgpQwkbh4zpHUeVmu",
  "key21": "LNfm4P8h32vaxp55bkDXKR7c1dq5rrWouZpmeSAUeq5J8R3PV8aHQavgb5ibTg1NSidvdKU6PkSjKppwHhfVW2d",
  "key22": "41tqvTAVbxMgPTHgkyVBYYBtKdwhgi8JfNuCiTGA2mMtKKKQYotzRwopnpJkK4NyPagjEaFfBsBG6Xnuu9uXYwKC",
  "key23": "5DAXDq16abVFAhXm6Saj3wpYmgRqu9HhC9S8Kbpj6uQnRLMDDfnwFZ6Lv12W8iYwZMDtR7bujJTxcNeAFw6LThtt",
  "key24": "oKsrUE7uyzWT6YrmwhVC8m3hsiBx7JDrRUcbyPoxKtbsE3XzQYAv5wAy5JanMZxu8DtNCSGZvW3gkZX6h5pDJSc",
  "key25": "3R2j5Ss1ZijjNKwJDJpAe18GpmvEtzRvHGLEWAnfwgGYcocegKBWh2R7oF1py7fKztC3YQbsiQkjSpBqoKvNzxfj",
  "key26": "2RNwBZXXN3cFkdkt9Meu4zFUzdvKV7vZSatJc2E8dU9GMtgvCcf3TN64sxHcYi85EUG9qdZVvPyVRXcPoNU15NHr",
  "key27": "5RyYXyuyXpnk2usCgW1nNo3DkraT1j71PH3KRH1MtiZGYiCFifpTTJ52Udz7F42XiJEb6GsgsTJ57GeNSc5JKyBu",
  "key28": "YYY94YhpgWjxwLNBJ7RTmdyKjvTLn3VAZRdHGqYTC1u45NbWJi9N6EZ43y44ryiPvVgj9AaJ2iZatJgFa6PFJtp",
  "key29": "2MME6HPaEzjVeANQDKE9dkpgkANhFC3DH2Utp8vHUDBNNThu1s2SwP5pdXvQWQd4qiTKvvZEYoDBDrjjnjBe15en",
  "key30": "3yWe7htNTHYdqhbws7UUUpcG7ZrJ2HpfRHxKWSqCgeiSuMqii238vZv428kYGYqaTrYBiwMCfFuTEAKmUeKWPxdU",
  "key31": "2MCX1Y3oZvmnT5QQLnEDRnPay3ZLeTdVP136TCsGJe4Rb9T7CEFHxsm3ad1CgVxgSJDL2vQv4sZgantrPDybbmZc",
  "key32": "2vVVM3cvxiEK7ag3jGxnxBnbyLvUFECKuK238WdpCspu1Fiwuq3BMDsz9bSwR7bEDU8MH3twFbEw1jVKF574H2Cs",
  "key33": "5wcapZm7PDyPcLs9GYAtTcVpxELtg7sfs6R4uZs9izYz5JPzDBjhvmhpa35dkWQ4A5Gttx276t3RGNpFQqsGvU3u",
  "key34": "2APhcnYfiLAi1c96NHHe8DXM7PZFGKGfqD9uSDGJJjxoaqoqaux6Sg7SR1JLK4dojPgJGXR2K2iZG1x59oT4rFNg",
  "key35": "62Fx8aub6cDjbENsqCa2Qt7sfM8GA5npEcJ4uWvcixdagvwdB15EmybSGCNHTxqXT3uCTnmaEKmmNgfwffGXPbMx",
  "key36": "4uPvd6raqAxb6dgmBjnNBryeiEhrFKgDNbUig33TCzQSbGZ2kEgKgs6RzcgTMgzUcpn5ALGtyRxCjhHr8pDnjkSo",
  "key37": "5M86jpaCecwCeKG1dk5WZBdZqN2rBvCfQrdNAigPkVSwJ4hhUZqsGc86qPaBvZ2xa5idULJNSEqpv2NbLZb9y3ix",
  "key38": "39drFQZcCwzBqpPUVFk3EEgjprfjZhnfV2NnJbFpTCcnfj8uScpy5AV4JHryPD8EFko9K7aQ2KRcVPn9BubYtQ9i"
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
