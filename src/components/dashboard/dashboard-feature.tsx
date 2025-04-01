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
    "2HKQxaHiWARTWH8jso6FgfSCxyame7E6rNFx8Hy1oi3oW24pD8S5ncVH3sHwALNHvRUUPMxrzVpHbhnQXDJGm3X7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xKXf4ssbwVcb9MNEHCDe7RUdDU1Q8g28a5bsa91SaGNQusKBzRxDioAmDs1K4xNDw93EduhA9srppeiSfr2gqda",
  "key1": "R3n83KCe8xHPvTVoninfjui2TaS6iU3ybuWj2jmuReaYCrPoruFFLLg3FcA3ZpS48mNALn7MGQstLeyCDWVwYRe",
  "key2": "4ofTHcnR4yZausVDWGiRP7NomW8ji8Exaeih9RsZE4tK2bkN62UEHR4nXMZ2wwpKXAjAzBMmuL1SKtFBF5fm5FVY",
  "key3": "4AVZXo2efFSSCMA7uMgzR9y7wXuvtFNUn54Go5PP2zaToQbmNj3VSHgX6GkphGT9N9eAqko3nGhCpKVCZ7xy4gBp",
  "key4": "53YtmSvXbFVFBTiFokQeobxqzY8udsXLyZtNVERoPn5MiNRUCLB5bveLcs1b1EqAWvEgAsBCATiKPK9pxuGvLd28",
  "key5": "46UMqxedWXfRvsAaQ52Z2rdp2t23M1a3SwF2Rrniw2mwb3TrRqaHr42JCyNupH3G17xXA4JdN3kg83DnC7kmonTH",
  "key6": "3DTdtpu1yBS8Nib1gwUbTgXdBb9T4BufMJ3tqPDE4LqpiMbBsku9Yb4YP4iAj1c1TZVbHx9FyHyai1MqsNNS74Hu",
  "key7": "3jY9h45Qgjsy9SdRQC5Lpj6AR9L38HLMvRt3HvbQD7o4j19eignMvWjriNnKXZSeuwuDL6f6KmtD6vRQJ7D9kxG6",
  "key8": "s64x7Y8t8gPQmzFvZQdjX5FDZEZFXyzAdMzZpNQHnZnxmHfUZu2XCeFpQi4Qd7Xcv3u9YtSGoRXsdkn79NzPfXn",
  "key9": "26V2X8xn2nXNNUZp2rQ86B5aqWa9cMKjnq1poL6j5j7WNXZCiJXVdX7LFngLde6nzXMnoh6vqZSJ3NGyyP4t2L19",
  "key10": "4TndCtihg3HkH3WrqVB7hP1ihgfFuxJjVSXbqbSDsHLJuACUuh6BXPRdmqvRss7SRhkNfEruk5XyyauPKDCBsmG9",
  "key11": "dLCTNpdrkPuDDj1Gpb2JqjTfFJosmvUt44wBuNn9ydx86BTcgpXjqD5T9crxs2r9CUgen343VxBeDHpPaR8r2zK",
  "key12": "2pbyFG9xXf4oL9U4jb7fD6He2fHt9jBLv98ndq5HkcGVereZwARvsZC8THfEohZQf5zzQV9NCAwm24nyho7uRPtd",
  "key13": "5xNqYbADgKWNXazUaJf27ajaRkkp3NGHd7ArBzXcrLLFLrk2U995JUXmvRBmnTcDZrUWZ89Qu8Rs44KpcbVUashE",
  "key14": "3cpdaFGUtojAQxocuRjLsAwgMWNYpED8HZbEcR7hUuZy5Btjtx9NK35yt32YRJXpyuXYzA2SDzrkRRSzSLGAQmMT",
  "key15": "4A9yPZNWHWkwdW5BC9BrUcqTQctd4gjaaUaRCE1WbK4WJ86FcT7Vq95angppc9GtfKWX8toapWg6Wb5o1XykmHLm",
  "key16": "5pNAdYwY3yMZ1cPrepkM7ZiN83fH7VesgziMdiyJYcAvG2hqb9yfLwAx1vghbEoB68vmXrenZwJ44w8uKvDTV82t",
  "key17": "w5Qk9kt1tyNJEoghmND7sLwC9acZ3gNjji1pmpzGmCRRRaHQRxbQGnJKscaEYfZm2yVEtF4JcydzFGReWL2Hb1M",
  "key18": "2dBvWMmqHyeoT4qnxxBHobusqmL2Xg3LjGVqFA7copC1e6FUVEvqm7veafyz7LaCeNwGBu6RUvX7nXF9EUyjQbvc",
  "key19": "5618juAe7nksJzTyJ7rbJMhUPQr32hPDt6W7QpHezNsrtQe3uPnqQikrLr6hdb9GrNs2pboUhrUmJgV8XQ59536u",
  "key20": "2LpNWqRYtxhgsPP7Xf2cm5yxYmUcg6hiy4ZGS9BBM87qc3tAbNHhrWCZSrCoFBSgMN6YzxfKFDZ7725KHqBKrgVk",
  "key21": "2DCmr9PWrYjoaG5VMUsRkhegQFbViBJgCZooQD5wG44PPtsyWwmvJp6YuRTyfowb9DuKpZahCTJvGXwpg8xqBAHs",
  "key22": "2LjrDjkuMokDtxMJEH4mVQivDrr1n5giz2CWr5MMDnYonw5iHd6vPjC2Rnh9bxNQr7D1avo7oxtBCfiiAaSAaWpK",
  "key23": "aVEDDkGwRCUkXHm6SNdpxddedbevb9CRBYFT2QAcVZdNYdZPeUVxkSAaUYFVQ2V4mwTQCj8QgsNZcKJtnJdULpP",
  "key24": "2yH1oM7jeUAf5MydYBaCoWos2PyCo6zqnvC2mdCERysTGWnfaw71v4f5mmcLGshGur8Cviq1rdPcC2ryL4rkZaYy",
  "key25": "3ef3DycAuAeSJWiSp856JRJYdVg1YMp9v4yGAnp2ujq1yd1KiPRU1RQ5RFpqKLvNti7Pv7mfbbrA2m2kK3yDndCp",
  "key26": "56VZPLEHAF8qU5YfyMmjFSXo6crbtFJarmWUzXPSxG6n3AgxwtBjhGY4fxXSGqvCX498XX55Yusn6k6buebZRqwi",
  "key27": "5DbS5Zc6iMw5GVtSnckVQNMD2Sb65mMxgXzBcKKCZkMp6VPUBgVitE9byHMfMSn4x4o9wKofm9pXkPrAfh8eNrCF",
  "key28": "4q4t1srhfAW1s3HdnarjjKC4NeFLA89JX2kgYRFVagDXoY9tSr5yGxWskLfC7BtX67TijbNPEijVbAUrLpox3jnE",
  "key29": "45As5S5ThSz6WQcihEYk2L81JFr6gV7u1q2BmPKxZNbVHSyrqWokgW7GsDVdD3VW56Ac6vJnKUEd7TXUdmnJbbUh",
  "key30": "QDCWRpxP65jRCkCyzMSQfG6SfkPX6riGJWYTfhrpvixp4W6pvUxXLWofL9HRKGXU6FMqANSN2mXjhj4mZKFr7CW",
  "key31": "2tksuZwuJj9g72CCzxiABrPDV1hscidfSz3Z3ZJwf5MaGGQPuFdKYS62iLWQrJmmJ42b6c53AMiKzvmy9pQqC2vv",
  "key32": "386hLeFKHEoJxxjuTL1RwD6TDJVxK8hrgaRUtTfNxhGKPGgAqWEeCHSWgRUMKpDtzujijuhEbCidNoYFyZQhyJwC"
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
