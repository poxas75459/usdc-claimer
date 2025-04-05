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
    "2MXTzbpNFjSSp3rJgxRK9BPMohXFU9moZMBqGHP78Ct2MWhEBnLXwmyyMW5C9vsMot234b9VofBBcvcUEsa1YopV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "546B763AZjsYaYNaawGBXdmTwLgNwr6w4euHabDAPVcgDL1VK368URN2NBTiVg92nGHQ4erTRKgSksGJgsrrKKDU",
  "key1": "5d4L1HpEPw9iS6WkzZN9MHCijyDxQLudRWWFxXWUoLgUnoqXwAut6rVABWyGZ5h5bRvm1ivw1Lt5M75xZBQwKE1d",
  "key2": "2nZBdszNVyiaUd9U2PU6wmepKan7B1mikcuFiAUguqbsDMo58HtaVT2nHot5CSaZSyboLoZy8JztEJwZk2DLBQzw",
  "key3": "3Gtt8yrUVLHLhBU1EhdQNe7zeezCPq9GjNYrhtaKKQ3GWc8pFB9jYBqa3q7LXutpBnsZrCo97TTLMLbMXJPuK4qG",
  "key4": "2cjk2HVoysHG6psormBNPTUMVvoPwcYA7f29WU52BHZWC4WNN5UHTFJHSzN7CcwxerGSqRKPz11nv4rgnSnVQLm4",
  "key5": "3V89BvG5c5bvXuU9tbDrnh7d7TzcHoGfT36f8sKs5CFfWFbdh41ytiLejXaVfeEEguRiLj1YqhtuUN5oj3wJpn1b",
  "key6": "2wQMmjjMJEdtGLMyChkGHLKb4YLCiJhDAzY6JQypyHVgQZAPS44aPPFGajNnuoJxKC2owj5N5s8UrsvtriiTcBFN",
  "key7": "4Z4wDTfpmeFHNzAfdohyLUeMUvq2kgnWHWk9RfE9z2X3SxHrPxYFJzWhfHeGheg2u4ussFEa1tMLbcZkqQnUaKQg",
  "key8": "3bHSTwMipyzrMjLT1xWNNHKRZ7Uyit5DXhYswA7eXSNRYytejF9Xvbw7F3mmgZpUwWvp7eV4MrVPSsUBToMnWRnJ",
  "key9": "6397vGMLJsPmqC1e3bSkYZov4soi9bUaSKKmiE5uyjWWiSK8V9qEwHSrTzQGChjMmcsUqMUYkGDnappwzDdxTthr",
  "key10": "2kGNKNWgkm7Zqow9w57u588ThTFfLPkmpx1YZGVyYxATbf8hwC4NhmTxe4ZaUCwhe91eS12dJZq3VJFukP2pasQ7",
  "key11": "5V7yv6YwDKCDezYLzLFqF8DwJHXjqB2JRbssA9nhSnQZNMt6p3k49GYKTWo4LLccWE4zomAUG4nEdhwGJ2m5tfMu",
  "key12": "4sXNj6jjku1dgVveSVmQt9en2wpCcJdXfP261aPsCzKuwQY8woi5wJcYJQeHtNB5TCUB6GSEbXxciZS2FvywcNwY",
  "key13": "4HP2CVT26YUvmmqMyRnPgnxDzSXT6mFQr4yvmQJDUiebkJvBPiNJp4zLR9zgpZRsPVkn7snQKL3mTJPtvEvjhQ5V",
  "key14": "54ahzMouH7A23RCnfNq76jbnZj1HhjZPc2RAJXSpoKcL4JEXXKRb6gdo4NDcp1DUmAgbNkYJygKNrzqrr24cUyAv",
  "key15": "4tQCBmLcL6mKrGr6RtrRdFsxVVAN5SkMaKk79BS1xQoMw3ScmqToWvtJFbNATEBND4RJH2W2PgMxo98jYzLVUcc5",
  "key16": "5cf8qcEFXMQbu3RW7AZqUm2vuExP8botED6bpUBfp6f2QrqDhiAWpU177sH4DQsvsbZzXY4ZMkHQswTczZezRyq",
  "key17": "4ezToQdL7ucdFGUb9vU94Z2qHnoCoLV1h9eiohbgRX46TUTWGmqCYh8YHVLMw78YUEjRac2YuECFKgZGin4v9PAj",
  "key18": "tp8siM5NvgijuSmVzH4HDrX3MGhmLNA3G1XbeA6T4QAa9bcXHSm13aUbN9vSiBncVuXrkC1V6nPdSBoHdVC9DP6",
  "key19": "44TmrUanhDqXYrFzaqUgKi9YAcBJPn3jBpmtzoJ9vh8ifgKxUvec7WyAn2urJZT2CsJTxrVHgzcH7SQhCq9nWCej",
  "key20": "2Jx5Rf48vr4x9KvoGJYawp9kYgWuGcTkKMVYM4kgt1ZF4RNbHGHJFVmPCwkfBFCnYQ6sGkAGUKkBwZSxePZs1Et",
  "key21": "wkyo2MWur9bBjQcJ1qbMLRfD1HyufBmtD6K2qSc6iPjSAwZcsbrXcaXDc1rsfCM6NTimtqMimACKzuStEK14kjv",
  "key22": "2V7kZEBKjz6SHa1nJN9hCk9pNA7SzHe6Pytrnwu7pDsZBbQwTeyCxCemKUniBrYJbeXc4T5SgVv1N4R5xKzQRTin",
  "key23": "2CjCWau3tDAfEVLbnyq3CASLrkx1P945AQrwesoatDeXPywtdB1YX4QM6xPU7z8LTcs9AdhjJj1bAdhqvfxht2s",
  "key24": "2XvKEdtbTwyxZ8TZAYohH5sTPRh6TpcrT5MYpYYzC4y9cjeGY9Dp6nhi6A5wdUYNFSq2mou5jsgrEu5JeRkv4fmN",
  "key25": "nA3EnG9RzQ8ZAUthZS444GkMbPppGZBdxPSM9h1BcBDuSJC4EstB5XJwFBavoVnFG3tvjgz62HkQQcYij7136Lf",
  "key26": "3vPqWNqtH1SXUQe8KpX4shUuLKRpQ6buCWqm5mTocXh29jvipXU4P96UcoJcZFDUPV2NmxUzJ1xCQP6kzxmjczYX",
  "key27": "2WDyaGMTVLk7acokc76G3fjcofDsHGWAwCptc3uRfRoqh7g5G1vBZUJpUGfMbSrXpDjH7Aw1JrPPPmH3tDuYN5zE",
  "key28": "46bn99bL41dgCn3sJTrhoDu7c257gttZEaXSrXW6LjRZHzGZfp3e2RxsLoP8mkyZotyMrhbCxVsUGPpH5ap4NJg4",
  "key29": "2WrnKn7986PnH8UAp6jzsNxeGJEnPayUVSzh2MYCGHyMi2ddyKsXH8pc4kw18TiAt8AnYKjfrhEdkGSaE2JzffeU",
  "key30": "5C9CAJBDsgj8EqHQSUhE8xnhgzgVeGeerGYjsvcKZp9zYsoS2sPRG4BMq5NXDRTcaArZgWdotRP2oAAweQenqkdD",
  "key31": "2eEmnj2yBciyuN2EPY4dtPJScBes3pdTK9LtuQpYiq6i1xiEtEHWe699KDvCDstGZtu7L5JQEdL3eQqERBmrihFN",
  "key32": "4dX6uJKDWDss8He2j1f39J6Zq6tdQh3D9onM6ueEFW5pVYwpShyD8pbdRbGqF3C5Fh2qajYibrbdY14zUCwyVYtQ",
  "key33": "2MMwhMEDFNgBnqVNJ1c6B5tSw5QvV2wJiK2LmQGnnUEtfisS24qcWEiF2J35emBFSeZiVvuYskBN1AqE3AqnGo1S",
  "key34": "4n9rj6roDmtE9sDuvgZyhQfmQZcjEqQZU63GVCGfbpS8UCJCGGv1T3yLaeNECpGvTuKDNPRg5VGgWS5dZVhcVL5L",
  "key35": "2C2ycLKitXYJr8qdyeGggHXvQ42g8zt56epAWv5eQXrRzQ3JPHmhGRAmKdGvo1Q5X9k54zQcXLHZdZC4BXQdC2Aj",
  "key36": "2dRCtBZZW3Kh2HjJU9fqFa9s7tCV1ZUXq8KKfDfzLGbNZBCFEatnPkAjpsbU79uMAyuRFQPUszuQfQ5ugGCwbTih",
  "key37": "56mRPkdouEa7WR3oyMCDkwSMQf231ojtVk7AaEkqHXXKBkvaDF9KHmifqKvhj6TCPwZUteB6uhuVtiRuTX656uVP",
  "key38": "5qCQQ1jQzHxjqdUc2QE8GGs4FqPbmV4HccxGH2cs4SSg9Jefsy7ioiSia6Yv1mq8yjvihQknPc74nMT9A8uYwGFi",
  "key39": "2m8heJQGkBx3bJnwSeFFzaMDdQRjgz6YWLBqv9iUfVou2qgRxag3FZ6sdgHcQrSQttga5ZF7dKufAAbiydcS2iG5",
  "key40": "2HBzYvm4AB9gpRMtbVxend9x7QHunnFxxFvhCWP8zLn85HssP7SX7umLGf2K598DSCpd32KzdbajcsqNBGn995Yg",
  "key41": "5owutAZFbZzTcUWhoJWDiFQspmkCJXkVHeKUCotokiz74cJhr3mRQ19zNHH5TZp49HZRXcsAF4EPzuUWqiaDTtdg",
  "key42": "3GfqLsQt1ASNRtcTfhi53R61CL29MbjZTqQnt6RTfqqtiMT8fpKeKw2ZsdGiCbDcZxNh1xMGAdFnGAd3MjTztiMq",
  "key43": "2XumWu6juYux46wnrHmkuVuqtTdjeGKw12ZHNbT2yS1M3gaUxNzZ7Dnx3J4Bv9inGxFNm18BjeEcygCcCY1Wgh87",
  "key44": "5rqezc8pc5kqSbtag96xaGQ1mTunvbVvm1ZwyAwG1Mh6JnNP28TtfinfRfS2R2YZtGx9id7U2ALs3VF4SSSd7tzV",
  "key45": "U4ZVWUFv5pDi9sAajnmUs2TUXS7pugZbYiU9mTw47bVSReXxnaHCqK879GwzXETcyW9e5adLCrr3nGT1LjTUTgT",
  "key46": "3HF5WmV8WSSyjVbbrYtmbCQvNmaSHLsUX7Q41tvTCZuTAyRxAGzQvdiiALgspd2PL3ug8W9edeHVCntMzAMa2k7X"
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
