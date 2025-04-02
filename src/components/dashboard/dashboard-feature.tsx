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
    "5TDqMRu2niKSjoE182i5ZP6VXD9CmqGNF2SMJcJP6vVFTYpGse4VaorApnpF8sf3kGKZkaJbwjcYdQmk1HM1KHiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46BtyZfeSN4h99zjKu6UQeAD5RobVUJnyEMDn3xTDLddb9Dq1Vfcnujbe3qThabcyLjw4iwfJd6fQ9XTmJ4GMmgG",
  "key1": "2uzvy4gqCmytzCj9SJziwpFZ6eoGkn6PBGNPx5aYTrwAdSfejZgoN46pqsWMfNSiB1BV6NHNBW55rjJpyCruZfGR",
  "key2": "5VWowVEX37Mmh4EjUj9uhDoau2w7z97ERYeasChT9eRu6CWtH7vTUqsVVPRNBpAtWo9fRFQELHqwhWdnxpHPdNo7",
  "key3": "62JrcLw9yzLtB3TwXtPSj7NccxthBtwaZo6WRU6PgqrDrrLqtveEg61gn1LipEivFRELkNGHrCT3XrzXfhP4r4iJ",
  "key4": "2BVcmXa4r2Bg2GdjxLPoUBp21sJ5tvhvw5RuSbbBAaGVWvhq1TbMnpXQaa2h5rtxoSzp9eUCHP4464sj9GFQ4GBW",
  "key5": "crnHbGxQQpbVQAj5MRctqT3XBWfEiB9ZFNt8teEgPnvvR5pvJW7Up6UT4CjP5aPcajwhQR4BuwWsYNpTTX8ChjC",
  "key6": "4AFa6cmHrLcMCo1cUxmE6vghCnTVCTinS7Nqu6cBKrfgNSUJfqDyMPsp9FHNo4m7eKRahM1xr1eGs72hLjjVe2mi",
  "key7": "3LPgRSa639Sw4sHpGf8ChQa36ZYLNYSTbMkcvuAH8kDPxDxeoikQRpimoJqFmwpM4w7h9ynk8dGcTWp5U3JgqXKU",
  "key8": "H1Qg9rjpBuST4ddtPu3552pjaTLSW5P1Rosp5Z1paZ6iM5LYD9AwLqefZXkdYE2dzbCZqSyuwbzbuAGWG4Uat5N",
  "key9": "QLqKbfWjtViy9cPy4aKM4ZUP45x9LyH3NEg7BzHH9A6A8WEkvyVYHU4YacadnPxVALzw1qQ5Vm1PDeKEyLX7x3X",
  "key10": "mo1oBoH8JGhV6QDdSaZJ1oAo4dd6QAP45dYByKdvr2SdApWXEN2LDQPpioyyb776HPKXS9zWY2XkB2b2LMHEbGg",
  "key11": "42dUDcdCrrJgeC9Wokzr3cPW36ErCWMGbBbc7yDD5pgpEx1GXc2nQhEy5SkF4i9fuTzQQqphQpujg7swUoSMntEo",
  "key12": "5xy55WScWKMb23kmXxMskVjecJVsQLhapfmepZhkoiPjGaA9F34VGqxYkAui9AXSTBemnwNAiAwjZWmdVcTGX7ux",
  "key13": "A1dBg1nD34m3Xn6CKB3zK3edAPCEsJTwdZMx6BGbBovaSfLWtgMPDzb4EkYTwfuHEgMrvs6SDhLshW83iPuT4sr",
  "key14": "4kYFxyAJEnRq4jeNnJVqqpEJL8k3FqPewrUsuLVdvgKhEs1mhvF7GSeJBmEEGUnhe5J7tSRzXbaQAaGR8ysB4FYy",
  "key15": "34QTMFaBuoapkf4fJDeVR1hHSqS3uTaXrNeCJR7ZJzjzrCo4rjgDG5661B8ATbm2nCAn5mEBuvwzk7g7BrMttbgU",
  "key16": "3adma7nf8Jj1CDDjBdcC1SRUWAK5yQNXKNkjJevdRbLgvUWyxkGhrZAzRbbFEqZUhnJwnvya3J6vwRD98ppXria1",
  "key17": "5QAeK4MuEv5W3XyLMgZC9bowrZKmEYMfu7yMwy4D4vrnKk4XcT7bJyAW5KBASP1cujMbJknu2RkAUbs5vKygD41V",
  "key18": "332DPfcbvVebqkKwCB7y15axYuu9nTiWbvVgqMvfGHJVR4w6zwVq9NBEnYphoSc149NayGKz7yfcK9S7UzuMZqGe",
  "key19": "jGFLhbQvuyULBpanMMQnsNQ4wD24YcZUbqEFTp3D59r5DKkhSrNcDK2NwwbbdjxF92DYiC8SN5kKWtbq1Kncxw7",
  "key20": "yiMKuBVrRuFVRyMcbTAMjG5cpP9hM7FJSkCUvuvfHjweD4BryqYQsQdT2J8BSqZeXo1uLXa9vc339nPFtHWDaZn",
  "key21": "WwjNhaw9Ghaq8dpiYvrBRXsKm5xL6Fcu2CCC9A57k9DBSyKDEQ5aY1cw25v6cZTzmS23FphLuhxf4KhpM4GtEKj",
  "key22": "5QcNvJSBgevxXFqEM8Mmjrgd5anKFosvWKJ6HYjzNeu9USP3ebPorNVRsqo47ckD7X5iW1EDPCdovmnK8RbZcZ2R",
  "key23": "26xYiG7A3LE6YahfaMC59NxTvo2PF38cYGJWVvuCCz59obFtiAokczge8hHHJodYRbk2L2s1kmtSRXFvi8sTJugn",
  "key24": "2bDL9RFPJMVDtVKv8YdTtBTTFf9VMJHeU9Cjx7tegzE2Fu9ERMD6SPk5yYWRbMczMJEktPSGE7CmUSxT6muK9CVD"
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
