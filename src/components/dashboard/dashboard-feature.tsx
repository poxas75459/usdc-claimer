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
    "528FgdDrNbcP2pxpTRVCDpZSSXWoFDewi8Ba52t4Vy65rkR1RcsZ1YaK9tr3j3XAoEW971ikrCfFQhewWPvUxtnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BvxaLyonD2NKtrSwysyX1sQA8vjMSXjLbX5BDmBayEVjHsZxyYggPstv7surGKVstBpKoCSrdikKNRoRyZWMAer",
  "key1": "62VKECuFhyWThWszzK5Tu2FfeCxLsNM57V348NBtitLxXHzh5uGJMKY1fk3ronkWfRe6gmxvJAk2N5T3nU2Rc8ba",
  "key2": "62HcJRfB8ziM5BcR6jfRJVD9teTe7fbrvfdHi7R53LBbTQjpAzzC4ASmv3PvRY7vkV4Xv29xDfMezofUopQnd1TX",
  "key3": "5CpCEyRFrXhqVzkhHo9CRG7vCKtwXkye94hq2XYvN5btximpxAC4F1RSQD9VGZKKnLfc5x4FWov831pY7zTaCXz9",
  "key4": "mqTUdWhHki7hVUu5nri4QQdCTBuDP4yw6xvoi3fnv9U4fiG3amPxaNMdtR3EyokGqDVzau5p7y6i2qZa7Sm5YRC",
  "key5": "4QmQNdYWgPkZZq4cncGHLejVbA74Scfm2gTMq5ityNVyH5giBz7ALRavC6nB9x9XdvzKKRVYQbHJmcj1kiyzeKqj",
  "key6": "3awiydFZiappfg87d27rZr2eFhyFCjSmbWavR434ufFDpJrFXqWPMLEpkTMuMzP36o1nV88ZK8AwJ1LsHz8fT2nz",
  "key7": "4KbztvzQxLwUA7U9Bf81SyaVHADtrch2AMjdN9AAuDj3EN3PzBkVYwCZdehHnR7df6SSvrTBQ7wU8gMWtRXBd7KU",
  "key8": "3HhSCb8eEq9BtotWJPvk5bQQYRgeSErmR9L1foEFPDY6iEddGr6fsxbs8KVks8qJvVg5xTBekjg6MQgDK7JdZSnV",
  "key9": "3X7XoYRibnps7DJrRiKmMNKjLneubrYw4ynQ8MqfUWHuKhvWGz1wuAGbyWpwE5busgU8QJptMFNiyRXKinSyeFb2",
  "key10": "bMEYEYUr1GLeveV8vBT6wEJYAYdb5tkkaxbbJYW9WPBFBKdR9f4CX3wn7qE6ZyCbWmT9PbhsSw7qz61grJMnnUp",
  "key11": "3FJZJQjsHyqX4sCpb37gzXC3ajnucs8q2JvSD4CNPftQKgySzkK5eScvrzLtBsukcks81QcXB6kZQWYEBWBH66gF",
  "key12": "4VAwP2eNuLp7U67bi6TSMrSB1LMJkJ7Epj6298SPFWvFmDEo64CeqMGENYUc9j9oncCuxCP3ChqsqQj9VoUgszh1",
  "key13": "Q9vbQTLf4ZiwCTM9ier7Bjdhy1Ven2YpoHzZPU8tYE6cyj24GvSf8MWnhqEnMnZPwbu3bWNz7Jf5dx4VokjZ4Lt",
  "key14": "36mEVkeZpN3ifbYDTkN7ejborS2EgJD24AEGhB5ea7JFExWHfLsq6VaZn3AajMTC3ks5hAQxnUrzshfZ6QD3rrUi",
  "key15": "3kAiNktbUAwHoFvMHNczo5T8ud4XXcEgxrdJHBk4iKwuSGEBdtoXutwoivr8buDJJztxajNtxMEDnpTaEtBvCT9t",
  "key16": "2zbBm14zwZR5k2qepBG9NhebPvxAgBrvcvUH1LZ8682R55BN7F9c9oo4btvmYNC1QigAdEk4A6aj71qqJ67RisPL",
  "key17": "2TK9dAGX8auJB1yLP31JR9WBQr7PCZsxZtDNfQ5QYhHsEHS5mbFyGJUGdB94ZhKnPVWbrNWEGnzPi4qq6Ps8L4YB",
  "key18": "2mrTJ8p9u7pCMBB4SrCjd1oHB1jUzjWZ6rXLPc8Ut9gYAwPYQM8Pz1GAMRyZe5PBJFztwVX7e9PLJa2hS8RkRyjh",
  "key19": "3AHmE6ckoVZJWBn5m2F81ZR1vbVCz5UGadNndX7aYDgxR7muz1J3QZtLjBa1NWLEx5jjAeTVdf7PBduVArsMvxXp",
  "key20": "42pAhAb1nhTXyuerGzJtjvzPhp9xvj8AexS77WdBnARr3TubSSXWR7JXtThvtXZ3e8e74YbMWk4ZwEhJWoVaFeCC",
  "key21": "G3dFMqzNnqyGgLmiBc47wpGXtHxFHNRZLze4gczxm9cVqXSx1pN4zmF4oXoVpT3DQCmyr89N6p8Xg9DsbBCcwt4",
  "key22": "57H3Ju44i3w98zS5NDsHTtwNBEXsMi6tz8AgM26ukw8LN5znrFW7i4jRYu98hiFLEvgPJqGETUVTCNRZD3pBSLgA",
  "key23": "2YS34tg8LJ1Y1iELHM5xFnC23N8GGRNJDjgN2pruD7A5j6wznnUeLrSun4Dkvko3zdHoTfUqnvcXSSa2c7v3Unb1",
  "key24": "5ST1kyEbjxhcqLWVrTXKrSgdmKJWAXpkhR8JFkkuYNvYfjSp5Q9T9gTKsXo5bF4gQ2HTozPJ9EWnzujuG7xU2QpF",
  "key25": "63Fb43BHweNLQLea6euxDN1q5MzXTXAwNxcTxYGHxN5DVvzeZjCtn4uhWQYuhiaQ5uApYz51nSxWnTBjLdGji4hT",
  "key26": "4LMnHK248BwzcbiskLHsv5PbWrAHgJKS4zeZ8fgQcMxQZj7ENHqoVFChRChqTP2hQEkb2p5fJXh6C96QyCLc4r9t",
  "key27": "wHdJPzj7Z3oK5QVa8Qk3gzsPxafus7rwjoS91MChmaSUb5TXkzDwRutYLtYRX6cjXyryhydjwvPdRxypAcaEPEm",
  "key28": "3xmCqdFhUHi1GKdMFbt3P3AUrmtH7XHNKJzot3vRDhphYVUDkDZcg9DUto96evwX516N1aaoiPJSsYkYURw85RS4",
  "key29": "3DAe5h6qXfiyLFofYbGExNYnWRbzskAWD4PiYUUU4KuHxk1T8Qd9q4YADX3LRuRDDu6CACbz4bnyfZu5y5aMocH6",
  "key30": "4oeYeZutoj9E54hk7hZ2bT7XAUxs1AngBZZmhTkDTZn2Fo3sp5jbAqbX8JEgpk8MaPsPoZskjNeT6Z33GaU29AD5",
  "key31": "2VW9NP9t6PU3bEiWTtNJLPVG1goovThujh1iuiQNwWVvWtxuTXuY4LUaUAFQyGjSjYYEXzKmPumN1bWEw6UbDaWi",
  "key32": "64PKSe1fFdijrf8sh8zaFqaLjfaCmSHk4svVUAqydcZgHpm8Z4Rhm51bBzR3AdS6VQZKzindPt8qcUU7n4YSB35f",
  "key33": "33jWR8xpcT3q8kaZTzsg78rFP4VVXSMiNyJFB9ApjndKPGHfUHnvqmuft9owberH5rMrodQiYYbj47cSiUaeMZor",
  "key34": "5prgydy1gaKbegiBzS8LtUpKBYm7TfaC2JQo8C7kxLuZQqb758zPzJjUab5M5AesZ9UAsmKWGYpT5LKKjwvhMXdA",
  "key35": "sfiJjo689ZyEmKhRh9ncEnTeevfMA7eYoWRWWMJX4MEuW2xupVUXBNo16RnfD4aPrkq8JxhxXKzSvDzCV4Kg2CY",
  "key36": "5wt5A9MrthtvZF1yKDRGoNEdXE7NYfW8EisFnZvijLQQHTizPiWpjjfo4jg7ZLTHF8qqS9waPas7w5gXUGRMo1Ak",
  "key37": "2anpK2y44FCtxcgHM7nYVtaPpSeECziai73euGdwDbuXSBT1NU8BSS5sphfV4y7SrvRKcK3Nt2aPUN5K5ADSzdJ5",
  "key38": "4N5YC2yPbj5zSEks3kQUZ3nKG9n5EQBBtk4ngaEecMh8ps9BQai3Wyoa95UbJhAU1UeCA3QiYNg324xi5f9QbDJb",
  "key39": "2K8m9yi6Gswq7sxHWm7pZLH3svv6YzbVwF4y5YLaSNQT21eRRoT25weN8AVAi7AF5fZHyYnok47pm6ywWtbWyXxb",
  "key40": "3xAoXJEWadaj4KHyhWstnt1b7UsJuKYt7JondE47Ss5VG6YubjBmyaqgDCHoHiW79wqYHB6t1MRNx8KnND7ED7aK",
  "key41": "4GVf8pqRsfRq98eDGdp3K69QgR4WzZJwzGPynJMDFkzsmzkuitmoApMQqLaxSXE4cEPmkL7e7CdWxCVwnJVXLwUw",
  "key42": "igNWx4DGKeA5EwhkEJ3RBudWE1QVa6vDt5J9HuAkYkn2XGXN6CLtSTrASSD3ewrrScJicxwUmuPaR84ZC7Gj8cx",
  "key43": "QWadS6ZgCLJyxph5aUimHozstG7yDz58Z7SSuDuqkw2eVWS6sq5W7g3cBPzvdXfZMgT1qHnSuNfy3wWKc1n2ZmY",
  "key44": "3v4PV855mj6REin6wEHbF9jKyVrqj5LXNhFK7zayt85EEqMnSYVwjA6uiwgKSq2NdQGH1koRZgUbSuuUrZvZ8UEt",
  "key45": "36Qd9L3PxCYCuA24F2k56ZPDGXzUHsSFGKLc6gvhaqtbD4pVrHfZMR5R6ow2GSPs8pPge8e4wBbwD4bTf1mbefYt",
  "key46": "3jFBnV7qPbPdhFRiPbZjajqnAB5zeZudWL9PJ75STKQJJNBQacTd2kJMFtqLiiQVxhPWuBqodPKXftLCmq218paL",
  "key47": "2h5H4rnRY5eNfQQe8VQogGR4YFbgSfSmtWvBK22hLgC3BNUrPZFMSit9526mNVZ3T9sYPgmakouWfNQTKahBHVJ1",
  "key48": "4n1gkndmxr8aCfefLNSCTXxbB8yqMCRcjgEG6zEZajQh17axqsJesFdGQ6K6JgsuPnnBpP4aLe3JYR2p92yHm7Gq",
  "key49": "5tU9GCNCvKYFs7BY9H6S52umqtehVfCyZfhTHKzhrFXsdSbTBR5iNt2YGvaHQmPbQZjpxzA3qDp5Xk2ZHgu3rFxY"
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
