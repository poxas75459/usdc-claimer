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
    "558tWJZL8LNKrD9rPeBM5heSuXj6ymXjxvK8iZ1hxc1FWduatYkesVTDzNdkLcxZJRGVDaCZ22KphyMapEFGvkQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ggwYcfZfoGA9VBZAaRetXC3jq6GcH5VqJTMwFNDyK2XAR4skibxGjuUnahioLV2UqPgF48xtRwrT5sczznWY19p",
  "key1": "4zsa2GVNj8SM13EjhCzxEJrbyPae591pg5cPH2uakJNM6mFRRzj6oThhRaMyvfLySHn7YvmYDVrMTcCzsoD1Wcen",
  "key2": "4BoxaGjBXch4bkhuRr6TiEGUhP3L9Xa7hWeHTyVFCauZwEEkHpraesQjYLnEAxGjKaT3LSs1Ct6X2CEzqHwp5sw",
  "key3": "3beAP17T78ZFqu8N2ySX9ps2zK1VGwJ2RmFXVXBh3XUmXHsPSSPvxMDGFMx2MjBR2dCUgzRBfxwEa6eMfcQu7RnN",
  "key4": "32F61F7cmXbvcB76waLG14ZetaRwYHMpQRK9ptanG7xbMmtmzeEuiT3npidYsKFjoVccKsdS6uVxmuWpBqhtqHa3",
  "key5": "L3yYswj4BaHS2Vf4M95xeHaDReq9jxRZUrr6irgdquM8W4zDFyT5cN2WgaeLYfydFJt5BfDfEYxKDnuSUoDxDBF",
  "key6": "32y3tKBH9EPjT2FKFh33nMqeV3qKWYC3Q16WTGq1YvD21gvBDgd895BkqmV3XgEsoJ1fxDEbHqSWa5HnG4tgvWZR",
  "key7": "mCHY6vFN6eYmiUmRokqAtS9AnzfRTuBMWSrHb6KM6q54Q4ma6pUyxm6XmnXheEQw46utBPeoHeprg2GKuheeAHm",
  "key8": "38RohcUTL8b2HeHvXbJp3MpzCaLP4ueTqoLLA6r6QURmS6ePWekGNne41LBv6edLgj3Z8pfND3WZxLJJjgP9ojrs",
  "key9": "25YGjMKteFeMao3d2pVVdPHDWpqHDJE9qr41fYYRD7tnLAeK6iT6oJh3RBQBXpEY4WWQ29caSTnF7vQ1Dv6n3f1X",
  "key10": "63wSZPU15JUNdaoQNSsiiQT6YZnrYkBRGDzchakuVEYcXDTxjFQkhvMq6DQ9gPySJye2C9bxN6xafgjsxbZNWHAt",
  "key11": "1d7KsYnBUt6ToytfCi8WXq65Lr8pkoEW4F8xyfCftPRKuYvBDKhgF31wfkrefqVF5k8n63he83pR5kd92KmEEcb",
  "key12": "38YZkqYUgmtYCGe1TELZWThckaj1UAbvMdes6XaoZQd57JhvnSpbcL37PA8da9Fn6tWgxAduRn2y2Q6PWA1m6Fe4",
  "key13": "5e7KZEywaAWrSGyzaFkLdts4dwFnxCf7G87i1b2dSsyGvSd2Bn5d4XZYcwkLAMrRNcydpEGkKdUXHy6GPuc7aLyj",
  "key14": "3JbgtZ8j5rvfCPaYya7AnC4jzXrkQZ6EFLkNgz3pP8T57ubNdfMc6M8j3KNsNcxtW1VCFr6v42LhuNJU6wQ2LiFo",
  "key15": "4sPGiEXJHe9wGKCxxzkyR2X337KVM3JwbfhaeKg14PCJffL8wkmd96CYECkiTeNaJo3Tad6isPL73HU7j6TnScUv",
  "key16": "5wh22VnFABEYUiuyiRbtZLokB6YTYyqvLUNUgHPPf2n2nJxXyMLMH4Kjg2zhSy7kzuThSEhMMQfz88oVG93Jaztx",
  "key17": "3tDUiyz4trX48M53TjyKTp9jnNSGxUfw7SFNaxzDhXh5GCWQfUxCakQdwsLfbudPDqSTkkdicvgQj7EGA8cBz8Hj",
  "key18": "28shW7sEnQ1BZGSmWrRCbyR4QGmiKw7o1FUB67qeMY34im9iyJRN613CdEtvWkRDX37Z3WK2CTjrTa5H7bX1Eazr",
  "key19": "4nGGifosUjr4itJp9rCF7qddpravwDKCdgWhVf3tme86iXtcNmsTtYSFA2yp8kFcxDh4EeCLXoanodpPCQgr8myT",
  "key20": "h7yrjAYTPpmarX36uiQgJzH1YFrcxW56C6vFYbGbtuXGix8fS63hxTV749i2zWtouRcR9gUM3X7hraZFERjcf5V",
  "key21": "5GHrMYacq1fAm6pe6auQzphGRx9v7H11PnpJh6qAa7BJct2HagkARLSQVq7Pn4cogMZ3g2k3dgrKwfZGZRBziUWp",
  "key22": "EsYwabPxPBMK2QC4P6aDxr9euh4NdKz6BuKA9ggAgpqyB8o5uxcCW9STJVt6Qj26Y4DU9cFafDgvfmzcvyqQ9sH",
  "key23": "S8vgPKozfDra6yTsqoVwsuUJWuRX3whRizyhJsDYy2yaVw872ig7BHSoeJnXH1URQEWMGbf33Ad7f6xHzz7cANQ",
  "key24": "3XkBxzNZLjibKSRvSqjMGfZfNmoH2V35tVeTTbEoHphC7qbXKcMgjzPuuahR6pBBKBCQSwxaH283J3RJMpksV2NZ",
  "key25": "26RtrPcvwSWM4hRfT4JGWo3xi1KotagsmRTKcwYTb5Pn2GyB3a9xkawVT3QMkKjBZH8kruiVeBd38J32Ljx8ojHV",
  "key26": "bEm8tNQJc23URDCG3TVvLjy8tgqhmnjdKP4zmVUsCigqsqR7qZau354Reurw3QUnqyHixwEXsNkxzq5SDYXxnSM",
  "key27": "4EQNAb7kkttrJYNqbJhX9FyW3dmd3BA2zbiKJ1tckBp9whUgpXDaq3Yo6p2vfFq2WTUWBYD8kTJ36DjUk6u8oazD",
  "key28": "2BmWT6biASCmmt42QDrNtStczMv5e3q8q6EKKSSCDo2cHsxVskPZ4EfUubPmRLHV3MWiE1GZVT3a8o9n6cBng4jz",
  "key29": "5FTu7vymoymiT3YkXfn8jGurxCea7pmKp29JGYas4DmQcTTniN8H9vPtSPVtpLekaCLcdTZEc2UcDYViJ17H37yF",
  "key30": "63gMBNxxkG432NXBay5xJ1pFAkY1rk3NRmzroaU3QavKpSh57iZM9ufQwjcZCope5ZdwPEkyomKobCAv7HhCedUi",
  "key31": "4rYFnN5PfgLzAPvWarXwkYFf5KqNA9KVZhXvHnZdpt6ipYftJSAr9WGxRZ1LpXsgfwbb4fL3MJ6CZJrJ8znPyWvW",
  "key32": "32S6rrX6oyMBk6FV2HrppxUCHebpavie4LNGp3VpFcEq1srNbC1pQEzwZg6W7dEDmB9Wno865XJtpC25KofVuqtd",
  "key33": "3yPUW9XDZMKMjEJ13hPQEsjbE7bGmxxtcuntA9jA8Gt5euoZHPoANF4YWZ7KUDcVXkFG1QKRVP4MrnnFkLzkfAAG",
  "key34": "5NywR771NLEqJeA5T712v2eXosTXm4SbpDCBNJXbQjCacVkXUW7PCcd2D9mVmZ4xtizLm4TRwk4ArsWzUfZagU3L",
  "key35": "57ozoHpduAjfrR2hgXXFmiKDT5tPr6tgQavCzvAcLkzy4jiYJ3m2Nompr6xFUydngcmK3zR2ZJM6BoQDL2YBtfPg",
  "key36": "5JXMHC1xgYrKoejzA2La2ZTATvcfR7VZoxjbxvdbQMUMSgoYMeRgd9moUCvDwU2DToVZd1dVAJ5rSEan1SgzNk5Z",
  "key37": "3dYfgmPR7pjGnNMEzErY1zEQVhzs6aCujS7kzVvVzjp6BzXwsuyXedJ1hVKeU6Ne84Z9QdnB572wjrsosm4LLmFU"
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
