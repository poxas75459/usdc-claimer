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
    "ebBS6xxdcuKvedxmu9Cfb6iEwyuW6AWDYCJeUBgFs2K8Py9MVm6T4JDHCMiqDThRxeh3cX4Vjt2xnG78wsJZxrq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ccq3vo4Mq2CGzx5Q9hnXDDLC8okzsahdcsJfxeyngTaXMQ9yp7kBDMLuQ2THGVdKw2Q7paUt9n9eKqtPKhfpvd3",
  "key1": "5xE9RWp84n4QDqkgUupUPQ5ttkwjhLtajzrFsPNu1idouujkTgQqJknrEJvuZmhxkXekefYJGnLMwpJteKmcDmcL",
  "key2": "3hzWhrc1VkhkPY2myZvx6wag5zxrgFg6ts8NPwsS9VJLQK2Q45gq4TY5n64jPo1apGowUXbqArmcdcWv3dLmGu8F",
  "key3": "5SBNMRJzt7wqEPTigjyZa5sAh5FQdMujxBMEKouLUMHvWNvK5DhtRkZKUAu3wotbYJaEvKC12SMJWaGDioTYGxVe",
  "key4": "26igcLAufEF1nMsHCmwPcRWMkRq3gqneL7cq2gnfcEmtCrPjE76uXPMZMGLxWTKycqmka865WFLSwtciDTcNnxsp",
  "key5": "3JuQfu19vgEbQ7fPSMrcUGLMySJVfnSZMzi53o8FDTiQUJu1BNvag25JvxXYCiFjhNdNKrhgiodYeYi1fk4BVx7w",
  "key6": "5QdfGaPRN5uQKAPDBpSSbZzZ1JsaZX2TYeQdQDygCMXaG9i7GTCqEinbjiK5jt523VkPLtUKKXg9DkLKBaMvSgdc",
  "key7": "4Wdu4zths53m6tez4qFPHUdNr7DDocVFgjYad3giJrDbhJASrwagKTFtWg578athP2aa92BbjF6tjyJLhX3uq8zK",
  "key8": "65cqJRojQWFFkqrpmECFaKSGTi5X39nNV4DamW96w546QKJ58jA3mGbn8PdBxg8u79Vj9veMqnKGWZ3bjA2VM6cN",
  "key9": "2679Dm15xHzjm6212DYY7ExuaknoTVgnE9WDpQmh3JNkbe48K1cTfWxARJB3UDqzS8rjHFBWvuNZWdZR36dWkrgT",
  "key10": "kFaWF4nnFmFWZZqus3ZnD8ezMwtWLcJCuBh3qFXci4bnaDduYKZdzWGyWE3LABQit54FxYDxAzskwxZqtQffLmP",
  "key11": "3P5UnWrBs3CVmguPt5bBinz2JxzkXVZ1SzeTTvkYDfH1zpjYEkrFgb4RHSQwnQjn2VAPrYLhTZqrzGDbhi4ERMnN",
  "key12": "4CC4tLJVnGaKgmNYFTQpqqryA7PgPz7d3EK6Jw1ShkU8DNdTcDzormdYY3RUEmxuRPsFdh5sunUAeYpXbDe2rdNe",
  "key13": "4JMKuYVHRGWHrqqgDRnx6s3WuWrPHCUMejrZ2uBxb2HnmUUDUtS2kBQ9KkgUBhoYtED93dAPF2Wyq82FtCXuE1HH",
  "key14": "2zfPRMsK4j2haGzK73LQCKAtQrSiwfi9pGScadsVQKamfbEcQByno1AqjbGqrWREaCr2tvZtgGXgZfv5Dq2WZg8S",
  "key15": "4WnJ6CfJjdFmnGW4Q6kNqNzsWRCggHLZbic75BP4XcAcMGRwhswbMiBvctCdVYhz8jW6C4EyN5UZQZsT4suaP9Jg",
  "key16": "2ziCiNqyqSdN4XfLWxeqkAC87UzpgA8T6kVTvdd4pq4JYnm3jAdZEJkqFNtHLENVxTGFwXkJMQPgJG5rJGJGkNZe",
  "key17": "Dpk5YFzxhyvJ4QLvjLyig3REbG8WofbQb9CBctwu4HaUzYZgRPVVevNRxpqEQqJn3NHbiCG1fgm7QUHCQ5LoFH9",
  "key18": "QXm7SexHfJSVkkBeWdGdWo7BQRRkvrtCD1hLkefewMJV7swiRjroraKkYvfwLCxFeFpeFCrziwMmhZuasniTpej",
  "key19": "4HaXtShcsDsBtLbLhiPXzLFnGjxCgWRNGfMPRjuexzmcQgVaoDLU8knAnX1hfLtbb6vLjmKRnCnhAcw3TVpCezVs",
  "key20": "5WUQjDgtMaZ65783mro6UfSBqZAr5GK9qF4mc1FVJ16TZSefHKXDksKs1vsvdWNUfWtqpRf6fzMCi39grkM3JBPN",
  "key21": "3mbHTpMQ4CM33EawqNJg4iBwZ93h2jhbLvvTeGJAMfGWB27wL6Dx19LXEK5dQQLFkUxhSoKU6jj2GeX61MTB2Gfy",
  "key22": "3xEisoE6DxxTcjjt2DXTFud2untB8Tg6GEvBViZSGKfyBASdQhjMx8ad6j7dcdEyYh8XkASV8hUFoLAFsyHPknL",
  "key23": "4UWXRQYooFP6ZuzD5hcW8U5PJ4aGakz7FBZFqzbB8H15y5CQ5DU9kNv9awpHRvHHzKncoaugJYttP3JP9LysWdDb",
  "key24": "4jE73CV6NeJGTgWB9tapzXfyyC8KbmnMn7RpqeoB8mEJ1TQRfqMTcWVCuM79CFjhtofmA12vNSMH47SsWzsgMexa",
  "key25": "2w6qwaqp39EYs4aDYR1f77JZzcPXoTVE7MqCKk92sQjyfjuWReXmQ7uxMTWfntcEXXGZep9GWAnHi5RRxxj8b7x8",
  "key26": "4baayShrKhST92eAxFWzyzt8xCE1UqDj75WcWJMogJ8F3rthZig6QfKQxzgmGqK49eaV3MmWpnYgP7e3W2chZFiS",
  "key27": "55xbWuUBMZSZWV1ef8Cib72Td1kXhyuxXSf1AjfV5EeoYE8ETny3wkUN4joK6LHi4YPLnyzC9UsEUkdBLTao1XaY",
  "key28": "ZA4hc9p5E2MUVDfWt8Z4iXLwueaVPT8RbHF4tqjjTsJH6c6aL72kZcEYGijr3ubCtZnznPMKPo85BeWJqHSLMeJ",
  "key29": "2shrpN1fWadUcJaeGRMXFzD5TkMGwLYJZyCnNKuzws4xSkA8pFRFSUjCVcWmM4w55ioKdEejppCHN32sie47tKeW",
  "key30": "53aqfPWkK6t7vLuHkFRwu43xbTJMvxEoJnP7Di98D6gQ2MKkrJzdYYBLFe1YDmCbu3UR1MYBY5wFkBpbpzLi4cam",
  "key31": "J9MKsvswoQoZBrQA2TFtvo7bimw3yD3hYxKo3nRjtd2wg8PbyijeuazapC7M6Qa58HEwKh4oK2tvvDW4qkKNcm7",
  "key32": "2QWqN5KEA3m8oBN8ohHXHHZ2FtazBM8XHFyHFLi7PDqKMVq8TLX8BcxppzuFUhbX9Tnve6fPayBWmdDGgGGEYBps",
  "key33": "41T6fx2UwcTRwJpxjcSqvRcifauA9rDQgfmj5JayDBxzB5gLN6hP7zWuPdTj3xopTkcquJaRW2maNNegVX8fvSWo",
  "key34": "3tg4itpQp4gfYdh2dZoE9yz76xPqzz6TjL18YxMe88TtsagUGM2s4XYKkPXU8BNQksDzMDSShsEUyRK4HuBQQ4Vy",
  "key35": "4khWqNFnYa7SmFzbV9stwheyFk1v7i4wYw7XFReXxJUx5imdt6vzttKgFbUiDYWBPStBPx3ZeTwMQMoaAken8Tmn",
  "key36": "4eJRk6hTi8WyJFJmL4LqXuPPEeX1WzsrH1X8pLsGkYdK4drURqdvBrjLr3nDYpj959q7ch9eMQhx9BEjEq8bZ8Lx",
  "key37": "527RyppaxQAxWuLQQoRsXCT9iaKuRBvEGbZ2DdxBpQEfVnzov1LE8hJReBoGA3ABW9PVerih1McozwWq9UgF5dJa",
  "key38": "4Xzv5Mo8ZyqALxrbnfuKpWJBH7yq79mk1tZ4z3rbR9dmUm23bqphkWAxGypVUWwQKk4g3pNKYYKG5bEoqJCbKDQ1",
  "key39": "3n29KHdJvLEkUX24zuMiuUTp8bXLcs9DEkvcXU9rfQNMCgSSegPMDsEmNezkMUKebJJQoWBHQXmFqwnWKB9fqifi",
  "key40": "4w481V4K7Mf2G7gJksjEgn7Sv1KBtdzf7EtGWGLxACTDQKs4YsXrQCwuVZsJeWUngbJfVPk21EDWzx2R6XtjRwdd",
  "key41": "2rw2m2aVbdo4RhdvsfiDGa4bkVgG2Gvixotqz2Y3cnXRdC2DXZp63ZynTg8fYhqVNbxSeHHYDaLL5eYmrxFxRKr1",
  "key42": "LLXkjVnErBV64akDmD8aSPGsHXVvK4nnZLJbBhtQFGaEq9yGVEqMvNiNU3NRMdFfy7cRhenEiVJW63fsqd6JfpJ",
  "key43": "3Vmz3wVvWZhhhCaqVcZZjmuEKXLDiaFwihyJZDxyyYabHy6XLcBNMjp6Gx7DZAALcierFDxb3NQU4hvptyAQssme",
  "key44": "3XvArMv6F7KX4nf7i1U7cha7bhtZhNPtYewx2FcVjjh7PJzP87gNEvYabNB9X85jzQK9tvDa2vqFenbgrf41KjFx",
  "key45": "zqMdHMtApY2EjVZi7ZWum6wfqbB8TRvLJTaxjcoA9BnTSTB4gu5BWS7zenSAXbXJqWMXbxC16K7HCN1YwfzzBfY",
  "key46": "LVkNbYpQgAbgbxcFWaRinEMdFoMkDmKPbKHdeQQktD6K3KcDTyM54CRXVErFomZMRAadjvV79zhbv8v6QxYM6TQ",
  "key47": "g54vbuT3rqKbPKQXLTZeD4HdcfTgNeZcNEQBpmgrheuPfVdUMdVJjfkKDFJKqRFNpPjuq1EYkNSAZmbdAprNL8i",
  "key48": "2yvKQTvTCtgZkQkJrbmUYkYXJjHLiSDnZ6vQuPDeg6bpLmAE6k1jMMV1sWoRKw7VhywWAJqjLDPFnAyEYqmAQLB4",
  "key49": "4DNDcXBQAa8pn5CWyrGQGfPqZV985mGoYecMkEqEQuaZZKK24KJYHNeu87nH9YvtgwhtivdACfqi6BmC2mskJtij"
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
