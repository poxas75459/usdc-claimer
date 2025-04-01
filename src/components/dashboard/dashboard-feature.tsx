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
    "7tuVTKgmxfgibJzJmptHrjJp3revwQJMp1SjVnzzarcXKKmPL7brEsqUEKnDtoYW3sRmUwKddHgZ5tDcqhtZZ1r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ngPD1h8mPcyv4528pLnGfLuQKhZ9WmppCdL9gFXWY1YN7fG6ogzkpj6PZ6ptcayvChZNWNqe4Ry6qThwrVQZvZ8",
  "key1": "bCQi6LUj3Y9L1za5Bq13x5xewGn8VcJZSoVK8Ebc8raHekJNj14RJixkivkfayCxqqM4YJKkKDSvmaTU1RrvSMh",
  "key2": "5j7vYQ67GduwSdD389qoz75dmAABGH6oLgeeYo5P45xhmTVdPfiwgfQ8XgPeygjTAEUY5HdD7SV2Rf2i6aJFZeSX",
  "key3": "2mXr2MhYZWWjVja468QoC8m4wt7L64yKT5GJWBqNzjMiMKWnEYZ2W5HVuqGQ7TMFyTAvuhHCZvaT6LWxgTYbrhRq",
  "key4": "4WturZ6iHQqFFrpnHuuhHyaNJyMzspZ9uknUdEswKGmYKe7rPDM8PitmiuRMfXGXAo1pBwfwQ1tHz5a5gSAJanbm",
  "key5": "mJpsj8CtBm2azXGsKfJMX8FwczxfbzGq9W9SFX6MDSTYNXrbcq851spkCTYnj8uDoy1fAm4obhzGdbHupiQwauh",
  "key6": "4o8XmPmmkYizuGg1C9kevYYsk6rbDwCncFNpw5AC2FkK9A6Bx4N37GyTaf4BLbyCQ4XR3PorAJZAaU3HFFUd9k9u",
  "key7": "s8RnD7nj5A2ZdYQWjvZH8LcQEGskU8P3Co5Z6hQ5zJYscVTerEajirsLYPwRYvEHGsBHPsp3sEGy4yViaXRAvdx",
  "key8": "5NseFr4JHpdCYkH5DjpgNENk4YutQQJihHieVA8ZgcNEeBGDFsAyJyrmUjGUGqmdGkreuGEi9dGMXTCJVjpm1ar6",
  "key9": "62fq7XKvxVCCvYXU5mFCkmp82ipCE1FYDwi2LrNDka5kF5w1CyFSM45UADWidSmyztgrVKQ71e8Lwtundn4Ydt66",
  "key10": "3QrkkB9AKj8GZJuktenTumPAkKTkKDnt11SHZ8YhwMHSMCRPdAhVUqNt9cHgjkErdbK9SnpwAhTZkdwVVWExsBw6",
  "key11": "32tdVD3zGnxzbN37bmW4LyQZKk1Lndo5KS3t4dcAVc2Yt8YGBXGoqRmb9N9dgcM7BxHWYa9UJHkoXnNqhnmjMMhj",
  "key12": "2nU2jVPe5twpsLqqx7wfvRJvTEigpCREPGVDEYP2ipgSJcv8tDJ1xfJkrQH5BVhc6Mbew9ozXiQrJb2zfPAXSsQM",
  "key13": "42BSrUpcwExBBS9thFp14z1UAXRx57x16JC1fiZxLofzaKeeifDx4jhD5UKhg9mLAbddeUVTzQZVsYC69d8upjVY",
  "key14": "5a5t4FSZ9EiRzCJoJ2Qf4qJbtQLw6y26mHww1JeBt5Kg21hVwt6aTgY9czPSvvYJwvLbbBeYFnSmbnghfWxLg3ux",
  "key15": "4k3Kze1ujoUWE7xYoW7yYFyiqdyYqci3FR9Jahi2R1LwRyF7VBXBErkY9W2EFsCi1HJPGd9F2GLXpsM2jf19pp54",
  "key16": "4wQJTMhVmnAuTkepj53cUyhYcdYgtw7yAXxD9GFZWDUBQ96RbH6PfCUqw1mncgMVULdQXARVQi2z2zh9KFGUVexR",
  "key17": "38GCF5fgYXrhG7ijFYGGC5nS326U1CjfA4Zo9RY7jSMgFJ6n4R72HTrZLyz5vzy3oJ5gYcftmdWnDjaLBWf9X7vP",
  "key18": "hsS94GJ6KcFtPukkpbLD7syQgQCgLmT8AcXrQfLUmMZ5LV9M9yFbS8c9g3aWLF9Q8yq11trYDMVippXLTajc1QA",
  "key19": "4D1Fh2fmqT5Hv6EJsvfoHRNEjhuHKhGKdFBTN3HdPfMtKQXhu7WC4NKzkfYvoeQ8w7LJXq9FWpdzmbQpJR2tQynU",
  "key20": "kP6FbmnmA3iNthcwDZT68txxCodxZeJ5X23XRcfGNJ9vZDuUeMAWGdHGmrpeq3412WdkyJ1QLPXXRcrqEDQ46sv",
  "key21": "54QXunGL382UWHiLMKBYZeLfGwnnhFL1ZyGZc1Mn9PT8UiBzMYJqvHV8LnTw4wenCE6PXsBJ5p4UYZA8Lm6UKbgW",
  "key22": "oYawEhDkNBsRo74A2Ps3tsRte9w4PL3v3TzgCumSbCAX6R6ebEELQaR4VZCJSuatBnr4p4NLaf2NrsKgXuDx5fN",
  "key23": "3odnVDGBPWVv6d2s8TgZNHyqD2SSfA5ij5kUF2c9GUfiv1fCCJvqcnbSQ472xqDqDGnNATgvxVmbFfVFDQ2v7km8",
  "key24": "ob1GGLm4Hqf7Ko3ibwfpuTn2riu72htQ6CUMknnAV7RLZsJL2r8rrxV8ofmZsQcfSnLSdzGsq3NSpYCsqG7Nf8t",
  "key25": "5CfQPtaekiSLMLu3uyNtD3SLjaWNVaVkKpUPdomqRw28RaYy8pMeN1eyqgq8R18xpfArdpyPApjMSD2JvCojSES4",
  "key26": "2F6V8eVa5xcqYJf9h6ZE2yKkFuH6Shhc1nEXv7z94GBT2ij3ryrSRngcUGnRNWZpM26qBbTkVamUxrQ9wVJTQExW",
  "key27": "654uHvVAK7ApM3e2yPbvX5GjBegMWTCgXQYVj4wJjtLJAAf2nvATuZqcwaAdoziGfCZs5nBjWuLBDQtZRXj7kmFJ",
  "key28": "5rcvzuawLdREq9awUmsU2BH9dtRCyu1wDjwZByhjKGqdwwi9MgW4zhoaLbMVG6B63G4Et7wBXSn5jrFhU4BCQ3v5",
  "key29": "3JXBA1Egv6AiiWFHXGHMF415a1WvF5TSus67uCFtdteKMXcfdLFer6MekhSZfmHK5X4YTK7gYE7uhRTdrqqXus4b",
  "key30": "uXtUXbw4yAmdK3vZW8nQQNHB5ByZ51JQwf72eDyEPChv83u6KSDXmGU97BRjqou5sNeizga4m29aiWPKfZ4cziq",
  "key31": "3MARvA628R6Xr9iuWwZsobMkj99yyxqgABEMqFnKZW8WDNH5S4gzHfmJ6VPx8fGAoouvsVZga34n2UxBDoZtb4rq",
  "key32": "2Kr22iz2DHsGiMxRfoAqkfvV6euRpbzcfbuu9V3xNUmDnwc52mVEVMr8fHa5JKk2DCQV3iVvZTUzwqPusFA9swdX",
  "key33": "3a79tJQmgtf8ZhqCFCberEKsyy8qVKaAWQVBv1a86Dx2qh4dm6ombHC8YZXjf4e6NSnwTb5QVBCiDBLL9Cufbgbx",
  "key34": "5nZnF3hJT164cvc5we6KJvksrMETuP62Cs2EoWDc1VG9rGz2mS6soVFyYpCwp2KXihcSYLNBRkBtFTqWy7jq51fU",
  "key35": "MCTZ1m4GKmE7we4R2dERHW24SY7xsLBQHecLerWSdPdPmbrBMMKeE2huBrLJjqJ1q16f9HRpz1KbxVj1foZDCQR",
  "key36": "2aZh3pGccR2shjqjxjfnCPYHFbvFmFkeiNt6KBsGfKXWoDeRCx1oiokYTAjJwuS6WtnM5RAMCMsdmDaYJu3qEbPa",
  "key37": "2UkS8KgngxRdBcFRwhSwGy4wGCtG9fn4SZoprQ6Bqrpd12EJegu5JuuwehYBbd4SxbfYAQVZE6pVvKXtKgKxsREN",
  "key38": "3EEaUw6toz6UBT5N6o5so8wmr31HuhfLMKC6H7K9R3rsyuRq2pHsf1Pz7EnRZtvQf6aZwoghZDL148h1G6k7u4un",
  "key39": "3aC1PSgSkXvGnsgAFYgu4b3FoewtTfrY4B15JKc3ndpZoPk1CiewGg1yFggmcgnPecgdQwMSuwxbEg1v6BaZRUuf",
  "key40": "zpe8Aqb64WpTPVW73qm8UdZ7zwB9gjqqGWoHrJWZhu2KMA9gLZhMvTHbvDMTJrZaY1mWj82ZUFU9rWm5QRzwhZT",
  "key41": "51TRgYMhxYkPS41fsvBAUJ8EZnintEzJFavUTXokS1iqE87uFUSSKaxs1CEPzqULgdhivCEvSxi6p9F2zkMBenWB",
  "key42": "32SPJATHWwMAyv6e1QGwyYNZyWNvv44BgKurpD6QHHPEAPhY7dQpR6iXMVhKbMBoAZ4x1ys5Fg11rGhWr4gL2vLr",
  "key43": "3GRMsLc15LLybmyt9cFDE62sXRoeFxiSaT1ZUZznTem312joiYGcocRtZuQXBZmfEpdRMjwrJkdck89oLutzV7fZ",
  "key44": "3PiCYeod8es38DwENxsF2CHj6m7J4MZ3gscDbURY7Rkb7ATMpmhiWiXvZYTwX29R3PF7vWL3NhQ5mqsDHHJNR7Q6",
  "key45": "44uWTqDDXRoCgtocQY9Qw7wb2qLabWKKDGWFtdViT4R4X2a9PMhUARKVUqriYS4vjRSe5o35bHE6zCjDnb8fVEuC",
  "key46": "1eqd7RT3TMMMKmzhbLkB1LVxmGhKMxAEmSaaSKQZooaCMnc4d9CVej5G2WiuLpPYfssT3N7CdTMD8puMNiGWdaT",
  "key47": "2BSke2gvJXg8zkThFrh6Bv6gFtUaUwePjMRYkFZ5D5tFzBCNVnc4WNzKTKjsX2pA4iCFa1oEjAyYhF1AN6uyxG6C"
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
