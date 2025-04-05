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
    "46amSigPMcFme9qUcq9DY9XbnkmN7RQUvkCo7kscGvVt8ra4d3Mvv9YDUCej5curEnYKqyTZwX8cLwfNJhZioQjH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PjhzUGEWgEcBKV3XAw3SHKA5Ayk5eC5cjvuyipPxXNXvCpjydWnN95mAAVa5DkFZCtmTDQz5L39doN8y67q7313",
  "key1": "5cCQr5f4itm5aMCBEzNNtrKocKi6ZHHxVJcDYQ8zgGP5hLUcui5Qw2hXanuAwrA7qYSRgPmWERSEXBvPfbobjQV8",
  "key2": "21RZfHP8FfesRJdfAz8TFDAPvGTxQ9S4nvJ9tg9fVVpabbt2uTsXhKGeaNB8Z17GScUNjWA7MGPd4P1NpD7zqSmT",
  "key3": "3VjjpwnqABoXsxM9qX3iMiWJoXZeCtNMSrsQe3yvn8hUDHZfBZvKLzKH9DmVZwN8z4DiFYDYSyvFWfbgNgmAjS8t",
  "key4": "2xnzb5b39eaiuYepjaqyLdLFNW3tzwP4TfQ9jGvoXMmKcQWfMztTpbhcmoYZNDoAEjfv7q6B9hS9FstnQW3WH8a",
  "key5": "22i4TeaNkDmnEzXxUe9B23as3Dcn9heKNhPchFPvmN1ob3Rw4QVuezBcyrF3iuoRyBD87A3NuLSvScdUPQfN4siH",
  "key6": "36M3oysdBQe7fEJSQ1nyYjpY8CyvKuZhwbbHANUi3k5jt6BjdnZSbjcwxXS1sF4gLZaSi6uxMwdZMnuTN3dzE8Zn",
  "key7": "4JqJEm2AspqTTEBAxzYKiMt3KmGLrqJVUn2trDTHhzhkjK9CwmvtwpAkagPh6k1LF4wP42vpVGKhSPMPxyovaSo4",
  "key8": "5RqxmPRH5C8ZKe6AmQrinPJRND8sPUZSVE4vCxAnv6Xri22kHAEF1mWFqVBNqmJy11Uix3T3wPojVYmXkEhQTcax",
  "key9": "26konySvzzRdWc7BuLhAQWx78J1BSrVr2noHbW7YPiDSyTSVsTJxt89W31t94m5g7RByfa7CwvKwjftfeGmTtNNW",
  "key10": "1ahzV5hDi4gGtMHk8jwhPTrASSVQTFqnFXirKG9D1pJgURm8jyhwXgrMDLeXT7J3vmmDpvGKqJJMiBJL1Snbu42",
  "key11": "5NqHoPEacAXj6275eQBbsiErUJ2dJTrgsg16KtNFviVSd6hN4eE5sjLhTbxEozjTrMVkcxKVTx5A4GuJG9kDk5sd",
  "key12": "uBzhRqaAnQDmPm67CnkSmdQiKqKVYjSuscgCr4JQfFrn68yLfaLFvazV8Q2emS8CPVqKGv7JEL6jtxiohgzaD9A",
  "key13": "5ikgBFm5WeT4KPfEiCcCmXMQUdMFaQyWAt3WH1PV3v2VLQyB4mRimSEMvYHeJkhaTLyyhyXzCydPLpVa8eXpi2BT",
  "key14": "5C3SWKQe58GiX4VHJ8syWdwdKNChrpnTsRz7FAhWQLCpc7aRxyGfdtJd4mwMesBdpSC7pwUVQTRXeBsBMiLMdTqM",
  "key15": "4PCeuYsE9go7vQLuS1XZgND1H54Xb1iE2TL2AX6V73ZRDadPDiaB12zuUKmz8s7MFsnnoidkkHix6iTWUdeFPZfM",
  "key16": "4e8neMPXRKH3AP4s3Kqdvt4B95bvpCDrX8uiaQ9EQFKtdVoheyC2tVthohfRHHSdEkG28umuPVEZKxCXCE8MKZxq",
  "key17": "33dZjXyks5EJZsCPjdkNVQhQJHkHZESb6rZSEHjcfDbeLSF1eLpcvkvrembXqfTTFB5quHMZYsMQGXB2Pi5evt56",
  "key18": "2yjHaSvA64XHFmwP2nBMBauvnp2sj7ZX6vpXEdwBj3hq1c7mPCU4AneuNLZgAskAhiRq1DbcqJMAkBcvnD9H51jP",
  "key19": "5DGA11HWAguXJNxZJNcSqWmqusdM6UwUT48rvnaeL26yFce6RfqR3Vypwi7aQjHipmzHeYdA6h7ciiJDpyGXXqb2",
  "key20": "rxAJgEHtfPzChcV44CyLtpguwm9wzVVPkrG7g3gNFC693GmZpGtt2LdKQmCoq5dQ5VsyjL885wtgYMRjtGCdhvF",
  "key21": "2dNGEqwxw5xDyB1Nmy4RRVKNNrbVVfPN2BanqUDHf71xTFr1Yh5gpihpqjqHiCukdYa8oFvyZp3S5SwZ61CKiCUR",
  "key22": "1fQrcn4iYD47fE96cLHJ8DzCuestrQy55UdN9h5c8BVCbAuaw2J9h3EGHjpaDwnAaqy6vkgP5a2BqqRxuv7GDjo",
  "key23": "QpH8oHJjC4rqK1yMqG6xQSo5E82FYUAw4QHU8PmvYc7ShTKiceKW4FcZkVK2gXsrXNfFnso282QzeCgSGy7BTDg",
  "key24": "2kpPMs1jPTQeDYHdzt5RrCSnr2JQ49hBeto4V7YwQiUMwdQFkCsfMLXYgQfecCJsYZgNdvjXqYc9c68wn2heBt3V",
  "key25": "2KsHPc6AE5HfiVrxuE2GsCUScJzYCNDecEQpAy1pzPnJJdrCK1svZNvVkyLRuHaQ5Dc4fsTV4vJL6HrKtDRX1Sfj",
  "key26": "43awKs4Vuh1PS5G1xtD9S43N5dG1QTrZn85jys7TfrhwsgkKHRYkXqdevv74gWDgLxu2F16pxpU8PZVjb4vdiBuu",
  "key27": "4CcKQwwxcxqz9HBWfEozB5zr3xCUQSktKZUJocVQvEmUeeC6YSVTVNJCE7Zyf5CpDQbQdoGhrkVHu6QsLDV3rQXA",
  "key28": "7iWfRgrN1PhdJ8DUv9E87owYCAe4n8guHfCn7D1QprUPFs8MfpNwQFMBYMBBZGtZrWnLGRoet4mMtSUmUjG4M7M",
  "key29": "4VCWMrEWBaKutfhiUg8deyktA4eSSCVgc43MacHXQ67MpzxeUaNZHB2pTDPdA8W2Rbuq17XFniKQfVwgEBdqi4dg",
  "key30": "4djdPzuBFJjADsmio1tSFo8toiqBwAtVUyYgF7SncTrbNqVdW5KXePu96UraceaA1dmdB9CKnNSNrDgb6jXFyyUm",
  "key31": "TAwtUskYNuJPc11n8bZKupRd2cmPQFvEtoKEgtMWLB61hF1VBEcD3Y7FQQ3Hkvy6FFqpb267Nw78ErfSFfcdsWL",
  "key32": "5xZu91nsxSjm9WVqbx6CmzGBJdN4zKfzSWQWQiTtR2cVfTBsZTTPTo69Cjw3aXLSchsh3PJqavuXPyDmJLQCS7KK",
  "key33": "Pz7fZrFgP7V47ktfXmMXF82Zez7QkxK7sS7LbZMTUgUZP42nY4pqHpMn8rTg48W3Q9jPSdvasmQCTwcFScRjBEz",
  "key34": "2gnoKADnjtSaQYNgTgMsuLisXzn6XB7TNCdCiWm6DECHjCKaWw7u2Y2WSpYL2shyY92rskMFXi4UcVySyZBwGi5b",
  "key35": "2ANfFPQih7oUYCLsBr7Fm3S7BqT38TpXXGyQJz3ZiPrgngqQEuGZm87ryRrFCrqdifrfbmvZ5Z8KQzM31LihNyR1",
  "key36": "2TK5i45f2K6rm2dXZNk1EVBmXwfZFpMCpJHnNpczXpXnPrBWmkPuiW2iBGUyHV1G8fLJYkmS5ZNKRhqQxSFUhxHh",
  "key37": "2RGDBMPL4QKAEyWRPUAEiBcUuRDvxnWGR7wpDRxPLEvuCYS2FfgE3EUCeZ1QJBdCwrVZqZkbVzHPbeYxMVPkQaq5",
  "key38": "4Vx1vbWDrLCPVc7aZ7sWk155y61pvDuGvLx6ZGB55eoquMuNVd5MgWLArqLgEx9LJcpH3qr3WszG5Wd3vt6q4jYs",
  "key39": "Tvi5P8Zik6EFtMN33YYVYWM7joVvCEef3ZHUqBrbFYoPdQNKufTqhjr8nyPDD6LuWtRDNLv2q9yM44JAtngB9Mj",
  "key40": "5yvRdqUYLaf4XHcDW4Z7n2DXfrUP2EgHscdD1C9RaS24Z4aWBJkE5o3jv9kUoKrfxHmjxHW3SYdtPjAX3YLQzbWf"
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
