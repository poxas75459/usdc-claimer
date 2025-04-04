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
    "3rpdCAkrY5oGuH9WSENbYM8Un1n6VQ1f4sFTiMAR6TmZnNfqMKrTfQA5tuC4b2tT3wgyxsv5mJ7MfA9mnGxj1SNP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gddJLzEGezBbvmHKd9RNiS8CwYh7KSNkBQcEr5sJkW94GaNMAMtjDKkePe7i2QT3VZmYN8hAz6gKRrVCV9yKxpM",
  "key1": "2xMQaA7igBcp4Cp8YWUReRqHguGTaepcg5hwmN8vnsJ8xa4xR1yCXhmCYo6BDH7gHt3aMS7qmSzoBFEjnqLSJTLe",
  "key2": "5fF7uGn6GLt3Zw57wy5XkLq7yPRDpj3iAUG51RbMzmu9RGMFM2ShZBPZiwBGyxRyGZNtdnauueaR24SsC9oYzPWb",
  "key3": "126jFt69NF2c2o9kS3GX7dt9T3Pq3dgx9y2cEgRnDPkZaUeLuh6PZXcPyw6TVZ76wbBErapvExnfwQe4hiCPFvqk",
  "key4": "3La82zt5WmDTit6xMRbiUEV43c78JtaqhU2gxhKC2quF69jxMpoL1hccyjuzwqM86mSqM65FKBsch82cxLKGZUxz",
  "key5": "5TqTXnx1SUU4LL2EnUZtmtEMCWkFRgd7i5bZVsG7BisT7zHvNSvxpXdXQYGoB18Bv2foio3rrFUSYFjsJi1rPZzf",
  "key6": "3hqXUnTB5ZVaNAgzNhEFyTMvujTvD6ahzdyAYZzFXcY2RPatZeBJrRmk5gQ2tWVEZxfemkrENn86DzBG3k9o36i8",
  "key7": "2oaFPZTVxR1uhcmd1qazbYFqp7hWUQgPN47gFpNigZKvpVr1R7hDVVcM4kedGjgYrz1oUpvWaF4fra9ofRzFS22q",
  "key8": "32CwzhGkkWqaVwWR1XoEx1SK57fexsAM8X1fqUDwRTWSPaBgREpysu9UdckJoHzt73t5QDLtLRAQT5ZzHEpfySvK",
  "key9": "4KYoXjtoFWJgpVvH24yWios6TBVYKJc1uwmCwbBRSzJ9Bcs6HJjHaaX6vTRWfJbF4UtGAR8nEwWEvgCdZ3rtw8ox",
  "key10": "2rRRKZnrNi89pA526aQ2BesUGwSxCYENxFHfnNrUKS3fvQGSVU6WRaUFRGnuGaVKjJouW5Ed7awyYGfAnD8SeW1r",
  "key11": "KwE1QAWUaTGHHyQMFfhgZ1Szz7cXznPcKdxNPvKZdTsPdTe9AEACd2cHv8o6NsYx1G5sX48b2tFEjbh9jqWAHz3",
  "key12": "39mr9vAaKbkPjL3DzoqtQm8JuQyxVxYabqNHNprcUrXffsspc5XBcsidWdY2SZdhpLoprW2kaVEgvnTU6AuVRpRq",
  "key13": "98N8vRzz69VhR3YnFvpAGy7SnbEaBx2t5N2GHFXDxi29WiCWfjh6EziTMrSQbR6hmKG9sjKWUGKq6Doam47ZJZW",
  "key14": "321zWKe1Gkvh5HcGsiZfa4Wz6oZbH6sZWTpAwXVZZPEFa4DyAfAtimDUCqMR66EWhQjW5g4S6XHacxsT6h3LEWv7",
  "key15": "57QSiyN1g3ToaRz3TXn6yyDVWsxfHa7mJCu6VZBD5qpdT1dCcjQzVf69octfDjKL5DddgcXQ9MpFHgUgw5yZKUCJ",
  "key16": "3S5ZLphXdwAff2YZPe5mHF5u21VZJTNsJTqACgAx7XMGfjiQUae9VbvuPBoUr7YCAKf7diNr5R8KwXx5NCCbdNDU",
  "key17": "2joChWrturKbQrocEoHHkkMzMXwVJSxgRuxq5ohB3s2Jhmapf7mbRhkPw3N5JQXAV5otffEavYVK8uRgXWMRVcNb",
  "key18": "3SdPvjWF4qWJ3X3z7mNGCJbKfZ7PDL2Y75nEBSG5T13jyYnCBxSkHoqBSG3MRvz5juahVibvKJW54eTmAkaAF13x",
  "key19": "5EkKEMbmKea7LyVdKBQXdEhE4cPWVxNpSMLFdDXFWwiyDfLaaRK9sdibnk3Pa8AqdxRjuXK13AbfwTYY8Mfu96jp",
  "key20": "3qzfemX3Uj7CJNMAf9edkbsZ5eon372c5WQzSau7SUv2yjRQvcrmQ2rfzqTekJhkreJGtFK3s2GWMxdAGLqyY6nE",
  "key21": "EqDFWGqTSHSAyzP3avfitAoCkFmEXhj2fZEPsVUy2qTsW9ggZe6gNHeGgsovNpMo1KJKEfBxVBn7gBCfyHY7unb",
  "key22": "62aZkZoW63jVuuZRZRfMuaqMTYBU99dr88BtPZ6tZbByCtxpjAsgT1ajCVUz5Sw6cVZGSf8sCqWEhKi6Y9eMj4Ru",
  "key23": "5FF61zNDqtW6ME5E3TeouYAFbDfadTpRsUSpYHCcPYgLT69ouL1MpNZhkxEkHpXEsHszz3Eh68nDk4URoHYBuVR3",
  "key24": "5dttqaDVeDvRqEJDuFQTZnBk7ayXqnZ1t9m6wWm1iq1wKKSiGNmWMbjakHC7vXKqkHgq5ZA6TvYJ9uZ4H2MyhUNL",
  "key25": "4Hm7jZ41ZWuAgEM8kWL3kpqumtfbyuv1Nhrbxp2UWna3QRurkTWoYz93RHPzW1Y4xEH8NFdnUEVczVt5xAh2ZpWM",
  "key26": "5aD4mxe24k1yGa7Ycr81JyQLziP2b6aecwiPNrUuya9taAJ9snWtEadbNrviLcBgs6MpsX67VBUvkvw4NFsYRQk6",
  "key27": "2Ui6umEMVAeiF68Lqe32q2Kv7JC3DGVAmT8tWFbfE6CxHiAPkt4tWHBVxtWXB366ujwV1kjGJTTEkSrfgBMMBVj7",
  "key28": "26EZGhUippUiP6SREKdLuZbM6JMyUKUgBTXQ7NFHaNaGjDxQwHPoDw3YwADFSZ3QAfFXtSDyrnmNAFbNSzNcpmQn"
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
