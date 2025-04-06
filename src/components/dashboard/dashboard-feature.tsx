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
    "2WfrY1uWg9adkqECRGQjobsRRjxV4ug88PakzkkqbUsmCGNBLCkLVAbZTjy4uq9k4hTMEUDR91V2CCqSxLbHrnbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AhzVBUYHgXZPq5zwYbEsWdg7ePWkfYhGTWnBuVExBsPfsPCXCRBvyr8nxDAVU5A3YfAeGCUzKeyEZQ95dU4MGjH",
  "key1": "5JNir6yeJo6uvyB2E9tX55g1eDgryTUzWFEhmkpJHwbYSp4d2pcQX6dT8LfMchjDvhpXK9x52vzP3fuiFjLV71DE",
  "key2": "2yuKSMRa3SYBo47QxaBUCyKK9qYdXzZQ1F8LnGPFzeC8ZjQk8VePkhT2pkXtohbYKWnvfYk5Jg5pi4EkL62jSGZX",
  "key3": "3Ge58vDB8S2tAS3iYYkik1cmGCJRVsWExxkiqmhY23PGJGArcyKPu48yhbqfVmmKNsHKrt3QHkUWgtaDLBJNsWBj",
  "key4": "pyPaR78uirxZtANHE3mwN5Kq7YwPyjy2f76bDnyEskqN5t6r9fatQboXvfeqQfXLDJM3yNzjEjEbEYuAg9okEno",
  "key5": "4MBB8aPrP8PVQoLmSidQVHifexaN5o28NWqyg3B4B776D7CuSKfAad8JSvVDzrHP89bzH8H6QJaxPZHwhZVU2uYL",
  "key6": "39U7x8keEJkyJKNpJr5PMn49zh1qGojD6VFYJkK8jNnSht5V11pJuaiEUa67dHjVkzaNuS4JtfdM1EVLzNWYt7E5",
  "key7": "5HiNyX3ypxZ7rriVscNhuQdWGoCKRKeMPkeqfVczYZFw1kApM2thRPW2WRKZZN7q2w3Z6Fb6pfFZuDHc6UC5oSxC",
  "key8": "7voMmZypVNRTnvDGxNtEJRiNFpx5LeL2f7e1qn82HQ7g6soPUNs65DLgpwSR2U2KZPesDr6TTzss6oKgguyVtmZ",
  "key9": "3Eod16Vd6ihvo2HfAA6uZfGaKbPhBRL5UKZscbx7wZyqqUECYFX6jcwxqmVFYWAE4Bz8C45aBvfPEkdf6KZBFFNF",
  "key10": "YaGqc9514XDfaEH64eNcpqWcfeiGyftjfw47CwnhKsnhiHvHW2xQLyCjwHHdVaun5Uz4ijACZu5YKMak72pbBwQ",
  "key11": "2RRheqKsc2Y2JLsFkQBJde1HTj1RP3zGJQhdQVCX2MYHjNFqkFeaSqvVXXdWYoHhqv6jGqSF552d32ERQPJuEz2C",
  "key12": "4zuhy1YSJRuThrFCrh7qjvBJuUVDupKxnB36JWihrcU76uom7QXnqsmnLAJpwZV7sxoyjKsuiy8DS7c5FPgP3aHi",
  "key13": "S2gCf92sY1dpPXDRFLyXnWbvDHJoL6TRvB3VyVHjAewHin2KaWFMPDcehss4So3b4RL45fJGTX6rsL9dAVxa8ej",
  "key14": "5T5qrQTi9k7ToXCqSAtxRjV2fVfje5k1LcdcYRst3jJ3Y8xdf1VYLmTAQv4WChKGtcujtvA9xDG7a42e7k6did2r",
  "key15": "4kRwszg1YP6V5DKZqFPtdKeKQdsnDMQNAct79KNTvCwxi7WjfLQ2W1jEmKGDF3iMvSz53LCVNextCCg2GqxkTkfW",
  "key16": "qzQJGaiY7DVzo48zBqmZdbYPK4vCj4GzWZ9pkH5cBS4QGeE6gneJdndpM5ZN5LHT1AdAyJ6Bgg4s8nr1p87zdH3",
  "key17": "2xKVD5Pp9xKFigSU4foGzx6wFi5aeHYcWoJyBkwEet8avBUkLTagBzAopHXUUmZBvDD4kyJespTEqHpWHZ4bFUPn",
  "key18": "2oyLfWXFy8aqbxRFUZt5QCdbmZJqepmVz9hwLLobWxjfDTbjkBkB4wVMaJEFbWWgSDYGKq9FpycFUKPWWfYB5amp",
  "key19": "5Lr2s5BfGZs6NeJCqPqEABqrizj3BTAT8vSwy8paYs6PHUkerFEdim32DYMaVzRiL19CfsQCfe2hC2gjgs8mBXst",
  "key20": "61g3QC93hr16ndqmNukrVJQQjNBxa947HnoPX4BJjP7fwGCJdRRgtZbQkEvpfabS2njqzB1Ne2uGT3bS3FDRn4NJ",
  "key21": "4mWwjhsVJ5gThYdcnLiiw6gyJjT2G8UWJy2y4mkh8pg5Pg2LNiQbNavTsH84TsHAfABum5LvYnqSZBW7wu8ZoqJ6",
  "key22": "3gZDByzgiDgNPHkvk6yBov4pXfimo4gVQFEqAAasZirVYfxHXT6CcvQ8YqbjW5wn1uCjHJRVdVqqKDuGHE7mXeZ7",
  "key23": "4NCLjQJ425vHVXWDrutbvRFGYUQpLox2TFZ3ZCqneT3qdY4LaaZYp57Sb9UaomPGujsrJisuxm3c47ocPgwqdbCQ",
  "key24": "5HqdbmurLFJJLTn5FcmpNajT1dS2M9gYsSHfLGwqXXm5u574YBMZ9JnFuaerKbMaP2j1snSSKJCWXdKNq57r8TR4",
  "key25": "5TLM2VpwNV6Bwvm8dn6NgFZxXHDgAqKZMY4qxEni5DFCPz5MmsBoRMSGfZpLJaKFxngmgqHcEpsvfhGm78yX6Q9m",
  "key26": "2AHHKet9dxZkBTSSQhDX1fMXNGnagcRS4Z6CV5jw51ytELktVBWbV8iViubtDXcLysxnZxh9vfxa9LmujRyZJ7rL",
  "key27": "4p62nWkV2ppATMw4h9ET1Zc43tv1SmDemcFdDCSqaAta5qDh428QqbeZyJJdJKsgqMkm6os217JEBZ5gSmKa93sC",
  "key28": "RznJJqQZZkKp8tYo1qMcu6338JznxzDv5purJYFyo3sxkAWQLZ5t3K1Wxxo1KuhvwuAKRzwb7eFMYHXi657Vh9x",
  "key29": "3hN8iFUaCUJjcssrqyrLxZxw8g9bUnvAkzhMY8csU8cyh8JestjnZQfQt9f3bJzcgoYmw8J8VtnsvRNHciU1tfuT",
  "key30": "Y6cPyjCSotvxzejhpi1jJn8Mvz1p8rzFHgDpvfKyXTGw9DS6jkAruFbHaxvDrB45CYiyg4aE89jVDRdB36dkC98",
  "key31": "5LFNWPVasqCXDgLNmTqwVZ9DWkurbgJZURmxjeB59SCJXznFF1kFt7h8VFV9pqJtCmUrZ6s528hLGPCC9a2MwmUC",
  "key32": "2UhThrJXetpWzdzY7AzQjdxNZb1tyHCheVHoQaVKEuH7vMqSdhgtumBYn1jDoHEMAsyrrqVR1znioWm2MYNREt2U",
  "key33": "3fB6WJmWWpbn4s1V8n6jHoMky7xwBRwi4FVWDg5b9uhxh8qKzf3ik7exYFGNjESHZVevVpH6h8kh5kW8ZeG9X1wu",
  "key34": "2HpSznoGAY8Xbgp1m1r9zzuoFcqf2cYPnnMUr3qvs7bS5mUahzEKvh7V8xWimQHbjns4wHWLNFKRa9AqEibo1W1t",
  "key35": "KYQyatfJkxsdTUgHb9N6WjLTek2bo37wL93aW263SWoDufMZHehEEzfry6prpfBe3kn95p1imtfZZY867g8fKho",
  "key36": "2Xwn28Rq27ZNqUHvGN8XCZBju31aM92hha4xZdGdCNMQweJN8oBQsF4yinrTRgdzdVMV3WNXJukNMAhFwLXtxfMA",
  "key37": "5sBCEBVPu26xWbj6LXuatsYfPsR7KF3oStZUEVEXJ2dj3eWcGr9qXaD6Rbyt3eLNCwhQ1e93nzDXzX8W8bmyZbsx",
  "key38": "2n7QLSiDG3hjwhJ4ohD1NYBnbhn8zi8WY9uXjQ27qFwsSy1hwv3sv1ncMrVyaxqjE9tD7xQCxMJh9kB27AqgRmqD",
  "key39": "QGWVgQdvP14Uq7EHwaqMASXkgLL35CK1aeiYCwgbLfyK1CUzspK8fvfSz1EWxYDxpfUYtNrCFm9NFTtx6JydEdA",
  "key40": "2UoUNK4ebx4ZBbpzHoEyJsXPAxTHvKJHnnWbP5FBiSuPY57vaJk5oPx87YKuMJakKrL3kp3yAsvFX1iQ13UnBXws",
  "key41": "4BcigMpvD1UF4xo9BDKMAxaKEmfU3MKaqS5qesAKMruwKhVKEYe8ra8EUU8cFpXdCffjPTi3p5TxjdrWoCGJMWMG",
  "key42": "29g8reFJMkavYRgAKhvmUdzzjM2xPqHjLCNYuxJJpA2zvM3q7QSrUkhoivD1zAhWypRgpBJsCVJxRZex6ZVCArEB",
  "key43": "4LNbbiRGiN5Et6GQyi56HEX3SsqKuRWqXBH5rPuTzbEhYCojkK87a3ExFu8g54FVzV3ms2fiKNSbpUTpTYb6z9f3",
  "key44": "3QwZCwvQ8zsjT6N9YJzu6mw578Doq8jeVyUs3AxfD1RjJx3SRFKGFZMnMg29HFmbdwhm1F9shasbJRpyZHXu99Ta",
  "key45": "ArBFgnSA7M4Eyzw2othjN1YzZx2DHL712NjRAxxkcqAwWoBvWbnYevwQZSxiqCN5qJ6ZU5JXLVAafdQqn2uvpZw",
  "key46": "2EcRWwdgiNcZimZhFWQ35xTY4cuU1nNAdjdxWQXoH6SrZiMYtUNku9PdV7cxWea7L1c7JcMTbFDiapUhZkXUQ2N1",
  "key47": "654jBBRtg9wyfbTVxijxsuXHheuSKR3NydAFhawmjt9mPAYaLhi3SUA1z95NxkTihuqrDpKZRMWMgyXnSaS2K592",
  "key48": "3HSbo7rPkzdTrGcYXjXx9c6fHawGQWoGshHiBPXpaz4d1AgZhagAf6x2kJNR4VyS4fP9gnnVJiq95BYMcdgyJQ5f",
  "key49": "4crK73nB2aV6TS6sFZ2z2AVuw9EhiaALe3dW1rwnAgYZb1Qmi36o5keXvGi6KSvZg221PrYGZvoxM3CdhqcWeBGK"
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
