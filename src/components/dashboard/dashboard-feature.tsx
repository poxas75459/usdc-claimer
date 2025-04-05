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
    "4j5UqjS9EFrX1YPVPRxGG1KwGc3VciYfwRn1RtvvJ6GQktCVweeUHFrwc5q4nbL82xdm614j9xkxr3jRJnLWNUxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qqYtYfmmDqocWE6RU9sQtMA66hNwxw1ZBvbzcn8uxiPfaqyQLeLcJPkNFwXWbEpCLLLY4GCpALmzpyT1EmrFzG6",
  "key1": "2paJQNyVcyRN8Gs4rjmziM78bUoWXf1wui4vrsDkND5KJhXrLRZ5pX4VDg6iGMEEFjs53deEPTHTdxyp8XiEAMLQ",
  "key2": "orDVfVNHV2K5Jt93iD86X7ASA56vSrxX3JGrnMKXV6U6cEkUJ2xR48PYdyCwXv6PJDQcputuK8U7JaKfAK749RE",
  "key3": "2Ema3sva2ePsrhJXUiCCBW38ETwgJGjxZQhkyg5bq9vUA2J8GQnmszovZifPxGFBFSaTbBwy2pJnysAhFyTBJnsi",
  "key4": "2tARxegEdveQTftWG9xeWuLn7jL9wLSt595mu3jpKUp2r5sdJqjxUME7CvC1dqsKENmKwFCL3KdDnLfkvPviMKwJ",
  "key5": "5nkF8y76bU5612jVz4wv51znoby88M2hkoz7bFzRiBjcws8e4ipL2gAyX9XG2AxiWGyJytLKpaMijeyoUEExhz8t",
  "key6": "2UubWH2FPEYMqT6sZXAJLSZMNWTcPFxvonpXWoorv6BFyjJKcuif8xPKJ8YD7Wf67WTRJPvECaqfwGqwywK522Sr",
  "key7": "2c8NnZjq56krZ7VD6Wo8QXpNg8ZujmJnubAzhLCSa71dxne8NcFSCdUikhuqsgd3VRhmnsNVwGo1Fn3DsgtzSfA",
  "key8": "3gWsK2Gwooz16tiDAxD2FW2KWorEXxcAEySprmPi9FNW6SXrBUgjWkHk1k62S7efPmRXvwF3mMU71hRigW6rUVa2",
  "key9": "PjxUptWvYtCXXNCCUo6RcwZWDDpbhthLp17RVZtcdrMETxSEJu2SD4ephr8JCdJsci6qEC6mka55FFaPyQtYA72",
  "key10": "SnTDXGgFj5F3pfA1tGEUDWXNBuKgeggTFbMFY7YcbbScV1az4rLeQaxNTK6EWzFi8fGBkQiyHzDsZj99dwbBAPT",
  "key11": "3k3nMnDjJN3YNiAZCwHvWPYvo3AXtiyRL5v5hqj9wcnT36fRknoNt6vhKi7Pbxztc4PRk8NWjXqvQwJueii4mV1w",
  "key12": "3iT9DwsQNV7KRqbkoY6WLHk7Bn68nQo624xMYdzTo193qM7zThgdkUq4ctLH7W3GxHLcS7XVTPCHkDi4tWfX7V8W",
  "key13": "3EukWeqFrwJejCGQM57Qq3eehe6VHCprQe2H51FQptwmYoJ7mAkEgD9eGYSJurra5o5ucZz7eAB5oAbdjRFhtevd",
  "key14": "5uccnRNFSDE15QZWGGRdn7H1cfZnhzzfCbgAt3rJDRFhMnoUqUmaMpqe6FQNFH4PddLUqYMz21Y4C3Ba2B9ani6b",
  "key15": "5hgFCa4may93yZuY5WQCuvwC125UdCX4wcDcWANqm7AJEezNmUHG1SoroNL8Px7Ycvp93MXdC8McY4F5wNGdSEKu",
  "key16": "3QjYNth3NtSBTvaFAJjv5nqP99YVaUD4L9ixhFFVbdEveamVnofe6NoscjUZXm3eNd8Qn6N31FhWrVkFFVEb5KjD",
  "key17": "2NwfgU3m7g1arAqcvpf4wS9Y6Xm6DaSDHa7iGvSC52L8qoMv8ccY8p9hbtjYq77Yc1Fu3SYnDgfqyTDeirpLeXxn",
  "key18": "5rgtYinHfUZooAaXT3nEKknLG46c6m5XwBQKrte8nZ95V69VpxTPSFr6y46UNf8vUep8AmenbF7sSADphNdAWbFg",
  "key19": "2p5EjsLETVJmQc7yGLPNCAyPVHZocFoAxN5psx6Za1mAra8hiLJgrTFzVDAEe5aPTjqDyC9EQNBJyqi2tWaXjyxp",
  "key20": "53RfLGmskY9kS3E6CWPvhff986oFhfJZNpipTFn3T4DNKUWHdM4w1Dc7LjB4NWBy5ymJtPiykcT6YhBmrh5YdYy",
  "key21": "3XCd6J8onwx9ztu9UJCoj6LfaFNxjzhmNfyqxZWxJzSjqymbXxtKh9eCqGYGrRnUdc24xJnMNj6Dr9D3ULjsuJCP",
  "key22": "5acyJsNQZiNdr9vRBQoNdNJoyTw4sbitKmBZnBU43631u8GtjDTTbdZDb25URFpiBmte8WBTo6JPngpnZzJZcowZ",
  "key23": "5TsaR3G34eVsBZAfTGqY5AJ8bnj3B5gMdTfcqzHnLaKWsCd3urzty897hu9SvnkmU8FWG1VvY9RRckxMVxYiWQPU",
  "key24": "3gjtdqQozCFv39knwgZ74UDXMEW6tDsvDxdDghPJt1cv2MLW86xhyfdnwHjNX1gBQ6eHmshGDCVPG6vKhFTmGnpf",
  "key25": "22Y7Qv3wgZVqamGNi5VF3SFymM3RDMRPBnK9xmX3ftj6aCaPmxSmY9Wzp51MLfttYHCSST9acLWFRJnXJY5TZWDV",
  "key26": "63HoMJxPuW7iGptM1DcJojEiY9Y8aYEj4uQ5VkTsqDFp4S2ZzV3tkfvzVaucNNwVPdouYRU4suRy7YFww28cYL5B",
  "key27": "2af1rud56MtuMvTsWJaiSeDKhgE116C4pRWxAnSruwwzsGpHsAWsqcTqTBQUH2wo8xvVdbiLtfeSAyTmUS9hmBQ2",
  "key28": "2cLdNDDFdNgA7N3ksUJs7z8WrGzKZShhKF8x1Cb1utQyrAt1XtFKkpPtWLUZaHHvmfbdyq7pRZwuH7odV1kixx5z",
  "key29": "5m1XVSqxbGwnSUd5P3HkVGV2aBsxJ3oDWmTZKgZRMr9AyLA2uhJwRpcGyu1tvmvy23B5KsapDHSctL1pr4xo1LmW",
  "key30": "5WhBVMo5CabDVf8GkNJbrxaenwSg3aYr3MvLHWAqGJUQVZdBAviuJ1KLNnaUNK3QHYynxv2PoVP3naGuvjLQfWxx",
  "key31": "4K7GTerGFLpG8hLQRPCEB2P3mHgcZFr81yTXi6BybxM4VojaEPmAE9K5n76ndde2vP6Qu9B9cqHVZoXEMVJwVeYF",
  "key32": "P3JUkXQd2cawJokuZNXhNHFp4PgAoxhDr12qDn6ymw2G2UBqRGP1tEwoSp4Tkw1iPLvz6aKLRJgVqwA1gp4rjso",
  "key33": "5NGHdSXLrrgGqvnLM1ouApdjTCQZYSw2SvnJKb3PraD2xhy3eQu4DMWKoNQJPrw7azeyhGFj4FQNukoGEsHDH51i",
  "key34": "41ujhZPyGw1sYNUrvLfKkzr4jjmSCjQ3RnM4X7HF9kiLAHsCZRkCK5BKneqjjtD78KxHccTRAw3tYfPjRK9JAPfu",
  "key35": "yffmeY9qaqzmTKNFenqoz1EC8i4z4PQZ3ECMndzQWVCvMYrn7hsoofbe1VGkWB2mUP2tBX4kW2TkMusrYUN5GjX",
  "key36": "3LiUV6HNGUnxWmREXZ4NBisPM9BtqYKgxynDxKcE3FjS8VJbjgtVq7vjyHHSVi3LrS6PkUnBcKMuBr7McoTTMZQM",
  "key37": "21Ac4ynjzmMRA35bMvgmNJfXHRR1mRr6oLrCgK3Gvp6eARtwynARMjxdcDb9UfB3WCqYbj1LoNEFeomecksWTgb4",
  "key38": "3GiUTG6NGBuV5PYG8vbn44UPSeC3Rqtp3Xx34JM7R3P8dCyE2Q1QNoaXW8Xj5cf1UVQiKsZEsbpXrR2S9988FAA7",
  "key39": "6TVKeKJ6raZP5nDKTMniVXYXXHfXcfEhpfeAjSoEjQzPQp5ai9RC9aurkzhUhpcguKygeahUe542Vaqxc3xw7fP",
  "key40": "w1CSihnsB9TpvTdHMfZLJkFkJQMRQRPidB8iL6tJpb172P9k1PTyACc9YKJguoCGqNvpqshAniY13joZVcu2Hwi",
  "key41": "3HcAB8o4byRKNg5NPk5EEzXnDzzsgGtPGuauZV8KtU4t75wtVc4CmY6rDB5hkQnQatyirupeTX6RoBFGJSqEWMfT",
  "key42": "2JMzL5DjgA1Zwq44a2cwEcgNmfNYhh22GEanFjzoyU6RT7ey5c8E62gWhjUVS6m3PuLnFQpHs7R7VfjPXV3uPuAk",
  "key43": "58KhPCy4qBy6PrVVCeb9L6m2bH5CFYAMQ1Mo5SKywdge7qGr2Fwb6mNVQnbamJbPJuAqEuw4UA7PVEtygYChJf7u",
  "key44": "Ft75c9D4cCfKnjaRuWVMnhEa5GAANfGVQJkc32kt8G3P1ib9ubQKbTkQk4bSpgW86i2zTdzEnuPCR1H9MBDz9gz",
  "key45": "gYBxebgUDGqsShUF1KNSvegV6sfntGq9ch1UsC2yAZANB7gFTESUDuEa6zqam6iXuStJyZUo1YHBPgR1WhPC8vQ"
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
