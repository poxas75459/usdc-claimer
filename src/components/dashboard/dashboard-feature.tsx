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
    "5bRb3VfiZUYDNxn8mZJ3bfRewhLc38LY2gmzrPcq21zRaSfZQcNYE55bbCVcWxWDZGNBhX96MXcBDLxy78poqrVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KkrhQEtwe7Huca7Kxm8YdUB5HmFLhKKXyxwTnfxHWshLcMvLjtgAANgpAtSWttwbNYq8wjuDES46tiHfVJMg7HW",
  "key1": "4asSL7eGfqUxZEt6xrxLudmU7dfREupUCoLiBRYeX3KRJNjf75N9khfq18tUCtjiiayqCLUqsM4VNGyzbuBUhr64",
  "key2": "D4JAibRbzbtPDnddPQWKosBWeuSYsu8a87CZy3jS9K8KgeHXkHgBPBvnEw5vMDWL6TBBGDxkLhWyfPUJURpzwsq",
  "key3": "5vWaGYeExuJK2fCqpjQdt79KfUWR4jb4NWj9wvCwsPpy21KQsoZB3bZi7WSpapFrvSYcfKaEDzyXYSg7UuvRG6qE",
  "key4": "44DiQNC1YVCvXJB9QU1NUya84yVghFqXmRtvZvbAPwvGE6JWmDn5PQiSjJUBi2f2GyC7azzazjX7b5wyx9QTi2QG",
  "key5": "ZGuvAPC3W7QFNQqCs7KRs6X1MuHYz17FFpNB5bpCKutvPj6g6WBBNZZcu2e5H4QRXaEFnBZeDXr8y5YaYNL2t4L",
  "key6": "2g4x1Q6fRDqHMiMw2eyaVgBXFS4Ld56jV6ZtrJRPj7aHxhMNv5BFvp994uFjWfs6H2zksDPY9hr2yeAjFx4PXprL",
  "key7": "4WE76fauDjZFJhn8jUFbGNZEq9hTxJmNgLEmiVuY99PBskzdTEcKrt5uhX5VQTDxhKScTqFGLSrC4vwfbfA6g37o",
  "key8": "FGByk8vGGFkNXu7q596d4L2xQ3sEyLSy2zsE7WLrEnNyBFJKcCgecmTNyCvYRFqmpxEGDKJnvoB4fgfiRbysTfG",
  "key9": "49o73mvafpU5CbnrSDZShVbFgzmFDWGxQRDp3FWzfkDTMEYHa7a7TjnoW6FQyjm1y8rMKTAc4ahCAxujMaLpfe63",
  "key10": "2wDLq3uWL1pfPqWmDcxC448LuZmndxfYzaW1wCDfct2q8Xzzi1DfNDSXZYFbcxdWi2NFpKWj3GQb5mQM89nt3Fef",
  "key11": "rgKKR5cv6gW4q79KU7fS589JRHEPGPoadjSdhDXW8qNzXcvkHB6wzKvSkHYmihCz94TVqyobygdwGGEtFrgHTXd",
  "key12": "n4mdipRuwP14rddTLxU3xVzRd5NJeygV5NaTWy3dzqnr4JAkY2hJk8vjjG9i6QTmkrtRSLxpuPUYQtTVBjg49GW",
  "key13": "2XK3su2Qe4FjpES1A99ysJjKSun2mYFNdAykNnKpLvsWQ2jGuQDNreu1hQ3xBYGCoEbPKNPEZq5eQ9vsNHA73jgu",
  "key14": "389mEEzthpGFPbDAqr2jda6bSZnvD1CtZzg4jzCLVtAR4HkKt6jWD3weLm9iKj7tqBZTgB3oZ87kdNNbJvsp2mSe",
  "key15": "35J5VuTHDCZbuN8bMJoVqnXkjYQfpZRTpEc7DztcoMEShurYjd3wTfz5BrM28rDzDwNZppehZKrEYa8oo1X5M2Z",
  "key16": "2k3QGzGTsFcY8fy7x5VjkhyqUPbsv52gYdMa33q56XXFt9Z8QsF4uJePcdmJA9KTGxB5TSg5dThgnGnMeoGZpoW9",
  "key17": "2r8Le2fv73RSy1jxXG1rwNAKSFyEqc8m3hDtmWebtUPEjM9w6fm8LYh9F1Z5xgfe2zJocp1WM5Rtgd8E8frg6fNv",
  "key18": "4A7528oknZsmzfQwUcy7YSp811fMxtDCK54UqxGmQG29qdrCRgPV86YsEUfWtv2yN4WjyscmunWEQpDjzx7tFwq5",
  "key19": "5q8SVGYtuVo62NYikoMCNLnPUdczfzEcjrC6MG21fjwHnyRjyPywejVrEjkYC1qWYMtxYD85rNyYRUyYNWfVShpV",
  "key20": "621Pmhp6zt5KzwFC7k8pKvNjyVp16NhBhyC1AQLRZXLsK1Znuufs24s6YjUFpq4mUDpz5No6MgMLeezyQg5UgbmT",
  "key21": "qVQ5Jxd52MipzRikXWb4phYmsWkBm8MWm61ygTMD791NnkHzA76V67Ugcoa9cruFFNN8sRDaX1Lay7aHdUhR8uM",
  "key22": "2CKRUQkffqteDfXY3KH3cYmT67zaDVS6bEMbxyMuH1xwcb6oSRk3TW1jbujb4dWnFfgHr3jZ9aHBCeJP2CZPLRxf",
  "key23": "2nDQEeoELxmRRfkNAAyHiih9f1pXjf3T5mYfuv1kuGDTyoQDJewxKNx33XXFmMyc8T4JfxsN9j3RptcHLn6EkdyX",
  "key24": "3pnYMuKng8BLpVHqX4QvYCwcAqQe1SBoRgduaPBGwj1ycUDGEfr7BVo5nJ553YzLL41ds12PQGGoyy6QcytZpDAg",
  "key25": "WbSn2zhfS2mZpSf8xMNApDAtaHHKSxMhmoqP1vQKbmEVjSyvMM1tdj4XqrXYWDtvrMjJR5zE8VTkJxS6MNxeSoo",
  "key26": "VYmnGsiiDYvRPj1Vh7RF9Jag4k2dA6aDWBnFr9G5mh92DdVGBqz8qvKPHjqdUESsxqc7HPwATgRwDg1P1MKb5MH",
  "key27": "RfukmE884ntgeW6v8Q8mHxe1qR1GzL1iVqgTtZz42NRpg16bbFZ4BHYYHVhCeAWq9oe1vU57Gez9VAPpqe5CeVP",
  "key28": "2bTj8o8EJTwZ4vk513vrHuJVNZg7oCvyMdS44kyudj8yE51AsvGMsn3hwW31oKDucRV7a9KXECPHcH3rZejsQJhL",
  "key29": "4jA9DHwWQoxEeJ7vU1hZxJbGKtrZXWr9pMEKwQSQLxuXi6TP9vNGtGRotzn3hycpyX3uMSsynQPaatR5SybDapkP",
  "key30": "eWrwtgZwD484SXC6iU5cMe5wNYmJhcfZLHKUu34mZnYLydmHNPXBHzeo3xi21DdjY6eGFbaTQBqN8ghJN8ZjNYU",
  "key31": "39fNuJtH3n9QcUhgiJnRj4Heq5fCx6jeNphpNJC6HfYRyrBPemhwL5Y5Bz8UxmnYj7UhWP2aeuTmJps1SAUKQKSu",
  "key32": "4khqY4iikT98ffNnSm11xfmBtAF9S1tBkFXqsjQF2mSz4Bv8KwbcmNpqiQqbAQQ7FtUfpMHqWbmSoSj2cJj4Teuj",
  "key33": "5TmKSKL7CVSrL3vurgsq2KK928AnwEksMM8LyPxdRa3yKrBDppbdPZpGW6a4db2RmjqjCw4e6Sps4WHYJ7YPuQDd",
  "key34": "2gQJxWz4QTXsLtSEbDncpZBLVMmdLDiErZudq1u53gEQDhe3rXkYRBqwbERTmPMbqAV3UoCa2mfdAxzFN2DoFd2W",
  "key35": "RkCdpoAkvvodVNt3JMehzHs9EVPgVZgHsSbyJtC51XyzKG5eGrJur9au7CsZPqX5DtTRE7MWpMVkcSbz94FZ7jW",
  "key36": "61R4SdJ2Gzqm6HJLrNtATBfuyXieyPpcVbwXZ6FBqTYEBXNqH9twpVe4w5735mj1nw1SqHNTUHkWCw7wGxaB7TBe",
  "key37": "35guLsrmpMMpeaXT56it4eiSeQR1pvVde4RcWEBjTjHGUjqqD14ePxtdx9PQ5y7fnLwDu5aKTwBZrPEAS2RLefcC",
  "key38": "5NqCfxZeBkriLPLnLoiCfxniyPrnPXpFTBw2xbGyshFSRakTdSqP6jTrpuDwtpqTF9nQMxhSx4Knrr7mKnox98fX",
  "key39": "3VZ9FS1wjVZp28LAwA1aUsmnFxaTGn9zVk5XJB2jgyCWZLK2L6diyNjPC4eFosQV5RLKSbCDtYSwt9p3oKMsgLK1",
  "key40": "5YAV8zToy2gcsFamHzb4MaqiSZUEDTFB1seQwWnLhS1wmmzCpFG9aTzA9tsjJKUySpPHUshMSo2HiSAUVnULvXhE",
  "key41": "3wk7yTnXv3x9RhoMTioeyb4jQRfg8GQCqZzTGh5ih7rjM4KFRYGN794dRMpCCZkvrwF1fLhNTTq2RAYBYPWKvp6q",
  "key42": "2BWiKYZ8xeT1nGWuin8mG9TKBo6g4MuD9p9XHgGzTAiCoR6L3FMZr6AopJ8MZ2hiqfZpniW1V8p5eKpxHX2iJHAq",
  "key43": "3ui4ioiBF7FBghfohwvRWEjfd4aLzi3UwcB4F8YorVGTFjgjzxztZqjE7wKRX5kwB8rLx73rAaktc9HcBe9xZGy6",
  "key44": "3t8GiUrajagqjthWFcSLMWT2tA7YX87BAsMSLj6YkdkW2tgZb3HMwnRzSfc7ZCe4kArMPJRQodsH4RUntAczXFeu",
  "key45": "3JzAkwLbD3cXjqUPdvgVsLGgS988pKggWerXqmxr6g6dAKyiCFTEemSrUnHYwHMTuj4EFj7rieyKaTtt5SmuWwHd"
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
