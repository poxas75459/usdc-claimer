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
    "YYrv16QV3i89j1VufUkARSWaw5SpnPnUagU7s8e8diGTqhmDTmvA5Puwfa3cL2LkUoJpN8WE4nBNKi786HRpLbP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GAD7xEa4NpzPufJRgGKZb5pQ8dkiUNVZsSpw6jx5JkbttsMcBddHmUbaNQEmgVmBVLi7KTMnQjAegeCzHSs7miM",
  "key1": "5poCBy1yTjgJr96vpqoxbUbPY9MnsQNGJWfFK4N9SqDQTyaGK1ZKAHLw6AYgALXcYEiSgsFgZ2meLCL8fpi97zsC",
  "key2": "vbxJeDeJ9Yjq2KsUnekXrWtHpgA7BRLaHmBScMByw16SykBsE1hgAKKsFeA7bDnysEZrTdsRufhS1HzpgC7EvP9",
  "key3": "5zfXZXisQEkHtfhwimq8V6rHPqFHQDjCGK8eVdWHC8Fi95rSEN1FE1jtHV9fpgCBbwC3eF3MhHoQbjrnU3CKWBPB",
  "key4": "kcKz5cwosv5eMhwA6ALJMJU3jxnsxaVkWhWZ299FdiviencLuyRaMk71JSgri9UqS7sXuDMqd5fYdSXuLHD4Rg8",
  "key5": "23RKJ3p81eL8bhNEcriLrDKsgcwZVmTFoJqFkXwtenYNED4CZz69ADz1JwP5jHspJmjPkh6xMReTyn54xMdtgri7",
  "key6": "3LPZ86Sp7Ne83jDZmLsfNXc7HcmiLvy31DGx2znhMraw4yHF85FF3uuKjDqyHtwrMSwxrxMUfzVVj4tPmFxHGSLT",
  "key7": "5NxJtdKd9qgu6EKs4BwM5DCor3Hbv4uTwYiKtSDcQYWtgnpcgNsKm4cEqfuNDeaobtmVuhh3R7GoTrZS1bZyHYkN",
  "key8": "ZSppK7zHytJWVFv5YAehXYQPVgCTJMLovz2AW8VR33Jx3hj5yMQskwqk1kLomSu6qAxAsVygq18fTyRbKPCZ15B",
  "key9": "52vmXkpyWTTztpNMWa6gcUtjbS98ad5BxqiPBikx8s5J2FP8ZqjQFc4rrBXdSkR66AW8pCq8bpsudo6GMscvbPNV",
  "key10": "V3kFniEiWtBak2VQULFmvkq9VdoWbSA5TArfVwqJ7tqaKA3LH6frtfDeGqkothMMXJo2upq4KW8PMgfBoNoeCam",
  "key11": "3JvJsuhv2F9Gtf9DAgRHkoecVkXZy1PWx9boQMB6svzt2yiUbgKhgH9jGpprd5S5sCq3ex5gkuHKCNeinB9ybHSN",
  "key12": "2ztNrmMye1dizBvPWA6rFSwzZMxFkLwavfs5NNX834L8MfiXGc9fW5txWiECd7m3wi7Vq6L9o7S8o9eJh2z6Lff8",
  "key13": "4tsgPp3R1rrSFA5ogHSc9J7QmtfTZ8HYWJ1psj9VazRWM9B4b63ASearwTffb3Nsfsmvn9deLwBA89meZsd2u1qD",
  "key14": "4kyXxewfGJ9bSK5cvryxYJKa8hnjxG8bxSniHWxRATH1H1UqF7JmdSBM9RA8EwxkeK63RXPfgfKdWB5L3jdgjsjX",
  "key15": "3h4wKmXSctB2Kxwtudi3qBp11gFeZCk44uDB5677yKqVwerdEAA6sTpqz4xKuvrfFknr6U1KQpffk3mCK2ecqs67",
  "key16": "5uDm3aDudpGtzt7MgiidMhnUJnoxkjgCfQ52oS9ztYdW631W2FUj9mmjB1V4fZJfE5yFTX7QjWjTNThjBFyR2vh9",
  "key17": "4k7XjZJcwiKJCtVRETb1Pz4JVwrjYZGtGAi6u8J5dkYc7rU76UC2LT1mBnqVKaP4gnrgqTMskH7ELvHdnNfZgoxT",
  "key18": "4hQFY4DBwoxFTi478y48kUaitqzgG1nBHV6x4dvrW59dX4Jtv9Rmpuz8uuzX5u5xg2tT1NtyJbozZR8p4y6fsUyt",
  "key19": "YAasdtQjdook3MYxC4f9W2LGZsoWyro2aPtaUuN23am8erekTEd5cJFqyPo9zJpA6VVHYFxXNmMw2jQd41EVmpi",
  "key20": "3drHCfKqNha3AxBoGKEGXj2QurwQrxqtuahQ9HXDmaLdMbVkFNYDvfJmz6unE2gz4bDLYeq3UUzY6vC19fEGKn5W",
  "key21": "36gVQ9z315hjEamm1bBqooMRxRxyD3kvwpCcXdC1RLzUPCHeJSrHFeUmKcKAMKvv4CV82bMeNyr8tJKcjRYK1mbD",
  "key22": "5Rh69RGJMViaEYyGX6nTnGc6HKNNb3pmtEht5XPLs8pxo45uJQTiFs722buSuAC4v686DNp5ampf8J5vHdKDTk74",
  "key23": "52Qh643QTT1gSRyayZVzr8ZtzefrgjurTMn7g7VpHm8GYVUjWeHgzK9Zc1wmWrwyvPyhEReNLvxbof87RgJCzTDW",
  "key24": "4WyVGX79VLpYZVqRQ2WEicpMctRVU2iur3oiPdP5zHNygpLHxoq1GcemRH4MRsNPWJr878zTaGQkqv5Eu3FwaC3D",
  "key25": "3zMquRcEyjRqqvnfEnYqKkNrVpBQigk3SJByTC321fkYiAtSAaTEwnGgMjz5pugdtegrGqZbGmiWHYeNoj8rysHu",
  "key26": "2QG893g3KcpV33EJtVt2ww76xd4MdVgywNEG28DD4caXm3yS7yDxBCUUnD68Dyuu7umtfePpV4gnHv4w84TNocg7",
  "key27": "2wr8P518gXPW835WR1YQ5njptDrDgUMC7nH3Rxwp6Qm4ZmD5mSk6ub6Mp6PFzv3oMhcgYdpVqptcvxZTYYZUresz",
  "key28": "5myftPxdXNPqZgjyaiYjATVYVE1MgWQ55N7cTTw3W1SrdA6EKBXoidycFnNTiivfziRKuzRSC1J9k1yPQLXZk5XE",
  "key29": "aYvY2RJQuV1sSBBod7sALgAbGgSZNGyhP13nFYiFomxo89V7JtmvHH6E9H59umaVarmfbkAVLW1U4JZYbnPGyJX",
  "key30": "5qmKo4SSmnquMaZScCLbz5J9jpyVJcjp673HySZYxxr3u2YmmXV6dDjToeoMkVy8G2cHhdP8hBMzR8GjyRrUfpH8",
  "key31": "2fircfrHqyY3Jh6xiQukfhWmwVLm6smAtCezHM91eUHAhJPjVKxi8kfUdh4G1CpPHnwSu6SwsJ7LoYCqkW1S5Nm7",
  "key32": "2DhiGbSiaf6E9maSRpuqFd2tSRh7wvtpbqUdyEe3goTjAAbuYEJoZBVs2Cq3iAYwNGPLYd8VvifZ666Lgegx1Cjk",
  "key33": "4y8SkFgwTtxFdMNRewdxConJ2ojR1NWb7CEa4EkHmVT2RidMXwkhsYiHfirpvCzsPi11Yiz8CrUxJYJUopWUM5Es",
  "key34": "5XMWPiZCxAEmkoYPCTPDBz9zG6aKLkBtbPmTEA7XXxNwFTAyzm4PGD9FnbDeq72nACDziVQpULLPLKJToG5SfNtf",
  "key35": "5W5G7co9U6AjTqqMRFupbWLTKthfe3ncZNdineyc2BrWDVfq8tpQZoNBRWJkiF6iC3fZr1VFwfPHV9MAoxnSKDmT",
  "key36": "3wkMLj2o47eyDt4hVffy8FF7GNDSyBoGzxbhWYdNw2CyprebfYLadt4Vd4r8FnnbqVny4hbBwsysUNhvNNJMyrq7",
  "key37": "4Rq64DHDVtUgADi8sAsyFCmkAyMV6pm74AhRPaz3thsuBYMJCf5KNRZzuXfniA17QDGfeowsUwG49MZMCHRbnhYD",
  "key38": "4fDqcZJr4tY8rFn2giowAYvUBvEEywLYX4Go8G5661LdWyxFSFcyJmHMzMmUnAVWzP3gePXcmkmzgPBenftDJxss",
  "key39": "244FaqSeT72y4DrP977w34fCXptRiN4HYuEukbThS772cdw5uAVPn1qNEfEiPhc819c9BtG32FgwxFFxzWgWC5bw",
  "key40": "5zQ4qyCApH4yopTVWFrkiXTmY9KJBHPdyU3yc6vuPehqztQGZz5md2Qm2m9Kc4K4kUDFKdUzsMh7ra4jV55x2irL",
  "key41": "3ZBj8oT526fFTJCfn8xuoibTAACQnuDmc6Hx3sszar6bHhGXZHq1MdCqNCYZgV5QxHgs3jBytsxC5MJ5PUzvWAd",
  "key42": "2eFh5Qt7TWMxn4cHqqH6e3L2iMvMbD1jyqGBhgfNDPaBX97GcB9yYDoz5x3rpr8k6KwjM6niBbvDPDgzBHcKTex6",
  "key43": "JT6e5Ej82NUMoyYhHF8R6wyjmEX673Posrujob3AxZHMnjzbPuAXYq9acXAHQZ7tbFuVo6PsLhDWzDsyW3v9bh7",
  "key44": "bY2XLW9qU73UVPPo7ZU5VundueSmcSqKKgB2Gd24xDt5MK5CsKdxb3s8TxwynNy3MSS27zzVeQ5PPyRRfvGthQp"
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
