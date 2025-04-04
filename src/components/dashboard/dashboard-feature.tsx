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
    "59siwgqcLGxYiQYFEu2BdybE9h1bbzQAxG3j5cytpz4eBVrrdddhfDY6kU6oA11QyF38htVrgqpJt6T4Wfn6rwLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zx7MyutzZH5qkf22uWJK1qhFkHeQzq9EqBjybksLLB1efF8WWeggn11WzJri3tFvEEAuZHpxnJzQjCn9FS1qoEQ",
  "key1": "4smutBMgXbjQJKBVLDJTBemKcWnFVWuH1Vem5QyLfdGr6a8ir2vAKdggHgvpYqY8F7o8gRAf44kpxTdrqMG3tiEg",
  "key2": "xf2GAMCrx8om8e5sh3VnrgT8nhQ28Z3SHjYwmEuMrrJSJnMUiLF5wCx3EkE5zB8ShajN1HiGgngbVL8Xbo1PgGh",
  "key3": "2sfaiS6SYnXbNnbxyxHdbXvJeJRhdZyNzVGRJC98RM42BK5v4L7VrRjg5RkQVtqaHxSGNBxTEHZ5h1bi6A7gZ9V9",
  "key4": "3YUuwY85nubMo9G1TCgPHbuefMK3VCnVAygcZukFgNXgzhEdp4GM5iXDMonCgen6r3z6o3FGZSQGwJaJHGsem8V3",
  "key5": "4GQ7QccUtu84TwaYgNDMLiabvnVNoWNUabZfMSGF27AtPoDxz4yWRx4gw54VLsQq3q3o5ATNiMF9wdMDQeWP2v3w",
  "key6": "4RnWDC316ZRYkpvzNhaCVxXGAaZUqQHS6edtcWxxVy5GzoYPWH4QMCwK1EpJQVLZoCcq4w4HeDY8aWTAzSmRTsWM",
  "key7": "3RRx9fmcZChjd34juZE3UfwE6gefBHiXJHS3XKg6H5Kgfg2LjbPPicmKb9wV346LCoGC8hVhedeGPSdjiE9LQZV9",
  "key8": "461N7XgadN8tLvFpDvqEhEPGQj9jfQJ4FSsKYatXmwGUTVJXGnsFnY1qcDQmyCRdMksKKpdpHtyeamgAcYKAU19c",
  "key9": "38NaR3srekxazu7CU2JbAfWjVszKiNdNKkRApfsSirFNtK1mgLD6BpaTjxNJ7sREqyc2rRH5VZyKgNwWUUom2j9k",
  "key10": "4KVRN46VD3HXs44dhWj1CxXG8PamdDmxvy4JWEi5evEyo92C9pc5B7Fu42jt95YEczKNYaZsHBKprqUTLSkqd3fy",
  "key11": "zL7Rx4y5SUEfBAiD17sqmZmSXcSzWg4AnsCJ8dkDQoXUD26iJhsCNi4nhR1AMRhF6EPE7SDxkHr85JD7VXjz8VX",
  "key12": "61HifX7Sh52RdfxKqbfKy2sB1E46NoZsEWHdachpqcxyjqQDRcfJUm8YtW2mDE6HPohDYmGvAQ1E374agGpqeEaZ",
  "key13": "32vu3dHYcEbv6gHQrB4AcANteafEhw9QVP7UzHDLisNvy9okJsgAyxnrCyue31kw3GcrafcsJXyinAHdrznK75od",
  "key14": "22PL4D65RPaeTkBeyC9ugaiH3wQcAb3hQ2JP9BPS5wy2ZcXn7Nn98WGdXW5oS8dsTcF6HJeTr4WSgjrarP13nr6h",
  "key15": "222Ts1HppAxi1ZQVCb6P8DZ5aXyj9iwxTcj8Gor6YQXpgN2NTfJyaaMSuCRmaHxnY1DY4ekBZRKukhM8rRrzTX5H",
  "key16": "5Y2Z1vN6EVkKfad9YAvaKPA4CRvZKZXJm3T5D9RMJFz891fjKGnV3AVUvNFvdVFYqpTq1FGR2P93rfzZMZr6wVky",
  "key17": "3W43xL8TzWMaH5zQnET9WfU9XgBgRBSkmxvXG67JC6VQUnTdG4tyuCFc4VsxRVDRqNLwAcN5xjFqDRnkJ85NozHg",
  "key18": "51JYYKzckn7AcqXE3FFmjSzhH65B5rz4HxyrJdu32bMHhjTppJJj3QstF8BZu512eZ3Po57ktHhVk8wGi8kJ9VJ8",
  "key19": "253FhMoHjVzyT4Lo7xzxMTRi4Fha2rjB4tEJszXkqUPoD5F8QAhggxtaXKJGtCDfmmS9suR7rf6kVDxJSEFuQXX4",
  "key20": "4qp9JyZofHi1rLxosH7NjD8s1J1x1TC4kG6aVYWWpkqDRpNhXsiYXxaoEebPbidqR81BUptBfdUE4nMVFptrcAt",
  "key21": "2Tq9VUWorfZ8KwrqQKmHofdJZVgxuqo2LaoX54bVMBsLiRzDw5nzWoWNKXksV38r6mQqz9c2LndNnCnGk1Qw2HpS",
  "key22": "5Dy8QFJdTL6WAe2WkA7vLNjixL12xo1B4DayBYg2RY4nt6FX61ShpxP8JYNnDv8UdecwkVrGM5hm9LDirUGxUK9F",
  "key23": "3CPK8VHnp6BEr5SckYjUJhiZLCGJSK6FTNX1dJZSEkrfRUJySyEk3Y3XcaZ5vBEth7rkNyQVnDFdDNv1KnuQdUxu",
  "key24": "5wcHLBZM1NpehuAj7Xb1a2jZMdB6EmTBzfaBWCY29vuVcWJaQDj1zwjLZvWDoiqbzqpoXqyZL4YAHShtXXBaiSX6",
  "key25": "5RmDdMch8S59A8b2pjhb7fAE2uuJm3YC9hhC2Yjh9xPvCpHunzcqHGMdbXESyZaeRunxiJugjypW6Rf3zSa54dqN",
  "key26": "8XK3SrN17u9cSQvfLJ4WRevQtAyjbJwH1b5h9EuTJ5Li8sa38Jf86x25vVTuCL4hgWNxWC43rHvHFYbmmzfCrZf",
  "key27": "tQF4YTaoAqosoUqy2Gp2SPXkXd349NGKmJwBbttL3TuErnCRsjPUWtdTPkfTswFPhJ9EWdAhNJJ3cUtuyavka1t",
  "key28": "36LC1FbL7HfG4zy1wxtpZfvvAYZA3yuBnGz5HPbR2vUkgbw1C57a61QFsZMpoPwz43Af3wD8mazb4DkF24CAJzBu",
  "key29": "3s9zntUGKBJgZZdxfjbJAU6GeqFJ31QK4HV2tKmHf1Pkrt5yforez2PEvj9DUFt2mfC5bt1uQ7w9qESjEPruuZ8A",
  "key30": "4xRhQhe2P1pn5gGq1AFtnFd4LZft99JfrHnRNqczRHJLjHYm6UR1KtoYZP3f7D5RgxvSa5WoP7xshqYkBgpjFq6R",
  "key31": "5hWabUMKo1YXJA92n6y1QB6A7zQfGEMRiUPPoRRUJrj7rEzARN3oPE5KGfucpQvS2CJpFcCXrzhoLHkJKnjzmZGJ",
  "key32": "4xDMKZ1ap97B52EoSAmBZQHUiqsMdb3zozHZtnQHHWMM2kDdxAJTkhtVvAcAvo1pgVRND7bqJ8aa7JAe37EjDxvp"
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
