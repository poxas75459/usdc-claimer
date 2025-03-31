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
    "5NnGNVb6zZUouYUA63ckMVJJjMPCJm8CEonwkP1PyNjpgyTGawMAvb2QbUcAhTZRagR4P1Bem3Z9mVTnPXaaHQbH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zVsDP7V6gbggagDcgyTuikaDqeGYYLi7XBgab3b2yK1iKv6C91GCJy1hGwXisaDsXTFcFpjYHBxU1JAAa5uoqoq",
  "key1": "6XPmoFmmXGmxLx5E6dBDGZAwpjXC2Ds6mtJWLXzrB23A2728P1d7zCAN3vvtYdLwrvZoezxY1ob3EZqxSMYD2D8",
  "key2": "kfjHqzr5poEJu9v17Hy8RMkbsU1gMHss96hbDGXpRwfQT8YBjQ77eVXrSmBGUG9d4EWmMUW7zRFRukW25mJqiBd",
  "key3": "3swvYqdtXTXApirGbsJG7FzK8uGn583XCahRtoPokXB1uYGxDmefcSyMQU71BVe5dUbqyR4PP8nUcesgaiD1ohgR",
  "key4": "45QSMnrgfRJPNBHbGWX75u4kPdLR2o96M6GVgVcmyBT79DThfKuaiZ1NJWPTS4rCp6ZBKD1o32ekSwY16weejyx7",
  "key5": "4d4p4j85HeQgbGNBg37NwgeVoyqRM6Wg94NksTTyQ2gG1XRXvQuh7YkaN4nf32L9QBTy1WsA2axgEgCVKoeAX4JJ",
  "key6": "3dVRPXVLD7Arr7j69qthSWTX9zUmJV4A3uipGnfZAx693ZEMcwLRDymjhxSNFvnmXY6PQLJqj2UASxzfCzsApA9F",
  "key7": "4aHE9foSrRKPsPsiv3SXt85A98rNtyw4PvGFTh5io5pDeKuRxJhVv5afDV5LAA5fsqBPCsBFuLCH585Mgpd7J2yp",
  "key8": "62bF5Cenb7xn9UPPbU8w5siLGL1EAWf1rhSv2Epsh93ZGAYj1Kv3HiFvjnyqp22ysdd4aAsxV4DD3dsvXnku3cVQ",
  "key9": "RYFZhkA6AsrQwHgBgWDDnbRUmReJhzn1H8aUARDyxxwyrcS5uP2NTkZPoGVxaQh2tKL8H5E9ahkxps6qRycXxV7",
  "key10": "5wQbC4Q5vrgc9HGAjcqdS1ypfczZ7NGnuGUuYBJwqbW7zrEijZQkjqwgfbjibMaMKwZNeZvBpfhYuonyGoLJ8GvQ",
  "key11": "KvqfVhV6C8j3H6uHHaSAndAffkhtSkMz221t5TxVobshezkcFjdofFVRBNEkHMQRLPSwJSTgUPdjGBczD7XDWaA",
  "key12": "3pXQW96xfEoL4dYwBgbgRZpAWPjdTLHP75BnEZydnbeww1d8FPsmb1sUDKFSQgC9RdcttkaQWfEhb3vtxmShgtrz",
  "key13": "24jJEGLnxF9FHKV9vSL2HEBkEcpvfUwAJzmfAf2QSfo23xwpTX4hM92tVzEgvhFc8nSeWQwZoPpgrSwmEUX4eFvv",
  "key14": "61h41aFjmMV9YLE9WBhkEwTo5y9Xk3Q5TrhoCL8seewgDw8QYcRBh4X8g66zPpQpET3nF6tjquifvgVgqcmbezJx",
  "key15": "4W3aBrYFYVEt2uq2GFdxbZHNFg5XuWptrrHmUw8VgB7YPxTYLQvjjX4jkgCnzedyvNj5HkLB9vEDYjBhnxjnB1NZ",
  "key16": "3fRmSidxMJ8o5dwKvjuJacUKUeBvtXviYArVcVovB5inR7oT8ZSp56pVtVPS2cqAvhFWeBtD1Cvcvq5EVNyY2Gqn",
  "key17": "5gVMwouqxXH58YmobTz9KjnNvvSGgi7h5MTZYKgsJWokHEkexZ7rWLCKaiNP9RXPjYRyoZbCKVt3rqKT8Nk8CZV4",
  "key18": "5HuqiDoh5LUJjARKBWbqN7tgsDPVPQQnghG3sgy59VgptqkSFFy6xK4MT5yTKFsCf6X55tJUGq5UNa7ZrGN5aHG4",
  "key19": "2QTExYGp6hL1RfSXpTj94uJezRQV7LRjax19vC6QirfP6YBF27Ug4wRNM5SX6Nkn4jw63XzhCsUoMDqEM6K3oVhc",
  "key20": "4JCAeepkxk4Y6kiNfj6PbXauxAPEz2fvtyQj7EensmU8nKFTkJRs29Nbn46eeBEnSbhcCvJ2gN29TAvYKDhRxJf5",
  "key21": "ynorAmjxtFSPqgW1dAyrXNMszxBumdwfQHfaFqBmqdtm5eawATna7mZWinbgsuKXShaTt7dNoHxja26FC1T6n2F",
  "key22": "3RjUmhtcwbZGxJbjKd7hSaMxe2K4ZYMSWeRXTFkp3u69NRHMoHrFoq9eXc1GbKNqxUr2WW25nUGcFaJ7SpXcqNEz",
  "key23": "2TrXYDYZxa4yw8TeyPq2JFZc44xihUuT1msBcG2ban6tU3PgUV247bk8XrEZQibkQ3uN3WbSb5HDd8m4QKZfaqZA",
  "key24": "4VcuRQvfr94232M6NVRCVLoV993Yo5r5SipJcW3bceFGYCmek4gg96QViu3iqirwQ2vPqmXUJutja7F11Cm3mTZN",
  "key25": "3Po1gVvNCPynm9ExQeHnhqLX5C6sRdtfkghX23YJtcWxTRj6aUG25FAELUunEiVejJzLao5k3JAj8X19YqqKFJeX",
  "key26": "WRUYLAC5cbVGXuNPrHYnbhJyduUPaP5pvEywW7McPuqgDZbB855ATHBsVU5g7QPH2wdeMejsBAszK9jQa1ZJQFd",
  "key27": "5n8ixM4GES34bn5yupLGfTdkLkj1aJaezxHSVTWmTG2yCwkMaPpiieRBzrZZjPKKKKBJp2rVgUi9Yge3fDtNMC6i",
  "key28": "5uKdbWywQuyaWMVzdkvWNsLey3RCAtvDd4DWRhxgpjWef8owbTjijLSDuxzofq3MrAyNNhHHdtcrTsyn4J7YXifK",
  "key29": "51NpMmDP6iUBTjfbAv64tz6JGY7qzcMr1amKuMiBVEMyvNMCzLQ76fE52MuhpnsvvHuPR1unG1hdXLXpb8gGeZcY",
  "key30": "2FuvKck7dtNDtksLaCoXAnSWtqgLEEFBHCa9DBfr5d5b1bAaW9imyoWuNxSohWKbbgFGHuY5b2dk1tvtW3JFvri7",
  "key31": "5gWfok9fXiRQ1U5D7UKbCq8pF1xmoTbt1sFn4vksUuf4rxqu2NLv1qNC8ypkbVkdvUTNQmhsJgaUrYHjavkwCd1T",
  "key32": "4jgbnvdpSdU9aCMWe6MwSX3kaRA4ha84YCMFCK2FHqdZh4dih6nT7JnaL9XaWKxpLWmAAv7yYQwEUATJzvwdPk4B"
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
