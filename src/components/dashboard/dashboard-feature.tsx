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
    "5p1jMGk1VepQPRgvA7fudCuvCCnAA9j31yBxu5UttDXUGdZPb4bLGpnvyvXVX8dT74dkSrSMLf3GwMU1uVALrQod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C8Zu8fWEC99RU274Vu3Yvnq9M4Raqao35iK86VY1oQZ8v2twuNB2vG2y3FpGGnu8jNEnvBWVsNn1kQRPd12oBEC",
  "key1": "35MgLu3UyvhkaEzUCq6nLZivoyL5CUWsqSWxtuKYqYLmZrFNN3SmVrPufdcSFjerLWkDEhdLs6CaAvPU1dFARGQi",
  "key2": "45QxwomE53Td5583S3JPWgKkDNxb83QD8U3DttCHGxFjGMAHp1MhMZ9Dw88J2ZWtgBB3rc77yk4XzMyWjBzC9UPw",
  "key3": "3C8mXGFBWyjjPahMcnuAPQ2cAPacTt3jVzGuFHyaQtsFtu2V8GqkqWH1xWSZu9pu2wXjq97rN17wsshQjtCy8yzk",
  "key4": "2cqA5HifuGVEpZ6S3pu8txYKexRstjWV8CYbvTMazoiGjUwEhEwg4KHbmwxJQ4Sit8EAyMV8qCfodDkBjxZ411MX",
  "key5": "CHcoWY7ULSFzreGmY4RaK7rn9ZKAzcYjDy9wwdz4CmagJbzHYQKVUH2o3pPpFKmgTW33bJajbpgp5GnL4r1Rct3",
  "key6": "5fBvBXEp78GwHWoEZ5zGouSe95BuXGHa1XH2BhaGB9D8b9vTCiVuSvgniih1piLzzcvapphSwKo9K3Lk4KhFfv7L",
  "key7": "2hRViZYcw5FvU2o4xTtWm6oYWzx6cyHE8mJJeJVeJNfgtaASu25hcqZr9mogFjs2KikVVyHmtEUKvfpHeGERHMp1",
  "key8": "4E4SrXhs4VCTtMLDA1p6h3pLmrii8pzoQAT4J1uQdD3xpFfGreTeTtSKbk3WwqBJp9BQJLfdTZzagRgTzfiCNGDb",
  "key9": "JSR7rACr9aNRPTRwmScc2BpfZQn6BALEr5GA6N9yLkGBRQRevpVxj5K6YM5mXe18ZT2KMLAjkoGuAekHuE1SSMc",
  "key10": "4XfKEsqLhXKcnvcMD2oefcP2VFLrWskaN995pHx6BCFEqCxubbiukUsCoeG6Wm2Pojd7d3HY8uzfUK5V2QcZ3yaK",
  "key11": "4Lx5pcmfnSjdu4QzyYua36roYugRp2ZpFsSxroDWA8ry6oVpWP8bp5dpyFwgBPLYNn7xy2vaWeM7E1Yjjy2MV2hA",
  "key12": "BxPB2K41NetUWNsodoWTy4mnLrC2ehpDEd9aCcXwa82qWVaddumi7K45BAHa2tHvN8dM29WnuoCNV67VHz7ePkA",
  "key13": "32fvCEbmTzuJwS5ABUqppNkpX41HpxorAFdSHeGXGCj5Rs1HEi2DyiNuE4hNDte71ATj5xR4hgmjXFMD21CSPcJk",
  "key14": "3fLpjyqBmJoRCtb5BAiZM44apCfdw2TdcbEZQkVbL7NKqxebmQqqjEjNoy8q8YCjA5gAftFQ6sMzZ2bfeTLVT9Ap",
  "key15": "U1nmkiNVBRdqZgf1jri2PXvbtSiy4HvFHYu3dQMrv3Stf7s6nsMvKBpJMkyJwRV6BiSXhezDWqJ9PEbVWVPQVtU",
  "key16": "5joqdyqDytAHAVUiXwDuYckpsxV4eHjtcj4JGs7Ay9VMjb3mL5hjNbARteK2enjjnCNjuYeSctL6eiXLLfsLW1C4",
  "key17": "vHkYHUC4rbTKzLM1iuf7jBPQ6fZ2Bchm2opUqgCCgXqzcq8VhsW1Kn4Y3qB6GteC1L9QskJBdvo1BLjhzsoZ6Ge",
  "key18": "4zjNuyXibQho9KXuHvoUp2MtaUggQk4QVVj32HgFbrCz5bJjzdesdqwFQZY4rsv7cz9ePLHjBEVncWQzHHD1ejih",
  "key19": "4YMnrbpuPem1MYZGdNtWL3JhFBz6zJF6P9XpwshxStJR3xeXcaqh6Yne45DigDXkzjgUYoWNeDyRE8CLx4QJAVZf",
  "key20": "4FHu1fCumxUxr6LeHkrMLD7CGYvVD6nMzDQsiDoDqL9ysFh3cgiQHkAWNqJjQTvRmbLkr4zWCE9AeFPSK9xyeLd1",
  "key21": "3gYsxCgRSao9LmTaUoYrveh3K8Mm9bojvVLmM7DbnUsc9zWMGJbXtoWJxq5meoKdRkhqjPLHkU45BHsSMQ14dMSU",
  "key22": "YqQevKsjeEf5dALaA7szLeNofmTJtZx3A3mHtTPrGm3zXki5xmLzLrv9t867uw2Khu5jGzorrWGdxk3wFUwQgT8",
  "key23": "9sfLKh7eYTvtAr1ijg7oWtFfFe7HVTUqsryusEQA5JSP2Lx9AYrfpLkJSp4fzyvvvCdkJqVA7KbGCSAubn3kh5z",
  "key24": "5R9FNmSakw8fZK4jGVUw7GnBaFqBTLEib4netWkXQT7YdRN2YQKsvVGe9dZSC54jA11DBGpZYVf5MRjuJ1hW46Dd",
  "key25": "GTaBBvS2os7oHaXP1uVioiJugVishTuSvKv6FH9aCUDp67ftNuSP8yPUug5wsmdu2NswtS7xknHyUWqqPND5Yp1",
  "key26": "4NDz7sisXgeo4PB5nKrJu5kY5B5reNLbinPPwRuVZbupbLLb43aB9FanL2hnjMDibSpRqKi6KyysQMD1XBvKfiF2",
  "key27": "2ibbWWEqjjjU3U5zJm8UCcPmg3EA2UvhsyNNWypTNvverD9Z4JbX8TSw4KGSAMZU3fDLFbd1Lc4TY17V4jVWU6do",
  "key28": "2KPK3Wf6n6q3uHepAV5SjnU7TTaUuZ6XmQjw7Fv4aeZZuJxihAnPujqMPE6Kdg5SsS7EAggDtJ4ZNjj9VWkDeZ5r",
  "key29": "3EEFZPdhMKj5jKHzPELR8cnSviRk1UF71CqLs8pV8NjZ6mqxNSrbEno444mmdF5dGFu9jRhjEKyuXWJcQL2Jk2fD",
  "key30": "2LznStfqydQoeoAgVgo2bhYvH9gUT8C1StJE7NGzdApMFUjEJSWHSAmp6vsDCGFo1uXVvXvAe1bKwpZFwBkTtTks"
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
