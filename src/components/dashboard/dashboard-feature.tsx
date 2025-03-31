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
    "4xeKHiwBD9eknwftn72rG8QiA48h74775RxjmmSUmf2BoW1mT4BATCycMwT3REZjeMKiTpER4C63TNKgg4eWTGcr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5foTob2HAWMxajNS1nctMTTb2oyymxyyyK4oWfH6vF5h5XhgJpyUA4KScy8vDVBZmjWG7XhKVPkbhd8UqsSP6MaG",
  "key1": "35xzou8bD6jWffNBXEXJSEzyx9jHRqMU7NyzrbZ8hJsAypFKv3JY6FQqjQUHeTo5w9t8mk7uhDHpfowZx1HABVWp",
  "key2": "28YNMY2oLAGTqKZnD4dnJAj9dRQEwGcYpA6uvNonL8aFkRFsaocx1VHBf2onRZaPX1qCi4fPazC6mFdWDaFuqder",
  "key3": "3gMzTbzJx7V1ZdVKQwGnrKtWGqUWLxpbTdCG6ZQH7RZmrr8b91GBrQPYnXRAaEftB2YVLhHDw81XzrNcwpZ6kp6W",
  "key4": "sKSsSwXRBWnVUwefttLrwWt5qo3WbYdPw5uusR4irEh1Nmzkn8WiTpEeu5KUrRX97QWaSSouY84qqYHajCVqjwE",
  "key5": "3V9zfjqrbYkvPFxKRe5ahJmru4JSVqavzhfsKAsoLdyJYQYVmwM4fej4mnfjrJGHLu2hLHmdbzNP4BdKqH1QVuhE",
  "key6": "3mESwzNtMsmkckVicX1SHq2f9i7GdTQ8ENgBe9yv7GENPx8uWPhCMe2JFvihE46PdAEWbutWTJ3x36tAVZhpTjXG",
  "key7": "5w32uevRvvhcEptJSdUw75LkQSWZwJqXWZodZhAXHTA3j3cecRPhxMd1bqamvRVGWTFA5CrA7NbcvLb4Kw86YNA7",
  "key8": "23kWQRdSWGLNZqvcsZbw8V8P1TVF7H8k3HeXm289XPnBgZh4VgJCpgZjWZRZmkVAMnhHQTeygYpSkcQLY2ZrfVJi",
  "key9": "3BChnufRxrnwHYPLbbESMXe3XYxgGGeFMBFRx1pkxvCHKcjKZcxzXzLamKA695juZ5UeJw61ji5hLXS21yCM6A4y",
  "key10": "4pYA8Y33mt3qmsaCfokJzZD7VqsCZwhnKVVLFCvAzFsSP9SxZwBztzxtgrMngxncxm9p65FXe5Aekck7Feg5XeMq",
  "key11": "rMHBvJ2pY6UJPfbU7GR5TKEB8YaXaNmM6BruTubQNoCSHNTntZuqeRmXtpCiyc3FD6ExSjW6NXUBoumpR2PgtnE",
  "key12": "wmKbUtgbEdzhyHCnEqBtBm4tzRAHk1M8x4fxi1s67DLcobzy5myNfVwGWP7PB62RYNzkbhzZ13LWFfThZEpko3V",
  "key13": "2fUUGQtPVAF9wiRJCA11VekfXmet2YqN6aYkrHaa5m7JGA8eC955cBMMFMCwscSRSGZ5ifmMoDhrKcSQyYtPcSyR",
  "key14": "fhLYBuWmhzAxVDvc2vwe76KUKeh6trUCwrU9hGnotXdfxWSbxUxbCzCVmopP8S7tMsE2mZYhpxxEiWP7YBXyKjn",
  "key15": "3dco4ZDrDGMFpgc6FmsFCRZcc7JUBfeqxq4BDP8acvnuDPuRYbXEDzBtpC3Nn3qoZ9R5MUeTYJuh4sUsuQZeQeik",
  "key16": "5gHJuf7LxqdBTCYeYqHpf5sLTgTw3y5u6hXMBEy1tmE8QF1aAULZe1L5zYGkFoDnapc2fX2WuebaqWCxRki52DjP",
  "key17": "5SgAFmyzL5VVbNqK8zUTzvhbUrE4yDE27R4faoPJbY81oxbR8qVxWFPvWuXdPaLqN2RNoAWg8dCsTyR3YPgbpvgk",
  "key18": "4jdcH6GD5nZVejiHQqQeDemcbgXz5eiFkPg2VghuH5FTmawJtTwugbEfNFmDYo2J6HmXnVQKLajQ8T9DuzsZMME8",
  "key19": "3HWw789JYtWqdrCAvMn5x7PVSxB396rPXKVHWCHCe3ErVneJzz6x5PprwBt2HHgKLuYxeiN3weyG3LRvXZau7Jmp",
  "key20": "2T9QfxSs3v6VQQD3EmsyG3TipBaGJj5TfKTTx2zCL3TMazKYpc5Z66MdRtxTiWtMEucFDwndE2xBMmRbhuuQ1j25",
  "key21": "651WarDTAhgWAELYtgqw2rubLi8161rWKpzTYEiPezdCNftfjsNvzPkgWyewUUBzsTyXFG72w71jUSwLEL9sBVu2",
  "key22": "3DpZ2fkBVAgSY2dqCExbqCYPbVJVHBbWZHA3SFTLn54BtYzfxk47E4GLP2aFkNQdbAqja57UWLVAny5dQ1GxnE1D",
  "key23": "5C7guqVLGZE2iZZ6yzvziACt5qrH5VbX38Sso3wrpKbQyw1BnRgpjYNCEHmQhFPGYLRxdfncVmgmpxf6WaeAouj3",
  "key24": "2AhfKpZPrnjMJ28Rwp9jcrkCQ1VHJYNbDtQuyrMRPdYocTTHD6Pgzhxx5Y8SuFcXHqE4eEBogvs45VHEjvTtyGGn",
  "key25": "2VZExCzzhZQfbEZB3jPP5bPKYAMX6dy34yxs3SMVNmj62Tk42qqHxUthAydAaiKCQmv5tegtKP37SP17LNA3tuFi",
  "key26": "5uPNxYjxsz3vzACD1diJN4PSsMoE9bhggAzmHbZgWNnpa74fmvsk3a162yjvihhRgdE9JaNfqYwDxK7fDGUqcnRC",
  "key27": "5q5zdXHwhVdVBHJ92uC7gBciAJXeozkwgYnKX3nAxH156YMKbaRhELtchivkARdoBbJTasJvjNSoDCJa6LufwDTZ",
  "key28": "3YZ86CLHhpQJsoMY3oMdYWQMdohTssDsQ2Mo9Wmej8KTezn3UJrd9EnEH289u7kHUeawGVapKDHEsZPDvL4GWt13",
  "key29": "1QXNfp2DriXViwv61ASz8EMygTvAnw7Gk1414MT2dupaCLb1XgkML5ek3pH9MDncm1Y94yWBWYjEKd48CVi2tF1",
  "key30": "4mznvsXXvYWrGjwwtjLKqrJiLy5KgfLRBYtu6iBQVwApgnjmNoa7fEmbLqDeTeu1XvfNdw7p1f7aoUK4qLZ9QoZD",
  "key31": "25kzswMmWmwtyotA6rERNbNSPD5f4Q7GgkNNpAYiqhpFTpbmNirE3zNU6FsA3owFU8g2nB5Xxnb3XEfZDX9FxWSL",
  "key32": "2aetniwAExWiWZXAebVbQkq2Dkyh95J8TRSSsoSRuZ23KWzLxHDTcoj9DcqqLsQWCpoJSSJQZeTfcLVuhdoi3Btx",
  "key33": "46ZiRo7Xe1u9WQr64ndjSuJE8GkWLgitCnEUwvWjDuzBxQTk7gY63ESLNEf29pyzyCPvdCZ7JwvfYTWSdU2zrmyV",
  "key34": "3Embzz5LRCAkKBCtb8CrfG8ai1CrMNg71pAHCDpvHroxZiA7pCKhnVVtCJLVKvw1oSqXkC1Ub2NcrjgmzEboZPWi",
  "key35": "2pMft4L3YNpXrxefvNiDuhp5EtdCXzw1tByhfebSoJzSam1TTXyzForMzhiVcJehH8N49U1viWfFE5LgR31WBh7Z",
  "key36": "4s5kpJNZZhRwLP7QXy6TQCqfYVbvcjMbba2jD11U3876sa43WhHWQ2dxR5PzZvYTjKLW6gLEVckiLVaWKKV8dnxj",
  "key37": "2EwperFDXv9yeBehs3PUNz9KHXdpqHyQG73fVXLCkpfvsEoif43rJXZZSKoBH4s4pfNoXoSVmLz7n9PemUGnnYkR",
  "key38": "2MtLranRF3XzqHxUFwPtGkTruy9CA3DLvT7NcywjsWYde4bsyfXmJwVuaZfWuaSyU7t4ENSKwpLYa83WfPP8HV8e",
  "key39": "3tFVi5b5FXFVXoV6bq8y9czJgAU5QqCDtzL4fbftRvnu6Ym2Gryo2zmkGPMUDECMYkwQED2UPPdLys1Sny2a1cFm",
  "key40": "5MuUnh3UkWFkxHtD9vHQBUKL49e1bs972eP2P1PsdBGo5pg2q1QF5C2c2BJNaRiEV2w7B99jeHhCD1F8tLUgCFHa",
  "key41": "4uL9SYjYs5UyS3rcZ4JyqFcU3STteNtDktXP6Rkz57Fq5FkmfFbhd3J7TpFz683wTpgvZF67MRLETGStARqBqqVf",
  "key42": "51T1DSkPhZsJpvbinDZMULK58gg5bwGBQsNjt6tQZpM9Sw8fUKdkZfzXY2SsLUmRrHFpWGNYXZcy8NX49DYeM12R",
  "key43": "2AZzHNqBuKeVrhFx2poSiCwkaQ7sf68ALMWUvDoM6vnLEruy8Y1CSspmpJcni2gH4ATKF6LcoUZUvmv6EQCBVN13",
  "key44": "5Jpx1bYedsuYd1i4kLhJBfwwa9mMtdgPzfP28uTXwpL5qh1gKyqjo3TiRtmzUGVvfbdYvaabUi3mDYVLrobfbQPg",
  "key45": "3Zqq2b7WKFgQXVWGiZ7gp3Buxwhj2euu7hGFPGXCFruPbfwa8V4GgfjzyGtGqe2FvYtTVUeuDDavbb4y3VQzUNpJ",
  "key46": "66vSSs3DWBTmAcjxwoTRLUdXudUQmQgMvZKwDRbGCASbed672Tu2Gu7shNBDJNVP4QP1s9ULPzuzKTpzsnWnkRNM",
  "key47": "4te2WZpJCYH2aQ8pVbFt8eLcBUcC9tQ4CSs2xi2Ycw2HSUbLyKD2rX7ME76NMiv2yeqNL9tvEznCkSkgfaZ23vqt"
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
