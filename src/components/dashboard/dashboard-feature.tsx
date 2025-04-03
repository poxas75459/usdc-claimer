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
    "qk5fmuxxg6Eo4euHjooCfMuhVW95hPTz6ah6cKs21BsUjANXTNsELkcrKh7YMXy3a7y1sAH59ZGjY9MBsRtwbX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x1FwmEcVKiRE8N8mGtWpBAzx6H85BddX1KKCdx74jrUv85kNy3KC1thKN4p9V84XpzZ78bQ78YS8Lt2j4V64CN4",
  "key1": "52UmUjLSQ1GHkJ1v52uVLT3tAvQidWv2gaVefrWJz92YTJykRtv3wxDQ5Sm5sYC8Y1JLxrpbpcSDbJhmvHE9wYHh",
  "key2": "4aT5Tg4xMN8SVzWj4ahCWebQMdaNbp1dRAbwKUti8NXGFzQtVSxxbnpYcd3vgvumNbtrP11eYfif3xkpKHRJpeWW",
  "key3": "4ex531ffBfrJtHpHZMB6adWL22HLQtHYJGHDUxGdeCxK11oD4qTdv6RYnTWjkkexsFf7QCuEy1qNfvGbmZZFsdQV",
  "key4": "5pyPu5ga9kFPCvyyk6TLCnUYMqQsoeXgtCWyhpGJqkwv4e3opTgaiDivANs2GRZ6Cg7fSmh4Z6NV998cw96sSzWV",
  "key5": "5PeuhdFivC8AXVJ422NrJ3iupeQbKccy5bcGDK3v5LosroN6wjuydWnZhLgDPi5YoyZeq9Bo1ZTEdxPbLhrPrUzS",
  "key6": "5P6bCsJvvrtcqFCcff5sqzWZdFWnUupq768S2QeQVAxXEX95nnKWpGb5sTPEQ9xjiV98KaVPJKwz7qAmckQvrKCR",
  "key7": "2msmCVt6unfLYhtJxanUWrumTooV5Um8oidpR4qwcPjWHMvzGDypGQQKfdp3zBsTYByZv1BVSjgxjmk6XypwsDJZ",
  "key8": "5tqVYrygGjXCqkFiiPEi7Df6o6sUGpXBvruEJxGSa1qEd1YcxNii5pdZVE2dwgwtH4Cj7QjGPgiLTmfLfZPyiDNb",
  "key9": "2MaP5P4UTFhjQDEY4gUKpoRUxrQhtRjQ7VPsvKnkFUM6utjp1x3YyszfnsbaEycyKWPobpW2g1WTmLEr5nVXg9L8",
  "key10": "5kQ3hbH7UPcwMMBsUN4MW4mqMaMUdrHVsGtVyi5AGzq1CRZCPjz5MKy8XoqQaVP5EpvBH47unV2z4s3fUXTiWzQx",
  "key11": "4e9w1T5LTQKvYgnr3ZKimnyb6DQzGuKrHdXbGeC62qJA3coSGe5t8Tm2emb2vxXw1rFzq9xjFT6q4LPzpENLzyCR",
  "key12": "2KriP98gvaorEzESBy1MPDvzbe4eGtT6vCmxJKHXQYFs6Lokw7zzYV5mTR6THsVuxqyewRLQYjEXnQkiMyLZy3Zp",
  "key13": "pNKrKgVdGgjScpz5KqPNbyM9GJbgp5bErBeM5RdaiCSCiaeVzZTVnkBbaxqnKqv2DKeYJRdpBt53FvwHiW41MCF",
  "key14": "5NY6KrPmtV7HC3U42SPyToZ7YHg2jQnst5yxLKyng45n4jD42ESgfq39YRmjvtFyNjY2TufgLqY4ozh4q49XCZh1",
  "key15": "3ft4UWb33jYFezoEyU9vYRB6MsdnskWx2Yw533SFtAx6PVNCQwnzhMBoqKA2tr6mFzPhfRNvvwFCJSv8wAzc8ZgM",
  "key16": "4ur5UgjW6s4JZ9MwZ25yUXF2zrjF5RrY2dVEEGHt9sRAUvWZQ4661B5pQip7oMZZDTHLwy7vTesSGmpnZCXpA8KW",
  "key17": "Lx6sUxksVS75Me5bLZu7FAG4f5Nt8a1CYnRrGY8hz9XeGoS4CB3oRnUdvTMc69r9Y3Rx8W5w3hx3Xvity2vyLck",
  "key18": "5vRVE5BMFWNuGtnJ11d8VkpWRoAjtQPG9xAz3CftwtyMCTRSfYDAw88WssMMnAuXoQ7R2oPrHMDq2EHcYdG4Zj6x",
  "key19": "U62xf6bCof21hUMXNCVDoKPj6NrtUcKo8fKLG6e1ZKwUT5iZav42udS7B769TnkRpqsK6vwss8UWEcaYdDbdBjZ",
  "key20": "3Vj5EaLhHtujPt4RNjzHBsZ2Cnnyq9aTf62kABPxqJ1qHSLZdVGmjKiUBgar7hC2zbJurNXqF1Y9a5tip7M2S3B8",
  "key21": "3JjTbnGrEiGfVWYi65hvKc2WgqxFQkoCt21cSwd5AkaEXJbiUPa49VmmNg5c8yugHPnnmMgH1xvVx3Y4vc4N3NvW",
  "key22": "2as89EMJuXQHSWL99DuhrKo6cnuMKADXV7cKiV844cGP8n9QfzXEPrzeQ9yHcifMsRcexBbQvb1NDtcu7aoT7HAZ",
  "key23": "4DCKMGGJroWpxPaQhpBTttihsGyy3nmaJCSq8FwmULQYWmigef31s77jvwduigMWXRNUKsoVUdaLEP1xGfNjfDq5",
  "key24": "4BWDXqHF1vnb28kDaqGb9X4VwECs53KXoQEeVzViM8izFh7wLByJQtoTzvcUe8fdrWMjfUnHPgzHnud59Yje7dRk",
  "key25": "2RbErhSfATe1wAFd9EQUTCm3g4e6hegThcKnAUR3BSLZFNngJqwAxSf4MgKe6cm5QjUgnnfoHP5777reTH4iQwKG",
  "key26": "4KKVENFVTJcxjCxBfVrcNiHQqEN9zUM3yUYVXmryn422gVbNfth48t1VZzZ2NxYCEyjr3VV5vwJmYhbGUr4HUwVt"
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
