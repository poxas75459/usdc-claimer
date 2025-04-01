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
    "5krbUHKpenUbAYza1B7rrTJgrjS42448NQ5HBPTF2CxwhjQRH8MjDCWXGmLNkNd1phPaL4m3ni7GiDmtyfM2fTRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a7S9JwvhEF6J67KtwiFDfFm2fHC9FRXp4JLi7AGD1FnX4UcJfAWeVbesKTRJY3e5b81CBcwtvyEqL1nXcdHrgbH",
  "key1": "4paaaxmv9KFi6XrVUq6yEbQ6Py5nVubMYUrrhU7JxLMmAb61Ez2ME7tqNrxKgxKeEo5M5LfQakVuFwi2ZqH6f6v1",
  "key2": "5m2LJWiUakBaV2KLGjFtx4uvcyK8HKo6j3ziGtQS4fzkqftYriLdXJyE7MtvtihghQE547bCyTbCeLAu8x5nBSq7",
  "key3": "2T1P8XcT8TJiGPHAbVeMrDZzLGQRAHg78EBoVA333kw9AW9ePyidoZDoZjxSzwHB6hG9fhn5WyBwWLUTMDJrXVrm",
  "key4": "4uDHkWXmGse81P4u76AqYLZCdqwRimjwPFMQf48Hd7WuEV84WZWx6VhCqEPv1LBarQrcm8LSHWFR6rKBtErMNHtB",
  "key5": "3s3wCZGwarPViVFLSfWUBqXjNJYUtNkyU6W5e2QDkfLrr5opDqy497DBMuwH73e325yh2Coz4CDvNUFz2KVWA4pj",
  "key6": "2wgL1wijyqiLqCDgWZz9uQuU95e3dyaost1EgChPe8ZwL3gY4auMCqpDk1778mU8mQXLKn6FH3dGogn1ofTamxAF",
  "key7": "2JsivqLo879YrY5S5sJSArjjAQXua86syfBMyHtp8EzRYtUw4uF5eHoUD2XB2j8Wn9BSPR3nyMfNRHj8LoHkeUkm",
  "key8": "fsKnRgzTt4EBx5KwXLjeA4MpirHgVR9T1fdtKvhMRvaipAXcxSFJbKhNwEg779SxfTq5amN5egiPVsiMqx92ybs",
  "key9": "3B2cPkrMnFSSAddo2XDbdoUBnfqvPVr9ajTMhnARkcpTEZfHFPzhJzrb6t5s8KFfGzhLcKRsw7oSfQCFiqyqRvHf",
  "key10": "57xHrAybG9SfyK9azQ1vGcGbjQR89LkLndbruVBijzF9cQsai1mcMtbPq3iPMxpkcHc6Vg3uFWfxJKZFFy7Zi3Yv",
  "key11": "2EjEFNfezzW6hfpXUdQ7fzM9LRTUS9sMRD4UyvxPwducwjXPx8Cp1fyJ4JqgT7m7WRauFDHCRx33TVdrUnzbMJXF",
  "key12": "4hhStHpe6tFA95tAT3jHYQ81cXZ2RqMbRaUx6Y87BEwM3RcAaJNwjhZxWLKT3kK219GRdob62q3BNj1yW3PSF7ev",
  "key13": "5BEyqZGnvxGmQGrw48Yy81cNRvAvAtx9q1A8vYNRByDmEX39zdNi98UDA3EzjvxXS52wBuZw1TiRJdy5oYV88UAQ",
  "key14": "3efAJiRcTiYvnYZrXEBKtRQoobQA6naLGKB7QGDaKVoprzJrB8k65C5BE9w3tjqmqEtEoaoWLRPMRFQi2GDWzVr7",
  "key15": "4y75G6LYZkpDvAatvG5Lx3dMMyH5R9N6tfke1ZsjqKezs42VfsnoxQTKmz8YUMrxwNMhbh3Uu1fvCLs7Miu26Evv",
  "key16": "3SsgWFUihk9TTuBJZjtiFuPJMJrr8qmKiXREhPAgXfXdFVirNsGJXNN4FZVQRewMKed8ZFfx9SaVcEuvjPGboeNY",
  "key17": "52iPue3NmrXKsfx8XuxqLD7eu68Dbetf2zqfx5omRRWYCKMmnyBzZmQauHmMya19FnX9so5VjSh4fuBySmxCbu44",
  "key18": "65weGTUqzW6HVyD9ZCgUUvdSuBDomGuBDuCWnaJJ7SVdZvmzfsyTcALSdgqRRqoorTEm9oxBbWkrccp4vNtE28wy",
  "key19": "aBWLFHCWHkekumF89k2PWZnuDw8Z1GUqvcSKEYpFTp5yLKj7jGeVTzEx8DXtj82cXFnAnPgtVZJ2s5q5aHLn4f9",
  "key20": "41HeApMdFHYiL83zkfAQ6aywyqizGFFWhw2nLZvrRF443LL9AxQ5hgMB61rRFcLC6bDWiUT4DLXZyDv9FcKa7moW",
  "key21": "4KgYAg7iphhCKGPDmzbiD8V7CooEpDgRQ8FMbhwi2NJR2ExdZdmLbHEzXFHHmmVTduDLBBLccLZQyBuv8XvDfXyN",
  "key22": "j9UkQsUhwAwZK4i1ihedLFjmMjLM9mGeMCgMs1RBStjGuoyZK3beiTrJUMjgqwDWHxuGGibojLhdkvX5jtqjA7Y",
  "key23": "5Ygzbmr4rEEMS3AAzt4Rydsi8Ec8dCiwHE454npPNKY4g38qXVG5W3sFWMzDr49SXw1g2uqPGstDGWVK4FFaZ8C4",
  "key24": "4btBKUMoCBMQbxXj4ib1ENYWiYKXj8ebcbUh5dq2Z82kX8yf5VKvMTdJEHaZT1ygUiG5VJdTM7QFZKKN3x5EZg78",
  "key25": "4seCKVUNazdSuGxt4SMXagPnfGUBTT39bAoWwrwNePdDnNLofSFEGwKbKhfKMZoFU1sTLzQYgdSTqSyU1XUnRvsu",
  "key26": "5SXk4qPMPYC43tfRGJi2RXhhK9vCneEJBKGM8sRzXpTHmrA6978R5KREu7GknKKNnsBhNhZpjAQyJHjRqBDudu9k",
  "key27": "3C1rSFVqmk4hhvD9E2bBmc9oiyNdXpHattiouUFG7L3VMHber7VywCrrSFk9pUJUVracARfdesCkAsQgj7WkrWev",
  "key28": "2YJyqfS6ndaVeaVuJGVQbMbF6d38tDK47UDognDqorphuyk3Cqyp88daLwbKxmnVucqeFcoYkLswen2emSEoRNCi",
  "key29": "fjXMQ1fhbfyfJ5WVtzgMGuC811zxYQ9CA73398Avzk19tVMrW5dnuFikeV36MhoAA2SXV9vkvmVcP8FVDym67uq"
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
