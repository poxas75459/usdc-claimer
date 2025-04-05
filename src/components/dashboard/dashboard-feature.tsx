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
    "2R7GYVfh44rU1uGNfGNZegKy7kVP7XjKMmFjami5EtEZKv6cRj9zu616EW8x1obP8qu2NboT2n2VtAEQUqz2guVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uQpd4nJQG9Xms6HryPzDtLZw4BdGq2xTd4SfKNTFgtggRgyebhgn4g4nrir5Hyqmi78evnqPrFv9Lt7CcvU7Y8X",
  "key1": "sDkiCJ2qHtTxWUc6WKva2qUPrttqiQUxcxycEezsk4iLk9CttAoJLMFUbhZb3bd9PTnQAP1c9L94Jarc7beHYUM",
  "key2": "4hg3HpbTJoFbHW2TCysiALnWYmCeagbQeggD1X1pK8PEmPhsked2vHRV8y6aa7U5dXaBc3NwkwCZnvQg8JNRoM5F",
  "key3": "4ZWoTbxtGaeY8N6DqFtjjCrCsz2j227r1FSWrrU8YXpo5Sy5wHxkJ3kfpFqBUtSTYD2yJHEbWiB9x4yPHn3s3aWv",
  "key4": "3YyNmbsgjyNyEh6ghygixGgD7jWwRD8EkA3Rgd8ADidGNrzeyuM1wkXVhTDebiimk2BAtSsDr17R1ebgChneEgHz",
  "key5": "653WN1fVq5QpMQA8rQVV7zu2tmyCSXtg8BFm1MCcepS2xFayA2WVxCgHQeSzy1fK2acYEvLC4E5DzBJVXFWzPwX5",
  "key6": "4yP9S77BJKjFE4vYVBXTfNaS46YPnepseiDeWDzhWdXnkPDoxDeRSpgCYWukACw1V2VUN4Kr5xDGNxYFSxw6AeNQ",
  "key7": "31PueDWQMYGkYgSS5GcD9phKaro3V1XypFcQVaRSzMLFg24z2t5G3p7vc3nEEZfo3AmbH8jyZxZykupTLD9LGEGi",
  "key8": "4cMU11xL9rnjgjd2BoiYuuitrygJ7vjiVL2wXgb1bgKHoPPFmEow8Xm783QgmQyFXsNPcNMnJoXzmvP82aQuGib1",
  "key9": "35bGRNfJuiVDb58XQrexU45yJnupSgChHH91LGyV4HpGkr7Mp1x8QfcSkS6ay4TwJw56e9e6w7qcHZJQbAvcj973",
  "key10": "k52xXXBh2vYnuDQtU5t9PHep29GcGSiEjVn2tnfnGVFDaXFcxjsdBW3bYarXEaqMZvYbb7myVPAb2crjtjg8Taj",
  "key11": "2ThnnwWcsLc2stBcw7hip3vkE8P2VxBjvxz2LVr6Y4xnGKD3aAVcVvgrC4EnWySpguCFCBVZkRUX5q2GTNiaRmTB",
  "key12": "4K2Bu1Jjt9vCECSsRNH3yAHwhZ9EAXTdJzC9PTDF8bxbVBCkJRygMrw8FbN4v7yYBrXwnPbG59vUZCfaaoJe5G2r",
  "key13": "5iVPHousKxKCtv6nNcXmpCp4KRJcchMwQR9KrtoAz6pkt5r7ga3bMUSvqaoSw1TfFyaVnG5dyDfd1ERHe5QM8VJC",
  "key14": "2kRQVCf3CKXbLEqYeSE8esQ1zi4T96rmQo4jpVBAZ6PA8uQ9qKHiS5EgwFagQahSmjdDeFjtSe7J22y4vXputvFi",
  "key15": "3fBrxQm3MRvLAFBuPcfV9TB6Krv21dRkHHtPzrndys5vDxwQacqZ3bY1miWe8qFXZzm45trZJ8BiaST8PkRrqMZr",
  "key16": "2neEUo1btYfunCMB3Chw2f719q1boVKtXypMz1R8S4eQQX3Ky4zXCqpGupe2mKYthawNx3xcLUWefCKPu2qpw9FV",
  "key17": "2BoQPmUmmiRgFYi2nhEEDJQesVn2c9RZqo6ifsca6SiNYcCY7Yu8b3EzmaugFqyRcnZcbd1z2wxuMac4po5JgPUz",
  "key18": "tsTWp1kSgY4aQsXhtmWs6dYwJXNCmReDoFY9n4mbXBTzFecBa7rtgwcjed75f72WNbmLz7XQkdeBiztrJw3CBDe",
  "key19": "5uL6nu58XcsWGsKbQsFpWJ7563mPWcHNGYDycZVQmFJz73Fj12heyPmnoUNgDVRu6CA6tYuneG1xbAEXUWnA7xsC",
  "key20": "5Sbs9kSBEVjWwBFSMCrj25T8pUThEA68XCoJyHRsARbCGidX9wRzEmAcsodHMrYmMVFnYQHzetEskns5XTffWmVz",
  "key21": "58HGZUchnfc52X6Sc338HAAumXxo45SUDLEjkD3zgdb3iPaPNTZRitXf4o1GWU5QTB7sct56D56cAa7gdn3hLRaT",
  "key22": "5LwzCrezfM3tWgpaAHEK3hQUzsiELeXdCKLHjeCqxhexeH9cG2CmoPvv1H4AxaSbjmYV6cTtAaPQwKs1a5NmCe3T",
  "key23": "3FXfsJhqRRZDoTijd1srpXNUuj9FWPDDhsXxxuZ7sAKRKfQxbm38FmidekqARRrUKEPn85CVE1Pgftk9hLZ3pKF2",
  "key24": "vERYK7FNzk8BuJhRtCXsg4m8JFNAmK3sYwGYCGNkaXKKxVgW6U23gNU6yeNVhZU5CiNu5mDkXiyFtnLR6xf96Rv",
  "key25": "rXgTZu6WjL5PjJd3CRhTJDrh4f4HQoJxaCETCx5fH1SDYhXW8gXDyprgzVsWHnSZyarwBCcLbJd3GzjZkn2mnVw",
  "key26": "4it6JtrruYSZmfffLjEiLecaYEubxSjhGCPoY9aTQbTnLyDUKFosW3WHN9Jk7ZqBkFJJrGwHbm4qv7iNQ94AZxTo",
  "key27": "5ZXeRyueABC1LgrQjcTEcan8oAT8hHGYoEbSUVRMymU5Sdih98SpDHxpevEKppnD2cbJunqhAzoN9NXmGG2J9hrY",
  "key28": "WcsSUY9c5kvbqC9K2tQpfWcUYjmq6BG3T5yvMQNCwkaRA1ZkP3XwRKdJxZhjBassqMqvpa46mqGL45GMG4omPF6",
  "key29": "ykjJZfkKbCHsY5jFn3gJ62Tnqp1cijoMoz8KYwXKeEwnZJAxvq8JvhQYqBUFcabvpZ7RcidTiNxVjRaxkCynjQK",
  "key30": "2KKUdLtGyj2dE9xkg6Za9RvvSxVNe2jKKPXYTR7dhzvLUY5wToRH8CZ9AB5WWM7bdickBLtni8yb7Nqbscrmi2sP",
  "key31": "5nTFEpyGikeWEVJXeduhbQrQFbnKGyRu3WQWiCPCvD6X8QNqcfguobdp9AzpZHzU45F7tuFiSb6sY3PWd7mdjFAd",
  "key32": "5ofGsCFhy6t8RTcLJUZfvDkuy4GE2xnoCVSJN9cDv8JRdvPoMNVTtrkiKmmP8YfvJhtEJzjhK5iHMz6McVypdhMV",
  "key33": "4dMC8cQNRyidewj1YWzWVLVgmJT8UBS4EPCCpvnQrN7jyMXjGAUsFtG8aQcQZGakfNYW17meQ7dbgY79bpWwn99G",
  "key34": "wtx7mqvfAqwp1UVuvVnJH3HeacRBgHWtZ3aCDNfBPDP5enoYXJ2KwYYCaXHsfopbVQUXbweikVTVJw1arvPLioe",
  "key35": "5qR5WbwHAXgR32xSC36yvksg6m81iuJ577Db5VPht5JvC7BBeekCL9A8nFJ19tkLzNyugoEKZyW7eBgh9Fv6Y7YB",
  "key36": "2hubfaAPfwrZ7CSrfYE5HW39HjQyRr5EnvbCKausrTzg22D4W16ay69wqXubYTtq9FExuU1arqu3kamFYXS5ch7R",
  "key37": "hjATKJFtGMxzTrDAAkKv19vuR2kH4G8dnJMsx5uMaqtAFz5bsA1tZ7QoawuWbHtjnwyFNCz1ofWjmp84ujCvMCJ",
  "key38": "4s9WkqN4T4HQSbiKaiFSsRLjAdbkr34HnJRhCk9pfooS4eLu7yngky9vef7rHYZNz1Pm9masDCuuyCNLvVi2gaYF"
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
