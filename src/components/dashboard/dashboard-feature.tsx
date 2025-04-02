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
    "2N5huxUqEzv8PSq73wDp3EdEnd6B7UH7hnZ3rsR4WTiUYKHVwu16HzrfyqaJWiR7SnivxFRhRCmkHmZJMdY5ekhG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cz7VkA1nFC9RKKww8gcNr5Zr7BovcV9YsALuiHBpKzdpcDstc7hVt6fewR1dy129Z2UNkK4bdkEcJHponUKVX7L",
  "key1": "Zrg7oA7zLQ2csr66RxqjzDYyHA8ECEWp5SvAExwv2PrRmJ8cisB4qU5jPNkTQeJzMRWEf6XzY1ccnjLgGLdrfDW",
  "key2": "3Dvp9evt8KF7FmViXe2HfWVsuEfw6s5VWjWo7jLKi3dKqvQkUYPUE5p1dpaSSWaiGnkwMqTEQidk1BqxhEtQZUGT",
  "key3": "2GNKyyiZzmPiSTGC2cjFafwS46SEXEUpEcNCMeUKhqhYGQvzhtVfMQoHNHdoPDhnMg4omFAu4wzoVsYh7ZP3UPX6",
  "key4": "4vsSP7GeKxnXD33WYhUsFH2gPCppxDm9zDXYd5836bDSG2SuMrphSefLt4sATHWrcz7oygdrHBG7hAnhfuyXSMgt",
  "key5": "5VC3NQcCAPVjMu96zb7A6a9Y1XK3qHsNYcRDg79wFfPm8d3FdpEVjxVBEyzyiYr6DhihLDuRGZRdXsnXqky6TbWU",
  "key6": "24kB5E6RkUa7cM5kjFrp6JL46aGfpn2vcpnRctHHCLw95wjTPK9BG9oyuBTTfy8umRhSfpaZm8ichCW5aY4uKyWZ",
  "key7": "38L4ozbqpHGjMubcDktz1Yx2YuB5ehq6ZVKwPFZth4i7PCtAjRBzfACb951ZFRJBgscWwpXG3v2FXpN7SdcthvHq",
  "key8": "4RoKaqNW7cEhW5ist6K8SAvSXU9dPzKGvLrrU361kFfUDq3vjDsNcJgCQXPm1XHgPHcnZDSk5nU3JbzFagn3pu77",
  "key9": "5MA1v8njHLwUMzoY8zPyYs4NZzitzLswWKT8Fb4TcYqrHMaUzRgejsPSd9cSN5W1iMMycZ61qmRjEv3jNCWNvb7P",
  "key10": "26GqesAPEutyHazfcEByWihpMi6ruQUzdaUgj61hLPtWZyT6onDP2iZFLku1NjqQzcGsKKPUgdsvvisUPrKpEFFj",
  "key11": "2ki4NKefAwCMLyoePyED25oAHqCVzDAaTPZN4UcgNQ6PxKvh58Xi47dGWWoHnhhUP8ycgu1a9EwNE712bqJ8QFMR",
  "key12": "3K8cVDjxAjdgf6inND38E1BhfevL59dzsP1A8eLXB43VHH1bzTRjAd1cjYsYMFzUXyZApNzEYncEt5h7PdYdpizB",
  "key13": "2EMZe8TTbGjTfM9kSuaw18VXSdCRthAxWTLyd2QsF2G22TfkMs4dDSRQz62zPqzk6qoVESbmGpTnafAuizaj5eCC",
  "key14": "4bzW7JrEHkMJCLcbW3BXSsZYTcUy8kpWLNpYZHLuzLsJBVXXy4PTThkS4ZsnLNLB7cLoXE8vdgdJibFyeu3mrvXR",
  "key15": "8YqA9V4jmDWNi3iEMqGbYiQ5CjGtGewpi4arvFZhdfjyTU7kVfrVqjgMbm3Jay63rzKTEaSQ2avq8qxbyK9wWYD",
  "key16": "3vEpXkCKhtawZWRKQB5EGBqWAAKeytiuFqVSWJc9c6d4a7VpwJHFUrYhLdyGEvwWeb6rgLUrjaBo5NiBJGLUSbzp",
  "key17": "442yWMmM8omoiDSRqZWaEZ4zMy4GSpZDTMahs3YsijJmKsFGJfU5v2Xz2CpNTaQVRgz5f74xLYKnjsiCYuXNQfAX",
  "key18": "4gyJTnzeN36w6u3csBrTUNoHwY7E1htgvEdubPe2mT3pXg7WWbJZbYphZtwNrJ3XoC7EmfzjiwLt24WBPW1pB4Pi",
  "key19": "39opeLB8LACAY2a43VEAzpvLs9TAowaqJKmzZMbczYSsdPAfzVTHXXY75BMHoXsYUEetYg1xQw5JHigvTEnACkNX",
  "key20": "r527PJwudS76GhM85bALYxCDXYrpjAZH8T6BFY73zzfbKVooduPrtTdkyYHbTxUC3nBdS1dsXRaXtLPR3T1E2iA",
  "key21": "3CyhgMtbademf8HFLpVBzqw6cLkpYKBjYRvpMdKUpLhnjsdtSEamesJtPLTEiSy46sjn9v9AGFT4XfVEW4Srs1f1",
  "key22": "2MJooTUK7f3TESEEWRaah5hRFKW1txvGtS4m9cn5jk7AkR2oDob27rL51we5uEsgVVfqcJSCyRa3saM4qY8FSsPG",
  "key23": "ZHUPqkXPomBSE7NDEw3NiXvGRNeycD8xWLLy8c9noeoyQzqNgsUt9RfoxAeswWckVjv2RTFfjbXDXRTANs3JmUM",
  "key24": "5XhFgKhsA3autG6D5DSo2G7K2qYD6nomFXpAM7j1YFfSKaA21Qk4d6WKuT5sbD5yLRs9S8B6Dw6HNyupL3Sy9z8E",
  "key25": "4TdwNRYfnkXRJoeNXY2R78t7rthiLmdJnoJvHem5KhkDNvGn5iaugEmNHdH6vJjeMmQzo73eLgkTAk44nHupi6XW",
  "key26": "3sqWYs4iLvAkFNQEJUG9iVuPQAhYaNTwrNsaufAPoLPyZtZTJFpz9aLXA66ketkFh2aFykkFZVeHjyQyWJiGhSHw",
  "key27": "2KQAAqBHvKYFfEHkwVPWx9miydvkZ9e4NmYwti2fgw37hRqas8XFj5gKXWH2mWEfGS9Fi8aHa2cipYKkFimZEiia",
  "key28": "3w8AqeKYr29G7LV17zxstnLBuUVm2NZBDDUsqoqr3fNPEGbG1o4HGdxhKKTmvymfHCpT3qJL3uLfXzpjgz9c5DHi",
  "key29": "4Jk1uS8EEUGonvUqUi7ePc67iz3HrcwDTDAjXWd8XgXvjNxGGiuZ7Vad8YFWyCRReJrZQQjaZFV3M2RtcWPCbTDp",
  "key30": "3L8UxFi38FQhbBsnS3WZrve12DCGgu6eHTbdMQe1EHjQFbBYX3P4WxDSkCC34MPUCfwAcPbwEoRJHtcBEsVpUfdb",
  "key31": "4L1Uf6FToLuWVEZ54iKHZaR6iuXGirUDj9T61eXTVSTYLEyaVihu4Jtobew7RVcYrLDzHHHiAaqKm4cutVaJiTDA",
  "key32": "5jUjURmn1HpkJk5ogLodp4aNSH8uGQf4Y9vf8Uk2AaVVtRK2CHMhNJhV2ZyaBPLZ5rHiHrpLX3j964SGY6HnDcQo",
  "key33": "4ta4WSAD4vRbWfVAQCXHqBHviyJU5Ab7tVzgvSg8oHyLUKgKsAYBigUL5ACnqPpkhLKcMnUpr7KZAPbvDRqeQ3sJ"
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
