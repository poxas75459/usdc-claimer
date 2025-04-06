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
    "2PqAN9Bs8sr6gTQ7XjXwaDLsmBhVLZFepSwwd2QmXSHZYv1gVANvfeWpjGLDrMVHxvgjbqxXdk7HkRYUEMcwgVyA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tGyMrfGmaEK5VF9JaPBZUxMdSuB3k3hN9KDA3KeD37jfvPkVNJk46zAYf5776eGSWTcLPFGBuz1HHxpqZ6SiazL",
  "key1": "28rZKyBbupQtqDg27pSXQj5GHSM4XxPCLbFMxr9XeZ6GaLeGzR94AG2BQmw8Rdrt9YQk6WVTyMneEutj4nYFzdM7",
  "key2": "3ZDt9RXLvhSZ91PtZKEZPT36SuX7jH9KZm8gdKD5BDmMGNZMHS973ehjs9RUHAYfowgLEAqXnYqfNTKqmzdRqtSk",
  "key3": "586nAxjZxoCW7S8DCDGMa5wR3LYgBd86FTFGbV25pNfnWF4nby6B6MWXSHhbov8DTgUTAFcM36DPB7xmmVZuWLuT",
  "key4": "4ViQXQTHxodFeVASz5hZNU7HQFoZnj2zamykT9P9tsPTaMP8STUNjAPejgRBiu9eahZnv9MG9hU3VFK7u67jHqva",
  "key5": "hh5qmEZAGcrtVdfDHMbEmHU8ap1LYwAFEWXdh5kuptHdYkWuXxgBPrTXRhphYBgSHqSFcX1hTUtBdUtTpgWhJ3C",
  "key6": "tH1mnUUuaNdzZyEVek8qKwet8V94VKboycXPCdeEARa9Ym9hjb7Yonm6GpW4PZLupt48aHxjKBYzXQzD3VNA86e",
  "key7": "mBBZWqaktiZG7g8sxfUkFKcMyFS9jt3SzcgC5ehVvvTKY5cwEShixmXda7sQmQcpfSMufPeAhgmgdDvCXCpsBV7",
  "key8": "643YmZgyLzTbQQhbSe5bzVZnD2LNkeoos1PxAvZHYxcCazeSuB9w5XY5n6j9y8LXJ9FKtLDG7GMoRsnktgncrqB",
  "key9": "3qnfqf1KoZW2HLpuU7vbsgcnFDsCrdoDuRfdMufKJ1ogYHPwJNFR4Y7PHm3Nzw12pB2Uody7kcNNz3BJZmwWqina",
  "key10": "5HfSSVUjHB4LgNSjQE1JwkDYFUheMioDy3Pq7Hk5tBWLzm1ZNNSg3zuHbpHAPkmCvKH3tVArrGeRvEqeuFJxnfBV",
  "key11": "p2yGJCzAbbmF6VzUcLaAQ2NdjHj8CcUjnGkmNLgJrdcZ9fa7R2tpAPVGcakW34akMVcqqUtL9wHMAt9EBTe4DYD",
  "key12": "4RX5QzdKKBPnCpnL7uWEmpSidhDgjGutJw83Cv99SzEv4i4Q6eYKwfueRjoLZQmYb2Zhd533s2e5SXK3mztB3aWp",
  "key13": "56o8BBrb8gW8TkEJmReYyxPQRLoZ7KLd3exYubjnZR3rgF7jxDNMPJnqK2NfAEZnkwVCVXwMgd1p7envZAHxMz8j",
  "key14": "cGjRfnDqjELG8VX3zk97kmF6rxWbRsYfejtLMNaDfzmujocF3L5yehDPYxQtk8wS6F28Msa4m8wAtVxznvHYmGG",
  "key15": "3vbzovB59ZWUTs498Ux2d2PFpBVHzixmpN4ngp63TyCNXUcfmLqiHwKoVMGetvLFvybQhmhtxcBkkg5a83Y5vvYz",
  "key16": "4EdsUioZZF9sUZg3nVtWrqd6VS9GXswVU9iVtXau3QFfyNupDzKjjRiFVXiLhpCBuyQiStCSWc1aQAU4Wu9k3Dgg",
  "key17": "3Sf3u97XbpA8bMZcNCXpZHtZVwQrWveMPjPvxjToXe1b8fWVLwmekM1heVpNgmBdVvodCBR1VtDTcdk6TZ21BfPL",
  "key18": "2p67sFe6jVhEukqemPpemQkh1PWMe3UgEvRjr3fTmcJthk549PVBXwftUKEJUHuDyTvN4icUwTzeBLr2vyiD1vsp",
  "key19": "3DxvnJgEFErf5Li1iNNEPvcPidqBSL1Ezuv5mwserDiXjnZewtHkuGhatAQdqwb8Zo7tuWrrchjUGiWKuZeYbm2S",
  "key20": "4P7YTSeXpYAKKzEG4hqZeaKCgJLptfK8UDgvmzb1nqxKhnKxt1RrUjLDLQnQ338JKCkL9PM8RAHFxYdpMffSg3HG",
  "key21": "4YtyX6K8HJDzQvxGtaEBQWkRsfpktaw62xqWAb2LKmWvKd8xFrtJP5cmvVgU7xmpM9nfrsNW7dNoVFZEQNqo7VrX",
  "key22": "2VyaVV7dpvW2RuDvhfxE8zJL7iyCtHhcGd8RkKi9xKD7t1HUYHgCmFbiFoEDk4VzUiiWM4ckaXhSc94fXR1SdTEs",
  "key23": "MdyKUXrLELoVZwMxCrh6qN8JwusL7pFn9r5VvCKA2vDccySHobEKr5SMRstGKcNRnRqKTG8hcJBNzM1wrGm9kCw",
  "key24": "42aMU6Em4RwbUVYmQr3TFDCRVMFd55m4EwQFwCAi25XKEk6UFR3urehySRoNxKEQkTtnLDYGowjN2URxpi9Kj1Jw",
  "key25": "2yPVmzXWFeLCkSztpv3L4bEFJRkkQudvFyxQfsNLdnSV37WvNMEBa4o1x2C7QXcbUCAUGyuU9KoPYeqcT94yjEZa",
  "key26": "5EMQBn42yTyzywLpVztA21jHZe5nSKeUmapCYb1eixeT6CPD7XQo5Z89Jm2LDS9NdpdAHvwsuNccgsCPhSHA98yo",
  "key27": "3Jvs4Mahr43A9cbizVqih4oFw3668LyPgrWGA9dSfkd1J5pYtt1BhiAAnd8QnTc19iKraPfLesGWMwy4HuB5jQJj",
  "key28": "BqC8egoVZASDfDHiGFfzQVQ1VzwZE88VHBU4XudDyYNrGaWCzXwqPAPxkQgqfppK8kXwVmjB3Eieo7aTK7FRtZW",
  "key29": "2BBED8if8DiCcAZSATMxjg1o196JmaN3sEwcg5XBphKNWUcqwtiL7sUy6U5oJbgHgCoqj4y4V4A8zzQMPwa7Zbhw",
  "key30": "3WQovmyJPnNYW4K71pL7KonWjMvHVGWGPDsexkCV11A5iKFbnEEJjuRF2YUC4ksMwPtZGMGjuW2bxa4fWzEb9sJV",
  "key31": "222UtzpNSqWzHwmPzESsM9QWS8JwnREgmvq9RwnESmouzhPcBpHNJ7KV8N5iberBAscau5wNrq7oPKaitUiGN3kk",
  "key32": "535RJca91RVHp93a9KVhMEUV5Jv92KDFCCTgEZEkqPKfQh2PR71LhkaS8aYt6jx4LWb3LGj3krPcVpQfBfmEP4LK",
  "key33": "4ZeYPG9nm3HNr4nZxTmMkfYYzYRoGtYMDnCt32QUfA43oS7TiceBgyJgPsk9qG62gdM7j7ao9oKHcSgi5ycWs5gQ",
  "key34": "2gxR4T9yitXyGLxgYLasqdEe9EH6aDrKKDc5A8MPG9EQYTY1agLGt5P5Vok2vzXVCL9goToW4MUQxAWr6HgWgD6p",
  "key35": "4jvU7s5GBjKMWXoEUs7eBoSeh7cpFQBQMr7qrqVzmmLcFRK78kntx5sfEbKvg9x1DwkEk97GkfcZYV4iruKwCYeE",
  "key36": "5N5Cv5NvZquBPzaJHE7WgnErFs3e1zmy3zAVHFS8faMfz7sk4jtfY9CYhi6KdS7B3RQYW1mbmtfrVmd1QrCJgmcR",
  "key37": "3gKP4SR1U39BBKY43nTqnT5RSWNbSP63QxvPX6Pm2LEZViWmXvNTFdpCMyzeBAZmjqrWtPGtxMfdLjefYJUqLyNF",
  "key38": "5gDTaJkLTQ8KAwPCT19TtuH5U92Qbzc9eGBGwYYyX8GQ2ngTVmhZxQhjSgY8xfkhPv7N7TpYb83g5WHAzpFxAjai",
  "key39": "3eWZuJnfnzxATn9sQnYrCkKHCMAFw2LVaqNCr3a74e8Fj98Gwk5GYM4WNfCs6psziJ44s55feM89KQe2Rw8t2tDe",
  "key40": "43NsgWmvGrCY25QfVg648tyG2F2RjiZ3ZCiF9fow9uXr8H7rX1vCjWReQWMz4ZkqvLwJFqbASy8JfAk2gPfshn6J",
  "key41": "3PmA5URnCqE5VZsJbDy3NkocVaZBuZgW9WRDRi7FZcjtu4wPByWc8kf9NJNkjQMNq5eUKiBLsZue1keZJtJGLSbh",
  "key42": "3B2EvaKt6XPfC6YWQRCS6aGXF4gmkjUirRxo8uWXWGgg2VwR167kEJDxEP2QdyYNfjn6Yz4pxYA4R9mYGPR9N3BE",
  "key43": "5SnPfQEq4eo4zsX3vJEdHcYXDzq8V9Z6L8GnjmjokuyMw39z75ZFcMncJLh4VqkqeJKtbqwBVSJqweuoiR2UsHdH",
  "key44": "439WecqKqztfCnx3E4PGiSPy8V6rduv673hFDFtwBaetZR3veHkMuBVZuev4SGaFVV27X45qec6cbRi1Z3jECrTY",
  "key45": "35JMnXAhbczW3YcxKkTZELQLtvPExN88rArZ2JojTM9ibxHZLVr8KzVfGeNu5FqKZNRLzEz4ysxawm37S8bHq1ZV",
  "key46": "2gokVR2buX1QXEScSX7wKveCpndM4mvxea2AucdPGBAuXLYtWL79ALdtoSUkRoLvKQs6bSQYUDo1gQ8Fb8QWQJ54",
  "key47": "wWHenDd4hz6qi8YK65xqNjB684ewFhenMLDT5WLMDzQGPbcZmTVXnWUzi1SfLr6MSFrN3rzgjXCiSuW6tNBpezC"
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
