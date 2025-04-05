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
    "3hyx2ZXyD5PxCF1bWYhwc7BMm5dH1dvfFtqdpfgL5iadpEGm4NpndE4krnGcrJ1iS5fq1W2GdykANRL5yuRYKkT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DPfSrisvDcqPW7s1aHYGFkC3aiWc4QLBJEv3YHaYqrzLNtRWZ5vnzdiVtK1FNvfoatQS9Zn5Wz5mj4uAszBC6tS",
  "key1": "2tvKSwNDvWWcqUnmwpwUXcBRULm9VhPS6dA4fKo7atjxt5aAMZue1eZyMMmNciYkBLoGFZGXCgZUx9WEuHbF1PcM",
  "key2": "4Lz3saFhg319QxAgxGZp4h7DrSspkSCFgV8ccwKqCsT7SAX58sFj7nFbYP23xqHDmXuoKBagTLKk41YR6xTLDC9G",
  "key3": "4CrRbK2hJbwjDP39G1MWisdGnSFjBSdGhe5V2rtuCJmQDUdq4kpzk42hLU9ASqtkH3zcKh7F1PjVRfU6V4dAaAB",
  "key4": "4C1ULgf5WSZ8nmjUXuL7G6L2BHn4pd1g2KbdLhRC5fdcjdDMpFihLLqaGHev4JFkZ86aBarYZ12gJn1H9djBkeac",
  "key5": "5BqPTtdEVQdDPcjLMJpDQJ2SRwTkyre7L1ob1HyuYV9ThupKLNqfJVs3k9gx3nTF8x7orqqPE7YUJZeWki4W2t4V",
  "key6": "3aqUxHwCqjRh5scgQXEEre4Dw1PzQxRssF7EUPNAGwBKfFdDFAZvRSASJzxRikCKLXioiNA4bmG4F6xhHkL1T4Qx",
  "key7": "3yoNgKxGpqkYNGNVGycYXczyvyB9phxYHwBMwu1x92v2QfvvemqwLYQnCfSVcXQM2sikhxyH1krSghMz689wRHFz",
  "key8": "5V5hhmdXEiiiuLd1oU8TEeLboLTggqySmALGNoHwy6QJcPB6wxxPbLbe4Yc98z5svk6RVjYCcTH3ZHwg14TyiRGo",
  "key9": "2D5n6Po7eSEJErgD4tcZxEzPrw4gChGALP8meNQKvD585E7XLZdxhBCnMW4caZrvLkkWSNXCMhzavxtn2FKAKM53",
  "key10": "55SEYVQhidVYnMCkurKWhTwTr3TC7yvUkw1Bx5QhyVRcvsn7H2fCMMvwKWcdGYdVVXGqSYoCsb2SsT9etuUnwd13",
  "key11": "4xKFQByQA9LQL5cvM4SBYPDW1BMN6JDD7RgPvxnWxZgxjy5BjVnUTPJkzGya6yirDgRPKGXVZoYJBdVof8Xrqeg4",
  "key12": "44kgpdmcVQavTsiRT3AyQRXG19vVPgx3SuD7YZNMgU9vcECYQhnNHNnt1dMJJCv5qGzTDe1cGyUPyYHfiRdUVmec",
  "key13": "eMFnxdfKAPdDTSy5SL5h18X9BumC7Zo23FE3EQFaMovCJ1HJMoeGXhiSxmJZ3exWeQLPDHeHP5AboeSkAwpuT5X",
  "key14": "31pTJwAPMxpib2TjxbB3avmBAUkt84JB7TdhWFrVCPCPcfSeo3YqzWSHM7Ayp7C4gA2EjqncVmuUmpG8WNuRwhBy",
  "key15": "2Si2D6Hu1tzoZr4J7miPDLQ38WZsumV2AtAacRjJYqfx9GE18gtDeNCHTEjDxGZJQkYEnoRUUSJLBtGVXoDtFVER",
  "key16": "4qJJpPvmRLbw8CJsU9LmQ9FPRrvMbZ3YqLHYVdpTmFrzxNh8jX16fkwzyRh4D7LkZoGCt8e7mEfsW3C8kwCDSaY4",
  "key17": "3o6aUXTXJCBirhsqQkoioeVaKL2pK9CFF3Rg4xFhbmTFTsfAEQjUw6tbgavvmkN42ZLiDvGAu4Sdv6C31HHGJqEW",
  "key18": "2U4Ft4aaz92aE8Y7QzAe8aWqqDajL56MmjmXhc6S29xrZgB55oBQ7hNL9CcbBntv77ZxFpMKtLXWiqLszwwwnALf",
  "key19": "2L5Dhu9jCpBMWx5DfPDwGKYg9VuTkWL7d3d3JuYpM8VxCpt3Kj6Bb1PTTpGeJPdkwDpzgb2AmqHAeHbdYXoSc8gZ",
  "key20": "5NzunKsTNDaCszawz58YEGmjKT33LRYt4Ah5D21Vo9sRCGb5oZt6x6wgDdEPrxT3Mkufd7k7FRr8iChCcNEWDqnC",
  "key21": "4FdvFdPNcHnhpdQUjxX81UftoE8VYHoBcnpn4rFxRc3kEe2wFdp83PZyR97cPUjhhi1D1pHDeHY3b9BgjrCJRFo2",
  "key22": "5KEXrup4Sz1RMj3V8pf2zBoGjZTFMAmE2aefhYdj9bqJfoEZTdrpyFLFfgnVtwGGUfCQ2KVSdo4kzon3VJKyoUGh",
  "key23": "5SwYhuwqhaHm5xSNx1L1cTzx2uCio4uXVDU3xCDgx5Q3ZXp7W1UUBdys968FheAUw6Vg2u1YZox7tgqDJLTuGjNQ",
  "key24": "66GUTzbw9ECu4PVfJvApRUXU7bDF3XRhYWz8GTYBZcQYeZY8EYAC2MyGFgJ5twcUNpdPwq4Naont1Qsw7ix9pLC1",
  "key25": "5wUsi6kiy72e2d472AppXzqNMrzsHkNYuWzt2GLShrtF1VpVZqiK8o3fcYrwkj3FwgY9R3srmcYNLbiRmx1tXg14",
  "key26": "5AP7KZfhBn3vbzwLGyfDtPEREnK44G4dhF3uvjrdag5ESDp9mdXuGMy2tZeiDoaCwznxCHLghe6aCwF2vhgU9xFG",
  "key27": "ergpoWaNT9h5m7uYuaNt4Mqy9xdWBEPab1JFpb9yVUXKxwm13yj2jPDhtMXKPPrKNSbqw4eNJbxGsSnUuXwYJQT",
  "key28": "4euqjLCXHtzNB9UrQfPxM4Pg6dmVbR2s7ph9ZuXPzSMk9e8JD3h3AvV6QDeAzTpxmW6eyBcoKTod981gPFYsb8E9",
  "key29": "5zMyjaiC8Hsmjeicom95MYZTXP1YDhrR82LTqpjuzJi9Uzw64ixHyUc3m9VnEm2aB6PiYUWWVLv3BSygJ8GSsFjC",
  "key30": "v8H7jZ2Aq6cBYwfHH543nT8btjUJy297xD9tbDsAnfrj3GXxUkR3pxSJtrrSxDoU8X3MDE4kuxeHKkgEX47jsUT",
  "key31": "2qfcT6CXSu7sUJprJEqU12BEo7vbZ83txppQDbkgnS7zejB1zE1JAQdPs1NjzAi6i3VYbbrVreCHaAJzQrDp79S4",
  "key32": "3VfPjGexWVs5Wu9oHjQdMmbXYWmpVtakvzhxWncpmuyDxw8Tr2yipFrj56mTszV7Kp8hGUQWBoL7eDiND7wSpcPw",
  "key33": "2JgCz9o6j92GvrmtcYaKJEQSMeMAPdZNopaFqGBwhGUrKEerCQqfLn6rv7iyVMwRFPi6PQT9Z4fM5NpnCa3yFDQs",
  "key34": "YZAF7XHhxNDeqaQNLe6BKkJChh2qM2v9oG9CwKw6dQwwWXTHGKCPjXHTcDXphg6gtwkz5bw5Hkb4fQAJ8fs3Z8q",
  "key35": "2i4nVm3FhG4jfwCieokDusCbvfALqsh9uzjhCeHD8NNs9CzcHfpdqReUjypdSGeY4x4SopMvDwB6mh6mkkTCXnCq",
  "key36": "2QgLD9Kk8QnJpquRUTJVazsJE4mxYE6TRsrdLDGVwCgYP7zokruy92UPkNQA1UAh45XeDpjmuXecFRnqxfek34Hb",
  "key37": "44XLB4E2ETn3VxrWjWK1GHkRPkxq4ZKdaSdLxgxkgNDkXDhuZypEyRA7KCB4cfDfkNgY11DY9jhTFALEbsoRqybq",
  "key38": "2hLteZz1KzUmhfiCFkC3AVthQbMsoPLyFiE6s8DfxdzDekqixVnrEd25yZBFzEG8svpu4BLmoiFAHCdFPH9oVhfd",
  "key39": "2NQVuxufAiQJiVy5QLvDPcMeSfrUHpp2t7hpi2BcS3Yzd1uBTHv7hYiw1ko5pM8cXPfJ3NmxJmXJKzvhWStBoSA8",
  "key40": "5tydfTQamgXqAbFiptFdnAu2ub52YsCrsegy2FABUg2aazLS4h9StVN9J4qg2fqD1VV9QBEYr7BGusU8wRt8oZVs",
  "key41": "2YuRLkGEcUR7e8xrmXtXbNDLrwavTunH6FZxqzVHnDyZNrN8smxmLmT7EFAnLAifuY69xTvqHC3QwACR1BoRWorq",
  "key42": "4gPyNniRMbtA6pEkFMsk6GtGxffFLQus9fkUyHuufcgRh9z2DxEZ4CpX1Dayc9UE39tDhk1mt16jpy7nzugGeaj2",
  "key43": "5KKt2y7vMq3bugxr4cWgxTDND2C8n2Sokr7Xup934jjGfdAQGmGUeruP4yVDNHQc4eX72ziqVnHJpTYMJN8N5Gsh",
  "key44": "2ALqnWesBbn7irN61Ua3ZqsNxWuAid7hzxYcLzi92JW97F9DoXhA9uk7qXcuyqipo2SZtfoiBuURznCbXRzn6mMQ",
  "key45": "3PprLjcm6eufW5Baqf9j8g95ZYmhQnaK8AnrSGtBgv9uE6QhhLBeucepejZ9mzaMAKbEqv5AyM2rRrNT11xhasGx",
  "key46": "2AhfweEUnrzpGkbRmdfqJLwAjV3NnPsHJDEbfYUCPWuAaT2KdH4PonbmHkbLVhHpBFRDUKNod3RZFoqXe9ETeN75",
  "key47": "29sCKS6dMBRo4ZWg1SpAubjy47928oAP5zH1LoeL8YZBZUriM8joR3SmuPSJxzfx8pwtsxfLWfttUqh1rTa6JfQL"
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
