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
    "LyfAHtd1kMpZawycJQ1VHCUX1dVLwi3rYnyquS4uhH4W6HeqFmSeWLYnsewgukzuobG5VSUVgddGTpE34jkfo8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CuG1caDiFfQPa3MAYVM4M9tRgvSmQgbp2eKYfXmKpe8JRHqucWFUuLopVBqf2LpC6rN88k4rixvFha6DTr2Umz1",
  "key1": "35fTZwb586BWm2AMNuq5xTnRfNGzk9b6W5U4ZmUFotafPod5w5QGcESCY9XWkx1Ww28yfxJQRJFvMRDpZBv1VwyK",
  "key2": "26vvvhJ6Lu7TpGbbd1XPfEpDiv39w6kZqh9zZyv5JKPcLTXyErqF7yqQ7StYabbgZy5YqXSCtHp6EUry7qash934",
  "key3": "iuVZaPN9Gb2aoQzXgNcch7Wzg2q3TPEk3QWz1KLF8dQWLLNQFvRNg2f8T1VSC5yQwBhGbhi9dqy4Q4cVzDfxvY2",
  "key4": "2r2VPgMc9eFThY89oLRjuERnQDxNahT4w66JKE79N7kenY44HwBv3xmzM15uJ2oL7yEomcE9HGQVYDF3xbz7zBKd",
  "key5": "4PcbZMRd4C3fAcWn1X7ijtahXAkuEYzUN49A7anpss7tmETg4rqba2JUDrdCZ9iYoRH84KczdAWvf2BH44LoXbyK",
  "key6": "3guRoLFDup8nnaHQNQWuPR5EUGFcJwC6wm9xRW55YmR8uLnVHnMqk7izL2WVghd76ECfUsqoQ8UpSx7B5mcNDKzt",
  "key7": "v91wu2w7czLi46N4ewkXSKiCUbJNdjkAV7FrGh14HnHMnQrs4Hx7powjN1b8YbUR1Ebp6Zn1DVyEWpU15htt2y4",
  "key8": "4NwLG8rPLEUVDZqoFW2ZYBnrsVei7dseBRe6sqgVP4bQ11DbAfNwAS4BMxtV7oAugpiGCrJiGSmim2P1QQvnqWJk",
  "key9": "3Hpv7KBkVaNNheUaKqtBU9prCV8YSQotXfQ9Vka6uyi6fSoth36miH2n27uMbiFwo7xEWaKnbqm5uyXb2b35WQdZ",
  "key10": "5fA98SyezuTp9SeTsuBmTGvLx3vMBdSEXzZw3eMVKQ7dePQ8fNjEykwzrfLCubmBAVoZjdZoz6R96Kwy1wUyk1ER",
  "key11": "3AHvVvLNLfC8oBVKPs6jFsLCgGNx2QBBF5EkwtpjSpc8iKB1EMbNkQUk7pFRQkeRianodZ51rErkznPCayAYfeqx",
  "key12": "5nu3T9P7n7CeSqj85xHGYxTYJVbfU3FajiB2qMb8KzRTjm3mR9KFdfr4ENmHwRDGPaKR6ScKue5Jj6ZrADBu1x7S",
  "key13": "4B7FaXvcSk8xdJNeCbeGjF3n3KKRCdzpEwi219CmAVF1pG9GeakwPvccFsxJ222Jvbe7yoyD8NZ5EtiNLPZGYCoo",
  "key14": "49tWvFQyMFvuwDPLb5BkNA5vV9MZx7Lc1w2gjehTuAC2GcvdhFFi6pZ7sPUXg17t7mWoPmWmLKgJg5LCg8GTXiRY",
  "key15": "2aqv35xYBbvZyCcQNK8LAzxiqmnx5HZEVGvMw9K3vEAFtxWt82HtD6CuAKf1DDkmEPjJjqT7GjXkygLBL9YgMq1Y",
  "key16": "4NUiXUqgpAPEShbgd5L77RCsoS4N5tKQ9RiSr7Nu2rXuyGGvc4ySE8xQq9TPonAAuKpF4MEGsHPye5YuiZXmKUtg",
  "key17": "dEWVFoSCDdZb4GpGUq6vTtmdTS7tjpXyYXdX6aom3RdLUMewqHusyAscitExePoraoC758DevyowBpbY7pxAzXc",
  "key18": "5iYSUVZLdRVzy3pyfKjMVjk6eJBo5CczU3Rdf2UzVaHCUVKQCbBdfEYPVkQqWZaJuTxPUAMhTm2ttAd3WsaE3Y9T",
  "key19": "4FjV37XeG1NhyniX9creckJEGwwYh453d6fcTwytoB8WGDoFLz68YibFcshRcvPBJuQZ26MRjvcJqKxVsdy7dAJp",
  "key20": "4E5bkAAuiBEis1WJS7yCuthTebL9Ps8NydJTXNpPusGTxzE7pQpsCpskSknTxnmnVuCzsMVEgcT7LbotWjG41vUt",
  "key21": "4pjRawMEFYMw8kvrTWsVPSPPJ6gfYjk1qtgDJ5VTjbyV1HpsH9ffHgCF1Qkpo6r6SCuY7EAzai3d3iLLm9o4nRXB",
  "key22": "62DkqQsZbaButDQLcPPWt9N3DwpaS7Vh95EnU2eit5pYFhU6ZgBKduKr7jJY729bguLtdWJxwmfRmeiXqyDNwhQ2",
  "key23": "51Xgng4UvYPcAwFzrBLuAJFSwvmvpj1JMcKWv593fwgBF4tP4Q28sL1cnuQ8aTBD2E5C12wJZfcBcZgZjwjq35Ff",
  "key24": "5K1zfJLJo3Ryea3mdM61GTp2zMKywJ13FzDxFsSGjQjyaZzQkqYR77zEHej57XUY82pbrFqmYS1JwwSHRMgveLES",
  "key25": "29Eg1mZNT1yBnqS2uCsGtC8a64vWPHhhhyY2kegwAR6Fk5JCMVigWUUWk2e2FYGQjrDDZbEHJCWJgzgivM1jEQTB",
  "key26": "igv3G7cyksww5WpYA9zmmf7EwdDXHvKfTeq1N4TRdxUwJLwwH6mJkHSPWT5QKbqmathGAVmhMWksth29afnC646",
  "key27": "3G7DgNBXSuaMVtVfScUK7XSBKBmmCiGMViHWcDvTh7AknCq9jiD9eygE2aNu96shs459jPMNydRhCGvK8Q6RdwLG",
  "key28": "LxVdYWPTY1FmNnwHWSeJBuk26TewyUTSgkFsbGH2tqCgsF29YzRnuYCvzjhGDtDawjnRb1xnsKNU66X7J8pWyDg",
  "key29": "4Dxd41AWJQH3Vd3BxE3USf76w93aRMS8mTyE2J96obQJDUXkUiDfZt1vNgJBLrmU35AC9JFALmVXmJGaR6pfKNzh",
  "key30": "3iXXabXd9fumU4ds1GtPRqmw7sWs5EnKGw1UfpoprzDMY4Fi1yxxkkRGtdvHwiPu1G98eYCY6QTBjtmqauhMVQ33",
  "key31": "31Nrgf8xu2kMLRxBqBS6wGReBZp4YDHJnp6zTbC8Nc6yRPdirvjeC7k8Mx55c61yRbE4SKSwrcn51hGWVw6Vmyup",
  "key32": "56LtR1smD1P7FonuvBPAW3QJ8kFYDqcZpwGmmT6NxvyMsDFa3JPZTz4vMbSVg2yLxFKMLnyyBJBSbZg7fsLPQgXi",
  "key33": "2YL5KDWBQ6z254PwHNPctgoie1zuSCs4nYFE9P29TJwZXvhfJyQHTVHkjMaF6AohphYAyUnYcvDzagDyJsN6GWNh",
  "key34": "FULLpBQ1NA8oBMaA82bm93kGaTqRso6wLnvDK8khon2eyZqwM3CEHCGESuSDCis1d6ohXeG3s9MDfGqVwWvJgMS",
  "key35": "4BEGkqBnCrbNpw9JNhwzZtfsKp9Go6x2Eqi5fyjnHKt3FFED5bxGMz32aNQw26YpJDzSAoHFj93pKRQ3Gn2LDcZv"
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
