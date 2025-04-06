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
    "62eJKfV6r6C3mBppyuYYGgVoKhCD4kxNh5nudnLkiYFNNetkvWHxv7TZeDac71978uJCR29UQqbraJw3XtCEM26k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dLyNQ8ZtC6EbX3dBHZ4c1nK8eD9HRk7QYDBLuQSeA9iwYSG5LrhH5HiPJJBcBSUxzg745MWLQ6PwRbb7u9siSBr",
  "key1": "5JLUWx5PTtWQS4neXD53mQi6EerFvpT7SW9wDKzNTDUYzxj3f2qda98SxM2Teb5yApkwTUqWawmUGUS1vs9y2gWs",
  "key2": "p7P5ppPrFVEJqULq7bAh1ZqFmPmGHBv3JCY5DhvQ6umMocyLnFUFhws77XJbnM64EAZFbch6QxmqUWEMXREFQ5V",
  "key3": "D28mYjBE7vZBWz7mCdgfdXxMbsSGtkmFccq5yiyLQ4b8K9sAHZiLqEcP35bWhRCLFowDm6jowqdTU8bSsE2otFS",
  "key4": "5FNbYqpcui5J6GNCDiwJBgtdKSiwEBGkAVPteSKaMi8D4zesaUBtN14Dw2VKF5fJmeBVt1EsygT6gQTm6LVxZK68",
  "key5": "5TQKZBqsm5GZAumb6DbcZNnoZW2YfuG1UYitnJG5Ggmv2wLc1HiNMKzDeU6kWymw2ajeQU2wkZkdXN2JhGh3mwWf",
  "key6": "3ZcWBq7f2R4KGR4eGd5PrHe21LZjMw3S5hV36XNp6RT1ssWaFgKkSAfEPP38ngi9sgQweqZvrBLWRN6U3FbrRgwh",
  "key7": "1UJvqRAXyosLeJf7NiK52juFYuDB1uY1va1feLXyz2TsSWJtrhMvZMeKKrWGfrYPRW4cnNuhUDXurryE7ntxNbc",
  "key8": "5QrGu4TzgNrT6gVABRDN5uELKxUsKroX7fFNQ6bt6JnCTzm9bmnD2HNimG5mXxU8JFmTvZuSmjgiHUYLvndugh5a",
  "key9": "2RjGqENWciMrwnCYD4VtNto4yF3RBm2Ly6UoQYMQHa5NjAMsSdaLSRstHsTpQdsQAi7qivUqczvy2nj9ZtuvGxSr",
  "key10": "34CrhFvdMLBoTkBQnPusZrgmiVZsnp5aqWVBmBwJvSVdwcQKhh6aoPPpSWzzmFBKjtzNki6DAfREVMQctsFRMYpH",
  "key11": "4TKgoS7HEoXiAU5zVQ23R7FyzoFDAPQ38HCQK4Ygu5uFjVAHvb47HkANXN6LsFBXdDY5kdfCQmKThkBURdA1B9ZH",
  "key12": "4wA18CGkgdpjtdk7d17ZFBS5wfWQh63idSE4a4F48sV4uDmBEs8WF4dGgEgypPaSxfNCKPWSh9GdGVsnLrra56nn",
  "key13": "3pz4mtAFrxZyKxAATaGzzZt4owLJUgG3jmCJum2roX1VnwnTwMPXGXvMQJYr1NQcTtDcxHQzCYZuFwZF41vJNDjU",
  "key14": "5Lg4HVifgstg2J7NVmSTXmy69rJSqHRgeMgrDMeDnBe4rPtkv3hCX48UfeWC2EL35a2o9uhebxVVdcDMoXEheZnJ",
  "key15": "5gkq2oThn7grLaKhMA9Z1HZRiffTcZgk4kRM5B68w5xKWFKuUBgJu7f6HBge2mMQ9ybjQaMK4FvQzfdyMfhnJxMF",
  "key16": "4B7SrA2pin55Huk93RSRLJecV3TZdR2HK3nvRTMusXxBnbYo37EjjtNabVXQEdb7GeFazjpTTQsTbo6sTW5Q9ujB",
  "key17": "ES9Qm1GEhbgH9uetVPnysnEHcU7uXH2mQcd3oHMek9Ehku57tBxiD8jXZv3zmswDeypC1sjHxLMYskb66633HKn",
  "key18": "4KbNmfGWBXfhBHEeJ8YNGt4xjhRq2CBp9eoxiN58BN2cx8vYRqanAm2miPHckdg7xDkRTN2RNPkQvuk33R8iqbRE",
  "key19": "5c9ctCkThazLD3ZZBT5Cw4noVUj6ZpVMDDwfoy8WKXDwKfAR7MVrrHh7i98VsVWEnBTxRkyoyWFQJuzCgi67J8w5",
  "key20": "36QrfSqaEgi41P5ek7bzRkCSvVjXNAZbYo2RWy3RsQxZR7EgEozKFW2tnfpAkY59NY66BtWwpE7jHFJzU7zXpxvD",
  "key21": "3tWVuAhkT4a2gbRkYFGEuwDa1nY8f5yYNUsZr8VKHfMFoUGfjtSfpBRYW1SCx6goDD7YgxKpKBwkvy3NMe8jDcPs",
  "key22": "3HwtF72ZSt493kS8jogcFZFrGNy9xZiBpGAgKmtNcR8e11k64RznJsmTi6aAJ1iadpiWi4PuUzA47X1BGzSvzFeu",
  "key23": "5nBom5jXNSFHUJD3vPGgnwxjQ17mbnZQj3vCHKz7VCPa5htQ4yJN4NHCVSgFXu9vuG7Czk4SASM7AfNkr7B14gAJ",
  "key24": "5tfPPCkqkJxLebGcgE7nKrUcct8Hogi9df9UmCvCr6Y2wWZqvUB9xTZkXhQGiU7Pg2vw64opDpCE1kCUatoivx3Q",
  "key25": "hjVqj141Ci4B5pyQDYH9JXXjRQMZZdej3MUtkeJNVCbf3AUPbftf1rqXEQfdahjR1vghHLKVCzsjsDqzjA1RJ1i",
  "key26": "5gJNSYuqKLFFmntP4sFRE2SrwdbYTXzNjeR4QcqScTHWFsP7LHuKbe1AyA2HCj3ACxp4psLaf8gqkLHPojgZERqN",
  "key27": "kJBJUahy4edf3d81GDCDaptxhPcuGiUh79YJj1JNN8A8e43pYVKpt7jnJK8Upcm3YKnazhnbivDRLL33qnSU9zb",
  "key28": "RkLEAXuz68u2EQ4Bh5j5kdgG7BwmSLqARtByR3ZgowYDicy1ncmwzoqjw3b76BArCY655ZbyGuZxJtVjGs67gRy",
  "key29": "2k9VW8DtdqEbGKMZ9FiST4RiatZ4g7ziHFAX7NX5dLGEeevRRh1FmqjQePVTskLUt9mLsTi7qPathkNDgYS4AP4",
  "key30": "5om9D48dVkUj86jZe5G7qUSyXGF5L9bRSd1kYVfSQrX726us3yGgYQFrfLxRxGx1KznMxa4u2bcufWiQmrHTcr9N",
  "key31": "sdfw5GEJeQFaK8s2qB5zZbV9NpM9ghYfYBBkR6asUMqwSQKnU2uXVYfzuc2bHaFMGSiHo1vCNisNhFsgo6Z1huE",
  "key32": "F5ee3PTgW1tgauMop94gNjonGDRoTtEaVZ8RxxsW1F62aQerYSV8vAyJo3bT2EbzcfY7n32VSJ6YF5J59qTxCPF",
  "key33": "4QoEwzYiLYH47jvavai4JrDJjnZDENvvPxvQVJHDqwUuQhXu3J7d1sHZYq4ng1bMpUjn6KYPwp2K7YYVLuoVC29",
  "key34": "4K5BNChaqoHPT1j9iQ6NDSznaJnp6i9G17X96XVroLSeCrL8FNYNqJMtcg8sxCGe5sFPjm7Aix4aWkcDD3bJCoc7",
  "key35": "2Dd3sca5r9f9BFDcjxgDs3FAzvf6tDJbXK3bF4R8A5FabA7drjooW3QjoP2TtbDqeVbEyJt4CeAJ6uQPTGqRUiw7",
  "key36": "2egCDUGE8f4ifQ4r2f6PYBRc9L8DaKLKoUnHSgBUDK5KVE2DncvaxSfD5b5WVsgc7dx3gF15S2tGd9Fyz2hKWh5H"
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
