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
    "2YkFvv2QmWaCfyoaz2had2NrTcKt1hcNJrUdfchCKBLD9N7fw8dKagTtcppzd8LfE98gDqKEBXHJimN5wNqRGhYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WbQ2kh3DfesvVWFnihKaJAVBuEQoEs3rNUKQgWWevwnxU2ae7XSMEYut4wQGwznvgEfSCFxhGq7AJdi3nfLT8br",
  "key1": "2br6ngLmEhHHYD7SFBaNPFCEMgD4E7oCjdf3FtdWdNcvGz2u8J5LaNTzQCn25MLLFXBbXJmpuLg9KQ4utgLfu2Jo",
  "key2": "5kkr1jP4tMTHAjRv6AGSr5Z7HE122pgLMxVTK676uNaTS7PrrdBw8ySRVXNNRvwA2DdiUbwT556zPZPH5tCrzP1y",
  "key3": "5pQBHgdErFZoYgSgWfFrVMPQnP9GZZGBBk3sZNMtzuzE7Ss1hy9zhKBL3tpuQAu7249Q67aE4sQsmnb6sF3AQuhc",
  "key4": "TT8XBgkFLHcrt1tkKqzehrNmx8DRvo4G9b9uk2uUsLhx46Voycy1WuS7ubnHHUEViauJEJVrUg3bwT9wmewTp3W",
  "key5": "g2GALVS76ZKYyXq1ZPLdG5WRaVMZuKtkwB5HTjLt9ddqBwtkGUKjtiGuMaQmkbRHxuAMikskfZTwVHwCtNtbEyx",
  "key6": "4dvWQGjpeMpatRxyZ9RN7VwCym6NFAPntduHx8Zz6o8sd9cjU7GXqm7gT2BWythk8o5ZYYuJCh1CqWsG9Pqx1gW3",
  "key7": "5hyWzpMem6MnXfsYX81K72Sq6zLeCpTtRhUBdmQpTLrfiofa7ZAHXX8GkDfnEm3pSZcbSxYpezgieCzKa2YHd66b",
  "key8": "5EAwHk51BLh81DMuNHx2Tv7yCDCwVmmjTn2ye46QDyAc2vPuQxCMndH98pg4QC6RSmh8zX4WeveQZrECRshxRoGi",
  "key9": "2V1GSRNtMVNrMm9GPFE9BPfsmoKiSAX5bBz6ecuKsnDfXySSSt9go5DGZdmC6AJ8b6eV6KcSxRGjYksozt95QujK",
  "key10": "4iQWrhBUTdfWayo84usVcXJ4siZskSz6JbeFZXGziW3jbQccpn2Dtx1F4XL2W97yJ8QWH88XayK9DZK9oeFx35bZ",
  "key11": "CaKvKrHnh2m7G4iYYH2dTkNd1pDrGPLmcbaywL3pwToDux8hWsZAvh1B6amSXukfVPoHTWYnreNCoNCP94znVCn",
  "key12": "4oN2EWTB3Amh4LeUxjr5koSnsGMHDUXUDs7kY8vGXxZmutJJoCNvZiWnU7ntsKK7RZCDJHhECsPhxyrAtttPRQHs",
  "key13": "Fo6TxdCSn8tSa8gSxuwh7Nbsa7zwPhMsFzSLVz7Xr2BbKaiHrUBPCxHiqdoLdg5bk7YRmD6ZUSjK7suW6P8y4JG",
  "key14": "5KXzP6zz4G2TV8cdwLDhAKW8C9C3JX6cxp9HCxMBRg3y87kngkjydFYcTo4NBe7jJSBqfrj6ZVw111iJSf5gThGo",
  "key15": "41cXdfQe7TvnjkugTdf2idGKAG8kaPqwV9E2BjAxjFKTFouab4ZSgpCTfZevXpYu2z8LdGvePWBoWizLuqULZmqa",
  "key16": "3cHcJ5tf8KfETHBbgJw3yTGXKXzCc1WWmQWnZ7zVBaevKh6acgC11eeJ1PsAdh2nPBAChEmMwLm66metQNj9p55P",
  "key17": "41KYmeq1LRYShEuYktXB2VsfCWYq2SUz4ocj5J5SqUfexkrYLe8zJpDjrvT2WgCs3GSyo9Ga3umDXwoWEjoAQPyb",
  "key18": "3jBtSDeyrTWbQARA8aL1MR5z2KpDmMDxzR71ZK5cwUCWDJBKL9MTdV8bjPwcjKTBPtNdaLA7Tw3W7f4GKzbYKVhS",
  "key19": "2xKSSfWyzhud2XCctZo1sFNpEsvw5CgS8hj8xVsCdX1jH8iRucmiFZJ8976mVKGiC5ibQpzvPqbez7HNaBRg6P2F",
  "key20": "2RfqzP1NdS8QHNUTrmL9rBtx25kyCn2Sx621z8pGsNmemeYWfVWcy9tbeeNxtoBNht1ybj4MSJuNB7xFr4qLLBF6",
  "key21": "5bVxgPGHfE5riWmZvAWhn5qCS6qAZwzH1QNgyKZqxfe3bfQU1VhvdJmQCeY8y7WhuHgETAgPnWgWAkBwVQ8REkQ2",
  "key22": "QoQW2PjUrYcho7oFwWfDxGf5vHg7XqrDimzW99Mgj9UezGiNnUGcMoymymfuY7oF1W66SpfMK3XRNGb69M7hmfZ",
  "key23": "4xjvzvVJC92YiNdMe76JUwqi9rmQcyEmvdhFuPyfuTM5GxYPuZpcP4orCd92XhyqTYYJgjwm4rFbKv1qTWQrVUwK",
  "key24": "xakzpChUrkM5XqsHWTyWfEApfYpEMmTxWst6289qXjZ7pMVghV2itdDy2b8DNrcrZGqyd1ZR9bCtZw3WQbNHJVu",
  "key25": "2umoN8prHqKeu1jExbfaBi5UjcrLbBZ2Vit6HwDy27cvg8a4gUeEnqGcAfqcSUARVv1AYUDP7hDzphzji2SKC4av",
  "key26": "2Pc4ibhPAdwdsrvbUiaUw1QQTKgYbHbLsSvCFw6nTdJCgYnh9Gh5bbyJL6SEG6jFySpEzZyHT5wJo5Tk26YjyJwe",
  "key27": "5sbA9yQc3Z252L5Pp5sSeWYVLK1SzrCJrLoGGUTyVFqUPxuveW1oZLu1cFwhjPzvKcjPvhovVP5Lnnc3ivXcZQJc",
  "key28": "2JWeBNTLKMBQrjLLjruEzunMPSE1MD3KAsvrQSWpc6kQ59oHtUSKxfMXuvDZemHtic4T9baDBAyq6yRcxDj5RqSC",
  "key29": "ki3iY1efBdRJnQUTiVQpbgTjVeTbtRkqeny8JMEQQAXWNwyr4dsRPxhKPrAff3jT562Nv3s6ZBeEF9f7BpcbMfY",
  "key30": "5TNWyh4NE9mGnYk95f6FEzVNQPQTfx3uM6GGqJPhkFCQe7xB1q9DEY2T2ySBv3EsBAqGhm5GGDY4oAzTHKuiTiox",
  "key31": "5hNq3dEsTcLQ1jf1KtZe7RqttMceVgm8U1cz7dqCpfZo9q62aipmn4ZLpELysZm2jrjv2P17VZvqxFEPZHzCQu8f",
  "key32": "Gik2xEBKauJuQfg9i3FJKd9KGEPWcj7wq4qqV8EarJtUAAkqF2rdQKSALZ6642dr7fAZkA7Q7CJjf1zfph5vb29",
  "key33": "3P4r6TK7QFfAPvp9Ljga4W7gXFQ2X4vavLi8e3ZzXfxp8tbLsx97HhYVDQPearjUiKndWnPH6NxdhwKyV3ZZgybT",
  "key34": "d4hUSr15yDRBeeEneRS3VTAiccrHaePorSead61u2H4MBeKBt4EscMwMZaJnJsbAsakpzsZWXuBZEas6FesAxhq",
  "key35": "3bqWHfuXJEJ7dVyVfux1QkF8Koku6NpKTmN9h9z6j8PVKMrYUSfNNkFtpQHEZXnyR3KxUdKXq2jQN2EgM9iWTTcS",
  "key36": "yjhfWDgAgPNTBun1etpX4K6XTygvaT2f1FqWqNenaWhagCc6oPCLSvVGkkVnjFaovMPY7qBxGzqhxJaXWZxhnYq",
  "key37": "4FV6BU7M2H9h3scSsHJt5SRCpPPMmN6yga1cVmm19YKUYboWuQ9JWhTcxyH8FcB9hTQBDhaK7CLULsrBHK3Z1K5g",
  "key38": "4Y4cZUsupa9TDHdYLDyy9WHMxHC6LqmsTSYYo48oeB36tT1Dyb5D7C3v4qLLcT6zoMUpfUttmnTC4C4xMiuUT3dA"
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
