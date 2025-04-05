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
    "4UjUDPd2LbhG2oHgsBmwrspNeeXJib9ycbKvDyemRtWrCF1Ah8dyCySkwT96EjB77Aev4SL8nzTRyAkKtwrvaaDk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33KFqvFZmv6vRqwwnBdCTV9XAcAYHH5oeGUPQ31cdwR49KzQ7pegCVd8hAeoN7QBMkRfBf2J6cSXfg4AnHoCKduu",
  "key1": "2Vb1YdPWV1HeZdBtqd1zqW19Hky4EhzgGQmMZZk3K6fx73K1Xfh2sW3vDGyGQZphayXjC7M9mfxqxd1GKKHXrt5C",
  "key2": "4cCLJUanuzhnYuyDpkSvR1syg6ZcBMUsLQ1iNCLDewMNY6BQsjiEEACDMsq7HchSUJypNwKoDxVKXR1TuKo24Y3Q",
  "key3": "2v9F1rjrVLwnr8qfBfqWRWLnUvX3ChgtSukUbcn4qCmXS79jZG1GREsAnyHdYhJbcpU4JDE9N6F4wDWR8Pz2igad",
  "key4": "vgB8ZQd7j5yQGkdES5m75RXsjWGtLZxfsryxzFghXZNgoQJ3XfNYBDU9oicRzZfBqssPezFdDMG682KL3n1c6v9",
  "key5": "3n5duQNNMndSvoK3Dw7mQJG6cEgu7JcZG2Sq5Jf9qAfFZ1WqPEczGAjifBzsaHs3RfcmWJu7ZodhxFUA5WoXb7Jv",
  "key6": "3XPWpmPxHGNbdUnsz3Se7euUVbgmkq8QRJQsK9oFA3GC1SuLsqv7XxjR7r7uUqELY2JcpDBRKmxdKa6gTvGbtooY",
  "key7": "5HuB3iVxmpzN1avvzHGVcC1a8RdwHgEPUd7rJop381ktNQP94KUNZViJGH4784mo5Spn5RqKAzZhYNzTgtZsJM1t",
  "key8": "3h8cVqHEouajdrzGUBS1S4unxdoviaz63wKtiVPHWjUyinoG83Q7h5yvRgkDm1GQ1kyF9Ce1jxVbTze6UYHhePYV",
  "key9": "5zD3hKqxdXYMyPPRJyD1wwdoeKJadWqJQPQxgZU9w2nCaMYDnce7nEXiN4RjirsQ4UBzYJa3GWHPPJ59tSAX19mY",
  "key10": "3ixXpMGc6AMrguBU8NFwTdkfV7UZ2JGGwr9oUCqtJQvoLRC7j98RZGTvnRKQA1wzaGNNfAodgcFY4fCW5ayczhTk",
  "key11": "KZaxrmAZF5gPAsjjKhBZHMWh7NfKcZGG921QSZGkqCLzQcxMB6wEHPdLnkVDmihzW9ZgNhb7toWn2xF7ddtn9Kk",
  "key12": "34RxswKWgDYA72p23yaJ7LyepF4CdTQaqQYeSYghoCjYKhs7iUHkiVTsHyxXdKVVbPdXHNMFJqw7wvWt8677ps4r",
  "key13": "3apaGWjYYU7TjY4NKHZSCDLb1o6GUNPJTHdrngQBL2Fo6Y2xyRHQm9TrSeCgUVKYYS4YSDhseLLaYK1dMh4Ts4Ys",
  "key14": "4JpHsaDQMqpEPp18o8MxhV259HLwLy6aYQXMykxrWxjaGjDJ7TxC38uoYKRnffgusCBeiHWzZXjQJoPtUB4UnkLe",
  "key15": "28E4eQRh58dUMwMa88RJscpyhNGK4beo5oGhxFs9Znzz27rf1Y15E39vDuu4fTHVVszRKamPsVZYYew7GeQhDM5f",
  "key16": "2hAVx6P4ATaeLzFtV9dVFMayvrEHRCkwCn1RZPJpALEAiHXMDB3sG748Y7wXJQqvsM7gJJ5rfcwaomHWHeYwBswx",
  "key17": "3wusw7sFnK5aHYy6HsD31Pxs556MjVEfReaKn2Kn882nc3eyFsEEaYdyUe9tMVq5seJnqZMBevxxWap7qxjC7Bw3",
  "key18": "51B27bF8ZSNHhFBtQGMqYboz8G5pLtwxSiVtpnX4XaKLmGN6PAWkb2ce1FTwf5vmgY9qrEzzPtj3suTE48LjaH8e",
  "key19": "5bxsjRkAHHwhD25irDyUmmRUKxSpThUMoxfy9fpAWJ3HqBQZWKfinXGZFLYhqZ64MgLoVrsdwPNHSJg8mQDTyG9V",
  "key20": "3eB97U2PTVCgekhiDU9giCPGmrQ2bbMTsX3rE5eCYaisZoTrHV33pbhm1SzRzabvYY72txBQ1azENJxeLB5exsk",
  "key21": "3vF1yDyqifqURPrVsKTUXGS6PeBNog6EUmn6v1LppmhFm5pCV2gEBTJitWiiBULjYm3dvJ6jGGcRYnpXmaHW841y",
  "key22": "2GyWyKWeaADSH5VUSGLFTAX1ZStwtAph2BXzLvgisfmUdBGzfeH6rRMD6NY5sswixroMC2TxHHvChpRPEcSVaC8y",
  "key23": "yrhc3ZmRv3WZPrwSSwZL4Xf9tHtaRnry4sz6766599f19jaiFruH8VKJvsALwhpPAqHWL7qJEbeV68W7Ef7iwCn",
  "key24": "4aNnXKEGr2c15DNbNrFAwggcdeFQ5rkfhndiaZKQ6Fj6xJec3k2VDJiF1YUL4xAPnLAKDteGM7Tq1JzodbaBVTjx",
  "key25": "3WgrqcCczZgUAG3BPNuLpKAxWrf3UFG1QizfgfRGSAAA17qwkUCAULaL8PyjtZgdQnXHCrTUeXPVWUVT97gt5qEU",
  "key26": "5srkNEje3gzpqHVZLQHVtRAMKWCS3csX6GLo7AfTxsLTKQNbFm5kpMA25XXkVUUnpXBdKEcFmJhcH8pP7bDF5pA8",
  "key27": "545U986YQxWoBqNpg6dszB1yaQY99jFFn2zoGBtkJTaMxSWD1XcNu9DorQ91PsBmU1Qa89JkTWnjkXwqW3ifhuH7",
  "key28": "55NxcDwm6py2xpvcwCEMNhzbAjjxoAJFEQZhsNzQaZSsNCGyKymaYe3RsCcBU8QTeH5TvVf4fF3bkEBLikVMXGmZ",
  "key29": "22H1xs6mPXqt3fTTLBkxM24Berk2CRig1vqYAzUsEAsGDmbHutHcAnvcPRGucSZYAU6RtgSqFYyyctpBCDTc2Jah",
  "key30": "62LLBKXiNAa2YfmYVauLFs8p1jFEWS4wPcCGo2ReWM8iG9ujmApp6jPSXEkFAjqDAgseLK9QAhLWU4LQQAst2Jsy",
  "key31": "2Pwx8bmSKpLkhthfKT4jDQ7oZYGA14hB8N5FYFqYQXzJxzDT17mGZFBoU4G3jcVBHirwJTXS5fQQH4sqmLynHMT",
  "key32": "4fWSUTk6ZihFr6mzwqLeXkK9mBgtqTDvHeTbSKEuHffGavLrkFvVypBuLcJcg4KZy5y8DYJFtouxcCsY7kxw7PPw",
  "key33": "4czgT5XWbnzDb9SYdUbrLyBHP5CdXYudT4WWBr8LiF9uj34ij3FDN582yziLSSKnJpsF1z7wJFNd3ZBcx3hGzXSX",
  "key34": "z5FGiHKocRA3jPGZ2AtJTy2g1BR4h6JuUMoViZEafaYQRv6W116ofFZVXJNZ6AxZkaoHiwpvUmLXijoBf1c61Fv",
  "key35": "MhmYegfL6BrYJnfceDzsKc98L72edX8vTY4DMwBnxHaPDJ3mSUuTuawxZiGAieM3yRi4UJcw9WFJookbDkuhmtQ",
  "key36": "51CjFKiPP6sBAWgvi5wfE1xjjyh4ACWJKx2K61VpBmpaBFnVKfr5UxsfoSWStFNnZ29FBnsdZy3mzJv1y9rywcCV",
  "key37": "azmjYBL4ceKurRK52uTHNtAGAvEn5AYG3Ag3LTaevPED8MeDDYVpEqZ4Xr5hve6MiYZzuhPFCdQJHimySCWFqhN",
  "key38": "5q7nMUWJLdzziuXtHUV1w9VU5umdBQgmipY3cMBb2zTAoSdKgUC9a83Hn1NJXHBKDVxN5nR88zuTNnpKcMrLfbdh",
  "key39": "25D929RcNPqP1JteiW43TfNEAjCVSontAPkQHmKhLiUXfrC5X5idmvM8FRQNsHWT9NXrDSFy6PH9yykFGYV6pgzU"
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
