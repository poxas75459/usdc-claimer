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
    "2RoMJPW4dLK814tTTfWVEWZZJrsZoRKx6HFveFzGG47Jo2ZSdhtzx2YFq2AMvWkQJUiarfazdD9ncTmTZJRBFwQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xmD8TVeCjSZQ6x1NCx7LjmaN1HqPmENWpEG4W8rezqi293hy6e61Ah1xqKDqGzVAvXi4Sy9MtMTxtAy9CXDWHFY",
  "key1": "fnPdkr63dztu11Ntn6MTg7gLhiNpRuBW3HMi4m5rG63XiNAb3DHWJKo3m9XUfgAUthY7A9toKTATVdsuwGq2pAJ",
  "key2": "4TfZQXXCYUpXEoLPTEjJjeLyBu24bGRWiPfrkavNYXEaEtdJMd1BQSod2KT6y6NfJ9Csuwpram3ikcNhTdDgqteP",
  "key3": "4YUN8b6x41FBh61wHNocsiZE1hwHbRaaeHACuRdbbgXabGkiFGfS5UsjcG2KX2mgCcyGzrPngnZb6nPMVsMJ3rFD",
  "key4": "664ttQe1WUCs7M8GjdbWLVKSCdQh69eSvipDK2FdAmHuuwTWBYUWg4ofnzpnKfVxA77ZW5ESHDqCefsBmVSUYyXw",
  "key5": "3HYAeeAXJSARFS4JqDNUW5V4Zpdnfhujbs9bMZ91SUYPgwPBq6peigRCJjXxHhYp3dqvJXrqNgAPXoRE2fKhwUq2",
  "key6": "2kH2CS8ofSyjrowKgUtbQpqei9urMAverm3HABR86vZTgAVb8ZbpiN8j9WMSoEhAyKa4EEQq1phToW3jZVXriJKv",
  "key7": "3aXr55DPMcTxUJg2vF4mFzXwj1t5brUj5caKTsQev35RhJvZ8duQNHtHMvGsh3Vf5zzj57oMnUXrsbMDKQ4vwBo5",
  "key8": "YgPKx3RCrfd4qrngMp1siQjgcoUM1ZwpfWaq5jKpFXewfUvaBzs8nod1BqhhQsvUZiix5DCqYMjC3hSRuoSemLF",
  "key9": "2W2bMSJvpvvKx97HRhBqQsVMwatGjVWBtQNfBqLtrjnA81htjXDndHLGTVkDP9mtYmrCtLLVjq3uanBbtw6xTEch",
  "key10": "3bUv9yfSkDbbrDptreAE9Lc5qCsRLXHY2wy2819Ra3zTutW8qZYhhfVrh8kSRyQKkN9uBDceDQoJsGNXnetAaCAU",
  "key11": "wxjptjjZhUFHRxH4F8zTRGKP2psA2NW4AHxoUemmKdZdK1jPNhUAABuiE9JupprNti77uLUCaJPZjN43XWr5jzA",
  "key12": "5SJvb2YMxbRN6NrG4tCnYcVKCnsabvW8LT6oQMBd1Ebv2aCYHdNtetNFHjKoX7573Twz1SCZeiujDFgDwF5593fo",
  "key13": "59mAp55dciNFYFfF8eTNPdK74iWRLjrH7KuuCp8c1iGfWN693wTigyeHw3kD1sKTyE5nsX9d6hBFUA3skXj5YNPG",
  "key14": "5Zp1SJTaig5ANNvNC97PBYvh6nMQvKQEYd7xJFt5rfZQPdK7dXjGCqy5dax1Y3SrkBRuj8akm7Cznb582hMQUQ5G",
  "key15": "3doQNaEwrmqZW2SQ9oP949FqUwaYzdoHK3dQ8BpQsqwtTBS36fR3ZXK3cHDjkLCGLgwptzdHNW3d7aCYaWhMU7me",
  "key16": "2anHA2UVU7UQPtDQbC9vYFspE6GZmA2sjvW28KBKSkiGpxtpEHN6DTSmLrfhK7KZ3s3TTCkLEyB7SReeSMfFH4fA",
  "key17": "3gwpqJtU4KoBAhdSSkj1TsbLwsEFv45pomE5ydzdTq8RWTUJ1hWstwWYhX9hxaWKTjc18mQGKdU33dYBXrzqhZQ2",
  "key18": "2RztDVG7TffyU3ErVN1whERKTUTwKvnVb6C9pptsfHo4CNidrrNmrj71WqkVfzfV92CV6VyB7Jufr2PQc9znagKz",
  "key19": "eCvp1fX3yAivTfw18r5GMBrPRSxVajxexbB86JQ8ZQbfZLKwVUcDLhbrQqAwMWFTVBdU67F87ZgfJRAmF882dYd",
  "key20": "5RrDTwWw33Th3nejd4ofvx9mZEH1JKrehLhy5EzCTSL3muqHGvbrtgff7eeSbUZLAZyf2mz2JhrSeD7AfCoteN4S",
  "key21": "2NZrvAfAScp4mkHBUapws6EVjXzuUKEMTSgoxbAa11yfa36d2ch9DVvtqYEnunhWQHc6gYn9v43nAwXzWxvJ8JE2",
  "key22": "xfieQqr6aXmWRkzYcJmqFP9X8uLgxpnw5uB7WoniarupwKfzFzgqBFU2heay5suykvVh11PZTvUQzFNxWa44kKr",
  "key23": "Lv7XN7wwT3647X8emqEQVPGV17163R3MMbNS8cxQ1nskYKWGA9xQMHji8ZcWDFyxQo58aYRaVW1J5ZUgMPAnKXb",
  "key24": "5VgZK4nH9vaBGhqZNXn2fQPq1mxpuCJQ8NzKLYHQiwqkTRvnkbzVPLUDYpFwT5ttcrEsKaaG5jy6aEiCDTZDtNHa",
  "key25": "349AcArHpwYkHNG3KMRw8pLWyQYfYAR9289u1HfEzfsMKfPzNGQ7g8sQQbzF8ec38FiSqifgShvykS64DEwWKFab",
  "key26": "25vf5rS1FbKxP15ar2RJvkjT8W767752QgGeiXdZydA4E6UM6w4Br4oy1drsbo4v9Ryc2UsWKqiAT6QULtSue7jw",
  "key27": "4zcnXAA1xFHSNcUgyDHoFj1HaxvgRjReYQi6Ve4VDzdzNpppHX2voLXC9XLpZ2RnL6Pt2SvYFAPS4aVCMosi596g",
  "key28": "3QyJm2FB6eLEkd5XmJZeeJqKkhaeEmc1RyToy9oBqJQeJzphfLoWYuVwgfC4HkcMPSkWv8jNuTNjhfHNCoF6vM4S",
  "key29": "3Wvy2QAChfWFGt9TMtzr4eWxhpfYdUUfr9csL4bnELmyj7yohb9ARwzaPrJF8xRFY2dDXugKFsJfkbfgDLYsg2nC",
  "key30": "4LbNXxCsRnCLA67tACS2M9g7MnJYkkS35FksTHAtMdRtWYuHQU5dJbJzEVd9xDx3fFZJAbuC81S74zFwGUp2hVN7",
  "key31": "5UB3rtC2FtCKjY7fyinS7vsycPeHvmSrRsZp61RJpmNu1KfaXBuG4i98T5NX1fkdAv4XVCyKGRyh91qQzX8p3pW5",
  "key32": "3D22A5XABLj6euR1vMeE7KxRJLmvz67eawv255AfUESQMCh9yMwe7r8CyQB63jEzGx4LpSH6PoKdg5q8wpj4ZAr",
  "key33": "5u1qzpF1Aagkkk2s6Vwhst4BwBch3NATF4EUkrtS1B8E5mFLBRo7D75RPGtHb8uYLM2198NWh9hJDfDYvVFnBn3G",
  "key34": "3ssnUmLeogLEEhYo4ncNy9ZGH8cv18nWSpXvFCWtxU4LYoxB5GvbY1e9jFjU5DnNv4pv6Twsm4Mm3h9EFX8UX9mY",
  "key35": "jtPm6w9wdDW5eb6qmxV6RrYPfgwSMDygcj6Ps7FuNoTX6bcBKEwS3Gn5mu8uy7NuK8SxENPmDNH8ZDk4qY9VWDi",
  "key36": "3ENkz7kQdx1LYqZF1j4jnwq216fKArykszosEiuwytBdmwG6Wpehmqk4KNnDrHKRWkRvgfUd67B2QqBXTgBKMvT1",
  "key37": "4SvmFGEPWqmTQ2msgTJg8nx17Wsp9j8QQ9ky94mhtPeCABUNV6ie5NJYTkFUDVMbVzZnSgvt82xpHoywEbnqmm8u",
  "key38": "4sJhQBtosp9CHKM3fWAhFnDAhnW8WAhtKHdkrLbdHboSZRxzdTiTjX45Tgn4BRSdvq6v4J4AaF3HpdNgjeNoHtRg",
  "key39": "3XQru8ag5PrxcDQfe4mYeT1p7w1DecSEYRTEGdhJNyohozWkxPF18KmzjAZobxE6HbktJaJJfjjCTtZMqpfzcDtd",
  "key40": "37yG3iFp1wX5kzTZRsgGanBZrHALJ69jV717U34CKxCXAcbgiaCiqiHDzeD45BWDgdtbhG9r5fhEew87Ue429hKE",
  "key41": "4AkEnwkm9revmsZQE6nEmfBtqVpQBQqg1sFUETZ7oB62m85iotadtRkei7XvH7NiwQtS42949TELMizQ5Xv9Vgpa",
  "key42": "3m5tYs4UQrgsCbbNnSUWjnYUCgJ3cUVaxqKDdgkNkzSKrS7RUJEKTeeyXqUQQaKxwR7V33KG9m9UHTRCLh4kpkFd",
  "key43": "2gu1KEEF9hvUE7U8bYWEphjMJ1hsWUgXz5seUMAgjoiwdUm9Zmoe9RgaGn2NdqnJ3zZ734aN4bPBiGuwshHQy1Hf",
  "key44": "3oaBnrFHC2au4hU9FLtNzTZvHJKqm1DPi7PY8ENgbuwEYbigUKxvy8hUZT4XVha912FEDDfpDapXY3p7zEPVBw26",
  "key45": "5WA1ijnnX9mP4GWp6K48gTAHk4UGXUGCoTAiwvxWgC3G1BBMyhs7D3KefwyuGiZ32dwDPRAJ6mJs7NpeYAG4h77H",
  "key46": "cCoADQGLiFd7u5cXS2QHN4cV38GV6iaRrMjy7cxmrxT11iEw2LD91G8w4iEDKN16MavgmmZcrzMPpQTgAu9QcWB",
  "key47": "4ApCzahS4XScUbKepXJVFg9UXzeacAUA7FwuTYUS6xrm9rKyXxJ7ConYXVgmukY1bBjWmfsxchqUndarcr5L4rNn"
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
