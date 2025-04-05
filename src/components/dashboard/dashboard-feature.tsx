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
    "51NY3CQBqFmZ6PutRuUCreymS7utD5y1FfH6qRvPuYwBP7RGD6utd3GVApKv457WSJZ8Bm8s3wEiTHr4m4HZwoLW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bFoCZ3NguXZyFsbGGCAY3qGFcm2718wMumTvinmBaodruJbxNFW6WphowNMwgEqzDSXdQQaoWzc2b6M9CNgqZuG",
  "key1": "2rbss3FmcMM8kSjKnNZ1wN3cGvAXz2jFvEKpKhgPN9BJ6rjQmEJ1udDyDcAX6fW6zyvRqxsrp9XoJmv2E9hseD3y",
  "key2": "3ZCYcj1G1yoLAq8FzA74KPCER44DFoMbtvt83Yphm5CWYCELc6uDPE7sjX53Ftz4JmgZJHkJBh619a3KgWhppk2J",
  "key3": "2X46z8v6QxuZ7cAJxX3bk1qTfHrJPd3pL9qhwWH8Rt2kfSCwbnUiEB9yohKnrhXknz9s5CbzPQW7XRChdYrt3inZ",
  "key4": "5yeEKnJw1HtKb9hkP1vL1XwGjR8troSk5SwADpaHtRnd9msVDEoaxwHGaswEyVMjFNYpgkmaSijaEBo9dW9zdz6A",
  "key5": "2ZrV6nxJyWzjiVbx9ad8NbQGJVvWwAu9buVoa4ZcADB4r3G7NNbmkn2F5GTU1B3L4GR6KNU3e27NyDMveCgCbQbs",
  "key6": "2XMzRcYd1nEmBVVHBBqKswxCgKfh1H9yQzYzx7eT5NvrWp6BAi19Ep9jP5GCDdWn6aE3J8iqCsGywLZFKy243LK5",
  "key7": "4RBacpUZpV5EdXjRUPvrYCyS3jv5Ro3JptixFG92Wd8PpVCg9dw4ausjXCW5VrLqSFVREy93PxKXQJvb3e3iC87o",
  "key8": "3qfeoXC1ofbXGgmuagjjrvopZQH2RSFrmp9Wzio9TXL3dckjPxGTwELiL4TnVLSDVdxja839YtGKyKuD46xdyjYR",
  "key9": "3reRhou2qiRQQSRMg5csAkbQzUa35zKRZMadhL6jxuzuAk9bPW6UaXCv9VtVXTAkqo7tEgHUca8WDESk8TvKVHgC",
  "key10": "4kfViLRAddRqkRYFzhMZ9qZbkLCue9EbfiTnD2hX2yt5ahUBN8yy3rvtmFXuPraew7SZ426utKmze71ADB8S1chq",
  "key11": "3is4rTKv8ibxejrQgDQBK4juP1YLxdo5a8JbSdrsqjPv9rB2dtqsjKoJLKPaS8waaDZEdCxRknsqWGqVeo223FwL",
  "key12": "5FfJyW5AVCoVtq7u9F3Gndhjby8Ka8FeyZ76N9Sy6BSfudPN9rfJDsYibiopa9vziEWZ5qz2vWunqMUXEgrjfV9N",
  "key13": "5xPhGZ4RfQWhykRjdgACqdLdEsCuQTzQwkMFFKmYHyenCFiXXrJtSuQZqvmVaA1iFkcLhyN6Dy5fRjLxmu8kVkMB",
  "key14": "47SsKZ974bCb4DrxDMFYGRMBEy6zLmtGFD5tTD4zxwxBGsBBgVz7Aeg8zmj3W1fpYn7fVVSzgRY6dtPsBhJTzpjJ",
  "key15": "3V49r6BUcDmmStRzgDzKMhpaFsQ2ab2XLxc3obe4L87v3tM4nLGbC79nsikSZr2BQ9RqQx7yFSa8PzCVqSHwCHu1",
  "key16": "LeVSdrA7zN6Ua4RbXTLT1jAcB9vCwbMsMNxVre3EqwUh1v3951jrzy34owuqxbpcqTuquzVVbCreuY7ZzhpSwHL",
  "key17": "3uQkx2VVkdPFHgVGYHMxZPegX8oKuZdGcn98XNkLuLSaBiVoDLe3BtFms6ED4DroLnSFpxcmgqaqSyCXMeZGJT37",
  "key18": "3EfDuRDaJWHZSqv9EJgkHzSjR9fNNYwxHN7TzuyEJZVD3BtynBB5PdCrVfcMZC3gFbRHZ1r5fWtQNdEHDZECkZxM",
  "key19": "42cR3UiUYkLWzYpER3nWteWduW4ENmBj4EpPYTiTy4XzWcEG9aKCRnt6pBchD1dcFs2qeCEMugLwV97ytWwbrRE6",
  "key20": "3C34vee5hJjaqAarCCdPx85d232s6FmTuFWTh6mpSuQk9boeM7ZLhLFPQ6GQKtkquG4rnMTu9FN9uGjLSHWn9vMx",
  "key21": "2SHkB3kCpyAVHeQyCFFjyNiq71CTgC36hCNJBBX9qSwKcUQivYrpnDokmarGnkev8AicFPMFmESKNDFZ7ioQkrCa",
  "key22": "3JU6ZUczKus5CVBjbFC7SLjZsgiJ8uWZapYvnvcyC8jDgBkn3maob3Vez6MYTdZmiSFbjvYu6oNN1m42c9kpeztF",
  "key23": "3Zd3ca5Y78xa3uhxJauvUkyhRATHq7dvLPAgvCrx7mGvmeevPoxQMZjNzQqFJ9L517QPv2AALS8QRnqfMDHPAVsu",
  "key24": "49pupgaAdwsUqATyLDPwngwGv7XFaKTBHvNNyaK4CwuJqjgyP53EnijuSHUq425TjG3b7ww1QheqoFRbFwAMnaJ3",
  "key25": "Nged8MjL1vzU1t6bT9DACdGbmGLV891YNJr15XcE5sDtX8mkYRPLqxKo4E3RsX5UmTL9UTmSs1gmUH1LR6hyaSk",
  "key26": "47La3JGCcb6axvogZg45V85PWfWszwQ5XH9TPSKxeSEHMeruUZv5b7aWy6GDFsLwZyKq5FUQeH4AM1bufNv9EZmz",
  "key27": "3oxWHC4DGLPfBnmUf3btTaw4SGNB2RF2UNYfSBUcMo8CTZi6EMELnkaDrXYctAogoBWiSESm31JfsrE59GjbkrzH",
  "key28": "NFU7RFG2DzBEQJ3oYTJCxkHD9JezDyocdzWWwvvSm9H6Upo1ikfVZm6Fws6iw6AaKEnfzR2TLYwbZyp5GU2UACA"
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
