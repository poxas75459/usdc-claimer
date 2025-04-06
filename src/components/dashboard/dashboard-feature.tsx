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
    "44QEZdmzPfgFgJUMnmwjv7mrL7xUTCJkmpUeZXmwmA2EqeMisDymmscXzhG6zGPr7UvR3iQ7s2wnrcLTtkXVWsBo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62GG4k952Uh2Aq8pbUxVneLwijVm7z73n21Ffn9vEmyidE22SeGpgcr6uajktqVT2f3RPeGu5kC9X198VPQHTfvk",
  "key1": "485Mb5DHf5jRQDnVPxz4TDwBnXyriM6Zo8zxz6d8ms49vezxp4fR5FehbtvByWr7pYEjRYyK6tYpMBTUeZTszEvJ",
  "key2": "4QDchTVqCjx2n7jzMWQ4XKgKGabK112xaTxTb5e11FAsfH95CE3kKQdyJtmnS7DDiDLgKwm3myyCFVipSVXx32bW",
  "key3": "2BuT9C37xmXgSBLQij8UkpF2Lz4B3FA5VSJ2dnV1PJTuAhgUzp9tGvis4crucPm3ndkY3M8MBpqHRjabZyAHT6jP",
  "key4": "2mEM4hUrzAkFzsJseZo7YngTJbP9quZ64zVEDew86pmPnTr3tViU26MAVsVDuzD3XCryE1r42FyR63p2eENFyh59",
  "key5": "56Jp6CM82syACKnGBacQ37ZPTopvBWBQkrJEsKjMxq11sJHV3sSkWRQFi4VCEqchMBcaDWJ5GKXwxyxqQxV2xU6r",
  "key6": "4tUNCMF5dresFx76K1HrR9YYHrDcxMq78CGf3iW3aUVo1zy8uabPE68Z4QRsWD7qHg73Cp9LwYppeEPV21g5rUhq",
  "key7": "Chh3H85XigHDUG7Dj7wgGaQF6WmsLXDBWBsfkEfBRixu2D1uHteNMrU7STWq1ebBTCD8YnULQMX1oYzmJpVidus",
  "key8": "2zy6umB1xViGh1uTqPmThqXBwMq6wD8nL6ftJdK3fwpDnmkXAB3JHZDCfWR1q2HMZ35XcJp6BbpzXABqAbw1RyLz",
  "key9": "X8CULmms1h6kGkiNs5Ci9vpXPjzi7geE4L8rc3Z1EePCubPqiFK9zjZkqy8fjJsJt2tXwrjq1U76YqkLqzZg3X6",
  "key10": "Gizp4PVKDFKUmhZGYxS2C9MnvebSbjTRNZLNWjuU5MTmivvcWMagN59CkJBSG9vyuAYcPqJJrncpp6QgHKNTZeM",
  "key11": "wc8qkZLh1tM3Atj5ZZgenYtWdp39vcYufnToerx98VwHNJnJehjhUZaQUeLcKXQBXgVW78PDk4EURPDLqpF5Dzd",
  "key12": "3UT1xPwmUJ3LH9GcytCea3i1iTQLY7hsf7KbpPKCHJfhrYTLVAzpvqCRAxxawLvb4GuxyrFDuyEAeBiXxaqugnZf",
  "key13": "3br1HgdfXRDRuwLUZVRgCofX6RoNuHiL8TN3UGZaAFXGJRu7JYJXDjVRUDenj7w9Mg7h9QLmfEJUigPbVr7hQKiR",
  "key14": "3xKaEm6qTCbuuqZdksaoBtLtYnPgki4JpAGAhXdEB1J7sgggq64dAjWtjLempdpD533q9x3EKC91qZzzx813wFGK",
  "key15": "5rK5WRsgSuVyuG2BZ3S8pQEf9Cvz5mxe95k7WFb7rJAKfeaKbWjpoRGo8yppGFGdUWmHpvEwke2V2iL1LUgigV8R",
  "key16": "4cNQd8Q1CcdwYZxDdidSndsehr8AdMsuMfovBgjBtiQmRuEJYzc4GcznWCt2ujQuMgY5a7jmucenbhGsnm89tUdf",
  "key17": "gfVrt8X1miGmdTQZYcweDBj6An2Qa1hgcJGF5pfA6NjAt3WEnTut9DB95TmUB7fUeJMrzxUUwgdSAd6GGLPjPtY",
  "key18": "4SuFBbms6epyLgmAcfsvuyCPnizaLTLBshtuvvnciH5bA1t3AL5XJUcUGHtGArcz6oE6cfFQ2kxkjhdsdtW6VCx1",
  "key19": "2yKoiU9tsHV9Wm2q3Kowq8C32yE29XWkYNEDzs5AzSRvL2QT6V4pzjgDnquPXehJDXPJqZuzSX4PNZfB63Q7WFoo",
  "key20": "3Dgo4hbLAS3BrAqCTN1LPStVJfb9Hg6aoCf33WGDP1eCTCbRptkTLD2FtpsSthrMcsXE4gcJhKrAwwTqckbvwCW5",
  "key21": "3aB9NWCR435ExUuQxKYaBEQsh8erMjVgqjFo4fS6j3fC9UW9gFX6bTLuWTfRBivC8aScj3F9DbMrLMGWY39yRgS1",
  "key22": "31ZJn3GT9W49hoSu7f6wouzkjWgmNWJsE7mQHyeGaSZvnbvwFxFyb4zpk5ok3oBzNeU9UzkJbKhoXRVQrsGzEZ5H",
  "key23": "r6nfvsAndGmqskL1UhCAfpeDv8iaZ5wkoBjx8YWWaopd6vBZeQMzxLGc4JzFqBpXGp3ifwXdGbn6bQemA4bPVr2",
  "key24": "48f4ER2L1j176u7AWeEDeTk8tDmsH1qjnotuThP5fWKGGHbtq3f4MGexuSqG2Coq5feiAbuGr66b7yEpkFwEjE9h",
  "key25": "36F9xf1h8tQkdZsjjMr2QF2Xw2fTHas5t8wzo4wPMnc52PGBGoNnDd7LFJ1AiDpRAvKQxT4SYJ1pUYzd2CSF1vH8",
  "key26": "5goentDazTQtwvxWmYyzBoza9WiezTreaFGf4Teo7BzwK1oYLATgUhaxbzWHtwahB8ApwmTcTNNJTr68opubuPgu",
  "key27": "4nbCemE1zRcAnxdkuV5QwBpENNQDGbRj1Ck7JpmCgU2pn3iWoJuiY1hkDkxEp7DLz2ZpjHzzQJBaXDWRT7EJFR16",
  "key28": "3N46nuUYPSii8jGbPjgGbHUsDjhCEtawpsfbv3fDhZnxPADj8wjDADzjzkAuN6akZaF1r3EE1u5TxTx5xTidc6Fe"
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
