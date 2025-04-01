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
    "mTdbFZc5aCkqfMFiwBDGkZESdNABrHqUPu3K87Mcs5Kd96rJ6cDGUcc7vfHXLpmpyaPcVrLdNZUK3FCr4TCANiF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4534ZZj3symftDAissR1NCg7FbLfB3BNvgT3tuhdvSNy7xdzBiDvTz7HSJdMzgMyq85cfVHALJgiNAvV52pAqp4t",
  "key1": "4u9M9ypcKBa5nfhPNuWycUgECo5VRbNdBxM23w5kTFVjMYE1EcTqzBXD4ziJLhsUYpPKrDS3boCdCatifgdiFeFC",
  "key2": "2ifag5pagL9r1TTHSFvLVyot7S5T1ChXJVHRrQsKpN4goBBfZMbKHCL8a73W7Y3AnJWKyX4UQRAG6sifpJUQfr2p",
  "key3": "2UViWFJ5F3MMY9d8LzLoaGHLGuNr8LZUkcBLJftUjcWtakvSZfeWYzG7CEvgJYRmeLxqVcGdwKH1E6LH1NnCapNV",
  "key4": "2Deh7XKTC51RiP8GXZ9xBKCsLWEFWLCtyYxVhBfLr65N7Yyqd1xGfQazaVPazHVbcR8DTpn5hndYSmiHF7UwSz9G",
  "key5": "3fLhwiXZ45sptqX2Pf2LBv2yzABy8yQUzAL4wRv5ovxPVJDgFV9eMxukz1JwjJe96Ni9rNttAVBKFCrGbT5G7FrD",
  "key6": "39xUAoYWW9oQUBQ3ZfqxGJSWS4XzWZjGzRPWFmEehpQz2EApTbNDcpSpDvkUCLqY8EFnePPgEzrXgVJM1bpUJWLt",
  "key7": "4pozrkv77J49TU36YPkoG4h1vQL9kstHH9J7TEX8YLSTwQ1HiP5EoBjMJNQuKcCBqS9bJ3YGLumZTQvizqa2ctBk",
  "key8": "4yAU8zC1fYf5xLwVhcNYwX6nKLddfMSikKkqZ8xq3uawFkoKPQcqqEXQhdEM3x42PHx1Q6kceTZ1YyHFPWFXkALn",
  "key9": "3HnUmJnZccsxYUXLh7CbFEPTqfnJkFfVdFJeVAY4JiBiEoN91V9QHp7wzyR3yGGLJAj8v8DqFCE46hPvejaUpyhi",
  "key10": "4jmqG6eHE83BjM1dFYRfAiJ2MRZupLsBJbUYcf84UCooy2358CgyFCUKuTLQ5qo5HomQtG17FcNWVfaa3Ckew996",
  "key11": "3c7vWhfJC4aaxBFRL4Gs6n2XS4oxVMH7AAM8HZMC4kGovHUwuunexz38zHgY39z6AbRbeiaRsLVVaPNWed4NE2qQ",
  "key12": "5T5NvNA3HWmZpKS8c17gS8rmu7bMZzTdqW22vVacywh2LYYH5Bwrr3aaKFFaXTJwuv3mFxoUh4EhpvnUb5hGdTmx",
  "key13": "2i9a1XBFbDgX1DUSaBLz4gdvt9QsLVdoTsJg7nTMD9Yu2vVgmbtbXRzJf7thb2VG2qhc2UHNxJX1rNafUjydggUa",
  "key14": "2g1XYXH54pXv9u3AQJMXphbbLqU814WUR8QXH9XXDrdmVNAksKxH1V3hSLHda25y61wHHoCyyyNeCaTE1TPQeKsg",
  "key15": "51K7MFknHctevGCj27eDRSUYbiptCZQxyK28DvKKhUk3WxSKQgJnXF4FTmJbE6AyzZRxHUwPHYXXJVvWNwaguRZK",
  "key16": "2426hm89fzZ17ng8c5c3r6r3tBNz6fchy32t7urwjLGSaJefkDQZeiRzAD1dW3Q7b4dSkpMyQYPSTfTvy6jkyUwo",
  "key17": "dW449jA2EdNJeJyB5o7fBspDAiE48VRCx8Li2Z83hPPPUiWHZbp3AEWJajxT3SAV1Fx5ndLdSjexGXsNf4Fot3X",
  "key18": "2WAgTGd26waL8KwpCphzUEBPcKzTdC24oUemtRJaERmLBekggp4R5u1i14UvKGJyhy43EWvqWz9ZnntyBNHhJhbd",
  "key19": "2jEBDnAsjipd2vYQf2FtNi1jZTeuyjst8q9Y1ATXTJ1UfzP4Ae6jF4GKQqtF6uPrbs2A1Hqe8AtgXWoL57hXyqpV",
  "key20": "2UyReJNmpnAoSM3MSv9c4m9bke1M12TKPVRYoaWpEo9fquNtnTHKJ1aaPAPPF3RarrsURd4nwLYGrYtx6RhQwEfM",
  "key21": "5AvJxEyuBYdQSd585HUiZxzEvyWwf4XwZLNsDUwkwtAdTWyuuXhe81oGsztFkm9nD2tm1hirZLtqmpXFfNDtBNxJ",
  "key22": "2LPvP6pinw6wq1kFN8QBguS8jMqys2yQamupkviNeaJRvgd81FCAAF4aHD3wDri943J7YbHPJCxdJnsZirvTtgxZ",
  "key23": "5BZqC3tLy9UYSf2sFBeSrDKi4QzvPNf2LyEDpCymkxVzcN3R9ui1baKACJ7bxdtPe1K52GffBxgUtrREvjF8HGjF",
  "key24": "5JHNfFHGD1ZKRzoTKsxEVWWyer5HCMkWRUUsj5gtNjsDnHV49vz25j2KNDDriVgacYScqeBEENjtiuC4RsXtZei7",
  "key25": "4ybcKxrKy7WsqnE6kuo4gsmjtA98LWo3jLMSnawxUd4SQUd6HvKDLaEQ9uuJ1tZrvJF4AAfugmwRfg8wwDMKRhz",
  "key26": "24iaHh5EPtBJmdq1rLi783rh46czfDWDQh3PyBFrAKhBaa5y2NgW3qBxCyvBHM2XTPAHqj7REfziqU8K98HRnYY5",
  "key27": "5dbkteddvMKmr4Hbzv1j6B8Mxxg9JphBUyBBmQzNKGg1KZJUyWhy62Ct8z4d6mPKTVCwqwFYo7EBpL4BEAZchoi5",
  "key28": "2WYsSetYuHyZP8dufiKEDgS6EeySbC3dTvxEEWB48BsoKX98nuBrDK3GzBCZrmBLg2zZLMJD41CVYLRqeGkJjfo2",
  "key29": "5GfFouoYNHZ5vdmg1AnSRk1GAPSavFuw7u7FLUJDKVWXRoDTEy28u1TM5TeZqgTNr52DLASvDyhSSbvGtLkGLZeA",
  "key30": "2K2w4v6ozXAVSBdYTL6aiSjdYQc8rxRVyG48qukvqwDjMR3e7SUYYknvPHCkBQb3yDdpEhrKn1d5rMBRwQX2xF1w",
  "key31": "2NjmXJAhnVWrnfdu5295PpcTikQ6VvCKSzC4HerFkYp3qtgnJm5KZJUbcQDrSToUNVtwkjKD22hjqSS4g527dBG2",
  "key32": "4bAfJEL8eua2W8QBrnk4hBp6wc7B8cHEVU6WyT6Kb9zAxhsbYP2K2HwnAtoUr9o9JuEfivmBtUjBpg4B9fKSQysm",
  "key33": "2P8An5Z32emJumrTRjnuEm8WNX1y9RYvc5dvv1QAWfWm6QcW9FqhVWcsYhSdAdZEU6hASZxq1Cx74p5TGjcjhU19",
  "key34": "3k4BrwvqbRGJk5S2w9wvgR4DqqhHmZgvvMoZR9Dcm73ZpQTrYpkbtpmyW4zU3WvrCxWBsVUBWXrM92ETaecKm3fW",
  "key35": "68F1x2vxPjtGkngFA4gnJXunk7qRp5vu9Rn2VFuTGMFUP3YvQgLBfcyZqVwnWEoppxmLtZYZKudagkAMtSZxTiN",
  "key36": "4HzqGZZnyFsZp9DmVaCrAeHxVrWsVGfBtWyiL7avUFpz5UKdHt6iZzesE3VhvW1eP7rV6aM4TEuXMdNUBUX54SKj",
  "key37": "5R46XzrfLiUpxX594WySpoYMJzE8ggK7SVauxDvMetzUUNS5XuUG4T6B3XQEyUmZx1cUsnzeuMrHQUFfHa9ipq2E",
  "key38": "231BFU9KR1X7cfn2zMzyYuKTjK2SQzYpWHaVXnYkCzPRkbpDcuFFQEdduecJo48XAefVrp6ka7U43UcxLR1ZiMc7",
  "key39": "R8je99nRA9z6gUsm3XNeqkbtDphHWA7Q2qaUL98CZ6o8NQoZfrR1WsLUv4BanaoR49Lp5PVv6bSSK4gcakA73eF",
  "key40": "2SFTsyDtcpj3jtpMqfjjMcmhEgpJRm2NSxkbkZ4JALXNXRcuCtSmZKr46ie9D8fBhBXDoStCiL1ztmLCJTR3eaQA",
  "key41": "3R4MiVKGdXPiEkqWBb4ccgXUdmvgtYNThMrJJh8tgF6ENTxTAi3nsgoHF8a36YPZKXjnfPgGT28S28ABkgDeVpJ5"
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
