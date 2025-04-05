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
    "27HV3L8R1NzUDHV3qVh7iHjeDqChVRjmboS2kF8vP9ZobmeycmNEztz6iuCunhoWmnxLGpHJ4n6ESKc1D7YW9h9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bU8bkfoNziKLf7Q3Ygvx4EE6m7Yt9V8WWopP6djHMRWXE9FVVbnRAcdJAWzBwPBqyssmUebNnsD9VLV6oT6yARV",
  "key1": "4NddTLxKaqkDJPG8WYAagFW2mSii9u1D9BMaFuGJQeqfUyUjretscQR6pPeGTBJztbR2Lj1QD4zYLPtvXUEN7xLQ",
  "key2": "5tSssGR1815JsP8fqNwbCrBLCtjjYJvNM9u6uqswXJGeGaewekCfF6ow3cdPkW7oRmQb3ak73dsmxoPDmSL6jUVD",
  "key3": "28Hc7oo3uHy2J3CSuMEmZhoBHXDmvU9kmdXGjGhLKhVgz4PNdZDHc8aeDdDHkCBD1nUhs3XZQXXafNng4bqwY47Z",
  "key4": "3ViuboQsGzq6hiDNCYcveFUHU82tbH5C736xZHnocnxEUAYa8vqD3hcu5n6Tmmv9DTPpuJ9matyVfbWoG7EkMJHW",
  "key5": "515Wjy5tFmRvEwRB2h7Ns8EaMbzcFTbTELfLHo3bAuA4T1aixHkQbXBECWNvcGxN1CjESkCDpfWo6WMqpwLscnVc",
  "key6": "41XGQhtDTTbjeK7AB4XVgVqFkxMFaXpsGqrmFptSTzueTQpksyFihkztRXqcyrHxVrLMdwzhr9nzRWFGkfkr3Fue",
  "key7": "2pV1UBJBXqe4pNbqgCZqDnodkZmvv6aFeHShtxrdRowYgUw9seELSA33zr9tWxqviHMN7qXY3dmUKyp169xC6usi",
  "key8": "3hoPjHvhvqxGNZvxS3ZnjdumpQzRrggpucuVB9x2rTA9k5vcm1H9MG7H5qFmdrmAiWSux6xTcJoFfv8gT2CFTnUQ",
  "key9": "48rXB2J9sbvTzrhSsgwpmaEs3ChER4hrKds3WfvV3S5ASqFS5vn6d6SJB1LNKVmUyZW5ogfdRS5thCpAKDDK4BEf",
  "key10": "4jY4hyUUYJupnFEL4Fw7JJuZQ4GT5hhKMf637D1BhvpZ1hokQ1vNRG4cT5Lj7r46CuFd2wfEGqcEh4dBG4CfvJcV",
  "key11": "356GsaBWKD6nCSgNjzZZ4JfsN1Bhp1vxouCKjZrwQFC8Mm5LfzNPY7esbmbxKwnPHKX38cSovsiUY2bJYuinJAbi",
  "key12": "559fyC86NdDj3FFh8ywWhK22Ynt4fCLRkRsesLKnU4WPM3nQqSV9NYg7HhXZSZBg5zx4GtE56PHp2XGnrd6PRKAd",
  "key13": "3WUatS8YRSbshS35x6zPq7txe6N1z81xhnPYPyBHhmQ7BVU9YxxZNjuAFstxgmXWf6jfuqjmshcVknRtu8tsEnBa",
  "key14": "65yoxfTEKt8AwvneGkfXGAioxFsibntXaHAKCYJQMZkMPg8Cu8gFu9NGnbSPjZjyxK49ZCdqyWnX4MfNJ7AXCptf",
  "key15": "5z7iHa3j7StgZ5Yt5b7T413aCDRVm3bm37C2SvEba5UVt2i1ydZppgHUn1KUgc293QeLT4DDd4U4QtRtsBFyfVhS",
  "key16": "5Yo4Bn6ecAfiGfBGLT6fiVycbLKvSDcFHk8CY5Jca8UCSdGc3rT847xLscEhU8QzYZFZ29qVCuFiUg9Ko41nhS8c",
  "key17": "57fmzMUSj4nZeCJsU8RbcAJp6BB4iTgzoCGVUSZJWWCEJvMrMSsfgeFefzqLDi12F2QEzNfVz5WhX1iYBGsYwcie",
  "key18": "5YXaRDT2dzWZyobgwpbzW1VKWnXp3McHfenXVJF2kELjQthwkSAQQYmvRNChiorub6bBmhpdW46JJPcLxyVZzmkK",
  "key19": "3FEtEee7FzhiestqdFHqNFo5eAcRs379AR8myrKAWX98DPbwLwpQVZ7jcU2ScxoY1sr6QTA5ych97XKvCXH655w6",
  "key20": "3aufapgj2KUTyxDfsaSU7YGc93qLYUzZhTgUCyR1f8rPVf9KytYbmTrXBfyAGw34vQNLfXL6peSHEXX1yWGvNpG3",
  "key21": "5ERyFZekPjsQEQmwjadDfM5oM5JQBR47aETGadqxrjpTDmGLp8NMmZCjDrNTSVAPQcVMa4YDz235SuyZJiktYWWX",
  "key22": "4jy87yeqjTbYSVekUvst9xKeBEaFs246DpFS2gxACoCKRt3gAPx8GwVsEEPw8dJAnvme3E7d1BhssP89fC1NuwTs",
  "key23": "3ZKkscJCzguRKv4yqfxVSGfKATyRBo3iWWGCDUfmzi3sah2Z8zo7SSybB6qHesPYj246hj7VkVctA7yhPMUjQdog",
  "key24": "2dmU6ryJgWFjGpuPU9Gbe6FJDiyZRsTKp9wmNkrnqFx7mq8ambaPCNx4rBTVN51qEV31WtFu2H1xxn7TRH5zCTAo",
  "key25": "43X4XMYFnpPk1jFi74Z8A3WYtWaPWKdLz2griDauwAhLHuj1UWJq3J7Cqo2dfEk6P2fvbbYsw1kYfufELHs77Hpn",
  "key26": "3YXNLoTtEKCTw9vN1dkYXB1DVZEHNjMzq1nXuYEeab9s8eKDiD7NgarQYdPXUGv5VqkssVvzF8reT4B97uTAEFyP",
  "key27": "2FiVoo9RbcUCyYi4eWvXSGmc1GbokDwLLKSeYrdaCkqc1tcPGhupCBNsNk5W7xqh6rQpVYdUGwprVkSqhWPdXqZV",
  "key28": "4oXz1EwezzNLvQ2MxW9pwCDGRbq7QZDJcTKTkUqSPGJ8NUUy6hnEfD7srwgKVx6Ey9mPTs2FeLCAhueoBbMrTNCx",
  "key29": "rEAXSNAiji7kvGoLz9ULpeKnBAVFYqczjNiv86r6wHKG5m3YWYcZo6CwWFuwgWXCYcCkBH4Y1bbJfAwEqCxorcw",
  "key30": "3RrkJj2agmaF3x7sG4fjyCR6WYqpDgKK93UxAZMj6KTZc3zjkcvCeFLEjKS8yCGkrAAxZSs4WDUhmu4Sp3Wy3GhR",
  "key31": "3q7ZpJNhgPDBJb4Mo2X5k8k71MXP9tt7h93NruC5sXJmqiDmQV421Y7q9777TpPCJLsVitbrKF5sLfQ2JMQByzgn",
  "key32": "5YVKf5kjLWBmFWc9buYMmvfr74orF6uQfzf4smmwPgaCtvvoupgzEckpKjmYuRNcFysFLEwhqbAVjtRXDCV42dM6",
  "key33": "4EaKqFeREFvyoMvqayxgwc4Uz9pNAHR2MaJZrjbhjfDN7c8JRK5TA5RWYfpx9i8adrsw425fVWL3poSeE1Ss983B",
  "key34": "HddZZ7qRs23c5JKPjapWhiufDaLoFHJgovCMSSxP7DvmyK7t4ndjEJ1DTQQsk2ofNNtmw3WTxwzWS8PCdhSqwoC",
  "key35": "2pxVMS76vN8xkavoWiZiESamXWwDE46Sp3uLxaHKdX2u3dW7wusMRApVe4oXAsNiKbyYUHKWfsi5YiNBgcjD29Qs",
  "key36": "4LZ9rFh2xfnD95tedUJkJqUCte95yvjXVTTQGQKW6mmh5yQkHrgKvPmfH8mjuuiB5gTsD8EY9Ji2rRowcPbRujY2",
  "key37": "366zzrVdcAiA9QKHCLBhX6Hqde8MAtrxVHNSTB9Nfkn8jLvfXbudLTLz1dBLTgrEWYW9UZc8oxreRFwaasNwy2Qd",
  "key38": "4okRxb8ibVZnoqVcALPH3MpW6G9kCrjcgaTt9RGDEc5q6hX68jbtjeYD9Q8RSVDVgtKk1wvGKwDqvvcLsCqE9d2N",
  "key39": "3gA3ed2sUhira4B1QG5nbM3AWBCJh4k9Whzt53u5NL3PhakYwkHYZ5LJW2EBfqqVk8jW89GyZRT2dwZd8biJP1WP",
  "key40": "5QKLeFKk6XhgJUt6JPejfvfHEaxhn2gU1VKvCszeVaiqz5idEiQZ1f3fHEvFqc3XBpzy14sBVyTzQvbfiRNrFGER",
  "key41": "4go3197k1Hu5fzVGmpXmJNDgkEZwVo2B2yWVNGJuX5Zx5CH8rUXAkVHn24ngB1uJY7EjTc81z43scfr6ew4SMNz8",
  "key42": "5UqhRfgLyzMtwFPw8Tr7XJuuwiAgJ7ZP7u2sdffQg3asKWxrya4YxZam5qcvLEbEdwqyiL895r2JPAU5oRhwcRwp"
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
