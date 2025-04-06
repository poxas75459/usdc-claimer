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
    "3VRmKTfvgbNkS4zGkdjE6vTV1qYqB1KBtn1VUddbwxfuSxgGkof3xBCktvSrtXfGNFnLf52BPdmzgH5FQX6nBbSb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UyKPQAHT7yk5gWqbDTbRS5FP5f5C8qHSBSq2Ka9c6fZ63Jvv6QJ1xcRejkYMgmQxm87Vcm7zff8iCuzxLZUVf4j",
  "key1": "2HtLw8f2sfYv1FVdTUmEd2cycRsRnKDAw8e8qVEmqpBK8YGKjmj5qsBnD44J9KiKYqf45KKNjRJ8p1ubYjKK4SjJ",
  "key2": "4FRgNHoyyNXZhUYWYhcg6AbeHo43id7dYYy8RwtWHijCNu9oPFrCMKELKPp3cmLhyrQhQJcB2fY6C26HNxxuSWv9",
  "key3": "5p5tpVXwSR8WQ4AEGdKR7ooHg62uD92Yiu3bXta6X3xE8iDdeaXpR6xq8N3Ex7576PgvuqgiioJyEtNFEEJAKuyM",
  "key4": "4Y2cszLrMDVqrh7j6jog7qtDCgV3nRhwTyWvdGAbZSrcYmdPCF3ktko76pkv8qT9b9kCjT7eBTsgrnUtsLsha2ge",
  "key5": "33DYsHXt3JrGaVekKLh5rsdfyTYZVa6Jbc6JdDBF5kUdin9zgfHFKb95suE3cSpFEZUhVTBUmRFiX7kh3sEPCrdZ",
  "key6": "2K2CAH1uWsx6qZgvBqekpGa4f7weqztCofMoUJcLFzbdFzFTnLMY1GumzFgamwyDifkhrqPpPToA1rm6iBpiVmQR",
  "key7": "3GtRp3nZsUKuUZF1Pve5MSmixNnJ6qgfc8i5XKzBkbHFv5DZwkzoh6eCTtW6KsytjYLmLVMEYExxFfjV82hHNQFp",
  "key8": "5Kjn3dwJ7DymyVXRMLCBgsaCVdkT9PcHQbAvhA3XxDeY658QioFap2aeLmSnjsFhgcBFb3ffH425M4DHQDon15MY",
  "key9": "5wqauTHZ24en5hYEpdNMfYUJnot9seEshXBML28RMvsik8Ey1QcMhjNDGQkfBZtyZ8UV4vjaM9NwV9FmfQBvT4tX",
  "key10": "LMqSgirrakHDBxix1vj74j5gqk7VUv2YtpnR5stV4zcDJnZCyJrLGYMQGEd6ZayUKXDc2Sdm8Tdcjp9LzmNzjkV",
  "key11": "3EweKL1YvmXkuw8CJThYfQPrqLgnsxaKTnv1NJbLufxXcKnKyAh6im9SbqabEDZzdrnWK39qXBGsCzrzSiTVesDZ",
  "key12": "3fjJhAdw8vtTFru1aaJvbg1Th6CF1FLVYv3NUisg9YAx54RjdwWxPcg4CXMfjoGTCjYVgXZDRczfDaBZEfBfaBbS",
  "key13": "57xiDzW3LwKdZHrNbHFRa8BC9FHfCSvEBGwak2h6WQSPi9jsu1cH1vjqa4sETE9T1Xa9x8WAvvVHevdj4SpmJuuZ",
  "key14": "35HorqeWPW2dLYGo1Dr6SFN1tXCJPzTeTxrDhwBqrXr28R6Bmiw6zNkXrRAwiYYb9NgQRJ2kQg9ayw92tBBDmDzb",
  "key15": "4vFWdw3kgkfGfct6jfup7fWwugWrchh8aEwjrZ96qc3yzDFLYojepkP7S3EWQ5QhqSNtFusSbuv7mC1z4AAw5zv1",
  "key16": "NpFKXCvRhHhoJSucz2vMnJU5qdep1GWbe8VPJctFiawhuh4zwz2AouMvNt3z5cwwW93QuAVcSBAAaaxviCFMoW8",
  "key17": "4FEb4PpWy7Ck9rWdiphUvBhTpmUk2decZxESPsgtpRxG6KcnxpAqTLrVys6GLh6NKBMjfkdWLsFnGToaEiSeKmiB",
  "key18": "4PahPccB1RG4syQgkr3TDCmSSLVHitMAin6dQJjWkpfw23nEvM1iSFZXEEZqzHi743sbzrxo4W3jujRNYQi9mkeu",
  "key19": "3DEHfY9QfvzLaLKzSoeowtRTP2YjcKePzTePjavNKasfgCuAyVxs1JCC7iZokAT9Bou95UyN3DfDbdTPeb6PGXXK",
  "key20": "3FMfLDSmV8AFqfrqutMBNRY1526VjtGUAkzfdnfkhkkvq4i7o7nmKbuNd3tUdZuYpvVSbxgrMESYUGqhUL1cbsSa",
  "key21": "4vW4UQCZCxRvaHcJ3DoMyMR9n1DkLxaYSWAEctoYcXNiottunkdoMCJRqWGiYdPbuLtWVaAXJvv5ae6DUmWTSLAp",
  "key22": "4nKCk1137YKpumtkCL6vehV2rwjD5PukYt6s5mbW32dgvwjecQYZmpq3S39r6QEhn8QjwehUKA7zMRPFttKeHpNF",
  "key23": "5eLp7J638Uf179S2JpnpyNhiRPydgXCKvKdRXhkQELBqmzj1es9DggfDhqQ4rPqHhaYMzYSbVugAEGy9LZKqYHvV",
  "key24": "2ErxRzUMMbjFs3ToikHNyEdcw9Pdy5gc4U1wYdCR5zELNMpyxtpsr9s8yZgbnvivaz6Uv1vy7nS3quW3M4Bc9bCD",
  "key25": "2833939A2FsH5En2eEByZBUjB3hCPfCumhxPgZ3KN4ggpYhKVr9iKR455bUZ4peRaeVedg4nYBb4DVFf5RfVKZtL",
  "key26": "2ybaGgWnJ3oduAHPYwcJa25U1oiXrWYV3xE3fBn883nWoJLypPZ2FmbXaBACskMTEwgWZ2m7dxQowdwqmg2wqfuc"
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
