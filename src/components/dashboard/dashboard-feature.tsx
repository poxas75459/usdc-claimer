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
    "35Xe7hCoB8NdAdqTGqQ4vDmYmjTVbF21xmUYm4kEmKDyRHmxAorY5sqiXno9S7gXe91geWYi6Ko1923191rx8qdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BZRucZMgKDXn8m3zetEd1sGis4enShehkSX6Cdq6hf1htuDjbyxrV7zRin4c9GtQodxcReR12c7GA3yh5ZyQmyK",
  "key1": "4KXFsJFLTnppkn1NuGTQhe7Rp5N7nbdoKYbQWhacpP8p3mCkD4SSNWQhWJD3v8ajgz9jGGZhXuETXbS1igdB9ys9",
  "key2": "2jev3YRY4eYB1yeKj3G2ppK3eXaKYCBg7HzW5HqcGmsM8KcomqEdpptHBAiR5iMSd5Y7DuMXnd8cihS6xZ7yBYfk",
  "key3": "65ELQu671KqFE8Gw5atBYoaMYwDrMwu8goJPECroB43oo2sjKtjFcCjeKgzfDnBvfoyLZY7uDBBrDt7Nx3o9xqAq",
  "key4": "2iCL8oGd9sg9ZEVBSRxTbpkmL5nXnSBnFkMxrDznwEQvT6HhB8rPRLBnkws93pzXdFybQanh9MAEk7EZip1wZo3G",
  "key5": "3PpUVXzmALE9EV8b37yHhDKRpeAhJ5H8MeKSN7t88tXMZQiyDmUUoQM9bRUJrQccVVdfCDtF7N2P7MDQnz4UMfRB",
  "key6": "2c7QLvok9u2JeGN2gXNb9Cxtqux2ScPUH65WfBSXEMd9Yq6qiGrRQn8RP8r8md7NxidjXdSgn4kF6YhY4UNcQHNv",
  "key7": "2FCqCaWcxC9wC5e8dEw33Vmq6yWySp4UwamWB1La5JhF5aFL3iGcAmanQ9XUspFFxR9WpWbMNTQUxJKpqwX3RoyH",
  "key8": "5FDXEaBwQUSNraZg3TNwjQ56KdFCak1T4YpDdsxVVwfmHQzFJxxMkbxnLomsXze2HFv3W3yZUGJoSxyp8LF23Chf",
  "key9": "kXfjxkN9Hwkx6spEYQQYHDypQJ82eNqSt55BsWpSAGtrzVbxGRLqvZxfEUGiWeuywzFFiesxYpxT11JMW5Ez2FU",
  "key10": "3nEqDDJv43j3PbeJFEp6Y7QvcnDAwy99cCJdPW3bGFRpsbTXQZvqsJKEgkiSc4FVh33qQdB4965UPNmugGhcefef",
  "key11": "3jiBsaBT5qht8zXTAUefrCcZrbAbZ7KmQ2Cm3Ev8mU4ecxbb8JNzPhauFrAghftR8gbNE6RR3VTDG1VEaEUK8bC8",
  "key12": "QYU5TuBCZPFezHVckVWojcFGwyEw6Gg4XQMpES3grygGPATFjB25SXdL36EJwvwm4dhf42AYix7e8hpdDfZAU7L",
  "key13": "4f3aMJBu7UfAxFo9qvmdjmL3WpboLbgxbdzNBS5xEJx55W47QNkaSCLebazmzCdrb8ybZsXm9hcqAZutgsk3nEPe",
  "key14": "5iu4kkjvqghh6vFuDfYeBBvxUDWn7Cho5jNn5LmFANaS37yZStWpSHMJh5QEYWCqiRagv7ZNRAheopYyUs5WbyQ4",
  "key15": "2wWCCtcCPbGMgQXYE7Tou3SN9FsgRLHrSq3yHQvKncPtmHEAVQfhmUuXXBnpWaYSkpvDFca6pWyvAF2959pJ9sQu",
  "key16": "37A5qoL3b9D9CrRGWkG59SRv9YN3kJSCDqGPXkT1Jaxc778YapV8vmr1jcuRuUR8fqGwVYR18ZtZ7mSdmupB2m6C",
  "key17": "3vPKtQgrQ9VXfVfengqBNo86Vv6j4h4LJQ9n1SXCQM2eZRmEBAHG6B5x4GEdM44MqQZ3bL27vE4ncmSLiFGodaaG",
  "key18": "4SeYm4d6z8Ep98FKnt62e18yD9xSYdZprBcoiBLsu76wpqJWrPSqGLYzBusCqtJFPT9xqfXg9uxwTqPSoToDe2qt",
  "key19": "5VxuGR2jPqNUNphqGt9HVh7ow3DK7HQ7NrvupnB7buzNwf4UUmUtmukxJj87p9usRyXheTkr3L6nMh12mduzCC7C",
  "key20": "5aQyaRsdVuv4mNnnZN6dCvvnw4MrSbyMHJVdwBd3JLg9Y2wpayqpXQWYo2joFiYTS1MuAADfKGMEh1L9sf7gEaBx",
  "key21": "t55w9QHDkfupGsP4EJb8gHZhchQ7UsvFqUwKLtoSgQXegQhL62quViPmnZcBrfAGcSyf74cSVAeLo6vkC55yYYz",
  "key22": "5NoCf1X7NQj749Jd4PK8JTWKbCQH16i2KqSjMRB6VtN7HCmjucWBt6Qne7yUd1Je1sHpVoNKKPEgTwmxu6aFkf3P",
  "key23": "PkiKgchu98HD1nueFBK1dBv4Q7VY5PgnWC9EkQ8conzJ1JK1K4KyVLrLtAaSjmAXfymxZSTM1qDxU7QXYr1Pgbe",
  "key24": "35VKRqnyo5JXANxZw2UyXp3DzTKm9szVWKte7qNCrqrgrTeSxogLMnSuo5Ds1jvKXmd2W4NeeLsbBb7TnZRi7RCC",
  "key25": "57w9DqUYGZtavtFqw6yxFjBtgWJ46cuFPXVoS2PmALqzEhNFTZ4aAfyAsnX84yy8Yp2JhCXAvCe5WsgEgLoVbJsi",
  "key26": "M7S44kmMPaqC7uHDwvMnjUfPJ6pwjPsvwJDqtmoBRpi1H5fMDUiRdsWZyDX8TRFdqScSDbhEBjmWZJwEzZYNocc",
  "key27": "6cNuy4KgAPQJrTUXRbMG9UNh6vhqN5cEwZfUKyBDbfQBPctoWrJDd6htm4QAnyBM9TPxLF2bjaVSqYDhJjTraEm",
  "key28": "2TAxH8sJjXgoLPpoUMNAYvSGVWG5kBbzB2BRqzDYssMmwEZDVmhPFbBwTvaV1DyjxCA8zgbF5FV9WhdWSrVfFacc"
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
