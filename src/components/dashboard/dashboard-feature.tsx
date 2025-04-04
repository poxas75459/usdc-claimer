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
    "5erQaDhiLxH56yQP8sbUcp5XqaX1ChDC1D8rKn5oNqFPTx1NjhnJq9cEgwyn1YF6aupiYP5jce89dCLAvTjc79aD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y1WnLKRtj6GpsPh5zQmSyXfsns8XhdHhcoyz9h8WWgVgG4z1mLESAgPxTTjZfwGNmcqvwJZU2mKUTx6kZR8bZxL",
  "key1": "mKVtvZPACbFQczWbnf634bx1c219LusvsRCjSpUEo8ygKKAQeYgHEWFwujh5ug65FRc54D5qysbgjZi3522sbaj",
  "key2": "2ezvX9tyBhoezcg2TzuJN4uBcKKrSSik49Xc5p8ZbbWxYW4PeHZxQ841vEw65oBxPzcVNPbwgj6VCTjFNVb6gvJx",
  "key3": "4ybSB42RHA8mmvCSKmTzDgVZrMh3zmyqDudyD5qG6q7kkusCJ5t2DJQMnMZNcD8TLbWESpaX7xkkXiBt239ijzS5",
  "key4": "5oUNCW6kmK9YZkGtNwYZzhXSHyHUoP4ejJoGg4gB6biJdV9EEhVQ24kByphfiuw1KEgiKDyrmW4Xb4HMf7gYQyvW",
  "key5": "5tFRjFePLVs7d6zP2sEUwc6C54LxLaurBXq1VSdmfzwtmXEZVpN92dyKhYDZrMSBTJs5LKZy6bGkneu8Ha5NnxvB",
  "key6": "3MRLREdbJFw64kvuLhzKFus3w3MsrRtS2FMdf2CQRQ3fPN5JRTnsgTJTuaAqA4PSXZ3trZdH2sR78kugLVMV3oLW",
  "key7": "2T14GDfzScyHuoa6oJRxCmbndNoHigJCxzYkwXHL4penwB4NTNNR3a8ezLpeWhpB4Qqrqneq8g4m5rE6VDWe31VF",
  "key8": "31DNPSdiZPUcLjvPcfSZKc7b77HPVbdYEuC9d7r3cKjqRU1M2ZzD5qwp9d4PFQFVRG8WQ8dsJDD3PBXUkPyDFawo",
  "key9": "3CvpZvJWdajQnpGpaDT2TZLXeZH5YibdK57ESopyo7CyXmEqYTY7QVHRkjpXveBx4XLvQNgXGxBLurXxfB4VdtfY",
  "key10": "DiSUL2oEFCNRVQLpcVFnu4oeu3T7qDribS9FGrK2NBgxFmxnCFHGq7RE3yGVAmcdEgwKHMJCf2KrzGizE8pRG66",
  "key11": "4FDThjY7UFmu7yYgdYA78fGLWcj2W7imNDm38qoNMnKUSchD5qXju4BHCniitGV7vvKUFDoTa4T6d33ye7zBW94R",
  "key12": "59QwA1nJwysNiXezYnQQPoMGkmoX9Ypk7eL8S5jjdtV8Txs54BS117r3iVDLQ76PwCcupNk1RPrPx8EuTi3jqp9E",
  "key13": "2v3ThVVGhrwb3LEusAe8CuZ4kRGzxaswoBBADQCv19UgnD3bmo27BCRXA1nGXWP4HD9jnTZ7paFseDerxHmHRVdK",
  "key14": "2exXzVW3iKSYaTNytjfUeWKFSifC6uXGtqmcBLTnPaC1LjSeHzCdVNUYZNJY8XjZPZ9VxS9wpa6AH1n9pwGjJ1RR",
  "key15": "5oSWS2wZwhsaps6sSyfQXcHxHEPq51VQRfTs1jjW8MDbqrZqRVYozCd3ZNu9CDi2RzQbcpD9USNmK5oYEkEpJwN1",
  "key16": "4sDaAZat64izqsLkqH7hQCBzaoE6aaKgX1HBr1Bcs8Qda2Mqp9cyoTEeS6nacTyYNKq5aSGe21oyFUTeJCuRW7r7",
  "key17": "Jo6VwhcikLfH3mCpTGbCoxMWLdHVGM9EAxSM16TfpMTGwDg2KFdnFw6TbeGhp6aSUV6aZykkysRivSXFrJxPEKD",
  "key18": "4HAVpSB2Aq4i5FmZFpdd18zixxZaUCo89iSvm2k7ktd8BeRpfKaicz2hwyZDuB7GJCgKWGQpKsZhJ8iZ8XTbnaAY",
  "key19": "4qPFcnUpz9p5nrfjR6Tw9tZT1W9woNQrPFNWPKEHCBzcYGud6weyXAMuTQfrDvJCK8Habu2TeiG9Tx5RqzvCqHyw",
  "key20": "5rz9B1ur6XdHo5di4uo7is7tuZLQ5p5hAjFnYgHY9LpkyChiBycBYjYbCfrzaA5F1n1jitB6q16gmNLk2aKvLLZB",
  "key21": "5aV3aMCz449Wy431W27jV8zfYEi3jNnQEcRppR8Fa2Em8U1CTsCsu2JNHWsSCT6E3rViVSjiJuT8uBRBnqsdL8Q8",
  "key22": "48YnAQH1eF1HedNxehZAUcBEcHZwZ8z5gHouMdk2YSsc4vmaQte9aA41ChAodBuzpTRPAJRjAfWvxLNXLygwGtm3",
  "key23": "4Mjyti5mYAFY7YLULoesbqnEP8QEQPgoer31DaQYDuutX46sm4o6FZAs7txZMDgzeq2rk4VKUgjHqSZZSgyytoRs",
  "key24": "596cm5Y6dtCnopdYJn7q1DD8AneUa5bPxyk5huFpQ1J7BbGtDGDsqJDfnVMh7jn9SuDedULqm768FGdBpLhoE1XZ",
  "key25": "oG8J6QhuhTiDE9aXuoaJZGo92dBpabKBvhrpNGuozScCxDGqiSJy1djGXqfbQa3MKbsYVRHT3fwKrSeX4NQ1GqJ",
  "key26": "21Xm1JVuJfyPLVP9iNFM91bfRpu4AjpFRikjY4j3fa2U8uyRAVCEgjHvDyHT5r6WZBVmnUv4SxZWRzkuhZ6CXboY",
  "key27": "2eRJSdo7h1kuoS4G5fjx4jkSgYXa72Hgyp3SBAYANdp66hL12VnoW8kbPMHANow26qNuU7tPBm1fS7Qdh4eeERrM",
  "key28": "5CeS8ZxxUF7XM3SD5wSD2inMYesWthPgQcrjieAV7wQ5tGYiEeURWRmmtsAiwddYNUNKQ3Cfi4QRBgbUoBt4nqzr",
  "key29": "2NXtVJdrda5tWKBdeqot7cgrW44g69CdW8YAo5Qmn5dk7sULjbtgTcD4yJsUiSSNPEZCJ3Prh6iL3ouU13A9FR8W",
  "key30": "54XyhFYAXJEvYB4vJPWnUgA9AoWQE7zJYyRcWPqcUDCat3Eu4Hy3RfvjaqXidCmeUpPKHruMqFA1ZDxRzT5Mydk9",
  "key31": "2D68w2HQBZkayiTw932q34QamEgN8JKLS7nk5NqBzbdU2X2BiK76zUqm9ACJKtDVhEgnSCBApaVMGxxLjM1osB8g",
  "key32": "21uSeXw5dozTFuR5crUJQCuRuwd7FuaSDNBUv1tCddgLpKUvRTvMEcQZNFAvB5759fC7ic6k2PsJ4Mwng26eVyd4",
  "key33": "HWD6B8EabGco5CbabDMEqgaGyxkUpZVUjCBDhM2iWiBRYpxTWgmxKaoa7Bh5rdsUrQAWHDBEGvTrpq4Jz4sL5kP",
  "key34": "3bWNgLspgH6vHHGEUDsMKQeUn24JWjYxz7r7pWJMwjVvnbwBWAwG3KCWamhr3K1rGMHUDH7QWY3DTZVHEcpH2Gsp",
  "key35": "4Ecn7jCyqhnZPU1E149B65MdPcg3KJ7LDZwDf31Z3mpBp85riT9kJJn46mxYsfGv5KTJoDYT3N9yYCF6H7JZDA6D",
  "key36": "3difU44PvxGQhfeVxaiqyeCLQU8WnUCgwVCfn1J8QHHrXdaGMNfFj5LURunf5BTSzMS5BsMu5tQ2RQx9Ab6LRJd6",
  "key37": "53Yep3ngMA9RrNRnEL8HXrHPwYvAELxaS3TJktXfRFPn2J6GgzgvzFs7bMgT8Xz66e5FRnKgBZp7j5BQ8nmmnLEf",
  "key38": "4NtJCiDiDJ4CEBYML9UxK1PapMLnKa5sJa61iKBDCD6wxK3vVfWbXJimSjTPu6FfW7VcyRHwpEaxfoNC2e4qpVgB",
  "key39": "3cFAbcCbchBKLnmdcmkcXQr427Vx9mMvZZLvk95TG1EV3r7k4QNPVNQT3HygaQdNH13H1DxJHKATn2zUUkTJfkmD"
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
