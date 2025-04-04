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
    "2wEk6NVgcvraLEGn1b4NxM9EKatWEAsMsr8deKreK9YNCFnzeBC2QYagTL7caQbwogtw3EFS58n4eYZHhifeiUYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kWqJKSpV2HkHsEqtBos9EjVet6hDhTQtMx2uZSXVHjEckhMbHUNujfp1rr9zFCoJVVTuWLZX8tyGe8G3s3BEGBb",
  "key1": "2M3i3EzcXBWsVcCMBhc93m6xZnjx4J3niP5HMu3XbNx6WPKR7uvXRZthfR4AgmhYMHGAyMRdaoFUjYwd6osw4BTK",
  "key2": "3wAVDASVnhztvyAVwtkR5r2ZEeLpDxWAMn5S7w39LffnfaKSoASxU3DBSqnKJgj3d9v1hSE2RBmE6BgvYrXLpvgf",
  "key3": "4dRxPA8Q2yHsLATtaX4s8geG7HiRVUNnTGqzTCDgocm1q7NxpigArLqDsJAbSioiFzcjS3gTHqbzgUPX1HAh7qdJ",
  "key4": "5fbzAnNdLRgWhdkKHLiKAgYwkYX5FksmHe28so5GJS6nXapJoSSmWcSmxw4awc6JCz9fEEckeCQQvkPzTF7KUC8c",
  "key5": "4Pn9rrtfuQWhSz6W6SxjZZAJdp9vgVyjqnta61STeETFGj3aG6anpuuG1sWsXXczkYjDxzgoaigjEVuMWUWNDAKm",
  "key6": "5WC13mqZA1EnUJrtuPjC4RrWrW2nqQYqyXBRoB2w3sBeZbZUMnnqS1AK4n7BLvZTLCWABBmkGWwUe46R3vuQ4MpP",
  "key7": "4xMTB1vdtVuZC5PAoJWRGxCL3LhwKmd89ww8BRtWnCBZTbp4RrEMQZb5R2FzCgWoMWUgYFH7ZwxrxcrRfScfWAk9",
  "key8": "3UasQ8n7zeyJDXRFsCFk7LrEpLs3nREdKssMnysD8v3Lx7Fhk2BmDZSEvxwg12i1AmSH89iGBb4s2wA3zqv9Fi2F",
  "key9": "4WEsA39f6Fn3Bs3wFirH7oGJWHTm45TeZD6ukLZrTAHAaRxhKu5cQ6HGqaPJbn5LGP43Kyf4wsHdP4zayBaUuRFP",
  "key10": "iRjfr7xhFAgtkCJeDWdBw9dayLJnQSLhTFkUqRQQeAJ7Q5crPCc6MYmpiux6aKsVFss6WMWNTPVyqbhMPZwafZt",
  "key11": "4q6X7CAEQvn1rLv82dcWv4XB9a4mSEjRoBt7suAkSm5eeniXy7cQnYCsKXV1r9LbkoFpVV1rfZGXwE7hVrv68z7S",
  "key12": "5PxVZVQStA2BZg6Sb4ovFNWBXqd5k6qrrBdQBpji4RTm1WQNre9jbq7TTgYGG56tBygBM2XNMidy2d7D4M9Krq9",
  "key13": "3PyC7y1Ycu9exXqnKbkt9gw7d6qFhDcAFpLvKseYgN51BEWE3fY8aKFawKYhckxGrPRG5LoHbdodcy92CEBwW4MS",
  "key14": "5JXqMFdGdyXUZZT7TKS4sfpkHLeA4kjByZVxDTXeWRvhDQLdu7BdoFm3yKiLPbV7J82wardaQ1TcAA9oXHUNjz5J",
  "key15": "2aTWGLLmHYgoZ7cqvzWZ39Gkywb91uFrKZT3Rb2HCCq1aVK9bVsJ1TAAWRNUJAsAYQK3ekuQ1FydZpiTx1jHN6QG",
  "key16": "25sKV4HULs7RYPWn7gQueSyVTzj99dZki8fX13PCBCbMiLBY71YX29XB5C8zDmMn9eESaTKz32mEjnDAwwqVBnCr",
  "key17": "4Cv3WMMFhoW6oWjPgFaiyWPAhSf2dJo7t12s7KXojCN2ebsyJ5tUVXus18qoJRWJNwmunwT7Uc5yigwmbYccddPn",
  "key18": "64vZhvfLarterdgsdawvjzYJpfPh9mkUkHU7UGDF7D1XeSKwc2AmQD2oJahqE3xvjxE3HMAK34sQmXQiSHoMjCsi",
  "key19": "djkNqjPr8FEzDpYZnYbBe31XNKZSDjWoCkz67iYqHpFhYKfRCoNi55BDMV5RwFky1PYmJ4KwbyQG7MyZ1m8o3vv",
  "key20": "AQHaQMZ14SWff5uPj2oPJ2PtsfmXhpq7voXwZYiPSa8JPVEgHWUaKr2tKsGoPHNjmmxuNYaX2zCtPsmvTnTZNyX",
  "key21": "5jtjsKhRcCpKgJvVdtfhzsNbGy3dGzpuwYzLMjLNSfjAkrorveqie9ahJobAbbyFk7qDwuj1BTempkmvvntQnT85",
  "key22": "34j91LjKxdmMjAvrwnWy2zmUypqhybqMjtbT4By76y6Jq4YipPFP3GPV2eRNXPuJrg2VcTo8m4SMfLcVBwvxyr7f",
  "key23": "5hKtUfW11hqBHpJnvfVjf9e2HU1ub5BUpqmnX3qKbYVF5UuEEaBuQLW34njHzi2LmKqFRYtqPjbAEwsK8oUUUXcA",
  "key24": "2Ke2Gbuq5qNS9pFa2ZmynmkPBGYdyYLsDfgLiqM1sAjrqQCkR8WRfVtsiBvWFCJYGz7zEpnHHTeJ3j4oFckYSHbq",
  "key25": "C1vufv8DJb2XQvzPwNTU3XA9znB3sJCVbtSmCBFqXj2B8zsqL7fQfaN1Nefw7G2ynmbB9pf5LyoNT6r3GhW6pFW",
  "key26": "3USRgFQotDthj4ZcrJHgX2Dm3NtwtQhsr948oCmZ33i6xUuEaTe1tyii5AHx1i56pJYEh3GFwVEbgdR89rxWddj2",
  "key27": "45EbNP54W3urvHqr1YwZFDnQgX8GBM2SCW976XXoVJYFAABFEGJSMzw9wY36g4JEF13Cr6hTQMiXE8DVSTyAdLCZ",
  "key28": "eHCXHo95NAk3qpTChf9co9wC5GEkVyv61dpzoCPYdWfHDWsksMEDHpdwt66THJLsjGirh614rv5QbDoLTuHxH5B",
  "key29": "411p4rDAHrMLbudBSfnxwXWNe9YGGzPoH62cKz4monjAcNeyUx87Thu5Yb6dqHR6G3jVPJCM7hVikELXP75DLV2W",
  "key30": "5j4SW9a68PwkrYWh2WbR3jxyNw7v2ZX6ckDkSnsunnQUyJkvyfjEd9Kqmk2wZGJgPmYzUZ4ahYn41qusMMWoAS35",
  "key31": "35M2Ak9NGwEP9UEEm9zohG3WuyXZCvVE1LNEAerM77x5mDVwe5VfsrZvq7y44He3pBiAuJrZBMUbqBoCeZGsfq18",
  "key32": "Hh5FceUVQByGCBNP8ftBYtDaApQF7WkCV7CmKCLVMHVcT2tc2ZuGQWudjzcA82eYjA8eZCA5ktHHCaUSRCwXEAe",
  "key33": "2QNizjQuSWsuMpyFxYPeWknFJVEGCKQMVpPyFcxtbT8NsFvqkMtXMmSj84q7UgRUDeXAJ1kJvEEK3secvVYZDp8o",
  "key34": "3m9FYZnynRTwRRyReJACWHe6BgNd2FxzR3h2MUWdXubmqsLprJyCL8hUnk48FvsZXZZAh1q46eSBRmySNvcpDwpz",
  "key35": "2Pg5vRHprPsYwL1RJEFC4yBqFnWAQf9iGfMyQ8zducyyd5ctupFegiGWNmjDVLwgc2LsHp2j7rgSGmmf4a97NQ5W",
  "key36": "5DpZ5jGmB4SxYyDjEQEQCu1xSkwfFcQsnesWsNBi5xsbWKayZ9X7vwmQBfeBFvREvmmBRgBZYaE5jt5y3jFu3uS4"
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
