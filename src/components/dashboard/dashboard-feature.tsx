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
    "3pMNwxEZQRCJBy4g2V8W13wcfef31mhQm4wKf7rknM8PKX9ZQGABSTo4cAqU6V9ffCJa5ZK19ZwrpNHmR3jkJktu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d5991iPVkio6yr1MWnF2U1qmUjGzf2gSvQ1AuSbnWjsaP4rHFAia2Sw2oGruhnsQgDRYYD4v66A98JFpZN1nPeY",
  "key1": "HhFzHpDW7a8VhJUbzKd7iq8w2XFGuNTKiXECL5QDeK4r2hXorxRm4PdcbBWoqza3ao68WmQXd9WyEk4G1RRf1KA",
  "key2": "rEoZV4trbPXycoU8mPzP9jemvJYBnDJTSzfpQfSXMUd595Q5gQpC95eZZ4LUrbbhP6e7f92gzAWMRTsJ7BVt522",
  "key3": "5d3KVqY8P4Pc9Lc2w1iDimPpgyf28eaNn2ZyK3oVfzUTXwsM9Jt7yLLjKxjeNbjkfAu4fpGAAKqyVzPBAGDtQGwW",
  "key4": "5LpbPeoRcmdzqKEx8p16bUFMgnWVfP5w7Bo3UKNzipJHu1Yyc1ZXSeGZCrDReKxZTYNUEsspzCuVt2crSt7vD43a",
  "key5": "2kZg4caLzETa3EBPZBVvHiEbhw3utcrb4ZCPchPvDpAojH9MGnW7B1KBtSufERkcKbyvBHjYTQ8VaZnwpAot7HwM",
  "key6": "226BqG9TJE4PPqw56GBaqMS3XQcxiF1zHMTWb3qLpwMgUJRKHfYhazfChFGVZuE6cgPX8EQ8UF8gbbzKqo1bCYzo",
  "key7": "4Ac9AHVXuHg5WvG8AdaKtSxLFGAWCWiskKFDvHC6ouN2TmfQRoHHSkuHgoSuoonEW2VfN7SbakY6f1A2vhqmi81K",
  "key8": "4id6qv7cpmirPkKfgr85WoKtdCySGC3R52Ee29tKJGuUiS3VqZhpmJEDpyYiCoLvmAouJCT8C4XK4XWqTs6NcDN",
  "key9": "2tGas4jZvTLvANuEM1k5JX7Fy6WEeFFmZ3vL8GeqpTWhKTuHnbh3qFAEoGUeC3Du4SCwDAByfHLE9QE4WYBS9kfv",
  "key10": "3fByvkxa5ACAYcDeiP932i1qojuKdJw7aeDerdwcj8An6ZPTDQpLyhUszz8HE8qZef4zRJVY92RuwPxhWdCPuiVx",
  "key11": "jsQTRPYabQn8JdYpQZy3Z4xDxPcW5HaNryNSHMp85bq7T34imqsbqjMdKG64632URJ1nuE79YEsCXRPkwhRjCzb",
  "key12": "kgoKiir6EaJxTkgrHAszbJuZgfj5cji7rhgVdWDo55nsGxhUXViHspSkd6gbz2gwKErf3z6euuCAerMyhDTxSyz",
  "key13": "2JZ62T2bm5bPwtkdkjgoduFacgjHDCLwwNwsbTgcBaw2ed1rr9HxebuGPeBKLBRvaYifnnVqLDwHcVVd2saVrBaj",
  "key14": "4o13omvmuPhk2xQhJ3J87rqXpkb9tgVDRRa5qLpKZ9KDFZ7cZ2wGnSQW2FXz5Jagp8R6wwanFfopfeF2QKVF9c1Q",
  "key15": "2aYADPDQd5bHFt58cmPwrTVdmkUU9wfGWPB77JshfzkdNRD1X7UxJLcX8zyueXeidjTyTKihNK8nRj5N54aoFuGv",
  "key16": "37jNk3ZQQxD4Vq4vveFzrKZkmU9naajgvf3kus1jvgcwhQ2WxL7ZEXAfjbyxWeUg9XFEPUVZTo1NVyqKFX387z3H",
  "key17": "3o9iCjXeu1mh5Vbm8VsDLhPzM2PgwuH2Arn54oBUUq4zyy6MMBAyGyi1DKCFKxVno15aPMucPKrkNpvrngLarG7B",
  "key18": "3s5dhrRoz5BNnTLvWBGkSg7p59oxJq2Ndk2nDoGY8DkEUHDyxw5Km9NvJhTRRuC441JYGcAoddVZReuidXSSdYAz",
  "key19": "LwphKQqFkkhH1nWKwt6CPELUeQdkMZ9odtnTh5jL7HdubM7yPmKk1XjxUKVD268JA2QAigWgkMx1xthtgYHfVTo",
  "key20": "3aQ9eTKdg49kPZCLyjgpVoLUWASgGNa76d7JMrocSus4cLvxuULm9k7SqDNxgN81ZPiCxZuwHpdPp4XPL234M6J",
  "key21": "WtYZNqLaZ2nFYtcGR8zDqEok9eceh5Den1iaJjQYDeow6HTf3js5XLXgwEjDLutQXSQttu5ndzxnf7Key6gsqNb",
  "key22": "3X5k6gbuHrCee6rf2mj5Qg8WWsqJAPSXFdRzdzRRGcZqDvyoRK1Yc4ZiayDDfVHA4uWuxSF46kSKe9wEP7K8jvCb",
  "key23": "3PugjHDwj8Pw1ASczDrJuDcgBfDsCSvg6mrGAkZJLfu7N2MiNLAWy9oCbraiE7FryqNDznNU2xvPQQEwtbNUTiAu",
  "key24": "3NCDX6bkW1eT472r7dnRDb6zY81grpnbnBpSdVpcXd9KkFBxg6jf9CS9CDfCUFL4Aa4WXdUy4qJaTkgkSGGAv2vr",
  "key25": "4exLCjJBVM5ThryP37CQ5z5xNFEo2YqMnBFEVp6vTHEwxmJTyf7JZyfyn4f7wJftYDE4pky1KQgPYiZK1ovXVWXJ",
  "key26": "5XQgutpfjc826AE9Y89vyu1sbiELA7qm4udRtTU75cXtxwHe3LPJNb3ekgojwH9SDQp6ki9EgBhKs9NxDHqp19Ek",
  "key27": "46dwZUoPG8QQiCRjbkpGrMGmFw5UeazcwpQLfvQQQnvfr9AVobEGwNjdGjQ7G4oms6GVJiqnxbaKiL38LAYoykCG",
  "key28": "z93WKWnhA9g8E8ssBkN7YqG3btsV9iguxWt9RqCAm37iwrHuVx1C6piwrF8sBQsAxmBoeoMTZ1Pjvciyi3aWFD6",
  "key29": "5G6MfCwHmLwVZNooK8ibiXjM6nqQkiTEr6rk5YStnHJSNgWjHWByWe1iugWeEh6vnz2sQ9W8eYvKim2YAikqGTSR",
  "key30": "5FPwJRsBmm77qDyeWR1LuyaJBAo8zpvGrxpS8ZfvEk2uCs6p5pZKx6MmMHrPHdn5FburSKC1oFWN3sskuo6UU9Cz",
  "key31": "5Nw8iXbpMEyXsABZLXz33GCQ53spZi85ycfGca1FqThgA4M3QnmVN822A8BsDa7Ugg7o3gaYvv4vZJ9b9FbUDXzB",
  "key32": "5Px33P22zRBtRdqjHj74xdSf65xo7ic6XQidhJnQtDKHXs9XvaNE4jSgBjf4zgQwyu3rDBJq612QNGLVCCMup7dA",
  "key33": "2RYwkaYStDoZEjCzg3uoEVNHhCURELKnph8RznvzEumVSf5zwijwki275f8cG14RLCTzRPEF9PMnynZK1LKHETof",
  "key34": "3pxUnWpAgi22WCGP1KA1t1xNcMX8TGMJcC6Q5djXhXjFpEPMRjp1kaGvKGni92kryBMCcqkXpX6TkPm7iXd5bMgU"
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
