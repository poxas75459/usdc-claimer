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
    "4wSiHWXAk3yTNEiuSXYR74YAQah5ZwnwNA3t5q7KLuBHd8FogZJ8Ei43MhrGCYGVXqo68Jzi7VovhivahNE7Lwcj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rJxiGwwFcSEYziQqWG8HAUKJagH14huFTr2kJ9Rt5JF5KYi2cLAr1bxRCLqRfc7VWam8AKByQNG3vY5Tgq2R2WM",
  "key1": "3Q2xCG8HWFh6LuW4EedFASwUXHvocK9uFxr3DyvhqjXtujevrxFg3nAJ7ARrBVmebQ2F3KPHa9txLDNNLauFMrdq",
  "key2": "jbBNKL32bcLNRyKAXRcfQgicUJoSpYriKoEF6hTmU5VRcoN482vJM31uijDV1iGvJpoFzqFss75xM6GgXW59ad7",
  "key3": "43rwrzCQDpmpoM9eF6QJ4hF6d4jqi95nnEpEwPTYL5AsJnzUXuEPQpEvJGhvVCwaXxx4YCtJ9kXezCVPZcwFxhrp",
  "key4": "sPvfRv8mpg5ah8tDtjDZyXU1jy8PWhYGQpQf14szN3Xk4G87rXoiKCRJ96aByhoyZ6b4GTmHoBfsQMENS95MtCe",
  "key5": "4PyTGvMxJRuPQyzMoS4sXzdHSGV7hLeDHJ5uk9iQT3FAG7qgUB2iUUWS6iNWqycAh27LLxrSnGobbehkVqvAwsF1",
  "key6": "5ZMJeGzfkCZVzsu88NEpVcufysXLiPK8PgAcGKRKa8Kud8WvChonoatd6Hkx5cKBmt38ZQb93fPA1dTJ9XzwZqjF",
  "key7": "tkyAdZssuWNYX2R7BsvMckbdbsLu6xeg7ySY5fFzXABbm3fcKHSrY6ia3pJWgqmZZcskv2H8uodaXRvBiDjyx8m",
  "key8": "45BNHCoKWsNvJ41fb36pKgXsGcmm6rvKgZUpKNfpqsaZZd5moHXcLnW6JxtZbLV68WYbg94w1xK9aJjczzL3T6ZQ",
  "key9": "598b4aqpcq3NuUh9zWD4d9Wdnyj1z9TYvGTDeAmQdSFahpbkqpy9vUFHQsPEBnniVvhQqTiy9C8VeWKh1yAaJpNK",
  "key10": "JvPR4YWL996NHZNRkGbL2EFtBvbaCaoLSoaTr69hG2EZHQpHRxpENvrzrugYyt5koioBwAVwiHtia1qd3TnWj2x",
  "key11": "5A768C15kD2FqrAZRriTn3EcY9LnbD4SqVttfxw8q9yyQePbSihjTaA5mZAiQL24KsU3F9gU6sbPiGF3L31WGST4",
  "key12": "5E6AKJudsH7q8h5baarYNYDeBCUbcxSo1tz84g15FfHkz4hShdvaT3nQ6KvG9BRbZot66Pp6Z4WmvX68TAPsei2c",
  "key13": "wHLzzhgdNwLuDkk5mw5WB2df2q2Zw7XUPibuP9uV7YRWUH6WvV3Ty4s7JQ3YQDYcANw39b38bQMzzAbwYFwkNVQ",
  "key14": "2jAhgX3vwmbPd9oxzPdSZXaATbRNAZcXBRdf4xTDEQFUVLJL3ouo8cWxh66BostKwz67qCo68HUxbvsocTP188go",
  "key15": "2cQHBLg2HQM3b7PXPeK7Kc1oQN2fYZMNQ626LdYKMQmPBqXpTxWM1aq3hCvUAscRWcjrSiHVtS2LqkWtSJ2yB2wL",
  "key16": "5fwKvxB4pTQgc4UpwLKuvvVeqZtC4hDSxpmh1hHsDVtnYpZM3L67FqrCWterDwBjL42Bi7z6vbNiqAUKLeCWQ1x6",
  "key17": "cX6bkGm1AvktW6vB6T2214moXqPbgWVW9ASw2aRxx7yuQGx2pWzWr8JEZ3pfPfWWdo56rXx9QQFvXEYxNyg7Vug",
  "key18": "41LH8YWE6Fmu8VQqmcaaGW7GE4VkeGGGK4aLESN3BfcPLKcX8xJWTsUptCLJZtLFbhGYUKXtHVE1gXWjLqcH7Di3",
  "key19": "33DJ8gqjzBv8eH7oC5mAUEQYD5XZxNLHrbt5fQuMpwd4kVhQjThwEehrxh5aPFzjpx3VBYs6q7GdGR596ob3LwiZ",
  "key20": "5oc9WKyU969f7Puz2PNAxuLjXFFx5TqBgBBjB6YBv1MWdpWeVWkkzGRLDupnj1tFbQUR1F6zQkUGNa4LXBi88kBr",
  "key21": "2juM3BUotoh5qwVPrvzW2iUW2Vk1yLPozJjbAnq6VTfipzRyHcd7zVPydHwfkyD9gvRGuioiqygeKMgBBAafPcn7",
  "key22": "5KM6pwFPbXLTWpjgQg1Mq4xR2xcyrCrw4yFJDx9zU8x7vPwTzCzTJtvVr3T3znKo4ABFoeKvXJAkScEtbtAh2H5R",
  "key23": "5DeeM9fB2ygHWzwXJ8tmnXmSz3gRcxHoHR3bN1BNcQhjuLD2FPEyppBwKeY5jLgrTWBn7F5G23iEtSMRU7ZhdyKu",
  "key24": "3tCK3PhF1nxysMyA6B2wZjtjnEFzw7qYWp2qhok5YnYijQJT2SvJatSgwkrmmev1jUMk7LaZKntiAJqpUgtvsW2A",
  "key25": "k2NdKJPcDBDnAr1Gg2uev1LxPDfsZYN3E5xNkFxRryTjWsz7pXGFQXWuMTuKnn3UuvSTZKTFuuu9YiqsJBJCKDv",
  "key26": "5L5Zk1ZRGhWMnxi1pLfyaHdZJSnwBRgkBrYrJwZ2zyuptYzahWe2QceWDv1q3VQnMA4rxw2FR9uHn8Rzf5vHLeBw",
  "key27": "3dMPnaM4CBru7Jb9T2f7x8Lwh7arX7cA4LeDTWdZRXhDwRkvEbwm5CbJMmT3SuFABiBa9Y1BwGqFjPqbZNbmtX9m",
  "key28": "2gpPGCuaCgoZsnGeRSe3acK16CU1UU1879rNd5niMvU8FNcL3JSsFpB2yoSA19n3w9NJAXAdJ1SLtWQs2BhkypcF",
  "key29": "3Numu7LvaBPizokub84f81iU6XTQuZPajhbAC6bZuf6tjTvGpDhgKoD8ShmMHRqoEpNGaWQWWqAjDzUccZF1rWiX",
  "key30": "3dMMCGL44gV25ZfrhJ7p2D4Vu9ZdAHcLzsEnNABqXHY9xtFdzWXb44ABJX8UCN8LKJY1mK2jALx5fQDe2fbdbPXo",
  "key31": "2btyr2HfpYicQy6CqSsEZVPDoCKiqcqqUzbrKvAhwJsxfitomJ2CVPXgrjuN6HirKEdTHuENawUBWey8vvgYxVm2",
  "key32": "4aHqA2MKZXNtUbb45P8oUzVS617WoVNjcx4NEdu6pwACurZHXfwffEQLi1mK8vNCng1zB1342f2C47jWd1rpaWuB",
  "key33": "6SCPFDVcBLyPvgiNisaaBZk7jyz6m9KfLcKf1wnKw3hNsCe84Qe1hzcEW297SWQjc6GzxczfapBRbkaZ3ZRHF4g",
  "key34": "5gh5arhirZ9NVtmMZLQo2sXD9UM1XSUjDFp8rTQajeQ9uHDTUUua1DQ1oGquU9AJvnmGyw4WV61MeiHPbHyybg1f",
  "key35": "4PhvskebiZDbkvtgnvmTkGWVY7VdmSp8x6dAaWeddDWu2dkYpcSXjxxG7PxCEgurDi6MY7nFZgu9rq8hMujSQHwH",
  "key36": "3kdVFttwZnfwCtR8UrLXzd9VnVnipQ1fiEemKJXmUY6eEhm5BXvTAKzzPHkrskWh8buzZktvkYNuDYMc96ixzwYW",
  "key37": "5vFPUcojfuyBmM9EZr8zNJDFgzsMoapKxyyQeHTKMvu7yEFfd1VmMFaBjNHS1YPxAzXdmh63zWfKuTLLkrynaURS",
  "key38": "4euKMyAjk35qXAZcJ1fXd5jcK5Aw2pyC6q41D41HMPj2MArCxRGrELTSv4idD6yHf5vvsfvzdUDFpMFc949xwFyf",
  "key39": "4DZ2rk24uTsXVLaBd4mhUTuhQypsVkyBFZberTmhYyCSaVoeA2fe9qLjFMvubaeaBVr3zKExFCviXcNtuYc4BJ8Z",
  "key40": "hHrG7zcdewhY5eqfuXpF5xfMvXyUdMrSfji5VMZ2Kd1YtikQ7gieJ6bHUyxvysr8h7nHZyHETvhm6F38sZA9zDd",
  "key41": "5ukMdfDX8aRHCg8tWrH5hLMFVKDuKN7kUGREkMJ4EpyVc1ThrbsKELb5R5xJDHbxLqgfmhpoR96rTCpKykS9ijEu",
  "key42": "497PSYUySzW2bZjHchdhyVLTkgHecc2Ak6d5LdPZg7VDpMgQpRp7V4NfbsfVRPEg2tC9MvMBULUssXhjbudBDhee",
  "key43": "AUG2LKEAwrn7B6oNsGv3a7uK4gKiaCy1EXgdf77cbqsL9APJS3soMotGoY8XC5TXaEvSPKJboq73fx1TxAEuKLR",
  "key44": "3o9TVg3TtVQ2iUH9pS6skmz4SnekEdUZqYuBuAhTiqbJPdvNRs45qWqLuVpEtoHpijBVQtS1J27wTrZdz2uSPjzj",
  "key45": "4k9acyco3tmDekJjWk9UCxRWttZFuLPaAnG1PTa1esfGTBbHAt29TaW5J7RRwLf9Vc1AxtWv3Yn25n5aBnSKnAHw",
  "key46": "5mfw3aoXsnGf3Yb3mjZMKqMQ4Wk4doXn7aX6LSmt452bL9VJVkuib69kR1x9P5kiRhp7oUmptKLdk55qTiUrdQNM",
  "key47": "3eRNwwZziXZRi77WpvGAMVQ5hUFeTM4QKcAPNihMoRxyJzTvrQKHBX9Yn5A8Qj1wdZNHJvJ5E4hXECcCduSLUHmy"
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
