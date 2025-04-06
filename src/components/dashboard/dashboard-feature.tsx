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
    "2PnZ3kCteUFwRhtnXbQeqrndesvGALSng6Q4jdmgMNR5rkFNUNbUdoBa1V6HmZE3TT958kidKdiJpCBTeJf2iMSL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DedHPr7NwKSfMqJNKj8uNSiWoKzYaCXRcs8G2q7vvf3fSCfBojBMVoLQFzMs4vsMzhbLf7BYVi8wQ1cfuxNvyXo",
  "key1": "2cVrQPQwQtzwbJ3cAgB3eRZjQEnq4v1yXQEReYgpKitYsjQc1YrN1xCPmBKFYMDv7FUggjRkrgipDSzJDo9qq9hu",
  "key2": "3kU8oe8pWDABoVkJyRBCN86VauzXDdwRmBr3HZv5w9YRGJhS9KYwgXsUDW9sfATG86h5swDXz4zKDqE6j4LhxnZX",
  "key3": "2wg3uPSjumUjbEz5m5XtpqYbzJG7En34wU5FFHEi5XR98VgGBhqYgMWEfZiYFfi4PKRS9aqBRJovMJB2Bsf7WwmU",
  "key4": "2ADukTQgkDWPtt7egRA7UkrYTgSr6RXKFzjGkbGuv1BoqGGHuKLRspvKfZevAL3Pc1hqrrsNYcrsqP9b6CHj47NW",
  "key5": "4d5Q3VSYt5TMtCpPqZzYfgGMxjVRge6YVFWJjDWxyo3YoJw9svQMjeAaSZxL7sHAq59RBHEnfhsnwmj8THCZfBvq",
  "key6": "3HwY4AdSkRKbtyEnCzJTc1d4zjZx7qW2qQvieyWNCqvyfca3HapMT6yfb4doLFXJGSuoiWsfEkDi5aeffcJe7xyr",
  "key7": "2bYrSF1essiWhwKjReJLBNGnRqWpDE6Y2RBvMwbFLw1aXtCHCMvECD3onBM4o1DFD2k9rXKSd7KJSgXiDZfppLzg",
  "key8": "3ZddpojMMsjpwm96vxEyK79tG9HfD6a13TeLj4TsYBqRaUAqf9b8kFGUdNS9i8BuAYtKAanEPUNNZXr4NSpzEaVT",
  "key9": "4ggNMLLzmnTEF7Tejv4DDTBTKbw5KqVc6cnvvL9d5YudMrtW2rFruv5rxQCJFxgf89HmuwZPL9RVXJtC1hjkTo3k",
  "key10": "3ofe2zJr9yni4awoZXxDmHBkiftPJYKtp7YBLtHYknK2AnTzj3ps6kobLLGaBdwSvmScfowtfCbLUFuFcM65DEGK",
  "key11": "3dwrmrtp57XN2Tsta1EWLTNA77dduHn8V5kxkxVBehWXN2q29DkYWMViWbCKDL7GL98CUS5SC18pe2VhDmjHpynZ",
  "key12": "2Tfs9q1fgQoH69gB19vpmXDGSUYovNWfdaMsmUg5AeEEZvuZMmu5Em8aoY9cHaFKiNxsr25EmPYkx9uJftqPZT8L",
  "key13": "5aEyzBYXkgaEJyQFrPifvKNWS5hhYbQXD5ySxUsSnS1r26JweaJhJqjjR4zwCLWXDbNNTaKDAdsu3n4N8eprz8Sf",
  "key14": "5d6vJ73pLAoa6vbBq4uNxnSZyKDV7RhGM1vycbwGXP2hKyDNvJCzkTMtFQq5XJ9p8EDxSuNhJP3S9eSrMDqmo9sy",
  "key15": "3CURt9TdZahC7ebYY9yYSABMLgqPuMuvWwMfP6qTuc7qT53EewBqzykQYd3iFmr3W5hyANnhmFNLEvvbv2N2n1MJ",
  "key16": "54T8TtfRRMMxHzvoF5Azr9w4WxeujSyRyksbuaG2pCveypcPjRETsMVjrRbnmpgbqueCtWPrsNRQP71uhp8DBNZk",
  "key17": "BGc7fT6GBLjpAtt4tMYbJofEDAGoL7jtLPv7gg4guuBtRpFvhbCB8Df2xQrU3JccMnCVSdDzFjsXtemjoXP68nG",
  "key18": "3Jfp5ia4MLCtcHvrQ72mzSSmkaPXqF1XPz1yUvtPfuTcj7bQo14bGCDcoXEYbM6KujGavSvmo5vrKvQ4GZofGyA5",
  "key19": "2wFaQYYdDMq8bsf2ZCkjdhaYCCpxBX8tbKEsqgZ4BTg11YaJn2GDJGZ5YpwJvgCDDvE73emHbokKWFE2SLr7whxF",
  "key20": "2Z13BJcAMRmzGcn7rvDdsPGWioLb7kangb4NCT5F9Cqiacj5WfCJVyTWk2QJfE7gM29p4KxoZCDU8ufUwnrAw3xP",
  "key21": "513G7nbdDdUkZrd1ekuQp9XJ5NNEgBMJvCqm37NFi8FsAhZJFC7NHLuHJvFWksVwKjSzbQwNsZEVc8s4u7GXZWSD",
  "key22": "4VdhacX5BDDzvbyV6X3WSqAKPbWXETA1t55ENeVGLRJiAVfTsdttYqZceSyvqFoqn5oLTbmtb17EGjE6tc34tP3",
  "key23": "2mEwuHUWgB1yd93VdC9D7iaE2dPHRVgEY8fPwvSK53dx1XX4PUdpYfDakeSEZDbED7SwnQf8gr3JC625ASCxUgne",
  "key24": "2r59UYYK7AcEZdzCxMs2yFGU4HLFW8TJyDTGQtNAETSuxADEsVcN4avirZC7LvMrc46wRkduSLtNMBgB6MgfBsdq",
  "key25": "w62wrMEfkmvyUJfJzQxX8hSxthRT3Wnc7BWKn1oK111dEnqcuyEacaoY9NzoRu5fgXkVbaaAUiUuLmckTGb3nyf",
  "key26": "oVopC4ar7YkxfACoAXsUu5TSBKpT4jcD4oLJxQS96mkkvA763tSpV9xqV9BcCPn21QAUYdih9UoMuEewDyxkW6N",
  "key27": "3xRUK4wgM7YbvjieG5GtmS91Q5uahgJ4MKrcccyagap6xyxLfi9UnZvzYauEqNqHW9NEeFLxsgjJjZMxTesJ3Wvm",
  "key28": "4QZ2Eu4HmMhVfMVzqFpESwU8rZgDbGeAAc4NVw3LdZrAGkPoPN7eiLtBBATVvF6RZDL1MV8iaesQpF5DYBFiEPPE",
  "key29": "47Cj3RgFcMBFRBTzowZyWntZs29edzWxri9YyGHAA2DKK4VPKXu5Gpy2YxhmBz1qoF1ZbKEkmzfCi5vWT9sf8Met",
  "key30": "2yVtHKeNj3nFDuFaRWWZonU1EQHksXyP8RYJc1SNufUW83vyD5sjmZvPvxKwVs2PsRrXN7jEPagYYgHGNA4fGmCZ",
  "key31": "2imG6BwHB1ucbscdTCZji3c6ZMMRqvA4erVPHTYKFHE9yWueMGjdWhhydXHBEhBQXmbc9UVXtuJA81TjXVxkyzPw",
  "key32": "4zy5W7RythnHuAZAxaLrcUzKcyo5sNFJtg41NNU1ZA3PGpyfyotTV6FhUH5KdHpMHeQRxKJwNdEEEZEAjgkmuVuV",
  "key33": "5WR53Qqua9WzssuyhX5aprGaLr8guQEAqP5M3YdKUqk7DPoP3WxhQyzXUEdFRKNBmGWkpa6meUxiy2UpCjyPoQSi",
  "key34": "3ZVi4n7xmbcQroj4yduypPj1H7jjvQvFm4ids9EqocdQMMFJEkb1eihAJnvQUiUpnZkGtqGQZavwcPRPQDwaNJNv",
  "key35": "4GeLuPnVG7mMyVQyQgnJ7e1DYwqi99Te2mWZPb2qUeGir7jj84aJRhGi7QbPc1inTKc3qZcYm14ZkVMjXGQ5sSQ2",
  "key36": "26SdTyPaXdMT8z3zYft9dbmJ4YZRX4HKmhEAxkfAD5dVE4ZeGBV4YQ7ccH2E2FTNBeEiPMLZV5KNVKqUGoc6hydL",
  "key37": "26SWnHMhtSvVC2Qjq1kP2wFdY7MdYnp6RDC9Qt6N4Rn9DQTcf1eQAobKis4XGLxUsHCukVFSBZu3HX9YesLFE1mN",
  "key38": "BQ9agKrzM7We4ncL4wrhDnhAZUNQiQCe6xaX6A7WAsViJ21F5F4VsEBu1TnmrQrhwqFWV3F4uoZi9KGCfd1JnuB",
  "key39": "2dzUVZeQLugrucXDbBpbW1gRFBytow9sMTav4iC1ezW2GZx6fa6P8psk2QyAgg3omFzWFCCnBdAabtxx6hzetMW6"
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
