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
    "2VjcAFNfpnd41LxGYHfNorGWLZgyCbTHLtUQqBTdNKNDpkZZhZ6sp381EvVY5ubP3hdtDqxMALqo3vCcvGFyquXN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oqYkSMiXPGtLFSyAmgbNuEv4Ti7fMvBxJY6Rf9dXdqvEbt27Tq3RpNspc6qPx5rDfaR5mbFscybuRrRWuYVx6TN",
  "key1": "5dEwha1E6nhBfPCwJvEAAP7w25KsqSjJjqijKQxtqfTHDMwiLP8yU37ohYv2M2eVpBDhDmBAvBC2ZPGwBx8MAHtL",
  "key2": "4yWe4QFs1mh6WMj7RhEUsyjUdLVNL639P1sjwrBueWkNZkN7UciKoYz1b543FPgky28eC9rDisB2XRxSjYsannj6",
  "key3": "VMfJubZBUQqiNtkMPKQc84x95YosG3rxz1FudojcWR8j1JTgC9Lb8wqLT2Tet3eE8qk8xHSVLoucSsxPaEN8338",
  "key4": "5m1YpSo4itWqszxegVkZa7hZp2drDqXNd4WrK2xyZApWwCVpumXmpc65dkFjyJ3yqodKH1ETTDDNQjyPirJ5rHuR",
  "key5": "sbwBCMMSW2iwtyNR8TnYDZt9t7KAaXQW29Sn1iBT44YGhr1VpnYPauLAzbhPambtefNnNYGrkz7jj3kXU8Zj3XQ",
  "key6": "8rQzXBPfEA3PPBiH9meKkiRNwVwuE2cAGt4fcd1DudpQe93DPq3obGSne2w8X6HhcEkjeWH4ukbmsvcizHFJpEs",
  "key7": "54wijvjQkdMaHKvzzojT3GSreMMcRFeWqgxvpNj7wiFdLX7pYqZBZC7eaVUMRz3bmPFiLQy2QHw3X3UnmVbuwpvw",
  "key8": "25ZEYeJUJ7Td5KGbuwkxicGrXsjWUZ9WYUPfKgnVf7aKxaPCAFoVKgZfNpvRvQmZSQxEKt2595Er7QCaSXBj4i6i",
  "key9": "3CypMn5A7RESTU4irfMJjCZr6hsGrJtDV9SqjBqfF2sGsfD1LL8VM9BLjMWrz3QxYZuww5p3wmFus1v92DNAWjix",
  "key10": "5EkMT3HMzntM2STTif9A3UGQBZGyq7AfDrTug1eu6ce1DUaVqz2MQUS82LDexXf46Y2Uw7bGusp7CWPGyEm2fbsA",
  "key11": "2aM6SFPsH1duHTR6D5aE5342t4kBenBKdbK5muTBDLihcxziaPQGYi3A9HkTn42UDc2whaVgQ3zMG7wLAFUmeL8w",
  "key12": "5xREVTgjrkLzViVDm3SrMpqgU9BUV6v38uJQ3BWTY8Q7je8KbGu6SurhYtbscszeLEC5QFEYSA4xR2Ye6w8nUEdQ",
  "key13": "ZpqVGmo6RVpVusobYsfDY5CE4DSQbtSqGP9MkYN7p3iCpodgw8HAdP5hC44uDdsUhPVsgvabuhT9ApN3qsgrXKd",
  "key14": "YetxTFDsYHV64qNHrKxsvqicVpBaKDc4gRuoJvUh8JGbGHVeXNGnjcRiERmwrTbutDUn612cbr2w4W8fozx3Wfe",
  "key15": "2aTnZe9JDoYx2JwdhnRPLbBGMTb6Us3QDrvAgRouJFPZ2wkgKoKr4ANqf1rUkuXiQ9VY23o2FQNh5B6bdC9hoa9d",
  "key16": "61WYxzCvzCNQ6eZcSgMUsfQLMXuu2KVH6aKDJfbb7m2PuAx1SmXABCFo4rcDasLp4RAazxNDRmRck4dwhYDJ6r3j",
  "key17": "5o6YaBia5FJHipprmByjZr5DB4KNqrUJyoW9EUWWkwDpckGkVfptHrogiqe3NYwmZuzDngtySM6ysvs7uqKbWXSk",
  "key18": "4zQDNYHktP1cUTPDNQVG64cRF2jHvWe3j61AkDEd6TZCA81wt8HUFUbsPNmG5fYPB4XzUQm43svptNjsxmApDoW3",
  "key19": "7tnrZbKmxDK2pEnPhsyj4epp7WoA3aweTbGBCQEp2ywFhe3RMQR6JzRGQazrvHRLE91g1ZgokTsTi7QnJpJtCNz",
  "key20": "49zjTj8Judo2rinad5uhTedjkQPu9NhicNMcG9W5W8Mh1bWcZjUSn9nFLTUBTFyT5sTyGUMDGCzhEoNnNbhmFFPP",
  "key21": "saxjwJ91PXPe6BMLyj1DyTLBdpoefKjSxvGJ4Gw96Ff4CnhqFPD4pb6brCPzZ5nuoX9qzwtdH4gUUE2EU7WLHZh",
  "key22": "61Hkewdju1oj21HaW3rbMQixDThU28BqRN3HwqJZUvTZ6wYFLrxPgC5yr5cXnsiJWyDStLSqYYcD9zMQARdLh6UC",
  "key23": "4BR6C1TLz5amtwMqzwyWZUZfxJZY7xwqRMvwUJW7c66mq6HySLTj6NB1pSPcnm9PbP6C69nwP4NWJdvyjAreXM2c",
  "key24": "4rZKiyTdYqtopNFSyHK3Ak2YJDa9jmmb8iYWyo5r9Kw7QBvNa2EQ73LENL53ydyKtXWDgHYFgxzkJQ38udAZ24wv",
  "key25": "U8DqYk8B79VBmFJFia11Xk7Z68RY5eiuBmyEj1pXkegzAtKchDNctPpTXzHZBHACigP6efegT477ktbShEEphd9",
  "key26": "2FEWJsPxcph5jyGE9KrjbFkvnHhk7e1Tr45fuA9cr1EK5KGJQNAHPgfJvavBZW926u1cXmDXZWkAi6RRB41RmMzg",
  "key27": "2Eqej1kmT6GazMsd5yCMr9o68GvTLdFhY2NZrmxLENLj4h5e54hJFinZacmMY8JfNLBnJssg29GiWPrap5R3zpZS",
  "key28": "4gHa7Gj8hoWhHFsrAAUe5v4UEonkZHv1aD5KXAADhghYNraEMHSVPP5rEGHFswyiEGQRpuSQoMr232w5jXtwSzJv",
  "key29": "5phxGWqMC7W4HksKX6rHquibg4vxz9r7CX8a9dix8rYhKZoehJqSGdbBzrzcy43NegXJmZTnTCD4hsPNYZzJNrtQ",
  "key30": "2bWnJgni1BxsPqdFhXaARUYx1a2jTy5bZy7bWTq4VibWcR7BXtXKWTz7uugdsR56beAuhteDR5X31uAhD9jQokCP",
  "key31": "2RmNupU8DsH4R1BdPTsE31GfNAtGJ9cJy4eRjNQBcRfTPG5FvEv2opJxSPgGHbFQxTQi8W62zJ1r7bjgtDgEkuc7",
  "key32": "E4zpVs66nMwcam4uwTLCqL4ARXTcrXqsksbXrVxgfeDjUXGrtwjByGZjvB35siJHYF1AezJ3EBPdQuMqeuQbCQv",
  "key33": "2YEbGnVot8arc4dTmEpPeqqAJrwct1Qwu1TNpFcPLk7tFdcxDwqnWSrH7Wkc2gSur44nkbbADx5yhk6DFkaAfr4r",
  "key34": "26vFxaDqkvXBfRBUMmwi6eJFgcUdkbPv6vYgeUGyG8foWkfadw7XxrhTsJYyqQxGSum4viocAbucLmPKZHaxYkmg",
  "key35": "5wiD8q2BR5dQFBkuSajeTnPVv2myyCDbL8Esz1KevxEvdmUCGZ2iAARQG9CBf79zBUWd7HrKvXVgASz5qWC6m2W6",
  "key36": "s6mDqcrKxnB3fNRg6FsmoJcCFHZu9YqpbGYxegB2kCUx6f1WtuDCovDVojsWsu6Aspqnc7KA52RbqogkN2j8pE2",
  "key37": "C4wbVAsWHe3XW6QCTmjLNbNmsUfZ8eGe8M8aQUJF986y83HKSVq535mxCsqiCYURStxsLKR9gCauyJcaaBXsAmA",
  "key38": "5JvqWtz2BctM7YJ9sZNeJgii7AA8HreDFRg8fh4Bm6ppjp9fgsgTxSMhfnJ9RM4RAUKpahxyAF7equXZynbFuGCY",
  "key39": "31mF6VZhZsPxsCFxa4GFVZnbXhxMM7AQw1xAmTuEvq5rBXSFZDrhg6mzMvhCypcq1thjwEYEqqHY3y7UgRgHAnMn",
  "key40": "62rrYAUELfK2nLNHV7Q2s7u7u2kBCqEwyyWXEqmmNjAGKth7mQSckexgmUUs697dcTnqKES8kjmJAAKExdG8QAJZ",
  "key41": "2gE3KS3ogVU8VobehDKJxCRdQovVAJajxeGGEeuxKRXVhzf6ae4vrf24fjC2Tf1PYtMa5Atzy9AT19wQVnErByhi",
  "key42": "3HfpE6osexrPx7vTp5Cz2SFsLF5rZjTy48N8SZSBLH9ViMWGKkJwjZkv167EFQdCAqvQj9d4Kb5xTaVsRjzxaaaC",
  "key43": "5s6h6LXz6rYsicq2Mhvvh7BJdLfnY9gmHxewtwdpHkpRf9Qd8gthfCR5S6DNvPwc92NsSmTdqJHSM97MSFYXACWM",
  "key44": "wbb68pEwEUF5EGNeX8xEw1fYMUor2m7PohrwBJaLREVfkCKanajZTUFANGFewsJwYqFvfFomFBnoP8QBoAciyhx"
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
