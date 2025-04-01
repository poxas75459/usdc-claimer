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
    "34fQt7EaKHXdnUN2f2tSRmVK1nNXgJfNC5Jniw1uJEvPH27Q2ptisGR7UUYyLzgbziwHnVxgL4wwhVNp5q3NKR1r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "538hrM4rRZjdEYqtDUc8BkYFe92EFcCRmJvaa6Hd657cWSDYabcDQfLo7uW3QQWCZFUYEpiFTUSEuER5vi2Y6Qqs",
  "key1": "ZMUnm7wgjXWTLkizAgsgRXyk3sdueidYxcaFGz2dZwPtvoM652TPg5ySXaxSYJnKbR9r9PCKvsDS58qNweh6Wvc",
  "key2": "VBiRYsBvqJxB7VHsvmf6mNoVT3vaHajrXpCS86MFrwH5PymTdgACrAA429wrDiF4pQovHdTHPT641FX1BG1DN2D",
  "key3": "4TYvxtxGFCfJb7NubS8NyqDpy4iBovqBPjrH6tne3H4SuD7ktMKXnRy8Cn4HRUvuy87bbJffzpcJ9hHmq7DGkSLP",
  "key4": "4WHigh5RBankHgA7C7tHWL7jfDUghsPsbgTpLjjFsZyUWXLafp4REUjtyd5NmobCkfu3YGSD2TePciHT2JCWVEq8",
  "key5": "44Ao3nZvhcvkFdxHZJhcf1m7nfDC6cxSYGrDLy86xVmMxVGcEakii19QxyQ43turdeWgSaX4ZowSK2e4bgwbzVqZ",
  "key6": "5oSaNfmFWePiL7VVCvtcwRkQo2uRwAzMtb6mxK6N8pxdLQ95gHFHC28ZYQsonguSkmAv6PbUYnnrqVLZ1Geowuzi",
  "key7": "2H9FmswfxkC5nJNjDcysMrYV7XWm1oNJerM8bCJpx1x4XxHsupDnZZnGeE1xRhUD4h4sFpontmqC9w7sXiY6wsLX",
  "key8": "5KFXYvEuUiM4VxcBYdNKfAAuGowXYqeH3HQrBjswnYrgwfJRW6FQvdC1z4zU1Z9rVMRMkG7JrsxrFbcTYWN4xymE",
  "key9": "4aW1VTBxYHor2YbBEvCjq3jSmGDiz1ZCkcW3xcSLxSuD8vFd7hANS8u65rxfaS5WFN5ZeSxzrpTicYVAxUuVsxz1",
  "key10": "4caGndquiEUiQMvnLFs4ii49bUGaePuPvANn3y657ehGq9n6dGhWJBqeSMEKKYcMDwRGmBFH89AjDrfWHVRHcQPD",
  "key11": "3DgpWo9TFNTLYSKSwLdi2K3JxPeYxG23FXRVuVwefQ84TMcUwmEwJpU2tzcKcGraRMvLXLFZU2o9tVP81ceHTQgA",
  "key12": "38R5BKMPorsryoSMJ75zdECEqCKc2zAXLWxkt6gpUMaeTBYzEq9KihAZWHU7QVnw2yhV5tEKe7UaV5tEG1683TSe",
  "key13": "26UeH3pA9ourttXXs16sudcnsmKdeehNovVnZSHryAbKfvz8yhv8yS7EY2xwsLUkzWp5Z8rxHvkevGNZMZBtEcSd",
  "key14": "27q7bzGn6FS8KC1VcUW3jJ7JvofW7d1tq7R6p8geqWveHWzy2NDzSGPtftFrYKfhD6N9peTect7qHeawHgSi7V4y",
  "key15": "T8t31teiWJJdMYuW9BLb5GP6H8ALLBTptwW7Vq1XHXTNfqJAcJUpxmZyirYb2pEj9dGUWkkC725Azy79AVcUuU6",
  "key16": "32LsQSBnkfh3SDprJxsypTRr71qij75VfDV3kptsCb2QZFqR71y2Dh3uWrk5ksmhj6diopaarcwXfx8fUkEmVx2j",
  "key17": "3x8Cd8CiQ4UgXPL6MifY59MZzXSyZNQtDKcwQXZPHeTSSrjxFTZfWVxbnw9zjRWFn23BnsBYnZiieU1gtAuQkEkS",
  "key18": "EPjWqW4a231gKX5mcB7qU6ND1nFuk6zw2Syna7UUTXf4SVSM7dTSPdTLQcb52nbrGCENyXBrYGNAZj3A2jpic31",
  "key19": "34XixQDJDaFU8xuL9SXDUYfFUDfLxHQNwRvHRWS6jXFc2v7njJ5ktxZBHL1MijEEAUXYvkt7YHa8Vt8X8jrNMdDF",
  "key20": "2B6DsXUBrv45KxRSeQ9QMZY21cAurmjTVn5cws5s72W44H7h93C7iFHhT1mBcW6SNnRurHyzt6adGXQY5t6TSVSz",
  "key21": "3xbA5eiBQBLCYCsJSFg8zLRiUBnoBa1Cz7kGdTdDb2QnvCp7nTCUqd875f4kHYYUtmiz6jBPc1UaDX7Nn9afSJEe",
  "key22": "2b7bL5ZpJU8zANwrKazpc1qyQD8hz3YwVHZU78t1aGzZhodXNHSjmLbJMoF5srmN8VFPxhCNBLc29z9ztV1LHMDb",
  "key23": "5dqWwQDRPrRrTWo8rv5XfXEX5S8jaFKNXJfcVUWQK5rvjAZfcQRtcrqMt16ax3FhTEmvDnjF1GuCxc1iaGBVvKwa",
  "key24": "4aiJgExaPJfrUWHuxfy25mtirJQ5GsHXPJpjefrJd7xbWZtBcUipG6uQtJreptW8KqWKGKCQcNtrZ3FbyuWCvc6e",
  "key25": "VaGoteWiWbzUL81UZvrcw3gm5QRUk1RCLNeWTEj1mjJzEruqttJz9QiMBhwAJ2cxEsayYBZShd1U2o4tTKChs8T",
  "key26": "uZB7HhBBh3ov2v1WuGJEb8U2EHnMSHGWaXCgXHZGzpEt8F7sg7DY62K2ZABHdYcCirnYzNHKEtAhgJWtoqcwtTo",
  "key27": "5R5cDBNWmHodsCYCBNt74N3UHzwDPf3qb36xjTB9eiKqLDj2rRm4YnevtQK2peG5UogGzU16tMBCnd3LEMkSW1HF",
  "key28": "3Zgs8m3Q8SdjNjKSk7rpjPyqFrZLtKqzd6cLbqHv8q6PedR3H3asVWuKbstAzz4JV4Gvkm3FsHg5vdzbea1oV86g",
  "key29": "4FrhWJAZhLTAFSXv9dtNToPzMpDXpL5LhuJaNS9uz15N6B4CjibjUMgamiXWM4Bsxx6pgJ8SWeZfmdjysPLnfUZw",
  "key30": "2aegryuzkTbC8EAr4a6o2hv8bmVf25xo7pDh3qH9Qnjzms4SwAiFxtghPXHTmZvEa279HtpMCr1jgUG4x9cpc3DD"
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
