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
    "EtTjwxcK1E8ThcnzSE3nrQgTGbJmKuLxJWhaq1sfhRMPpP2NL9uv8w2tHZiWhetgq5LaXgA2aYuqVR6kbnwbS9B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46dxBLRoRUamtZhN9n6yQdEXUfhaVZYZnubCTkZGuamwd18FWgriNeUxcj4r91uYhVugSF64fFgyCV4CM6RJyPqg",
  "key1": "WesiLFUdHDioceiVwzXELwaTH54hgzFPGjDWZoFUQ4M4XdnHJ7T1jf41JSjwQq7DdejyWWC5j9VAqkN9eyXJhfh",
  "key2": "3yx74wb4sWLeyLJqMcr259RkFiL1henSTy7rykzivkXYgu7h7o2JHdqqAhpCGHu4Y9zUFbgETAWk7cRAngPyGPTt",
  "key3": "3LK3k9PEBxMFymMBWbka8buBPd9aHBq5K3hM1YxcF8hX9zKwyaHsXXf8r13sH3Vh5vACy2esnGJ99tN7HPjhxv5h",
  "key4": "2JQdEpmh1DpCPm7z2wNjruyaDpEdjQ8rA2wpjGSsML3B2bxa1gthrfTJukWkp8Kk24tNroDob8HXNsYMG8dvfP3z",
  "key5": "2ZgDPPP1iAvXtMQKA2MaZb1brvunwCrvNXDRmxz2X7j9EGEArznSsrQfrqriUt9yHftC66vcbW9o5qt9dhsDjLbV",
  "key6": "FEXQQba4RwHYKD1FRfnim7Q2xExHQnbFA4gNLX3gseggHfe8ymkbWvSFF79jCJa3crt2RSHLLHersD64TxqKBQc",
  "key7": "2Fo8Zopvjc1tpriYvdzLPFtTdxcqsQXFo6Hv2erqjPQtEb61SoyBzSCAX41XWQixJNBEdGzi9Ur9GCXPcRq1NJ5W",
  "key8": "2EZE4H1V2dHmdFfYytP6eZAeGFmpfjmgUzWMyiZoj6DgVhYMQG8NrqSXSzv4GEcGHziNX6HkgB4kpT3QM6w9rmJL",
  "key9": "34yGNQigA8V9gG78CHwxXtMQZ4Vm5oNLKju3QoA9bJvmZnKC6ownxZPrnawE3LuX1aGqwP8JdKrcym5VqD3uqdsQ",
  "key10": "59bsmnhSFMdWKCaUFQVysdACeSTMCqan1aNNWqzzQwnn27M9FLuFSUo2Ruj8LHgmYkw3LG7ZcKCoxnhLPb6c9Stm",
  "key11": "5oSzA4wDDJrQ6ucNArNRjjj6E2dJs4E4oi1nnGEnRLAqLWX19SqEjuiEZZyHNmiyrjx5kgGc5xDWE7rzNnwH98XU",
  "key12": "2cTWZsxcTsWjRuySW8nLwsejucHX7KF7Fb7UiE64jLnawYP7PrvA1gZwCAF4QKR2RixUFXdez1yZAmnUTH3uCaPD",
  "key13": "63cvrzCeRwixq2sWxayGLM5dvKM3ZZrNYB7FVWawgK5mhsNBmvVYqX4JMkwDbSCN515JuvL6royhjqYvDiJebbyy",
  "key14": "4raoXLaMU8wKupovooPTifVsENbS1Kx3vaNakJobCGXeYaGiY3cmtnBGXwWUj4rr7eSRqv2cs6DcKKabceSe2sSb",
  "key15": "4mLzY1dvXdHhMXZNSGBNsUYvpR2fvU2VnvNEbsFuixMY8jBVzxNYWgiYjHu3smMag4AZik1mUkTnRgY889TNYF6S",
  "key16": "2D9R4GBUnTLEbaWcBzWQDR859LaeckZLTdjVn8YKt6zjd4WmejeZhxZF1jd96K4bbopCyAJiRq7BGNPa2srj986R",
  "key17": "Bt4afVJN3pdLga5F4ATDxZCDSJwKjdMqPEBCAf439HmYpQi6z6heWfoYrmWAiUgZjRdayWxpWxHNTtkT8eczwcc",
  "key18": "38PPqVGNZvi7MuSPiRm5VgVcTbeZsPT8zZwLvWWtbL4iwwMSzV4SPbe5DsDfdYi7BkDpRb15ZmvXMxHYEvfvGLkz",
  "key19": "2K1gpevrDkUPcE8zSnMf5HKNrzMuSQofyJ4MY7onxcPPE37s26Ye29ngQHpeqiZLmTLjdVkPDTXKnGQRn4UCYcAk",
  "key20": "TqhzJEEDzQKfVX4UpzFjo2G6ftK1vEuygXaXq8UNXr79drGvqaiGcogSFS7NU8RRvSPhwhDaVu5GZVKqQA5sPWg",
  "key21": "2ahpWbmp7ktmsvPB31Lhd5Ru3LcxGe7WwNjc1A7NraQ574amAYWGYEXhERuFiepPsk8MafUYpKQJe9ZJdaRHKPU7",
  "key22": "21VUvQTE1oTAFocHPZGcXWpALiXJ6y7nsEhK58Tn6Fw6tZV9ksPirybEGGsCD9QUYgUjDKykstYT1v3ecLsKXR9F",
  "key23": "4HwP2yCyRmAnmuHe8ZhCzGsv2o5WJ4AtvUjasD1oQr97yXpRWYNXEr1HAJACnfr5YaveBogPPDV8vJmuDQGbNH5C",
  "key24": "49cw9i1KYjuQAmkU4T5rcM2ys1UMwWGnPGg2CtVcc8qSBC5JsHvynSR8w4scHrLrckpxf7azX79FM7z42beYZFEG",
  "key25": "3kHuPNtkezaWymYKh5eWs8dsqwwRUjTfPkkWipkNm2PJYC6Fc5sLJT9xgBToWHUyFYxtvyZtSj5b8he88a9GsUYA",
  "key26": "4rTzqvdBU6zDAhDt9tb2AkDf93E2V4mphrFQmfR5PM4cZRijHhceKjTGRDWXZGQxHQGp9aJeFsGRCxgeujKdUkMv",
  "key27": "3f3snSkuf6wA6QKJyixaS9oPTiQcS7xTLEHQgD89ocXU6oLcz7ELRS4rMJ2HHKFH5atoxGzGDz842GAo3KnagCRG",
  "key28": "2RKxLLGJtq4WhxUumEtgJ9iWpkgjzzu53X4KLfwJ9hCzdXVP3K2VcpfytQwedbf6ASm13Xx81Hcob5NGJU8C7pp8",
  "key29": "1MT9918eaRzxQxPPVGMjp2dqUAw1BYLqWScLyKgVgrzPeu6t4Qcfn4953EvwfWTJseWyodQeZsXmyPeGUawZ2vn",
  "key30": "FCBmdAKXfWi8rz8B4XYWZTUnfZgFABAveb2kwDJsdUBUp5aXbTP1CsQDGkduNQ6PKa2JwvwV5YSvZZSDrPeqnj9",
  "key31": "4ropkfjEXA4SJb4wiXim1wnHATVM8iWT2qc9y8512EBDoY4sLH1UsQRPV5o4QWVe8hs9h8B3w2QYP5aiLmiGB237",
  "key32": "2jXYNTjqM959fcU9Ln99RBEp97FCdBvDP5DTgUynUDA4is2F6AQmbFET1zmJ8QrMe58Eg8fPQ6QSimGPyXsD54zJ",
  "key33": "3NRgCUxqyWftxiJ7NMMNLAcQ3zFkyPCJPHwXd2hDUqCJfJTuuWQAFUSVve2nZHP2eauwaWcfW15SCAeJwX1D5Yk8",
  "key34": "3voN8f8jenUpZkXw6m3mSp65MZJNKAf6jpaJUkZh15kgUx5QfgnDV7uo4ASofPPDHHqeLUHFjXkL4PY7ai5v4zKM",
  "key35": "AyuobDG4yw9s466bgX8mBahfobM21c5qRoYnr15JHXUs7D52GyoWvfiWve24aCKEmYae8ZCYJNKsQ9TBgeKJ8PJ",
  "key36": "gxrL5uh7PpaMXDRQKjELKFd1ftrt4ybZGfMe9dL4jqrdzEh41jngcUgHDaJvLHk4SgMs67ud53BiZhwHWhyumbY",
  "key37": "2NZbLHi5nCfWZFy9Mh5KWQ65n1BiNDYZmw4YwrsPsQmwSbJYCgtbjnFDWp12GUXTkE3661vM3RHQWQJJUeta6PFr",
  "key38": "3qszPYK2kQjQCsK2ei94BbXqfasBqSszCjoBmGodLjVG8M3h1aUU17uvuUKi88wAVB6XKN2C9dwmAQGXmGAinP5V",
  "key39": "3mtEPpbmUAUUhnfx4BCiUpBm1AHBvywEyJA94eYw6PG5yPjdLyKFpXuougrDHoqhL1eGY5wwzYG3vsjvC7tvQKXU",
  "key40": "264Pe2uhKwPph69yEpXpVjNLxCjSwVk1fyvLtZD6KY4xePM57bxYFeBzvkzXhA4C4SexseRtkvxQKRgzy18nyWQG",
  "key41": "5iLAkdVywZoqf4UqwDYfL6qGF2XZfZddTnW8ms7HXPHtcsRHwEdy9pHtTNGTUaBG7QpsYyKH53pRQPHkuGVTtrWr",
  "key42": "2WbFWWf3eJb7bzXUHQTVoPrjgSnckA1thjcPQ2FaFJ4JCmiHjUgxgdLYZWudQkDHy72f64pppoatGjqo2mTioMUP"
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
