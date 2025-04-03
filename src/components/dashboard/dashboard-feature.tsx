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
    "PJaxq6zu4HZkryUZwkQ6BMnTvzEbp273rSkB2et7utJmoxdwByUgE4xMGPhNEStagan2jJ5JbC9n56tm4iVrNm1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TgnUJFNuDqVv5Z3Kk7SZ9wjfXfi5Q7kM3KDnyYKnHj9Bf5jDBuB8zNkcCEtXvVdWv1J6W5ZpaPuRLw7za2sfXgp",
  "key1": "2e6VKsnTJt1pqpEBi6b62PKbz9Yv7EFZDGLr8oycr9hVnXzG2Gqj6tCt6pR5T32oauiEH6PCMyxNfLSX7gv2PYzZ",
  "key2": "Cmav4gU2of9aDdy6H2Uqa7YeZ5iHDcqVx6MxPLrWB2QiVZH2vWnQEWp5GdT8PyxyP1bNh2NHRam83EcSzSVhEV1",
  "key3": "66PGvC9sQ5zua48iKdxHQKZxVLc5m9GkwPu9nqUEMbXuC52VLo4SB1dsk73dq5JdevtFAEsAcWv7xtUdG7rT25Qw",
  "key4": "5WXEuQf9f9bfu4kJA8ghfMmtJ4Kaj6kvzf4JoenUDgvy4ccQLtoHRYPLDwkHmk93b9cJM61ou5DDppNiigJMvF6Q",
  "key5": "5yWQcYKfRwTmm2miKjva2Q5rW8qT9zRtmFr4SYT3GJR7hf9FuR1UvroGnNrTrG8gECadUMwrtPnKDhBKo3VA1N2T",
  "key6": "RdXx1hRe5sWV69uSYSjiuopB8EeHfDM8ak9mf2eRCgDKDfVa6vto9wufpgPahjEbbd7Qad1B946nxrnoKhqZmcm",
  "key7": "2TuxX6j4hHXGQC26m3mDYwpCMLcnN1ZmdsJTiNSRTKBh8kEbKBxdcfbc6SnBKN2zNaCpnAp52prX2S5yZb4cxJbB",
  "key8": "67ggvCXPQiobsHUnhwhjFSGYEdtWTufcVjcTG1962yhrEfiCJT7SyubRPe4NSFdgjz3aNLBh3Pus2NQpUEjBkub",
  "key9": "3FRNvM2YvSpb33CytQzq9WXfMxZm2rs6VHo63Xvx6KswrJXQhp3xHtLf1PrLDYmi6KuNJEtXetw7ZVtT35DHjmxm",
  "key10": "3Wxp4qjTiPvCaG26xkpCmemN7Y5Dhdsa73t6ox4dPuDjxWupTbWRffabMqgGBf8s688Dro4JG7cn3Y8SijBMA31s",
  "key11": "um8sb771PXiVq9QZwMPTwhKkULzCt9MPREjS9BGhxW6gSauA3h4AVW2e7qxAAWmHrTpK5kKxYZMCSgnxCuMGqwp",
  "key12": "GGCL88H5zeAerR2RafDxyjhLS4ZAYSqstEdiPBfJPgXds4xKq76uvHaMYkusATTqVm9TEjSY6RZpHW8rnY29z8K",
  "key13": "2zxiuuz9DnCPTDqGLBkhzhTwi9qaPpXtUXPoKnB72AMR8o7zeLbWdD4DFWq8D7HdceH1qtDnWWqAdU3u7CcSpSjh",
  "key14": "PbHzpfpLc6mM9VFaZWnSUpZSkSfbkoSNLGgXdenJocY86ejdJsFYtLSAAtE1WctCPh6xUMtoAw1273g1HV3e5jQ",
  "key15": "TxVeFwfjfnfLppo564Thcp2b1uyr27Bia1BvWvdcbWLmQqobuYmg33Lz6jp45j62HwhVSgb4CcTCyAawJ5qWqnw",
  "key16": "49Dok7p8YSnLMicoCuphYsZSVhBBVZLGiXuCyPJpEtvyxwSxycUzimR8jccPBrKHnP6SMnESC5HxxqFW5ycCoT8k",
  "key17": "fvUtiBacFqNtJkeZitiDRx4R2MdZtwwXuGZFcDgJ3gtL7SWXLKKcRdP1ryit1p4Yp7DPBtXiNw9D3S3baKBv6oW",
  "key18": "B7AipmjNNUz6k2WtkVtaeZ2vekXgtt39uTzfEa1URTdqLTtcHNaazGoUhdW4jq6eUvqMWYWY7YnukEZ81y7Lv9y",
  "key19": "2n7nAquvVYFaWdfMMBR1whUaLQWJq8qvMKUH1Y2MYQupTfhnYmxH87ftusnPhfw1KXaLnjnm5mjb8hkkbv7R4xjF",
  "key20": "467NRpXLF7Gx3gawahRfwTrgVPA8fhgYbZDVH4TxsbRP6Y3P5DYLpq9RExE4CCiftoAHrRfDnc1VUjc9MJFaQXhf",
  "key21": "5hB8ubpTmL6XV1BTGECZHzS5Y24YL9oy17P1vgToAfniD7B6q7ZfLwcxBq7D7yViPFjVTXtYKjQ4RB565DrTV9qs",
  "key22": "5kbXtx7TH7RJsyLSHfsxTnSWXpiBAByPrKSdAzV9N3kStjqhvZCtxXBbWQrjfjupcHN9YdMVXjZJzrwR5rHHkFKk",
  "key23": "3A2rGetm8RbhD14UrwDYG13pgLpZHDrJqaiQ84kiTH8gmvxk5w4qLaxLdRCTXexiNcVn2txs2VdWdVyeCSkxdNra",
  "key24": "XtB7EcePPCZ6wLxM6G5SdQrZESXL2CZZK6GPHQfkqAdR6orjMYfGrPtLaNxguiimAwYy6rLjGAqWyVUobduGAs9",
  "key25": "4e6Br5UtK2Hf5AFx2GA5reYPF1ow4NvtuQpUs3qdXn23DGuSDNtTZD6iGTM3hyWj9564BsjYqc37RcvHrGLE7LY1",
  "key26": "2U2rmVqN372Q4fZYH5n5omRNHPtFkZo9QKXF3iTmhW9XgjSqEh3q3KvNLecZDoLhvEy7brCHoYYWLVqEF8CXDPKi",
  "key27": "4DecRjAZVwgpcnx1N43BvVToSSn4nD8K2nEVdw59V33hfy85f7BYPagQE72KXEYu1x6y5gaUUb7VuoRDWL5BJCen",
  "key28": "dtFnof7BkfxFUo5kY4sbdV11jMQaBWWEzP97T39QrhPdQtJs8k1dAgq7T2xHdL4henjQe6q8UieK3NqfepfZnYE",
  "key29": "2PVF8U9yGTWNEh6MvwtERU7qSasd4EgfYjWiSdJPAaPZbENt2XZhR8kgBnRhMwXKqPTsG7YYnkJYBgS97J7qXAUo",
  "key30": "4FgQ3ukxa5MMXquqff2Kzg3798UZRif22WTSgCWuX8ysWMEUZ4PfEoD9YBgEZhWbBPtCF4EehDmxTQwnfd6MZpF9",
  "key31": "2DjBKCaF2ZvvsDAx6CDaYNLZkqrjXzjotXx5K59RCrzv9pX5UNC5aiuiUwHJtevvD6ZjjwR5o9vMSJQeRpY2Ch8B",
  "key32": "34MajEMqbChVXCRZpJbtABgo9VBWVVokw9dxoi93c1ciQ7Tu5syxVD431CE2412fnLaQZkMQqbXuVAG5TVfWC7vU",
  "key33": "29vmMwfMaHWpTipRd2DiM2p6PBYT5QgJK3eSu5guPHEznKFuYp2ZUYZrCYJ2ybyCNWuAhTQmQYvD7bft3goyYfZA",
  "key34": "4Bjt3zsKXuePiYkWKqbKTrDrUs3kcxAo48Zakf5gaNXhKTXG5YnwzyTnqSjMcaaSgzSx17PgappcqXkJPzGjVNku",
  "key35": "2fMVVThhJha67ceCxDbERJb3723cxfqUCvfBXGW1WfzMbHP5GLjW5Yi9oEY1W8kDQnnVCXbSVKw9aThGTfyZX1EG",
  "key36": "2uJW8zmTCnh28US5b5Tz8QLbifKr7fqcRbSewqVkNjjLS5NqziXesqGx8jB5oKZYfci3hqqP1pm6Gnb6iWYgoZ5d"
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
