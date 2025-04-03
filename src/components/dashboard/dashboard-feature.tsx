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
    "CLKcWPgMm6JoCgPN5GTBFpTBBNMo21kdkizTV9dY5pEkg8nEkWu2TPjzzacrL1gUX7aKf73rZKmPctWuyAcsELR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4weFmskYJ35XqpsZzX3DtAnZe37LjieLAVZQSBshFQqYsaPCsLr7gQP2Y4VxrXbTef7Au9cWEHRUWG8fdsSN1EPN",
  "key1": "3Kv74BnZbYPRkwHAtiCrZaG4LtMQrAsEUKfZfLe9JhQRSXP3dLCHKs7G8JYeUfGP3cBZQRgvTmshvzh8RM13gfVb",
  "key2": "aAUyvKy9DkHjCQCZVfejUR4p41f3GsCb4JmjCW4bZacbR8LDxNdvdGyKDRUhM3jXpFD7gn1HKb3DRKdoeeghoKy",
  "key3": "5946b1yYSQD4YEzR9JwGGoM6jHV9LA3kjsGiriMFq711StdAko7X5Tnvvhro5fXNSAVrcUdkyqaB1AxB9p4bBdw5",
  "key4": "4gKJvJzoEffmuyyaBGfBoLdsiojnkXAWQeYEaquNfNvBeTVD74sAxJdaRfDcQrduwTPBc78ZjTKetdDfj6oPHkaM",
  "key5": "5WMejAR8ZPqsiKFCh5RwsvmNGiYUpKqbtx2QNQYRaB4jHWwG2Xtea6PSG31ysYPMJbtVDygAbrpLK6eBMxauxXV4",
  "key6": "3A8GXPs7P9ytiZt2LjmNAeKLYa5cahZoqh7x345qxs7eMFjzFG3J1ipcXtT6MHsZJkAoyLK45UeEpzYBocEK1ZsH",
  "key7": "3qLVMQ4mJX2KHsF9En5WTdwBHpskrAt4K3p3qkByVN6RVV1QNZ6Xe3Qgj6KtxUk1n8jfQGxKXTypvVhbkjNQRxzd",
  "key8": "27HdzACinG5vNZKvUenun37guCooShtrE1CDjfjqEfVmfj2cFJY6j4N4hzKGNmQDBs5K7GB2miT1gj4r427FcYfg",
  "key9": "3zf9BecZ2TJVg7rghaZJpBAQPoh4SDoSH48i1XwzHzpMuhKJ2bhbsuL6TS4vMH94C5itAMnTtsbD8vpwUZuNwxMN",
  "key10": "5Hih7toRppRbvCjfMcxXYRdeCqMEbrwiCUcEZpw5cr95S6b1MxsVyw9K3FmiDFszd5BYWEY5PurAC9Fct1CPYJAq",
  "key11": "5Cx8QUcUbPDTefBoccCuizE9XJzebSessMWamteDU55hQdH428hEUj2jnfCiXXrTNafRaUicqNXK4crSsbLA6jRJ",
  "key12": "28v3eSGRwwiZR36mPNr97LBbRBP41XoSJKACZXF1CMqjiZkUnjfAkRtVd51WzEbUnUkt1Epxj1cv2Qfy61SMF3xZ",
  "key13": "3v7Zf4V7k2nfnDWf5b42musR3aMHrueDJeYN1dZ9dPgk2s1EGTziwZd1fotiJXMgpSdvCKtMNHvmwtSLGBHohcGG",
  "key14": "3jYW591KWbVLPxd7tjDrsQot4TQDkAtGcK1LU9fYd8FHNALhtWQNeK6fWsvVYfLrJjJffV3g7sE3sMLhSFcQYyd1",
  "key15": "4TWTU5H4k2NYR7xEqgCf8m8SqufeM2fBZNqD39pXCUKfhChQ5WE979CvXasg1q9V5Ce5aHZRNyAzgTEHZnMTSmFj",
  "key16": "5h47Qns93A8pCGUK9wFrabayy2nEHoSumUWbUrPv4CitCdFDhM8SyYRqic56vsY9FspXvG5oceqRYCtCVVNGpCmv",
  "key17": "ziMnB11h23yQK8Vor5euu8feonCfqZurEpF9wYzy8BTncNcNiffYHUoASZZapJiqwNa6xx4LABNRCaFWEo7PZRx",
  "key18": "3XCTuwZXJG2vhtsTPvw8rLXyGfcKnUZMc3Kp1fWA9nDxMZTdFZ8hjTVnSTMbDEQcBs6KvjKfrPcAphDwxhLQBYgG",
  "key19": "oMU19twQ3N9wkP2AfJiTQkAU5FGkBU2wpxoqUmkGLgFwbLeEVthQ8enq1tK7EejtaMPUKEcn9FQ5Y3zL9WbMZWf",
  "key20": "2dzULSPw4Jv5B8xEgcmKM9YbAUBfLr2t6JXUBvFXy3Ag1y72fVV6rrvb5XeS6BUU4RpEoNiVZbYscxhXmUHwQZwz",
  "key21": "4qrdfhBNyiQNXnxrTcTTsvzuMoL5Gzdi8ncyfvudL5HpapqHSrzenfNWACrCRjVPoLubzNkEWpq3vTD2L7g1tArP",
  "key22": "5e8Ay3VkjVnZFNzHYgBSVookeF7Xew3VWuh2b54Q3AjkwgWLhf7oRv3iE7gZEgtwB8e7LiUT7LTax6zuApqY7mBF",
  "key23": "29SNBS6mQ1Fi2o1gUDEFQshxxCnnRcSRUJuJwp44V198eDsXRxtB1cdYWM96BxzSbzaXG7pbf73hrixuPhT6Zw4A",
  "key24": "3XdGYaZjSWFZx1SHdG9nCb4HBxzrywBBrtUmG1dtjxP6ZbSLkGSwXjUNqdkuZg1g9tgkdAL5SUGZd9mZjUBX9rkh",
  "key25": "36Ax5CnmGsVR3HLizhgL5eE8LSYGK1WxTzEuRudiRRMXGpodLeuz74LHQ1vUfidTbCuwrBT2Pc2S2uaGgTJzuFQz",
  "key26": "ziVbfWkqEE4nGeZQ4SjHibFGPDukkMEbYeSBeaLUQtGo9qprfCVakbsSbmXXpfhPtV3K55DUk1tFHMP7RJ8QHgr",
  "key27": "3JtnwrEXkpoqYqRJ9v6u86hovLMW4sYzpJ4KfaCbFz86FZX927sVrq2H6TRvpEikC53D999imWPyG1LpMfbm8ib5",
  "key28": "5pf7GpCiTKm7zY1u9N7Zm6DKdpgfUC1xZa2gHqrFTQJHKJ6xT4fC2zczYss2UFoMbs3csxN8qmWNCHAgm7AdnYyE",
  "key29": "2vJyYs7rWtmPJNSUDgqP3krvyWCXQagAr4TmXMpw5cXL2UWczinLz8dWFQ1SomVLsYqGkeGXVFHM4peakpWUJenJ",
  "key30": "5M2Lspg7zCLZVis1bNcGxy4M2yE6vXDUeMYcyVGMCa2CQeEZPYkd1sEDLJ8iKrpS8ugeFRkjTfHphUXmqCzMGs4",
  "key31": "2Ki7YKUek5hPadseVz4Zh3nVEQsJC6B2daXZRQmxUBBPzvC4hqNLg2wveULuW22CJzvKoQ51j994sqZyV5F3sxPZ",
  "key32": "2VCihtMiqNY7PaVtjcAmxgd3qDw1qHyg83z5EUE2zM7DyFoMJ5PZWs9PfGfJZRPqd9bTvCiHdeHUPTsBHFf5j22t",
  "key33": "3wU1rFWGCbkvuZuMU3EuAL3Tutiar1DANeReotwEce12rNXY8nX4AwSKHCjeFK3oCBFEanFuwd822SktZnSAYLTB"
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
