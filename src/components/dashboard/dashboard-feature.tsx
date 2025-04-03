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
    "3s7E5pVU5RGWaLwMSzj3N5KtKqMV3MmEnth3zDntmnSW6enWun1RnkJDRSYEwWZPcgja7JhviEbvBZQh1xoPafjx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25jdxJ2RKVqYyD2KQR3dggCiNHq1Y1zMjC6RQwNWFSNqCfa8nuaXMG372aBkau3srjYP47NLGNcNJqZoz9kHhjkj",
  "key1": "5vJNTtaq3Z2Zo6DeQBfgc3m6URZ3cwnwmPaMVsv4CmTqnrxkNBZKpbdrFuJL4r4doDnThW2TcfRmpxwxGPuvRTC4",
  "key2": "2UbLm2sLkE4DBrATKwbcxj9SD7o1qwDwvXZj7xP6BEVBc9Fc5wZ4mFyLjzrecMiR6JDFtiSg5un5UrQRG5U1H4KX",
  "key3": "4Tm8WzqPEiBnM5TNRHqRts1e2DQN6YbVnHwZcqE5cqzGeSpjPbmR6cfiW42QCwANVzxrzYHor68NVBLtNbDPYu1J",
  "key4": "4dEQ1ioGn1iRgYSYXfcpbK8wSq5Whr2tU8WwWtzqnewWT1EixYw6HiYTqZDJxPFEzCi8dYmr7DXgCq1svpRaSGcV",
  "key5": "3r6rYG8m7bqBjzcttxAw3z3sUwJVdP9HKxnCKpYpTSmXbmYVZnHfbiFDxewL8bu5xM1cBRxX53TMhhqQC8irZmAV",
  "key6": "41irkCyGHFK158x3D8RaMu8yPcmwchmtxbTAF9aWCbw5d5uvDDqAxconM8JiwXxLijZLjYQB3RMowQpTomodpDy8",
  "key7": "2tWjRoR65k85dRGQC8Q9iD6UaP9iQgsKU4jitcsqhrqMECqBVhUNyqPzTC9rJNa1PHuRzcmKUoQt7YKa8H9nr2Yi",
  "key8": "2kVU9mmaoNkETYfgSKw2Z4bpJ89EgF9jUAQ2QYzAcaafViHKFUya4LMNrFeaXwLdoE2gDKPb1AkCwGqQNXTvXqGZ",
  "key9": "3HwoC5w6LU44ajNKazTQLgGwKpcp86E1YmBxwWao2zTaTbb9k8a3yyV1dHaUcGtaQiLDWVYzPaDkH1wW6kP4noxq",
  "key10": "2uqPGrsUbrFGxSkbXRM88YKfiPPnELe6TGZbCGgRaVZAX6UxTzTtqsztxAhZnewm6DqPHjmWSVwqYghN6eokcpig",
  "key11": "4kcoTydQcj55YjPtDrw68a1wyVRbCnbC6vPpK1NpX8EwSyx1S4hocXx5BqBRY8BvQTF1eFhkcEYjQJ6NxeBDSeyH",
  "key12": "4CzDjGamtwh7KvYtgb17SXdp8iq8MFcAwFggqcijvYPBSSpHMqoYMoNS74B3rxYKaVvLwwxKthnxP1UTa1rAqvo8",
  "key13": "uzhHouNrgdYsjcMgy7smVNPhyPfm34vktar9AW5gZeWJ2pd8orrvurZdUTpMJQ6eHU9uDbeM946CeRdGuvCL33d",
  "key14": "414hHbEXbfnQDfUpmdcAAji1YunVTW8E2ppNUpZA6xEo6CP9sFsRQm3bBy4QaCULXFomiPoUXyrQC5CVpNjxHffB",
  "key15": "xx6TRUYCFZJjxNZcz64qgn4v5841qEWGWBL48PBmdYtWMWkTzrc4UYnzpH5T4xgH8EnKq7W7mN2PJgQJ1W4pE7m",
  "key16": "k3H83P9R9mgm4YAL8rff4NYxvHx7K7FQ4sECCVgJvaJXTvuP59soaVLk6kjwHzr9EfrBoghRfD7dG5TzEPJSA3q",
  "key17": "nEt9bcFq7ceMPg7o2MqDWFDGWBw4CNmdtrA5qmXEvj2dQwtE2aje2BuFtXv9JnhpFG7dY8gFn7BuiVGAprNPAih",
  "key18": "5BRAn8WJz39xoSsURCp3dU9rzgkemLAEThR1dnrDmXdGvktV1s35rcjnd5dAzqN6Eg1DKUBTs5YoGJzgp4xp7mfF",
  "key19": "AGBZhkus5Ms7rXgKJhWox9QcECuMr51fSdMHZig5MmBApkuATU4v1dFLwzLbQtUsEiZo9aVg9CLrBM6ELdBMHx8",
  "key20": "2VPzCyYDWpsARYjqzo3idhrgBD17HQgw5jGH7oSHuLcwASfDzoiacW8us9ABjqtEpkdj9HWXkdcpCDngPuM6R6fw",
  "key21": "xANoRCeGvMR6Vij1FK1FeaWTfAeAtbuyxD3sLLte7X3KHuGGXRi8vxVirGA7dgbg3iz9R9McTMjJsqaJ9v35eyh",
  "key22": "4KriJyhNFkxbD8p9AuPQfcTv1DPs6qFGKvJdjYjZrcoTC1x9mKBfCiNEnsSnhS1C4NEfj1NERUvJJ7CCi55cwTKF",
  "key23": "3SS9eP5hVrsCZ9xAdwUYzsd78kYsrMsQz6x3dUPx2GVvXZmnx3wX8B3EApQ3vzRLAFrfxhCVCSRXemT1BHKXgUTb",
  "key24": "3eH9iL9cjSeMdab758XvqBDUFyR8krcYiXtVAvE7VMfcdHhE9BzaW8QPywMrmrQc2ikt73HMrWotDhRtm5oCgnjf",
  "key25": "5HpbVzQ6u2QxQGMAm4fB4FGoEBXh8A51A4hqNDgqCioRvs3wUtcqwz9kjk3ijJFzdauZtamfxp37k4yQCLdzEqdn",
  "key26": "4n3CjBcYdnXKXkMMeePvU3M2UucFxRFPm9DiappmADJab4dgc8kb22WPf6D8zRNJJeEdLz9rtzcm46AqaAuuDvMk",
  "key27": "5ADDSM1t2VLmrv4A9VL9STNCHeJB3DFFFTkDpHRFqg387WfXWYraAoEa9KgQPNHE9wKHDhovMeSAp9zgHjaWKZ3F",
  "key28": "5zXi162CHkuCHhE81D6N4CtrFkeEArbiqwhKYRbUyiK22sfEjCGahDKvh1G9bpuXESyYgn4JE5b4THvAeXSs56qp",
  "key29": "3rjqexXHwBuZLdaax7BqVCeDKdz2giJhDEvvVW1wfpycjaa5QJ6XmwT5yWt42p94tKG1eLbHg2qU1YUXNmrYSUiS",
  "key30": "63MThKudF49XY1tCx7HJr9DjjDab2puaQrPKCjLeG8v8U5qAq7xeqbC7LbpFwzeReLHKR5ApZCpisJg6D3qVc165",
  "key31": "3TT66JNEuEEGELbriotCFaEddKUAj7hmdUUfHFdBx9ftk3Px5DXZGqtWRBpqxVpac3DKqi6KgcktcYZFyTnBGnof",
  "key32": "5zKZRqA7pBmGfxMZfqcDMNqPYbZYJNzCirPdezTeiaTm7vYCitL9uat4kCQ1mX3BvWEZS1jfyy7Mg5eUmgBQ4VwF",
  "key33": "2qYteTr1pWnyHjL166Ljs3EY13vZyKrZYSfPJcBmyLSuQgVf8x8zc48VGjDCEo2KrqFWZRGDsuNSzLDE4TmwNHgH",
  "key34": "TTFyXBgaod7WdtfKK4Tay6NYWHJxP8yqqDWzpqLiE3WhkmgWFWy4xPjpfQDzCdyjgNMPYXQ2TJKZD8MVxLAhYBG",
  "key35": "4CpNPFQgbzi9rHgjKt4jcGu4G264cbGXD6im3tJt584j7asW443vVxGBUHmf3LTC8PUXP6QtNpMbUyKuyoKR1n87",
  "key36": "BhYvNykgsLvp4iyygXBNxSVsJ7BaGKncqUikoqXM8Ew5mu5snLFFvpzFxb6BQKYvcPCGiNBBbj6VPFp3VCscq9c",
  "key37": "4wFZgzvRpSQQZeyrMV9PS86XETgNkPTRpzyYHGhHn3f5D8fxFB3Pygu2pHN9kB5ZD6sF89EMChfUfJ8CLywqus3M"
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
