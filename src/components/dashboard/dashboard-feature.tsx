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
    "51XzRDNaMcARQ1NCWFbsAJbWCASTTL2vDcEhizGnrWLB4BgWp1EciqxFxPauqvBCNZpafVoQ1Hsds7ihZY5oKRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SGQb9J6hUsNMLzFecR8ikBLCQJD44MEPCWpFb5g3NBFd85HmMcBYFRfeTjCq1KkVH2mTUKXW47yGfb6LMoXHkKd",
  "key1": "424hTo3ztcFiwuwPjHQsRcPZ2EXUSGMuvDJ6nmLoSSqr2VetFYUSs7Vr6jeQDa1KVFUfyNanE13AbF2Awsx6tpGP",
  "key2": "2gpQN6Q93d8ewYJErkFvSu5r1HMqGzr8hNE15hL86wnzaiJ5kGP8wfS1SqYJQk76RLzbPWJrqqvtPauduuYum29L",
  "key3": "2LGEetX4hyP6zJB7SCqVTvrrEgENhNf9oHoVqa16ATrg9h3rPcBw6J4QU7SVGENdAiwZvrpqrRQvPnYScan7YDji",
  "key4": "5puhK2FbiVVVGyJxhKf3VCuJMWW7CU6v8Qqm5JfxjoBno3hh5d9v9BxySQMN6aTYdtyBwSEMf2qZNUgw7NDkGqG5",
  "key5": "5dxkY5WFQU36sZKRB9RXVwmPFpBBBJtkiz8b6N32nBFV9qxmwHKGUzJwr9KUMQs8ob7HK4B1wyM1ESaKK2v6rvEC",
  "key6": "4s2Dq4aw5et8k7JpG92qK52tBtRfwRf3rvQUBHTtF4WFxNweHtbkU5XpFrKHr1FV9eoifWhpJk6LyUwoGiEhhnBb",
  "key7": "9asrkjZyJt3ci4Cp3brW4bPqYGo2VNuhGNPS9yqQohW5KpHvDDVBQfPCwvsBwfW5Ftx4Be84ZdK29m8gq5ve9u3",
  "key8": "iTYVXXxB8bdddiQtHDM5DvLRZKNxt6hcxiznSwfzityMtvQAs9N2JP99gHfLvDvMxiBGLpsDbQUXZAhKYNRkzdP",
  "key9": "1HQhRhwgSYJmc9v5ry7vZUuVxmtKBMpCCfd474w125EfoE9dZ6L1376fy3mwP4ncG2g7mBCiYswxubThrw622ap",
  "key10": "4h3n4ivHom5kCnLsJq3WjfJxR2jnwGWPH5BTzM4ox1M11LK6quE19X7t4EM8hdWXCBWzes6Czfim8hy2DL4dWm7w",
  "key11": "s1zbQ9qGgrQTJpA6272MnTuU3SYknfRhEGBpAxn6mHrF5jx3vsTC9kWtDMoRXHV23GZGfFSHKJ4tqqa5JzYTxYp",
  "key12": "E3Pc34jgkL6mqvrYkQ7VJx6XPWzyKasrRHyCikBuGX9RY2NJaevLdqvYWNg5XzeEMNbKhozAht5LivuRt5bodTQ",
  "key13": "3B72yDcwzDXkR5t9pA4dqgpZ7moTThASKbDBjv7qH4djVg9Gy6W2CjLGhPHtRJbyG3rHZy2REiGizdx5mHm1NjFU",
  "key14": "4nKFkRWV21KWQm2jxEshzDJxY6cXwNPJvGyZqNDWLPVNspySktyQhJGh7rLBM9LZRYQQqYiNyZwqiRxdk6kcMLkE",
  "key15": "33TuaHqTKHjbgbKBfk1toAgh3Qy8Lomtxix7zCbkLZW93p5xYEMUw9RC6gofLf3g9XfYD8JAowmGaC3wAHbUr5An",
  "key16": "5JsuKEAKF45v7SkgJ83skUVzqd5w8iqf7Ybx6M9Wx3NYbuKVeWm9tREoTsZZk1Hxywb4ucb3U4xACLMGaBhA4djU",
  "key17": "2eCk6EVtRjKTdn23rG29Dt7T7ZbbCQazKnmraPjQdep7fss6YNZrLfC77XCCnasDWS51DEWMRVV3dVEsKQgtaze",
  "key18": "4b4k4LMHsF78Yuuv1cP2kGejjRowtUBA5w57P2kXifvMsKXPpHsXekSAE2nXsGgXMVFhWPZgcoc7gnPiwm6c8acR",
  "key19": "5jyUkAVkBt1vhxWxrhPJbbAhAUoEW4dXZvEm1wokHu4Thvr9SGs4XQZrnVK4EKGzRTrmaW9iTAxcfZiPWyN3NRNc",
  "key20": "3dMW3akJDVyCn1d8ra5XEAzBu6DDhnug5dYPAA5NcM1pDUy2eEsJXh1sDa8kyKURoaYp5X7nLAJHcpoZhW8Zva2i",
  "key21": "4EYadVUoAQrKDkoKFvvXTV8hVvxAfos1gncdjH6XFvn1NVLGX55CfXTtb2NiVchCXC5Q9dHfNdYEVL1xZPCgjz7G",
  "key22": "2GMXderzDRjkg8TPNtEKqNh82YUAQk4YDsfFcE9fg7CbqwJgEswAR7nUVP8nnCeM5GMkus26aeePNMDoLeTVeRGe",
  "key23": "4Xw5tSkJ3ehVmweCsL4brErMRnE8SwhxCQuycJx5pitJYR7zEwZdLeNXDB3mN5bzojvPVo4V9dnEQTRngSv6L8kT",
  "key24": "3M9yuGnAfwHPo3pHD8ykT8xRVdyn3omUs8K6DaB9SRdohBJUkRLRT5wSxB3LJ8aFN2d5eJtRBBsA6zWYporTuCfW",
  "key25": "34M3NnXNcJWc8YdxQGguq2fdqtBbzsnS611ihwoFCmANsmHYkWvTZRMmsqoNZy2Fba4Zhk5omD82Jb7FEFG9Vkr4",
  "key26": "5Hk9atxY354ryJGe5s534TEUFWuUKyb7tKfEzLxAG3CuviLEoYzj25KDzqbfmFspJmHeiEy15vXw7x3crXxXgFoM",
  "key27": "4nvGPPYh1DUzhBNXgRHAFUzrziWkfLJEnJ6xaihedEoFKKUFjBMs7AHjmDtkLsEyv97tSAjcZiQioXH9XCoUAEse",
  "key28": "5wLo8LP7pAEbZchZLHyUstLYUUJX1njyA9NTzxSwR2WTPE953KQQnn49XKuQhLMLJ5HcHvC1L4q9Wk5aUgwmyagm",
  "key29": "5KaqXd1nhtUnBj7EBeczC6TfRHh5fDxeuMEyeBaY8Giyp8KTuKixpPMcxSf6nWXuNr8q9uSyU12ULdeSo7H5MBcC",
  "key30": "5Pr4qW9HwxRdmKW7Wj18u51aYbt1SV2m9qTYAgc1zmPr7JhUGGNS1KGWArL6vfhdAgKR3j1SQRxFh335cL4VF9YG",
  "key31": "39xPh6fgsWv3RGjAt7GKf9pJyoZhMdfDfL7rdsBzqiV5DchHVP8LSvHopQG4QNEjN1icBFSED3JaziWQT8uZYi8j",
  "key32": "3pLMtwg5Q1RfWzVisiwDoEkbzgRwz6XCfGRnJko3rMqFH59n1TBVS5KFNzw1nZ8jRQMKxcM8k48DbVDL1Y5WNkcg",
  "key33": "3E36ccTghhn28iCmYLaKXKmtYZjgYgPKCYC8G2AfSCbbdGzNP6xCQGsJ1WyM5yBNPvHWr8ULf9Bx576E3ahrSz8J",
  "key34": "3uJgmEGcjt79kXNZogNzFVxygpVxF9pWJzbCVW2iXXmBB6Eh5zJvPwmtSZUJ6S7ttrS4K6fhpAcdBHMKeAoHMaAw",
  "key35": "32vaAFMhoZwQuYAKT6RqMcofkJPLp9UZVdztFont95Pos4YQtFHvTQFiK1Nbi7uAFgmtvnW8AuWrAtTa2JZbFWXa"
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
