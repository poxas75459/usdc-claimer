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
    "4SXpBNsjtTQhA1ZQvecMXqKsrkF34q8LPQyjp9gcjhCbwE2Cuaye6bVHWYSbQWzW3sp3fgFeqxWJCqx33pYL4V3P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41zLpvdukaNZxLwrYpLUcjkBDXwmfdKj3JKZrVw97ho3eEJj2TUNDdfWBonaWsPaSskgLg3wKykTxg4FYj8hqej4",
  "key1": "5TGK9Zc1Hc2TnB3B3RTGvrSaXxX3B8QKMyqzdZM6WCVNsuUee8xavqiH2qBfb6eLjKzJ2aBCc1UpLXDW4jJoCkFE",
  "key2": "4Jq9MkuQKCjU2edbfV1Eo8NKimdGfnWAd35s5VW1DpKpjXitHDx6fL5NM2wGksUzUFLzQqhUPooSPwSGpmZimADP",
  "key3": "3KNoy1x45SPqvB48etjkrxpJxh1tFf31A6YYyzvbDgqQEZVLP7UBo3eCdXDy82jKTZpRwkBzgSzcFyCBikwPu3r5",
  "key4": "5nPqnkmxboYHFQ1yvqeLtNkswxUJ54k6afFSz5QepxDxAbtzKPn1S1okE5oKcDLgXoLratv7vGRqBLFENYrDBmrr",
  "key5": "obRVjTMNanRK2hah6FSwHpMEpGcBUy67QSz8AaSf1ragVgJkCSgZx8pFUBdGgwiDFCcpV2Y6knE27Diax6aa3Q7",
  "key6": "5a4EAF5sixm8WMF4HgFqRfbsxGpADTezfBYf8wRH7vU2PmpnqATXmJYmy7Xncz8wxcigns4uma8yWzjXX57UctfX",
  "key7": "4Q3eihS8Mc43WRL1X8tvSioVDEyYsMENFVLoE3uS7DCtRQ1ZREUFaiyrLmYxHhd3UrLeSsk24NrWHbgmZs6yMZ9d",
  "key8": "3LDPE5yzVjrK1FPXtHWXNvJXwtuSJGotrDxpnJdv3o5ZXLmYQkfhwo6Lft27hUZ2JZSSxzGA8ndXFNck3sdxq3LY",
  "key9": "5D19tzXQXsDWwCV3vNyAuonqhSwMcQiryiDWEzNHWqpDx56QztYDe2ipDva13968nQTDDSWCTzYhnkJVqB8N8xvk",
  "key10": "2bak8EwRmj4VrQEDrkuLZvigScu82DQ3yyfdCZmkfCk6cQ6nq6KbJSMZnZK2zLFWtQYMG3EWu44CE4VwUHJ1HCwd",
  "key11": "m3DzD2zuGJFQCgWn1VzNaDmfuQnG9gmxJjRDmKgn27tVWhQ4qPjVHj98GaAFqjhKAweRiRtkBPx4FDT77WNDB2x",
  "key12": "4XKxhkSNehWupxo8AJEcD1BWUArqY5oScVK3MqBpKxHBHy38S9Pu6pJC9iWzCjgGd2mfh39aDypLoutThthvPB7K",
  "key13": "3CzBkfRjqaqthCYZuJPehLrhCnjstzkN43F6jZA1YUjT6VUXUxF9PxsDH4STAM6fwdnnSRyr4bnFc1xRW9tJ8Vf2",
  "key14": "5H8dQhfnrRPF1ABmLYcgZg6MA1L4Rk23xfnDocVp4kA4yU6p9PbmE1Sw9KYcyQ8wA1YdYhkcU76gHEqKJCkhRab",
  "key15": "2Dn5KmbTJNzUbX9AZW6Eo5dRzVios3fGbVxEyztJbqZNzY4EC11wA9mDavYH2BLr1Xr78vy4GyMGkaVA1FZkJgWM",
  "key16": "9Mom9WhF4MkJK9QKqsjtedhXFLDwk6sBVzAFQA7eZc6pkoULLvPMf5oBXL2gZaxJEuGw53jhahjcetmgsVewAUr",
  "key17": "4Qs3UArffV1LQYxqzggFqapCGWPjdekGRae5TX1pETPRy48CLC1geihs3KBGkqzzWEYmWZDeNwivJDJvBWdPc5aJ",
  "key18": "jZXwJi6pzw57neC1qcJeyqEnzRCWsMPmmMDac2A8ETR7W4CaKNjY35xp1RDAyBjoMQsgR7Gp96k4FE2kEkSrJJ4",
  "key19": "4hQYJsAKcQVucNAdbp6jFfxEgz2XdjfmrBZz7pkkvHLSg1E2MdfMQqZJrjYcksybQe22GdCNabNkvUJEfFMf6ms",
  "key20": "3XTCSS13GgCErRPGcALNgDTLsaKitPNiqob9k9nVqdmvgcc7AaLDxR1yakYLspKh3sybsMrBYmLycJ8binGhvkZv",
  "key21": "5wvZQFKSAtv1dsJqrS6Pj1o1XoXkyyZ3XwPnxSoGkWow1Uew2jbezaaMrbthV5UvzTPdBaixHqTjf5Uzjoy5zwBf",
  "key22": "3fWFK4fykDsFSxY11QXEFzRjCGmMa8ACat5hAjcLckrt8PRVPC1BRxMBkVw37x2VTvpR75aHuUZUB2gCY2gi4c86",
  "key23": "4R1dg9owgorLK5D7CKPEmVmdAYbmvnwxXFftGWovLS52kTvjipWbav6jzVvGUxQ6CTVXda3Upgx56f3oSDsyH8Xt",
  "key24": "4dk4SYWnKhY4zHamhTzsvo5qWfG9joWa71ZnnNQVR2YsgJZkxac14oieUjEHhupezNcwog7RPNvo9Mm8rGbj25UQ",
  "key25": "3xem3xj3rQkPcnRChNXU1R3f1QQTiW5gmNaCAjeB4Ky74pCU6QR1GfFFLbtGv9gbyjEGAyy9FxfqVKhc3ZAnJqxs",
  "key26": "26foNgq8d6iXK8Eu1ZzPN3uMFhHgfjxPps39t4Ur5NRHJr577EP2M9GFgY5TGdu3N34Y5p6caDqvmA6BTdm2jLK2",
  "key27": "5obxUjWF9BcFNbNDXQsS6685URWoT9uS5cis29D4BRXEKBrryLaiXVJAwunnwr9byKKCrX5kZWwGN1kLuc94EuJw"
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
