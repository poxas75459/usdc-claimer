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
    "3Yr894ZqBTE3aUC124LUuwy8SyPH77p2XRyxfTemL3tb4oWmpX8aEkRepu7jbaYv8kZoksdW2Ry6qTmaasMqZAzC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FbzZNrSeFuXoDaagQ8E2r8GLkswYU3hCkvhBWzGo9wPyhC69wEDX2KqGRmg9nrg9RYtioUEojVfAXmqNV7idq6P",
  "key1": "bw3tPnEjAmL6jvz8k3s4SV4vQ7qgkdKyh1CZfwFFP75WDPyNrenjNzYu68qhFBdy2F72enbznXDJk4z5983iNJU",
  "key2": "M5JWtJuUxHojAKUkJLmTfiyhdgfXDe6XFNz792Z2FBfHnhMrQavcxyiVJ9ztiTRQpoBWLxWHUyGnJMNa3ZJXo9n",
  "key3": "46MbmY9kibpJMmCf3Gu5uekGq3CS6dqbAC5hUjHEao2JUzw6iRNSKzEzLRakEBE9UmN4g7rqitguRjcsHigkjpwA",
  "key4": "35zyEf89sT7iEUk9AEsEAJUobfmoKJW2cezkD9TLiFKub6bQEnHYK3tyvNpQULKgEvw5XN9Qj5GRqSKTMW4iZHki",
  "key5": "4ULrTqzWZy5CqEnVHJUU5bhtD7a3msXowx5gBhTagd2HKEYca6y57haDoTReSji5xjP7E9PqKFKV6nE7SjetiDFG",
  "key6": "2thenHuxHZ9RRxGPJYMVPMPusXXe6mknGGC66JFzc21M916K2txfJ8SHyT5QH6cqzvZ2oVoEasXkGKDw2gudoXRM",
  "key7": "4HKSN9gu73osYJvQgKgZCSS6NuoZApL3xWhuFgjYGxPmxCiMCNLT2KG88ypcCpjS6UgXfYdCcrRL6q2DyQfdjRTi",
  "key8": "uwkRHZWnvxVux2rde4EUzEG9PyVURJjHK9M1WHc8jbAvWP22781duhf9oQsyxs7eSWjvdfv6FECPcabSuvcoJGN",
  "key9": "5QwnW2khYJz2G8a4vfJa9rp8iim2CJg5iKsFtbaG1uD54vWcQMd61kETay7LRuWSHEkzB44GfTakSNjXY2QPdgY4",
  "key10": "5J7uuq63tpSQLBxf96xZB51kKdcM7siKj78RhHRuHotbuqMotoxxLvCSWc3P4AMUXfW9REHLZeH7wBjxWHQFMZ2u",
  "key11": "3cbfY2uRDKbXWtSVhRtkxaqTDXMPhDgZsNavSBRmCSatvwEvRUYgw5sYKNNU2xjidfG5LYW2gCe5oJ87X97TKTae",
  "key12": "2rnui3tLgVfyR7rpgp9AeAFshj1fFKti16tU56SgHcxB25eoMegkGmPa76iG5z6cBBE5wLsS6q7WmTgTMnYMBNCU",
  "key13": "5A8c7t1qGg7qTsnwMdERjJkd6aYKKJKx7S6RuA5DLaQwmvLPKFeuLcWrhCPLgCab7JVnXzS4iUbiPQ7chCfhZmhk",
  "key14": "hdgY9nNkWgaw3P19DvuEa7tbQBJ5P4B2BEyHnDUoqrx2cnsfEodfGm3V7HVjJoXdtBtHfoJ4HBva267ysAQ8D9Y",
  "key15": "2Nq2d3WepuHyjRuJPGqgQcNMZDmfW4JxEzQLqBaju1yfJkgH53CMQkm3RgqDh5kn4dmda9CXNEpC1HFYL3ZoByjr",
  "key16": "444dChNY1aNfPTpZMjJQXaM6yquqbQp5RTbt6qzHCWeMfZ6wXAdnmnze8Ybhvyzy6Psv663xkTSUarATgQP7izUp",
  "key17": "3yFfjyU9TBX4hwbQAGKEFfcy1knxXNsmBzj3aTYYnHMaNV3X39TMg9LgvXx4bHNyeDVTcx3uW4YW2VwhJmfhnTBr",
  "key18": "32UGdGS7B3bEkmDRTfbM4XGvrgFNgC2js9Bp4umyWYEJ5m1xXeiZJxpd5ocxgMNhTx6CGbo9fBG6WgQ6TwaUuVcP",
  "key19": "3bfSn1BTYmqkeLXytLCSU96qRuLKcLiFXqEtZJ8wBEF6zGA4H5cALgKC2ztfnM76vmvZ8Wmabe6W8GC66837uTjd",
  "key20": "3fRjgzgnVDJw68y6VzKqqg9SUv4YrrwRFhVCPVjNYUF3Q8F9LEmwtJhcQkJ8bE781bBbTzwKjL52mVi869rX4sza",
  "key21": "2vUt3MfowdsV1j6J2tnf6GJyXRpELPSGTY9hVxTfYPex25JfinQPEHpo2kG3GhKcPuUHmDFsk4mKYioH9Pb5bozx",
  "key22": "5xswUeaU1bJbMvzZRmYscKNYU6tSwHXEM8YyVgBLoULreuesJSvadoK4TYYYvYWc3VeASagKEVi1EofJZeUAknjx",
  "key23": "fyPgtgB56DWVCoZ7tUDQiuDwPsrwsSd3iVKR9Zta44wx1PW4g9BNjDUKHuoNd2V1nWj5vy5zHxsTu8tmDH1cqwW",
  "key24": "HcdzGGENiUWAkoWeDZgE1NniyeKfVzi2onUse1ucjQhrEUp3EAh4kRoFUaBSrqRhYB5oB6WDFQE8S8DWHw6yLuK",
  "key25": "25j8FZywL77GbGxpvtsCr6E923rpHiatjqpoaBivxhRdB9KPPZ1o8eRbJztHsffcf2acMUKPRRxJFAP3XCS2MGeR",
  "key26": "3G7xGZwhJow52zfiVpS3mP9JKrRfrqNiVp6swuqQ77Y3q8mbbcNy6oJahYuSveS5SuVMqhddvoNPHBkgpXQMrgEM",
  "key27": "2a2KBTK27Yr2c3bRnv4kPCEDDN5s6qo3bLuxjcfyzBT8S7BYqz3JhznPGqZAtyu6eVJ2qmZeDKzuwuH1JvroWS51",
  "key28": "64H57SFPbZeJAi8PyJPf5j28kpFA3KY8Xhk8QTojLcpPE4ccz5RLYDSb7H4rZH7obvFfYaGAp1yHru1cWmAFd2oz",
  "key29": "4yBYFEF13FLEQKmbEU3Ai3VztyhvgxSXLb8r4HSYwiqktEti6UP5JHwZxs1fpapnCnsQbG8YNgvRcJZT5atjAhW1",
  "key30": "26zGqxN46Nx2Hcge1zW4hdjKXR2STxGSwnYQrz162M51kWk5PCcX9ZeHeXkRUZQ4GjkPaiQaZiRtZGcEeYjWc2Vv",
  "key31": "aFSfVv6wosnWMfJbGWfxxnjJTTcVEGJKMZi3oDMjUEuAk8uKHEpu41SufpnQzg3qj7FmiK3nfbZVc1SGtm8bXtf",
  "key32": "2Nk2wwLisy4ZrHjYt3K44XRKhiyKb59CjoT9WNMBwNiuUy2jifFNkfYeEVmToPnS2xNWRuhqqnQ4CZAMUVRhxsu7",
  "key33": "wvd9hsBr9yEvYfskCAMR4mA8gQtJHCtUr3t6utc4RrDhGN1p6dMnfH97Xaca5SkXJvy3Z8tRM9ZJQ4wkgTJ8e79",
  "key34": "8XfMc5Y1ceJcZUtmkkdLFFwAkR6nL3eocZ4zCPBFVuNW8LwCKJdAnAWLVfZhVR4AaRp91RWiqrJNSALyNb7ycLY",
  "key35": "41HDKzYVpYeEVK7K2WuHoM7EuyJNXBzbTcQhiA7PJr143YzU7EZQJSkKim3pH6rW3213xmX9Q5xwuL26WyWFncH8"
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
