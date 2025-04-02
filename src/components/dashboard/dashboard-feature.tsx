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
    "5tF4bFp2znq8Go7Bch8JZAX8yyZnUo2UgjZCYjUf6dDVNEWkADxKuRnjYQ3pJM46CCt7e9zL2reSdh2hKWS45ber"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xSYxM1YtS7S3aNM6BD2w2HLW7uJNJpgwDSBmhPHbkkEqQrtFKypc189kswab29zqfpamQTcV8QFMirViv7WrviL",
  "key1": "52DqcXwtg85LvJtfbzPegHjME5rivaye6q9LW6QQLpd5iqt89A6g89QzA8ug5C4zYp6HZkRQs4Vug21UrCKq3HsB",
  "key2": "5E9MB4mZdfGxhA5rbtUQWUZ2m1VgY1nYm91D4J2WNZDdwb9VfCCozpsCKhNURaw7VWdxhSauiCHwXNg7HMJLVG61",
  "key3": "3nUi4s38ca8gmhsB37mgkAC2af5euLmzWWzw8egkdLifGTg5ZKoCDLWEog1zYwMjkDPYvCmsHmeUFsNCEiEg8Bg3",
  "key4": "2CYV6p7tav5ZH6SFgW6V99MqP2FV4fVm5ytNMNLkt33Bhmgc9XdkKreVvC9bPXjpr9Qma7HHYq4bKg1JRakhZUbo",
  "key5": "4A2ueozheJxkMxTNXs9bcyuurVo9aEuksTFnPWAWrSK3r29tBMQfXchyXjQo4pBUnAjrWPxxBB39HEBWULZWWP39",
  "key6": "41p3duwKzyW6LumxLHUbdYZvVDSjzbRWqgJAWnLHsGxcxwf6QzHERyCB9q8AyC7awcNypVni5fMRxN6FDFCLmCaR",
  "key7": "5Pga7Y6zy8xz5Cwj83iryiFEVbfcnNHfo447BKpTYuZGN3LZD3d9ZNaSKdACHs38C19fFzaSbEsei9AySTeXfvqi",
  "key8": "bj4CShf6x5zTfmgW2VfX9WTj6BTrwQy8MA9Ho4nMpe8SBWdcnUyV5Wr3vmg33Ki1hcRi9pia5jS1QVD5A3Y3KoL",
  "key9": "3tVfrZedojHw2LpT2GjHJcJJ1kHmonFszqNpTJkegrzsr1iLCoJ8pxtaJWw2qSMHP1mo9qruwgByTeNEnWkwBvm2",
  "key10": "8hNDck78yN681fCZLnxNBDWpWF1Q9M8rz8kfByxxWU6KMJTMoH8WZ2WLNgSYSr7AG5VQoVqpsMUmeZbVD4eWJZ2",
  "key11": "H3yp2pmR7ZgEc54ioR5pGJDDVorhfXpXXQwhaSV8w6SSXww9ZpNV7jeDQcdqBUbNcJGYDaCfoWsYMAJBhWHf9m4",
  "key12": "4xSMJNPfUYC65JJnA7zPuGLspPjVGvswdfzsXVPM4WM8Cz3vwLiGZJsw2Tvht1JSBWnuDFbAXMu4v3vBPP8PK4dC",
  "key13": "QSyWPUgKtEeo7q9zZBCHDcW5SjnkGV6kdE937X4bGuVAzxRd8xyrWT1haqS3fXM7FoRYgdpHQEXRoAoyFagiwEw",
  "key14": "5paXKvtNJwJB9Q3dDPwjjcb9bTs8o3YmcSz2GmVq2HFcrdtH27iF5pDNJXJ3Ue2vE9bDdJgQY6px6v3mtT8HeDvP",
  "key15": "65jXPTtkgBDAT4VcAndYQ9sYwo62yknJw5FbzsdCELorCQxbytCMRi4CGq7rAuqqsRioketootqsRxFqaUQY3Uk",
  "key16": "4E9mqpyNi3duVmJfFX6TLaGvFvPbPZ68EXP3xwb65XxLoV4DwFgzP5KXqAMuS5TfWMc1k6AYm1nxzgt3Kud56m9g",
  "key17": "sSKeUYU6qgLXFNs7rbT8UWdV82wRwXezmhZ7WhQueL7fgczzs6Figjn4pminQhSGaR34wcKXU3b1VrGRhvSyLAd",
  "key18": "3ttkUoUoHR3Sy5bL4XvSaCTHMX4KVAe3YpYUTrBLGAVyMSEk14UvSETidLYAop3km3fBpT6up2b6iWcyrDZ7vQKM",
  "key19": "5z9FLogTyf754FMRn3N6sGWWxFKVypuqLWRZNjoZFcT3nmkTMhTjGDsSy5PJB5ubf4cwy7dz17JAL4ZgbwpuXEUB",
  "key20": "4V59wzPgLUJwKwTfdcAh7iXHwaWWTgJ2xaYve6UJozuSrJDXPSZ5SSD7sCYTJ6Ku8gtNQrd4ziLU9Z5Gc6UDziur",
  "key21": "416CVpPhTUARfBFxjw3MhPwKwChxFK5vpPWtD1yxkWkZgbSYDB4Q5nZtTtadg6r39acbxkhNgrHTMXt6ZDJaPyEE",
  "key22": "DpvmpLodup6Bvjh9JNMhB5tBRTHfNJzTzUrfWiEbv5W7JQM9y215QqkZv7NAEWpmCu2WgSrhd3hzQgYDWb2GGKx",
  "key23": "4cfowq5BquJRcCdXtZPMGvu6ZBVE9kw4TC7LZkT1UBjhw1VeREzPV2yuwKCF73DsaQezxKagWqbmLADPsvNJBPdT",
  "key24": "xvJNj9h9HYzJgEnpMcJvZXGa5bvDH95Bi3krBqfE1EGdfWjXAxAdtZyMNjfAtjv9vesoUA9HKpdt2wvRqv6jtL4",
  "key25": "2hTY3zbqN9idyMU67Rezhect3pAKRPASA6JZg4Gjk3vAPaD5sPFoK7ySvLRh7fV69LGr7V3QMRZe1YQQi29tQRST",
  "key26": "3zcPnqJ3KKEgt1mtxytXHZKBATEJE4tucAGvdmKQXeMYzDKWXRgTM672ks8uHYc4hR1rmHUmUkanTAV4JupGPa21",
  "key27": "2jEDM4A7feSyHenon8TaQRT7awfoL4eheEeMsGSVP8pzTHqhFhkriiVxgnB8AH5WJPdF8THgAsh2dqYLWArvavxf",
  "key28": "3UMGoD7DfDFjiBTZNJaXpHar9EPAikCTmWQCDJoe4xxMaWTdB5AHY8HkANs6ZDQpRBmQ1oTyxKJwfvBvHAGys22E",
  "key29": "31UCTGDQyhGPSmMnsbFSYkmFq9GBetXTAhFEagL1jEM9Uuo48PdT2KXohRNxQYVyutm3iBp1U2GKNew3fKibERkS",
  "key30": "5NTLaDnMsjqmsxUDR4HMBXoAr5zGATDFtux8cRtUbNVsBXPSpjftTzmNYvtj1uhqrxEWHxBeLya9SSXJ786ne2QW",
  "key31": "4sE7fLa7QZtsBTEEfDyXvp9zhibU4zoQN9BLL9yKarVD4gqggq4irdWMisXdooceb6CR3rHoBAQt7fXHgKSJzs5H",
  "key32": "3dgjuoSj2upSkbS63pKPVJJNaQSVHph1Dxdjs7WXNoygUjv2JtkiWWcWXXdkd5uScCiNmJqnfC7vekWBaepsrj7N"
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
