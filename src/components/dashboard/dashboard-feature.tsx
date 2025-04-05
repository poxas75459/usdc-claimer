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
    "5CenC9RNwTZb2L5Po8uL5c826LDvNEhkX86mKGEQ95U9VFzs3sUuLmPRPfBH8Z7DDkPQdCtumkA8yPR5xgQMXsdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gjCJXFtpUscFEBNHMkDE9MoUF96rk98NN7FqhDsWrCGTFRh39f6J9UQBWY5j7aEKNd8wbias7RpkRXAYyGaBTaC",
  "key1": "5xV3Gfurk33qmc1NoLk2tvstpjkRrvbKQ2Y3Rk9WT4m2N5JsmDvCsw56Prfb2c5pNQoRaGr8YhcUQAugfw9wwyaU",
  "key2": "3v4wZSroZQUFibKNYYExynmxT9eZhg9N2owt4M9ry6fFB6MgEaUt6MU4XFijoQeyLBnUoqmgdVmdE8bGQnMSTqpc",
  "key3": "2w5ofwdjgbpVFjqkUSymFLms1Q5XFR376CAjoinxKd3tqTb4zi83T9yTsdhWmAGV4shv6XKKkMfG8TskfEJz4Ljk",
  "key4": "2C1oggErEnjEFBp5TPEKRz5kY4hDoqTgtSsqdCq5PbmD2TpDnYXi4U11Wsyy5NXSdfEzCRTvgVo2my9wWXP4HUnv",
  "key5": "2HFLXrix6QyPxHRnMG98PDCu12GMYjXMyNweTxZAxGZKApuBu3UZgqhS86a2fBdnAAWERHs7PMB14W4ZQM7Qg92C",
  "key6": "2AxCvfvyBv8Xt4cRZ6tqidbRaECZr2gguE1fUWnM2epB8pqMwQ9KFtKP8tq2F3vK29QpNBhtJ6bbh1CpZw1vxpxP",
  "key7": "4CPMMpZ1pmpwijf9Dgmb3U86xd5e7sVg8UDCnM7oZkSJ6c1YGwi9uAhLmtxc2dCZHxfXrofraASE3RgXEXhUjvt7",
  "key8": "2wwHA3JEwMA3DbgV2njedqX2kdqipPX1BFTv4bwQ8CkPyMT3gUYqdSgnR1hdZ8AVtqFW6xSvbtpqz3JoxbmPhymb",
  "key9": "5GQLrH1XPcfTw7HpmtgjEodT1hpwP2qbheUGz7feuUqttHLg4dKWYrv65iRMFBped7zvrQ4YVVLtxAvq5Zf99NaG",
  "key10": "3tap5boiFLX2tR3u34k3z8Y8JN4Px79SgzW7m3THQVsYgAcsJoaz43cg3tbbd61dA19H6Fsf6EDyTtde41SSB6F2",
  "key11": "4aYBqvjp19KN41x7T6edmsYmRGi6AxvFCGWFXqgQxd7EfNDgWvLWLSojVxN4PHQuNzzucu9dTcoAdFrRBDgPrRha",
  "key12": "5ZBxfgdLvhMcjCKbi5YsLTpYPz4bHsKEA1DavjwqQa4GYeueYkKP8r2mFPCcidFgzK6DGfFPVx4L6caTseZ43EX1",
  "key13": "oD4yxcDBZAzTcE6T4NN2SY1ARQ8LtjXoYA5qafKkYPYYx6qf3F5pEaXZ3BXRHHhcPHMVfnBywNKXehVKp5D816Z",
  "key14": "jvunz2gkgqwuvvYFu5PqJQ2JjCrbp6RFENATDxKh1Shen8iP1Car7tW7MweJf3mn3QHmDwK2SWGH6QhFMP2XjKD",
  "key15": "3RoGQ7dXsAMunzbPcB88P6QaketmurQbvKqGtzqiWfZA5QBfsMn3uhfhSyiYA65CUb5chxVQ6QFow1EUpjmVsqgH",
  "key16": "2RCzUrhUNZocqv6KGJbFBukf1WC4jQornt9JKbHEHQ1K4YWJBLXPwamMyg42ywa1RFfEeMTEG4o4WUf3VSkVyv8u",
  "key17": "2Si4MdsEjzN9Yo5BYHyXgNwaq168DKuhfHVHm4g45MW8XbUSp8QKWFgpX6KD9i3AZktbK9FT43imqV9bvuc6Ybzx",
  "key18": "4T3FquBhJUHzNfxt3Sjc7k2BRHRnexzSNz9ptc74jRkh297YVmMqVCpeEKnL6F2fASNEvkf1GuiJaUAdfSzmMxue",
  "key19": "KU9buf2zZ9tqNomAEuKxhzPMQ7XfGnLZz6CFycUMruWzCjNR5p62K9avHNPXH1EnG2KeR9M6F8huY9gaSxUEyx3",
  "key20": "5Br4NoAR7824cAgMdutCzMXspJRafjWgqoDs3WupA8HX8N7ZH5tEj5X1h2bCxuLbbXLwddoQRJncgsceJbH2JUDZ",
  "key21": "34eXmVd4fMU6sLCTrSiwAso9rsATAgDg7xYx8Lx2XVeJ1GHXWw34UKY7xD6jMqsbvXtKYKw3vtPiZYQbpXrSNUzg",
  "key22": "2v5cS54ihgcQe7bDDLBeb3ap8CnTVNmpDCcn3s9AmH9Dg51fSNSEocKtf9VGXaP7mjPh5jcvHmH5wJmwPkrP3W4T",
  "key23": "3BtFtXSBg7TQZqzvqgekMRGWBsd2ZSZmaaipCdUdXXJkjpcsphJLAVZstDnXMRF29Km2DzEhtG2GMWxkpTyDpBvo",
  "key24": "2jmQyUgJZPJxoF21daiJc9Rf8qFzhJJGxLPbKEdg93PJi3ayvL8rktvgoEEPEmTNLBKx8HvPQc4RZPDFMj9j5DyH",
  "key25": "5L8ML7Jf8UmRCMkSzx7mbyEkc8Cg9bEBoUYvwT6zPFgcDmRxFTAAzt4gkzXqCRsMjHsRPiMAjwg35w6D6G8DkWEK",
  "key26": "2YpSS6TuwNo3qoP4mDjqhYmcGmbydZxgWLWXjrd4LovV2f39ZrMh5GLdr2yevoWbthwxb31fpyvBbyaf52ii5Rvq",
  "key27": "4gkVzGTHtxGdhCiEp9htBrjMCMhFyiBvfdwgnmUCLrttboNbigwAhsWYU5CTftDZX7cjAYp1b7mFNf5m2YVvoZos",
  "key28": "2tFx3ZpzVg3MZ7ZyHTHYjVzEeMMbVPArfLM8exmycaJ3T8j3Jm31jtMjzKqkcv5PKuCF8ReFmxJrwtzn25ahcVqs",
  "key29": "5Qa7Y3zELSVEMcmuJdhkRbFd8mvbs4kpZHX2Ex7xWyNsa9aaedVK9q13eadk64bxQVKu1HPhfJQbG9T5fHsNtaB4",
  "key30": "3qtL94JzirxLYfV6DcmKuuZdFRFJF6fTED8dZAsbeh6LNYeNuGhmmcmCT8Wt2aEyQVZzT3767eGAmzu2c5rhfoiK",
  "key31": "3jJ3DXhmwHtrMPUDifmX2rkTFpehSxbA9UT1diaua4X5pM4Y24uR86gzPn5mY2cReqsQXDqX4d9JqXcGvXNzd2DK",
  "key32": "3xi8M8dJoRuUdjDFAMm8UEL4nb4F8VA1pf2muw6nC1kU9ACMgTTi7RZH7dykYA4onKizLJMhKNb3voc4T7JQE3S3",
  "key33": "2rQYn3Hur1mwCkt3MuTnTBqudQ6soGb1Mhb62V8ddVGXpoGFsZgFjyHueQJmXYcKMutk6cGN8SxcLA7fn2Cp87NY",
  "key34": "4QyHic5Ao1qupB4oHsbpBWcHpT6HDwhQYrbahSykrbrigxdgdEQ7r7LCPLmb2Fcm9jmmDYwAYWLSPEraTUtDWbbT",
  "key35": "2C2uAV9Z89hByHVLXXdQw3ttanCbaAMa9eY83zDBthRys6Mwa8xtoUM8256Kd7b1Y7UxYQ6SZ9TRne2uwPsco6vk",
  "key36": "2zSr6Maui3wsMAKpz2TUcj1HAmpoh3YRhvKzUTAZjGxZBAs4wepJFaa2NJNd7kojnZW74ef6wU6P4aHfCryNeHoK",
  "key37": "Vcsgzwh6Rosf3e7Y41Vf84q7iR8QWSjxFyfnd1uoru5YAZ8WQqGvLnCKudk5d9HMepPoeQXPS2nKwQDUWL7Uekb",
  "key38": "4jsJ32DjaizkKsAxrqtfR6CQRrR8QnH9rzDTqfZZtWBuDk9gL7YJMgBxaaJQkF4emKahGgmpcgrNMrTr7NRNzy37",
  "key39": "4etvQhmhs4mqo8E8m39Ti5FMJgEDXpdKKtAG56NPYosgbcCH8RNm3dBaRbBEbf18xe7QPdVZEgbfV6TKBGGu9gLK"
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
