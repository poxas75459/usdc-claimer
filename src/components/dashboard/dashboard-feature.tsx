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
    "2ffk9pWbMwdKtxzHtH2QybneEETaFjbj8K5QMgWaPR3ZLsnF3qGq5kTe4EKXQHM1KsVrZcD4Hwtm3UJqSUaYZeDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gpJY21CBkj5S4MRtAkACvJ9ZBYy3UstQ2orBkNUTc6SneoKo2HV5rV6rsHaXraQjaHBLs3d2xAHZ8oT7pkT6ypV",
  "key1": "5wRyb6PQxcyEm3gBN3qABjo1WRjsdr5S7b2ddDH3yKnx485sye9LEK6xEgmia1Er4Me36R6sDqJz5gHFiTSPMX1V",
  "key2": "fmN6Pvok2UvbQPa8ficT4qNSRAjgquTMmk48X9FUQpRV7Zqrpu1DqQ2rxY3jAN3McSgqSXDEieU6G77YyJjFfHS",
  "key3": "21xwWCXB2rMLCAeUMQwK1YBoyLfAu83m9HHfjDT6XsyVvYKmw3yLZ7ZtEDYPWttmaz8DhdAy7MyLWvkuJp1DVvMR",
  "key4": "4oG4P4hQjyqdSJ5CtvCf9n181NPLk6jkPRvybwnKtzZFsHkiKe5Y8gZ1mUDotuzX3hjKUZVM6zE2JbTXLUGEjbQa",
  "key5": "38AmFRwh9F5E5oZDkxTzdoJvUwo2KHK25NBpAXbqmwMUYtN31WRdmMpiJ22Tc91J3YJTvMPvi58W4WThz9A4fGrB",
  "key6": "vQWFnVRYYD1fVFwfV7KGHsj4tY2fjPaGGMhm1qRhBeB9eGkQp8FZ9QEvbBhZ1CwkSFoEim57eBebxL9p2tLGbHN",
  "key7": "3mTBhf5Ff1ZdQBAFodW4fgN28UL2SwExeghGdkkxDWsEQCHs5GZ9QmieVjwdbWKa7pXAuP468uahVxuds11QvVnR",
  "key8": "3MvFmfSMbBrojJwvLZE8afWZZyu7xy2LyQ42k9oucrGWZBgovRE78DFuiEUVqT4hkUJZ7BG8paayFMZHx1GZPfwE",
  "key9": "572we8hwiqgpD7pwjzQsigU2jeR8nDdKDFEBYZQuPmiNUudYj3fscTY3Bs1Fwdxz5MTvLE1r144vSqRejSLidvAy",
  "key10": "VxRXcWs5o5hcuNN2PpjGaE5VvU6k3yC52sQXipckzpXjRhV1H6zTHg8d77r3ZYKppXDy9K8QrUoLSRC3kJw7e9H",
  "key11": "5ix6ujMeX7gEerXmFBJYBvaztYaRUrXUr1LiZV3c61qHHGnt7ejfLYznyRWediHL6wujefKeRcuHuctfMJdvLkVw",
  "key12": "3CH8HhHQ66gohoyLkjsCoJ2v7WweGqFtNNEZA2xRi76GHbMiV4n8r8daKgZUUhNTdQAMF4M6ivfVY1m3JPa1SA5a",
  "key13": "52kY8UXHB8nvkMcEKeKDV61tqpZZqVfZxwYStLsgW6VLZMTDo3w9W5ZjTKbwZbeDk5NTC1626J7snRZVh1FkRDZE",
  "key14": "3HPgfTpu7cJqQqKTT56UhHAScnvMgskHdWSMMRF1w9UjBRZF3fQrANYKBRtCreZgbeoyWeL4rZBozWUJrjXW95Nj",
  "key15": "3UsBJhfrZyFC6dHEfY6ETeDdX4owJoWqzYtawB4pgdny4BVRWDdVAWQeG5JtLTAtTXvYcsfBSTGscDHbR3ard6Wh",
  "key16": "huxdpujF6ZWKa8yox7FzCR5hyipkGhLKKtSzx7SuDuMdEq81z1L2vQ5QjXfsK9nkNDu2vaCy1Lf1d8E23sMVKjh",
  "key17": "4tuVMnRSSiSBvcawRden4vQJaAbwamk2sFvyc6fgj2LpjzrPeX4r4FvGpQEutNYshdbNhG2XtAeP2i2ib1NpBFQf",
  "key18": "4zsgBTSDSaK47ncQCHEt1cKCokkAZHo1AGdzWSRMioHS9nDfaXEBYV4KZXANj9VqPT2UXtCx8rxyA6uuMBNhMsx4",
  "key19": "2DGFcXFekGLzXwdBB3nHqfSFMJzf2Km7XdJ1nNn52Gmsx5fGMUnZwRUo3Hm6UHD9nL5uteXpS1JhNTNXKuvevHju",
  "key20": "2jwT7poU47RMovUNorVc7FegWCVZ2P1sxcocGEoD5FDj6AHEZWVTMrTHHim66B2eTmCuBWHQe9aHz1oueQNRG6Q1",
  "key21": "rjSzmog74fGkYfg75ZrCfSbGNQDDdLfs4sNj1m2QNNUf2iK17rvHxEs9mtjnEo7W59YiFJdeKMENUMsSCh4JVtC",
  "key22": "3irU6tQtY5VuoDuT5RvZ7Fs9SMuS4473hjw5dzyykTS42QPamuM5ZC5cV8DTYjf5Ew7hjkMv9KxtpDsvumLahWh4",
  "key23": "4SUSVq7nSsFocYuYtTWegUR4Fz29CDULVBdp1HbX9hLmP9FjwF9z3Y2bJoSvSweVv1Gx32fBGJy3uy29GAP84MUe",
  "key24": "3h5Ks6C12eZeuyWsZ7UfoCmKpRP6feN5zUuJQxC4cCHoe2a9prS13zePqJHQ1EGHJA1oeJqEZwQnHM3PKneqAA5z",
  "key25": "33cmv7mhUDCbFUxerH4TRi2Jp8r8kL38AsVVz4LXUsC9z8rknUEs4YdJeKJNgh36vy2P7QN8bQn42wGkDYDxY8WC",
  "key26": "64t5ijs8nAWHSoQYFmjxjjMvR73vB9VxaLShev9wdSFFLf3eikqTxD5zce4GnuAoVu8t3NT8uvuAPUX6UwfEsTU4",
  "key27": "2iqVTTn2mGPsfiesbTdXAFKfaAWZG8L9sGGHN6VVtyZH4EWJzaBvvszM1EUx7V4XejdrAxdPXKNrnzvomSxihHgD",
  "key28": "3WH7i87CvuYRbZvgM92hxPxpnRi3VTMBzfb7p1Drj3UdUiURhSS4YZRPZRV9bjCHVR9RHk6d3xHyy8z6VFnQ3Hyz",
  "key29": "5sUfhEmV4T4cnihRAnxg9edS5bPbEi4UCKMmtG9u7odmvuw22WjgmwGRA5kJBVLbABCTptMVyPK1Jtq7MSY7HsQU",
  "key30": "5SgDLqJKttfh3xMkJ2eVQZLyPqT7MUa82JBr37PFhveXTw3KMqGupWBCjyu5ZbXhLjvHAMnUUJDBfQoKdoDt3jZK",
  "key31": "36emCppkZaDophweHC9GacbDPm5KFUge5bT7deMGaLiRqYLQ9GpZie2qMytkhBD1FsWv6pjw8cC1w9HoCYfUmEnD",
  "key32": "5v1DR95a7obk8N8isL1HszxysMmPUraAm717kzXYaFv2pCfKjYgdJFLyj7cu4K26o1isydii9tVkDXg5BUZwMbNb",
  "key33": "4D7eqoh3ofgPe1rdhFU7Yni2u1qdTJFaVURMdpYhTDzP3Mo6egdSGveAx3J4hHoqDqGHAfBE9ZvsEf7qxmvFwd9k",
  "key34": "4dtvd4LwtYPaMNgWnsywi2iAsxH9zTSqWnCDJ6wbz6ET4y6T75kKv8LXyXh5wpkDZ8AD4wsZD2gCP8kuNBhzRv7c",
  "key35": "23k4UeqCLEu7WDNJ4HyCYgPM8whLN9ewkXm5WhCbyN2JBwDjaBkDX8ywaSKTxX7tE4weBhNJBzBVhe3iu8NuuVTf",
  "key36": "5HqMyn4Hcy2diykWRbhyDw2aGqSPCVJJc9jNYLSWP5T9ytjtEmvu7cVcA4fymaJCLqCiAYBxUHRroJu38rfP417B",
  "key37": "4b2oAXE9THRMTLhirj7zeu38z6udvi2Ay9ukSSeD2Rg85DrbQcwWvEwC3RYnCmWiMdZ94FL8kdKa5a686Y8t1cLN",
  "key38": "2n6DFaLvC2ioxXmvPH6n9coL945p6yCHF2MPwsgb4WDEnA7Anr9AfazazbfDNaHcLQJ18B6wP8jKW3DMWrHjvPkG",
  "key39": "QeAobNfj5aRj5eDP8MU7k4W2EJJowkCVENbqsVmBhj3pRJVdvSz7NQkSW217TBmQ12e1kfp8YmSQjus3xF49FHf",
  "key40": "3UFznk4Pmto6ZbwnVoFkz7bn9WPmNCKoX8w8Vo33Hdi2TfzJZPrrjb5bEYKRnfY8bmfkJJF9KJLEpH1DHUqJY3FT",
  "key41": "295TMihAmcUuKc3Ts9AwhYrJtJdFsykkcX9nTVz2ANpXBJ96V7cH3b9oGbuU3bhhQr6CaG7uKStvgcG4afYJLADs",
  "key42": "5q9YUgZdcD8BXVHk19H2mjnoz92AdJuan29dP4KgktBZPVWx9fnhbtAx8jFfSvUMVRphN7PAyYPNrc72BYRpyTvz",
  "key43": "4ynpieG88B8E1EbwLYvYJMyCdvqbxDzp2MMAY85qLeFcnGX6o9LCBRrkU8gy8jip28vmgbp799GHNTjteGJrEuew",
  "key44": "37RPQVfdx4wDAJceUShcdzDZTynKmMwcgNJoLAZuZNxoAGXLLvX6rxSg74zWzpJP9ti4ToZqS85CY8LUEhuXE52c",
  "key45": "2drqCsoVjafXxcovS8cpHUoVKa9N6fFQNx1a14xTgxnxhdHSnCygHdi1m8BxUWVEG31gKnDnB7oGyj2EUKhng7Hz",
  "key46": "THnFKEZPMGr2Lsa5jV4e7wm5KcqMhoDR48pBcF7GwwBwRz68ZarqX6iJXiRgd63mEgDBxsGYNeFLH6hbv38ssh1",
  "key47": "2v1qpMdrUPCvD857DKSaZ766EiCPwVMtwMjsnA1Br6MgBvnXUWU7bcN7sJbTqUBTXNJyCkD1Br3B1mEgfGTqYTWo",
  "key48": "3V2gGzNUSEdRmQ5C6XgFsEfQaAV1kqqfpmZKxvFVQtEZVCq2dmhgCFVGbey5Xc4CYJxNYhPAJ52A5xNn72x6qFYu"
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
