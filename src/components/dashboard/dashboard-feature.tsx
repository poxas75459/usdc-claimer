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
    "2pFvB7hwEWxqrq7JEKow5EAb1x5b2CbwipM3xqrsekr2MxVdQK2mNsi43pCnJ11wF2iG7cxc9ayCcizTDNEE1M6P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vVvJTZuVFMd3PWbwZNexHAJwn43Bn4iGjzrSb2odokqT5ezGzJxUQk4w1tdYyjXKbtTVPmbWSGVWXPdkD5zVVEj",
  "key1": "28XovEP8vGuUH4VoWGFQxgZFabyQVj9dxnxs13zr7JkjPf65esvCHogEKx6sdJaoWih3AJdKoFSEi25YrVvUcZ7P",
  "key2": "5k1kWQKj6T3Y5PaQHjuFxzCbixHay94GXMaexraERBBRvf9i99Q7Xa1vsZVGVoRKjznfwxZnwHxJ1FQszSmBSFVT",
  "key3": "5xJC9siGPq61PYJVT9vfVj3Y5Dff3nVAEsFzpbpg6eFASKgsWRaBkeJX2GcMz4PWv9KcfzRhTVfYZz6oKb1jXdxX",
  "key4": "3MUmfNfHJ5RBJUkVn7egsFJXy5UUbg65HfvfiKxSoKvufXgDxZ1z4e1wjhWySK7o2ucdw5RYtzH7a536hJr3vsBj",
  "key5": "2qzC7q1PHkxikw6qbPttmt6TuTvuvZJidQynzpE6Gw66KiFBVMnrTv4HFrq8TywcWVc1Wtx7ZiBcVtnJ993wgobG",
  "key6": "521JYS7hveeT4pNVZALRyzbdUCieWrzD3Lcrktz6KteiycuvQaGfWbyATxMKUJQ9NSnyJWpLC38a9gTyugoayTUe",
  "key7": "2qAphnuzz8X7FUMBxumJwYMw7UBTcrPERryLtGgFaafqS3zHFmJ9H4HvuCoZcenWY8sK7qBToWMpvTApPqokZXGn",
  "key8": "3R5HXiZnuK63ZFm9s74dWcXj8m5JJUyBut1sCQfkNTg5YkuFGLmyKLt4z7ygn3Ps2sWe3K9cf2qBXM6W4FU9Yp8U",
  "key9": "3z5FjJ8L7YEp91DGREpy4m1so8qXRT6KABhUpiXE34k7dwH3eoudxjGvQhmG1WqAz2jZuC3JW5Jfx2QA8pCB4muG",
  "key10": "2DAcoNwiiM6oKQud3MvJbKpmLkv7s7TfnPmhuXxVUv3Sg9zjpKMgnEdUMgktmAadBYNovYjUW9Ki9xRS2HbaZcTf",
  "key11": "rcmopR57HfQCYjgHVR8ydeezLDpJMZyncS2ekUqaTc2ZW8n5p3iBuDgAvXLSbQ2QKAUcrsMqcgbMqyaf2kayrkP",
  "key12": "5ULpygJhwJcNjFWksdcxmCrYFcipMq67qg1iPKiTVivsinfR3gLXHsFBCmMcRav1YyH14kqZBAvWNt43CfTPtpDx",
  "key13": "o6GudJ51SQBqq41q4k6LX93Au9SK19Nru4ZR98rKkk1ZWaMn6U2ziAX1Cv25vEvAFcuy4vLxjVBnzmDGUzuKXwz",
  "key14": "5ZSgpnDFbmj1P8vDj4cPxJRQbVcqH6xPy6tWRMD45tekt6GwkcPM7YMJrvxLjCv6LmySBGA8rCAkn4kFxe1Yqg1P",
  "key15": "vmy3RYvgPQ8uBCCEjyHtaTKpAqcHcTfncEUqa6azF46Y8da6Cr2Dk255wKdiSCX9QpHEwDYFEk9oq8ZAWTJhyiG",
  "key16": "3m8nU4jVucm5ccra9y9f8g1WQBiM527ELb7tfrLh3vVRLhLS4tDiynNJJbevGBbmnPwe48KVmJiABU9VTbQyY8Xu",
  "key17": "2WrE44TqLG98Jmv8e55DmgBYHfuZQgCR2964jmLKdyP17HWEPfXfrCgHYeTGg8LBq459RcwN8HZCTSjbnhUyQucT",
  "key18": "57pEWGmNkAJqsi7md4hooprRs6m1oYaPNo37FtuDYaujRmDMBkASA7fJu9zZ8JFM84THnrFWCrFMumbH72JhhsiU",
  "key19": "3AZo14UrEENN7CWZ2pCsYGoJtcNyuzQrKohkZbdA5NwVFZJTk6mTruwR3zaSL4if6sVDPPPMqUnsUk9vQD9DwCmX",
  "key20": "4DvUWeRfC3HSwtm8ncdjXxnRfLnpZ2SbQWv4Fgrw9d1K22n9116EKBhcjjqbWmXFhhDi6dxoU5ExL4pAEHw7bGVD",
  "key21": "4nZ2v8F3H9c4e5HioAB9RoN28ffUr6GiYKoLRnDjMwe2viu4w7CkcKjB8ngGDQHbCNeKqjQYDue5qXu66PX9EKT7",
  "key22": "7mRsJAy6xM3aMorw19gMpNv35Bx4ss7PGHrSwj3ika3Cjq77AfwR1gbYvHxGciBKLEnfpLvnAxmrTzm7zoXnGmz",
  "key23": "27FndTnPLJUtjeUPoKMqU4VXiSxsoihw1ck5YEvj4ib86M4DW7bgdMBNGoSbQq33BEMEW3HUrhyQgSsEVoAmCuja",
  "key24": "64z1uBYYpUBxnAXtcZPog1AKBREdPtfXXc9oJb6xY1ZU4E6rY8J69EsAhoj9J1XY3R2DE5Ucmu4nhX2XxqHWkwwN",
  "key25": "5R7vMT9M42ZzxicR4jooKtfp8Hh6M192ELmjA3AbhLDSHHLMjY1uh4dvpSKrvYJyzSJyBd4iaZUMjGx4pLJVzeC4",
  "key26": "3hVYT5Vxj54gmadLr4dAkrs8aeGJPTjo5qw9wXAU8ioceuTi16Jg9in8f7DWV3UBW3ihQMkjijETPPJj9Gcm73qj",
  "key27": "WXtAQaDTfh4Fg8g2yCSRMARgMR2xQpruhx6G1jZ7tz4u9jJeGj1hFuMGTccU2Emt8Keg4QsvC45UmYaE5A2QwXe",
  "key28": "2PZUpmg3Doe2L74gtXz3pEYzV6ZYLHBwLF4663SRXqvCzYbcQgPCDssofFXSKpyVADG7gDBZig3BJ7867JdfpaAf",
  "key29": "2jqSaAanKCot8bBVjuQGrydWiBSq9qiW9PUpNfBZ3JkReJp8cznRvRWEdgohuyx9enX7brsBsrHHBje6bkByELJ5",
  "key30": "47dWGUz8LzhWGwa9UWL8kgvEiAhzbeHZYy13ZEUcpzgKoCgK2h9WDBeyiiEitxv8SxKhAMTNCLykKtSvZSxnM64t",
  "key31": "2dGtHuqy9HaZHVNEG7PNPvC8kFavr3LMeGCB1ZbtystP5x9ZUkfrDScZhS4hE2UMYrDoA3tDsugTeMdhAbM1gbRm",
  "key32": "2g2sJ5sh2vwjZPLi3KTPzpqe7Qa7bHsyJxmuAe5W1bevXBGSiqaWsn9t5ZTpqAezaDx2Us6oeUSgCmouoWkUbi16",
  "key33": "eVGeRkXDideWCwaBRpPv7iV42xrtbXypXK7RiFZybp7nPTb1b1D14LmdUUCJp49M5Da5dFguWUEDwzpSWehAsxi",
  "key34": "2jaCvQVSTC953bT26ju17g4SRE8QghJBhwk7qfGS4LBEPzAPRT7NEKQ49CvSVZQNBi2Ldj6vcGKVqN3s4PM518dm",
  "key35": "9ote1BqrbFNNdCkeeFyJauxjeLjdoPBmEFuNKdi1pcfuk8ZXc4RoAam6KkxU2X6mE75V2CBK7TWFhQay3Y31pSw"
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
