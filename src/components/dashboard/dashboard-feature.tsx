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
    "5aXMXKUmK9TNvUrvANmavCNjDJVLQwvaxdpvPxP67YRhtarkGFYrAyUN2QiDJE4QxZRLN5oet7yXHAeXXLj4Uvoe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XHiiyvbKWGswfsiEiT9YvTXTLyC3g1Hu8SQAK6msyyDEYNyAm7b8Rgq7manCthWwUeJkjXhvhZFnEKuJxjLpHwJ",
  "key1": "4rJ58Cvn9VgeyAaPWk5bJuJn481G2Sr1b5waZWeEXxJK5vquEGNhWBKLcvBJfeLsKXpV4SVdTujU8k8WP5UPku57",
  "key2": "2eFny75Eu6Muy1fEXnM8w3ZqmdDL87gviw6QWjW2SE6oV6sZzA1rdLptGbPQvvinJBEcvgFnDNnauGaURDcdq7rx",
  "key3": "2kM7SFUy3HqMMqHNmKiykhxNk1xWDWxf2njRbfcWQzCGLFe6QMEn9KK9GSMPtWuygvUGAV5TpRXF5rtKPRTvWi3p",
  "key4": "4z5R2F9M2MmnWAbJGJkw66dfGFZQ8pw48QsV2HE12JSTRR2KfzcUM4m85pxnqkNLSLqmMcjS23NDBq5xHE6GVDxT",
  "key5": "2jZkKFVg1nW5T8Bh1gZ353fLxjRhaEbQjKhcvt1yRiGbjE8cFafHbpxjWvjAg4jASxpU4XXG1WcHS8AxsdTcL7PC",
  "key6": "8QYVkbtrK4C4Uqa19u57rcuDYT99xiPT9XhhsSmB4t6KCPARubzCHoqCCK3CY8qyWUNdDsPScQ7RyFRHUA2s36u",
  "key7": "2JD87wZJ74ha6yoKSWHtxLALLsqLcraH6anEt8cznTJk55soLu4hLKFoTZLj6vUeApLcppBJbKwSKPfg6Y5MhVVb",
  "key8": "4ExF57ZzXJj7zraHbUoxsysKZfArZjJEFJUC4JV8hqGZYd8aHrmPQCuuZ681nSsZwVWqTmKQWXmkCb4dEw1JQcvS",
  "key9": "249WpNSWG9VyzzJpUwwaGWRd94aUJWQ697P8Bw1uzN6qzYbDaJiTT4m68UWKnYiaUSSjWW7o5c8BJUXkrx9UdHX2",
  "key10": "4jSP8atpJTn9rDJ78AMooE73G2pQfoCccxT61iLwP4tV9wD5FcQ8nezYEFxAEY22bRSj2zD7HWNG7xm3nDGy5fUP",
  "key11": "4DuNqNfNg2wMELWWGboyUAJR4VAMB21zwDu55RTmuqugXZWhXLPJjNAESDLBsTsqZdA1HfFs6mkuWMGQ68zsr1L3",
  "key12": "3eeFkUQ7QJaiMgbD2HA7dpsKA7nqGSicqpSkNw47haEuqrt3Qqxj1X14XQ6SEDCqo4ZZuh9NBsZHduKPoxP55ehm",
  "key13": "3EK9har56fd4kcXPgSCML9v4AduwJx9iEB56SidRiA2GnGcFFdq7d8NefUftsbgiHndscpUBBFCYDzrh36obqJNF",
  "key14": "4973VZNQKTCaAk1RsZRsZckH1xrQ3LN7tBbyJLApPZoWPGhw7SMFgWQDAePUHd7Whj3QpUwjJnjYfqGsoMsw5vQH",
  "key15": "2FKStA1EDNN4VSawBz5NSj1LwMWeQrqQoasqPhtgFKfUjFRUUM8TJoKTQCanaxgKAmXJpBi8Jucwe5zDvFWGpv7D",
  "key16": "53XKkbbxNQ2ph2kPmtbeG6QKE68dgnxEr2LEbzu2Zp4riDkGZDjEGgjwLWL4Rn3N9Fz3Mr3CvaAiQbHQGWA41juL",
  "key17": "57dvpq2jRjVYLyABoMJyaWYENinr8MEh6EsvWvsHWPe6fXuSEeReoMzYLdx7xN36shzkocP4f4bmKmKPQwSkEXFu",
  "key18": "SA3g76xgCfFojNVr5mfMfhqdeyqG9Xy4Bx8JTy7SPoHFRuVE9udAhcRRvgG9KjvH6JkLfcKdAuVrdAgXQGPQdu8",
  "key19": "5hDPNmb6RfweprXKdBFY2xZ7KQUCxUE61t6Emi44FuGTAx6iryjoZdKWsEEYNEq6ogyM4WRJQg4vYpzMefZQkkxh",
  "key20": "22n1eTWDeXx574K12VwSh86eMzrFEwTo773FPW7FCAkXovxd5zVAmitAvmZqvxR4vNrFdoKnLw7AhaSKkLQVThZD",
  "key21": "2vvTow1VoJWuCPbeGKFkcuCZGXoXMmUWx1soLGVVtS6JHwvDCow8EUmJDHYbStQepLz2EtrpyQJtr4vGwswnAmLy",
  "key22": "49zsBhDQcij9f1eYj75iRUGTKWCwv1USSEuqCPWnPPreiNaTQXPwNNv6LLrw52v54LVeiDfLxLN4LXHrDdwjgBMg",
  "key23": "4BdkqMx1CArQdNvui4yehtbgssL6rwH7w7tbKi1BEZNgoqYzZVmbX5EmG9UWhELWyhutppmYySJGDs6WJqYzdsR5",
  "key24": "5w3dGW1Xt1AMBkgJzPyPzYhCZ6PHzRBR68oDgH6WFafZBPAYbzqYofGALEnWwrNwxqvKfXcaCfCnJPcbAhxQ9T7f",
  "key25": "3pAaSQ9HQuZedmFpA3AY5VT9kBpdgdAyVeTBijPuCrtjQcdSZW7TUyr5CKMHjr3Ni8JA9BGrzAqDg6CtNT7wbqs",
  "key26": "2DZkSn4CvHv1ZAT56z7CJaxPDrTjSU2kcUUdZDLvMTTXupVBMG6B1eev4qoi34LF1B2gypATTgcTAs9AQXYJ8koq",
  "key27": "57mKKzZEDJ8v5PVgC4snZgrQQD3FvnFxUu3vakGpw4DUXPZX2qMGUcpoE8o2rsdaZcvUFdrtept4s1NQ171w2kTw",
  "key28": "4ndsPKJG9kzNmfikE55KS8mEu7CSdxx26J7ky8Zyv33kQfjztXKVxx8osuXcs7ve9k6rfYWVg7hhGgg9E5cDbaCR",
  "key29": "2YrZ2Fxw1gWrYVmdvBKK5fe6YmMBTa8jkxbKKkALc3rDZrgKXoPTRRAeT8Qt3XCEoxzzcuNNAM5PuDZZUi3WG5Mj",
  "key30": "3h9bcT2hCaqaR9WphgVChZWYZ2TkaDY5YKgkviZtysrajhXK9ZqEf3LNWZXPY9WDzs6KmqEyepayTxXWNUN7sQki",
  "key31": "2bd5Qb6GKJfBVSxaSVq94W14HTni2nrxEZbrT7UcCaNVHAr8eYmiVrYae5wDC9Y2hTxHCpbadcYv9qGF7Zi6Dkob",
  "key32": "52iV1Wty5MYVw4SnMah6JDUP5F37yg8mSSc6bcu4yjjFNMPBh8cW7dUBDR3hRaxzWVJio4MXAK8L43xf6syRBdSa",
  "key33": "43wDsSz65ZzTYtFZz9DpPVVAVRnnqDigeA4WS6E2ASGSLCWgB1t3FxKKk8ukSKmN78rgZn4uNrwbp6Vm2yKatoSp",
  "key34": "2W71AHauay4h1PwABpQddaJWRDezPTZGG2sQubL2fg2S1zJV34TccF5DARMQBaGMxnQLc2C9cMtjkKwmFwHHKxtH",
  "key35": "3tuKAMdhuqdf6gvAY6Sw5c2sfaK4P16YhY4CsCeX3Phf2gBPx61wZA4L59FqYJAcdga9g3j4qEqxYvcUs6Eg6H5b",
  "key36": "z8Hg1Aa3W2m6WLSKqntpgtpKW5VgsiUy3XVfXPjATCTAfrwwtfWWShZwSMPcYd6X9bNrk9zGHHUbGMUqTEP7BBs",
  "key37": "5BpRnACjURXubFMzuDpS83gWFpV9PXHcEjyWsbZDZBYaQ2NGWmxmv8Sa6w7ULuP52G922D4u2xv3drpxq8aiwWQC",
  "key38": "4KrZEJe38xJktWd2C2xBRXiFURy9wp8BCahhBjXa14X4y8m83Fty1hKnrhzXNYwrurFsvcjWoHkG881UCqvUT2PQ",
  "key39": "65hAnRVJW8bdt7zhQ9qKzS938pw983aPfvj1BEb6BykVGbuZHNdi5CTZS4vnFekWAFNxVjftmbGH4kfqFXqvrTBi",
  "key40": "5adAm4NhkzTou7AZBZPGsLkQyNvSvfNPJP8xPQLYWCtLKuzWhBHmWpjh63RAFHD5tyJvy62Ktb51RSPPSVDFE88",
  "key41": "4ezjefAGDYQWojnhD8GC2oTeSJtETR5AxAPmr7XaLaXCZCavQGuEgy64ADcmYJm94gyVfa62ouwnkVpm5kohd9td",
  "key42": "5SPtHF4F9h3hg42SJodQxjEKUUFNQjFQfTzpbF7fqctkpwLG9TWHqjXCueeXR3ETowMTFsXt11dcxN6z9NUnxxq5",
  "key43": "5G8k84U7C3A6Xcf3c16p3t2Pd7hnYDjJbdiyESLCTN322XUG3ngiyTjudgc68RLMU373AyWCnMiQMxxQjVgQpnDN",
  "key44": "42PfLtdRzzwCp4adPyrbQDpHYSNdUxSgsmma6fjzWmyGiDJUPQgAJnyXrAP73rdAFYVajjSFoNACBXLNspuJBces",
  "key45": "5jBZF8yB8QsUWYb7oVwhSpVPBNpGTRctrmoPtHDfaQj98vbJG2ETz4VcEJiSg7EPQ1rACiTVyKnupmx8oQAR1EFa"
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
