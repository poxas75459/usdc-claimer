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
    "2Ny9rco3UE4GutLSXqpbEMZN1pdkEt6gWQXLAEzR2cZom74hZTNEAFAzU7Cfz622CVy7Y86EPGYojdEHJu3CdKrF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dkneors8TYgf6yGkuAPKe4Z3aYSs7ggckgi8BB2DfKFynx6fxURzbAAQScGGN7Xo2hPMrAZiJX9nXRLWhg9t6Nj",
  "key1": "3k7qAEqY79vYeoCXGfruYumFwANvszq6JgeXpsFAQaiXuExLqDM8JGw5QrvbU2qfdtPS4kktYUwx35bB6vXQ2Zgu",
  "key2": "5J2uMcKGSMTgaWijbwxXwbAJ6cRDTeNuHZ3G9K7ypX9cbXUZjw62vhmufmGVC9Y78v39x894uKRvTux5uBgB9Dad",
  "key3": "5NRcC1WRxfWrV34hJpoC3yhB7M1MkZ9MYyfaqxaLq1dj2Gfj98qf6fgpTdEJaHzCbkn79bSmY6GjCABVcazEfJB8",
  "key4": "3MbNBe7G1hSE5DcHTGhiPfd8wk4v1AoPVY2s1FU8z5Jk6YN9aBepYJ4UG9hj2DgeQLvVXesnE86RmCZcmj7AyeDC",
  "key5": "4CJviof7LGhRCBjkC3KKwnqnpwxYhG5hGLdLunHKpgrMLSv6nQD5UzLXXcJcXYcGQjgoQVzMbjFR2p3fryciG8mx",
  "key6": "4jz31kqgbTyEt3eETo7Kh4TvsntjL6mAH1hsSF1vBKfCEdQfyiJxJJqduxBnMUVGLFd3yd5cF6VwxX9AawPpDpV4",
  "key7": "2EtiksiNt7gZ3M2XjM2rTAmyBfJuDk2cFUPU6hyJdLLawjQHMjFyW7ndXLF1mx2sczRRu1Dvs4ZbyGSSXCiAAEnG",
  "key8": "5fyxpn3wEtJgCvAa58Yt2HpgcqEZPvwAr8pJQ3gaQkz1K2BPCgXZ8WyR31GvK9tX3niDzRf7pnL9g21b3UW6cywR",
  "key9": "3R8Q2yxjJZsW7wU5bTBBVXkSYvi27nDVNKfpLVrLZcGL7G4QongkzwmBjsoAryCU6PuYGjdLfmGSbx1XkeVnunK8",
  "key10": "4CBSmoTuMqejAYrQCpP2LmeGRGqKciDePqACm88jiMrops1RpLdRfk3PMmk8vZUbvPK7BpYE6sQe3gLyczZR4woN",
  "key11": "4ipvj5UihuxhFvJih2csDNAbfDbvDztvntspeeWzfCLjZeJmiNyQ2TbmpZUXsu9JE4vE1YFniViFm9m7y8Pww9Bs",
  "key12": "2xcA5MwfJyURakEAhmscU7fRRo7tULoA9Px7wDv5qThESeFJfB9LHoVWRKBCy3fpJTKAuekYdnF49STNLc12veEP",
  "key13": "a2B4qpDd9oqccyeoE53hySsybRiYmLHYrx3V1jKUbadziktF5mg3roBTwe37iaSUi3xYS6AK5DBmfF1ue7iEX5k",
  "key14": "3zcS4a8qBPmuc3yiC4RLSXAQw9QQ2qR9QihYPxRrKZYfdJ2CiGer1JSKtQfrm6vkguTf6dB8fTkLFepAAGaoe4fQ",
  "key15": "Y5N7Au4EagqJUdy8fYudyqZGdw2b8L9cyVt8bTm4wcJfBUtW7Ppkq1csrzQoBUA89ff9MvdgsHUy2iSwNuNRevQ",
  "key16": "4krudMD87tyPcrrqBiwwkPMBxUdK4o1TcNfagyp46Fp9LcRRLkNxGcUowApR2fBqMWJYQctbKBai4T7thfCCZFKB",
  "key17": "4fjKwDhg1omLdbhgAemND6cDBvMC4SGe2fzRwRmP9ngZBxBs3ZdviJjLxf1pENGdcapuWvxqfztwhrnHguKXwoiD",
  "key18": "2rbXQ1z2eF7nHrjv4GkTsx9UBWFJi3N8H2tnrsxKW6Nn1sKCTNwbG19BXRFsPWacxqU78KkGZmSV8aQCkboAjoxw",
  "key19": "KrjcGWHvCQA2rGyTJKVpRS4zPArSDh1pggENjXTe2xKZFosYf5tdd1cpNhPxicyJQghzzjaD7TtzkhbnSZjYRbx",
  "key20": "3eNAUjcgAEFFFRFe1bXwt8j6C3qfJq7d5ihovYf5k5eYvrm2VtmrHZLmNP38hzbx69azub1m8eaz9u73wao39CDr",
  "key21": "5pnm9emSkqZDKL1M42pLMb2qNnfxtJrtiWYXC7zY9e5B4hbr34eHMPKu5L6unfjdpSSiTgBhPdrc9M4DMWq49aAW",
  "key22": "2FtUJ9tPUS2i2KKdiE5kqUNCjgwn7tffamEnKhVV8dqgXwEYjUSjPPttiKWFwkcd8hWMVDFmvxiWGZ2LNpBrZ8fd",
  "key23": "46CKqfiukpMtkovrKR2oqxebLuLDDJPqywz5KothmZMrBiYxjVHUKEzhGtqkob1GqSFiXZfWNQQjj4qUmQnMPnQq",
  "key24": "4MbZZsoWCvnPtF8pYVndFeW1TSCn5HG563ojNqinwPZTfr6WjHE91AvCAwmCYcKiUmwTfvvYwjRRkeghAxswpDwE",
  "key25": "38zNUNJUkbo945SMy2EyabspLd3mmPzDQHgtg6etsrPtc5Bk9wXPPDGktdW1Nfk6doseRjwrdFv9w639rtiePMok",
  "key26": "4bbXWZVYVmEshE9encgiUff1mwbmn1N9ybVAnbhPsVDmSCMw3zpTpWU8mS4Tfq5mJ5iL8fTwNAwihKAY85JyFNi6",
  "key27": "54THxnBbQVGxGTahEUBuJRP72DGd9GgLaq1H1h4toVL4FUXpnhDjDsXbGSEz7w5MAGLtooQvuEt7ECYNAFikdEj3",
  "key28": "3WiQwLKTyGaGWrL7v5WytQsPWeDncDDkWPkNpzPZZBCaqZPMXzNgLpxnXcArzJemK6hxcHfDDS4fvwTYG9KhKkuz",
  "key29": "3VnRtbAfjKMLUzYS22Y2sNSvtgFKnP1u9PfrHdSatTcaAiSoTn8qFPEERK5A1Cn1Nvt4cm136TyJmREgkGmaupfQ",
  "key30": "5gfpJTBnXBmb93Po9irvo4H5y96XE1u1RYD4VXJiSGso994JYNDPs3pQeKQG6XmXgMBrLjQe9851ZfNpPcrkjDUa",
  "key31": "5wdYTyLzL1Te3U4HMkpkrXYUUSsmxhXs62TqATmmGUzMfJQdJbkk1TKAJJdfj4uw26DNvuL9cMmYD7ZCKfPd5f1K",
  "key32": "3No5WtJa8bA3cFRosR2K9qHTaTVW5sYVNgs789yXsBbmWCNpS91kWfgvTQtpbLukZUKLy6jgsPYaEaH6hUmptmE5",
  "key33": "2iHLRDXgcngczjY8whYu7GDbyFo5mhyjZRwsreGoLE8Vh1oaHV7H249x8WKBSaMmSrrFrgxacGpLEchNZqgsJ7Mh",
  "key34": "3mPJJNL9mrZLvSXzmM67aFPkJpP6SksbpMSEvhongExexk7M9rLGm2pmc416M2PySAoXGvFVmKkWv3c9fAoumRhE",
  "key35": "4zaAhdnG4zUgttGuVEWAayxEoowwwWsZB2TwyfDe61Lcbon7nA6K5ruqY7YhwFerMpRD7K3ZcGJTs4fcRmqTSKeL",
  "key36": "4VRqEVgcZtTbZa6SDcuxMkvSJTCn4dBxLD9UDprPVTMvesBwfC5cFzLP9x3XgveFVtgpDVv2yQprUkTWwfWv6cFZ"
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
