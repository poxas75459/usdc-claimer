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
    "3qkJyKHAkaxLmBnH8TsK8CWhVfkrseydQkvxd7KhDCDAefQBEs9FPPZDpFQGFU2R5nJGw81nuQdiFgDfZkSvpLsS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YPE2QY1Gnq4jXTVMdr4TiGvQBtHEENspz9L3qq5ccmz7ZR5q4Tg9Dr4W23umaqAyj2FvNQZmn7rW4rRoAQ2om1V",
  "key1": "2XumYyV2gu4dvvq6pwUzBUQSFqmUvMdbN74ei4JFLzGGJphCGqe2hEhrEeTRimgJ7Ku4qxyLXZpzURt7Z3VUsbhh",
  "key2": "3ATt6wuFPsLaYmmxnmfJNN7cgwDP4oENut3otZ8ZWYXoNiMsqfyD1WVy1nGBwuLym7oo6oe6CeF83SC3ei4BXViy",
  "key3": "4gmxfb5Lh8M6x9em9fYjaXbEHGifq57rUyBXyjEzMAmzu5HQS2UpC7S2baizGHcxNiMQEwPeK9dgJ7og7cH7Mkzu",
  "key4": "Bn6CWS7CmNuWSkHt35u8hNEijqsbpjJChwCbccS8oFmja34viGmPzaGvpDdpqcDxHeNbe9PLty7bcXh1A2b2Wky",
  "key5": "5ZGiGJ7bC3LMtjiVeM6mgs6NXZijL7ZDdbXNiau9Kian6eWa8ZpQRFDALcxVu3XQ6Gi4UaP2j153sTm2nBSUbHr1",
  "key6": "2URNVaarZKtrirccgQ6tLFWJ9CK3KA6H1z5fcLB9QFid2Egj9YEaNoJwtwiopwTtd2jeKHHmJmx4wyRFwLfzChnD",
  "key7": "4VnqpcVP7sNRnKLAdKvBcjw762PLpzjkFci6kyzY471yrUJosCfyz54HtLSzfpLsTfaFS1EXpAXzzjhqRs3AHvhW",
  "key8": "2Yp9TuBsXHCbBCYUNiyLdJ5BLt7wyXfwqXG3GSgHtSnhqNgvmQ7RBfQ3diMuk9fWSeN6TCBCTuttPugjw8zyUAwL",
  "key9": "2xaMD6ZKqZqmBTx2n5e3iAJyDKfh6QzNVFRJHKJ4Cccf2KCW2CN1CXfRk1WGqmSpaAyp4dCPbpCCK6WdtM6bt9NR",
  "key10": "5kh38Xf3whCBfujHuJU1pB8aMjywiHc69qiJQQLkxTTNHgZjVGuJoY4vZBLKveiHisot2nGzVEkmtnRu1JT4HTgR",
  "key11": "2M6pYVHXX7CReSTSzvvXLt6B127L6NmAK8xCbyn9K8FrHxHY4ZMJ76pQMHA5WdpCvK18GMh9Z46Qa7t5mRuxWiMr",
  "key12": "2BomrcueCYfUrzTGuzvCeQS3o46YjamAGgkamyZjycZvXdWjMZs2X4atq2P1nwd9KcSMJuyPkbJMsKfRxZSuGn5H",
  "key13": "2GwFTJBzExzX9LKb9cv4NCSbCdsRb2na9QrgFTjitfJThY5z9Xb66qAzCeXkjY31V966ruaTkVjkxuRyn2zkt7yJ",
  "key14": "3v9WdQQA2dWm33686yM39sSjDhwtia6vqkSR31hCKs8YbwiCp6vsUJShwt62E77urNo6U9QzBXTFUGRJY2i69kGj",
  "key15": "5mJS6sH6g1Urtp72nWVt2RLE4oVbvkxt3eMuR4ywB63AiAWM7LPPEe5HMwH7g3bkFf4VMwW3eepzDfptktarbsqV",
  "key16": "3ufod5Cae1xXEmvYBHhUheMaNGoYb2aqFcS2cNkkFMWemauE27Q6GCdPQtpkitHuURbrhAuwRsv8pqczUeKgzd8R",
  "key17": "4ty83H2mXZA3arfGJBZ4o5DSGef84pQVpCDaYcNS8PrnFdoJ5VE3toka49PzcFYWeYzRYcg5GcC6iptmoLcmUkKF",
  "key18": "4peV4Qp54HVRYfnqEr3UEyxizCwDSHo5t5eKmaThzzC5zLKP72ZZfESncFP5kJNQHCwT5mHiHM2GwTWTWt83SMvH",
  "key19": "59aqbeDPV86dyHzTQ8JjNwVnNneSRCVNuVp57fXny4fTAgLw3A8USK9uWZAVDCwvV9S9ovRFRjYPDLpnpZ8GQzMp",
  "key20": "2huUsfFdiV3MYe5GGni33cwV7Wyh6gaEMEZwuu2Akr6KraCac1rf7N1x4PWTPHsgCKEbQk7PUfjWXwv7zNYSmzWY",
  "key21": "wrgYZcwywEzGjM6LtRjbEgrLUnE9Ugkkdxyty9648h4TLZnmNswXznp2BKCqjDGLV9PVYiAk7pDLfDNTnwDR3ah",
  "key22": "49GHTj7GeEdNU4ZTwdqv95YmCk9fsBBJiFi2DecsGkb8K9w12ohmDi3RW3N6HwFLxjVWFnsgq9GKzVK5PHEiZ4ka",
  "key23": "3RBTY7wGzExWzCsqU8aRFFBJbauZkiT2zqWGtkyat1YkAmfszXWyWErqBYpxxQaRR7eWFyfPJ9JdenTzJz2R4rv4",
  "key24": "3eyCFaz9Rq7R5P2GYnsr2q1C4E2cWyvU5cWgumnPgKcRbSWTZ5FeYUmZisg6swBjW74Kj5CdkPGYLY9p77CRixU4",
  "key25": "5sBT5WxLfX7w9k8QkVciRye5FxB1QXYUNMXG91tR5KaAMLF9AzbCr3x5NFETZ3fzfH6exaCyxVDXncHhtyNWzNmC",
  "key26": "qWXmAtE5iNYhQ7FKsU8kfPeeLCYpvmy6QYaPwZG8EpGn4gNTnLTFW67kL5X48KSKYucyfDgZF25JEgBMAaWm8QA",
  "key27": "3UeESAHJdtdWzmrKoHAqjEK3RSkkrBamXDi552dWfTjp5vUet9HfbtaseS5D81SHMwryvVgY4tyCdqb2cHTNgYNX",
  "key28": "NdG4jTUCbwGyyLUsfssQSww2MtYFdDTcry9TMKqE6KQUoYe43Yrc9dbaFHNddkaugjysEmhASz3zgTRbUEkt7nK",
  "key29": "tWfwRa9M2kmmmjkfaPwzMGoDuZx1FvSq8XHs5GZ71GEEQgRDbzeBGerHfa7yejFhbVcAMohGcw337Ppk2MePreN",
  "key30": "4egZ25XNu9HrLQf7t1xnySTNEmse2i74d7wjNgo4rqJYmtARR9ZtbpTDZN122rJRf9WYfytwKBDg2G81wbJt9eJ8",
  "key31": "52XHdy5Gfbhnyvh8cPuqPXYTrBeXPhb9kLuFSjXAZPZNnxLetreprz5enicAvCfZwX7oKSmR1t3TpFysGtzjhGtV",
  "key32": "9pXdRejNJ5VzCmUkvaZyYZHAXsvAbXzsadbXap2JJyy9wnEHpp4c2T979PXmJVbP48avsXzGgrZAtzdqZHNvoeU",
  "key33": "MidAc8jkjoeinSMY6gnm8YHqXpVsfEmqkvJZVLznxbFpXQXpuFHSitSj8z8iMMQ5AXgJ2WaF89jw7S21dS96WN4",
  "key34": "HTMXuc8hsHxxJNQBTj36u4Q2RuJsdUsHS1qsqdLEVHjuSmhxPC648LZib25c1FFW23jhgXiix7nRj7oyEzceQGV"
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
