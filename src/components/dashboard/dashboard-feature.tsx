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
    "5V3LkRmdxGH68idwBUFvFt3VCsFPvpWadiD4tAqNYpGvkMepbjxWSZKMW6q2pRgjWLZ6VN99dUDdjAfZmmKAE1sT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YA2LDjJ8cQ4d7CJq9zWcG8wSL1mAj3jiGg5sA1TCPs2JndDMVJgS65YWmUrKyfU3ZiEVek8gTYspE86DREBfiAe",
  "key1": "2d3D24HHsrHdDs9pEk3egHWBG9jp3jax9Nk3xX2tv7ZyngTESwJNG26kgf3JjDmJLJHsQd5y25p8hgCJaKVziW6X",
  "key2": "2PH8T6EeBRng5a8SmdgzPYnw5dNJAB9rGE6fSmTvyx74twDuqTSTNr5dGKjJ3RfbZBuMJjcX9NYvLPZtXEVbSFae",
  "key3": "3nSYTNwESVUD4Ua7Q8AEHnPgYhwHHx1zWZZvPnxBt9XcQNn7JXKdnq1E5CfAKYg4F3Aikw4DzGkwK2HKxByxwBm3",
  "key4": "597TA8Fqo7b7pLrkxmeSscjqvE1sbYGxHHNa4yBekCNcxbRWoC35h6FzDGvqphkaD2gkY6qkZz5ymrd1LTsr8VXH",
  "key5": "xKXWZi7qyxtLD9Xg8ghnc4qNYt783LLqhAN1BJwxrc3LHRxaHj8nYc1G23g1EyUvD9qQDEevS4pYA4AMqu3deQo",
  "key6": "27uqJ66bkLbCigw1oXtumAow2tPksQgsDDtd18btvH4PzTwgTX7yBrkfTQ4STQ5mjy1coXYzwXon7nEiAuNZamTT",
  "key7": "4x1VDXty3naGAFRxihh7NWPnFw7xyPDwdmX24NhFUnhiUmuLy1bke5gwWQCUdqFY5PXoQvTxnQN5a4Fjopsx6jJC",
  "key8": "W5kJJndJ1P7n7Wu9CSnD1HJSjppYevkzq5FDjcFJCH15u35QuGMs7qbPm1RxbQYNVa2Fo1mzcQyZqTo3MGki6KX",
  "key9": "4pRB92zPUsTz8x9xX5xgtKU61TPDwLCFCQTAuNdFJwJUp5faJDXD1xXzkwe36Gac878rH2coJzyrVaPyCfhSfyhn",
  "key10": "4dntyLLKxz2rZfsM8m6adxCLDFCndXuv7eedp7yZMwWDadnxQJBbca8zfg9L9WqWYMzpBHoCMxUeMdQJ9JknonrM",
  "key11": "n8ZPTG2uVP1pYDdsJ5tb8xUAZHBFT6EJgz9pnEKf3Y6SvTxJokEsr2Shhpwx538euUs2R8Wq5YpsQTruqCDhdTE",
  "key12": "5jNQVtjxySHn16eQDKr3BscdiAJBY5BpjrZwyp3c3ikcSu7BTzHteuVNGNAMhU4pdjnBfpjN5SV4wGgDCJN9BG45",
  "key13": "3SyDohq3NWYbkQGoEPQHXgadh9jwKCZk3pr7gwVEmcG6df1SKkjztPBrWfYWACycqJLV9d4tjY3tWJ6HnrrL96kt",
  "key14": "2GvHLUu17BzLHqLwLNsnSWiSpVUgiUqSb9QUXAqWj3RbwWXwuzCMZa8bEfGbbnsCnbYLfCAFTx3Gfx4nhT7Eqqck",
  "key15": "4zU3T44Aukjiy7fhSePRXAoPHuprSFDjLqyQRBmZNvKQwhtwgVJf73DeWGxnw9ZQgmGwUk4D9UHG6GgnHVHAmY7b",
  "key16": "4Fy6ibEpaLsM7Ks5rWncXeMYaMPETFr2b1ecmUqs9RR8qinhJc1C1BmzFNBLH3TKRbnkZJUBSw9RzA2v2VHu2mYr",
  "key17": "z9U5kp1dTEyeEuisY97TQUjRjLhx9wW8LHE9PL7Upg1KVPT5zfZ6ZD7ABwiMmTUdKRnihx9cqfTUszpyzeYfMVW",
  "key18": "4btxaAHgyaLpkace97c8vvRfFXxEsmJPhHQtRfiNW37k6FopPWQhKdsFrCi4w38LXjibDiyANSBPWe81qvRx5jQs",
  "key19": "2oMQKnGU9zoxjK1a4kzrBWadMhkU5srLA35FjLRcm9htdKjGuNrd26dbJiZjJk6JzQYN5Rh8VDvZ1hGNXN9xWh74",
  "key20": "5nxHBUbG6X4F8nyumRnscytJReLq8fHvgNyun5LyABUFc52Wru1SzkAbvi323X88aCMi5XeCq3oa4Lte7dzo9RXT",
  "key21": "4xS1BmBWf6RKRfwsGHX1LTybaMdT8KVkwRWNNM9AQ6qYVMw9HnQfm87MHyo6zewvfWT3mBwNMxFWFyz3MF4SSxDP",
  "key22": "3qeuKVEjtF8dsDUzNFQsfyzctdzYXWPo1H9vDCh4ck5c8ymmALGCtKhtMUKSWPrCceFoXmVkocKcE73kpL82NJ6B",
  "key23": "3ZPCQT3vutwruRGUwUuwNJSEDMyiB9usjjM2MJGh6RRxn9L6gpAkrPyF8eesSPPw9FyFiszuaXYqEpktarxgoeBt",
  "key24": "3EfM8cL9nzBh7qUvDkonXgk7m93rG3eAN2TXnipzkjxpfz5hWzPn6wum22rVVJMTgaX8nD5LacZVAEPZhAfXjvkd",
  "key25": "5RcxNBxYkBi8SquvfGNd435fnPD3Hp2qeFvz8ZuSD8kMktekXx2ULjF9XFZem4T3rDJRsDL4cBqCAswfHz1VucmB",
  "key26": "2nrTszEYkKUNxAS89xu2bdCDBzuD8ULYYJRcRnKycvhLFGcyCTapGuP2kWc8GQz86mhMEYWv8A779ndaJ22YaiaN",
  "key27": "3q5pa1qMHh98KekuwanaatFCt99dDRbutzQvJByqAGmdp7YF8FBz4V4j5gFWSoWfLyA8vxiNZyQ79ThufQkMpThA",
  "key28": "5TK3vzjE9gYnNkB2v5kRN4imKSSRs73LqYTb2tEqNkx3YmH3pBxD4QdYGyFgFnKMr43tgzjYbG6GrngFXh5ANsET",
  "key29": "4ZmRRmaKhaXBvH1b2LH94JjertSr18xJUP1yrSF2MY9BUwpSVr1vX7hZwzojp444bbkGMT7Nd3WTxDD12Bi5uqpJ",
  "key30": "5UyuADAMz54FGE1T99738rPrMMtmQE3f11Qkx7PPC4nVppqGzW7frut61uANcHkdy6NPVCf4aGSG4Gfw47q4Vmk9",
  "key31": "4asGtropWobGFA73P7x1RUqXwAPwwJuN4Vxe52aaEchGGEVeVRUKGbJcmvfJGdALS5m5qVxseqjeMQFo3sUttjcy",
  "key32": "5gxFoSuCMw7zqGi3sKx7sDyP1rF7baiZatXSpgdTQucxntQtGCcoKHg8SbRkeNP9pJchngou57KhHK3yexApsVr3",
  "key33": "3UsyohutA3hs39Zx9uxQTWp9umhZTrvjndob5T6g6VmeduoYdfXiG6pAy6rsUBvBKTjhYJdJJbHm3pHgLpC7Q96L",
  "key34": "3CE1ttxK48Senxqddim4ak22yTGM3ywa8VaaLKWCu73U9HBZ15jUajas3fXMS83nADvwsGj8TPdm7k2xiNu9JDkN"
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
