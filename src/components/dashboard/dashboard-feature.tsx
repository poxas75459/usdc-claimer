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
    "TbdPaa55xrkHD4CCZ2gnD72fcX33npi3QFeFLMQJg7bnP21vCEPPt2TiJizaDPShKrnaKtgotYX3N3Jkx2928cE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Cjjhx8fDAoK5nnT9X8Uh3LNSkbP1NdXAxQUL9PVT2B4LyFRAPAcxLFUYN8P21aWcVF9sCR31ZuDeA5pNu1KFfn8",
  "key1": "4NMb1NGXoi48fYnzpfRzd1DUwzmd6UQHXvG7wwxbjFkcMkMpUoZQ5dqkQpjT6CkuzGsRXynDhxDqT7unbmXsME5o",
  "key2": "5uH5kxHksQDAKwafYndUw5rK9NtBiAZRdtBywXi3LRts7Bd4e1qSnHrsEVf29kQ2ucyXTwu9ccKbRgj86os2EAv6",
  "key3": "2gL5YKcBKndP7mFZQ7YCY1grMEq5EHRZkFBnAGnajqkPR83ygU27yM4uwTTsWsoBmBk7J42UMeDgb4EHX5gwY1ZP",
  "key4": "5YjDCDfPpDnrYd8nCJSXGHgF5Ee1z9HUUBQs8XoxBCqBQKsKkiGiuYddoqTNLDDsGvYnxoWws6R9kmjEEXiSgcpD",
  "key5": "4PYxnBARyU4zbxsm4VNVu2Gdqr4hW6JMKqLq5VekxNSRhzLthWAiSKbzQeXiaZSD27GWgtqHTf9CWtP5Ap7xHcp1",
  "key6": "3sKcXAPoqCoTPGTStn9RiT6ekwRX45BLN3SNakUiHALPDYcR4NJfeVkzocSkXYTXhu2xNQQwUuHQFkSadRiVFbiR",
  "key7": "4k7BUTKgQbssZcsu53gLZACHGaDa7Q5acmQ2XwZKNBGgrMj4KkJZNLAZw4YbLmtodP5cimQmR5DGfXHqhfCgz3J",
  "key8": "67fLNTvLNGFRK9aVWc73bbwL4eEbzMA4cFu64g3pn6J3kTv8zzWz9QzcxFAu5rLEXcuoQ9efof9YSjJ6SjWSvM8d",
  "key9": "2SyLE3dVT5B5qS1wSqusvM7LwoM8KRPmtUzj6npGewT69gHBPAm3X5a5RPZuLto2BmvBHs3UcGjYYKQyARLuviJ5",
  "key10": "5sbssJaim6RLmbsEio5QYrzj5RWsbHbzS7uN1t5Pfk1HUXSG52pbKWVQWLxBM6GuUZpV11FuosDEkQ3qtfndkUvs",
  "key11": "4Y9KVMP5xsbg4WamHwPZQPMu7U7wMVRY8qLRzxH99dBoTQpf1nqsLZkxkPYfgjFjPBLgPTr2ysfBguq6HZJQFugv",
  "key12": "3ogVNLsrahu9bvfn3tJDNMTqwXs7JLyMn4zPvCUrQvh9h4RsVATCCEXPsHGiEU5E2snaFnzYDCLTsJdnUkqbDhVj",
  "key13": "48kT3hGjdmsR9koZCsxC9PhMG9zJ3HnAHwy1TTK9nDuvEXfbcCUZUK7sgD4XvTumYdGcfpDkP45HyETR64RTXe7o",
  "key14": "fD4hygAGWhzRyMqqvz7MqhqcqUG8SQcWuhMv9ZKqejmG2HtW77qvaVCKmKZSbfD9bjJw6e3b4BtuipoUkHm7rWR",
  "key15": "565SK4a7pwJM26vYDty2odSpQzz5BwugNeiNnYxkEjJwZ7EfRQdtP6BbaVdrXGd38SGS6ZBKfYWFxSSUJSPCVF2J",
  "key16": "nP1m6w7tJHoRm6UwNQ9oSdFekawasGa3kR5X2kbHkFnZ35paMiGp1W3HjKvLw3fbr47Kf2URFNEd8p4VmYWRc1x",
  "key17": "2TohJXNjK16BbQE8vxipXpMHwinUcvXvYKtUYCdMVkoe8teVqJkes9BU5yogNcXhAUvyfSzrDJBMUtcT5M2FTkpx",
  "key18": "2i9gVEAQgtfiPb87RF3ES89MZi7pKY4y75LtAYzKSYwABfK1YMYeBdLCA4LbguhkwXWwTXiNk2NKEs3GQPmegCrr",
  "key19": "5PqLUdiiewm4TSqUdVv3iw7NUhfEEAMot8PbXm8aV9TxX19oSaBfBjwbHndxqEMM6tvWoZJeycUefh7LhAV64Bkt",
  "key20": "4FJNeYHpWcHAW1cpS6dmX8naWRQYvAa9XELEvX5G84gLh6Ep1rDnWZ6Jsb8JXWgtLUtqeyJwbaNPCMt7FWg9aK9G",
  "key21": "46tkBWJASsmNJTufCQgjLuKBKLgGQ6JBhjevVVD4cvMuozQ1m9LPceMvPoJwhVSUdhGVZs3GuExt6Cxsq7wmkv1A",
  "key22": "5F2f7pnQfMeuPuhNZEhxCZAxypPFntN3zAf7ej8RitDm1g1avFWrKLauhzLk2QGHechLL7qvYa4Xo6uzKvZ3wm9H",
  "key23": "5pPo94jgUYp6Vhf3gjLHc8GYmNCjVSTiqBDh9A78axQ4KyRE1YTrsqLBh8k6qaBvdi9k6E1xbC9rUQSc29NtiqaJ",
  "key24": "5kp9UdNvRwNe3QCHDVjUHMACgYAt5NmceW6PCSfCrJ1ruqokK1bcJhxLyL5e8uvo4upus8LQHtZo8tx8AfuMYgiz",
  "key25": "5g3tvGGwtTJazGc6RxsYYpfjFDfeHvPstyMMqkafhBKiotwbNCXMu9BTpjasSeV2zj8TES9ZhZj84rU73JkBCct1",
  "key26": "5QTZDWcLerE2XGqCFEVkA29c1eEge8yd188spKbdXFVd4VNX6aGkSRaASkKr8teh1mgNSnbLNGRfJwrtSXr9VAjA",
  "key27": "5L8NTSU4r8unk9953FbNbo3KoxnmrETXXY1CeKx64v6SQP27tvAVGtzUTjkbDJQtfCGtziitq4a4sgZkfCUBM3yB",
  "key28": "3uvGrcQJcaTCVmy6sWffasqWvRbxqSphBEHqeJq6Thf8gL1k7C8cFLpCL1hXZaUFctYmVa4LxfDUY6uXFAqX5oHz",
  "key29": "2tySi1v46HCVdqpFVZ6SJgi6Cg647EcaQ4bCRA5kWkU2gCLcRfkHK3e98Y6ks2d931R3pXfmLuz2sKUzC8W39kS6",
  "key30": "35e5A64zzRrx97Mcg5D47NmoSjSGcnQ5v6E33YgdPdrroyNBxzfRNKcAtwbDZuayCNaaA8wFvprXxYNJ5mpmcpwy",
  "key31": "3N1tp23TKSiXmA8NLomufh26E56Cvz9SZpDdVQz3sFHsrWZUyFJrTP7V4tfH4K29Nnv6SgUFTDePiLW9iC3Y24cS",
  "key32": "2mXE8Dffdbwr6itt2ZpaMZJTMkhWwHEY4tfciACpBcAWzCVKbAq9CdcS6TvxK21GCymAYt9JVPAU86FgK91q6SMH",
  "key33": "58xcovK9iG1zXkYGksP1xa5ie6jiSqLFcqS5LeLNX51mBXK76ATu8hmJ9ymfGQjcrhSi4wRcNkZvExBKHHJRG2cy",
  "key34": "uEGeoMgcgko2nHFXEa4ae8cv8qZsRTWSANxJ4AJJ1sWqQxQgov7svrHSAyQ3SYVrVJrphtRzWpg8bTaFpy6br5t",
  "key35": "5YXiNmACYCndTV1zpYHJRXjY9pGWbMCPxhAcXdrf6agRzHPXkn36snuC2aVVyXPppZPicajtbGMCU4BBJ8HRv3Jh",
  "key36": "3YFY6XtTNjnxo3M1MoDk4oYqYw89VHTCCgqeTBS1bEyHT2RyMKHKTtY9Au3Gr2nvFpjAYS4F2SvonSJBrAkbnNby",
  "key37": "3nKJmFvRhwoJDLDtm9d6HVWVynnJZXud9tRAX9AKATAJTCe6QXxvwmjoCTsuU3C4ads2Q4K2rZvksaaBzn9v4KsK",
  "key38": "5i6Q66RgPFvsji1tVfovh2fEE3Nujj72EbHPBMQcX3PDwkjBNg3F7wVabVtjYuPiqDqv2rbzGtAQ6sP6sRuez1Yo",
  "key39": "RCMnBMhan6E4Rh3GunzsUbEzL7iLouwMY7bM56TX7VVS8WpAp8m8Jacww4yUamk6jg6MifDWHU8jgHuDg2y2xpC",
  "key40": "3eZoAvobgRqNXB14te8iRFCMykFEfvVuPpELyAHXkqDghEmAfUerkhbHDfLYftDqjHGJD6NJwih2aicowkTZ3qTE",
  "key41": "7ETHGKKDiv6jbEW1s8YZLiyeVGpnHnYQG2522E3d9n53ZYvCBEJ3n4dewhK9MPzyoxBT5kGFzne1MVt34JDaJZQ",
  "key42": "3zbDBE3Q9VVTzVg5hfVkNCFRiaAom39vvTpfwxf6gzTTtxLLrpBhyEPkrGYBJ4iGu94NpmZUs7Av2RA88qgmZiWz",
  "key43": "2iT8WEVZQgMBUC4qPyxWRbbvdHDfKg5VUHaZBXjqj6ScbMqPh379KzXc3TQGZWtjqbQEn5irNVGtwQrXRcYQgnE",
  "key44": "568edCLKPknrEtTrc7bUn4xZQxEuHiN6wvGorSeGgBbFdUYzXUTjKKeRE7TJCC68U5dTUcaPLsR9i2FoCWaa9qZR",
  "key45": "3V1NSTZfDmkJXsz3dk5M2gtiT3Q7fJ998FGsirJjpAhJ5s43SfLFhLH4n8NTNJrZcQhpwV78TWfcbD5yMbfBVcwU",
  "key46": "JPUvE2cbdWC9FVsuQMxjtR9rcPuLCQ83srEAjzT4VUNz7xwThbawpqBgdjZpUikq8jHp9UmnyfMRgVxa7LJSPfn"
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
