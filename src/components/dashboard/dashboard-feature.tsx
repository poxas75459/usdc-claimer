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
    "35fFchtQr8z95qyBcZfcjxJQAc4cM44Fqur166BpVmdrVn2X8iEdjLnQ5BpeyZPnPffZmHTh2GkfTb8xwF7KMXyK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i9dsAJxq8m3L1Mda62zLRbJuNUkuKZwUoQprZFDtYJNb7uzRayF5WoNkujRCzpGGxvZ9CGjni2B6n9gSCmmzFtt",
  "key1": "5qC5fje2mawFhtUpmDYEMJhsBBrvpWGYwvVJCWjhn7om6ypUWnDRcWEga8fDf1iq6LSYWygqERyhREstGPy8WKCx",
  "key2": "3cSgoa8AT7JVjVoh6B9Cv1mKesu5YBnt36z8Qfc7uKb56JjupPWZPWtsqGsa499tJAdvsfaPddeCY44ygpSaBykw",
  "key3": "5NXT6JNFMMMzJ91CJ2rcd863EAmefd3cZcxsdpB4E2Dwb38s57utmz1Y7X9Tnr3LcTCBNtyd4S7FKzh5Hv5TxZem",
  "key4": "5H6qZanDB2PkVEJ19QnvsJ5mQ7iGwWnuuSPNFtLSR7Vvj7ZxZgWfstkjaMTQBeLJdjYZ4BGQZTnz2bP5HbF293kQ",
  "key5": "FjzUq1RUFe1wMnzmVPVfwVZSPZru54eHSQttXKQcqjxX9cLW1NgFYQMvXaPZaA8imZaEfMK3X3Ajs4MyZoyGhUN",
  "key6": "2rHcMSgudpF9cgT4L63Ve4EcbBYxiMdNYfJj5VacGvmTQBnBUTuPY6FnvS8Tt8tmXz2D9K7ME4dchGr5dvUouNP9",
  "key7": "65hBtea9wBFrbeTdv1FpZQq3nipSEfqu5EdoE2BWP4D223uek1Zq4JPU3puJdck3B3o4Hq5mY4egM9oU1YFGU1DB",
  "key8": "3z51eNprgEX3AwUommYRqebjMfLp2U4rGjFzuZYh9Zs35gNRSWJEiQnsvtnUrD5c6DgGgVj8vCCirCn1G2MnytxS",
  "key9": "5mVEhvpksLEMG5CtSD7NjibkaDABP1o4z5WP3i41szg6f26Zc4PFzKQVTUBzg4SDnGVmQsnF8qkzNpHcvPXSqiUE",
  "key10": "3sAxXuutXF7zMKj3nD2kkiLai51BZws5CQDho34zJkubAnSxgtRpQPKkrhi9dSm22ABD3J9623378Wty9x82XSFd",
  "key11": "AMyCf9QY6itsV3rjAuty1vdRCkh98QrcCvP6ZNWGexTuFCSBW2y1B8yLXvACQCJuXm1SNJScRW1mtjMM7QtBQKT",
  "key12": "3gBns9FADH58ch9jDgNrh4NWGVmJ7iWKsyL6TA7UFc85J79hbEEi325DfyaHX6ktHtWs2pLnXid2zTkZpovpMYxJ",
  "key13": "Df7DhWAcD3QTQZrwnqMP1w4u414dE3Gs1ZMTcu7HgMNhtCtSjs2FBmyWg1yWQFjoBhpCoQPs6jA8bT6DuHqVhMG",
  "key14": "4dKRXixPVdt7ECy5qQyX1nrdAigX7GQ7ywAiQqxjb5CRqdR9nV996XKbGJS5upHTcrC7GeBDFAJsVEDcEEGB1PQC",
  "key15": "4xnUPMJYwNR2YLPHiG3TbVgjWLpVRFbkGA4Pd2e2rYiVZE6fYNKAPG28YVSA8GJpFM6NZTkaSwpYgLowXLWejB3A",
  "key16": "3mveh2kuf5g68omLMRSRp127esbU6VXk9UPszHcJrT7ZZQPyKZHkoLjgfYEPPGkCpLdWn5WDdLX6shv5RuW5hjZe",
  "key17": "2EUhrtDC86jaS6z889Sv84ZYWn6fWPM5HVqtVGRbTdU5pjYfBrzVpuY5pwnvy97C9Ty7fmao11AH3Lfc8gE1HVyr",
  "key18": "65o6zGiuCZFD1xbWQREUcR3CpWW6ERWAEbbsaDuh4UEQER3LsjM2XQ2ySNJaFAdV4ENXnTicLaxJXKJpjkKoRxXm",
  "key19": "uNx3MEgmbC4WAQuGHtUbpSHMDXFY1gBuSLzspitH3R2nE3KAhJdmFFKW3Egjok1bco8XUovjRBqqG3YNxqzzw7P",
  "key20": "5i5bmF1etejvyEHKBQEyUr8ERTUpTXbmZrXFVdSfKEzqesvDhWztDybJYBVZGu33ju1LGXHstjkZdp8eRTGrfHxk",
  "key21": "26kcBnaSWjkGHikKzS2hHABVuA4K4oc83b5bRF23XR3W55tJzcxy1eyeNH2TqnsGPFoceEhBKNYr57BiJFHbxcsg",
  "key22": "5MvXAEMYAQ5K3r4DghuCG1imGpMzcwq1MFq4hEfLxHytNRorL7JHBBqnrW6mwMVrHCXYArShZiEdeUCKbY6abw9z",
  "key23": "5f8BgJ7uUr4cAWnWDvXKkbXw7b3a4WZGUy7gb6yDfyfwByEVNyfgp6bdxK4DzCDBLTWQCHU9xkPSsMs5LhGMmBbk",
  "key24": "4tfRx1bHJtLwBAHZUX7gmos24vwWzpkvcrkEctconcaLPwGFJAkXvfAwSj6v4kWs5gv6Z86CLDoct4GpEbroWa7T",
  "key25": "2y3YZSY6L2YtqeHyyRUUw4aXLj4CNmx9aF7HXGD1m91ygK5C7QUGA5Fp1QWTV26Fx7uixnTbbuoXfKcsRtZZ5ugn",
  "key26": "22GTh4DbqQokVKq96vT4moAL3hskkNsULAgpswh9jMvu6sKwn7nGa8H9dymiRQh1Kfxfc1cW1w19wFqbhL7dhNmA",
  "key27": "fpVRBhpExqhM2p5y85XMhhEihtYutWtPYbcuQsr6iriLM5aUCEH4LTnEVQhgKJTHaYeFJ1S5zrhLMGwH61NMh68",
  "key28": "3StEVpW8razSYSvH4vwhoWneAd9jg2dzQyBpMEWWt8sk3FrJgyooe7m7UmN8q3XoV9wY9eqHngfvfR9Jq4Wf7Fsg",
  "key29": "5UzrLAB4jFk4Rar8VzS6rEPwwhjQMzzpwBhmh8SE1kJoFHaiMgufTpfwMjNjCNkNDsHzpmPcR46EiHTfKm3cgGh6"
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
