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
    "26JFjaHHESmVqwToHaBzggmpmksNE92QU8fD4mMYYCpk1e11efwZjpcq2J6iTpeeREh46oN7tmMFsquVWsUZnmr4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MumxKeroCrddS8Z8yMrVwwiFPZNoBjHLuAsPU52NNhbkpPw9GUj997r6Vqbm9ogBh87Cnvf96Ur7wyYU447B4yw",
  "key1": "5r1iqk62DCSH1qB2MAKJ5NVeMEyUYq1niAdN5yrKS3L9Z3Q6nmGRmMPrskXFhxY2Cn2z4P1HezT32weyYncr8q6W",
  "key2": "34Ad8TBkr4tsgyEV2trSZ4Wqmv6SK24yceJYUYYwt6qPoAuS8ApUTXGptzThGSjtu5vC4rLhPwEPVEGPgoZj2Zkf",
  "key3": "5Htx9mdXZ8HDoVtZJno3RpHE6FW99LsQ9az48NwXYraDgeHveMptRV6i6i1Wz2ubZS1TKDt4qY8ZRMeB1xk6jZvu",
  "key4": "2RFD7c7eZd9J5p5MjRZHWF2KsAz4LZkZqH7vbiVahTEWAu1piiZAdMAYrjL7DuZtV8o2RtpGqhyBZu221LVXWBMF",
  "key5": "2FozUQEMDMg2irHwStXeytm1kN9rXTA2Ytzm7HSHyMUHR1FBc3C7Xts4D4Cv8KbKg5CaAdhsFYaJfKKMz8WkCRsL",
  "key6": "56fm7sQvGesGNgJuYdrLzUbXhjQsq641AQ6wiNRmtBnCpKATBuWs9GqcqYuqjNytro1HVFFRzGP47SuShJY37Q64",
  "key7": "2PfE5jWWeC94pzdo4ka13M9A321y4GBRwkx6qJNHJsM4tJMBxBoGJkpZ2EbsKuabvNdeFDHAka4tVFq6RqrLxP2a",
  "key8": "474dLyxWqSPKNTAvNSiBU6XVJ6ac1j5Ye65kWsaVg2ikAF9roz6P31MPgXAveooAwM8AY9UvYQGpnYy6WpVnv5A5",
  "key9": "29vAmhUgvnmi9yTDWJFvnW8HYwQibChhWUoWeNtGC2AmGecFkXmZ8xyKQpFsstQ8V4VWFwbvtcc31NN8LtKK8s1N",
  "key10": "2yvtwk1L7zWgp1kj8VaaELmdoB7Y59JR1r4hysD9vkXtAN1X1thTM6biBAsKVkfBZhZQTaASCQafdipQu3ERbAZY",
  "key11": "5ViqPrvn6pYjBuHYZxsee1phefM9umHkM4NhxKHULDdqqGmuU8gRf5fycW3qVQdyupwLWJSE5ssA8RDNZ87DNebn",
  "key12": "2aSHhw4VJkTauhwauG391Mht5ArFbzrkYKaCvTee6MKyUtyM5VwWU161NiGC1jMvVogEV2uiQ2KjKGhPRvkJaB2J",
  "key13": "516SgMsoefsU5fVvnMssLnC9TuG4EhxsD5uvbELTqtrVTt57KGFrymWcSVb8eUU1DFHWVxCUz1tEU4u7LTBzHF8y",
  "key14": "5jq5TPtvpXFvVgLZ21Vc2becpRMsZ7S89v8x7QdPwbkJnbLxkDh89qAmHfNyNm6Yt7oJGgRJH64VU9GBcbxg6Stm",
  "key15": "2jMdGQeyA8RwibpsfNZn4g41hPxkCkLcQo141917LcxDz1Gvj9TNuVCGzivfsHfCTLDSC7jw612oir8qKE8eze8Y",
  "key16": "2TRDJtRdtWFbYxQfV3XvK8YbNuDjhwfGh9oQ53X875koCPoTeCLatdAXsoXKraDoEP1vQ8gn1LwGv75qkssnauH8",
  "key17": "EibBxN5o4Z8fo6ob3wxk8qcd2JLvuL2EQUdaV8m4usobVhX44fKgxV1DsQNu9H5dSbcvDtUAJKMFRoinUSLAozJ",
  "key18": "rvkmjo6gv5Vy8BWHbYSBFtxAKQY8hZpEtr1cVdS6mmectCMhdWNRzXv7uKpAU2dXRMPWW1EaZBZGApjLNYAsjAv",
  "key19": "3mn287SnjWNgKWfAQdNTDQF7jPbhoBgmiW1pWCwAfc9CSsCTrWe6YN1vDFTvYL9QNrZyCJx7y4fTLBVpQVbPCPJ2",
  "key20": "4AYwms5AqDTVYjjpfKJpdCLvDMBDUoYUUojtDSitpwrTc4VHCsPQc9MenStwZYdsqn15WZ5Eq8MKKhCiUveRR8j9",
  "key21": "3dCJjfmUEeHCJaHy1dcxD1mZZ1nqSNG92bkDDWgs7h6MV6dU7Dhpu9R5bLgpFkjh4NwpnjWznCfi29JLuM5FL4UC",
  "key22": "5hXiPiXnhUbvBRyd7PZ4TmpnpmfFExcApk2a7mAAhV934HSfds6RyzfXJAonfKLEfLXFi3cWoYtpqjd2xHxzbHQy",
  "key23": "2LpKzvD7acjv5qpNnXLR2zZKRWfbfHpAXa9Tz9nVDpTB5kHdDVQxggcFrd3G975XZbAr27c5CLF3x2Ebk6Lifbmf",
  "key24": "4xBZ7RY6zmAxYMtvaGVDMrdqxM4SNg4jhBeUYhf37STs9C7PHG46k4V1NyJuVrmNXhNk1h1eaXc6SNjFPHPqwhRt",
  "key25": "5rnQMd2A813pJMBtNkCGjswacfnkAd6qo6HTHZBGF7tw2uUDnMqTAAHyMqeDQdM2i9Ts93ZyxBwg5g9UpyR2UYHA",
  "key26": "4pRyEPkJtG1V5XEHCU9DgaETumYWBJJUYGPM2cz9vhm3xGs4NZsMc5TLYzL5XNBUSKSPMH685dwjbHsmx5tHfJVX",
  "key27": "3NzW4XNi6H1T75Av5ZDBMTxP9hu9w5av6NXcCK2Xk4sTNt3e2LZUPX7tm6q2KLcFTMYjxg13x2w7ziWmrHVe5nv2",
  "key28": "3tXHtBNEXVuF88PzSRXsswpoMLn6qSRWC4TSXQyGT6mRavx7c81t3wjjoVwW4YRQbhYMHx5pUprgirK2D6fKfxxG",
  "key29": "TYzquyHavYpfe9K71FS8jXevsGnTuJDuh4BBRDAuHYZUQecaqrns7GGfVeB3Kg6nqmTHYPjwXEEC3mfVz4hwPC5",
  "key30": "aofkyMqhubBxLx4dkbS2ir3tW9xSoyPWPtba3AyeNDXwDLtsfVuz7AQC3iWgyqQAgV4aLBVafsgW4Gc1QsGkhMs",
  "key31": "2GgDkcx81uFDTR5w7QFW3nnL3SPnSpSjwL6g1wqn6zY5k5oBQWGNmykEwFKdLSuZas49MWJr4vLdpsnsL6czFYjd",
  "key32": "245CWmk5LX27m67YLNqkZrsQjiDmvLLxuaF59AUHbyZyiAvdtYqkAs5yitu3KyRayoYbhkw7bBUhhftHnLD7yCs1",
  "key33": "4CHbB5hLJcBznj6cSyKGYivdjsPXcKeKKCcRZSTjucEMiieQwGzq346BqLkdV7fPUr7MPkDTrnX2YrNgW7C6uKeh",
  "key34": "5eoGwMRsYU5wtFboXxuzRgGoN4j1kGNf8w41NviJ5AN3weozs4mBgDWUW4v9VGuqgAmiEJjQCwGv9ZzyQWk7gya9",
  "key35": "5hnYq7YeAnvmf2JTHY3nMX9EqE93mTyLrqEcU5sFPhpi8r23EYQ643Tn3eVVEx8wvQhBLTAL6higT7KPzzA4iNBM",
  "key36": "4bSDq4ravRHcmZQXJwTVSXCUMn6V9ks1FUaMbygSvBFR5dRPzHoSxy4bYFkNVpcjn7LFijtvdbiZWUvWynnkxDdZ",
  "key37": "4BH9DFLRUbUNHq3uipZvjqZ9fmPeNn9aybKWYUvsbFVU4Zd74HJzMF8cNzLWSFMyw7o7omDMrLj38KNJ7LzhEYZu",
  "key38": "TFw2UK8EUtLPVj23uq39hJMhprZ9uSyRo8Lmdq6LGRZMDfStG9sHaDVXmLZocYkqaZoCH97hSqHzKUawUHE2tnT",
  "key39": "5thVsT3q3FTRP1rh5esE1Q8EdGcsYLBetmcfNnsPfpAKPpfYD568a2RG7TBk1zmYAFCYGPJHKxa35VemaXEPzgHG",
  "key40": "8kDoJjGmBYR8M6PpGJJAFGrmZSKyc6ihrA37A67TEYp67EpWhLoqmGMqLqb4NA8swtV4VJooPXH4rPCjYLnjhFn",
  "key41": "2hzR7Wv53bkrdqzMawYKJWjfo8gRgtPUwFY7iYQhFwT8jjqJvb8AuujANnDYTH6Bk8xp4nAr1aSHUnL9gFsr1Aen",
  "key42": "2G7yd54ZUz82urbJ8rPT7Mfp7MctDtiHHCD37cy4soWR2Re5WbU6TyBQu3K7eT7VT4ByX8LDpZt5y1ySmFDfEGPx"
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
