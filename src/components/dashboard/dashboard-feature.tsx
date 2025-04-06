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
    "46diapUuFSeEay22Wg9MEghvFEEcaysSD1TsMHoo8gZJouoBw9JpyDCPSUMBae276WbJyBPUqEtedLMt7dWyyLaS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LSphc1JWz9SjbPkxCW3oip4ujKd9MBaAtEjrD8raNFGda7T5E2UufFUgi5ASLdJvwVHDkvLJL6nbvUzuwtp2sF6",
  "key1": "2Hda96EMFAwBkQor2ZvMPw2pFD3FPQNCBR8QxxsaHxnRe4t4nHgfvPA5p4kmyrXEDe3eecR4JFvMMq3GcJcPuPiV",
  "key2": "5wJBwJDqMVsfW2uUS5PrHdrK7bTApNjXi1DJAH4E8NpMGbt5FtCgzv7ELA4w7MRPtMJ3Mx2q7KVomJcqYEWn6bTs",
  "key3": "faPmAmm9CBoazJJcofTLmwNvYFjT5b9zHXBxbLBi4dfTHF5WgPREXxTqJrU8cbhLEeZsmwUP44nRvMVmTUEyWL3",
  "key4": "2GrSUfGYBofKww31inc4TF3wpqhmXDD4CbZkk3m5Q9yp3RY6GZKJ17VAgz8pgrab4NpzGeFaJwZrjrVzz13TErX8",
  "key5": "5LW8SSo3zrhGQfTgoad4DtP3ESeUFxwL2xcUTm9wupJ7oWEXrDqej2T6J8xL8XiJsF9SpLqMN22s31YBCsqj1DCt",
  "key6": "3PbwBCHb8xcHPEqe5XX67Gb9apRrcskoQt1pkAXxN7v1ArbTMEuHjdUUFvgU5qTED9opChFz2rPfp3HWwYQYBmAr",
  "key7": "3XzqXwNZ4RzbEQUyaxRrh46KMfBxYWQp1N2gGXX2fkgjqytXXCYCn8rpu9D8m4wKcYvMM4QxZ3EbTETkFkq3v7A1",
  "key8": "5p9tLxgYhRsizA9hWKxLAVRAiA4LmgzMwLYWZ1v3gQS2Y6jRrkJgFjxLeUFjbkbv4kQKhp73qF9f9tmrBfHwmhbZ",
  "key9": "2CkBbDFqfrepSkpwMrsS2FHKTJhwE8e6h33xW8uNksin8uGre6vq63Ec1oCEmQx8tKVP7JaUkcKRoag3gBYMEVZ3",
  "key10": "5PkSjYho3xWoBo2oUa1BSJLcJoqikSNfwqifxmKJQPbE7e1cc4wj96UNnDtbCXW8QppNeZFoWdFqt5j3A51bNdqM",
  "key11": "4PJ9z93bSRHN1gXnCT2TswL38JRrBmDwKVRueWTp2JcAofAToqELv96nJVq1HSH6BE1C1pp7UCFuBWsbPjKxm54H",
  "key12": "4kjF4BhzHYGZjouTNxfgf2yhk7Rpm7t3iYXmoR3pN5h4BZWaAb8sN5FyH1mJ99fvAM9osb8FsAW85oN8uprnGSno",
  "key13": "2X1x9NNWvB1RT851Lk5grku5SHPswrFeFUgwBMaAUECgyiwhu3phqeFHCxwymfdr5EooakGx4RC7uCDZBTbcxHZ",
  "key14": "3qXEksQdPp9TkuTNrtTQ13PdtChJrssSwhuw69j4SeqTEgTMRJCHanQPA3CMMwRuWqumkSQnQ3jafXu5tTKXJxLM",
  "key15": "3bXnpmJQrVWYRwboavj4dLVFWAF19UvFZRtkDEZXRxYm2R4XR32z9pA4u4kR7FE5NCHVhFkKG11bnNBMz7tJwayM",
  "key16": "5T2H8ScyYGLQpUh2EoUdtyRdA9zpRDANsLeyp27WqpjmqCrTjDjUhiBJgvQt3w3kMn4UVdZ7sHqaWc6JvHHUATDh",
  "key17": "4dxb7kVezU9XqbHSoGZRqxMfvTUceUdmGjTKiTGR2au9y5HEtFog7Cx7ohGpQYLUeowSDvVsS9kczrxW1RAdBS8G",
  "key18": "4v22W8GHJZWRmLPCzCwX9iMkX3rvQKpbE926GyTwtr1NmcDmK1dLhfiFNz9LsYuPHB713AMGYKcuRd552TBDaUik",
  "key19": "3DRvcyj9LHjFYhX3geH8GtPFi2xcUaxgWtoEnf4CNFvJ7STaPhytkL9Nz7otEuYpHaGAR5nWj5oEaJwZCoSUAoTk",
  "key20": "3orRH6P54TAjf7Ytn7XezLq9DarjT3ZBZERcMW8qe4bLZu45x8bfUPjd6ZtD4MNYipmtfKUFJwKanCa3qXC9TaPA",
  "key21": "5DtLyNSimDtKu947DtPpNUPEEFNMxgiGzGxZYJg7HC1eZBSJwwd94LswmbrdX39Cpe4KV87QeeJheFdEoot7ysVp",
  "key22": "2Ahkfin53Ab7jkh1FDY7TibE8cnMxMz7bRUuKZ3FQShG13KjKNSbqEjLWT74Dox1wgcPDpVV9cASNcst4D2jpkbS",
  "key23": "4wgJvJKrirFUhAFPQG8N37JxeF8yrsv2TZg62j2cnHDiZxuc9DeDDyAkRnzASG57AHDf1wei6bsH1BD7wxcNwpZE",
  "key24": "2GC9K3WybvqJ513DNhP351guUQCH4cnF3g3ECFNR3AF1LQrBCM7PQ2QQNrHKwJNCEgH7ao42uMywvEWVEojkjE4R",
  "key25": "4691eKwDRBgh1z6ej32hsjiscTPQEb781UHpdT2jb5yKmDgb2eLtYkpLBqKUafb8qtoqr4DWsv2PBi1YBHwH6dS5",
  "key26": "nDuxkFexnriEUMCN2UUf1MvTe66SsyMfbcFGWqwVbAD9KraQH1yAPpTQoQhw8kwHffVBZsBMBtg7s5NZ6hKAXeq",
  "key27": "4az8efbV4jrhNiirnBnN49NGgS1rotirbwSDQeueajpvwKzF8p27mhg4uUkyMZvUf1jC8Ucaqq4k4mvU7i8zRjQz",
  "key28": "po5yzwqzFhiQJH1BJ7NUvnCw8SmjYjwr5ubMpL4a2u8bQAbVMCTJbXqsa1AFefYKAceA5FsLmjveNq7ygQNqX49",
  "key29": "4tx4wLKqFJDJT7AbrtH75M3pYNgiBCCGk5Vc4xWe4g34DxEgaKS7kqjuQKds4jc9EGNk9usTpfxDTrsaNtFjSnJa",
  "key30": "589VVsagmxfcjEU3mtjdvELogU7DHnPN6pVrdH5d3HeqvutjP5DXgAi2WzocT1jQBTNZyK8mBhPyEAwWVZTNQNND",
  "key31": "5Fsiw7q5HmSUzbYgGgQSbwUV56HevME7bZLiaZXYzVWfuiAHFkbSDoWM3xdqr9uUSpsK2AX4zC3dnnuPeVQRaphh",
  "key32": "4GwzqjJSoAkWam6jaPtSq1PQ32PihG3naECzJFPDpMLQedY18DBVePhMTp4gqG2qh9GfTV93g8pNkB3pziAXshgt",
  "key33": "5SWb5JMS2bEkFvDXncwuQ9ckwWwrv6mC5cjM85W2q2ZDpd2xk3JKhYXTbCyrBDU2iQQqUe8GiB2m9SFuhYtTtqEN",
  "key34": "3c4haNmKPgNNXoCcchdg7LLsqmmjjDRZ3yVFeKZcUwzVWbGUMGr976zEncaiSuEbgAaZHK4U1YGtNqjxct73nrnH",
  "key35": "UEHuHkwUqZPBp2YCGSSmJssVD2db3u275pDFoM6kTKFjCYi6euVw7KY4emWbdQuNrWs7RCeCiWu4iQySzumWEZD",
  "key36": "3ZWQVKsB2384crydMhun7u49cgs8HMBUH2p5DqzbtqKt7oGMSGUbgYJ16h7F85VGahkpo8gs1BB5Y23EV9iKt9LV",
  "key37": "2AT84rVWkGuLLoBxLxGydZCDHy5yAQLR3ca235BH2nFGWnuLNf6KaeK2hFykWoGSu3V9ZRu2zx3b7TsmE1XCxHkg",
  "key38": "277iyegrSa352Xmk6dh6nnWwejiK4pV1x4MgjcVkFGWL4quTQvbJz51b9BcpQT8VD4pZBK2Uvjk6QAMSBgoAyg4X",
  "key39": "3XgtYn5JXDe1iURoWwXA1D1yiGqdKoPqXYScaj5AGyuvCvRktFghGoH2iezBmJM1XDc9Q8d7U76Uav3eEcxdikPW",
  "key40": "4x67FKNkmMXQrNu6aT78U11uNvz9fBEBQknc5tiew3Ft5abPGrp6tMKpGtqSWHyrVaSMvbxicrJWocwWSNEdYkbM"
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
