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
    "5vwVDCVEtn6FL2THp1GrhPLCJrA4hEsEREkonTsj61SSGBAffXTaVwdfntgcqEtnsHTchvCpvUd4YfsrUhjPLars"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67e89sWCvpnUEALvynE6XcotCPrnF7iRkE3z7MQ7h2YaZcmsAhEHq5g1VwtkfGPYzci5ZfjwaXShozBRBK5sxMuZ",
  "key1": "SwiVhhWePTjUs2YYQm6vtDVrx7aiFKb2Ysygn6LQKhRbeeU6ypwgwmK8GfsNGZ65TTFHLqcGBexTrXGvKnG2KZt",
  "key2": "P1GyyEmY5XXKnbqZXGaYHRydLzjQN2Jy233Dtfx1QbrbwX9B2bbeY95FcRwGQtL3HErCB1BUn3jQAZHbAoWqTdd",
  "key3": "4g6NuQRt5h7UmGqoBcxcFv5LPMXVqVwWAUaDUa3FmMej8H3yWVwEScQkS6VSqBw9hEcXVW62WJp6vaWDe82UXSnH",
  "key4": "5qDZL5Xu7hYo3oyt1Tyc1hcJoxYtL1Qun9iyUy7Bj6GPCqcYhn2MBF3e5dumQd4AbNuqwY9GfhAScdH23reguWt6",
  "key5": "3RJrhQnaL9Q9LcH5f9i8Ab4ZZBwXZNfB54C2P8gjEvHWdB6czb2m8JdLuBueZmbNtdXTsyw5aeUNLDvCpA1iMEfM",
  "key6": "2gcxAcU4kYKmvy2AVZbtRDbyZk3rY3syHN2vMUiTjcg3VTvhnY6Q5iNBDEcyshCSfXG1yy1LC7bLucM12jFdhdwZ",
  "key7": "3vD2vrQgd5sPYKMA5YaQumYZLtLB2iSAhX8GdE7PjELcsshxsKRmwxwp3jbccvoMBnkkVo7zWKfUJ7ThGZUnNWiY",
  "key8": "5YxYbXGCeJDmmyvz5QY4J9ooq4FW5SBYpRtpyQPNNPWD1LLDudCD1tZViVotd6PvpPXDhuq3YE36Y21NJDnmxh8c",
  "key9": "3hDN7efThx2zBwjogQJfGfZqDPrmQHqHfUbacusRtoLpdXekswT6zgy8eNfXJXArbbUKBmaenbC2LFj4pBVJ8vjg",
  "key10": "4rcKmt8ckwjiGwLxZih63TA8sZWeNPJEwE7BVHTbbAvnFZm99RtF1Bq2vssCVnjFoq4RhtLRQWF93FvbzGdc2uXr",
  "key11": "4juQKe61fcu5yWvg3FzHDUqedbYja8PF647Vpcfwqta9ScYVAL8B9F8HE7uKY7Z8MNxXmNJKLFvw7ypm24vqGdVP",
  "key12": "4Mj5H2fxgeaFnvi38QjNsKexMXECy1KxoN8f4jsAbVZVGqkZ5gBjGTQaXSav2uri4p39zAg1zXeMTC1mxLhZebBe",
  "key13": "2icrLR6s42i6CGHoDmtkwes8eJgmezMU26M1HJ6nkZxfHPmw5Er9s2krrzdyMijoEGEgE6TQBLXD3Pec8b46JXq6",
  "key14": "4Dqoaegb23vVrGfV6EDQ9SgnQEvUGogmHAMKK2tSx5hXW9p4vafe2cjPFuCuZeNTbXZgEBSAu2QXw9cG3gAcZBHB",
  "key15": "3i6oNjQ1TZWxHbWd1fBrijpyVCVJ682cYFQDd4evnAPSsfV7oCpkYWjxUzvgExJf1ywazNcz543YMp9QcjCy1WBF",
  "key16": "5pfaQyKBQemcR7qmAFKFaFpfDW2nUuQs5yBDNDe1jjfSjPAkPRx8CjeEnnVNiEnsKLHTQ9M4Cq3LTSNzHihcBi44",
  "key17": "5CGmRAiZRtBacRS6ikEQd6HEd6xzFx2xN6e6SfPzX1kdh9QtKsEt2Uk1rRjKNnV64oVihwKis4bMPrUW3ijAZvgG",
  "key18": "3NmvQPqfAekqm3dL3SxyhjYsjFZGvUDGLy7JFaoKrGMs7hbGCFgmWBVSCEBEvqtRWj8yDsNuhizy68cM3pvMoyhR",
  "key19": "2nNHeYkwwkJQyquDy3K2DkwD3U3F8haEV6V9kmo9woQLPpyJr8Tot7p57TN1JokiNLqBoqoAvXwkpybX6DAFCGsJ",
  "key20": "3qKksLw7ieCHD8qfLxdevwfA3XnohxpJXKk6972aLD2asuexsKYPwyNGRWsJWVypRmLbznnLLZGogPS6BByyC9gT",
  "key21": "5Zx9CozwDQ3yjBxYX7YZYyc5cD9DL8ogABovtQ2cVSFkK6rCX7bWDWxWbhYrynMFTYhNUas9gAgQWyKoZ7SmNZKi",
  "key22": "5i6RebvdmTibbUb8pKuSzzNyVUFZmND8kZ4EtzET3WD3yvkwsWMc3JJ6Sj4xm4Acax66AkS3MG6cZ6WiVLGghVSv",
  "key23": "3sJeAF4AnhdHsQ3ED4fqyLCfCCE4Q3DvjoG4Hh5bNdwDoaMA5ftYdzvUg7MZs79ukQ7dcp8iVgXjnAW459pk1AsL",
  "key24": "5FvuWQzoaibHhAs1Q5fmgfV5n3Lgcmur3VRqojbKFes21V5fo1V3Nxx8cnJrcMBgWRZuj8rp3G1HUmcgn8iq13qF",
  "key25": "3hChapxuHP4VhbXU2rTKv8kq87NyXmm3akbJfpzVPsMA6VXsusSxurYyqoZkdJX72wkoqg7LCAdEW42Dp16QVvvG",
  "key26": "54EEjiYeKxZB5Mi9ght3PWXLpnd7YDtZBBmrzePJRZHg9vsowb82S6zSGdQ2mJKncS1ZwVEkA6PNbvvEvD7rLsw8",
  "key27": "2254RxKX4t14eeq4ozko36QEyo1QQCdtr9bvb7adknfRcRpPE7KAgg9rr1gospMrJDvbXmuUEZtghLQa5L5MWiid",
  "key28": "4xZqcsDLvn7ZRXvXZ8tvjXLZ8ZZSvRBr3o2tDGEN23NDrfWTLxcMkx1c3X3SnCKhskwY8KBBYg6dQ1DvaK7e71nz",
  "key29": "36C1vpRPAWZV88ZgCdCWUnBDQJ24hUuZi67hhThP5t6inmDcmqgb1si5eqE57iXoF2Yk4KtWss3dsYw6PpkTUCyq",
  "key30": "4kWR8ZnGmoW56JXGUnJEczXeiYc19PaWosodvs5stCmM5ib5hvxXxVFqv6d7U9Fmf1qn61Te7h5y33rTLJv6QC5e",
  "key31": "puBcTd1xmrTAe1sv5rPYb72LQL3WQanqPrC2DeeQQv9zen3Vo7nGcZ3hr5j25NsLwfKspEk8oP81JeTJixJLCJS",
  "key32": "2p2wBwMjciG9cnF4HZn12ettx5MV4EZdpEcoWZhqAUFj1hSFhpHJYM9DiB4FL2uCttUtouLtcoj39Po21YGtZCgs",
  "key33": "2WJ97KG893UCwcEbJSU4f9gzEJcM6KhWCE2hAs11yN899xXmspD5o3d2KHDMkvX95zWFXYay5AE1WMEirwW4mJw8",
  "key34": "61zgS8SKVV39T2JYfoa9ySTRpwN5E2WFzNN7LQxDbFugbrsastt3x6Nkrxxuc7uf4ePr3NbAZ3KVYpKgSF7VefPo",
  "key35": "4YmRfaPzMmGURatd5orUJFbYe6SuNneDTjf7FTMpn62AM7ew1WD168PJqAL7KkA9euUjnwSZvXkbQaUeMPJMNHyT",
  "key36": "4zHGG1PSKR4agnD1oAJuJjp5BqZgfoe8M8dcSfwoKoxwxSJS5LNuzsJ3VSxHqmqpEkZNxgMGgsMqMNB6psE4yULg",
  "key37": "5mGpKVXMW79V8yQYyha6ydd8VbXFrVMfpYyx8a1xGN2KqTgZC7N9Naiov5N4CVGH1YrtsmpUJMjVL2Bich49dYMK"
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
