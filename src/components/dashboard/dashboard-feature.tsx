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
    "623NaW2vNpzkfnEFutzhdPMxK4U5iNVw7RcJnv6hS62N4rRHdbC3axwNxzLfuSxz6EsLk7FLGMMTXTGmKHp2Ctnx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ocR5gTE6fEF9viE7sU6QyoArVXZGbykjxNMtegrAjUKYwiSniBDYkMEnehZEFLG2UgaqNydTRRhWap2JD88gids",
  "key1": "49tdrxcqMEytEUX97worwen7zYWv6vqvxw9QX4BE9RkuzwKGvjtcmxZUJB7KWuySDXq8e9KjRZGGvF7Yj1XSLNnb",
  "key2": "4Riau1QKoSAnqfNoYb8JQMwpXhjrUVvVV6qpgmLWtoqfMHATaM9zEiZXjCqpp6QXV7jpi5nfbJqfCiNKsocgRsnL",
  "key3": "2RaqGGKRcC5W4mRsjDKEdUN6CXfRcZt4TTD3VVeqSw8zDbXNoWMeB6KkNuvmEuPm63MXDbW5MRcQAJJwvYBYnFUR",
  "key4": "3cAVrqZ2rtC6Vg4LC5RgRLAvNCP4U1JJvosyGkv8MSMTsBjPZuFswkf3gaiwVVSsJrEAcND9yExNbgKmyFuXt9o8",
  "key5": "36jx24ZFGVhEsjmZaHNB7478EiRw9P7Z6pZS1CJUpKXrqF2y5xuXzryxYRaqp9xxH4wQBE1LF19LYVu2tLmtfD2x",
  "key6": "5s2WtH2L95rK5fA7oyU9KafEuUBgkHjfnbsY4GGDUSWhUgWN1b59XgKktcH5WRxAQq1WijHtaVAX2i6Li7XJ9JJH",
  "key7": "3ssWuEpzurwFusMCft793cuo6Xf9uM9yVtwjLYwgR9H2yGzo5gGWVSiKmD4TWv1K78Wi1RmMxwBe6p29L6KoDKqd",
  "key8": "44sSfC8LSJiFeVH82jbATpnhyPvmZpcFGzfzzmZxRDS8rU4cBax4E4MVYTCSNdpLEmqxiCRDqC2e5PKBc9hXGppz",
  "key9": "5JSreGvX8W17rieFE1mxujQzQPQfx5DsLavnXuPa7xhxh4WshCm4PJZAt4wnUZTmbfetedD8RaHKXf2GkZiNd6LD",
  "key10": "4Jfr6CxN8ZbbCw552PEcEQ2JHrD7E3DuLFJkD49conws5xNuZCF62cXhX1Wg4f8m7N8xGUAuK7uE7KqgMn1SPskc",
  "key11": "3nSXhK726oNbTk4FY3UJxf8Gr33FFbZreLe8H3zaR7BDhtB6w4K8VjhaE7FxSJUzVkaMJu37JihHpWNebj4uv7aT",
  "key12": "4JynYA244HDkFFqxkdPiarpFM6k28HAE3orotYhY6fAFW5XvbvFaUT69BG6ZJ9vpfEoJCrnuBnRV6tPa3KVFeRQQ",
  "key13": "22dRtu7ihWp9cQMeiDK1YbkDLLRD6NAoBw5is6PHUvLmPDdaTFGzSSCM12o55Mt924nch34ZDBrpUA7GsF85Sajs",
  "key14": "3BvZuFaJczRLXUWaD4k41nzLBpUHYsaQhDh72pCqzt7hi6wgVbofnLCx6ZhuvtbT3FedBGJhKQt9mK5HdPBtEfoc",
  "key15": "27mFHa1WP98M7eCRFefyKc4QVPdyfSQyUdsh8qCciH9ZRedKodtPrQHWepVRpRZVke6WfTDgXi8a76VjZTm8uuMM",
  "key16": "jn4pNTjE5TckPk6F4UUNpKqY4w844Wpsr4wkki8raLhA91kreza3j9PVKYEgCzic75VzqT4cMYSxr1YyWYCU7Hi",
  "key17": "26x2AYzBW7GX4oq6jymxrMZkqDpmecyCy4Ui4Sxz5Ccm2kEs2j7GJThzRPZrnK78a4rV4W6Fm8Umwd7XuSn4v9ju",
  "key18": "2d19iSW84RufgQFEvdLTS7Wr87nGXrh8sXomLqmoHCfResB1JXoGp1n9irCnoxpTxMwBf6pu8bpifCv4TzaXHrr1",
  "key19": "2DfihfWTXGHCQHfmGbMsk7JVtg4hMAQLc2nXJpbpTJyMDTW75ZTudni61oCJmoQ7Yc8jNX5LvGrAgAseD156zfji",
  "key20": "55rm2MQE2p1EV1h7x2bKc56R1PAykUER8zqcBom4ZApanxUEirD3pfxqDMJaV51ZDSe7uUEFviGB1TLce5NYiHjZ",
  "key21": "5WsifJDUxt8nq8YNgZg8k2BDjyYYgWBpYGHXFjHgKJLXXDnu3GViXgDu6g5k1mL66QAd9HiVdotb7qXGf6feP4my",
  "key22": "3kN7gzsKhc5fEU1nDwH43t2PL7JfX9GxB7wLFvxS5nECdwppdXLr3wQo2JSLkDfSj8c4ZtT8bQwUGY7JrRoE82LB",
  "key23": "2GoFKu8K4LjatrrvSe6jCV9oYMrjsZug9KQhAeT5dQYuV6QCQnBJE2PkJkgxwaG5KfxAkxES9yDca65tfx1P86G2",
  "key24": "2XdXKi8WtQ9W1eoiG9gioCKHHqpW125F42xC6pP84MwEacvPVp9SX5522A97YYqugg7P9vojxo1TpZyDAre2xugV",
  "key25": "4iLwe3zxBXXzQgF8U15Dh7AZES49YGHKtjyuN72WpUUuNFNkjSGDvRo7GZtXKNtcF88r5mHvxz7j2zhC886akqSf",
  "key26": "5EM7nmjERxVMqCdq3seuUkvYhWEMQ4zScRPpNVc87WQsKgt59GcFMxqedrxemXfrxw5MM8AfaCfRLup4JKq6vsAh",
  "key27": "4gmWkvGU4yLLKcdTVkLemzCS2w6zrL7zQtAM8P3VtxztVCNMSi71U2FCrhbdSvmVv3wcmaiLmL489nZAdHpMV25i",
  "key28": "2f9iMt7CzJfWrj5uQ8D1VGKqefYouMn7TRvbuAE9nqvy4b1FxGE4RNVr1uwgEH2kSuXcwZcL1tZCkGLAnuzNwSnW",
  "key29": "2tUkyHXWikS4ADdtPRX9u7DPFJbTVSr2pYM7MHXHBrgNDxtkRNjDsxaPp4JVBCqe9Sy383DNZngsdgMvBLNSY1E",
  "key30": "E41cwDHYhm1YSrtpNXKmkhVvdFKd1rzjChW7Hdg2Lay9rzPXop5aLuQ9FDhV4jC65hsJmUem4xtfz9EACp98Xej",
  "key31": "62kkZjg8eqJHXhM1LiqB8UKw8t7J9dyCe738XAFDSiZ3gYy3BnCti3JfrLnRTpjh6EZf8XHt4WdfLrpMA2oetJ45",
  "key32": "5Sm84jtkWr5dWcW6Nf5ZjuhzB35g7FnEMwvdRCr5scz7WmwHFMopwVCyUEppnPaxoqkeXEGGSm9N49eZtZ825riB",
  "key33": "3bxfYyfE88osGGgW3gshTJFN4ZjfxpijGXamq1Y4Farqf411sMH5RpyHM3iFzGfeUUq79jy3dzN6UqXx3mfjUQQp",
  "key34": "4qa65hZVhnWFFyciXSHG3L84tuzpSkmgydpqHtFmJZhTA2rhkoTjd349rL1GAcF8EaXryXyLjNecKNUMM1ziRywk",
  "key35": "26igyXGxbYsu5Bku5UGc4ijkTE2J2pQSNUrA8mrhxvdP8tJfheU6zxszh3cQv95iNLtyN8YkPvAHqraSJET1jqWV",
  "key36": "2pE6BKkpzNLgm3hKNinaKV69Cmts6cEwy3cVb7Mh3DtDevEc2VodJjKfvP6qJ2j8j5QURXTWMi39svUJiF2FzCN4",
  "key37": "3YRg9rBr4k77DtBQTNrmSmXKtGf35PXBp1MjJAFbxq87LTXCpATNAbnBjdnDugMKZiYLJhjh4GFnpRWpKuJ6RYkR",
  "key38": "uHqhSGjw4hUd7HKCEvqgQ1fSfWyH8QadpvCk4VCu8RFZet22MLaEiMS2wSGKjTAWikLJQzSScvUs1h5GrYgWjwd",
  "key39": "4oUCVpMxrU9EkDzHACMNtMMCoptk6cwB3ikxnTFLnW6BumM7PDd72VgiZoDm5sQhYaz76D9fXCpYk6epHX6yDS1m",
  "key40": "4Z6HVWusfr8KgvT8nDoiKiBcQchX3tfwxXhY3ivyPg5H5sBFNQ8NaubjnKsGXQutxDDCCD1U9aauM5TWpcwfdHi6",
  "key41": "9xhJ8BsALwAq1uwxwE4XZT6pTmY6S5dMgACPYpNbjaAtRK5JV42Yhh75sXQRr9nbTs9qKcc4BTmfU6u7MwVPe6U",
  "key42": "c8HFeJu81qqdjhL4rmG1AWjwxWNgkeXcY7L6ch7HBLcfm7qtb68wHALrxy2g45d9NsrXgnY3HNgDL6vLcJ4LX3N"
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
