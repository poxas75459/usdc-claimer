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
    "3Dryn5d8kSmmugcPnuFHpzJeQed3nDEHC6ykDu8vH8vLXJSgia9rpfAHgbB5mmnXFPajbwVEEqNyeYLNiyC4ZJBs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46g7Rzcojy6pVFi783Y1gRcxd5skYpD8BqK5Xd2mYDy2sDPkzKJHyLdX29TcHNUWbcG6vtjBpMx2bzL8Dh5FMbTd",
  "key1": "2t8VKLDkx2BjyNkjouFfT96R7qiRwpmdW9DJa4zej9wdXUrBTW2hY3n3ftu2hiEa5DBsd2o8JWdgqnQihAKzZoDr",
  "key2": "49ZkfKyzQN2iYNWWV4Gro8Foi7PHwdUtK39r3WJ33hiFiAtEZsTVtxAGC1DHMwCWM3Atm6jksRiCgFSKhW9Bz5n9",
  "key3": "jCGwzutL9jPzv4GAcUs12ndAQaJMJHbME5aAB7trucNfBJrhTHgQjR26UTB8bdDeBU4qu9JkFXtDWG7Ecv7mW45",
  "key4": "5nEnB1hoPoNpeTDJo3cXMTE4sNsWyzcSehCi5hoWWU4hKjTvaNcffoDp2q1nxJnVsrwSBFBERF4mPpikn2V1B7xS",
  "key5": "66ViWgggSSLYSv6N4fdFufP7Vb1r1riYZNPWDB4rwnqp4NDwSUkHAJ73iMnBWPa2X58sVFAvt539MaeYNVxP7wDm",
  "key6": "21A2q8pRj1KWwGr1xb8URM4d4Yxdkjyb5cbYfAYBYi3Q4cwuFp5dnkUnVGwr71VpwcvpWXDQCtsgaE19URd7qjxM",
  "key7": "3Wocxp7KGz6b9Kuxd9K7qSm7izt35k64BsPTtwcq33E17xFqiK5R8hyxodEMqEEhq48ZHcG74jYxQwGSLh2gCoLU",
  "key8": "4om7dqVPrGqog3GWcetppXb6r1v6zM6BJiA2J5aT17q23enuHhEaij8h2iftGQgcrRewLq17EqjJXirjgy2u6sP4",
  "key9": "2LKtnpqCerkDPYmW8MyWeUckR4dykNe9FHGXJQqmx39LcEqNuSrZaEFwKuoLFpPbiXfXHKSF1Fv3niPjqbfbhU6K",
  "key10": "2nNFbZcFTxjc74N2gqrg4SfnzNQBxN7k8JQTGdWpVJ2tZgiEJikkA7uYQozGuQYjuW6iLQrXkBMeYEcbdY2ADUNz",
  "key11": "2cYRfGftK7jL7MmWwBxtECM3oviTD2jDmP8Cbvo5aHKUu6Ujx1CqsiMc5k8YitkXZuzv9UMnWtYuvT148nevqCXA",
  "key12": "CRnBNYeTqwKJRHWtZq4P3a61p5yNXnCHofiQnMRiKECUJGwdwsJVNveTAhCPCXC8L45b2oauvwN2dHJGKW7AStH",
  "key13": "5qbqioVyo81oGkprwt8ni8jjBvbBCfsLTpypa2W9Bf9xd4zjxvazsXq2q5ZKeYEYXifozpTKya3sam6FDLrjamAP",
  "key14": "5JWTzCLTbW1Y5Rje6BQinyKGKcL4baFuzQeY26BQ6PbvpNFwe6hkVW5HE8pGXkcMkF5JEEvM24wThKLKmXxrwCi6",
  "key15": "nmCnT2v79EBSwD4mYCFZNYgDc73pioUAW3QAjGcRFz42aFT9jhqeErgWW2YLSoeDeaqnZuCcAoWeMn16VMRyWdb",
  "key16": "5ABq653CnhRdmBym5nmRqXEYdW7GHLM9WD61Z6PvZHsCQEZ6EiLAtt3QdyAFgrqVCjrwE5kv8uJAoJbJ2DUFbaB2",
  "key17": "4HLkM4pTftYopVrZQskwzyFjiU2Q3LTmGzziiUWY9Hq47mjTAFaWhHRbHNSZsM2nHEjPd1mGCaDgLt52vZfTw2ZN",
  "key18": "2eW5Jg6oqHKfwuMGpQPk2d8iecinoVrTxnWQt7nLcfobfDuhDqAR4kopywD7vxPB6YQ3QNaxTw4zTK8ZZMPMwHcB",
  "key19": "2cshMV8F73S2qncdn9sFjYU4KQuT3fmtzxS3NmaEWKNQPr9uBj9NsBqmmvDqHkMgNNZNYg3H79aqpYreZSRFHR4K",
  "key20": "2h7WoWhigN9HDupYzJx7oJkjQN8m6uGNGZ7tUxML96CVmDe7g1jtXMP4uBCbTDNB5WAokqeSHBSVWemxmdhgpy6o",
  "key21": "iBLczDsbJgGxkERWWHgT1HffYaq9uhDBZiXHvjDrLGzCKnDdHAay9VyEohwsfwgd5nj9ZgDGZixtwfur3rZ6ycq",
  "key22": "2XWoyWKuuVG3uPqNMrDAYBLFoqbcuRHahEr3g2Cdr5vsuqZnSLPrJDS5rUrQzEykpztd9DfbEdq6NtmANy2HZrwf",
  "key23": "4LcGJHR2wVVoUpsq6d7MZUGtWMrjgDtDqS9rpY7294cNqWLZncUU3KHHnGRNjtQ2njYyhsLokmvMW5W7rVD17ovY",
  "key24": "5264ajmw6MW1wiNVyDmrmc6NJ5Rzs4SPFkxDkZSonVN73V7fDLgECcGuM73hYJjGNBb249xFmBfhDnYwZnxs2dKd",
  "key25": "5mMdsbjbzjvhrdDgYdN6pAzMDotsfeE1xvDKWdm4SVqaHWzbhhivn4JEwaniw7fN3yUicYvDVXgE8ochLjFW9Msh",
  "key26": "2ZMwNTRxXo9QijbbHXnKR65D8foVqLSyy8X5FfKiRpYDn8xyhMTUFKs5mP1nRRa5XR42h6oxfe3c596ymaJWU5v4",
  "key27": "3SBZqbdNPZSuGe9aFqDc8cunTD8wiqHhGoV4fq8mKiaRxX1NhwJyq7k15QnccfKnmw74u1Sz6CbX96pUMCKHRDmy",
  "key28": "2jD3KMbMnTpARHapv8V7go8myetojskdZqdTykiWPXr9fY3zCApLi6pJpLxPHgHyCKyfkXHCrCxMRXC5cLErWA2T",
  "key29": "46F8i7yXckMwqUdJpAgUE3cGhAR5G4NY54KSx4cPiDvKkcihZcAUdmcx8uFrUqV32d7a9yRrPEyWkPWrFyqfJcY8",
  "key30": "28Fg6q2vFj4d8ePKvqoU4WC53Xt8F5ZfKVNrApuY9U9sy8FzrDBZPebvMuGYq5fUdDnp33w1p1DubU1mRK8nXqaC",
  "key31": "4skgCprMDj7FZqWLMhFUvkNuHN3NR2hgbig5Appd4YzFnj3QpSoAezGjaXMorV9GU8xrDx1W3S7ESxMPaaA69mx6",
  "key32": "5t3Mgz5ujec5YRBtqXgow3VPABfVwNjb18NfaNciGBxUuGDPRB21XsLaQv9eimmJbi6zhPA5XAKgUvZ8UoCyvgky",
  "key33": "2fTBZ2WzdqdnZ9Hw5SR4iuMfwycYfG1xBVgFvrQxsPVvcYt3NMiU4YKkM5hpukkCZRwyuAkvyAsUWDKipvNV9G7y",
  "key34": "2b4eXSrmVenBUZen5XNAq3KtBHeXxP6jJvCiaCNGJaexzv8WQATxx3t1obE1EBrMT4YMmtth3w7cy4gs9c3W2Sw6",
  "key35": "AjTT58QMeCnMYuScSHeYm6P5Rz9R8f2HdztJx56Xqgvg1n8TANq7Sngmn4ALogzx3CDTLj6Dvi5yeJqX3JdvA3v",
  "key36": "54fRXnNKJG9p4wTkfpTTDfXTmZgDK3gVAzquu7nkx4851CAafEUWJ2jaXHSe54jbL24j6HReNQgd2LJkndnBmGEC",
  "key37": "21a2MRSVHKFU5rHAfyBG9WKEPBvBFchBRQ3MSd8T2whgQXD7AxzpGih9vJcPQcPCXf4rYo5ViGJkEFtSv4g9s9nk",
  "key38": "39kXJh9z8kE5AzVUohGWoZ6gth8JuBQhcbCS1kEqNkxZCWgfqVtcspEcHkxLUUGPQdviCtbYQ6zzGvtUXVstLifk",
  "key39": "317bkBQn5NSHPYQ9sSkLTEtcFTS1R4H2nMzSJYixoZA5YP3s5EL3tzxZJ7baiiyan5XCDQxq9SJG8BHJ7y1EZvzm",
  "key40": "5xPy1WuLqTjtyvQL6HABGJBxXFAuujgPHoY8z5cTdHee8Aer48xn8TEpxPYFCnuKqUXgEtooXJeCarXG4ELGea9M",
  "key41": "kxbzNdw7ftMxPx3Wyu986QqVxXB3EJQM8fDqA2zg1ZJ2TYjExSyScrZq8H2uRbmPUvrU3kBs4WD3WG8doET4bdF",
  "key42": "3ZnTPmNZh5eKrb3KGNWcWWzgj63ZJJd1oxqrLc5q49YsLGRV41YK6mjTRATa3WoPa4GQNufQrHvtpJAgmxKHYcb9",
  "key43": "5uxWPziucQxgswcRTcThJGVJpBWo7Rwxp5eGFuK49XnC5ZjZefU9MZcN3jozbRoTM5M4uuwCjHKr1MGWZzBo6WR6",
  "key44": "5cwYHgWCtodNGd7C8YBfi71mMyV1AMSjNzqirtvtUui6u9djMQAb9vkdcnRtZgaMuKQKwkwBfLpVK9t8dWkxrNcB",
  "key45": "YT6dnDG25RRpF5XbvXVGrSH7HEkAk2fsFGfe1nntxufL4uMoNNZe8VCTYCpNkgJUfeTK1tNkYdCrY1VH67MfgPk",
  "key46": "37PaKfypHu2smeX3Qcwu75SCruVFJPowhErmyj8oo4N2mS3bpyQnzYeLkPWjULgRb6ihbcaab3Whn97wmw1dpPcw",
  "key47": "rJ6xTDbure5WV6mavC6ap4oGhXG91eh4NMTpv7xRj94B23WKkDxbVbh4Ng2LDrVGb81L4yQPSxgL4dqJ6xBjAYS"
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
