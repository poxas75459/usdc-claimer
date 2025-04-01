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
    "4rcYQNXK8EThyiZ6zepsGiF57fMDyXsWPzeWEwK5L6T7DqgGkGoR5gneDj791u2gZFFpzMZMTFqXXz9TxCcSjHey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VUUWVJ2xDdnU6pLeZ54FJ7mPNPpHXA4XRoAR6zJoD7Dm1wYTiNoRKHMKKvmQJHungduSGNY44Bzto3uGvJfVnqn",
  "key1": "3Kbga1Vt6RefEopPKH8DvBYhhsAu1CnbnY6TNKnwS1qV1SQCnwZPS8JV2KL6jjUR5mgQmi9WbFVgPYQrWK53i1p6",
  "key2": "31A1wghPcawzG9Q8epQPE5iYuYzLQVKAyy7btDdG4agXpanN42cX6DCKQNG5Xt98HcQ4ozigKhLQkXuVKY1CZYH2",
  "key3": "46cFVUMn6rE4uhq4YtqzEuyyav45DSuZQ2HYvoMgwv7Z7sHt8cr9kWWoawH8htL67nFSmQcwXnV2WkXqQDemVZCC",
  "key4": "5KkMDke5emH7U5HyLnvwoM9ENu7HUNPt2JCHHRkmdRDxrZaUGho8HPBTDXJcT2AEfHi9gYbjRiF2PW5VkqRfG7pZ",
  "key5": "4f76cwTAtKjPWvHr3j55wU8M7vGurNnH8KUrJKGU9B8DYo9Kkq6bNFnXpXxdTkFDt8EFkADS4w1yEW6Gi8Jsj8BH",
  "key6": "5EEduFb13NyWHQXc9n1ci7orcFRpN3FKUPvxH2mUNVYT3eiWbcj6SYgcJ1QmgKx8zNoMsBhnSMM7cP9kcgQ5jMKx",
  "key7": "57ujuzQdGNw2a6S7TCVodW69dzPijJHnevEf4yL2WQxfgS1pM77CQ91HL7fwkgbqXc2vTBg6pTjPGFyRDmY7PmuC",
  "key8": "2ox6ybaZAkssDLwbZWuNegnxru4zvmGXkmjJeDCU1ck254WZAgUeZdWYvT8kTr9sikRRkWnLj8MAhiW5WAdbRTLS",
  "key9": "46sHMfgdVp9GvzCn2Y2PYjE2odcmJtqjc6qbs3v8NVwz6oAwAkogDbTBksg2UQPGGFKzJPUBPpQdKDEYKR734jqi",
  "key10": "5iCt1bp3YncoUpcnfQfZLkKcVeRmwMRwqUidPmeRNX93DAtnzdTopfRaRAde7RNQ8a8UH6GRirJapqzpEb54iHdP",
  "key11": "5K25Y4hu1cN1zhRRqM5JeGwbN9SL42yuqCGZFGzLMeEpZXxkHFLH4Qiuq2e8hsFc34q3QSj8b8A2Tk5nRJE5aJVh",
  "key12": "4uL5uj3mo2jpP6W2C6njF4usa8LxufhBBC1p92cJNKDHT5WTwRuzzTTticwF9Y5mFSKUHkPrVXy5cJFoauhsbwhm",
  "key13": "5XAFk5V291riqhTD2mbbeAHdKTDFVKMeLozBEeUq5PTcd6eX5XLJfHTEgAJtQYm99kxVq6hAEi62qZAo2fvRgzQe",
  "key14": "5SwMxsGobdaLEdVfpMMB4ZpAqySJPTrP23LxJ3CRToLJSfJV4zeeGutkEUwv3rRvph8cRxieU3sKC692KgejBSM2",
  "key15": "uTz1DnicXZG18mXLZmBP5fzGQ94kmEkHhDxiz6byfyBxJBR7YhNCrWi97Zbf3sFQrTdSnvUkNpt4QU84C9cR2Cm",
  "key16": "669Qd7KNknnboHvrTsZryiiHxNxEGyokatJHZ31mDtXi9DbshaDzzxVw9FdCcpGuBWSLSzDohcFmiVM5Fv3cufWi",
  "key17": "bAE7F9SSCA1AQPte489LG5RxFV3MLqfsZp2caMkkTV3hC2gKVPhcYWV1E2oyRPpLbPiDbvdx5yB5TAvnTZwLvWd",
  "key18": "ch2k3Dsakefq4bXypt5bkbE5htLM4qkU9shRk5XfP3hRCeyJvmhz1gj8Rfy49JsiTRJR8gWtXVpan7YkWd75EwQ",
  "key19": "5kt42otZTTQ2jwz6ewEvWQS4gDQx17Ct1hYj3n6HRrwm1uv46iuMd5xBcrTrjJUnjbvmkKb9eWw941wUvPHPwckN",
  "key20": "2g3BR73MFDQYf68s2DBSXgFMp9CYN4obxwSk6ATJdcGhQCQqNPcbueZ79V7Mp9QjiyaBrDZRF7XB2wMRD9RT7nAU",
  "key21": "2QppnGLP78ku2tNdoueEZKYz4m3fzdjqLNKUYCaykb3rB1VfLHb2NGFWdM8Y2aHFnvN3pKw5T68AGiohjyjTorTS",
  "key22": "4NxzKbsgK8h5fVJw4pgiEZpwKz1wBmT5grk4cNcEPK4edzALK7jQzDerqmtuV6j3Kke2KQ6pW5oe3zVWzyrYDMej",
  "key23": "2pLeYi2wsS9zJRkDnkoictzLQye5tRKbcbutA4rG1Ca5euXsvWUe9RSATrkT9cMUzzjtMfE2BqYih4HGE7nockK",
  "key24": "61yZGYvefBVzZSa95gwWubxXKfDZmL76o9ULWDF9U3aicGmeLKT6nULsCXk24ksnWM34gT8Fg9ywpQKqFFuqsKQf",
  "key25": "4rMawb6QEA8o7JUdRS6cLk9ges1tS8wXhT91ckM4QBcW5EVeY8kfnYaYrQxdLriT1vSFPT9sMyewDSWbjsH2ADX7",
  "key26": "5fS5h54GYf2A3bLEf79neKtdyXj6TFo1piRcohaDszGXMYuKKCmDbj11Df4jDVq3REkLdZbjMoGdGwUgjjbUmHH4",
  "key27": "3RDqf59Q7yGb5Xjg84hNcaxSeRn38RcPWztseku4nLiLWo83wVTJcGAzeSAyTEF2xonFzYuCUVJ2xm2bbn34vf6k",
  "key28": "35UG4j7upp6RYrSM8ZEiaHpK3MM4Fc9B3CBv4tjrm3qXGKyME1gx3RLUG5nLXEekeKQyaLH56VDs8N28wBnd6ZUT",
  "key29": "3ZDc5mwBmC7PkRHQjB3fnVzmx8LaPBkmUpEdsxkGoAAKjohuFJrMTBXjo4W2DEKf6Mk4ScVf4MoYfo56h7dtjacK",
  "key30": "67dzF7b51R2Fmtjzh3kECUJw2DAY4FNgTooHntYV2hSpwNzTiHbAHfctYiMdu5JmKxcMpVJDg15baxT5AVkhznYH",
  "key31": "gFuhpsJKCGkLGSKeNjJ1EvxdEP3JwyWbf1MCQEEeXQT936w3vavD6WN4wdnTyfkn9xQhtAvL291Rmain9t4x8gt",
  "key32": "56w3hQzfAhXHRnGW5F1AtiyftUqrqnoYW17hLGfEdzYqySf46uj6byxJSRceBn7NvSVXghjuYYp1n1v154HEJ5b2",
  "key33": "3awyYmgqq5X4BTvTYXriFyEuYCMW31t1VChbZwAeen5jySKty4fQKpk4dSNg3uUDhH5huxQsfwcnuL5mkw12ojHv",
  "key34": "575da6uihrXydgjAsqCicGj4aU5UXLs1DT8iiXDBobTwYp77bNQMPXZHVLMqEBwYTBH5t8ZkUwKGV3MyM8HFNMC1",
  "key35": "3MgBDZbxJDa2pF6sYrJH2YTNVdcSKnsLY8b4c4Zivm7EzKFwtDg3xhf2E9imHT1gLS23eSPrA9LNXujhCb4VsP5U",
  "key36": "2Dv21N25gRF1Y62DVRTQ1dudhbeiDfcqkymDwqT7HxHQ6P2Cfthyx5QHV3Ac6oLciSvHS5tBRZ2sZqXHoJMpJLo9",
  "key37": "29vcxHYxgDyrcvghFBtVPoExG8WZfgHJ6m6YJmFcfoNDjY8VYdX8bcji8GHgV2vBHjV5t23YWepX3vebrekVZAfm",
  "key38": "3vnUoVp5VRs85ivKXYhqf99M6pDD1YiTUfS1oubQerQZvHwZYpc7zUSPqVHiyPsxsuwkNEdejx2sB1qXy3AJnkQ",
  "key39": "4nYjR7Vj3KMzXE5ULjbRja3ubYW8m3HRwH6pzXVhV9JSvtQv78w8LPGWCYQS8bz5YVJmgbjUaYvEud9cAUUWYqFS"
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
