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
    "R35mpQmvKpruRqWst4Lwm69oJMASKXTJXM6T6dPohdeb82h6vKBQRJFtKvy8FmM2netbzbLnZVk56d38NiZEdpR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zJxxM5TFozFsZtSu5mHW2utyLKwGSHZuzbz2VJhh7NGU9oiWtGWofLNgCe3HVeNPrh2MNQAv1dhYrLjEMVm6M6k",
  "key1": "Diiboo68irvDYSSAFDQHcP3pfwyXqPYqNgiBd76F6bhnnPeVFaEbhiiUtqLmQ5eyBwynBxJbDtjigr5wx2y3JX6",
  "key2": "3uHGW2B2HsTsAviPqoM75zcDheNECmPY7SkKRNV2JbMr8WsYxSjgV1H3vvRVkLopP7Tv8q8nWAJAnT6byJa7VkFE",
  "key3": "2eAEu6RaX6gqusyDXRB9JuHWq3EehYpU4fZXRpzzg3UoBveZ8CdFuRkRT1G9ZWPdnzxty93EeejWDxgkVeHNRWsf",
  "key4": "4m5EVH4uS8LmyyNNvSBpH6D4Uze82LCSRhdYtdr89xFJ2pZYqQThmtQnpXG4NbmYsXsakMkQ5ygoose4qWQE8G6u",
  "key5": "3tWyioxhKMeKPVeVpBNaPeJhqed82W7vsZi4s3j4kJzrtguGrr1hTmia59k71YoaJV8GFZdAdT5sNmaqusXs5Be8",
  "key6": "2Ymgu31LaefrADywunDvNyS7iAsUknvBMrsuuwYGJgDPzZjLQpBMuRxKuU4xos2hL1Ru8aot6tJkLmVUeACkVw2z",
  "key7": "5bpmVFzZPVRfaY5GRUXGodHcHsujyMrtZCS43nM1m4ntPjomkc1cM28tBU8z8D2cC5ENAiHHdyP9X9ggEZwTzZ4q",
  "key8": "UUh7Ki43RRVB8aF4EGqm23gV7CjDdFQL1Lqh5utf8ueykkV1ZdetfsXnJWveou5LizHpzPMtXoKRxr9ArhPQgfi",
  "key9": "5qM2PM5bWgaGcmnVcM4jCJGZPDcToUa4RDsipP6tYFMRYUs4fLoHte9ms86zdorK6GFysRyRhK41cKvEeAqov62u",
  "key10": "2r3a54GkvD4i4zRNruh3paJicPmEYGYMQmuY1KG25b98KvfVKu1afp3TA6QdbGEukH3fEdgZuNJ272gWo9dQ3E4A",
  "key11": "2Z7piMs8ga8MSU1w8tMSsq9bEdHsAtubQMxs5CdxiiGcDDHEjmjFUzzSeNFFT24yG3bTEdNve8ciXystkpT9U7xX",
  "key12": "2uLtZqCpUSpqvz8NWyo1xxUUWY3Zja7CUEwr7yGhJtpXUHuvGfsnLhKKUsgk7rxP949waaPLGqsc7sVP642a1dsd",
  "key13": "41NBD9YoCWwH4iXKMybmqcYUgA88CWJqWP36ZFGBPDDR7u5Kv1BwwLd5sFAFxqFWgkqJYJTccjcusXqJvjTcw9H",
  "key14": "5tGaF6tE8Qa9Kna55cp9fwJn9DQUCtwe6eK755iiCtmrhYDmAYKT2xLHoWz3DpuK6Q9FE2yX4yU4985ycyePytsh",
  "key15": "3vBAovzhD99RHjvQ6pcVP4H1tLQ1vehSzZ4zwWvAXPQZp9YqUEiE6S4PKNZ9AgWtL5gvpNEiKXbykcv5mHukQdpm",
  "key16": "5GovYzQKb4UrVt1T3s3ZKH1tJaCgFjHPKttNSisqZ8XqAcLQn12nvsngsJyXrJSbbw1zeP1ykzRtJGg1RuRQVQfE",
  "key17": "hET4efNRmN4o4k1URk39m76PnUvgNrsStbHtVzpdGKLocmqV1YRcETWQUThDWJSMhCEWrGviiJCqcTfTmmtqGhT",
  "key18": "48kLR3oLaaTMK9GxWtgGbku52wFJXL61dmet4HHaSZLj74kCw9tnxuHaLdrx39grYZn2h8jiJ9ANWdS7PEsVMzNd",
  "key19": "4myHMACcwsmY1D8M36YQztN9NPHrgNxUVUg3ogh9DzZaNrNUrqGDwRJpqZSmZvZ5x1ijdM4ZeUEQdkB6qDPRRHAS",
  "key20": "4KhHGACdZB73vonNYErZ7ZMz5Yt92AJhwmb4NXgSthH7pGVeUj8uSkvdYwgBZXLCRKSQMeGk8qZHFGNmSoMYqQNE",
  "key21": "4GjVXh8zQPWgx61pnv81v2VubUH8tcDnCE9m3ZxzQDpH24GpDHCeBsxn65eQYn2p3eHnrKuqwCv3MSZEV2CXLBD9",
  "key22": "3d6zzpvL8NLCK9UcTdvjtARn2wEaMkG9MsyKrpB3iCGbG7iaV6XndtV47Kv9B5KYo8vJvmjvHPxH46CnfzBuzEAD",
  "key23": "2f981gB41Eq35XPEh31GQWVuXjHjX7Sy5mkEJHrsPuAjBrAJY2w2wbJLpVXiBimR1irx6XGirjRoXo5nS35trVxF",
  "key24": "2x4gonDymbxJGHAcGAMJFaXLtHgRRhK7neMwZLgTYz8wXyosmeaX5EvfTHrATTq24vavE9qwmpNkyhkFJGnQR57h",
  "key25": "3fSwWAjYGPnjj3CbRhM4sm3ComeLNXZW9wGnvoibctmUkCc35ecvRwwFjJDe6nKhyVufuYEqxNiMbCdrqiNwEYKm",
  "key26": "4ZHBJWmtR7QucBiPLnAr1ZHY35dtuNaVahj5igXuEv5xoYzHME7Vs8jeKFvrfmcbBJQAcpQzah9jzPvFwX7ySsrE",
  "key27": "4sNGvYTm2nwFpryZt9g3LgMV7AKgrGtwxTGBbPTZcg61QZ2Tk2U72NRtiuenm7xcEMf3bRwAHfK85TLr8ckQPKjn",
  "key28": "4G4wj2XxThQa3LHjpBEU5wAVs1EWVFE4uG3ku6kmJkLaAhbC5o47snzh9horNnjbFNpLx4Qr6wKt65pixPCBJs3D"
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
