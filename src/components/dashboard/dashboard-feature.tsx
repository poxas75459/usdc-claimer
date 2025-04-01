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
    "2wxnLTQ9GgDJE59jV8Df6jfjfuqtKN7my4PeHozfPoarpYkHMjrp7J2pDEGXkafMEUEhRGBdMwZh77WQXXxDiaiF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ca2gAWQePHLMe3pwH6aTAXcQH9jAgcvnNwv2PLc2JgQuXTEVKL8xnri4fhPWAfEjqDzH4QDQbdgvfq2LRRDXHyV",
  "key1": "nZZgdzjeKKvzETEsigDu7wbQAGTKWTQTQ9SjUKNVcFnSSBP9wQFMVDP7qHrEKuKXHH5k1zcvwkRJ3DptqwCKzHK",
  "key2": "2152rwDTRpdDpKWDxBbSfDtzCLB3M5xxsUXM8C8ELKKx6w3m1FX7XoEu8frdGD3Q4rjMmHbku5aC68ktGjms3hUi",
  "key3": "2CFZoCL17yRxgwGaFToEfmywbBtBvX9FcNyeUjicZ3vFC6SXn8o3nWu5A3QYhW2whyUKBDVLHA1CoT3pBSui73Ch",
  "key4": "31YE2Uz3pWXKFLNnHdsvfoemqSFGB4nwngknT1VPByhoRwnxgBDBJLVu94AvpQqgjhrGubfuJECTWWn8D4FfpeHr",
  "key5": "2BiNT7g6UcxEbxdUhPhdXnVPosmEsx3qWLK1KVAoaR4XLq2JRCzHVd7wGQb6drZH8bA46Ja6VaamMNSFbExQKWjY",
  "key6": "2LKY1QUua13BW88rJzmW3VcwsmZciSzLK19CeAMuG3DbVsN8AgeYSDq5Daxz76FAmowztwSuZN5sCYuvri3CTFWi",
  "key7": "5TUVSCbfZo9nozZxeXjmUZndn1xw7vq5QKbqvgRjHnyHKAucfPBHGNe5zN9Ss9PVbA1TWq9kqAJMZJDyUhBTyXWh",
  "key8": "4NJJEhXbZooFsSgQNAA1y8NGVZQy5h6qWzW4QEYyS8pCLHRjFstF6HQeuoJ3vt89cfsjWLEzbYckNcagrJrRinA9",
  "key9": "5TQHPKWRrUTax5PYyYRY2Bx6nYLvcWJVZm93iQ7DmYBkja5m3rm2MDN33JMrTRm3xCDKmu2gRRMDaXpxbnnt2ycK",
  "key10": "4MpXzxrp7gihyuyo4sKVs5ZqRwUQLUNT1B3XZy4CutoqTiHZr5XAGh3uvnwb3TurMf6BvJahwyCEWsPET2QABEuD",
  "key11": "5fJEW4Hp1YXRYcSkcBtzZmKEhaJ8tpXLvzwm3zfhcUbwCSsiB4pv26V8uSePR83bGeZDiXZs5pWtfYKjP74wsYHf",
  "key12": "4kJpSxdyHQEFE1eNV8hm4JD8MmRyiffgB6aPk2vchKyuEyVzx4aWGJyPPfumFG3b51mUj3PTm44Yy7yBAYJA4WqS",
  "key13": "4WWoXzoSdzGcXGzDrbrn5LUHSnxGJnphkdGvN6sE4ML2tCfWDGVQJHc3eVrLrZRiYcG1NCtiWY1ZV1seJbAMEgG2",
  "key14": "4e4Sjwk2KnBskT8uwfFacoe7Jugb8HevvHkWePzHbKdJFDzt9Rqgpv4vKC2msPwbrhPQ12ticLf7xn3HHXaoXdaJ",
  "key15": "PZG9fxLiVs6aPesBNTXaUaFxeEoaHFQAgs7kZzDZRLEbAj8hiGggEssbTNJmELkjBid5wAnUs6t7TJrwLhvkLKT",
  "key16": "4d1mNozAsKMVBDin2cFXP1KgFccD57Hsu2bRprmu9AyCQVVENY2QKY2if7Rd3mCr7AJSDKbQbiX2haEdSagFrdXV",
  "key17": "4CGdVHazoAEQPCsQgQ6uxiDhbh73domCNfZqT8ruzBV8wzyVcb4zcsTjZ9QvMPBE2bqLQ4Mj9rGjChKjearaUKVi",
  "key18": "4AM2WQpBQCDmmZMekPPUpeg2iXzoRzpws9PY7sx8xRHKJMy9QPNeh2UYbnDwTmEyeYLQKZgw1thg7gnpJ6R47N3g",
  "key19": "51ghZpj48erHkjjGtCtpLstY25JTcccrFyWUT5JL98Kyn85fuDypJ3ETr5nN9bQfX8FwjcEDG5W34w3sM6NRE7bi",
  "key20": "39WAHBXnYmZAKBFRSkQte3p2Sxc86Jkbxa9e4kBhqAqeQMdJePNQft4aEyYYfB1Kt8WSLUakR1uLLU5CDZuLXbev",
  "key21": "e5uNsaZkyxLNEF3ZG3XHe4pgNZQHkuMKLSxGHB9cHnRRmXT6xgtc4C22xHtCaySnNgwbQPjSrBLgCCtc5JKe9hB",
  "key22": "4XWXnuDauvurBEFY34nvjQ21NbqGDoyoj2sUVbHm8uVdbf7CXayCk2NUpWv9CXwsFywJjoZrMnAm9wYhceQgTCep",
  "key23": "n6FZcum4YhfYRjPMw9AoGqSwh9he4kWza8wak5aabfZXrZ9MQd2X5h1kA18FMpNiY7DDhBXtZk1XDscjDnTNBA8",
  "key24": "4Q5gGps4JqMKzyxXw6ZJeNnkM8hSgfPQPh9TEv2QV284qreB6TGAiKpgzrfJc6w8M7D9rZV5wYJqG2TLudzjHnVy",
  "key25": "3dCZDf6nnHpgej9b6kpNEjNvT7PT9LCBe8Hy6mCaNnq1NHZcs4YU9dEedjSpcMWsb3iy6vBzZ4CJwKcSFd7Sno6b",
  "key26": "2WXMMxp86mgFyHW7rjLADW78oSJLF98rqyAkwugeeaUqES4GazxBpooL94ZJvbYFhawuWyFtSu8N7dzrgfQ9J5Vy",
  "key27": "pycn8xHBdoDfvcbZWxX3wmdfRZ3ktDcabtEuDKTkwFurcA8nap6MMZDc6rQUsbjt2wuZ8ex2QrvmRAhpafnkbHz",
  "key28": "3TA1GNqX189Bxd82K1faaxKfi5UcnBv3HtA7Zn8M6oof5bw4sVC5E9DWSSVJYjBcE6bcYQKGBNYGpEDGCSW9yKXN",
  "key29": "5R7GKDHMWDJyp8wkE5rbMjuNFCHrCwq5zsGDe84wMeQVA1quXufSek7u51pqwZ9TMXTeNpurv13jyeGoJnFeQHow",
  "key30": "5CHHBa7nzC3KffxsvGEiyNWnRKZDnQKY5dsbTr3t9zGpuYQgSMszcsoavCnCSTkGnJpSyBnchMxJmjJJwK2sHYs2",
  "key31": "2sXLQzUxpjnKAvyTZwrW6VwEcmrJuJreLTUUXaw9xUzeTs8CNaUDMmWuHwVqNn2vAp4FzErGSjVEwKbCvSGppbyE",
  "key32": "2YVPvDVdMcaw4T3ebtpGebmUEZrY5PBypo2RTAedGGyVjkX4kHLXD2mk5Cs1cHs62ajNPRgWRC3EZAuY94i1Lw3W",
  "key33": "4SZY6ZE1QUaWFG9BDsHzNKYrzAMc4w67VDP3yEnANCH4h3YuPTapQmJ1mxdaV7KX9XwYhQUijPr2uBuM2LuULCzn",
  "key34": "4vUpVD9m5aH61mUC3tTYGwECf4TadzEY3yMV4YJcCSAzieXUvJVdQT3mxKFzZ83KZUGZjQENAwohUFwvTKzBybCA",
  "key35": "3CcBNPk82cvkQfzZXLZpfN8eiha6tAfExCEsXcBMnLqqgN2zNue2CobYDT2mEHa9J1gUqG1VTfoBSGEuDfbbMhg6",
  "key36": "3Zw9CYGQqoVCuv3cHg5wwBApgiWymq8SNT77sKCKn8LcpJaristazTCibcQptJzmKsKiJ3QJbrWJHYBdwaqVyQS9",
  "key37": "27AiejvijM1sRLUF4AvqwtDwiSxFJHgH5JZikscRH5ePohPYkKGKAeYXr2fMTyFRd56AXY4baF8QNGVx7yGeZsNQ",
  "key38": "3AZ2Qj7ffiCcqnv4CG9oEGFQ21ZMQBPaRUgqGKriMUvUwwrLbD1eD1Bniht4xZWSM3VT4H9q324bv3ogpkTWDDmE",
  "key39": "5aRP9UDihNKDFZ3HUNsBHtxudtqRoeTLJF7zyr7DwTHNrVP2FGdjKgtgQ3zSUsXiR5cYeijo8Bbkikow9tMzz6wQ",
  "key40": "3tutA1rLeDwT6FNVF1xoXeZPf59eZsrmXMjVip9cX15Q14VQbs7unjBoyuvWXwvz9hjQCbKGpQJASPQvxJquxXmu",
  "key41": "3dxAq5Tof2uQgQqvUjGwhkV9cAgAFsyMVokdjLsMM7A25JD1S71hh2ix9YGFy8M3gDmn13zz6w5fhuvDTy8fU5Wb",
  "key42": "2VsE56Gytqoj7VGwoz1KGnzCr186iY9ADa78LyV88YxeLgDESWpDVz7GR9ziutTXNtbMV3bMkgCohPFnZuKcYA9j",
  "key43": "2Y2FDWYEkRYLJRZw7JcHRPvrRN7b63GbwutZE42qkgVBVpqpjJ6oqV2VzDpjY3ho1AwEaTzQSmdXGqYL3GqjB9NK",
  "key44": "5CdxyN6cddsydJaVPBG5wuJwDE6hh7FhgnETFw8ZKo1SMtQaFA4w2pJG7zYkUjxJwBdoskYjY5hVjUFkAzZ9UBgp",
  "key45": "5Pjfx1saXGujnXWbLExmqsVdwdApgvVwr7jqtep8VauFkNr3NDMYRkiQs8LYvLet9hguxpwPMoTcqTKP6x9Nr5Qu",
  "key46": "58Jv35cmbtAWCc8zXcZkX2UvhBmYdrxeLNNprAbkiGc3znhYUoNGnGfyMfi9YyAJpcYxfDuxJzuXow2Hi2sxCpvn",
  "key47": "C8kPLfd2K3xTbVeyehx9LDVhBzybmspqCXVQGDwqn1QSMduNbJHXvCfGwgj2rU3KgdYK3dti1AvbjGGD9Kf1kmv",
  "key48": "4f7G5fpKCr1Ya84APwd4CxQeK98hJywkoR8UnuwxeVmh2CWCGhyKiuaMVDAwpxpqXefDyqJ6uQZdaW6Lu8tb6zAC",
  "key49": "2J94UJcfvYRFftwWVhYAAH8AdN7SaUL7HBqhzUEr1xxUtSFLhHzFCN3ZtTV5xK3DCJXd9wM8PSL1LiiKznqekQ4A"
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
