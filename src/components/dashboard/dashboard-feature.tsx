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
    "5GBLn8Q8bkQHpY36DJN1wPZA55AFiYyzhbJvaUpUYbxGft3s8mpuecWeeqj3rgrCspjKhWqdUEDcYk7cdkYGXZFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mpvGUy85PLkioNhPx9i1kcXoWgHa6DJrJAxU41qa8hWLYyhyaXqpThJwHWa2aryRkEMCbmrnH6ZqQXDyYfxsUur",
  "key1": "35aQHy2RbieUd5sFi3yr5vrDSnitK4nBJh47dNx2UvyjQ6TB355JjznJpYCi3wr39sXitSiDVTY4BRc6PGoPcEhV",
  "key2": "26PLsdekbvUqTKZG3zgwe1gTBT5BLs8WyQHfn4w6AujapgZzbUUFLdvaE1VkBYMEb835bCQPNW9MpKoijBuZJ4BT",
  "key3": "5uHBW7g86V4uroqUZYFnyepXMvccUomwtKTgNVtr1mewB87BPPoAZAXP1pzYCFexbxSRvEBuLgPizEiLVbzXUmfh",
  "key4": "3WPXUCNpNGC7HtCmmFCigoqBZWR6ZuVHWHU2okGAtweAqGYAKisUQxBrh5WfLf2XvSr7T1G2MjmhPiUd2aobMar",
  "key5": "3p8zjmXbaHcS2zo2cieN1KkXQ9pmTFikGPBpVaLjjqbRU4PsCRjJFEzxxp5sc1d4vUREb66wmhLys8zBYxSCqrcH",
  "key6": "23zwSPn41LhdL1qo1zV39jUavJ8Jh487iv5NsivcZEBWnXA2P77HkhWwd2H5ka8BZxTpfx325R7gCgHohkqbZPaM",
  "key7": "3Usce52WiaKkNsRy1LeN5urKJzCXW8PaynLQxudMdkHmyJSAF9UBWfwKXQKXLamJCUbUwk1qMk58y1agtGnjptBN",
  "key8": "5pPRDt4pk7h8ruy3Lk7FpmbUcavGBP23Af8fvGefaYz7F5Wn6YefJXHaZu3eWtfqbZts8g7kv2AHZy54QGDbpson",
  "key9": "3ZTZzJaaz35Kvdwi1oX2SxXbhsvXYM7mwWZkj1vTXbggSH7Pb19MB7eW4S4hT9GoBnHsoa6Dpmc3Kq2xwuoCviPc",
  "key10": "4KAPUSqgVAR93YdQxp3R72HgZE4RJkAe115QsGMEo6K5KnNnfDMyyfYvJeiKXwCgirWugy6pB8kEVmrmeTXPHZe5",
  "key11": "5exYvQKebz9RdiR6DEy5nkc4GQUX87F6bhn4KRJnmTASjFXnvuJEYGcQxh38CujCJ5BG75KRptw5mbwavKM2arCr",
  "key12": "2bNtqK15k9rheBbZxkbuMjkuetRZandAA56iP5je9sdYSXsAVXssj9uGNuVy8DioRhMznbBjNwXBBrbALd3tt4gs",
  "key13": "66yY8kfcc4a7BsgGPytEKYhvB1oZ7AXH3Mp4egEr6QEA1guXKSL3GeHMMnDYiAPaVDHxq1CqYwTYKxf7hoQA6n3c",
  "key14": "TnjqUkhhRrJhi4TvWc6LWotyGavXznw8vjiJ4Pt8uSEg6Wna4tj9Q8RKiF62goyjrwnGWhjhZ73Td7w3YjVoHe8",
  "key15": "2xVpikgRF32fcPUaa9PjfKZSa6BftvKyGRALsWV4us8NJNCUu6hcL7rPWWvD8Dwsci4dSD3w8rDUzoGZQsJthyjY",
  "key16": "4UdKCqVV4WPdcZhmtg1wRUx5p1bzoFpAXsniYtkqkgWqBLyEEZZgS3oBpodPVSns3WoD7XBtgY4F7RkrntQjxoCD",
  "key17": "48Qk1khS4QUryXG6x3x9ooCXnXTd7xPLTJAd1JiF9WExs8C9J66YZX3861MGrBXvCnFQC4pnYum24HKPxo4ELd4L",
  "key18": "61QjgLBcrPW5nanfUA7jWYGVvu2jtYZ6J3JCkKe5C6d7rs2cBa9y6QRcjzpBdkAqoBbfN8TpUFJ6o1cm5crfpJ3L",
  "key19": "TKqn5yyXtyZBJaTFXS7hg8YSyqF6gGXVHpzmFRaaEZ5mcFHF7YFm7ptFgZLamMvQUVu25EgWMC7BiS9mjT7UuDB",
  "key20": "4CuwTn8KztufBrAKedxH2dmBijW4S7FF4iAv4ZC9D9ipkDGUmqriHeXYWuytyTE8XiTFsdxAjbwmfnEPpGwDFpQd",
  "key21": "3Fk57SPgKWzaNiUQp6Yg98JAAETBwe1M8KFPeT7U6kWvo91f9xRv1NoVBEgWHeYRnXWxNA8J963ChweyYrYDPYZE",
  "key22": "4CHnaj4nYMMGqx6sjq2ukPBEb8CcJvd9myBmDuSDjG6FG2KcGn7HbLxWFTpRVtfX1gUagoRZnEjS7aze8eyAj7mV",
  "key23": "fnR5tQjPzPiUWFEQ4MXbZn5dv6TF5MntMKuETHFEJVeMpQrG8TZWLLoLwm25g9zR8mW55BJ83UrCYTNSZZYZUYZ",
  "key24": "544cm4xRLLVfSCa5LT18Ew3WuxGEphv4AKeuJM2D8f3iQCp4PZrwEea4xYmXzsHNETCSQP7e2E1i4bXAYyfscBPU",
  "key25": "4TNPEpuAS4FgXoLYC51esMXSbw3DimXLBu3QWs4neq1zHm55z1wwSYwq6nR5Don4rgRXHQDix8NHXeTkewsahJY9",
  "key26": "5Ynp5ZtDa39r5bxdp8qSjorzsziB4qKhd6Yq1U2zhAPok7LBRzvKwS9osPv4cLc31kW6im6cMLtodvsYYZ9UR9vU",
  "key27": "VjSFivHytQvdVzr8cvZzhg7gKQGpgLB1kY6feyYKrtF7BdTeTcLEveeEfQAXY5py5krPBzkprCRhsnRH8JQ7Eg3",
  "key28": "532CpZE5dMdSFJc3LRNgEuhkL9VXDbmzFwgT1UFppsEDEizX7mocPx1tATEryZZsZ7NerJrSdtE36AYJjRTHJfAJ",
  "key29": "5YhfHq3sjHwMjdPnqCem8YdAkfUfSv6TXko2xJifEnUL1gHZo4kr3WS1i4wvDxuwYVfRf8qCDd7J64pP3JtmT9f8",
  "key30": "aiimV5V39vNmrRzxu6zYzSQzaKvxCR2cxacPBf2J6cuEXfGqL4NToNnMHY2cgJPBD85LWXYDhf7u4GTbNEzacAR",
  "key31": "2eCKr8fAjDZ2LSacrArBNWFTDAUcYpXbPzpnnR8gz2vHuVp6dqcgmBEpoGSSHNSCKcd67PX5WR3AZDu9wFRDv2ZJ",
  "key32": "2Hdvxud62FKM55K6psFTMvHvLF8uuwhVWqh81PEoa3GQEHjqqPWNbPQcCp7YhspD512GNhMRbcQsrTeFpzzTNweX",
  "key33": "3PnqUPB4yiMnR3og6dZaYBPyQhx8jqxjg5koBAm8LGJaC1PC4zEXKFDxnFKHpX8geTWmyV61ZPXofG1xVWYNprEi",
  "key34": "63ddGsKnhdSfaCGipYVLrQVdfBpnxorSmSKe4gc7LDPoErgf4jPBNqMP6eyJgh2othtpB6xah7JyCJzUbVSWebYU",
  "key35": "5RrCH5EMxtMJd26DS5PurBKo6kDDN6HS1BmTiXjVtVfMqaMWaXszJi27XYQQXEkH19k639Astn3Ljazzf7wUJLmb",
  "key36": "4tqf6FRp1CAfDvH95B1rzGeZmFgMecmyzGWy5qJjwM5oLvjcuZoLLxRKLWJyikpUpK7QTzGr8SgBbbfJGcv5vqx3",
  "key37": "23WYL4g4cvZF9xMNGZ7U5aZoubda54yaHTVtxsHsnSvJtB13itJGeB8oQ75pFLbtWHMx2emEnXMpxircWDGcjLTg",
  "key38": "4q7V5mnWiVWRU8aFpQeFE4Xj8kVxTMcuwsKjsJfVGZY2PycFtuRRgRHjnozxGqtQYy9MbKBBNAmJGLfGWQPn3UVj",
  "key39": "2Lq12tXHf4KtEkTcLyg95CoMjtrUBu25vvQ7DokiPgDsQ6uT4wZjbtPUYRHA6XnjyiE3fzvSfN9aLcfx8yzFvHGC",
  "key40": "41VBXm2L1QY6SddpD4NVHVEsFZdkbc8EHazPiPP4sq5L1iLS4KnCGrzCVZRCJbZaeCh5puADHxCPw5RqJMzcGrBh",
  "key41": "3QK3pMdEzivNezyJBhKXoV6opEXJB4u45kRL96Fqfayr7yTpZHWys3vf1RgYnCDVU2kKFKe3UTTjkcRdrWSXSeoT",
  "key42": "2TeTwtJmUdpeCnBLtCapzz2GiDaA1fdgjmYYKjQgCpknTGT1FBsSDkpMDzneq9D72PfUTomVePzZWFiXMTuuhWcJ",
  "key43": "4bhUKGKezeof532zF6S5VUF4sbu3jn7JNKp1JiwZ5PMUaf55Az2utnkq3bAfb21FqKeycJR2iEGZoDyS1XEpJ5HH",
  "key44": "35Q1fWi6JLRCtsrWXyWP9HwHYmMYLxXbrU2DFADAY44XBkFrohn5gkTVbozGXF4cX3GcWWRZ57vRBHzLKgXge7yY"
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
