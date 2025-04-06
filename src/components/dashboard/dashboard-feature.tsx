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
    "4uzz1VB71ceMqHsBSaNq3M3u1DvnAUmDeEcSberwQxGBX6jorKTPQ1wzFuBfktMNYHhbgruEQQ8qE1yuDc3EukKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RLvy5YPvHwXWn4nJYhX1YFNoiBStSZSeGWSaVMQ7eaF1ifFGm4BbHwHbqkEAWWRHT4yWFLZ8xLp6zKxLHjxv8Wk",
  "key1": "3GNnKthuJfkCNTiMLvDWuYjDPQqV8h7QYk3jFzCyQKTayAEVGerAgUtTFjeiSd8Ns3PcbLctrRRAfJAq4ETAp7XQ",
  "key2": "feefqyGyzRX6uptd6dpGypXeVVFEQRGuTvsoXyrhcQTy6Gop7jk1ZoPGdahpMi7Y9kWCY8KvxMvjD2bS9dmXXoy",
  "key3": "D7CrqmatL3CDArDDwT7VT4ChA6sbk4i9bqfGbpcKhmCcmVWqJTzdMbnat2Pgn6MdSTh5k8SesNmtNyRBpAJXfYp",
  "key4": "5ZWeiNfh18LJsQayhpDN6hmbtBeKo7cpUmBx2iU1dGffqfNztY9M5ZYvGg52Ai9CqPCX3VzC8AY1n4ZyLDkphtGM",
  "key5": "2vcNRvxrjkdn8zK5nMvjmH9KKLNLim7aWLUPZWwuqfixXTFJMw8sTfZsGkJH2kGQRzXY7iBEzWhyf6cFWLrGqzSH",
  "key6": "4EMf6YyJakXeXf21YGJfs6boNmnGrwUwN3Y7VE71GCsRWEXKqqaQZBEnUNwxvVLgWHDvoAsCRXEt5YHfSxdvarqQ",
  "key7": "2275cKC9nVKeKtxymxTM7ert8cDWBgZNFrVJGorDTRELMA6KzP61ucPe1gBfAHzWd87SR7cdnBVZM8dAAfugpW6M",
  "key8": "R3yTAwLuWjZK6x63ZXzZBp5jkox6HknWujEj7jfJwtDt6jJeFGj7ey2kB4SCPCjmWCVt2jthom73uJEqifTExiV",
  "key9": "5TPR6ehNmQofngoi1VPbEmsuKvxm3q31szRMfDJh8AjfYtkJE2QNzVb8raaPMM5vaUK5rYMtdnLoyC25dbNJNLbs",
  "key10": "3rodMjDpfqVknX4ib5R8kPVTjNhsNz2zVujYhiVE2CdhRUFzt6pNxG4UzKqZmc8mpxKyBNoqBV14ZHS22LHyYRQz",
  "key11": "2KbTyVyrr2bX38BGEQ89L45xw4xjWZzgCwujA1MQ5uVb85WzPEe93cVSBQqV6sBqdRcEL5jqjTcs3iZ5dkqtpjiQ",
  "key12": "Dvy3ersPRX57EVw9UYUoCSaDz1nMy7t3ACVxo3WgkYt6jkBHX2RGm4z8uWDZAb1eTG2MhNf4kNG8X1vdCsZgGRX",
  "key13": "ixhto9k2JFb4XMLKGbDWJUz2VosPfbr5vmrzaxs3E8xqfqi9a2f8xu88ExyEEdqDiianZBSbMUBFFCT5veMNFdR",
  "key14": "tAhgpQn8vg67cUNE5VL2SKdJoXLtLfMH2kancVC1ZwcCinh7RXE2EFtPjLJKkfqKwLq5hiuThmjNwNoC3UqoG6J",
  "key15": "5iTAnbiUGMobkZ46Lp3Fqy6yBgVKUxaLjf5ooReLoFKkSa4SXViqDLJYTLCexX3YbnoPPu43A3ZqAzmhvVQ8MKC6",
  "key16": "ESRiJ9ZyDkLzXESabj8zsiVkzHcuYKd1a9ToFndw4G1syf7cG5YcsWGEySoMgLTv72zL2LvxjFd9QG1ihES593W",
  "key17": "5sALLLVgSSic6qx4QvkATt1138CPsVJDDreLG7N13xDaRcV3RUymrPhSpo2EK7M6yJevjU7oBtzbVpeaBA5Jh8mD",
  "key18": "nByYvaPuMXx9XhGPLerGhQhSiaYqqoL5obMEoLJQbZho4VgyC58SyVhamYfmhHCVMREkXvr3wuSLWw9okxA9CFC",
  "key19": "kpZAt1HNEJkjriSHruiTe17dWySkH5kwexCfTvLBJNg2TvMMNer6unTuBCY4LFpcYVSg2oqQGuhbB4V6ZYcFNeK",
  "key20": "3YKybc1wBKXRWFFgW4XGqdBXZAJBysxJJZ8LuhNSvmmRWYERfJ8Fo4fcbdEESzvj4gYB4faNsja2rZx7dmvqJ95S",
  "key21": "5bs75J6mqxXg8egizXAmF9oJcPKQqnxLuUzZWBUWsByNPWm52D4B7H6SPnitAfYUTUWnbDH2LGEyiJzgBNdG9Lg1",
  "key22": "4mrUMNKXPLYwX7ZM3WPKY6iBkpm7AMdjtbGquC3RUixZ72MdQWiLEgR5NKHGMPrKYhquhZvMQhS5Jy4U2FegKFzu",
  "key23": "ZUFXBxcWzkRRFfzpCdFoA7h1ibD3Tj9HK3arHKoAsVqmBP5Hijr7Y2shD7CMVs6HCuQSH3H1vY1Ay2u616B1hzq",
  "key24": "GWFahQ4jy5UKesDgP6DespX4CM7SNpCWhttEiAM1g8paE5adCSXKonM9st2rjnfToHCo7QF26UCEz4Yi7cx8Ggq",
  "key25": "5JNDSjVfkyuhMmoBdQjQP9GyczhX6tC9bTJfa1Z1xZo64RxAouaxAajjJkcTq97aV88Tq7oFsRPw9yRGDVM5gphx",
  "key26": "3ErznLYLfEJCkep5TKiTGpcMLrDqKQd56RHNvTNFXFtMpDckTrZe2WUgLAQTQAKmBmcWac8kzjCRhjAUEsRyeWGN",
  "key27": "5tNRhRPPKs5idPbxaCvKFG4MrQV83uoAPoMxrMwian1WKT7s9jwvxXAqBuiARmKBMDd87BXZu3Meh2n2gVGqYEos",
  "key28": "4jmdDxy9x37oY1qa16qAvLT8hcDhTzxxB2vJd95UFNVhDhodukQV6GFZcUjGzDW8dBMqycXPeCLFCxg5JUVM1D8A",
  "key29": "49m8kGhqKGG74xMB4CtgNEKwm7LHE9BErhik28QRcEApDxoPysaFZctas7hQiS3DHP4pZsH8vTHa8ZXi7ktL4FWb",
  "key30": "4egiuQpT3sh24Kq4GqjP4Zd54Jeuzt3a1fLUKC6DrWkMRD3KnnKvL7nV3gMWmftxnQi7bpuVUZDVSmhXMwUDBtBn",
  "key31": "4CMZn7kL7xT3EJ2vgzQ6CkMvCY1pp2YxowCDA21RMe9wr6G277aJcZQRrD3BbyD3XtBzwdwcgNFW7LxDCosKd7Kx",
  "key32": "2vXmR5W1QDTyx6Bp73HuM2ZftWFiqWGqjdHDKuuwhokCfmpbZWGCgNeady5VH2oxPck1kNn16MYYPgYa5qCBv2wz",
  "key33": "5yU6WR99DgtL7NmJteVHCWauxhGThRuJociyD2SRGd8k6GqQP7BYmXdGjgMwAK7Vj4HBt5pBZBaA46TYEFerr42H",
  "key34": "3Q5xnnKhntty5jSy1Q5395qn8GN2kt5DpbVGk8btabqkZN8kY72KvzPH6KX5QsdNFCtRASap1oZQx7bt3WEfEKLs",
  "key35": "e2iGAmVVxkQBP4V9m5UBR6otEJrkFUwGE37NRTJeP8wmPAnTVc6CLGjrdMMaj61u1bPkC8KPVZ9JU4ejdU7JRjc",
  "key36": "5W3HpG2YWmghbw8QZLKtnrxhKEuaRYqagJUNGZt6GcLMtzuTyskXBpieD6q394NoMGTFbkjp3siKxiK866hZKTVc",
  "key37": "498oFq8JeBVFq2rZVdTf6vdefxtEWiPGc7KuenWUhHVXTVb2eC1ZjnXUbvt87mPigmF5gm7g2nWKLY4VnENN9CRU",
  "key38": "2EatGSrb6i53VfaxaC7sD6Zp9iYaNHUHYKAZNLWFH2t6VQVvMKZWc94t31DbNRgMmPHBbC9wif1S5cadmqeQv2v4",
  "key39": "4AJYGDbVDxDxfzU7okgdCCr97hAP1wucxpVkBPpXvEScWujJfyLa7bpoUy2zCuC7yhnCQ36VTLmCPkxASssutNWK",
  "key40": "3eoNBSYe2HrTKC368zb9M1E5UN5Pv5k8fTZT9L9cCsMsnqeaL1eGVTEzDGQkzqwdKyqWmtXKTuftuvKMjJ1XV1rn",
  "key41": "4ttm9qv5W6Z4u8iujW1xTirHNci6RGJHxTiNhfDfvB9Lk3zpJoCuYj7imZoSUUMvpR5wQutaTAbYBdJQdnbBZwXa",
  "key42": "5RB7ccEKv98KXwf6KHFr285hKM1nDEPA74yMye7XTs3E8cgQpt8d7hqEUoUFzmWL5R77AjW65Lo3wjpG5VwhfhXg",
  "key43": "5xs2EXSDNy5yMqg2dcHhDE74bx4pvg4qpTFBnTKYHJTCG72dDjB8zLvG95RqkXyB4r7jv71kvmEHpdFoZ9uV2ZJ9",
  "key44": "55A1htZGxH37da1tvj1ztAexCqauU5L7kszCYb6tVa3FFmhtpDEniVNqGLWYJCekLb4wHaavpX4hPkMYAACDmub2",
  "key45": "2B9Kv18i5q5P8iwsnvMCH3zXFCENXmXj8wHm5hMMmErgaVnhBJBfNGd2VpzTar4bKsFkmAfi5KdoTm3rS5GTJJNY"
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
