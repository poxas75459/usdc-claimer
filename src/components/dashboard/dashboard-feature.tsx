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
    "2ynPPcVau2yqCcazGMvCaTFcbRSYJHHdy4NcMMNHoz9LK2LxNDH6eajf2YqR8BQ3jkgHHZfzYWV8etaszpzqzGDa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sqCi8CQXv9u25kNaM8LCexWfN7N5R932P3HCBeHh1x3uuTTQjb9A5LXWAgPCVrveVwdojKAgfN3PztRLFUCiYMX",
  "key1": "4SiYRnb3dwQYbq8BftRtz5ry73zowLrRR1onhkDWPuq45f1DRKXSbUVkUsTt2wZX9YaY8zNLKkBz1KdUNqB2paSH",
  "key2": "34BzdyBVKja1JekoSazN4rHE8An6P8SBnz35dPmFrL9TtDyLJ1a7zPbzE7s6r7jrdHknJ1BwJRk6LGzhVb62o5jK",
  "key3": "2HCwMK2vnmGJRQzvKj7robAb9oQaxRTsYx4xU3BG1gcAXtHBtDvkZQAwLDQRW6FV5hHms5PGMsSdfmWVyA7z7BY4",
  "key4": "5YFuNtTNwtGjFSoE1eSKhHBiNQMQUJ2BDAuohQFrC9DG25wJzoyfSewX4H69LaWtXji4FSTq7DmEp29FPUgwmAj5",
  "key5": "2LKJqubFkYxNn86CaAKnWWiQM78Jo3bdion4W2Yj6GjvwecGcHkjty1WL4sb2FNaiJ2v4uEB31qh2mafnaB75nkK",
  "key6": "5xb5TKw1cwwyj8NyCMZdQX2YsLUK19DRpNXdyn5PwvwzrXSFwYFRDZQfD4FbwpAKWgAsVD7AV1HAJnYjS55BBbw1",
  "key7": "365kEXAVpTRJhifcLVT6PCbVPWzXPtDUetKCzThUQJFKZUGSuc7K3WwQCsmsViG2Bxxfcfo4jaPjdQ3BJQTEffBP",
  "key8": "aoaQtxqwPVh7RA5wJqoMENNiijygmQxJrcN4NZubWatwkKALSJhrXZbLzn1tuLX5w9CMmzSD1WzmD6r1FzjX6xh",
  "key9": "4BsYQXFMJARPFzqRTw3oEcUdLMwiXEHDLh4785z84vRHGRRdscsMQqGjtGfmg9Q7PJJe2j6VhqwBgaYmPfTXi59x",
  "key10": "4JEUkq2WGDBFQ2NtmrZBZGr35dzVs1s7S55XwVJV31P3yZHys8PQoxbpK16iKjXJuSfQpoHNt2djPxzCpuCXZhAc",
  "key11": "5AbTD8C7Z9rkvZJknVyM7LNp5uU8QPofX9gcmiGKDuYUn7qkXYeznL2PSq57gYwaPxtRpykmShBDVk9niuGVA9hW",
  "key12": "5FDbfKJqbz7ut3adSZgxhXavNVSBxqUDXa7cEbBv3FFvQhbb2dwtm9VcREpwrt4cqEqB5zLkNYnMmXFvYwJZCfbf",
  "key13": "3bRVnPASx5qJEeyHgmnr8s8sBV46isCGhqZFRHoMCp356KfYMo6Lt2HgRhEBmfwpXMYkW4ktkf8P1xETir1XA9GQ",
  "key14": "5Z6HqPX12eJdR8ZfLzWTuHJ32q2opNoWqJXy9Yhw1bkyYCSEVgxgTkgKcbwJyHgu3pkU2vaLfaLqX8ed73XytLmi",
  "key15": "4srBE6Jo19KJJrq8b9RJBQwswFcERsUnUXBdtmn7smxPA4QwcEjiVJvNkYKfJzD8Hv7t9kbSZCpMyPS5sHhENzof",
  "key16": "5bpWoWb8rJ5iGoc32gsF85RSx78tX7R5WN2edt8aViHa4gSvV8zR3W1iJHffDBTUdzTyLMd1frAWQ1P6kgxWCudX",
  "key17": "3PyuWHjwcnVx6yQzdDsQNzXpp4J6qMUzDaaGU88T4dvuQ1fJLjZL2AxzgubMSLRdBQmX5cDisSyS6PXH2D3waGow",
  "key18": "2Zi5zi62XC57TFXGCgXNdZQfitZJtnB8S8xtz9sCTm26tWDXNChdTQW4W1k7feAfXhriuLUdpTZq6Rikpv5f6tjN",
  "key19": "2uXqfHLAerXRLfn3izcEo4i4pPUrnb7C9cYfAyRdAm7Yt5ZqnkrHfoVK343Na31m3bFFc9myYqmdwRhxQoEHmgx9",
  "key20": "4nUuebYMjziW5ryYGTqPf9wLMsNHNt8SP8Y8Qmb9zhgN5uAcvaGjzcykvph6ZpmiqiEKZkDF9cCq9i7PbDGegs3z",
  "key21": "3TTVG93T8MmUCQVfsicegcvhQGukRsBAPG62bo4b7d9diK8NQ1vj1VJ5CSsPyscfAgJaupkxtEF5waUQ1pgd75CS",
  "key22": "45p1c2U7RUChdxjGMf4dJ6ed7CrFAru6TUEwyEpLcS8c5vk9pfaQMvpNuwmKZE262dhKN6B3sYV6FFXDS6SDoYd8",
  "key23": "3gWbUJh8mEzxyWErJnTQFe1f2BzpL3FrV3Rat8ALjdnTbArhFeUuWQVViaXXVc8m39uwGR4e46JHQXhYyncc86hw",
  "key24": "5YRKLoQKUeRvsWtQV7i58ouny5CgKgeEgro9A7oTb1rBHL2binvzjptRSJezkvLNYbukMKz6vbjg6NmJ9KS9aWWC",
  "key25": "3vvhqoxo88tyNcMkLuPksiiZVwToi4EtTiS6NqysESjKv179uBwdSQjFeArenNTvgWhcDqLXSHydzMhsxZTo85iX",
  "key26": "4Pm1c93XqJEeCtR6ofxFHKLiSFpPGY8vReCARHbBXUh76fwByPJxRcHbsgaexQhbmjMY8ocUAiKRy6SEkemQXUSX",
  "key27": "2tvbPCM3gkBatrDnqbhrjFscTEuoN7KFD1U3Tpi5J8AVs9tcAd2Ux8irdBoj3dLqgG33Z2QREa7EVXWnL4zgy6ox",
  "key28": "5Ej72H151XDiz3MLGtvPpvneh2KA7wk1vqeY2TgiDhTtbcc5bAYw5RhVRWj1q2WLFEaCe1J1HLZ6CeTZ599WCCyn",
  "key29": "sWRwhuXegR3J9BQe1kmc1EMTbrQuub5uD4yDzLKQm4jx545kM5qf9ByGkPVAzUBKRfh8Vaa5FXoyi6L8srJV7HB",
  "key30": "2wbPLgfaYmccQmaBD6EHFD5q95mhaSFzd65T3CSuaE32raEVDxaWmqRuXHPN6BdJb6XqJsLjLusJ1o1F6a1xq1uw",
  "key31": "x56AjzskBHH2MXQC2DYjhoqaKuwkcZTburdhRzdaQM3RYJ8p92MkSy6ebgtochLXZHNoCJYMB82HYPnweHvY5U6",
  "key32": "2xatdUSMCyrkm3PXcNGuoDPjAnhz2SJCEzoKbQ7cYkVhYrRWu4Zjy3SAefXtK75YQjiHWWZshUYjPkaLdnTFXGYM",
  "key33": "5caxygs74QrGgkmdc7G47mePRAHdo7eo7SczBqJXKj2XW2Lytg5SDhkEPE3GP62RfzppB74UKTduSGiS4VU1Am7p",
  "key34": "4jstYHPPAeiFcL4tAwuMvLS5e1mJQfW8Ga1TaLQKMuULFHuqqwjQKXZXRxcYyxtm4MtFhaCz2HaKqf6d2L6RvhYo",
  "key35": "5D7GBuLoX15vuDvKdmG9Ed6ei2p8eAbqZ1T8Vi4rtZz9cKSxideushUsJgQuTi19oPSfUY8LeNV3BXGNM8RYQhui",
  "key36": "2BJrBwQoUmaPEfu1So5Dc539puecWcdHMyPYeuXJ8NBtopnS33TzgZ7pfGvbj2bLeng6WFH89gQoftSiQybLvAmp",
  "key37": "CUnEpU5rXayqPMhJYTNeh6CHmqcuwfKLbJqJEtVXvEC7edDV8qfSHWGzatJCgBqjyrMQFd4cQiVVCk4eR1JVBFy",
  "key38": "5VhrD3nt5CtmQD8i7M2D9rUdtmtZh3kWL8LtLcGoB53NkxBX15ovMbgg2qtZG1aE8f3bvneVxGKGwnH26KksbLpQ",
  "key39": "4RyAm6GkePMQ7xRJjGLG5d6XwdCNaaVfVs5nE6jUrwnBJfraAc9e9gArjkprd1gbvuqwvyH8RSLqoJNwNMqJDVne",
  "key40": "AcMRcm6v4ezC3XbPJqZXcWTPVbJ2DYgiSXjUVYVpByBtV6Tsni7h1kaadqbFkUennv9tpJGYynKicrh9AxkCRgh",
  "key41": "33T1GNP4ZrWEoBxTLFSqRVTL5sJkHjsKi6VTaJ4yhFg9mWsRgGNHuRCXjaU26oiivJiZHFNBHzHBVfmy9WMB2xbB",
  "key42": "2VQdcsUcB5bLfvPVPfqFvmkoWAQVGGWFsVuGuC3ix2Ga3gCSjRc19A1fc9EeqiS6vrSxT4BYq993kPeGBmi8K6CE",
  "key43": "2DuA5W4hVzg8dLVPqJapKEooQfxFvnyjrEtWtz19thkRrXJzdqNpPWKP3M1he1fAjNwJyqcpGfKmkfohZdX3fA7g",
  "key44": "4Q3LZ3jFVhBFX1ZE7j7xWzbG4VcagujAsPXWCkbBpG8FjS7V5TnfWog88KCiaRzkxUTVss9RDnDpvaNvDtJmXD1L",
  "key45": "28zNQichHu155hBSFHkJ8D551hCL5AEmUFckLwxjeFowj4KUr36uT7dmgZUjd81WGy3WJWGJ5TGruT2qbBrw2zQn",
  "key46": "594HS7xKVR448zyqhh9csLt1bCcepYQkCBn4bR35ewWoApoadUdmYzaJCGXwfh7VGnQhyEaBGhrQ5wqHgRxwfqhf"
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
