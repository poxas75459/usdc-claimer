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
    "2iya91N9T1xqv3qdSbnUENpdwTak8cwaDKoHETHcoRf2ytn5JYcTo2nzNVFoscfkgq1yf4vFiirsR8cM53VbuQGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37pYgWnHVYCjJKAPwrWCjogsCVihiJVKeKLTzKyJVYutMnTvcppV6hMzr9CRZYyzD8eHA3UjQHJaF1WAGD1nUv2v",
  "key1": "4XXXXti85wsKfVmxHex65xPSKho2dojfqdBzDvRMa9MAfCFn6ocVoa8MYsc83S4FxLQjELLJ3TsW2F4vCTA7Pes7",
  "key2": "AqnRzwKUjH8aSiWhSBtZjLV6zPiuDNFcxmEsEJnHEx5sAt5DZYo58UakuZZLbfmcV4oxU4svAvFQdgRqWudSDVu",
  "key3": "4ErpU6eTKz4m1KkHaM5ixNABw58z3r2G9AcxKrgzxdS3xrrqPZA6VhZPFjaYTHDLzKP8UFASonrtf5B6hmSBNZJr",
  "key4": "2WgPGZbpNoVJqLR8qTfaPLZjBWZLqaF2zE6pCk4EPHTP4Lc3WE71smY5J6mWGNQSqFN3F3R7LU9jE9wkQwesg5y3",
  "key5": "5KfjdsqL18SUipc27Cvi1kAk2rrekZjwBJUmDKcptn3UAhYzBNnYGgxNNJewmL1DfT3akBMkDU4VVksdNC9j22s6",
  "key6": "2yzVAwgWxk1Y9arToydp5dP5J2KVeCiSECApKV41tMG1si4CcLTqfb8T9h4VTgBtpj7Ckiy21ASDV23FcT11gYHb",
  "key7": "4zn19965YULjv5fw52mUkKR6cacCVnDijFe7ejG3DpGTgymcUDjPHroesXw9YFSMKqHD14hyebqt5Gj4GGsd4d2v",
  "key8": "2Cdo7kNNL3T4nVrSRuGfsJhdiyBpxG2Edy7QhDSiRErCuEnBHTf21sHua2UUiftFC3Hdzi4QjB5hivCPvDhrojwa",
  "key9": "5WHQXXDa2XUqoVqXUpL8PgqMqkFqqnJWSbKXk3wQV7fafdDmEWTrmeYmXYoSacTJyZ8LTyfXstE4DfYTX6myZapQ",
  "key10": "3j5irt3F7uQ8xHRAL9BkThkbDQeg3zYsd9t34Ane6BMxaVCZhrFQ248fsC1orCxu9cuewxAZ61syzWTKcDrK5YVA",
  "key11": "3cByrqyn9KGkEmqdvh5E7HnCqu3yZLAXCRP5F6jUmybh2Ypuv8G5DLJtiMRLfHtMDTzx4oeY9DMmsdYmzX5kCoPP",
  "key12": "2rNSYX5fj8wirTaQw3a3mXXbxEfjoRjqaEC2yncy4keo7qfJ7JrB9sbWqUcCxg2Ki2zFxKR1FBXXz3exFe5Cptfg",
  "key13": "27TD5gzDprPNQkmfaTKVirWvuJcVky3qnMnd2qqmqJfywuoE9GVnN1WSYfrSGr88LrGa4wz3PLtUTMZrxKDCZsti",
  "key14": "5mBG8CUqmdhhAs95TY1FaXX41R12wCdaHeii8Bg4cBmQYxDq2N5wTmUSTWzxJv6Lxs1n8TD12q2mDo3Ujtd9Qrpi",
  "key15": "sFpzR6fU2xBUN7TuYp783BtSgU88T1PcvqAARnPQjc5uPSp4efHo8TdifNnJ4hZktPiipeYsEUMKPXxH5rYgDk4",
  "key16": "3K87CMmQc5qpNdE6rM48m5q9hZFAGq4opeAMC2qdHgmwuDkLZwmJQ6WuKVwhvFKdMGHemdyF2cARkigLcpL6jdK7",
  "key17": "WLU18Ba4Ru83qbwX71LYBmcmepW1JTsBmxF6PaYtCSV6ZqdPoGVvnagUxkpAbjJxqsDJLmAAZ9k4PZBpeJyH3KK",
  "key18": "2c6NJUypQQCwnvWJhY4nA1ApYiV6miBqAsooRLjhskJh77YSmxDrhTLuPgDmWct7Qjy8a8YVNHPF28oJ6zRsMEow",
  "key19": "2L845Poed6fashT44RkFYwBznNHTBWNdvgmesfqZqhBrhBdbbSwz1BJw7AraGW8s7FCFwg15L8AXzbEg96ewvv5n",
  "key20": "23a4XS9Sef93R4f5fb5fSQ51anKWWraMjV5NkypLqp2ChUTtQSxN55wEGvpHdr4bBX9Ef7vNVGLKWZUnyQTgbqV3",
  "key21": "ywxEf9E6bTmk5GTBNaRtyWuF3mSqetJM4oZJWGjAsHcUWfT2Uesop8wDFGBfo56oh6nyKw4eQBWbZjyaXeuvCPf",
  "key22": "2pPFW1u6jBtyfiSqDJMETyMd2aYHRD7RcYd2USdjGanXpo3hPsKxxz3nASjLfk7KDREZvcbLfojXtKp4hkB2dya6",
  "key23": "5LAY7ChkxDDusb4SBjHW2PVSUQ3fRJdAKMKC5oaA3gmsy8mN5asgc5QJZjRm7setdQxhcXJ2Munqd1gecAexxQtW",
  "key24": "oLrxTf3VzKH4kxEUdACpHaocfp9bcuJ7QKcsc8Asrb9hiR1mvYV1puCgZCqKrDovr5gNSRkLkJZRDNi9kKg5cgc",
  "key25": "nopR8qJfbMcR8yZazW6KoGtuHg4Y9Uguu2JYFX1uKGR1Jyja1zgGRnsggYFuKn6iLk2maiGUcqf5EL1gRpFfJcj",
  "key26": "5DuYGZer5roFvt434rBzbkSes9k5zMRq3qgU44CYD5LqrUuz15BefvkTrChoBYHXi2ufnJKQDJyrewRm2SXQr2sH",
  "key27": "3Ye7PxwwAndFS3mNJVUAbQAAGKbqz3H8Ldvgj2Ji4784HwETGwGe5EdpYzze63PGrx6rgHzeKdE3Fm1em5Km9JhG",
  "key28": "4dNZDKNKq2oxRziDy6d27JeE7esQjNw3tDwf6t51hjCANzLmx7ZvyQGhY8Efb7ZBS4Ka6AXXP4kQzZ2YTyd77pNL",
  "key29": "5w1JvCNkHMsHju7u995e6fcsno4JZ3Ci75HqRgs2Jxd8fHUZLJ5zZRfmCH1F9eRxyHuW5AfPW4sc521N4yhBx1e6",
  "key30": "tsAeKyzu4FtGu85TS55rydtsMgKano1u7fTozHng7q1z1m4xUpeHnw5Rrwk5CDrAyhZcMvFMPJLWAHcRsETVa3t",
  "key31": "ydS7UBLuVbmSesfGL3kgRpwhFhAzpxcBASswWZZcGXJWZugg7VptEZKVxWuLajdm72Dhp43kvmwuekGhLEMRno2"
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
