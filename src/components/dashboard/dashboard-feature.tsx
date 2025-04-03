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
    "4iNsMtzu2SMiFbcdnEUfJFSqgDfMEYdxpwzuHYbzq6cv476eAvhmtckzABDmpdAeg8ktyQ7CxbbS1pcEVgkFqo8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bpDCJA8sxB4ixEYYvFH7R8GvgfjTJeaS1iwZn7vfP8i7JGqKFURzbiBMrqaFjEAqLKRm4XUtPScfBhUkACP4To3",
  "key1": "2eQQg2YXLdiVU8Pksp2bspXXQzp7suNxRxdaK9gLGjLwfHe39hfc3JmjLfwd4qXkccxBq4PeruNKLCBs52Y95axj",
  "key2": "3tFV3DSaoCuNg3nv55A1S5e7w3js33npEe2wwt2uupRWxgKc2f4fn3cfYuQEQpnQJeUmXBDj4nJKcY4guXYKjEsu",
  "key3": "2jiDfE7jAM4HuMrUzXUGThNA8jBrkPC6qQpk1Gf2T41SGphqFJkhvGeom3NKxpoBAa5hvgKeAwxGmfdpxq1fbpiB",
  "key4": "4mBMEY7ikd9rcE3DJfVJRmBoEj2PUadtLRrkFosXpzmoSNebGiUFKqkUeoTJmAXyKaCffVAwxp6NAhsAp3gvQqXh",
  "key5": "eTWYvyYtDeDx7LY6PRkAiqy4dLSwFLyvnJR1Wgg5yypubPQM2CkP3e6JJmQJQ7QmuRmG24mTFJjM1vzGbxoUPMW",
  "key6": "21tTyk5D2EXGro8R8XwGGhw4Sj2Bz5Vc7TSzSjbCvPbrmb39QhJEWWhcHtmsxyS3Uc4ocoFMB9d2YgVnhpUzkGRN",
  "key7": "3juSnRjYzU8cSHa1A8BG4snGqTLeb4kiC9v2DxesmQ5LH4vPmCVakLfW6QrDcpNEmV92hnXNWoUVLDJV6mTenQUE",
  "key8": "3vGevieLHKMtapYkWyKw8pwZEywoJecRSr2nn2fKeAMEdi8KWW7RtzPWVi1EYfjwtzHWdsK5ULQQJVyLxJC25wRw",
  "key9": "2XbaA3TabHk3GpHWGJ8BeGb225d9MGKExNrUeYcR2p2Pe4LJc6KefktBAzaHhL2kSKSQFWFVrgBfwcSS5V2XVJs6",
  "key10": "2VjEiHnNfUrRV1foJMsBu75v5PYZTduogRGj3nDYiCuKvLQdWUsDSjVPBFz8tSjqnuXARBZvAbPAd6Sn9nmXzgwY",
  "key11": "oZAjpu1odG9vu5X3GW3F48GyAtDyJBFTEZ1ZWTvUdcRxdZ6M5G7fLdcMYCnZiXk5zH9pgT3Gwn2heX6ECZzd2oN",
  "key12": "3maqQqtNjjEKDLNA6G2EiLQrVGXToKxHdvR1csJixbanrfHRsSYYvBfRF8fngAQzKCc1xsyUHYucByxiV9GTKe9F",
  "key13": "4v6wdKogae9zRgGNdwue2W8ueWVm7zLw21MH8F3MD7ZD6chG2jk2AjM8gDjoVZzCCspcXLqkLLhUFqbvFvVy5ZB4",
  "key14": "3nbkogvnx57qqo3UVd8TJ4pdyswaVXA454Mv5k159bHeJ32X7Y8ULQEHFjSoHmE2zgj5v3Xuahuvn5iANWPAHfaL",
  "key15": "2HAAqk72XuujJV4tM4BDyfZyaWbEvQLzaKLzZcTGU4j246jFLsXPSBkwxFqjknbmdgoQrsQDKRZ3b7oQ3WdeWwvs",
  "key16": "5FhTDSVhuu6VrxNTkWWwmZcabiA9KX19ivex8MB4D1kHZCTGQoiMs13SY1HuMQ4NCjibgsrUGXau2sFPhBTsjizW",
  "key17": "2PS9W2hMJNioBLHtyEEwAfyd3mhABFdonvRg3LnmDkyTt1nNqXWoKdNe2vZFoSfkMJGrXBESY56u317Vw7LBmzZd",
  "key18": "4KKwr9WF9BRKsVBiEnBMT9T7V6P738ZSxrBdfGpDQbKPvSwqmbzo4QRWM8LL1SmkPkGL4whQpKLxjsXkSsEbGhL1",
  "key19": "3nJ7iy8f5qc5PGrxRJCgxXkpyeG2Rke5g34xriEiJ8hzm2d1W3gAvR5TU7U1jycX38ugSjHFizmKKZv6ifVAHvhJ",
  "key20": "5Pzbt6G85UnRBpJVXMz4z5L31r6VFEhBeyW5NHcwGQeS44kmdbcG8Qj49Zbwe5RUpwkBAL3GF9yANgA3CcGH42zW",
  "key21": "562TVoJkByGdGbnyVkw6TQxD7NGhvXpAAqzDkLepjn2D4eh82uLuGGSZYyLrjokJ43ZnTjCYcYWRN8dQzwPeegeJ",
  "key22": "3Qbn2LcYBU8uXyWudWakr1sUevKicQrdeYEMyz3aHNRsGVzFxyUQzPmXMuv9dWFbaFB4FmcPQSsFkzqRNdpCWWf6",
  "key23": "cMidWD7wGXGc5oFX83FA37az62GXYtzmHUYSXJSecjQ6kwaGV5SyGKvYxymR7EZLmhYU5jqipqt9yie6SGBwQ8V",
  "key24": "5PMs4Lh3ciLqAaR4SfdptmgYuyNqNKgeadxY9X1XxevJMdAhrgWfcTQ3wwk7NTrQD5zU4oC4wP5YBjo4ap3HvGH4",
  "key25": "3njzQrtiKYMBvsHFUF2rs9KLtCH8EgchEd1UXeR11bxQAApf9qNwjy8Ak3sJEQy6x2tm92QFRnpu82K1Jk3XWjMF",
  "key26": "k7dFoWWCEpzCmzX6Dkw1Epb1TqXnZHQ2jXv7HdgTR82psazFoeTobGK1Dqg6TcG9QZnF6b2P9hgyiw5wRFBFbM8",
  "key27": "5QNGDxm4yGnjdvCxBPUzkVQCxBN2Zdxm64AwR6nVncrGXmE7CRxun9yDk3vqYGqbP9ZKwBBZA2X3BZ5kiMfCzmsZ",
  "key28": "UuTmaCy1J7iUuKuoQd5gNs3EfsiUUMjEY7VDXBY2rstLvr8C5EnAyTTWp9L4FeBVcDU9sQ8z23q4evvFjCTVWUQ",
  "key29": "jU4bfm7xNgPbbJftRjxWjU8pZTjHBW5SPRVdajYBR9kMvMYmi1dLn4gcYro24epE7tjsYL6sqQwiSybPJUGawiH",
  "key30": "MCtHiob1hwgFEAjG8ZGBFYiq7kKSFjx9QayEErpZwj7Ts3RXzCsVGPUVvv5YXona7wPGVUqjZjU81ghcwKUR1mE",
  "key31": "4Ygt9snuXrKjn9koczGwmdTA8PETjRQTBUEbY79wonaaHrkTEtJ5PFJkiREZUJfxFB5Z268B3WX3K6UeGGnbDTEp",
  "key32": "Uc9stkVyyc75a2z2iZPTUEM9hp18dwzFozAo9b2YzVjzqDauQipfwEbbqCzaZ1juhFaDzfcctJYpohgm8HTzUBf",
  "key33": "TtWnphyQfduW8dftDCoVAXRWKRvbTG24bWhtf3xkNyqhtAaDNMB7RUPi5CBUNtRdCznCEzWSdCA54U7dMFM1yRR",
  "key34": "5mXgwZd21Mcp8NpcmsjJPw526kP2c1XyquTai6FRiqZw3XsxyKhsJPvX5Z2NNXhNw2Ja2P9CyRYFimwgnDXXibQ6",
  "key35": "5aUcHnnNnpMdSjN8Bn8apQ2DbM9sgkK2VQh4FKLqZ1cvFAJK1QhiqZPZyzBaQMhfb1XnYMCN2bbtt8ZgXaLFpYwP",
  "key36": "4JFLvsY5srwDegPCYdthfZ41BpjNLFmDykF2aXn39Dx3f3gnDWmYQHk32e8HRXhV1YMzYjDo3oQ6JeepGbYtyyZ",
  "key37": "B3UAMrQFoHAKhERj1At8tdm4WR8KUf8X8Jd8tQwMW4q1rym5gBYCntHcbPSS3BHyGGHEYs9xnJByVh45QHR6Rjo",
  "key38": "3WpNNJThpEDNSFgDPVQgbxrEnUzZbmX2rRQzdKdHR8hHbkFVWjeHADZnP6LZhBRFQbYikropDpAuotmuRXnLzULK",
  "key39": "24WXhpbbuGky2dHzWRxWNdS2Hg6uu6rimYVYtV88dCPKyVWhfGaruDLBs46DZPF7sdY12f5PJuLYLGyL2BhP2a9U"
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
