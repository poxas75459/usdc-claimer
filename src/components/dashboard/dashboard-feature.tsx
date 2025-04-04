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
    "451ZgUDExGDUVKeEEdEPtGevQmgBP1hJCXG5hPzopo1ihvqNUXdd33xkT7cRGBFhXqLsq9yM5PY915Sw54EhtsVh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JCXvqaERd96cKqQ8XfVEcTC7EYUwz4R35sQS3EuHFyXduUCnGkKqQrj95PjBcL2hD3Z4b8Vv8JdFot2nBcrrEf3",
  "key1": "25oGeEGHawvEcdFAbkbu8BMvgqzXnPT6oKWLPuGeMX5rqRzii2idXEaZrTokwWLAWTXBXEPGpjeZwk2VAubqn24E",
  "key2": "5axt8rCsTJAmdBZbvvAShmrhaVB7PxtvfnAAnHnR4hotxryfHtUf4bD5VTAKHFCiqhfQxY4h8DyFB1HpAVDbaXmk",
  "key3": "3SDgBeQ3TSsWoN2VBV7jS7iyqbCykUnaB34YcXzm8YQHP2kWjax5Z5Hwc61YknAwt9KFLBnKwnm7W2uDARcgV5tM",
  "key4": "2soysYRwx6McG2tMbh9AeBhYLbzNCSzqBrGRg2cz48H6mfKB3cArWCXKxLp8JrmtVBPwTzhQjXy3GBfbujkNt5iZ",
  "key5": "qCS5aH4wv8vafVNNpB2gSGSZKxh8Uu2gYKy1u4SgAnBmi6PpCpbzCdNY5YJZ4LBMBJtya7Mx8ra4r93TrmdB1iA",
  "key6": "2YTVRWuw4eEXBrTQefAeiAYfThUxfagLcZLKSrV6T6rKVML7WqympFqYShwdbZw5YSBisCXFvus6NAjaKYHT8f7i",
  "key7": "8hYCVXAPpSQoh1Voy3t2N7hnQPLapKVP6pMJaczZDGqv8mmiHwouR3SvaBAyoJzX8Hoh5UJuoAdyQg3fhswtTkt",
  "key8": "3iGBRjj4MqKimxHX9fKZRyQT6DWXCFQnEy6pLrbnwm8sKch6p4iBGfsUjYQKhYVWv32MYJn6M6rTU6NHdZtGNAxG",
  "key9": "3h2bCwUTaVaTqtoNqzbQwL33dzxy28HsWWuBn9dW2J9nrF5QpAXcDajWd1mgAShxZEyhJnNktNjnBwXNxPweWCUs",
  "key10": "34JWwTbbuM53kz9paZ2e2gbCwEr2faRCNj5ARyVCfzk7rnLKi4QXjMadYBcq6UZNgnD79mR3oM2TZTmcNonpPTzR",
  "key11": "APHwCp21s7S7qodmQDr1htcp6RRmAeSCTSmCZTrVApce8z2QZP8QeXNNy2qLNWpvmWTJMUDvG5onTU4MDx1rPXm",
  "key12": "dRZxVsBkaAYyGEWMBpF2xnEmXrQqoH8RR6aDFvm8UYmoR8Zv4xpPYW2LWLKQpRmwq9qTvAUqpU1Y9X9DRNLGUC7",
  "key13": "5VswZEVGGV3hnzLqCbNe76yJNi8TWh7WH2eFQ6HamSXzvLfY2hD98WebU8VuLec683FmYjpM1BfJkUfvXdHM5L8X",
  "key14": "23Gg6DArceW28dnZwRqAVYxCgGYimmEHRQiPFDd5rTkDitrMrD2d9odSaJNP6BvnANSJL9mYVg9KcS4kk4bK221j",
  "key15": "kdMnUC72v3Uru4gRR3e6rdK8oy6mWrJ6ra4ruTNRknpG9d82jVMwTHFuibPfUFtbZMVdxTp9rgx99NjZzjDskri",
  "key16": "6uCfqA2RQ9m4UYB6Tes5TS8w4j1BJx6QfGc5Y3FoLSk7mbW63AfRPHBwRMAm3R5XKCvTFU1rifch8JWLShA2iiA",
  "key17": "2JiwYQX7FfmFS9q4v214m8Ksh2D9d9L4DsGNKdDv1CGkWAe6vmJhPqVsczjWwzdFiw1N5LrXCrujRRRYuCgkBjCy",
  "key18": "5FEmTYjLn3u1xHunCLaFn6Fi8RBNp7ZxNKeiZtRLk4ifxXAkRn3vUyCnn2PmTZ72ZrWeSpZweeXtCWkPypgK3Pv",
  "key19": "3wZDhvxC7zf6AyQtFhq9qJTHj4aL5T1hBDbEqTop2dGBuvGoBYZhpsPrgaK1dTgykbBPwoatG3gc21BQbbAu3D4u",
  "key20": "2R2K8FrNd7uwe48UVjD2xniiqNNEVt5hUrtN8pZ5dZyY4Dd5ighJ5NokE2qcW4qSYBoB8MBHSSvS6qaJ1GHpFBsr",
  "key21": "3mk3arMxJukVtYd5gst3BkRKT4WasKZkNfqPp85FYM9XU87V8AYYF4NtwxkZzZRYmpFsw2jd8vh4MNL2UdLLxRpG",
  "key22": "23hsNN7VygehWX4SpkwyimRUMsEEATzQgbNgjd5Lz3YcEmLS1QZBtTsHZwLyMkLB8qzE6zroQdAoPuC61CaxT2n5",
  "key23": "3ChTkz7q3MmQhFYmMAdKKL5kquWijfPzLBQFHie75KtbW32q9om68KYTdBUTFzStxdJwJZG6WjbfRkK1kjBKcVcb",
  "key24": "399LDg2cJTUDPt9fZggpVJML3zGBjRX8Hwv8HQyYd5yHcXvLN1JAHhWdxRZCCHe5kwFD9WX7cQuZ3BqxgLqBuwm8",
  "key25": "5SaYyWAAiDQ9CoFkoeL2VFPhQHWBsKbLtcdPKxpsczKTegVfCMUXcQhGNG6u552F4mFkFxa9a1RiGD7PHK2vcub5",
  "key26": "2TSQ1xJKPjx33w4q2KLC14xihxWp1P1K9CAYf6yrofm1y68UDDNm7KirYgRezkbWrXg7oCPvHfuBUDtkkXXWgzyN",
  "key27": "5mVazjRKuWtKvFdMCKRZL2kJoDWiyab1oq3gxTt2UHFHAJL92WHJPk96wY2M8uk9DERH7CftVUEhFYVPsgP4w72k",
  "key28": "3WV7zdsZAT23eFGDdZ653zkLnQ35weaibz6Z4MzVgAJrut1PpH4sLbh8WHHd94cC1jGpEShNqbrRegM61xhmqeNv",
  "key29": "2bVyskv2mAXbsVHtFPkiiynB2dKHUP9Zyp3GTpm3HcPo21MPp8yYYLKevtWgn36HGs7Jw1uHi2cHNk4AnLewxqki",
  "key30": "JNRAJWvjh23M4gyiYXY4nrZfcxR9A2KTpXqMuMPngZw18rBTUeDsAhyUfHGZSU9YNxEEJzkVVbfjYf9XY7JCZg4",
  "key31": "4qfnSjTAiAU3Bad195tR7KovEFicE8htcQu6bCz7YZ7Gz99JVJLBq48kynV871vamvZfgAGpLhx9LNzGqpStietA",
  "key32": "4MHqWuFZV3pT9cdV12tJAwT4FkXJNTrvwe5xPJmbWGgxJMVdd7xkG717Lx23oMmF6GUPX71vAZJAwXBQutzbqGsg",
  "key33": "5bvkJhSKDPpKpQu8naeF3gnPoUXRbsiEuS9VBWtkyBkxqQfcZTrAgGKHg73zBHQdwVhL2FwFRsVvZeeMYWH1ndUU",
  "key34": "XCumoi6VYLezwue53aCbXndcxVhTazRtZ4MTYm8bTAYQ51BooeX74zr21DkHRDkxPNpP8bJMG1HK9mpMkMC6Rhf",
  "key35": "TQoeo9YapgwGMLSFqFAdrzY3M3bmNjzx98pXGXLKpkj97ySf9xK94E59gE1cr2bpJQoxrKgyj1tu7baoUp8dKfJ",
  "key36": "9dUQwiiSSYtGBhoP8dYyXZbXQ4DTr1Sp2fwLnZ3oM9A6BcYE9rZT57Y2K14N9PRePM7P1sQ9idzshRTeoVsDtu7",
  "key37": "28Mj6gopnMk1X4tAEAFqEeNBakRqWfZPRcZqpMcT8ywPzsQwBZv1xtM1K1DsKvdRuwaohFtgdbp8BuhbqCcEeMTp",
  "key38": "5xN8bNphj924UnenvDKbyENh2g4us4oRzLFmmTgVypyJNJByqbVRUnWgsdVjirqxEUMNPrdAb4sZP7jVWdN23Eht",
  "key39": "3R3HdGdCEaqSgXk2ARjhjXpmypQTvJ6eeX3gxwjGK7LgXLrxCBd4Ry2pPtbbMBmSwUoTqQW9c5SoW2DYDqcs6AWF",
  "key40": "2HFfbJ4ZcFozgyvXTdubvxAANJqmU9dAFK6rExn7XW2FwJkSGLwf9fty7kwhiANDH6TUbJG2Anp94YCoTtBcw9WT",
  "key41": "4WcC7s47xQGKK1H8U1i15KczAr2uKKkyPiciUyMHA6UxPkFXmBuTuY2KfYNNo5F4tQ91b8PCWwjF64fdWNG28u2F"
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
