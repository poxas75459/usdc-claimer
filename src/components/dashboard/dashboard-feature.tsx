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
    "4q5qN4ajY9W2FPc4FmhAe9DD9EL2uxocg3psynS1zpH3j94NgTaz1fXfwPkd3kDiFpJ2A4SausS7ZBybZMnbxP9H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q3zTraBRgjnxgMzbhhxTYicd2uQVHebEHsqBeDWT8rtdKivkVbh9JR4RE2aTi9wmUvmWFVizBZE7AYiV4hGdURv",
  "key1": "2xihghsinUeNJtEpYiV77JL1YLZXAw9dJ4US41LNfytAWgowyVc6CxLVWBSEWnVk5WCHSWmDBHq5DCof12VThf6f",
  "key2": "5x2NPb85zFhe9NbLx8p8zdgGpU99JPHFvyVzknSi8Kjy3bX7cNEpSpxysQpUXQ89qeRyQGfcM9cGZWEt3hAeK2GN",
  "key3": "2GH8WJaYYzoEVprrc9Px6uySzydB2S72sBxKiFgd8Y5UaaQWLKmW9gSNc48gvMTnqZVydPoe6EYrs8jFQFee7Z3n",
  "key4": "5pAihxYSbxJnhfHJ6wKwbuLDpAzimo43tEvrXah6sG1JB9hrmn9gmW3Y3wxReH1X4wf3iuDgDHE3oK5FpuHm2pcd",
  "key5": "oxLzbq11EpoftrScNhw8oa4UJfzHDVWCNCtEDia3G3uqC75jaLPYez1tYLV2up2J6ALrgg2P9VF3thPeiiKUDBs",
  "key6": "4hp3rMKzWVs5hqgDSBVCUdg6ipkaNEyZdtviH3GndF54gVecQeXZtqyDx5ztTqG1GBEm29GLMmiWP3P7rVKWyPvq",
  "key7": "2L3WSUWzHKqtXuSRh8KEkkrMNuMC2d1mBNiHgyyhUNZuUEiWK2osvUgLLU1hXzXjovc2SNes3xdrmiktrL8akM4w",
  "key8": "4J4dSvHdTHKQUbHWdivi9bsfHVG32N8x5vF6sSAYxCTi3jh4b8dziuNNNzZN4rjpJRfPui2p6cBzNEJhGgAzBmfF",
  "key9": "sorRhNZYLKFiU2ABqbnXzDNgy2YeYWUVFdfZPPGyxWVA3rzfGLrKvJNjnMgj4NG2wCZSqhNWqz23wDLq2eyNYBN",
  "key10": "yzxgJNbt7VDKEvNMSaUBARKEoEjAdi2zXB21Xt1aC4KsuCzPMbbUGBEPhHAkQtTbYaUGQSSnMxdpzmrGn2rkJCW",
  "key11": "ds94DX1P5GXD1TVtCYPDiiE6mkCH62zzzPotJkhZzXKKenTG6hprjLKfqUgxjbTaNNNg9eYacSvvFSnfrKKNYTE",
  "key12": "5ctxzExbPkbzBPrdFtsFngrktvgTB6NuQABAMRJRj751WCYk3pz4CJ4Dt8GnRtG4si4YkMEtREUo7SGZ91TRj4fH",
  "key13": "3C59LWh374uVkznXAdQMWE2WEaL6c6vUJL5uUcQFcRbgudNvzxiuESuLKsRGo9vViUorbMgirSedL7nbv5o8RicS",
  "key14": "3H2mHEUgTrRc5FnuqDnDzqKDLdVgb3haWXZp4TfUhT5emedL9BSKvD8ztrVjJbU8pHFix8k6Ty9P7qcxpFMuDfmh",
  "key15": "2oeiXHYRwZjG8Z566x42otmdmbLeYyCho3VQQ7fsRd3RPpY95wEa5v2FCSie8vrYkwbkxBJxxpCrQ5hcWf6iQkLB",
  "key16": "wdwegCHcwS9NEvPwpPgRVwdhTLmi4EqnqAcw8Hfr3eKVLwzMKht81k6RjyghtArY1G314f5dTXyfsyvmcVpeRyi",
  "key17": "3NGKKW72p4xWYLcreSk7UhsmuJgsAberYyQFUTnU2bM6bMmHGFeC7MnPngEK9iyK7Q9MtWfeFkrGpDMjz8eWJnHH",
  "key18": "2Lvh5UVBQRdLr1TqYeTvuZ92hEZgkDjC7URzWXc2mq2PuQffcChtL3dQzWg5McV171nmjXo32AedHQvKkNmjFqRE",
  "key19": "4JGpjrNmRBmS5bBvhoatPN4P4JTsBDdRDhGhv8w2Q78qGjxjCtGNhhvSLKbsuE7U8hxn9qHXTPUqG9rAbMeeLW9E",
  "key20": "46dWDiaDRF1Racz9bS4KxmK19Xhc3hu46GitFTRQGRPsVK8NhSWPyrjd69qV4X4DtnRhGKeMJZK2ZWpeAuLqi8xx",
  "key21": "FHV9WZR82zFq8trKftp2ugQHs6Sb1gvKdtk49VcPxp1URKTQMn3d4j2DKZiwYxFukVN99dfRpcaQtyZbDr3iaNW",
  "key22": "5HAg3ZCLsPioFM84Wks2yXdRXrY8TB3KkEEXX4XP8xWS6AFkowDCucRriisAESXPkqp3sviwzmc1T1pMAYpwL5NK",
  "key23": "ZwPtehUBPXFohUFr5vRMxNGkXsBsRPdCTGrLYznfHaYs6Z7pSYr2Lbxcu64KATBYuWU8svxMbV497eVeVRuQymA",
  "key24": "5AALJPFATAjjfRySeu2HtvwnHqpP7QFfzpcznAJxUN7AMg7cPhBtgE1tWopUowvoBdqA1JePk73wzmDvaRENPaDs",
  "key25": "DEJhyu8SSENwQezJ4MWrvX1ygdT9tuikqAzRHKK8WTA6uTNAXdGf7h12J9uq77WuTYprpr6LcPQpZJcKEcf3i65",
  "key26": "4VRdnRMMTbbArKx35qEPiAjgidyL3BT1uXuRVYtY7gTYPygGcFVRShr7zzZQ6JX2Pa47sb7KbNrhpVFLCwnRJC6Q",
  "key27": "3xYovFbPwfH53Tai812bA2jTtNKxPQiJikZXdyDBhwjjwmUz89BULDWoRXpQZEEdASpnWvtgL36GgmwxLbXHqD6L",
  "key28": "2RtUgwWSPVkcvMb7yCYtqNEQht48zEGeJCxxmsDYcrLRSYmfp4gKvw2P4BrZDtfdSqnxZJm3NHh875THeeJ2K21Z",
  "key29": "3PQwhVxgMJ75drBjHoYcL5wFPM5SdffazcwqonJxykockJboJ9uG7suvbyQ6xY2sDYxwTUo1gZmzRZc9VkwMbKyq"
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
