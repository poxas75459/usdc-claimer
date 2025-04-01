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
    "53Hnf5wrmzwSNLVuYBF3WMYRqaGXASvrH3q6cDbFMMy9k2BJqT6gWw8KXRz6DAk1UdF2KfHvarj64yvnTzT6Rr22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MUpcb9wbH3L8m5k8Aqdm7E7VaHYX6jzRfK7qJCNvzj5kCdzf3Uz2LrPEwSXL8aCXgW29WkY2pDkvKfMJvAAiW6s",
  "key1": "uEyv4L7qnBxAWpsajrMqpaq2DSSycsKBiyxhEW8pq2QeTw9CZpSmU6WaMKpSmwd4XmkFLDmcQSdkwLBaF5mv7VK",
  "key2": "4NMcxhNvoxVxvcStUHGSmANmB3NaRjSy6GJz3wfAMoVzQPMkMxmSyacNxKVV2etXYuzjaoQaVy2WYeVVs4twqnak",
  "key3": "4ofZJFHTUPNeirUKPZdqYPuaTBagTqZgDCp3ds2FN5U2rb4tYJYrKnsHb17uYqeJVVmGGNLFNmwnxvqBbsq1oBa5",
  "key4": "41nZ27HVuu5Y9DAmJckKkraSvcV3Em1WGDN93egvqg3CCngKpYRC5CBhNfyaGgE3p5Q3SesKBMgmcLw9nQXsq7r1",
  "key5": "3bz5JTtdo6L4sxfrVxkuDL86Wd8ZVyXhWKUYGHm8cVr3GVg6FmPm11RrodX8kJojDdqpr8iyNcbezNQfbNLzU5MY",
  "key6": "cRCGARjhXzQEQyHNVLVVGWmDDRaMyAh7TzZWxippCh38VxRkUWF1cmyBXxoBBLxbZ2wgRrPsCKBF5MuZ8KDdgaF",
  "key7": "2ZKTbRrecHaDYxiQfwwxHNoxmehmFNLnoNTYE2dQmMCmLTec34K4sfsTAx3oCyFdjLrtrY5REeTZDmJ4eRmkN5X2",
  "key8": "2M6cbf8yQymTBGRZ6L9FbmGwoSMrFEbRCYCEQmEUQyxm6oSrLqGYuetfoz5yvyuJaoSZEGw3uYRdgPcGpcov8tz8",
  "key9": "4qbEyj2S8ZxRUUYY66KH7CQsxk1VbL93FEnr1RfbUnBrxB7E15N5AEoMwXgZTjhVWKc9ovLHFG4Qcia88mA65e5W",
  "key10": "3J7NPfZhBfdyww1Nx6BT5xf1B1NS62xwm2ZuUVNYmkGTxNP3TEbbfZCpRTkfPsVrbMd1TKvfQtEhjFNq3H5rD7J3",
  "key11": "3XBsMayKCbTrBmTSomFauSoeA2WDQoFAfd6eGVCVjdtnDovxwpL4fhs68ByviuAxc7Vvd55H9fuMQrj7S2bYQtXS",
  "key12": "2DUfv27b6NP4zmSyJHQshXjXCNBac1WWmLVMU3uAFVaKggq1pbwPiCXjw7UNanbja1dpbRKu9ScMvAWtmFvnaPhw",
  "key13": "5kEbwPv3e6HpPyHwtdtL1jWZgyDcS3W1hfkUiy3pJ8Dv2f2bRhsJdaiSAugASH7ewrRmUfvBSdFYwSWqDYjjXXQk",
  "key14": "2yHhSr1Df2ym38XLGtcGug5ZrAFTkJGeb1yvBLKBXxLwMmYmUUg78MZBC1YAKXqPV9hmgiMgCfDsmWFMCT4g2DhQ",
  "key15": "3E1vEH77BeEdkULmdzKc8j6S7rtXCNuaEWoxMtGwf6xzTuBjYQsdPQaeEvB7oY96ccjEfYALtrVuwWLPg2HESRUt",
  "key16": "SqRGTzwyExvUBbmYAboVLKpA5pRB2vrrLgGYD77SiUYkgQE2grSZZYdMgTvmU8ZMuWxnbZkxX4rhsq7kv9mXu3r",
  "key17": "4z72QxtSt2PPKQ3qBSUNjNd7qU86ra154fsuYABKug7DGb5MX4Mv5eYbFCK84Ls7ZorJoNUSFk5BNx27FwD4maxy",
  "key18": "5onJNSSmTNs9uVLVcuWWhVhcoBBJAWZwSXNsStBTkV2ATRyqrn9F4KNaVF2zcPYPy55kKCGVQYrtM2jNns449nSe",
  "key19": "4eXvaHUH9uAgJ7xGJ5yppKCFijxoX1jSX7JxyzZNnZ9cFpQeVttWrYzbXsJkfeRedWWNgBo34bnqvkLQzUHadWzs",
  "key20": "2KBaGEFHUuXes2P2qHfxmGwL2dVgsPqDBUPVq2codgSRJVnjCmQNfQkxdHiDKT6xKNdu5dCTTb7VSRtDnGKG9Krv",
  "key21": "5GEbEGSM7MXL2LEDPPoMhhHeHGGqGrnxEyx9vKPHuQ6BVPDCvPqMbKYn8mhXS29RZCF1vi88opP2EvL9a9rUf4vi",
  "key22": "3pTfZCq2zjvWVZtzsZ9bqqtdqEJ4sFUHob2VAkoVWRj72zog2J1tXKFgohijwHCcNZyYPVVejNjoETq77qyM7Xhb",
  "key23": "5CqzHkULAZMMszXDv5hg4SLaPvVz4dypfn3ScpEfdSduuzNTR9msVsi58yZdGb1DVK7VnJpDpmiyxzc1jjzDWLQn",
  "key24": "QvmY6VeqszE75XgM611s2dB739b7Yg6J5VKjGQTPxULyRxCaaPCQUWdpBTuixQcdgvMd8zSJnAYGxruk7BsdAQd",
  "key25": "2p1Gq37zoi8A547GubWqyh6x7dVZBnwqqv1z8u4wYFA4KSnb3c4UpdUzd4aTmqEnGCSPpHPaH4UjsEZXiMeDSmht",
  "key26": "4W8oSjwp5SQqwpEYWSRYs9ywPV8k9BwNiy85hi8i6BSgziuAM8dGCypkGykNpKU72b3Gmw4AvsTkegV1VN5qCx77"
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
