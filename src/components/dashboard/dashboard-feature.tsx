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
    "229hFwiFbwsdk2VEvw9ZEyZPsf8SFv4DVeb45JZXQep526vg9GeroTe5D2dv9uiUnWVRxep5UUQAeCNzRvpV7uoJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64ppKqrt7orNMMC95JQpkNKSDGS3BQACdhNagKH3WXsRLBsffXxWiAHhR8NZUHTiYDDpKNu3KA8Na3JiHAAJbkup",
  "key1": "5TziAGFtH5hK2UWqZd7Zv8265RNstK7QpeQ9iP6HkUQ2Sx5CF1QsNM747wh4euZZT5rEwG1KSZEhWekMCPhfmUi1",
  "key2": "4raRf9AHfxhtQWckg6Zjh8yt3HWUZ2YEnjF1W3eyPB4WH9BWUQfZRX5XviNS88KbNaNaGYXyMnM91a4pekjVXhHT",
  "key3": "338e67e48BawxEHeRq2NqAeGDgSQg7dpJ9vUZByhzLneBHzVjj5N7dUwAoD7g3NV5U9eSMskWyYRKXekrdHRRMCz",
  "key4": "6dYd1cZwg85GBrx1yHzHMK75sVSfY1NNp2tGeYFqvAJK81eeCErqa1GqFQhufHjbUxqbzaiPfky5opFxcFADaQc",
  "key5": "5LniP7gVQrJn7nLRwEBtUPeuaWJ2GZa4K4FVJmjHDjqUuxmzMmfqh5tJk8DApPLGYBGF8muVWAvBKPDRYDWhsNpT",
  "key6": "byJwo97Snax5Z8Rj1Gto7ZBGf9EZUzjZKTQ2bsLz933JDc9WbjZRYoch6vN6V7EmPKbqvsXjmrypvBsY42ti4Xd",
  "key7": "5Mq9gu8sxmAZaAhnD8xtxKjacAFS3rmXfxTBJ5ZLkCdWD4nFTgNUzogL37tvqy2wAJqTrivEx2R2imdpWyGtz33G",
  "key8": "2w5rGyhDczCpbHKGGNS1pwoNcJBDMmUaBawUb6kxFAizJt7jqAqEruUYMqgGrWG7WQPc2vhz5kWJgdTk5WdVZurt",
  "key9": "2RRFic9kpP5C1xUXLHEzpHBvnTeCarMsWHVgxej5JMtTapJTYBq1CBqnQjbCK52AxxDZchVkfoVX7haFpm88qcq2",
  "key10": "4BRrFt2VW7V5xq4tYpYTkCkZvsy2cdCE2xfQbQZMWbuPMBpziKeQv3eDi6N62hYoWLEQFesVPiKhpESQC6N7ocgU",
  "key11": "2xt83QFxRXhQmps9RoMsfsXXxqS7AKAsLyhAWteq2kQPVbXNFk2hRWKRJiWQkXUxYHgQqPXaq8jM57hwLGE1A73n",
  "key12": "2aYJgz4va3kkuSXt2pabrJ3BsZcrDJKxUefXLk2u3d6qdkW939J9AUBjjVzR912ByCwjJdwdSyaUtbsWgmAN39Zz",
  "key13": "46JGev3qQzcr1AJpXrCRrL49hHQMM9QvGgi1QXnvYXdCjXwfwuHGknmRGDHrep6sUtQoLLho9t7Qd7ezNRH1d5SM",
  "key14": "2mZZTUqG8ohR37modxmEXyACakpQHrQ5LpZZbSWgeGg2raj9YRoKJNEZC2hAVFH1mojnsULj54xUUSMjuaPWNuop",
  "key15": "38vBiugkZ7NCsdxu1vKSsFVH6XqZtC1oH8DBMEFrYRZMiuXdNMeup9KsrgtT6R71E9ZjRqVXDk2iJZNbpzKoEDtb",
  "key16": "4SnD2yhWM61hqPD9ycPecCmxDopwk11o8xGcmTW2ZMqa8wfcVGUkyXxQemC8FMsFck3fNr7bBoPUEDnYJgZy8s69",
  "key17": "3goZvfbhW4yBYkS6KB8QsZU5JVCG5zj8Nz2GaGJ1DwHnf8dZoNJm3ke4hCzgiAV1mGSHBcRBzXGDLoryzPUs7nKv",
  "key18": "64fH1K1ZnhoWm9tgRswRLDxGJyJWgNLRLLMUZpbxp6bdTMSwZ2JUMQDfsqPEFhqRBGPHR1nesjzu9WiYrmrbamb",
  "key19": "43wufGGyfhDnRmHnp6EHy53UayFsYx7imTcZzXHzgyjydyzJxTNmXcmNVUxpizDPjpqVnvNEmkKnquFtpNGpeYQk",
  "key20": "54c4TqPFP7RNVvqh7pUxXTiHBQGg3PcMKroCxfY47XAzpeeFRjBfJwqR9Q4ThUKnRCTKEAyV2JQJ9KGAPFd88t5w",
  "key21": "2pZtd1FotKSxijWfYqHkzg5M72iCCDsjtD4dHoPLvTL83TaYf4mZcRHA1MhiV7MdKeb9C7h2Qo31tyVUfhzckL1T",
  "key22": "22MQSFtNW9EyBWSNiCEogT5WTAJRU28hJvT3jcapQH9qHmsPBFQqoRzkKmH6SFUzssAyVW3tCGyE2dfwciVmR6Fe",
  "key23": "2WVjmLfX3GGjyCXTHjoJR9Tn6ghXUM9WENqC89f1oWM8UKcXfLXtPxdZXidcP7hQ9tx7GuzebR9EQYXLFo4aoUFD",
  "key24": "4bvu9u3VJmnUBaRtmBu9pyPf5c93iDY7jcwEGi3znfbanNyL37HeTgR8ZStivf8Gp7u7At55uaCMfcpmBvMEg2uw",
  "key25": "5CixUxwdA9WVdF7Gh69pPobGjunv4GjbXBcbBvJMLTsyeUEPYh6aGhwt4F6EkLZDSP9RqaVtaS7vhKjostKkEWCf",
  "key26": "5SMcKRBQTFk1m3VKTgxx9X2oX9fZe1hF5YgCYToGhk5AavcnYfQLHTv6qH3ZPwUZx48GNCo3m1ostHD58zMPbEYk",
  "key27": "GKU3PKVYRmX8QTMGkJi64P5gSVqxzJtAXhndC79AFKtmLQussNZJkZhs41D2mAL5SHDE6Mhcsd15frxnSU8h3Yf",
  "key28": "2DrvWBRsWGAMHzBLWCtjMd42BibmdZ25g6oqSEdfFjWUBxt8Xvq8vtvChTTZzy5m1Ec42Cy28oo5TnXuEu8iXwKt",
  "key29": "3Ji1XCqRvczpGHhGjvjJhaGwR9FMo67EcuJdyj1X43tQ5Git5G7oHtYPcryvENBZnR2h9fvaT5mL7xBdY4oGVEVR",
  "key30": "j9Qc1YecHrhBs3DmyeroUr6ihepew3aWGgcSUJfNJJWCHwDyf3aX9cToW2mL3Wgdyx9Tw7RAeSL3L2TpAPnrQYj",
  "key31": "4ANNindhP5bhfC9RARLLWuZMbyfjJcJEGEJiWgeb1CL6sUpy9hKmM6YxhKbcL9MFDcFUPTkHeWkYYw2F8bjBAuAj",
  "key32": "33Eat1LoKbpA3bjNezhCpKHjH3oic4jxVfkvktzwWQUb4MZYUdUTy1nij1hNA8pxpY5AjUB3YQhvqVHqDDVW9yT5",
  "key33": "2MFFkGZ9qqaTx1yhcU3nD8czsvVR1eSU71Ak9gXCNaCgaPcT6U8Moxvvp7Xr9x9PY8tHp9fYr6p3K2LEXjB1LH4N",
  "key34": "35UdkPz7Zc7WbqZvHQd5VqwF2KtRjzTaikjUEx9vyYtDeK6XaD75gH9YKR9tuNSYse1V9v2hCqshTQVktLRiwW8s"
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
