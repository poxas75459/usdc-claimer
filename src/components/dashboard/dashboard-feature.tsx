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
    "5X6bF26tSswg5o53cksj8vxbNdt8Z7EphATkPJJTJfRssbMgAhe6uBAMXdyiNrk9wqwjZiUAwRn5sP7JBPfqmdDV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VyEXhJkusjrBbjEgSbVf4jREY9kt9mps8f5EgDcnKMFHb1ZLUQqcdkrqggHeRwXFPhdiuUU4HaWvjr7LRxSgfxP",
  "key1": "2JG4u2WojNJzfQoq7He6EwRKf78CGXfiWKHLrFwYD2kGNrALsp51KMFC2G3BK8sGqaDLP5CGAAHnXwJqyg1SFPJF",
  "key2": "d3r8ASpZxztui2pBjpECGPFs7TiSAHeRVzNX7V3F93Mz584xkXYvGp98gy72GVdvAr8wri8Puf4tFcS3aHn8emx",
  "key3": "5C16yszznF19E3XU4tFnDrp7qKgon8A8EPR6MNi9UV5UgMaig7NsbcuPQGdRCA5EzDXyacaWKoJevheVP298mQWy",
  "key4": "4QZiLZ48QEUTrWuujbcC7NUkPCrDmpfqZtmH27EFoB9vEBV92iJ2cYCLJaNW41YFoQUyjdECruozZjzvZrL2KFrA",
  "key5": "4Rj6SfiLWxVspmPspZQD6XKaQSJ5XyfKHFL4QdBPXzaYoZMp4VYrZ1nRdFWhzX97iPix7Qx2vNikwNDRhLvwYEXW",
  "key6": "5xHLcLY8cc1b7zppzWFQJt3XQZ8SDs8bnCjmFsyn4MTchiMdde6BsnReZDTZcF1eeP4qas5JxGzCtMe9Nhqca5JP",
  "key7": "4B2CKzgRyBuEUjzReuhd4g3qt86re65zBrSYUHVXFNubLy2yaqdj5Ya1euQyC4x7dFjy61Std6kEC2wx83dJdJpa",
  "key8": "xqdeaTZPcA4pjxFtuDUUcv9UQfSTgxL8AemfkkxrA8VnWknYpu4Ug4owJujXhEQJ1mVQPQp4jkbchG3Nj75BBf6",
  "key9": "rscGrkZ9GS2CHjjfk5PVkfvjfjirSPzS9yoVMG3rq3gvNbbJHFtr1dF5xfyvnNhDkg6Va4X22iwmWnN7jKCaZ55",
  "key10": "3bqDWrJg47domDXNVJijEKy3Ts4kAxFwak3U6PCmqBtaDrTZ16EYAJVzAXby1BbvVR9gkwppSnCKS5CdnbBH87xr",
  "key11": "tCyS5L4nWdKGXMjPErKQ6H7ZqYcR81oZRVe9PoMMNCgan9dBC5jaVkVbeNGUR5dvUCcVBAAWPNMdQzNxJUBBxNJ",
  "key12": "4P2iV5sCFvyPvBeShv6jsStkW9shxfRzU5qc2BXkKffCZNjgqkH17jK4GmS5p4PRMXtuCHwJ3PZEusrygRL2SGbL",
  "key13": "4DR7wN2fodLYTMAmfkgTe8vTm8ZiRhggAUhzqkm3KGjcFMJzK3J3cLEb9Bya11i1R1CdE6f88n1EnYyYBt1p9mU4",
  "key14": "3UoHSaKSYbPXLMmc7GGbpd7UwczpYSe8nXaApBnVjmyZxqCKZVP12D2CwrHW8Hb1m9fqwCBuqLtP5HfMe7GgKQQp",
  "key15": "3xVnBwXhbRb6ce95o1TMawz5giTxF1wcQ4H6hYioTf6RptkAoCrdFgJaZm7mRfVv28zBoWpoh6oJdxzow7z3XVVb",
  "key16": "2fz2Z24yNASUbWD2SeoAMyJarBbvZJs8mPoy6YRQrPiKJUaCcQAuddjao1sNKQaCANdw4kDQs4MJyGje9h6Bsmhh",
  "key17": "5Xde1Wc2BMmw1RW7haxda3KxTekckhDsjyEBX1naWED4mpV37dah2xz8YtBMWCkV6PEgcN4ijdMbvwBAvtYEvMet",
  "key18": "2cVhY7gzYV8ZNskzTPcR1cc9rxRkZNxSxR9JvuERmwVr1K3HzBFMfHc5g1HDtXnrJf4JYrS7927nYot12fYLZD93",
  "key19": "2Szyc7hfXAewo11STPqypPTfXdNHirU7SrCC6Mw6W3J6qui3qS7Pk8VcxjNp2QJY9wBdsN7zCMPc3vSETpF83qh2",
  "key20": "3BXva5Dr1Pjy1unhF7eitpvSSziPR2L4DmQVP9rFWDx7h8YygQY6jQQcXPQejhQPJxYUr1ibYsKpWtEq9RZiQW3U",
  "key21": "oUhVD85EjpYP4zXhVgu847MSJMeuLtBKE2akQtc71vqWqMUhjq7rW194eYPx8SxSu1ri7Ly5aZ75jfp3PH1ffjb",
  "key22": "5ujpP7GBmieCMG8eXwvSyJUYF2osXXrE6mqkUJXVsXDNKsdNmKUAtnguMqaRoijMWUb8uHDdJok7iWVTdCBW7JCS",
  "key23": "5ewZ5tXadcNqGPUwbq43QFs17W9vfbqTVH6Uw5aEsN6Jz9N54h9YCHMdsGwsm9J9DB4BTwZXqwfrok4kmc3uwXhd",
  "key24": "5iNVfQzSwdtLEwXcoFPyC5UwA9bnqjikoPtGnD9SWZHWbhUdJMa8cfv8p2ZHgxwoirZEbsfNDtn2FTC7iuHZdTsY",
  "key25": "4zLG39H1vDPtg4ggvqEqbRvgFK8gM9CFNDcbFKuKcfmYWTkX6H1uLAokMNbJkfp26iqqApjM69b5P7hKxsUpMZxa",
  "key26": "4zmMZwYeECqqD3Ao9UEtkiatEZvqueR9VNvPxSvaiQJQN4EQ4WGNWP3t5zUN7xfuQW6x1rnaLVNN6Hv9xQPi3qc3",
  "key27": "3Bp4Te39nbvhZkQDHaeomdvUyPieg1a1ePkjMk7wQuCH4aZPfzQQ9wc6uC5yKctMZU7ZwKVigVA8MUmvZ9JGEYBa",
  "key28": "2LQ8udYjEDEY7PByDxgBrRpzQe5KuDZ2Q4BqWge1n8b5UUE41tfgttq1mGtJ5RC3S2KAz1g5zhKh3cidbXjDyghz",
  "key29": "52hN9SDY2kfBAKWpyehwU72Ccc87r4hNAShCDAgmC3dkK1hxyXH6kzGXvk456Qhcrph9BFJQSoMbiBHbA6rLFd3A",
  "key30": "3ohZkL8Hhs8ooD8N5iP73E2PSVKSWX5XX7Lsj8K3vYBrRodKumPMP3St8tn9KjrWPnNHYN3DcaNho3WkgCgw9X2k",
  "key31": "3fmnTD3Sjrvh9ZaEZ1YukVhw17kUedH2L3kkmfu2ZaDyM8JyrwFQrLgtb22C77WcqhvALZzSSUwpQWaJBxwQa3pg",
  "key32": "3f9DNdsCNsRHRXsBUfhq6zAmvvSCjnXijzN1b9hdLW87H43mQBjv7TFEmLhZ8BX5c3Mk1RUk4XEhBAt5gK9hNkL2",
  "key33": "3b63t35ctERp2JomHNvZS9qR1gJc2CnAHNjeief18QXCFeJX9KVrkCpozh3ZZn6wae5wfrPRc9uqoDF4AnEz9Uk1",
  "key34": "2E5FGrTbieQ2FcAy3QPiw18zUZqU1iJPZL5UDGh7zxCdQAoUeAMZ43QnQzetkkcJnfokmjBPMSg9CPB4fqcabj2W",
  "key35": "JgqHPsS82PDqCL2K1aF5SiZ5DZdaYdJJ4wKuqPaaPHoXAwJVA6D5U3y1sScH2xFxXiLyY6kPXNnnhkEzDVDeGh2"
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
