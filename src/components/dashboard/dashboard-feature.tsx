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
    "39ppsskcmX3tzpYEsnEBcwFyEqQaVTpYgoMtT1UbQEQwthg6YV5nJ9Xh9pruzZJzQjDnJJMpQLt1h7MFzFFT4XDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y6SEXfFGCrgKUXdrEJ6vkXEcHgPynhf2638prXmBVnkK2EmFp3poRH8dNn4EE791scA6EqSqRHfBW1eq6tbERks",
  "key1": "3dQUqr7Cqcmday1rJYok4w6y1i8AyG3dhCR8Aexo7dvJupBsHfn2zWaeXWVvPybQYRmjH6V6TYnpTR8piQM1HLwo",
  "key2": "4PaBxzMTsGJavQurT5iFcVqHBzEfdeHp9dbJVkBm864WAtiNo1xmevnTvc8XBuQRkKAGWx7Led17nXbKbyW5QsH5",
  "key3": "5stkVKzAM7WAgfzRjPFvXfkieAU4bjp6Wp7gCzqbd5rdQtQYZyz6dXqbBpe4AJuinPuFun7a9ZNFTbPYdqsCmTHg",
  "key4": "2e9JkYEhWvzsHMV63E3JnfWuyYRWPwFZJ5RqjNQC3en8Q9SHXoAMEC59mtAs3XCkiJeFazPZogWw7zMSRac2Ufar",
  "key5": "3CQULZxSpyJbwEn88HizgWTk6WHtZ3yhFp3okEfYLapyaDqF8Q7kKQcGTKsEyRtXFXsFRPuUDbGj8QW26fxs1Uj9",
  "key6": "3kvW1FpnWiEV8AeRgo96iqyGdfHeVpKVfciJJLoDmT266e2jLLjc6nrCkt1ZJSsydKBR78KJ6i1fKewZZp8hNycM",
  "key7": "2EoMQnPQHNBL8fSSwjQxrkmGTc86EGQzrQJVmJCWwXRbupbc4TtAs1eLuHHx13byPTDHVdsBb5TsfjUgftXJwCGG",
  "key8": "3htrr1fZxvnjvSWVEw1i2gfePKpCASy1xH8qEbqQkswiAL1nKpZSNAswc7qwyXmNkH3ZCTxiMiQah6pQW6gRktNH",
  "key9": "4kJXQ6UqaPQShicN18tY6SpkYYmtgai7q6JPuMu7bwVZxvwoyqPcUWY6q6ms1LwBQjA7C1eTJeaAaNz3agR9e52W",
  "key10": "3DD3YLKeQDRioq22ZU9o5kuMdcvmANkkstJx7aG5QFUB3mzCBWAENZxpMdWyDXmCZPJaokovCwBZJTEJTyp1euVA",
  "key11": "2zgZB5dhoqcv9cMZU5v3uGt71q6H2ihxQCZy2LegovCPXYoh5TEmMg4QapSxFTbC8JaQhjSTqUBp6HMC4g3u5jF8",
  "key12": "5D9VpeUdwcG85BZ1Lu9tjLZWeCQNhvM7PnwHyjza4NDSXjMyCnKyFQALTAU2EyPEXX74U5o381qato98szhcTuYX",
  "key13": "3gWmXTbs7F1ZeKv8p6imrx1MyCArfrGyCkRKXyWDMr6vpW74mXL1qLUJE6XEo9ePz3NG1LbAJxt8KdmuBiriLRoY",
  "key14": "2F717ncFdxVsDsMuh7jWdSsMeo5UPAgBvanDK2UhWHZvdBTaWg53gLgCyfcVvVmTtWxFRBRmhCRfCPwnfCJvgoas",
  "key15": "5c4sEcFhprfd7rTGTiqZKzcRWjDB3S9Z9327L9ofxBnu7teMZintagtwuN36S3zXPWoFXYvBecj6swCZRBZaWzLK",
  "key16": "4cGQ2PSm3Zj5Vy8KVgS7PWaAbYDyt7t3xoKcTjBJmAtKJp3fmEivSw5ffNGeb44p4xQtH9hocNk94W7ZcE8ayzxJ",
  "key17": "j1YFsEgZr8TWx12gUSbf7BiK99dr1q39TnXecZPP7c9CTx17vL2RDoXemn1BwHB7RvZauaKuCMFMdb3QfxhFyUZ",
  "key18": "5ZNXxjq8rQWui8DZUBscHR5mMd4x6Ag4Xaj3Lc4c8bBNKGaxbFYJAPeNmJfwPphFgdpFNRidaUGAcLcTcX3grfx1",
  "key19": "4qb8ULgvTLj12WcEhnmyCgGjMNSTAdygtngphz46PNJKHSLbmTAJxEJf5obyYA5KnNm1uXbXCQ4eaf8tnyegbDb",
  "key20": "cUaGcCVaiWn7uFyyfP627bWFWKQv39DJZiNgEjN9ahBh1MgnPTQZgyxY9VS5nEkTbmXf8ERfnsQAu2tPya24ZdK",
  "key21": "5VbphK6atcNRdFFc7Ge2CsACNXrJwisy5NsJfMdtLCY8gvKK9tDzKCJtM9aHA8tG4X2wiZREPrQABfcDt7hSdPgK",
  "key22": "PHNrWR1vnmMRFthXM2fazZ1bALLtmuj1Ax9GicjzxvYcWMBhw71RaM649urKrmLn7QSnJCdDzGEfWCtGGk2tkuF",
  "key23": "2c2EdUJ6zhoFDpDY8gJqiBMdYcauajRS7DTnqqEaZuxHeJcybj614gDuqDFpxyBXPDstTtXC6sohKFt7ysf2dzyt",
  "key24": "2gyZWXakzHKJtLKSbbtdtNwctcJY75DUdUUy8M7kUqcmB7Gk1rCy8jow7Z8EMpgdGkhmBHANzeFhE5kNKyv6m9N3",
  "key25": "35PPM8aCtnmL1mhpNLnmbTbrRHV3r1RxkPTggvNnqDRpa6DyrVJGSTzc5xk9GqTSDuJUtkToBTxstBdUUXsiZqP7",
  "key26": "2v6pLtCF5MvwHFycn2iM54F9TRd9ZcjtQQu31joV5aoQscFSz52rY9L83UjRsaunugFaXdGiNvNVyAUoxEg4ztMW",
  "key27": "2vk3AWxA7U8U4DNSnu5MoPCjzwiRkpfXnQZeUEezsoBLAi9VTQFjTXPCvKZdA44KrNGFS3MmvsX7pa8Cu1MbZFZA",
  "key28": "pdqWNuzJcSNw3Vmo4kz98XhBZqe89hrb4vo4EgNttmbtgf38MZqChLYZ1ozNFBkGz8BvXM56t11afKuv6itdZtv",
  "key29": "2XontUarg9D51r6vpJkCJ5ZFtEG8sszZ73W4ByEJ2Jqza7nwpL9QK1vHmCrnFB9Pos29qJTD9g9qL2QkbRJV9x2m",
  "key30": "58YwsFZLSGroND4Wy2nXaibat73mowwNXbaWUXmRSxpoXYqdH322HQsMBqPzNfymniDCaiu6KNb1qfLTMWf2R2Ny",
  "key31": "ya7KwAK5BsVtwf6JzTRqGq5vt5D8YSieJtzbn9mCqFxagAVb271ogBy5nWrFy9c9VvZyxW5fWYTB79RFBiSHm7A",
  "key32": "gbveNv1X7XENr687ubCzCNU74dfTorBRSr9YBGr383Y8T8y5ZQqe6Yg9NGvxXcHNoomyZvzttpTpVjTLW4c5YFy",
  "key33": "24B37n8xU3jLKF35GQNLV1tS5cxR1aKqQGJwAy3vssQuP3c6kye8d5pnL1k9gnkbhvxx6xs7jQASrZGmstD5NKXa",
  "key34": "2AqnpnjvApm6VEm79d3FxRXzTSH2CsGyR6WGfKvEmgBRvixsuCxz4mS6t1VBG3Lf1FASX8p2nrPM4J1hdhVEprxm",
  "key35": "2aBHSD3GaYxmwkJR69a91TgxmFj9DeeRaTwF3QuZnwqb144q9qyjwN9H5d3jJMfx2fWvkjwHkHeFTY1AEKq9M4Q6",
  "key36": "62eB4mc7Tnr3bMbhNgd9S6o4VcgMqfmyWJAyqsAfCxrie7J3RwXtvUYt9JHzP7MAFY13VQThS8YYN85niGP76x6H",
  "key37": "RhX4DrEXtmWwA7uB4StZuDouKi96zwiXs8rVq3euvhrYqyDuoZP8f2RHaEGVJEwaiJYTZtuBNUyYJD1z7iTMGRF",
  "key38": "2FmQxUbSjRtw5MRDbJ8xTgFTS4sdWNzcSY1ghqcxrvqwfARVBYNqwsyspZvWRgGt5HxubCqEQxio1FgFUYptijzv",
  "key39": "3SQx8BbCLqhScUr1rxa39dxrgxAae84n8ivUKBDcovGjjcPqRB2oK6ebxhGnJTUURUAcG8kgYNV4CjCTXTVg2NFq",
  "key40": "4xyU4Z4ZoR1SAz4fRYwBcaksWuGPQYwcMMMDdRorK8qFt8uRPA7A6rPp7RUdYgSgF8eW1gsctMHs1eSRWj8MG8ZF",
  "key41": "5dWsY8XXM7VLXFWBymtPamCuwNCmizbMTgyLSvMsxKgYL3ynntrfzMUpNhd7eLCCXnB2vw3r73rMzUFXCXG2qB6K",
  "key42": "5ZJfgFS2eieuvEsj4vDvYqsdoBuF9ygZq89aYmPUL6SFJVhadpG7UjYqgWsP4w21yzQNzNPUJ9S8kUN3r4MZtcRX",
  "key43": "5nekq375jAgmzYxsVMQiC5st6ycXHK6TTeWYZdw7v3i4iVamFCKHu5QaL1wViVY49jDSWt4W6MbgaqQrYvEpdxWX"
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
