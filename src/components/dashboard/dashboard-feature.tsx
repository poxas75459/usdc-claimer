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
    "3pXuUJZpJZvc3ehrhVXG8kFUeeLVViDCLWVTtcbxBhm6x1aByBjY778hpNGiBHELpRQWSTERb7qdxST3HccSfjzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3atuqQyCMdfStW8czHEhih1m2VJdbVriydbdqhSpaWUViZmYWg88bzxnpW98TPY5qPeKMtkN3map7e85AztNGckf",
  "key1": "67oZ8aUwf4EyenBinZuxZt8h8w3SkFrifjBH5fKLsJGzJF6WRQJV7xopi74TFt9rYCe4EmN76YBXk3kQXGFwfrqe",
  "key2": "2njnC4kJCNsKLtZv9RwikcEFS9UFw6aAKneSVGSvzaCNFrLtiY57UebxwWwj9i8TN2FP32bNfYFDoKHQwjf4FRNT",
  "key3": "5GVwCR2NZg1sDbd4dAuthWmWEuYyyn6zw2JiAeBUNimdBc8kKASvDhanpmxY2EPBR69WCJbLeDA4i2BJuVBatYXZ",
  "key4": "5NNfeF9CVUTtUhkpdW1HmR3kPLNATXXkcYqCkSo76XzJiCsxfmr9FE5dPXWBm3eLrPrcFMAxWsqkv9hFKaNzRLna",
  "key5": "4ypia2FkQhurMebxFqHXjPQQyvXDCimPgoU5vp8nZ72bVVWYKgWa4wE45F7nkzoZt3ygMmZao1CzAi79MWYdLB5Q",
  "key6": "2WSguKVsngp2bUrsawjZBjCqmHEebM9qdkbZQZCGd3BbuqvGD9rH8FFhzAeUMz2d7vzrze1iSp1G1Jjj5ecqbiqe",
  "key7": "24fHdYDmcZDEMwCDptt81UmVVie7k8ReKzGcc3jAPZuctWWenBmu5kGDoYrgw1bPQPuD4RHiurfoQzyuELZzhWKh",
  "key8": "3GpMLyi4yZKFY3J3fwV7MY2nS1QQpyvE4QbGXBRbCmKEfkmYF4RnLkTeeFZs3CWCupGUnNuiYCsgMoxhBXmcbG3d",
  "key9": "5JQTSdo85mbpcdU8we2SwmLRrC6iGGTGJCA2QofNvwk9yuSf9qxUDeMPtkdmaJnsfT1bbV7niYJAyCDwjdf1oHKG",
  "key10": "4Z83oLGFzyvc61tdVsdHBUSR9EtCXduWBrySZ4YLcxCCn7drKFzVjNyfT4CwCwPhc61R1kdE2CVMqx9LUnwoUKRj",
  "key11": "2iBVaDVmUCJyHHhGU3hWfjLPwL7t7XPiuwm9uZQcPQJQMzuw866XjSuJhJ3JazmtfAo4KFtJ1sxdeXEv1VTjkans",
  "key12": "36C2YhvHnP8Qnz3WdAnswcBc7xeNBpgx8uGmhoyKLBxzo5nuacBjHjV7drBN6zGBuEWPasyyHsX77HxvkHZP482",
  "key13": "2ywVdqQ2MHQRogbcSJAE8WbigtsC35YtQdTAE5b49yTE4x9gCWdX38bWQqtKbnDb2qiC2mntmwrY5uDuq1PTPZ5o",
  "key14": "2sTAWiLGoA2jzX2raRZ6q4qGzw7jrZQ5Wq9abz2SaV6JMD66J1VZy2Lv4dVA9JnmWLC6VNRcdXy27oNR4h7e3YFr",
  "key15": "ZYdhafGGgM1D4mCoF2p9FRZeokAxqPRDrGwYGNRDDaTscxdiD745HsUgyPGNR79xaTNuSc84z2Phuk8prDvwk1g",
  "key16": "2Kx3vxiA2gBHx5nVrDkYgTHbhvCHYSHuuRhgzG3oiAy7gh2XA2VYEoSkewahHYRphVmrEncfdtuVM6u1r2KjcABs",
  "key17": "45FL9u2tY1n1qr5dPq2Y8D3tAUdGRM5mLPiATKwmNftXeU7FxG2XLPvibPncfjxhmpmwPcy2vQccF1K9YqkD7PcN",
  "key18": "4h5pSAvCbYVzik5HC424WNZnu1KitEfYqY6MoPA4iW4EoDfqK9KyQT8kXoDagRBuxmqu9TxZj4kVGxVyDBjCn8ur",
  "key19": "5SvfCBC3sYvWKkYFsCCo6gyiSVC3JWwvRGDuXTNxAjfhXEyqUPqfxzAAavD8QxtQWpf6rGdhVg1XLFbAqpij5dW6",
  "key20": "2TsSNSxcHFzciaxjSaGYmQybto2iRkAiScQ9QziKZpAJrHb1hg4Xco3uNPwHb7mMsngYMpJLb5WaBwMTkbsX7Bea",
  "key21": "3X6GE5bDQqs8QYcbDfUhHAfGxVo99siEFqNn4nERyPzU1CQuRtR6azXataSijkyZsxToQSEmB9TAVruzVcLrZLcj",
  "key22": "oX2N47dkTmf12dH2MrtCTmBUr3SHGghxiVjAuDT2ST29WYHRcromDVjeWodeviqEv9iAtsL5cVhxN9T6andNCk7",
  "key23": "3cWn79uHdkdkoLNWB5W6E7HtYpW1aAH92UUne394SLWoAK9GvneJZJhTp2kYby6KPCjWV429XQWGBNywfr8DqYqD",
  "key24": "4LinSm4xywT6cX6G1nX3AS7WdHHtvR7LMXw5KwQvWKD9xSjS9U7mRTZ9mz7Zeg7rzHziy3DWj2U788YrRJk9XLvw",
  "key25": "5uD83tzraGM1H8SxYeVnNDKzHi8etqsRA8AUft9kezAfevhpnYfmLsbfu7LJdr2iTsVgmyS7FrVRjN7JRFCd9UvX",
  "key26": "4ztvBFYHWQCJPT5mUmX3ypsUmZQ4buYdaT4NR3CPREck6uVkoaD7CubeggyJ53WkzdERnhyijdLKKHnpXnkEevbX",
  "key27": "3ZAu57kNsN7gq8QzFtQg2r8H7YfP73EwkXfnGsDLXVx71AxAZGEXDDyWFer7msg7LrMzJxUVmRmNBMiYhTGt7Pu",
  "key28": "3gihKNiu6AGWUTkEyYohvhRHepfdUEGW47EhBUetZQwLYTzsG2XDYvGhFzdrjaYg7rM6Ep3ASv4UDQKhrodhs4ZK",
  "key29": "RetrjmmdYcCANpTmvq1GMf6qSrn4LkCzs8j5KGwXVKmE4MEbv5AhQ3AK4UoJr64YDeJZwZWmdcjRBinG3erFMYh",
  "key30": "3DwoE9Hwfzym5jvBYR7SuyRePtbCYfi6TbzNPZ7dgTL8tPQ9Loz3vB4PUajprFsAFGhg24b2QLgSy95z3ED33oPR",
  "key31": "3C1xy5rmVNzGWaexehLRBou8eudK4rAQcdWPj482bchqkXsarfeNKTwNr2f12Cf1xNrk6znRBWDCMcrSnPd1gFCi"
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
