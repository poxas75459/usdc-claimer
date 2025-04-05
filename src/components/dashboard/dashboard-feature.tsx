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
    "2S3J1JMmzxpVjgSkmGW61kjAoq3G9GzzaEdmPwg3852nH7fWpzVaWP2tNbw2FrYNzzo1CCB4FNzqkzuY6B4rP6SY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KGNJ3aJgHxABMowhn3VcxCc82CaQChCUiT1XGeRRUb1HnMTxpSTpzhL8wvrpNXSjTLZ6cDgkvNy7SMSvTeBXVsm",
  "key1": "5bfhhXuMfqEqKAbGhK9eSkCg6jBFRNQW9JNcgq81ZDFG9rbwwbRD8xJXNFE1UAhKfo34AMrvdWqe6U8yahTe8myw",
  "key2": "5HCN7siwKwdGyCF1iAVKRctUvWVnDLGvzhZQts1bC8EraffJuRt4NJsvYsrf97XaBLJk4mQ3cgyTRv9Ghgd4wARg",
  "key3": "3oqBhBRsjB32TXdTCsmnyKMQCuetaBmiH2XX8ZU7yJL3FxdRs18uxtnr7tgbA818BZpNYcxCi9wdMvashEEgnRsy",
  "key4": "51BkYeMkHMkqjj488MHMSWntgfWS9XngsWVqBTRfsg7p6KwBujQSqsAnaUvKBqPLQ5Zf46iUdLydSJifLmGJawZ2",
  "key5": "xgYdzc7H6AL6vMKC9pKgigL3RBFvhq3RxMLS8zKBX47VWATQ7fKDEMgWaaJJyueTam59SFPgzfziV29S9ndrYp3",
  "key6": "3oeTt8W3vD7igPdSycXzSUChw8hq1C2LkgdDBje4qntpK8yNA6mBx8w5hJKKfJ5CWwo1FzYfHPURGLnDboRiB4MX",
  "key7": "5d9PwJ3VKM9MUk591Z913yGVQH4oRzBNSLpnxrWt4kTbP4FcCKVAjTwPkm1byXH5Wy1rSsUdYJy6pQe5RBC4Gtmr",
  "key8": "3RLezU4xFzMNPh6ovvKLmWpSdBJQ4XEuPbT94zNdTFDg6wcSVf21WvsKjutRF21UiPipwQh92vV1PqSfLvPmAuMm",
  "key9": "2gy6bXEUUp8HNThZM7fRQARu4EM7m6qacrrXaBQV8khv23gRvguxmkpqzFkA2aBagMDjgshs1oCBADCcvt4yUCds",
  "key10": "3nB2s4DUrCWCFqVp3qwRkwEeXAo7XKANXuyUotYnjuKhL1P8o4pJdqJba7azrTVU1GJs6mHQsyk4NZKKee5obHdX",
  "key11": "55ZDcZZ3CRiuyEEAHhF7FAZaxqZ28YsEMnqisG6mhU16CQWQc8gJkmjB2nQvZfp3XruHEfxYk27aZ6oa9mfEZroC",
  "key12": "4or5ZWWbqT9jZWCcSw6uNJkdn7T5pYKVF9CbH8pPKijx42UpvsaNLbxfJhgzvLeznnDnHmvz8ThtrWGv6mevbmR5",
  "key13": "3gF5eve4XANQL5FX6CcAPAuDZ5H7chfVKe7kMaFChJm49nGa2yB2KRVPMJt2x9xPMZdbBg7sPweVxmrtn8GNYJWn",
  "key14": "4TP2J2hT8JTxFgjDNZXU4cNtkfnABToUMLPFxQtVPpfDbXx8zcCn6EqY7GCdLVaKyFdoYmgjcMiv14Cm4FnJKUsg",
  "key15": "5drHj9p2ggcUqwi9WMfFKH26ZHGdoFsEgZHu8nppeju5ujumBPKKTfvi5V68rNsVubkUYnNYemf7XdNyoDNTNkE4",
  "key16": "67bB6rvihweqHt5tzC4mrbyyoCaRaPcGxnzUum8pTLiRK9md5u8Z4qh3HsX5NX6KY5d5uZfiisRd2rbzVLTZtBSP",
  "key17": "66At6gLkyeek1SDy3XSuhEuYys8HrpMuGW1bAr8B4U1vPmZi6wC37kKTeHgd5Stbc3bR7aZGcbLPY8YSmgHN1J93",
  "key18": "wb2TZgL7UUwXMMpZC9Jfgx4omGWhAELwSeHV4wu3DsSUEy19TqN7Qy4F69nAutvbHkEDcwfDrSW8LVQPkafQM72",
  "key19": "5gLjECXfhdAHFYfMLF9vAP44dbBHH9517idJ8yZdHiJNDnhjpHeEiC36W4CuQ238y259A4JA8iXE81N8NHnx4enn",
  "key20": "5ek3bj1iS1TprFiTgbiFixapqL4PujQ9qjuo7izSLRYYW7kzapj4EVGErn6nTrSaDgbNyD5iSKcpzUQkCgwBTAD5",
  "key21": "DuiKnQV8dwcu9i5h9FPiLR3X1H5XAftqhaAuMYbXXXZ5CPgsLdPoXJ4Y22xe8J6oxKbddpo6BJJL8RFrExuj4qb",
  "key22": "5KbRRsxg9wqE9hXGtUSeK9gHV83ihCLAZU8daKP4q3DG5d3BXSReQQchF8ebiJYSqLem1MhgNVsyjvQADtGM2gDD",
  "key23": "5cZqQ9qGCx2SdduewbrCLpgUWXAV57sCNkw7FCMVgsV63CYsq71RJJLxaZ1ZAjxcGBjKF2pwqUhuFmeAbNt9SAg8",
  "key24": "rRK4RvMVArjDsJ6WZrrJyiKKBy23LRECvR2Q9vpa4JLJCmMFUPiK9pLvCj8n3TY9FYHNMUhZMrE9jk4S8RhRvPs"
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
