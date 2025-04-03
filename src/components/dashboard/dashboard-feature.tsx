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
    "3ijbZqYWV4peuTfW6Dz7eCoszNH9r9yvqraVqsJX3RR5oTi7ABw14vHWLapEQCCSdT9kYwt9ZeFdaDj7i5ueXVvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x1wiyFqaW7UozPzwnnGJgi1NzPQNoCXJ7RLeu8NscGCkNHg4Q4QYqas3PrrcbPxdoM5BgDgZ2WwJP6E9scBAzWT",
  "key1": "L2SnFd1DZkuTBf4JXQpXvWokMgsd9F4f4YqnqVYa2M85e1cijJW1bFdNaVcdMLcPemmVF48G6BAKWfdgKFpJ22J",
  "key2": "2eh7f5Mb9YV5UT62Ec3rFoeQGTioYUvMYDFqymhYXKrLsDhJ2AUcy6ZdkFX4jj7QccyQ97vVNn3SUZ9u2D9aMhv6",
  "key3": "2v66Er5QSJowZsyBujsYhSPV7Tuzz6Yfy5kkWQbnvK59FQyzm5f4k643CYU2t5gDcQpzxu1Qe2vHbXQ2Fo5WwAX7",
  "key4": "Zbw83vvQxKnZqjxszUmagEtqP8nCiRw6UKqTYyJz7mgjeh8PH5J5no8NH2pGaYWiSF6KFT4G6r8hJPKTi1uBQiM",
  "key5": "2xF32EcDmzpNyLbCvQeCaYVXFknizzH2WDWs1HyXRKkEdcfZAGcbWAWMnqahBJrgQTNb29WUUcnPJWunnxW1NBSL",
  "key6": "4NfhNMTz1M8NBW6cRruyLg3PJCZdYzNcjvZZymdZcUTQLjX6aJqZU8XruzFHBDjGp1MrDJyDvKLqPZf6qwFctyCX",
  "key7": "3gWyJomBUJms2154em7cuJiVys7Tv2kakZAW2UAXkbTQjnXaGjkvU1LMhTj3VJda59siFVcpTHJBeaUhYSSewjSs",
  "key8": "4GK4Cj79eGvYjEAFKVMqu3uXfkaDs1AK3NisQiiNx9vzBL6r8Nyy93JUfRPiwULcjxGjBr4Y6ZDkspoqv9ch5m63",
  "key9": "kb97jpqu2DqGtYoPPyiq9w1pp9QBqNdqyVCR9pZyCsQb3M9C9nruiGyD7kC3qrzAcP2La2bU9EaBJtvU9hDXfW7",
  "key10": "4cg9SkbuMY5B3TpQ1ocbNBZhiFLsHuBnqhyjbqvnwoHC1dzfq3xfbU4Z81yhBHt3tkJP1DKrhNUYsi9i59UCJ2sX",
  "key11": "hix5QmiwDhcHt1YwHZ3Nv5u3nyJ8j3br3CNbsGZBNnYS1UATS8FVvmumUPUnHvJswjNLogJde7adv7yNS3QXcCh",
  "key12": "2JGLsbJveg8gGyipUh84NXBWMo1EkxQa1V8KrofSndpgJNQEkiskr6Q5HCVJTkomACyEYPK3wjzBKirevChysiUF",
  "key13": "4zoLCpNLDRu7GpBFb631VWcgatyiRmkwVs3C3pJwf1y5NdGuKXWDvJ7rRNmbnPtRGSy3sgbmGwuL538NkHH3Dugs",
  "key14": "5NcAGu3d245RbZbbwLN8NDbHTNpmoY8mZwukWV7eeCQsuvGGtEsEQ8jw5MiCcCeqKGT3qMZoQU6Kwc3vzPYHQm9d",
  "key15": "5HnMGXkrL55onPK2LDx8CQMsTLumyExPXrZ4ghrVyaA2d2LAX5sobziBmATSkzfNqWgGueckUaAnot8jJEvWkEM2",
  "key16": "3cTBrmvc8boPVgdLD3aY9bQPZdfMXAk91KGMFzcnb8H5oLK2GvvCt2pTDPFvKKSMbw3uFMc9UEM3Xun8akF3RdEh",
  "key17": "45NkgArnzp4manuhRYdbRSXFX3myWtemeHX1LFmia4t3n6LYmNCktUDqE5Hbd9fWeGCRfztAzczUcjo6KktacJ5s",
  "key18": "2Z92pokSncwES428tXUdkbiXPr5QYS26ZMsuc1W5inHxNi6CqimGGPtqmqakWRAX8e4xZk8PB5FcAG3MTn9DyB4n",
  "key19": "24detatJoRwoVNo1y9S4sU7bWLBmkmDAjshbSXLSiHB25niUAKV6jCjizegdkjWg6ZiLdBa8BqXUB1TXeTqCmzZZ",
  "key20": "32T6yFxMq8dhC9cENDTnX5YLWJDw39bWoNKex3duzRcwKbCFq4YddwBcb46JWons6xhew8xqv7MwGS1H1krAqFHy",
  "key21": "4t9gn33WKbwvHuGrDiNYFupUjfBEuWBkxHnZ6LAPU9sB3Lw8oyLpQxPZ7wLNVcyxm56ZAySBCDGxrHyoYVU7Rk1x",
  "key22": "56N5SGcqWyYUBZHDHzVY1Zi61PMoTiBZp1hU2ww2pCL5oduCQK516id3H8hvUbWvNnvZDnFDNnhFko5xwHxVdWF3",
  "key23": "3Sdth3GU6uNJreogTeZspBNQp3EmkMMoLxaf6g2qDs4AtJgWZ8ur5NjcEVR9WQbArPGRs8UCpyH9rKDxsi1kxhoc",
  "key24": "3A4h51csvgR4Vm2Q63vp4a8aFG85kXRk1yUzCtZwCgSK7PXsWpqvcn8A4rycHy9kJytuRR8HYMqn3uuuU8juPBZp",
  "key25": "43ctKr2c6c2ryPacPAyvEEHHFnfWiSAFoDH2BMG5MzuE91fsr1Rdjpyn4xi6Y7MWkApDHAWfkVwdWhvSYyi9co5H",
  "key26": "2BgBF8tQSPNjjrLQoXWXSc3qS25V2HWNJ9bSwByGzjuL5xzgw2hvd54QLxNvB7KnUEhxwTYiUTv5CkxQREosBRQ1",
  "key27": "RT53GYTzgJKERXY6AbAzYiy7amUTr5euafvQRuABDVRmneCphwcSoXSEnXwPEBEGjkkZWZnVWyC2LSW8vYM6fzJ",
  "key28": "4sjrHrqqMaQWYx1q7vcM3WpFakvgey4oawJRMtRtZPdaR97xvPyLt34FB6RBasLsPVxYqskD4wVrHq3Lxpe2gJwp",
  "key29": "4dxsTy3gJhBV5ciYPF1DfgK8qwvAWTSf8zkG8n9jaPepab5ACV4KDLthasyAvpuzJuAain8WQyiCaVQEt2sFGWbB"
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
