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
    "aMst5NsmGUTXVKbsYc6xeWD2ycfNN1pZ6BNsxrtvw6VAdPKDaE371mBq1YqHA9S25cBwgWjmQdx4bzYk5RxUxkJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c5abe5k1ku6MBTqgXcUa8yD9AABgMBj8gNC7kDrmxKEk4xuZjWNx4kmk1wVLV5MPcFbW3LvPfG6MQKSakdsB1QQ",
  "key1": "5KPTg8F2Yx1HXXJ7rqYTdCmccyLFxxoXYhuMZFWGS5aS6oWQXwpNcoqv7U8RrxCSMz1oUJrKhKgyF8Y1qDv85f99",
  "key2": "3KRtJfmjakvcf73zV51uKdz4U3K7fpM2sinGDrW3hrdXAcgfAjez2L9fui8371PmDztC8osr1unnpDnmU5uphmj8",
  "key3": "2Qs6P1Htip74h8REHJjmA7hhCACQQbZDeUQBY5L73FbZXDsj9tnWr6GzFC9BhBNiGJffU8bUGq5n1wDGjxtqEK9",
  "key4": "5uaRjC8WYMq6BtVkuScKfcCWtKidFgutRbekGWeQNdcKgirt9ArVj8uSjydZXKV7SS4ExDrzcE4EhvKC8mGNCuSH",
  "key5": "51btJuCRztf2YxAtETVMMBuEn6pGunjnJ7KLbn4nLj5UZU6tvf5A4Nyea8v5FwugatX6YdbCWBsuP3JQvNHE1k6v",
  "key6": "4KX69NjpsiKDtckhYtoCUC7CGjNvc11SFTVvVHaJM8j2zRFYRZRpoa2Gdyf994L5P2D5umNaVAbEn6JtPeE4sbXo",
  "key7": "EnRVAHBzmc4SJWedDyWLY4XjwzxZBtorm3XK1avLVufpCRwAMqaReC1tjvimDwh9f3TWxmqrw61AzRY3XcUZ2Lm",
  "key8": "5VUMzQH9yGBKwHyh8wUgDQdfRQj9bNJfsLfBJyqbDiXDATUxQWhF5xwYor6ZfngUHMNimamDu5XhvnwGsM2Q3rc8",
  "key9": "2mubTujz8xhTCDS3aCqMoQUXbfW13S29H3J2QSGmDjGgP9Wqbqv7Ni4YC4tDe9DsszvErkXMPgjipyTiKo5KatPp",
  "key10": "37QZ7gi6ydtNDSamcn4iy5wWQrYkTr9EdacRai5gCVCDXVfTSGNBaZzTFMyn9GCSCEfGCynD5HFQvF4oWQU31JE2",
  "key11": "4yaJLkjNWjrWxEXWFKGJ1a5LgDpkYyr8wFZPQYe6GyadZ2wHdMmLrSdu5ZZyywGSaYW3aF52RpCp56s1CpBQ4Cox",
  "key12": "4FHFpmQAfeBBSfvbuGXnAMseekREk6dmwV4wcK39yS5ekuhEjoJZdhv5ATUcWVGexrSNiSa1gHuhy8VLXDA4ivka",
  "key13": "AQ8o6hZ4DRpUorC9LWTxR2utKF6t96qMfKgNMgCE1jiEkDf16BSRq6FecQSqSEh3Xanq4KMgjcDGwJEzzfNFXVf",
  "key14": "3wgzrFn9dXibL1ctF2H5SXwFLTuyisMrinQHbWeieJFGj6vRvJdvN8pmx52obLrtKeUinNQizoqdiK4qpJ62RDSr",
  "key15": "4avTrcfXAnYVWKktTtHwFH6to7xkkJxBe2KN98M4Q87X5GhfebHWoUdFdVR6oHM1u37a5NsNwk8p5Pd6dk7zDi6P",
  "key16": "3oj9TqVAp9Nf1HXBffmeveTBmJxqBuCEpn1iQY8JztR9VUokCf7HVmT78AAbNPt7R4RjD5rbMxHUZDays3Cm65DR",
  "key17": "5t4pRR8QpeoozBJBBuHwB5fRJcFeVLnX8LsfQSdtcfrd8eSMEqHZo9bW61D8hws73AgeQoAFTXpqtwXJHEjkoZuK",
  "key18": "5GP4cMULj8EtXTQvAcXav4NC4rK7R96q3WFJgoMVXZRmDMaMTBcHwqJXHpSrE9HNHxYs6xRXBP7XuvXavLTu7AQJ",
  "key19": "5B8NybdcPAYqndsTfXPE6j2JgSW6r5bj89ZgfiTW1Tj6KhGbvhNWh2WQKJexJfxqRuMvPYG8tLV3Jz7Bero7qmhk",
  "key20": "BNGjxLk2wz4ES6XdRtCGxhRZpFKaUz9aVxUGV9iuWaSxUbkfbav68PtickRrDpDymq5DzRxyvYk1PXMHCuMpKGD",
  "key21": "4eySpkcFXgSswhrVkKjMRBBrdVuD75yTAHQTgyrcdV7kNPmndwaB6HcozF4FtijgJ3CzNztBrpWmNgYUadLuTJ9r",
  "key22": "3NbqwwQoJxnrKWzD8Vp3QRw6NAKdQfeMRdTXAZKbD7FUbqyFU8d11Mh2rvwDzUzGcpHg2UYsKpmJ1oHfRbeiMkaD",
  "key23": "2tz6hTcQ2uvAdFohNAv4VSteTG7HNR6qjkUXyQgg6qghJj5YtvmLtBK3RtuLTW7Vs8N5QZJM1n1ejTXvVoLWx1N3",
  "key24": "bd6wS6kFhmeVhZDs8Q4QCRtnyXqhNesczRqZUWwoH8GaaXTvY6PuPrvmpug4AWj3hUwEhPTT5jZx8uKQX3vWitP",
  "key25": "2dUaoqiFj59XSzepfkMRR9sLEKNv4hGh7N6khuZwXNNQro3vCXXYoSMftJMebmtXKmMznKDt7txUEi1DVKx3PPcn",
  "key26": "tmADNRFJBTTZ6bX4KqayQHn1JV5uZshwMSviWKXQSibVoePSFEmVUNfmMpXKpA1H2ebGGJDmsU78qhxPVBR4nfP",
  "key27": "3qtrMbnjRSbLiAfKCQBWJ4aLGWbKqXQzvZcWU82SPoQW18UudDNQTUhtn4MrAJgTsNyqijsLRF5MrzUjjjrtfKkq",
  "key28": "S3DKXTm8AGxapnuWaARJKQS1A2noFxrhcSWMDRJvBYnKNdeNpnnsApXSc56HMhEkRaJvTdN5j8KUqkZtL8Nc5ZR",
  "key29": "2RDA8PJme43kCLEtp8FoJtvF5g6xC7V8ALULgJeoCcPK7MY9PfadsRodgNc8iuLoaY9c4VowqYk4Bs3ajpU5EiX7",
  "key30": "3W7nqCkqEzRrCTK5yLW5RRowGvX5xnYtLqkdWXWV68WqyPc3AgMCiyUbBrq1FgXCTSvrXxdmzQNU36RcViRFxGrr",
  "key31": "2r3jsRTNf5qPvGy1fJ82X1e2APj3fka4m5wBDw2JJic1hDy5evwkDgGxjF5Y8JFMvJhDHL3RWPBVDEYeNBLmVAji",
  "key32": "4PmggcoHSyPrAjq5ba69iGqnvfQdHACV3qj7qj399Cb2wgZVWQ9jYFvAMUoVdPviVzi9EZ48vJDfqKi9dT2JbDTz",
  "key33": "5ctMEJaEZmABsdRWeceNdaX4hTD2hzZkTDZnA6CYm4GFrGCVxEqaeESNSzvqzWr2rtevnCWzhwx5FaH1pD5PEWsp",
  "key34": "K66bW7mwjEp54mSXv3ut77EnwWq6wisuUhF2zaQEMB9rvodW5PJyTARaByRtSk42yDE8EurQLAeoyEmyt8hpJaz",
  "key35": "3MuC9CAu2xxyQnexWJytwdqtr8s4AETxZQdrfrekLZiwXsytnbMsypvLcbrkixQb5ZkhBVxse1UrZiEfowpa3EaK",
  "key36": "5cvTHGbsVQa3NY1WubFaggjRQeRtMe7M1rHPwKjK43QfprShpPdgxbnAXoqhxdn2PTk8J1s2nbG4gxvMNgpNwFP7",
  "key37": "3rTkMASx9WHuQswQnR4HVpdcmuD3jCFKCux8MTVm35cKDjMJhkUHb1hc8CyvRUDcq9UbmAXZdWdtWNLnHstGdP4T",
  "key38": "429HciwvZ9N6FSRgtcCy4cZhfPocKDzTXNF6Hyrg3BR2gcXZ25mZP5GFKEeKcYk3Lh49FAom6beX8uiUm6zkeU8J",
  "key39": "3Z9qSuomKdpUeA1Pcu4MAuL6ex3Ur52nCxLGpjE5VBMnFN3CWQeF3HwGEP6cPMtvjDGcyPZRCaZgMkejtoTqyTQz",
  "key40": "5QWUjrjM8hdy6czRP9NpootQaWcfPgosZSJt2dZWVJHaUqvdQdw2vLHQfGex8gYXoeTCqzLuBUTQfQbLSP2yxKFA",
  "key41": "4PVuibbVvtvVU24kUBndP9TXSiiVYCEb57G98JSyPEZfw8fiA8aHFuvUaUgywsLRA1Gnugo4f8JWGctNqm3RnDp",
  "key42": "34PT5uvBuLaLTqmVzTXfbqoybqQuLf62ZbSm1R2tHU7FBe5drzmWVVtJP188FHVY6HfXx2n9LEdZWSJEnkPJ7Sgn",
  "key43": "61WuLWhv9rxEWoS3uTXmnedUHSquxZG9rAMKoymBQa17QuUPMQq6vQ29563CaeBoNKFsh3LixgtKr9LDoUWYYhrP",
  "key44": "5Q4BAo7nw5nhAr41EfMCkKLx6eADPyCM7s98vW5urggVYzyfiBCdVRJiFY3qAVpa6sLjRs7xdpwUWJQisfCkQn6t",
  "key45": "5dCVA1mCtGF3KDfJtFpUCFf32372tXm4AEhLUUhe5WQiPJu8Q9WkMwUTVA6hVTphtrNaUrKHsLj2Yr8tYCKdZJR1",
  "key46": "43EyaBg3Ch9ouc1T8EU3oYqU6w1DwSC3UCtBBZRsFnrWQ27mz1TEnrpnrPHaupchMFQhNYRTneeLPLy5oMJs8o5a"
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
