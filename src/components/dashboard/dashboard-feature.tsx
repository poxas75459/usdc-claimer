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
    "2Bcr6wCaddaBUrCkW4Ftbjx4jPm3oG7XKPUVwUZX9NEUF4uZu98HcCQpr68h81b5XWUdBGdP4BehzGBJvJR9NMzC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1oRDcgTwgTdBpuESNBwYnAhXuQPko7oXk2HLNbXb5hEjjs7Xf1QxiE14CBQvqGyrZaxkpRZZbA2fJDxNiBSqJt8",
  "key1": "3vwV4UtdSopm7pUtxMtZ7gRKoFUMkw7mw6UkbzRXsqxG2oZnMGCBfZeeAWSsT3jvCWC4dHMCXuaSVp3MupL4MqMP",
  "key2": "3qKab8foVsgYnEQvKe2NrstMD6RhgpRDkA7sAdEBPEnWBt1V6EZafje8uvGT1QtMkwWn7vZAVY9NGo7MYD5QSBtw",
  "key3": "3XoSRoJdiuhdcZ3YpuC5ajpXhoREpXXa7iYjoYBZBsm1AjKSXhdgRTYHzaTq6mASrJAU1Ysivx5uQqfZtbpqvTJk",
  "key4": "2dwBgyjPboKv4oGxpVVxw4GqmpwNmPZrK55mwCwdCRxJaqgJPhw7pLSMiWjork6ZHSrqKA95fgCvtBGoB5Zk2ALh",
  "key5": "3AmatWSR2vnUf4BFtHAuCzxMF4yDrnhbb5z9wZ7fWpTE6QLuuQekqwetUtpKpSiLdBHyaLH3a75rh9zrPyJqhSiG",
  "key6": "5vx5utKwwExRTGnSmCBmWRzbT41jQYT5bQGjJtuFPaTknLFvRMQe9becv88qW7eiBu6w4GmE8z7DQKDacWgyrt3",
  "key7": "4HRWoNKgL5pGbvAbM2bT6kESULhy71V6PZ91PcSLCBVgqt9dibusyF9mfZH4ALeMFwELniVcZF5g2Jz6AJf8tCv2",
  "key8": "37TSbmZjzU9dboAhg8b2yGChNaTQeRFzbrKKBLVjoX6t4DPXHH5Y6qiEV7FJR1hVEUCJHZvssbUMbS3f19j8JMRr",
  "key9": "FY1KBE8FdftCnLbABGa42Q3kndKbMHttU3xhzEfVnQVL4msoumvDYcW55UQpEYWn3JtFM7deoLrHpWYxXWSMoTG",
  "key10": "2E2uXMeN3NJfz9oFgd8aRKshoPD9hjN4jxd36YmMFRnWftm8S3PDJSHtjub9cy36Ar2KtoqXMqCyLTJVQKUR4Q8q",
  "key11": "V4LXik1uT3hpLXHfwPS7yKetSjjZrNX5AWT4fvMZTzWQXxZFsnHpt7VhJmtot4QCtCvLxnwUZVMqTKxjmvSwaQj",
  "key12": "5AmfDoNRUK6bpDqabHUK9N8SpaRB5aHD5EdGitXP3EC2Cpb7zvwGqz339XeDLBLhs5TC6Xm1EeMk7WSBNt7D3bvc",
  "key13": "578vbySprm5epLFaB5At1MkNL26BPM4nGnbyt2tmJT7i4uEXvvkq7V7Z9JNrfa52dtBsFqGao5ZWuiwCRJSRVmQp",
  "key14": "2UPojmKjVAfgyADnc51pMfqoUjrYLbnXzMTwxUXKv6hoPkhYr4xLxPosWQ68k3giSWqV4sWkxSRDquTkm4oGgCAi",
  "key15": "5tH7jEzQ4pGCRzPAh14kkKRHMYVwYUApPLjR4BtDjrmze2n3ZgTwMN9uMeuWiZr634kWFVCbfAfqxctBZN1FFJ5G",
  "key16": "4h7oE8EMYPoUYPJtRP52jkvugoxSBgsbXgnDMc455VRvfPTH1riGTnfJJrn7Cg1G77qETnQgZUNuSjZQRfFaTR8e",
  "key17": "3hQb2zx4gYQa7YRkdiN4dxdorcxgq5TptsbrL1YMfzfS6547Nr6S3JS8Ei4hStpJ4vxdzrcW2d8pzj5iPaDK4bpy",
  "key18": "4iUPz95oC26ZPEbHsmJE22WfrB6svQKa22irQhkeShBKu3yWyXbohphg4BQAY9iBcgJeaWjtZz21RKtzfDBknY8g",
  "key19": "3UE3LnLpYsvriizudD9WizAH7SXpPU6s7d9w37nmVcZLgujESCRrjGwrGRYy1cxrVMZBcJnkCVsGnTq58p7S27Jr",
  "key20": "4DggivebuaK8cGPAmG4dwY9jfovHGfEKniXCZqhb32cSaoQyLTngFVjwWA9fqwjHtLeTCRKGpoWUpry3fAyjB8cn",
  "key21": "24yYqaUdoAme1PQCpVd684k7SoHvjBPfm6Ay9bukZ23MMnd2AVsvuBWKF3wKJD2ar739rCEerWqSGCxpbvmCDsWY",
  "key22": "3Gw5afd3D5ovbSXc4Y7RSoeoCLUbjeX9m39xJEtaLpivHpjGpoFy3RQ8K8EQDdD5CeESLpnPRF6uAkVw1c6TyR3r",
  "key23": "2sTNDKVgeGEGL4SX2aZMqXXhP6mEBsv7KpUQzD2KrxHA5Zdy7vzc4nfJQnt1Wypz3R2HWCLUSBJLyyECCvvAt3wG",
  "key24": "2XaXAk5NTCta5gnpRCNNsBRAP8h9F1RsGJNH6aJtUH2sVUadispPbrMd9diLnYjTLNNNPLfSzWSX8jevLPLxzBPt",
  "key25": "5zEH3xvuJrzvh2ubLniUfACwXRMGyhx9pRuPXvc2iSmA7VLh2k9o1xHHWEnwwxqzLHB3zehh7y9UQQ8iBCFjBR5D",
  "key26": "hb494eu2STdNLaoufd57xLV6t82b1oHMcVNsNPjPP5Jtuy96vqWoH3VWUKtg69CnaGXzcV4jmmc3bUkYQhnVo8J"
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
