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
    "3LPW2Kzxau7apY6wBcL4LQWi2ii1636F3aN6RJ6o4dSg4sqJcYybHDWky7Njhw1MKNhZeMNLnBp9evspj4NCZcr9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VNjXA8BHRqyzY5JwhTFBtbKwknseN5a39sdeUBStDswRsUe9mBzd5FqUKEjZdT8KfWJYhSeJJCXFbeCr52LXoVw",
  "key1": "cjWmn7idnp1jYBpnPDe4JcwpTadMf1JbNvLSqM1wmwCr4eyLaVAc5wtwsPnKupWWLMgaZX6P6MaqZKVRDAnw2Tz",
  "key2": "47iamwz9TmvnG3LjU3AroJxDk5BCHdP9vTqZGAuQ8RGMiQGwhn4MvejMqS633bZpt6XFnyszAEHx8V1kPXUyRsDd",
  "key3": "4GqD7gNmcNot4f8vhosu3yVXJXES7skEi7X529bthRngo3eoMttjwNuFRzuJyE4XsKRt9yJFw32hTnWU5o2MkEzZ",
  "key4": "3usJNk1fWZRBedc46w29LGKQMhUCCWTgH2irvSUjsXVxoVBSpPw6Uo2VCy2QkEmghs7xxtvggqnGYFah1ERCokVW",
  "key5": "5pLY3Q4yVUtU7Z9aY7GkvmXq2jJF1gs6dnbQUj6NEVrm8XTLQu74xGuyoSQpzFgaJZboQ9hj8giukpZkF6gz3xrZ",
  "key6": "4WzQfJGyRxaprnoEhaczm7RkE3YgPFCoa76yxiDHXEuxqEU4jQv2qeBJFniJDgaDj6TvN4hPQG72L2novYAAeUXm",
  "key7": "Xvan9cF9EC9EQTXzJt47NjqKWGhyyzVN3JiFo9WWMoXwZVGzmGv9MsDYDvFV2SSwr6FYP3YLocDzrkMmxGfS6c3",
  "key8": "35gATsH1VxCdKQeWAY8AeeV5o7nbC5tchekwkxVf7jst1RhenKDUBebe8deDfFv7sVp3MdHNhqJhxqWb1kTrtL4p",
  "key9": "293A8Xd2BUZ1ha7fMigya2ZAw33eyu2KeBE5QKfatniuaDfLXrhycUp5iy7JSF3gCLGEVZgi9pbShWrYAcQgjQKv",
  "key10": "36wTsEzUvX8qq1tLqrpdm4rxtWaV5zp7VMxyEXtT4RsDQJ3vSztwfoRUbAae1dvDtiTGJ8MDZpUZ69Prx3gkSwGR",
  "key11": "o82Am3JgALJuAo7WQD4sQm2c9k49N2EnThktaX7idwDvPTjfL185qpTQ6MQpq1jDr2t2w2qeketAdMTudgabENd",
  "key12": "61YmbdXr5GCMPE5ZnLT9e12mwKcyF19cmfxJbqYQkm3rsKbpEfyn75bCjdqfW1iyJhcjZrp79ND56RbZcemrp5MT",
  "key13": "126kUUtgaxiKPKzR1aWXargM5gzpUtX7sdw3hcCa9wdj76Ck9WVshXFWGDe5GQ2XBk77mnRA2Kj4sGDdvwty9zcA",
  "key14": "4Dg7h1LvwdK1R14qbebzNLM8yXQZi9htkDhip4i9EVH9Y8XLX661Q76EpEuK6Rio395JxVMKysHdLVSJw9YYPvvo",
  "key15": "2mtpZ1oxRTQ2ozESGP9tGQfv9Qf5zBCYafidRAivef76EK2vsHxMmVgnMTamk1RUeRCX6GjL1KGKngtLTQLd1Y88",
  "key16": "3nZxVfJs9mYCCGKsXqppze7MZ1pG4JuP38MfP7svEuX7uizJiEexgPPS7WRTABZ2J17fAubPqzKAc1Ud9zUQGuub",
  "key17": "3EqGyA2oopCaeC3oacYiMBj973Mvvvnf37WiPyhXPj4eStNNKeGDoQDWNBLBovjGfkziJeQhuje93bL92wz4iFtL",
  "key18": "LKeeCHUg5pK6vVtYyMysT2ajXnHZiiDXTWdWQD487hCwKmQDkBmggVGkEggsZdhjUFwxBwHiAaLRGk1nixo2AMp",
  "key19": "3QmB9iPKfLb9Fw92CjByXWfxXd16Qn8WBFhgkJocFXQqgHDa192pp2YDL6Au6G2BhxTxh2UTR7KhBfJYkVeMfvty",
  "key20": "YZRFqyrD82t1EvVW1KeVrmpAJXn5f4G8KTV4jA3m8vZkQFCFLMDhcbwmE1N3WE8K9Xz7vFTvycSAGNL32bqSemm",
  "key21": "5o3w3xn28oSdTXT4MKzDyE4MKawrTJP5K9BhQKhGHxTkZ2RyMbX87AMEesAHnZkfbgUjBmp7DrXwnEBWuiRWyDip",
  "key22": "4Hpzj7ruKD6m9YHZzEA54Coy1FEAsDxBWzMLDgXdSuvozWVB4k9DQ6z7cMDvZYBBNwKenZcSZDksraqvwU7vrYyn",
  "key23": "EVGvTmn5n8s3M6UMorgdVm8W3isHb4kJqTA4XwKwRf19v11ubb5pp6c2F9s158LsiEgrjiq2EmgFPD6jgznVarw",
  "key24": "2Ys6KgowukM3gKotGqgSM9csLjcRiXAHMJ5dYobX8mrf4SeEnVBY6fsLxeJWWbzQPCRKrqK5HZTJjM65DfNUpSYz",
  "key25": "3S4fwXXTyJpvAwH5ix8QbwspnYgXxjU2aBftaaL6UkopjyUy2B4RDUi5aTbnT8DVCiXhJ26jHnytE9abAnYZ1kYG",
  "key26": "2oVRgrprj6m7KHfpsuKhiiM7qmSc4P5SGNj9x3xMyiJ5QqupHee2djMiRo5g75Z5k9GmaSQa3cq3TpKA8rLqi4qf",
  "key27": "4gnqcpkgUnBEMmWRCEJu1N9rATSohxYvVi9PDjtcCCHLpQMYxvkgu4PhfAzWUSP7BB9MpvSnwMKscdbCASJQLqYx",
  "key28": "2TVW25HTFyZVLjoXZePtTUk5YMcVYpSHawcy8bT1ZUm5VfDLj8FebVtV4ysfccL5egr9xXe1TmbHKkrbE7jT1j45",
  "key29": "2MTf7M1AWD8cM2QxUQ5fU7vLes2vS494FuGkhNoqsjeuEcEndhkKkvWSKB1Vh1QEwHYcUozzp5PksC52v3u8bYeS",
  "key30": "3Ad8binZV7Pn4zMg2a9kPWFHtuPVoee5J5yTDfto5AkkKuKAqR678ahmg9rMpnEjnUqj6mEa3Rz5dvVrpsYbFUP6",
  "key31": "3pApCMdQbBjLo1gE7LkPTsYwgYxTdr7HM1dwmCM9yZDAZ2rWbdYP7fJyo8wxRB4J3WJ2W99XvhJsYfSV9z2oxKhj",
  "key32": "4GeXgAFpp8D5gHzHGCt53kgmHMXokRQEtCUCjdFKnaR65LB6EmCzJXpQunhp6cwGxxF6RHhz6aHShZZrXn83v356",
  "key33": "5q7yXFxumLP2PXYhjgLS9xQ3KtQKGJcrvnvz9GA1YqmJXmthpD5edABR4yHepRsUw9AHygDJB63YY8bu8EcHdNUs",
  "key34": "EPDTtzudGrZn3tb3xa6kYJScyEzJYgwwcAG34532g4VsEh1Un9zxs1qXAHTYJ6ayTmeJKMThsdxQKJ9jAiYEoSo",
  "key35": "5wmuR4EsQEqa4WEZA3DAi7EVFUJ6r9cFC9GczehVWTjCZJuS3nfK31vedPx8e1Da1EhAtjMEci9t9q9mH3g91xDU",
  "key36": "2WHzip3h8v4xvXRLY3MKNNZ7NdcWYvwtkjGkLx1wJb2M5QJbcZG15v7L4whr84vKuVJNVugugKtiQymy8oVv4SGs",
  "key37": "52MkLmWc956ghUc6EwPHMVQGC5MvkPbXAtXMhnttqWQLsEMm5TU8xJDt6zo7NjEkGg27JqRuGFvtt8X18C5nUQE7",
  "key38": "3J2BmEDmtsLLgVtTJiqCb4L739q96bJSFPcvEgBetSt9XmHQuWCJXQbNAQxTBFHHub7BAu7CoQ167uJ2FpQn2Bip"
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
