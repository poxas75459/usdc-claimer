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
    "28qrcqnMUA4hfD4wwU7NNsGd44aUBeYHksUaQMVVoRkAg4VQ7qP5MVGaqY9anReKdMxGefATpKwu8f7yLduuhxUi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5czYMSyJVRrR6DcnYuc7X5kM8VQH8aKFZLVuVsdNBt4NNuGDUrNgAEVgUwPFK9QykCnDEvVLoaCAKxyS9Hn8kuM5",
  "key1": "38jiqPJnc9HkBJgRHV9E7geFPDsdYnHsZWzncFi7HswjnkzgbetrzcYdQyNdcap781p3imrenz397MvNibwm7wDG",
  "key2": "5PrMvLjD8gf5RVn3cbnLbvoj5ugcF1rQ4hdMyfCK481ywWfDEyNBof5zarjoKkAzzqDTyHdY2ER7NLCmfySohmyb",
  "key3": "wxZHYCE8XN7ZX5PPqzU7aCQMfhUNFz8cfhQqjCc4HwBoQr48K6CLNJ7HWuP1TuJyt73ankQom8cavbkwMYDBJWc",
  "key4": "4eufv52nAxZnPTu1PoW8QiQW1A9CULy8dkL2NpkBR4RsQCo64EENBrriUy3qi82KYb817nL7MoRjGRLEmW3a79U6",
  "key5": "3253ZYdxtE1mKGsTZgN8RZo3rRc5tEEmFg3Brvv1oJz9SPCN8SdSDEJE9ZzDznNSBjHWm5ofd8zd8ynyfYrj5a9T",
  "key6": "cWZsGfmqYXDiEYaVDUaWiV86VvyKSUtVXiQN98JciPSAkfxsA85cvxBH8EfiUknKZyRer2CnYn9ebxNSFfCdPrJ",
  "key7": "5hRDBjCW4U58j7cKttqR3TqM9mDKqDjruYjpZCuG2eBvuw6UEE6AA1t8dMEjfY1RJ16ptXy466hxoniMV4z1eP5P",
  "key8": "26NHQsyvkG6mRRaHAmZcZVwghGKtKyTNJfCJEnRBf6m4Vd6GuWSibNuDiSmN1iP5yk9DY1JVczkgj7Nbp76sZBTc",
  "key9": "4ZEKnKZ56ckN1ET5vBNQiUhgBH5MuVrLTgGftNXJdZMH57CVo83L3LN1gQ6ifg6PRsVBrDoWdrmZdd65FbsLfYfu",
  "key10": "3KG23JkoERYRSPGKz1a8SmGeJHKmFtWatavY5XLoKF6vEEHH2VVXbeQg27YQdBxwQAa84jfTG1ScXmxc9i6ua1zS",
  "key11": "35EayefZUtS4Eqr4HYopuhdhw5tfXGc8uVZb2oUPN5LXNaFnLWGMPJnZ8y7fd12xWxEjJVbanpcFyQ1m8sDQN78P",
  "key12": "D5yreSJULwLZtbLZNJhPv1LzRnNFJKZxeGQDpPPXwfr7VmqKkjh4p8yQqzjMrUWHGT1614NFTeS6sikzRMv3Rra",
  "key13": "3TuQREd2vJuXsZtZ2a5wWYEMtq1iYbEJSe8rygKjUTZs66LBjfgpXANPnGJ6R7QGjXS7nNAc9f7msBUumaXgPJhD",
  "key14": "5wUvThKVSrh8oJqGcY6cgVy4Dka6LhPU6REkqJVJLgaY9mRSvE7kYi1bmKGitpbZTrBw2Kpbb1UXsV44gY23UhwZ",
  "key15": "2autoiQiSWU39oERPh1Xp86ZzpU1iquGzSpfXJoT5wvEbomkEPhr5KreuXbSET5FHnsdna7Cmr6oy5L3eAgyBDBQ",
  "key16": "44bu1oENCDL5eieoo5BRrEVu4BR7dXpHkpXaoszUg9sxdeeFJHp2nX3ZYrkbsAGs8BtQC6QBscmtvWofQJ2qoTbp",
  "key17": "5xpweRvkXfUrGkeXxQ69ZxR48u58RMWmr8DbxSCAnXttQ1wRFe8ambspieRzVF4gWfgfacZwFvi1EKmbmJGmrkno",
  "key18": "5dvPY73S92mH8JbMFd9GAHxwEXq2uRq4fk7VN9Zz8vXucPhH6JqQRXvnsWFetFVg9JjwuSEZ2Mai932Lu8A7q5fi",
  "key19": "5oJPxcWEi2ytxoErG8ZuKkdSomPinbAmQXMcPggQfYhfFSzjH5DQe1ZKCZ6VjXsTkiNqcgpi2SNxuP1mBSXRSrru",
  "key20": "JkbXpnUffVVW4ZbpFJbSGvdDZkYS49ghu5nqghGffXe8cPBTnzLZnqmwirrXdtpT1PenBwEU97zi9TifEX2oQ3f",
  "key21": "5cB8G63bHtUzcEo4xxHo13UhazPRPXMPQJ9Uw4VBQrVTVRYMbHC4766y9Ao8DpugyqEcJysMLhih4qAtXxFA8jRA",
  "key22": "miJWwMYGBVaccC6MxTrXbsN5ZZWdqV8mciD28FEo7eWd5g5KVajKevKJ4UrVDYFZiGFhXNF4vjH6ZJ7A5jrU6NR",
  "key23": "5BftPY5daUvbKm8g3DtHq75TfuYbwaggmVq3vzTqnybwtynbBQorVDz7n2mmcpFhwSqaHtgx6GnTBEGg21TWkpc8",
  "key24": "65UWkET7vWYjmHhSvngFPmPDZofb2YwEHiqCiSQpiJEGtpy9P8er8y5Wz5pBZ3rKayN4MDTsfcX6Y6tpkz1KDfjF",
  "key25": "3ds26jeTSiqSr5Cz8CqaV4y2eaBa1ASsswDfbKxnX54U6ncPoo6UsDUztkqBqEEoT2J8sD2ejfH5kNbiyzNUnP6v",
  "key26": "2R4cFRLsgZZWfRP38VXAiAJdtVkvSDyJn23i6WDfzHoJ63o3H8KtU3pkv4ttJSnuRHJGjhknxfDVLuC6XHYApfLn",
  "key27": "3p4Zf2VhHBfkAEqBFnCLguu9fQFouR4xiZ2F7HeoXNgR5srivW3Edj2Kh5snc3Ng8SHWkisJ4L8QbQPoK73gtAiL",
  "key28": "5wtDerhWxLe5a8zzN321iuYsq5CCNxo3bNUehphnKH61yR6HXWUjiV5DsrU9gcWzs1Nbfz3JqidczVfaj4vfBvkM",
  "key29": "T5rgL92VmU3nm71gNi6Dxur9bdVHeeum4bagfA3qYsFHEF1a8bdKtfXCbmmwugjsQpvRx36EhrqpE32hkt6w9ZM",
  "key30": "3a7KR8egfQkfVJzgM1JtJQEgaazWFPGLMrvN9ghBwk6otSdzL4ZVzFEmH3gVp7zfBZrybJrsWsu1HwS3PUce3d4M",
  "key31": "2tqwYzaNgETXFkEyW6WWgkCbqwiFB4gNFjBCHESvgw3WGUBib6vupRqVv1xPSeBT7MkrcSqwdA16pPMZucyU45ju",
  "key32": "5Kunmq9AYA7rizdd2czAxYE7k5vJi2FpuaayvLbV6A38rmFWoEdfbkNGe443zy9maLp4yN5Lkk9ojaPr5BJ7X2tC",
  "key33": "3LKfrHbkiTExS2r8thXUgQVP264sE7EkVc4Mdw56af2c75FhwDeS9kaDBe6Reo1D4zP6Sb6vu6hj2myuS8ngH8Eg",
  "key34": "4qcNZQzivP1mmmidjum3NLJNeK4ByhQcv94JfKUfhAM2A2Uzw8ff8SD2BKSBkTv4LQxMKpHAqNR5o7pDGKCPCMKx",
  "key35": "am8hfryifmQMNECg8S3a2GuGFLScZp8t69iwhkbZMYj7ehEyEYbjSaGAhuwUcQku1R8BqPhZ13eE7ZNyiDYYxhZ",
  "key36": "3wWbi35CRvz2R3aqmBUE7axKhHgQjTb9exsm2mN6rrpRemoJcxEYPqW9KT91UdWRy5N32iv3mQUvs3A9iwjUGQ4d",
  "key37": "36bkUR4xUWVnMGyHScYKb8Jk8ajx1ST9jnEkDfS9b8o7ekxz8HcQEAGiscnWNGWAJMAD4peJdVKymvaqobiJcWvt",
  "key38": "46LEysfYXYVCvSa6MZMZqxYQn7tCM1YRN2dMRLaftRzBTPrMpQNzkubRqrTAX1q9SnZsqWfz29KGVrQ25cyUryNT",
  "key39": "42Awr7ABNtZmDRwSEj9P92Moq33iBWFvUDk36mKb9195dDqergEqCt72ZpkjtaFPzpk118Xazq7z4qbeynrWaBFy",
  "key40": "5y7oKZMgv4Tv8SLVC7Qexc1UWdprJXQSiQjuAoJzMnSDK4MYGobpNwV8bgMxtajJT3xJVAaLrPHhrSt5Kx5uGQ24",
  "key41": "3kBERVjvscCG6LuNrP5SmqMmUQvpMD6t1LbGiXNF6nts3EMu5KV7e4S9Hrtm1rjotZBSaXZSuSpxGrPz4vs45u7a",
  "key42": "2WiB1ZSUbHzrXD2HVudC9zmeMe1ntr7h7Q85zMAq8uMk2uRswqeJpC6Lu1T2GuYdvj82juWpEdMVcnPZAiBnMznE",
  "key43": "2kyez3rbQtjB1d2CNVA8Eii4WNrb1FYwHNCGfsp8vhbznhceun4RczDUyDHWzVRzaRJ3VJbSwGejggJ4ioxk2QFX",
  "key44": "NaV6GuGkJj2nxE7BzhNoPf9TvF1EVmjzHNu4NnvuQ1nAxT9ASCEv9UJFTddFLFtRBinhtzthDuxJs7CHVC6Vu6z",
  "key45": "iqVwDRwD5rNryPiUcnAB6pXknoWhdbBJ9GwHx4QT9hnDRQ7KrxHqZFP1X3B31QfengCZF8EWy73AxN9pH4A8ygQ",
  "key46": "5H3NWqyZVHwuSt5uJTLBUZ7cTxjaGAuqv4jn7V7GcyVsD45D4QDRqjtBbZ3VHumSooMn67RA4yy7BmDH1wHADjo5"
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
