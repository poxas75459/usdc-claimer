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
    "4p6zcazkAdyHss9SPRrFjczh5yPGidDkRteqpmLXkJMPEGSaL2h9K2zFxxVb6uDe8XSKYkZ2WEHCqbXdXBYk1nJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tBCPSc98xNxqFx2Zv8AMt68NZNRBigQUE5BsDmbzg4TNNAUjSep6DAR8Qheeb8zNg2Ac2QZzkQDKx5w6hhzPhK2",
  "key1": "3yBUZEnyFFEPC3avsdcYMRC1PiUV8xc6xMxPhfjnZWbTAHCjtsx5qY223aiGxN5raa4eFcdHY6As4uswCRcBJuEH",
  "key2": "2NBAD6BDTx65d7opLbNvX77FMRbZzk1jaj9tQir9fU7Wkh32SEp7nuGJU4cAw9qFmMXeyUC2SQ6VW7XuUhc8C7bP",
  "key3": "tAoCdKLLYdPyReVPfCGqKsvQB5DESdmv9kgj9tU7Gj1gDUvys18yZonZtN9TQQ97Dnb65Zb49APaaPrh5pJ3kKK",
  "key4": "47KFSUCQ7Xzp6CRS7G4gYPsu7Ea6CkegxmXmnmsyeVApwnrVBnpjNeiRcqnk2yn7jBByV8TBrkb7yiz9YDzoTv6V",
  "key5": "5B46ZqM6AZ9uNCM71ZFEdvK6gpaQuvYYe34T5ncCPtq8LExC2vscXDXBNYJT8xwg1oVS1Gg1EJPjjWXxF9j9c58Q",
  "key6": "3QjxBPPmjFiesitk3HUVp7L4CBneRFVKGoDz9fkXV6VoDArmmccsAEUA35ckijHP3azZsneS5irfjAhkSiNPENxV",
  "key7": "4sPxSxJedA1e2qEAqYCiGuxytiyYKFyGVcYVf8fp2KU9jp4No7kf7wUqWEh1BaiTBiJHoNCKrcGjtX7tUyXyYRJV",
  "key8": "2FQXYVUgNhGb1RsGPTCSaFcY9KJYWmGEz97LfghxdKdQxMoM3XNXDot2R3gBVszrNKM4z97zi9cvj1ebwHZLHnLg",
  "key9": "K4b5BXzUttnE8oXH61PY1BdPoDK2peiMAUndp5GiV7eJhD7vQ77vr4JGESgi7p4sS6omEeDKNZqZdjzgPLpRkEK",
  "key10": "3mAHYnaLjkhUJbeaefFoziRhwk6F1VDnJSqrBTHUf41W9326RaPArcpwhiL9yfAbFf5HiirbPZThtRuFitrUPoNU",
  "key11": "jh52HMGLBnMpvK1wEJxrdtvmFmpBTuXcqG2omvRX7n6wmMues7xXsq8f8ph1Xo9C6z91Jsxeajaf8XGh3Q7JBej",
  "key12": "3nmEdNZE7HybHLCXrH6MjQPtG7ntWw1CaYKRFa8H24KXbNqjAHGNK4AGLFhvQxRETNuxszGLToG5L6pcNMW9gaRG",
  "key13": "5c4usDpySQH82H7djr6cMrmhQg8fXtPpuUpL18Rawo1wcMnC9GA4BBeBPco6VmxKFdvLfqAGK58govtThBWkQGS5",
  "key14": "5Qc9j1w8ZxokS5eNWVTbd6qFmXEiSbJJUQr5JhFeijxMBY5QYWH7PPmdU5EsYdhgHhGZ97ePxLw34b69LTwAmRsj",
  "key15": "4mBfnRhfxfgn8B2nZFxbxN9RjEu5ErWZgfwcuCSpnkp1iQgLaT8KbdH7NKMU45wxbhZxWaphjfi1ponJnxF3qPGe",
  "key16": "QgUChvW5UNcU8pmcJ1SGHGAyF7qcndYPSBp3hcuwo5LSbLxMtFNhCFphSSeqVZzEMGpgxv3QraFDPq5fqDwUPae",
  "key17": "JP7CHaJhnyPov36Zwuh8Wi828dkpXoqJdcoMC47tpBNz1vFAMhjDwiFBoCno29uz6Az2vo6h8EeQxqpLv2SzNgo",
  "key18": "61hQWYx8vFDy44zpfvonoV63m39PAdqMPKfFQ7E538spbbGHQu6PcSHa6k7auJkH63rYUBkHBRNbfpmkAntx3zjF",
  "key19": "57q6JVdwjLtxhsQtmHjKoU2DuCYKKsvCrWGjXKRvEoiMJpcEQZmmCj3K96ZgRbCQJTMe6JzmTwWTPbKpP7yE6oeg",
  "key20": "3anvQiQWAaf3u6qhD3wzkkPYknmS1dS94HrXteiz2dAH9cGcsVuT6Ae1nAkW39LUqudjpSTALZSE7ckRaun8ChdF",
  "key21": "46VGUxp69p5AB5HiJkf1UtqDBPjGhe8UMPoZLq96KQTJkfFV389sZARbUHpCdQDNsaPP9e5uNcr3NvT5rS7rWCh2",
  "key22": "8NVWeurzo4CbJQzEvLrkNSDyGnrA8bTvjQZ769L8R1ApwQBYyGeeUaEcz8gazauTAQoBTVVfCbAEogD4rGDYsZM",
  "key23": "2avDd31VGDD2i2NmGiAfYoRcgdgacnouSm7PaE6uKApNj5wMDxicNDSXiYshMfwVMCAtpH12bkMXn5SCC5GPjmfc",
  "key24": "4EWL963W7C3QW7sCbWpneBoLjTnQVMuHmWoxb4jvkLBqrNemfxzCzdCENvMm4dtE2kBxyTDJiRbyqdJb7GG2debp",
  "key25": "5s5zf8bBe4koM3f96LTKdymkFYP9QrkAH3UePyM2byLKNLsKqqhrsAfYPPgsUpzBWzkPPMTgLuKMrmq2PF9EHMD9",
  "key26": "3xuHo4xKCSLsm3DzZ8SrzfAc3oSSVpQQaMXBwM7Nmkfs4U97vmwwkSew9JV5muVFFh85dXA5QYsTM2wwbtVGnBUR",
  "key27": "3RTCRRnAvtB5U1mH8BRkWQEn8ksxRttPQE6WE3azvbXtMMVAqEDBoMiQJnNpwnoAkGjvWSQrxWAbVrLoek2TV4FB",
  "key28": "3Vn7QDRSKt8Vjg91XkcwXyt5ipjLL9o9z7iEb9yxWtD7SnTWsjqwujLv6XifQuVqF5WVS9enR1JoCiQm2NfNBvDw",
  "key29": "35DC1hrFMSzoLTnDZ9KwPLvoPRAzogwR8cjgpHf5ouUVPtB3t2cxqikuHS681ViqszdYdw9xkPSz7ofke863bniq",
  "key30": "hsK4pvnb1eUrDPa4zmhMRDNaiZ5r3jSzQuqZj8XUkjRa9FcHRFi5ZMTgkTH11xD1zhUo6MFK7xSb2qxcofLds8U",
  "key31": "3m8EV4qrxe73oMM7kPPrBzkLNjv4QyoKh2r4Nwdm7TX2zCBW2K9EVyZZhJpekgeGf1fxam7MT9RvxoaXZPoALW9E",
  "key32": "4szdYqhbpMfksGNHTyHSs2vBA9wDMjhS7E2mhkD185pVifSMimWfibPAwp9qRE9xSa3YMidVD38mbMwBeARFh9SP",
  "key33": "kNhifWtaeQBDQ3Avc4yFasAWoQKHXFNmgBSSautvJQN7H1RevqCRjUN6yoBrJWecNUZaUUY5JRLxRUV74EMGGws"
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
