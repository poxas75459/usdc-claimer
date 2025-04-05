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
    "3CXnuVkPq9CifVZC1CDdK8des2HZ9WzTEuvu5rZ76qtFnAT9i2af8esAjftD45VApZqWC3vG6x4F9TJjhzCNZ1fz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24u7VjN2FdsLFNHWWNW6wtGvvk767t9dG7LnyUGVCt4rA4mJzbmFq97fR7TuvEscFJ3TivDQdigj4KFFotEnsPYT",
  "key1": "2ew4DGetYm5QTsgBJjbyPVGidS4YZNicNjcpt7GgPNxnZeFnGdHSuFuQTy4VBny9T9dS3W8UyiVGZZHiz6DMvdvJ",
  "key2": "29TXXTXF6XXkdZFwtfY4jmEhZE7rjNF3aB4ryVsTNkr3THcTg9g9Yx9WNgJgB1a2uGp3ezF4tzgak6bWejyzt3Ey",
  "key3": "2X5vh79TU6amocpnpbDsg17SgXQGiRzQ3V7EdoiGmKMRpaaywJnoqMtKXkHoBsiubVHFAnV1JcFvERBhLe5tWRf3",
  "key4": "2ant1jurLgshMztBnXstQvc5Zdw49Pfw2zssmWJyBzDd9nJkxd2vkZ8LPLu6zkMAUL3PBBCA9w2WYo7zBcxGAkBA",
  "key5": "3Zk1GRf1NTes9p5mRGu773oFJJi34fwK7RuqA5xYav3umGfRqwxL6TH5BuLAQayDe8zqaec5YjACuHuKBJwcKmbc",
  "key6": "LzRv3ZdZBCRWv9hQgiJaYojwQdcvSBGab8gD2K95KHxj2rRNrnmdks7oMsuHzcqiwDrbedM76tFrLmry651KBa4",
  "key7": "5KtFXD6VPLv9SUzr7rig9gcfbZzVzsy4hkB7BwdztyZ1MbxDaz5jpiBTtuN88XtedPxoNganMiG2xTbcbuja8BhJ",
  "key8": "2CpjWRZ9KM3jaSvRFFbKRHqbpyjyQEjjeAWdQ8yvNqseRNJDdZMmC5DfYAHGqa7QSYdPesXwW6wWgrsD89DD1KTf",
  "key9": "5USiz2wo8Pf2qj5YE69VWisyzBuop1AKW25MVj5MidBeFCA6ci4PUYhXpjfCiEd366GyrMjdRiPaEJfMSqmDBAiX",
  "key10": "3HhF8C2268Dkcbj5kRfjFr9oV2HwLiAtdsaFvH5MawJvePnvNaPa7ZkRyKMZcG53fgsdntQ44A36xT2iib1kyFoQ",
  "key11": "3SBzJhnFNEJmgFLLmpDooX81Ht2Ru6oeTtLqEHS9KmPiB8AG6uriuC18YadHgXAkYeSYG5rW5nrnDXVVutpmoCX9",
  "key12": "5bBCLhRdWtqvGeuLfqKuNrKDmqmKu3vxkbfV5w9W1b1GbvDx59JhK9ZkwhWDRhfzRgtHH8ZYmxR5tW8w7fxtUchZ",
  "key13": "61EKU7ht4Ndxf6L2KZhJ8yaXyqxEFfA1SxHqV6LsP8qeUr88ixjEE6EZvbhqT6t42DNdVhr5AWtjyQGpc2Df59wW",
  "key14": "2ENxkbDGguZhtTGszmwzmqW7JTDzHDZ7RSgR9QpxkbCbr3jQ7Mg1dn6fvqT1pudWc2vhWXLHcdcLTmRKbHazqdRW",
  "key15": "5e66REaTSCB5AkH1NoT5REuXpARccKwxp7SemaBbitoUdHmoJJq2X5KSXXkrfX3onAU4w5ew5M3fLyTNkafgJdRF",
  "key16": "3ZEXPrwdDg1yEtEKzhS6kF9Pekcox54TmzcP3GmnfsRPMFCiebNDa6xX3ZDZBrGjsy95TTdbVnm2YqUowHCD7NHC",
  "key17": "2ZdgTmzdHgNPNLEqCjX4kA7opLgek5vAdYjtGqj6F8U2B2AuapECytVJQUahfrngX1NeNfHx4odtdcd2oyQsCJVu",
  "key18": "2cqhz2hwqbcEdDGLsvx9pSJdyUG7yYQjrHC4PZY8MgEMRBXxMSU2oxnMzsrCv5rAQAUEnzKuG57bNuXY7hy1zC36",
  "key19": "2Bq9wsRPWVNyRU3K1SCHxQayqwaKu8Ma8QobsGr2ToNd72vxFsUWY7HVwiGEycJSpigRURB3QS5ER6ahRhbLgD29",
  "key20": "5snTgLctc9zWJSRGsUkcW2SYxAV5DqNWz9ZPk1wNo1t1tXMG3gwRMRXyx7gbWqp3VxHQWxE5Vshwf2CxSHKGBqTj",
  "key21": "35FpBmh9q75vWLKKrCJXqA6Zj4HceEQgY7Mazm3XQmpUX4ow78DmLfR3EDojP813YUN7Ei1PucoHs5UAputSkG4g",
  "key22": "7X3d5tcrWrrBmPTdoDKVJ3sE7ECKgz1SyKFrTmpPZStyF7QZEoeXsksSjBxGLSCwPVhYx1rV4KhjAVbWZdAQprz",
  "key23": "36CorMUCifGHUQVxGDMWvKTQ39Gs1ygiBCoReNin7RPEyJx52drSDwm46EhJT17stersSJNCeT7bxT1hQiUn4M3A",
  "key24": "3ZC7RRVKfU6M84EW3G65ZPPjAj3T3rTX8RjDHR7AkkQUW4igRVncmp8dvsvqu8FFFhTgreqqehGRgrx1EctidV6b",
  "key25": "4L5wu8XeGN1fzDvaUUTjYiyeuyiZC6nxrjVqaZKuCr3aPpijSvB2JTBEv4XPJDFEkB7eC4oMeUpBxwq8TDpsC6EQ",
  "key26": "5RCL1LZqeqd9phiivhGqivGSgprxfY3oqbpUms8gLs4u6jdHzzeHnzSN4QtoCHr6SqA9g5D7bCnxa5rmJ5DEsHMY",
  "key27": "4pAHumdhnV78e7eMsP7AK1tJNHUsBj8nDsBbKUMtGoJA8Pe8afjKwwLdgbH1UNKfbLWmJgSgsdvg4ZmXCPFsnZJ5"
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
