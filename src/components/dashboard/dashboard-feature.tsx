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
    "4z3Crbbazv1zC5VpMjr4Prdk7tt3T6ZoQMLAa8XUU9gZqQ7mE8GmqDhSMroxqe4YzdCGcWCTgxqGwxo1eZP88Yjf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fgCwXxcCXxFDbWtcqJ7Kq2y5paQrbxc7TidYZsF9XeP2FWZZ3umZ4S95QuJ1jY4zUumME5owndhSFwQNxQPSspH",
  "key1": "2NnPv4JbpHJtengbmEEwxNAn6Hr5mJ73LZzSmKxTET67eA7oujA82agga6DGdzjSb1JyigQ5KRRTvL1USeVW6wCg",
  "key2": "3DMc5mE8rwzF9byFLnD6WEeZsdmzcbRksbwasQ2EcszCG1o5B1EGQyVWiWMaerumg2mtZWyrrsEYq49DjqsS7vtC",
  "key3": "3RHjx1c1BgCMmtdXvwZ3PouBJ2zR3jat6Zzk7opg6wM8jHjjmFWq3HagQLi7t3Tc8RKmBR3Zf22AWRxD2Cg66VsA",
  "key4": "5pVSJwXndssKY9t15obQDxrr5SYzpyP7sRQY7XRMcMnYK6PMrQ5ZhVsFNFxWoN3m3ddfHh3qMAvV5mkxNKmmqAku",
  "key5": "2kXrRdvRPkwiJ36LkJircFiDSbytvaZBu5NyaecabGiLeskkb2pzpgoYooyh9eoe1UNjsKHmzjgogGvNXVsA8jJU",
  "key6": "3YQVys17pGxhPCRqjY8Si7DGLJc8e2KpMuU4weqk12JUnkiRUrtL8LTETqbemeAUsL1eaY4tdxWx2iQXJr24Pqvp",
  "key7": "mH95hxPfiwm4444134JRob5aQq6SCKm8Qk8RByBxAKtNoK2qwbUaoqUrwhseiVVq6qFMu8dwoet818yVLBjDhFr",
  "key8": "9pm6Lrf9MXyCBhT2mwNzbM6bhDgW561wjovwq9G5P2uDRG7PMaNHYvdipEmuMgHnF7krEKrJDTJvmtchztqLuTq",
  "key9": "5McJpcb4usXVNag4ssnFqWQ9JZsLYNMehuXVg94Vgp4WbWDPNzXW32d9FgJt6D1YQs5xJMNyrFttPgnddoPn8411",
  "key10": "48NVPUtXP8Wrgr3CQNNvuxT9iS3pcy5Q9YPWprC8abqxstBJy2gqXdpMWUMxoGFpLw2b1RD2v3yo1Th3TBR9Tm8A",
  "key11": "4yzeW34n1GJhgkY4HohgdhQAM34k21iuRQoJANDE4b4RExwLcWbQ2DmT96fLZHKrE85KTKeKkWBUhgB1hr1bv4uu",
  "key12": "4o5ZTe7vwsQjm6wDZQXf6cMAfe4m8vAtBx9kuxwWk8ZrKvrtNPCPad6DjH2X375GSbxbuo8tR32EyYk4seAj6tnc",
  "key13": "3Ju65Jg7GgQFDNhQfqXXVhZcGh752JxTSkEBtcUCbATeEhE2Fthu268H3wNbrkwTwYv8JFcQBkw7x4iQewG2hGV9",
  "key14": "YGwd44rkJFKYXMBeRdCn3n6fPNySBgtsVKtcByGY33enswrEesKfVGESdzLhFK4W3ngzwfuCje1bRbr5nRiuQRL",
  "key15": "geCRWx9RS5o1M7FKFuwKKkhV28hDBmdWASHoAptkXfxRB1nLLXUe1ogJdyQjGyHztHu1DUzEJDBr91Lq6bPcqJx",
  "key16": "5R1qQcvu8fZWR2CKrZFmMNxvVtcgNNfMZMpUrx9UL9THEHLfc4Wod3qupoDVMKBUKXEJa1TuCK3b2ihuDNtwpJyV",
  "key17": "5RgPAjDcXQbXUMHBY8szgFy6XUQXoZnxHvBQSE6nKGkcbR9VwjRMzjc99siW76HCG1mAU6dZfwqqboWC8KS6q94X",
  "key18": "WhqezEjgmt9anAVc4xEc8b413dix5y2BXm7YFxLsfneDSCox3jJNZYKvsmk1bhc67Nteg4D35RGDhgPpx15J6hq",
  "key19": "387f6vHU48ZCrd6iZZeqy3kGRgTt8xFy9LHoZtw8CK9ig7cidkMKmygPyGaSbjFqarcX6DmXqrL7USbkGVoGipv5",
  "key20": "3po9RGecNCvH6xT5wmrrGxRMBqciHXuH7EKtuFervw4gKWXdoRFNXbWfY2NhfaiWEgxkEddEFxruU1Mb5XsT6AGD",
  "key21": "SMLjyQVRMj5AKrMm4M5NBMdyacpyoUk21SaqxBqnNiu9N9ERfv73kx6ZzfGHh2RqqYj5KP9cCGLa1G4Vaa1i1n5",
  "key22": "5vQUHM8spHFp7d9KkkRA8EYP5FV2bwbi3Abzq5uHZcx4QvcBr68J6yKRMasbT5k4NESJcUnUiyP7wqDo9YnDUnYz",
  "key23": "zVBk9514czVogTPhnTkpnTQusHfzttydJZ5xKXR7sNka8XejyNi99TnSdpCuEHPF3dqwxB2F9MgFAycWPBq7Hy1",
  "key24": "3HhsqBbeERgsdRAjoyf3rz55aqqcPU6jqi1tYup2C3KW4Y3M6kLFdYarYGBNbjavpLUMEVveeXzaSzgMgD7WprVS",
  "key25": "X3SCEfTCurSCnuCpeEX6bAETxjsnqfXK8DzDHqkWZLAb1vF3yYfbjuyKo57osUDhdw6aK7U5Jz1snZPWWCgKHYL",
  "key26": "2nHTQ5GDadjXrKDTWDTfnf19ykAqqQnV5ydr7YKbPrBrFKHBABNyfyNMrydePwrAA36P555jQemDVNitG4ocPVyj",
  "key27": "3JuzZPT92gkaRWfttGwSF1k6aZix6P2zpbKKK5tXcv9v42aTgfj15287NmviTZxPbw9bB7efeB9AJFFr68xUuECq",
  "key28": "49MiNfJxM6sYqwxf8kbVC1kQG1Vxk83JTqLUYd74w3DohWHZSG5AdHhxLAXWbfMQ5CTPFn45589WapNTkEHBwsRd",
  "key29": "3ffFT1pNdysPwTZfX9VAXaFXuGPEEgaKFAf7o3E24RctyJ7Fyu6aEqzsfhbbLeHsSWMzujmK8HeWgyuFNQmpMCoE",
  "key30": "48LjfGsnKJ22YAY7qG7HFVUWEKkUw2ZTPHFWeNaaRBMnzan1JV7dbmUqxm2bJR8QwE6561GF9RiudhtsdKkNx6x3",
  "key31": "5etqiG3MqBE9CnU5naVyP6GPAEiunmj2Qcs7Q5xHgyfDpofE9d8seRg6GD2jVWJSwL8ob2eKSgd43FhNG6PuDhSB",
  "key32": "5Aqx5XHhGG5xpbQp8NLyqgir6pbbrHhKdn2Jk5ECAp56p7pdteGK69Cvqx5QQz39tNWCK6xqc1dJNmoqndvFxpxd",
  "key33": "3Hf5spb1z9ZPWKgCbSQDoZjED5bJRsAT5BM6652VFj5nP5FYLVFcwC3fSN1w8ZhnNMvqKTYAcTj8sKS6Lu2tTkKQ",
  "key34": "4M13mxw5Hrt4xAGdtyy5uu16ce7FrUmMjb4uUDDFjLESNgh35mf1c8vmvN3WgMjgWEyFvrzXNqUCFFpjPe3UvX7p",
  "key35": "4xf9djWmB5XJSwzWEpyUczUYDPfzTsKGTWncxWKs8XHMCuJ7eE3SuM2rW4G1owSifQciSkyTx5m43cvbmYB8XYfQ",
  "key36": "5Y2AYCx81HhCPUjSTpQAdrN3uKzTktTxPu5Hci1dGGVozR12wZoqDfsEa3FFcPLdmEKUZ1vsHkCRq48U5N7A7ruV",
  "key37": "61nWSqzsdk3QethE8yRjrpwGJfC1cZxyov8TSmV8iSp2RyfBVgXwHEHiJGawZmBqFixJqkXWzpv8N65p713W6YN",
  "key38": "4GNnbAFgQuSTBGWHNz5ftH3pNs43dqhxyQwNtngwTBmS6PTyDBs4PSvcVyfzhHCGWxU1PxmM9Ymrgocgu3ET9cny",
  "key39": "64ZDYHpEquFJQPvEMchzufk1uUGYx9rbzvumy7gjrrCGhrowB8RPe84aV6qxqQbPj8kMwzZZg9Bnsq1NhufBJWPz",
  "key40": "2WRvTdUmjG8DKNejJkDLUNHjYHPea6XP9L8Ca9YEMqJWiMGrgr1wnXmgVAeQgHAiaHRH2VajXFwKdystHtm2Zt9y",
  "key41": "4Ak7BvnYhsoBFetYBp7PD2ro8p9N3g93es7Ph43HdXzAP3mWuswsnt4EyhdjCrNHVvpr3AqvMVa6te9AGK7kK2z9",
  "key42": "4U3EMkRssc2JuX7183iBT8APLfvCDwYqsicFNJYropUpwGS3vhpxVFNWZAEJ7ZGb8cYi2R5Q87kD3WUbvPaycYbb",
  "key43": "gV7g71xJc8fJKSLrdgToa4DKynfEsh3DthSzu2NVisoDMUUW9KyhHP8uyfoxB5GJYi5gEXhTSG5GAPyzM13g6jV",
  "key44": "p43MYQ23uNqBVoHtZQfdg6Jsc33F52ZcybEi4ekZLfjMmbjjMKSj6FC8qQc9mm7M29oH65ExfLXyPii4pu9FPzf",
  "key45": "4t3GTWi4z2sQsYR8yPYg6Dyetnh8PvqeuFiwdir3EpxAphnxzZcpQDAduEPjv5cPAsfon5mughupwzUrk7YMLQgv",
  "key46": "cJTbDn33QQNigXa4kcGzA8UztvqQseCxQdDUQXwNHgoobJt3Fo1RCyF61QzLP7dA2hCDQ9kmzgka3hoba6p7reF",
  "key47": "3qG2fMYyBhxBoWrPQXqgqT9hDN1oEnrYuXvX4BgFdtgCHKLykaYAXdAnnT2HAouHHG6y7Epvi1A7UsQcgWy3NPHh",
  "key48": "5fJ2fQkbzCGKmnd5RGvfdkQrSTyrUdH5TUkpvJfYNJsuAdiu79PupHJNKvk6A1bd3ajAqhk2dUvg3CvUTMrwSupP"
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
