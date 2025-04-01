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
    "3C613nMgoZNDkQUREZErhEgShS6yK5PdkHTVFMU3Y8YL9z3SxhdfPvEq8GJJyBvUtznynPonh15CZf64teSXhy8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ogxE8ybhV4T86kkQAF4t7gWC21rzMc5h3h9t4tciGnaRk9nW4CjgKR1U5xh4MWfnW1NVnkwH7zKzSb8WnUBPec5",
  "key1": "2m5egn1n3RYvw4poex8Ectgrvrjj4ajmDntxXawqk9Zj9dvCqQe4ijNs52eUf8EDXMcoByMYrw6SjtgUXXqARs5q",
  "key2": "55pixPdkhWiVH4pHfCKCSFDa26VHeQafvLzCgjPTTd2T7Ri57Zip3JWYUksHoMsyDXikiKCGxD8qB9supjDMa9UU",
  "key3": "3Q3taysdoBG2LihQ2k7fWND63uMrKBJWTPqjpUjgnkRqYyxEF3JDJzjDTG4C4fNKPsiEbDfVpgUAEpMnTU5AkmK7",
  "key4": "54t4FURtztttY4fLidXwkz9TMDZKJrnMmGCe258woMJwDeh55Y42i1eKYc2iMpLxPkaA2CGdWL6NCq4QDxBhr5dS",
  "key5": "23iQQQ3PxC1TPmnfuAepP8uSmJGhh7EfBrdGH2txYX4mBF7tdzebaZZ9MovGSAbES6xSrVU5Z4FH8YN4uqUrKjLG",
  "key6": "3tWATvhUufJFh8aESrG9qFGYTaDKcgxhqeLfJU3sLxdcqUEKK7399cuLAutvSeB7gkiYsaYi8VWQnXWEGkGWs9Dc",
  "key7": "5VCyj7buaM5RuqBKcrX3NReTRTxz3zoiWbPwCUXVEK8649GxF4JjNRkAP5wmCQTcg76Q9K2wDhgbpzW7iyaSSc9p",
  "key8": "3nfzQywHzd5KVgqZ7XH57yAqVnpxa6EH6UrTNdrWtzTkAnsfVMHETkPXFqT5EfjJp8PT2GkmNg5zsLwP3AKUHKZh",
  "key9": "5XJVZ9rnRLztJ99RmpwrEsrfkFExnbuCBYmD58WQUJb4QHdTA9uTpUfoMZyEW574wXftsCXLDUjfFTHPk87mwumJ",
  "key10": "4TQ4pGtXL9QiPH4dQjTJeGYHQgubZ9QVYaeewWPNz1ZCmgE1HUkuYMzvjkkiXmCECy1GyEf8TGGGSbAqSFb4YwRZ",
  "key11": "5wXHDLW12DxpS9FLYMimmyMYUhhkt5sKuGVfpoWKNTWxva7HgQ69p81AvoAUjLorKZVmvY5K8SAto1EPe5CRcttT",
  "key12": "5L94JyXVEBdC4SEQvaUbgab9jamrF8Nxd8Lq8FnBnj95C77d8J9NAUTEfZ5gcfepyZhAVFTrXUdcYAaEJaVXLAka",
  "key13": "46KJ1iZ4SWJNK8hqiT3TZLFgUEa2kedeGRR7XHkpHEPh16fjooSKsgpt19M989p45ugW1R9wSSipjLui9TuUfLMt",
  "key14": "KqTXaoikKVfhk1w61WGpkRF95oTY8q45HNxoY8v7LdGEdKRwA3Ty6doTwzj5gkzezrKPuVq3Rep2GnenZZma7e8",
  "key15": "2QNjuvwEGAx6ZCTBXb1Xpqeg8DZgXhpedx56fbzCqjwd1DCA2qM7T2bCGkM5gBVMebWjx4CzsAXmJUesAd66AEJx",
  "key16": "4Q7SYU3Dzsx7RTgm9AqSUzdrmGUYraWJBARToW7G59WWwtk2PMCnXDpHkYh5YhD9aVUsCA6Ctk976KtXWija3azh",
  "key17": "VaApiJbpcTTgkifriYGi268uHDLtynb44FuXrUgr5Sdv7LGHq2Rs6z59c8eGX2v2iWhvBiTT5QagWmhFNAPTxe1",
  "key18": "5Um3S2JkJPgGWwUFKHQ3y76KsVCFHajwZNTrVuQQypddTPf6rq26NCDyoG8xGzZBrMLN7yDauaRcdgqqZQCdtUCx",
  "key19": "5AkXVRM6QmyhT6GP66BYJpQCEtK576dyRkaFt27cRcS9KD6ohNEdcBPhjJa8MW5kQUXXzZsDXb4vcZpyZh4MKCh9",
  "key20": "5hawrm5HpFsKngAAkFMfDcQ1mkGDP6gFt3n4Vu3cF4AG3Q19vAeHPYi1T9RGZC1ibKpyj5wG8mt84ikpX7P5rm5P",
  "key21": "4oQa3njsNHTzV55VC4tSbghRR2GkQ26cj7CoJeLUuKG2W5R8SLaZySMQvitr2k69K4CUHG4hrxjCnpntSm1GBBPF",
  "key22": "5D9cJwguE7Uxpwo7r4kJxZwWBBPyEqMKeRuCiVr5DZ2kszFLKMfXYUY8QRCnSnPYN91d39oJ6MSyhUx2A368wUAN",
  "key23": "4oBiT25FWEpMnosD74yi52MsQdMB1o3v2GRvTrfCb7jjdc5AQvJhrkqJZiRhp1Ffgxiw9o7nZvdn9GV2NTzAKLhX",
  "key24": "2TgFcKgymFAFyt6QyScu1S2DibBSBAk7aWHNNbL7yd1F1iXzqQNZKgYAkQDX7pCUrkgbc4vRR8CesWdW6e8gk7gk",
  "key25": "5kvzcho1sqBi6g6E67T2yCURGbEYrtWjGvipZKRV9xHKzGuETNhw7yXKGvEoG9vGNp3kGeZp64Tix56vacNAEEEK",
  "key26": "4sU3Rm1tSzkhiEw4NuSHFKfVKzDzsW4FEVcfkfWRJUhgyiATebzU6LXMGJGw9nKLSu95Bn6hT7D8cnXAHHgCHr6b",
  "key27": "BYG9JKUMeu3WRMThrp6hpoTZaxqpFnTUWAq1xAERr9bD1EuZkRePvVn1rnNFuSfmTa4WHuLc4KnXR9NTzkwZiTR",
  "key28": "3pqxUdsPjHhwQLkrSgijxUQS17ovztKREMqpmkUKeLfftHuxgF2KCjbZKFgHiNpoLspcmH8o2bmdjBYV2iwZuyTj",
  "key29": "4YApJdVNKSBQm1Jigt7zVsf8rXhuUGEkSUKJeSvEBR7qnS2teGhH8hKqW5yEyN1iL4wM4UVrN4yPUDBUJW243UMU",
  "key30": "k7xukEK4Uq9iq6tzvAE1ehFfehjKEX7sxXw4qEFmNnwsZvRZz85UxGsoy4RfB2t3eKAMNVEEiwVJkeftZNr7GuM",
  "key31": "2KZv7mnMCVb6kj6AHHDqXfk7ricq3T7Kmm4mq1wxBYP6KeoBhqMCLe4Cpa412u49tymJcntPhroxcc4bUVG8raXT",
  "key32": "5F1PZKh9E76Tp9sTLiimaAvkvCjhkEfft8pWHUG4XvHpRmFBXQQfZ5t5RBvy92hAa6ooHjyh75hZJYvzk7uzycKx",
  "key33": "3ezq4cH7x5VigWh19xhPspDEQHsUnAZ2NT3bnqJewo9XMXqSrsZ2XhbciNmG18Mv52kwyaU3dpXZPAtRvEFYixbU",
  "key34": "2rsJZgkYmpMfu68W6pLGMR8b8Jsj6yjMueoccoahAkUqa84rUTTS2DHfmv9ocQeKPx2DCnkB3nmRQk48FEdK7QNg",
  "key35": "3oy24FZLtAs5oLbwBqXn5vwAR58Pfdj3jJ8dsZ64VwBNA6KSfxzG7mhk5ysZZsZcJFvFATX3nZHm4A1BSfVTzt5Q"
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
