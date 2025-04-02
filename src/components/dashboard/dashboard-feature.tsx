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
    "3Kv1H72cpZi15XTgKeUww194qcutmwjobzTPGV2KFwxuyLJ5SHcvyWLoqYS3NKXrbGxcyNGQXz4uZmBp24tssm6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GE7dNA6ezshFQh4f79gggYNgKrANdncTJ3WUkXBkf1v3dGHedFKreRP2kvhXgGdWzG7yV9dtpZkcK58LenYLyVf",
  "key1": "3ZMfWQkB5MkdUNsvfum6DWymH2xhicehDA6inTa33PoV2ZiJbP935MnAUqB1XjbzUpqVDhNzSh8TjaB2Jk41iEC9",
  "key2": "67oUnamDKEDNJwM8W9PgDi3ezXsMjCcehWMGhvUxUGEaj18JXtLiJBPUs8KFJtPEKMBEx7TWBMzipiDMMvk9ezX1",
  "key3": "3eLCAhzGSNtUZt2dWK1NyGPfg3ZVx1VJGa1mmzRd4a8n3CZb4P4KHf6Bk1Jucp3SAvdkkvyQxbXLikvVVpPaCCUL",
  "key4": "kwo2wa6DJRwPzfToogA4GthNxcjzcmCEfTNNXRtRDiAwV9mAcVfAKJiPT2o5SL38Z49EeXSJvL4N3sZewry8UFe",
  "key5": "r85jEmfQVf952PPKzJbjG2C7Sir3R221hwEXdkoVN1GQ3zmQ8xfp7MGLK2ESzabejxmCp9jBrvtJmMFkb3ERXdq",
  "key6": "58Vjj8Xhk8S8uEr1xYNt5Ukn3SS44aRMPqhcgjw5VCCxXvBJr7NVEC6ucHVM3TRt3s3sb6t5AtSP2GwkQxoTmNGu",
  "key7": "28JcKUe1ynJY21HEzd6JsZtmmBrUkmEKXbMDVvvbsz9cYF62gT1fyCJrYkDUysa8fTqHWeP3nMptL6sNjQt4uAtM",
  "key8": "5h2hcbyf8HyM57RyFpYRoWciE46CRbqy7FXERkYT8TVXYcLj9vPHdvWSwDvafAohgPhMoF6eEaaSq3r7PNnur3FM",
  "key9": "74jNRd35UDZN1yz44Bj8pcgSdq2fiYFMcAfm9ZuAkJi7kW3PCyJx8HLX9fotqvfgr5ugr8K4thp688zDc772cH3",
  "key10": "4yDJK6MnZiecHpogQSzmAGTKfaHuHb31yKdHz9YGkm3emP5t2K31as5ma1XShMMmyEWivyikfmjRShJMxdChPuQf",
  "key11": "2ftauBmmmsxycB3JSNnFwZuoJ9jRP8Rd3VgiwvwgwJikdTne67zvaQmTU2hk1e5AWunU987UvuH7gBqHtGnqsdYR",
  "key12": "5pGQRegbz5YBWxyoUU7TxFqixtGJjVcdnfpysS4ociq6DdkGyJr6VHoMsFUPgfSgB4FRk6N5PV7s32DDpiRkdSzh",
  "key13": "46gMnNYoKA7ipkWPPY2fMwEzohwzHPDfeji4fooLwpQ4mNrVJeNZLBfwZ7siJ487sdusebfnxKRe1tzAJGVaFkCK",
  "key14": "5mwe69QoDMmSxEL4nX3TffBcJKs7p8K5QC6Cum2htBTM7eXdhV1DKgpprY2SJdqFP7pAsciYM4jFgUqQ6W67BSsM",
  "key15": "4wtcQvDe22nsuYVbdiH4qDd1u2BZ5t88TPUErmmowmwmK99mTarEb77GcLMqjNnX4EbZXWZ4virfsQCWoMdRa6pG",
  "key16": "4tDgDDBMzpGXQawJTuoLruVEgDn5yX5HkDRfJQK6yb9LXDYM8GgmVrhvwkUPpxQtHnoKMPCRBk6ZvVH8KiD14TVk",
  "key17": "2Yz7mGmMhsgqotnYoUV2EnxDQ8EiDDo8e94A527g7uWoXbm5URP5CsdAgwCLrBpvbWY6AwNUzCZyL8E2pvDmcNmv",
  "key18": "4MbumnpKfpfr1wcj1nN6V7EhkZtFANDSaSTaF4XWHn2RpNfa9s9wPBeXFToBE7FPSADvp3bXfdrUn1DZNbtx2Ss",
  "key19": "2tv2ojWf23oyPg1Yf82eqjPnkDJpCNLEiGWYcu6LuCbzARbb5MAahYbtdZvVgL3fgPsXyEE3zw6xG74LSKXBftyM",
  "key20": "3mCuMJpoHZs5DdKqx8vCaYY4ArMWd6Strq1vxwhJRoHGrYeE4FevDmucEcFhNgEr81E2D7wEHbwu8iX1dtPiUkZV",
  "key21": "3RooR97E7tMoHez9TG9Ykc2SPUEPLwM3MAt4K8fcRXQXMiEbpmcy8EyUonA6HNPHekm5Rx4s6B3eSgzzmtxiRhj1",
  "key22": "4x7FntQCmoVHcM773yzHMfUkb12UGsjYMr5JmugYySWZnXd7m4jhJgK7SG5Fb9Wa5oqA7ejNgc6i3D9KhgZxtSJE",
  "key23": "2EZ6JQgFDDzZCJ8WMVfXDJqxxpsaGs7sif2fMXKG2WY7uRV6fyZgCNfrxNENuB4nLkfAGxoigNehV6utvEiDvXGd",
  "key24": "36kapVGMEkFF1Dn3vwycfeY41mF7d8gUK6NLLmMuYJZ8kMYU2gEdXVpujYtMdqt7JUSrkK73KjinWopKTLH8aFZQ",
  "key25": "2jWnKmHKNkjZ3gcpoPvNnUwT1RkfQ7RS2kTCD7WV4iTZJF5LDHELErxdmxkYNrdsQvVnzM5bshj2AuMM4e1AHSrd",
  "key26": "kM4YAycMm1LWputreCaPm3Pm3nAAenoKcAUzdZ5CMGo4V54exgGmKVUR9iLhDqkfakc9hDJWn9JTyfZNQu7GqfG",
  "key27": "5YuPD8DPNPsyNjrZfKFCNELhE7kskgaY5qmeDJcd9WnGNtn4GiizdA8eDhMpcRdtrg7nDiJTBwk9Sx5q6BiDhui9",
  "key28": "59gg5Sh1NQgHf7f3GbrHvbvL8SRix7u6yS1xmYt2UVPf4Kp2TApMq3BRXNB6c2gXTTxW4ncf2w8gXGNjLR8iGYWB",
  "key29": "VgDEEep5ah56V4HiiFsAJWYy2AP9CfjuuP7iq9KhavFBapsT5qZfbPhkw6MKKKUUE8a1i6Bfy7CZQDtwbDfXVCx",
  "key30": "3Yj5hptwZimpCbUt9FazxoHhxGa7ARXHcEa64kKvEKF48WfCnh5aHRgUbbWJYq9vwbQfgJw69yhUhH4y71VinzdV",
  "key31": "4zrTjjQBy6jTxGNsrwiNuSaf4sFxqu8esJWRTmcYUPRpPsdVn4DQeMVyKejywbvT3LbZDRV2gyApWKSbBvwPZ5r9",
  "key32": "51XpBVnfPoQgNnJ9uTnGnrr7kZw9cpwyenpijgk5MFw89hjTHVUdgi5SE8dfSwoyWbdCMcVeP8PTawEht66BeZeL",
  "key33": "2pbqcMp2hfjafBJ2tKdqARceiiQ9yT3pb9RMyqHFubDhtocjLxcdBzPryTVc7xi3ECsDBWHZBQ7NoEqqEyt9qR78",
  "key34": "4QQ2D8kRUb2Lu8McKNEEBrTwBeQMjoyougnXNUhvBqTo3ThULBSNYFGJHDo4GKHjEbPQRQUKsuoKzMuabborfAdL",
  "key35": "5UCiD8JEL6DJ56svpaDHchy9tvMqpXjWLTE7eQKepRyek1FL5KLT4cN4CPNKy3ebaS8afBWLHgD8Aqsc6Visk5Di",
  "key36": "3nL4cTPtmSbagMCbXhD3NGCNyRBCssv1dVStpNJ65qBJXnY613XkmPrd9jns6ds4n26QNLw9rgKKAbDDzqfLnQee"
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
