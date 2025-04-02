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
    "3oVBLG574NrLw2jgKr7KanaASTcYFxav3kHgdhp4Sqz9sXKFW2NJa7K33GtdixK5PknGBDFbCgEhrvADm1X4sTBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lq2ZiMyLqBNftxQeca6wPSTweWtn8ECrzmwSD59TqZrDF818CxzRzAykcSJiNGf6FjffoP8VzEMsvLCVeUCriuq",
  "key1": "2zLDyoYnd976Ujhug7VLSVAS2quYSaa77MoPNfapRfrtPCDERXc7ghtQFG1dxNJUH3cqeswfPr79q18uLQkaSQgc",
  "key2": "263ArJ556PZ7QZCPsCFCVwQbuXLqZXRVE4uibFa6Gh1mseUXvEhKeqmfzTUMFxRN4kL2Y1uBHYkFAVZYauKFRhgx",
  "key3": "4hqM54YRJ5Q3SggyYB57xJ4Ac98uUMRQg44kAT94J4gDdyot533UThqJDnRog7dorYLuCPRfKazWgiijf2Vbh9au",
  "key4": "5rhTch4TcvwXNhKUsebEP4VmFswkMTzgBjFJcaYWvTooqPZG67HPVNuSuvV6PytScqpqmwEEWf8P9vaeF9NFS82t",
  "key5": "XzqsQqKvPiqcYDnm2yL37TPzeQFXQt9r6pWd8hFXj9oRAQK8ntp3P1aTxdrhhAv6X9tF2gfQRDjKqUwCho6mn68",
  "key6": "643gWLunBTBcEV4WdgXMwoy53spFAdpsnfym1aXjCJ5Un3CjaDovSgr2BfaMLQEUH5yXUiSLa2kzWT316LFz9F6K",
  "key7": "22o2kvvwCXcbX3Z7aY2AnaxDVdcVpooARRQoznhHsuFy55bLZYBdwVU8VLeNxgciuKKaa7bT4FGAJtNb6LNMuud5",
  "key8": "eQApS9KQ3TCQe3Bf4hNh7MoGAejXjsTai8V3Du4eEjqpE3m2ddn55JnCCgA3wYsA4Fckt58N1qEyQ2TUNzNdmz1",
  "key9": "2if7qwz8wMksLSBLfx4XqGmHDXohHuTc4vHHURN7aFDSPXgkro6LFxFEVdDWrLmkdF39fqtKbBL5N1oZ9DCiULr",
  "key10": "uvLU31WqBg5vTmRAZDGLc7DbGgbdd3YVWzKZDt9unJR8MJpuUZeLdTpwSzmJV18FRSmg75rkbyBtPpmS87KECy3",
  "key11": "3PTUdXvRWz6Ft7YE8TUfK3SmfwPcgmDajrwS6o9wWhpCAK8hwpK7ydGK1snQT7eTS9XfNNeBHgZKcukTEYEVkHPL",
  "key12": "5ox62CxYdUJrEePyjfFw5BRa3h25eYfRoc8yCRJBvGu9S8DFzTDcJeghMtJ8cwsms84f1pBYLX5PNEPDBA9Kt8uv",
  "key13": "3PK4uJwEiq4paXyYJUB7kNdZ5uiW7mbUc5Jzo7xeRM34GNi6sSDP4i22MRTPUKSFe9PXkcrcwtkYc4wtRKitpaGf",
  "key14": "52WVi6FoqJeo7uwPUmYZjKJjsNBARnxyQDtMqfVzNQTVDFe3XQqa16rDbniaY2wvq2vsWkDvvWkDhjEKCK3Qndii",
  "key15": "5UPNXovjtXxxRFPpg1rdZGyMKohEUusMg2qNoxzL2q2LhfpvJm3RYcBRY8m2HAzFMHdFRAeMde1wxPgXLPaUbeM4",
  "key16": "bAVypuyrwRfGXMK1ZmNE65G2qZUMcghAdLfF71VEBV6EzyWqcxxgb3HFmjARR7vBRG8LGRBE2PnPDTX4pcvZVXH",
  "key17": "2W5PXgwo3k7vPRJrhqMsizLfCZ7iCcXRWywzafCB2AqLTW49HsqumFcrvvAj6aRvYffY1QeGCPW9p5nVvMDudZzz",
  "key18": "4X6ZKNrB7z2He8si2vFfvNs2QbqGtxu7XPntrhTHPyu5g7RXUBwsd4oDLSa8gXPWRyeEm2RxjP1Tjo8spjaTVNxe",
  "key19": "5HcQSZDKJgHuVuEXbdTrTRbQ7Ez7mGnZhE4Fp39Lix6SNDXZtY86MSfFn1Jz6CgdZCVzoH2qaamYTTPh22AXgvQZ",
  "key20": "KRknZXtDo2ZaPomsLHuCTxw1WbvNJdQqxDQrf5p4WAVpaFnoiDqdawUk2gu8KXVnGVy5wHLEa828HFa8eEec7KB",
  "key21": "5sVp1Xi3RDYZsaAfeCnfnUxE5pTwJCcetZg7TjHD8HVYPH9p61GF5FiCWud33pZrc2f8pgkF6WDegEkuuR84jpdW",
  "key22": "MXVRfhbYfiVpBoj7oFsTFv2AtdL1uJdMvJynnomRAds23fhtrHyx4JMQQkiycn1zCt2txS6B4jFnhaREDgC2i3v",
  "key23": "2ooMHmBawzTpGmqwmvuRmLtyCUmaT7fK6eMLenf2yx982NqicyQG1D3A8eXNXt9YFYEAAognwpyvDgscN2D5WuTr",
  "key24": "4rc5X4LJdewzc6MsGRUcYcacMLgruga3eJ28K6X8MnpGEa2bjc3a6mxeigiK3dUj2xcSqudwMGJapKxyFJn49rZ7",
  "key25": "3WmTDn9EVVNymkxbaC8jeptRKzB13A6YpD65zgGnXC8QsswwSe4CMmymsFMPHMFTrh8fmUztqsaRhziiHrb71vH5",
  "key26": "61ti3SBnoBM6epJLQhvPLgVgavLH8WqV9TBKxDAQhL7BkteBFUd3y13HQXuLmB3WAv2caBftRJCih2frvwuDD8qE",
  "key27": "RfH5byQkg9ohTppfewpRpT2k9YsPr3PuKNqj1HdV9QbMcKyV1auaD1AUMRZkvY13WKVJtrcV9MPU1jgTnvX5d9m",
  "key28": "4xEkcGJnJF9dhTJ3APEfkbyDNaiCBMDBVQjCzga1yNiRQQ3vEJJDBJp3K6GW1kRaqpuQ3zceKfkPWgQtia1b5Xq",
  "key29": "XqM1hCPagB1LcDVNEaF8sXvzpj7eaTkdWj7XCLo399kQAndCJuxWV4f6QFFQdR9S8yNP51mgJhcZ4Qh7xsA6mK5",
  "key30": "yX2GRAhkxvbUV7JZtGPV7CCssKLvp8Scx57K56xV7mzBYzK3LV6Yv88RnZcGDqtnGLgiRzuGXTFmUZF2g8mZdEU",
  "key31": "2SKm4QziS9Fg3mSZqQNuHsDStdUZ89dmsqC8ukNwiYDH7TJMTSPhfuiSo9mCH524RRxPsgHoqP85SFKRc6jP8vXR",
  "key32": "5urBVx76zKnH2LatfuXvN7RALk4BGRq7aXxKhsz5y5RFC1uZGaji12e4stQ2RcNr4xUHKEVznUtFeEYqM6wDWGnY",
  "key33": "5HpPv1DwBKqcWyDsRn7jUacDHS8vnKhWq6fN5ELGLvjTgm7e8R3vzqruoVtU8GoTyMyRcby9YwrgmHhBDmmKv1Nr"
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
