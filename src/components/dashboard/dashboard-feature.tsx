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
    "4SRUkPUjWHYZpUaPFA9nNrWyErsfVNtLhQrv6LoX6dAMtGnXxPCQgMCAPkQ3SAKn1yhrmPrfDZ6WpcmSwtuDsCsL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gHtQpiPDG1dUHFH7AaQbpG38MHzjAedF6NXptuyztaKmGTPtFN56hVhaGNKrvU842fofKzBdMMHae8rhyAVZgZz",
  "key1": "3cg4LJVXcsxRCGZJLp95TgWEC16VFkRHWSymC9BKPzpnoDseBNH7JrBXAYvEofLtG6wrgkFtnfSATpaNBUWSjwV4",
  "key2": "5sfPPoKqpdJKq3ts4XqJdFr7D4UkwTPic1m94WehovgjSq1zreKf9e6wrKtQu86ms6EkRjaviZqBjoyq4vGViPzY",
  "key3": "5MrKXahQPud6xfKN7AxiHco37SDpdNWxPCNzKUQibwHyzSuhtBiGnpkeKGfwut8cUTjLYfuKFS7Li6nbRWCJkXNe",
  "key4": "2d8tVveRcgtaLMcVoRvUDRa6UQQc2JiGe9oeug9K7do1iGLGJcyhxfAp3EvzKiei1EdK5EeWf1pb6ucQ9LtKu9in",
  "key5": "4MsbMZzVAfdc1gkjBx2psNkkyojCcnXdrm8YwtERJc7Hmsaqz3ngR7QxmAkP4ChHiDw8gRDezAccm9ffXCimx71N",
  "key6": "3hz1Pi5tEmi2VLVk2YehDzwa27Me4yxbyvYjEMGF9KZda1E6T9uPRrfkik533DKwHy2oBTdYeMNh8SLG2ZzQ3ebz",
  "key7": "2VFBgRJV7yrKTMKufTt9ovVVZC9PQyZ26zRHChCbh9KXYAS1MLkFjiYrdy1buwzx9RRoJNYuoL4Eii8yjh11AnB5",
  "key8": "K9rLshHMv5wh5wKkCbaR4QMgqAaFe7rNCZq2yGZHZv3PxYcyVUtETtPKFiwme9FTJfAvKn1KyMzJzs7AVpfvjRJ",
  "key9": "KwdA3o8BMaMAQCp2G2Q7NNDefJT8deUmVo5avifJyXzTxrWA9vT88dVok5inhwwUYaZnnxJ3zQGDc3cpEt5ZS4F",
  "key10": "2f1u1ZPY7L2Us7sJKsjBmXFfCuhrzGN3jQqe6qdNsvVyRDswqZFFqp4Lggt7JZjuW1tp14v69EfMwcEMoxSwXkdm",
  "key11": "3rfwNwyxjdPhJKw88JnqJ8F7ogx83oCkGoxy5EPeu3hxp6vuvgXaaqxHDp4sdLYqCqYRRm9ZhKecYP1L77o9Jg4g",
  "key12": "2VjUBGNiCZBj75JySKJfYVRVn6wxwEGDAHTgG1reousvTtnH8w9JD34KgBJ6CrpszM1Hp1WxkJDPGmKX1LTZHgRD",
  "key13": "63MyLpqKNGEpuCnaDstS5z37YHT6LqHs2qNzaByeY4A19HPNct3jjZMdA7V1pAWQeShqtJagqZtkMsPfPoktrZjC",
  "key14": "4j4TQPvT17uDrUQAPtW4xcuUZPmpbqSmEXGqaDzW8uZbQ3PRreXrmkuCk8kBr8qhBCjwK1TSaqnz5RYKbL1QYAQi",
  "key15": "61iN8GAbbTMYrtQMBSBjLpZrTV8CWd5cFY127QoHBYYPzq3Ztz2zgzUZ2bLuKzntRGijvCT3iwscrkc1266BUXxE",
  "key16": "5UqjfS2KLvtMW9etagLVdtWNb5P6UT1LuRJup6n6jmYaUZcLVxj2tSDzYwqYvWzexk7ptm7jcmcbeJ8skQWCK3aZ",
  "key17": "4CaE4iNJNQ2RQQJXLioCxv3vGPcY9JNqxS3rQLwyyDkSFs6L1tM7zirqXnspDwLpTgCmJ7NhXzVmE5RbmLXfXgoM",
  "key18": "EWvgUBHZDPuA3da9afsLXTzEvFgK6nY6G625r5pVoSyCzKU4E5VT1uXBkmBrdBdqeeHgTRUmMHGVGedRoKnEkBu",
  "key19": "MRBnK1C8BBT162ZzDWsJ7RnhsJkroJwAqXQTtchNSqif2dNke3Vp9eTm5Y63rxwpsJCGtWcA97PPC7X4WH12Xww",
  "key20": "4h6jvnyjUdHoru7ae8qwMQpPJuZvGDpwahrVNfiQRxcPXNNcySGktZBBTf478i72jhhbKaPpPGgEA7sPCjXp9wQb",
  "key21": "3rU5t4nAh1CjuMweAAEgXFPFm8jir8HzLCoJ9sJ7Y8E5VwqLwisBCzG8uJqLtgJCJVqaYPCUNYFY7cPYxwEjmyty",
  "key22": "2tkCrkfEmsTrFiZdh9mNELfUESriZRLn1XtXYyMgVp2Q79UDD9j5Sm5NJM5mk7rhN4nzPUK19XrVh1tq7QFM8qXj",
  "key23": "415TdLng2YP8RTCDnYJJoEDTaJe4sCFfZUzhkyTA8eEGeM4b2DAgwDuVGJNYQLqa6CCG4HXQF2RyY1mW5WDR3Pvv",
  "key24": "4xptJb8xiCCZPjKqA2K8R7UiM4aU94rAeugoi7q13EcViT9fTpnQqqdPTduJCs6AodgyWhofD5noXGh7j3Ut3rY7",
  "key25": "5nDD2ukj3bFh6SKA2GxJMGkpaGQNH4iWaxKeEaemnns24sW6hL7QKUJc6KxD6nGArePczMaRRvhHZF41hx94L136"
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
