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
    "4e4DXvQvBf1AmFCaDhAAZhYSGMssK55vZg6nbTxjJtaMovkwLkfK1jWLwLtBvYKFiEkR4Hg6P7zPFwsoURtnHYsP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MxwUqVi2YnugteSLwHGCSw3VxozfWAXK3gwAoHYA3iSyZNv4tXFRBqdDKv3dyDq2zVHjKKaCQn9p9X6XGkgVjax",
  "key1": "385gJSpyQGCXTVw4AxJ33xN1roCdZLZ5YreiwJpJCWMPwdZbzCtWA4Dke35VU4NNYR2GtFUQKAZSp6WhLnu3mAdt",
  "key2": "28RnFfLtTqfkox7vANEbMWT3RFfaSWxqgrRebpDma1foniMy7qGRmWupR4pvhrAPz15fjwNfFHaQNdGZvtE1aMmm",
  "key3": "uB5te95RSewgXztuoFpKAZN3CrJ8Rh55m1ApgWbX2YnhgrpKbsgp9o8xH9bkq7HFZsfFqjk3VzFRbzHndJcbVQ6",
  "key4": "5ckJYCPbMnu7G5bSazshvVQuU1Q62xVBSkU8iyzwsPmyqLuAe8SwqWpgZWaCHMGtzCNPPCq5K5gN45cdMukGqQEK",
  "key5": "23NrtfQwu6rN5NfzgGnAMKgM5ba6SGvYTsnabkgXtPUrrH8nXVmPGt7rXrwb8Ph91mKiW5zu9rFsdcq1BwRkg2yB",
  "key6": "5JbwcgDTgyi8ogrSMh5UekA4M2VSJYgUQGdxv9yaUktqg7adEAAzty6dGnnntJp5FNtT5816LFM1M26GDVntZ1b2",
  "key7": "3ijMY3gDLByqUdcRJmaPYZFgcCaBWnUX3jwzm16EJLGhFUjBxw6uzeYxBEukpBbS7BtVfNNs683hMaKczhKL4bzs",
  "key8": "2o8tK6A3TnT5Rkt1wAvxM5XE27JAbA6eNUqmN4k4y593LmQSNx2ps2HoSm8iXqyw6LbqpzHajjcdn6RrirX1npC3",
  "key9": "2S9CXLSfAj3h9epRqWvNAZmSzs5tLMQMF1zeDD5pckQmZHNFqfWTzmypvxYhe5oS3sE8UCgqMsPLWVpeHJCqd8PK",
  "key10": "3brPyJf4fGEaoJeSPHt2aPz8LmUZMf3jwqvn6cueuLtsKXER3w2RwvmDC2uVo6coJuzwSZK8iWR9Ph5grDN93jJw",
  "key11": "2GYmFLPRzQnzcShDm5uM3xcCM9QveXYxWdAyRk88EVY7pvE73bzgFS3q32mKSdJCKV6s48SXzHYLZdhpJSYuZbA3",
  "key12": "2nCBoD17Ahd9jZW1w5ciJ5F7ZB72TRVKPJySnFKnNe3D4LCY7jPoRWiGM1HZsrxmBYtXm864jgBZwvyFwxrgwZ8i",
  "key13": "3bdS9NcAoV2wLFNa3TPShLT753p9puVUte3P6w4RHnstR3oa8DtgjzXDjhHX4tU39wZ19am4PAWtWdRXX2bAzFFs",
  "key14": "3hqZATME7DHd8FFTNcDZMfxcFAdvE31UA5Nivd4s2WwvTsbcQpHvX9v2YFNd9zbPfNKJTU2zrXuqmZDc52gBdgc4",
  "key15": "4KBsjXHs9KyE7HDCcYdjxkgEkrRsfadEEa6RRPWkcvmtUBZJUsAWmJ4eSZ5EdF7Lzo5CwoLdXS7e9QqRiR9YzAm8",
  "key16": "dwdi1pSNXHdWR3LGS4q69iei2sAw4EVqXoJy48RYH6EURwr4LC6QsGqGetcLAFKmvsQtaNXh3RdKkaHHCuVt4EV",
  "key17": "LR3UUdmuSBuuaedqG35KCcfab8NkMoCMYWvjmWoNUqGRRhQRT97n2kAJioSwzsBe9LneHqSRx7nDBJSyLvDYfm8",
  "key18": "4idgqYKXu8jvRFFSfYgSVcvqcuj4Ht8jU9g6TFMyqihk9chovMpYDTUdbsZwbA9PVdW5eHdT5jDBPhmSJVgqoPJH",
  "key19": "2aLC5UkyN4S2CSBN9WmtipyNhEvRjzFyZztaZXyPnyKkJKWa7tnVEEn4SPb8n7mkw7RbZEqxEfiXjyQMgBtX5z5s",
  "key20": "BktzTjAsb9YFj2vzv527Vsb5sbgJjvnBNrMyf5ZqSt7zQA1fq3CkU4NAtdBjuLr1i6GiDn7U2J2QZv8N7GyxJNn",
  "key21": "48XfRfA4Bs8zViBY8FbGJQQo29T32UtMBwNXVQfBwn7LoY9Ypu6UaVCDZmKtYrNAZ8eNJ66owcrNky5D5c9PbUas",
  "key22": "5uDQjDWCQ5vLdZqSLE4z1Y6euixpVtpLAHemreYeVx5Sumy8xdVfzNxAbR3hzyvhYYixbWxdqMxMVhqQzNFBxEZo",
  "key23": "HAxAHhBvX28QSX6EUMniZCSddFuVucd2HvLLt5TSbYv1BtETau6RcnF6JVHMafBovLLFJS14awwpZQoPtbmr8sx",
  "key24": "25yzJ9L7jWpCBzQR5i6ymDDgZeToLLfoYaQfNh7Ao4coBA4VWs1Bhq4GpLWr9T6CL7K8HxNgfN4MF5kotARa5tYX",
  "key25": "45f2Gd9L4sfwsfjHUP9oihffuYq6eRtrhJ9Lo1U4T8FnUWdatV9AmiqcJt7ZYVXojMNG26zSPnG9ZrmNSDwWr1DM",
  "key26": "KViWQ541kEng9cTL7wZyQ8vakuu12xu8QBGfFg9JBUCuNLZzuuD3Tbb4JaH6S6nhphKRduxbD4v2hemNobQU3cD",
  "key27": "4RnkEZqryeLEdGBjoEhejstd6pturGfdzLCbWrEwoGiTNAGZxF8GfXojLfaEKfGibxjUMxg5zfURpERpPreXkai4",
  "key28": "1GG1z6sG997zGnLBhiZTLZRZazac8shm7gjprhVwdnCvBcSdX4KRHLCK4Z9Y1sN1d34hFhGjZ1C79Bzb8RqRJJP",
  "key29": "3X3u4V8EfABdK7u1M3C2auC4fgpxPRqFmV6rZDCtz8zMfuMz8YLw9RHcz4ZXJnph4gBSzTsseURwtQdHmt5CGgJp",
  "key30": "2LE8E2zSZJzWpqNnSBFtpGymqtjFp6FSwVW9dKfkZt6CQZ6yTwsBRWb8BH4bPPaLDYd6Qn32WNaoTvkzrfcixzZZ",
  "key31": "2RNyoiy3wwTM6xFgZNCJ37g8YY6U6sVfPg8YJNXxQVeFquFYWN4tkxfenUB6GdthnucBhhD9Aectu4azHaXVHcbs",
  "key32": "4wqbFPUfmvkZohnAT2QfGDDF6JEfWYzZtWtV5z1V2izVWdjhG3xGsak4cFHUWvaDmXnHFg5Xdjm5vQBDAeQPVTTh",
  "key33": "5Jzqi5dy8SZzPe6ShSNAS6qsoezYg14CJicvPvgjXmvXGJYPp2ykgmmc6hB3v6GGXjGdezDUzKeJvR87qDKCTMx3",
  "key34": "4jS3NJfHejrp6v1WWVGe8Ub5StAAuvBXMKivuohAFXpEZp9JELaKGfRNmpgsJn3neqCAWHWSg3tPi8hCYiSiJpkD"
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
