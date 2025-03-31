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
    "2v4YkLKdDN6v8QGyN3bKr2jyMd6E8oQYPGFdG8A6yZWX5BivR7wBBSKekUrjw3V1BNe4UTbKH8pXg5Y6HsMWZsqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pyQ95fuGQ8tZ3jJ1ede3xCR8buBLq8RmwYV85aGBUyf6rrM3mckptDDc8kxX6bju6WEzfhEWs23gYAgTDVHYdvn",
  "key1": "3Ae6TQ75FiBbj3paLBhpWBF4c13UHrsUCxKmasYef3Qi835KmDLFodXfo1tv3cmWGcpS11M3eXa22vWg6wWA64Q1",
  "key2": "4oaoXjFdXzWDNxYrmnjGonm5zkNZoaHPjia1vRKDr5iVrxXGPnt7sMWHMoFtnWxbo4E7iE5H3Uo1uZb9v1NGWjf3",
  "key3": "3mnoa8iDHxMsyk6cRQ2o7yyCzGvh9b1P2ZqPC5nY2ofnL4KXoGrxNxs6qKCopGmmUiVS5JDtEWtxyGjmdNXFWNPY",
  "key4": "2atMADZkFsSczZAepkqH3Utc714GQba2KR3UP2eMyYWt7si21sp8T1zzqSuwRBE9suUy4bPDrtYAt5xtZcjmscMd",
  "key5": "5aBNJQ5DQN5zGe13B5b39BtQ3RCnwYG812XG5u2sGXwr1THPWcDYVU57ivBmfd5vQoEofLWEGfwudV6B2JkkT1yE",
  "key6": "2zQdDLQpG2FYp8vChz6W5axXk8uew5HrQGoawQtbcAzX3e8TevqFCwzAm6bPVSHoVvaahZJJChN7rHqZQhC1yQMq",
  "key7": "3HUifa9pHiSK1vDSDNs2rfZK5SFS1j93LZLrymVSHAkYXkvGrrNt1sxkinHUGF2yErJjuPFZvLNZGpysaqcDHGGa",
  "key8": "4g6BWgXTC5Wa55GExaorKRgXJmUjA5JknFoX9mzC7xfcAeoiuAqt4n72VmhKqJQ1CsLjcQWFK6MDbWjB4eRi7mAP",
  "key9": "CSaWoiJ1nM4LzMp6zBWDxmAPqYmM2hpw42Wb9NpuxcPznkjpaUSH2YXtNW5mdSwicNCvASb4XjXHBbuSqhbxevn",
  "key10": "4LVgohirusby64gRDKh3zDow37Psf5CzKRchRZfqhnra2k7uqQTaUSqo36jko5pHKHW3FyXXcoo9xrjVUd2f5Qb",
  "key11": "JXKyPyKPpvNyySnpczsdTfdm2go54ELxrckAgBL7QV57UyjUKpuDfysbuQLyJiBV3LLkzB5cieacqKo4E3Nyp8w",
  "key12": "4imJvF4cxmdiMa1viVnqShDHj8BUxQGVew3wk1AWg8h6bGPDjitLhXMbUcRe6SGqNDmXLuqENstuSuD3oYLZ9Hce",
  "key13": "2QTsF1HPD7t1qRjujaSyhwadgBhqM5un7uakgBmbGLmo2Erm1KPDhQk6qmYRXd6e4Zy8rogbvALwhroM5uEpEsME",
  "key14": "2Uu5hJYPTis1Z3BMJh8SNrrcwzYyf9PWksticqfeF8UFeYS8KrKs5J4SbeoDzq6DWJoviWA4m2b2F4WYkuumr3k",
  "key15": "3tHMkKXhwCVNdrjxx6R95jQrHWwtRhaTQbVBNZ7m622bMDWkW6Xgf6xp3eK3CyTeCvb5gyXT3z7gdnwBcpkAU4aF",
  "key16": "5xiFJRwmW5ioJWrHBdbz3txSZn9FB1T8aMtQBvrE94G7tTBujt6EG9kR8Cd4igKc4FghT2gA83Go9Yxz7MBrRGNY",
  "key17": "6Reriwd1hnYLXVc7M1brsgYakwJF2FJ9gzqbEiG9YNGxRTR3ncuXtPUTJsbFFyu9XXWSGh9xRo4jHtQvKncFSao",
  "key18": "413rhVCmkz8AWsCSHW3TnE6Tp51gF3TTHrtvwzmJt435vsuBhZ547gm5WuoFEShfMGTFdAMtAfacrkWY4KUJJRqN",
  "key19": "4Rhab1iYppCP6dTTWYv1KUcXXz9AqeTejwYEDpR3ygiZ53nAz8yCLk19xi7vhstGGgtqPbvAShJ1PJFppzHTWmQx",
  "key20": "2QEHqP3uXzMjP29CbgcqpF917m9s91fAxKv5dtJ9CAnCh4x6BFrsSTUWfnqg4jC3YacWXZDzVo1A7Ec5PnhCNCQb",
  "key21": "4tSHcZXMxxaFPENbJsvyUPF3xdVqmzbRAwGa8y2A8azqe5Yfkw2Son2stEKuPYMoVvsAbDWP9ZN43uh1qL74S8zE",
  "key22": "9xpZTv2RYsMNoJGdwBG5YRLyH26nhFeEE5Qo3KsD4VrYztg2xuotpTNw1J8BiFc32fc1L6S7jNmm3yKTi5bPqya",
  "key23": "3BDTLKXEsNLBUbXHQXC5PHDyF6oSjbdw4kDpDHMZtL6payyKR3tWReGSkSyuJiU3RKMHKTB2mxhfrsVHsY2pDew3",
  "key24": "4h5bN3ETtdtjdTfjkp1MyXeQza4GPYAHw9kyw64SzHWZZJQe5DStsy6nVoPEJAbVqzNcfWw6XGpjLvTBFiHkzgZr",
  "key25": "3FYV3fyxZYvnHrXX8aLZwTg8gPPmmuuiyiheGbxnaM3d5vbMjPS7JupmfzaumpKf4t8ebfHoqzvZSGsPaWedN6om",
  "key26": "129Stc6qhqbKLPssAbvvFaff93Wh91urfy8ML9VKJ72eWNAFLAmxbpSBmXDVKkbKkL6TeQfjRg5x6YRtX15AE8LX",
  "key27": "z9aiVxw6xRJv1P8QQAaNRCtdBMNaKpYNUD3qpqxGXHxMzpoag78nd7VChRHD24Dmn3f6AQWTHtwcpYgnqhoiRQN",
  "key28": "3foF1aWnNNDqiQDDeBwNZ33vNKxsyRdWUmxyKz5EwxxXwYZgRa7E6VABG2RmGKNY7GumJKu22qm9goZHVg9UrFQS",
  "key29": "5ttHrvfRL9CWViXo2WvTKP8EoygwVFBwz7gnYczJuGnt7iG6cstS4awcTF8zJdhSUk3MaWUNH9W3d2pA6wkzbukY",
  "key30": "5A3JdzkQuYp7CarX8qjRkvYBUmWR2ccAuqCDxwtcK75jDPMR8DLWZQPwumEkvTQR2Q52bAtU12gQQ3hHWzsAzsSa",
  "key31": "24dFjCmbCfDAv4JZ6oEjgzZZQQMPUQGmKJqmtyPxeefSzeEThhoKpn67cR5nQh1GGBAxS94XcZyPsLbQzCa11GU5",
  "key32": "BVsDN1gMk89wyS8FSDVpkS2G8jQ8LLX7nX2keEYFz8s11vzcSCmSqM2HHWPJQFvuEsE2vAokyAefE35sDitKbhK",
  "key33": "LMvj6g9yc2tQD2JNWx2zAvf19Yr5gSjq2jXUNYRAAs1ZnZ8rENCBbrtVJVAC7RnSmcSzj4fQR9oLSjjpAUZgMNN",
  "key34": "2PbZUgPivymPPvqQoHxeJi5Rf24s4cXUTXXC9qUHL6HKfVys31Csb7M2j6C2iY69n2DF3ADNsbipWgPdevfDnRyr"
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
