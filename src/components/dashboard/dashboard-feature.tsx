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
    "4d5abY4PkGG46C89JFgCkJ2vfnkjbHomZbSCboQyoVVWUS2xWZN6nGUXKpLwvED5vh7T4DKqdNZAErgZcjLHuigR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mqRsMMtHVWp8ppkXs1eHjTKRWfS9b845EonXeT2BRp1JsWz5sePX7CWDRrCityQhPfEur7jie4GdtHbVARPx5xf",
  "key1": "5k9K5TtZtp18gNEybXW8EWzwUFBU1fWcAP51YaRgLJRiKd6QLiERyCNcPrMJCVFbRvuUZ8jjGsdrrHEha3479pM2",
  "key2": "537NMnJLTjm5yKqJuXFu8oHQpNvqH5AdY9NNV713B8ARd7qdsks1nL7DVR41gjVHjRqidrsVUbCTALhmRd8ZXGVb",
  "key3": "Xv3y78BADbMiRidTcaQ1ZSkNK3qo3GR3Buq7WF9CWShK8ZJooPBwBBi2SC4Rbck47Uxiv7bq8JePMcjx2atfFBQ",
  "key4": "2uBXQ8TzxgzDkJ5WKfcYSbozp821NxMHr4cNa6jMdpVkzW8qnCfhTya4khydJGjSgiG1SyZUR6CCG62Wx5zsQtPo",
  "key5": "4zeRQ8gAyheFDhvjMeAGS7AnQRrSXJMuwq6zC8avYmDcr5YzvuYsdmfeCcSSw55iwhfMnmih9jiSJ6t7uTbi2xTy",
  "key6": "3MtSjVKJUumaHvJ8SxYunXZEQWcqGJoQmpPLu2GKPhSDt98yWqtiRo8QahZSNYQwdT8EzxC8u2W9ip5in5SbPRjf",
  "key7": "5EuAD1ZeqsbtYm6ziS3d1wCfR217r5LxiFUCuyGGuRWUy5MpdAdVUxrmcUHF7sjFgFao5XmdAEaAGh6bgkwxENMT",
  "key8": "2SGaZckot8jKovcL4LSpm4Nnv2SCtofsynmTPM1UzvRa3XLhQy9PSzDrXCZ8d6qQm2AvYjrBS7yL8uWeg3nPSLZU",
  "key9": "5dyFNikNw7Q6JwsCe8YE6p9hfSdj3LWcJheZP8yFBsNKiW8auSGJ6ph6YemSfZr2kMMXz52KAsnrS1cLuHceg78Z",
  "key10": "48C2jrKzxPUj6fYhURjrQJAuCrgMLcERAFxap7AUz6GzYTb4yn5gT326AphY7JrNApYtWxx1sZDswD9eBKZkE6k3",
  "key11": "nWZUQav1cLB5WpXwtdG31v6WPiNeXqvcrSrF7eMtGKTY94FLgFNsdbQxgJ24VviG8dTmpZaaVME4HQd6WxvmLA7",
  "key12": "3i1im8rZ2hVxsNp8BADDQqsoH79zTKLZjdpAMiRnVF9edHo5UgpQFaJcPupnzwYBDF2qLqpbaLdCPevK1NVXvM9N",
  "key13": "nWQQCbwZ2pfKT8uqhLdC2fpW4wgSqa3RxFK3LtJiQAoVkMBqYGB5ZWsxEXKNrCmQU1rVg2BJi7bHnbGPMWndpnM",
  "key14": "2KZKAsjE31WFKeTgh4WjTZ4knz2HnhUAbdn9PkEWXruGbxXhm7GN1RVWh2NW2pHSxFiBVn2JpSMWcKeGCukCZYp6",
  "key15": "4aHZ2XkgkHgSTk9ghPL2A47GkgXyU8t17xe913E3QgF5bJKGjFdi73L8gD5RXQ7rS6q9A1NEgd4dwP73w7A8vBMU",
  "key16": "4CgToWUui1CN7edRhJTBD1V4oifbr1rvjuU1fiZhC9WgHYZzjeD9QxHD1joPyTYRkrne934YcC3dYZqVuSJ1xbjB",
  "key17": "48JdbiYsDbj9NZvRrLdYkiH2bmP3czGKf1uNAossSBQUxGKZViQ6BjN4P4a2fViCX8xqXocd4kSTCeCMV3BhAKj2",
  "key18": "21tm8W5YFdBNsLksZApx54FhPuBo1VUxXPGYniH3NxW8ZEQgeiEKJMK152gVWMhYu8kn5nDoPJWRysd9CASD9MNX",
  "key19": "4Tm9DWFXT7SRe1xs2mtuzRaTpX4DEtWxcnZoq95iQxsAHJ8HA3PAaUvisF2jEgEHuh4WEuYb3fEhMzjN9w5yGCLJ",
  "key20": "3nEvHzTTzfRHNLwvLqvbJUif2yx1bmeQdz6y3eac7DjAJtKmSCbPLvZjaJX5gpna3GBReYez1L17GsmJnMcnuUxb",
  "key21": "5vh9KLeSZmbVwcjfYX7gEcFepgYYXZiq65BQng9SrkcVGGCkmVaseDuJMKHNrwpsS4evjoSGmG6caviaWY4RZLet",
  "key22": "2CWWwyw86ervbHQMSLEB4YvPevWuKDFowNgp3KnBKhganS9Z1rSubKokmato5dsqymLb7D54FSWUCWWPrqeuHZr1",
  "key23": "52mioaWCfnzSKocf12f6HF1zAqULQUbC8Mw9njemAyYJ4nKSmxTDrEX6UKvWMzrJGEXpZPUdEVtu7r4pefpvqWQR",
  "key24": "2YiD3xqoeoU4x5RhXM282mGpNUm7Mkqp5Q1dJtK88SkYenTzsEbGbrCQAqwREKme78H7csSjcPMpLdFKB2fuumcR",
  "key25": "42epGAEzdqagAZdLvu8UfVwqeyNTVmxMM8zj1ZYEWBVJwPrdLsrfcXxpCeKK8enki8wkVxHiTWPrcYigb5cuPRP3",
  "key26": "3mv3qYZusJYRzzyd3PA28HDJ41J3bRfdWgk8YrZbTpJGmx3k39Nht7BuokrNWS5WMwdsfX2Rc9NVJ7kDBCmn3CX",
  "key27": "W1rhYV8uCFxrRTbkL9d3kQ7q3t2kYwynvQFdcmx54pEdh2MtYdxtuoxYtwbznSKyLWpm6dWP5HRexmr1v9Ccyjz"
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
