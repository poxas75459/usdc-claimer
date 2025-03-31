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
    "4mTex4KxLXqSjDvBmg5esBoaKmWKfDmSXrwAmxu8qb972knqSCfUJWpeTEQZ3FwkS4LQpEKvedzkrRynCJXMP4bW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58Ujfo8zJBZF61uC9j8VZb7ontAjgUckyinLpXK7Fv9K5euz3CWUmRghcvXGH3F3rtP45DfjCvmhG6iJo1ozDRuU",
  "key1": "Y8LnAtpuK2hUUiGoQNqrXfBMwTTzbv9WjTppGXSGniaUARFZFtnSqjje82d1jSE42nhbaR3hKargzMfUtrf6kEB",
  "key2": "2uSs5zShknXJA6QQ7xgG6FV8EPVimRsVb65W79oSEpdaDaUqM9rx9ezQNvLjax7MvczeAoABqUAqFRGQxAz8b3rx",
  "key3": "3fuR9xqo115q5L2Cifh9gkTpwiwNY4ACujkyy7uhm2sxzVbKMTCzXVy3MQrw6rqPd5Ue7oyUDnvrDwzfrZAsyZKR",
  "key4": "kd4rGcrf22GKopBNKF86DdHBmncUVhbJq8qvmsVR56joJwAZZX7vKnXsTG4bP5y7mkyQK53qUCsM6nG79p64zgo",
  "key5": "rsW6CM7Bj7sDj2wH66GBjF9zyiL1tXaXCTQ21ignejk6fMY67aX39GL8ujoBLiBU5b3QbwviuEdtVEa5Gz1Qoet",
  "key6": "66jjWXNjG9sNsp75RC5VjJbu1sWEFnnwEiW6u372xqtGCBYXpoxyoabNDgJjAZcJGPKtZfeCur2pwAc6zyfifWkw",
  "key7": "2r97L8BuRDBdCHbZQcn8oiee45cYa9b1tp6QwajGn7ozH9R2xekdu1szes3C9WcsuLNevtqmNH3dwuuRVKF5rsaG",
  "key8": "4D4hBCQVTqodNJK8x4oNHtDSDFmyhqNKn269uL5JuWKeaCATiBGagj7Ah7s1Y3a4FJj8RTU87fQREtwaJQjRicTb",
  "key9": "3oDgsBbPyNPcoXT7wn2raejDtzfonkC7kNHHg3E1JwcX5mVuJdipmxkbkwiGUggiCaDTqMtZDpeAeobAcmjvRsmE",
  "key10": "4VkxFqAXB71wn4tuM1Hncj656NoCtFvYptfrxum5ofh7fp8aMfvHMC6baYSWFSSvgfjEYB6Pd9pZZi8SAo1YkUT9",
  "key11": "MhkJ698cpojjvyZq6Gjwso37gpL14yrRWBrWV8qQd7xgeEXVy3DAujVUGrgAQtV96RdUah69vpaM3rJ1Bjcov96",
  "key12": "3BbYWessoeyBYA1AefWQ2PySkNi4uFCCv6zgE3N58fqbUFA8WVAdoQd5QkcsP6yg14LcXV77zSttrMNGt8Ui9Wpf",
  "key13": "2uZsTQAs7ZEShuUVEV45RVYNxCDXaGnNDEbL85UdCBUgNSUVPLyt2WqxUehW9PZhEv7F6hJiXcU9AnqtoDSXxVYx",
  "key14": "2mtgQ3dWaquQ16qcaHisgq3hsKY3XpnZ3MyjaDshiN71DxpgyzEK5FxUdGq6oorZEz7H2QX9QcYF2124XAy586iy",
  "key15": "46jbEET1tSSQaxsPFLARGj2oHLTm2xXox9ATu7k6ksiEUWH1LeEtPiDpw9Tx5cCmqudGR5fNDdKpnV1pHxRTf2sy",
  "key16": "5NMaEbFhMy3pudqy8QEYqb75CwT7NfEJt2rsHL9AtMmymbqu3fWeBsDgNTBWxUsNWoZWN6TeAm3JayP5QJEanFeg",
  "key17": "hvQiD5Gfthh7ndATDjdMR415wYxyGGrwbd4tD7K3bvHjrqDt5fHoGeUMjirm58fpWhuAgsT1wZXcL3Rho3aqcCy",
  "key18": "5vWk6KkURMUnxWE59goLe3NnPPvP3eRL2ppJTcikmhcqtjSyZfkfkcn7eUwUomyzvSDxtMKWgtc6aZw6qRnCGV1Q",
  "key19": "5YekL7KiZfpBTXbqhQLVeG8oapBi23fvqErHVrqFQiNEVFx9NzWa91e27EV8i1RNYv4g4ZQJuna6xWqkeF5atuT8",
  "key20": "2FQbz6haRucZSChZBwPtuqogKK5s1Suv9HMrDdk5cLPKgEw7roDmMyrF4dTKJVP2Qwoe4iXFRGNa6hbKXvNbc465",
  "key21": "615U6ow5XQE4jCrd1U7Wa49QiLiNPNgTyUJcLmqmTuYboTsktPquK9iFuN23wUEAntDfwKeYoPVQWUprve9kr7ZC",
  "key22": "4GHCUsmJ8BduW4QnDatr8w1TuSctq2xFZWGSa7wgnqgNLMuYQybocy9u1RXEc9Yhz2vpJq2jgrTq8RuwTX5Kx1Ve",
  "key23": "A3KPk9DRkJfoMq6mr3byJZbo9ZJPuEcUXZoTPkqp2DZUBTSfjDq8qALo4fFJguJuagniMQcFq1ARUbEqMENYj56",
  "key24": "2LinUYALTWN4yZwLj59QY3hyTbJLpQYynof6AoLsXZhAaBhU74cmfQiV2Pg3EAdiWLZMYWWk8z5p136iHxySeJPj",
  "key25": "2aA4rQmqaGYr86Raf3vPeaa3MZzwFfH4cYrgjTRGi95Y4DbNLNLgno8i2EKtP6mYKuXnV3ieBDk8PtywHSMvn7GW",
  "key26": "4KMZ2ae2AmpjCCwNmg3iNpNfq1i1FJCCqhQVcUKu8nHyaPGqMttcPKGPVZ1FQ79sTHs6HHM9LZogzM3qz9DhnH3K",
  "key27": "3iSisMGkwYB2oXPZqRQec86HgKdhtvF1xhhMbAw3fzGjMnyNLVgwCxU9zk6rbkvRWuG4cnAxMBenV5MCKAftKtP",
  "key28": "mN2TUME38tdR75E6XPwTX9GZqgaPNXCqNM8U9P2QNTXdNh6UKxjJ3J3oP9yqLj3GvEtweegX2xGPA9zMtYDJMgt",
  "key29": "25bY9ynqWC4S28yr27Ext4LRsJHvua5KdCQUf3gRTTUu66YvNMqKNBYbHoXNiRzRu5qvepkE93e5XbXe8fMxQm2H",
  "key30": "cCZzdcDpy41diQQPnNzKUFGsMrPgnage8oiy8weHqxRmGrkhYfKqx5GJsb2cyyzeLZhuhaGNZu1wqz41QVcBm8N",
  "key31": "3JSdSVFxDH65g1DT4Xiumh7zcoBJ9jKDunjK8TTbpoXtt5T7bxzG9A94razq2G4joqmehkAisq777SxFJZnDdj4G",
  "key32": "3HiKPPYwa5sz2FJ9iFjozsJKhDbWqq4KEe4fRSTAGTz7tWGDuiUByqQqNaqfqvg4NCzCNiLq3wvpxaRafMpxxiig",
  "key33": "59gz2okTpVBwkLUZjKUuyjkTkesDga7N5EFjxAini9UvoQobZZX8yjA9sBEMJ6iDTkKs6uVaMWNZz2JxyFXovtJm",
  "key34": "3piNfQappDukLXV1s6RmDebnGC1Ff4581VptrAWKkmMiR7bv1v6CsoAmUwWGPpWgbUCuYBvXoH9cVgQrA4dT3j2i",
  "key35": "kC8vniXupY2vm3V8R5VDwLsjkwD1v7zopykz45VFHuHs1fS4rdDFi37zC3hbksLWEpqknnh1p5g6WRXHcWYtLAc",
  "key36": "3bW3azDPY8rufkUXCcmvCTyzN9Q6CH3ubRvw4CtcJrUoyvuCCys9912MHUwEBYaMfqMu7e6BQGSe5RQ6BKWUAb4X",
  "key37": "5rTFtWZ1yrbJEhMTK6VTMuooNd7BuMav8sBWKDcFGwJ9xs3MAsGe6XrKfjDTAbBEYpuPZDXdZD7S248t8naeRPuH",
  "key38": "43VHZaNNfPxA9PzKAT2hLQHvY7Rfzzj2sjmWVqj1qddgvNj8JHerYWrqXCd4dFRoEgib1vcaFXfnXYq1QbW9gm9o",
  "key39": "48CKX8ZmZZc7K7oUxpd8K5ZiJ4wkYdDbM9feShFvv1ek7YdU3MciqGMVvbiFBWDRj4n32ZBP7skcD7rUaSia1iUd",
  "key40": "2SmRyMLip1mFqpvKD8P66SEHN9vvpVAq3BnGh68Vf6CnK6W5nNWK1FPknpJwYibsLavWGpWnzXGpV6e8h9jn4BBa",
  "key41": "66wXLGEheyDrqcpkprABWCGJCzEwV5qNVgayn1FtKJubCjECbCkSgYU28xSimRWmu9FeyzXaNwbjMHZPpajtsKxW",
  "key42": "39kLxsNVr8FFkwsSoozzdNPMpnuk21RDJ3nfNuUSkkB1SB7EXwVKfs1LdUyKH2JGCyiLAHoqKLoE1RrTjL3cGgN3",
  "key43": "3vYB149kNFDad1XPQkhXe3ALfYXDqa7prZQbPUE3jVzb3VdHP1WJByEjJrLQiYJRoYELEWkJtfiCyav48cqGnSVv"
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
