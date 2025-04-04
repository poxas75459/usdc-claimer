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
    "5gmmFWEwaRpFrkwMgLra3d9ZTC9PQSopgnAnkzTjQZsVC77qTQKrKQ7D1jUmnJRb9UmHEMreNBNF4R36LwopaQCB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23SZ5cAydrT4W8aauqBKzYU6LeJrKCk61Jkf2GCHrcTGZZhfiBzr9U1f9BmuU1PMLF177oci1RagdcfqxB4Gw5XN",
  "key1": "637surFJom5JRUrUuRVoFRhAptBJ7GmdzFhbUptQSmi9UyFEGMiqye4VHnmtYZ4y25Dm8692qPTcQvvUGp5jFwAJ",
  "key2": "5bMEpBWZQQ8b1GFhxzQvsRipuEmn9c5jT3uhWCqNovoxWyRVA8FVRDAZxcXV3tvL6MQrmBkYDm8cprpBk7FfKS8J",
  "key3": "5pvgCv1k8gDwAQ89xS7ycS7pRh3UgD2884wA3Ry68Re17QtvPzmbiVAAaDGJaAvDqyfmMicUw9eVag812UFcDzGo",
  "key4": "3KWfqEA9RMM9UAvnJgNDrpXtPgPjjKpCAqGFnYYviQXLwZWsn4B9aMYviLFyh3VKpSwp26jZM4EhZvxQ5Nc4BDFM",
  "key5": "WDpyzYgyHuqia8xNNkjzdvSQcr7MTG6X42koU25BCSmB6MPTWPKPAVPK9WUXEe2i6hAnxogntszAFz6LbQ3UHYt",
  "key6": "5DLHSALE9rQ1Neec5TB5EdVBAi8fpV7RdqUg89uCXWipzg6hBiAwbnfgNe4esgWfrYzRqYjvqKJuRknp8Fuexh5Y",
  "key7": "3QznvtPTLu8i871b8RXJe43yq4AdXc2CLkuChTeK5AhLuZVwCLgtKB5nkycWVCE8XTWEqpWmrSP6BzPdTwrMS72M",
  "key8": "3zkNki2UC1vLELegMv6PD68T99KoVZp4EWJJxqUWSZXjy611jvMCYVLjfVsGVn8StPMDNEGTAbp3v6eSfwEJYDxP",
  "key9": "dbhrESt1R34Pjh8Ra2u5owQg4Wm7hMkcYAVeX56YAvVRrRpj4iQc5UDPQnf32p2HwC64czLHNhbd5nDtYr75xWU",
  "key10": "59VP4Ms2igRLV78e1PhLhEDknbqAeAGEsLsWExRJSnWhrGQZevfgU3AFim4xQfSiTbtEUAjqs9dhcG6YPtQkKbyZ",
  "key11": "vJnTVE4D98SZEsp4JvBVj6N7qBZiKwBxQm9axFrkY5CtNBzW2ZpufebnLrPDYs91eUuxEVBvoRm9AAYoHTU8ARo",
  "key12": "ygGMjfdRA37bbRwnpMyRmZg44n59j8QkmDx4W9cUgat6uaupzspRvXpYAW5vfDeTv36QVkJWquJCUYz6s1sf76H",
  "key13": "yMyjcTDAcYr4GaTt8Syg8QxrWsH8rCT4eJoSPPwDRDGY3PuU7LnfydFPTY567RrZYU8oi8EUask6s26kn7XEffu",
  "key14": "43U9iCkU95j6QK1EBpWQwmQ7UjrJJVeyEuF7KADuKLaXKGSUJP5oSAC8bkRZuR5SAzBSp5Ah46X1sXHi1KNUBhEv",
  "key15": "2qwLmPttnCYbmcDwR86ADUmqSnr4UT6VhAU5dbBbfQxmo5uUkk2DfuCMuADstAChsC2cFsGuWkQr3WeFkz4Gm9MW",
  "key16": "5UEX9JUBTM5W8vCF1c57VxcRtvGeybMTJLWFRVb27g69ETL5emU74mrnU1djfA9CgsNKS5utK2LTm79BXePTxZab",
  "key17": "4L36Zhyp28RHCpF2g3bfNwqmKJA7x2d5EyFqTNRt96TuhKLT9YNP8igZcxUUYQDHWeC5dQfQPWp3MVWqWXbiYh6i",
  "key18": "3aD44AYgUrN11BXPCsz74MLqHSTpjKLgpfTeBZ1zCGgup91zYP4km9YTCnF5pKkSphjugggjun4maqUWawsuauhs",
  "key19": "4L1QYvNPQ8RcmKaRGdsgKQu3cCzmPMKiTYUVgYhLxZXhJydwtUrjYAchF5tZz6acAq364PXUsp3uwLqLeyGQghtJ",
  "key20": "32uYbqpWquuWgrmoJT7NcjwqCpTSa6CLYHDWZa5PnH6bX67SmLMXLiBUR5KsR3Uj7xBZpEFtJ9EYwzAVz5eGmmaw",
  "key21": "2BQEwzfVEzKh1dhm8G9ZswKeMPEPmB1f7TGQAMcBqf58p7eoea9arQg6HXGRuVBcMMR3UYPQ27YC1icjj47hYw8W",
  "key22": "3h4zeCYTAtJC681xYfcgXKUrqRfuvGQwYr5Hf7uzjNjutbJNRKvT2FMqB2eBcvkFpytXANxXHyk9wwjFZsW5mr2D",
  "key23": "2k8Ys8ApyCUMSpaUqarwvUzCfzCzG2N7vc9NFcSh1ps3nz7Rhf5RZ4zopW8FmF8MwBz79Wp9Zgq8pqYf88u6zq8M",
  "key24": "4PQs6vmxFDx7P8axBjkbmHBns5McFhtFC6xaFeU2GpmHu51s6WbZ4GU69Y4LRTfJpjACDGy1GbPYKeybxykG3E4Z",
  "key25": "4UEYoRZksGUvBv3X1P9dzSp7qcuvyBjV46MUMQro5DeAnTDfA6UHQvwasDujcggF9U1mNp3R4XAxRiNTebEgNmtB",
  "key26": "4ManRu5ZWNRUV3Vrqbox638sPLF21DZPfku9v4Njg7mueptHgPHyKBtQzbNGVoUpE9t62mKwu7J2y8GxrerB4wNX",
  "key27": "2GpeJecxEyGuCwPskhdqj9AsfbyZW5TmBTZNXMfpBo8Bw1Mgcsgfz3qkxQpQF2aKYSN6LAsUw1M6dNKkJuT33Ejx",
  "key28": "2UPEginfiCJ2PhrUEvdi5kdspzPk2ZA6gQcRdWdfSS6xy6TJWDNTBGhZoE8pkJVEHg8xQ3hCx4DpVxehHH3dSx6c",
  "key29": "5ypQaWHwJdN8S7KYvzHcNWr3GEXmKryCrZc8N1woFcShfAtmD4LzuhhHszHsMEb3vNo2GSbmoZLhQ6hbmZGjzeBf",
  "key30": "4e1pk3Xyme7xoEp5QQ8arm4D1xWGZ9WtUaeDcX6cP5s94A72Ndq75U6QkRVAgH8KMQAAVoR9vmNRBHLK6U1SboE3",
  "key31": "337LE5k9dt6UnkazzRV1gKcUNQyrGKz7MKYNbVK36xAd61YdPzkj7doJq7gjT5foiZ7pzSsY1wB11Y8C5jxzAmA8",
  "key32": "BN6sgVfCV6geHH54tZSnNVRCu1hXdcbmqBa9EAY2QQXYKTpeGzgL4xyHo9xddGB9MJcwH15fgmCFTGnt9bQjdZb",
  "key33": "3sdEhGX8vWSUPyAqY2v1nzsyDdKwspmfFVTVXuvrAyw49S4qpNDMt8mY67KE3gcwGiyDSeH4Q5v4AZ4uzxZmo2gF",
  "key34": "49P3RizAjCdqGYcuxNYs6MtAHc6TzwWHKeud9iGPgh9KbjPW2HodbJWgPAw5XV937qRsbjHHqfq1E45jP13YgmEV",
  "key35": "64SmiwHvomGJXuX57Z5bUGWs2coLdW4TnTnzC1yv8n8gQ32H5iiXKTpTuNkYKpQGWLdk4Pnfr8cJFNFGmauDQTvk",
  "key36": "5AnWzLieJK9MNzPv6aTsCz42XjbXGJzskMzT8S515rC511stenQKrqSf37D4GvGbQxejwiNxEaJEmfqLKoZAZjkJ",
  "key37": "BYhE3iRJrDqZmtDZvdb3nLzXPbdW2oj5Uo5VHgZmTMNwHkLujpDt9udHTjVJqk3jVczvSxJTGfojxB2B4HcdDD9",
  "key38": "4tCoa6xnE32hJFs9oibTkV3F9RPchRTqeWubkCEwui9D2ZBompKcKoVcqMUmEcGAvyLpTA1KtMLbzZyzhFzazDHm",
  "key39": "494uNK36Trm945urYb93tdRYPZ4BQKMCbsG51XTYEMMJN3ZD4xpyziu442fPqdJqdLmEDo1uFTgz3xfg8pkJpbCv",
  "key40": "3aYdrGJPw54Qo2BbJiwGVn7rUwUZKKABJzRSynHiCMFQPBEwDT8ckkviusejqEcAVyxJjG2NRn2KVB6nErWBcvCz",
  "key41": "5K2QnNh78VgvLj3Hf8SZu6ujTHNjHxSgNUHjdUB5fHBGgedBBzcaPGvp7R4tU4SBDFrGRq41GgBNncDia2yFFU2n",
  "key42": "5JFtUL3b6Ur3yWTgwJPZzh2GjqkgdBepiW7shYkKZWU7YFyp4DAdLbKJtfEP7sJexwLAqakEX4Jr6JQHgzUwkJHV",
  "key43": "4Y7T5GdneANo6zK7nWkPADU8wah3KzjtW5sawc96FG9yLUkHp4Qk8HA4gE7qTknYgbQZTdhgeajeKZHebowBNxwm",
  "key44": "RuQrsNgmfBwXS7H22HxEppEvxQ2ooSN8vEzgNrAw4wawgZi7WgZ8B3DQp5tZDMzemU44JWn9qPy1j26bu2EcKD4",
  "key45": "3BPcKYHdxt6nazTz9MGmJrfP6J6ViheePSV6g892RFKVg8Pe2WTyQu5HMkce5xxmhoFRn8Pxq6RYs8A6HfdjXyWC",
  "key46": "3RHx35UA4RiN6cNcJNc5w8TEMXZWjhvSH6Pziq18kmgSZUeXvzq7bPUKB6XqpayonX3gGV2AVgxYkQ2HAhWEs3Wi",
  "key47": "mAYVNw4DS2eXcz9t3dGGuptTzhbeb2jsPphMC5KcP3orKukeNfewLKV5Yzp39qZ1gSomLTMoDRRaVP9iV54cap2",
  "key48": "5WmnPWJZYDTXkuzAXy6CHxQiYehDJ7roo5w814YXDgTmdg6W8FvaV55eSXTpqHMR1mpsa2LCPo1Jn5Hro1SVvaQ2"
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
