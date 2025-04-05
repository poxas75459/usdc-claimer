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
    "3SG85WRVN39QhM3NnrStwQJvVgCGYKWEjFFvowwmWWohVHhnFaqWhjxVd5sApyWf6u6giCVuRTfMxqqgySC1TtKU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GyyXNmfwnnSiwacqfFJEcFnd5dPpz6YE8hH1dNmnFZzWSnXMjVYfW3H7o6777SNeD3oWVvdKBjFfztVpgrLpc1k",
  "key1": "pr6xL1ncFgUzZqgR28dEtrt8qmztPrvUJ79e86YtecLiH9mrjQWqwnJmaSytVHKmCmsLygNVWJ3rgsPKKWuU3A7",
  "key2": "63prd3AsdAp1Bb6b1Ccxq3TPzVwgVQriJR7TgvTaSKC2ZAg3p9TQgELkTa21vLoy1cC64zNdmwEHYSSs1urKq6EX",
  "key3": "5eBrdarextA2yWunyDiMPKSMp4EXNjrsD8P5vPpyKCBQmBG8FEW6CZUTkizBUeq8cLNdPx8Mi6RcAjJQxcH8zfiS",
  "key4": "2KYjCGNUmTQhmK9cicHqPWEshSyiVJ4YWXTpzAACJ9E79rnYx1vBMJubipjynmXGVcxPrnBo99S5rJiF9pD1CKdP",
  "key5": "5NNNfTVyn9mZc9BWbkwy14XK1vbkMWpgGcT1QZXxGE5SNdCn9jjcuEvJfPHKbPYUsfr9ewP1M4oY2XuAfrTdB3Sb",
  "key6": "5RkAMJzwMmoUTWD8hHPfoEX8tEkT3ZjyrnuW4K2mGuUmtpaDSDn2YobnqkGJgNe36eGZaRefo5sK6NkgtKFWu1xe",
  "key7": "2f1M7PAfV7KKHimRj3cGC6YQqYNZWQpjM1qcm9vjG4bCPNzSJ9WsZeVNqkMzAGSiHfEQdhbPPREjLaUoHLAEegq8",
  "key8": "29LW7VnQZkcngFDo4G2ZjhDdqcHnEaYCE2geuWhB7CHSyUFo5k7dHYmsE4mVhzxUtXvQGAkvbbu6EtSvpFnpqtMm",
  "key9": "kbfsh28QhMr8xJpPHADTZXQXZjYfAPQJCcHKxajiemDUCQfJ6e7jkSngTCBrBQnALzUHGDdpqgeKYQCXcjUViSJ",
  "key10": "2ScHWdreDHEr9gaGn3Pps89o862bNYD1sCRWaZcCEDNeskgntfrnHBpPGwNuPawJJFB3L1heD9LCdYkeHypBV7cf",
  "key11": "61naUCV7PpzRXoMn7k2h4Wv6wPLRnLHFfaZFQQmNSfsRaXr2ww9S1idzArY6ehoHNKnmwpzBeJaDF84cDpt3zRmX",
  "key12": "4KWhSrMJayXLh8txh2qfzLNUexJ6qnKTgs5Fy6mSNVv4tXsjCAQLAkgW81UXdosp8gAJVDpL13nejhuph5yjSYTF",
  "key13": "4BJifvqUdaXE2ue83HdACJkwgfLZF9djazg4kHHAufZYweaxrqNZ5SLjS2J6baZywBL6bqVVLvGY4r8QQjkJivXV",
  "key14": "yuSahA7HtyLPitwdGM776MNSrVXxPbQvHnN1xA6TQzAc3bJpvA6yyQirDdBssPHV2EchRPVQCfA8aoBDmXuqUhr",
  "key15": "aaRWgSStVFsEbdSuExL6SEfQcabtM24gQwXCy3ySy3LJo5dX4E72yyGGtPmMB6tfzEDmv13GRPAjtimgQdrfKjW",
  "key16": "2UY9U4rZS1gTCMWua1uJNPSRnitk1LAQXVpZw8kdRFVXE1BwnouoKcQRTtXH6m2EttkPxk6Erba9NjJFqUs464E3",
  "key17": "j1fFiDuo6ribdZNJ9aHvm2pkn3Bs63JXecgpMrWqxcSjXKUowRur9HQgJpoCPbNANCo2eM19LhHYj9RHiQqMyMB",
  "key18": "XmpZerCY3Q9pDLppL1dpXPamKWtPds8R9XtuMWPCTjiki8Q2hMFR5dsawusCLEYtSDJkRgosXkkX9Gdx3ZpW8wa",
  "key19": "5V7kooC78kUPKiKEUKfi6166oUTW4FmmqmRDHdE9rQq9imaTgMEiMu6ehJCuRVvER7EzsGoH3xXwvqAVnFvGQm6R",
  "key20": "LUC3mvq6Hx4CBPJEpwswMtc3j7yNBCvQg1JyWVYRvevByHLvG9S8VyBgkW4vEYsGUzScj4qy93nQL2JhPCYEe2D",
  "key21": "4S8gYZbXBZ8MsNpqX5nUczKvCb1WrmWKaT7dMdbNcFqe7LKGTfjxXsVZnvCCzHiFDLvgc5uwTCtZ1Esp1Vic7tUZ",
  "key22": "3hosExsQEwk5YekQBBFHj1r9aYgeECCYF85PLPuC64gRMKWg5P7RXiejpfhMiYosbJ3ZphgNKdSksJ8cb19n2jWu",
  "key23": "3vkxmjCC9A3uLVcbQMpLSZ6xWshsHDCddwpN1LRtgvGi4WPZZoHtcbJ8zNXycp1MqHWzYei5KMHf4ZKer2eXAotP",
  "key24": "2CAe4mBGgcGG5N2pyaYPcwa74exndvGuGxs3Pq1FfcaTVACC4ETvnPNYnSswaSAhiHLH412xZ1AKMufo2WL3AR4w",
  "key25": "3hLL4MccmwjwkCk6hHfuXUY3n77m1R6cfqd7cCZPFJEPwVZAUMp72EWUsrA26EUPbhmjWEfEvV8HwNCeqXi1hvtE",
  "key26": "BwDV7FDTmVyAiaiMBsy5MJVa5Ly2rDVEKkdzxZnWWwkhfBLXBJrDKgNNme7fGA55FbhaexT3KZJHgQ2qY3dquyw",
  "key27": "4NpP8H4rqeECy9bbbUcscD85nie5ffzKmyMztNHdaLnwFT3iEU2qVKcqAFS6FaNH4ou7wXUe8QssCs6PpmBa5y49",
  "key28": "4kYX4224bMy3D3ne4xcKVjVnjHEphyf7egJfsJmAMkxmJwkiYpnaZFw1kz5rhJSLaEsB1Q6thqx73BNp7xcyuR26",
  "key29": "4kjEjbruxEJjfo2SPSYRV1JsT8XXYbK6YyoyzG51RJnmwefeQRMDduxSkABDhP2xmY6RubkpFEbMB2tPV1TCqUBf",
  "key30": "31wqua3fnF5mGQDnAYQsc69QAWfXEtnLZq6SyCJMXo3a8Cn8G5msGTPHBsWMbs6RvvKyGgis7hpynySkqQzQrz9h",
  "key31": "5F2voh61Gkt3EojX2fMKVkfrDR3HwMWUs9jyiXpuJZikb6Xdbd3nDBVyBZyavv3VQ8MeX9TMjQ68u9PN6RCxXcB9",
  "key32": "411SEMdDJbrA4EPrwfUDcs8z18aeSfwBapPggCpU8Ji6WekrrvHG9giLyFFwGpq66Y9bjYrvxd9AgeSRHFNiAz4E",
  "key33": "3DHPhchY6zDLEHJ22Tu4pFND8nEwBcED7i9UUYUmGMk5peLGXBSbFhtgzTpPqvqY9ubFwpFwh6QAzzVd5eteQV8U",
  "key34": "4sQPvH3W7UCRZEmRBnMEZvh6UYhZ13AL2EmUt5uSmxzA39fJgECUF6XN7Bc3dA15QYyzrEYCr1DCZXeg4fH8ss4N",
  "key35": "UTLFpXMXEeWym8LGE9jguHZHsmRKn9nsgi37A1aP2LSimj8VPhxes6fwkjn46vajAJbjF4oix3o2CU3VEcioFRf",
  "key36": "315bWK1JvRJUKSueNpCmiu5vcmDQQBSMJFvjGJGqheoRYg6FZyk4QHrzADHSFDz3fp8Qh2oo9tskn6QEnVrnkeHr",
  "key37": "2EFdRZ4Vs9gqLYHG638LjNNWYSsyacV4ofjq1QLxHLSdvvZWcSvMZBsmmiAu1WL2hic1ayXBqJCW4mhQMqafahWC",
  "key38": "37ydSrPmhwHdoadAWPbnpHWJg65KC3G31QMv5Nwe7AyXtGPiuXZBRBPUiBdBFgdFze6im6e9v2eA6xBJ85y9K14L",
  "key39": "4FDY4bKCgA8zwZSrkdFQoh43imr3UgaqmyrLmYFGGvJoxFDNTe3AcSrGTYQ9NLjfobSqE6xH8FxmhYJUifehme8V",
  "key40": "2V61DJVs8aAjMJnehi1HKg5Qv6XKQPmDVA19M9djMVPgycBW6ESK7HzYc6KCa5qErtxmcGb1XqkVxSpRvULtDdHm",
  "key41": "2RhwymDJBwfnDUPwQzm1NEQboMa6B6fZvK2U1zYfuEdFNRQtNWtoRf8EUMY1hFhw6WmVV46nKiGV3RUD9ZK8VujJ",
  "key42": "2WDdgtayeAVd3GSh6ye6h1gd7Lp31si92K2awa4AKY4kAispNH3xn92mtb3uCsGpuRdtTbgaFPsXo7kU46NdqQXo",
  "key43": "4E4henaFdn5gMGqyfYofnoxVVtcFdsVHz4aEGsfiDcYVFLpT8EyENrQLYHyrDKPawVTdqngmJEex31KkpqwQFwkF",
  "key44": "2uSXCYiYn2wmihhCjXKnau2q5F9ipaDhXwVy5sP9XHD7zRbHMNXb4u8QYsEwy8mk7gLnTFdTeUWjNAn2XNCfioob",
  "key45": "3BdeUTaq4qAGRNLC1cxL3TZS3irJoEB81SiHJmH3weAVhinPHhsNzvdwvi4CSTEfjpemWgRejuSrWqiTAGGr6CUw",
  "key46": "azT5JJYf1n2i1o6fe9yb46kbTLXnCmpz4mT424MkAxZAG54FoTNeZvtXX1Xes18pQLTcak974jhdWdV7MAzRTay"
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
