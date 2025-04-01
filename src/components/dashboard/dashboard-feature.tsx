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
    "J2uqAhAy9kWgUgiF3sCrfiwCX8SZcLNQwyeu1A6jfqmqWCE2jxqKXZLQf8FhSjtWzMnzu97TwHz86HodrfVrNki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DCn2EMFBKNmeP9sKnQr13MLmVH4nbSHQgtNQn3okkT1bpFUiBsxfYLVqT3s6d4hwPAbqtjtuvWc3KkscQCEG64P",
  "key1": "3anYvfpTwJogrGqAeNTxK81zhfz3NTK52iWcNMTw31TTGRT3GWAHtSHHkkoCfi5wFJbxrdTqA3c5FgyPizWDc94b",
  "key2": "5Bs772BD63twXpGCUucJWsYSQnGLHyA4XhTt6c6VB45NLQKXCsW9LUKaqUVjbK7QrazPMQYW2qpTmxoAnTm6knQT",
  "key3": "5QhFaHXxZGQeQ4UeicmqZbEvFrMrwCJvgE3FtQ7SXtJNgpSHJq7x1oEQwmEriHRhZB3ETENokEJW9tZhVdK2HVcP",
  "key4": "5FXhWA1Z7Dr43r9BrWihM1PiAoEgcrXs7hg5SaQdhhrZP5Wjvh8iG2EwkyaqcGYGVYQqF6mUkGkD9Va6RCLVg9cQ",
  "key5": "2xhHkU3fo27wDkKeseMxPWdHjKKsRTWYj7beqjo2X6TxjXP3bHoY7EYB4zJKjhQjM3FNLxvzLbAfjtTMr5ZVCU4D",
  "key6": "4vaBNdAaxmyw57oMRL3AFmVwCPNbSkr9yCe4Tjz2hCMN7o7D4adGfKnGePPSTVWYp4UKwSab9VJZGpQM1mdny8iu",
  "key7": "q7uwDtfm2uJ7BQoEanK7YpKdc9wace2Soc6sq9JjJNkKZTYZGCsnDyVCm8G6yLUeZmDTrD19aAf8keXSfRTEFf9",
  "key8": "5fJXa1QTkxEQRPuZCwwK8S6b9RAV8QUnR22fsnMh5ZESV6D4KNfTP1cq4wZDuGvfjQN6EegmwKU3C4nk7rjkZeSS",
  "key9": "4yK7qwQWAy1q2isCujKRCmkSmHqLJTLvQSnuP6oxx9msmUETV1VjRKDBUDV4jEDsJikPMxzsKsLf5K3ogbEezX2b",
  "key10": "5C8CChGqQZ3zZTvqamuVdSxZKZWRFQPU8nVtPTf8h8wcyqpBdNMCECCuYcr6BaNVDg6d3oE9jL2fMjdgfmLRLH4M",
  "key11": "4oj2n9CSTHghETLp9eUa9YaXkme2LR5BE5JT7YbwFyZj5AC89y23CD5iMC3PLmR9NCt9y8QQJpYzkAvd1BC9cnjf",
  "key12": "4wWva5C7MmZEDkRugsGgqLDo9An1i5GRbVTCULT22XwZszKenp18tdTVsZWVE6h4tmqWUNhkn1D2Tm9xRPBeQEfU",
  "key13": "5UqMadWLE14QZAmQBqWkgpajwVNDSsXfai23dq8mFjBHkZuPUV4sFRLxp9NpcX8ACPe5AqcNf6jTrKdVjJmeYm1D",
  "key14": "43CacjGNqActekaHc7pYXcPyvVSt13QgFpfbCjWz429242EU7bXQjigMSVjB55mxC55drQVCtAStTJB8iUzu97Qb",
  "key15": "5tEkWdjPYKH3Wo4FCegena4HFrrahLHX7XqEVZs9WimnB4ExBNBw3LncGEtzWwWYnm9mS49sidZZkse2kCRrVKvN",
  "key16": "2cLyLYidB6o4PnK4nMaUdSMXbfa5p6cmwaob4iEVxHp8Yr3RTkAknx7yYwrC9ngs79VuhC1ke9YyGKpQijdmknzg",
  "key17": "3hsHBwqusTA9mpAQsg6YNLvvsmXWMZdqLoHCa1ftgxpeQmFS4ciMzqYi4QEUz4p7hVsNjKUAGyGKp9e1XaHvbdUw",
  "key18": "UsJN4Rj1zcV9BmXHFZBjomkgwAzczpUn8i86YGCesumPQSZ8qdnCt3En1RMBZj82ZgpDyQgNLsb7tkMyDqHVu78",
  "key19": "2bUrG8VRUyjVh8ULjwThyXqajdjerumhQrt8dWRhXxRCdetq7D8zGPdwSiF1R2ZRRsFyeoQJLisnPyw26daj2Wu4",
  "key20": "2sBbw9Zvas5mdTmtDFRS3swDErF5QzJQxH5LV4TkuZo1wPZTyyNBQEx7Do7LM7SDViMuZQwryAnygJTeaQD9Web8",
  "key21": "4Kfa66ouP9EKjDY9uj7BNbSYdN9nUgXwKiHisnYXmm3m8DquitAnTqqdn1WgZ67eMDNFwKqTa43sAKUuedbQgzFX",
  "key22": "4atpR63MKKRisugGttQQXTB7HHhsenxgjZ4qvirTG14ANvWN4sYYNLTAL9weLd6RJ1KUuWLjF4tX5LeUaqSYTDZd",
  "key23": "3JXLkPq8Ue3Noq5kidxzgDf2fPQ2CJ3yL3rmuvzwvDdFQ17GGzxjRgZkFADzKcvo1KDeFFTwNq6j2HWzPgMFTvFJ",
  "key24": "5N2ZbpguvWpdTKn5PJCVd1ENo2uqHLedv2ixNxTFJSzjCTmyTq26WwEgXX6NqUrKuTq9J8jR3S6bkwXwE8Z1wMMU",
  "key25": "48xSiXrF3tBYoiBXZ4BeEprFzzYZqVcT2iML6cbocyn8JNmVmxz4qjUbhQc4L3r2UtBLx4TmWKn6wGAWk641p3CY",
  "key26": "3ajw3DPh3d6YS7sVDRKhgcPPetoGWzbEmM4fA6efxKx2qNPSYhhKVvf4wvFptktqYFEGWWa6shkbwkBHiyeHVJwy",
  "key27": "kUnruM2oFRuVZ82UjP3Xr26XM4uqzooHHJLUy38GQCodigL5LH2eEykM3TbzF6XJ7dRqZxXjH9hPo3WBxnuh19a",
  "key28": "5p5JzZEuuUz4NKobJ985iBxDRzuJEKnRTTjNDMW2S5mvP25vfXeTtP7dG6REzVLNrWtHeRBp6UBMXu8De9oiizDy",
  "key29": "5p2bHkaY9Mb3zxo77DPDmEXyaj1VVu582C99BvEsHqq319aXJnqUdNbQYJHsBu9FKqjvA4f1bHZRabR1A7XVSJUy",
  "key30": "4vUE1L6jvSbSo1qyiJqDcbqofQvkrPxJ2WovWQuxxMibvrfz7YFcYz29Szj7DadGQNhj6PZnrCci4iVKzeZ6UjCd",
  "key31": "4YKcV6iHqAy8aLajnxoV6bhmCNaNVd3nmqfWU7AJzHzce8Czoo8e6QhQJVQwLGqG6nPaEVeAUncyUV4KF8UtpSkL",
  "key32": "5WUCCMcX6PkqGRkp9mi9Ldj16DAz9i2u1Vx2BD4VK4P1Z7K4jxAZC5eSjLcmz1LrD6Wnc2w33943CDm9EeowkmXS",
  "key33": "5gPGRhzPETcK9yrYwqhZSzmYKh7C7B5NK2TGSEVqy9yiBMR9buHmuZieN6BhzaE8c7dKUkFSDDoxDokuvPDWFGh5",
  "key34": "3VtChuAfJ6daP1nH6hpxw6XBCc128cHxcBESitGwsBzQPAUZCzTHdBfVzqnFRZzg8Hn3n8UozNBsDFyizAPih3Hp",
  "key35": "4d2emvq2iBy1JDWgTVisk4znmhvvtNz596uGX7gDNudmogLsw6T2eD6iT691ZA6VaPvLd32Dq4JgBeit4VRvAUMB",
  "key36": "5PA9oafyfBzK5ZStXWne7qi6VJqssd4ChfnQiY5D3Lhog8V2cqr2RvGW5iXRJSrjAUDPH37dSYEL3Mema9fTHAh",
  "key37": "4TvuJJ1HQSNMKkvJoqocknasXu8sxBRjMh9TdRupPrNSzErS7V7wu4RLN9orbSjVs8jUExNEdKYJJoW4E8Suwtqx",
  "key38": "2W8tPxHkyavYydthQc4RqHcTMQipxkvv1gP3hrNZu7Ayu6DhPxeXVegpS64wxT93vGBiuzmHdAYn6XxNtKCSSiiM",
  "key39": "3u7HA2wxVksj7xkHw113mMp6HGCp2DUS6j8HszEGMFDdTsdX7NJToXUxok6jjvsMYEoeA4TBEt9DAj3csw9eDo1J",
  "key40": "3NBDJTt83QhnBEoWW6y5jnhniWyQKFBHLm1LjKebpBoKfMKhc2LpFwcXShCxd44Ji7ru7kQM3oKpC69j2mTuYiRm"
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
