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
    "TsUR5fRNXyL6T2JdUojs72PtT6KGNW5XGxgXLA3vAa8nMxjmmhspUxtvRqiiRC2YjiZ7gCDgh9uxgjEQWGMX7xn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "451q4iKxhr15TGC4SMvJoY1Qtc3qMWwn14f7RphUX1a9R7PmLwCVb7PkM97EBP1temxBMKZq2McwaeH3pVxwWbbn",
  "key1": "27xfXtsKLXL5aikwSjCHJPkkmPmhepFgAHD2jTM2YivjFrVuqf9tqS9AAhumBqUnahDyhR5JqxWrDwnzM67Vm6gT",
  "key2": "41AbHiJuPi4ybzjhPKwtobJLBPqigvpPfmWVAh2MkbtsYYdjwkFXStNy7QpzhTbB8eysmswr8X86M6aB8t2Ajxhm",
  "key3": "EnFnzA7B86xEdn3WbyP6ZrqFL9uVXUCUhSYiKFC4TtvZgWh9cBrFWbt91QCakydcJow3bVP8zJoU1qvf7FF1qdA",
  "key4": "z3VfrmkNdTM1n8jHiuBY6qiyX5rJYW27j157VmDwMZV3EoMeopb1uoyWYuhwsaDBmXgcrN4PZztgVMyzfWn6xh8",
  "key5": "3jD2ESLRimJEPrpZuCYoPDvGTcfTjeXouEgXG1tKCvvpa6SkcnkqoFpMuhYzXB6yxNf1nKRu81nR3NVXqY3nx3DW",
  "key6": "5oSh75SjfpQ5yUFYhD4CbJdnh7RpwpBZvyUL9C4V7hNrBaJshzYLHdHJuj7DKquCfc5AZLsWom9jTdYkKhA1aePg",
  "key7": "5UbsdRnXiLL5BhcqeCZLbB7sFU2jX6u8kyg37hmiespW4fMmzz39NLZ2sfQ7ewuhfYnceE33HkHqK9NNJzu2BdL7",
  "key8": "ApT1d6X2BwXujTKAfQ8TUF6c3nvYtJ1DPjx1HWQnUkRVDjsgxTaHEJUziLEAWZpwENBYuQXEF5i5RiPHK3ADfh7",
  "key9": "2qdX77gmcNYzhTiDtTaFHNbF6d9zp7GkM74k92t9nYLRcJ89W4kffqahk2QzxZuuK6kiKJMZaZaPYuj4eVJQ9QNB",
  "key10": "2NEjBiyU23zRUi2ktPmQVptvVUMC9SssvmBr7rhq3Dq8ZFZaLRLZTBsuLAifkcNjfoFHG2iQtbpAYwDq7XNGTnrp",
  "key11": "2fQDy6m1J4SeL1A2bCiNyUKH9YabiTFsuQJQhUAJ9HZNJyWtKaCdtAUQA84nGPhGC6VGaJCXZejpgjuym3UScYMp",
  "key12": "3C3fXSWS6iEt3ovvGp72nqxM3sAPF3iG1Pqd9DrSY4DsVS3oAh9KbVuh4TkkMx2NJSjauikHYT1uHkJYwc1PM4RN",
  "key13": "3T7B2ZQaFKdjYjKNq2bwdBfndE7R5hgDkG7vS2x36oKUHDHGkRkCWuvUe9AsYnLRHn6Lfb5zjc1Lrai7jGdxvU3p",
  "key14": "2tyH8qHh5MFxsuDHBFZkYrA4ZFpexiDtFv3eEiMRQP4K8DTH7n7G1Y5tCZGcyC8WqGjt56mSuGNzDaW3Fe6iFS9q",
  "key15": "4NgHgAA82qDy9FAf2dax842SpYYpMysGNqinGiAKWJPKBp555LuvukEz5uzz4QQnGCcidpf7Ci1Z9VXvHqgNTuZe",
  "key16": "38YGiyPzCq441sTWCzy2zBqDQuPVM9vTezKCqdiJbNrXmvqbuthdAE1xac23QWxgJkbkVo4UXCr6BRsKVfAcxW5j",
  "key17": "373iNowLDCafyhdLNmBykWpuYqHCqvRdgaGnTiiNb3Dv12ttZ295soBpgdg6FxSGTeiw4owD1JL9cXyBjeTwzbgi",
  "key18": "2GzF5gaW6YiuZ3cKDnXzh6iv4a24Y59GgBM8EvQkQ6myydU6oSohAhTNyHRA8Em4Xjocvbjws8iC1fampw9NhFWT",
  "key19": "5QNZ4KgfaUaVHcsuKH9Covz3rP5bY2wCD43jzNZgxmj3AL6NU8KHRPE9gzHrUWJpL6KoQYq4e5dzaPdQik99Vk1t",
  "key20": "5d4qWYA88bxeKKHjUeTNwpm4Pwngoo2ftgkf56UcVwN3rPuFnS8KLLEGv6X6Lzd72bBV2LgGUF9mHoyibopEH3Jw",
  "key21": "4XYSrWH1JDbPWik2C6ECSVkYQ8SuMyyNxhF6Mkqu6yezRnyyTpAomWtAAo2EpmSmKP7hMNmMrthyb3pTEgTpiaSi",
  "key22": "2CPffaVqnyR2jG2GzF5fDbxV37gmL14Q38Uf3rSQNhfKgVuaemaWcyF6dhMJhy3nJssz6jAXBjQURRVEE78XJHvR",
  "key23": "i43LuNHLE13u7Dk5yjDs478EVnC4cXaZkMs9ZX83qkme5Q5cg9NvHHCXuomKJYAT8D67jfYJDpWYxSLGvcoXXgS",
  "key24": "2V77DuXM8qLt8xfyNKFH5RZrsPm3GZURBcu6jx1btEPBLJD8t1gG1TgLsC4A6xB4r164wVvncoTZKncKLFKuvpbb",
  "key25": "3czPyrgG8pYSwzivHM91SLfmzdHQwCuc1cNTr5gBVnLXfJAkQup5Yvcps1BshWKNpdsmtuLQLtKHHHchs8NuBSLm",
  "key26": "2MjYWQQ6ffgfEUuavtV6aRvPLEL8M9mWDj6gEKztGKuBYQNBxX76pQ9tuJcvqrDyGuJfF2PVqJtm2XyX8F3VNQu6",
  "key27": "gWcJPWsq9nigAn72ZMdjD7qBHULtXAj4SsyiWP1vEX9823vbiobq1fQPDbrWjgCguJrABp3yqsMg9AadKQzG9hA",
  "key28": "4J6DvPFQRj8Y69di1Hgn5LxEzQRyu8V5JRBbeD7o2zpW9F83NUZfN24svJJqKcbvvQ6cZ8acCtJhQdp9evEBxJ8F",
  "key29": "361jaeeH5zkXtXp26qfxvx6NRgi157yg9XL48STKgacAEqDFrzfFpenV5sNSsWup8QH2rkpHK8GHCEoCJ2MnF7S",
  "key30": "5uLEktXAx2FXuNvdRptrBzsWEfSFwNzXzKHhsdZwuBpRmS7Efvp5t4FVRAxzajVPuAuJiB5JswCQ6RTyUp5ogtj6",
  "key31": "4QdrK8Ao1NkL3CRx9r8fJ6qE4TBuoG3JhLJGy2uj4kC8JLHVoeh1wNGLvqeLU3XgDD8TN3poR6sy3Uy3hGq6gFXd",
  "key32": "UovhybjyB7N28rPuj87rZTmz77ZC5Dgkpqbidq66Sgr9CXmX1GZgWrwotsKEpeiJ9evct42kQN8Q3iU3qUc1fnB",
  "key33": "2zF2RygysPaVgSASRdhFptoQEe2aFncaxY59ArwAbdazoTzu3eLgfomMuNtebg467A2L2wEV1nry65mzmqEa86Lt",
  "key34": "2hAke7FpfxmkyWQyRBEFyeUodiAPHvmCjLgPyn1co5Bk1wQ3duq4gz5Gto7b2doQ58TX2a9Kh8AgoX1aQ33EH8Mj",
  "key35": "3tH7wNVkJJRaVpdk6ZD74hxwo5jtR5G1tmvFYDBiXusmgP5n7JV7xgR9Cv1d15G4ACAAHBcvFuST5qJvsyFN2UPh"
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
