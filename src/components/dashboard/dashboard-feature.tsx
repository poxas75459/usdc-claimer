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
    "2XU6SR5aaMoDoqVtQm4aCp2hUdqzgkRzbFtdwrrGwf394bQK2Sd1tuu2JduAL2AJNT86YBiTXYxc3y3bVUY42sKS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25zWimnQWKiGZbcNymshZd6U9kJzLJvWQzx22enUvEEPighpKG7R833eR1q6kzsHjn9fKJRkW6b7PyJjvjD3KCJq",
  "key1": "27gWhfhiBs6DpxoNtEAobC18gnaGy5aac896gqyvpo4JxejwNrXkUnr9Lg1GLFejkRGsw9SG2a8vPZcGp5VRGDtn",
  "key2": "4XSryyRp8Hg7WjN19s37YTqbu43Bff3TbHxDg2KQmU5dha43a2d2MRPGFQmam1eWvHRWHZti97CHcpMbR5opZD1c",
  "key3": "5HUPX9j8XUFnjRZWsSTfyoDyvLP2V24GkkAWHEc7yWBFK1ehQzaRiBmqpTQaU1RSnKFb1sKBXuWGn8k15YCnjjP5",
  "key4": "4oTL8tJXqJ1g9gHPAAocjSqWpZs9Q9ZE2fknz6kG9LrGrBarxGtS6qEomMxXPci5mDKrc5ZzhfgfmJpVyKeyHHft",
  "key5": "5TdmirtRuGTpZeWTy3pt9NUmeNwo8GYUqR7zRHbrLQVRwi5ZEwePrsdrstKrAKLq2shVud9fduExxp7tKqZP65RR",
  "key6": "4raXcUh9Bhj7hj8yCShJeVph631TsuFiXJJrnoSsWq26hEQpYX2n78ABAaqggjUmtDR3gvDmQtPFWeQoniQe3bED",
  "key7": "3nXHMRm3DnUQMeoLGoY7H2gcwWLLn9Dc97B6Ygd1tvynQW3cskpTbVsA6TqZNkKXVHRnU3kCkPm92a8ukwCRYH8M",
  "key8": "pEZGtMBDHoDsf4HdbHwRaHaC4u8CzGfeNkm9u361as7uz282hCqirsZgZKWuoQAZ8FPfpverpthkKdrHgjUpWkn",
  "key9": "4ZhpL3cxDfG3xXihdB7zPYw1thS6zEwQMCBRAwxmdMqNndsbkUKmZuDLhEFEbCP1rJS8hFdmQKbe6dH7vpZMZFgT",
  "key10": "4VNtBEjdq14c53ppuCMzAdBVnfsQidWLvoeDFjubMgvcgD9oMXi57zpTQtVhra2cNkzxSUBoq5NHkQHbwiXe8oED",
  "key11": "2kX7PVg8EryNr1PmaRhQdyr5NJnc4zHdzaCMbCH3Qeuuh6ZmrRLgUJiMGUHa26EPQYcif2SfBpYMgvxmUYD16q1A",
  "key12": "5P2AhzjSTLprg3jCB59j5NSSbTGxcV5rPCgHNVefw1KAS7hPGLMMdSBJT3jQT8hnZRNrHZtn2s5TE1AY7Cxd4kiC",
  "key13": "4VVAx4Pf4Fw3UJPRVhqgptMxv2W29JZbkMVtny3nyyLfjmHhKy116rnmbuDykHFqBmQm1TggqrdJVTkaSNRHPVnS",
  "key14": "4KQGEnuEzVRaL6XewtixcYsAZPLJ61K4A5xsE7rsLmrgVUAfXqfN75QZhDn4khMXeP14F5GrFuFS96cPx6oT3uyB",
  "key15": "3PSK5bdFd5GCgCddmZkMhriWkSGU8NTXXaiWWRPse6ctyL5g7iQ8EgbF9f9UWLYYmZ8TfwHfsBtxRsmDYjepMjGG",
  "key16": "5TfDChRg7VyeB1qy1YQamiWFyg3Zce8JgyHYfmLBkyqsnic9veaenn9y3dnYay9NxAr6aW7rCLTuJ37h1H8UUCbn",
  "key17": "2npwosKExBm1kM48pPFCW9FQo5J9bNEss77fxwrQQJtM4nFDXYNVMHGtXkWzbsEUHzUccnTWdHz5hvsw3SAuL3kc",
  "key18": "3fz5k79ZHAX2WJbA1hMAP5emZjKtjZ1bnMd4YdFpdXAgLGBvVSP56qFgpCQ41j65Ti7DbjAez7pMMFv3j42ukYXu",
  "key19": "4qt9rRDcEL2rAhWCGyG6EZRjgPAEJv2g1db6eYhAcn5FzbtEEeVp2uyqeVaYvrBUwaPVAVUgGvsHXP5dp9vskK4S",
  "key20": "ngUnYmc5v7K8m9Sqw6aw9NinFBMJoVR9GJkWgun9xrFHFe9UY1Pmh8MKDZ6DLKfr7rFUjKMSxS9WdUsxrA7wXmc",
  "key21": "Pb4pDdopgSjvspr6ZtctRmPCz1EqD1JuYFLW34iaCnq9Meu8oMs5ChbviDkKxNDhdWk1HDYMmCumZugktkLa7qY",
  "key22": "3YysrRnRCg1KN99fJUvwQuni72KzcEWs7kY9DMXjceQ7igKpebxesaYuc4DSiphZS4AuraXJvi3Wq2Tgp2NuLxJp",
  "key23": "4FfXmnuMYJ6BzrVpPAed2FyTXA4eQaSeTgAdcKED63ooCJjG66huSZSmEGf622gdGaV7FoDoYDCDitDi5veQujeG",
  "key24": "UFGw2sYB7V4uqg4hRLiZzumGutBHr8nG2M7jE4nENW8L2Yx3SsafvSKSTUhtzzWZk1AUXNWfQozXt4hCYGrLvFP",
  "key25": "2WoxVi7n1dnJ4URYfdUrpyF3694bu6s6MXs21N9AhdbVptgSXty8smgqvVVEeG9YzUZDqnz12pXXcUB5wGnDnxCm",
  "key26": "5kToCmy79JbbdwNoYQtDh2cyyJbLRH5Y4QM1QkyY2fpR53SrhaqsTU7yZTzF6xswgXEagzSX64DJASjY4kGG5MHx",
  "key27": "4dFGxPaspjEntzd4rykWaYgtagUAbH9S3WzWLWV6mZPhrvEsyG2VxTkSJQ7Nzv6D7sUX21Esp1wq4TAMmtchhgqh",
  "key28": "2UydBxnYCCzWPw1Efp1ZTbrGk7mco4R9QnyLts1JZFno1pMLMWqvtfjyxq185rLp4TSMM98ZmgveXQgQvqYsb3yF",
  "key29": "5oiJcbyyknxqCoZQpsXLpysk3fz1UCLtVeRmJSvaFTXdZuzrwNpswTvNJAQxvzmrDV5Kgow2T3V3jro3XVhdnfVk",
  "key30": "3StpHYB2b9RhGTHZqfhAseUaEeAsszESEGrPBZwaYBLg8FnmQQhGokbAkZ24d2h8L2X2GyuVDEu1AFddy1o1r7aW",
  "key31": "2ZvjWBCnPtAAGruSpeH6Jwtzny8Jr2jS6hTawHKrhbJpUrYV83TvqRGxS8UE8xuGHQKr2BZF6TFoyPXL6AfExhok",
  "key32": "2QQ9p5nusr2uGtnrLcCj6aEZVMgbfEcMgzir3xtrEqyRWaNDtqhuyf94uf9MCNKEu9VDQLgggNEcs78wSCddEdZ8",
  "key33": "4d3tMe3Jv1X67kUkkY7Zjfh8b68KQkU2qin2rqBoj8CB4QHzMzAooRyLyHVHUEFgtwTCjyhKKDFE4XrZGXUY4NdB",
  "key34": "4jGcq3CZLggVJCo8tcuNhrNFsijPW64D29MDcNsnVB8M3AxdyxSN9ifDPm7jEhQSdGbmqhXmtSvZP1MyLuxne86W",
  "key35": "56GLKwx9dQ8AWvjHnzYqVQ4k5vnTr6Hi1t3aLQrD782PMQo4FG9fJNHWDJSn4HLxwqZb9xQQnaQxMdjuTCRnrMfK",
  "key36": "rFiVQs9nRHziuPnfD1UdnwATyWZZfoN1gohJ9KoiXxN18GDVy4kTdr63v6PVGZ3LHy7SfGQ89zQjGoZswBrmNiE",
  "key37": "5LYoP989ToeoUXB5foSFyvEKMaJBvLKjCymGU39Lbi9rLhH5zeVCyeRB8LJjgEjuNVug6vdQ8HhxNwqurgatNtFH",
  "key38": "SqhFSHyEwp3n2XXxKUxXyV2TtpVxfBUA2f1rEQXZFemUkK8W681Qd9Htx6XVpmiQGdwgcpAw2vpHiweLjkRs4fw",
  "key39": "3fqMscy79tzxANbwRCJdHKG3jTPRW1uVk6EzkE9FZe4xcUmy2iPLvubPKDsVgQ3R5TSdLoaZU1vhgfNxK4QUEAH7",
  "key40": "2caD5vEjRPzgcFmpfwUmV21sgjCbv8ZoaTDHjjLVrXdFXWZxgdn8MKM6o8tYbnGYtZfP2jiGP8ByC8uXFvjgJ2Y2",
  "key41": "2rzTkecdb4Xogs9JfKoKfi4tZwC6XZJTZ11qS7AiZo2djzok5c1eJTsYJLPqr5mH35rYf7eEZs2hzd1rpTquCUfh",
  "key42": "4kJUGUBAByg2Wi9MjftgQZ2HXdzURsSGUqJxiADcBt7otdLhiM2Zw49MbL8zeXsAmLakzqGJz9CVggEKtXwFDpTP",
  "key43": "5UQynEZNv1wTW3FToCFdQENJBuWWnaXJSSXS7J8w2h5u49B3MgJHinvCLYtqUYKFVh721itLf41bMcTjiPMDnxL9"
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
