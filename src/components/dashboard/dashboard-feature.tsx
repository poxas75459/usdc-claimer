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
    "3SyqdRN9LQ3G3r9QTAFAoMBidCR8KoTxmSaLKhuFeY6PD65FzYTPLbbbTCvEHxZ6y9M1ycqVj51gUzwvZkXigjQq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZEgz3vYJVBxBB8du3BpTg62DB5zfJ8XWabgG6P3evAR2pbyJzvXDbGuXj9XBrugMfZaKdMxpa7c53zKJpJ1Mg2o",
  "key1": "J1JaN5dDCqkiWypHXmodHyaA6wLbCKJzRnWt8dse5soTK1MRAerB4UgxshtUUwGZX2DXQek77ygG12uWT8j1WbP",
  "key2": "oMqwkDBGaF9d1fe5ijMg2YXUZc6AjHMehZtzqVfBiCyfCaMi3vK7Mw7jLBt1QF7DUZTqpLi8KqnrE6C3RwpZrX4",
  "key3": "KCMfrGYJD2MSFJg8JCvfU5PAcDrhPz3cDygMHvog85p7FaHjj9K3TmBiMyqBzRiumcjyLAjdK24AaC7WfWeH8rc",
  "key4": "42uPvku6Ro6EDndAEgnJmh4sbhBZucr4sBLwxEZYfW15BS8cfpCGTarQUcQr53dYsA14BE3AkuysRisEe3sJmBic",
  "key5": "pNn9ihie5V2UZtYo8oWg7sHYW8biY8YHJurkVH5kTZAMkNs7nQyk5sHfPWNKSXnmKSFgwQnWmq6QLmXMmnUM6y6",
  "key6": "2RFktByNbrFaz3qUtCSVhFcCq6EhbiXXhm9DcsWHRztAVQ7nqGHmDBWj4uQTs5RjMhYQU9cURavQq4WKzw5Eg9GG",
  "key7": "59ndKkw2dpwNApKwDj8nvdrzd68EbKZ6rv4R8nTg1Cq3HUCtCpDLxFUGmTnMYPxcFK4GNZx5BqctHmFzAv2HjdC1",
  "key8": "YV4zsPTFeuCd8CoqUmZhNTtQERrNf7E6iTvYbGiiasQqBvGovBG5RgFXRcWS5pvPgza6ZYD9WZ8RWFMdtsswsGk",
  "key9": "4bwKScSyqXa6weDveFJJSmbawMWRRD4Rvno8iYTnuJYNdDmd1bvdmZwz9LNi5ZrgLUHjwN4LVfY6zYePZNphLnUJ",
  "key10": "3u9soDL7oxssiqXDsveFreyt27j4FotgnfPH1q92s71qwwa3icyPTHtkmARUh21hDCVmByc9jFryKChXAZmardKz",
  "key11": "4jFTxBCFggiURNW25a3kYd5dwBY19rkZmoA2GrKARhdLJQGeDWxR1GCcCfCUFK5Qdn7hqgy8MU83GMzEjbe49wCE",
  "key12": "4HA35Q2EQRoRGTUPw1LnAQMpiQ5F4v2eBEhB63gcXsWELFHHBs8Yhvwcp4GUkf6h5o1F5HriL89iJEF7xYFM6oSX",
  "key13": "3TsvSYDQuHK1uxFQJNhckQiVzAMACoVAumoLWsHh1iTHot6J2k7XTBWzNojjUe84iVJ6Uyd4r5BxU5Qhg8DLfkCN",
  "key14": "4j8gBxGwSMS3ZWuLSJJ7NkT6YBaCoyL6CC7UFPyxEP2c1Z3EAm47C6QBD3CyYiFHxK599jXC8NPPXa9b3DULsfnR",
  "key15": "4pGmydenUYVDYCeQFQvbMEWdnxde4rQLEiLbyeufDFHwMFnkhoUYrgtGjPHc6CZkxXJUri6macifKV9tceZ3b2pc",
  "key16": "5TvnvQRXrqx5fKiyupLBwGUwY1c7f6fDrVE2Yy73rXuN3RjMWKVBpQC1TAMRRPbnQ1DrvZ29vb6aFuqS72teK1qo",
  "key17": "5MqxwH2bqVXzEc3MRvRPq1wJoRBS6vZKNd1Ybv5s3RWxRe655WrXVHwC5Y9bc8kDuf3WWyULVYGNooXvVLcMbU7j",
  "key18": "397z761MHEHnXWSpAS2HxHVEKiCgPnVFBbjL3cDstFgUfYzCFkRfp2cgXbvsa9479jQTzHVocpyDd2PWQ4NM4cJn",
  "key19": "4JVjPs9A4GTARs8yWgSj9hCcqFjwcaM4iNQGCnFmoA4Hz5mLoh86t55wa5XNvUNkau5sVqHXcUQdteFemmxUGet2",
  "key20": "5AAfzF9KETrobfWwWPWTx2s2cEuzoZ7qqPfE1LQbqUBUZ1hECYPCuiYsZHe6QsfCGz2rjhmzC7ky98W4FbMejkZP",
  "key21": "31vyU1r3h3QW7aMe8WxKdBHSzRbEvtCpbyUYcMZVVqSV3eLPkHLBw6yPPRaimKSbhYRFnNXc6VGmnDWXaDd14VtT",
  "key22": "5Jtc5pgQ1H5tpTQu6q9CNGUvgDW51zhitjojVwgfAvp38qG1LTpWBcGtrgCX17PA55SHh3Xjs1H4KnkHoXPSdsRK",
  "key23": "3KR2rCSgTwFGhZZ8ctZZxibc2F4PuBxKrajaBq8es3XTe4sur5UgzZZnivg9QCQqo7ijR55eqx2zKuSNSKKHkwfj",
  "key24": "3Y44DfC4BAtGpE9z732Nr3vStXosdSA2orkacFnsrfEP5SDWd35gMQgTzGe9T4fZNp6SjYUCbxAzRtn8ZJ4oUvCU",
  "key25": "3Hsepz1G91D3JYLpnMRBG98ohe9sTWXG62Rfdvc97buXeMt5xYWU8fnWh7fX7LDs3CYnm3pZkQz7LyrQpQNDzMYx",
  "key26": "367zvqjicMjKqKufbKeqjxDPUdurJi5rcjgDB17RY2Mm7QcPR8fwNqcbU4FaCAX2icSe616RHUMiTTT55iFVroyH",
  "key27": "By1C4s22BV5CvtCyxT2T9FzR3PqcKFa5aZ7NMvjwesrZPtk1BSgRjnGMbRaH4ozbCEQQUkpvAzEznJeBQkuCAAy",
  "key28": "2DPCVRqVpLcZ8VuJj5c1ycVGcPZ1b7YfB8iUHkZHV8z9LrFuxwziQnQGGxtmq1DAuoFS5DMj68GuQZYDJYEVmJwe",
  "key29": "wbowENDArqBS61xKBohBTU72ijLsozpGkq8Rhtw1tEaTVfFLxdKiMZGM7fDNV2aqnapmeNfvuQ9AuB3X82ZsDiT",
  "key30": "M1SUZBZYaLPCjR8Tz9Bubpf1ooVHgjE3igENxjbXQ5XLgCH6nWFSWvF1MhkpdytpwDPcaX918TD4j8xpKKN7K4C",
  "key31": "5rifcNgN1ea18SNQ5C1eErEdeeex2QPEMov4vKDkXbPakP6Wh1KhzbuwQtQQ6HynthC4fmdJGrqDjWaUrFPdbygN",
  "key32": "3rGTNjHhSNJQARwsV27eznBRkb558ERisz5bWUT1J5ovmobivsAv3SzGCgqN36vyjnWgeLszGKHUX5LDidiaZJ3C",
  "key33": "4DwEFJmbS4Fvr8mMwFNSPWWb5fZ3z9E5WtrrD1DvgcSwch72P7AgKshaT3V9Tnxt2EiTehyevFEQ5RZjWYgR787x",
  "key34": "3iKhC5CbrdV5bhGvckyjA5Cmkf8KLnmfpMMi5p5jDwRWP78SAvpozPpYuPgiHvtcmTnXr7y2NQKzebcar9dFPGvc",
  "key35": "4PS7qWfAySK38pwy2MgQPXanxfXusn4qLcvdtd2XZkn4nJ4kH9kj6D53L8qc1z458gsmWAWjmR6HCvFLgo3csN8Z",
  "key36": "wdXQkbFEHaHd5ycyNncZeWnoRPWre2WCRpNVG6KcbSyzHetpknAKzpCGP5JGvQ1jh177J9AX9VKGZoXaLGQ8Sh1",
  "key37": "VLwZAjg7GDUFTDanaiPcRBYRwnK8y9Mt3fduZ1VFC7Yp9L9CyveVDwQ9mqjQjf61nGkPzjP9du8QoDihTwV2312",
  "key38": "59TWMSXwm9p5xuczvVRGykoXzVxF2XcE8NDuk9cvHrPUYAPKhhhE1p1jG7uWQmS3xLoYViTxFoMjrwkAH1HCS3P6",
  "key39": "3p3cAMkHL2jVXArzwPGo3PU44mYFgbLh7KLh73epwRrgHBmURqJmMrTC4ZuUENtZmdx45oUSP9gkwBQJNMGmYNrV",
  "key40": "56DpuFjH9E94MRwK5uPeMTwGYM9qzur2Yc7XoQ7X5LNcS32C9t28Baxfxgs4CurrgLmdE3zku3HNt5LWP3febKqv",
  "key41": "4PW7KEhCEjZcR8wLJ9o4d4QBavK6iiuhnFLCejrswQZAUpMtY4Xtt6PKbLFjzWwV57q2HhFb1PNxVMVMiYPNi7sP",
  "key42": "6223qEuGpUrhzPqCe17eW9n8ym2aBZBtuRQYz9EtDHH9tTswGW2kLWSo5KvmWVUW5DPBGu931sqxrUgw6Cd4nBQP",
  "key43": "TJT67nDUVj4bGQ29QTh6hNcf7VsASx8cu19QgcxJNe9JJ76UKpHfbwUsuqeWDkucGMuKWtTH7n5UKTaCqo6s9uS",
  "key44": "G3yDfCfsBLiNnaNwe1bgyJgAANA5agC7MhW8mziVUdTZ5jxF4cH8zv1JVfqQCcsLWRFuRAi3r3kfjMH8qCoPu34",
  "key45": "J2HRoxgiQaxQtUC5eYZmiFsr3yvvWQrrAcHXsYTFp4wehUGnrhfqXwk4pp41HD5C2Eu9aTyQkrbMhwHL1itB5w9",
  "key46": "5LeCKqrAEFZF3ddaSA8afPBfRSMNVKrZpARmBojaeAM38R2tycDhU3KZytRoAWsaim5XPnBTk9MpWk11EpYE8jad",
  "key47": "4Efh56qWuwPy9J3kcLx8XvXQusJvbUUHD8rVM94TE1LkoSVScTbbch5grz3km2164ZjD7Dea3LbXRvPzgUmSSP9b",
  "key48": "Ss9HFRqZYsyq1Gq3uAMeMoc578tii4SSDiowxKy5mnTcaY4fgNycT4qHmuJikadV3N4FwtrWMpMwEUP5sXq4fn2",
  "key49": "3EV4rYgmMg6NgwLCz5rZcrFhTui9RYVf6GZfEedtfEkZhh6TwfdJo8qZd8AtDG9QRnWFe2f1Ac8pDirVCaLnwYaf"
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
