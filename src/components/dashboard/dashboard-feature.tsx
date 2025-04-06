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
    "4y6dFo2CwxwoxvfY3jcZyjL4z5N7AXznYCi5SCTSmXBwSJKTXPVAyvKzSz6tMuNtqooxLRAQscaq5HszwG4pZz3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34xkrjisEmq1uyXfbPSfLCEeGLd518arBWXYk4zyxKFbXdgQsH7j5QSj32vXYf25UQQsXsFH9dFgVuk61yfSE8ot",
  "key1": "4nzBjLm1uxBxuGuWBctymDxGx9jWxoTY1KjdtJ25wFAkkQKoyAk7SRdyphp4Y2uYubXHYu8RmLKZtcMmB3S4YL6Q",
  "key2": "xbFvWv3oZv13kHqDvgQUjBSJXFYjyrwa4Y1uQT8QD1SBag912ERjhvRuDPXaFtifVBk6UqBf1YxnAvzdWPBxYyw",
  "key3": "wn2bs8SaUsrPmeM8n7UQwiiyDTUM78s4FazgJ6V6j57LMafNE6wcNxrMU8mVP3M7NssqdxZfFvQdjcEX2vUj71j",
  "key4": "2NT47UDnCAT41DMxdo11QGXvYB18jQ6Y7Mzfmwt3jXK13GtZP3XUyyiUCUWXTGtvQUgi2xKkyzCpwBhmvc4wsjLS",
  "key5": "56BxdfPuYDuTMeHijWmU2HBNipN4qVJmpLqyM48fkx4RgG321hAtK9NB5avaPjAnJt2tffqAgg7DTdfxQRoqrJPU",
  "key6": "4DNEYaqFgq62p12E1eGtM9H1MRYxZZPSntCEfPChtYxeQutfPEnPxfGkBbhsbpA961rCaz6PKJL4nvbU8gB5skBU",
  "key7": "BjF6eYTfRNDiJMA4LpZj2CraFjxujyRA5btNo6Sid6yjJshhmWZeUtcCAkKuzHcZtf2hAk5zqSuuH4Z1dTGvfdE",
  "key8": "4mmUCNykWrB8k4GdRxRsSTrFc7e3CkfcKSA8vbpGxJbYDcUQwG3AhZLtJcGLujzGwNxpjxzJ8kq9xzB1U9oQq632",
  "key9": "2PNYMkihcgzbYTAsaPRKtjY423GtVL7tk8SV8Nhs6uokzDt3AgmmbSAw8xY83zcwSTc1WkCAtCJDWHQ1QP61AkUw",
  "key10": "3mpQwJmu5462EKhk1d5CEsputVTjF9gGExvZXrsJV9PEPHnb7uAa82ebnF2KkmVTjmwHdLPJPYhRGGndpoQfpmQ4",
  "key11": "3GDtvDfGVYGJtUnr6LdMbTXHFQf1XrefdNAxtMzMRFwrEKeYJVZHr985Mdd7wDoKyLuK1a2wfHJgDtQBjG1BoRgw",
  "key12": "3otAgbHPzqkcKbwmNj44u3wefoCCjbwd4nFcxqo8rzirAjVBE7nMDfZV2DihvmfyofunPQJg97jYgB6NNdgpZ59T",
  "key13": "49VhwsHPaEM3Wj9ZEaarHDd8rh6iWQQNNYU8b1tKeBfDs5z2hpu2iG5q5qjqVyh5wdVPsV2CVx7Ttkg6VuQ8rmhG",
  "key14": "5Hd5mogLRvpMzVYEAfxLZeewVaHgfj3g5YA8i3KfN9BHNuvz2pqeGwQMsEKvtiE9QmC5qW82qgfbZFyYqv6vG9je",
  "key15": "4kXG2yRDLAGUkNDxaN6C1TKCFoYbv8kjwQqZE2TrpxQStAcNha3PdSemsUyjhPZeAhWirSa4sirk4kBciYizZiDb",
  "key16": "4Tgb4vCsNytzF7n695DHQP1Z5HoyFWawQJ2AJ4byntKzUW1MS18NfW6zS8qntxrsyZmfqmFVJjycoLJnHM1SkWQq",
  "key17": "3xCszswzjmpSRnD8KB3PQEn4K16oGJ2mJZ6gqFMtGSxGvBEE5Mckowyz5HbZo5EQVEMjsRAeiKDULjXZVdGobxAp",
  "key18": "2r4UTkMzNR7rpqEn4zFxz9jhehV2NrwAiHwSrXGKmRXQFoe6KGvSjnw7P8VoQe8C4PUdPg1JitcGtfkfTQh8gz33",
  "key19": "qjKwgcGhqDpmZ8j5nHhKAHsBLzEu2e12ZY3Tgo54g5MJqemtYBqF7kJBQrhgEuuWTFFUg1K1yoqiFytrogJbNZT",
  "key20": "oaxVPU7GuNLW34fqn433nRWUHmv9Drn3wRnzf6uJp7yedG47mLVZZyEPb33djE9pR1Z7GBMojv3Be77G28rwZaZ",
  "key21": "osEprdg7DjkWzyDv8ymgpkywX8ycLMwLNVtZVQYpeBHnZQyQttNpxw9nAQ6S4rWB8h6g9QV88G3PDuYgmiVENQH",
  "key22": "47AZUby1XaYAefhC9Da93UzExDd7GYhomSjnisozH7bc7SbjzwoksRnzEanpSMg2NTv3NFfZq3rYdH4swM7oPHpy",
  "key23": "rT5gyfpTnQGio6ZDZQ87RpDgB2CNAVz2Dh46Co4poa9NQERiptcRrfT8tuLYCEQCw6nXq4XLpVNHVR9EtSkLgxV",
  "key24": "3eJahhricnxJZ56kRvJKDA19Uq46JJjzZAAGWrFUv7xStw2zzVnvscFJEEAnnFXP99xxXmfuLBJKht64HSr5jFbs",
  "key25": "oC2KLQy4Ex6ztAdJuiFGoV3J4awj9tjr9dvWTwyg7sPqZTpD8v8aQGqkjPsJnjPwqqNnabGydWdWhwa1YBPMtVD",
  "key26": "4xkcGnPK3v12SFpwbF1wa2b1PE13uotpnPXCoHWk8aAz7WQYtDy7NskZA26UJbZUS3dyf767N4oGMZRcj4F4TPhx",
  "key27": "5TvH9qZRYLKkA2eDeHb4mqjtnWWBkQVzLWMrWaW18KXD4Jwbkz6RoFGQnEHCFRDA8aXB8kRMk7e8vhMJvHayx8AY",
  "key28": "SZsKYsVA6hynrS52Wv4RcKjcjFnurGA6iFdmkLR1CevgoZbvdjvioidCTC9Bwh4UEBB4bnaUrhPqh16dmgUexH9",
  "key29": "YhgV5DjT1Cc2MNn9W7hDqRYbLSmH7DGyPHsALbucRKQbmZHe3BUDDLcW5C5s7r1PeeaUPDfp8zMkf3fxkpiPVU5",
  "key30": "5dgdiTSSXKvfda5kDoyUaZGYCoDLw63GsJ53GmnDWoHDM3kUV1rsQdAkNNMy2UrRXsLwbGmeWHQQA14xfQPMVNc4",
  "key31": "3ysx2FS5Q5dmVNddyKEfwc3TUrv8NibcCE3dLfRHHZUpDmuuwszyxLhueSURmWaQN2pa64AkHXvuSyvENJ1Z724s",
  "key32": "41hHEGVtKTYjFxG1wnRZrKnP48QPUzXAuhhzFwQSKCT74xvbpUysFpGLfMahHje1ZzhHEXp1Tg1vu17oT1UH9PDk",
  "key33": "5KYmrRFMhMsWd6ULVsdS82W8H5cSuhKVTSS7U4GgALwByxLAqRHnYT3GZkwsgY5iSMDysZMXBWfeDst3Vk2T7pjn",
  "key34": "4iuhiqeXUXUneXk1cLvdD1qiierko6TCWZwa2kwX6vurGuEyQfroBkAYLboH8guTWa3fpj27meas3C8esPXxsMyg"
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
