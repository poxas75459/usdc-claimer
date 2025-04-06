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
    "5UKMA6qfmNaznPiUzworR7v3JKL8hGeJEP2NzpJq9Ur8E5ndtNhJwJ4NdbVbWgbMnNZL22ukbwpFGLqx8p86WYoN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TgBiFh1qVbc9KP3oVuCzoyqa3pUAJNfQTdR2MAPiasRD2fg7Rw67CRDUGBVz6QoNuAevhYXRJJ5RXgh37Lwz3Ve",
  "key1": "Db8487ZcQcgDuRWx7MqrjwqY9yiYTLDQ4Y5U7aQp7g78MBhDsRBTuRMotiJFuJZjTyhyM2MPgmnPJBFde9KnKcH",
  "key2": "QxFLaRP9XhFZnyrDZNGp2gBvaWH5TuqY4xKwBeNiGiotE4nqohcFQNwkAq4niXVweSXjwsCiauozDk8E5ezQeXj",
  "key3": "2aYRPoSrmT5eQ4Xi4JTp2pY7FU8JHoLmzxdCWXF8t1sXXyTRyb5kQPpoVnGeiwNpBDgzBfEZeWtimf3PaBwuGpeT",
  "key4": "2tS82NNKAXM6HgY5wstPYVVBhgwuevPQT4bnDJTKZStFUU6tBgsUduE1ghkEvis1rCydz71CU51hoFsBwUmg14pq",
  "key5": "2jJJjRDXQNHzeB7Adgp35EeUqbVy9fzT7WQP4N5vYuEofVYsxXa4gSSXiGFEmZoECLXiU1rP1FmCTRYAgBcft47k",
  "key6": "2Ku8L3WV5whBMAHY1GqkiCLye1wL81FU3z8zkfE5o7p6dJVNrEBUtQHTfPe48JD3uUoapqve4Ai1a6x1bvNXczuJ",
  "key7": "3ME37b9PrbCP7hDCwcLUYzTW64DHHmQcXcToZ2EDKfovE1sFtRu7hvK9CzyABrun3DCmUzHa8SwqYx3fXg8JzNHT",
  "key8": "3ws27HfDdUrjaaZZFCZX2a1UYZ5JvDVWSVuGXbFJjavYGLnFM7U8tuaGBmieYL7PuBGYWgRkaUWQh7doPygg5STq",
  "key9": "41yj29uKE9WxeAemBUcDdU3GENUedXKq399rqbPUY9gzn5kscyUyACKGZKGFNZYWzYXZWFdyxvk6Nbvx7XqUUMcp",
  "key10": "3ST514ej7ddKEDYvJC2N1RKH7SCHCzLpY5cNZD4FJ9FqTHhJJSZkLWhRsB752a68E5tzstgoPd4iq5cohhwFPnVn",
  "key11": "mzg1SWc123BsbyoNJ1f13CmY1cmoX2C7bX9RPzAAc4CbKLFUVVbWUxDij8baBFhqX3UJK1vxKiCFTSqawraMugs",
  "key12": "22qDPKHbot9fvS7jRwP8HfA9UfCrCHZ6P3q4Fu9eVDL1kXe8kUvSkw35yTS6z7Y7JL3YYyv3KiaRpqsBcd4nY8qB",
  "key13": "4f7LYzJGToM6WieLURe9xtaueFUzaYEan3APF37yFWhk9jvaQ2qgjVLzq8EiZEoA9PnFQrWn7fiKEecHy2AeCdkS",
  "key14": "2gPnXU9UteVKFkH9yQYYsrEffa9Ark352KXaen4aJfuc2uqrvAUcukG52sgkwaCTnk1Zu9FGbQ32UiwkA2xfcjJc",
  "key15": "36MTyeN5uaUhj3BmzRdw8q4J9EEUtqVL286wmR6L8vMCmGVPxnhvxsMubZ4UxpZNWoXJhCoU7AE9eTwJ1VQbU6vA",
  "key16": "2Ew2iFz85UprhSm7LAxSL4b9Akgv49XJbZVVmJaZuguNB2tWAr5oGhaPYnsKRoPAq5vtAdHKm1dpZ8XFZ2cdJUE6",
  "key17": "2bGq1Daq5v4RKzk1U1m9Z3qaaPma5xjCyepDMYrszFhYijuHh2AwHvefFWDTLpDr18CS8HkouKbTteASRpwoGP27",
  "key18": "baL4iSz9XMXBjH7dcowvzxSkHTURGoN5L4SdmuX5WG3GYR72spy9x169HADJJR8kXyHTJB9TP2JC1Tn1m8GboKC",
  "key19": "3Vqq9eorT5PZ341MJ9LhjixrfEn39S9xXm5hVfc3LBdn7LLH6ZF3bJsVQRHTtdJ3UKBc9JfLFeV6UJkeCBVvVLog",
  "key20": "4UETfmQ7rbFpdCm4snVV5Cmq1zad3eLfLePUZUfR89zFkLNo6Unq1myZwpc519jamZja2pgqBuhCHzpDjKwrLPSL",
  "key21": "oYRymuW6KfdLYzxrwV7pJwLFuRnicXUss2pbZFiRrhDt2wQpVwLMHPCJkhrSF1LfmQGUxa73CeptPWfiHbr9i5P",
  "key22": "5MyLCpKHWmRkQgTEk877KJai8HLWTAHnbeLrRTF1F4UCT1DJ275QQ24W7KxH5FcKQJJd6aBtJyFHsMvMsahnxB5F",
  "key23": "1imWvV1hmSeUZsAoDGeVkD5GF2kwnKYWVZY4r5poQn5FF85yxScP5yY9tWuLaahSwEa67FtdUhdWwa8kxAiwnrc",
  "key24": "65T4vNVFpbsQ7HE5Rx6qFRpd2bYZFMKLscQ2sVHekUotSuCKEfWMAy2WSyPGEKRPZMLR4gQ9wHVWi4TeCtJhdnyZ",
  "key25": "2UeTdnL36iqCzzXJSbKXb3iz2rL3PT4E1vwh5iKfL8VsFgbmCqRZxNWBuLuEGpqh4tvttRpw96K1kshoytssoiX2",
  "key26": "2C5Dc7DLnvyMjnrdTCpFoNj2omeZybJEYUcLAnn4RMgqGq6VAjQWRnmsXb3J2rMbLUBfboT4RamnKyAKMSCDZLfs",
  "key27": "5kAh3v4cYH3be527Cs71QDLQnQfGZAMHp6YgW11gp4QKKrvcuyHSmKmF5m7SPxLdETRHwD1bp8Wfnyu9c2xanJ88",
  "key28": "iLQrBWwnPTGnmag723tvti5k6nd5zTU7R5jxDAshCSvoJtjGqVM9nRHvHYhxTY95XXGzP2Fs5DYyYyDRiDnDLzV",
  "key29": "4AZkh73CCkEeNNtEka96V76vwe3CAY85LE8MByDRNUDQVdvnfApYUNfs7fiWBeXMXjUtwrzMjJ2KoSjVKHCHk74c",
  "key30": "2JqC1VEfeAPeon3vzWXLbva82WAf2M5TJRWdBNw27SPkqduPhc2f8HVUAmZ4nsEMhjsPhc7rBNwqwiXhHVgwoGKM",
  "key31": "6296jPy3yMPkyHiYyWgRYENrn9WQPK1WRLYEf2KQ5aqJ1sDg6v8ox99YZDX5vRKGejRPdcWf5HmeCB8N2JvZGNLG",
  "key32": "2oaWDeMi3NJC5DMXjdQBAHUgdYrVn1ZDywECzz5fwayrcXzfb5GNR8rkwzY7BqXqyKJkpHdaEv4KDkF6YuG1qfvG",
  "key33": "LKmGPzfFbJfExNUdaVV3F6fFSw1J3PPQmsXT5Ga2UUpfC6i68RQoWanmtoNziV75n7HRqK2Uzfp8N4GKc4REjjp",
  "key34": "32wZA1Xs5dQPcxT3kJajLmzov5VueLxejEjrQB3UnfAhfDRYbYiQ67BZd9yxs4a52YYzMkWFCynbmjP8hhEHavA7",
  "key35": "3fHTZ2mWXkfV8d749HXYHF6GB3Y9xHPgNwp42QCVhvPUkVgXkixV224jMkBr87HbbXvLvH4aZKKsCyHo1jzzuVKu",
  "key36": "5G8caSvrgZHo4YEoHFajUn4r21nbgvveEszS8AH6rHcyvub9s8F9MkEKXof3RDtjW1oCNuc9sd7JqCnKTDdzc8T",
  "key37": "eYBafdaWx3RUDoWhdXorvpMuJsi35yEDqdff6PfMMsMJT4oY5xAdJk7YrE8RFeJCrRDBvGV7EarhK5BULgjerBV",
  "key38": "2vjGKCwiCM7gQMXP976xoS4oTJkypiPibL8STrFqQ27hSQ1SWqxyt3ANrGp6qYbwZ5wJtZKUG4nTUV54aD41SzHa",
  "key39": "sLJyeP2uJcWVyibtCwJbnsrAUxXxgaCr4VxxW7AetJbnnUMMGN9ahGMPsdnFCL7fKg7qmZVV8QLjGmWbWazhWsQ",
  "key40": "5E3m5cW4QgCgcfdYvkCxS7fadDxQnfCWfUMUMFeBEvTSJFDCZsfmw4GJNEqVEvMU6PB2bhSXsR6HH1D2kpgmf93u",
  "key41": "3WntaMjuHpbpx3Qnp8rSfA8ukKQTh44iDC6AjCE4ofqZZ4v9UFV64jo1SQgY6Qr9KkQantAZF4UxdstByNj3Fcux",
  "key42": "2eXKxQryodqxDwE3rKuMp6Tv5yBRmjfP42b9e95yn1Qf6QXEx97yxsvT4KP6oqXYSLad8xvRvKqs2JDgAFHeBwNp",
  "key43": "4Q61amQjMWbPj4hyUwXG6QMTKJfKp2t9ptWRQTckVCrFuszr3gkY1hnL5TUX5yB6KMEgeCr2oVgMCEdsB8qt63DF",
  "key44": "4mNsyJeQvhQEqzH2qW6wT44pRjxkTVuDWmmxPFtxkqSaEU3wssGLmCuQJLPh5znXgAQdh6HMsurRQ46fBR7LrufZ",
  "key45": "22i1YzjB4dR3ovVbgm2t4Z512g9WeSmL9JGyQKqhm27cv8d4zsKLRtUDmYjxdm4LHaNKTQpoqCDmNTThzF4mr6jZ",
  "key46": "PtHuxQputCfmhv5V7SncXbvyLctNey6YEN5LZUcT6Rc4E4fx5cGveiiDFLEi8P3TNdeoXW5CQgHqLqjjScYX7aH",
  "key47": "4oWnjeEn4uPE4c4cFig4gtkqKv9LfKnxA1SUVCx7AXidozU6ATf8zJYtPwqGbzKrct34YR3iYXSog7oTk9giuWRK",
  "key48": "3vmNCdHk3XG3R4DZJ9ic7TAet5cMJyVxpadEFKpZeL8uSbbufvw4zyJSQaT24rDFJh6FQqCNwGU8w5oXcbQA4NJn"
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
