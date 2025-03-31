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
    "3LutayE6cWBSWSGCsdQhC6Fxb7rWz4RKqcKfbzhJMdG77GyqwG4dsWyU8nxX5UuTuc7jTkRkaWokAVQLQXp2HuXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BDrp8HMbL7npGhrH1fNwLBVM2BXGkwwot8aBQuqjYEcGudug3zGNTZZMan4bwfsyTBgudeVYMb7qs7D7FMMFgdz",
  "key1": "7VUFvpaC25GDPxR4DK9tVtYFh5791shFCPKvczqQE7aWVRjktCijyg9TVChnhvRxBxpU3wHCvBdjENt2RJhgY1X",
  "key2": "4M6ACybHKx2Bian7ybmq1KcJo6BpFG5oHChnjgHi5CfjwDV7pAsqRpKrHC1YYgY45L979c6GiPwEeDkTGRTiun8W",
  "key3": "31qJdQkfz4csu5ZMob28UVcjvZjVRceNQwCNwVfagmmC6xodFQVy3cMPmdZN4jB1NkgzGNZSHH4vZ8wSdZXoztP7",
  "key4": "5xTtZT4AFR4sey89pFPE1MUfjcnDv35DQvyGyMRd8wArvaDJqRWyptxP8M3uUjsTwuWDXKPwLiNFmQnB3JDASYon",
  "key5": "4eCqr4oGndgNQ3ppooX6C3ZSQ4ghZVex8cNbpBTm72GjNoqVowyGZFwgRetzkdosrqXZfd579ECxMHcosx3invDS",
  "key6": "4aEXQ9WiDHaSzor2QucwVQ64uMTyDec6hReZzZ7ewQD3Hpf6JQJuBtV93cQDVUSiWgzYvXj8vij59PiHjYH8JsFG",
  "key7": "2hddYchKWVnTCyJWMzz1rCjeCZZpUdc5vRCpoyhCY2w4SDeDJ9kR3U7tKfgDBo5doKPWeBQASGYoXUdfqa9qx14b",
  "key8": "2izhYkfao2KcBHwmRGUe53ksfgXSvFun8mUAstFPDebq5t3sQhfGQV5XpXFvLFDXdba8ty7tRcPLjVF8TZWuo5ky",
  "key9": "2Dztd6bKtRPqP7nGQdJh4GqfB5WEuJeX5wmnwjueqePfMmBQajjWHEZMgxk872V4b1c7BufZNS1vgMDNHYED1BSM",
  "key10": "38JGbNpFMALaLvjfQVUPZ9jT411a3bAsfyJ7WExtqEXCVYGQNdWwfJMJHbrXnaoZ1JoxEXBo2vuAf6Di5qudQfBe",
  "key11": "4bH5hWTG3ewcXh3yyBEWdh9X8jQuAw3YFvhCVjPk76MESNWAYfS43XXRd1CMXksPB9tE6QF6G8qFtpgrvfefy12e",
  "key12": "YPtNHz6ffohNZek9ZjAGhQFvVYBi92kSmU2SWeXp1M7jcKPayidZeYjTygdn5BRPDjQDjNQXPK8wFHEaQXTwgTZ",
  "key13": "36hknbb8CDZoWEHpjfanizgxg5tYPDLQq7JotEcdg5D63LAhbyuM2k471RQ8gYCbz1GCbn9dZRZ6Hi2HEqCAynXj",
  "key14": "kKKdx3EsrhP659ZXjYu46txbPKnP8ENYqK6PswL6oTMGmQ3bF9srFWeheCevrHUkyvX6We7sFn6RW1359qLrarL",
  "key15": "2FeqDSPAm8bsChYvWpshcp2nH5e4iKFV3GU3sc3Nf91joTN1pmneTEeh57rbwXkj5L37Kxk4P23rts9LQdcKTuyi",
  "key16": "3nNxmQMZYYZkpGPyLFT6Gybh7oakNTZLHsTH5YUHJfvLhtzF8UfYCLpHpZfSAij9cc7QJt1irv5JtZq6JL94xM4r",
  "key17": "bCQfvYZjp4eFBUrGLKaAiMoPkfoJiQARfC2gumyLivzdDYJMH2Sft5bx5zmU5orCMNKhXowxMkeZdPGVVFcSgWa",
  "key18": "3SdngCZgrP1oRP4bFD8MvY1cgaXocHLtEmfGNTd7dM8xhrhNKUwE6tmFnXxwptWBg2s92MdEpFkAETWLoxF84Ypi",
  "key19": "3LBWSd2cP7ggPWuxNjhBFUNa8ZQpRQkbPqC9ocGaVFUWZjmDk9uxkccYxQ7VeDWDED58DCuJMccJSZK9B3WJwdft",
  "key20": "28FtFYyTpmJHednK5u3nFjfMpbbu7NzK1FHC5ux2ad2UsdrGFSkE4FRam3nZ2czjxYzz734qnjeQYxp39S4jHfT2",
  "key21": "2SBmjCzY68u312Zb4RSxZzpKqu38EkvVuDJvbCTkZLKrfNht9haq8rwGahyrf8ctayuwh8jzG9ifoXL6JBVccABq",
  "key22": "3fj8uarZzSAE72VHMybbgFj9ZJMJEpm8HP7JkVU9N1JPNdyzcCUMukgnrbTT27vtbPtnsSfJe658GJU96FKED9C2",
  "key23": "23RKPFMMJZUWZWUVqrErnojrUePXVFSjz7vZ5Y3SFcaaUizKXRG5GRvy91fxuaQVkadKDnjnxMY3qRg2wJoQSob8",
  "key24": "5kYr2AJACX1mKwUM1oytiuHzfvuxf9fSgA6GpcVrtHY5iS7wJua8QEuVQyRPRDMciBbvrp65uX6gX64ngm1yH5qB",
  "key25": "KPrKhc81fhhnxoH6RP13AokeoQGHvW9frPuAR9earKz4kMN6Zi98AZzrDPJLybd98Dqus2KLsEkfTKorALcywAf",
  "key26": "5zikuyr2mRi8yP2utYcxFM4yFMpCNpBKiCPMMZUfs7mPDxLBxrsaZmMwuXKZuX6YorLdFMhWbJyWk5VKf1993Qwu",
  "key27": "hvBVHRS2owog3JPwgBnPsTkwpuHyDcvNvL2aFTKEVM7GPK4LLKuMULA1o7YPSZXFetr5g7vbVzomDnrjxHyAPQc",
  "key28": "3Ja8EYG38UVJRCdy2sYKL6NJAGpvyQ9TTC8gQtL9fdhNj2UDedxhT5kdyPhDxwoKNMoeZqPscxJCEjgEupVdt2cN",
  "key29": "aSKWP2hKnL25QRknjJTJ3R6TgpzW2QLvnAnbeVRQc4kWjdBqBSWL3kB5AP63jVYdzdp23kMPKjmDsabu3XEWoW2",
  "key30": "5wKBDHmyPPjW6BxBWJiuZUX3PELhyY8pLbtyefncJuYGmJCVwabvoaZL8DL6zVXtJJRvXYwDr3YBkWBd9A6yhsYa",
  "key31": "31Yrx4FRoAA6jvHedCRHn6tasuqxqUVV1V6ZvgeGeb4VrJh3MpcMAGAtxBruQCJLiuGcPcYBEZdMPfCbCmt3jEu7",
  "key32": "4CtcpiD5Euw3NNby8tLisV9Ux2jdN75LC9dctKHNLsWdTqcjrUeFcAW31urTdYdFW7iWm5uqyZ5ThRaiggND7d5J",
  "key33": "KVp4DzjdmKFGrScR1c5YsSRtCBi2YZ6PPGGxYu9jUfsVgP5mQWeC9kBue52pr9qDG9VdeL7CpBJws4tBxYV6GeL",
  "key34": "2oTXqUeTkv5XqmHRKWN8FUCkBZj7j6RS9XqwpfgtQxSpBF9ActSMR5P4M2WBiM7PUhnqD5T5aeWzbG1mWLStjGWK",
  "key35": "tHSfsfjB3AdTjh8Uc8Qy5YuZ7iLZrQSGpAKRVXUhb8Su5drFxB9mC3s5nD8o5Grg5X3gBZ7SBUZBz5rjVgLZ4av",
  "key36": "5RQZ1bwVUaWLCV7rdx8iQKfi7CFPvtLVdo4nYzxHRGs8K2pDs3NvvrGTYcZaUEWha2Q6ySgXcnh4rkAaDK1sCszi"
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
