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
    "urPRFNBrQMHh7X2xFAejG2LPXN9uFGoYyghQyRJVmfphTLwbGHE1ff57xB7Xo2Qcza5zqrnZJTMJMnNj1EXkQBe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wENzbWaCVExDmxWFoD4vEfz8gr1vPuY77GrsaNpr4bezQ2i7hx2EbnoFJtZPqDQfW5AD3Dft6zVyG93X5tY8VHX",
  "key1": "4dfxzNn4n7ySFmXVV1fPMmRK4CKjTdKJgSMtuscnKC2N19hUqCfMECWVp7FdXrRvo8MQo8EPAwXGuyTVaxhRw1bW",
  "key2": "2WsN6JPE3MUdfpd1JWfuggK52BjpbC3Zdrerg3de7aK4CQYjdjM5fURtQoSTeNte9pKRVjU2WJyhdRLMYnRzJ4Uy",
  "key3": "4cDKU6wu9LHKaV4DJGQdBLF8ra4RmrX9KyAHLuAM3tp82MdiDU549kDwtsWfHtgV4A8msLB3DDBaw1MapjsRsLh8",
  "key4": "3PTrLCrJSv1wA3bwdMhKQJAQz4WYNo3KyhLsNegXdqctueGypgz3JrYgG61kV3HsW3SCywxpm5yPgsaX8Nysw3aN",
  "key5": "3A5vyZVsoVGYVnEWf43zcUfjpmJsZGpBn4a33tBqwRn6gVBeLoFHHE3KsCLzuxBeLz5CgtU8vJx1pyLPqYBVxMfV",
  "key6": "9FUzwphpA1d2yruxGvNKg9YSoBa9BjFaNq8qChToaykcTqCVfvKpoy2FghGBepuyXofXMyksYpJtVyTuhC7NRGy",
  "key7": "375e4UEsHdgnR5kMAyXMYkDtZ8KxkUUgd5dUdavt4yvzXvx6acwL1DWyd7SzXJnfJC3ZJLiH8RtGupv3gfqcLjEg",
  "key8": "4hqspcBy5fJUDvFC7cBG5P4J5RZyDnmYwfrGnZ1KsHSdMwXWGJf8HWfzgUVYVxASxTZjGXfa6NrwVv43NYhsUDzJ",
  "key9": "2He2grPzuYmYWtat2esf9C1vNsqCN9MQrj6QZPkXmqiDhcDstuFDmHR1Y2Qc6ZW8xoC3Zz5ynRn5q4en3QtYrmEq",
  "key10": "2yXAQnW1qGrJ9YcExjcncmsQfpD4mMnXZBvuCDH9KLMMpJpzDXdwm98o4vNnifVqs4zPuGBXtRS85arJAfVesFLe",
  "key11": "4v2HaNwvXNc88jAYKKofwY2WGquQzjJavgVcg7k3RN7wFmTTReuh1rv6N2jYCM4W8iPcrdGiGeR3GXhTZVyLgYUm",
  "key12": "445wdYERh4ofpktGPgR7hQusKcueNMhFYT7LxomprBSjUn4xgaVTCPm1UTT1u2nWkAqqwFMmGiSpwf7LSh43en7n",
  "key13": "5ZyLeKxXaaMSUBEirNW8X9MPKLe4XWasji3MTzQxwyyRnJNqCXMpEuGwMLC42yrdEUx7KdD3xMWAEm8yobCVLTeE",
  "key14": "4uACVZzunKsZpCEQPiyhK6i2ZZ6BR9tbYfcLbLFgVowZ67SLna8DVr3yUjZpximFYRe8YRca23iHBBRmCz39BPhp",
  "key15": "5bTK6CdHiiYHG5fdP1ehamDdrfmtG1ftRWJru2xTnVkdPBKjre9ZE5rQeJeAAtorAkWz5R7diCUswzvSzyfocJro",
  "key16": "2UnRajq4pnPgcV9dodyimQZk7vrFzfYH96fWdWf3KQQyat8greQgkVrqGQkswNXKCAt7uVS8wEMixHPWkvZKZmx",
  "key17": "47c2AhApAxGySez7sHo8hiC5vLWga9yXMPqsSQTRDzhGA229MkNeMT9R34rKYHr4NJW66sL9SxP1AAQjBhbMdGka",
  "key18": "5kuQpZMDdk1N4HhruNB2vRUPnY6cKpXfnGS7PQq9dyAaTcmD721Vi4uJtVu2UqUvk9fM9yjmCJhMxTHptomebQWF",
  "key19": "5PMFMHUQ5oWMCA2pAqyjL8kB4dGhh59npABRzo8dTGFgw7CrHbu8ZJhGPLRVCkJA19GYZrw8nG4cYoeGVUh9k8ud",
  "key20": "66ipSCMAwbHZSxtNdXPgxPVYPFoaVyRDHr5CSXHA6LNJHEBZdCceCsfG8KjE76JbATjvgx83EYdTj6uALuSvW65q",
  "key21": "5Lc1fdwBBtLQxxnnSAAr3bBcuP1FiHfFvXgmouchwoEZRJyZ1tLn1XSnPDnVoFZ3WvnX9Vieop9omxnmG6qpYdJg",
  "key22": "4pDiuWGzU7WrGqsKty1wZGMjS6W83PjdDNqt5mY5VdGUHNLMc7psRQJMpwa38gKKfJmfdXPdaoJikxuAfdFMXmG",
  "key23": "4Gws3a9jx8zCXvdJyPMzjbszJArqgL8UJS4aD3C5QFLHinwn7xpAF8f17DEG3Bv2MK9tHVH1MxSfxZiFaNhuaUeq",
  "key24": "2yYWbwPPc9ckdHmbDeFsYAxhn7fgZeRvnGm2JaYR488TLwbVz1ZtcBdJEcSNEk8k219eX3HThuMHKbPotmSk5ZrE",
  "key25": "4DzZpmn2M6jYkn9XHammvbGncwDnBg6bib48sW9bdKZfQn9iBqjKoi7mcj93eXDdG6H5iV6V9iLwdt5pNPD6dTBN",
  "key26": "81MpQ44stZjk9BXTGiyBMbw5Bci9uXvXHdRgRkHauhhxNMUm7KTYKpXv1KsG6qwgcUiCtj6qs4VHYNt9bWBBhAy",
  "key27": "5JS4wRCbBXxEeeYgoEiqmb4db9VPhbRkBx7aFvUxezfqs3v18ip7hha72YVhe1Noj5CizJS6DGP5WWF3eV4uxT17",
  "key28": "ietQjDfjM1QM5DXhxRvDi4iDgp2yLbs1jR4MeLsnEemk8nU4jZNc9As52uChRi1Y1z24CTABeH8SaatLmpjXBJH",
  "key29": "jYjRYjVZV3EJzGWjmKN2rtgwnbAGirXXyicMeE5WKRLHaYwWaR3GGnU9VHHQhcRzLNiF2Ueb4Z5vVHBGnes4Lhr",
  "key30": "4bfpBCfneDuJgpcGtzcu2ymGbaUifwzR9YzbEwjYwY9NVD7JQygy9QYLtfre4vV5JWsEZ96zX2ZNKc8RKx5K4saZ",
  "key31": "3SRrCutnG2CVuQNntPYzLWR4WYeP1GchAWJGodmrpKeQT5miaQqnP9aSoKB1Snomk47BfeQ95mhDHMtHo63ZqrKi",
  "key32": "5MYqdoSWdXgwCUndnoexUK2mSejUjVL7SXQXjjEmzawv6eWJhtkbJQjaBW6obsFnzBUsCatYQm1h7xVnhXkop94Z",
  "key33": "2rjTbxiWcjBC4BWuJNE2swSMUuoQt9KBKSEL7AGtDxYPgEF7QD2d1h81FHiXRypcgPzNcZXh6u1MeiPzYLNgL9Ga",
  "key34": "2E9jCxgTtMuTudLJj4oXemLwdSoPC1X7m9JugcqbL3VFeepp4JeMKTHpLLmykojqzyEWqtE5KNiRAAKSgtYMvKAS",
  "key35": "3EY1NTPRM4qdnSHZf2Hrom2Hy8yWVtW7EQhH9afrqSftBLN6j8HNq9hBbvUdPPYPgrwRHorKQYsCHou8tw8rH39g",
  "key36": "5JwG9oJyRzBsr1HiRshn2SPumGR7fKdKKwTZv158insBVbVuYFKv8UqQRGATEf8WrjqsrKxVDqsy8sMLt9oBKDtD",
  "key37": "3aM2hoRypXv823gQB4wKMug1bRa5ZvRTmFPb1k6pFLoQ1P5y8DySHs95HnQV133W9bowTJ9o5jDVhxqLiW43ubN2",
  "key38": "5pMnntHt5Mao7LquV7T5mq4ijYS9FyzHdY9Cx1KnqxphkQD74mhm4JvkG6KhqTShhqmJVWEqDGg34WUGHfJc9HrK",
  "key39": "4Srw7DjdUoqfXm8LQ742Auaavtg5sUHGLyp832uBdo9ZN8kFzrWGv9nKovCq3fkeXbXLyt3pcJYyRR4NJ4qyemb",
  "key40": "5DjfhGCfwrg9x9md7RGBRKWrKmiW1HXqqMStc8h8duS9mbLwvewXjDnQFwC2wxxYZMyMwCcLfDAePxvRTNDNRFpE",
  "key41": "4YoArEA6GDdeA8mPQnWL2gPnVh2NEZLbpS3T84vKzETffaygcrXomSfJ4WaDKkYMPZbMHpy1ZsswWgTskjYDhpxq",
  "key42": "49t1ebJFEZNUphouyvDt5MwTWPFYtyWetdUyqrKTz9Whp4wBEF28GdA4ETyiQD6Wqon16DVggDepLDxjHnG9HuNf",
  "key43": "jpJNXC89ggSXLz9S2sxrLKc3jGTEXVZCrfinmse3kgN6ZMhNg6SzUqvXTJCQ2DBBDNHBCxtz713t4GH4csBWypV",
  "key44": "3Aevg9EhKZGeFYcGzAg1ysT8c4cnwva7yZGWS3EWQ4aiE65VJqLuTPjYG7bUNp1oENKLC9r32ZB3XiFXMqXsF2Pf",
  "key45": "5noErvfSm2hLTbv4i8hVfmPhNoLDntg2zwP59ZH55j6aivPsGFPK831R6ycX3jgfYbevjG5GhoABt2FjjPo3pCDR",
  "key46": "65DqyxhjWvWhHJwxccoRX6Kbo6NwD3CnEyU2ZvMScWeQDSkbRxsTpSpGYykN3QQxgmX6QigSPpSgQffCx5Q1pRq4",
  "key47": "3uAJx1mAtPzXwCrjLdfK9FjxdkXvZqJ625RJjSxoZRJefUY4wea3ks2sRMHZ5WDxcT4c2PmJGznhAosZFxe7wRJE"
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
