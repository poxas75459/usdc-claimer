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
    "3oF4N5JtDiF2Yu9LCwhJZi9UJyBgJ2VW1JdEKBopnmb8nfXZA6qCLZMaFmqQMQ9xkzEyCvwAXnXyqWm3HXc1Copc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N99EWYSHTzgWA1LkdkTUcBzSsZNJVUCVWcgEhoxDw9Sot67o6avzWAHioFgpm7Dv6VfQVeZX7FHR4P7wmGEUZx8",
  "key1": "4zQQPPC4BuDCLJXftupcuJbhKCRXKompfxiMGBrNvHpyeFabjNiVdXfDADbwG4XM2T7rnNSFbDmJujPdXEFBTWQB",
  "key2": "59GJjSHVrU9dLytAzLhg3y39wrEWrUTdTWnp9S2FwXG7XRuQj8AVcSxKKY4dKoYAWuDdMhAmEB1czYPZxkt3ptNi",
  "key3": "5m9dhcnapcVhfXGUD4muxzoLjvrmNzxkzx91kvwAohpSxixrrrygT5SJa1YMKtrJeCjrewuL4gGAUDqL22T6m9Ew",
  "key4": "4JBHjqwRvuHCpVDVThNif3htrNjPzwytZoLKFPWkkPFw81D6HZ8u9eVrLuetykLsZW64dCbzuBuuudjeSuRpgB9a",
  "key5": "3kAWyspdV4AfDbc3WBXJ8mhKuR7qSJLMM6tcc8zJCx9qj2qwZ5vHoesbXBUmCrvjNeoLbRzSDW8atR2ihyWQbdL5",
  "key6": "2mzTWA5hWPoeQxbVojyg3ntCjbWZkxhKToQuUuNCM8bfysfZNP1L9duk7XwyZkPXzgrapXTJVjWPSffGRsdGeV76",
  "key7": "2P73EKG77Jxev1LEW3tBAJoQa3wddi6VJmq72dBhH5d4DaVwvUhFYfkhZf6fNwcYqLZQynzLwAprBGtGSKF1WWYM",
  "key8": "3XseR7zM8JEWGX3JF49UD9qCLKjPJNLRKvW5gNUAGcGJqUornf6DKdCXXyogwcWjd1RLMaQaDMnCESB12n6n4nmF",
  "key9": "KwgKd6ZyJ9wqXNmyg2tfV2jnLWSQQjmt5LZdKdCPAUkiFa5PcvXQ8h4FqCJVFemGVM31Qn5vzo1vKavWreBiRRP",
  "key10": "49BgjSPXVdYdYmAYTShdbBjFe5NvRm3z5gjtaLio9RDdh1P3JwisfoL2uC69faEuRoHJq9cm5in4RgHSqxyovkAX",
  "key11": "gNhQEcdDzRVrYibYTu911pRkdSPiPH51YzRX6SmnqqfPfYQRvsv1zMB8oNHoP5sqYu5JP1m7LK7PEMPHZzgdgnZ",
  "key12": "4ywENkoHp4hqsiiptDT7MaT4g7LkxQiRDKRU1B4vsH9pNW56wy6hzS2KrnzcBBVG6YLbQGF5dFNpjmVzCFbHsVv7",
  "key13": "3jbbhpuViEi3SNgFt1qHP9WP5AjRUKYpvPiqmxXy3fGMsNtS88pjshif5HQmbjSi8YtBGaeGd4pKzgV6YCTEQTJM",
  "key14": "5ziKMToiydFfFgFRQ4BPKGjfnJm9iQJjh5FmuGQVPT12T7zXaAUmuVYSfVurYBEKtmjd3hbyDD6jfgx5NWKx6ZQq",
  "key15": "3cxo3sL6ZejuyRuvKeyYDRsatXjCYCdYzX6CrMZFVMA72sFqC16yKNHAG82peUri6EL4dtAP7e25oLEU2hBnpQxK",
  "key16": "3gdDpf1WJHrLL2f7jjoApwyCQMhJuWtxA6Z2DnNgtUm1khUKg3SaK3vknyYr8LUhGxndfiiLDEY16AwEmHoV8UB3",
  "key17": "5QCpPwZK3kDgJAVDvo6BSRmgrEEGdGDBLtQBuCmwsNW55m8xNQHsxHKd5rsY1jt4Lwoa4qJsa7NU4VjmhiYvdwFF",
  "key18": "2TYrEkHZCFFThe2wGk3ZexBYHRRGi9e56R318jxN7sm3zgv1SL4ZcUMVSZ8CXWvWgnRhhifQL9DT5xd53q3C4DBh",
  "key19": "63wKXUn9w8yCA72dsXhW5UWewvdoqhwrCd5rVE2N94c3Tca7RdKGPvrhfXRTpSzc2TgGsR6Pa3MNxNEMkvPXDkTr",
  "key20": "4q7P2mSNZZw5pLuShJXy25djYeJugrUybDCusKStPCCZ8LpcJ5kYLEQK7ZUCCRTJeyMex87kMgZSJrVisWkRPunY",
  "key21": "3CMchbC1xiKdPtvJsD6EJAoMMKWjjN86nAkyZuCPS9FyMAeL8SUyZkLJtNuNNJQ14WA79nBT54QiEDBSsDcZ5XTt",
  "key22": "3teC3KmACRK87MQAwXoTryjzYZq4M3aCGvaLEv92j6hMSEKvtf7H4D9rKtyrnUkUaVjZJUzRXxBVdhgDnGXp13qz",
  "key23": "5MBDZMnQ1fxz8ffiPkPNyzRxgKnAAmthpqMEzeMYX7r5G8xXE6izVPsYEFD9PXQ17QtKbTW1X3iakestexsVPe7A",
  "key24": "ZJYjBBcbErwGPdE4W57MH8UDNsjt1PLvnjWv1DGCkTwV3qGhbm3byFAEgpf2NRZXuLynAnk38eqvBiisMPbzSNq",
  "key25": "3eUjtyQx7pq1qhu7rbobrdefyAc75Y9v78fqrB75UZSHik85zWhwvSSuxTNzvtmf1du3to8LttGg98SKgcJKuwhQ",
  "key26": "7S9fYsVt986KQDCinsoGb2UKJ88U3maDE93naphX7noCrxFdj5awtw3BYXzWhzscqzunfzwyTkfaqmhixE2Wc2W",
  "key27": "35vqW19yU99qexBmTHPSLWDTwEjqBmHRKuZyiygCdKENJZmKiQLLbUdW5Dd7JsP345MRZ86Z3w96AhhhwgJt2g6b",
  "key28": "27RLgDzF35MYU2umX66977hHoPym7FxtAoPzQ7XeznQKwJkK5w8JnT8Hm1dwPHJudxML4MPULk3MRUDCm8iNFX4b",
  "key29": "4NUQV5QapttTGNDejBz74KYuWvG8m5PaqUNn17KRS77568rgSKQo17TZ4dFaD2Kie1S3FZZFajGEZKjsmsvWf4wJ",
  "key30": "3HiTAKpjjNvM8qFgmMUzWy4JU13yjC9DiPudD84Jvqv6HyxXPsc8QXdfUvpVzPkBTz5p2pyoYG1T1g2JVi3RacM1",
  "key31": "67CtaaoVsDhE1BfFA6SDjt2CSAogoxyAshAN1WHb4zhf7qf52JrNJP8qhVkaUxYVqYMcJa3jkNrZQQzeXEaVeSSw",
  "key32": "4cGXnYLHxWCNACMK4V7waeH9np4jTWML2XoxFeenrt3qSJKbsLqAZgLHryb4MH14BoGZLJKWBasfhVVDa528qC7e",
  "key33": "4g933FnhN9KHkfrmmwbAH5hTwT4p2xahpzwKrAQo7BCAtdXuFCFaPudCk3VyUTNXFvC2jjjH3DM6pEYd6yWnDENY",
  "key34": "58LUEQZCRwzuuSuHJG4tHYsE8okh7NTuVSeU418tAbp2nSxVPnS6Mzy4B6jmjhmkNk9Kbv7PqtKghB5bjKun7YZX",
  "key35": "35sCcWqCE4VdvYNFvjzNf9krDdiqwm9EjPjAqYqmXqPxsXLvyzSR7Xfa3o5LpJwEk1UzJWGK6ZWq9RVwBjbNx16m",
  "key36": "V3v1eh5yUEPFsjs8DrEnw9rJURTbhk6Z9ysXiSxxUbVVEwtivq8vcUvMtyQdW9HXmP148vUbUSm3YPBD6fosJ5g",
  "key37": "5y6wW8j6GBYNVAbiRQW8tUEkQD1v1nLo7uep5HtBi5RFa9U5ZorqmmSNeYvub6BJHFRnt5nEpXJF4N21DNJM4jaG"
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
