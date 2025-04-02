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
    "37VBRpg3bZfXBB7zSnJpaareMKADsddrokVi8xChWLfNzmKbbkoWdhyX43mQERbEcSh5GgDhJ3nXpj55M9E734FY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JkAbdhd24vT8F7cd2ig1vzs6nt1nMTJpsQqXHzjsp7DD1iqc5mBsz8MrKXsUxqeC3mvRbHHQmCWf1W8iAYTBuz3",
  "key1": "2q7dE6Cwn2pXmw7xSU7F2f4cuopNTv4Bws2g2dp1hVH6G6gb1zwMuFyxHsDYei1oKEyk5CP1HgSPgaDgpHptq8FG",
  "key2": "4aZySqhVFfX6XKrBPn7e2ZiCCMP3MPyFHR2izmoAXd5dNSNysq292X5ekaQwii8Ba3rUYbdwnj55HiEZYsKGfeK",
  "key3": "5A7C1mFxebYvGwFtRpCzfFjeGtWoN3SnsJUYedCrLq3Sb4uuyBAT9YicHEBNyM9D9EAeP6M2y2TSAzacmGxpyjqx",
  "key4": "4vX5djnHbnQQvqiRqhPRc5fjiKyKJPLAfCiAD3xKnQM2LRHehQJLv1qdssUMyqrJmvxi83UFBAjfs5JjdbzGhTM3",
  "key5": "4zNxDehZ3mUPbNKa2NC93afRBunbp8Ju9BkCk713omtrywsn4vHLQrRfB2Dn3MAHHxNBwL2m7sScwEweRtrwNhEd",
  "key6": "2GNam34Zc7fXedPhmcnqU6NdGtghhLXLuTMVCwBatmzL3C5bX3vHkGqQ9DXYtSMXgouRGzecsUyUzyirA6SQo3qP",
  "key7": "2iidoWe4SciYWP5wyHGtsBLq3FH468wDYhLw1VH6LyvHSJusfL7QWdyk3hDATzmH8UtcGuu2xV9SvGJBPy3EcxdV",
  "key8": "4YPJ4yUaxEP1xzNSmvSmCjToZc5d1KEJ8T2tjyddAX2eGCbE2LvBps17Ro1RWN8vbZ5QSX2otwfhPqE3dgtJXSLJ",
  "key9": "Y9qfqjLTLHZxtbb7JqvR89s2FYFF8hAULBxEqtRnkEr52gFRRApGqBUH7Mt5bMf8RW3AbaicpjtQ5RxuHt7Hdxt",
  "key10": "2RMKTujqyWjeMc2xHL7HpD9UZePVfq42FdhkjaeBHw1c3Niuvyrr9o7ySnZn6qHJqWcGcPmfGizvgjY46hgz9FSi",
  "key11": "LyoeXMHLZLDCd4jgwvj9Xx1RtjpfaKaQfv5xpkHaTChbEygpjmgLLUfKWg9jHUvTmACxu7YApyxzAzBP7FHu5j3",
  "key12": "2zmN3ZALfCmABca2iZcv7xnHraFBXqNyeHkvK3EFJ4Y4LYxaGPpAmU3zvNzRGyRCP9UAoyPPVFTAqfMX3Gz68Ygm",
  "key13": "zo4SYMG61G91wpVgk7BfhoeYecvghoe2pgDnrYxBhvRvDpLXMa2cdLVAiNBnALAj4HcQXaDwaLCT3CJCRUJDuLp",
  "key14": "2y99vnC8fdcw7E8yxjkiF74u7KsZ5P9LRNvR2jsrcGVjLyCzEituAoAkQqLxWaeCxLQ8BrY9iweJceSWPiC6CXXE",
  "key15": "5bqK6M17TrxTbC1Uv6gG7aSMGGmjGJxHT7UPpbUs7np1mGU23A3XwZx95sLxftga1au9mM5NQvY69gfRvSkBmTn7",
  "key16": "zVsZ7Lrcs9vwaTJmNuHij16REig3ibETaWr4oDVPCxT8LbYpHHbTro6dVt3Z5FYCuGg5zsKehe65NGgg9X6W9Di",
  "key17": "AD9AzHip9WXG8L9dpYdj2k5u8MGLKc3uLqKZEnucBRa6BxDnKecDQBYsB2wVmaYN2o9ktfDX5c4CWSv3LATKPM3",
  "key18": "3PYk7R6eFZLBvDjtBdLYjGpxVvTQCbZq6evWCNkmto2bmjjxSvybvxQ3snDctPx2ccbSFSwrwVnq9Y75pMEdQuwE",
  "key19": "5L3YxAWmZDF3kYTE52tjqazMbtaKbKjsPqjYQf63aHFsLpdWbbX8bSb5J6fKHDgUrXY7qPEnPJAhL3xAc86LDYV1",
  "key20": "2WPq5ZE6XZdpYooRYHuNMnnP4CGoqxtg5e9s2DtgMYhfhNvie6efzcsdT945PL8GyAt5qoifTGLMdP3Xe9tLBBMg",
  "key21": "39Tk4P4JasHPDe7xMWNQGNphKPLe7KjuQ7BfPTsSE287csSZjq91G25DJXDBcNXMa7iEMDTbnL8gKDMMBhggHZ83",
  "key22": "3M8VFe2a8ivQeNHq7WjRoYjdtPWgEEb5Q9mLjLAPV2DDqU4nam9XGoFNYx8qR6UFgR33uhVArnzmsHJJEdr3WTe8",
  "key23": "5G6tJtmBA9P8fcqhwNBZrrULr2Ad5UQFGiPKBSdQN6yENLsZWez8SsPfhmwprX2Uy6a7XPiiXRoi4ZUYq4wyHKXQ",
  "key24": "5gmKu7s364mczAELX972NoTe5nCaiiCk8VQt6RzHpgaQ9iSihjgcALpgSkwnQpuu4WaaP74CpGNdx6uWbCuDiHZN",
  "key25": "3WGvzjj8RwUkNvwaujcXTnimDxugtMCnLZYCCXPVsgpSzgN5qmDqXWMP25GkK5SqZoQwvxzxsX4th9zbhuKb5GKc",
  "key26": "jeDXDBaLorJfXrvy3FLG35FrbC7F26r9HPQsDsEdJspqYrXH8gV6W5U99Js4688TC36FBshtExystnBpn85drgP",
  "key27": "3ATerXRP6JwamGAkChsfDVHQhrfmC9t73WnU8ucchsaRLmeUF3puFRttAvMBYDaTiwyyTeNKnu8szRZiRv5uS8TE",
  "key28": "2tHyFHc1ahu251FsvgLFgphuMATq2CaciBLinSRWTbYrh9zQMz6U3McukwBQeaFmSxoD7MVC3MZ5rzf6Xh6x4q2y",
  "key29": "2x27vvV1HShZhKrR9h5JeNVrS2ucAeZhRPpbbUj2RYTjnvQThAXc2vRkzkQ9Vco9rwLizJbKJb9E6E1hrpRi1HC7",
  "key30": "3rdQ85pXe335p5V1sAaHwtptPVabpGc1x2TG7a5d99yv5hQkrH6EZHnPeJJ2LFVW8hnmvtpXbRaMVKWURAeEayKq",
  "key31": "3K6S2KdsJQMCHfjsaosSmB3Q7Zxur5g2SaGUqrdWwGtzewf9er3tx8LaXR6mbybUHFU6DTEjUzLF7gmBsnxtJ14b",
  "key32": "4maFPD7AgLbchExoDpTzbAmx8pnkAReF9DNUguS6TUafKHvZGbpPW6LsNUFmAH4Rh1g5uEyH9sJXaCz5qtc2gBZD",
  "key33": "sAoHLVjKzyEUp5feBZA5s4kYCxkafVPDf6RuCZgDsNy42pCewvCJbRSNdyeeWqzer4wXfiVf8ptfFCCSVzABX1R",
  "key34": "2xRQDoLz8hW6sF5HNHPJWrkFJDtwL2nadBEWYenEKNB1xjLL4kfpvfZAWLBjKvo9Qw1EDPuQemingQWxMZMtoPBM",
  "key35": "vRFG58dhYHoPmp5LK2WJGyJKxSDAj57FXEy6XiQxefXNFTagmwaKdRWeiV9b3qxf1m4JZ9rgNWhYydHGHaPrj6B",
  "key36": "SGY6odp5m946R1KZuPZZXQJoSrLLgB1ea6tXiS1rNC6GZpzmJjD7xdtwBffBD3B9H6pU1XoLtxvcAHjbDgAj7ZZ",
  "key37": "3xsaCiTMxVx8m8Qu6RzyHc5HyyeQ8SkuiZzwb1UbDMQMFGfHwQN7cDrRUsBQW3Ncosn2JBBiAuH5H7LEdcTvbZQ2"
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
