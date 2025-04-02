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
    "5m9XGAPfh9mARUgbkHNcCmRttaGguDCZLwEdcnthRKEBkQKjTXoHSXfySBRLzHb474KYWBgkGYpXP1z5FfpEnjit"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n3kkLtGySECmtF9Xw6ExpmArGtcG4cqNzfNVpDod5nVCpnEXkfNMFhbBJpcGiVBEF6oX8kHEdoC5SsY6BDNdaHQ",
  "key1": "5bGEod4hnBF5AnaLTq1rbJvEryEocezYKpetY8WAzHuG1CvJugee7q8ybCefmEXiYTuezwXQU5mQVpaADJGPyd7v",
  "key2": "2uLS88XSyNXH2VZQuAMQkfVWoTPwWyrR5sPpPjnD6ZmLzbQXPXv5CNdL8HPJtX3LKBy1BcHVy2BzGnhG12WpEBmA",
  "key3": "KYU4um4LmTig4VoT5o1ZdkdRPJvMUnQX6EEF246AF2K3XKnYQFtKWamke3Wg6XtxFwBPsj8Za6wzqy7p3vvgyxo",
  "key4": "UiQofFFPh6BiMoVQXs5FkKe1GbiQWaC3xSvzrS7ZsMSAwqU1oRUmxbtKregsroFMPt1cvKe9n5NNvcSxnMZH5az",
  "key5": "3dUxx9PYWbqFo4FJpcV1WTyN7wY6GkwC1SGcMGtSRuTQhTQRjvstpZH6qrftooFGZadyWFuELBkypHs2MyCzjEjC",
  "key6": "AKkMZ4iLUebqpaTKhyZKv1p25mGwbggczwo6X7tHGH8485VLvCoQZYk8mX1JMZdhumFetHGTPKxeC8T6c6pj4wu",
  "key7": "334qgEtg8EdPTQj3RZQNAn2h1JJDe1tNvd2LRAgLMMnax6Nnwyc8isQtMDV5yDVEVNBHEERgaA1sED6hSKxTXr8m",
  "key8": "2Jm8ub8Y5B2eAo2LdDKZqU544xdpoqdoCAfZECf8guUtBkdRHvBVzTVGRstMWQejLrXbMLPBaEAKS1MgG3kQCnsG",
  "key9": "2DWUQaDjjjyZAKQkDJeysDL6okuyhSoj4GkpBGQoXyVdZRGMBTEmMGqTEwXEtxfiBU15T89XBMFX8Zpz3XB1os6N",
  "key10": "5TJp1kkzUfN7zjpx6dAqSrkByMKyEmVJyzLG8KXrSSAEQcS1dybSpNcqZ5n9AssxUZVffSju4yL43BUu56NjS2X7",
  "key11": "2ad2pLdGK9F4J2SRqLpFeDrcixqBHCYWqAgxBykjTbdqvufAQjCNHMuQBzcCgkDDz8oNeS1GUyYiLN24EpvDQ31e",
  "key12": "4yEZR7WrkzRtvxLnzv5pWz2oPpGucgiPTam6LrfcwYpyyzTB2YHE7VdEcK49z9HFQ4CPiN6cUCRzdH3YdjYLnrvC",
  "key13": "4261qfDfnxeLyYyrknozjvBRKiTAJ48H76S9gMpSoitNoCBe3467KpeedLdPbNvSueYQ7xL16oCb2xiqEHBL9e4b",
  "key14": "4PKBn4ujNSQfsFR5N8jhzpHCqz9riDEJtsvTz3ytnSc8PX24CAsUu3zBvAH3gQ1c41WKWfTm39sMrxT49k2Fo8hd",
  "key15": "2vNeq9Ey7uUe8jUfRWiWwGSx9fDV99KJf9F5e9NNb8mmuqsgEtASMeJDzBtKykgD3puBFU6vme1wtyps7s4hdxNu",
  "key16": "3VyKZtsiyxAY34GNT21JvZXN5dWmNEA1Kjgddp8VmzYSz17TEKTXGbgQDHhc5H1EBiWJJieZZg3mFyLHhGYNkk7i",
  "key17": "5xGvoegFqgpixQXfFpHjeqd6WDtjbbE4e8mSzmmQy1aXBVSyFRPVdLrUkvJggR1pVH3JmkR5BGyy1xL8VR1hkuxn",
  "key18": "49m97ETEocBkdVEQSjtv3kjMzxThgGDUPaJgp4o2xTrtdSh3NasYLhPTWs53XtfkzZkChahZwcdz5Vzu1uj5oHGJ",
  "key19": "21JHJLr5ZD6jt7kjWh96KHHpmwU3rH6FnFqZsBWC6fT5EWW3ywbiR5XZQ7k7DxpGtbiG9Z6Mk5n4Z46ZjFAdRDwz",
  "key20": "5yVV5uwd2nSGLaeoj5keKzKG8wmh133bAn9XcpkceiWiWnNNhm424f3jzM3NJ6TNUysEjrUCUb6oDXHfaGBAojKk",
  "key21": "5Kyzy3JnogrTabrW9K5BV6VoLfPoKrbS5GAtkvP7x9i33cv1bBVB8ck32WWXowFyJvK6ewETNzku3CPH4Jd44szT",
  "key22": "5sEkfopZdmubuRK4r1VSriuNtGnMPYXe5XgMzwbQhygSKKjQGso8gFNP4Tj7GcsFFmAfXVycrvm3B6tzXMXuyUKi",
  "key23": "5eP94CGnTKWPQ56sc94mikF9rQTLJchdFPK9SFc2bQMp3JQRMmVJimTwF11FktRTF2Rp4hk9SPW91dn4fRYMiJsP",
  "key24": "suhta6fLvs4VSRqQmRFPZ2Z1Uj7FjWKt8dqtXm27yPhtvM22rusw2JKYjsEy3V6NqFhHuDwFuFYngjuR8LkQFPu",
  "key25": "3UEM3bZQXfg9vdzJrtYEhcxUWn4gpdyr18fikMvecFivgShBkUYuE5TpFMkhqFxcdpD4eVKrvU7ageQBDdT2aq99",
  "key26": "4kSBuBKRGeRHbGXEBCoZZRpMPKs5MJwgZHhvoMrcqsbtivM82TmFd8BpUq5Ur1LZWEXhwjC96WGQo3jgTfujSSuB",
  "key27": "66ok8wJbcewPDhKqWqJzL114VYJTAY8ZWj5cQ8vQs78rSQzzPXQpZVbaaMhySR7y1H3g2MjR971SGqjvUytJes1o",
  "key28": "44VMAmPnodj4aib9Z2RN2a8h6wRhAqXu1BJ5VVTKsC2XjQRjhGcuz6V8kz1Z5Ljc3u2YhVvqD8ZK2AULdxvsBAsa",
  "key29": "3jjwnVHi1JdFZPr3askaMJbBvr3ZZWpa3iJUGhEUwn98YYrhBv54e7EgJvY5WnpAb4fiCAzw4XjaixVd5EuMF9Ly",
  "key30": "32GAngutvubGofSNt3Jvbf9s1wJ6WbqsHdi19Lb2XheQhZuQArJpwzF3kgCvwGSqNcYeCY7VnsXCQrZzsdRY2TWQ",
  "key31": "2THG4pHPVSz1SuNVWW8XvyLhLeAYzhw8umWxp7vKfE3UrfHrL3weAsmG5JLnR4adw5smVgfWVUonM81BwAhJNSb5"
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
