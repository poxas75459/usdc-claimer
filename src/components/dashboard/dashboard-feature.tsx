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
    "5MYbxjM5ELZ1BUMn1SUA9ZyrxFj6ykrtno3bn9pMaMh5wE5ExgGHvCRiWzudaFmAd6XFDPsNYv8ETZ1RyphbdzjK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XZhXZEfTYtSv4MAfzmKQP6fAyWEdiJGSKfYNJJJPK4juTgNZEy41nTff9oqEVWMp1xWoURW4mFzuUnmibxh5UwJ",
  "key1": "BYQSDWuGBiTvjpEbArGkEWnPLQAEFTxyhzHjuz6tmqmwatihEsmySagUyJ1d3uXitAuxYJ8WxpApp4ZtkMhybVJ",
  "key2": "nikVSwkJ71cfUdxvddapBEEGoga6TgqkMSqrghL2AKFjsxmrJZaBo1rmrRseKqVFYmwSzN5d9ZGV7YkiPfGsyAD",
  "key3": "58Fy1d6rG6R3KLbPSBDoziNAebQX9fxb2mPnLcQcwSm8eBzyRj7NjVDAro2Ua4VAhQBcyyC5mbfAikMMaWCwVjqY",
  "key4": "5KziDRc3ZA4Mm2mvKdU1n1ra7wvDYxYSuJXJs3jTXwT1Yur9MmKXkMyzZzycaYgHnYhtQgA92zcXBQPNumSdQGYr",
  "key5": "3ox87hPDYyptsMWy239MMYnvShXYeRcCxKB4GouBKGR3zChiPs8ZCPByatnb35F5m3r5N1173ZYPA4gEgq1dZkiu",
  "key6": "2jM9C3ig9KB6soTR8yTeVoS9zLZEta5YRViWJAappHuc3mcNuHgLLGCkpC7tmYtQnFsdXY8JD9r2YDZdNHThSVyT",
  "key7": "49jsJvSG23VcfP6PHHr6ahFg8PBtAL9JTgscUirnsZtcAxZMfWUus8R184WLZeBcLquUS1jndEunEPZfLhukuvtW",
  "key8": "4sDAPznFceitdp6FHVxkvGLKDQ27UdB54MJCvv4UHnNv3FxRs2NeeQdhks7FYXE5C6Sn3bo3tphZDgw9P7bzGypo",
  "key9": "8tZMCLiE3VZ7U3b87qz6cy3J5NG3Ju3qsZPfqxmxhXaFgp1XqFCzDEmCSJaGXn83BD8oD8kGHSZCYdDZoNFcMu1",
  "key10": "2fcMRFXvzMhSvVUVdqtsnZpAkfyYeUYUBgKhpQBrSnbA2q62kaqF2W9ntyyBwKUNQni2KjqUz46KSQA4ScLWBTYQ",
  "key11": "2SvJMzjNxVPwxfhdhRGetP4yMswGEyTFYT694q6L6AxKPZGGPEriJKsuaSRYt3hZarGoTviMJtUout6DveSeaMkS",
  "key12": "4FEhCr1GTudbDmhdB6PNcGd7atcCdL3mhErD6wouy7nPtmUCJLn55dmwLkheJbXfX25wW1rZtwu76sqw6RZXBJRM",
  "key13": "525yQvWBU5KEvCxTJYG7Tdg8byvE6R8qT9S6KhtMQCMiTNcbY52VKAbK4CMNNFbGpLsipS9anMXnhqTn9YazG4zw",
  "key14": "1bUgUa9AiZF2tTSRvSw8Bbjjerim9pXeDRRd3G1qR6ud2PECtYaCw94gYEZntUy4drqzZwEupgwopjqmxBFiDAh",
  "key15": "37FPuJ1Qjtz9ftVTZ34jiQMdsY6s2ijTv68o3YjtaKoVn9sMZAc7U2vyi1Er3sUMw46qZCt1t5yeMzhM2fju6rgS",
  "key16": "2voKGUaJnfCF7ixX7sn9bWkpnXDCA8jV6MaMBgpGipJaKcnn1i5L2UutR5eabjEvUixqRERzUbK36ZWUKdY7aBLt",
  "key17": "2MRyJP5q9LjjhbFHjtkMgMWeemeD3yuPQChToLW8AykQwvMfNhWaSbL96NHTSseNRSLKnFtZYmJ7J7sHUSQ82Aud",
  "key18": "4E5Jxi9boNJRfzqT49i8k19YWk7Wq1Vm86y4iVTxbPQBs5LJUPdajnspqdfL1tZ8GX2Evd52VQyKvcdHBrsrNRUh",
  "key19": "3TmdmzDV3b7DgwsZTdhe5nPi69EkRxsB5NjvwxWU8CvzEiv7Wwnh6YcbY6Vx8qrh6cGZms8TprQNDohiq6zdu3Pq",
  "key20": "3tYaZDSAafWeXChYp2BKhGky19mhZytXfBoXygYUn8o6DiA2HJhnFyVz8Qs62TJtsgjsBGerPoShtYLMGNQa9v6y",
  "key21": "4oZD8HNBwAFbG1eEuiJw4yGs6kL8Qya6GfhmikKootQYoMY5rkTTh6Rpwwr1dcbGC9WdvHvMY4mWHRDozkipXdB1",
  "key22": "4xvYsWWxqekZt8c5PA9act8M2aEobVVC3JpA5BeZdfg6jp1SU482pvmjz3kB6SrqYpegxygyNwW5nvtknyavSHNR",
  "key23": "XUt7YzfHZ9F3a8phVFS1Rtyojx3nk6DX4xCxrT6n46NrSLjx9jqRnHuzHicxgA5Qq8e1qBP4c36pLJTecZUK5QC",
  "key24": "3cvziYBgp64AvVcAocHse7NfbpHPpdE7M6qTM8BnXxLTe9xnAdz1ZDRMrKfjipCFAWBsj3poxwr5az7iBmdqgZ9B",
  "key25": "3k81gJ3GHVoTjmHFEZJSXFjzuMopN256Vhe6uqjqNLLuQ5DbvsWMdNkJ1XyGVPR497Br2aveKqpaiykrRk5HuSiL",
  "key26": "H4bmiiM4d3CjH51y6g7aYiAVxNXVEDzZkmLAnVNtLFYho1PxTqD2juSWqVH6ifnU55nuqNbo8Q6etbud75Hk4ve",
  "key27": "xjsiWxg4LBQwRUSQisqnBHddabbzdDjAvrw2LEu7NqyyAeamcKVsdEAarFpy9BuGLyKyToK8iuEoekXNEWvNdxj",
  "key28": "4hWtMtwTvcFdqDZkhx4VbN7FNJJdu949bYGLjB5HrYxuqNyvjyvojoUxsr4tCPZWPhKSuMS1zgcVuQMaya7tsSxj",
  "key29": "4u5QMGAnBc7dDx3TaSwsdaCwHXsMXxDBgm79SdgxQMkmP2ZfiguxbSkqQwTAi3iDeJXbWRqdu1TJHnRav7ertzxA",
  "key30": "5NdzAFdf59RWZgNz1jnT6SyDc3HT2G7YQGrbPVnKzNpDnsLrTrMEi8mqBqSyPQbrfkbmTkoNhnuye5oVk9mmSSt5",
  "key31": "WtHQStuBVJTs3WFVLRLdYwNmMTrXwtgQrBgAqEiwBubMbefoRGgrkPRCAk3rd9F5BHeWHvsN7xrYzB51ZZasuzJ",
  "key32": "2YpZ82a5YR4dW3sKiMjBnHDDdYiQh1698QcohcKFbLJaa3dx7P1udGt6tTY765ycXrCY4ZtYr5xTDzBeksm9tiF8"
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
