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
    "5GxBi5w16p369mCw5uHQuR7XFFJ9G1c4gb3eGWmE59jDW9N5cB2NWwmb4FeTo3WyBTz7uRgACEccgAnmB1yRxuPp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RmwuXNM1ogS4NMAfGTED6DqWT6c2P6ngNubeCkrJ5BKDpPmFPSkDUBM9CqoDZTv2pDWVCA4gaQMJcwJgoQBPbVj",
  "key1": "2RXCyw3S2wtXfBFU9VieDZGvzzC8RxqudEng9k3b26HcLzNaBRprPkjd1mjhVHFuQcqBtw1pYTKXsGVKQedNkpZP",
  "key2": "5EDXPqLdrRLSnKynoosqnDye9UbdnsWEV6M85MyRsGqNeyTWFw831wadTmnbfX89WpXTenrhFkzur5VXpXHQyESY",
  "key3": "2cwWBzDJXDGxVar4BsJs1GFH8KCRfewrjnZEuYS5Zv1HztfhYxqwX4fhTLX5Zm9RxAG5txLT9sBRj8YQhs9667eb",
  "key4": "48qh28KYETUDtEGLuPG7Lf2f5RA3q36aQz2imSEdh6TLx4wypCAs4Lax5sCMM5H8QAh5VJyFCQshCp66RjVtcHXj",
  "key5": "5YRGWhvHDbRN8vmdmXzsUMcLfEWjAGCbycQHGzWPSCQKFqZFnhEkVvgBhHvAyDu3LDyDPj3SWvMbvnzMr1WVCUcM",
  "key6": "2NohaecgBP8LXfm6B6i5SQ2ccLubYPCQ1LW4jrSGPNtY2zJfr7zXx2LDn4wtJPrJ91BkC4YfbSvGrLpDfT9MhGBX",
  "key7": "5wY8DrgDZjyfHyzmxcYF36Vyu4fcDBCrxNfQeH8QqYWNzp6toH5KyMimyyE5Z9Un1stiXYCCUYAYUs87vHFdZhX8",
  "key8": "41RHbYyvsTfidUZv3RgR64DV4R8QjpadUuKeXqjZYDk2UYBtBheiZym5MV7Tf6mFjwzu2EKGwHhSQ9i6mYbf2dwu",
  "key9": "5vt1qW5g344BQmcAK8EsopRv83YQgWSVkKYsDUeKxdMHoaQQ8enqUHtXvAnUdbJFEqGWaeajXGfLVu2zwqkieYj1",
  "key10": "oasmhb4oYH6o3avmpLsyoYtwaqTntyRSrBnwDjeCjntLpny698jQejMXLW3ES7HM8m3Q5moCvySvxBuhWFvUZjL",
  "key11": "4ez3JqetQxmAkFj75y6PzdXUgLrTcW8aoWdT3CQX8DiHVuED8JDsaciCXgPjYPp9DACsP9VHaUNBdsGNNw3j7sd",
  "key12": "3PfUUTJufWSQBDiQ6t8e6hFhPXqRgrS5F58pngacNJdBLLinXJU3jnSBgPMD4JzK8rjKmuoirkk3gZLWGptGrg99",
  "key13": "4gg7CH72uMhinE9Wxc1vwtSb8janUcGWsqoB3SizHLk4GhX9Wvka37fJJPFg5W19pkVPpfL2SnPtB7hmdxMSEc9G",
  "key14": "t4AGzbU6Qa7fD9i5j3fKcwsnyjhAung8Bjj9ZQZWswEdSee15RBLRQtDqfeEEaHDMSuLukH2PZVcTA6sDCKn8sn",
  "key15": "GXvwdW5tpuhkA1c8KzqxaRE9ptDLNNYmTnndrbNfYEkBNDTKGTZuaa2KaaSSHA9Kt4FACjDQRaFTrVFFxVD3URB",
  "key16": "583MifSKtcryP4q8vfXTqUth9QrAw7f2V6knBeRhRCSEFr9LM8skpCpnUkotnCEZJ2Lr71bUXexNmztCewdTQMEX",
  "key17": "4Xbksr8QF1H4W2ds5Wjy8SsKdjz3HcN6u6STkmAKmtQEyjM7QFHWRdvN3Vz8yzc4Z1Ffs3i4PaLvRAXHGnxzw8Cp",
  "key18": "2ULaHgatv2vFpJydwZmCDhsgtFfjBHURcTK848tkQvYyjMBDJz2rYpfed9uahZYUiAYpHbgBc7ue3jPUVpSNv7Fi",
  "key19": "348i2MKiVv8Q5bWzzqmSYRETMiK675sthz5WcrAXwVD6Erxt2qKig2K4z7FVUYAjvt6TNHXebTMAsMi2nunntjyB",
  "key20": "29vcpUrfZ2hHRg3SYj1aUzgAgsxoJ1bY5mGLTNY8TqyBCR3Zc5MLGFbeq7XkD3dZHTN2vFfECgFkaGQozUeQ65SF",
  "key21": "2Jb5ds12MesmAA6xSoy6QrxMMouuB5refTzjEai9TZ1FFz7LQEsWwSdMAXZHRXgvejCLzmSibKswrepmBYo1cjZp",
  "key22": "QGgkpKZx8LpZjwZdG3bJe2bcXM5mUcU1zKQyBV3n2Kj5g4aW1hXMB1WvGRmMDNDSRtBas8omTXW8MaCfyX5BkHJ",
  "key23": "3s4HMTjt5RMsJQBA6w5m8y9nnvXBsVuSQuygpHQfA8G97xueJrRfWwFMEwR8iKrQGhkqG8vdAyvZ4WWv7agdLpwQ",
  "key24": "2G7Tx4LhpJi62y6omVBzUv9DM5uWTBs7cKSvpTzENxMqtM1EmyKNwZjc9yd1Yc94Jqi8pjmEQDcnQ2KvXVyj5h8g",
  "key25": "49jJyqWJ4XapsjuQQoT92UCux4QfG3k1VR8hdEHa3q8jVQvwbZ8jdyqKBqpMADuLt4xyrkF8SUENzKuvHEnCYoZu",
  "key26": "53MpChyXgLa9N8d2wJv8MFFazvcciweMrt1KkqB46P7c4ouyznYsnnLucVZWK6S5jeaAn17X42VJqGteqSXxAJx",
  "key27": "2dvEp16jBoEtaM55tLbFehVGyoantequGNgvDgVmF51rTNQgiebYwpUaLp7CUvCjSKpQpRmfi6yW5MKrjjUUKMrX",
  "key28": "3gk4VLs2YeE8ZHRGGZ2kx8un7CHr5KGPpymBYHHkkxB4fVvVNUvbQke1eyihikyLSRx9tHyVWp7tyhuE7iDcdT3L",
  "key29": "CToVMRZJrnHD6CWjs4oK3c8DFTV3DBaaSEhhseUyS7PVRMbMBfMJzCUXgzUsdzTzqpb7Wz5pReYoSny7mohdB6m",
  "key30": "2jebFddnTZ6dNMTNVcPFQPiCT8jm1D6vnbhwT3C4rekh2NxvtgXGujtdcJGhvmrNb5PLrRhHS2di9tiaRTBDbV81",
  "key31": "5FNanVARQS5rxmDmZQDwbrubpSgviChWFfz7twgg323ckCRAorXkJqvGzvyRuEH7NtAL4K8i76pkm3LrATBBjXB9",
  "key32": "653TNpvVjHN7kSmZLbg5tKcZEAkumJFsVdZey1x9Ru6nSDFQSMWt9t6ziALn6rydv1AqAnzdBHFdDPXZnRtL4sqj",
  "key33": "2sscpg83PdSRQmMCQPa2aF8dyLZ6xXrTArJTavZsXkcPsXEkPKGSiykMpvrEkmPJoBKtsFGQ3G2PC2jwhFavPQe6",
  "key34": "4s2jy84N3ZLDERAEDBzXmJPiXGumyovCMNLQdxCTZBg2gfxG3WWCb6fehB16z75o6ANb6sYHgnHZyGufuj3fz8Td",
  "key35": "2D6MUoDH2gBiKQxUZUGh2wTQd83WWR8TSHtxmkQxNkL3YAcqbsYvavCWSMWB6o3Sr9AjhDVcjUgfNmPtwQquxpQB",
  "key36": "9YoL3Z1hKBpxGifXBZW3mdmd6i5s5SKZ1nJRPiSpdg84mQNMUc3dguUheCdVaKNtj8kPmVZKWX2YELi3eJtDjv9",
  "key37": "5UrxwcnUj5mBjVag9MwRcMdFwowzeJcR1ZYdWMXrp7XA1uG6qzzLSJwu1HNmBpediSZYD5Q9R6nNtkJ5w95Ev3rm",
  "key38": "5JaZEXvKKcSSyawCvUWYZW8SpaB9j8TxwL4qAX12seB7KG1g2oQ3RVvVTEo8MRCdmKqL9csReHqY4YxBVCkuSWkU",
  "key39": "2K5nmXc2RYvezy175N8xa3xu3UcokpaD4Kc9waY9MZGcR5VdE2xispGTGdCZrfxj1zWpHxr3GsgeXP96uk2WjzTo",
  "key40": "4iFN76eLjWGwHJ6zVbbZSTJb8MDL7JHE1r184dSuYL26Zj9mYs6pUEyyeUxWxjXjhurM4bcjpn2Tb9SaDkdKZYu2",
  "key41": "3xnXiVcyJWcN9RzXgWBJLjgwo97ebtEM9RfqS8HDDfTUhj8DjUhGuSubEM53M44waEmGLFeVtpYSPnhpHQ6GX8EU",
  "key42": "3ZjBas3w1eDidBQ3iTAgLZeADvAVCaL9rJZf4BryVTMXFSd9ne5L3ZuwwtYw7p1EJtroXDG9NE9qBW29Zhaie652",
  "key43": "yMgYwLz7DkzdowKJtYTL4xDmdv4MdU4atCe3UDfRhuqs8TQSuGdY3mSq873nV7fY5qA5aCBM6g95dubmH6DzteT",
  "key44": "24Ku6gNsC8Kyh2knJx1da7VoyVEwM5VYKkdCryK3efgZD4BQnFgoPkFiXQnEJn3sNvo8VLjdXMYVvSgrXvdDe433",
  "key45": "4GvGZXRbRUvDU8edRbgZsMYx63Zh6u8NieXj6BAPUdx4ShWivbSXjrBK5XUDnEaUzx33DXaxngX25VmqpgLbWxtK",
  "key46": "2w1N1X1P245WdhuBbMNR4XTCsn2FoFcSUfmiKst9sqLvwYPmTkUKk1w6ZtfTkZdti8rLvy9zf2ofTMEqZ5VMfNww"
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
