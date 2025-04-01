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
    "5LrKgysGZ6oh6qTVsJyXKRz3q211NdPiMfCVvwXsnFprxXCN9vxC8TtCfZ7CQPQ3cuBQ9i9k1nWDXieY1wdnDWc2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kCRCmaYnekzYkfKRpeHrGgyd2MVQgjGpZNeiTpu6i6YNZoZqKE5QSMNWVEFixD5nENLUWWegUNcQAf4fx6tmLD8",
  "key1": "54YhFLReTa9c57rU9kgAWknCfX2o8TjxbZni9mACfqurDxfiqRqnqs5wShdSjPX8bMmeg1ZqUy6XrqqA3SeMK692",
  "key2": "jPEy8LvGuavKdykLMgU6naenVNEVTDh5RGYUBvezak3sZw1EkLPXbGPui8wEtTjs8CdqJZkpcnE1wBtbxzktomm",
  "key3": "3A7KDRj7BHVdQvqd9EbReswEkhHANox4PhVNXyjTjKvU8mru3WGiNxZfYnm1LDQMQJok92Ve5arZ6J7U33CNFXb1",
  "key4": "5JuTTyVMSv7F5jMQRdBR2nGxYAr1BEKkPH9zS4XyUpKDZmLf65MBszvicbA8aa682qRcZkHdvTgGjYqoPtdzkSzD",
  "key5": "5izBmFBPf9ZgHVpQbZ87E12zBLXR7Qp1KvMiw9vUbV2ndGYj3VxRJ883Dqb7iD2CH5HVHNdWS4HJBRgt1AMG9oCC",
  "key6": "2Skp5PNqkGoV4VqphDfBXuK9bTPUrPwDBDya7BLmreDWdrXiH93Q1qa3N9nUuNCtJp9QykcMieHfLkwCWkXHXJyX",
  "key7": "rquoRp1C499h98JETduizChwNQJbeMZ2v9MvZ3uF8twnxV9zUm4ZQ22j6isgnRJtnTNTgFjsWQ9BkYVgwMzDetE",
  "key8": "5pXRTaPKVZ5w8baLNyYV3JkSRX1g32o38i8ug2A7cNCnNW1yeUK6ea6ifdkLYJEK3rQdzuJh6MnZvk47ptXBVTmQ",
  "key9": "64D6A8bShBhVfe4dENZFuW3ZXFfE9sCfvDKSAviy4LBZxdmdadth7vVmNwyj6fXpz2SKPT9MRXhcfV3KaWFseeHY",
  "key10": "5hfcyKCu7y11Qoa2EwBKMfT18eB914aJnzCm13FvoLRZMXBrATjDDFKVZB2c18pXWuXwD8mnZVWAwiFAswRjZh22",
  "key11": "2yNEZY1pQgF16rdUjwGGxNyM55Xjqmf6ocn72vWui7hftdoC1sbQzBPYEir6HAR392WZoiAPhjCsrxEoUL8eDmxh",
  "key12": "2xkqtLWo6zJgsMQSkUeg5dy5gZAjNxawvKtnhPoRz8LAmeftcXokBe3eqA42eFkFsipKcikHPAA4g9Vvp65m7h7R",
  "key13": "5Q8irAbGqXXc3tzUU8gUwdCtq4XJ2b4KLbDshdpB3CEAAwi3MK6heWwiwDUoh88bgMDBHU1wX4ej4bswgEEf63zV",
  "key14": "4VysP5X3GGA4rb7bvQcb5edUfiDSgXS7k25VNT9g5kghP4ncFpWS74N7KrU2GdKqZh2Rwj3wUTL12AmmiLAvWeVW",
  "key15": "5py3YCWTeVVLG7oxXZ6WeFRCoeABhaEqqHvheQPteCJ33ucnq1c5aYivyXhwcUESgDjRJ8pbH4bxq2YSS79gEXZA",
  "key16": "xsgqqCThkBNqoVKUoLLE6MSwY6WK9Y7c6f7mKWPtrQDcZxp4xwVCgJatRMdfyncXeH62tYXPp9CnpTDHo89T3F8",
  "key17": "AJQ42es2sTHVykhFm9sBWsS4whPnHeAKiCZv5sKgX8BwXu64KP6hrKKpeY9cfV2wnss4YBp2sq9QmCPA31Njp9y",
  "key18": "2KcKZcCgUW6acRZ5TWX8N4Qm3db8y5GmojfjzjNsszpa6hUsC4PJTzfJXEYXuzfNpif9VQb4yWw3o36YupZqUqod",
  "key19": "2q8HotD3nfRSkgdieQs9gTr6w3D4QLdc14H9oudedv7sxGVyJjdxbgJRTEb1oGpjjJ5eTAqTfJgYi1EchQVF23kX",
  "key20": "4KT8f27fG8CgpwjctmqeZsdtYE9oz4mwSyFFdY4GTHeJEZhYf2u4EpdWf665U89b3NfWGbSKNdPc8VmiJ75Z3McE",
  "key21": "4q1MM8Km9x6q4GU4ohPPonsLd4tPX2zhPUTrZooZqSs5Tw4vwRn32xsjJTqsaCQUMxmPZ3N5Ue9hYPC3MVHyijgM",
  "key22": "4HC7SaqKbSFkYaGSVfHqzPmfPp2Kao2GmNoeMXRRWgzxqehQoxZs7NVCyyTkrPyLLdxBbeYHyi5ZmukgXXd2iyRH",
  "key23": "43zZmApwfmF73wc579tUgoCcdq8z5Wevts9yPaYjo7xQUyWLdB5uJq6E82Q87H7zCxSKzPqyYCqnioYrtin1yr9p",
  "key24": "JjRKZcwRkeeGKDnGZGFSXYJRnGMcNJAe8iwMtD1CEng7Ya851wppmCkVZSEqqubNxgvcHg1HxbvLKZuKM38HjsD",
  "key25": "5KwLKQx14aytCLvzfFpkQaNdrfEtqE5Syrc8N52MMnQtrQfCXmUusrVS2KBTeBYS92QYgpDj6FWabgvjoZrmmNxy",
  "key26": "yxP6Vy7ZD3ew8io96ChE6fvpBPv5F9amkZ8qMGL7reC46QswYg1DbxzNDSBBfZZqZHVcU693tjr4jLzV9WjoJCv",
  "key27": "2uPKHgDJr1k77NRnWD7pu9VmQFoz3CnZi9ruYeov55VUiPgxLBNBUQ4umZVuwWALrcjA5udLXwtqouFF3u9eLPfS",
  "key28": "4BfLQuWCnbvdjgf2Z4P6kdKy4MsMwzvSLAdPkQUdozL9JDqfzyVmTh6EKUV7gxt8JqsKLXfAE4DkosCNecu7yDbn",
  "key29": "61vvgbFLvWy9sYs4iBicdv8zdtTANFnAnoxqKSi5rUm9AQXBrUtpnDCSLSMRVecqV5qYDe2QGGZTtgd1N8HeSQ3K",
  "key30": "2JAXcENyUrz2SxeukA2KCjU1UDWtAGdmkFWQB5CTcJyXx9MkSjx7q3KckdMwXfULfSTMM8LFdeSuvLjgQzr2VWdG",
  "key31": "2VvCGtNVNsa2sje3bvrucFJi5bNrbTjdeGstcp1CZF4MUHZDJXKVfU1w9zVbQSNjEbQdZjzxhG7D496Y9WKTiwCs",
  "key32": "4SzS5LbxKWAnRdXqK9MEpKLe9igiWzhpSGATatL7GjAeNm6uc4PDUkYxmESFYscneefcgSxM3co5PaVJ276oBMYM",
  "key33": "5QwvLVLe8xcu4t6eLovJdVyvH7ihQ9ihyoWwPDoYYFX1pctEbHEnxb46wY9H9srYrUcMHn3U7fQH1QJUqPDtocdN",
  "key34": "4G8Bv7RjJS8iBiR3UwmPW572A8rkkZMnWu6K3yUq1BnoeCuBcW1iAf1YKE7jfp1prL6D5Q3fmueXLG4KeFqcfZqB",
  "key35": "4oZ1PcuUgkTVJuNw434nd5ZjsBXD8oKQNtRJ5CfBuvDq2E17s1y8jpVR1zxVntR6XeGeYuf3HATViHe87zR3p3tg",
  "key36": "4vFr2xd4vXjFpH2YTjDbawYb1BBeLDiGgdwPdRCxAgwyET86vY6QQFeRxuxACnVcGieyrnbwBc9bxruVNjLxdrhX",
  "key37": "4rNeWE8edDW1jAnGprGCoVJZXQ24unJ75kAXPT8YviCaDMa2dhtAd3G7PbpFpZqaQZnm6RPPBYHzUpqUUBffnp4s",
  "key38": "3UZWprbBqEZFPtcYeYndfuyx5jYhDnbx7KWuLfeKhF8guyEA8xcfNqUdCXNCdd8kb5hRztxZftCP1zyb56ECprcz",
  "key39": "3as2KHkRF9J8abvqEKQi4cEM9MYbg1KvWaoMXx7PcJKBPJGcVC61QSapiLADDxZAMiJ7pGa92outM2suZquCBe9g",
  "key40": "4sDq4R5rieb1mRwUouKk5zprWMgJQvVs7qv9cnMVFqeE8pUsZ6jyU6Q3UwHF1C9VRyfkCHcnZVrq9juJqhxvBdMx",
  "key41": "NW9emfqfVvqD3QrABFgEUUVoYfVFX18zu3dyjwFmwt7QhGep8LwtXcxUWAmtF5k5BSpHjGDupyYdZMVHrUyoMtu",
  "key42": "XE9yv9y8NnYLH42kXf6SiYV3HqXgWwHKw1ybidsV9MX6aUnyHSxEhQqqau71jXqp8UfyaYjfLP93suu5gCnXV6g",
  "key43": "34duwqeHb74zg3e26Qi6tVeSWfAihj3zeLRRV3r2NzpLBVvVfv9HLPwY9MzKY95T7K14xEKUvnRymysHYTyiRXCy",
  "key44": "4q2ZkNLDTnGDLfK9LSUqRF5yfEZxMvKiJXkRMqpYg6noP7JvLnYpLWVaGSRS48uCXq9C7ESmhqxbmewz8QsdACrw",
  "key45": "gNshLtnNXRMgEUhRt2yYog7yyXj6pHYxj4BPRs3NKMgAHwFZf4eWX84g8mynuDHYX9uFYnTtQb84dApiSz8cQg8",
  "key46": "3fLRvaeAT6fLicRHS3QbTLLkA811TczAwsBKapKzrgiNtKWJ26JJ1FrBZDVRfgLxkEsfUhn7YsNxGdGBof2jm6Vs"
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
