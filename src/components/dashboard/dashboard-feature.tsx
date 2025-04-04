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
    "22nTFP4EGTw57CFpwz6qeqosPBstK5xKTVMxvSSs5NjdpEW3gWUqgatgnhfyUs6rnbr3rDhHFWhF4gmomxLfchCb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RnS3eHGUbui83p3kCqbmTaHkKKE34unVjRpig5UAHpg2J5mXwYkABmGMJCnGpqijGCPnD5zgVRqEnQkYauGz4RS",
  "key1": "47eqHtgHMM3ajNE5oi5p5uMiyogjhhiHHWSYrAjkJJotzJKBhhWhvFZz5QdzSjxNtXAHKQ9dDs8demTiq7qLeK6Y",
  "key2": "4peFWNAXoBdCpXGW5N6HP6tXV7M2JaM4x6NLUrfKdcoHyD9ihj5ALjRjgLKPFCnW4ygG4zQEUa2H5Tjw8FrkLvjV",
  "key3": "3FZoLWDdbTGwWfC19HsUwhULLqFU45L4QNp91ci44v7VyxevzPLrJmgFwpxRPnQvKYjnac4WPNSzcBNy3rLURmWC",
  "key4": "d7J8zxwJPEwKenfmh7toPQBBVUjCJsiYja5nfnY8516m3Ettjuar4fLT11gZGXmShaZp2TXH7w11Ay7EHxc3k1K",
  "key5": "59riqfoBtUxvmWsAsSTqKS9p1N8fpho5o5MYXfZqXGnpT2KDXR6iVs1AqyRBMb2XWH2QwcTFPqgLoxAHC9YY2fyS",
  "key6": "4nrrMhWYYteyuMhoYAba44eSdzEH745jGcyeRJXtXLGBwcSmwdicTegxPjSYNg23yMfR43Jy9YHVrsWQFNpLBagJ",
  "key7": "5AnnNJxbBsn8FQwpFK27HBsk8NKb8WmniB3sRp69hcy2xCJCE1hSv7yXpvp3qBn77rrQK3uVTGPyJJmnxjZo7qWa",
  "key8": "3JGT37GAP78vCfyJ9oGPihZReJcTyaLssLATUPyCJ4kVe5imnPSVV1zCFqMbWsmJSKLHGWp5aWYsbDpbTtmWAh9V",
  "key9": "4r1haifj3CrmQnLbio5fEhsoDs2iMfJuv9RfseZRwWg95yXY12kNvNV4x9RvwZme2Lyj8wACTuavyigtjc8Gz4JV",
  "key10": "3Na6x2mfFgG9ViVdcAD5DnrmmEBT1HcC8do1JsDqJjp9wamwRi7VDGGPog3J7EBAsyzQdKTope52LoQkhaG13oH7",
  "key11": "3mkTBtFG42xwqfzgx3DwroLKvjxWKEkVzskknT3JxuZMNNxZihg9KWQFpEPH51WVMXtFHYZ8nARBcgSMxU2v3bwy",
  "key12": "2qjNmCMJuYD992u2b5QMdRpnihsyJJgtE6Bp9qeLnh9sd18ExMGPznPTXCXnDeX8VzPCWh72cEtAeuuZYbFDNwYQ",
  "key13": "3FnSFf86ug9i354kipf5FdFkpYU6Vo3A2KrdCHfK9rN16xEssihJNAsHpbKZvfkmtLruv5KVRLLkqrevezPXDtRS",
  "key14": "25Uo2ddxd8Mqx9VGPfqNb948ihRT5JDJgdjo6xtBxCkcXDRvC9vnHLQdMTAdswMRvUkWMoQGJCUrdkwJmiRrkeff",
  "key15": "61sg3GA5JAg1zNUhCAZPUWvKdgaB4REEebKbzBfbJQKsJc6noFYf4nHP3N9Z6e22zvGxZxorqcb51nQW9Qbk8QA4",
  "key16": "5JRDrc2eD18wGjCKiEEuJCuTpWk53YNuJut82QHsA5dptTjgqiz8hSnX7rW2HosK3y8tE7v9wXVshh4tHUnPdVrC",
  "key17": "2a2NbXpKkPP24rocSRwktYc73TL97r4F8LoLLq24EB7VazHxe69NDz1oJCidkbQwvhr14WBBnGKitzxBnGKjhpir",
  "key18": "5DA3YeF8Rmg2yXxnyEdZs9e4CEftSarwnd2sKaWPgtvK2RhLeGALdjNBCEk6Z1CTqmvENEyfDAh5MN3pmZELBF4C",
  "key19": "2rE7R3B2XPLVycRxg1BLcZ3iGkUxd5meonQDgJwqKEu9h4TJUc4CNikhRHFxSuPjN6a2k7C7S4ovwHdytRiKcRbW",
  "key20": "MMStLLMVY6aoH3LPVwdKym6eR8qiA49yFUKpmrQzQwyBqG3dAFbq1e21zwbsYqCvxKAzEmE5s8SaGxRuubpnnjt",
  "key21": "4oCtx7LmrRVvMAnMW4Eyv6SrRs6zB2HucWLHLGwwkneFofKvQJYvqD4qwbUBkGC8RBcL9EAsmzeaDM7YfpfqhMhQ",
  "key22": "33E3Dkk56WPTGtqgLHqJ5c7rhHHbZ15kMJxiTSpzWuf9YvQjqTgBjr4rKDCnwmPHq3mL9vGhSEjYMyuMYXn4XUHA",
  "key23": "4EQhdiUztU5JdCMcUPRdhmfEEbnsk73gP9RsAAe1NuXYqhvAxVUaePyoTR5rJ3uVx6LESpEqzVjDWXEsMVt9im4M",
  "key24": "4MgaAPatCRgFLa1FgsajeJ2PMhkzqNWeHwY4pCoehu8Kt5HEBNdfFqmURHHEhL66XqK2Zy6DMu91Fq4WzxV9D8vA",
  "key25": "L4GHS3PAMWWErtL2gzr7DCuY5PQ1GNdPkvN1SETxCGLPfX5oHMVzrwHrkRMP16Ssq3GJtjx2UxBNqTGW8bdbBmK",
  "key26": "4a7G4nsZLMYQ2c5k6j7Rjf3HTBE7GHNEKht4R7X7zeYwf4L62jKgp3d21T7uNfgBzGnN7TZ5paoRD9dueYBhPfcV",
  "key27": "4f1Z99JMtekf2n2FHv4UbJYPvrFqNyH6ycgreGyPimBukdTNDJNaGaCbfTJcM7A5NN2xrzB77gk3ufTuVLp7bySC",
  "key28": "4pbbkrddND67iRoABaYSwDeCatDPCTHTJaSnUjzz7pmyefioGwVUh7uLduigww9LwNbj4PgfUPU4mG1VN8N8J1Hp",
  "key29": "33K3Qa4DUMnmseMmkNZV8TQta6Rwf2msXQqpD5fC37XakXgcFCuxpCZ6Xy9GveMQ3RwMh4NpwsNZZDVvCkbksaax",
  "key30": "B4G6shWevCrGHGCCgjH7oo79NdNbjivm92ShxfFY77ydFpgTz4D4x7tzf7v2Mnrhor1x1fdBy8aJgq4zLN4w6Gn",
  "key31": "5MeEGrHpZR6bgX6iiAGD6VTQWN2xEmS6rWKd6jtRueCNMbP5EBVrLCciSd789ATr8wFuAUUVBzHd5rG1nVRaBRXH",
  "key32": "5GsEm6mJe28daseUPAou5Zv9wio3KKcmTD4uwbDxBTcZBpp3CB4i5NwLGQbHrcnHbjzJS5S6oksHDpt3aSyQfbZK",
  "key33": "3wCR2mgw6nXVVLzL7KBu9jHDar3yc8R7wtaE7FKnvj1f7StQYRLJSNuTnv67z6Rcpx3nK9seH8RotSa4mBMPzaof",
  "key34": "41L5uzKRUEAiYNZHpAf1zyULDiARPdvva3W2aXCHtD8nusyHiySoMgy3VY6heg6HBx9WxpN6crHKATawNgj24fdZ",
  "key35": "4d4BPYcPv2vhvu4iuUwEQdQ4eTYAiVdAUqQZrcUdFMFtDqxtqQrhgFM5Fwuz4M5KoD5TQ4JN1pvJkwsN8qfC1hJA",
  "key36": "d3mXJxJ385cSuhfMWQ3FG6u5wEbVvST3Nrdekiwu1PFfJ6xwF2Cfu9Hcyy4o48aPGwF3fGSQgd4iiqGp3c9thB1",
  "key37": "e9moCnFyVuMsMpfQ5x46aEzJU2Zz6rLVpV6QKGMJFuCEJEwHXyMofQwTu7ireY4VfEWL5cHAxbYfawNs9RmbG6u",
  "key38": "654NJQ4jy1xgKEArGt4ya4Q3QoxekSFX4tz6HEXegXubWT9f3A3LXr34xHfGoZEspS7PDEhPg9TLsNMub7KH897L",
  "key39": "2AF72fUqRh6H8usK9UUzDaqwWkV5PyizYiX1BiJbnZsKPUPmDr8PcH4YhSCMeKbWtGCh2YfnW52MwMshxi6r9xvA",
  "key40": "4pxjq3fF4ohy2twMJ3nqT8xZA7PdTvs3vgYmZxGRCBe1oftm5R59edFHpQoxvkXTsAiLELwpsCnwTq8FiH7VzNZM"
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
