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
    "VTDWwh1Jr8LhEsbpFVidb7Qb39JA4H3WtS8dn2ZV6rDx1zo9uGUxpwd3eGUrEFR4XAjEAciA6fLyL7qwDGoJ83N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2axobCLeALjB16eAe1FrpGZqAwTkiMnyRr2Nv91P6euhcED4iDgFoUM24pZ2cxnd9pvuXrRtWVzFmYQ6Qw3i1YaC",
  "key1": "4ewU6AsNp9qnCqwHWQX8s3iNe6oaQNWNjpv6TSxLc4LGPh2RZvrJAJ8MHvmWKrd5CsaHYS8dUoKwKaLATdxhtTZc",
  "key2": "55CMAiTrjy3uAbhsXFfiPd2r7XtGqLSk5CAhExg6ckuZUuEhoAso3hRwbAk4rVp693ZHaA7nfecf7y6CcgBzdany",
  "key3": "2TdRtvp5r4g9uuz1Q9HMXeptbYZhJPQfG5v4E7MuA9kwk5GZxQHD4BHyEYfX1zXvz4L4arML6LNY8ayN6SVuftuS",
  "key4": "215JG8cecVBtQj3qstDpTG7U7q7FEBczN541Afno8xnQ7brzfah8NCEbXhCvEZn65dtfxCPpVJE6szYQ6ZC6VSny",
  "key5": "23yqG8wgJTVCZtq7BHgy9cdsMStdD41dDwQxqn4pFB7mE5v27hAb9aPwAirfFMyJcuCerfb2DaZ2Qy1k3aRCZAW8",
  "key6": "5c268o5V2RghP3bdcDxKEAp6UBCdEWA5LPKGPQ9jRD83V9T1uh4Std7AN1foDFQ5R5Rap6oMAB835JBTnsxVStJs",
  "key7": "3CtQGqjQPEgYiEnp1bpFBHZGChey6u3xS3ygMgSbic6s4KrCYJtXsyjVtMh7BbLVoSN76rbtuCHkjpV9xtRDYXjs",
  "key8": "2G55M5WtoPbnaNt2CRiVdb3mnw5trSVYqmXNm71s2r9qR1q8uJwHXhJ2hZgYfPDvmcLXtXvU4dBVXt7Hd8iPzL3E",
  "key9": "5Ly7irHsvwwUprpKQvGYnhJrWZ6VjWg6FVL7G51dL2KhSogrbybAgF7tMTgUUYqQXtGcXtNFfzPZ2wCQScLuZsPN",
  "key10": "4qETcdCGbuhYH3JLuZNdhhvUCCvfWe8BCbEWecmsDHV5oFtTeLu52rEFagZZR2EfRpxieQkR7a5CjU4G52yBCDrR",
  "key11": "2mWMh7gVe7vSiKU38rLQopfmZQpnf4WRrjWcLm3zXmJj3PB46LfWmbezbN8uHGoc26zP4gcPnfbW9zjswFRLn96s",
  "key12": "5dwJ9Bd7CcHv4NNSPtWjdu4QbV2nU4hx9Yrn3UMw3mhnkgSsgzSwit4N6dJeULzhnheqL4MiHdWxvhKiAHK9g1JY",
  "key13": "3qtX6YfLCKY6jEtzE1R2f1DUgtjP9vvXtFTk5M764Hmo9j62fWWtzzMn8YqmXh3ebpRvEoVvg2kzxpq1tsNaLZ9n",
  "key14": "2SwNPzRZzoUMdwKey4SCxva79gjC53U29TWXfg3X5UUooMYGcthFivgHBiuzDCexummy9QdvdLV49Jzi5Jtcx7Ab",
  "key15": "4zbprQpLCCebNWy7fAJvcMMQe6xUtaTfKL8xnyVj6iXfEwsBMjXwFo84fAhG83nhzndRNLSQ2JNtZuyxs3YfF2EW",
  "key16": "41PBHyyVwg7XA6QFPPVtTXMAKKGYtQQXPuKDydekvikWXyuW5tgwSpHBidy95Ka5BxBDVV6sYF33AmsH1Su6KdrJ",
  "key17": "4gW3CUffdmWTpDfovefk44noG6UKaASuznAvsSLou5kwdZeX6fBG4sayUwtghaCqj495TYM5AcsTdYT3buDv9rXd",
  "key18": "538A9BDWEjBd8uaJd9KrAQWLfr8KbHNMmo2r3vaBKE3hqTAuFmeTrWAXAeExDR5GXgHCFfe6RehBg812eNbG3f5S",
  "key19": "28eLUE5PjSoMuS3sKpXvH2sBU1LdwxwDBoXNdZJYNkuvj5eHSNgSyQkg81rX6LyeTWVWJSEHUM2equPfSFda5RfA",
  "key20": "2VNxithqdiV25r1TjvmWCBssYH355eN6bGKno72sRGqAgMhFxziXdpRJffmktCjTBBks1wEKdBoXUZwnkgpbHTot",
  "key21": "3iXS9YmRb2y2vVYr4MuB2VkLeLGUArG5xHPyYCdRFjZiyUNYxuY57nDxE2DQd75WEK76dbMHGA2JabkDDVDANkc3",
  "key22": "3QSXMxRMrtkpiSYCrCn31NJj1cVNBvyacuC7Yk263GjBQzKChfQJy8yAr4QQ4m3c3J2KGYYKhxX4jasNW5CaFYBa",
  "key23": "4ZEj3rqn3gUwjTKHxt9ta9cLxkbauUz8gjATcW82UNsmdyf4ZkJKahf5jnx3KMXejkZYG8QzfzCpkWcjJXf5aZcV",
  "key24": "sASPUMrSsbe7mzsXn59BiaWcSZdyMiUF3MxPNvmdMcsyHcELcTxut21EGUMUcCP8TZRAmKkwk38bPz9ZEoTN42A",
  "key25": "3jRQjPAmig48DsmNUQSVFJxNgjF9CmEybBHz7Ja4nPLcmX8ufcV6vqbLKnFAKCG5vaE495icKiZeTajKjinyYJbY",
  "key26": "3yMET6pZVHzZ6oMAeim6D6hTxMW693RTBTke9UPJcUoWiDoQZVuhCSKh1eKwBD6qj2zHSFVdvhHpUmRWRyv9JSf",
  "key27": "5B6rACMcS5d81z7pHCFwies7jqpWpotFLHLgsxnBXnUeJ5wCcxrV2Mi6WDhxNcTaBaeUsuM2atc6ZFNM9PfLSj3R",
  "key28": "57gLeFEppwbBLx2QNhVd2nHFBdXVvJ7GPnBkePmVKNQLTxWXcysrAd4aM4NvkSjXzaDEAiEX9Qurn2sH8QBLri5W",
  "key29": "4Kvvaxdx8bE3iXWGccE9QWmJgm1VqMU5eXTb9LZWThqczyP9z544dyQevJVQaJuUKAC4hHe1dh4EmLyuNKcLsojo",
  "key30": "62TTvzkrQ5pYzLmNHkZcpJNDRCNAyS8YPyLnFGh4RBGsTNtuMXJ7QvQADccCWe59beC22wD4j6P2rFkQPMYBQEM4",
  "key31": "2Hj1keTbT9uqHUiGQE95YQ32b3vCnpUTzR3gj8iZFo1sF6zR9X5XSZ6C7bay5fW3aNUWKFdgQhyYPe7eG2RaKViK",
  "key32": "vEm2daBjaj6mhpsGDy3SeyS7RUVtePmjtEmP3nPiFydiKpNBhZwwLm4iUBcTPtqwBn2SiyZMMuYR2fqdexcXRoQ",
  "key33": "GcgwRBnijjzVvg97AB2obeTAZPHjdJqc5NG411An4cYmNhWuWfrscvicSwyKaKjfzKb8pCBjHsn24HWGX3XnoLo",
  "key34": "oZHZJNvsog1goEj99RpmpQwFU6utd4cgutGZBe6jFHmGxcKdLDEZfGcXFsSCrSSZ8rLDZq39kJvm6v7ym5s2dKi",
  "key35": "2XgFW2GjsqZtxgaZvR5dad37jgWb8veXwxKN7PsShrLfbR5eAhej7D2Jfpd3ZFHP23nK3ZckHmxG5zvotuELHxFD",
  "key36": "2nwAVtimDdmVJKTM6vvm9qGD3DoArqb1anPHdMfbQHru2Ywy6FSXeBbu6ANzaa3KMRWAmDwcY4vzxrmqeL6dGwy",
  "key37": "4XLYKcHZCT7A5Vm5A6t54tbfioCdFtzNVCZmYDEdZh3cziChH8Kd2GpSoxKZXKTYiYs6HXSwSZyHGPHooHedRWjq"
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
