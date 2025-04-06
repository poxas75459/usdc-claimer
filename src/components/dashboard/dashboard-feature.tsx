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
    "2rbvHLzobDKLN4ob94HEFexfeRuzL6XKt6mTKh5Ay3XqpYNJZz3XiVw1V2eczJUvRf4THRTVeEMEaTNmhcAPPfWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ccwTyEX4FSgqeXyvF46pa5hzBtgHwB1ctXdA8kWH3DuEWaak8ZhZd81S7tXK8AFpEzzAdS8kBQfXapN4mi2UqUL",
  "key1": "27Emdfwv24vQCdcXXJoubXSokaQhFMG3KHFZqGiuXGE82KfnHqUNWKsFekCTLqGbPkHa5TNEJFbyt8y7m4zsGr6Y",
  "key2": "4sVSnJGBDFY8HS5xs6d91AMT6KwhjAUw3DkaA1tRZapvKEHNSmnnUJAcGQtYqNxCM6vbr5Qr1TXESShf11EqtbDX",
  "key3": "4dB36bxwnzMDB2J3f74DbHvT3qiE5GMiMXGm3W4Yjeuwfi2PNw9zEZdAEkNjrQ141oMQrSRgb2fV6yXzq23iS6ny",
  "key4": "4riAbB5n7bBjTdWM2HnMJVBCNWYxEBAWSNmLFrXHEKiiPVyH6hYUV6dfv3CWRb4s79td1hixzLrYr7rVVw8XLGJ1",
  "key5": "3eeqMQna4Husder8zmM8KgU8PQKvTUv6Fphsh3y8VmTBrr1Q9gJyY2zbcMJtXsht68GHSY5FbwzRNm9QnrAC9JWN",
  "key6": "4wMEuHPjf3uGzrr7gkQCeuguZkKpf92ov4m1NaWQBqxMVoKND8o2meqPqbjNTrD1us7QeooJd9hVGUXNdKeHaMND",
  "key7": "NwNVr7TpWPCTo6wJwikHmqD2beuZoqcd3N1NnvJcBAX9z3VZeHVTHEiQ6sRujfibocxEbMJkKER14YXuvVRaBXA",
  "key8": "3aBMRvqMeY2ZH2MNgoAmrbc5QzkSrtdRmdZ9g61Ls2XPcYT2z5DGca6S1mymEZUR3Zm9AofQ6VrJnb5o8RAdZ7uL",
  "key9": "3KdoJXDsSqfAKb7JiQNU3cQy5d8RTJQQuxHad3MN5jbMXme1x9n6aJ15ovbwXX1qrWfkmJXRXoKpvsX2HTKL1AGR",
  "key10": "3f7pQpbqaQLFkv3LiMhy5mxRQGr2A5XTce91W9cepiE1T3rg4XmyzwKYZev7v6BefY1nKyCkQEzzUimYF6dDoNp2",
  "key11": "2ubWX9Jm77jgm8HFez558yWtGvLXugiQD99TGQe38va6U7afDuzsKUrHVU3j9dc3tnbdBCoAnyLp7cQL9o42FnP4",
  "key12": "5aCfdkcjBT1QoYBorsYNtceN6rpieHbTiKCMmE4xXuLVttbJmtzUyTjrnXGptByT92RJ2iykFAKTp3mdxZEcPTZD",
  "key13": "5eDp9apEvkx6FQpKbvgLrvLzdjPr2w5cwAqJd6CkwCTAhjDj4wqscnrW9jYPUZtrKiUrmvjyCm8kvYS7FCe5aYKL",
  "key14": "sdoB8AY3VwNbTk1RYFRaP1vagFqyfHYg9BAsMTB4hR1U8p5y4onst8JAb9iASS3FQ5fyi35pnWunFK1TTAs7Gph",
  "key15": "H7RSHEiavzj98pV8Cm9YyQhc4zUkv7mUbHdPs8wDP5rbYVEFjZP4CUKRBPNqbYeYs1hJtFUgfGZzUUYdbLMpTaX",
  "key16": "2UPKn5xbntQSvAAL7F8V5UNcbcXK5ZsBi45qdnMvcQqCZT79pZf1jW3cwEYg5JmkrGjCT9nsKwoWWeEaUo3YbXka",
  "key17": "4XNgKXGf9hptfUTeQ71JT2ZvDMJkcjJRbtpLdaArWfQYRUcfgUDLWZfBg4j59Nz5HnZFN1xYqcuQdCCPM87zPxc",
  "key18": "636ynRe46WxhYpQX1qngZmVk9bupjZmkraGgMXsJKpXzLgB1YQMpB9Co7Ze53DNLKKxGuMiLRSM3PyxZPWoSujxx",
  "key19": "wy66d5SuH1MycH3ofawJ8cGXfbCvNUnXo3E1wnqnWU3qytyswL1JQ9JQBarEHLXK3W58bpkBZoiCZoUk12T626J",
  "key20": "2GUZgE946dM5Lt536Set7ftxeKVXuFFXKd8utZjCA5TadhT647rQheZAWdFpWxdxAFxDE9iJuLhrvpGN5rHMeiRn",
  "key21": "4ZRh76A4RCjyyp1u4i3PRmuYSCE1QevahLGh3cd1M4pL3StT8BFkDDDBoVJb9essVudmTBiGXPW96PA1hJ4qMuyE",
  "key22": "zKf8oeq7d99w9YJeUJC61Wh71qxo9VhNmq64d2dEHHXVSVFxRS28mMKJmt7hbuMkJrEmhrFfomvCXkgMrTTQBNZ",
  "key23": "QRJBDeXhhbBqik9htMYJQXQ4PSVhtzEvp6FY9ATrcmAqsgEZRRrUF62AwpPkKhBVp3prFVDug6EeDwk98uP8ZxN",
  "key24": "4xZQ7WtBkoKDJVGB2XzGKKM55EwTpq3NMSk5idJ7MsKzMh3wn7smEhgw3JJ68R4gmFf2rZWMS6fo5rrb9KDi6HXN",
  "key25": "5VTWdX9NDvLWz5S8ieVdsnWmuNSWPoZ35S6jMxpjpKEygVhxBemzXmWuH3Ra7y8kYR2RmmwTnD6fufAqnf3VQTqZ",
  "key26": "4ztZ75FNdH1sEkZ94hNkX7ojwAb8SwqaRY9yfhpqV4HtWYKZuiDKgBFJKnnycfKSWnqgBcrxRSRiqLKr9CgytUR8",
  "key27": "294ZMwvw9XNhuSyjKG2w8hDigZH4dgAoYebUZhsfvqYYrzCDXxCkfyJfXB6iM4aVJNkE7AqGLk2bN8HUN5GSfJx1",
  "key28": "m4AZiMajQrsjw8Hn4V7wAnwXAvGbwFU8eVAx5poscU36gMNwXyWwaSrGohYZnJSDGBux9RAZdwNGSq3YztL1sFN",
  "key29": "4UCw8dufvQPHQwXePW8vbNtWfzPo5JZNeeKEcziA58zZ7e4FQFaRc1wGoYxk66K3LPyoPLrf6wz8gT2gVRFKpzy8",
  "key30": "5qKvx6qeY6FiqaLZRD8TgX36zsBpJx2rAxXb3w8UmBPeuYFZ3AgskjE4qckS4iqchv7MJZXyD6jVwtbdSCJRL8f5",
  "key31": "3eAPfNjts6k52hVo1zvXHjPVrQ21uRKBAhUkAqe1mdvjyk9nVD3mKq5crgpmfyWg6W9o4E36VnEq4MGY3anArSkN",
  "key32": "7t3ZRUG5M7vVAukQM8mSRWxKSoyJt85n7hmHEvVhrrFMSQ5J8uDK5uqCapaEVoxzmtnM1AG88idhAtQpDw12BZr",
  "key33": "59uf1zuHF9jp7a6zWmZWPLJWwRpkLLyUAKrpbjnvmNuCVRTTSEmFzPRpPxJ3tzdhKCnBid1o2RyYhWhxg1d7ZuwK",
  "key34": "TNLeQ9tmGKnLLe5mFMpnDVrppJjGJvuBL1VYwRdhWYa82Y3QPqwB8x1XKEn5xHpX6phBdsg7dHuGJXqZwGQfJiG",
  "key35": "59xh1bU8jiewyDFXL1L4HnvszxxHDGf1WKQRHJykiL5VtCZtMHRwC5oPHXh7Vcg6syqWJw6GsUMveQXmyWEMfm5q",
  "key36": "5umBgTJuqHmXmERxQsm6yFEhTtXg4do8HgXHJf5JEB8n5KSsjJhVyrZpS11sRE1gGxjqYhYNpr6F6gqqMau77Jeh",
  "key37": "5BAh3YuhzGbiQEMnk4BeQLGCqbDA49uUgAnjJ3b696ur1fAcbQS9mJYcB6iqmof5ZtQinKaVX6bYUAgR5HTyBgYy",
  "key38": "Bskm2n11RQxqcZ44XqTw7vzbLghxufsa7sRmYZRUGugQNxFgWEdcduGu99zCH3NVkDA7LPg2zcQQH8KARs4rG98",
  "key39": "4igqMm5QSpZ835EmMe8XGx4Jt7QGWU1WQcyttfvWo8rGFU1Tvks1jXk9iGHm5eyBhaK9BfDWA3u3tpaXzwizm6QR",
  "key40": "5sn6Z5QgNZfmGPF7VnnEu8xFLxMrzL9xTqvPi6By8rUNEYh7CxxhCw4AtwwWYHPQVNSo8whhgzPwkcJUUT7iAq7R"
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
