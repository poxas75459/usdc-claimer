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
    "4bHTnhx74jezFUD2GXeYvh2FwzfDzAYb3q78SB3sQepaex8YoVtrb1kFy8tUxmzk2XwXfjwSEuPJoGTJZ5mjn6TT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ttt3tAZUquuJNRQ9fdWFx7vA4A5fxDAS32QmQEdDDsf632WC9FFpHVbAKT6ssRQw4k7WWgBr2akSQ886Z9MDsDf",
  "key1": "2WB8wDs7uazHDBqzYfKEqK2W9F2wX8n7NAXzkA1e9nGDZ52sa3RZAuJzfVUwBeAR1Htu5ihWDUdPpPn4DujZWuuT",
  "key2": "5AHyaddWWXStCRn6V1hFrzNBmgtDdj57AqWRkVgJoVjxYkZuLCW2Fkf4TGFoWpH6LBJywhRibEbuxtNmYV1gwC15",
  "key3": "3NfMM37a1uzBzDBrGySasoq5QojhvihPYrn8dKn1DdvhD6UWagULjWbp2YAGriD8o4JCtPnr6V6ioquDb3B35o5w",
  "key4": "Fa1Ezr3XaGKp4oz3T7cp6YSUN1koxf2GdeUF9qUUfELEUcz9aq77PZjatMSTxogrT6izTo3t4N4kCMAg8tthckh",
  "key5": "26fUkhhhTtmYRHoHN9SMe1b4yb85W79LEUZpWwpPGkM5cwP86DttmPScrFRaBatq98Lq73j25t1orAoFPVUiYEFw",
  "key6": "2j2StoxYAowMCab6Z3ov2pzNxwrGy9GvW8Vtx9tHYaJychu77qA6MKXNj3ZYaMHzUJAtu4C58maPcyJn9ZZP7p9k",
  "key7": "5Fi5EU8pC8BgoydN49zuNEWKPXtX9qDMzJ8PYqAw1tZ4SFdunFLuT9kVwUXeBEL37TK3pWmHXeknDgJXeMZzWsrs",
  "key8": "4ZSMrGx4Jj6iz5YqT1Hp68YzbLSpNzM5bdYYLfFim3WRao2uvt2yJp4mNjbbkTnF1q4XHBJPWwv2HzhbvV8D7t93",
  "key9": "5uTSEL3RievnHb8GZZQXzmHQjbng2YufLsG81Qew7xQKaavG17EL5Gp76sJxPCyrcnZahB8oZ65E9DCgZh961nWd",
  "key10": "5tYhqZ1WgVSQHh1NTi2GQDC42JAe7db8QfxQmnCHCUuHiXKB6MqzcACNq5cztt4wNnY9tUc9CLhJMkpdMTUrF4zd",
  "key11": "4s9Jc4BgYFFW3BqhfWcnbg2whcphw2PqH3Y2aYfnKavFnPTtcH6Pm6mgmT28jqcRQqysdF5VMfNHbQgNhMLWKCVD",
  "key12": "2c5FobxUx6FQmw8sF7ByVB7mQDjZAAV38SyhCVCWweUN2RyWBMj5KZHJhQAa8zYcTx88Hub4adWdAzDbagNsygep",
  "key13": "4G1cdLAgyp9wPprXCGpda28FzWeszFJPCeRYJJFV3zg8QByHL6N3BBr8Gcd6NUqSe1KAM2U6HZDi9BmvbZ1sCiDa",
  "key14": "3FtSde6AQoLUngMcxtSbuCJvgTM9c8MbGC74m1DkNtD9wqBwvAqdSxCuigqKb3cUw2bejcLwmE7W37sGEZ6DdHX7",
  "key15": "43vVWK1C3WdqVs6MCcZf7jUtdb81UbjEucepLPNJ9SZtTJnWrEvEy7CVSx4C4VXofWxaD9kCgiS32hFKTyuTJXBH",
  "key16": "5wtoouu6ks128LWhW167H9sXgABDrUkWPW84zovP7obj6MSr23TvMRAP5agz1outgwdksxdK1Gbth1XQhH6ZSxJa",
  "key17": "asTQ4Ep3n9wJzdhy2d9uCGN19xSEBevjrE9Mvqzt3KTBGrwjgFgLQsCLWJMiKCE6mPfRu7z4gq4RL98od74bGef",
  "key18": "sMJPpmdTKapNVZoZpnNDS9gK5eVVbtiNT9UhCJVchi5fD7XbfCCC8vZcy9njid7FQUTumkqgKoRLGNgoxj7iwKE",
  "key19": "MaEVb3Ejj2bNVyh8RZq7YumJ7izkkKGcewDHX2FKLYDEStGKAMj93W9ZDzHTjBSLS8hU8MCukWwU7Qu3E9T8bum",
  "key20": "2EHqA5QobDiY2Yca9CcQzD6JXs8gNSCVeEWnFdeq7okRwVVtr72wWCgy9PNcBprJ4T44qw1zU5LTFTDW7PjZsPL1",
  "key21": "F28D4uBXhsxE76at5wsKgjU9NHDEkNPZ44TTuAZwqo4KUAMihXNFyegtbQ4gV8KFhV1cZYEBUZWWkz7vhHUJACK",
  "key22": "62fGNzEYLWuejVV91cmUCPiVFDVSrohuaxQ663NwYnRuLYXGrGCHWDw7u4LQkKUtK9hFthBEzZQPioTQVGkU4xUr",
  "key23": "2YtKER7XQKkWea58qapT1b3teX6Lm5LAdkmQMgDHJb7h31ouRifS4T2xq1ybAcAeCrvVmW3fNLsw4tyjZL74bMFM",
  "key24": "3gQSqGfM1MWEiQo9h3npx4ihjHdPqfrNmsjPL8KnrNkmr4rti2dneSLW2oNnckqkGpa83VukwRtqyRt2hTLNiX5Y",
  "key25": "CiEWoDN6HkkPYFAbdXnuPAzK4aQEAM2BbWE3a9RiMRsvSePc5aCdNki2jNhAqoPF7tvqXm1u6BqchdnX9kSjvq6",
  "key26": "bPwgpc8kFqDN3Q7UDNM5vqhmiwr79bfWJzGb3oEuuaECJh8UpTH9wALtJGV6QPXr62T15emm9UfxdNUUfHQXHoA",
  "key27": "5qJFZ7jEDGv8yjR41adhTHGnPLa4hYdXNL7CA9vogizkN6NweS1q9QvM8LsPrxr3jMqvYyyR6cJHtMsLtFz5X8m9",
  "key28": "4HqVeL5nowqfL2Q93hXyFFyqBG8HJSQ21PKyDxr2ENJCa243U9pk6Kksf1AnCgKFUyrJeTKFjdCcWX4mETf4DxkB",
  "key29": "4ns9CDMdoQPM3CaMADjzhXZArKcMYGuug9ACzy6o7CLSTYg3Rf6J5atJ9KgHqNCkGEyv947cgaRqwEujUeGHTmaF",
  "key30": "63t8uM2yLcxGraFoVT2suyiaKfxex9oDzHCniYR8Cr7mR5DUUawDCwW8GnBovtj28sQCyCYWEzHgzNRXNdQ7Vq2L",
  "key31": "5FuZitz7NyreZi88cwyG1dk1B6efVyUJztJf6Un2e8VqfmcBbMbPSxcsSUA8ew1EijdvSS7btNu2nNSf3koBTQLk",
  "key32": "4szY9EFMyL4haoqcJwxYfwvXrbYC3HtVH5cbsk9YwKDRnqGdYAceq4Df65TsxJp21hHFo4PYEqzr9V56zjWmPkwy",
  "key33": "2YHjnraSV3y4jbScjLVpwP9qep8iu5CtFqsepR9PmkpVSAgvZyfccr9T6FcqCpPQm5AdWjCJx9jRYHCqDNSuih5B",
  "key34": "5mNwUhfxbHPvWY9jn81XfiX5VWhpcAaFodJZTeiaeaHVFZS4JTr4NQU52FPeHEkwAYvbqiiDAun6ZFABeK2LoPKf",
  "key35": "pHAzn8wv2viNAoxcyztkQdRxyLmQMiG4TWKv3ffAZeweL6N2zMw88jqvagKiZDHAdYvpEeNfhLMUMUjr2eTQKYH",
  "key36": "2rjNnZGz59r3CDAMc5NX2AAxAGZn5LMxpM6yzfYG1PqANhaejDR6S9726DgJR2aJgPQ2Vbo6ygMqU1x3n5xBqBtb",
  "key37": "57vy8ATqKhJc7ne5jGbR959G7GF9yd53WVzAbnbyXbX2D4ZiQHuSzhip7BpqN6KGkUMSqyzvYrmqdA3Mgv3PRHpH",
  "key38": "3oqY5yt5wMat35xXWFWK7ghWtrHRHPptMdBFxyCDW59sQHwFJ6rRdfaMfY5vxuxwAreJVVzYMCE8MFEn8vPUzUnq",
  "key39": "25wcitJvvTehG5z48tsdJehaP4zDnKnqFdjwRSWs46twENWRwx8GQigVppG2yQf999WMYoNfjgdRJCYmDCXUtD9P",
  "key40": "YThZo9ceTFFr19GJonHE4YMR4gPg3JY5c8yCnh9CKjR1pdfzbWmZQF7Fxs12KcfXvw3Q2CQH2MyKZgu24PWVChB",
  "key41": "5vDTh2XY3nzpmGuwuh63nFaExZrhcFkfnhQ3YNU8askfVm5BQF6GBVf3iZRkrfiLtXXNw6s9aKCdw3G1iAhL5RoY",
  "key42": "4BKWbvs7T7GTUogM2BTC6EjPcnKkP5ggvwP7UtVi3P27aCTpEC6yrAqEqTqjNqxyxEaahA12CyUNoXduXGKSAyK6",
  "key43": "yq47XQfCJVnMDWtojzPafdYfLB7vQwsQ4bY7SSMJVY3EHdawuZ3jFV135Q4QyxmVGQBarnzQihZsmvdQ96ykkSD"
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
