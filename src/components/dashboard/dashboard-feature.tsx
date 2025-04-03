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
    "3uNLHTTQyjydu2rUVujwwxGAJ4NZmfcFBnp7heLkQ6R3SAPnwFvAsMGwMvgRscJcu2KTUg3h9nFja35Cgi6h4ibm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RiUtVRHLexBoboWMSkUviKgwBSzCHKV6ivZq7g9CcxLaSatjHUKGNuNyaEj5DnGGBViA9V9Heu1VWnfFGqkf5B7",
  "key1": "56cg1sGSsEQVnH6LjxXnwLbTQ5etMT2LtCqn7aHwy9SUw1BgLTodAnPG8uU18cAEWuYpniCkmF8mhuhMy21h2UEL",
  "key2": "3KNdvDftby1zKSSC22VkbvJPtAhh3SyGNu7uD14DW8Cy24EhCwBQcZa3R143XYFs75kSFPr3J6Z7gCTAjNKA7RpU",
  "key3": "5yE8trDNSHEokqCnUvA8hfr66GEBX1KxJNsmgdiot9xSySGMC94wuvuEKYVs6ZMwGVaAPbFaDcj1rocgF5WqS7in",
  "key4": "22rvxDLjpiid7jBaaM9Q7EqDbp3GktBFSUdH2m6uGpc4ffzJXNvayN121D3AkRGESaAt29JxBGjZHZRz9dzbvhKa",
  "key5": "5B52t1ioeSZfgAtMMu4LEfzf4fCgNZ5fALcXoYXXa4NVGz7JoGSuuPf3K8XmVzF6fpJtydxJ8ysQASApXymd9xv2",
  "key6": "4SsxmxQaaDYsvnvP6R5gfvEmvuLEmCJtYk4zLoC7MqMeFWwTwdAe6TukDncMarK9vAQKnRaNTbcFJLp6ZgGAsJ3g",
  "key7": "3xgrrxfCfhgbRGuFepuuW5TVXSF2L5sXKN6q4Sf4HJcqvaHVme7NPW8B1RKgKn7VnCH4rkZ7yToQJVzwe57NiP42",
  "key8": "3NZvrFhRKKbBY6Q1Vu5HBfShbJmZvxzJobgbAV8RD4emmVP2hGMB4xkCo7418XAtqeJcZ77oERyvBMghdAzEKoe4",
  "key9": "3RRcmk6XgANLSCGYBh8bK6eeuZ12ikhXmiVHrtJEa8yaNzJR8TpzEAepPa1Kav82Yh4DWbKp2A2wUXVh3PigTiYT",
  "key10": "4h7ksxpnMayHm41SJAkiMSk1X8CAQWmWfr6WYgRJyCgzYUuefsJmeKGC7JBdujHiW6rymaFR7zGpekrR14pQ3iZ2",
  "key11": "3pFQt9W3fjNNJaGe1bdf6qySdV8KiRKFqD6TcfzUc8fB3YrCQcYiTC17boEwFqPZi6wv9pZYLvyxQB5SvV4RoX54",
  "key12": "3885ag8c6w26d8u8GrGeWaPGMCAQXetkZ2w5htcF5u52YDWEfCbTEygrewWS3sCi2BDikAxGDCivqxyKo7Y4nu33",
  "key13": "5HToTQ7zjrcCWAxzcvB97KpBKL9BnUWnX76wpk1JR9VtUWvXDUwUfDfGVitGgAJQsWPYbf571mTfUc9asTdKiyZz",
  "key14": "32aUBtTurKSixEsU6k4KrTxSCK3v9zXyais1V5CDQv3GGQUMYhpnSaohqZsBhVb7B8M5zhZMiy8hPXm56oKFq5R5",
  "key15": "513Pcxe4whnZEnXNX5T1oQyiHdmhSoUQTXWqt8BJvhkLrGSQTdgonrijVb2nH5EomT7xWg5Ht4b49GVsHbsAdfJ5",
  "key16": "4efugq4J2PyuMrDG2YYPsqEaMGLrzpmMHU2Umb8dyqcwN5bD9trJ7DK7m7qKnaceT5w2GKobat1ccH7jUGjepGmb",
  "key17": "UibWb89PLK2cm5Ktt2JfHaG2ErKp5Ut2y2jcr1o86VqJt2NmTaiaA7pRvMYa8tKNMWKFE465Y36FfjhW7UQtovx",
  "key18": "3SwkKK63ZPq6JQ1Tru581nrdJDFyKrktqXABvsSVQ3PwPqe5Ti2JFdqPVp6XhNTHwaPPE9p7RbYAUNE2x1etSWsM",
  "key19": "3AwdzmN5MX8YdVhVLa2yMYwRi8tp9carbZiBusegB9WnSwrckctwbbz6CMpFZqpstFs2urrsGiV8TNJBgtAvdWbC",
  "key20": "2kvCdd8Bxqk6q2zv1G7nqkf4zTRhwQDgG5CY3fKG5fMj7UU6DCDt7JJPEgatKp7aAAFUC1Ng72Gqup4Pnn7inhw3",
  "key21": "AY645Z5hiYe9tjeLg3AszVM2PwjpKs9A1K6VCc8ZtomUh2wp4KdhKV3oP2BQX6C36VwDYrc9EwaEkKVN5nbuDz2",
  "key22": "3YfWWZz9Jfz9DkKQodupdGcWRHTj74kUgh8zX3RSMSNBzPqoDEfnr3cagUKg2WahNP2N32ZcY8HttXtmMzFpmGPn",
  "key23": "2y5h9UeJjcBSqoE91eMtbRLMxaL4HBX4KFAfm87L6yGMcTmc7GL8S2heYXk7UpMWq5nNJYj4s2EZntv14BxW2XNs",
  "key24": "4Gi4BeGizgDLCrvEs1YQdz85QctQvz384i6vc3GTVkGX2tZYMd5yUUautkSCizkmAL61z9QSjtVFeBpCWfxXtpfT",
  "key25": "52xyRQssAUddTb7m8w9oYLmVTPXBt4DFQwqf66wQprgND59MxkAJ5SLkTtTBSM7LRKi6kTgemBw3Je5tZjY6kafJ",
  "key26": "2qd7QXmsMiLmSeHhHebNoNeAgGoRV5tk5DbbHq1Q5Td6ND2mvvjP3JVcNvy44ncoFn5EfSAhVFE7tMGWa2vbd29K",
  "key27": "2uD1By2xzHbBREdHiwf4k5RNeSQoynBEo4VUJ76248ECVRFf6ZPJkE4zw2vpWWEqPeLiNxGBqbrSF6isdhu5C882",
  "key28": "KBtNLSENswJNpcxyXcB1tNCKJ4XHhNPeqtLgnsDDiySC3G96rQKW346pcRei6jtLrf3VBjsMeDkEFUynTwWCZY2",
  "key29": "4emevcsBhPdgnnQFY7iqumAxqCbGiBPTemnaFehYkyjPAqtJs5vm2VtfemW3XoQSEnbBGrpj2VuQ1s9V3U77fhVQ",
  "key30": "y9MtRmfZxCGbT9wV8ZdTJWnfmynYjkkdgihz2NNtXNzrAqprzXaM9L5hrXVjTaQyyvvdjrrxWJay2BCMFr8o5Gc",
  "key31": "45hRvjVgAZu3KMHBQVVUDSwnjEv9FJ5y9qHva2VfouGzp7c77BERtwzbL4FucMo8z2wFiMRdHmz6k7piNaZoXk9i",
  "key32": "513nYFCysYaBtNw2mzoRe6PA6v5uCbLXScR2nxtTnyS1AsJgs5HHEttAURVMv7i9ScYQtvxNNv5o1HaMULRLGGJ9",
  "key33": "5JV1wSiUcmr7JeHkymW48RRVbB5zHxtqpVYs8jqcMENeafbbcKNyJPFmhkg3xQbMHrkB59SP4RofGTckDhenArRW",
  "key34": "2KC9d5yGguxrFydcA99RDxZKAFCo5sYEMQMGw6GZZdD4FCRbx9PvQ643v52vF46EEyNEumcyngfW5BYZA75Y8wQU",
  "key35": "jxVtyrxftxNGZx3QTUhuGWqipkGZvxXhJRmLiVUm55p8j6GubFv9Jjs5GtE65wJx8EfqTCkvShHWutXhCikxayN",
  "key36": "ZQaAnJVmXy97uQQVfgMkGnGh62YdSx92AhwTSECWChWx6cu3Xpj74j29JESNmQe2FwCqxszCecAzAAdenD5eAAr",
  "key37": "4rgWpwzUJDYDqyPQrMupGyp19ZakeiPPnL79npfVDxbmjfkxU9JmwGX3oL5yeNz9cdaqVUBvtgqiLQp5iuhrNnRD",
  "key38": "wnU6X9T9V11kmAnEsJLJRSKNyoY53dixNZSBadFpSQpCt4yvuiPubN1YxtdeDADKWWnyAZKaaRSmLXxURPWFsNC",
  "key39": "5zHymH8nqDTdQBf8LqoTfaoHcBCnhNFh6mv3gaMXoxdagRSaFhd3pdE2164q97pm8AHjVgCuXRE88Rf11KtYUFvr",
  "key40": "PL3tN6jbKydi8wV6x7YK3Zfbgvs6ZomyAjs3SdLht4cdu9w9WfxvNUCCPtbbMoUtFZ9m8pJVr6ZfYnUetFUhfL4",
  "key41": "45jprvzrentMpgE4mViMgugtSGj9oH8xBFQnJ9T7sPSKtA4BvDPZVcyWG8R3oiUHM52iw2kaopQ7yeD13PcYGwYD",
  "key42": "fRM3CiDAL8pB2AUDPCj8rGvgDfHHWnhrqtxB8RaBzmJcQvckBEL9QojwWFqitZdu3hQaZnwZqMM6RT7tMxQ8yA6",
  "key43": "CxsfVLJXuSBjks6ku3PnQijwgGyK93sEiRzSQpfpkijzpqwCJyg2MxUUjBr8Rqs9txzMUXqtm3Hd43zTsM84Dcg",
  "key44": "2H9hZYtnp4W4QhQ2HeDT31UcP4bgnHDHdWGh5UCy14K9shaXjz5KVSv7573dwyCTdUTPSQANsGKEo6tCdwfbNTWm"
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
