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
    "5zpTXxxgKTyqehLbHJYoP9o8xP3k72Sdu6biJMjJLQqs8nqPFx1QNr7fRYtrtPyvJzh4TJUL6QC8taoyyYrKQSJ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GKUZ1o6kgafiNGBnHqf4LDx6U9soYA7HK6WESdQWCaxCFQsd63uqQmbgqhPLZ8u7qT3KnVhHZedo7R3B8zvrZsV",
  "key1": "3b8dfCKFRciEu7ifhmTXEQnFb5oMCnCYQdndh7tCTVDret7D6HptFSywPeqnMRvgpic3gCcBH9vzBZJumd4bJfEM",
  "key2": "2MzvpSVqJNdnN1ciX9hpDLJtxEr6K12Sntq8xB8d7ANmM6Ye8M4dydyK9TM8ZjJkpJbLHTCEnbfCwnKyToByLQvX",
  "key3": "4ADYBptjTaW5TXtDg7iP7RM5UGB2rsumZeYJN1hqtvh7bsL6AZr1bEVYBSeyZib17JBRzTepFeiFc2cKs2AN9RhZ",
  "key4": "63pgtdd8gxDKGzD42YPFbYRaX8n1wwhrqyWeEpZLESFBvdv872dRjTSME3V9AseDB4TXr9jLYRmxeZAtYZK6bBvZ",
  "key5": "3uzgJ241GzTegk14d4o2EGoYyZoF65RvmxypDcNQQ4toH7aMioGF1x91TNEDZKh6JmtbEhv9cZBrpdVxSRt5CMCY",
  "key6": "5DPxTbbqgyTsL1r3UcvLe4wTbvgL9yh34r2zsGqCxCm3AvnSvHMrHriFzjYtzs11oFmsv4cPzn864NMNKdFuEyMA",
  "key7": "7w9imKQfsxFogyHfEQsrBfpzTcsDSPCEuLqsckJm9evk9yf16wY9hBAdp4xWc7vhmvz9Zj7JcRtuVa5zsEsxYZJ",
  "key8": "4ZgTLHeN4cxCFCmWmhbQqn313t9W9Tns9fDZCP3DvdhXSEfv1WgKHfVbnGqads1SruKQrHwg3NZoxhhc5AGZbJvD",
  "key9": "5rLNAE9hWNosbkoCtXwaVkTazkBNc3qQp9cWsUNptrQbcQJGnULo8QdBj7MEzkgHBmSRWo5NLmDgEMURvvvU1bRu",
  "key10": "4QCLf4ZvjpYEndTKTU4Rcz5Ccnx7t5cAaH7e53opqo9VYWh8oqzajrnUBFsy88eLtLxPWqyz7jT5NGqawsX8Jy6x",
  "key11": "32JNr38uwgmFEYd5CxHh7aL3FYScVYgrDs5wETHFcTPevqGkbLDeEkFru6sEW81JzS3aaB3gfhTfiJbojxmSshme",
  "key12": "5gT7WKgumaGzpsdmmMJ6JyypcgKziHj2FtwfVu9DnwnCpZHqJV3sdkE6xfaLi8CHVyoMEapek9zMtsAfSZa2h6Ap",
  "key13": "5b39M3CzVVJxKUn8vrCguVkXdt7undjkY2KhqpeToUZxhH97SCGKZYpXmcMjTpRGzY3nK8hf1omwVdNp1r2KD7HH",
  "key14": "2cnn86Uw1PRK6EmBeX8gSH3VydyxYnEv9SB6YxBCwLTYBeSHUF2wffZimVeq2RNrXS7sE1xpRDiK8pY345bpx2Mp",
  "key15": "4YnXCpkjhWJ2yvJ9x1xVvAyxPzPvvDpVdENXERg2biSoymajXaik6oRtMPqiwUnMvcJyPJbkF44UGGjJSeVSXy56",
  "key16": "3d9QBNXdX3aoS9xg8khuN42WrvRqtvrAPw7ijsTj29gVxvXkbVcJLpuGpiCRG9bX8yjVZuKJenFATGAUyv6Ga4qN",
  "key17": "5WMxqsDTVUqsuJsXx2rTxVBZVMhaqjX9ztgKVvJSpQDC2YghhZZtG3TomE3VjeNRoDWJfhhZZ4DiiK96jTuf6anu",
  "key18": "2uRWkajmCWjE5DevRospdeRhG249CPYHbu45UuYFaDquH3tkdxS2yguBQttbsN8D5hJKske7hLzaMr8RAt8B6WvV",
  "key19": "2VTkLY2EfekcmFt2gBC8TkxnKK4a5UABrqZfpYMXQRoJrY7NrjUmmnnDKe6HJjDAiHnJPXgdVfodcauQaUwwMUUX",
  "key20": "2KqVcaBmMREMKRDzJciipHnGRh8Vsx9Nrj9pCqhcYjQZ9sbmj9UsRcwHnmM2BNVqY5K51hjbrCungB1iRewpuJg3",
  "key21": "VjYrhk3a72E26ctbCHpv1eEh9BVKgYkkDAXkoExMRn99KXyR7ADQPqLdGEpeTLtJniCHRBG9fVzQnKvpfaTPmtg",
  "key22": "V5HfTGuGcybjcUGuEzQadk9GHNberhnoKi3iw4o34zzvTTDkxdzLMyp5A1eqYuM7rDgju5Pa8gJnLG4nfHMSYL3",
  "key23": "3CQu5af3A7f3EXFc3GJGu4d78xNUaBNnfpavNPXhvMFZYQzaGX8UeZVu9hu9MPicXePTf6n9MxmuM8umo2oAVvsx",
  "key24": "4JX4nf3vYPKcBEcHbEu8dPiLb9wFB8c7kNGcAn7wb47ngFbwzzZ2WYaLh49E1hWqWZp5DE319CeTYGZU4BMcFi5r",
  "key25": "4UC9v9vUzqqnyQqt6nVDrz2YkDACfg1bUhYP3SehZUCZpWr8sv3nW7B6RFLxUEcEKV35wTyES62GDhCpUCr68iRt"
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
