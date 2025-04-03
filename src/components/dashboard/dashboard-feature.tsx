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
    "4NFiu5xt2p4CjnPrVd7mCCYuaC7G7qEHiGVNxnaY6xY2k6HnbAt4UfDeGE17u9MEViqtaXD7FLYqXswMoW2WVar8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7qDujvE4du96XFtwvT9BxMKxeq1mbrR9qSoba87DJhbt3Xa9QYmD7UosPcgmwNo8tfJagjkekMMmwEfjUVd5k7j",
  "key1": "61BroN66a6YVT6BtSdBGLiQLHs3WKkyZrfbAECTPCkw1FRCQcSrZDFHra5thcVfpwDiQvqm4YUrveZgnSoVDxZgW",
  "key2": "3m9ef1QjjYFquHo6ZCxzjjf4t4ScUMx6LEbWwvq6A6J3VjX8SrCAa1wR1prDbLkNUEcBEPnYLF4eGmhBegHbTijb",
  "key3": "2NPSzKSnSq9m8pdTQAbxonAwXysfU3YE6C5zCh489GUMaVL8EaY6DJM1cDPgzU5yFPv6Phmd7UxR53wKJr8QWJtA",
  "key4": "KLJfdvipdetQQJPL3v2F1FdjGUPbdDgPDrFViotusiKA7QQXGoNeW2SbAH1czAdAvorireocFBJeBUeFfgCDsdX",
  "key5": "5Eo596n5wmkGyuN7xXrZtWm6tU6VLtWe3CQML7gNbzKQT5ZZxd5ZXLtL7VvfAgTxgJgP9fctXorAYftb3aehRsuo",
  "key6": "4Leuppm7i53FQmgmRCVQVRVW4hmfhyFEJkAHAMJqPD6eUCpEPbPZQPquhBjQcc3rgfALJoibbqtJMMCinzqoSoCS",
  "key7": "3pewZcizAgz7Zo42w59ywtbQyf3a6M7eCtQ2H7r9i6VGV1bcSfowuTLgeBU9LJoJCHkxcDwuhnNuZDkq2pXf8uJ4",
  "key8": "4QQXQj1e2dmKnyhDRdzcxYnYm5XzAZpnENiyMc3wQmWFB2mo3dKEjkP2cXy8sxQo8nmY1n6HQpXaPvp4b22kS9Q3",
  "key9": "5m34vwu21zEVzj9zUjq38SZETHABZc1CwaRQog57ob4WuRHjx4wwVjZfFKw31rtPhVuE1ukvJGRGc3nYrpPFsXRX",
  "key10": "3FQzWNSkZSFxsRe3R1L6oesK1wqumDcHKs6dBe34m6U8TrK3UaJ7R3jyoZdmZofSY22pjjy4NtVc8rKPFm6FjFNF",
  "key11": "58KeJpX4F6DL7gwppFgstmWhUHJoGuHkNLYSnMXHCdVRRAxvuwtWEtqU4uMaVXP26SPDmRRRqpavbewKSmrPAL42",
  "key12": "5zFKcPwwDp5GUpobuNW1WXgiuZRqZtHoTWuxHCc5pFBS7iH8WN12PDsZsmDeqr2hFh7qG3HR49sY26Ce5ysempDs",
  "key13": "3XNT8R4uezAbxdBkv289EamBM11DEocsTNMjCT7Adf4i7jzheKeNUqL3qC5wkJtnmD145WZLsAz7XqD1BFqF64SS",
  "key14": "58sEZDXbP5ycEZDTfb8jb7xjCbTKnqs7vEysEpLKes3g9XR3A3Bh8SVmD5HEeyRH9uU4v41GERadm4GnJjWBBF72",
  "key15": "fTeiX9LdMoBTwfLCaGJpHQQMhGAeL2rfg4UTWQppnWJcqdEdgVjWEmfjJqCR3aNRDHpL4ue4PS2HWaEM7pjZguu",
  "key16": "32c5dZcCfp2kZsQCYsRsWWTW7fkyWBf397PjnnoRjykYmfRnQ1P15i6mCjncA834mjEDjGcR1ufcdSKUui2BzhPB",
  "key17": "5QgPvLqELQaUBD4gEVCLMCAePoLphdGuQ5xW4ANKFBRasg4ZNgtommnWoeCGKs1pyRCFaJGJNHS7aLH4UyCVMA4j",
  "key18": "3frAbPvXHMEGdmyqqTHnkE95CxcQ54EMSE9PZ6LAfvtfVuRpvej2KDeVqJHaLKeWMbcptGSxpftKr3Gr47CWZN1L",
  "key19": "dYsUFW3d4MMZ5AqsZEhGyFVFbhV9kBztEuNyTysMxCrDRhNbwi86ZQkw6iWKFdTEeKTXQGqjMarth15YmZcwZKz",
  "key20": "5xnVkNVSS8iLFLWF1gqGRqiPyns7L1eDemPjkk27vRaSstgDBvp5NpMsqo9qppvaNMXd9iD7kuXWtkxraxtGSw4F",
  "key21": "2TyiYzR3SV8zVkTwH7yVbWgRuEmHa9EtyMAQYnKyUpySwko4icVf2QhqWcDyPdbpSxps9ga5QoEqBfYoJMEjMTG7",
  "key22": "5czyb2imomKRes1JLxTfMTwPaRb2afqKd1uTocTGQSUQdcGB15mtitAJwqb2ufst3Y25b5vfWEeVjMcKmZEDcctJ",
  "key23": "3wA6AiKSrKSgnc9dTSiq1HZuxs9chf8nu3YPQ37996pzRtf9cyXXe1meuQvQVNxbeGabzzE5dzxWZ4Hsg7HhR4ae",
  "key24": "s4MtBHQHZwa9hAdPkAUpZxHDE1jhw1NMYbbnFZ63HvQKjTZ7KVR3x1JwpScmth5cww4pHeDTsTx3VStd3dPiFJe",
  "key25": "1zsUHH9uK7UMFJhRCdXDdFSkSgvth8uC5iULjFzHuvu4ihbTSDGkQZDo7qk5bAc7jFHBRLcnxrc3ZrPbdDemN3s",
  "key26": "3ZBQrtwBgCyv4v94WoKqwZHg6e6nJwuYR2fq9nMeMgraaxkmfAyJYFmhMLERQgv1BGDriTrenK8WZWc9cB9yEmrC",
  "key27": "3hZ2tfr8T4QWeBhhASSGJwnHbJnsAxdNbUb5D1hk91RGbev1cSXdrK1imw8PoxMBQPbTZdbpMu8umZVwoLhXG2AU",
  "key28": "RJK1MXcxE9j23uFRLRjDxEbkeXNRyhjzj68QY9Yq4qj6jmso3acqp8gd4mWWS2ktYjn5y7JfU6vTMHbMtxrCsqf",
  "key29": "C8422uJtABCWyXJ9E2du9RDS8sh1aF9R8jN6Dy1ECdrnbDjn2CNxdQ9CcPGv3Xyt9Q9vxMx7K81BktCktR4duzr",
  "key30": "23wHDAJwcmUCLKk35kpW4aPZjehJ94o2JormVN5RmckbiH3XiD8Fz2faP4YRifHVdWiLApkwxqdszVWUKiyVoMGc"
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
