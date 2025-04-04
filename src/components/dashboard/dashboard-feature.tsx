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
    "3zn2xFeNz2xxNL4gR6RMMmr2P5pR55cj526FhjuUitQzzTYkSX4CuJ77ptcW3aBkeDMDcoGUatVbE7rZsFbTobK3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j6tGwPkuADExAyvPFdjLpmVdJArzvgTuT9dAxMf1NEMvFa2xcPbpA3Lt5tQ1FqBjyJdkuqne185q7AiQSDJvSyh",
  "key1": "2AiFFJfFdH1DhnzvrBj5FiXy4eLdTMCKmVtBURzYJHBk8S7erBNE9ecarUyuJRwVFoGt89vtHDnHMeGh4rAbN1PG",
  "key2": "2LtgzUagKVFzJa52LzYvw7eeyPcdJL2dZwFh9E1gRTMkc2eM84GMnxT2fuFMqbgrCqkTUhdtWvD7zThMVRhUnSAJ",
  "key3": "57gDmG5HgK6ywq7Jrj2S8M1HZ7vZn8sVwoYMt52ah1szCPmFmpGruzqkxM2WeqZojPxEnTxzLx25KsUv3hFZBsXT",
  "key4": "3iDfqtkNMWTivJ66ea6P9Bc2uLkTHRiDzeq2wRzgVK3Q3Htb91oZH4YvYLfkQkZd538AFHEUvDhQeYThvGpMJVfi",
  "key5": "hxi8VUHJK9sQXZw7A7MGE6jsVJWRL5i4uzssayqAu7NyWjiMLATFwu4mPTHAVfyU9GjCVGuG7iByRtF2thshftu",
  "key6": "5KGZ1zC6tdZGxjQH6GQs1LiFbxPULNBQLL6xqPdn6ivBGE5zj6n6VwgMD2ReBsHjC43mcCNPnAuwh2Txq3xEBh9g",
  "key7": "5PjNtH49gQzZg5hhi5sgSeSP8fGb6J9Rmkom2yQiyf1L12S1eYSUUbu4TvYEBucbX3Mni4pRSRmgdEqsm6DCHSN7",
  "key8": "5AfACrrRUFfkzXbJfno7fc4JD5Sg73qvdBh9NkFMtirUhcqftN12zMZt8BKfFHuQmHMhQCW7qSaJWAqLeKu1n1MT",
  "key9": "2rRJ3Lbe82UiGo5MfFLKzGeFfmjp4RgoqtdAs8q84gfuPGe8MNbxyGY9vg2u6wDXN6ek3sSm6tKWoT98fBGqZGAF",
  "key10": "2qA9uU9aTcQmxjme1XSUrXVnCM3RAnc3wJgqNMqvZh7zH9JGkDqgUULjjborx8RvwiC61BexezGGndQXUpyUX7we",
  "key11": "5zp4KWn7LxCouDRwroZdpfAqJaorsGf6pVcu7x6jCd697x5audNfDWsMfwz4tKjT6UhCVLzBrac1jdopTWGny8Xi",
  "key12": "aPD4qHZdS2As1XdWsNmjc9DfLa6rCQDF2xCrnrkBWA8q1svSZxbd5Diww1767oeaUxKo4xYE7cC5ScAPa35AfQx",
  "key13": "3sWG3xQsYkXtaVvADgRZR3AtmVV5K8npH2vvmxMosyFdvi5drMKRncyJfWv62Q8Vk6eAjovGfn5QJvDWzYCQbqn4",
  "key14": "5TfWhCpEbFfAZfTPQagrpmurUaQVF3Ja7UBfGpKdkJHnQUo6BvsibPkpfzdDUCEBjMKaiP2jV4YHWw1a7a44xkHB",
  "key15": "3ohRfeMSYoHgL9ESBvEceMjEUUt4YjaRbyok3BtNTUzCvHayZykQdY6pgKNeF27WueYYaRUphYt9HGYvkfz3X2Cn",
  "key16": "2pa4watJpT2ng1Pb6kLrn1UZX8GqA5G7T261VLX62uT9wMbKs26Fx4MKcGC4oQn4SJCTxNougZBy1iLXKwxZziTk",
  "key17": "2N5cRTqKxKj9mtkcFfcYPyP2dqiZqztagRgYkMUAxYfcB4bjrBoDcfwqiNrDrTWfTS7ov58YjqkQGEEgrRm5fN9b",
  "key18": "41xNypuwjxaLHmZPhDeni5EdEu6cbfApcWdmc21o1S198jnQQUVRyXAE76fiRsn88A3NzqsNAhNdbLUMpsXrLGv1",
  "key19": "3ddquBjBVPw3t3JjxdiToS622Jm8Uf76KkUhaogWtvrDCY4kDNTJVUwhhD1yaqM93TH4GmuwsCiHh7EbNrndfgHv",
  "key20": "3QAZkLQcbDaouhApUuWPzTBzZ6tRgviN1wvuQyLLzJdvmGheUfdV4nPEYwtwpuaCfgLetmJuXuHz19vFK7FFCw3x",
  "key21": "23C51HjcuenfqtCZziymANo6VvDDWddixCJvxRSEUimwUBR7qiuCxgTcLzmmQwEnKvBqr3mF3kPGsBeFvfJPpbew",
  "key22": "5R7s6KjNjdEKNjnmDyMKjABr8U4xff6pwLs2Gny2Ra6FEHekGdnsT8g5KBRiwzQ6spNKE5vomuLbSd7sxQchv9Tm",
  "key23": "2VU9kLYPF1VqhNUG5XBG3Qe44TULYyuADruivXMUUFK5AdnfaTBJj5b2aCpQBdv3GNBh2uRJYxq2HKVWB5wYr5pg",
  "key24": "2o5trrASuN98hgWphz6ZQk6Qwy7JMvWRj917VP5mAKEDmXfTww8FJT4YKLjCHssyTuJyn5h6eMd2ed2su4tFq3d7",
  "key25": "GLQJWKLtfUmxJ9ZPuQ88rsAJjNusiszx5wNkP8rYsvgsySZifEX7zXJQdwGwmgegvh3dUNwRzkaFMJ7mPHKzcbZ",
  "key26": "2NVkP6vDoU5FCRfyXGhnQoTeW5iYts55s8scijD2sNN6XHYrDTriYsosxdvUSVD4Mu41pfG8PjEj8w3jfgvBXe1c",
  "key27": "44AzAWYiVHHpPkgnxvr4W6UkSrqfCQfrvG3ZgY4Y8EyeSp6mqhCpJap4kSjKpKubgAY1N6mYMaJ6qmc74MVnUobv",
  "key28": "5gDVtD4bHu4zZsx6i5F1C6dxksCEaGqBFuRb3M4jzxCDsF5uLYATDGpgfJZrjmujzFp8TjxabmaAerqNsGPKPK12",
  "key29": "2Jq3xawPBm814e52zu1xTaFUZTqEgSGqbFvxp1tmuiv6B1GEN5dnizPpBVCpkf59PQidSqjThT8mSzpAEJ1wKkHS",
  "key30": "2vRRpWZq3te5NaUqhFBwDoCJa2KGjGXBaDrqXDJW942ynnpGu2ihR8t29ZySZGxbam2aC7aSDccFMifAUeG5kPra",
  "key31": "2P1QCsQwQoVqJQqYErcHpd5xczEYvmxnrWiHjrfBbafMaz3yVe3vTmLPNGx4VVffL8RKydBnaY3i8evtc77jiGGP",
  "key32": "4FdYENdDC7QvLgUCtzG56CG5wWNzLqRfmhiL5R1Uj6UdSh4F7sGum3Pf8vEHkZK3tZPeVioR3425aAdhY3AtPxbh",
  "key33": "4W1eRjPjxUgswAm47BQu8pJRjARXHPrKjbH29XKffXXGzC2hf7x8r4eApvkhedpugSFweMyqWZ2XBGUrFJiAjPx4",
  "key34": "5tKzB96wGQwJ3HznEMBHedDUGtrMvmBVbRBFrwCBujuqxTe4GyCtqZRZm7befSNXmPhNgDvj4bfFYbdiogE1cGAG",
  "key35": "5NAN9YnqkUzjsmMqkvYeJsRP6NCWhZ5zABbEmpSL44Q4xCqmEUVus6g11NhJRGJBChYZg91cfvx6ukeJ8kgZc4wL",
  "key36": "4noeMPs6eNYFV4G61f6swsfkDM7Z3Jd213frUPPWPij8Vg7aaPwt1q2xaqyDGPxSSh1xruUU2A8dKDeVSLpiH7Xp",
  "key37": "4K7ahNcwn9fA9TSn7PgzmGtsbxMaUZBchFo1FgdEgnH4Ma1YXmd67ytv4YBeTMgw3s1rpC1woJXqygVD6wG2FnVS",
  "key38": "5a9bvAfxmCdq6A18LJ1k56THaJDWeyQ3yjrxmr8y6ktCdqwbbQwbCvigJosEv1nf69pLyqjopqBpmv5JSD2LWQfX",
  "key39": "KKfeXk4FF2iL157kBQyGByzTMp4ym1zwwd7sLdkLYqByoHpU8stPU39mTDLXFLLRM2JkKdmvVTNv1uSw8GiJTFM",
  "key40": "5P7RzQwR86kE9ZQbrG17JfZbonYtzuqbT5YSLixJ1P8TtV16n84bDPDzyY5rKGnh9JPYAijH9AJaXDVvLvYzV2vy"
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
