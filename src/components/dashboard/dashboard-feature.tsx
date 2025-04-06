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
    "GFwhCjfLwRmvnP3j6GdxS5QcXaJdSXgxLqR3Wp3EETBz6et1fszG4tbzF53m1Jcd9PonnLkokb8b9e4MsFsJxrE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kKtXJbmCp4BFJChJ3ab8t7qmPRS2dTP4jKvjeqidUsGXscP6dE5gxaabga4SZrmuzjbfKjJBpzH7WWGsnPPfJpf",
  "key1": "3WRSYntLRm7j1ASXQ5869DsXSi6TpanAh6A1duuQrxfrJQXFx3t6T7WKR12r1kU69brLpZEDaSo9yBXBZ7Z5uw6x",
  "key2": "Df7zxdRT2kpJQcXskVLbDeutXDTXdzUKZJpwXRqPnGTsmUSdkZkVSprycYDoqCW9N5TJhDoV3cZhW3dx9ugec1h",
  "key3": "28yq92v3pp6sYGnJjgxxewGfMJNB2ZBFjojfc9VMDTY85uSHJzsiTQmZ4hVh9Wwbh8r2yLJsfgvK89dBbGa9c51f",
  "key4": "B89CEYXVGcEqi3j9NP7FNJ6WUSHm32yK75PR6pB6gAKxm4mxkenqCxkDe4vwEGKAAQrv6d5xgA88TUeKsMJjExg",
  "key5": "3gubL4WV9fjJd2MLPFRptLCXzFXUE724AxAgDdJRQJBTHoeHftydbBHt68YxMZ7TbiuqLzgyDfH2Ag14Pwu144NZ",
  "key6": "5o1XQiUXkJVtQZbbw7MDoD9EimC5oX5ECRbDV9rwpY4P2opkiVTkFiwyLkfid1RLjD3xe8nQYXCLiXaygKSnfBeu",
  "key7": "387urd3D6T2x92sh9j9nTxmHVSAHqwH7n2hZ15WnNfQi1pn5qoQGexHcDiM4JbnNAYvkr6oBL2Uicvmbz89cEKuy",
  "key8": "51BYHB1dQiseLEQuQN6ZWNcTHyH3xZ4CE2Xo34ipXKvKxvcxv2VuXGPTuYZqw5JYoCa6D4sHqQwUnhy2DYvAfAJ6",
  "key9": "51hfopf3hgvnXj9jfx6TneL9xgckHibWLBDXUHVBpzXFuSw6uz2ykGaCjsXzY5Ym6z9JgazDDdaiimzQDDRfrVdK",
  "key10": "3qPY4GfWVWSGG3V2kSSdtGfZAGWU8zQG5D98qKnk9TjeKEv625jPmwhvUKF8JodnEPZCFPyG6A8319pjpCx3PpGb",
  "key11": "4hPFybaRuVV3mVMxH1wTyfCewVTvjVKQHTLsPfo7H9kQaeNELRvwUQGsAbE3uHKXVSCrxH6sT2Lo5aaWe4rqmcPJ",
  "key12": "21m2W6pA3RbdgMrhc6geVi4YErbhzcifA3a7j7v4shAKpXQ52RSt5zxC8TG3WTtFPrHgeoe1WxnBPVe4aoqeUGCR",
  "key13": "1Q2uBoUQfRTszNZXLmfdXXqaGtzcx3kAqAqx3dC6ZHNcYGgygtkZzmQ3CUmPVwkakw6LMmP3ewsMpjaoBEP6BzW",
  "key14": "4kNfgWWQY7WfUC9iAY1ypZwHcjKCBUPdAUhBMv1KDVge5QPQZH6T3748nJCg3vCvCAGW8UwaHvBfMbMa1NzppDR2",
  "key15": "5A8dVKGN37vufoRr8Dfmi8TzG2jkpA7v5K9FfQpyUu7hhX5rcWrkJaQEUYzx5WHLGxDiVCRqKki6tctFv9RfdQAc",
  "key16": "4Sqrpa9uGn3oPL7EmkZieYeYjsgUZPRs94SJTj2Em5JDBUgAT45rV8ycKf3xEXozfdKsrE9kyAxn89AnH4K6S9Qn",
  "key17": "nTjWuReuQnrEottE5GiVrbhdMZZG3rqkEVwdA1T7mvhKkoM12RiNkSJ5G98SKCSxrKyFPT6QsKG8yfGrJx3t8N8",
  "key18": "BEsqs8sA9EuESbA64sTHTK8fhgaEY8LWqrnJvStcJE4n8qLckjTQpWY8eReBsHPb2d5qWd8fJXvyrNwQybrRAVo",
  "key19": "2A4jeXka1g9qypb3pvssbXgi2cWXpJSTcAKtP9aAXCQDBbBPFFCCKfQvWre97EFREcf411KgVSyvrF4ivVrVLNz3",
  "key20": "4vxvNBxwxrbVjuLq5B7h5nnGZHW3sZ5KHoarPZVJ6np9KAXxQqekuuV8feUePzqMRFarTpHEgayBsRcFW3tyvYbs",
  "key21": "2e9F8KxPACizxrKV7GUCd8iWmrEJSArGBMusrKQnWoCCN6oZt5YMocTdjSGsXCdTfTEdgCfjBVM1WUBTbp7KfX4M",
  "key22": "41xcHq1RCByVqiTeEUV7J8y9yuHfNFmbmwYJT69VKgeUDzbb8sBhX5Qh5TnvmLZegFiKAxvU6k7igRGCNFNv5XhY",
  "key23": "2QGZtdkMRYF2jKN4UAKN8b2G7yccjC3PD7VUU2QWndwtrth6nNyD5Y66oqwyWhMVovsCqae3qzuojUXtFQyUHVi7",
  "key24": "4kZ32tp6Za8TXuXLVd8yyye3FJxGPHydCAqbGdMjPWUGC5VLTCmhZyCazDwGBG96wMKro9zT6KCujrsy9wwqNco4",
  "key25": "3j92APw1gJjf3oPRR3hvLW8SYrwPer8Fnb73WDQ1PjNc4EW2X8hFEaxLjreuxywUWcb8qsGpAnqpJRDmStUZ7ohp",
  "key26": "62NfMRoqitUSaM5YHpqK5AuGxLFiNwrkbGVfSLHsN9YntWDhDqcYGUJuRWsgkyxWzNH6SFtUZwhUEUoCMs6vedp1",
  "key27": "4miyxHgtW1M64uykmP1AyFTvqtSFnyrRFhkGtunQyUKeDiUFBwbhfuFxRkBqsu5qk1fYqqKfehMuXdxGVwV5cxqu",
  "key28": "7QCin8zJ1jQpprVsiqzjGgx2wKzPvyJmrasJ8pup7e1uiX7ZuRp5TcQ3S3u9pbUNgFZQLSkzF8FmRp1XPujaxJB",
  "key29": "39VZ3r1NDP3utC7DvtyxuqtBzRYapz8wfNscHztpXNtfkRDzVvyK4pQc84vnyLQzZGHiEBewAFSPD4nzdhCCTEV9",
  "key30": "BVHKQbk8WQFi3M9e7Dpi2HvhW5a9ydoYE6JapBmiqjUdCbQA3Q7ZJah77CXUiBhNico1yqkKjBoj6kiETpSeZ7Y",
  "key31": "oGAL1qumw7ovuu9gDP8jEZUTg7cXf4pdv9urJobQ7hLLspDZywWrvWJCw1Ru7huMSEVihnh1QSEwUVeaXFNUvPz",
  "key32": "4tjVftWzyhYq4zHAmUJjge3kCJFRtRDzci5FpDU7anB5sL5NkvjswX99qc5MgE8Tsd1X8zE1JKQCneFi2t7YfRU9",
  "key33": "2sPVYv3vjmftwYVpAqDFou4wPrkvmUnfnF4ucD1LUQfM4Qum49MuY5mBZvb4aajwoiZ9xHCpKRx77FxtLe6Lo3x9",
  "key34": "4YotcLjimdSanaeHa7JwyLfjkav82KhGHKABVJQD1CbW7iYsQMo6w7pDbmL43omzB3LDQFikb9QYE11wS8bgaWSH"
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
