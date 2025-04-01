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
    "3Dqu42papkuZQmdia6xfU6pohHtXsbmsyazsMkhmmnzcreojVVwLfU3CiyomRf1GDyCawNuJ4rX1iMM6WF71z1pf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qMtPZYHX8BbA6oWd4fyQckkYQwN1pLpbqvVnanghRBv39fkaNohnvExzw8yPvH4Vu4pyFBq537JEyXCZJrmDjWC",
  "key1": "Ezj7epsxLM1bxwwV5jJFmoqRjxaZtjvcKSRXSzG5Hs3dg3pZgjjS63V87RdS37mFYL9fK6wT7WDpvf4y6az8Sb4",
  "key2": "3RVXrPAFXsJdVEWuTFi861gMEAE2MrikTnqKmw7dbEtsd2SFRgS7BBgSKzjhaYQ25T85s5Mt49uA82HTLg2Z9bo3",
  "key3": "bemtoxLhe6bZuJ7uN4cgZKycKbqZ5Ddk11Af3q9y3CLLYnCAMwL7Qw4kfjdsB8UiJ42uFcWV35yWpME5UZrfVn7",
  "key4": "4xbGH3QtaEeNgd9RjWtNLT7hg8VzqpDsR4TqwUze64FQwdg77CK1nSuGPYqxiFcaRJf6fvuLvTzKkV177zowCjnq",
  "key5": "5m9k9FcsUG9ZSen3Htzw8sCce67N3j4zv9v6JcHeJJGmZf9XcWyBQwRxs8WATr9Ghi9hT5HARc1S3kF8ULMyCnPw",
  "key6": "4nm9Qys1avf1wmHBWfrVpWPTZMwPTzGfdKokBQFTLBkRkTWhDNGvQRXW9uQWaZsQaVpECtVxeJVU3ivfgqfKNRqx",
  "key7": "2meJG7rZauhSDmL27nMtZug6RmQN27P3tXqoemrf6PvB4sbN2eiVnvYAF6XgMFpMEGkY9TEQMno9FH2thSiYn4kz",
  "key8": "5pJ3p5sV6BBYCmSZesBAxbM1QVb2YQCia7hLhFAEsrA3FTReXG1czFGwL4ABkAmQ5mQnFLpgd8V4dbRsUPwtDcBs",
  "key9": "2xic9CsHjpQyhf1fGZwRF6tbDk3B2GSF7fbjCdNKUChe95DPDiuDMehmG2gX4Rw6eLDN41pvkuxdFfU1eNqbuc6g",
  "key10": "4eZPDBL2HBqAqbekJNMC4xEhYjW7dhcGvUv8GUKYcmp5WyFkzEz2zLYxa4N2en55Y4HrBtgcDX6ysexQVbwMckwL",
  "key11": "2wJ6LWutizJbknygXD9wKwVJNVDbFczA3pFZnwGSuRRQoZEWD7anzekXxJnUWMMYVA4yWALiXtSLkoxo6TqmWCf1",
  "key12": "mG94WFbN9LHHXsz9FatoiFNxPdCmX1y7Dhp8cDmBbgEHWpZkm4ZYL6HHvBU2EuiorzQUopYLg2X7SpmFrk2tTJQ",
  "key13": "3xSbmEtuh7XTqNTgvsaCLFNdYyDmxx1w6QchRL5brSQz41pXVkNJUJ6tfr3EfebQUhyRNVAEuvJCdDudoQ22EcPV",
  "key14": "3bQKR34mo3q8RBXT6Nq2hhfcfWDNdSoCiaAVnJAkcnYfjGJNK8Ae2wPRHK9YQktoAusqAuEVeF9V9CxXsPFnm6EM",
  "key15": "i26ZYVkA1cF8G3EoUeuFgsdaoQiUbCQv46ZcaYTbBTuAvUu5cfuPn67vtcyPqnooqAg4EqrQuwotcR56B4t8UBt",
  "key16": "4fXJCVLDP8NKSpVhfx3pTkFAFji9aAimPiHSrxKvmkEo65NqNFwAGUkmRBkJbgvvcd4evYr9WpARFnLpuJwZ526u",
  "key17": "5nMxCApBPpJoe3y1ahoKQVjEFCjZxwx9TiqSj8mgkukXu92KJP1QajVWDEoyoQakXxxuTDm8ggesM79rJbHmeq3y",
  "key18": "3RJ2A1yqw7BHT5PGGSF2vd4eeaCowoUfr88WsWdm3edNWp6pWHqcrC2eMUjCREvcWCXtR5FqbskJYMy8nSePmCRC",
  "key19": "5pxWgvb1H74BgDh9qnpZHS5YmKeAVWZyeiEWLrRd6kAkzUnDraMFMpigSjpA2jTknvfg545QpGanRFuGtaAgdh7k",
  "key20": "3U9xy3pniXi6PE1xboXZ6S9xUKCn3ZXLJWpBkDUBZv9gevjfttjRr6arJ8MuNXeWgJykeVUg5wKUh9qcgXusvcDW",
  "key21": "bJTWpoTiZaCc8EdGZhCFvXCsV24GHX5GDUFLZjHCPmHPM6RL9ndrgMXsZsKjZPaBK38aP3VCCm2z1HXJqPKVFdn",
  "key22": "5BENe6dwtTcrR7wgRtA7ZgrTsLqaKPC9BkiWaAspHPCz9wWN1zotXft3rjKQSEHE5mXoawE642hz7UvmqLZCR1Cz",
  "key23": "2XjvVaQ1G3TLaDRDhheiXpqdPkN2RzjJbkTd52towYHneMm6KY7RrFdt4VWMsoWn9RuvjENr7MoiBN7RkseP2Edd",
  "key24": "393Xs5AfkRVgyLiSxvuGrtoMR64mzX4sQ3wnEV15zwMkwEj5D4v1x8qU4zSU77hPbJzHeYNz6PfHKrR4p6Ubgfdy",
  "key25": "2B7PaESArXN8a7g91My4kGQm1tLEApeVmWB56hMMsxaYXrJoo4zb6qrybpCwE8sZRcxde54yxV6MweT5xtcLMkB5",
  "key26": "478gY2k7L3QUeti89mKgN4CSR9HjPnpA2RPrhJ3euSqdfG8Bsqa7XgCArPeNrMNKnKgb8z2PfTZQna4h4mT4PBQE",
  "key27": "4DPoRxY97qZxrXrXje21r22vUAWs7MqhToSCum7ggJJz7CNVYxpVErS9xKz8sVfeXvtWHqK2SaXh4g3qAoGFEMuo",
  "key28": "33GjEAFQnSETsYY7gLjE6w1ZZH2BeVLPbD1myL8Dt6g23ExMNmFM6SvWL26m868ufYxTtZXczK959xMv5XZRGfnx",
  "key29": "3Sid5AgKy1we6uxioKzuuErZhheWesLRfYFPGRshefGUWYRsZThFUUSkAwrt91tJV4x8Ly3VcrwEA971GmMXEcnc",
  "key30": "2LGwSGn3CvfHg4m9gESWKKWjZM4PAXcm6U37vHbBwDrX6FkSiS8Bgbt6whhENj9D36D9AZaDUC32vXW12poSbKNd",
  "key31": "3Q33HU1qMgDfYn6J1dP8ZQkP5Z8Nt3Hgb4iJno2jNZTDD7sih8ezxcxmUnAg4wreS7YpLZLdMh5fqF6Mnoey84Mv",
  "key32": "5CmWE6BsX7CSrkNhVXRJWybLpMgHAZgPkkGHyXYGCx3hTawturEEdc3yyJHt7ey3ZSrLqpHME66AgqDyCEoTpiKK",
  "key33": "58ELYp2hqgTZSC5rNgL4WdsD2Z3wGoa4nDy9anEhfG7tGbTjUWdut3dn5Vu5G5bYwVnRGJGBayRpAdifxZh65UP1",
  "key34": "5FQbxsRUhvsJibh78c41ftqjMtTbMmyGBpvsw8cK1m7xWVs52mbFaXkGM2mBmzBTgPhnoS2WSbPZ63fVxFtw3a6M",
  "key35": "4UKHkTXSqtmTVsAARjBN1DRKWuqyw7ck6bstxU8rHn5JdiS15qH7oLt3hpznTfkEZFW4FXVHkjkXWnAD81q6afoe",
  "key36": "4c4vjcvjjVBKQzqCxQhzYtVZmCBb3rLTzMQz9PFGtV6pYGkNJYSfmaGr1DGqKrGXwEGDNNRuGSPnjx2xqC8mbU4E",
  "key37": "LrDVUai6PtDwMhoJC5qcoL6wHvgkoY2ErraPMj8huMr1rau9CaVVT9qx2SxMixf3iGnu9j5AcZyHoqn37qKZ9Ed",
  "key38": "4vEruTurp41poD79tKyLUpeK3GoFc588BoALKHbYvoi9AhwEM7PQ3qrUtu44CH5NRmzByUjo7gb9xMLaHaFDQATh",
  "key39": "2kShBMffRqQCnEZdL6krBofvFhThhCFyZwivwCHtcs5t8Der4XTv5bZf5MMqdoHVb45jMm1VrXad9Zg6XQjEVtUV",
  "key40": "3FaVuU1y9mQjikSVoRr1B2wTcmmJpdm9NkVo1R9TH7Q9pA8QE6YxVGP1jMW4SW7tWmgnimUMNaQFcv8RYSsgViex",
  "key41": "31HnsKmWVwfBQ8GT4LtRLHbphue27VMMWgJbtofTzNWCD6W2QhYEV6mZawEfmumPAPRitQbv1CQPeJNWm9LZLgiC",
  "key42": "38ki1PhmwrcULHNJcMspGwqBY73JHaehiKS1Z1rCM6kGFDDpH6fvvq9CkWQxJZUj1PnyvQHqZZJv6AUWUspgLhw7",
  "key43": "yHWNSuxNdiQb6c85aF4d4VcRw3v7US1M1rxVGRCw9Lmj42H94hyQdnkYzhXMbUX2UuNCGbNGaLvy4pdeD9CreNs",
  "key44": "5RP8hGaEDCGtMmaYM4UCsVUU83P5isPPMvpzLKrF16QnFFinh33Z6GhXaGddZwCyzFypXsNxdNNEEhbqn8CqNGfE",
  "key45": "21FrCg5gob6rafukPFpfbHZaik9Kk7oFiJttbsw8Rk7wzaesX5EeYD7sbhg7PAqFQEW7e8ZbKGxSHKJCRo9ZAnJy",
  "key46": "2fJuQvA8VdgLEBPiXmfUac2PYAanYPG9v9mXqA3FvX1j9Ezkkpr9fKD1PaqoGFgAbsZ9NDccB1H2o4DXE4n2MvMK",
  "key47": "26J3vMhhf3AWPiznqvGoX94TJg3qDkX1fzXuUETDmwHpPQcE8Z7K5JVUdHjEhgRuQhf2TyRiFRcdGqbY2aN1CWMw"
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
