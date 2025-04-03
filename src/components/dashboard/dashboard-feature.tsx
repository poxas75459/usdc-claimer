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
    "2ov7WrX481GhLUwMRfbf6y1XPp7gXvfGbSGwsZQDitWQ258PCFkfatLFGTzjuMmchGGvv5E8Vf5dtdWdF2Kvym6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47pwrmeQqbPwKWyY1bboaUsFPpuEaGf24fVQPHctSGY4H35JBND17MbxYveuMGoSVh4XhDf4Tc6RmrMDHCi39vHY",
  "key1": "59Cp1pXgi762f6wnCf8KYLjZygsJ1qXv2U5ds71yqZ3yAGwafzwpPdvAD4kVukVv4zqBreFF1EQAQM3stfcDmMXL",
  "key2": "3AaNGVv8ZziNHwZGLbFR5EXJjdH88bu6h611iuRyq7HApfzepvqDvpHY9tszY7WWfgaoJvnBrmwxRhAeZS2FCqDr",
  "key3": "2ZFanFoZLaX6S5sA39dEX3Vqctzy1gA445gQ77YZeVpwdaJmNUQCwzon1YRoRuB2VywUjtfakJMeWqMk6LFT5DR7",
  "key4": "4z4fopbcQJxT3zCr9iFsBEJYmuh7zKrvvs1kQZH7GRUFZLmJpaTjyHLrsm5JXdbSjRrpu8APjzQJ5qeg8HQL22BJ",
  "key5": "3Qodm12TWAg3DQxTr9ShejhNRZfjfJCy58RKBSpWbzNRVUvave2wr7PUVbAumEgLHZ5QNTbCQT3ps4CtSfcPjcp1",
  "key6": "4czNuLNwU9zEXtTtda9xXB5kfrmJXVdMSKkxhYQfgrqjyUn8dTba1vNAVN6fj2m1EskYv2Vz6YYKvRL1BjL4dYux",
  "key7": "duR4eKdXQkKeT5xAj6wNsLATqhATVFDaaxzCq9GrK9LyMLXD6e8LCRLjRQq8ygnAVSzX4mnZavaUeMPihqZgwZh",
  "key8": "yG5wLoZ6Hj5JELwnvQ3dwky7YAVHHvPAQX1X9eDa7HFWwhpq6npeAmjMZNhwjTBr9bJbdpEwjQo7imHcnHRF5kQ",
  "key9": "644v6ud2mEcMGrbsG9SvxhYiB9nUG4hLH3GKNygF875Fyn2UeT9uhe2S6LLAkQDVRRkjLSDrKR93z2v4CqMsLPSG",
  "key10": "vzWKxrXAH53o4yNfaDqzy39xbV17puftQ6vyhCYP75XtfQwrR3yRKzRAxaEWPfSNZ5kXEz5TMJu6XiLR81Jz6sz",
  "key11": "21dzyjrqJDjNfegDpMX6gLzXFo3AX9aNA3ipuLCUDp8ScmJggocZJBkAs6DCjnkrryqodph9eppx1KNnQKQt6vEo",
  "key12": "3r2eMYCXcFSYdafQjBsY16Qmv9rr3XZ69CUBC2tahB9LaS1wj5Bu7tLePV3nSALB988uT77A9WczcHBcK2vTwEuU",
  "key13": "64XeNFAS1tAcySWPteBzqgceDUwBDfhAJVmupNXFCwoYofAVbmVxoHA8ZsK8Hpieu6absoRjNKgsGQ3gT9hGa7FA",
  "key14": "43px5yrMRNC3mUoXoDGBVR4FVe53g9w5aPaTfNPDBnAmZUaUUxrh5jiF93Jk5bp48CsSG79jAAex8vRsHrttjUuK",
  "key15": "2brhLWuGF1xNyHf539iqTpCRGcMteu8Q6fq5DxNBjbEHeL2uxuECnEZkma73TNuRTY9HDazvUfxNMq3HGYtjhbrC",
  "key16": "3ePQsDnGay1xSb2uyA7jkdFXazLSbki6unBcqASbVE9bZzknzY4eSD7P7A71qgD95wwnfRe2NfLc2y1unLCPoaQA",
  "key17": "2ELaJHGjihdqnbS2WnABrYkoqdDo7k8N75ANJaPRgBvGtj1Bw5vrZx9dS3JoAdkwpY8q9qzwGDq8TePmLdriX8h5",
  "key18": "3uaLWuMMU5XCEh1AZna2ZYdoT1NqjsTG3Q9tz3QEgxbVyfFwR6fe8uUhPkEj6bHnH2VFfwdJqeeuv6M1ziRuYysT",
  "key19": "5fWWyTrSMfKx6zc7roWW92kUCZEkk2gHQpZvS6SD8qeXsRPE5husR8LUYjEDtK5aQsZw4B7ch8ukQnfPfT8HCopc",
  "key20": "2cDmV6x1GX4FWZDcwtfT74TK3eC9fJkbh8mfne4PKD167EwF7V7MtgkTJJzQ7Mw1WcaorER1vS13rZs1ZbYMV8HA",
  "key21": "2SGhPu1sCvHmVa1DyGmYWtmMEX32Wxf9PjfMdpdXmpEZcTDU13USeUj2X9fA8k6VXY99ok7p7fCTbgGWqqtMoDaH",
  "key22": "TBUMQsps4QminwJMDxgT3ZYjMiEWf4rucYBh2Z1wsF8VphcZZf4YSJzh4rbndagpruxhcY4HuA3KjXssBSV1Vir",
  "key23": "2byPRQi2Qjs7PQgwBqZkEzHrkWP3xoPkM5vXNPv811r6KZakjwGEj7YHMbtAdm2KCbEcqqiBEzBZWQahvkc5ADJy",
  "key24": "2WpRiSbx6qwxFmdUUJYZKA2pBCHNTPmpcXVsELdpKnVCgzSaEvdLeYVAPdqbb853qA1WyWGFo7rEEVCsw6oLZ23a",
  "key25": "4m1WQ1wKTPZFGgFRC4MpWzTTPydr7vGUUmtvBw4w6nvh5mALziiaCgmTdhPo1T7BWj5yVFPuBKdmvfNs3WfqJrHM",
  "key26": "QGJhxTjGCcqbL5Wuc1PoxxPQqVYKa1mVB8zETKjP2DQcsZFiy6kaAofZVzqvL5LQTzDPBYjgXDMhEZg4uKmn1kE",
  "key27": "55Ybje51YYgcc6KfcmLs2N3sdvb5x1P9cTjJRhJRWniChmfiZQooXtFMVYyzEwFZbQ1zVLjs9Gubr4K5fAYkEp2o",
  "key28": "5jNSsfWZWtbukxmseCppjyy9Q4G8fDAEnxdH888jrhfcq3ugkzZfcak1iHL3RSWwoHUB6ma9ahaV9YD2pKf5aTAb",
  "key29": "4frfXdvV7ykcoDwUiKRNaE1EbzDTSooaABS8ncUoCbNBgxAZYCriYVGq22U2yCPtejhZvVa985tCF53QfgsbKJF8",
  "key30": "5KXGLWPgRiqgpRZZH4TruAHXrGuQfUpYfsb4HbXjUVyqxeCgL1bfMNKsTJXmtyxtEAZCu5FWyCWR46nVAvuGKvCC",
  "key31": "2D95V53ZQsECZCdxbgqKuErALDyhkeUK5WBFkh8MPP1wr1qk2NX6bQbz3kTcgjnTBksyAnKBitL6pCabSk5UQ3v4",
  "key32": "5tbKaeqREFb2FsKb8NxNtzcLRCff5oaCqmqNEjPz4sd1iPJv6LWz6DCfjEkMFv9ZirANU8wdn4UZprrm9HioJu8C",
  "key33": "3r16hsgTFYEap2r4sRLDU6TLfoPXR19ztTH3zF8rU73t5X3reahwwNk5ZUhHgecxyhP4zpBYcSNEFPyW8KMnPonZ",
  "key34": "5dB4F2x9v1SPJ8PZrNraRBvRkVLiuve6MWsK2AcdNd4czxeaJaZtX7zQzmSjYBxfJx2FW8wXSTVRZnZsCC1Ji8T8",
  "key35": "2Y2Wfj1hFS6DLdNdXg9UzKDTFy23sKhmTe8UNrCZmGSgJtQVCMFX5jqwGVVopmkNnG4hyDwJpNJitsx1sKunpyBi",
  "key36": "356FMFCfRyxYZFM33oP6fBycvAT95Uh4NSSv7APJ6eGRWeteyYLJ2QgPHBQkC2ccnttwrd3q5pcMH4g3b8m7Un5A"
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
