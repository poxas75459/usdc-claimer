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
    "3FERejCMkNqCdTxEmqUXvVZoswWp34xeXFHKifT1EXVKcvhWLdf1A8rXFCtDt25NHNgH7KuRVrxU6vwPiAQ1LK2m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6XeSU2oyZmTQUkJf6a9uyDXTzLHmgFDgwdDSSBr24iQ6jBP5MEfai234TVXapW6QFoZbA4hkmASnSBgTB7VPSJf",
  "key1": "aMefCUmmriyEBUeCk83ukZgVDay2ByJQ2qLYquVQGX3LmEBwnPHgFNnYx48D24g2Y4gUdoZDZFiU5p6BhbR3Lo5",
  "key2": "55zHS4SD4LctVz5QPh8RAqq3t3VdVdh3FXwYoBeetBeAQ1npnf6WcBUyUtw7h9VCwhWnk32sc8NXSRhJs2aRvj8n",
  "key3": "2UuDDF1sHdVhAmSK8NjEaytwaZgt9hThLiSyH2pKogg9ZQd9tHziu5VfJ2zH3oEVNUN7BS7zuHgWqAxjXGnqP22Z",
  "key4": "54RXouKibL8QotkEnvRmrdmwMrMHcsvggAtqf2t5KQShS1Ptv24UQQyY97ruytAqpWv8p6PqUuy64LYSjjoz9uT6",
  "key5": "2Xn8P6ja1zBhj4yqSshu9F1PxS7cyW2XCqN3JMhsGo7G6YXN7n8K7Ce6Nsp6zwys4bBS6TafUg2C4LGiiXwfQGuL",
  "key6": "2g9apDpi1P4XZoCafGkZULBpL82qoqBa3utf3anmkR6CLUtatxU79mSQqu6813D8Q8uSFRQ6jqWvCsVxsmVgoLak",
  "key7": "2qUjEfwcyB9yvsiy4JZcH4A6TZkxLUTHjvA4ALPbUk5bBP9AkJwYDoziaY3jhhPmoFk9Drt1Xbrq16wMzLtRwCmw",
  "key8": "38oxqncwwyTBRPFxGuoa28jtctueDd4Ax2bmZd2sGsN1gS9ymEVWCLmMW1ZViHe8YxXYGi2eHavNFjwaR6Cn8dNP",
  "key9": "4epfjntnRRmnJWMEXpUiUMfxzPVU8BfViUMpWe79RNnYQrt7SJ1WR9QxdxhDhkgYi7LvyxjK4LWdvVFZNKh9Nnke",
  "key10": "2xdrZwsZrkqqrN7M66eYRtnDvkJ1hedUUDe7BsvGQ4RBYUG2cQK9vvH5wv4jeYE4vez2ZT8BeLCza8bN2A1Qcpoi",
  "key11": "3gmQkNjXzC2ag9J7EmjssnusSTwVXtu1EkpE5TjohfN16fJDxMb4rdEDoCnfzRrH7LoHTrtADJooKgig342mvJf8",
  "key12": "3FvRztZZ8k3YaucCyba5GevPjMp8DinagvbPH3PgTM5F39wHzcERGLBQT3u9bthJrFP6oGrcUsa3dBacXu1xNfWx",
  "key13": "2rNATLAwDQKYKhghpVbD6hKyD1PmUygdQexrvjz9EkmF9FZLXYMf58TchJiQVKHtH2vCn371xsrZQy1cYP8U4Noy",
  "key14": "3H47aJeNVt7ybLQeRR34xUuY9PTrobeMG8fWHvYW5KW3RHxxeep83UnBcYeMDtsjDLDzPvco8dRg7cnsZTxgGfGS",
  "key15": "Lh1VCJ26LjNhJckNq7rjMxGbMWCn2BrvesLiEdfxYzPW1wp4t6LWbb1XCayJrPeFUzdS6xKzkoMFjyM6pg8BbJu",
  "key16": "jjgME1YMbGQqTRcs1yx47KFiTcEWLMFFV7Z2Bpa9G37FK5FM5LgXuNijbdE8YYG4ywc49XyKe56JdfAqWxH1uGN",
  "key17": "3o92nRe9WJtgkiSXVY8gexTeXhrDNrdr7rovzRrcT1KwWRmQdFkmhfz9gJKTDdxhaFeZxu2MTqZxpf1JYDvwRSo3",
  "key18": "2XfcRwdMw3LtmTCNCo1wZvEEXxYizHiabuUZDrBZyDCC3BuZ9CVdn882xQEWtr6gDehAdJRKaxxj1MhYa5JSprea",
  "key19": "5W3MtyBMGBUXyBBUfCEYH5Z9Sk6kuwqdYTijhEurF4ZpShbQ3hrWrEgfpR9sdxg2dxcVGrNrCqcBYqmKRPfFVYYz",
  "key20": "4siRLahXaHuwuk3bgxV1F1dsRRVbCjRVM2zNFCwNQmzCPrBKhsUS2EfNqJWVjiohawX4euntAheymSvGa32WqiBy",
  "key21": "4WTiNV4WT28iAnebVXMEZXp4Ji6atufzEv5N4s1s9DFccS6Q2t7SbVSLAdVtf5PPhPQkQraFe8VihQgHb4W77BBb",
  "key22": "5m6rD9NB8DZFaVdHWdnQ7dmZ4iPvUDY3Yig2QVMF7r6Z1HY6PRvqNJjD6f59NXXteAbVrnB66s2CUPuxaA1u3Edj",
  "key23": "3MtaHZxVJNbcSVxtiXbvmVi7ULMjC1mmBzjBDK1qVvWAFezXYjgVhax5WgrBmaB4Rau3HG9gCxiyH3km9jmgEYAj",
  "key24": "3oJWr3ZiMN69zLFazL84G1uE734wVtoaNrVyuzHunaLguUC9jdnrVVLmECQrCnjqLZu7m68T2qz7EaoiggwGTthv",
  "key25": "Xnubg2a37tRNy5SdaMz5iLPMq8YiKmcvZbiYWbCMj7L2HkBfCrd4sQouMN92izD4uRMRbfckLXyYiuLa11WrG7D",
  "key26": "26DCksK2PmYrESpMUQ6eHukheBkq5zz6BwVpTRTp7fiyHyR2uaCvtnJLiAUpePkD5rCE8B2thYv1yPTXS6Ew8Maf",
  "key27": "3yUihV19YoumLG7BZHBCzedhynEa4k2Fc6S1LN9yi8iDNZept8uRPkQJYHYFKygUYuZFq94RTQcnZPKBinzhABYJ",
  "key28": "bZFvYzFBZTKDS8qoZLfiiSJzP5PFBLsepBmZce7Vp8WWAC6hDPszmNss2bWxebT2fKGZ8FQzKBW5kxgWmXn44gR",
  "key29": "5g6bHTigTx9K3j3yRa1fGX5XAeXDLpPPFdmoELoHVbjLYqLAo9bJqyDdk38kjSMci4aK8KaxistdfLZujCVUtGoM",
  "key30": "4TijzanYvNa9kUTp9TXe2adS65R2AETuGLQSbGzhHWpLPVKDyRbcBy28MZovbeqYZafhFpfM9iZGmqnPwoAwJcxm",
  "key31": "2R1RsGBoczgP2t8qLagnDWzPuLHQugWfRV845zgX1p8RCSwtWCKNpDe7uBivwLskWYbgDxJ5VjuRc8riW2FUmoEB",
  "key32": "3fQu6UY4tvi93AzSqmiygz1XzzZcwThi8Tr1akfmAwK4e1HdojbAv7ywovKB3ngWEsNuTkhLqZ35o8DabYYGeGpk",
  "key33": "5K89HSgqXzZKVwUMVmh21e9iVBSBqJmYFpfPntWqBLzkFbhdB5J25VxeKE4seh6uaQthJkDhDEHEDb7CTYb4kQCe",
  "key34": "3W1S6HQQnHbaZwwd4zFHZ79ZvE4oVinm9HZGMWf23D3aKC3N19dsZqvjMLL9rVNkYwNh3DRJ3Pp1udXjVAJNz1oQ",
  "key35": "4wFkNiqvYmBmnJABvPMAqdFeXEeaDkpB9tD7nUXTV53DVnXqcVAHq5k1UQnKEhgjXdLQpfKihrwafgRiBo1emLjn",
  "key36": "2K64SmHfcA7PRRg76gqEhX1KHJPSkMhrYPMk6D9idHNLCdoGzbMB2uuFcEHS1pfdtNjFdGGSHBa2L4uC893UQBCN",
  "key37": "5wY9iWUoFqSaL3dD9YSNkf75Py4hAxMVKcMGf9Yxp1qN3PHN5Q21f7ZZGtEZ3iWXT59vcvgip4SpDttpDSemtBjx",
  "key38": "3W3VHakFAKQVqaqpJmRCAQBwnFsZBTiCVYf7UxAbuRe2rDpKey2vHBeLL7MiUwP7CG8jJ9aqa8sfaqKeTgNTJWTG",
  "key39": "4qS5Q18Ga7s1Z42DucttpQhW81JPcEHZ3ExegcJDuUqcojXn3rpr8NAU83Na7bLPbo5JVBQRamRUj3TXUva6t189",
  "key40": "39x5wqX3nKpbNzgihxKQvrDHCeP7PEDGMjvLmc3CZkjjTZsZN5cQ6oEjbS8GCTcybnKDawbSww4V73hFZL7QouL6",
  "key41": "3WX9rd7ybycrwA817aFneKz78k43cCtm9FSW9PYxmQ1XHuFy3LP4nuzvBjsq4MNExjLWEVTHBpVXM9r4ZZM6oGZH",
  "key42": "66RjGxQxWGQk5zZL2R6Ki2Jwpzu3NVQC3iwZfBoe6TgdbKnVqRz8PwvPmsR1NaG5LD5gbV1Ruo1zoN2rSG3FPDkP"
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
