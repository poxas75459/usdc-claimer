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
    "2XxCwzwonGtG7CXTphhPnUbcbdjHUDRZH8bEQ1baXjGrcKidYFkRfr6gaU2ggAxvbeALiLem8eyPKPTTuUbKSxTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EbZrVF1k8u7VEFfXzi3KZM8Zp2JUJTUx94Dn8nF5o5GCLhjv6ADB5ZU4WyBRkTDrSAR2squVXZNsY8GN4ZyorXk",
  "key1": "2mcG13YXmn5xfPA724sQwFgMxmTA3MLYhsHqxJdzpJgu6LiPQrdjemA8Yb9BzLFT9YmZnwPbyHiNUZEiizFmFu9K",
  "key2": "36AfmszF4hGsbhX2egqVoEKakHPb12ppkPGssvo3JcFtnDCcVEfs9rqhjA3VmpKJeaHzVt19JtRZSnd9Mbv9PKdK",
  "key3": "ViT6iGLwDV5mHGKUzfnZEGBbLCd9Ys1NweoeeyHAAATQEguy3uxhN6RdwuvKqdDb9WPmfvMj7jkN6QR8AVMsc4v",
  "key4": "5MHpJ5HdKYKYryem9GetVNgDD8bjETnx927nFopQCFyX2rBdHFJZEKXFoe1qLU7qgLQ1PKcBRmo1wu3CpKSyE7Pc",
  "key5": "4zx991LifDfUoq4VopHqQs98q7kDgteYNqKaG1V8nspU13QSMcTQbwnxoNMVd92HcV3eyaUa5UdQ3oE6WvgP7ghj",
  "key6": "9WoRFPe7u3p6fVwsogDS8b6N7HvRJqWvivfG8mGxTqFTkue25bsavsgx1BW93kTyQrkAY3s7FjeyxcYN2RKdSFA",
  "key7": "4vT6eWi2aRrgJDEvjPHGWVqrNv7tzv96KRfUjichvJn6oFXUmkx9XttnQeysjnQzuoAbF5MtzKgQDkRtVmjMtBYa",
  "key8": "3NzB7NGETQPMVNsihRCsJZtbjAyXfkbL8UgsSqzisy83PspHQURsRg9Daqtofv1KVffdhjVjE8pBkjyfd1mhXmh4",
  "key9": "26brRM9uuRuhPeVGEpeqiZ6Z87zMcbnBCF8z5QEywhisNAssktEBsURhgfmMZ53VkypAQhqZqdBDxTkmjM3tL1fZ",
  "key10": "5r5z2SBiwYnsJtHpdKbP37S98vHhJq2bfTQzE3a4zX8CsXFggKd1JgHzkoYGHQpy65URHWMR8sT7A2YpsqpNU6K3",
  "key11": "3iTw48JHoxg13KcbURBhWTNVzhcSoZJkWcHJxRYdm6cco46vf5UY5EUJZoD9u2FqAjSPRWK3EgXCu9zbsus9P6Ji",
  "key12": "3NZk2woqraGMPjKpDh4HQmpqTSuyQCvrGfZ12c6dV1eXwZB2cn3d98mpNPobo6d8tvNzJJxpNpYeh6VotAuMBLZT",
  "key13": "4dZPiLDZmoebwPpqkAttRLjxBZrYKEBGeJaFQtiGJjzr7jFEtkJEcHwoXUhQ8dnBzQNRfkhtRcpJiFfSSxG8Bj68",
  "key14": "3p8GsdmSsDk1D1bw8dLurqUXwWVTZybZVLTPX9qX2cSxaFSuAbLKKCUXEZAa6MGKUzhKacW88Pfejmbr2YDUpt26",
  "key15": "2atZAkKN5t5FHMeRURCxXbBRo8rWaTVxx8YfkY4DkcqWa4ZJYvmGjsgHwbgVg9m4pSXr1HsRETTUNRUz78KXaXBU",
  "key16": "54tecj9zpGXbf4ezLXnU1xaYVS4fWWo121wp4VQiKhcyB6XVK9P6jfZwPKPBLE7MAHxodUxeSqohr5FhpkDJeN5s",
  "key17": "4ayR84wZX8BmJNPdphuYKFjbH2ZWGyUysRrQRt6rDxGiuUXdtgFXBhYFtkoPwX23BhhcaaLGsHdRjDyn3qRqK1sK",
  "key18": "2ExhUVAYGSNemT2PijSZumMXjLi5kDQtDf3PmazYSuAXD8AQ9HsP7feLoc7mLaqHvTb2nHibpP9CvDHnT2EGT6Z4",
  "key19": "4dnzWW99LkUTJR6aH7N23XUaiS5KaqSajRsCy3ST5qQPAf397gMENzCcYKJZD82YytCanExsQAUS6dp6MoG8T6ug",
  "key20": "2RpncSJQXX2fVWHjZycQQNjpcFhjBxTRLxfBDTeD4cXnvVU9SaaGEWTanWLw8G2rVNGfBZs7r5LY88edon2GTQkg",
  "key21": "5f9vyHNYTuxp9X8phNGRckvMLeCdGxjfFj7XJV8ddXr99AwTvYj2WFAcqAduCiMNwnPp5xQVGFWi6GMueTUZgmw",
  "key22": "2CJeZYCGz76YMvZCZ9TyULTMs1E8f7xkfa5Jd1rQMu2fm2inJkJciUvdQMeFitDaY8VjgFAgn7v5kXxAPijKYsZV",
  "key23": "3GYNRRw2GQALc9A3tMkqvFg3G6QfgMe5CFhmBcmgukZYMAaAKEgjDg62RwuRuqF9oCGteE9fpd7eEgby9FcRod17",
  "key24": "cVwmEmDt6oPwcrmfcxQ2iLUyAYTcKoXVEkcFsmNTuejfnG1ep621ZJVde2eLCn9hgcc5bLzKx1yjYBNVhsgwU6C",
  "key25": "49kQPycpMnTu7pgMQZsk9GuzyNBccJUUUqcWhaHhdRvfjwEaLYvfprkkmtr22jwCa284ermLqN73UtkDkfMJVh1T",
  "key26": "3rojESevarw2vqVTtDzUAz1DgwXkWJeuhftqCPwXz5h3nV7Y3mLzwcAw5z4z8oiAR6jAEdPDmKDpRg1BeFdwaoTs",
  "key27": "2WSE7YEFkyBtmnY3XEFEHSxuvjwDvD3MZK7ZB9EjCWTtXgruFVSjRbCenrbYgrcqvg8vuwHHE3VkY1TjmfGagzkg",
  "key28": "4VStyGs26DzgyWVebf4pfLFVfnMRc7Hisq1uxTvwYgLXstWJfVksuwhu8etViyjwSLyx3eK6yzWCeyQEH3YynqyA",
  "key29": "4rmQP8odyYXrKaP5EaPbKokYR59w2s5gUzume7uWzZ41o26hWnWMQouewyNLbWQTaDCsRfkrhzgro4PPwSZdX7Vk",
  "key30": "5t4RwPvCYEnpngYydzJ7Pw9wY7TU8TNJgsMVYpcgYBGodi8pDn1cqSZcCJxcBm7j6PWi98Hj1C2s7r1RQp8TptTP",
  "key31": "RQBi739UAjE3TAwPsKREbmNiKZEFT5kN4nrdwsDvgHgxcLr4R2Pwh4aomn21T41i3taFe6mvPy4qFz5nV6zkYPu",
  "key32": "7ftKu1ZKcDShA8ZEihaK1bV4RzbFX4tp4Cd7JMW86VHABuNTa3oFooSuY4jwMd6ZtVVvRAJs6aJ3utkAACsW21a",
  "key33": "5Dmmvoekho9a5vfkw849ZVUeCW5kykKiknir1N6uogWihjAgvgbPwnMpP5kekYULTeCaoLCp5bARRuVkmghGg5Jg",
  "key34": "41Tv5wPdqYydKv8HaAK9gEN8PiY1eMwF8qPDCYNPMrZUoZonneP1DQoV6T8Ded9NrZhzCHsxRz8eqv1XaEktxHSw",
  "key35": "KsrVxCSuZphEuU9o97dNvoPj7WxiKssZanCqCKBQZDtwMgztySzw3hr58nQvLqo7rL2Wacd2ETeEE6CA8G8Rp1U",
  "key36": "2fKi2zM2eGQrnXD3qyg8S3xu29wrBoMtr6sVrB7KGx3vLYEBXwGh9nJAQVbsUjSKqTJDMMM5Geq8juNxertgsmvs",
  "key37": "3qQNGMw4e9ha35A56Ws4b32mDH4PFhhsFU2ezTFAQy8jTR8gNmyyYyua95yDM3W9A67D9jCoN9mxYF4AmSqMNZaw",
  "key38": "21oKZViP2QoCYnjD5PzCHF8AURLh5QiXeBnNMwMDf6rq2x1LQc9gjQFVsckGR4kT8aXVqfbkJiaZxSG7SQa1sPWG",
  "key39": "4TBW23zjf3VFSoq6RrLuUkJJL5HuNqdmufZJ1r6gccsBso8mGw9HBdWPM8WwGVjHuYh9beNahAfkCycX6aE5Y7ad",
  "key40": "2FennQ6JDR3mAEn9qB4QiRHB4xTZFaYdm1VSPka9vszBYuJFnhKA4pJrQWsy1tneMq7fkbDgWf3NyvSHbJogSoDv",
  "key41": "2tD8uLvfjpp4AEYjNVqw9MFneSwSbwwG54TvCm2jy18aLagc4EQkHEgEQKVUatpHGf9DfxeUyhsi1T3BgBNufdrs",
  "key42": "5kMfKsj1DwRHTxPBUMsoqJPw1DJfZ2F4PDvohCdAcqqkjHsc7A6Q1749xjNXMNu9uSCdh47kF6SKMDgP4fPR9Yfa",
  "key43": "2bXudifUa8ik4vLMdenDRuG9Lu7qsmn41FiPP8bBjX76juXvSNc4rFC4qp9zwhjMj4sbLKXKjvmCLRaK7Kse14dy",
  "key44": "V6AWnhgZXzoimnGtQPxBU5DAs2wp4TNzEQrXxGttuVcewyhRwR2Ng6sqEsJfTAfaxZAaARZiimaJcuAz67md4F8",
  "key45": "5Ht4RZZu3KWLRZD8EtsqqnYvsNGyki8y72W5sVLRf47TNB9NNw5kSyPkhek84m1siYTdH4Z5XHm5bbYigJbP6xSj",
  "key46": "iEMry3t1XNnmy3nKfPehNdwYLUPm7YG61cbFYmSdJNhRqUffkcygdGN8bTMAPxXtDTZ8AJtpGEVAoyvJngW6tcf",
  "key47": "2ZEMYWGxSuuMijzosGDeYj6A9bwVke8xoKCRRAzR6XR5cqr9D6x1WEEbgVJHNrkdqqgENpKbZv7LKErLzFjgP384"
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
