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
    "D9urRpb27CtBkHZ4HpjDxvEAEAzCXhZiUGWx1GiHBXR9w351gksyn7omZjwbwbbYRyPYTdXqL4Gz4eGpS3tvAti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gT6j7msZkmdo8sNDX6QphuWRGfzM46nv2diehuPco9AiKCaFv4nKKCfgyfrfuCDNmEbSEUZsCdLKrXGm6sbmvme",
  "key1": "8H92gdCaVD8La6YcsGQ2VgEMLnhFUPW18wmvAqET9ZncwK4W3Zk1q1iqw2Ueaobt3cWQRrqNgc1yJa6VWPTaEhP",
  "key2": "3CPh6qj5Jh3iV5A1aba581F9LxwjTZuXgA2tm4UGWv45C4D8JiGuTSr5mMni4t3VXK5WfLHZgnAdqvr1mtsNreH5",
  "key3": "5sux2TEGCbkZ9Nt6KWeRzABefowz4k5WpYNXD4o1xBagawg4CvhTS5SQSw1bWj3o7cKpuGmBLxjsh1ghChFPogAm",
  "key4": "ApryDnc1tWggnvU1jqq9dc7VeSxjDPJje8MeKqcvqt7Ye72sjZjZdYKh5o7vf3jriWPrYQmkyZHpVmnt6Vhg4Rp",
  "key5": "488PQKgGpNGD82VfWNHNf2LDBNagrUFd5puXuuUTnqhMZJjz4zMtvAebd1SfbW4vPNku2n6U1FGb7uX4frm2mjtP",
  "key6": "4GBTLXWGyNNxRu8dACQvaxR34QadyhqPsKjdigt4RU5BxJTEgzBncBaXdQTY9asWA6EPczN9is3ZXC5jHFa7DBLV",
  "key7": "22B7C8fEpyLDZHQZpE64iAS5YGgx4atnzkKb2Sr7UXuFmRM9ap6wkdUTReZ9r3fDxC26LvPsy1Sb2UrBs2VWegUf",
  "key8": "3d1WbqP9D8LVHF91qxqN4Nx8yzucL94EsTLtAfAECsZGavo4vr9BrA2j89mXXVfHPYrKVLPdZrW9rHz3hVXZnSN5",
  "key9": "4dvM5JJWBjsfYvnjeHDZF9G7R8cemt2sy7RQaX4unA6tt56VR3K328tqu6YMn5ujQXjqcAj3rqoYBdy4khhkxooU",
  "key10": "3QLhmdQhmoPfM9mgsvKLxEM852fDDnCnNHghU13im5BYcsF43YfTabNxj1a4CAyJtuNoXBMFmWsZA8tuePK6UfCR",
  "key11": "1eRMtRW8AJhYuW73fPDgk1mgxn7jQU1mGdMWqvUmu65Hy8dshf7biyJLKeK8fi4ZxFjHsBivDoDSnFM83UQJsoE",
  "key12": "u3ZRNCeAnG45ekQpPZNLRu56mQ5pJWcETa7Yh3vdRiZvqDjASuQRVuEUhUnJgvMnWGJBq3ZPJMjacD3CfYNLELS",
  "key13": "5EwUo1uBBiryPkcjiawMxeLVruFX1JenQYaJd9VTxJLepBxPpN7vpUUiXz1gFhw2PrQFzx8VxBYppGuJNoeRTdHc",
  "key14": "2bkbCV3wPdpFHVv3MRn68BS134bWwpu8hzjuzLmcG6kRHZm32nDy48ujxjwvwt7YsZFnMuKLJTchVG2VLJcRci4m",
  "key15": "CFmjX1Ypnb6n1Ec8ATJ1fv7ZDkCxDbuoPnHJuDELAaJDwF3KFiFPqZrU3cnHUtRdL1drDXFfZFyHBJMDUrHsE8w",
  "key16": "38s7V8uTqtFFbhapWnzYvGU4tyzX6V2CUbDgrKtAi8n8WyLx8TZoGprdr6ifKX7MHmdZYc45dCRx4abYSGcBFCfW",
  "key17": "2pQsryB9RCoXAGPG3bXTvJ58TkfCDZXHhmCeUXKtRpZgyRVWjAYrnXrFwUoJinbovbXETWUpe9w4jC327fvp5T8d",
  "key18": "2Fq73aCoeSeCQE6zqogb18xJMzJLrhegD6jiuKuxoumdpvsbJKieKPPxbnZ8nE3Bquu8XfbhXdBKjnvm1LKL2tv9",
  "key19": "4n4ukk2ys7U4XEw63faD63LbQpHdMyNbF7M98HWPvWtuTbPurHGq3TXPLdaWHbG7a8J3zn1Gzgc98Dh4ap9CSFA2",
  "key20": "4qcTCn6SQ9WCeLHHGdcTsFDLvU5ZAHFmYicJgF59d4SLXqs4TEQhb77cXudXUwjEufVn4h3CxD7qZXSmLgyefuus",
  "key21": "2PKtP4CPGLNhZRh1oweBuWZZu6HbzT9ZCPvSajLqZ2R2UXjtFM97RaxRF8Cu5JT9yh5CeumM7Sq8XEt5U4VaS867",
  "key22": "QZZURABc43S6B9sVaM7eGa4aAx1iQmy1kNGwHqL5FV3LWoYizmZWaw47nwGV6ZfAtMFE3xNabUHHdoHTNVKpJe8",
  "key23": "3TstjJ9Ww8jZU2SLYUPJrQB9Ec4ffFS1zofS3uUhu9YXayorUf9sE8tvB6iWGXch4EcfR6gb7A9v8a6ekVgxKkvi",
  "key24": "awaXMW19tYt2an2Vm3Ns8DVzYwJfDsjwxyCgmFKs33b6kk3qBiqcws3T5fAAcAHisDDooUmmGECeCqextTc6cat",
  "key25": "5nZc4WiRafZxn1YsCyET6URoS5R6uZWFMxw7NJfCTsJJHKn46zt4MXn1RwXh2DuZJ2RUYaenwfWq131A6zmQPJLn",
  "key26": "3KkdB8xwHF3iJBgQfj1FWTvchn824JMeUS2bZLirBtHGGtbFoG8tJeAdCiZFMxeq9Eu2rT5o83CHhzXRrcett6Qm",
  "key27": "3PX4456bAQTLXU6ieDWNJBPLNsaupbwwznL1UbtvUZiq8AU2xc5LF8mGwaeFJEAPvQ5EVuaCZwjdGWGFm5sLw2j7",
  "key28": "5Xw9byRc7ww1U92KA2rtKjEdd26hDpVwcXevaobqyTX7kckYEAwzLUfSpSpSTVtut1CEY3EPTaxD5eQfjtbKJPHP",
  "key29": "5Hi7LhEAgK2eNmnQ5CHcwDUc6eVtYKpDxbnTURTFwVBmvCKQwmRojRxSxFzVNQTRTE55eq3N9BECVmTQPK5hgmi6",
  "key30": "5eQFrSRNzgBfmaoeR32XynomqtVndpF6DGXPX9PWtXDJfVY1gsp1BSCUj2H6MEFWAN1ewYz3yxkQ81w7MHoUqrqH",
  "key31": "2JXfzUfAYHbDpbyvSyuQ8bBxED3XgmQHwzoYWT3uEfhN5cnyHGfPzpmS6z7DdbqAc3Q5gJZ2gxtvSUGxxwuqZyJS",
  "key32": "A4iLvdSqWqGEP86VRBvbyJN25Cn3asBXvXfuZAT2fCK95V1SBoNWKT6EBk9KQdHN1saVEcMNV1S9bNW6EjZsXX6",
  "key33": "661LgeK4nKdKobK5GaLFcvERu64hhmiZbdasF96SAuSKPFG1xT6ihrKNhTNx8RAEnhHduPz1stctZHyeTDGoWzr4",
  "key34": "2R8m7YH7AkkuCxGfhK2CiCP8bdxxQWQrt3k143WMANb5UFmhyimgqFHp51VYJdWSct1wUTJdjiySgMqT5jEbQ1Vc",
  "key35": "4xHUrU6tWHJQu96wjv5p4dw2LfwsV7Tp9crhSyHbmkeD9Sfivb4vaQB9SxbUCQP9XG8thv6YzvBzqh7bvwcquEcS",
  "key36": "2YcJSDjEgarw7hLr65LecZh289HGi8v2FzHnM4CLZX3tZS6212vSdR71eSNaGLhAhuoffaZ4Wk4ZT981nHWNi7DL",
  "key37": "24gHBmf4oQ7KQnYtoC3VKxs5ryrhCWhH9q9ykwGR5tB9gWcCqggLRp9UbhtWLm2Pq5BcTYP8U8rY9iL8qeUri5JE"
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
