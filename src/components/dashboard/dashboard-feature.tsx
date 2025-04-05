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
    "JMuNyACHNoTcRo8HszaqJrHWFxjkDPd8aoUVkpGjaUkBbrHJ5GZNnmik7nk8wQrUq3SpCTvJrhLdLHRg6WtpLTb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5prbDmnQhcVC7RYybPMxJbo2HnY5eySiNXp2SYQYow4yBZimWbgU5CZVFcRdXhi7pFrksqrk4Cdv2NLx3G9dgi7h",
  "key1": "5sQayNGy33wFS97tk3gZNQtQFU1hgnVPEkmx7jRcSmwXUVfnfzVTzsibVCpXvBMV2KVNdCu5axctvchZmDKKFbUv",
  "key2": "4qCwM7MQCLymmidgJvWZb5hT9VBS9jQrjdmWC11m6qpmMQWCMcgVMBdRiqpSdT3vSL95FizwSyvdKtb8amFkN5er",
  "key3": "2HJdetXhAzPffvKj33B3r6UJwyF7tpanYmfLLzKaBko5nLTihypF4SuLEvDGU5mpU9nvT2LvPBkPdre4pSgLUqhS",
  "key4": "5rbqcfTAZzqXo7SAN7AqnR6hw6MV9NzdNSoPNQuoZBaoM4V8BjWgxLKjaXVZ8opXAd28mVxJd9eSUBHkVYS3uZeP",
  "key5": "uc6tpEx6H8YUE3FMQN6NS7CyNL9cN33vcPtx1bR4cA4qLRtL8CK4sNmZYZn4bUayR8ZgApYGb8WayiHZqYYT3fr",
  "key6": "5XMby1tQujbx42wkNoP21gBMXdc6F4dPS1CGAnok1R3SsgXfGei4ZtNjsEVr4neSv9Uur3EVF4WrfysgvV1QjXo8",
  "key7": "ZqBysEmmp9twoebWSNbts1K24t3PSAHNPSAJobV1hccPzy1vS2SY6nLKyvcUq1yZKgW741HUhQoiuQszfAqGLzD",
  "key8": "54FDVvGrkDJHZr1J8TJW97VNZ3mxAUn8F8cKxSUJJsNZQcpnAsuKuRfNw1qZAkDUkEapfQK6yAT8mrGGVVMT2ey6",
  "key9": "tRcuwyWGQp8vXTFyArFGNiVbo7j8HKUx3zfZua1YarHS8UcvyR44nsGWm6yLoshSZVh6xBhemAepxSkFKeSNjBS",
  "key10": "4Vyk1PUTsm1ovhK75j9vAsUtK6Wxi9wQSqdQteUMGToa4fn1zeswtNyBVwrsyVkE2LaBj6LaJkNC5yHM1EEahBCP",
  "key11": "3xskG71xcFAZA1ECsi6Gt2SkTnsPwcGF4PKpf5T1UBXrQuJVQJKSaaYD9LGF8Ed8xcdM9z9MRYWG1qVdsN3Sshk1",
  "key12": "36omVvXkcWmf3uHxPDAAcCzCZ71RUJkX1q6K89dTastBrRJN9HF2Fq1zYN9cKiJCLBuhLLMwt6spqgHwjVFDhgrE",
  "key13": "ES1xWXGCbiqoks6hEXsppZKWwbrmWdU8HCS2TxeAJUKugAXeTB4m8prVkLFdLYKn448TbCFNtKSr69DYMs5nGoE",
  "key14": "2xqEHZDdiv6KkJti4RdRexsB54zeL3UEjz73qK6abrfxxH25wwbinrf3vCqnitiSdYpLBRG6ZZJ5EVAPqASS219v",
  "key15": "357LULJRxQikYuU29DUamH8BUEeVa4XHKiZx3Fo5GJ3gLwyekCM7emwkihNizg7SoUpu5NApdbd7K3K4nQNbsW55",
  "key16": "59t6pSMzAuUc1UQn4Jzaex9QCNinsAwbh45Vvzh7bvFqeA6h6JgKXKMcxbQDtuNNB387opxfBuneNb5Vg3SugboZ",
  "key17": "5mwaHreBVRVGQEQhSVQunZzejZRSzAa6JGCKjt91YknuA6HqVve4t4p9ArrTiM5cHpjtMan6MA7RPAZiUSMXbCR6",
  "key18": "3BSgmzNfRxbVv1DVy75MgMqsQR2zaHYQZtfmp5kUjS17FmN7CGX3DLJEUaA3PKoNxwY4c1LzMtRfV4UwPjZwhYf5",
  "key19": "3NTiWdzNX1mCyhQiDf3MZcFz8DcewDCCzeaZvRbik3rGeqsn2ki3uED61X2DfKtDcdw9c2GgtrvKcug8pjrBv9tu",
  "key20": "3bY4HqgxMQkGXXpq2NcTVobH2fW4ueDsjirwDNGfhhVd5FgEV9zYDJHJW7DZRwpz2TzQjrhATni9Viax1BGkENDP",
  "key21": "BhpTxAwE2NebzzANK2uP1362KCGMYt5ioJZutQn7MopZN934qy4ABjGf5Myqmu2QDZAb9EgQy7qtnogLaMeojAB",
  "key22": "2zwgh1jnRLcRtpHahxcTAQeZiTCZTHc2TPy9tqYMbhn41XnCP6bGpm7pBaMWvtsaoS5DnmXkEqSEW6oUZuFSFTmw",
  "key23": "3xtEs1tMiS2hGDNDzCvWFgpK5fKas1bFc28k2j1TMPaZnnWX2PjvtZC3yZs4RfCfHGaDpgfjh3noSqJc35CefwFz",
  "key24": "4eJiqAFuS8M2LJmJn1ymrgwdaN4PzBrmPXVGudV3hapxCV71xPvLUdzWCWCUqF1TWxTLTx1K7yHK8YodmWyMqfrc",
  "key25": "3HZTUEkbzFpTrUZ4WkTD8TJymEdRRYCdbVrWQ1AtwSGp7teySKMMhUXubstpbmc4fVkvJbf4MVHPVxQo7c5WhdjG",
  "key26": "whnTDb7j1pGK2L2WXvHQyTtgYWkmtHb61U9gUrsaMrBzxRJBs8FwE5M53qiUKSiJDxvWdTtsLnzkGcjH7VRv3AS",
  "key27": "3JuKCRvN9P1NtX7RzbRbudJyTkj1fgZC6XiWPLHhAyum3WybEpyZ6Xe8hP6NnLRQfuYFyLzT6ya6iWfjwsrNUTDc",
  "key28": "3J8Rqdc8iVz83d4GkzzQLFEcBNT6y5TPNCq1RXcLS9eeMEaa2bBqRXryPovvdCnTu3axoudAKJPFmfh2U2w7epTQ",
  "key29": "2vV5NCYHo3Y56rE96jgubYGLtN3bGEZGk1dBsh1CnUeWVZrnBnivQ5fj8NpXZURUpZ2gwQbywSt9ann2Ap9ncYbb",
  "key30": "4yquCvEy3213dgKd7g7JZS4euELCkviQ2eMRuXXcPg3uq18Bhd71euA4iR7EGLs5cYLeMuzU6dgy5VgVEusoew8i",
  "key31": "4GihorQpHewKmhRi8t3FZ3xoFyGZs834tT6NojuHnq5QMn676x78a96JJVhnRyArrzKvjUTonkoBqn2tgHqvSQBL",
  "key32": "eLVb8uDLvCwtBpnZntYhy9NV6SrM44VVYpqKF9TCUEfbD6JsztHPrbD3S51Aze1BBE6pHAzbBQNH1N3SJ4SNHAk",
  "key33": "3qAL3s4kHzVdS2EvswTqqBj6GpEfjxvsn9i72EBhqnaUgtjo9S5cRxqfqhnUKqBCAkFzkoHBgKCds3cEeoxT1vaq",
  "key34": "U4gZwB9rapPzGqBqTvrKEbemVDNJVNzDHLojEbXH3899Sgk8S9LfTtz8SsGgNM4ffGvcbhP3hWc7i7MsZApNzJm",
  "key35": "3EEzQAhxdnay6xVtqcaWnWTsebGSqQ9DscTQLL6nZrk8dL51NPmcs55LqRpx7i2LGj2Vzu7t5V564KU6KRHSSFVm",
  "key36": "3a8Um8pNujtZivTs3vr1b79GU3sFpbwGWg3Qxxt3kNarKLPxHrYNxGLp6GGCEdrUJMqFt1EWqm9uvaFsDmZpd1ZP"
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
