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
    "2nrCgcBztfd53n6ZPjzheL1cTqtVEPBvgdohPw28rpTVrxCyeXFQoKGeHUJu7VWHok9KM6WjB1oQsUDvJGPaqWXW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31EKEDZXkcq56ig1X7qL3upwEhQs3BeQzQRD2Yp7aMn2Eq5vELUy7bVUYLrYT5N8QnjS6xaEtQMi9EBAwW38TiL6",
  "key1": "2Vtkwa5VRs9JeXM2zZMVdsBgJS5jjK7mc4sWHWgU8siZvC5FTDE6dtCWRrijKXrmMku1Svu6fB2gQZa9YNivaJYu",
  "key2": "2PTqqww2mz7H5WtiBLL6Fe7tpvsuCsiprYArtr1ET2GYDYZBuxAyncqfKJf3UxPdkW6eSeDgMgGHU3ZChs4h6DDK",
  "key3": "583e6yFmrEkjvVCnymQs2u1r6cfxeykXRNB9Wwvyqus2MPmQVvPhXxJvjLy65X7EE1avZu46SuQvBoqfgXsavDgq",
  "key4": "4KDYc4nU21TGSJqWZ6EHjtPVzvPFyg6shZRfqCKT9qY7ERdTTCnHx8BJn7kzEnePAKWEHQMeEZ59mKU7PVr2bcvf",
  "key5": "3osZZGX2EQkDPjiZEBQoJnz3hqCWtuZxuBcgFJZFTA7pcBaTWPANC49vHw4U5uBiBMZFx29MyA7tjb4639g61E1y",
  "key6": "2w3QmozPh89AwgVqVdgLrzzjRD9iDDtL3fJcvU6wEizYP1aa36aFBCx2zuQwqfnuD25fsin91QPJTZWnkcnUafbs",
  "key7": "27U8AU4mW2GC9nSZk9ZRDNzm6J3iezykV2kj7yXFVgZqw9T3wuCbyzY1cCbRCc2bT9BN9B8Xx6FWbUa9kFyAuhAX",
  "key8": "UpkUjMy4RWwimkrD6T5seq2FmnFgjweVZ9zjRcRQFSEeeyuMnd8uk4gomoCGMPF6ywuMC8Wj1HAdQQ7MPNepGes",
  "key9": "33fKHoSyUWWMEExafJuQsS1ktvPEZ4pGk8aLsPzmq48DABTZwDQseeVntPmMKYzKyxWPk1FQDAhmSa3jdVXhmxCp",
  "key10": "5LWw2ZxhMTCk6isf8VBNg6nf4kCgSKZxh95CcWREVs9rEq1BbgALwEfe8619N3M9F92nGVm6X3SQkBXhKvmZURXh",
  "key11": "aDmHkSti9wFnYnUJWUXAZHChjR4eqgx18xSEjsfGdAyHLhSPJG81bZa6CrHpbma6trNZ2z6TSvx8zgCX3xfePrN",
  "key12": "235yLmxcq868koRJjGgT3JPF8x8YeUYJNtxCsuScYL9MqswEiZhxReMit1hS9HucJDrkPhLji9ZJoprKYZzkvWm4",
  "key13": "5F3iJzJvcBvbRKw3oMKABprkUrDyVxChfq4xi4ZYgokn5xpyNSjkHSjJ5GaQAs4MKXjAjEsckRa9yKc5kBA4cdtz",
  "key14": "55DADW8JGhsC39tDahVTPKt16CGa6sLErAFnUyWyT7AHxTPfwfSUP3wCpbd9Tou7mbuM6o5qE2tpNa3wAqmGNQuE",
  "key15": "63Eq8vkZNtfdJMinCfzUEGfZbwX6w3Dkb1ttcHVHnutB7kup8d9gjkJReH2C7esMGeqWgzrqKsdNocWaSyBNmVKB",
  "key16": "VL1ZjKeYKuoCLaB32Usk8rNh24hxQ8Ts5q9AwL3kmQKEdkQEwu24gce3VcyvMaQz5XtQ52vVFGPaJzvPdds1EjW",
  "key17": "21tA9qfq4qbK8Wc8VzL9hEc28AXDtev8kdX5AqejHv49Tky3TFo1iMubip6PMCWzLYT96wmTJAaWPYybxh9J5ha7",
  "key18": "2jM2TMB3ynJyPJivTc5MiGdMC5zvLrvDxqd9agssX6LVsCmjwa2ry2dYXRLwJ9n1hkzHBDvR1XuigW3ioFz4gti",
  "key19": "4XyubFSyEFTXJtMPsu45KNiGWzA1woDtJzoWzz6gQyAGfMoAa1Z31K3YTV6SXhjjziooqmWTQUpBfKTBED3XJoxT",
  "key20": "VsVzMq1qgJMKayVj4n5PrPMGzJYHSYCsmRLRGxLSAp7MABA11PJdEsWurvqrNZVdoxpSaqHHi1mGDEWFtoRznhY",
  "key21": "4eGgv95habQVahKCHjUrqbciEE4wkLfJ5Dou6vrrQRgMRmRaPVxzxnP8egmuDA7H5YqUQ2fe8SShkQd4q8MdEACP",
  "key22": "4qKhv4LAQHAK57dM94MjDujC9zVheet2yFmvMzYWdukHuDxNRojo751UKcp31d1zCoxnbWppbcpMMmkfuTg4998B",
  "key23": "24in4ZZC5UrJa7yMjPG3uHTox82cQxhDNHsk55AJ9mnD9qXBHwLk4Z17Leoov5sYD5RwUBo6mokuvGyX6z4BtUZE",
  "key24": "5Js7tYVgVkGxqu6CzSiADJiXonsp8JDJr9SEYjjFEBhKu1UAfw4agRivJ7AyG94u1VpJvE6QdrynWFKk49oBp2ew",
  "key25": "3skNPqNs9my4XvmyYg4HX7t3PN8QjcJg2WefHKwMHBN1p5qEbnUEeVuUtqoNXwDDMQDBSAqASSh41iSTfwCyR27D",
  "key26": "5zK3RiJQ4qpQVgKs774nXgSbPurJJFRLCFYPdZykQfEQP9uzGmombRa2H1jVHYYo5aR43U7JDryN9ZLAUETG37gp",
  "key27": "5tSswXfmGm2Ru5pMpMRrPDZpFXXkWCoaWtboFsKPnGEvwRZvV1tQMVPiZmsmY7xut6cx8X1EJg8bAZMdMDaP47aG",
  "key28": "5UtYdBK7HCs3pjXPQp7ytuKVGc2knUq8KaNTTQ6jwEsaxkQxidHS7uKC4nYNTAPw1cv1rmbS1Z4QevXtPaVAu6wr",
  "key29": "5qUvA3C3JuHzJaxGvvtDgC6ngDveCbM7Mndt6VmiCk6eVQVMHdKuy9ozLtZfJCmmtzsqig8hJEjtdkUuigqm91Nc",
  "key30": "47b3bmcvBkEWGEBCNxaASFwRXTp14j8EjvRCRwPwE9pnEZMau1kjh5b2cimKbntTVpzmdtB53coDNTDqYsUL3mPs",
  "key31": "2WZuGnyJ1DKK7siakZLjf8WsZ9emDmaq7mdu5eSMrocRoBSeNNcy1nke2QU8ef1DqEZT2UG1nNN8UzcGYkhADiJf",
  "key32": "LajAa5Z8Wd1X3L2gnUSk6RE45vDBDcbmN7V8WQY3KAD2sWntx1JhB7sfv7RY7RRNAwwk4cMzcrceFtxnMnuSh3o",
  "key33": "HZnirvzxVANHnMP91HFEdTTyKmfCPf8vewyUi3Tj4sXs44xSVmDQAyCcsTKWnLPvoAWNsYncvWGzc6bQxhiHpQn",
  "key34": "3h3nbmHNJbT5ndM5WiV7GZ8efyjDrzEaKPdAqhu4zam9KGcgu6ddYuVTnwRT6YvymeKpEahVDQ9oY4dKrRk2P6TJ"
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
