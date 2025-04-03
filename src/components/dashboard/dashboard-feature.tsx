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
    "fTC9rWhuqkG3J7ws2m2aD1ckWPEMvGjyypZfD6JXicBEFSHmani6QauE8rtBYD3mzHLwbCf7GsFFNnFAv3Gcd5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KYgiNLDHmti7pP93YdPSSnXYf3dqgfciWowdX5W5QNKkA3UVkq1GhuJBUiwB26hZXL2PHUp9hkcMKtqaqwzarTj",
  "key1": "3Y1hxJ2Y7BMrX7ZvrJriqZAMY6yqEc2QSkfj3PEKfzcTefVvDWp7AzUp8uavycEEXfjeZ5oBYM3EjtPjhsbrMVyw",
  "key2": "3kZUmULQBhEt8mGBinzj57zvnhFGNzMDUMye6J7ekE7JgCKohpPsCGxzhhxLpR8v9oJpPiMNq6Z8REhiX6TybBXJ",
  "key3": "3vxAJ4KaNo3aMYuM8HLhcFifJUrjnJffppgaYKrNTK7xn9EvZJwsSiUb6WuMqaviMchoUTMfXFFcd6hKYrzLFVKo",
  "key4": "Crymgd4d18FSxH1ZQ4pP4PWYnSkYCqH7Ax9tfSpzd2nftiYy8bsvjbWDGnW51eotUwbCSM5Ab3KDxSERFNzChLW",
  "key5": "2hN4iuL8QFrCbonkZhiZC1qHiXPpDFb8m9tGg2E7U4mBG9eMHRYPHFPamTvJUNGMALvkqKVriQeHGC1a6j1d3r6f",
  "key6": "oKuJtkatXeKGmf5NKFA5KRJ8aTVhqVChSfGpRDJMrbF6L6HniC6naPjhpiB2aW6MSXN143kmAojwnFiAWZjCaQ7",
  "key7": "5gNLFXgNbq3UnPVaQ3dAq81EEvwrwxov8mmZ266MZ1vNZA8LZJE4W9QTRfDEGQfWTTLqEZcwLZZWbwvnR4LFNatV",
  "key8": "2jkEMKHzJLNYQHzqL8W4okzH8Uw6hXQZ4Rgjom1LduoPVVyVd6LEmNZaUuevrrYi9k2TMBV5VfwBoD4cKifmGHRa",
  "key9": "2rCNxw6M9nHqfTWAekPeyudsYhe1aRHMygys52FjgcyXYoEiskQB1LaMuKJ2VHxpUDKtegitM1BPSBSRGdUMtP7T",
  "key10": "4mnysEKK2x5rCiu8BzL9xoJN6CVBD4PBrVncNcUoqb24Zhyzhd2nwuMRzvqzowo7EuZpdiWS3xB7UnHCKY8U7NvN",
  "key11": "QN9GZwRpheJ1r2a7oaZNWgy3dSsRGrQnbLjPrVyjesr6SzfEUzfWsx1jAtx4KXAJ9EVpCb5ExnJDppQLYpveGKX",
  "key12": "HdxJse4DEGi21wFrMuNPqUW1FsPPr8imGJNcGwBigmEb8VrkRz3hhcytFAVtAqFzDQxdez3omB2PxdnECbfnCo2",
  "key13": "5o1xY6WrPnC9tGYFdzzrU4gsasPt8JSWNjTiawYceW8Q1SprP8tmt7V5XzHbXjdfBDpaGdF2bN7VkUxHaJqWCHRc",
  "key14": "4VmtxBALiA2o1mA6L4VUcFJRn12kxY3uz7ykoLuHdayTpSsap4jhhPFxipvxsP2Cr21gFVaz2rVYVEBExuTui8v",
  "key15": "4s6oAXcxyJV8ubSm6zmvB6e6e4Xrrhvg85aCmpY2mJGVJkpHPNBR2rbNLvMVUWwKtQr2bd6NomKqvAto7huGqz4g",
  "key16": "5FhSgNT2hNfH2SKp5kPUwmjSRHkD9yP9wVW176SaZHJs4ashHN1Z2vNVuuMj3xxprPZF7ohzKLHDbY61rpnWNzWr",
  "key17": "24hGYJgywfyRh8d3bvfWzMU4CaHSXrkAgWbNPeJeDdNEiCDw8tnz9HdqEbYb7ygNXko9QCsFpWXnXzCTvNpdSSEm",
  "key18": "3tEcF7DAVgjEX4WS6Em76J7scEdvNUFTzcrPwEkLdRTgjEkxdCruBn1rb6YK6oKaCMqB2n9xvBePxx9kgB5orT1E",
  "key19": "n8m6dSTSRMNWR9iZCEACs2DsbDjHpjtQq4Tmk9BeR6s8b2TtC8D6gGWxNqBQrFnTM3j93kfeP19qRLAotTQia7G",
  "key20": "5Qebprb8oyuBVSU21TrPnzTuhg78BXVutR6TyG5GgkomtTvNjUinrz91YbiqLp5yHbJZy4ZbhyexjwQKy8PEjSx4",
  "key21": "5egQJEYuGyZDfp9U2mnL6nTXegaizynG8Q8MzaTmmNki41UZegSAwrYuRWhrsPtKwrAfjahePvkuby4MeSqVSGRB",
  "key22": "ioWQNsQSLEwU7S77b9uqTqQ5XLyi6CGjXJQLDT2nKjLjffRZas5RUKhb57teNfxptBy18RwVzCaJ547itS7HdXB",
  "key23": "5RpMGdXFA4zNGRYxXsU8o7mwikM7TFRsH9ASCGB57Pbgt7iZ8gnwtnKaGsefwZKim5cPwtwd5XPNNaEfDk5s4kFd",
  "key24": "5V7KMUX6vCNVj78v1n5cNGrAzFvFwnMMquswGpTKRvxh2HTY2CKfPsotcEAvsJRTDxWVCiYiXFwfmdmymkRYNwgv",
  "key25": "2DpcmvM7GpZ5hK3CXFzN4DDriQS8p3j7CGt3a7UFLVa53gUqy3yiJYvNiFadGVyxX1ijt9kv6Yi6GnbbVKNPZRvp",
  "key26": "4ffxwhLxyr1jvQ1AexY6cANgi6ptuBbWWXdw2ZouhNb497PW9yX2FuyCxBoMpzqF2nt1WgR1ixAhz7128Ur7sLTo",
  "key27": "2HRoAWudknP8uNGtusSDUKQF6UZjeEKqV5kJDo7gGPnpgtCYYoyh8oNDvbwzay6g42da6zsrV8qzeUgfPF598mXN",
  "key28": "384mHTDAxgpnjKFH8gy6tewMNThFNMH6UQmrSJurNErDMvZjoySTAmB3HJGrsLBEkPed76PTRygSimcDvPAT1KDe",
  "key29": "3pqwH24dHTiTUU9cJbJJW6ARLU3KUrDG3EnhAC7iKebE2TDcTC8z4LjhJBLfPoTjezSGUGvECGHkx7NiSnYkAgCZ",
  "key30": "2BAEZKXsCpUPuxjtWxJG8ZEMpi1JNyc3V1VMDe5LBCLdCSkoTQNHb3GYraoqZrPyeC9t3tCYwQ3SwFT11NABMNyM",
  "key31": "3xvtC1EePPZnu397cXMvWN5s3GBRSgq3hJnL7ddKHUjuWcSMC7C9EYQjnkZSL4QzN1DgKWpMuDSTSZ1TBJ2bzdY7",
  "key32": "CVwsitzc6aAbs9nu4ycMT64HV9Wqy1SdLLM9V1uRHW7A2SR8rmKf4czPugehiVnZyoJxGKD5TrH4Muep8SiMyGA",
  "key33": "5dAzZuoaQSJvvAUgqY9XpDqstT1xB8MQpf4Fy5uRz6kXPuRwheYMtXAmLsChEBUKrNJnvV9yNPx8t4wFKbTWwiry",
  "key34": "66Zh9R2XXmy5gy9XcAnRAFnriFjdvwU6rYo4Jkp8vdnNwJpJ9fuYw1QMQ7kXUirxBKPyQpJSc6owVNjmD2bMtkeH",
  "key35": "5pQ466pRTh3xe5H5VUDjGYS9txzhFqo7oh2LrPoXpGs2dUmnD9WhuhABrrCw7LqqoCc1c2ZLMz14w2AfJJ9a4yEK",
  "key36": "5vBDGpw75JskpgDnVR5Qymg8GxdLUuhJuFsFXHpmadL5we7AiFbk1UCqZBTAuTAL3tBR7mzJPbcfLZacNNLmFRon",
  "key37": "4M1D8ADbHEAxh3PQ2kRMhVJTyz2DbjRJ2TPpi2K4bLCUDyYtJ7GTdEgW8TpazsQP6YM6fyKTraQTo1uKLHUWTrRy",
  "key38": "FhuxM1HfaozXnib7Md9PKyqKKz7hNoZ5mVbRrRiiRxgpP3QgAW2ASPhAKDJ8TndcCGgPzrhqzsK4sNU8GYgYynC",
  "key39": "589sKRmA5PPyukaMJyriY6xWQf17anuHHvWzBG6zxLwQ79VSBdcZbhbgefJcRfDRexb7V8w4d55XmjBZRapmMCpB",
  "key40": "8BUgjywGm1L2qPzWeXofGKbpetuJNgND9MHJvXwGXTNvJe2vszgF79fUS1TKsBoiSN7Mpj3Cdrznp688Sfm8sUX",
  "key41": "4MdxbAcaZTZ46CXV8uZsbvAw5cXY2dUsJGa74Hrp9epPsNcsvTWNrxQjevYSPAM93KE1bJVjFbzzWd3QTtkkshRE",
  "key42": "3giNNQMXc9P7D62beuVWXzcEZQ5WE715W1FEvViEuN1rwh8J7gLP1d7ewnx34ZirVWkpSDTpoH5ujbpnZp7GM41Q"
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
