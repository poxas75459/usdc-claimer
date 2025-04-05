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
    "348q8YG4N4YFTW1T5e7UVNmS8cvq3Gtvs47jiZZDHnbDzwP14rgkAfweX7dYuK6wJPMp2Yz9EStBXtccixbELJXu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63xuRHb1Yrzs6hf2wxuTry7WpbpYFttHXkgiuj1b4MQ8Zu9HLmiymiDUKgC6Sk9bF3CK3Yu6i6YmBMGEtt48g3jX",
  "key1": "5amtrEgAEiviHZbyE1iDkgdWaWexPn46zNYmeogbioQhUuRAaSVQXSExTNJ5En9PNtvKKvyAgZjaMtpcF2P5z5HG",
  "key2": "3UiRCVXZ1RABVVUhmaUHWeEfyHEm1vELPQxuU5J4pNZbaE7RTAd4FptTXRpWzu7E8BTns1ThaXtTKC8S2iQumou3",
  "key3": "LP8HThoqepBNjbh6CCiLYTrtNTshKZacZmTmfX93sKxmvqmZVg9BWvxaquyt2LFWCpzWncMwriQJzATi1sJ5QD4",
  "key4": "Lv5q9F7PYHqKZTEiBdQGXqiREdY6iVcKWFkeWdAHdQpMN5UwG68wuQtNxQgZSE6cBfDTLqPvCheB3qLshLLXohz",
  "key5": "2meum5JsiG7CNVDqy2B4Yez9kgTWUV5ZxhnBYa2KCN9hmTsqoF88aosDHgwREUE7jHtSdeqiccB1LijpnBTfaCHV",
  "key6": "5vApFD9SWX6KEZkG4yn9UJB3bEwipucdW3j7eti27y8NHTxETKyNJrNzMB4d5DwvqDhxonk64pn26tbSZo42mauZ",
  "key7": "2DvqZZ8vh2soA6qHVH28QBTripg7KZU5t55ENJ498oPEu5eRgQtU4BB9FvaD7cBvRy1pBU4AsZNpqUpJvXW5uMzb",
  "key8": "2gFFxyUsMGwKyKbkpDcMSx3VKh8NqZaUdY2eMR1R1aQdajqNn6YodvaJJRdmJhKRii4eA9BwM7hiQy3hHYZc1NXQ",
  "key9": "RLdP14dZCdu9utsUw7KQLwqfduLuVkqTDXWRroEZG1wC1e5eH1wnxWWoyqTtE8jw3uYo9kzMk5N6au2HLkCUdNi",
  "key10": "4QpcQFPFyN2RS7vj9zKX8R2TA3Rarghm49vj6d6jNzHhDzBm9XwdwVt2TtSM5RmNgqRy5UeJUsVG6PTYN84rmYNj",
  "key11": "2Pvb9GvCC3iKNbXwv7Z5BLSH53yYXyNJ8nNdZWXDvtsRABJDwj7PzZhrrmvTCoxGRYjwJHPKhk9RJzx6KT1JD3zY",
  "key12": "52MtKVESh5h522eF6HZZF7KAnkowqz3ZDGvUtGC8WfR8Qe8qdABXYJ5ypNivraad2QBHtcUeSGYVZhDYiP9M52TT",
  "key13": "47kWNU53DYrDjLMQSVc4ueE59Ttq6UDMCBpFcesg9PjaiN2ZAZpixWCAnVxmw5gTX45KwHoF3TdiPGTCZB9nqwpo",
  "key14": "4GNny5tcyg6LmCvF8ZrJNuc8vSr7X1LDc7JSdiFWTnYwjnA4TCHBBUgkJvkM8TwRmoAxtPZbUibQMU63Qe6RG78b",
  "key15": "zeno6epmD5u8BkWNC6ujxfJBu6zyyxmnqRL84RfAwWDaAJsWYKFJc9PtYkzjQ1vRG95V1BCxptzYzJUACEhrQK5",
  "key16": "3Edyy3Ci7dsfRvqRUiXLMdDGZR3GheNnJAb6YUXmKwuWLVgL6bKuzfgakef8UXnm5LgVfNqu64YL3HrRjuFfTyGt",
  "key17": "5aLJgzamoRuUJQSSVstM3SrecDt7Mk9TopiTkRESTMe2gnu4GivRvWUwV7Wco4gnJmas7Wt9okjyptmnEaR7CujS",
  "key18": "H8y9Z26GF5b26vxm3gatEHN6GLSZa9221QqYXSmptJBVrQqikhvKAhzXaeUqYz5k2zqPqfCYB7iKikv8n9DQSjj",
  "key19": "3LK7cm1fEkTHS7L1PH6yhd6zQupjbb8gMSAkGQFohJmnSBUxcr7VSvSKLMkKFQDJMkpLH2QKTkrivTnCPUfbidSF",
  "key20": "4Zy9bswxTrWbQbLgwHXj8e5AtLccVKhR52AJZXJXE2rNeybkDqLqgLJKfNDjvp7mYvHVo2Fy6mLtUfEZ1vbUjo7e",
  "key21": "5nJ5pAUFew4sxCucMF7Tj6q1qrhJvStY3DQs9ACa9Ju6NneXWpsKbksnpHfisho3QYfKbptRVdLBi7MsSRs2Qruk",
  "key22": "5y5X6U6uGZzKJpLqrBxinti4fceV6expNPH9JaCmSrJqKCsGQYiRzw3SHZ3oGxmxKKqHwwU8J2YqR9BQJw8UTVRh",
  "key23": "3X1BtdyEmdXzq3Y4926jjweoay5EyxLbT4AVchpabZJbGA7DW96v4y1n3nXjk8jbpgnGZWhxhwi7eRKKtP5iNWuZ",
  "key24": "3QiY8K7GF2mS5auWx2tyi78LZiuYJhV64QhRNQTh2hkSimga9DTitfC5WgBLpzzLhY2i6MJdC34QNuu6K2vK8KNy",
  "key25": "4X2ibiVwLb8EGWuUB7asCv9cATQv4NxaoMgRvJhQEtVrXUkRRdgK8tchAYzGJkts46X15gmFaCr3p8ch2MKRWZzS",
  "key26": "4SW1q3XyAcAoSeA5cUzn7njG3XTeXG5YkHaCBK86t7GStMhTzgYUf5FAjVoXaufWJNZCK651bwQEf2yWCXUVsBHp",
  "key27": "33XDPNVE5rmbx619CbqGZekXX3aei4pykvZetv72vKup9WXHFhrkqmPgXSafvxGtiUxzYRfvSxcqcfQK91Hu9usX",
  "key28": "4vV8D1iF74CKWJE9BASrcMhj1ywSARUYmKaxoCQrRGHUFKHQUBFXr5Hx13qK4Y3ZhcLwK1zoZoJr8ozU1vhfZjUh",
  "key29": "Pq1o6RHQYcYyhh5Y3Zt2wJW4x9jGmmfm5iyzpzDDsezavgJL9zN9XJCK7k9PLnCyqeNfcB7iZJcjdSGN36v9x8E",
  "key30": "4kSVyMsivhvedaNwR8tcu2TJNezfNZix5CBvcGhW61R5yag318xD9k1pQajgAYHwTfBWbFvjxcHqhzCpsLu8DNeY",
  "key31": "3MEGpVr1vTHEZiqeMXCLzuHoB5wW7fLZsQpCyVKVjys6FETCFjN9ersyjqAGMPjpPkE74BzUJWLpzKxhhMwNRiEy",
  "key32": "35rfeMgfEv75U4EUt4f8sASVF6bk3RrFhuTVHjecf41v9PFkbQNmGa96aCz9ShtbDddJ3Vks5sMpeRmuf8D847YV",
  "key33": "67eHgKq84C4NACcPky4VCi4CKchFxqsDkKgwYMetfeuCcHUcqBybv7Q1rmTwCqrRKSMRNNcMgAy341Feq8Npy9EK",
  "key34": "3ZneTHxmeyv4Eeff7NyNPLShreeAN56x4vmP3j82cXZUtvKbnEXyat6DGd2tmJmGnHAsdvisv7Ke9m8AAnVSeq9F",
  "key35": "22K8RhuPKHd7h7TWu1QxSdiGFew1Uz5ZTe2Vbdd3vcR7tqrtxtm2W7VatYuWfhcN1Yk2EDkoMMXg2CLiB1Us61wN",
  "key36": "4FQxPxULPYTp1pLgjiSz13SnVwLqSByWH4NAp89gjxNap2KQvaN8gx6Y1JPhZpdVoSQBbifHXc7M7SVmQwVuzEg5",
  "key37": "47cNhnWS8pCWsQL3DdeEhLyVqWUN4wNHeri7sJU6NKZy1WVY2GtV6eQZA36PcuKNihp9QucCaFm3tdH1VYDRN6Ai",
  "key38": "5ho9QhJEpzxD7MxdBYVD3R4z19Gs4VmvAo75gpobNxinddNcD3fYYvLjaWcA9LKr6qbfE1TmYUuu9WAn7Yq78SQj",
  "key39": "3huYKs3tpLXSUyE5MPhvtvgqAoEMAzbsNG1PpU7EJaUExbh7iSVju2dUEvrHZ3unbstY7eFFCHu5ocZbqC3zBFAb",
  "key40": "5zR5K9p8n3asXymXa9ZWo8xvPNvMmRmTFhsroUN3pZP44t1AMTJbBSNoEGuCiymuQjzPdvzPMAL7bdZf6YZRJt8m"
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
