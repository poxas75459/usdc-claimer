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
    "5nxPqMzA9UZXQv81seFvDhXPRsygrSvuWvA22Vx1Y5RJ1m152MKmurGYtAHTm2cFvqEUjBu3uhN6Pa7973BUFHHc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9XboMb2ZuzjhpXc5Fe9nq91xut22GjDupYsQwTNVY7Luif1K5VmFU7L4VQJha9BxFZHrowuwBtJJ5wpvsTTm4EE",
  "key1": "48U32vnFGDafgXxsSMEWMbtnF3bGf6ULhXonbwGTejK6sBQxGJ4rbn18caRXQ3Y57naXcfpPwMHfJuKVMqHpQnfz",
  "key2": "4C2bDWTxEWjvLH7DSUtL6X6GpSxiDWFhjqTRDwgQEooFxCMZ4Up2ZUci6QPt3C1ep4XyM67eTC54a8oyavMQxFi7",
  "key3": "vndx1VW4vmZfhfCj84D85z1RqyjiuhqChJVR643RrQ9eapr2AVJG4pU8QzymK4HEniBUNvB8QFfQw4Q9rZMGGn2",
  "key4": "2LjWnmTmmM9NgT2NnTwH6yGiusQQn3z3oV9DLyyZnwuFTEaJRwRXGyzNpPhQ6Nq6fh2DCxpqeWpZ4MzMeY926dgG",
  "key5": "3RJJbtiKiSa9uqohVsep7Cyxng8XHz6ZAWdNSq8e9tCM8GEMR6vQbh4q5HoPLgGTB8BZQon7czzGcKV4HakgTqVF",
  "key6": "3hX3uAyp5UkGhcRQgGDx7MvYvhonUMhpWafaWF9QBHEBJdRCixuKHC91icd7nTMxemdbMxqgHiG8w8GM56bxtehN",
  "key7": "2LZgVyFmbdE7WgivEqpvUnrBtsvs3t1vUeba2e8y8h3nstUKbt9gaccuGyZWqWtpUA8csj7YgKDfvqUhhZXdZQgv",
  "key8": "59XbScPFxNW8tKGBTiJF3RwfP4Kr4UrWownni58EKBAUhQp3GK6BFWPfVyZJC827XD3YgdRQ2jFEnJhwL2fQEuJL",
  "key9": "5aKtSFgeuVLGqgqUMw2n84Wno25HPxcHZ6xXmaAcVvuAVBBvT3my61XBLWh4x3CPaMxNFv1eZdc363XDtQCyjuhm",
  "key10": "36S4ktjtKQVunGHiunA77seGYurWDGn4gwUpNG4uhkokbhsVvUGZszBKoq3c3xKPAusfM6ufY9c7nEnGSDttbk5w",
  "key11": "3TcCHgmHM6Rxkn4dHRuiDvZ2tuNb9g26Vd1v4M4SqQdNLXfZcXAfqMK6JJPAPqcyoRSMLHz6zBFCpRDydvaH9oMf",
  "key12": "4B581MsNcS6X15WGYkHPPmYu2PtoafiukSCSvbTeuUwvDWs6KUT9UdGMEWRZTZECgbyDsqDMW3ZYs9vFqgzgTHf5",
  "key13": "3zsA8SEcFmafmxkhr9wHi1SyDuYDSvQuYQ3mq728x5Sgj2GiEeYdyaf6t2SWPQSu6ibQz2Sy9g5TmcnXu9GAh9ai",
  "key14": "2sDD72NoruqH6TsWYif364cSqsEu16HtNVrdwjvDC7Z9KAoaggiHM9f5GqQSYL1GnKHwPvmzRcZaeWEvcAPC2GGr",
  "key15": "5bPnt6k6kD7qov44frJeVwZvYjUsrg1hrbtMNjA1Ub4c4C5ZJg8febNB9euBo5qifGr9ZQ1t1PQ1LpphbahVRuh3",
  "key16": "2rRGCNWbpLMyZhcF4UQBcA8592kgNd9LQCKyrc1K6GajRbRMwnZukBvJBmzPB8o4bKkBVCvV7ZqcZrsEs4VsnNxa",
  "key17": "2ysE1jHZ4nQZatQ4q6urqssehSrkveVzq14kmsjZbjGjYtAC4UQ5Zrr4hA6hBkb5HCVddmFSN4rd3P62SAPxdaXU",
  "key18": "45HR5rjBAM4wnuGrRYwKmzsLvSgCsJyNJ1Eu2WrrDyqCnLmhctCySvjq7ghFAMjiNAyRpvyMEEdZzWAz3tc6z99Q",
  "key19": "3WwfrUvcyZkyp38KSdNhMHHqvDUxaEMEpYVJcPqfKJqoXvwR2KEFXcMKXDMVBSyftrdGx7rytsoU9b6FPk1MZNYQ",
  "key20": "3u14MuLf7rRrSFyvBuPo9KXydi7yoK7iD77HC6qbP4Tpy4YxFTV3UtsPsD3b6TUX6ErmC7mwsUpxPh4EXwFTjsNv",
  "key21": "5B9Mig4GyAsx1Stmwj1j319gZgJM4LzzscQLhqPVSwAAfsTiiv86VCYpacYXi1jcYKSFHT9fMxh1qdwMy9uT2ZmM",
  "key22": "5JoZPjUVMsuqe24PdVBrPTDzPFWx9Wx7jc6axYiWLX5pV6HHV8dC6bMMRzEXqqYAufBM6Bwmq2HxP6xTUr5PAtSb",
  "key23": "uPrJX96XcxyBvgnArDXUnmQ9xGfYp56qUzgRvb5sUym1bssCeFsk3UbE4Kjb3pEZQWp7h49LErG62fgLbEfX8R4",
  "key24": "2Y1kY2X4BRpENApk1mCyHiJy4SYzukQgFL9Ce1JvLUmbhxQTWr7AcxQEWkZj5x3hx1UiEXZwAvjUbBLQtbDcGj8a",
  "key25": "3kHFj34jGLXTAWb98aFK3gpCvtYMYVXc1xPL2RQUeeLhbnB1RN2wgVx2SrokA8SeB2nGhpaLHTibtiqYZBh7vn4x",
  "key26": "5cCuF2gmeRF3BJZz5emkGg4PyFmDHUadAFdycuRJMfFDcGiJKCx2Y7Tocw2DYQ5rj7iigHSkBvDBhc66vUXQJmiY",
  "key27": "3mbYWDm1JH66gXvQ5koHKUoAjRUE7EzxjoNgjbQBq9ZyxRFhDCnUTmnqZAu5Ae8sjzQ3ryS2dvZxgwkVUDW7nntp",
  "key28": "5jaZ2bgoEAeE4Di1WmYrxNu9148GKQSX1gbSqFWV19zdcFVpunNHJiD1bPudeCkYygvwP1jpWF72dSE6DtLKqcGU",
  "key29": "3beuhSVqrErVc8rSR4zUbCrSbJpqab4PiwXv6FhhsiebqWJuw1gm5dD2NmLrkp3gDep2M8jncy14rJRbhaEgYKio",
  "key30": "2caQTjnNetow2RYPu9gFaAcEZPDF2QRni6ryPUbBrQdR4D8Rq1byBvGKnvVnYroa9eQApzNQ1kdTwmyAZJDUWN2u",
  "key31": "5dbbAGByiZqz2S96iiwvoNPj3nHLLCVgzPzqW6cBsv9RJKngxSeKzmXswYfVc8x1JWgVuGEedCbsDA8XrXWbsrEC",
  "key32": "4ZZgdGHGgDFSoEKoXJLmje8BUAWqWpg3hbgyABbpMbH2mzKtRertxCMPKh7WLbAbaTzmahRibGqW5bUzkY78jPK1",
  "key33": "5Yn3Yxv6HWX3SstenW1HS44nXdWErBqn3VL1ZFdUhme22zAzxav22VH1w8gAiAFzTT5FXDjvuQjHDUsqb9dy1XPh",
  "key34": "4o796ceUjW4P2rqDpGdNzqzoUQXECg88BqMjcDjuKztUUbKXUHXDSTPsADhzymbou2eFN6Prbz1vHt6NMZmRvLoe",
  "key35": "SksxyWbYpt1J9SXyfJdxZrbN3ZE46CU836dnpLQUzqTfh35bnBePKf2WXcwcocYqCmpc9xxcu3LuBfN6LvVDybA",
  "key36": "3Y1cyhgbpDuU3Dn8fM3uikgVJRjJEVE6w3meyrrcr5ycL8vcka1jnpgxP1hdWvfs3ebjqA1o3Z4vfen3Z7zezbvS",
  "key37": "37kPFAtGDZwN7VEAvXdgvzWVQ7eJ7RjGbky2g7njuJ3wmFtaYsQh7rKDHG8tu2TeMAQNbbDoX589RAiDHYy3aokt",
  "key38": "5NGtGm9R5wrk1KDPLgutXQyJzGmsGyz1URKPjMc8QDUGgKd5Ej8wJY7LyX4QgvyJ7WYGsSmH9ro31YJWZXyF6STb",
  "key39": "3qXuGQU4Zs4QJh7hSGVoeecKmLM4CDwVf77wJRiwuvbKwos5pY2jtcdkMa6QCcCwmmMzchCMi7qzbCREKYV7WNix",
  "key40": "5M6rcfFEJ3S47QqtjiQynMjAhY8JzarqJDtEFn2KBFjn7SSoRqNts72uBfEB8CxFJPdrXGbvmKAJtyppH96BhbUL",
  "key41": "Wcb1GCgfv233YV4DX7kFsPCezbbXu2WSkq9m2ELJdSA3YnnoK9haprPr7rFr67rEnu9CrMnJo8rGa7gw4DpEc96"
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
