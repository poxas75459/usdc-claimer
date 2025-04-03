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
    "58PmK7MKkdavhiGAMnhnRD3ebhHP1dDV41z3gKvPB1AyGkjBXMZBQJEoumKe1iuP2G6NZvHJRDBf3EupR2Ap5jP8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zcqhBVu4c4q5cpgbNd3CM2RN6G6SfWgpsdH9UVSRydf1woyD9HZd95zFh8cZCEDLjW3oB5V5hpyx7W3NXZBgvKD",
  "key1": "2ApTWWTY7EXT3J9ZM5eSsRJSyKvCNU3D3LfwnDmQeagQ2hqcpCQRmqfTbya6SafSx2jHSKQGarhrs7a6SDXVoucw",
  "key2": "46kdEffAGS3iCvcsVqWrG43ypH9EPF2bKWoXySfuWDySC53fV66Dz9UmC8K1RiF3Yx8C45fbV8RQ6C5yHtzkwRTL",
  "key3": "5cJtFMXDZGDASp5RwaqN6g7e3GKaU6V4PACGeA3nTALZh4cmFKrg1J7RrNVLyTpYfJmDfRPVenWXXEKmRDYzSizu",
  "key4": "425ii49LJRobLAWYjKqjuWf5efiRyvbxRnQK2VsgUuxGuABjn8vbJdyhXJ72kLTeAq1yG8JsUQE7xfBYvrJrAAmf",
  "key5": "3KMkgdysrow7ALeawm6qmUbKAVnE1EHaFu8uhfLuRimEm3jAE8SBewuuaLWNgfsuPAe6WTMvdzCSAAuu55JRXegX",
  "key6": "ccN8jBkRVp21VKh8ipP4GfoqHT2Hffm9qwq6KjnrfFnjcpTcXcnNgYUnR9NqsMrkmXQoP1tXCUbYw4pPcV8vPvG",
  "key7": "2PRkACkHtv7tBPWQmEPMwsfLdrFrbmpbpkjNrDWjhK9ZH3NVdECAgpPeP7WhG51zdtFP1G9mLhb82qzsJN5tCDef",
  "key8": "2A68YXv9yPCQYJxk6kB9qq6kfSB6DiU1KfUkdWcUXro6ot5ZvE6wTPQ58AxHcUoSqBibYeZbF4g6zRgfDoeC6kjG",
  "key9": "4U3XtQ7RDDJrBHCAimHJGbKPw4fYjYjSNCspu6wPr6Vb8dKHdEz66JwpjrCrYvsZn76TUagZe3b7hdvwnrZB9FX6",
  "key10": "3KGsDk7Dsg9fqDrGNEY3Pg1ka6jvcMHkbpUu8wZZU7CPicNnFG7kAzcoTmt3FkQFa9Wp86XjHsEX2gZJeBQbRBAf",
  "key11": "3b75A7U3xf86KBCvzWsRYVAhajFV8eeEx94SxFDW6NNRuRytcy6XrnwQ17D8iumKux6HckM3TeHQ2nrHKAZVw1v2",
  "key12": "3kfwKDDZakEfTdZJHhEYG1TwnkDB1erhRjqW37tRoRFce2Sn3HAwLarwhxseX1dyka3bTTUUYJ9HdQ5sw2f5WPHM",
  "key13": "21DjUFjeCDG8agJ8j2u4ibCqvBnRWHjaaUJgUcscQzk8XFLAn1z8omboEnqv61AaCJ2hAtC2iXfJMwy9Cp2aTugg",
  "key14": "5zEzvGfUMYkXEkSmET71TYE7DARHAZbs41iqpPXSEYVsUQsibi5MMDKh55hCDuwyyyVPn9uALXUGACtnSQbr5LHd",
  "key15": "4L5aacRd5tzL5ayHdbsTmfmtfhfT6A5L34rYaSscYfK9uQM4eZSLqr426o5FYcFg4FW8aRKsqUVHfC3NjaN8qNXR",
  "key16": "2pfuJm9DwqeS16uksQVeingTjURjo3R3gXcW2dy1rDWf1nvWt7iABNCHa5TFtLe4JZxvujK8xyXrAWRfXXCRRxEe",
  "key17": "2Eo4hwArrozPp78nuh5jPQbdwfSmBKTVAoNwyPw8KPyExvX8pr1Vgn3eHKh6mXrXG3rufPQEHfKCyPjFuQU2t4tc",
  "key18": "3gFSq2BAT8CWRzwFnP9UaTyMdQ6G8EwyaSGDGRxBiizwGRmf8g7wheLQpAtcgEfes4ZihaJirTj6WWQtF192YFM5",
  "key19": "qB6tQfvv9TuP9UzY4kM7B3qTQ4ctcYFJEMcLq8pxvvZ2z2bfPx8VGtujVsocTLiyxfS9kDW9t9pc1FyXAdqNBqZ",
  "key20": "2LsybUU7NbJ5UrWr1KqghxnbSiW1khVmPTvH58fyR2CzsRqu6WwsCFPJXg2ofGt7n9UhhwhTrs4zyPAUiDDdr4ov",
  "key21": "tYDqq8YJ18NqK1t782dBiuLiZ4uQx3K7NmWjWWeauzTnjh3CD8Mdy1p75KdD8ZAC9MHBBXHXNSkFZPPbw3a5BoR",
  "key22": "4SzHLqyykt3s4UDRez8CoosjuPWP3mP3M1vg8FCdstLSB69hXeooE6zXrkq4w6fCFDmXnavGFbx4bY2xfGkpBm3m",
  "key23": "3zFPrUzzBXMGZFCB5arx38rV5cHsDsxouHTQVLfzEJ3KKFbzeUgDwytKpgF7Ks1nhUs8EpAdCit51QXWTszhnMNJ",
  "key24": "271YHjGsxLwVvHsWgAiDfENruZPfKZNWSVaJvEpjYWLPzFvv5vSMLs6sAJh2VAHeFkXTZGqvYasm5tPxwQaqeoS5",
  "key25": "5KhdMm6AZZzE9YgfaxHuAbczB9Uk2eKbnu27n87pcEKw58N8EaupqqJj8Vsdu5MEWi9pKvcT2HMMAyNrh2KGr73D",
  "key26": "3J5XPeQHk24XVKafzabqJRcdQ448YijYYMK7C1XkiVCFvv54929W1CNRYW1Q9tf6k4UCDmDqK3uD88AYKMEdGSWh",
  "key27": "tXYE7SfpsB4Fs66h8jQUA7N9MJGdq18CckbmJ3u5LcDnzz1C5Vpi8zbQhgeBKkfzAeZaGnxBmwqDivt7Hjgr1iA",
  "key28": "2uV8yYQL6nGSpwFmeG44xkDV4CaBRdjgJufLZdfcHNr4Vk7k34eENRVV2euKiRNkfGprrpqT5yBy8A8rzukgcNGr",
  "key29": "3bbN1shtkqRDQvYNbvXwfZt9511iKitZbgW7TncDbyBaF2iH3Z56NvUw7iF8oAS8yLUsauy7kapgdjALQELct1Hb",
  "key30": "52q34AoEc571WDLDNF953fJvxfSALiX24e4J34DBeU9CkcupimrWfnieaziPt7W6MdhBsRf1RPHMyUuYKF6rWWNj",
  "key31": "2WwdkDn6hoay9XufRNXReW4gP4TRV7MnFRatfpTjaLnUwqDq1w2mjwQEGnfJxiqZcfJ4PDa3p33TbyjTT76382rF",
  "key32": "HWUYadSGgN3EGarvK2coVuJYPCgtgo7mPEHXGsNpv8Pi3YHgUeuebDgesip3yMC4vaEZyxY2cyC9jnc9SFZH9xG",
  "key33": "2KWg82Nb4JhTHjhembJNNxgesBxUs6SBPx8HaE5xeEZcpiLX1oGQtdwe1hXXWVTwWSLKCwkGhRTwnydcT9txn3TQ",
  "key34": "4Cxr6T3hwUcS86kGknozVzBkS6p7c1nBmp5RdhkiHgEbLC5QH63Kugac8FfWbe4YLeGbmR6EHZ7z8ZrX9pT9QNjy",
  "key35": "4VgExTARFmjWeDydauNQQC54yYhX5SXsSdmDK3CiqUTaNWAFiCi1rBowV4pe7yyg5Xais5PMCTXtYKZSuKyzvHcT",
  "key36": "pHYpvkyXJ9nGng9JN2GEMxnb5sRrtYUgVgFEo5QbciVY4LeGMfd8L8PihBiaJksXtnc83AqM6PRHdb5W8A5KyHg",
  "key37": "2gTkfuND3uY633LPyBg4rpLsYSZBtgzSwRHFWWh4zU9jxe2n7dFmGYdC4a2oYN1U73s9gGeLbymiyszPUAiScDsj"
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
