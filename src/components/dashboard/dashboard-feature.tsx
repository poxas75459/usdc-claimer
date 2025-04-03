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
    "5GcX6GwCq4MR7CkyLNo8dYnUZdG7Bc1oSPnxpTaus9pYAv77jDcsN1CQV58BweVKGa2SR9LgjzeNzT6L7fzB5cKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47HUX5y4Rq5i9duTfT2i2i63zTapuTJLMryhHsqNSswnPxWLFPiZPyKMxvRfcctQfT4tV8zY2QqmdP7uiBffjH7e",
  "key1": "38E63KxkW9xAHnYnWYqiABk9XEj1ucGDQ2Sj4jeHjEj5a7NeVdej7Rr997eWPPKkikJS2UFSERoLSVqyAPZiJeeF",
  "key2": "M8phQz9hojgGbuaBmGuUoayZZiqA1gKLunrNmNEb8PavkohL8HrvJcudwKUHzMXogwC1ak9WFL5gvj9hGC85vxZ",
  "key3": "hofFnkMCjt3NZE4btrZ6KBophLG9YQQWG7TDLyC3e3yzh3jSrdpNM8aei5Y96RUug1iQDY3vxcXAEbudFWrmRia",
  "key4": "5RruG8yzRGqZV1q96rsb186t3R4ukF5iMuXwDXk1GuLFEuHP5gdcT4kmJes8ag7xCAGJ1sPGDywRWTd8TZUJECYa",
  "key5": "DXLEimferjQiR54996aS91yBVg5posXxYLW6R6QckwJsEvR5rDy7kkxcZqwQysgGTLZjc1dKWGwe1vQpwtfJGzw",
  "key6": "3dTEcYH2TcjL9SXtK7dpoHg1cUr2ZkkdYd6dRzRjUWK9bLzDuayk8HB3VztJpTRn6JfVmSMpzvewexqU8ozYV4fG",
  "key7": "iM9Ykk4pbdXuCKtkHMe3W42gmsk4NNGb6M3ir1i75DG8smj7XQ8Z4raaqAHKrqzjxuXqHvGVRiyd9qNfN1KEGCp",
  "key8": "RKB3LBLJfXnpHZXE6bywb3nWPxxYuuEnTxUMTs627ijasm2fkakrpUBzEKr7Q447hUYgKHxQq9T8fn4sjAiTtU4",
  "key9": "2DRf2K2suo4gCbrwdtvTYru3R2aBbvUhy7yY4hUjTsf7GWMRELXQXQLH1ML25QESaTacnL6fWSC8Pm1rJHhxLTVQ",
  "key10": "21eno2Gfu9vQL6j7U6XYAEfYHqYAMDM873zYAR1F5Km5cs26rPKnLpdTfj5SqWQ1kXDHqxdc3AdqiBnn1As1Y4bx",
  "key11": "3dsZenXz4nX4hdzsYSmJDU5XW3LvNiRv3keoWMJjYPtMJu5gLfh7yvaKG8m5fuWL1P3cSHxEHfXFWQzB1QeJM5uj",
  "key12": "2cf94hxJDycXtqU8vpBxE8tzNyspgZ4fLNpkoxvoviA7nNPXoi1R2QxGoguhFTo33oB1p3SKeWiJQcjSDhgXViAL",
  "key13": "3cYr1tFNmuxrfr6LH8P6a4cU3kSTFm3oZudAvHQ2yvZvnJmKHge7BPnji2MLrWU7kebPufKDS9tomUmi6ZbXip4T",
  "key14": "66ZVoHrGBMiq6TU9cs2Z5JS1PTKCQE1k886bRLCRLFPUup2xqcCk27G7vEGN5gBuDYjimsz7o5wWKq31SqH6kuKh",
  "key15": "2aNxUZQov6aznKNydaohvPTYMGMb1TxHEPm2XwMXsS222aDUPQgPfxqxW65H9PXWRJ87ehfKfJs5viJi5h1HnBUr",
  "key16": "4g8YuuVbhXN5UEv4sdJ29C4CyfKzs9AGxERgoTM83YcmfvaspYnG4yRM6tYYeworU31zd7Tgqg2yoEqSZwrP5abs",
  "key17": "3H8Vrm6JcxCz2Rxfvaft7NnmYYfC43EfHA8WNc1ovr48AXCwVsnZAGRaUBs6qCbC3a83DL5nJWATXLuQmpT37oep",
  "key18": "326CsBfhwmowskwKUNy4oKPYEK6XuWSCkrX8PRBFvN5qhCPxKvZf7nEJZrXXwFtF7tbBw1LPvk7XxkCaZJi9fG3Z",
  "key19": "44d2tsFfz3RupUEEsFieNA2F8n2hVuH6zdA2CNeWhziuEuqEJdff8baUnDxjmhV5QZup5dP289M5e7zcGrSapRqo",
  "key20": "4hZNBM9HDurgaYb8Ua64UzQxZh7nrMNa7qpyMQB3euowPoCC9YXFcUeRrVHeNrL8em78XXj9xdAvxR5max2mHytW",
  "key21": "52wbp6EHuVdbEbcNdmS9kQ2uMamzVod2QqUPFHg1JJPxmBDNY9HogPn5TEorRxTuwNqHxy7czjZMzxvn92YQWaVd",
  "key22": "3D9mupRmPGJrToKQkbtjefzWeuzCWB67YPsbkVb6VFfVMee8mjh58x4DjvWx2ue8xpf6qPwVvEE9bFV6iWJNHg5V",
  "key23": "2UY4xtHPPzJ35Y2PgoAN4bwJzNn2B8Xd7MTDZZ9Jwbs8UHuJ1Skpm5KfywjiyMhLW3ehF4WJBwruS86fnLYmjwPd",
  "key24": "5RxXwEkgw3n8ch9cRyXnUZGCDoEP2kb6mqFuf9sPNsPAxGzsUNnT3tRoZ9Mcbq77nEaBQZ265sgPmBSxcKdZq8wg",
  "key25": "2rrbgxZJ2ABqrHK2XquPT4caBX7rKPdZLcWhJ8jZpDbL3QFHLdm424hfX7CPnvYFaC8PETak93pxRGf4eU4Dq1F8"
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
