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
    "7Uz4xyEFy3pnPvDzHdDj6iwRnsHnpewQ3y7R6t5hu6Z13Nb7vMyvuYgGSEcttoa61MkqGGMw8Zsyhd1eoz29CZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H3PL6mm1iZf7yXwZin3Wry8DeHvZWXNLuzdw4Krw3FF5XbVM8XKAo65vE2Yj6r4CipYRqUMiBAke9xNvc9SzZDs",
  "key1": "2MrGQRSy4TAuwFXSHcTiQCwPBcWtH9mJMSHzq8SeYFxCqdQi7f9PABURfRuPTfoqPce8mzz4sn52c7T2yJ5jtC6r",
  "key2": "4R5J97pChCAfJJ6cC4kq9NZzLxmesjyX2rPzuLwPu86q35utdLKRy4AMCVM8buxJQwjZNv3nQhQdWDiQwvXhpxeK",
  "key3": "4FDL8prJyFrNJEqf2oKG9AmATQBzwoc4ZgnYrQwU6iyESx3TnZuBpMx8ptDZLX6xFao87dkFTqn9zkyDETLDBWrR",
  "key4": "36Sdv8nameHk9FEMEx3RUPUTXZZgJZiakCfe4xH52knKsCuj9BEDpAsbRensBDDajKe4W7vi8WFbtGsgEF69ve7e",
  "key5": "Ue8PgKH2FUANiq4QEBe3QnMjXFQk1iwoYnPhnotKbtDWTrpTFucd5ki3LP15b17gxAVujgqHEjGjrmyyVgHRF9v",
  "key6": "24KJXsEUwzr7QwbinFeopZWwiyK5EoeicZExHN5drgsM5sTL3Jk4MFHXNBHM6yfZ1NiSqYZGyWAWE5EJsvczWzdN",
  "key7": "2aEweovL4XtjieRerBKo66jzHoK6R3nJhVsrEB6HMsCMz6ir1yULrM2HB5xjmPrgspaYz27Wfat7vgH625AHvecf",
  "key8": "52cd6F48wZx7t3agHuYiVUQu2aRSDvw8c625D5uAbyHrRBStNmYXDLsCQ7dphRkitzo4E7jCB3iQu8d2QkbXwVtJ",
  "key9": "2FdBnnnLxrtkXUt9rKv4YVMfgmRrWDDbGq8gdwJ2g9Dtum7smQeZCneJ8a8g6NHxR2qc6PVdtNkzzAbhPZjHMVWT",
  "key10": "p2hyeHGXCP2namQ44S35K71ncns1dtkNht5U5igbAAdGt9DwKSkvR8SzyH2ZXgTc7EXb8Fu4PTnhL4ekLADf8og",
  "key11": "5RFhmyF3bbKKvVSiYGCVSvxuV3D2GifwVeQrwSofbDAbrJBc9RxceH8rV5Ew9ifZf9jX8XLmZrHTmqHw4a9wyvYP",
  "key12": "5ReUQwrb2QbobUkmuqbk1ug27WyM88r5KaWeTFRc1dcJjhKmAJWkHszbJvXsGW9rfxvjh5i1Pjq5qCGATgqrjKNs",
  "key13": "4HnADPQybKZSqyzaR2EXkshCP7T2BkX8mJVamvEBXwzZAfQUDHBSB7kPCLYKKSDQP5M9JfUDR2eH7njEEbHaM6Ns",
  "key14": "5TYz9t5p52Niprv64uLeDK3vWNnm65f34vL6DVF9fxt8h4VnLNXsJSMi1pGJ2Uj9dxaQTNz4tD1aVNnXo74HCfQF",
  "key15": "2vSZd7CAo1dirn8He7Knx1GUbZfYA5FJhHz8oqz4p41Cj3PxKeuEpGSYBnPz3pNo9BHS6sgfMdAVnwn2ADTZckv5",
  "key16": "4xZp3o7VHxGi2EYvWwcQgfJHbQQsQnQQM7p1eHwJkvWLgBZAk7AEeiL6dEfLZxoeYpRB81vYH1SkHEQVaZXsoPdo",
  "key17": "2QJzgYF3uo59t437FW5gxKpJSrfYaUHZnHsieoDB1JzQdRKiuaqshkSwGfS3NoWHYEktNea2r7gBzkyysCqrQo8B",
  "key18": "PkYmHAGB5rsFgHVPrBo4x3MUhDF4PB86H2jyyrXbxHZV9uDvc8iTB53fp7dhR82mEG7pht3MS9wKsmz5Zr78G1q",
  "key19": "2niq1NirYRxtzEs7MjwXS9TpCkYcFyT32nyv4AeTzX3AgWadJQRY87ysSjMhei97ttiFwvnnT8sXJSE3Jf5L4FQk",
  "key20": "2xbMYagMuGhFZqFSjhR4jvU7eoeryEWfggp2nCywmpbPxnWrQwAagN6TAxUQnvyq6A4eE2k28CHM18yVhVT4C21h",
  "key21": "5RkaCvqG7WSZF6H9FVd2zRoPtgzv5UBACKWQdL3NR5tcw7RVpYqReijAWwSRqNwXDhoUiPLrmiT4LQUoDYje3jtf",
  "key22": "HzxsdsBhZY82zm9ra9tqeoHxwy62ciLPavA4uoyUeL5wQvLmK6PGMiHf5ZVdcPbHUG2855YL6uQxPnBzPiUqrcq",
  "key23": "5Be9hqZNeciQBq89UD5PeyVzmnvycN1d3ZCUy8QSwtAKXU9vemaLDXx7bX9VJwP6V33PrYHf8roKa7i7tdXcScon",
  "key24": "3j8oU62phKuPoMEGPB8KXGAA4ZvZ2w79SwzhFxW8ARycocbgY4Me7iFx9HrDZgD9JoGJxjAuWsm2fX8Z3SkcFVGv",
  "key25": "ZCXuF6VHJixgZrauBARB7iVjsfmjT13qr2Jjkhpxs1gkNeCYdxdStsmWMGr6nT3LY2gWdgCnWRznC3L1KbZ9GkJ",
  "key26": "2k25otEGS6RvWaBf7U15NqiHVkwEcyCAwFgJmZuMNvni9RiEYYH4tFuEEWWHKy9qGpnXAFrgdZbUim4PLEBP3XqR",
  "key27": "3HNxbNyrVq2yhrqc3YL4jtfm8sjnFaM8HEGSWTwU2EAdm4mHwLVeHMUZNMDYXaXL7V2jhazJsXJYVcPf1J2L3h69",
  "key28": "MUgDDEQyTHMKh3Vubv8XuVazivPDzJVBPjc7sp98J576F9UiDJyApzix6e8ADjwREFWwi2NQ9THLQTaJv8HgK8i",
  "key29": "36SsQQsQx8y2LA1AzPDu4qaRTYTQoQEzEn8Aeymv3f8VJWsW7eCHK2P42qdbQZQuwkdnYJCCkoU2BBpfSMuT1hCP",
  "key30": "5cPoSvDBHqx189GhwwjP4TUyRSzVxeduQtCpPosATUUMRyhYbFs3JkBmjaxnRVYKcuzv4s5CBb3EZmgbYVbf7xka",
  "key31": "4LRou2mdJZAfSpurSektLLP9h2mcQEo68ZyXorHyFsxC48PMjyhYsD4ySgrJQToFWsdrr6NtmkB5cHm1LvKFXut7",
  "key32": "27C1E2dRDVD8XkG5tn3wdNRMKQd4YRdr4XdgiD2ZCcLnQqFJgDkXrTtB9grHAvppdrL542dTZCSVsGzGThky9dLS",
  "key33": "4UXf8VBt2hydiK11Yb3nHj8NpVDv3rpmbDZSZ8iYeisSCDokntZSKCUjwxFwKhie3TBwaxKKVLeJC7sJR4v7p764",
  "key34": "fFKq1HytnumXTewUknj4gUy4y26Q84DE577nfqP72jcksJ6jyNsvKUnc3oS1YgwzkW1eXFhiaMG3hrSxaHQ4dzt",
  "key35": "SKgryVifJx4iAoMTw5ScYPGJbFeFDiifxAdLMrRf8F8W9eNbVqfxxmnaqpxaiZRRAfTCXzfmWLDjMExYJyVCdHE",
  "key36": "2RenyzdHaFwjU56a6YS3JkmYnhVkAn7YHur91R5MGF72a5DHJZjP91NhxU1MhMEUTyLSyiukMrRjaMmKugNth1mH",
  "key37": "JsCANfLsoEZvy9fQ8Yx1wB8n43DgpcAPxhxoKyrvqGtu7YSZ4tomVnCpzkJV5b1AA1oD22op9sDEhhPt9Wkb6fh",
  "key38": "5z4s25NgzswiFwVWNk351rzTZhkna3bChB2PTrvLJyJ8xN2eNTJCvj5ukjU4miirNFSsEWYjFExa8b5vHC1pmwEy",
  "key39": "2j3AsBfph8JYoKhx2z1oVrQcekSgLJ8PzxW2yLax7CyFPz5c9Sz14a2CQTVn31ZjymjsHX9fr6uaWpwsvfirJsHp",
  "key40": "49p7jRMcJ4S5XpgkKiMjnMtec6bAkLuVucSMM4x5GzGF2F4RKEhDY6cNrvbe98wEG7ze96U8dTGCRZ7FUjeMyuNx",
  "key41": "3ynmRxHCKGzgysLaDtjqdPsLZRBzNikHaXcR1bfXkLsWXgCeLhgmXZn5RnkraTk5AMR4CYSBHGDzHjZCQHQggL2C",
  "key42": "61mUbCHLqJiTkyGS6xHu74WztqTWPNVynwtkx7LtQWjU9m9WU4gXzy48rNY8pmXRL7j5QBEDwW5yMNLhY2jvSRqz",
  "key43": "3BvTBFxge1HxRVytrSbrputdAh4K7G1vpwjpWuXh7fewDrj1DjnYZFDEQhxrZa275pQ6kqQyxbVHETc4CYyCNUUz",
  "key44": "86LvDi3ERRR2H2xpnyTHyuHEAZ5qRwf9cjSsACbo384BEz3mPrT3d9sn8s91mNfXBisZK41ZGQSbvvSeRsHg9Qe"
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
