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
    "2YMEYcbSBUeoUHXGu4AsJkwmDxkycvxQGvstoMvyNgdpzig8rUw8SVg3v6XQfDBq2VmPsACU1JrH7zfPWaDrwSqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QX3DcmajQMYqjkf44kV1BZfTr1zJGYfNdhP6Ny2sM5yQYW8NL6tHerDfT8H6VyDLSVaK59S8NX6s4xuttZfUpjS",
  "key1": "4tmLeeBZAXTDZkdeMph7Ftvt9hA52z88arXzVRaAbJPPiBgEZ6ZuWDn3hCnxqJ3MmxySXSct7a3L5gAQXjGRPqTp",
  "key2": "5v41iUrqPJS43jtAbCwv85vGY3jXF916QQ9dDa6yg9bAEYLkS7e4tp8M7q2Z341XrEpjVXj6UWBnWnKCsx1MU3MN",
  "key3": "64htN3eh8WRYnsqbq4nDDMnzdYHFuVvMzTDk9feBH6hV7uh6Qm2VrD5v7MbTeyaDaK1yXUgz59qzPZe3TMHRPZbj",
  "key4": "aCMwYGyFP5Eb1LnXpQe9rKjMKZ2HuviLmjpsbX4DiCRFNRaHeBpUKmWs4Eje4e7JCTa9cYjd8FCn9ZiYXKZ317U",
  "key5": "4erUTQTYLHbzgvoMaTkdoVWhnQcLc6kHdhiopGpsbEmnDNi3kgsif7ZTfVmnp8CiyCmXD7g3bgcUd1xgY3eLmZz6",
  "key6": "2mB8FB5W3RCC9mCu2K5XY1y6Ut4rJgTeArUae6SnwnweWC7z8NVQgCoHi2FnVyzov1cj8jzNNjCFh52dMLDzRsy5",
  "key7": "4FqMp6Z8Ya53FtuZMJiwGgbaUrfUPDdQZVDxuDnPHQc2uxWGzKE6AKmTgrXiQ4mQpfDPDNVfmzXDnhsn1MsT8m9P",
  "key8": "5DtGyq8VH5dn3G61muYgQETUjVcGYpe7oZQZDfjzjGrpjYfGJvy7uV4FyLdusGTBk5CU9sbbZby4FSoeq6G69wg4",
  "key9": "3T15GWAPPf7V3xYVMrcJamd4CjkmMudPox41JtKQteh7GR4aSFnzL93FNZsTUfowJGwuGmLZeuQR1HqLXT9P9te9",
  "key10": "54Qt9pDEf2ZvHksrPk2fv96esPqmX39GJNXQR6HukgnbndsgBKH6UbT6AULctg98DkidRBQ8SVK4sjkxwpCS2Lcd",
  "key11": "5PXSX7JFEvaVpf245pEvkocer1SnrLVpC2xATuo25jQSnjULA2Xdn4gY8uoRMinyMwDWeyCKjZnPWow7MnjJDKP5",
  "key12": "41ch6EziJbPbCZSbKMFYVv9Q2wtgyJgVRsuqFxYw1Q9Bq7kpR8VRCmoJbx39XwejMEEbPX7nk9NKwJTBCypZSfSX",
  "key13": "2dWpXMxghscvZM84XcC5re2nai6WKe7RSLS7yJum8u1f1BRYpeyrgp5jxr3VTgNpqSU7iujMbEnCVHvkNVNee3ue",
  "key14": "62z23r5ZMAvRTo6twyzXAsmH9caZvXSp1QELxP1eotVRmYyZdr2xNKuUA1XcyydLEfYwsLfdZ9KCxkGCkTLpRdEu",
  "key15": "45oeZR6kfZNcHwkyE9pgHModG6XnGV8RQ8q5v1HbUkan1tqTK2w7R3sbhXsDgqUtqCY8BRmoxs3efBmbg8boLbrE",
  "key16": "5CN8X64enzzFUiQtLuhKH4Ai1ydUpRLrnJsTNWfJFFkarESsCTe4yvNJXxg3rxgfAwXvip7jX57WCtQGgFmWkM2h",
  "key17": "3WLGK5aEcSCPitSCR6wL53JVFUSLSrzCmkKp9ES9ehHtB6tdxaa2m14sT7bi9kCdAzfgNC2jSYdJC1GD6u5JYzew",
  "key18": "4V2pB355pNkRGzYsDTXpyzfxACojkHNSrNRWLZLAVeKe8tE48m94GMwx81wNAW3BC9Sm7Hji7DWKnDzosxLT3zuw",
  "key19": "22YQ7gLwAi6FdGmAsTaDfrv1Q5CTjsV7BMZc8S6xpcU3j3x8aJHmPfNjF32U6VuZFuaqyZZmEom5Y4uKEkvvS9mw",
  "key20": "4QxcUccewLjCgD4BnSX75w8GDMH58VkRaTM7kPMnaHNfJVSmkNoEG763LQwPXtqsZHjFehvdJD14BiXCTP4KMkx4",
  "key21": "3hTrHzM2QEEFAB6TS1RTC6xGLLqCMyLTruvTqzPFSnZuytBrAQZc4fVUTio6mf8dS1q4xErPwMCBfghWx3JDadY8",
  "key22": "2EUJE1pxsQjZNgck3xGJPprUWmtkMMLF5SB6wgYRU3NkeMZ8dCCuW2hwpTPeg6LKU4jLRhk6rJCgQbzKgCJUXF29",
  "key23": "3MLuQnjqpg4PKbBPD2hQstzT7uEtHfXPkJvB6MpNVb2pZFFHQogG6qEwQbLP1GPggrkUdvi7j358EAZBS7rMp6EB",
  "key24": "5j1pxKgPZnKrxFP4g62cHEVrFJjF5cp51GgmEbspbWRazbrZQYx4goee2rcywY4a512rZnDLDeSMycuy2emX9kx7",
  "key25": "2FzFXBnACiK9VWRhdVhjp653LZG3k9uG83T3EUSKMAK3aHQPH2e4q7gcEcxNjMbENKQXUq7nq42SYU9m8kdNxki5",
  "key26": "gBwkJDQ71bYEhWQPwkXqUG8KoqcHuBj1w34DKLPDA91fdwhgSobCP5DZhouYNovHMozJVVFhmpGLosw76F3mjKx",
  "key27": "3TnH93UYCe6WnhX31x3bG5sZ5STZYAYoku1CZkG8oJdpfbBittcrz9gjNAaFRVfc9cWJT8WPDXsNWtE3HAwURieT",
  "key28": "4LfEwXh9D3koviMQHufLpDmTyz2kKTwduFjA8vX5vSDrXa6tWYkJATiEeqJNnXSPHXiMaL4kpvE2vvDrPQTH9E8X",
  "key29": "65cLtoDiAAzJK68GKoW5Cd8yfMrti4ijRjuwx2gX4g1Pwu6xkD7Z3HksyFwRaDCF1dCySma5RzCaWD8hBjMGwTmw",
  "key30": "3rdynYQcUpJxMJNBqYhsdwzVVqTakJvpYkGFEcZTuAPMfYZVn8mHevYUvzhmNLQ1hKcbBZX5dF5oKcSCMWJEyHpq",
  "key31": "4oBihY6N5zbm2nKJuCnPJ26Rexmfwx99m4vNhQEgca2f2sskJE45QLvS5HqYHAmbThemsfGJZPWZVx4p3bCoN6H4",
  "key32": "2MjPT8o8L7ChKsAKQVjbErsYvEg7yrVqvsHwL4XyRvmXyMdhYXg8XE1h8VyX9iF21mXpWx4mLNKkr8bMdgbvsQD9",
  "key33": "Q1vEw5jTsvQej2cnajB5sDdQvZYzE7pYd5WvTUKLyzr1TszNQvzwebymeKFLMA57yrwXn7tfLVH7seJaafcUe4L"
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
