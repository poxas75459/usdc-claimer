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
    "4FdhkWhtDGmrcRgH9fhyhoUejHeNaTJXtUZv94Jjrp3rpH2qxMpRWs6iriCoW3jfZL5SopyvLyht8zdQkWr3Ak3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S2e1h93hQjQ6H4hv4JBhcs2PCshj8H7mQ8iKmSKgczCwyoT27s8xVZz8SqJ1SQ53xtE3Xg5ytg4DZBGR3byP9YU",
  "key1": "uJ5fpasGEoeAjaiCnuVkXeLvKv488noB2WK9DAhWmgJunJ3a2LwVgDDdm12dT3FcRXkY4gwjhDaQfPzwHjL1Qyu",
  "key2": "i6QwuZmjCun5uzznV4xbhLdV8fDG58KPxAq7Q23F6fPCsS6fUqdEmPZWuuNQtBxhCqqw6FbY1Sbhn1SCFc32ecU",
  "key3": "5CUVwauDfPJGTaEPsnTdmjKoKiEPu4UiPge9iM5qdFn8gHbZ2eE7LzczMX1f6x9gYC1Xkat1h39ndXmsQDUjAdBu",
  "key4": "tsF9tmq3qNVzsuaHMSqfvKRLNrgypQTKSZPszPAKBgS1WzfrcgKw1Jq8yLjjQpseR5jcn94F7RbAcMubdtFfKRM",
  "key5": "5rY4kYQGPvaTcsQeNRsRQqcwH6mwtkQ33qK9vE2CvrzxV9JWq3mXqhCAFQWzXLH1yxsS9NMbQ5Rixz52H1QZJ2zQ",
  "key6": "4QtCN6nB4SCw4Vk5kdKVn4KTgi9AXzrUXVfC2a3hLv1Ttnwqu1vZtXvQTkBrArRYBJ3oxcaFwMt55VAaJmkrayAs",
  "key7": "4Pi7epgzXfjHgYC2Qop5f8q3TLtxvPm3FhmB414HFaEAqmJVpy9zBFmb5daj5JFY3R78y1nVArs2PAu9ocxcjpWx",
  "key8": "5L6PNe9cUZVPSbHd6wFRfhsFcwZ5AtsrVMt5MwLTDgBsCWi6kYpdzxYDAutieCHfC7UFiEh3TjjdC164rRXopvFa",
  "key9": "5a1UeYUwya33VgEnnMxd7csuaUfDtQzaMuLDTR5vBDf8diyv6m5VGjs5nYucb4EKqcQR3CNUuGEJUAavrFidc1YJ",
  "key10": "2fz3iarsYWBekwWFmbrP6vc2ujjMdM1Ph1R55CQ1qfJQGCy2XgU4ZbhG9C43kFJ8UbJ3YiUAMGw5y1BCqBinrf9p",
  "key11": "BZq8rt1hTMpvjiRcGe6Y3x3SFw2AXWbLrKdELBayYe5xuzg5E7mt7QBjUNCpYhYEm2YFtrkyGHs7NCB7SoNjg1k",
  "key12": "3TUFQRKh9n4ev1Mv41bLQw8FzWGPeV311Rq6aV1sUsg1nzrYQdtbF8jEvQvF2DeLPWTditbooxqWi4F4kL9xB1Mj",
  "key13": "53NZCq3PSYDpR9MdVgy6J7uUCeYbfzQkXmano8pAxWozieHDME8yiKdDHLFzaisQ12aDX4cpPv3SYcXTre7oTY46",
  "key14": "5wBKf2KJXne6rb8UK4dDDfsCfdiMHDXgHNEJyh9SRLRR3C3NmZ42QzHkjPNaPXmVDX1sN5WrMFe9EycfiyNsqKpr",
  "key15": "2Esnz4t4jYCz4WRbafJDMuRBkHG6R9GG4nK4niSYncE1wLSbj9wT3zq9KJqPBWZttbQ7wcptptVNebMdRUdHqgxA",
  "key16": "2Zp5MgfPzzXTQZ9vHbN7aT9PnxAcE55fsavxkdNjhgwKYPTAbMhsUSMCNUvqyqNCYKj5UzcauMvvkCRZggqm4fwU",
  "key17": "jYmAv3hd6jhDBHxvmWeqnhrniqi48BaHjGjTHTVEeD5PgTtc1nvuuLst6JJ3PmK86Ff9y3tp83Cx9KQf2bamBRU",
  "key18": "4sNbAqtBE65eFj6PLgNo8iQ9sEgt88TbWMDEJeN7v5hhXnJMuxZGUM4SLKW7bQ78AhPLvXrsJN4WxrYomyYcxoyV",
  "key19": "2S26ykpV8otLQmtTc8Lb49SKQQdzGC7BbEmuq4B7czi5MshELaXroCw9u3yjrHKRNFWpc3SF41J6WcvqGbZsudRq",
  "key20": "64eF8QcQp2iaXnCSyFrQV3EmTC4QCzuXSqdsBZCyUWrcSKR9fgs9JYv6BPjwbmBHUAeD3ZHXT8t5m7FJSND55vGq",
  "key21": "2PYMnd4gxoRA3pj2yBWgtV6wZaACGVb9tzLwxmFMTk3LpcAgbpfSuBVfuNKrnbDo4iN5aZjS4qUpwjNVBBHJQ32m",
  "key22": "3Lwy12fWspDnw31z513sqUVQvnY7iw9ZyNM13UP3KErXLiX7aokDQvo9rmMeJ1ir5zTcsD2qaQLjrq6Vn44LjtHD",
  "key23": "2Ts7BGRz2ASrvRBBasNzjmsvdbgnv4NALVXWTspGwuF7fNc6dxP69YLi5cXm7xKHtni1u8ZiWv9mWLnsTauQBAY7",
  "key24": "5F94GUq6XhXvB3HcyBLpZuAo8PWTLSjH1QkYYLZeobt1WxAmwW16qNVYhuDD4XPZ3WFDYk75LXs4VL71jqt9E2LZ",
  "key25": "sftFNr2tHmVPj55uyYBMiKiH2eyHD1f6UCoZTuxAjQgPWkQez8oja976mZaQp41z7EwsGvikPERB2hq2KxaocXp",
  "key26": "5mF6uFQWYTu3bzA2eC5XHAazM2MGVpwpisiTqh6P2NubaaJeFG9p3JbGosdf3PZd8wY8QytewB4XpNBfTykxfXXy",
  "key27": "66pFbk44xepBF9ZwsFynenhbnBNbbtDC642jV5SkzvHLPyczM6onUNU67WaARw8753ezhGiuGyZNkmcpDiucV6KP",
  "key28": "4FypWhA3bxs3fDTZWqxiZ7SBxTFvdo2yzyTSW1VtWBJSggS6mSuLpBedM38Bif2RJxkzvA7iMc7vXvh82oTioZ2D",
  "key29": "ZEFXeXFdksCtZYtsuVbMgFRo4uDjdXtaWRGw5KnSrBTufkacW5PP4ThPkEMZ5kduU9jWtFaFasuHT7ZPezxqEbi",
  "key30": "2BsAWfPp9JYy1AgtiwGS2KeLa5kKDxejQdV82VBQEeaFJgiTaH7codaLyUJYcC7YnwkN1myVMud1tdmkCqLStvKt",
  "key31": "zJviQSsNBGUtCXYKREq8qYRMEoWQSF5KCCxDTogEiQvcpQT6DdEdMUfUQVKAKe2gQAPH8k7VBq3jnp9MmfYGYBo",
  "key32": "2DpTAbTYgu9ShGKBbzT9JCPJsnUaLpg4axvD624RuUYs8iLRfS4zLdr4EzxNtzT6J3xByHohFL9rtkC288Uchj96"
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
