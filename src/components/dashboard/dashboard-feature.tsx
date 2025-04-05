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
    "j29eaBEiuziTLQBbCA9P2pCQK6zAS4u1WdPLfvRkeEQmRC4LNUhFaSNRTZhBCtAVbtSTRVVp5uGYTdmNNLfuZf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uhM6ZkQ8vbGH3qKzRuRy39rXyQZgbxPU4NMbx4ru1aGWtENYniAbauT8xj8KoxBcyKkxJ11DFGUsVudWe3niagP",
  "key1": "2a4PZFGxCM4jZZj7q482u8um8kipAaGUXbqiMP3KPzqtgVE9CdU2opLPYpjJbVgxjsigC9dpRRKgNm2NfnSLiVYY",
  "key2": "4ziRFrDopqpnJPQoRPwTkC8PtQbJVrUA4hWoafkeWEfGbZAvZ7nBrn35oorW1QiktcRYaPaPcgDHdKhJBZHfPnLx",
  "key3": "5ujUzgajuwYLDqWudEhhXRA7j3CD8EHVbXa2k6PwVHLzPhJsLpCpDkkjXztfRDFrgGEEvNEXc2y4rwkJdM2sgzxk",
  "key4": "288S1BEUz1uAua6UzjVtfC5VQQvAM9AugPTKRGQ1nrxYoxsT22V55AEnttwfEYCVk3VmmevawegUyK3TDL2KFsy1",
  "key5": "5zNEjo3JBMhP6bugLCbRmYxMMGzNasZMh6vN3Zx9mTchhoFgS6dpCECFzN8xNwWGq1zHZT4WqhvBwxDu4FNfeLZH",
  "key6": "51iTTGFA51JrZ6xxCs2CNqe5zDd8yfr539jU65U2wbDE1qc9cDmUAV5kS36b52bAyQbHg7opEPRYnRr9xYMUUNrB",
  "key7": "3LkdaHUmEcptnqdspQirmZwSYzS2UzMPqpxuH9EkxdRaxA6Nk6SeifasXJomAZiDvJ4arfqjPd6aTebChrhkiz6j",
  "key8": "5vtK3wDCYG2WtgwWdvv27yYMYErBjti95X8DwH4ihgGLAXiYiQJamsgsziba93ChwNgiNTndaEZ95bG7ng5WE3tX",
  "key9": "XoBEGGrg2QtE7yYS9LJL8C6MLHx8FAt1kLEhzHkavaw5adMxfrVAzh1CTxWhjFJKrnkbsChhjGH52Q5yXETfKwt",
  "key10": "5bhs7Xdz7iEZZZDUnWGn4f7SiZosazjncDBRcevBdwEV3gGrgZYzYDHczWkfptTWsk8JTpJ95cWf1nSZKdm5X56e",
  "key11": "2wwuDq1GGVxgekbxJjq56CzdzWzaYFnazgRiFcFWxFYH8iyCW5WuqztPhCfDn4ySpCXkQTF7oBp6Q26Ks3MHnJ3r",
  "key12": "2x4QNgGRZbUoVQrVMTtU7wM5qSEaoVnRYGcMrkN6ZeHwzturFvCyukq6N7ANVx35m7Rftb7YQvgLNm52FSfwAMYk",
  "key13": "vqStV54vApkEA8gnBrsyY8DUkpznaNEDh2A6KwGCYoGfUXi6Yn329HhWHnWwDTWmsR8b2H5QnFLGMhNnRb4paMV",
  "key14": "44j9MCQz4mP9tSNh5N1BZkfgbEA5XY1TdjTKnyRst8i7bXuVRtDeeGh4opwTuC1L9AkJBpit9JdkDgG6zHLcv1cJ",
  "key15": "3YGfGWfn7caXnEdATuAwjau65yBFCyMquEs12GCZakSHZivs32wy5kLJ6EKs9AhDYjqQ7rfNqoTgTvQjzTtkpL6P",
  "key16": "HU63jX4spChB8aBKizANRMkmFMPfVniWVdVLLBohUhpkUZLwFGvJuV25CS3vPdpYjBtUh8b3HjDFpnP2VJQiGr5",
  "key17": "2EoxrYm7dUb22sbdCjdxxa7yaVJeKUesXEdWbdQQXoDa4sEQ43mVe4ZNCzmK9qPXXso5CCj9HNTodh82wsyVCMLS",
  "key18": "3kBoTu3NWL7TkLYJhSp5URRmNRTxi4jk6YwoMtiMvVwHKsVGKVCbq3PUepxszLGnzwKjVx1hwQGjJGeQN2ZnXLCD",
  "key19": "JiLzB8RLqQvb9sWzRWtaV6DfcjhCBfhojibkxi6mGySMH7Aa2FVyjS4gZepXHUh628gWAkSdip6nJ4ABcupVt9P",
  "key20": "5MMHFoZqDiAdeBUZ4EeAGLU87vGbmnZFyJfzC7FLYhy6Zb1FWWmSvqWxRZwJPtsY2C9mT6omqz8j3B8nX6qnmZB4",
  "key21": "tUFfw2sTX1WaspTHVgQhiyxmBoh9PsRBkZjTwgbfUHDygWgbDcfFvv7sNAkSGLHUpnR57hnAcAvKsxQqMmLQZEw",
  "key22": "5crn74jKTerX34yBAr2isEqVeycbgurAKjYVE9NwRTuzBhrvgE89iWEfX2efsBEaHRuFZZVbBDmbyU5XnX3m6X8B",
  "key23": "27oNg7xXvjqe4KUhK7zZRwZjiNpyH9Sov6PFWSBWqfauzgE2LoWawKN9B6hccfZRxt32WmsTjnU32VUW1SV8XVbv",
  "key24": "5bJwdbJdAmRBBQUYcMBGbM26uuC9fY8zhX2tdRZGuuba8RbKD3vR1HAm8TXs9W51ekJw8bpgiZpcVSrJHvtUtczA",
  "key25": "5yPVvzwPiDmA8RVU5yq5bssFqZL49uYZnyF4RXsduDxMA1bXvmriNd5nKTkrf2puicMvAVmCCkdYwFEzYvC3cL4M",
  "key26": "4aCHNbABvtMU228DyRQtNgMw9NpXywDfsbaKHBeLLvepnDwhuMXmdQkCJRRNLSbvZ1ysJnMNG4Fih7ARbbjc2m2X",
  "key27": "24dR6nqgSsur87k6zt94fBYNGoJK2wM3FQxstv831cRqtabgF9nfQivLbFpETLR2NyVhXCJeevt1UeFYHArLjwBo",
  "key28": "3Htg4BVkwVWcUED21T7jyDKC7kZYneRgnX1f8izDJyj6FE8akRsZGBbcAijou4EFz61LnwnK7HoeLcryYe4W8WUR",
  "key29": "2A7389EHDELNZ5Jjxh2CqVYK1rdhUraNEvJhwbRwQFQDYviUs5qD715BFrakP1BjPAivtfLuBwekq4esunCQjn1g",
  "key30": "2ftHgnZTSELXyhnZjboSuXELGLpVqmkDeuqsN6WrDb1az8KrYvBYJwcJVi5ZjgiFgjkuucy9rPgtaRf648q17Rdd",
  "key31": "4ZH74Msn1mPWYRHWXqQrW2861kK2NyNJXKPh5ttSpui2uCtBG9QL8Qb8beYRRHLaE67sPSER6vRuSfpqymm12KrK",
  "key32": "2zpMmoKvXKpWenoWdcHqcjB3N7Z5avze3ixVJgKLEMC2qhHo9aag65iHLZZpMS8CS8k3xaSge3XCxarpxkQuFS2K",
  "key33": "51UNYm7e68YcJ59ZrstV3tkV5CcWW54ZQa4wbpYz7EAsdKY2kuEfWDFRnd728Xb5avgK7AitBLFzpsjAioLPHQ2p",
  "key34": "QEBAGD3kY4jbAEHYNq39su47PW5GNqtoeD2kmUfhptZw3LcnkBCnMADaQaF1V4HN4NsCt63oeBtk131Wm2Dr2Uo"
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
