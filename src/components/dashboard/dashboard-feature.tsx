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
    "3RxQyKGD6XfgUcaVMo4oRzAQwpsq3x8BEcbcDDuaAKEGh1SW4L5mkvRtbNXYnNuwfThcPyyteWMinacKqNZbrFMQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bVygfvRNmqvAePkRTBDPbRHgqsg3TRswPmQKH5cWzASGNJVzpKvFHc2EUt2H4k8oCpjebTosvmXe7B3YWKBVzb7",
  "key1": "Du7iQz2ApdMNuu77UNENDZRe5uWjFAMZXH31vaEt2ipyALW5sEa95MXqJeGAwd3aKJGc1AMFh1R5hAB6qKJECxB",
  "key2": "2SU4WmbVqyUcdMixW7LfmK9NDDKWCePL1vGgxoSknS9Gqcw1SCGDpfUdaUkSq3Dj8wUW6sU5R2A6FfeQk4KjbqXY",
  "key3": "3zJm3oV67fkaJtDzcrU75id9LWx7FkGDe5qP7yixAVkU8hGBSzosWuosRVEpV6qp477o1dCJB3GqRGZqYNY1nDUG",
  "key4": "2Y9AdfzkKJuZ1qUH4kXMqC32XkUNFY2LeKYXZa7c8cxJpyTVCQLH5C7gsuaWCygDJ9EBfS6FLw6eYTF283AjQfeS",
  "key5": "53sajxeJuJgjzFLqfyhoGJhLRyCWzuCerWi4HQLnBtDK39kAJVQmZcX7fFyzzn4xqttvPw2Kjx4e3aZUou2Wbiqs",
  "key6": "3k2C6uQkfEw3xT4sJs9RYzKQWPuXPyLihWt2yYGbVsPQUNRh6EkwpLeDBpG9k1ahu1bmgiqsQYjQBJaVfKzgPgw8",
  "key7": "46F56emxNCnYAACAzG32Rn6ych26zL3cMrwhb5T8N8seNJ99AtXEx2cMFZuQLAGNzFyuvDAoqf1QDCSGPdzaJ8K1",
  "key8": "5xywUdN5fYuAgJY9eypYuP7zHNr5aeR2e4qXGo5hiR6no3nkqnCWjVAxQfr7XwRhiWMgvit9Pte7nTEUYCqFR4nQ",
  "key9": "ZSbq2ZDt6iVgPAdKidXXWPoiBpUEnc39dzmiDDp2eLbB2gGqb5BTPAzRxnk5nP7cPUi9sbC487JRku2upUmcPAZ",
  "key10": "64icqp28p7DF1nbhNnQBbaHpZthZjUQUWBG1vv3twKYwDZwy4nBrXURHHzH6eWPEfbxSED9nLK5CGYqpGCeU9qZ6",
  "key11": "TYmjG8HbdDkiUuL78KhgfoURSB7r8fkVkEFcVSnhihnNP9JHx1QBCkp1ABh27rtXc68ULj1bU6XDWFkPqCgWhkU",
  "key12": "2ddDBQuisgnPxSPbsszjCj6812SPKpTKTmrK6tTTg59QgiHncwA2NpXx2fWJJ7JVvPNnGnzi435kwt8aDHhxn56H",
  "key13": "5UJ2KdFsVKYgz5VLs3CbWs3jBKaR4rUSdzZ2xhaFqCT1i94hVjWcRKv1UEJCWnuUrTEnQ9atrNKSuvurCAg1iSYw",
  "key14": "4KiDVgYDN1x6ZQGtje5Pmdeofmm4abvTi7YgqGQzqmqU7YAqJEL97JHgyYXcuvDwaVxzuPNEJYUNZe9L1C8GByjz",
  "key15": "E6TuoSijt8Jx9EorRpsGcDHLkhgqRS6U1etckKepGzQcYQzCvyEix8hCVoGy6ph4t1jgcNvLpyxWGvK4Nu6Pe5X",
  "key16": "239AVERrACaxqt22Rm69G866BT1bRDNULYrKJVSJMxEhHX3Ame3Z6qCF9dohncqcwQvUb1rkRiY43fo7pUy7KWJo",
  "key17": "3ku4gHaDUrH8BFHAzWxzGUWYX1sLMwsWsPzAeU7wX6SdvwnBJqy4xpFtxkexHicautHQSLt2nbMTMgvRDZSs6n5L",
  "key18": "3Mw3NsfS4atwinDt3cTphdNPCLqTu36nYyQqX2snaeiiFAroEgmnYLmbwD8Q9MgW8xYJ7a6NQyHWw6N7qnCCL5q2",
  "key19": "49uJjzkSj4MCjJpPZmgVN4AvEP99hLFxfgwQuSFieAKFMprpbS677ETFfdh2x5LiD3yWCAyNXJ6NdfXywbZzSfhf",
  "key20": "3PTtt8dvwPPYk2x5wPuBHKmf2aDmfRr3ciYViJqE9xykwMAQDz85TQDvfAXnTv1cL6koquo1evbEkotG5oQcT1Y7",
  "key21": "4316p3Q5Uc3i6nCVMBGZbLiBHrjTQd7ZX4oiJhJWmyEnXsBPrAqWm3ZYoubx1RRCqFDBgd1crjtiJym2ZKt8hgsj",
  "key22": "5YzdojkANivK418Nn3xufB3QpHrrVqZubPzpgMbV1kJkPwwnSxS5SAWx5UEhcAVAH3Px6ryxJ7rwrkNSj3zipYvk",
  "key23": "4rvZxAzrayGdTs6mfeLwqLQ7R5665noUBATCEDGUWvHqGAL6oVjXYAiJHVve7mTEESQeNKwVYLqKJGr4AuZndXB8",
  "key24": "3Pg3UrkwBeFZCQ4XnA7gaqcuJ6zo9G4vdYzgYnyjXirbUkbztR5w2yD4XxbV3L9hGtZrWwgMfqKhrADqeEJ56CK8",
  "key25": "53cKnDues7uedBvPAyanyHnY3cqXdmCUJSU9qx99r6BxYr81QNiAscL7mF5biAfrsgWfqUyH7pDsNsNrozNTU4p4",
  "key26": "5kS774JHp58WaTouH4n3nqT45W8LYbkUVuzo6fHkxSKj7Td2b1Si9La1Kgm1LXJTkccmA1ffHg4ywyLSg9NMqcXK",
  "key27": "4kozKELUyrHSYzkxDbDqjnhMWHr7xq4X4CJirJ6o5NUhHCg5YBDS1TUgLy6jRrDK5SywViWFrZnGZb8vW6sB17Ne",
  "key28": "1ebDJ2NV7MSjL6ZpYySNMeHWtbKPsomQtoDJWE7986AKuVEjFBeUwPU43TRAh5k9SwX7mVrUaeyWZtabMNevomj",
  "key29": "5xjU9hmzB8bwzdH1zonhfs3aHKkhqv2SSUFyzsU1syp68eR7fCjraxnVhaU43nzsTurfYe7xRRsrTmLzFCp4ofEb",
  "key30": "4eC8cqxmQg22VU42xDfuug7RvLQnrZGQqyQfDNUYcKu7mfotevTSyQb6FCn2qJD1P2kkUDkrGgjWFwonj9pzWqhb",
  "key31": "33Giu5FugRjNikV97PFaBFeNRoTcbU84SxtXcMdDsWabMZWJjERtvFwtNNWTUFzwRR53xLZbwnUhWWpzHDurEGee",
  "key32": "3yFWnik2tKvSCnWU6V9JtRfPRzuVdsebe7ZB2YREYKaje2mVcpD8sSp2U5tmsFGwggc6kAaAPoSGwo9XBrY2EsPJ",
  "key33": "BMTNtkWrVwiLztZsG8JA4PrqvPEMyiyQu6kgdSCcYcRaaFDvs8a2qNgssPu5kmSZru36ANEzngET3tH1MTii6bE",
  "key34": "5WuJwu1eMx9RPodKeyL1wZfwDhkmGuCRaUQa2CT7Bk3B1fqNDyF5BFkA49AsD1i2hr4knzZvb2wU7DFKt6vtaW52",
  "key35": "3TNxdG1cwTQ5yVXU17y1wJxQLPSwG7naXyyb2SjaTFqEw2f167MxXZfENaYRsjY7fb4TcvhvFuHoyPzvPBYM85B5",
  "key36": "3fLcAyoQieJabwG5sVW5vWPmxsd8SxYRjgx6zBZm2Tik7KbfcYkGHdNCG6fmxRHyn7ff5XwyYT3gy6eWfxtpmBJQ",
  "key37": "2Gm3wt3XJ7TYjgYquosrBW2mk6YNriwsPCiZR5Mn9Lmi9sSnRMKnHJ7WFZk8yfx9k2CfyqLoKG51e73qvVGfi6S8",
  "key38": "5MsXNGxpo2G4aJSCPtncUnTGuamAqhmkD7S5DFZCEejbkUtrJZ46oj1zAsinom7LPE5nFoR2cdCEgZWKA58xZoUD",
  "key39": "47rmnoqSY7JtUhFd3J4iKEncrXicVv3Uk2rTMg2sTsJE2ztx1FoyV3Nj68od7C96fS9P5xHiyP27gKAvh8Sbmprr",
  "key40": "3aB3irtjXdVftMZPRSfWcvTkQnKM3x74QtunYRvuwVcZfxUbwgWd9UaGz8zGUGMxYDXCoztF16ezTRHHCFsjAgn3",
  "key41": "1WXkwChuSe1qVXU72zmzYpmAutFKN8EsMDoNyms77VWvDp5bBwvBAjCfFCAaG37ytQvX7kUrogG9qX5JRMyqsQc",
  "key42": "drXB3do9LX1jEMXiMQSY3LKpmm4cdGVzE7dWJemuw2AiwU6wXWM87igZoMU9YfeM9zLKS647hpSw2m9MDNcrSkQ",
  "key43": "5qGt36rmRdc1X9oFt3acdgsjrxwhtTps7KP2GQfCZkW3u9EUVW1qQ5rvRH2J8CfKN4QTBHVUv3AaxXaq8djiR9eb",
  "key44": "5o3sm3jToHbp7iCvrgA8yChKcBtsHHKZTSUWGG5bFbjTi5qHUaJX5JbPJPkEYhgs7ZzvoVN8PwLd4D1tYqcmtjLs",
  "key45": "accbGh6gn6qpjwARBnao7dwh3qkJPPduQVgFGhTgj3k7Qbzo4hRTEPNecdpKuNQggbj3D3ySt6wEbXuRdXnazrw",
  "key46": "rm9UFCQJSKpb9u3T35H8hVdRFy1MtCgXLvqfv2AbRATN3nFxjMg6x5rVkAh9DhNXNTXa5rwuo7ADFiPy1J35cqf",
  "key47": "2iFwAjH75azo5LrLz8qbQck8DzcUFcdcgvb4nRCh1SDqcx9U85DxNLK67rDEdZFyxxFeRqmmHKrU64PfKABmY8if"
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
