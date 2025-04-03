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
    "mvZXgG2Rv8cHxciJYR3cVg5R8FWSmXX3KkYsGm9eGNwcqNKbobNJMWbC4PNXLoPNCkAL1ZfijvQ7yPsia7FsnQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dAriugjXqa2fwRRjqmGWhDFzW1yxTkZAN2Qp9WYFo3UD8ecPrY24e9zqC58hvawFjH6aAWL1KMCKZhBrsLLFtCK",
  "key1": "5XwPkxXvvXb9zoFybyEa1qu2rtXeoGKK4srHWWU5916dCYUmyePLugWpWd8HWAYCjCqZKZq6F6AaYcEy8ukbrexs",
  "key2": "3acinSzRVXSnV1APgwRKn9QLLfPzPfGQC2mgbhfQ9yUVndF41NScUdzb4habU7UtqNVWmn3jvK4Vc3atrMBis8Ry",
  "key3": "5xx8VGMLQGBfkvBVLv7zU4LY3Hjw9HxGrmRjD5RrJewxCtLUwfTdeFLkCjqY8ie3erEfJG36e8vmk8QhwxmGMoQ9",
  "key4": "eG1RT6C7LGau9qNqnQ98s3562mobr433xFaGNNcpDC5qWeiqv6abc6DeoFYz8gjt6zC8MFb2qeCfxStZbNxNfab",
  "key5": "3wPikzoP65c9ASPmcLuUaxPH3gygJnvg5kPuBVVzYuztqNuWfYRZ4QD2bANca4zKwyna5WSUGStMngMBkwLNRgzY",
  "key6": "4hLWuDy76bBAZiHntrKzueVwpeTRtDHh5WkfG82Q4suQeqdgwwvMa5dQXMVxwaFHf5GoXCNiRmQ64bGt6xuqMsnC",
  "key7": "2LvJTKtQUhE87PtJDTwb63Wbe31bWvY9uJspMm638RHumazuR2YB6Lhm7GS2SRSeGP72Rv39FjazDGKyKjqzjBYq",
  "key8": "5ucwdQxcWvG5pF2iKDq5Vr7YVaJVEef2bk6ewn5o9vejQQsE2ZSm3HGuPN8YhG3s3mdPCZ7BZwFy8GD6kb18zjk8",
  "key9": "PUQnaNJUB1Zx9Mc8DFGn35eyCM5sEhCrTfLoL3bMKFZoUWjxsvcrAYa7x6FLfRmyyPhZVTZD5EV7jJniyynam4H",
  "key10": "ZyqaaeMQawahc8e26gVjCQ7WJDxG9TNG7enqkdNgJFw8MMVeL3Hz9V6tjjuFkL2ZyvgWRYH3Tm7sgm3xhRvd69a",
  "key11": "4aA25txxbuEYofpTUAsSypzdDdi9Ee99nZEP4YmM3YsfeZRufqmhQALU3dk7LDFP7ZozKpiL63urqhhS4Vx4rDWN",
  "key12": "L2eSX48ted5wNiTzMRCeoC5HM6m2uohoBxyc7PBGozhQA6MBmjyFF1tVb6dtJ34q4V8xJgNwhdxFC3zfxQkfzjx",
  "key13": "5Yib4jEMBqNzX7FpAjjWHfZSwmH9iGiuQpFWX8fMj5DqyKdqVYihV4ACcrFnMHGjpw4nW2EsYRix194GvLsSdtjB",
  "key14": "53ZmBs9dYeVobQYLfufWQBsNaVof9aSgpLPkcfp1ZoDgK1vcy5WL3bQD7zF58FkhFn6sXUTkTKvYNsnz8EFZ5Ld1",
  "key15": "2VZXPgDmCNFhxAm8dYZGiUM1YEs647m2ojVjrhHYZaoHHScYDaz7fVTXEWCunxwx7vLtHhibFwCtxa6gaxjHY8b3",
  "key16": "4tGcWRMsBRwdLBLQdWkB1dXETzW35rik6KfdnsvXZnnXgLGyeM7muyPpiVZEG4xTpjSyWmE5zCbxqDrBvuPdobLt",
  "key17": "2LfxtRd5S8rCE26WDHnUuH4ZfH8GhPfj68kRWASTApNkGs4NpZfrpnsfkRh4mZSrdfKmeXTHt8Sqps4FLXVxP2og",
  "key18": "4Q5Dg3doS7iKP6ysd4hrJqrqwSSwCjsCQyhiyxpRcAZRrX6DU7zG25PPFbR9StfmDWSVQJsmquXFr1n12H1NVkeg",
  "key19": "3QN5Zq5rQjPx6Y1Mxyc4H5xxN1ZpbFXCuE6rDecenyj2zwUJsyQCaLiAjAaZJTo5i8yjec96BMHhSPjkfoTfTbf4",
  "key20": "m6dkyYcmohqfJmVcxVtxnY5qd5toFwi8F6d1Ndi1V5QxFD2H5NfMWVSBTc2kfFYvnLpqVNefa7J9F1KgB15n7rL",
  "key21": "4pmoiJzf1eg2gxRa2JstxnjKBhcjt3VDNXMaJBdEgbXTbE6mzGY5935ZNsiJP31ctgCRhuZtuCesxmRDUouun8z9",
  "key22": "4677dUXhe96JLmfbCLXpjfrCPQMMDfhp4ywmwXRUSutyj3YVGAgqY8AfoqyCUeTZ6DQdQc7ZhCZ88Nx3W4BUWg6C",
  "key23": "3VWso2XfEs2v6ybABd9SsQPCy76CQswhjCBoscPpt3c719qJSL12eW3NSV5hfD6xasbiK54KN2TeLT5C3ghXDwxH",
  "key24": "3YBFamyqcKe9DUPR3bXssaXeVsRg3p1qHfMx1d9HvA9kxPBYDRfm5fUGAa31vnp4ASp5madQ4YcRtacUJwTH8pHS",
  "key25": "5kMQSQwvP3j6jahAJg2xhQF1efefGXDqvBwzuo8Yq5rqgYUUPPF5sWF4LYHQacyxsdKcyR2fnBDFwcSPDhc4iUQp",
  "key26": "3E5dWbRmQtACZ3YEfMjm4Vq61gMo2ezVe1NYmjaHY32ctJkmztxzYrm7sHXcuvDRzQD2LTAFX5yTx4akQ8Z2Bpt1",
  "key27": "4bhkGHc4saPEFYZbU4qB2PmqugKgCNwH8JWAc8ZqQy2GWzPwUazqt18w12ZdsfduBVvkMh1F7GrUxEFxMfWrbP2F",
  "key28": "67bhHP3YVbaANAHUFasqQdqoioVaiKKvAYwjVudn7ibDA7HJnjiA2icbBFqCMbU25G7JC5mxbVt2YBXQnPzptnHz",
  "key29": "5SZfPCK1LcJorbPbCLGVF19ti15PgTuoMrKHKB73XER5EE5oNNC9fEwGLtzoY1oHHJjKALPxoCZMQfUubAiqMBeR",
  "key30": "7vFKahAYJhzqM9qQw1S6wcFYeV7jnZp3uEj8verwKimYZbCog7EGG28ecZUyu5NX29CjBayQgW92bdiz3wxe3Pk",
  "key31": "3sLeQrV8AVuczKtH56rfuZzMaF445c5EnKcvD818AsXHrLbBh67Raz2uBKNRa4di7TvLJGDPJQd2o29xYfbaPSvJ",
  "key32": "3ckVFzyTBwYkzRAG4xaCmMrzSEqpVjJTD28ZNnB499Mfsou2RoFHfkZaPNkxAGXzNwqaLXbRSN4RmTwiHRMkdJGA",
  "key33": "3tTPaeQEvCARiTu4tW1RkofNuy3i4FrYKfMhptv5dS9ZP4D3n6T4Rrab2RU8Rg9U3ddHZgdwdrmMiYMzCF47Cn3H",
  "key34": "2o2JupQLeXd1D2tfLGhYGeaPccGa6wW1gyhhTBXtrF9nDapwofzBK7EnsxcMepBpwUvGpXwCRTTZvzVzqUjfefwc",
  "key35": "4vg73zKTQAUXxGcSJPSgT2ztDHhkEEjiw6M4byJq8WpNiC5VwiMGZtBiNohNvG9y77G9776A2Hzx2D6ttvqjxLBv",
  "key36": "5nJcQsotzYbuoFGZJ8po9Yb5Le9UR9DNQosXonf14yK9rPMp6gH48aNvcHFDcUiGdXbx3iBEagoNNekuVVufA3uM",
  "key37": "2CPYSv5MHiTTkve5kBT9F3bscTfHfRLAqwbpqdoumP2GSpTz3qyUBS9Lx9UJsZAtRvcEuJPBakdu94eVtp8iEzo4",
  "key38": "L6NbeWc7Vb83bBUM9VX5d2iFVrTDoNbSqh4jE799NsyVRoxRvy1by9TWWTZUWX3jksBaTaYLDkpkNCR571ZQELQ",
  "key39": "2Z9z3EkoFFJRyPd1BAkAikpdoJ7YJYbvjB3s8iEAGWKam2PAYC1JiwtEXG3oroQDwws8iUqcSAJxTnAXkqkrvHww",
  "key40": "5TvkABn79if4iwbys8UKJvvqjBRkkpSMVzTBAXG7rt2tjamdA9sJWMvmGsFrg7vPYrgFdsKeM8RiasT2HQtmAZ1D",
  "key41": "2Yhe9hYEdCu7rpgBgek9hPkVG7gNzEuDqxyL5LRe4AzQ1snoAMPjEVsWtF4g1832NMSTYu9JCcLcF6b3vTsbm1m8",
  "key42": "bJdNx2YFEsJX1zoGy1Jg2FxFxp1qiG6FhdERGpuHjwBjWM1gNWS9Kd5Axq8ecjpH9SEitsP5NRh7WmYDUYd2Rb8",
  "key43": "5b9Wf6HtF5RgzRwBq5Y6ECUSr4x6kAUKiRWus3rwyLx8q9pLoFEHRugwbjT31bXt4pKdVfWHMZKe6cAJwZVVKTE6",
  "key44": "15RF9NUr8goZ4t4RGkSEfH99a63WZnBkF8oBmYxW77DuFr1Fz15fb3Lu24kV8kDKUXmYL7i6kjshA6jprbkr68a",
  "key45": "5XweFoCmWRUCg2tTvfGSgdrXgF3W6CNPd5RMB1E2LaynXm19zTHfjYb9fN8oh5WChA6RDG8B14ZmSnTbZoGbyjcf",
  "key46": "4AF4WFcxMJCGdWV56BvRADT7JGkMcz5AX1Qm1WrKibNvfLVLcXDZqZ7s7fpKg9Qs3j8STy3T8X59Ek6ECoFaCTnV"
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
