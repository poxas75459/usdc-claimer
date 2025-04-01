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
    "3je3EZ8zowhui5zMT8BrPkH4d6ThF497YisADG9C5vwxp6h1f2c2ibzNZ5aZZvZ8BrEiNVc8HBCDHLQdCogtWxoA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f8AQhEYUoyBe6u5M7aZkNyLU1peALQA1672dtn5AoGGFRDh4noFfJw29xrGCyVqX5AxqqDPeDQRFnUZEN7kmKA1",
  "key1": "3wAgh9cx4fQpETh5Edy2cWxgeiWiwh65rQLtJVuxxkSWFfpQZea7YSfYt4k9tmxJuq3cnbb9MFpDKSrYyqLjct7Y",
  "key2": "4F6GoE2Vvm7wrg3mRWLyS8hMPqKyZEcjQqG1Gj7YXRpqYvpQ5o5AyCkwVUsgepYS6XksVfwmtg4EYyVpWmWxXnd5",
  "key3": "3kUqQvD48sakh9yYAJS8pGUgYunGfBFWxw9MCB7hwaFKutQN6tmwnCDi3S4ZDwEsAyuaMhNEJNwR6Yg8LDtUnvsf",
  "key4": "VmpwMWquE1Uf4qfqo42F1BCcUdiEp4cQyot65hewkjmYSn49NpxcUpeRyHbiB4bmCbYKVWNosHE7r7ah3gU7ZuT",
  "key5": "3dbKdsWiBLUHDWVkMJzYgV4qKhnFv3Q1XD5cnuU9TaLLDtWE2BnCNApWQd9qwu8QJwivXwefWgNnFtURw3ozUUWD",
  "key6": "3gAJqbNsRKPfhq9HETw6qiGjkhN3ebgGLrhwz4D6zFN7DDmZyV2Liysagr9Xq5kRG2vAGz8oi5M1U6mMRfoSZDYx",
  "key7": "33oYLyi1D3JWepMgorV76pCfoQuPfNEEFszqBXHFco2U2d8CroHDC59DWSiDPYbpkxHDTnyodnc1sSXPjjMjrc2v",
  "key8": "2PEpF5T843dXDsHPqmhm45EiTPqWyanSz8uTP5PCzmwCRBfw1JyjKeg3r7uUge2MmhfVbR5bpSoipKk3emfLsTWz",
  "key9": "3vVSQQCB1VxmfGm8v4sPBBwa9ncHCPkuXwUM5rdXXGaGQqkbVYMbGPHGuunKpc1ffjniKPZNbvDBPMrSwUF31P7F",
  "key10": "2mnZtKmh5mTNi5YH3aZYd1xXBKkRW4d6DPHiopH15usTBcwPe3Py5VCYfFMj6iJhpee2tNa3cbW1wtfaHFKCApLx",
  "key11": "2VfH1rpRsQ2gy4G1ow2QEtcy8KPH4D62mYswGLSfjxVZDTMgQCSGfvV1DNU8xEFWdAJcTTCoRQyZtVaqY8VYXLT4",
  "key12": "3jM4nU7Ab2foJajweuLF6fMfmvoHoTMHBcnbDcu5ayoZ6tSktc4bVdF5FNFTMMFKz4WkDtHq4VLy2AfRzXMadCM4",
  "key13": "2S7UKPekM6xhmCEvx7a6vSQ4s24uBeLDpYZBKBrBrJPYLPrB35zJLfhJiM4JXvr4wEepFhxC3nSDtU7KrRR4t57F",
  "key14": "3KnSJ6b4dU3Cj1SN2vYLyhzuaeG2dLcEzvGijTvaLvPS2q1tqhAhHHRYPWGiKCRv1NHKEu98FMzTj6C4rppCRvNb",
  "key15": "5TFJ1Sn51aUyP7xFU4jbcbpNHKPcf1piD1XLSRutsU6aSr5g6tpawMyCqQUcsxqXbhjjrutcGp1edMUBgzWQmzNX",
  "key16": "3PnRi7S3SSa7qWspLyqndRJvsEhuHuoJBA6CRjHPgm5suj6gZoHxNAQ6Mggi4CsVR5eQetHym5A6JKe7UZYrk58S",
  "key17": "r1jKUJWuD6uXUSkV8Rqwje5hDvWKuBkyYTtCNhKD2sqjzym3AxutcFTnJ8s6RFz7h4APjtCoff3yyVfnjpXtHuf",
  "key18": "5zUTDbvJpQdtfDjLFrjeT4gCwQ9qLW6vGS4JpmSzz8YswaHgz2JYnbsSsJkBZ2cRpCjNzu3f6NkZdaA8NJSv8BUb",
  "key19": "21dmGMV6rec1xVSje3sAEZ8NBNfGhtGbTb7HYfyM5R5h33qpdrXAxoQdfE214U2KvifhPgbDrpQztRATqkVz4nCM",
  "key20": "3Z2ebccSyTQiEbjvJaUBTa3UtR92pVvJcJ2u7Rkw5qSS8eZKP2qKaP3gKuUTEsUT4JoKHVtUyNZpU7siQvGRfzGg",
  "key21": "QxTjUYYABVcCu1LDtPtqtVkHAzL2Kf2qTfNzyJdMDjGE7zh8bkrnUMtuxBTWCbAUhMbi1ktiZkzsrMy1Tzwojz2",
  "key22": "5dZ3t5dnDnHpcWBxSyhp5CriDcsH6zdk9oJ3f15kjcSfaxZ9gceBQJ9DpK1FxHdyPvjoof5jDtZ6DthJQgaD6urB",
  "key23": "3ns9BV1tgt95x5fZ2rA3i919aqXqDYJGkkKfUFKPreAZCzMh8G1h2d14pHdyjGHmPAr94r2CXfmnEs6tmABGAgKY",
  "key24": "59tdYNfqpZCnLWMTeiLcgrAdJosyP8o9V4NPcS3asPVuYQFNeRdYKuKiRt1iwkWxcWsE5M4QA9uWnxABQTXxDkne",
  "key25": "5RgHSBJtYjNqjVn7TQmFiAkWje49hMo5KydoWFHLbJDusH3MbRp1dLwT96Tmz6Jqrgey7AUT7qtP1EbFQLMUk4gC",
  "key26": "2PGV3LfotYjWN839FW1auJWSuAqyB1jRtdVbhswEufZAHqgENHeauEXDfYkpxJkMSpFHyNUFLrD2Qe4F9ymxe61m",
  "key27": "5ERPkFpCgCh2jDaqgeZCL37jNVj1Pd8NynLjFoQP41HMGhyyEyQL179t7uoL7zB98WSebXtxJmnspDA9q5r66Wgi",
  "key28": "4jwXxS7ZyA6sT1UHuP7qFK57PScQWQZw1N6YGuQiNgDigWTVRSGZzjjExd2E3PCk99wDadd6kr9WK42dvW3D8RTb",
  "key29": "5jR5VaW4cyH24czbr954U446631aberKz4JR9kAsyBKZDaMHfbv9xP2N6gmRf8TdahYQmyJF5tcqvwXQkRWKgsVw",
  "key30": "3hDTj57qhCE6EU9DJD8MAPp4znbVuXMGwoUSAWWvP2uvkN3W9tobKbfYMgFmkvshsy2CTZq67dtmDJgdrifdQ746",
  "key31": "3Jc1VofrkzBZCT6WQreHASk7it9kf5bhpqqHqViwJKnCZiwhfYsEY6QQyWx3zBqvXjVFV3UKKm9Dvbz5Ux7rJTTA",
  "key32": "44a62bkf8ZRWsLiMAWZNajPcoAmsHwGZSnfWpNJyMaz6ffJueJGDECv5zF9aEVEZaZvv8YVA3QkHm3fECnvD84Zc",
  "key33": "4YHabtFsXkQohKJsTKjBKDeorFRBR3bYVbs76z81Tt27yiNstpE88mTDEG9vpqC35pNSdRxq66HMEJomzKPzxqS1",
  "key34": "5aktU23QNgQWVXFvMkzwnL8EyXXB5D8WE5xhe5SnL7W9Gh6bbM86ytv64VpJDcuLBnGSFsaGouSzQAfgDx2zx64c",
  "key35": "2GTPcYfsRRncZdANpDgGhKsWKuZ9ZkipXvtm4Bk7xM1k43BzCHzB4HKpAQ7zWAky4LEMUdhPZ2q6Yv38gHSisZNV",
  "key36": "4x2Yc3jHUAJj5eLjfwCF9ByyzpSckspXiwva9a1THxunTFk9uagNZVP4oCt7iiVMdEjwsM9nax6mtGwZ6fQTTy4S",
  "key37": "29fk8bueNRHDgHEKfJsC3k73gv28jqmKv6mMtG7nc2akC1xc2azutdYkKFkguuvstK7AneTSA1gWdab5akAjkNK9",
  "key38": "4eFhE3HwuJKzwetFTjxgG5dfJ6SLY9gd5qWjgBKzk5L7bbETawW5dXD2Zfd5xoYyd8c4ffT2i2hvHgenB5EF8xb",
  "key39": "5PMAeTiCxd8ua7LrZMzpSLHvECZYNA6fhtp45S2s38TPfLGAbNY6WyAbCLyk3fB2Sfg51KiTkns97KbAjoxgJkCd",
  "key40": "3rtsstJaAzcgvQU7p9yjepX9joJwJBr51guX97PHkfNdib7Qoquhkxc9hgNUFrMRfcnLtjKRrFXVedZYL8S4DFPj",
  "key41": "4LozDBpc6hB3P35HFLAVY1rjaYhNQ5NXdqzv74oULsFmtQF16RWxguFBh2eJnauM7jKDPcKfbKN7t5aCN9184avV"
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
