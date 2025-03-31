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
    "5hEAKUQiR5pGJhSAqoySyPbK1DaYTQ4eAqanp6VPzkDb6HVDas9LzZuWWFfgKjhzjLSJ8ZLfiQuGqETaSyY47qpS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z6F52jUbS5mZyGBCMQdL5oVdsc9ktUFv2hUVTJ4NxZinXkoM2ARXih5AWJHAsM8WcpCgGhC74V3ovc5SP3T4XMo",
  "key1": "2cuTvMHdNLU8M2ZyMpH1GNAfMN817B9EkGAUBx1PLGCmWkG8ztSFcQNgKtsPZmLCB8viPvjAJPXGtQtcD4oquFGb",
  "key2": "3vUMxYVVZBkRYUrHCBmZMYH3F7KpXFKMb96osTtB9ZvmLafD2aYXrtVgFYuEmZfgDd3BhwCntnqkXoERV9yrwgtx",
  "key3": "358cBfdH6LhyTUpD1r8mWqfWE5xEMrdLRwYV3oXzUVSf5SZc1gjRGpsgm3iwZsf5zQgVn4EHfxx2W4V8FiGCcxHJ",
  "key4": "y3HxdB24wWC8GduwT78tQSFs7f9XPj4H1ffCqVRk8iRXMQtPPK1QJEm2xJhWRMY4nmVPWXPZRY9aquUjFjCVqp8",
  "key5": "41KyDkQnj14ViSQ8prEQa19vNCCKRSiuSwSCkTVfNjcDHN1kHAPDXFgdmmHKuDvSjWiHYj3Uj2axizKHgyyCxsFF",
  "key6": "3ivy2AMopLpx8MMz2hW8kAe6EDNBrv5uCQmG2ZJYTE6kVgWUei3DoeNvE6oKLwTYVzS5y1K5VCgsnWkZ5NCoKMjC",
  "key7": "qqLTS712hpZJoyDDPJeUfQnEGYdQ73pFoPD6ZZQ8ic3NsZS8YQvM5QgthqphjExVSS5VjZTwoKZtSfU6Whha8Lh",
  "key8": "4zTZeApg6CfUSCr7539qXweFPZxNHSxrw24YSdzwvbczZeYjm2navkr8hn5LvyoDfKZLjJSDhrnuicDmQrjzXHfo",
  "key9": "4TdES5BitiDHZ2maTb1kXkBeS2Eo2TrCy1bBJqGqcextPT4gcgX3kxbJw5i2gMwNig849yXWasZsfgDjKzYxR9YW",
  "key10": "3EVVMRXZZXJ7dXhVLb3Ldp42Z181FPJYUWMFk7sae4igpMPDV8MAfuBimGaiiQGk3fmG3NYon4NhxuFbkJsMMvRD",
  "key11": "cAfa9jZRfmLFTnLAZjF85xDLShsMzYFSzGAd5SR7Yrfet2Cpawtge8kbPgrWoum1qDupBhvq5j8eyR2vGidLk61",
  "key12": "5UigQvnY9p4rNRXAfNsnA5iwSs1cCdJqHYbq3bw8ex2VaDNMNoFpsN1cURa72EWoBjLRR47ryXdTmEkcd6DUCTtn",
  "key13": "3H7RmvLHev3iRsa1j9WLyC6ExEuzMc4a7vUfev7kfQwLnQC7M7X2gy3NnivguGBAkzt81wbaif9Uo2qFuQV4bRGb",
  "key14": "5UosQiG5aQ2fG5BUf12wbBnVWpP5SfWRctC2A6PkRAmGyBRLArLZTwdP2y1eLV2yv3xHg57Koc2PZZ4JA5ucdMou",
  "key15": "3DSEisLe7bBSyvoh11SZ4TLRGo6kbsDr6ocupwh14YzSi6nJxQcooXnWHG6FtdWBHyrztA7dtS5wHfqTWjGg2U4q",
  "key16": "2jG1ayhNi7bEUbfdkcceNzaef2HYCBKwZ7VAq3cxoWSpwWy5wa4MZQnq83tEP2fjzNi6FAjoSFo3RuzwLsG7cGiL",
  "key17": "5ZeYggwvePi3JPapfyM7pL1GCXuhe8PsvRheL2ts3sNkUpufbi4axN5H8cM9dVD4DG7eRd3K3Z6U6HWKMaUgGR69",
  "key18": "5HD8yNuduz7ZPRgyJ1ieViW553gSMuUzAmB2WBQqTp6vZcJ8VwQrKdpiHj4iteFYbEvXipSRu4Axg4KHFa8pBXk8",
  "key19": "5XrvMQd1bvqGaeFx26PH1eoWYgd1wYd4Wtj9x7k3SimuQRCFqdMQkZTKn5E9MzhTVbT5uivgyd8UZ3LJrF8YY1X8",
  "key20": "4aheKp3U5ErLBwj6MFvacfxWQ93xPTUePRUMS4rmJZ5a8W7VNM7thFXesL5N5xzGxQFVtVmMQzEF9iEdrJ3X762Z",
  "key21": "2PrTDBWtrixmurR1oq9J5if1YyFyurPF1b6DiqXs48ayMkZmMbsWDjB6jsbkgf5hg5TzGWX4x3NL2DHfzPWZV37t",
  "key22": "4HaHbyP2zvrE4nQNZynwzaJVgCQ6Kr5iXwn78gbQERua3MXHG5muyutBkEDb8LHQr57vjNVnnjmLanLVKWnJaBvr",
  "key23": "4v3oazeHSyseZ91cj4183z59a8U6rm1vcF3ctm3fekhV6nZkiu83G69wq6rryWrnepF43MteiEw2xJMGvGiUX1kE",
  "key24": "5iZqZBfXBoxeeFbEYwbsCDR1wTA659JXt1bGqzgVSUSmmwZHVbe4TGofNF4XjsTsTkPGBQaYCRfmvWpHLMRWQy8S",
  "key25": "3DXDpoAMtjs1dqKb765mwZ4CRJPojnwoxWpjAM2GFJZfMjw69bZszmnbBXyGLrLHv2MaKo6rYLrKaA3kLJhtz7LJ",
  "key26": "5wH2Go5XtUTu2TiBhZgJUQhjwWZEonHqNc6tanrybux326kCL82u82t82dsb7xcpw8GAPsSBU1yyXySqQN1ZFWwF",
  "key27": "ZtR1ptbdL6AH3T1bSgeXaJ6hgDGsYiStmhJSwc2LQbib7C9nFsxBCjBM2TjEtqvgx73neC6qg92ZqjfUGvTKANg",
  "key28": "2xrbP1qTDejU8HTZxTeWG1TFVh6QUQjWfnrQDSaXA6CHByf6vVZGZFgWvwvHeyeeCafkLvXRnKAqCBMMLMi77xVu",
  "key29": "4km6CcQUaA18dp7KLbtgqcVsZBagMjT2ccmPVSQBv2hFuxSCttDAd52hpwqoyP8RFeEvzAnovA3M2zdxSmRxcSXU",
  "key30": "5n7np7SY93EDAFZSnvt8iy8Vs7EKXuFF5ZLVbCPm3pjUdopSNHCjUbWui69e2vh62ZzudVrUEUxxPzt99o8FEsCv"
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
