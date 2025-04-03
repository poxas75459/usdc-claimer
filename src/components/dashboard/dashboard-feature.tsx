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
    "4ETVkWBRevFCXdo4exqLGkcdVSKYbzfngRHGacswMzdK8PboHmFBMG49U5Yw5vwvyvHmkbZVz6D1NRdoZcAmKEv1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p4Y5HepuqEE4cp9sMS3bMJLRNDmsJuT7Yi4yVRUVxUvVPVYZQUkZdTGwTbUNHSoUC4ozkLWrFyQir8mMqdUfShQ",
  "key1": "2biiVi152PJKehReEnamdWciwjVHKksDjkaF5rDb4UMFVRvEtmsFC5dPdK1zoLgrtkp5BfGoHJqgXJTjteTJiMoF",
  "key2": "4mpDrmKsdBTr2i84az6mJ9kvrnbPEtY3zzHEyYh7qXxUUB5iVUANLWfGXZ4dNsQdUCNpdYMaUJ8WW8HW6hRe4sg1",
  "key3": "NeLtwv9SdB1a3XSHumpsn9jz8vUcp69ZwTwxfi8GgTRtFW6jjETXSEoQa2hLaVB1xKZWNfL2SykXgxFP6avCkJr",
  "key4": "4aS9C8cgCpQBt5QM6YXunTKiCpMzMx4ikTJf4krSzJzEiy6tVuzk8Hc9qPkXRyPrZEJcH2MYCtQwwHQVVSLNmUjG",
  "key5": "367dJ1zSMAmGZeuwVVdvGk8jVYqdBVUjrugqTRTQFM3WHLkA9YPCNDD75QRmqvoJcAuWdjpvB1tyinjcUoNwCDHx",
  "key6": "4JmccczgmqME2nVutGP1D4facTHoubvRT2RRiD81xB56a8YtPXBw6CZkXsaunfjNLs7eAxLjdPJ5r9dan1kLSMP4",
  "key7": "56w53JDCwyefQyV5Wt7CXjVSLc74nUXc2wMHSgpq41YvL8ZMxfxnMLzX4cE6HYwENTv74eGcs8ReuiqDDHgLgje8",
  "key8": "2LHn97w3Mn1C6Ch3gZUgP9gLexuio5ostWGEgu7sC9JEHABK2GYQW6v8MfAcDDADNhn1YsVg67sGUNv2qQN9vVaM",
  "key9": "y9MTymJ5bNq3hFJcwTeuCqR7ibiBrJ53d9V52cwWTAFtErtdZLk6ngk53F2eG89rgGETSbn6v9JEPFDVhdtjfq3",
  "key10": "2bm1LbqFyYRdW713p35wc6sW9tb6MUub8zTBh3VYVRhwo8DVxtSLLNsARKDyTzLh9zdeb6Mmc3utdtKSRhgGh1iE",
  "key11": "T4FxymUjdn9CQXEc9MhHMfEmDNcYCLbbYKiu8LcjmwiG6CpnhoR6BnSC8sbhi9A7D9G6qVu6qRpP4PqfoJH2Ave",
  "key12": "35ummf6dm6aTjzMzmBuatWZu5khVsz9gXN1Tnu2BJ8fShCGtNokpMK41YALe9HUGcEvixn9CHAwbSjikzH18fE4G",
  "key13": "5eoKSkcwy2H8rDcFcwh5HscqDrhkuf6dR46kwvJFQ47WFsTbnJPdeZWfwmUaqcppZoK4bQebf8K8snJxQNSkL5Jk",
  "key14": "g4oESfxmfoVQv1etGbTvvCdsk2hqnSMxRydUNoPTkcuyCFfxS3KBd47dWV2YnqYaezukTRSC41a7MoFRCVpqmVB",
  "key15": "64LREdrSRaSYYotuY4xofE5wSvMkqpZvnCVohUxE5g6gFhbqxN7yXWszhtihyiFnW9H4mTizsJh8vLEfey6XCGKg",
  "key16": "3LSpgtC7pKrGHmvKKgTKygE7daZz18Lt3a3r65ecAg4GyfbnSFgCsjozzVMaNfJSXiF1LimCpXUHnnZk8RWCCt7h",
  "key17": "4naKTtwJoS2tRKTRtUYdnmDvk34ETMjHoT2LaBWH74AymXw1xvH6NjGRJKng3kF7vS933atY9qeEg7Mn83dBDYe3",
  "key18": "5AUop6rEjyexmyedUqDVbSeuy89ANNSx8nDPTp6WKZmD5My7qajvC7koHyfno92PmtucicaBgxWjBzoyehBMkn95",
  "key19": "5ZRQ8kbfixtVFVqSu47HKcHZ85i39USPFJSipdWDJh74P3VS8GpURgGoLSwjxQwsn7w6SmySjLjGVpZjeXfWMTTk",
  "key20": "4APLzASvbbaT6bmTKprpyzUeMUxYFkSNKfCMy1QMtttTLqwPEgKSz6C3jtu7z9UL2Dxp8EGw3uGKgmBbk1xgdGj8",
  "key21": "4wb7ANkreWRTft52JxjGbC3pkRRmpZQwVrbFfvyMKVt8tzAYAHrugcdUSqfm7LPrvk3Nw4npdoTYAEtUCjpT7x5Y",
  "key22": "4NitproTT67dBXb4PN5Z6K7tu3jHEXqUiSdo2QG8viWr1uUiC69QtK6hpasU5hHbVYkCyMVPCeKjPevKeWEdFNm5",
  "key23": "5WQxvY4bQnjcfXMZ39WTSfH2e6TWCnESrrHgs1sNJda8CE53pVtGTKTA5YFu2xUK4AaysXEwTNPgnbimNpTMoxxj",
  "key24": "46o4J5C85wVmgUk4kCC6NDuq57h6drTnNFxTEuCWh5QRyuQgsUiQmuNw25wVNPTgms87wuJXsy3zUqB8MtQJg6MY",
  "key25": "4ezV4D7xiE3aqpFWKLZ3LW1tqdQ9e7x4PrmfANbMNyhJ9yqCnNXSEhK3owKzqsckFj2fyJCAPy6tceWR2K6x93sh",
  "key26": "fkb64VzhTQupirkNbn7UEKXkv29VsR4nMpCdB7cdV9itBQA3RkGWXWgcWiHqPihesARxociMv6yjQ6zGtvKGy5y",
  "key27": "vDtytroaC6dk4YDnrUyTfiguHZmJ4ywo9oTJNSxaaE6QtKzVq8EntFmqWMzxgia7Ggdzz71tVz7k27QL16JeqvR",
  "key28": "4D1aKu6av3MSFgmQEZrbSahnQizufSoYzrHRjU7cjy35VaLx5y8XJtMZWq7rQXiGxR15RCj4vo7f245fXz1euWCb",
  "key29": "2M1csTe4asN5WxRd73A2JCpZYd3YU7eEd5SQMoBycA1Xjdj3JfwxfJHCoqqK9boLDpEcLLYnsGyHGBxwYZjWiQJY",
  "key30": "5ei4kcsVNGtcZfEqHVoFtWRAQ4YNJvNrUfbqBnVkeSqxTXJcU8ZuHqRv9tuzEWvcRSvZpmMPSvmZdYnGvXCRfihk",
  "key31": "FJVuvTE7C498571sH46RHDpYTCSTzZKFoJZbZdrkk72aqQsgqgpeV7ukdNKz8HgXje2cCXdBb6gxadftsyrx44V",
  "key32": "2WNjhztiMHqCtcNapKDqZMc4cQGNNZDUZrBHKoz7DcGTeYuysJN8BKVPU8Ewy7BeAb4XPPPnz8QR15bic5NUrGAQ",
  "key33": "4svakCEhsqNa71iYanRBRSrvfr88LugQy8oMwP8st6MHjhZangWWMa9nG5qLgh53zUH8gFcHDxoKz87jxWxQ2e4Y",
  "key34": "SfLwAhUMXZr47VHNnmeHRN7XGhm1wfeUxsTHV3wN7yRHRWnnyNgx9ioV49BCF8jXNj8HHC7pTGWQvxDLWcKDnW7",
  "key35": "Kj3QNRim6GUKW2UWRJpDan8eUgEpsnSM9jLcwWn4wbvtLGnWxtvNJjboyCjmbMcNMtgNp3kxUbhgfEUGSMh89X8",
  "key36": "32zTcPY3hLLNiS7eAXH98f4CsYr69SnnC75PmZ192EtU8BRg1m1omzaBcwiskpcDAZvernm8bKcJtGoVEvChLbN3",
  "key37": "eCfZ6GpgRf4dd5nuBzJDijnSdcQRTNF6xi2jNUUKh7VsoruGJ7pdWB5NPmYRbEHA6VkASjiGqdRX7reuSusSAzF",
  "key38": "3TFUcL1mNjLy9x4D7dLupRqEUK5WZYFXUrArz42wyf4GD2pj6pTwSVRs5vQVRtZ7T5CqarLtFsTsNpbdf65amFrm",
  "key39": "3bbX4Kwnhb3MRehwrFzXAgpBtP5s5Gd1xagkaFqyH32vYW1T4kG7Umhx1jUZwb6pmCPqpTbFPAh8N2DPGL9WuHbD",
  "key40": "3Spsgqy24fEAxdZq6ZJpJnHtFuzXrso9vjDokrk7UNn89DMrE2UaLwTj8h8gt4dR1vu1aopeWP7mmcrHBJgQ2Tag",
  "key41": "4RfPZkSSmZaVbSoYYL5RY1LpNTy17tDQj4VuHWnsYeFoVz9TW1ArQ4v3n1awjuZGNDeMdEDU3dZpP6pC8tHKBevF",
  "key42": "4okZtozzjeuJjdLJciPFq9F9R4mmts9yPdrxcFRt6cPcduivhtUAJK4vud89sXocdLJkP33cPzUQ3LbpGU9wGRmL",
  "key43": "ntHgDKY89SJ9zSH7kauAX23Ht76oFb7jKGEeLSmdQHWj1C1ZAeopriGkJ5LYLNimZ814HvxzKQpRK4nStsAQX5x",
  "key44": "2epAABeEUkhF6112VCq31y4TS7MfwhQA4PmgntU4E59pik7FxTVxe29HBAs1JZqQ3ijsELDyrbUgTY82TsvBA9SH"
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
