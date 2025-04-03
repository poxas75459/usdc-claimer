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
    "4pAv3nmHDqMLCiDTd4YRms5PAStTuhA8DDQzEHWQPZiHMkybyuDGx16RkZmhqufpkAssXKV3d1bZTdopqrMAMYLP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "378GJRVSVFwSp2VERW79EBAE1sWsmgMdQ5XWFyZzHEoFV98Cw26jVo3P5NbudWWVuMA9kiBUKRd5FWV5FLstEsX3",
  "key1": "5KJCfxwf8qzZWHjLfkGCx1P4soMCvaKy3Mymqo6VtJfoGDKxdaTPmSR3PSLAqvybcFXA3BfHqYapq859LqKCSzDZ",
  "key2": "2c5ar3MzuSJi7mAN4CKB54pZTBT38RkyA5C2kSxn6QAmBgi9z6WyQKAVJn2uKGZyrXMB6eqGPJruHe5iMdBbukYo",
  "key3": "26GDxKvniYXMhoGGvd88g1uBsUEfavoHTwvr7yFuZr2rzDpFsKCzoA21Ga4KLkfHJFv8Hm84Kno9ocTXScTJ7Hu6",
  "key4": "Wm2ZLy1suzkMiXh7aoSspnSQ4ehMATkWozZuEFwAfFa29Vhw3jvvnZQ1aB9wxo5wn1sxH542uQguRVUTZhuNabS",
  "key5": "43KnSKoMyipL66Ai5Mco99uV6xH4donUgQNSdHRw8iYk9ej8h9tSGwvefe2wFbZLw3hnTFhZ2r8e7xVYM4FkKiBa",
  "key6": "4dm976DtE4Wy2WXJCpHj2ySadzMYmyUxW7N4z4efhADz1EodebB4jEWtwMTMb3ZnUsv6uYDbyBk3yuzAHMmxVWTw",
  "key7": "2rV4L15WiFcjM7kqsWjepZnoYfDFmNiAb4MZCNk1ekm1sg3GFzuMrP1KbqDEMTZDXyu1JwWYMBcG4PSRRTX8CF6b",
  "key8": "3SMNdyt8m6FbXeCwYEdpXmTVpdrfo9ASeHdKSj4GmR1TMhc9nenBkS4Pdz1eDZCAYhN5qnqLs55cRTGFQzwe1AnX",
  "key9": "51XMHhSvB2QZt78M1Uo9F95rhteyaUsW3do3BicWHcQU7NT8d66ZmzBEVLUyEHDmP73xjUNFXThprrzyYcUVFMC6",
  "key10": "5g6ksXckL1tXkkTXvpmjJNmWLWWFRVYKKM6tHwPorC1nDC8QiCpZtUuxW1cH7EopyvTFsshDMvip1yBcnsR4jvn7",
  "key11": "3g56cQ6g8kWAU6bMuCoy9cPBpdqtFEqMruj6K8XXbV7KtpwAuZdLs5zEFpxBLADMnv7ThnJkxMU9jGX55pZDRQ3t",
  "key12": "4x4EZTqWipEg1VYpGb5fw86mVcUGmMBzhhUEpQKdYakNdbGCaW2LK3PFa1U6WP36CDa9KR1SMCKyHf1eZZrxvtn7",
  "key13": "24y95yETMwah8Y4KKxTtWKyxRYFf3Qi79TF8cUNhxpMLbUgYwTUCWbH93TR5uJFX2W3Q7i2nvjLs9Tbqjy9d5oqp",
  "key14": "5jJXnV9ybw2a4fAY32hSXgwH4hXrFZTDJQfT4beisqJ1x7uQPsKH451FHPkJCtfSjnDnEdRrj51fzv9p4bAwRv6y",
  "key15": "52y1WCZdD6NhwR8XPt4UAzjEExbyMHdP9u4C5J6gt36ut34fbhJvgLt38ab1gzskeC5aXrYJ1xJdcZRzfFd1BQXy",
  "key16": "GznEZ65WPKjoBP6eaH2mSPW1WvRdEPTBJARGMZszaof9qA7ax9WzD2fPE1emZr8V9oh8WTMeP6wZ58FhKdyJPSV",
  "key17": "2tEkdjcWcBm2AJjFhR13MsbWjqt3UiqGarBfHUvTqq2qrg5hyZFHkcd7R4G8e61Y6a5kEVMoGwFTDMHZVdnT6MGU",
  "key18": "29dKY6fpLNKzmG4RTHMSmA8ZwokuBdSh9EthTuk7EVfoJE8hqEV11K3AAN1h7vsrY9pPEuo5jcfoERfNciQLtEe9",
  "key19": "3kQeGG4PXbeJMG98tPzk7Y2vYg8EzvxHr4F6LhFgnVbpvSN3ndkr9469sRrThPRyLwFVcaLYp5BhhcceYt7H5uZX",
  "key20": "2bfnvNcsJ4GJjPjKYr9CGVzbwVgp82QKe4bbm99khozcbxFs1bVt3covA6oGvT4yTEeqQsKTH1Qd1nbVULbM3MYb",
  "key21": "65ZxaLNqAJPfvBbBAVM5UWir7V9y2NyhtefqBqW6gX3aZthoZeTjTWuG2Kcbf2zUQW1expsrcw8bVvazNK5aiWir",
  "key22": "AxGyvEBNCNjTR5gb8A1QSrbQVmGPmPcBff6iwBT7JU1Koj9Bo1c33WnK5ZzyVkshnN4rPioEzpAFcm7UAqPsGg2",
  "key23": "5y5PMGswZZRkkY3Qck96cTsatyYknPRXNeS3JVshHM2SMiLoK2H9uqjdrHJoVgBj88s3Nb4wyBTHj15f5xiapEtq",
  "key24": "5qFkFgybpAW638AzzHKd4oyTLuJg9S5J5rJfw1yppqgsG7851mFwwgda1frDV1gGZ7oMTxpaSzXPrYeAb1iqFYF6",
  "key25": "3Koo8p8FciLA4etNjeJxMZwo8GJEqVMd1kpabuEdEtuXrhNRyySJnkQCmvGxqnJTL3ARcemHPpwsBVJLTVa1QmKn",
  "key26": "3vCBjm9nXm11fbtvyb5kQ6zXEnQ3jsBLs5LqEfkiDwJGpRjAZbAwjnwQBGjGJzxSNEyg9nSqZ8SB3sjK9eUWi8b7"
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
