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
    "2ppjRzisJsUmTKxxjpoFukZJLCPjhxfaBKq4zppTFhEALv29CU67fgHmaQTnJCQh4pC7mvr1UmHJ8HFQeqkw15sN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zhp9ig5yeyoXKhUwGVoyxhMANV3fyFJQgkrh1oiV7zmoLDf2WS5Mj1Bphf6DbMT72zF1ATiRWpZHSzTGrURBuKi",
  "key1": "5SDcoydmSqFRF9mAhKgKSFJufh1LLpiefkMBCPN3Qjvotj9nX9S8oyrgEZLwtccg4jp8hraR2xwAgZXBsxWg1tQw",
  "key2": "35h6wJoigihuvZMfP8RTaKBrZXT1E5ysXkaAkHAjCNxWqhREk7KiE2q6qFbKEqoda85c1SNRusYkTLTQaFpqdb6i",
  "key3": "5BhBqkq8GMU8SA3RU4uUPJekeeuFrFsMS6ycVnbsHHxyovtdf7b5pcjKQNWDM3hLioA1kDC4rDpE5Skhmjc9cCeT",
  "key4": "4EfLjob9biQCiiHKE44kmQaLMQnbK9UKCRRRjaLsxV3WmzVFp9HFq6gioadpAmwkgp7JMyR2bazevEozFzA5cERS",
  "key5": "329BieMNhCAqET9WR1Wa944XpFcaxVSKrrymrYKe1BrX6ojjgo3NzRURKC5d613Ns5hXYuQAqGEBjy4bquNdnQPf",
  "key6": "27CcqKWnijf3fxoFnB547QoaFH5cFUNFDW3uHEWn3c9peDjpAXofjKMYQi5K7g8dXjQ8Rs5DDiR1GMPbvKxD6Tfn",
  "key7": "EZiySyxuh37pB7Bu6tagjmvG2Zcvow1MYZXDdQc8whMHZv3AQPjX4FiwKJbBAshcr5dEGavSrr7mPwWLWq9cq3a",
  "key8": "bWDjgGRsy4qhnSXRxvp6qHtNNjKZEB6vKGvFYHA9PpzQa2pzeqUEcKxnWsMvQR7CokFpYM2Z3tc7AV88Znagnkw",
  "key9": "45eGACWL6agHrYaTCdpTpuyLagc8ayuZHTwrTj1NdUQNhdb6WpUDmYF4BFmz8RshgjgprC2MZnUDnkrc1hgoAYiN",
  "key10": "64Y7KwMTHrrrZ7moNp5odebpoMa8wY22nH2cfdisVY873oJhsQ7YFVUCKEUrfT5as5bY1Up4eQ5FEz9n9x7bwKYt",
  "key11": "3kZj8VrkRXfaBrH9Kq6CK5ruBCcNFABtErA5iy6LRKUfgDqnryNG8832QTHQAcrTDELKhvxm7SuFKVcJ29vdeHCR",
  "key12": "4iQAqTaXqqwaeDsUZ1Fdq9F591kdurVJprxYmpMqQoHBrtMpbXQzcoSVuA4225fpoQNf6uVHCj3mtLvVSDP6iEGf",
  "key13": "3RbXZBso6fGL98PPReeKeTxWNKvbEZWmj2U1XUbC8vMNBwqdRuUvq4hVXi1AzYU43ycZ14bjzEgXVUyRJ5sRgYLR",
  "key14": "3EfNTbBx52Ko6Ke7sVqzfuhz33Wd8SvfcojqYDvsVLdaXCNbpP2RXr3kdDJ1MPoNsusH8unbUPfZYg6xdgCgwj8z",
  "key15": "3Jw16e79p2zcjUTowL3b6JP4FvwXs5zQVwGWnZS1uypS49SCRCqjrUbceECBtHih7HosUiFDTcJYenCYVasZzRqx",
  "key16": "2rGUSCJ7bufy9VM69Ed1eNa7DigWZdVnpuSEGricRuTrMPtxSvgJP8SRYwYoWRmCF8SFDERHr8pKtYStBKYy8zk4",
  "key17": "cE797UMW29drxH62CsoMmE8p51QGShB1XoPuro6on6X82YSsF7YV2fEKTeyUzMFEEqKQTmw75qdcuPidZ6EMxEi",
  "key18": "pN8hydQP82zFoLnmQvC73bNfbdScF8eTXMPkqvFVCyBcAiXmh7ioSNzYWvWnYRMsvg7X8Wgzb3HG9mKkfQ5WXyN",
  "key19": "4K5LEyZKvdFwKq7ghfbSDzpZaUiXPajNZVPe28zMzCji658cs1rJ5njjqqkFK81mt8EUuV4w3MGtxUTsdcE6vHPG",
  "key20": "4TM24z8MJvwdB8zAC9cFSCBhVAssVXg17EriLmpFsEpmnqg9D1a6Ha31b5U8CvKfbpHmyjghoHX27gJLDNondSzV",
  "key21": "2Aj8xDWxBfBZ8HvEj3hCR6a5y78Gy3pi2FbTFDzxWEfeu245ReLRofhL2jkv5CfNsSxRusMEk5XHN5VAZSHsCV3M",
  "key22": "nfS83VrRazauhdD4CXg1JbEvLkRFuvkZFvB5u5ZNrc6kspQ9tXDwcox7RCuWBRj3Ua2WUYSBdciGsX4apP7mu1H",
  "key23": "4btuGcXKdgn8ScfSZzYRVTuc2FCLF2sFJ633cFnRK9junrAUWjDdtMR5msWrCL7GDw8uCtWv8RVv62TTb9xMhwNu",
  "key24": "3DJbmRfo9TrMSWnQ4dQHsRJLsTPY1yqKF9L3Sa9b7BnfHXGTHWWsJfctC5xTZbwGe9CmRnCwTAb1A7XFf45XfeXR",
  "key25": "3q6GrTkrBJBGBPP6Gsf2uVk7H4zwTpgdGaFsb4C8cu86cYUArC5mgZ2w1Qn1gJH495ZZSH4EF716rzz9V4xAusu",
  "key26": "5LggmJc5psYH6q6ZVgotnCDob3Dm3ZYsLS7e4oz4CwEcpLNp3C83Nn4axqULSwP1Ut5K7HJHT1BG4wwFhgG9dJNd"
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
