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
    "3AkQqHvVr2vaC55pNo6UAr3tBx7tyEVVVm3xQg9SD4s4HfX2QEdowYweavBA6veVfHqY1LdamgL9KgKhWT3Qw2LS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tK3bnatEmirLNMsyJLY43zaBvuU1RTbJrQJM1N7EWu2BWp4Y4X22AYnhCyYm7qFa4K78RHvsmMX32KSH89db4cy",
  "key1": "6F1HbRFuimv4PAHZqEPK5uEpCEXz3Ao3DUt3gnCyCQH3tQfCCV2nwAZLovkc5nLu9BRruG6KnjKDJkD6vnhix7D",
  "key2": "5F78MHinqXBD3SaxU1bFK6uiB9uC4fSpJvi5nbaEpfoziiMzwxSnGSfLdubKXpUSN8EPe6EKX9Zq2UiwjWXENV95",
  "key3": "4Ssh4ZpvRXAVy8d7uNJdzvZ69jyGwgZBRkfw31TduAA5vriMjXchYCZhY3UgufMwveN2T3r7JYzC4m9tEtMtpUye",
  "key4": "3Lhz3qdBbie3DREBgMt5BnBi7s8scZywedkPwP9f6EwxebjqUDJFM53iQu2VaTUhNdHbCVET6vrwFQPNeEgawBvt",
  "key5": "2dBKJ1is814jHCLBzvh5RhRqiUe1PasvkFZoAwjy7LYp3MuWH8CFRe5zw5RmVc9fGMNqiaXat3NFDGp5DnU3ju1Z",
  "key6": "3X9TxN2joiYG1twDTn2gZDS7mjJsj9f5wRyfMQGMhpsH7SLJTLp1kDHtuXHs6mtZNbv3ja7cr5vCkpEZ33e4Xzac",
  "key7": "5syRx38vTNbfs9u6wiCvisvKJU7aFvReHFCsd1FVMoAQWspHVdPZCoNii54K9yoQ9jSh2tkK7EyRbKtJqZAM6v1V",
  "key8": "4FQZyU5Y7SvVJVn6H7kvpchP4ivoKjeJnuZxxNi7oSeMLQNcX2T3VdwNMw7okMZ9rsWHzcFoVFcfQoiJbYSbVyJa",
  "key9": "4wPdfqJFMQhRD3BDz92MZ6RSVvchrYC2CQTYJAVwivNKrVA5ph5Peizv5qkMeB5BgswwoQQSFvohav8bbji6r3wo",
  "key10": "4zcS2F8ZNEmc4fqWnPaFyMLbozXpEjbwCw7ZhExC4esyQvoP4GqKwhHHP4tAxi3tikWNUNqSvxZHWhz15fzArn3h",
  "key11": "7dAUzfnLMV5LoHYqCTfiE2WPorWAFQCua1jxdFSWTkCvM2vkGZFCPuFn946yGS2SHJNHtibA2cijuvVJWkwNZFM",
  "key12": "4uSWDvf4az9LHahnWvdw8DNk4cLBdSdCoesaJZwQnCs3jTEbTMWrG7NH5kdNPfL3gHkdU4CkxeXJ3roj7EYLDhgM",
  "key13": "xq8i26bJPjv89LPesk6if41ra6H7xCqSZyq4yUXqW7j4YwdT6ZGKdqDuPT2YuhZpVaEuZYLDpFpX1FfJBWogyw7",
  "key14": "QMinQh8kiFvr3h8HVggsasCUKqPAh5ZfmbzcbtNa8szLS1tYhYVDn755aD1HCJniQPGomteLQ1KvibtfoG3rBnE",
  "key15": "HFijcEeYwSLYKXWBNwUynUHLPhZYcAq7rnPNSEyyFYRPbwJhPgaBkAQ8PdE7vH7MZjEiDnxyJ1e8YdY2WBdzfnN",
  "key16": "5GPS3vM49k734Lf16dVqzfqH5NSCSnkvdqpNuBmggL3sn17APy1WLcoidVDnxSMPg6DaRttC4cQxoVZdCbhAbe7Z",
  "key17": "2XorNQh5FN7waLm6ngphF8ZzY9Wyv7W7Me8ebYvybTeetFT9cpuQvCJudjsrr7WgqWEjjQ9EaTZfjNW6GNdNoC2C",
  "key18": "5ZvojEFcBmfFW6aNAbavzdHsy6tCpZAaxnxp9ekKUZ3waQrsAw6ubvtBfuyN2HBnK6RC5mCYpuu59KBk92tbRW34",
  "key19": "2HaQxZmjmXnPmNek3q5zneMEmDJQyScnsSiN1wC6K9Bc1vZdRiAY4AZybodWxsjBwmgXkyURDf6GJt8xgZroumu1",
  "key20": "2P22sxb1f5Tmw2fDckPZCYcTx71YfYLQhePk1YSdszDzeykV7GJyXHaTVAiyiToswsadYFDyLrrigDQ3z9dov95H",
  "key21": "3VaSprmru2NMrvmW1cThmCeYzKLu6jXKVW1vRXS834mCquzDiiEdXPbm7WPp4Ky2XjJK48YjCH6Hr7GsQBZgwvpf",
  "key22": "5UShuvG29JR6vcDUWjqr38bmFxassYbnqWknfh823eeuqX4JFByCerW4Khvw6K9e4zAbHQsKfveL3FR1QWc34MdD",
  "key23": "5KYRxa6JuxHRGZ7i5Db4LdBP95jVqEzCa6vUAEzKXiKLVQZnYiHDzsspjF5nVFXJUpjjbTaFb88PKjzCjEgQuXse",
  "key24": "3VEhrrxY3QHfXDrh3w1RycUGGntbwNfUbvt5oCkTbvCM1aH81bd4fwZTiDZwiYowJvkb1stQcFCn6o5MgWahzbvS",
  "key25": "2iXUaY9TbGgyAkRwixmQde2As18Prv7gnXkWbENpa1afkjLChm9HHU7kFmAJDhFFdwFh2dYKU6FdR36TFpeFUsQK",
  "key26": "2YQxx3k49SxV6PXgJ1NFNeuJKjRN1GYPRLHhgWzbcGF99a8W35v51iSUzKxQWALNF1DzFibKFvqmfTfaPeNjRukQ",
  "key27": "4LVsMdBdkHhkZc5kWLS5enSWAVYCtpNB6qkssbiaNH6Qf9UqTyv4gragZPaWTcSeg24BZ4V9N7SPZQBVUpDxYR61",
  "key28": "4Hxzvhk74P7uggVjypfzXfx572uBX2e9YPQn8BCxJs3sGJRU5X4G3P7BV7hDA79XPEWMKCEVjaKuj4ns4v7HehMf",
  "key29": "syAAem5qAuanViTKVYToS3EXzuhkhZZkDdSVNjtuRnstMyY4QWPeWVNxczwFym1PQ5Dh5L5JLoHvMdy33JutN3R",
  "key30": "3VwLHuvs6iSGGit14ko7GTahH41DShsJgZvAYGhaRAoSPdxdbMW4GwzSxxRfQEsqv7Vorq82VUzw2LpRQ7iWbJqq",
  "key31": "32WY3HFCxZQ9bFMpXZoc4SeHbysUKs8mQqQSUBhaQNKamrgHSM2MwvjnuA9o9DfgEzHP8o3JsMJXrpqHXSneLqrR",
  "key32": "2srJkAJ38UYUYBTRoMkUUXP9Tk3QUPoxCapAzmEACdT6jWcg9xKsey3TLmrk4WBsWgGP7KZ4ajHJT57KKNKZK8XM",
  "key33": "CHNBr6ZRfr5dLD7Sz9cupMnpptbzKryVHkrEXHUYaQg7wtjgsgupKGhwPqGefR4Qk7hX2dAHKvPpcN999GgU1wj",
  "key34": "369RZJYEh52CcbaBP2bZbBQLnmc3Dyw4xRLwQZuoG3Wj8g1wYnmQXLdb5GXePpVsrqqWEywcFcKs4FH9oG3W3VvX",
  "key35": "4cPn2YD2mTsLxv5cwiF6dqEzKzGJLK9Lk2BAewkp796QLJpwmhLcQYHbuWrEvqtaQVgvuYGLKVMmVmZh4ok4TiSd",
  "key36": "61652AVtd3kbPaP1ihGbQgCNux2W8eoLxoFeDxVSjA2SFAw1VCoiaWTRhsp5i7pYQ5VwqbRxMnLNoT3uJyRSaeM",
  "key37": "52hvVNJzWF8qotfp8Z6npqrckbqVaxwC25BMeiGR77se5Df1zKQQo6AijNeA8yjEm3Kim2jU6X4apfCNV2QutE8b",
  "key38": "225b2nP9AbNge6Du9LNDuGBwhDoF8rKZh8rDGEFi5oXSeBradpxFocoiL9g3n7tXRh2NVPxojuaJ4WUv3SYuCC2h",
  "key39": "L2HDeEtWFn7zWa6TwP9HbKK8cXGrDPD8zizY6e6J574ZuLfDxnqSN5gWLYZx4WhceF4gkhEbvBiGUSoDqgPvuWq",
  "key40": "5sg52A1uuNtgTENvZbM79S75sVqrZH1XNYCrZyAqZE72SxoKGsJqgvFgsQQpY6LkMMLpu4a7rXmnA1Nfkk8n6YTr",
  "key41": "2KEzkZVgQaeURGpP7fPcZagV2SG3nzARcq6p2twjpvLRgHXS2uW7Ge3Hkjp6KKJaj68vdfx4RJ9YFayebmiZ2dMV"
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
