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
    "5LmfYVJdzyqHdvk6xKVqpKZNjVCHFqEEMf9sjUnEDna6pmYEpyGVxTSyQfXN21FxS6xZ4bo992faDK9ERMJQY3mr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NQcLfyZVpbkdNRKSKUNwj6UPei7zpCHfTkr8eVwDnm1sktJ8K3tVtp6K1R72AB9UfwgXLn282tTUkeBGSu3SKBZ",
  "key1": "3gNKPwk2f4WPkR3Q384fCbb8JrdfQ7nZVfDBXRzrHEpmsu6KE4zRHWqqGL4MmhAPAwgEpcFEaXCJKcecw529MgbZ",
  "key2": "4Su8Hkq3FD9CQxLLKTKZdjjKGz7abJ1Ydhq2rEGZaHw2SpR9BGXTk264JXzr8wMxJsfH8vrMuZXAPWfxb78M3bLg",
  "key3": "4sFSSgFfME7N6uBgXS24MyW1ykYtRTtfnqwwJXEaSkDw5WjJjJjjLm5r3vDXCh6cBzpSRTzv5EqYT9v8nLCc2KYp",
  "key4": "4mAJHhAVqR6VFUVvuYWMy8UCUWWLvGzhjsji69cADA8QY5WkNmr3qGhhFStXi7CCBACqEw1rygXH2o1KuVNUAMAu",
  "key5": "eiaHVBDVCuYJafaWbK8pqLXi7Cei9N3EGtZgSQwR3yhzG2CkVovGVkrnj2R3PSzDFDH6mq1tbKPfGBQqzKTqggV",
  "key6": "4ZvNHnzSbAqZsKoN9tPZGByikPeUwf9nqZiGkMg1RUcCMuBZbDiVRg3E9i7FxHTc18NnXhjmSzqbSFNwXjeArAD2",
  "key7": "2zr8MhgEpaCL4Uqe75Wyd8WeDSDbVzmYM5hzp4kwEjo2eoSeUBPu3n3Xs4SHmvKHu6SZgs576hucpYpwCRCqCz4T",
  "key8": "2VPXDgHmGzMvcgr4tKF3skveMTusb8vyPCrBnkTAZGvUdYRbSJFPV1nWe9btVfCmmrDzM8CrErBE12dUCeWnHv8a",
  "key9": "3TCoKXFZmaFz8SKufXDB5q7kJzeRDJEKFsSbJh4aL2wo8TYgJZkCDGaXsBcMZup5SyyHHD7hKS5jspRsLho9gRTE",
  "key10": "5Rn1zxnhFgHer4Ho3io4HyN8HeVFxAaqiAwEyESzjNZ9VMBXDmP8tQFUqDKSKCT11NweAgpd8666ayHmS5xUaYc2",
  "key11": "3Gu6zCjf57KcEHfDweqZgXCouY8PKDmhmKFphBV6k84oJMJC3qby8TisSscY8bRBiCWomZUMxYJZzEEF2Eo7wMKh",
  "key12": "42vBgCndPLjauYWpd3ajEW5JgUsVuuwa8bRiKJus3ujgoUAqNT6pTPnphMbs2UrHP9jmj1q6ZBbs8dayV8bqGrYH",
  "key13": "4L3sHDZKGQAQYeijmNLCtBDZVtRPQWLnTf8qhqtcQUgNhLUFWb7QDV15jjXbjR7HR4qCh9q5CznnjAKZ9yLVwstn",
  "key14": "3qP7dc87FNmWDiig6VcxRzZYmMknvpFTBCmuTMqiDzeZoSvBwwCX4zDsu2kHFX4jAhFBKmyqiCBCHy7h4xTDLcKj",
  "key15": "4Aystfqkt9UyN3RJSoTpU92SuJ4azq38q5kuGifypquzfmBmNf3sjoDLcpJ5tGJdv2LBVcxFjwycHMGwMjMhhUPy",
  "key16": "T5dCahqFiW56bDtaDXwmSzoWh6SCpDyUUP8PAXJXdMZUNsRAcTZkc5X1aW25b2gdhGfui1mQE2qneB5wsppq4ja",
  "key17": "4G2T8BECaVdXN7gJuHgKM8vx8mUSuFhWnX7v6VdA2quctNEDJuk1w7gQGA3juJs6sT8RsXprafSkVjXNwyi1VzAz",
  "key18": "55CvboLDpxJy4ywpQK9Miz5abKT4Rbz1CHKBdBkBPLBCYwYkLNDCL6BZfpvKd9Z3UvVQXt6gM9Z8mTFTJDxLPZzT",
  "key19": "3EZic49YokaRrmhto1y4rBNJ2W7mcjGhvdGWanAq4QzukZL1Z4ed4ym4TV8jDEGFVe4Lu4wDtfQxV6A9q9C2t5ZF",
  "key20": "4uJcUFwVZ17JRtUUYH5zfkZEiCuiRprcHC6qHN7KA4c1WB7CaqrE3S4Uwjn3UKYW4sACdPaUKgpZD6Ps8ZgFzGbs",
  "key21": "5b85ZfP9rv5FLBNw2hVEqXj9A6QAcmH1rGCyFZYBCzpGR1ncS4RwyRreo1Mh2bG4v763pMv8bpjeXQjJZssLMidi",
  "key22": "R5Df7jqVpJai2BasfygtZbFaBKL8cB3kZyzFqNPkk5x2EF5438pTwsYPc8aJfg3FaB5bfabXeoAce6tEcAktWZ4",
  "key23": "63soYT27YcXUtM9nbTycPejZHrFdsffHPJwSZRvQfRH5Sdixnwfdg3zyCNQ7HoUqtc6PzKDZERdJZ9MrftaGb74A",
  "key24": "3ejX1ZhbqfGUvvuuFNC9ZumfCpCnbS2EXMXt4Ju19t1rShz5JnzNaNnSVnd7WuRDCZ9LaudPoopDKH5GqcSacE5f",
  "key25": "4i8s2KEgP7m3EQRn7Cw56thtsgTg6AFpU4pwU1CQcQ6PVHWTPNvp6FJk5LNATfaTD2UVsCCFnXgt2MRAEmcjE6eb",
  "key26": "5Zw4X5n7G1pozde4MYdDQ1ApBH4hrxi5v9bS7FdG7ooCFbCENcwZUZrakec9oKrYmDuajmZfpsqnyEKHtQpD1Rju",
  "key27": "5VnNZKkUJf6NAdqd9AT1zFFyL6zTBjQDe7h9xXYCygGEqTMeARKGfbZjshBRM19PAAxKVQYWjyMG24y6Gc2cD9q9",
  "key28": "2qnNszWiasZX5WwhUXutXBuq45gbcebjLJep9fddwYqDYtxsALhwvDWsXySr7x9u1e1KDVLuM4Ti8Sg6t3U2AxAg",
  "key29": "3tgvQREytDnp2BWwMoC2ZHuYjzNiNVvTQASBfouRwvQ3m87NQhZHZKwJ1JkfQKArT248ZrTofxDzqbrHjVYcxVU6",
  "key30": "4J16geGTAGRMexMJU4RCr2MTDTsXywCRSExEcDLxLyMd6o8RoZvELnMYQG1Mqh7Z66W94EmSCG9tnnYfB4ZGjoC4",
  "key31": "3T9LE5pLdzUe3mCraiQ2wcLcWddAmKx78c7GRst9VBHqScJk4HDTJMLDiWP6Z88RFph4fTMjoXzqfhxhp7ESKf2c",
  "key32": "2jofZyHpjw6TXtRa5MEoesnCCFMr6eWcWoAsj4c9rWYQQFvjuoVJpArx1SXCN15jBRKjVhRcWJoXSZgprc2sPPND",
  "key33": "3JuNGgfVfeFrCgvHmhtBGeojP3CZZ1wm2pbC6DSYp9bEPDpWvB8vnwUEsq5R8jTfLZyAV5kJLCDBhdoVffbamqRi",
  "key34": "74SLbwLM9NYPBGh6XisVyExraobBEpEeL1yC16xzPdns58ewS2fJFwGGoaFKPyBVvrKBcyyEbYikAXsjdEv2FPW",
  "key35": "4nBq1dzHkLfRvC5Sreodc6XRgaP4PGe4gQRCmQFD5SXohfot3RvWU2wXupCvBLAURSwzCg3mHQCbqQDSGYJFJJVE",
  "key36": "39HvoLgWWkDUzo3CgA3KGjx7evZ5zPH9KCD7y8FC1NA237JhHN8GfeWk5hVxP4Zn2VVJo5BhMQ1amcN6B8mhZ8UP",
  "key37": "2BPPFt1drZC9pe3qHW4pzaS8eZ9vJCWFbdybgX4o3ju51AA3rg44ih29BYKcTzXcABaE4dWuG4DYebLwwTpnM4HC",
  "key38": "9f4QGSLhgbh71rDRgAkLmwxqBZY5W5kkTNbDoJfwP9sjjsLN2FioiBLEqnwf4gfwp9uZgvP21jeGCLMH1ccYsmE",
  "key39": "4sdqJtocWWRsu3LpCcSUGwdd3dTX6V3q3PhUjW6P1RywE5rwSkwbYhbznWGr7tacL5Bd3na3KfL9sgkyyWDKev2K",
  "key40": "3NT7u6QMMP5nb71y6gkRA2ZLtYKfLerFJ6pRdC1AzPz3bAyypNPUKkvRZSyiqtZxtwnADVqLq9LKKv8ANm3L9iFT",
  "key41": "4gXhfMqiKBUQyUo9rMujM6deTk2Loghbx5Fi84kLU19tzCRN1EqP9HWAdFdVCd7RSu5Sfb9qkmnmbySKFELewHUA",
  "key42": "63acyRRjG8iEBRakPnLsnE1fc7vZ75RntSBiwWVkJyfz93dn5yFP7H2zSS1GwQ2dfjUoy4R1Yd4KNA9RyNXyRx15",
  "key43": "mqMuUSRk6Q9mMmWm294pfPdrhFi1yG4Pu37v9TWh6bTE46hRNTiq6HjUJo8tj5wzSEf9MbxgFUv5Rx1dYFxncV3",
  "key44": "2fDKddAMWPU7i9PqJdhZkeSCg2V8uQwGAw8DJiZ9KMUGqAbpLy1FzXqpurZbX8RuZU7C2C6JMLJkSk7NzeiMhSGg",
  "key45": "31eCWrtej93Wu7GTbGBfAv2qiER6UjKVRPzFk2Ubk626fsPbvyP78Cjtm1cSQwBTs7fxoRbme7VTZX2bxe5QUEvD"
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
