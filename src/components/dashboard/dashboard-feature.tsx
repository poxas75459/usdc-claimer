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
    "3kRocTqZgh4hUi71M8JanhMMF2n3QQ7sBHhBVwoB58YepELTYmsAfUqKbXhH8jtSLZgPpkp4fCmj1iQzcAg7w7wU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "324CPCaPQ2sNEevNBNDPCvV91yEpab1c71HQBzKME7MK9mLe4eGDQCvSVQnmXs8LehByoaGa4x7WMbnhUi6VMe5i",
  "key1": "5vof8TDb1znvhQYp3zFnXJBDENVrjS1nmsbvRZ56c8ExooNPERsUT5AaWcmwuW5QaNR1RqfkCbbmhJpWwwddrzGW",
  "key2": "4r1ZjLZcRXFE8pZStXoLB31K4Y5KUiVWAz75tKfTZ9KTCjnrPFmbjxYwJshYsXPXFg6Abrd3cadG6acDKGBhQV1j",
  "key3": "23cpePZ7iQz3iCGq3JRwrED43tfJXqGj2E1F4Fwjda14zuEBwL2fHGZhZdwgQ3aY2RnSViLTcyw12f9TutJCm8Pa",
  "key4": "5vZHs63VjgcSatHkmzrxkUabyFCBBS6rF5kcMcokVoCLWCgUoFDgkUwVxZXCSMMgTnVWACxzAiyHFZ6rYMHBSjDi",
  "key5": "2JGEL3obPMtKPvKPMchyaXWgJMtCeU6gaBERnZSDqjcPPQFeJrsGHJ1aKLFhfBfB52pPU9fptyjrU3AZEp1CS7vR",
  "key6": "38fdMcDwRqDbE8MwEdmnWpPHTbUZXcqjn9y5G64y82xvQgwuq47toi4NKrN7cSnQgYoEDgHsQRMaRwGAezd94veb",
  "key7": "4RHJ3VY21FJE6eXnMt6tV4pt33AcSktHz44FAETcugFZPPwfpQ9gMQHGgHAHcYkXZ76LFVTmqEFVEB62Yokisym1",
  "key8": "2Uqx9bbYHn841qbF1nwR3BYdUYHxwYnRMJsGtGUyiGn6Crh3eEWJz3evuSr2puY2iVS5JJwZpHu6GQ9NARX7qY1S",
  "key9": "5p6n7tDZ7UMGksf1oPZZy6Zbx4zaC8rfchfiYA1LEms6cJzDv1KRHKh6e6UoWzHQPQmeMMrerbVvM2oVKrhEBEgH",
  "key10": "32ft6mJ8bQjSQpfhoW9B1QT2oaizGnWfrda283zcSYXeM5QtuxZcJ4E6cfPBTLmh33qP7kdEtpqQDEA86cRP3b5D",
  "key11": "3d47ortttARdqkXAPbdVd9wGZheChCRZ8XkzhcYM9k7H95tB68UmUgJLKehV7TzGRJfGiaGrAVfrEYPW9fbHFqxP",
  "key12": "4MWr6USzpE7PiuHe68EfB5gedbBTxPwA3ETUA91uUJG9u7tX89sFUgTRDPoS11wg5ywP5TcYeju5arUvWB8hgjox",
  "key13": "2carpmV75Z5vwaL6FSYSxVc4VMXimRZiqCwBJ1eezrHmA1gM2ncoF1FTewRGvdXssfQPwBDWVRT6hdNkpQ5gXPfY",
  "key14": "AMSmr7bboW3hgtDbWQgXXwh3mKFqZ7YbLjRboH57FKC5dfW2oLE2fnyqtLSJn7tU5SvX5nzNw5y2qcxx7pFAKb5",
  "key15": "5e9VhuTk4R6p3miohHc4hhMaCDKAkigy1Ceh7D6cprTHxEgN7tmD9tcaRNoaD8dj1efyoeagAHHuEaKxZAWYPSJ9",
  "key16": "3RiBcdoyBABJCvYzAjZKNdbzbvSPHhPqKieCmq16W5o7PfxCT1egDe7tyuHqYJ344YzJATEdx2QNg9c41MVRQ3zX",
  "key17": "65XTwt6CdvEAF5jHJHH6giwQqK1YwkMpz4yNYVMKQm68KQeab5R5cMbDFaJxuZLQBCNnKkusAWE8bShGc1jAAZEv",
  "key18": "4Q1NsdYGqjoybhYrChRLCXTqP4oW9twyEFWinxU8CFVm1QLLCu1U2M5HV3ECvuN3VZ3EMiWLCDEnRoZB6iyhmPkG",
  "key19": "3zQTxrNrBcZeQBFhGbk26NYbhum1wUbPaW2NRkNGamuRCXt4aepTs5zezRx8pRLu5wDw5vsGt4ggQQ67Ak8Ym4Kw",
  "key20": "3tgnwqYStbzjnrWsZPdJkmX14f54zwEiztbWH2U81qMjbTAEgr3YKgqozSbwuhZHRVhE3DVb9E4jPGRwc7ELwj8B",
  "key21": "4VKEoQjzeUrtYNXT8DUFhUvWk4jUJtQgvuXiGbeGaEpCBhaWFZjxGXr2KeBgkPQ3jGCbdGb9PiKT5EikiuzHjfvX",
  "key22": "2TMmwKLE2yQFyqvZCnKFZpWLkJtCi6Tio4VMAhmFmuVy8pK8dwmsBrYSmuzXowqUSZLejEqGA1XRMuciwQYNJS7w",
  "key23": "56xGWn38fxoAHoz2HFGEZwVvb4Hqm4Hk7i6oHFsdzYuriTh6LBTtQs2o4NdEh4f7MogwSzY4DVSKEeSidv3Uwffx",
  "key24": "5XGqaAGD18f1bHeeyrU98yE9TxBHLsaxYWbLPgT7ZmJE2AcssBrtViPQzjzmksK6wZyLfrD6CziKHZjkjAHGdwRz",
  "key25": "4CTKWt92yXMFJr1MqdpJNQgrZgGxPzuQekdMBFeXcJ9UPR6S6Ctz4F3vta2bDpyeeKwqG29PgnHYJUPH1M7McqpK",
  "key26": "4HLUpvozvFJN8kJ5yCZZgzt7hgAuNMHadzeXkXj9fxJ6Cd8QNHpbJxSTzX4qEoJCNsrvGDbgTPZiHu6qDPvYjrNZ",
  "key27": "U7UGaEfupo4JTWkBs7maSBzeS2Q7W6JoQU2CYqp4q9TnwgGHvJDmwQPGgFoqd9n8emk3HFFWBMr8fCyZYRQQWum",
  "key28": "41gCvTk7ytqzoRr3x7DB5UBJiTzxq98NjQePndVTvxqjWoLxqG5JeNn3fjU3RttMEqjrypZAqJTt8hgRsxdQTZsL",
  "key29": "5hDhmDUnSWPEmn47VFw7a4zEjSugzqQ4M6SbWZk6UsX3vqU2Qkrb65yT3Ec28SkQHK7NzndwSxiNukvpxrd6o9Wq",
  "key30": "57dk2Q38n7ZJMbotwEkQypQHhjPyRfNBAhjBvxgWXpMiFttL3mqpTKhkUEsykWTABvCjXg9a7orAgQv3C3HGEUvv",
  "key31": "4vgv38CzJfubvxD17pc83gUYQaHouKZdf3g3J6jKCWc4VQYj1pg2QYtZpk9tMiuzN4NFZUS4zEnvH54XNTEcLWfz",
  "key32": "5NnA5BDeVegCuu5tnZprtjtvTxJ7gcM9jbGn4c2S9qCT78MAWU7jPq1fhwHLSti97qgXfw8KKLoqEB5C1cnAoG7L",
  "key33": "4fJa2KYz3zrWXGw5SDhtmSja8EXeogQKbT733BLNrkXouBeJ48N8tXSXQ5wEk3QQr5wCd1w3RarqhBT9YPf6NB4L",
  "key34": "3WsEDFz8pJnCwAwyN1BBrtM4n2THgiEx3Mp9t8SMBJgDVnR4RrzJfgBjt3hRvKPJHKu9TKZAsPLJgA73dKPiwp4q"
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
