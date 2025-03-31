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
    "2VhrMnAMo8D6AKSFBwveAowy7588mPBwFgpPz7bEnQ4b4HtGTW4dKpAdcFhAnVjcyVqJexoc5PFR6bmVjJt5Pf34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KGCxvSsUDimL14ZbhkGyBeHTaB9u4zAB1vpLqYqkdRUWMfT6CDxjdwvb2E5bcQmwFa6ZMM2f2U3XFvTEHXJbtXB",
  "key1": "wZFEfwhc3ENh1oJAGvdRwkmcpmHAUkBCeBnzvkcpgJcns77UkHy9VXHFVgRz4TWNBxvXLCdTu5JrVQqh272ZSPH",
  "key2": "3kxkRMGP4p3CDUJALMQpqkmfWR2WRuCTaFFVg8p9vCMXyvEPscknp7M5sNihKiSVqSZNz3fWnzaCj83krrgRLCrX",
  "key3": "4xRipAYZYfStMUWbzMHuccSge1Z6RAHgt1Vws71i7nS1YMbd1GgMTKLmUmj8Nei62nHyMuZrbP91bUSrm627iLyT",
  "key4": "2Z7rfM1j61Gv8RrbMim1zy8N1YffFo8gnsRzVp8pP6rbLMgaBrZfibM4YEGqwtoDE1p8ptzy9RG7iVyKcEicoMkL",
  "key5": "5CHsaQ6TsPM9Ypd9mtXbPFj2kL5cxsSzQgz6akebKYsGAcuBkp9Be1D9RyNsQL4h6jSyrfbPLtEWd9CBjfyAVybw",
  "key6": "5JvrkvMtYnQ9Gaf1UBBXmBqJj8Xj7UjtiS88ymNzgq3nEzAQShSe4FhqQhcSJuqfpfBCJ8uX9bV7GgT7971bPGCJ",
  "key7": "3niu5QcCkh4uQAdbiEhiSKfdCrvyqXeK5gxCVYQKTKCPk1YQjE9Vvp4yJfrVewEnTsUsM3mq46z2YukWMkRZNeBh",
  "key8": "4NMKiSRkh28y4tFHHUPw7GNDF4meCvga8UhKcdjvDPBHzxc7Gr3x4AnjH91X7vJSJoQMHvRVvqeVnSzfGniU2WD",
  "key9": "W1qohzubJtN6KgyDtivcvCTpPxnXjyJMwWWsxGeq7AhfdYTiVaNvJZ5bGbNdE3UW4W2r64tpHY2hDTeFpQJxSUs",
  "key10": "5nuP7D2LdwhzXjkoaSXk5nL1b3GsFnuDcvbAEueYLgoP3vepv1QGUig2Y8YQpsv6ERvTxcjy99NWhFRkrmtMdBxM",
  "key11": "2Gz5SnvPmeoDabtowKjeimkedKdKhzU4dcjxdivmx2hWPYDtQWpB65JKkcMy88zxyFuBV5nWpeLZgSKEWnsjcGoq",
  "key12": "4J3LjEV7Vk6EFZ5PPaUGo8HMffRSed2KxK9tWcns4x2nYufQGiizBEY3n6knTN56zBgc5ihmCDHbyn4nxFDV4xoM",
  "key13": "4Yxrv1zGK5s3x2st6vkK9gjV8j78f9azTiCKYbiebEqUCpELVUuZpgSU3M3bGtZQQPJXENQvW2ZU47SFpVj2u8GM",
  "key14": "4hnfvWWaTuceX85tN2Qn3cwJzSoJDCih41VswDLQs34mrxA1PMHjACD9r3ZiVz5CJ19qKdf11Nf42YCS5B3LWFZ5",
  "key15": "2kfw2opJqsQnxHjcjLSzw4fr7g68ra1sQM6sBALXE4W2MbWNkJDB2AdiwkgAFT8VPwbPfwXhu1X7uPYBNjQC3XLt",
  "key16": "dQha3eCDZufBcggXCTZ6t1CzzhzpzBanQTn76j7K4GE2WQrHU4WtwPFtGkm6Y2GMbTU2PzfvZysdDL1P5qtSena",
  "key17": "2SLpH71E3xg3fJqyDy2bWKGoBd5Sek8HRibn8cUVSfwyhUXQco1ez92zfuLsMhhsJHCwBmRUng22J8Zg81bKiYKD",
  "key18": "G57ixHw7TmsZKc6SPgxeh3eSJzHVLa4tR4qFUZW4Qp9qSC4VNGHiXWeHVek7KJJkhB7hg5xZSMeFnwZRuNnHj1x",
  "key19": "2apD6NjP7CxChuxHxoR7fdjSeodCZE9LVz2bwm1HcYL542WXWS1A4xdPS68ueAKvLz6Ku5s81ZevSwj36WNeptsf",
  "key20": "3EjqyX1pgJwWVZziyy9o9cv7kyqbUdZWjjuGtHZ4eXgBFM6LJMG9RMwxVB5vg43asTvYQbdfR2uen4XAF53555bN",
  "key21": "2RkEmTXCbFN2Hhrw4vQiKNMWmQcHEQyKW84iyUaqmFavbAvKJmcSUDH7hxQ8hhzryULfzBw7Zp1Z9zmAxjYbBiYp",
  "key22": "wQJ1ngJpqkea1PD9ZWSGJBcoGYbDTRUsfBnC87VxnHU1K3jJFvqiryuzx1hvCUSZBQ5tYj8mrC8mEKGykaRxebi",
  "key23": "3pVaGsZ7tFL9vwscJ8oSCF1SiMfc6LMAZkmEqmzYHv6JFN7NrZ7Nxxyzrb6578KeAJfftwVWX8QWNGaJdpB7uTAE",
  "key24": "tFFj6M5Ac22D5VdyhCLmKEjJjwUAK5Xd1ecLkbE7D1jsRoe8qsrHLS6NKpKEfKjq6qgMLDBPcDCZ6Tvf4yT13aA",
  "key25": "3V8dQcTbqCHUttZX4V3dwzSrAAQn11VvucAfdgmcFr8toDQsTaQRX4Jf1sAcoBbBKgss1z1AB1A33vnYpHAwesH5",
  "key26": "3iZqXD77spPNpzQYjVDMk9NRv85QPnd3U21CDeybZ7FXMWf7UA7JJ8H5vWrTUzdB9bjfHvjzBmKFT81v3GPkN4Jj",
  "key27": "5s4h6a4ysKGiuBvxz3myeAXcAKECK8pJYMTVPsf3ZACZcU6hdckF41CwJ7MtzsvTU4vFMgXxS8q64avLn4zEYRoC",
  "key28": "46LdN1TKNFrFHCDzqxEfZMy4gpTudQTyWkwHtoa1YsQ9kPMC5cQF9xevZ8WxtRPqpFtDwf3QYtkUA5QinKSeAs5B",
  "key29": "2aqY8rPjJfP2mV3Ct7i4SVrfLZM2nos9BHiEmmhQWuir7tfB76eUaRVrVX7PHeanLhDi1mm7y2pAaGtHP5GR9E3d",
  "key30": "3Lyv4HCjsmd8ovB2ynhstUVcZEDdeq2P64F48CiZwgPsZ7oRgUvMrmng68WQWnXXhN7vcqoFBx2JBY6yaYenJuVi",
  "key31": "CstsXaE1pFhTqm3BUSH6iJb6LWvvNWCxE3nfNyPKNz7ZbCuZFRebCFzUyUpn1gD9vm4ZQqav7Fs534d18wC7bNK",
  "key32": "5vLC3jtqGiwESHvzsMnS1aGx7JyacMmRAFPbJ2mLBEY4Fzn6JpiLWRztZD5wAbNZRuf3HUMrseGBJLFX2uT6f452",
  "key33": "4VYC1h356hJgXrpf9eKrQ7oFk1goZ2msFE6frFoDu4Y5EPy8jBF3n2Cyox4vZcAT8sztdGGcVhQFVuEUEYkQ9W3A",
  "key34": "2Sf9BeBQyL5RdRP1PSxULv34ZwECirVp4GMmWjK3wzK98kVbR26MvZyhiePkBHkxHMAeKgPxNqT6dL9TLhotYtzW",
  "key35": "5diV1kJ4L8EZGSL8qXGuGpidB1kayhrJj74ik5gdhhUjBvyP5B8E3xjx9GXhR12W45TphNHDSisAuLc38gsFRVJi",
  "key36": "5JrSHxYATMRN8iAQjdPGNn7CQuNLuuDryHqvggucYkwq4HvnwAjFd1mTu3ySWXYjUXg1QYJ274BBk8YZyvMQztmx",
  "key37": "2nL6iSniAZQNGZHmGsR9pCMg3BZFKynjNrpHuvCmLmrZeNLSsLiZqCuG28TG73YKJKmrFLKghdcyfPmoPgEfknXp",
  "key38": "3NV5MMpjBTssdyxmEuZYqnyAYMmcsP7MtM4XW6Wwrnoym5SSgmFZWxZJh9nLhM81eGXJRE6J6kSZz2FNf3cKHNbM",
  "key39": "3io7qVJGRKcBKP843x15Xcr7E7mkUBwFnLiYdRW6PjSPWz9EYt8AdnGZG8tAHZ5neuGocx2RNNgZgixYtsDfxEmg",
  "key40": "5sXUFRDDPQSuyPtM6prbk8a4ZLMtvsn8XToPiPRhkdHPeDLAAdZqcKXRGAXGwFS77aqS9TBqb7kqiztPRFthd3yc",
  "key41": "49MGWZBKjPDPpBtMMQia1aGUotH6Qc195FjdsySRBft5tc6kTaysoYsUA8E63vH2qix9RafoRi3CMbyjuGov7FUT"
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
