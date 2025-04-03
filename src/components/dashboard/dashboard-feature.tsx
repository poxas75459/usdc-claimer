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
    "3n145GfQACSMVNjBmMBnbw9kKnakE2G1sUGP1Cq5WLkGbnWHswE4wWCVJ63PKykXCxcUBVgdfLbeR2e2zcic54M5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WRWERAYi8wb2Pke6W5aDmFcMAp1ZadYWHXmwQbJzfEqKtPJG1KXc1Vu8uWvTCG6Y8UDA8fwZGKHHE4UDYYJVT5D",
  "key1": "3i5zE4Z9nSqujEScTcyoVXEnBFa3CebWFVXsVap2YU2n1AgbxFe2toWRdSGemxRQon7AiYpsZEwMbSjeRs8VwTX2",
  "key2": "35kwNWEx4X5YCH41e3uB5VurByuBf89pfXhkCsQN1kpmnruDiC1RfPPCupv2X7NmeSxvxxVExWNuraE89zm6hX7P",
  "key3": "2Arnyy5YdPUiKEx2ihybb15qkx9To3Txsovdga5pYfMuntui7P9MQnRaeC3jz9eQmpD2VeDDtJVbeuhGw2zkKCrr",
  "key4": "43HY7HgRYjMXMQQCHB76nMzHDhEM79KVE72D16ec3eQhuaqe4i6Myf4JhFzPh5PdpfcFnzjrsBYB174D4mMYJDjG",
  "key5": "4roHZQvih6Ytda8sbGyF9qdaM2QDjiGmetP5TBVg3uh61WKHeh3dNj783piPYWjU859qR4hYUAiYmwN6jFTmgykn",
  "key6": "4FaykL2fFx9XRFEcYUNk32TYCJ6YPV8jEFzEkRFFpT3tmm1nuXpoUpKLF99LNkmj22TALzZjyo4zLfVX9RPHDWEi",
  "key7": "45JjeDkGoA1E8T6rbRe8bpCKuVwr6RL51fWaXWQnN4G7r8RKefPs5y6ZouhMVmX8t3ijgDKZBdwhKiPzXKaK3tJD",
  "key8": "2k3k7v4JgkfU8AZcb2b6XfmSByNXDuPEPxUAdKHsyPFqksJKZZHXusE3rdAyCDFBM4ZRKq1gdJyQ7ZxHzeg5o3ng",
  "key9": "63TMBtBAkmPPBoyiAwPBDzQjhd8JDoJRVNfXsmGx1fR4cHmmzZ1xn2PyVcFaX3dJHbdbiUmXawiQLGzkC1uUoa8c",
  "key10": "5whJtvZjENqxz3ZkiwSFn8Fqc66t8cmBrq1B1FXJgw4rVFS69H8L25adWx776xsLxWDJQ2KezxaTNv769Y4EuAES",
  "key11": "CVcSyeUVaRrzXBiAgaMHSHmK1tJmxwhudhvhk1TjMzKVCfhjM3t7dNF3tr4mwXvSgjdy9Z9SGcaQKV3wFzWywJx",
  "key12": "5TiowUv2sFQrcJwydBsRxPyBCpgkBVergH3Ybi5dhgn1pbecpN4XCaApVVzbtMKz3oq9z8YgFYQPagSg8NCqrSqr",
  "key13": "5fUv9eVZzikvGuL9xShBQ6S9LDctxe4hdLGRLh16c3V1wCWPhSyxp7KnHMkrTb4qk8hm2TSEnyBhk87zf8JyaxJj",
  "key14": "wuBMJQfE5CssiXENoDBACEUoQGrDWmfvSTaQVw3nH3anWb8CWirEKsnENGwboUHrULRpqmKKtfKrNMzPVm1SCTE",
  "key15": "4Yi481FDigU1AfjegAm8aEiC8dum8ZQAWdEqLSAL3icfhVgqz2hrYk7zcW3pSLsqvao4o9e72A19TCaUNNRKgvPR",
  "key16": "JiX6inrrArwGM4CErRH4v8jSDTJ18aakEgQvSQnZRsNKM8cw9X57s1EL3y3hy8PxKxuUfd5y1gcMHk2EMXnB9FZ",
  "key17": "4imR65rK42a3oKAvD8awGnzgP62GSwyMfaiSsPvTNq2KK2wQCUzxJWoFpuLinTHsa7YN1Ev73fFLgVEETcpyiSPS",
  "key18": "4UNsSajEmyoLsq4N44tMLL8oa8MsjA41KYzeEKZMDBphMenK7A3CCLx4YJgu9kx6Geus32JuKL3eaJrDhzB68LPi",
  "key19": "9dXxtzPusQquVPig3tFkAtfy6KUZ8HRuc6mn2MykzC4vKJBNKYhbzKDR4V4AttzwuykbHTfVxguEiWSYCqKTNxx",
  "key20": "5bRpXCFRGv6sLz1VxN7GrA47caqUXkp4KkRxAgK3GVNi8iqSQh6EAKgtnYDQQHGw6vGcjFSD2x7w1KFdCuodkqpP",
  "key21": "2dPGhKkCGvVSDc3omjexWj9n4dA5NfxWYj56fRFjJ7udfpogMUgGfsyaXwhvK8UevVjjw6qHSEaVP4yoBvBfSp4W",
  "key22": "27NSV1RfRRAqdkojUi5yMCpSh95KqTmhGiHwryHNUAJsmFjL9SvGL5TxTwJWq3oFkkHUrKCtevVkiyHrBKHMnUv4",
  "key23": "YeUDT82vnBsToTb1udf6Qy1UTHZT9wX59VWEwrdvnrVjVjzubrpjSqEAnUwVBhvH87j5iyV99bTq4dWRrEr4K1F",
  "key24": "25yjHMSkPoU2A5nm1Pa3kSxaraV8jVVhVwLL19oaYY2WGfiJsmgsn27ErhNJX1bfRCatoYv3BM6a41ZuS4dXevJv",
  "key25": "2hTYgarjSfE1GJW499aPVrkA1Hdzm1QdnXTpWpRwTXq1gss2cZfPYmWbY9b3oeizauFJanKxpLw5vwk3pSAG2UPR",
  "key26": "tFByjTWcZcxQowSNxUZVL6DVxPU538fzy7jeUpwKJrFFheqzwtugQacEsoQGYKc2j9j5gCPTfKFCfGWKTd898oA",
  "key27": "4PjWYZttNhaGDszrWV8JUSy6wucqY4aX4bxtDz2WrFPYVcgT7vm3URzvFnWx8An8ny3D3yJSMX3eCPEa4SDkQ3L3",
  "key28": "fzmqZBRyPp8vP5QkpFzuTbJR83RWVs4MsawPXF1ifJ565XVDDovej7r2CoCJYmD65sCuR3peHzAiUMM4b2XbAhg",
  "key29": "CMcyPCUKSsrgMzKubcomvgm3wZm1Q2gHryrV7krh7WqLsjUFYo9mJiYkkoSEK2zLuSeuyt3h9nmomNS5FZxgWja",
  "key30": "4amh2h4CErxDPYiV9E1JRVYVAvepPtxyY19j33QjZn99XDGkRxk8cxmVEETJUCa6kgavo9wbe4UizAiUaBW2Jibc",
  "key31": "3ekhEKT2cxkttLY5wBSchP2u8BUwaT53edgrfZpXsT37iXUNGuoSEm6hpCtfkJ6bq6J3mQSJE1B8kHubNx6rTB4T",
  "key32": "3xzn1m3WFDNQvo2bAG25Pv2WBKeT4c8rWYa1aw7eiphjy6RGoraygYuwsfHTngWj4RH3n3oKoL3USaJ6HmLd3hqU",
  "key33": "6293X4igEZLv5MJ7is7pSmsdzBUKUV7TAD14yj6NDhKpWEvhXCPKBo1bvtYmRTqe8W2oDVj3kdC7cGGkHEN7wmxP",
  "key34": "2hoyJxKPpoa4RejPuvmPqZNUsWvF58iAnDNrj9XJTBw9n4c9oUDetn22MjNdVc153MiibX24DQADqs7nByDmVfCq",
  "key35": "39VYkA62PkNGVtoFkcnwd3RVMjdd4WDizfTJjAnmvP4psGTepDXrCJYLS3uLExjvHuSatQ4NGpCtP6q1yC9V5usj",
  "key36": "3pftUCH5KfqEEqJQyrkRUqnDDYQUAyjhhiZKuqEjgP3kjELU26kED81xjPb8JQ41MKeHy6XuJsYqbMofnnqWHB75",
  "key37": "4ah59EdVgXQaZ7agUVYJZzMqXr4x6o55TVdGq3hiZ7HvrkDgzEDKih5m51KYFaYDVTzpfz3MgRgTsfNvDgaktqA6",
  "key38": "WzEYjUKR6Jz4KxowEQtVhBVYeqZH7H3wLm8TqtmiMMZ72AfmRdz2AxtvrWK9VjuLC2wEcQd8iGpweNQLrXKvJHi",
  "key39": "2NY4u6HKp1WTsQ9fgUuJrUEugNVUinMgkdVHGCvLHX8DZ93CtFR3NPmoYRB99XPM3kkW7VN2Zqe1cL6UvT2uSHDZ",
  "key40": "446wwAyS93AgAHbUUUG2bpwzhYptSW3Q6QHJE9WRqG86oschdhFvBs7ssq5rUQkQvsBRBNGqC1QjpvKSFdGr6iSL"
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
