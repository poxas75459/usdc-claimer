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
    "4QhTatRnCBLuQKPZtdzxemUHd5VNuTiudzaVRj14x3uMhhXFopgkZz7bRBgyybxfkD3cSTMieRcTiy7F6iX6hUoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ccX3YnSpNMDZkWJe3a2agwapZAtydgcj5y1XeJC67v2NrKezhVCfu9nDDgJzsxEa8DUPMjQX6q1sogTQycBQ5kN",
  "key1": "RBu536PVXvqdkL4mzqJvPrkmH1CoMBCSxR3bQf33wD7Wm8inGH2A7ySHk91dJqsG1Pc1XcSmov33EZEp5rZY1dS",
  "key2": "62sjKDTBK65L3jxw8VKqeJpWWoJjoLY1uCBjKgk9wvAXmLdy6xHbFAwcqw2kfYAG324xFdRwQroVR4164Lu9zNT1",
  "key3": "KhYghcg6uzUZmWi6Zg8vdmc9KNpbJHneHNekmhMtEvftXjCn54WT23Yc1y1bwr89G8rNdzeuE7xzQAYvX2FqMB5",
  "key4": "2NULKq6UTXUWVuq8YPMbF621iZxCzz1cMTTSU8L1ziqbDaRPuresADf9EB71rHqqjaspzVziGQLb4REYnPziHbJA",
  "key5": "4BBFt7b8nxZdEsQCyyVH28JT3sJsxZ7LD1PNFMVpbHoiQuH4Hx74prEDyRo8AXuo3xcwzTe6N3qLMJoaH2qQyLTQ",
  "key6": "3L673rLXh1a86TgMF1BqxrTw9CKESh4DJp7HUizKZcWcb2DdLuSSLH2qGcaZMEtziJ1nyMvwK44UTeSx7g1zqPyw",
  "key7": "3ivfMfR6oazUTpRmy7wMJ59MGZnphVXgt7kVQLyBVFVyfMQzzgz1KeLvpceCbcEoroAbVe6iL99prdpbmBxbcrLR",
  "key8": "4PqWgVWNxPFR9ZVCbKaVpyFKJLEQ9FRCT3P2ZnR9Z78ZBBTUNzv4rHpM6oZ81nKwJKNZY7pq1DwXAd87y1LE5eqX",
  "key9": "5ZEWvsDHDRwmAkw7QH9m8aHihYG1svBz7xPn2syyMmR99qG9MUqkUW2RjMKgoEGxmix2sLdTHFXPVMroLZqYpPXR",
  "key10": "3RfBF19jVvvaHq44A1usDnvkW8i69EnwtaCGStgtucobiE5zpyi2nJLsPJ6YqHHjgDNafapdeD7irh6hEzWh5XD2",
  "key11": "5asxv4949cucMBTWKsB6W4tw5XMPD1pwa6tvvXuVYTX5X1p1cZtv4a3WwDAGx7rcVSFRzDXwzshZ9CQCe9BfCrH",
  "key12": "3xQ3rHWgUku143ndxEiVPxeaw5skmwY9ySAZzGHdZH9Vxzn1xMLYWqrxLqx3qbM3x3RhQyhr6cZw7MYj4FrRwDMj",
  "key13": "2tRDp27nphUcHy5kKTZWUcSSAgEE1CMeeK9DEH6BTTqfbv8z9bhuNqCfRegfRRc5NtLEiQAL2PrkJvoCQ2bZFXyJ",
  "key14": "24TAoEJYE5j5Pmgz711amWErWroyyBVCwmJcpMahJFeYJXjbiCGrXUnDA2JLqDhr79ny36H4VSgomUygZBuiTy4Z",
  "key15": "5jxvwFrGXQiYk4TyS1ATdKokTEiQRBKJuWDeuQUiV9Pnrb1WWgbj5JmeDYxPuBXAERWsNS4J888u4prYcapu8z5E",
  "key16": "KW9LsEkjvxDB32kNrSyzkJMECny3xj4KTcsrJHWMUNtq9VjAZRvTNjsXeKzPrJcYhss3uHgethK3brn6y9qdrgW",
  "key17": "4WRo4aaTYiHKQFKcoXWQ9wruUPYFTDh3Czj9FRMqueCLXbucGAPhXRNEYT5znTM3o1bwMGomnsEyxWay3z4C4NHJ",
  "key18": "3PZsAGyMKtqQsZ1qoHf27RcRYTtjJ8AJH9zJVPBmKErtN9jRxfnUYy97p8nw6cAv52qwSGE28iP3mJ4MJnrPTQV1",
  "key19": "3KjdKSChCYHKTYekDhihVuY4ovd9rEQ6fjzPiEsdWXFGr8bgKnrzCKSRkfev96qrP2dgNzuc6LVgyva8hz7dvmci",
  "key20": "5PfsNasvkoBcYvHGbEMeN99KjvWXHWYuoDSYHkQV5gka9dKDT2r1FnjBF1PiWvGRHq7wh6zeWSumKQsGx4FXAzyD",
  "key21": "5ENvWYszo5qCvAE1QXxWiCLHUzjUYeVB7H4Wnd2zDPQJbNi3JDv1ovHzV7jWL3ztoUdmw3jZMKx7oaKxrXQ8oNT8",
  "key22": "sJg5oqqYbBRsCxYBeXq5A8wF4zkLygWDF2PfKAmZ4MYBUDspr5Em6gFU1Q15NuQYQiH71qqABgJC2nXca7q3Jc3",
  "key23": "3cD5ikBsUnBzAC8p63KHhhFiwAXL2mJXdp5riuGc8RVniXKP25jn2LGCuUJs6D6PsApbHyzmb4X1kr68jFrF1Mi8",
  "key24": "3CFoLQABVspPhw2hWesoRyTUpnKPABJ9CLmyb4sYTbEq7Vcvz2kahpuEcN3MmWDeLBSachX43ZmuqdLXCf2VrXHJ",
  "key25": "55wEZS9xsiW1YQcW52hH7UQHxN5WyYufxabcJVRhkcLYfEFpdQuLsyGK4dc4XkhFTwa8M3yTpnbk3eR3LXNbSWdH",
  "key26": "3JRAYHTSLL9TczadzJFN6mPCQpiKVbeqrD4YRoEPaHrGdNM4uR9VG244wjvingZR6N6Tvnvk6oR6KxpsJY1Bj8uV",
  "key27": "2sqvDQZBuQj3wEWp9mVVoNHiaDAXWtbjVTKDNNM77awd9k5oZ7rQquQ9JZLyogDCJxPWGxiK1koEPiktgG6Gdaif",
  "key28": "UWaWkKmkNSjhLUe2PBdpWe8LNhKAZ65LJk9FJ8uF8g9fi1J5e18axiAENVu1P6QFbqogKTfesPEhyCcBztZQ3YE",
  "key29": "2th2Tu5NDMYu7ZRjKaEM6WTEWfyJVGohhzN6ywPnHG3rEchfjKYRRN7pNDz31qF1sPTbZKubDLSUuyHnh6rhQHqm",
  "key30": "4zao1J7ZHZDuJweVmDYS4Cg8nyBgHhrtWxcMQphp8ZfDpfkejy8ZatD6gKN1X2sxz9yBxNHpsCZz3YSm99HweiEW",
  "key31": "3kgXPGw2PXz69LMwtiqBcntggRm5oWW48F8FHXjcJ8b84FbCQvTW4nYZubSFi8S8UzhsDY2SmSx6V1aeQ2YMkYXA",
  "key32": "2ogdyC1bu52jBVAZCui47UDqbDidcgT11UcZ3EtSUTRaUqnQoJFEoze4kVRPyU5UsKwVTh5YmMxkdoPXvMD6oTF3",
  "key33": "2d63ovf9VtUnNw98iJYkMqBfFxokY5uZn15RAQtWQnjYsTkZYbGNhgThDXGjGzzVvyDRmBDH7xA2NLxkcM76JjNJ",
  "key34": "VCEbvXHD7DH2w8FmpDtKmkD7F52VKwPqDKJR93JiBYbL1jkqZm8559Cg6wGPRuvscftbYyYnzmiQKPVkvAdSY4K",
  "key35": "3fy4ABd3kw6En1xHpPnknUJkFtZ4vUNAjrL7zLJPU8YLcoFtKnMYKY8RgBmFky2yLVwqk2DrGkQ5EWYaNbctJW8B",
  "key36": "2oBEPQknqCKifyG8cecEbBhPwkts82eVo4s8kLgqS5hTTqbEduQxtbLEL4AQSnnRr992ZhbKUdZEVDyGm72jgcH2",
  "key37": "2U9SKmZbfrzSUjpYTvyDqBAMkGuAeFkq4ZWZFFhuM8pzEEZxR1ekVbnq6w8N6o8T8jtsCk4Pc2hoT4p2dNWmHfkk",
  "key38": "2nDsPDBtCtuiQRdB1aQYcTkcbngbSKQFD5YtCxzNbE3yZGAgMLbDB94CMrjEhBUSVozLhRfTJkkg46BGmpRiY6Mm",
  "key39": "2SRmvBFFYdeL1AoRFmW2oTsgkQcSTpewAUWxcsvgdftuBpGLiETBqYh7KpUhcsyEBLcTkkST6EgQk9iX3nQ9dDsw",
  "key40": "QPS6BSfitHRaMgiwt4kxq9q3hm3J5Tz3cqAsoFSksC4NPod8ccMyFcxeZvJm784ZAkSdUo8HASZDuPZEpYcwv1j",
  "key41": "2obhUj7RPLAE52UXDMLTRSiJYJCRdQkheabwoJgXVJbVfk7nwoV9xAp7TVWnzowbCzC3DHw1GwZ8ZmQVtV21XUZD",
  "key42": "475qVhKQi3q2E7fxicaXGz4GKoQttVoSwH5AaBVCn7WY2KpJ7xZKfwqKVd9vT9m5A7tFwPSawtGnnFSwKKUUd7KV",
  "key43": "3gB7wEaMiXcaAwypN8AjJced8DbtdJmhz7T5VbeQf4oStr1akkVW8AKcv59FuXGgZJBY4HyCQccvWwN94j3dauD3",
  "key44": "bCjeNpLxpXaQedM1XvQ6Bb1eMWUAR1jZPigBBZQjVcRoS8RrDDs3conChSGsCugD1ehCGrEZcEq1zqJNJ12zW53",
  "key45": "3oXi7fm3rL8yKerK6CY1BgQkAcqj9S7kTHcPTETZw31MfX7PNVQtcN2fibahB2VZtGJmDzEdF6yAp4CbQBm5qUA8",
  "key46": "2obnWi2hwnAq5MqDb3PVAhBQ4JsfbVfbpQXN8pyHtSMZ46PW1GiQ1uVVgopcFZMU6bwHwVEp6qkCSymmcVVSAkay",
  "key47": "3MCFLpyCzJSnaAaemGgwkSTiZZo3igLJpcZZnMAD4z5QJoVA6yb8binnyJASGFKAiWVg6KWnPZ9tigYu5iQFcDAG",
  "key48": "5iJVwpENHwnH9m7DSQqEN9cMMsSkZ6tA9jxAWASszCRNpSGdcakZ3XwTwTc6msccE6e3QLzZfAbw98mZsbYzAE7e"
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
