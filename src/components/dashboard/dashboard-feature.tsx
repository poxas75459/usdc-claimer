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
    "5bux27CJNt2Bdk7E8NcoxVnuLebvq43gcjqfA7idkPyYuRVDE7v6741MRGksxHFXEyb4x7aKTcQgkbxppuDUuUVU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5696GQZgT6Twt4Gsci9VwADLSQSS3Wfd9FZjFory3C7opYYfS7hjXXyzeJCz1PBy6fxfRHGszAsUvJVxDSSyR23f",
  "key1": "42u3XphgT8BTuXzGMfMHobF6ayYE6u7AgBv3NHJtQTFY7oDJ9BRwdKjYsJjyJosAx8To9U53xV4Rbj1FeReHyZV8",
  "key2": "5sHj9PZZrspxsEqsea8bLHsH2afCa6KPBTGK8aphUGPaX1AnrZ7j6V5bpNzPG6duf8nFevDVKXbJFhGzLSLAbyv",
  "key3": "4M8QoiU878S5NaKk1yEbgAGsDQc3fq3pmQBmrBfNLS4sio2uoLFN5Ks8yy9WgNCGRSPxGi6gLrbDa7jR7dyd7Gep",
  "key4": "4qq8gPSEsmTYBikS8ZTjFGBgpm1w3ZqzzVY9iPEtE3Jcrmiqws47NtVeL6DjGG2V727TvMVYkJRGsi9VgSyXvu89",
  "key5": "4kFsu4GGZ8bEA5AS4BmZxaSQJaVv388yN7sJZqDwQfDQ94aj24jExDfqaYXX88AtiJPnYuCCVWHSRA77JFqGtsSt",
  "key6": "5rpj1Mdh9H5u6ggnwZosfWzB6AsEnXoXQLXmdptgKY5sufCe2c3i8bUG97xrH2LoVCoMv1Sq9x5kFJ2ZjHJGGxQC",
  "key7": "3WZzUpX9JTjYV6yw5DfH1HCRTtRHvfwBfXPJQ3DYUyZKjLdgkU2Vz7hftrbcnV99rDCjyGWjCYiQ37kwLVQFkaxQ",
  "key8": "3vzQcf3ALVhzERfHUqy4TPuqYPg7rKh2oRA9BUo64BPnBMRnFsh19PQHufxZQYVThfh9mW7ncSZ6DfygGu11eZgT",
  "key9": "27S4ckDSuy5RvpRsas3oMfyVixrDNfsAs6xwAsUGvg9iMTxa8EdLVacskgvkTNLUse1nkYoLbPs7rAS2ekmsWqR1",
  "key10": "2WnK6HTN8aSVBHYwB27HPu2eVHjQJdP6xLSPRg4k6drZuCGGpFTvByJv1HE93KqbCxmKb7frNpN5Rj4jX5gcDmvV",
  "key11": "4YJDMvKPNuYswYzvCSj221Acr1qjAfY4gBMqXGTxxneFp5cscYmgJggPdqHSaDSciWyVQySeRHPKjXBMjeLGUzd8",
  "key12": "GR3mCaUoRvDyr46YBL2EXZYPe4gum8Dx1FrAuH1G22KMKVJ75jW7TBMe5Bp18fRwT1c8LhVQN1ZMz9Ak1qu2TFT",
  "key13": "4hBYmj61MQAqQBBSy4WYhsRcVwGtBU92wYTgHM4Z9MGWeBUFQwKkRmGHwuDnZKSk7VRNU4QJpUDrnf3u3JvJvMjV",
  "key14": "3xTEyUVZkH2wBoohhj9vqpfwJ72BQ5LM4sieJLDpPntK3Cd2yKBhQHMe9jb5EPsdYCSLBv32H3gA8K92WSypwXGz",
  "key15": "okRbSwgT8s4LTPLCgE5rM6zezbGXsKaSJGfr9vSFKHsEMGs9zDwCBHA6ny4xiC4caJNK1njx2XNFrwr9kUjnJUy",
  "key16": "3q3ZabYvC6Qv717nRz75mGL3qkxkz4pbxxF6n3XXUyvaiX2Ut1bogtwHwJ2REUPMEkafriLTwDoiEFXgjAQfzUQ1",
  "key17": "5U1Bi6UyPbvgR2c278ZDi2riyniYoMLzAa3hV3o8SmkN4SSvyP8yvpeysPtxLsDqzsq3oD8nd2q44JbFJYWt6E4p",
  "key18": "3tPQuhQFJsfLSZwk3WYz2LnzCAwNK4RmaQwqEHseNsGrr4rMTSD5ZkqnC7Qr6bwg9qWhJ5s2ynDfnuMc6dZbDD8X",
  "key19": "5GaiFvVraeXfpqXTCpSWsE1L19ymT2HvkpFYKyCNPMYcT8bqyCc3KtG2MHSwgor678QLbSxD1dQjohMoSKB74qxR",
  "key20": "gsQL2AXV2N3MZCZP19KDkQH5p8UfoGb9S86za65ht3bvKsoxJQdDz8SLTdupM3f7RyR9QzckzwxYUfGYyfpWufJ",
  "key21": "38QiYdSTE3hdT9vyC2VS9a7D5iaCgEE4ftnQu3PuoM7sGXHeVg1ojFkVXAPXDqkcGk2k9661pqmAKrqcdxXakbhH",
  "key22": "5xcZFbE1W6xMJUWiizEGLKnx4oPLoXyrVJf8tYRqsDtahGDx414xLUMfoNyMfeXJzg9RgVfAtzsStv8SX8dDot7R",
  "key23": "4igMqNJYmc3ZLgB1mgzXKgrrzyqQqKhjZDkWhGtPRf9JWM8TZ8Yo2rgo2U6BzpbufSdm3fh8K5KibzYNeTP7AX6C",
  "key24": "3KuCoHvCptQ9g9LEV6CkXnFaufDWGb9aRGpnjecaoyqE6EYzgrtzeASDuMwmjx2FRWHBn8APJ7H7DjF6g3y4jwZ8",
  "key25": "fEPWC6kdYoNzR7EC1g6CMJtyacLs7vCSHPAcdMUKDshPX2JENesk1gJqorZPkoKEqE3ksXswdttYkUacmiNJVH4",
  "key26": "5VKrAhfj9qCPme6f1yGv9fiiQctzgwgG6kZbBcwdHmmKfhMHrnfrpHdmoGsMHxtndYD15eVqZmpKvMVPaKPUatgB",
  "key27": "3ehQQVisH4ajJ5cVnBsc31tPyR1ekYvXVqrT1caDHu9PS6vThf8c7EShbXY1anP6tPU5XuZvcHvbR12fdvAVjcki",
  "key28": "5NVKUVRk1SRP81YfL5WKAvtdaLuAvjqY1mAfb6c7qzqcuZygACRiTUirygWFUfZpVQmmqRWKjtK54HTTA2XB6KFe",
  "key29": "N6P1kohEWq9127zqZ3eHhwaEXPVq7khZSADmWCXENBQNjx8vCokfFTdnvBnjhysuKvgJy3EboBamArfhtR24npb",
  "key30": "3RvtLSQgL2afQWTXJmmutg76TR4CwEwsyJ1Axjnq4BK96p8EcFm8CB6XBEWAweWG32bj7ziGwhCR8CxBnKBvJAX8",
  "key31": "3UiSzKCPgcusstQDxku6ucVHteqU58Jhh5BgDiUuP3Gqfhh3hCDeGVYfbADPj1i3pEcD52n2LEEMTfs7AK2nZZSP",
  "key32": "2SMTG4joGBuuk2kHdiDaYSsUSpnxKF1UUoJNFNcNFoJSdGaFY5FoP7EC3ZH3rLUdxijohFsSxJ2x6SS7GNMgS3Ap",
  "key33": "5ek7WsYPWsWSiXaB4wSrEbuj2PbXEzZp1hqYsyN6PykVE4YxSxkk57YysoKNcX3fvLCsxR8wAnCc62y2mJigY9C6",
  "key34": "3cezSaxZSdZHMoW45LN79gg1bBmG8D8dQGQNrNHMHnRbU1J3kMqzCUu8epA72v4Hq6kB4XPPZbF5NtxgRhcchYyn",
  "key35": "3JPCCkdqoLStZnPT8E1Ay2BKp9tqq1Banh6abXF9wXNxg61deKj3fTTV3TEab3L42hYk9tb4rVNX2n4mHRmkLaHr",
  "key36": "5EgqzRwQD5VwamfZmKqfaXouCFs9HqeQ5RBN6rYN4pDBs81TQzDzEB5tCwMXGZoAQ9y8VnVyd79pZEGZhqHa4eCV",
  "key37": "Hzu42iMJwHA9gNLxDwtZmdqY9Y1mAmZGBvjB2Sp2uxyaUQpDp92dFMTQeRPQZhzHRiAR4nMQo4EwnpA5hrkuwAm",
  "key38": "3VmrNEAeonRBAavEsbGPbFC9oisFojVbGNe8j6GrEoibE6Hy8bik1KvJtH5hKx57baW6tafkBfbn3xuQEQk6KJ7T",
  "key39": "4wdcspQha8SREodepEbdveFUf2dgMPEpo29jw6rrV3hGs4ycVPMbKDvj34SMEf4exTZELpJj4yd35ivScj3oyYsK",
  "key40": "5uz3Au5LfRj9GysYJrdNXmJznc5JQexjCJyceqvJRUntjNqdzageoaf446sVq5GW21Jn1c8wERn9zgjpNcaHECPg",
  "key41": "228kgbiQqXEpTZmGHgdGmhaCEk1KQXYw5ux6iHhEiDWSyBue2JeSfriQzCS1ZgaDwFWt8ur5oyP5t4M5Kat9KyhV",
  "key42": "Yy9suzbRHK937ZMt4bRfx3vmyHujhYXZLPLYhuHV9GrQCmc3uHdtrnkYN2Ze43znmVrzBwXZGX6hj5T2gdLpXxK",
  "key43": "5B81neAKFK1DA3udJT1bWksqRhX5K53rfz8PnJHM1oUTvN9Fo6uJoVsFthb7dWvAzACSmHJRcrhTRSxjYQdannHP",
  "key44": "3Yb3EJs1T614AX4Xc9VQFBPxBohsfwJsTjPBSxJD7vXbF3X7wGpz73B7upXKFPQ5djbhXsPUGvLRB7q2zEaJdczQ",
  "key45": "Qg1U74ygSFiu19e4geJGjMbSvLjwGfYPG58BqHsVVdbyfvXSi9RMgYdmq2iNsLBfrR7NPQCrw4ZJXcRM78oNiig",
  "key46": "eYf6e27Nd9dRf54drB2oaZLVA22KComMf9ekZJumXQsQ3a3R8CyaEgPN6bcxvRS9uei7RXq1qtv8Q61upEQDFXf"
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
