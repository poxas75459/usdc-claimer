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
    "2ofiXARNEA2adU3gpSt2mXMUQ53tYcoGKFZ2owotUHzzNMQdFxWsNuph2wHt3KNr1TBPcohcVwn6obwtG5QqmTKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TAHK4mNGQCco3pKDQbfjHeyGuQeC1cCFEidyHeWt7R5LHhw5BUnzRcutHcf6bZLMMt6G1LT7bfa9SR5jakZDxwS",
  "key1": "mS9ESDheGVnPFFnUfGyutJyE8jQ7qnrQe5mu5DPhYG7mEhvUfHDKJBMxVyx8dt8mBFLYgY3mSZ7xgXWZswgZ75E",
  "key2": "5Q9dWRPe1KqWgVZv6Fbo7YRUG6Z9kqfQHNmMd78kPv2bETANjnPrae4iiruQbQCfFF7wUcA5Stx513RnBXE1XNNb",
  "key3": "MsubX6j9Gg2VZzpap33jGveit4zAkkCwHLoWJ9TPWTT591j2EWD6D9mM1tAPoq8jWsvVzRGUdWnBbGPzudTk5dy",
  "key4": "4PnA5GbVJ6zb2RgApjUsxMXBuXif57nuuaEyTMgVVRgh71YXb7k5u1haXEir1SWtwyEvnFstuEm8MofvqAGnEw1R",
  "key5": "3AhRzdXLVPUQEdwnXCQFHX95Bq95GuUchKQsTN2EVn2gv8kL4WmNWA1fCsiq4sTMgG7bEj5nD5ogvumzS77PX6r6",
  "key6": "2NkWSvYjEyk9vJ8m1rMrdDqytWRPDng4skbsKVe1t4UvWxo3KTS2J8UtMfTnkKhZ6BicFS4YzYgSWH2ymuuTsnEq",
  "key7": "4ycGJg7Dj5BWA3sPh8sUa6FuqYywmku3P3NhgALKHDEhaLCKYcfKxQTG2eRNYPM67L1HobosocYpwzWR8KutPseZ",
  "key8": "35rjtsS49dsG74xvzxsaMqmayfAZXzUTaTC5jvZvhxF8Pee3eoYnGHDmJWZKsw3WZtSqMYgvWQQhKsW25uWBma6g",
  "key9": "2mKkfHDFk52YqLZYYVTNVBXpM6a8i8jTqydjPA47nPXYZEYeK4xngCQKE6wcgH2xVQoSnKj6TKtbmjVeqNn43nwP",
  "key10": "k7jTQ2STmw1bG1fXFbZbzcVfN2qYe9pNotoibF6K1ixzYEAYcSu1TCjSGf6BiEZETg1wYHajLj2VktHnthT79PF",
  "key11": "5NC6Y6PdhdWgZEBwT1GYEpivfQK2hDwZTtPyinWH8DH37XMbbfpHcCRudnWb1DjEey6bEmHXMmYMFA7gJk2dfGAa",
  "key12": "5fHYR4dqa5jbsbTyVBZ7T6TNZUvEqSJqCbN8qUxMV7jxTwvhmUwymsR9BrNaTgfKBqNM2kzFfGG4j8FmoyjfUQgW",
  "key13": "55x29fb1sY4bQzaGErXSUwdj6UqhLVzsG3d2Ezr9eiXa5jqDU8bT6SuFTk4Mr9qyCr2MR51KWwRpr3enDthwJgeB",
  "key14": "3dqNmh6dpyTNuTy3mcZh4NdxCkR5sfw3enisdq2nwi3fTuRtTS6QTpD1Ytw9cH4F3Z7CKD9WxCgvnVPNFKRK8M7N",
  "key15": "xmTEkhA4mFYyVwx5ifxGjpDgP4NK9sECHi1n3Ss61Kr4dGD41RAARqtBP5kUKAezsQTsbFaUeQ4xVBgh7EBCaXr",
  "key16": "3b1A9fZpyHVExMMrKp34QVFE3hu4JyUggNcSsyRji9ojfPj2dCJ785qrs2wHqiZxoM1GxFaoGdz1udCrw1xy3ksr",
  "key17": "3MkP98WKkw9xydriLCeWfoxLbi8qbUKQb5fvhX17PBPBgR7uFhw64EBL3ns4tu6yKZE7uRreRTPmEoTKgC25kwfz",
  "key18": "3gZUF3EEZuNAT1Ft9USLJ4ZVYx7pzidfiWdydZ3iosjm9SASQZRx463Xo8P98kKeNFthYfF2c6TM2zhMB7R49voQ",
  "key19": "h1UpvQU3iJTyLA1e6X7znLEcoR2eHbacPPyo35KJm3zL2Hg7bHxuqsaXnzurFDtRnU5w7ejcpqpuJQTbHoMofjW",
  "key20": "c54BBV4jg3XmLbWhJmKc1w1kAEUaf1D4Dcc4nQCz8DctQJq1k9BeKGt2KUUHGYdCbe3VMxBChwtpxTXfL6W8qkS",
  "key21": "2xyX2acE8k8JcWaasoZVbyQ8kMFdVipsQLyDNcaLSfoLz3ZvbZgbo2WomBxXaYt2JqA6iFDw7bJqPH6YcseEt1Rf",
  "key22": "41fvMsGV5tQh5Bqh4EP3dzDByfz4CPP9eRqTCAMU4UbSrzwNrbVR5GUZojCH347Hqai7dwp2BfGvFPq5E2z1MVUU",
  "key23": "63pdj6k59erLyCnirKMxxNHQRAiKUiCpj82A1Udgp5PptbkXThgWZaVotYXik9C7c8FyAWz35KEgnJpgR1EmX1bW",
  "key24": "2VhEj7LxC8zfcLtih1BoAMVooVh56jE9eWize4vESt14vTSx7ai9i6pPDn5oDTmzPJKWsHH8oJZKngMLs4RKHaTS",
  "key25": "2gc6Pp9xEfjk6yd8YgJPyZaV3H76y39Xx2hfxokQfvi2dvX2g7Bki73ZMyAakabCSMH9EHrGzdszFiX3LJvK6uaL",
  "key26": "52ApmiPTb4Fofjg8qmBZFjxpHGXSRDi9HKGq35ok9nRKNXN2pAfZmkUZeSqx1s9J7zebKmnuvBYt7zpHWi2CcvN9",
  "key27": "3ChaGBisw925nosi4n9zwsK4DBbp4jvNsbJypXv7U73dPPJikbKidhKD8dSLJZ2onMGbPbNHGxLbHLLoxvYEmzuE",
  "key28": "4eY6HUYLoMP8mtLdZRkrqUqNTvSjMddigPS9MQV55RK5C8NuZfU4MFoEorE6foUUSpCEMQ7qNrLmJJXiYEinU8pq",
  "key29": "4HixG3TRRQUdzLafN1qzEknRMbzNMqd1QZ3V4n6wtyUaeHUB65DT8tB63idGUZ7wuncVTRaEVZCiKd7Mkw8ygy8A",
  "key30": "4zekUrZQMxCQ53LHPqVqpXuvaKJrT5daqPoRmKwGFXMc6cEhVYGP2PijxhGLAcZiWSrPrEGvba8x4p4mUNVpJn5Z",
  "key31": "LtT7mpZpVespQq756feA5AcvaXH35QuF1mAyKp2dmJQ7dBWopbxz4Q2wooXVAZzimtZvsLquxu7yFz4MmcgAZ6U",
  "key32": "KzWMPQrLj727rx6WGmLA5rdHyHehHa2Kroxecu4rtnhonsEMpZvGNbVoWu7ZpffoJwhgRj8iBBGFPBCynXK2VRD",
  "key33": "3tCmKdDYQEsTKdHhNuXuNhQhP15vvRcnEhNS92iHW3X8QkfrSEE6f2A2j5am8abGXk8zFLgxHsEd9i9B4cP5RveV",
  "key34": "4iUKQxu9vWrbv2gs9wGh8Gd3SpDNC4fLCmspg9M87DqxYV58m4Xc31raEdsewgrh2rtFNHYKj3jeRASW2vogGhwk",
  "key35": "5rn3Rpo3USf5jZcAcXzUEaD5UyuS4J2DfG6RkVpi1uSyzZ7guTPKApStHU13Cwf714mkzY2KkdJRzvhWvAJFwQBf",
  "key36": "39wsZoXAesGphuMDNzLu3o7t1vozTRnZcGMXHB7rd6KQfL82Yd7PEwLvLKVgfwYvpADL8wy8A1EKhJpPySJNk9Rz",
  "key37": "KbDH2u2QXG4J2MFU54iWVMu9KMhAkxLY54UW2j97234ydVYF3SspQrfNPZcBnm8Lw7kEq6rhbP366Efary4t6aZ",
  "key38": "LHGovNfrm1EJGL1DPdj6XaajCws7MgZZ8WuUXH95esZzUkcfPnszXyNbRNLmdGXcNntnxMHKpdsZkvhZixPA94L",
  "key39": "28mFP7oXmABRyjti8V26uHtoAY1oNkEmtsBxCFkoVvbqxoJJbihQT2eDxZjgAzTq3kTamfMZRYLeas5gSWxfxBdb",
  "key40": "E9AUo84wyMwjnYhNwYU39PaJTmweNBMVEM3jcfHRewphH4tmHZRgEDUFreoCxRrA37uujTHc6bwURhMkjb5yHNN",
  "key41": "3ytp5dt9hoMGkjQUkGnqGKv5Nqapd1kBFJju2ziTx8RcEsHUiC92pZVRCQSgNKAh6DfRQaA13he4qVAjVkH611p4",
  "key42": "5qtBPAUaZ9cBjpu7DoAwi1Lamb7DbgZ7iYDyaYMqdgbhiYH3TN7bmiXmF1WsSGMiqoyeLMYuwg62Fh9TTgahHXUj"
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
