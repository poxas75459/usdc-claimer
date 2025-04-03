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
    "2HtZHDxv4QuYQr14TLS5s8WvV53Y2Yx3y9RC2EaoyBK3PoXQnK1wUT6oL9WqMDSWi3J1kUvV7XUsQT5eVYygZahf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mpznRmR5RcudF9b7zh8jG2cvfCNwCidRHYrtpTaFpxchbeJi5jQneJuMY6DQGDnSvz668ySfKHVVMgq1m8UfSHd",
  "key1": "52JdWdQe3UBGTo7VpwbApDTRVYXRUsWzu9FQcVUaHBzJjVm1AAaAVdfWr4tQ6kKkoZhrNJbzcza3L2tJ9V7ikcrD",
  "key2": "5GyMw5vtB9nnBG3S5svTy79H8ZRsbQaF8wPFqbojUHoWC9YzyBz4pXjUNq4KYyrDkrJYWePcfh84dsCQknxadKUR",
  "key3": "2VLgHFEwB3zExqteooMe3URDML85sYsqsBmEyakmBCi1ce83VyDjhNEeXgYP6QB56PETpMHvUQ3GA6aCXVuCncX9",
  "key4": "5hdPyPA3XWV5vWRYVwS6ubvyfT8mmnWEQrGFfHSY28EN1mxW2UV6fPfjZA3ujXKfzxa5ndFqrCdukDG5RAs65TAE",
  "key5": "2fFSup9FaRTWSBzow8atg5nmpx2rkvRSk4SWySBeWLitoDgZD1xrmuFCCMfUo2LrtBfQAEaP9dCcQh9WsabPiGR4",
  "key6": "perT1WxYdXGd2DsWCaSLkDB7L3JHi7VeotMnYkK5NdxNjuM9bZXScHTgXJHeUaCPRgEPPLAEWC1DABPWh8XniL4",
  "key7": "5nYSG1hdxbGEqr71CRoCWDKiAVfwGSU4UKCUD8t6ehYwzgRTBg33RupfLVcNt7J8PZCVbk4CAkaoe4hi9snkN6kH",
  "key8": "4KuLKwDWLkWgQzWdgE8LTfeNMfXBytvXstxgKgn6yYYr5WBTRhuLbNehjHJHNG42bbFtMRX9pA8WUudJKs7EawNT",
  "key9": "44GWTRq5x9WARJo6Wx3dJW8oNb3Q7Q8dYfvWHdxdGhzHTTmJqhS92EDc5kmiQNWgGCkchuGM1Dp6RvgzbkERQv2R",
  "key10": "5VhShCdgvYNwZax98CXwaSTCBMimqQZ35bEUgn621qBv8jkG6aAvrA26QW36jRU12PGMGNo5FE112ELDSmKHaN8c",
  "key11": "5vtHW1UTtwsYNvyPRTyihZJjQ9CVZJs5rPzgVNZ1X9XYGmyTToey5VmWgg49dqiLyhH3HdujcQqspxkd658yTiNr",
  "key12": "5sEsXKmTqrycoUz2z12iyPnpmUUPGHDkdRYAfV18LZ9s7qoKuX8gyWHRvw5e8fuHzwBg9BEnS1XnCvw46oFH9DaY",
  "key13": "4ACN3AzPPjckwYCy1RG8L7hf1KuXcw2z9R6xXhm26gq5Vz3CjWUcjBKKDzruWRLtuBQKarAZgBYHpeMSMB5nrAQe",
  "key14": "48tfRAJWSqfQurWR6UMBVftxTgvnzs9JYNK3zB7CytoDVuyGm775Wdy6GWBwdV17ejumXZAuKAUaecegmNzDfBa3",
  "key15": "tU2esMh7sAdTZuoRXFvUMRiK55UMrRsjncYDbtVrHDZkuhVXBtqb815NQLQDhdGaT2xHw7WpJaUMcjxVNEa9kQa",
  "key16": "32EpMbpZnWDFCFpVr9gNNk8GqmvEHjNzSe9p5999e7gN8jDEhoW5NkvPthcV7Xm8QuJCBZqYotMqHTB1LEh2S1dt",
  "key17": "5wrEH61rnPcwouZSekyqmeUvJjSBvG298HDsR8Nw7npfZAdXSD5GmjDpnvJeiPKT9uB2NLkLj7sB4HCw7tSsGwas",
  "key18": "4oxXStMunbuXE19k37Jd3929Xgaob7i27JGVr2zwQcr6DcSum6gkjBKiZ3M3T738PnQUHCbCSnDCd1aQcfdH8gYV",
  "key19": "3bS7QXT4yEpqB7dUbNpCjXvxLH1esiWPcxna8hqEUHmMufMQ4HzscWMnoTbvwWUrfaj3cEL2KJQZoNzG18MSayxq",
  "key20": "fcRkxQexo3jLLcqWfYPLA4k9XPMfHYzt13C2DdQSzq64S59uLWgznjaKgsiKx1mmszLHC5uivAkV5c1x9WPzwBG",
  "key21": "3zhKGyTEgLmCoyDSbuQBKgi9LZdVWtkB7YUzD2pujLzkHc6Gzk7AZkw7NMF3iPMqGaBmmfx711tXe8NjJhUcMwRq",
  "key22": "2c8W2UiwL2Wh4CNU7aNEBaBjZCFPMZ79Rhq2CqEYYKFBtBSbLdnA4eRBcNVFnHrrtw6hfgyAZkDKw9HyDUFn4C5q",
  "key23": "5cvc5eT5yaM626xy5RJgHNvahcNAjDV7gyby45RiNHGnu8xv391kjMdZZkfgyiZiKTKbiCWDvEZZwbMqzyQ3bUV4",
  "key24": "5nHxeLphYVDZDczBJh4nbEBLdSUpqKeVMiF8g3N3HVBKboKepH71FJC7hwbQu53QMus6neevKETUy2JjbvSDoGcn",
  "key25": "C8pQHr9AqWyywWFkNoC4CBX6cCeZMgb8wJ7wptUD1HQ6jq6JgDFAHxkMYLGbsj5GNzx8gC5QYuiqYTEhipuqp5n",
  "key26": "5BwG6tqRq24CBp3kpbfSPMRps1h7vr1Waw3UFBumseDZvq1GwNhnKaE4j2BtNY7bwoqkrj33EULRB8ohdLNo46B",
  "key27": "MB6bMbBHcMxqGMujxRwwwtuSv39NzoTk6nP8aDS81SUQutjJSgDs5rS3natSHUW9Em6piwu4wPrPZCdXRJGg9dj",
  "key28": "3Am7abMbpzX8segMkUq4Cc3hRXfN2FKJE8azKT2anjv1Z3UUnSojSsvmYjzmCywuv58CtNgUWvM6AVq5FPttfrzm",
  "key29": "2QPKafP4Drx8dfsz9xiGi8mD6uQbDtwASQLzu2soqVYTfYNiYnd8pPQku7jxXVDriC7AuQCsQiNtGtk447YaKSk9",
  "key30": "5xn8js8i7QXd1FSK5wvfiRifc2jiDVcdRomBKa8KKHio2PTpy2UNawnhP5VnuBi4XdGGDB1ikXZqQmag1oiHA9jd",
  "key31": "3LCQfNfivN6o484Cvef1EoQxBsBruaAVjjaovxQDzXZos3fAjYBCSBH83DSWrWCTTfAT3NgmBi63iJqx1oqcSwGS",
  "key32": "2nwFJRarZfozQuJCptNBcL2JktVY9ZLvsGUaSfmsfzV7FJfMUBaJUKnRYRWvQa547iwa5Daz6gDWn5BM4mDsBbRs",
  "key33": "4y6zNhoXgT7QfGz7ifiL7YKh8ofb3FeYAiyzQKHUW17NghwwbG9ro2mPyroU7vnoJUkUo86oaByAv2V69VPBkgf4",
  "key34": "3mmAQrPyna8D3pGf6qspujAbZCCzYeF1Nhf49H4m7655a9JAsLyGGfM1Vn7N9y5M2MeagRvU8cC6Tg8fn2cjMAvq",
  "key35": "273Cnvj5HjXS8rxGcL65ZJEM757zLEjYL3Kqg3KYEjsKfWCQCcaFH4LKXgNp8ktJ4CB4oE2pcuEajohRkXv38f4V",
  "key36": "4W3BBqxwwWAgBqikvXXcxjGUYgK9wUne4sYZMZuXAzZnnti2GCdmHCXzC8M4UAgRjay3dzAEf2QhgBP8gdeGAp9y",
  "key37": "5gy3dDPfZtViMw8yS4HPZCj8qiE7fUvmWhNWsL2MUjbeUBTmon5QJ5oy6V8vvuiuJMGg5czmTCgWjGxMTJpaT12w",
  "key38": "4zk4WkmnBSTnLqrmNjKbnR3rTdJJv2xz2vyYsWMwxdYf2sf5mtWYJLpyzcfwq5XVgVb9buZQH3NF5YGcbkk4zJ5D",
  "key39": "3rJU1Ye1xSgWLg52NoCQrVDezkorFFNpkneQnAxPptF5GU4TZQ88FMUZkcPGhReNv1A8YzNHqB7qYYP1miFuH2Ji"
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
