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
    "48VwDpcfYowGugcko3wx5sUB9jJoZ4WU6b6o2M34oyZgRfwxFKcCGgiNzMAKsSDpKfMx5cH1FboCNbMqNMZS1kAe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iQTvocngT3Ac48qd1EZxnYdN54Zz3TDwbqQRfwMNRgLj5pC8r8xJmTK3LL6s9nrY9K8LYNnvarYUYXAFxZd32Wz",
  "key1": "34BCkbE5b1ErR8s6C5V7uhaCbnadAjoQAL4cug5EixfvZXdTNaabvjEuMXnCpqiHEfm9AtYbFax5bjfjVfxQNQmk",
  "key2": "BhpKq9ByY9rURKntFAgTDvc4WX21RyyGT36pkgff5V3KsXQAEMj5S5YZ1J8VRZoBkYhNYymG5xoahGMVfycQKFo",
  "key3": "TyTxkkyShFeAQJeWDN5eELrUA5At9bYkKmb8nX9744P2rM8uQ9HBU1oHYWqRusmVcoW6gNmYa3M7QamWbwYg8fx",
  "key4": "2iWuE4iJoLf57TuN6eVpuQDkWq8wLarn8op9oJf8XcnTkbxxuw2RZueaFyJ4Yip6FuuVzmqoufgyZoDatgghJycY",
  "key5": "3iHnuTe6SjLEy6rRXtgp3DsGRT1xJ9JbFyAYkUWe1NdjyDLYMbKLvVrEPo59yL7NdoeCrtTBicrffpvKP3SfLpr2",
  "key6": "4avavTgAkkfK6MPMM6AVbukBgGv7mEMij8xMoDg1B6iw5cU3VeZKcdWbjC6jSXe96ysF9jLjJULCph1KVxa54RWT",
  "key7": "3YbfSQD7jQuvN1p4bnPrpazpQeFJmVhGtTkDFUKNB7MaB6moPrvAsbcYomVC1jjBCuCT3kb5RJqtLj9rAZzwYr2a",
  "key8": "2vhTatqKnNnkXH5tdGgCMdjsmmmhKhyav4CkbCJjBvN9YSre8UNriSwaM9HqLxYg45gkqa2k8m4rEgrEGbjYV7TB",
  "key9": "59gF9GTk2z2C2BKgxF9usT1xXWwhCfgPCDXjcTvwtWHPQYqWU8YmQzntkeDAPYWAQK929HdqKNv5DySRtTwHfRnV",
  "key10": "2HMt7AeRR1gLkwdF6aXyULq4bYyzW6b85PZWwut49HDbhVm44hpVNfCDrpgHU1v9YubTcoGMnLH4CEmSFBDw36xE",
  "key11": "5cCn71Z75ZjS4Tj45iJN3gzs3XjAyQ2Mr2QuwJSxxcnfLKmQsPDdgj1J6QBGK4d1SQUWfg7EmcDbiu5EXATke6eD",
  "key12": "2mokmR3XKHbfgu2YFgjtD8k6HqEpXdq5arvgQyazRxttK6VEUqzZu1kK57TLS4muJ2PoPEBohiZPBcVrv1oUgR84",
  "key13": "5stmEpC82RhZiDrcxsXtZg2UDbb4mze9vnNCcYQdMmofbSiugvYroHgmBcwXNvRgdtramF2U6YkQwviqXMwQJKq",
  "key14": "A5utWmXX83MEpFse7Rn3GoceszjEPUtUgPLrs4yangLTW2yMJKgFeYTXT48RM9fyULdcM3B4BkL5QmrJjRpWkYz",
  "key15": "5aBptJKnBKWaLWN2pBSjtJ3o5C5itQCXoPTWFFHssgvjvM8At2q5rVPfEkJAdCeMRAnM51NNgfzCDeEGpjCH4bXP",
  "key16": "4WXfooGVscqKGP3KbWAJUF2XsEWsXPwnXPgTtkpUn23YCD3rrY1cdKa8ruB63RyBzYhFU6P79LAquZq2FsZTbu3c",
  "key17": "f3cipGLjDtAm6cmY8gBFTB54zSfbXHpEQKnF9vgURJqtpxb4iPki6DM6xdMX5JHSiyiqYi9yc1LBxAveY3xruUt",
  "key18": "3fqxjWo9FoBCh2Uzbn8FngSdpPGGdKdtd5ZSxDBtX3qgJ44BVPUYUYepu8Rnccs52GtqQWoAxZQfCS6tcUoYnqt",
  "key19": "5bVHUTiCtCPp5uaZQb5AUBYtWF1GswDvvdXB1mJ2ZRu4VupeRJwAbQaE4t1ePC6NG9W8bqFuXRfqxDfDCKD8Uqet",
  "key20": "2TAx3SDRVPD3oUozCM12arZateZjYi5N2rrEMCfR7NA9veG8LpK4TdrWT9ryJpTppgfajyDYTvQYk74GyMcp3U8M",
  "key21": "2NXkJfSSXyhapYXrQ8o3RxMXXhj5tErSC1Fpb9344LvKJtVFr5V9YHxKcD3BXVLFdrxNG3xwtrauiwyCiPs5nWnC",
  "key22": "53r8dnufn3EyzJ59Y2JjfVxG2YcBmPSxCEpvawPwywWqRBDecNuznJJXveJUZ4Xco1Lh9JBmybvAvHWm2Cv91J25",
  "key23": "3E5sDxj35rQS8vNdLLMwSwuZy4MSJ7eqMxpv2oDjiXcnhiBxMT9DMAz7LqW6j1BBzaRPH1Mn5WHsys57iTyy6eoL",
  "key24": "3N3jdikj5hyVxUjvQ54vPGDN1KZY7PNw1ZgAMLmtC39fuHRVw5kZd3M8svbuHHUkXWMZajnJBMyLxKtnBZMT23Cc",
  "key25": "4AByvLR9AkpW2ZP6EH4n45Pb5keCQ1XMu36bvXTgdqKRw2SQTakovCcHH9sXFe9RvQEtsiaK6KFmmdcRdqu3TFcY",
  "key26": "1N9JcnD5yiz2uf6zJCGzxTcew4bGiRTsPgMVYYoRchMzS5uqaiB8o87cw7VGzWKjANajjB9Mwb8NDQUfVXsS5M4",
  "key27": "4FegKLQjLNAgLaCQMH4nKcskzPgL2qXqRtTyCyUERn9V5Qz6VCNXKKjFzVE7KqtxsB5pG5bvCTr4NUiwMUrELcNB",
  "key28": "5JdU1Hoknmfyo87qqLBiZEBJjivign6AVYbxDZX6GKNNWCUbw6PYx9xc84sEknZy9tmiv2dn8JawwxE4Bqsi9w8U",
  "key29": "48nhfKEMVtVVLHDjct787zgYYhbw8F6Q1q2xRUrddrJ28uNQRo7XtbPKXLAZpybtYxVjHm1QVEBy4SFLqttCb2qR",
  "key30": "5nehuVABTeN9ZEbyy9Y7nPCA3TGvfhzMKt68KjnUKi9XXWL1mKUyQKL7SB5UuqgGa6NNuPobUMxkRxWdmgdGt28M",
  "key31": "2UEztHvmmSGjd3Bxgt1WG6yfwodvEt1V912cwKjxLBBWctwxFeDWi3jQk9e21BLCu4SLtEEXYde6eaEkcWJV3CK4",
  "key32": "43eDXAv7ZzEnuhVuoQGuchi4afEomH3SQvPokz9P1yCW4wFPmRnJxsxu2rSAjQfa8LY1gMUFoWvRK1oBqZgBbtRa",
  "key33": "jBUVAScVareWm24xkMsqBtE55QKAY9nMEooWaw9utpMpG2gq6iP4G7qwG5otFWRba6knfc9NaDBRnGr8yjvW2Hn",
  "key34": "5swSvmk27v7zj8WFDuTPezEXAmvCnkk4zkYgrkyFcGZpn3QSWzEsin6sY3cd8PnWFjVd9UkiETzF2TknuRcDDYPE",
  "key35": "5ip4LBd9ByuC5UtA3MaQH9hVb9xpHdZYuocfXth6WeuEwdLM1qfYxJwxahRVAJpTKq1yyWmKExENxH81F2mLDpU7",
  "key36": "4tkGjEJPh269J7WuhtGQB8T9XDiPncS2vJFBtaypyFELuvuNHfzndHu24gmfgUPrPhJ9PK1pydkXN9U9iaSd9Hmd",
  "key37": "c7HcGgvMNfvBSrF3KhdsSVFKxUVczXLZngHfqcteCdkoUY7s4YvpHDLHAhm4YnNftRF6FeyC6HJRQWbXabmuncZ",
  "key38": "37JagfjmTgC1EuHhAuSCvLFa5z671n4fN7MdbttTMvjHR8Mx51yhejonjVj1nPVK3w3ZgeivCdwhHuHAfQVPV6Xs",
  "key39": "37nJdc4BjXCRHdKMdYYY4KfXfqpnufbNQDgkUcnmUftjLyhiGxdA61qmpsu2mdXy3iHzmNsE44Etbbj6mjeAkana",
  "key40": "qmq7b5QWu5uZqE2hcoJfptpe7wrXDEoauezNckdbs84BDLFDQbTLfbzzFQvzeWiPLZiPm3BXQmjzKyM5z85o4Xy",
  "key41": "5TAVkNzV4AeTSJyXibYCPdwamNC4KBR5Gu8j3y8Ce8wedru2TrJXPv9wBE6y34nC5NoNRRknyXqjB4ufqEqFk6f3",
  "key42": "4DEmyeK7rkWXYKZkbKTG6KyjYevkfCWCd3a88kgGcWShxaXkZopUpaZ7kScqCKFJuR2iBxJUdxuJESfZ7TK2Tdti",
  "key43": "Q7pGCTMdMBM5ZEZcA2xGopUy8KZya79mQpP13ud3kqywoYoYARmZHArKYR6EBJHrvLm1jTLBwT2Mi5RkPjXPGHh",
  "key44": "7jfwHHjyg1wgmWbUUNzdphTLjCmYXXHv61v8ao8CtCNkCDwXnES53W73Zy83JHKgj1yQxhcxFZKtPKsL7HifBNx"
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
