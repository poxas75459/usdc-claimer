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
    "vPr2cSq7xiA5ygat2ZqcrydBJReBTkfZ9C6MtngCpNBSAAhiu6ww43rgHUwsFeo9GBy7arwWgz9adPyTuTixDbp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WuuXJcRduGart9KQnhH7qTrDpA9Wt7qPV38aPJV25GBxBSCsesGdP1G4cJ7769QMdDdpnGaAL9AkKYX38AV8xNs",
  "key1": "LE4U8XdbLSB5LgLGcvaHfnb517SjqTWMBskBfLR1zESQ9SXsyX6fuK8CZWB65nEaCZYotuF6XW7Q4xGvNeYQDri",
  "key2": "4VNa2KKSEPXAyLdDgTbjM29yZQRSEiYbAxuJDywnDPHKAUDzJjpZZGMimpEavx1b7S9J1uBY8WGSPiomwHshUCh9",
  "key3": "3Ne7z6apBwiMqGAmAoqX9Fk9vxUYZKhpwcsGGoZxWhHXkd7rtass2R8x5njVK8XpR55etYSJVvGh2bCFw56cq4Sr",
  "key4": "2RXGzNySYk7sgfVgNAjidHZZKVCZS2CZS1Fk7CN2KcgMntchKPjq5CiXrFXJAfonUiNSM7ZuTS8TxCUrjwDQ4f54",
  "key5": "5mAQayxLXZ2ngk6TtBTjCMy8r4WpjDpM4hmGZqs299y7hFTmKVuYpiYhMYDmpnvJNpxuWskQun8ejfa4qXcnrGuR",
  "key6": "2gEax5PEh3PtuPy3QZfgN5ro5M8fwVyfRnv9nDwmweL6Wv7ijdVjH8nE96F9anKKeVDL1rCvJeDyhfZE19mkcWMc",
  "key7": "4JBe6cRtMBSG2kvUR3UtAuG3FckbQwHLXJcDBLHDcBKRFiTx2e4KnZA94BWiLQgrzYqtx6JYYY8y1bJvMNnBkgGA",
  "key8": "3c5aBCUgJWoTa1oe1Ugb1ATudd88GVg47Cq4ENkrnMDqcCNw3nDDKo3iNwomDC2mdU5BNBMN12pnKVBcsbzfJHiW",
  "key9": "xLKFL7wUCRnu22zXZ1Wp7rgBXxCX9WAaMWXLzZQHPRuPSiNBaaXkKWv7kpU8pDjEkXQByLUfYoyZutBQ2V3ZVBN",
  "key10": "23TKtdaTKZMKtJEe9yeBGg8NVSC95WK9nq8LNqYzUvxjiGMKaxa1j89w3ozSephELFUj2PHWXPvwrqtEobCjmVE5",
  "key11": "2rvpfELtrg1dPEntMFXmqd54VY4KYFTucsTB8HQaTLb8eZFeG5XPLxc5JC3Qo8yoHbDpQ796r3xesJChWM6492oC",
  "key12": "2Qbu7bWZ1C2Ky8W2z6ZTfFtAxsc8paatLfNrx9K6YuqtUW8hnB3V5WBUp9WtU9EoJZ3J2hBwVPYEerYQkicHdXXs",
  "key13": "3A4UYpHxoh4eByCerNLKBcNqhNwvD9Wtu6ytjtexhcgd5w3hQFrJGzPetrDQknazgTVzNfD6tLcMKVjLihv4CBet",
  "key14": "671PgwZXJBYmJkjPPAvjtBYReVGnfhYGUCyN17TNM3joKNkQtF8HJTCFnMJLz6CwV1MTRBTLwf5oHsUguUzbgku",
  "key15": "57jAVCcNoEezZTkhMScyudh5kZBcRAKbU4qEze78acMQoJ1ap6y4oz9yGZzGGp8J9Gyd8S3Xu7ecPgZhMdbdpJNL",
  "key16": "2oVbL76dDAecwgYFKTezv8oW5Sg87edrx8xehPwq3GBJ73fcUepKCibZCezi2BSoV4TeZwJJzGsKJnnBzSPReek4",
  "key17": "2UvP9mEf5A7jp3fg8MJZbq7SnANABzZZXgyrM8bZY6Hu15ShdEJpgpLz25gGkaH2Ch12CzDcfe9ZtWJa1bgvBwe8",
  "key18": "34UKguShK7izrHGWEwEwW4xdKHYH5ivjBzAELNn2bMVYFAyjeFWJfivwS1rRrENBTsnk1xWZqwfkbbkeER1xX1FQ",
  "key19": "3idCQd62KJ2xmnNtq86pmmqJXvrK3cEMMAoxMBS1ErPL8pVXs86yrCGgmczuYWtsN9MJXayka3xN2KVRQVq6MZkR",
  "key20": "5QTU5AmHHHSJB9dN7MzXq5ceCBhBv4Vy3FNTDoT2CL9GHNfymuNRey7RYyCectLPePLR1Q59cbD7Msyh5stompWx",
  "key21": "24bgtBYnFFm4HgQnNfwoE4yQGEbHMp95HJ9yU56AGdBkFaysrkdSZepwwb7idqfTisgkgHFNZ5JUWL2tTqqYtAWv",
  "key22": "26RxWcFQmQzRaqawQF3PDa9n9w2rHCoDK1gjafnpkq5b3bG7VZcfkoRqkH1RrTNtEGWzv3YdAZi9JhGpmUwUbPp3",
  "key23": "5WZn1Y3MK5c5wYFudYPJPf54RaLnU7YHCcts5K6MdHQiQwLRWhH4mmaoxP2zFtN3ha1bs9S2TH987Qka9C4MAkei",
  "key24": "2sEoysVwXLpZnBCU31s5hwhMiFh4A6NWrVcoctF1mhM1jxKFAvhR7GJGXWnXTXv7Ks1DwRuTGDCrro5waDmAwqFK",
  "key25": "5d511J3ZhHDpdLKexhXknmAzf1XRFdVWyhBTWwggT8ERmY1iQFHRM5SsdcG8Zc5m6gqzpFRpR6FiXsFZHohXCQDL",
  "key26": "4mms9YabyUj8WMs36ufwYV5qVjqKjR42VJBcbmMFPvcaPUSfySjskg4KhCHjC4iwreLPmECDbVTfhVbhbH7DWAPb",
  "key27": "4qwB1EJ2hcDBJKc3WEqi4teueDyh2M8XcMUzxHjT7fnGpQbM8KTSexipG7tE36aidzFBQQSZimjkjjtmYUgGDEyh",
  "key28": "5UApakB68hEEESzyjVLD3FeGsKsMSFTAvTi3x6owDmCDnah3fBYBkFRQsZuWzhz88ngknXMHCR3gZEQfFYyyRFsY",
  "key29": "58HpjmNcQE6GP8j5ofvaAW1rgi9La4k9vTCnRn2rRvqjrTqMeNYS4D2XuS9kRiGmsBfRnTyezFQrHgiBfpVS9wVY",
  "key30": "QyY4fNHuHYTcEvaHQCd8qfjtMZzmHHHcaBwkFmuawrietgBFXFZ7tjvkKta5nXPYmbT9EkSW65JfEHgsBH9c5op",
  "key31": "QD3WsJehF9C36ZQFdpJmpoghKaoy13kKc4MQXmecGymKirEfvJYqVs5UmgwpFFvTdmhy61tASZYRL3rJo9iiAuX",
  "key32": "5mswBrVh9Fnqe1nypFhDcwqYP6Uysa7VNtCWFyDnBD6UZAB1iJWNkay9ZX4sxSQLfL3K2MxB5PJTxJunR7PHhCsU",
  "key33": "57nGACmwvspudycd3d6h1gTVvvGA4BA9qZGrxz3Yb7s8p4Sc3XHaCpdj2k1c5ypSc68EvFVjcb4wp2P9KncNHjpp",
  "key34": "5ebcEvkqmoEvkQYsjQhiM2WxFSnAcam2z1BPeozQcCcZBr7xMrd9inACSWrLpfJbK8RifJnxZFsPNEuPjLQEFR3r",
  "key35": "5mE1zz9M5paMufcDbQTVxZUiwWGYB2BmL1bKF2aY3tTBoho2HV6GSGQydxUuGAQvMNWLrSW31aV8PXHGzBvHBv4P",
  "key36": "32jqNfvNKjcbb9XTH9mimhb6EAFXxYZEY6RcrdemcPbzhTHNcECCdiU9HX83foTbUVMygYAAdXVCnvwotVzJdNhC",
  "key37": "vneANtYk16qUFgTijTTACLqphpfzpGAzKr8pGefS6KJtK1jAKNf6RH82tSQC2j2J9mQKxzSG2J1zFAuUTTjCASn"
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
