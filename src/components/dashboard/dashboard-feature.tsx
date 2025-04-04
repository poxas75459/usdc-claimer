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
    "2u6vTnWx69uz9711CFuRiKPqCUFQqh4nmafoDfmauQeiWtYueR2dztdyxQSv85WAKzFXHWLazZfJijbKirvGLvip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nz22dWJvRpMXr132qF247pP3jFdZaju14kvYJQiXgrrqgFyS5VV1dtrYD4ZWb4GfyBmrABfF61QBNF5pDVuJ5KV",
  "key1": "4mBRT4w2f9HeLeU1TzTpQkpDapjUgNXAe3ceAsQ9qE8VK46i91kHD7EXh9CR39tYYC5XHNiG1BkdQYKXcXgHNiWi",
  "key2": "37n1ELSdUSH66eAUrWLdKJxpt1pgeYkD91ivyrE2bfLXrA96d9quZT6mM9a1xVrT7ds4WWJwDbfr9cfYBEQPZVYv",
  "key3": "2Utm7yDJUGR9PgSyR473xsYenVQwjmU7Z9R25U1DNk3ZFSHoeTAjJ9UTM6CgeZKigiZVejsBmGNFmyb9YEK9wsxb",
  "key4": "7Hg4frwQ827NmpLsFWr2dqSUjvbCoJTpNJxr42vYTZqX2Faoc9cSttrgK4d1hbnLW5L5q6GPRnDUAnKdBeLjgGa",
  "key5": "3fXhKnro7B3NBawwehqW2Vvpetu2KTE5YkJTW8Cma1SY2YFD6maMgT1i1EeSZqyubYVo9twKWcxcxAsNK6AZTZho",
  "key6": "gWKPrmFkYf9fGismRstawhMyxbx1aDMw6zuzXwbLhKXckmeMwdFP4a5AQBbJdNyvMg3UP1seX1W4SSSSWyNha9E",
  "key7": "jz4qobjUayCpE9nxozZ4vBCTdNrHEC9ev3i49sugLmGo5XP9LgqsnKpiQLxcA7RhHJH5UMeX5gcM8QuLZhJV6ji",
  "key8": "4NRsQEpYeNEQtfKy54X6dvDpBn1hSMr3TSJhHpxFuVCYpBbeThZJRU1dz4ocHEYcSAPRPLti5mpA42JhqqivmWMR",
  "key9": "3dkWvgpPNMw4xcotfstAZpHbFX8vsFN1AoH9NmDKw2SofLxKsWU1oGqrRYSbsBgs8VLxYZKB4byUq8uaXzdavtQX",
  "key10": "4usR8SXhuYtt6t5p1z9EP1pDWRfKbGHW8MeH5TAFQRpjXx7MommVz1aNufmmr12aagJTzaiRMiF7MBNJ3ujSvKKa",
  "key11": "4v3DFDQh7SPUDiMGaSBnfS2PZuxYc6AjcFkhu5o2jMxEL6PdK8fP5C5jxiM1QxiFm7VU3B7wzvhPwUCvT7K1Y8qX",
  "key12": "5hQPRM34gzq3m46QTL2N8W4sm1BWYin1qNpypX3AcVgCCKSEVKzYpGJV6jUVGdWcJV2NbDdcFYXKmjnHr3jouGzr",
  "key13": "tWjoirT9rgUgiCCXVyKteHna7QmD9wbuvJZNT4v21JGxUeQUTkkdVBZXADM7MX2NrfQjHeodVLMwhTNT7M3jVCX",
  "key14": "4bR7A3D3sWADZJNVkcf2khoUKfbwbgvL1Ygz12WkTP7kGeoXaqZT5ewKha6CxBX4FJAG1oKsiEqyPoNH7zchoA1H",
  "key15": "325h5izwUJ7GaxWC1AMthT1JbGfmfF6RbyVJgaJjGSBEiC6nxaPF3tRy9zRYcMxgbTnkQMsK7S27f3vxQtB2gbhe",
  "key16": "4k1JndDXzhcoxfNx94sYJkwFPNsGrZQfdrER4E6ZoB5wg7aoAJBGw1KK6Vw5U2xCNCuSZLkfkrrSnJwbLTepfsqn",
  "key17": "4hC1Q9UBojGCiFJ33VePmrg7GTva5Px8SmEqP7UyFYeahZc3mCFte2Yzj2tyBD2Xyv4b29LQFz8LTqZGhBVcmExn",
  "key18": "jdCwPgjTDJcShAbK6XHeZEKmnNSR7H7y2fFXdkrLaKdLA2wMD8itg79vzhFuyC1HYAaGfTyb9GKEMB9GRK6EwQv",
  "key19": "smGsTV5uDxcn2C4mDYXuC5UNhZsnvjUXqmPFyErgpgq5ds2HWpqhCe6YCWovGxHp99LaSoYtUW1XB8QpV6dLPt6",
  "key20": "2PQTpV4BWfEPpBfpmWnmHpPR2h6dgjKcKEQ7jZWNt2A7FMkNavcjhicEbXkqvJ7XW6yuX9TPj1ntvctqR8VdURHJ",
  "key21": "277nko3PYYsJ7CC8k1YDVBJvbJbj6pdb1rCDgYy5v9HNrhCgkDDNUaiJvHSo79ddPSqzWqHmevXxNQykumiDZNKs",
  "key22": "2ZQVFk7B7CptBrW5zkVRi7yxd6MokbvVqx2fgCgRuJdD8zr5T3yi9XLvEzs96A59NV3MDNMNqLGjJ2VtknnRxv7U",
  "key23": "5LrbLZBt5UGuSgZagLzMBagmkBjjXuymTpXRUiMtavgnif8ZHAU4JgPQnpWLJMHwJYPLzjszeRLVQu1C2NqnRUGw",
  "key24": "4zSM5hFUeTWHu3r8EUjbSPAMHs17po5AKbZA47cZ1aMp6T3MYnATvEZnQFZ9WAZyzwDuARpNHZzDBABwjsDA5k44",
  "key25": "UR2DTubj7E9Vio8LG96yyWr2coS7Si6sh9CQFECaTKSRFzPW7kFbAEfAm6LUeDeRQPH8SHJeFQPC9NvoooHTNpW",
  "key26": "4e9tGvfY7SnHQ16RBn625LyZm5q45byLGnNT6BLnDsJsL5aXGpwztTfj82eMn8b6WgZj9KZZyCCae27G3ZjURkev",
  "key27": "5xvFTdBdU514fT8EjWXo9cQ8ALx1urP39JTdCY8cqBfFZURNwUFg8kVHW1NXX7WAfcYs399s7q34PvWFXkJ3XdWR",
  "key28": "njo4dhV29Xk2XR6zCehVfusf1q4qXg4HvRpyopxsCqRit9xXR7ExBRdrW5B6uCEc8SU9yCa18mhW5rLxGtZigj6",
  "key29": "5y3dtQiDuQWJNo3fqK1mRLXoxawQTAXnHveqmNABdTNGHfXJhEaZ156TPno9hra4Q1ME7fgeTyna4j6mLGdMfRDw",
  "key30": "66PLNmZmE8Xhja7S4kMWgvJjWxurczdpTwJ2EHezDNS32Y91tgRkUSZdaDaBYgyK76nRFZN9DYK3D1po1caDKDC7",
  "key31": "1uenjNGnrekeEVYovxLWXjupD45fSWRLUNaQ8cwi4diTaGeBJph5ZeWgkaCVTBb8KU6vcqcyFSA15zH5J7dpCYm",
  "key32": "KdHLDQWWq4NnkFzX212qkWvFxcRYSxH1Ezcx6w5XhuTA6L7jhKxikMSkyagtFhJaFufPV759WfEP2udnsk1gBS3",
  "key33": "3DV8H2YFdArYNpNNaQgNbu8mXdGduBYRanB2FNB6iJByyrdFH7EviGR5GYsYgA5TkhCnYJL1hxzY57sBMAKB7XSk",
  "key34": "4nMh3i9r8CLgmahsBDLVLc9p8FZvjC35rMobaGHs1eMDMtHDUro9fHNvE6yT9m6C7CNnzxCfKb7KLXMpB5dQUG1V",
  "key35": "3yXHN1tB1kGbCQWgvrJ5GXMMP57NKfaVM5Bq61uRXvRSFb65w2hvs2hbTtsRtPSFtQoc57LQa584dnsxfsK5SP32"
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
