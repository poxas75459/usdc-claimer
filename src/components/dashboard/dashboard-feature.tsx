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
    "47bv4ty4KCdY76cWbrzeoncJc8nnaJpvepf32rNkXFyQMQuUmdifMz9W7xvVfgw2tyXKRPxkkhRu28bgtxjXQRmm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YbJEMyz9pEaRyUL3rYitt4ySRF4w8duV8FLUC3XGEUwFFox9nM319ExQ1XW6m5hQkA5JbXMscR1zUsqovzoJKXH",
  "key1": "4MZbH3LE3qGq9tsJUAsc96WH9Tp5uWWK2pRYHNTe952yaZMe1TczybtD1VgqVCicyf1bMN6PL97k7iXy7CHwCrjb",
  "key2": "5PwcgwAJcpWGkPQwaSFun6waKkuVVAFEySU5WmAZgHiA7Qxejv9FUp77RiAh9YYbgttAEZpsLo9qkLiT6tRQqwRr",
  "key3": "4kyJwuA2aoJf9uLatHyMxomfqG8DrSeJ7bunxnG94GAWbHs8QKmrfHq17XhWF2XuxAK4Uoi2oN4uru2zHrQcQrTm",
  "key4": "5SkHj2ouZVqkLTzDqgotKTQY8Xsm6r5SG6UEo8BiktC9gFbZasEwJTQiDc1WEEiFqGUuwZxrpfUrEXfDXWMbx4Rs",
  "key5": "SxpDuxFNrMWKCpcaK4waSPACw8rgvEkhYiTWXoUKCSVgdoYvNMgonZKTRGSS9wHmhJYw7Qcrsqz9QhTn1fmRA4K",
  "key6": "hJPCxvqLivtiEFZEHyKugCGdqsRUob6sWQeBiHBctgc1m6Dc9pmJMPyWWkGCT6wUtwJaYWgpQZUPJPcgWuxRrLH",
  "key7": "2YvqTYbTKuPbDKn4rFAUFqsNLw53UU7sfragKHyhPWGTJktYGcdbVc1ZX6Fxod36YfRG7LVSd4xc2j6FjBiEwGyJ",
  "key8": "61rRDy9PHrVhj9cmxmPXhjYWup6GCvtM7jhDBWStws8fePT6btzjvmgriarq3qozrBzEBKRx14nnUNGAX9GJ3ZiK",
  "key9": "5Tiqb8UY5CaN6XehVhHK6z4a2b6pYnVWvv99KpYRRWB89noWePw8j6cAqMf4AUfcs3xSCRBHQ7WVc3h8vSgz5TjK",
  "key10": "UzcZUNV6HFcUA1yUaxMbqR2nUeiZER63Y8KYUQKRmLyky4T4qxdersz9Dddjp9aQMfhRynp7t6ubBCthFNPFtwS",
  "key11": "UHWHsE7iKpAYNwHMHmyY46rid3qKRkSUSppJchxie492tBzoc1qMSjFGLQgkwnXfJFA6W8yZC8AHVjuv3XyFSQQ",
  "key12": "3HLqz1Vvv6G6Amku8A9n8voXHnDk9rv7mzENuEK3yARMVf6kYm9vXYM3qXP7hcF1GrbTi5gQhm7VZAXp1HKbY8Kq",
  "key13": "66r6MaQevApYEoUL4zqroyxFNxbnQZys54cxgz1UEVgWtkzkSiUpMmGYfuS8asfcHmXQaMv5WWPut33ek32PPskn",
  "key14": "4yYVWnb4PHyy161FQZvd8PSaRJxmyijCdgysHQEtVEuCeWVkECbia8DbL9fdi8VLnhyvbNrfAbatUu8Dwy8y3dqR",
  "key15": "4BTh16MjkSJs2mSKejceL53ivSCA5Mjsava1GnLAtTYr57Ld2bZkdH1ENSwkj4YsuJA1jWLyzEbL4cagSEEXeriN",
  "key16": "vQnQ6bXSF5gn3EAvcouXLyHudJ2RworH7UXk87fcqaNZ2RGH38nicarRkDiN6wkwGQafBSzMsxKVJeAVkYTSpwZ",
  "key17": "3xAqJgmiNcdsChyMZNWiF4uJorSqh3erd6qzw9z5DuTngUtVRV9PF1M7JVzFVqoSynB3vEP7LwQS77eZJevhhsx1",
  "key18": "4WwXQypFAtYd67TGy292YfuetLe84we9SzSU6W9VL2oHRHG9UL4VboGR9ANBx3zVm4VRjX3SoWJUDfqygEvDXqy8",
  "key19": "5TPPfDYriJm74P6bwM2EF2XP29Dkpv8PgTu5R9vuHhgUkAjkwyFDR5WQPJRoXKrvmo28RaktnWDi2QmpDhwkM3Xr",
  "key20": "2HsTetJrF4waAygq3Nnh4DkKsZUi8jgdYW5PgGCaZYM2KP2itxWCcxp9uwVZEy82Be7bfm6mn6ZgVMxDigTY5v1",
  "key21": "5MjFTDZEB2zkzzfYwh39gacZZdSRWU7r7mkbjs2bxfZem4eu91ZeQrZGVPkt57tuH66EUK2n3nETEF6TSLm12UnL",
  "key22": "2yXtYSsgDFfYCzN2qVJYafF2vrjZWAc2fZN8vtPSQTXyrsN3Kx99Akv4guEJKu3fiMBskXqVPJ13osvD2bQepkQf",
  "key23": "3BNAjmdHCtKMkCFzZbrbThGbrb39qYXm5RDdsV8Tw3jhtnxBWmG5cGccZEnFTdoZfzqo8XPzRGhUB45NUzdBxJjx",
  "key24": "4FCFowv3jpSk8JymLvz7PsYxwg5pvWgcfmvobEmyiKZcct4fKqghMiTYvYV5HfYqURnHNEKfWcyeZVf3F5WSDTRw",
  "key25": "2kHUb5LmriLeuhp9Lwd9EqowuG5Nw2Cp1TgN7NHfxyoUmMfepqLLgcip8CfPTgUuJ6QCRAQufzHMZRymQ7VknNBi",
  "key26": "5xMn6W1JJa9fDArt73h9mnszqrH5VPZufo1tyZhPFvquAJjgfsTza354KNG84YiTh2MtE1gse9ZNrc1GfqKZ3v6B",
  "key27": "9AERnXGrwCpUmNio3aAAzX1zoFJhkxxKsz4oGo8qN7JVUF1S5PGyCusnXwHjLiWAMHXmmYqEMKJjXywdrDcXwTX",
  "key28": "5QFCXobzD43dj78qAvu9zSRUASbt5Wj1kB7PvASMGeZruYUJ44h2tpTwUjqxp4qLQVfyt92kiZX43XAi32mgHiRs",
  "key29": "5Xekhf8wBgGp7WzESmbhue41rTnDVnTZkryiuawQjq5naXgkxLdL7QcBTnzipVkJxwyQYqWB6MqFPZWH996hQZLm",
  "key30": "43AMPyZZFDetXM4VGqcjuSyu3io44pkvb4MMdzXPSqxc1o3av7b4KMoEBX3hGRAyBU8LQGaUpG2XUJrHk45mtpXq",
  "key31": "3vyB7ch55wwU1SW9c3rZ4wCsCGrSYdLowUrq4ZreS7SHmNrTj6XVT6xtDZwdD9DNAn6ZWKNEc3SX1or8zeS82pcs",
  "key32": "4GXbxxWT27iuuEtnLEBfdLntUeiPNTaizt7DuCKbEs5uTEyJ1ALnH2LKX4Kqnqi6Rtv1KMYj85NtjSRi8ruBiAtv",
  "key33": "5ezRX2qkuRK76NH5JgaWXuKbFNZXHmSQi5E5MomoACZvgjX17zEANwojaUFtBc5GieQFxizFwWg6izYQMq4VzY5b",
  "key34": "3oxUH5atHKRknNoftbDWK6ChNt3VjXiVMzMVq7BcrLV8C1uBK384QFKJKjWES36DfjKGe9U82NcucyFKMWASNU2c",
  "key35": "3SL3nHKRXWtFxCRXrgyhN2xs6jB2H96YU8z3vQewBzMBxgrqaerLoUMsCGEhMFgD67Eq7wC5BHULkrrwRz4jdVc8",
  "key36": "59sQtNraB6pJ5KcWEFp5ymX9HmH6WmMdZtgL5sBPZBsx73CHTJgZPVLNbkxVdUFbmdhrG9Zw4Rdvoso9157eRXYP",
  "key37": "5Sn2LGEz6Q5z6JnktXqZ1korkP9oqiwqPNMMy74oPi77ZjdYXM1zbTzEpBuzkT7FH4nnAB5m6dfPWrgNPVhU8PMc",
  "key38": "fWku3KTaVCa3z12dTzLDpNpFA3VytqKUxYsWZqBUxQ4Haagm4sdJGqeLYQdjCkTxaAULeYzwU3JLEDyHv4r5fQq",
  "key39": "33iA6r7rTKhELMErpHQ7f7mJUj2pbPXoWz5SX5G7eFXVQJufxh91yY2F3yhZnTFBbEGptPdp2G9yeyVQddkBDCUk",
  "key40": "2YTw8kexuUYXeca8RzGovSZU3v9WUnYKainxntj2YNxm8J1f7dWmeoBuDq69K3Aa4WFKHNcBFQfhgmPrEjuS6aYi",
  "key41": "5CHdckDC6ZgveDTuhMpBy3fPj87VVWNXAHSnL27pmfwJ6eHTDJFt2Rut8ZGp59So9MNzjsHy63v3NeWqeqfpuHxq",
  "key42": "2jVBgmSPMCJFJx1bTC3gby4RR3QNcuzPWqpYtqKuTDpHM7gaGaWwqKMym8AM1PHUhTy4qFenahbBTuMWYYFjLU3q",
  "key43": "qBx2dAB8ShvewQtEX4HdLoA5Ws79SR26zY37py3DPieM5cH2jyH9D7Hso6a9kaB2LqUWa7dXEq47f5hwHktsLn4"
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
