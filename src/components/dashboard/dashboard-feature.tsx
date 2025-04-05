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
    "5jmdwqh7UMFSLNJyr92Pw8H5FwQcfRazgqyBkyZG5EQGjdH3M75NFqBE1xvEhFKskjVy4cbNkqinAFnjwr51EYq9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ijrefGWwc3hp9G6aD6FpwUjLjFyQvxmgtpMshj3ZZEACdYD9pAuw2LDtbTW4d5vLuPJjpEApuZMUsJP33mZWaQu",
  "key1": "oupr3upgCEFLix6ADw72yjn7nLNJ9QYY6BkRg29GmV1uNJGEtLAjK8Js92YRvEsLQ2heoZ4swjpbu1URnbE3AQj",
  "key2": "5RNeaWxCtv3EoAamj2kALZHrLMH7jM78dSWrWYaSSzg7XZ93xn2JMHaVmjz5Wjdc2F222LNK2iBsWtgPwS5PUzDK",
  "key3": "LaQj7Bx51ca8bvNXcLHygQRcNugUDqkZDcNZzf89bnfdFcbVSjjGzzvGwv6AWyMX7CveMnk9wyg5UPEhpPLMKVg",
  "key4": "3jrfC1KWwCdQUzoewqQU2pi8FBupKvEttWJtPuu193cT2NzyTXaRQdpM77aQCxBr88DGXvqLAuC84VFEVpZ7LHxC",
  "key5": "4HsXBSNUxhog7KMk17xNgsWcQGCAEkG9GLvmUGpkFmt1EvCbt9JTxjyBQto79hEC8qoX3GKuN9trMpJiywaoY5DW",
  "key6": "MtPdSjuKAcyTDZasAyQJLRpsUXeJ9cPNzYdnEZsaJNxu1xe77yt7zDVYtRFGico9wMwxjg1uJ9xw9SkShpGu9jX",
  "key7": "2bq8zTy9tqfWXEtRWXdaNLuf8R84EbXheD4HBUiWm6JYRVrtibnrBZfNAzQS6zGoKEb5JT2poZz7JVdpDPs54Ju9",
  "key8": "4Nymg1naxNocQyhHLSt7Ui8UCswgakd8pmTn2ZbBtnRHGTWvqf4fRkXJ36Q7U6zFyHcFtSykgGCCVuTAUZACGQX1",
  "key9": "v25H4aRrJX5PtdN2KU43b867L6Gkj3EkcvgHRFtt7FJn6VgmvyBDbvB8MdFchtzE56zoDDjKHnZqFsRTiJ1W5ya",
  "key10": "65C8CqCWtg5b1bN1rWsPQiThC9UrExF7eDQjn6fQDkgQ2ovED7yykoZhFJpH7ki2knSfJLtEsyNFv17cv2YoxKrZ",
  "key11": "3r7B4stbU99EKKYorvNHA23M89XWjUsvVAzaT4BR1icmjorARouxKzJiiBk2J11dUjXpbtzyjrdUwCGya2Pahtg7",
  "key12": "2jKUPxE1Nb9swLeN1yFexzZzEC4FFBXhGyZ76GZiueq2Ny21yHVJ3wT1ru7NFxDPMmQvpbeCqR5DfuqdGjDVp8Au",
  "key13": "3D6ictQikoRcnKTm6yCzAnfMFWD9eEhc4rNoS7ksdPaEJTALzMzvN6MBMoqMb4FNzXKHYnptQ5ia4mD2gjYKXTFB",
  "key14": "4ds5KuJWNKUCjwzUr87LnkQv8oo3csDb4f1nyEpkrHkLAkNJVHeXeejSkUCVWaTCBLFpmRLBGCeuyEYvENmfFA1u",
  "key15": "4mDFk98buvwD9q6tG4emAqU4LgsJnsbWStJhKXpPEkFb532q82rRUTDFcpuZNt6bdbwg43eepQHYVhgRiH1ZmfnG",
  "key16": "4xNaoEuhPZCKCYKQGh8Vrog7qKzgL87jKmwQ7sPG19wkVsS564Ng7hYMiNh3LeK96wGELiVbyvfT8EbD3mGAzyby",
  "key17": "4Ttf4A5bwRVSjyrHKagQfn8hSMB9kzuYLev21cPvFnxTCBb55QHzWWhWY3vZ4ojeDkqy9LeAhVJeFTgiSBHNETTA",
  "key18": "44TQkiF7o1xo5unuAzuVc3toKaxznrAtuAmphjLjcWv4acYp9NsNVTsthHxmaZQuvqsn9Unqjj4LJcvkB2N2oAPQ",
  "key19": "5QdJqwkhyhHGuAa1dCPPwtdoLjzEf6Es91F41Y5BXS9argQz9itdSJuwnS6WwAADvz4z2Yk1MRKwJAu7nJqaLckg",
  "key20": "nabrjNxQR636z6GD5yq8PwpTV1TwKdQNL4ZW8vDwbkaAN5piiRikqh46CsqVf9nLWQgmwLaWCymQF8wi6ha2itH",
  "key21": "5pnaGV2522EjyMbLDp3bo7fxdhU4d8yq7YxTeNfS83yD9fZYwpw375gjNJYceKUjxvRMMTeGmMfCF6BKwmEw5uUB",
  "key22": "3Wi31uDphsZBYUEWEES8NsaWquJZZGJW4797P3cAcunck2xwoHfwxUJd4bZAKefFS5g3wgQyjBqCaJaUpMUjwXUt",
  "key23": "5A6ULDPRMbwvaDdeHTZjWbMoxJqY267Utg5sMLiKTtjsoafxJBiEibKfnGxvYDKbTHK5nNm3giseTX6LYegMgtqu",
  "key24": "2c9Jca7faEc4DofJEK7D57K18LZ4Get4vtkYJZLZTb9eLQJLvSyh7VReaxTE4UAEiJqDCeZZYTTP5P4EMvyx73Uo",
  "key25": "5qreK3tNMfypewHxGHQf9C1kBcuFASHq7gi3P2mCoxjRFfZTZH37RNd2ts6vrq8HYTqBvdLwL18gg4p92qTou3rd",
  "key26": "2t7AVSR9tTJixCuQ1zKmDLXWnJpx5cojkcYNCDHrBGLjZ4tW3vd4QhM3qzv2WjjYY9zDRayfYA44NqsRNCiyASEd",
  "key27": "PywMFHpHEJTadtzrLKj87ed48Jojd1Trnc8K6UgQNJkBQtoxXztUGLJnYV8cVPUJ2d6yPrwdH3sEMf9tPbvubuX",
  "key28": "eoqvHzFe6io5TLynwWm1cgLfWPN7ckFsNH6cgCDdE4UoYGW9tRE5vAnLWGZXmoMa7d2iDhtNkBmexTVENtSHWE8",
  "key29": "5X9BvZKTyYM8G5zvLjqXUaB5ttUDN5uxYtcTqH647s9djo7QPrgffWrvCaMri2Px8V3vvVtPKKcQQsxnpvXsXL4n",
  "key30": "3ugF1gKxWfTqnLYpMtcFJgu5uBCnL1oddma6rXNPXHjY6Fgu6ZV5iAq2UD4STQp12sfjvp8oy2JVCSEVVUg3BFho",
  "key31": "2hzbfQ9AmMvigvHz2KyX9zEWyXPVsifnKrQjTxzSWQfm3HBtm1kAWjQmdKQBQ2xzttGpWytFqn3kHfNvktLCsy5j",
  "key32": "2xuU1nbA3ZK6HfDeos8nR6AQ3rc9pWFc7ScaeCjZ2ZzESecU2Nw4mMLqoCHh5oA13U1qTuqLJWVpK9JWMYUmE3K6",
  "key33": "2MwqaYV5UbwfjRQXNfSjdrk5DMkmVFcyoc5P5Hi33juAv7tMcijR9AokN7ywcjdxDL44s4yhuYMohL8LPBQnyobb",
  "key34": "3TJ223ePVn26vcvgR4BSj4gUfqNXvUWyhh5eKkBkzpqSHd3DpDKpEvh6xHoZhw8obyMKdUodGJJ8mVBsgjYnKjVG",
  "key35": "qtxMNxVVLGwpR2jcszMJd9AX8qwB3MyZQPuY7n9panJAQFfhJipZt1MVG3TDTDDwiWpCSXHD95KEexYUQv7PgLD",
  "key36": "4iWnNNGpmqbd7AYHRAUE79TeJBwxyvTsj7pTKnp5NndvTHkhMQkBNtNrg34X7cwPrRzRChuZvNmLkQtpY2taKjFp",
  "key37": "5AXZbjuGs1EC4Vg5wmPPADV3iddcvPQGpJnEFGCRua5BK59ruqn6eZWzahR5QHijqCHGCcsEgNSvUMJhG3K2KKnG",
  "key38": "QCmhf7odZSD3qTLwxnx3ShiFFzHxrE5btBZnKVrxw6FLbAAVwUsHzQDdJk334vgTrJVkbyN7hdt6BceB1zwbc31",
  "key39": "3qhDcnu1NEYatehbV9nf8CQcihUqgsPZN9Cq7hmuoe4hFrP5ZmEAnqpThyaCgFfFCFKjjACk2ufwChF7FRwiVJrE",
  "key40": "2TFwjNTSnvoDwBmT2cJw93ZZ1pgvNivBioCVFo3CRMTA9xrxAiTvA6uGWNGqUxjPGgN9HiPL9b1xYCDZvL5wLenK",
  "key41": "4VWvHE3fUxYjraCHs52St4PbaZKxrafeKds4CtJXqLZebhVxHe9CEFSAazzTyojoB2xaRoQsmrPPSoRAjW67tbhk",
  "key42": "2s2QKLeYZdt2UhFAWYfrtneKSQpinDHveou9B6aVX5YCR2EdbxhKHA4J1xh1DQSkymefK1p7BQwFYAuWpQipitiG",
  "key43": "nQpEyjWgteyvpB8wi5Axwd6dLBQXE1uafdLHSTBbRjGb8yhXVHv7ditCB1R75rq7sWQu8GpdKTrNKMUVAPTvNH7"
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
