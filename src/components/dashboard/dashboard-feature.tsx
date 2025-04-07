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
    "2Q5iJA8xcReagrSXP8y67UpLA3gZDN3DwZYxawqQLzuqZ78HAfCBNyKhZ4Jnb1zJTtNzxzmqWEUo8cxmNBeSSbAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xFMr64tgGmB5jjvmj3aYWmxjXyjiRdutorZhiShCbUhP2g4caNmk72LMuV1unUZcjfDJ1fTe15srFwL4FRzcyQd",
  "key1": "4JznoTUScnv8Jx9sh1fgFuHzHNAKN3upxrAa7c35mn4mDgnWRurjYDeb8B2AyJmzNMAMquQ23UryYsTN8RoWJD6r",
  "key2": "bN9LE8S7VUnHoNFrhinxwJAMWxhvfYE57JaTL6vqXbrLiPhKQ7uT37eCBQhFPV8Aoo9gTGzXdnYRcprHwTP52mL",
  "key3": "5eZpAMNZJEeaigoVfbsTzhCosVgA5J9KNQcMA71YKEYJG6k7gnsoUdb1iEGbnjnYebrHSu9uq46cDR45ghYbhi2X",
  "key4": "4jz73jh6rzYd2QNV9bcTTgqWWxXqG8d9yB6Deg3pyG4WdnYNt1S3YzNGv9ksJhgbRk5hmCpBZaW2YAPaHriunG3X",
  "key5": "5ZbMqohjj5XJMKsmqs9RwH1Ab7ycuzLrsmwo1DDdVdxVeW5wZLHSCLhrKNLrzL39RYqw3s9pWsWJRymcS95ajVeb",
  "key6": "8oa9eHg4xRXkBw3iCuXo36u2WdyjAGWW8sUi6nKDESYLrnoKKb5iFMYP52mCaGbGWmjyBskWHFmGViYUVFVCVW2",
  "key7": "37Nvqif63cuio6w7SgUKQBFhYVhH5PtWXBHvcYWYzvWwSXe3anRTToQgcRJBCGaBPgsNNrmvABU7s4idZCvw5hgY",
  "key8": "5krh4JEXrzpNraBrmvVk1doTW5LoJaCSTd2GYhWcJGpbMCeUco25TQ8PExSfnrd2V7K6b7sU3XYQF2qnWhHa4AT8",
  "key9": "2Nj4bLjm8bUDKigKM5eGusFy8T8uwGenAZDeAX6VvpSUpn8boPwJ8P1ucYRmtZpeA42Ry6NSGXpeJBsrkummqMNT",
  "key10": "J5TPqtFVgyCC9pTmHGmAS2y5h8ZGrmxPPkEsENn8iRwuaEvcBxnLqyzctWpieq41s8j8mvRPvEJHSRfoosxCA9z",
  "key11": "5sPbjSyPUMTfM1kBmZhmiq7LNLk35KcpXVqd8T3QrVbUY6H7zvc6c53oUEcmh8wvM7NoSqWWikW9hEi4xM63Empr",
  "key12": "3ZxBhJJuUT2aoCmMnGWRRSC3qjvNXTPyqWMvuKbpDQFULengW32bKL7iujiDTfT73C6tmCMXvFZXoRXR8xnNGzbU",
  "key13": "3P3iFWqaMByjDjNcvc55WFWv381XjCm9bbaCycp5xXQnhSehx7cyyz79xaT67WU1DPMAth4R2gXhFfh2gBPruLLf",
  "key14": "2x59EmpepfgYARsVNKG4t8B2Y2hJefvdSSphtaWLv4JvQ1NbR6rWdWcRq1gCfXcGD8TX2cLHPeho4AEPj7YBew8V",
  "key15": "353voQUmR7L82XpuHavXkGcmYAFPm7MD3GDGn4pwjQA3Jhy6hE3aZqKmSrwatuf1oqBzrwYZmQykMzKo8ivsu75P",
  "key16": "E5FKvyMqteZb1jidiQ13sQVommGDDQVc2VmSLAjSbzWQmFmfSe2TMWYH3W3skEimZWAMoWw1UjSMiHzMu9riRHV",
  "key17": "3QGWRGpggE1DNbpE1nBXcFWKQT5uRDfZeUPuq3nzBkydqGRY5uHhhM1DYyG4W3HR45yHD1s6eKrXKYs5Bzr61VRE",
  "key18": "2HtfKTieZvdYkCRP2q9xCoBXTLCXZxYfrKgHjgWcYd2V4qnp8SeZVpkahrtenFU7xZMSs33rfj65niZMzQZcrE4p",
  "key19": "2mK636s7icVah5hcZoj9L4eMPXYN2CuAZyf8XZ9VeYRbk9ruPeEkNVDh7DGFwUdMyxzsizeAVp9HWQeQHsFGJeLe",
  "key20": "3MFgPfSZzjuKQN8zvLoDQtnGjaS1GmLCGJVgivxyMdZRrefmoDKMYjKcGN8op4TCJsBwqP8UkMiSNjeAXMnaXk1V",
  "key21": "3AGFVD4nRcK9LoeWzEawux9Ts98nD9vWk393i7EeNza6hD8w9vdek7k9TCSS5ceCJCTHbrrHecHKgEoh4VCiWbwF",
  "key22": "5utXu9vwPfoTGvkTKRAGJ3Hs9R2UeyTeNY3TwsSzoXfz4oDbqaT8zQGmzwpyvVgeiWGzuBrTdsfUi7hWfn5pKutm",
  "key23": "5zrTmNpSJLRgdXoCZu1pF2Ck2f88R2TVtegHuRRLvZw1B279MmJD2LHaUbMgVCZmUco2XBVazuLLyAXsCS6YGZZL",
  "key24": "4HhjHftHzhS4aWa1bVuqmvRGUvtg8gqLQZH2kvSWH82mhBMzSmruwbDjEzWo4wRxbXgQ3pEy4ZwKnHRksqyCRHqS",
  "key25": "5RARQJRRTuE76ABBGQDofP4KBXhD8bN9DTCiU2DGgBQZfnpXXZ3EpELLWtmAq41YPhB9pFPDU5tUmoNLfhaywFkM",
  "key26": "4H9K1GmQwjuajrmv78ZVR74FrfLYxoCAEaH2q6WfLNjPrgxJjCYGkU7UihZ2SXQimt33KbxGsWG1TxRtYW4itro8",
  "key27": "27PNCSaNVSog5h6FDn1b2f27eFAC7aDrfNzy4FshC7pfsKmi1q1ExvuRtUjLVLUf6j933eyw5r4RoMmUSbcsGzEH",
  "key28": "2qd1rNpwaYGbSvQVcuqqmS8yRW8f8wVtSozRzN8V3LF1zt3SL6puWPRFAbM1gx6w5jS8RF2WbSyDutvmERF5MMZG",
  "key29": "2shA2FStw9dp2kukZH5hmS65iAnxykBNGQb1jtmftu3BUxAfkebXNVGRSY8H1Sfwp5aXKMyRkABT27aQBNKscvYx",
  "key30": "3r72799tm4nrtsxz5ohvTYyt8WCfojSBCdMLLGoJY2jZJiW2rVhGsyqeK7B7rv8Xgew9FiLn2wUnDZ6LaX7Lh44h",
  "key31": "YJaPBTx6inNGBaQFyjHd1zD5ZfzHywc6ARnuaKYASCFeLcNaYG3dkCoLDdyWrcHudSwe1Rh1fc7kZ4sCn7fLa3c",
  "key32": "29tk3o5C7kFFkHQYD7AK76RhAPnNSVLCeYzbMBPXpix4KiGCQ1nHWpuD56JB9JQNrS2FkPJmdkcDGSzvxcBJbwx5",
  "key33": "4nxJkpVYRgJBziiYJqPCvzStS7jXpd5nmcVGjRPZHXhGMWX1nuv9N21Eu4B5rf1kxv6cKSA4nPv79MAa271jp6bA",
  "key34": "ccD2PcKHjtiHVGqECjjzuEuG7TtxgqiVS4yk6DyHEGAXkc3CMbCrkun8DC6W82RHACno5sR8JyC3CoZEojwY19i",
  "key35": "5fzwon1GNnGyKdZvVjE6tqi8GACwq9Ba34jf7f6hLgNV1yLWmKs5339qDk2CPWjdJr7bBRTVdRk1F77kENd4PgVY",
  "key36": "3C5JThvFnB51S4iyjhFy1FAHCrcd3fxaqPpT5WByu6HDEKA7wwDuXY2f7MjyKUYFgwASV7ErQ7TmNvrqC1A7x1zf",
  "key37": "51DGWFZyM81N2nY1mP51rWD5mwhjK4h2oLREtrrtWTFmhPe1RBJYc2V3Vk9PbGtmnSQ6jjs8hhztJmDoCSkFgGGq",
  "key38": "cDr7XSWVA8ML4FJ6uGyCaPukKCJsRdWNgA1hcvFfu7nT1gGrsQpMgXfN2CT5GmvjWs21TVfwXtBYum28NGJEdod",
  "key39": "5Wb4c3qkkFf4nZMMnSoKTNUKqEKdc6mBC5o3DxFcrbxWzMk3ftV2tGv7NpXD1PjnXwHDrSAwQAecRrzqmYKjncJn"
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
