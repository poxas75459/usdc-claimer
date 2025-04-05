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
    "q5BJMZDNLVzPCQnqJH9gx6xh32ZzjNbioUPp2bFRZonpXn5NqRpBLirx1SykbSW2yX9aZVdDWspJzeuFgtHxCNa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PZgEv7MdUXBo7nyFmMJKU6zRtp7GG9jF2ReBBZmqSuDh7XCEXJXS8e9uJ86v9SsYA3opkHiUnpUgwNTHP5fNAw2",
  "key1": "61Pwk9uGH5MuhYrLYsfBQ69rEPFh6yWbFEKZCXBLuUKoZchJx4kxUAuhuhPHmtB4MncGtE2F7myTQEWXUZ5T85xL",
  "key2": "2doxqqE1EhEeuFEVWYu241LpAe6q2Mx1gGzdGSamVRMkCHD7Tv4MirQLydjHghA3ZYaZYCE7xNMPCqShFG8ASDrX",
  "key3": "5aYsDKb9Samkh14zps8An9qLrS4vTNweKAqmdUMvSWsJyj7qpFWkb8cqUNYci3LVYwXT9Yog1ckgB8XF31DPKAN2",
  "key4": "3z6te4N2BiadwyK2MT8qvqdDEYZSE2R6RdJNyQoQKb3SRTxWx162xZe7dWYACJc3FUTJw5FfxmbDQYNMYbK6SkCt",
  "key5": "4xMcLrt8pZ95uqPo2LswS3HFG81wNoJqYhuwbe7FKn1wSpixuPi6ehV9amauQmehkFhUYipNJt7AZu7LyMxVXjkZ",
  "key6": "5fxYGce2mmjMtyFSf2gH32XtPfamLPGsXfkKqzqEywKpVmsEfoTecgrpF58GxED9hKttBjDd6QWjifkiRj19d3So",
  "key7": "2PYgMwfj2MY3B9uy4DghovkNNN63a11Do92ZnpxEo8yFCRgDTYSh3929kXSozujtwNwyaTRtZhJvxGurfHJqWt1E",
  "key8": "2VYs9G7S5oC6WcWyokDTKW6s3uBfnEjCLStL5kqbk4aThuYXVfNNF2qHg59Dji1rgetZWKnpwH38kqXUN31Jpd3K",
  "key9": "57cMufGZTajhGa2f6BJiDxK4xESBeAt4asPE5dwAUZK4r64c9HFRLTjJH56dj5gKgutoKpjQKWSMpjFyMCQp4YqY",
  "key10": "4fVi6sxGQHXcEQiedJEX5jHALnK17BCV7a28RPKyszNiKZ1rfdQbZfK6uyYHm4G15Keimcy94ZvyFBCcGY9KfaQF",
  "key11": "4xAUBCDVrZjs32ivAQU3eVZQYgXo6CUQjzWXduPBtmQr79n6jWS7917zeqicC8SipygUbXLVckFsoRAkjg7CWfk",
  "key12": "p1AGGt7LS88KJ3V6uTFWFQZzfBJvgXMPmtnMX7mFWYD7qdSzAQ1DyAsG4bnEWWPwBVTLmEN9YF7m7WHppgZtkKX",
  "key13": "3H5jewGJrmgSDetfvY3PnNZinro9P8Ps6HEavivZ7MNrKndJDhcjED4UwiwxnZYhtWBVpfhFcJt36hFRyZXSqdE1",
  "key14": "4P64xhHpttDHq97CrPbpeYBeckAhxw5HvL9gV8YDnnJyekeaUVY9SJmqrNMA8YLs6fc5VrASp8wzWUtgdtj6GDfi",
  "key15": "2c3XLm66bTLADFMGPr9KRzrwvWny3igEDb8jzUyXAZb1gX6TW2kUQzw5U54BLGn218L7YFSQREe7TUnSdiAkMeN7",
  "key16": "525pZ5v1N7JvZdyZLnQiL2sEk6f6QJmNNPUy14tg2CJUKaeSopeBzpSrcB6wZbT2ZicYgJB5HfZ9gdGivkSa2hoH",
  "key17": "5QwrW7MeaM81nYSQSNUDxZeDuL2312hST7CTZNSgzqfQpa1B9PncsMLed83aCghDquXqMMrXn48J9AfR9PdnfWGA",
  "key18": "4cRvqU4GDC6JExo67GfPNgoKwh4zAghcDw9VMt9v1uzFj5m2tfroSCiVvtUWd2AMUS8u8Ms7urCiv3CNTSZgJou",
  "key19": "2xf5MmbYBfCu8kGJBHAWF9KXs3oYCJs88dFdrGWrxSFrhxETeoeHYVex6XML4RPkM9Ru4Dm9Yqreku72NoqUY8UR",
  "key20": "4JkALVAy8wznZx4w5nebP5fVJK3MxbvBBrNwnvrA1REQ9pZeghaWJmdaQuyzYVYiUja2STFZnyPJjicmrjB7WtaD",
  "key21": "2z65kUa1p46zEvhymtC5Urm6NxSCmR3k8HNWJyuqUMRXept1HDFk5GLK8hJobxJGKDd7GFFZ3wsA3yTVSBtFMQb7",
  "key22": "QjUc6yaGaZPb3N6ZV9zmV5xhXkTkghAySex1RUusoX7EsMt9SU3td13k6iaiu6H4HMoHDA2tNsoy7ZVHGMZgkTn",
  "key23": "W92uiBVMYDT5SvZbMQD2FcEVF2V2rghiDYts4J5MaCURE5gmrr5xwyXhg77pUAviWxVE24KEApWrnzHfNTNNd72",
  "key24": "41N7Uqatni93ecpdLB1TZug13M9AadQs3nrp51bacFeLFe62xYPesnN3otVYbhTPzLpmBby8xYL8Bp3mLeZczYqx",
  "key25": "2BF2tq3AuMeFhLD9V5bVFMhVUjo2iNwzTBiELB3fRaLSWHujJ6ptTNtEyU9zY5Q9QehAd7gx1a5qRSbmovvmz6oz",
  "key26": "kZxfcVKPECtZbZ1yBAuh6x6bkSmzL6gMswPLfKw7MdR62RaFAxX4ijPsGEW94V13Z1418q5B9ffgLxBCAVLVHor",
  "key27": "R7PXQFVLg5suYUNNkEabDQtk854hs3vLeh96LFC9TBVetvNnTkSkrBKe9TEbrmyRZzgtUrsEydYu3dvEmzH1Quf",
  "key28": "urqnKmxTLgpFQ2M6aHCnet5tLdFRHxoVgfMB7ZWTQkAsBgqTWcjgTbfohQ8zMiWdcWNhBHJxRCsgQrCYzfBqhvN",
  "key29": "3UqZi8cuPPnWAErqZQuk4hgMC4YTw9DW4HuPZ9eQJm12kuWfwgSCxMQPJhzhJeqq7KkVLsazGZ2gnKCzhzEej9VT",
  "key30": "4u8ZHSmUJtnSLEActRzbuBA6JpBKzqmK2ouHErtjY1tFZAaGK7iWEsRsuAH9qQvnS1sHnBLbdwqvVBh3iUevoaMK",
  "key31": "21gSqv1DA8UbYSs4wvUN7VxNEE5NCiXgcJNMtygHpmPKnWFCGvcq4HN4JnLQPErQkACN2WAFHKBStUuWkuc8Co7U",
  "key32": "4VkE5AXsRMLqHnBXcxtekLog93v8MJcYroGUzgh6jP1oCnnLyrou3nd3vKTk4RpaT4nU9mnQe4bmnN2essAKbGK6",
  "key33": "2ea8UZD6cFaVkzdnxYJ3Pi4KymwKffSPYg3oGW2FCZbuKS6x2Hoki3QfaPFGvkhFdh3Xo9TdRSpMFdZndFQC45fD",
  "key34": "2s5aQAMntgxNtw1TrhwvDsz62jFG3VUsTDNFghayBkFL9oviWZx7cpMkRpb8oAkZdcifQPzxH4DnstLC4iedTwLY",
  "key35": "5T8i5bRDeWPEbpen885zpbLaSnUUQzJrQa27cFmPZW1WKA2X7JW55zhWB75biuYrKvAC6cx4249AqtkTB2VNFaFn",
  "key36": "2oh6ojoS4KF3FyU3dkEnVvd4mijVKkVr2o75VQJUo8gk2SWSrU4VVbLanEHQGD79Zq7hpJLq61CngYSvqztses6s",
  "key37": "2RSaGqpLJWQwNF5fqftcvT9dgoqUF5dZTQmprBPmehzA5frDArMF2DxSEA7SHNGXuQM7eW4zWCTE56Kifq95ZtPH",
  "key38": "65NLVFPSewfTD1fMwDsFFBuevvgsmhrQgJESpHxsvpeQxWw2XJTFNb5TT5Lkz4nJ9bHFjJVoy9E7prgeZFPVYNH1",
  "key39": "Qy1Ca46ZtYBTu7VurWZwPLJikiGfKVXGzCyh1L3vUSaCm5Kp9hEWoYyusFAvwaEFduVXMBC1RhHqEGykU2WWgtg",
  "key40": "5BfCRnGn32qXyN4R3v9wbHjHX41DS5gbsZXTKm9L7wTgrQ5bmQpC5Jvn6fiG9obVnKeKvzxgKKBreznWmK8a1Bd3",
  "key41": "5mRvUizrNAvhBexcXjbbemsah2hcAw5o5MUmF7SVdL4fZWw1j4HV2EAcfVeXxhFXgx3xqCbTBDjMM3SJhfLqafrY",
  "key42": "21QfCJcpp54ubrQhprvMkh19Dj8SMVKtawdkFzMMH2eb6MtBn4q8GS7GtaVb2BE3JMSxRETGV39o4FVKJbcw9zG3",
  "key43": "2rN7gidJBPB1wewnBjfN8dTm4Pn4KT55eeYVqRjJ78qbiAsBs86oZmK29DYSmfNbQDm15sXMfCtTtscXLH4uDyis",
  "key44": "5f8efz6roZJeXnj9d3iHWzNNJg8f9Yq9k2msPHLCuemYDjW17cCYXGhWqcfBY1ZTPzq6M2cCzzLF49Wd2KGs43JL",
  "key45": "5poyay1GFiwTpEo3fYxq5RnhJKe5DCxC6HZYuySzU86AZ4xvKoeuN4hhv4idSFkMVcZczW2r5MK4EWHx5xtDEGxQ",
  "key46": "5VTifxnyEZR4xPfoVaCM59y3CBaSxhzVc2ZspwcWM57ztdJgPmSFAtVFcGg7RerKSEVjGosJ7SR1vfW8AjZMaARc"
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
