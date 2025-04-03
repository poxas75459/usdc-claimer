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
    "4zMth7zmdHLb4QDZ89pDEWvehyrsqvYGMadSKEjTqT8hwSeMMnwZEe9JEj7N5XcCuW9y2LkiVwJMKa6UKto37QYc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kA2JNG335yK2JA8Y1gaUAoPLpRG8Y2JD29q7eiCPnAKUr2tbYsxxEjhro4USiYQZKcEbPwmKqDziqBcp8FJaRMs",
  "key1": "mSqkUT9gE1sZera9ahFyKvxxFea9NJfb6ofc9GYKmkca4QhXYKjjbuBtMVHGRApbMTjugnyxvt8uoWh5Ut2yRdY",
  "key2": "5KF3dvEqbtEJnu4hKAjwqR6b7Hna4mN7eD8Pnn6ZUHS4rmwisixSbcwPmcJAaJSj21zYajasg7CcjeKWA2ttgN62",
  "key3": "cNtsK3a2P13s9A5Anpe2nku7YnCkKTVY8YS7iz1GrotB3mwi511b54Yj88QE7YCF3hMRnHPkoQRjSXb9cekeMiq",
  "key4": "2ZdhyRH2gv4RGkzYgHozzQQt6gxQSr6MG3M2vxuLZy3XHzeR9op7tu9P3qMNk1CPxopW7LQsamXgfEq5Bosxsh9U",
  "key5": "Di4uwybyTKjhrtKqZpWVejLdhMJmRy3LxUDpiMvYXCJYJDUFqAUZH8ztxqyR8wgxTZSXdQ4iMHu17U3ajNaujAh",
  "key6": "3HVq6LSksAymJH53g3NboFZizZi424j9XXJK2HJNh3ZZrZcLYD5CeqpMGpBVwB45iXn76FLR3Eaxg3GYoQfETrJg",
  "key7": "39i7MnYLEGTGH1aQFdYXNR21TLYPyGUVm9czj2DGEaQ4S7cTQggok8Yd1vgMSTaNidS1Sdsr73KNQSmLuT1AyXhq",
  "key8": "3VdVebjpA3zVsvvRp4ZXVz6cqCWUvwHkbfoqoTyssr2V4WTnM2BLryfcc3KKMHEN3K8A1K5w1qSg4DZHdjvs2gXj",
  "key9": "9Ep9EaH3C2DimuVChageJ179ALqkZ9PdCwudPgRu3KmN4TMy4GWD5f5hZ1U8P4o5ZYebeQG57KvsBuXxSHZo6af",
  "key10": "2t9vzS1pr88J5Xfc286DCRwRroazAeNqD5yS9BDahGFJ333HH95D7ATiatm8ePgWBiMBUHPxskLUEvEvf1NQQ591",
  "key11": "65e8TmnekhyJ5qZHzQk91gN98HKqwHWEw1AXgDp3s6M9GfxmQgqkvppRLCmtQWAPZVVBUzD9Vscq4W5b8oYHM8nP",
  "key12": "5w8VypaWYGxsiJCfriNA2iq67P8dmCzszYY6LSAFAZHufCrTwgRyDocrM6QH33sh9ekUJPemXscdBb3gZDCtBFXR",
  "key13": "38yPyfYGvajXafxxZf3NoDU4UYTiVBLjwMZWNjNNSeVugtdsCMQe75KQKFStSD73djaRe36YunV1CvMWVZPYPpCN",
  "key14": "5g8rJwffi61XPWqWRKwkdLAa7mVMYvKsGrnhwe28DQDhE2jRHeVRUBhCJY2XWipaVajsusbNQHq1t1RHuKMkmhyM",
  "key15": "4w3Qp1QWam3AvJCxMinsqkT6TmsVhFNG1DNR8xLEBnRpas3htppo5RbuUctGRPJstGdVSMujXfgW7g5KRh3WD7JW",
  "key16": "4rZtjRmqu4hqTbDmA4hAdj3wjZVPo7Kvg1psohAW1BQmK4oqppe2LdJoh1zbGkUhhACnLRvQ1KfbiQVSvYUW7qvF",
  "key17": "4yZw3z3tWV9N7YN8H1HpUxUn36GzxjdY9Q8LYiKrMhzrwrJA4qjuu4VVo4LzkDdwuTEJaeZMDVEoAFtoSRpmPudE",
  "key18": "3bhuoKs9j4ESv5QKFPMFMv5KncohMMRFq6JXG1N1FiMTeFnApW5h75qHPnzs1M8Cpej1PGu85UUMtFC5u4ysfx9R",
  "key19": "5UNaUDr6uCDHYDfyVruFYRwPdMiGuTPsUSBtzMnNcDbgTZc2sPZSSapZKWzR1Dx1B5hPsisAM44HHGXk3yZE77No",
  "key20": "4f8NCj63dYcB7pHy3FKatJh6YNVQo6ygT3HaBpaR3yXgfeiCWGqvFS4NWf28Ut7kTqV5MhVh3V14SdYBec9JvEMS",
  "key21": "2K8CG4vjVxnm6vmn3BPPNPwVoBs6dmABTv28qx8akVcStsmDwBqgSNeY5RNu6Ech1WWGz5jHCL4nBVgT5uThcsAV",
  "key22": "2yASzNSvTauYni9CVbkyQiFHu2gnSRngBUD2xf2RTZgedx4HXipTcx8jsFmHyV3j11aMTDyTVpX2HsLzeu5PaxLD",
  "key23": "4q24c9A4udFd6PUVdAz4P1erqMUUG5XwvuFUmwCjh5igDj6JnN8SymApd7BT2gFuFfTLCsTVfP33MfFQJ3GxugX7",
  "key24": "3HrcZtMVYjA8S99HXjST7bw2kc5rtZCcetYmLHq6D4Cn6tfBwK4DtZQFpWmpKSqLqmKfYr4J5G68zd7D5DiTCr3f",
  "key25": "4rHs8WCANkgg8NFWooDdTdGFCrvYiRHJHTf2jd8RagaRSjcovkkKhxcEgUYC2zGLv3yj84jwgCwa71mZcAVrZJNu",
  "key26": "2DkjpE36UevZ6Js3icx9Ma9FLDTnYwYX8uepz4LhZwufBoHoibWHLov1Pyj3fbob79NQACiMg559kpxKVvg3egQM",
  "key27": "3XcVxBhoMPRQ5doDRkF22BDxqWus2ApM8ZWuWw9cpLdsCYpwRSDJFEGYCXuxo9qJPVjb3WVpTKgvfbNL7C9rPfGc",
  "key28": "37C4QAB4SWM7wVHj7WLvFNHFtdjQW7WiqKqebMvi2ntJ9VuHYSGVG3V8UbV3nP6fH5ovQvvbTEDQcNhpJwE6rZNb"
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
