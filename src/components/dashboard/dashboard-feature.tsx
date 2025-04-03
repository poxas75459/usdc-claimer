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
    "5DPCguT9Ea7mV4Dwdzjwtvq7jJuUbXbK7E8SjAQKc8mAWhPRAmmMamajZd8kCBDkPRAfLjfjX7jEuyy4Cd3fjmJv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kV1SgY14MwakknRCqX5KnNerqcyEamDRMQcBiutRJdPDyzxNRJ17uSRUX6FcKUH9s7xhUM8z7h5c14CtymJqtdZ",
  "key1": "2wK3vC81rSC94uyVVtX3RScfjJKdAwXxJUi7mhSh4BEqXJqFoWqFWAx7xz79xSy15PCPC6voDFqDvahweF35pkcu",
  "key2": "5QNyWxi1sM6k33pgiZzjxfZwb91R88YPZ2gy5YTrs6tkXyWEm7MPEzFJ92kXLQ3BRNnUxsJqyhY4BjWQMnsQJt2X",
  "key3": "464PgkmvfdwQYrJVMKK7tf7DGnJ3e1DfAve72549gyUf1R6JG2zBUyDtxKZr91h5JoeHdnddPzYTcj7m5zqTcE5e",
  "key4": "LV84Krdw61NXZ1ZR5rvXREMgMqwnU32h32emjKBgAKDiVF2cogugisQob4YK6n5hSTnzvPhYmrM2JYBRbJxsapD",
  "key5": "37YSqWSD1JHhMHtfsMEs69HYP7ApQHXcigiWedf3vAzxsdAa7uxu6tWAGid1enyMeuCZkaqD73v12TWbjjFYS46Q",
  "key6": "2mRcmy4zoHbMot35BgFCSyNZij6qgBGxVPpspu4dj2WsS17qxGw6sifddXWALCm54GWsX2hJxZUrjS3PpRFMi8Jj",
  "key7": "AKgCysnygxtDJ5sDEEn3n1rc8d1eBD82tVSMoXavYcuFiF88bDrCm59WAE5LDZXCY5ft8GLmQZY8hno2p2F5i99",
  "key8": "5JvbyLysv2jM5W2DMVhuW5E9annMQt18Fw1qLWcicHhxTsYbGeHghhvcLHPzPtjyMa77dQRMsQDqVtrTrkoT8Vpd",
  "key9": "4vTGRkwv55NXTqL2mM1CiBTctizzBJ3SQhqDN2pAEcTf5teqmjBBs5wbVyYvY2dE4LtxzbcrBzZ967cJaYRTWJ38",
  "key10": "2YABNo2KbE1RqLAXkBS7S7jUYbjm29hACHVsi83YkT46SwBYK27xWSwpT2mLwSdxLoofn3v8CLGBj32Zegg2WbNz",
  "key11": "5PCtxVGmNCBwcYmapxfp7cqS74vcj5NSFz2HDQXH4io3i1Pq1mGTkcLX2n762UhsDPPHrfAbWRK5ruXFpaAxc9GF",
  "key12": "2a2SkLGbFURXg43a1Hx8Pfgs4hcC9JjrUJYMe5dYRpbPFfipFTQRFogcC4UrU6oCVcgi28qL8C5RBqe2dmGfYd3A",
  "key13": "3EawDUUrmiYvPycBKiXQH2JE5Rc9Acwr86YwtedmPTfKRzBspyuL4epF7w4VAsVyqb4FceTTrgXzyoWTR5uDz8LT",
  "key14": "RvHH7LNswDrWWhHCmrvhXtFspUAUdXkafKLzuWmQKAGzbFchSbV78D7J1xVf9QoipnLbNgG4TrTJczdibAK9aV4",
  "key15": "51fHfBjiiea2DTQZD2JgSuF9ka3MrW5Y3i5HZdQ276nFrjnbkxfqsQN8YMdj1eiWqi94scuhiVJvTGQKiTxiAJjN",
  "key16": "mr1HsmQbmeG4nXJKLrQ4do8jPprWzgfZE2UtnKnAmMGbpHWiyDcpzMR88KQwtQWyDQb59iqv6zcAg3ipgkYm3nH",
  "key17": "2Q9eDkb5hinCdwtSKEHxAvnVUPacSGm5ku8pGzGPqv4GWRku7SwWxdBnXAHbnyssbhjVzprNSEVZJvnxBq9MZRL6",
  "key18": "3sUiZrRKGzRXcahnkydCs4RxEHZpNiUi6Bj2Dg65Ve7SNznTGybXFreqnEMjT6n3LgFxzkw1kJiBZmZQnrbsss2z",
  "key19": "34Tm4f52pK1MPKNSKFxZzFympG18HDvLVjMDJoiGeL2ShYJU6iuL1rUAzfc4b1ijCNuF8ee3iyKhxSDpg3bqTjmz",
  "key20": "ZrdwFhtyDf4ZDEk24kNi5SgqbT1XPBiNYcLdi8bhvTyrekiFNcJhBbHa4z1xT3tXewJnJ8FjmckrstMGhkQvKdu",
  "key21": "4MzXjDhQijHACYTvCYtjPZBwuoCmQZhTUMH7jtBxwUDHXsemMcn5aUHbu3w1M7cjbR1rMA2ifMvPYTwXTHb6WY9G",
  "key22": "5HW85Ybe8bGVcDSpbSQt2dMhRHoPKoxEiqMrsqBqV4oBfGjiRseB2vUCRED82rtJifM3hxqjHDWGWvR9mtApRVaM",
  "key23": "3Kc2TsZbNkHeHo11G8njbUaYwu7KGZpFS3cow7KXjXtxoJXMMMD5ton3VCQWSbk2bCY1apZuadsCtjkjB8bHwKpo",
  "key24": "3R2JiavMWX6dh4iiLggc9TVMYdSEgP9SL6idiaitfywfoAcjypuTumLg4hKaWsMtxPGs4EjpdAs7cXczcVHSpUD6",
  "key25": "5M7QND42UMQ5q5LpC5CphFispxAZiHAf1B9F6RXQv8t8a8hEqCwixpED9XLSLDTJXse5BDd7qgrBgnvLKj6Wx35o",
  "key26": "5e9ZaiPzu2rjTFbSLMWjLKYSh6NaKw2MLNNph475atCdAGzPBA15bEprP61ph8J61MAHYp7DVNDzuWGUjVwP5Jtu",
  "key27": "4SjgdKt3UNZP1PLxHtny8zGRcsoXxbM8jKi9Tv62RYGGhTS8HtwqCc4Au2bHrz1mhZLQvC8mmnUsezfbmwiHnHec",
  "key28": "3ZJWwyAQ9cfHs3G1rsssQPMCvTpUkky99Za7KHFdeW2p6HVrxkfsTLzasZ5AyB9Pb8MAoaAaBJAarppxyv6zaTLL",
  "key29": "4ftBDRbn1RYoi8StSM1EHRGAqoN51qfCXUiyA2q4HMZhokkEP7yJNxFkN6bmQPR66HYNkqWor1kb2bYBDnNTXeDL",
  "key30": "3W41kq5Xw44kGRb5wZLw5QizjuXf1fpWKv3nxgsWnsJxwFx3wymsVSKxtsjRGS8SvTcC85tuAX3bGLLPuRssa65g",
  "key31": "PpVo5u3o8CqrPjAxKirdgSWuTv9P3T6iFw1emXy6D2u7YYaysK1o4tT56tQXj9tshyAiZn7CrzRitoKiU7KSC5s",
  "key32": "3jZnze76uqPrjXRVrf6dRN4ueT6wXFVhv2GcarLexemR7AFuD9rG3T2p9cziLSVnF67Yuw3fsP8NCPy4qChaSKag",
  "key33": "2wWZYbaHTQwDGdkaNXQDWt4785TqXqqXwGeNgSuGpSgLXwuJZTtGWAwjcX8KraBgbd1roQJSZttv1SDyx5mUKnKo",
  "key34": "VNmyZtWLewYQ7PdDhBs6C4LYxU9WpKmwbgG5pHxxetaHb8nEjCb6PDyH2r8yRz4j2HCCPzkbnCnaPcejosRap6T",
  "key35": "Styk1fykm58rWkzt96zdwARqT2T7Rp8ESe9VDTYtdW9nRxACkLHoGWZXU2b5k4pw5ZwdGt5ewwSZ3pigBLoDBLA"
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
