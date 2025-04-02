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
    "jd64BLKx1Xez3fDvhMzHrUYSwH24qR8rVdRkkERoNuxpFQLNhJ4xMMJM8apHEz2hPdMrCEX9fSzpLi7qiECEDgg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Aafa2pbHrrmbqUQfu6yDkFvEVQVwHPzS3D3WSZJoQEnLwPjg7azAqsbn22bFGk325NuTt3V25P6mqpg5WJfHjE8",
  "key1": "2ANMPN2NwxQdC1C3B19ZsUdq2YXSotL3xFC8bPWDsrSRzxiYRReA8gWRhyZDRAxVMQhfWnhogmP7QHrY68xzNcxk",
  "key2": "3v6WSri37exHWxXp28LpLyP38TgKuiz2ShzynPYDV3S4mK4oHHcVbAopbY2XQpAbCHYjN29H9gBtSs2hTC8sdthp",
  "key3": "4LxUijNBusecZURQ7pyQAzM17ggzehhFwdiDXMTT87vMLh9d6DuV7m5aNPV4W7bNnxnpukiaK3FyYjpsDXpK6xqb",
  "key4": "5qnLs6jkw8RssxRDwosZWNRcJsqDEzAxFV9CbuzZgeEGQNDARmt4hJCJ4uFoXV9vUvs4qgabh6Hjdje859YP1NRR",
  "key5": "63E1E6KFfAEnUceUgEArjHgHcosK5VreQsUv3iYcYeLd8NfTj3fcMDfc3FVNY7xQwWRCxJJKQbiWBP7Aej33QkzB",
  "key6": "j46UNCAguhRK842XjPViMXwHH76H9xsE4rjRJHYMSnAm2VauAji6WcFbUXi1ERKvS6RwNJdoFj5PSZ5qfePXnYZ",
  "key7": "4GpjTFFGXLh2ZDbuHUt7vxGDPyLNHL33k5XkhCgp7ojRcyKgSWf7x7ZQXZHXg7rec68KpFriyWpHdtveEvWCu14q",
  "key8": "4nT8Mcmzc7uoGhb3eBt9G7W63Vf8EnTdAS4fLhhsvViuSH1g6vCnKbM66TqqdycFRPaDCvYBGyBBSg1ktSSWJ5dK",
  "key9": "313K9axhGuDrMdFikUWTr3T1MEg4F4HRwQb4eeWB7UWoYBhH9Gs9jKC64KNPYnNaKAx3WeyMvrcGFNd57tvva2MR",
  "key10": "2fJZ14gT6P8FXRywqer55oSHmHsQoWHj3AVqE9hiBTxKWdxZPs2CNbP1UotRUb8kkWMxwuTLhEGanRMmRLi7v5es",
  "key11": "488tFHNcWey34CnLvEPbkmmqWArm8UY3HdfwGyJ2cjz1QVWVZNiQuaSP6YRup71mTbeucouyhxscbCsEQF6gnk1H",
  "key12": "3SHPHieZdJBT7Duy9WLAKjixDZb6iLAe5ESssBpAbweX69J7fXAqgaLBZ4ugf5eEuVCDes1Eewc2Rs5wP2sPjJtn",
  "key13": "iyF23uUxmpEu879JQANNxM2kTdAn63ZSnXAdqnKcadXzxNdsqJodHhmbUaJcWa4SUWC6xecHRfWyMrq6ZQhN9Fh",
  "key14": "2AK5hMmxz5uVSn9BioLELgSBKTYP1SePw5TE3xrzbe6m4pZ7KEcrZi3cjnAb8rtEsVTsSaYgdhCm29Laot2a39RG",
  "key15": "Ah39TGCfLuXTybvrx79Q6BgtJAW2VgQRdxQtZiFkkUGpSNUdbu2Z4TvnBMoG1JP5jjvobhUQNVF6DTG2hxTKDHt",
  "key16": "5Q1SLceDKziotCJXfbfXPwHTUVpw418dhCtLRgtu8dv9XtSFDaUUTmeRo52Hni11uVaRFtZecg398pK1vX964DUJ",
  "key17": "4o4ykja9ZjFefEgQGsfWUw1nnS6jse6DeXVMCncgGB1UByQUcwiNhAoosdZL466MaJsA7VEQfvuLRWY6xEutcKT5",
  "key18": "4BoRec5KrEdNitWQiQd36LhgCsoXdCRbxC8b6xiB9HX5WbDRSgMNurfTKdty3h6ujbc3X2RXLZbqrpS3PhnDzXf1",
  "key19": "3sqNFTRdanR7z9NaRaQdsubS6XbeoEtuAzanSUZUSf1Ud95B2z7Lv8pNSEKcLXD11xnX6RfB7H1bpewHhAVNXdhb",
  "key20": "2CTN94ivCwkaBJUcZo2G47n6w76xNkcY6N8v4fvqgZWs3tL9KSdKNo6Bif1RcVMfRbyzNYCNg4yJ9JfyVi15QPuJ",
  "key21": "4C5zLbHYPjQnhHGuFBVbryH9WjTmVkfMAkMCRCB4Wpz7nSqLyqPTijCjtT1zMZQFoYSvzshUn8dZUPgeoKqAhLzA",
  "key22": "2CSNoXj94SkjCb9tDDbYvguWiCL9nZ4oyW9Zak7ES7pQYNpriWh1TQPNyeLF39pyuYjsgPtYoekJb45V2aoe7kWc",
  "key23": "4z3i3Bnhxrn73YDHkQAshHkMpZgm3FdyVoGqCk2RxHcdpuXuaTr4Tz8CR18FyBTQVW7fbcpZXnH4nwF5y3QnngWy",
  "key24": "4PMkwwNn2HPCk6HekBJSWC5indzwa7EYBVsvKjNwqMo5mTLLU318u9VxwnWvyquKMqRdAu49VFcEtqm8xtKodZrJ",
  "key25": "4hSEgYAE4gHGEVbA2EDhmmUiogJKRgxQmTEJZ5akNDHkERxF3VxoUWi2Xfm76Jm3FpheriV7k7VjY2xWQGSLW5ov",
  "key26": "4A7apyPk9XqYJprppZkh6KU3wbE3CTv7NuMiry9TtiQpDpMayGJ4N5RsVjnwkusdc83C2pSxftGCpooZnPjyLmrT",
  "key27": "631Yb6WpqGP6DN3dZQwXUKBz5WphzaBCf3WqbR49Rdx5nXbbbwZRMe4BQH1gRsE9GJwsvRzfUhWtxrL8zmgPPBwP",
  "key28": "3KB414q7Xy17q9PbeBA6AEbQjm3esiFt6zkA8yEzC9BvZ8rfkkc6c7JKytuoP8t1ZWod3ZqaF1pJ2gVsa117swnf",
  "key29": "hc82XcXnzRPNh1fjS2qXQQAjkXcM4nt2VrNK5X7SMtx9PJUHAN3fKxwK14K7ELqSf9hRxLNhhefCsQrKTizFFgK",
  "key30": "4dvy2k5T62szizZ8bCWJjnANkQPN4zpC1C8nZJQ6obBmJUSAq6vpHVBE4PHSU7CYD1vV3vA5UZbhqJfDRed7vQeU",
  "key31": "5nezoptJQ5atzWtWd2iHenRpg6Fbh2W3z4upwHxKUA8oQzE1Sam5WhFgZJRS1UJYuTyFg71Rviw9knjmZTWBQ4sG"
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
