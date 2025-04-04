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
    "2HH9SMNoUpeL8whJmnhmAhR7YaZJgU5KSx24s9WjMMTDd79342DvUzbAe7nPnvHgN3zqh2wSKXbTwNRtgcad2bao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28tMtnbm2dNENa6BmW5k3tPrLFk6YrggfU6Kshhv5VJ4xpyDf2ZvgTtD41SYgKcgV5WW8vi8b2kDEucVfQbVaQu5",
  "key1": "2TwqYnv4cndioeqKk4qYi9kQU1KyLfytGGVfP2bRejMPbxDhrzgt7y3mWUNhy7wGkd9zwxvvcvc4MSLKmP87bAZ6",
  "key2": "3rJ7ZjtNZ8huxkX9boREPMMUYqYsYgeq7RQxsYhpxhdx268sSDDDBiMfj9ZMxuVdLyCNv4ibWnH1mAw9Zzj9nDJp",
  "key3": "3hQDM7G3KCFnDce25vN2u33P3CqL6bCMFyKcmTTBfe6oyhmoF2u9ZtmJfdGnqSWSaH21jxPN4Y6rSwRvBnY8xB45",
  "key4": "67mAK7PLXdVBstmtoVbHXwA9BdLbmBp8PqErw6VaHGtTKXHu18uny5fcA6pd9qtH5CCftgp6KLNaw85A3f7iduzs",
  "key5": "5Jyvag8XV6Q9FosxeeAzVUvRFFpiejHbdqzrGhuCkszMvkYfPH4iS2FCedpxXYUY6k8zVKJPux3X7byiSafewR38",
  "key6": "27JL5awzbWTR6ZsLedaGzCeaBEf3SkAPJxQrkDvHuqt239omkZXNJto3rbd3fRW88B2VFERdDHsgKDGTR54QNSDT",
  "key7": "5XaBA83nCFcAd6ztdr8VB8MxJWP7wFXJ2jBaR4waD8eTDbYKT88p6EnJ8C71eFfpoZFdLwwXmE4ouQ7fsdgjy6AL",
  "key8": "4836N2ygamhWUXiyNBpw2od4146riyK1Dspv3riiM7c1us4fthTRcGGK1GNcLnPdFDhjMnnt3LyQBPuo4Wkdf2be",
  "key9": "49Qa25sAyR3XWvVAjysv2uchAPf5CeoeL6jCHoSuKmvxpCUBqnTiKQgbLFrsHHiyRgQKw3rKv73rdEg7CBUwEEdo",
  "key10": "35kYmFeiid2G1VhFAoCUayuZ8M8HqGD68sKxBND21asWfaopraznJNXLC1HMfxwSiNVDoQRUXrMimyaZ4SvNmpnX",
  "key11": "gbKE9Vspiv5juire7pHLGr19ALMBAzyFk7du9cGyc6nBKRkTF5dLrKntqKaAt5VTznkttd8kGMCXuCJZUoKCK1t",
  "key12": "2JG59tDDpF4CvUwZ7itRSgLsTNwbhQv75U5YWqoyj1bif2Nb1PjsTaBS4qVUukgUQ4SQudB2t2snECTQSjgkXMBv",
  "key13": "288ZTBdVUcPyiKmjSNkLRqkc9Yvt8VB8bEYK3R53wUrwiv28M9sdAum1an5fr4m8ikxedHGT9q3ji63RE6zjyWou",
  "key14": "3mUVGG6EJ3qotCkJTNsJzrBs4gYN2mS6FbEd6tgA2TDJX8Sb76FDgx2pEeHGDjbGSsrpwjPVCg47fprynwqsSyrb",
  "key15": "4Ti9RcxiencvaLzCtXzUCDnDijb42qnmtXxpQdovJoHjA1gYLq59QSySMERJeU8h4JhbLhT2cPPVRLAsYoLBaHGM",
  "key16": "TeBQK6yDMQFRgxRdoDcUrk7noHLCuQRVQHRZzgF6p7qq9WMjxR8GY2qDCwJKAXmJTzeMEGkrCr3GDhvTQBcCu1N",
  "key17": "3WURhub4Xz7fHh4zZvAC73ZWFA9yG1J9Kv1pfJiUxb7EhugLUQBwzSLp7qnBXR4PiRFAnvCrLRepx8Kx7VaP2R8D",
  "key18": "2JJBNpNpCTdUf74beNyNW6sEFJ1on9KweHaYcKrg2EsJC9AxVPLNXGqcPqKsj72zGujLPu7yxjdsVw9BwGSUA18d",
  "key19": "4sn4RKUYDS7Y5roMmbJRbikbJ7seEWtUyW99eqeCUWBysbNGY68uoBY94HTrTnxqxV22rCcJtW9uLkD6APL7b7RP",
  "key20": "3ntyuL1DQUmLKSujWPJyqoZmoosgaiuM4DDUMKGmH8c9h4nTqfB8wxXkGsr1oYubY161oS9Ld1ESiVq4LrpFr4Ws",
  "key21": "2E3ZoinW7nhVmiwVt55BQ41i5vWnWxGBmQFJ9UVasFXzM4AhLb4654YFkXXLctgUXu67VoBtU8uPFPwSb3k3fAvS",
  "key22": "5iwnJwfnKmeRMJMNvL3JsP42TfM5pnZ4uNoowqpzTjDp8Mou2h9rvxkXDQmMjFZJbvAsbgdpUe8RyGCscdcfELT9",
  "key23": "3MBS6mrrPR9KJdAPbHB4MdyGycMcyeswPgmZK8GheqGEmB9M2moW4UzYoCb4TiD7RRKHzap37B9zitFvKrr3RpWq",
  "key24": "3hpkjq1TznHj8LgxTN1cSHtBEnKVYCjbGJy3GqHRa7nefKjXWtMscAvXu58qNkfa9y1a58rcYVZwuh6TjWBEydgP",
  "key25": "4AfuHnXvMPzvuRiV9d6M7gZabZSikUy5JC1SnNpwK3zGdb6JPjCCZzdwaRgQLR9YqDn4pQFvD1gE9QDhwGH8J3rM",
  "key26": "zcuYtUiqASXxP4AghuSDS8DCMu1XxA4qEWqtNZpPWC9xUnANCVvjwRYEW5BD8v944761uGtx2Kk6w52CMaEAx3M"
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
