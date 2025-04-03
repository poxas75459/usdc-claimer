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
    "2H1oDixsqBnZgsaTEKsVdaCEpnqFujg57uVV3oBx4DxNS4ZhSAzRNkHJSU1vUVrokKd3CURg8U6VXAZbHZp31fro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "269bjb1nRCGTCQaspKGjCUv2BLV8ehVEmKo8NQCKyrbA6KwoPYVwC38fztQazcpABcU3Kqp2VD3Mh6QBcJ8FWzMy",
  "key1": "5JTVqv4jEEcY79uorDQcrcc5WCeeRBkN4eYiZi2KM8LQZBDYCdwa3ehtNY2N26aKzWBiTbNf4re2BhSvuNXQ1EPY",
  "key2": "5zEmr1bJxDQ7fPF2wcquGGt9V9JAmM9n1VHxKhGNQUaU9AajtTMruqbC3vpB4jKo2YAwxHMoQMxnLcV3qnyGYb5u",
  "key3": "2tV4QdxkGGtCwKP4Y5v2KwdL3ro9MvjmFGbovko27XW3oe8KePH2jL8K3smpC1sf4zv1L21EXWVn1moDbeAwhHV",
  "key4": "4Snku76N3ccKcV7y4EAqS72o58cRT6U7hZuYH7dU9fkx4Tpf8f9kBR8nnNy9fuyoJSzRUfnG6bRbsaK8nHEJbeMW",
  "key5": "55M7FC7iBpK8ewL1wjsB8Ej5oXiPLJDpT611Cbr8CjQxVFweqaste6Lz1sBDGARzvHkQW7JfYvHo32FDdpF4c9Yx",
  "key6": "5VTeCtGuV9pUu8mwDkfhqwuj5Fea3GvqE8GuvBXtwgWnvbwnsrPA6T5eXaxvZK2aGwzFkaED4gdFqnnb8ExosKyM",
  "key7": "4zYJZE26udhXtqVrLhYeq46SaMS6e7FDQhXjKEzoefJeDH3SnQMML4oiLKCRmHZRChdABBwwDtVzLuXnDEE7wUq3",
  "key8": "PsteeuxUobTQZavczwEoyKmGZL6yejsMBRvoTKaGfmBfw5nsnUaxn6YxWZK6oDW1b2NpewAeqYeDXHwc3gpjrwW",
  "key9": "3LXubk5DF8tbw5rgRx19U9ooCULeT2Qz1K5JDbHrAnAbjnHUZUjCD5fNb2xcCk677Wsqfixv8rV9pjPeq2FFo7Y4",
  "key10": "2cntTEGq6HY9xqDLL8LaKgv6dpB7snniAgKvVCobbcJ5TZG8jbD13znavhqcrc9hG1DCd4xagEZUgdL1fk7SL1JV",
  "key11": "45iQFmoyVGrwC7ofgzmzrzsVYpgtK7cGqRBKjNX8YBVGbrb7PfozEETr1kRZoVMW1eFGSe7NFPw9zE2QfcWLEjWR",
  "key12": "61ozhbwZyQwsu2v1kYksfVu37A4QFnGwDPPTwhhPKfnvjDpbaB1bVCS7rU7y4CgM8T8XXdSJpULKrCoA1QPGfyZR",
  "key13": "5dEGugRA6ofw49uCmN5UN6M8XBSUhExKiys7iNvGcqitsxr4HkACXvHUEBNgMNNtR54BTafy3m8KebCdkPL98HuB",
  "key14": "3qrk6C7gH4Nb9QcNR3B1e1fJtofLm2FbubJnQBtajSH8HqhMLfrbDJvpTcKCAhYdqSyKjnoc139a1uNF4A8dmbne",
  "key15": "4cTQeY9HBSUDP34bduM9hx3WJGFQ7xbjWfzBLgYRus6Jf286e3X9xYZepMT7dpckoTJJX7p6V6f97RbGkMA2aQg3",
  "key16": "3HvhwijKtTC7Mv63w2NzhL1qe3FHAzMmY1jkeGyAsS3MRHSh2Rgk17FraJwFJfYrjaXcDRX5psHVNFWS2UrJXkLL",
  "key17": "4bif92sb1ncAE3iRcq5pMRg2f2DDotLFk3GFPtD67S4WmzL69YsJjoTpkUSoi94qFgtaJfjbGzd34tPCGRjuajFv",
  "key18": "5Yi3NPHYaSRcr2hvgZApu1JK79tcMUDqToWdQB4W9v9KVY7vTgXbanGe2exZJX58ZtFbqPUSJTeXYtXb4Gdm9jVZ",
  "key19": "5KhAKBeuVc3emWgMQHzTLqcD7mafp8tBPybuDDSrf4NPguzbBTushLesCZkKpqSrUxTmNTngFaGHv2h5MkXeQTcZ",
  "key20": "4knLLEESgUYSFHucC9hun89SPigrff55UvvrD71E6XJQiB1x52wdCXW4BbjfmyLzveCyrnwAJotwbXcHgr5NXD3U",
  "key21": "wCBZXwjKY3nZXK3d1Ddw3C5fHM7C74c3WMvsDkc17CMnS2aauzGkgj4YLTBTxe4tyGvRuYrNaQeYN3c1V1bSrLY",
  "key22": "4txPhd1VN6oC7vFS8F9Rn4qGZc95qWqwuE2wsX3FKy7cP3CSrQwGopVBh1ix9ZLjaXPt3Qv75aMP7DSECjaFFmLX",
  "key23": "3pUJjEMfcgB5QHaS6PjgEwEPZR2YsBYtoBLLbvFVW2Ew6ZEnqmtEAsqfQq8yiFjyveRnFTf9r3iCtZZfvL2cCASF",
  "key24": "NWUn6srTHoUTffNYzk1AzLRPJ55Tvs5rPXRz9b48mmQC44Nwdt2A46fyP9znfaqcMJGqbCnK4rwr1CZfmjTib4z",
  "key25": "wfp3BdYGG74fzEBktNnuiHUfRfX2AzYpfqqrB8hJUWVrX7HxHwqCnX4VGvbddXHTdQsUwwVNoTEtLcjUQHP9zb9",
  "key26": "2FuntprV5auB8yoidkEfYnHo7GYDeyHCQV7dQTHYD4RWTiK4tq2xpwfsZLGofg6RGCSkgZvKp31JhwGM8Fyb8KFq",
  "key27": "5foJ3XCrdz3ETY4k5AxtU1UeryhCfnHz8C39S1zV3SuEjCwS4VkZkgXRDDTcfvfF58sDnj1JRwznwGQeccgQBCwP"
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
