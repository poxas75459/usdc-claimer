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
    "ZoKFp9snUErNCtQ9UK4uQYpB61E2gLQ5mRvzSeiM6VDQvtGveGkRg8Qsaj7xq1M79mDKwTro9LJo2hcG4WuNv8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cHWj7QMMzogiwySGLpyu3J7BusdZdgknKDnddbaufVymCdSFHF3VTHxyReTX99GvHZ7Q1pXS6YNuaP6KVhvJfUC",
  "key1": "2CByQ7USG5jtJsCoAYxAmR5R4HNptE1rLnDSyWXKNYLk9UPFL4sp1vTVuSmskFrvXkkgTbMVrAMaHyVxZnd2LtFH",
  "key2": "2GyXtVhGmTTyXxQRm8T3tcXQzpeNBJBnzZpjRVBUzJx58rs8f6TpSt1kPDFhsSfBMrHfdEwb467shaWhcHiE9jr2",
  "key3": "4Z3ZRKgfaMgiAVRmBViJcdEG1JyW2eki6dLDxAm2aAUx6XgT8iDhi6ZJCoGehowB7kZ7q9gsHJ2N4bNjGzC9HgBt",
  "key4": "64gqPbLY6aCVHXzng6yyGD5JhJhE9og3ZFdmbQirNrooUWa91pZXPKmnqL6fbfky5E7Jqej3S2XBAhAhbT2ci8nF",
  "key5": "MpBAgHf3bwbRxCqogmEtC9S1tYM7EuaWPxxeFxzYTWzyjEFicoptsZVDyKi95ngF8m48AgMyhKMtuF425c6wDEZ",
  "key6": "3cny2axnVSibgGG2vsMFG1KYMQynSdqmCmzFZb83kDz3Z4ZSvgCegNF6AGYptQcKN1dKu3wtF9KvuqJGzDLGMydW",
  "key7": "2y1LdEyvuXSH84W8s3bvqUfRhmK8u79YhdURv1zghdg1EohZ51SYjS1BZJitwBFUwL8xVVP1xWsGznivJBRWL98d",
  "key8": "3nxuSnMMJCgjdirRVoekBKckxi9xzv6qAz2xAqw1spiin1wGkR1k6q1wApLzQEFx5A8m4D374Xp4Vfd8KSefMmCN",
  "key9": "9Ur5oPxg4WtQud8zsbjyvaEvdWYkgvFGeebveXuNYiBQCtWQqyQw2Q3Ft1sSRVssD6DLcJz5pbDDk4keqRxADBR",
  "key10": "4Jva5VU1CQHBYvUBjEC1nXCkhs55E7tbEwQdbkHseiCpXVHGD7ZMAuVsyxrgyGYF3rSKqTHPhA1E37kGYRTit2qP",
  "key11": "3WFQq1JiChsbBgQu6NN1hc8Jzih2UsRfeN2DPJBhtwC9g3zCEk5vwiAZKGd28wwuUwajH6NzGHkASknvTA2DTFt6",
  "key12": "4AtqK2UcaGB9DAsD8FuAwntzJMtH2tPJyumuo6ACa7535mc5Q2jHNBda4iDVxGbqWgjHFcEvECp7fV3nKkxFTUJz",
  "key13": "3oBmw9Li7Y6t4nta2Us7tLsZDHQ7UEr4cHDD71a7BoMXA4jx1SXq5at7PgWdNXMtyESAiN87fmaQeWxUsNdmojc",
  "key14": "xG46xbbKrknPGC5fRNrRgsGVENoCiaY2BbPvPp3mtk1ij6quQFh6QAXfZx5rQexCMMV229ucVktV1sQGTZc7diD",
  "key15": "4DXuiixqXmW19DC7xeWWJ7xgRXMhDdTsntZzcGM6wtG6JBL6QbyU5M9c3BbpFeVc98BgZ8QRSX2hXUA4RHwqe41N",
  "key16": "4FEeqENjexzf8ChQ4UK95jmEedceifSrqYXbSA5KsqwPc7bX5cqLtV4rguA3y4mv4i3N9Q6YJBkmRUk1dc6nezJg",
  "key17": "3TjzKRXppVu6XWrq19fMFFKwo2Ubu5kPRJtSjKULkistUuPxfZXWYK4k7CSh8ZHsprJXXpR5sQqoJ2NpxiUhgRit",
  "key18": "39KxdL2TBCojBhqCsCqLbx7oDydFmdJJ6aZSk5RWbp6k9NEcWdVM6HETnyb1CKiX3ZVwjXSPoDJV9MRyLoHD6Nxu",
  "key19": "3o9yp4Mozs4QZfzAycUThAF8MkDTn16QQrdgArAG7FoPp9Y1Gntdv86rxCKP4MBVHmm2AKuBMtU4QGUzActPCp1h",
  "key20": "2t7VXjP87Lx4HxnL6fT6ozbt2zvjJ7cYtvtd7HoHRXWnqBxGMeES4DDEXd3q5P522FutiszKbajAZrBjRKBxS2hy",
  "key21": "4mCCRkgLCFUH4jehhTzeF243CnceuDy6znbCAy3jEHkUztxuVhMAgC7j4Xevk3K2S1en65tWYSnSdReJycFVj9Az",
  "key22": "2HGzKCD26bT2rRr4xgzxuqNuBZB2ittzSYJueJhKKGrVxd4cMgA36vFAFQrutmq1DTmk8PyjNVjprVRBXdpNPasm",
  "key23": "4gQJfTv4BbiUkAB57ni4LLQfh1EzjmuFCxZCqoQRhZbqSxXoPxyNm5DTNMWTDpnuU863sLyc4LCtPJDQMKbc56wk",
  "key24": "U2uE5eGWzwtBuBY6pTYzSbpJKS3QnC98HkY2jNTr7TESKYs19HmZWiHnA9sW4gQPFxquJe1S1f4anezVRMrvYsF",
  "key25": "29RRHKW5Fncs3eMtiSsE9VYpWP84r92JrfAH3kuLe9hFjryreXgMYFxn6UUeLGaFSXTdcgG6PsVKWMcfbZskW7Ad",
  "key26": "4pyKdepXZBBB2CYWBe79VCMZBNuXxBxF7bi16B2D8uPFuQxA6a4VdWcUpLS6qnX4PKREKhrmDBFy58UecryoJB4h",
  "key27": "2zHdq3zqgyg2tB6spRZbjqtC7NVjvg29ZT8mxow818TAou9M477P1LVf37CPCbTbHy5KfuNWurHR2cPDogUutLKv",
  "key28": "3mQAswc7RWrQ1sPcCAqZMhdahVGXnLwBAPtj1nMbdpUbsuq72jcLkuDkU2xt4TekAaYr6DLJWGZsu3oeCTHFyj2x",
  "key29": "2PQAWJuXNvQGVefPJ1UFBKvZQ1tAZV2WCqruqopaSEjBCQJ2MmsLRTPgkpxuryekLnH4K2KCGEqsC3M4zQbSxifq",
  "key30": "4oXomuCXMLjTktgoeVghtrHEAb2wgUGu44M8xRHPNvLJ1Xj7nMCEbUhc9QWiaNgGsv2BYPqWFSgbo6PbHjXVfEua"
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
