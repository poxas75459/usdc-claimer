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
    "26o6BQ9u43qapcJkbFCCnRoJ3TjHCDTXA5E4c3R16eeFPhjcuf1bmXjmR4PZkBWdrB49zFayQcKiCZq3xxTrDiYK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J1vGFKHcdgNy7iiHJ7eaLTrbMnqX5N1eFJMuBmfFfMYBs47mVa8qhECQkuxycRhNQ4Nmr4dk1KQyFT3RMk6AAmn",
  "key1": "2Kvvn4GgKECKJjfMABxbCZ5YPKcQWR9dtAhnc136DhTgmG1z4xMYWq1KP9VLe6ZAHysLntme7xiLh5GsizT5viKb",
  "key2": "63Z3s2MCXnYmKmEWJrHWPTAbDiqw4MTARJL1HoDoC11dr5NfAXbnARFRuLFbRSvDnd3nGzZaceBkHKhwmiyQuh6k",
  "key3": "2GobP2PNk5NhmNwYcpotx19GrJHSJdNfiYyyDcaMdvavXB2LVw5uLbZLTWv79Ai8jZYJs4VV9XE5jPB5KXLkQE2y",
  "key4": "3AaMyz2ACju7ScrENDv23b4GNAMvAav6DcJTkrJyNYszC1shewXHpouXVaXdEwnSv4DKgpNix7uaMJK8kpn2znvD",
  "key5": "m4w3jN1YFkQBBBPN8nbQ1aFat5BPuRgNGYhQ4YLK3HZ5iefes51dZAEKZzUhmQVKct7wLXDiwhgUr3FNNCe1VK8",
  "key6": "EvHHpGWmijRpLi3jrmEtcjrPgjjuFHZsVUtvMuqqtVJeMSoDx4RtfeW1n9RXp4ZttV7hUTRKENx1Q9HMxBwvGcx",
  "key7": "2bQXc4Wp85DHNVxX7JVxn1azoihiai4fnmd4CqFanZyVZEw3VVRUL2R7com8zVgKKByGpggbuLMhoK2mQSWWgeHQ",
  "key8": "3FJdDJ2mhM8VQ3aQytfMWrxyMmmWGXwHejttniXeb3vkE3bqeGf7upWCXiFQQkEf6XsH6whw45MyXdUZUdxoGqPt",
  "key9": "21F2APju53XKe8rLsCwBcDZfoNZ3Z5hZTfEaeSjVoSvd7TQkbcSNBhcmV4nUsTvQ3Cv1RV8mXjMjpLWZzauh2NQ9",
  "key10": "2xrbpoN6CZRq4FTZMpbTouX1Ru3UQXcqsAEFUB1FpLbZphkdWKACD394NK2z5m9TircnnqfpQLgdE4pSWLB4yvAd",
  "key11": "3PPrbsS3E5BmmR5qQQCzMG1Q6LucAmxR6dXhcdu8hG1Scp1rKMuXzCKrZsNkyNo8wKyK8CEP8HVjsSfwwMysibez",
  "key12": "FZXiiamvNF1bJM5zXUg1hhoLfKmajcbnonBFyfLxvpZSEHeJamjbKNiero5jbkKfAPp1oNNHKaqZ3ou54BiMi2g",
  "key13": "3iPMuyLsTU8Zo6nfSVjS8B3U4embCdLVctStBcfHgGW2eSRcKZwdJ6psg1RZuuqx4eK5TwP6tbp3KTnSensEaxZs",
  "key14": "2F9jsTwRWAoadtHU4z9JoBVEhtep2PJdh7u9GP2adabwRAB8MKUhkUukMyqJwpY6LM7ywQKi7psnc5wecA3X1pRH",
  "key15": "2zWQzJuFHE5raSQEAJoqjcKae6rtnTxUe3NEjKAGYgcTccPMrqp7EoiNK4LEr6uzKYhEDNc23LHCsez5bpT5aRfX",
  "key16": "4dok9totbTXMkVvMRHxzb8517vBd6V6WnL51SAqdSDWygoFjAc55bQTyJPg2JxPphztugFGgobrTWH4ZPcYqZoPa",
  "key17": "2wV4B9K5z4cvhdEacN6QgaeuUxubSQaHCKE4fMqZY9tYJZBa2hzmDsDbjnPLamZXWkJxmvArrrmUscvmyKkUDjAf",
  "key18": "2zidmHhPmp6HNMY2JvZvDC4RLkS6sSCiTE3R5JBGhxy5wZxVmn9NVBh4PKsbUBC37u68Zf9qF4DKj7CtRUFPnCnz",
  "key19": "2CQGWDuqEGGc9JhZ6Z6c4eR3o1TCC135qi1ruJyGL23brzYVXea76LLrWu6cqktF6kpcQ5PoLn4A4JPJGbP6LehZ",
  "key20": "384NjzX46s24hZddeNJ8n4MeNypqHsC1tJv9zma41YrPymkR96vVu3AptZtLCXpatKSP4hNSEobAgUUz5JJs6VG7",
  "key21": "4YJwsNqiqQzYa57CuwB4F6b4kXhWJSpr5ZbTesqE7Kqy95EJabtZ6vBE6e88vbqspTU3nCPaqxm6QbbvYdSXf2o9",
  "key22": "4cJNHxRhVVb4zJf3AaYCVNbaMefVJ41nazJiQPt4XLk5yjaAtUkdsNCxvYx5ti5y2YBnnYXUjJhzfisbCpjcGd1b",
  "key23": "24ZeR7k51ffDjhuTqTwNs4nt95ZCQh3VaP2QQ4zPTfWfnT1umnY1GpZW5gHuxJFoAq5odFMNj2tdTt2GLMXLWTPm",
  "key24": "ZGwCn3Sx8cmLfER4zMSDmveCySRNbjs6488zaWTLfXKEgwtej8RCtjE2gQJnV4aXp6hKFFfG7ZtiqKBvF7syCtX",
  "key25": "4ff89QvrPR3nnq7TvefNKgGifob9uPpQFYztABCdnZj4b4wMe6ibpLXWLRXQtxRH3Doa985CPJhZmBmhc7CpQtLT",
  "key26": "3DLVSUnaTC8dErQfVv3ob5jrbGWBawrYbjmuT7Q67p6WQz7j1CgaNCsekQYnP1y1EocXHKSuvRTEA9FTQXvaaGhT",
  "key27": "2vA3N3RVtnpvckLViBWeYzC3hSSszJ4CdQ7kwVqMmdR9NiahoBSuz1gB9PB8aAV7LgxbukqPMzNVTWAxVz9NJDZi",
  "key28": "4SS3dAWhu9cSnDfhYwMwpBBBjDCpqMap7e4SbXGSy5pdFaDEWWUwPWYQpTBGuh3cYyjn8jsx8ouRK66T54q1D6kb",
  "key29": "4hTUs3xhe6bXG7rdz3HkbSY4E8swddsyNdrzSTwJSFNfXqoDzgR3wPegzAMUL65Nq9TmGDHGFave5AP1jNwnyvqh",
  "key30": "W9x3bWyC7hvzsERFcNr8WnEDJX5p8yVewJnjevdkEpSXro5cZk2FN2uVXJwptZpsiBWz6TmrBS2q9MedVRuP76F",
  "key31": "4FYW2o1iGzbgr6yv4hZqspVnzqUdsojeePmJzNnrLHxfqHN769nsWXQkQBrbmvDf6DDg8myr8FWBYH9sA71Mp5p6",
  "key32": "5R6ZvUXwatRuvjG8NdAgpkbTcEj4RDkim1HPDRozvPSX6iv64sX7JfwmqGjxgvHgdfyuH2SyP6tRkHu4eYg8ux6Y",
  "key33": "2BYn5kCTaKm3jRrR5RxsFdhMv1HMvxMUG9c6E76eZeDSRQQZKhf4Aw45qRRARhKQikRuJXYK81NDY9AA7rXhem7F",
  "key34": "KpG2agF2jLCNzHC47eytgQt8GEHTscEGxhifJiwL6BJihVS6s9u6QSmLZN5LBbiE8qFpfzheNeUuS3ToGPSV2ny",
  "key35": "4eyvf75TMnfxYnPbQ6SjNBhgWGvrfMyQAM7YfyCZqQA2w3Zq5uJobYDZGGPLbVicRFSpm1t5Saur1m5tqZdGz8EQ",
  "key36": "XWAasTpF7grHisfr5d1GUakkgt5cKtNv9soRFrqwL2CCcNUbM86r7JwTKThXtmUYe76ECweyTM6LqySkotqJtbs",
  "key37": "36sh7n2C2rEgJuu18npV4dH7HUo4XqDxtYoGotXzZ9a5tEBqbXamzPP5xgrAFW6EqrR5JgeUmY9QFkt2DX5JHi8k",
  "key38": "5dCbyFYPuDm1K3FpfqVNPLSVLK9hWzQWdGq73Lw6Uaprz7DBi3Qj8Fy65rSWU8KeqL5y4W3a3SiDkVB4XK9XYe1d",
  "key39": "fPhzxjLwGidrtRVwq1V4W1p8wQKdjcfqTa3KYXccgbQR5rso54hRmQGV1bCsLYpuyyoDr6uMW5iTtjUqTqsJ5KN",
  "key40": "5ZPHP5627x5r5DdpQjnn8QTYuMbJEXuyrCLVefwHQ3mMb7wn2fL15jQ6puxVHNDdWLTJJNn7V2HwvknK3R3qzKt6",
  "key41": "4Ayezei7J81giUrY2gQWxJ2ksTeh3JosPCZ5H6goow5ffBw2hSSRE6h8LkTw9MSr2XCXhm1Gs7CyGcjuemDU4UHf"
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
