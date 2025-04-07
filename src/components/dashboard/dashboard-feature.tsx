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
    "4g9HwQvaJc8g1PU7AD9ihvrvMgYby1TtuqhmVsj1UBZwdLcq1tGPkQQg44nMH3TwhLVT1RFGfyLpdkKPP8RpAohV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6tLRyV5cYqtMvmdGvpbr87CrFG7aDAWuoiV97zh7DEvD1Hph1LVgJwbLNEU3ptkNe6bNdiEphbzWGuZVj6GUavd",
  "key1": "3NusRmdgCyNwsksUQRJEhkX3yyDaScNkPcjF3AWNd1wWmkzA5wpjyszRuQDMJn7umHb27iFzCJRxruRnMc1o89yN",
  "key2": "53SYn2yoHWNhfiRmzd3ENevDcu4RNNTfLQCVm36yXB6tdmfpt32BZLyZBB5mJEtVG1j49VL2TGbFBwpq69GfPpPF",
  "key3": "4QkwHpRKwr17P8yKkkxjmsUo6S4jm9YFREoRcybh4c5upimcKDTxCjpBAQrvpaqCZxwzt1CBzZTT6os7wGVKgXTD",
  "key4": "3mszwzzd7zxwwdMU8oXNYr7wdRhMpXwfCCivfpbZuE7TnyjPkHb1ucDm59faWU4VGPGYpmv6q9xt2vfuQBh367Rx",
  "key5": "5puAYyUdDvNwuuDoQAyQ9sfU8ujnyDJETwTksF1TYyFBpqBU3J3wdqeiyC1H215pyhq7fTHY1KFMW66nFb5DtyNG",
  "key6": "5rqpmpzmGWLNrYtfdiEzsGg19e1YXPTWNtnjuCNWX2QNGevEHxjx3CzayGYscyNR9RM4GFHD8HuHQW6P69uvzoUH",
  "key7": "3QBbbDQuPvZtihLA4zwXZB6BneNkXJhKmzd7Xo9aJpgywrwC2ZGm6LVZXYcq2FcBJPFaDBhUh7vbbNe216Tv7B4V",
  "key8": "4VC3Zwz7Hte2Xeg2QV6u6U76SK8Y54sR2gjR3vvuWbGdBq72MesTDG7uDwxQ3UdTXDYrEB6o6ePZgT8KtbrqdXDe",
  "key9": "4zxrdinRFFkR9Mh94MFi85CViyFHHNFE2gM5izykW6V1ymC23GHgGvbJDoUuVQrEiSHk6Lpj1XUj25LgsWiWUJJJ",
  "key10": "K7QZcNvdY7Fpy4wLbZPUMACtyJa9GHXFi9HP94EXWAKcv775e5cNL3jL7qFTVQZ5twJ3JxmwgVAW2m5x7srChHC",
  "key11": "2Y32ST8JJCeJEfQS183wMezJ5cRkF2YoaZiavNm7iVETWWKaXYfyypnA774QpW3W6sfdkSMR6P3s25xGLVkMQKWp",
  "key12": "2RU3eiCe8zMNEZWF28TE25FgUA8AivQfFWAgLyxyoX1W7dZ4Z9UJRcsn5rvjTN1j82xSnMGzH57NVVPrJYXedHQX",
  "key13": "61MPajy73DKKJePb15FgV9QPCJPwC8firVPDLNNhoCnNjjf18KwiGtkfHRZrVQaYGx5jzMqLM75bxSFmjQq3UJ24",
  "key14": "4LjwunBAtL2kLQzsjWZWJ1Kxd97MP5end9SXM6ehcRBQK3vy2V2RE8Tv8JyvCYis7AejYcgiT3vYecL2shttrzSb",
  "key15": "5wj2X1HhNfvN7XnAQ9YqE8X16iBUEN611bXzfHHtURLsx9irHNE2QxnzLxNrMgQyQDwD4vwy9uUh2X9ouYZJg8vb",
  "key16": "4ktVu9ECEEDDVALWQ6pnTHbqtiic8qEocpjNLmGh3ykTsnUY8KMM3c4SA2fCwsFYhXrajWeUQATcNUpaZRfhNYtP",
  "key17": "3HGSH8dLPT527RjjvaBTxtwq43VMzHoRsAEBrMrJEv1GoYXErbbUbJnkuexHQUp7V4aPgE5i2Xg8PUF7ekzBQcuk",
  "key18": "3kxRGAhcTo1GaepVu6nhfcbSzFeYQkVJspNKwSMXN7KyyTYyYp5mvJzi587EPEi6VqdK8ULALfHjmLj4go5uvFcS",
  "key19": "5irMuHUhsQ4sPpJEy9vHD1dTawSCuPFC5cR6QSN9RiNKwPkwh5SQtrvLf3qdMC4VQmbj9EXdTjAvab3JnXq7gcVp",
  "key20": "2ywXqVxfyj54ddxjN8g6oEX2kDuzwZt646ScLHzEdQKG6FVkr6om9bSPr3Gkf5jsPmYASVpC7HfNam7o4fjY3Rj3",
  "key21": "531MaCbm7TDdwNVQ4qZXLYoy5LsRZrtFuhwgVF2mrN9yARypdVYaLGUSbxEbmTmbakbgHNwUA2x3cyMySjgVggqj",
  "key22": "3aVYioQGomXGSqdQAAp33Wt65rchZe6kAmAKJ3yPh6onboRXRsyQJkJSNwasvK6JusiKfRqqBXr762DCspcXgWnS",
  "key23": "rN8zaRuyWdxXEERwHvH29Ny7Q3AcWqiyVfRwXSRMPZ4aHbCeDVmSMiUgdz5pDcbWCaJVx52eFVw75TuMPDHLNyW",
  "key24": "5v68voskVCx6KywYyyYbve9ggpp6HFpoFnHSpBZjdJWx3fhTVwaE6mf7ko8hNgHauY3SzFaV15eB17KwbXyZBWLf",
  "key25": "5gtHy5btfiD9mfuQMAK2nskVWLHiFjwWcLBaPMqc5zMh1YRTN4uHKMq5u5JkhKY9bAhSd6qDqRebiazniQUhi4TP",
  "key26": "4e43yCbZvM7rvMkQMMzgpLRqgyvMGR94jDrQ66HUH8syF1KFZ8NF5Xk2yVF7M7MwEFGizMnBVknyZTSyyz7ABiHG",
  "key27": "2yUQAR8AMFgnmagw7q7L2tn3zQnFZWiXSwPNF9cWqjjoNdBww5r1DMYRDrn9HwLNAdf7WdW8rnPgb2dX2t7Djqiz",
  "key28": "66jfSMae5qnmdiWeP8SyQZSFpNeJHBzzzm7C7pZEnPxi4g5bKHqJngxJhh4Whc7q7ycnRkvCJi6wvuSKYHsXnD1v",
  "key29": "BBP8h9zuBkbzs2KrR96oLEif669WG7aDMvqqpzyd4ENxB95FpJNW3y8XN47r7NyvgX1mqAEsHHpPvVrE1A2JJLD",
  "key30": "55KHeDgYVaD9Lbqwq8Te9pQ9ZHxm6RMipFnjwTQ9Z5HuwZYXKJTS53LbfGSpQuhGhB1FpkRyRFSdxerkRfushFcw",
  "key31": "5RYYEjzHeVy9YRYeNnPbs33uavqgscfPD1vsivWLKujArgdJgY82BFyXMpuYSic1TzchDce7343hrq5ZKb1p7zDB"
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
