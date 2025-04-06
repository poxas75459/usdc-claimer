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
    "3LqkU93tDSPHWAYt9xMcCDc7ZwnaXnmt2FwL16QMa4HzA5wDiPBULvQ37e3UjXXDfhtfwckXmNFdowymrTcKBcUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FoiadhGJMQvNF6cjW8FzAqziA1g5Vi3ZAsg5Tf5y73ci6GPxoDZqZWN4xFUtqz4QZKCchTrp9SiKTwwq9YEZZu4",
  "key1": "gH5x7MVEKj1345xgfyPi8XNtB9vQKQYhD8mMLJBDMfz6LKqkgXjSWxbWqg8WcAy56rnubaZuoPMw621vM1qxnJZ",
  "key2": "64jzx45fpLr2xSXLovxzk4NXyCxcDtzKar2tQMxT3sr7sk23GftvWDKSwsUatDjvM5UzrsfzN51qYpQWNof3CYSQ",
  "key3": "4S4XsmqkRxH2R8d44Zm4p6uxCdnwmKU5WxNDd4J6zJue3LuT5M4BGCMdLRsQqsKfzoAGbfwLUqenN6fcjJvLVNoS",
  "key4": "4R8Xx3D8uY56QXsGqmkurTSsZftz5Fn7YLwzJZFCLvc814iKxrdd6LaxCDPNaVicp9Lvn4F17G9dpU1PhdyEdXTB",
  "key5": "F1qWnkwtAZp3nJ1vGnz4u55BEiuoYLe5SmLyuV7HW6K4cz1o7iVRbKiUB3PL5KHzitjAbXYopwp8gmoeycfrGqt",
  "key6": "3kqnE55XwccrbztY47Lw7Pd9uK2bj3Qg5Si3YQNgd4bonKBaxQnBNSe2f8QwMeCYqiWE95b4rmLxbC8UQFhfHqXS",
  "key7": "2xUFk4iY5fXeUcFCm8pJPt3sdw8nzw3XeLUicjwSyTrEJGMCVEGPvTqAsNFXCbbRjFt1VHaLmNYWw5pUv6VQhFau",
  "key8": "3hEoRu6ZzqjoMPnaRq6jUuRhePtRXfp3Eq96t7KQazw4NSnY8tGhwivv84CpAKANWFWkqTYMsRP1sMqisDuMp6Bm",
  "key9": "F8zDDrgpJyYArTn6DotNMiBnr1T5d5aLti1VfjSHFraxUk4Bp73YK5jbwpnFfvEtDBoK9xahQKCmNAVWQnEH3V3",
  "key10": "pWnJBWK5rU5He1jQkZpFgR7Tkqk5QMRM6wJ8enZAVPy4prpkTW4wHMsfhZURAym3kKMQuqCXC3XkCa6ZgF6sFce",
  "key11": "3DduUjNmxiRQwNXFQMC5igCspHVPR7sHHAQiqJa8RsXAih8KPDXqoxfNx2nNRnVfszkKqPNUtsCMy84QCu6DSn2Q",
  "key12": "iaixhQK6hAfKQsjt2Xqm84r1K6xFTZmVeZ2yx2svEqWpBY1e2qbjAby2JD8LiuVf5YUowqGmDF2cYax3RnRTDot",
  "key13": "uLeGZCp58Bb9ejF6vEqpCn7qT2Yy7wq82q3J8KqzgfCfSbXdUU8jBMGCkF3infLK33b5t1jt7BmkzfsUSuKtyB9",
  "key14": "4unTTUSUayraDkSAD3D8L7KkVgtHt9LBmJJS3bpCfmu6bi7XRAo21NeDzFH1sdUi7mx3Wr978JamPLrobvaEZDmk",
  "key15": "45jsJ1NWQLZC6R9MbTTHSWwmUUFXGkpDgkG2iu3PdxgNT7ub7JVfCDiqRSPJueAm3634PiaChMvix8LdXMTSnCt",
  "key16": "5ewCrkpKoEVkN1Fi2BvVGoHNtJXrBUUn2JRofKkbrfWwsmXyJk6fcvjjW1g8d5yx8uGiCZH358PgUph9YaGa5uLU",
  "key17": "5a52rGR2rLEV6iLntfRnfKhniUWiFqxa1Kqj8R3L576GwxX6T9K9GE3LLGLxLcuXBTS6fxnMCxCJ4rZqYqaQXRvq",
  "key18": "2QmHLnCgww53hgXetdBq4dRENKZB5cbYTQ4rJpRKiEjNJG8L6cWgpg9hsy19p8PfPKZmuCYDtuFcM5eYacNxdjb9",
  "key19": "2n59ADFpyXP9fh5LVjfJPtBobUNQoGHGCrb6poj2LGfof8mdRmoe4hhfeGoYsJsqmeSjM6XUs63ZTpTdkSkvQorR",
  "key20": "FPSnpBnamQ3KCZ4XndgpMXaArkgxBUbCukiskqfGhnat6pSGFGSJYvpsp6gwNCFfBiiNtSXdBnmd8KWpuAFxnVV",
  "key21": "J6PSCXnkQPpnpxFzf52g7cYJXJTsc4Azn31kt3wkcuQZ1GQWpweenPrkVq5UKGWqNhPPZBd8WZgAenZRbuXzkdw",
  "key22": "3PzcY59C9PSUR8E16LsFcpMgV9LYAPC3Ez4ovVCAzEgB4cKjMMsUbVU9ARtGh2Bxd2Vy94erzBy31aZ2KYbchXfJ",
  "key23": "5k4kahDAH3hQZiEJWUMzSQ74NE7shBC9oHeyjfQcqewwksi1mbZ2kBjoBHTSEv3be5vmH28Zd3zr9ZxendWDrHBk",
  "key24": "629nx7ikQtPkozSEQCHXQNcFKcdaQmTujA4AC38HiBqSEtRJrNggpvPqBoCZbs2X1pvtJn6ezPFZAR3vvWvBZe3g",
  "key25": "633VCSJchQYHtSEyH54qPyADBCzhS9ZgHYFrkC24ia5wZDGH9VGGmw83XDL7C5tcDzgYyapbd5qXhgqqotWTEk7B",
  "key26": "4EaqxcMzY3Df8RaVob5XU1oVuFG5cmn5SJcRWJozk2AAhYQzKiYuDDC1LU8vdZ7i7cLxguNn4wyVMBWRV6JNCUH5",
  "key27": "37ey4cieXujF97U3M3ExUH78TavhDPzeHW9waaMA4yBPFdwF3ANwn2emR9995H7sYCVKWg7bi8HNBgvY32t7U6d8",
  "key28": "3TVjU9Q2Ure2taivJNcHqACTMB1kvPFL3GTfhHJai6ctEReFBHWV7guscKL9nueyoK9668qU2iCA5bWf9WPhamad",
  "key29": "4yQBjB7dXDQ9FmghvzyDKiXWPzKr5vutYgVMBiNNp6iXwEPozroDgASiaZuHMKrF1kT4jz8JQse9J8VMVdrzDCR2",
  "key30": "5nbPkDvdinZJh1utzRQjGUKg1oeozKWvpMLjNhGFoUGkcYwGAJjhrj713BTdnm4ayartK4QzT4XYuw7ZKF5g5y5L",
  "key31": "4UzmxUP7xsY7amdNohh4oQqtz5pAemoBbhRxKxS1r1VXuE5RXF9juJzYp851dQ1sU2eYzcTmeTZyE2VJsNbUTEYc",
  "key32": "4xMvToHQBP8CeTKaAkV5uvBex5czDN5KPvubeuwWSV5Kr1AAmhmUZazfGRz8Pe5G5HP5dWKzuk9dxtYZXwGjBnSH",
  "key33": "22A1UmvsFdL8brgEyyJefGsRQsCno7oACiGv2wfPnq26bA9u9gREUL4goKU7xzFjRCVdDnZPrt1psqfmpouXoeKr",
  "key34": "2kBZUFvNoTGewXjM7GrA1E6E3ftXWAZU5Xz5y6GMjcXWRvJyJKtjeBrfmq4rbCeo4LzqvxxYo5h4YkL3gc8JkHCv",
  "key35": "4SRyWfPL3py5ciBToi356fwEhvfw6BRKZvJBKPZ6qUFwHvWnNUbJKbs91L8Yo9CmUKboMy5e3YTmqNGyBKPPqXCS",
  "key36": "4QBtxRuMEg2QEPt9XvboZoinSP8W93iMzB6BZpX4o1sPrg9bZDm9kqBrrXfkLEoYGs1BWqCEarCkSWjaKBG63fjh",
  "key37": "2NSBdoG3xHLrs2ivJ7jMH6ap2AVSe9G4ABYMjyuFRcsvY2AKC2GhFDhNhrz8KvagBwccE9QeKEp62xjabSq7ST9f"
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
