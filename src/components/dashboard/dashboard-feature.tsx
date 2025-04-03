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
    "2XY3DNTb4vEqxQDjeatGqy1zznsMX1WuJiqQGCFGRtqDEAZJUc4s5cTfzCWc58quhJouJ6UmdJt5jaqM18t54Vx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oeaJPUn8bQJoAZGdsvQjUFoSHdCHAtMVS3nLVgnS2nTeRsYXzYMAX7J3PuhnWLXmbQ5ddf6Yiw8nPacrgAMunLR",
  "key1": "7YK7ZvpXma7F1GaYUqqf8qoPnovA5McTc9SdwdMxw62eAAffTfjHjJcvYH6V4T3CUAKYXFZ1bWskJfV2RmbZwPk",
  "key2": "3pr7FzjKKwoMwjvj9cC8Chqs7hNVcRggMCLKSBP89Jy4Esc5aTThKYEkAs77mA9rJP5AXzMWBHxdvfiSMPmWdiF5",
  "key3": "3vsYy9oD1zrUEWEwxf1bFSpaThYrtLXSQFf96KehGeVtFnXyXiPcJBVCBQFqR54suhCC9DchBHRP6CWdADpWTK1L",
  "key4": "5UmWMEBANKCAKb7vGXB4tHqM8FmqLPfvMGsAmjXutBqs66Az8YYcg9zJ9zw3JEAn8bADgo94e8xsSunzt9fwVLb9",
  "key5": "2t1g4ATQ1YDzzk7YSRLF675y31RxGfiqtiTFunViYcS16Wir6dkJUh4VdcH28YkppUkLrheBUzfhJMCfXTMwRgBs",
  "key6": "a6SPzMDMm9bTkv57LwsqUmsdb4sY87cd4BASSLLheByeCzy7f8n9UQyexoVbtE3WWp2N1Eon1jLaYDetJuGrAqp",
  "key7": "5sYxTbJH7UjYU1s2exqfgQgw6KyfGkiDoBqJz9BFMet7FcKaSSgtnuy8FsdB9hkNNzbMvKwjkeUfUZ7yjTULQmYu",
  "key8": "UTVSpScLn9KP2KPWz6rKzQgd3KftfytBAztmBhitRVrTRZHMUyyynbittDnfm1EPqLt1tQzgHmvK5AuMndNiGuM",
  "key9": "5rLLGW79u2VVFUGwBNzfrayQF5SrJobNLLjrTwEXwR7HZWRm1yiAB92cANR65k6NKNEzGxcaMdjnjqaZsEW7jeAB",
  "key10": "mgNJ1NkeZQYSVo3xF3b52yvkZ7X9cFqmNQdcJLDHebAZfWvM9vqVQ7giNL9dCsV1VLeaKvUViqN5BYnuJaZhaAJ",
  "key11": "3kjgJJPUBJM9LvWesyUjLZczEfM61wU6mejLR5vnya9vrJrQLv7ZBBy1QAANxhd9YwCQiGoehCh86pSz84B1sAEZ",
  "key12": "4x7B1Zdmm9M7hRxSTj2PYD4aeWeqsx6sq8Y3DCDdjY7cuDmqzYDg1PaRBhrPYpGFipV9uM9bFDgxoHuqHxtVKpMk",
  "key13": "3d4abBd8P6fV4boMD69vNJktkJZGhMy8zRWwfuV8mn8DriZHWanF78fPNAjMPpG39zDND95AQKZwKWUcBUH4ebsL",
  "key14": "BGh3LKrLsy6LFXZXJnhuN6LwXhgpwjGUQV9KtedPg84o7Mge3hERTjSrAiCUQyboEtDqcvCUURBSVUmUKVopZiB",
  "key15": "4ACv5PkpgcvMFhdU3gNX8UBTMuBSC1ijS7uQCnGFM52vVowVmR1HoZkTVyZqRH21xRQxjzp6cbjVnXS6VhXdTNhZ",
  "key16": "wDitxhvEZ9q31zinVtTZLEY1ziPfQEdG12BA6T7rZv4rSNUuLWMGhGe2t1UZxS6kXLLMUHuCZge7DzAjLiDAZ67",
  "key17": "4fGFuhahGYbfDrhRPR1S4KfcE8ogk7Gn59cSGQXbcPHyj9Gj4ZYBvFKHZTwfEuWgLmwJgCz1nFSBFmJHVxttUZTf",
  "key18": "3ybUoyWPuuoBbHr1nB7bVaKA1HYnVkgDDtrzx8uN1336cfwp8JNGnLv233NCkdSrgBQ2g468rA8ZmSC4BHxaYjcE",
  "key19": "4pFNGQphHFAhAHpdNJb91fX6sRTC4XDLacReuEtNCDqMMRszAKjEzXYwQbhtyntB6tW1ZwaA66DTNo99QfqUuHwK",
  "key20": "coQAEJJG83Yhx4kwUdQknEC7P2BZmRt1tpYkCzutaCRSdq8kJYz8CWFc5JZmpP6AH5wm9oJxqxMesJYUP43VCDQ",
  "key21": "2pR8YXvK7utnMkgBNfTGzbNEoWooHXBTw1WK7cJi7dT5NSRRaJ4TJuuSnJQxsgpN28dJFQAM85nPixbpADA6naim",
  "key22": "5bQLfZ3PMMghJh4kYBj6FpVfVJnG5nQ89t3Q9PPMkhiE1KqQoXfDoWkDHhVuuvYspCrtVxWSDgxAe9pKfiKGa7Mi",
  "key23": "5ksbXSU1gLvXDytRVNczKaMwtzQqCw7FQS7vZ8kiRKDKVknVC9BsNwWLgbvV1roKAKfZxNvNfXSFrK1qbh7uQkCM",
  "key24": "2rqfTu33MdLUMNy5wLZ45zmpJwUwVH8XpT5jDwcPgs5nyexYzLJaNmWGWQ6tSzCt167Uf1oeesaEw1Zaigq81wy2",
  "key25": "4Tpi18RfoBGNq772bQNNMvbEqEDVCcobLUraVgR54NDTucvGhk1mTgXYU4jchCgjWjzyw5KwAmhN2bhw5GBLaXRg",
  "key26": "R7yyeZ9kmiHi4EUtpnNxemFvH7DCESfykeDx5XMkW9w1CocaLLogV5shrUrQAFt73deYAHz1F9R9g9DxCJhRUks",
  "key27": "4hk4XoKLD5WE7zWbo1GST2V8kMTfSadAdtNk8qn9WEYXqiSCpnRkc3rF4mdjv1KR17KMyboRR93cnEHfHHoXZjis",
  "key28": "2ZL7zBVXFqBj4KzYoRN1RGStaHpiVENgRK5DstamE2MgKLskskQfarMkf188HGNPuv5tYbUD5NgVZXSb4vGXsV96",
  "key29": "5y6T2nHtaMqBpTycGsKbCahYbMGs6gEuEUvRjkVH3AZbP2y5omDQEshzSJuWyQMj5CedhDBsiiNdKowTJmLTd26z",
  "key30": "4WACM7CbRzGNn9AHtarM2HMkykuhvEjCzrBBzgFBmKLyBYtG2e5NRfqLKQEemvk8uXK6jUbLr8upJSGwzKgybWNp",
  "key31": "5hfzsa2k5gyqiVNgNTNmbNp3BXidoPWrZsfbuexojVsMtU6oz47qE3H3kRdBcuS81hqSgBjXXYBWLdSnbMGvYQ3s",
  "key32": "3jA9s1ZzkeBrh9K7t14FJVTbiMDzNWfFFN4xys9VT11oQUkZ7VoypJyUmjRNCpP6t76Aop9MXVaXgn24NyoFf69V",
  "key33": "47n5KTHMYEKRFXCLfAVQJ1YR75mebLqrdRjKxkuumB7aAA5n6EMAUAWaSp2vpJW43Xuc2i5hjhKoKimFBfgeAoQG",
  "key34": "2auXz4iosH8RWc2Dg491j9CAVKAEyc9839Fm8oJCvPCmCeFdrGnZ4iSJACp152hghRaGQBocgp9kohRjEjok4TZN"
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
