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
    "5LLw7L9G87LGqsAfqfuxwozaTvpSsZin1aq3Jb6vntDad6VtJStp3SpiZT5gzmpSvb7UG3c3Sf7AfSsQTP8uK6iK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W97H9MkAcTg7ym4JJ7uFPsQd5UPTMyxZV1W9sotRUWyy8QVonfs7NpDgLokfBeq7PRzAGPKx4sZUtUPqMpZfrBA",
  "key1": "wr4HajjzEkgCX6hgGtgMNJau7G1aGrwqLTncD1A2GnXiXBKRUKbtAnHPkS7JUzMx4SmrDTBJUtKqrPh61vgTmhn",
  "key2": "5ShkV5tYjvNd6W8SJFHVZgKQkrZdwxEgr8yP83BDdkkgrSJvpHvGVA7ocEocEUVBzREfNjEQM1UWHgsXN1Y6XbC3",
  "key3": "2pZVou5pJeh6dAWG9xdHPJmhZPFURB6r6hLwYcfSZpD9wARHU26tbexEPbVrcvquMoCPFSmush5fLzKmoEkDWymM",
  "key4": "5PsaT8aYfFYMStFu2Zsqm5r2JJ7CDkkzvEYsM32V32FRTsX3yM12XzhTuYcPStwsKxtk6veTiEneYgmYD5pTKsHZ",
  "key5": "CyVEnqJCCvVo7B5nLm2vR44GWhN1Vps7CkGu8Wynbw4yXzbxNcqwnx9wDoZXLBSxbeMvCdPcpnjEfKQHbR5eN8u",
  "key6": "SZb5CjGAmuwsoehdbHi6SqugV6xLYiQif9nMYKfQYtjGx8qJ3ye6fAgjt7JX48J9GYxZA9bQMJncMpK35ZfqsTd",
  "key7": "65qZT4XqyMvm6kDSBhzvv4qsa8dnmVS6qAzGgCyCaRfMP4nqM9dTv38Tzy49xJfxWMfrbvERJ72DNYUcZbsMkMnP",
  "key8": "WTM1CXMwdf9RkGT2f5j4P2w4KSa7mSXs7GreENzwRCahVP8SpQ2MibR4tPB6jUYVWW7sHqu6KeVVmYYJS4X9te5",
  "key9": "5oRnctGmwHq2oD2mRoDNbzBw2SckCgDuKqFTo5TE1C1ytMGe4EbsnaF9q5rNKznxZtFGobSUT5btYNjzpJvx1NsY",
  "key10": "4765hMwhH9oTbNEB1VBZBpgTDfoytS1U2DCyu8UXx9yMzm8cLkLjETHZ7zbCCpmjMXRCLMvMMgaS5Cns3VNDStzG",
  "key11": "5vSzox8rtsiti5xgGBZz5dx8WsBwQvN7hSy6HgE2fMYMBThfjHfBWu9mUP9VXUtDtoTfPpTKAC714bQCWLRLMaM8",
  "key12": "W2At8sVJEDMV4nN9DVqqdfWxCJ368jK123xbEeLdxSSBdTTs78QkXvevYajBNiTUV3XoQ8AM9RE1aFUXdNgRa9k",
  "key13": "2GFcmFpFncRBRhKybv5Q1aYUkfxhenbkV53bVbN1mfPvRF7KdDAuEoFtYqDqRAUmmw3b5qMzhX1bm26d7XzmyHeE",
  "key14": "4NMXKsb4ZeYHQuwK44fgiKydMkKCUAnnN1XuCsmqL6MtGghVJN7eeCdzdGAyBocypGhdSPQQLQebcKFCPEuxSGhr",
  "key15": "5iaQTB8JmKNaWNiyftcRi8b2nPpQAhVPzEWD3TTfmuPJQdJ6UsjGKCsY5kg5aXcdPQPEbc4YFTSjHd6qNmLHYuR4",
  "key16": "fNQMhY4du7DGcXN4gvwkrNEMgYM3dADLRf6nd6iVYAsteVhXsnHFoXHNeJsCoK1TJEwC6UwAxzE5SKcXbt9JUo9",
  "key17": "4Xx7Razi7uz4TppnTyUFf4fUTwZdEhjCFSjaLYxcY2T4XVYXJewMVpfwx8rELUf56JSB5UmUQkP7asWU3XmwQtV4",
  "key18": "hurQ8LAPR7j3frD59vY6KAzXaPwsqDN5QCxLiumuk8Mev5iP3vUSKJrEFwvgNJ1Mr7MA4dPi4qrNSYzQWeZYFqW",
  "key19": "3Py64HvcBUkA4G1dCssEJ6PfzC6TgYW7FdGTEDPZBj81KAiK3N63Kt6uVWBstTVaPj2vaXKxcsVaNrCR6d4sFo7Q",
  "key20": "CGhAiPGK92DXXHfzXLRmgHiPpc8ojh4VrY5ed9rY1CiHbs7MkFrbDCFU41LXwzcqw54SzNrnmD62ZqZSVNRnCmJ",
  "key21": "4eLU7yS9SHc4Chm3apcuZMkteahiC4WxSPWaAQ2MKtjbjq6pdW34Moi1eMaR4C79DdbQ9RwGjJ1dhppVjDacEXUZ",
  "key22": "3zqGyQcwTxM1TjHPEiqRQckEmjHZ8JAgH49VRjDJ7SrAzmmgXNQHdNMvwRC14Zd5Cbm5TqNwUZNsYXBxscfQfPor",
  "key23": "27m1jqDMVNL7Yub6mj5EeZHDRU5Zv6yuv4ShZeonNe7oiAkf7MKbTSJY5m2EgPZckwYyq5LvGmP5xkaVrTad79ip",
  "key24": "m2fay5CofcA1mmWnfaLb1iKS75zhDSUyiSZH7sH4c9GsitaS5YznSWas2Dr6qiEtFBvbCJpGbhLtEvdU5ZTi4M5",
  "key25": "2ZZaZPSfupXACtvB6oURdojyu2eyQkEwvUBFrmyQyyEc5cVmziqdSkbDtQADFZ1ZnDYnXXDLji1esuaELFr4jVRH",
  "key26": "4WVf5pR3qxHgFj8G8duxwXpZPpAEXkJbgamhuaP6fLtGM8trwGXz8cv8KF3W4yGEbhp5QiK5HAsRiEHbTwWov3xN",
  "key27": "3PUfX5VDB8qrPbhtR9Vcmrp9EyTDmyMLJBLfooRZBtrtP7RgxGcUzFiU3Gf6xRqMFnvegZwDWk6tSRgPnGRXTRj4",
  "key28": "4b2XMxMeXnRCBj5m1FrLqJHkX8NGBwZeTKruSZ9mLUdaBVFgY8wm6Ye9W1HywD34G4zsqp7QfGGytHx5aFTESH9d",
  "key29": "5kZsC1v6Xg5TkRyEcNc2w6oP7h46gg3AbKCHmRR77AqnbL96a6CbbWWdeqjFV3cagjAUeFG9kgUEHdVdNm6b4yaX",
  "key30": "4m4m3res81ds5vy1nL3naKPcFTXm7qSCDo6JDpyYB3hdFjWQMfUHrhHawjSCzEWMiYZmrpbqMBfkcjD6dycD4HoB",
  "key31": "RN1U7XMxKfwsqTEjN85UzQhubY4Zf562hZvJ88dP7rxdyitpssTBQFunkM9bFAajwe8hj7igj2T6dpBW5hG1Uwn",
  "key32": "55bK5a2WLnqjLWvgrAc7iSiUxw8LtYdWhGBq82nK6f8hT5PSuskbXBtYC19rFvDC7C8aHW1nwYLe3DXYPnFqGXXM",
  "key33": "5AVraRozwBpbBsTnqhHXsCrwvDrQJ9iaV3x83nGWy5SJmFexAsKffyMEynPwn4YVjyx4JqWiETUuEWhjwSQLFK2i",
  "key34": "3iMnmCxDUByeXjmSYKvU7nVpDAeBHQaNdh83k44PzubjCFQvTy2pfwkkqAPk2XwYET1r7G2zdJpqUcyP2r1sd8W2",
  "key35": "48HRwK6ZXnep9J72db51c6EMztb34jrKXqkpZUCjLNJDW9NNYvtfq1rBMD92BuVUpksWE8Rd8qeHWzYZ36qbiMyR",
  "key36": "52HGGmssUM6xiNwMRaXULwdNpxSZvcn9T3CZo5q9jihXYpXHKzgYHpRECQ1D6UnK1F5EWdPN5pjzTMmusmFmBnHm",
  "key37": "4yJ2qb63nLN8f79r4SvhN7gMYVbLnGsjT2W5AWXbAXdWEba8bdBHqvA7rELpeo9x3Ki3fjhTpbrW9buPj4UXUjNV",
  "key38": "2XsjFVCzteYS3KX7WP34nJM57ti1foP45zX2XkV41gRaoAzU7jEQ97nuJRJqrR4x6GREggdRYcUPghLosYEv9YdE",
  "key39": "2dYSudNnAK7BqjPSTJ7CU8pSmmQikjWJkmN8yirx4Sp2uCSNQkPwGd8rzvWHzJzUAYxjsaE6JFWewwJcfPqAZudM",
  "key40": "5J2ospuojFF3nSAdgZBtf9E3n3zCVeNHeMyMR5fxvUvvTsEY3bKKALM8TrfWaqbYTnr5X5HbJVVx1Trk4sP8Syu8",
  "key41": "2ECoNGd5Xc3WmWwG3z1ZEUL9XvggiTvztuqCkubmeuvg9BA6dNGYeSN3LiK8218Jhx2AX7XzF1oQ875DGpWQooXr",
  "key42": "3h7WaEVivUUCv6vjsKRMzZ64rxQM2AdtptPhzcK9tEiLrc5GXdg7paBHWGd45BUecjKUDzqjaRidPzwtniGpp67u",
  "key43": "25cVHMm8XDPZuc4GUDauDBEcbZGvSPB5s5aCX4vxt8g8hpQyG65UDum2keas4wqXSuCDDqW2sgaBfPNuaZm3CNBn",
  "key44": "soUkgYWoQ8DBxQFJcWsfFtnRxepgUe6QpdQFSRRQGXWJHiLbdt31j28mkTXVz7rHrn6av1ub73kWL49LLnZdgCk",
  "key45": "42cGQkMRCXTgMPRL2SnhpmM4gwk96tWH86BHDb1yF6UFyGJNYVCDwVgEMtNMFt7LEhpn6YyBhnoxiUfNWKkuvhhX"
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
