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
    "3mrXu8JVUyjccYrk2hRKbN74F2vYEF6NK3qi67dT2crbEzKCuvow21URCzh6WuyvjB2mFTwoo3g5uGRU9t6WDaLP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T1w5XqDSZ3Xi9JhctZ94bbKJH9YrcLHiDyYKufWYGtypgdzzrbFzkEAFTatJjz1NRqXYBUdq4Ky4drzLX1619hu",
  "key1": "5mK2u2pV3UJeykKrGmQKRLDeU9z2hk74aNoiU7pyDqqVgw3G1qaKWEgRjozt6pDi1cza216nWnBhgiwJA58v9ZCb",
  "key2": "52EUBYKjNautwv7iDyFkzUQu85f37e3R3AuPReQwDRHixTwKMr8LL72ArqzbEvQAk5DPqb9bRQbWGY6F6HW71HjE",
  "key3": "3tFwk6pSgZnSt57izqvVtRU4ZiCsyp3HzscB9ZV1nG7pWaUX6Sp2xXTvfbUiikQcV8N2YjBFQPfZQNB51cWJ5R4E",
  "key4": "2qxmoGt3af3kTUo12EH5nog8Cr38hkib3sExW75z4unJ2cQyU2tiRoPuQv5tapbSBGMwwSf9YLeAFjvceRkhsW4f",
  "key5": "FgN1iXmNQuCHMH62cGbJfW2nJJU8MMRTSTDhEPMhSxpspZVSge2aHn2t3YNRE7UHbTgRyhQYaHHC3kAKqcBxYhe",
  "key6": "3KpXcHPub6r9A35m5Cxm9cWEXeBV47svxHPET12ExN31Rq1goWt3mC9Ce2t9fXdZZF11842Gedgxw68ezXa7wbX6",
  "key7": "2XNW28RLFMfECL3YMydin9uxGWwxrxup3AAbTv7nTzBkjhBAwhk3hck7rdQnKbQdZJ35bNu9T22SiaraNh2ycFgi",
  "key8": "4NLoGt2Cx7trGJxBqyp2FsCuZy3JDCibxVnct7VfkwyZ2HmRhBamRpg6EDr87KG2M5jYExGmr7h7ABmnizFHKnE9",
  "key9": "48ze5PpaCxsHiH1dBrkppULfygx89WUqm25Ast9Wkub64Jcy7QAv33SE5Lu3XE1NKR5tnBapA9VYm7UzUUHnF7NY",
  "key10": "3pPy1vYBqtrQMW4nunkVq4MNWfni9rZ7zX35YefFPBRhtW1ya5Fr1ovA5vtqxJyYVuJUUAWcwwdJLK7k8kaXC89s",
  "key11": "52tpzi3QJtTgAeo5o36LYrJYrwjBSXCqyjKeVCenMgxomr4U6X1sDtoDHjJfki2tWTgfwVRrVg3cQoUs1fyQV2kD",
  "key12": "3V4k9tAjm7Sih7AiUcJB7e1njVmhCEKNs6D1ndmv6D7mSxVNKcbc8HGjyyZaFQ8xbiZVPw7wFjbr8r99EgrTRrS4",
  "key13": "4dJFoetxCszPJfHu3Te4c9o8Ecx17A9PyDy85eeNV4c7H1RET1oc2DLqWEzRstRykGnNgYWeabzSUHDmHFngv82L",
  "key14": "QZUFfLdWtYqBZrC9EkudNucbdLxE8roxzi1Moh19GMdXBArE6nQHsH88NwjWLUuMf8mYyNmpLUgKiXkQebg6Y54",
  "key15": "2oD7o8eDC2kGuEYcf6bxTQ3kyBcTa1eQmUciToGoeRBm9FMXqLanAY4ZMJQCvLhJDkhwiLigQzrDArcB4p5UKHri",
  "key16": "N2VRqgXKkJrSu67Q8mtUHZ6VpUy2pZTA3zLrtEJGZpJ4AKC95aaCdp3a7iMzeUNGtb48qe5k9L2jXNvGhsRd78s",
  "key17": "2o7oGRTnQEJJgfunYBzj8rrTBaqnu8bVjW9rqp7pjjKJHedwojYadhbugbcraT6DW4jCkP1xPSv4YpWpMPCvsowQ",
  "key18": "2h4xuarNooZH3fQPmgtfBTsWxe7Bmru1yveLYPpFAnXcdnRfc62Y6w2QosJFymfqsnHvXU85s2JHMHjTBX8Uuaa9",
  "key19": "4xxDeo1qDMSKqrhi7MGM4mTY8baZysVr86txE25njUfLKeKMkZEA2MZbPVvxC53VbCbMHn3uXE8nQxZuWqKRTR27",
  "key20": "4mvgt92Cn92VRNeCVXaotoUsLMdHfAyYq6qTGuRgrAfNHfHtCseAgNNEoCVQ85EHQ3xhqsJRA4LJe7y9r8dHDtWd",
  "key21": "4kPwEU9nN6n76Gvu89rumep5uhEgivVamUxGBpPVqNLFhF3U637QvqQY8CyWifsTcapPHpVsnAEwXBhQUtLAhfey",
  "key22": "48vqNWmy6bLL1i1xtt8ev1pw5cjKb7Jnzk5w66w8pMNxCWz1oAF81c8b3hAYn4ZVqEZtW1KbFbSQwsWbJBkjoNEJ",
  "key23": "31NwkRQfqy3Dkbj8gZX53PT3HvrrKu3qh4gFmaUEbJSUb9t9vC5SgTUZL9YqkaeMndbYvK5FyzdYavXXhzVAeYwM",
  "key24": "DoCc4EfH55fdUE3ibYnX53Z2uCjQunHNBkjiQvYKwqqEE1dk4QyDqDhjYTkWQtDGQ3iHGa8oTqLn4HP9rd731i3",
  "key25": "5x9bvKML9HoYnvCJkcn1R5EjrSVjjqWgqMDixnHjvjqKiaxbzEnpr1ucUM1UDfiFtvF4yuxPar2nHBrKNj4xtqwE",
  "key26": "2kBobayUrfk3V1bUKUKmf6e9sG1N1xvRiYweN68SF1gbU4pbRWCFgU1fRwEJFmuuNtFVmevvVRRUbwye5AEkgpHn",
  "key27": "65W7wcQJUVkkxLyeohzpXVXovj93x2QPYvYg2JXjBLoduo4a8D9H32ggYVqecTcY1nmBFPLoWvHovkDhs5xSKQcj",
  "key28": "3vydXrAkSadBsBAj72aDXEELD6QJfFx4f7fJwM7WitLDn75CnYGvWAJumkUKHURGrQeR34YxZVjnLo9xNTYECZS8",
  "key29": "5Fk2qj1U6KEipFeRAoseocL7aZAST6DqQZhFBQ8ZUoEiwnPCcnMDyzizSmPWkySzpvDdQVQcm5cJdQE5DTuST7yK",
  "key30": "2iuBNkdPkamwu6Ezi4SFzboqVFUXRtScT3Gfwn6RZiis2u1Qm62Pp3gfe45CSg6BvQzozLnkt1rWotGg2k7dWh9Q",
  "key31": "2sB7EqJbm46f1hov5icJ5Uddog3vusxQSebQQU4oDDL8t2SPm9f2YRH8keYEa4rPSa7aA9iDfTmg5AaSYp8av327",
  "key32": "3CbaUkEpfwXNKKLYdPyZYzbQGBoXJcjbWJYqV3rERNkcosjGHS7sGXp4TzRnKPhsSZGtWdJgwT6uHVogQjNz9obi",
  "key33": "pSJa8xZEotWzGsGZg649fzGUu8mgDqEDSYyUHHUfPrNH8AeMJtQisEmgRbMdnapa8Gjm4EzkZKUgXceJ5GKtkCi",
  "key34": "cS2GWGRgEbm8gHXxM5UzsqALXDCtwMrPnYsNfXrvmtMPqfD51qLMHbYJeZbE7T6P5BBK2xHML54SqDAJhvLCfc1",
  "key35": "4gSR4BferJBe8yKDkGRjYszCbdVTDwPVDc17smdfCDGuipveQ1DGiTifeqCKNZd6j1y8zyRxScJu8YW985GXG1VQ",
  "key36": "5Axt9mP1i986hxZruyXY6ADfMWEqgwG912CbEtVJANEd1b65p9FyAysLLkkbTua5dz7XG8vSrj6e4Sibdd1T3F5x",
  "key37": "2ZUJqPkFavC7SDhjyQeFkhw7XMtxyFnxEMpkcAFSBtqwouVQTXxcmnzEFPUUUf2DUdRewD3ynwXjKYpb464ts73L",
  "key38": "39oMwweGq4y6oZtZtuXHvtGPg1XKVEW6t2dooap6zpQEyquBLUTxEf5weEGYCXwsuy7GQ73Y7isVfax6Ff4Ln4Ef",
  "key39": "5fqqnkHxELeU2wSpnw4ihyRHywibhQcKGG9B4xJvXrmf9mbAW6AVthJ9GLws3nkRDfvRp1AYvpERFJq4RqgscdN3",
  "key40": "3zddTPq6khG8vt5xdPdB4MzpksvwXZqsJgwoBF3buVnZKFhDbj8AJkQLzwg5VHo3MjxXeqSwncxKMXF8MTtWTB6t",
  "key41": "4YgUQz355E3NNGk7Qvpmnu3MKGqB2PpacQc4A1bMeEu4amH9F48NXbJnVgfcKx3DwTXPhwKbi7ce8VfJTtM8t74r",
  "key42": "jLxtYXBGbsxsgvS5VM2Kxx1JDQLt1DjGWuxXWDWZBFn1Y2Q7TNXyAhxgfhSW4yay7xYQDBaAUyCb1v6EN5LNMDi",
  "key43": "2NrDTo4NE4gHC8WWEfdZmM9iGdUHcM7h2M25mw5kjU5nSd2Pfcra4tpjDgGeCZBpQSVf7m5WYytkMQivhTQV9Ney",
  "key44": "2BDyuks5ETUzJZepjNKaeMceA6i7iEwMPL3RpbHkSqxhJhZ9KVs4DE5cRbmKeFrNcrhnqmSWbKjbRKx282VKBybj",
  "key45": "4yrbahXhjHMZWGG2HCo6FJJ5bep9dx13FsHEsEwEVJD9KT4fynQ7kKERcS32CTE8G3sueboa2YZrPUEC6XMu54oS",
  "key46": "5tkg7kAHYykDWyjabR5nYGCGc5bGSAFWX1aDuDbj649Z1Zd655Ng4m1ssfFagek5oZvfG4MBMsAXNX2NBeuEmH51",
  "key47": "YzuKAuJ2RL3dBTgtsEkfg2LvBY6WiPUz9NF4bZQFceR1mpSfEycR64rHy8cxjwRLmbndxneGycnBbWeMoV656mX",
  "key48": "2pnMqhL2hiMGJEkG4vPHs15bKsrQm15dvSfmHgHmgcvFQtjVhQfVvTaZ8maHjhsLRXz8p6dodqCVwGJorXrDZe73"
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
