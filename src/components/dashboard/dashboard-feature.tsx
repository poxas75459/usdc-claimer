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
    "tfNriqLoY3SQToXkXWsBAYC7X4oQuExSDcYajRyfgHUxNTaTiZG7x2xSWhevnEzeM7G8NdArEWhAkJq8XeQBRQk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VU6mx7NeRszDZqr8Z5maKuiNF4fdMZYDdP3vaBCN4ZKdyvjNP3jEKZMtichqw7vf8qiRVf8fYCWrnqg3mmvYWks",
  "key1": "3JGUoLiiXRbMYdJwfCJLBRGN6rqChFh8H6Ebsh8b2ujN8M41MKU2uTskneysnkfVRc8kKurAfLZdxiWrMi7D5P5U",
  "key2": "QHMktYqM9XoLWHZrXcSrF9EGx6Y6XiQ1qYQerzW32QBk6dDUYuibXqzGpf7idauvyKMvFYs7boDMbNKr3UwmWr8",
  "key3": "4cdCcRDy8LxVbWdEiNQ46eMXtmibRHWswuWwETQQw3rnY8CUXzDeuvSvFz6JUnrJQhALjLp1x8obLEZhwkQNvyir",
  "key4": "bkV93e5P9Qsjhu5fVenA2VG6aWpwFbimmTYbvpA8KuVaPx3fqYa1FSxi9fdJaQ8D4a58jcM14vPRDVZDLiKtWYw",
  "key5": "27YAXMu5Lc9Xo4VbNvUWr1tuPqHoUL7uGHpgGJEYssfC3dBqhdurn8GeUe25YueZy18Leb399nSUD7jRtegu7eYb",
  "key6": "5TkMfpQTsKPvgnGbGSA6XoFJTczXZGW61Lb3apj81SkxTMdfcaRUKELLbZ4Rum7y4LBe9uu7nhy8QfyWREafPVwh",
  "key7": "259nGbjaNrcLRDLVfiEhmhmdTss2WkTyPaJn9EdmBTaUQ4iqHjRv7zYPf63kTTjZaWBsDyEEyawhSGE67G7HUShf",
  "key8": "4BY2s6H88kTDwcA7L9jxKy3cSG8md6NAAdaPVFgaMEbggQtjQN9Mf3U3E3FW5mVdUJRfkhjqxsAe3WZ5L4gofq8C",
  "key9": "FmDwfTWcqoMZVmMQSJuanvxg1JgGVGEwmzrHmQuHmn1i4bB57WLQTM3pkC2osoHZV7EZ1fdURgahEMjpgs1EbHu",
  "key10": "gdKyYeCefBgqnz3Cq2YrJDYXkDZ8TFk7RVvuWwSq2NniSTQfUSMS2uutWJwscuXR53osj4ZxuH8e4WoqnFN9S84",
  "key11": "3urCnJwPJbgEKpdApL4y6wdB3StrDRyVbHYJETvNG7XhsuXSSGxvS6ahM4FRndutfUrFAcqmcAAY6ASHxujNxn6A",
  "key12": "5FadfpZfv4UdNG3fVK6qqoFuC4VziXrhoUbWGpavt9gSxZ975g6koP4dVEc991UsoqWHa3bj8bR2yzbzBA974z7z",
  "key13": "3oCw8kAwz57AzsdGCekYea5yutchj4f1iQ9Ukj6iCjgqvCLbfVAjiUJV5ot9MrNKwoV5URuufki2mwer63zEy5aV",
  "key14": "2te2QTKoV5M165iRMPsHK1TWH7ShLSV5hLS2N4ZLKpLEhLmmUV2FoEHugSQW5aYUGV4gv5SauGMHszpuw3r5CpSs",
  "key15": "4gURghbVfoK1tDggKvrdLjScLPtnX8jZ9qUdcHWzGMG5pUznGBbA3MXuwcnkKqEEVYnvF8sfFwKee3C69Z7SumAT",
  "key16": "Z5QuN7BgAUMkCHBVmv97sB16KVLQT491sLQpC9pgvSXNx8DqZhKCNa8WQy2UGUAL1YkQC8CyAmTKyna5R2ydec2",
  "key17": "VgH7XdREf4XVgKTSqHesxrGc7XhHzkcXm2nJTZvJcABUFME3tDQD4537NuXzwDVFhZEaqvGLtY3eiGA4dGk8UZH",
  "key18": "trFSbmoRrczt8dAMHVkSAZDph9agmjtATW98y26oG8qi1FBCPN72wUfXsMVgt11dMtYdDGe4z1MyWpJkSCRJE6v",
  "key19": "fw16hkazZEyVqy8KVddJvfQPhuSGhQmyxvkEnZ8DDit4C5EBYU8EoqNjtSj3jTr862qzswLjtgFDW5ewRxuoATJ",
  "key20": "45dA11NwGfFiuBAmF9QktmXAqpjtC95XnMBUJhMQZwv7WFaWhSbyrs3D8WQbbzRTqVRx1XN9sExKSB5bjfU2JE3U",
  "key21": "2gjaLrsodQb9mArHQNpaWLgxiAMbjkqmYcy8ohE6czQ67MBHFY6i8j4BknYSeGjJccpfJT6t1VRVGaSneLRWVzWy",
  "key22": "2kbrXagCny9Zo9dbmob9Fh8TnjaKEyQW3xL7PgDQKijSYxCjkuWwVCpYq6czWhV8qzq25SDniHfwCmWWyBnoDroi",
  "key23": "UiYejX8fb3dmMxucBgcaRVSLqwHHwie1cPPGXJz6X1UTxjNWvm815nKFmGmJAnx9QDbFnPwjkXWnxBiaCFGzBXQ",
  "key24": "5K6MoNwy1RHcmMtXT6nyzshWDuYSvZLqzj6Ax9G8bw6MaAuCC9XxGu9HRxdmy47dqvpRg7AaeCEbGgrWkg1uXUxd",
  "key25": "6H6rv56t7cGXNwWwP43fpoQ3TcWnQDQkk5nKxPaZCNrMcJ91zEk6c1i7M6up6bQFng1mU59wcyLJfK2FZJ3Dvbs",
  "key26": "2SZMH4uNvBfg3CzowXCFRNqCQEdxXS2g7Qa8egKa22MLVAQE81oYZqutAwoSBvXPjE8yTeM48VSVH4YM1APFnKGG",
  "key27": "2pYsXpMnweqXVYqSxyWMVRyLuWd6gwkP2mij8DZ1fcyesaTzkpWYfzAEQPQn3RPPb2ytJ1RZMTGXUDQATR9QWxE6",
  "key28": "2mtFHb19hzJDkLtgLpqaGd8DhibsWZSoAWekmFqUgfzh4jD8BHaACNTjvEv78SVPiZeHQKwXZSjGZ3n1seWbgJSH",
  "key29": "3SEzV6W82mZLQXGepu59FeZjckGrW2N3ADoH7eiamiT1mH1YRL6QVQMEDFsye1Nd3RP2bsacjbrDc9uGNLpnKUGj",
  "key30": "3Lfxwca1ubPPGb7MyZahDZDSP1UAbr671piYJ5WfVqWq58AUCUQYZmFAmjzCjLB7HRcJt6BiP9NffsGYCmGKVxpN",
  "key31": "44CfZCK6zuAfxnsYnbZjoc3kRXKvfy7PWUwsKb7tCcenLn72f2stPw1wT3xtwy9tUemTydYQMv6EhnA4JHwkUgjU"
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
