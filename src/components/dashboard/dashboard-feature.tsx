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
    "fooetKiPMQr2QgDyYn8WrviVkVUd9BnRNvQVYZJpcWYMbciPtk42TKmgoxvGDqnYptvxNpCkKBumW7UQgi9Cx3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bJchQXceLnVTtai9KsUsVZfhcrzVNwwS9caVP4V7qCBBbv5gDnUNSrYYgxQuivM4HAhmqss9EHk15pr5EMFCTvE",
  "key1": "65tVXCSRFPGr796w1xdv1GAh99oFH2mG87Wc4XtTHy3W8mb68mhmbAXTgP2bNjLitc9ewfTT2PfVggeAupFDzTgy",
  "key2": "2YMSgD81LNj5L398qzZNuNka88PCA24UnwS9Ly86yJYQWyHuFxCkQGgP188zgMWkumN1TPfnsMUt4SKxZrEKbGcM",
  "key3": "4MmzGikL5xgmhuGfLaY4YRhf1ZsjHEuvKwuGG6Wg7dGmgq4qFtVQ79MAJNB9XsAn5djGyNSz4bJ5ELusn6aLzM8r",
  "key4": "4MTTpmjyfubhnsFKppGzd8tkWvy96vYz3KPjXKDbUC2RZEeHvMEEkhVFWHZMmd2bPLXKVQ1yAjGb9EHeqgKAroqf",
  "key5": "2zaGrUW6f4E1ztpo5dXX6bYY33D2JsZ6MoxfoZ48N7J26x2bmGzww6uoZ25E2mMUYCALWDgE5n67CXh9v3QRhCFJ",
  "key6": "4Pqgj2RQ4siQTsQsnyYSEVmUk3JNUT716HbjfURedrLHDFdFjMoa78HKGL5g8cDf5Y3QqvtJ1UBKqJ84SGSgc3Wn",
  "key7": "38ycEjAnt1bNtFAmdotJBog3WmXbBeKyo1m7HDMqwc3uz2x5iKX29iUCQe47CqNyLw12s2GivGtqP8MSaNny1LQ3",
  "key8": "5sjqdDCGox99CE5T8ZiTRWiBBSJKB4eVLscNmR72FknrLCq9qdGaQQgx7r8yV4MXGxUQSweqcs4GjVJUqmvqhmSY",
  "key9": "JzWh1XEFLELuX7JSpcM4tWjKkxEhSo29cNXcMvJYuUQbssKjQzEDhWohoMfSo2iUPa3za4PPuSBcBQ1ApGkhQQv",
  "key10": "yZCHCLbWNmsEmiy5YuC8U13FgcmfBFQ6DZH8uoiSwZiKW1MxBsPD9dZ8duuNeTjpa7Lq26Rr4noKkAEjwfm7H8f",
  "key11": "2xvf9C5x6LGpsS3A6na3trp6S4xpwK5aCjV24viYXkoGddK39dvmsUDjCQ8xVsUt6zHP8SrNWc5miwxg85MCEwVv",
  "key12": "2e5bsEZQaaJLjWVjVeEeApzKKQXcC3H2ckHEH77DLepSPPXJzkXU5T9pgZdBsiDQejRHSZQb7rMhqfsTP1ZFFyGr",
  "key13": "Z48CtwAmvuahiZkYUia8gHVZoUka1rYW8HbSwUT73iLNdT7Hz9A1L5ttSTmogmf6SG1cDWcN6rf8keEQQLhrngV",
  "key14": "3NxX3tZvF8JRPXBZeBKPKNzMJu4hSmieeQg3Z1DckgtCE62Qzb5DA46ovQJHxqhQT7Z36m9xbmoqrpSxL6H9W2AL",
  "key15": "4sitATNU3d8LFK4DaN6W3ZtmeAUTb8NZGr6j7YnK8aPAkLtQtMBz7Rexo7c2VuwUpoGer2K8Vdbxs4b3oujfTt7A",
  "key16": "578MivoBut8VqeKaNBBiQ89ujf7rYvcikVJ1yx8kxdygRGMKSdC2qhoP7GKp4AjC7uJigrunuo7wXFvi8VrDyFgj",
  "key17": "6Aaig2pvDkRnKGCszTAYTUzfPFCHyGY5Mit7ZtxTQ6pDFomhN3Ag8axNP8hKx1ANcwH1YrCtPEdzH7NcVGiThkC",
  "key18": "2WU7yzetwprQBubN9d5FFu6JaxieYPkgUe2wAig85Kar56ojqH6e7REBkXeNwm2Co3MFSu7p5JVkGyb6Nvo754HW",
  "key19": "Yx5nTNHyfoKnHMRzrdXRnw5ceuYWcEyjtWpa8FLLok6ZGfvi7nFdhEpNLJqo4UdJLUrTCbjFQfN4pVtuTZcffMN",
  "key20": "5tZ2ff4C8P6pTbFMmqXbbr8ot6s7v9HcsW5ZcUm2hXpJQXG3BceHBFxR8qB4YHEHJvgcPF4W1kUseRwwFhWgqHAA",
  "key21": "5ctSDigJHxBvq8uPYgFNhiVgHABWitQnkduR54WmjYpGWZRBG2AszwEYUKECtq5AiRGqBJ3NskN6zfcW5BgQoyGx",
  "key22": "5QBj7ETnt7Gs8vyhs7nUrmem5eGZpbBhSnoTcQ43q63fJFfhivRGWkrUQGg57JNTc3eFEZPtL3Neojr9wARNLkNR",
  "key23": "2gU5nihdn9aeJjMXvUDbuLKfRxokkzg3MD2yhQdKPnFJkDMoL6Vgv6NF93a3gwnyG3rXAWz4xvGQHo3beDBGKzwU",
  "key24": "2YTgsm6hq7MPHLwrhrTkWLgaTvvTQPG1qe57JxsYZYYTBUAdrGc9geW1PFjgQA4tVF6pVMbB1FpsRcb7GdxRWRBi",
  "key25": "4Qv3FjBNvhEMfqMwv2HAt1qdjnM1fgGwavF3P1kvhU5aJyne5UTqeGp4q54KAby4sR26rbPyrnKBHdxjiYWw6k6H"
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
