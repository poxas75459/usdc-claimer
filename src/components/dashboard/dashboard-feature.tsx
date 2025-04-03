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
    "W2Ymsr2iWMBD4QBinCT39ex1EcaCvHhCQYe4zmtK6TRtASKKT1bAx3kJhW3aM5FN19nWr2Pq27WJhwJxktNZg4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uQdbvx3UacoZHv5cunmdbZ7vxPUEZkwEQNo3JVJYgBgxZ98UVMpG1YMaQ7WRDqmfegYHyYM5YpBPUyjBjBT3YYC",
  "key1": "47frocYVcakowDGrcZJAm3WXmCK4geqiyMdMn5ShYPNFjf8PKkEUs9c2zmcE7FinAX3jrMFamyMURRuFhd1DByrm",
  "key2": "T4xMQzaSdb92bSJavH6Up1uauLd72D3BrZS3YLaZr5oD9tAPKPJxCxX4TDpS6KrH5wBxQan5QmcxbqoRNXY5oL2",
  "key3": "2Mf8oa1R3vsWGTFYwA2hDkTGDFWPRs3iofpPsb4zoKwyU68JV8n9oeBK25eAeSCdryGgJYZHtyBc3DtkxjD4vV5D",
  "key4": "2kHT1cmnK8WSwQBzxnt9G8SpH2hRhBGjNEFY7tD1vAG237g3TFqTUzTGDeXbDFzN4NNzArLDWoN7kZ4bZEsZjBAm",
  "key5": "8STfoRjfAKSQJNXQTrhdXhot6LYf9peuJsz81zN2tjCGhJh6LCxGnAFtCp6RK38bP4co8d3XrhLXeuQbQJ6UviN",
  "key6": "83kX9s6ipsnaqJjaghNzitsxRRCKtmhtdF3jxP8oX9r9bPHk2GzFmZzL78rW1KUxSXsnnqp2MuiCXaCW2Zi6bpu",
  "key7": "4JYxtKwAghrQUfqsWEY8xRWymgmbtHBUJove1hapXN2JZZGA1uXfMndyQPbRCcG9gE6t9FuNXkPRTUAjj3PrUs2o",
  "key8": "4LY1YYukeQB5Lzz1b1H7zsEdn4WTm1U875aaADg5eEn3WAgj5HKdNDK5es7CwYkxWVjhsvxkiYz17EKhjPqcprqZ",
  "key9": "4x5Ed2LNHZRoRhW17PeePdhgeYtxbu46xkS3zvAkykzP3x6JtMG3j9sw7fhsxPpTJXQPYfTsubpbbTK1HWx5GBz4",
  "key10": "3X2fLCAaCfsWgPmyGSoPwgz94jBdAiCnAyogwhAGRp74psav8qQtBZmgNsJuSeP1Wvr5ypj4oUgUzELrqYQADYZZ",
  "key11": "5CXadXLbSGuDhsig8RkNFcYwcGmFcVEDt3Cmz3ph8QM5v3PmspCLZqw18xCzYjPVzDgrKHSQ6rZof4Kvuq6bB7WY",
  "key12": "3jKXTvQL9UJ8VjbpGtN1Gbzdzyf3PSSDSfwB2YB3veFj57zwHV2D6sJLSndrBL7xk1WWaFZhBKL9LSjNwuTiGrQt",
  "key13": "2jVExsxdfkQvXUctL4ptzSzJbDcE2vPgA3iJqjBiQe3g5QjBDHbLBeAF6MPQmQQHjkCvQvLkh3yNhFhmrbXZJ47o",
  "key14": "UjP3r1cdkr8UCtQDUNX747TSBJ1tnFqNH9fAcDEXKzZ4c43s2EidTi8sndk1g8YWTjHHg8cgwxNqbEpd4eJ2M8K",
  "key15": "5RChzbrUSpKZCBUe6PTegA1euCBkmjKUhwE5vQizYAHQkVmPJiQZu4j32rExB8XtE8nXqc2HunUXgTrakCzdnVJH",
  "key16": "31TiFboqxe19yDaLwctv95FEEBjoXxSbR9HrQHYKdjFVEWG4GZEAsEYRFJCrZVDfbhggdNZVNaZKoFxiPWY7tUzE",
  "key17": "2MgxkZAEXbrm1fLRyZXjHame4WzVWK7djxSLggQHn66gtmhrTz1sozNngPaehatcpRYF4uVektzXffiQ2DFxj87z",
  "key18": "3pvexpJgBtE1tJsiVMG4MGBPjUKZPGLiNNNbRwQxEUYErH6JCqjzJ37Gn33kso8G26ei8LJksX8jsSkvCZL7QeUL",
  "key19": "DEjhBPLtXsVhKD1d4Qg6vrNHVRDS1NJfoJ6YaMqtvsXqGrDQH6P2JZNnxEqGNw7wogrFtFVQf8S524vHQzcSLv7",
  "key20": "3CBat4EjcBZwGhvzEx6FyXqjv8RvkgKFUwG7FC6vxrHwa7GDQxL3hqw8xcezCcWcuXiSNSEUR27nqA63GbVSRyjr",
  "key21": "4DJ68xy5cr9v6cFDny5ihEhewMcT3tyPqMjqJixinCFRvsvcniSvFrJ4XyY561o4YXkArhc548PtqsPkRhsxEUbU",
  "key22": "5J67PC8x1idtsqZqiquxoYeQwxLYdVTkjh7SYBruXdfHKNmrBgfpirRmzvRZp1kgsBFkND7UXYrJdKPis8akAnd6",
  "key23": "3QvqvAEcVgPt6x9HCnEcXsptTg7dQqHgVd1xwcnxhsYrufGXt8fuuTnwq5siVaHBu7zSNsyH9g3pqCLzN9xBXzfb",
  "key24": "JjuH3ozQ1EM5hNeAqN2PsJnu5KK8cdpbv4kPTXJZaUKppLByjeKaKQ6HQBzW15x1K4RmXciyxrTbEfNtmSyX89E",
  "key25": "2tEtxAD8oB9pFo3Zu8LxFBEixxbc7ofwaUtaeANdy9fXGAh5KT57mRWTbiNwJUJResSh6S8MtxaafyAbJCJWkDvx",
  "key26": "3vmtN6DwX5erAp7bLugoxDUBzbtJdB5eSHS5ERuUKTXqzQfnGBvqvYE2ss72EekojdRqEgfgNHym18maBLvtzjzw",
  "key27": "35BaJ68VATP2dfNxjwTFmZcNA4v915JNPEBpKFu4bEXLrCGFEu9iAfHwqp3ZdEK3TiX1iCs3oz4M2HhD6ZGgpvpY",
  "key28": "2fiHu8mFu7oqJow8Yt2pZCgujrs318L2Bq1Uz8x1vthe9oMCdfrsXGrMMatAxo4MsDxi1pihnaSd7Q1FMGhvGbKS",
  "key29": "4dSV8WrNVW6Yy1KuAjiRZ7fsn5f9rmGokNaxtpyHY43sztEzeHF14CFY6mv7vSd9r7h87oQ5BWwunYgHofsUWMNt",
  "key30": "2U4zNTj7TsWh7z6Y25td6TM7KbbsDw3FjWNx32DUhUy3HHUoVQXoYbiEvUVgM7fVvpR7BBWRfSuSoZGPCeyt4dmz",
  "key31": "3AF7J3hqq45pELsB7nkeioQthrT6phnW28fZAdKFpUD5yuL3LKFDRtse9zKynf4KHhVHrAB99peHbLkdmBAmk5NM",
  "key32": "SZpuBEam77yd56t98Y8m4j2yb4gcYbHHefbegrGWfs7MEhxugeTBrEd64DSM12ipYHEGnBJF4xiRWxdAMMXZxsk",
  "key33": "5gt9itzu1JNeEq9GWEtT6vkNAu6wG3KezxNdKMwnFUvuetWZsXwPjXXWZc5X3EGBa53Eo4Jju2NWtz58mbx6hXzs",
  "key34": "5RvFAUcWGJckqtA5K1DPwnNtGDxWKVbUnNHU1hyFLd9qqVPcYU3CEiVn6bLtQgDDb4ZmhrGpfpfaJwyZAq6EaDju",
  "key35": "cLdSyYdVmYRTjzVLLMXdv6YyNaFG5wRZHUPr67Tfz4QcbFuKqfvEL5AWc5X4SAxd38LERQLeY9YfoqgQLEgyuqu",
  "key36": "5brWQwBvncqYCLXSy2T6xXX8jwevm4JrtQgd6Hm2HxkbgGpbbdoBbXE7tunZpj4xhUL7q89urGHeR54q39mxZq4S",
  "key37": "5WnzWWnvjDGxwbRPHYvG5EEajVBvna7pGcgsMKg4W99MK9XgQZA3TLyc65kj6KLBUd6LFUPRkUirkpL4TGE4r4PA",
  "key38": "3y7t4qdbw4Unmj3vamg7pUFfDozY4QZwSLG7chAw4n2PTd4Wdjnuud1sAdUVDucJdjLikAFoVjHxw8KiM93uv1oE",
  "key39": "3sNXrt6xnH8G43cJoo1whRZGsPn6DhhnXGSDbvByYn3Sj4418JfuSDCDt6UEHgmVvnDFd6t7WP9yLf5opEeL6UEk",
  "key40": "2drHodyaTY2TP3wqfAhqx4qFRkxVegTuua5WGpaTatu8Sga6F8dmKsMoQtawR6KP1x1dSiGPYkd9jgcbTkykY8Wr"
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
