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
    "5gSh7gY62bqyRE1r6eTxwqoSiprFctiZGBUhQ24raRt86vhDSKUu13d4kQFtMnTa3R3L799qNHLWsgtxt1cXHsAj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31GgWppMhXZW4GD916AU9UWvB1uCXPhhEJ5mePGn5xBaPCsAtrpvJZXZFp9emtNLuqxTSiJA77KMgjgW5u6c7Dt8",
  "key1": "64FjmHgh5pb4Ea3JUPBYpi29enbB9QBGDxuuoHofk6Cee7pR2VMbS2k11KPL8N2jGKZeohY1pvDkKjTgXSberPMX",
  "key2": "4YYt5Goo2z9N7t84Bf9X28XyFfD2hoQCVf1nuEiWHDy2xvVNbLYyTKdS2EeJW7ouDopWSzD76cMFfFBxZgz9sgzv",
  "key3": "4oXzY655b8Xfmgg6XCrYu5UuFxWVMJpSCFJg7i8k7vsEv4iMNQ1gxbyqVArSUutBGGT1HyT7MjidNkUs38BMAWeR",
  "key4": "63dSm1VWE5teQEV1wFUcp8N8SrDqezbyw9BpURSEwRTKExoL2zXuVU2ciDD1gySno3y5s3bZz3cDuywUUrFfRb1b",
  "key5": "4k3hecxaRJgpeWeuhFZuggS957Nxzk8e44JDJhXNhaWMZ61TtHz2KA82Msz1GahtqUJjmokUAsB2R2RnNWPhdGU3",
  "key6": "DYCmZ15WjQq6BZaoy8ZzDdi5bpyahpisYHVZs1GbGdoT6mg9CMFj6mLdYBYvfA8DK54WfBd9h6ufg7ur4YkbCGM",
  "key7": "3Kvc2u8bSHp6HbmGBeF7AjS6g45Vzgk19RsEFuKoSvaM8PtiorfkZthCxZbinV2NtKDC6yQCk3RizEjW8Pqxvths",
  "key8": "3XA5ekqWb71H4AQwJC4ygkXXoZTnF7LsZCnPL189tQfyChu67xZ6LT3FKK6w2oEheeoS5x8PKa9zjqU3uoG5tycb",
  "key9": "39W48sx1s6J7MHdKKZwVJjT8CK7Zw9ihLtXxW3uG738jsrNdd4bzFqKdyyZzHF54ATwPVcnfPVbWv2evRYFabPkf",
  "key10": "3e9bwdgh4L37ZRGdaFDwKVhnm98fd8ASPJ786fSoCNdn4tijgBKc8y8x71csUfa111bMb3fp2mCa1qaG8J21gtLj",
  "key11": "2bqiWyVFujMq2bZ4EnKjwWNoWYLoKT3hv9xsF1wwRsHqQYXFxXyVybAASBNiqf32qoi1zBeTkeneaeEyDVstb4oH",
  "key12": "o3Naq2adj5kSozD93uUcqnid54LBAn8WVwvPYLq8MDHkX8HXdYjRQt2vjKjyhiP2tyAeV5DByjaAyDNsbFuuqep",
  "key13": "SdLqE8XDngGvkVtAFyiduQgiVBFKSwVJSJ46Sp2Xxubn1qbWt99gDMSe5LUbPwzJm49gXGpCuKmyG4RnUQETFRQ",
  "key14": "4QvdzKACVyw3i9iwdPvc959d1WdLFLc1tsZq2A6TfWbaUisQLhEH9qCcfRSTDRej3Pqk2NMxmE9LKTBivKjHAxj",
  "key15": "DbXDUV3n4kXQDJSsLJF6KZ9khTAkvht6JKE5RZRyhq4FTkJVt6vNURfZ7ZvKPvLHDmnjMoorpEvWTWPYcLNC2FD",
  "key16": "CjvcVWb3gMdUU7EcbK4CXY21fwVL3mkEu5i4pzQ9PNmZM2MKW2rkXPbdCKnLz3v5WuBpv3TdCA5kmH6mG6UmX3x",
  "key17": "V2VwL1gGDAxaFJBFTAo1hMwqgVYZBfSb7iyBwBEtSZUuL6BbV4k1MpH9XarHu4VnjLTJXAU6qgXKRCnWbrJshtC",
  "key18": "5NDaen3V75x9bLHHaLfiGL6LrQiPxjjw9zZDXViMKySdnA9axXpdBhunkexL8uHxdJZggtFcJmp5pD1wkL3VcWea",
  "key19": "23SqqVTndLgEHM5sBDeHPYf6MDN4fgSYNQrBQgNpAadiZ6ZAiZJy1dQsVcxPoFwsFhXxULnmqz1LjtChLYnmjLdk",
  "key20": "4GgHkdY588ZdnzYrby2YECrgz4rYRoTVdCAAcgzrEgZQqF1FYpR1gCSdmXJCba1ytGJfHUhtws5mZJE5xSqHCJPT",
  "key21": "3EqDJpriStvJq21R1ETSYxAAAWHzPUge9yVN6CgBPviahs63ukS6v1FJekJKWxNkbnSUAUG6hrnai3aQLEwuWX6H",
  "key22": "5Dxw16jRpWYVwqB4DX53tiRceSua1kpxkjTJ3wppE6nXu99beWcpB2XEreURguwWcBFzCXt6zWQuz2No1f2vYCbQ",
  "key23": "5AjVc6FfYBUsjZMjQwkm6REPWWbDgbw2yfH1tSe9cSrKNDqiVBMZAqhFD7uRgbmVoYjzo6h8jBajGuavURpJB2Ka",
  "key24": "31stFCf2UwW965sR9Lp71Rct93tEQAZAEMcoV46Yf7bv9ogpdzQjGuqHJhyp2qh6WRnKDm13rbjSjisrXVXjqy3p",
  "key25": "NNcxx7Uge8QuEL2hsJGXmnm4aWgJu8tAQhVV72ysjBMKLKudmi5VF2ijSBC6CrkBamN9V3gCyabMeHHUkBcgzdh",
  "key26": "3RSgVc6cZxtqqbM7x9T6h5PmJYNPnAMe31zXHFtze6yC7VvGb78ivacgBqm9DbfZaivt749KRKbPmvN8YRcAMLug",
  "key27": "3VLmv91Kuwc99WB7CnZ9YNvnKUCksuPnfvLVpGrExBa7Jrn6G2wTnG4tnUY5GGVcsGRxCqP67mJJMYKjjKDRL7rJ"
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
