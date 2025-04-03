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
    "4uJqqBrhZB6t2hHgto1BqpnBNj2U6LhhGCTyY5vsY69dxNm1A2zL7jpN7GUUz5Guxif9QiEmWSvyc9vvhwtrXVHR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CrSVbsBbC3WxMNhWde2Syy8AzhzVyqUbBpP8KS3q2Vsysm6ytqTXo4dd4QWRUpUcpfQF3gfJwoUvRmQ3Vziz5c4",
  "key1": "3kLBaqsTRmEEB3zAqs9b9rc23KNuaWDtV7sh9DY7AzYbdYFqGPfJY4inffyrRRowxUrUAooxx747dJMrQMSJdF7L",
  "key2": "5F68sRwZrfA2LwidjJFbVCDeGoZPMgbnMCb6jFPHpnzqoECsmfGHJ8qjBVD9QoyTcp9pBUehf5GM7jX1cU2N5f2q",
  "key3": "2iDbGYYzqC2ng9v43sm7NHyGvsj1RxMR4tLrTHHhbuCd4sdrw8qkRzKYLe6eXX7FHrbZRWHc9ubkM5Y7M9aD3mvu",
  "key4": "3GQrP3qwiUjtttppiYYb7UdVwSZ3nGFWJXWjxwk67RUeG2sa8upxCJzGSj7afDuSFk6QVJTTvkJm6eWvucNcCFYd",
  "key5": "2FmpfMFZaXUCeCKNia4T7U9GYBpkkUGTm43TGAr46Lgy1eHefuyeHdeduRFNnc8ULVZztqqmkj8dkcxpVZRApJRG",
  "key6": "J8kpRNbQqeB9CNp95xHd2wPyssXZzZyhY89yGJ6KfxooWrpG5fV7whJq3ELMthZUVcNcvy7VQWSEQDUeTjFJVBk",
  "key7": "2KZzsCf3NEC4TpEUPDAEZSa6fnNVvU73tPwLKV71XguViBW7EJvpkomE1rWjApmNR9oWBQGaxVXmcz1kZfbKJ4wZ",
  "key8": "24p336qwX4HAZ4wfJbXPPSJCfoQnGjwtawod3BofgDxXvxsJd1ZRmSQpN2JKQb2wu8zutKnoyzv6hNw8y2ExRC6A",
  "key9": "4PcKEqb2iWheR8dwyrRNLuc8SaHXxupLqsQB8krn6XFHBUUWajkzz8S9WvySE1N8fqBtG2P3DEXPLrHZsABpaNpq",
  "key10": "3e4z3oZHBL2ZQN7X4jvpzVSn1K5zRiwd2P1GBg6dMfjj4DTHZAKeoHSA8KGWtUy4CaAaDT9xUD4xqCh3B5LTfM2Z",
  "key11": "65pixWD3pgTkCnHfbsigAdiCcNLGYifEmwA9VGB2fRrYwggmAUevTxTMGwBqyLdXYsv16rMCUujQYnhvnzdzz96f",
  "key12": "K3yqw1f8vcttbMS5eNxNjofQHSECWWFcgqR5AJBVtdjLEHF32aguVNgsjfZi31ieY9yHmDFkpcnW956Wi2xxG1q",
  "key13": "4QEaaptfi33c8YcGm1szwG4VEF8Lx98AHxfaK6KubwjEHqEMUE64hp1YjDzfp6w9Q7EMMkmET7E6KjJkoYCRYjSB",
  "key14": "4x7z91J52BxApev3D63CzUM6jzgKrUt5NoZ8fhm1tnfeU7daD62aAhzWJuf8sSJ1R884hbLU1yGimXSZv1paocRS",
  "key15": "2Ut1KDAkn7iHTdXLWkL9x544Wv4XLEqvFm1Wf8VxqMRQn8tZkzF63txnBVFdFbK7rP9sVFcZtCNihptjtwgb1xoi",
  "key16": "5fnsjh8Ui1TVHUPFCVD36bMoRbiR9JCyoHxc8uvoMBhPuS6wSZka8YQ9B1pzE9KY645YqAbHzftsSyqem5SwG7Wk",
  "key17": "4QqNimaEWzuYbAUqx6T1qMdY5TLhWQQ6Vs75u3kjwKUHZrVc6aUG56WbdVZApq61vHhihd9Zez7Mcw6UubCAEJYz",
  "key18": "7xKz1rEKF25pjCx4crDbVYbw3ryCro8gg2QWrbxmUoWZHm4kPaYPhoKf89c7t4g35Dt6BasLFGL5ZUjhVwEN6DP",
  "key19": "31n6iKPDjWejmKjBL2ScHRi8XG1EEPdYidN5xsuQHN8GdbYGzpyHSdwcPL95CRbfyhSqAR3npWop8y4kKkRhmuPo",
  "key20": "2Cc5J2umB746M2KFgkU7xUdcNhrphSw4jV7B1ZsK3aq6Y49ALHn1dTE5cZobSTFjssRt5FS8JAgs7ZEuHjKzGwDV",
  "key21": "3As3bsbaoeP5JzpQu1EHUQcmttXhDbWzcdTJPf1K41cYEVeV1nWA7YcWo4BMPweec9tmBxt9V1vLkDM5zq1g8RiT",
  "key22": "2kZ3QgbreVt5uZmWVjecXgWU4MtkueL2rPrvUKjXbGqKnB3HAA1EaXCUbgGHSN6DZPA84GtNhkFifTjG5xmZdBET",
  "key23": "4vHL5kYyuvbiwkoA6J6TZZSK79GY4CyhP1iZnbB25Y9dc4vnjW3LNDekdSsZUExyXUDq1hF2tChcKfx6z6XhGTXC",
  "key24": "39241DRVKUma53MRomE5a1TfV6ukhK3WHyF8p9CGNiuZKzhn7JJ4ddE4YjDSBYTmiam5Nj8Lt68htRTizMH6qPSw",
  "key25": "n8173JwDFekLobrfATEiD1235b2PpgouSMFYwqqUMghDYJqttYDGrp3JNwMdE1MhS3fUopqiUQFhNY4i8Szs3tZ",
  "key26": "v5ttgNuNrfBXh3gzMSPCjxbrVbYZaGahzbnch2xhAsxVQPtmVnh4jsetfxxsbmA4ummARMDa6LSCuSUgyGUXaPP",
  "key27": "3BuQK2ABGx3ET7VZ9aiqhc1dQmJSg1rhxaonJ8MM64Aa6K5H3L4r6kgVstcj3goe85Mwrqupq5QZ4bcTT9EJKDU6",
  "key28": "3Wi5CYjQ5BsZ3CCcw6bCHc95Qn9KKXjvwfiaEo9FrXijBvWbf3LmKfdEqgHFJauMQXaTBHhtoGhy8v29X7aBKLWd",
  "key29": "4qTjdqv2e4o2Ntsi9JdDmaw3y2a5DxJXGPtXvL8F89vEjQNNDJPQxpk9PuKsx9ja1657rD6u9xNtbYUb88asR6FK",
  "key30": "3JEAvd1G6ZMHvBtHZqpePou7fYTUCfKatenASWyNgc74UgRtSpodgdvednukHJxUnbm7UeqsCJXj4eRHPdHE2VW1",
  "key31": "BikhZHyUXhquoTkgNQ5TL9j2HyfPZ6QdphzkKfhHFtAJXpt1LouMqVBEnZfMxKpuTKPjaVbgeTsDbWXQ9otUHWL",
  "key32": "4mV8epDZ6SjimcC52gvUC1vxyEDaAaDEUviCu43oHPzEereDJqAMhbwV9dN2PdSBt65cA54BXs3dWUS752eyZfJH",
  "key33": "62s1j2cUwksidbPkJnacDYrnMoeStA6YiZmEZofbSyD3skiqa3V6viEBSH1a1nPbvtwD4vMq1icoNGKXwJwhqPA6",
  "key34": "4ZcGMVgA1bNmm1vqECrf1ok9yaGMDqfeaVB1QL3wr7a5r1Hr933w3hK7mqxW1ggg8YY2K8dwDm56jRkZSKbQSGu4",
  "key35": "5S8MiUYGyrccCJQWmzD5HsnjmefSkbFW1zpPYdeVLRbxSqaJmqoBq9TwEkNDhPXvKErzZsVHBb3aPAPxhzpN6h1m"
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
