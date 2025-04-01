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
    "5EV8x3cKtqCWZFKa9jf5TyJtqM2FBDCs6AfQafxfUiYY8dpgjKrnuqRESyPQdResXYiaw4mF4sqiER7xw5ECCTLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B87VPeHyZ7dEp7tepacXGqHCgvENHTViyoQtvrNbT4hKmA26q2GYkfxiCw16fZBiqXBKs9EVyJRmm86rZa8oV2t",
  "key1": "eod4wNQJPNBkMJmihrcxgi44hHwnCgwpLQtZQ3GBjvA39VJEfaiFAUToqmGjqpLuARq8aU75YMhVfp9ufbSmdZg",
  "key2": "3yiRXq3W8BE6JwkhX5ak3ZyiCAhg9M7taRL3yFoo1zmuTrjKFQXRvYcrTBdse5rps7UbkGWcWLYz7WMNHate2Ubq",
  "key3": "34NJb9Rz312YwQcFvhJ5yNhpfsneMpHUVRy9iyhDpnGBtvfFua42RLNVVDC5NSNe6QmVP13kG2sgNjbVpN7gg7S2",
  "key4": "5ETx61uSLuiir9ak3KhmTkLZ4kAdN7URKzN1pYXBQKqyC4owrRyJVuJgHpkP9ZaZQW5BGXdEKR4WV9Vtm2kQpups",
  "key5": "5WCLBa74y2JVEUXoiwi7LWKPauMPGQENavvhNEfLeGTtyDRLocB3Gs6qXSni5gPJkV5yBaKeyy68zxVo96R8vtet",
  "key6": "5jbdCUoitMdEL6BYHe6e1bRUHobfKK2e87LcnHgUy5BZvWUG5pToW6VrkhkSWz7oqmZcLKL2mznauovka5H2WRFb",
  "key7": "3o6crWCEnjNohwGreAts9hCwPp5DGQGbGSojBMoXDQgNQD66M2tSXD6mS88KYcSEtmtoUYmHZu3ML2rL7jL7aAvv",
  "key8": "3WPQ3DW49W2rLx853x4ixZKLn1xHuguTVfhPDvD1HE1c2zLmAMPVKAUpXm9y5r5PQsFZodcYfKq282LTKYmX8sxE",
  "key9": "4XiMwVnjGA2eeaTUDm3DwxB8aaCDtuugfJmYqEwtLm9LZKUweHnf8woP6eFn4Hv1EqPGMgkAJcFnrfDPL5hgwJSc",
  "key10": "3YnTCuhHRaN8yWmLB5qo7sUmJxr2XWYWMrBsU92JSeSgAG7WuiKKwuHYbENwuoxDdWqvkyj7jXnEsTBg4kC8e4g3",
  "key11": "2oExBKABtnMA4KXAZ3ZiRcq1bmpszzFr9ZK3boNBdXSauSBDHQaT93U9qAbHUJDxJDdPvN1vJk1jdWRLNLv6nnoe",
  "key12": "4MaRTj7FZDP7oHVYFM53XxfvcAUgkHdt369sXW5ixeHDRRLJRrj1HEKzAnmp46mku7ZC8Cf1VMchta7g1N7USLDG",
  "key13": "5KnNHfY4WwkNuRSGhRz72qru1hZdmDkFMGhrjYtFPc8fu8ugoBbTysdePh1VSC8bHPHMy491pe2Hw7382MVuUrJm",
  "key14": "41Wgm6mFty9x4WwUSFhH8GZy1ThP7nrMLgWu7FTcLeKUbguAFrTjQGLY4q7RmUtUPrZvy77j4z36x77KtBjxYGDZ",
  "key15": "4HEvHeYQPb5KRLSmeUHU8hekGNGmqaxRMfgRqGuTedySaeqa3HJ8DbuZaoMZnNjxaeUBPfFzeWr7PeBc9fVQvsph",
  "key16": "H8HAgqHF2QXeELCr6ZqJ7Jg6iwBE5LNYzLSRSTDHP9wgfY1RUE9NGWRP7qnyGr3JDYL8Q8XMxFPRuSyYf9dH9ZQ",
  "key17": "4MiVZPRBqo37j5zt9q6XjdNAqNKcXtv7aeLwtmpX5XBJ32xptYVqyrzW6kVqeTRHnHH8ptQ6SJdwPjX8oSEVsKd5",
  "key18": "4u5zLV7hneH8fc2weuHAxA7xvs7ZBLH2UYgRgSQBwoJgNKRAP7ytP4RiwrLniXXs8BUpY6u2tiF41KMZeHD12pbT",
  "key19": "2pzgLdMqzXsz3gNGg845enFfe9cAeE4zUAds7hDQA18uZR5FWYQM9xBKZjmAbFyPxBghyGX8ipAzrbH8Dk4wP8WM",
  "key20": "3wYTJNfmgvA3RrQQVkbHU4H2zGaSWF6dCWQKhqqmx2ncCWzPkMZD9GKWkeUasiD8vbJhBuCuYpHsMrvVDFoY25Qa",
  "key21": "4Xzz4Gd9apwpwx9RWEmEr3HixaLE9vqq97zqVvwx98UBsBv1nattbvedcTxcgBEhvjXWasDjBqdnfseRj9wZmKGC",
  "key22": "5mGNMckkCqFVVDwdzKtQPzSaTAi8iJvoSwQQLKGeTQT5Q1jQ2QRbDy2nvuHSxU8CBdNThKe98ArJBS2g8CPLmCAj",
  "key23": "3K2b9CssdXHsgodk3uEZB84qSpVYPkVuA58VPjUQhX6SdwoHTtt1wG1kVHAUW56uidX8Sh5HqcX9pmddCo243dU4",
  "key24": "4MQHSqDQaGukqpEVTCwtZKNPquvUEGBQvLgYYJTBPS2EaimD7fAKSoyErkuKVJyPE6e2VZcYeAr5YofdwngTnFV4",
  "key25": "2R1cat4tnUA7P7iiyFMZFyjxAAFTz4ajaH9MUjALxrJrpBUCdt8sCappr8t577ePGZCjwSzU51XPE4RdM2bB6vJm",
  "key26": "5C3TPyZso1wpSviw8pSqaSNqc5S4AUXkkjV42kT4Y2T7VWWiVi81wrCtAfn26pyyHRkFMDUC6yG3JcVdgMkt2sma",
  "key27": "mssZtrGXtTs1QMLZJ1X2K8acCiztm5k57XFKP5TGURnScv9Lk1DhqeXZHx7GVbFtSBTB2hSgLrNB2yJqi4Njhxm",
  "key28": "2oAGEqCrBELV47ajJBeibJsK4bD4HTZnyc8KKSocMrfNk9dV87mPB7VsZyhjw4etby54TandkgXMhCkMt7W4wYe",
  "key29": "3MpSbpnk9VYKtMZfsFgPyu6WffrH6WGMFna2uviNdNCgJLeoy6dYeviRCKk6Jo3HDnGjw5tJZ6murGDz9fHE6g94"
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
