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
    "2dPReKSvfwgmETbmNMtwGaBvxHNADS8Do6Zo5yMtpTAoiaiPB7ssqhgthWkCKxZVXtHgbZrH5f7Kws4nkxXNkhh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mRYHwa9kLMBEgnKV8pHyEruZYgvZVDyszTVy2VmwiTZhc4F6bTYvLFypFWRrtNfz5aZipRuz5xSukVfxV1Vm2u1",
  "key1": "3eKfR1UFSGo4CvC6krwgD3BRdkWroWRtCQXS1zYbZ99KmLYJQZcd9aeytoW7MC88ePmNUybXWADAqmmm9fq5XbcU",
  "key2": "27eNaErjUYSN4Up7auCMSJuPUhYzxxzK7mCtzGRV9t2rBDHWx5wZ2tr8dwJrYFnHx3nnVueJU1SdRqe1wNbAcfS9",
  "key3": "5DNm7ga6NHLi1MgfrrLqWpZQNgndJi9oQwxTN2UJe78oRjt4S4MBLt5Qx3cPLhvkvEku5km7yKxzHEVWRSS4CC3k",
  "key4": "5Zq7K9tiRGiiG2deHheR5mKYjFhmK3QsKygJbdw6vTpZ3VGswcXHzLsFD2DAb7oaia5yLw1D7kHATemdAxaLBef6",
  "key5": "66skoPEcpjjwyGojPMN2VHqXhqJKq9rwvdgooTu4uw4mbc5APYH3R8T5Qoy4X6TahSDmyAYabGR86x9v69YBSDDr",
  "key6": "2TcDM3b4pL5fGNvoQiqRi2rD3jSCFm3BqcRWQ2o236XmLsNHxuo763WGp3MCt1eqLFLPYyhQb4tPr66pUtKaqyH7",
  "key7": "2eUSn8Z7M24DG6tTLy5KYh9K9mitUkcCqtDtVTKPoYVzydmYY5paZDKUh97xgNAynEqMcvKGB68fKxsPViQ6iuxE",
  "key8": "5fpni7bQ3XF6147DzcytmTtvbqzyJnArkzDP2dBcy7P8f5CEJRFh21VAwStmUtroRneX7F5Cw7V5Fyza1qmaJBHd",
  "key9": "5i2Muigtrjj3S25fVg21Mo8VKwJhJSWHtK1j1Rjy1xjWkHRB95LSup8rayTSE5wUPG9xsQe4eeLg7a3EybWuVBF3",
  "key10": "HQt6DqfPUd9T88ELyuC6kjZ45ziwPbyrZ4m6dx4QNkhCXf35b7W9wZRTiNUpQdtXNWcUozxUcWDMyLqJszoTA4w",
  "key11": "5q4xf4q2sLjTX22QVnM2CLcmdLPZ61wGRAAuwEWreoL7R7M8vhkzJnPMEmHgNshhBupY1pUh2rrYBVNpfP2La4Wb",
  "key12": "4AX4ag7rAzm6E5gGsafCJAAjAzHdEjAFZf6a2MVSzE6fnvrX8iJr2qVDYnbbMUwcuysMuEGFu1Reb1EwZWSbowst",
  "key13": "2V984us9U9FnjgGMpP21rpkJRgo1JP7FYzAWcUTebFGTxFSM2CihUx1naJAdqvX1gZtahoVmbmkTtNTgagfM1yx",
  "key14": "3m4ED3vKxGBoAJ2Jeauqx5WxZBMhHFww1TFuJihmLedtMEfpfwgTarVGUoGNXDPy3UNSprejk1zZWcQgK1bW2Kcw",
  "key15": "3fHzcYuoZcU8UBpsKbJw1ZmKLM2VR5Uy42dxEXvHYB7uYEMHxsmMYP8BgFnNA2R8CArZtoWwPC3cGPWFvQ5NbWqo",
  "key16": "2PFzbKBJyQom56Ra4Qb8jnAnUpmu1fZHQGYu9rvF9k5kBweL9Jt78U4Znb7wSVAi4HsGHLSrX1EjbgUzVsYHD3f6",
  "key17": "4obXG4qxjJk6EodGABZU4y5jBdKKS4Txf3svR6aghLUoYD6PUpLUd8KqR3q4nHJBAx59WB2L71fEjrv61yRrKmSs",
  "key18": "5GEbpc5PBUzDhSVuY3JjWvyRJNc5Ln2nDnwFGpwgJnWViFsM4U8hM7M387Ncdqg6W1wdv9Ec82JC3y7VWAkFmYuT",
  "key19": "5j2UNtUocrpdJ8QViky6aa1zBfnuUZvKmBqVixRFjN5doia6zbHojXNuYMNYzLNXdJD9kRDEUp5QQkn1UNc5wHtV",
  "key20": "2QR9at8bJo7CR1uv5fuM7QvkfNe4cxMe99EcTKXtGvEHhX5MLgmriu3adR6HVYiHnsny3vqybfeaso3MjCY3iH2D",
  "key21": "3fCDnFi2fsDC9ZBKrVz76GerK7kvc8YxV6MFymuRUMK38M4GySKJuyHjMQyFB2dZuEQAfZeK9zVX4CnMfybVkvQo",
  "key22": "3P8BHdNDYC9wJ2bMxLNdXcVwLPzqyZhXDhpjk1D4FH5UQXBoJruUARBnqTnbMcdyMCc3aZeQRYBnuDHDZWACYxGh",
  "key23": "2XrhMw99vdc6MGoMZkJcqcyaebvjo6vei45AWUCksJZvUP4niAiuFZfR54LCSKZ2vWQYnAhCoq8ikC73L9U8nHXH",
  "key24": "49kBUhVzkNgd41VvLZYtg1iE2RD7xTnaLTbM2LkmdmjdeXppzELNaZ2qPYfEsPSdo8NcnCKRYzBkqWXdtQ5NAfo9"
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
