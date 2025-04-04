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
    "64npydpm7Yz7WVRMAXjXBubWXxiVoe333Qh4h8newzjZmf6UDJ3qhCXWmYDEjXtaiHfHy8KG8VhRV5hQjBhJ9Gon"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dWmXAzxfsKmcH5ZfkH5Lk9AnvYJZ7yhLz8CygGU4V3HsUgQeApUfocq2YZEFV6MkjSR8xeBaYvAHopznVdqnyRa",
  "key1": "4NucX1BRMWzTNvsPBEtVUx7taEL7PedvWWYuB2cRqh7LAprHym65SRt5hyVewtdvGjYorva49JRFrCmnz3xEi5L1",
  "key2": "fso6SSGxDVHjUtiwaS4BMUDwdPhakPyK4MPDQkbe5t2D5kfJsFLGybuUJoBMQUHbyKueLvcjPLQHktDozQgnEmX",
  "key3": "sMEujjKE3fK4CMMApWauvXKGd5mLkYaN6eQKX9U31RfXKMGjst6Gf5E82oTquovTLuCQZcM38iyPFuRxEKW3eqP",
  "key4": "5HH4hcm2TFSAh1Z9Q3QybL6bEYJqcM4dNnnW7vC1cUXZw8jCr2rsxGkT9CGz779qRarjknMLFAazm2w9uFX1TLkL",
  "key5": "Xy5f9Q2uECtHkRMrwkQVuuAyXMTeejcWcsLnQ28WJcajxChJ8Z6b2HoJaoKuG4SCJPZ8hDdNjqnbMeQyD1SRMKx",
  "key6": "4isnrMDtu99UUxvxXky8uLRjcQhweqVC5arQQogsfgsQRfpnuhn56QtYKVpZFKauTziCfSrCkQUAZdGN7bNeQ9n3",
  "key7": "iL3gbDFBCjwwd7BEQfApoZaK4XdhM5EarvuT3jjnHXhbTAwhYkekjXEYTwhpr8xLS4A8CMiS49ZGMPNtgPfD9qB",
  "key8": "4wwQ4ctCnCXtgcz4FtctaGUsAtk6EC3483oHCVFQ1xCxSDtXt67LuPcZe7Uiwpyg9Wts4YXUfTUwUB16DTqr3FEo",
  "key9": "5WiqkfcqngMffeSALYoEBjwpnCTApmKuFCsqFA1oKt3ZoJuEqyvjNJYSMXhTVfJhUHNtuxw1Q247hWjN2nEzqPk",
  "key10": "2jSUs8b613Yy5nsntxs3s1obZ8SX4CeeHQCXxt91qRqJBH9TXDUjuQPeVgMATb9PkuJPnsFwFadvZ9kENThCLGop",
  "key11": "4kxug7zBo16qbTMiLHKETLrBE1PxBLFs2Rae1oodNw2nZAPoAyZyJyvGE6vu8f75nEJ5q9Dr5pfEY9d9QhMfvGZ1",
  "key12": "ANGdajmxjAe8svdRVqdjJYj8SKKRfZKckML8eXXd88P1zPG1p8Fmei4yDeqEq7vYunNKA6CjPBiLygN77hd2LN3",
  "key13": "D84ajEfGEm266BHzLV8u4hYsXkMLgSdU8ZNBiy8rd2WgNZ181FiV2dLDUnYxqfij9GPq2N9PBJhFrfp5fu3EaXL",
  "key14": "BSjtLSAGpuWWho8HGsufyZDGVXLo1E1Yfmjf4dZKGgmfFmW5PSoou5XZpxARuFNrGQvcdfUkzvawHEiRqoaYsh7",
  "key15": "36cjbRNqKMQqRBFZUscHdD6soB8FmVS4bUpx82oZTipPBXtTpEy4voSTc55KzUpUH7SpaDFrXqMbQR6kXcvfAmj5",
  "key16": "3k8u1jMoxQisUY1W5UECD526h5B3NAYuGVZKbenSmSXUAfhQ19aYu7bFDa9BQN2xkV9RKsVTmX4Tz8cMysSSLQn2",
  "key17": "4bVxVDJn2KckEgrHEg4yJ5MiTyfpomvXDmz921nx3RKr8ZMGFPkmsUMJcT6DmvwmiZbMjd5hYgKpx8MM2CQh7AEC",
  "key18": "fymTDs8zQXBQEJpd1Q37sVkRdFR4FDXAxNBSBkPiCvvc4zrfDtQHXj2kh5MBm4VM1sWy4DFzCiD4gtBDo7UYWtR",
  "key19": "5edWERjKg6HoeafFEEb1e4RdQ6hXWA4ZbZESyAECFq45vHFaCspiXDpfVoZXy8TCXc8AdJboKUb2ApaJ4xZv56zL",
  "key20": "5Cdd8Aagro76FCvWJ2mPHtnQ8Ykc2VdPkaxvbaA6nNXxMDKQyRK1EY1uHfx8kds87yaKB5a6kxD62oY7bJzXRCwB",
  "key21": "5Y2SrBjWe8AXezan5Tz5GExmUk8joptn5Y1ho6pHFUifSB8dSrg9fMUEYMSoMT4bRWLsUsnYL6XtjV9YsWJZo2t9",
  "key22": "4wLC3vXZtpZRKxYoCVBK6Rg7zhoAbETq4o4hpNqjuXT55WYuzWZMRB6q5NnccSfoSJ9eUvvfCGKMVt9BKa9RRb8e",
  "key23": "2hQSVhG5qpkfUtBFJZkrFYvNxD9qv2wgaDFzMmkd7Nb1MT2jAg6F4Sgy8yqxRaST9KNotrS3ZY1mf8yhD5XxmvRG",
  "key24": "58Vsahz51UXsegTM9fjQ3sKFS7SeJkhkjQD7eChMteTk9ia9DUKuYQVpRcjwx5ReL9ox17MY917L7tTtW67LWruV",
  "key25": "4pLZ4F6zkSMwGw6cMwuHV6gPUetjCWmwECAq7NePBCE9rsHWgj53xavmjmJL783r3p84cnKB6uM1X8312UKe44wP",
  "key26": "KabMDxr2BrRAMmD6x29as5nDFJtQdqmUveCz1ztxTSRGwvSDtEVrxL4hibyygGiPtZae8DBBvyQUpYimce3RghL",
  "key27": "4PLUbH6bTDX9rqAqkibmo8WLPNFRAUwSpfiVmf3SCpusqowSGY6Z44xJEGVfi4tkgmaeGmF8WG2p7zqXSWTM8sXs",
  "key28": "5aHEsXe9QnwCiVXVMiuuZmsZAWBaXE2tZHQ7dJiZTT8FoU7G9CRuFTbh9amxWK8e3dxFA1HDKY8Ep8C1e2F9nZFN",
  "key29": "2hQbxfD6YmxMVgBZiy5bE7GuvHHK5J1eUocrxd3tVqHDcx6DJoeg2beUGeQJut5yNnbhJYpMjXzjPHENG6UieRqT",
  "key30": "55hV68WGwTNUacY6cUqxcx49FdDnrziC7wpJn35CR51gG6p8vL1cVf4ukaxxr2MZWDUF56ke3TC8Fo1KjhyLLD9E",
  "key31": "49M7zWgPgum3jLQK2zqwyi7LKkcEMpeD4sNumnNm1DEPbj1aFR8QoePYQPsJoGBpNJSEoXjR9N7UYHfJevxLd8dK",
  "key32": "4ZwcFpFkZWzw7x4PyawTrn42VSNfmowZAQyCNYvothuaCGygyj1Fasq3Z3n2ezfPWJQvGvG6RUf85D9xpPfJMZES",
  "key33": "5tDXBkpm5qJxdAMU1WUjEaPbb7s3dhHms51Lr5ph3tERL99gSbq6HbXtNMzc38Jz5GeV1CJjwGHsQeGq9LgQkfHH",
  "key34": "43XfvqLXiV1yeUHuyDoBaoFmvQ2DAyNxwHGMRE9L15vqA8TdZkAT1W8aq2Qxg12HVrK6AUTxUPFePNXLsKPA7qdv",
  "key35": "yZCA25EGcAish1tERnuvtdQddvzRpnhqewJaUggzWPpVUWWSKQmbYBuD4nBaq8qp6XRD9o4vxhJZJttbhPQs4E3",
  "key36": "2s8x8Ys58fqFWsaAgkUpSST29MQsKPT7F3rSy97nMMd5XFrSQQuteW816Sgq69K98HLvyRTQ4GHP5rWwBiVpnw2P",
  "key37": "cH3x9reJqg6zoMiU12Vgqe7beo72c894ZeCkdBP9nm77pJuKVZkYGkfQBDuBUReEW9QFiMhEp59KbWjbd6KxqAs",
  "key38": "2biEgcYD9bsGV5oy2pj5YngidhEUmjVsLg6snbe2ArAgAaoHy23k4rd3zA7nFE5G6aL187q2kxZfQJhKpgHh9Ruf",
  "key39": "5MYZLoqrpDsv4bDEcM8CcvCWZdhyaDaMwZ9NgbVc3Ng88RMpcLMATJZmFRYDsetU7qTyrvYdyp1URF59jUFDNhZ6",
  "key40": "4MYVozMf317xCuzafVJzMX54W8WNrZULU7NHuLZdNwVFd7e7sAXguYVYLUJJBHHo3cUjAY9NUjaUx23kq7NUMuEz",
  "key41": "2W9sckoKBPg2DL9XBQA4yqJavx8MYeYR8b2PF22RyafXzk2T11QrrhGsib86jxNQMa2YroEFo5LzrGvCPAhc3Pxf",
  "key42": "MU2T5Hy3am5v1TjEcDYiw1QHBxdKCzquqmHX6FDQy5gHdHsQg7i7b5vYdqHwBXZQEzDngZsJqBK2Yiduozw7m3Y"
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
