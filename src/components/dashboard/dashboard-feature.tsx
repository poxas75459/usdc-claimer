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
    "4yRUKRS15NB8u7LZfVPCsC9JJD36L8X1MvzD1K6NTxEpsesYuhJJ2sCFVhkLNTtZ9TmareintncMV8YPsBaZFk49"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m7ueAYYiAG9EVYHskyx9aQgxTUQcpVZZuZa8hxnrQpTeEg4siYwcqTYFJjc3h6G6A77JbpUBKf6P1QpyUa9K3aW",
  "key1": "obrt5uowaHpSXLT7NmGBrxcPCMDkNEpqJXVjsq4teetwKLEkr5HCHBRmJQTDm7GpukmpGXvBt4TVHuV1q7eVAgi",
  "key2": "5V3szHa3yfrdXDvNhCL53j8QYywbhvWnXTRw5YuuJ9Jo5UC43ptHzpoNiBg2QBtvtWMDAMFNm6D814hC9AvSDV2o",
  "key3": "2zxDii2XwHQwLvudRVkXiPDMtUxjfRp4GRtVFdqyy8JrUtY2stiqVixrNyntK8bauas84Tru97gWV4cDVJFVW4QS",
  "key4": "2Qde9zCGiR6vJmDKuDyhTYZNpxtve3oYN4cBAavWpQ9fRwf7k55pd4JBNbsS4Uayr31Hm75yWWodB8AtReYYv75h",
  "key5": "XVEzwH8XSKemSBVVAnLBvfRpLzwqDukof3XDmLSiJ4F6TtwyHBzrEd9XW9ckSs8qyP1PsH1Q353PWhH4LVeqcnn",
  "key6": "4LexkXHu59W2y8gWFXdxao6cwD4sJAiJEJt4wgvKARQTzuBaeThok9zXVsxZX5v2bX1cUiR6jk3jhRt8XwfUwspz",
  "key7": "5FxSriGRAoeVR1mP52NbmphzFh3Aox4f8mRMj7hPuMnj3M2pJNVT8gvVqFwPyDsQqjaFxQQEYTgQpjerP1gCFoCA",
  "key8": "5sPvkVLxituwXKWcmjXtdcR82dGFcRCuhXfevvNU6MoYJ59h8M5nccT1xsRxn9VbkhvGQd3w3mUFeJTFnvEd34g9",
  "key9": "5RNqSDzdNwLNJ6P6iNcmV63sRhXVPsDsEq1xacrkdP7n8VtrFQbj6bEHdSEka9AeDPuDV1Tfxd8CspRbsa6oE1Zx",
  "key10": "Tg2Yg5GbFUYakNURR9hvJ6UJLmdRDypzD5WAv8VTA5fBLMDoc5mzSYk7L8v4gzYNSDH3WtgdhZbTB2LeMQW7oN3",
  "key11": "4ER2D4JML1n3Q5Psh9rp6PtTDmKKvnDCkBNHYtk6qA8EW8sx2WQPuQhDu4NFpYb3saBdEXDoTncsiR2VUE7HR4cL",
  "key12": "5Wt74vV5HFWb4ByvwF5KVeSaMnDanzHQSRHBaHUjSZrZbpVpnb5SJKa7ssbpysY4JnvD356nMjcK74wu3FynhkCV",
  "key13": "3Yp35SfvimFF9pfHShbsCMrpVWF7ENTr3RKMf9zKmPN8fedPcugXRe6SSEzfxkx4dhVgdeyg2TPChk7An5MEaN5C",
  "key14": "2EwgydcUYDsUoKeTjUUbZu5Dt9UahJttLHBBBtW1g58zREHzVGRbuxDbAYH67bJDLmRYpMuHNvuxt6WBMPdcNG1v",
  "key15": "4rRScY3Gdy7K1ucpLsB6bHuSz9pMcggqkVVWtzL3y7C3UewJoxA8TwtkxCBZ6W85JSZ8x7UvNRs9DxP3H5hMeHvL",
  "key16": "4vsGceCVi6KcQXru7otYZUJhuQdrGY417djG5fcNESovGV7p2NH1JfvPeqViXAGxL1Px2pdcx2YhPm9FbW8G9ToL",
  "key17": "2TRqz3gs5nr84v2N2pzSxaxPJfNjNSUQW6uHrtmns3oLZJVT88paBtQwfAr2DqDrkNVWb3qEJQjFPkppfgDgPdn5",
  "key18": "3j9zDc1AJb4a2uyAvR9E825gHHFjqZdwpKtCfx79iBA8VvENGBAbpxS8GeCnnN2Sn7eki5VBUh7jjmvNqjCK66hx",
  "key19": "4R5QGVsrWSeRHZFwrQZJrCN6YsfLGZ2U2w2mWKdwWc3bDHbHvksmBEqUqEnGKA3vRemXvvptYxrGGB2zeu5UKLRK",
  "key20": "62zXvjnHzCRnSSTj9VdvFu6C1JiFB5vhtv1utvsaL7FkW6R9rRDV7ukHLFnUy23JfuxLEPC1WZFQN9FfoQdxgjhT",
  "key21": "cUNfyz1NvZBvPMBxsQRDj6kfAzK65MFrs21camGXxKUGQkPvuykUmLJgkH3AzEaHYpZQGGNxDapNkSNGajqUVtk",
  "key22": "4cA9PVM8zkWu7ifxoKzcrxgQhrmMEMFstqsqMecoftAWBMmr5Xnvr3pv6mpx7sP7AYqeJrD1ijfrfkY1iCyRUCkT",
  "key23": "37CdfoHBAKuLwnCGcLU6jwRSPWArr7id4jHuoHDaThA74Km5W47KqqWqcf3ERY9z2xATSvmhG4b2gxEahUvzhyYL",
  "key24": "36YTFEUbiySmJrWvNfx4TkWhqDPyHq7jM5N4KSkw2pW1LKApcpZGDnxccYmEkjPrEovAUgEmdvM2MJo1Ci2wgZ7h",
  "key25": "3nVgPZG3p1gycJhdP14zzjZkTNSW5HozEwC8m2BkiNFYdYD1TnoWBWNyqxzHaVhxxmvDys1CLASUkkVSS87QMkux",
  "key26": "9FkE3DCpGsSrRXDJea94TmYAj73kRYf5BaQhP19rsGAmUX4oWeT6DHSubSEsUKPuNHcf7WHqHk1b3MMmSkans9c",
  "key27": "4B5mmcEeTKDVYo1bkEwLdTqYHzDAPvPVrB8csBiMAEHtNYxRQ5F1zHZEz95AnMfTUmXwFoXRoW7UaoJwC1R9wjmT",
  "key28": "6LStfkG5CsdYfsq8c4vjp8xQfbmKry6zTBdEXH8tD26dPPxhcmHj69b4utaecRpB7HbxuSJpfVCQhnCFZJ51bCw",
  "key29": "3Szo21aU1MZxFYfDFDnkUVZA7qKjW7SwsbpYtfJfGTZUydogHAGzhpCwuf7GcMb4KQLYKbt6mLgPvedptVfzuGLS",
  "key30": "5zxZg21smzBgXvfwkKPmcPr8nLjrh5yuv2Z4nUHtXJ95pHERWNeU33pbRaKX8ySTMCBJ6wfBtBxQiDG2SjVxuTdC"
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
