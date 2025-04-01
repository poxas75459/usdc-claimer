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
    "4kRrRAVuQgSbMwkv3F2RbZyiFT6VmKpPUSt8kc8HnVG1jBT2qVYK7owJD6iGrG6MPegCRHRcEQEbT7gQgqgAC765"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SQhmk9QUYVbGRsGDbwdNi5KjhoLUzhfUh7Q2fK8i4DtxwgxviU5v67ejmXman551eEE4Ftp3rn5JtCpDBwJoGTC",
  "key1": "2LK8CTgQqGiDRLDRV9u3BSNcX3z3UPeheH2KErqvcRb6UCxMQrDa4FBnUSJTTVEgGeGNDmhBqQdbgxgWPStsv1hM",
  "key2": "4qVFNoNFYGoZfAs7e3EFWFuDkFSFDR13duuxUxZyGoeAr9GBDiGy1Ccsa8zboqf6hKSModstLdmhx9f7FyXZeMu9",
  "key3": "4svZGibCLqHq96DBa5WPQ67QVpkEifyEweFrBGLYnjZ8Ch3to2zvmiappMJXN6aUm93168cZfHkydeNtypkRoySn",
  "key4": "3JaN7cLCVvb41hE7UpCpYfKgpAuPBxehQtT4jUNSYw8BaimDJQjVUq6gbqrAzo42hFVn4VWoteFqRwStJU6FJfoz",
  "key5": "3kTVyqEEKVjRhPcv4WPSRko1FCJX8GLYSgNzedpnmuyCktSNvkqDouWt9izoFKnVctjn1tHJvd7Y6QugksPNuXRX",
  "key6": "5H4QFLF32GQHv2c7XvFbgaAKuTJACCqZyaM8HQMo2Z5Fr3UG5ksCGsiBUPA1phhSSr8MRcv2aJXr8yWY3NWZefby",
  "key7": "36WCGZZMMjVSektsJSNnczBiPrCavR2vpB2akYFQR3CzyB19mUbUhSEB4WV2pgsA5FnHJ1mYRu85aVpS1kgfK9t9",
  "key8": "2A2jEhgwTKYfZt9gnArmvCUBX3NjbXBGFPaWCvjBgQEsSFSxMQjvR9cznvbhY7P3Qwg9pGMgHjQaoaurhZ95GssV",
  "key9": "rFLeR4U1a1ukqZFMRSzkrgDqVmpU5iZfUeSeKYe6bL4ZMoYeL142KYqLs7zQHArszQFXJNFyBAmE2iR7kCpV8gS",
  "key10": "zgjmUV4bauH4GVAusm97U1Z9NyNDH1ZaPB3eu28Ngi4FzEav56RM4CURyhBAZVcNbYqQ3A8DhLMp1TjzQw1FfHT",
  "key11": "4fYcRaVC9nUTRfF6tMFCFNsU13Eyk1i7ZoRdVPA73fPYBGvAwFDH4JH6kvybWkQevtuP9nBRR8TbEMvWMsj9eoaU",
  "key12": "2xLxfJ55cZVXmdgWrkxeYdqhrHgYwBHqjBmrj5E76AXcsjhXuX8T94P4FY8Rdpb7jbCMJKzLi8BPZQHqGQNijyLm",
  "key13": "4AQEUHMqhne7YZRiLGBSrFzDn2a2Gnyy2udtCJ589o5gfa6BqjP76ZMdTdaiwHMuBoeNMAYT2ftnREc7EXSrKZNh",
  "key14": "2JkNTfzNsE75dRZaYvymannygMJNMRXD4MsJ15GAAXmkFwgy7i3xJvYLw9v8aR9yhFejdZiWmcMvdA3xVnqQibx",
  "key15": "4c9nDobJ3wXg8EVPvmrAMrnsq6s2rFoznsMoekNauRAumuwC7Xu3LPfTv1x1rb5mupEgMXM4VS6hJHHbioV4n621",
  "key16": "57sKUDoqCwgmw4ydwFHmNUADdxFYWGH8P2SPy4PQGVJhxPTUZ4V9tLsMFHFu7JyrV7FFmaMFjDMQ7jKTAEr6P6EC",
  "key17": "5WtoNfEvjq4e97PG6RYkU55QxjEAacWD9fE9BYMYKuxcebWXyzGjHmnNDBGtgu22v1w4Cp8ebVQ6rAnrfyhBTVXM",
  "key18": "3rbZ86Pi44h4TqgHhNB3sVTFLHiLEMfAqjNgRrPogocqb2qhK5bVEH7d3cjmYNj9ZVDo8H9siASnwWcVnLtttbsA",
  "key19": "4SJpCmRras7NoTZEpFkm5dWQHNPTLmpUQPxPwMEMAdWgZW2KiE2KWudDNfWFwNtQQkFmqkbHwsfG3qkoNzw2ng8z",
  "key20": "4cRNVkbs57Tycrp47fagWsETKUdkUhj1mPVKw6SjDmyKm72GatwmgNTGQWSYJCobSHZhQe3ybfqH2RvdpAxfHHc3",
  "key21": "4GzgWkdzBLKUPwuW7vp2PBthsy3ZqTayHwUJzUkWFjKwqU3CgKobJNv3vZGcT4gc6NsXhxohJ4DVFdK8rRmZ9BNH",
  "key22": "48Dp3e6hSdm5VjJxVaJcwq6HdF8NhxoxPNWtRz8y2qc7wVCYLTLFq37e6iFUkSfsBk53NMBFVuZz68RyjVe8qRye",
  "key23": "54FHkgQn1vgQcbqgd94DCBJrYvRDaMtLVsfHkJ16VSSbLGmgKuCBpc6jwVtnu3oRgK3UvWY14F6sxMn7L5wRp8ho",
  "key24": "wjaRAYGKSjnYu2z5CauyYynAgabDeEwUdByjY5qdDXedgLhgvxq9UTnYAn79xWNK5cSqdfKvYk89biG6RMruLt5",
  "key25": "4Epi1vNqPNpUz7rkJKPVeJo4kdPagSJ6rnnBWPL68MXanyWinfDr6tdPqzYd6L2srSkL3LoWbPHjC4VtDXoKPwRV",
  "key26": "3AyjUw8oAoe8x9WFkL6hYP9qUmu7CDBFTqDCpQSY8w5u62Hp34MTFBjwQeDWXMR4y4ki556UVaCdaq5jsYkXGPgH",
  "key27": "2dem59HzCmiyvNTvwZgFE7TABh4UVqXcC5KQH7fsq593daAad5NDwKNnRaKL3raJLaTmEMB4grxgmicSttcMQNXw",
  "key28": "ZX8RmdxpiVBcWbb1ZzkwbxnAgtfx47w9WXxsnBFFrsVnTVntpjYRAr4mkbH2rpKhBiy38GjVHRbdZMYSckQ5Aw6",
  "key29": "4mk5J2Hwcz4zqMxRKaAZeFuPprZbD3VXhfoxEiv5yhDnbMt2uGyr155oJjsW159vpBEycHXP8uQv3A3y88ep1Ua6",
  "key30": "2NDiQDaopUPy8YKBh612BhcPcaxa2soU53kah2Tmd6YQcW4FUdkcTmRwiaGL92wJUre8UFBh2FkfrrufBedQMhsW",
  "key31": "vtiZbfz1ktLoZYdn4ZbxiwVDEHYEsy4FcDTNas3jRuF2WHzx8ZFuFJrwn6kbjYSibnghjkmqP5aqaK8trPyX5hT",
  "key32": "MRsjqKtcLWYLLMNuvAwXHDdr2S8LfLu1BbAVxkpJZLsVb4ViwDatKvQ7dxQP7FPoLLYQscDM7KTZGqPj1rAmNXi",
  "key33": "2zYVvFcnyqy75gRmZk1z1nmmMmWVPxXBBejjgAfcs52JqCAsttF3Zw1ikV9BMLadDZMdqqVU6DdARaQBcXUDm9Q",
  "key34": "2R9ordM49KzD9kuU7TzUgTTTcgqpmRcJHCUj3ZmYpt7VFVaznYU4Vg7721hWpHohYSSquYZxTQ6jVti5oekDKioT",
  "key35": "4CeXqy3TdUvfN4eqfW6bT6LSa1utDEjwjJW52uB8syBxFqRHsQnnAjnEVRWaShYcUXNESjggfU5Xm1458be4P94b",
  "key36": "4q4qPZGLZM8rs8MjbsgtTTcQW2mqkJpXGfqqUZ5bxLuJANhp41q6TRCBBmu4RY4h7QjqJQEue4WBdhUaMLurqn9Q",
  "key37": "88WxYNnUzhsQSofHc2wi9kc7G235y9MW1rCkWMHTn8fQ5evjkEaVPWXYqGywQQnRf2bG4uBbGBSRPSCMRwJCf9c",
  "key38": "2NbBuyRanG5qNb3kVFLEVmpjCKecDVZ2C2SHSGHKUx59N2reNaUJStpLTBtZN1hQsYnCBMjih2WhiDTpZu48Sxiy",
  "key39": "2BfVvdL7iRYFHKbgGqRkxusQrUp9Szo1KtooAYekVANBLhToErxQXgAsYnPCJfvptiwxMPr1q9bE2fx1c5YTmDvM",
  "key40": "4o8MmfJJeAm3tL1GYHBrw3BMDPW4YcE1du67ybic968XdeakxqwWDpKXvRvN15EKRriu5oLgTJiuYsBdF8aZP6dN",
  "key41": "5MnbQtuFXvRzjdDNC4dqtaM64sMxw7Urm9omxmUb69YzAQyN8Ui2JvWyVucu18x2q5JgmXWYjighxkpd36hM4MKH",
  "key42": "4EiW83Cr1ihsSS6HH8QVVpQrzeudKaoiE7QHHsxUiCsbGAzq4j1Sw7M9TpKNQc7cAjitzGvcrU4r8aZGqRPAnCWB",
  "key43": "5ZQKc95ebZsvUR1hkqjMfkzbxVq6D4HNFTYPzNs9sMGrmPCcD4CWjbgpMzqRySU3QGz4jqzdSE8EVxmjFVcpEfbd",
  "key44": "4ctxSR7aA91B6LfVjw4WLBgW1EAVNGkwTqjHUquymSnrZvKGFWXr4TRVGJx3AJQQtMTzQQQNafsTNv7muw18hJAZ",
  "key45": "DeE6edzZJhFYVXGPWXELwHRHTjrHVYnsMf7SNWVrtx8hUgqDYj5VUAiKz38ikhnouCSyMfm5saeWTceKGzickQk",
  "key46": "5nTQkjEVirtE7cFttShzsuf6qqbvQP6jw4fSQEaQGew4q6Args7GMKS5nD2gh1rpa5J6Ckh8GC9YyyCTiteXZkfz",
  "key47": "wHfkQcNr8kT4PeC8AXDLmpUq1FczXTkjHXwt4GKr4yaF1h2yzbgvzyHxQgCkM5NZN12ANbnvuq266pwa8X8Vmsb",
  "key48": "3rPvXm7a8cymkknmz2Dmt6vZW9N9yoz4S4YgumkS5ET6bcKoMTR45pUpChVwt4epttixeFmPuiWmFe2v1AVqv21m"
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
