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
    "37E9dW12aVKi2sDjaGbmC6MFh1m2XF8tfovBWKriMA9sJdLa2YbNhF8trwWLbKAqP5ZtncECiqsaMqmhTith9Ycn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jgiQPKWdQkJhEHFk9r6EThwALuXymhjd47dMwMWAmn9vJGYctQ8qBfGXFrKpu3Lxmsd6i3dCj9JPKFqWGXrg35o",
  "key1": "5bEHcS83pb6XhBtCAgZL1e2aMLY5Yw66mwuyYqqx2bXMoah7rLaAd1jmcXV2Z6Z27CZpxYvLvdGamaydLhg35JJh",
  "key2": "sEGy69j7jiMkTJzztVa73MEjYStEtg7VpSViE4rVcpoGbawDsPogJtc4U4N91RmTQ3ebKqNQUVVZtmRzW4D1Hen",
  "key3": "vqk45KDbCYdQ1BQqh2kS2aj3zWU6UUkLcYRHqvQz3MWKrtFwtDiMSCn4Psk7kv5XcWTyKhvfh8H5GbJ13Rhe98a",
  "key4": "2sxNg1BcfDkw2Tvvauq5WccUSdFgyDb9BWs9KCGJsXeCYegUJ5MD6fab1gZhxV4LxsHbdoLeVV8MqJWgbhFmZREy",
  "key5": "48GUsjWmxvC2cqMD6MStDeFRnnuTd5ewDR9MJ3LEXaRJ84bqNXqhVPkcrKXH3hVxnYaLh45C1EfzfJttyyfz3ESd",
  "key6": "5HvZULZAyi7MJqK8tDVm2SwzEypbgdsouu1VqcTViH7BGhY5FFZc1ZmnV9EwQaU4WYz5cb1JXhKJqvupRZi9pdgz",
  "key7": "g6XZmKYNYSBZs4CYeFNFzocdJ3TFHD1hN4oru7aZUihJ4pZeuJAff1xE3L3tY9UPkC7Uo3iAGSzGvPymxwWKpQ1",
  "key8": "55M7xniBYubvH4HonkzMthf4GXTzSJ1h1T13LDDRPuot91WQ6DJDHn3xNd6DhW18JF9uwwsN5mRAejcJivd8F6yv",
  "key9": "2bx1xxtF88f9uidCihbJ74ymcJRgyMRLherVrPsW6Gujk3MFAZHzms9Lt3jn4atGMfSFCvvzfGK9M2kGyThnKbaT",
  "key10": "3FTX34ehbnuutJ1tVzaUkSsSy33dgNXXM88wWtgdBB2rwG19euovPmEb9QCymtSJb9MJa4CcYmM3B4p2yRrmG2AP",
  "key11": "66K8mvUWHFXw5f32wqwybdiASedojoGNp8csGen8kUQuatMexorF8jJSVrS9FFvdL7btAtBjz5fGSLfjCc1FrK99",
  "key12": "3duTPHMgpkCLN6nXHgv7yrrhahdcQbReZKmr5yjW9XCS6gQrLqf6VHNSWkHHSUEHWvkrR8xu8U35RbBrnVsf6uLF",
  "key13": "4cum5kwBQWTFH4szh6DY37Zsbm7Rw7SaxmiT35HYJKDsDs1G81kKnCZu71448uRaWCMtQ6S8J62eeUA9UpiWWKyg",
  "key14": "2FowLP346XEKg5afZuvr7FRfny9TLp87UoyEhPa1y6yJcJWpkHtFv6KAZCwM2RZAjnQQFLkBAPgvXaSNzwDVT6jU",
  "key15": "U7je8Q2vdTYfpLoxNYJmcbrNWU9fywkexgH6urLyxLJKxhHhSfGRa8dL872tde54xp7V29tEaPkocV4LZjmU258",
  "key16": "vpyonnXvXG3aTLJnF4wwGzGbJJ3N3ZBsjxUWgGJRUqoc2C7soiJB9uA2dxb7FVBqSnqCsAVuRDigMPrStqhAZNb",
  "key17": "2TKRyBdzcYzjGVUi3b24HGPp323rXmZ4wimzePv1nfhwzPKAtCniBy4t7KFR1puaqHitCt4Zse2ay7t7CwzXrhQu",
  "key18": "63wxBd7YwUxizZJ4KHRJpravNqDKpVHhGe73zBsHLDLBE3ZvHP6jkLb5cGQCuLzhFpPYfVT8YtgBUcjVq5QnWvDr",
  "key19": "2TBBMS62sbR4PiJwmcVU7H648zLqJk2QoKHpBdqRum3evGBgStUhpXea3uVK4owCSGoAcFC8nzYNgt8jQ7UvPQrJ",
  "key20": "56qX3bgnPrAM6gScefaDyad7jFNaW8Fq9QpepVccEaXhNJYWyNTdUtRmWtLSxduiX6Hx7cEy5SWYtPTZ5nnuctQj",
  "key21": "25TuYtvWqJf9zzJHLrPmgq4k5vWg25RiZ5kGzHEdFcwoBGfMzXqkm2z9YrKJMScWJRExXgRb2iZkNa439cU2UMBh",
  "key22": "3z82JYJ3HEx6YJbHFmikcND6ehsrQmAFxYqvooj7KkQ8xmCFf3LdfV5mURUc2yURpRNmmDSjimxBNyVXgpi53WG7",
  "key23": "4srtxXfMmoibS5Q2NTsd4cMSYfsSEiqRe27ovfz4j1do7JYjaDHgfEGgbXVhq9rKANcAsq8uv9DfSvaehmErNziv",
  "key24": "5Py1zJvqGAg8dyTJj8LtLqa1s17udqB2H9fUYFN7V9XUqHMtoPGmaUCSLDruEzT1w3V5zTENcQRwShMtciqSLjW8",
  "key25": "3T9cnkxAgX5FsppoJ4uBsjDN25JcE2jCvezFyUb3myqrbaXawFX4P8tM3UBaC8oyQvUpaXnkxXBJohm5JGF7p2Mn",
  "key26": "3WZFjK9RJKPdNdWWJYPcSDJ4qCxD5VZoSJm98PzzyEE5QKpkdLQpvonHsKLNSQafKS932kJY5qV13bWm16ck8LRP",
  "key27": "2dnAED7w4Q9Vey2LN1LUZq4zD6VNK9FSDrsqZWesjNNCnSRVdcE9uGAsoikPHuEPVumNHfpUAWunnQZvRqzqMoJ6",
  "key28": "4TGFffbSzXrHyLyf5n6v9XZ2Wu9RmWBwZufvPvgK1V5FyXvW7rizSnD4ecUPrF84fkT3LNGvkEJxN4NQjKRomVfs",
  "key29": "5pFwN33sRuWX9wnzGEds9XYgfuq8fSpYg586WAJgK6qRXDjZsxBctfG4oUbvfLv4uT3zUmAbzj5veGNy5D2ERYPX",
  "key30": "2DfcbfjDNBvHnfgVd66RuhzmCRcBYfyEQeWBxDprPBPxQLE1cxZqixyncTZBMyGQGnf65NewxAj2oTFBYrLuWvhR",
  "key31": "51yR62sPN1daiNR8yvidyWaenKQD4tD38QxVyEkzwWyt7WNJdu9uBFp1gjgFgt6jhnw86aXRu8rxDpCoUoPuxa5e",
  "key32": "Y5Eb9WLjYzbdVeUVdzgA32Z4X6pS4adt2NsoL5qRBxyKDGbVnBjQfDW5aopgbqNUNPY5SCbK4GZ4BjhqV9yKyvH",
  "key33": "2QKMZiMSVeyqELQNLFKJ1iCwHvgbYYH9NaPweLzAR1JKi4ZRgamf5r4Yw3VxodShXkogd4sAh3RLvAvNCenbBND9",
  "key34": "5FkTeqANW2z3gcLAKvB3wSBqffGAyFLQWxX7xd4ZAZ2hSnEvNoCJBykKwqzFzgevzTtp8hcBbmLctsCut7xLBDKh",
  "key35": "wt6FvHZL1nJma1ES4p4qXYxm2VBVcugA2RgAhFN2DGR2yrXP7WDNiXL6YDaVyatEs1NVZok2rn1pqj7ffRENZRy",
  "key36": "zinv4SHtGhYwyqrWfVYmgotZuo8dmMD1kp5nbegyT4xy1sAU37VFiHqdykr8Duwr7NUkJrhRh3Ta8mgck2FSeuF",
  "key37": "2CPrSMjcGTHeeQcpLRcPYoM5VV6p7ZSC9LfZGbZizsm742bRGZQAFJjeDkTyuLUvkfENiEZEQ2dwFcjyqhF7Jyty",
  "key38": "QGjPjw34ZzpTKqPKcPugfA9h7XAC89dcQdVLXqbujXvoFrdM6uGY5vykcSTu58WckVuBrZA1wTJYNNcRZAK4Dhi",
  "key39": "37m4i4L8gkYe3LSpH86rj8aQEB7a7G9WJE8RW3w4UnRmmU6xvd52FUA5RjWBrSLS3s6A7YmU5dCfsNYAWkPDVtbU",
  "key40": "sb1KGHgZgmmyUhKnSyX6md1AQtkYqSrQssy9izYpu8oejJgrxVx4G636AXja7hTkYw4m3o2nFeqrUAT6nryeEkC",
  "key41": "3RVGCZucnBAH9bZ2JjiWNReXxxqRQZ8inoryoK9yUUMp5vDrTVXHPTxX9GgN4XLUoGyTQMaXmpHBfmsBu6hHgzk",
  "key42": "5S6pYk73jWvjMTu2MUnENBufqrXji9E41zT7MHEqgsvzYVWVo6Qhh4Sao4zJDtQBk6bov3BvpsccUmhH8iYCNonP",
  "key43": "DJLwMFiYXJ8Xj46FYoQanRvb23WA9H7mkmKvfqLZhx6dx21dpMF37SFxHjmCysnV94BaTeY9EviPMoNw27a6ixK",
  "key44": "PXrJpSaqEbT5koQMup5S7R3tWVG3UYmzuAsjSBCubbcjU6kUdXzzuHLmt3SjfX5XuKrcXonuobLi7quFJsnLKhg",
  "key45": "3L2XvXDAWfavzkS3btGhEnMN33u7oWWVA2oaJSkxAJw1adzRJmEAD75fNc4JK78u1p8AYpWLF321LvGWw5fdPT6k",
  "key46": "YK8ibzo9ns2nCGTSBrzfBqBWbi6Yy56dFYEWfFrV5opo1sjuxvdg7jbipAPtdznaAHQ6Tr6FGWKePnpJSvHrSwb",
  "key47": "3LtTYiURcBFaygXPwSNY6rBwhtr8VnuMScnJxjQmeBdgHgNyFZapLXBsqNMHZjXoyQ9PJfET7cnRfas2L2ad6kk8"
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
