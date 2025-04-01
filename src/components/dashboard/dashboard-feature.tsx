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
    "2WkHbN6XK2gGeX79Jy8UKdyrGWmmdCVAZ7HW7KzgQsDhaDHjkjwmRXnoPSZVG3373Tr3CDKMr5nkHsmM5TAzpAJz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U4dAXnPjhJnU97LCu9LtmQ9WjqKmwryRedeJFAw8LxqSFbCVYYMofvAWfgB2bQdHbYpqYC7JpMsn4MH5e5EB3jw",
  "key1": "3oUdSnDDDe17ywpbKtw4ziKFHY488YiBB6mPEVPf5ygR9J9n5WY2L8xT5qGF4dXPT46evZCRxmk9jJou3nh3P7N4",
  "key2": "4Dg5Fix2zhx1hMVz8724HR7fc5qzHM48N67uDMxTPXrkawXZryLhoxoonBYqYvLAhuL5RWDiaecmTby6CABp4TXi",
  "key3": "2YXGRDQ5yzBnwTpEqE63MZLEZybgwZxBJcrSkdyxT5Lrsf5s5j9R4S2sbVesLYPwYiaUAVYFz1RghgA6NvjtXkEG",
  "key4": "9ioowYj7KMrqjNCZTwyxbaySfZrD9mGJaH9UArcntAVDJHuAkmhHD8Ejwow5Ya7hsAjR3v45CoyEeYDWTpPD2G7",
  "key5": "3svUBwSW7Q8CEA2EHJEfP4YUAM35HweR2w7U1QJUn2pLAJmkzmxWuatH1wAUNDZQBGzm1kLEGBLcdPhzqPHMouRZ",
  "key6": "4159iW8aocNsEYHZAFuFWRcovnoihx8rNFkcrkdBkooZ8kmVaYF8DEmdqM4QJvJkD9rPXaMhV48br9Pra1eabGcU",
  "key7": "5WyHDgE9vgQvzTWxKze5NTbS8ZrJ5qqz8UoS56TcfiC3pu1HJEgGFhe53hS3yD1FwWdmV6quTq8EKGsJqmr8Hvtn",
  "key8": "4Uf2QXNjxUFvTSKjVoBAXTGgR8c7jM5j6DriM4FoxSdVttVJApfYtgaR1NnmN375icywencGd5sUBPYFCFHhdQS8",
  "key9": "2dM7TsZ7koHYV885X8Kw23i4SjWa8W733NvLQfqKFKLzXHRuSLxZRgU1gfCTAodw2CbFMYduC3mL9B2hDgMjpRqM",
  "key10": "3LeYkqT3iopep4DPXmZR3VXaZZuU6vrmEXCpPSQLEX1GcfMN7WQXd2Shy9SYkAvyk7Fqo3rUnf2brz8gJwRtwM8r",
  "key11": "3cYMT1krSdB6DLGPbkRPqepNyNTRBof7MVuiohgSoetrYgJdwTgoW4r6diM3sPae6t4qkBaMUBcdaTNqw4SLXyGb",
  "key12": "2h73Fv2br89T5dtf53nMHXxkRozTyr7dud4kB2SAsySDcT3bF1RVASRvEB6Mf9CEgmFy8wHK2H8NdJjHMhqiuQA3",
  "key13": "5wbgi4HyUjKLRdMpeSEmxGKoUPybUrAN66CgFdq4brHCEYMAoSSyLfU2wivYiQ83Nm4gRXM6hYVYg7vxPtXp8Rn7",
  "key14": "Cmh2HPbiuo3mnpNEioSYSvWqNyhLkNjaQKBytJQko9Amy6n6LYo6NXBqtMzNZhXrFgmmrUswUo9Q3dsz3VvdkEn",
  "key15": "4CBrqhh8DebdotmPJzDKrQdKCdq5szuwPy5tHmxZeSgUpRgowiHok2En41PbiH14vdokvcbVMkCLtsVoyZAe1fzD",
  "key16": "3GNTcGLFZdizJUcoDApPBHwL3uYbZG7M6AgQh7Kse3rn8a4Q9YbwNCbquwry9DeEt1nev4SmdWoEAwfUW6m1trqf",
  "key17": "ynX1vkEPkqUZ6QA5ibA3pVhKCdR1YQ1PFZNwUQoRXuxy8PqQS1VTvJhq4KHoLkvWMS6XEb7ik1x2M11GLeWYAp2",
  "key18": "4N5o5hUJUNMADMVvReNDRUyW3ej7kcxuVJ1nynpiMW4bggfGhyEoJFjxDXW9Aojoxd4SEoHFPh3xyfzGsiJJHB8Q",
  "key19": "42zSdL17pBnFMxS1ZQkw85Q3VSwjpDvyGv8NnQd6xQJghL1iPVWGqx88THs7KjuNhLp3sV7LUnB1hzDEv7kUPF2J",
  "key20": "2GqpZDDyTqFdprMRQ7HXFpfswY48NjpKr9PmxB4t7GApKMisQ8S52ov3QqPoubbLYsQ9bZePYn3DkGSGCbA5SXX",
  "key21": "4rWXdBhw8G2asWGk99TMz2sk3yuvsxAm3YUVz4xfgtoLuGe3mq8qMGavPFtMfdB615gooRyrjLkkVwz3f13M9vyo",
  "key22": "4DpY6eat8uoZ8CDcDWnHzk25HbhJJmAyQ239X1V8rm6Xe3ie9F2rk7NLVysenaBj6ZKWzPh5v6J6y21YvfXvBQNG",
  "key23": "2RvG6gKXMB9Rzc1uNHT65pawRSNrpxfkumYggm9Bxuz4YXqyDSy95noe6hAy2rRMCThh7nLCHJFKokF9bnZoqXiz",
  "key24": "31d4HMHu4LRucjVanJxgyaAAWcdbAD59QpTA2pr18uFLQMxridLwc2g9DWE3mFZGhM3suezPEshey9Gm2ZzwwJi9",
  "key25": "2ZD7nvxryaHdE8iP8fvYJgVvekV3wt1sskFXdU47gXr3YTa1NTAwUMnUmKd1kkdxwbDgg5igPeBUzK9XLes1EJpr",
  "key26": "4QXCGWd4PidyfLfVkiL1JGxbpZuqS55dNhnXgKbrraaSYimc2YcTRCTYoDWXqK3634iqaw3AAKSsv5XiAJxHt5oz",
  "key27": "2g3EPLPRQ2t3PRzcQQqERJxfkLHRWUNKqNgFuULVcNpcvQYRS9X1FUggJgn8EYau3uUt87wsTgNLb5Ympq3bEzWN",
  "key28": "2xu1fqGNujkYJnk4RHG7ZTTn5kqqN8UkZwEWXZhFzxNjfEkqDecKmWFrd2r9Ju64UskH6d64HCMG6dnDrawHqgf1",
  "key29": "5HCZeGvVRdMW3CFtQP4i7NzTVjV7L4n8HTsCEAVHEbyQC6zHvdjDfxuhNAPA6K9euhCQ7batXYMJNRhr1dFqPJDc",
  "key30": "5PPTSuLE7cwvyGUh7jDAXP53gqJkEi9iqx7vKBBnUebD87CqBrjf6yo323RD5CLYSQ3sC5GFz6Ax5ZB3C1c7weCU",
  "key31": "4yUCjRpet6YutSfrvuL8cKM54jAbikio6uJT3aM9CxvoNPmFD9oWGXC6T8iMrd3pu6PYYEfvkymGLzSVu68X7Lab",
  "key32": "5d7CUQj5pfaWyN3sSpqXSddFoypAvyAcx7LaBVkcVujryojziUkx6aZ9jzhRAryvxUdmKyVmdNLa2BDWGVa8Vt3",
  "key33": "4j3Zz14ZDjDL35gAve7WJS6iFygp3ArCNw5pSUbRARcYHU2yuzA51hmiQAtp7k1cjv2ohrLrfrQsTGs3E3bcCUm",
  "key34": "22FDuC4zQCrBG5BKcrDZnQL4TjPAgbc79TKmwM41HDJ4npULkYnaGcSsd7exdtUqTXwXqQTuTqS6V2SSEDsCnPDV"
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
