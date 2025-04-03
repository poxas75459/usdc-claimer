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
    "2FiXeYwkJzG9Br2yHWhVSo5p4ujn4fc8UFypdnmWEcSN9VQvcYoBc9V4WMQhpAzgaYXLJhiuwiTNSC4NvjopHbiG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E2QdQTohafrsNFYSmvmo9WRcYfY8WJFeZ9HnM4oUxjxivFb1K3RGpXX58Qe3En6Kru5XrUvTK2nofhmyetPnmvq",
  "key1": "4DRSQbZuaPx7ZWkcnZAzf9NfDgch9SvV1yBYYpo99mCmMhuYo2Bw8T5L9hmHWsRGDk4BNuP4VWwbP3ZMGbozCFc4",
  "key2": "4NxNpUSTrCCa1Xj3RTUCek9KckkRHC93WYVJ9pon577Ui3rQAtE8qDPHMZ2m5A43G9jEHQDhX33356G8ESieTBBx",
  "key3": "5FF2K74uw9eyoX7RwLjVymbB57L8JDRvxvgTYJFQm7xEBQHyFAB9qbx8gRSd6txWBheYa7hHSPSKFR9vKVx2ovxa",
  "key4": "5e6RTgFz5XLi5aZjwSA1TJ495Djwj4gxgjhkqHiGYiuwybETGXNftgoscZMKun2dFaET7jFsbhPMcb6GNedJeSWS",
  "key5": "5So9jXYFMfEps7zKvgfTg6AnrmAuwMXFfVJSSF78AA6uRnWembAuLygQ5rbcrcFs4hQTr3NPvNscDN5R9FqQjyd5",
  "key6": "291seM33a9KBiAn5emWbCRX9iALmtNPRN5HaTug7E716CoyjR2yubk421i5Lr6GYEQ6MgyKppExpnXPWDNsPBu2W",
  "key7": "5uAT7N17y2hHHzxZ8E6gkKkczd55835ZZLWcgDwev2xgYcr9XsQW9rzqxjWZDmwKnrDrcW5xqtcUVXenuAe9AMeP",
  "key8": "5QPrx4tLYjYDnNJeGA6XZcSaEVCfT3a3CadsaUAKzaZFR2ZeFkf1z4advGHGZpPSoEwD2JEMdtPvQVeXnAqZwAPZ",
  "key9": "vjSFU9R76S5QG8SgxKG3geHYLsbRioER4w8Z5qN9xdJxFtm4gcTgrXt1viky4cp1XiqxMvQGceXmysTzx9wMNyK",
  "key10": "5FTeRjBQsfikxXNEntQHLLnkSFivnejYbrtDuTcQ1VZrkq6ZDiHjjjgvy2HirVgtSsKfNw3bNhCBdstRXG9ZFJsr",
  "key11": "2o1bt1Vta5L8JMn7NS26tWt43hKDiP6DNQQTDv4SgiGGiPTe1aBuZaq5Mae5g6nEdZd76sqDLBznHTYMxrWZaPHn",
  "key12": "5WZ6oD1M3MWLnyYuzamvvekLh6Qa67w95nB81jMhvt7FE1NJsEHqUarHkfaFzPqaKy2JZtLwKwvrGLwt6qGqBpmB",
  "key13": "2eJjEkVACpvLUXJ7J5ddhvUYFoJhkV3NaEEe78qq3Nmx1AAd2egWsRF79zrQgsUw9TVHxVgtYtz3L25ou9tVfn3B",
  "key14": "3m4aTxRWKibenGhzfVUdZnFV4C2xYWxNdUgLZ4KtkvRywPtKyrUvAkUSWrZCeWnE9c223HUXS3MmssQ3C43c69NE",
  "key15": "2iYW4zbmjTqTJyWTrmccgw1hCnj1UvHXoBwKquaJRQVMazciVcoKNa9NhbE64u1Uh2p7djwssPF3QmoYGzT6Eig7",
  "key16": "4TnLi9HzaFGz5TJw8Muw2EwaYaDezMYEQ68tSMYnGpDsu6JLY2YE9ykh5ejiLxKQktjbyDcy3SL332xB8tn925wX",
  "key17": "25ktdmpVCiQzo3Zq6McLHhnL9zg34mMEt6F7Xc8jV7kgMW4Mz47j6wMPzeUM1i4tuCVa2N2JYd8hTKEtcNZnss5T",
  "key18": "uobSDxot9J2Ycq3WSAU7bdJjFP5sTymf5kQGYGuVX3SWv3ycQPCq3PJkqoQsK5NjFoEmnWpc51RZAZ8UbzxVH2G",
  "key19": "4kCs4DVoRfRC7qHvsjUhLxo5GBccoXfPatbUqmpSWDEneWbeRGrzyp6eUVUygXzwJ8fJnyqaZaezrQXgq4dCLaTC",
  "key20": "27bxk14jZSSzCmqkWHVVb5aNTRSwhjAQrKFUsf9e1w6SZm4UGrF9RfccxYhcvqfptLLPdNp4uaySH51RZByQNoyA",
  "key21": "2y2N1RPKvbMPurft2GYVuL84jqK9cFHZ5Zs9TZgpaxdkHPz8tpqrztwyjJjNwQtgnY5gjNJzSM5SDr7q4pWATwem",
  "key22": "3LiLiNiz3GopWtot42mPoeqKL8FQt1PTw8HiWFdyXEpizT6mjHaoFZNKsoxjHYjcvbD7F3R2Jax92PJkHqdfJbXh",
  "key23": "22Zic6nhhdQshux7epY61V8hyJKr7K5nMTnqxS2Dkspoj3rJpPrpfuYdzEar6VxzmBMoBx1v2MdjjCrWeEVYcygh",
  "key24": "2NGncgs1C5qkrjCqdnnPSnaZxcPnHuFQTp7fBf1x2ezUAg81TuJnRkgCyV7Yuzi7yFzytUdyjAUaHDFGteFAjtR9",
  "key25": "2s9wFsbvqtYRXVUBCX5izPBskoanxLs7rPc9iSKiY4spxPdhazXxMtf7Hf5MzSZdwuWGY8dgPuAqNyxeeKq4QHkF",
  "key26": "44YTjELn4Ru4WHzrfoNZMDc83JQr1vuXXq4Zw3sUfUcQx71JD2XhjK657rPZKQMoih5cfLyvUd17VrhTtWmNd5sy",
  "key27": "3mmSmyDJNB7nEH7LuLoxrCRS1CGF1e4K7asUpWHE3Fi9MN7gJQ56eQTuwKyjuVaR2oSwQxGTxUYB27SNvMguXBbi",
  "key28": "xjgMFqmHh5hC36i2HZrtYmvRWhD89QPBUxCxjfnkZU8WtQKUZSx5Cu1fZZ5bXZitCWVrMsN4hNoLhKyYTg6AH3S",
  "key29": "3dEPtKxW2wgJnxvmGPDrwC5zMLrrhiiQQ8xzTnGKXVyJoa56PDYn57HpJVYjM3cxUVCphbqYD7uwen19cRtt7HWX",
  "key30": "3T8i8WFFF6Vh7HT3SFQTnA4ZWnzuN8QC7WBUKPcFTLhY5r4ZP5YykWas5Pzse8ushvZymXxcceNQcCZesc1QHdYk",
  "key31": "5e7j7DRXvv4ZQ2hZb7QQx1mwbbJUtP2QZPwjRLERBWE65rfQWV4Xjdmgq1nr1xgfL9FTV8EpPhDhywWHjjHLYSRi",
  "key32": "FmG7U6gzNRf218yLzyjC48r6Moe3zKGmSwJCPG2FgmQqD2jR5WKuSCzAhLzeKaJVRsABX7Q9RdayYGTFQTgnTZN",
  "key33": "5cePmWPmeN4mazyePCXtmEuZ9gdTYgRSJi5EhEfm1wuvF5nfwqELEwfqNRDiboiKw1HDczn2JWU8PNNUQAJsCuwR",
  "key34": "RN3dFAJsbx59swHDHuHbBn38dnmRdK5Sdy2EbN3nzYvaxsqfkQrtyPM27k3fSNJBVvcTFHMhrW9b6ES5MMwUzJa",
  "key35": "3apZjg9aNqK7Adfp5hWBymFmyBKcCGqnWUYQou6qNisiNCikLdM3V747FoXHfPMXxEeudzYCNEbNnW5W14tdALyw",
  "key36": "5Vo95YupbxVoQ93z1i7wFZppVm2Dwf1bxEazV6EaKv9eLoNuemeYVyJDXJ4ves8KAsSy3Z61rViTbD9ZkA8GaKyh",
  "key37": "5AozFk8wCNUeMUwaPfq6g8dVLwUvZWfmj4GidCS8DPe4J2wahXPTEs2wXZFDN9bCHDWyjiDS7nkMa1Pzkk4EsKSS",
  "key38": "3wt38YaZAKFSH7kWgZVPyNfn5AXiK7X9TjadaKbRPHoVhXJXJfDfj314BRWeio3EdjvHF5Cqn8n8DDpBuW5YU2qo",
  "key39": "4N34Z5VbuYwZ6DVnZAN9e8srqU8ay8mnZr6XUPLjQMamRxWN35EkvCS1xm6EXRzTCjgPNSGpM2foC9bjqzxrmZjX",
  "key40": "Z57gXqevG7K26rKFTwyg5LnhYg7ZUj4AeRUBboS18uUog1fPErTyyxBmeR8dfrjiMRv3C336FFMbuyDUUxNcfKJ",
  "key41": "3wLKihEGbHyjMzu9d8kAcE4rERKu7QhoS9ECSbodbcGSP92ESnqiRq97NwfxSC3vEoUxjMXNBr5xsHtT4ei7KxGY",
  "key42": "3UhMatZLN6NB2r4dCVfHWpFA12DLed6VawS7E2Egfe1euZRP6fm4kEr8FYnbNLKjmpwHSoJM85EoQJC4BcauE1cD"
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
