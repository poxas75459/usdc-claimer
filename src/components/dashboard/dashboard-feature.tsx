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
    "2W3EXJfBC9jX6FXg1ZPkNV5uykZ9RprN2dMqiYXMNyL9jUhUSVHjqDheJuyXHX3NccwNe28omWMzXLbJah96oWMK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bSCqV27Qmji4DTUBfDWYAdBi26jhCDwmGW7qCCnp9EGW3oh2nwEuuGuKY38iyeT3NhJuWaPPMBgFP9mWTGkezNA",
  "key1": "5X3qgDDa4Y6t1pP7MkgKcPVj47eXBNhf3KnR1zTLo1LA48ayG333XS53c9erWvCMnuuWUwDWE9x18hRkL5Wm5aTh",
  "key2": "2PdUpwtpHiW1MBxMfJqs5D3udtciE1v4GVsh2kzm5UvRm7T3C4SU2hYHgD8y8J3F49o1atLgASt4v5xmxtcnz3LB",
  "key3": "3rMpquKv9dAM8oMy9QL5pmL52FHcvpVn3o58hZvSAWr8zmDK1H3BEuqfHZpFwsQERVhzAZU3xDHLXQnGYVZPedq5",
  "key4": "5ZRbFpXQ7qyFYq9BAozNSwqexhiif4LB4434f7t3bSfX895ueuEFTAaNMjM2xodX1fDZEC176rEfR9iEa8XbdA7c",
  "key5": "3h81ruPuKpd5aRTDsEaaGpWQFYRixsR3GtCpvh9CYUoV1Rbfjd6koSWjbZEW1xxgkwTEd1GCZkZ59zNCcfcYnotM",
  "key6": "26zpGoWEETX6dcoknRw9fZRx5asJJjpiPsrw8eWgDM7qYQ55k4LAouhrNnenN3cqZBZxpuMVHWp7R1ND9f4tjGgR",
  "key7": "4qQTkuQTyVu6wZyKWFMRBW8PgM6k12U85BC74SFYX5BbMagvBG2CHnoXtgHdVBgr8GXCSvFjaoJtP637j5nnfVcf",
  "key8": "4UvqDhr3KRyGLBH7ey1trbFxpyDZQktyVFCJ4ubwL5q4EPSpNYX6qRNxYu7mmiyxpjYKG5TwNEsuVnYbsHYyzJTf",
  "key9": "3e5RaPb4RT8E35Ch2qX9tNx9rEobWP3BfdPfuuJ2KEmM3ThiWRLPzWhRvW1nd4FtAsS8D1Y4cjuo37t42wVXFpR3",
  "key10": "44RN8Qg6tCocGF28GXpfLxWDGsYZCkEpffUEyLo2DdryrpMdKwwPa68ePTkiLzkcuexy1Q5wicZaryHJKGveFBPY",
  "key11": "39Wwgko9LydvzSxUmJy6rmsYidAkEATeEDVH7zRiVSX59crV3qKm5MK1ADvdJ5MA6grP7AudyrFz3TpxMpTt2d1R",
  "key12": "2nuz7yXFMM82VhwjE9nFJ258YvkuVR9KRfs4vQVQMssQuoFYHgFENHZYYZzhzjvm9UXktUuALVQqckvJbBJ6X3J9",
  "key13": "48kBMeqwM1WLvvEPNn8S2xgdJd3PHZ8znaVD4DEzGwEwoJaU2p1GrqFwkxxFWq5tf88gsVK9MqoEGyMTa4MgT5Pk",
  "key14": "djxGmiJnNYQYApDQ81Zd6PAjJd85RvEAQ45oZ5eKdoxQgKoWz6Qhe4d3UCPWgmnDiWadRXnhPZr1QojDnwsDecK",
  "key15": "4mwvaYHtcnEPyphazvJPzyifFJUn7QrJbYwTHM5PeipWyzCSYay43ZivddgxnVrcHLEZGJczF13PZKwT4HfrYNdM",
  "key16": "4zJSDwFujQgwEYDGSsSBAqqdNiZgCtLHT2NGBFggEiC57pjjxwomGhhWNnnDLBTQkmE9gj2fcL3Aa4BKs3adwvt4",
  "key17": "aEF7nycbDPXG534z2cySHW2DJQj6ZVGFE6SW8YW4JPhKHcn8hygjGMUrrWMuFjvpbMd7g87hDyvGpZmXSezkkc6",
  "key18": "6p7mJebgkxqcpaYRx7dTKLT4gCWLBmnyRB1FRJ45uP37kdpDdLjzKGeVwJn773A72cgTNKmvmVmJq3xYQtaBbU9",
  "key19": "B6wuPggiqEQdiAbys3UGcxRbhisLNF4SkumxyG7GZvJoPE8h4cQSRP6Zcw3otAxjBsyEjpq2tiQqYsN4vqm86GL",
  "key20": "2Vgd89UFf51nZbGrvjHrL58EVPeAYQBGNEmXrkV41sVipChFCsnfB9sxQfgJkjrVpCHottyJykN3kmaXJRtEyd39",
  "key21": "3zDDfTef9HStTpsS5LdEwYkUjW3b7qyBH2hi4wrWsp3LbRk9X9isUyVRcCvrsKG9rN1U3UeY5VEJpDGEZHFt8ZUd",
  "key22": "aSJAghFTkUSsDgWt4uiE8sRespGQm1xRa2w8tsXf3Bh1GLY54mXqioDEa5grJ5QdB456Gnhk8EA1a3GHpRn9JNX",
  "key23": "3c5uKXuRLiGi3yGyccZr4RbJB36x2e5T9Ze3NErNVyhp5zyESP94PnyDGVDXsfJpuBBy5zG6XynCwNHcpPYEXRD",
  "key24": "3hxZKN8wur9yUY75y5jog3FCDgfwKWWMWktk2mPLGckQxtnfiK96mzmRMRhxivRdJrbMWUooL8M97qJKPiaq2Xoo",
  "key25": "64rp4ZnKJNEMK1xqxj1CaeFgbVwM8cTk8BmUdisdzB4jwqjgMvfwQAJPsqy6fJ6MrWJpEjiAHAUptW81oMw24Gxf",
  "key26": "cka6JLXsBKctU1VqcPZG2yThN2w6HE6GxuA7xHNU8fcA3fPShjshVsva2SdNdhnyPWgHXDphN56KndDUkaMKT54",
  "key27": "2iywbmSH5vR9af73vafcK3DXEnPzYChNVqfJKBUnhDEghrwB5Q6dfYffkd57kyoqyNgDdCiQddEnjJmBCLSVfTXg",
  "key28": "5i3rDSxRtHVGZ3kGtF5hZtjL1bbmmdTzEcv2wx9jmY5yjzycX2y5efTeYhjACT1oRrqSGcQf9Yvrk6AuiBSB5Cwx",
  "key29": "iYSzexPcWtrkaH5myDJ9f2bhPCRBG3AK8vDRk1tK74raLh5h2ZdTpwQ6ErmLHV7Qy8dCtyYQhWaqPptrdZNCnqZ",
  "key30": "6ShpMrM2VyXKzyrx4HmtmPi8DG7V9VkRmncn1cqNJ6uRZBCnXDbRYTrhsCRRSLQyVFxYnjbtq5Khqfz5GHVReWW",
  "key31": "3SQnKDv4S5vHimi1VoR7eFFKMBV3Z2D44mYBmPUBT1Mn7W9bhqdHLLzc9xkAudMHE5c3aeXufdJ7w9LYUjGuMuNJ",
  "key32": "55s8ts2NYPT4NV8xiu3XoioKta4MoYvaH3jBez3NYHgFXyihu8arjYmrAgDpSUGZtgFoYSRGZZV8coLffZhNsTWK",
  "key33": "2m56fWWQwtA3d7RqL7LY7tNELtB7kdsXQMxFmGaK7bhxjcte3vJEeTEki3uEdng6kEqMuP6iZnetTwuYLJkQrFoY",
  "key34": "2uB8uNDgdBiupN8JesY9LMyR1pZGPjwffV1rVZDNmTsaxCaQubgD6dZo4XYLtPmM2gjmgnis5xHXuodtwYoTouRV",
  "key35": "4jESkcHswx5gvwheAw8AuAJoppocqNaoT5wtywdQaBR9uSsoCxqik3vn8bbJPvSZt8MEWPatyH8uYKTMe5Ld4CNJ",
  "key36": "2efUtvLmikrwTAoLdFv2Gi2Ybq7SwfYw1wUvcRs726B7pCgDk5XQHC5N29w2Hmjjn6Tae1BckPKrYs1KyAAC9kbv"
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
