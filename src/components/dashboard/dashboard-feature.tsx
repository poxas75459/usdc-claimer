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
    "faWK8QXv2Capi9eNz2PH2J6z6UyoDSUQKLWQq7o7pB547qCyQRyU3GSZ2YQ2S5i7Zkgp3RjSzwVWgT6SXuKzeTo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lb4FaSVziMqSYnXsSMstydYtkUkZeUEAUBrfii2XnYGRC6hKbdSd3auLFQadfggwMANTicf1utcjMCnEB8XLHC7",
  "key1": "3rwdudWNqGaGDC7yKvu5eUARSuWcGd8FcoENEsYypYLsBRtWKew1N48KuZVzuBCk674rWPwL24JzzQDbBdQKiLj",
  "key2": "4NR8H7pQb24nZffk5JRZbrQu1uYthSkpSCvoPEmAuF1s4X8cVKNdvD8MLajcKnVZHFcqEEjvpu9pFsiPaZh6sBLj",
  "key3": "vRoZSmNAsBKNL3RbST7hHvovtXteEPX3RxjtDRc9WmfTAo9pXCxdThiktBnwbc8Cm9WCscXCCn4ZMquJVUkxqEU",
  "key4": "4vFMyuh8XxjXgXo77wkfmDspCTKSA6UvA4G8UuRcyN1VcT3K5GgKGw4WAkTG7TGFFCpddszzzL1FexpWuUm81JsW",
  "key5": "4nRiccuXh2zQjfDrZDbvcWqeNwCPwumNGCbpwdk9vA3Qz4AoYteJgpYCfoxMBDfeNgNS3LMEahyy2DMwTdcTc9s6",
  "key6": "ttuV4EvA7GbPwu4H9sxBgwDchCFF8JPRPKADWcL7jkJTE5PTWWt8viZFQTb94oeiWipGtvgMSXp8Ui2Ra4WyTtV",
  "key7": "4FD6H8FiMfb6MRrHeL6GBMyAWLUK5q9mo9XHTGYvffar55QxQLFKPZFWNNwE6ey7gqx7mv3TLhEaQ1KTtAaMUQ8r",
  "key8": "5jaaGuChDJRfVRxgtbAEAibXgsKXsRe6WGcQWdDyxWmtkAiyEH33mchtc5oVxRjfcUqEyFmPpYZnYXYm76ycnknR",
  "key9": "pRwVjqsXRt65ejAmi4WqmJyewHTTkcyBJFn1uHQLAti4Swpm99vpANXMiWkzF5tdy7Tdjzt45NSgJWKaqPS6jgZ",
  "key10": "5rAnCyYnjBKS6qXzDjRjYBojRBosUaFooRQbZTeyHVGnudQfmvzj34EtQXWNYjp1jTsg13Vx3jnsi9WkJ1b9KuPy",
  "key11": "3yZ434S5xqijmJ34d9pMuNxGUgcsmrmwHKRWu3d5QuqW8VDixZDY8t6qxLVxMoqjSNcEydH7gLtLcjMh53Cb7Fwz",
  "key12": "gxqWP4CJLX7FFqKJzmjxFTiEwUyE25KopU7e1BneUBnWZdYhoxyoqpbxdfrMUsUh6aMgMgydLLbgo8iH4fnBMrw",
  "key13": "2nWi8HNLMqfAHt9yDPHsvifpaoAeMka6W2YxNsC5mUs8J76b9ZoFGSDkXwH6gXgNiURxdP9hWU1PtvqxRCAAFx8q",
  "key14": "NWRDDbgezuLE1g3ZvdkDjtuFDucQoGMwqQfnvCjVSUJTAUYveqjdLzKcCUAdRvjLjFDPGyAVCj3rkAcxrTYYYxB",
  "key15": "2DwKJsJKxWo1YBRabQYQ1exxcG8YHzK9qvjPie1QWv2q18LJ8frA3PRQS5R8qxfMpeRNGsG2VQ9zSCDiPxgXHupU",
  "key16": "5V3now4hbWNe9jswmh4Cd52GVQrbAFeMpBGP49r949LXfwo82J7sYf71u9HdcoCQ6xRA9LEqimi84UPBo9LznzuW",
  "key17": "5DNyiKyCRTavx2c1fRXSY2bXTcwgQqawpYTYNBWSWH2eyeKw38tbPZ5Xr8w1a1YTPMmqdBi9EyeFjWoyKBoFB2tq",
  "key18": "4aJa6prtw95CJMyGp85tcoaxezC8bfvqdjbxxqyMEjbZ5RkGEcnHKSd62HczHNX3N1sHDdXhBEsknw4icnEci8mm",
  "key19": "t7Wu35HbF8zEvnEzU4JWdMZyf7a4sqaQ2qhGazkRdCipWJy7DLjLZFFaVicg5Mhou3UaNabLY1n8c92euQwSGU6",
  "key20": "aSXEik5xGUgGinsQmNdoJoVRy9Aykv8aUjBD6Socc3tXUzYVbR55QmZjGRQVQn2zNHV41xw5Ku3SMg3xfe9auFJ",
  "key21": "EUVS5QJF6E9R1HXmLXyA4u9hZtr9V2DNfALJnLMBKhnn83Lc7k3UpjTCuwWB5Y6ry7BA5WR8DYMFnuNiN6K9RUe",
  "key22": "3xjJwPLppuWX5TRr1to824m57M64GomyQfJWhJkbpc2Exa2CTpwf1uxmTWwf1rvNDo59MD7YdisnzrnmFBcpvcti",
  "key23": "GhdFWB5Cx4otVr5wY5DSojuGN19BcHVmDg3347Bzeqq85ysLURy993KxRPJu7353YzdBMN4wgKaoPGkg4mahJWM",
  "key24": "oEPUApxP2AS5jAih7vYR3B2BQeu2u9sypYLEQSoiiPBCEPZpXZ2S8hufiBDrjxcoaocMxCwckEKZiSBLXAc6e5P",
  "key25": "42hehnSdwCJF2XQ1ughzqkxuXUmF5XQJ5VbPFkiWzUM5kitJmZ7GC5zCEVAxCnRdvk2wN2dcnUaACTiw5vPyHDWa",
  "key26": "5Mtft3wAs495xyAKUguVQvTVjEWt8BGjyPCckrh8fqyh4ap9JZRVDUZgBQtkYpT1uebbM9PNBVZmHbn5crRnH8Dy",
  "key27": "4JbCsE73HmPxdUrD2GRbskjm1TXX12M8PkCWMGBRXApwgD2ii4N7gnyNrUihsZczBav2e4LVHiJqVmX8PSQ6S49x"
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
