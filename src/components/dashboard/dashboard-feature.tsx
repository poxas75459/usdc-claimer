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
    "M4daex4hYNrvRi6ggqt1nTrDwq7TwRrpAoqq72hhN9tjYSBfWmaCrsW5xYwKnqUphRditmit7xN2xsZW2f8nWCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yds4pJXpx2jtcKBgjwNjE6cAtMFoEAADsVrqkCnZwbHzU7UrcaLrd9DUfVxKEbNmeAtkL3SiKh5eiBSMWM8jKkC",
  "key1": "o7M9f7Gi7qhARptRZfAnKZ89Rtr87ZpcoqMq8k49C9k7bNui3Acchds5dHDEStYvBzpsZRow7iXr45LLkayazN1",
  "key2": "3WfjyG2ic7r6EEf39UA1ckTkjgoRUvg47meSowYobSxQN3X3RkDeYB1HEdmjdE5v2GGdG8YiPKPEsbN1mJXJqjKs",
  "key3": "3hbUWdZXCDvvLtKQ5nnunFibZxUCZj32NXhFSDgRSXv5geSwcpkSx9FoQQarwDdhjLZmXe6isYqConnrffvwxVEh",
  "key4": "21vq6RmMEF8z6QwKhwtdXz2oysWerdxRGXFBVW796hZM7GguP5CxFaSS7h8vPZa6jJ2YExPWrdU3r341fVnwjcu4",
  "key5": "6729Yv2V1FZRwAQhJ9jbYgdmRF5YvQvEa16tJrnqb7t3ywE5i4tX1fZ2BB13HDzFtNCqX9cuz3LRxZJQjjAne981",
  "key6": "zJnD3DLXVGZQeoNtxK1fYULNph5nxv3A5CFfd5HTcB7tXHujiijqMZtXsLCcsHSy961NQmq5AFdHDfqppoA2XXh",
  "key7": "GijsX2Z39VoguajMHkh2th5gNoqU6U44hQcSTc79DX1A3xhNmV29E9rjLtZwSMQ9iskzqrFusmjEhUiK1zNznBx",
  "key8": "3ayvAMBKcRYLyDCz1upDK5M2MfKnLSrNp7VpVBDMUDK7taVjcrLRdr6N9KAvB6M5AJEHXWm2QkH5GJCd3796nzir",
  "key9": "rjjiJVpUciHwx3GJ9RgxakooXXW9NQcA6RK7xy13DCg4EkQKmxZmDt8xCgnxwFa5xGJGiYDp49xmrVpxf4suT8U",
  "key10": "2tDn8iDSeqjdZajY67ZWNWYJw4xDzVbBeY55H8J4M6wEcRTjmY1UGzWcoX8pyCf3hjY3YDf9BLTitQBjnqcu2WMn",
  "key11": "2CeyL7JyJTVfZncvvgXMwNLQbFR6Grk6GDjrzVRB7U98kvMnHW2nfkinozf1LSHXhDUrsAXVJDAvhyY1MyvtwLtV",
  "key12": "49CKYJcgXAMYZSyoGCqX9X54vcHH8KAZq6RnGzwse53K6qyynRNran1rvdT1uY46EhGT1nURWjnXX52hkopMF1bz",
  "key13": "3KfdJz738SRruc6zeLMpD66GG5yy9YqgGm5yz4f77UQmw2YExyTKUkVcg1WTa6v9iWxYgEN7s3A8Tqqga4G4zXBP",
  "key14": "28QsrMUysTsuLVTCUsA68wVDjsaZJGLbfQfgigUcFypryrzc8nXUgApxNaznLPApMXnaAiy168FVdHZtTx2CodqZ",
  "key15": "XfBvdgAf5pt8R52DcZb521tGNpA7Zu5DoQ3QWmLxwUNk2VxNEBy2NG47Y6h4hS8u9Bgu3bzKhso4A7J9TyUJSR3",
  "key16": "5k2pzqp4JqHLK5quafvQ4yf6zZ1EeWuG68sQt9Ep4e945ythfV46AC6YwCLo8HcPbTanoRbBRpVLC5MJJ4dR9Eyb",
  "key17": "3c6bMmVtF2DqnfcCEdHFpid371KaRxFQdwog6dm9XSWAFnx5V9vYz2greLTHQ9fDZH8egpzii9tw6wA8M1AzdhoU",
  "key18": "BcEVEs5LscHccw4JzyNAvc6UNRhXFjSo6omsy9tSctRDJ6aCmBvWrLpGYzCCZF9BNJk1yqH2CHjSXCJt5Fukqmv",
  "key19": "3bB3FVyHsRtDDDAMbvZ9FFpVhVFciNH9RTHEJN3XyWHmLfn7zAYhp4aCwJhz73aTeJzPF9cd122iTYSquoy79JAr",
  "key20": "4zj3KGdLXtd6aSF3yCzjQbCC8T7nPChtXS9k7R7aQWvqc2HBVcJJbtHhLpvjBG4b6qGHLpFWKEVPWvaef1BKL7X4",
  "key21": "5wjZGoZznXYZ8t4MLkp917BZkFzAQVgatAqGBtmZGfYDAa7AJ3cvvXgkmV3TTxbFWnG2YvvnPKvPdvuhoaTmjUiV",
  "key22": "5FxrsMnHi1U3iYaKqCzxeUfxVuZDDYS2pQYgWRxrw9g8EodYK21SoFJjZMvxCE2wgPPQvyKYwYSmpJNhwLX8Ta2o",
  "key23": "7zjskj8VBVvDGDbgLxbwDu9VQ7iTrvQSvh34kESwDnzvkVVfV8MVvVhUdWnGJPCRGgEm3BhZfriys75jMFsNztf",
  "key24": "34KrAWp8iHgBiVkmAyKSbMTcDokwattUTj44X9VX2dMFxkKCtL7Ly8whxaou6mbtiPUdzEqoDWpTR6gBA9xFiDmA",
  "key25": "3iXx7wFJR3gKK4T22JBk7FcR9Ed7ydpan2BdLGpAUYeKvAoetNembwasNFou9UxY41zzNCj6FGZVVV41Csirxtk5",
  "key26": "3xAMmMSseUJavAG51VBCt1pxcRoPjwt7hEfiDgKCa1u1QRibzwXrdVEJwoVG1XGe1U1LqnbyTf7h1Yshpc3Wqfnv",
  "key27": "ShME3HzAAtZUFrpmSBz5gzb5cN5mncirF7QGDNp5sDevdGS8shwVYUFKbiZv8J4rY8zZhrFERDtpFxUjfLC5q7C",
  "key28": "Hd49JTXiukYjFyNtcXr7Eea8WPt7nhB6Lug2ymMQf1ksHz2hoR7EWtKAgTajU4QfiyxAL7me6ZzesdZNMa5K5a8",
  "key29": "37wmkpMPf3PkRmFujAgv3MdefRMHWikTK5kshajFsfgmecU1PucA1vxzADV8Jh7QWueVtHXAWiKz8Uu9STJRa6fe",
  "key30": "2HY5MVQnWJSK8JsFU8SoTYSLW77ny9CdpavnECrmNaumXaQAjCGjAxZYKboVdhs179311YkLE9DUW3bQ7FRntgKC",
  "key31": "36CGvPoKX8vSiMatZZQsg6JftxquJfK37zws9AZbzg2ddkaCpabSzvcpxZ66uzwWV1EZvARXG6A8veuxFYtoEbF9",
  "key32": "23niR7zLrB8xEGEzPUxvaiDaS5ESAEFaiq6fqg59wccpruwX2YEN2Px2xQjyLo7av49X7KC3TkFeBq3nxm6HN2Br",
  "key33": "WiWJUjPsmbKLN91soFfSHnTnv1p8YiFsKykmWtS7MFns5YyUBqQFnm2sxZMM9CpKaLiS75AumVFu2FWD25ZGS8S",
  "key34": "2jwH1bUhH3aS3f4HBzPZec1Fv3YM8SkgfpuQLevnLF9uk7CRod3rBWgGe4Xe7kXrQTU5jzAyg535tzYQZeoNCudj",
  "key35": "2npbnH66vR9KZoNKMM5kcNyr3ySt4FdZQKv1iEJvnmwh88LESmTEf3YVCqbtV2p6TraWpJf98bTNAmLyBvCj8nt3",
  "key36": "2iRK8bFQJH4zMAy34454XQ3znfu5Ed8zgxeta1rVdJWUmAEEA8qZnn7uYYZaMDBHsovnFsGcPZgsk2uxh7EBYWwq",
  "key37": "3X9oCHwrPY1Lno8ZvNbGGMXA5L3TUpXCUhPiANLwHBoUEs2V4dagnti3F2TXTSuUETQ34trTrWZryBNQx3XumhD2",
  "key38": "gPpZeZBK6crn1GCgLY3F9JTSFtKCMZJzibLjszV8Cs3XJKCdB8cUZMEszPehq8CmNv3gyob7jLqN8mmfevuLPBH",
  "key39": "345aWTw1stwdFxXmiATwkDpe49TaAXRjPNDhbZ8BkSC59kaaFwSTfUvsz8TkG8ypNE7izme6Qm9L38wBq3VXmSij",
  "key40": "3xehsd3xvCrJ2C6bWtdApHqoTwTHn3pzePuocF8ydn5y9H51vqbpeDWRFaVVmJzTUZQjeHLjDVeyaiG39J6FMeXB",
  "key41": "wzyBFoywLrzpiVRA5BKho2LWpjBqG5jRQZG21b8qDC3mZJ2R8zkCyMtvztXJqt6XX5Q3UMbJNtN1xVT3Vaju8ry",
  "key42": "3Wkrcm5EsWnPgte4kKeYFJJzaLWqPUDwczvT868bnbXedTfHy1xHMaJ95sjFSfW9zcfKDJL1LGRusFrpfjwYttMN",
  "key43": "3p5BR1ibFK5uW5aLrCXYq9BmkreBzZnircYWRzH11i8xkUCNckosgmRmZMiKZBGrWBnxHEBhi7bZL2Na1Z7nrbpB",
  "key44": "65VNKSmVQgLS5zDb1UMigadGC3YaXRbjUdkNWqs2nAZFCZtgW5W1MzhG7TH54G3L8xCVygH9SKNTYrN1tAAY6at1"
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
