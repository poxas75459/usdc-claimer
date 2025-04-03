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
    "66Mw8tJEBKcioYpeeGwKb9XvAHNrga7XvJZejhk9Fki24VhASJrmpdiywRzMob63UytgVpQean7dtEFWFbximWvy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43HmCFLJN4ZRiTrRGgbT94uYfT2rqvQTcJxmaidZTcXqcmGLC8WUqozaJ7K6TYJHkJExFQyH8N6PtunJgSwUCskA",
  "key1": "3LkjinEzP5pr9Yi35SxxR7ySe3BboDy4vMtk2g3wAiyY7hYijrMtR7fZfyJyQx4MKN4kCkQtEsiqPVLtsoHoHQpF",
  "key2": "4g3wf6nU9dzjk2mwzzruvv5o7ruU4iotbwSp7VfmptKynLM8c3cx7KKht12dhsSEdLiQXXs6GLgjd9KhaLHv3Jwk",
  "key3": "2Fh8UDfTEfKLRTkjfRbNC9tSTsNabyVRMpgtzzpRsY2opzBmPcvhnyM43LfqgbATQSdEoxYkK7MT5pVhe3MXoQjy",
  "key4": "2CwXQhC1VUwnPJmqQrFL65AdEjQsQeLUMvzSW922d7WnPuiTe3i2SUKETWynCiEsWL4tN8JjM8rhDT9unGM61hLc",
  "key5": "vi9WqX79hqqqF61e115jJtrdtBLDXUHr2Rn4GHM5tjDjj9pR6FkHYTWriRRtc3u744REwAL9AvvhBbFEXsNsPG6",
  "key6": "5V8YE8VDRr1SVPKA5tgvqudwqG8Xe6Xy2BRxkvjKkdQ9WffGUE6k28sNJ7yDivKKdXNEymxnxKjwqmeAPPvWAgA6",
  "key7": "5B65CqoRrkNPxUHrF1xzf92bXLPoMhae7HjkaNWmjWicKcPdquwrM9bzrsGqoZSeKVZvQMsUwShjUECMUJ3iuNeY",
  "key8": "5g9oK58vs5a9PLePjoGtYQgz6LCfw5coE3MA4Vo6BtRdurg6MhfAAckC6nfd2LH1V5NrSUEUcbUJvfxa9p2t7qcv",
  "key9": "rWZmLurLXWdNHbMrQYisyhHVELC53X3Uo1UgnzdaG2Cx8utA9biHrLeLmhZtZsbYJjZ9zB4htqmqbm4eDq1PPi1",
  "key10": "6498rKg1PXz54Takoe9wEPNKLde93jeK5tsane8oojsUG2vdTiwHpvX3ZoStUzGg5nyeanAX7C8MTMBFJFGX9vYk",
  "key11": "4pyN2Rjg6wr3cQLm41zQqryBZ8wb52T6GTdrGULifocKzDporA33BUSxsPHAzZLAUsDcJaqto26ZJrKTThPj9f58",
  "key12": "5yJmZAXUUJYtEr763P5iKB3Tg5KifmQe6rn26dZvFoQRmGTLY5gYHnYTV1pomcrh6LFbB68NNytKkQwrGW7YB5sB",
  "key13": "4osd1uHksvZXeNoLjPTEeKkezH4kj5TbjiN4Gpj4xk8bemMMDhV39HNHCJDqBsgfEvM5mG5Q9uFhqrURytYk7XUm",
  "key14": "94oPbDJc5qp2HvBQ7Kq5j9ajPEUDbKdaD53nCvseJv94NuXwb58gUQxbBA5RQ76pgJMTDNNTUfXbWh3e1U7Mt96",
  "key15": "2WzVzcxie1kcxnRQWmJnhrvULbrx3eoCdNhK7VcWc26widwJSLkory8gJgW19cENjRrAXtbr8yaqpmjU8XFH5MPX",
  "key16": "3DBqDSGzUYpLz7eGT5yANxkPAhp5By4Ze8GdSGBoyoQstgkQx3YFsJiAqJzrNCh2y5oCrRBCRRJL9NVZNhxSw3iM",
  "key17": "2VU71JWcQZZNhFE6jug158kyPcNMJ5TK3K7Bv5khTC2LmGmCjVoTdgPS9K7huDyjo3JHPBgzjrET5rNEA2tm1TfN",
  "key18": "4FQoHVypq6vhqjkbEVYnfiRSpb2kQw5CyCfPi65HRtGFhQf38chVAZqmyBZs3SbRfWVaVS4T14ynsLR8BVAtni6b",
  "key19": "eiUdGDmcGQMWowrKfCFbrQFiZk6tNjyrrnwqWKCYxoy2AwBo4TAYeACYfx1guLUqZv5RNvp7x3XnwbvuvbCS3Lu",
  "key20": "4xxN87SNK8Fkz1gmrB7abDW4dti719fgPAMvff4eksk3ZYc4zFjXfvf3aGPq2WSLTXtzmBwNq2L852Cr8Vftfohg",
  "key21": "675p2rsi8zyQCR1MhVma59G6g6NwFwC8N56p1WFZdQknT5JcQX9eoBqjFfxXgFdSL7q9d1LkdVHUQXGXsSM5Xuoz",
  "key22": "5R3E8NVoGBecvND27wL1cuFEHyho1PcW7tkcSiLoXEwAcaTzsr3BbbTdH6hLkTFcjpxPXZwLYekY3kAgAi8LFRPz",
  "key23": "3FqTWiW3UV88TB22V3SPz1DZ1ygga5PsgTjZ1tsEP6aX5d7XniAsWbmoESfCuBptqpJb22SgyoW1jYdKjgC9WhoJ",
  "key24": "24iLRUV91qKeTYeS75QTNeGjp2sb7pgEk6uPybbgqu9fzZXQ9f3BSLfogqN9KVK1owhDwL5AZQ9mDZ9Qx25ZuFDt",
  "key25": "5kW1RVZZLmWpGNysa1tYz33v9tgBod2Vr5WFxicqM9oYbdg4xREdqw9hKcxDSu5xR7tnxxXnxiXMUHEaHPJ2sqr5",
  "key26": "5n7sQcj8HZRTdeksMCGdbZUWoPTCocBksZHpCKB7C72wnyHx9a3JHtEPV7M2BcR4PqJvBG93jYVz4hV3k1Dy8M5Z",
  "key27": "sHMkbpp3vPwpmYPFXyfKFN8DSJy2pdQmSNkaUDKUfdrHQhW9hphGbUUMJupbhwTkiW3iQpRgmyEoBKLgUCGjZGd",
  "key28": "57946M3zs7k68E9ieZc7giPNMPaDurhNKMBSwVxMeGscSkp47TUEt3GussYWs7LRA9No7FmXG5FMevTCUcJiPHQE",
  "key29": "3ZgDkcMTsTPWCFGESxbojPr1yHyUT6YnGsQTXajhPXsHZDaGdwXHEgn7X2SfkRo1KUq2Z3deUqp7mzbHpkYqs17c",
  "key30": "63ydVRMhhtHr9r6HJ8MwrUZLapnQ9mqZkJ8eQHfwKQqgF1ydfUP1GsxTzXSJmQYwnY8M5x1ZM15YSH4Gr7zYoejA",
  "key31": "5T38f9UkprPTrYdRBF4HbRJ7JgVH8CQS5z2vT1Rwxxf3jkXxe2fmG6o4BbPJeHLUcgRFoHS1Y7NK8bp4aY98NgP1",
  "key32": "5ptuQiKSGUxiwLogkxcQxCBvihWsfNtnh8Ny9SbUR74PHTEYbpyErTGNLtLrqL7nLxfWcsEfhrCdmbFnJ8UZY3ME",
  "key33": "5cV8kebxzrFyd5JaPMfsKwNz3FAXcmZgaf3SvCuFLaA4pguAXpgXkLTxrapJuoh5sgibwL6nAuLkruMi38nM9d8y",
  "key34": "2M8KTuN9vDtxnKqdsqG9hRfQEi1DXiksuh7js8FMXdN9rQiFtdyXPAnDkRSU1jegBz9Tc6Gk8xw75AYGCYwJAaMK",
  "key35": "2LVY1y9fZpW59pYtX43nn77j5NShLa8ZrVxZoTux5BuPCQWu7qpw2mMCgSNLtnsABMTC15mvo5seRFYXEgyME94d",
  "key36": "54HdFPxDt1jvGeoL9EyMCjQVGtj23JnMJctPVousQsnNd1jsgXkJSNqf7MZkSAY6D5DueBPB2NoPcU9Nn6N16FpH",
  "key37": "66SLWa8bStA8wnJPtB86s4WkmbpahK3YajhZqgEVHraKEwFHgy9YE9dXbH6SePx4zMdootqRukrFBGmfNW9aGSbg",
  "key38": "2zG2FJLrTpEHRX2yeVeBmL2pxCETf24dTWNdneV12ubTd7p5KNqKYa5XpzwYpEMoQwek2fuo3FgquaavMZEFDaNc",
  "key39": "RaZUpADyCRgR5tn6Ejo1mBfoLa15foYza2r9SgDSEecGKNgBC7UqrEkks3rSvTxXp2JysPD3H7y5Wi5v24Pnu6f",
  "key40": "5CjfNsaNB6hLvQA5kWsK7Z4nEvoAHhsEE9bwRejHL5bATnvjPDvQrfyTBMtCTtq2pz5c1kDWGtYHJZoDuiS7WUQ5"
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
