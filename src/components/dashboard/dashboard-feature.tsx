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
    "56AJQQ2WPei61vGinYyX4VcMAzf2f7dQdZnmHctNoNa2dsdAT6zEdVNxBj6Ny9RV6MQ4hSPGwwiN72PG3oxqdHtV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "262ZBGibR4Nf2pJ3iE3Vn1n4KtCTTdSVr2NftGSB1zpy8Pv5RKoy9ThGufy8NFXafvbUpxzP9MRqDiRLzYrH8Pkw",
  "key1": "2XbbFXC4c1NfyzwzMMFFvcvVCbL2GDCQs7yBwsxfk9TjnbyvqTL2Whe4cmeCeCQMUULDRdczqddsK4RFHKrszSAa",
  "key2": "4hwWPyuqLukbP5EEWrGkNPRRX5jjKc5R9jwxU2Ro2mHX1DSgyibfjhjQkQxZTeCS3cK8nTgqrCvgQL6kXoP4nbQw",
  "key3": "2N4QpN65TusFVwLvxzs7unr9NedNNmi6RokZ4SceFbnsBuBXQfctsZWCnWP8H4NXp8x3GyhLi4aMLgZt7dA79dY8",
  "key4": "2Zz6kXKBfqm36vmUvScqQ2TLqv1XzputfYDPtcUBvRboBZWDVvKQyx9RyLQKaEDfRazcrhZdSrrGijhL4FoxRdx6",
  "key5": "4syMSkeff5UEwiMLsDBgay9RXtt2NobqeyPVt9qYAR849ZZiLFzanHCVQ6z6essnW4Xs8VKdUerKtQWgV4wr3zgu",
  "key6": "51mJaZGksEy7ojDEe9vcA4f9H9XqJ6kJQkmKN9b8pmV8QbcBKZMLxwsFM3a4Gd2p3aDrYBnBALRQzrG7x5hYjFZx",
  "key7": "43zetFq9kyWn87LMgryv9icUoUxBWbJbMe6MCt19TnMT9JwiGuggaQJEhjy9NuMK2cunCqCrvkZXBFhPynWrzUWT",
  "key8": "2QtjbP9C5KLhot3V8eYR4YMYJQ2gaUj2xZQXG2kFgAnsoCe3fSmk8LRkgQcDWCt8mviGVVkyH88rRPc6T5KZQTyR",
  "key9": "3HBMBt3vwb4z2vWGHctPh8GkmGPSt2dyCTVQZMuaf1CwxwGrAZNA2v9dCCucyr2QVHeo2USieEcKiqHmPwJUCBXX",
  "key10": "3k2bv6DsqLpDASmy5cYQEe2pRG8mbdVqz2vCyckrKAEmAwD3PzG2NkzWoHyhtdi3u6b6aoprmF39LHLHcpAMqSTK",
  "key11": "4Guh2FDMiyNP2emq8VvtB65EaCGhdFmNcsorCJVgmdbwPGpkdFLAtxdSC1y2eHeDZ7JvK747jCDp73dHLCBsW9nr",
  "key12": "JcmACZoXaCj2FdPrTb4Dq85UdSAV4PQ9EpWgKT9iseAbJXKKrzfhBtceNwWLe77KKZVkVFmJYQP8AU5twjsGtZ2",
  "key13": "49jHKcMoY8QRXVgmWCQ8USN9zx8TkUtve8PcmFb5RMeoi8gwiibxwGjzrGrTyHbBKzvPf6LMttYRGe5LPHJwgT2r",
  "key14": "3gVVbpWTaXthSCxByXcVQHELqSFFi1cfdtvb9mQi8DQQ77EXZCXRJD4tvzLvBUpjY738SQEuD172cTDfVYzXsHeH",
  "key15": "5udDcsC8suw4Ze97BwJtJusWwX5Dz79trRUDJNKMnv5J1MJ85rzVWYuNsC1JcLUt52P1bqkrMvTHb7yuy43aFzmo",
  "key16": "5qqD2oiWzHcZvTzNUJWM4KduEhxpcumYtRaLPNky7yNEkmAjS3vT4z5sMk5VW8xz74GCcwRD8RaDZVE7MCGwTjMp",
  "key17": "3ZmwcDjK5aFM1awWHbR2hngX1RomGuvUHrS9fXepHDbJYaE4XnheRubAPmmfqTJ7YA89H1A7Ytw8gdygQiYmowaX",
  "key18": "21cqd3sLNe2WZAP1GdQtKuUUeyQHTperYFaFzg3Fh12eUhbiukG3zk1HooCnu4Up2v6LxeHEQkMvdmt3e59qrK2z",
  "key19": "3wytavHsY6H47JMFGCkYar4swsKVDrEhAdPrmgS8R1YbfCFD5GyvQkJo33aFKSs4jCuhjNUPy2dGbozXeoFdFsb4",
  "key20": "2C9U4hCNSEZtgbmmP8BiFoRdGo2x4ev8qwfVqJaVmDahx3coTiPe5p83QFsaYG4v3jKk2pT58dTtGNxYs4QA2Rg7",
  "key21": "28nXqnmLTGbTeqP8pQk9EoTiGGqm1duTbRwZUa7pNcTBUrttduYWU8ZNvfr6S3vY46DGj4EDDCSkHhZjkYrLaMpy",
  "key22": "3HhSGUj34RqvEQ6F68QhcHesyG1sgZ9DrUwrSJK9o3bLg9vRWdzf2TRRaLWR1TjFydZfB3hWdXjix7hLe5QcuP8D",
  "key23": "3yZm65iqUhxQkK7bN3wADySMJJBtC2f1HHQWytp9Ny2EV4nABnrs1YhT4P8hQRMuKgWBLmoYhzckRwsSzuHrcBgP",
  "key24": "4QgiDi7PkY32kDMxtrxSjoy8XFbyK43MKP7ugNd3NVJsdEKEEcgXNYupyyqE78TSuFu6hDCohnpxAcKx28FX72eA",
  "key25": "56AiJWfa5kTLXGVSnox3hU3zFPVmQ4EPLaoajBcaxHF883h2QCZEwNKsD2NVNBumzwKvKNoUSVm3am8gmA5qCpPX",
  "key26": "3JKxx8bRskwpjYytc7bjYW2UEFndeEBT2j2rDTctya7GpnVz3y8DirUr4tpLmrNmRdPFJ1zTqZTky3ceGpWtiEmZ",
  "key27": "BALXNvFfh7Ep4UP6rF6JH3GdHzDKWT3JqfczX9omxk3PsVVBHZFRXRC8HS9bnS2sb5rrgNwLfpcmLpos5pbP1Fe",
  "key28": "3QfyFKjiuGDYjeHaJnhCb775VqK1W5qHsSn6kziHK4Ri3LpPSANhNVJbNHzvwAZQJF4D497PrVeQ1UfhS2fHzjKQ",
  "key29": "4nLfAj6pFdqtBKvUi5ZzoRhyAgpFKKXKdA3n2SMeqZuiqRWbN3TwLNeWxrFVV42w2yBrjoXnLissDSL53MtCyzxL",
  "key30": "4sSpArA3z2La4UQm2YQ7fNiuvVgrkwG25mN5baNtCbK4BX2fsE32teVKpE7Qd57iND9fFQxT6ix5biAGK49EaaQG",
  "key31": "hQMZyhHKTbCob3E7W862wazH5BVD78Y15Q2EnpfCZ6B9nZrtxeeFQw1Wxu88DNngsZtmuutm4xUgLyH47PrKtGh",
  "key32": "3zDZhhuzPQRBLHaEx4NYE3QjFH6bHfac6AhjmABw3JbWyjrgD2RUDZNoJeJ47aq8zejYBVuNtJ9vAZQTP1Ty4jy2",
  "key33": "1KutQHr1drA54W8B8hEpRyqHqrqR9bR3rRfY3trj68kWYR2uoFc1LgWYixqEbv9atJ8UK4aZG4Qjnxjso5DGVDu",
  "key34": "2xhRpPNsq5VkEuZxVHz5wyM5a2jCmBGgwajGdhcpNHBEciNUk5NThc62ohcpET2NBica1TyYEzoDWqtn51Dheb7n",
  "key35": "24mLwMzmd5pKqCnW9BZ9fTYLN4NiHKSvPMXTbVZsVuBfmSpL92hm5sX3j3aJ5npMndaNipnpqnjzLJ53G3YfJaiG",
  "key36": "Qp5ffZMVAQzK1TMhF8mkEusGrJwY6gkuTTryQ1NnpkYKeHWeZzco1GBe9NEbnnk4B3iahWZznGRGj9H98AnBeiw",
  "key37": "5PYMHPGH21FRfrozeQNJ4bGefmfpuKeK5W7kPJnCdpfycaPgqZsrST2LVntiYRX8AcmSAC9TLGWmwwU8fTpKo4jz",
  "key38": "5McneQKkHUunSMNiT3ADSqMD3dYB5DK77AtGufycvhgXNNrC3SgbEUkDnSriZi4dTxPn1nmDM1ofWx4kLsLF4YQb",
  "key39": "3jUvUHwD8uADWyUcWLZvwrEbARk1Y4LMEvJtKgaK7mXFe1xwXRAT7V5xdfRapJrt1u1sYFE5XsRDbdSrUZiKD3w9",
  "key40": "5SohXP6fwGPdDafkuqv4oCYohc9VzHfhbobPr7W2VjGumH4VGBujvGf4AKJbnJ34s5raUoscRSkGhbjDa16g3UmX",
  "key41": "pkcFgBE7Qdc3YB5RKUGYvKPHnSVF3bkAsV69jWB9DF7UqmMxLi2LqyoUsBK2b3o6rkAReBDgdW91p2zW5VzCgtH",
  "key42": "4vuuJG8Q7hd2p7mCqAnr5D2weY8X7JJQ87Sm2CgbM3muaV6LHUKhRUsmEwng1ykfWFDWFwbnfJBvovY1cffAGpi",
  "key43": "3QCUjVktaDDAxuhB43T3vwqjg8CqopuhpUjgtYJ3f8gHwLZH3P44KeQfACYfevKARF9VBETfBBvj1Ljqrr7xpkVE",
  "key44": "PckiVB4fCDjPLJtkKjvw32uwCUPhQfCMuPG44UmbSLu2MFyRwGE9jFH3cSCkmipVzLHtZNwCh3DSSHjNCdv3xXE",
  "key45": "29KnGNvwibRiQQ4w1njU2kHmpGvqD98hApS9W1egYMaxReCsT9R1ZxN4cCJpdBvqhgBirQEj8zV6f5KRCiP2ntUZ",
  "key46": "5ScNpCR1Zj2QoEyksN12oZjSEYhHc4YrVBquYe7KS1kSNaN8iT9hD66TmKVdbX5sHguAT3X3pgH89y4vFeYvjnzg"
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
