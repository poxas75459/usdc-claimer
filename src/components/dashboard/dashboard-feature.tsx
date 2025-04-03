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
    "2iLHQoT7ghsC68d2qVzLk8SX4SK3VkSVjESY2Ax7zzBrVPHiZeSWQbmpBdCCL2ZdR79huQJTnbSnvZ4g3BNyk9Gc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4orH7hsVymzapjFQ9WjmdssC4yZf2KYnNgB5tNacLbiDatt6PM8ygdvgK9uEwcJSHg8PG6xxic9b25wXtKSDXeAf",
  "key1": "2JXfLgotNPq2oNWqxDjU6Hk31bcVwnbYQobwcpE8hr8RA8oj4oJPAhXuHHcEFv76xnfkQpM6QjkiwqpVvCTJqriY",
  "key2": "4cvkt1jrq6fg5yGzSFcZuDiRRc8gHmZkUYxF47EqVaAnqv5Ys448wmHvva7fLmV6Q9iwmeG4vcTb6aQciyfXtPQp",
  "key3": "3m99Nm22XyfFLWWvpthG7ThvUkBif7CmTCLD9sQN7PJRwA8yTjxsW3br68B5x6vhuns1kMXJVHPNDcJkqZ8UouWr",
  "key4": "ZSU2truAeUzNJ23wYGLkhB9JTDAq2fDhXL5SPuPp52LUCUwPQCYGF85dP46Uf1zUpWmpmSKxs2fKqYhz98DBzTD",
  "key5": "5tfX4WFChmFxsVSvzoE96Jx8tmjgpWeVLY3Mp9oYo1pdUPA28KKZU4bkp7ovjtgVs4hUMvR5Sk2QP7U8Uci1aH5h",
  "key6": "24mLH48HQtV2wVZzMex2xNt7NEPkRfKYgvTJitUHBqEuEK4kccF3xqVbRAZ3rd66Kp1e3sfcgqLZmDsUc9TxWFgD",
  "key7": "LSR3bab4qFkiCdMbCSyQXipwiK72AtSbWTT6a3q1sqq2mT9d7UCL5WZ4FW7mHSGWPos7UHkLZ1Mxp9ecV9ewRGb",
  "key8": "3S85gANwJh9x9YgoXGycqS8pWUmJoFd1c6NEZapV8a1AvH1Ebt6Df8L26V3A8ZXxypfSbPdjdy2JJKhphLWCQJei",
  "key9": "4vXu7sWuhUgjSSGN88jswvPaZRFk7d57wkXv5i445ww7BgFyoah384kyD4uqAHeVCFJ34FcLAdEBxkpdBAYCjUCB",
  "key10": "3btDf22WgejHWUTtCHgF9RckGYjUUJModVBM98ComQyCpeveu6nyyzwaNGdt6HXTrhqsMWvd3823WZ9Yphrgs5Ke",
  "key11": "3Ygn8xqbt2mmmmky969urJ4pAASKco23Z7Ry67dseDYkJQkKKPpgyBv5FDeEm5UBm16v6euJgcP1yYcZMq2QQa9Q",
  "key12": "2T681y3hECDZukaJuZTPGyX186gXcPdXAy75KFSq9UtrXoFU9ddMzZ84WkwrTH1VbLqbovvZEdZZ9CzbXHsH1unx",
  "key13": "57fDb1GG8eHmL1f8DMH4XahYsVRpdHT317AjRNYzT6Q9M75iV4tP8BBzRQczqzo81pBbCbLSGRbN5fUc2jrNQUB8",
  "key14": "AHZYD7LvdkHrMciw8Y4Cs1WdDLYDFrYXH5qU4r5L2aJ3fWJQZ4H8mDzRiG7wr8xYAR4g4BbTWX6x1WVjaKFqA3x",
  "key15": "Kg2ywBiHx8rLpNaKe1WJeM6FNfab2Ct1SVYcDxsb2E3eAwZaZqMYzfVFBpNCcZ6QfAMPJ2MrUGbm6MeP8pEQL1p",
  "key16": "4vXnMgypx37iTQh4SEs8PmGksjhBBijxiRF37tBuUv6VZn43mGbifC4Djo5WF5UaDXwaBPMx96A2YNtbXTdDEUMf",
  "key17": "2mXBi2Me1Uz6k31ngZ11KSxbbz6Eqa6fYqb5AvdbHBkx1Ka99GcKEESdPEsz2Cw2nxYenqpWMH6KSftkZqNrXCRb",
  "key18": "5GZks5aTwnm2wLPRxox61J3XV3WeAF97TsfCXm82BjxUw7dxC4gjoJjr4BHPkLX6cFq73kTwB4z4NrzYW8dWjFUQ",
  "key19": "22btBkqJxfVccuTaYhmBBPGVgZrSuubvN6jeHHwZ9mgoVsTKj5ZL78hmfyUX6unaZ4kTiN8nuqnN3tNDGzHxPy4E",
  "key20": "65KwcR5NgR4ZSirTD2W4aRqvCeTRJctxPYqdW34EwZWbRc8DxyBCvp2YJ2zk5HvdDMFNnyNVPB9wsP8cP2nsqfjC",
  "key21": "3rQCJd7sKGc4XjFaKgE8ageZxhJr5NLENn6MJHpGryGYdKsxhqLfgNXEGAWhYV4oAtt1KzszuYCmX5rsxZWuMAqV",
  "key22": "4sjwWvveB2rMidMG5hPf4v32CFTJANDmGoKJxxmRFzUqT34zo4PjXZMHBJ3ifNU2DFafTj1a5udDVCptWwGsCoH",
  "key23": "3iDGS6GybA4xws1eHFnXVSTobsKahDN9LtaqeNn7E9w9CRoYXTzxpyLSpELsdSQZp6Q79QzNg4yxqUBfKMhVcP8V",
  "key24": "4dmXPT1gqkqTFwejGDfMqAPotJsjqmTBnKw5ndkLe4N5VQFikHyaucXzgi8BU8EyeqnH2qCFX1T5f8SYP4fVoRGJ",
  "key25": "5JkteVMDkxsridc5STNtgJbTd7RVorLkQEG1GYk8RLp2BdRtT5S39jnbec7hEnzqHTfPdHZcM2HXHgQGKuLRrnpA",
  "key26": "c9gdhtYENHY3zWvNUhT5r2bnWcahNisZKX2VT59Swcr3HcW1sdw53y9E3KyRAt7jS6U64Z53cMuVXsDKrhTN1aq",
  "key27": "3nuxDmTgrUs9jNdfJX8NDGUYwWABjAzhJMgeRN8A6Hkw4pAqnFuYsEJot3HY8FyFmomJhKLyAJV4R2ebYVGq9Moi",
  "key28": "4eYb49nwMgdNiVuMf62Zsi4tAAJDJse32245hKPF9QZ6ou7wbS5isd1qXR2m2FomVA6rVmWqwwwwebikJRoXbuA7",
  "key29": "5SqwmRffCD8Mez9UkdgmiUtzZWKDdq5JFKQ8wrTme6DevZMccnNzzvzEoPDQ1cCnzY8Vv9iHZUVQv4STw6kKSzPQ",
  "key30": "5ebFikukvDKZ1CpDw6cKnfEyHNsjqbbFSAyEMKVBG7ri4ZfiSqB7Q7BB3eiZYBK3oZggtFFAtzZfQoi8o8wNbxpS",
  "key31": "2rVauY3sLSkfqj4ZtMExK93dxz4F6kCcEwr23b84kSdbP2jKPDyG4bXb5K8eLt1ZPpoz5t2DQc9kyWpYb3GFR3Bv",
  "key32": "4sQXhd4oNLrsLsEn735i6veGXzJJ3sZwkassjTLrwE5dTPa2LcptjcpnUrrACo7BSjSyqqQV8Joh9FtR5A8GspFZ",
  "key33": "5uHdfooB1Qu98UNWdVajov4j4VG4TUuzJsRRi1c7cDC5hQSEodyac9sHANJT6MZhRgh8wVVmbBUaJZs2iJTqFjJB",
  "key34": "4c8w5y3NefReE5R6btGK7Uki7ERxFcCPdT5WtebUQ4aYaurejSkD2rVEeB3jWGUcgtS1rWd3ewefeDbBPZEYDwAc",
  "key35": "2Q6ixCAXcbQ7ZNdz5jKecns7eSQw78zBkkTFw9rFo7xaNE74Y7ZxfWcj25cqJofbTkX6Kb71DUeNPc11jRMWwcoy",
  "key36": "spKyqESSfNMPmYoV7EofMw3YPDJ7C5Twx5sCxjGbHyakZYAymBLbTnBve6nD8X6rvfhP74x5sw2grPQEULLP7q1",
  "key37": "4eM4TFPATjz9WFsnKC4zBrL6937rPhfZworkWyppHGGbrusLwjAxsgP3nh8zBkwrFQtAPWnUt3k9NL2khMBMvCbm",
  "key38": "2zZo78xrvgPkKt5ZLakv77FKv1U9RqeCjPmVzGWSN7UuagjL5uoWJHAVwSNTVhk5naQRNFkxrbAyqfhj7dJ6QyaX",
  "key39": "3DSCkENxq4mrh7K36rng8HNkndGUkDUJ5erExSJrxRYpsvsPBqKnrTUieBWJL2jc2ooyYzhoLFeXa1aw6nCrsZgW",
  "key40": "3d78kqp8sh85W2ruC1K8o4aJHUb9y7WMcQCXZLQ45f6KoTuw9MPZcFiyazewak17DZP4m1jGMKRR3pasK4g4xJmN"
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
