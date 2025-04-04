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
    "2c1ey3SNH33V8MU9koiLL248iNyDEZJJxsrfUd4UiyR8Ri6zdc7zUDd4VHwwxQjKWeWVkkaTnmr2AGsKUkFrEySt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ndLPQ88T4QukBfK1E1XnWRrfK8eKeTz6XtuHQNLgYekdeAzhvnbGMLSDBhn3odDia5WQHVjKGXMcGs6fgkSwEaC",
  "key1": "3XkEWVJUho5S7UmnVfd7JdEoAnjqGWjUquXH4cnrWjC9v1SBAQK8TetGEtQHzia1SwwpJuUx5bvfRsDKQqpnwDbE",
  "key2": "hoLd8tVpecqDV95CzD4bDzPBK8zzXriv3cKLYXbjN6dc8B5JkYF1dDEiZV49SCxxuuRvVKHZDSAZY1zmiQJ9JUw",
  "key3": "23kEb3CRFBjVuEs9NKVDYUL6FFg4RSQ3fedS6WdLhgJiYjoABSQFwpYiVjsNBNK5wPk5LCzLgzTjxMS3qEETyjYf",
  "key4": "4x269RCV9GUvKmFJURy6LykMLgs1Km3DkZ4fjpg94nUxQ3PPWfnWadr5x1eKfAkhHy4qgBXLcLTEBC3iuBtTUePn",
  "key5": "2KY7f7m5FLiYgCjk7KmBA7chNsY3YMFucJFcXmJyyUkhrYN1toTqPfDbc73R7pUgDgiXBtotHJFoHdobYaEjFgEw",
  "key6": "yswAUgMn6icXryCHjrZqqnqAPAU5XwgwWne3Fh4AjbB4zpUWBm25WtDif5pXqcFdaeYUMruEfqqvKupQMhHpAXt",
  "key7": "5Y3VwqmjMPrvHW38Bk9ZHEiyRVhKBLBc7PLF3QPqAU4oBz2NFQhNAw6ictpZ9wqLBjCPCi4B2QaSm6yLkyQUPCxb",
  "key8": "5HiPzuf3oMVRQo7xsMCpr7Heai2ZVnRFeAF9K9oaH4BY1Qj7LFn9NVysV8xeKf4D7d4n1DRYRjdeBSBmo41njwfg",
  "key9": "4fygjD61MnQybUf5t21Mw6ZYKX8r3TSSMbd6kotPUTHGLrS48RxbA1q7TfwuqtYMJVZj63734anqKnEdaKQ4Fo8X",
  "key10": "2tgezySugRtsCoYx4SWz41MgHXrarbzYd2LLzpg9UaFrPcGZTKxE1qvt7vRLLWQFmD7y6m5kzsrKr578uuxqf7SB",
  "key11": "2eu9bnXnz8wPA9iUCEh6RpdchUxsRaeamBhB9ofeodWM9eJw7kramqkmGrtJmUrDFWoJEUofCF4435b8QtRKU22D",
  "key12": "2XrcpuZW1Nug2ojV4nogUqcBtu5V6YFXy5yKSMUj1o7fPjhAZwJxCUQuNBZHpobtoAjE4hjiidZSFePqEG3U2VpR",
  "key13": "3AYZYoqCeea6PixbctTjP44s5WudwZg4BjmaVD47SoJjxToLuT8iMvia7pheYGxUA2yvW6Yr3U1iy6eZ6C3bChKQ",
  "key14": "3tmmN4TTaeHUVyYoWYos1zEJxxLYNo4Fd9znckqQpjkt5gLe4qHU2FvaqvBBQFmcskqWchzR5ZHsgjsVkq6PHF13",
  "key15": "2AxdSCGzVLVRBzzsyYyk2YBKRxAaw7pQ4B7CG5YwQFEXWqvMKnFAk5mPnKuVwba5nZpGGr1i2VVPJQ4oRRPsFz7z",
  "key16": "2KKik14ZDiModAjRonEnCESairrKC3Q6NBWt8BmyjpNG32a8BM7jzMEeoDWHe1cZL9GmXHXbci9yNhA2oqqZVmSr",
  "key17": "RxW3gbgpBoPwnLaqzkV9aptTQ3qxL2U5qAX4LskCBFEDX9QU1NSFzwDCpZo5G85DAMVotuLGG2oAZQtbENMMRLu",
  "key18": "4KEdZFDsuoJ8A4VjvqvrCJHuSGGMFPrdDpcAbkWMHo1K257yJxJBM3eMTur5EoMH4BeTzp8pqE4jFXRdMU9CWfK",
  "key19": "3bsDcS6QM4NwBDwi3Le8B6h7nNob8nXLZgVH9JrXefUcZKSKX64F7PYiXf7Kr8mpcfTTmkN3DphgYSNH41kJUgP3",
  "key20": "4ixxFAykbckhGL2gLVyGREXHDDfDn7s515UncsDx4YT4rtGhMApYMaAYp4w128Mapw7AbkFB5Y83svDDat7nLNm9",
  "key21": "5A3g2K69d23sgP8zQeJ6bBVZf9X6N6mteFRaiv4eEEAxJ3RFrAR6cfgRpzXzK7QX7w7Xd9JCtueY3NMWKuxuDjXY",
  "key22": "3sH5wXSPWsnucK9EZaoGB1t2vukBd4zhyjVoUQk1RrdEmaz7u5VVoFbkhjJxJExu5nh73nSzsQm6hvroS29xT63q",
  "key23": "52dJib48p2G5exQyy94cbVHbZsD55tP3iP9b24kZeG1dmEjgyCQn2DScRLymSzaRzSxUsDmyFdr8MN2bpchx4Z9H",
  "key24": "65fmrNxXu7CPGRHn4Hme7fh44Npyvt5kMyzWsjfLjuS3wQZAhdExNmiHC1sYgiks8umHFq2pwKmcMZrP2bVmrsLo"
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
