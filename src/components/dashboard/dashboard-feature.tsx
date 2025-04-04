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
    "XLR8Ceg4kLkjhZVXDgNpqHhcVPuZTdyQAS9LFGHfnpGbzAsMrYCucsd9u1py31hmzDerVKFYkGBWQHd2ZYfJrhi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZwbaCRTSUS5WvzaZ9VQPxbXJU9yPH3ZuMGMUtvSKhTpC4SpjY8cTWsHe2GcPRcTVZABBxWFxKbruTR1Rzrw3RjH",
  "key1": "fD19weMAoMHgx8eGXhqo16Rcyju3jdJmXPvtw4dLR1ncq6GDhBhn8KvsHpPypheqkVHioDJRcFepk8njAc99cnw",
  "key2": "423h1PEYCwjpyjQYS1h5AnrWoURrwQyGJhVFWgvqj9iSYrhffs1FdYCrd7QULKNbj7PH9rxUHbt2Fi4y6ps1CA7M",
  "key3": "5K4BySNsKyNFeB1ZE7wnDEAZU1SG7MBBcRJj1jzQDredxrCuKjHnmoH6U6La6UXqfyb4hzVV5RZqQLfVCcB2zLea",
  "key4": "5LARrSEj8kyN98XRgZmxpeM1m5rhuE7NBPi2VjUSzydP4uLbXxVojpYQUSxVsMcMx3tXr3bFF6q4Fakx4NME9Y6s",
  "key5": "2BNwfts6tmEpZXAUyLJXmLu8xveBu2uk674N4YjdoMV1c7MjuDhr1B4mFsvLbu2YQWjbLvvqE9Rqu41HjoC7dKtp",
  "key6": "4J1YSuJoA2Zxyw3fCmMNSXQSVo6srSgtg5mo1tSWaKVBU3So9xKi4XazBZUyBY3JcaKoUrBdZBTSsaxVyKCVCfno",
  "key7": "4k67CEx7B3ajfxBVHjLiHwjgEd9hga3pQQ8ZAxyAU4o6PzmMHEsZoUH8VYXppFpBLcVpotkGyprw2a4LLuU72pEn",
  "key8": "zYwL1xLNFnchDW4NrN8aVCCZXdwktQFj9SdtFqdJ9vibGhzeknYRutqDs7cEz7cviLn5ASFiRMGoHgWQL3EADoS",
  "key9": "2ti6FNVXmG1Z9ju3ecouhERTGGaHFf8VnGd57vaJ3YR9Vv3uwGejKitDHVeN1FuDrkbV8qJzdcLdPW4pTnAkprWS",
  "key10": "5vuKffhZSoGrQU2ASConfLsWVToVdNd3kbZA563X5ptSmXf92udupghFyqTAykznmSUtvQokCvGK88uK11Lrr3QP",
  "key11": "2CohvVV2vQK3Du3sK8dHgmgHSaHHr5rZ73fjeRqsZpRgkPRHjGvQWUJGjXBqwkmieQcpef9unQ3z6UjMDXkpBk2z",
  "key12": "8GFwo5xigQv3J2PWS4gRAseFATvE4HQzLRFMQBz51du3kZ4hvDy3mfCFMT4K2vapExw4uzkhs8U6p5jHNZzDfWj",
  "key13": "21r4funLGhtE8bDmZAvuC7ioJzdt93MV34bzaped2DhfiUhhnuNUEYy5M1UdyEFrXf8iHGdgjPvnrELWS5qyeY5F",
  "key14": "J798eMBnkNzr6hXyHCNEdHG1cosXSeFKc4GzdYTrw6pbMdVRUPMaTuB63xfDZuXigtWNEZcCTn87TKRZvyKgNET",
  "key15": "Yqr6JeFHZbG5rxDK8zcyVM6dXA3Dy7jJ4jgXcrojSm18dVwuSx44tdcdz1NVeUH3SpnqoU4TBjyTRHNSJK1orz3",
  "key16": "3rzZyxScdJpbVQgS4cVrcNZG6f1rM4tW8Vk5oycdKqWgWKPZgmkG4ToXCMtxnQGk2XBXDQH8g1xYUFsJBbSR71eX",
  "key17": "afUqwC2g3qPo9VKxNKyqQ96m3ZdzpjJVng7Fcf2XKAZyeXTe2ehBKMsp6x4CuQ7tzFScAKaofe6FJxaLmwcRK58",
  "key18": "5Zq6oVa4TQ1E3TmYv21CTFzUmzPvgQnKHyyqNE8SmGhsggYQCmbA1Kh4s1XWuwHgwRR3M8CpThLu9V85a9ZJD93L",
  "key19": "5hzpqEb1XJXoUFNzFwbF4DSGZ2wEmp4Wf7ZUyw6mKhe9i1SaczCLxiQbHDXJTE7Nyp7V7VnTYaUZKpZQxitpceuR",
  "key20": "2CnnHZYoGFKuK5CszmJBJZSCQvfsDWXM24CpDmEhq4xRXEoardBKLk1sJY7j2rX35QjmUPRnZuuo6VG3N98asfzx",
  "key21": "3uuFNTuQ48kUb15d4hXpj3WgjpAeS75qsJbXZTJSuBdtSEcPJGXZEoG72G4KJPrbpkpmcrkqG22uZWa6s9pkEmy7",
  "key22": "47C9jQYfT4b4rBmp6UPp464RzveWmtFKPotYvcskU1d4jCQ2LBzgQYC9iRdzVTjQt1sb4MDvout4D4L7XdACLCnK",
  "key23": "2UGuX8ntepQq2nR7efFEUV2XAkvNinJjf9QR6Q2ZQe9tctjYuToDqE3y2bAdDsoXAdj9cNdudHVPXakzFXzdd4nt",
  "key24": "2Pn2w6mesV8iFFbUCMYhHdPMowjHuNUV6CmTBjLyb72adinw4z1LfB6B1dd9m6D9AC1yoWakm8QmRR3oaG2sje8K",
  "key25": "vNu2a1CPzMMGifL6F7kdJHXTAqHne428HowDLctjywR87zrbPEyVNaMr4DVw1wjqiuhxYdv2FUtSMKDZFbD8Pzc",
  "key26": "5T8kg9yAt3fC1NXhJAiAQaQoapnTeJcEpuJm26kdhHNkpqfDFhtD2CDRcFnmxBQWTUWXybZCfSpmQfMgw5uorznh",
  "key27": "5mQZhUA8CDkU9Y4AZYd8V2XMSm2mMBP1eS8Ss1vS7ZyHajEt319MHKYJ8b5Za8n1KuEDFAr5b8d7Uj4JMbFbq23K",
  "key28": "5MBSLjUxTKGyND4dv5Zx4tXrwzf9g37sy8aifQbfG1Rw8DCahqtVLXuTMdRnnmHT4a2EyiCAp1uyW7uUSEP6iCRg",
  "key29": "4t7E7L5kgtd4jCCSszu3MnMhwPbx53rS5ondCMzQatFEFCGTNVaYr6st5SB1gA8zVSMoqGWuunMj4gYLk3Gtba3R",
  "key30": "5AzZaNqbmgZmBqLmk9SeGD2m7iFMBmTTyioYyjdM3sPnqA6Lvundp7ZMBQEBtTUYYN7HwZAHT7TBYi5wWVvCWhJP",
  "key31": "5YRTM8sMSrGSaSdhZPoJAryCxaqrgs7kNyfD6xdasP6CU3ZH8Q8WHi4jrqYFuKF5TqjHpmiuHg986s7ogWHTpsPo",
  "key32": "3gGHdHGdN2rrUZkzU2y3BcuPu4KuFgtKEQy4kBF9WXWqqK6LMsxG1dcUA4fc5AjwESucQMYBGDjR5JwTGHSQABVY",
  "key33": "34g3yKT14vAbkc5wSNgNngyLeUmFmrAg9DbX3Y58Qd9EAk37KTAhVHuyQqXYrH2zCV632v5LmzHGd7BptQcr7qtP",
  "key34": "5dAEpnZ4eXuR1aiPB2ukj24hwN3B1zfyUorBEhzTXHaVXA2t9f4LATgVQM1kMzCVvnU14u1xpC5EY5DFEyKuG1gD",
  "key35": "534WPAVeyNB9pGCBMKazvzBujb7wySdjcYLHDmnFEfYkirjFbW79BGyyi5sXbVVJynhaBZyUNqSNdTv3Qj6n6Q8Q",
  "key36": "4uNXm8z7u7A9KLKXxdqQUFt41G5bQi2GSwhfMH3WrG3da8jfxHKLHHeqK9Dr21u9Rm68YmUgAfZgD9U8M3oy6p25",
  "key37": "5aFAjVDdeK11gJNWcgL7bvxBhPY9d9ktzD6hK6Q3qavTgpqwMXpoe79Tcc7a8viG3ELog6dmvSz3VcswYf4JBNbA",
  "key38": "2YL6AyzydjET3GzRJE5ZuvN8ybZK6LDhohwC5qPCrqpM8MVRnMg86iVLPfwhkStUiG4VHuNSXxwmV5kenFkrgYr1",
  "key39": "i43RpbRL5PVnJKKrwGHVtpZ8VxrU1g32nmgErt8N8gjkZDmtq78Bda69NqeKgWiBYSxxGuhBum1SKZGvmxrMJvu",
  "key40": "tqD8RwKTGMbpHHxMqD3TtRzh2vCX1Rc5hYq7twiKHscZG7eqxCVT3eanY2uwndZHzLhmmNFo2DqsNyWpEFcgpQB"
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
