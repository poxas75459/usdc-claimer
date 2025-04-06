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
    "5wcseA2ikH9XVjiNH8QywiGQGdgoB7jz2T6pb5M3qBHB94jDBxa4hTKpupkGoMcrp3LTeTVEXQfafzJdnUGcDoPB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DSCqXaEo3xYCvPAP6fC6WkPApVCbJ5DPdBwhveQbPhzxr9o3LNutGd3adRxEEJ2taaD1qL44BxHpEDsqPfxkZFW",
  "key1": "2F8TjTGdZsgTHqkbcwYkUJTEfzxCTW4n2dw8iDCXETEuR9oY1Rv779HQ9K7DzF3H5Z6R3HqnEanPUyv7VEJ8J7oS",
  "key2": "38GLWnqATSCiJr8uhBV6ZW1SXbz4VQAjKepVdqUKSCxunxvCVRcn5HMKcJU4B9SQWpHec5xEA5vtianNp8agBTCh",
  "key3": "2Xbf9ebHfMBrhnRNxyS1CXYeums4z68vQsurGNEKHiJeZzpZcJKEs3iByCK8adb64s4udkMrtYfzizWDdZwTfn9q",
  "key4": "wPJrbBi3srRRB99kNWxa66NfF8oiG8Dokve6kXheJ4JBfufruM3gt8tV5sXFdpRXt9zJFoEQhfxAM59VEhFHwcE",
  "key5": "3cPcHjuntj4uhkAKQTdB33eEKVbUTRKJzrt3WWVUtKzToVYHGPtnoRnNQaxHKpFtADVc8H7aowFjGC2nygec7YsN",
  "key6": "62P2STbKuQFeM7SCvZbGf1ew7pR9XSPpafY6ve3oUM1wh4xyrP4chHKvX7jeEzXWZ2vFSBHn8i6LfvrvCwuE3KJV",
  "key7": "K85xaZBxFMLaicdQFCFXcADqvUKWcCKtRAUHqTE3nWradYrkXtNgvLAQquuX2NU7jyDrs39C7aUprvgnQCBqDdG",
  "key8": "3BDiTpCLN9jB2ohadCGDj8n6srKD6cgDD5rnS2NpXiC6RPJZk3dNDGYreEnxviYpY1EhBP1PUsfCAcQmNCrddrBc",
  "key9": "oXxdLuYfSBCB37zcdCqtunvJfeCbcksNjjpKZWzhUTWJQovzcdwYkyBbnrGo3xc6YxRgNFNHXAz5SgcgygXP9RX",
  "key10": "29HZp4UxYe9fkhtYdomUdmcrFEg5ZDLkwRVnQRHsrPson5SYozB3raE2bm7ygds7pb57jpuJPpgs8eaGTy76NicZ",
  "key11": "3EfNvBqmc3LhSHsQ5XJUg2T88TBXJb8MczA8RgiQ9EHuZaKV1fRKLhFchNKuexUYEjqTrbbtWqnqJpF7vhaizgX6",
  "key12": "2crsoUosmiHfMx5en45Lb1YdFvMCUuiuwZKexthtgBmoZtaE9xkR69Nv9JjPjMZbugpx8ufZmph9xDsenER44fwZ",
  "key13": "LiMcQnoA6TBaZQSoaD6LKyCGMcPZEua9sJjqbPwCbcCcWeseCBWEwBGkdLARY3TxuaiALoH5yYp1Vrndz7PaJAZ",
  "key14": "oQugSms59GTAGibbmXJNgoRDZvyZ1ueiN5woq9hmry4cJ2M4BqHAXGoRpohZWiNuvnZuub3LUpUU4C7uxKH23Xt",
  "key15": "QxYXpEce1FEjrGwfmmUA5VBVyKUAi3g4V46xsdHSno6rdqvmTgmxmcJu9ifDPSxZVthZETacqPFYbDq4pijxS5o",
  "key16": "4mBW5PRyVq5Y1eWkb1tFQDzvhWtfrpuVCEwcw58tzz4xtfbBajFv5NXw2WDek3H3kKFwmsvDHLT6iWFhS8SEo8Ck",
  "key17": "4n9gnF5o49Uy47u4sFp8cBhVaNWF6pduiMvzBvrPVEbvwfz1T4CBNssKHcofA7iusWc3V67ZMp1zuXBQRJcDdFZ",
  "key18": "3DyYAtC888PUNowahHNUw4q4CV46pADsPPuFB3BkzcEcPAU2EmechjP5uGvAkapNLyRDYpiFqZDjMDJMgLKDZ7K8",
  "key19": "4f1muhKxfUnPFpuiqT4V7UJhWhfqGZxSzSgMi1MDv5b4Q5aUCadcZGJ7iVf5Pw3a9PzBku9tey2X3LPRsamjKZFv",
  "key20": "49LnuWKYR8fGqXbo15auT68TKz6iQ2UbHUXLuyXoCSUu5KL2jsYPQs8QFPjSjpysdckx19SzgS3vF3exqCiTFfT9",
  "key21": "56FnqBZvXDHUTiPHEBiQAskCA3bMFXWwbDLbh7XQkPsgnRrYuyu6o5bhRPjd7JBAgxqngAGkmR1mNttdmZeXSGeC",
  "key22": "21KVr42D6UTGmkR3AdtUtUiGvrpTWW4hM3HvgyVXQUMHBkSkERLpuzZkWvcD5wEoUGbN8d26EEz6MpeKXGFEyCJr",
  "key23": "2KJfmJvexjUihYED8bw1GmjXy8tvPecKvuj8r1wZxZAr6Ec8v63SwQ8moker4rNruJKzweEZE1tUrXq3XATjpy2b",
  "key24": "4EKP1fMui31jkTDfcC345LmY9r4FpBuvyL7UDNEM6vVeLSsRS4RNezSESrjxcWtMgLzq2UfjkQbsj8MJbNrftnmE",
  "key25": "4NPjLRjDVWAj6suY3U9sCT3NHkvxNJ5TJJ2zGf53FWL83gzNQxkmyeFivKQAccbVvbV5cGy4Vn8Yc8qrzMxmY7ch",
  "key26": "4tUMCFKW3u3rpQqUMgL5dXxU2JPVnzMn1AgLDwTU4FdaVejeejq5RnhaB5rtbUUBfF3V61FCHHtMi9BFXPbYeHUK",
  "key27": "UZhtckf8Q9RABd493wecp43ZbFKfkZjRFobbCpQuvR7hW49LpSk8g2hAvKnAnmWPwzYz8kEvcUast8tfuaJ4PPo",
  "key28": "3wpbCoMq4o5HZ544LpXjoTa3vtmfvqFCr8Q9Ruh1LnvU1CT4ptCLvNEAB21iUWUXgoThDUDPCeJ6cVPyqe49boub",
  "key29": "4rhM2iAxehEUqXon1bsBv9AfxJd2wJGiJyxdxKzuc6Q3auNReQsZRNAUCkSk7XWcvMnVgeidjLbpoqKDykEG32qy",
  "key30": "5VVvsNtBrJKT5NXVmp1c3xikejfLhiPUZjpXJDRsTT3UWGV1ZCyzLXGMwvSxFjbXhnKAu7DcbiTfGc2r9pih7LAw",
  "key31": "Pvoa1isNvn6srAPwsTfVh3ViHRr6t1tq2zt5fKb76aPeyXsZhAfGiq8GnzEUPZeNavgv8oU8MfSMAj41KNFhLZD",
  "key32": "2gmgSbvHtBU8HR86Cs1mQMCAhDoaGKyh9AwPB8GvQfYK8uSrnsg1pPxw8sWbeXA5SXYHZjK2EyNV8iBbDg2r226G",
  "key33": "3uZJw22xPngePHVz5tvmF3KuedhbHEJzGcY6TKgfoPS9NqfnYwPYzdCfgrATn9n3ivQ52upCjeyVJmiKvuu842Tq",
  "key34": "2GvFNiTAhJUXNZYmXzyGKF5r54Vt7TkBCKohCDwS3WxSqzedgekR6HTWRdxJpY5T4v39qxoENu4JvNc7ipk1g7a1",
  "key35": "3Q5rqJh59QPcd7cjjVYEHTiqgCLwyRHMo9cMqUKC4yo7DLVRUsu6u3yjc3qPUwn7TQ4761DBY5qrDYKbSoTdvp51",
  "key36": "4fioQa66NYpSfE5GpoJuS77frLhaTZa5mq5bx7BW5P1N4P68M9HFywLCgC9Y78ZSqSaLdosbRBXCVGUtmCXZdp6",
  "key37": "56PinZLHXwRkBStNeQHaWf6iV8mrNo1a8Fh2vaQ25bqJ2SdR4og5mk6bLhmWkNmRXGYk8qNVNmppCrfGLX5Kqeyn",
  "key38": "4u5NNEGXFZHzswPuzLd19YgduRMmTn3sBeGKyedyWA7S6bzkcMVrfFxRBAD4QPrXjqUWivwgFnw4v6PXdpUhASeV",
  "key39": "3XAYMSNcJ2ZbCEG26txXcX5CA3R97hfxiZ21TRdLiH2YbmSPCC157tRQGVoT9BgcuCK9hToh823rXSmnf6P494u",
  "key40": "2Z5sfT2WbDcxkiTcApX48zqw1PBoapWm6kgiqx6pNbkNmW1iZZWA46Qbgzaiv9Gk1rnCLSpGjzbdN1axnBT5jsGk",
  "key41": "5SP5ubbkpkBmyuBj5QtE4xYLuUc7snJHnSb6RTLxAUJRtGys5JyopJ3juknC6oVkkfJLcx771duxzU9JpLZV22Y1",
  "key42": "3VEtdqR5GAASMLDJjV5FFRAGpKJ84wpxC3tVxNtHjdBSuG3rJD5fkpYnpiQ1MHZCXcnSFWvLAWxeNaNyTLLAJo8w",
  "key43": "5cNR4CdeJTBKhqTq149h6hcdHCqMt5LYwsiLav2mREAXuSugqFtBAEfBF4moQGC7xCB4Q6oNhGMFjh9TaL2fAyrX"
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
