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
    "BmNsXBJMyYtgC8XAdFVK6iTACw5zrZW1VJ6RMgAj69FKHnU6CCDfvb2jDpP6oVpAnrCxrbKz6efVoTTtf4xAVTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aypWgtr3oRwKnTLZZ6dQSq8vvDGef8Zo9Cn1wkL5gqh3z21oUDdUbEEUkiC8oQMS5Lkyxm2vD3LtN5RZtpPdAP5",
  "key1": "jp9HkZjXmrKyge57uoJAy47K4peRSSzXU6Emsd1jQhBLbUESpHqr4i9q35nwk4NEm4QXhNK8wU7QuiksZyfXvAv",
  "key2": "5rSS5PCu2XSR96kh5SHqeApKhYRnepa34aM7iJgEQ9Ze1d2LkLd6KmoKDGetaXHWwu1uWgE7Z8sw9J5fsWs3Nwki",
  "key3": "4yTViPy4HPJsgVzaueGBfcnEcvcc1kesDKXaAS8Rmw7har9AAiWxnWbkyyDbj4XN6egMxUAXawu2mg2AF2b6uQzE",
  "key4": "2pKgH6BGssCYtAan5ShThYbCcmhg64cnr5gMdeekAR1xhLLALw7F2eTxEhAwkptNd9ngvG2Q5KQAUDWEonHgsEQj",
  "key5": "3fS93X1vwVLfZotjdWEs4DqoJ9m8mKKwgukZKDeJR1WmsTdEwHzfhwMjbjDfLXDvmo74tv78qWtJXALVnrJhPKXa",
  "key6": "3vn9oTBCjeTpdMs5ZZMNn6tV8WRzS6BoZRhkRqD2jXGxHK4K1oEvdZE9gBicRgrVyLvSbdcSNTT8HRDTNdd416zN",
  "key7": "36iXFoBw5nJeUVrHm7Jh4Vg6JzF5JX19dp48dpAgjx8xxzn3HTQ4E78VJogQenxoMZJMfKVWkfSP3qgoeaJeLAuF",
  "key8": "bS8wByvYUxXWuuA9xCo7qH9a3CaVxfzXTRE1FastwGU2uGySGPkMBGFmrsN7uzgJWXVNjpfPGV6f4NCLoppVUeZ",
  "key9": "2KWUBRu8zfeDZqCVuV22AUPg3qABEzdWwgTYZTP9KbWiAw4wFj4nmZZTs8zQhUS61Kc12PGHdi8tgjTvBPDte928",
  "key10": "4jdTJL7XwTw5rpzg3VUSqUmHhX3G7EH2KA5zeiNZLryoJcDJK1VTmJ9ACjc94MoueXSN9yLHfBSDMmybWNXTvVhp",
  "key11": "4WJQwpgSjtUVkayusPC5422CSMnPPQCrG6pw3XVqrQLsQnipPf8xC1M5X61vAbRQTFQssjh7apiozs3mwbCLewMR",
  "key12": "3ykLryeKhbzmdnBVY6jRKp2L65t6okQUfSXy29pJ9pshkgSMvjDXxFBZCCnr1pMwotcq6jmZhPbvAKbTyM31e6he",
  "key13": "qJLUfzHSa6TJmaacT4jfDzf6Uscx2SjqkV5Bv1kNee6nzcUfT5V9U3Ab5epepxYSUd6mDatGmHxMgKYeEaUowkG",
  "key14": "3kqcvjEswkjHPtML1WGwySVt6hEKC2vHxuw8gcd1qZ59MBvp1zFMLoyvDAHg57aTKFMZor7EKuZizxERaLz4iF2h",
  "key15": "4U38P6z2wnmDk51i22edXA6jm3SsisboTrCxJuPhYx6iL44qdobx5sSBwATRXxdKxgtgjQJt48X5gfAL6YowqAWs",
  "key16": "4pwfM9BRC3uXr7nbjsoUapEsG1taCodMjhw4PaZxBh4e41ayJgrrapuTGBdnrKMvULxzjaT3mzDLKehxZNAXtTx6",
  "key17": "2gutXZvbuayCvQtuc77XuQk4h7UVMUNRbFRwM7hqG6XNaaULX21M5TWLYntLBRXyF8YsrAfvPDagqG6qEZUGYYEd",
  "key18": "bPN7guR3dQf3AL83iG3TyC8S9sNyzDJnL8YmqaJmJfpyWQZcmqsfaiRoTBe6SZDFc8zXWx5uYJkjzmTcNGaSywq",
  "key19": "42B6AaZXovjTsP2dR6Qbr1R2JDgunAA3RdpungMh2xsrAucZ91QiuJjMYDTtBip1xPqmp5QAnwj4ankPybatQhLF",
  "key20": "4YCksh3RMmdTbuEgrebkZPUBWnB9nMsTfZd9KFz9JnPnp4wmEvck2E1TWNtNtpC2CPpzmYhWF31AZZpCA1w1pQp9",
  "key21": "4VanFhdXBq67jT9NxhuHAFveMpLwbbbVYWKsK7qwCGUSsno3ADqZQJ2QCX6NcJvDhiSyJ8v2EfHYd84GG9MxvcQ8",
  "key22": "2t5bFH9EWoxMCt7wDSW6ix1ZmQEHoEepGvGPy2LZBcKFnUhzCnxwhoLKtAjQ1KeDyX1UWpwCN3X9WxbwB3CHRT2",
  "key23": "43zPvf5uRW3cifbEkqcovYpK1nMT7PzNvsSvpgDpDVFCS13VM7UKxobPbKswa6YhSoXz2f7nnSXteCsnjW52jc7c",
  "key24": "m1xfkAqHbGPwjr32BSi66Z1wFdXzZzz7yj3Z9tdTrB9MrDHT9n5z2efanbyacb4rrSEGK15zegJajLfuKQJCjTY",
  "key25": "JUJTpt5n8b8tNmdCHXhoULDikS2iZE4hPEUWaaxFtqEaKeT2iJt5M7uQqad7kyv5vMii4zXfATRqLJGNzFXfUDc",
  "key26": "42R9TpXAX4tewJ4R3tSAdKX3eKGsmXNK3dbTW2xhdqY9MRPw9b7D8L1meYxaUi4JKoD48zQhBH4Q7fCoekz9FAWg",
  "key27": "39nGtfiqkHf7MKK3GzseU4hyUMKJyATWT4PHAX7Dt7n1DptCkubkJJMu9LEi231RPAqAaABVWeEfa4VLYPajwadZ",
  "key28": "2Hq8eXszTN1i8ETiUmeUKwiNxYspCaVSUAdNrvao1p8EQsjkhJU6BvmLCATrn5VNHLKmaARxzb9htr8NDJggPkgn",
  "key29": "1qt6x4qLdFnYfWXtXhtFrq7NXT8zaUqbasDKbUZeDyfoZsSk6us77ZJMFVupEFAaqVc8oAkCHeqJqaTtU3M7vxH",
  "key30": "4tZvCtL1n9gFSiwCZz357FhstKYHMJ14P91uRq4QTyNGp9Eo9dVNJacC4pyXuB1MCznfH9LgUh1rWnUiuzMksi7u",
  "key31": "2cpzRzr6z5YhBbRkmVqsQ1qjGRSpUKc21iiJLp1jSLiKoakN7zTQ6yy45nopHy8KtYhkeqHetrqsudReX99Vk8p2",
  "key32": "4UWAssMj3UJyLWYxoGQ4F1iZ9kjjNu98dguWaM5pYEx28Wq8b7y4uwB64kKCgYuX71YZUHuoYL5PLyPpRfU3jffM",
  "key33": "MLoKJM6YDv1feXNCtdNqzj6C1T3Vv7ELkggSzUd9DpWkAhewYF2jBVND6vhJMPt49iarN1i28G1Kwp2LMefHx6w",
  "key34": "5UU4jCnkScmm7ezuM9btCVEwyict9Fr4Dg4EoaDyxP8JGSGomqeWXAuKGwvL8wjh3ou7qChfYvtu46QigaF7u9Jd",
  "key35": "4oPTa6uMzvXfPe8x7fzFB9bSY7fjw9JdV9dwPtamT9z2P5xsRbZqsyp6NiNMt8QwJCtMjqSsXmY9Xzb6ZkSpiJfK"
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
