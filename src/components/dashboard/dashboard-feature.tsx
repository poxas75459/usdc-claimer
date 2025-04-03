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
    "7JCDyUDj3bpx8NmE6fjzdZ61H2f8RF91d7VwfdX16UCrQMNDj4pFhaUCmG1YwcGbgA9vbPQ12JRuwJ4aR5SkfSo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67MuopX9cCMq5JyUYgtTWr7EqfuftygoRvM535mUCHi56Hztd3SMievNBWUfpgZRNHRYj9R4fWcjHvX3STQskn9m",
  "key1": "5un9Et1iryCcPoAh1EdGWG7UjH3zwaLAjCHuLmHC3wb4cgN7GGJnJKLGLA847wHUH6H6fizYV2A8BuMxgcwBJ9Wj",
  "key2": "42RjsGDbYmnCosACaVbDcnWjkNzhAvrdRjY6rmLXadvKrLTsczsFzkJnmxJnScFAxcVMzgq9G4dMNpr59E23UGPb",
  "key3": "qd5yAEN6u8iZKDhBbXvUhR2SwxC6GqVABkWK8R9oVWAN31MWJyphHDRTXMH2ztxVZUitf6pZfyQKdTpb3QMuiHx",
  "key4": "x1FvnyQL7Gi7yh7ynDKQevz6vYr4CQ2FPVwd57yQYj6WNNwwZR7JPaYDXdi2751CHzqygYGaTwV71MUV94C6Hu6",
  "key5": "aQbwFo9ak2XSFcwkztmLWjgaJsq9HSXqhq7QiDtk6RyfTESunJoHBN9o3tKjj95exzksYMScR2NTAhKMpzDsv7V",
  "key6": "37RJWBgcB6c1oZw5xuUwGri2yMJdWZUgbny16i6yiGsQnNANjDciKeGQMmLL6cirSztrxjLNnrPEuK8Pxoiobabg",
  "key7": "GHTT8xLxhHwW2qTfvAw7dM7Snd5iVKkBwoo49KYb89L9qSuKW5PUa2D7145fxD7VBoZKFFdmwjBP58uLfbahYuw",
  "key8": "nz5rZyNSWDjxXNfRDC7bgBJemDsHimMUArBMh59BQRtbeMeAohiXTQ5PievzUf1WKzBpPS9imgZTGEd5Lvmhz3V",
  "key9": "csSHbeMbFXPTCibYNwKDrZ7XWdYWsE49WWgtqfjUh2vUJkMDqimjrfzuJq8JaUD9Ss5NuJHyyf7XEaTUpfyjbUr",
  "key10": "3WeDVzN2A8MdF8XW5C5HFsUoKZN4WXLHb6uE9g281b8fXgHDmG78dnu3Qa78AUEmzcuA8aMb6tWRfM8drFEANPAB",
  "key11": "yw36JnMDYjaaBZQp4RA3JDbupsaf1Y6K1kmtCdfZkSJ9WMQG335oB7Hausvf7jvF2DjU8S8LWdVeqjnZghuGCux",
  "key12": "fy635SU8J3iKkv5wfvCkupvsybTLaT7Tr6p7e1hr239PhnTbUkBEPg3szY3WHCGcTmNAmZptEnpJnK4MFsKCvtj",
  "key13": "3vEpjc1fxSZNBUftque5hkiQQxZZthGPVj98Qh58oZgYQShRmSWcopXDgnsknk74iXxiz9HGTCbb7LCSD3Ubn7hw",
  "key14": "34T6XqTSabbAkWn5aazSANjM7Fh5NEbtGC6MHWuPpzPPxrVYe15y35K2beqStKJQ65sJdnb84Adzooqa3BMX9iuf",
  "key15": "4CNGDZ9s7WRzJpaTgNC9VPhUmzUKYRMM7ZJhofmLYcbAGVytr8CqyvBMKFxEZMKabk2R7GSWJcHhyjyarG7wN53H",
  "key16": "4opYTu7gC7ourBnEbRgv6AKtgBq4wzqW1DetrZxnMLUAtZkS8JAf9JoAVQ1Dksf6BUg7UoTHnbcFFvWWbhRWiUYa",
  "key17": "62GxLBMojfvphfLoRHhFToZ2NYqWQzfLNU3TL7t6tz2hNkuNds58imtScK6eTxKDSEgxoeZtiqppGPardHA5EfBQ",
  "key18": "4u3idbdsVcQpVZSQmW4tuY3S69M5So2wn4mGVxBedE7CJZMXJCVFYpdgvighsPJCEv2GuTrSwxjGobahLvtAB657",
  "key19": "3fUuC6DkVXgkKTzzfBquPcQ2QMS2EUAyipgPfHp6a8jYMuMEiEZ2PB27t4SVamEW2FKdho2BFpWiUH14e2Ukx9tA",
  "key20": "yuC1qQ454v6UrU9n41Q9NR2L5UyZFxaXNEJgcUXURxGTjH2DrtWNgsNRot8TaX5wzNuoMJw4sEASsmRQ53d46n8",
  "key21": "3DaaGqAD7hGGCKhqWfSbFT5yBn1jk93d2fEzXsbQ5LSbvxUNtPE8hx566iV8CyJqPK1eM39KoEniHAqFY5jzaTRF",
  "key22": "5jowtGgiUB6UkfUZ162v7pQ5GqMEz4h7cG1GYdMPSmeVGzZFLErjvXByQMyK8j2osEED2ZW59bZcYpmPoxjZJhov",
  "key23": "kNJMa77NcQBrpSwLK2WXuHJUuPsUaTjHek47Zequ3Z1VPDw8jN9C9tNJShN3bkqC4cSPNrNgf21wmmgqPeRJ5Ze",
  "key24": "4HwVZ5jvAXTUdCcVCZV39ApuXwMgPaECTCqk9DhFHjuEQjPZtxSDdLR1FGkwuTQ5YoK1tFoWMkfyArdo53BsDhMp",
  "key25": "2udYMgQzDdAyn7xS8CespgDtRZNs4GSyWnAVd6QhvFqc2trCYfeXShsg3R7RJMYbBiopAjAwBWjfxW9HkpwmG8gc",
  "key26": "3uUyZwrp9BkUfrnkm2NQg48aDXXpzwKmW6zCb8BgqLC58VjAoQk5soCGJD9RQUzU8rGhvQksvBQnZC2hnxes4e2s",
  "key27": "niq43nU19g2as3FD4PRNoD2TfbVTcMzK5fG437tXM3ft2xutYeLzqAkbBxHegYdmaqkBLsaHr2SxmNshMvAw8sc",
  "key28": "4HsdcoJ9SGgqR6DsG56wphczPEo9QCGQ2Gy6LWphGfbsaA6S8q7u38qHDaNZRfDmJMgupj7zZaBUCdTBnEx4TX1R",
  "key29": "5W2ut8K5EkjALeNEZT3igvPeCsPUH9Viutto6fuKgUzef1jeq9LoeZyQfmwsvXse3WiPEUScX7FS8jyhDaSosqRi",
  "key30": "2YLyyvYhuhNoEXdRWBC565G6o8BjkZUvGEh7b1975JbR81tQbbmJJ6KfnZMNyk6HUrANvHGxtuZmRF5JfYu2JDY",
  "key31": "4nC9mtcgpZvUDN7J1XuBfetbZEmTPRFdkeJdSEisrCGt134evgrTh6zjoHhGTJhptFhesy1LmT9SzdfnXSS2HZA9",
  "key32": "1RGWxDYc3u21i4uQnk5pxm7HVY95so5qyQF8pZPkpxvuhsVQLEfks41p2mvS6oyQzzr8XXRiPnbATAJS6V3SfUR"
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
