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
    "2TfHgLvzvNk7kV67St3W2NvCPGLQtzeSJgpzSGP9wrWsm9Hj4Dmgs4Xk45XwtjcU1wD3pGH7sEBYsghmWh21KKYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oSS37qDfcKkQYqwhdKYG4CUCTp57aB3zHNzMm8MMj9oWuT4egLyaWgHx8byqDpedTJVZr7eH56NfXtXZdeQGBCG",
  "key1": "3FTmhvjEKr6eAzFG6NrhxNH9CbcSz53UVsKf8dChFUxDHqJcTeNwV9JgcYroSWwtvJEPG9U1W1QwnqgidC7xdAVN",
  "key2": "2XcGcEj2xcdvFx7rSFMas6jkE5xzFov2iDKcDe3yjdDRYp33rhH2D619P6SQQkwJaSvKz5vNixVcCLBDKFahnG6s",
  "key3": "48AdC8MraX27Jc2LKj58P7d6gMKNwMVbGvB9G69tP1XYuBbe6YqQ34ASPbgzrg6vPHZykC5Bp9e4UgpVqsAzcvpB",
  "key4": "2FoPr2q1FXvKDLL1pytywk4A7NRVAKvWoQJUsYL9fHbhJgeE4FmmVr8aYNTeUA7juxefYEBdhhWocbERbsYYVonL",
  "key5": "5LL1matqQkpZm1bpCEF4kKKJaUahWNzQC5QCHGCJnrwcJoss73cJnzyXy89qhSYEALB6K255QrWJjk6eozWfLFyi",
  "key6": "2mGxApfjWqfE1MK4puzRzYL3xV8dSPXm428iti1P39zdUkaGpVK3EnrAZ4xB4JLFHnE6eeXBJcSmW2Tbf5yE7i2a",
  "key7": "2ehYnS2P6FvwhFX26XHgqK9RgJa8EYytvZZq3zTrJbtasNPNpgBvDUhqDcC48v4W8pWrNTWCk3Hh8ZQd7BDukSGg",
  "key8": "2qTGTqGkFCEVL4TwZBWkGv57o4DNQqTZemi73cyN1HFbjhDBTAHeCvNxSirCSLtRg61MXkqN4wBbewKodhM8DSUV",
  "key9": "2HTM9pG9rqoVThJUhbqTV3c4QqS5WR8tUUyN8DtRuKGE2QLUbgz7PN3CtDqYTaRdvoyXVAryukyRVoc8qka37akH",
  "key10": "2wLwphLk66Wrvh1b3apSu86URMxRm5RM7MYobUGTiFeS5yuZ88uSZHJP6x5chtkUtwUJFvoCq3FDkjuEGkhbsjsY",
  "key11": "2DJtpuQ9feo9yVhgj6preNrKiQ6dJ3P6b5vyVjzVGAAn9S8zE4gctevxMQL9iGvC3rRghsZinsLfi8cRZ5SquDJS",
  "key12": "22kUiJQRkFmd8G46kwzscvSq7ECN5QDUXk3MRTzds8gcokF92rfAAYeAzAPkmPTF8ftgSzDdvHKj2LTaBVNwBuVK",
  "key13": "4TR1F7yEtdbDNsUH3Podw2V5mZM2wUjeb1UGoUovqVHJMz5xNqcURSvwHAdctqnJW8hodMhYPiYHJR7Md7M2QdQM",
  "key14": "3445384QMYE5MYnDn3SCRsekL6pG5knSL7NS37tE4wrNceo1wbomJKqJkDzRpCfuaqhckZe4JEN8CHkPaHNEms8q",
  "key15": "XYirPPSJeC4ph6EMhHkct3ZViDcCt6dUQEAK694qHwchMEAgQfMytFN1ja4fASb3niiG8GdCFnJx3TpQzg4ogd7",
  "key16": "5ZQ3QP8JShfn8Abxe1z6fKuegjX3HMcbmZbncVxduJCTC6cEnufG81Fy3ej7H9xfrkUwBFoWVAz8wun1SXxkyS9M",
  "key17": "4kWn5WhQA7XYzwv1gY63ANArhfqTuk1BccyALYZJxff6A19xWBUGmbSSRD51gwFrUsU6XmrnPRsDmhaTeGT48Gb1",
  "key18": "5R7HC9gCmFLs99Ju4yrffpKMvPCEbh91d3kdtZ6exFCfZgxE5Y8adH8bFjYa9bw1KbsbeseDSvC9Vhdck3ba1exr",
  "key19": "RfhzQ89Fb65M6TC4AF5ybYGZAgPQ8YJvQVJ22Bfboytcj9gzHjfdeMTs5QsHNyyfMLYMKZ9vxELB3GuaxcDZuXC",
  "key20": "21AoU7XuVrF7XQLNQhb6GVQomUks7yE1GeqBxRVfcy4neThXXWrpdBudxJLt59bSawzYZ9fr5fJ8aUMw1X1gJUwP",
  "key21": "yo7fs7mpJwjcBVmFEed5vkmXVrHXBMBevbCkC47J4a1zcC3T7wW7fWJGkZH7qo2UUp8gLFp6bbN5XYBDw1DtVzS",
  "key22": "2NqT2D6UAV9QRsMV7GUtRKPBDiTJJYHUhzNJcr5PBVwVDFTAL74SJA53gELrVqDzCaLCc53fuTynxauHcVGWZHkg",
  "key23": "3SgbBVY8odhA8u32PYJ9iauezGLHZcDtUPVVCNhGJu3ayaneSjVDYVVRYfcKJLbde2i6CZ5KQJiFs5Z4sN6mPSso",
  "key24": "cNEf2pBDZfNtNyo3XHhXCHPPwvdbMUyYpLX2rts3BhTBzefgPmFvfNkyZfsyi8uQFSobtFA8vvqP7XeeEQctEd9",
  "key25": "3T1qmTfkm1Gczf9P4uwhbSUb1Bnt2edPsiuQkzJrK7qNkyzpUNNNnyfBwZcE24Kg4h5eFZR8dKuukgie3sakwKof",
  "key26": "4Uct4mwNkTYBXAuUYWcdqKLB6KcTsWKmPXdz5dGR17AGQDXLHznWTPHnaSU6vqq4oHp8Vxvf5Y8YqMUDCCeiEpLf",
  "key27": "BkCxJJY816FcSj5qoniaNYf7EhXLXWGdPd5gZ8CNq74PpDa2vfrZjqCkVB4jPzkKGtTGPmn1tLPtT7ZQhNNm2Bv",
  "key28": "yG3LtkPn6iEdG4AWVnQazeQKAaTrZuz6ZgqQFrg79NBTUorPCsxW7Vsnu2mZ6wXgN1jk6VXfPhTYsLr4mQ9U4Jc",
  "key29": "4pfrVMxMrRaoWKyWM7ZgosdKuSKAxP8CwDG7gt3bLuznb22BJs4KXAATfN6KANMAMvjrx1QpA8XAiXy6hDKswiKB",
  "key30": "4jZBGMTDxdAvcTUW9nawKzH1gC8M9HbxA97U4EpnK9tiVwXeXv83HUb4SbDEzhvr7PiVzz4Nk8zTbaKofbdtibD4",
  "key31": "2D7FwWPeCTdfEDdaAZLokbwA6awXMFgRi9JKx7xBvNEH4SbDmSVWZ5u8D82dqvRAQkLq7sp1dR6AAifcBCoV7zhV",
  "key32": "MkyZhUz6Q552KS6U6yrzUGXfqGrQBw7M4fpCVVxudmovp8YhDZJVr6W3wTsMrs7fmbQrfWFuh3Rc2LuShMZejfc",
  "key33": "58x5RxRG43eRRBV4YTCw4LeiiHfWrN5Bt5BjXJHaGTfmpVUuABhRMjDeEZy7RrX5o72an3M4eFgeCLPnSNaTzs7i",
  "key34": "GWoQkx7Y6Tfdvcrz8LryNqrbnrwzb5w9rhXFqWi1qkxuTEJ8otyhNbFfVniYHkpDHXTVBH4TE9niDrQWmAxwKWU",
  "key35": "ES6kWY3GL66WQ9FMUxm8yc8tgpHPoXrDojZ5j2wkMh53iTvFMYvhpEPS8pH4KLVuTAmAVZGm4vnPMqtkYU9Jiyo",
  "key36": "VFcKy5K1PrrCKdtnkXJ6KugZa4cmAUZ2i4fJs7WCZq5R6pHLHD55ZdazbaWm9H42FBPpfpGmGEYjx6BFKHq49xp",
  "key37": "3povv4fJ39avbaHKmwtmdbZZo6PZr99LVq4AwmEYuiFcJFm9QHbj8D3VH5XgrrGy1GkjobgTK6oZM4JaR1A1HkUY",
  "key38": "4wekSXoFEcqKUq5jN2u7b5ERUaBzMLZzXhm8sTSDxx32HYmQFxhNxuuT9K69muokGMfSWANr47TjZWtPLbrhiWSA",
  "key39": "qfT2kAr3xJBJrbGny9F6RL4QSEsQy8n6bMjnFvjFRvPgAEQ6VexHxFzcEUwyQsFb2Egsuk9q9UW5gfG3cmyynYa"
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
