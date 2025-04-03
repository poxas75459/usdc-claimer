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
    "5USqXH4jbdmiGVoGKiqMojSvrKapGN7zhQMfVvAC11uQEXtD4Y9Vsr2G7zZTRmm42uSDci1AjUUjSPvwcxZz2t5n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YgkDLWbF5KLQncdxjsk6v4xodGfZbmvFzcvaeUfKZnr73AyHECuKGTRYeGwXaxcRATkNraukNz9QSKCvv5En46Q",
  "key1": "2SeUqJNwMzj4qKhLdVK25P7DiXPmCyuE7DcXdYjNL8ypgUriea7yVzpFBXL5ctXTB7Tn6TJv2ZjNuDBxQfQNBQXR",
  "key2": "3LuP1HrFGJ2Ktes6fBnfh5EdwSTenU8TfT4XmB6PPAEgcCMJNuAChe5vddu3A2tUEAXmiCgVFXfuYvFXcgUsAwcZ",
  "key3": "5zfWautEASD4Jn1FJFRBYwQuYU2g7qUhW2RBjmMPL5WhxHAmmQy1LExi3YJS3c6h4NnweaAptgQqsvfKmauGwra2",
  "key4": "5e5egdrXefx7xe8pAZwTDGjcDGX7atwW8KfzWFtK4CfgbaRzkU4GDgUPXJxgkuHJN1iCyL3NgFvQUtDvxEd9N14a",
  "key5": "5Fkqrx3k5g8ZiS81GfDBWZ7TgEbheRW8Zc9n4jrXSn8ueh95nonYzwTAEJxprVEjeXkUS8ySkxq3DfoLcqJBgYDC",
  "key6": "5UbksueBV8bEyP8isTjqqXTEuRrhJXGaJR6tA3DuTLRoVYzpeHB1eGjJWKWbf1yb6KJJCjBPUqsjPem3etSGoShs",
  "key7": "2QHm9qmoo8G1HhvtMJ1mM1HCcxQu8eLfCqiSSXQQWGnL7Dfvqyze4LAHaegcjspwDFUVGCjS2rumYSCAju4Bop9T",
  "key8": "51gPLQuK9g7aAbR7V7jZXfwmsS3zqduUMiuRLuLtWq5oTyMXnpmAg2QZrJmpNtemPW4aFg7uaZs2Nma6yMFFRdkT",
  "key9": "QzjwKMemP9aoP9rz7qbX7JNNQk2rp4M2T7YGccePYKdmv5MMkNenjfW75anFw3jnE86JUbEpLKj3MP1AChiwXkf",
  "key10": "vPUQDgtYWMm3dYpLTvYX6CrB5AERzvsoQGdu6j16ZpVv8M5ZYUNMdTM7HJ8xsX7GjBfXcDhYRbHQgNQSk2mvmx8",
  "key11": "2VMkyPNsqLJx1MZoXgK9bVvBK1UMnMqz1DwBq3AcJHgBy8R8KwYmrgN8uS3BB2SZomp6tyyXeptCzLvsmfehJ8hu",
  "key12": "2ztm81Vsn2HaKe9rCXM5k19uZZgd5GALbYZ6ypF6Wgsy3UmEQJwuJb1NGcv1aB2FH6VyR8qFux3i1naLfkiGGJFg",
  "key13": "Qg2JDRNkHMDkbpffCejokRonoTvWq1MBWPMBcqCiKph894n1WRWQPH7oVAxjZXMdBEzxC1FapYcQG3uLRkCtqvG",
  "key14": "542mV2noeJ4SiC4m9T714kq44CQzstuNHYaPD9h7zNiyDvQENmt8Nf7WGN531n4coTQLUMmACs39TQdrXeUh2mPo",
  "key15": "vyr6i56nas46a1YZzxbqdbUDDogchF1FMequNyXGyZkheqmX2T561kZh8QsKhGfRZPzxYrKwp51i6xXY8NKmmBC",
  "key16": "FEKdCCgYb9mSRScAhsJ6EL2fGoG8NuncHnTp5U4ugiBie2BcuWAc4GjDemT9Zj3NdtiUm3mzAatHnV5ztqKTzF3",
  "key17": "5XZZabuNnw5UaWYBRNNpTGiBV3wxUfYur3nXTMzHuVfBUPmG9CBgNdUun6pdrXH6wBqgQqD19T9FbDoYBccU5LJq",
  "key18": "4ckuMS5VxqpCXN6R7YmXfECuD8eJ9SXQQZKWRun8k7T9YDXT84WwPo3F8tXb8LMhFRb3nMRqNYkRFNNaJRFCeSov",
  "key19": "4p3iSEEMCaba222AfUbuf7kUd8H5wvWyA7hmAgCqTx2cpRRd2uqu9Ui2wo6mtyPBW1LBUNG6dF246tc8zctr82bz",
  "key20": "5eb1gN9p26gySuVNxEonfjqu9Yn8mgTLmW6P8oF6uj9aFhX8hc685woCXpaRojDLRdQC1sze14suoF2MTNFzmLh4",
  "key21": "2amAJtmmbxGgwXXE6AHotsXU2FnLCsoZS5KKuSMYvXxjn2dXYaBYjp3Jbo6KWMxNmWfLmFdj3dAagV9PQLBKqHTU",
  "key22": "3Yi27deCBozke7uDWqDiZmj6KmTrcVb5mjvd9Zkyye4nHSK1ysugFcRmhfwMtd8WXNUsEd9GKvS6oRTFbEpWiNzr",
  "key23": "4b2FWq2X35PfMGoHg7wNSufJFJoawEuaKZUHZ6vHVg9kVrXph3Kff3nGpa7CRayRjE4bgd7CEENWUsgc48W9vsF8",
  "key24": "j89t5cRm1dJHSFLKkoCiK4qsEojJ4NQvBR728KUmhJ8pFKj1drzbLc2FP6GpqbRfNfxanbFe5y5RqYijv2493aD",
  "key25": "4s2cid5BTMPxeRrxHhUNusaDiWasTKvWStRcY94ocHTzUXC9MBMTud92YmXvKHqZ5pVAcPWBKJH82UwvLeFuNSMP",
  "key26": "mB9E7hpgLBPVqwZDrJUTrDb2PjWDvA3ipYAeNrQ72yMHWUU9rDZeXbD8seREzQL5cqZeMn7i9PBbR56Qm9hjTAZ",
  "key27": "5q4Z2oQGmL7cJJhUqKFe9aHGfsPQ3d6eGV2uZcb1eJ6AkLLNSNoegNYpxDpnfDvFMN3isAsWwvgpGqoc213mmJbo",
  "key28": "Qgx8Hbc8Xx6a97xPfmPLDig8EYvpv41uh419BUab64x1k4sJUiTvqvK4h2efF1Uu1QXquS4MdjVMhHvcc81CTSy",
  "key29": "46x4LVwbFUQAo7T4WzTcXSLnP2DjptfN4S8ksGTJcbVYcuuYhE55uwLFMNr9niXRtn1jiE4oUoFUM7ParzBrJidw",
  "key30": "oZZ1eKiLSBEtTD5CKn8mMzBbTrd4bbxbgTNZ9EBCpVGfjjmsoNxFdtxFrhs7KoQWMrRf5DVVqi6MVH6z5h4K3nH",
  "key31": "3hGfyAQ4UHGo3ZPyWXkFEsiRqKWBaeu6X7RtjbXVHAMw2DZ21sTrXu9mxmsu2kCvUJJyYxqN34MXbNqsoUjyv6nS",
  "key32": "2kqhXRN2bJXEPn2fs2QNjZo3n6792oCRYj6GjUMyHj2UBZu4xuBFSfd1fk6FJzzh6q5yeGGqPCT5EVMqV3QD4izJ",
  "key33": "2SMxsy9gGwfPioVTvELBoqH8DXypJ4cp1XLZhmXJzvC1jQtgV9yDt1jux45zhuJhJPBvEMMMey6VVJSxwG19Umrs",
  "key34": "5KFw7BVcoa858MLUvoxdnApaTxviH6WLGsUMzj6BXdWBsqmyZ8uZoyqSZ31F4SxdG87pty4CcMbJq3finSSGGxsu",
  "key35": "5YS3JNzPinMo5wZ2yXLZoXp3n5dJXZAAT6z3H9fSiYYqU2eJp7PwHfXRhSxWReevLUsZeNmeWkaTr6UHZk8fuRGF",
  "key36": "395LEjB2QtQx9TyGVWuFq3aH9kTLioEmnFSgzGMuQgJXzhPqLicfZJ12Zdq8KogwGbqqrTBWD6RMHqDq3Xp1sjLz",
  "key37": "2t3JWcK53tJChMjwtQhEdj3ihC5Ha9xB3EN2i7aUZHCYis68BUNvEn8U3ATntmhTWrDFh1dGzdHDHFXmKghmqbsx"
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
