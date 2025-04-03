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
    "57nCbFUMyW64mwNJKCjHzivorLKRiTRowN94idyM4pLEt6vDvJuHZgbYqUkiUn3ZKa1eiCfkmhDh2NwwGDoZxnDu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tUGiwLA5pVZeCdE75sZjjqVBouedZ31w5uq9BH1twrftW34wdZUvXaYYBnrbmWWEK813XfzeypKaynvHJg9yM69",
  "key1": "28p5wfks3Q5AhZfLDE7CjSaBNJ27itMDM7oHWgcj4c16zxq57Mxj1Bz7cs3ksAda3YpsgFy3Tirg2FjXgWeAF2TE",
  "key2": "4ZdpWbAuHTXufLaVYrnUGvKzkfh6NWUXb2qweb3AHoR64b9rrzAUN9L6gTmPjbWpNfG5ofC29y44pWqCYNKCf8uu",
  "key3": "4bKSsrwCPTbELRNYZXudGnNwCsqn3eoCc4TuKr85GY1cjX1MtsdtpitfP8ip2M6CYDAt93RUp2T3GV45Axuy14Lz",
  "key4": "3WeneXZVjmfiNasZ8spLYcZKF4apzpZUDqLZfRsZuYcBxnrNCUqA6hqJ28p6NDYCyBaQ7Ck8v7EQVCt2gjgq8fR",
  "key5": "2sFevFj7LMJrmHgoRbEbQFujPpswzNUoHezXkUhSFPcJnE99evPSCAxJWETKRRJrEP7bV3eYcvZMXQ8LPcwai81t",
  "key6": "3mezu7Vf8W2dHvkcqHeqFovQa2pzRy2UkfbhRQe8m5edR9uRz2LMqzed3ZsAp6CtgLQS86F3gSJ7zWHnmqnLjKpj",
  "key7": "4qUDFikytbDn5jCbKwCpWDN6eqFAZUiBeofvyq3tkHuv6AjjaQ9GeiqqhMUnbwFrEbQgsVg41phf8NPnTuFvL81T",
  "key8": "2Y4CrSA3QKVjyrMcKBynCAGraC73jKsZatuUiGwFj4nX3bSnW3UMBjrwL31LfekEeHW7EWL9ALfyRRf7ntxbLzVw",
  "key9": "NLXLhhaJp1uxYGMSyXbZSdi7rHGRba8amNvqHddRfZ3jvtLKKCfQDtiNMDmexp3UmKdroEwkZDMoxpoy4G9hjSd",
  "key10": "54Cs8EcGyk3xySnkmEja5N3HqRXqEmDn56qTfyavVh3hPD6qvX6DagAp94u5umPxHvvkC8cZoJ7CJxPT7ZDZBNXe",
  "key11": "23j6QVRTEdEp7Aj7UWb9tJXvi4ukL53ahGba2PoAMhzYUAJf3ubqpt8t7zjF5rtmAY2jNfanjmzBJ2iAiSfozSV7",
  "key12": "44MpAvq9KFdFM3cJZHdweweACY4H5FuyT4t2ZUavtUGq66dQdTHkzKUuonALgi9wtQE2xxAdjU8xucpBReJ2b9FY",
  "key13": "22D7BCpLwR5cEFmdBeUUbwsddgPoYd8LRcWTDrYcpNye9RPh7tJiRBb8eAQDreXVt3AYbW32qrwuahsjiLSt5paE",
  "key14": "4jYQ6kPPupugcuePZfg5HvYUf5BwxyeVm5DDJQGGX6pUYd2TE8e6oDsSP5tBi3ZtbqbiU4xCpRyU7621xjQkizZz",
  "key15": "2CHud4nwBinuwRK4cgSpiSN7Ete43DiYQmUjMhrQNRVZehcf5Uvqka2SMJDSNnQZAnkyPcKSsMppFm1c9Fjd7Wb6",
  "key16": "3mJUmQ9R9P2Rono6zeG9c671UZm5Lv2yyttsLDaVppCjwgWZzoDfCiqsbop5UYS8eyjpbvydFY8EmYmn76SK2HQo",
  "key17": "4CZ5J5Ka1TnXgrgj6hvPjBS8TEEnkHpau26EtUkBGZnPncFgSuDq37uYxP61AysQcoBffCby2vAikWdcrAUuVjK3",
  "key18": "4vg8MT2XPQTq1PJpforeiSZiZVCYTrhASnhDAj3Z9kZw3gSf9G7YXaK7z93h47nY95DbcMsnziSZsYkYk6XLp4VP",
  "key19": "4BqDtpF25QsGo4WkFzXAcXH1c9iow1FUYgmN9HLXKTJGTa1fRCoEKTGceV2KtV62449M2xMhdjxHVzDHYJ3E8gJ2",
  "key20": "4yYdET3HWPDEq6rXDJE4w83xrXPjegc6rbJMQP8N9J6Gf8816jU3CYEgG23hzkdgGsfTbXHSLZ4mAmfKrSS8MHBq",
  "key21": "28NwrQFUumSp5RTCH6J1uWMy2Rn827xc3TCHUNXxZ5BXQfTvpFSnpq2eB9pPqhhKCvzJCb9wuHXrcg5mCTXCbAsc",
  "key22": "25sb8SgPCaUatFyxYf1XpZSi9ss8YUws8673cGy8tGAEA9P3SGU5xaRymce2dZu6V88uxZA1q5Lae3Gt3oNBFC39",
  "key23": "4gLn9tnNUN1MaWV1fqUsULcp1Vf6ybPUkgK6v7sVMVmWy7RkoZ85yTdALYdmK3Ez1VRoicKD37Zy7tWvpdy3zvY7",
  "key24": "4kuSLCivJuAWKFPuCRwAL6gTEGhbsB9Fnj8hF4T28CkhsCLk5VrgXW8kVjEm1vH33zw2sUTDx8j2HVQjrBMke5RT",
  "key25": "2HUEz3XodKBkEMrcvknP8RANhdkUsHpaniwRQ5ZdB35X5Wuvg5mrT4jmjMpyakfGkXiPYdTK4vQky8sZVFmB4dRN",
  "key26": "65CNxV7vQiorczxjRodnFsuLrJJHJVuhDzsSi24d3FriVXFFgXpXapjGzF9ey4aM55LY57JyF4e3ryHfSia2z1up",
  "key27": "xB7KGQPWyKmiFBjqoKp6RqUsP4Z8JE9JnmLuRYV2B1tZhdhKfmEVhTYqgu2Nj5dfkk6rMxcRsZsVGuDe6uDcMYf",
  "key28": "5GHqbXwaDiG7qtX5Wy5LwZwMPNwS9iCpSz4ctBCTpfnQJQByXP7rgPenocKiiuHxnfFAhyC8WR1a8jwKpfJ3WT94",
  "key29": "49kPKU1UmsrXwqJEgKYJQWvmBugFiskvVe1S3aXhbir6YkpYiLUFFug7fmbN2oLXWF1kcRiAe1sgC2sCUNrZbBa8",
  "key30": "4z8CsWRyje2XPV3PNBMGGTsBGSfBQXo3KuxpWFpBK3kNx6K6DF59q5LUFW6B2P2fQS2nUtQapN6B3PeAGxHUoRLC",
  "key31": "2ZmEXUUjATjm4cowb8LNrSbFQp6bcNniuawfUCom2BN2P2fuboQ8AtRTfmLCrRC7yL5znSeYw9ZeQbGKZQfTdEia",
  "key32": "2mDdSTYtyBgWYMBF4gdtfquZCx8Xoxxw3zScd2mV7jQaqjG66gtPNeUaycmd6f336AEXVziM72z1DtaCpVQimfBA",
  "key33": "5gXQ8ATMEpK6hxZ5u1CHwybCvFXPcjP68iXFKtWf5s5WNqxB3wJMcWrk7ZwafXityvdznV2VviD2vp3FSrXxAPzc",
  "key34": "32SpnH3BCPXdFi3knyyvx5ijqZD35WFm3ZEBJ5e2ps2vypu27Q17XvRSY9NgCLJ68tv9VS2L8Sr2QJBZPAaLjwUy",
  "key35": "3N6tYrhwZFxEKMWkTbxCpgcvc6XocVccPXdD4EwddBhiBy2pyrnxrrBkJ7drJWjgVpTEWX6zYtKb1DjhszffSFpB",
  "key36": "5Mg3uejDgbzWLFP1qb9g8ZNG4b4wLB6GSpjHuxoAxJKivjeJ8RX1p8LUJB5hjaccqSmxnynfr9EcvxHr6TwJMWTN",
  "key37": "5zHPr6MChmN6QWLJJWYTQGmBfC2GozdwgtpD3Hsuvrw7CxS4k34vK5CybPYih5kLfU3eUT21S5P53SBUJXHCscrN",
  "key38": "2pifLvGW1MUfXu14HY2ZsHn8hd8LfJimrHqhrxaoMcZkTXLr8c49fsafGiYTKfRtiJeDfTTRGLAMpC5D372cPyJt",
  "key39": "5aSKwCd6Tvwhgu6gfUWC5LTSsXUZZPnDGtmiZRTazFE2QnPnh3SVm6QUaQ9Mm6W2ovQ5fCE4ko848F3NGJvfpjjG",
  "key40": "5pSsVLyKB8r5dJUgUanZcQ8FDuHSYPpMsPhHosfqGQnoEiTCZSBDqUJvSCgEwjqqxSfddm6nGvnRkn7ipNZkJrT2",
  "key41": "9QE6NPTjxe5GQAJoeVMo3pC16bUnF8DNYbsmrCyyshcwLkwbZCw7WFme3P5n26HeyUUUuYZqNA7uge2SVrK6X2Z",
  "key42": "3wjCuGNQQxxvNF27Uem9q26UFo7CS4pKdSsKhV3XEHN8pRF1G8ekBSVMKq4d85uWcpFdDooVp9c7JckDgPPV9CN2",
  "key43": "3ufPvVXZPxifS7si2U5x8j2E4jzuLKomjmsHJJhbMgnKPVZSBzNiFxE7hbBby3cp1chZWTKzLZLUikKifk2b7TUg",
  "key44": "KKPkVisWCJKQD2DjGR3y4EwiFWhyqtMWzQoGc4fKCALCQSv8pAmar1DqETq8amnEh9YzntBbzzVQbisKfV2Ytk9",
  "key45": "2b8dVj89qdpfBDNzSEAcmLEWM2LVfRHPwirdBkWRb9zBbjHywUSnAc3CqZ8NfJDGq4BzWUCyZiJo6kvHXLsrrA9R",
  "key46": "gh1nKPmNod8NxXLrdEyJPrFU9zkXocYAWZYqmdk53Qq9B8rsWg7GK6pCaswZufC35WW4gNmBRiFQn9kFC2dqyhj"
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
