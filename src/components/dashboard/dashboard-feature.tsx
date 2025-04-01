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
    "3pqbkCZ6jXuULFWA9XxHMYmnk5TDTMURE2WixXxj46nAv8NcSazYwxBb6URDhA9X5HzvrZ5HcPFZjDjKT5Bkjtis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pc6kqsRy1bDH5UnRepcUsQhqCjf51VVMQumidVN1HYaZXMp7YESzLakVBjCKkYAqUvmMzzz7QjHkTH8QVZQmasB",
  "key1": "5Dn6vm1zjdxc5abu4QPeLyNiqHVkKcg95Q8S5AAjDwXhKUJ5J2XCYHLKoGRbjR4fyEj3yPWsyMxpBMzoxcB17buD",
  "key2": "2mG64vbQCWxwt7fWcqG9vJ8wkA9rhPJ5w3GHo8sJQFv3t5w677Z2ByRjarjYhrVb7bEznchFwAY4wuRQCknCK6jG",
  "key3": "4m5YfJLCKhxUeMhhkc4H8i4UWX3wVdaLcY3V7NLBnSKdTooKBAbXyxt3Q5Yk28R6aE3y8ytECNr49mtvgB48X2tg",
  "key4": "5nHQAEvdEHbR3cpYeGBQQGkhFXeGUXshSyJqys4b1H65C7rrM7Uhg4jQDAqtAdMZzEzKALZEPvMFqj48qyjvpDxq",
  "key5": "53m5gjARXdDWaQWuNNVuBPE7PNcWUVpJwGzJpvwoeY4VNUUHFEsnrvvbs9s2X9yHXgdgcwqsTyRHcFHyynE37y2D",
  "key6": "2z21wMh8PpRK3qpxoXEYQcUqxWahHumoS1URq1EdLeytxfY4E2XbLWdGkCaCbLpGEZPMuZvWriT2SnrXsGbA4rGS",
  "key7": "25J1JR7AAiJPHzdfqHfUj8Ruf57NkgwhAZeKk6xZ56HxupV9eSMpcVE6kiBLjEqDQmsjGuycVJjmX8wg9VZ8Dwg3",
  "key8": "2sctAYfz8dBQUt5pNsbBMwf19tJWrDQvfPw5RS49NsFTD9xHKckTpw8DcAWd8V52zEWRJq6jLoPT5iQxgVhcxURs",
  "key9": "WyZBUh6o2BeYRyi112a9g6txBUyKwvSTzJtAkVJ9kW9SWAepZD3wKFFV9LKUCtPRpYEYS21wbbtmnqXUZ48xMvL",
  "key10": "2iReTn5bcDdsn5QUL1JuwAMBcHnFiYR7aSvxkA5qiDtGmtNiH5bLu1wi7gdWyaHt5f4isULu5S3oe1bN2ZYxot4k",
  "key11": "2dwMWWcKrVXoLdJ1Rdj4HnC3gLtCFdbtK14i4ZoV5jr2zG7NKy1EYi6WgyP9j5fCXxJLTzpuNWXuRqZaDM8v1dmx",
  "key12": "2Ms4PympnXsoLmgRDacqjNnbTXftZXwGiiscYoBHd8YvxEYCKA2csfaABSmQUdDHXTSSqBwyt5GdKxPoX3BqTZYR",
  "key13": "3ycpf5WP5VLxq3qaXXvRuYJXebAY4w29K9R1VEpwsjZhfWugzGgdqTV5tCMy2HyqW3YuFDbaVaVoqFF5F5rur2yB",
  "key14": "4gdvTF45D9iS9fHGni1sgPURAmQs33UqLtLJRBRtyXMHGzHcu7C78bgcu3TaW5LvxAF8FNpTrUC6eaiYD2cyBaeL",
  "key15": "5PUZD1murofKUqzw7MoyysiHQwTDsSecMbeCLhYorL91pdyWUSmXXWnzCePymZmieVnBUDVPzppQd7zW7Vzj6HMP",
  "key16": "bV7oJNpf5qWwAnKW8SUP6TfuC51pM3XYCaD37HfpCR3VcB9svVih9UVt9dnZDJt85oC4qkq9jeE5h7DWQp1U9Qe",
  "key17": "3cSbxxdbNVUQDTFCerwxmk3dik5ZQLSSv7Gvfq3H7A1SmTTy43JVbmgSk9mAz16PNc918tFoEHx5CaqbUEdfK5pU",
  "key18": "3BMVGrhFsrkGPzAWkv7s3yAjcmzWM7wwMykJPzRYF7AQuvYYtFMBVoZs88byYPTkpC2CyVDhv871pB69XqR6pQYx",
  "key19": "5YXkWoqK93TVLKwj2CiSbGj2gREaAMvtjQZxAfPoGxEQLJxTXQG4ufS9LjYZ2zDxvvkY8iEt73eowbe98fbi3nK7",
  "key20": "2qKb7LnnZVFxm2oMqvLgqKdX1nNqegmNmXSGjXBCJs8GDT2fdfKazS3FbKsSmpabuwrFJjXFnJsjHXHwzYFLsWaq",
  "key21": "2Hgh9oCnDPd9sN8Dg7DqrLXFyFnj9vrg89Q1MqznzWha5nMfWLQjvMYsHg8bE54CKTwjax1C29fJv2Nb4yvPgoh",
  "key22": "4VdKhremezfmCo1T7pJ2uNHfZcH8Sfa8cepHGRnqmUhLsdBjW9pUgDVJQCEjLN9X7K46Nx4Mm2pH6emirPdYvFYH",
  "key23": "4MKqJ5RF5pgBCSvQLz7frgNQY1WTbRyZjCVjEMQBLCENYeA9kBVY9Yyn5JdUHFuWYkyieZKDQQjT8JdEFP5R2fh9",
  "key24": "5Xdt8GeEjmLMrVFJhj4UhTX1NUtrqjEqJM7qiCpvVtP2RVa3dKgMnCcSQySkvYhLK91eWYABs3nxKFAaLa9imGKT",
  "key25": "2wKmQftJrL183zR8bcrgoVkueWgMskPT8ZsD2jvt5ToyUtzdstWxQ7o6ZJwfQzBT1PfFm8vDoMHw9vaPkBnKAxhf",
  "key26": "2d4Z75h737CtQD7xzXDi56YxeEKyJPirCv96XV22oSDNRL6HRKnRq6YTteo2Nkm86EKtmC2AZXm3CXU51Vn4x5D3",
  "key27": "4bkzegzkYK665VjJ8A2LQQzjALRA9d5NEfH2yupMCynAKM3gV35GquYirtWfRmYKdZAtCNqp8x6cwVn5nW9a1Utq",
  "key28": "2qeyqwHB1HgxXYYy3ecdY7xafQgUuoWkodC18Ki73cz7YBDtXQG3JribsZupCpXJbHucRRF6A6kZzK1wZ5Gja9pR",
  "key29": "24d2LaXYudXcZMbjY9knpWxLGgekb94nYLWpfXk1pcq3W913M4opxvbf1fZHxHuxjwC21swMJuCBGTGa6A2mH3bV",
  "key30": "2A3Z5yx8jnLYSNhFiGTvhV5p8efQwT73Qf5FSPzrvSaNW5zbebvCS7vBFuWb8ZPsLitynob4bYyxQ5QQXiAJquEN",
  "key31": "3YRhabiYQQb9abUz6e6YsdD6XoWnWSEBRPNAX6qwvuxX9Un4nZQFLJ8rLMiA3T7rvLovuvmaCMMuiPPNfs7aHTVJ",
  "key32": "31XBo1SPWgKcktZALWQ4SMdEFbvpFo4KFDVDWj3NFpjbMVY7y1M2wA4TP1LVeNsQBtzKpUGmvcdJoPkReMSVsq8g",
  "key33": "4j45kPW5kEovkkgEgZYvAwDqjLj61pyC7aUohrX8ZXSwxn9N6jhfiCC8vSm5LTzf7QwTwJVbtdmwvTYGKmeSBpjE"
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
