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
    "2vm5PC9z5s4JSdXKDLLMXUKogrUvrXfTMxFsN8dKGxvfuXy3G5Upxp1prCBUsxvsUGeG9rJVN4BCxmeBVL7PBEPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AneGCAiWseAd3xUMnccghRkPBkH5iP6RDRaUq23N7nQZrJJ5ZUKghwfWeCW53PNjexBXVddV9vi5Dxz39GKw5XJ",
  "key1": "5CD157FLeLbYUbSd3n7mZcccmKXBzkRdPTecNvLTkK9yHBf7cVHxaCAnei5p7z7xmgTS5Z9Z3xFD9BSeNyWFpidJ",
  "key2": "3mQHAoBaZtsP6xm59j1Ze7r2dfb2JSQUjBhhLWBJvjafJk34rMopYH31MipscAXmumcTui7JpTM8EYBseA5JtLFC",
  "key3": "PC3vDXHMB9QZhAXxY1Wgh5W1bhihvw7wz8qUq7LCsP5LjqZSZEZHTMk9pTouZ4hKR6eCkoud8XpFnREvQ3svhrX",
  "key4": "3Q9hsrGFrPJNqjRx49o5X7jgawBdiKaWhZ91S2UpEaBoTqvSJLzmd4NP9NePGu6eSYYKbDwtQYLEeb5LtEaYQj1q",
  "key5": "5WjtoS2PjAqVSLot1iz3JefpcJrvKYeWP3qEJ9672Yd6L2qixzZx1jvVZE4RdEB3nZH7YVFqJ4unfBYu7ei9iAek",
  "key6": "2aDP6uvmMewA3ASri5fD4oVEJSUesmgYroafRMV5CbBsv4bU2nUBQwFg3sTH8CWxosrRaoQdrAkDYnFLfgu2kHkd",
  "key7": "59EesHEd7gNxc4k6Xq8BnX1q2JLzibFBQy4jaP4PpCUi4Ri4mvE55fLAK5XPERaL5UTkANJx71BcpZmguQrkdjyX",
  "key8": "21VgHqsKeMN2W3MAxVknaugwHvvgybiM8KCv9EJsfSkQUixZHTYcW2VaUPUiBD7ZZDu8YzADzRhfx2kGPRe14eCm",
  "key9": "2qSkC9aqPGXwmDip1LK2rREJyvJDmj7exeKajSY7Fvnid3uJrVdbhoWJanZ4a2ZyQqsJ4VKvHwheb6CpbNoDGRh1",
  "key10": "5bVcJ4ykVJA4GYMe1hGYDtEw6miUepnQBFFrUdwvrpUEe2YMtc5w3D68vyhktcBofXAAeqLTxXDJMHDWDkCy7aMy",
  "key11": "5bieujCrNuLFzS6dqzJWx9myz6YTiR5eXEVoPKkJWaqDRD9NkA4UKaSLVYTn8BBbKRighWtN7nqMuAqRSL4DEcno",
  "key12": "z9VENr7fjKzHXjouW1JR5t2DBY2m17y5CdXXBGakrnUya25euVoHhX1FDH3hYkTBMgDm4D19wjdxyLrhCJ1Y6bT",
  "key13": "332keFUxRythXGGgVAvEXGmKg5fVgu5jkbZ7L3JR8KesbKWhNcMS4za35TcDS6EvZBrk9DDTgrvheCpGTTa6FFWT",
  "key14": "YWvcAUDgm2RiQgwWNf2npiQBtV3Wxov3bXkUeR77BvADdHyQHGgDRLNePFTRjvPQuM86HaoK59KGPrAALqCNxM1",
  "key15": "VBQe2642TYy9LNppD26qZ9BZbev5WzLpXUQAajGsYaxvk2xo7gLJQQtdaPNELDKXMAnZuTbnUwmyJxti9hGWLw7",
  "key16": "2pDoCiQXyTXcTRkMdLgvwVdf4aDRF26sEU2HDuuhpr4PaJNJyKcXHeJgCJGvfDDVc52o2QKLnTPor8gJzRyyD1ui",
  "key17": "66U3zNfDWNZMs7YHzX3mSQfZKMkUNZLLGsijUzRhz17eTehu9tYMQfsajTY3Si46PVePLtmTAuZCvRbQzqgMYPrS",
  "key18": "25FxuYXpxW83cVPZCT4VHH3juWc2Cm2wS34cbTYSzhRrjG8uVB6bApsAgb4KzFY8uXGDrwhtbQk9z46f6UVbZreA",
  "key19": "3dcADaBVH3tXHoJnCD59XMAjAk1LzxzAvTRFxyyxtk3UPmcPbiKKTz5J18YyWMhX4AHjtU9cx4NuzL4zQKTgqDF9",
  "key20": "3gWdmoBp9QHu7zFsyGGK16G788VFUW783GmPPLvNn57LqVmFqGrkrEEGPNC52uKtizK6aAwce9qWQH5yXWYL7A5v",
  "key21": "3fzL1Cp9MZCRJAJmdTjDdXhBbczRJirCd2YTVHfWHemq7KiHHpXd6JMxoWz8gEeoQYz7SLUYR76GBn2WTdyKKf54",
  "key22": "3WRekGVpoQmYRCDuNgp9R78Ko1yPsmGDjptVdPzo7KgzuQYgUFv6quhJh4vTCb6kHecrz1H4Sx5DHgYrrmSQgQJv",
  "key23": "TfGJfxefuy4Y6mMzQMmGVihTRcEPmfUNbqQKRX5LFZW3U87WW2ZHS7pxowuUQhCDHdvpPDAg962LoMadzdsi4xp",
  "key24": "5zZUHA5ewVmmeGjGNjpp1LJtCfq12rAgQKb5NHwS7kHJJKYntLNdcDpr7sXxUbXKfRuKSBHKSHfmSwKwkYRnpa4c",
  "key25": "2nthSXmN2q4h2r8XiBfCG7y4GxfppJLDjEHMZpXJ5em5MFcLR6vEYbJFUJLVJ7rnLtsVR6qGnSCZ6DX1h1o5GPsb",
  "key26": "32nAMCPDQX6EwkKJVe4XE2rk63UPhxMKpTyWi6mYLKs658QVEANJD48brdcmrnrDFqZpv4GmMxpChQJe2i9aeFGF",
  "key27": "4HBf45nQVNvzrho5pkfxswX4oRzLuh5MaPqByE3C5nnKexFXKAy33ikPtrzuZ3tVPTxUPmZ6iAjFdjfkK5Dedfv1",
  "key28": "29q5QdtSXVC7EG17wJR9EfjZV6zP55Mqn7ia7NeTAJUaz9fXqbjV6ftexihX7qFpFo7oCZVqgmoGrG4MTSB8n9xh",
  "key29": "5RavGhPe8zGahmvU9gYvzt8hydCaN3EFSEgk8H9rx188N6DAoYhTeGqmxdaHGgeu2ZLuk9szJp8V8iQ7k9mQ3TBC",
  "key30": "4P4zF8iuvBnsR6QTnmCSU9LkS2ndccmVHwMoodwsBj4EtirymKBCF2wUVGhQKEfRx1aVVDs4zbWmGj7tUG9eBLT2",
  "key31": "4SBim3AkkZ848AEr9vkYyHiCaUveN8onzpJ8UhziSNV6obR86F9ANmP1PmnyJTCG4xkRKfhNpeczMmrMmcgLha57",
  "key32": "dvD89v1pPHSztnHqFBfeKgTWxU6eRgGZue6Rout74vJ2AfWiJFAV5s9dgQWriYdFhifccr2ZNRis4q8LahKycsJ",
  "key33": "2amDFgkBPXga9jHvmD5b9t8tbCk5bTGdBGXzFKw6D6m7H9Ch3z59WC117ViMBWJhMj7zgy3QNHCkYXvb9XaoqW3M",
  "key34": "37fGiB1Y9Pp9Ntwvc2mN9jcAysCawCN8xzjqnm1K15F1Qtsra6TzyjL9coCXd65wi5xmChftDvrkPrb2iEo7y8tx",
  "key35": "2rFKpjWePevBTXPP7GguP7drJhfsSsPf6h5RaJ3N5G74Azuv6wN7nks5QJWtsiPNrzDwPkPvfSq7u3BzDpcy1DPo",
  "key36": "48Hij5SJJ2aNyn9mw2BLPs6EQSrwvZMitF5pMrxb6hiKZLmSgDbhhgk1PJX9bdQHMSkqiAxwqwyKTq8rS8DSkwge",
  "key37": "rimyUf2P8jYnPrh5c5AcSzqyjY2iirvL7m3Ey8qBvWP23p1JFxU9gKcBNw1kJaGFN19aWTTmUp87iAdtsZVNXe7",
  "key38": "3P568VXxgn3NKRwhS7uHZYyxuyZ4Kj35i8hfPgh3AUcQ9xfWpjhmgxCLMFENBA5MjjeUGaR7xeP3QZ7wXebAt4Tm",
  "key39": "3dTiwSeWRgxRhHXXCDT3URkK36qGAm92oau5cVrUbPVzvjYnzp2224E8WYihK9irG5QsATrFraintxkxG2odMQzV",
  "key40": "4J8StNTr6mo7mfRVS3xgNDugSbNT8ouKmSmxMvhH34pmF8hdwBFGpvvevs8g2HZvJhJ3F6AKhMwGyp9SoPur49y7",
  "key41": "r4UHo3gEnhVQihkX8orWWCA331MEPrAi2fopNzEPELdF476NGfm6d26GznvuJgXavSYbh4FWivbsWxcq8urTYvF",
  "key42": "mMM6Kk5JqR6uiKGqrE1H4rmjQ9udjBcPSCEdgWu36xFg2Xxsvu8cPTtfU6JirXd58jGKRVBtoFDFjQXUjqjtxpQ"
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
