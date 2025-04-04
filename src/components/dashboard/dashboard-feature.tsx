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
    "4eGa5FBMySiU5ghU3SqnULpRRhXfTRJybDGy2y6DjcQ1mdNPYRAW2aeubK3DTJJv51fXMAHpzk4Sbt6V1SfY31kr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nPiY2kNPViD7DjGBZbUBZgjQMsDXjB8iosmc9eTtJAxZb4uN7ido4ckPiWAQYeCqrBBBmSkLMxu9wdyGBYCfwsi",
  "key1": "2zuCmYEgpfRHXY9VxCMmrd8mBVdDiX3Tv5B7Y7UssptsxShzLeHzJqPLv64QEYuM48YvycstbZsHQSaHVKvYgboC",
  "key2": "3jYpGrg3CbALp537Xc9zH17r5Ng2U9hgon71cVDcJe1cCCMrA5vHbRovJiEhTfBT5AERrPdNKi54NxuxwW9m83pN",
  "key3": "5FvHiFigEHHrMwjLieWGqVvQD42g7eWtJaEYbGf6Zug3ZyCkf4eWTb6F84WdYub7oJRBaQLRzVz5pqps7E2LwvSE",
  "key4": "5mRzVGMYueT58Lv6Rwq4WM8PHQ79rJoEXc9aeBQoMSNMxrXyCHnsAGkudpynfygqGPmDfK9H2ZuohkQgdQMJ89ya",
  "key5": "2paqA6bhQjEmZuY3umnZ7RRqewM5HcdaGm3kxcTuzY99vcAy3cAupjBaahBBJtzXk5fHjNcXjh5p6DP1RsGNfxTL",
  "key6": "3M1HXWrHMoqLCdD7xrUyz2kYa9ruLZfzbVkK94R8ctekjHR7C3v7sJZxBC56icUg2qFzFsxgn21L4YqTShhz7KQr",
  "key7": "2zrubWnkwJpSCvv74FvT3ZwAe4Y3bJQmThhc2re1t7j4Nh79K2XTZwodFsLX9KLSx5HptHyd6nVaT8NzxN4WQ4nM",
  "key8": "4PypYKfnDNJagYxuBnoqNVPFxGiPR5BahsQY2XUSTCccdGt1xDL749iVLFju2ArkBifjpDJHEFa4phhbrimjyFtB",
  "key9": "4qToJNMVg6xTQfXaMJDCm3sm8QWrBxFSbL3duiUGggYggVkLPpgGFDHa6XsN1E19VMJp32LQFXoRJ9r13Q7jnvoK",
  "key10": "59S9LzwTa6t579dTSixyJq6vXymBhYbKXexBhGgpFQ2mHg32dFsFncKedeoXjgWZiwk8PEdFCaC1zXFgnDcVN6aJ",
  "key11": "3cUbMrNpyp3cTC7YWmtm6YFUHU7xKvaTdyZyChZzyufu7HBCH51U5SwzLoyH1DJbHkt951QuCJG2AzUp9rrreHpF",
  "key12": "53tCtPzbewPAbJJU9vF1dZaeFp9TF8XT5HgEuL1GgMAMnrvm2zATVeHyWEbqaSmpjKfmDKfudATGtsy4Aa3Buynm",
  "key13": "4tohnn79P7PXuuVaBf8L4U7YGF7pSvQn7GeNb6jV8bgQpZz2XN1Xw9CNUYhgVHzoxUKNK3YvVw9JoPoCPY51Bj2F",
  "key14": "5gACpPfu5V3DL5ijACfLDzqwaQ5wrnw1Cfw6K14Zan2h8PbtiPtXgGkbDrEngJsBzsDSg2EQywfjWNjWLFniYRYq",
  "key15": "2JrVKQUxN2fNUidrvSuBagaXY4Dp9S3HsyQywtN2KXnsoSHm4nU4qzqiY7EkKqTvQDSecdC4eFTH4XKqpdto9Sie",
  "key16": "48BTkrnpSGccz3iupViUVWLpG6mVoRJJyRPoBr4pf3ordss4jzCXp7XmE9p7av8rFYJHPGdcA78tWUqwyPR3UndE",
  "key17": "5KsLxZdHsYmTuzaWu32Eq9SSK4nkMrFEEGJ5Sig9qPgT4MWwvTMmVJiy3FytzZHsDCWmARCat2pAnUa5SykSBQSp",
  "key18": "2GuJPstWRD9FDFRrnLN8GdiGi4hAbYSzhN4kVmE9Cy1CQUTmDGg6ngvdy92Gjg1PgHQHTXtKSHAbgW7pohWhr55F",
  "key19": "2bgLgYZyBu7ih9zqhK7YbKca2AyiAxJEZdr4uswqMQ7pLd6NPySNHEqrkx1djS9s33jBRUyuHneN6CscnADJ5YVB",
  "key20": "4B3BSQmfyH9Gx82s1uMcmT9rVf2ffPiJQ7trmbT4h6Fo2i4q1f58NuQ4rRrqeE1K9ujUPfKZw23cocgADo8ajoxh",
  "key21": "5KZ3KMqus1GeAnHnf7RiCufhQ99iXgKCz3uFpoWHvJQrg8AucuwANw45qtMiYhdZ6DFMsoN8Bvc1ApCHMvznuyqy",
  "key22": "4rYEve42FMsuT53ZWqV2ZFydSXJw5PXt7LPdtMZW2mCsSc9NHXH83mj8ETadiseBmLs9wWTv4EuzqxA8acQ67xSy",
  "key23": "tsc9vFAWNBuC3BYRpHVDjVWsaQ9EE8mQzjmGkwdCmGvVEVUUnfVTwT5K3s8L8gRWuhaoaGBanD25uMATMNvdYHS",
  "key24": "2o4Vw1VYNpzpb6VnkkPsxaCDYQs8QN852iEiprZE5vQEaa5XsreeYWUUoqX9t6ajwmVsDUQjAzUKfhoEyF2m2VYS",
  "key25": "4dAbtZnqq3QmKQUFdQqGtkV9TvDUQFuEiZZwSP3pbbY1Qo9yYQmreh1Mtd7PHnCUyNAwXdepW6eZPHCTSKdwua6u",
  "key26": "bSFtkoMNqpvSVceB5y3B6yam8yTcQAfNQN9pbWBE2KqEGt4a3gqsL3eM8u34mvESH6WJ5ASPizvHUkcTmAnm1AL",
  "key27": "2mLXWcPyXcfU4c9ZRmDuNoFLSe2QzSwmF5dkA4qLk3azvPpjdi6BmYbG31xGr6Dh2L62c9FdxHNpfWEX1xcPAJfr",
  "key28": "4tbpdSWgRXAT9pG8iWZhx6v4zmCniWZK3arvQSYdZn5TLxxbjCdzbD3bjNdu8kFW2vzwQURoVLg8hHGJWKoJBWaz",
  "key29": "twpXN6qi3SpQJvw1A8URTmBBQR7P8QmpxM5GuQ8BRBq6wKKHJ5A5MRb87DDueGDhcvpyAbAHetvFsertckWiKRq",
  "key30": "2tQ66ZXejm8H6rvykL89hdBVGhPRCqSVL3inWSrjgbnnqzuH2C1Pyd9CafrUDaDomQJgDWzJfuAC7FdAJfs4yHzr",
  "key31": "61cNogBGJj74qsjDKsCad6BAm6yoDPB2CuTa2fRZr1rxH6HacB8C5iHC7nz7u1vprhi4tvyUuPiiqz3BxHAZFXCD",
  "key32": "4PHDC5zAN56nthuPCuVj2p67Z6HypEi5HxWYnG1axh8bKG5XGVu8qRPf8kjYkj3Yg7iTsX3AGRj5WPQwko6WYbW1",
  "key33": "3KKGgSwdeahSdZ9byPkfh1sZrxfbWnUT9pHVxtkNpQsjefik9CG49JUWaMwVmo4VF5VgTo8vLtqKn1GauzNjaiZP",
  "key34": "5mSdBXRxU1cFYXJcLwNNdioQjRvTjmoc6jVPjzqoSHTaqPqkxHgfzeuzN8rXNJJH4zEoCXpcto17NNGvbfQLLi4G",
  "key35": "26WQt2LCHoDGghjoKbTTtBpFPbwjc13zjp4ssWC2c7f5kSv735EC25h3nQeTXGejFJpFUVQHaYvruQhqDdRynrdy",
  "key36": "3zYQFnC1AtnJFm4XNRMFwAZytwoaNLoeb2RK4bUi1VycyXG2GveLqTsSydv6shYNwR5hq7QoFeTzrv4y2JC71iu1",
  "key37": "2xbS2FyziG3M6G115ReK3yisHFmHGQftpzfgSa7xTmuG6vrReHCyS3L1QkTztYdRxR4vMbds1ZVmBhPKn9Bws4vK",
  "key38": "2UmLh2ZVkuEUS7TNrqHW9VX238Zg6YGcSMJzgEppr5rTJD98xgPAJpd5D5Dow6E174zsVxy9aqy8RLsv46iD1A2E",
  "key39": "2ogVkzNJQjxKcVgf91JFBiMkEcQqrttLF2t8td9WHXbdzKY4YZ8kMdgn8Nfj9WA7GdCmWcb1FxtpTt3c8PN15t7f",
  "key40": "5JU3yy6p73FPSHUycTPmyawfBKgR1fhMs4AmvpPgvhoYarRbNEmugfYYNqpsD5P3wJrYkZvZBbQv7z4TUq653eNC",
  "key41": "kikucAdPXRCgBfZEZAGr8vdFAaYf4kwFs7vrgXNJ1bWS7mU3JfuftAKmd9bJZhFkzM3nQ8z1nV72uscZgdo6pKh",
  "key42": "4NWuBgtknPNYQCt4KHjM3f6996R1QrqiGqMMgoT65hQpprPjXwih3RphuG9tebr1vEs4cttxDZhhtLGArpmbPJDo"
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
