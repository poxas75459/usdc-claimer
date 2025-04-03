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
    "53L9BhYLhS9uMjd5wKbeYf7w2Ww3udpGh1ZKRVuF3NpW2pys7mMeiRRcTg2VssTncy4RabArqZBVatUQseN1Thum"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YcqJvPR8ucc5uX65ingrVB73Hk8z1FaUC3rF73TFezv6dy8k4LzXnncBFw3pocXyy1LbVHURQ8RbHyFUQS3yuy2",
  "key1": "32PxQUSA4eiGvBxk8TSU7nHDBey6xZW7spYmmq4CcHyx1CSYBSaxbqDkDv97M9b8WidmJ27eMGHg5vwvQbwy7A8P",
  "key2": "4xpCrYbpjMf8NTDLUPjWbXuF1rU2uRuDoKdrwxLosrCvZoZqKmcqTYbo6fPWRDXHJgvSHp6qxYkXGTCaPAzdhg1d",
  "key3": "zRcHd2iieh3pb4XFC656xLywBzWvnpWjC9hFUBZqCbQ2QLJtnWPhGv2gFd5FjXa5jtkiqfJ4ij8cKzP3ZAkrgn7",
  "key4": "3vtgDUxTZPEmbgaELQ4BSUVTPndQBtdff3EGcAsuZh6N8oSf1BmpVjWe8zKaVvQmZQAh4kLzqpbCXx1e1vYEHuLV",
  "key5": "3FwuPKzawdz5zYNM8xZTpCJryFx21tzRgcuuFejwyK4kHyFmqxDnvznvJLL7dQLWXTDFBuwLqWipETawdpKajVFm",
  "key6": "4zrgSY9hnCLMuEDwwjoHSAxsMETPJJLqKGJegzdi8n8NXMKLQCCMduBF6WSGtZapmSjx2BYZjoCChhiRQkcJTxUc",
  "key7": "5LJNTKA3LrGi2sdp1LqRhB47hU6yo1Wk7Gx6brCUVmPHW9vFaGRpHRXtcLV78eP5VT1f7V4D24TRxB6vRbfXS61F",
  "key8": "3k2rboazXNoQ8sTmU6DSzX7Lw6AJCaU8fcBLtEvkGdkCJnvQAd5qocbcDGw4XkNZ3uE6bCjNBadnye3hqDjALyBP",
  "key9": "5MgsNPrXpoD7G9qXV6ivNzTzpSWwUSufRd86MRryuPPcembJpfMuw9CALnjM6hPGJkjhmHRwk9DTwDq2mCDiLy5M",
  "key10": "3y3p2FFhtH7euLpoFUkE6e4WkdUrQsJGWioT3H4XiSGRgV4PaAhXmd8t8J3U4ceRNGmPeLPfuKV6qZP1vu9Lc9S9",
  "key11": "3cu9bWmJqR8f6L8rDZPJcWL6LorUyhWMKFHbfjijnn7692graqQSvBY65ErT9hMHohEN5oj3xs4C9zmaFRdyfFDJ",
  "key12": "NdwiZKaZVXS3giBvYbMwtYH8NSM8jT6A33n1pTsoizUTGij6Zb4BBJjuEF7z5MHZWTdRTVdnM6XannL7YWyeCAU",
  "key13": "25Nt21X8VuUhdDBkL8rF8m2PuUzdTbqH2CJM7nFrpu9GrYfqehoUEGrZEvNDK8thqfwDrLqzHsSFTUTJ2NJjgcer",
  "key14": "3PCoL6PiNBkRUBJoufeGpDfxaLkHUiee8F9sDcMoEdyULta58Pvtj11zvaojPczXuYY5w67XQJc9oR6CT65xGSfM",
  "key15": "2k4ogDD1xZzncsU5pM8E6my44zyJRMSDScxMEStcCCNQVWrBe9ZdpC4QiTWeFmg7RUKhWsGpWhkrXtQQqsUar4yZ",
  "key16": "3KpcQsj1DPoVzJDkyi26cgbaGe8oVkG3QmTdvaHr7LGcpvzCVJSHbbBBidvM55aS6ooKdaQtcbx5dH4svHCvTY3j",
  "key17": "4Vn94bsqwSUzhXXeoQq4AXNTDrXu2Lg7GUyLBpShKCFtfKQpsb4FGDGcqwLzq46F9RHkg5PT42t9XFALPFqJR9Eb",
  "key18": "7Ci39F3NzGUZLxMbFQnbKjimLNgSuVKD5twbTNuDqC2kfiBXkeWU2UYFq1crt2TBh7ZpCnb2efn1js9iMA1uQsk",
  "key19": "5snaNiqFwvr3EpnHmvK195JSFbaiM7o1yGfKGgbtBEp5Bfsnh17FFzDKZJwDf5H3NQuteVf4EhpQojTyuJLpmDRi",
  "key20": "9gmfihrcYh5YdNqwm4i7P7csFA5EojVFvWg6zMuf9r7bEHavBch7dqXJKUKdd592c4QNhxRWRBridvG3g9bqZBU",
  "key21": "4gB2sHJBPY4sUkH3GoZSSmLuFpXj5i3mws4CvY2yFPVdvGH5AUJmuS5q6Ri68EjvQE95qSKdQNKTbMgSSyd9Hgi9",
  "key22": "5V5RmREHkrGxr3hx43MpsD15121ErkXuHCiARkudhUGKXA9ov8LDj3L6EDVkymx4TydWjnjd95roSZcYn3szF3gk",
  "key23": "mmHCVo5LL8LvhUrZnryUoBrmj8a7ueGgShuygKakPLJWKQGDvhcyaAUQ7VVaX1EnaWHbzKzfTYGSXZF7GBPexFh",
  "key24": "4uNN9F2NtJ4biD7e6a3nvnY73HHxoXynLX1vM6Yvo43Hxwtpx6pKfUfuRvYZBaKrJw95kTJgcJhGq6qqMEmN9h32",
  "key25": "2MSircQimi44TTfg9XVMVqCB5JSGzbUGXTBy4sxnQMhAYE5R9rccEFu7RFaUmjNVkz836uTqTNjyYnQhb4B1ZsUr",
  "key26": "Jkt8et5qEcGAxNZd5zS48GbvkMGeTTCUiLXNcyoRCQnCg1FS8BicQ8qAhVwhKH1wLNCJc9LUDAyJMLfrcL7JPdS",
  "key27": "2TewccfRWJLVqGGM1VTfUBSMKQBNPRNvjTBqrAS5g8AKmhoyXav3TiNTwSai2CAc5qevJLhTKqqHFzSwFQ3vuUmi",
  "key28": "4FGCZqpje3bnFskqSzajyMMPcNkt7bSfwTnfH1m69NyVFWy1FFHaMPpM5fs7wU5TeEZDsrzv1vLfc6CDydVXhEL2",
  "key29": "2eb9NAJa89hruvWaBnQZq31YLCoxXJmb9wX7cniYB551P2chjkhYuJxa1A38ArbHw4T8M69nW4YWAhn9u6iRCWbf",
  "key30": "34iDrHsqgLka2Qcx7HZ5Aeymeq2GTcTNUxGVMis6fLmLkCb7USjA4rJPYJAzUCHH6ek56VZXb9aP8F3Qo65Ua38d",
  "key31": "47snSz8D4BWE3aU7mUqPTadNrVeckaG2nouT3vBmwEmkkwx55k7BD1bTwZQn6njig32wtrMXc85Sk4MCDv2UGQdG",
  "key32": "5iGw33K8K3pvEaddycPVtVRiiMX8k7S2VJ5teJ5gAu22JUnWfgarG3CqPHuKd8UMpomYGpBptPXBooEUnU1pH2ih",
  "key33": "qwkc9jzEPhqvF5YQF11fbeCnY46MLc9TZUseCJhXoeJiq3fVePsk1U9UgrC7QKE3epJqUJpxFWDNWiLbFRhsA8n",
  "key34": "56o16i1FLTUh93mVSRdW45DQfevcBmF6YRAgSm6RcGvzAgFjKEuQeaLzXtxKCgatWKGj8btEGAPg1FsrYJNDbNS",
  "key35": "5ydNvoUb1j5zZ3m8EfCHYrUajBc7poN5kK2JTqwLgTexyd1jjGAroQwk6suystWzwmhGpmpD4XiqXYRwNK9opTxU",
  "key36": "5BpjsBhNXtMZ1U6kFB12bhGhdLHnRKRZ53GMSAfRERQGexdGcRw77txEnkwSyfvz6rXLduxnm2gWdjGgSvpEyV95",
  "key37": "5XdTKq9qJSkyBZfx5AKQA47fcqUAHaVRFmvweKh5WiiCeQJY5cxrqZU2EcR7LgkHvAt6kbWnnxbtZ1RJxKxQ7WYS",
  "key38": "yQD11f2Sx4q11NQSiisKnkBEUdJLESBfUvnwJ7VuAn9it9jeQphA1tRN7Kx1SBgvW8UWddWb416xorkyuDpwbfK",
  "key39": "rEa75vBQgHXknRRN2ANpFrKZYvxKxJeP2RBXRDMBNhY67BRSS2rud8H34ykSUjsJbzCrsSWCecg6HseJzf9UCzX",
  "key40": "8AMhX1u2L7spECmuS6Sgjb3LBh5xY6c2FWzxjZCLgGrTXBhDpBinHr1HLr4LrdfaDLn3ktPQyfVxUjK4Uezo1H6",
  "key41": "4nSRArUcFFF8Pg6uwEV4nxMhB7gsDgVUqtVkc13skU1MkKP1UF48zngWVVcqdnPKbNtesYbVyoToC4Q5wCGqYYnQ",
  "key42": "3XA6FxNYNJ7MZhTzxX1qr1BT7iJ3YGP9MnPE9Z8gxXeHMMNgMsyGcNHFoPEFygayZFyjwJMiigDCsgwevp2NFWfZ"
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
