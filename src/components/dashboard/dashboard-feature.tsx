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
    "2hX67h47i3DdXiZECgno3fuuqNu8xHt7TRAwwKrViNZKCj4JgvfbcM9e3qsRB6MPmrtDeAcnLRMMud3TB7LiaHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1xqHjnN2Sghf5quSngdoVLtCoNJRg4HPN5Zp583H5B7qSUsPmkggP1tMFxJW2KPFuTJLS2kkNu5oKEMkb7RN6s7",
  "key1": "5CeAE8Ug2U6xAPRzjSLRBWXgLHMqJpta3Ktb7RQHJ6rUK8Z9movrstwMbEjs1CzeCwT8rqgxdexrPkyD3Y82map1",
  "key2": "2yceFyJNjpTmEgBTtbcZW1ZZWrVzXBT4bQF7hykXQ1yiJ3of5n2CgikUi3w59j7RfFSPMifQXYYtBtLWjwKK5aTR",
  "key3": "66QVvmtvgXHB9qrPW1wdNV2Qor7tRf4pUxJJUiuGe9xjmXTC9WyVgLpVFv1xeK471zCEiqoBj7ae63UrnN1w5Gvz",
  "key4": "Zh1uwxbDPPxseaWhhmicfPVVu5mRicfPwwkXTfEX7AnZh6EXTbDMjqU4qoLL2vJZDz2ZmdtBgvApzMdhdK9JuYo",
  "key5": "5RMn1M8xKmkPf58KeuLGVaXrbx92CNSP3naprtV5KusFeXMbdVxstvAMTHHimvmjpAcBcgeFxZJuBU68Keb7KZb5",
  "key6": "46PDz3BodJVhhVkGiZpBDZm5bz3GQnwstN2vbWh8bJU7X1UFgMV2699GEBvKBcEb4YM73xQo3ixzz7PU9GsuPRDG",
  "key7": "5uEiSaMZt78wtYaYECeLNSdFr4vUuBziKtUbDDnDxjpcJpKPL7nAEZRMaL4z5ZVPmP37hJanYDFrvzHkm6o8WKti",
  "key8": "4sf7E3DLYneGVtWG9sNKTfvjg6zMXbukpmG3z45MaPmfh7ZcEty15SdDUTB8UJ9c9w5qEcx8hh2T5jubTRqFqAQc",
  "key9": "3xikonSWPny79s5Xney4ZptRbzQWPDzxtov5puyL1CD7Xw64EC6oU9q5V2T9wvGPsdFTKTajtcpTTpHFVs1xqzk2",
  "key10": "2fPs7QDrq2SeuqavuMDJshDJ8AKJi7jUTv5wXHAUL3irXAKzyw8gByDeCNuP9hZ1mSF9eNmh3pv1DuoiFhbRCaVE",
  "key11": "3tAkfXsrMaBHN9rYks3LWZKaqmQJyXBoZa2se73qtzonLWt22AGhcA1vCwSgk5ZeCheDcZrj9oFx5nUwAZKzYAkD",
  "key12": "34sXgbSucpr41LdSsMduEx3yLhT5g3yrF9mQPda5V3m1u9WeBJHQs5tUBYdkG2aLE5Q6RTQAcC9nNMfadZ5LkfeU",
  "key13": "5P5TiNpDVhBBuYdY2FhEqEoPe7bfvfgXKPUU5rH897u1xNYnkxhsE3F5E4AtG1rBXH5UqrkRT4Zdg2sXxcPPqrW3",
  "key14": "2N96QF3tTjLgL5iVgG5aHbb1ZhDMb7WkxCNoeCZQfmHUWfLqNecdL3maGF6mF7PCdTpvcXsrWnPa8WNozMqcwqv5",
  "key15": "3YZ8b8sf9wuNz1sjQgSw8kcLCPSU9gm8HJ7Pm92k5rppp3w1hBhkCAQkcZwrmDT7AtpnNeKk9apXNyGenC2HzRe9",
  "key16": "4TGbzLb2Zq1UH1QC58X2AVgceBELRroa4cAiJ2tjTYFnN8WF2a72L4YEvYG1CJwhYTw3y7xP1L9VQa4wJwmPkntD",
  "key17": "4hsN2MmgwS1T3y9EBiM7diRdp2A52yarpFJ46sSm3iYZH6fZgREX6tNg3deo8trhyX2g2Q6Xk11mxTydbEXvAAR5",
  "key18": "5qdhaUfZBPh9ZGXYZTxZQ4bNtE7UM9fYdJ6cDFtGmeJU34onJVpmtoQdQjmo47YF9iJoTF6rR5cArPh9g85UZe11",
  "key19": "4A55JgVbvD6zsvVg69eYC75vEWZ1QmHfZY81FYQmNPXnP7CzKWZDy73AgSmHtKa4As2bEhXE7iQFoniVJ5BhY8Y3",
  "key20": "2hhshFaciuDv6KLBCzfg1uXNKChYK3nW3r12nqBGQD3BSBLnyTFW5KuUQX9y9wmkgCKZWCCuXHGvf8EidsfYbzPs",
  "key21": "4uzvtUuYfm2dr45tE3Yjg4fHD7PtRnqSiGYwHCDxgHAmmBpeP83W6atAZJ1BoooKEgTZvrSm9MMtjpvbYTQ4karG",
  "key22": "C8ut8AYrwt3bAwK9EKLJ82bsAor6WhbjhCWr2AVsbXB2mUmqEEFydAWX6RDbnZmv8WkddD5QATdB1yGjXJGuSnf",
  "key23": "514S9zvTX1aVbBEr5Vgg3FibAScy3nfEsCGofE9WMa2LBVSEgGLNQf245hg8ncS27Y2c3qvxuhdmHFE9Ueia5Dx3",
  "key24": "sLvifpvBWkcXXF2v8w2gfB43vvyrsFBNXBoBiC258N98e5LXJdMCdzuBCHCLwFSbDuozPLGuYLoYycFSmsWUKyF",
  "key25": "4PYmFAZTczBMjWGyj5RpQR8eji5QmupZRvbcHhX1DEbNJX8P6zw1A1FH8QGZvu3B3bXVVAxCiiNarLFBBxSDaeQt",
  "key26": "5SduLSqx3X8HBdzg4dsQ32rSbGtCFwookHgTYDFKxUkB4E11wPDuHoFRKXeDH7KfrHQpMdtXZzfAQGuFombDf8xD",
  "key27": "2NQJrCyWB7StjSz1YR9YLCP5idft1T7wNtwp48pTr6PAprDqKEqLQK5BBkD2LdgsE4Rqw4cu2WqpXd59maZ1iiaj",
  "key28": "22qn36JERXJsft7QZt6eWDNZh8jB1cqyZqRQeMubpAoz4WN3A9gAHCGJT3iEbRjc26jPmc4FwdQYTUSPLk5YhXb7",
  "key29": "i4g3XSLx3NFhB4v6GYGUgRj1qPzoXT5jjfkugfn2NGZwS3y4J3kyYBCgzzKCbEmUcBeSucw8p9tLi22s7NmXiCq",
  "key30": "4iyt1CZTUg9Jmt5LF3RvN7khZeAsxaqwprRN5e4Fv6Tk7Hvxvi17oTNpsGXciBtQePYKrqdAtoNZZBVLsz5gk7m7",
  "key31": "2b68vproHNqdwrn6ZAkTkDiUCYNVQVU5WFx6SPydQDp2s6ji2Gg11PN3dAkdRto4p4gGiNu6VQ5YNunm5fWTPUTi",
  "key32": "5m5dLgAc8WmmSo72SuuXDk7vyE8XSkYtSsN5r1G3fMBLriH8i93W1WAuXpWiZnxNAroSE9dkRoRJKzkPVYsAMREr",
  "key33": "vELvdYcinEg4Wo96XFVZZuwR4i81aZoSCqNz932mUEv4EiKs7FG3J1dBLtCq6Z96rLiSik7JT4dYTamhUpPQTYW",
  "key34": "4CoZgqT7VJwfaGrvXNr25Gvy4xCUZV3MuLJxMyTN5GxP1mpLG5Q5LknLDWqpHE28wUhdqxJawGetvAntpvLqfq1X",
  "key35": "1nLBsxGFybXT4Y6HDQaKHaNfPB5KE1EnVtPKtVRSEpypd5yAmbWVMeUuBD2BA2yWyuh8TYJmwy7BiuRVj3jhZmg"
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
