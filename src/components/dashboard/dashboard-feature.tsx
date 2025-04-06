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
    "vtTebyWrxaUEXaponeHx8rxYMR4bgAL3k6TDUyii6VabqxSduWyZJXv1ekJEWyY56K4bLa1vruYdKACkqDe3DWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xGwUxcJnwDRnwGKTFXb9VHm9zJN9yQz4n1RM3PJjRbSPLWS74xtpD8jXx1P5KrhNU6kkbV5LLvvKXN1rE97T7Av",
  "key1": "4YkN4BtMRmyYJ7nL6zXgZ8U7846MRVvebc2iEeLdPdQfCv7ybAtcLJVFkqhkC8NsJTZQfAbvDSCTCsXy6tZ9UXaz",
  "key2": "5SUswNgq6bSyf3zsmd66bdGMz262bFiVJmsmghcbb9PymU1AvRyrEmT8RKq42tXw7Jz8HmgxksMmx4dFBLwRDfaz",
  "key3": "2Qav2vJAyYJAg9Dxb5ir8mKksgPJusQYnbzE7m3qwwhsQ8cSmTGd1WqA45MTsi5XMGhc4rVMVmE8DGTJfqhuST9N",
  "key4": "5739pbfvD74w8gktaA81FkM6sXrpYkRQUCpv5xiqtP9nWoATWkcwrUtLo35JAi1rUgyvzUX76UNYgbNESDrPsFEq",
  "key5": "3H2W3f1BtXmBLFkyvrUTkvbZUV7cELn9wFWqYRm8k4QThwVsmKSCc5gKPSg9q3tvtED6oKjWEwWrp3UoYLvPm3Vj",
  "key6": "2SwuBqCoYFrYkUbb2eUoQWbD6jMgaXU4MicGXi6KN39yXtMDjbTL7xURSc51FVKhHEDf14eqFZM4tGa9kiLEWMYC",
  "key7": "3iXKtn5WAtcfyHiBEfRN5ko2ySwA2YvNyBLPpcpMQBsUeprcSwQibkcbUaLReE3xVK7YMUNm9LbTxrxRF7yR3qDb",
  "key8": "2t1iauVANCeEAUk1Qvgaf2nh6NY37K2CwRjFriNgskXqqPCDsuWGeUJGGUsXuuJFWkBiNiE4PvqXnj6dUsJVynHZ",
  "key9": "5Fa3sTHPv2hLKPdJwrC5yHK3atHV7CCtLFs9y7bcpMvWWzMMTDfotUciRZoJWG78uFTzeJaexQ3AezSxVJ4TKzZ",
  "key10": "2xGcg1agEoktsUjL5myG4hN8tFAQZBpLvVnyztkMrgmr8jVoU44Vx6y4Rv4SPFT36HXNcEPzuzCVuAtddew9wYjg",
  "key11": "4JDib661JnD6Za8QcQCWeX5TVVa9DVqaaL2PTAdn5MVz5fw64iqz8HfzLWjmuvkAx5iQayNnx3357L1cskgH3A7b",
  "key12": "4s7SNYn4uU6EPfeJSkgQZCua4awN6xK222gSk7PMyEtzXSmk872kDABBTmxNe4bwGDQPHupXkWgnw67Pc73bE2dm",
  "key13": "4vcp2rfQ96Q1QCW4v7nVhFebUE5osoZbKtyeQeuB66m7BmB3gZhpGEuD1LoFouRNgWAE5TC7mckbMuTFwhVfgFEn",
  "key14": "4Ckh9TXfzR6ByUQx4th13rUwuDUtag465xpJ4hHGxsNwPdmmrYSg5zP3Kz7KdfoWnMViiHADg4Ff4zNERCL9SkHs",
  "key15": "3DXx5493gLZD4PRmuPaG2rgBhFidxdVkPJWmtwuqCuBzqrjQgidxfW4D3DXnWdXJByYWc5jjj7q18YJUZvPh5Hjv",
  "key16": "MwaWQvsitG69n2MfVos3wGPM7nsAF4mhZjrf2eUqfJXfgMmfUPAEXDFZ3LjX8dLN19UDrbuPqz8dmtRHrKMoVGy",
  "key17": "3VMfjtPBrE4XycN59MrzV6wXhXMZijXULeJcN5omzcL8T6wRnGBJ1c8rnj8vmvYDYzv5qtTK2fLNitJCsDvxQXxX",
  "key18": "4FU9Fw1XD7X5xB8MR7XvYLAAxauy6JTznRRxvKBNNB4LLLERRmSKHxyo5U4P6JKYNZV63JphnFuFuSB7bxW6oxAR",
  "key19": "XJSX7g2Q4uuTd8WS3GXK8FwMZZouTb3sxotunXqdPrD7EdVd8DhyhuexbTHWYCgeB8ZE9abLNoqunJK65WBmZN8",
  "key20": "KdE5KoazTdKm2xwFuY5BxzeFzg3FYZbcycPQGtTbdVNDBoZgMDz8QQMJNnaKBefum9BuxBVYdy7yAWnEQWds3Zq",
  "key21": "2PUhKXw3RbScgzEV5zVWYAajPBZvyF3gkwEsTh8ARgjAv9fxT1smm4Nj9PWZ7DSuJxVpvkxyxjf8dLF6SmUvrWMd",
  "key22": "2RZoJvY4o8eHT6tY1g8yK8n3vgU9iWUPB45cCjdh1pq6s6xyNcrR6iUUdsvm8mmrr9DYscGzTUJUgPCdj6ekhWLr",
  "key23": "APNyXzaWS5zib8RUXhBNh1e9hFnc4WY8JESjMeAvQUUVwfbzW2TeN27ZauGaYwKnufah1xDFXaKZec1zKXzc1UP",
  "key24": "zn2nJMduVH3yXQH1L9bEAgTUJLsEdrs8HERPw7wkhNFcqpPghy4RVTTjfVsto1wcbpb3kmJYAGfPjR8vo6PvV1i",
  "key25": "9D6EkqXcgibbKAdg786wQDGX2DZZtbiKYDV1EAcvjwUSQtWBR2zRHibwfSjWYBjbXGcuTTRLq6TJbAne2H5wFvC",
  "key26": "2u9FHeuL2pDz1cBLhoNy3c9hLo5cxx9mUoJ5ak1yYHjiMmGUiWDSVDypLicKGUue1wALbJaXs7fyj5jR5UMT57Ao",
  "key27": "3fx2AH766GSGVzwTFdBcWL7gpeUNuJdv5Fy9y4GQvmGVY7NXKrMWmAb7Djs5AFHdrAZymmYhr9vy5y39L9BmR2Jh",
  "key28": "4cgrDcBrFvpKjR2r6cgZMHjU7iq1WWtPimSMV9TqSo4uAwAAr6yXGqs8dJyntmGN3wZi5n6QF1avmGD9fx2Hgrfe",
  "key29": "59GCRpmk4hRHhh11qWMWcR2bGY1FzDRZmdDaQtpwvDFwySpjFFJZwGDs1FkRLEhxiGUa3wM9HyJ2tVBFuhAjBdc3",
  "key30": "5GhMxttH7dmVjTajeEKrBtPuatzp6ieD6cQQp1LuwrzQCknorN3j3ZH5SF6B7GaASJc9MwZt6b3BBsZef72S7iqa",
  "key31": "51WCTnFdWvhzvCABVUrn8Z26xcFqWnKf2VUrSR9R2ZLzWesWF7Wk2oX2X5RDCKnZ5joxTbH5h4u9dJLyZQg7xKQo",
  "key32": "2W6dyAPSaqf3LhdiF13ifrtfuYS53BNmEp7w54DAgf81WEscMNfrXfEJV9kwpVcaYiAhC6FVJcwHuvbE2sCdbXGB",
  "key33": "uiiBNFaw12tUnYLVjF6Jxp1o2Dv5LEocRuz4DPo9p8NR6yDCDPrNEpgQyR9rox6WGTte5SnQdkjKHvJQHg6AwV3",
  "key34": "4AJUp2Jte61ibdeAuQKn3iRZddQ18Cw7MQGakWNbAwDgF6c6qmq76bytJfXZPASBMToujxR9dLh9BpC2PRZgts5M",
  "key35": "4ybW5uPy7KhFxjy6reQyX9YU6pmcaeWU9gVjbcKUbRPo154aSXoafEqe82eHTfazXy9mLJzAraLttbPnceeLrpEY",
  "key36": "2ro5xVhd6T92SnaRGGYq2JcjJwGAzgvZJFYGQkLNtCC1yixUkafcyucjN2xmnpvyiQMoy3WtzfzvNVERGELGNChs",
  "key37": "cYXbMvXtZHpMWBkYRyDAG17hzNiUngdrhjFQZjNRkrZWJd4LwMABuR82WuN3WkQQaYKCiat4QzUNK9FPCNzeTfn",
  "key38": "5yrNr5bzpn18BnGWU17E8WGoHNy3M2Wi2qWGpzFpH4NEC9H2e9vuQUanzmFAKcWgXpU8RBY7u3DctzZwCgETTpfz",
  "key39": "41HSG5fDfpmMd7BnMj3Waekb7kRC6h7RNaiAov4wPsVujMDwecCzNdYv2Wk9HiFEJJ96PMVWke3VdxACCWuiwK3y",
  "key40": "55SB2jqqZbDvj8ZBP4EciuUCxTSd7wVnD1sjnzzUbmky1TWTpJoMErNpQzCuW49gorUEGoPXEM1YyTvjLTpCSuf2",
  "key41": "pvHzjK56QUGtHJYAUZ4QNE6yzu21Ndp63xYaNZFE95aix42ALejB3rpn7d33K1hMzupF9YFqYFTP43GzEHuES6b",
  "key42": "4qHjMgF1PrsphHcJnWgtbV3iPm9pBhJcNDSB39XMqTkcbVV6fwNLm6bX477JrhUWZnPnzCkax3ohSjF29At84bUa",
  "key43": "3HSAmZPPXubc1rnKKwRxJBdz9wk4fj4a6hRbn98kci7YHHNtut11YMAxxEF5CWuHRhPA6uf64zjL7HtTFR2wDpa7",
  "key44": "4R7L9sG3cXrnpdnJL3jvvkZTdESd3K7HLbDcdqzPdsoLbsej1FE3S6v4tr8TYk1J73CuAsrzPkDkZkoqQERmV5JZ",
  "key45": "5SXzsHEBS1pQ4zai9yfUtsTvczVmjPmsjZrsGGu9Xfkdfe9R1jYemNsnsS7j6bsMdkw7s1mkHD7P4XapSbNUvupN",
  "key46": "5YzU7dgiXbX1BTh9KR8YH78RzUBtnebZM72mkTGgTLrhkH4oScg31vMgsQzkCtskqe32nJ7KGZNaYq2ax3hj3JWE",
  "key47": "47qVfagzXxzD6Lht7j7maBA5UmhVuHEyPck1FC8kZpejJVAjd295kvQK693uzELPZMQvoVdsnovPmujFiDdExohf",
  "key48": "124cSvmfRZspYp5k3akSKeXfeMFBDg395LjdznXhCNjKhHcoR9Brefw2incLz94QeZu9KpSWumEACSDgFypzvkGd",
  "key49": "4KeJaFzvvDP412YiHkmMCzEknnqVpyBm3JF1mzRDvbtyRwS5jpo4RADsT2Ai77akNPtHXzPK2U8iY3ocHEMGVHQ5"
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
