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
    "4FqyHXYaHD7FG7X3psALG2zEvyyJ9d6i736Ymsb2p2sinSawKfvA79CrbhTHU6DPNdc5JxGLPqUi6aTRQiMNyHHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bKTkBe97cMrtbAVL9kQ6EaPkE5wH2Ukj1sPse5hb6j5ujuL3kcCVHG31UBf6e1nQ9s7xGKj41RDFANnZSZevupi",
  "key1": "5YakAcNefep6iFxzNtSkS9fJhMkP565F1L1pXKL7e7nrk33cJx4Ag4rqyXiZLV47fS6SpZayK3oMFFZ5LeuHt6qg",
  "key2": "5QWft48mLwgKBajGCsA6aspcgNj8EpEDzoiaFh1kbe9Nkf8WBWCN6gRtEpDGC4NnpTbEjnhVsewRk3gckqkC8RF5",
  "key3": "3wtkvVEtfCzzPfQmpDprPGSrQpcUFMA5sMhuy3is5Z5A4BekPys2GdFMweKgh3gere9GpGjPaRpcbXu1RSoDVocN",
  "key4": "2AzBdsw1xCg6gfFWxMhpqz3eKrY9nCnBV4bhhhkKoxBd83SCh777EckVishDv6Bt6NfBs73uXim6pMzvuSrEnSGh",
  "key5": "2xrWSjCUjsrDGoya3uhz4YJV9ZwZLMcEq9z77agM7EWAnVoJKD7cEH5RSG9f298QEQLWa1FXK6YKwTMNNEJGPcQp",
  "key6": "5u5oS4TQX5ziibR3UYVa4e5SqqYczEaTaibRzeML7ZKb9YaPxHp2BJ8jaRSnBH9BZGd4xz3fbBDP6NCFtV1payoG",
  "key7": "7uTyY7Kj4M4WdwD4ZQ1Lh3Rq6B4aBpQMhc8ieDcEayACiS8Dn2SpLHaCg9oZwRTqxfY6hLpieGkfFaZd1xHsQPd",
  "key8": "4JYTrY9DTH2gYBYsSiG2LV6sV2Gtw33LrbSWc5zTCtWxkVb2yntAEsgJANXU4xw8xASSYrfkoidgj2VxiB5sxW9z",
  "key9": "5qiDAdBPkfq4xFVjEbnFkvkJp89MKcp2GgHgcvzs6HpXW5MfYhujYyucT5uSFbLyk6YH8JEbDJY8E7oQYQAS3YR1",
  "key10": "4fT9rW3Qy6hyhVtLVotFZP1n6go2WUpQiAo3eaEXJs9FeRAQJjxqymNwKUKWqvDT8aLgqws2uF9iV9gqTvWtv6yG",
  "key11": "5CGsVWkbbxHnyX2PiozGBowS2XBNAHKsuXrASLB8jeExfKkeF16aTrjBcdH5EFxLMKmWWZp4yMhyLWNxoo9J86b7",
  "key12": "5x3QBtDGoapEA45Ukmg469f882qGrVeiDZcsvpt2GDSmpwpFTWJYKZWdAhEXssgocD3xBnvCYYvwxMWwwKU5L1vW",
  "key13": "JEKh99nzWQywukt3KL7xgirGVChjTM53gcdWuASbAC2iUfAJKC3e6YAMdTjaSXQvSFaHXLNg89SfEh2bMUwwQ1V",
  "key14": "5PGctAjT4tDV2NcHyXG5N6hjWYn1HDUF4pM8LR7gkLCY1s8dkeVqf8BN6BCHpo3ujE9g9VCgT7bazyDoXokKV1ab",
  "key15": "3TpMDnPJ9oEPC3myxvdp69A9TyPyEPTjkoJ8MENsQT3RvwXegTG69Ap44ALpZMzceQA5C9KXkKXnm9ywWL2Qexbt",
  "key16": "5autNcm7AXBa3GoY4FujFV4srSgzxTfB8Q2AHv874vjBKT4DMhNMedoSDzN9AXp8HZ7F74yqqNozAAVd5pSjJ7BV",
  "key17": "4KPWHfFLqcHt5EbuPVoM7SUkFU4PWLEUeCbf21qe7DFz81rEJBjTSZ4uGHk6JrRHSNjG2wMBjKnQrjfWPQP7qKXA",
  "key18": "2pn3MmVTusLqvyjFg7wMYGvE5UT9E7HD8uSZuGb62FhLiEuu74tbBvUrfyntz1PgvTEma996tHKonF2y6Uptn7Nc",
  "key19": "5mhca2fTmseGV72jnkdGtSnTrkjHLfHvPskzjCnHfXVmAYox6S375BtT4euGbWfjZB2rygtHYDLkynsgPXLuYYpG",
  "key20": "3UphuynW7UbUa1Fuy1eSNfiPno9rfv2VhmNn3ZPH4QUDSC3UMcZ8WyfqBAiyZg6WjXB5yQeNww4hDuohMQS5wfT2",
  "key21": "5bYNC742dEzkvhMb2WvdaQF2dKQF3qQ7NrKjD8k9XsG86YiioGB8L7C1B9SkfiwDm7J5qXECmxkjciNfhjb5F7XR",
  "key22": "2SZT7Lqbn64fegUL1ysay7XXDqddd7XaZxvA8RW4SBui23neAokoHGp8Gp5jtcuErCxP8tg9YH4izZohezRGx8Vh",
  "key23": "TA8B5cwezzsUvdkvHBZjHVJGdn3xa1FW7ZxPD3DkHoZgkbfjsNPc6hXqozuYTwxDBoso48QXUm8DexrNn81bbyF",
  "key24": "2dNdW6Y5ggZdvpgpWaqrHz5ey9EkVBYk4UNVJuBTThbspar5nryXqfA4grV5HHsCbgDf3neLz2iBrHLCKWNvHPfx",
  "key25": "SCXQ3xPXoreGB33cr4y31AZrWHkZDnmAoxtpB4mQ97ZgsDaBNebzZuKY64zfzxXKUMqY6h5fmCHWdgyM4cN3KWg",
  "key26": "5NZrzEYMHP9GzX5eg4U13HLd43nmRtovfGn8maL112Yj5FWNwRfBxEiSwrF3YaaHNkaVnt9bF2yW9exDgEDGeNX6",
  "key27": "2qp86renrf7vR1krdVmsXqBavMoncP6fdFFNYdpr7c5YE8zDyijT72XLZkWA1yED94E8ckf3gTUseeoSQVTnZnD2",
  "key28": "eF5Q2qGMzTR29ETers1fSwfjaUVL3xttsdB6gymsd8zrNAjdFZm3TkWYtYvhdugbTd5d8jfSX3LJWkHAxQX7DY4",
  "key29": "4XrNzJmH2E6YK9rJyw3kKVZ6kaeQqrgpd7ur4c7QYVyeM8QcD3FGKxHpi4PKJZruVowqEEtdtCunLt9VeeCvYkmZ",
  "key30": "36Kg9N7kctL1CjSrDx9ztj8rmAmnAESyjh9p4C8ZkopuCnrBxz41CoFRPDuTFTEgiwfBpn84bE8w7WwJVj2LZS9W",
  "key31": "36u8uHtyfxJGmmt8zqcwiu8dJn2JRvcFPgdZceD2csUcAMhqGk3t2BJA3jDcAfwoGneKuF4aMEc5Z6FzDdc5sNvR",
  "key32": "37BSEq5zpN7uHgX7PbFzhZUF67b1G8ZWd2e5UeHLDcDdSviSau4SpWLCLLqTBRbzWdkQ8kzW6MN8iKKPitPMy1zZ",
  "key33": "5R1gPMoEKSKusynCTEcjmxAzoxo4C6Aj8rTRKuAehWEifqe8b6CUvHkQWzERXdmrtii1KvTv62mmy2YuHCafZxpb",
  "key34": "3nwLwN3fv52QyLZPktVZcocjHHQnpPWFKYmpMp8msrHcWmd45vLcg52EXbyJa1TuQv5nk89258iVepGVSuXrYTND",
  "key35": "67drAdaTz8v7tcRkwp6SkgJmcH8BTkeNA1fTQbdBuQC5EkkFUczEXApmjKky1UtKnAYxYVVgXRcVzvtkmVKHWna7"
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
