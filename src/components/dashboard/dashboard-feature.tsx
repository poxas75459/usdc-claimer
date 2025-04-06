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
    "2paEk8J5EYwBni9Vgs43rZB3kLcz3g47F4ebNshxBnjjA5iJ8RV4oFHMp5w1EkuJmkRaAgfYNNi7CMczfoqUxzjj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aFMh2fuyeY99XAG3GhR4LoKcSKZWx9S5KJ9hguDoNUFovqMUKRbcNiSt8eH49SN6Kx9TA7BKi1r6cU7A953i5ey",
  "key1": "5tUhB66SUCMTQoFsdTDKGTKstajpWXcWWoVFxoEUszbQBRVMxWvVQeMV18yMySubEn14uwqNtg9rxKU9KhNjFWpP",
  "key2": "2eV7q387Cdi7Tzkiw5xYvDAMteD5DCdVeg75G4CRQEmVtPK7GztETkkmhYG7bSK9ZXQhD15bDt9jCSqmEgwBTr1G",
  "key3": "3mhMAXksMnRB31aotfQJ7odpwkpUrd1Z2ZTCtkzFcYq1C9GuNZqDbdtovKsdbDpWdN6sXYb3DaEFZ9MRRfFMZV3H",
  "key4": "2upwQQctjCKdP8oNRjNUsMTn424mnZvWeCYGQwvVr2VRN7x89aBkbKct5UttkSgugoYZ8qNQ6kgkhjP7q7G3Y5JF",
  "key5": "5SETyzmHdv4sdKLVULJfhDkdWPnKqi4QqqJEw75u3fu47TeYdnff8tvNUiSRi7ZwJ1XNKh1MokW6E1Ydw1XvD1zs",
  "key6": "QAh3pu2yscdENBuTGfd5yQ7wvNB4tbadaWJb2rNDg4C7G43z5agYCXW9BD6d6GVbrYTjB9ddnm4ucbYSs9v8tM1",
  "key7": "jaXbUg9QxRyW4fKNf1pU2tnkDwzyhrMNkKT9cKCCPKxTGBisEPL9ruCxzfLMHtctKLULTnZpkm51esqmZfY8Z9a",
  "key8": "FK7L7cQPwrhbUvmKCbXV9t2Wx6YZw3LnCsHj59qE7Pby5DB53Bjue6q5Kwu5382vV6ffs2LZmXnU379M697NkgL",
  "key9": "5CpZTsFQ9toKhwsafYzq6o7MqLzwSstWYtHZsLHRB9zyJGv1mVXi47QpfLA3Svip95fdPUb2ywkS2wWgJ1TNVMwk",
  "key10": "3weBxDKm4owtEA8br8qGkgFpd6s94KXmSpr7jvX8xVUKmsQos334gjLqDJkrsXYEirugCqsgmv7btDrCNy14wNF4",
  "key11": "4eYuVBGesARd89BNYRuhE1C7tQ7yGZShXAcHF6qaCEWLeeTqzawDkK1uiAwJyJ4FmgR5pXytM4gekhHFUwo8T4JJ",
  "key12": "3aM3yqFZfW4uCT8TLUGiCTWvgxasd2H388mLuPLiuu99BE16L3hLtWL9ut5ojqnMoJ7uhn8oA7X12ueH61EAecwA",
  "key13": "4CZxXgCf5ATcjf9dv3JR6wRMJkKDkxbUW9Df6bgx3xDxxugzS6WcJGseL97Z5iMt3NNnaDD9U2K24CHL34VY8Sjy",
  "key14": "5oqB9bmLK88NKs7AXsZntnKimigHBHfkoAiP9KfHt7owiDrywgCrK5AEN5MFh8c1qcN8JAWgnLuwgie7Untvft3F",
  "key15": "2nWJBeFuubNbBfFo7WrjFHmS32thBa8qJcGTfYcN21XfR2Fbd8At8qNYrxZXKc7EDBMTwmzi4TPyinGcFiY1gQhv",
  "key16": "4oMFVwm3agWtLbq8as6wQ5rCSDmTPnmBF9Ys5bmAG2tVCcyVNYh4dYAzJQJHcJvnZ58eZEBuxeqaYdqnGLoCpKcF",
  "key17": "nvJfjLwxEGgfdmrExmYMSisLFr8dEBvXD8qxTdJFCVnreRXfDF4qcyyUrU72bSoKd5yfF1yZQ8ji5U6jACUMx8V",
  "key18": "5vSSqWGYBBaoqDEKSrFZccuKsceLH4WQA94kqPtSEFHpj17H8SxGeZzk3wvU5MoP7EekZb9mhEmnxRPz2pTcoDyU",
  "key19": "5qbdViwKSAwGYZ5y9XbfWJfKC8SZer2eBSdJ7SdHDAHaJk7Q99iapBASyYrgAVr7NB7ozb3Uk5r677crMUoHBLmb",
  "key20": "deeVcrpzCAqUFsXgVr2ed3uuQGbJNGYPkhcji9RhervThXGz4JaxnFdrvUKS1YrcsnozhFdsbgfd9vqQLbfDs6F",
  "key21": "2HRsYviNwyDgJZ6HLyZjG8MwWHHdUKK3GS6iXuZL6MrJ83Xv6oi5Whdsm5WJbBYDnmCQf1vZCBTqtjTTwGTk1CjJ",
  "key22": "45G4c5U9FZxNnj8BzueAjyJU2jWe68HGj3AHZHQxAX8R5RhKsAVrcZUQrJCqUpC6icqtJaAMdtWPstVRSDDzfQTV",
  "key23": "2xw6ZX99r8fYQrSewSEnTz2opfzKGJ9mjb4cQoYxaH2hL1mFNqh1biUEH2t1Wo7kwNyBM4HStTP8Mub2mTFcyYEU",
  "key24": "4AeFBWUHJD5drRzbGtvtbUFpGA5gxLbjt1jJZeYW9UUDVnMQ5Udbc2FhhLRaERfasjNNPh9xSS58YyTU4mUPYC5u",
  "key25": "3wVvQwxhXKynvEPYsLeoWXwRd29infnUnmjQPRLWNaXCLFrzUPcHKD5BsgyRY66iPRiYFiEQkAcfAUnJuStCVpx",
  "key26": "3bNovj9iBtW9tbfQgVJ1Dg5pFPFSumtqb7buGR2tZyTiifLyXb4W6zcYGW8cmJXJ5hhDa1hyvcuPHs2XwoSQpoBq"
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
