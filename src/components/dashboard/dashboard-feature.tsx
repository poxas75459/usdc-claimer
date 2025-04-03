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
    "3qssdwT9AWSJcQkH4MyYwehm3t5fTyacMrskcYW89N7DRkwnGeMXmeFS56Gj27eZQkdPHT2EK6PfMxCMdmX5fTpn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UKAJRhpFCxLY7HqmCW7vN1Y8ZNWgTyaeEdeAUcg2Dn6AntkCXu4SwnGvEhiyGiaZM3KaRf9fnKJzQSc5cDF9r8n",
  "key1": "5EkbKoRqUygX42mfKphcxUfpLYpLZUfKUZhVMLm7A4xuxG7YWguBJYkCiLXR2bkCHzf7Bjj17xoSefgbY84njSh1",
  "key2": "31t84xdHsNUFDzmjaMfYWhhKcPBoHAuLWq41mgVdHUJmEWio5oo518rx75hruAxRpSLU1dEPYMkPaSnqRLmRuMo3",
  "key3": "2DmvYLrZJRXHf4Jv6zy3VMsLrtYPDAY4eWRU5sKHspHehyZR8sEjk5HDotCaNmJdbHsXqtajLPPFXnzBxjJEF96U",
  "key4": "4EiDdgTKYhSQEcLzLXQcLm6X2yfpn2invk2LAfD1jstkasWDdfJZa9WY2r7XZZ8VsVhiCqxBrqzY1R3idssfsgJB",
  "key5": "3KyAfSamafgViCdC4uEtLn6Z8XpTcr1numa8sMvwUXZUAUat3SGvATfVQVPxRedoFUMy6hrGrGx6Ljcwe4X5P57e",
  "key6": "5S6g8XNaD1Vfzk4DE2xXfT5xQBZfk2PTrHjiZqHgE1qmcskd12yrGW9PBtEcE2BE8eTDq1ySUy6DCHT97HYaqi71",
  "key7": "5aGQQFa9kMEhpuqN8rZV89s75xuJwsyRrYJ2NsNqQbHrPfdCu6KhbLTWYqEeLXX23p3DkEKcirZGgNWYXSiaoXXh",
  "key8": "45kyjbizbYbapWxBbWtdbM4WPJ7HJbo9VDgyk7NnxMNz4N2rw3DR3sRd9rTk7t15sDkYE9djELCDPWMMvHoMSjdN",
  "key9": "2UYVutrEmTdEgeNnpg1WPpqkMDQ7ccxqNgHeiERrWvrvn5ywRj11xjy8oyPxgKCnmWWcpHzjSEMZ4Zr7mZm9fzMr",
  "key10": "3UgCRzEhq8UQaBmY4sYgqgNoYTeb9pRm6wvN9ScLyq7kK56spZ1YsrANVgMdsdwwmbWaCDeF6rck9AscEFBHB5E4",
  "key11": "rQxthS3gc1qK4DwzRwLGCetx1zs7paiQAFD6wVysnEmSpf2erRUxJwxYAyiBsjaPrRyshyXQwDpzeiQjnWieaK8",
  "key12": "4LHESshBJsBKt9Yz5Vq7VrFtUMXsUPtyQw6Sbo8vV4p93LcfREWWWuTiyVZtyF8RmhxQuiGmrnTQBGDL5dNacoZr",
  "key13": "cdzmdmWcr9PrpLKkqvKtgWTW9Sp4iVrYSWx5smdqfFuTQtDiidJMkR4aqs3D2q9rBAh5sjP5zLyzgZ4SrgHar99",
  "key14": "61fhJ9CF1PEo6yuUEsbaKZ3bJonphLetBfwv8JAYXCrTAwwkK1dvrJuyn8Egn3FAgKzpXhnQLQ5R9cNHYFKhX2Hw",
  "key15": "4K8mnqv2Bu6TCyQVgCwQ4AvTh5KspZ1Pn5C4kMNQMEARAPRL19nAVqPnbYV757ZmpEbUHe531ajqmeh5ZiRJYhBu",
  "key16": "5D34L5Z7p9qi6pRuD5H5xCy6V1nvg2KXVLkUNnkQCg8aMayFedpT4YZ6NojxsD4U1xE3FMgLvzQSDG3x7ePfWLFG",
  "key17": "3okxFgpH1wSVt3bTBGx4QFnqquiRRU5DjVMEjUnUwfzk4K59vtoRhDKR7RRcu7S3N6b1guhrvSqV9PMjp5R21Zhs",
  "key18": "3UYeCHDFe12Mr66AgMEuRkCNM4ptVmUsYjfMCnWsWAJx4EYi3HXfGTWACBivyYsD3nft8Moy777A6zraqCJqULzv",
  "key19": "4uk6dPUwRGyQGwPSRf5dkQncwpojT2d9pityZ7TEBV8v4Ec6KZHJi6TXk3ZKVKj4qt1awchjy5X9YBpmgkDs2eLC",
  "key20": "vsnef6ryCoTyAPmXXtrxEanbRNy54Wk48oLyC4RTuCJy6iAfm4Bhxu28L6d5hxm49aEg5sXsjB6o9BUwrATQYeC",
  "key21": "3QhNUBAYREAACkuHsFTRZ5JkQV96BtWNyBtYspFnq3p9ABNCT64MLiRm7XGgbLJrii3cUWVT5Xudq5LP7zYKMEUU",
  "key22": "5qHbRV5FMyBK7KTBer8FBXJcv18guWC2vWFQZwdG464XdXfKPiD2e6fzFU2Sy26TLVCRt4QHoaq9egSARUm8Ga8b",
  "key23": "5vAn4wAzFBR8jtcwNKATt9HSSi8Vg3D2iPgqbJK8B1TM9unJZWqbuBAaL4gYUJAhU7aZBQYEruf36FWKPbbqE4PK",
  "key24": "z4b4A4pQY2tNmvwN4AABTkc94vTYTH692aBRMkiqWU5iiWUEWZ4PKYwV9yeeaHUgSmRB73v7nf479hxfmGhfLdE",
  "key25": "482AM3fvJShQpHvcoUg5iNPS9fPwEBhGTbmEZWUEEEeRsfrWhxZbVQz4tmj91qXfaFNrJzKMkGR99ZL2ADtnwwrL",
  "key26": "31opsHmyLDz2RaNaWDyWyma9W4YBeVXLs34neoF73DCR3Jxna6gcD8ACrF9HdsRhhnxgNMMuqEH2Q6CnqrzRXFwD",
  "key27": "UWzxgsE1iUZeoBLk55mZu2X8SYf85ujLLPdNetxD9cdm1183soT5wxZ8Duu67oQPaC6fYUFiZ2nXt1E2nYBQdG3",
  "key28": "2qzYoJa167abxnPFuxuHER3JeMY4wdwR93Bj5friy7qqQKCz9nn2pejyJLU2xvn7zbHEvQCwU4f2upe3WR217Wkh",
  "key29": "2nJPWwQVm49YRUbMYFf59KjiPiQP5W1eyi6Xk1jAb7D7AUjaUgw94JMBLwXvQhzQeRoc4Mf7cdK8RZfUmg6REVp",
  "key30": "YpVFN9FUgR7oNDmUCFiv6aDfTWUwT3KLXMzyqJZANe7PyV48e7Nkd3FQXR6Z3FwcHJx64WfUUhmWdNNVFYB35qD",
  "key31": "4UvDrpt8GMazpyUaaScBtTrtEGorXw9WdKU2yvwcQequs8wJ28AQroftd12wUAumQVDN7kAcAPvNw6RsytpXkfYd",
  "key32": "4syNoYouhHJC9eUoXtTusaHBN9xx8d67pFXkMxVJLJKshwWduk4yTSbXm1BzKFhRuBixXrYv6xXC3ej7gdCJtRcN"
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
