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
    "R8qC3uQ19Pei3LRti5LehmaAq48JEFkyRBZnayXeMFQFLYWPi1Y2o3Ku8cta8z4HJqGCZ7qaTTMgJuz4uDMx7Yj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c3eWesTYPyp4ubJQLRc9vxQTB3GzWGDkuesL236g3q33bmmiUw79jxhYgdBHC9qe32NF6CrV1XSm4uqfoo6Akn4",
  "key1": "5kf1sjxcYu7GFmGQ3kC9JEWSBVV9yLjRyoqNZBem9dtSCj47sNZpNGtRkPtdGbsPD7jzRu2pSpp3KNXb1wWezrdQ",
  "key2": "66RYTTEByfgY4H3ixyS3xNwoLbDX9zdT2nd7QPDE9fbYJGWwicCM9P3hUKRwwba7nz2cg6RPVFXMitc2CMRRv341",
  "key3": "67YKjofBBG3ufy2RgZy8YUUTEQrPjSj35VT2ggMevoGX83NDCcpUPV4U2jCcS8ec2rr2Yuvon72tbJFhj9yk5ABB",
  "key4": "2Tgxfy7af4J355KccuobErpZVioEi4kt1TzAhM5NV5qExDyjDd4nE5xnAnN2EvPcUb1eBrdbn9MTkkKnuMcy1v4A",
  "key5": "5zwtZ4DzyPQLFwmrcGV7D8rLEpFgpWWMJUWeWftYCSX54kCjZfwgR9HwmKenAMHCzfEQJLPQ51WK4pEXDC7aHePu",
  "key6": "3UX8maCxY8yg7z1vYj81prkSJUa5QMX4QQQW3aKTDGy9pvsfeFCTxNYt1RBwh7payV3CWy57zmj6m5WhQDGAukw7",
  "key7": "4hVDM4iomWSgFDpWk6z8fpiuUoEJ9dRbr47szkenizgztbdmidj8YurrDmUMb9wLngAcYHiKeNgEsXrbBEx2MHxn",
  "key8": "3Y5UQqu9gyrXmnV7zPPCGUdWMjvPjGmG5MnSrzBc8pB2KSxrYHMiHXY2p1yUeNPXYGm6CeXmXtecWUrQcHqudtVK",
  "key9": "5t34SNQqsvWyuWjfhgyT6FNb4hzpKDKnFx9cGF1C5wPkqhxPhmwLh15WM8P7rKPpuXXphk86ASmQMmL3q4aZRxDs",
  "key10": "42PwL4JzMJbcdbwtjSAUQLdNc9zufeSERLP5Yjn5PhHzryNz8M1dzUhbH53G35qWur7aPHne1cbfaKe6N3Vkboyu",
  "key11": "5neGGD1FB5hnodcUtLAQdxmgr5gpNBxCCzmx3vAViqZRCTB5sEoYNjFocwUSHzucJSWcbqz3FgPj71Bkb7Pgzch8",
  "key12": "e8LR6LbHzXVrwqFmrqg2w9NGcX4UkSmZdjnMaK8VJheN3uZTf4mQub7DGwzJnEkZcoXx9PJJjic9wRm21rqQaVt",
  "key13": "334MmXLY6yCPYbsdUea92Ff8j1ptZZJkZV1CrGFommDKFXWnphjBFSdiNv3cTSCQhZhB8qmANkLUgR2RwMQKyemj",
  "key14": "Yy5SNBPz3HHA5hSmuVZYpQJVhu79ncsADX33uN7PAtHarMDUabuHUzVSghKRPwnVCWg63ihWC2WhsDirdz8FEnr",
  "key15": "4eYJdySVMdaoiV4xKWZ7xV2gETjhi3fFg95kTLdJ69CoDRT58a6CCnT9MrBsFxtfs697mYwzmZdEjtMw6Dm7rKNi",
  "key16": "2bNEFEhZrVirepTNUAs5vdc1yDYhUsRUKGHXNPnmWi4pp7ynSYSKiJfWqqExkFeWaziUabGkWZMDPmK2USkPaYTu",
  "key17": "5u5spopdU5TxtmFB58ciSk4ceQ9nGzoZqtfbxPxFEPcgvk8VupnUKnmjnc2RvAPWugLkFkB2MUXAcgRBhG7kHLkz",
  "key18": "2C9J7HDS4VZc8A5m7G4sgx8VkVTG4wU3DxpdHEn5SeAvHbSCtCnge8AbLV8ytWC1y2mkFk6twzNHeihP5WyE4UZK",
  "key19": "3haxfpLxdXiRtCRcHGYUpE59nyRK89yaB3GXzz2tdF6VdiYFRgwvnHXGALZFsZxT5ekVJ1kRjb4Y8BRQSb34Q4NN",
  "key20": "4Smx3uV4HBDwbYTajMh4ESz7z1hPAM94Jaz83Jxx8kwda8AkfEegt8wBoSysBcRgWmvdiAFoQojS977eRcE4Kxu3",
  "key21": "KPp1XXfkAdADFGZiXfpSxJPgxth4zYpUwrrwsKDwbBVKSyZ9ZnXcxrSu8RzAhB3uptfxZDg2xyER7rmPE3HjBMp",
  "key22": "rqsE6WNHBVmqUP9Vwy9rqbb35oBgZFWadBpiAmPBFGwPWYJpC4D1cG9bCPZxc1dCiUgR5RMT6K5YtnaWbgXV9At",
  "key23": "FA3gaLQGaZLo6qkT8rCs3AdDesTREuDUw696mycHMAcf2Pvate7TQTvR6JPC7fVrtwmksaQyT7yANRNaesmtw2h",
  "key24": "1PbMKpKFrE6RZg4NToRKFy2a1WpYeA1KeF6V9Bi8V5LsgCKSk62FF3pFr1iZhTeqXHwo9rAyaQ3AmP6jjXYD2Av",
  "key25": "2Lz4bB5Ha5ZB6B3PDQSDxfJPip7prHHHHxnfCynA7WJ2U9QWppE87uvkEn6SCWRTY3tT67SDPHw7NQygmFXNnJ9Y",
  "key26": "3wYRZVa6Wcn42NaedpLaytRJxqcxmkAZNPiWzBYL7hvDVq2CFvkQM83BzAHyZRFnK7X8dTsgHkKi3LPVfozfYwFK",
  "key27": "2jKceZpnfMjj2inva4UGVKYEwa4sErxVUkGinYMH2FzYqjAUXBwyRAb53kSCv2tjW4qrZyxoFBHb3qGRYZ6MTGjf",
  "key28": "3mx484eTS3Ebx9CXnbP8Dxto9nvu99uphcRgMVWvQFCcNCJCz6ivdGn9HV95ZezgVv3yqDQfQWXhjFoF1Vrv64iP",
  "key29": "4NZrRoGyhp5d2peMywmD7ekjn7VqWdSB4erZbLbjBiat2jGBNnRusGLybWxNWLUSLu3tCHz976S7cTK5x84StQsd",
  "key30": "4sAZcESzWGzkd1RCGTETWh71BoAFF5pqQr73fu9VMG285cusKxKXEUdbysdpg4akvYAepvCJrXjUXXbPdEWRyr6s",
  "key31": "MgzpGd6ELUCpiPM9tF9X13bkKuQ5wVCtQywqa488Bi3yrFhTbjx2HPyj1K2cmkCpGXYMmk6585t8iP9X5sW1sgN",
  "key32": "2RTLf9ju4sQ4oKfvsTHqf6vLCeH6AEPM3FHMZvqVuh69BKYbG7diV7RuW3k46ZH4aqMUERF3NqWvnesf2gKKbtiH",
  "key33": "5HfkgDiY2r2cNoyBFAUneNgvpJdrYwYCFDhba8tPgqHCy6D83dGRS1KJeyrPXY3AS2GQqhLRu1r7pn1JyBi78qCH"
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
