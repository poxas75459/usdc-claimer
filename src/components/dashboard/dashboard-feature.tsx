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
    "3xGQ4XKG7PQUgzGU35WVaXBjioNVxxRLWZGzEStWibPz7ritVQYPECfTTwBJECCfK76UK3PUuvF6QVmNJiKxH2VV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LmHnXUQSJs286zagvRRZRNo2UzsdqzkQGMgpVKwjutqwAGXy7QQkdNA11i4rVHq3jiqLD9g59vsCb77ZHicvhDJ",
  "key1": "5oAwKASagTDhZ9gCJjYswuTKeGSztMbXpc9nMVJGjsr1SCFHUEgtAftCQWSsYXfZXsUbYP8PFznfrNWVJmgamNF7",
  "key2": "E41M21ZhnvEGQUFDr3Xy4H2VfTxi83oaoohPAvqNE63THPhRwZqwnuqbicky6WmanHY4ehyXCh8BTgJzq7kbnFA",
  "key3": "4rLHTLhVxbB9B91rDiFCqs3CcKJqUSXp2FrSjkTxkPFceAsWx88tVy7jVuNXWWevWvVewqu11TpprMe2GtJLbWoF",
  "key4": "3aoLffZF8CBCCFVJdVJgn3T8B3x4aSFd3cPZFqb4HFxbKHqbGwBPSQsxGSB4hvKmty7GydT9scveqqw1khhptsDE",
  "key5": "3xjRJvTrxNsSyMv9z7FBoYFFc1LX5w7hdsbwUyyBbhVc27pKQa5RWPY7h8kDS4N9ky8Dy9dLSmcc6XJgBvhBWNaW",
  "key6": "qoUtGTd6fJqWDs7n198CA4wdktDY84Lzi2AbA2LR3JjTktQxGkfCrnkyMrb3UTqc54QNDiVhG519jpEvhFrSnHd",
  "key7": "4AWjcCEs1EheTzBUYRetrMYDcPDAUn5PVEEndsPJVC9gxdKXVJN1brYaw7rKub7dKBoUbmkExA7Sft3GDoSJXWoM",
  "key8": "4LHnPNzwB5Jh398mdk8ZrGQanQRacvSz9cQNRiapAb7iQVEn6qPhpXyajtTSU36EUsFRZanvrswv97TL4wMUSdE8",
  "key9": "2sFhDGnYYe5yZRYuY4mjRnsGRY6E2RcXeydqwSuskuweVmAWZ2jaP8qSaawPnAq6gxjFvDCF7Vu78YJEGxTop3XD",
  "key10": "32XFQzvMAcWCVyv6JejkiybVjpnmproccKM68CL8bTBU6cKKUrkmtjhchVCnovn5hx1xweYL5jHzcXVfQTwij6q6",
  "key11": "8BPf5KuUSq9PAjVhkeippRERYZvo5U7XrU7HpJFjcsLszNBrvfyhZTywJqPprWrhzNDfzv9UW79xsk1nBY5Ti9E",
  "key12": "2GmrkAFCZZXpuFfARYvwG9RwKQUgY9Av5ETZadx42RjWVY3g9cNUvctTQ29A81gJfvbVkwEgC4kTDpTZK3bTRaVX",
  "key13": "2GnJDJaPZEHJzqpAQYyjQDDVKnPk1hNg2Y7hhJyvdCxAd8i3iq65SRKUfuJFSWrrQ5ye79P5RK6FiiKcwvozzF6x",
  "key14": "4B9ZprysDZLGeb8dDi8YwHw9awtybjGuV1QckqXGE3CZK8zUesrZFdiUfjR5vEBxG8QseeZduu7m4TfvKGqUaDVL",
  "key15": "21KawZ2LJ73MoHFGM5ygW8Bk5xfyEx5LPypJMJYx3Aex3gQKn66FQy1X93qMfgD4iW6pBt78AiWHgdk9Rw2NNEtt",
  "key16": "3myFt8Zb2UKEpXDGVwTfURgmuYDcNWnTA1WLNjsSkEWj5DDq73mGtK5GQiQQspn4M4gRV2e86MJ4r78SPXL1Z6yz",
  "key17": "5W97PrmkEGc6veD2njV39xat2gzvbrALTDotKnNiDtXcqjsJRLri7wFqwsq24NvuMQp1Yfzh8Q1n72L9TBMS7AZe",
  "key18": "ZXpNHjuj3NxhYudHtJGFt2RQoT1pyJpE5SWmUULt9vd5mcXwN18GAr22ndnZsCxdSHc1Lj1d1MFatwJ916DAyfv",
  "key19": "2vWRK399J6iaiDpRSTsP5zYhNWwWmdzbHN1x7MCQEs9gz8NCHbq2TS1mqkTTK6rcBhpgBVqsWkKW4LmLGgKT4K4e",
  "key20": "4XCyLFd8HhFPV1uiEvJDAYNb1gVQ2t3j5zu1rcWJbCgmmbxdrkSDbNKoG8937C3FYN5sWGZ6zftdqGcp39NHbbgb",
  "key21": "2dYm8KttKiYWt4gwBkmt7NRFrWjJ3ouoCyM3ZEDwE83HerGJP9iDS2LHyH7Wp74b9KdZT38n11jzRQbRLUxaneAL",
  "key22": "5kzvwQornRhjH7oEBkGy5v417rkm2XEGQF1Hin2RPZH8RSibgWKAbZPPtT6cz2uZ4TkwA5qt563mdDGn4y4YUqWb",
  "key23": "WBpP8djDktdhLkzXHjfCpbQYKG8hejJxrQiZLiDouL1h3r13XieZevbnYU1bomKUxiTpfwju3vAfNzfoNiEXCk1",
  "key24": "32AsY5PjW9KYiMSqyTx1TfHrcQ7c6oLodenAFw5FB5wczAuaER8HocUP6REVR7DxJGoxhHLDvCWe6p4kZ5GdXzj6",
  "key25": "5jbLe2MjNoRZQop8yVJbLySkatTrZ2a26KcP3oNLvuDa8A7HZaZPqYcTFFX2THb7mZUuiySf5naadg2UEQepfqPe",
  "key26": "45QgbWXDpE86Xu6MtPmdRsoaxyG939EscGz8uSGMjmJDgD5Gj51fhhjEdCbDi3NapymRTEbaKt91AU1CiD3QEU2e",
  "key27": "NSbYBNVN3sWnZJ6K42D8eLE8QNWK9ixy7tZXkXg3Lj3D8eGD1V48uAtNzAG2VcLjgGWpvo5XpQ7ZNpvUopY5vn7",
  "key28": "3sqT7Ce5XXJtb7AhnLcTZqUn5vNDxRvPwrNTgtxdRbCqANsjnB39bXGVu6Jg1fL83KFcddjD8cCfiFwMdT3m1vf3",
  "key29": "4oEZadUaM4smTZD12kC6XcAwBBiiafwb23imXAZqCjQZHai7KvzsMzPeKhGgn5GsLCn458mfatFmffydmz1gtU9",
  "key30": "4P6uv7LTFULhxUSnP7CsTAovQqrGAs7rCHDmd5Cm1UJVg7AFfUkcHYEoF6Ev3VtgJCCKSFbysuAmRTcKuxKb3Ng2",
  "key31": "4sB6K6ufX7KxLTD6Mdsuw3YAGm6MkvaZA9g1L32cDLDudbzh8wBC4R28s9Rp1wmABLHpKnkhMd2fRnECLPxxjkij",
  "key32": "2QSeFn6sYbGmY1NRygbHJpz4cYq1VruLhJiVZ8wibcjVb13TCVA31vnguvyq19NW2qHGuSLGJ9tgv9JhtvXsvY14",
  "key33": "5bshzVBjQrg9yZkuynADSFowygDBys1SVB1s8dgXvf3aKUGwFVX1LSbg8Me16FDseEAwBN5yfYmsaCBpQChE7iNU",
  "key34": "r3s3RXqowDB4u6WkQVtcZeTeHqUg1kY7qDMgUTnF46b2xfV5vbhcVpBAm2Dj8KHzZsH83zvg7sv9PjUhkvMjoDN",
  "key35": "3YkxwbcxaxoFVJdCmE7WCX3J7n4km2HKGUhqx6vEfdpf6HwA6YMjrcfSjGqUhMjKThpzrcwa3Uc19iuJwfECyDr6",
  "key36": "4scctJoBWanzHx5uBP6FuTZEX3HsHgoeoa9ARMpTwVXA5eUrQbo2LFZC9CgaPQN4USAb1N3DVH1vRzMTtZchvNwn",
  "key37": "21PSbTG26TTYtCUxwVa1oTeEgzQcaCMZ6NgHNhUN6bxhanHPBTfuAgqQD8ffQtfUTPWXAw2k447brWDdfQMQTF3E",
  "key38": "2UEhxqJ2GQQhewZzkQJnnyA3bsFEY451RLPi9tdb5nCoFZX3YBFASJhTk8dFw9wd66q5xT1DHSRXW5Kzaq8tqhCU",
  "key39": "5DMc5uHqGXeGheyqUtG9z8QwqaPJaPjU9CnZsUu2vN2bWCrmzMburKPF6Yd531uHUNy7BirVbppXEoecmJBDJoUi",
  "key40": "67cBxNBy29mjwrjmRaGohTxXGki92kHCPB21ygKgYP44nzKkoGHKqKHETda1ysE3HGM7SqVzLCHVmFZmWsg1fEUk"
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
