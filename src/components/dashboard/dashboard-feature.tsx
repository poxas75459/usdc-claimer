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
    "5NEMoRKkknoHthkcxhGSSAdHxhqf8ia2VRS27w47Audy8hnVLixpzpeedyHS4oCoeo7Mh4dbQgSwa9CbNVDWT9eP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YcvVofzs9P1rdeXta8TrKBcGXnzCHRX2JsJQTfBNuAAiTbF3yNk7K9FGkTUiYQ5y84wRqsFHzRL8kRCqZszVriq",
  "key1": "43vj9TBaWQK9YHAqnqdRnY81HNhibnfGtPygutZDFExJ8G63Yi2P2xAx6XnSh6TADn4tn8D3kVjbUvLH4Eu3DsKw",
  "key2": "4sQPZYzG6G5ammf8s4So453WtyyNKWr3oxvmMiYQAxKpTfgcSVHwbygFzwzxfCStKmcg9Vd7zgB9VcYFF1bmpFco",
  "key3": "NbkEPpWengJ6UXqcBazyQUtrUkbgb5saA6p5pdfC1Aeo6kbYaTJ75BAUxWdoibrEoYcNESibJesNWSt7vLyTUgG",
  "key4": "84k7dA14b8ugg8qDd457NohGYGr8VwZBfUukX3iwKrUidQ39vbaJvQAdQD6jQj2yCQU9ToVg8meBQyyGbXx2vL8",
  "key5": "3wUUFaQYfzTA9weNkfcLhxDkcFub22iLtpHZLKEa76aJafoXvCW3Z8XQei54gFaeacRHQgKvBKULX46Ccuf1emTN",
  "key6": "5CiphLFhaaQ6Az1swn4efT8YhPv7dsTam6hMDbq1gB17fyewJ1Nh8zG9ZPG1nD44uKKz6GQbHZoMwaPUuohW5XA",
  "key7": "5w6ojdkb5ummeVoMofVHcy4ojTe5z8E1c6h4CLyrqfMpTKMdajPKJtU4Hw6Atjj8pSS5uNtaRHtg5NMt9djn4HoW",
  "key8": "4QthXoD26WBUaWKrbD76fsiZJVjyv97YXZPCRjEsHQWvSKxJc4b1fFzD6zunQAtszw37QTqe3DhLivZDsd9RMY7J",
  "key9": "VwGCCaaCC9couPCLUYsZ81kSUtu8HXnTGbQH39zzP1TTDoyYYA1HGMtjD3q7tcbjJveq9GW6rbfzYCRSMh3VqtD",
  "key10": "4c9GaX728auDBD8HezNZNRuzBLHuU2iXWR65jWr1m9uBLbTTkh8rnPxosa6QqThjHxsDWzkMT1q8HJp8vxYWDLQm",
  "key11": "3wZ4wQUvGWNBVkjnusEh1fvokmfZ8B39TxkwVNYk4H1mWUdHTawG91cqGNXiSyqt2Ui32WN49Jy2gNw26sZAVp71",
  "key12": "5k2SiSBLrjwJEiu6Pu6ov34BphhEeSZjomutm9oXT3ybYL5dAdCjDACax5FWFt2B7NdcdnQeMDvQ59qEhvKWeC4x",
  "key13": "5pJ5PsVETwdfRu4z4BVj8dpwbuZvz1YaCeYFGu51w2FU9Gf7pmwxnb2XDRWyJhZbev8Tjyg98SQR8m2pcxJqRDue",
  "key14": "YaZunDdgwQ5jqm6rVkHTRPmhGJMFcmiaYd7Fo5Qsy93pLvBx6rCwZgqfxvd8dvD11qK6ZVTK46yMtVDmuUXqPUs",
  "key15": "d8mJDXojxY5mjQW9gyX4zDnkP3fbN3Q1djLcUgmf3Zes59zNzafbxjoSqAKhUzdEjYeMk3vrbt7pj4rhZBbeD54",
  "key16": "5TovfvrH9Y86dvB8XPqahguRtjYiKeD2crMkPHJE5F8HV8VySfuqYS4mDZvttY2esTv4irwqAAzsz47euW7fg9Df",
  "key17": "3yULm9V6ZiT9ZJRzeTmzdaSzCWcGLKZ5gc9USG3goBbnEB72rmmJj3oPv5yYDpAdtC8sd4o6rfh1sykQ5N4uRopx",
  "key18": "2PG4kqn5ash9wMKE1WCAST298D2yxa9X3u36Ptv2RpMVNGSxWDg52SthkxK1C3A5CVKSEsakd2Hbmk6aNCfWaLKS",
  "key19": "nG7JoLxiDpDRhDUizaikcyUakj5kB4iyjtV5fz37M3uZrmF78DdbEwjr6xTqxnBTQnQxU32LTXwxG55A6PKbsqS",
  "key20": "56criKxsQdWCVSdsMwsZ3pe8se88wcv5gRT8VayjGDGuPhAtqrnxubyN5Zzz7EttLSmSiMv7nPzhAfTxKoyDxu4q",
  "key21": "31mT7KYVnyiZF3F3xAccjdaZ9KXtDndaF7BFeKkrB6p7BvhJAbwa6uuQ4SAh3k6HzdEDzRisJhKSYFp74aitHDpj",
  "key22": "3cFFcZuZevSjudrBHT7tpK3kM5ok1hfPQrrc4VCc8iKzPxK4WE7uqjQQ7nUfWdGVv4VATtBbH8g7veH2Weq5A5hW",
  "key23": "33UrrCmYUPomT7poTYFgLAaGknSVQRYmGUmsFsdy2GB6ZBHgMm7fkfSeyPEazZNTzWYejojcbKHgnY9SRUbJk6tU",
  "key24": "2r9PNhdAq9ANV9ZwC1wybATdECu6PZPpTYNzojLzPAHc6DinddwWq88bo4cP6nHS8N55cXZ3GtvfJEQJJ98t3SfD",
  "key25": "5bgmB55KgUTrPphyH6f6BoANxNeaNHTArvebomD63fMmLUHC76yvSBFMvPGJeH9RBzuLS6AKYH8vUhXM55dTd6nb",
  "key26": "333QPXHoq7upCSPiGUpjFjrmZphfik4pBEKTbqFiFeT2GzwNqWfNgRRoVezY8pTQLXyQzxR7QanrRgaxAXRyYYJi",
  "key27": "4Q8sXckEdjP7PVP1MTxDPj35RFoMiycQ8p6FUuvYL9GYmTBQSeJ9N6qfiXkd2n7RC4gUqf3ySPsC2yq9frN4TC1t",
  "key28": "2tTy3vUe24ATEUhbbjbntX7PSHrAN5cvjMfuiuT17WaVLrWwSCoC4PB3MX67sYKDqHZxXirGphYfXUQ9f3wfHLxf",
  "key29": "4dXh2Af4qkvBVp7tprf8zFBHmEB6fr7SRnMdeyoaUF83d53gzsVpB2au9QK6QnZmWtHehBSahU8xYnu4gsbAtAKv",
  "key30": "4QNhEaUYfZJRb6Bsweab8qixz2C1JsFUR2yGeDwNeUbCbQbuYQxt2eSd9ZJuy2pk4oWUG5Xf8exgqNhQw61iyBii",
  "key31": "tgEgfXvN3yhqf3QkXmYhqBQgFdvm9CWvCAaiBxkEbkedMgu5e5JMo4fAoXvo973sk56uTKFd3gQ1REkfE7ZbEtA",
  "key32": "3J4VaErs7UZq56pu3UpkmfFgKkFmFZRQ6eefxKxUFe7EtRW5yuxNCBwXWdR3y4yKMQkYfqF9oJFmHrHT8qwkYMNM",
  "key33": "2EnRkex1N91bE38W7ddFwpFswnGkeZUJFKg2QLPJYJFBTSqRURKr7a2UHqz6Nxg52oHt5fRugcGVvUy9Mw9CAHLA",
  "key34": "3LL6RbSHRhsn9mKiLohM5RhrheWBrVWCW3rUo3FjKs4vAhKVSiSeYNMTQys7eiZ27fD9dNbAqviELF9D81PxrTuy",
  "key35": "44YgLY9ih8eHpRJqf6TYi6L7bJFrZ52ic3G63uo4PJXnWo8EoptMB5yEKcEvgGvaECZtCBxj75yn5Gyww9fLDspQ",
  "key36": "5KMPt6E3MZtnMcdnDJ7oaffbsU9UWjsKcghvQLQp2XiYbsLUVPg5FauaA163Snc5LgRVnLeXgcwiH116mweNEycM",
  "key37": "4b14T1RkLxSXyPQDhTD675rQ9wRg4ZRBmuTjX6b5G1gi9xomeqjoCWQGivhairLfzZjrqF7jym1kS1yW9VDuuXkw",
  "key38": "3ybyPPBQHfsyFRzeUBSmTxnd4bVSDhmBkbj7nPzqPe5mAzVRWCCu8ZZpHifSJ6LFaJvTeYGvdRCqe1rAq7TD1TNX",
  "key39": "iW193ShBUADVFCPdWAYXBFEYacARtSQcbfB3RzovfMxh4xpJ1ee4uRsaVrAKVeRrg6ufw98NmmVQXJTNVBhRVDz",
  "key40": "4qqgwZFyZdqH1ZK8zSNXa5opWbknNSaNawKN4W1nHKMrPht7AmG9cLFmCsrHtqu4HfMqzkC2NJsNUjSNa3im7yop",
  "key41": "37JLj1p2UvB9qT4qM3ephqNj4kTCWsuLjpfXRJF8PU1fXAyNhARJ7qoycFRKXb27Mgvp9gnMdSuTgCyTsqsRFdWD",
  "key42": "2MsuopZQuRo5hw3F49TBULLeg98ErV8iRdouuta7y5wiYDvEqHTMsqT9fXFjZAERuRj1MZzgGnzB1eqXg5JfHaWw",
  "key43": "3SWcYafCoKBpPeL3MauSCLDUauJiyyDBuVJnqrpzabhT2Pg7M3qqw1EZteKAvr3WCrARLZfPPPDoSWxYkWoyBYfu",
  "key44": "23s5owHik9CrpKWDgg26bqbgWgiFXKr89qaQ4WPJm6ekB4QdbivdfP4z3XEepHBQLKtuuVkcuwxk2a8CLDq3uvdr",
  "key45": "2D874gHzoLqTgA1jzMUZCdN1hbPKQ8VBCX1XFB6e7QEiBKgK4Px3ZBzyBoRj9CDZE5BZ8j2qo4nVazMcbr5hYJGw",
  "key46": "25Ux7JaPxHPWERydiP6wPuDGxiiUo1Fh75cLU15BJLDL71hUAVVXyMXLrijHhPnT8AjTgzrR1MYPKj6ppp9jHXzz",
  "key47": "3ZhdxurXjAg3vtvHm84muJtM3A39qHgpYzgrkh8zeLERTBeqhqTKKkpUZSdNdT5yqFMSfwXKmThKFCcBcjxqx5tT",
  "key48": "5HH1VPdxjiKqnNs6tHSbyA46M5Rqzxte8N1tKzz26mQd2Gqu9iL7cN2yf8VfqQGBz1XoBTZA9dz5Wdwa2L33HLwt",
  "key49": "4pVx2Gz56631tbSBkJ6q3tAFmvYqMsRXCgjoX77dTq6AGfu472ZfvVsqtytXGsawUJKSvT2aeRJ9Ppp8maHuT4EG"
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
