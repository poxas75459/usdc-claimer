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
    "55QFZ1VdCYUDvCVHuCbeCvPQrDC4H5miBVYPBrQ3U1JErWTzDcET3Rn6qtkjXka8HUiqJmhSZKdg5sf9Eu4mBp96"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ysHj7v7DuNEWUW9XUeKVkD816KQpRMdkGocoQe7sbYVZZau9sAEEpboecfPzZ7deUtC5Ydk6S1ehsRGXTdCkua2",
  "key1": "7RwcwED6FdqQuXvUHe9mt5HfcQkPfmW1gtyzbZe57B4U5FaQJMWtSAeL3MdnSkAYEeKsVg4dqQKagCC84r6X3HP",
  "key2": "5Vy2Ny8ZMRyCaux59MJa8RXaKF5vispJoGkUvXvLdmuxUcnd8fVAm17jub5nDy1rfdUkiU7zSZm9xUiVts5w52ei",
  "key3": "3wPdRmnD3qu4Ke6E4PpHhmc4EpSZG9tFSC49TWN991HNTZjyqcLzamArTMehNo4xLZ2bBKNNAtUDhYe3cRPdumUy",
  "key4": "3HF3DPQPd7EmywC4KMuui28pAoG8b2PbK1wFqQFHHE7azBJQVyDzWXRo5dQHMdmE23fbKXq9uT9xnvBFZexADmFp",
  "key5": "cRAF9zycf4v8zuLPE1Z2RN1fV4AcKdWuPhoGu5fks7F7tsE6cjUpgzpS2DYPdZEkaU4kyHk1ZTGhHbkHx34yXYa",
  "key6": "2Fnq13hSuG4jE6KWwUwjSEQ9gf8wKah5ti59kzP4SjiojnqYgs5sGCn9bkDx3YyJH8YM5897q4rHREaJRxbRQNBx",
  "key7": "sSeVrjbmAiRhfkkn784haKwcCM7YiGjRyNPDcYBTobt4n5EAMBSMXrVQVPVG9E9Rs9UgG3YCMH2GA7Ex6qkdUo7",
  "key8": "2nhzmZxqSzJRNmQKsZWKMkfx6a7TvXqHwmP1x12FhNk8wN3pjcSaYcVFJzT3NSjJvpT9CbtfMT5292MEHtX4CGdt",
  "key9": "4uF5J8dBJe9yGaXT2u2JcFDbaQV3cSBw9TH8D5gqU9E2vkk3ekowkNAjsLzh52ihLeah4F6caHoZVAX7f8Sngr5E",
  "key10": "2WRufaKJQEXNfNFp3r9an98KusrAaXbuFzd6Vg8vy9TmYoKi5eBMRzeuxcjt58ajQSuyFsZdpmKuw9MqDFUxgm4U",
  "key11": "2qbUKbC9k1rpgmy9MzpdNBEpzma6kBh97L6Zf17RqK2SQ9DwfcLF7JvQXLKXVGsLqHrcFJP4xdYrcXHHTqMcMJBy",
  "key12": "5b4z2BRRHoECXK2CbPcwzvLMJoYSmTkThKcr6k6AMx7M3nxrR1VTuWzRTrCgYqRBFRZrAnCWAnDKUHkJdRb2DAji",
  "key13": "3emKzBmdmHKZ76iHgSY3EeNLs3h66BV5zx7zzYWMDsJQ7Pc1U6YTH4upQqd1PvqDpFyBkZnGe1vV1dk4kSsJSX4B",
  "key14": "4H4Y2dyhUi4GQvY47jkxGNH5HEgCT7D57qipQg6cNsDxyYVCj9r3GYoQXFZ2e42cVKoYuGfBP2wf7yU4mdbRC5aV",
  "key15": "2Xv5cGFsoLBepvUiE5sJtdQ1ogz1xFoTq2P37BNScHria6sKNPF6Ct4LCqUQVYwN1mU1ZxMTtDmMnFMx8tPfEdr4",
  "key16": "yaaWPn1UXpa4Q2wF3A23K8whfJTFY81pKCZ84QTytuuxnwmYG1JqKqtXi6WYA2k79A3MN39zmj9d1CeGyTFUDYF",
  "key17": "3vYhrwLQQmxxRspFft4UVsBAfQM8Vwtu2fhnchwt61mPsCxbhMMcQD5atCRsZCC2RjyjYupCy278tjfEFjCxiHRy",
  "key18": "28y8bAvFM1aogA3JPdqCrgnHXD4CDZ2Aob4jAcGULjgnrgz8tXpwHiRh3PwWdc9Pzn8zKE1VTqahYJkekDMwHQJj",
  "key19": "3fGShGyYtakG3YV7xgSTujPdzcdMBNgU1spWiZaZHFaK2kKKA3SBMLu1WVr4pYNyu68HBSauikTEiVuhdk6qprjn",
  "key20": "5pD6sc7uPTqd4vcVJiPbmnKpnfZmnfEsWd1UB7PegXU14zUXD1UG8YeZXsz8BEFzojBPWkcJ6rMHpWMp6SNWTHif",
  "key21": "4Scnk22UpGSyvTrBatnu37N2koSC63TtCb81SWAsUu4LuV5qgifVznNJM4QTvmHHapbWgWVEVKEAGVR8d2iRde3U",
  "key22": "2Kijz5KzJAJUUtAmKtKzReRz6b9M5AL1acoaAvyXbKwXv5VChnL1WgXncKGfP6gQxWfUEj7snbGftG4YxZP3M2rc",
  "key23": "2C8jRMSpmR7DuvCDHEz2a69ngUSoUiy5N8i3hnGWm68XYTqHGhUkrvwAxD9m2bhwLEGUuD8rXuNWEwiCLoS5Bgz9",
  "key24": "23HCWitnnPbHfubHw1C4CYMpWGfhtGJwdP6DLEf9cGkND1kDKXn3FFLcrtGhYJSurBqJaMFnMY9AEmEzp7Qz5s8A",
  "key25": "NJ8JAT3NnUvXUFV8DREHU7FjuSxa51xiGnRqGtV7yn2obsBctJWkzrzaZs31kCG3yyeaNzhT3w8f4wj5ozaeizA",
  "key26": "3Y3aSB3iXVy3KiQk4HAkVYyucb7nJBLhapYxJpYgvyjSMA2qeMZcibmgqS61yAhDA2XTuLfgxULFU23fcVzXaRaw",
  "key27": "3f8ge2JkGxqyktwweKiptaJmDJPTvqAmmjnBpNkksvojPEFvhNefPe3gYWEXm4FuH8BhUHCjvwN2exRC2o3zYPDs",
  "key28": "J3JdpGvFbybKantYNVN2Wzu75KDoUWyFMuPxkZqoFThgYBXByMnYY6RArkFCFaTuCzGgKnEnLKURyruBtjQYsE1",
  "key29": "47CP9kmtTBrcwr3bxEZstj1yWpiNVgghi5Ju2MwbCcbb5yM7zbpfsaetkewAofJj5RP3M1HJN8jud3FycmsCPhoA",
  "key30": "2rGco13GKXi6YzfSNDhdbCKU2rySQWtug3qfpY8uWAuGSnYxy9bhFs54eMmNz3A25kbbZJJFxG2AarK7ceyyLPUR",
  "key31": "59yDgdhY824JUEEFui7GQWQxHxoZzUoqfdyX338zrM5zWqXsnHAcp4RmA67vyoWQCG4WqF98RUBzfnz7eejr6ZxD",
  "key32": "3qcuYrYvTCEWjW8ZePkqSRUubB4QaRVAFbBDgjENC3KRs7doZuQveX45z1m6LhaBNS19AGGeDKPjDrEmHggJ6uKG",
  "key33": "e2HCjfsMH3iAiQ3zE6Yvu8XmgTJzbfZowjfix2AH9yfQdG7zghgBvDzspUpMVwDfDsSCsH2wT5TgVuAtHNh8k7T",
  "key34": "2gJ8V8YWyhdJ8mqC85yQkKdykNAKVPDAUr7ftq4m5P9j61sbfZDRWufq6aeEyH9pVoyodXEPLoX5K9YzwvVreEtW",
  "key35": "4k4xJrb396RxXMcoTuYRNkhsbQeWEgrdGXNj5EXfGVFetqrn3M6hBeKzQK7sCYkewxGqCwCo8wLtKsBKFykVjrMo",
  "key36": "2of1hEApFo535SJVbAYYwvRobnEG9RakUntdYdgyzZ22Z6MLM7SNYgEgDbqKXjbRUuDAAySEv8TJ4kZDjQaCnE2d",
  "key37": "2R2DXPg2FazHaGt9R5DfTnaHXB3VqjYGk9172gjNvuWq1iomnp9Pa75yA9y3An3FfEG4nZLq6Pd5mRmzYKGYaVuY",
  "key38": "26qcnFu4U4drG3erbPQMCE5CoeJyXw7gWcaTpRNr4acryFLCTg3Z4B1bYsWELEESkVbT97zigcikhF3g1sQggUno",
  "key39": "3WjxAe5EvFopSSDFJXu7TmS48otNW3pCo3BZ9WtiJLpHuYCTiAXMzWokUWq5XRT5iri7idgwvdCjUwwBdVnuwrgU",
  "key40": "4iAARKn193LDm1itNeWqQtuBuPqU7BV9JwaFgLVjbU1kQaw4mhQpAq5d8KRpDeoUdTKa353hMZ7ZUshUdFPHnbgn"
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
