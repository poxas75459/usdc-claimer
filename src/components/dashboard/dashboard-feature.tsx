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
    "5qh3WX7ZAnXNyNmnZgwo9EMBq6obahKTzbGxBY13x4DBMcGpnQgjm5CyCK3tw233F18GU5jDz4GyDNLxnEvF3veh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44bZLMqfcmtDTcrmZZi8K2VX9DfBBJqPmeU9gei3NGxDDh4jpwvuS8iBfDmr57U3dpP2uvZDSz3rKMGVNbBzSHoC",
  "key1": "39hDm8nQonWsnNiXyzRVoHFbknRgrSng7M8xrTX8Duw3wA6Nzw83VsrARBS8GNwnEpjVUdsMZXtMx7Ha1SzRzJu7",
  "key2": "49bAvdGwopNupLrNdN1kgNffUnCsnpCTLNHmnqVoY38igdLHCStnikcGHAp9CZVCRXVt4dpMWryNBHZPNUVkmNyJ",
  "key3": "4fSE4wknaFCXUzauLDSWrRF24izyn8T1eLup8UT4S1BPCbAmaumaSW4RkMXCAD4nXuw8RdoBYHG1FdzVg14uWn33",
  "key4": "3saTU98AgXWMuWqtebwbicdkujSVrws2rAB28LYhMBExc7Z8MMumG57wr4ewA7Vt5i7LUGeiSPhKuFzFwHSQARiw",
  "key5": "64Um4sYCbQFoDfwtw4FuTs8CxBAmWoj8DBHwM8NQZ3FnAEaVHhe7MwKEAC7YfUmRVjNKKoFKLMxucZz9yeBEz6vw",
  "key6": "2W6YCcbDwiaFGEPxHPeEoXp2AgQmujMYLLXAUzN8AKyeFkQ43KV94E3fFgPjL163chL4HCwsHnm7SV4EpBoLoS7p",
  "key7": "35iFC6EEu66TWukaxhj8Pq5Q2n5MwNY23GHSAeEoLA8Uw6x8PJCLAxoXY9RyB7QTwv92anpTRGurZXKYqPmvGm6J",
  "key8": "2c6mGmnze3ShqyEcHxEMfH9oKZL2z9bLhxN8ss1w255CqSx2sYsgnWCQxuWVAgirEMFkgZwfzDgikdpFBPsmuqfm",
  "key9": "591MpJEcAvmd8uvxVopAzcoP1qBjE2LHbDzFnmExTwLdmzzx9tcPacYu5SRBh9yBARoXyCscX7k24vJG2c4hKRkw",
  "key10": "4oE8VbNJ7ofp9asRMTEZQmkYmfrEtPH8q5zQWK4n8F3dokiJmg2hJctAZKzR9mGgS9QeZte2gkPPU3tE6DqMdEHG",
  "key11": "4YgTKmKq1TAGGWhYATSy44vLdZ72XMxfVN5mj1fwSxw5Zw2B7NvmnUPhpqzbHw6SyXb7qjbVRyiFrgcvMViNpQNc",
  "key12": "bg7SvyzKxyzxgzwpyUCC6jTK3tqqYayDpyZrpfqnYPYuMoDj4jo63R1hpVBE2NmN5mhEDQEvpn9vYjjEcg3wgLu",
  "key13": "h51mzJJzsiw7QC957ZSf17B5xmqeUNeReB5BDpd9NSrnv53DPCgNxLdXqTdmygwETLvGaZLGAKJGSyNTiiX5Jtg",
  "key14": "2JNFKBxTSAb9MfzECSpJk84WGwAdXLN6rxf7s42aQR4iW8c6E1zJEFzTfRbvXo7QCTiHusJKuGgq5vtFGP4RL5Bk",
  "key15": "53U2wN5X2s4mqg3UPvCmmr6oCkPT8pqyDcGZRk2v2VLNNmVaRVaBvmuPEzprXJViwqukmJj8j1iDMWhGTQjVFMwx",
  "key16": "2z6xdvJRjUnzLK1166dETQV4HSk3V6iokTskpuENbyyEo5u7FG654n1dq5aKqDW6gf37Xg7Rtx7UoMCSf6xHYncM",
  "key17": "2tmtbHtZMVnwtQUKmPQquUGqMfhNkb5vebcvdHjfuUf2mRRMuEFuP2qdx5fYaLksQiEAmscvRm9SYhCnbB86eUen",
  "key18": "4dH5tsvtEDGGnHde28p6UGZs5J7payiMStntHPF4rEbRXRMXN5HdwiweoBnSzaz5uvLKiJudZGZ1y7xGWjfU7JZk",
  "key19": "3v26wgz3dt2ppfxtj9yj4zwYQ9ML4fQVcvLguyVf9xRcjQrtDFkiFQ5eYKhYMjoTB3KaV451sfxkUS4mGmdunL8j",
  "key20": "2mjnz2D8q8ZK6eJ5Jc9AjcEwP7P1tcFPhBBg4kRYnmgUjj392XD4SxY9ubvS74jQnBKGeZ1rrqKbpTv914ojLrkr",
  "key21": "5aRxsh7ckZNgJEEyriRP29nUwYykj6FTH3m2g2ymKqMPHkRg8qWzoLhUVAnzjArEPd4zn7Q147BzzFn259XJTzx5",
  "key22": "5Gh5uuBh9JNuxhzAizdyRkzpiJ9SmeYZoGsamHvNfVPfFTz6eSxvyta6qNB9me3qAcZmTiBBSEesmUf6gUhPYFRP",
  "key23": "4Bb9oxaRZUUyiynitFgJ8LUZTQK1BiWwz4L9QPr4B3BMUpyhw7nu6uKoqV25byXC8KbH4TBcPCGz7yF8L5VFfXZ1",
  "key24": "3rtfGtN7zoFyDtactaA4ZZS9AsNzKNVFqjB6zzuehoeAXqTr6mXq24PHPgko7jqW4tuAsknrjHDtEaQdL6968G6r",
  "key25": "34L118Wi71aUFLs2LeeThdNC9QfVcnXkg3TPwpxczQThPtQXUY7yFYgBMs7vAWwb3dtKafrULw56whxzJ5nvEvWd",
  "key26": "v7pcG2SxR4bZXydX2dhwaznKjyuJgtYKf2USYd6CrFE1K7pHToye7C2P34GkzkggHCzfd6G5qjmCod7UBLxZE7E",
  "key27": "2XfG9UWxf3pzAnb73iXynKf6PGEyUMhzvus1vp8dpEAk5oboxTW7FggiyWPPy7igy3zFKFVThqKXiQjmXGercq6i",
  "key28": "2pTAKm6MKG9GpDF47MYuZ4zxUBfXAWDGSNLEXX3PTBi4aa3XPVV97CSaTfAcU8rMA8eGeeY4qHBwRRzLFyirSMyZ",
  "key29": "QCk321EjgiunvYezWyWiJaviD2RaiW5RAnkWbG961BskBcDwDFS5Q5xwMosB3GxHncgU2aTDsTjR1NFxu2hnR3F",
  "key30": "4p8C5XzazAWW7J1nmRiNFLEQL1NCEwtVnce918aKHtHNM8PxwXrSxmGkupMr8dA8meyDBs7i7s1NDkZFvRacTP5w",
  "key31": "3dN7NL4H5hXsiFm1z3QEp2EdxmcoE8Xa3m3u4WoXUgitcvX26o5KTXz3equ5BPJojWWm9iByNrRxHA7DYm9qKqzs",
  "key32": "6333xcAEBLk1HdyfefkXwgfvpxKRdXyWbUwYGvZoTJiRgnPBuufxnoTHkgNPS6hTMhuF7XJzabaWnAEEdq5h2aCU",
  "key33": "647mfRbndTN13bUyNrE8bKzQ4qyyjpmeeoAVaCUdgk9aiihGHY75Pb9EN9HR3YmJizCG1kQdDTNv5aowacNP8BTH",
  "key34": "4BXodV3EPPkMyzZcEycKx2ko3WzqvQMsFh4aQ9v5oiufkXkadRq6cpdrTGeZVE9cawKghWLcyDQYjSic8VvdJDhU",
  "key35": "31h975wDVdEuofSoW4xQw5tqCEdPfb8TTFxF2m73S6xasTZxmnE4vaeda4TT9JMq6Nz1fw5ajykCNrW6o4CYFdoL",
  "key36": "VvASsVDrH3J1b9hWCrLt9cHDvPKSx2uwJ4R1euvueW1cYWKKK11awFbyoAXLEXgucNbtSa5WxsSPKUdq6ykF8ov",
  "key37": "3Si5awyxTc446JwErHDEHCHXLEXDaEZK1mDNbPAHwZcEd3tau5nZS5frbMpRKL4t5seff8r7jovFLB1Jss8yVgQX",
  "key38": "3v1zTiZx5L2SGKEcFnn3wt9LMNGrVeozzwFs6Bje4uSmNPjhpnYVvaFBkyMbMjeku47RDFqtBaS1PQpVeYarVX7b"
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
