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
    "4buHqNbVwx7iZMLbx1jthpNVJfVXJdBCC9pccgJjEKnxwfjoPNQhE6AdYJsrT7qv51DsB7Hdf3xueuRwP1xAw9iz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oBQZwHbXU6nnDyu7T2bvDkmNyTYZwpXzyh3g2WFW9hRbx9cnPFt8VzpmhhBuUWCm3at7PEsrR4yByxh8e2Chsmi",
  "key1": "5QPTEjUqJP52tmDTmrtPXUWFR1ksW9wxwsJBXuURUJQKhLGVjUS4ZT5iYvh1jpc9y7QYsq9UU32w5L8UNWKtsM11",
  "key2": "4a8czJuYmvmzKQ3d76LGZa7Zg14ykRThvefwBoAn1TWN7YnZLvcNcqsSVe44NbzxfABhf5GDPvUrXxUcBe6w4Vsn",
  "key3": "3F1Gx7a1EJsBk8XSQN2D1kCbKX6GduoSxyyLzZ2tjyJtBYJQyopbHbDGdinBUEeETntqyLRsPRR3U9ZfZiL5U4z5",
  "key4": "CibqPqnH84gNMNULZzcKZjPG5VCCwWh2ndoHbveyTbJcCpB43nCdT92R5fMe4j44nqUPsdYory7HjMBjSHkUCtZ",
  "key5": "4dAYMaZWG2Qsk5Fg3ZopRtEY5aScJvHF9HA3Jo3s91HSVZ59Udz4XzA1bVrjvaCdVoUfSVRq253YqeshH3c2BVMp",
  "key6": "3K9ny31rpMj9YkGASfRB9ce2ucRS6AVkntdwewusv5H86ByiG62nEAAfrN6YQEcuKSGNeXn9idmfsiFQton5MPDM",
  "key7": "5AtbGdQaDFPoGg9WkzHYyRG6GePsyBbKJ8YQUuEZQUe56LzWHSt7sfvVHQ6eedquoxz5gRcPWdLAwFgZKixFJV1p",
  "key8": "VfbVPv3mL7A7ZqqLQwJTajFFa9jNKd2Q4KB3X5ZWxfAsbPGDbJTPkYqXL9TvAtF3RhpXJA6Mhamowi94b1Ub4ZM",
  "key9": "53y2mrP9qEMyxvSKXxZiDZZveCMW7P7Rw4fXJSpePeRi7J7eDWB87bpu42NZvAvnEJ8f6APxVQEvtNfA55HWJLHH",
  "key10": "21EUug6qa1GzqxeruBsWpSsYFvteQFa2jpC4pYyhzPSxNF4p4LQnTzLWDo6RRsURgpy25eYx8e1iUNgJsD2z1zxm",
  "key11": "3gqo8GxxskrP2np8t88sLx3cvo9tPuMyEBYp2kc8EF8E3gCw6s4B7TkusndBjGoZ8X7qqNvkmZEuZKbZLfb5bXBr",
  "key12": "5k1nEbgixR8zGxY1nfv32SVC4SSSt54RnEDpjzzhv8uZfErxUNvq2qugkKDm9eDxyAh39WMizye23X4TYSr5zG9o",
  "key13": "3YY6TtJHCUZ5N1JTybYxGJLpKuJSD44p3Li6fmGEhH8h4qVXJN532KtNC4ft93zi45miHQ6khdXkPfoWdbgBA1eU",
  "key14": "Rq98NUqtk3SYVSN4vFx4q4jbgqQFT4wupXfyn96V2mNTq6qizFjHQ3CubnDM5XQsVZn1NhWuSWYHwi6vsCsZz8F",
  "key15": "5A2ojS6xfCzx8YAgR7G5kc2AYW7fPnmi8CPhVoXnB1sBxsMYjVv2fUvD8e1HddAAHmfUiN8b4SKcZHYXn9kbvPCX",
  "key16": "4V4b13nJWoXfArDan7vFfu9F3grXLVBQbfH1pvzwd29Q5mB16VGrjFTedeugzZ2GR2uYsQNECY218etRMnfPnBgi",
  "key17": "L7gmVoVxwSduZmTU1VtUgpCb5Gnh8x1xLWmC9rXuDvBScuEHAW8KVD5EBPv9nMpF4wJaTJZUQjdZcgAoS12XZnx",
  "key18": "4Zbeuuqz8prpr9nAQGfqrVez6XPHeo83XcD7AL2x2SKTqysvLcVn97n4J662LDSgybkuQok9RbJhL6fVrfNsSG6V",
  "key19": "GzMXJrtREAxViCQRWxUQasvNzpsJYAPCsJf8U24PjxbKgpL8ZM7CM2fLDsAGfaf5w1oYhZqv46Q3ymKK3mz3wYn",
  "key20": "4UqHe9haUhvng9TgbM7EncMykZrfGswFhpidQKdhSrnBcWcedkyVDRPMoABuzUJVtTSYKTLid6KZMf5MUWNx8VqY",
  "key21": "2USXVHCBi3VDpsN5JfVgvGXR17h22pQ12GC9rSTy5GXjYRRKXvuw22wyV382C34AFUo57wpE5ZGN1kUzQaoj5M7s",
  "key22": "5tyUsqCie8xme2gcRd6qmTux8GFjP8s1Z7ht6FDe5QqhDcetJ6TWrJA8f48eoErg4fMmspfEkEs7vs5Weq3apz6x",
  "key23": "2i2sqstvPKsc5JvrBZkvgdHgfT19fy4LporM7vFoDeWEuiWbXdc5dUP9BBPg1yopMXqtHaRC9RRzJz4aB9rhiqYg",
  "key24": "418sY4r9Pr2V4Nm5E4HvpE7yMp318Tp1B3hSv2VxzYrwkV69KiWNkLQTYA3uZRC9ki83NJZF23SVCJcUfPkybCsv",
  "key25": "5t6ruESnhXKyNneznTijjUySYdec8dzoQVp4igkw34RH3qBZtrS9eosSfvyB9mW13mAeqxUA7U4yEFo9Nc1Dvj2s",
  "key26": "4DWj49Amu3brqdPh9WDX1x8jYkCi8xmKjQtPGrUhiVQUNmcsWpVFCfR1hbfAu3f8xrmBWNJWdK6ksEaRsnay5114",
  "key27": "56Fyhxf3Rx5bfqNDP2gSsD3mjecK41aJ8enXogGF8jcNN8y72oVhzYDkGQkbnXk7fPMp4jgRSBTddPFUN2MxT42V",
  "key28": "4r6LiFWjS18TVWDh72if3jJQYR3bf8HM4YXdDsfAjENiCH4byg1REYf3GS6bdFSnPxsbV5wuufCk52okoYtGLdnS",
  "key29": "RTawmSD8VZKQ1keWnCcQBi9wLZNK15rgyB8REDrhDorJ584HDYoqPfVP7j2DVnrhEBAcchc4sMs2SUfbTNX9hpx",
  "key30": "3VU7YnC8T9ik5L5s8V6X6igpaaFvm6QcEVbiqrXyp7kLzD76arTqiQwacr7gSMtqe4zSTumhBD6Y8euFdypeoHb2",
  "key31": "5u6VyinTLZ9y3nXMGxCy9YMEsnsFNpydu77WdqtYc3DUREHktKCE3DBW98utk7zbSp1YiFqmjry8iiJDaADpe8m9",
  "key32": "v8Prg7RpccJUR7GwpX9kkxZvCR4d2t8SHbkbug8u9DTMyko6XYY5PJVfbCMz5bZ7DGAXPMFf6EupXiWw5erAtUn",
  "key33": "4Z8oUxz2AogLHtcaP5uGEsgvkcFw4QtH7hJMb5Cx88MZMQAaKC1WYAvSdjaXcDvmiEBAKciNV9DRkfkLhib1yqLc",
  "key34": "31xtdTc7qZX9u1oJJHNkueDBs9jKaPwSCg4LN2xdM1wqhxoDP5xVJF8PiycUmpHcz1q7hRWweeuqnZxzmBhJZ26R",
  "key35": "2qgGAsDM9dFheJhAQeJCfmgNHCgu9FdyZrxZdGt1se6y7Qu1HkrnPMXDm16kjN2qGBPcmikW6LFS1KfzK2Q2WmVG",
  "key36": "4zYB2yC5Wzh4BJhK3jRHpssUtr46rK6kmPFWFfJjfCurLTLPmR6M6SM5xw6rKJxQPRcc1kLbH7c18ejpaESKgCu8",
  "key37": "42TtrpWti86taHiH9umFG6uKQixZiF61wntCKS4iS6V2sZmYVDfJSWxsessTPbB3wxgNsRx61V44Ltv2kwKP5pGK",
  "key38": "5Zo9N5UzSPL7MoAXimQE3ieK9tHhooJXLsP2xR9uX88cUa68bNUkx9yHg7oNAci5fsTWv656UtohLVcPR6R2x81V",
  "key39": "2nMge6cJQ8Jd6XjWpHS79wAPgDLDfYWWt3WnjtJn45TzYFMBVfS9F137Hk9VQG3E29sFoJtjWUYg3NECnuVNuqnP",
  "key40": "3jeXEeBoJKLvygPoKcM5s5cPR5BUismLVC14GvaMQNNsTihUtEnTfWQ5CKUqhQKLbBMzqZWcecbZggUFCf12hoXF",
  "key41": "2GUmdHt8WwXgYi1UoyacwiW6HMmPZSapQr2iyaFKhBkZv2d2DPrJ6pX52CTcgpWNqzTPb6CWbJa8LSJQwmvPsGu1",
  "key42": "3tNyht5qUj6yBbRHJNDDtEnKyTYzf34nTA76d8whNaRBrHpH8dz9eGa5yjG9xvAwSPeS6chvHPmiiqyzzpMBUYn2",
  "key43": "3bgiF64ygvFqLNxRmE7isbRrbAFpBcwpuoJZr6AXpVr3NZ3csTfFDL7UwGF4yZYQ28QAxxbRmqhGZSaee93BkPwb"
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
