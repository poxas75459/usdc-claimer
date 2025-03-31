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
    "36PrW6FxsSthYhjK6e8mjYC7Hn7hVmcuXoL6FweHdXHhCior58NHzgxfmzy63xAVM8S3sVNNhEQd9RAY3WWXEP4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Azjx8wztx5sYAWaaQLo6kod9H7S4x1Rud8aKKG4B5Ev9aXWhJcuPAt8LUayvNTCPNPheFuiJyFfz4UcDJt56SSb",
  "key1": "5qCFjgjdFH1WTDGbFwdWR7jKB3KekBf39sxP5hRc9MWjRzcjcToonP6Kk7gwzu1LDVLkYk1NN6Lct9mYHEbxdYJE",
  "key2": "59SRtmHYZJ3ss6pXr8oSH3CrwBPW1NUzkTCg2wTFzTgfiC4V9wWT2FesURjY2cZzCmznAWN8WS7BtVrhcFim4ysh",
  "key3": "4gTYJL8uVpoHdA7j17cabVt8NUvkdvPRML2qzLjZYHo4dmHZPkFZHFboc8ogL75kqQG7ZLmyoNFUYW19mt4VwUwa",
  "key4": "2smrGwEMUTLpz8V5W3Q2QgxsnmCtivoz4KixHVzecT7UqUbJevYfGrVbpsbNNbnddBpUb6tcEnx833fqgBbrNt5M",
  "key5": "3NGwQ1L7MsNSvJ43FgwmXYxgNWuszjQX1nyfh4yC4HKTpbWtZMpgDZLHNaxhiQyxFtY9WMkAXADyyhNdXYb2e72U",
  "key6": "37PkXYL69gXNQdErfPQN1ctgyqXY5jXNK6wtuJ6fnmBhHSRXAxymJhgL4TBNLCNDXwdFza8LedXqgk9FfZmeQX4w",
  "key7": "3ffKiUr38J3VAALeDbgNSpJzn4pvMycf5AhjpWuJdK5RN67HL2n7zW2372Lp7bH2uxBZN6ZHdTQhcsxGnHqdgfFt",
  "key8": "4kYhVhjpwJPPhvieQMp3BU5EqtfZvVa3fVFwMvVbwBTCneNF5B4twzCjo1XmYe4oPS3poBYT2QDac3f3yQj9EwX8",
  "key9": "5su13mCF4fNRyKxwJQzP1DGwYU4LAjJ5mtPDPxAfv7FdQ66xJ2Z5BjVLdswSGnRmuwtpZiRbaE55m8VvxyQbYFpL",
  "key10": "4rJbb5QK3qAPwr2J9aJwG9hFKqYXNbvUmymkhJEnth2LQMyS1Fr9LwVQRgpUjEg5uSQdVeZ7qmGs64kDw4MgYMgH",
  "key11": "2HMZJQXmhJceAYcTGb8uVBKMVk2D4L1YEGKSEYFmuUFBne78rdjrHPYdWhENBurbo8MMwrpPBCSR5PDo9DtUfCpd",
  "key12": "4NNoLwkZ2iehiVzPRPXBKYLzfgknyJ4aLa6prKg7grpLYXRPjynMRdUUPEUZ1ffPdbYWfGzr34FUXRdYnyhnKCKp",
  "key13": "2ToErcw9qQ42TWnYkEhdUZJGM2BXkuaBWPG3eFvKtgAW4odS9Ey7Eb9ffGnW17uSSB4SJJk8fVco6FtcEpRqnnoK",
  "key14": "35EBJavr8AGhj5655Vf8tcwD3n9v7Ddm9JNPUGGvxCYnvVUbknhciMDNrXzEXahc7ztinePjMGxR2RLNnxK3dizT",
  "key15": "5LmsHkH9LeAMgA3xXdWwerhbsuF88KqR4zNtN9UMHy6Vyorye4VDME5zAbS2vsrFgWzaXRoGbjo1XggzHe86CVEJ",
  "key16": "3LRtT3WVneaBkFtiSDCGboEufYw8cx78fThjLkXhamBFmirhFprQkboLbaSg5txjbNjux6MMoUzUq28zoiH5tKw",
  "key17": "3THW8FrHD38uFLEdtVJGxNpqCXzP2hGa1eCTAAWdrAGWvfpDAxPNhQ2aKkFJD46z4ydDs8YYhwzw3oDHNoaiQvvY",
  "key18": "yfc78sRBW47fsoiEF67gcvaBgiAodzuKHmJoBzfCW3m7x2uXozrKwsRZ3Jqvz2pS4oeW6kA5pjJYER2HTyzK7qv",
  "key19": "4sYS3Y7cZdsMH84DZiKrSxasph8Wd2XqrVGjmtjNFjvRsWeQyLWib3RcuP7d4GzMX5C76AnaJfyqBnbn93Bh7EJX",
  "key20": "4LPQZc1Dc7Lm94ENCogyneuKgcexuKCd6g4udJpXSP4pB8LGRK6pS2HmjENR1kUXrpT3vZEwGkfgmRdxZVwL5xTH",
  "key21": "A2PKbAKUQpE4hfo2zcjanbEAA35HveMsqgHwJeiNzTssWx5xhTw9vPY7XB9sbSmEUCWfXu4F9dvWCh4q2BpRoy4",
  "key22": "3oeuBAAxzib8vqCg3iaGqHKBhqv9ySRpkd1XCLUnZ5kn9Drg2M4JWZQZwf42Umbi6kbVZMf3n9mLNgkqujFhBp8Q",
  "key23": "4RwK15rnK7piPVsiRkbKDvu4kz6PWTufZn1yJ9ZmTvkYxpkgbqr2FqvSGvjBALWyMeEb6aa7BaHWZTGfCu4FPUyJ",
  "key24": "3rHQrER7kWjCoo2bdrVpwg3L6RuKzLz8iHngHQ5fPG6Gc9gpsVhZxwtuj9CCN2GQczVm7ct8R2MBrnbvnmToYrNG",
  "key25": "27nTAM7WHrEoWY9hFViRB3SZAc13eC1wyCPaPQ5ZbMNEJc7n9sXf82hZJgk4uEernDPdAhnLuJBaMCNDNaN4W1RS",
  "key26": "48Q1gYyTHzRG76xQQMJTbaMm4iBHi47FcQKufdCJ2MdCdk1Vj1aw66DK18oEZSDC1c7BW7aCGXcN94cWEeJKEVne",
  "key27": "3V4W4sNEFYGaQK6yVNrkaegGnd9F3HqyDXHEh7Mm9Wbi7TnytnJEgfRJ23UG3JJCZHjmAjz59sKH6fhKtbeBtYBC",
  "key28": "3agFKJuFUnAPyCWhMtKBr9RMrnsyF7Vw1goeRbtypNdUTBPauQHKMMinyPgzZQDHyZjBCJUGE6EGGDWH62BFys2t",
  "key29": "3DFDrMgRtEBoiEPSvfLq46KexBaPZFk6xzo6qvLK9kc8ox8BtDMAduuruXpyvSAUsdT9ffaPKrjrDH4n7qMb9Huw",
  "key30": "45mbr3jPof44TyioFfsRMmNdyL6tdPrHP1cVJ2Z4NG1dPRwGpShJZaGwiBHLbLYuY9BL8Y1w5oosLPzoLVpSJXm8",
  "key31": "4irHdEGNNqAaYjwevaKM18pjvFKY2JyD359tFphVa6hxuGzdWqVFvxUZeVhPdGXscfULPNcwtwrx9Ba8tqHRU16v",
  "key32": "3MQMfD67bLX7ZtExQeDLqS9y2d5JLBUmRDMT7oD3x3xWbg4RQKuZ5yuefCN5aNZainYcV1t3AeAxzviusGeSsKbF",
  "key33": "2YZe7HC14JCeXqRqQ6sf9mzNzMQ5QwsbDidWa8tWF6cgjiiZ55ShgXF4iiTgbx42Zso1gwmN8496rBswBprWfSs6",
  "key34": "5SArWLvQZuLaV8YmobQqeaNrzB4gp7khBiRdipMtS6WR4pAmoZ4kYKf6VR9H5hqXd1nVEaHSDQPRCortKd3x4i3k",
  "key35": "51o6BQY33NKktF5FbrjQ9V6HJSAryMCogRGEo9r3cdNidaha6gjs184kBHgHPLBPpoKNgjj4XprmJ5DCZdehemYn",
  "key36": "5fLX6cqWbYUFZ6iTZBg8dNveDHpep7kSBTzBouuCfG1ZZN3X2oueoMx9qgrZseFpic1xC8fTDVrzNXuHPtH25atA"
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
