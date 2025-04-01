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
    "34oVNa4jXEP8bH5dsS1rZiUr5Q6Wncn8XVm5jhm4zgy1GGPnNdiasvZ8wZeWdNyfF22jpQZ7DDNbpBx7f1vXsG9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gn2RukBYSC3UdN5FPvCH9Pi5kzyDgzHBYDdgYXGPQTnLkP9Dz1CYvLbMVVNRd3q4E8mdFRdDvK6WLVVY2baMMEL",
  "key1": "4uRQxoYetXnS9YZzaWMrD414U9FwCYAE18uuaRbiGjecWXnUJhiRhtvUXvz7AqKdAXgBL1Y37D8knbiZqmtM9yoX",
  "key2": "5xPKMdDwusAdYu9saVRL7C8AqGAZsPw8qpPeWFHVgLr4XNWWurta3AchXvC4oj43YMQKWPf9HbyZnVJJXMGaXKXG",
  "key3": "es1FLmXxWBsoj1L7st7aKWgu8PzAZhoYrnD7XH3YNq6NMsqKJ2wL9wX69FgpX8sGmMoedTqK2hBEnFqGS4otXDa",
  "key4": "3F3rhCyvdT9tAsRnycAGVNMmdqVo7ct7wan2eSPPXijzUb4c2zSYMAgWAUy5DKMnqsG98UCFcTLAFjZ1s3vCPaFR",
  "key5": "3cpK6JRJHsZVPcqv7k6JzENj4XQJKb1AkG9ii95qSGiNAf4wigFEszN5Y743Ddmq3itUSjM5oDaUNw6MqkuYgoeL",
  "key6": "5WmE2g9yBesrjnorFA8fa6YViGk6eDK3tB677TuGqsxXSG1z28KiZQhfDFepEDcuTb2V6zVxWw4ZG1z2R1VBz17d",
  "key7": "2XmuuoTWJhhdmwVat31i6Ahgqsd1gKTKkLuEb7Xoi9eKhGVZGoqhxNB81pdSxWFcwwU5JVXunodVTJibFkDj5B8t",
  "key8": "597a6MdLc11Boux64VTxdfgGzS3s4u7k2k2rWNSfWxmDNiZ9v4DvJg1ucWzzdinUnGhb22ow6p3nWMzPwZ3LKUMM",
  "key9": "2Hdrr38mFnfEGVcUStnSp3t9UBdNcZKjVPiZfHcF5zc3QfhrekvLZ7czZDgU6GWtjEZE8hvokWFxjfpmUL66eEkL",
  "key10": "3BFp3AmWJrFCLmyabnJDkaZTixex3G8G7UoLhQcR78jJiCeUFD9rUcjA4duf7UswZyUv6JHQ8dQvHQDoQy8hgf4H",
  "key11": "34dW7frYVXCamUHeahdpKeAKAXbBS8R8DsFezsmdyZsK3XbDouhCBmHyc98UDnMQBPD5TWEwQtB8ueVLyX11RMKg",
  "key12": "4CVwz37PTFcGCEiK1xkEstcjpcApv61dLAMfHkEQZzRAUkN1kKZKvNd7epRGvgav8LeMG6EYYsSS1GimSRsdVU88",
  "key13": "tCkxB1UPhkp8u8Rt5QbgJ8bKNuPWaWgS4G5aiwSgKEJw2bi7Fk3jW1kvHRaF51Wz6Hna6egVJoQnLN3oEeiy2a9",
  "key14": "5p8ukDvskamqoLpE6KQ2AAMcnBfGAGwDtrfuXPmuQQ8X38sbeaabHJ96sCm7xujhz4QzUm5ppTdntCcZz5xzz8DZ",
  "key15": "4RY6rE5ratGo2Wd498yoZt7yoxbwzfwvTq4XBXzMKrKGUGNYachrSKFcyd3zwfom7nPu5oWUeJM9KQdPT27GGajs",
  "key16": "XgQ2QoqG3pwRkLRQVejTMWr73M1ctETqARL21BcLpcYk12JJoi6XmMJG9NvfAAVBbzEaerRwCZVnDYYMaCPZeDF",
  "key17": "5YG7F8mX4AeB6oVu3ste9QNCEr4vgYTfcehHUVDkTR3VvJLhZeEEjy6UCXr5WDF3HGcfyzxJjhs8BwXXz6Zwq3Ca",
  "key18": "2NahQNZMqf2DsJFDbsBwndXakDN4q2ypRpEszCQbgyxRWSFhXU3vGwhr3cHo2BgveUixckY6BTLgVbnWcgZEvVAA",
  "key19": "iFfYYfw3GCaifbNcGQPWvTeH671EhLaWMKehAtkEs77KJaG7LKM3fi8Q8U4ZN9vci7hkr1oz74pFHuz1dy9KhAM",
  "key20": "2Qhg69LDetxggqxwD1izb3vnDB2aCNWcGMtjkvSTb3d7Uy2EerFEWdVGqCN8wSc2E4dbwC8mjeoNdHfPbHEaX79",
  "key21": "4QH8cVx1E8TUhdkm1AJRv3JTab6f1TuQXdzzLu341n774eMQGfnmWEDHi3zeUjRBDLW8UNaSmhKKPn8QjdcYzdj7",
  "key22": "xk7Aia1Ex4nkkBrGfJ8nvKjam9TsPPBsCeroMBojNEiESYRKYEKvy2vueLLP9YqzZK9bMbsLbZMJHgZrrjZJwaA",
  "key23": "3sE7byao9q7jR1PEsunkvM5PUfbCqrMK9cPmZWRewJqjTnqdFQMetjK4gvJfUFMEvQ4AbmaV2yGjqPb9pArSsUSu",
  "key24": "RDr8nUHm1Qg9omDHr3iTkiDWbe5MzwzxPQLmNiKPnEechC1gVkPxpNs6xhGcYeFEfU9hg6LD46H4dGGjiHXFVQB",
  "key25": "2j7ZcdqUMncU1a8qi7CvSgSJs2FhD4JerYhLZgnQg7Ut3DCXyvNH2knvKxbRYMJbye2dsm7EE1q2Vobgg3RAmrx1",
  "key26": "GnYS9y8XYWHEPhK7Xs5rrwR4VKwBQZuhLgUM9ALedMh5V15WzeHt62PWs6oFu5NDHkDwgaKdJNWAYNFh7of5uRr",
  "key27": "2qbkPTsehARxFE7VXxi1jYKeJm6Ae3t3zB5g4fxiQdB2EPVXv4vnRrTL9oQygWijoCoST5pEnFcKAas2yrpuZtnv",
  "key28": "5TMB22Dtp1JT8TnaCP8mMRn5EemTdkaZJQf66ZAAF9koSJemmJxKUc9XZVw5p9fr2HKoongdXJSRXmNh7ms5YLms",
  "key29": "4ccVi9quyTQFrzom11gDaDfZx5km9bcUJyj1mau7gNoGWdYLKiSSF9eEEmXHM4CZXmzx1vS8JsqMmAcL9y1csVUr",
  "key30": "4QNQeewedx9cRuzkeQ57dCcGJyFW4ShwbyTCVuMbviGG6s3A47Xd33HuKEUBmyddcvh2xfc9NAF7btHoTP3Mmfv8",
  "key31": "5X6pKwUGZ6WL5DCZhgo1gQEWiNmHd6CxHAemMs2s827cirRKDvwq5iNU2By8vWJPcAKL8rpLMJmVYC9Y3AVBDpzF",
  "key32": "4unPiCHtNahER4ELX4N9nLAPdCoWXigwVKC6m2QovtRrYEAigLzhYvyPrDTEGmtWPUY95vNB9GXXAt1xdx6MxEmi",
  "key33": "2xM7dgtm8Mn4t4uC1bvqzgPBDHvZBWdYMoq9hKDEsp9uH7fjhtPxBAa7snKXxdzroKHsFWLmydboi6eWrZ2EMGLn"
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
