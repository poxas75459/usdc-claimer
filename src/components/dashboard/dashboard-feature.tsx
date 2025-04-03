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
    "dDJ4Zxtz3F1qxYAzW1syZqQLdfMxZq7iHw1wSAvPX1DQybxFpqu2driB6diEj1Y1oDRVEfK2UaKcCaM7pbb57LN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43ZFsU3Eo5Ckv4NqUeTvnrKuBzZZpSwHaUyLqfCRr1BHbn6TDBXqNkxfT6TbFeZJ5aKB3ntgDjes3jgGG8FG5r2T",
  "key1": "5awdYgr1SMdwQgPwuFb9vPCQtuEDPetLNKSh6RZGfUaiiXnCvTo9PUJsTLEuV37Y4SETncxVhf5SEoknMMJ5PyyP",
  "key2": "2nHPuBpqg4jfDhksRq35xBvuGtwmPwFBsDQzuczuE9JEZ3ZdkKhnrQiGj3Xc47KsBtJQnq8Ei4CoA4Hg5fZwWqYu",
  "key3": "qSMyzqtmGiQDYihfcaMwro6ZJ6dYwMGZ4pq9cBB5dRf2t8uiTCL2y78FVowTff7kWYhfRYF4GsBGvMFao2t6USY",
  "key4": "5U2MtXCAD9cGtdAz4X2DiK8jjUwx1yW3BdX24jgEpbnNd81mfsHo4yZ9cimTVSbw8Jrx6W5on9XQE1Vrp2k1EahP",
  "key5": "5WVbcDER5RpC8GC9iuG2mCzENRDXAx8MyFWZz8eE8WG1CKAvta7KFxCkuAXUtBVxDS2QfWMJDmvVauhK5f1pxwwT",
  "key6": "5g3By7WMRFust293DStZwJmKyF8QtJrqBZPCxedpVzxxsh3MZnANrGL6r4SLsqFTRRWVruPkcuB2Yr1JZXBgaACS",
  "key7": "3eWNm2QC7U4ukTrCVcbcR2swU4nRZyv68zedTdjG9w7np2Vx9A35Jp58jRMJQAdbwXym3z83aJYsFQXaWd1JYfaV",
  "key8": "XMpTmyYJS3KhdhnZ165N8Po34BRgkHhTehGvyk3yJmqmQPw987HYoKYwnAnmJNSAd7H5prv2wJcCkuxGKE8UQQw",
  "key9": "3QAnbsnpaXxhs7diX9e5RiMMhxm37AZ7fXDHghJuMxdWJSqZsfKLVY36r6MDGGXTyMYVwXGfneQyEeSWWrKcxJEF",
  "key10": "2eB6WkWJj4SX2SweUkDRwCdS4UJizr83Biy8FfeAGDUjdB7MqbWwWt6MiNwK1UFp7bFrqrFW8VPcEFkWc7LCfYMy",
  "key11": "YteGwTyGtGqBZvt611Sgpi2NdR2zkboTLyQfbg5ftXvpVjwVSUghM5QtzpD36G6vKBhda6TCGfKDGPZARJpnEUk",
  "key12": "3A7koLJWAr4Tvf493QsuAoLc3ivNPEyFVbqEFML1NTZXfV6feP3dnG351oSh6TjB4e87NcJFV7hQsgufyDzd1dr",
  "key13": "3D9bssuNASnr5UzWnDD7pmwWH6VtigSPrp8mmrek4gRvrZTinQvs411FBx1MzfA9MvjV7Q4gqpshiAYGaS9i8b7r",
  "key14": "3eY5mhFwxaN1F542FB8KGtKGVWxaGAb6i9NXkXoVyLqWRwu93om2a3CLZSMWPJDRRBpsE4LdtMbGnxbGcA8uZdEw",
  "key15": "2Z1r5ccRC2VhgrVv9DcnbjQN7yp1ce5g3anRyBiwhcU3t9LeBgwsbWv1q8KcMm4NjXmkoNgLgQGrf5GXE6PjeusS",
  "key16": "g1jFTBrrAHd8E4KAF1kFLkH6ctV5TEqi8mky2ojjLxkAnNjZNgHZPhfb9x4K5ZadZHaZp3qdN2BnyqszoJRjTAm",
  "key17": "3qN2izGamNLjPqzYyi2mgCbSZ9FjUKFFkP8oh6AQBmM3jgjBJmqeeU3SJ2sAkDUemQ38msghKUH1eqPiGm8MhDyR",
  "key18": "4PZQgc4Q8dgFBZaUb57isEyz3Jbs8ABtSoYvEDTDoKnQpEN8CuFRXDvwmoiH9aUM6mu2tFBaFSkTPfRPLnY5Mot4",
  "key19": "pXvGtFG8j365m3Vs6qVZMVTGgs1VnX2KQYwKCDTnUYUYh5HnAJ5U4W1rmXDMAnHxKS3qrdueRaKfA1eUEwDZ7gM",
  "key20": "3xWCJ6zD76TZbwF1sG4oAoCf3XtvtNRWpNrs6ZV1jnFhgKp8nApXkMfPYDuSdijorJ1sfB5k3Gb3rTfYFM1LTLni",
  "key21": "4pL42bMbaZJRPGBCmeezzkpEh7tiwWhV53HNJVSzhGjCtmVgV3djWfSoUDr4jjHW7CX9PtJHEWZ14f9SR77eK1SC",
  "key22": "5L7eE9oBSXUv1VP718w8rw7ZNqZDZmcnAbrYSPfK4wttMDBz1MWXVDBJjH9y9iSp9FGyrp4qfsvi2TaUKb6JXguU",
  "key23": "5TMEVYw47Kh4WQpMTN8Qif1xnAk8ECKSdmYyMWbPWDZN6PkcA8j1xR8WbJY7hEfibjJcFzv6BWiJ3beBUByUiX86",
  "key24": "5H4iQv4yzVuyniRWnom6g8Fi83WUzmYqPsseMJgrYB3FqibkTDsxgxQCA2AiAu9iT1cr8CjXugfyLHv2DuuJ144N",
  "key25": "KyaQcz5Td4a6Vz6QY3fuVmph5ZSLDvCJcS6wt17hHdk626G4RepoCisDiK1EkdzdWvAgEgqnaw7fUU7a5zvRDLf",
  "key26": "5DvtcivQM7MpuMty19vJYqEprAzzmGxtK5QuToDFyn1nGJ1KTcPe2bxAv6JodPT63gQFahu7Vwii63XANzYzvtxi",
  "key27": "4Lb3TsULnSmSdaydKtnEn7YfWvN7B6rWRKg4ejXgVspF5E6DM7McsyvqUnqozU38nfmd3ApeJhFJaCZEEtfmjjDn",
  "key28": "5zrFT1rk8ytLhWZMDjrYJAdQx7rQM4HPniuxFmnzReoyP3tNcF6MZtqUUjg1CManMkodggWJH7LbLj5AXLYfmXiD",
  "key29": "3Uk757AvEc1qjSCYG4oUZ2eCjaPQn2NRUcv4D5qGmchRvA6Qvz4RQSW43PEtNtR7nnVqYnr88u5MCnXvign4HsMa",
  "key30": "5k27xbtdGQrx9K4VPEqRZiNuCZJGJmo12aqT9eXJ4FRKHWTkpLe3ePPoPq87S4PApMHSPJvjydWRUo38Hb7EwtLs",
  "key31": "426G7t3wm8kDpwUsFG9ZqnDTrurAi7VUDFGH7PNjpchSMVc7eCEci5E24aQ2N1LywQw4gNVuQKD5dhPiTJqEJ2TG",
  "key32": "3G9iLENTJNc6iTd2ehvkzrtrH1nd3CvomRtDtvyhbDB4woh1KVbcTBexKyXB1tFrh9JFLbuRPF3ebgBZQgwFz2Sb",
  "key33": "2eGyZMZ7ZJSr8EHTfiFmmUkoG5MJPkE7tqsGQYNvLbUKxqJYbBfAjoZ3Zsp2LmWdeUc9rSWqrGzbSA7jLUiQdHYG",
  "key34": "5xK7PBC4ekRxZfMCZk2RR7Zv37ZmYc8UoKFyb3AWf9nDR8Cc6P2RreLQqb6Coym6yFH4FiXqk1eyxBayN9YNtWhj",
  "key35": "5BMXoUo99xfDj99zPeh84RcQ3N3bQsEJqpyqh246MejWHh2ZTWkbasW94um8EzwKGLfUUZh7t2gYMBCrP6moDFuY",
  "key36": "4x9UM8cUKwh5D9WmVBTjfeBPNGDS6wh3ttSZ52xG9TztMgcSebY2XJM3oYx3WyqvuDTdttnpEFL4EGH7RpxufNAa",
  "key37": "5bNRUiYhQ3m9d2rEGzyiZjZDSdj99FrMtCVNvimSQ3ev5pPXujNhiZZ9Sk3gyNHothbTcQ9MMx3Qrpjqg5sciZsJ",
  "key38": "2c2VvQtwP1yDPfq7mUxK8CZizQhFGPCXL9EUH5GsZNjvQ2hbBkY6unKfGke2BQgoMVotdEKmHadvJjXQmVK8B1sL",
  "key39": "2tj4UkwfF6rBj95zdSBQ2YjbQ9wYdXiQ7YkEuUEDVN452gqWv73tVVptS7wf67LmrQL8ZPqUcLYrS6NRdHnxZfbn",
  "key40": "hYwAZpWUZxjr3YrNx5rk1xwqndCfrHqJEfaN9kBYNP5XWDFg3wHQcaTzXWkU4aHfUxdHQWFQeBWfiTiQeCJ7yRy",
  "key41": "2rn2rDnjmfG48xcgorRqFRCCbK3aZv6LuuzBE8ufgWAJN91MrvMFsMYRgXz53muzTFXWXuczD231CfSihT2T9W7N",
  "key42": "5oHDcFcVKRmf2Hp1wAMaKc3BNGfJcNDTZHSHN4YcmiJ6h3Dwe3B93jUXjTS6nWiEZL178v4oKyhbyB84mhJ7tCoD",
  "key43": "4d6GQbBuBbcE5M9jRqpy8Jw9JDAP8PCKnFmYMW1oAHZKDdeJUWrQBHgzdVM8UjvA8swTxQA2tfBPPc21KM6npjCX"
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
