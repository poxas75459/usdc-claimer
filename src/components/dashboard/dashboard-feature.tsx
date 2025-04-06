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
    "5dnPKFwVcX71ba2SnJi7KibxWJBytqR62JUXPd2gV2tsjBuDwLSDidf1duHsD5SVA1jLKqiudRrHvPUC3m3XP1Ct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n32H5CTu5dJJmdUvi2fmVttYcn5TUwzVatj5Aqb3fJoUuhn7yMHfJmmwsuEJ8P7wJ1obRDMQEX9WDJ2SXDtiQwP",
  "key1": "mLtxeL4j8816JVdaF7MLKVZ8w2aLroLFLvcAYYRWteMLdLBE8b2XyQa9e6sgKpPbaW3f2Eeu9VXqqu746q3YkY2",
  "key2": "3kizhfzeQYaijV9ZuF4LjYBfbJ533UadK8zEBDEuGbt2mL3eYcD9VU2c5ZEYn8b13RK6xc11DPaTWSuYeLjmeu1g",
  "key3": "4FHk4bgyiAX7a4VU4WZHTDtTDkcky3kgN33knVx37og6rkwB9s5Ssffjrkt5V8bPdGhajg1jw3bfuBJHiMYDL8kb",
  "key4": "4jfkKh3FRwPvDCwdN2c99Ms83AQbG76x5KkJreYjLscAAfiwHpuT1VTxd7YwxzvqQYWH2Tq5N3NrokxjEP611sir",
  "key5": "65PoSADi93RfCNKmLi8TC16undAMQ9g1V8x3BAPhtNSfDiAkvPo8X3HnhEBvWLqa9pdHQ3bAVUS4McbxqLD6M21J",
  "key6": "3X2jYLSiMuonnWyJj5bmoZzyiDoSDwLxBDGvZ2KHNWS24xoTWpBTeRZTsPHxRhA2BZHVfbGzuDNBPBhW8PjZjkbo",
  "key7": "4b57F34NRdW3N17ttTzsKc5pthwaxowCRx5Xzp2zsMUnAk41dnvXoAeTmPuxBU5R9bKP9RpcoYWTcuxpHqsk81LP",
  "key8": "565U2vz3z5hJdL7gxg72tZirGoMYQNWwj6p5fqVBuQuepVgRyALnEtvLP62VivyD48Js1NpZPggT9CibarWorVsH",
  "key9": "64KDZjyEFzAwo6fSArLtE4Hg2jn1uWh4wB9HVdHi7RNDCGBvE5Kyu5KuZigimGYJWJo1jzWAqLQgGr53fiJ5RZW1",
  "key10": "2HNW2XLoytFfi35M62nhQ7Jpmu2Xq7PkreW4w9hcp5nX6Zcyre4E8H2i4CVFHDyAa8syvqBwWGZGuHvVLbyRGKBq",
  "key11": "31LJWq9ao32oM5xnayxVWkzgAMzGzoCyHkj6m3d2HXjxFzN2W3NbVSqqxEmWvMSfXjrvsM2uer58aqrmEy7Lhw1i",
  "key12": "QP5nMcWJy45tiDeVkTEJCaja3FYpdTMu7of1y419983XYt1NBHqMTMAY1PMVZrFzBtM5eJCsaPRGBWU12ZxjgKy",
  "key13": "2VhsLi1HJVhwRu6GRATjZ6an935Gb2Ge37DnqBMU7CLzrhDsvg4GQ47CTqduYCko4Md1KMaGEZm8jpC12xaaHK44",
  "key14": "5zT7xUygNh9iNANo878jyDViJmDmYJPQiY573is5412nHiJAcyEdc39KoqHzH9xqT53ZbZCAKxweb8S2DoXnrK6P",
  "key15": "36HiohPCDK51H8uze2hjYjVS2b2UD1JEgHhm5oiUALZa8y1WgcBrt4FBezWdqubzGqo9U6vS1aPVwuyk1idgZqeX",
  "key16": "66rYb6e91eeKFwXAyYvvAiFx68RUJHB7TitqxZLHL3LtnoGpntK9uELaRhyZ9x98aFFoHB3EJGWogo7XHr5E7aYd",
  "key17": "3cuvKKiN9ncggEaVMvA3wRU4EeVqXzQsdQrqmdtoG6dHsj4k4awrgcDYwD6nbKLA5zed8DEQRTFj5GTvXPqnrwLG",
  "key18": "5Rjsprh2ej9dZE8Tbd4Qw5iaWbegXkLXsoVssGyT6nJmWrJauQZnhZV6umBhiiKA9bdTZUQCqifuoWzhoqpR5FUd",
  "key19": "2AXrmN83M9jPvn83HtNuU1F5LhKgo7MWydWaykUD5nakyRVkn44z7HnZH5ncZpxuvPraDaEpYcXxZJP5eHoWXjJY",
  "key20": "3vA3dnZCJY4fDBujuNcf3yaUDcvkhWt1iJz3ZjR1S1BJpk29mprzGgzTppvcfdv4oM2caoL99wknQLgAaS48x72t",
  "key21": "5L6cqDqfHmJEec3FiwH9MeGxitjFuWQfjDuX5CAqG1j9oLVevogwyLk1v8pXR827qUB7BgmmhaBfD4rZiXjQWSw8",
  "key22": "2gzbL28HzXwpoeXQ69ChMsZ9pnUdf12SMHS44PBnnigF3igi2XBMGAAxXngqwbtzWRb6iayj9JSZP58nMxKh9548",
  "key23": "2xJ8N1mvBQ9eZe48QBjVrZGaHJBq3JgmLXs8vWsHu9QGsaKzmsQVAdiy1JD4xCUusmb4ghkoenKC8kGAvi7zohs4",
  "key24": "M1R5eEYYkkd9JoM8uTfnFgV9nxi556GcNizKJzBqWqGVV6jVk6hKwoEM3d795KQXGzCiveJaE2zagtYm9Y8VjBB",
  "key25": "3njLURAamMEAYiSCvPMXfUJDRKrkwB9bZS4KBNaB7X6ruDxemkTDNWfe3fYCck5s7T8Y8qaJQuifN6yZAGNYMdSt",
  "key26": "55wpyxcnUcFWD2g1VH2Ja14AXLkMjekNejHZ8ttHRgmdjaFwKXbt3De5Ar2NkaAmuyTJwn4GtE7wQ7b6CqAmtiP5",
  "key27": "4FERyYWUjizzqhWZb5EG2RkkgCNYcwqeMs58F8GwLaTzdpK2UEHDc5mi6cDUZRxkXAx6oQYQ2EbnBCQE88VFCqSU",
  "key28": "239ZFM5Q4fqUeZ6QDfecjtF2zRckWGpjuF4PxLteBtpXdQS5yHobXizR9M8oT95aL4szC6if2EhkqmtjyCxM2TqN",
  "key29": "41ukZAPWaXJRTdK4tvTZjps53vVmeisqDveuhjTGHRVHPnFE8BNJXV97gXbAwsMvSX28eFoSVXavsMcVG9gbSm5R",
  "key30": "2wSZNTjvG7G9EXPDpYmsLktu1DcrKXeQPyrmDxKG59axRaXZgs7VooEAZKsHf6VJkMwt2DbFy3uL6Q1X3ZrWSCcF",
  "key31": "3UKUK8UjC7NNJr3YcWCLExc5TNvY7PqexZ7PLFjLA2kAxprTmtT93et53pMWSRYzr7WrkpkVQxxG7jcxQEs7TSpM",
  "key32": "mE82HL3XoQBrWDyYFnpwy9GLuMVHo3Pu9F3P3daCD3o9GuYuKi6WAWUzkojAmY8k9j6NGK3vt9s6MXvGSFq7gtu",
  "key33": "5BQgkyTkWBLLHt1WHAAwz57oWPjbeUj4oQFHc32WxrQch7PaQJdYvjzfBeEpDqGHA3jp6cWHrebDdrSspT5Wiehe",
  "key34": "4yPKwknDgTwFgZ5ibG5cPs5dJhNBYmPrP9B4emEowzM39Mhmavzy28TEbxiVLW9i1dBEzYqmueJG6vnVhvT3gmkZ",
  "key35": "3ZRSrAuzp7ci7E66cMc2GGQNjJFfrSZMycAXZwc7AsftTGvySyAx7ZoTLjdJQZYabaQqphLoWxJ8Z1sndZWJGKrq"
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
