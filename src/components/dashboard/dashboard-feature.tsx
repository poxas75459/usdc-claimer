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
    "3Gjut71JYEggkX2s5buCzWQmNxgTUXAo8tuC7MNQXhLfsZ9aDCwncEtDpCa3FmcNch2b9gemsUAv6ZaebSAWdkHi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RWuWyB7ZVZL1dBcdrbLQ6MM4PXqsAhDAw9ij6FaYSjHGQq1o2nFjU7gsRzb4SAHcLPAnxa3ry1VYbuQQ8rjAPmr",
  "key1": "64gQc95tSj7Xfc9uNfzqBxjRVBr3MbzJVaUHt1q4tbvDA1xQegKZay5jfLDiifPFZVqCyMYsv7Tm3uNJSXLYHkMN",
  "key2": "G2o87HpxhUcAUbDzTVT43eAJCn2ieXtYAbHPP6fjnTXXtSb4erUk4t88jfjxhykhoWwLDpdPpq5EhuELwDpTcop",
  "key3": "km7ik5bMtjHTAK1pe9knPir1eNe6sVVtbPHCcRDkZxi7PjnwvzzeNJgA33ZZ3Ft6Xg9XGK8rWtp1Xjbj9LE3oeZ",
  "key4": "5dSQtYwfpca3NMjYxyN3dtv8bUYtFefHi1E4T8DpMsUywoTyqcNRwp7jb5YgUGNejvVeS9AFbGRKyjktPU8qQBY7",
  "key5": "kqYDWtQJ9WKaqmoHETRxBftWjwN92hez5p7uj7PYeFU136hJTQXNYYxXMGbwdogobNGp6gcCLo3ozkPqkWf3cjb",
  "key6": "4hyMTypzsUdj9FRyxmbYCn1FKC5hRXhBaCsviFTCVyjnWNVdyvL9TydqdaQxVDf8TKQerjndRoLAgfiy3eL6ezDh",
  "key7": "4grixcybWmbHcmg5XuPPosWsNgBppMY9cRQJLzNQjbqEJ5d33aPXafkStXX4Gznj3RbL2NewCpHDQhc84wd2TYz9",
  "key8": "5JmA9iGJA5qKzbsXV2cR6VKkf4sn7ggsCvX5wVMgtNGcVhpMN5PcqumWhLpcciuBkLSs8auShRWQD1jheBoDPAp8",
  "key9": "4WTHLWXWUoMQAGFin9TcpTL84KnmpPgZdN9cTzEZEriDi81D2yxaVUxm9Hk1adWV2pKQqWWJxYPL9JKeXFsN4yNj",
  "key10": "rywBEjnzMdTXSGisHu36phk1WWaejU9VZhGYcLQSSoxbjAQg9ugF72BVXmp7AsNp8iJ3Fzi1aD4LKcG8caDepSH",
  "key11": "2cwyBwLAgeaa6YAvqoHESkrvnCWsHwkMAU9sSNqpM63hSPzYgy52VFExHp1NuFmr2v3EVvSbL3Fu3e57vJ3Y976t",
  "key12": "43k3KujybrsJmhsBEr6DcVuFHAURUogfwXnTnBnMeYXkvxCnPD8276eZUpde2rSYEj7kV9SV4QUsawaxUC4kR1SD",
  "key13": "4y3oFoGMRkHxNQvFSU3dB63tbKBLuSmooS1MMJ5haHWYbpM9dMvawGzcJWTrtMU7rgYmdpKF9JgQ5UTSby2cmeBm",
  "key14": "2obip8nGbPQhD3L48FLDv4x9MLCrZSKL4kNqyG7srqeE51Kcim9eucfk7QdqyD2ZNLbrCtdv6pd7CM1hLDx6sdUF",
  "key15": "5f12SPyTzhiwUqqXgnouARXRQZ5Krby4QqRSw4sZdRaQrLry8aca5EPoU6v9FwG6viawDuiZQjCyF7Neeae84bem",
  "key16": "TXK1EnciSx6teHtvBjsV3kfYqNPpM4mX91pWL9ov7SoSfGJme8vCHbCaDDgBG9XNyYfYUS4EJu7yNuo6wF56XRi",
  "key17": "ZBvHRvHdqMfvLmVvMwfdddnMYzdDGg29miU6URuqGaWec7j5Pd5uk2U1y8KddtacickzUNu9uBiSajxX13eZFd9",
  "key18": "2ps73c9Z14rxsKFroKEvQPCQ6mDzLxoNjaLURuGf5j1yK6bYw8bth4E3DPWn7SAjNKQQJ9LutNEJnd2gjdHarTbH",
  "key19": "2rs7YSkLkVTP3VgAg9qUFCq1n7gTo94bDxkiWj5yGZ7QKeVv7hHgfacDWo39yyBuhJnpmqLDTPdPTTXAbou1ynGe",
  "key20": "3zimni2N6jtBoje8SxBGAMP3GeqXarRA5v4jmj1LUDTuzdBauhmpxkf1NKkEPQwkumr9pAqavjM9hktmL8MsaTBG",
  "key21": "4sbqrwwJJZoKfQgyP11sCr8b1NyQwbt5qrEfHz2QKsZXWtGAbvBn88GV5xXgvHUsu1LXcQrXD8ah6zCZfY1eUhJm",
  "key22": "5YBbHfNeVw36KbtQXz6nq1kppFDK822ZQ2EW45f6618AoKnuXtqCHFpZdJQyZ7KYEciypeCRAH4FnXb1wuGEEFPb",
  "key23": "238VtzpkFbAonhyyW58rL18rctypV9vnuNniJ58we5sHojHhD7yZyCJ7idcDBXj9xv4yMRZL5As1kRiA6zxsgQqS",
  "key24": "5nkV4Z2sifQEWNKKMyg2kdRzykcXBvKmeo8gTzVVwyFu93L6TWAnQVXyU3L8LWbPGhH7HhetdDssGT16vTZ6Zn9F",
  "key25": "653Pt7tdELH5Z1A32n7kcDocrvG9Airr9rEvXLdDe2LFJVUavKB2FYbZeGJn3rGZjifPLXr39FtVvdPGVEjCvs2y",
  "key26": "5siD57WdDtdX33ActRvBE28KnVXsf6EPGYNm2h5ynZtn9QjQKqp9d1i7QJ788mWVT9iakC8A9ptxy6fqdCrKEtaB",
  "key27": "32dodN37wg2mxR7mq8NHpYXqVjC5gzvnsVPLEQA1Afpr8NNN2VPwb9qbR7WmtYSb4FRH8ARWQNPxFmw8Pf2qgxCE",
  "key28": "2opoJBg25oEkrHZaPp9QedpYf4MAZQWa9hmMVK5aZRAcRFqc1zE2LULrLjse9H85oCy8jPQFypANh5ypzzvHVTef",
  "key29": "4NapS657KVAxvGMd3KQyfGMhgUtGeaavXMcvn3qKtvLsS2QAehDDu3Y5oMZx1Hxaoym3hmEPQ31HhbPLoNoFDxQ5",
  "key30": "4CSXmMkRfveCNzFffJ5eCYrgwfmEF3EaBjvTVx8RFRU21id6hfR6J2pwFs6iWAn8FPzHX3jQzR9dPrmfYeHyVjPZ",
  "key31": "4KzCvpDcqANwaumTLH2EXvurbBVFaPao6DFk9ndtJ3Y4WX24UjCRifJAaRKBzZLf7dKUvRRA3pHLHtaA2YVmVnFS",
  "key32": "5qnodW7xP8UVwx5fLBBoeBNJZvavW1UCYuTD8rttNDt3ccJscQGWdgo6HdRTGKupNphDgXUEZf9Yxa4t25wwz7ft",
  "key33": "4R9nrs9ivjV4SjfSYDbkMC2qRXsHBE9WCQ8Wbuof1S6Eg1XoPTi2tCCK2pXu5iM3L7bERxPLqUd6ZhRh3d6xZGjg",
  "key34": "2vjiSTv7NQwdrtGNY1XSTsT5g6HQwZyBCYh186rFGUZnX9Q6Kyf653SUsJus79oZrLJiDxpJ8QZWh17oBHVR8U6X",
  "key35": "3XsWmCiBpUmZaVKtv5k6Qv83B9cYLKQY8pojBh3YsXxwbU75w3JMnTBMstDcrge3wW1YfXH62bWBfrMK1igaceW6",
  "key36": "UqWwagGUdTaKSMWZjMs6cU7TUG6GhvdmmhnCz68Go1VBFCcSZdrpFDRMP8JqYAiAPQeSymdqTYvNnuvZgKSs9P2",
  "key37": "4RdiGHcckjY8Zktboxp3vKYb9Ww2WW4x5AiQ3oXHGcrKRLiu6hAwy2uCsawb68sRSiiBUuG6nqka1FRHxFUpVZkt",
  "key38": "4HwTyuUBVxQhN8bPZ3DvGkxAwUvB8SKheieKMFRcAShwM4z2LxLS8uVMAkUyUYtBC4s87DoZjUZw4oyDtCZhmCLc",
  "key39": "31NvDcyxPmRq7AWTTV5BuuELvzMEATYFYn3UFw7YJpbmC1LUiMv7TXEtevZsCyqTxTxKc6erN8jdkXFaHsgGu9Gc",
  "key40": "5FmmJpbFoBtQV591SUcpNkVM6orocB9MCcTmQseTgZdngihJwpYobCsL4PkfkfCxYkUnB1rhCHXDnHFFDzJyeuiC",
  "key41": "43oHCBhTWhfoe4xsta1yFKnTmE21uLTKcapryahQypC5fWphqMJPPmuj3mkveUGyCMQdtRTTKuHGrzM9LvYVRaUr",
  "key42": "3Fd85jV2xnuxVQjWA4mgKDFCRg45PuSyiP6R11eHpxNZowmvygKz2A6KDxj3cW8QQ6sLQe5BfrJibwuadaboMNQU",
  "key43": "3e3MxnAzRKWZ1JxmHipgDJn6mb8aJAruDEgFBHzECnZARycEhhHPyVCNqi6BsCjWsNU3EkuagEmcbZQcK3oMJPg7",
  "key44": "3iFSsGWSqaHZn5aQ6nU64UUcgk3X4U1ki2Z28d3XXwv1FEQx8p9Eb7Thf2xMmLhEZ2ftFK26x3qNLbRDYzydV3Az",
  "key45": "8FgRvwbShvzLJejKLkDCwyyJv66A5SATvzGV1UtcQidSvMib147gYT1ZYkXakqv2GUn6cJonemZeJJNvZ2ouJfj",
  "key46": "oNy5kiiracGRi3dbSBbQwVstCtKmKTfLUpctoHYbVzK9v6vLbAuAw1P5gUXJe1qs5AB6KZQWWcwn21gU2US25Wt"
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
