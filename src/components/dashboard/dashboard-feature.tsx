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
    "2uCA6mr7d1nfexcvs8Xe3YSzx4nSuBBa1Hm4MZcVcs4UxihqvgMuxGM8Lk3sV54rokVmBeCxqeW36fM7K6mpsRPZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NipVPSvddeLM7zFh69TAc73DtdS4q5hugojWmQJ4u5aEcPg4L4uo2gmrocQ2rAfARJMqE7vapr5ro9MCj1mDLmd",
  "key1": "2WFG8Uuw2GhDVa8cEYcwuWbZN2r8yk2ELXrLMdesoPpVDHJyL8rajbzos7YWYAoW74RNR66qLgwyq481z1w9c8No",
  "key2": "48WgS9AYX1iThfDreaX6svxTkhKTvcvQDGugLX471xUdzew5uDTJLWqgLca8U3YeH64ncqRsJ1MXXa1tf2kNDgVC",
  "key3": "3enYrUEFYaTp72UVTzQTpWAeiEU4VsLsKFSn9tSgsJ56m5indYEo8n4UUQdjuBoJSYCQdMXWTyLR9i4zFSoHeBDV",
  "key4": "54rMwjP37hT4WkLKjWPXUtcMkoFYfEEUcexD55SosT2L9TQrWHKNTho99nVjeD4BhgHpe4g4mBVA3EmUM8D8SihU",
  "key5": "SAHWa8hjZJsSfKsVkg5UVttsTDfBTb7ArZ8Y5VrsjDNXgCU5kFpedFi6HaoFrh49ks9H919e7aAzFo8tHWrK45x",
  "key6": "2C7zLPixnzwqLbP7XSsP18qGtMmxNWfiWjZSxxALTXhszW8wb84wEMphfEDyVjjE9kaaaCTCnoNNQWmYMfNyt1Yx",
  "key7": "2e18kk5e84biiT16CLATzH3TuQQ9fSPSJ5kSMd34BQLmq3WeoyaYHcnoWP1BnkNMuc4paRUTcQ4zV122JCPPQgHq",
  "key8": "4tJM6FfENeX2FVjxv4yNDuHmeBFcvyQmhVWdtTyg9xZvLHLurBgtwi1rJNxhh5Aw5enPDpRdB6HkEnMAgHUWN1dx",
  "key9": "4PUcK6kxKpHha6J8zWHTjYZfzVbJRf9LQAARuwMC5uFw71x9W92DLXqDVdMS53Ar1UvsvFWZFrJWYManXnG4afRz",
  "key10": "31jBQNm8QLWYthA8xV4KW7XJ2946UJE3owD7zd4RUY4G4QFih61zGjj9bo5JJohPw55UTS6Gy41ze9uC3HKKLBCX",
  "key11": "52cSp5xTSvGCwjBRrHY1PqmrFHaW5kmFUKXzEfiuXk1DatoKFeWUSUEjsK1x7QGXkuJrikt1Z3U5sMEr77WhbREE",
  "key12": "5X7HskPXD3nCQbJKwG25emRDmTvxwf4MN1rVdxyHwEVXzPMLudFzb5ZP5CZqq1H7S8ZiagDbef5ePCs1HwKjucxS",
  "key13": "4Qk4R2JVVYNNcUBnC5KVHFHpyKDHAE3mHzo4gu6k159Skx6GzShZdFDvpm8Cyb8qjCyFPUK8ytYdgosc5emhfZRZ",
  "key14": "E1hsDFGcwpfNpgfH9P5N1eTqTeMGgHArcu64G11yLgJ1zy9Qi2wsxzJz6MmWYVBN6y2JQqDfthNPddMGLximWAs",
  "key15": "4DbRsqtqvXG9B4qN5kQGdsDJ6hKSntPA7SfMWXq6srAHpQ5icFf5MzknitsXWT26oLN59Hfxv2jhCX74PSN641pC",
  "key16": "36oX2abQ3uXgB2uqS8vyZ5aFyqBPpT3Z2NohTqiLr5DZGTEqRZJC2chNSv3wYbonrhQqi7QLmMqQ2rhyHRZgw6yd",
  "key17": "5GX8i5HJfJL2xuXHG4pgFPHrU34N1MRLwxphLVVrAoSCy7in71XDccHFVGtQbGPxyuhHGUQxQrrfqTNdLe5KQ7yd",
  "key18": "2UBxDnWDF9Bag1rxS95DmJbesWvJVUeKTzPknbbBZ37oWHqfZ4wR5hBZypXzkEEQo9zLieQoinzq2KqDWRBXuZBK",
  "key19": "grrHCHBwPcChB5SQPUxribFihgmv6qxmpxP3J8T5SdaCcVKECqF9fEYZVC1UNrUP6xWeRAm7AyXizBgxSN5Ajdm",
  "key20": "2wihvRWts5Dou7BrDfd52sCdedUuUJwMGG6orE9RPDFNC9en9FwQx16uHGeovmmAjVMPkuuz9AkuKDZokJjm9EjL",
  "key21": "JzMHeRC4vcFQvTqT1h3tub9ybwZrP6eEM696PwEFFkX26hdWfn63covbQ8YfLNLnS8xG67kbzFtD8L3SXXdBZwU",
  "key22": "5inTY1WsbKnhNdQYGHGtKhEBNkafuEe2WKNmZ1tXYUgPxTms9ithsKgUukLXqTaywQgHQmqU8CNkgVTRbFDn7CcE",
  "key23": "3pmVaKU99qbLvnZWvkoXQo7jwJfQTkPdYtuEKzapxMqV4XjQw4XBtCstC7BDNTbtbsk2ZKeHuK43d84MFRFFniSn",
  "key24": "3GTjsHeK6447ypVdUWXAAWgf4DmCAxW5wG8JefJcLyHsrwiRdLiGgkmKat36aXSSt26aaAiRJ4b6mZrdUNivgt7m",
  "key25": "4wQGb72KV71pNVaXiVm2cwDVNHb5jVR731uw4TwNQdEgsyvxXJwMaCTMX8RiP2XPTSyMPU4papYW52SYMKHA3XaZ",
  "key26": "q8vNHEA8eZhWx23Mmg6Ri8p4zk1fde5Xzv6iwYQBiNq8iR5tpEcswASwy52dELiJqcjQwTfCEjaszQmVTMgBogB",
  "key27": "2j5rJxQK5dd1Uff3Jh6t4jWSggcVhhikBm8aMX6MXvVojSEcbbY35kbjnHaCZHgjQsaVYrp7jHxmX56MTDMrXCNr",
  "key28": "5YCKWEAK5wpEVBh3H13gEnRduNuzVp5ZZwcFdanEUh3q7c3q7PMUwCSGYkJgV6qZoJcy8LfpgrwweCjsu92UkVBe",
  "key29": "aB3Kb4LgqrSDiGPwNsQvj3por3jUEb7EcSQQJZCfHN6pTkLGvYWoepzhVpS8cFxRL27UgRpKXyMK6MNmaA2io5h",
  "key30": "5KbpNaM2DYaWgmcEwAiFzdcDegsZN5xYhNCCHxv9BJmcypQJHKsKjX3x32BHPXAANmt2CzCd3xtm1NRyzW2aS5oa",
  "key31": "3LVdajk6RdreCDn3UtRCYw71vaiN5TvaCzSpyKQYks6CRFWseVe3bjwrUXkPpEqh4QMczHx4WBchhTwEw5JhKWmn",
  "key32": "37yckkkhbVkq7rP5YU4ob7zr2Xwts2CkecyqZtZLLQxXMarCn22tLkRUDnZggakQiMmUEQApuvBbsFPG7rCuuGGv",
  "key33": "2LQamAAjTtP8jHNhypVM2pTQa94byZMBBCEGzyWQwfAbusjgxHHtUPdAcHYbP9pht5VtembyNEvDE6t6mLfgQsxt"
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
