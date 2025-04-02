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
    "3rVxD8D7iipMTvEp9YKPya1P1JWBx5L3BPDNVaeMisjfL2JdftvzBW75uSf5Dgz2ySaHJWSFhHiTKvwz6oVEKUjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CBQLfFFKe4i7KAsRcDiQkp7snsfNxSAWmX6Ska7xdx8HjnHumkot3fHpnKJ8DSP2p13py6BcwqQV2kkP7pkp4pN",
  "key1": "3QZj9a1NMLG1ktSRfXuT8Xr4ow1vj4qGxTmLNwBPUDSUDkPZ59HkSCkbW6StUJdmqUaAy5YM7ExcFiVSDKQQ6QBc",
  "key2": "4k2fzDwmDTpPmK6pzUmMyLyxTQSMVcdkueSWgQ1DiwW7o8iTiY3aWRrM1fZ3S9pLWYrTpUgquDTcLzJDEC51oTX9",
  "key3": "C3B7dexbK6jxsVkb8Ym4YL1f8hcSEqvz16UMShqVpvV78bw6752c2eWXp89TQNfn9Mj2qKwii6X2TtdfyKxRhDi",
  "key4": "3cuhYS2zgsDZrDxxb9BoKp8yP1xLWVpMWabkmp34GEp8RnjSQGxeb8FGvstjTwK5XFeGZoQ35ezVw5PgBFLz8XZ",
  "key5": "uxe8EzRb9zPAKgzubzZRdCaDyT4WoThVBFNLcuK392YYEs9WAMfaaCKFkPTyRb1LtRTajRCkopX2dxKuYB3vsUG",
  "key6": "2rfaCJavoWTCqda13P4D1AsV4EsCPbusMdGC3iAn399yggA8bBzCjztLhkREubd2uTQWu3VjQs2aN2CBdjtQ879D",
  "key7": "3RcG7Fvymkqjdt77b3B1C4tZyURbsejVXSgaaBrDQWP698R6e6UgfsSZHeosfbac5CaHf2w6pnW11dgHMheCHxof",
  "key8": "3d8rrXTXdDVroBcVnNmxjw2X2gi8oQ4dwn1p1jKmAaVRfF985tBNzkwJQGvyBj2uGr9x7LpCXUwSprY1ec8Kvx4v",
  "key9": "4Uh6FcQyNYcpATtpHPCY3WLQrLY8ZjVngXDxLfzTSnLmm88ZKvoGg1yc9Bhuts3NR75nmURU2x3rDx5USFgTf4L9",
  "key10": "4UQPkVjy5Sj1NxyYnYVYAE1YSHBhPZ6qFNRStrTg4XXQu2yZsHyTN81sAwuHymDJWk99gLV6hhCzAR3R5V6Ryvzs",
  "key11": "4JU5ffaL3pGEhedqsQrGrzpvy75sVp3Xdah1zgF9nD8RjJMGwEamu9VoqimdtPooEHMZ5qMZBdjMv6xSWbdnF588",
  "key12": "4M3EDixEtTgvn2SKKvRoxUR82ztvHDifBpEs85X4Dts9AvBNF15Nzx4TzhsuuDi78FdFfPa5AHGjWwxgqyh898VP",
  "key13": "4FXC4TLMbMUz5KH6j9KGvUebjYzvckLLsPi1w6PkYcHPqi5UPDhvuWzWS7NMeA1PzzvpkwdadEm9CuYVwyP5aVsG",
  "key14": "Rpn1pozjUPQRhaKh6Qhi4gUWsVG5qwtR3SCvNYkxxwyjUg3EsDsLtbr7JEahnCdZkfjGRpSkHzHFS7jdnZhv6Jq",
  "key15": "5Ac89iMN9CyvyQrw9kUHZ4XrEv42Kw579wN5vsN7xzEiae42GFLvcarNYjSFDfE5ZeAJc3FrYBHDiQutkyArKd2h",
  "key16": "4pAE1c4ravv81wdjRQWZzFd3a79LyJWqifNiySQ75wLy5pLcHJT2XMzPvVbAz7aAT6H1U8FGAbKXhFk2CRNevTu3",
  "key17": "4qadTYKdixYT35YEs4NkexXxXPEt5uSV9nzgbeE4pYWjgXgxhTZe8Sz5VWGgCQcxX55FVgS9avZ5Xg7R18urZn17",
  "key18": "5PttrwLnwX8FmZup6dANMjJP6jJfaNboy1LcdMkq7RvRqH35ZQBTQArmyAVRBxRS7cFBzEooko253UFu6P7UZfbv",
  "key19": "5r2kjLW1gzPEGauyYUGozmS6Ngm3MPYaYKVT3S9thCG18uJ7tndakoqt4YxED7yTx3uuqPog7jYuijcKR8b3umuq",
  "key20": "54887BLBCaaCx8XJyUU6CyS11Sk2B4fXtvhtXVnE3rTAkRNnYFzqHmuFV6KRsaofVHvRNT1rSY592WDdWDybxfZf",
  "key21": "3sT4FPanKd26m6bLQ4oQPX6vAUfK1TsgNL2PjYcHFzAKWpaiXwqqmrBQ1J9sBRn5QF2PJMvszrijys8XxMicyFuG",
  "key22": "2pbMP99KZZrLSYbbf2SFYqmvayggi4SDGLHgTZ9ru6e3Kry2zevoZSY3qJiFM2UooxLc1Z9y1i3Ke75VbpKDrESq",
  "key23": "X8AZFvitcS8Re5qqkjTCZgcUDyPnzdjzN9KdxrxpVcwkqybTPvwYus58EuG4vZcPvWuG51HurnAuyf2FQbcSYiq",
  "key24": "3Q9pj6p4SU5imSbzekpgVsCe5jgCKiiWw76w46hqwqQ7z8DjjDgtkXXAWTkSLagb2TcnrujfaAVq2Mv2jeEyJjRj"
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
