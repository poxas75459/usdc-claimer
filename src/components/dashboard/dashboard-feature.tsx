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
    "3NS3MNRRcnBSpSiiK2JWnAGEmk9CNCUdXF8gZy9yNi7k7XwitGYpNB8vQuK1Wxs2nDqbehx9WuwjRgUFfE1aTs6C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e22L9E8q5UDJ5bykoHeQ3mGzoxHXmDgE2xMe9YFbpduhU2LU5NHZ9CUAhbJz6PMUUfvAvh3C6s8ng1NyMde8MZ9",
  "key1": "whW2dtdf1vENPVuFba5KmpzPmPrQEAzqBHJj4FUD94LuB8z6ukYtZqYpATBaXUZnv998ytNUfkoDWADQeXZJ2q9",
  "key2": "3tZm6XegxPK9iRYe4H4jxUx21EaW8RXEN6Afu2eoDNYdfjhJnNyFKc7XRwsCrHxunkHo9ScBYhhTZui3nbxHYtDT",
  "key3": "2cQRMvbBFRA3bAZqdmng2wbPr2sm32Cj71W3DEwmhq9UQGgDBx5te2Z71YjD2xNB7YBhJxasD37S2ipuUPx7Sr5m",
  "key4": "4PbScFKMdmuL8NJyRbQrZwWrUJyzW7qyPgjhVYuHpUkh5fqfGk4gDKzhdU5H33QvKGooLRDDvBouuoLTeG5Tb1V1",
  "key5": "2RDk6fLeRhQo37WjtD3tL9PyDFBLjcdGzDqzLimH2jcBK6w1rvG1suYDxkCPXaHjWR55xM6WApd7V9DPfArto2NS",
  "key6": "61HRuCZ7MrqvaHGd5isU1HMq5mLityqLkUUPc5T9sqhT5knitp3wXTWjmWZqrJxav6xPxiyMkFDNBwYgSX2wm6E",
  "key7": "cXspjE3tdPKxNxmP9w1SUCTUKn9uuhD5r4srSSzULbEGwB7xQJSfdNsfuWAHGP3aKycDWTguPbHt1PGVqQiK5CW",
  "key8": "3gfhW491mX4N8Xf8wnNJ3km6nvjdnQemCz9VL7NnR1iPbxJutCsuaVzGoymXPcDg15hoCZgbdnjzwfBqCsTTSNmE",
  "key9": "3eKZnNgNkMCgBkQqqMfHswGyBDdpDawCtVo5auMJAm6j3rEtoZhmeurUtypuXmMCyGGBzxZJkSdC4JCEhBoJbtAi",
  "key10": "4Sipxw9Ap3A9QZo1p9oyGpqwakxJqiknCtWA8zeUxTN5pNiGqzFXaF4MnD1CcSruTUsTNwjHDbiPTXW3EAtt3NPq",
  "key11": "2AFmqtSey7F9JEibhskXNAT6TJX3QA1yx2Fu36vrEEDWiRJwwVc9CrjABXAFU2DMm3F38CWkTnE44WscNJus3KMi",
  "key12": "3fpQCxmhNayTzQYFWLqeSSmyGEMY9SKx2N9vkJDYzV7kp9iKBzPZBnSkRart6ZALDarKge66VjEL3bUb32f2hNQY",
  "key13": "225BLw9tz2cHX22Jx8xBhupMck57xp1svsYzh4Zrq4zgz3owxgnZJfwBLVoArcupkEJ73tZ44SiCoAxTFvXfoxdT",
  "key14": "3SGk4SCqdA6Nfef8YhDArdZd3Ro9XBDedNJHzdJzjayg7arnd3RTL5wnmKLMBnYGHHSFAQQoMmbWohMDt7izP4fq",
  "key15": "45U4W6M2Arhhso6jtgaxjNMgfa7amvazCYp6dwtwqh11NS8zoi8XqydRApmvuGAy4q3pZPiwGoobnVRJtJkDoxTs",
  "key16": "2XWUdToEvrSF91i3aWoTXgXxwDcNtseR4Sccuf4LXBZC9G4fngnq27XQWWanj5afxigTMgc6KfQ2V38r7adRFYfX",
  "key17": "3hKBHaQKTrS5awgBRpR1X7kZ7qgnbRHQeLTGmzQ9u1ZEYedF9vH7Rk2KSVz5ZY312CXtsEVhnwfYr6CBop6WHkAg",
  "key18": "63uvLcWhRPgsgdtJkZVezj4vtME4kxzygLCsU5KYo8yoqwKpZGATLta62nxR1ez2Y1VpWLergcScmpZjMe8bN2uo",
  "key19": "45biMEafasdLibe6Udj9Xp4N4HnsL2QNZKRt3SwwwWTRukZT8oAbS2M5UkGvkzN5NmDYZya53fMHpf8qZxcsrTHL",
  "key20": "32hbvoUpUVft8Ls5tAVjAcKaobJRkVVt8zqeKbDX3ThXf8MwpcGpSf81TUASvimpUMvECSkMUD8T1t2G5cZVxZ7W",
  "key21": "41N8CSEW7Zu9K2kHmie55aaXaFKapb3AzBcZs8fFGcj5i5CH3WhFhVSN8aLyveueAnLV2AobhGiVizPcC4Zr66ub",
  "key22": "QuT8cCvm1BJ23mJY7CBHbEZsCuMs5vas75opmvcu6ZTJFfDSvC62X3ncvH9bzDm4BAXk5xcbmBQT9ZncvY6VYhb",
  "key23": "3HDoh9WatmkmaX9uWwBcQa5kryjdoPvhMrt5z5dZaKa5UnQQtXkQHCsd6W4U3yJmy2qwGs7YWoogTHUwVyqqwnpd",
  "key24": "3LJLUxgSmFq4ZzNEjBUTxtRSZ7kyqA3WXx1ekzScMMAQgwzBQnPqC5hXhvVTtQuAFzAcRJuBFG4BpUJQBpoEgq4q",
  "key25": "jyFEcYadEw4RCTEwsf42xmzGuYzg5VZ6qKYUwBXCeuVr2oC5pztXKpSkVuoJFxWs2v9jc8NmRAPYjFaCJbhajnS",
  "key26": "3cxcqGjrxY2Vo9GVMfFBQ4JSqBNeEbWrtjcCFxNq3g4FsU81ye7gcURmRgU8u4uYXgRtyo6AezLgjKvRh2Qdht6H",
  "key27": "51TKm6uzLzHhA5pgUtoV6Y83PKzomAjYVmTtbuvotojYz6YurUmmmMcJzMpLue29etCZouLCJLFCkZxAbQ2kMTyz",
  "key28": "4V8zvQX95SVj31uFh6V7GBjGuXLzn6QkSWjSKqmcQzt4djUVtkYCjhNMXNapd1ymvHQFtjSYCgKVc4sbsd9EovsB",
  "key29": "2gEtFc88tMdMoezfLiDauhY31fUdtswjCmjGh67ZrdHspD1QrTmnFGVywc7QWF9DBXg92tNMZ8vSvdNgobXrvFku",
  "key30": "hKK6jS6U5YZaqpNDdc6kae7nWTL7n74geyzWnRSh8EA7QsYRi5LPn3D5xPCZ3NnoBP753AwJcyCVfs23xWusRLx",
  "key31": "54zPXs9p3dcdrQWY2gAY7DgRktkbfPaPs741ehcskx1HZW2AgjC1AEJoeyZng7vWQcad15o6XZDZhGPwoirrQdKG",
  "key32": "2y6koKUXf5zCNqpqYbYTK8dXK2mJRAp14UDXYYcmy9Mi5Zhk4WaZPEuESa8ZdGQ3oF2uTTo8yGtrKYt5MhTGoJkV",
  "key33": "2VeRAwJY89fQwoJo1yketqAFqkhUmcLKo6TXKzuDFfjiC1FUkqPzdaYUWWaL9jF5LAGwCXh5SfUxXWKmfgjgjvjG",
  "key34": "4Wdtv9oNquozRjsNam4H6BHQXbvr9jsXiGPXoRMkfpZooBmTGwK9tqQmue3q1LTDzuSmHNNTkfcrDygc2GDgfrH4",
  "key35": "4BVBPiftxJMhnhz62gEAyFHvoPZbkuXuw8wD6T3rWYvkAAi9Bkvb7CvPKRpeVzdYvfWVAktofecbdL8M7RKHTLNa",
  "key36": "4Z8uGcTa48RmsTKQWVHVA8nadeF1u7h46kaqg7y3joDJfTqnaAgEjRSe1zjxTDNu7T3kEX7Gi1mSdLjzNV3e9ojP",
  "key37": "WNXEjkQYfg51UfBhF6ZCZsNE5pohr1g5JXkVye4NYoJW5X9nUxvdCojjG4aj58iRNxprLw4nVYiZsHnGnmNo3ju",
  "key38": "4P1kELNZijvC4EbtszVrAA1n6Y11TnVJTJDfD4NU6wdoLzT5GyyepwVcnnZ8RcLMnHdorcNraGwtsfeoK9XWDTZo",
  "key39": "4mQVqea4vfspRGRcf1uEwFe1x3G7ErKyb7rhwLQHirjRuDRUCoiKrpqwWYRWakTZ3z3CkShAoZKsmD5ewS7kS6hC",
  "key40": "54hNg9uniEsCuENMhb63kAV6wgdpqMaQsGHLDtJnMmQuAnXRJt9q422HuRbjTmd5BkvjagNiMpLG6FYFsJ4399MK",
  "key41": "QwBuvCrU3AiUi1M7yqnfRCha7FUoS8PpSkQLxR3L1LdoQCV24UupgsSA8tZbniRFNK5RNyCiLGmZANvUFb5BLnd"
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
