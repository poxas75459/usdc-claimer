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
    "2FZauphxu3oqai24YoTx2QfkCUG1g8bnr75Lym8c6skDRPeyzhnztudXCinTmN2yNTP1GTPapPoCW99Bgk2DdbuV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nt49tg9smpBbn1aLUWbngyRfrmDp8z3WnENY2pAWH3hWnSzqXVLn5D7qQquLzNRwycQsWc9dtMyNHSmbaEPhZmw",
  "key1": "3GRx5tjtmszZxKKycE4Pi55QAZK75wpfVeXjtRsaMiqG7MHEkFxc8A9tfTVkmq9y2Rcc98ykQFHTk1gZMVJZ8hfM",
  "key2": "4whBYxAjsPp4YU8UhaULND28hiXXyb97Nen5FV9dJLiMfouXxfHz1XeeeMe6j3ZFx348EPGoV4m7iRGEjhhtqu2N",
  "key3": "3jjiSHgtUmdRgSm3zNSo4SsbPJu5ByMaRb7D3Q6VXAi8nUc2rSL26bvwtVYvjY3wMjqwVN6DHyjBXitRzvPiVpTm",
  "key4": "5YrzMc233RY1si579HN5XFJC41ZhSB3EEEcNrYRxSigB8bAbET5U7LKdne2Po2rktYJ8yk3c4itLq9U2biwA4J13",
  "key5": "411oSgzUyhya5T5wkWKPbmLh6AUVNKCcEtwBZSXC3NdKgzmG11yWrF4HsVEA2T8tMbLUnpusan2E2J7qZo2C7PSW",
  "key6": "5qhcjF2FdvY4zCukZykBruqGzuaitbS7yx5kArz8QovAhJJXK4f7MxqwhzGK8G9tbNyoHHK9nFA4rYBppmQrWzLc",
  "key7": "EGo59m3PvMZYuYMzTJXiT872DJCf1By8DHraRxTWdDC5XyBaQuZBvha16p54oLdPhWgAEykM5YUow3ZpnWsfZT3",
  "key8": "5jjgnTV9JrzATw2x8Vy2iYjexxQEcVjEzBwAXkYDkVugyyvgbGdxQFDwZTY2bNJHXLgLzP3ABH49oYadEKP6jeoB",
  "key9": "2j7BQjVrVDm25fSoJouaCkXfwEwvMJbYvRDoHnE4wivx9zujFxwNri4ta3d8sPgvkf3uToteHk1tLp6zbzrsJfCY",
  "key10": "4tpDGiqDbayYieypwzzWzd1YqptwmQj22kdZs2SWWvuZLPSzP9RgsybVhvx5fBwaJmVvnU5fHaA9TS4xkb9wZGHA",
  "key11": "5ZZzmYv6dYabmWYqeGgm9EuvnjvuFbyBXCiYcHUg2ZeusWgj42BFfsib18PaGrzEtJJbyWmvJthMCDKHJGyYENyc",
  "key12": "4vWkbpphPt2WZpeGEjncwiAH4ygKdvCkXoYoB4qFcmVWuty5TFCb4rkBC1stCjRU8T3rs6qTSzKhPwvadbZQHkGz",
  "key13": "2uErCgV1Z1TiUqNFWYw3HGUg5eJ2Z5jmGeFzKWBp1MKBhH3T6GNKr6Faif2f2aNtnVTCQ88QTXs8HcXt61Hit34S",
  "key14": "2u8YjhcvcJSDdVmQc3QzGDDkNNR2tDWdqZMcshJ3qd7D3zaZgNXavKHb542y6uFxMUmYwRpMw47Ceq9FKmvaWVVw",
  "key15": "3FQjY1CQNaZPxDVqk5RsZcukK5gVUhKjvrsdmc6VaNsxU1ZzbyP9L6HtAC4tiPAX4cPTBSTeARQY8XjaijxufPgS",
  "key16": "5Acut5yx9yL4ssm3MrvgBLknZMSAF8Mc7a7mqbfPoUkQvd2mfhH6VYYoSqCWQuKWGPnDDQFzYuoZ3uBBHU6SEyyb",
  "key17": "5fcRrPYN8FuahzNYUvCKiQGa73E1fcSUTs2tZBcDSEjazauEgMWi2AfQizw6Vrhebprt56mVR6LFeay7WV7nfn3f",
  "key18": "29CqFLxFLbyGWr1D5DpizBeYa7PtZpnV58U9dDY7QqrHzqFeKerWknkx7nFs5YuCiWUJMV8BEhjkiqiMVmbfZxMX",
  "key19": "5tdH89FUyspuxcuqBadDpmGnmKeWJakar93upy4df6GV6DCBN3zXS862Bg2bMwP2RNwbA86AqPTG5ddaw3W6VwxP",
  "key20": "32uYADPWgMJHqVERmUZzye7bvmH2Gtdhs7UDSw7t6vGoRYSZzTxrQn7LHkV9hQkGRMTYArx7sJVvUC2EAhPQXkme",
  "key21": "5dRucjg576h4CDRFKP8Tktu5kDysESrHX8fwxsP47nvpRgUwyWcBgP2sW3TrVoXWrMrRR3E5xMawANXGEM9FVLk4",
  "key22": "nHz1TqtUuHmA6AV56RBTnQkhgFg9FspaEsiEMExpryPyhPRNYe7A1s17MnzewkbcRrC3iLhBhGudapa4Y58HX5Z",
  "key23": "3T2MHKfk5zrkWW4P5yFjoEDQiCQK3bchmVDp6K8jiKGo3CWQeE5XzEvQpGkBGA4T1NgdTm4KzJ18fgyvYg9gbE5x",
  "key24": "4ryY1Xu3TjwLdKoxdBK5yTzCT2uoHhizpPKPpMJkSPbxuAwyVqpVqR3ba9hDZeHqyMtghAwKwYbqYQTfGKXLf91u",
  "key25": "5zitFpThyzLf8zCVKfiEfGtMfNxydKFvmRwkjDJZ3gRTMUhQwKdgn3vSN57dCsHoPhCBcYFkS2ERryX8UCaBEtib",
  "key26": "4ArEzVX4AUyaAT3sa7eJTbvNKHBTDXGxcX12F4bFf5nXrunszWqNLodz19vJamR5Qj65P6hkiicGD6r68fNZ1sc3",
  "key27": "3ScA7coZdNrsmNfBwcnzQNMZKy1yQpGZtXJJ1EsKKmZjBXJwQSi8RnGPcph9vpPXRCJNwknzTehLL8rxdiQapvb6",
  "key28": "4juV4SEKicsVBwgs3aUCdYyFjuGUhiQTCyqsGJGop5PBx37sFkxk7W4WE1GQsDPJnQ1E8Cztn7xuruJ9UMUtuzyi",
  "key29": "3bWqsBzwwHSWVwRWMQQNEFyaJensnjsXyJJRmt8wryeFs2imVmoWFxGZUe6cXgoPt4ervC167HPHT3SGmSpEhLar",
  "key30": "NhP2LQLx6v9e9PtY7KxbuJQAZ2b8N7RphEtVqtrUriap354uKUfAk7iKPcgvVXN1GJ19ULQoJLZ6b7efp717Pvx"
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
