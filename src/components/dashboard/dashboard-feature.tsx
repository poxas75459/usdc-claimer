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
    "59PAoq4uPhgLjc7bC6wDgtxMvhGaT7DWgoPfdAW1MvMdzh9Fbr7C6QdVyXFCHg8N1iYrH1K8kuA5M3apf6VdG5jN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KDm4Z9k8AQRxdjL4UgGpUe9MBxUZ5nDzs1GvdkWP6pQidK4KMXEsG4v3DXP15FaDy6LKwxwgsbCZhxQHj7oEKKS",
  "key1": "5BDeoFEeDESbUn51aeS5H8LtaidDTRJCKZ4Fd5e3xi33neMyRh25cBZg3homPzNh6hUrJTKJFThUuDm7ySskMxUj",
  "key2": "45GTyn9Xzkk8nA4ommR5mM9kDf4MFFtVkvuRVY8LUoy7BBC4wVGyu4fKHnKXFasTyR2rsnY4y7Nzd2PFZFirP6S4",
  "key3": "Gp1YzUp6e9Qubs8RcQ1Ho2MEGmYsTbeyMeumqjFVe8u6HjajZDnPacCtMepg7PkELS6YQ7nFzgEBTnFGCkQwUH9",
  "key4": "32ssoJrAFG9JwHwKXsxMCYdGxGwJLEVvbSzvSYYhUEcktdScTd4WH6GrhBtTu1huqHaYLVi6fKtS4fMMUZAP5aSt",
  "key5": "5GHttGBb7ni7bxDu5avRafvzN2AHr8CwNUsVuw3MrXeCkNc6KiBUqhx5TcsKftBQy3msiRJ6ZLTFe9VpTKgdqLWw",
  "key6": "4Y6yAva7ftkG9QpvCWdwVWEJe3KAP7gDMFNjvcoT5U5VtmJibqCmkqFWoNKa4afAGbKAK5hVdnXuEqZmLk3xvjpa",
  "key7": "2tdu88yRSnNST1D5MHzrEWC7bTmSNnbzFx9vyUsrLf18XhqvaD8uoLh3ZkaQ7z56tabyoRGfNoCLhAx9FwY2huq2",
  "key8": "2X3jSQUoEVyvXNuW4zpjN5UiwgTdKJb3aXnPiV91xXqUURL9CySHmkLCwKJ9i6i1mBVwUSnev2eR6YQZDZhHx8o3",
  "key9": "4GxBjGDhb8d9QuDW3TQd9jw1i4zzJUXZhQDsCmWN2VxVQ6JGZ8b3kBgTLgZgB7BzTxGgJVeAJpsuKFtdcm8qVuiq",
  "key10": "XQzf6rdhsyJF6DPub6NerdS1dYF3iZENZXNQH1sVNAmBcJgb1jpatuNV3NcE1QwHuaLQbHGLwdRbstJvpJfpXeT",
  "key11": "4hwcwf6eCSjkMj9zENECZeonxCDEnmhVwJEGRtuqWWBZFNFnVKgC4zQ2uKsU6y1tGh5JLPBbpwnCk7yom9WebFnZ",
  "key12": "Zd3oaYAKwcjWj7nsrCrBwtk2k3uRhMnD6kLmjsxUj7p8ttf6muGHHAqjankWzsHMXhrNaXvdRZsXNFqfHVoiBin",
  "key13": "4VMjxq22R4hgkwm7f51h8ahTvfj5YNkcghh8b6yjryZZFCKivVp3Tzhd9aZZ13FYPLvndP3nFYkd8gvmRaR6QFK1",
  "key14": "K3vwWQVY37Ae4UnF6bcrjV8G5mbRj5BBdnxzSzLqqBM9cYEWP7oheVWNjVAtYTcnvTB7UK7HqVSBYiyDxVyj3bH",
  "key15": "2jZ1vnUVS1HEnKkZbBNgRtJywLtyRviADjN7o4E11px2ZUEt5noRq4VmbPNMKGT9QnFmbknLUrUPWU1xHTfXV1xX",
  "key16": "5MistCqF4zdY65jkBAT4LxcjD5muFwpbsdiVmLuwAshjJg49YVRUziMXmsnL5RvFX3ACDrMr9MT7HZhEHRRSfMzN",
  "key17": "R18aSH4TV1qE8qjvomgG2DfYoAwwvNfggBsB1WHyN3gZPpfe9mMizyPhCZABpRu1S26w1k1abA2pfofkc246Gyw",
  "key18": "9U5zmUDttBnhSFTrXFopNARyFZamT99v5dGbhpxwYLkDEo1Av8dvdZ6XYDfrXVNGXZSqhGCH8AYYryC1rk7q9es",
  "key19": "2cXkdnk7zQrJBgiuLoaQwjH8Tm5ZAcx14vCmeDGdvbnWESjjvuf1sMDgxFczMt7PNpcqcaa4T5zgWYx1wr4GfLN4",
  "key20": "4nj8gZzeSWajvdUXqrG7wCJkbNT7LaNJvJ3gBTV38sncLj9HXwZzXDoPaFqLphp3ddDnmfvqfGdiehrUfEBt4wyC",
  "key21": "2394HbLLBW56GQyc4QWBD3v2oXGikdTMMc4w4vkRkz1qPTEZzxjn8XHot2XgjXStiuFb51jK5QvYMh54sTo9o4sc",
  "key22": "4Lg4Uko3yzH6r26KeB6A7GvZTBnpbkCuj45tTyYjJE3115CNub9pJfqM6zQgnig7Y6zaKQJFM5imgj6QkJWoAp4n",
  "key23": "53Gm5vKjvnQ1BnwasfZMzyvV6ogaqZ8YhWvbntNh2rqGbapdTY1qiy4kn7Yq5y4do2WDJk58dQa52EadsLqE5z2F",
  "key24": "573tmwEfosfNASxz9wKLdztSEfP1kyE62VX373vasjsaAUhu52T9zjtDVFH2DLi2aHpaFx2hbpipHJerQnh4pU2J",
  "key25": "2Q3Ldj1rSL9aVykr7cmdXfrZ42XGu7Scop3XPyhRkZaohfxRiHotvZYwss1kFtQxJpkXFYmAHfUpLWb53VT6d9ZV",
  "key26": "2v29TnPGZE1FSq5RcLD6QiS8GsoYqBDSFfzmt7g8gUJXvLv222jG2p5nWKH9FmJ2NHfBxEYPUeFcLCg3pqWdevYy",
  "key27": "cc4PWKMEJ6KWBE5zbFq2rDdhvjwidpnNXWfrBz8uAe8hvdKyvPGtu5mUeX96nEyyxEWqryrL1fiYXFTgjWb8Uc7",
  "key28": "3CZoWuDnBAtJ8Sbhv122mwpYx7Q3A1fWjjia5N6vVX2VtA96LYdFfm8DhiRzHZC4z7GpWLQZhASHUAEn6WhGk7Ka",
  "key29": "3NtV7J41ETnD5NmxQXXVCN7yyXEJGLndj78pFpHddzJPZSMhZbb97Zj7Dmop7ijwEj6DjqVuTHZXAPLoqmBf2gxt",
  "key30": "5YR8TWv988VB1PEyBXGivJPKbc4XYTTHWShsJxnbEyWRVFnjB4i6VSyKQuoyvmGFk9sYdHZHKBKoBpNB3hyQ2Dim",
  "key31": "47eYRpvPagPeh5p4MawBqooPj96vJoiZq89nGA5pK7cT3u16k5iBeVBtVLdE7ZVCfZemcS1thfkY76WDW276ZsJH",
  "key32": "281z6LB8Wvhb63rbJGhEfxNMy2NooA82i35rc8BuFmsu66ygHC7ZHeRbRpEkKrcUV1p7X9NTp5GcHaWtSLLwiqxb",
  "key33": "2T6w3upRHo2ddRNeZr3SdTHhNxQXTyjXDY2P7ezYzAsvBmjKY1P9mMo86EFcdHzQq63Fscm9cqCnSU28b7yTMnAm",
  "key34": "3uGFFwvQTeyJw2ALgLDXHW5WcigXRdssWgLnfqu8F4uuStPg5rPGfQCJ9HaY9hZsNijSC4NNrirZ2oeaDaYUjRoK",
  "key35": "5VdNqQJDzQsgqXEkcoqBUdG84XrqkhFU1whvuCXtNt3ZjATcp6SHA18wZwxy8MFA6M5fzYEUAQ7R8MwUzpoHsCGb",
  "key36": "5v2uJEytgAvfbXdzvrSWQpL6aTmwZHzG7Ki3nrT3c9BP7xN8dM2QF8gTAXuh2f1n12yNUZZ1QQ7LsNP1eo9MQuRd",
  "key37": "5MXo2KJdrhw1AoS26gSHJtgEB9GSCHDrwe81MABsBxuBdudmDK22bENGLpkA9WheRV8zdRdiMDLyhupTmntcVt46",
  "key38": "3bstKpKko7ta6QstouksGQCMeJz5xxU9f31nu28wrA4fXDQcDu2RUnUA7vgxkNAjHL11Zhx92idEBawYSpdREpeL",
  "key39": "2WLUG1Ru1Y2UcaTjSBJzttPJDtUuo8nAtaMrVAtcindCtz39Pa5Ut3cWLjmmLyshEihpHyKmimqnyL4b4SysFPLM"
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
