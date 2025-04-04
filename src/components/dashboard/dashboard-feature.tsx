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
    "2r8jJHLYBWkBAxNYfYDKgQnP5W6XoSb9VxZLBc5PLkmaVwA2sZzH7kfzy9GkRYLQsoAZKvAM8vXeNcKYd7Eo9mc9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c2suKfJSeyqDswRi1HRbZArtCV8RQydrj1SaBpHttk1sTPXUj7jMbMMowP7kmCKC3cS5xKQQM6VpZxNpPYc9C8R",
  "key1": "3CFThkpKw1A2H74x679926BbwHzUty7H4ohkn1SvnyvnV9pW5FQMeNNsH4W7xE2H1N9ZH9TxGEWNTodGATtkcCRr",
  "key2": "5J5KcZQDN1bfZUQFda5PEufozwr8F4PW1KNds5BkSvyrZqpAqzVko9buB55mRNo8CKj5x7DW2DbJpe85Y6kvg5x6",
  "key3": "33Gjmu1brPDVEmzNDmgeCbyd3ZVxdQGTr61BXBu9kEEmAbDaHyQQHMbwuc6SFKxvLgwfPoPqQmBKBqNeWk9vJR1D",
  "key4": "JE3bfVVLpwipsoj87J6csHNZqo8xJtsduuDQ1AJBcABCCTaaBRot7AzackuEA7YWoHZVu65qhSsLs9ropwhanaq",
  "key5": "YrTKpeponhZgHPZ7U6mfdoT8iR4yGWwg8xgGKDXXZTkrvinfXWhsbE9VejSdQAaNhMipqHT2fqyBoq5BHSajhCw",
  "key6": "5C9bZAi7v3MGZYZLjsmoz6m422WMiYmCqxBE8b6BEg7skN2cFVvu48e8PtwcKaVvZn7f25UVwyQug3RWJvhTeYAR",
  "key7": "328thvLt3NhzodJDRUpJT6DtcP45ySCN4J8Mak6gCafoAQpLgzeM6x9Le4tvh3PLYQt9y3LYUVP2RVjmcZBYBRfH",
  "key8": "2LErjWcoDjDvNDHEeyPF99VDQ6B1J4uQKWNr4PGuuhUCURT528V3QCEhQp2KCki27SQw36XqdaU3BxSjjXVs8H1k",
  "key9": "WHVGaZjE2w1PGqpn8sJsvkGiY1WakewkBGWdqBYF1q8etJG29N99eTDBtgBEoprh7KmJqB4vWtgh5N6U7Kyx15x",
  "key10": "5AjBPiaLQMSxXNscXiGRgcZNBPMwFwoSnat1doGqzDPQgGtPH1uAwcWyMp5HQYkPAU9owvzGoTqZUiPEogFvMbEJ",
  "key11": "3uVGEp6rUxZTMzMBrs1j2SsLmHq9GxHsu6yKvU8fQTcdVhURNoVUSAJeK9wc3G5yuDqRkghN71b1MkpJGAwTuZEw",
  "key12": "2cy89TPnZEneh7kFzHHsZZ5EyDX2tLaJMk84mnPs9zpKJBs9UJAMpw2jLKoVj8P1gizty2c2rECeSyufJxFSLgvQ",
  "key13": "mQcRWtcy12yuAwMbUcGPkRPRYUXnzGaAqevDJw9w9p7SSMUbQWTDUys7o6nS9XTQvvSmuTCQVzJotgshipY6w3y",
  "key14": "2xKCZTU8GSx29NkLuWQQcTnAgDqzjHXJ255RyTEWfpLHge1DPGqhuRFyNjCTCKybyah3dRc3jP9B7GsK4eu6YkRa",
  "key15": "4gg1YXenyVHGhnj36PSeSfByE9MPX4A81B6pmKQZSXF5ZC5JauL1cQbZyDkq28GgDCVQZDdJvooLAVRpSQWKdXsD",
  "key16": "32eqLoZh7d4eRiF8kYoQWkHKybzLRMNXkVebRoxrc6fjXXs973shruv4En8eMPVFbDQp1d9GFut6bn5FXEBhkWRf",
  "key17": "2GKpWd5CS96qXzHetQQ5oSypPVmz16SV8x2WRRvrVu9cdu8U1AA47WWaQopbwk7hKYfGGDuHJKsYRYBpnrdWbLaX",
  "key18": "9hrBUETuQm31QJ6vAWBLrzEwuicvwLz2FjtiaBJSNtcpWAQ2kijymLn3G92dF91GziAmqpDtyvHEbDuwZDASu9y",
  "key19": "2AQ2coTNRo1GnafQYedL1Xj4eKVaug4dih45Camh2PEtubDWhpSFBj9a9xCpBL8J2RV7Q2ZkKTLqPv8x5rusiTqW",
  "key20": "4CYcVhDqKV1DW9iysSHqGnxxaAx6WFr46px7vZmY7Rq9ZdtvktXaCPraN5AUsroH2w8LPE3Wztn9r1tH6vqQUTGj",
  "key21": "3E8p5o6VhwDKuNUCQE2Rg7E4cGDhj2oUs4nkPxjtMSrPdZ4CRMHeMzZEytjaX6C3PFDN7PDzypsZ6T47nACiKdh3",
  "key22": "2QKmqdn5b4yjweVXWN5Tuub5gZvGT3u2ZcVbzMjnhyKdup9giMhBHxBpd3kZ46MUjaiuemZBX6RqEkECLcgSXzWV",
  "key23": "2yDHGVsUwg5rs8kGmLBkJ4uqEypw1xCRpeWByd44m3nxf4A4R6aLGndbVKLXFu8HYNgJghuGRZ8TBTcz4tqA99gt",
  "key24": "4JvwSGfufccnDxK5WS36JeiF7na5EUHEgrE1m957ktp2VtvBsckrwd1FaXDsK9DMnyS9iWNP5aCeANL65fiGur1k",
  "key25": "4VJbwNVXVsgaWkkgQy3N4pELfuNPEnEVhEr8TFBhYsVtB51b6UvKZ3TpUM9iFkLWbUrMWUfLGBEujTyuk2Sa9yTV",
  "key26": "2c4f5cwxNQjfc9UQXgxNtxHjVrkA93Cbh1xB2h8dW8v9GKw52qyP9twoqvqzZQn7aQ5z2KubefzB5rMKbQan2T2H",
  "key27": "2H2dNsJUn9W9LK49LJ7HT1DpC18EdShh1XFGgLyLvyK5fY1wkdtY8ojeMdm2yKuspEnEuSGyj9P6LR7sS3bHVmnG",
  "key28": "4mLn6613iJz6yYJF9B42KCcMsvMBDY6Nr5ew8tdyH7ouzPcQPM61kYbkha9CjABVyWv6qVmcVm89LiiocQDjSwFZ",
  "key29": "62TNPTdd9DauDaVRj8fNZQ3kNN6BHu24GZ8ev3vpyxLGRANjNjqwuiSBjyiUYCd7Kx1rGd4cAFSQHer3trP5uajh",
  "key30": "4XhU6115KJdngwCoxFA3ae2o7QMZP64DrYBaBYbwxxgNXDezXumvwYVUvLajN5nuv6WqKPELw7rmQPbqdgxka2fS",
  "key31": "3Qo8vXWRwzVTmwfpBb82gkJznDxjkzLstnrBm2QQyuguVw9CiftNjoZr5QQ1BgtXwGvNS1isWCVdFyG6ee6yFa6x",
  "key32": "5H3aqK5EWdkQB5z16NzwAdQBpATyiQawDwDGVpAetQGGiStnnjhMPDdWpgWB5EnKgSkfhhLaQ9hNC5iEfwzRBqcY",
  "key33": "2cHi7WuX34zZ5xcQ3sqaWsApdPjkQY6dXGpNYa4N3kSw5X5zE9WQCWqwq6TzGFr6dRUg3H5z4QUBUW4z6fcXXHhr",
  "key34": "1smPeaGy4cj3PituquVeYYGuTsUsZEBquKq5MfGNe7n1Uxa8LTnihJ8zVTCTj1vW8UzCPDnQgRkMVQouBxoH3cG",
  "key35": "XKbcTh2cbt8xeEUyzFtbsS9ucRaTwZ8kuB8RVkKSS4489cFhjtjqg6ATu25Y1ZBHFfSwkceZ6xyPyyKHr9my2in",
  "key36": "FNoHFhqVd7BXmWqjL4LZqieBnk1gwG4go2Lu4grJDGv7BdaBorCZ9TV6MUtBrJtqRQ22Jwai5WsAZQGt59ecFAv",
  "key37": "4ip1mDx77TtmsMgnbhqDXdJQsweaX5q6NwuLQgqG6Yo3gt8Ckm6eyydyKMfCiVQqhsAJzHDT1bvwSnuVhgnjahWu",
  "key38": "2ydJVx2L7GMFDY7T3Ucv5fwHDcXx7UZ5gasRGxggWscmvyvTz3GHS5PzcNWsSdrez1x2jHmLTsFC6JaA2Efkmn97",
  "key39": "2SbYy7396sQcYGuk8foKVJJSMgNJbev9ErSSKAokFPDPPQqZubBt5Y2ZrUajXwYwAPokwNPKWs3myx7CQ2Ty9Dbe",
  "key40": "4aYwvwNzGUy4K2JpHicgtmhEmmHTbjkm7nbQmGfnT6Nu4vCwVQsgDE9tr4HerXWWseKEmMxZfbQFqx7e7wXJMnWo",
  "key41": "53V6qBSMpeDusNz84Vtb2tscbgVLAbCRUaFBpnRi9w1CAXptSjnDg4n4oLLCK2pZ4oqbB4tTYqfMGGVNXNtir8KU",
  "key42": "NGrFp7mPR1MLgBdRE1uiYEDLVdt9iDyG2yzzMWZ3fYfkxTbEgYSvcZLu4oRPfDBthbLBj9no54ssjTNpdCVYCQj"
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
