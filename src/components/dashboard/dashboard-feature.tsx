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
    "34BiPv62hP8d3BkUn9qxTtcatby74jNNemwS25oPw2Nqwzgq4FMELFtDSjwUTVAS7XP1qUmy3hWjJo3wYTacQqk1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Puu7KzqFzu69RPzJAGp2yRAewp5ZhdBCZEdch8H28hmR3H57YM6CACce9c3oJUgq4mKmKetxXY2rDcuG6PdomHe",
  "key1": "2t97M1AoY6HbFS4WEea2nPEG9Lyu1hD1f5D3XunYfYs4R2s23co9GXT8wUrZkEc8GG5M8997mA4CMJzHPDxYn4Eh",
  "key2": "36dRYFdzJ4qKyhwxGuKzAfBfDfAH5Mjs6ApUqQMKdHabG2BoHwLDGmkwVD5VNKwwU8rLVhhCoo9yVz1W89Lg8wWu",
  "key3": "2RosXwbraFfTezrHFDtA4ARMTNV5u3mgisQ4emR7TrKydPkGJRKgTpVTFHaP7KE4C6Sm7hBTnBjNvskyNcLhEamk",
  "key4": "GMA8GujzLHdX6f1qyDRuhLR84qzJr27HA8KhS46ndNxADK5pYkeK7HoEGcAvCoLh8n8A2V6NHBBZ55HKZnQAHqv",
  "key5": "fKxbXETqHRShsHfvS8FaTuzhWWriBeT9g9YJN4MSkkw6rbVhzH1fcxFXpbJ7fr2M2Xszb9L7sFpNZuD88uSwug1",
  "key6": "38SK315RT2c8QXPxbfvzLqYFVJMqWtZJphee8S5N2z9UPmKFSfAgwNHXgqCw1g2KncJD6osH9ZeAHuG5WGfzvjEp",
  "key7": "37g2o1WgwAYxZDx1rJWhsUke1K6cP6DnumBEtj8Rc8djwjBx1Lq2nkKqrAs4hU5rD9nTKPjnLwrdci6XUggWMpQG",
  "key8": "3vXeoWZPf5Dr8QKZmMoJqM4XQxKnrQPr4XhFTfbca2ZtJxbWRfBVW24q8wsa1uNTFHsNH5ZY2VxuLey7qms4qvSS",
  "key9": "5FqhCKA62aFsVKrrygLpnRgZYZHmbKktAz4VSX2CDWtrPGjriLEErK6MWjLJnFqnwuw3QrnnwuH43swTkk3yfgLE",
  "key10": "5dHEMxLgvtvjG7afYkCu8q84A3cXG4nnDhjcjW45Mcip7GH2X4nW3MupL3XmuMe36cgCmd8eF7Rz4hRZzcS4FfZv",
  "key11": "2bUKXSkzZ3EDWDxN4nC496rr3paJoB9bBLfXHYuxbZhKKDcBGyUGHNGkxwB5zB1nBN84RCouhNssyPoRYVm2Lk66",
  "key12": "5HonTG77rjyQ9brv8euiXQGPNhusuaEz8Ro1zC1nUxdf8GuGb7cc7S7AxgWYREBQA61F7xWBLZu7EM5yowvk6mBB",
  "key13": "PHNCHxYJfvdyEsV2Na5PLMyLrwLsyVd3MLcmkXN68EXc3JmVemz6XdNpEGx1DAuuDyh6GNVY7xNrBiuz61FMkqg",
  "key14": "2Ad4dvMN8pvuuY13SSaHASxQe6f2SAWcdAqA7AWpnDSJZQZdREmufEU6HwcW8MnDwMK72Gt4nmUqn5r74ymVjMNB",
  "key15": "4sL3Hg1ArDoFXrdvfMtzfagCeC1XAU3m6iNXzakbPJ1RxGtg35NyToqEBmRYe2SmZUme3dwGqZYuQbvxViNo8xHk",
  "key16": "2spwWrCmeswPV7pjbwu6bbv3Qn1gAbq7uogbtyCRWuveGkfhpEBx2YuaKqcGvhEUGMYWGEiBzWcaxe6RYAHes2yN",
  "key17": "5rdyDD5NFpfcycFZxt8xbiW3aHCM7iG1ZvTjuotyQN4F1cXTYXFgRce26AVWYas2g84FuoLwuiNPPjiXnRFfe1c8",
  "key18": "5N1LL1iiRADVoP44AvcK7DzrSPWb7FeYbhpuKdCn1tUo9aRnzxs3Pq2cSDRKtLQx7xBrTgrmrYVmrDQPwNpVWZWs",
  "key19": "3Qokcf2bXMHCaGPxmsJvLQXbT3Yw7pB31HzpdzxMehw3CqGLNhth4rwgssDYDtkX7ynTBrtXFehMF8HdRCCJw5sr",
  "key20": "4sDL6zUhEkN3TRrHsVF2DtrGXpbsDRQVkKLg8kTkBFt2vHTgwSwYPETiyRy5k7kTDsRbK1oLDexHDNjp17pzJYET",
  "key21": "4LA951Z15irdwSjBxJtXxBUUECG4TwMAE1GSyyNDg8Vna8Z9WUdtRQobjt4L6DnGMq1GWDsw5XJmLtwKKT7NqnKi",
  "key22": "5pZDmpER4Bs1rV67DxH3zF5nNY1g3QrPQNJTeMmKHnRcXeq17EFiEdRJGJrdJdzmQ9NiapoUwkLcvmEGkr2znaRv",
  "key23": "3FPRBT2RUkUJ7qFVc5xGJ2KfEMTjGYWiwpqn2gAK6iQxW1NDJmp17NHJ2FUP1FGdmyfrtL83BXxrYV4o8qEBHmRF",
  "key24": "uWZBWYXvD4ypy7Q44VGmxpaMPhf2xAt8Pt79YKHN641xw6UNefNTecQcx33Ne5uRpFrecB3cWhyeuzB6GULwQeh",
  "key25": "2QWxd51E1EcHNFEkif2Kk6vYKBtD3bidF5x9DYHSRUgQQy9GkcpKHxjFgFtUnSv6mteEYvULj76hZdjCELUYaKPg",
  "key26": "4QAF2bUA8FoiyxQPJ7UPSpkjpsX5wiqMp6vsXKV61GCZYpivaK7dVYBKQKTrWwe9717mZCZKCc5LmtXtGojJAo5F",
  "key27": "3qZoebsSUbVrkLrRK5Eki3hPJqEE3mqaA5gwHG4ySFcVHFUeLD1mKATo4vn7P5o2AuqSraba7UbLovT2FKKxt1Np",
  "key28": "623pwpUNuzMREFf6Fm13ALmzs4G7Q4aZw6W9gvpVewpaVjvgbuqZ9DuKAgX5YCSzmW7F16DbdbQtab1WRFDWAKr5",
  "key29": "4rWvnoWb6MnJHXvmfd6h1jXXqcWCypw7Qg83ochvRXt8sfk3VfVq6sYNPuHYfyMxcRd2VMLsiVKMPLG1ZF1Bmxn5",
  "key30": "Vefm8FdS5bBL5tmfw13GAKhzXnNiPs7vCyZ2YSVaUDvemNyfkuvSYn2UXQCfPWhNaNnyhMsokXTn5kupsGVBC49",
  "key31": "3nRD3FxREwQchmvgGLyMMfk2ejUw5gZZocLJWcyp56jc7Y4PViWpwbUqfgtkR28jqfNpsqRvBM2LSotqqMGtshdF",
  "key32": "a3idwbNTJmn5VWGPnFg1v21PT2ipPrm9W4kBiZMMNmXLLuvBPuvXAakwuzTd8eSbaxYHwTegUc3PRo2oVXhrwfZ",
  "key33": "4jpWmKwdNb3PvLUbPUPG9icQ2bY7x5ATu5sr9kCwT61q4WWBeAJYbtpYvfFt6KGbksCqe5aEz2FG4r9E41oNRXmb",
  "key34": "28jW1CjBNjiRPpuRd3wePoWYw9hzUdftuoNLxAygfQR5rEX7p75DMvHVUiW44vdyYdDhvTLxz7rWd2774mk7N3B5",
  "key35": "5KMH9SsoeD3QCz4GTg4dM9dF745aQQQGc26ryW7muoBWhfFesM1VbQhUgsBHVLnJYQKUDdujWD2rFt25n1uazUAn",
  "key36": "5RhBiXUSHd7PuPZQBhqKg2BUN8AwswjuGR7RSMVxpZCQEPqr5oaagE82WyjWMQmFhDbgZfhkzhTZS4m1XYhQLzXw",
  "key37": "5Y2VwwiNR3nksiRZtqnfqGiQ2bWyLsep6bXnsBe7qXV1pLXg95t5poFtJpVzc8ZomNRVNG2VqF1H7mi96ZXTZNm8"
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
