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
    "23rfANfYgnFd6mueNoi5swr2gMmyo1By78zAerc9qyjAJkxb54ai3FeVbmMtBqCuc9AnF1AU9MfnjN3zidoyTfvC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zZGHhPnj9kwY5LugNx4eCoCJYgDdWJiwUDqADXR2KA7TkgbEPFQocadpRdgPvtHftP9NWZA89qNffdRqoXFMTRi",
  "key1": "5uyXFnXnwzQKUtswU7qeb2utAKHhXVu3xLfmj5uaKDjivdwueZwJYwCGmG8UNAjKew9EEshLRhaMeZHQ6KmifUdY",
  "key2": "2zyDVLHoVAnseL2kWZxKuJpxDQ6NnN78E3oiZQbq1TxeR7ybVXRAovP8HAgNs9faSnoEeSRCyKgsuH47EipW5vPH",
  "key3": "BvWjxGN47patzP3fbawwzKTCpsW8naMywKU4frRj8sDEuCpJx998FUTZb7MuNbEbkKP3KreFAh7BaUh8DBkSy8e",
  "key4": "4FiJewrGTgJFf9XS5nSq4vZzgwouBvttELrm3MDZy6kaA95dWCfVfLcGUr3e7ejTprp7N6iEf4XajQQgZfnTw6gR",
  "key5": "2iQbBNEF9Vb7ob61iAh4zCWHbwerEo8U1PUDAAuUx3Yjef3ECUiV2eKTybSkBQ6aYAYJUa8ZVLL1SJh8TfPjFkJF",
  "key6": "5HnCLUsYDnhbqGct74YbnZoa8Xs3SKpXpmGoJTkSLEyw8oEKf9kiD8VW1eTsBQb2NT6ACrbCGh7XUd28zuE2pNYj",
  "key7": "4B9VvkEJqrsGZSuV7FRPZPwxbsVQoEMRGV14YM5qTwUwSTG1TnAvBuLyAoYxb1b2hZz34F25bJbEtwPKDrezGYcH",
  "key8": "4pcrCGaCugQGeRmmmLqyymAHZ2MaiARNDDKgbNuhbzfMzAPro77fjfPjw54xobsSNehtc17PFjuuLUeTxDLHYEWo",
  "key9": "53bA1rShq4i78smGpFJcdnGAFWVnycgKTFgnWxE9isa7TbS1si1JQZLCH8w4g1MfDjwqBngytrSr2gZQqKAdfbJ4",
  "key10": "39CZtALjYiwkuJLy5Vesj2xntgCUd1oUEFwNx3XALuUVhoPHgVThk1rPXjwys5maiXCA7rRs1w5bFWZDxAY1D9x",
  "key11": "4KEe3vew4dLYjSoEpxk49DSKiFm66Fwjet4nsKxSaYNr74qwS6h8HFVNEutk1KHw6PUEvRGj6H2czdF9yEQyMUqC",
  "key12": "5YU5SJGjdQMKE58HwDdRbEW1T7jVLovGA52FMm7S8tkqTC3TvRP3dY2YTN5VvwDjiVtP3PhvvgXHUJAZxsecDVes",
  "key13": "43mmgFWNVXfQQEWkpZda5ySocrh6fLydwh9jcUY9ctdBwadwf9Z7aqtTYsYoBZxC9CiYhEB4X2V8BPsZL9BRXBsp",
  "key14": "2nYNEwog2obgHgATvdGJ4nZ31iBCXko5oLAvYcuWBvAxZaeL71KHT9ePPQHcHahezsHSAudWovkUycPPBn64Wj2u",
  "key15": "4ShBZ444qMhsE6XFfRxXrgCE9mEZT777CtS3uDi2kjpcUPAuVemgd5Ld1TQB2jocmews8csnWD4gzUn5KbrMmtWP",
  "key16": "2UQcsEafjBHU1LcK7s9rxBV5AYxEE9Jsfp5im4cJPnnQ7v3MfbWbLQyCXuoT1q5VyKosCqLyjt23C6vGCz4yr4bC",
  "key17": "2dBjkxAbAz4tgTHPoSAp9c8gUBkvEd9xcv21HdPWdiCiNu2mDUFJg1U4MDCfooq71XXj8wMvKxwwYC89UW3zYA7X",
  "key18": "MeWsDqPXY6R7MXdvvuk2VpkfurrNqpCKAnSEmvzur4LJP7duhHHXoUk4Fi6douwwoEcaqPUxkb2PuW9zyU572MF",
  "key19": "5Qc1KxrqDcdRRmY4GhMzMTeFsRDYzYGJomkVHTsorJJhvUHjsnFWPZztpxmiT3rsY5dXpeaFBis4rHtnydn82CGD",
  "key20": "CabFpCKd3H8ejtU9e4iCukNSZJJFTWE3hZuibeGMUzbwnLyeGFCdjiv89kz8LbbcFGvEZJU5Km5SwkkQbU34EQr",
  "key21": "2oZMvJnJTuuLTe2px7CqfVTVHXyPwbs3LNvk88Hpw39hagUgJpLqpdusMeKPaEj6wqJNmuBw5TQB2zAzCq6y2NMa",
  "key22": "2LfMpAaRGi3SFo51crXLjHibXSSc49sVheGdEFo9rrWwDQi9aWzgETAGL39HDVmBPtHV9oMu4EL816AKXtQFLDCi",
  "key23": "sAphuczU3MFbxevLE6q99JBmx5BUBoPjyksCKYXbRZefP9WGaZmHMDxKdYxeXHuYQp7Ry69EEUWUD3Dp6UWZgjr",
  "key24": "5XJRj5Dr22SguRLLtM2Gf6gyAHbtdBRpspQf5XFZ2a5iHrQrrtW5q2qcNzN3vtq2QfJAaLstivp3cwdiUh3UB8Ri"
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
