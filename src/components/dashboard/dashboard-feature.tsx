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
    "4itUvCTU3dLGHp5wVeDstmFuaCRnevQP1iLHayXpPvs4NjyxTwBHhtjfiMrs2hYp3qTuZVnQTuFoTUUKGXJgDgMF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22SS88MKnqwjYnrax7izdDqprLn4iFGPNykNoLeMmNgn1Ct94AZEy97ZTZA3TyCT7AHCwYCPpjGL4ZciekWdic6S",
  "key1": "4PoTC33iruZLgTNpvyWwTnw4xKEfGX2nBodKxdfgtvUdVktmxjftdS7U3uB3PrX9z98RNXz5UrZbejM98MekJW2V",
  "key2": "3nXnKjYqjwR9XDs7GpGHw2R2E6vr4SN4PJyYdkEeDbr73FdJQFf2UHKTskfRZRSdneLuha4JKpD6UPC14HwQyuCk",
  "key3": "3Hatrt6QC761uBmAQ4wih3HSAnGRGzBaLzFG1XSL4Ei9GoCVRNVPTQv83LUWt9STyVvPw424pnyQ3eCdX41m3LZs",
  "key4": "R6EwedYmVv4GHYkSNiu1pcBiH4rJnJZWy9wV62HiLTdBktXAJhoukmkQtsiSzBUKsVKzSS7PHDsixd19Mgu7RBP",
  "key5": "4k1fWHMV4Ghn5vj9Kmi8fwstJLCKWk8DdEKafrJfVYjkgE8iniihwtnWkC7H4p5iBgjJVkkiztZhaQxBVGwvvav8",
  "key6": "2JYbcas5E8MT2EHkUhRjmaZycbFvvHYNaSK6etBMxTtficzU29C5gYxScbA1E6ax7P9J9pWWWxC2Tzdis9E61XdZ",
  "key7": "38k92tQqSgjxeX84Ahy85yGj23JbuHGmqqxgRvR3Cq8iwXouMdsZLqfG1KsXNFYCy8wpGHz9SZLGiJ8wP4dGnb9N",
  "key8": "LWDhGQp3oAiKCXn9M5NYjTJDBnpq5FFT3po3sL7cCw2hDRC2aDDXHoJhak3mpEo1hSbUiiSBp3mxqprn5kzgC8t",
  "key9": "63ZJBV1vCXfunw1ToskBnHkLqQZ4wqi3yEsKzvfevX1CM9dz6qfZPit5fXKvZ7ADwizzDdxxwNkpkB1naeQfq7du",
  "key10": "2TYafLs5rqArqeujYb3gmFmKjPqxpy1pQbjfcph4tL54kxBcSasjEVgq5sikJnbbgKCZucPxfeFDDgBRxFWV34Rt",
  "key11": "62nAEWjSW7y9GtFtq9LCicez59y8b8Qctzk53TbymYLTMAaozx5HGk4RTBsuwhPgx1yBVYKvebDJocP92Wu7Rmzi",
  "key12": "49MtCaeXzo7gUSbHbA38GwofoBJLNJXAViRkg1mLTyioW7UW7Hd4YZWKwKcWQCLLFqPVrpHaZiQ5Uh3GpCtX8EFa",
  "key13": "2WSAfVCYmjBfXVk7h1a8ziTyiHZ7F96cxGJkxW25Spe6MdoFXo2bNhU6Fkkq6or8SP8xg8SBsWqe2X9eLnwxj41F",
  "key14": "5TEPpbpLqM4Rx1mvRXj2wTQFxW5NWt4katX2GAFa4u4rQvEHRFFr27GgJxNVpH2pYjh7QawoZWdpHKKksQa9kK7R",
  "key15": "2Dm7ZtzH9seqxhicPuN4P8Hgjn3g1moNm5bLQ54n2BhuErFwnGTdfApfNMnTKvEZDEh7gu5e7KWqjuMkvsACHQPQ",
  "key16": "4pMheeYYQeo1u9DWGeXVGCoBfiLXVv8h2w84DuaEmG9pNJQUsZywixuGpLt4fZWM7cTM9Qf1WpdzfncHL6HZVmbW",
  "key17": "3myt28CtY7AQdzgh3oJecjwP8xDDJLoDwQtrSQbr7Bo3NJnxFJkoY8CqqifLLa7ckgpTwFhjrLPFir7WDZkTKYNY",
  "key18": "121EvCCaW2EUYXgT8B8kTYxgSkTdMj7i2g863w8NhjMkodMHTgCPu6GYXoKr7FDWsapsFRkxcmUpwUVr4M6hURkX",
  "key19": "FykvjRt1e6XVvSfogSnWPu87eogXNh96S3Wfrp4bHfbdT5EyqppT12m5kMRKPmp8P1Qwy21gBXRpAZ3XJFBZN5Y",
  "key20": "5kJo6WqrzrsnahucdWNh3dTEpXCuk9q573FyFMD6dc8mELvZqyu8es5fHcWqKxXCwzoH2G9rmPrm8QVzzdWZajsz",
  "key21": "GGFFqPQLiwx4GsVTKHqUqm3Aw4kLBLPWnCURRGJeY7FfQDWSi7yuJvGrbRsYnoQtq7DBwG1Z8Q36F9MwnBwhUyN",
  "key22": "Gqdb1pfdxNExy69Hd7zXUFHyGeQWigbwkN7fYrGbfYn24g6LSCmWJCQZfL3PkK6xEWbW9MWoYXwJfzN2upkMHYp",
  "key23": "pdwpAYgNEuEo1gpeeuWQJp4bKoMXmJTUxwvUQeNiMkCvyW2eS58PNyes1X1EqpGpwNjWb37ebjjwWeyrXr5XiuE",
  "key24": "5UrV3wYuVpUvkeDyYYVxYMwNmFKQdaNXb8Yg8BpRwLasTMD9UnLxiJxJfvBZfecgb7BJJ35WNpiVnekyNtaVkdfE",
  "key25": "3mrMP7XKG98gvTjig6SSVTQ29s4D2V1jotVhb1ZaYuAeUAQKhWaSTkQh8b4ZMWMnJ9gQMSwxqb9wr9BDUTydpabK",
  "key26": "2kGqDeR6XYtTNBcPGd5dGtzmKWtCitGoWcUVs5BdFC3CXo7ieLZ7byqN5AZL3aYudymV4Vo1sFVgmXk5RKmQ5pNL",
  "key27": "4YzD4q9Qr2sNvYYSW7SAvevumiN89rJH8Lgf8UhBnpYSftrXbTUgAsUe8oMnhimQcFSBBXUi4UY1jAKw8bREXkgb",
  "key28": "4xPtX9gdsemaWwaDkx7EQpSh4tRReksJq9UVTDsZ7iNDSSwgxEg8JskaV8rvEtRqNZGqF6vVQCxAU8i6qkZHMtJo",
  "key29": "3rzch7QcciTPMT9nk1P799xrSbRw1K2YzLphkkbnDBFnLgyepvQVhd6EM5hzM2oe6un8ezeqVAvzKbjRCNV5ikJN",
  "key30": "47zNY6ZUMdSjrGwcvYb2jvj7S5fpqDn9TfAquELvL8FjmMYpDTQ7oaNvq5zSTMZ6MQqF9Z2X1WJZ38ZWMkqewn35",
  "key31": "2kjMbFbePsvNmLdoMCycv3RbNaopfQckFWg828PRfJA8sDbnAmePbHvDDx9if2zdcJ7A5hkusR1CHWvorNLY9hEV",
  "key32": "5eoo9fRiqB5LD2iS1wc7Y3M1ZJdW9CqMeJwT6pEYxNCfFL52E4eQ1Z6TE75MDQR5KyMeVFMwSJ85aAWo9BCMqn8j",
  "key33": "3rar2mTmgrPRGsWXwfj5qyWVChz5UvVwdyQZbX1YRCcVh6i4JgpCrhz7yLu9bCMfwJoFr9L3CHMPLDjRY14bKTbw",
  "key34": "4Z9nsndMEtNjE8UYcHHngA4HjPAZ9D1z2ac7qAkfGxafftWqF6JmmfcvVBVzf1sLt7wimK625jWLwkwdD8G4pnie",
  "key35": "62JSDX6ne16CPatiCCT3PLC89KsfxQ1N2Ev2qKeubfcaj7Fg1q5pChXDZpf1NS8tsF2jr5LZuLQ9us9R9tskD6L1",
  "key36": "3PYt7pZYjzWsAqfmEJbHDykJejX8bq2PXtr3cjmfc7s92cjcStXWSzoYQCFQKypZ3Yd9A1mL9J6vHpx9zRSZL4KF",
  "key37": "DBV1vH4qoVtWxzETqyz7Q4dJJJDx8g14csPrtsLoWGJBbcfDktN4dprRmZZbUVsjSqDXFaKw9cCtW2jpWpVCGfV",
  "key38": "GT27rv6G5rYtBLpJJYpMNbt9xmLupYgAeHEB6H6DtFTDK5oaFpkknWHzUwqVHoiUTYKigZCgdM4BGu6pXSju8Qp",
  "key39": "2tUEKQQhYqgCAhsnQNfrS4FiCvPYj3cHrfvqhp2x79kMQ7tSQzeRUBHSdykh2Wf77AYLaCeszBdmu3JvqaDZ5Bzq",
  "key40": "4NuTAJxcWWAC6GzTeHTt4FE7ugosttEQrynwarBAg5TdZ2gfRMdmZkQZv1miCEpvh5tLXij2vjKy2D47BVhZvSid",
  "key41": "3mzoU9GX7SMwswoCnB7e4bZEimQb8vHqDrxY5XYD91XArdJ7e9rrWea6wMgFBaYWDB2TD3TcBg2VojtsasSTuoVT",
  "key42": "3f7Tr8pxkgPMJPdg2FUry5SoySWsdn2HVrhZbESbhpqyvFrrvwFHhBrrbwZYe4U1sFKhoH6ayGaj3V6gC8CK3NFJ"
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
