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
    "26J9xpVqwPjoxHVdsSDwK258rbrNe89aGG3Qqdco9gNaJMM85PeRHGS8JDb6emTJsNDGLNJzpwTvSeP9FzksLTyx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HnbmNb3m76UZrHHwhm5XNZsby72xroQpdr8pUyDu6pTRCL2PfAWQ4hP6r6hKu77ZyrMNnjW1DfDHNtbB34nc5bW",
  "key1": "2U3tK4oN248GWktWXMBbj5X55LhN7x4ty5abiCZ24VtgWSysxbQNu6fjqhj5mheK6AaPQQyUcxQG13hdKMdni1BK",
  "key2": "4pZAgJedBnWuEWwNajUh7p4eWQK5puA3v34em2JSQcpYqStrTPcaiKZHMoXtS3tGJWtWnbWiPNx7PhNS9xn3EBEs",
  "key3": "X6YvG9jPpFuCMo1GtUNZQWT97oKo9sGkvjw8hPhj8A2jziHyvqeAPhSCsfkqvpzxYAaBfR4DXjYNoTz6ZnK3Um4",
  "key4": "iwxAj7EzRewNGU646qcErcGzrnFGvUnCzGm2cP4m2HhWaEgyZtB7XL57LVghDAvmxsUWregFYtt5GCwQABcBpch",
  "key5": "5ugdDFErPfgdwu75NenHwPJQ4YSibVVwWtEv2LtX263RbYnjPaqEqHHfx1F1zpZfmEtmPeroLn8ogx5gJEirrNmy",
  "key6": "42qE8g81LcS7XKAVDx8MbaWvEQH1NjfctgJobu9qMyUdRU5yeMHqagbEMJAqvT4pNoBGQoiHrzqANbQ8FbJv13o",
  "key7": "66uBHEKUTk3NRFKEWGNGUC81qe95XxqjHb7ov9qidYDkXeMknhQ5VFfTfzC5w2jnkU4AJjc9RFwpeKrvQr2rf7Q3",
  "key8": "KbKMTTGV3XNMxVFD88BoRtge4emrtfHwpcXY3kmdRjNptupKyuygqpyfTW5awGLvY1P83mQE816V9kYRts4NTXD",
  "key9": "5B1o6dPvFNk4YmztcUkkKeRcdkpK65iCWNxdJeqsRtb4LsYKcKy3GcqmLLjR5UgUyoazC6Nf8bmH4QqAZZAywVpc",
  "key10": "3ToB25ToQdK7iWYkgHCqkKvDGYhTXBKPfAYZLUVKSX9xDinASrexkwuzFiKD9TB5FEp7rguKLCW3gdAUpmV98F6R",
  "key11": "3QfjHZuTZe7eCd94Y1quH1JGofXJj7EdjqJA1dwd8DPZjVVazTC27ywNUpTk4xmsj8oUgeWjPVg4aUTbkkfcWvUj",
  "key12": "2gaug5Qe72JXCP4fMCKTbzZSvh3NGi95PLXadDyJu2aiU5paDs3X2Q7LxAW9HP39JLvLZTWttXBmEXdNL1Eo4FMu",
  "key13": "5d5FGGWDJtEQMqFTgMq2rQk7MeZrLYZUbzDRRqrYYEPVEq5Z78Y12PzeiDyKchzc3ZL64p1yE64mitLTkHA8HW3Q",
  "key14": "5EpjKQ9Ue7RQcBTTEpe9fivVhZCc79NWFjN1KPYMvLXAzftMusBs4JgMoA5YPA7mmQJnnYaXuY3QCy94yQj6fbDN",
  "key15": "PNgt6bZ4pT1Hf6wT96rgnHSnMzYyVQip1125HrEtC6FL9udnPdKkDrMC5VswFjNm4UryhVUWPhrHJ3CBhfUzy9N",
  "key16": "2ywxXFuJiZHWi4WfPKCgp6pBCCoZ6Y8faXn95LaDLdnDFmSGDMitqEntW8W7uGEaT7NmSpy73abHB9tigF77Rh6V",
  "key17": "jxJ1t7H19w7RCkKLv4GbWmAbZrWtFFby179y572ffDrnhDE4bopNT7ECkX2T1DY4qk58zjS1UshJToQhdignv8H",
  "key18": "5kqWmVCB8hfF4LaPAYdacTTA54L1DC79KhhYFYkVVXuAjhxK6itNgYniNdxx8PVpJjpTYK23euML972x6JCtqcST",
  "key19": "3kaYiz1131MEYCTaJacuAVjeqwt8pm7Ro9S9HtZeEzmHcXfCXEW4M9UK5SQmPJLQMqv5XUXRPAAuhUCPmFXbHnqK",
  "key20": "2pvasyWZ7AFeX64pQibGfnPT5w4W7EzibouesChtmVHDBm7LNVN3ms5kbkgB7hHG89phWg5DJy5jMTgTqhrb5qhH",
  "key21": "66a8FTRia4r3kSBAnq12drNd1A4dscVZGTWqWKe2or76ux7N7FKZNJTDbkTKgjRUphnHELRhUh6ZaroBPWDuJwFP",
  "key22": "3b93XAMH9MSSYRfzMV6qzXf1sSfCZaMqH969prYcdqN6Mba1CSXKLCm2bnSWzvFg1yHjAXtUNFD4SZtsHvbFYHQ9",
  "key23": "4VgEUDbdmKngqHFf3ruPiLtaiCnh16hGRMwT4xRJARF1wz6vkezZBySC9vud6Xfy4N6BsRYR2mzyWuuAXEEAyKFP",
  "key24": "4STTRVJ85SL76pRGkLv5GtTX4371cSvRMA4EELVYUzJ4pmhXLxzif7GJQRijc33FmKa8M5nszfHYEFgRymhfa9xr",
  "key25": "2rM71WxFLVHtShZtZ6eM22c7JJ9DmoHycQx1X556yGWX1zzmuGvWgt5nW8uyAjxjHv1x4WuzxKjyuKEJPYHWv6rx"
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
