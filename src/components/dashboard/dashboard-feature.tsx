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
    "2XP1WCv9uc2Dy67MsbJrRwbtfrZbM1fgRVXGcgZAwYNwfuC2xnYbuD16wPbtKm7bKtYkpY5cjkPXjuqsPFn7mdUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VoUHUaZ5rgnSa44XKfdtWwH2YJaJtq6cXcQboFiyeuGaLtWpAn3Lx5WPvC4Vip4VQhJaQZueCYtQMSd1s2cpdbT",
  "key1": "3gBvQGtcvTqf9d2epiDQcZsFTRejEyWAGy5rStE2qMwWzKBTvQCprfiXAw4AHtwUsqGpvWDTkkGDvLCvHvLqVang",
  "key2": "2kTHdJDndwF25w8TYVmkq1LSpTo72UdhKQStKvSyFwpRn2ZzwFQtDosisshUHix5EGBfo1tofFz9FZV7DWq7EydP",
  "key3": "2jFfVwZtU4UxwNF9BC7XdSdscnLQwTTr16veTgvhQgKPHZX5wu5kz1EbL9WvtkW6YWKh3dZe7mTdhgsNiE93vng4",
  "key4": "5ZigaQkxEGR4RiBEjCzzvKuBfajAtEv5BMYGRfnHesLj3CPs6HwxLYP7ucPicXJG4tdxcmtjr4ipVzJb67nqX13q",
  "key5": "3zZU7YaVGpjYJh1tPh6PAAX34CByJ1hdzBom3DvirHVxnW8Bb9zwhjpqKkryoRRTJhuDzvGvgxBMp5pY9cPusjpP",
  "key6": "4Ca7AXA2PXA186fTgDkXpifgnyjVXdVM4Cd2VzEeppbPh7jVYdRPETMgTXp8R4QSGJrz6BZu3FBLa2E86RVJZgMt",
  "key7": "3hzDqSgg2WnCJ2CQdX53ugBqpSDxocHcHzUaaw361mojBYGiY27j2JupUXxf8vFSK6EmyTvrXKRZZcS9TcDoSnc6",
  "key8": "4QuhyymzX3QdBHqgkzDZQK3rE97UUQHJR2UWGEP9MfjxdcsXbu4C6AwGqpTaphnXHx8ACHJoCwZBfHRhTRhEBSWi",
  "key9": "45oFvLUKtHuNj7KVvTd6akeudkvhG5BNy81cZ8CFfN3S6NpvAtUeNxXNFoa8TZChLm26Ri9BJ1Wg1w1wDiMNHBbp",
  "key10": "3hWyiFCZpCgpWtVKhLqyn6tCeCj7Jiy5Ssf62NzLksmAQSa33hRZmaZg4ZiK3uWZBVofmDBtHFwU3dE5EbQr5DE",
  "key11": "22jE4sKsT9WmjVV8CXdjGxM2k6oNzWz8nd76iW8y9ebBDaxGaYnq21AjCvZKAKzpqRiqK1c6jtnxx1WtbpSLtQ3f",
  "key12": "AtRy6ZR8NnLSETi64Hvso7NzVx7ubCC4nSppEtYiXdMcdrsdZG6qsEfsXW7eyT1sqsgci2VWiFHkSSHFbW6oeHy",
  "key13": "7vpqwHSyU6zfeyQUj3bW5sr4uEmzk7NYpyWrxseLT1rQw5CjnUBKkLkckE26mFDwm5fT4z9r8kvdVBtXUNUmFSR",
  "key14": "2emu67treB2fyxikaXmPJSoNf56x9ZDWE26UZFdXa2oeLoxSEDqssr11gQv5bnX2KDeriUDF1y4VuHmBZ75HXQry",
  "key15": "3Aj2Tq3un4qfUFfsqAo8Xvk8NtQfrbfJTK4rnKgiEUyn8TZgvkxVTswQr58Q6YHAS4PJ7AGm7YDDqKJYHM29u8eb",
  "key16": "2XdvNRLHscaZiyeQzBSycEkrjCph9F1AzKtesrHDR2zJhoAMbvjU4Yhq2WGZ14Qt8edbSvgLqfakyJFCgDzVSASq",
  "key17": "2KR2dGtz6pY6gCQ4dyamG7F56aRXoPUNV8XUfXaJgChNZZnQF9mg8MWbNEc8z6CRm1h2J2HvbKQVXUSwkniNW5WQ",
  "key18": "3ABE6bQb6H5qPDjcds2bCHUsQMEu9FijtwpD3Bo8k2FFK5xv8XxStWe7wD3eRAjC3CgLk1c65VxA3qo5miW74Chp",
  "key19": "4rr8Wg5CqikPMYAj1FhhK8aohMUiGiasSi6NTo11Rh2ELhMjZm4XCFtAWwdZGmU6ibkpWJcnhZhK4a12Axx6JRyc",
  "key20": "3Se6FxiMR6vUhd4Gx5YnDEekWg7LiCMKrBN5P9UyBTkdSfDunRQheUsFismt7a9EYYh27ahN3rnE7mzXJP5upDcn",
  "key21": "5Y7195Wo5nqe2BGeND8piJhtYYbYCtsargmyFUvKaoHmwFuxNqxXeM888upsPrSbpk42o4DN8x7NDhWZFmhLYx91",
  "key22": "4QFF8nkjbDrsE8UnFuhquMkiY6iGLtuCXgru3y7oFyXZ6gnp1sNLKbXdDNn41KWBWLCCnh85QvpPefiL31rcjjZs",
  "key23": "4XzsMeF8KokuHUzMFNBPLFrMEDYvtrRRj6NQyo13koEKaBDCDuynGN1ubD9oFNcGH4SU56h3TyCPfjj1t5tNzePN",
  "key24": "22gJVNbb5buHFa774AQCqPA757Dqutu8bQpd7SGF5cPXHxS5B6JptU1YgfYSG18z8Adj1u6MyLod2FbGX9uMMfdm",
  "key25": "5AU7sJRh7aih2AaJqzBg3vsgkwsVpiwz6ABGow4toR6S2PAZ45zcrtzKdDwcUofXd4tgxAqHX2tjSnGdHyKpRfZH",
  "key26": "3V1ac8Sew8UBo4HDSzcJVNm6XSSYcCoagyQx9HnZsBQBzzncfPrwfPwaGRNH1CWmkefAhTfYawRYJAZJpfj9dwTe",
  "key27": "nzGsiXYgcbfQ4LT1FctPHg1Y6oYaUWaowaL6LvnERbE1VQTbqkKDCZBaTLPBhLjYSLvVDVzHgK9qBdGrfnBseSA",
  "key28": "5o5iarELk2umv7pATZiw16r74vYEwn1sTaR5KS3zBHgnpjzAU5aFNGZLJ9LSawjbfNiQwhFM4e7E4JLkTqcohB1W",
  "key29": "454SJDhNiP75EYz4xs8PoAitNnCCCLVPBanKoCk8ozLBXdgmwGugU8HW2kS6MaCmADmMdAy7o7649AYvkVAZRjhU",
  "key30": "38GMYF8qKbZgc27fDtFjxQ17KjQHozM7JKUuxhnX1BZP6pvMXF4t49AZP5pWDvCd8tatga4bQ9ezMAQCnfnJJJ6C",
  "key31": "LdRTfhXHTFxrZ6ZkjuD3E35eEirDnz1VTd3qRX5nitfd7dwqjnNamWKDtAKtwio5gW5ddjQXzJJu2qmNp96XLcP",
  "key32": "q2Qs2eQvK3j25fDk9Nr7B5RqKdjkUCAwVwkZYihH6AesTWnrLpFWnf7jgqWK3TfeYZMQYmowbakMQhV4FLEbNQG",
  "key33": "3ego55P7kPACc1KGasy5hzzZik4uUS2NhK3y6C9ZWmaTfZzvt2H85WbhCJTsQWmyQoWPE8dPMU4QbpFsJumHVUtX",
  "key34": "34rYAV7ZbHvgs3KBBrE6L2gab4bBLbxjVLB89jxhwYtRwfiA2RhqNoNfK721PtUpbPDH2sjCzxWCqYy56TUswdGG",
  "key35": "5HqKm2mMCHB1SPWN9EhssC8amR4ZC7F2qVgGZ2hMhjTNmxusRE8FyZEbSAEc6NkdodH2CnCtCTuhozv9g2j7CpMg",
  "key36": "2phEAnznSCcAg2mPXXQtqFjuYCZirRcG33kZyj3TKg4zNAK9Zv7AsYsQpknj1y2fn5V7m3BBDA88cjqs1rpnsPmW",
  "key37": "5GsgkNBsb8aFUabwTqoku1M6AMt2q4XDk6w8eLBjAVbtAb3sabL4a51t5UdRvLABy2CUznFN7UAHSsuPz6vqwMTW",
  "key38": "FKsMEJ3aY5mfMQkFHZzYkLpzNCV7hC3cfwsVQWptETCnZDReFC2a1WkmpidAn5HRRhBdEESoAZsdu19SWGCv3XD",
  "key39": "5Sz5UPhkCyxXmtFCR6nshpfhTtT1F1xqWA7jxEXQqg8rZLosrXB2TSoaHAykETSfYiwEstENXk49T3SJyynbTBPL",
  "key40": "4ujDm5sZX2UgH3fXUvJjzFixAMV8YpNKrmXbTMN47BfNtd2wrpHWtwWam64RxAq6E2zJCeuXLf1Y6V443umoYcYv",
  "key41": "27jJqoM4RzGg5wrwDaD4ieJ6pJP1sjkSjRSCP8Psye9jYUfAUzzcmKjJ376qijmYPKbgBoFWUBL98kzSQZYvftiW",
  "key42": "4pCJZ71SsrqCgXJFfw417weLnhnHPuWhdSMsxPvVbv2vQr2k8TfZ8ZMpRkpmvAadXWfpPDabuLBBDv24bxW8scJD",
  "key43": "oQssvGnAt7BT7sU5Hyb3AqMqTbJVpPr6RFDNPgCNRpmXFQyxFTMBt9BH5xzkkcTGBDv7oyEkSk6homL53G8bVrx",
  "key44": "EwQGJpGCXdH1BQjwwBkSgm47EwL1yMdBUXyqLdQjxXRwTifo5mewVDhduXwK1i1AJb5jKmBx4fR14oMnu8TnXfq"
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
