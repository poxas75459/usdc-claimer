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
    "5ub4voYh2roZYoCDC6Ggfh2Lp4ZbfJaSBSVaeGcwt2W6ZzPVcYoHpmt1m2iLvjs4GvsQVLyhkMUnrbEWfPoVGyKU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ALXP6zQ2W4YQTsPTLihDraZauZJkjyphoWFZxPayMF97QEXL9K3hs8po5ibrNYvjZX7gEPr8WkgV6qJJr1zeT4j",
  "key1": "4aemmPzSWWo4Xcrf1Hh832iJaEg42EhbSdnetfoaEBa76Cs8zYDzvxfH8jnzkP1HXzxBfRRDZ2JL1ZPuzjE2QzUX",
  "key2": "3VgwXtkuVorzcCWdUgbvJnBCxVTAa5SAi8b6gdiBPcXTZgqdvDJH5CR3adWUGttAevBQrnfGcKDTosUe4wjXDxhV",
  "key3": "2VJunH6t4aaJrWTU9YoigEF9Ga2BFxMoCSTNH1HB1WvEV6dwSZSmLK6NvhDCXzkmbBPEYVv5MsSoAsacvtC52jZm",
  "key4": "3rRkq84Zb7ABoyG1d3FrBe4tX9Ygc5F6oFxdCYf12kGNjzQ6Spq8EJpnsgVjhgfw9kKe4Q2XaVFRUo6xXeFY3Rcw",
  "key5": "2sPf9MkyhrBfjavANmFWMQyzmdibX7QY6c5YdjZKhoDNGhysrCuJqGYXifYG1NUD94RGu91CZgH7trbtDWQP9aGX",
  "key6": "wAKP1DrYKcY2y2ZLcRepaJbnQjYowEnHAsLBWBpBU1429pfDSb5swT9zbYrzYxCp3Qo8U59DAXRJ7N1S8UEUUsq",
  "key7": "3jKcPwTFs8Gm1ioRNd8qdevHQjv1QTbxW4bfSUtxPEdUgRGZVqxEDssot2F3VohjntBFk54kHbVehtuKCPsVFTZk",
  "key8": "2q1MTjPjs1ok6U3LsnFvHzHsYetMiZAcJcKRSwMXSscsw6gJej5vxgckPjSszmbHyfhKVKLvb2qMf9A36xz3Vxvs",
  "key9": "348GPzSyMqJsh8pxVNNnRdirBPTJL38uz6rcqznMEStKde5AGdUueLygF3SbySLDXx5T6HTM2SU6dn4mGJju8zmg",
  "key10": "3fheRhmeAmArPyogAnWfPiW59hseGfVjdCYXEsHa2d9ZNwimTmJGsKkRYinwp9BVWbq4pNhoNLZ4F9sMDhJqBMDL",
  "key11": "3sYJfLyXoi8zsBG6k594XkgovTbAgMKk1TiVdX4kZzJqP1EBQHueHwcmhYpGAJzbpMTC21h1FaLsgcFcdM7tTTMp",
  "key12": "2x3vPqo71NPxEv968Zuz7ETKAYwKqNbre6itXZ1vAQbCUPgeTKRVc5MqahGysNgbBEttgrPVukRmnzxxBeSHRpXv",
  "key13": "35BXLTehyfFhD7YBc7iT38v7Sdg7pyt68Pm9ihN8QxNAikqeWbq96z9iVdSXQiUd9EnhC6fJcuGjRL37z1aWcAmX",
  "key14": "2GBXsNrWdbem6DE3RZVuXpzaG5U2HFuFXa44xza2sgrkMjsgwJ2xAnjUmqwNu1jipnzZzgzjCRYUkcVjFisrNqQX",
  "key15": "5Y3fQPEbgR6Z58vVAd1ZD1aPY42APyDyb7Q9e2YfGFMz8BzLRwu8FzsjnnKaixqdq2QLw1X76TmZsCQzmYEL8faR",
  "key16": "434LPns6eB7VkgeoGVRvvjmiizza7bKkUo1FAdqFKPDBXsbchZGVbRiqKga4wx5JCgyWJthtcUu8Fwmwp7SPr2ZZ",
  "key17": "2F7V5qY9Aoojw3GT1dDZ4Q4w5nVbBapmvmGeWh9sDwsS4wg7RxhKvXB4G4j1F1kF4kzpTTrW46FxxQXy1ke1DTtr",
  "key18": "5wDnoutoEQHCT4Jz6wyvNKAuTPVLC2VRqkVXMhMwEGpseG3SQ6rWvYbPXgGtrrKk2sxtv6uSevagMMkkWdk5hFae",
  "key19": "3Zijk23dwAf6qJqDEmBMv7xy1ajC2tEApfLKr4uVPXnwY7KkaN98BognsgYZP2Wd2xAS3ALrH4Vqapjwcg1V9L9N",
  "key20": "3XXKgKkhGrroxRP2AHRV2rKoGvsLZs9P7FsBD5V4mwqqtEhDnph7r2wYVyeEKChgGMG8RV9z32M7TFno13WFzdH9",
  "key21": "2PpNFiDQeEMu6cqj3VkD8biFdDxRqhaqjkfnvQQZ2PGTpCG1Hka8vDU7GYLPoJKXzCcDAPYnRkxALvgZqRUrYAHT",
  "key22": "3Eewe2KkbAJV3jEkACyN644gKGZ3eW2bSTJ53aTcMHTUeW8LGjLvqpDtm2JpPUop85svHjY7meLvNSqvnmSRkdgm",
  "key23": "3GgLqGSNnomdo2KqKtzYhGbmkpoGdbfsV4haVFxaU4DGpQvCPnzA9gXar1zhUwaWu3Wyh3TNEZxCoMSRd5mt75RH",
  "key24": "21r5ECGCbRqW7t9oesMA1tcvTEqtpHBiPGM8MFzt9uiUnsccKYKv4YDXjHxUoaA3YqkeaAJTi4VvH4AEBH5EbG4F",
  "key25": "2NgS7Ejz22cPGRBvEGQCob6qycnMMyc2zCASXQQaXBiYbCoQATTAfMToTMAMhZWCgGSpd648ohbVs2QV6RkhmwHZ",
  "key26": "wuiF4577AsDcbBm6xXL87tdSg7MFG6K7D2RJN4ffE9xWa5VNHGmUBADJdWPGSgUyyLa5hdHvYttd3UVW8jh5PEh",
  "key27": "myMHzzFhbgUvTYZnUbjfeQiCcSNHDA9UQUi7ygTFYHmRqDzVdtkjRfHJo3wJ3VzHADuZEtz6QMirxDRdryMwt3T",
  "key28": "4DN8JwawcuUPju9jNAMUoedGeMVgmyPKKLmqm3UfXHYsTnQBACmp6WXLkGzGy4J6VvbTtmRF1EVzToYM2RGWG57U",
  "key29": "2YQFkVwoBepJDGxTUuuAF2W8sYvARmQBHHoqHSqwcNqxKSH5BV3vCa87Yw3fXczB3RbAUMLfNqApLCKe9MmvzEq4",
  "key30": "3E2tjAkKxxCGHfxug93qW6mU5ih2DjJPM3ZD8B8Riz6n8SHEZaeMLPUqnqZFVHfFY17UAoPgw3auds1myY6fC2PY",
  "key31": "4N88AMqbaWGoJyKMkYcQTaU9xVcLxcEVA4TQkBLmBJJ7oNQZswVkDPPpzSBhXE54YDDDzBu7zWiK3TYY53k8LhoF",
  "key32": "2VR1ycJjNUfwPAyAh5D3onPmhXatmzfQz8Ymk9dJjCBbU5zeMy3UjoqoDwcj3yWD5JJJgKjGAPaxBFtRRxPc4y8U",
  "key33": "5C6KLHUK9GajhUyfk9vu9F3D2BJXkmxG1aDGMzidq6tDpmgvJWxi6rBS4afMnccba4Xg72nkfheGnZJRsg8nTgS6",
  "key34": "23YCLCBSKn2ZtEX1tnik3ETD4D1oS71XQ8DjzeK9Gzmt6932SC1bV7B4GVdVtpQSwLPqQa6mNdREZ9gCaA16A8Ys",
  "key35": "3uixUsVu7zrzD8shLx91WK5p1roo6VY8T8tB2REQrVJDQ7C8qTjLzcCQLAESySKEvyhQjC2WnvM3Wpaquea1zEWc",
  "key36": "5UkM41NUhAhrZ3ow97KGUwY7tGaWr87Qn4UBKv8JnBBwLkxAZfiXLRMGgLv2vHJvGpxVtySaMB6LsFqPZrH5ePiv",
  "key37": "3rb7Ysn9M3gqnM2z2cFqbiqoKjpVtaw7sy2WJQac3qXtY85vpf8Fdd6MT6eesyhffUdRovXUN4nEk753VekG53f2",
  "key38": "2R83jNGr8SfuaxVYHrJz6rCpksrsh9D6XpswyosrkNxHkNbKxVBQ4GVZLa45to2NBMTYxWizhMT39pTsipRWy3iE",
  "key39": "4kNG3LAFSHrFM8J7wzr99sZSePTzTXQebYm82QCVX2vjcdzVQ11JA4Xob7QPNPsLxGdZiRN1VYT4jENEGB8LnMnh",
  "key40": "5YqpfLgb1FSdj2qn4r8ETVzPG163an9hiDxY8J79TAdeR4LmP4ce54svL5VoSp62seBsiTyoRVFCyRQ1vqZ1Ysc",
  "key41": "37Wv7oCq9oywtXcWak7mGWb1Q8Qde1NsU1EX3JCPdachaF1p2upXcpeZCkp9MdyJuKGjt7NcuGvdhEG41Z69yq1W",
  "key42": "4MCBhAXmMr4VzFL76E78mvMnVbM5TVfY57xdhizRV6z6cJhrPc2AV3ihpN4J5fwvdwPvbTL2D5v5D2JWFd86vZZd",
  "key43": "4bQpdr8Dc2RpbaTZYnSZXdtPB8wBjZuGzXpsDiAJuiDgbW1HyMfyNe3enRub7Ut3Pj2wxrhf7ynLXqQLrnqn8DiC",
  "key44": "NjPyQSdRY7VHC9CepZVurnJaNcowFnL7AxxivEg1hM1iY8Q67CqebQzrBLYjZQDN9f3JRMQmQAkDWJgnUeCJo2G",
  "key45": "Yv7R6qoJaGdStthwW5feAHR7tMhTxazQY6P3cU9JdXw4a3JCUcUJcoQY2hDabZwv3xKUekfcLo4z9oWWuX25BUp"
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
