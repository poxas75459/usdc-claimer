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
    "2pvPU66DZA32x9196Rd8poC6fLuGW5hATBvVDd4mtbgkvWJWaen1E1fPvfB3UusPi6bVfRPGSHs1Q3cgowhJ3p8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UH65EYz7Q56nMcKyzuGBGhJHPZN15foJhmUpCjFVb7HYhNdYUFaW5aA9NBrfj22XuH49eJN4aQUkTDbGeSGaSVH",
  "key1": "eWz8ZqhRrGLg3Wb7ike4tiUytjppHoSGuSXnBZC7hvEobfQsuhpSg1a9dGWkGLbFLU5Ey5jahWSdB51YWbmGGbK",
  "key2": "g981vmDy8kwiP2ro4Rj6eCtxPw8G2hVth1go1FsnYPGRDbXmmemsvRLZgnu6VnNRXMAsyKXLSbEPDFEAhUShpAw",
  "key3": "2sAorLvzMosq4cBqZrkpuw4h2e5Uy9cV4BDPy4k25s2KwDH6vUo1WzGrKWEL7FT2L2VW8un9vRaeBdSLjyi5UhRz",
  "key4": "65xjznQChNXMibXMBGd8Ab1VSRSDkYQXr4arVgM6YPwQAYonZshqni7rB5fgRfsP5c8TvRLeC8ckwnreShwiYi7W",
  "key5": "5a4F9uMPFk31xowPxLp7tp8ZUfrmk8aBgpAQtbQ7GLwHkMRtkr1Gc9kspC3uVHfAtXdoNjeCdH4JEiGXBph3eC64",
  "key6": "21ZCz5rXiPC15sXD6qiRBNBT2D2D3UvPAdL2Ch5Y22jRagPZWyshSRTzf5V7TWynP5tuDciaSgXAWgKbbLaemaZB",
  "key7": "LzZ1tfB5UkodWppvAAks9vgBpjsTireBg6EcbFxix2rSrdVne3kMNz4gjFWxyH7fqGzU5UMXYfHKsJisfKAXC5t",
  "key8": "2dwGKHzpMCkRoFi7KuNWZuLZwXgxkfDxYzET4DAcaW7ZTinxX3niNy1FQRJ4oks8f8KckEQQJ3Nnb2wsaqp8GoHF",
  "key9": "3UGrhKAaDCYj4ie8Nin5Mv9fUzdTsog5G3iGPGhyreKtC5nAJad3PbfZsg5aitquShGb86RpPmSV85cU4YsgPvBE",
  "key10": "5D1jyEQLzMVMqfCyRYtUubCfMTNKoHxjgdvkJzX4s7VKVKisjjjuCeF6xySbSkrYDLfzvZDsm5PgSivs5hbtJvCH",
  "key11": "5C8HCAzT2tTnLWcKoSwV2C8CqJVK2a1WYcbPhbn8v5J5fc5SXQrdqwA87WebHuHAoYma9Vr4hXp1qZSwdjPYnaA8",
  "key12": "o164tSem82RQqqC2GHZjhsmLGQXjRn3o4qSRXqJE9UF4Jg4f37V7GuAH3wiTvSYbri6NZYsCRcVcMJYPrQC4VJQ",
  "key13": "pmewEqB62WLtM4fJXTEwepkoP4jeWFkxkKaCEkWqAdqWMDFM496XKuZNS86dXdykYxVkiyaQTFe11ADFLSPhvgL",
  "key14": "4c8tPUJBy8PFUD24NcMGBV8Hq8rpG1wK3tUh9vMHZFMoV5cehZibNeJEkFmGkrsSWhRzzFiB9FfNqdMc6tow4CEc",
  "key15": "5J78uVKVjKiGrN3NZpKiu7ka2T2NCgwNmGmv2o3LgYdRUm8yz9R89M6FiZZTz8SEgp4C7RokaAosX7s6REqfA9jG",
  "key16": "4LU8cJP8wnE5UEwXdqK6cArBMyqnp1Pt927SbQix7dppo2kifdvk63wJZrWKSPqHZELCusFyF9KvXfdQTqoWf2Nb",
  "key17": "41ikJvKF8PJoUAwTqxn8gt6jfcCn78PfHeHr1ko7tFyEcVmMcxLi4K2CzJzLFttM1dSYXxSUVVAFkkKHuKW46s7H",
  "key18": "pnr9ih7gkAxGgkb9nyLm26k2wtHiqRQYcbq25dJ8bTFaHgiAU4hBqKnBBmQHBFR79LXC7b5xL7d6K5nto1fQGRN",
  "key19": "2aSJPrybqWTV26GtEN7sRrPBVmTYRxoorbqYRVoUL7urb5m6hGyDnWERd8xMtS1ywHRKVMy5ZP3Rjrwj4x6zmv5T",
  "key20": "4C7mMWZbTZS5Rhbd6AAj5paCuobxusvQucAtgm7Y5qM6nLPrRbqwZ9GchSFnvKpLms6Mw5B8rPzG5kEjjrfwLz3g",
  "key21": "SwVMwdUXR5b3NBGa8WyaTgvAZnLjQgAYumRnHZYihXRVUan3HG6NBCfrCZVjuF9LETP4ciLTrpT8TLJ5FQohfHK",
  "key22": "4RUC4Bx2LwdDNN3BuBqbdm55GEZa5Zk1qbRobAqeAs8NC61Kvn4fK6A3pbYWjpnvY99P3hCT4deJfwfEqaqGZn5K",
  "key23": "3pXVWhrki6k68Yp9m5uLgTxkmij1gTJLApgVHpc2ZBz4h4q8bAVU6uHb3wnzuuZY84qwmKzrs3VzaaFPjPCoXZo1",
  "key24": "i8Ag43KQsSdrwsKLfzFm82E9Ver97KxRixMgcsk75FDGNJRqAcTocKs9fZGqKUZYHBj9yf1fHPFq7spGP9HjWWK",
  "key25": "4qXX9jqmegEZQeApQuzef94hm7KCfJahju7okKNGRmwJRHdcPh4rKEaybiRyFNqm18GZDvw2Af9EYtEndQQxRkYa",
  "key26": "3hUhsSMi3dcjN4oQTwe4o5bXQAQ7eK9PmoTkHVVUY3x7yDrKxa7nSx9UWtScakX3R1DJoawfCT1yqoZAFrhnAeCQ",
  "key27": "3van5wUPQc7VXU79KWrWwyZDn3C6vhXVKe5RcgVFduAwUAdHfFkCQ48WDKUSyvNoFpFjq2b3Ay4xxBKHuWu6JswL",
  "key28": "3kuUkJhfTnC51QArHNoVAkEGXe7b4ujXhVPgCmQaWBaZ8N7AVRH3Z9D66nF7EVSiGT2M5zwocZR6UVeM7ZBXSvaQ",
  "key29": "2VNieEY4NCXpuhqaG5SeLYMnnc3wuN2Nv8tA4ME8vVYYFqZHiwPju5WAWoCMRzqDrUqYxfHsijZvTzDfepxmcbA7",
  "key30": "2G633nRHtCtRVrDoAWc3UXqNc8J1poSw2MLz55iiMzPndffqX1d4iTMatvB8LFCQ2y6sRMTZYuesSzzWkFhmxQST",
  "key31": "f7fu6gpZyFx6jCdj7jRrDvWihMUQEqwY5G9C9hysrUYcZ6ucPi2HrxYBRVmVTgPXXh48NZdBUGpZQ86ZJiXBQXx",
  "key32": "3uEAw2JJmiNacvFHqeKTARoFBoLYrWjBMx1ERUJKxFA467Fug166fUTfQSscGyEu1Q1PQWhjth1nYYihnR8TyhJx",
  "key33": "5iEvch8Hteu4cHxmkwhYyNykTU9SwAKiLiksNJBnbAHmFFSmYd472mXiBSu5gdsxb1zWtzi1EakUmPJzNftvAhDk",
  "key34": "3AvtE3A6kFCmfWAN2fkN4v2kfRZaSThNVt5k4NMQTCftcFfK32RffQK71HgQAR1386LA5TyYGiKYjYLCRgiZ8MkV",
  "key35": "5FEvJzzFwVa9qkE96vp9MLw2yoEDofbwBda9bKtGxWPq3AtAjt21YS447jY3wfXFHeoRQYNiPneYfVc78jnCWdWB",
  "key36": "9S8w11bi99oFtt4foNHzQTyYiR3F4apoyj5o2qR8hbD1h4LSXaue11o9pVByAJ7jcVW5e31uv9dGqkRiJG5nPJL",
  "key37": "5TDFYfmFDF6T8KzeHNUvfLCGEg1ywe7SVPdhddvd99m2PnaYn9zR1wNNNLxCYd4RHnTjHib82bbj2TmDkzoMTpE",
  "key38": "63adoivV4UNBTJ6914t9aa83fFERACCoR2zfVUnopPGZHD9AdZCfK9tceNtMcU1JDRNXFrUDK6gDLbGErV2TMHq1",
  "key39": "5QhsQehDZe8kgxpsWu9yuFyHvc4pMj3zmfX14gRnvt72m1Hre8YxVqRmJC6ks1qgUqDb8u7bPzoGRG5cnqSzo87c",
  "key40": "5yGShA48sNmw9sEPSfRK5BEzK3oQo1y8tjL6MVTV6B93qk5brovqyLXNrGrZanh8Te2fADC1jZCiff74g34wrveR"
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
