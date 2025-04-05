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
    "2n9jBGKzvdd3QqMnAogzdzut2BBBK8eGmkCGXQWVo8MGzMongw5PEF4zA3es8z5K2Zx6GgFqEJahgZHLRN1L75ue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47CCNjfQfxgquRzc9zWDWL4qX8EmFNhKXGfqzhXCJ57fgiBJbvH416Aw6NFHr9rDbAziAYwBcb11BssfqvaiaJmJ",
  "key1": "3WLsm6UTSqqnje6B9zSFeemcUmtsykudDtpVsqqoYyRhwFpVe3ncCQjfh5b4B6DT5EtqKHsvfEk4jQmqtwp7i4hv",
  "key2": "2Qc5xwuFyFyz8sH6Tymp9yjjcTCah8eg8rC43C7MWPYiyVqJAKfYeokmMxxW3A92nxw3FoeFyiEiPaTJ9Bs72BKo",
  "key3": "gzebd6RHNbb4kGBkXy2TCbSxiVBaSXs6jm1i5VFgu3KJmnTHYHtvXwfR8CAGgDC4DxJms4zyLa1TY7umDFMbsHN",
  "key4": "5BKvBH5Hf3x4VLyhVeEJgVEBGNM1ZDyUyAu9gw7a5b3853yXGjWL9JQ3Jd6ji1qSuVtUFbshBAM2n7tGKzfkNwD6",
  "key5": "niX9fxejmpCN3fnWFh3FdMc9t85Ki4gAnLX4CMmY6auMG4BbSEQEZwwTemJ3Ek1BYe6iQpf67bK8KdKaeCQnzMX",
  "key6": "2QbRfaQo6tsLDTU8YosZgPvf8X58CDgyhwsXBTcEdbiQWwqFzSgkjc8Ag6q5TaQGh61qQncK6VKa4pRPj4gr9hin",
  "key7": "4D754tiVZNT5FcqFgYeJTjaVo4zrkeVA3T9uTbdYx5UvqiFbC95LAbH5k8ruPFCjEJbjwXV9rX5JbVeFE1Hp1hz4",
  "key8": "CRhjGGar4mMuYPv2xfzS32KnLtw7pBVf6kqAdKvA42KZwZ86c5JCyKTymxQ6iR7oPLeBoXUtexFfCrM4MEhgeLL",
  "key9": "4nYBawV1CvDfZkrAZzjiCsH6fRdcrEDPMCcL9qqMTCGCjyRC6Ce1iWVtsMagQWDRQ2sstgmQ6ZnkAryWMW8NWCBw",
  "key10": "3brqYZ9F5T3fvHd8k1zq4K26XAkFfH3cNKQ6yJVxsSAomQnQdqKmGy391ThyyeYUQYTUdXEvGhweCYwA6NLAHLJv",
  "key11": "cEGFqkWM2hUSUYXo5dF16ymJHN7jGhTYCiQri3UG6X6L8GuWiarSbxVMq4mSmhTy49AL9BoDc5QKzwsF7qct5UF",
  "key12": "7ZhtS2dLnj8z4bzhcxziLFyh5iigtjx4pNoyanuw8XYU5dv4LrcNTEeocrSjRLNBHMgMzubWvfs4yv5scopDASL",
  "key13": "5niZ1xG2CzCuiDpR2gF1vvMQuyLbpspm78ZN5yxyHH4mxqwUsijQNzaDBDCrtCpF4FPX9y8eBU5FS9GksB5bMmgb",
  "key14": "5H1h6MkafZ8CU8xM8y43WUoF5CYqEps2x36RK7znGtoaeCjqkyE23ZaUY89HtKTE44mtj8XAs8mpTjQECEgAZ1MQ",
  "key15": "3MkdsVQQcKbqk8tiK2CMWiBmT2ixpA4ohzTTfkaCpfshTTddxT4asRPGbCb3Gvsis8xMUYAzpkfcSFps72S3PvRe",
  "key16": "RyUFNo4Nmv3AFkw88aLzFw6kn9G6ZtAhYxqkCgfs3sMAY3SyoZFHxSNp8DMuxq4dfHUc1B5uViFvMSH3tYqbS9s",
  "key17": "64MS2dMURQLanTkGhumsAZPAyLitH7VeHbnpGA1wJzNjg2tWMm4ERYBZzoVhJAJuRYSZSLvosAknza2FxbGEEiez",
  "key18": "3wQ7F85LgtcztbvSPrjvg5E1CMk43MJzRPVc4VGr8EJoPFhXBtdwh1djWxhyNLAzwGZTPYGuMQURDBXmAvJBd3mY",
  "key19": "FBGHvPWQDtFF1pya7Mjz3n4rqZRrwgh5eFBPwDpoYhjUytyTu99xB4JZtHqS7HsgAw383GKTC4aqLUGAfj4ZaiZ",
  "key20": "3ciQsAGLJbJtPog5nhapneewkWgVyNRHEy3dNpSh4xDpfvhXooksseDihtGGSPnV5c8mBzP33Ja9835eQXSGRgpY",
  "key21": "5CWrQpHHY3rbW8xDXYBmBoDdqtwhj2ZzSD68XafuQPVsHuuBynjocsfZXxE5vL97RYFKPhpZTkP1UP2Uerv1Ngvd",
  "key22": "2ok8mj2ngXWmLWjnno6nSX29tPW49kwC3RkWxAVz1J6rFJdXY1JJjS9S1vrHyAkLo68bdNV8wdRjHSBWsShvKU4z",
  "key23": "3ZWcw5ohXoGnj9ZQwA1v2PRuYudoY899teFA58mGRpLrhVqUE8fdYMRC9CAiZvPvdr7WpaXxw9ixRbdPUDFvf5KT",
  "key24": "3JncJHmpcefPhE3kEQh2izQNRuEnvGvAbYF41BB1xBaPrPJLd3oQYRT65HFsAKTupgfpASxXpLtDamxP4jLeWU1G",
  "key25": "61BE8J2PU3Qyuj15wsYJ4RhP8yKgn3pJE1zPBpDJXWPAxsTurxAc7tVJTXAyQh8Ad8yhnnyAFpMzAF81VKxySTDr",
  "key26": "4cj9Motxqeb4ux9Qm8ksxUN3BYR4nDzvVMb3SfnsJkc58RNz4bKDtdCo58HiM8z7HPSzpqJqfrU5JFFbDjuZXd2D",
  "key27": "3PYvLYoJAnq6kuWWPHHVt5VYXzckgAJWs7Vos1WTUjRRrhwerb4YxnQAeMRRosYXBsNKNskwtycaDZxwQ9TZYhB2",
  "key28": "2tBySd2dC56ked596E3ApGm1unpQhnSoWg199shkQNYsapvu5UXJTktX9HiP3WC2WJybqb7Rj2b3WWS3g5RugS1w",
  "key29": "5nWoER3SQ1UwCda1ZGNfFomL81crUpxgR6UthM8be1svb6DPWr4rYjpBJZPgdodu3qQVdj2KFDaAAz8MGpGwYWzA",
  "key30": "2fKh5Sypx3BvZte2gRNCDEnbM5uo6G3fcHiSk1kd8EzwWVm2ihJXXRmMRRQjHwF6tMnQiQuWSURANdx77tH3CSs5",
  "key31": "4yvDgnvXTNMLg5QUJwBKsL1qDc918FWNpNWymHqiEcB7MAqNCdk3mGhsv1Y69hKVgZA5PiHhwiok94d8ndoNfRFa",
  "key32": "UZpj4FvEpCpomPhXFShWhcjhFpmc7MTaf5p3LUPpnq9mxbcqz1S3rHZVQ3BGoptoWsxoyXykv7hQozwenJKVwmN",
  "key33": "3Yqo3JWz2pHaWu2KdLVkaZoGe6nwBUSd65KAwpjcwpk7e8AvF9BaDKLHztSmapZzCnYXSnFeEbyuWAKG1PZfRYUy",
  "key34": "5UiLurzZEXnbYrr1252Krha7qptJeG2KGKAAY5hDgeoqTZcEDDNdmYtyhqYuxaNincq6XcjfxH3GBWTGEktYnCdT",
  "key35": "2EETJuub4cjddy8iUb72AvuRQNei7dDt9ocXzduJFGU2S7cUxACy3z7cFxf6XAARjL6i21PQ1D14FrtggfUgqLbN",
  "key36": "fdN4uvUhfXtw8Q91TKTueopMLsTbgXqTQmrKAoxMQX4r8roU6bh2Zv1ppKe8d5X6cTv3vy9oAEJ8fTZy4c7wNJz"
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
