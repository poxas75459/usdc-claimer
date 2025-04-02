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
    "4zW8RgoGWK3FHgU4CmLED4ZpSyLMivUdAZsXfvQ5cStCphKYjrrJmdGk4hyzDR2fcuqnsizDg1rDYfrEkZTV5hKD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35oNQcHQFkZ3iCiFw4xy8GVm5wh1P2aKALwujptAHHUUJjMgaJNN4MmY2psu6w3bZXnP3HGYqesQJhFnrPtBdiBt",
  "key1": "ni2KEjsiZuHYtjz3DSPLfwfQ8TkvzS3rYfvJNNA6xyCMf83oaa6FCRRR2ZjyeEXyfg6gjHTvwhaqe5CM2EfmcSK",
  "key2": "5JyTRtLxdcVxDMqzX8pgkWSwsbNE2R7ubZRyeiy8jkE5GUo2FrV6RoEzDzryPppkCjUr32P4rR4P3htwfq6tQmD5",
  "key3": "BayeLcgJ8BVwmMuZxb8LSTPJQ2H24FiUYvFAbSnh5XyeJX7R5Liy37REA7Ahyg2HP79Seqj72PTna3H18g4qvCt",
  "key4": "5shQHCfqG5N2i3LePGYGtdYi9aPf5JmUHJgwtkbv5k6P74nEdSFKoJhRdL3cziT1ze9Xsz9xQCpb7T3UAwTqhykj",
  "key5": "3KFZu7CrR8P6JCzXtEG6YK9ZCWFzjj3QEBe39xaQYB11tkCwPG86aihYqCqrSNXU3SqEBjZzs9hGWpY1aD3vB9Yf",
  "key6": "2G1MQtG88q714DSyJxgq1PWgAngaPP5ckdUF88oagr2tNpS2YgFzhUFedjjDHa9p53i1HaNSYPAmaS8v33ERvDzq",
  "key7": "3gF4vP2MdKnKm9wMi8ZDSMxvKeioxAtoh8rGbPJwfQdycbq5K1nQdWtG4ZZrWwHX69tRXeQuRBrYuJ1aeFB8fkxZ",
  "key8": "5GjiziCLfNtp1AeZCXW993rLVHJ79ECQZFVovQALqcRidTAgZdA1arn3JqJX9cLbRJxocTdC8xJYuiQMuY6iwV98",
  "key9": "3fvMPio9S9aJeV2NNsArHoG2oCamLHyKpeMxeiJXVqmszjofHLuEs3n3jkvCEZkYrWnsg9W7KNv4V3SZ7NQCwRrW",
  "key10": "iEnACb1BRCGYi1fWpeZji4txsmCH7xArrf8jjQtfm2b1a3dJ1QbmLa5YcRb7VYx1p5zjZrJSfVGFM9BmKaHGH3Z",
  "key11": "31iLVTXaUHRaxZWYoqMYi9gEnrdchGFw4jwRht3xFjJmVPhsxjVvU5NjcjD8LisCGCwRxcM6WFSRKedt6YRdMeCM",
  "key12": "3Kn7nrvM6qnDBfexGr2fF4v1Zb5jYwExf2mwKserUuSiUuhMH5AYZf7ziNbNUj31MQynSyUVnDjHr2SCUoDU8vsy",
  "key13": "hBGuF65HfuXdwfakuvyfpbx2pzfsYywy5PQ6pQof9ArDEYRgDZLfYnCFidL3BLi1ZaseC7HTzSUhnnxbxikdyuV",
  "key14": "5UurA9MNuUuKGeYvEY2d6cUoEVWqHq5CQWZJmGYTwtr83TwcQVtMkotrWR42bWjqFJHSLn38KAre9XFiR75DShrk",
  "key15": "4gezxUvLhtWZCLEoRR1144rwiPA7T9KQZSqmwLV3CJLCE2FoYVAEdqtMbzJX9ZWiuVLR8khUCGok9YXbUsAbfGPN",
  "key16": "52BL83vHfd3zTnes3Xir9bxCGqD7x9LEnBLuzVXDzJgfPkRXnkKmgWbptE1chHBHFe5um3kMmfAKhwyX6fjaS3YE",
  "key17": "2vrvQdwFPoBshu9UwtTRSLws6wJAnPvYAATwksSNEdE64TosXaa1Cfrm8hCyWTZqESppBQrUsMZzCnoHH1WH7RXB",
  "key18": "5PcEwhLcb86BciBGEZqaJQm29jcPjVCZa139cg7YrnEAQQAdUc4ucsGeR8yaN2BUP5Ez6nv1FdCJPxsr3p3hhP8p",
  "key19": "58C7bSKbqoMbL7RfSSGuJqS7QPQ5Tzi9LxRAaRNDNR8eYxiZdjKq3aTAmd2S8YsQZgkhr9EcF7DNSB7C8NcnqzH4",
  "key20": "3dmzsjXJPtoJnH8xsqQKJ3gUCA9mbFCdsnMH3yzfNNiToHtjsmY9DBf5ZqiQMraepCnofuzcRxBCkEAZqsut5KwS",
  "key21": "4B2tAyCjw3naXq7DVioMity4TBDZEqe1tqnhADLzvKnccBLSEysgNZJpxBe4MpEMh58YCEW4rVigk32EtFQvUV6h",
  "key22": "343tBEz67sLayVLoqUkLbFPHYZDhyxEs348qLTiKYp4doAQ2iimYbCaVR9vemhYB5BVq2PijX53m9zXrv25bBXPY",
  "key23": "263Ab4xVrsCH89q9jyhKWAQRAGECqZnCEadFT64sDoCkv6LFECc9F7hJi5rLFtibtZrCmu4cApRQGM8ZG7xeExmW",
  "key24": "4ScVkiEL3eHGKYcVZmVusBJndqLqA8SugUtVpy4wtj63oF7aTsnacqrfBg8X4ZuGPXmZA6aHHEUmGp3n8SMYjoT1",
  "key25": "26oQ2SEcz1kD2PtbVmAcvEPQj6wqz7V2SfcyhZzKkAsEyyqqmu1vmwqdmEg6wbyHwiMAKvxecrtgn6rjf5H56AnC",
  "key26": "g4cNGH6aaw5KSb7gJZesZgAx4MsdE7Gs3HbnqYQEC9iUBQL2smpjpGy1DZzn2T4C5oLAC7pExWKi2B3262QzV9h",
  "key27": "3xpg1i9vSjxiTUQT1iZvKo8ajStYCGT3UKLY5munWbCyGooMtDJqdCA4fUsV6CJ4m5ACmkF4ziP1c4h79hHUtvgN",
  "key28": "39hmY9eRoqf5QsSwp4YBtd9KeX7iQuQg8B8xR8SMGbqxksrGTy2Bp975x31ujyuL8UMPQknmXfVZxF1uRVT9CdJE",
  "key29": "2Gk38uPKWMjYbezaodUTQpR3amt6Q4xVzwGELKkkohaNWphBSMy1Um6bDrsXk9mPfEAee5QTUZ27yxyZZpsKWuoJ",
  "key30": "5B5soVwz6aZFX7xHxuNjXwSQ5R3WcNPZv4jAmKqTcRgKQFqRzvX4CGwxM7YFnnVCP86G44qR7tPW8eXNsJj8qhyn",
  "key31": "5SFgZYU2Q3DFtqCKqWxYRrt6rS65rVcrrVerCn5znyLE497uvm28GggHrHqZhBg2RkW3RxWQajMM6JCEQCxDdLHz",
  "key32": "2ee9xzq4Q7cmWSK27MYAYKqzJTFqyGBLaz4ScMvk7khyjSKFNfnxyAD5PfYw8giZdLnUuwebKxWE8c6dbfDJ3MAx",
  "key33": "4axFm9dM9RjigtMPvc6HL8Z5KYVPijCEGLcUMKBZ3JURg4J411NKqiGHhtL73K6VYb3CxMv5wGxjUPPiPYFhfofL",
  "key34": "5LXyiQWjaFi1FZ3E5Yy4rv6NyzApMVjmQiWGVHFZE2Nqwsn7wEkJANkA1G4gKTAqBK2YvzAXjixhLpMm2Kg6SpDs",
  "key35": "35Mct265dSow1hmpVpKjc8A696Gmnp8FeGfkyavaSrjKjq19hBKqbhcWzR7qxEksiis44dnTzGbnYV8mJ9d9ik7K",
  "key36": "Cka7reeoez2bRAgCr65rCN9iy44VKfxqrqzbokWeCnABCXd3vKvpY3KuNkxv4R7jXKr97V9NbJHhMjpAbLVN6Mo",
  "key37": "4yCD23uQUX6rzFKtrpyE82EmYk9Gp3cRFroefd12tvKj2BxQAP61Qg9AFM6ThqJktmgahw7tgS1iHJZmyQMQKKbS",
  "key38": "585PoQLB9p63DRZw7timv2Bkz8KdAdRbnQsUWAXqTgtvfY5kmg1Tma7pXSPQjXfokJL8iCe6Bzhvj6odXgv57ZCZ",
  "key39": "4QYtwnCzQ4MsP4HF8g3Z6D4KDvx349Kmw6UWTa4JZGTmovkiyti3FNfrTJCKe2R9QxddqupP7nG1ehZ79bHj1ixz",
  "key40": "66WGmNDk3MJeg2ukzcYDRDypJifvH9NvUkEQ9En1B8EemEV2iS6aPye9CNEfTJM26aG8xhzijvXCsz5vq4M2BbWU",
  "key41": "5ZoyhXuWAiLFwnQjUWTD1cHoPJCNkVQiA1TwQYEqAxcX8i8Dkrw5dzGH4FnJHCZKq8wbctttYuB4QufXqcwcEGKD",
  "key42": "2otredEZcmfD4rppt5Q9EsztMrr3kxvLsr3zYEKm6S3pBPdi5h51QRW8hMwUNj3vMPvXsqXXeacRDSVPps4TWr5z",
  "key43": "3s1Mq8NuQa3P2WoT8wcA3d7LmnaoLWMkTy8w5Yf2J7XiNNRfY5oCWPWsKaCPokLqyxVnC7bVZtprBLwwJTBToVjv",
  "key44": "3K29MJdmcTnvW9DJd4zormWiifYJCY3yeVViUES11YxnGSukBGqwPzzdTT15CB7N4shMDujfCZ6sAdwtD8UATCTj",
  "key45": "3wf4RBXv1srN7ayPNFMYTMyTs5VJHf9u2FhCohZLgcwvvQXE48g6CpSRgXJazzZ22vLDNf9evRyBbmqDDBw5GpPH"
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
