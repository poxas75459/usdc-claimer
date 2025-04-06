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
    "243fV3HUaeHdUcmruTNAc1GNkoAK3Nyh5fiFw3b9uZYfqLhSP4or18vfyxEpqAXzGzzxFnyePuU1RRPp7pwLxfCF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HzbsW6XWoWxXfXqqfRV3Y9iZhdzHs9FDzUsTbSE1u8uWfNAKkKVdmFjS4HiGo1gZPe7WhFYeA1FAHSnnii58LQQ",
  "key1": "2cWA4jWaNsoLqr7iyxjZR7Uzi8Srn4VzNmcG2FA38RwMkhFa3guuWsnVsTRJx8UhvtFWApUKpWSWDkFRC4SErY6Y",
  "key2": "5tPyo24NC8jj3eaYPMKELDsCn7jgECSTC2aGL7BUDTjVmTWJfFcAD27NnNK4bncCEmeoPHggy9qR5ASgzJYFcPgL",
  "key3": "5EXUT73eXpLitY9fue7L55X53SRC4QvFijtkuMcpvKWrLzciVUKVvqVh21LjC7YfhNhc1Q9k84PBEBNjdCeCAeDB",
  "key4": "3kourWFjqRBGc9hA3atH9SAXd3KHCock1nbcnGNWvnZ41dK3Ys95v72yMAaxxY7MbBaYJHadkFvMkoKV9t1gMsia",
  "key5": "2GsePJG48Qo3WwXdCwirYsz1CTj4zceR6cTcao9PJQdQqP9tfNbLnt9bddvZpXBtQPuRHCkNc3jHaeTw1FNMFmf4",
  "key6": "5opBefTg8LB35PbqUyeXkaLYdkJtVvdnNcwcxUFxKU5hsU9ivBMWhvpTvPZCjUJSLGZpi9fAWQgAqLtY9Gq2S9Ht",
  "key7": "HHxaPML85MEmWZVoP4jmoCAfrPN52SzJFit77Pivrq31LyHFtLkiP55PUwvvEo6ijEZpHPGAhXkimbhvfbMjqNv",
  "key8": "5jZBhUSpRGzpG9Yc5z1WrL6DWs6AG2RLvKCKu75BbcqnjfbsCrHA1x7jcGnn967MeC6HRUyCVLo4jyRbS4L41HrR",
  "key9": "oUeAmHaHsbacKtWH6S86mMgUHD6sqd6USVtnfmnLHH3mxUMHTTZQfNYJMqxqKSdDVCs7RJqGxwA8mpQYhRzMu3G",
  "key10": "3uLt34c5hiK8AQcRyuL3K8zA9Wzd9MdQ9tLuZ2oCfpf8ST3hvcA6uA7KLgNrt3WABATTXT5M6KbDGxswYTGWtiz2",
  "key11": "4zicWY318EuPwTvfeBb3ixz9Ph5GYdA63jhhC18UhTk3Qwa5EWw784e2CQFyHKQDiSPt87gchHaxKMRxkDG8h6L9",
  "key12": "3VK5UHEJ8NZB7BaeXVpwYfWFGfjK3uQybcPVahDdNrkZdmZDwangpPv6wyPkEAtXwNg6GY637c4etwvGxJkf7Ehm",
  "key13": "3Fh2oLj1i4pceaYW7mMDw6Z6RNz7b8U7rbPo2nhqxAkn8TGk5bA7uXrvrPkQJp7kGW1kZhEfo5pYRjwRssSmShjq",
  "key14": "5xBygJreP6uh3ckwmadR7HErgmxfeYFa5FpLyooKEDUn1PXmEBJfA4ZW8eRbV9jLfw9iHnMs6v6E3z2S19oX6T5m",
  "key15": "22uyneD6Bgg6rzRX8qLeQXmEMpr5ZwewRSPRDmQPHN2zrA27o19jB9enAVGk6VwykNaRMpTQcUb6fw1axKn8kWQw",
  "key16": "5RR8VK27FxrLV8vGQMMDpFsEzRb2Bxoh3ypq7sTzEvzx2dXkjgyDR3SbGp2VR7ZJgezjX3g6GgeLs8U1ztx7vsNk",
  "key17": "3VbhumrdWzHMxgNKUMEuzbyDGk9tANYD5iwA6pVSK2TRhVj69cH3G8eQqAxY9ZMRXN9DvpYs1CiEBcPyytyEHMRZ",
  "key18": "T7BRHhXmQGUFdJQaNQoYmZwPAE4h7PCRnN8hhgq3YRszfKFfQjP22tdcqcDh5h2dMJ9rXMvA6wtGfsWUvqd421L",
  "key19": "W6VDEaWVTn3JvRhjxXnt4QyyMxxRdCGEmwnwn88bQJTB9MJxzhFJZpCQDz6Y3CKaCxKVvaCgug9vHsJxGPs5bkY",
  "key20": "2jnHFKgCud9oYjtWwsjBXd7wkmAmeSVj1Bhe2gZZ37aMWF1KwzY1vaSYZqBYNAxfmb44ahn9Dp8e1WhAG937u6u4",
  "key21": "5wBXLkoqn6R1H5AtssiyfuQNw92Zv4Sfkkpb7qtFF1cBJRwxP8za6ZKqvLR5uJGuSHRvjcRaZ5qErFKLiQ1NuD1",
  "key22": "3xPGRAB1TPi9BRBHnYd2pWLQGaVnectD1AELYzcSPUfo55qE1WLhGR1NAnmmXuo9czwpsG3o1eeRyg7R47M5VvH3",
  "key23": "4qNFHdaq43o5gCqFQCRqPbhVLuXHtZENKC7Unu2pFoSJdNqxiv7WhppFjimFvPy4hM7QuDWJkQmMx1MHrcmD3xJb",
  "key24": "64rqYKEwJDRyRjopnbKFULSaQnMjdZHx5t7rFAggYHpF77RCw3AFLAVEaue89gedUGyKSdmoSdwbSC2gqcjY4nvV",
  "key25": "EWTXRmhDaigYp8XQ4Uy9Aa2NTzBdM5gKs65JNArCkrAP17mwhJStX21Hv6r2T5Za8aGs9jTyXVJL3RWPh1aRx8j",
  "key26": "2kjzWAsNZKUa2MzoTqxLjsjrBZpkpnLL9xQ8gbc9KD1zfKFCJwtma2RnzNUug3GuhrVnLy7hoqtTrUXHGgsQjhXo",
  "key27": "4jze3qQcYKj2NqMFbmHYwo56RrB6KUePVhrp3HPhimi7yicytJfV7pJVcHS2NKie5RYwNYZ6KM9sKDf2r9RxwKTG",
  "key28": "4LGwjbyLvrJiHrWuYMaRLPHUZfkRb9cHF6YB9Dvn2XyuajMzf1DtCeHHuRnuyGPhvZ2kxrx41dPysA8ZoAnjaFvb",
  "key29": "5TXdnpfeUUVWydGHByh7PmyYVpZTfnubRFhR89sePvcNSvR9Z1EANpCcVV8yBk79yj5oTBrPbMbhAgMyrAro84SD",
  "key30": "58EdC4xqNFbgZ1Jkw4prucCqXEHDKDMjHNDEa7Hra92xwsciypsBK71pLRBxeJEAH3hwTfV7da8ieK84FJC1QbNx"
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
