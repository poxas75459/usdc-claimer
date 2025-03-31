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
    "3fLcnfUPbY76Zks1zxZEBbhrF1CzxynGZKZ8H3AFoDMQLD3uXZfsx6gQfnDCBZ4Ki2vLCFvyvnwqBy1UyrT5cUHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qVt7kJnZH77YeCSDSrRFkaK7C6t7fDzv9Cdxou1fZky8XagQdrdSY451E2AGSiNGro77xKrbnWi6XJiuiv56bnU",
  "key1": "5CgZJbeA4NKehJFJ6g12dz2H86ueUCSrYTFcVuQ5D93cbj7iuLX3MKJtkQxDdCwhWqKFjqjrGKVmFHbknSJwzQSv",
  "key2": "3FfcVz5EWTRAuggw8RSV4EfQu5HyhFW8z9na8VucWVcyqkiCS8tiQDtefKpN23u9s5ioR7YBApW2Sb7xnJcUsms1",
  "key3": "5yh5yKw1xouV8N2Jq1A6QvY5Cm8oj9Vk6U4GkXU5rCm2bdNpjM5Eyk16PNEGDH5gJSZ5QQMyRk4cAbfYNFEjPbvd",
  "key4": "3Acw8eeuSr8pFfBL776cF9dKxP18Uj86MK8z7KbwoUyPWF9zVs2ji1PaTjGRAZyJSQALbFdCigNxCDdEjenVmiX4",
  "key5": "48xx6H6W24mhEYwDdzGVd7Bk83Tw7JBFNStcGx5UDCEdJXsvDeQWkeKcxchpC6YmouKvmnKaThnL7SKwRhiZDGD",
  "key6": "5gougcjSpR9npeVEvJa7Y3ybo9sV8tvupEB2wBYNPGhY6kNL5jH1YMYDZz4xqsFADC6gjmYMSYg4CWRaXceGDwVT",
  "key7": "U4F2Ef5BRkA3CGRmiwMEj61yw6wN9DA5unHzFGPrVgPoDHZXhiRMnBDZFHeT9HyMfYfPSWgqpkdYcypBbSanwT6",
  "key8": "4vcUvnJAA6yAVjsZp9GWeUwU95tqyN2oPfcA6eCLQW21w9QcGu4uutfskv913X1azAsaaaVMS1YwBWZ9HE4BgHr7",
  "key9": "5KQorwLZNVvUX1LQGDu2LDyrTiEJr5v7cXnFcUzdchTDyH8XBTw9wWdWEM4CKSuLtV1cqKYQfb3Dnk4WGb9KrpXN",
  "key10": "3Qwizdp8exDHd1Vgu8NbMrFrCtKVo84SKQxhCEQTNKu1wpPambAgZDSLzXSuxyVCKhwtGZRmjWwSDFdNVgBm2hKM",
  "key11": "43sKevMVf2QFYC5RNbSrcmmBiuq7vx1S5J9x1mGtJgKWPoTb6gUiokYgxr5iDnVYLK3Ces88GAEinTc2fMCu9tgk",
  "key12": "4S8bsZHTREmrz4dg2DxDhstdZa7KnYMWFeEi9LMYhHCCNgFrD375rr6HQB5KrpPHcKyoJuqXofmqEp1zJHZikzXx",
  "key13": "hFMHuDcLjK6Fgh4XQfez6Xmma9GRtGgeQQrgUhPjCmjBvhdwj4AUXbeG9dBEAEtczCpbbb4DJSKiBvDwsPDgaER",
  "key14": "2KijFEJW6DsgMrKBbdhYxsXxLMcZ4vTkLgXEsXkoSJiGdPSfAuqqBg7KyzMnmkcz39HLk9EhFV5f2f1aXqC1cfrn",
  "key15": "3bBh2J38epHygFFpS3Ck6kpxMPNxRziRq6131PDz1wbwKou3vj1v5rmYka4iQhf4k9djy6anzMrHQPvYZnk3AzJV",
  "key16": "4JnZE2DYUGbGtDRSbmLwLMDKwnXyJ1hfWZXrHCV1hoNDGwuUp9evcD2dAqAQNDDsHu18RCgEMkf9a5y5aB6AsrB8",
  "key17": "3XmdfiMg6X4cQGTfT5PNhWoUZ4Uopq2dcNrjcB755cJmK24wBpfdKk6XWiGkRjg1U1JQTwf4BEgZfqm3R2wjcto",
  "key18": "2K42SERVW5kbvmTA6pQaWkfExWXoLgAjM3V1Ynzp7tTALv3JuHDYz9pdJJU1yZNdJz4uUCaPs6k9HrGeeirtJAgu",
  "key19": "3prynBEriFkus9kNZm3xHviDPUG2CaH2RFehwePvcjMJAuEn8bd9GGz5Lk3qewoTjVAch9JwUhpSQqeDFLm3tue",
  "key20": "3GMpSJRmMsZhhEcgVf1o94XE695NF83QKRshdYF98LFAgdmmJ7wVcvsfZnhyigTPBeVdyN3qCTQjCsNRXPTmp7bE",
  "key21": "xYosxHwHPhxgN9npC7ngDCKKBar1agoERjoxLCEnbST2tGAqrHqBGXMfqSsDAwZNnNseJWCwmoP2qb7WSEbE5Yb",
  "key22": "5wMKqf62RJQu91cd8ePgpNiLHvNZ29oyXpVQ1jiyk1coj1HBbR9sqRJPqzmciNhZkr8LPCWbViExFx93pGh6VFmg",
  "key23": "3yAW1eVGZraz9JN7RwmGoKrAZYv6MtzQkVXRmvVo9Kapo87Xtg2s9Fgq69CE5iaPeYneCrdAP1HkFferk7KB14tT",
  "key24": "3wT29rodiG279JMEDCY4i772qXaw5WaGEUoB9YJuhBhEovUV8FMEA9jtZbAkJaNVXEmaWRqnkJkEBQfxHQL9gthb",
  "key25": "55cRkpM3xXSwQrDcvLja62Mxc2tCRmv1JSrTqx2LrQYovtQVx58QxrBRp4yaKFdrCdJ3sqvDCsXjGdvV41PD6eji",
  "key26": "62SVDZ8QBXpdjcmFKqoNkcmdtxVyNRtDfiGPhPgD7dfekEe2Z18gfqaWv6kU7uFLFuaLjuT8mxSFCwi6hD2dZPpK",
  "key27": "3MQYdS3aDa9jYrWY5HphLFhTMMqu56JnryJ2GdWYgguNZCqNNZawWgcMMbydH2ctfeCR9CXLz1Ttx8Jk1VmmMrpT",
  "key28": "5mtN3ENoi4yJDLesJpkjPf63bnY8WSfZZNUai5ZFYY1bNh5KYinKWg1ZHkBXVcALTfqWZQDbZge1nkxG38cJWqW1",
  "key29": "2ce3EKMxBT4vR5HLJTC12J85NSCUcbNJzuSKCQbyak2jnPYZ2dztR8qrQKo7sMqaagGbvi6LCsV9iqABn6QT81ZB",
  "key30": "4QZuUbVvtenz1ypaVpQW8kCH4inpuZG2pP962EJr3MYwJQGoEL1fiKP6DZBtUBiGFZk82oWrn7vvxUWhDdpRGavv"
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
