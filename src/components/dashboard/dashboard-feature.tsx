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
    "5C9TZ4Sg3f9BaZSgsx7SnHooGoDSonoKq7Cp7aLPmm555pz8n3fMUAnR6r4rLDgVnohooALfVzA2U5MW4C6ZfH5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NsGQCxbTVF1PBkVXiYomi6n8JzsR5NL6HXtoCyHSwiEdbbnkqR5997JzwpStYFVukZMEHB9ZetBNuGEp1GHJd1k",
  "key1": "42QcHboEzizBX4YYg6kjECz81XWXz9mzZxSJrLJrMQsSxwVFBKta4zz7q3xYYkT1pjWrUcExPCDf6GCRSymn2XKi",
  "key2": "5iqDYJdCzxkReNGm5h4X6xfJNuuAjV6tgnqjwk1iEP4fyGVCC5TZfaBe1qDh6rYPUdPxF6JqzAdZH2m1FKsgHdm4",
  "key3": "5f3nvRhMvDT6n2PMxug5P4kYGenuA719po4LKqHfhxQsmsncj7itfJAFzZCgWvYDEVUXawD51eg7qx1ZcueF3xbV",
  "key4": "2PQ4BrYZPnthm7giuNLvFU75WCYfJo6sA1eqvQXzZm6CkUBCYkVk1Xrh6AWfi4iD2XhqZ9bp6Q6LKpKP6mxrscc5",
  "key5": "ukSx1LvxkbYsfN6q3RE4Kvg3fvkrorFRySNHXBe3uJEXzpcinTCc58p7GMK1TpVKVyc2CQYz89zjwAWVWXgzGUf",
  "key6": "5xKfAarKGUvHD4622jDNuH1ZiPkuDZLngPwmBpDxWjNsWhHhGtYWE4fWS873kazBKCky6giRQJZRPrA7zHeo5viV",
  "key7": "4cpKhQEjHbhrxsJNJchAZMPrxZBikPPRtYpEZ4CkaPes2XaQrUGR5Xh9RcjXR9D7BkhxyxVC5XHmtSJkGjLRafwR",
  "key8": "5cvdZNdnvr3rXDLm7AjrpLQvyzVgALPhUM7AgqwAX7n2n3DDPghKhT4q5SjxNxVbj9Nr9kbhYwhg3xwsqHv1ExTc",
  "key9": "45gzWYjdRJ3rY7DtdCfkyZwEgtQzwa13Up4Lk4f29A1ZQ5pvuGdNEQt6HnCcmX5Yg6LeqcMvASMANwRFkS2hCCbM",
  "key10": "5uRJ7yXNkX58bpCFRmQ2pyvraZ8nDHz3FRg3XufzzwFcQSu9YvnaMFubA1W24uJxVZ827uPNUJVfSbJXg3EVmqqS",
  "key11": "4EpGizgLmQy8sM3p6kiExtDkDfBKcBWbMLjTRVowTqQRertJ7SqBT69qgDDKb7iesh2WNqqYVq8U8d2p4dvj3xkq",
  "key12": "46GkGeJirhbvDYTArqhyxQiWM7awj6NmqgbnTEgtZ95wTWyLScgshKZzFtxdNYCDRkewXkRdZPY7H8Vs7E2dSkd1",
  "key13": "BJPmyD2kFc9ksbobBbg7XdF6mEZdTXswXpKdjpxPNfiu7pL8cUnSTM4bD5TG9ctQjQ2qMxiXPZWPdAjgjTF9yMV",
  "key14": "rR1qntnLP4R7MUxWM3S4UP3LaE8hrkVH7UmJLRzyLi2jk7umWT9kKfV1ewy5T89gMEE3HiTxs8CatuDXhSFhHT1",
  "key15": "4JUsef1kzVgyenYKMPk7AksVBwg3ef6hHveF9gFSx8f4xoEnJSR3mgSwnKn546ux7SkizxsegJNXECKmHiiA5yax",
  "key16": "2zX83yum8evGKH3mG6XE6cjVmZD2sGpUnW7Egk1nJPH7AKKCeufFNdkwVDnLVkCyxG4Ypz5zZNxEE2cBzZgEGWD3",
  "key17": "4UXRyEJMqUDxBBQtvUbr9u63LFY8d6k2s4jesQtFMdT8haZJkuJKS1NKyjnyZ3QvkUnLDNwr9m8NHVofixPh3ejA",
  "key18": "46xw6jexctiACMvoJvdfd6DPqes6KYMS92ESr3s92jMAVh9KKb2t1SwG65LkqCeJAYdPc8FbrYw4PUWN3DbuBuNo",
  "key19": "BNyKnWjijjaB9v9DeWBRzUmMNE32erst59VK8x3cQyP6X1bdL3NadWP5LhmwyJHTikyc5LS6q9Bgv4sLyDyWNwH",
  "key20": "26jDF4T6FaagW8fyuQfukR4okZn156QvbWT7gvoyAePdueKoUVvCtvYw6VCttD9n3P4mkCEUo1yAhNFqLWfro9ay",
  "key21": "M9MtZnJHrUp72eQ8QqMU25K9HDgYxp2J31MT94Fvghot4pLdDwLitNqQYZ86BgTT9JnPX3NAybwEbxBCjpw2YYW",
  "key22": "4WH8cHz1j2kVpCw3jnkNk8BU9sJQ4GsxQJwbdpj34udcUjRVxDaSJnoSgWTDajryvsknLWFFxsR3965w2srSBN3M",
  "key23": "3aAxfXHTCpdbUE68FQQL41StUyr1HdsGYPsnAqc7hKxS84fcJCwADKPgZFqxycPRVHm2qW8DM3WcSkHVojtzzY1j",
  "key24": "UXTUmd4QJTf4RoTWSbM86mvmN73WKmUFxpKVRLPVXG3CsniXMmMhia4rHL7bmNQjrXt4LDvDQkNJffPGTKZL4fF",
  "key25": "maPKTwp1TojJLBbhzQVHYofx8wieR8WCBgsWFEuV6DEJdsJDKvj8XEcFAnsognj9jiXdprPtZxzU6P9mvqggxAw",
  "key26": "3qFXiTeDP6GLzn4P5mX2b2JTYXLqAeL57PcfUJCEerkaM7SpomCA8ChBCvurh1tBSANH4yF5kZkd3yaNrxsrLktr",
  "key27": "5M2fUL4K4Hs2JC5aTuKH5XvrKDmG4MGcEMBq1aBFbhZVesuGCoaQtgMm2byQUmQYK6gCwkycrMsFkRVNUfmUjrhe",
  "key28": "QLSW71iTB7EwDrMjpqwWJwBwTxEWQpfsvaAXEjEb4FC19GvBxiAjQP29TPubWqodVQodmQd2XS7LAk9yyoGD3XF",
  "key29": "35Et627Q4dthpyez5QghV4pbKGpt6GkqC3FqjgQfBhZmVChQ5B4kK9u2GQA238r98hVCf3Nj2DPvaLnNwUV1STDz",
  "key30": "tzkxb9XmQSdb7o3BDFnj5TLo2uxKPAYx9RKuFF97jqtFFxN9JmX2whJjaTwvAQEpHiZkouKYJD1Qqy2WjmVX9CF",
  "key31": "3QV91MTHQ8BmnsrEASzBTaSorAPNkeN2VWynPpjXMycvrHiSh4GJLMhqZ7z9Ad83bxBxQQNvd1ZmDGJ6vWtiqHfU",
  "key32": "DeTQEjQ9QV2JFnVabp7C2UWUNkzjzcQ2hF4xRr5scxZoSVgaxDJuC8JcsEEwZ5N1tao4ZsUZRW4KkBo4tTtvDgg",
  "key33": "P6pGd3BTJLjkcGoXPLvuddJB7xuKEZDT6E7NXsmAUfxWRgMZ9soCWpUxQpU83bXcwYM6C4bncGUTMUNp4z4nWqz",
  "key34": "AwgqKnVMdM94AxLGt2SkMfytprTCiY13kVBbbYWfXwd55QmTCEhdHwDAUtUtguCmJ7ropDhwSH3X7xkH9mjxgfW",
  "key35": "4vLfMhD4cwDTjQWLcJY7kxx6ZdrjuMGRbrsdvv26Nzzt6Muq7L65c6Fyv697R8YSBZhEXoMXopAqiW64JapV6h23",
  "key36": "5UPUGnNxyfZCgWtUsYaBnmsiA6nqZgeQUgg38dnNLcuNyFVYDuBNb2N1wXyKvjwFZZHhwMXdrpAJ7ryEyDJEAXLz"
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
