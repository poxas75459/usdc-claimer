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
    "2FkYkAjvJGEUZMV6aaGVyFfu1Qmj152Ukg1oJhfsePfV2HVomXHNnBjnRhNCu9vk3cyPkEtPk4MXkJXgqTAVGQPM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uyzY9vzN9KrhRZ3YgV9keF1W1sTFK1JUbxLBwMqfhauEkRDHUmZDdd7io5jXYRfJ4XKEraoNvfMwTRzVBgaAj97",
  "key1": "5DCk6nn9TEdcHSEBqo8KJQEmpjq7e2vb96rpMh3qKwDMo5oH3YpU9uzeXoKLwAsKyjT42uZghdA9szyFwQ1JfFFc",
  "key2": "4RQSdhyEgQQGzfRjHAuS74jHMB3aAng3cn4MTJ8NydRbs4sV8wzDMQhqQxLajiL7Zw8q2DvXGukFQ6ugtrfYarYz",
  "key3": "5uQpeJN6VngurZnmJ4Gi5MLozp4QXzQcuY7EYjpiUWt9bLUgtXG75BmWz4jQbmtn98ymvrDLgApMNLuYR3uhG4nz",
  "key4": "3fvLFkK2wQJpha78bUFrcHQjgoYDsgai7ojd7KpZiyor32hY4uvzXVSJFeFXbTDCS7HT8dY5L3hJhFw43zLBbbPx",
  "key5": "2BMeT3XidpqT1uHbERC1RtkRWUtL5yKGVx2o5XL8CWgk2cak2Z6vAdce4QRW9M8F31A3KxEWvr448eimsY3XKvNj",
  "key6": "Y19wv5Uqq4XAsduiboPExD16LeRYQC5Nh3N2GbCUo3we73jRDXXdvunFjPxBfMxFThWeccYekUSRY3wxrGakLnD",
  "key7": "3WgjGxA4D86hw26zB5V1DuX6c2qGTXPQibXvXr8DgEXnxbqtZkDzD1bkXWN74Wd51P3Sp4EvE9ZzArv6jc2inJ69",
  "key8": "2q1fcYg8iY7g2ZHQyEv17WJeH4hYpMdrqTLrYuq7ztwHfywT3aVbRufGoATYFkZ7s5XHwJRaVjvHHHHzQY8wRPgx",
  "key9": "5xw4rPbyzqvVvWRY1xqdvskBTdDymhWswZxwfjNNtAy4H5UirLz3k8u5FwdSg9pNXUE6BYXistASPmudRwTnGwx2",
  "key10": "128cyFYLQBZ3bxnGRAdweoLDtZ5x7pmzWg7Hdf96JVvcVoKbfpjDXYHTfTYTFTfCzLDZ7Pr2hMTeUe6dXtgcKNsj",
  "key11": "2iK2B5fqC1xxpV4LmvYghjxF8ZE9J2JFdqM15EZiuZT79cAFXmorJAmxVzmzgi5pspsHPWfnjZSrLCdhZ6hjtosC",
  "key12": "4oS7Bsa9s5nDFzF3McqU3oLjsxnaoXGkCZrDkUcdfcZKKu2W23AegsC4KsAZqyBfjCRXDtY51qFrXjzQswqet7f2",
  "key13": "3kS13nxos3qtPqDKucvkuNyFm5TNNAk6TGKpsVc945qxzTXhbtjqD9x6N57XTtgKZfd5R6aKSAq48m4vCzz6YeWx",
  "key14": "u2rP5LsF9r7SNAadoXhKFJi5YKT4p3zXGhaxm2vNftiC9k5GGamiQsgi6V2kYHzKJ4fgP9TYddSgge4uGGiiutc",
  "key15": "CTrMGHwbcGpCUtHuGAKHkre62zRzhFsrg2avK3okVzgUPtnSXzicsAxSjaYvkMtcEyyUfEhzPAi7oFAaXZ7mj8w",
  "key16": "534rCNc9Q3Z5UszA18JokfooNaNwchv47hDeajhchot6FWZLZSk6xHAyW1uEsa3L5nnkWk34ibAjEjrsYK5J8Wxa",
  "key17": "54koMxQCbDcM3LC18SUredL2DGuEcodi6adyrxYGYLZ7T9jgas5WjQBqQcvLVbnvFbsB1xf8MZAhTYhLFYkDRTxv",
  "key18": "5GjZEDTFoKKq4XiwmZkf8pdzTVjbnR3Y275hGy7ks44K8PywnirW6bmkYoQ3rSUecWwWufbfpxBiD1Z34KBWSLQG",
  "key19": "3ziSTVfsXkyi7miVJfghjVGiwEqm2QVyAiCNXcL56AddpA3T858A6Z5evsxbfdvroUUGig3t4RjP3XKztXQSR1Lx",
  "key20": "u6siEsqA5HDSKmkGRwcLFrxu3MUUB3URMiSYKBj2zqRDGg5PZf2K8eQVMkRwZScap5GTZCQoeL6wqvWWXyueLdY",
  "key21": "123bNgE7Ya6TFPFMJ1cuQxuUbeK2R8nLSbidAc4rmUGPVCjgtiw4qM7e1Vw8FywjHPj2DCVTQn8bYrfdVomMQEKE",
  "key22": "4dDsPFUeShuXc4v5pHJixaWi84QsLGwKnAznikELbQXKi2X8NRabHVHuc2V4gzq8mMyevdHEMEeWbntmPJXTA8Pc",
  "key23": "5KLDGP1RtgNWPPwp6gpoYRY4pwtFJ71kEath5mNjqwc1m6GAooYwBgtYJUSPnBeEkvZPiRFEqYeY6iBYxEMXw1pL",
  "key24": "Q2ZpkfLgHbuF2F2WcarLj3Q5Z2YjGbL62fpq4MMLDX4ZjsneN2PaTiUSX8SeCSyxno99TAxPBMGpF5HDwFRYu7Z",
  "key25": "53wjrgNemqyexHDydauGdB89hhMyNq9FKtiWrxoyUk6x24T7chd4cXSJdhZLbRogqqFeqk94ptfaqrG755SPppxo",
  "key26": "qM1fx4VWdz1YLFaLcRCmMuXqPWxaVxeB27TZVkvDxPsfdvjxXYx8zxbdNFPk1vBhfroVmJsQT6iy16nbqw3crF4",
  "key27": "5dBsXwMsDTbyEucZ447pKjjmBV5Sb8WLgVy5roMBxHLgUFFaTdNbJVBwdtwigg4egDi622qiMp1gYnybYVgzB2xV",
  "key28": "5gExoR2jFXZRtVnSWngUmCHBJdYGeBmuk84qAPrgom2U8kJkeeuv7oEsYwJgsuWBaAysuUKNVNsXDSsNCfXjGzCu",
  "key29": "PypnePQaHT45E2Qbaeoiq1zgrCQpcCxYQL2d8eRRExDr9TVjLRPRgwgbKks7C5LF1PrxSU4Bdu3eACJM3TMpDRV",
  "key30": "3e8iqNQ32iCpqBfE5qfj1ZbmG6zPErWVfxCxn2aAvYG4YBi1eDk1MWqUPB9VcryTbHuAwGAUqsGPrRJkzfa8fNEA",
  "key31": "38TVxA8iBiin1Mp1G2NXcfX3oZpLyP4cD2tpPFHZL4ebACAaTBVa5m3F42XTxe9bBhLHM9cRfaGMjmHK9bzQ8i4y",
  "key32": "4t9DpCRDW2D6doE4UYr14tj5GgXR7xRdvpuzyWj7rrRX9sGNR3BwpRL1M7udgjPfYMvUdXsvRDjwHYc3fnpKodvN",
  "key33": "pHLCZR6JGVKFcCYzavtMevGEBixcoMFLBD9Hj5XqY5JTUUDXstZf7AJN3xMZs4YHyNbV9BVisz2Ybv5tgdnPcpF",
  "key34": "3hd2SFstjkT4dbNrRh2Ljx54B3ekhqXXz3MK8sydmFNtwnL89n2faQ265WaiqktN46aCcmB7XJsavTZ4DURdXGyU",
  "key35": "5qpqhX3N6yeN2xYn8UpLobveWwPWtmNQ9aHZHUCCmHqFPbUvDPifu6CPRaB9Qto7GHrDdLuN9dMEshNAYnrbpqfr",
  "key36": "JXV163xXn5ywSMWvdWPZoAL9mVQaTNkoCo9vA8KJxb5646JAFieV6KW3LXjCnUxMibj1SYR4q28TGyhKAGcTLs7",
  "key37": "4K5XnKyNebY1TkJUcNMCsRpKUZ6y7K3EDUUDCRcHymBupde8jCkY8g8xJ3Eq8rdbMs9VxYCQRbP2oSrjYmjdH2Ew",
  "key38": "ZVBEF8wjMr9VNeUZ5qWzaz3nZgYi1bWvi6j7pMm7o9LiWy9d6syoMfq6wjCePB3zKoPU3A82BBtopuo826TC8ZT",
  "key39": "5PCMBAeyLqCr7ZQCutaMFcK7i34Sqk5F8VcPZgSfoBBaRSG7oA8zbjyXkuBew2pqPxLJanKhoMqS5YSaGscnkVDV",
  "key40": "5VBC21VoobZHnccpJcSJ4P4i5jRk4yJKzZaMsJGcgLHrMdvagZ1qdzKrPMBBhWAELvDfcqXcAnG2s7HRQ9XYPr1D",
  "key41": "3uYdJmcFVrv5evJgjUsYLDEvaQRVp7uMRbTDwx27A3KrXbsEDw8h6wAL5VH81AMobPh1ocg3r27S275bmXZpsfDL",
  "key42": "5f41U8d2FJPeprpvK1vtYxDZ5ssDT9CHqB6CGRdDzn3g4S2kFnDn1jioLHAYo7VL1ctJWMtHbFgEev47oqNSpbxG"
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
