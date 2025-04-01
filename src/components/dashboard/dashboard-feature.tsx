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
    "NP12Fn6Vi6kLkXz8QkJpYW3gnqoDU5FAzxN3PEStuMNqRj57eJUDHhgc2SDZwRy1btArco6Jvn7HrNVdPb7RuXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gEKj8CM8MoDdymknQeaEaFLGYB7ud3S9WH391eC7KYHVRwZ3ntFJAmXUFFf8BzHkMzHSyVyd1ZQEE7sPHtMjmmw",
  "key1": "W9BN5ZDKQJuoX8dLHD9JTfFA62z8b1Turypj1ByaoYasPyegfP8Q3pbyoj3VBNQAWMk7AA4NupS9BWtuz5oMtwh",
  "key2": "4o88ftQ67HXHhHR48RFiRb4dL6uZvfGvmBRJqD1oWbbJPeKPEBtGGiyUxnrg4aJhPFbvd1foUgkP5NXihYP6DkjM",
  "key3": "3S9EYDxXQfskHR5iXwEkDP4v7iuAkY84aE2z77munXCKiTVQtkLTHZn7KVzBxb6MmbmSV9P3p2J9k1TrQBavZcqs",
  "key4": "618Zk7rpBbEtcrxZETaB4i8eoA3nrk8117UcCZsRVnyCsmy8E2sUxgSQDuTY9ckLDyrzCCqywXsJWQUq44qYnvxp",
  "key5": "3Lpzad8tVXucWqjKBppdjW99zCnvfcZJ6ZakMaJxML8JpaPvK4bAXMtP7WBfNx6pijpms7md7H4w8YW1CdCgYWop",
  "key6": "TY8aAxZmLGehWhv7obFtknVc98BR8dfWEqZo4JrknTPnk6M2LooXcYG8FLQnKE9JxX5b68xgTp4xotMY9EmfaQg",
  "key7": "4P1x6Zrm2L2HkhLp9JLLcTLrAzFosKRimxjgnCKm5T7qMfogTyH1KAhaF8VdBbTScGQVCo6GDXePSdSAeyvvdq1R",
  "key8": "38Hp8UYUhszrWpSqGHmcVUT2XtQez7VUvikmXHAXJNEGnJgeiBafSrgrwbzNGLy2svzDxPxWKuvoQcXRwWdfzGjw",
  "key9": "pH4z4tkPCJQu6RDTYtTcSedv32zjL4jbCZv4fZgqvdzQo2ZSAcfSQJE5GmT3E6Fru3GKQohG4n36eA5sSHeFzNf",
  "key10": "5XMLheSNpdQMPCbCaY9RrtmBzkbf8U88cAmuRK1jZ885BhPW2EMveZ7kNtAdus3JpKA8J98wV9g3pWigEta6VGcB",
  "key11": "4a91SLPDJLYrLDpLSpxxG4VnZKTAbLBTDHNmjr4VGRrnxffPxYQTVwkzYRiWaHz42f5aK7AvDc4t8GjEyXyrakjP",
  "key12": "3mFkhNTvM4xtk9FA1SDXUEYXZzVuWqeYVutfmmtmuauRtfV7VrcK3PMQUhTCbV4vVQosFawdTfDaxdb7fNAFiJc4",
  "key13": "4LJcfjTi44bmiPX2WBpjPSi8a5gbAbQHp3wqVssFWmAdURrbxc9CAPiUf7vzoy6oSduQV5LgbvuNV4WZEHgcS7pF",
  "key14": "4WzC9PZUDwZKdMDTSsqgDQrgAY9hb5s5sMYf6FFJ2f5dmKGSntdCqJ3WUGMT8H7ur97SYfNtxQiam8KPtTxe5uuC",
  "key15": "qauM1tHt5rBePncQx5hB2fq151GeM5kp1cWF7Y5Te84fTRqAcfhGcWVga7cdrHTkX1gkDAgjGknWmoktEVuBvQL",
  "key16": "37uCmT8VuDM8d8gESe4MTEdRz5i3NExdjAkAASSCgG2DJaJvj5ue3BM3R86ZjeXbDxg3gDoZLsxZ8k8VscXASTjP",
  "key17": "2pTyssgPJwFgwGDT5UsKUGptgthsCqUZYCMqCob9MRxzoQhKARqMvfxJtPHjA81boXi8siDDuUxpDgAcVYvKTGxC",
  "key18": "2LeCPL8dKRJRR3VKJMRzzSzYSt6CbUgfB8YfsG91mKmJ6o5aSbt5SDrcJhxzqGRXkD3AJ7GiFiDbFdFT5yTdBq9f",
  "key19": "5SVo4KWjjfY9Hjtb26DtTXo1N75DHE1xm93aV74X3bj8xWRaJmRBZpYrmZdbiQLzxdzRJiuddUS245Nf2oGQddWu",
  "key20": "2d4SCmUuCmk57ppdQwVJwRUmiyoafVgxpH9RHprA4soEQJRzQALSVaZwwx2rATQifXMUK5sN5XA6ALCTmvdMsXox",
  "key21": "pj3CbAcBUsqChgZQXEruXcM9jRmtYLsrv1WaCzj3f9ApegLRZWZVAjVNVXwV9LejCpvpTDct7cqihoU6fw5Jv7a",
  "key22": "2tdt3BTSG8LhKz2E77UetHqBJ62jYhJyGM7VGn46cTnqDiifCqtcKs477rmbTPXWfDK9PRw8Gz2V3aENg1Xw6doS",
  "key23": "24nvRVbDQvvXE7FLzztP1aHf5GnZtrMcmbhneVr1RWrLKJst5vgEsqSk9sHiFRjDEA2aiMZG2Xji2gzzVXbDfgBC",
  "key24": "4fAKycPXgNwsGEzYN4F6A9ouf4VnLSnyXMK3b8frF3toZJv4rGiqmkaLakUYEURf2XeQjYPUhHbeNGztYgLQjajJ",
  "key25": "32ctCKAhkiprEVbD7r6qQHX5dB4L6ngU9oaqP6xrvtwhA1TPPnyqGvDwBUwXwM3HAGLYccnBQnpMd6SEyckk3MP7",
  "key26": "5yHBEGBuXZjVsTHMQKMoMqALt1hVQ9fL1XineBdBBdsgaDdjYuwUcjtW7AGaHMYoRNqXQm4zXYfLuQFBsfbWwubk",
  "key27": "2Te9i8CJBNg1gLe1P5Ac2TMTHQ9XVWg6VjhWhTbJY8vs3pWxuRcCZ15tCMzzfJ6z3tRaRisivwfmxcQXRtm1KqLd",
  "key28": "k8YF3vptGoYV41dxzvy2YS5SkmmaEKkWYVYqKapbwpfU4XBX6CKNunSEtVaeC9Vf6JNaMjDKbKxY9pi4WzB3o1k"
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
