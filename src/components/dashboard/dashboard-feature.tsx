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
    "QwnwwKaKWBZ9QsD8i3mG7Sc45S9YEDh91bSCMnuKpQaCmDr7vX9EYRsMDwmLawXeJRKa568wxKtSELdeoSsRyKp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g9EWSmWaJwTGVe7f88KfAgJvYJrTwETnrpNgMhh1wboKyP569LK9ZuPA2CcySGrXhmfoV76oGKnyouojxwRCXk5",
  "key1": "2NKfoYXSREQvwE4tcC2zxqtvy6R4k71ck75QgmiypBkNSaq9Tn3yyS8FQWqirWp7Yc2w8VaziiQfY6jfvwa9kzvT",
  "key2": "4W4eXmSeywaSmAzfhFP4oGLRKeBnreBs8fwR2Ljjk6UxLddutuY2ynyGDw6qQGS1nMTf4wZaCCnaTCD9sQRePfCE",
  "key3": "4sGAjj1fpFLm2H1NCAyNNq6dowSfBgfe6bXo7amNthJrcLRBfjTXcUQ22CNLdjuhncHpJSbw2mY22HEr8HpSPMm3",
  "key4": "2SygX7CBTEgKShDJUH4gySyBu5tgF7sE18y6tBWSMMz9QGacDkysXFoHoZAs7AfFjKXuKUMXMMrVGVn7QyLfaQfT",
  "key5": "ZeibSEWdoWL6XQgeKcvRoig6ksoDDSszMqb97eUS1h76YtzZ9vR2uu8WmD2rB4Sr4SHrMFvHYaE8tm7YDmmLWnm",
  "key6": "4gE1n5CKqeLLSmYY8EcJSnajALBLjrS6KjeWhLPVe3nptNveXFmmooTfec5WS45ENURaoXJ8fbWmSGaYGV9KRq78",
  "key7": "5nK3ofK2kf29VLxsxvER3a7nvqpb8x5EcdBxczk7UBr7EuW2eMZPYyZfiWEtnPqoyjgA2qZ1mEFT7EpxD7zXYjNz",
  "key8": "yuaEKwTLTmvndMoVcYy537iDQu3axe2pjhzJ2d4HHyPfp9YtTQnQUxZiWGsjAiXo6tnNqXmvS9SmEiDPfsNNQLf",
  "key9": "3UmgJKFUbt46yPgnrdKTxvipHr1yvtZVCmHCDqEmCL6r3tfsY9xatgNwvcDJJRPFApkPe8EmDw9ae8oKXppTCMvJ",
  "key10": "hP4dSRMe5Gsa1UjsCWBfSojvhiRfHxhNF3hs7Mppg2mF27qdh81BHUEtqkYuf4DfkcDruvYgZvdHpyiz3kjAQgG",
  "key11": "4P62TkHpVmPC9g9xR6PwqjZPH8w54k68Hqc43ci7nd83oaCULHLUvbAFCPQchhqQx9ydMF551qdzJbRYdBVGVmov",
  "key12": "paiCza2aGRphDhYN2AFL6eR4bnVTkqENS1epvMrzdJKsEC37bvK9xw3JtXWWg7ECiHRNFgrY77VMK3eAm1iY349",
  "key13": "PDMNXe1H3kHgajMnUSYQBw3e7dHUT7QMgnpktZdXSkPiWN7norLGf6DE6bbURjkji6VPt7csYqopisSFf4iBJAt",
  "key14": "4RbiAYoM5uSqXmGqVFJfJF4XisxskQseeQgaeEnmDbLwswhffxvFFvPUy6A3pPqx24BMPXD4JWmdBSipf9qiTT7P",
  "key15": "bvcVjRfq2JVAHzb1Q4cvoht5Fr3EpuLn8SgBzB5SE4LfzkG7bLUqqheyY1vkgKSuMEVSWFmZqZjBoW1vzXf1cM5",
  "key16": "4oii8foQ1UFiFZWHDNUs13cnRncfUQxHvJRVU6N2EWxLHWdV3GsdVp3M9nL74iqQWsHLHxLrRv37rGYRnNZUZ7R9",
  "key17": "3vfppQs27BN5mUBNtYzcBjx6TL9vMFi3aJfQcTYz9wmqfHDQFhFKF6oM5KjWXzY2yn1deK3VzCUqXnyi2eXNbZWk",
  "key18": "2EUENPY8cYw69nX3mpUeco2AMNPFHZUeoWZwvfTUWx4WsuU9RFoBSmpbTNWzVTrHcHzbZ7dfQUSR1jYsYViMJfg7",
  "key19": "3gZqok5JVM8prjv8pSfP9kXrQvPRf3EM9EhonZSkPEoM1G8rvpt4oMaWkYvA4qdoCGNg8yThALzm8DkQuZSY41L8",
  "key20": "5BozYohPy4Kmz6TVC7rKFeqxuFBnTewZcgrFUBZSvCbw5s99fpn3Fzabg9FDLgPpULauAzGYsg8aVZKZfNWV3Vsw",
  "key21": "35jfRwVsdeCVBPgZro1cbgMMUw1gueDRU8AHgikjxcbEFg1u9jW66q9GfRERMVHVWu9jZFoNnEYo8Vvi4qNCpo4h",
  "key22": "3AzuEbhZVmMD9bHTrWMsfp3CXJGGMtw87VDQrTkhMLPZPGEcvd4T3UhKgxbWDwDf1ZQmhPEdF5hwJpjF4frbvY7K",
  "key23": "CV3ch2nic4bWv7xWr8WVZWSCkJD1jaYpt7MM4KDDvsNAcYf7VCqYnnz38MpguimWaU8x271Rr37CzwRDmBWMLfe",
  "key24": "NhXrjAikU8FpCJm1cDbDAyjEHQVxWmroeeqLrmkyq5VmV5PeFdCz4Xb1tanDCzJA7cdrxGsvG65wH4TTXW11Dvr",
  "key25": "3xb2WY4sbnhHWx2sR3ePMsnyfE4P78Yex323Kf8okEHYLw57odmm2pxWLB96BtspGsP2rkCQ2nKSrb5YXDgbRuae",
  "key26": "nte1f1xvzxn1DRGK1iT9pETfjBCxApcvvZLAe1eJruHmu5pM5mUxY2c6EddTzNj8ozzgeGGc6wqGZSVkHn2etXb",
  "key27": "5344FqPakenNyUih3YpnAfqLWvXpAHgVRwHA7sRCxcMftWzBJZPvw8e3idZC7pYZKYTtD6iBp258u7guw8wjNyyg",
  "key28": "5HpEhqTJQrdPH8ysZp6c9W9wYd4DCbeEKgro9z3ri5z46QbmRttnukffvfb1b2fmYvfknFBVhcPCC5gw6zWVU3fj",
  "key29": "2Gy6qVc13mrXUwn9s5eUNvBP5dJHCXturU8bfcR7VS7YU8QmPqyvTnsGTJkgbtPAM65hKoj5kM2usTX6UmKRE4zk",
  "key30": "3VCiooMUibu1NJNG7TuyCwSRLnqjKEZjxF27WJyzDGubLuFYbuJFydh63s1qWs22vdyBx5byzgKdsiuzggrSV1r8",
  "key31": "2VVRi7rya2unJDPhBQr3BDu4USkWpWXDRjR3XJS8APhMsQsinj8Tjf7YFUD8SePHY55dhasC5RGs7DTg2cms33u9",
  "key32": "s1nCGLKPfdCcHwjaRmF58Dx5e2RVv36wAbkdFGJqnAwpdGDmEQV8fCHWc3mpijua34irsEBV5TCgS7fMyoVCBXh",
  "key33": "4VGCfXcFXK2rYCq3yUSxY2RagCwgESV2pz6Gsa2xvDSnwPiJFdSgYzusE8Cv4BuUrqXUC5XEHJMr4iKMfPVTBD1h",
  "key34": "5C6eCSsQzwuA7M9VEGAqe5BL64F2TQQBxjsyUk2N2xJVqzG9kcgskiY8a8LJNpHKLaU4xiZuAyNy8vvF5oHLpdyb",
  "key35": "2MPyBv32wx61LJMB7s35UDtaGaG8aaodT5WQNBmvYcamnV43rrBfP9B86Rucpz2UKW12xyHc4LJx8U2uKi91uqMN",
  "key36": "4Ev6LKKY558ZEz57pBf7cRGWhs4VyasexpN2AY3ivFZxCbf2R6jZYdywqwRX3v7ryijEKpqFiD5QvUiSKpK3333a",
  "key37": "3JYStjb69xd82k1ARmzm5VGM4muMdihNyFubPBvZXa1iNNQdE2qFtxypMVtp1uRDE1t6sMQjBzs13spZbcffb4ZZ",
  "key38": "2DWRjpFjcWgMe4aUUmTQHuu4tPhsEfMWkBqJ2D1uqBXzMXjb21mLy1B6vcZPpaxG8TsPTTwwuu1KmyPtpPnmyxdm",
  "key39": "48UEbk3CX7qZekhnrMWsHyQf1zdJn4DZZfgPnpfkhTdQaBi8jMyn8sEa8J7LKYTzW8bWhfPhDCYzUeZQ82ScVw5d"
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
