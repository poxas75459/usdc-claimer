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
    "2hUvaqMkdnTMJu9bsjvxHNCyUiciP6sP2Cigk8Tqta3H9nev8ZcN1MwqYAprMq5GqH1GC8zqDo5o5RrVzqxVDFHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9rpaPJt3SDvJWPf9n3Ljw5hdjeLcKL2y89CDaBYngQGAwak5GFmuX4g3YxZtfZ7F68ZJSN4F4h5YevnBVQtnnLF",
  "key1": "35yYshsSDZGhE5S2SRbPhE6KL4ZNeZP1ABSjXiKjZVqGQQXv5Bb2kaxneAXLzhJYR8KBzVnDXn2bzScvSvRSAFQ3",
  "key2": "hqNd8VsrP5PJreZBg8S1bx43PidpQGrQYBUEMXiW9ZE1QU3qvf43dPeXd5ZsqfYecHxC6cT6p53Nn3hMTtzxZud",
  "key3": "4yLPqTvPkvYqTtmzSG5FebEnMQMJQmFGtLFRZp8EDza7XtjQwerGdenbivz7hQJtby63Rmf3A6MtMjXzpD8tZAUq",
  "key4": "3BrFLR9Lr9ApAyHnArMjTh4EPG2m2PTMThdmTh7bp8x2LajwJZCRwXNqVTVtavMzHDqvpqwmudJbt95nKMFycKV6",
  "key5": "4Yeu32ysevDFuWfz8DLnGT3GmP7nFY45q9r98DaMHjzKkHuC7E6vh5kD2efV3dbYkU3uiLJkRSFeALJW8zx21Evx",
  "key6": "4eLoW5S2ZtWq2tqEXyKUrQAe29evfGFwn1VLUCmnNpAhwzTJmf6qnHFtfyuPhnuFpb1E3Edo2gB6nVYQ9sb3rRp3",
  "key7": "27KNsUn3kymTNCDWDNcKgQkEZ5myL3sx8mRhUaygmRsPpP4o5SP8vjL2VQA4XrwKyjz4DMZg1MdB7C7oJNSEHEdV",
  "key8": "49XDRUgKnb5CLiWZfq1mmNJwfQwK3rAJjENoegTmdni8GNsbdeGnqP3Wwnvnx7zSW78gJ32UpqJCuNQXMsqqVVaR",
  "key9": "2C5v9sPdRMMRBU4wN9Ztr6XLFKfPe23ptqs1JwiqwvpV26Ct9asLVgJqT1HoMX1MompLrAQXzhzwxA8CCNG49SCV",
  "key10": "3GFSFeKCQvrqXNxRFTtShZK5a5TtfZfDJ18JZEw2GXeqoys8dZeU41UaqWCx9WbxZ1AwmvPPqpA6JxhmNbQhRuZ1",
  "key11": "54i1ro271vodMsMoWEWeQ8eLg9gfeMVeaihY8STMpkJnJwyrYssYdBZSze5y7jssCRoRqiqqMEu1LQQRBTTgioUA",
  "key12": "3hxanGCyfVo7tznvnNjdKayGpgBjftDLQoDnmohHwvtqSNYSokY9VNyn5gA7YwMrBfBe1xd5NqppMSjHqucJuMFa",
  "key13": "2eW99LgmguEmxiQoYn6G4CJKLiaRM4NSTnTPyemSwud6Z8uDtcJo2LWBbhrLgae7Xvr7gDAEyz4pFGMZZUnaxv1F",
  "key14": "4ryZYZ8mbyFZwAHyh4g3epo1bNpd8AKtcTnKgmmsLvcbBhCPuMThGkhBEyrDVt4XzWyydA9dAubNCKsHQcDnxE9K",
  "key15": "eCA8cECCiCrfG7bzuTzRkU4KK4EJBUwQEdse7NYmquTpkqbSdeNwUXzELh1nrxzsZHpRj9mxzqWhD2mUwczAKa3",
  "key16": "EnQgjGfKJ84Vbg3ofNSJwzbHNMtcWvbVLAh8W29BK9zpbyeefHBBfbqogtXtFRowv8bQ3x2ztczEpLuZavzNpCz",
  "key17": "2NnwwxX2suzsViTBEDMw3dCsu9wjvzr7XsZYQ7kMrjvfhGmi81UeCvB5xpUCHbH3T2ueTzUoEY8eysCc368Cr3kS",
  "key18": "369Xd6gX5zLN6N4kybLLEME5aWRUprNxu2jssxqJStUtcrG4KidwoAdrKmFKDC84khow1WGo2APXWBxFosFxwi5A",
  "key19": "23135MWraeYmqGi3a7GUAqyuo3SiYtKNUW6JxdD5drX8Snq1rGphP7p4C2QNYhkU8oQLZLBbtvHW7RUL1UpdcnC6",
  "key20": "54nNnnkvHqJYTzRfqF3qpds2zYL2Y5APjR6kvW8UrysAippPavMHd57pHGWNw6MsNcTJhmrexRvm6UqvdWUVYwrm",
  "key21": "5FnapzRi6HDofHQKQT8x4YU8mwjkQu9z5FPKASgzKrdXKPjFc4gSD5pPSdrTnHKCKNWemQEMWAk6usihtvDhN1bA",
  "key22": "21KnEk653jgTmQ6aMG3Tx6vb2rbQ4VCrAn7oRmrqRiBtauruttGNkPGFUsgt46sHon4yVXDFw1ZaMmHKWbNLRHhF",
  "key23": "2dwbF7brCWzbHkveA1JKX3ccU588qGPVMapGSnHDDSXvd89EGE6LCXhEiL3qrvfUbCMaSkWuVkvvG87rFQh7wnHm",
  "key24": "UFvRSFKC1QJhy9gitNLWRMDb6bPd2tLwhzredznNmN4NyZNX9aYaLKVhqAm2tXSKQyYNsFJTnh6jHcSBF6keaGK",
  "key25": "5LyoenYXcGF2SFexzPZPzBzXzKVpKyYroanVs3tfaB5TAX4is7gRJLhPmVZhvZ82wsa5YQPzmyhfEp247PCmko4",
  "key26": "3x9J8kYiwaszXktxhguQSPk2UuWebaukf9KetUh4NfMeGCwsTJDdmghSCqRQUL6bXXpKiwCv9mFFAo1JVLkBudGz",
  "key27": "5buZXu1VR8hK7EayWDRG6UYSu6h86kuE1WmKxkSB7MkbNjHu8TAbDbrEGG876TczpYqErNTKMH2paKo48tSJ2ZW9",
  "key28": "41DyvopFQ94dsGMe32PGRe1kvjvcs5GSmRobKWpScTrttw5DPzqSzrKMZXtxGYkZ4XUbq7nXyWDqviS2kn8KrC6j",
  "key29": "5uX19P4PqV1fo5dyqfgyEfFfYAGrTZsvTENXakSZY1qEkyJvdcGeByuTG6T3aCmsANqsk82svBtyrTY5jU7GaoX1",
  "key30": "4fknWmkfR9S2qb4AhFU6J926Eo4tLHTvS139wcAAuWkP8XmC3jzqYCwEvMMxciMBDwRkbG9kP1epiS3cHv6GirAE",
  "key31": "3GMLFbmvBBjzHjeXDgMxq6yLju6KjvqDojsrGDX4thvkXAinuwiLux4RXZ3ztR7vigUr19aKSY9oaneMk92wL1RL",
  "key32": "9QachY29FoZufapTPvmofDGcwJx3XTNCkbsVmLEiiWbfMbZjut696UaEMW5yXE6zt69f5JQxNTUioQkG7RiFKNG",
  "key33": "5jV3cfAoWjq3uFxCyqxTB4sBraqAYbqGTFseUvX5hNs3ogyjMwnZPUvsvWG2tPh1neKxkcsv2hYwfvdbfGWzL7eL",
  "key34": "2C5kuKanULfg5JxvHwe6yJJwKSHfvWppGAH3htBLugAan5Qn7euCfqKkopQDkqiyqmerXKwi9uKsgfmC2BDWDdL1",
  "key35": "487o381j26cRsXLCyRwsZk52uZZWqWcEgGDxaWh9kuMriXxJ5ZjmoZvAheDLnkEEs2WpETFHeaBY4vmorJHsFFk5",
  "key36": "c7hT3taP8SHck4Bv7zCXidKVC7p588iCuykHYFkuT9gnsAvs3EnmD5GJUn5k56vNkScPKhKQSHkWHgS1PHKXjNH",
  "key37": "41xeaaUUTsscbyUYkd51AeNXDatGTFUeXwtknPjnarKVHAfnsaXdX5BYCfPHAd1smuc8a9Gw2LB2pvQMBpa47soH",
  "key38": "4VTZqXNmUfGH6KxVZvGHHC6YoqBwWRqAPKDwfbJTUdfddKt1RNE25BkbgMF1AUKrRRx6ccp8RUhNLrb5UTWKGKKJ",
  "key39": "24UiRosqT3dxFCbqyLZziUZSVjndU5ZW7qFrP2zDLD6Y7Wnwf7cS4sTJSiyFe3JJwMajF9AenX8t6gG98yeHc1jP",
  "key40": "3EBuxb5P67jEwAbzbomime6P7VadeL3fht8HpWYXjG7go14DNwr6X4XwzHgKvAd4z253UkifXVqGRMtqVu4F5NHL",
  "key41": "52GF9zLZfHr1GZtr9sAhAaK642UE2B5KbenGiRpf82rfWsytmUNRTeAXFacAZDNaS97Wr6qJ3N1sdqysyTeJ9k8S"
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
