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
    "23j9E82yN6u6YtcxEB772b8sv9uhQpVNjJpvDwCbpoD2ja3QrB6fQEkH6tYWcGVAKxQJK8oCtApfiQ8cpXjoQbZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "igeJQogHr2ejtSEcthuD6yqVZAGbXAKXwv6t7MusedBUAXVLLDGCqxcLxzUq6Lb7v1YJ54LzSuxhgE5oBioWHZk",
  "key1": "pVWDHGpNvHH5cq4eRXGbM4hGn4qxBd7Cxc7pGyFvb9j3oYg2Y2zXiruouu1Dz2KG4jJXFpqWFc3a37MaDkZGbNh",
  "key2": "sUzy979EyTzRmEeJnHTxVqzxfDxNEo1dFoUPAD18DkcCCTVK1fokRXyce4VnhyuwwnmL6sZUhBNiGxJF3vHGZQB",
  "key3": "4ng9oDQSH6aiWoS6m1RGBTwtsnUBVGmFDQRH9NaXp7wLjLcz1ZdoLNkguJonXAd9jgqV2A8Ro3b4nPYZsVYyL4LP",
  "key4": "2wFgs4zEgmv9exK3akzBDodDFgccQWCADtNePioivCyJeR5nK7ytucK1HmBhVDvgQAiFBH1wQHqNWHDQM5DSmgTR",
  "key5": "2eXpios7tbwwSzz96q1YvELXhnyUnHLMNarps7dHNAzt3uB7sQdcw2qaoRjacb5GMmPyjfAFmHyCYbmbLrBScuAQ",
  "key6": "5ffiVEk2Xfe8p7HDXwVdMAmTjMt3MzpCyNobGTQYeM6XDxLs5981U6dmHfP6u75Kj6Ws9Px7nVHn7nfnrBYsVAbY",
  "key7": "3dL279dAtwZA9zs1uApXT3c79d6ir7VU5F4kGKuLNzm5QR9B5pp72egGxCsL8Ue9T1xtkjSuDt7EknnK6AEboykG",
  "key8": "2ssHegCxTkQhCrQR34GvaBkFZnVmtmsPDif26QDviW5BSk78SrmYRvtkRuoNHXpuHyYJptLa3kteiKt4g55h3wbC",
  "key9": "5GQ3VwLGgV9FcZqTWCWUMzSdUsMmDFabVfqrXjRK8WanPcBw976efdZuXimc9ky8AMBvsXJyHGW1dhFu4JKy4PWU",
  "key10": "UCuAowJ6QqNVi2XEHRWkZxvhxLfcHCSHKHPWCDxViC9FsPir8vDe84JK3HHEbxYEzQxTEkxr6vPqibMF53SUXwP",
  "key11": "3RvaAQTeThsw7bMS74FGG5SzCyhCT7uYEiQ1LRv37yLgczd734LWyFFEBJffFmnADXZ1Gzb4mSujN1tDcUsUj4qA",
  "key12": "2cy3Z8ZWxTKYgadRd57TcSvYNUrAhrimtsC3EPX88mrJ9HecYLje8ReSz5XtSAg2gy2SErmTUWfiVUvUDkX77U29",
  "key13": "54DKpYixwYuw4YB7rbj6mLRz1JH5CmjLSept9Mj9pGF7SzmEc7sEvsL2EQ43ZECRF24nVJHca7mbvrtFkvkMFKA2",
  "key14": "4phZUu9xMAP1fU5sF9ey8PfwhBWhtV1Zi3DXrZp1vE3uKZxMjmRtFd9HyxUbidw2YP7HonGemB2xgLHy6ULAQRXr",
  "key15": "4eibnsJw51syqbP3Kup3USNZ8DhNDtFHMsC3JbyxBrybJWShXUywPZmBbx3kX1dLqSwiMja5EeccVdT371SVEe7",
  "key16": "KKx4MsV2QDruib3bgySydQzvqNDY7aSj4gQ4fwLufFqx76NeJKfTwYpKXveXoa2KVVtZQRp6t4NEfK391jUB67s",
  "key17": "3onzo2Ho2Pw4mkXYtPRarDfSpZHRT3gqHsmpBRUEAiAp9vDNPbh5xdog6gAT4R9TANvx3icpNFjntMqYPEppCrqv",
  "key18": "gxoiBs895jp6fRWBLoMLgJtYmwS2CX2yCkQJEfqcDoNE9YpNhj7vhg57BZgvxCC6S6h9fqV9pRPcMreECELDbaR",
  "key19": "5EY48VrGL7r6vW7qpu1M2DMZU5ekq6t1U7kov97agcNBdEoBcEgbASwkjwLKCxqH6HxXt5cfJP5s1r55SZqbGfeo",
  "key20": "4ZGpgAHftb3Ujhwg6iX9S27kmSobFx3fttwi1E1opW6wdkADNXvVeQ3uynyMTGcw1fJuC7TnwRWhkBNY4hN3Ueh3",
  "key21": "5mu3Xyumfa8vpk3P4QGL61pQu6KjvZ1x2H8jHNeGnf1Fp88F8qebDHkr8YPpZBkMVZLYXwgWM2JkPKP5wUSi5CEF",
  "key22": "2PrzreGhq8MqV3GSDC75q6awDT5ekr8VvNHmRfPGN9Hu2eeJxp8gp8btqkfBWCmPX9HVwrTx74v9CM3Q9Y6rsssT",
  "key23": "4BCjLnJsFwu4skHxuJiJCv41dq4Q8KcVCp4PLVA9GCK29DP79NyFXXuYDF8EdSWsjPzNNzSSGjr4kpmMMJcaCGvn",
  "key24": "45KV2nF93KRaosadwRH8c6pQ3mbZkA8h8NiALztg24h57eVNJD7qskqWN3RDrDGAYd1WWdNxjMLez4U7iYGJr8NR",
  "key25": "21CUfhNnU4wdwjFFkE1DSW7MHm9ftA8JAtyiz6FjXW8PWQdbiwR3eEFg4ZYpcCXjN4mqQdFztyny34g7UmtqyC98",
  "key26": "5y8xnnKdiBjTXnRCDTXyksku1oG2KUVNfF8pn1ygi2x5FwCYnNX2oqusAw7kwF6dZayz43RCGFsRcWHQcXgQ22MV",
  "key27": "BJ9ApVMhuSRNNoxAWRhKLMrjnn9SjY5z61cWVCCkvQmk7LjfWigSb3dNsW1NZbSX6MwXhfVV5Mdq9kVu3mc8Fn3",
  "key28": "4Mv6FuqEQMmKZUT1sETURsw9Fkiab6mimc9VBUwRQ8CzEGFxXvZExosqPrXcgZx8miYmgXiKXvL8kf17bMXGnxeX",
  "key29": "3bnHwkdRyCqgQb7hFyiDYseEViA22QFpUtW4NPPw37Donu5hbiwpveu6FbkY1o3KMpGrJrP16j4R5iEyw2S7oV1G",
  "key30": "2HYfq4iBMMizncv16UfXBo1QS2MCCkyrVg2TvHDG4VgNPQ2gYZU71sywfudnWn8v7YVvGxrcfeXMP9KSfMDMkBxc",
  "key31": "5itxcGUFfj3uZHHW9rk4jAYjPdTrzSgUDDXPskXWwJk2pHhbp7SQg5zcxypN2QgurPAL3FFkevhYof4GUpSSdnat",
  "key32": "2MktRXeSXh6h1UnkTKfHVTQG58TTqhtUfajmfqyggtTs77wfwhYBqS46v1MUPwN4Zfy5VzQqiXKy1K473b9UVahf",
  "key33": "m7jYgYCBRcPpLfUTt3EHXeySHmCTMvffNexLe5fSyDP7qcLYQnGAPMfNQ39nbAwJzvaawxLuuhKXbYiixoYZBwE",
  "key34": "2RP6oDmFPPaQwDhK6ADunFi4kE1uiNnun7LTtw1QksfQbtWfmTYCGJFnGqzALTqX1PPjAYgLtmH9WYBnZoqPjS8e",
  "key35": "Z8BpgXxqazG8NNAjFKZXoZUkzpXiZWY7gR4RguYcDxS8ZhjU6G7QPb2yGjbvaqiZwVofZsq6WkDNBD7jgjhzvbe",
  "key36": "2k67fkDn8uzrchYzdKEDYxEtK53t74NmimEZGivRST9rJLf5NviYfPBucMDnKqTt9JkeUtiGboDqpoeSrcPfqtbJ",
  "key37": "4SxPc3qHeqJexjj6s93UGXAEnbJCrrZgnAdh6zZynCR6DvcPUyCWcZJtYvgbiyXxthcMnQgbfm54uYKBR1SSLK2n",
  "key38": "61j2hDDFfhJfvU5kPasVgVurn5PZqdV3zpgrD3RmfYEw6YCAqqPRtFTGbFUnH475J4aPCM1HQzjN89TH7QsXxPoU",
  "key39": "hiimXXZA7XuzWonXPqGPkyPnmeMysTdNtw9zKp517Xv8YXQDrUkrZMH8ch3CphTnKrQvaWepLSwtZLuxDpNHHkC",
  "key40": "2LNVg53RHC8VPekBDKJ9AB5uFXjuzosiWvFUKC1LB8vDfpCJoE8ukqZjN5LeMtGKvACTwkDsCDYoJe28hZRRruvS",
  "key41": "4Seg5xtVKpW36TnTzzwRMbShNL562p8KuTFkApumA46jjbRrGUYL2KF6XWDwgWWEu3h7JVkoBQqwfMhYjMXJT7an",
  "key42": "5YyhHvomXDGoLdgBtXdgu2KzDF1bnDq6cbjxynVUmdNjwFEUtqWm75mybDN1dYgGnBFjM56EyzEgbVmwqw9oAfDN",
  "key43": "2D34XajdjX7ydwkekXergfygzZQujLboeuaZTXuJkur2kjYFzkt1pv6hDuvNvKFMdTbdFFkgvVB91EpZpPPufLfa",
  "key44": "WYWMyRZRaYAtP8LvESavwspo2q9LBTNK3zh7zRdJrTfTHJ98EjiJEVhiqhmiFdcDEcRcFD9tpytDzuzbGPRFwDe",
  "key45": "2sMp55xwXJKNS9bpxKjzdKwo22p531oQPA6AJCmPhwqJBEUPYLQ5xEJcbNrgwJoUWD6RPW7Tz2ehpyfdqpfEYad",
  "key46": "4BZYKdRPqgsghv1e6Vk9SU7rHtuhNSEi3YzKSxHnV9k7zur5RqZpjueTyAi4dqJdKaTZFywc5q4rLRDcxqA2NmYs"
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
