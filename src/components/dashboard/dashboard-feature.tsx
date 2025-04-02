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
    "26pmNJwbSLnPVoXFeooDi7RQdHytfGEhEzXmzgZnGp4kuoXaryMWLf1Xcdt1Vro25UBh18SuS6kT9DWViKb8i9Mh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2akETvGHTDB2dxYchmVdUWJnbrXZDyuDG13Ukhtc4gLFJczbiyHHs9iMca9Hue2w3nh1S8bLiNgyLD72v5X27pLf",
  "key1": "2v5oK197FTnVtHtooU4EjsQRKGiZj8Wuc8jFEk85XBXZJcGZ5v78jrg3SGxSWgVvsU1xkT7fu1gv7Ri5rAFbQ8E1",
  "key2": "2s1iiJkAU4WgKHetWaEQGQbVCRyHK58fFCSe4QK161yniJngJJRCxZyv9rnnuqfXSsWhjQipC4Ki2ZkNZMRDwEXP",
  "key3": "2ywHYMKHaXPm2SM362xEXnFZ8HFRkzrt2vf3UAZVcauJ7XLgVDNWLgbR9JSRdgpPtkV5TyWDKnSxi2cfhA8UVbZ8",
  "key4": "Ct7yfvf7gT7GzBJdsJLJa2q9qNkYo4WwPKmdajCbGRaN68NnacfW6XN9ParsrL65XCbvpCHWSLQkFm8j9MBAUW4",
  "key5": "H2EoypLbLfZDAMZDrGV2BPRpysxUcJYy3wtEWCMWmvKE2oUZNeZhTtCCpY5yvcVXUxddSwZUpL6ZFQY7nQkPuiT",
  "key6": "7vrat8gutPHM8UmwjjWdtscx1CYas1izhVS6iz7huLgL4CXmeqQRM2miSznmcdh44ufusp7KbCLP5b3MkKhmcqS",
  "key7": "NrUaThhyHknTmNVVYdw6jUuL6mP2sW9Eeb6dxqaFEPnDbnxaGUTHMfiUR2XRLD9dm3FYHW1WNdEPEJSEX5MABGh",
  "key8": "FjBHK6XcDLNY3Wj1EcrCo8mWAdU8ZiZ2BUDkhTVW8hK9EJ5c6aewzpPaXAiokDWi9w8YjQdnLhwrVifFuwaqDXu",
  "key9": "4d9YEewGmfpKw4zTRYPPKLEkqY5Mchsnc6ABbK9XFMpUiUqVNUHDAk4xfpHKX2tVQxGtcmtWctUkcMTMe3yKiPsu",
  "key10": "5dgSYnxcLYyMfFg5dB6UBAxgJtMN81AXB8XhYTLAdJyokAK1N3CxvCkUveRkwE9C84Qt2T1JsUkuJeQKNjWrV7As",
  "key11": "24kkUGpLU17WP6jS2E8tgcpHcHn3yqvM6wsbQcqHSHPDQknnacN6Rb8NmVv9iLpPAy8KCAvy19SwiUw4A8gzBbVn",
  "key12": "2SFWmoQgk9HfhbH1HwDWgSNmJK3Jsce95H4kzCC3JyNHuJExtxb5PeippLHfL8KbYnKUWtjdHMz941S8sT5M5sz1",
  "key13": "44Af5AXChkjGUEqtjD6NwcrMqYpoFgA2AwyChTNeQp6fD7Jo9TTW5iFzmLhbkEcjTDTNrqhW2yG4rKzHK5PqCce5",
  "key14": "27A1j9Ya7wSRtp3zhs9vEPR7rzs1zqdyyVPpoMggzhvat1AEftFVxrp7SWZTCNo9xvsmFNVj4HgiwvaoaYxbQDJj",
  "key15": "4H4KpFeLLBntR1iopAHeU4bTnNnjfp5ue9ShQ8uS6W44kGFzStKVrFbUT4d71WaHr9G9V5ZJ3iT3gpRtQoiywuvf",
  "key16": "2EbyYeu6kio3DQ5Jqsz7jfWDDpxJ69q42DVnxZi6XdV5nUx6AJ3kDbM2VELG7oQjZqm7BR4FCd7H2FHsPfp8DPgP",
  "key17": "ZxQJgmjRDi9MRxkGFpKA58B4Nc7F41hdeyMKz7P8V5VcV8osr6nKkMvrFhVeX6Zkdi71o1DzLGPrYG6yDfc7Hn7",
  "key18": "zxQQaWepRVZHCFPzUNxAahMGrBD6WHZFpVGFLwqciXwwGbPJet5yvYKhxWkkeCnWihvaB4Jem3nrnjFmwHqZNdt",
  "key19": "63kWZKt6v32WGUYLKvEDG6xVuzutSkNgv9GmniqzQnW1QjFxnYG195UvatVCSPCXgPpsDjFz53RuTXR4gPk3tXTj",
  "key20": "4G7jvvYUqmcxXTCtauRUVD6Pzs3tQp78jdxPjo9ZSbRnMuh9eBMh3heCfNLhFarqjBE8TKtwbwpzTbQRC9aM1Umd",
  "key21": "5Jt8LLts7wGPHumte2Z6tRPMSMonyhPCWHq8s5hdyGRnXnZNjScgHc3C68W5zsVCxQyyNocQv9sTZVitrudW5Peg",
  "key22": "3utx3uVEVCBPVm6YNLivcAuc5ehnnRF9gw7dSGEJJPbWXQ6WdxLu3fkxrU4ezbP7QQ34p4pDFkF5aHcnW2ikfT7F",
  "key23": "3BXuS5tbFBpy6A8zMNoi4akJN3PnpRH19ZJusNjz9getKw8Wog4YUy3Ft6MCs1oNcXNmWoo53UHnoQJHa3L16cwz",
  "key24": "Pcsv2tvDCDcBQF45wvZjv7EoxWhM4PGCqrExJsNpD2wXqYBzDoJnbJBsbtjuVxwHbA6b6QwckxLr5ME5CjdtJ7n",
  "key25": "3AmZBGprWe9r3r9n3NBXXsaRikVsTfbALFrHnA9XvPgcVWVZXRS4NGYRGbQbCuCaxP4nJaqh8S5xyj8PhJKmZeXL",
  "key26": "2kPbjCPVXE7eAEB7HqMeeu3ZgJUx71JBe2uy62W9W9XtGfaEHwJLSBXGDZYySTey2gVuAw7dkD65KHK2iveoHUFG",
  "key27": "2xo9J6MoSmFv9fM5KevVRPB49kRv7DJZjMaKeo1tzhPcMgDbq6sR9JKNum28a2M5iRxsErxJ8re5STmQbdvzqX63",
  "key28": "45vdQ3AnBpZY8hGTyKL5NEax3sSSte8s8jy3PG3vuc94oi9u91gezvAcz2DBibYLyk9HbCdMp3UXUuueQ1zHng6y",
  "key29": "3fkYgXwmUEuy1LF4BAhwtdahF8KLguoSKpu3X3iasaAPUAniYPVJLL6NYoZFRggA3vEgzr3Mq2dXSZxVZXs4tLWi",
  "key30": "8BqieVGpUSWkgaKBoRZp6omfRDkryZkd2NiadyyMVpMrsWMxHE5nbBBtKwwi1YjMXh5WxH9eCTr8DoA8f2eVjUW",
  "key31": "59C5DxrdjYxHH97g29Zf4v29grCeFJHjhk4dEZi2qZbqFyLXkSkfHgh193QHcCDhPEUF1uAKH3LMyzt7TSvMoYLP"
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
