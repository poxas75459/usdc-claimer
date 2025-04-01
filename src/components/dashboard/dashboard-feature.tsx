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
    "5m6aPugzH9y6FVSKzDxq9i1yPD8KojGrWrGf1FYLb8zsSyhfmK2Gv2sSCTbJ2cPRH8SPVEjj3qsZkqHTg4jWFT5Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AUPH4Lyze6y8jD8jRqbSQ2CsDYFXiuVhnL867GdPbNiEJx6FdHN5jAP9K2ZRT3ub4iv9qVyyee6ZCJCCZ3iGSJf",
  "key1": "4UbWPmRGWQXqes4rya58qrbjp4Dnorz9c5xi9ERGWLATyUti4dwv83VgwhGqaVh5gehfkKZK4ejFKTD7bTHjiFZc",
  "key2": "4pLyDKnWNPdzSAdr9mAGmvhLXK1q48wScRfsYdYwPcu6SANGSFaMcCvDqzTW3ntMJQ5j5eWCWpyk1TbCdPQybGoY",
  "key3": "2dsUqyj8fsrqAEmC91K7xiJMjtFMUHjE9Ayby2YEZkt9pqDHYaWySgfgkmk2ZoQ5Ma12iTntiRYmu7urNgEPePzb",
  "key4": "SEt2ECn9eUSVzozbscHhesDt6C1cYbi6fuAvReU2mtapX4mXGR9hjXYke7Jpr5HnN6Dn6vWkpuvc9HedJ343QbP",
  "key5": "2mHewXUM4Q3jdgzdW27BBYdgd8q7e2TpVdBrSXezSH5YWnPR5f1if1RhQGwKhX9JJDtQsXMGEJP8ZN6JLUcahfsd",
  "key6": "3KAeB83q22LYMcxZtHFH7x7nzdN57LWeLkF58AuqyWCNrh1LzWYBDJZUGtYb1LwPkCdYDyodpatC5Vz1iFUwJMZi",
  "key7": "29m3TbxyY2jRPS9tP5E1En7TeYcLEov5KTNLfN1HnGzq3hHH1xxKfCRPnk7tr23eWgJADBr3JSdT4sLWTdPmxmSR",
  "key8": "5te36sjjArWnbNXywLrgpYQqpNx5rwYfLPjNWUvjpdAZ2J6R3u27GHr9TLSf59DpnrFDGj4WdLB1UJ28UNqh9QP5",
  "key9": "2osxbUUnmvxZTSTikQ9BeEJ7trVuVY8Us2roKUyb7M4cdEohFqSkzE6KGLPAXmeDWFa7Ao2H74H9UWooVTf9Rjz8",
  "key10": "e3yenvLrtj6KJRFpon7nfGZJMsspPcU11axZMs2QPVxJpBAgmtGoyScAfSPTEH1XXwkvFy7CkCv4JBcobgN1yTw",
  "key11": "5kW1VJMNuPQhvnuYKyacBVEmk4wokhnuQ2Z1Tak4djKGW8rGwWi71LY5KhzReBNJFVfzeYAU4tJjwAC52Zy9DT4Q",
  "key12": "SKXjV2ihMaHZMwwEzGWPxtVYcyhHiK6XUS3z2KFJEWrcskxGXgx3sPe1jBbhPWrvpoMaqZfzB3Tf6kRXtq6kZwv",
  "key13": "sapN1dbSicMtn5t6YYBtiu74oWo1YZVoVgtBroMwZs7AdySsppc72dQNeeye9iiQCjBzBnHMjsNdm7rPLWgTtFG",
  "key14": "md1SjuYkfjXALRDF4AsnZLuRUHeB23p44xVvopnSf9H2A3Goh9m8if6yoEP23eiHwfKekkvgtajp7ekVn2ibE1A",
  "key15": "3u5uT79yh5opTVmVwCVjrJkn3RYYUFKna7tvuqeFmYTjNaafWzaHGbfHiZtW1jCCiuEtDt6NdDaD3tMZW8PAxEhV",
  "key16": "8nkUUt8dzQ7jvXhHFtqe8FK4MVtYumizvkDZcpM6HgnQ2WPVXgGJjbEjCA9nzmascqcGadEAv8RoQioJTyoSov2",
  "key17": "VYM34G8M6JyT8YrEEUfa1VTBwVmA6mXLMGFb5usPrrUHz7Chx11s7LAEuTTkJZH1hJnZEfoQuevp5nynMtKKgMC",
  "key18": "4KXGhA4E7aj2Qhkyn9NmPCtBgaSVj1STxLmKxYL6TbLoRVBAanaB1syX9uN5jdEy8j41xJWgNh4Nu4DWLKozgd2A",
  "key19": "3t2Zq1K4wCVtxqasCwaoKjxaDtbMyDp1AX9S8xi3U7xTeTxDSyjftPkEdNrPuJUf4VHXKNMvPqKxoB1zm7PJCp6p",
  "key20": "5G6kshTdCsf61iKrczy8qaDJBopMyKYrkw2JhToqxYHaVYSZS48Y14sASqRXx7t5Lq3nCVyZMcwBkx77rCAFcDaE",
  "key21": "4kaymzHbERN6j4Vy2dnJ5BKk8wR9Acx44d5sMjgkTGUCGa4mDTL83wNNkqUdrhbie2ThmJ623nfeDnGUcpDFH1k",
  "key22": "3MBkemad9nSGf1ibM1oT7MDpaEKZg45jeGyqPeyTA3jE1oPU2S8xcQQNAoxwgAC3DYY4AQqjedxwGudXWPyaHDgx",
  "key23": "5B3Xp6qdvztZYZQPnSfgYmFqR746wcdLkq268ZfHNozCgyu89BGHxHjmTiHkMZBzmm2g5PWPiVdC4zThTx6VReMS",
  "key24": "Gs6dZPVe6icBEj3xUEnQhzFAy7Do6MKsL4PDu1gZkBMcpoTrYHUbfQduGUCzNK3hY5gxXjsdPVWv7bokNGrfmQZ",
  "key25": "3zktGVFJxq3kKTcEPJwVE2oGtt4SGjdKyjGN5y2cutnZq34BguXZDwMjnCmnDSN26zwvMhNWz7JdpdikXbdyqwkf",
  "key26": "2Xix8b2rcbvTGvzyuexL5VcG9QAZP5iCe4cJv18io7sbfDN8gVMmcmvd1P9jKQAdiVaTe1s3qquNtcUDBrh9dhgf",
  "key27": "2gxNVrGnu19DW4cg7hsFvEbMBjucwoRZ8pJV5TnwT1E9t6GbuhoWBAjv5r5sTWJcc4x2VrKfzQBThPppazxsbsSn",
  "key28": "3QEj6qMyozuxLKttkCXADDxHUZ6yL7E1GfXaqf13Bz1NiL6s3bEMniJnJtaxn5weZ4KpAXJgEJa2Hxc86VqiAngV",
  "key29": "31HtrXdY5PMy21iNd6LVGcBcXwydmwpaH8Zr5ZDGTS9aR3oVQpE1aFT2CamoK7T1xJeddDDzLkcu1CYZb2bLXVe6",
  "key30": "61dcAGXCyzLiB1KNAGbGtgFzu7ZSbCWpPH391BnetJfNhh8tw7JN6ne9qJHUvDfSdetvw5tMtCRY2GV6m5MWckJ6",
  "key31": "5oHgYEHKmwERs7bRHYtAf4F3bQLWaLmZfgpHhDZvwbm5HSJ9bJ4zJnugy9BduQi2WuygJNBqbfEbFktPJzLYp4er",
  "key32": "3Lm1zwEQVTcbRG6uvQYt789MzxFaCPBbTrGzmiBanHPvP2GEh1c9QQiTzsxcwZ8YYiV7ELuvPrAMHr2purfEaLaB",
  "key33": "pJSTVpqHYoWgVuiWSMxkVd9dJKrjqCN4gCuj2JAc7LB3h2cTYcmh5Ywm4uhbQZHjLmq6r67iMFEyfT5srwyeqhg"
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
