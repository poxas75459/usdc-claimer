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
    "2N58geeUPqjmE2THH3XQjsFABzAJKbkgFq774bysQwFPR5aEfBV2XLjZK5sMn13t7D7dEW37zS3b1tZvMnbJrYvr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TjCMbMi5MnUw7hMiW3h5xAhgDqmrpFGf2MQDyykFgvkSX5MWQZEsgzksJjvKPpcppc8SXAa3QaTYSkvceV8iJK6",
  "key1": "4PnA2JkeFCZp86rruCkkwg9V1e8YKQiTMkY3AJNZr8fapogRD9vYqr6sVu9iFQQYApjxBvWV11UuaQCYSRNW12kx",
  "key2": "HcvCYdojE3Et8dvEkKs6xdgZdvLRefCGXnjp6rTaBX46QzwqrbAbrwtndAhGJmKHXfnwKQ4cr4GisTReWSQYqUu",
  "key3": "ugJonQqczzPTxPyHU17SQsLfNAhoXZsYFcPkyUHL9JCfQumXZnryFSpC5B7rcEjrnC96pihaAc5etGb7n2ayv6N",
  "key4": "65RnS5KbgTjgTzRKgUC2QTPQJXEZpVcj9siP2JfiBne3Ym8dfGFM5YSpZnveqzRd59SwYa7jwxtZ1ybdm6Z6jQfj",
  "key5": "4zR3hZqZx7ipQxBo4XN4daNowwj1Ao8hAbffzuDFyRHbeQDSZx5cjqf6BtSAynKtr6CtzaSoGoVSrVC26A28zKmV",
  "key6": "wpgkuMc3jErTHRh97DMNkEYsLoXVpTmgNa7LnD7gm6Af5GqDeJf8ifexLTHME3os9JFUpqPadoXGmMNNHZ9kJ7T",
  "key7": "2uTHWoU2va5Yb13Y6jvhCZMn17zhArmViU2n5aATvbfrGpXcttRhiMCkZ4jyi1siZ7HPMAeEBNjwWGsZhFzxcikN",
  "key8": "5vkhxXxkwaLJu8cxTU5HjQHzMBx9RC9GtScQci2bxsPmhohj384qPVtmrD85CcQGjFuRcvNFXXJLAjhUcjSfjqLJ",
  "key9": "4XgFpkLZzvfKfc2QnY2JfFfuQ8jPnL5SK3Bqj1Ms5mxTZi9sNoKeC1B3ZhG98mPSQwP2XVBgByWjQkACN45wKNLo",
  "key10": "2ESSkmPvvP4ANjJSGVYzhwU4HfLt5xgkKZAiCHqhHWhmUPgVrSinSZzzuTKAexvssV3RkDVHfmjiHjwdsvWBU7G7",
  "key11": "5oxYRhGtie89e6Yivvjh1F6N57sCTeGkfk5ojqgoYg3DaDTjWkoUf3MWzRpw7D1LW43L7sXALqVm7rLHGb7UqTF4",
  "key12": "4zUf4Thww3T5QvZxfk3oE2LbmkiQCBri2HwuYWMPeJSHNppNfkhau88gEkVCfoegosDpbiXMrSuk5Vn17kd7QCsv",
  "key13": "4VY6M5RprYndDv8ucy5tcBFzmDKz8WHPXtYwLnHGr7BpBmwgN5XkUrC16PvqCtRfm7WWGbjnsYgEmNrP79rhhjQ4",
  "key14": "4A9eXGvs3ueQvL2CAx48jyZS9KSceBi7hhGRT96J4BVa5K7LTRrzQQ1ZzAHhomeLgpzPKXVDa5guFV3Rn454FP2m",
  "key15": "23DCSMjuJvCT24nYnieha5bgE8DeVAgn5TV2dQ8wsavktkJDnA1u7DjmRWEHNtqqAoqV3Fa57yFUHCEFd2fMSACG",
  "key16": "54p8y7V8WP9onhprYpU3mzzaAUJvr1f6QmfWMhgzMjzCxdL1hvpDGvgUKAJnTjzK2m85T8KyWfUte2tDMuFkQ4Wc",
  "key17": "3iDc35FNtZzoTwLnYt2jbKLZHXJD7nrRu7t8dHKAUTxna3dbrgGoPcHvS2KSX7PmbPQAER6rPr5UDurEGs7YLk4R",
  "key18": "5UafTNevcqY9AVdGm1HdL1iGsVd9xdm2S6vrs7D92RSPEdMHDC1zUTJD73xtQ3ipcXdwiABmyFdaxLXpHPJzwbF7",
  "key19": "2KUFt6cdrguAAVB3vU95B1vKJE5vWvjtrZZ3CwC899KQXeTXcHRnqgYUSmGUe8BQePvMwNoGYuRU7e1cnR5WDaGs",
  "key20": "4kzmnkUaoZdXwRbHE84c7rmwcSyYGDFkxrmLsXRbmURxaz2nEEmpebPWv3XVCkzUdPYGs9vR6SeWNbtsq2i4QhpY",
  "key21": "MgWQjyC19HKjnNG41hsEBG16zHQ3HTCyNjCF3rD9vBNvBGQFG9ra8XURGUupxtEWrZMMg5XaDmfTJcaBN3RgET7",
  "key22": "KVDdmoVAszegXd8AeiQUeRNcdeqarm5QVcpZUej3QL9VMFZf9yiAHSrBWqvjzocofXv14evLNP5HWaNsSF8Kzy9",
  "key23": "3dpjvTWMhhQWShzk8arR39Lf3p2MQ21ZePJhyFWSVUXpJr2BgeR1mo8PGnygsPtmeuhc3yS28MBq8BEJtv8Zy5GA",
  "key24": "4HYYNA535HXFrWV1agEWR2qyRzzygtGQHV23fDuTRvvcZ9mrAnkEm9pHBewEBE2Tv1MDPKH8G8GXcR5CJ1J2kU4t",
  "key25": "228EvbEnG5auZ2DvToohBB9T3hnXynxV7xhGV67gRdB6ZbWePSue2mv3bHNWSYbP8v7KfQcJTFy5TSrdYa2jcyn1",
  "key26": "64PAFQ9LitL4fmCqNBtc7w89ESKwCwbZdFCXyZLAz18PCfQVrQHpMghLNvqVqgDSguHtscVuXvdsjbZ8nnZdBthg",
  "key27": "7x9swWkgc5JpN489p1iEbH3bRsFyBjHrekyHXYX2Zv1cHRnfHbdEfGGpxUqECJy2gtRKU2TWbLENzoChDhsQhhS",
  "key28": "4TwWTmpAiEk54ABffQqHcWEYomyDgY9A2cZTsBTR42rnPLTkdV5WbXaXpLSwd97s1btcFJnDUfo9j8XsRbWPF3G8",
  "key29": "uYNqZ22tUMAvFF9NSNzbvpdKCUL8JeTqqeHvLjvb7bfiEmKqt4NFNupUxJ7tgCjG3GqWnG87CKMUAVuvUWjjtdW",
  "key30": "whP265zhkPVQAZmCu9MBvDhsNzUgknN2PxHuzCAK2hs5oU6phXKAwDHj72CztEqBzrLzXhdyk25WPpDNvduBmpJ",
  "key31": "Z3LZKz8RoyznasyPfu6h9TWCwQfGHd8CMjCYEpedGswxXJmw257WyuLumooLpDjYzbsCZQ3MfRg83BFJqYgttkz",
  "key32": "2CHoT87CHRbnVYTuSUBipweuPbVPcKdgEWHkohRH73uLbVaStLydq8X6aDgjmxCZZDKhQNqGy9EQ2U6VRzCi2af5",
  "key33": "3XLNTjQcpDWYYmCfd1xZr6P2ENpYjooqHFT8haMX4DLmLxSuKbFhyxFVxC17apaH61fKwBoMN6Cj6Xyziak6otrX",
  "key34": "2a3gi31Dw7v4Xtj4AtyAwgHP8eQSQP5aMG9DmyedF534ycjaZr73JJPZpQHW5bme9YWvJbqHByx2K7jGfUDNtdFJ",
  "key35": "4pwoRfobjSp99YVfHowYgyt2uzS4VZDBc9WehJrnfEqus6sBCVBkwvzpkSc7NbWthgAJw2gsDWjVZ6KcznyWjNoW",
  "key36": "4VnRWXcKkd3AXgHbzbR2VMQxRVjbnn4eqipHTrZ8upVTVdRGXa1FhpJqzcNNo4UKkSe6eb3D14h47pbAX6hriBc8",
  "key37": "51tASyNNkRxHbJoGyKQNJzyLKPG3MMXxvu1ZMUVphCb5ofcFNj4ZVZfnLTuRvi12P1VbFyUYXM7yg1Xv7JfpheCz",
  "key38": "4C52eN7sz7ugp38bVWvZDMrS7DFfTkGUZXbnYnL4zmRaax7Vz7NTZwa3H2EwXXt69mWM5VDUVBG6mNKAy7CNVy4N",
  "key39": "3hEWfzTD3w2P3fSPDitfmakhWhrkGRZnfHEUoZsrecbCuQnJfe7uPhvmcXUrJg35YUrSqAq3QXpYowLQ2e7aMXuv"
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
