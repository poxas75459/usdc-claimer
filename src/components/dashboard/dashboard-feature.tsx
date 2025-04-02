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
    "2LihbdnesHJ19acUAFY4qfASTjYxPUuJt6Nfuz1NmT9wKaQCnXgStdCnVu1Ka9yUzzhS3SQWoDdog7N6tEYnX8jS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45Um3fjE7TPeba2v55zrv3kdNcqdjzHzFwp7BjTgbaGNnBMp9cvjW13cGiMG7ZwkeUFpGvmNoBLKoEwdDizFaa4J",
  "key1": "ggiNZUKsMaq5XynTzTFFHjEn95ptwAFd9cZcPfX17nrVbgXUVGxQebp4HBhn9jVYyktQSshCTJQfCCM3ViNqofL",
  "key2": "4mzdxTGRL7SJn3ww9YM8VUrZFnUSz6e41eKZXp1qaCQHpCUrURfF6oZ7p74zU6AxkEoCDCTJfacaQ3xooZQ74UWf",
  "key3": "eXUNSk1qdoK2nDNrGij7AZ3D93bbx2dcU3ZpucoQDAaJaCPzTw2cQaFcpn5dVYVTKphsVp5ZSCSzTythQ2VYsNN",
  "key4": "38eyBZ5ekbiZs91MJQ7pWMVzmaLDrz2G6Jr3vP8NTjPVTU8YcYwKB2rpRWerf3iEp7zUANsA42ZzEbeG3GRpx89v",
  "key5": "4WHg2VHZ68mBwEynzc8vPgb5ydFm2ESq2Pav4ZSgCJAUpjxwNfyR4i8SCesTpaaAobhS2y4YnBkDB9HmZzRkafXz",
  "key6": "4WCrM2nSry6fKAxSoeAe44QWaceRKpc1ATJ3edqsTQtW6tcCJCKKP3MgMB8zimnZDCq8UdXdECJKxN1K5tjyKvPa",
  "key7": "2ggjmFd5uuaKgUqe2KnD9y4F2SHH4yFoDGMeB7M4upg3rxrGajdTRpdf7bheATXcdHzqGcLNCaJxGyTsMWZszD6U",
  "key8": "61VxASuGFpdTCoB7qns8xCpcSkMoRUeZX2cYkzpTbPBGVUyspQVGEZ733SszAe64mBT4x66VqhMgNKEpbaPjxLeV",
  "key9": "4wQ8gQpJ52vxheRfySdxo1gT6CJxhZuXhuNWdC42wZueUAqT8QtXVfBbRUZDF2fv7qjVqSpztzPrXRT3suC5fkqC",
  "key10": "5bSvNzAnGwSnUW4n5DzGx6Wcw3dA2Ri7RJnKaEjsS9QPBr17SCuKob5q9bAkfMXT7f3MogpQBEeKVshj2qiJhRmX",
  "key11": "2m8ym25GWo9pVzSm5NE24pJYj1mRGVCxHm7SouYg6aqqzKpTpisw6q6sRde7WhCiF9LbdBdVoaBkbZP8bHkBcheq",
  "key12": "3bEN7az5Km7xYZiPRPJDJ4ExmKxMBHFzXkW4dfUcV9TWpwRyQDGJ9jC1Xhz7aCLsdo2s3uSftY3X4GbNDymhkYDz",
  "key13": "5dCBipCbbVnS1qVMeX1y5R5EKm76ctK1eSdbBBHg7EbbfEnAAq3W3Lc8jRWcvtfNSr9rRP8nZ3AWTCW9x8Jcyohf",
  "key14": "4KQMVuhYJPtEMn43nMXtX11URwSuDKBRMQjC9sL9Zyis13RXtnD67tqZhyd3tRw7Tk4eBrScouptjgfLTXAGS3BT",
  "key15": "6196B9hkUwFE6XEkHVjqnz34rkHwibMtyNUmXNkWx8U7TFLU3ygu4bCxnrazrC1xbkJfEKPjwQNr65ws9rbnjeSn",
  "key16": "3HnbBKNb8jw7ifABzqFZZkAaDxoEyxoMY3ZMV4WVdq8o5rkiYGrcjYQ13kP6hTiJ5YXQLqNQB2qZXBjXwm83w6MJ",
  "key17": "3LF9yNPLR5wGMvtDi8XLzJwRepzwPD3cvc2XKrwtNHoDdBYxWikv2EQuxgwr76Pckjm1CXRa8R6jUwP11nw1UZdQ",
  "key18": "3JyiBBgjo4gpRTvAtxjRb5BLsKvER6ZaUGscvBbW8nC3x8h1sEcrjDTaRKZuMGeViPQaqU2UYtKjv3YRRxffvb5A",
  "key19": "3bNZZitBksENWcE7DEcZb1jwzkVHLr91ybutnV124fZcaucQx72LvCwQSCWpUkCwG1LcQM3H4h45vyZ2sW9tRiVx",
  "key20": "2xbVdFeW6tQK6KmiSthY31JG8oNCCSGsBHAHCDXmiqQkte93mUoYEzZTLktvLz2RkPbmrFUmSKyKdhTVZdH8uLiM",
  "key21": "2qoVbGAGnNWacwE1y113SMkpZ88EGVPWAyG3jxrPpvM3ovXeGNkHeKmoUqBiRY6aUtwHeuUVmx8K7wwtwHW7hqPc",
  "key22": "5e84BycWCAz5AVdHSyELhF2ArxQPwKiquyqpQDcoE8FoZwL1n5GdbEJWmKGBWy8o73Dz6iV53LtFYqnhmZvv6wzb",
  "key23": "3o9zvPw2c3xUvKABPKHvnRjwneQmbxmrdLjJEQhEbnBKFZeNi9qnrG41CrQujgTVBTVFw9DnaLCugkaFFnCXnFJC",
  "key24": "5YJMccJuhVrB16ZK2FVza5iRQ7PyFo4dJydubKswYHZKVwz3FnF9FXaCtYxzMMJF3csfY6NyXuh55c1osCsjY2wF",
  "key25": "4nAfw8jDNQ6RjapR1HQLMLyhtyxricVvdfTAN3hjAk152wSzMfYFFq579q3TeWcHvPr1MoCoGhKeUXv8CbLrzbCp",
  "key26": "2ybRZAu83dKtPogpB2BwigPZ2KQ53tGaHdWdtffyWQngc4RLskdhHcrNR9jnubULYqfwBR5HxTND9JEyB5sabAnQ",
  "key27": "2XYfpKay6YTk29f9hP1rpMy6V3YBLVHCKxrpDMkyLvv8Tx2imcuib7ZEubTqQoPuahsXmrScKedRhZviX7sjGP4Z",
  "key28": "5H4qX551s5fvjFUhoLp372oyjRKGhza7ToQxLVoQ42ZCvdzC736wFGRBqYhZWDVTJsK1jdzxqnmECkoGfjJ9CxU7",
  "key29": "K5KtqyKWF4JXutqV2EH6chdnRd7acuatYW7mJdUjcYVW8rGjrC3se6FufXwCs6SH58bXmfhRbd2bHusHe368ac5",
  "key30": "hBfGdbAKC3X3XXMdXtqWoBLQGWPtLg5KuGCEC949B6XRZ83fDkSCjMGKjL9uWLyNSVpLnVK47H4rnzfeJmVTHxb",
  "key31": "NCwbaLGGVW852iZ5EdNbgrHA4wcKbkyVuDEXZ6kCWmuSw5karJJq87voZY9TW3S1U3KpyMpu9bhRSvQQeCzzc5e",
  "key32": "2DrvevahT94uPvtgZmvVjA4S4qHaiVAP8N8e95RNqYmgJLpmimfWFWHb6cwchpuxt7qpY3TFZHXj6YtYQUfP97Qf",
  "key33": "5CdX3RYEMy39dpPgeYnpmP7iunzF6wExKFqnFFG8rej4jDVzr4Kan1jj3otjJpQ1zR9kWrKuRSYnfxCPHF1mYNuC",
  "key34": "57j9DEK38vMdnf9tUBeAyXoks4WBG2pKpN6yPKGQDEPEJFjKkfsqZnDCUSSiH1ARDeaPkf1soejjEpzkcM9oXi98",
  "key35": "2XfL8VWr2w9jBzg8LfTVGfTGzGL4dHdkacY6dHQWqa3Bg6Aa3PdjVE7C2Rj1rDWYPkWPDyqvGiX5cGZHUJGa5vet",
  "key36": "5P4CAnCJwqpprYxxzZvcYXx4yGzsgfA4CpJNPpbXBSv1qi1hNExheL6qN4QB6xc9NLcKvrwhirJviKC1JMJHXYnL"
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
