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
    "JK5hw15QTWYSMurQwSfsnUxGQFo1jJ8hkJFExHeFjtBdWfmH8Za3q1auSx1mcjw9wpMyTkwQ4yP5RBHAZZNtDfc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LGjXZNFPbpUveLckoZK3oLN3HS6wHkrZpJ2KE7mknphxNoKdnZuWaXzUt7Ytsxz38GJqTidMsU29Z8nWwzE6sSy",
  "key1": "5bTxet5K3Mw5CEBHSbdTcjpTu4ckDh1YbJ7MAC7MvF8Ste64V3L2UkrriQQct9fGeatam5erosqXrCJYC9nYh1nz",
  "key2": "4Kv5tzrpfs2RWB2VRj7EsqJ5J83yvapopVQDfaBgQmzd9BkfbCLKQwNg8Bbxm7j5oWx53UE5yXm9p83wi9AqZ47N",
  "key3": "3bE3sC3wpMcdTLS7e58KmrT7VcjEPaC5rNMziidX6U1GsYMmVwuGisKpSNdHjSgfKeX4Vvci22VfFAqwxzCg1j1m",
  "key4": "874U9J1Vg8NSUyUcobkcAznwY5hRYGZ3CNXy21gJ98WX6ECxXAx3GV6JG8X38kEFVW6b45LVcTkzPafLtdj5dbH",
  "key5": "KwynzhHPALBbyJMRCNg8X1aVqeKg1kapEv81Sj57jZVuDhaV7VwtSSnS8UCueuB2Aw1TJKuwVpFZbPzEd9CwF8F",
  "key6": "mMP5T9KfkJGwKh15wx9Firrv7d36KaxgdpQzQwCjVgX3qhgFXCjwZF9LZkoxMoLhJfpsURgpDxmWNhz8iuurncC",
  "key7": "3pFAzxDf5NaKgCeJxQSXdbcx7EarJGAi34eaXVEBnr1pJHMdx1Z1f9TJb6Ho39kw2XJdxNaLQYEPdauQU3yrpzAF",
  "key8": "22suCqxoZpUJtSsHdG8bxpeb94gxDcQAbkUxBm3i3dSFXLSh3m7bUtTxwau8dnsYCvv5rnXc7XS1ELV7SaRasyv9",
  "key9": "21nmiWwn5oGJn1cnG3wiH54r347MiEFipWMjPJv146dDge36tHbNAV1pgYLNY3BuqxDji7s1v3uWBSfiNyHPM9k2",
  "key10": "5Hj7G8hyAs9cTFqRZphX2DrLahTXxmo4dwc7ZR8kTivbLoZandJUyvFhvhpYnGf7kDjAaJN2pQkt5tLYojEb8vew",
  "key11": "3SnoGFss4UZUVEgSHwGb93XWvEL4WTg6vnKZr8Cgieenho4CZnpbyZTEhJmj2c4QAyyzQdfn4MCvyHN2wMp59uD",
  "key12": "2U2moYV4otWog6Uo6rnBa9B1DgUVhKZb3abn5KMGsygNeKJw9bWg5QuNpkts5pe1reTGFvUjSSxrT4PeW4rWKJZ4",
  "key13": "f9hDwLeLyyUMjjaZ5xs8ZSM18FkBxfeQkj7BoSSc63C4ujAMQNxuLWZy8ne3j6gGXRyzX3VcQSjLjGh2vgV6d3E",
  "key14": "5E57eyd5Cfbefzv5CKL4nYSTj6mB1Sb1SRoBCdZ2DxsVyJbeVxbUDcQqkNTf52S3dgwaqtsJbp4HewhGyQgwEYTW",
  "key15": "5ijhtSNP42UG2UzTPoK6rFfQXGyCtaPxLUXQ4m319VQYUznEQPiZoxvQWDSXtYcGN35keuSQqYpA2gNu9nFAME1U",
  "key16": "2BZvLXV1zMrUA3rExkVLwHva9wA8cjcd2Dd2acWyTCbE96Xx5pimYuqH4UsUoWqUgB5ma37NRewZtL99MCD4MPgA",
  "key17": "XzYgNpcaGwL8rPcX1ju2Ky3wWWjjmC4Kkc6oF5QF6hm6oGvxFBadv7Dy8QUuHSUc3UfxDWrSwv3nczEKdXP3MT9",
  "key18": "41QXbbdH4YAryTq4kXoxRVXvoyaipauDMN1fchM8nJEi1qpdnvRT2zsomShzbHxVz75JyRHPPNiyfhShYDKVkdaS",
  "key19": "5bbNeUAZy8VspDfj38gG2R265AHv93UUe9yyKzxyfiEFLCjveTYtr7om8qvBhoucJBi5eubkE63BQfuxdZ3fMP4b",
  "key20": "3JzVbw5xWra6zDLsmykdz8HiiWfK4ErMFamNcYyUCFYFLWmZZpGyLJzX456JY3PpWFdV1aLFpnjbkftmNCAznsvD",
  "key21": "2B79LYLNMD81mRgqw7MAA24UM7q7E9kK7UpwQtUyzgy539LFynixgbuW8D2M4ecBPaZX5Q9dBBPVZCTJoKtzJr9u",
  "key22": "3qbw8kZbcAGK32TsCtcECpNi41cQkv8vqAGfFVQ9nP7wynPaupHNMbT57h6CYeQjFkD22CryxiZ1js3S55qiYqxW",
  "key23": "5UqDaA4nEp5xTSkQAPgCHZFTFjysi7mBfvrrmoCvy6hpYKzZ5dtWDJwbuhjuaohoKvDVEfLpkMZzEtuFx6d3mZAH",
  "key24": "2okJGAErJ1wszNvFxV1Mu875wkVqDqs8mRysvXgFdjxdjQoQ5XFA3VPpjNqjqxvUk4rdhN6mSDQCbXMvSr2grfoR",
  "key25": "34pfZxL5Ypdy1fek4U889rFCX3TFshhMSbzAAZn5ZFTZ9ar7wkXq1H3wYmvdGB7m9iUrhB1ZMKLb8aG14uKNSNhk",
  "key26": "oW5KLLEJEeAozyi1VNHdtoh42ZYMRFpHTYEKf8SYVJhbbTE9trRnt9FckmQqG6Q8L3sVrBveMRoFTPjsudJ1myS",
  "key27": "3kJvPLg8egXTDpD2GNP8ooDNHjnwKE6EJFuPjzUN8S5ErEf5jgfC6oBYdH4SaWmutHZF7rS5HiyntECZHjTmKMq1",
  "key28": "Pum3TXMs7sRK4jhEFJoRKgoqx78GpB6heQ6ZP45in7EDwiYxAMg18Wnpa8BtKXzn75cgQmH2CaMJEX2SJHLAFLz",
  "key29": "3yBjb54yNvKPZvPDUAPcVx5cQrerb299wFe8EtbnjJNomVycN64HZJCesJH7NEwfh4VXVSZXtWXGBSjACgxRYuYt",
  "key30": "2bk1R2WSrEeJGTnwzi1f6o5gQvxq5Dy4muY4JF6L6yGQ32YVFMDZbb4dcFkSmVPS1K7J5X5BbW2ehvPmKvoeP7p6",
  "key31": "5GYPx28kFGPsfdVx9jKLbg36Mhd4xHYgCuiPUiRmQ2qiY1saYrxKhJMrYu9HkAqNEdtuML9hCwTsR1UaTPPW41Sj",
  "key32": "3aNVv2xQ5FPUm4CZ9zjMEm1y4pVJKJmTSDYYMHPYc5Q9HbBYzdLUWZ1zmeCv3wvH1zxXXx5dydHwtbPrnUJLtDEk",
  "key33": "2dNK6QJf5gRQ2WT2ftbLWDkBtETtoDt9mvBvvxtGqWrE5PsoEN6q6QR83wYPFJ9bc5qqmJwthj4euYBs4tBbt3rF",
  "key34": "22gNCSkCfEGwsHVK6BGafMrP7Wvcc8syb44JUBdpjNFubbAeUsEEBeC72Z5a3oeELjR51GB8VPFNREDK6vUPMudd",
  "key35": "2JxQqWfyHoyff3BJHkXUuPcLtFsnC39uTqadrADTqQYSzD3J5HzqCJdBmLGq7QWM53F99rhBkXkdNfHhXrQMeZs"
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
