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
    "4hoMWrR2to256hzMMMptksV2wxDA4pZu5dDf1nTxsd1MSrTkVv5D3dgB2BKwEe9aowqXeKY7ZeMhHGonRHWHHXx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZZgV1JmnDXV3M3Z4Jx5bzddLbXVtC2o3AYukPDqRuxb7LE8SsXYVzBzB3ez5cW9TYAK4RxMEPpNZnSLaDNKjCsm",
  "key1": "sftA6h6dZqd8H1ZM8fkPjZYcT6Gg5ptV8MxDqHBTUnyG5RCg1ApUX8AHtjXNYvuz2CW6kCXhaU6PuEHjq2nsQDH",
  "key2": "43ckNWG3ggDUJBTP3YHLSWbcECwyG7nb5sc8WsBevJvxHNwwpd2eo9epM1oDkajU5cdBzy1iYyHvpB9dTNzU11z6",
  "key3": "4yxwYDg9fgPH7aL1BN8x7LGZwztEC5YoBKYAdXuEUr6e2LxdWkkc3zCiiRfi4fYfcsBorF5KegKJ6LrJnPU6x6eT",
  "key4": "3LZXvoMArz9SgLRpkEiXLLrzjuLp5m7e32CZX9DVuE91f7BUjtdqfTxx2GPVzf12mZuHeJz5uSZvqFRyU9uCgqp6",
  "key5": "5NHs5ivARcqz31ReUGznmRehvKGnMz2voAHQGfPn7XGT5vRjKtV6g1VKeiGHfMbRkf6NJ1q5m7XGpsVLk4fiPvqT",
  "key6": "5BcPr7aPNQKe3Px7JaW1AhtDVf1w5B7XaPGLfrqv2J6GpwQqSXyAzmuxwEApRPczDMrR5XYhnTvguzPYqgdUdDKD",
  "key7": "7yQDfo1hSioCrnrrFpMmnVnt79ntDjLPspFdCx6JQQehUt5VqmEnezanoagESZaG7y23ckF6QrCoa2qMz5dhsVZ",
  "key8": "5GibA71ksTS7Kc6veNbEqPTBSrXhRGuMaij7vk1sjQqBaV7412Q8jn7rjkhWDXy2nCWJSvdQKinEvEFsHBmqLixq",
  "key9": "22NWyM7zEvNEqSoBSypZC3jBAH72S9GdATZpJHVUUbSxCBghNiU4FcPRvD8iAt16HZhW6ZrzrWateZ2tqaJ1kGbh",
  "key10": "4PM5cSznf8WfSjCpT4L9jefmnjArsCLrC17W9LkuZe68frzZcmTbRLPk3xkC2JcRZWM2RxGuikRAugTrMPEaR5d1",
  "key11": "62o68Wafhnejh3jz6ypAd2dLJMEgcHg4vpHQcpiLEJpwQei1JYYrA8vN2aC4hzozkDriWnfQ1pyQ7Fvu6aVwUziu",
  "key12": "49y87xkXm1GfhQWUQb5KW79Q6YE646u5J3BW8jVdjJziZa6e5iWr9swquxuy5vN6ghE8NjBaeF2QyoUTjt6KMi6f",
  "key13": "3ns7Rsts5m8344JBP9inGCyqhnEcyz6mzt2GGxfvduKwVuiKTDiUPnp8SnjYwSMYU76eWzAi8DKMDt47ne5jjRPd",
  "key14": "2xQaGzwZ2SBrAoV1jXvTR5ixWQ18J7u3TkgHu1SjJWSVLPmAtATBwTcJZ3ZgrDR4nVutARNrnHWigNnrQofekTwE",
  "key15": "37gnxUEPdDr4rf9CUQsAtaKBznRxzT35wKhRSCwBsddEkXkX38ngLQdtKBLiNwnmsyPTtf436TQNecU1YfeDq8Va",
  "key16": "4GiHhRntrKjj2YMGSsEahiKkzf9gZvaUeVa7q7bd4nPCfp2odVqcbPmfaYBzJd2dTbWLZrP1rKNAP4NHzvFNwgYo",
  "key17": "4k3GWpLUtH4iR5o78c4DstbFnzUh4YXa3VZ3a5EUGKbi2nNCaVF8rQHePgdwNpS16mxtwE741Ms8GLLmQfAERzkx",
  "key18": "2KQPArroNBv2gTzizWq1JSSFo54mYh6ggE1uSECr6zzsjuYy5fq81676cq8L1uGpK8paW8CfoHUHkzUU2Hp5KCRd",
  "key19": "4sjzMURtPDNYXZY57P3ZzLzet6tGH53HFQy1UpeJjQGmm8P3WdrqZGQ2zQP27bRNeR11MmrZ7H9VaqHpM3Tij5R8",
  "key20": "3pBLUsxcoLZgRMrSSdR71uXRbs8pKWLgzNgWfrrEjKag1Dbu8rNZMrfJZssx2MRWLiq6A59fSh7pzrUr3HwfmCm2",
  "key21": "q6MdzkpxaPyVqApThvSrNdmhHmn78SX8b3rWNoXaGuP4qN2VU6dZjGL17b5GAcCGmnRzwQVChyM6pwnQUZQTrH4",
  "key22": "37M5pbwTzBhghhw1WTHrsrqaj5qFz9TdRa2ju9SZc25TnM8YkAUePTQ2hLbcMLvUDE1w9ALURZnbnNGWtuEcKqSV",
  "key23": "3mcMysw4ReFYHmedB3Qt5YJLuZWu8Anp4aojidDwvH4S9fN531NhwtUjk222eJCsUmALiTNNvyqe5fpXtLGTszpf",
  "key24": "24BGG2mFoUQkJzUH9CuLU1xK64np53LKQQb7uVCSk4oLNrBTSiVtTfkVYYwMMnE3q9hTZEdhEpsSvHuyDBZGcNR3",
  "key25": "27ASo49ahKWiwE5zBUMLukifEh4CjWmNz3idmCiqU5sPJLSyr3pCq18efyr6uDqzgDz6NosY9KXmsSvoAyAAFpc4",
  "key26": "5HSG4df39nr3fYRZLyKFPAQ5pWg68AFBJBLxcfc6Ekgirbikua3EsMfx8NqZWPf2RUwLAuLVyvCg3rKLR3VjAB3e",
  "key27": "2WmdkzDHnVcisnWweA6vVkahQJvenNdG2K5kiKebwjeM33aCifPxtNBi7LUJmdts1YHAa73JxXTxKbx18Sz7GTUc",
  "key28": "3KDsNgvz8WPrKgRZwWVxBiRBxLr1q81uzgrLuvpmRzzK9p1zVB1WmxXKJcUGkWUe329d9UMGrBgVEwbUkJFTUbpT",
  "key29": "5L8wSztxfwSWJTctyGQL2VESnJ5FMZqb3rQCRTEptEiZij5jvzGytHjLB2p8z8ouRWft64n81onsgmCnDtd3b9Er",
  "key30": "5bK674KBTL7xKGy4aJC9VycSixdAgEVdN73MnBicJs3ppEbWyn7m1hdsXUUzgeF2Dut87ya5bneHz1HK9XdyEsv4",
  "key31": "2iTtExqph6MTKX528GvYhZiHvkE8FWmpZQ1RDeMpmw5X6ZSQJgJA3bgDDB5uqRgWFX55hV2KhnqQyMjqTXBtHyaE",
  "key32": "mQaGrS8oedeLb7qRVjnZDKw36pKzWDTdJbW7nvwoZuLYx8ckgWXpj7rAvPeeDJehTJXzmroYbNKQK8YBsUMNA1e",
  "key33": "3FPTRAP4rR5U4sbku5934UR24GpDa1NLVVbDkvqU8Lfdm7eAQXkn5vfkVV1RbrgxVHfdGRnJZr4TknmXw2e3i9E5",
  "key34": "5xDAuyu8GCedciwSPVmfg6ZV6CNoHb3QSeoPdta246GzJLk4pFTzuK9b2ep6Msm11GBV1Z29wpYiojGjdwBDL8TS",
  "key35": "59kBN8q1SqLVyC2ciHoJfctpCjpAefRi6aKLs74cDS45sJc8DuA9M9m3MR4ka3VXrgQN9yMVsvwjqacaGCH6XaTT",
  "key36": "3Hrx2ewXVuSNheK7gWyBJVpHh4hyvCkGzT6xpccSuLcBycGagQbcfm7NTjkRvGb9xX7vWuw4zhjVRaQiP2D4EiXW",
  "key37": "2Bj9jAyk8M8KCuBf2LCVtX7TmdhdnAKs7VY2evdsNyBRvtaXPPxW1k8MS6i2HQqR7Zf4XrhKm2ommLRktEKqJYAC",
  "key38": "3xR2FDJNbpXbqUACYp5W9cqBwnKwCSkU4y62KWL3bkTTun3jB5gXkgDDQ1LnGp3nurH1RBfTYJrMMDGXZUCtbema",
  "key39": "gjbmTPhCjcyCh8tYZMKzWmZMMT1mvCREGKbjGdeqrFyuXf5tbADaxYr8rarsfPZiPMbKRKdNxYJaNQwybdyRPfR",
  "key40": "2Fqp6p2Fntm9dzkymhjPxXS9DwxEAmLzz5c82aWiF6MqYn5ptzXZNrCXLfucTdVcZbjMCcgtpsP4MwpNErgN4uL6",
  "key41": "5mTFRhWaXWPRBGjCVn85trJB3ftDnKCSJ2dfczsUvLuKFs5nTzGWjHXArykw5DTFkqpcSqfVozRPjtRqjewebX7d",
  "key42": "yerPYG9dZCPLkJWduStNGwmcBrxNWNnS2jKWpC1STeFT7bTFC5PQTzy4u6TAQHd1Rs3XvuycxesjKK4qT6QEipD",
  "key43": "5Wn6hcB9GPwUzavWKBNBjsr7jMpTaimswH6UNTNUiad8Gqnd2U21werR2MnLqu86SUFd6iAq8JrM9YJ4EVy4WYbq",
  "key44": "3RaezuAWxVmeMyRjhcEhqKWVcdfHW75qPD1tr6Bqr8hNfohdVMECeNdaUr1H73J2zVSUJG64h7ni7i27CMAyx4Xt"
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
