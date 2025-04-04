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
    "5nrBnkum99DhbV3rtWpD1Y2zZtxacTbmPQUALopMWxrTCd2rE8GtRR9fBHsAoXCWUv4rEYSSpFkciUt6SnzetBzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rQMt4LV2U1sHgAawHdTj2FyzP3ciQKn12cXCzDYwBe6eDR3z5G5Wp4HUShm8SCz4TyqTMYrEsVJqUkDhiEXriHa",
  "key1": "3QWQd48HuCG2XiZoJFRv1spwYTsJZH87BfA1GUZF5QhgZ87bb89BqJPHDYBH7f1PMBxTd9p1WQb1wHq367Yg5TFD",
  "key2": "3azBArFFw5ArKfsw26WTMm85xeXSLwdadea9VMHEgvwtCjHJKFoYYoy2kU3sH2bAi5mxe71CyiFmEBYeH4R2xEcg",
  "key3": "5dKV7idzHutT9eR9UbwxW1KVHsotVCtC8dqL7LcQERLWkEKXnTb5xK6rd47YJ7f8dYjni56bjEGBTGpVBrkXdfhV",
  "key4": "5QcXTbwLk9AbzwefHebui1MvXaJw6nGxB2EhiSMw7UbvuAGJCCdSgDBznuNn7t5Z2m9nya7fzdhw3YeZCW8BJ5Fv",
  "key5": "4o9DmzPSD9Fsoiw2MRzvbL6T5MsL1HXoiZAFQTe9HYY6HFbz8iND4sbCU7iyEyUaoLF7WSJYGJypEmxNS541yRsj",
  "key6": "JxGNWM8CkzEVXjbK62K7up6gfh5Wnh87KUx9y7PZi8ufgo33jEC9kjP9XPRbYi8rXUS8466z7a93b2ne9cVh9ib",
  "key7": "5CPgk9Z1SeQFqkDhQBbCnWmCDEX3566NZy3Qbr42NZrMQQpZSj49GbUgfT95n9hdrfSVHhGNwe4yTJhiykuJDihH",
  "key8": "2kMYB36TDZPoQ6gvhSnhu9jPLci3qFm974qQNmrE7Y13aC9XLUGjJyfnD4kqD511pLoSCm8xo7HbjdxR8WA6yWyz",
  "key9": "4ZtKvz1RFWbMCaoyzczobVXgVCyMG8S9v39b4XW8nRKWzfWerPCJULbn9z6crnPfoDAyCZJbCekX6J7YCxWqH6Kv",
  "key10": "3eRAa1eVzgEvozQUvw2oMFBwkkyn8U6w2o8kZouPwPYUdkQa6KsgVX4P3XE4r4PyZvCQ4mgk37jkgfeD9ATRJgPM",
  "key11": "X82R1B7jyGjjBAN5ro7oA4SZCckFD7rv2iqDMfSxEftGKn492cUMkmLMH57xd67xGTUhsAmLWd1P1ED8LXf9n4v",
  "key12": "4n9TD54UMVAoXmppyoqjTNbVNsEThbhKhWpayFS6JPF57wTiDqaVFRELcyKGArvQsa4wZu3PmmethdGo1A1hymiR",
  "key13": "4bHhmS3GzxPxJHdEfNxko6dCrUs4nqVYsPJMVPHB88649AzNMUicXhx5mngQTtwaRjbfmZDRyXSsNUPKBDQ9qM6H",
  "key14": "4KqamEZxmbvAF5hMJfFYaGGbSjnGYW82J9NPmsEky6RcVQ4hm84pw51GF6gM2gCvwGujbkJigno6jtEPLXQXUQYz",
  "key15": "5ksAsyhkNSLYRi9QE3utfqfMxtZ8w9v17D1woZFF7H9aezaCrnVbAH8SqwQP2oBCnEMq4GQNH4DRQHSfxCYpzMpa",
  "key16": "4KLXeU4rpLcnsNGvUwjbNcxmJUwWoANAjC3QNrNzXEPPGSAeX7hLPLQGGCfiCNt8AFw8VKekN2ZkL7bCAhSvgTJe",
  "key17": "3EVgDrb1KzewtNiEVD57SUxHJpcY8U4SNoJrjPiGHA4afAmMFaTAHHo1GyCN5K3fiVMzG2Fp34TGBEYtKWcZ4pvA",
  "key18": "3CYU629syB9ogPBg29hHWVvonU5pwiJcVs54ayzGWrSCwkG5GEy6KjUY8cWA6EoDy5zSP3WKiTCvATV1xW5TcJU6",
  "key19": "2GxqJXXULhzWFNtn9496Jevp2sJ63pQzr3r6Eu6oSVtaEeDTLubujdMgurD1MvUq6SzZ2exeDSYkSXD5FiXkNUo4",
  "key20": "dGbb6jvdShmF3KaoPrAXk38vfzsDVMmY5mNGWS2fk48U1tG6PC29BYDh1tp9bbBGHMJfA1kThThZW6pKMEGe1w8",
  "key21": "31QHrDiXzGSxcxdG6zrNuKYRiUm2WT67tN3FVoUS2c4bv8F5fJWvhBjVdow5Hr34Qea2v3QTndcsrQi1RAJEp6qm",
  "key22": "62sRhAy1EAzYDoYs3ZMQka7StRtek7ViT6VEuANA6B7SNHyM4NVHV7x9D4KC8wTfN6kJP7ZkGLRp1HkfqFA7Gj5P",
  "key23": "3fYRDU92bzSDRxr7opArMuvHQUeVaRRLCVq9sTUMMWz5nibBEAPjTNNmdC9Zz5Jaq9SJSDFXnF4RSsHJFh2N1F6K",
  "key24": "2SERga6Ym1sUXy9qW1BrJBY5conViyTxRtM6j1NEU5vy7JJLBwJ9URuTYV27TBs34y1crWPmG9A7WjRTpZ32BihE",
  "key25": "5EMqkXrtU1U3wb4Vb5kEhHsFtEnymY4esV7a1cF1bMXmraxnYpgy95hZYPJXfNetmrJsrDV1bxFNdWAU4eUsEQmU",
  "key26": "4jkJvk6WXi8G9TXGC2cCeRzPzjZQfZVR3fhDd3LPCtrXSeDJWnKdwCh2aURuAGPZPSBmeTLLwWKkpdbkPQ2jmuiN",
  "key27": "2tRYWMsBzMKjW3hkgG48VwmiKfSgWxXBbrWyR7667p7hbU2nEvdAm6B1vuArvnGnAhbVL2eUGV8aJmwJEzEZ4rBe",
  "key28": "V5VDeB9VMevi7nEDnnqCux8d95KspLYeExKUBFJJu5JQvE5Z1irKDwgZ6Ab9b8x2jLd6jykRD5gEvurq8HUikRS",
  "key29": "2sxgm31YED8xEZA9MHi5DshSXVhKjdVKPGq5TKETucyrWwD6b4FjndFx7KsDMHSytxQGmZXa6CWv3NekjciLmKtk",
  "key30": "2xGZ8KBn8siQJddAoSxj73teT5KC5dV4LPyRY6G1WBg3uUZMHBBZwu3g68VCdkqBRdnPrWfApRAr1m2bEf9Rc2Pc",
  "key31": "wxwFYmG66jhu5DruCXY2BHgMyHMfrb1SJDKkjv2hjDGqceyzxYiBFPnow3XJ5kGYoKs8F3Ru3gTARuDxV3GaSx3",
  "key32": "23VdjxAkSTZbPTgTAsX4yBnmf861gSC3nLKDKzmhsi5PS2p12tbmmiBaaDCfkyasS9EtgEaxnvfXABcgVpxB3hLN",
  "key33": "3RZEfbFdWD8nbYL5At4pPDjKB4LP9VFgp5zihTjiVcRW2XDmZuaYh8DjScWXyT9mFwsHfrwD9gpZsMWKeoC5PkUP",
  "key34": "52aMFNvXkofKvEBBZNCLbS3C3Y27vZexsA4YTUAi3ZUcLY4MLPJSDsjzrSB7uGJSVBanX9a7G27LGRMLzK75an1Z",
  "key35": "dSxiFCbzQurYYEg6jRJPsTPjm9F6XhZEoRYDtVw1ggiVQJEe6tsnkEnTMYFSBgwebV7ZNVaQVseS3CsL5fQp2qk",
  "key36": "5Z4KyGER71hmJLQCoN4FqntUyCBRZiKJayRHJbXwvKbbK4aRmdARgCCaN6kLaEcWuEHnPwJ59SjSU15j1hPkm5zB",
  "key37": "rXqX5g5p1SXFQqF7MPN5xaYS3GR2nm67wnm2fSoak6yQGBw38f3DVBruMSgmCFUJUBNBdG7yT1vpuqLX2gjVA4s",
  "key38": "26dA5ckGJa8jPtjJmkjZKuHuxb4TqtTgV9fr6V8RxoPmogAER6WTRQwrAMnGLjFaAgcsAD3W8w3rq1zLxKQY33s6",
  "key39": "4vcf5kS9t5DnUE9XBTc8WQ9GsTbfgp25DawP9vLG9KZNUdC7ThjrFyiB93YUWdLftaNJCFqhTeS2RoowAfZEtnX9",
  "key40": "qBQVmAmmAV6rFX1Nd5aXQUHgM4sjjy6DTPdx6eW8Kg77k3LU5mg6TeVx6uKSZhciw2M1H5LzKKKni6CTB8e7EEn",
  "key41": "4kL15TPZitgrbtsT4JrLhNazVzZayAELPa3F2a4kovtyowsyBm3RgABvWJrJeSpcsL4N4MasdHxN1qDTbqRWEjiJ",
  "key42": "42nBag6Krpw77gQTS8EtZbqSvk85QtGQzvhwHRmU64bjyGFLe9fkd6WN2RxxNZraxoX4vNh2YwUS4ExkcUN1dwRt"
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
