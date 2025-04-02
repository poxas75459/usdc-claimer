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
    "4uUr52RDtEW7EMMz2NmsgiGZ96WyquNPXyeePsYxreHBw9ePBtGWF37j3ovws2CKJBi1kGTfzJaJNrzhbmtToaBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wbjv9zhYvLSfh32bn5ZqCzScPqcp57LUK9abekpzRugmCvB5C6Ps1L2jFMgzYDnQxBAVu9r2Jc3EXhp8yyu8ioQ",
  "key1": "4je7s7Nr15kcn6kWAQGE6rzzaRiBQ4wAVke8Uu6V9S6tPSWVYVvZcqPYB9QaxpY2C5uJzvNkMAeqoK99fBpmkKYA",
  "key2": "4pFdC5xSghgF24YM7qJuj128rPz4wHxyuaFdBVq27j1MBxSRzMYULjKXrmnSyFU9aEFweTGV7azKFu43SfG1bkbf",
  "key3": "5Pq1FZo5Erxz273VNTyJMR7bU78S6sosAMqvncRrs8URmRjdXkHMT6eKLHe3EKwxik5mQJX6qENEW7XaZ8er2HCc",
  "key4": "25Kxuhmj5YnsX3hpWnBfBC2EmQYYTRZMiE6YbVEbRcmu4MuWGjbNyJsUFvcY2RX9Y9kTGWg7RW9fhJpykB2fwNjL",
  "key5": "8QLSYgu2Vag7sK6f6rkZZZz23yA4YuooWWvNdMrui8ESya3zaVzhsYtBMBjvLhxrfRorKDdSzGtKdTSKjmKYbH5",
  "key6": "2HCeFiN4dCrQsprrcTQEEyKZwUcAUWJ6ofkoZ9pTRSh1nQsJ6yZszkWZkofZqCGcSimCFghAf18azPysxUQQpofn",
  "key7": "4iQo9pveBoCqgpJVMj3bg4k8W8w2r2feGTFxkmkkmLF49GUPWo3KhWw1HTiQ2YXyt1pvMPQqHUdnsM6N2eg6i8yo",
  "key8": "2M9C6X4r1j53eDebAjrS1JcxEYTGsrieF1nuXtvriJDRxHpo8NHMrv26VK3zFiYUUVi3zM6kDNVFusVX1AqWhvzM",
  "key9": "5jD8LeN95DhZb8URhksW73i8CJPgAnbnLQprvXn7NYgWdE3ETYKYuNyqT2UUcj88Wf1f3RTtNhLXeVtU4kyFAS4c",
  "key10": "XYHqpe3C5mCv4wVuJeYLXUbSoXaqk6Lek7ont4g2Hx87cJub4sLR3YBxTzC5Yx9DBsNk67KDTrKZzMGZMmF5VUf",
  "key11": "67hhjFzEbXeSpstkSNXSmARWCN3GJrF6zw9J4tJgFomdLkdYGBGYX7e55d3pkJWJWnWHDpTeCuy3FjUEhsZ5ugaf",
  "key12": "2L4GzmAj2jnphD9gCpVq9UwvwFLAJayuEbVsPLFDbZJ2nFdP1eH5aSi5MjyPDXFTK2PZtMP3yMhmw34bbRALavM8",
  "key13": "4mtk3vWtqHgLZ9JTiHdnFavWS9FgrHySP2xkWmttUER8ETEkemMtpJaysDBawLRT7cp9EBHYuCcq128tXqLkbFHG",
  "key14": "8pnC5UMxSESxnQiZ1Qvt5w5wQxAuBjcuQo4zFiNpVCLfNJ9Mui8JcCAExfhwVNHrWdzLWza2BUMFSvyUQdkLnfv",
  "key15": "4vwShoSAbSwU9C8iVSFYVViAfhyQMiwPH1BxDk3rczXwMoKPuH6FCxdm8sQ5nJoCjYq28Wfz53psdUCsFq6iVMxe",
  "key16": "5S5KPGmQxXPGqETh1v3dPaicB61xY5rGeGzARWNG5B47SPRMbAtZAeNQfs1BKM6enNqetVL949ZoG1Sw14Qti9Be",
  "key17": "5Tnmt4xZY7LCcs1wb2QvW63Q95JAUQARiLgztH26x3xPauNQdvowRjhfLZ5NMpnJ2YvQNJjj2oJGa1CTRrZRP9gk",
  "key18": "3PsWfztwvaaRAR2Daj9gDKoDzr3t9HmNG9z5bBvbGfsHx3QEJVzyXeY1kMoBjUVwJfwfz4pcGhSQBgxvVzoJydJD",
  "key19": "4WKJa4B9H1JBz3Pw5YRCJtnYhBXx47PC7cdV6ZJffND1TiRgRKCJwgnAVZz93pBrYmRVEtv6aF9owKvWswX7NohD",
  "key20": "3isd12qhxQ5L25ZdU8Kb74ZNqdcqKmp1wB2QP8JK4kMDupmC2ZZjoFjTD6sB5byCsA6EVLoAYGtYrbFakResVPgY",
  "key21": "2ERr1YiHv5pAxvcoBNiunFVPrKgXo8XR4WUMrEZZa4DYzEdVMThmCtNtQfrN5CEakEVqKEkB46h3xmEs9eBJWe5b",
  "key22": "2B27fzooVHnXvs1J2YdLJEd9K1UgxeQEWK5bZXTLWov9sf2w1DbpGDZWdtTTKbxA4VMVUA3jwqy3oEXGhufaRrDV",
  "key23": "3mK1Writ2kNY1dHtzKsoAJKFVbGBWShiYzE1gCTakbmcUoBKtYegbcDzfEpUvc69Tku2KgDqrAseJvny3gKntqTL",
  "key24": "2aYb83P7ieEEQryxFZhheYHuHyLJbCWxBgo4HgiyDAw5vetqFa5gwpW57d6vcjYR1sRGdgJkcntcEziYsotRuBZ6",
  "key25": "4cUnoSDb7UCgzVryKQzmFje1ViA7LW556EjhUJeRK8WQtJ1yVBEGLVnQRT5pbtCWrNC9KMppMyrTgv7xih5oFHaw",
  "key26": "BNjzq2bA26x7o9uAF2R1RaKVHwKoePW9VionQ4nNHRfNc6ibMKNoDENf3Uqm6BFa84Ty6H4Mb35B7vuazWWsKKX",
  "key27": "4oZjrUHYvAXGzWZsA6en8JG34bPZkjQjSkvGC4rBZPRyEQK3UeDkihHxxYgqWLefNh8Li1TWyAtkqhQYAxzsjqNW",
  "key28": "43MAm9pRzXJSSt5mhS4hFhAJkWLRbcvJ4uEwQfe8Y8i51qEwUwZCTrNEcQY9pv27r777oGjXtsas9GKCBtaVrnpE",
  "key29": "5MJTW8HYo5U26e5NU556jk2A5fwD1k8oUQHszttjF2s2NYizpZnkPYZAm8YCpp3pMHRKAUaocWm4SB2MxFx8Ueyr",
  "key30": "amrksdv1Dd1eVpW9EZF5RC2zqHSsLQkME1WmgxRoNGRMQi83yDNZHyRrJgYF1N7pTKd2TBEbcrLNGA4QByFcN7m",
  "key31": "WZKH5e7C9oHwQaTPF1SyYZEHnoHWjYcobcrJmGRXbnvZF1UKtFxzeVaDD8vW7Spg9RuuBFhzEHtgR4yDX5JZh6M",
  "key32": "3boVpQRLqrbRNayeYT1f3BvyPHnzTCVSAjGsKM6Ao3vA7pDEXiUwsPPZnVv8trSPTQBBFdhjwpaFz7YQa5pXsL4X"
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
