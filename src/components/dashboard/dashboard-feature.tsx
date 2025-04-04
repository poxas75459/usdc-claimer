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
    "55TQUNYZ8rAsMrdLrDStnHuFsfGbC7fwqw5UXfLLvJmDy2nPUjXYr6jCchui947PQJMGgQp5aiEhUZFLJVfwqzxn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fwqA588PC9wEvkqEjmKtEJgW1Uwh4dzu36gYGcBPBt6X4pysjGAxx5DXMuwxo7CS9HvumauKyNUeyN1fEcQPUkV",
  "key1": "4Hr8iAHJFXu4MCVBNE8SDvVTZBwoqoTpybXEHKqFkA86zeEpuSYd11JSEK4RaCDJzVNutDJM3xMzmVdyeGPTbLpz",
  "key2": "26ANHsGzCTHRhHynDnvPvHnMin9kSuKBYNYziFMifpFLuPQgKSmjSV27Bwrty33qce6oaJmwyWhCdCoebrmzkB4P",
  "key3": "32qXE8rYGagReBfZA66WKAev8eTLsktsKgtSzZNBpS8N1Mt8kaicnjvxZXrxL6SQmbQduDWsnPfeoJ4YoNH3CoSG",
  "key4": "3ZhjgBh5ypPzRxpw9jWEJr5iWVdXjViwKRUGBfNZMNSXSDra1qFAZ8UqBVC4qSpb1L38TP3CDt3fh37MTnminEc",
  "key5": "59GCnLLkvrCXXpLac1baRERAFkyAUtq73evvctbyX3FbM3Euhr8sQNSKit8CBYiSAdTwfUjM2sP2UjWCCLJaewok",
  "key6": "4moVdcWc6wRnNAmMjNynFsXgP1PeS1jfbUzdrDeEsu3tvVNSNUCiWi4AjsSEaGDE2vrybKQZ3gVoe5iLdVAW5des",
  "key7": "MiTCAKgXKkRidAg97nyMrQxTYEC9RzXRBSvLy9tSFK8F4tUduzrdTraEqJdCNMvfxsXPy9fJxXhSuChSKHPkJm6",
  "key8": "4TsZSZEqbjm3SFEus99YbxKqdYQFa3h2TLNUmRGighViKvoQHY7VsS39BTYBGT8BdvzwfRgQDNe57rGBG37jpLCH",
  "key9": "5tf6fXSeL66okbwyKfFEgAtfAYbqDZt12KP9m4m2yBFiV5EwqGDTV3qamw7Xg123u2LpQmk6npMtjqmaZrkbGnc3",
  "key10": "3E5HjVUhSVhssPQYjjergXgDk7DsYmNKG5PZQuefihTkbtuWgADoNqKvwuUmZLbq8mn1r32ApcXdNaMFJDzzLxuv",
  "key11": "47HmmLpy2WWaFS3TmRXQRts917qzEf8ZNHovMrbUrcRpoSaAjwWe7hqAMJEfVCsBrrSYid17WKuaT9DtqtKeyQkR",
  "key12": "4R9yfjpg314R8Dvq6Q9mawmVzD1t5KQVvdgFmdu64LkHaxwP4FcPsmhucRmqsG4QGYpV2T1vHj1yTr1qrkEykzbz",
  "key13": "2wNgvYaiyj5rh7rbJHBdbKB7wW1qQj5YLrRVqaHgDBWFbMD1S8cHDRvx6NpySyi9ehEXS5QUnUNoWVvV9bbii4HL",
  "key14": "2aDnpbmRaw8ffKWzEqPfTTAPGezXB6hoDkzp7Ksj6J5i52SBGZ4FyjHVF8oRpyTNUvhzvMEKHng1ZqvK7EcBVriz",
  "key15": "3iA2Eu5hVjDvAYHjuFcwwF8aYhoWFwvGEdSdZpaLwfDRPqmhQi3U8PZAMFuEQsU5Q24vXf1hA75w84sEC5duzJZb",
  "key16": "FV2VGTeWF36V35QHz5nQvKWrLw9RqiiQ5BHpCJbFMfosywsvfQqufsUjiudLBMMcm6JDtiM5N7war3jgnjzbpsk",
  "key17": "58XcYECmS7RqHodUtKjLwudHeU7puj8t6ExG23fKSVmDGSdgUYQ9yQesNhhMH2EAYMitmikWkzHWLM6Cm5sGAEFZ",
  "key18": "3eHACNNRzfryb7EAVNiqB9SvMHqQUPGYj5QiLpnV6y9DJzg5D6p9x1dkmeu6YxUK8g72mZXhj3oDyr9wjBdzwgYX",
  "key19": "72MBJXM3W2kR8Kp3wYVVKMkpeBKWazXuXBiz14QDHuK1fqFz6zXBam4HiTqEFVEcJg94Fp7oN9vYSjGFT4Bw95q",
  "key20": "3sPMQBjBswmrfzRTCQwARjy3Ywr2xn9Faz7gKCvCsYZ1PjJ5YrJTxazxozee8aveE45PGqveQtY7w4my9NR54JRo",
  "key21": "4Mu3oUQRYT6aeiD4FcyqkY2h2ceDUGEMBMmetWzywZk3gaQqW4s2DeB4kToPMcnJv75jpfTvCPSwT5hR7Ts7S3k4",
  "key22": "5H6d7nvj4Lgj68ohU73WwPkuvxV9zjEeji81M7cvyGyrFGTJ4KScKy8ujSCryg6ZprRPi5E6Af21idDA6TpKoMJA",
  "key23": "4xsSFSsL8kiWfMyM2mQEBPrhRbMNTyuAMxSS6uEDxYGSB7hBNsZEKvFCfzXntHDCyKEPxMn6rxYVhdBoY3dSuxEc",
  "key24": "4r9mvMkLA9cKMTFqi5botaYbnVQcmiFogyBxvzMNWfmuBCJFRk6y83dSyqe8LRoVUYaXrDZsCBNrmgYZRvuWPxtW",
  "key25": "3ktq8dhd3AGhrFFuDoUCWjRLKcHCutVLCPuARpfSXUJg2FKFMNd1zr5ARYJtvYin3VJMk63qEp1LsBMfMUiD9Mhc",
  "key26": "5dCJ4YnGSKeY44JwStQhbsoepimTy5fatwTTntJFb8DTXxCAELmwsuFwEVHAUB97hzckmHbgFeNaAHio9Q7tWkwY",
  "key27": "4LHuWevXVacbz9PaJ2RURqxLGBzocPEDiGrUSKH8sh1bexvJcTgQoN4i632E6UrZm7rGsCgSgC1s1e79VcqtiGPJ",
  "key28": "4micKQGJ3Lt24EMkTAS1zDWfyNDRunzjseYGLPZageZeLTR7nVcRa9rJhMvYqypBnqt7yYKnsWABUcZaKUViyBBs",
  "key29": "3Pf74hTFYew9s2jJpevD2VYSt8tW9rACeAggYCAxPReA1XyizhBVKDfZsvnf1MKseFN8jBDNvSwdcj1nrhtYsLh1",
  "key30": "5rW1fYMqqJRSB3yG3pdKr11MXvd3b6Yf5dKbd5En6NL6m9dhinxapYn9qSkAR64wHnbLfVQeRSrvVbGGqXZ45jju",
  "key31": "DPnZLx3nXv8TukzJKgt2nKN5dtzaCBx2eAepgi45tSCQa7q1XdNGRQxfdqvaWoFNuoMDba4465VBmVXJsTFzWe4",
  "key32": "41fyktkeLjw9VAhPMSDhsxNzK2AU8MMVzfgZecuwysL7yUTBMTnTrC9JwPypJmnEU6cuAzKBvLWqxTcHZ7W8qXLK",
  "key33": "3sCd8Tb63XP7GU387BpgXAhsSvS6zjUdPSi5mfaKNvULv7sfXPTKTtHF46sbqhcUYEZUSLdmHCNVcAio3trezgnJ",
  "key34": "5gEfHjeHZ6pU834Vov7H4WaZjQArnXGHndjVrJwTVPhPPq2htvA9aB4HPNNGyAsgNPPqW8x8o1F4fvG7HZabR3M1",
  "key35": "2r1SGtW62uCTcfS6wqxXZ3y9NR229U8LQUuWBRs7TG6ikjhppz3NrFU3AuUcqhAT7uYrWU3Xxs8rGvGCXCJtQ6eP",
  "key36": "2Bo1v4i4kwVqX29fcX3Vp4h3rhWdeVxcfQ6VVZtWwFTrnnSvFHn3zviiga38medX4Vf8YAZ6JCDN98cLHchMNED4",
  "key37": "UCKUitofCM5pDoiTjs4UT58HWjcsUPdK6TpUzytZqjbNyQGSc8iKbsjQhMGB436kFtCsMib2i4SF3ZH25rTMSDW",
  "key38": "3noZjDM4Lgaxrpe8ZJ9eABu7U4fiYBcRNxc5k1CwJWicpQQ9JLtvvEKh9NmGo8tVN81K7W8FpuXLP7qttrR1mwh1",
  "key39": "4zL5iB6rqEi8gH6gE3EZNAe7TgVi6YY3DrkGx2qhU8627QbfbM1vk2iPGdYqq1a8ry6LzEAvfvHjnn8Pp34QGK1D",
  "key40": "5AqkXmxPZbU2rdjhWF4uAYhRcdUoJvVExwcrfAQAXYXPBJo1krRjWdRg1chSXqMzdx73Ms6AdQiAyuSPRizZQFEu",
  "key41": "4s63mPxKHsPhdGbXUMRq3NLpsW99EpRZBcAb5roZcjTC8tgbNL1KYthquUKKnitABQeFHbaaR3chg4b45Bfsw43d",
  "key42": "3Rh61RnxMuuvYAHDjvRo12eudBz3qKFwdegAemJEgPsxNhEZ8e5kCbQ1CYLzm9p4GXyrMwKNwTfdDBMg8aUKvRg",
  "key43": "5TFgqD4fFrwqi5yomsiDH16HBDbnyESrwuafCnUYTCieQzb7NvhEjjYpQz1ikSEkzrMsDoUbMtSUpuicoAawz1EK",
  "key44": "43MkrNn6tvN2z4vdtgfzk6UZw7sv3za3uBM3LbzD5QgkcshrNEUspAARWPeC67UoHnKUUBzDCBugXUSHQVK9BWkP",
  "key45": "5jkqGAGoR55dgM1WsWLh6dTDtxzMYFy1TMuL6Cti8EqiB3HQA6Pp3FXN7tTDkpgwXYn8mGdmwBqF1scbGoeENq7x",
  "key46": "ztn2kXPwaJqo2Bq4eE5SRR9XZS2zNrK5XKMLNoJK8VyZUXDYyMGAu1UzwR16einByd9AFDGcAwxUDVKUdvN6259",
  "key47": "5p2RkMhBogEpL52y8zYYLUsdFskUdBGdVWrJzeB4H2HXXYZVDyKqQ1xR2uPfqyzZQArR9a3hjxec4vUt2EdayMCB"
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
