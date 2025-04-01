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
    "YaU9BgeoBB7Yykz3hmDAWonFa8MAoPdo59apNyq1ooTx6eZdBtkQJDVdXyERhzmKJ9RvbLWxPHAoSwyfrKdknKR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MPniD73NMNzPDa2DLrqdvEYxgBPtSBubJkv9mPDewUjUR1wxqa6frSQ99w6wVuXxjfkXMx9fqHUVeZibTYTePGg",
  "key1": "5U9tNNmQ4GUVAYar4fGnn57hCotq3whubhLm5Wc8oaNzAZuXWMrUwh1FQPE4nzrNH6b9bQvo2qSdB9nEY9VGS4vX",
  "key2": "tAgfTCPY2dCQTW56zt9LUGzBnC3L6mM2dTGnDjUWGoM9kXqmqbkFf6jGXQYUTjMbRRK4CjUDkNJ4wQjaoqXx6mX",
  "key3": "4maiwRqK69UMTHqKqN1z2Qx6BFUnMrzkPMzz5euypUJDoj9MDAEp47KpT7evizwEQSP5nqDqu7C75k4vJ6SYjdoC",
  "key4": "3FkAPUxrYUaxZ4f17iSLRnjXzYD5FM4rfCogSEMaAvMrZTZGJXTf3SVhKee5jgwvmkVyqhTaknGaxewYDb8mvpS3",
  "key5": "4mTaWHESrrR4vSgsE7oDxrxn1fsZuxyoNBK1o7uCd6d1b9hchwNmPNRNtbZhjfngXu74HSvqa9feB5u854338wtz",
  "key6": "54xTA2gr9TSoGxVSMFzUYAw1gFG4h8rHPjLPRbNxajYvktBEQ71APnXJacSNoyWkNXE9SMHh6SaBAM3hGJ5MCJRw",
  "key7": "3GUAPo1S5thxRWkqg8Punmywmy94izvRQdkB7iNAh39PX1r29ox5BDRHvqCnvqWacGqPiuZjBwnvP7K5Qtj1rjri",
  "key8": "27SzzGuQGhTQHNGf3bkP5uGvnHE8BiXRQqJRvdNCbhBbJWpuiKJgfowktJtLdzFpirXjEHjMwJPe2aPT71ZC2aaE",
  "key9": "657FPNuTx3PKQSrn8MXeGjmL45WyuuAMZuENJJfynHcYuJ1xPaKz8L6FwrNzdwVZZtao7R6Lq91aMdAjct7STgef",
  "key10": "4tQoLD1AWZBHRHF4rncqa78y6K6L2DSBn8A3cEXzxd5qN14yYhDnQtvEuJgEQuHnjhqVisqifZVKNVt24A2oDQTQ",
  "key11": "VRiRUknBruaQDfMco6SJWcM1BTnvGeqjxH23ss9KrYrpQRgxi7uYmkwHT1YitJArCEexAZw7USd5fXvjkM1ewLn",
  "key12": "53w9D213Y8M92Ekknw28rkZbnfUjrCjgZNEsCypJdfbDoVHgFnyGyymjeyGTmEZF7Y69mFwaJR4CfdnqzceB93sN",
  "key13": "depdFR6GrZavJtuVze2ef7ZmxeSYA7raCRRrJ5cagbxadLi5ZPqTufpPdiqysSja7isGTM1VG4L2MSuDbfftuR3",
  "key14": "4xFhBtcNhTJhrcmM2tSHHjberehjf3UX6QZx9zXRoo9G8R2jmLAFXYFenxo2CP3ZWK1ZcuAU4QWgTmmXPXvhYaBZ",
  "key15": "2Vy1hwkYW1ZoY2yTKEpzhVKBFNHzDFevpvtyxKfWyjgnGyYZ4M8HCPZuR8UPaDCXzRcq9vZ6vSrUMhzvPD3wmHbP",
  "key16": "4cXektVMCJsd4tNaTtP3XgmEVwbuBi1C3TJSZ8WgHxR1YrpFPqsnsrUckYf9EJVqnG1hFSdRW5C8r5NQnYKgeBBx",
  "key17": "2c6NBSNUdm7qPsrARt2mLL7brpwps6WWi86y1z3JSjEcFN9HFaz1tQoSDAX7T6yNNMjp31qGXPuamcBsUwLRmGhU",
  "key18": "34A9u4ZSMSzRKpzcM86mbv8ByY7k1vTnczhdSNhoknhyuhnC7BQzNzJw4L9KktajtAt9aHqsn3sp9S5xTyZVfDpw",
  "key19": "3EyAWmTaU8wMa1p11WdE5ycCiyJaWEkKrGAFcqZC54vNdQWvowerpwro3tmfwHwzLdd712mu5Wv7ZXFbyndGvb9k",
  "key20": "3YswnYtEAwt656me9GGheB2ew3TuGBhYH7rkBC1mMhXerMukZBKeTXLCCjpL8PcWCpGNUJgfxW8pxKXZKZrwYtyn",
  "key21": "2YttQfUJD2gUMPv9ToCoJupSdQ9yibEpbFR5Jm8BAca1apCxGCPdPGt9i8AXXxn6rCHJViw58HKr3u1FyfFqGj7b",
  "key22": "3FhWHQjcGsk5mtsXHF3VGBmRZ6YrHTQyCoeDxqAWY3Btfkn3nRfBNJERChyZyzBo7PMpmizbmPPsSSSfKw3tBHRR",
  "key23": "2W4KW18oKzee4ivnkZJGUwH5W92Ft8ZaoYRJmPJd4GYNgtxs9aYtjEgmJjUzmNdmbdQCQmxp5aTGAqqWAiCijLVr",
  "key24": "3nEqeMUwQH6dPbuaEieBXiWuCD7iEoggSgFME5QtUJrEPP2iQBAVmNkTyAor414teNUQTBqqSZSjk7MqAZ8QVLND",
  "key25": "4URMCq5TC5gWGN4T8dxhxM6oc6GxMtT6Ju45n1Rcwc2xoG23UUF8xpd5J3f7U4guuYJV6asuZU6TDeVkyYFHuSQM",
  "key26": "2Va2rTqQVBaUDjxB4Jcu4x8SmuVtWJVBdUuxqzgyeYFTw7eHg1h5pHGEyy8RdeoV92FRDEPKDjz9scsGrPWuDEn2",
  "key27": "5tCRrcSgbqLgVbo5B1uoX1JutEPqWfsxaRUZcveKSX2ifVJc8s7yr3D3AAEcQVE1fNq9SDprwUourvXeKMf1BK8T",
  "key28": "4EgGv4fThjx4sP1XsQ7yDD1ULwAHPnZcLM82gozBVaCE6zQy8AN5pXazFQtiwe5h9hAjoGt696GiTaUYxjdZdjqR",
  "key29": "413vDXPjiTonnmKuTwpoCTqNi7FvEDSKPH5heUDK7Xr1khAvqvueLVLAZpX5t3NjnzJcFTj4XU4ExYUCR2QbwpXC",
  "key30": "3Q36q3kaZC4fbqT129CP6JsCmuEEVBjDWosvVv1aCkkXjv45Lo8avF8q2URmizeuqfhXLAqqF2ceCCJsnV6bkbcF",
  "key31": "2CbV1nhcCPGqPmSe9TQFLSpqiUgZGmgyoJXn8XCsvs8euJubm47Mjn1FiJB1FfM5LD3V7FxvGRVZV6NBq8yHX5ch",
  "key32": "1kJdUijqsJs2GxfeNMsJbPfF9NWybqerKpbgqQcAXko9WGxjuxSBuxMpsgSoFmLqUWX6159jHYfh3hGJmW8vGjC",
  "key33": "vKTJoqMmJhGi9fumns61ajdDyiA38sYVzqLwtbnMxVK6CAXJmFaeWA4fLa5G4gTZj1XyEbmBosbrMnChrdoBwFU",
  "key34": "H4Hc9t177PacsL2zU8EAFyvrD3ATFJaEzDnei9ZG1DSMQdpKk6tBzcvEw99kcsVcn3PxgEXzr7cS7tNzsc4uhT7"
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
