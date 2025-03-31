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
    "5YvxWABHzvhp3RSDjndPrcj7CdfzMczdg25Aeidk6qcyh5K7PRR1r1BuSZpdeR6j6ofFXUohGa48j8Ms82ytQXGi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i7HFAj6a54HNAZK7MYDzrnkw84wdFNY9Ca1uG9rugRv7arVAAoZxaE33oU3xtHW8LYNgn6ARcRe3Px8h9yZ9sry",
  "key1": "4Tpev8Trp53tJDywxPCnAVjQTDgJ46s9vtEt3mGmSYkofzvEmB7xkZhHXNbGmbq3k8ELmGqM6ZLhEfvGkMCRfPPw",
  "key2": "2RZJrMfSRqsQeDifdUC9rkGDSi4jq56YMJBx39Sc5DiULRJgjJpxPLx1MXzEmDPswqccJJRpZRyecoDENHuZ2Fqb",
  "key3": "45JbhkbQVu74pZt6fGAoKpjiBJJ9oiuwkcTWrhjh8bhz8ULLaU2VSa2EqdULnhj9sZKEYd5qt1eykQ98X7WM5xME",
  "key4": "3fbn8iFgeQkfGXiuPStEwgMQNSz7ddBHmSiiBWeULXZmLb3F8bDLV6j2VEEBkeRMmsvKRvQhmFUkuYV7w6yP5p59",
  "key5": "4p6D9D3zNvKZbCBwPhsykzhpym1crp5mRr2W8Nkpba4iHfqsdqHmdTs4msSM2m8qx4uQzYMuQg4ATDQ65WxCCdni",
  "key6": "5cC6izydQi9MfEZ5mXkwTpMseUH2EbU11cya1RJKT4mx3swseniRPc8ZdkAKQrzxpWmyj6LczbVVDa3X4U71nwGy",
  "key7": "P5JfnndkwALz61Hb5RgM5zZhEwU74QvKWsnuecw8HXEQVjmNo875iJQq6Xq7YybduqqpUKaSz45qXJn2JzDMR7g",
  "key8": "5fh17CQWGQv5NB6eMusf2PzcDLSXFvefF62mWfxeffwJoY5YmQo5UeoDPesHEcxKiJdtgp6jvXoPDDBJ68gfw1kL",
  "key9": "2LfQTn6vC3hnB85BqfDJBnQLopU5Voma5okRgPbK1L9Gr9zLsVQuYNp2bQFQuuNHnGfJY7KLuJjaqQ4Bkfn6eTZk",
  "key10": "2X2Z8tuGTGjqsjYZDarqJAZEP8pMLSAEouKA3yCKubcpA2aHqmKYm79ZsnRQvG6u1w9XZZKQdyPfQn6bEdM8Kxy5",
  "key11": "5876KJiixquRPVFmRiRUBLVK1Xyu6VaxbzEvtNZWuoXBtK4UPfLM69KPSgquM6tfGLvHTeLbshUQaRdxq4iwcgSi",
  "key12": "8FBsEYBKue1P1PcUZyc6HX6b6C9bQBaDeyozNkSbnp2godqPz3QHKWfwhjBBG7CY4H2NXDa4w5CWTCxvkSz8yXB",
  "key13": "5LRvwxZHgjUooUz6xhnRn8naZdSo2ivAQYpDc4MrJU32pFzx7jqi3n37t2cas93e7byGY9TGZa9qPxEs2CkTaumY",
  "key14": "FHdwvD4ViqUpYs2LabS1Ydua6DgCCBEyfAF3SDiub71SyrYPPzeJvcP1AU9mrmKMxAiqRiksuW5XHeWVB6Jic8F",
  "key15": "2BvMb15xsWWjkoKzfqQZ7KX3bZLm3Zh8T5xqksWShygfd49GcThJuZZvu76oL9Eukpqw9Jn8AsmuKLYamTuXKbqM",
  "key16": "3gdA5TuF5YLxeFAZRD8YgAqxoR8fAKHtvJ5zZdZqGJNEGSTn6ZKLsJb8E1CkoNCXQh1EVFSjBt58K3JaTxSeMs5o",
  "key17": "48v4zSougCKww8HBXLLyNztTfAN2iEcZQHi5Bo8k88mDx2LW78iLX9jEk3aBhXSVU2c8poWaQZtJF51KvbAV2AA9",
  "key18": "3q9Ew4YNBwHDYCab7EDyjLvG74CmzRiiabrWnfNMw6BwZGtHXZVy6omsZEEzMJUGDQ8xgJwbBLiR44ubVfa2AbSo",
  "key19": "5zH66TEvf6BWVSbvk9NrtGQCySaud6uKJw3f7n7uQoSbYEpfLLKfY6k1hpiK3wxqJKdgLWzjTyaCpi3qhj8DdMJ7",
  "key20": "4eWLMunC4RTcWr2jbT3tEyNWCPqnhzXTjmbEMLyyUNwkWoJGt1qUvwNAHjdgcNr2sjM4xLw7P21a7cyd9opshSeQ",
  "key21": "37FatPQhMpBuEmEYgBGxSRBYefu9Uf8tSdJiQPeriPLSUcF4YHjtVBduyiss74XbPkgxkzcPeKouZHhqCEq6baak",
  "key22": "3YhCF4CyYQ8T6BZSZ2QERSnvpCgSUoShncftoNCuwWd5tYUbhnSNVH5yyXgp7GyQuStXX2mLj997vfZtmWX2FmVs",
  "key23": "2A2erUng42Fw1AniB2qKDp5cTFhMcCu1EGiG7k83J3QXTJktWAVopcJRkDMLPicMwZL8yDDkxoCjmUQ53S4GZp44",
  "key24": "4vmLPokfzq79EreT9bmKxZi8E5GkRyaqWrqnobSDHSwN6a7VXMpbR6XDNYGKmnau4aQrESbsVooEe1LqpkGFahn8",
  "key25": "55UcBgtA6YbN75NS8k2VdCc283bzk7oyKMNRh3gWKeQTiUEm8h8B18Wo63EkMwugaYi8pfq3kDKo7MLCLYUwcBTg",
  "key26": "3WbEJWTCSBjRtsB71MDBWVg8SA6QD6GRrXif3YUctw1xKQm6QjJyT21PkaYm6NbDs8PUDWRoWYLVYoTqXjpw2sMC",
  "key27": "2ktobEsoKKKeZbhNs3fo2nav3USvEoVNoYqHGLAVUeEkE1NyHqSfeoSQh7UeetskWK2t2ads5ZxMbfhEAkhnm91q",
  "key28": "2xZNfrp7DDBcpoD4TL4JcJi4c5VSQ6xP2j24kNcwq7cdJcthNRbuzejDYpMuYQ8e1NDxK4mT8RmgmNoBpAxmsrk7",
  "key29": "2vouwpYJtMTCipCN464bHMN1UzNFc5hb6maTCB4dR7NHGpRAf8M4MMM6VC47uM1cmz9XmufsR7ufMHaBJeVwpd6E",
  "key30": "3xn6oXN3y9t29Ma8WE6JxiT9NEyrcxVHrCKd4JdVuHNtLdwv3hUSnLcqSU1tvLWqRW2kvUuZELnKzjnbRuRUm172",
  "key31": "5ZksoVNpBpRhwzacecfhzh6vw46dSHdB1PC5MZCZcxzrPrKwzc7PBRHfW9CZU9GT5xQYDJve7kRVUUB7V9qoWhBL",
  "key32": "3FFCHbREEvUP2XsMhCWxL7BF6Y2cBDxgBJkgXo9aBjLHCM2u13DaMRDdpnf64vpbNGzGFF5LfWgBSAKhaxZfPSuK",
  "key33": "3kqAKxg35QfrJR3mnwa75Uyy4LHPokKEeYWJZCmqNpHFfX3snmHbveHGR4GVHM8ytNtsqpbvFzBW2CddMTNnZrZP",
  "key34": "2Qy8kq92hdgd8bs2Su7SXpd4CsjW15LKESzc6t7u257ZVYW7EV6DVc3s2UqCt4LniPrZAMdv46BjR6u6WXxGWK3g",
  "key35": "3uU2YAtQNGKFoe91posfqED7nCr4Tzh9bLn4pFQ1ocsduWk7fn8Rpx9A2KkkCXc55XX56UciNppS7utjZv4rW2Sy",
  "key36": "2Rg6bUF2LuC5ZhHB1tWH425UBmTxtHCAtjuNCvzZW15PBd9n66YPqsmkc3EhZzmsoqptQwj3S8rsxjpZMYqMwJLc",
  "key37": "oL2VNFZ92jqDy3qwDgr7Td1cX7qms4SsJCGnqt7JbeKveZMtJTGUoBrqajphnyZKjoeMvpHMJYbTStre8mGJqgo",
  "key38": "3tR2QZd6mdmax3LR3h3ffW4aUvw18zSpZzZxMYgU6e8kT6FhH8JbyB3mvmBJ2VjDfv9NHmBmRvrW2yj1DQmoFEto",
  "key39": "4LPCrPMvTLzfXxdkGT3Dnrcqc1DaGuruu7qw4GB2tRFkiYxw3JqxovhoNRfmaZ99Sh4yVXTzkuVVFb6CMMkzPwnc",
  "key40": "2FQFhVAvqKc6pD3Z41Hhr9wXrZFt9RT8RpLP2hTsBnzTcHFpwc1ktXS86mKfuU9Pd3toDFZyeaP2PT9xmokBpEGt",
  "key41": "4X6c3vLjD18VT574CyV9RtNH2k8RYqiDXwXJtF7bZhCH2qJPctSDVjjfXv6BojBFNvECP5J9sS2fGnBzPkDs3cdP",
  "key42": "8MqrXPwbrXPm52YtVbCbHtxtwFhLtiaEMkN8o3CSqeqroVtcCWEvqcDfGxGSthotwPHR1bmaCGY2g6EqvZZzrgo",
  "key43": "5mWXitULXHD3CuizoktVNafT8voQceNtE7g8hskCp54LGcQixtpK8zTVow48kioTRACFoAeTUzCBju1L7aaLzdpf",
  "key44": "3Dh2nvr2aKEB9Zx2EWc6wa9drkF3Hf4EWjTHymhs6qvgWoUuGMzzXTqB1wZUDdKQe8bTF9MfApUDRdmR6moaApdD",
  "key45": "3sRd3RMW3VHXoA8MsSaAY8ZQsi8ZYG5Y1aVL1D3Xu7a79Hgzm2eotqyNJd2UyDSz5m9HhuosFrqDbGU4aQLhU4AC"
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
