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
    "46Su597cHxArMebvEL4H8KUPfkDsv3hgbwVD2h6pfBHYdaUv9ysBv58GJ2tpKsd6RZLRdJ7UwqMaUS2huQJEu3xm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BDpynt7wUZk9ecBMUunFy785oru5CSVXhUdP3zN21AtCGNw1ryjM2HqFFniSgmi952FaR8LjfkKLtxLRzrxPMjZ",
  "key1": "32G9Y7TG31RxjnApsmQfyzcqdbSeQyaXBFSBpoPMCqPTeWkyc9rPyjGZbobGQWALoo8UQjb9dA4eHpu852uPLKG6",
  "key2": "KFW7D8vjNUKN9CyeMCPpvyX5E39ACTRPNDFzkiYXx3e5o5rAupdZeajLXiUjTgwTwWhymArkYjRy5Wvh2tnRbZy",
  "key3": "NzRouvUtGQT4563AyXxth7EfoJY5dXBnLNFDqjQBrk9z261tFWqP7QprHCsXGGrZSqEofsVacBnkK9LUbNEUBFA",
  "key4": "5d7kzBeh87g3hw1S8nVZ8ZWdVb2RSonhnZz45TTHNmErgkGS46zzMXznUn1PkG4tGwyk2yWUy2tigmh6gcarTvDk",
  "key5": "47yn8J6UyMkdKFrPWmCN18yQgqAdmWRCSDcPWCeBbQPf4qCLer1pTwAX6WcJ3JEcnnusTkjQFe7whfnhbWHBKnkp",
  "key6": "3JhmpSLP9KtVSbSfGWGChfYyKNs1DaQPExUKQvt4WyEphFDY3HkYHcKowpPGnxrtQ7RmS5mrJguz4TpYyv6wcxnS",
  "key7": "2pnYzTPHFiyJkrG5836ZzDLWuuEMqV1LibidEWetK78SdcgcgsyQe2izuUuzrLZ7Jwqjm5h6GKvzZzmcLVtJMCQF",
  "key8": "3q4Bx28zVG1YpndcHxLTLwvdN2PrFXXpx4NLeLG4PP6dNMjMj9Bj7VFVpKJAvE9f956BF4N4JvMcTDT1j9SqqNZF",
  "key9": "39czCGhnzvzLevDdFKH61TZ9pgewcYbYEtPhbkivdhcLZbFex5yujqGiwYhnMuzVg6m7BT61oCS1LNyyz52rMMsw",
  "key10": "4rc6WhTh3RFQ2cKet2vJmFJKkeFnkagxp4U45NUo2qAzmWgwo5fuzPFfXB2yK1TLaaMhe35QhMg5szZRVSun5xPB",
  "key11": "5JXV1jwJGddTbxWt5Q7uHwPYpaB7NqbZXYMJpM778jmAdot1K5s1k8kez37uC66rWLLazXsLtLVdGS29vGEV6Z3i",
  "key12": "4SSMzA9bkmNyn7mw9tZFyuAuRuPwi5L1wmG7DvdziR1XWtkkNxUoSkD9HzbcEr8Tq22AAonGCZB4tnXip1c7vY9j",
  "key13": "3XYSp2dzD7dMczrKiMtR84Qs3rUg1WunGrfYhdTED45nnFppRyUh83bLy8UARp6gpcgWmP6pmoqLyhTdY49S3wqe",
  "key14": "5aeyV7NmU6DvKQiJWXZ8nXvGgmFFLcMUDBXNu1q8R1oCXoLkT5oL6Ei8myUi8k1K1Fc4DfgpMNi2QyhZfHMnnwNh",
  "key15": "27Xj4vXQT65zfm3VKhPfq8yhEMbGtm4B9AnsoexUXyoxZsL5LxJvQLa8QzeNgxEfd9tqhk3P6RR8nq6MYTsSRu1g",
  "key16": "36hKxmkPMZVsvi7XTBcUqrvvCccfC7Fp2u92rYHcwLQ8u27u4r6mhLg95MLSnYJKXXcEwrz973cGenEoRPjQi6P4",
  "key17": "nKue6Js7wN3S1cya9AizqCNF6wCLm4EnmNvmFs9EuSzkSFVdikA5TGcDbvDvzWzMiNS3S4MJq8kmfYhZ1G3MW2q",
  "key18": "51EmMCrV9QfZpvjoaP1rWUotR9aePYey9Sn7DQ5zTmJr9zdZoupQ2YUu22N5wV9jyoWysX5rKm5yTvXmA86ZrRBJ",
  "key19": "4Dx2BMkUfpq3tMMdHvmVC5MbjAhnm2mZnELWK4Y29JDnkML2b765wu4fJhvdKYRwGwutstLPq9WCHvAeWFZqKtxY",
  "key20": "4GudcsSjD4tfUkD6zTJ2XfytD5C5AjyJCFWnnUqoTxApsq2SVFSWoywyiyYAoE6Su5FjNJrkmz4b5ZbnWQ58BqSc",
  "key21": "4FZtM4tT5KzZPpWhCFznwBYaXvnWcb13zcNQi6DFt6nY1tT193L9VuojV7ihPkjeRBpUgtA36zWG3wwWZvX8PR6W",
  "key22": "3zuqFCu7mYhC145DdwGesgZAzrnWNemZzjtuhnByXMoUpu84tSBHgte6m2gPxZEtkhAT5rMT5hGoBc1BEs5cU1Z1",
  "key23": "29Kyd1WYtAQDPDMfZC7qcw4nf9aAUieBGaT3fKAbzw7cAePQvgcHyHC4rWKL416gcycZEoRvw2g1LgHxyAKdisaJ",
  "key24": "2yxmfU1dxFfdTa21acxgdAAaK5MSmAbQwoq36tfYEG9XG9uDqJ1jPLh1uFxy8Cw6nYbpFciYYkQVfbV1gqu2Z5Rq",
  "key25": "2Ddnyftd2eTejmcaJkSY14pURv9X2Uga9RyEhtwLhhrkR2dAFMQrVEWVFfLunvkp457fAyiv7AWK1izT1kc8dnLk",
  "key26": "27veDe6Fby487nWrTKka1Hk2DpG69Kq56fcFVoSx28SaeS4AgUUeSTDNZVLvZ2o54Hhm5epA3pfU3Wb1Ccg4omaV",
  "key27": "4kZGMkJK3YYFgeiBq98o1s7SS9qUaGc4zzjxzSznTk6HjpEHssztFpmqocau7yt2bM5DgJVXs8g6QdKyhxXi2FXi",
  "key28": "3CvuFKN26hN9k815ic3Kdf35DcSYwgesz7dZG4CQ2fhngWY3W1nDofbLQog6197ywvW8VtdP1BjFQdpWk7UU5dEH",
  "key29": "hzx6Pu1fnaYLAqRKGPXXwg67o4ui5v6GmeyMrwtMSJrfZe1PXCzk9BLcjLsvL6JhMk1sQYko68kqJE8uXnXY91S",
  "key30": "3UQvzSsur6Kj2NDgzrcZG8HemKJAnAon7ybQZa1AEDT2pDCTmSFAYsYzEsXTzsUaDR18rkpSmZzaM2Uj8X8NkXej",
  "key31": "4F9LA6Dnyg4grVcipt1uy2i8yeYQ7oHFjaf9i2DaZeo3hGYdhsxyDJqxPr1o7FCauEuGZ6YG8Cxu4ijYKjsWNasT",
  "key32": "4fSvKtTcv1qJjUA3VNqTej6BdGo98CzhCNRmcKk67C6dQnJU4RVNRMTvqsabN1oTuGAvMGKbdPJuanRL9GzXe5po",
  "key33": "57T7jBMqf7agWDvdPt8kAom7uy86hz6s1JhWkDUx85ipSfuT1TxZZHFupqh852BiGT3Rfb6hWUyzfdEh2PaTghYT",
  "key34": "2nMDxQSVAERGTPdbUoYfsgJYQ67mL7DZLXisqLQfZiq5NuPAZNBWrBEfeBfSzntZ82ppXLn5MDqQhr3RVWRsBtzs",
  "key35": "4P6MTgWr5onBzL4VsWyPk7oek4CTC2NAjhGAeZsD16uyWno2GPCfzPudVgveisbRnCSpJR3RHKdPmhFMEp39TReD",
  "key36": "3zbSkCZBsCJriuzpVUPjHM71UEGPJnaWaihfeVjQYBdd6ai4R4RpWMHzhaoyRg5NsTuaDdhxLGvBghN2uHgacLC5",
  "key37": "ycPb19e4Hv7VBUksNKQjeA1MNrVmrvN6Z3ydGNpvKnRGHVEgenEtRGcb7H6pEsREdwQRBk92hsiJsK6nKDAvT1a",
  "key38": "5rFyudHXxaK6KrYnFBTRq7VtaX8rdpR1hsNL3W3STs3Ah1Q1o1kxydmc5xGo7UZwWq3dZpkDZrKR95rrcvEXYnzM",
  "key39": "2fJxCMps7hAcWoogMeDStKpCQRqtpYCcn9ra3uHzYyKNzYYiQoARv3zD8D3jwPgETXt3nnmiFY9cz7jRAU4qftwn",
  "key40": "51g7F4UDEwYD4p5jSJatb3Lu9iUnJ92WX8fFei8t6cGvNJ1uqSWV29WAxZosYkR4bTEomDKCLmqaMD46QYtM82B1",
  "key41": "2YNjp8kLQDReoicEP64n7EbUm9mHkppPGArLxzjjDJWxnJ8FWEXG1vE7u45dwHhgdwdGVEMYgVVdwbCWYPwakJHB",
  "key42": "2FmdRraebyofBmTDuwZySgShzXETADmR7hqXCUUyuLobvGZVETHcg8UTcmipMjoQmoqAE3vszTS8RoYtgdNHDKTt"
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
