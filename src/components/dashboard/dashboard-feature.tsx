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
    "2hmA97ujjAxJmobSaSccFygJVKf1hEQ2B9icAqroTLM6HyDpwXxMjcTvrQrPNEQTfinwPAbsTeSANPF6L9Vi64Z8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RyHUNchumcjPGerufkhDf3oYg883Mnea73ew4p5HKKmvheA6YsSCPxFxwqbUPJKGSpGqybXes7tiumM6P753rnc",
  "key1": "4exQ7JCo78eRgVymg9YNNLTGhdQY3nr3LteBdLRbT76w4gtG1G3sbvenPxv2MxYeKUy6zvTkBQuminm5WJmWcWj5",
  "key2": "3sLERr62rra8fSRxxyuVhcRbcj2KfXwsjTGSqVbVXF7neuVbtVVCHVLXoXnskvZnGC6a5sgrBeYqPsJKH4zdwnp1",
  "key3": "2kr5gouXXgxiABdEYGrWRC7RpE3tnRTvy1q8iknW6UvTbFhvxQsqcUUgNmqm6wntqA8Up3GH3ro47UeiAVKxxZNG",
  "key4": "3pknwoRowmexQDenBjS67xYnoEAJPWomdaqGaqX1CYZ7nGRrvwVtA3yAV72tkHsorCRpGf8CNCG74bCcHNqizcL8",
  "key5": "2Nm54FPZeaFn469S1dtSDDv95DHBPK8DTemXJPRWm3KKRAtzgqRD3PoXephREBQ8ZAY7ZGoiLUCG25mJVznaz2zK",
  "key6": "4JzYLUpJ33a2AhPwKUtuCgruNqp4HcbDLAyMSCyxqjs3MhWRJzXY4cuddWRzF8a7Td1sq66aZvKpCUAoFgCqjjCd",
  "key7": "5vY8m9pGnHV2DhNBaTi3w7BsUS1RrikewQrUPQJsek9NVfXudUXLD8NaBjQTXiP3gMd4j6mcj5gBr1DHBQXtFCpQ",
  "key8": "3E22cpNNdz6ibowsXUe85BBSZXbCELe8W8pnJTsyhBSKmd6fcS4CvSDZSZdCxmd488itcgv9Ftz6b8YMS78UNdZ5",
  "key9": "2MGZaUEVZuVfMWqvEpcVYR74S36atcDB2Ht36RqPG8E9Hrzh4oJFL4gwqBjBcZWm1NRuAUs4XCH7GbPRZAGNcscR",
  "key10": "5ea2gh8BjqzmFWrrpkezghng7fNkEZ9CAuXUuf3jWMqXTkSEwtuzokkxYhPLXAgmd3nHBxkbqUZwCecxLUWDLcsu",
  "key11": "47VF1RG6zPyUTmG8Bw2GFba2pCYf3RVqhpDyDV8rzMqLairKhKrAL1DkvFStFTnnu1v25iLqg33rzPFCLJuuuUxp",
  "key12": "41wzKKAyxafApJYedLVmmvKsJRMBBE8NDW4j1cDNraUp749K842Ez2zy8JFgifnd3Kaou1sRoCvAZ5zMDeVixAHr",
  "key13": "5Py9UBXofPu5ioZ8p5B6Rdh9do3WoJiSqpHoJqXQQyY4WR5fEnhuhDaPKxzq64VUZc75nDb9TKGz8tbd631dBBRh",
  "key14": "4zR6QnyvZ1QPJ3Dv1mGHwPNkiSmGt3FXcRKBZSNv88ivJM5G5fbny2uDVQX43NWNWjd3nApwKXib2s2ZEoTEh5sc",
  "key15": "LevvLNPELJKKjGGP7jou1XWL8AtYD97RiUjQEeMqgEMLB3qLs8THPcH6YCmoP9vzAHZRmsdSSnjBkHYXC4jY5hc",
  "key16": "3VsQkLXqYQkMvyxyDmWJHzDgNm8WJeneyt25iULqLBEfLzSWPXXpA3jJacURYNNEzjp8Qhrg53wJCb4czGheQh9g",
  "key17": "463jLZu2VTka81njkc5hT5QWwxUrWfh3Tqxs32JtbdjW2U6HwfvyLypBoBSuheVYu2Wa84eRNZuVhfoZWRji7Wbv",
  "key18": "3u6HbVyex1xgD9TWL7B5e6zLeGh6eu6e3AFYEGaG5oujbwSvTVS4LTNETG4Z5t27YvN11tSkqeJWsiRtspcnToUd",
  "key19": "H6WAPMYRLNmugswJnLJTsqowGJfG77e7kwgqnLy6mYyLjRvxve7rP4srT7cnwd1C3vu9h33SBwYWJmAvq4HaFuC",
  "key20": "5wGuFEa8JZDbCnb1Fx7pFYzxiS29UnquE53w4cPjnDyLb7doZ4nExYMKidMTY591iTrG5mv5gcdgymABqbjCy9Ny",
  "key21": "23pXXGyoWMFetjcsQEnAbUJ5gFLdost5btebZPnbLkdVLbBfJaWCoKonxJBcLjCHZyvwVGhqXNgdVCf7hUQ8K693",
  "key22": "2cicBq6NRdFpygY3G1NJHgrYEPg2RQhzHNJsXzx3RPFP3FKkeHL3o3MEraeBkr8AfTfWwyG5Wc48dMihiDrgshDk",
  "key23": "5zXthDweN5R88vjie1LhbBcnedpLxEQQPGp3Ltcnf3SnJXWXJR25mTrCGThehT6FqJP1ZBPkJkvvVjk56jYiNgQU",
  "key24": "2DSAACeBaHDyQMy2ncGmHWUGqkxp53CZ9pnMDH4SBiQZTabEHaLeqtgFCphg9pL88ENmMvVbhRosfWY31NMzpzru",
  "key25": "3JLzpYYszqhbdNuZA6w2PbYyxrtkXgMSZ4nrXhBBQkz3g37nGRAWZVQqkw3X7Y6ttZpvi9NSSXLCZE8QR62yK9vB",
  "key26": "5BhpwzaekNPJRm3UaD8aabj2S6wYtgwB5aQxmDAqTgK47baQmePqXRTVYxLyXV3SQcwxvTBtzLtdZeRi29bMAiuo",
  "key27": "65VfFShccYFzGuJnh7vfs7xChMabmAGyibcD2gXg8VhsgiHhxxfRBajpkiJxZpdCYLtGacRqweLb8gsWzuQfEYU5",
  "key28": "3pn8op89jguruEJCepdY1e1YHAF3yEf7XEUmDXs5dbr14bd4J6uWtuZFma1XeRQ88Cb2n8D2oaAP9NQB4ejmUx8V",
  "key29": "e1pSpD291Bj2PCdRboQCncRLGycGCrEGtBALtyxc5nPSD8qKWxdQBUsKj7qTydJW5s3B9671oPCiDw6ZqutMeLo",
  "key30": "24m64VnK5SLTxA7Nqxw9Btcn3Py2vWHiv6pD5LZ9t9JyecWk1vcDArHqtBnx51Yik834su59DqACGpqgCahy2Axn",
  "key31": "5qtqV2bSB36ZbykVkrVBi1AJsFdxNroQsoKdqLNMtao6wXTHSczNucTRGk4YZLgCDkk6QQJfYjBdcMvkRW9Lhroh",
  "key32": "4wyoJA89t2fEUf8pzv7HsjQULxUJmRhhvVLo4rkReyfwAmM5xDUNbQ8p4fmZ3AtNzgFPuRSdWbHNqyJRcq3k7RAz",
  "key33": "5NpPUxu1LNiC6EJ7mTEapqDs2HSkQ6AU1ot5FWXyoAqHa9sTJGcBSNFJfTjor1qMo68cLWiEXaebaBVtuEXfnfFc",
  "key34": "Ryyo8F6Uy7XzYaFTWLWQCZfPu4HwSsFzh64tSHPccB4mEQuZDcnkKm7QME3UQYAAK6dyHSC6N5yU4UQd6Apn3ia",
  "key35": "4H1snQgafXP9cQ1JGL8wLL2b75MdTJLrS583T3TCdfozRr3cqutuXbmdYmu5UejDEycq1JSTzWTPoxfYQ98rFqXN",
  "key36": "2vMSzNswhP9MvtTpNnEq3cwYcR3rQGakk8xS9ULLTqotxnnrwJJxwVDNRvMG7m2yBiWbM3PDK9feT5n5ffbT5kZy",
  "key37": "2qTvEA97fzf7Varbmin6aWdvoGSfcofA6cF3VCN5AGoRvRMx7tQaX6chVhR3BSFieuMgQwYHVY3uT7XHuhZnMQuV",
  "key38": "5EnDJQ4Ww4PUfdEEEjqC4pjatPFJHZfLF9wM23cKH7Pm4tQZYU1pU7nkYEd7GqUyuNUCT2Ts7yLUUuxxUHsVNmzS",
  "key39": "3aWQ9mNuDj1qS3sW2XAyuUB2QQ5azE63KYDqjh7hWnpciGHmh7mahV2g5La7JomJkX7rxwNcpKAVo9KegEpYHSdS",
  "key40": "3oDQyU9ijCsqcGs78XdjWVNRCSrGNKLKEJujLHtPkv1wb2YstFvd4hjtyjaByRKh3skT2a9JGT1k3srcmb9d2hcm",
  "key41": "5Qb2hWij3YA38FdKrpVaVw7nBrMVVRrJYzHMb5SeBXkWPDDuQYxp9w8uVDhchK2rWgBb3YTDGVGEMYCenJVSZpeK",
  "key42": "5kZyxxW943GXz45UdJeAzeup2s3wWAGSufHX2PnrPppSUKkRmyvtPp5Ercm2wkRojX68EPt2u6NbmhWr12BFQs8e",
  "key43": "5fJ1zzpZV5Trd7RKvzBKG43ChhJpvpTHPnLEaRJrvL44odDZJHEbFoL4rifkHnzADzVwKmCZjo65F8XbgKmQfEcR"
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
