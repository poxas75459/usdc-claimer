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
    "22cJ782otMJyHhgxST8NdipiwLiupGc1RVSGxwCJ1FA9u9QFhcX5PLh9SYMhi5QTUUCWJrtMcPvmjBBHADqRtRg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RjdU7mgrTmX1c8BEYUqAbnfMemTk4TMnX6kDApg6fJjjYtbNpyDLzTSpZRT4Q8nWZyQY4q1cUQhcYj8XuiAcSzz",
  "key1": "5iNz8UgTjQ8Wvaq4fsABEABUHLfRFo8LcZxw2s4y6FNKC3CjkkG6A19DbBUerWdpv9Wkd9FxbQ6agn3Hc3yD2GAG",
  "key2": "4gYziYXdmFLPmJSDav96Aw3LiGhP8SfcR7dvXCsidkKvdbwx9Vuf3UeGi8WzsRdLpRgEiLJSZYXTQioMzoZm2WtY",
  "key3": "kH1pMnRRpNzkfPwE2esVJQCbpaipvQZtNh2FBokrLSjmBed9U9bcgTf5iA3yLW1FHRQcin2cC6HagRFChMunoKR",
  "key4": "59prHsSrpDbyou8duxcWWqWjWFjNuZHUgRhUXBsDkve5ar9otiFD8MAn9B3omb3uasqEzRhT2oEQZyYYSusR662",
  "key5": "6dVW955SSr9qL1foExVVAbkeshXKPoxRnpNiPEWSQg5S3zEbnWXNjJyiiCMvTczddBqiWTpQMdYifzs1UAVDsCF",
  "key6": "2acMdtsraJ8a8of6XdWWrSo2Zhrk7t5EdyThPmrQtquhDxHJctRFeUUNqtMFGGbYdmbu4LDYPPdKCJnREmBk2Ymc",
  "key7": "5Z6NHwx44eGiVpvz9C2dkW5HSFoXzxK9AvSECuz8avskUxRxWzFQQkg1mVfvnr3HUPbomKX1tzWi6XJtbyb9hoNF",
  "key8": "3mUPLTvdonyv86X4xcTF8CdVPtFkWA8DDTJUp8Aguu1cWVmune2YPwC3kTB6TTWVnW4bWyfGGwJBhyikJLCf3onF",
  "key9": "pp7YYt6qQYzZaWuXDKsuK334NK1q9QEAqnyLa4RrveuN8N2xnyLtX2nU919yXgivmm1rLvWTzCzqgn5uKb4bWj3",
  "key10": "3DoBZKCkmU7CZTATpKJZTAZ6qCrybWXc5ayRixUD996w6ZSKrRr1WjFvTtsZFqCg9twmyuVx8uvuLHBbVhxYCoK8",
  "key11": "rS8fTGDBupfafxJCs1T6H2fCV6fEqBpiBQCmkaajZ2Pzbacz6FgAVpF8k15XToduJ6XHjhkraKg7YWDujuEwBxT",
  "key12": "Q8BDWQCKE95RauEzBeQKjLQCQtwEBq2JV7BnKUdcNJ5hjFhFJasaaKMuA4eGbEji96zHDCSA3yxvFuzzZYWQXie",
  "key13": "2td57z3seiDwPPdwRp9acqq9wSkC1oTYLojaVp1eriS1q5cQxQTPN4kWPAsSdUQTH55Vow7DRZzkxFM4y38HtBMp",
  "key14": "4p8mJ5bRzoAj6PxTc3aucba684qjVJgV1FrBMHDdiMmneVveEqQWMowghYv2YpWeqosSGRpx9Xx8csa9TzosT4Da",
  "key15": "2qA4e7fsybA2Wq7GFMAEEKFHzEgxT6yLoapsTTkFCZCxEFpZJWTbUYRsenrRpVbhBxb4QGeWX32j8Ub7max2ezwo",
  "key16": "63MvFDsica4HHwHVsvRZT1HCqfeKHJ4XqQowsVdjPLbnDH9PbA3HvwrBDDPV3AuwqKS1QuvTWCxQV18BwPRetLA5",
  "key17": "5XqN1FhWyfirCCb1vgDYacQhyBhLTQvT9XFgvbKEmnAppGmY7rnM28KiaAaNSpmNhTB7vF3TaGPykJLzFCGkmbmc",
  "key18": "51nwZoSn25BCkqgaDGZsi2LwCMYGsuM6uK2UA6oe2F9Z9tCXiCmjzWjqhc8mg17AukHsgw94zC8AHBzmJxfrNGd",
  "key19": "2Ndo4qvcpCjgX6P4yeVxNj54UuQpMSKSn6opEmuxAH8ysyqZLPi5ZgobFKAJF1HyENmwWxy99tcE3dzs66JDgnTq",
  "key20": "32FPZAHWMjVpXgh6RvND444FAbcg6rPSQKRMPnNiqnDFUGm2bp6xMsHYLViDZ3uP4iNcYKM5R5dJ2qeRbHVQo1Am",
  "key21": "4exbELUN6W47U8AC1MRmohPNzugP9Z6c2fUjcUqh4Wro8nZ5mkL5u57D2yAfbggqC83ss9GyuaFz2x9rv8bKKnfC",
  "key22": "7rrySo34A9xbwSKaeRuiJ7bejSCfi5E9mEJvfTyWtyaHUH8VojvdKS2EjmwtY2o7XmHDWvp2y2N6VKvv2y15eu9",
  "key23": "3XLXspPoM3HMqxLebNx7g3iCMRTwho3wBr1QUW29t5AK195XPsvg616AKtviDuctZ5U1S8xa5CVa4agRrMR7CjB8",
  "key24": "3m5u7DNnw7A4GakiRmBUZK4mwjAKH2hLmqUmCWDSFCaver5g4Bbgn2GRMP7q3mSdKkDXts2jS5wnG3ZeS75pbLrY",
  "key25": "3X5KSX7x17ZqixA5PZvf8i8JmcVM8rPTQA1desAsFYtSmwfuaWdXnQZLBM6eLKhkLmbnZJdVmNsG2EfqR6NDEYuU",
  "key26": "4YFCy96X6hM3BpZCY2uk9c5KUxkBwVPrvvH9sa3eRngw3o7SqF4m9a4Erx6QE26jgc5ghvNASC48iJVAn7KNDwLU",
  "key27": "3Z3TR57whuMsa87nSUaHAhC5L1zr2LoedbEPRzbhDdXf9hvkYFZvqeL8LG7nnmKwTvhz6L1CD33c8vtuNonNyTU5"
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
