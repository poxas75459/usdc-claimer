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
    "5ggey15FxkwRzr1Y3APJbiCE7rBcSuYmSKZrB3jj4L6aGxt5qE2nBH1BiXxBJGKC5SVzU6oxNUWnTfQGgb76QNqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mg1QoVknb9UiLKniVdPksCSbRRied9VURVJcvsWFK9PUgGTE8vM7J3YQmfdatJCexfcehygnaD3asW8FyHJuw3m",
  "key1": "45ucKZi2tZFacybM7Bqo7o5TuCsr5s1R8Uun6R7BMRqj5ZZkX5UaQn9gkouh1TpWVNqGxegAECXvbT2AjQVwbDvb",
  "key2": "46T72a8WUf83g9Y1XGJpTDGvivnYKt8YDuuSj8uHrk9aYPykSp6SzMDssPzQJFg9uRiHPddpGQoRgnd6ntp5FmPK",
  "key3": "2WYqumHmbHfAebQ9abrMwWZPZk1FjY7SXTPuFQUG5eJaGcqponkBD6NvNHnxUwyru6wrz57iKVJsT3pCG2bZfXEv",
  "key4": "3ebavqNovEdEV8b6nJaqehD7fJqiXKbR88Z6YbksBXfnFNwRw2dLDpNa2uvy3QWoXq448jH5VhdYJ9suEb9iJDNR",
  "key5": "aB4MfmS7usknUwmaFRPxk2QiwgsP61yqocT4kt7AWQ2azEqY5zH7cvFbk4xkVWaUjoTXzQRr5VDWfgyYQRTmhXV",
  "key6": "5CJmFcDynA1nwmYqFdLnZeFmr3zq51qGauf6UYzxAukeonnTxa3LSBbCrS9wpRXdY9ZwNgGvMTMoqfAg2HHnLDc5",
  "key7": "31xsU162Hss9qyvC2FHQuhayspH3VKQRkZdci7qEqRSGPQzztf4TteXdakeTaNKZxNojPyznwiJU6jHcAiKYweww",
  "key8": "44WknwQkBaFAPgaRfeRpvLUNcXUNwDuwb1NDWCBd4FBcct1ocw6tE22Wqo2xNC63xWMDGb5bpnLqyWeoX9voJVYa",
  "key9": "5N5eGGRroQ8XiRhRhc5kVNL8tVSbkHQDd7XsxUWnP2GTEe1KjktuXUkmFwz9tqFSPtKcENfrT62Rov52K5MQBizp",
  "key10": "3fNJWyf1pn79smZkF92ecptjMfFPXiJ7DYnUnQL71gu9YvVHadPFQgDYdsvdiYrmhuf16cq1ibdj1nGp5SURVVkq",
  "key11": "4kK4XnmkqkVi6cNHJ4m2DEPZQGhMWQJ1PuLn6dPap7w5st87ma4pnBDgXAWcbbc4ntSPVi86VbTAL3RLf3QWhUf4",
  "key12": "3cfV6cPdbZYzaSf5Fduk7fc6gv7DfUXjV9dbqYwfotkohsHzdGsYqEPqQjPCH8vPqi14ZKeTmotzNuMpFvYw59Rs",
  "key13": "7QEpsfsNwV1r22Jgf5qxry434PoVpsxqeuCjhzPEhgshr46sAqDuPWdFhgVvH2wEyibTGA7GRXUgRZ6tgzkgtBz",
  "key14": "oCPgyUS4scW3EHWMJhax7C6q1WGtJs5w6vDiR1VmouyFEmuprbALDeaFWS9SVbLgmtrBSLjMUriBrR5eBLMrCtZ",
  "key15": "2ysu4sjnQh89iUyybmKKp7PqFLM8J719XnJKYAgXLj7VNWeq6CMHkY4WdJK9kjrmEvN7aH1vLssB8WzGJXrHQJf7",
  "key16": "5tn4vn81ZzJYS63pbCEgH4ZiS5BJMn1gUrkUf1fyhR6msXAtHNFfrYNks7GLJMPRfQZJdBC54srXNrLeGEQM66n",
  "key17": "5eKKW32FuCDp2id9K6hVk8WpXoV6jHUiFtqNGcc2wU55CPTZMBHPRxMDrLRQrC9iNBFRzkpkx6e9ofAffGeMes3a",
  "key18": "2tkU8jjY9Tg8GCp25hrWFj6VeFJuQQXsyvcoMK9CzVb3KjBgu67NvfL3mVXUeUpcRn9BbnpbwGvabXdRwBsd5dBc",
  "key19": "5gj8eTcgQq1CR1ntBHeyaXaoKNd4cpcz7SvDf3F9cKVoYyraeKN6VDF9g4kj1NQ4Y5Z3oj6KZKBpz6pTug8VEgwy",
  "key20": "5DANFZHR7pt9uECBz1kc5KkMtUZcXVRHDRGeEie5PsGdmtWYDKgd6QqTsfbMamNPkuam8Bc7zJtV8CaN2wjMy8bE",
  "key21": "4jkjQRgZoi9jz54JQ6PrqmjEQc6Khyc86rbnKpHKXxCao6PKkE4dG3CNbnhshqZ1FJvqLarf9JVLJtEHE7um25zd",
  "key22": "41qgstCxCwBTp735jHoRXQVhZLC87mj7PGW4PkSBsudkGSBH5jx36Vwm8Br69QNs9Mj3PK4WnqZ6R9o2ReqGyvDM",
  "key23": "574dsfuLjzDQyf8mKQSvJLgqnQkVTnfUctnsJFmpUWj6TibPSQq8va96WxLTttwpDcrisc8D7ch9M3kDB8uZBApU",
  "key24": "34vqnR76uzBHeoqB1t4ykCqFigX57YvQixqY9Asg19MwoWyZ8zQ57Rsz8GK9rKNnw7S3A7UJJcL4Li7DZbpdDGSj",
  "key25": "4zNDyG4DPQAiPUgX2otHeDiUeQeHmURGdLEYwMq1vhm9N8qZuzHm58n7wmaMbBzS7geQoNi91piorKWYK9J145af",
  "key26": "3t6PUnAPgkwCNP4jq53C2uzqYa4LExPkMkqNssUc7VvtZDMjHQqgzEjVV8yM1nyPzBfsRGt9P4iB7V4UiDDvpa9U",
  "key27": "21GwuQBWRWhsb5qFcGVzo1mMeFRwvVY2o396ape42E1yQXmMr6jrcRdB4394P1kkETJgbR4enE6zUACwq6goFSQu",
  "key28": "4UCKJ74eYaXG15YtNemPtpx3boUnsktXTeCAi41MdQacmdwSVMt58YYeFpkGHgRdfspihb1ZJNwt4NsK7SRTtdSE",
  "key29": "5xntJQChdZKoF9w6rbE7RNfXiJjmwCM2ToYZQzEQJJtaDHs14hGVe46aBv3gH7pakXYtNF232zJueBwn92HfiYDH",
  "key30": "3rsGmE9CegfZ6Fz1zivJAhsoKjp2JLUE9n7EmSNbHekzyAY96qJsUFD4emLcHGiK4xXhDwEic9KG4WVjA5hnTo3b"
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
