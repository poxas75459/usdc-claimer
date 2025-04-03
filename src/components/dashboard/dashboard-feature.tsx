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
    "3nj5mfEeE7Cf7AY2QEo9uxBsiCxTQX6yFbqzKebqYiZT6UWk4ELEuHNbcSxh7MFS7hTfYWLRHkK5Zhg4kJo3J4qu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wzPaN9YEJp9Nvhbv5WiH5uUsCEnjAZUQjwZ3FJzbRRR5AY7WyuGvarRAAQZc3VfFNj3K3nXMwbDMgRMPv157D12",
  "key1": "2U3ny6xJk8DG6YBcsAhWaYwGU2c6DD7FrdSubE2rgaPgYoH4UGNNpmsYRL9XPdNnd7N7mPn3XKiYhfontpxuxXam",
  "key2": "3R6tH2MzMuJBGcm415XXer4sKAS5EcfHpVvBYB5afU5dePUWnt4Zx58LzhXdB8L5XBVAaUHQrdS5ftg8EstB2mop",
  "key3": "473dQi74ab9Sgjf6kyXcjcw8Czx8zUP4RZJcKbBv4AQZcCqZCf9B6pejefsVNp5WqHMUW63aDY9Rk4rMSfyneFrk",
  "key4": "3DiMa9XHxPXku75faCW8S5L9AgXoeetmi3xdJg3FB9NMnFvGfRmngshHgby7GU8Z278a3M3DcWPcE9fhCavSBGdf",
  "key5": "4om4jkG8SswtY1M9EPhZoAGCaTcTuZ4Cg3PhdZgtF2hFqeVyZCMkWtVbEEkCC4SUa7UTgpHWvWiWuXFynDrEBWZA",
  "key6": "4FPaFkQJScAFYFHeahz4hgCRCqrBtUnMVP1YQPkqBM3DDk97ESAAYp6Z32hZ4Sq7rCN8TfAZpyUbh3g9e9TZJtcs",
  "key7": "4T1JKfqv4RG2rrEq4PEZD4KmFS1RDDPL5vtUBLj8GXUrHEz5GScUgBDbW4r3MRUw7diUQQzYqAjzYsRMM4MwY1dB",
  "key8": "2F1ii1mcFFodTnNKC8XBtVNGmPFYhd9EKRogXT1DsgGZpMJGvM1QzdVLBP44GeJnfmm1twg6P3Z4CkDWA2hJTSwf",
  "key9": "5VKDWAvyexJHGD1n1PM7e6kiRCXL8QLuu4GaCfsQRHQDXzx3yAWWuEMVktDjTsvj3S5nFjxHXeSzZeQXMbePDarv",
  "key10": "u7AJtFStwVzfPwfyHi5GreKu8U9eSiBcwReR8zgtTbTAArx7pb5JgMpqfLGRm9PsuqvVCi4XSyvDFonWyYmryyg",
  "key11": "469giuNhTcERqAp4mqSWw2gk7GsdEcJdTJtPTsyGjFDeLvdzUXVtisSQn5jEt6eEqCVW4KXjdYRVNA54HY56kbGo",
  "key12": "8bHrawJSsrZc1foPnYFwyg64Ctd7DB5WEUEnMx1KwuuCSPhS6gt8WLvEAu82ZADXzF1zGmKf1DVGCgvciY6BdkF",
  "key13": "2Nr2qCVQ5UAAK1nDReZjRqSZBrWNDubfRRRzyUfmeMBLefE97ixfzNUbCaeArWS9aWMQMAFgGW4mTZ3Cm5vpapuK",
  "key14": "H33ZxATH94zuem2T3tr6QvC2F3CjsUsHBd4mP85aAaqkxmsFc6d1TrH9ihqg1HdmKfQwvqjdnHatBac4AnrHyVb",
  "key15": "2ZC8iiMwe6co4M997RTQyFTAtaeSZ9uaiHTSL2JrjRvzsqSAHRbXjuxUB2HW9cDVkPA7EZVN8scqnVwRb4dnDP9i",
  "key16": "67UhZWQ45DBSNV68gvgyGWmy5haXZHH1psZFiUWS1hcceJ3MWw6rLy1aRnbP4jKLrLqwXUz4H2BdL6WEk188TZju",
  "key17": "2jx6P5fGeiYSwy147GPVZhq5WihkPKZsbpvRBwepiZj6Lb2ReiqrFub5DaXA8d2iTdR9kzunM3WWpRbLMhPqRHFe",
  "key18": "2ww8sUPssuG1k6B9t3SaqpWBfsJycST6TmSEYsGmBKFoJDZFGATrWAKaT3B3zj3YMFLENfqKYzEaLwAaVCr3Dnay",
  "key19": "4mLQdpSJF7WVNdMak34FyareGSAMBtSJY7hNhfv727w9riigHaMKeRLmyHhfPU2YguFLpnP24uqH7GZ7Sq3VqZTe",
  "key20": "4uLaGkZKppnZvjAr3z4HrZpyB92DtzYU1qyLxhproGqDS6vioKpe9WrucBx4FvgqwqqY2jeEVmzz2gaVVxfRCC6f",
  "key21": "2YRbm15QBJ5ukgm2DjunQq8S8wDRhMRryquW4EUbajA1LFUF15iNjVz4Mk1FzyKAThRyVvDVmpo2udcnR9aQGmeu",
  "key22": "21A6E2TMpBmiHYo47xcPnjh6AWzpSXgfazdzycVfJCGS5ic3XAx3hsMDrSMWAm5afmcyBwHtkV6SmQK6FWeEQvai",
  "key23": "2yomU5GfC1L1BGffdRLEep5SHUZw52DVUYLhrEcVov5xRUtp5KArHphYGtH4AWsjDRzdRHpLtw2HJSTHx5k6KZh8",
  "key24": "2NzCkoKiVDxjgB5MGCnJssfa7YQ22iNwdkD3Jt8z2kygYqzAJMzVtk7Rpz5xAyh1oidzPVJds1yVQTc2HapMAfij",
  "key25": "4QgwJvYUt3j1h2z3mL4AozPA4rb9sPvAiryyewuGQRjnAEPy3Ho75Wb7EE4FhxSUxMvXatmBiwuaxnFbbV9kNNSA",
  "key26": "336gCcP7oRuyoCMMcrL2foUia4eTWvDBn8b5Jq6bUjdNh9C7F4AVYb3U9MYLmV42ZHg75HzsdcccfHdGaxTEYgiw",
  "key27": "3Mpcej1CqbyGWkdL5yKhs9gtBmEhBmHwHLrvCzZ9EV6DsiYA9MyA3wsaJjrHhSRKJHvt3i8XA36nQTmc4ZFW9ftE",
  "key28": "5M6ss4H1dTE1ZfWN5hVEdqPGXhn76tFnhh1RgyNwXtqVRz3zfyixUV8MmpLRA3Avsss5CaWASQeS7mLsTuptLF5L",
  "key29": "4mtPjnQfYvqP1ZKqn7GA7cKAf6QcJjinKS51LqFBU7JQP9fUzojTRuLZKX9KsLou5WfSzzsetuanUVLg39aGfhBi",
  "key30": "65W64LS2GuT7DZEAenacECvMno2ktNzs6fuQKvBY3Rg92Fpuqi2MDoab3C2XpkPXTDBWgZu7ptgBFmFui4c65RD9",
  "key31": "66vFN3AMh8QEh7h2b248GKx5i166dthacZZf62tpvthAdFaZMfyjVYHoj54uT9sQaAAr7C8MZJmN4WFc1KzGJ7kB",
  "key32": "D7rmBHa36sfsvTY2TbxHnrGTECUCUuUeFBLR2P2ih75hQcZPmTsRfsV8CrrhPj3bp682me7L3rWWtvXQ4r9wvEL"
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
