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
    "36UewmPuVXXk8YY9zJpkDozyFVfkHcw9KZWJQBf8uTESeiW9kd5enZMGqNhRmsMxsQNhtkre4g8Atrzmys95oXcN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "scmQa6KZuGemq3QfArnDxn5eb4Qrb9Qc5h46utQMVZWvkTYfLQafwGv6Y2SBwgpsfk1xxruQnhFUxuRv6XMrQwP",
  "key1": "4DJXTUqrkQ9EDP4ydRf38GvE63QMEFtfFPkK5moyDybKPBEGFN65uytE2kjS5vb7PbrzyCjL3z2eynAR2WAyQGRk",
  "key2": "aoL9C55B2eY3DR8wcjrzcjzMX5D8sEsVEoRRJsWCUKcrY2GBGqLt5hRvF3dsryZwoP3oTFfhm9J4gumoi4wjuu8",
  "key3": "57zbTndh5cyzwVRwPhahV8pgY3DJBXTRjTUJzs2tnYLVG8nMzTGJVk9KUXQK5Lc8TLmh7FgccJnh9toXAbJtBqh8",
  "key4": "4aJtcjUG4o2yNahhduqXZvKzVz1jeSbFioieCiVC823ehnF7bitXsx7y7CZz3xioN124THb8wmPCFPVFN8yqWzcF",
  "key5": "3T5ko4KXoGVjFUkQtLjX5RG1doNPTPEu18cZtC8j5wAAFardgFYzakHaLCboDGL3QUJ51hcA9KMthz86JUhxcrtu",
  "key6": "51ioitNb2McDnBmPc9qYqBaLWSfb3QhuW5xe8kDt5AY4NE28PcVvdnvuUYD2FoztJaK9h8R6anBYcKcRp8qsWYLR",
  "key7": "qXAuYZ5dRdXyYhHcwhCU32QafWzGmDG8NJUgHEJs3cBPaiTDqV47wRT98BWJwMrXpqCBqgVjSbtnR3Pt5zQsGxs",
  "key8": "3TtABZyTgEtRU4Zf1Gu6xt3i5zdiBYXNv5JotQBFKQNsuSVNgKzauEFKyUHdtiduBFazpSULd3LjraCKXxjgXzQU",
  "key9": "5AXfVrkgFAbWB3kEAWwz8KfqFAJ3RARwMP84dbk3QvVJsuuN77Rw4jpM1NiDUc5ShT1nevzvaeN38EfbDpvCjmvK",
  "key10": "gr7kqmk2BmykkgpLf1U4Lad1NM4nK9EyihnGpS8xYXrxUPi7vKkoWTKgf6JX53mJ4cTfeeMpkPEnNPYT12EhHKs",
  "key11": "J9pvLAUrLHrMyFgcfbct4sz7qkQgbVts15iHfoqgLxcA6ssf24Xq7b12Fo9NbqMvo6giPgdP486N9DCfL2MZ7a2",
  "key12": "5AebZu2J8MRZ84PfereQPart4ek7RLF7ypxsEeeWqtkk91HNVjciz4wnNoS8hMgcfG6ebvpEXb5bpkGMhEhps1o8",
  "key13": "UeYTVUvZUYd4JUeyVYCL25utTqJ4xCWiJ7jixcptSRwcFRrsYXcbwD237ATHpY2BDBo7r4L9vSNyvhbnzNqwk2X",
  "key14": "2dMq5GYwugUXFuRgo899JPvhk5XDv5qPZ6BxGM9zHikPjS1VvxFEG4nyWz87JioSasE6HvAG6QRHa4F63bTNHEJn",
  "key15": "2g3eeUjjtEqT1xAR61yxMwvp5zb37UaG8EAh88bv1ejbE4UnDRS4D59BsSCCPG4CqNJpV3q4J15VaB4jnmwGPMJn",
  "key16": "4TMgYHiArtZ3ducocssJUQQ6jWytgXhdi7cPaQEFwvUp5AaZzgqLobUNJC6NizGeAwBMLoXR8dsoFpP4nGxq3Zwo",
  "key17": "3PoqoD5McYKSj2FPaK3bXRbFXuQNz3tPyrXjSZinAyoroSU4pTDUkr5iTsBrak2CTiPyteo7aDysUL1XkNkYFwVu",
  "key18": "3Smr6Yk4Kmo3xPAp8eic4aEjmCUrXECutu4LHjqSJEUrXjXHg4Fjt7RjQrRZeT3UGwsKsBFNcqxQGVUtiq752QvE",
  "key19": "5n4Ev2VNL6ZHMrTjN6TuBex44hX2A3upBetkYEo8gdniT1zvYQdY4tuqyE8L94UTmLt8LzocRKnhTvNgrnWTvdnG",
  "key20": "2bUmnZnAuwy8ZJSpHMdJ2YBxENm6L5sbm23X2i4PRBWtzEXeWZATXykbAVtLBFYYSs9TkC81oHiQfbw5BZgNpBBS",
  "key21": "4ozPqFUfVF86haApcfMRzLtj5RuPejyyYpPZJFiAYw3WetjvHbUPJ9oE1yfwogTjvs4bL6BcEyByGLDaRiN6hKg5",
  "key22": "5HDHMP57xmaLkh2x5mhKRnGowYSAyHKEpfewc8JVjc21fUaBPTi9MK39pv8D7EuXfmsvxef7YqUGudNG8SYh3dm9",
  "key23": "5pvvXvdFwxXRLiQ9t5ub6ob5SVbK6T2e7V4oSwAWDdESBYSxWarfS3NkD2rRPJcPmjCx7eM5f1Rtj3bUhsWJZvV9",
  "key24": "2XyrhbPLC2uoL7mhAqeRfkLqua64AKS72Aq9XLHqL3cLupJnqTWxS4VPvk8tN2seuwzo2Bu3gL7oEuCqNo1vL3nV",
  "key25": "3xdUvWcoH2keM3rX1BDEAkp7sRjoaK8CDDgEZoLqfns78UBUcYJ1MUHnP8LRrDBibq2QtM76EZhVUvs9hoRBwgw7",
  "key26": "4yLdh7qMmJPdi4XrutuLp9XEacQxCfrvZvyTw7c1tV7GH1EkK7cKLv8FQME6Hj6fSNN8vGiqhfD26fnMchy9AJpe",
  "key27": "3vSLXa5sHser5pmCS8aY6JNLZrsY9c2CugUdQw8UUnevTLinPvwzkKbJME6WXBuf3oknN4CWbyiCeHsBzDhxV1LW",
  "key28": "5YLR2Y9UEiCxuHsR71jzqpRrhvS3YpZxKXwEgxpU862bdCt369gba3uRrusaMbpV3JTGUrkYgLriG7iu8TjxcmkF",
  "key29": "3XMGGZpwUCRw5xHfVosufcvyCDCgLw5A8K19jCzPD1ihoPG6yRiSDEUKs7fwicYtvh5VpWd9dEAriphDk1Pxwatm",
  "key30": "s57aM1Qrty5RVSaJNCFQxanwZMmK7NwLy4LbMWKX8DTMakJU7NnakadNfUp1ueuaQoGuPgszhyHK499ZHvpmha1",
  "key31": "3a5d6iQ2CgKCSwWur9x6avGskhQweLFi7zH4q7EDCrffdRZohzsVSTzhf8s9geX7xqa62Sjg2La4SJinv5Mzo378",
  "key32": "3P4qo2b1DYVRPcPo5Jvr5s2aiuZBeVrEYayoPYgGJWTg9cr8oiAV6ZLpQ7beonqfHSeE8K2gxLCRoKC1SCpeVcE",
  "key33": "2vjr8hhq3WeP6kcbkxz5LXzkhVtAk6wgPyMGDtW6x5oSKyWi5S25vnvg7YVnCnhmkbKMjGXcu4hh8GwcbmEiVn32",
  "key34": "2SzbCkpe9mJxKpjvg2198ihnMsvvP48xefVyMQc9SBSwQaR6ZXqc3oQx4d919omX2xNRUupY3FJD7iY35x4VRXoA",
  "key35": "51X68qDHug9J82A9NHPwhbShjQNi89qmo4HC4g4ZdAGiLn5EU9oKinaNA7rVj51yCzfN9osfdTN7gsfVHyeqPxxT",
  "key36": "3m6NsRMteysJfjFJkBpMRf74H3TizoGXBJzVnTqHhzigsC9CtSchqa7SYN8iGv67wwYyQq6wcoV8eym5NgXcrbcD",
  "key37": "2yv1MNPHF4tgoXhWtZ5qsTc4GwMhyjGLo7Z3W7bPf4RB9QAfTDUfSB9FTUN1xg9FynayvsFYVExHy4bJ1FxrRW3E",
  "key38": "cjwYxaXjFoWrywdtSb1zU4ss8f8MXUiKKirLR2xXmJf2qejs2vGt7qGLg5EACwrkr9wotnqDWP2Fvy5dPHxRM7U",
  "key39": "LcAgPUzragjqJZ3LJBhqNvRChZJYexjDZWwA6YJLj25CzhMRoF7saEzbtj1PqzzNiYhHDGr8MzqYp4E2m2NMXwg",
  "key40": "ipy2AsAAqwbmCiJrSDgQJaiCon6H75Rpcwc7xEH5ScS1LeihTivxdMGBLB7EenUbNgRiwhXLYaRxixdeoizocUr",
  "key41": "u7DyxbGkucn7gyn2eVdgMBwMaGX6fjw33YnKTsYo5QsZkAzyoEMZJXgsG2qPBLSn6x4yriRpsmjsrgxTabCECLe",
  "key42": "61zSH8yoQRqVcGJR7fHhyhaZ3mC91UHXGY3uKsEALTJZfKAiqFYuK48CFmNBdVXzpBssDfmvoAq1UjSEVb6YDxUp",
  "key43": "54shxLdEKVEqWrUntsBU6jGbp52oeK7v4NjRvZanV7QRBrYYQyz5kmXRqhG1VqybmRr4vHuoyaRNBUFLnQHgBET7"
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
