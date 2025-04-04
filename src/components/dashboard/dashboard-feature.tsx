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
    "5FXU3QwtvhomM17cSMQfMxZ8vMpvwjkfhTC7ybCzHuEjD5HBCZ6981ixTcgUKZpW3Av3PqR7bewqDwTGV1QC2sYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WKSh7DEtdcwPXbfEmEjReZGH8jjFBLoTJK4X2qHJdisXyDB7botkgjGnZGv7z5iiFywaGrD7iEEsHZ9tdA2QSBo",
  "key1": "4Y66B9ba2zPGepoWdDxedo2pUDaTftkE94mREjXA2CTmEUBV3Y1tGJaB2Grf9hvA5zay3RiHaTmYSrtg6yPQvK5u",
  "key2": "HLZt9N1jWp9r8vwSKeeqbVaonXinLp7422dpfk4YfFv74wL8RNgvwR8mFEDscm4ymYR5FHW2qbaUS1hqw5LGFir",
  "key3": "DuvFR4Lq3Tnz8QmADEAq1t1VPZPpKFvepJ4nANGAbJqXYvA319qBMG9PZYdvvzP7c3c7x19dBQXTP5sNWEqG1fA",
  "key4": "454pQEuTb9xBFJZud85p5FCuHVRaauCfeUeTySAWjkFveZDhY755yEA6UTGTjJQrLJxrmEtpWsQKmgyZxQN1ppUT",
  "key5": "2GgSYj116oL7nf3jsMW8qDdeJhCMi3YbejAqXmff7Mi9GpvBQ1WVyHbhKSrTRijby6EGnsu4qEqPTqSj8s2kRqmD",
  "key6": "5xXDMSFrCagdCPffd2vGEsoHRdbWjFgXPetf9XhWTMewgvNt8QqQA4iuRsq6gDWbVXtW8EMmua4PoRoDrWfZi8sV",
  "key7": "v1FgDMCN5vDakbrgcqbLkui4YCsezJ4hCg19bc9hSiJpJwB93x8XGNeNxLfvBxvWGTuzkU1V8hxCCeUZvtyJ7s7",
  "key8": "K1QDmRtSpxjUnwZLDukEACa4G3bUJTDxQ3KFPtpHNpBvaPEvV3QgSMKGg5f3obQrK146kR5u6iJUGxUr8AK4eBM",
  "key9": "3Lz8VCnFZUgQSAyyhPHJHbLSzM21rkJYUonP8ALgKGpahmPgF5bpHARmmF64A12FppZT9UtyBrwX2qs4zhGzpUYp",
  "key10": "43ZQqEmgFA4pHb2YhUD5v1BN3SBrV1cSYNkwDoqy53U9nkx34Ddre9dFiBL9hHzjn65GtDptom1ofz2zF6VbkYwB",
  "key11": "56o4Us5v5xp7ZcAHrwzPddWCjY4rjPnxfmfM1UtQwbYzrfReZJKrhs4ASWwnZjtsR8oPPgL2cLQfvRagswfihXin",
  "key12": "3bbW3NZevJ8z1vp9Mh3cw6kCbZTjHXFgAPLAeyDeFE3iX7WM9thVz5EfWjkdsNRY44MAHLHT6ib1mpWNZJhgWnBs",
  "key13": "3RYNyPafdo9S4EAJZvJfQHfecZ4F7anQkjp4gueHhgf7YAgHTH9tZuqsaPZUgBjaWTQZFLoTCACTJEht3j88r155",
  "key14": "4HntcqC599nBPRUnuZEX2XseB8ZarTHS8JUSV1Jouu96ut7fA8QJvvZFUK34RHBqXzciJdoDat5R2PMC57zQRsDM",
  "key15": "21bVvidRWDFxv7mGCp62m3h6cJhVZ8uQJjgt2QmnKDPekoU35HcdyS8SkeoJadfoFBZDqL6sM5yML5yYxiuRrSMB",
  "key16": "3adZeK2ZfAuSQ9Rg2jVFtgmoFQqfkk2NnzdJKpqmtYvExRV21AX1G2jFGzEjphGVk7QuRxLef2B9zKLkgkpa7dbK",
  "key17": "kgWdJqUeH4kqkoJwxz18TYfs2yLN2yUHfbBiHqcP2NkNB4PAnmGq7VWNpM5Q3qkD3fULkoo7ZD5eGMqa2iNKxVh",
  "key18": "3ck5pEVK8Vzzxr71hqEEoowAh6xbswwkhHnbSytU2TieeExM29PENBRoyuuKA1SojVFJGiaHdNf2NUBMjtRt15VA",
  "key19": "2qSmW8rHsMvfyGwH3fHXdKBmCZyX6zxdGZF4jF1cjshZ6UPysyaCWVGVYgycWdNwhJXKWtDoFSv1M7YcDdyzoJrS",
  "key20": "2z7BMzmKteWckahZoZH9rRxerNkFowMbBGFZrVR5CniBtxwrS2fX9iDmEXrMtUFwRMcGuZKNR463tJYEjn2Sgo5z",
  "key21": "2LBgLchkVkLkRTdHRAzZJXRPS9kxx37jPFxUNTuSfAJkEeTrwFBZZUPYXXNhSq6nfYkZmTqxdBauZ68Ta9F9oTTY",
  "key22": "VTjk8ogKJvGoiUAaYj668LayUE1UN1oD9GPfePdcuVdWyYaED2juHGAmg6wxYct7Wpf2P9JunTHXNiKGsosxKBS",
  "key23": "4tGePV5PWGtT7xRPJUnvKwjEDCKZrcY4oCGSAYGyEv1bNMt5YdxPuJmPQUYRSiW8vfi978HP7dENLU4MedGPxGGd",
  "key24": "3A1fA2mDo4ctt2VjqWhVdFefEn77v82DLieX7VUkczyYRmxn3UFrVQHb8EDuqkW1kfUru9PjPSK516EFVsLyB61r",
  "key25": "2AhcieLeQLK1SkHvEebJwbQme7vVEwWKMWnzn19gcUF3HjEnmxSmvzqb7MW4Ugcw2ZMqERT2y2dK6cpT9616x7NK",
  "key26": "51jmMQZpvyBfmSAXzhFakLgdWFuXArgDewhAQuVmqkJDEerCw4xgXXiPtRq65sWz74zfwk8CVt2p4ucpHvQcoqmx",
  "key27": "4Qrc4e36YFUuwrFYSAdtSJYBBRWGLbUa7aGHRWXPrY7YbPeqGaMFKmrkXnH2YcYkst6kndkdmnHDtmiYaJCgUJgT",
  "key28": "mmxduLdwjx4WqSn2FxFsNHb9ahYkhZw222gpGf49fqfWyFyh7KiAvCUecS9uXaJiWYRg6AasXFpphrPXC8TJwcC",
  "key29": "37YXnfWH9mrPpdX8XSuxX6RsxZ29wTkhaLrr3PSRGqzryBriZXqTV91h5e8j91vvrrghUpCar7RhhZbDaencS4bH",
  "key30": "3HUiNcLe4Yf4jSF4rQ59mNQ5Dc8GiKHJUVB4b2Aat9Fzgk2bFksiHizohqYEjQqoeMgiDptEWxHNQexwRSWzgvcW",
  "key31": "4oeMbGYzwtVv72fqLydTkPErx9tR7E5fXMwixqXyKxSbTSwpRbA5xRTvFXRSuHCgKsy9FZ3RKWF73v7eWzmTBYEv",
  "key32": "DGmuPgDrGGod4Ugqt5VAhcEppUpa3DZixRyoHmTvEScNrhj1Np5iXkL3PmPWE1dCy6kUVhQ5NZ5eEJM8CXRuQvZ",
  "key33": "2JP2MJQXtTWoB3VxNgcSSLi1y3iZB1DcQyvxmuKNeixnvE4PMfr857HiYUKgKwZdKXWyQ9nkNs6rGzH2n562JaVh",
  "key34": "4vXPXmYU1A2i2LyDQxsm1pExXHZ4ULxWAsvmEHUXgDCPi2xKr4XCyE9QB77ToTVoZaK58qpL8opuio51uDjR5RrL",
  "key35": "4oHHHqrcpgKB9HNtp3W6FkKvwrTkM92y2qAbsSQxYfwRU1DCWboeVRH7GvL7NKJg4HpMpU2j4FewWstgYhYUisnV",
  "key36": "335RVGKe9gmpdcVv4KYCUB5sL6RVE2nbCTRMTpsB42mPFoLshCi1BMGpySx9f6pHTcrwX5ZnPDeHsTJ5n5WJqwY9",
  "key37": "3JK7LBGvNyD3z5xQ6AzyoUbeGUMiZJiyJ8R3DRP83YNoMBevKPMJ7YsmQzv1BLVh4R4ap6QwDhPVqPCkHVWKw4Re",
  "key38": "XXiQ68M6BTgP38PcjDWJRZ6AfVJew4SmYt93qhuzg7TefRitxdyzdx9HLgapvEtpGs1o9MyMvWtETxW7kAsDXnh",
  "key39": "5XobmBkgV2ZZFrwCt9YU53kEsnqLB5tM2PTB1G14t7a33MEimPsnnEzWFHBgDqtU8c5GwAsUpJq1YYQZrJexkiqZ"
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
