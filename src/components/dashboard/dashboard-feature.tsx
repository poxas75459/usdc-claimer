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
    "5gUnrGPNLneo1LKdinhzQt6UyijTwR6X8AfNqGgh4DyotCZ6327JqpZzZL9QSV2zfeLYLWvabS79wwwWdDufmmdE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zUxWqjFJHTXan4emN7oNzZk4BLC2feEivoV2JdH6fiY1WXNczcp9GXfTufSwQTfjeshmGxekgXVF2HrmyoW6Bxi",
  "key1": "52fd8gw9dxrb6H2idxpDJka5BvfgPR5RsfG2APmwkYzXRZCJz81VuH5UGMGA4DDzveTvU6Es4BMvRjjBNrWG6w9L",
  "key2": "4NYV7uFitEgvdRjXa3Cn8iFmpptfTHoestCghuoDybQreMFz7tkxZ9UfxuCBMBEgdE6fpLYXBPVe2QeVpmjTH1Si",
  "key3": "4K8xH78ag72fPMU7FmrqDEyp2okotNURJjjVBJnm1qo5vCC4xoe6LoMvmLLEBdsER21mgFd8ZHTZhA4B1ubjJimY",
  "key4": "2EafKbeBeDQ6GhhnJ8soGg9NRpV2CUveoZbenE1GamdYAamNDobCGPkTtRLSi3w6j1Zj48GJC146Q5TCJ1cUXEZd",
  "key5": "2fF73Sm8Rc2BnpLk1DXr3tKo3vXYWYyYCN6T84zfcmqoJi7YqxQ5UDaQCvqXaLN4NCgUUXY65rsTdeUukDNxpw35",
  "key6": "2YDSnknsgctnRaPr5aD9S9gKbwuMZpBzirK7Dj8LPiyxyUijHPGHZgEcfPRRstuJZ6ZZwYUjbJbXGJczdCbrcnqe",
  "key7": "46pMAKSHQWZDnmTTrgvBzMGg7iuUyTsEbJZivRQo8hzHgLXUNyK6Fc2xtjXanFAcRLtYaa1eDJWNRxBTDNcq5Bg8",
  "key8": "2f2n8fnGRW1gzNxZXw9hLkfbJYqsfaxofSQtWLuS8qphsg13oP1zFTFnEGt9Yumx8aRjKTqFNiFD5qye4ZT8ejQG",
  "key9": "5CgAtPFAWBZRtb3zJ3bubAc1XKSbrdRgj1qUzEdWGqow1qrvQBqR34DdPM4yGm4rH1WWh2WpZVkzvpHTL6VKWvyd",
  "key10": "4WPzNfFwXFAExcEjCQAyJEQgovQWRZW9JsJLgz7FeErfTfDTQeHFNjg4bcSQJ4NEQMVtrA7CNxu3n5eaioXSta9S",
  "key11": "2RZ8q8EbnwxwixpnhGUxUrby26gfxPCQPigjp4hXSP43q2MC9Mvj7TJ5tGtM8YihM3HgNsvotRJw4SDTSqJgSVVC",
  "key12": "EKy6ZCsB635FWpc1FQ8XjWFnQ7pNfhTe3Pw8os2JqJFH3VYr9WrhiUc4RnGEUsjP8L61WFEmJX5mRPdgo4jEir8",
  "key13": "94k4PiLUYsDJAJCenABbEM5KadPTeV53kQKcHR6aErnHdDWmRfxfz41Wq9uF285wRZpLXynFYUuyKdARMBNqibn",
  "key14": "3Eicy982V4y8tUWWCUXy9U9waVJJ4FvtpGDJBJNsXGgipTqRA4YLkwTcsMjV4857cZRpmVfdY15AVQu7SxuWkZnJ",
  "key15": "5QxhzzhfuK8A2hzMLUipnoa53WLjwfiwKMZjXMHutiZopTqCdVRPGSYusLVm4wpYeCtyRAFWxyhYs49gKWmBPq46",
  "key16": "27txL9EFH3L2qFSVtd9x2YjbPCit8RAANKwRZoaNTvym8A3P6smys3U9A5MKvspY2fPscAhmarFQrWgVR4ZuvmrN",
  "key17": "5h3g2ep3dAWNTGUwr96aEXeZ4dVR1uy1CSL8shL6QbEtTwBhuE1sSe4kJMJdF6PuU2Xg3H7d67CLHgU1CDpKSetJ",
  "key18": "41VorQvGAJuXhPU44FeT3Q9wjECPe5HoFukBWV8RfzYfZ4L97ofAwgF1SSTKZhcL6Nz3NpK9auPgcpRjA3dug97M",
  "key19": "3tyJUTXNKmgX3HrjRP5JQawSJxCs5XnY418wMe9K731QihjBCGFAJSfKCnkUxguWZKA6oTHj3RzCAXK7WTaGUUP",
  "key20": "jQdYNWturd8ZLC5rup37czGTzAeHRnnD5PdsFYPdUyXdPSFArTu9pxzo9BbfWGHXQkmhj6NcuFq9or2JLLYCUz5",
  "key21": "JhKRKvaNEcpCTkwp2jc2C2PKwAcZYhaVpY8foX62B6YsrPsJBHkH57X5Vuh3FRbgxABj7mDXT5sL6HJzoNDE59u",
  "key22": "3WToSPYP3GnPCAkq8V5FeTFVwifvsJnLSwjBxnvpQ2pFYU2gKqeAzrq8feUp5piqAKbXEQtKabQJUJeMvbtzjz5Y",
  "key23": "2QErWwYDDnTi7yQc89w4Gbr1nyphZj6Vw1R7nSt4Y6CrXkRgsK9EsFYC8pzQkrZzQ64R82Pn1BsicBth5byRfNYQ",
  "key24": "2MFPaNuioXBxqyQr7XCpoQ6hF8uyxXaMSAp4yVRYtTfWQNZpTDEoH9xY3vZDojs1imkDhXpsUDb3J7J9Qqdie9wD",
  "key25": "66dpahfJtezJrC4jWpZfD5B9QBKzAyhtcEB9cxiHVzTVhSuvgTHgHJSFuGNZG5prpE6dFN6QpphwUL21kXqfHa8K",
  "key26": "3NWPg6DdU8cGCh1zn7TvKsijeYXgBkCK2ePtexE1Y9tmnCgELrNpFL16TsqwnsTU7TZyejzic3RuEV6L8UV1EkFi",
  "key27": "2TCyC7pt41HYmidgTu2Mx1WM76TwJhwTepQF3DuQBEB7FtAfKgVP8EX11tZMR38MfMCXuDKM6w1fMWefCThgv1XG",
  "key28": "2S4Y26URryzLKxU7g3bPKPpq8pp6QiTVtpXQr2wBnwdwMSbzZxbcU81RhZV747d7f7DEBTytxgA1M2QVfDjzXaoR",
  "key29": "3NT9fGYZfvRQFPzXHxhE1NQF81hL6LB4kuN3e3x6q7kU5WFisGLpcE4XxmT9t4FM7hQ6VuMU5pvhThgYpC4ggQ1v",
  "key30": "oyBW7qcMjY1tL6zbvZ4kF6YcJJ12TJtuBUtA5xPUjXanS1QTXTtDkvvApqrZ5MTqJmFp2pmrrjTwkcikpAeWTNx",
  "key31": "5r6ahQujcPN9XBsfZWJVmybWf9SaVrf1h9Eix7cJkWFgDnDYVmL6E4bhVF3wQN1dS1HCznW9cb1Db4rpQzGzbZf4",
  "key32": "7YRUXMkpH4JYtei5YUZCamFZeCU9MApSvbZEo861seB7eYfCYsRbkKuJYw9unn6MJxzbp8NTi9nbRiM4QoYvYVR",
  "key33": "oC4vyTGj2UX2cYJnQvtWPbWNeGVSN3HAbGs9kHkKxEsmnkk9ESfTRpjWkhY9WB3LLDiZJsQ9VbbLN5ciVGE35LT",
  "key34": "5n9s28PMV8Uc1RXCLoovn7jkVfe5pDKD4jQYeFjSQXmQwK7Pa5AT8e3NZWBvyiebA4oHC3joVjx1ypv6rx5oQ8mz",
  "key35": "2JsWer8sUzQicm4ZzvtGpHmk8WxUShdR9HzRuiK7ZERxwkYa7ZqUT4GdEGiNCkXj3DDQ3k5h4zCwUiHdwgu67qAN"
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
