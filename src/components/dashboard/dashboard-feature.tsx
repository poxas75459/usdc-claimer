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
    "4cPLgNw4C6p2cz1DitQxHg7RFXuQ3dSWpoJNZBEfq9gACq4wfsbJXgDLP4PfHraU7zywe9XVKviiRYL7U7biaaBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pKiZduP9nsBPhX91hPFxaC5yYp78z2K6MJtB4jh9wm7v2eSJ2cSjSfqEjJADQsGrhZBADE6bt8PbMtFbcH7PWA7",
  "key1": "57tmPxGUrrjDpVmUBmRJLe8L2pjLDNVf8RYfoWbEhoFMo4wVkFCeui9exnhV7RxV1fgQWsKT4xEUX5jWtp7CsjST",
  "key2": "34jXoFPkJS9Wo38GnrfC4rz9cGyrC5XA5PHAm4KnMEFrc8tLFqux7nHzAgAHq331r9UuQWUogH5CPk41Vvqx2xhZ",
  "key3": "ToABA1MqQe2Wsmd4X4iYfKe4BxLHQzZBo8733PeWVCcmxLTevHtbdXoqLriNXeFbHhHSGCrpCaSBjVJLaLqHYbS",
  "key4": "FadtK1997332ziJjw6PnAmRfiZtDL9XEiBJtHza8cDkoMRCNmEsbRrRaxuDi237pTcvBXDNjQentq3VMF96g5Tk",
  "key5": "3RPrqtEgFZQSPb2gzYDSjrQoLskUPmouP1vgQRTbyBD3X1cyBwpuyB4MUWL9NS6K1xi7UQTNxZpZBYjW9MwknQzA",
  "key6": "5F9NGByH7vPXjzNnvT1SkGBZPaHWcif9CckQPz2VtiEKEP3oaQ2mh1wKdv2mnoBqiJDgjnMHc3ZKFANMnmxdwRUQ",
  "key7": "5rz9c6N9J9woBDLrEUuhZtVuLUnJmrg69K7AZPqRz9UYDZ9bcZzD9a8bHNxqQDGqkepBP5yhU98JWfPf5BDPr5p6",
  "key8": "3oXLNGZcPktC1PGQzi5ZmRk9AhbkS91Td2PJB7b4fLizsgiAjxF8GxTYBrNpfTLqygsJMuugTFYYnnUpArXs7VEB",
  "key9": "LGFnASVW8XTtQPYPt3BRFoNCAUs2fBQZfmaKWFEErsi6BRPZxdnxgdQCcLPhche7MXT95Gb2eCQg9kHFTWHwPeV",
  "key10": "37vHCy5Mki7W3sK2gu4cFVrVkPKBtkrgUpK3WXjGqUZzcPL3LsVc1dZrVdsT8EqrUBYp49yL19sHrhdiyFNhZoo3",
  "key11": "3YihNqhLNZ2c4cNwBVaUrqw91RKou7wAvQNeM9YT88gVApbxzfTAgY4iucPSqBzpkCT2v9tWJyLSdP1qtRrb1NGn",
  "key12": "3mVdQQRZnFmx7hxM5aEEADWn298vveE3CNGuAWBYcbj1tbXNc4xdmj1yVRG2ckHEpDR4tVCH5VsWWKPqFHaiSoub",
  "key13": "44Z8gHTbkgfQhP1rXD1Rhstk2sXiBqcbyP6CJegNy2nqv3jVxfbMTcHiVDdoYxyAXvHrVQzE2R11xW5oKofZAVXv",
  "key14": "3Vy8a7PFLDUiszzHMV4JoUtDCzP4xtYy4Sh2nKr8XHw6ZYsQBa1WnimcvcEz45euUKSCpAoChDbH2nvsGJ47WEkj",
  "key15": "4Fy3SjCfxtbJxp8SrpSaKBBufnQzy41zzuiw9wQnJuDZk6tUmoS21ifaSpng3UwYRjV8j6AqmDCHvLX2N28oLWRK",
  "key16": "5DeUecAWFEJtFMTPKQ7LeFNSNpi1QdEJSqsRJxE27gNAbcrXmCfsXi7gPz5TScnWKoN1dqByj2j1rYcL5G2GzGnn",
  "key17": "28ZzLuuR9L68hAVYhSCbTEvvvidL4DdmST77z879u2WF83ZTvYxnJavY8rKs5HaHohFHP8uW71nMxwrUGAJW2mn4",
  "key18": "2Zy1EqHjJfdVWVcWeWe7rGfhLnz5o6zaiXZbvoncD4zmNchZKtgnzL6t7BFwcxBSDLkkvm38q5Bju5gp1jGvBtiu",
  "key19": "2vb5w7wVeptm7zCiC7Bn8PnFaSnA6LfDUozRvWicHGvw88RMXV3iKUVzqBkWo52CiDSzreGCEyYsBFV2GAV9v9Va",
  "key20": "2mk4ZjuuHKrDsjRcVcRLXm5mY2TRwv2Ge3Vnb1YZVywsxeUcF2o4tc6h8qoocbE9ozmTvG7BgDNSwUcXZAEy9Cvk",
  "key21": "65HUrFYvUjjY87YKt4aCMpS5nBuDHjR5QRpty8y6y5P67KRpJB18Qaj7sWjUDeevbjRg3GwnpEk97L9sVPUDChDJ",
  "key22": "UyZAGod5qGJpSdZ2CVErQsQMU8rWXZhGWKx3XRnWrEqsvNnwogHG16BrfcuLJQm2eqoVjcNJYpbQNpBR6KK2i5E",
  "key23": "3b3SDAiStLEoUt6RMbMANZC7QnkJPYEkJKMAvAELf4fQqGG75hr5tXm659836Gup9J1aHbuKM4e5tHcaQxwfijaf",
  "key24": "3JDQCjBWtUoHVD3ZpfW612sxH5eeQ7VK9jbfM4D1cTFZyMEH9tcwcsHS5g9FCo5cLv1hUpZMKSqU5JThm9AZi1bV",
  "key25": "2rjbjMcxpwyHWj4SQWHcj7JPvh6u8xGqBAfrx4xQxTuUX2kdtwRk6uX8adqdLpKKS51E4dfoQpgfupDKRLxoqFbY",
  "key26": "66EKtYCnPQ9fF2wk8eo8mMT7KfMi1BsjtvjazeE1ZNxwAw4yC8dGyLZ4WiqsLmdsT647YEJsKBCRmsRHUL8aEHYD",
  "key27": "48g7HMCYbeCchAy3ySGk5HVcTafJgkJ8t2fdL9YDp5mfVAcUWZsYLJ9ie25ooCAqWuVhz64A3zuYtVsbriDDuj5d",
  "key28": "3nqoJYmKSvFtYdDzTmuBCvkL6XMdGvSSzKfd1YpsbjTZFKVPyFFtsfLbuopAtm8v9e3XLc9VxQ2AypwjH4maBeju",
  "key29": "3B2SHMH9m4Txy63vxuwrGV28iyH9u5n8QqZ3xnGEGzesQL3eBUwR1XBPegDwsMHLKX25vimCuUpjmFeYVMWaszjw",
  "key30": "3qCDs8nHTbNEzM4HB8YyyFppjJMsckmTMtnXQPiJaYhQ3D8yc7smYfRGPC6uCmqYgaZF9vK1gMLANZ6YggBzoLxg",
  "key31": "3bdMF5f1CWJYdFgge7iii7QxhmEq2h3HTkmigDpDVanhskTRqEvavFeZxZ64cHhPAV4bCvpyAdors6L63hgfMUb8",
  "key32": "4LsL4MAyScoRV5gbDZrkE1DL3MgN1hhNKtxUaP2tGgHx4NPsRRJM8fcBfkBPLZ4xrzBFTNGTtas6Z67Q8jfgyaS2",
  "key33": "2J4yy3kVomGtzvmh3HhkKpeCpjSZTAiUf8dfaGKJZF5EHVFqNgbQhe3ewWTYgke5rXmk1JbQWu5gPanwxizYXMpL"
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
