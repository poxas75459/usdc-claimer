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
    "31DNn7k8BEBK4KLD1ypFGauBkzU9HZwR82DgiowgUnRaiWAfZbmmsMdG7uAdmjom3PGjyYjzpmRFAb9RG17aJiGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZV4mPdWYDnkmqxyS3a1NPUMYLNwD5yHFTCm7h1UL7geYcf94pyjG5phyo9uodg8q57LuUnyFh7sTt7NkF1DX2up",
  "key1": "4uVYXhKLHhZDFX9w7JbvWeM88XypPJGkzmpjSCDp2by1BU2gj36b9xyAGrBCkR3yoRAdMrEw6nUyg844QTfVjstC",
  "key2": "nNYHENehpm7SoJE4w8UK3Lfki6E2mgAXxCXV9nJiSJR9ohFZqHr2NrvXayaGSSWR5ZJWoVKJAxuXm1SrgBsqLKK",
  "key3": "CXJEhnZ2LghgTY4GvPc3jqsowHgDvGAFBqNVuaNMegMnQKqLFBfRZjLxAnm3gSjzPocmj43Vs5awdgp95KDxbAb",
  "key4": "452CPejAqZsMwTvbk6dMTJa3NzUz3vD2YCf59zvDBbN3Ujnj3ZesTMM27wPvi6BXYiUPNGT2QQCvPb5XV78GZetx",
  "key5": "3wZqfLyNLxYKU2AysxstWFGj7ypL6HCwx1EFWDb95kme6mZtanAw3V1PfJuun9DNUiWVX4aaLC599puBVgMGmoDP",
  "key6": "3g2RF4tRPnpipjAfhw4Qv3UGu4SBa4Qkm9RoEa6NcJGoS5fydSW4izZpWBBZzgjTx1mkwgBvhoxyTQaeT2r8w9j9",
  "key7": "3fh9cS4cv3ofsUr3nwxi5Fdoqs7YVitN3L7jD1hKWHSsmSbpzRJRFvFZcpzAmXd9UuDLeAHYy7tVXwvFCrmLo25D",
  "key8": "4d7E1GEjqdhzrxq4qFfmHYGiRXcdGU65cfWDvV61x6w8BVN1YsC3CrvfVYCBGJUW2AxLKJDDFtwcuGYQ5uGfTbwS",
  "key9": "zq5izaxYZtfyRDnbD2gq5ogt9FWDjHMXiEBmm5Aw7F3wU2xRWGkGu5M2dJR7JCW8NwaQARH87uMHbT5LQsZbUUV",
  "key10": "VA83G7fjdSnuNPtWMdeCCYdzE2MreEz7S9S4wTunugLs3uxp4WUnjquGk71WpBXgzGH5rHn2bqSUjQ9SYsdBuhL",
  "key11": "2MRyxUBDoAvZamN5XM5iMNnqqJcvEnvUNdfwkMps5CDeVNHYHu1XgFvw3Gv7JMSQzDFyb8JyzrXEE8dj5LggKRsj",
  "key12": "3yhSJHjSasQpRcTTpXrZ7YEbKSxVqPN6URr43BC7HJmxzQ3pxchdq7qpRLoTr1pMFTww7HrLrAktfVFFK9YQaQeo",
  "key13": "qgxeRBZt7jQeBJhEKA5qX5Ncmr3Db7unSDGN2rfAq55GdvzqnnbVrnKaHxNW66yPcfUtEEFwXuE7bwGcsdChB2x",
  "key14": "2swSGL8KCZoVRyiEh5ypefP5w9BESZkq8B81BoHChR42QEsbTWQqD5keXajmcKZS8iCZ9DdKXrqc7BDMjpRqXyeB",
  "key15": "pU5yNtyJdZjhJZg263nrB4kh3cg8gVVkpLA9cohsV4i7WPB46kpSkfEgF9HxjNn8BvkfdpoMeHXrTEA47LSX6q9",
  "key16": "3Q3a36SY1R8U3BJF7ffQS7dBkTkeW8CaZMMj2EZBCSbtPJonFpFsxVU1GW6f7DmUdPsAvwX4NprgQHVi7tiQ6V9C",
  "key17": "5WWkBDFfYnEw4m9WYKyfjnm5srqEffrdYwJLi8sWmrrmo25EKA8Up6Zg1tvfswNJ825oEJ13ai3uaGQ8JFgHnHTx",
  "key18": "RJnesNMkh9MvG9DhFm4n6viWJnLe97h31qrXNciy7VghSyBtrscCUbzMHjczaFk9QoLtqzZpUYrKCqGCKahPmcK",
  "key19": "wqvRwPwznb4ZW6eGbD8gz6Y8TmFm8xAzXSPM4bRma58G8GCAacAWmTdMULgWYvaJ1dWMvNYAKdRUJfd2m9wG2eR",
  "key20": "3jPErGY6hpRxG177b72KFwxj83Kop6n1j3tot7KZAAxpWYJNCsCJ59RQ2SRbQspWyvQ7opJcdRgqScRzSSWAU4vq",
  "key21": "5AdMCHT2E1FyiDFN933VGdVTj4hemqpvjjpF8S7X8yNrcZymKJUTDp5aT2HTcufo6KRL7tTrbLFKc2yPWzYxZZ9T",
  "key22": "293XAiXedJDpDoDFTSCWHiqXPyVEBaiPQki9ysibEEKNRaf9JEh7vRVr5TrxFUrvhzhQXAprpBreco8abFc3yLou",
  "key23": "4bEsX6JEy34pRLddvShD96wTJfCNW5gPbjBtbamgq4zF4zCyrge5arPv7nY42Kwdb9vfvTbig5PFWzqigcrjfTmG",
  "key24": "29bwXch5i2sdk4Fe2nxZAF3cijNidJQpSdYATyxixNwbGMspPkuxXX2BPFXsZtwkoZ6cDAfwzDVuQT31rhKFgFK3",
  "key25": "21kcQRpRNEML2R6V1mbjDbwtW5XnNUsSsoAZAKGPNXSbgbj6sLBuCtHh7EEui4RoiUSq721KATpTBVrMdZfMVnRE",
  "key26": "2RR4tdczoU19JYRWH5sBv8L815RvGAkBcSPLUQQ78cjndrrbJH2FXDxSzonNnNVgsyyexKzDDBLWz9RXHEkuicWo",
  "key27": "jnPDiyjvVHaKhe4EUR4LRZbsfQXQeLjBr3P9DKZ3Ha8hdKfHf4t4f9ZC6n1Ei73t8gmRB6a6wwWFGQosE5UugQp"
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
