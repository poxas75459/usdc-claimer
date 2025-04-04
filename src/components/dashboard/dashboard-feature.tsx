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
    "4PNS6FN2cDrUg6vPFSchWjirxegTrBsASh3WmbLqfy4237PjZzm9LdJ89xJnJ2YvtcwtHu8kZBL9gE5MiaVkJDrv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q49nBk1MuXaDYvzXLPAYEFm5Cco72T4GsATto92JJHnm4eZwuJFnwa5EH1HVFK1C5rQYkUaHfPLJRGWWW5de9nk",
  "key1": "4ytYVNP8V9xxV8ZRmw5yXKcopiSJf8b8Vj4ibWh3367GsqcBWV6Tp4HVfDA9Yrm8M81zrtbMg3YZ6pPfZonnfZwv",
  "key2": "3tJDHbbpqSfqvCezzu9xGqaDes9jqJ5cpqvNhQDjQcguEpoQhDjfjTw4tgLgPqPr718H4PDeNzsycPSimwS5Stwu",
  "key3": "3QCpECWQeTSPkWjkCxYBDyHgwXfgeD9H8g4vP2esSx41V67xs6hsEFa53e4jZgesCfvhypJHoK4nMVCyTXjnGVkH",
  "key4": "3TtHzS8QkwMzRdDkS5boGV5fR8sTs4gmxwEHQ9RKgkEJ2KgFG72ax4PsSe2DNccTU38WZU63gyuXa6N5giixf39D",
  "key5": "5tDjAQzWosNdi8wXbUSwgnuP6yHMGJc3h2unUA2iCxieGnpsuiaeG3jXLLfa3CzAFRQj4R9rXGvXE1QNEfaw2KSw",
  "key6": "4SzqoRefukS3zR91rjmYiQDQVBvSNvXvAJLv4hyVhUCkMbVcYoeHfiEvghLAEePE2cZw7VqoUMbHdRrDUSPxqsx3",
  "key7": "2yaRS2WLoMwLu155SNiGMtCnPApCsULff4kzKoDB1CZPH6utvR4HL357MGWfBVvRE3GaMmscDZXvFDmmZ9VEQJWX",
  "key8": "5htuC9k5zeRof21LbHbsSzfqss6iq8cjvLQGx8UKKE8193RhHRPcVFvdwxG6r8qTigXjxcU67Y7ggAhEKsCbRJbv",
  "key9": "57PfUABHG877oWFS1o9ZTfzypMpPptng48R8c4gy7ftcdx6vG3fHSYM4M2PF3kiwKFXsU6GEdtgwdhTs7Ph2vruT",
  "key10": "7m2qgPE1DveaWiCL2gVBubE9bJiFQHkshampFfRaGAV7712tbhYzChYJ7fhPRqbi8eUkue1ynSaD1TRGZ3QaTpw",
  "key11": "1vanzaEYJbGZQ5ezQk776cknmSZi4xshVcSwZbEve1PvVNLhX4BcWuhMpsDf4wFxPU2kHwjcuAfXvjvqYqAH5cp",
  "key12": "ajy1aDSerxcQWXexYs1igawEFU3kq5b39nR6ukZ5XmMM9aNRihsDNQ3XtirbNbzpDdKzEegTaMFPhRkZUawcgT4",
  "key13": "2SNJmefE6W8BM5Kc1Vf5XDdQi9P7L6sqfdpfRhJq4uKQqG78dpSeitNifHw3VLabTPz6hFunSVDfnvV7NdmPintD",
  "key14": "449GetWecoPqKM37NpiZNCgKpDyt6c4pq2XxtjXRN41XDApeZgrEvbJDXSZneK48Y512xA9vvovcutcLyGgrKTra",
  "key15": "3do6xu94SJRTYN6vWf4kbWeo24xpJYw4ZNfbASELcKXqUbVT7NPqoawVKsyJQFdhNAwqLbnY7CJhch5cQFXWXQzD",
  "key16": "25ZKAPt5rwqWtXp6jr4BAzzgtbheWuqB8NVDsGuDy4cWHXTWhGCJgtrhvVYzhG7EupCUW2dwy6nxPG1s3uS8a7vK",
  "key17": "35NDWxs9dpvhJgRbhLAwHUSzkTq4XDcnqLJGjfRaVGbo3qXXksGq66uPhTTuVXCWVErfnCHpHd9ErrpGKTum8G5L",
  "key18": "57zrE9oRWUD7wwXmDr33AhmFkvSBDbMgJsJH742vc2XKTf3bf8By7wucDVc6i8CK3iwPZicHugLvzsbyU7DdJGzW",
  "key19": "2CptzkyA5v4Af9MsysiTtGwKEmrABTmp9jewn91mAfHJuGXbeTBhXDCRSff3kgRy9Z6DB9JqUQ2zZpGoBK654ZG",
  "key20": "2iy55XfkrmotyiBa3tDp8q37E2Vsi2N44yrwprnyKJ7e8Mg1JiJ7176EmViinnwd684bTgeU5LeE49ZPMnNTqkZd",
  "key21": "3BHHnUUBm9WcCHwVy4CtN1C1oRaJLHqugyWWFhPDu4VKjuTG4iBuWz7JndXLjVVQknNoYQbUhqXhYwkhEPFJCwkG",
  "key22": "mr3ErugoQPqj5mx4T2eu27c7BcX7fPK5iB5K4sAXGowHuhWovtF1B5nDQK1gVsZ2bYUZRFdGvgrtQ9VfA2GUzoa",
  "key23": "5KbS16erib9zg25WwLAV2YpywX8ouU5GvmLMNaJT2Uzt1LKHAkk9VBDtjity5k5jMk2DQtHSR4DyJMCDVW8HY4At",
  "key24": "4gREBohNcgKbQnzisAg4BA5MvxuiUBL5REaSx9yQb2MYEArVN6xjBShK8eEo1LBMvTB7TDn7A5f8g1Me79daNZeJ",
  "key25": "8camm5K6yeNodjua6AeoiEgXVzq2XTwx1DkJ1utsgVURcN2MZgsqFh4fZQtbVqe78oEmSRnTA9KLBy8NigF87RD",
  "key26": "2merfQwZg8ZGYMFdRwJj81ZBwvxPVDWdMXBDEFSf8Ropt5DEWL4DmwVHNQLZCr3uWDDXmUJKxKJmCxXq9uf1gMzr",
  "key27": "5qznsVoJg8ErVW7iQ9dPv87BbcJsaTZd1exLfcgDo6WEXgbgXGekx8ZLvw6YGAW1U7awBs3s2zZGGqp3g1P18Giu",
  "key28": "5GPCCmhK8S3QxqGnojtZVy12w1Jqk4hiK9SGyF5nJtfhMjw1rrrN2m6AKKNANmSvnaJHw6R6s4RKbg1ga6kVBMa1",
  "key29": "4tfEUuVSPu9Mu8okDfoWvQmmbG69rp3RbTe6oUiPB7FiwTqXH2NXpaPX8f3v2oznRqJXpN1vmigHChQHSgu2bDRc",
  "key30": "3EPjHA7hKi16tSnHRLQQCAaAj1ZMrsQB8wtNXz396mdWSyPeWxqhBujpGYKKWgjNpfgyocJ4ZChQP39M6UsPaymG",
  "key31": "58pMebmRWvhuu5e39vUvU7LnfNf9FK5JPQ7YyBYNq1SawKPE2w2TZBF5zpoektigBCWrLimKzfCkhSBdeb5yd38C",
  "key32": "5AkQh79ecq6r6wAkLa11TTBqKVGzjH37REjhmDoy9xiUMwkSYkqYjpaFNvJGBt9j9TyK8UQY1MnQmEW2UCV4dv3A",
  "key33": "5G1PjuK4XmtbM16MJw4Z9ycNag24JkxZ7RK1dwLUuqZb3TtaH7Xr3ZbnDW6EqjUUZmVeNRSeY1j3stMesqn56YBM",
  "key34": "8zARa56onKFhHmtdggjjSZjRynRoDc74eK21gjQFbLjNaXy85NP8wqrjWzaca5G9GJadkepaebZwSbX4rCCSKpv",
  "key35": "tNKtuNyYyEejQrrmDQ4XvnbYukm2vaLuApDwH7JGAeWwy2ZugeVt6UUbreToMnsedQBPL1nNArdJyyB8nR3YU6u",
  "key36": "og5gwKKk2Zga8G9fmvaq5K1ian7pW5AZgTiEpyjGipAGudfQxoAtjCpcDJHJDc22Z2FrNFyQpXPHeHuBdbsUHkG",
  "key37": "49d52YikBzQPUgHBrJdDbQJD9oeDamSy8TwkQ89XCbiN436R9LA181jQJFJi9ARgtPmQpx1p4unstPwCiwVcnxfB",
  "key38": "2UKc5dGEg2itHCaSasBbQDDbWznTLaSRX1MwfHfwEZA3tUD316JRyG5WxJ43zXc9pgswc8YwgYpxgvgnMrK6PCdW",
  "key39": "ha5gr9qap8YJyqcHtGbZVrGy76PwQJt75iTT7hoEbYeT2mTy18SmB1Vs6eEJq4g1ZLK4RQesjA7sYR7wV3Y9zpS",
  "key40": "3bKShktgiSoTNavUtGqGKnT4np8Bg7aLY6ZzmVoiu5u44u5Vc5ygaJEzqZGtcduzpiTNM22TibqLx6GWRzS8iLoq",
  "key41": "43n3toTPzFMwbbweh3WwhZ3Cz7EhZm8rUXVSyb8Ta4h1Ffevsy12KYbqwuHzcMyBPyimZMpZkpaMQeZFyDQDxx26",
  "key42": "4t5NGFKLJVHRqgNdgv1Xm1G8Sz46rMRcnbF74K6ZBqfNdMkXmEWXHESS8f19QvPKWauJ9RnnydihbJyxc6j3LmL2",
  "key43": "5EbHw3b2EXj3kzNhsF89JDw5jqHCngwVH5yd6JDx3ysoDWvKNqn22Fg9kJvJrCMk5rnWKcuyJ4PZ9aBuYXw15uoj",
  "key44": "3qEqoY1AQxybrszXA2pNs3RgmZLJ1eJsh1WUZTJgixpLDu3JGXmdggUjcpaBWv3hT2hQ5hQBN7V3LzpBbGjKpUSY",
  "key45": "34EgKAEyjkbJkbpeBwcsGeezNZKxWH3XHai4KrDp3SoswboQCSihwZwp8d2F2D3fSjgFEWQDZrPTWAAs79ThRkQW",
  "key46": "3fyFVZVVaZMpP2tbwBT4CQjs1TcZ3dR7MVsBWJ7NcZH9Rd8iqXCFzh2Cms9tbFb6GprrACdbHvxrR89MPHbvwdJe",
  "key47": "5s7t79DJHT3v5XcaraDqPpLeXTpNRcMHX7MFHKtixHa7ySULQ5dw6CWGguUMpmvVqQbef94CHwPuVXf8u7sngrPb",
  "key48": "3UEvcWEbSfhdUCL26HZD2jkwGPoy1bu1zqn6kNm7VggKAAJBVeFeHAaygYpBkZg9J5vD8BDjceiRi6Z8fCe6vmDT",
  "key49": "3scsM17NiafHZwDV57Bx8D5opVboeuW4bHQ6gjsE48Suy2LycKYNB73rWLbg6unv8BVCBWRDe8jYUjnQ1zg33fud"
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
