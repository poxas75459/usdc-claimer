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
    "5ghNJhifiLHdR3YGTw8FP5JE8Ydo9LCqVJaiNVtJ9FEQEBeVkh8yu8GzdtmyoCmLSazcC7u4DKQpTpkAsAUJTXt9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GVpYLkwyNqZrxDVUyZW1ShbZgp2BmDeX1ikWTfPNpCWicNu6YwEKf7XW1q4iQ4xAwD6WgZA5eKDtkTkv9DFwGJw",
  "key1": "2xkp1TgZZEz72UWV745F9GJJgZAjdB4TSjgHF81T72U9csMx77L8eABncjKStTZShN2FaPqmTG3c8uXMcm2NbnPF",
  "key2": "2e3UdBNB1jrPTfhyRPxS4n4wqdekYTs5NCoCx8rerQaXHGTbT1uAaNN6KkzVvKj4JG2XCBUYcj8Ggn5oaY2TguW7",
  "key3": "P6551tLADo9qP2CWEV9DxgTDpZz7yusFaFHeMLukgHPNntyHKMTRzMEeFQLo8puAWcy6a9MDCyxMeoH9SzmYvZq",
  "key4": "4JqJ2pY37Z7rFNCQAruQEUSRhkQ2CH73dTruRHkCS7eGrSheBJpLKi2nACEHgpu2K79bXEiGJp1UUHewhGnG7XuD",
  "key5": "23uvE7LLsnsZ32DUohZZdf5tyz9S5SBzSBoSxHE3Uaa7JkpGV2fAo9MdcHxToDePWH9Kyk3jV6QbzQWSYvTY7DGm",
  "key6": "4DePizxQ97CP4oG6FAuotwMK5Z4v1AwSv2ysEBiJfkBE2KQSvmyBKN7kH4GSthnAYpYf8wiRxyMDHrGnBWCwFn4v",
  "key7": "35vtMtfmrMsAhVj2C4JQWFvFvm7o9FUgPMR2oaBXQRJmSMG98wR2KWfcYwDhtmbL3wRP7VyfAF5Jk4jHtCN7ZiwS",
  "key8": "3FzcNxEhiBUg7HAb8s1SJnCzMYjvxSvEH7UumAi1yWCJTV8dXa9y9dS2B8sniCCCvNSh6rSAcxHgywoCUQxzXMHT",
  "key9": "2wKPGrHgqwGuPXmL3KYqXMxUfYHoKZvmiSw9XBKxzLwHZwDwDdjWFE7gMSXAYYHxoYWRU3im8mE4CEuGcSQM3H2f",
  "key10": "2r7iX21tSRhfa7rbLTJYu5rCbX8ChYEpexaA1yczVeVnx1x4FDfMih6FJ7yQGVaFbL6eSxpfU1X1wSPDuYhECWSX",
  "key11": "39xjqkiLgm1unZqhYYkuKEd925VQN3DjZKz3SCwTeC94r4MWyyFAuKEDtpAYP32DPMd8Nsf7Q8JU8y5FS7oTMNN1",
  "key12": "4VMPMRgsLYV5iU3J37jtX6AJQnWjrdrxAMPJNL2FuJaACwDyCXjfjyharMWdwimUNxKv6ti9D4yqVwTBEU6r7T6c",
  "key13": "4Pikvq8u46TpvdtCWnepvzfcyYkPg8DFo4YeAfkUjAS4osDVVxbuuDdCM5NL9mX9NgzhKLa1Jot5ggxmNY5P2iYC",
  "key14": "5qo4wVTa6ajUNhjQhVbskxkBe5GV4B1dCVziGZubqhrJu55RpwgRH9E3wEgN3Ez1tVeT4Gho3eXB6DMTTPRQziFM",
  "key15": "5JZXSkfmfCKGZayUmXBxJV8skP2mdxjMsR2URy6bDpekwjg2KMHC3UL2yA95cqWMbKegKAtAT3wfBZcy2LH2R8XJ",
  "key16": "67hVCyvvbsXzxXchetK9RwduMvfs39Pyb5wdVRRW73KyqJfQFmEtZJTPpc915NzSYjbjPUjv29VH6Vi1bvtkjVCf",
  "key17": "zxecKwQnyJ1hXZD5gyH97kreKe7EhQJxezSgZHR5XbEmZLJrPEixPwJWtEAaRjU8ZdaFHhFyehDLEFof6Nz6KRa",
  "key18": "5PxTyQvtXXdWDwqXn5JRXsxBZq5ZirnycRy6pY2botjLTTu8Y2FsQMxUvnt9fhzuBuqmUogunck5gY9HEThvWb4G",
  "key19": "5QvP24DUCjAjKpBUMijDLHYEKqsPpt1TTCtTR7Dh2DXqjgGp2v5MbQnooSVpsU3MnUuL1wWx352KdqTeDXnFjMK5",
  "key20": "4PMtT3sFX4U6yPW4MLnpkhz6KavktXaX5mn63d11adn7EkKvBaCgX5JUafPBZtWLXA1ZxhRJhQFExjqw85n7awSC",
  "key21": "2mxqbW9j18vZxe1Pvf3TTy11wndxKW34U9An1NHFa8fVaX3xsvLinaAfoPHdAXiqx9nLMtjVq6L1m5k2Eh4QmArc",
  "key22": "5SvwTUs9QCqAFCp4EnKtzck3mSS4Aheez8ruTbTdD8TL7xBv8qCfdAcZgL3YagGYeHUhp2YAKtvJdq8bDBkd9BJA",
  "key23": "2jHsfJd3TsAkC38L9Q9atNKxWWU4r5wvQ6cgSVHu1kqh3g2NLxR5QhU6bBxcUbKG7sFuRGNFgnWJAEuDWkw2vkTA",
  "key24": "3LGZNQRuGQLSZEhvSu92iVPYCPynHQfwAtCVeb9DdDBMaxttLQRwLC5Ff3KHk4ypVzK9g1uPXeYoZFH8nJC13Dwe",
  "key25": "5xMQMa6oE15VUEFC5yQeMvRMCqr2pqiDiXEv1zTJJtQCsHveMbfjb3dfXwLjcBKokAB8DjvN3xunozHoDdqiBoFM",
  "key26": "3CYzxTzoLvWxkBLUq7XWaa5eUsPLz7cNNV9bQnoe3idtb4sEhJzHL4fvRZ24STGNzNxwije4VyZkz59ZEVmMuspp",
  "key27": "5494Ct1Z2ujrGo3dC9eLwFytddiPmCuT2A8pMYR7gU96A28PkgXtyn5FpZULhvYt1S6Z9jPchEJyeSwMZJsaVUdk",
  "key28": "5MHwdQPiz1gqpgXT5K8u5iPtaJ6KnjcyhjuZQC3Azs9UiH7jijV3yrda5WVppwotyNqfHHpHN1XmMLJbV8XMUQ76",
  "key29": "4T31LtWhYbwv4ZMT71XD216tofivtE4tjhxNtVpy4MX1WfpSf7dDcRYUA43CdXzfCeb2uf371D5LNrB7KFgAWSrR",
  "key30": "5mEAxrP3P28EDfZ47LqVMhrxHgH3ghTPDHb7MjLcocZNGpeZsk2GgZxNkm6zGu3ZUXm82EdReL48FfGvu5MD5wtM",
  "key31": "3RRvBda7wLZUqFyAAw382kPUQVYUgrHd9Yqz7nAn272PdVzLaLvcxnw7gctGJPdt3S3ykJuaCP69aFy8S1aMPeCZ",
  "key32": "32rdcYD9fFn2ybeTjc8gsnGPpUog8V1WDuMKgfbgshFdCZ3tiTtma9pdtYNk7hcWVnpADCzEveJ3q9ERityrjwN9",
  "key33": "2TjebzYj9igwzEdEZPTMeG3uYJz8hZ9zG2r6nS36YDchMznGLV78F6F3uHkNpB9Qs4DXYnNtCDTFqGXyJsxmqmqK",
  "key34": "4gvoFdqpFPJ7JPQdPrB5G6GNmoeN18UTZKd7Rq8syh5QrJxYuu2cR5L8YYSgbKtbwrsEGe9PM5Mrecy8MNgGfnZd",
  "key35": "3rJPYpWvJaWqoJotjxGa8GDH9L5aCyn1aWEaKKHPmxCtoinP8ncfYEpSsyFRsk646tfLVXYewCZBGgnRskrprbV4",
  "key36": "5ozp4Ng3UMZC1DG4p6ok6tNsSr6CjauzD3CrXMKztXMcfKZr8xEH2NsAtpc4LBD6gDy8gxkzxKxyNc1sATvYoJBj",
  "key37": "59PFqeDSG2tgniDWrVAg9HK7zDrcDZuvXVJVktjF5ZrXLutGTTirZZrG8zNG5nHKiup1kWEZT9W3b8PMjCdTredU",
  "key38": "ytLxjfF5TtbYwX8cU8Urpjb1dysViNnwPmZZbSEVhHHXAecUfVDuDWPYbST694gfQTQm5x5awWq9HytsqRx7DaC",
  "key39": "5obzGDoDm991xnKGKxERcZXGAyxJNMEBPXpPohkHL9ZoRZ3EGCYewMSX4qmYTAFkS39Z4VX6fNucvSKjpAEVAZXA",
  "key40": "c1ya4QVjjdQtobNhfhyg2sVQvvN72XsH3EptQ2PsmpgJTA48cf19hBFf8w2UjyEjm398z62VyJ7c8SiFUZz6Gdi",
  "key41": "6BLp4MQ8ZAv6FeeDK4vF9rNqFMNC7cMp8W43asXAKBUYC1vn3cpy1me682998EXoAxf231kKuEzpBNrqapk6jzB",
  "key42": "5dTHPeMvtdfppHj1mHEJyExrYbTQkRBptEbdjjddNizsEp7soZZMrYonPFkejZh8D9UuScTk3AyDeGTNQtPY36Kr",
  "key43": "cyJ3Q4DX3DAoqVaZwQrEwNng2hY9cCz3QcpAfBLSjzD41TczB7TUy3BGKENfiAQCpwRcEVqF7zJ5A5tspsJsWXW",
  "key44": "3PvrCNxkDrKQvGEdjEjx8mLVLGdipQkunFxwZ2iQ7qHK4N5kQm14cmEeHqodNvnLtZPyEzSkw6mS33YoQt4mer4t"
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
