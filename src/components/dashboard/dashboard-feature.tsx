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
    "4HN8sWvpKLpKteQXRFJ3MHZZKTHpfSZ2oWoE69gDJhM1Q5dQ8YJyuwFXfzXqjjdungCaJuXnGmCUWfcB2ANcKyFB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uqjVXQKAsKP3ZrATUZgdQvJn9Y4EbxbyTPVJab6eyqHPNkFMopQTz8YdWKDBdaTnHYxz88BvsxBTcPNwaU5Gv2m",
  "key1": "33fHdXmrfU6omrWesH62vVqoYeZujHKV7TLH6DYD4YDsBiqtrEMHRiZPd2ocoWpJXf9aRwMgQ9N7MUmdyvqbvbt5",
  "key2": "4jspbYqVhRMiaJ5GhkhxgL63KC6J3qLdCZDk2BvzUmgoXYU2EimBR6Ny76V6T8ZF7EH9dnYvxLKRCYFzNDeaNc3r",
  "key3": "67WqohSdG8oNyhT5P1TTZk1115yw7VwKawQpd67vR4EiUg8HByD1RhhmBAwRqwXaaWf2tA4F1Ag5Vjkp3qUpzxRQ",
  "key4": "2cCjHTQaSNKgvMcDa7wMmFsCaV1WvBiDExytoRvpt73ajmQQPdtHgkgEjC6J4rW39aDdEs4p54gBu5H35ByW7pD6",
  "key5": "61gty8zPSXNYEVWXqJwK7bwvcJwZwGVwZVwdBuHm9H2D6j9x5xqH1oznd49EBnofDrVvkZbtzhXwaXwZaYkNcJTP",
  "key6": "3qkRDvfRsPQrTRKVQHjfqhkjK36y4fJkQLuXn4BfYBNod7tywkcMbifWCq6pt2sNKR4A8GssbNZxX9HRwqWsTUUy",
  "key7": "Lp9JswmxgmKofU8mdoQbjq9YvwxXwwmFk7FBSeHhUnqfnu1GxrJ9gRha9YeTBsHJ5E7ti7rr7wFmspYcntBxNEE",
  "key8": "4h6zpq85dNh41kRMAEJYqy2m69zjfLXYaFBbChxMv2mBkUZJV6xt61n7gxn9rZZpRG8AsU9hWNzhqXAjFBtCKQPb",
  "key9": "2vrKspHrTnV5qprpCezBvPPnD6d9Tji1LN8JDwfaQSP5yXhNRkc7zEj1JS5EhGTrJXw2fA3jurzz41YRfeafJDNQ",
  "key10": "2jQrUGTw4RTNiL7rXKEVXtLWoscKKVbmbay3CKxoMfBnHqq5CSJXdpwEyMRLmtvUh81LdN44E4LCs5dWuzT2Vyqg",
  "key11": "41z1GovnVJxwNMGc9K1yZApbZoLkXmjd7ywQr7vidhyUcjN8yuxKGRsb2nYiKciM48D1mfct3cYJmkJFJzETbGx8",
  "key12": "48ntP3CRcUMEharaJoZGoKPJii2LuPgr5ymi6zVuVh98UkMoHmznfZjHUf3DXhMjM8CxSaYmoHfUSbipFVB2GxfQ",
  "key13": "5ucLoEpSZdxdyJhejPMp3G3K5ZxzRdn7EopyfLjqE54EDUsZGEaQNA9DfsWMqbcxsSXd9NcJiJaGxcdUW5YMgegV",
  "key14": "4fgVvG1jwgsdPyrqvo2g2UNpZbu2y94wPQomLmfwQ93orh7dGtuci3UwTi1EkyRrX6j2THU7FmSWL6XH7hofaLss",
  "key15": "5YEeHR5stLjsXSsGAmoAmhMDBQUNKq7uLH2TEnMnRaxYDq57RfUaTRm3tU6ySVgsARy8JdNFSJD1U4QT6YdncfsZ",
  "key16": "J7DCz3ox2D4j4LKvcRSgbL2n8p5qs6fzhP1FxTW8tPSaSrK3gTCd49b6P2TPSZT9eoBiyD8d4pP6b8LVybLAWcJ",
  "key17": "5QU4PkQdUBMQTgFnLCHEavWNYGe22LTJgWmtYqesA87XvKJC9v8ToZzDrhuTwhi7BboJi7UjCryGh3u9AeYwoADJ",
  "key18": "3tPtxYQEoVBipDPP21zoHijBGU5KocjF1cb3nzU6LFAccCSrgRYLZ2aoJcCsXzvnnevdXpyxcffUP6cmjPhEVSsB",
  "key19": "C2ZMQKjDU3V3rfa3Aor8HZGeE2gjq4NxMFzqJx5fWVxavDs3K32GKp4dLpeVZiWtqMFExThSkoV9rPHXjsuJbRw",
  "key20": "5mGp9s2xG3nVkcTzgYRmL47h622M3fm75rUXpUizsEVNqm5T7AYL6zf83QV2TDYURGtBm6WBWjuLtHJ7BLy8kxYi",
  "key21": "5miJWgAdwg9bZfK5o7dyk7Q8TqoGddaoh2XjbHTd4pjRabyNCPMwbakguPQTWLMAs411juG1Up1uUULD8Qh4YyUH",
  "key22": "46ib3fhTeYCa4vw5whoY1yKyKwMwvQMf9Xvgwd3DVBEN2jx3r7jFCvLBnNedQ2mfsW58gsZDDnBku96Dr1R195F9",
  "key23": "2xU3DbsFFmMPJTxQDhCcyvQhAxtNBHm8N27FLZMEwhX1ppj3jeqFJa9bKQ8Qamr79WEwaqqfAwjyLF2jHRipxKLC",
  "key24": "USKCFMhKP98FBzsChQziYETTrw7F196MoqWy9R2oWPwoagKNqbiuoEGhZUDzfxU7HXT1r2Cdnj577RzdCWZbE3Z",
  "key25": "3Shh3zzwFnWV1aXGVzE4BdpZPMdTeVe3BYhAmq2P44nSvNTYA2NEhrNGZQTHVqDGgkiKDqiUnhf8tKRw5fB4zwbY"
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
